"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Activity, ImageIcon } from "lucide-react";

export function MarketAnalysis() {
  return (
    <section>
      <div className="flex items-center gap-3 mb-6">
        <div className="h-8 w-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
          <Activity className="h-5 w-5 text-blue-400" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-zinc-50">
            Analyse 1: Marktphasen-Erkennung
          </h3>
          <p className="text-sm text-zinc-400">
            DAX Clustering zur Identifikation von Marktphasen (2018-2024)
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
                className="bg-blue-500/20 text-blue-400 border-0"
              >
                K-Means
              </Badge>
            </CardTitle>
            <CardDescription className="text-zinc-400">
              Clustering der DAX-Marktphasen nach Rendite und Volatilität
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center text-xs font-bold shrink-0">
                  1
                </div>
                <div>
                  <p className="text-zinc-300 font-medium">Daten laden</p>
                  <p className="text-sm text-zinc-500">
                    DAX-Kursdaten von 2018-2024 via yfinance
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center text-xs font-bold shrink-0">
                  2
                </div>
                <div>
                  <p className="text-zinc-300 font-medium">
                    Features berechnen
                  </p>
                  <p className="text-sm text-zinc-500">
                    Tägliche Rendite + Rolling Volatilität
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center text-xs font-bold shrink-0">
                  3
                </div>
                <div>
                  <p className="text-zinc-300 font-medium">StandardScaler</p>
                  <p className="text-sm text-zinc-500">
                    Normalisierung für gleichwertige Gewichtung
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center text-xs font-bold shrink-0">
                  4
                </div>
                <div>
                  <p className="text-zinc-300 font-medium">
                    K-Means Clustering
                  </p>
                  <p className="text-sm text-zinc-500">
                    K=3 Cluster: ruhig, mittel, volatil
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-xs text-zinc-500 uppercase tracking-wider">
                Python Code
              </p>

              <div className="rounded-lg bg-zinc-900 p-4 overflow-x-auto">
                <p className="text-xs text-zinc-500 mb-2"># 1. Daten laden</p>
                <pre className="text-sm text-zinc-300 font-mono">
                  {`dax = yf.Ticker("^GDAXI")

# DAX von 2018 bs 2024
dax = yf.download("^GDAXI", start="2018-01-01", end="2024-12-31")
dax.head()`}
                </pre>
              </div>

              <div className="rounded-lg bg-zinc-900 p-4 overflow-x-auto">
                <p className="text-xs text-zinc-500 mb-2">
                  # 2. Features berechnen
                </p>
                <pre className="text-sm text-zinc-300 font-mono">
                  {`dax["Rendite"] = dax["Close"].pct_change() \n
dax["Volatilität"] = dax["Rendite"].rolling(window=20).std()
features = dax[["Rendite","Volatilität" ]]`}
                </pre>
              </div>

              <div className="rounded-lg bg-zinc-900 p-4 overflow-x-auto">
                <p className="text-xs text-zinc-500 mb-2"># 3. Normalisieren</p>
                <pre className="text-sm text-zinc-300 font-mono">
                  {`scaler = StandardScaler()
X = np.array(features)
X_scaled = scaler.fit_transform(X)`}
                </pre>
              </div>

              <div className="rounded-lg bg-zinc-900 p-4 overflow-x-auto">
                <p className="text-xs text-zinc-500 mb-2">
                  # 4. K-Means Clustering
                </p>
                <pre className="text-sm text-zinc-300 font-mono">
                  {`from sklearn.cluster import KMeans
kmeans = KMeans(n_clusters=3, random_state=0, n_init="auto").fit(X_scaled)
dax["Cluster"] = kmeans.labels_
features["Cluster"] = kmeans.labels_`}
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
              Clustering-Ergebnisse und Marktphasen-Visualisierung
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Placeholder for Result Images */}
            <div className="grid gap-4">
              <div className=" rounded-lg bg-zinc-900 border border-zinc-700 border-dashed flex flex-col items-center justify-center">
                <img src="/Marktphasen.png" alt="" />
              </div>

              <div className=" rounded-lg bg-zinc-900 border border-zinc-700 border-dashed flex flex-col items-center justify-center">
                <img src="/MarktphasenGraph.png" alt="" />
              </div>
            </div>

            {/* Cluster Legend */}
            <div className="rounded-lg bg-zinc-900 p-4">
              <p className="text-xs text-zinc-500 uppercase tracking-wider mb-3">
                Cluster-Interpretation
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-purple-900"></div>
                  <span className="text-sm text-zinc-300">
                    Cluster 0 - Ruhige Marktphase
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-teal-600"></div>
                  <span className="text-sm text-zinc-300">
                    Cluster 1 - Mittlere Volatilität
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                  <span className="text-sm text-zinc-300">
                    Cluster 2 - Hohe Volatilität
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
