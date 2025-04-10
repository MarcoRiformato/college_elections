import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { GraduationCap, BookOpen, Users, Heart, Award, Calendar, MapPin } from "lucide-react"

export default function ChiSono() {
  return (
    <main className="min-h-screen py-16 px-4">
      {/* Decorative background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-300/20 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-purple-300/20 blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-6 md:mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Chi Sono 👋</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conoscimi meglio: il mio percorso, le mie passioni e perché mi candido al CdA
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center mb-8 md:mb-16">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-xl opacity-30 -z-10 transform -rotate-2"></div>
            <div className="relative bg-white rounded-3xl p-3 shadow-xl">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Pietro Gentili"
                width={600}
                height={600}
                className="rounded-2xl"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-yellow-400 text-yellow-900 rounded-full px-6 py-3 font-bold shadow-lg transform rotate-6">
              Studente di Scienze Politiche 🎓
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Pietro Gentili</h2>
            <p className="text-lg">
              Ciao! Sono Pietro, ho 23 anni e sono uno studente di Scienze Politiche all'Università di Firenze. La mia
              passione per la politica universitaria è nata durante il primo anno, quando ho iniziato a partecipare
              attivamente alla vita del campus.
            </p>
            <p className="text-lg">
              Negli ultimi due anni ho fatto parte della rappresentanza studentesca nel Consiglio di Dipartimento, dove
              ho potuto toccare con mano le problematiche che affrontano quotidianamente gli studenti e lavorare per
              trovare soluzioni concrete.
            </p>
            <p className="text-lg">
              Mi candido al Consiglio di Amministrazione perché credo che l'università debba essere un luogo inclusivo,
              sostenibile e orientato al futuro, dove ogni studente possa esprimere al meglio il proprio potenziale.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              <Button className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Contattami
              </Button>
              <Button variant="outline" className="rounded-full">
                Il mio programma
              </Button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 md:p-6 rounded-xl border border-blue-100">
            <GraduationCap className="h-8 w-8 md:h-10 md:w-10 text-blue-600 mb-3 md:mb-4" />
            <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">Percorso Accademico</h3>
            <p className="text-sm md:text-base text-muted-foreground">
              Laurea triennale in Scienze Politiche (in corso) con focus su politiche pubbliche e amministrazione. Media
              del 28/30.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 md:p-6 rounded-xl border border-purple-100">
            <Users className="h-8 w-8 md:h-10 md:w-10 text-purple-600 mb-3 md:mb-4" />
            <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">Esperienza Rappresentativa</h3>
            <p className="text-sm md:text-base text-muted-foreground">
              Rappresentante degli studenti nel Consiglio di Dipartimento (2023-2025). Membro della Commissione
              Paritetica Docenti-Studenti.
            </p>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-4 md:p-6 rounded-xl border border-amber-100">
            <Heart className="h-8 w-8 md:h-10 md:w-10 text-amber-600 mb-3 md:mb-4" />
            <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">Volontariato</h3>
            <p className="text-sm md:text-base text-muted-foreground">
              Attivo nel supporto agli studenti internazionali. Volontario presso l'associazione "Studenti per
              l'Ambiente".
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 md:p-6 rounded-xl border border-green-100">
            <BookOpen className="h-8 w-8 md:h-10 md:w-10 text-green-600 mb-3 md:mb-4" />
            <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">Interessi Accademici</h3>
            <p className="text-sm md:text-base text-muted-foreground">
              Politiche ambientali, diritti civili, innovazione sociale, governance universitaria e partecipazione
              studentesca.
            </p>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-rose-50 p-4 md:p-6 rounded-xl border border-red-100">
            <Award className="h-8 w-8 md:h-10 md:w-10 text-red-600 mb-3 md:mb-4" />
            <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">Riconoscimenti</h3>
            <p className="text-sm md:text-base text-muted-foreground">
              Premio "Giovani Innovatori" dell'Università di Firenze (2024). Borsa di studio per merito accademico
              (2023).
            </p>
          </div>

          <div className="bg-gradient-to-br from-sky-50 to-cyan-50 p-4 md:p-6 rounded-xl border border-sky-100">
            <MapPin className="h-8 w-8 md:h-10 md:w-10 text-sky-600 mb-3 md:mb-4" />
            <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">Origini</h3>
            <p className="text-sm md:text-base text-muted-foreground">
              Nato e cresciuto a Firenze, profondamente legato al territorio e alla comunità universitaria locale.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">La Mia Timeline 📅</h2>

          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center">
                  <Calendar className="h-5 w-5" />
                </div>
                <div className="w-0.5 h-full bg-blue-200 mt-2"></div>
              </div>
              <div className="pb-8">
                <h3 className="text-xl font-bold">2020</h3>
                <p className="text-muted-foreground">
                  Inizio del percorso universitario in Scienze Politiche all'Università di Firenze.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center">
                  <Calendar className="h-5 w-5" />
                </div>
                <div className="w-0.5 h-full bg-blue-200 mt-2"></div>
              </div>
              <div className="pb-8">
                <h3 className="text-xl font-bold">2022</h3>
                <p className="text-muted-foreground">
                  Prima esperienza come rappresentante degli studenti nel Consiglio di Corso di Laurea.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center">
                  <Calendar className="h-5 w-5" />
                </div>
                <div className="w-0.5 h-full bg-blue-200 mt-2"></div>
              </div>
              <div className="pb-8">
                <h3 className="text-xl font-bold">2023</h3>
                <p className="text-muted-foreground">
                  Eletto rappresentante nel Consiglio di Dipartimento. Inizio del lavoro nella Commissione Paritetica.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center">
                  <Calendar className="h-5 w-5" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold">2025</h3>
                <p className="text-muted-foreground">
                  Candidatura al Consiglio di Amministrazione dell'Università di Firenze.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/contatti"
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-lg font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            Contattami
          </Link>
        </div>
      </div>
    </main>
  )
}
