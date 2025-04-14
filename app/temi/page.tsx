import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Temi() {
  return (
    <main className="min-h-screen py-4 sm:py-6 px-1 sm:px-2">
      {/* Decorative background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-green-300/20 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-blue-300/20 blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-3xl">
        {/* Header */}
        <div className="text-center mb-4 sm:mb-6">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2">I Nostri Temi 📝</h1>
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
            Mi candido con CSX perché ne condivido la visione di università, ne apprezzo i valori e sento mie le priorità che ci distinguono.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
          {/* Visione Card */}
          <div className="group relative bg-blue-50 border border-blue-100 rounded-2xl p-3 sm:p-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="absolute -top-2 -right-2 w-16 h-16 bg-blue-100 rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <h2 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2 text-blue-800">La Visione di università 🎓</h2>
            <p className="text-xs sm:text-sm md:text-base">
              Credo in un'Universita' che non sia fatta solo di esami e lezioni ma che sia piuttosto un luogo da vivere a 360°, che sappia essere una comunità 
              inclusiva e accogliente dove tutti possono formarsi e crescere in un clima pacifico ma al tempo stesso dinamico e sempre stimolante. Un'università 
              dove lo studente sia lasciato meno solo e dove l'ansia non rappresenti la regola.
            </p>
          </div>

          {/* Appelli Card */}
          <div className="group relative bg-green-50 border border-green-100 rounded-2xl p-3 sm:p-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="absolute -bottom-2 -left-2 w-20 h-20 bg-green-100 rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <h2 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2 text-green-800">Minimo 7 appelli ⏰</h2>
            <p className="text-xs sm:text-sm md:text-base mb-1 sm:mb-2">
              Più appelli significa più possibilità di organizzarsi, maggiore tranquillità e una distribuzione intelligente del carico di studio.
              Per questo chiediamo un MINIMO DI 7 APPELLI per ogni anno accademico.
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Ps: Per chi già ne ha 7 o più naturalmente non cambierà niente
            </p>
          </div>

          {/* Comunità Card */}
          <div className="group relative bg-purple-50 border border-purple-100 rounded-2xl p-3 sm:p-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="absolute -top-2 -left-2 w-24 h-24 bg-purple-100 rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <h2 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2 text-purple-800">Comunità e aggregazione 👥</h2>
            <p className="text-xs sm:text-sm md:text-base">
              Siano 3, 5 o 7 quelli dell'università dovrebbero essere alcuni tra i "migliori anni della nostra vita". Vogliamo che sia così per tutti. Per questo 
              lavoreremo per creare iniziative, competizioni progetti e uscite presso luoghi di interesse accademico per far si che insieme al nostro bagaglio 
              culturale e al nostro curriculum crescano anche le nostre conoscenze, amicizie e relazioni umane.
            </p>
          </div>

          {/* Didattica Card */}
          <div className="group relative bg-amber-50 border border-amber-100 rounded-2xl p-3 sm:p-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-amber-100 rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <h2 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2 text-amber-800">Didattica innovativa 📚</h2>
            <p className="text-xs sm:text-sm md:text-base">
              Laboratori, seminari e attività pratiche devono affiancare la didattica frontale. Solo così possiamo capire a pieno ciò che studiamo e approfondirlo 
              secondo i nostri interessi. Queste attività sono anche strumento di aggregazione e nuove conoscenze.
            </p>
          </div>

          {/* Corsi Card */}
          <div className="group relative bg-rose-50 border border-rose-100 rounded-2xl p-3 sm:p-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="absolute -top-2 -right-2 w-16 h-16 bg-rose-100 rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <h2 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2 text-rose-800">Corsi, Spazi e docenti 🏢</h2>
            <p className="text-xs sm:text-sm md:text-base mb-1 sm:mb-2">
              Corsi da 150 o 200 persone rendono difficile seguire e soprattutto scoraggiano il crearsi di rapporti umani con i docenti e soprattutto all'interno della 
              stessa comunità studentesca.
            </p>
            <ul className="list-disc pl-3 sm:pl-4 space-y-0.5 text-xs sm:text-sm text-muted-foreground">
              <li>Vogliamo aumentare il numero di professori e con essi le partizioni di tutti i corsi più affollati, ottenendo classi meno numerose</li>
              <li>Vogliamo lavorare per recuperare gli spazi inagibili o inutilizzati per destinatarli alle nuove, più piccole, partizioni</li>
            </ul>
          </div>

          {/* Orari Card */}
          <div className="group relative bg-sky-50 border border-sky-100 rounded-2xl p-3 sm:p-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="absolute -bottom-2 -left-2 w-20 h-20 bg-sky-100 rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <h2 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2 text-sky-800">Orari delle lezioni ⏰</h2>
            <p className="text-xs sm:text-sm md:text-base mb-1 sm:mb-2">
              Troppi orari sembrano pensati apposta per creare disagio a noi studenti, con lezioni distribuite in modo irragionevole durante la giornata o la 
              settimana.
            </p>
            <ul className="list-disc pl-3 sm:pl-4 space-y-0.5 text-xs sm:text-sm text-muted-foreground">
              <li>Linee guida uniche per garantire orari ragionevoli, compatibilmente con spazi e docenti</li>
            </ul>
          </div>

          {/* Inclusività Card */}
          <div className="group relative bg-emerald-50 border border-emerald-100 rounded-2xl p-3 sm:p-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="absolute -top-2 -right-2 w-16 h-16 bg-emerald-100 rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <h2 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2 text-emerald-800">Didattica inclusiva ♿</h2>
            <p className="text-xs sm:text-sm md:text-base">
              L'Universita è casa di tutti. Per questo vogliamo che UNIFI si impegni per rendere ogni spazio e attività accessibile per chi ha disabilità motorie, 
              sensoriali o altri tipi di fragilità, anche attraverso percorsi formativi più flessibili e adattate alle esigenze della persona.
            </p>
          </div>

          {/* Abitare Card */}
          <div className="group relative bg-indigo-50 border border-indigo-100 rounded-2xl p-3 sm:p-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-indigo-100 rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <h2 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2 text-indigo-800">Diritto all'abitare 🏠</h2>
            <p className="text-xs sm:text-sm md:text-base">
              Per studiare serve (ancora) una casa. Vogliamo lavorare in tutte le sedi (Università, Comune, DSU, Governo) per ottenere più alloggi, finanziare nuove 
              residenze studentesche e ottenere misure a tutela dei prezzi degli affitti per gli universitari.
            </p>
          </div>

          {/* Trasporti Card */}
          <div className="group relative bg-orange-50 border border-orange-100 rounded-2xl p-3 sm:p-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="absolute -top-2 -left-2 w-20 h-20 bg-orange-100 rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <h2 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2 text-orange-800">Trasporti 🚌</h2>
            <p className="text-xs sm:text-sm md:text-base">
              Vogliamo rendere permanente la convenzione per la scontistica sul trasporto urbano e siamo determinati a lavorare con le istituzioni e con Trenitalia 
              per avere agevolazioni anche sui treni, per i pendolari e per gli studenti che frequentano in sedi diverse da quelle di Firenze città.
            </p>
          </div>

          {/* Sportelli Card */}
          <div className="group relative bg-pink-50 border border-pink-100 rounded-2xl p-3 sm:p-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-pink-100 rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <h2 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2 text-pink-800">Sportelli 🏢</h2>
            <p className="text-xs sm:text-sm md:text-base">
              Antiviolenza, psicologico e legale sono gli sportelli essenziali che chiediamo all'Ateneo di istituire o potenziare, affinché nessuno venga lasciato 
              indietro: si tratti di una ragazza oppressa dal fidanzato retrogrado, di uno studente colpito dall'ansia o di una matricola persa tra la complessità di 
              regole nuove.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
} 