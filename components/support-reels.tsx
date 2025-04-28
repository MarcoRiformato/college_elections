"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { ChevronUp, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const initialVideos = [
  {
    id: 1,
    type: "video",
    url: "https://www.instagram.com/p/DIL-KR4v5_U/",
    embedUrl: "https://www.instagram.com/p/DIL-KR4v5_U/embed/captioned/",
  },
  {
    id: 2,
    type: "video",
    url: "https://www.instagram.com/p/DIRBvDhP3uV/",
    embedUrl: "https://www.instagram.com/p/DIRBvDhP3uV/embed/captioned/",
  },
  {
    id: 3,
    type: "video",
    url: "https://www.instagram.com/p/DIgqKdIP2Nk/",
    embedUrl: "https://www.instagram.com/p/DIgqKdIP2Nk/embed/captioned/",
  },
  {
    id: 4,
    type: "video",
    url: "https://www.instagram.com/p/DImFtmtsPRp/",
    embedUrl: "https://www.instagram.com/p/DImFtmtsPRp/embed/captioned/",
  },
  {
    id: 5,
    type: "video",
    url: "https://www.instagram.com/p/DIoL8UqsGR0/",
    embedUrl: "https://www.instagram.com/p/DIoL8UqsGR0/embed/captioned/",
  }
]

export default function SupportReels() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [shuffledVideos, setShuffledVideos] = useState(initialVideos)

  useEffect(() => {
    // Fisher-Yates shuffle algorithm
    const shuffleArray = (array: typeof initialVideos) => {
      const newArray = [...array]
      for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
      }
      return newArray
    }

    setShuffledVideos(shuffleArray(initialVideos))
  }, [])

  const nextReel = () => {
    setCurrentIndex((prev) => (prev + 1) % shuffledVideos.length)
  }

  const prevReel = () => {
    setCurrentIndex((prev) => (prev - 1 + shuffledVideos.length) % shuffledVideos.length)
  }

  return (
    <div className="relative w-full max-w-[95vw] sm:max-w-3xl md:max-w-4xl mx-auto">
      <div className="absolute -left-2 sm:-left-4 top-1/2 z-10 transform -translate-y-1/2">
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-white shadow-md"
          onClick={prevReel}
        >
          <ChevronUp className="h-4 w-4 sm:h-5 sm:w-5" />
          <span className="sr-only">Previous</span>
        </Button>
      </div>

      <div className="overflow-hidden rounded-xl h-[400px] sm:h-[500px] md:h-[600px] border-2 border-purple-200 shadow-xl">
        <div
          className="transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateY(-${currentIndex * 100}%)` }}
        >
          {shuffledVideos.map((reel) => (
            <div key={reel.id} className="relative h-full w-full flex-shrink-0">
              {reel.type === "video" && (
                <div className="relative w-full h-full">
                  <iframe
                    src={reel.embedUrl}
                    className="absolute top-0 left-0 w-full h-full"
                    frameBorder="0"
                    allowFullScreen
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  />
                  <div className="absolute inset-0 pointer-events-none" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="absolute -right-2 sm:-right-4 top-1/2 z-10 transform -translate-y-1/2">
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-white shadow-md"
          onClick={nextReel}
        >
          <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5" />
          <span className="sr-only">Next</span>
        </Button>
      </div>

      <div className="flex justify-center mt-3 sm:mt-4 gap-1.5 sm:gap-2">
        {shuffledVideos.map((_, index) => (
          <button
            key={index}
            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${index === currentIndex ? "bg-blue-600" : "bg-gray-300"}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}
