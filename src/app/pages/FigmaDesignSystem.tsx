import { BookOpen, Palette, Code, Layers, FileText, Shield, GitBranch, Users, Download, Check, ArrowLeft } from "lucide-react";
import { Link } from "react-router";
import NavigationHeader from "../components/NavigationHeader";
import Footer from "../components/Footer";

export default function FigmaDesignSystem() {
  return (
    <div className="bg-background dark:bg-gray-900 min-h-screen">
      <NavigationHeader />

      {/* Page Header */}
      <div className="bg-card dark:bg-gray-800 border-b border-border dark:border-gray-700">
        <div className="max-w-[1920px] mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                to="/resources"
                className="p-2 hover:bg-muted dark:hover:bg-gray-700 rounded-lg transition-colors"
                aria-label="Back to Resources"
              >
                <ArrowLeft size={20} className="text-muted-foreground dark:text-muted-foreground" />
              </Link>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{
                  background: 'linear-gradient(to bottom right, var(--ux4g-color-saffron-500), white, var(--ux4g-color-green-600))'
                }}>
                  <div className="w-7 h-7 rounded" style={{ backgroundColor: 'var(--ux4g-color-brand-primary)' }}></div>
                </div>
                <div>
                  <div className="text-base font-semibold text-foreground dark:text-gray-100">UX4G Design System</div>
                  <div className="text-xs text-muted-foreground dark:text-muted-foreground">Figma MVP File v1.0</div>
                </div>
              </div>
            </div>
            <div className="text-sm text-muted-foreground dark:text-muted-foreground">
              12 Pages • 150+ Components • WCAG AA
            </div>
          </div>
        </div>
      </div>

      {/* Page Content */}
      <div className="max-w-[1920px] mx-auto">
        {/* Cover Page */}
        <CoverPage />
        
        {/* Foundations */}
        <FoundationsPage />
        
        {/* Design Tokens */}
        <DesignTokensPage />
        
        {/* Styles System */}
        <StylesSystemPage />
        
        {/* Core Components */}
        <CoreComponentsPage />
        
        {/* Component Variants */}
        <ComponentVariantsPage />
        
        {/* Accessibility Guidance */}
        <AccessibilityPage />
        
        {/* Documentation Templates */}
        <DocumentationTemplatesPage />
        
        {/* Implementation Guidance */}
        <ImplementationPage />
        
        {/* Governance */}
        <GovernancePage />
        
        {/* Adoption & Onboarding */}
        <AdoptionPage />
        
        {/* Service Blueprints */}
        <ServiceBlueprintsPage />
      </div>

      <Footer />
    </div>
  );
}

