import { ArrowRight, CheckCircle, FileCode2, Layers, Map, Package, ShieldCheck, Sparkles, Building2, BookOpen, Download, RefreshCw } from "lucide-react";
import { Link } from "react-router";

const servicesHighlights = [
  "Reference service blueprint",
  "Reusable service code downloads",
  "Service archetypes",
  "Shared systems and guidance",
];

const serviceCards = [
  {
    icon: <Map size={24} />,
    title: "Reference Service Blueprint",
    description: "The complete certificate application reference service, including citizen and officer journeys.",
    path: "/reference-service/overview",
    accent: "blue",
    meta: "Featured service",
  },
  {
    icon: <FileCode2 size={24} />,
    title: "Service Code Downloads",
    description: "Download the React source behind the reusable service flows and reference-service pages.",
    path: "/resources/service-code-downloads",
    accent: "violet",
    meta: "Implementation assets",
  },
  {
    icon: <Building2 size={24} />,
    title: "Service Archetypes",
    description: "Browse the recurring service shapes that teams can reuse across departments.",
    path: "/archetypes",
    accent: "green",
    meta: "Reusable journeys",
  },
  {
    icon: <Layers size={24} />,
    title: "Systems",
    description: "Shared capabilities for multilingual content, form intelligence, and resilience.",
    path: "/systems",
    accent: "orange",
    meta: "Cross-cutting platform",
  },
  {
    icon: <BookOpen size={24} />,
    title: "Resources",
    description: "Getting started, starter kits, component specs, and framework-aware documentation.",
    path: "/resources",
    accent: "teal",
    meta: "Enablement hub",
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "Governance",
    description: "Conformance, adoption, analytics, and policy guidance for scaled delivery teams.",
    path: "/governance",
    accent: "slate",
    meta: "Operating model",
  },
];

const serviceStages = [
  {
    title: "Discover and orient",
    description: "Start with the service blueprint to understand the experience shape and the end-to-end journey.",
    bullets: ["Service landing", "Eligibility", "Identity and access"],
  },
  {
    title: "Implement and reuse",
    description: "Move from blueprint to code downloads, archetypes, and shared systems without reinventing the model.",
    bullets: ["Reusable service code", "Archetype patterns", "Cross-cutting systems"],
  },
  {
    title: "Scale responsibly",
    description: "Use governance, resources, and reference flows to keep services accessible, consistent, and maintainable.",
    bullets: ["Documentation", "Conformance", "Adoption guidance"],
  },
];

