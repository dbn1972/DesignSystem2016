import { Link } from "react-router";
import { ArrowRight, Building2, CheckCircle, Grid, Layers, Palette, Ruler, Shield, Sparkles, Type } from "lucide-react";

export default function Foundations() {
  const colorPalette = [
    { name: "Saffron", hex: "#FF9933", desc: "Primary action, highlights" },
    { name: "Navy Blue", hex: "#000080", desc: "Primary brand, headers" },
    { name: "India Green", hex: "#138808", desc: "Success, confirmation" },
    { name: "White", hex: "#FFFFFF", desc: "Backgrounds, contrast" },
    { name: "Gray 50", hex: "#F9FAFB", desc: "Secondary backgrounds" },
    { name: "Gray 900", hex: "#111827", desc: "Primary text" }
  ];

  const spacing = [
    { value: "4px", token: "spacing-1", usage: "Tight spacing" },
    { value: "8px", token: "spacing-2", usage: "Small spacing" },
    { value: "16px", token: "spacing-4", usage: "Medium spacing" },
    { value: "24px", token: "spacing-6", usage: "Large spacing" },
    { value: "32px", token: "spacing-8", usage: "Section spacing" },
    { value: "48px", token: "spacing-12", usage: "Major sections" }
  ];

  const typography = [
    { name: "Display Large", size: "48px", weight: "700", usage: "Hero headlines" },
    { name: "Display", size: "36px", weight: "700", usage: "Page titles" },
    { name: "Heading 1", size: "30px", weight: "700", usage: "Section headers" },
    { name: "Heading 2", size: "24px", weight: "600", usage: "Card titles" },
    { name: "Heading 3", size: "20px", weight: "600", usage: "Subsections" },
    { name: "Body Large", size: "18px", weight: "400", usage: "Lead text" },
    { name: "Body", size: "16px", weight: "400", usage: "Default text" },
    { name: "Body Small", size: "14px", weight: "400", usage: "Secondary text" },
    { name: "Caption", size: "12px", weight: "400", usage: "Labels, captions" }
  ];

  const principles = [
    {
      icon: Sparkles,
      title: "Accessibility First",
      description: "Every design decision prioritizes inclusive access for all citizens, ensuring WCAG 2.1 AA compliance across all components and patterns."
    },
    {
      icon: Grid,
      title: "Consistency",
      description: "Unified visual language, interaction patterns, and service conventions across all government digital touchpoints."
    },
    {
      icon: Layers,
      title: "Scalability",
      description: "Built to support national-scale services across multiple departments, languages, devices, and user contexts."
    },
    {
      icon: Ruler,
      title: "Clarity",
      description: "Clear, direct communication that reduces cognitive load and helps citizens complete their tasks efficiently."
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
                Foundational design language
              </div>

              <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground dark:text-gray-50">
                Foundations
              </h1>

              <p className="mt-5 max-w-2xl text-lg sm:text-xl leading-relaxed text-muted-foreground dark:text-muted-foreground">
                The principles, tokens, and baseline decisions that keep UX4G consistent,
                accessible, and scalable across every government digital service.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/components"
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-[#000066] dark:bg-blue-600 dark:hover:bg-blue-700"
                >
                  <Layers size={16} />
                  View components
                </Link>
                <Link
                  to="/accessibility"
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary dark:bg-gray-800 dark:text-gray-100 dark:hover:border-blue-500"
                >
                  <Shield size={16} />
                  View accessibility guidance
                </Link>
                <Link
                  to="/content-system"
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary dark:bg-gray-800 dark:text-gray-100 dark:hover:border-blue-500"
                >
                  <Type size={16} />
                  View content system
                </Link>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
                <StatTile value="4" label="core principles" />
                <StatTile value="6" label="palette anchors" />
                <StatTile value="9" label="type styles" />
                <StatTile value="6" label="spacing tokens" />
              </div>
            </div>

            <div className="lg:justify-self-end">
              <div className="rounded-[32px] border border-border bg-card/95 p-7 shadow-xl backdrop-blur-sm dark:bg-gray-800/95">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                      Foundation summary
                    </p>
                    <h2 className="mt-2 text-2xl font-bold text-foreground dark:text-gray-50">
                      The base layer for every UX4G experience
                    </h2>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-sm dark:bg-blue-600">
                    <Building2 size={26} />
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  <SummaryRow title="Color" description="Saffron, navy, green, and neutral surfaces tuned for contrast." />
                  <SummaryRow title="Typography" description="Clear readable hierarchy across desktop, tablet, and mobile." />
                  <SummaryRow title="Spacing" description="Simple scale that creates rhythm and balance throughout the UI." />
                </div>

                <div className="mt-5 rounded-2xl border border-border bg-gradient-to-br from-blue-50 to-emerald-50 p-4 dark:from-blue-950/30 dark:to-emerald-950/20">
                  <div className="flex items-center gap-2 text-sm font-semibold text-foreground dark:text-gray-100">
                    <CheckCircle size={16} className="text-emerald-600 dark:text-emerald-400" />
                    Foundation-first system
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground dark:text-muted-foreground">
                    Use this page to understand the shared design rules before moving into
                    components, patterns, and service flows.
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
            <aside className="space-y-4 lg:sticky lg:top-24">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Design principles
              </p>
              <h2 className="mt-3 text-3xl font-bold text-foreground dark:text-gray-50">
                Four principles that guide the system
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground dark:text-muted-foreground">
                The foundations page is the rulebook for every surface in UX4G, from
                tokens and layout to hierarchy and accessibility.
              </p>
            </aside>

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
                        Principle {String(index + 1).padStart(2, "0")}
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
            <aside>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Color system
              </p>
              <h2 className="mt-3 text-3xl font-bold text-foreground dark:text-gray-50">
                A balanced palette with civic clarity
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground dark:text-muted-foreground">
                Inspired by the Indian national flag and grounded in accessible neutral
                surfaces, this palette keeps the interface calm, recognisable, and easy to scan.
              </p>
              <div className="mt-6 rounded-[24px] border border-border bg-card p-5 shadow-sm dark:bg-gray-900">
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Accessibility note
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground dark:text-muted-foreground">
                  All color combinations are intended to meet WCAG 2.1 AA contrast requirements.
                  Use semantic tokens and avoid hardcoding one-off values in product screens.
                </p>
              </div>
            </aside>

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
            <aside>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-blue-950/40 dark:text-blue-300">
                  <Type size={22} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                    Typography
                  </p>
                  <h2 className="mt-1 text-3xl font-bold text-foreground dark:text-gray-50">
                    A readable hierarchy for government services
                  </h2>
                </div>
              </div>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground dark:text-muted-foreground">
                The type scale balances clarity, density, and performance so long-form
                content remains readable across devices and languages.
              </p>
              <div className="mt-6 rounded-[24px] border border-border bg-card p-5 shadow-sm dark:bg-gray-800">
                <h3 className="font-semibold text-foreground dark:text-gray-50 mb-2">Font family</h3>
                <p className="text-sm leading-relaxed text-muted-foreground dark:text-muted-foreground">
                  System font stack for optimal performance: -apple-system, BlinkMacSystemFont,
                  "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
                </p>
              </div>
            </aside>

            <div className="rounded-[28px] border border-border bg-card shadow-sm dark:bg-gray-800 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-background border-b border-border dark:bg-gray-900 dark:border-gray-700">
                    <tr>
                      <th className="text-left px-6 py-4 font-semibold text-foreground dark:text-gray-50">Style</th>
                      <th className="text-left px-6 py-4 font-semibold text-foreground dark:text-gray-50">Size</th>
                      <th className="text-left px-6 py-4 font-semibold text-foreground dark:text-gray-50">Weight</th>
                      <th className="text-left px-6 py-4 font-semibold text-foreground dark:text-gray-50">Usage</th>
                      <th className="text-left px-6 py-4 font-semibold text-foreground dark:text-gray-50">Example</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border dark:divide-gray-700">
                    {typography.map((type, index) => (
                      <tr key={index} className="transition-colors hover:bg-background dark:hover:bg-gray-700">
                        <td className="px-6 py-4 font-medium text-foreground dark:text-gray-100">{type.name}</td>
                        <td className="px-6 py-4 text-muted-foreground dark:text-muted-foreground">{type.size}</td>
                        <td className="px-6 py-4 text-muted-foreground dark:text-muted-foreground">{type.weight}</td>
                        <td className="px-6 py-4 text-muted-foreground dark:text-muted-foreground">{type.usage}</td>
                        <td className="px-6 py-4">
                          <span style={{ fontSize: type.size, fontWeight: type.weight }} className="text-foreground dark:text-gray-100">
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
            <aside>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Spacing system
              </p>
              <h2 className="mt-3 text-3xl font-bold text-foreground dark:text-gray-50">
                Consistent spacing builds calm, readable interfaces
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground dark:text-muted-foreground">
                The spacing scale creates rhythm and predictability across layouts, forms,
                and content-heavy experiences.
              </p>
              <div className="mt-6 rounded-[24px] border border-border bg-card p-5 shadow-sm dark:bg-gray-900">
                <h3 className="font-semibold text-foreground dark:text-gray-50 mb-2">Implementation</h3>
                <p className="text-sm text-muted-foreground dark:text-muted-foreground mb-3">
                  Use spacing tokens in your code for consistency:
                </p>
                <code className="block rounded-lg border border-border bg-background px-4 py-3 text-sm font-mono text-foreground dark:bg-gray-800 dark:text-gray-100">
                  className="p-spacing-4 m-spacing-2"
                </code>
              </div>
            </aside>

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
            <aside>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-blue-950/40 dark:text-blue-300">
                  <Grid size={22} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                    Grid & layout
                  </p>
                  <h2 className="mt-1 text-3xl font-bold text-foreground dark:text-gray-50">
                    Responsive layout rules for every screen size
                  </h2>
                </div>
              </div>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground dark:text-muted-foreground">
                The grid system adapts from stacked mobile layouts to dense desktop views
                while keeping the same design language intact.
              </p>
            </aside>

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
                <LayoutCard title="Mobile" range="320px - 767px" description="Stack content vertically" />
                <LayoutCard title="Tablet" range="768px - 1023px" description="Two-column layouts" />
                <LayoutCard title="Desktop" range="1024px+" description="Full grid layouts" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

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
