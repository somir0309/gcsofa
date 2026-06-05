const { handleUpload } = require("@vercel/blob/client");

const MAX_UPLOAD_SIZE = 100 * 1024 * 1024;
const ALLOWED_CONTENT_TYPES = [
  "text/csv",
  "application/csv",
  "application/octet-stream",
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
];

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
    const body = await parseJsonBody(request);
    const result = await handleUpload({
      request,
      body,
      onBeforeGenerateToken: async (pathname) => {
        if (!isAllowedCostSheetPath(pathname)) {
          throw new Error("只允许上传成本分析表文件。");
        }
        return {
          allowedContentTypes: ALLOWED_CONTENT_TYPES,
          maximumSizeInBytes: MAX_UPLOAD_SIZE,
          addRandomSuffix: false,
        };
      },
      onUploadCompleted: async () => {},
    });
    sendJson(response, 200, result);
  } catch (error) {
    sendJson(response, 400, { ok: false, message: error?.message || "Blob client upload failed" });
  }
};

function isAllowedCostSheetPath(pathname) {
  return /^server-data\/cost-sheets\/[^/]+\/[^/]+\.(xlsx|xls|csv)$/i.test(String(pathname || ""));
}

function parseJsonBody(request) {
  if (request.body && typeof request.body === "object") {
    return Promise.resolve(request.body);
  }
  return new Promise((resolve, reject) => {
    const chunks = [];
    request.on("data", (chunk) => chunks.push(chunk));
    request.on("end", () => {
      try {
        resolve(JSON.parse(Buffer.concat(chunks).toString("utf8") || "{}"));
      } catch (error) {
        reject(error);
      }
    });
    request.on("error", reject);
  });
}

function setCorsHeaders(response) {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Methods", "POST,OPTIONS");
  response.setHeader("Access-Control-Allow-Headers", "Content-Type");
}

function sendJson(response, statusCode, data) {
  response.status(statusCode).json(data);
}
