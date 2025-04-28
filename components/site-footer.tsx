import Link from "next/link"

export default function SiteFooter() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container py-6 sm:py-8 md:py-12">
        <div className="flex flex-col items-center">
          <div className="space-y-3 md:space-y-4">
            <h3 className="text-xs sm:text-sm font-bold text-center">Navigazione</h3>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm flex flex-wrap justify-center gap-4">
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
            </ul>
          </div>
        </div>

        <div className="mt-6 pt-6 sm:mt-8 sm:pt-8 border-t text-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Pietro Gentili. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  )
}
