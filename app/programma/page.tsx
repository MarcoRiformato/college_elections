import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Download, Share2 } from "lucide-react"

export default function Programma() {
  return (
    <main className="min-h-screen py-16 px-4">
      {/* Decorative background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-green-300/20 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-blue-300/20 blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl">
        {/* Adjust the header and buttons for better mobile experience */}
        <div className="text-center mb-4 sm:mb-6 md:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Programma Elettorale 📝</h1>
          <p className="text-sm sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Un piano dettagliato per migliorare l'Università di Firenze e la vita degli studenti
          </p>
        </div>

        <div className="flex justify-center gap-2 sm:gap-3 md:gap-4 mb-5 sm:mb-6 md:mb-8">
          <Button className="gap-1 sm:gap-2 py-1 px-3 sm:px-4 sm:py-2 text-xs sm:text-sm">
            <Download className="h-3 w-3 sm:h-4 sm:w-4" /> Scarica PDF
          </Button>
          <Button variant="outline" className="gap-1 sm:gap-2 py-1 px-3 sm:px-4 sm:py-2 text-xs sm:text-sm">
            <Share2 className="h-3 w-3 sm:h-4 sm:w-4" /> Condividi
          </Button>
        </div>

        <div className="mb-16">
          <Tabs defaultValue="diritto-studio" className="w-full">
            <TabsList className="flex min-w-full overflow-x-auto hide-scrollbar p-1 mb-4 md:mb-8 space-x-2">
              <TabsTrigger
                value="diritto-studio"
                className="py-1 whitespace-nowrap md:py-2 text-xs md:text-sm flex-shrink-0"
              >
                Diritto allo Studio
              </TabsTrigger>
              <TabsTrigger
                value="sostenibilita"
                className="py-1 whitespace-nowrap md:py-2 text-xs md:text-sm flex-shrink-0"
              >
                Sostenibilità
              </TabsTrigger>
              <TabsTrigger value="spazi" className="py-1 whitespace-nowrap md:py-2 text-xs md:text-sm flex-shrink-0">
                Spazi
              </TabsTrigger>
              <TabsTrigger value="ricerca" className="py-1 whitespace-nowrap md:py-2 text-xs md:text-sm flex-shrink-0">
                Ricerca
              </TabsTrigger>
              <TabsTrigger
                value="internazionalizzazione"
                className="py-1 whitespace-nowrap md:py-2 text-xs md:text-sm flex-shrink-0"
              >
                Internazionalizzazione
              </TabsTrigger>
              <TabsTrigger
                value="inclusivita"
                className="py-1 whitespace-nowrap md:py-2 text-xs md:text-sm flex-shrink-0"
              >
                Inclusività
              </TabsTrigger>
            </TabsList>

            <TabsContent value="diritto-studio" className="space-y-4 md:space-y-8">
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-3 md:p-6">
                <h2 className="text-lg md:text-2xl font-bold mb-2 md:mb-4 text-blue-800">Diritto allo Studio 🎓</h2>
                <p className="text-sm md:text-lg mb-3 md:mb-6">
                  Garantire a tutti gli studenti l'accesso all'istruzione superiore, indipendentemente dalla loro
                  condizione economica, è una priorità fondamentale.
                </p>

                <div className="space-y-3 md:space-y-6">
                  <div className="bg-white rounded-lg p-3 md:p-4 shadow-sm">
                    <h3 className="text-base md:text-xl font-bold mb-1 md:mb-2">Borse di Studio</h3>
                    <p className="text-xs md:text-base mb-2 md:mb-4">
                      Propongo un aumento del 20% delle borse di studio disponibili e una revisione dei criteri di
                      assegnazione per garantire che raggiungano chi ne ha davvero bisogno.
                    </p>
                    <ul className="list-disc pl-4 sm:pl-5 space-y-0.5 md:space-y-1 text-xs md:text-base text-muted-foreground">
                      <li>Incremento del budget destinato alle borse di studio</li>
                      <li>Revisione dei criteri ISEE per l'accesso alle borse</li>
                      <li>Creazione di borse di studio specifiche per studenti con disabilità</li>
                      <li>Semplificazione delle procedure di richiesta</li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-lg p-3 md:p-4 shadow-sm">
                    <h3 className="text-base md:text-xl font-bold mb-1 md:mb-2">Tasse Universitarie</h3>
                    <p className="text-xs md:text-base mb-2 md:mb-4">
                      Propongo una revisione del sistema di tassazione per renderlo più equo e progressivo, con
                      particolare attenzione alle fasce di reddito medio-basse.
                    </p>
                    <ul className="list-disc pl-4 sm:pl-5 space-y-0.5 md:space-y-1 text-xs md:text-base text-muted-foreground">
                      <li>Ampliamento della no-tax area</li>
                      <li>Riduzione delle tasse per le famiglie con più figli iscritti all'università</li>
                      <li>Agevolazioni per studenti lavoratori</li>
                      <li>Rateizzazione più flessibile dei pagamenti</li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-lg p-3 md:p-4 shadow-sm">
                    <h3 className="text-base md:text-xl font-bold mb-1 md:mb-2">Alloggi Studenteschi</h3>
                    <p className="text-xs md:text-base mb-2 md:mb-4">
                      Propongo un piano per aumentare la disponibilità di alloggi a prezzi accessibili per gli studenti,
                      in collaborazione con il DSU e il Comune di Firenze.
                    </p>
                    <ul className="list-disc pl-4 sm:pl-5 space-y-0.5 md:space-y-1 text-xs md:text-base text-muted-foreground">
                      <li>Costruzione di nuove residenze universitarie</li>
                      <li>Convenzioni con privati per affitti a canone calmierato</li>
                      <li>Creazione di un portale per la ricerca di alloggi verificati</li>
                      <li>Supporto legale per gli studenti in cerca di alloggio</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="sostenibilita" className="space-y-8">
              <div className="bg-green-50 border border-green-100 rounded-xl p-6">
                <h2 className="text-2xl font-bold mb-4 text-green-800">Sostenibilità 🌱</h2>
                <p className="text-lg mb-6">
                  L'università deve essere in prima linea nella lotta al cambiamento climatico e nella promozione di
                  stili di vita sostenibili.
                </p>

                <div className="space-y-6">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h3 className="text-xl font-bold mb-2">Campus Plastic-Free</h3>
                    <p className="mb-4">
                      Propongo un piano per eliminare completamente la plastica monouso dal campus entro il 2026, con
                      l'installazione di erogatori d'acqua e la distribuzione di borracce riutilizzabili.
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>Eliminazione dei distributori di bottiglie di plastica</li>
                      <li>Installazione di erogatori d'acqua in tutte le sedi</li>
                      <li>Distribuzione di borracce riutilizzabili agli studenti</li>
                      <li>Sostituzione delle stoviglie monouso nelle mense con alternative compostabili</li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h3 className="text-xl font-bold mb-2">Energia Rinnovabile</h3>
                    <p className="mb-4">
                      Propongo l'installazione di pannelli solari sugli edifici universitari per ridurre l'impronta
                      carbonica dell'ateneo e promuovere l'uso di energie rinnovabili.
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>Installazione di pannelli solari sui tetti degli edifici universitari</li>
                      <li>Passaggio a fornitori di energia 100% rinnovabile</li>
                      <li>Efficientamento energetico degli edifici</li>
                      <li>Monitoraggio e riduzione dei consumi energetici</li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h3 className="text-xl font-bold mb-2">Mobilità Sostenibile</h3>
                    <p className="mb-4">
                      Propongo incentivi per la mobilità sostenibile, come sconti sugli abbonamenti ai mezzi pubblici e
                      l'installazione di rastrelliere per biciclette.
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>Convenzioni con il trasporto pubblico locale</li>
                      <li>Installazione di rastrelliere per biciclette in tutte le sedi</li>
                      <li>Creazione di un servizio di bike sharing universitario</li>
                      <li>Incentivi per il carpooling tra studenti</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="spazi" className="space-y-8">
              <div className="bg-purple-50 border border-purple-100 rounded-xl p-6">
                <h2 className="text-2xl font-bold mb-4 text-purple-800">Spazi Studenteschi 🏢</h2>
                <p className="text-lg mb-6">
                  Gli spazi universitari devono essere accoglienti, funzionali e adeguati alle esigenze degli studenti,
                  sia per lo studio che per la socializzazione.
                </p>

                <div className="space-y-6">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h3 className="text-xl font-bold mb-2">Aule Studio</h3>
                    <p className="mb-4">
                      Propongo la creazione di nuove aule studio aperte 24/7, con Wi-Fi potenziato, prese elettriche e
                      spazi per il lavoro di gruppo.
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>Apertura di almeno un'aula studio 24/7 per ogni area universitaria</li>
                      <li>Installazione di prese elettriche in tutte le postazioni</li>
                      <li>Potenziamento del Wi-Fi in tutte le aule studio</li>
                      <li>Creazione di spazi dedicati al lavoro di gruppo</li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h3 className="text-xl font-bold mb-2">Spazi Comuni</h3>
                    <p className="mb-4">
                      Propongo la riqualificazione degli spazi comuni per renderli più accoglienti e funzionali, con
                      aree relax, distributori di cibo e bevande e microonde per gli studenti. con aree relax,
                      distributori di cibo e bevande e microonde per gli studenti.
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>Creazione di aree relax con divani e poltrone</li>
                      <li>Installazione di distributori di cibo e bevande in tutte le sedi</li>
                      <li>Installazione di microonde per gli studenti</li>
                      <li>Creazione di spazi verdi all'interno del campus</li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h3 className="text-xl font-bold mb-2">Biblioteche</h3>
                    <p className="mb-4">
                      Propongo l'estensione degli orari delle biblioteche, l'aggiornamento del patrimonio librario e il
                      miglioramento dei servizi di prestito e consultazione.
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>Estensione degli orari di apertura delle biblioteche</li>
                      <li>Aggiornamento del patrimonio librario</li>
                      <li>Digitalizzazione dei testi più richiesti</li>
                      <li>Miglioramento del sistema di prestito interbibliotecario</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="ricerca" className="space-y-8">
              <div className="bg-amber-50 border border-amber-100 rounded-xl p-6">
                <h2 className="text-2xl font-bold mb-4 text-amber-800">Ricerca e Innovazione 🔬</h2>
                <p className="text-lg mb-6">
                  La ricerca è il motore dell'innovazione e del progresso. L'università deve investire nella ricerca e
                  creare opportunità per gli studenti di parteciparvi attivamente.
                </p>

                <div className="space-y-6">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h3 className="text-xl font-bold mb-2">Fondi per la Ricerca</h3>
                    <p className="mb-4">
                      Propongo un aumento dei fondi destinati alla ricerca, con particolare attenzione ai progetti
                      interdisciplinari e alle collaborazioni internazionali.
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>Aumento del budget destinato alla ricerca</li>
                      <li>Creazione di bandi specifici per progetti interdisciplinari</li>
                      <li>Supporto alle collaborazioni internazionali</li>
                      <li>Finanziamento di progetti di ricerca proposti dagli studenti</li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h3 className="text-xl font-bold mb-2">Collaborazioni con le Aziende</h3>
                    <p className="mb-4">
                      Propongo il potenziamento delle collaborazioni con le aziende del territorio per creare
                      opportunità di stage, tirocini e lavoro per gli studenti.
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>Creazione di un ufficio dedicato alle partnership con le aziende</li>
                      <li>Organizzazione di career day e incontri con le aziende</li>
                      <li>Potenziamento dei programmi di stage e tirocinio</li>
                      <li>Creazione di laboratori congiunti università-impresa</li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h3 className="text-xl font-bold mb-2">Innovazione Didattica</h3>
                    <p className="mb-4">
                      Propongo l'introduzione di metodologie didattiche innovative, come la flipped classroom, il
                      problem-based learning e l'uso di tecnologie digitali.
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>Formazione dei docenti sulle metodologie didattiche innovative</li>
                      <li>Creazione di aule attrezzate per la didattica interattiva</li>
                      <li>Sviluppo di piattaforme digitali per l'apprendimento</li>
                      <li>Introduzione di corsi interdisciplinari e progetti pratici</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="internazionalizzazione" className="space-y-8">
              <div className="bg-sky-50 border border-sky-100 rounded-xl p-6">
                <h2 className="text-2xl font-bold mb-4 text-sky-800">Internazionalizzazione 🌐</h2>
                <p className="text-lg mb-6">
                  In un mondo sempre più globalizzato, l'università deve offrire agli studenti opportunità di formazione
                  internazionale e attrarre studenti e docenti da tutto il mondo.
                </p>

                <div className="space-y-6">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h3 className="text-xl font-bold mb-2">Programmi di Scambio</h3>
                    <p className="mb-4">
                      Propongo un aumento del 30% delle borse Erasmus+ e la creazione di nuovi accordi con università
                      straniere per ampliare le opportunità di studio all'estero.
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>Aumento del budget destinato alle borse Erasmus+</li>
                      <li>Creazione di nuovi accordi con università straniere</li>
                      <li>Semplificazione delle procedure di riconoscimento dei crediti</li>
                      <li>Supporto agli studenti nella preparazione della candidatura</li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h3 className="text-xl font-bold mb-2">Corsi in Lingua Inglese</h3>
                    <p className="mb-4">
                      Propongo l'aumento dei corsi tenuti in lingua inglese per attrarre studenti internazionali e
                      preparare gli studenti italiani al mercato globale.
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>Creazione di nuovi corsi di laurea in lingua inglese</li>
                      <li>Introduzione di moduli in inglese nei corsi esistenti</li>
                      <li>Formazione linguistica per i docenti</li>
                      <li>Materiale didattico bilingue</li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h3 className="text-xl font-bold mb-2">Supporto agli Studenti Internazionali</h3>
                    <p className="mb-4">
                      Propongo il potenziamento dei servizi di supporto agli studenti internazionali, come l'assistenza
                      per i visti, la ricerca di alloggio e l'integrazione culturale.
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>Creazione di uno sportello dedicato agli studenti internazionali</li>
                      <li>Assistenza per le pratiche burocratiche e i visti</li>
                      <li>Supporto nella ricerca di alloggio</li>
                      <li>Organizzazione di eventi di integrazione culturale</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="inclusivita" className="space-y-8">
              <div className="bg-rose-50 border border-rose-100 rounded-xl p-6">
                <h2 className="text-2xl font-bold mb-4 text-rose-800">Inclusività ♿</h2>
                <p className="text-lg mb-6">
                  L'università deve essere un luogo inclusivo, dove ogni studente, indipendentemente dalle proprie
                  caratteristiche personali, possa esprimere al meglio il proprio potenziale.
                </p>

                <div className="space-y-6">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h3 className="text-xl font-bold mb-2">Accessibilità</h3>
                    <p className="mb-4">
                      Propongo l'eliminazione di tutte le barriere architettoniche presenti negli edifici universitari e
                      la creazione di percorsi accessibili per gli studenti con disabilità motorie.
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>Mappatura delle barriere architettoniche presenti</li>
                      <li>Piano di intervento per l'eliminazione delle barriere</li>
                      <li>Creazione di percorsi accessibili in tutte le sedi</li>
                      <li>Installazione di segnaletica inclusiva</li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h3 className="text-xl font-bold mb-2">Supporto DSA</h3>
                    <p className="mb-4">
                      Propongo il potenziamento del servizio di supporto per gli studenti con Disturbi Specifici
                      dell'Apprendimento, con tutor dedicati e strumenti compensativi.
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>Aumento del personale dedicato al supporto DSA</li>
                      <li>Formazione dei docenti sui DSA</li>
                      <li>Fornitura di strumenti compensativi</li>
                      <li>Creazione di un protocollo per gli esami</li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h3 className="text-xl font-bold mb-2">Inclusione Sociale</h3>
                    <p className="mb-4">
                      Propongo iniziative per promuovere l'inclusione sociale e il rispetto delle diversità, come eventi
                      culturali, workshop e campagne di sensibilizzazione.
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>Organizzazione di eventi culturali multietnici</li>
                      <li>Workshop sulla diversità e l'inclusione</li>
                      <li>Campagne di sensibilizzazione contro le discriminazioni</li>
                      <li>Creazione di spazi di dialogo interculturale</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-6 sm:p-8 mb-16">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold">Insieme possiamo fare la differenza! 💪</h2>
              <p className="text-sm sm:text-lg">
                Il mio programma è ambizioso, ma realizzabile con il supporto di tutti gli studenti. Ogni voto conta per
                costruire un'università migliore, più inclusiva e orientata al futuro.
              </p>
              <div className="pt-4">
                <Button className="bg-white text-blue-600 hover:bg-blue-50 w-full sm:w-auto">
                  Sostieni la mia candidatura
                </Button>
              </div>
            </div>

            <div className="text-center">
              <div className="inline-block bg-white/20 p-4 sm:p-6 rounded-full">
                <div className="text-5xl sm:text-7xl font-bold">7-8</div>
                <div className="text-lg sm:text-xl">Maggio 2025</div>
              </div>
              <p className="mt-3 sm:mt-4 text-base sm:text-lg font-medium">Date delle elezioni</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
