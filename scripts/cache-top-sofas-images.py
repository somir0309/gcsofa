import json
import os
import re
import shutil
import sys
import urllib.error
import urllib.request
from io import BytesIO
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont


ROOT = Path(__file__).resolve().parents[1]
DATA_FILE = ROOT / "top-sofas-data.js"
OUTPUT_DIR = ROOT / "assets" / "top-sofas"
PLACEHOLDER = OUTPUT_DIR / "image-unavailable.webp"
THUMB_SIZE = (720, 405)
TIMEOUT_SECONDS = 12


def slugify(value):
    value = re.sub(r"[^a-z0-9]+", "-", value.lower())
    return value.strip("-") or "item"


PLATFORM_SLUGS = {
    "亚马逊": "amazon",
    "威费尔": "wayfair",
    "抖音海外小店": "tiktok-shop",
}


def read_data():
    text = DATA_FILE.read_text(encoding="utf-8")
    match = re.search(r"window\.GCSOFA_TOP_SOFAS\s*=\s*(\{.*\});\s*$", text, re.S)
    if not match:
        raise RuntimeError("Cannot find window.GCSOFA_TOP_SOFAS object.")
    node_script = (
        "const fs=require('fs');"
        f"const text=fs.readFileSync({json.dumps(str(DATA_FILE))},'utf8');"
        "global.window={};"
        "eval(text);"
        "process.stdout.write(JSON.stringify(window.GCSOFA_TOP_SOFAS));"
    )
    import subprocess

    node_executable = find_node()
    result = subprocess.run(
        [node_executable, "-e", node_script],
        capture_output=True,
        text=True,
        encoding="utf-8",
        check=True,
    )
    return json.loads(result.stdout)


def find_node():
    bundled = (
        Path.home()
        / ".cache"
        / "codex-runtimes"
        / "codex-primary-runtime"
        / "dependencies"
        / "node"
        / "bin"
        / ("node.exe" if os.name == "nt" else "node")
    )
    if bundled.exists():
        return str(bundled)
    found = shutil.which("node")
    if found:
        return found
    raise RuntimeError("Node.js is required to parse top-sofas-data.js.")


def write_data(data):
    body = json.dumps(data, ensure_ascii=False, indent=2)
    DATA_FILE.write_text(f"window.GCSOFA_TOP_SOFAS = {body};\n", encoding="utf-8")


def create_placeholder():
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    if PLACEHOLDER.exists():
        return

    image = Image.new("RGB", THUMB_SIZE, "#eef2f6")
    draw = ImageDraw.Draw(image)
    draw.rectangle((0, 0, THUMB_SIZE[0] - 1, THUMB_SIZE[1] - 1), outline="#cbd5e1", width=2)
    text = "图片暂不可用"
    try:
        font = ImageFont.truetype("msyh.ttc", 34)
    except Exception:
        font = ImageFont.load_default()
    box = draw.textbbox((0, 0), text, font=font)
    x = (THUMB_SIZE[0] - (box[2] - box[0])) // 2
    y = (THUMB_SIZE[1] - (box[3] - box[1])) // 2
    draw.text((x, y), text, fill="#667085", font=font)
    image.save(PLACEHOLDER, "WEBP", quality=82, method=6)


def fetch_image(url):
    request = urllib.request.Request(
        url,
        headers={
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) GCSOFA-ImageCache/1.0",
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
        },
    )
    with urllib.request.urlopen(request, timeout=TIMEOUT_SECONDS) as response:
        content_type = response.headers.get("Content-Type", "")
        if "image" not in content_type:
            raise RuntimeError(f"Not an image response: {content_type}")
        return response.read()


def make_thumbnail(raw_bytes, output_path):
    with Image.open(BytesIO(raw_bytes)) as original:
        image = original.convert("RGB")
        image.thumbnail(THUMB_SIZE, Image.Resampling.LANCZOS)
        canvas = Image.new("RGB", THUMB_SIZE, "#f6f5f2")
        x = (THUMB_SIZE[0] - image.width) // 2
        y = (THUMB_SIZE[1] - image.height) // 2
        canvas.paste(image, (x, y))
        output_path.parent.mkdir(parents=True, exist_ok=True)
        canvas.save(output_path, "WEBP", quality=84, method=6)


def cache_product_image(product):
    platform_slug = PLATFORM_SLUGS.get(product.get("platform"), slugify(product.get("platform", "platform")))
    rank = int(product.get("rank", 0) or 0)
    file_name = f"{platform_slug}-rank-{rank:02d}.webp"
    output_path = OUTPUT_DIR / platform_slug / file_name
    relative_path = output_path.relative_to(ROOT).as_posix()
    image_url = product.get("image", "")

    product.setdefault("originalImage", image_url)

    try:
        if not image_url:
            raise RuntimeError("Missing image URL")
        raw = fetch_image(image_url)
        make_thumbnail(raw, output_path)
        product["thumbnail"] = relative_path
        product["imageStatus"] = "cached"
        product.pop("imageError", None)
        return "cached"
    except Exception as error:
        product["thumbnail"] = PLACEHOLDER.relative_to(ROOT).as_posix()
        product["imageStatus"] = "placeholder"
        product["imageError"] = str(error)
        return "placeholder"


def main():
    create_placeholder()
    data = read_data()
    products = data.get("products", [])
    summary = {"cached": 0, "placeholder": 0}

    for product in products:
        status = cache_product_image(product)
        summary[status] += 1

    data["imageCache"] = {
        "mode": "download-first-thumbnail",
        "thumbnailSize": f"{THUMB_SIZE[0]}x{THUMB_SIZE[1]}",
        "fallback": PLACEHOLDER.relative_to(ROOT).as_posix(),
        "note": "优先下载原图生成本地缩略图；下载失败时使用本地占位图。截图兜底用于后续真实产品页抓取流程。",
    }
    write_data(data)
    print(json.dumps(summary, ensure_ascii=False))


if __name__ == "__main__":
    try:
        main()
    except Exception as exc:
        print(f"Image cache failed: {exc}", file=sys.stderr)
        sys.exit(1)
