import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function WhatIsCda() {
  return (
    <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
      <div className="space-y-3 sm:space-y-4 md:space-y-6">
        <div className="space-y-1 md:space-y-2">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold">Il Consiglio di Amministrazione</h3>
          <p className="text-xs sm:text-sm md:text-base">
            Il Consiglio di Amministrazione (CdA) è uno degli organi di governo centrali dell'Università di Firenze. Ha
            funzioni di indirizzo strategico, programmazione finanziaria e del personale.
          </p>
        </div>

        <div className="space-y-2 md:space-y-4">
          <div className="flex gap-2 md:gap-3">
            <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-green-400 flex-shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm md:text-base">
              Approva il bilancio di previsione annuale e triennale, il conto consuntivo e il documento di
              programmazione strategica.
            </p>
          </div>
          <div className="flex gap-2 md:gap-3">
            <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-green-400 flex-shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm md:text-base">
              Delibera sulle proposte di attivazione, modifica o soppressione di Dipartimenti, Scuole e altre strutture
              didattiche e di ricerca.
            </p>
          </div>
          <div className="flex gap-2 md:gap-3">
            <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-green-400 flex-shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm md:text-base">
              Decide sulla programmazione finanziaria annuale e triennale e del personale.
            </p>
          </div>
          <div className="flex gap-2 md:gap-3">
            <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-green-400 flex-shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm md:text-base">
              Approva i contratti e le convenzioni che rientrano nella sua competenza.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <Card className="bg-white/10 border-white/20">
          <CardContent className="p-4 sm:p-4 md:p-6">
            <h4 className="text-base sm:text-lg md:text-xl font-bold mb-2 md:mb-3">Composizione del CdA</h4>
            <p className="mb-3 text-xs sm:text-sm md:text-base">Il Consiglio di Amministrazione è composto da:</p>
            <ul className="space-y-1.5 md:space-y-2">
              <li className="flex items-center gap-2">
                <span className="bg-blue-500 rounded-full p-1 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex items-center justify-center text-[10px] sm:text-xs font-bold">
                  1
                </span>
                <span className="text-xs sm:text-sm md:text-base">Il Rettore, che lo presiede</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-blue-500 rounded-full p-1 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex items-center justify-center text-[10px] sm:text-xs font-bold">
                  5
                </span>
                <span className="text-xs sm:text-sm md:text-base">Membri interni alla comunità universitaria</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-blue-500 rounded-full p-1 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex items-center justify-center text-[10px] sm:text-xs font-bold">
                  4
                </span>
                <span className="text-xs sm:text-sm md:text-base">Membri esterni</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-blue-500 rounded-full p-1 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex items-center justify-center text-[10px] sm:text-xs font-bold">
                  2
                </span>
                <span className="text-xs sm:text-sm md:text-base">Rappresentanti degli studenti</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-white/10 border-white/20">
          <CardContent className="p-3 sm:p-4 md:p-6">
            <h4 className="text-base sm:text-lg md:text-xl font-bold mb-2 md:mb-3">Perché è importante?</h4>
            <p className="text-xs sm:text-sm md:text-base">
              Il CdA prende decisioni fondamentali che influenzano direttamente la vita universitaria, dalla qualità
              della didattica ai servizi per gli studenti, dalle politiche di ricerca alla gestione degli spazi e delle
              risorse. Avere una rappresentanza studentesca forte nel CdA è essenziale per garantire che le esigenze
              degli studenti siano considerate nelle decisioni strategiche dell'ateneo.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
