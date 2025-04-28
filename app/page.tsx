import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Twitter, ArrowRight, Mail } from "lucide-react"
import ProgramCarousel from "@/components/program-carousel"
import ArticlesList from "@/components/articles-list"
import WhatIsCda from "@/components/what-is-cda"
import SupportReels from "@/components/support-reels"
import CountdownTimer from "@/components/countdown-timer"
import { WhatsappCTA } from "@/components/whatsapp-cta"
import { EmailCopyButton } from "@/components/email-copy-button"
import CandidateVideo from "@/components/candidate-video"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Decorative background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-purple-300/30 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-blue-300/30 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-72 h-72 rounded-full bg-pink-300/20 blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-4 sm:py-8 md:py-16 px-2 sm:px-4 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-64 h-64 bg-yellow-200 rounded-full blur-2xl opacity-30 transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 -z-10 w-64 h-64 bg-blue-200 rounded-full blur-2xl opacity-30 transform -translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            {/* Text Content */}
            <div className="w-full md:w-1/2 space-y-4 sm:space-y-6 text-center md:text-left">
              <div className="inline-block px-3 py-1 sm:px-4 sm:py-1 bg-blue-100 text-blue-800 rounded-full text-xs sm:text-sm font-medium animate-pulse">
                Elezioni Università di Firenze 2025 🗳️
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Pietro Gentili
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl font-medium">
                Candidato al Consiglio di Amministrazione con CSX
                <span className="ml-2">✨</span>
              </p>
              <p className="text-base sm:text-lg text-muted-foreground">
                Per un'università a misura di studente. Dove studiare, vivere e crescere insieme come comunità.
              </p>

              <div className="flex flex-wrap gap-3 sm:gap-4 justify-center md:justify-start">
                <Link href="/programma">
                  <Button
                    size="sm"
                    className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 sm:size-lg w-full sm:w-auto"
                  >
                    Scopri il programma di CSX
                  </Button>
                </Link>
                <Link href="/chi-sono">
                  <Button size="sm" variant="outline" className="rounded-full border-2 sm:size-lg w-full sm:w-auto">
                    Chi sono
                  </Button>
                </Link>
                <div className="hidden sm:block">
                  <WhatsappCTA />
                </div>
              </div>

              <div className="flex items-center gap-3 sm:gap-4 pt-2 sm:pt-4 justify-center md:justify-start">
                <span className="text-xs sm:text-sm font-medium text-muted-foreground">Seguimi:</span>
                <Link
                  href="https://www.facebook.com/pietro.gentili.35"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-100 p-1.5 sm:p-2 rounded-full text-blue-600 hover:bg-blue-200 transition-colors"
                >
                  <Facebook size={16} className="sm:w-5 sm:h-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link
                  href="https://www.instagram.com/pietro_gentili_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-pink-100 p-1.5 sm:p-2 rounded-full text-pink-600 hover:bg-pink-200 transition-colors"
                >
                  <Instagram size={16} className="sm:w-5 sm:h-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </div>
            </div>

            {/* Video Component */}
            <div className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
              <div className="relative w-full max-w-[280px]">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-xl opacity-30 -z-10 transform rotate-3"></div>
                <CandidateVideo
                  videoSrc="/video_presentazione_compressed.mp4"
                  className="w-full"
                />
                <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-yellow-900 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-bold shadow-lg transform rotate-6">
                  Il tuo voto conta! 🗳️
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Timer */}
      <section className="py-3 sm:py-4 px-4">
        <div className="container mx-auto max-w-6xl">
          <CountdownTimer />
        </div>
      </section>

      {/* Support Reels Section */}
      <section className="py-4 sm:py-6 md:py-8 px-2 sm:px-3 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-purple-50 -z-10"></div>

        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-4 sm:mb-6 md:mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">Gli altri candidati della lista CSX Firenze</h2>
          </div>

          <SupportReels />
        </div>
      </section>

      {/* Program Carousel */}
      <section className="py-6 sm:py-8 md:py-16 px-4 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-full h-72 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 -z-10 transform -translate-y-1/2"></div>

        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-6 sm:mb-8 md:mb-12 hidden sm:block">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">Il nostro programma 📝</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Ecco i punti principali che mi impegno a portare avanti per migliorare la nostra università
            </p>
          </div>

          <ProgramCarousel />

          <div className="mt-6 sm:mt-8 text-center">
            <Link href="/programma" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
              Scopri il programma completo <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* What is CDA Section */}
      <section className="py-6 sm:py-8 md:py-16 px-4 relative overflow-hidden bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-5"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-20"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">Cos'è il CDA? 🏛️</h2>
            <p className="text-base sm:text-lg text-blue-100 max-w-2xl mx-auto">
              Scopri cosa è il Consiglio di Amministrazione e come può aiutarti nella tua esperienza universitaria
            </p>
          </div>

          <WhatIsCda />
        </div>
      </section>

      {/* Old Website Link */}
      <section className="py-3 px-4 border-t">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-center">
            <Link 
              href="https://old.pietrogentili.it" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary inline-flex items-center gap-2"
            >
              Visita il sito della campagna elettorale amministratativa del comune di Portoferraio 2024
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <WhatsappCTA variant="floating" />
    </main>
  )
}
