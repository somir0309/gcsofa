import json
import re
from pathlib import Path

from PIL import Image, ImageOps


ROOT = Path(r"D:\GCSOFA\UP")
SOURCE_ROOT = ROOT / "UP"
SITE_ROOT = ROOT / "codex"
PRODUCT_DIR = SITE_ROOT / "assets" / "products"
THUMB_DIR = SITE_ROOT / "assets" / "product-thumbs"
MAP_PATH = SITE_ROOT / "product-image-map.js"
DATA_PATH = SITE_ROOT / "data.js"

IDS = [
    "1606", "1741", "1796", "1898", "1940", "2002", "2003", "2006", "2008", "2009",
    "2010", "2015", "2020", "2021", "2022", "2023", "2025", "2026", "2027", "2028",
    "2029", "2030", "2031", "2032", "2033", "2035", "2036", "2037", "2038", "2039",
    "2041", "2042", "2045", "2047", "2048", "2049", "2058", "2059", "2060", "2061",
    "2066", "2067", "2068", "2069", "2070", "2071", "2072", "2073", "2075", "2077",
    "2078", "2080", "2081", "2086", "2090", "2091", "2092", "2093", "2095", "2096",
    "2097", "2098", "2239",
]

IMAGE_RE = re.compile(r"\.(jpe?g|png|webp|gif)$", re.I)


def natural_key(path):
    return [int(part) if part.isdigit() else part.lower() for part in re.split(r"(\d+)", path.name)]


def save_jpeg(source, target, max_side, quality):
    image = Image.open(source)
    image = ImageOps.exif_transpose(image).convert("RGB")
    width, height = image.size
    scale = min(1, max_side / max(width, height))
    if scale < 1:
        image = image.resize((round(width * scale), round(height * scale)), Image.Resampling.LANCZOS)
    target.parent.mkdir(parents=True, exist_ok=True)
    image.save(target, "JPEG", quality=quality, optimize=True, progressive=True)


def load_product_map():
    text = MAP_PATH.read_text(encoding="utf-8")
    prefix = "window.GCSOFA_PRODUCT_IMAGE_MAP = "
    if not text.startswith(prefix):
        raise RuntimeError("Unexpected product-image-map.js format")
    return json.loads(text[len(prefix):].rstrip().rstrip(";"))


def write_product_map(product_map):
    ordered = {key: product_map[key] for key in sorted(product_map, key=lambda value: int(value))}
    MAP_PATH.write_text(
        "window.GCSOFA_PRODUCT_IMAGE_MAP = "
        + json.dumps(ordered, ensure_ascii=False, indent=2)
        + ";\n",
        encoding="utf-8",
    )


def find_object_end(text, start):
    depth = 0
    in_string = False
    escape = False
    for index in range(start, len(text)):
        char = text[index]
        if in_string:
            if escape:
                escape = False
            elif char == "\\":
                escape = True
            elif char == '"':
                in_string = False
            continue
        if char == '"':
            in_string = True
        elif char == "{":
            depth += 1
        elif char == "}":
            depth -= 1
            if depth == 0:
                return index + 1
    raise RuntimeError("Object end not found")


def load_copy_map():
    text = DATA_PATH.read_text(encoding="utf-8")
    marker = "const GCSOFA_PRODUCT_COPY_MAP = "
    start = text.index(marker) + len(marker)
    end = find_object_end(text, start)
    return text, marker, start, end, json.loads(text[start:end])


def write_copy_map(text, start, end, copy_map):
    ordered = {key: copy_map[key] for key in sorted(copy_map, key=lambda value: int(value))}
    next_text = text[:start] + json.dumps(ordered, ensure_ascii=False, indent=2) + text[end:]
    DATA_PATH.write_text(next_text, encoding="utf-8")


def classify_style(image_count):
    if image_count >= 9:
        return {
            "style": "多图组合",
            "fabric": "亲肤布艺",
            "shape": "组合沙发",
            "audience": ["家庭客厅", "样板间展示", "门店选品"],
            "homes": ["客厅", "公寓", "样板间"],
        }
    if image_count <= 4:
        return {
            "style": "简洁款式",
            "fabric": "布艺面料",
            "shape": "客厅沙发",
            "audience": ["小户型家庭", "出租公寓", "门店补充款"],
            "homes": ["小客厅", "公寓", "休闲区"],
        }
    return {
        "style": "现代休闲",
        "fabric": "亲肤布艺",
        "shape": "客厅沙发",
        "audience": ["年轻家庭", "日常会客", "门店热销陈列"],
        "homes": ["客厅", "公寓", "休闲会客区"],
    }


