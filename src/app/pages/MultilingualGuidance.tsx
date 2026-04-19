import { Globe, Type, AlertTriangle, CheckCircle, X, Layout, Calendar, User, MapPin, Search, Eye, Code, BookOpen, Languages, Smartphone, ChevronRight } from "lucide-react";

export default function MultilingualGuidance() {
  return (
    <div className="min-h-screen bg-card dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#000080] via-[#000070] to-[#000050] dark:from-blue-900 dark:to-blue-950 text-white">
        <div className="max-w-7xl mx-auto px-8 py-16">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-card dark:bg-gray-900/10 rounded-full text-sm mb-6">
              <Globe size={16} />
              <span>UX4G Multilingual Design</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Multilingual Design Guidance
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Design and build inclusive government services that serve all citizens in their preferred language. 
              This guidance ensures consistent, accessible, and culturally appropriate experiences across India's 
              22 official languages.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-card dark:bg-gray-900/10 rounded-lg p-4">
                <div className="text-2xl font-bold mb-1">22+</div>
                <div className="text-blue-200 text-sm">Official languages</div>
              </div>
              <div className="bg-card dark:bg-gray-900/10 rounded-lg p-4">
                <div className="text-2xl font-bold mb-1">13</div>
                <div className="text-blue-200 text-sm">Script systems</div>
              </div>
              <div className="bg-card dark:bg-gray-900/10 rounded-lg p-4">
                <div className="text-2xl font-bold mb-1">1.4B</div>
                <div className="text-blue-200 text-sm">Citizens to serve</div>
              </div>
              <div className="bg-card dark:bg-gray-900/10 rounded-lg p-4">
                <div className="text-2xl font-bold mb-1">100%</div>
                <div className="text-blue-200 text-sm">Accessibility target</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-8 py-16 space-y-24">
        <MultilingualPrinciples />
        <ScriptAwareTypography />
        <LineHeightDensity />
        <LabelExpansion />
        <ButtonNavigationResilience />
        <MixedLanguageUI />
        <LanguageExamples />
        <ErrorMessageLocalization />
        <FormFieldLocalization />
        <DataFormatting />
        <SearchSortBehavior />
        <TranslationQuality />
        <TruncationOverflow />
        <AccessibilityConsiderations />
      </div>
    </div>
  );
}

function MultilingualPrinciples() {
  return (
    <section id="principles">
      <SectionHeader
        title="Multilingual Design Principles"
        description="Core principles for building inclusive, language-aware government services"
        icon={<BookOpen size={28} />}
      />

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <PrincipleCard
          number="1"
          title="Language Equality"
          description="All official languages receive equal treatment in design, content quality, and user experience. No language is treated as secondary or afterthought."
          examples={[
            'Hindi and English do not take precedence in design',
            'Regional languages get same attention to typography',
            'Translation quality is consistent across all languages'
          ]}
        />

        <PrincipleCard
          number="2"
          title="Script Awareness"
          description="Design components and layouts that adapt to different scripts (Devanagari, Tamil, Bengali, etc.) with appropriate typography, spacing, and rendering."
          examples={[
            'Font choices appropriate for each script',
            'Line height adjusted for script complexity',
            'Proper rendering of conjuncts and ligatures'
          ]}
        />

        <PrincipleCard
          number="3"
          title="Flexible Layouts"
          description="Interfaces must accommodate text expansion (up to 40% longer in some languages) without breaking, truncating prematurely, or creating usability issues."
          examples={[
            'Buttons expand to fit translated text',
            'Navigation handles longer menu labels',
            'Forms accommodate verbose field labels'
          ]}
        />

        <PrincipleCard
          number="4"
          title="Cultural Appropriateness"
          description="Content, imagery, examples, and interaction patterns respect cultural contexts and avoid assumptions based on English or Western norms."
          examples={[
            'Name fields support Indian naming conventions',
            'Date formats follow regional preferences',
            'Examples use culturally relevant scenarios'
          ]}
        />

        <PrincipleCard
          number="5"
          title="User Language Choice"
          description="Citizens choose their preferred language easily, and that choice persists across sessions. Language switching is always accessible and obvious."
          examples={[
            'Language selector in header on all pages',
            'Preference saved in user profile',
            'Visual language indicator always visible'
          ]}
        />

        <PrincipleCard
          number="6"
          title="Content Parity"
          description="Information available in English must be available in all supported languages with equivalent quality, timeliness, and completeness."
          examples={[
            'Policies published simultaneously in all languages',
            'Help content fully translated',
            'No English-only fallback content in production'
          ]}
        />
      </div>
    </section>
  );
}

