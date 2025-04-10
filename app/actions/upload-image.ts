"use server"

import { put } from "@vercel/blob"
import { nanoid } from "nanoid"

export async function uploadImage(formData: FormData) {
  try {
    const file = formData.get("file") as File

    if (!file) {
      return { error: "No file provided" }
    }

    // Generate a unique filename with original extension
    const fileExtension = file.name.split(".").pop() || ""
    const uniqueFilename = `${nanoid()}.${fileExtension}`
    const pathname = `images/${uniqueFilename}`

    // Upload to Vercel Blob
    const { url } = await put(pathname, file, {
      access: "public",
    })

    return { success: true, url }
  } catch (error) {
    console.error("Error uploading image:", error)
    return { error: "Upload failed" }
  }
}
