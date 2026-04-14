import { Link } from "react-router";
import { Globe, Languages, ArrowRight, CheckCircle, TrendingUp, Users, MapPin } from "lucide-react";

export default function LocalizationPatterns() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 border-b-4 border-[#FF9933]">
        <div className="max-w-[1400px] mx-auto px-12 py-16">
          <div className="mb-6">
            <Link to="/pattern-library" className="text-sm text-muted-foreground hover:text-primary">
              ← Back to Pattern Library
            </Link>
          </div>
          <div className="flex items-start justify-between">
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-500 border-3 border-white shadow-lg rounded-lg flex items-center justify-center">
                  <Globe size={40} className="text-white" />
                </div>
                <div>
                  <div className="text-sm font-bold text-primary mb-2 uppercase tracking-wide">Pattern Family</div>
                  <h1 className="text-5xl font-bold text-foreground">Localization & Multilingual Patterns</h1>
                </div>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                Comprehensive patterns for building truly multilingual government services that respect India's 22 official languages,
                multiple scripts, and diverse linguistic contexts. Designed for inclusive, accessible, and culturally appropriate digital experiences.
              </p>
              <div className="flex items-center gap-8 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#FF9933] rounded-full"></div>
                  <span className="text-muted-foreground">Pattern Family: <span className="font-bold text-foreground">Internationalization</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-700 rounded-full"></div>
                  <span className="text-muted-foreground">Patterns: <span className="font-bold text-foreground">5 Specialized Flows</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Complexity: <span className="font-bold text-foreground">Medium to High</span></span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="px-8 py-4 bg-[#FF9933] text-white rounded-lg font-bold text-center shadow-lg">
                CONSTITUTIONAL
              </div>
              <div className="px-8 py-4 bg-card border-2 border-[#138808] text-[#138808] rounded-lg font-bold text-center">
                22 LANGUAGES
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Quick Access */}
      <div className="bg-card border-b-2 border-border">
        <div className="max-w-[1400px] mx-auto px-12 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <span className="font-bold text-foreground">Quick Access:</span>
              <Link to="#overview" className="text-primary hover:underline text-sm font-medium">
                Pattern Overview
              </Link>
              <Link to="#all-patterns" className="text-primary hover:underline text-sm font-medium">
                View All Patterns
              </Link>
            </div>
            <div className="text-sm text-muted-foreground">
              Last updated: April 2026
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-[1400px] mx-auto px-12 py-12">

        {/* Overview Section */}
        <section id="overview" className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6">Pattern Overview</h2>
          <div className="bg-card border-2 border-border rounded-lg p-8 mb-8">
            <div className="grid grid-cols-3 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Languages size={24} className="text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">True Multilingualism</h3>
                  <p className="text-sm text-muted-foreground">
                    Support all 22 scheduled languages with appropriate script rendering and cultural context
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} className="text-purple-600" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Contextual Intelligence</h3>
                  <p className="text-sm text-muted-foreground">
                    Auto-detect user location, handle mixed-language content, and provide graceful fallbacks
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users size={24} className="text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Inclusive Access</h3>
                  <p className="text-sm text-muted-foreground">
                    Ensure digital services are accessible to all citizens regardless of linguistic background
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* India's Language Context */}
          <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-6 mb-8">
            <h3 className="font-bold text-foreground mb-4">India's Multilingual Context</h3>
            <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <CheckCircle size={16} className="text-orange-600 mt-0.5 flex-shrink-0" />
                <span><strong>22 Scheduled Languages</strong> under the Eighth Schedule of the Constitution</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle size={16} className="text-orange-600 mt-0.5 flex-shrink-0" />
                <span><strong>12+ Scripts</strong> including Devanagari, Bengali, Tamil, Arabic, Gurmukhi</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle size={16} className="text-orange-600 mt-0.5 flex-shrink-0" />
                <span><strong>121 Languages</strong> spoken by 10,000+ people (Census 2011)</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle size={16} className="text-orange-600 mt-0.5 flex-shrink-0" />
                <span><strong>Multiple Writing Systems</strong> including LTR, RTL (Urdu), and complex rendering</span>
              </div>
            </div>
          </div>

          {/* When to Use */}
          <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="font-bold text-foreground mb-4">When to Use These Patterns</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                <span>All government digital services (constitutional mandate)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                <span>Services targeting citizens across multiple states or linguistic regions</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                <span>Forms, applications, or content requiring translation into regional languages</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                <span>Services where language preference must be remembered and respected</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                <span>Content with mixed language input or user-generated translations</span>
              </li>
            </ul>
          </div>
        </section>

        {/* All Patterns */}
        <section id="all-patterns" className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6">All Localization & Multilingual Patterns</h2>

          <div className="grid grid-cols-1 gap-6">

            {/* Language Switcher */}
            <Link
              to="/patterns/localization/language-switcher"
              className="bg-card border-2 border-border rounded-lg p-6 hover:border-primary hover:shadow-lg transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Languages size={28} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary">Language Switcher</h3>
                    <ArrowRight size={20} className="text-gray-400 group-hover:text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    User interface component for selecting preferred language with smart defaults based on browser settings,
                    location, and previous choices. Supports dropdown, modal, and inline selector variants.
                  </p>
                  <div className="flex items-center gap-4 text-xs">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full font-bold">UI COMPONENT</span>
                    <span className="text-muted-foreground">Complexity: Medium</span>
                    <span className="text-muted-foreground">Required for all services</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Mixed-Language Fallback */}
            <Link
              to="/patterns/localization/mixed-language-fallback"
              className="bg-card border-2 border-border rounded-lg p-6 hover:border-primary hover:shadow-lg transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Globe size={28} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary">Mixed-Language Fallback</h3>
                    <ArrowRight size={20} className="text-gray-400 group-hover:text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Strategy for handling partially translated content by gracefully falling back to English or Hindi
                    for untranslated strings while maintaining context and visual hierarchy.
                  </p>
                  <div className="flex items-center gap-4 text-xs">
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full font-bold">STRATEGY</span>
                    <span className="text-muted-foreground">Complexity: Medium</span>
                    <span className="text-muted-foreground">Critical for incomplete translations</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Content Expansion Handling */}
            <Link
              to="/patterns/localization/content-expansion"
              className="bg-card border-2 border-border rounded-lg p-6 hover:border-primary hover:shadow-lg transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp size={28} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary">Content Expansion Handling</h3>
                    <ArrowRight size={20} className="text-gray-400 group-hover:text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Layout and typography strategies for accommodating text expansion (up to 300% for some languages)
                    without breaking UI, truncating content, or causing layout shifts.
                  </p>
                  <div className="flex items-center gap-4 text-xs">
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full font-bold">LAYOUT</span>
                    <span className="text-muted-foreground">Complexity: High</span>
                    <span className="text-muted-foreground">Critical for responsive design</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Script-Specific Layout */}
            <Link
              to="/patterns/localization/script-layout"
              className="bg-card border-2 border-border rounded-lg p-6 hover:border-primary hover:shadow-lg transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin size={28} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary">Script-Specific Layout Handling</h3>
                    <ArrowRight size={20} className="text-gray-400 group-hover:text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Specialized layout adjustments for different writing systems including RTL (Urdu), complex conjuncts
                    (Devanagari, Bengali), and vertical text rendering requirements.
                  </p>
                  <div className="flex items-center gap-4 text-xs">
                    <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full font-bold">TECHNICAL</span>
                    <span className="text-muted-foreground">Complexity: High</span>
                    <span className="text-muted-foreground">Script-dependent</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Translation Confidence Indicators */}
            <Link
              to="/patterns/localization/translation-confidence"
              className="bg-card border-2 border-border rounded-lg p-6 hover:border-primary hover:shadow-lg transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle size={28} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary">Translation Confidence Indicators</h3>
                    <ArrowRight size={20} className="text-gray-400 group-hover:text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Visual indicators showing translation quality and confidence levels for machine-translated or
                    user-contributed content with options to view original or report issues.
                  </p>
                  <div className="flex items-center gap-4 text-xs">
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full font-bold">TRANSPARENCY</span>
                    <span className="text-muted-foreground">Complexity: Low</span>
                    <span className="text-muted-foreground">Optional but recommended</span>
                  </div>
                </div>
              </div>
            </Link>

          </div>
        </section>

        {/* Design Principles */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6">Design Principles</h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-card border-2 border-border rounded-lg p-6">
              <h3 className="font-bold text-foreground mb-3">1. Language Equality</h3>
              <p className="text-sm text-muted-foreground">
                All 22 scheduled languages should receive equal treatment in terms of quality, completeness, and user experience.
                Avoid treating any language as "secondary" or providing degraded experiences.
              </p>
            </div>
            <div className="bg-card border-2 border-border rounded-lg p-6">
              <h3 className="font-bold text-foreground mb-3">2. Smart Defaults</h3>
              <p className="text-sm text-muted-foreground">
                Auto-detect language preference from browser settings, IP geolocation, or previous sessions.
                Allow users to override but minimize manual language selection friction.
              </p>
            </div>
            <div className="bg-card border-2 border-border rounded-lg p-6">
              <h3 className="font-bold text-foreground mb-3">3. Graceful Degradation</h3>
              <p className="text-sm text-muted-foreground">
                When translations are incomplete, show mixed-language content rather than breaking the UI.
                Clearly indicate which parts are translated vs. fallback text.
              </p>
            </div>
            <div className="bg-card border-2 border-border rounded-lg p-6">
              <h3 className="font-bold text-foreground mb-3">4. Cultural Context</h3>
              <p className="text-sm text-muted-foreground">
                Consider cultural nuances, date/time formats, currency, measurement units, and naming conventions
                specific to each language and region.
              </p>
            </div>
          </div>
        </section>

        {/* Technical Requirements */}
        <section className="bg-indigo-50 border-2 border-indigo-200 rounded-lg p-8">
          <h3 className="font-bold text-foreground mb-4">Technical Requirements</h3>
          <div className="grid grid-cols-2 gap-6 text-sm text-muted-foreground">
            <div>
              <h4 className="font-bold text-foreground mb-2">Font Support</h4>
              <p className="mb-2">Use web fonts that support all required scripts:</p>
              <ul className="space-y-1 text-xs">
                <li>• Noto Sans for comprehensive script coverage</li>
                <li>• System fonts as fallback (ensures rendering even offline)</li>
                <li>• Script-specific fonts for optimal readability</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-2">Text Rendering</h4>
              <p className="mb-2">Handle complex text rendering requirements:</p>
              <ul className="space-y-1 text-xs">
                <li>• Support for conjuncts and ligatures (Indic scripts)</li>
                <li>• RTL text direction (Urdu, Arabic)</li>
                <li>• Bi-directional text mixing (BiDi algorithm)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-2">Data Storage</h4>
              <p className="mb-2">Properly store multilingual content:</p>
              <ul className="space-y-1 text-xs">
                <li>• UTF-8 encoding for all text fields</li>
                <li>• Separate tables/columns for each language</li>
                <li>• Language metadata (lang attribute, locale codes)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-2">Testing</h4>
              <p className="mb-2">Comprehensive multilingual testing:</p>
              <ul className="space-y-1 text-xs">
                <li>• Test all UI in each supported language</li>
                <li>• Verify text expansion doesn't break layouts</li>
                <li>• Check RTL layouts and script rendering</li>
              </ul>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