function PrincipleCard({ number, title, description, examples }: any) {
  return (
    <div className="border-2 border-border dark:border-gray-700 rounded-lg overflow-hidden">
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 border-b-2 border-border dark:border-gray-700">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
            {number}
          </div>
          <div>
            <h3 className="font-bold text-foreground dark:text-gray-100 text-lg mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground dark:text-muted-foreground">{description}</p>
          </div>
        </div>
      </div>

      <div className="p-6 bg-card dark:bg-gray-900">
        <h4 className="text-xs font-semibold text-muted-foreground dark:text-muted-foreground uppercase tracking-wide mb-3">Examples</h4>
        <ul className="space-y-2">
          {examples.map((example: string, index: number) => (
            <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground dark:text-muted-foreground">
              <CheckCircle className="flex-shrink-0 mt-0.5 text-green-600 dark:text-green-400" size={14} />
              <span>{example}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ScriptAwareTypography() {
  return (
    <section id="typography">
      <SectionHeader
        title="Script-Aware Typography Guidance"
        description="Font selection and typography rules for India's diverse script systems"
        icon={<Type size={28} />}
      />

      <div className="mt-8 space-y-6">
        {/* Font Recommendations */}
        <div className="border-2 border-border dark:border-gray-700 rounded-lg overflow-hidden">
          <div className="bg-background dark:bg-gray-800 p-6 border-b-2 border-border dark:border-gray-700">
            <h3 className="font-bold text-foreground dark:text-gray-100">Font Recommendations by Script</h3>
          </div>

          <div className="p-6">
            <div className="space-y-4">
              <ScriptFontRow
                script="Devanagari"
                languages="Hindi, Marathi, Sanskrit, Nepali"
                fonts="Noto Sans Devanagari, Mukta, Hind"
                characteristics="Complex conjuncts, vertical stroke emphasis, requires generous line height"
              />
              <ScriptFontRow
                script="Bengali"
                languages="Bengali, Assamese"
                fonts="Noto Sans Bengali, Mukta Malar"
                characteristics="Horizontal top bar, rounded forms, moderate line height needed"
              />
              <ScriptFontRow
                script="Tamil"
                languages="Tamil"
                fonts="Noto Sans Tamil, Mukta Tamil, Catamaran"
                characteristics="Curvilinear forms, fewer ligatures than Devanagari, clean rendering"
              />
              <ScriptFontRow
                script="Telugu"
                languages="Telugu"
                fonts="Noto Sans Telugu, Ramabhadra"
                characteristics="Rounded characters, complex vowel marks, requires good spacing"
              />
              <ScriptFontRow
                script="Gujarati"
                languages="Gujarati"
                fonts="Noto Sans Gujarati, Mukta Gujarati"
                characteristics="Similar to Devanagari without top bar, good readability"
              />
              <ScriptFontRow
                script="Kannada"
                languages="Kannada"
                fonts="Noto Sans Kannada, Baloo"
                characteristics="Circular forms, distinct vowel markers, needs space for diacritics"
              />
              <ScriptFontRow
                script="Malayalam"
                languages="Malayalam"
                fonts="Noto Sans Malayalam, Manjari"
                characteristics="Complex ligatures, circular base, requires careful spacing"
              />
              <ScriptFontRow
                script="Latin"
                languages="English"
                fonts="Inter, Noto Sans, Open Sans"
                characteristics="Standard web fonts, good cross-platform support"
              />
            </div>
          </div>
        </div>

        {/* Typography Examples */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <TypographyExample
            script="English (Latin)"
            sample="Apply for Ration Card"
            font="Inter, 16px"
            lineHeight="150%"
            notes="Standard web typography"
          />

          <TypographyExample
            script="Hindi (Devanagari)"
            sample="राशन कार्ड के लिए आवेदन करें"
            font="Noto Sans Devanagari, 16px"
            lineHeight="175%"
            notes="Increased line height for conjuncts"
          />

          <TypographyExample
            script="Tamil"
            sample="ரேஷன் கார்டுக்கு விண்ணப்பிக்கவும்"
            font="Noto Sans Tamil, 16px"
            lineHeight="160%"
            notes="Moderate line height, clean rendering"
          />
        </div>
      </div>
    </section>
  );
}

function ScriptFontRow({ script, languages, fonts, characteristics }: any) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-background dark:bg-gray-800 border border-border dark:border-gray-700 rounded-lg p-4">
      <div>
        <div className="text-xs text-muted-foreground dark:text-muted-foreground uppercase tracking-wide mb-1">Script</div>
        <div className="font-bold text-foreground dark:text-gray-100 text-sm">{script}</div>
      </div>
      <div>
        <div className="text-xs text-muted-foreground dark:text-muted-foreground uppercase tracking-wide mb-1">Languages</div>
        <div className="text-muted-foreground dark:text-muted-foreground text-sm">{languages}</div>
      </div>
      <div>
        <div className="text-xs text-muted-foreground dark:text-muted-foreground uppercase tracking-wide mb-1">Recommended Fonts</div>
        <div className="text-muted-foreground dark:text-muted-foreground text-sm font-mono">{fonts}</div>
      </div>
      <div>
        <div className="text-xs text-muted-foreground dark:text-muted-foreground uppercase tracking-wide mb-1">Characteristics</div>
        <div className="text-muted-foreground dark:text-muted-foreground text-xs">{characteristics}</div>
      </div>
    </div>
  );
}

function TypographyExample({ script, sample, font, lineHeight, notes }: any) {
  return (
    <div className="border-2 border-border dark:border-gray-700 rounded-lg p-6">
      <div className="text-xs text-muted-foreground dark:text-muted-foreground uppercase tracking-wide mb-4">{script}</div>
      <div className="text-2xl mb-4 border-2 border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20 p-4 rounded">
        {sample}
      </div>
      <div className="space-y-2 text-xs text-muted-foreground dark:text-muted-foreground">
        <div><strong>Font:</strong> {font}</div>
        <div><strong>Line Height:</strong> {lineHeight}</div>
        <div className="text-muted-foreground dark:text-muted-foreground">{notes}</div>
      </div>
    </div>
  );
}

function LineHeightDensity() {
  return (
    <section id="line-height">
      <SectionHeader
        title="Line Height & Text Density"
        description="Spacing considerations for different scripts and reading comfort"
        icon={<Layout size={28} />}
      />

      <div className="mt-8 space-y-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <h3 className="font-bold text-foreground dark:text-gray-100 mb-3">Line Height Guidelines by Script</h3>
          <p className="text-sm text-muted-foreground dark:text-muted-foreground mb-4">
            Different scripts require different line heights due to the vertical space needed for diacritics, 
            conjuncts, and character complexity. Use these minimum values:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <LineHeightCard script="Latin (English)" minLineHeight="150%" recommended="140-160%" />
            <LineHeightCard script="Devanagari" minLineHeight="175%" recommended="170-200%" />
            <LineHeightCard script="Bengali/Assamese" minLineHeight="165%" recommended="160-180%" />
            <LineHeightCard script="Tamil" minLineHeight="160%" recommended="155-170%" />
            <LineHeightCard script="Telugu" minLineHeight="170%" recommended="165-185%" />
            <LineHeightCard script="Malayalam" minLineHeight="180%" recommended="175-200%" />
          </div>
        </div>

        {/* Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <DoCard
            title="Adequate Line Height"
            example={
              <div className="space-y-4">
                <div className="text-sm leading-relaxed">
                  <p className="mb-2">राशन कार्ड एक महत्वपूर्ण दस्तावेज़ है जो</p>
                  <p className="mb-2">सार्वजनिक वितरण प्रणाली के तहत</p>
                  <p>रियायती दरों पर खाद्यान्न प्राप्त करने में मदद करता है।</p>
                </div>
                <div className="text-xs text-muted-foreground dark:text-muted-foreground">Line height: 180% (Recommended)</div>
              </div>
            }
            reason="Diacritics and conjuncts have adequate space, preventing visual crowding"
          />

          <DontCard
            title="Insufficient Line Height"
            example={
              <div className="space-y-4">
                <div className="text-sm leading-tight">
                  <p className="mb-1">राशन कार्ड एक महत्वपूर्ण दस्तावेज़ है जो</p>
                  <p className="mb-1">सार्वजनिक वितरण प्रणाली के तहत</p>
                  <p>रियायती दरों पर खाद्यान्न प्राप्त करने में मदद करता है।</p>
                </div>
                <div className="text-xs text-muted-foreground dark:text-muted-foreground">Line height: 120% (Too tight)</div>
              </div>
            }
            reason="Characters appear cramped, diacritics may touch adjacent lines, poor readability"
          />
        </div>
      </div>
    </section>
  );
}

function LineHeightCard({ script, minLineHeight, recommended }: any) {
  return (
    <div className="bg-card dark:bg-gray-900 border-2 border-border dark:border-gray-700 rounded-lg p-4">
      <div className="font-bold text-foreground dark:text-gray-100 mb-2 text-sm">{script}</div>
      <div className="space-y-1 text-xs text-muted-foreground dark:text-muted-foreground">
        <div><strong>Minimum:</strong> {minLineHeight}</div>
        <div><strong>Recommended:</strong> {recommended}</div>
      </div>
    </div>
  );
}

function LabelExpansion() {
  return (
    <section id="expansion">
      <SectionHeader
        title="Label Length & Expansion Handling"
        description="Design for text expansion when translating from English to Indian languages"
        icon={<AlertTriangle size={28} />}
      />

      <div className="mt-8 space-y-6">
        <div className="bg-orange-50 dark:bg-orange-900/20 border-2 border-orange-200 dark:border-orange-800 rounded-lg p-6">
          <h3 className="font-bold text-foreground dark:text-gray-100 mb-3 flex items-center gap-2">
            <AlertTriangle className="text-orange-600" size={20} />
            Text Expansion Factors
          </h3>
          <p className="text-sm text-muted-foreground dark:text-muted-foreground mb-4">
            Translated text can be 20-40% longer than English. Design with expansion in mind:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <ExpansionCard language="Hindi" factor="+30-40%" example="Submit → प्रस्तुत करें (+140%)" />
            <ExpansionCard language="Tamil" factor="+25-35%" example="Apply → விண்ணப்பிக்கவும் (+160%)" />
            <ExpansionCard language="Telugu" factor="+30-40%" example="Continue → కొనసాగించు (+80%)" />
            <ExpansionCard language="Bengali" factor="+25-35%" example="Cancel → বাতিল করুন (+110%)" />
          </div>
        </div>

        {/* Button Examples */}
        <div className="border-2 border-border dark:border-gray-700 rounded-lg overflow-hidden">
          <div className="bg-background dark:bg-gray-800 p-6 border-b-2 border-border dark:border-gray-700">
            <h3 className="font-bold text-foreground dark:text-gray-100">Button Text Expansion Examples</h3>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <ButtonExpansionDemo
                language="English"
                buttons={['Submit', 'Cancel', 'Save Draft', 'Continue']}
              />
              <ButtonExpansionDemo
                language="Hindi (Devanagari)"
                buttons={['प्रस्तुत करें', 'रद्द करें', 'ड्राफ्ट सहेजें', 'जारी रखें']}
              />
              <ButtonExpansionDemo
                language="Tamil"
                buttons={['சமர்ப்பிக்கவும்', 'ரத்துசெய்', 'வரைவு சேமி', 'தொடரவும்']}
              />
            </div>
          </div>
        </div>

        {/* Do/Don't */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <DoCard
            title="Flexible Button Width"
            example={
              <div className="space-y-3">
                <button className="px-6 py-3 bg-primary text-white rounded-lg w-full">
                  Submit Application
                </button>
                <button className="px-6 py-3 bg-primary text-white rounded-lg w-full">
                  आवेदन प्रस्तुत करें
                </button>
              </div>
            }
            reason="Buttons expand to accommodate translated text without truncation"
          />

          <DontCard
            title="Fixed Width Buttons"
            example={
              <div className="space-y-3">
                <button className="px-6 py-3 bg-primary text-white rounded-lg w-48">
                  Submit Application
                </button>
                <button className="px-6 py-3 bg-primary text-white rounded-lg w-48 truncate">
                  आवेदन प्रस्तुत करें
                </button>
              </div>
            }
            reason="Fixed width causes text truncation or overflow in translations"
          />
        </div>
      </div>
    </section>
  );
}

function ExpansionCard({ language, factor, example }: any) {
  return (
    <div className="bg-card dark:bg-gray-900 border-2 border-orange-300 rounded-lg p-4">
      <div className="font-bold text-foreground dark:text-gray-100 mb-2 text-sm">{language}</div>
      <div className="text-2xl font-bold text-orange-600 mb-2">{factor}</div>
      <div className="text-xs text-muted-foreground dark:text-muted-foreground">{example}</div>
    </div>
  );
}

function ButtonExpansionDemo({ language, buttons }: any) {
  return (
    <div className="space-y-3">
      <div className="font-bold text-foreground dark:text-gray-100 text-sm mb-3">{language}</div>
      {buttons.map((text: string, index: number) => (
        <button key={index} className="px-6 py-2 bg-blue-600 text-white rounded text-sm w-full">
          {text}
        </button>
      ))}
    </div>
  );
}

function ButtonNavigationResilience() {
  return (
    <section id="resilience">
      <SectionHeader
        title="Button & Navigation Text Resilience"
        description="Design navigation and action elements that adapt to translation length"
        icon={<Smartphone size={28} />}
      />

      <div className="mt-8 space-y-6">
        {/* Navigation Examples */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <DoCard
            title="Responsive Navigation"
            example={
              <div className="space-y-4">
                <nav className="flex gap-2 flex-wrap bg-muted dark:bg-gray-800 p-3 rounded">
                  <a href="#" className="px-4 py-2 bg-card dark:bg-gray-900 rounded text-sm">Home</a>
                  <a href="#" className="px-4 py-2 bg-card dark:bg-gray-900 rounded text-sm">Services</a>
                  <a href="#" className="px-4 py-2 bg-card dark:bg-gray-900 rounded text-sm">My Applications</a>
                  <a href="#" className="px-4 py-2 bg-card dark:bg-gray-900 rounded text-sm">Help</a>
                </nav>
                <nav className="flex gap-2 flex-wrap bg-muted dark:bg-gray-800 p-3 rounded">
                  <a href="#" className="px-4 py-2 bg-card dark:bg-gray-900 rounded text-sm">होम</a>
                  <a href="#" className="px-4 py-2 bg-card dark:bg-gray-900 rounded text-sm">सेवाएं</a>
                  <a href="#" className="px-4 py-2 bg-card dark:bg-gray-900 rounded text-sm">मेरे आवेदन</a>
                  <a href="#" className="px-4 py-2 bg-card dark:bg-gray-900 rounded text-sm">सहायता</a>
                </nav>
              </div>
            }
            reason="Navigation wraps gracefully, maintains spacing and readability"
          />

          <DontCard
            title="Overflow Navigation"
            example={
              <div className="space-y-4">
                <nav className="flex gap-2 overflow-hidden bg-muted dark:bg-gray-800 p-3 rounded">
                  <a href="#" className="px-4 py-2 bg-card dark:bg-gray-900 rounded text-sm whitespace-nowrap">Home</a>
                  <a href="#" className="px-4 py-2 bg-card dark:bg-gray-900 rounded text-sm whitespace-nowrap">Services</a>
                  <a href="#" className="px-4 py-2 bg-card dark:bg-gray-900 rounded text-sm whitespace-nowrap">My Applications</a>
                  <a href="#" className="px-4 py-2 bg-card dark:bg-gray-900 rounded text-sm whitespace-nowrap">Help</a>
                </nav>
                <nav className="flex gap-2 overflow-hidden bg-muted dark:bg-gray-800 p-3 rounded">
                  <a href="#" className="px-4 py-2 bg-card dark:bg-gray-900 rounded text-sm whitespace-nowrap">होम</a>
                  <a href="#" className="px-4 py-2 bg-card dark:bg-gray-900 rounded text-sm whitespace-nowrap">सेवाएं</a>
                  <a href="#" className="px-4 py-2 bg-card dark:bg-gray-900 rounded text-sm whitespace-nowrap truncate">मेरे आवेदन</a>
                </nav>
              </div>
            }
            reason="Navigation items get cut off, hidden content inaccessible"
          />
        </div>
      </div>
    </section>
  );
}

function MixedLanguageUI() {
  return (
    <section id="mixed">
      <SectionHeader
        title="Mixed-Language UI Handling"
        description="Designing interfaces where multiple languages appear together"
        icon={<Languages size={28} />}
      />

      <div className="mt-8 space-y-6">
        <div className="bg-purple-50 dark:bg-purple-900/20 border-2 border-purple-200 dark:border-purple-800 rounded-lg p-6">
          <h3 className="font-bold text-foreground dark:text-gray-100 mb-3">Common Mixed-Language Scenarios</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-muted-foreground dark:text-muted-foreground">
            <div>
              <strong className="text-foreground dark:text-gray-100">Scenario 1: Code-Switching</strong>
              <p className="mt-1">Users mix English terms with regional languages (e.g., "Aadhaar Number" in Hindi interface)</p>
            </div>
            <div>
              <strong className="text-foreground dark:text-gray-100">Scenario 2: Names & IDs</strong>
              <p className="mt-1">Personal names, application numbers, and references remain in original language/script</p>
            </div>
            <div>
              <strong className="text-foreground dark:text-gray-100">Scenario 3: Technical Terms</strong>
              <p className="mt-1">Some technical terms lack good translations, requiring mixed-language labels</p>
            </div>
            <div>
              <strong className="text-foreground dark:text-gray-100">Scenario 4: Bilingual Display</strong>
              <p className="mt-1">Showing both regional language and English for clarity (e.g., signage pattern)</p>
            </div>
          </div>
        </div>

        {/* Examples */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <DoCard
            title="Clear Language Mixing"
            example={
              <div className="border-2 border-border dark:border-gray-700 rounded-lg p-4 space-y-3">
                <div className="text-sm">
                  <div className="text-muted-foreground dark:text-muted-foreground text-xs mb-1">आवेदन संख्या</div>
                  <div className="font-mono">RAT2026-45678</div>
                </div>
                <div className="text-sm">
                  <div className="text-muted-foreground dark:text-muted-foreground text-xs mb-1">नाम</div>
                  <div>राज कुमार</div>
                </div>
                <div className="text-sm">
                  <div className="text-muted-foreground dark:text-muted-foreground text-xs mb-1">आधार नंबर</div>
                  <div className="font-mono">1234-5678-9012</div>
                </div>
              </div>
            }
            reason="Labels in regional language, data shown in appropriate script/format"
          />

          <DontCard
            title="Inconsistent Mixing"
            example={
              <div className="border-2 border-border dark:border-gray-700 rounded-lg p-4 space-y-3">
                <div className="text-sm">
                  <div className="text-muted-foreground dark:text-muted-foreground text-xs mb-1">Application Number</div>
                  <div className="font-mono">RAT2026-45678</div>
                </div>
                <div className="text-sm">
                  <div className="text-muted-foreground dark:text-muted-foreground text-xs mb-1">नाम</div>
                  <div>राज कुमार</div>
                </div>
                <div className="text-sm">
                  <div className="text-muted-foreground dark:text-muted-foreground text-xs mb-1">Aadhaar संख्या</div>
                  <div className="font-mono">1234-5678-9012</div>
                </div>
              </div>
            }
            reason="Random mixing of English and Hindi without clear pattern, confusing"
          />
        </div>
      </div>
    </section>
  );
}

function LanguageExamples() {
  return (
    <section id="examples">
      <SectionHeader
        title="Page Examples: English + Regional Languages"
        description="Complete page examples showing multilingual design in practice"
        icon={<Globe size={28} />}
      />

      <div className="mt-8 space-y-8">
        {/* Example 1: Application Form */}
        <div className="border-2 border-border dark:border-gray-700 rounded-lg overflow-hidden">
          <div className="bg-background dark:bg-gray-800 p-6 border-b-2 border-border dark:border-gray-700">
            <h3 className="font-bold text-foreground dark:text-gray-100">Example: Application Form Page</h3>
          </div>

          <div className="p-8 bg-gradient-to-b from-white to-gray-50">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* English */}
              <FormExample
                language="English"
                title="Apply for Ration Card"
                subtitle="Step 1 of 5: Personal Information"
                fields={[
                  { label: 'Full Name', placeholder: 'Enter your full name' },
                  { label: 'Date of Birth', placeholder: 'DD/MM/YYYY' },
                  { label: 'Mobile Number', placeholder: '10-digit mobile number' }
                ]}
                buttonText="Continue to Next Step"
              />

              {/* Hindi */}
              <FormExample
                language="हिंदी (Hindi)"
                title="राशन कार्ड के लिए आवेदन करें"
                subtitle="चरण 1 का 5: व्यक्तिगत जानकारी"
                fields={[
                  { label: 'पूरा नाम', placeholder: 'अपना पूरा नाम दर्ज करें' },
                  { label: 'जन्म तिथि', placeholder: 'दिन/महीना/वर्ष' },
                  { label: 'मोबाइल नंबर', placeholder: '10 अंकों का मोबाइल नंबर' }
                ]}
                buttonText="अगले चरण पर जारी रखें"
              />

              {/* Tamil */}
              <FormExample
                language="தமிழ் (Tamil)"
                title="ரேஷன் கார்டுக்கு விண்ணப்பிக்கவும்"
                subtitle="படி 1 இல் 5: தனிப்பட்ட தகவல்"
                fields={[
                  { label: 'முழு பெயர்', placeholder: 'உங்கள் முழு பெயரை உள்ளிடவும்' },
                  { label: 'பிறந்த தேதி', placeholder: 'நாள்/மாதம்/ஆண்டு' },
                  { label: 'மொபைல் எண்', placeholder: '10 இலக்க மொபைல் எண்' }
                ]}
                buttonText="அடுத்த படிக்கு தொடரவும்"
              />
            </div>
          </div>
        </div>

        {/* Example 2: Status Dashboard */}
        <div className="border-2 border-border dark:border-gray-700 rounded-lg overflow-hidden">
          <div className="bg-background dark:bg-gray-800 p-6 border-b-2 border-border dark:border-gray-700">
            <h3 className="font-bold text-foreground dark:text-gray-100">Example: Application Status Dashboard</h3>
          </div>

          <div className="p-8 bg-gradient-to-b from-white to-gray-50">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* English */}
              <StatusExample
                language="English"
                appNumber="RAT2026-12345"
                status="Under Review"
                statusColor="bg-blue-100 text-blue-700"
                steps={[
                  { label: 'Application Submitted', status: 'complete' },
                  { label: 'Document Verification', status: 'current' },
                  { label: 'Approval', status: 'pending' }
                ]}
                message="Your documents are being verified. This usually takes 3-5 business days."
              />

              {/* Hindi */}
              <StatusExample
                language="हिंदी (Hindi)"
                appNumber="RAT2026-12345"
                status="समीक्षाधीन"
                statusColor="bg-blue-100 text-blue-700"
                steps={[
                  { label: 'आवेदन प्रस्तुत', status: 'complete' },
                  { label: 'दस्तावेज़ सत्यापन', status: 'current' },
                  { label: 'अनुमोदन', status: 'pending' }
                ]}
                message="आपके दस्तावेज़ों का सत्यापन किया जा रहा है। इसमें आमतौर पर 3-5 कार्य दिवस लगते हैं।"
              />

              {/* Tamil */}
              <StatusExample
                language="தமிழ் (Tamil)"
                appNumber="RAT2026-12345"
                status="மதிப்பாய்வில்"
                statusColor="bg-blue-100 text-blue-700"
                steps={[
                  { label: 'விண்ணப்பம் சமர்ப்பிக்கப்பட்டது', status: 'complete' },
                  { label: 'ஆவண சரிபார்ப்பு', status: 'current' },
                  { label: 'ஒப்புதல்', status: 'pending' }
                ]}
                message="உங்கள் ஆவணங்கள் சரிபார்க்கப்படுகின்றன. இதற்கு பொதுவாக 3-5 வணிக நாட்கள் ஆகும்."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FormExample({ language, title, subtitle, fields, buttonText }: any) {
  return (
    <div className="bg-card dark:bg-gray-900 border-2 border-border dark:border-gray-700 rounded-lg p-6 shadow-sm">
      <div className="text-xs text-muted-foreground dark:text-muted-foreground mb-4">{language}</div>
      <h3 className="text-xl font-bold text-foreground dark:text-gray-100 mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground dark:text-muted-foreground mb-6">{subtitle}</p>

      <div className="space-y-4">
        {fields.map((field: any, index: number) => (
          <div key={index}>
            <label className="block text-sm font-medium text-muted-foreground dark:text-muted-foreground mb-2">
              {field.label} <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              readOnly
              placeholder={field.placeholder}
              className="w-full px-4 py-2 border-2 border-border dark:border-gray-700 rounded-lg text-sm"
            />
          </div>
        ))}
      </div>

      <button className="w-full mt-6 px-6 py-3 bg-primary text-white rounded-lg font-medium text-sm">
        {buttonText}
      </button>
    </div>
  );
}

function StatusExample({ language, appNumber, status, statusColor, steps, message }: any) {
  return (
    <div className="bg-card dark:bg-gray-900 border-2 border-border dark:border-gray-700 rounded-lg p-6 shadow-sm">
      <div className="text-xs text-muted-foreground dark:text-muted-foreground mb-4">{language}</div>

      <div className="flex items-center justify-between mb-4">
        <div className="font-mono text-sm text-muted-foreground dark:text-muted-foreground">{appNumber}</div>
        <div className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColor}`}>
          {status}
        </div>
      </div>

      <div className="space-y-3 mb-6">
        {steps.map((step: any, index: number) => (
          <div key={index} className="flex items-center gap-3">
            <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
              step.status === 'complete' ? 'bg-green-50 dark:bg-green-900/200 text-white' :
              step.status === 'current' ? 'bg-blue-50 dark:bg-blue-900/200 text-white' :
              'bg-gray-300 text-muted-foreground dark:text-muted-foreground'
            }`}>
              {step.status === 'complete' ? '✓' : index + 1}
            </div>
            <span className="text-sm text-muted-foreground dark:text-muted-foreground">{step.label}</span>
          </div>
        ))}
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded p-3 text-xs text-muted-foreground dark:text-muted-foreground">
        {message}
      </div>
    </div>
  );
}

function ErrorMessageLocalization() {
  return (
    <section id="errors">
      <SectionHeader
        title="Error Message Localization Guidance"
        description="Writing clear, actionable error messages in multiple languages"
        icon={<AlertTriangle size={28} />}
      />

      <div className="mt-8 space-y-6">
        <div className="bg-red-50 dark:bg-red-950/30 border-2 border-red-200 dark:border-red-800 rounded-lg p-6">
          <h3 className="font-bold text-foreground dark:text-gray-100 mb-3">Error Message Structure</h3>
          <p className="text-sm text-muted-foreground dark:text-muted-foreground mb-4">
            All error messages should follow the pattern: [What went wrong] + [How to fix it]
          </p>

          <div className="space-y-4">
            <ErrorMessageExample
              error="Field Required"
              english="Mobile number is required. Please enter your 10-digit mobile number."
              hindi="मोबाइल नंबर आवश्यक है। कृपया अपना 10 अंकों का मोबाइल नंबर दर्ज करें।"
              tamil="மொபைல் எண் தேவை. தயவுசெய்து உங்கள் 10 இலக்க மொபைல் எண்ணை உள்ளிடவும்."
            />

            <ErrorMessageExample
              error="Invalid Format"
              english="Email address is not valid. Please enter a valid email like name@example.com"
              hindi="ईमेल पता मान्य नहीं है। कृपया name@example.com जैसा वैध ईमेल दर्ज करें।"
              tamil="மின்னஞ்சல் முகவரி செல்லுபடியாகாது. name@example.com போன்ற செல்லுபடியான மின்னஞ்சலை உள்ளிடவும்."
            />

            <ErrorMessageExample
              error="Upload Failed"
              english="File is too large (8MB). Maximum file size is 5MB. Please compress or choose a smaller file."
              hindi="फ़ाइल बहुत बड़ी है (8MB)। अधिकतम फ़ाइल आकार 5MB है। कृपया संकुचित करें या छोटी फ़ाइल चुनें।"
              tamil="கோப்பு மிகப் பெரியது (8MB). அதிகபட்ச கோப்பு அளவு 5MB. தயவுசெய்து சுருக்கவும் அல்லது சிறிய கோப்பைத் தேர்ந்தெடுக்கவும்."
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <DoCard
            title="Actionable Error Messages"
            example={
              <div className="space-y-3">
                <div className="bg-red-50 dark:bg-red-950/30 border-2 border-red-300 rounded p-3 text-sm">
                  <div className="font-semibold text-red-900 mb-1">आयु सीमा से बाहर</div>
                  <div className="text-red-700 dark:text-red-400">इस सेवा के लिए आपकी आयु 18 वर्ष या उससे अधिक होनी चाहिए। कृपया अपनी जन्म तिथि जांचें।</div>
                </div>
              </div>
            }
            reason="Explains the problem and what action to take, in clear language"
          />

          <DontCard
            title="Vague Error Messages"
            example={
              <div className="space-y-3">
                <div className="bg-red-50 dark:bg-red-950/30 border-2 border-red-300 rounded p-3 text-sm">
                  <div className="font-semibold text-red-900 mb-1">त्रुटि</div>
                  <div className="text-red-700 dark:text-red-400">अमान्य इनपुट। कृपया पुनः प्रयास करें।</div>
                </div>
              </div>
            }
            reason="Doesn't explain what's wrong or how to fix it, frustrating for users"
          />
        </div>
      </div>
    </section>
  );
}

function ErrorMessageExample({ error, english, hindi, tamil }: any) {
  return (
    <div className="bg-card dark:bg-gray-900 border-2 border-border dark:border-gray-700 rounded-lg p-4">
      <div className="text-xs font-semibold text-muted-foreground dark:text-muted-foreground uppercase mb-3">{error}</div>
      <div className="space-y-3 text-sm">
        <div>
          <div className="text-xs text-muted-foreground dark:text-muted-foreground mb-1">English</div>
          <div className="text-muted-foreground dark:text-muted-foreground">{english}</div>
        </div>
        <div>
          <div className="text-xs text-muted-foreground dark:text-muted-foreground mb-1">हिंदी (Hindi)</div>
          <div className="text-muted-foreground dark:text-muted-foreground">{hindi}</div>
        </div>
        <div>
          <div className="text-xs text-muted-foreground dark:text-muted-foreground mb-1">தமிழ் (Tamil)</div>
          <div className="text-muted-foreground dark:text-muted-foreground">{tamil}</div>
        </div>
      </div>
    </div>
  );
}

function FormFieldLocalization() {
  return (
    <section id="forms">
      <SectionHeader
        title="Form Field Localization Rules"
        description="Best practices for localizing form labels, placeholders, and help text"
        icon={<User size={28} />}
      />

      <div className="mt-8 space-y-6">
        <div className="border-2 border-border dark:border-gray-700 rounded-lg overflow-hidden">
          <div className="bg-background dark:bg-gray-800 p-6 border-b-2 border-border dark:border-gray-700">
            <h3 className="font-bold text-foreground dark:text-gray-100">Form Field Components in Multiple Languages</h3>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <FormFieldDemo
                language="English"
                label="Full Name"
                placeholder="Enter your full name as per Aadhaar"
                help="Name should match government ID"
                required={true}
              />

              <FormFieldDemo
                language="हिंदी (Hindi)"
                label="पूरा नाम"
                placeholder="आधार के अनुसार अपना पूरा नाम दर्ज करें"
                help="नाम सरकारी पहचान पत्र से मेल खाना चाहिए"
                required={true}
              />

              <FormFieldDemo
                language="தமிழ் (Tamil)"
                label="முழு பெயர்"
                placeholder="ஆதார் படி உங்கள் முழு பெயரை உள்ளிடவும்"
                help="பெயர் அரசு அடையாள அட்டையுடன் பொருந்த வேண்டும்"
                required={true}
              />
            </div>
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <h3 className="font-bold text-foreground dark:text-gray-100 mb-3">Form Field Localization Rules</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground dark:text-muted-foreground">
            <li className="flex items-start gap-2">
              <CheckCircle className="flex-shrink-0 mt-0.5 text-blue-600 dark:text-blue-400" size={14} />
              <span><strong>Labels:</strong> Translate completely, keep concise (1-3 words ideal)</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="flex-shrink-0 mt-0.5 text-blue-600 dark:text-blue-400" size={14} />
              <span><strong>Placeholders:</strong> Provide example in local context, not just translation</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="flex-shrink-0 mt-0.5 text-blue-600 dark:text-blue-400" size={14} />
              <span><strong>Help Text:</strong> Localize fully, use culturally appropriate examples</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="flex-shrink-0 mt-0.5 text-blue-600 dark:text-blue-400" size={14} />
              <span><strong>Required Indicators:</strong> Use asterisk (*) universally recognized</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="flex-shrink-0 mt-0.5 text-blue-600 dark:text-blue-400" size={14} />
              <span><strong>Field Groups:</strong> Group labels translated together maintain context</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="flex-shrink-0 mt-0.5 text-blue-600 dark:text-blue-400" size={14} />
              <span><strong>Validation:</strong> Error messages in same language as form</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function FormFieldDemo({ language, label, placeholder, help, required }: any) {
  return (
    <div className="bg-background dark:bg-gray-800 border border-border dark:border-gray-700 rounded-lg p-4">
      <div className="text-xs text-muted-foreground dark:text-muted-foreground mb-4">{language}</div>
      <div>
        <label className="block text-sm font-medium text-foreground dark:text-gray-100 mb-2">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        <input
          type="text"
          readOnly
          placeholder={placeholder}
          className="w-full px-3 py-2 border-2 border-border dark:border-gray-700 rounded text-sm mb-2"
        />
        <div className="text-xs text-muted-foreground dark:text-muted-foreground">{help}</div>
      </div>
    </div>
  );
}

function DataFormatting() {
  return (
    <section id="formatting">
      <SectionHeader
        title="Date, Number, Address & Name Formatting"
        description="Regional formatting conventions for common data types"
        icon={<Calendar size={28} />}
      />

      <div className="mt-8 space-y-6">
        {/* Date Formatting */}
        <div className="border-2 border-border dark:border-gray-700 rounded-lg overflow-hidden">
          <div className="bg-background dark:bg-gray-800 p-6 border-b-2 border-border dark:border-gray-700">
            <h3 className="font-bold text-foreground dark:text-gray-100">Date Formatting</h3>
          </div>

          <div className="p-6">
            <div className="space-y-4">
              <FormattingExample
                type="Date Display"
                english="15 April 2026 (DD Month YYYY)"
                hindi="15 अप्रैल 2026 (DD महीना YYYY)"
                tamil="15 ஏப்ரல் 2026 (DD மாதம் YYYY)"
                notes="Use full month names for clarity. Numeric format: DD/MM/YYYY across all languages."
              />

              <FormattingExample
                type="Time Display"
                english="2:30 PM (12-hour with AM/PM)"
                hindi="दोपहर 2:30 बजे (12-घंटे AM/PM के साथ)"
                tamil="பிற்பகல் 2:30 (12-மணி AM/PM உடன்)"
                notes="12-hour format more common in India. Localize AM/PM indicators."
              />
            </div>
          </div>
        </div>

        {/* Number Formatting */}
        <div className="border-2 border-border dark:border-gray-700 rounded-lg overflow-hidden">
          <div className="bg-background dark:bg-gray-800 p-6 border-b-2 border-border dark:border-gray-700">
            <h3 className="font-bold text-foreground dark:text-gray-100">Number & Currency Formatting</h3>
          </div>

          <div className="p-6">
            <div className="space-y-4">
              <FormattingExample
                type="Indian Numbering"
                english="1,23,45,678 (Indian style)"
                hindi="1,23,45,678 (भारतीय शैली)"
                tamil="1,23,45,678 (இந்திய பாணி)"
                notes="Use Indian lakhs/crores system, not international thousands/millions."
              />

              <FormattingExample
                type="Currency"
                english="₹1,23,456.00"
                hindi="₹1,23,456.00"
                tamil="₹1,23,456.00"
                notes="Rupee symbol (₹) is universal. Number format follows Indian standard."
              />
            </div>
          </div>
        </div>

        {/* Address Formatting */}
        <div className="border-2 border-border dark:border-gray-700 rounded-lg overflow-hidden">
          <div className="bg-background dark:bg-gray-800 p-6 border-b-2 border-border dark:border-gray-700">
            <h3 className="font-bold text-foreground dark:text-gray-100">Address Formatting</h3>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <AddressExample
                language="English"
                lines={[
                  '123, MG Road',
                  'Sector 15',
                  'New Delhi, Delhi',
                  'PIN: 110001'
                ]}
              />

              <AddressExample
                language="हिंदी (Hindi)"
                lines={[
                  '123, एमजी रोड',
                  'सेक्टर 15',
                  'नई दिल्ली, दिल्ली',
                  'पिन: 110001'
                ]}
              />

              <AddressExample
                language="தமிழ் (Tamil)"
                lines={[
                  '123, எம்ஜி சாலை',
                  'துறை 15',
                  'புது டெல்லி, டெல்லி',
                  'பின்: 110001'
                ]}
              />
            </div>
            <div className="mt-4 text-sm text-muted-foreground dark:text-muted-foreground">
              <strong>Note:</strong> PIN code format remains numeric (110001) across all languages. Street/area names transliterated.
            </div>
          </div>
        </div>

        {/* Name Formatting */}
        <div className="bg-purple-50 dark:bg-purple-900/20 border-2 border-purple-200 dark:border-purple-800 rounded-lg p-6">
          <h3 className="font-bold text-foreground dark:text-gray-100 mb-3">Name Formatting Considerations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-muted-foreground dark:text-muted-foreground">
            <div>
              <strong className="text-foreground dark:text-gray-100">Indian Naming Patterns:</strong>
              <ul className="mt-2 space-y-1">
                <li>• First Name + Father's Name + Surname (North India)</li>
                <li>• First Name + Father's Initial (South India)</li>
                <li>• Single name (common in some regions)</li>
                <li>• Avoid "First/Middle/Last" labels</li>
              </ul>
            </div>
            <div>
              <strong className="text-foreground dark:text-gray-100">Implementation:</strong>
              <ul className="mt-2 space-y-1">
                <li>• Use "Full Name" as single field when possible</li>
                <li>• If split needed: "First Name" + "Last Name/Surname"</li>
                <li>• Make surname optional for South Indian users</li>
                <li>• Support Devanagari and regional scripts for names</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FormattingExample({ type, english, hindi, tamil, notes }: any) {
  return (
    <div className="bg-background dark:bg-gray-800 border border-border dark:border-gray-700 rounded-lg p-4">
      <div className="text-xs font-semibold text-muted-foreground dark:text-muted-foreground uppercase mb-3">{type}</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-3">
        <div className="text-sm">
          <div className="text-xs text-muted-foreground dark:text-muted-foreground mb-1">English</div>
          <div className="font-semibold text-foreground dark:text-gray-100">{english}</div>
        </div>
        <div className="text-sm">
          <div className="text-xs text-muted-foreground dark:text-muted-foreground mb-1">Hindi</div>
          <div className="font-semibold text-foreground dark:text-gray-100">{hindi}</div>
        </div>
        <div className="text-sm">
          <div className="text-xs text-muted-foreground dark:text-muted-foreground mb-1">Tamil</div>
          <div className="font-semibold text-foreground dark:text-gray-100">{tamil}</div>
        </div>
      </div>
      <div className="text-xs text-muted-foreground dark:text-muted-foreground border-t border-border dark:border-gray-700 pt-2">{notes}</div>
    </div>
  );
}

function AddressExample({ language, lines }: any) {
  return (
    <div className="bg-card dark:bg-gray-900 border-2 border-border dark:border-gray-700 rounded p-4">
      <div className="text-xs text-muted-foreground dark:text-muted-foreground mb-3">{language}</div>
      <div className="text-sm text-foreground dark:text-gray-100 space-y-1">
        {lines.map((line: string, index: number) => (
          <div key={index}>{line}</div>
        ))}
      </div>
    </div>
  );
}

function SearchSortBehavior() {
  return (
    <section id="search">
      <SectionHeader
        title="Search & Sort Behavior for Multilingual Interfaces"
        description="Handling search, filtering, and sorting across different scripts"
        icon={<Search size={28} />}
      />

      <div className="mt-8 space-y-6">
        <div className="bg-orange-50 dark:bg-orange-900/20 border-2 border-orange-200 dark:border-orange-800 rounded-lg p-6">
          <h3 className="font-bold text-foreground dark:text-gray-100 mb-3">Search Challenges in Multilingual Systems</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-muted-foreground dark:text-muted-foreground">
            <div>
              <strong className="text-foreground dark:text-gray-100">Challenge 1: Script Mixing</strong>
              <p className="mt-1">Users may search in English for Hindi content or vice versa. System should handle transliteration.</p>
            </div>
            <div>
              <strong className="text-foreground dark:text-gray-100">Challenge 2: Alphabetical Sort</strong>
              <p className="mt-1">Each script has different alphabetical order. Hindi: क ख ग vs. English: A B C</p>
            </div>
            <div>
              <strong className="text-foreground dark:text-gray-100">Challenge 3: Diacritics</strong>
              <p className="mt-1">Search should ignore diacritics/matras unless critical for meaning.</p>
            </div>
            <div>
              <strong className="text-foreground dark:text-gray-100">Challenge 4: Mixed Content</strong>
              <p className="mt-1">Content may contain both English and regional language. Both should be searchable.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <DoCard
            title="Script-Aware Sorting"
            example={
              <div className="bg-card dark:bg-gray-900 border-2 border-border dark:border-gray-700 rounded-lg p-4">
                <div className="text-xs text-muted-foreground dark:text-muted-foreground mb-2">Hindi alphabetical order</div>
                <div className="space-y-1 text-sm">
                  <div>अजय कुमार</div>
                  <div>आशा शर्मा</div>
                  <div>कमल पाटिल</div>
                  <div>गीता देवी</div>
                  <div>राज वर्मा</div>
                </div>
              </div>
            }
            reason="Names sorted according to Devanagari script order (अ आ क ग र)"
          />

          <DontCard
            title="ASCII-based Sorting"
            example={
              <div className="bg-card dark:bg-gray-900 border-2 border-border dark:border-gray-700 rounded-lg p-4">
                <div className="text-xs text-muted-foreground dark:text-muted-foreground mb-2">Incorrect sort order</div>
                <div className="space-y-1 text-sm">
                  <div>गीता देवी</div>
                  <div>कमल पाटिल</div>
                  <div>अजय कुमार</div>
                  <div>राज वर्मा</div>
                  <div>आशा शर्मा</div>
                </div>
              </div>
            }
            reason="Sorting based on Unicode code points, not linguistic order"
          />
        </div>

        <div className="border-2 border-border dark:border-gray-700 rounded-lg p-6">
          <h3 className="font-bold text-foreground dark:text-gray-100 mb-4">Implementation Guidelines</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground dark:text-muted-foreground">
            <li className="flex items-start gap-2">
              <Code className="flex-shrink-0 mt-0.5 text-blue-600 dark:text-blue-400" size={14} />
              <span><strong>Use ICU collation:</strong> For proper script-aware sorting</span>
            </li>
            <li className="flex items-start gap-2">
              <Code className="flex-shrink-0 mt-0.5 text-blue-600 dark:text-blue-400" size={14} />
              <span><strong>Transliteration search:</strong> "raj" should find "राज"</span>
            </li>
            <li className="flex items-start gap-2">
              <Code className="flex-shrink-0 mt-0.5 text-blue-600 dark:text-blue-400" size={14} />
              <span><strong>Fuzzy matching:</strong> Handle spelling variations and typos</span>
            </li>
            <li className="flex items-start gap-2">
              <Code className="flex-shrink-0 mt-0.5 text-blue-600 dark:text-blue-400" size={14} />
              <span><strong>Language detection:</strong> Auto-detect search query language</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function TranslationQuality() {
  return (
    <section id="translation">
      <SectionHeader
        title="Translation Quality Notes"
        description="Ensuring high-quality, consistent translations across services"
        icon={<CheckCircle size={28} />}
      />

      <div className="mt-8 space-y-6">
        <div className="border-2 border-border dark:border-gray-700 rounded-lg overflow-hidden">
          <div className="bg-background dark:bg-gray-800 p-6 border-b-2 border-border dark:border-gray-700">
            <h3 className="font-bold text-foreground dark:text-gray-100">Translation Quality Standards</h3>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <QualityStandard
                level="Required"
                color="bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-800 text-red-900"
                standards={[
                  'Professional human translation (no machine translation for production)',
                  'Native speaker review for each language',
                  'Terminology consistency across all services',
                  'Cultural appropriateness verification',
                  'Grammar and spelling accuracy'
                ]}
              />

              <QualityStandard
                level="Best Practice"
                color="bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 text-green-900"
                standards={[
                  'Maintain translation memory database',
                  'Use glossaries for technical and legal terms',
                  'Regular updates when English content changes',
                  'User feedback mechanism for translation issues',
                  'A/B testing for clarity in regional languages'
                ]}
              />
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 dark:bg-yellow-950/30 border-2 border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
          <h3 className="font-bold text-foreground dark:text-gray-100 mb-3 flex items-center gap-2">
            <AlertTriangle className="text-yellow-600" size={20} />
            Common Translation Pitfalls to Avoid
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-muted-foreground dark:text-muted-foreground">
            <div>
              <strong className="text-foreground dark:text-gray-100">Literal Translation:</strong>
              <p className="mt-1">Don't translate word-by-word. "Apply Now" → "अभी आवेदन करें" (natural) not "लागू करें अब" (literal)</p>
            </div>
            <div>
              <strong className="text-foreground dark:text-gray-100">Technical Jargon:</strong>
              <p className="mt-1">Use common terms. "Authenticate" → "सत्यापित करें" (verify) not "प्रमाणित करें" (certify)</p>
            </div>
            <div>
              <strong className="text-foreground dark:text-gray-100">Gender Assumptions:</strong>
              <p className="mt-1">Hindi/other languages have gendered forms. Avoid assuming user gender in messaging.</p>
            </div>
            <div>
              <strong className="text-foreground dark:text-gray-100">Cultural Context:</strong>
              <p className="mt-1">Western examples don't translate. Use Indian names, places, scenarios in localized content.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function QualityStandard({ level, color, standards }: any) {
  return (
    <div className={`border-2 rounded-lg p-6 ${color}`}>
      <h4 className="font-bold mb-4">{level}</h4>
      <ul className="space-y-2">
        {standards.map((standard: string, index: number) => (
          <li key={index} className="flex items-start gap-2 text-sm">
            <CheckCircle className="flex-shrink-0 mt-0.5" size={14} />
            <span>{standard}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function TruncationOverflow() {
  return (
    <section id="truncation">
      <SectionHeader
        title="Content Truncation & Overflow Rules"
        description="Handling text that exceeds available space in multilingual interfaces"
        icon={<Layout size={28} />}
      />

      <div className="mt-8 space-y-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <h3 className="font-bold text-foreground dark:text-gray-100 mb-3">Truncation Hierarchy</h3>
          <p className="text-sm text-muted-foreground dark:text-muted-foreground mb-4">
            When text must be truncated, follow this priority:
          </p>

          <div className="space-y-3">
            <TruncationRule
              priority="1"
              rule="Avoid Truncation First"
              description="Expand container, wrap text, or use responsive design before truncating"
            />
            <TruncationRule
              priority="2"
              rule="Truncate Secondary Content"
              description="Descriptions, help text, or supplementary information can truncate with ellipsis"
            />
            <TruncationRule
              priority="3"
              rule="Never Truncate Critical Content"
              description="Error messages, legal text, required information must never truncate"
            />
            <TruncationRule
              priority="4"
              rule="Provide Full Content on Interaction"
              description="Truncated text should expand on hover/click to show full content"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <DoCard
            title="Graceful Truncation"
            example={
              <div className="space-y-4">
                <div className="bg-card dark:bg-gray-900 border-2 border-border dark:border-gray-700 rounded p-4">
                  <div className="font-semibold text-foreground dark:text-gray-100 mb-2">राशन कार्ड आवेदन</div>
                  <div className="text-sm text-muted-foreground dark:text-muted-foreground line-clamp-2">
                    यह सेवा आपको सार्वजनिक वितरण प्रणाली के तहत रियायती दरों पर खाद्यान्न प्राप्त करने...
                  </div>
                  <button className="text-blue-600 dark:text-blue-400 text-xs mt-2">और पढ़ें</button>
                </div>
              </div>
            }
            reason="Secondary description truncated with ellipsis and 'Read more' option"
          />

          <DontCard
            title="Critical Text Truncation"
            example={
              <div className="space-y-4">
                <div className="bg-red-50 dark:bg-red-950/30 border-2 border-red-300 rounded p-4">
                  <div className="font-semibold text-red-900 mb-2">त्रुटि</div>
                  <div className="text-sm text-red-700 dark:text-red-400 truncate">
                    आपकी फ़ाइल बहुत बड़ी है। अधिकतम आकार 5MB है। कृपया...
                  </div>
                </div>
              </div>
            }
            reason="Error message truncated, user can't see how to fix the problem"
          />
        </div>

        <div className="border-2 border-border dark:border-gray-700 rounded-lg p-6">
          <h3 className="font-bold text-foreground dark:text-gray-100 mb-4">Truncation Implementation Notes</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground dark:text-muted-foreground">
            <li className="flex items-start gap-2">
              <Code className="flex-shrink-0 mt-0.5 text-blue-600 dark:text-blue-400" size={14} />
              <span>Use CSS <code className="bg-muted dark:bg-gray-800 px-1 rounded">text-overflow: ellipsis</code> for single lines</span>
            </li>
            <li className="flex items-start gap-2">
              <Code className="flex-shrink-0 mt-0.5 text-blue-600 dark:text-blue-400" size={14} />
              <span>Use <code className="bg-muted dark:bg-gray-800 px-1 rounded">line-clamp</code> for multi-line truncation</span>
            </li>
            <li className="flex items-start gap-2">
              <Code className="flex-shrink-0 mt-0.5 text-blue-600 dark:text-blue-400" size={14} />
              <span>Always include full text in <code className="bg-muted dark:bg-gray-800 px-1 rounded">title</code> attribute for tooltips</span>
            </li>
            <li className="flex items-start gap-2">
              <Code className="flex-shrink-0 mt-0.5 text-blue-600 dark:text-blue-400" size={14} />
              <span>Test truncation with longest expected translations (typically Hindi)</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function TruncationRule({ priority, rule, description }: any) {
  return (
    <div className="flex items-start gap-4 bg-card dark:bg-gray-900 border-2 border-blue-300 rounded-lg p-4">
      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
        {priority}
      </div>
      <div>
        <div className="font-bold text-foreground dark:text-gray-100 mb-1">{rule}</div>
        <div className="text-sm text-muted-foreground dark:text-muted-foreground">{description}</div>
      </div>
    </div>
  );
}

function AccessibilityConsiderations() {
  return (
    <section id="accessibility">
      <SectionHeader
        title="Accessibility Considerations for Multilingual Content"
        description="Ensuring multilingual interfaces are accessible to all users"
        icon={<Eye size={28} />}
      />

      <div className="mt-8 space-y-6">
        <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-6">
          <h3 className="font-bold text-foreground dark:text-gray-100 mb-4">Multilingual Accessibility Checklist</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-foreground dark:text-gray-100 mb-3 text-sm">Screen Reader Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground dark:text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="flex-shrink-0 mt-0.5 text-green-600 dark:text-green-400" size={14} />
                  <span>Set <code className="bg-muted dark:bg-gray-800 px-1 rounded">lang</code> attribute for each language block</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="flex-shrink-0 mt-0.5 text-green-600 dark:text-green-400" size={14} />
                  <span>Screen readers auto-switch pronunciation per language</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="flex-shrink-0 mt-0.5 text-green-600 dark:text-green-400" size={14} />
                  <span>Test with regional language screen reader voices</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="flex-shrink-0 mt-0.5 text-green-600 dark:text-green-400" size={14} />
                  <span>ARIA labels in user's selected language</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground dark:text-gray-100 mb-3 text-sm">Keyboard Navigation</h4>
              <ul className="space-y-2 text-sm text-muted-foreground dark:text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="flex-shrink-0 mt-0.5 text-green-600 dark:text-green-400" size={14} />
                  <span>Language selector keyboard accessible</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="flex-shrink-0 mt-0.5 text-green-600 dark:text-green-400" size={14} />
                  <span>Tab order works in RTL layouts (future: Urdu)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="flex-shrink-0 mt-0.5 text-green-600 dark:text-green-400" size={14} />
                  <span>Focus indicators visible on all language text</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="flex-shrink-0 mt-0.5 text-green-600 dark:text-green-400" size={14} />
                  <span>Keyboard shortcuts don't conflict with regional input</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground dark:text-gray-100 mb-3 text-sm">Visual Accessibility</h4>
              <ul className="space-y-2 text-sm text-muted-foreground dark:text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="flex-shrink-0 mt-0.5 text-green-600 dark:text-green-400" size={14} />
                  <span>Font sizes meet WCAG (16px+ for complex scripts)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="flex-shrink-0 mt-0.5 text-green-600 dark:text-green-400" size={14} />
                  <span>Contrast ratios maintained across all scripts</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="flex-shrink-0 mt-0.5 text-green-600 dark:text-green-400" size={14} />
                  <span>Zoom up to 200% without text overlap</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="flex-shrink-0 mt-0.5 text-green-600 dark:text-green-400" size={14} />
                  <span>Color not sole differentiator (use icons/text)</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground dark:text-gray-100 mb-3 text-sm">Content Accessibility</h4>
              <ul className="space-y-2 text-sm text-muted-foreground dark:text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="flex-shrink-0 mt-0.5 text-green-600 dark:text-green-400" size={14} />
                  <span>Alt text for images in user's language</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="flex-shrink-0 mt-0.5 text-green-600 dark:text-green-400" size={14} />
                  <span>Captions/transcripts in multiple languages</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="flex-shrink-0 mt-0.5 text-green-600 dark:text-green-400" size={14} />
                  <span>Form errors announced in selected language</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="flex-shrink-0 mt-0.5 text-green-600 dark:text-green-400" size={14} />
                  <span>Consistent heading structure across languages</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-2 border-border dark:border-gray-700 rounded-lg overflow-hidden">
          <div className="bg-background dark:bg-gray-800 p-6 border-b-2 border-border dark:border-gray-700">
            <h3 className="font-bold text-foreground dark:text-gray-100">Language Attribute Implementation</h3>
          </div>

          <div className="p-6 bg-gray-900 text-gray-100 font-mono text-sm overflow-x-auto">
            <pre>{`<!-- HTML document level -->
<html lang="hi">

<!-- Mixed language content -->
<div lang="en">
  <p>Application Number: RAT2026-12345</p>
</div>

<div lang="hi">
  <p>आवेदन की स्थिति: समीक्षाधीन</p>
</div>

<!-- Tamil section -->
<div lang="ta">
  <p>விண்ணப்ப நிலை: மதிப்பாய்வில்</p>
</div>`}</pre>
          </div>
        </div>
      </div>
    </section>
  );
}

// Reusable Components

function SectionHeader({ title, description, icon }: any) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-3">
        <div className="text-primary">{icon}</div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground dark:text-gray-100">{title}</h2>
      </div>
      <p className="text-lg text-muted-foreground dark:text-muted-foreground">{description}</p>
    </div>
  );
}

function DoCard({ title, example, reason }: any) {
  return (
    <div className="border-2 border-green-300 bg-green-50 dark:bg-green-900/20 rounded-lg overflow-hidden">
      <div className="bg-green-100 border-b-2 border-green-300 p-4 flex items-center gap-2">
        <CheckCircle className="text-green-700 dark:text-green-400" size={20} />
        <h4 className="font-bold text-green-900">{title}</h4>
      </div>
      <div className="p-6">
        <div className="mb-4">{example}</div>
        <div className="text-sm text-green-800 dark:text-green-300 bg-green-100 border border-green-300 rounded p-3">
          <strong>Why:</strong> {reason}
        </div>
      </div>
    </div>
  );
}

function DontCard({ title, example, reason }: any) {
  return (
    <div className="border-2 border-red-300 bg-red-50 dark:bg-red-950/30 rounded-lg overflow-hidden">
      <div className="bg-red-100 border-b-2 border-red-300 p-4 flex items-center gap-2">
        <X className="text-red-700 dark:text-red-400" size={20} />
        <h4 className="font-bold text-red-900">{title}</h4>
      </div>
      <div className="p-6">
        <div className="mb-4">{example}</div>
        <div className="text-sm text-red-800 dark:text-red-300 bg-red-100 border border-red-300 rounded p-3">
          <strong>Why not:</strong> {reason}
        </div>
      </div>
    </div>
  );
}
