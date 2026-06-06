window.uploadBlobFile = async function uploadBlobFile({ pathname, file, contentType, onProgress }) {
  onProgress?.({ loaded: 0, total: file.size, percentage: 0 });
  const tokenResponse = await fetch("/api/blob-upload", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      type: "blob.generate-client-token",
      payload: {
        pathname,
        multipart: false,
        clientPayload: null,
      },
    }),
  });

  const tokenData = await readJsonResponse(tokenResponse);
  if (!tokenResponse.ok || !tokenData.clientToken) {
    throw new Error(tokenData.message || `上传授权失败：${tokenResponse.status}`);
  }

  const storeId = getStoreIdFromClientToken(tokenData.clientToken);
  const response = await fetch(`https://vercel.com/api/blob/?pathname=${encodeURIComponent(pathname)}`, {
    method: "PUT",
    headers: {
      authorization: `Bearer ${tokenData.clientToken}`,
      "x-vercel-blob-store-id": storeId,
      "x-api-version": "12",
      "x-api-blob-request-id": `${storeId}:${Date.now()}:${Math.random().toString(16).slice(2)}`,
      "x-api-blob-request-attempt": "0",
      "x-vercel-blob-access": "public",
      "x-content-type": contentType || file.type || "application/octet-stream",
    },
    body: file,
  });

  const data = await readJsonResponse(response);
  if (!response.ok || !data.url) {
    throw new Error(data.message || `云端上传失败：${response.status}`);
  }
  onProgress?.({ loaded: file.size, total: file.size, percentage: 100 });
  return data;
};

window.dispatchEvent(new Event("gcsofa-blob-uploader-ready"));

function getStoreIdFromClientToken(token) {
  const storeId = String(token || "").split("_")[3];
  if (!storeId) throw new Error("上传授权格式异常");
  return storeId;
}

async function readJsonResponse(response) {
  try {
    return await response.json();
  } catch {
    return {};
  }
}
