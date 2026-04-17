import { Link } from "react-router";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Box,
  Building2,
  CheckCircle,
  Code,
  Globe,
  Layers,
  Palette,
  Shield,
  Users,
  Zap,
} from "lucide-react";
import SEOHead from "../components/SEOHead";

const proofPoints = [
  {
    title: "Accessibility by default",
    description: "Focus states, keyboard support, and usable defaults for public-facing services.",
    icon: Shield,
  },
  {
    title: "Three implementation lanes",
    description: "React, Angular, and Web Components aligned to one design-system contract.",
    icon: Code,
  },
  {
    title: "Patterns for Indian services",
    description: "Identity, payments, multilingual journeys, and document-heavy workflows.",
    icon: Globe,
  },
];

const foundations = [
  {
    title: "Design tokens",
    description: "Colors, spacing, radius, and type scale travel through the same token system.",
    to: "/foundations",
    icon: Palette,
  },
  {
    title: "Core components",
    description: "A focused library for inputs, navigation, feedback, data display, and layouts.",
    to: "/components",
    icon: Box,
  },
  {
    title: "Implementation guidance",
    description: "Usage patterns, specs, and examples that help teams build consistently.",
    to: "/resources/component-specs",
    icon: BookOpen,
  },
];

const indiaPatterns = [
  {
    title: "Identity and verification",
    description: "Aadhaar, PAN, and verification journeys designed for high-trust public services.",
  },
  {
    title: "Multilingual interfaces",
    description: "Support for Indian languages with layouts that respect script, spacing, and clarity.",
  },
  {
    title: "Payments and certificates",
    description: "Patterns for fee collection, official documents, and status-heavy service flows.",
  },
];

const systemShowcase = [
  {
    title: "Components",
    description: "Explore the library, variants, and live examples.",
    to: "/components",
    icon: Box,
  },
  {
    title: "Service blueprints",
    description: "See how the system scales to end-to-end government workflows.",
    to: "/reference-service/overview",
    icon: Layers,
  },
  {
    title: "Documentation",
    description: "Start with foundations, implementation notes, and package guidance.",
    to: "/documentation",
    icon: BookOpen,
  },
];

const teamLanes = [
  {
    title: "Designers",
    description: "Use shared tokens, foundations, and specs to make UI decisions predictable.",
    icon: Palette,
  },
  {
    title: "Engineers",
    description: "Adopt consistent APIs and accessible defaults across frameworks.",
    icon: Code,
  },
  {
    title: "Service teams",
    description: "Ship trusted user journeys with patterns built for public-service delivery.",
    icon: Building2,
  },
];

