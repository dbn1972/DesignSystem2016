import { Link } from "react-router";
import { ArrowRight, Building2, CheckCircle, Grid, Layers, Palette, Ruler, Shield, Sparkles, Type } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Foundations() {
  const { i18n } = useTranslation();
  const language = i18n.resolvedLanguage === "hi" ? "hi" : "en";
  const copy = FOUNDATIONS_COPY[language];

  const colorPalette = [
    { name: copy.colors.saffron.name, hex: "#FF9933", desc: copy.colors.saffron.desc },
    { name: copy.colors.navy.name, hex: "#000080", desc: copy.colors.navy.desc },
    { name: copy.colors.green.name, hex: "#138808", desc: copy.colors.green.desc },
    { name: copy.colors.white.name, hex: "#FFFFFF", desc: copy.colors.white.desc },
    { name: copy.colors.gray50.name, hex: "#F9FAFB", desc: copy.colors.gray50.desc },
    { name: copy.colors.gray900.name, hex: "#111827", desc: copy.colors.gray900.desc }
  ];

  const spacing = [
    { value: "4px", token: "spacing-1", usage: copy.spacing.tight },
    { value: "8px", token: "spacing-2", usage: copy.spacing.small },
    { value: "16px", token: "spacing-4", usage: copy.spacing.medium },
    { value: "24px", token: "spacing-6", usage: copy.spacing.large },
    { value: "32px", token: "spacing-8", usage: copy.spacing.section },
    { value: "48px", token: "spacing-12", usage: copy.spacing.major }
  ];

  const typography = [
    { name: copy.typographyRows.displayLarge.name, size: "48px", weight: "700", usage: copy.typographyRows.displayLarge.usage },
    { name: copy.typographyRows.display.name, size: "36px", weight: "700", usage: copy.typographyRows.display.usage },
    { name: copy.typographyRows.heading1.name, size: "30px", weight: "700", usage: copy.typographyRows.heading1.usage },
    { name: copy.typographyRows.heading2.name, size: "24px", weight: "600", usage: copy.typographyRows.heading2.usage },
    { name: copy.typographyRows.heading3.name, size: "20px", weight: "600", usage: copy.typographyRows.heading3.usage },
    { name: copy.typographyRows.bodyLarge.name, size: "18px", weight: "400", usage: copy.typographyRows.bodyLarge.usage },
    { name: copy.typographyRows.body.name, size: "16px", weight: "400", usage: copy.typographyRows.body.usage },
    { name: copy.typographyRows.bodySmall.name, size: "14px", weight: "400", usage: copy.typographyRows.bodySmall.usage },
    { name: copy.typographyRows.caption.name, size: "12px", weight: "400", usage: copy.typographyRows.caption.usage }
  ];

  const principles = [
    {
      icon: Sparkles,
      title: copy.principles.accessibility.title,
      description: copy.principles.accessibility.description
    },
    {
      icon: Grid,
      title: copy.principles.consistency.title,
      description: copy.principles.consistency.description
    },
    {
      icon: Layers,
      title: copy.principles.scalability.title,
      description: copy.principles.scalability.description
    },
    {
      icon: Ruler,
      title: copy.principles.clarity.title,
      description: copy.principles.clarity.description
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground dark:bg-gray-900">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-gray-900 dark:to-blue-950/30">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#FF9933] via-white to-[#138808]" />
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-14">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(360px,0.92fr)] items-start">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-card/85 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-700 shadow-sm dark:border-blue-800 dark:bg-blue-950/40 dark:text-blue-300">
                <Sparkles size={14} />
                {copy.hero.eyebrow}
              </div>

              <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground dark:text-gray-50">
                {copy.hero.title}
              </h1>

              <p className="mt-5 max-w-2xl text-lg sm:text-xl leading-relaxed text-muted-foreground dark:text-muted-foreground">
                {copy.hero.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/components"
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-[#000066] dark:bg-blue-600 dark:hover:bg-blue-700"
                >
                  <Layers size={16} />
                  {copy.hero.viewComponents}
                </Link>
                <Link
                  to="/accessibility"
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary dark:bg-gray-800 dark:text-gray-100 dark:text-gray-200 dark:hover:border-blue-500"
                >
                  <Shield size={16} />
                  {copy.hero.viewAccessibility}
                </Link>
                <Link
                  to="/content-system"
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary dark:bg-gray-800 dark:text-gray-100 dark:text-gray-200 dark:hover:border-blue-500"
                >
                  <Type size={16} />
                  {copy.hero.viewContent}
                </Link>
              </div>

              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-3 sm:grid-cols-4">
                <StatTile value="4" label={copy.hero.stats.corePrinciples} />
                <StatTile value="6" label={copy.hero.stats.paletteAnchors} />
                <StatTile value="9" label={copy.hero.stats.typeStyles} />
                <StatTile value="6" label={copy.hero.stats.spacingTokens} />
              </div>
            </div>

            <div className="lg:justify-self-end">
              <div className="rounded-[32px] border border-border bg-card/95 p-7 shadow-xl backdrop-blur-sm dark:bg-gray-800/95">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                      {copy.summary.eyebrow}
                    </p>
                    <h2 className="mt-2 text-2xl font-bold text-foreground dark:text-gray-50">
                      {copy.summary.title}
                    </h2>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-sm dark:bg-blue-600">
                    <Building2 size={26} />
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  <SummaryRow title={copy.summary.colorTitle} description={copy.summary.colorDescription} />
                  <SummaryRow title={copy.summary.typographyTitle} description={copy.summary.typographyDescription} />
                  <SummaryRow title={copy.summary.spacingTitle} description={copy.summary.spacingDescription} />
                </div>

                <div className="mt-5 rounded-2xl border border-border bg-gradient-to-br from-blue-50 to-emerald-50 p-4 dark:from-blue-950/30 dark:to-emerald-950/20">
                  <div className="flex items-center gap-2 text-sm font-semibold text-foreground dark:text-gray-100 dark:text-gray-200">
                    <CheckCircle size={16} className="text-emerald-600 dark:text-emerald-400" />
                    {copy.summary.foundationFirst}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground dark:text-muted-foreground">
                    {copy.summary.foundationFirstDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Principles */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[minmax(280px,0.78fr)_minmax(0,1.22fr)] items-start">
            <div className="space-y-4 lg:sticky lg:top-24">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                {copy.designPrinciples.eyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-bold text-foreground dark:text-gray-50">
                {copy.designPrinciples.title}
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground dark:text-muted-foreground">
                {copy.designPrinciples.description}
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {principles.map((principle, index) => (
                <div
                  key={index}
                  className="rounded-[28px] border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg dark:bg-gray-800"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-blue-950/40 dark:text-blue-300">
                      <principle.icon size={22} />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                        {copy.designPrinciples.principleLabel} {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-1 text-xl font-bold text-foreground dark:text-gray-50">
                        {principle.title}
                      </h3>
                    </div>
                  </div>
                  <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground dark:text-muted-foreground">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Color System */}
      <section className="border-y border-border bg-background py-16 lg:py-20 dark:bg-gray-800">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[minmax(280px,0.82fr)_minmax(0,1.18fr)] items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                {copy.colorSystem.eyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-bold text-foreground dark:text-gray-50">
                {copy.colorSystem.title}
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground dark:text-muted-foreground">
                {copy.colorSystem.description}
              </p>
              <div className="mt-6 rounded-[24px] border border-border bg-card p-5 shadow-sm dark:bg-gray-900">
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  {copy.colorSystem.accessibilityNote}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground dark:text-muted-foreground">
                  {copy.colorSystem.accessibilityDescription}
                </p>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {colorPalette.map((color) => (
                <div
                  key={color.name}
                  className="overflow-hidden rounded-[28px] border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg dark:bg-gray-900"
                >
                  <div className="h-32 flex items-center justify-center" style={{ backgroundColor: color.hex }}>
                    <span
                      className={`font-mono text-sm font-semibold px-3 py-1 rounded ${
                        color.hex === "#FFFFFF" ? "bg-gray-900 text-white" : "bg-card text-foreground"
                      }`}
                    >
                      {color.hex}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-foreground dark:text-gray-50 mb-1">{color.name}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground dark:text-muted-foreground">{color.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Typography */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[minmax(280px,0.82fr)_minmax(0,1.18fr)] items-start">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-blue-950/40 dark:text-blue-300">
                  <Type size={22} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                    {copy.typography.eyebrow}
                  </p>
                  <h2 className="mt-1 text-3xl font-bold text-foreground dark:text-gray-50">
                    {copy.typography.title}
                  </h2>
                </div>
              </div>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground dark:text-muted-foreground">
                {copy.typography.description}
              </p>
              <div className="mt-6 rounded-[24px] border border-border bg-card p-5 shadow-sm dark:bg-gray-800">
                <h3 className="font-semibold text-foreground dark:text-gray-50 mb-2">{copy.typography.fontFamily}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground dark:text-muted-foreground">
                  {copy.typography.fontFamilyDescription}: -apple-system, BlinkMacSystemFont,
                  "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
                </p>
              </div>
            </div>

            <div className="rounded-[28px] border border-border bg-card shadow-sm dark:bg-gray-800 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-background border-b border-border dark:bg-gray-900 dark:border-gray-700">
                    <tr>
                      <th className="text-left px-6 py-4 font-semibold text-foreground dark:text-gray-50">{copy.typography.columns.style}</th>
                      <th className="text-left px-6 py-4 font-semibold text-foreground dark:text-gray-50">{copy.typography.columns.size}</th>
                      <th className="text-left px-6 py-4 font-semibold text-foreground dark:text-gray-50">{copy.typography.columns.weight}</th>
                      <th className="text-left px-6 py-4 font-semibold text-foreground dark:text-gray-50">{copy.typography.columns.usage}</th>
                      <th className="text-left px-6 py-4 font-semibold text-foreground dark:text-gray-50">{copy.typography.columns.example}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border dark:divide-gray-700">
                    {typography.map((type, index) => (
                      <tr key={index} className="transition-colors hover:bg-background dark:hover:bg-gray-700">
                        <td className="px-6 py-4 font-medium text-foreground dark:text-gray-100 dark:text-gray-200">{type.name}</td>
                        <td className="px-6 py-4 text-muted-foreground dark:text-muted-foreground">{type.size}</td>
                        <td className="px-6 py-4 text-muted-foreground dark:text-muted-foreground">{type.weight}</td>
                        <td className="px-6 py-4 text-muted-foreground dark:text-muted-foreground">{type.usage}</td>
                        <td className="px-6 py-4">
                          <span style={{ fontSize: type.size, fontWeight: type.weight }} className="text-foreground dark:text-gray-100 dark:text-gray-200">
                            Aa
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spacing */}
      <section className="border-y border-border bg-background py-16 lg:py-20 dark:bg-gray-800">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[minmax(280px,0.82fr)_minmax(0,1.18fr)] items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                {copy.spacingSection.eyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-bold text-foreground dark:text-gray-50">
                {copy.spacingSection.title}
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground dark:text-muted-foreground">
                {copy.spacingSection.description}
              </p>
              <div className="mt-6 rounded-[24px] border border-border bg-card p-5 shadow-sm dark:bg-gray-900">
                <h3 className="font-semibold text-foreground dark:text-gray-50 mb-2">{copy.spacingSection.implementation}</h3>
                <p className="text-sm text-muted-foreground dark:text-muted-foreground mb-3">
                  {copy.spacingSection.implementationDescription}
                </p>
                <code className="block rounded-lg border border-border bg-background px-4 py-3 text-sm font-mono text-foreground dark:bg-gray-800 dark:text-gray-100 dark:text-gray-200">
                  className="p-spacing-4 m-spacing-2"
                </code>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {spacing.map((space) => (
                <div key={space.token} className="rounded-[28px] border border-border bg-card p-5 shadow-sm dark:bg-gray-900">
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className="bg-primary rounded"
                      style={{ width: space.value, height: space.value }}
                    />
                    <div>
                      <div className="font-mono text-sm font-semibold text-foreground dark:text-gray-50">
                        {space.value}
                      </div>
                      <div className="text-xs text-muted-foreground dark:text-muted-foreground">{space.token}</div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground dark:text-muted-foreground">{space.usage}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Grid System */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[minmax(280px,0.82fr)_minmax(0,1.18fr)] items-start">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-blue-950/40 dark:text-blue-300">
                  <Grid size={22} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                    {copy.gridSection.eyebrow}
                  </p>
                  <h2 className="mt-1 text-3xl font-bold text-foreground dark:text-gray-50">
                    {copy.gridSection.title}
                  </h2>
                </div>
              </div>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground dark:text-muted-foreground">
                {copy.gridSection.description}
              </p>
            </div>

            <div className="space-y-5">
              <div className="rounded-[28px] border border-border bg-card p-6 shadow-sm dark:bg-gray-800">
                <div className="grid grid-cols-12 gap-4">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div
                      key={i}
                      className="flex h-16 items-center justify-center rounded-xl bg-primary text-sm font-semibold text-primary-foreground"
                    >
                      {i + 1}
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-3">
                <LayoutCard title={copy.gridSection.mobileTitle} range="320px - 767px" description={copy.gridSection.mobileDescription} />
                <LayoutCard title={copy.gridSection.tabletTitle} range="768px - 1023px" description={copy.gridSection.tabletDescription} />
                <LayoutCard title={copy.gridSection.desktopTitle} range="1024px+" description={copy.gridSection.desktopDescription} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const FOUNDATIONS_COPY = {
  en: {
    hero: {
      eyebrow: "Foundational design language",
      title: "Foundations",
      description:
        "The principles, tokens, and baseline decisions that keep UX4G consistent, accessible, and scalable across every government digital service.",
      viewComponents: "View components",
      viewAccessibility: "View accessibility guidance",
      viewContent: "View content system",
      stats: {
        corePrinciples: "core principles",
        paletteAnchors: "palette anchors",
        typeStyles: "type styles",
        spacingTokens: "spacing tokens",
      },
    },
    summary: {
      eyebrow: "Foundation summary",
      title: "The base layer for every UX4G experience",
      colorTitle: "Color",
      colorDescription: "Saffron, navy, green, and neutral surfaces tuned for contrast.",
      typographyTitle: "Typography",
      typographyDescription: "Clear readable hierarchy across desktop, tablet, and mobile.",
      spacingTitle: "Spacing",
      spacingDescription: "Simple scale that creates rhythm and balance throughout the UI.",
      foundationFirst: "Foundation-first system",
      foundationFirstDescription:
        "Use this page to understand the shared design rules before moving into components, patterns, and service flows.",
    },
    designPrinciples: {
      eyebrow: "Design principles",
      title: "Four principles that guide the system",
      description:
        "The foundations page is the rulebook for every surface in UX4G, from tokens and layout to hierarchy and accessibility.",
      principleLabel: "Principle",
    },
    principles: {
      accessibility: {
        title: "Accessibility First",
        description:
          "Every design decision prioritizes inclusive access for all citizens, ensuring WCAG 2.1 AA compliance across all components and patterns.",
      },
      consistency: {
        title: "Consistency",
        description:
          "Unified visual language, interaction patterns, and service conventions across all government digital touchpoints.",
      },
      scalability: {
        title: "Scalability",
        description:
          "Built to support national-scale services across multiple departments, languages, devices, and user contexts.",
      },
      clarity: {
        title: "Clarity",
        description:
          "Clear, direct communication that reduces cognitive load and helps citizens complete their tasks efficiently.",
      },
    },
    colorSystem: {
      eyebrow: "Color system",
      title: "A balanced palette with civic clarity",
      description:
        "Inspired by the Indian national flag and grounded in accessible neutral surfaces, this palette keeps the interface calm, recognisable, and easy to scan.",
      accessibilityNote: "Accessibility note",
      accessibilityDescription:
        "All color combinations are intended to meet WCAG 2.1 AA contrast requirements. Use semantic tokens and avoid hardcoding one-off values in product screens.",
    },
    colors: {
      saffron: { name: "Saffron", desc: "Primary action, highlights" },
      navy: { name: "Navy Blue", desc: "Primary brand, headers" },
      green: { name: "India Green", desc: "Success, confirmation" },
      white: { name: "White", desc: "Backgrounds, contrast" },
      gray50: { name: "Gray 50", desc: "Secondary backgrounds" },
      gray900: { name: "Gray 900", desc: "Primary text" },
    },
    typography: {
      eyebrow: "Typography",
      title: "A readable hierarchy for government services",
      description:
        "The type scale balances clarity, density, and performance so long-form content remains readable across devices and languages.",
      fontFamily: "Font family",
      fontFamilyDescription: "System font stack for optimal performance",
      columns: {
        style: "Style",
        size: "Size",
        weight: "Weight",
        usage: "Usage",
        example: "Example",
      },
    },
    typographyRows: {
      displayLarge: { name: "Display Large", usage: "Hero headlines" },
      display: { name: "Display", usage: "Page titles" },
      heading1: { name: "Heading 1", usage: "Section headers" },
      heading2: { name: "Heading 2", usage: "Card titles" },
      heading3: { name: "Heading 3", usage: "Subsections" },
      bodyLarge: { name: "Body Large", usage: "Lead text" },
      body: { name: "Body", usage: "Default text" },
      bodySmall: { name: "Body Small", usage: "Secondary text" },
      caption: { name: "Caption", usage: "Labels, captions" },
    },
    spacingSection: {
      eyebrow: "Spacing system",
      title: "Consistent spacing builds calm, readable interfaces",
      description:
        "The spacing scale creates rhythm and predictability across layouts, forms, and content-heavy experiences.",
      implementation: "Implementation",
      implementationDescription: "Use spacing tokens in your code for consistency:",
    },
    spacing: {
      tight: "Tight spacing",
      small: "Small spacing",
      medium: "Medium spacing",
      large: "Large spacing",
      section: "Section spacing",
      major: "Major sections",
    },
    gridSection: {
      eyebrow: "Grid & layout",
      title: "Responsive layout rules for every screen size",
      description:
        "The grid system adapts from stacked mobile layouts to dense desktop views while keeping the same design language intact.",
      mobileTitle: "Mobile",
      mobileDescription: "Stack content vertically",
      tabletTitle: "Tablet",
      tabletDescription: "Two-column layouts",
      desktopTitle: "Desktop",
      desktopDescription: "Full grid layouts",
    },
  },
  hi: {
    hero: {
      eyebrow: "आधारभूत डिज़ाइन भाषा",
      title: "आधार",
      description:
        "वे सिद्धांत, टोकन और मूल निर्णय जो UX4G को हर सरकारी डिजिटल सेवा में सुसंगत, सुलभ और स्केलेबल बनाए रखते हैं।",
      viewComponents: "घटक देखें",
      viewAccessibility: "सुगम्यता मार्गदर्शन देखें",
      viewContent: "सामग्री प्रणाली देखें",
      stats: {
        corePrinciples: "मुख्य सिद्धांत",
        paletteAnchors: "पैलेट आधार",
        typeStyles: "टाइप शैलियाँ",
        spacingTokens: "स्पेसिंग टोकन",
      },
    },
    summary: {
      eyebrow: "आधार सारांश",
      title: "हर UX4G अनुभव की आधार परत",
      colorTitle: "रंग",
      colorDescription: "कंट्रास्ट के लिए संतुलित केसरिया, नेवी, हरा और न्यूट्रल सतहें।",
      typographyTitle: "टाइपोग्राफी",
      typographyDescription: "डेस्कटॉप, टैबलेट और मोबाइल के लिए स्पष्ट और पठनीय श्रेणीक्रम।",
      spacingTitle: "स्पेसिंग",
      spacingDescription: "सरल स्केल जो पूरे UI में लय और संतुलन बनाता है।",
      foundationFirst: "फाउंडेशन-फर्स्ट सिस्टम",
      foundationFirstDescription:
        "घटकों, पैटर्नों और सेवा प्रवाहों में जाने से पहले साझा डिज़ाइन नियम समझने के लिए इस पेज का उपयोग करें।",
    },
    designPrinciples: {
      eyebrow: "डिज़ाइन सिद्धांत",
      title: "चार सिद्धांत जो सिस्टम को दिशा देते हैं",
      description:
        "फाउंडेशन पेज UX4G की हर सतह के लिए नियम-पुस्तिका है, टोकन और लेआउट से लेकर श्रेणीक्रम और सुगम्यता तक।",
      principleLabel: "सिद्धांत",
    },
    principles: {
      accessibility: {
        title: "सुगम्यता पहले",
        description:
          "हर डिज़ाइन निर्णय सभी नागरिकों के लिए समावेशी पहुंच को प्राथमिकता देता है और सभी घटकों व पैटर्नों में WCAG 2.1 AA अनुपालन सुनिश्चित करता है।",
      },
      consistency: {
        title: "सुसंगतता",
        description:
          "सभी सरकारी डिजिटल टचपॉइंट्स पर एकीकृत दृश्य भाषा, इंटरैक्शन पैटर्न और सेवा मानक।",
      },
      scalability: {
        title: "स्केलेबिलिटी",
        description:
          "अनेक विभागों, भाषाओं, डिवाइसों और उपयोगकर्ता संदर्भों में राष्ट्रीय स्तर की सेवाओं का समर्थन करने के लिए निर्मित।",
      },
      clarity: {
        title: "स्पष्टता",
        description:
          "सीधी और स्पष्ट संचार शैली जो संज्ञानात्मक भार कम करती है और नागरिकों को काम कुशलता से पूरा करने में मदद करती है।",
      },
    },
    colorSystem: {
      eyebrow: "रंग प्रणाली",
      title: "नागरिक उपयोग के लिए संतुलित और स्पष्ट पैलेट",
      description:
        "भारतीय तिरंगे से प्रेरित और सुलभ न्यूट्रल सतहों पर आधारित यह पैलेट इंटरफ़ेस को शांत, पहचाने जाने योग्य और स्कैन करने में आसान बनाता है।",
      accessibilityNote: "सुगम्यता नोट",
      accessibilityDescription:
        "सभी रंग संयोजन WCAG 2.1 AA कंट्रास्ट आवश्यकताओं को पूरा करने के उद्देश्य से बनाए गए हैं। प्रोडक्ट स्क्रीन में एकल हार्डकोडेड मानों के बजाय सेमांटिक टोकन का उपयोग करें।",
    },
    colors: {
      saffron: { name: "केसरिया", desc: "मुख्य क्रिया, हाइलाइट्स" },
      navy: { name: "नेवी ब्लू", desc: "मुख्य ब्रांड, हेडर" },
      green: { name: "इंडिया ग्रीन", desc: "सफलता, पुष्टि" },
      white: { name: "सफेद", desc: "पृष्ठभूमि, कंट्रास्ट" },
      gray50: { name: "ग्रे 50", desc: "द्वितीयक पृष्ठभूमियाँ" },
      gray900: { name: "ग्रे 900", desc: "मुख्य पाठ" },
    },
    typography: {
      eyebrow: "टाइपोग्राफी",
      title: "सरकारी सेवाओं के लिए पठनीय श्रेणीक्रम",
      description:
        "टाइप स्केल स्पष्टता, घनत्व और प्रदर्शन को संतुलित करता है ताकि लंबा कंटेंट डिवाइसों और भाषाओं में पठनीय रहे।",
      fontFamily: "फ़ॉन्ट परिवार",
      fontFamilyDescription: "उत्तम प्रदर्शन के लिए सिस्टम फ़ॉन्ट स्टैक",
      columns: {
        style: "शैली",
        size: "आकार",
        weight: "वजन",
        usage: "उपयोग",
        example: "उदाहरण",
      },
    },
    typographyRows: {
      displayLarge: { name: "डिस्प्ले लार्ज", usage: "हीरो हेडलाइन" },
      display: { name: "डिस्प्ले", usage: "पेज शीर्षक" },
      heading1: { name: "हेडिंग 1", usage: "सेक्शन शीर्षक" },
      heading2: { name: "हेडिंग 2", usage: "कार्ड शीर्षक" },
      heading3: { name: "हेडिंग 3", usage: "उप-खंड" },
      bodyLarge: { name: "बॉडी लार्ज", usage: "लीड टेक्स्ट" },
      body: { name: "बॉडी", usage: "डिफ़ॉल्ट टेक्स्ट" },
      bodySmall: { name: "बॉडी स्मॉल", usage: "द्वितीयक टेक्स्ट" },
      caption: { name: "कैप्शन", usage: "लेबल, कैप्शन" },
    },
    spacingSection: {
      eyebrow: "स्पेसिंग प्रणाली",
      title: "सुसंगत स्पेसिंग शांत और पठनीय इंटरफ़ेस बनाती है",
      description:
        "स्पेसिंग स्केल लेआउट, फॉर्म और कंटेंट-भरे अनुभवों में लय और पूर्वानुमेयता बनाता है।",
      implementation: "इम्प्लीमेंटेशन",
      implementationDescription: "सुसंगतता के लिए अपने कोड में स्पेसिंग टोकन का उपयोग करें:",
    },
    spacing: {
      tight: "सघन स्पेसिंग",
      small: "छोटी स्पेसिंग",
      medium: "मध्यम स्पेसिंग",
      large: "बड़ी स्पेसिंग",
      section: "सेक्शन स्पेसिंग",
      major: "मुख्य सेक्शन",
    },
    gridSection: {
      eyebrow: "ग्रिड और लेआउट",
      title: "हर स्क्रीन आकार के लिए रिस्पॉन्सिव लेआउट नियम",
      description:
        "ग्रिड सिस्टम मोबाइल के स्टैक्ड लेआउट से डेस्कटॉप के घने दृश्य तक अनुकूलित होता है, जबकि वही डिज़ाइन भाषा बरकरार रहती है।",
      mobileTitle: "मोबाइल",
      mobileDescription: "कंटेंट को लंबवत स्टैक करें",
      tabletTitle: "टैबलेट",
      tabletDescription: "दो-स्तंभीय लेआउट",
      desktopTitle: "डेस्कटॉप",
      desktopDescription: "पूर्ण ग्रिड लेआउट",
    },
  },
} as const;

function StatTile({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card px-4 py-4 shadow-sm dark:bg-gray-800">
      <div className="text-2xl font-bold text-foreground dark:text-gray-50">{value}</div>
      <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </div>
    </div>
  );
}

function SummaryRow({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-2xl border border-border bg-background p-4 dark:bg-gray-900">
      <p className="font-semibold text-foreground dark:text-gray-50">{title}</p>
      <p className="mt-1 text-sm leading-relaxed text-muted-foreground dark:text-muted-foreground">
        {description}
      </p>
    </div>
  );
}

function LayoutCard({
  title,
  range,
  description,
}: {
  title: string;
  range: string;
  description: string;
}) {
  return (
    <div className="rounded-[28px] border border-border bg-card p-6 shadow-sm dark:bg-gray-900">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
        {title}
      </p>
      <p className="mt-2 text-lg font-bold text-foreground dark:text-gray-50">{range}</p>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground dark:text-muted-foreground">
        {description}
      </p>
    </div>
  );
}
