import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function SiteFooter() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container py-6 sm:py-8 md:py-12">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <div className="space-y-3 md:space-y-4 col-span-2 sm:col-span-2 md:col-span-1">
            <h3 className="text-base md:text-lg font-bold">Pietro Gentili</h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Candidato al Consiglio di Amministrazione
              <br />
              Università di Firenze
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div className="space-y-3 md:space-y-4">
            <h3 className="text-xs sm:text-sm font-bold">Pagine</h3>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/chi-sono" className="text-muted-foreground hover:text-primary">
                  Chi Sono
                </Link>
              </li>
              <li>
                <Link href="/priorita" className="text-muted-foreground hover:text-primary">
                  Priorità
                </Link>
              </li>
              <li>
                <Link href="/programma" className="text-muted-foreground hover:text-primary">
                  Programma
                </Link>
              </li>
              <li>
                <Link href="/come-si-vota" className="text-muted-foreground hover:text-primary">
                  Come Si Vota
                </Link>
              </li>
              <li>
                <Link href="/contatti" className="text-muted-foreground hover:text-primary">
                  Contatti
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3 md:space-y-4">
            <h3 className="text-xs sm:text-sm font-bold">Informazioni</h3>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  Elezioni CdA 2025
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  Cos'è il CdA
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  Come si vota
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-semibold">Contatti</h3>
            <p className="text-sm text-muted-foreground">pietrogentili2004@gmail.com</p>
            <p className="text-sm text-muted-foreground">Instagram: pietro_gentili_</p>
            <p className="text-sm text-muted-foreground">Tik Tok: pietro_gentili</p>
          </div>
        </div>

        <div className="mt-6 pt-6 sm:mt-8 sm:pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground text-center sm:text-left">
            &copy; {new Date().getFullYear()} Pietro Gentili. Tutti i diritti riservati.
          </p>
          <div className="flex gap-4 text-xs">
            <Link href="#" className="text-muted-foreground hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              Cookie Policy
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              Termini e Condizioni
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
