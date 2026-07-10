const http = require("http");
const fs = require("fs");
const path = require("path");
const { execFile } = require("child_process");
const { promisify } = require("util");

const execFileAsync = promisify(execFile);

const PORT = Number(process.env.PORT) || 8080;
const ROOT = __dirname;
const UPLOAD_ROOT = path.join(ROOT, "server-data", "cost-sheets");
const ASSET_UPLOAD_ROOT = path.join(ROOT, "assets", "uploads");
const NEWS_TARGET_COUNT = 200;

const NEWS_QUERIES = {
  global: [
    "\u56fd\u9645 \u6c99\u53d1 \u5bb6\u5177",
    "\u5168\u7403 \u6c99\u53d1 \u5e02\u573a",
    "\u56fd\u5916 \u6c99\u53d1 \u8bbe\u8ba1",
    "\u6d77\u5916 \u5bb6\u5177 \u8d44\u8baf",
    "\u56fd\u9645 \u5bb6\u5177 \u884c\u4e1a",
    "\u5168\u7403 \u5bb6\u5177 \u8d8b\u52bf",
    "\u56fd\u5916 \u8f6f\u4f53\u5bb6\u5177",
    "\u56fd\u9645 \u529f\u80fd\u6c99\u53d1",
    "\u6d77\u5916 \u6a21\u5757\u5316 \u6c99\u53d1",
    "\u56fd\u9645 \u5e03\u827a\u6c99\u53d1",
    "\u56fd\u5916 \u771f\u76ae\u6c99\u53d1",
    "\u5168\u7403 \u5ba2\u5385 \u5bb6\u5177",
    "\u56fd\u5916 \u5bb6\u5177 \u5c55\u4f1a",
    "\u56fd\u9645 \u5bb6\u5177\u5c55 \u6c99\u53d1",
    "\u6b27\u6d32 \u6c99\u53d1 \u8bbe\u8ba1",
    "\u7f8e\u56fd \u6c99\u53d1 \u5e02\u573a",
    "\u65e5\u672c \u6c99\u53d1 \u5bb6\u5177",
    "\u4e2d\u4e1c \u6c99\u53d1 \u5bb6\u5177",
    "\u62c9\u7f8e \u6c99\u53d1 \u5bb6\u5177",
    "\u56fd\u5916 \u5bb6\u5177 \u96f6\u552e",
    "\u56fd\u9645 \u5bb6\u5177 \u7535\u5546",
    "\u5168\u7403 \u5bb6\u5177 \u5916\u8d38",
    "\u56fd\u9645 \u5bb6\u5177 \u51fa\u53e3",
    "\u6d77\u5916 \u5bb6\u5177 \u4f9b\u5e94\u94fe",
    "\u56fd\u9645 \u5bb6\u5177 \u6750\u6599",
    "\u56fd\u5916 \u73af\u4fdd\u5bb6\u5177",
    "\u56fd\u9645 \u6c99\u53d1 \u9762\u6599",
    "\u5168\u7403 \u5bb6\u5177 \u5236\u9020",
    "\u56fd\u5916 \u9152\u5e97\u5bb6\u5177 \u6c99\u53d1",
    "\u56fd\u9645 \u5de5\u7a0b\u5bb6\u5177 \u6c99\u53d1",
    "\u6d77\u5916 \u6237\u5916\u6c99\u53d1",
    "\u56fd\u9645 \u6c99\u53d1\u5e8a \u5bb6\u5177",
    "\u56fd\u5916 \u5ba4\u5185\u8bbe\u8ba1 \u6c99\u53d1",
    "\u5168\u7403 \u5bb6\u5c45 \u6c99\u53d1",
    "\u56fd\u5916 \u5bb6\u5177 \u54c1\u724c \u6c99\u53d1",
    "\u56fd\u9645 \u5bb6\u5177 \u65b0\u6750\u6599",
    "\u6d77\u5916 \u8f6f\u88c5 \u6c99\u53d1",
    "\u5168\u7403 \u5bb6\u5177 \u7269\u6d41",
    "\u56fd\u5916 \u5bb6\u5177 \u8fdb\u53e3 \u51fa\u53e3",
    "\u56fd\u9645 \u4f4f\u5b85\u5bb6\u5177 \u8d8b\u52bf",
    "\u56fd\u5916 \u6c99\u53d1 \u751f\u4ea7 \u5de5\u827a",
    "\u6d77\u5916 \u6c99\u53d1 \u5de5\u5382",
    "\u56fd\u9645 \u5bb6\u5177 \u8bbe\u8ba1\u5468",
    "\u5168\u7403 \u8f6f\u4f53\u5bb6\u5177 \u884c\u4e1a",
  ],
  china: [
    "\u6c99\u53d1 \u5bb6\u5177",
    "\u8f6f\u4f53\u5bb6\u5177 \u6c99\u53d1",
    "\u5bb6\u5177 \u51fa\u53e3 \u653f\u7b56 \u5173\u7a0e \u6d77\u5173",
    "\u6c99\u53d1 \u8bbe\u8ba1 \u8d8b\u52bf",
    "\u5bb6\u5177 \u65b0\u6750\u6599 \u73af\u4fdd \u9762\u6599 \u6d77\u7ef5",
    "\u6a21\u5757\u5316 \u6c99\u53d1 \u5bb6\u5177",
    "\u5ba2\u5385 \u6c99\u53d1 \u5bb6\u5c45",
    "\u5bb6\u5177\u5c55 \u6c99\u53d1",
    "\u6c99\u53d1 \u5de5\u5382 \u751f\u4ea7",
    "\u5bb6\u5177 \u5916\u8d38 \u6c99\u53d1",
    "\u6c99\u53d1 \u884c\u4e1a \u65b0\u95fb",
    "\u5bb6\u5c45 \u6c99\u53d1 \u5e02\u573a",
    "\u8f6f\u4f53\u5bb6\u5177 \u884c\u4e1a",
    "\u529f\u80fd\u6c99\u53d1 \u5bb6\u5177",
    "\u5e03\u827a\u6c99\u53d1 \u9762\u6599",
    "\u5bb6\u5177\u4f9b\u5e94\u94fe \u6c99\u53d1",
    "\u5bb6\u5177\u5c55\u4f1a \u8f6f\u4f53\u5bb6\u5177",
    "\u6c99\u53d1 \u5916\u8d38 \u51fa\u53e3",
    "\u6c99\u53d1 \u751f\u4ea7 \u5de5\u827a",
    "\u5bb6\u5177 \u5e02\u573a \u8d8b\u52bf",
    "\u5bb6\u5177 \u884c\u4e1a \u65b0\u95fb",
    "\u5bb6\u5c45 \u884c\u4e1a \u8d44\u8baf",
    "\u5ba2\u5385 \u5bb6\u5177 \u8d8b\u52bf",
    "\u8f6f\u88c5 \u5bb6\u5c45 \u6c99\u53d1",
    "\u771f\u76ae\u6c99\u53d1 \u5e02\u573a",
    "\u5e03\u827a\u6c99\u53d1 \u8d8b\u52bf",
    "\u667a\u80fd\u5bb6\u5177 \u6c99\u53d1",
    "\u529f\u80fd\u6c99\u53d1 \u5e02\u573a",
    "\u6c99\u53d1\u5e8a \u5bb6\u5177",
    "\u6237\u5916\u6c99\u53d1 \u5bb6\u5177",
    "\u9152\u5e97\u5bb6\u5177 \u6c99\u53d1",
    "\u5de5\u7a0b\u5bb6\u5177 \u6c99\u53d1",
    "\u5bb6\u5177 \u7535\u5546 \u6c99\u53d1",
    "\u5bb6\u5177 \u5236\u9020 \u81ea\u52a8\u5316",
    "\u5bb6\u5177 \u6750\u6599 \u521b\u65b0",
    "\u5bb6\u5177 \u9762\u6599 \u4f9b\u5e94\u5546",
    "\u6c99\u53d1 \u6d77\u7ef5 \u4f9b\u5e94",
    "\u5bb6\u5177 \u7269\u6d41 \u96f6\u552e",
    "\u5168\u7403 \u5bb6\u5177 \u5e02\u573a",
    "\u5bb6\u5177 \u8fdb\u53e3 \u51fa\u53e3 \u8d44\u8baf",
    "\u5bb6\u5177 \u5c55\u89c8 \u6c99\u53d1",
    "\u5ba4\u5185\u8bbe\u8ba1 \u6c99\u53d1",
    "\u4f4f\u5b85\u5bb6\u5177 \u8d8b\u52bf",
    "\u73af\u4fdd\u5bb6\u5177 \u6c99\u53d1",
    "\u5bb6\u5c45\u5356\u573a \u6c99\u53d1",
  ],
};

