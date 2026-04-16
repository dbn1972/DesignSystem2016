import { useState } from "react";
import { Link } from "react-router";
import { Globe, ArrowLeft, CheckCircle, AlertCircle } from "lucide-react";

export default function MixedLanguageFallbackPattern() {
  const [strategy, setStrategy] = useState<"inline" | "tooltip" | "toggle">("inline");

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-gradient-to-br from-purple-50 via-white to-pink-50 border-b-4 border-[#FF9933]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-16">
          <div className="mb-6">
            <Link to="/patterns/localization" className="text-sm text-muted-foreground hover:text-primary">
              ← Back to Localization Patterns
            </Link>
          </div>
          <div className="flex items-start justify-between">
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 border-3 border-white shadow-lg rounded-lg flex items-center justify-center">
                  <Globe size={40} className="text-white" />
                </div>
                <div>
                  <div className="text-sm font-bold text-primary mb-2 uppercase tracking-wide">Localization Pattern</div>
                  <h1 className="text-5xl font-bold text-foreground">Mixed-Language Fallback</h1>
                </div>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                Graceful handling of partially translated content by mixing target language with fallback text
                while maintaining clarity about which parts are translated.
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-8">
            <div className="bg-purple-50 dark:bg-purple-950/30 border-2 border-purple-200 dark:border-purple-800 rounded-lg p-6 mb-6">
              <h2 className="font-bold text-foreground mb-2">Interactive Demo</h2>
              <p className="text-sm text-muted-foreground">
                See how mixed-language content is displayed when translations are incomplete.
              </p>
            </div>

            {/* Strategy Selector */}
            <div className="bg-card border-2 border-border rounded-lg p-6 mb-6">
              <h3 className="font-bold text-foreground mb-4">Select Fallback Strategy:</h3>
              <div className="flex gap-3">
                <button
                  onClick={() => setStrategy("inline")}
                  className={`px-6 py-3 rounded font-bold ${
                    strategy === "inline" ? "bg-primary text-white" : "border-2 border-border text-muted-foreground"
                  }`}
                >
                  Inline Indicator
                </button>
                <button
                  onClick={() => setStrategy("tooltip")}
                  className={`px-6 py-3 rounded font-bold ${
                    strategy === "tooltip" ? "bg-primary text-white" : "border-2 border-border text-muted-foreground"
                  }`}
                >
                  Tooltip Hint
                </button>
                <button
                  onClick={() => setStrategy("toggle")}
                  className={`px-6 py-3 rounded font-bold ${
                    strategy === "toggle" ? "bg-primary text-white" : "border-2 border-border text-muted-foreground"
                  }`}
                >
                  Show/Hide Toggle
                </button>
              </div>
            </div>

            {/* Demo Content */}
            <div className="bg-card border-2 border-border rounded-lg p-8">
              <div className="border-b-2 border-border pb-4 mb-6">
                <h3 className="text-xl font-bold text-foreground">आय प्रमाणपत्र आवेदन</h3>
                <p className="text-sm text-muted-foreground">Income Certificate Application (Target: Hindi)</p>
              </div>

              {/* Inline Indicator Strategy */}
              {strategy === "inline" && (
                <div className="space-y-4">
                  <div>
                    <label className="block font-bold text-foreground mb-2">
                      पूरा नाम <span className="text-xs text-gray-500 font-normal">(Translated)</span>
                    </label>
                    <input type="text" className="w-full px-4 py-2 border-2 border-border rounded" placeholder="अपना नाम दर्ज करें" />
                  </div>

                  <div>
                    <label className="block font-bold text-foreground mb-2">
                      Date of Birth{" "}
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-yellow-100 text-yellow-800 text-xs rounded">
                        <AlertCircle size={12} />
                        English fallback
                      </span>
                    </label>
                    <input type="date" className="w-full px-4 py-2 border-2 border-border rounded" />
                  </div>

                  <div>
                    <label className="block font-bold text-foreground mb-2">
                      पता <span className="text-xs text-gray-500 font-normal">(Translated)</span>
                    </label>
                    <textarea className="w-full px-4 py-2 border-2 border-border rounded" rows={3} placeholder="अपना पूरा पता दर्ज करें" />
                  </div>
                </div>
              )}

              {/* Tooltip Strategy */}
              {strategy === "tooltip" && (
                <div className="space-y-4">
                  <div>
                    <label className="block font-bold text-foreground mb-2">पूरा नाम</label>
                    <input type="text" className="w-full px-4 py-2 border-2 border-border rounded" placeholder="अपना नाम दर्ज करें" />
                  </div>

                  <div className="relative">
                    <label className="block font-bold text-foreground mb-2 flex items-center gap-2">
                      Date of Birth
                      <span className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded cursor-help" title="Translation not available">
                        ?
                      </span>
                    </label>
                    <input type="date" className="w-full px-4 py-2 border-2 border-border rounded" />
                    <div className="mt-1 text-xs text-gray-500 italic">Translation pending for this field</div>
                  </div>

                  <div>
                    <label className="block font-bold text-foreground mb-2">पता</label>
                    <textarea className="w-full px-4 py-2 border-2 border-border rounded" rows={3} placeholder="अपना पूरा पता दर्ज करें" />
                  </div>
                </div>
              )}

              {/* Toggle Strategy */}
              {strategy === "toggle" && (
                <div>
                  <div className="bg-yellow-50 dark:bg-yellow-950/30 border-2 border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-4">
                    <div className="flex items-start gap-3">
                      <AlertCircle size={20} className="text-yellow-600 flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <div className="font-bold text-foreground mb-1">Partial Translation</div>
                        <div className="text-sm text-muted-foreground">
                          Some fields are shown in English as Hindi translation is not yet available.
                          <button className="ml-2 text-primary font-bold hover:underline">
                            View original language
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block font-bold text-foreground mb-2">पूरा नाम</label>
                      <input type="text" className="w-full px-4 py-2 border-2 border-border rounded" placeholder="अपना नाम दर्ज करें" />
                    </div>

                    <div className="bg-background border-2 border-border rounded-lg p-4">
                      <label className="block font-bold text-foreground mb-2">Date of Birth</label>
                      <input type="date" className="w-full px-4 py-2 border-2 border-border rounded" />
                    </div>

                    <div>
                      <label className="block font-bold text-foreground mb-2">पता</label>
                      <textarea className="w-full px-4 py-2 border-2 border-border rounded" rows={3} placeholder="अपना पूरा पता दर्ज करें" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Best Practices */}
            <div className="mt-8 space-y-6">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Fallback Strategies</h2>
                <div className="bg-card border-2 border-border rounded-lg p-6 space-y-4">
                  <div>
                    <h3 className="font-bold text-foreground mb-2">1. Hierarchical Fallback</h3>
                    <p className="text-sm text-muted-foreground mb-2">Priority order for missing translations:</p>
                    <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                      <li>1. Target language (e.g., Tamil)</li>
                      <li>2. Regional fallback (if applicable)</li>
                      <li>3. Hindi (national language)</li>
                      <li>4. English (administrative language)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">2. Visual Differentiation</h3>
                    <p className="text-sm text-muted-foreground">
                      Make fallback content visually distinct with badges, background color, or italics so users know which parts are translated.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">3. Contextual Explanation</h3>
                    <p className="text-sm text-muted-foreground">
                      Provide one-time explanation banner informing users why some content is in a different language.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>

          <aside className="col-span-4">
            <div className="sticky top-8 space-y-6">
              <div className="bg-card border-2 border-border rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-4">Pattern Information</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Complexity</div>
                    <div className="font-bold">Medium</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Use Case</div>
                    <div className="font-bold">Incomplete translations</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Strategy Types</div>
                    <div className="font-bold">3 variants</div>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 dark:bg-orange-950/30 border-2 border-orange-200 dark:border-orange-800 rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-3">Best Practices</h3>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li>✓ Always indicate fallback language</li>
                  <li>✓ Use hierarchical fallback chain</li>
                  <li>✓ Maintain visual consistency</li>
                  <li>✓ Explain mixed language once</li>
                  <li>✓ Prioritize critical fields for translation</li>
                </ul>
              </div>

              <div className="bg-card border-2 border-border rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-4">Related Patterns</h3>
                <div className="space-y-2">
                  <Link to="/patterns/localization/language-switcher" className="block text-sm text-primary hover:underline">
                    → Language Switcher
                  </Link>
                  <Link to="/patterns/localization/translation-confidence" className="block text-sm text-primary hover:underline">
                    → Translation Confidence
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
