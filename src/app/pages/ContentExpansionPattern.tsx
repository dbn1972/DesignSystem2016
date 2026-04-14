import { useState } from "react";
import { Link } from "react-router";
import { TrendingUp, ArrowLeft, CheckCircle } from "lucide-react";

export default function ContentExpansionPattern() {
  const [language, setLanguage] = useState<"en" | "hi" | "te">("en");

  const content = {
    en: { text: "Apply Now", chars: 9, expansion: "100%" },
    hi: { text: "अभी आवेदन करें", chars: 14, expansion: "155%" },
    te: { text: "ఇప్పుడు దరఖాస్తు చేయండి", chars: 21, expansion: "233%" }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-gradient-to-br from-green-50 via-white to-teal-50 border-b-4 border-[#FF9933]">
        <div className="max-w-[1400px] mx-auto px-12 py-16">
          <div className="mb-6">
            <Link to="/patterns/localization" className="text-sm text-muted-foreground hover:text-primary">
              ← Back to Localization Patterns
            </Link>
          </div>
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-500 border-3 border-white shadow-lg rounded-lg flex items-center justify-center">
                <TrendingUp size={40} className="text-white" />
              </div>
              <div>
                <div className="text-sm font-bold text-primary mb-2 uppercase tracking-wide">Localization Pattern</div>
                <h1 className="text-5xl font-bold text-foreground">Content Expansion Handling</h1>
              </div>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              Layout strategies for accommodating text expansion across languages without breaking UI,
              truncating content, or causing layout shifts.
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto px-12 py-12">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-8">
            <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6 mb-6">
              <h2 className="font-bold text-foreground mb-2">Interactive Demo</h2>
              <p className="text-sm text-muted-foreground">
                See how the same button text expands across different languages.
              </p>
            </div>

            <div className="bg-card border-2 border-border rounded-lg p-8 mb-6">
              <div className="flex gap-4 mb-6">
                {(["en", "hi", "te"] as const).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={`px-4 py-2 rounded font-bold ${
                      language === lang ? "bg-primary text-white" : "border-2 border-border"
                    }`}
                  >
                    {lang === "en" && "English"}
                    {lang === "hi" && "हिंदी"}
                    {lang === "te" && "తెలుగు"}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-foreground mb-4">❌ Bad: Fixed Width</h3>
                  <button className="w-32 px-4 py-3 bg-red-100 border-2 border-red-300 text-foreground font-bold rounded overflow-hidden text-ellipsis whitespace-nowrap">
                    {content[language].text}
                  </button>
                  <p className="text-xs text-red-600 mt-2">Text gets truncated!</p>
                </div>

                <div>
                  <h3 className="font-bold text-foreground mb-4">✓ Good: Flexible Width</h3>
                  <button className="px-6 py-3 bg-green-600 text-white font-bold rounded hover:bg-green-600">
                    {content[language].text}
                  </button>
                  <p className="text-xs text-green-600 mt-2">Adapts to content!</p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-background rounded">
                <div className="text-sm text-muted-foreground">
                  <strong>Current:</strong> {content[language].text}<br />
                  <strong>Characters:</strong> {content[language].chars}<br />
                  <strong>Expansion:</strong> {content[language].expansion} compared to English
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Expansion Guidelines</h2>
                <div className="bg-card border-2 border-border rounded-lg p-6">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b-2 border-border">
                          <th className="text-left py-3 px-4 font-bold">Source Length</th>
                          <th className="text-left py-3 px-4 font-bold">Expected Expansion</th>
                          <th className="text-left py-3 px-4 font-bold">Design For</th>
                        </tr>
                      </thead>
                      <tbody className="text-muted-foreground">
                        <tr className="border-b border-border">
                          <td className="py-3 px-4">1-10 characters</td>
                          <td className="py-3 px-4">Up to 300%</td>
                          <td className="py-3 px-4">3x width</td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="py-3 px-4">11-20 characters</td>
                          <td className="py-3 px-4">Up to 200%</td>
                          <td className="py-3 px-4">2x width</td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="py-3 px-4">21-50 characters</td>
                          <td className="py-3 px-4">Up to 150%</td>
                          <td className="py-3 px-4">1.5x width</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4">50+ characters</td>
                          <td className="py-3 px-4">Up to 130%</td>
                          <td className="py-3 px-4">1.3x width</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Implementation Strategies</h2>
                <div className="bg-card border-2 border-border rounded-lg p-6 space-y-4">
                  <div>
                    <h3 className="font-bold text-foreground mb-2">1. Flexible Layouts</h3>
                    <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                      <li>• Use flexbox/grid instead of fixed widths</li>
                      <li>• Allow buttons to grow with content</li>
                      <li>• Use min-width instead of width</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">2. Responsive Typography</h3>
                    <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                      <li>• Reduce font size slightly for longer text</li>
                      <li>• Increase line-height for dense scripts</li>
                      <li>• Use appropriate font weights</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">3. Multi-line Support</h3>
                    <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                      <li>• Allow labels to wrap to 2-3 lines</li>
                      <li>• Use word-break for long compound words</li>
                      <li>• Test with longest possible translations</li>
                    </ul>
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
                    <div className="font-bold">High</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Impact</div>
                    <div className="font-bold">Layout & Design</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Max Expansion</div>
                    <div className="font-bold">Up to 300%</div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-3">Common Mistakes</h3>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li>✗ Fixed button widths</li>
                  <li>✗ Single-line labels</li>
                  <li>✗ Truncating with ellipsis</li>
                  <li>✗ Overlapping elements</li>
                  <li>✗ Breaking grid layouts</li>
                </ul>
              </div>

              <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-3">Best Practices</h3>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li>✓ Test with longest language</li>
                  <li>✓ Use flexible containers</li>
                  <li>✓ Allow text wrapping</li>
                  <li>✓ Maintain padding/spacing</li>
                  <li>✓ Design for 2-3x expansion</li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
