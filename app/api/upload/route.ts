import { type NextRequest, NextResponse } from "next/server"
import { put } from "@vercel/blob"
import { nanoid } from "nanoid"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get("file") as File

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 })
    }

    // Generate a unique filename with original extension
    const fileExtension = file.name.split(".").pop() || ""
    const uniqueFilename = `${nanoid()}.${fileExtension}`
    const pathname = `images/${uniqueFilename}`

    // Upload to Vercel Blob
    const { url } = await put(pathname, file, {
      access: "public",
    })

    return NextResponse.json({ success: true, url })
  } catch (error) {
    console.error("Error in upload route:", error)
    return NextResponse.json({ error: "Upload failed" }, { status: 500 })
  }
}
