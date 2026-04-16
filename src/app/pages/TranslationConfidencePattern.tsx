import { useState } from "react";
import { Link } from "react-router";
import { CheckCircle, ArrowLeft, AlertTriangle, Info, ExternalLink } from "lucide-react";

export default function TranslationConfidencePattern() {
  const [showOriginal, setShowOriginal] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-gradient-to-br from-yellow-50 via-white to-orange-50 border-b-4 border-[#FF9933]">
        <div className="max-w-[1400px] mx-auto px-12 py-16">
          <div className="mb-6">
            <Link to="/patterns/localization" className="text-sm text-muted-foreground hover:text-primary">
              ← Back to Localization Patterns
            </Link>
          </div>
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 border-3 border-white shadow-lg rounded-lg flex items-center justify-center">
                <CheckCircle size={40} className="text-white" />
              </div>
              <div>
                <div className="text-sm font-bold text-primary mb-2 uppercase tracking-wide">Localization Pattern</div>
                <h1 className="text-5xl font-bold text-foreground">Translation Confidence Indicators</h1>
              </div>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              Visual indicators showing translation quality and confidence levels for machine-translated or
              user-contributed content with options to view original or report issues.
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto px-12 py-12">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-8">
            <div className="bg-yellow-50 dark:bg-yellow-950/30 border-2 border-yellow-200 dark:border-yellow-800 rounded-lg p-6 mb-6">
              <h2 className="font-bold text-foreground mb-2">Interactive Demo</h2>
              <p className="text-sm text-muted-foreground">
                See how translation confidence is communicated to users.
              </p>
            </div>

            {/* Demo Content */}
            <div className="space-y-6">

              {/* High Confidence */}
              <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
                <div className="bg-green-50 dark:bg-green-950/30 border-b-2 border-green-200 dark:border-green-800 px-6 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle size={18} className="text-green-600" />
                    <span className="font-bold text-foreground">Verified Translation</span>
                  </div>
                  <span className="text-xs px-3 py-1 bg-green-600 text-white rounded-full font-bold">
                    95% Confidence
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-foreground mb-2">आय प्रमाणपत्र के लिए आवेदन करें</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    यह दस्तावेज़ आपकी वार्षिक आय का आधिकारिक प्रमाण प्रदान करता है। आवेदन करने के लिए,
                    कृपया अपने सभी आय स्रोतों के विवरण के साथ फॉर्म भरें।
                  </p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-muted-foreground">Professionally translated • Reviewed by 2 experts</span>
                  </div>
                </div>
              </div>

              {/* Medium Confidence */}
              <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
                <div className="bg-yellow-50 dark:bg-yellow-950/30 border-b-2 border-yellow-200 dark:border-yellow-800 px-6 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <AlertTriangle size={18} className="text-yellow-600" />
                    <span className="font-bold text-foreground">Machine Translation</span>
                  </div>
                  <span className="text-xs px-3 py-1 bg-yellow-600 text-white rounded-full font-bold">
                    72% Confidence
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <Info size={18} className="text-yellow-600 flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <div className="text-sm text-muted-foreground mb-2">
                        This content was automatically translated. Some technical terms may not be accurate.
                      </div>
                      <button
                        onClick={() => setShowOriginal(!showOriginal)}
                        className="text-sm text-primary font-bold hover:underline flex items-center gap-1"
                      >
                        {showOriginal ? "Hide" : "Show"} original English
                        <ExternalLink size={14} />
                      </button>
                    </div>
                  </div>

                  {showOriginal && (
                    <div className="bg-background border-2 border-border rounded-lg p-4 mb-4">
                      <div className="text-xs text-muted-foreground mb-2 font-bold">ORIGINAL (English)</div>
                      <p className="text-sm text-muted-foreground">
                        This document provides official proof of your annual income. To apply, please fill
                        the form with details of all your income sources.
                      </p>
                    </div>
                  )}

                  <h3 className="font-bold text-foreground mb-2">आय प्रमाणपत्र के लिए आवेदन करें</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    यह दस्तावेज़ आपकी वार्षिक आय का आधिकारिक प्रमाण प्रदान करता है। आवेदन करने के लिए,
                    कृपया अपने सभी आय स्रोतों के विवरण के साथ फॉर्म भरें।
                  </p>

                  <div className="flex items-center gap-3">
                    <button className="text-sm px-4 py-2 border-2 border-border rounded font-bold hover:bg-background">
                      Report Issue
                    </button>
                    <button className="text-sm px-4 py-2 bg-primary text-white rounded font-bold hover:opacity-90">
                      Suggest Better Translation
                    </button>
                  </div>
                </div>
              </div>

              {/* Low Confidence */}
              <div className="bg-card border-2 border-red-300 rounded-lg overflow-hidden">
                <div className="bg-red-50 dark:bg-red-950/30 border-b-2 border-red-200 dark:border-red-800 px-6 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <AlertTriangle size={18} className="text-red-600" />
                    <span className="font-bold text-foreground">Low Quality Translation</span>
                  </div>
                  <span className="text-xs px-3 py-1 bg-red-600 text-white rounded-full font-bold">
                    45% Confidence
                  </span>
                </div>
                <div className="p-6">
                  <div className="bg-red-50 dark:bg-red-950/30 border-2 border-red-200 dark:border-red-800 rounded-lg p-4 mb-4">
                    <div className="flex items-start gap-3">
                      <AlertTriangle size={18} className="text-red-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-foreground mb-1">Translation Quality Warning</div>
                        <div className="text-sm text-muted-foreground mb-2">
                          This translation has low confidence score and may contain errors. We recommend viewing the
                          original English version or using a different language if available.
                        </div>
                        <div className="flex items-center gap-3">
                          <button className="text-sm px-4 py-2 bg-primary text-white rounded font-bold hover:opacity-90">
                            View in English
                          </button>
                          <button className="text-sm text-primary font-bold hover:underline">
                            Try Different Language
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Implementation Guide */}
            <div className="mt-8 space-y-6">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Confidence Levels</h2>
                <div className="bg-card border-2 border-border rounded-lg p-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-green-700">90%+</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground mb-1">High Confidence (Verified)</h3>
                        <p className="text-sm text-muted-foreground">
                          Professionally translated and reviewed by native speakers. Safe for legal/official use.
                          Show green badge with checkmark.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-yellow-700">60-89%</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground mb-1">Medium Confidence (Machine)</h3>
                        <p className="text-sm text-muted-foreground">
                          Machine translated with reasonable accuracy. Provide option to view original.
                          Show yellow badge with info icon.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-red-700">&lt;60%</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground mb-1">Low Confidence (Warning)</h3>
                        <p className="text-sm text-muted-foreground">
                          Poor translation quality, may contain errors. Show prominent warning and recommend
                          viewing original language. Red badge with warning icon.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Best Practices</h2>
                <div className="bg-card border-2 border-border rounded-lg p-6 space-y-3 text-sm">
                  <div>
                    <h3 className="font-bold text-foreground mb-1">1. Always Show Translation Source</h3>
                    <p className="text-muted-foreground">
                      Indicate whether content is professionally translated, machine translated, or user-contributed.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">2. Provide Original Access</h3>
                    <p className="text-muted-foreground">
                      For medium/low confidence, always allow users to view original language version.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">3. Enable Feedback</h3>
                    <p className="text-muted-foreground">
                      Allow users to report translation errors or suggest improvements for crowdsourced quality.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">4. Context-Appropriate Warnings</h3>
                    <p className="text-muted-foreground">
                      Legal/financial content requires higher confidence. Show stronger warnings for critical content.
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
                    <div className="font-bold">Low</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Use Case</div>
                    <div className="font-bold">Machine/user translations</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Impact</div>
                    <div className="font-bold">Trust & Transparency</div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-950/30 border-2 border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-3">When to Use</h3>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li>✓ Machine-translated content</li>
                  <li>✓ User-contributed translations</li>
                  <li>✓ Beta/preview language versions</li>
                  <li>✓ Partially translated pages</li>
                  <li>✓ Technical or legal content</li>
                </ul>
              </div>

              <div className="bg-card border-2 border-border rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-4">Components Used</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Confidence Badge</li>
                  <li>• Warning Banner</li>
                  <li>• Toggle Button</li>
                  <li>• Feedback Form</li>
                </ul>
              </div>

              <div className="bg-card border-2 border-border rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-4">Related Patterns</h3>
                <div className="space-y-2">
                  <Link to="/patterns/localization/mixed-language-fallback" className="block text-sm text-primary hover:underline">
                    → Mixed-Language Fallback
                  </Link>
                  <Link to="/patterns/localization/language-switcher" className="block text-sm text-primary hover:underline">
                    → Language Switcher
                  </Link>
                  <Link to="/patterns/feedback" className="block text-sm text-primary hover:underline">
                    → Feedback Patterns
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
