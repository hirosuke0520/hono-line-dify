import { del, put } from "@vercel/blob"

import { extractExtensionFromContentType } from "../utils.js"

export const uploadToBlobStorage = async (messageId: string, extension: string, blob: Blob) => {
  try {
    const { url } = await put(`dify/tmp/${messageId}.${extension}`, blob, {
      access: "public"
    })
    return url
  } catch (error) {
    console.log(error)
  }
}

export const deleteStorageFile = async (messageId: string, extension: string): Promise<void> => {
  try {
    await del(`dify/tmp/${messageId}.${extension}`)
  } catch (error) {
    console.log(error)
  }
}
