import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Check, HelpCircle, AlertCircle, Calendar, MapPin, Vote } from "lucide-react"
import CountdownTimer from "@/components/countdown-timer"
import { WhatsappCTA } from "@/components/whatsapp-cta"

export default function ComeSiVota() {
  return (
    <main className="min-h-screen py-16 px-4">
      {/* Decorative background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-300/20 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-purple-300/20 blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-6 md:mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Come Si Vota 🗳️</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tutte le informazioni necessarie per partecipare alle elezioni del Consiglio di Amministrazione
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-16">
          <div className="md:col-span-2 space-y-8">
            <Card className="overflow-hidden border-2 border-blue-200">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 md:p-4 text-white">
                <h2 className="text-xl md:text-2xl font-bold">Informazioni Generali</h2>
              </div>
              <CardContent className="p-4 md:p-6">
                <div className="space-y-4 md:space-y-6">
                  <div className="flex gap-4 items-start">
                    <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                      <Calendar className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Quando si vota</h3>
                      <p className="text-muted-foreground">
                        Le elezioni si terranno nei giorni <strong>7 e 8 maggio 2025</strong>.<br />
                        Orari: dalle 9:00 alle 19:00 (7 maggio) e dalle 9:00 alle 17:00 (8 maggio).
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="bg-purple-100 p-2 rounded-full text-purple-600">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Dove si vota</h3>
                      <p className="text-muted-foreground">
                        È possibile votare online tramite il portale dell'università o in presenza presso i seggi
                        elettorali allestiti nelle varie sedi:
                      </p>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-muted-foreground">
                        <li>Sede Centrale - Piazza San Marco</li>
                        <li>Polo Scientifico - Sesto Fiorentino</li>
                        <li>Polo delle Scienze Sociali - Novoli</li>
                        <li>Polo Biomedico - Careggi</li>
                        <li>Polo Umanistico - Centro Storico</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="bg-amber-100 p-2 rounded-full text-amber-600">
                      <HelpCircle className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Chi può votare</h3>
                      <p className="text-muted-foreground">
                        Hanno diritto al voto tutti gli studenti regolarmente iscritti all'Università di Firenze per
                        l'anno accademico 2024/2025, compresi gli studenti dei corsi di laurea, laurea magistrale,
                        dottorato, scuole di specializzazione e master.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-2 border-green-200">
              <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 text-white">
                <h2 className="text-2xl font-bold">Modalità di Voto</h2>
              </div>
              <CardContent className="p-6">
                <div className="space-y-8">
                  <div>
                    <h3 className="font-bold text-xl mb-4">Voto Online</h3>
                    <div className="bg-green-50 rounded-lg p-4 border border-green-100">
                      <ol className="space-y-4">
                        <li className="flex gap-3">
                          <div className="bg-green-200 rounded-full w-6 h-6 flex items-center justify-center text-green-800 font-bold flex-shrink-0 mt-0.5">
                            1
                          </div>
                          <div>
                            <p>
                              Accedi al portale{" "}
                              <a href="#" className="text-green-600 font-medium hover:underline">
                                https://elezioni.unifi.it
                              </a>{" "}
                              utilizzando le tue credenziali universitarie (le stesse che usi per i servizi online
                              dell'ateneo).
                            </p>
                          </div>
                        </li>
                        <li className="flex gap-3">
                          <div className="bg-green-200 rounded-full w-6 h-6 flex items-center justify-center text-green-800 font-bold flex-shrink-0 mt-0.5">
                            2
                          </div>
                          <div>
                            <p>Seleziona "Elezioni CdA 2025" dalla lista delle votazioni attive.</p>
                          </div>
                        </li>
                        <li className="flex gap-3">
                          <div className="bg-green-200 rounded-full w-6 h-6 flex items-center justify-center text-green-800 font-bold flex-shrink-0 mt-0.5">
                            3
                          </div>
                          <div>
                            <p>
                              Visualizza la lista dei candidati e seleziona il candidato che desideri votare (puoi
                              selezionare un solo candidato).
                            </p>
                          </div>
                        </li>
                        <li className="flex gap-3">
                          <div className="bg-green-200 rounded-full w-6 h-6 flex items-center justify-center text-green-800 font-bold flex-shrink-0 mt-0.5">
                            4
                          </div>
                          <div>
                            <p>Conferma la tua scelta. Riceverai una ricevuta di voto via email.</p>
                          </div>
                        </li>
                      </ol>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold text-xl mb-4">Voto in Presenza</h3>
                    <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                      <ol className="space-y-4">
                        <li className="flex gap-3">
                          <div className="bg-blue-200 rounded-full w-6 h-6 flex items-center justify-center text-blue-800 font-bold flex-shrink-0 mt-0.5">
                            1
                          </div>
                          <div>
                            <p>Recati presso uno dei seggi elettorali negli orari di apertura.</p>
                          </div>
                        </li>
                        <li className="flex gap-3">
                          <div className="bg-blue-200 rounded-full w-6 h-6 flex items-center justify-center text-blue-800 font-bold flex-shrink-0 mt-0.5">
                            2
                          </div>
                          <div>
                            <p>
                              Presenta un documento di identità valido e la tessera universitaria (o libretto
                              universitario).
                            </p>
                          </div>
                        </li>
                        <li className="flex gap-3">
                          <div className="bg-blue-200 rounded-full w-6 h-6 flex items-center justify-center text-blue-800 font-bold flex-shrink-0 mt-0.5">
                            3
                          </div>
                          <div>
                            <p>Ritira la scheda elettorale e recati in cabina.</p>
                          </div>
                        </li>
                        <li className="flex gap-3">
                          <div className="bg-blue-200 rounded-full w-6 h-6 flex items-center justify-center text-blue-800 font-bold flex-shrink-0 mt-0.5">
                            4
                          </div>
                          <div>
                            <p>
                              Esprimi il tuo voto tracciando una X sul nome del candidato scelto (puoi selezionare un
                              solo candidato).
                            </p>
                          </div>
                        </li>
                        <li className="flex gap-3">
                          <div className="bg-blue-200 rounded-full w-6 h-6 flex items-center justify-center text-blue-800 font-bold flex-shrink-0 mt-0.5">
                            5
                          </div>
                          <div>
                            <p>Piega la scheda e inseriscila nell'urna.</p>
                          </div>
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-2 border-red-200">
              <div className="bg-gradient-to-r from-red-500 to-red-600 p-4 text-white">
                <h2 className="text-2xl font-bold">Importante da Sapere</h2>
              </div>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <AlertCircle className="h-6 w-6 text-red-500 flex-shrink-0" />
                    <p>
                      È necessario presentare un documento di identità valido per votare, sia online che in presenza.
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <AlertCircle className="h-6 w-6 text-red-500 flex-shrink-0" />
                    <p>
                      È possibile votare per un solo candidato. Schede con più preferenze saranno considerate nulle.
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <AlertCircle className="h-6 w-6 text-red-500 flex-shrink-0" />
                    <p>
                      Una volta confermato il voto online o inserita la scheda nell'urna, non è possibile modificare la
                      propria scelta.
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <AlertCircle className="h-6 w-6 text-red-500 flex-shrink-0" />
                    <p>
                      Gli studenti che si trovano all'estero per programmi di mobilità possono votare esclusivamente
                      online.
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <AlertCircle className="h-6 w-6 text-red-500 flex-shrink-0" />
                    <p>
                      In caso di problemi tecnici con il voto online, è possibile contattare il supporto tecnico
                      all'indirizzo{" "}
                      <a href="mailto:supporto.elezioni@unifi.it" className="text-blue-600 hover:underline">
                        supporto.elezioni@unifi.it
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100">
              <h2 className="text-2xl font-bold mb-4">Perché è importante votare</h2>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <Check className="h-6 w-6 text-indigo-600 flex-shrink-0" />
                  <p>
                    Il Consiglio di Amministrazione prende decisioni fondamentali che influenzano direttamente la vita
                    universitaria, dalla qualità della didattica ai servizi per gli studenti.
                  </p>
                </div>

                <div className="flex gap-3">
                  <Check className="h-6 w-6 text-indigo-600 flex-shrink-0" />
                  <p>
                    Votare significa far sentire la propria voce e contribuire a costruire un'università migliore, più
                    inclusiva e orientata al futuro.
                  </p>
                </div>

                <div className="flex gap-3">
                  <Check className="h-6 w-6 text-indigo-600 flex-shrink-0" />
                  <p>
                    Una rappresentanza studentesca forte nel CdA è essenziale per garantire che le esigenze degli
                    studenti siano considerate nelle decisioni strategiche dell'ateneo.
                  </p>
                </div>

                <div className="flex gap-3">
                  <Check className="h-6 w-6 text-indigo-600 flex-shrink-0" />
                  <p>Ogni voto conta! Le elezioni universitarie si decidono spesso per pochi voti di differenza.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <CountdownTimer />

            <Card className="overflow-hidden border-2 border-purple-200">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-4 text-white">
                <h2 className="text-xl font-bold">Hai domande?</h2>
              </div>
              <CardContent className="p-6">
                <p className="mb-4 text-muted-foreground">
                  Se hai dubbi o domande sul processo di voto, non esitare a contattarmi!
                </p>
                <div className="space-y-3">
                  <Button className="w-full">Contattami</Button>
                  <WhatsappCTA variant="inline" />
                </div>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl p-6 border border-yellow-100">
              <h3 className="text-xl font-bold mb-3">Promemoria</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Vote className="h-5 w-5 text-amber-600" />
                  <p className="font-medium">7-8 Maggio 2025</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  Aggiungi un promemoria al tuo calendario per non dimenticare di votare!
                </p>
                <Button variant="outline" className="w-full">
                  Aggiungi al calendario
                </Button>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Seggio elettorale"
                width={600}
                height={400}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                <p className="text-white text-sm">
                  Seggio elettorale presso la sede centrale dell'Università di Firenze
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-6 md:mt-12">
          <Link
            href="/programma"
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-lg font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            Scopri il mio programma
          </Link>
        </div>
      </div>
    </main>
  )
}