export default function ServicesHub() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.12),_transparent_30%),radial-gradient(circle_at_top_right,_rgba(16,185,129,0.10),_transparent_25%),linear-gradient(to_bottom,theme(colors.background),theme(colors.background))]">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-6 py-10 sm:px-8 sm:py-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:px-4 sm:px-8 lg:px-12 lg:py-14">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold text-muted-foreground shadow-sm">
              <Sparkles size={14} className="text-primary" />
              Services hub
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-primary text-primary-foreground shadow-lg shadow-primary/15">
                  <Package size={30} />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Services</p>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight sm:text-5xl">Services</h1>
                </div>
              </div>

              <p className="max-w-3xl text-lg leading-8 text-muted-foreground">
                This hub brings the reference service together with the supporting assets teams need to design, build, scale, and govern
                government services. It is the best place to begin when you want the service story before the detailed implementation.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/reference-service/overview"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
              >
                Open reference overview
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/resources/service-code-downloads"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground shadow-sm transition-colors hover:border-primary hover:text-primary"
              >
                View code downloads
              </Link>
              <Link
                to="/archetypes"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground shadow-sm transition-colors hover:border-primary hover:text-primary"
              >
                Browse service archetypes
              </Link>
            </div>

            <div className="flex flex-wrap gap-3">
              {servicesHighlights.map((item) => (
                <span key={item} className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-muted-foreground shadow-sm">
                  <CheckMark />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-border bg-card p-7 shadow-xl shadow-black/5">
            <div className="flex items-center justify-between gap-4 border-b border-border pb-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">Services at a glance</p>
                <h2 className="mt-2 text-2xl font-bold">What&apos;s in this hub</h2>
              </div>
              <div className="rounded-2xl bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">6 entry points</div>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
              <Metric value="1" label="featured blueprint" />
              <Metric value="3" label="supporting routes" />
              <Metric value="4" label="core journey areas" />
              <Metric value="100%" label="responsive" />
            </div>

            <div className="mt-6 space-y-3 rounded-2xl bg-muted/40 p-4">
              <InfoRow icon={<Map size={16} />} title="Reference service first" text="The certificate application remains the canonical service example." />
              <InfoRow icon={<Download size={16} />} title="Code and patterns" text="Downloads and archetypes sit close to the blueprint for easy implementation." />
              <InfoRow icon={<RefreshCw size={16} />} title="Operational maturity" text="Systems and governance help teams move from demo to production." />
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-[1440px] px-6 py-12 sm:px-8 lg:px-4 sm:px-8 lg:px-12">
        <section className="mb-8 grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl space-y-2">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">How to use this hub</p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Move from overview to implementation without losing context</h2>
            <p className="text-muted-foreground">
              The hub is arranged to help teams orient first, implement second, and then scale with reusable assets and governance.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 lg:justify-end">
            <StagePill href="#discover-and-orient" label="Discover" />
            <StagePill href="#implement-and-reuse" label="Implement" />
            <StagePill href="#scale-responsibly" label="Scale" />
          </div>
        </section>

        <section className="mb-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {serviceCards.map((card) => (
            <Link
              key={card.title}
              to={card.path}
              className="group overflow-hidden rounded-[28px] border border-border bg-card shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className={`h-1.5 bg-gradient-to-r ${accentGradient(card.accent)}`} />
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${accentBadge(card.accent)} shadow-sm`}>
                    {card.icon}
                  </div>
                  <span className="rounded-full border border-border bg-muted/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    {card.meta}
                  </span>
                </div>
                <h3 className="mt-5 text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">{card.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{card.description}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Open page
                  <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          ))}
        </section>

        <section className="grid gap-8 lg:grid-cols-3">
          {serviceStages.map((stage) => (
            <article key={stage.title} className="rounded-[28px] border border-border bg-card p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">Journey focus</p>
              <h3 className="mt-2 text-2xl font-bold tracking-tight text-foreground">{stage.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{stage.description}</p>
              <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                {stage.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <CheckMark />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className="mt-12 grid gap-4 rounded-[28px] border border-border bg-muted/25 p-6 lg:grid-cols-[1.1fr_0.9fr] lg:p-7">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">Content review</p>
            <h2 className="text-2xl font-bold tracking-tight">Why this page is the right top-level entry</h2>
            <p className="text-muted-foreground leading-7">
              The old behavior sent people straight to the reference-service blueprint, which was practical but too narrow for the menu label.
              The new Services hub keeps the blueprint front and center while giving teams the broader entry points they expect.
            </p>
          </div>

          <div className="rounded-[24px] border border-border bg-card p-5 shadow-sm">
            <p className="text-sm font-semibold text-foreground">Recommended next step</p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Use the reference-service blueprint for the full end-to-end walkthrough, then use service downloads and archetypes when you
              need implementation details.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-border bg-muted/40 p-4">
      <div className="text-2xl font-bold tracking-tight text-foreground">{value}</div>
      <div className="mt-1 text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

function InfoRow({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">{icon}</div>
        <div>
          <p className="text-sm font-semibold text-foreground">{title}</p>
          <p className="mt-1 text-sm leading-6 text-muted-foreground">{text}</p>
        </div>
      </div>
    </div>
  );
}

function StagePill({ href, label }: { href: string; label: string }) {
  return (
    <a href={href} className="rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-muted-foreground shadow-sm transition-colors hover:border-primary hover:text-primary">
      {label}
    </a>
  );
}

function CheckMark() {
  return <CheckCircle size={14} className="mt-0.5 flex-shrink-0 text-primary" />;
}

function accentGradient(accent: string) {
  switch (accent) {
    case "blue":
      return "from-blue-600 to-blue-700";
    case "violet":
      return "from-violet-600 to-violet-700";
    case "green":
      return "from-emerald-600 to-emerald-700";
    case "orange":
      return "from-orange-600 to-orange-700";
    case "teal":
      return "from-teal-600 to-teal-700";
    default:
      return "from-slate-600 to-slate-700";
  }
}

function accentBadge(accent: string) {
  switch (accent) {
    case "blue":
      return "bg-blue-600 text-white";
    case "violet":
      return "bg-violet-600 text-white";
    case "green":
      return "bg-emerald-600 text-white";
    case "orange":
      return "bg-orange-600 text-white";
    case "teal":
      return "bg-teal-600 text-white";
    default:
      return "bg-slate-600 text-white";
  }
}