const MIME_TYPES = {
  ".css": "text/css; charset=utf-8",
  ".csv": "text/csv; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".gif": "image/gif",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".xls": "application/vnd.ms-excel",
  ".xlsx": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
};

function sendJson(response, statusCode, data) {
  response.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": "*",
  });
  response.end(JSON.stringify(data));
}

function sanitizeSegment(value, fallback = "file") {
  return String(value || fallback)
    .replace(/[<>:"/\\|?*\x00-\x1f]/g, "-")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 80) || fallback;
}

function collectRequestBody(request) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    request.on("data", (chunk) => chunks.push(chunk));
    request.on("end", () => resolve(Buffer.concat(chunks)));
    request.on("error", reject);
  });
}

async function saveCostSheet(request, response) {
  const url = new URL(request.url, `http://${request.headers.host}`);
  const productId = sanitizeSegment(request.headers["x-product-id"] || url.searchParams.get("productId"), "product");
  const originalName = sanitizeSegment(request.headers["x-file-name"] || url.searchParams.get("fileName"), "cost-sheet.xlsx");
  const extension = path.extname(originalName).toLowerCase() || ".xlsx";
  const baseName = sanitizeSegment(path.basename(originalName, extension), "cost-sheet");
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  const productDir = path.join(UPLOAD_ROOT, productId);
  const fileName = `${timestamp}-${baseName}${extension}`;
  const filePath = path.join(productDir, fileName);
  const publicPath = `/server-data/cost-sheets/${productId}/${fileName}`;

  await fs.promises.mkdir(productDir, { recursive: true });
  await fs.promises.writeFile(filePath, await collectRequestBody(request));
  sendJson(response, 200, {
    ok: true,
    productId,
    name: originalName,
    path: publicPath,
    savedAt: new Date().toISOString(),
    size: (await fs.promises.stat(filePath)).size,
  });
}

