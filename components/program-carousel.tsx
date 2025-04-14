"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const programItems = [
  {
    emoji: "🏠",
    title: "Diritto allo studio",
    description:
      "Garantire il diritto all'abitare, aumentando i posti nelle residenze universitarie e lavorare per potenziare i fondi del DSU",
  },
  {
    emoji: "⏰",
    title: "Orari",
    description:
      "Dare linee guida omogenee per avere orari razionali e comodi, senza vuoti non indispensabili e coerenti con le esigenze di pendolari, lavoratori e fuorisede",
  },
  {
    emoji: "👥",
    title: "Socialità",
    description:
      "L'università va vissuta. Ci impegneremo per costruire nuove occasioni di socialità come progetti, competizioni di dibattito, laboratori ed iniziative volontarie sul territorio",
  },
  {
    emoji: "🏢",
    title: "Spazi studenteschi",
    description:
      "Vogliamo spazi adeguati alle nostre esigenze anche dopo l'orario delle lezioni. Aule studio, tavoli all'aperto, aree verdi e punti di aggregazione devono essere presenti in ogni polo",
  },
  {
    emoji: "👂",
    title: "Ascolto",
    description:
      "La rappresentanza si basa sull'ascolto. L'unica promessa che so per certo di riuscire a realizzare è quella di ascoltare sempre tutti e costruire ogni scelta a partire dagli studenti che ne sono toccati direttamente",
  },
]

export default function ProgramCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const maxVisibleItems = 3
  const carouselRef = useRef<HTMLDivElement>(null)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + maxVisibleItems >= programItems.length ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? programItems.length - maxVisibleItems : prev - 1))
  }

  // Adjust visible items based on screen size
  const [visibleItems, setVisibleItems] = useState(1)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleItems(1)
      } else if (window.innerWidth < 1024) {
        setVisibleItems(2)
      } else {
        setVisibleItems(maxVisibleItems)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Handle touch events for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      nextSlide()
    }

    if (touchStart - touchEnd < -50) {
      // Swipe right
      prevSlide()
    }
  }

  // Get visible items
  const getVisibleItems = () => {
    const items = []
    for (let i = 0; i < visibleItems; i++) {
      const index = (currentIndex + i) % programItems.length
      items.push(programItems[index])
    }
    return items
  }

  return (
    <div className="relative">
      <div className="flex justify-between absolute -top-12 sm:-top-16 right-0 gap-2">
        <Button variant="outline" size="icon" onClick={prevSlide} className="h-8 w-8 sm:h-10 sm:w-10 rounded-full">
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous</span>
        </Button>
        <Button variant="outline" size="icon" onClick={nextSlide} className="h-8 w-8 sm:h-10 sm:w-10 rounded-full">
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next</span>
        </Button>
      </div>

      <div
        ref={carouselRef}
        className="flex gap-3 sm:gap-4 transition-all duration-500 ease-in-out"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {getVisibleItems().map((item, index) => (
          <Card
            key={`${item.title}-${index}`}
            className="flex-1 min-w-0 overflow-hidden border-2 hover:border-blue-300 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
          >
            <CardContent className="p-4 sm:p-4 md:p-6">
              <div className="text-2xl sm:text-3xl mb-2 md:mb-4">{item.emoji}</div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground line-clamp-4 sm:line-clamp-none">
                {item.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Mobile dots indicator */}
      <div className="flex justify-center mt-4 gap-1.5 sm:hidden">
        {Array.from({ length: programItems.length }).map((_, index) => (
          <button
            key={index}
            className={`w-1.5 h-1.5 rounded-full ${
              index >= currentIndex && index < currentIndex + visibleItems ? "bg-blue-600" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>

      {/* Mobile swipe indicator */}
      <div className="text-xs text-center mt-1 text-muted-foreground sm:hidden">Scorri verso sinistra o destra</div>
    </div>
  )
}
