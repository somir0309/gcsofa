const { put } = require("@vercel/blob");

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif"]);

module.exports = async function handler(request, response) {
  setCorsHeaders(response);

  if (request.method === "OPTIONS") {
    response.status(204).end();
    return;
  }

  if (request.method !== "POST") {
    sendJson(response, 405, { ok: false, message: "Method not allowed" });
    return;
  }

  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    sendJson(response, 500, { ok: false, message: "Vercel Blob token is not configured" });
    return;
  }

  const originalName = sanitizeSegment(request.query.fileName || "upload.png", "upload.png");
  const extension = getExtension(originalName) || ".png";
  if (!IMAGE_EXTENSIONS.has(extension)) {
    sendJson(response, 400, { ok: false, message: "只支持 jpg、jpeg、png、webp、gif 图片" });
    return;
  }

  try {
    const body = await collectRequestBody(request);
    const fileName = createUploadName(originalName, extension);
    const blob = await put(`assets/uploads/${fileName}`, body, {
      access: "public",
      addRandomSuffix: false,
      contentType: request.headers["content-type"] || getImageContentType(extension),
    });

    sendJson(response, 200, {
      ok: true,
      name: originalName,
      path: blob.url,
      url: blob.url,
      savedAt: new Date().toISOString(),
      size: body.length,
    });
  } catch (error) {
    sendJson(response, 500, { ok: false, message: "Image save failed" });
  }
};

function collectRequestBody(request) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    request.on("data", (chunk) => chunks.push(chunk));
    request.on("end", () => resolve(Buffer.concat(chunks)));
    request.on("error", reject);
  });
}

function createUploadName(originalName, extension) {
  const baseName = sanitizeSegment(originalName.slice(0, -extension.length), "image");
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  return `${timestamp}-${baseName}${extension}`;
}

function getExtension(fileName) {
  const match = String(fileName).toLowerCase().match(/\.[^.]+$/);
  if (!match) return "";
  return match[0] === ".jpeg" ? ".jpg" : match[0];
}

function getImageContentType(extension) {
  if (extension === ".jpg") return "image/jpeg";
  if (extension === ".png") return "image/png";
  if (extension === ".webp") return "image/webp";
  if (extension === ".gif") return "image/gif";
  return "application/octet-stream";
}

function sanitizeSegment(value, fallback = "file") {
  return String(value || fallback)
    .replace(/[<>:"/\\|?*\x00-\x1f]/g, "-")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 100) || fallback;
}

function setCorsHeaders(response) {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Methods", "POST,OPTIONS");
  response.setHeader("Access-Control-Allow-Headers", "Content-Type");
}

function sendJson(response, statusCode, data) {
  response.status(statusCode).json(data);
}