async function saveAssetUpload(request, response) {
  const url = new URL(request.url, `http://${request.headers.host}`);
  const purpose = String(url.searchParams.get("purpose") || "general").toLowerCase();
  if (purpose === "product") {
    sendJson(response, 400, {
      ok: false,
      message: "产品图片请放入本地产品文件夹并通过 GitHub 静态资源同步，避免重复占用 Vercel Blob 空间。",
    });
    return;
  }
  const originalName = sanitizeSegment(request.headers["x-file-name"] || url.searchParams.get("fileName"), "upload.png");
  const extension = path.extname(originalName).toLowerCase() || ".png";

  if (![".jpg", ".jpeg", ".png", ".webp", ".gif"].includes(extension)) {
    sendJson(response, 400, { ok: false, message: "鍙敮鎸?jpg銆乯peg銆乸ng銆亀ebp銆乬if 鍥剧墖" });
    return;
  }

  const baseName = sanitizeSegment(path.basename(originalName, extension), "image");
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  const fileName = `${timestamp}-${baseName}${extension}`;
  const filePath = path.join(ASSET_UPLOAD_ROOT, fileName);
  const publicPath = `assets/uploads/${fileName}`;

  await fs.promises.mkdir(ASSET_UPLOAD_ROOT, { recursive: true });
  await fs.promises.writeFile(filePath, await collectRequestBody(request));
  sendJson(response, 200, {
    ok: true,
    name: originalName,
    path: publicPath,
    savedAt: new Date().toISOString(),
    size: (await fs.promises.stat(filePath)).size,
  });
}

async function fetchNewsBundle(request, response) {
  const url = new URL(request.url, `http://${request.headers.host}`);
  const target = Math.min(NEWS_TARGET_COUNT, Math.max(1, Number(url.searchParams.get("target")) || NEWS_TARGET_COUNT));
  const [globalNews, chinaNews] = await Promise.all([
    fetchBingNewsGroup(NEWS_QUERIES.global, "国外资讯", target),
    fetchBingNewsGroup(NEWS_QUERIES.china, "国内资讯", target),
  ]);

  sendJson(response, 200, {
    ok: true,
    target,
    global: globalNews,
    china: chinaNews,
  });
}

async function fetchBingNewsGroup(queries, region, target) {
  const results = await Promise.allSettled(queries.map((query) => fetchBingNews(query, region)));
  return sortNews(dedupeNews(
    results
      .filter((result) => result.status === "fulfilled")
      .flatMap((result) => result.value)
      .filter(isReadableChineseNews)
  )).slice(0, target);
}

async function fetchBingNews(query, region) {
  const feedUrl = `https://www.bing.com/news/search?q=${encodeURIComponent(query)}&format=rss`;
  return parseRssItems(await fetchTextWithPowerShell(feedUrl), region);
}

