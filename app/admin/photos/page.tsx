"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ImageUploader } from "@/components/image-uploader"
import { Trash2 } from "lucide-react"
import Image from "next/image"

export default function AdminPhotosPage() {
  const [photos, setPhotos] = useState<string[]>([])

  const handleImageUpload = (url: string) => {
    setPhotos((prev) => [...prev, url])
  }

  const handleDeletePhoto = (index: number) => {
    setPhotos((prev) => prev.filter((_, i) => i !== index))
  }

  return (
    <main className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Campaign Photos</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Upload New Photo</CardTitle>
        </CardHeader>
        <CardContent>
          <ImageUploader onUpload={handleImageUpload} />
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((photo, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="relative aspect-square">
              <Image
                src={photo || "/placeholder.svg"}
                alt={`Campaign photo ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-3">
              <Button variant="destructive" size="sm" className="w-full" onClick={() => handleDeletePhoto(index)}>
                <Trash2 className="mr-2 h-4 w-4" />
                Delete
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {photos.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          No photos uploaded yet. Upload your first campaign photo!
        </div>
      )}
    </main>
  )
}
