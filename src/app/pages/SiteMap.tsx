import { BookOpen, Compass, Layers3, LifeBuoy, Shield, Sparkles } from "lucide-react";
import { Link } from "react-router";

import { ROUTE_PATHS } from "../routes/pathSource";

const topLevelSections = [
  {
    title: "Foundations",
    description: "Design tokens, accessibility, typography, color systems, and content patterns.",
    icon: <Sparkles className="h-5 w-5 text-primary" aria-hidden="true" />,
    links: [
      { label: "Foundations", to: ROUTE_PATHS.FOUNDATIONS.ROOT },
      { label: "Accessibility", to: ROUTE_PATHS.FOUNDATIONS.ACCESSIBILITY },
      { label: "Content System", to: ROUTE_PATHS.FOUNDATIONS.CONTENT_SYSTEM },
    ],
  },
  {
    title: "Components",
    description: "Production-ready UI controls, data display elements, and interaction primitives.",
    icon: <Layers3 className="h-5 w-5 text-primary" aria-hidden="true" />,
    links: [
      { label: "Components hub", to: ROUTE_PATHS.COMPONENTS.ROOT },
      { label: "Framework support", to: ROUTE_PATHS.COMPONENTS.FRAMEWORK_STATUS },
      { label: "Web Components", to: ROUTE_PATHS.COMPONENTS.WEB_COMPONENTS },
      { label: "Button", to: "/components/button" },
      { label: "Input", to: "/components/input" },
      { label: "Select", to: "/components/select" },
    ],
  },
  {
    title: "Patterns",
    description: "Reusable service journeys, entry flows, and response states.",
    icon: <Compass className="h-5 w-5 text-primary" aria-hidden="true" />,
    links: [
      { label: "Patterns hub", to: ROUTE_PATHS.PATTERNS.ROOT },
      { label: "Identity", to: ROUTE_PATHS.PATTERNS.IDENTITY_ROOT },
      { label: "Consent", to: ROUTE_PATHS.PATTERNS.CONSENT_ROOT },
      { label: "Payment", to: ROUTE_PATHS.PATTERNS.PAYMENT_ROOT },
      { label: "Search & discovery", to: ROUTE_PATHS.PATTERNS.SEARCH_DISCOVERY_ROOT },
      { label: "Dashboard", to: ROUTE_PATHS.PATTERNS.DASHBOARD_ROOT },
    ],
  },
  {
    title: "Archetypes",
    description: "Common service delivery models and journey blueprints.",
    icon: <BookOpen className="h-5 w-5 text-primary" aria-hidden="true" />,
    links: [
      { label: "Archetypes hub", to: ROUTE_PATHS.ARCHETYPES.ROOT },
      { label: "Application", to: ROUTE_PATHS.ARCHETYPES.APPLICATION },
      { label: "Eligibility", to: ROUTE_PATHS.ARCHETYPES.ELIGIBILITY },
      { label: "Renewal", to: ROUTE_PATHS.ARCHETYPES.RENEWAL },
      { label: "Tracking", to: ROUTE_PATHS.ARCHETYPES.TRACKING },
      { label: "Appointment", to: ROUTE_PATHS.ARCHETYPES.APPOINTMENT },
    ],
  },
  {
    title: "Systems",
    description: "Platform-level patterns that power multilingual, stateful service experiences.",
    icon: <LifeBuoy className="h-5 w-5 text-primary" aria-hidden="true" />,
    links: [
      { label: "Systems hub", to: ROUTE_PATHS.SYSTEMS.ROOT },
      { label: "Multilingual", to: ROUTE_PATHS.SYSTEMS.MULTILINGUAL },
      { label: "Form intelligence", to: ROUTE_PATHS.SYSTEMS.FORM_INTELLIGENCE },
      { label: "State resilience", to: ROUTE_PATHS.SYSTEMS.STATE_RESILIENCE },
    ],
  },
  {
    title: "Services",
    description: "Reference-service landing pages and implementation blueprints.",
    icon: <Shield className="h-5 w-5 text-primary" aria-hidden="true" />,
    links: [
      { label: "Services hub", to: ROUTE_PATHS.SERVICES.ROOT },
      { label: "Reference overview", to: ROUTE_PATHS.SERVICES.OVERVIEW },
      { label: "Certificate demo", to: ROUTE_PATHS.SERVICES.DEMO },
      { label: "Sign in", to: ROUTE_PATHS.SERVICES.SIGN_IN },
      { label: "Eligibility", to: ROUTE_PATHS.SERVICES.ELIGIBILITY },
      { label: "Start application", to: ROUTE_PATHS.SERVICES.START },
    ],
  },
  {
    title: "Resources",
    description: "Getting started, starter kits, specs, and framework documentation.",
    icon: <BookOpen className="h-5 w-5 text-primary" aria-hidden="true" />,
    links: [
      { label: "Resources hub", to: ROUTE_PATHS.GOVERNANCE.CONTRIBUTING ? "/resources" : "/resources" },
      { label: "Getting started", to: "/resources/getting-started" },
      { label: "Starter kit", to: "/resources/starter-kit" },
      { label: "Component specs", to: "/resources/component-specs" },
      { label: "API reference", to: "/api-reference" },
      { label: "Angular docs", to: "/docs/angular" },
      { label: "Web Components docs", to: "/docs/web-components" },
    ],
  },
  {
    title: "Governance",
    description: "Policies, adoption, analytics, and compliance guidance.",
    icon: <Shield className="h-5 w-5 text-primary" aria-hidden="true" />,
    links: [
      { label: "Governance hub", to: ROUTE_PATHS.GOVERNANCE.ROOT },
      { label: "Adoption", to: ROUTE_PATHS.GOVERNANCE.ADOPTION },
      { label: "Conformance", to: ROUTE_PATHS.GOVERNANCE.CONFORMANCE },
      { label: "Analytics", to: ROUTE_PATHS.GOVERNANCE.ANALYTICS },
      { label: "Contributing", to: ROUTE_PATHS.GOVERNANCE.CONTRIBUTING },
      { label: "Contact support", to: ROUTE_PATHS.GOVERNANCE.CONTACT },
      { label: "Privacy policy", to: ROUTE_PATHS.GOVERNANCE.PRIVACY_POLICY },
      { label: "Terms of use", to: ROUTE_PATHS.GOVERNANCE.TERMS_OF_USE },
    ],
  },
];

