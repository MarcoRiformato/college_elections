import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, ArrowRight, Calendar } from "lucide-react"

export default function ChiSono() {
  return (
    <main className="min-h-screen py-8 sm:py-16 px-2 sm:px-4">
      {/* Decorative background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-blue-300/20 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-purple-300/20 blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Chi Sono 👋</h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Conoscimi meglio: il mio percorso, le mie passioni e perché mi candido con CSX al CDA
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-8 md:gap-12 mb-8 sm:mb-12 md:mb-16">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-xl opacity-30 -z-10 transform rotate-3"></div>
            <div className="relative bg-white rounded-3xl p-2 shadow-xl">
              <Image
                src="/pietro.webp"
                alt="Pietro Gentili"
                width={600}
                height={600}
                className="rounded-2xl"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-yellow-900 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-bold shadow-lg transform rotate-6">
              Studente di Giurisprudenza
            </div>
          </div>

          <div className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground">
                Ciao! Sono Pietro, ho 23 anni e sono uno studente di Giurisprudenza all'Università di Firenze. La mia
              passione per la politica universitaria è nata durante il primo anno, quando ho iniziato a partecipare
              attivamente alla vita del campus.
            </p>
              <p className="text-lg text-muted-foreground">
              Negli ultimi due anni ho fatto parte della rappresentanza studentesca nel Consiglio di Dipartimento, dove
              ho potuto toccare con mano le problematiche che affrontano quotidianamente gli studenti e lavorare per
              trovare soluzioni concrete.
            </p>
              <p className="text-lg text-muted-foreground">
                Mi candido al Consiglio di Amministrazione con CSX perché credo che l'università debba essere un luogo inclusivo,
              sostenibile e orientato al futuro, dove ogni studente possa esprimere al meglio il proprio potenziale.
            </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                asChild
              >
                <Link href="https://wa.me/your-number">
                  Contattami su WhatsApp
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-2" asChild>
                <Link href="/programma">
                  Il nostro programma <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          <Card className="border-2 hover:border-blue-300 transition-all duration-300">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">👥 Comunità</h3>
              <p className="text-muted-foreground">
                Credo in una università a misura di studente, dove poter vivere, conoscersi e crescere con molteplici attività volontarie, anche fuori dall'orario delle lezioni
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-blue-300 transition-all duration-300">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">🤝 Inclusione</h3>
              <p className="text-muted-foreground">
                L'Universita' deve essere la casa di tutti. Abbattere le barriere che rendono UNIFI ostile alle persone più fragili è un obbiettivo irrinunciabile, per permettere a tutti di vivere a pieno l'esperienza universitaria.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-blue-300 transition-all duration-300">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">🎯 Esperienza rappresentativa</h3>
              <p className="text-muted-foreground">
                Metto a disposizione la mia esperienza di rappresentanza al liceo (4 anni), realizzata sia nella mia scuola che a livello nazionale con l'Ufficio di Coordinamento Nazionale delle Consulte Studentesche.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-blue-300 transition-all duration-300">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">📚 Diritto allo studio</h3>
              <p className="text-muted-foreground">
                È diritto di ognuno e interesse del progresso della società che tutti possano avere accesso all'università, senza che i costi elevati glielo impediscano.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-blue-300 transition-all duration-300">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">💡 Innovazione</h3>
              <p className="text-muted-foreground">
                L'innovazione è indispensabile per l'università tanto quanto lo è l'università per l'innovazione. Innovare la didattica e le attività, sia a livello tecnologico che non, è una sfida fondamentale.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Le Mie Esperienze 📅</h2>

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
                  Inizio del percorso universitario in Giurisprudenza all'Università di Firenze.
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
                  Candidatura al Consiglio di Amministrazione dell'Università di Firenze con CSX.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
