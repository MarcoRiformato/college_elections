"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { Icon } from "@/components/ui/icon"

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 sm:h-16 items-center justify-between">
        <Link href="/" className="font-bold text-lg sm:text-xl">
          Pietro Gentili
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Home
          </Link>
          <Link href="/programma" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Programma
          </Link>
          <Link href="/temi" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Temi
          </Link>
          <Link href="/chi-sono" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Chi Sono
          </Link>
        </nav>

        <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
          <Icon icon={Menu} className="h-5 w-5 sm:h-6 sm:w-6" />
          <span className="sr-only">Open menu</span>
        </Button>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white/95 backdrop-blur md:hidden">
          <div className="container flex h-14 sm:h-16 items-center justify-between border-b">
            <div className="font-bold text-lg sm:text-xl">Pietro Gentili</div>
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              <Icon icon={X} className="h-5 w-5 sm:h-6 sm:w-6" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>
          <nav className="container grid gap-4 p-4 sm:p-6 pt-6">
            <div className="flex flex-col gap-4 bg-white/90 backdrop-blur-sm rounded-lg p-4">
              <Link
                href="/"
                className="text-sm font-medium hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/programma"
                className="text-sm font-medium hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Programma
              </Link>
              <Link
                href="/temi"
                className="text-sm font-medium hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Temi
              </Link>
              <Link
                href="/chi-sono"
                className="text-sm font-medium hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Chi Sono
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