function CoverPage() {
  const pages = [
    { num: "01", title: "Cover & File Guide", desc: "Navigation and file structure" },
    { num: "02", title: "Foundations", desc: "Design principles and guidelines" },
    { num: "03", title: "Design Tokens", desc: "Structured design values" },
    { num: "04", title: "Styles System", desc: "Visual rules and patterns" },
    { num: "05", title: "Core Components", desc: "Base component library" },
    { num: "06", title: "Component Variants", desc: "States and variations" },
    { num: "07", title: "Accessibility", desc: "WCAG guidance and testing" },
    { num: "08", title: "Documentation Templates", desc: "Page layouts and patterns" },
    { num: "09", title: "Implementation Guide", desc: "Installation and usage" },
    { num: "10", title: "Governance", desc: "Lifecycle and decisions" },
    { num: "11", title: "Adoption & Onboarding", desc: "Team enablement" },
    { num: "12", title: "Service Blueprints", desc: "Reference implementations" },
  ];

  return (
    <section className="min-h-screen p-16 flex items-center justify-center" style={{
      background: 'linear-gradient(to bottom right, var(--ux4g-color-brand-primary), var(--ux4g-color-brand-primary-dark))',
      color: 'var(--ux4g-color-text-inverse)'
    }}>
      <div className="max-w-6xl w-full">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/10 backdrop-blur-sm rounded-full text-sm mb-6">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--ux4g-color-saffron-500)' }}></span>
            Government of India
          </div>
          
          <h1 className="text-7xl font-bold mb-6 leading-tight">
            UX4G Design System Platform
          </h1>
          
          <p className="text-2xl text-blue-100 mb-8 max-w-3xl">
            MVP Design Layer • Government-Grade Design System • Documentation & Implementation Ready
          </p>
          
          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Check className="text-green-600" size={20} style={{ color: 'var(--ux4g-color-green-600)' }} />
              <span>WCAG 2.1 AA</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="text-green-600" size={20} style={{ color: 'var(--ux4g-color-green-600)' }} />
              <span>React & Angular</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="text-green-600" size={20} style={{ color: 'var(--ux4g-color-green-600)' }} />
              <span>Design Tokens</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="text-green-600" size={20} style={{ color: 'var(--ux4g-color-green-600)' }} />
              <span>Governed</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pages.map((page, index) => (
            <div 
              key={index}
              className="bg-card/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 hover:bg-card/15 transition-colors"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2" style={{ color: 'var(--ux4g-color-saffron-500)' }}>{page.num}</div>
              <div className="font-semibold mb-1">{page.title}</div>
              <div className="text-sm text-blue-100">{page.desc}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-1">150+</div>
              <div className="text-sm text-blue-100">Components</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">200+</div>
              <div className="text-sm text-blue-100">Design Tokens</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">12</div>
              <div className="text-sm text-blue-100">Documentation Pages</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">100%</div>
              <div className="text-sm text-blue-100">Accessible</div>
            </div>
          </div>
        </div>

        <div className="mt-12 p-6 bg-card/5 backdrop-blur-sm rounded-lg border border-white/10">
          <h3 className="font-semibold mb-3">File Structure Guidelines</h3>
          <ul className="space-y-2 text-sm text-blue-100">
            <li>• All components use Auto Layout for responsive behavior</li>
            <li>• Color and text styles follow token naming conventions</li>
            <li>• Components organized by category with clear variants</li>
            <li>• Accessibility annotations included on all interactive elements</li>
            <li>• Documentation templates ready for team use</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function FoundationsPage() {
  const principles = [
    { title: "Accessibility First", desc: "WCAG 2.1 AA compliant by design", icon: Shield },
    { title: "Consistency", desc: "Unified patterns across services", icon: Layers },
    { title: "Clarity", desc: "Clear, direct communication", icon: FileText },
    { title: "Scalability", desc: "Built for national deployment", icon: GitBranch },
  ];

  const colors = [
    { name: "Saffron Primary", value: "#FF9933", usage: "Primary actions, highlights" },
    { name: "Navy Blue", value: "#000080", usage: "Primary brand, headers, CTA" },
    { name: "India Green", value: "#138808", usage: "Success states, confirmation" },
    { name: "White", value: "#FFFFFF", usage: "Backgrounds, cards, contrast" },
    { name: "Gray 50", value: "#F9FAFB", usage: "Secondary backgrounds" },
    { name: "Gray 100", value: "#F3F4F6", usage: "Borders, dividers" },
    { name: "Gray 600", value: "#4B5563", usage: "Secondary text" },
    { name: "Gray 900", value: "#111827", usage: "Primary text, headings" },
  ];

  return (
    <section className="min-h-screen bg-card p-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--ux4g-color-brand-primary)' }}>
              <Palette className="text-white" size={24} />
            </div>
            <div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Page 02</div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">Foundations</h2>
            </div>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Core design principles, color systems, typography, spacing, and visual guidelines 
            that establish consistency across all government digital services.
          </p>
        </div>

        {/* Design Principles */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8">Design Principles</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((principle, index) => (
              <div key={index} className="border-2 border-border rounded-lg p-6">
                <div className="w-10 h-10 rounded flex items-center justify-center mb-4" style={{ backgroundColor: 'var(--ux4g-color-brand-primary)' }}>
                  <principle.icon className="text-white" size={20} />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{principle.title}</h4>
                <p className="text-sm text-muted-foreground">{principle.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Color System */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8">Color System</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {colors.map((color, index) => (
              <div key={index} className="border border-border rounded-lg overflow-hidden">
                <div 
                  className="h-32 flex items-end p-4"
                  style={{ backgroundColor: color.value }}
                >
                  <div className={`px-2 py-1 rounded text-xs font-mono font-semibold ${
                    color.value === "#FFFFFF" || color.value === "#F9FAFB" || color.value === "#F3F4F6"
                      ? "bg-gray-900 text-white" 
                      : "bg-card text-foreground"
                  }`}>
                    {color.value}
                  </div>
                </div>
                <div className="p-4 bg-card">
                  <div className="font-semibold text-sm text-foreground mb-1">{color.name}</div>
                  <div className="text-xs text-muted-foreground">{color.usage}</div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg">
            <div className="flex items-start gap-3">
              <Shield className="text-primary flex-shrink-0 mt-0.5" size={20} />
              <div>
                <div className="font-semibold text-foreground text-sm mb-1">Accessibility Note</div>
                <div className="text-sm text-muted-foreground">
                  All color combinations meet WCAG 2.1 AA contrast ratios (minimum 4.5:1 for normal text, 3:1 for large text).
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Typography Scale */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8">Typography Scale</h3>
          <div className="border border-border rounded-lg divide-y divide-border">
            {[
              { name: "Display Large", size: "48px", weight: "700", line: "56px", usage: "Hero headlines" },
              { name: "Display", size: "36px", weight: "700", line: "44px", usage: "Page titles" },
              { name: "Heading 1", size: "30px", weight: "700", line: "38px", usage: "Section headers" },
              { name: "Heading 2", size: "24px", weight: "600", line: "32px", usage: "Card titles" },
              { name: "Heading 3", size: "20px", weight: "600", line: "28px", usage: "Subsections" },
              { name: "Body Large", size: "18px", weight: "400", line: "28px", usage: "Lead paragraphs" },
              { name: "Body", size: "16px", weight: "400", line: "24px", usage: "Default text" },
              { name: "Body Small", size: "14px", weight: "400", line: "20px", usage: "Secondary text" },
              { name: "Caption", size: "12px", weight: "400", line: "16px", usage: "Labels, captions" },
            ].map((type, index) => (
              <div key={index} className="p-4 grid grid-cols-6 gap-4 items-center hover:bg-background">
                <div className="col-span-2 font-semibold text-foreground">{type.name}</div>
                <div className="text-muted-foreground text-sm">{type.size} / {type.weight}</div>
                <div className="text-muted-foreground text-sm">LH: {type.line}</div>
                <div className="col-span-2 text-muted-foreground text-sm">{type.usage}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Spacing Scale */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8">Spacing Scale</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { token: "spacing-1", value: "4px" },
              { token: "spacing-2", value: "8px" },
              { token: "spacing-3", value: "12px" },
              { token: "spacing-4", value: "16px" },
              { token: "spacing-6", value: "24px" },
              { token: "spacing-8", value: "32px" },
              { token: "spacing-12", value: "48px" },
              { token: "spacing-16", value: "64px" },
              { token: "spacing-20", value: "80px" },
              { token: "spacing-24", value: "96px" },
            ].map((space, index) => (
              <div key={index} className="border border-border rounded-lg p-4">
                <div
                  className="mb-3"
                  style={{
                    backgroundColor: 'var(--ux4g-color-brand-primary)',
                    width: space.value,
                    height: space.value
                  }}
                ></div>
                <div className="font-mono text-xs font-semibold text-foreground">{space.value}</div>
                <div className="text-xs text-muted-foreground">{space.token}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function DesignTokensPage() {
  return (
    <section className="min-h-screen bg-card p-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--ux4g-color-brand-primary)' }}>
              <Code className="text-white" size={24} />
            </div>
            <div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Page 03</div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">Design Tokens</h2>
            </div>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Structured, platform-agnostic design values that create a single source of truth 
            between design and code.
          </p>
        </div>

        {/* Token Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {[
            { category: "Color Tokens", count: 45, desc: "Semantic color values for all use cases" },
            { category: "Typography Tokens", count: 32, desc: "Font families, sizes, weights, line heights" },
            { category: "Spacing Tokens", count: 16, desc: "Consistent spacing scale" },
            { category: "Border Radius", count: 8, desc: "Corner radius values" },
            { category: "Elevation/Shadow", count: 6, desc: "Shadow tokens for depth" },
            { category: "Animation", count: 12, desc: "Duration and easing curves" },
          ].map((cat, index) => (
            <div key={index} className="border-2 border-border rounded-lg p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-1">{cat.category}</h3>
                  <p className="text-sm text-muted-foreground">{cat.desc}</p>
                </div>
                <div className="px-3 py-1 text-white rounded-full text-sm font-semibold" style={{ backgroundColor: 'var(--ux4g-color-brand-primary)' }}>
                  {cat.count}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Token Structure Example */}
        <div className="border-2 border-border rounded-lg p-8 bg-background">
          <h3 className="text-xl font-bold text-foreground mb-6">Token Naming Convention</h3>
          
          <div className="space-y-4">
            <div className="bg-card border border-border rounded-lg p-4">
              <div className="font-mono text-sm text-primary mb-2">color.primary.500</div>
              <div className="text-xs text-muted-foreground mb-3">Main brand color for primary actions</div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded" style={{ backgroundColor: 'var(--ux4g-color-brand-primary)' }}></div>
                <div>
                  <div className="font-semibold text-sm">#000080</div>
                  <div className="text-xs text-muted-foreground">Navy Blue</div>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-4">
              <div className="font-mono text-sm text-[#138808] mb-2">color.success.500</div>
              <div className="text-xs text-muted-foreground mb-3">Success state indicator</div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-700 rounded"></div>
                <div>
                  <div className="font-semibold text-sm">#138808</div>
                  <div className="text-xs text-muted-foreground">India Green</div>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-4">
              <div className="font-mono text-sm text-[#FF9933] mb-2">color.accent.500</div>
              <div className="text-xs text-muted-foreground mb-3">Accent color for highlights</div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#FF9933] rounded"></div>
                <div>
                  <div className="font-semibold text-sm">#FF9933</div>
                  <div className="text-xs text-muted-foreground">Saffron</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Implementation */}
        <div className="mt-8 p-6 text-white rounded-lg" style={{ backgroundColor: 'var(--ux4g-color-brand-primary)' }}>
          <h4 className="font-semibold mb-3">Multi-Platform Export</h4>
          <p className="text-blue-100 text-sm mb-4">
            Tokens are exported to JSON, CSS Custom Properties, SCSS variables, and JavaScript/TypeScript 
            for use across React, Angular, and vanilla implementations.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {["JSON", "CSS", "SCSS", "JS/TS"].map((format, index) => (
              <div key={index} className="px-3 py-2 bg-card/10 rounded text-sm text-center">
                {format}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StylesSystemPage() {
  return (
    <section className="min-h-screen bg-card p-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--ux4g-color-brand-primary)' }}>
              <Layers className="text-white" size={24} />
            </div>
            <div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Page 04</div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">Styles System</h2>
            </div>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Composable visual patterns and reusable styles that form the foundation of the component library.
          </p>
        </div>

        {/* Grid System */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8">12-Column Grid System</h3>
          <div className="border-2 border-border rounded-lg p-8 bg-background">
            <div className="grid grid-cols-12 gap-4 mb-6">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="h-20 rounded flex items-center justify-center text-white text-sm font-semibold" style={{ backgroundColor: 'var(--ux4g-color-brand-primary)' }}>
                  {i + 1}
                </div>
              ))}
            </div>
            
            <div className="space-y-4">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 h-12 bg-blue-100 rounded flex items-center justify-center text-sm text-muted-foreground">
                  12 Columns (Full Width)
                </div>
              </div>
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-6 h-12 bg-blue-100 rounded flex items-center justify-center text-sm text-muted-foreground">
                  6 Columns
                </div>
                <div className="col-span-6 h-12 bg-blue-100 rounded flex items-center justify-center text-sm text-muted-foreground">
                  6 Columns
                </div>
              </div>
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-4 h-12 bg-blue-100 rounded flex items-center justify-center text-sm text-muted-foreground">
                  4 Columns
                </div>
                <div className="col-span-4 h-12 bg-blue-100 rounded flex items-center justify-center text-sm text-muted-foreground">
                  4 Columns
                </div>
                <div className="col-span-4 h-12 bg-blue-100 rounded flex items-center justify-center text-sm text-muted-foreground">
                  4 Columns
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Elevation System */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8">Elevation & Shadows</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { level: "Level 0", shadow: "none", usage: "Flat surfaces" },
              { level: "Level 1", shadow: "0 1px 3px rgba(0,0,0,0.1)", usage: "Cards, containers" },
              { level: "Level 2", shadow: "0 4px 6px rgba(0,0,0,0.1)", usage: "Dropdowns, popovers" },
              { level: "Level 3", shadow: "0 10px 15px rgba(0,0,0,0.1)", usage: "Modals, overlays" },
              { level: "Level 4", shadow: "0 20px 25px rgba(0,0,0,0.15)", usage: "High emphasis" },
            ].map((elev, index) => (
              <div key={index} className="text-center">
                <div 
                  className="w-full h-32 bg-card rounded-lg mb-3 flex items-center justify-center"
                  style={{ boxShadow: elev.shadow }}
                >
                  <div className="text-muted-foreground text-sm font-semibold">{index}</div>
                </div>
                <div className="font-semibold text-sm text-foreground mb-1">{elev.level}</div>
                <div className="text-xs text-muted-foreground">{elev.usage}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Border Radius */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8">Border Radius Scale</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: "None", value: "0px" },
              { name: "Small", value: "4px" },
              { name: "Medium", value: "8px" },
              { name: "Large", value: "12px" },
              { name: "XLarge", value: "16px" },
              { name: "Full", value: "9999px" },
            ].map((radius, index) => (
              <div key={index} className="text-center">
                <div
                  className="w-full h-24 mb-3"
                  style={{
                    backgroundColor: 'var(--ux4g-color-brand-primary)',
                    borderRadius: radius.value
                  }}
                ></div>
                <div className="font-semibold text-sm text-foreground mb-1">{radius.name}</div>
                <div className="text-xs text-muted-foreground font-mono">{radius.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CoreComponentsPage() {
  return (
    <section className="min-h-screen bg-card p-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--ux4g-color-brand-primary)' }}>
              <Layers className="text-white" size={24} />
            </div>
            <div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Page 05</div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">Core Components</h2>
            </div>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Base component library with accessibility built-in, ready for implementation in React and Angular.
          </p>
        </div>

        {/* Component Categories */}
        <div className="space-y-12">
          {/* Buttons */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-6">Buttons</h3>
            <div className="border-2 border-border rounded-lg p-8 bg-background">
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 text-white rounded-lg font-semibold" style={{ backgroundColor: 'var(--ux4g-color-brand-primary)' }}>
                  Primary Button
                </button>
                <button className="px-6 py-3 bg-card text-primary border-2 border-primary rounded-lg font-semibold">
                  Secondary Button
                </button>
                <button className="px-6 py-3 bg-green-700 text-white rounded-lg font-semibold">
                  Success Button
                </button>
                <button className="px-6 py-3 bg-muted text-muted-foreground rounded-lg font-semibold">
                  Disabled Button
                </button>
              </div>
            </div>
          </div>

          {/* Form Inputs */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-6">Form Inputs</h3>
            <div className="border-2 border-border rounded-lg p-8 bg-background space-y-4">
              <div>
                <label className="block text-sm font-semibold text-muted-foreground mb-2">
                  Text Input
                </label>
                <input
                  type="text"
                  placeholder="Enter text here..."
                  className="w-full px-4 py-3 border-2 border-border rounded-lg"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-muted-foreground mb-2">
                  Select Dropdown
                </label>
                <select className="w-full px-4 py-3 border-2 border-border rounded-lg bg-card">
                  <option>Select an option...</option>
                </select>
              </div>

              <div>
                <label className="flex items-center gap-3">
                  <input type="checkbox" className="w-5 h-5 border-2 border-border rounded" />
                  <span className="text-muted-foreground">Checkbox Label</span>
                </label>
              </div>
            </div>
          </div>

          {/* Cards */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-6">Cards</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="border-2 border-border rounded-lg p-6 bg-card">
                <h4 className="font-semibold text-foreground mb-2">Basic Card</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Card component with title and description.
                </p>
                <button className="text-primary text-sm font-semibold">Learn More →</button>
              </div>

              <div className="border-2 border-border rounded-lg overflow-hidden bg-card">
                <div className="h-32 bg-gradient-to-br from-[#FF9933] to-[#138808]"></div>
                <div className="p-6">
                  <h4 className="font-semibold text-foreground mb-2">Image Card</h4>
                  <p className="text-sm text-muted-foreground">Card with image header.</p>
                </div>
              </div>

              <div className="border-2 border-primary rounded-lg p-6 bg-blue-50 dark:bg-blue-900/20">
                <h4 className="font-semibold text-foreground mb-2">Highlighted Card</h4>
                <p className="text-sm text-muted-foreground">Card with emphasized border.</p>
              </div>
            </div>
          </div>

          {/* Alerts */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-6">Alerts</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 bg-green-50 dark:bg-green-950/30 border-2 border-green-200 dark:border-green-800 rounded-lg">
                <Check className="text-[#138808] flex-shrink-0" size={20} />
                <div>
                  <div className="font-semibold text-foreground mb-1">Success</div>
                  <div className="text-sm text-muted-foreground">Your action was completed successfully.</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800 rounded-lg">
                <FileText className="text-primary flex-shrink-0" size={20} />
                <div>
                  <div className="font-semibold text-foreground mb-1">Information</div>
                  <div className="text-sm text-muted-foreground">Here is some important information.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ComponentVariantsPage() {
  return (
    <section className="min-h-screen bg-card p-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--ux4g-color-brand-primary)' }}>
              <GitBranch className="text-white" size={24} />
            </div>
            <div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Page 06</div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">Component Variants & States</h2>
            </div>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl">
            All possible states, sizes, and variants for each component to ensure comprehensive coverage.
          </p>
        </div>

        {/* Button States */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-foreground mb-6">Button States Matrix</h3>
          <div className="border-2 border-border rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-background">
                <tr>
                  <th className="text-left p-4 border-b-2 border-border font-semibold text-foreground">Variant</th>
                  <th className="text-left p-4 border-b-2 border-border font-semibold text-foreground">Default</th>
                  <th className="text-left p-4 border-b-2 border-border font-semibold text-foreground">Hover</th>
                  <th className="text-left p-4 border-b-2 border-border font-semibold text-foreground">Active</th>
                  <th className="text-left p-4 border-b-2 border-border font-semibold text-foreground">Disabled</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="p-4 font-semibold text-muted-foreground">Primary</td>
                  <td className="p-4">
                    <button className="px-4 py-2 text-white rounded-lg text-sm" style={{ backgroundColor: 'var(--ux4g-color-brand-primary)' }}>Button</button>
                  </td>
                  <td className="p-4">
                    <button className="px-4 py-2 bg-[#000060] text-white rounded-lg text-sm">Button</button>
                  </td>
                  <td className="p-4">
                    <button className="px-4 py-2 bg-[#000040] text-white rounded-lg text-sm">Button</button>
                  </td>
                  <td className="p-4">
                    <button className="px-4 py-2 bg-muted text-muted-foreground rounded-lg text-sm">Button</button>
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4 font-semibold text-muted-foreground">Secondary</td>
                  <td className="p-4">
                    <button className="px-4 py-2 bg-card text-primary border-2 border-primary rounded-lg text-sm">Button</button>
                  </td>
                  <td className="p-4">
                    <button className="px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-primary border-2 border-primary rounded-lg text-sm">Button</button>
                  </td>
                  <td className="p-4">
                    <button className="px-4 py-2 bg-blue-100 text-primary border-2 border-primary rounded-lg text-sm">Button</button>
                  </td>
                  <td className="p-4">
                    <button className="px-4 py-2 bg-card text-muted-foreground border-2 border-border rounded-lg text-sm">Button</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Size Variations */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-foreground mb-6">Size Variations</h3>
          <div className="border-2 border-border rounded-lg p-8 bg-background">
            <div className="flex items-center gap-4">
              <button className="px-3 py-1 text-white rounded text-xs" style={{ backgroundColor: 'var(--ux4g-color-brand-primary)' }}>Small</button>
              <button className="px-4 py-2 text-white rounded-lg text-sm" style={{ backgroundColor: 'var(--ux4g-color-brand-primary)' }}>Medium</button>
              <button className="px-6 py-3 bg-transparent text-white rounded-lg">Large</button>
              <button className="px-8 py-4 text-white rounded-lg text-lg" style={{ backgroundColor: 'var(--ux4g-color-brand-primary)' }}>Extra Large</button>
            </div>
          </div>
        </div>

        {/* Input States */}
        <div>
          <h3 className="text-xl font-bold text-foreground mb-6">Input Field States</h3>
          <div className="border-2 border-border rounded-lg p-8 bg-background space-y-4">
            <div>
              <label className="block text-sm font-semibold text-muted-foreground mb-2">Default State</label>
              <input type="text" placeholder="Enter text..." className="w-full px-4 py-3 border-2 border-border rounded-lg" />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-muted-foreground mb-2">Focus State</label>
              <input type="text" defaultValue="Focused input" className="w-full px-4 py-3 border-2 border-primary rounded-lg ring-4 ring-blue-100" readOnly />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-muted-foreground mb-2">Error State</label>
              <input type="text" defaultValue="Invalid input" className="w-full px-4 py-3 border-2 border-red-500 rounded-lg" readOnly />
              <p className="text-sm text-red-600 mt-1">This field is required</p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-muted-foreground mb-2">Success State</label>
              <input type="text" defaultValue="Valid input" className="w-full px-4 py-3 border-2 border-[#138808] rounded-lg" readOnly />
              <p className="text-sm text-[#138808] mt-1">Input validated successfully</p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-muted-foreground mb-2">Disabled State</label>
              <input type="text" defaultValue="Disabled input" disabled className="w-full px-4 py-3 border-2 border-border rounded-lg bg-muted text-muted-foreground" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AccessibilityPage() {
  return (
    <section className="min-h-screen bg-card p-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--ux4g-color-brand-primary)' }}>
              <Shield className="text-white" size={24} />
            </div>
            <div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Page 07</div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">Accessibility Guidance</h2>
            </div>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl">
            WCAG 2.1 AA compliance standards, testing protocols, and implementation guidance for inclusive design.
          </p>
        </div>

        {/* WCAG Compliance */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-foreground mb-6">WCAG 2.1 AA Requirements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { principle: "Perceivable", desc: "Information must be presentable in ways users can perceive", checks: ["Color contrast 4.5:1 minimum", "Text alternatives for images", "Captions for media"] },
              { principle: "Operable", desc: "Interface components must be operable by all users", checks: ["Keyboard accessible", "Sufficient time limits", "Clear focus indicators"] },
              { principle: "Understandable", desc: "Information and UI must be understandable", checks: ["Readable content", "Predictable navigation", "Input assistance"] },
              { principle: "Robust", desc: "Content must work with assistive technologies", checks: ["Valid markup", "ARIA labels", "Screen reader support"] },
            ].map((item, index) => (
              <div key={index} className="border-2 border-border rounded-lg p-6">
                <h4 className="font-bold text-lg text-foreground mb-2">{item.principle}</h4>
                <p className="text-sm text-muted-foreground mb-4">{item.desc}</p>
                <div className="space-y-2">
                  {item.checks.map((check, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <Check className="text-[#138808] flex-shrink-0" size={16} />
                      <span className="text-muted-foreground">{check}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Color Contrast */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-foreground mb-6">Color Contrast Ratios</h3>
          <div className="border-2 border-border rounded-lg overflow-hidden">
            <div className="bg-background p-4 border-b-2 border-border">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-semibold text-foreground text-sm">
                <div>Foreground</div>
                <div>Background</div>
                <div>Ratio</div>
                <div>Status</div>
              </div>
            </div>
            {[
              { fg: "#111827", bg: "#FFFFFF", ratio: "16.1:1", pass: true },
              { fg: "#000080", bg: "#FFFFFF", ratio: "8.6:1", pass: true },
              { fg: "#FFFFFF", bg: "#000080", ratio: "8.6:1", pass: true },
              { fg: "#138808", bg: "#FFFFFF", ratio: "4.8:1", pass: true },
              { fg: "#FF9933", bg: "#FFFFFF", ratio: "3.2:1", pass: false },
              { fg: "#FFFFFF", bg: "#FF9933", ratio: "3.2:1", pass: false },
            ].map((contrast, index) => (
              <div key={index} className="p-4 border-b border-border grid grid-cols-2 lg:grid-cols-4 gap-4 items-center text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded" style={{ backgroundColor: contrast.fg }}></div>
                  <span className="font-mono text-xs">{contrast.fg}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded border border-border" style={{ backgroundColor: contrast.bg }}></div>
                  <span className="font-mono text-xs">{contrast.bg}</span>
                </div>
                <div className="font-semibold">{contrast.ratio}</div>
                <div>
                  {contrast.pass ? (
                    <span className="px-3 py-1 bg-green-100 text-[#138808] rounded-full text-xs font-semibold">PASS</span>
                  ) : (
                    <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-xs font-semibold">FAIL</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Keyboard Navigation */}
        <div>
          <h3 className="text-xl font-bold text-foreground mb-6">Keyboard Navigation</h3>
          <div className="border-2 border-border rounded-lg p-8 bg-background">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { key: "Tab", action: "Move focus forward" },
                { key: "Shift + Tab", action: "Move focus backward" },
                { key: "Enter / Space", action: "Activate button or link" },
                { key: "Arrow Keys", action: "Navigate within components" },
                { key: "Esc", action: "Close modal or dropdown" },
                { key: "Home / End", action: "Jump to start or end" },
              ].map((nav, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="px-4 py-2 bg-card border-2 border-border rounded font-mono text-sm font-semibold text-foreground min-w-[140px]">
                    {nav.key}
                  </div>
                  <div className="text-sm text-muted-foreground">{nav.action}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DocumentationTemplatesPage() {
  return (
    <section className="min-h-screen bg-card p-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--ux4g-color-brand-primary)' }}>
              <FileText className="text-white" size={24} />
            </div>
            <div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Page 08</div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">Documentation Page Templates</h2>
            </div>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Standardized page layouts for component documentation, patterns, and implementation guides.
          </p>
        </div>

        {/* Component Doc Template */}
        <div className="border-2 border-border rounded-lg overflow-hidden mb-12">
          <div className="bg-background p-6 border-b-2 border-border">
            <h3 className="text-lg font-bold text-foreground">Component Documentation Template</h3>
          </div>
          
          <div className="p-8 space-y-8">
            <div>
              <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Section 1</div>
              <h4 className="font-semibold text-foreground mb-3">Overview</h4>
              <p className="text-sm text-muted-foreground">Brief description of component purpose and use cases.</p>
            </div>

            <div>
              <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Section 2</div>
              <h4 className="font-semibold text-foreground mb-3">When to Use</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Primary use case example</li>
                <li>• Secondary use case example</li>
              </ul>
            </div>

            <div>
              <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Section 3</div>
              <h4 className="font-semibold text-foreground mb-3">When Not to Use</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Avoid in this scenario</li>
                <li>• Use alternative component instead</li>
              </ul>
            </div>

            <div>
              <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Section 4</div>
              <h4 className="font-semibold text-foreground mb-3">Visual Examples</h4>
              <div className="p-6 bg-background border border-border rounded-lg">
                <div className="text-xs text-muted-foreground">[Component preview area]</div>
              </div>
            </div>

            <div>
              <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Section 5</div>
              <h4 className="font-semibold text-foreground mb-3">Accessibility</h4>
              <p className="text-sm text-muted-foreground">Accessibility requirements and implementation notes.</p>
            </div>

            <div>
              <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Section 6</div>
              <h4 className="font-semibold text-foreground mb-3">Code Example</h4>
              <div className="p-4 bg-gray-900 text-green-400 font-mono text-xs rounded-lg">
                &lt;Button variant="primary"&gt;Click me&lt;/Button&gt;
              </div>
            </div>
          </div>
        </div>

        {/* Pattern Doc Template */}
        <div className="border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-background p-6 border-b-2 border-border">
            <h3 className="text-lg font-bold text-foreground">Pattern Documentation Template</h3>
          </div>
          
          <div className="p-8 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="border border-border rounded-lg p-4">
                <div className="text-xs text-muted-foreground mb-2">Problem</div>
                <div className="text-sm text-muted-foreground">What problem does this pattern solve?</div>
              </div>
              <div className="border border-border rounded-lg p-4">
                <div className="text-xs text-muted-foreground mb-2">Solution</div>
                <div className="text-sm text-muted-foreground">How does the pattern address it?</div>
              </div>
              <div className="border border-border rounded-lg p-4">
                <div className="text-xs text-muted-foreground mb-2">Usage</div>
                <div className="text-sm text-muted-foreground">When should teams use this?</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImplementationPage() {
  return (
    <section className="min-h-screen bg-card p-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--ux4g-color-brand-primary)' }}>
              <Download className="text-white" size={24} />
            </div>
            <div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Page 09</div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">Installation & Implementation</h2>
            </div>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Step-by-step guidance for installing packages, configuring projects, and implementing components.
          </p>
        </div>

        {/* Quick Start */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-foreground mb-6">Quick Start Guide</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { step: "01", title: "Install Package", desc: "npm install @ux4g/react" },
              { step: "02", title: "Import Styles", desc: "import '@ux4g/react/styles.css'" },
              { step: "03", title: "Use Components", desc: "import { Button } from '@ux4g/react'" },
            ].map((item, index) => (
              <div key={index} className="border-2 border-border rounded-lg p-6">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-3">{item.step}</div>
                <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                <code className="text-xs bg-gray-900 text-green-400 px-2 py-1 rounded font-mono">
                  {item.desc}
                </code>
              </div>
            ))}
          </div>
        </div>

        {/* Framework Support */}
        <div>
          <h3 className="text-xl font-bold text-foreground mb-6">Framework Support</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-2 border-border rounded-lg p-4 sm:p-6 lg:p-8">
              <h4 className="text-lg font-bold text-foreground mb-4">React Implementation</h4>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-background rounded">
                  <div className="text-muted-foreground mb-1">Install</div>
                  <code className="text-xs bg-gray-900 text-green-400 px-2 py-1 rounded font-mono">
                    npm install @ux4g/react
                  </code>
                </div>
                <div className="p-3 bg-background rounded">
                  <div className="text-muted-foreground mb-1">Import</div>
                  <code className="text-xs bg-gray-900 text-green-400 px-2 py-1 rounded font-mono">
                    import &#123; Button &#125; from '@ux4g/react'
                  </code>
                </div>
                <div className="p-3 bg-background rounded">
                  <div className="text-muted-foreground mb-1">Use</div>
                  <code className="text-xs bg-gray-900 text-green-400 px-2 py-1 rounded font-mono">
                    &lt;Button variant="primary"&gt;Submit&lt;/Button&gt;
                  </code>
                </div>
              </div>
            </div>

            <div className="border-2 border-border rounded-lg p-4 sm:p-6 lg:p-8">
              <h4 className="text-lg font-bold text-foreground mb-4">Angular Implementation</h4>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-background rounded">
                  <div className="text-muted-foreground mb-1">Install</div>
                  <code className="text-xs bg-gray-900 text-green-400 px-2 py-1 rounded font-mono">
                    npm install @ux4g/angular
                  </code>
                </div>
                <div className="p-3 bg-background rounded">
                  <div className="text-muted-foreground mb-1">Import Module</div>
                  <code className="text-xs bg-gray-900 text-green-400 px-2 py-1 rounded font-mono">
                    import &#123; UX4GModule &#125; from '@ux4g/angular'
                  </code>
                </div>
                <div className="p-3 bg-background rounded">
                  <div className="text-muted-foreground mb-1">Use</div>
                  <code className="text-xs bg-gray-900 text-green-400 px-2 py-1 rounded font-mono">
                    &lt;ux4g-button variant="primary"&gt;Submit&lt;/ux4g-button&gt;
                  </code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GovernancePage() {
  return (
    <section className="min-h-screen bg-card p-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--ux4g-color-brand-primary)' }}>
              <GitBranch className="text-white" size={24} />
            </div>
            <div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Page 10</div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">Governance & Lifecycle</h2>
            </div>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Decision-making frameworks, release processes, and lifecycle management for platform sustainability.
          </p>
        </div>

        {/* Governance Model */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-foreground mb-6">Governance Model</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { role: "Core Team", resp: "Platform development and maintenance", count: "8 members" },
              { role: "Working Group", resp: "Cross-ministry governance decisions", count: "15 ministries" },
              { role: "Contributors", resp: "Component proposals and improvements", count: "50+ teams" },
            ].map((item, index) => (
              <div key={index} className="border-2 border-border rounded-lg p-6">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-bold text-foreground">{item.role}</h4>
                  <span className="px-2 py-1 text-white rounded text-xs font-semibold" style={{ backgroundColor: 'var(--ux4g-color-brand-primary)' }}>
                    {item.count}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{item.resp}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Release Process */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-foreground mb-6">Release Process</h3>
          <div className="border-2 border-border rounded-lg p-4 sm:p-6 lg:p-8">
            <div className="flex items-center justify-between">
              {[
                { phase: "Proposal", desc: "Submit request" },
                { phase: "Review", desc: "Technical review" },
                { phase: "Approval", desc: "Governance decision" },
                { phase: "Development", desc: "Build & test" },
                { phase: "Release", desc: "Deploy to production" },
              ].map((phase, index) => (
                <div key={index} className="flex items-center">
                  <div className="text-center">
                    <div className="w-12 h-12 text-white rounded-full flex items-center justify-center font-bold mb-2" style={{ backgroundColor: 'var(--ux4g-color-brand-primary)' }}>
                      {index + 1}
                    </div>
                    <div className="font-semibold text-sm text-foreground mb-1">{phase.phase}</div>
                    <div className="text-xs text-muted-foreground">{phase.desc}</div>
                  </div>
                  {index < 4 && (
                    <div className="w-16 h-0.5 bg-muted mx-4"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Lifecycle States */}
        <div>
          <h3 className="text-xl font-bold text-foreground mb-6">Component Lifecycle States</h3>
          <div className="space-y-4">
            {[
              { state: "Alpha", color: "bg-yellow-100 text-yellow-700 border-yellow-300", desc: "Early development, subject to breaking changes" },
              { state: "Beta", color: "bg-blue-100 text-blue-700 border-blue-300", desc: "Feature complete, undergoing testing" },
              { state: "Stable", color: "bg-green-100 text-green-700 border-green-300", desc: "Production ready, fully supported" },
              { state: "Deprecated", color: "bg-red-100 text-red-700 border-red-300", desc: "Scheduled for removal, migration required" },
            ].map((item, index) => (
              <div key={index} className="border-2 border-border rounded-lg p-4 flex items-center gap-4">
                <div className={`px-4 py-2 rounded-lg border-2 font-semibold text-sm ${item.color}`}>
                  {item.state}
                </div>
                <div className="text-sm text-muted-foreground">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AdoptionPage() {
  return (
    <section className="min-h-screen bg-card p-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--ux4g-color-brand-primary)' }}>
              <Users className="text-white" size={24} />
            </div>
            <div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Page 11</div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">Adoption & Onboarding</h2>
            </div>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Resources and guidance for teams, departments, and vendors to successfully adopt the design system.
          </p>
        </div>

        {/* Onboarding Paths */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-foreground mb-6">Onboarding Paths</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { role: "Designers", steps: ["Access Figma library", "Review foundations", "Explore components", "Start designing"] },
              { role: "Developers", steps: ["Install package", "Configure project", "Import components", "Build features"] },
              { role: "Teams", steps: ["Attend workshop", "Review governance", "Plan migration", "Deploy services"] },
            ].map((path, index) => (
              <div key={index} className="border-2 border-border rounded-lg p-6">
                <h4 className="font-bold text-lg text-foreground mb-4">{path.role}</h4>
                <div className="space-y-2">
                  {path.steps.map((step, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-6 h-6 text-white rounded-full flex items-center justify-center text-xs font-semibold" style={{ backgroundColor: 'var(--ux4g-color-brand-primary)' }}>
                        {idx + 1}
                      </div>
                      <div className="text-sm text-muted-foreground">{step}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Support Channels */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-foreground mb-6">Support Channels</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { channel: "Documentation Portal", desc: "Comprehensive guides and API references", availability: "24/7" },
              { channel: "Technical Support", desc: "Direct support for departments and teams", availability: "Business hours" },
              { channel: "Community Forum", desc: "Discussion and Q&A with other users", availability: "24/7" },
              { channel: "Training Workshops", desc: "Scheduled training sessions", availability: "Monthly" },
            ].map((support, index) => (
              <div key={index} className="border-2 border-border rounded-lg p-6">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-foreground">{support.channel}</h4>
                  <span className="px-2 py-1 bg-green-100 text-green-700 dark:text-green-400 rounded text-xs font-semibold">
                    {support.availability}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{support.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Success Metrics */}
        <div>
          <h3 className="text-xl font-bold text-foreground mb-6">Adoption Success Metrics</h3>
          <div className="border-2 border-border rounded-lg p-4 sm:p-6 lg:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-2">15</div>
                <div className="text-sm text-muted-foreground">Ministries Adopting</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Active Teams</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-2">100+</div>
                <div className="text-sm text-muted-foreground">Services Using System</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-2">95%</div>
                <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceBlueprintsPage() {
  return (
    <section className="min-h-screen bg-card p-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--ux4g-color-brand-primary)' }}>
              <BookOpen className="text-white" size={24} />
            </div>
            <div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Page 12</div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">Reference Service Blueprints</h2>
            </div>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl">
            End-to-end reference implementations showing how to assemble components into complete government services.
          </p>
        </div>

        {/* Service Examples */}
        <div className="space-y-12">
          {/* Citizen Application Flow */}
          <div className="border-2 border-border rounded-lg overflow-hidden">
            <div className="bg-background p-6 border-b-2 border-border">
              <h3 className="text-lg font-bold text-foreground">Blueprint 1: Citizen Application Service</h3>
              <p className="text-sm text-muted-foreground mt-1">Complete flow for submitting government applications</p>
            </div>
            
            <div className="p-8">
              <div className="flex items-center gap-4 overflow-x-auto pb-4">
                {[
                  { step: "Login", screen: "Authentication" },
                  { step: "Form", screen: "Multi-step application" },
                  { step: "Documents", screen: "File upload" },
                  { step: "Review", screen: "Preview & edit" },
                  { step: "Payment", screen: "Fee payment" },
                  { step: "Confirmation", screen: "Receipt & tracking" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center flex-shrink-0">
                    <div className="w-48 h-32 border-2 border-border rounded-lg bg-background flex flex-col items-center justify-center">
                      <div className="w-10 h-10 text-white rounded-full flex items-center justify-center font-bold mb-2" style={{ backgroundColor: 'var(--ux4g-color-brand-primary)' }}>
                        {index + 1}
                      </div>
                      <div className="font-semibold text-sm text-foreground">{item.step}</div>
                      <div className="text-xs text-muted-foreground">{item.screen}</div>
                    </div>
                    {index < 5 && (
                      <div className="w-8 h-0.5 bg-muted mx-2 flex-shrink-0"></div>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg">
                <div className="font-semibold text-sm text-foreground mb-2">Components Used</div>
                <div className="flex flex-wrap gap-2">
                  {["Button", "Input", "Select", "File Upload", "Progress Stepper", "Card", "Alert"].map((comp, idx) => (
                    <span key={idx} className="px-2 py-1 bg-card border border-blue-200 dark:border-blue-800 rounded text-xs text-muted-foreground">
                      {comp}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Certificate Issuance */}
          <div className="border-2 border-border rounded-lg overflow-hidden">
            <div className="bg-background p-6 border-b-2 border-border">
              <h3 className="text-lg font-bold text-foreground">Blueprint 2: Certificate Issuance Service</h3>
              <p className="text-sm text-muted-foreground mt-1">Digital certificate generation and download</p>
            </div>
            
            <div className="p-8">
              <div className="flex items-center gap-4 overflow-x-auto pb-4">
                {[
                  { step: "Verify", screen: "Identity verification" },
                  { step: "Check", screen: "Eligibility check" },
                  { step: "Generate", screen: "Certificate creation" },
                  { step: "Sign", screen: "Digital signature" },
                  { step: "Download", screen: "Download & print" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center flex-shrink-0">
                    <div className="w-48 h-32 border-2 border-border rounded-lg bg-background flex flex-col items-center justify-center">
                      <div className="w-10 h-10 bg-green-700 text-white rounded-full flex items-center justify-center font-bold mb-2">
                        {index + 1}
                      </div>
                      <div className="font-semibold text-sm text-foreground">{item.step}</div>
                      <div className="text-xs text-muted-foreground">{item.screen}</div>
                    </div>
                    {index < 4 && (
                      <div className="w-8 h-0.5 bg-muted mx-2 flex-shrink-0"></div>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg">
                <div className="font-semibold text-sm text-foreground mb-2">Components Used</div>
                <div className="flex flex-wrap gap-2">
                  {["Button", "Badge", "Modal", "Progress Bar", "Download Link", "Print Layout"].map((comp, idx) => (
                    <span key={idx} className="px-2 py-1 bg-card border border-green-200 dark:border-green-800 rounded text-xs text-muted-foreground">
                      {comp}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Status Tracking */}
          <div className="border-2 border-border rounded-lg overflow-hidden">
            <div className="bg-background p-6 border-b-2 border-border">
              <h3 className="text-lg font-bold text-foreground">Blueprint 3: Application Status Tracking</h3>
              <p className="text-sm text-muted-foreground mt-1">Real-time status updates for submitted applications</p>
            </div>
            
            <div className="p-8">
              <div className="flex items-center gap-4 overflow-x-auto pb-4">
                {[
                  { step: "Enter ID", screen: "Reference number input" },
                  { step: "View Status", screen: "Timeline display" },
                  { step: "Download", screen: "Documents & updates" },
                  { step: "Feedback", screen: "Rate service" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center flex-shrink-0">
                    <div className="w-48 h-32 border-2 border-border rounded-lg bg-background flex flex-col items-center justify-center">
                      <div className="w-10 h-10 bg-[#FF9933] text-white rounded-full flex items-center justify-center font-bold mb-2">
                        {index + 1}
                      </div>
                      <div className="font-semibold text-sm text-foreground">{item.step}</div>
                      <div className="text-xs text-muted-foreground">{item.screen}</div>
                    </div>
                    {index < 3 && (
                      <div className="w-8 h-0.5 bg-muted mx-2 flex-shrink-0"></div>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-800 rounded-lg">
                <div className="font-semibold text-sm text-foreground mb-2">Components Used</div>
                <div className="flex flex-wrap gap-2">
                  {["Input", "Search", "Timeline", "Badge", "Card", "Link", "Rating"].map((comp, idx) => (
                    <span key={idx} className="px-2 py-1 bg-card border border-orange-200 dark:border-orange-800 rounded text-xs text-muted-foreground">
                      {comp}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Implementation Notes */}
        <div className="mt-12 p-8 text-white rounded-lg" style={{ backgroundColor: 'var(--ux4g-color-brand-primary)' }}>
          <h4 className="text-xl font-bold mb-4">Implementation Guidance</h4>
          <ul className="space-y-2 text-blue-100">
            <li>• Each blueprint includes complete screen flows, component usage, and accessibility notes</li>
            <li>• Code examples available for both React and Angular implementations</li>
            <li>• All blueprints follow WCAG 2.1 AA standards and government design principles</li>
            <li>• Templates can be adapted for specific ministry or department needs</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
