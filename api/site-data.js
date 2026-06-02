const { list, put } = require("@vercel/blob");

const DATA_KEYS = new Set([
  "products",
  "categories",
  "factoryProfile",
  "accounts",
  "permissions",
  "staff",
  "productionOrders",
  "productionTables",
  "productionCalendar",
]);

module.exports = async function handler(request, response) {
  setCorsHeaders(response);

  if (request.method === "OPTIONS") {
    response.status(204).end();
    return;
  }

  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    sendJson(response, 500, { ok: false, message: "Vercel Blob token is not configured" });
    return;
  }

  try {
    if (request.method === "GET") {
      await handleGet(request, response);
      return;
    }

    if (request.method === "POST") {
      await handlePost(request, response);
      return;
    }

    sendJson(response, 405, { ok: false, message: "Method not allowed" });
  } catch (error) {
    sendJson(response, 500, { ok: false, message: "Site data sync failed" });
  }
};

async function handleGet(request, response) {
  const key = normalizeKey(request.query.key);
  if (key) {
    const value = await readDataKey(key);
    sendJson(response, 200, { ok: true, key, value });
    return;
  }

  const data = {};
  await Promise.all(
    [...DATA_KEYS].map(async (itemKey) => {
      const value = await readDataKey(itemKey);
      if (value !== undefined) data[itemKey] = value;
    })
  );
  sendJson(response, 200, { ok: true, data });
}

async function handlePost(request, response) {
  const key = normalizeKey(request.query.key);
  if (!key) {
    sendJson(response, 400, { ok: false, message: "Invalid data key" });
    return;
  }

  const body = await collectJsonBody(request);
  const value = Object.prototype.hasOwnProperty.call(body, "value") ? body.value : body;
  const path = getDataPath(key);
  const blob = await put(path, JSON.stringify(value), {
    access: "public",
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: "application/json; charset=utf-8",
  });

  sendJson(response, 200, { ok: true, key, url: blob.url, savedAt: new Date().toISOString() });
}

async function readDataKey(key) {
  const result = await list({ prefix: getDataPath(key), limit: 1 });
  const blob = result.blobs.find((item) => item.pathname === getDataPath(key)) || result.blobs[0];
  if (!blob?.url) return undefined;

  const dataResponse = await fetch(`${blob.url}?v=${Date.now()}`);
  if (!dataResponse.ok) return undefined;
  return dataResponse.json();
}

function normalizeKey(key) {
  const value = String(key || "");
  return DATA_KEYS.has(value) ? value : "";
}

function getDataPath(key) {
  return `site-data/${key}.json`;
}

function collectJsonBody(request) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    request.on("data", (chunk) => chunks.push(chunk));
    request.on("end", () => {
      try {
        const text = Buffer.concat(chunks).toString("utf8");
        resolve(text ? JSON.parse(text) : {});
      } catch (error) {
        reject(error);
      }
    });
    request.on("error", reject);
  });
}

function setCorsHeaders(response) {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  response.setHeader("Access-Control-Allow-Headers", "Content-Type");
}

function sendJson(response, statusCode, data) {
  response.status(statusCode).json(data);
}
