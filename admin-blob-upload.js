import { upload } from "https://esm.sh/@vercel/blob@2.4.0/client";

window.uploadBlobFile = async function uploadBlobFile({ pathname, file, contentType, onProgress }) {
  return upload(pathname, file, {
    access: "public",
    handleUploadUrl: "/api/blob-upload",
    contentType,
    multipart: file.size > 4 * 1024 * 1024,
    onUploadProgress: onProgress,
  });
};

window.dispatchEvent(new Event("gcsofa-blob-uploader-ready"));
