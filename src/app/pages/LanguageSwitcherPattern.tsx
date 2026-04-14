import { useState } from "react";
import { Link } from "react-router";
import { Languages, ArrowLeft, CheckCircle, ChevronDown, X, Globe } from "lucide-react";

const LANGUAGES = [
  { code: "en", name: "English", nativeName: "English", script: "Latin" },
  { code: "hi", name: "Hindi", nativeName: "हिंदी", script: "Devanagari" },
  { code: "bn", name: "Bengali", nativeName: "বাংলা", script: "Bengali" },
  { code: "te", name: "Telugu", nativeName: "తెలుగు", script: "Telugu" },
  { code: "mr", name: "Marathi", nativeName: "मराठी", script: "Devanagari" },
  { code: "ta", name: "Tamil", nativeName: "தமிழ்", script: "Tamil" },
  { code: "ur", name: "Urdu", nativeName: "اردو", script: "Arabic" },
  { code: "gu", name: "Gujarati", nativeName: "ગુજરાતી", script: "Gujarati" },
  { code: "kn", name: "Kannada", nativeName: "ಕನ್ನಡ", script: "Kannada" },
  { code: "ml", name: "Malayalam", nativeName: "മലയാളം", script: "Malayalam" },
  { code: "pa", name: "Punjabi", nativeName: "ਪੰਜਾਬੀ", script: "Gurmukhi" },
  { code: "or", name: "Odia", nativeName: "ଓଡ଼ିଆ", script: "Odia" }
];

