import { MarketAnalysis } from "@/components/market-analysis"
import { StockAnalysis } from "@/components/stock-analysis"
import { TrendingUp, BarChart3 } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-900">
      {/* Header */}
      <header className="border-b border-zinc-700 bg-zinc-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-green-500 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-zinc-900" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-zinc-50">5. PK - Machine Learning</h1>
                <p className="text-sm text-zinc-400">Clustering-Analyse im Finanzmarkt</p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-2 text-sm text-zinc-400">
              <BarChart3 className="h-4 w-4" />
              <span>K-Means Clustering</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-50 mb-4 text-balance">
            Wie BlackRock KI zur Marktanalyse nutzt
          </h2>
          <p className="text-lg text-zinc-400 text-pretty">
            Verschiedene Marktphasen birgen unterschiedliche Risiken. Mit Machine Learning kann BlackRock 
            Risiken früher erkennen und Portfolios sowie Investments anpassen.
          </p>
        </div>
      </section>

      {/* Analysis Sections */}
      <div className="container mx-auto px-6 pb-16 space-y-12">
        {/* Analysis 1: Market Phases */}
        <MarketAnalysis />

        {/* Analysis 2: Stock Risk Classification */}
        <StockAnalysis />
      </div>

      {/* Footer */}
      <footer className="border-t border-zinc-700 bg-zinc-900">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center text-zinc-500 text-sm">
            5. Prüfungskomponente - Machine Learning im Finanzsektor
          </div>
        </div>
      </footer>
    </main>
  )
}