function HeroCanvas() {
  return (
    <div className="relative mx-auto max-w-xl">
      <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.7),transparent_55%)]" />
      <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-2xl">
        <div className="border-b border-border bg-muted/50 px-5 py-4">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                System canvas
              </p>
              <h2 className="mt-2 text-xl font-semibold text-foreground">
                Tokens, accessibility, and public-service patterns in one place
              </h2>
            </div>
            <div className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
              UX4G
            </div>
          </div>
        </div>

        <div className="grid gap-4 p-5 sm:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-4 rounded-2xl border border-border bg-background p-4">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-primary/10 p-2 text-primary">
                <Layers size={18} />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Service flow</p>
                <p className="text-xs text-muted-foreground">Application, review, and approval states</p>
              </div>
            </div>

            <div className="grid gap-3">
              {[
                { label: "Application submitted", tone: "bg-primary" },
                { label: "Documents verified", tone: "bg-[color:var(--ux4g-color-feedback-success)]" },
                { label: "Certificate ready", tone: "bg-[color:var(--ux4g-color-feedback-warning)]" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 rounded-xl border border-border bg-card p-3">
                  <div className={`h-2.5 w-2.5 rounded-full ${item.tone}`} />
                  <span className="text-sm text-foreground">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-border bg-card p-4">
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="font-medium text-foreground">Accessibility readiness</span>
                <span className="text-muted-foreground">AA target</span>
              </div>
              <div className="h-2 rounded-full bg-muted">
                <div className="h-2 w-[72%] rounded-full bg-primary" />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-border bg-background p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                Tokens
              </p>
              <div className="mt-3 grid grid-cols-3 gap-3">
                <div className="rounded-xl border border-border bg-card p-3">
                  <div className="h-10 rounded-lg bg-primary" />
                  <p className="mt-2 text-xs text-muted-foreground">Brand</p>
                </div>
                <div className="rounded-xl border border-border bg-card p-3">
                  <div className="h-10 rounded-lg bg-[color:var(--ux4g-color-saffron-500)]" />
                  <p className="mt-2 text-xs text-muted-foreground">Accent</p>
                </div>
                <div className="rounded-xl border border-border bg-card p-3">
                  <div className="h-10 rounded-lg bg-[color:var(--ux4g-color-feedback-success)]" />
                  <p className="mt-2 text-xs text-muted-foreground">Success</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-background p-4">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-foreground">Language support</p>
                <Globe size={16} className="text-primary" />
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {["English", "हिन्दी", "தமிழ்", "বাংলা"].map((language) => (
                  <span
                    key={language}
                    className="rounded-full border border-border bg-card px-3 py-1 text-xs text-foreground"
                  >
                    {language}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-primary p-4 text-primary-foreground">
              <p className="text-sm font-semibold">Built for public-service trust</p>
              <p className="mt-2 text-sm text-primary-foreground/80">
                Clear status, stable components, and patterns designed for real delivery teams.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function UnifiedHome() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Home"
        description="India's open-source design system for building consistent, accessible digital public services."
      />

      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,color-mix(in_srgb,var(--primary)_12%,transparent),transparent_52%),radial-gradient(ellipse_at_bottom_right,color-mix(in_srgb,var(--ux4g-color-saffron-500)_14%,transparent),transparent_48%)]" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:py-20 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:py-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground backdrop-blur">
              <Shield size={14} className="text-primary" />
              Design systems for digital public services
            </div>

            <h1 className="mt-8 max-w-3xl text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Design systems for India&apos;s most important digital services
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
              UX4G helps teams ship accessible, consistent, and implementation-ready experiences across
              components, patterns, and service workflows.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/components"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-opacity hover:opacity-90"
              >
                Explore components <ArrowRight size={16} />
              </Link>
              <Link
                to="/documentation"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
              >
                Read documentation
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                { label: "Shared token system", value: "Foundations first" },
                { label: "Accessible defaults", value: "Production-minded" },
                { label: "Public-service patterns", value: "Built for India" },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-border bg-card/70 p-4">
                  <p className="text-sm font-semibold text-foreground">{item.label}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <HeroCanvas />
        </div>
      </section>

      <section className="border-b border-border bg-card/40">
        <div className="mx-auto grid max-w-6xl gap-4 px-6 py-10 md:grid-cols-3">
          {proofPoints.map((item) => (
            <div key={item.title} className="rounded-2xl border border-border bg-card p-6">
              <div className="inline-flex rounded-xl bg-primary/10 p-3 text-primary">
                <item.icon size={20} />
              </div>
              <h2 className="mt-4 text-xl font-semibold text-foreground">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Foundations</p>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
            A design system should make good decisions easier to repeat
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            UX4G is strongest when tokens, APIs, accessibility, and examples move together. The homepage
            now reflects that more directly.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="grid gap-4 sm:grid-cols-3">
            {foundations.map((item) => (
              <Link
                key={item.title}
                to={item.to}
                className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg"
              >
                <div className="inline-flex rounded-xl bg-primary/10 p-3 text-primary">
                  <item.icon size={20} />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</p>
              </Link>
            ))}
          </div>

          <div className="rounded-[1.75rem] border border-border bg-card p-8">
            <div className="inline-flex rounded-xl bg-[color:var(--ux4g-color-feedback-success)]/10 p-3 text-[color:var(--ux4g-color-feedback-success)]">
              <CheckCircle size={22} />
            </div>
            <h3 className="mt-5 text-2xl font-semibold text-foreground">A smaller, stronger promise</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              World-class design systems are not just broad. They are predictable, accessible, and easy for
              teams to apply correctly.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Shared tokens and theming",
                "Consistent component contracts",
                "Accessible defaults in critical flows",
                "Examples that match what is shipped",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle size={16} className="mt-0.5 shrink-0 text-[color:var(--ux4g-color-feedback-success)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-gradient-to-b from-primary/5 to-transparent">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:py-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Built for India</p>
            <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
              The differentiator should be more than branding
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              UX4G is most compelling when it addresses the actual realities of Indian public-service
              delivery: multilingual interfaces, trust-heavy journeys, document workflows, and payments.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Aadhaar", "PAN", "UPI", "Certificates", "22 languages"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {indiaPatterns.map((item, index) => (
              <div key={item.title} className="rounded-2xl border border-border bg-card p-6">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                  {index + 1}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Explore the system</p>
            <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
              One system, different entry points
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Designers, engineers, and service teams should all land in the same ecosystem without having
              to reverse-engineer how it works.
            </p>

            <div className="mt-8 space-y-4">
              {teamLanes.map((item) => (
                <div key={item.title} className="rounded-2xl border border-border bg-card p-5">
                  <div className="flex items-start gap-4">
                    <div className="rounded-xl bg-primary/10 p-3 text-primary">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {systemShowcase.map((item) => (
              <Link
                key={item.title}
                to={item.to}
                className="group rounded-[1.75rem] border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg"
              >
                <div className="inline-flex rounded-xl bg-primary/10 p-3 text-primary">
                  <item.icon size={20} />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.description}</p>
                <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Open <ArrowRight size={16} />
                </div>
              </Link>
            ))}

            <div className="rounded-[1.75rem] border border-border bg-foreground p-6 text-background sm:col-span-3 lg:col-span-3">
              <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-background/70">
                    Get started
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold">
                    Build with a clearer system narrative, not just a bigger component count
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-background/75">
                    Start with components, read the documentation, and move from foundations into real
                    service journeys.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 md:justify-end">
                  <Link
                    to="/components"
                    className="inline-flex items-center gap-2 rounded-full bg-background px-5 py-3 text-sm font-semibold text-foreground transition-opacity hover:opacity-90"
                  >
                    Browse components <ArrowRight size={16} />
                  </Link>
                  <a
                    href="https://github.com/dbn1972/DesignSystem2016"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-background/20 px-5 py-3 text-sm font-semibold text-background transition-colors hover:bg-background/10"
                  >
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
