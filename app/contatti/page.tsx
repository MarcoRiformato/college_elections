import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Send } from "lucide-react"
import Link from "next/link"

export default function Contatti() {
  return (
    <main className="min-h-screen py-16 px-4">
      {/* Decorative background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-blue-300/20 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-purple-300/20 blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-6 md:mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contattami 📬</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hai domande, suggerimenti o vuoi partecipare attivamente alla campagna? Sono qui per ascoltarti!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-12 mb-8 md:mb-16">
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 md:p-6 border border-blue-100">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Informazioni di Contatto</h2>

              <div className="space-y-3 md:space-y-4">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="bg-blue-100 p-2 md:p-3 rounded-full text-blue-600">
                    <Mail className="h-5 w-5 md:h-6 md:w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold">Email</h3>
                    <p className="text-sm md:text-base text-muted-foreground">pietro.gentili@example.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-3 rounded-full text-purple-600">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold">Telefono</h3>
                    <p className="text-muted-foreground">+39 123 456 7890</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 p-3 rounded-full text-amber-600">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold">Ufficio</h3>
                    <p className="text-muted-foreground">
                      Sede Rappresentanza Studenti
                      <br />
                      Università di Firenze
                      <br />
                      Via delle Pandette, 32
                      <br />
                      50127 Firenze
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 md:p-6 border border-purple-100">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Social Media</h2>

              <div className="grid grid-cols-3 gap-2 md:gap-4">
                <Link
                  href="#"
                  className="flex flex-col items-center gap-1 md:gap-2 p-3 md:p-4 bg-white rounded-lg hover:shadow-md transition-all"
                >
                  <div className="bg-blue-100 p-2 md:p-3 rounded-full text-blue-600">
                    <Facebook className="h-5 w-5 md:h-6 md:w-6" />
                  </div>
                  <span className="font-medium text-sm md:text-base">Facebook</span>
                </Link>

                <Link
                  href="#"
                  className="flex flex-col items-center gap-2 p-4 bg-white rounded-lg hover:shadow-md transition-all"
                >
                  <div className="bg-pink-100 p-3 rounded-full text-pink-600">
                    <Instagram className="h-6 w-6" />
                  </div>
                  <span className="font-medium">Instagram</span>
                </Link>

                <Link
                  href="#"
                  className="flex flex-col items-center gap-2 p-4 bg-white rounded-lg hover:shadow-md transition-all"
                >
                  <div className="bg-sky-100 p-3 rounded-full text-sky-600">
                    <Twitter className="h-6 w-6" />
                  </div>
                  <span className="font-medium">Twitter</span>
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
              <h2 className="text-2xl font-bold mb-6">Orari di Ricevimento</h2>

              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                  <span className="font-medium">Lunedì</span>
                  <span className="text-muted-foreground">14:00 - 16:00</span>
                </div>

                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                  <span className="font-medium">Mercoledì</span>
                  <span className="text-muted-foreground">10:00 - 12:00</span>
                </div>

                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                  <span className="font-medium">Venerdì</span>
                  <span className="text-muted-foreground">15:00 - 17:00</span>
                </div>
              </div>

              <p className="mt-4 text-sm text-muted-foreground">
                * Durante il periodo elettorale sono disponibile tutti i giorni su appuntamento.
              </p>
            </div>
          </div>

          <div>
            <Card className="border-2">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">Inviami un Messaggio</h2>

                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="first-name" className="text-sm font-medium">
                        Nome
                      </label>
                      <Input id="first-name" placeholder="Il tuo nome" />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="last-name" className="text-sm font-medium">
                        Cognome
                      </label>
                      <Input id="last-name" placeholder="Il tuo cognome" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="La tua email" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Oggetto
                    </label>
                    <Input id="subject" placeholder="Oggetto del messaggio" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Messaggio
                    </label>
                    <Textarea id="message" placeholder="Il tuo messaggio" rows={5} />
                  </div>

                  <Button type="submit" className="w-full gap-2">
                    <Send className="h-4 w-4" /> Invia Messaggio
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="mt-8 p-6 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl border border-yellow-100">
              <h3 className="text-xl font-bold mb-4">Unisciti al Team! 🤝</h3>
              <p className="mb-4">
                Vuoi partecipare attivamente alla campagna elettorale? Unisciti al nostro team di volontari!
              </p>
              <Button variant="outline" className="bg-white border-yellow-200 text-yellow-700 hover:bg-yellow-50">
                Diventa Volontario
              </Button>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 mb-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">FAQ</h2>
            <p className="text-lg max-w-2xl mx-auto">
              Ecco alcune delle domande più frequenti. Se non trovi la risposta che cerchi, contattami!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white/10 p-4 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Quando si terranno le elezioni?</h3>
              <p>Le elezioni si terranno il 7 e 8 maggio 2025.</p>
            </div>

            <div className="bg-white/10 p-4 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Chi può votare?</h3>
              <p>Tutti gli studenti regolarmente iscritti all'Università di Firenze.</p>
            </div>

            <div className="bg-white/10 p-4 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Come si vota?</h3>
              <p>Si vota online tramite il portale dell'università o in presenza presso i seggi elettorali.</p>
            </div>

            <div className="bg-white/10 p-4 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Posso partecipare alla campagna?</h3>
              <p>Assolutamente sì! Contattami per sapere come puoi contribuire.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
