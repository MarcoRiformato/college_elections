"use client"

import { Button } from "@/components/ui/button"
import { Icon } from "@/components/ui/icon"
import { WhatsappIcon } from "./icons"

export function WhatsappCTA({ variant = "default" }: { variant?: "default" | "floating" | "inline" }) {
  const handleWhatsAppSignup = () => {
    // In a real implementation, this would open a WhatsApp chat or a form
    window.open(
      "https://wa.me/393773024349?text=Ciao!%20Voglio%20ricevere%20aggiornamenti%20sulla%20tua%20campagna",
      "_blank",
    )
  }

  if (variant === "floating") {
    return (
      <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50">
        <Button
          onClick={handleWhatsAppSignup}
          className="rounded-full h-14 w-14 bg-green-500 hover:bg-green-600 shadow-xl"
        >
          <Icon icon={WhatsappIcon} className="h-7 w-7" />
          <span className="sr-only">Ricevi aggiornamenti via WhatsApp</span>
        </Button>
        <div className="absolute -top-8 right-0 bg-white text-xs px-2 py-1 rounded shadow-md whitespace-nowrap hidden sm:block">
          Aggiornamenti WhatsApp
        </div>
      </div>
    )
  }

  if (variant === "inline") {
    return (
      <Button
        onClick={handleWhatsAppSignup}
        className="bg-green-500 hover:bg-green-600 gap-2 w-full sm:w-auto text-xs sm:text-sm"
        size="sm"
      >
        <Icon icon={WhatsappIcon} className="h-4 w-4 sm:h-5 sm:w-5" />
        Aggiornamenti WhatsApp
      </Button>
    )
  }

  // Default variant
  return (
    <Button
      onClick={handleWhatsAppSignup}
      className="bg-green-500 hover:bg-green-600 gap-2 rounded-full px-3 sm:px-6 text-xs sm:text-sm"
      size="sm"
    >
      <Icon icon={WhatsappIcon} className="h-4 w-4 sm:h-5 sm:w-5" />
      Ricevi aggiornamenti via WhatsApp
    </Button>
  )
}
