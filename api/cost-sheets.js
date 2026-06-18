const { put } = require("@vercel/blob");

const SHEET_EXTENSIONS = new Set([".xlsx", ".xls", ".csv"]);

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

  try {
    const query = getRequestQuery(request);
    const productId = sanitizeSegment(query.get("productId") || "product", "product");
    const originalName = sanitizeSegment(query.get("fileName") || "cost-sheet.xlsx", "cost-sheet.xlsx");
    const extension = getExtension(originalName) || ".xlsx";
    if (!SHEET_EXTENSIONS.has(extension)) {
      sendJson(response, 400, { ok: false, message: "只支持 .xlsx、.xls、.csv 文件" });
      return;
    }

    const body = await collectRequestBody(request);
    const fileName = createUploadName(originalName, extension);
    const blob = await put(`server-data/cost-sheets/${productId}/${fileName}`, body, {
      access: "public",
      addRandomSuffix: false,
      contentType: request.headers["content-type"] || getSheetContentType(extension),
    });

    sendJson(response, 200, {
      ok: true,
      productId,
      name: originalName,
      path: blob.url,
      url: blob.url,
      savedAt: new Date().toISOString(),
      size: body.length,
    });
  } catch (error) {
    console.error("Cost sheet save failed", error);
    sendJson(response, 500, { ok: false, message: error?.message || "Cost sheet save failed" });
  }
};

function getRequestQuery(request) {
  const host = request.headers.host || "gcsofa.com";
  return new URL(request.url || "/", `https://${host}`).searchParams;
}

function collectRequestBody(request) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    request.on("data", (chunk) => chunks.push(chunk));
    request.on("end", () => resolve(Buffer.concat(chunks)));
    request.on("error", reject);
  });
}

function createUploadName(originalName, extension) {
  const baseName = sanitizeSegment(originalName.slice(0, -extension.length), "cost-sheet");
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  return `${timestamp}-${baseName}${extension}`;
}

function getExtension(fileName) {
  const match = String(fileName).toLowerCase().match(/\.[^.]+$/);
  return match ? match[0] : "";
}

function getSheetContentType(extension) {
  if (extension === ".csv") return "text/csv";
  if (extension === ".xls") return "application/vnd.ms-excel";
  return "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
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
  response.setHeader("Access-Control-Allow-Headers", "Content-Type,X-Product-Id");
}

function sendJson(response, statusCode, data) {
  response.status(statusCode).json(data);
}
