"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronUp, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const supportReels = [
  {
    id: 1,
    name: "Marco Bianchi",
    role: "Studente di Economia",
    quote:
      "Pietro ha sempre ascoltato le esigenze degli studenti. Il suo impegno per migliorare gli spazi di studio è esattamente ciò di cui abbiamo bisogno!",
    image: "https://picsum.photos/id/1012/600/800",
  },
  {
    id: 2,
    name: "Giulia Rossi",
    role: "Rappresentante Scienze Politiche",
    quote:
      "Ho lavorato con Pietro nel Consiglio di Dipartimento e posso garantire che è la persona giusta per rappresentarci nel CdA. Competente e determinato!",
    image: "https://picsum.photos/id/1027/600/800",
  },
  {
    id: 3,
    name: "Alessandro Verdi",
    role: "Associazione Studenti Sostenibili",
    quote:
      "Le proposte di Pietro sulla sostenibilità ambientale sono concrete e realizzabili. Finalmente qualcuno che pensa al futuro dell'università!",
    image: "https://picsum.photos/id/1025/600/800",
  },
  {
    id: 4,
    name: "Francesca Neri",
    role: "Studentessa di Medicina",
    quote:
      "Come studentessa con DSA, apprezzo molto l'attenzione di Pietro verso l'inclusività. Le sue proposte mi fanno sentire finalmente rappresentata.",
    image: "https://picsum.photos/id/1062/600/800",
  },
  {
    id: 5,
    name: "Luca Marino",
    role: "Studente Erasmus",
    quote:
      "L'impegno di Pietro per l'internazionalizzazione è fondamentale. Più opportunità di scambio significano un'università più aperta al mondo!",
    image: "https://picsum.photos/id/1074/600/800",
  },
]

export default function SupportReels() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  // Auto-scroll every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % supportReels.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const nextReel = () => {
    setCurrentIndex((prev) => (prev + 1) % supportReels.length)
  }

  const prevReel = () => {
    setCurrentIndex((prev) => (prev - 1 + supportReels.length) % supportReels.length)
  }

  // Handle touch events for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientY)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientY)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe up
      nextReel()
    }

    if (touchStart - touchEnd < -50) {
      // Swipe down
      prevReel()
    }
  }

  return (
    <div className="relative max-w-xs sm:max-w-sm md:max-w-md mx-auto">
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

      <div
        className="overflow-hidden rounded-xl h-[300px] sm:h-[400px] md:h-[500px] border-2 border-purple-200 shadow-xl"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateY(-${currentIndex * 100}%)` }}
        >
          {supportReels.map((reel) => (
            <div key={reel.id} className="relative h-full w-full flex-shrink-0">
              <Image src={reel.image || "/placeholder.svg"} alt={reel.name} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-4 sm:p-6 text-white">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 md:p-4">
                  <h3 className="font-bold text-base sm:text-lg md:text-xl">{reel.name}</h3>
                  <p className="text-xs sm:text-sm text-blue-200">{reel.role}</p>
                  <p className="mt-1 md:mt-2 text-xs sm:text-sm line-clamp-4 sm:line-clamp-none">"{reel.quote}"</p>
                </div>
              </div>
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
        {supportReels.map((_, index) => (
          <button
            key={index}
            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${index === currentIndex ? "bg-blue-600" : "bg-gray-300"}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
      <div className="text-xs text-center mt-1 text-muted-foreground sm:hidden">Scorri verso l'alto o il basso</div>
    </div>
  )
}
