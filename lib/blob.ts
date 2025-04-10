import { put } from "@vercel/blob"
import { nanoid } from "nanoid"

/**
 * Uploads a file to Vercel Blob storage
 * @param file The file to upload
 * @param folder Optional folder path to organize files
 * @returns The URL of the uploaded file
 */
export async function uploadToBlob(file: File, folder = "images"): Promise<string> {
  try {
    // Generate a unique filename with original extension
    const fileExtension = file.name.split(".").pop() || ""
    const uniqueFilename = `${nanoid()}.${fileExtension}`
    const pathname = `${folder}/${uniqueFilename}`

    // Upload to Vercel Blob
    const { url } = await put(pathname, file, {
      access: "public",
    })

    return url
  } catch (error) {
    console.error("Error uploading to blob:", error)
    throw error
  }
}
