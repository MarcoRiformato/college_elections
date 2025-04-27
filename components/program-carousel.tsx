"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const programItems = [
  {
    emoji: "🎓",
    title: "La Visione di università",
    description:
      "Credo in un'Universita' che non sia fatta solo di esami e lezioni ma che sia piuttosto un luogo da vivere a 360°, che sappia essere una comunità inclusiva e accogliente dove tutti possono formarsi e crescere in un clima pacifico ma al tempo stesso dinamico e sempre stimolante.",
  },
  {
    emoji: "⏰",
    title: "Minimo 7 appelli",
    description:
      "Più appelli significa più possibilità di organizzarsi, maggiore tranquillità e una distribuzione intelligente del carico di studio. Per questo chiediamo un MINIMO DI 7 APPELLI per ogni anno accademico.",
  },
  {
    emoji: "👥",
    title: "Comunità e aggregazione",
    description:
      "Siano 3, 5 o 7 quelli dell'università dovrebbero essere alcuni tra i 'migliori anni della nostra vita'. Vogliamo creare iniziative, competizioni, progetti e uscite presso luoghi di interesse accademico per far crescere insieme conoscenze, amicizie e relazioni umane.",
  },
  {
    emoji: "📚",
    title: "Didattica innovativa",
    description:
      "Laboratori, seminari e attività pratiche devono affiancare la didattica frontale. Solo così possiamo capire a pieno ciò che studiamo e approfondirlo secondo i nostri interessi.",
  },
  {
    emoji: "🏢",
    title: "Corsi, Spazi e docenti",
    description:
      "Vogliamo aumentare il numero di professori e con essi le partizioni di tutti i corsi più affollati, ottenendo classi meno numerose, e lavorare per recuperare gli spazi inagibili o inutilizzati.",
  },
  {
    emoji: "♿",
    title: "Didattica inclusiva",
    description:
      "L'Universita è casa di tutti. Vogliamo che UNIFI si impegni per rendere ogni spazio e attività accessibile per chi ha disabilità motorie, sensoriali o altri tipi di fragilità.",
  },
  {
    emoji: "🏠",
    title: "Diritto all'abitare",
    description:
      "Per studiare serve una casa. Vogliamo lavorare in tutte le sedi per ottenere più alloggi, finanziare nuove residenze studentesche e ottenere misure a tutela dei prezzi degli affitti per gli universitari.",
  },
  {
    emoji: "🚌",
    title: "Trasporti",
    description:
      "Vogliamo rendere permanente la convenzione per la scontistica sul trasporto urbano e lavorare con le istituzioni e Trenitalia per avere agevolazioni sui treni per pendolari e studenti.",
  },
  {
    emoji: "🏢",
    title: "Sportelli",
    description:
      "Antiviolenza, psicologico e legale sono gli sportelli essenziali che chiediamo all'Ateneo di istituire o potenziare, affinché nessuno venga lasciato indietro.",
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
