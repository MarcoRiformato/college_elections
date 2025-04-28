import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

const benefits = [
  "Approva bilanci annuali e triennali",
  "Fissa criteri per personale e risorse",
  "Apre o chiude Dipartimenti e Scuole",
  "Stabilisce tasse e contributi degli studenti",
]

export default function WhatIsCda() {
  return (
    <div className="grid gap-6 md:gap-8 md:grid-cols-2 items-start">
      {/* Colonna sinistra – titolo + benefit */}
      <div className="space-y-4">
        <div className="space-y-2">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold">Cos’è il CdA</h3>
          <p className="text-sm md:text-base">
            Il Consiglio di Amministrazione guida strategia, bilanci e personale
            dell’Università di Firenze. È composto da <strong>1 Rettore</strong>,{" "}
            <strong>5 interni</strong>, <strong>3 esterni</strong> e{" "}
            <strong>2 studenti</strong>.
          </p>
        </div>

        <div className="space-y-2">
          {benefits.map((text) => (
            <div key={text} className="flex gap-2">
              <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
              <p className="text-sm md:text-base">{text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Colonna destra – perché ti riguarda */}
      <Card className="bg-white/10 border-white/20">
        <CardContent className="p-4 sm:p-5 lg:p-6 space-y-2">
          <h4 className="text-base sm:text-lg md:text-xl font-bold">
            Perché ti riguarda?
          </h4>
          <p className="text-sm md:text-base">
            Le decisioni del CdA influenzano tasse, servizi, spazi e ricerca.
            Grazie ai <strong>2 rappresentanti studenteschi</strong> la voce degli
            studenti pesa davvero nelle scelte dell’ateneo.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
