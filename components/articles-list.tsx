import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const articles = [
  {
    title: "Incontro con gli studenti della Facoltà di Ingegneria",
    excerpt: "Un dialogo aperto sulle necessità degli studenti e le proposte per migliorare la didattica e i servizi.",
    date: "15 Marzo 2025",
    category: "Eventi",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "Le mie proposte per migliorare il diritto allo studio",
    excerpt:
      "Un'analisi dettagliata delle politiche attuali e delle mie proposte per garantire un accesso equo all'istruzione.",
    date: "10 Marzo 2025",
    category: "Programma",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "Intervista su Radio Università",
    excerpt: "Ho parlato dei temi principali della mia campagna e risposto alle domande degli studenti in diretta.",
    date: "5 Marzo 2025",
    category: "Media",
    image: "/placeholder.svg?height=200&width=400",
  },
]

export default function ArticlesList() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
      {articles.map((article, index) => (
        <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
          <div className="relative h-40 sm:h-36 md:h-48 overflow-hidden">
            <Image
              src={article.image || "/placeholder.svg"}
              alt={article.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <Badge className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-white text-primary hover:bg-blue-50 text-xs">
              {article.category}
            </Badge>
          </div>
          <CardContent className="pt-4 px-4 sm:pt-4 md:pt-6">
            <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
              {article.title}
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-3 line-clamp-3">{article.excerpt}</p>
          </CardContent>
          <CardFooter className="flex justify-between border-t pt-3 sm:pt-4 px-4 sm:px-4 md:px-6">
            <div className="flex items-center text-xs sm:text-sm text-muted-foreground">
              <CalendarDays className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
              {article.date}
            </div>
            <Link href="#" className="text-xs sm:text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline">
              Leggi di più
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
