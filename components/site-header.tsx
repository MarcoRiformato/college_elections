"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 sm:h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="font-bold text-lg sm:text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Pietro Gentili
          </Link>
          <span className="hidden sm:inline-block px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
            Candidato CdA
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-4 lg:gap-6">
          <Link href="/" className="text-sm font-medium hover:text-primary">
            Home
          </Link>
          <Link href="/chi-sono" className="text-sm font-medium hover:text-primary">
            Chi Sono
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="link"
                className="text-sm font-medium hover:text-primary flex items-center gap-1 h-auto p-0"
              >
                Programma <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href="/priorita">Priorità</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/programma">Programma Completo</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="/come-si-vota" className="text-sm font-medium hover:text-primary">
            Come Si Vota
          </Link>
          <Link href="/contatti" className="text-sm font-medium hover:text-primary">
            Contatti
          </Link>
          <Button size="sm" className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600">
            Sostienimi
          </Button>
        </nav>

        <Button variant="ghost" size="icon" className="md:hidden border border-gray-200" onClick={toggleMenu}>
          <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>

        {isMenuOpen && (
          <div className="fixed inset-0 z-50 bg-background md:hidden">
            <div className="container flex h-14 sm:h-16 items-center justify-between border-b">
              <div className="font-bold text-lg sm:text-xl">Pietro Gentili</div>
              <Button variant="ghost" size="icon" onClick={toggleMenu}>
                <X className="h-5 w-5 sm:h-6 sm:w-6" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>
            <nav className="container grid gap-4 p-4 sm:p-6 pt-6">
              <Link
                href="/"
                className="flex items-center gap-2 text-base sm:text-lg font-medium hover:text-primary py-2"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                href="/chi-sono"
                className="flex items-center gap-2 text-base sm:text-lg font-medium hover:text-primary py-2"
                onClick={toggleMenu}
              >
                Chi Sono
              </Link>
              <Link
                href="/priorita"
                className="flex items-center gap-2 text-base sm:text-lg font-medium hover:text-primary py-2"
                onClick={toggleMenu}
              >
                Priorità
              </Link>
              <Link
                href="/programma"
                className="flex items-center gap-2 text-base sm:text-lg font-medium hover:text-primary py-2"
                onClick={toggleMenu}
              >
                Programma
              </Link>
              <Link
                href="/come-si-vota"
                className="flex items-center gap-2 text-base sm:text-lg font-medium hover:text-primary py-2"
                onClick={toggleMenu}
              >
                Come Si Vota
              </Link>
              <Link
                href="/contatti"
                className="flex items-center gap-2 text-base sm:text-lg font-medium hover:text-primary py-2"
                onClick={toggleMenu}
              >
                Contatti
              </Link>
              <div className="pt-2">
                <Button className="w-full rounded-full bg-gradient-to-r from-blue-600 to-purple-600">Sostienimi</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
