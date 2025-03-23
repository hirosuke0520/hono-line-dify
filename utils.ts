const mimeToExtension: Record<string, string> = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
  "image/svg+xml": "svg",
  "video/mp4": "mp4",
  "audio/mpeg": "mp3",
  "application/json": "json",
  "text/html": "html",
  "text/css": "css",
  "text/javascript": "js",
  "application/javascript": "js",
  "application/pdf": "pdf",
  "application/zip": "zip",
  "application/x-yaml": "yml",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": "xlsx",
  "application/msword": "doc",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": "docx",
  "text/plain": "txt"
}

export const extractExtensionFromContentType = (contentType: string): string => {
  const mime = contentType.split(";")[0].trim().toLowerCase()
  return mimeToExtension[mime] || "txt"
}
