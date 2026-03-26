"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PieChart, ImageIcon } from "lucide-react";

const tickers = [
  { name: "SAP.DE", desc: "Software" },
  { name: "SIE.DE", desc: "Siemens" },
  { name: "ALV.DE", desc: "Allianz" },
  { name: "DBK.DE", desc: "Deutsche Bank" },
  { name: "BMW.DE", desc: "Automobil" },
  { name: "VOW3.DE", desc: "Volkswagen" },
  { name: "BAS.DE", desc: "BASF" },
  { name: "ADS.DE", desc: "Adidas" },
  { name: "IFX.DE", desc: "Infineon" },
  { name: "DTG.DE", desc: "Daimler Truck" },
];

export function StockAnalysis() {
  return (
    <section>
      <div className="flex items-center gap-3 mb-6">
        <div className="h-8 w-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
          <PieChart className="h-5 w-5 text-purple-400" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-zinc-50">
            Analyse 2: Risikoklassifikation
          </h3>
          <p className="text-sm text-zinc-400">
            DAX-Aktien Clustering nach Rendite und Volatilität (2022-2024)
          </p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Code Explanation Card */}
        <Card className="bg-zinc-800 border-zinc-700">
          <CardHeader>
            <CardTitle className="text-zinc-50 flex items-center gap-2">
              Vorgehensweise
              <Badge
                variant="secondary"
                className="bg-purple-500/20 text-purple-400 border-0"
              >
                Aktienanalyse
              </Badge>
            </CardTitle>
            <CardDescription className="text-zinc-400">
              Risikoklassifikation von 10 DAX-Aktien mittels Clustering
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-xs font-bold shrink-0">
                  1
                </div>
                <div>
                  <p className="text-zinc-300 font-medium">
                    10 DAX-Aktien laden
                  </p>
                  <p className="text-sm text-zinc-500">
                    Kursdaten von 2022-2024 via yfinance
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-xs font-bold shrink-0">
                  2
                </div>
                <div>
                  <p className="text-zinc-300 font-medium">
                    Features berechnen
                  </p>
                  <p className="text-sm text-zinc-500">
                    Durchschnittliche Rendite + Volatilität pro Aktie
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-xs font-bold shrink-0">
                  3
                </div>
                <div>
                  <p className="text-zinc-300 font-medium">
                    Korrelationsmatrix
                  </p>
                  <p className="text-sm text-zinc-500">
                    Zusammenhänge zwischen Aktien analysieren
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-xs font-bold shrink-0">
                  4
                </div>
                <div>
                  <p className="text-zinc-300 font-medium">
                    K-Means Clustering
                  </p>
                  <p className="text-sm text-zinc-500">K=3 Risikokategorien</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-zinc-900 p-4">
              <p className="text-xs text-zinc-500 uppercase tracking-wider mb-3">
                Analysierte Aktien
              </p>
              <div className="flex flex-wrap gap-2">
                {tickers.map((ticker) => (
                  <Badge
                    key={ticker.name}
                    variant="outline"
                    className="bg-zinc-800 border-zinc-600 text-zinc-300"
                  >
                    {ticker.name}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Code Snippets */}
            <div className="space-y-3">
              <p className="text-xs text-zinc-500 uppercase tracking-wider">
                Python Code
              </p>

              <div className="rounded-lg bg-zinc-900 p-4 overflow-x-auto">
                <p className="text-xs text-zinc-500 mb-2">
                  # 1. Mehrere Aktien laden
                </p>
                <pre className="text-sm text-zinc-300 font-mono">
                  {`tickers = ["SAP.DE", "SIE.DE", "ALV.DE", 
           "DBK.DE", "BMW.DE", "VOW3.DE", 
           "BAS.DE", "ADS.DE", "IFX.DE", 
           "DTG.DE"]
data = yf.download(tickers, start="2022-01-01", end="2024-12-31")["Close"]`}
                </pre>
              </div>

              <div className="rounded-lg bg-zinc-900 p-4 overflow-x-auto">
                <p className="text-xs text-zinc-500 mb-2">
                  # 2. Rendite & Volatilitat berechnen
                </p>
                <pre className="text-sm text-zinc-300 font-mono">
                  {`returns = data.pct_change()

features = pd.DataFrame()

features["Rendite"] = returns.mean()
features["Volatilität"] = returns.std()`}
                </pre>
              </div>

              <div className="rounded-lg bg-zinc-900 p-4 overflow-x-auto">
                <p className="text-xs text-zinc-500 mb-2">
                  # 3. Korrelationsmatrix
                </p>
                <pre className="text-sm text-zinc-300 font-mono">
                  {`corr_matrix = returns.corr()
print(corr_matrix)`}
                </pre>
              </div>

              <div className="rounded-lg bg-zinc-900 p-4 overflow-x-auto">
                <p className="text-xs text-zinc-500 mb-2">
                  # 4. Risikoklassifikation
                </p>
                <pre className="text-sm text-zinc-300 font-mono">
                  {`scaler = StandardScaler()
X_scaled = scaler.fit_transform(features)

kmeans = KMeans(n_clusters=3, random_state=0, n_init="auto")
labels = kmeans.fit_predict(X_scaled)

features["Cluster"] = labels`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results Card */}
        <Card className="bg-zinc-800 border-zinc-700">
          <CardHeader>
            <CardTitle className="text-zinc-50 flex items-center gap-2">
              Ergebnisse
              <Badge
                variant="secondary"
                className="bg-green-500/20 text-green-400 border-0"
              >
                Visualisierung
              </Badge>
            </CardTitle>
            <CardDescription className="text-zinc-400">
              Risikoklassifikation und Cluster-Zuordnung der Aktien
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Placeholder for Result Images */}
            <div className="grid gap-4">
              <div className=" rounded-lg bg-zinc-900 border border-zinc-700 border-dashed flex flex-col items-center justify-center">
                <img src="/RiskAnalysis.png" alt="" />
              </div>

              <div className=" rounded-lg bg-zinc-900 border border-zinc-700 border-dashed flex flex-col items-center justify-center">
                <img src="/RiskAnalysis2.png" alt="" />
              </div>
            </div>

            {/* Cluster Legend */}
            <div className="rounded-lg bg-zinc-900 p-4">
              <p className="text-xs text-zinc-500 uppercase tracking-wider mb-3">
                Risiko-Kategorien
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-purple-900"></div>
                  <span className="text-sm text-zinc-300">
                    Cluster 0 - Niedriges Risiko
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-teal-600"></div>
                  <span className="text-sm text-zinc-300">
                    Cluster 1 - Mittleres Risiko
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                  <span className="text-sm text-zinc-300">
                    Cluster 2 - Hohes Risiko
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
