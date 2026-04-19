import { Link } from "react-router";
import {
  ArrowRight,
  Building2,
  CheckCircle,
  Grid,
  Layers,
  Monitor,
  Palette,
  Ruler,
  Shield,
  Smartphone,
  Sparkles,
  Tablet,
  Type,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import PageContainer from "@/app/components/PageContainer";
import SectionShell from "@/app/components/SectionShell";

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
    { name: copy.colors.gray900.name, hex: "#111827", desc: copy.colors.gray900.desc },
  ];

  const spacing = [
    { value: "4px", token: "spacing-1", usage: copy.spacing.tight },
    { value: "8px", token: "spacing-2", usage: copy.spacing.small },
    { value: "16px", token: "spacing-4", usage: copy.spacing.medium },
    { value: "24px", token: "spacing-6", usage: copy.spacing.large },
    { value: "32px", token: "spacing-8", usage: copy.spacing.section },
    { value: "48px", token: "spacing-12", usage: copy.spacing.major },
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
    { name: copy.typographyRows.caption.name, size: "12px", weight: "400", usage: copy.typographyRows.caption.usage },
  ];

  const principles = [
    {
      icon: Sparkles,
      title: copy.principles.accessibility.title,
      description: copy.principles.accessibility.description,
    },
    {
      icon: Grid,
      title: copy.principles.consistency.title,
      description: copy.principles.consistency.description,
    },
    {
      icon: Layers,
      title: copy.principles.scalability.title,
      description: copy.principles.scalability.description,
    },
    {
      icon: Ruler,
      title: copy.principles.clarity.title,
      description: copy.principles.clarity.description,
    },
  ];

  const foundationTopics = [
    { icon: Palette, label: copy.summary.colorTitle, description: copy.summary.colorDescription },
    { icon: Type, label: copy.summary.typographyTitle, description: copy.summary.typographyDescription },
    { icon: Grid, label: copy.summary.spacingTitle, description: copy.summary.spacingDescription },
    { icon: Shield, label: copy.principles.accessibility.title, description: "AA. Component, content, and structure compliance." },
  ];

  const swatchColors = [
    { name: copy.colors.saffron.name, hex: "#FF9933", label: "Saffron" },
    { name: copy.colors.navy.name, hex: "#000080", label: "Navy Blue" },
    { name: copy.colors.green.name, hex: "#138808", label: "Indra Green" },
    { name: copy.colors.white.name, hex: "#FFFFFF", label: "White" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground dark:bg-gray-900">
      {/* ─── HERO SECTION ─── */}
      <section
        className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/60 dark:from-slate-950 dark:via-gray-900 dark:to-blue-950/30"
        aria-labelledby="foundations-title"
      >
        {/* Tricolor accent */}
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#FF9933] via-white to-[#138808]" />

        <PageContainer className="py-16 sm:py-20 lg:py-28">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-muted-foreground">
              <li>
                <Link to="/" className="hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="select-none">&gt;</li>
              <li className="font-medium text-foreground dark:text-gray-100" aria-current="page">
                {copy.hero.title}
              </li>
            </ol>
          </nav>

          <div className="grid gap-12 lg:grid-cols-[1fr_minmax(340px,420px)] items-start">
            {/* Left column */}
            <div>
              <h1
                id="foundations-title"
                className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground dark:text-gray-50"
              >
                {copy.hero.title}
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                {copy.hero.description}
              </p>

              {/* CTA buttons */}
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/components"
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-[#000066] dark:bg-blue-600 dark:hover:bg-blue-700"
                >
                  {copy.hero.viewComponents}
                  <ArrowRight size={16} />
                </Link>
                <Link
                  to="/accessibility"
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-border bg-transparent px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-card dark:text-gray-200 dark:hover:bg-gray-800"
                >
                  {copy.hero.viewAccessibility}
                </Link>
              </div>

              {/* Stats row — 3 tiles */}
              <div className="mt-12 grid grid-cols-3 gap-4" role="list" aria-label="Foundation statistics">
                <StatTile value="4" label={copy.hero.stats.corePrinciples} />
                <StatTile value="6" label={copy.hero.stats.paletteAnchors} />
                <StatTile value="5" label={copy.hero.stats.spacingTokens} />
              </div>
            </div>

            {/* Right column — Two stacked cards */}
            <aside className="lg:justify-self-end w-full space-y-4" aria-label="Foundation overview">
              {/* Top card — "Building the base for UX4G" with geometric illustration */}
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <div className="relative bg-gradient-to-br from-[#0a3d6b] to-[#1a5c99] dark:from-[#0a2d4b] dark:to-[#143d66] px-6 pt-6 pb-5">
                  {/* Geometric illustration — overlapping rotated squares */}
                  <div className="absolute top-3 right-4" aria-hidden="true">
                    <svg width="120" height="100" viewBox="0 0 120 100" fill="none">
                      <rect x="30" y="5" width="45" height="45" rx="6" transform="rotate(15 52 27)" fill="#FF9933" opacity="0.85" />
                      <rect x="50" y="15" width="45" height="45" rx="6" transform="rotate(-10 72 37)" fill="#138808" opacity="0.75" />
                      <rect x="40" y="30" width="40" height="40" rx="6" transform="rotate(5 60 50)" fill="#FFFFFF" opacity="0.6" />
                      <rect x="55" y="40" width="35" height="35" rx="6" transform="rotate(-5 72 57)" fill="#000080" opacity="0.5" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold text-white pr-28 leading-snug">
                    Building the base<br />for UX4G
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-blue-100/80 pr-20">
                    {copy.summary.foundationFirstDescription}
                  </p>
                </div>
              </div>

              {/* Bottom card — Foundation topics list */}
              <div className="rounded-2xl bg-card shadow-lg dark:bg-gray-800 p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-4">
                  What this page covers
                </p>
                <ul className="space-y-3" role="list">
                  {foundationTopics.map((topic) => (
                    <li
                      key={topic.label}
                      className="flex items-start gap-3"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary dark:bg-blue-950/40 dark:text-blue-400">
                        <topic.icon size={16} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground dark:text-gray-50">{topic.label}</p>
                        <p className="text-xs text-muted-foreground leading-relaxed">{topic.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </PageContainer>
      </section>

      {/* ─── FOUR PRINCIPLES SECTION ─── */}
      <section className="py-20 lg:py-28" aria-labelledby="principles-title">
        <PageContainer>
          {/* Section header with badges */}
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] items-start mb-14">
            <div className="max-w-2xl">
              <h2
                id="principles-title"
                className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground dark:text-gray-50"
              >
                {copy.designPrinciples.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {copy.designPrinciples.description}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300">
                <CheckCircle size={14} />
                AA Compliant
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700 dark:bg-blue-950/40 dark:text-blue-300">
                WCAG 2.1
              </span>
              <span className="inline-flex items-center rounded-full bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-700 dark:bg-amber-950/40 dark:text-amber-300">
                Semantic palette
              </span>
            </div>
          </div>

          {/* Color swatches — 4 cards with rounded color block and dot indicator */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10" role="list" aria-label="Core color swatches">
            {swatchColors.map((color) => (
              <div
                key={color.hex}
                className="rounded-2xl overflow-hidden bg-card shadow-sm dark:bg-gray-800"
                role="listitem"
              >
                <div className="p-3">
                  <div
                    className="h-14 w-full rounded-xl"
                    style={{ backgroundColor: color.hex, border: color.hex === '#FFFFFF' ? '1px solid var(--border)' : undefined }}
                    aria-label={`${color.name} color swatch`}
                  />
                </div>
                <div className="flex items-center gap-2 px-4 pb-4">
                  <span
                    className="inline-block h-3 w-3 rounded-full shrink-0"
                    style={{ backgroundColor: color.hex, border: color.hex === '#FFFFFF' ? '1px solid var(--border)' : undefined }}
                    aria-hidden="true"
                  />
                  <p className="font-bold text-sm text-foreground dark:text-gray-50">{color.name}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Principle cards — clean text-only layout */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((principle, index) => (
              <div
                key={index}
                className="group rounded-2xl bg-muted/30 p-6 transition-all hover:bg-muted/50 dark:bg-gray-800/50 dark:hover:bg-gray-800/80"
              >
                <h3 className="text-lg font-bold text-foreground dark:text-gray-50 mb-3">
                  {principle.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* ─── COLOR SECTION ─── */}
      <section
        className="bg-muted/20 py-20 lg:py-28 dark:bg-gray-800/40"
        aria-labelledby="color-title"
      >
        <PageContainer>
          <div className="grid gap-12 lg:grid-cols-[minmax(280px,0.45fr)_minmax(0,0.55fr)] items-start">
            {/* Left — description */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground mb-2">
                {copy.colorSystem.eyebrow}
              </p>
              <h2
                id="color-title"
                className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground dark:text-gray-50"
              >
                {copy.colorSystem.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {copy.colorSystem.description}
              </p>

              {/* Accessibility badges */}
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300">
                  <Shield size={13} />
                  Accessibility
                </span>
                <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700 dark:bg-blue-950/40 dark:text-blue-300">
                  6.4 Compliant
                </span>
                <span className="inline-flex items-center rounded-full bg-violet-50 px-3 py-1.5 text-xs font-semibold text-violet-700 dark:bg-violet-950/40 dark:text-violet-300">
                  WCAG 2.1 AA
                </span>
              </div>

              {/* Semantic tokens note */}
              <div className="mt-8 rounded-2xl bg-card p-5 shadow-sm dark:bg-gray-800">
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-2">
                  {copy.colorSystem.accessibilityNote}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {copy.colorSystem.accessibilityDescription}
                </p>
              </div>
            </div>

            {/* Right — Color table */}
            <div className="rounded-2xl bg-card shadow-sm dark:bg-gray-800 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border/60 dark:border-gray-700">
                      <th className="text-left px-5 py-4 font-semibold text-foreground dark:text-gray-50">
                        {copy.typography.columns.style}
                      </th>
                      <th className="text-left px-5 py-4 font-semibold text-foreground dark:text-gray-50">
                        Hex
                      </th>
                      <th className="text-left px-5 py-4 font-semibold text-foreground dark:text-gray-50">
                        {copy.typography.columns.usage}
                      </th>
                      <th className="text-left px-5 py-4 font-semibold text-foreground dark:text-gray-50">
                        Swatch
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/40 dark:divide-gray-700/60">
                    {colorPalette.map((color) => (
                      <tr key={color.hex} className="transition-colors hover:bg-muted/30 dark:hover:bg-gray-700/40">
                        <td className="px-5 py-3.5 font-medium text-foreground dark:text-gray-100">
                          {color.name}
                        </td>
                        <td className="px-5 py-3.5 font-mono text-xs text-muted-foreground">
                          {color.hex}
                        </td>
                        <td className="px-5 py-3.5 text-muted-foreground">
                          {color.desc}
                        </td>
                        <td className="px-5 py-3.5">
                          <div
                            className="h-6 w-10 rounded border border-border/50"
                            style={{ backgroundColor: color.hex }}
                            aria-label={`${color.name} color preview`}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* ─── TYPOGRAPHY SECTION ─── */}
      <section className="py-20 lg:py-28" aria-labelledby="typography-title">
        <PageContainer>
          <div className="grid gap-12 lg:grid-cols-[minmax(280px,0.4fr)_minmax(0,0.6fr)] items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary dark:bg-blue-950/40 dark:text-blue-300">
                  <Type size={20} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                    {copy.typography.eyebrow}
                  </p>
                  <h2
                    id="typography-title"
                    className="mt-0.5 text-3xl font-bold text-foreground dark:text-gray-50"
                  >
                    {copy.typography.title}
                  </h2>
                </div>
              </div>
              <p className="text-base leading-relaxed text-muted-foreground">
                {copy.typography.description}
              </p>
              <div className="mt-6 rounded-2xl bg-muted/30 p-5 dark:bg-gray-800/60">
                <h3 className="font-semibold text-foreground dark:text-gray-50 mb-2">
                  {copy.typography.fontFamily}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {copy.typography.fontFamilyDescription}: -apple-system, BlinkMacSystemFont,
                  &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, sans-serif
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-card shadow-sm dark:bg-gray-800 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border/60 dark:border-gray-700">
                      <th className="text-left px-5 py-4 font-semibold text-foreground dark:text-gray-50">
                        {copy.typography.columns.style}
                      </th>
                      <th className="text-left px-5 py-4 font-semibold text-foreground dark:text-gray-50">
                        {copy.typography.columns.size}
                      </th>
                      <th className="text-left px-5 py-4 font-semibold text-foreground dark:text-gray-50">
                        {copy.typography.columns.weight}
                      </th>
                      <th className="text-left px-5 py-4 font-semibold text-foreground dark:text-gray-50">
                        {copy.typography.columns.usage}
                      </th>
                      <th className="text-left px-5 py-4 font-semibold text-foreground dark:text-gray-50">
                        {copy.typography.columns.example}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/40 dark:divide-gray-700/60">
                    {typography.map((type, index) => (
                      <tr key={index} className="transition-colors hover:bg-muted/30 dark:hover:bg-gray-700/40">
                        <td className="px-5 py-3.5 font-medium text-foreground dark:text-gray-100">
                          {type.name}
                        </td>
                        <td className="px-5 py-3.5 font-mono text-xs text-muted-foreground">
                          {type.size}
                        </td>
                        <td className="px-5 py-3.5 text-muted-foreground">{type.weight}</td>
                        <td className="px-5 py-3.5 text-muted-foreground">{type.usage}</td>
                        <td className="px-5 py-3.5">
                          <span
                            style={{ fontSize: type.size, fontWeight: type.weight }}
                            className="text-foreground dark:text-gray-100"
                          >
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
        </PageContainer>
      </section>

      {/* ─── SPACING & GRID SECTION ─── */}
      <section
        className="bg-muted/20 py-20 lg:py-28 dark:bg-gray-800/40"
        aria-labelledby="spacing-title"
      >
        <PageContainer>
          <div className="grid gap-12 lg:grid-cols-[minmax(280px,0.45fr)_minmax(0,0.55fr)] items-start">
            {/* Left — description */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground mb-2">
                {copy.spacingSection.eyebrow}
              </p>
              <h2
                id="spacing-title"
                className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground dark:text-gray-50"
              >
                {copy.spacingSection.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {copy.spacingSection.description}
              </p>

              {/* Implementation note */}
              <div className="mt-8 rounded-2xl bg-card p-5 shadow-sm dark:bg-gray-800">
                <h3 className="font-semibold text-foreground dark:text-gray-50 mb-2">
                  {copy.spacingSection.implementation}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {copy.spacingSection.implementationDescription}
                </p>
                <code className="block rounded-lg bg-muted/50 px-4 py-3 text-sm font-mono text-foreground dark:bg-gray-900 dark:text-gray-200">
                  className=&quot;p-spacing-4 m-spacing-2&quot;
                </code>
              </div>
            </div>

            {/* Right — Responsive breakpoint cards */}
            <div className="space-y-6">
              {/* Breakpoint cards */}
              <div className="grid gap-4 sm:grid-cols-3">
                <LayoutCard
                  icon={<Smartphone size={20} />}
                  title={copy.gridSection.mobileTitle}
                  range="320px – 767px"
                  columns={4}
                  description={copy.gridSection.mobileDescription}
                />
                <LayoutCard
                  icon={<Tablet size={20} />}
                  title={copy.gridSection.tabletTitle}
                  range="768px – 1023px"
                  columns={8}
                  description={copy.gridSection.tabletDescription}
                />
                <LayoutCard
                  icon={<Monitor size={20} />}
                  title={copy.gridSection.desktopTitle}
                  range="1024px+"
                  columns={12}
                  description={copy.gridSection.desktopDescription}
                />
              </div>

              {/* Spacing tokens grid */}
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {spacing.map((space) => (
                  <div
                    key={space.token}
                    className="flex items-center gap-4 rounded-xl bg-card p-4 shadow-sm dark:bg-gray-800"
                  >
                    <div
                      className="shrink-0 rounded bg-primary dark:bg-blue-500"
                      style={{ width: space.value, height: space.value }}
                      aria-hidden="true"
                    />
                    <div className="min-w-0">
                      <p className="font-mono text-sm font-semibold text-foreground dark:text-gray-50">
                        {space.value}
                      </p>
                      <p className="text-xs text-muted-foreground truncate">{space.usage}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </PageContainer>
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
    <div className="rounded-2xl bg-card/80 px-5 py-4 backdrop-blur-sm dark:bg-gray-800/80" role="listitem">
      <div className="text-3xl font-bold text-foreground dark:text-gray-50">{value}</div>
      <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </div>
    </div>
  );
}

function SummaryRow({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-2xl bg-muted/30 p-4 dark:bg-gray-700/40">
      <p className="font-semibold text-foreground dark:text-gray-50">{title}</p>
      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  );
}

function LayoutCard({
  icon,
  title,
  range,
  columns,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  range: string;
  columns: number;
  description: string;
}) {
  return (
    <div className="rounded-2xl bg-card p-5 shadow-sm dark:bg-gray-800">
      <div className="flex items-center gap-2 text-primary dark:text-blue-400 mb-3">
        {icon}
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          {title}
        </p>
      </div>
      <p className="text-lg font-bold text-foreground dark:text-gray-50">{range}</p>
      <p className="mt-1 text-xs font-medium text-muted-foreground">{columns} columns</p>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  );
}