async function fetchTextWithPowerShell(url) {
  const escapedUrl = String(url).replace(/'/g, "''");
  const script = `[Console]::OutputEncoding = [System.Text.Encoding]::UTF8; $OutputEncoding = [System.Text.Encoding]::UTF8; $r = Invoke-WebRequest -Uri '${escapedUrl}' -UseBasicParsing -TimeoutSec 20; [Console]::Write($r.Content)`;
  const { stdout } = await execFileAsync("powershell.exe", ["-NoProfile", "-Command", script], {
    maxBuffer: 4 * 1024 * 1024,
    windowsHide: true,
  });
  return stdout;
}

function parseRssItems(xml, region) {
  return [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].map((match) => {
    const itemXml = match[1];
    const url = decodeXml(getXmlValue(itemXml, "link"));
    const source = decodeXml(getXmlValue(itemXml, "source")) || getNewsDomain(url) || "Bing News";
    const title = decodeXml(getXmlValue(itemXml, "title"));
    const rawSummary = stripTags(decodeXml(getXmlValue(itemXml, "description"))) || title;
    const summary = hasChineseText(rawSummary) ? rawSummary : title;
    const date = formatNewsDate(decodeXml(getXmlValue(itemXml, "pubDate")));
    return { date, region, source, title, summary, url };
  }).filter((item) => item.title && item.url);
}

function isReadableChineseNews(item) {
  const text = `${item.title} ${item.summary}`;
  return hasChineseText(text) && !hasBrokenEncoding(text);
}

function hasChineseText(value) {
  return /[\u3400-\u9fff]/.test(String(value || ""));
}

function hasBrokenEncoding(value) {
  return /[�]{2,}|[\u00c0-\u00ff]{3,}/.test(String(value || ""));
}

function getXmlValue(xml, tag) {
  const match = xml.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i"));
  return match ? match[1].trim() : "";
}

function decodeXml(value) {
  return String(value || "")
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#x27;/g, "'");
}

function stripTags(value) {
  return String(value || "").replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
}

function formatNewsDate(value) {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? new Date().toISOString().slice(0, 10) : date.toISOString().slice(0, 10);
}

function getNewsDomain(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
}

function dedupeNews(items) {
  const seen = new Set();
  return items.filter((item) => {
    const key = item.url || `${item.title}-${item.source}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function sortNews(items) {
  return [...items].sort((a, b) => new Date(b.date) - new Date(a.date));
}

function serveStatic(request, response) {
  const url = new URL(request.url, `http://${request.headers.host}`);
  const decodedPath = decodeURIComponent(url.pathname);
  const relativePath = decodedPath === "/" ? "index.html" : decodedPath.replace(/^\/+/, "");
  const filePath = path.resolve(ROOT, relativePath);

  if (!filePath.startsWith(ROOT)) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  fs.createReadStream(filePath)
    .on("open", () => {
      response.writeHead(200, {
        "Content-Type": MIME_TYPES[path.extname(filePath).toLowerCase()] || "application/octet-stream",
      });
    })
    .on("error", () => {
      response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      response.end("Not found");
    })
    .pipe(response);
}

const server = http.createServer(async (request, response) => {
  if (request.method === "OPTIONS") {
    response.writeHead(204, {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type,X-Product-Id,X-File-Name",
    });
    response.end();
    return;
  }

  if (request.method === "POST" && request.url.startsWith("/api/cost-sheets")) {
    try {
      await saveCostSheet(request, response);
    } catch (error) {
      sendJson(response, 500, { ok: false, message: "Cost sheet save failed" });
    }
    return;
  }

  if (request.method === "POST" && request.url.startsWith("/api/assets")) {
    try {
      await saveAssetUpload(request, response);
    } catch (error) {
      sendJson(response, 500, { ok: false, message: "Image save failed" });
    }
    return;
  }

  if (request.method === "GET" && request.url.startsWith("/api/news")) {
    try {
      await fetchNewsBundle(request, response);
    } catch (error) {
      sendJson(response, 500, { ok: false, message: "News fetch failed" });
    }
    return;
  }

  if (request.method === "GET") {
    serveStatic(request, response);
    return;
  }

  response.writeHead(405, { "Content-Type": "text/plain; charset=utf-8" });
  response.end("Method not allowed");
});

server.listen(PORT, () => {
  console.log(`GCSOFA server running at http://localhost:${PORT}`);
});

