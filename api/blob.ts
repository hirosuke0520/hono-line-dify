import { del, put } from "@vercel/blob"

import { extractExtensionFromContentType } from "../utils.js"

export const uploadToBlobStorage = async (messageId: string, blob: Blob) => {
  try {
    const extension = extractExtensionFromContentType(blob.type || "")
    const { url } = await put(`dify/tmp/${messageId}.${extension}`, blob, {
      access: "public"
    })
    return url
  } catch (error) {
    console.log(error)
  }
}

export const deleteStorageFile = async (messageId: string, blob: Blob): Promise<void> => {
  try {
    const extension = extractExtensionFromContentType(blob.type || "")
    await del(`dify/tmp/${messageId}.${extension}`)
  } catch (error) {
    console.log(error)
  }
}
