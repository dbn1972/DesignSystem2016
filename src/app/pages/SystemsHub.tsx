import { Link } from "react-router";
import {
  ArrowRight,
  CheckCircle,
  FileText,
  Globe2,
  Layers,
  RefreshCw,
  Shield,
  Sparkles,
  Workflow,
  Languages,
  Activity,
} from "lucide-react";

export default function SystemsHub() {
  return (
    <div className="min-h-screen bg-background text-foreground dark:bg-gray-900">
      <header className="border-b border-border bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-gray-900 dark:to-blue-950/40">
        <div className="mx-auto max-w-[1440px] px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)]">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-card/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-blue-700 shadow-sm dark:border-blue-800 dark:bg-blue-950/40 dark:text-blue-300">
                <Sparkles size={14} />
                Cross-cutting systems
              </div>

              <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground dark:text-gray-50">
                Systems
              </h1>

              <p className="mt-5 max-w-2xl text-lg sm:text-xl leading-relaxed text-muted-foreground dark:text-muted-foreground">
                UX4G systems are shared capabilities that improve every service journey:
                multilingual delivery, intelligent forms, and resilience patterns that keep
                people moving even when networks or services fail.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/systems/multilingual"
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-[#000066] dark:bg-blue-600 dark:hover:bg-blue-700"
                >
                  Open multilingual guidance
                  <ArrowRight size={16} />
                </Link>
                <Link
                  to="/systems/form-intelligence"
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary dark:bg-gray-800 dark:text-gray-100 dark:hover:border-blue-500"
                >
                  View form intelligence
                </Link>
                <Link
                  to="/systems/state-resilience"
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary dark:bg-gray-800 dark:text-gray-100 dark:hover:border-blue-500"
                >
                  View state resilience
                </Link>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
                <StatTile value="3" label="core systems" />
                <StatTile value="22+" label="languages supported" />
                <StatTile value="100%" label="shared across services" />
                <StatTile value="AA" label="accessibility target" />
              </div>
            </div>

            <div className="lg:justify-self-end">
              <div className="rounded-[32px] border border-border bg-card/95 p-7 shadow-xl backdrop-blur-sm dark:bg-gray-800/95">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                      System overview
                    </p>
                    <h2 className="mt-2 text-2xl font-bold text-foreground dark:text-gray-50">
                      Designed to scale across services
                    </h2>
                  </div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-sm dark:bg-blue-600">
                    <Layers size={26} />
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <OverviewRow
                    icon={<Languages size={16} />}
                    title="Multilingual guidance"
                    description="Language-aware interfaces for India’s diverse audiences."
                  />
                  <OverviewRow
                    icon={<FileText size={16} />}
                    title="Form intelligence"
                    description="Smarter data entry, validation, and recovery patterns."
                  />
                  <OverviewRow
                    icon={<RefreshCw size={16} />}
                    title="State resilience"
                    description="Save progress, recover cleanly, and keep journeys moving."
                  />
                </div>

                <div className="mt-6 rounded-2xl border border-border bg-gradient-to-br from-blue-50 to-emerald-50 p-5 dark:from-blue-950/30 dark:to-emerald-950/20">
                  <div className="flex items-center gap-2 text-sm font-semibold text-foreground dark:text-gray-100">
                    <Shield size={16} className="text-blue-700 dark:text-blue-300" />
                    Enterprise-ready foundation
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground dark:text-muted-foreground">
                    These systems are shared platform layers, so teams can build once and
                    apply the same UX4G standards across all citizen-facing services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <section className="grid gap-6 lg:grid-cols-3">
          <SystemCard
            icon={<Globe2 size={28} />}
            eyebrow="System 01"
            title="Multilingual Guidance"
            description="Design guidance for supporting India’s 22 official languages with clear typography, layout balance, and script-aware UI behavior."
            path="/systems/multilingual"
            accent="blue"
            points={[
              "Language selection and persistence",
              "Script-aware layout and spacing",
              "Long-text expansion and truncation handling",
              "Accessible translation and fallback patterns",
            ]}
          />

          <SystemCard
            icon={<FileText size={28} />}
            eyebrow="System 02"
            title="Form Intelligence"
            description="A reusable form system for progressive disclosure, validation, autosave, review, and assisted completion."
            path="/systems/form-intelligence"
            accent="violet"
            points={[
              "Conditional logic and smart field states",
              "Auto-save and resume support",
              "Review-before-submit workflows",
              "Validation and error recovery",
            ]}
          />

          <SystemCard
            icon={<RefreshCw size={28} />}
            eyebrow="System 03"
            title="State Resilience"
            description="Recovery-focused design for errors, retries, offline states, and graceful degradation across service flows."
            path="/systems/state-resilience"
            accent="green"
            points={[
              "Network and service failure handling",
              "Retry and restoration paths",
              "Partial completion states",
              "Clear user feedback in every failure mode",
            ]}
          />
        </section>

        <section className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] items-start">
          <div className="rounded-[28px] border border-border bg-card p-6 sm:p-8 shadow-sm dark:bg-gray-800">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-blue-950/40 dark:text-blue-300">
                <Workflow size={22} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                  How the system layer works
                </p>
                <h3 className="mt-1 text-2xl font-bold text-foreground dark:text-gray-50">
                  Shared capabilities that strengthen every service
                </h3>
              </div>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <FeaturePanel
                title="Start with multilingual"
                description="Use the multilingual guidance when content, typography, or interface density must support multiple Indian languages."
              />
              <FeaturePanel
                title="Add intelligence to forms"
                description="Apply form intelligence to complex journeys that need conditional fields, save-and-resume, and guided completion."
              />
              <FeaturePanel
                title="Design for failure"
                description="Use resilience patterns wherever network interruptions, server errors, or partial completion could disrupt the journey."
              />
              <FeaturePanel
                title="Keep the experience consistent"
                description="Each system follows the same UX4G tone, accessibility rules, and token-driven visual language."
              />
            </div>
          </div>

          <aside className="rounded-[28px] border border-border bg-gradient-to-br from-slate-50 via-white to-blue-50 p-6 shadow-sm dark:from-gray-900 dark:via-gray-800 dark:to-blue-950/20">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              Enterprise checklist
            </p>
            <h3 className="mt-2 text-2xl font-bold text-foreground dark:text-gray-50">
              Built for large government platforms
            </h3>
            <ul className="mt-6 space-y-4">
              <ChecklistItem text="One system layer, shared across many services" />
              <ChecklistItem text="Clear paths to multilingual, form, and resilience guidance" />
              <ChecklistItem text="Premium responsive layout with strong hierarchy" />
              <ChecklistItem text="Consistent cards, callouts, and enterprise-ready CTAs" />
            </ul>

            <div className="mt-6 rounded-2xl bg-card p-5 border border-border dark:bg-gray-900">
              <p className="text-sm font-semibold text-foreground dark:text-gray-100">
                Recommended starting point
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground dark:text-muted-foreground">
                If you are designing content for regional audiences first, begin with
                multilingual guidance and then layer in form intelligence and resilience.
              </p>
              <Link
                to="/systems/multilingual"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline dark:text-blue-300"
              >
                Open multilingual guidance
                <ArrowRight size={16} />
              </Link>
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
}

function StatTile({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card px-4 py-4 shadow-sm dark:bg-gray-800">
      <div className="text-2xl font-bold text-foreground dark:text-gray-50">{value}</div>
      <div className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </div>
    </div>
  );
}

function OverviewRow({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-4 rounded-2xl border border-border bg-background p-4 dark:bg-gray-900">
      <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary dark:bg-blue-950/40 dark:text-blue-300">
        {icon}
      </div>
      <div>
        <p className="font-semibold text-foreground dark:text-gray-50">{title}</p>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground dark:text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
}

function SystemCard({
  icon,
  eyebrow,
  title,
  description,
  path,
  accent,
  points,
}: {
  icon: React.ReactNode;
  eyebrow: string;
  title: string;
  description: string;
  path: string;
  accent: "blue" | "violet" | "green";
  points: string[];
}) {
  const accentMap = {
    blue: "from-blue-500 to-cyan-500",
    violet: "from-violet-500 to-indigo-500",
    green: "from-emerald-500 to-teal-500",
  };

  return (
    <Link
      to={path}
      className="group rounded-[28px] border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl dark:bg-gray-800"
    >
      <div className={`h-1.5 w-24 rounded-full bg-gradient-to-r ${accentMap[accent]}`} />
      <div className="mt-6 flex items-start justify-between gap-4">
        <div className="max-w-[calc(100%-4rem)]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            {eyebrow}
          </p>
          <h3 className="mt-2 text-2xl font-bold text-foreground group-hover:text-primary dark:text-gray-50 dark:group-hover:text-blue-300">
            {title}
          </h3>
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-blue-950/40 dark:text-blue-300">
          {icon}
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-muted-foreground dark:text-muted-foreground">
        {description}
      </p>

      <div className="mt-6 space-y-3">
        {points.map((point) => (
          <div key={point} className="flex items-start gap-3 text-sm text-foreground dark:text-gray-100">
            <CheckCircle size={16} className="mt-0.5 flex-shrink-0 text-emerald-600 dark:text-emerald-400" />
            <span>{point}</span>
          </div>
        ))}
      </div>

      <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary dark:text-blue-300">
        View details
        <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
      </div>
    </Link>
  );
}

function FeaturePanel({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-2xl border border-border bg-background p-5 shadow-sm dark:bg-gray-900">
      <div className="flex items-center gap-2 text-sm font-semibold text-foreground dark:text-gray-50">
        <Activity size={16} className="text-primary dark:text-blue-300" />
        {title}
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground dark:text-muted-foreground">
        {description}
      </p>
    </div>
  );
}

function ChecklistItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3 text-sm text-foreground dark:text-gray-100">
      <CheckCircle size={16} className="mt-0.5 flex-shrink-0 text-emerald-600 dark:text-emerald-400" />
      <span>{text}</span>
    </li>
  );
}