export default function LanguageSwitcherPattern() {
  const [selectedLanguage, setSelectedLanguage] = useState(LANGUAGES[0]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [variant, setVariant] = useState<"dropdown" | "modal" | "inline">("dropdown");

  const handleLanguageSelect = (lang: typeof LANGUAGES[0]) => {
    setSelectedLanguage(lang);
    setDropdownOpen(false);
    setModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 border-b-4 border-[#FF9933]">
        <div className="max-w-[1400px] mx-auto px-12 py-16">
          <div className="mb-6">
            <Link to="/patterns/localization" className="text-sm text-muted-foreground hover:text-primary">
              ← Back to Localization Patterns
            </Link>
          </div>
          <div className="flex items-start justify-between">
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-500 border-3 border-white shadow-lg rounded-lg flex items-center justify-center">
                  <Languages size={40} className="text-white" />
                </div>
                <div>
                  <div className="text-sm font-bold text-primary mb-2 uppercase tracking-wide">Localization Pattern</div>
                  <h1 className="text-5xl font-bold text-foreground">Language Switcher</h1>
                </div>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                User interface component for selecting preferred language with smart defaults,
                persistent preferences, and multiple presentation variants for different contexts.
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto px-12 py-12">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-8">
            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 mb-6">
              <h2 className="font-bold text-foreground mb-2">Interactive Demo</h2>
              <p className="text-sm text-muted-foreground">
                Try different language switcher variants. Select a variant to see it in action.
              </p>
            </div>

            {/* Variant Selector */}
            <div className="bg-card border-2 border-border rounded-lg p-6 mb-6">
              <h3 className="font-bold text-foreground mb-4">Select Variant:</h3>
              <div className="flex gap-3">
                <button
                  onClick={() => setVariant("dropdown")}
                  className={`px-6 py-3 rounded font-bold ${
                    variant === "dropdown"
                      ? "bg-primary text-white"
                      : "border-2 border-border text-muted-foreground hover:border-gray-400"
                  }`}
                >
                  Dropdown
                </button>
                <button
                  onClick={() => setVariant("modal")}
                  className={`px-6 py-3 rounded font-bold ${
                    variant === "modal"
                      ? "bg-primary text-white"
                      : "border-2 border-border text-muted-foreground hover:border-gray-400"
                  }`}
                >
                  Modal
                </button>
                <button
                  onClick={() => setVariant("inline")}
                  className={`px-6 py-3 rounded font-bold ${
                    variant === "inline"
                      ? "bg-primary text-white"
                      : "border-2 border-border text-muted-foreground hover:border-gray-400"
                  }`}
                >
                  Inline Grid
                </button>
              </div>
            </div>

            {/* Dropdown Variant */}
            {variant === "dropdown" && (
              <div className="bg-card border-2 border-border rounded-lg p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">Dropdown Variant</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Compact dropdown for header/navigation. Best for limited space.
                </p>

                <div className="max-w-xs relative">
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="w-full flex items-center justify-between px-4 py-3 border-2 border-border rounded bg-card hover:border-primary font-bold"
                  >
                    <div className="flex items-center gap-2">
                      <Globe size={20} className="text-muted-foreground" />
                      <span>{selectedLanguage.nativeName}</span>
                    </div>
                    <ChevronDown size={20} className={`text-muted-foreground transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                  </button>

                  {dropdownOpen && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-card border-2 border-border rounded shadow-lg max-h-80 overflow-y-auto z-10">
                      {LANGUAGES.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => handleLanguageSelect(lang)}
                          className={`w-full px-4 py-3 text-left hover:bg-blue-50 flex items-center justify-between ${
                            selectedLanguage.code === lang.code ? "bg-blue-50 font-bold" : ""
                          }`}
                        >
                          <div>
                            <div className="font-bold text-foreground">{lang.nativeName}</div>
                            <div className="text-xs text-muted-foreground">{lang.name}</div>
                          </div>
                          {selectedLanguage.code === lang.code && (
                            <CheckCircle size={16} className="text-green-600" />
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Modal Variant */}
            {variant === "modal" && (
              <div className="bg-card border-2 border-border rounded-lg p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">Modal Variant</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Full-screen modal for first-time language selection or settings page.
                </p>

                <button
                  onClick={() => setModalOpen(true)}
                  className="px-6 py-3 bg-primary text-white rounded font-bold hover:opacity-90"
                >
                  Open Language Selector
                </button>

                {modalOpen && (
                  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-card rounded-lg max-w-2xl w-full mx-4 max-h-[80vh] overflow-hidden flex flex-col">
                      <div className="border-b-2 border-border p-6 flex items-center justify-between">
                        <div>
                          <h3 className="text-2xl font-bold text-foreground">Select Your Language</h3>
                          <p className="text-sm text-muted-foreground mt-1">भाषा चुनें • Choose Language</p>
                        </div>
                        <button
                          onClick={() => setModalOpen(false)}
                          className="w-10 h-10 flex items-center justify-center hover:bg-muted rounded"
                        >
                          <X size={24} />
                        </button>
                      </div>

                      <div className="p-6 overflow-y-auto">
                        <div className="grid grid-cols-2 gap-3">
                          {LANGUAGES.map((lang) => (
                            <button
                              key={lang.code}
                              onClick={() => handleLanguageSelect(lang)}
                              className={`p-4 border-2 rounded-lg text-left hover:border-primary hover:bg-blue-50 transition-all ${
                                selectedLanguage.code === lang.code
                                  ? "border-primary bg-blue-50"
                                  : "border-border"
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <div>
                                  <div className="font-bold text-foreground text-lg">{lang.nativeName}</div>
                                  <div className="text-sm text-muted-foreground">{lang.name}</div>
                                </div>
                                {selectedLanguage.code === lang.code && (
                                  <CheckCircle size={20} className="text-green-600" />
                                )}
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="border-t-2 border-border p-6">
                        <button
                          onClick={() => setModalOpen(false)}
                          className="w-full px-6 py-3 bg-primary text-white rounded font-bold hover:opacity-90"
                        >
                          Confirm Selection
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Inline Grid Variant */}
            {variant === "inline" && (
              <div className="bg-card border-2 border-border rounded-lg p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">Inline Grid Variant</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Inline grid for welcome pages or settings. Shows all options upfront.
                </p>

                <div className="grid grid-cols-3 gap-3">
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageSelect(lang)}
                      className={`p-4 border-2 rounded-lg text-center hover:border-primary hover:bg-blue-50 transition-all ${
                        selectedLanguage.code === lang.code
                          ? "border-primary bg-blue-50"
                          : "border-border"
                      }`}
                    >
                      <div className="font-bold text-foreground">{lang.nativeName}</div>
                      <div className="text-xs text-muted-foreground mt-1">{lang.name}</div>
                      {selectedLanguage.code === lang.code && (
                        <CheckCircle size={16} className="text-green-600 mx-auto mt-2" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Current Selection */}
            <div className="mt-6 bg-green-50 border-2 border-green-200 rounded-lg p-6">
              <div className="flex items-center gap-3">
                <CheckCircle size={24} className="text-green-600" />
                <div>
                  <div className="font-bold text-foreground">Currently Selected:</div>
                  <div className="text-sm text-muted-foreground">
                    {selectedLanguage.nativeName} ({selectedLanguage.name}) • {selectedLanguage.script} Script
                  </div>
                </div>
              </div>
            </div>

            {/* Pattern Details */}
            <div className="mt-8 space-y-6">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Implementation Guidelines</h2>
                <div className="bg-card border-2 border-border rounded-lg p-6 space-y-4">
                  <div>
                    <h3 className="font-bold text-foreground mb-2">1. Smart Defaults</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Auto-detect language preference in this order:
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                      <li>• User's saved preference (cookie/localStorage)</li>
                      <li>• Browser's Accept-Language header</li>
                      <li>• IP-based geolocation</li>
                      <li>• Default to Hindi or English</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">2. Persistence</h3>
                    <p className="text-sm text-muted-foreground">
                      Store selected language in localStorage and session cookie. Apply to all pages immediately without page reload.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">3. Accessibility</h3>
                    <p className="text-sm text-muted-foreground">
                      Include lang attribute on each option. Ensure keyboard navigation works. Announce selection changes to screen readers.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">4. Display Native Names</h3>
                    <p className="text-sm text-muted-foreground">
                      Always show language names in their native script (हिंदी not "Hindi"). Include English translation as secondary text.
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
                    <div className="text-xs text-muted-foreground mb-1">Required For</div>
                    <div className="font-bold">All services</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Variants</div>
                    <div className="font-bold">Dropdown, Modal, Inline</div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-3">Best Practices</h3>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li>✓ Show native script names</li>
                  <li>✓ Auto-detect from browser/location</li>
                  <li>✓ Save preference persistently</li>
                  <li>✓ Apply immediately without reload</li>
                  <li>✓ Accessible keyboard navigation</li>
                  <li>✓ Visible on every page</li>
                </ul>
              </div>

              <div className="bg-card border-2 border-border rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-4">Components Used</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Dropdown Menu</li>
                  <li>• Modal Dialog</li>
                  <li>• Button Grid</li>
                  <li>• Checkmark Indicator</li>
                </ul>
              </div>

              <div className="bg-card border-2 border-border rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-4">Related Patterns</h3>
                <div className="space-y-2">
                  <Link to="/patterns/localization/mixed-language-fallback" className="block text-sm text-primary hover:underline">
                    → Mixed-Language Fallback
                  </Link>
                  <Link to="/patterns/localization/content-expansion" className="block text-sm text-primary hover:underline">
                    → Content Expansion
                  </Link>
                  <Link to="/patterns/localization/script-layout" className="block text-sm text-primary hover:underline">
                    → Script-Specific Layout
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