const utilityLinks = [
  { label: "Documentation", to: "/documentation" },
  { label: "Getting started", to: "/resources/getting-started" },
  { label: "Site map", to: ROUTE_PATHS.GOVERNANCE.SITE_MAP },
  { label: "Contact support", to: ROUTE_PATHS.GOVERNANCE.CONTACT },
];

export default function SiteMap() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-b from-background via-background to-muted/30">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(5,81,150,0.12),transparent_35%),radial-gradient(circle_at_top_right,rgba(19,136,8,0.08),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(255,153,51,0.08),transparent_30%)]" />
        <div className="mx-auto grid max-w-7xl items-start gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:px-8 lg:py-10">
          <div>
            <div className="mb-2.5 inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/80 px-3 py-1 text-sm font-medium text-muted-foreground shadow-sm backdrop-blur">
              <Compass className="h-4 w-4 text-primary" />
              Navigation map for UX4G
            </div>
            <h1 className="max-w-2xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Site map
            </h1>
            <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
              A premium, at-a-glance map of the UX4G system, designed to help teams move from overview to the right
              hub or page with fewer hops and less scanning.
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5">
              {utilityLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2.5 text-sm font-semibold text-foreground shadow-sm transition hover:bg-muted/60"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <aside className="rounded-[1.75rem] border border-border/70 bg-card/90 p-5 shadow-[0_24px_80px_-48px_rgba(0,0,0,0.45)] backdrop-blur">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">Map summary</p>
                <h2 className="mt-1.5 text-xl font-semibold tracking-tight text-foreground">What is included</h2>
              </div>
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">Live</span>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2.5">
              <StatBox value="8" label="Core sections" />
              <StatBox value="30+" label="Key links" />
              <StatBox value="3" label="Frameworks" />
              <StatBox value="1" label="Unified map" />
            </div>

            <div className="mt-4 rounded-2xl border border-border/70 bg-muted/40 p-3.5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">Designed for</p>
              <p className="mt-1.5 text-sm leading-6 text-muted-foreground">
                Teams who need a fast route into foundations, components, patterns, services, and governance without
                losing the broader platform context.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <section className="mb-10">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">Navigation</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Explore the platform by section
            </h2>
            <p className="mt-3 text-base leading-7 text-muted-foreground">
              Each card groups the major entry points so the structure stays readable at a glance.
            </p>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {topLevelSections.map((section) => (
            <article key={section.title} className="rounded-[1.75rem] border border-border/70 bg-card p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                    {section.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{section.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">{section.description}</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {section.links.map((link) => (
                  <Link
                    key={link.label}
                    to={link.to}
                    className="inline-flex items-center rounded-full border border-border/70 bg-background px-3 py-1.5 text-sm font-medium text-foreground transition hover:border-primary hover:text-primary"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}

function StatBox({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-border/70 bg-background/70 p-3.5">
      <div className="text-xl font-semibold tracking-tight text-foreground">{value}</div>
      <div className="mt-1 text-xs leading-5 text-muted-foreground">{label}</div>
    </div>
  );
}