def build_copy(product_id, image_count):
    code = f"GC-S{product_id}"
    meta = classify_style(image_count)
    return {
        "name": code,
        "code": code,
        "sku": code,
        "category": "欧洲款式",
        "summary": f"{code} {meta['style']}沙发，版型清爽耐看，坐感舒适，适合客厅、门店样板间和线上产品目录展示。",
        "tags": [meta["style"], meta["shape"], meta["fabric"], "多角度展示"],
        "specs": {
            "型号": code,
            "风格": meta["style"],
            "面料": meta["fabric"],
            "颜色": "以图片为准",
            "图片": f"已整理{image_count}张多角度产品图",
        },
        "views": ["视角1", "视角2", "视角3", "视角4"],
        "highlights": [
            f"{code} 线条简洁、比例协调，适合不同风格客厅搭配。",
            "坐垫与靠包视觉饱满，能突出舒适感和居家氛围。",
            "已整理多角度图片，方便客户快速确认造型、颜色和展示效果。",
        ],
        "homes": meta["homes"],
        "audience": meta["audience"],
        "suggestedPrice": "按配置报价",
        "internalNotes": [
            "从本地已处理图片批量上传，后续可继续补充精确尺寸、成本表和工艺备注。"
        ],
    }


def choose_scene(files):
    if len(files) <= 4:
        return files[0]
    candidates = files[4:]
    return max(candidates, key=lambda file: file.stat().st_size)


def main():
    product_map = load_product_map()
    data_text, marker, copy_start, copy_end, copy_map = load_copy_map()
    uploaded = []
    skipped = []

    for product_id in IDS:
        source_dir = SOURCE_ROOT / product_id / "1"
        source_files = sorted(
            [path for path in source_dir.iterdir() if path.is_file() and IMAGE_RE.search(path.name)],
            key=natural_key,
        )
        if not source_files:
            skipped.append({"id": product_id, "reason": "no images"})
            continue

        product_dir = PRODUCT_DIR / product_id
        thumb_dir = THUMB_DIR / product_id
        for stale_dir in (product_dir, thumb_dir):
            stale_dir.mkdir(parents=True, exist_ok=True)
            for stale in stale_dir.glob("*"):
                if stale.is_file():
                    stale.unlink()

        images = []
        thumbs = []
        for index, source in enumerate(source_files, start=1):
            name = f"GC-S{product_id}-{index:02d}.jpg"
            product_target = product_dir / name
            thumb_target = thumb_dir / name
            save_jpeg(source, product_target, max_side=1800, quality=86)
            save_jpeg(source, thumb_target, max_side=520, quality=78)
            images.append(f"assets/products/{product_id}/{name}")
            thumbs.append(f"assets/product-thumbs/{product_id}/{name}")

        scene_source = choose_scene(source_files)
        scene_index = source_files.index(scene_source)
        scene = images[scene_index]
        thumb_scene = thumbs[scene_index]
        entry = {
            "images": images,
            "thumbs": thumbs,
            "front": images[0],
            "angle": images[1] if len(images) > 1 else images[0],
            "side": images[2] if len(images) > 2 else images[min(len(images) - 1, 0)],
            "back": images[3] if len(images) > 3 else images[min(len(images) - 1, 0)],
            "scene": scene,
            "thumbFront": thumbs[0],
            "thumb": thumb_scene,
            "thumbScene": thumb_scene,
            "fallback": scene,
            "thumbFallback": thumb_scene,
            "generated": images[0],
        }
        product_map[product_id] = entry
        copy_map[product_id] = build_copy(product_id, len(images))
        uploaded.append({"id": product_id, "images": len(images), "scene": scene})

    write_product_map(product_map)
    write_copy_map(data_text, copy_start, copy_end, copy_map)
    print(json.dumps({"uploaded": uploaded, "skipped": skipped}, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
