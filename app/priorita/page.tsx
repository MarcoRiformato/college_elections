import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Star } from "lucide-react"

export default function Priorita() {
  return (
    <main className="min-h-screen py-8 sm:py-12 md:py-16 px-4">
      {/* Decorative background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-yellow-300/20 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-purple-300/20 blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-6 md:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Le Mie Priorità ⭐</h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            I punti fondamentali su cui mi impegno a lavorare nel Consiglio di Amministrazione
          </p>
        </div>

        <div className="relative mb-6 sm:mb-8 md:mb-16 p-4 sm:p-6 md:p-8 rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 text-white overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl opacity-20 transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl opacity-20 transform -translate-x-1/3 translate-y-1/3"></div>

          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">La Mia Visione 🔭</h2>
            <p className="text-lg sm:text-xl mb-3 sm:mb-4">
              Un'università che metta al centro lo studente, che sia inclusiva, sostenibile e orientata al futuro.
            </p>
            <p className="text-sm sm:text-base md:text-lg">
              Credo in un'università che non sia solo un luogo di formazione, ma una comunità viva e partecipativa, dove
              ogni studente possa esprimere il proprio potenziale e contribuire attivamente alla vita accademica.
              Un'università che prepari non solo professionisti competenti, ma cittadini consapevoli e responsabili.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-16">
          <Card className="overflow-hidden border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 md:p-4">
              <Star className="h-6 w-6 md:h-8 md:w-8 text-white" />
            </div>
            <CardContent className="p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Diritto allo Studio</h3>
              <p className="text-sm md:text-base text-muted-foreground mb-3 md:mb-4">
                Ampliamento delle borse di studio e riduzione delle tasse universitarie per gli studenti meritevoli e in
                difficoltà economica.
              </p>
              <ul className="space-y-1 md:space-y-2 mb-3 md:mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">→</span>
                  <span className="text-sm md:text-base">Aumento del 20% delle borse di studio</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">→</span>
                  <span className="text-sm md:text-base">Revisione del sistema di tassazione</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">→</span>
                  <span className="text-sm md:text-base">Nuove agevolazioni per studenti lavoratori</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="overflow-hidden border-2 border-green-200 hover:border-green-400 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-3 sm:p-4">
              <Star className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
            </div>
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Sostenibilità</h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
                Implementazione di politiche green per rendere il campus più sostenibile e ridurre l'impatto ambientale
                dell'università.
              </p>
              <ul className="space-y-1 sm:space-y-2 mb-3 sm:mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">→</span>
                  <span className="text-sm sm:text-base">Campus plastic-free entro il 2026</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">→</span>
                  <span className="text-sm sm:text-base">Installazione di pannelli solari sugli edifici</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">→</span>
                  <span className="text-sm sm:text-base">Incentivi per la mobilità sostenibile</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="overflow-hidden border-2 border-purple-200 hover:border-purple-400 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-3 sm:p-4">
              <Star className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
            </div>
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Spazi Studenteschi</h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
                Creazione di nuovi spazi di studio e socializzazione, con orari estesi e migliori servizi per gli
                studenti.
              </p>
              <ul className="space-y-1 sm:space-y-2 mb-3 sm:mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 font-bold">→</span>
                  <span className="text-sm sm:text-base">Nuove aule studio aperte 24/7</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 font-bold">→</span>
                  <span className="text-sm sm:text-base">Riqualificazione degli spazi comuni</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 font-bold">→</span>
                  <span className="text-sm sm:text-base">Potenziamento del Wi-Fi in tutte le sedi</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="overflow-hidden border-2 border-amber-200 hover:border-amber-400 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
            <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-3 sm:p-4">
              <Star className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
            </div>
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Ricerca e Innovazione</h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
                Maggiori investimenti nella ricerca e collaborazioni con aziende per creare opportunità di lavoro per i
                laureati.
              </p>
              <ul className="space-y-1 sm:space-y-2 mb-3 sm:mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold">→</span>
                  <span className="text-sm sm:text-base">Aumento dei fondi per la ricerca</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold">→</span>
                  <span className="text-sm sm:text-base">Nuove partnership con aziende del territorio</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold">→</span>
                  <span className="text-sm sm:text-base">Potenziamento dell'ufficio placement</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="overflow-hidden border-2 border-sky-200 hover:border-sky-400 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
            <div className="bg-gradient-to-r from-sky-500 to-sky-600 p-3 sm:p-4">
              <Star className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
            </div>
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Internazionalizzazione</h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
                Potenziamento dei programmi di scambio internazionale e delle opportunità di studio all'estero.
              </p>
              <ul className="space-y-1 sm:space-y-2 mb-3 sm:mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-sky-500 font-bold">→</span>
                  <span className="text-sm sm:text-base">Aumento delle borse Erasmus+ del 30%</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-500 font-bold">→</span>
                  <span className="text-sm sm:text-base">Nuovi accordi con università straniere</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-500 font-bold">→</span>
                  <span className="text-sm sm:text-base">Corsi di lingua gratuiti per gli studenti</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="overflow-hidden border-2 border-rose-200 hover:border-rose-400 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
            <div className="bg-gradient-to-r from-rose-500 to-rose-600 p-3 sm:p-4">
              <Star className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
            </div>
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Inclusività</h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
                Garantire l'accessibilità a tutti gli spazi universitari e supporto per studenti con disabilità o DSA.
              </p>
              <ul className="space-y-1 sm:space-y-2 mb-3 sm:mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">→</span>
                  <span className="text-sm sm:text-base">Eliminazione delle barriere architettoniche</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">→</span>
                  <span className="text-sm sm:text-base">Potenziamento del servizio di supporto DSA</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">→</span>
                  <span className="text-sm sm:text-base">Formazione del personale sull'inclusività</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-4 sm:p-6 md:p-8 mb-8 sm:mb-12 md:mb-16 border border-indigo-100">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center">Come Realizzerò Queste Priorità 🛠️</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-lg sm:text-xl font-bold">Dialogo Costante</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Manterrò un dialogo costante con gli studenti attraverso incontri periodici, sondaggi e un canale
                diretto di comunicazione per raccogliere feedback e suggerimenti.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-lg sm:text-xl font-bold">Collaborazione</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Lavorerò in sinergia con gli altri membri del CdA, i rappresentanti degli studenti negli altri organi e
                le associazioni studentesche per portare avanti le istanze degli studenti.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-lg sm:text-xl font-bold">Trasparenza</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Garantirò la massima trasparenza nelle decisioni prese, comunicando regolarmente agli studenti
                l'avanzamento dei progetti e le motivazioni delle scelte.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-lg sm:text-xl font-bold">Determinazione</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Mi impegnerò con determinazione per portare avanti le istanze degli studenti, cercando sempre soluzioni
                concrete e praticabili ai problemi.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/programma"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2.5 sm:px-8 sm:py-3 text-base sm:text-lg font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            Scopri il programma completo <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </Link>
        </div>
      </div>
    </main>
  )
}
