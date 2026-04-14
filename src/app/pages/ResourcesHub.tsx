import { Link } from "react-router";
import { ArrowRight, BookOpen, CheckCircle, Code, Download, Figma, Globe, Package, Rocket, Workflow } from "lucide-react";

export default function ResourcesHub() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.12),_transparent_34%),radial-gradient(circle_at_top_right,_rgba(249,115,22,0.10),_transparent_30%),linear-gradient(to_bottom,theme(colors.background),theme(colors.background))]">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-6 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12 xl:grid-cols-[1.15fr_0.85fr] xl:items-start">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold text-muted-foreground shadow-sm">
              <Package size={14} className="text-primary" />
              Developer tools for implementation teams
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-primary text-primary-foreground shadow-lg shadow-primary/15">
                  <Package size={30} />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Resources</p>
                  <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Resources</h1>
                </div>
              </div>

              <p className="max-w-3xl text-lg leading-8 text-muted-foreground">
                Everything teams need to get moving quickly: installation guidance, starter kits, component specifications,
                and framework-aware docs for React, Angular, and Web Components.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/resources/getting-started"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
              >
                Get started <ArrowRight size={16} />
              </Link>
              <Link
                to="/resources/starter-kit"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground shadow-sm transition-colors hover:border-primary hover:text-primary"
              >
                View starter kit
              </Link>
              <Link
                to="/resources/component-specs"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground shadow-sm transition-colors hover:border-primary hover:text-primary"
              >
                View component specs
              </Link>
            </div>
          </div>

          <aside className="rounded-[32px] border border-border bg-card p-7 shadow-xl shadow-black/5">
            <div className="flex items-center justify-between gap-4 border-b border-border pb-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">Resource map</p>
                <h2 className="mt-2 text-2xl font-bold text-foreground">What this hub covers</h2>
              </div>
              <div className="rounded-2xl bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">7 entry points</div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <MetricCard value="5 min" label="Quick start" />
              <MetricCard value="30+" label="Reusable components" />
              <MetricCard value="45+" label="Reference pages" />
              <MetricCard value="2 stacks" label="React + Angular" />
            </div>

            <div className="mt-6 space-y-3 rounded-2xl bg-muted/40 p-4">
              <HubNote title="Framework parity" text="React stays the reference while Angular and Web Components stay discoverable." />
              <HubNote title="Enterprise tone" text="Guides, specs, and design files are organized for delivery teams, not demos." />
            </div>
          </aside>
        </div>
      </header>

      <main className="mx-auto max-w-[1440px] space-y-10 px-6 py-12 sm:px-8 lg:px-12">
        <section className="space-y-6">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl space-y-2">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">Quick entry points</p>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Move from overview to implementation quickly</h2>
              <p className="text-muted-foreground">
                These links surface the most used setup and framework pages without making the user hunt through the docs tree.
              </p>
            </div>
            <div className="hidden flex-wrap gap-2 lg:flex">
              <Pill label="Getting started" />
              <Pill label="Starter kit" />
              <Pill label="Component specs" />
              <Pill label="Angular docs" />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <QuickLinkCard
              icon={<Rocket size={24} />}
              title="Getting Started"
              description="5-minute setup"
              path="/resources/getting-started"
              color="blue"
            />
            <QuickLinkCard
              icon={<Download size={24} />}
              title="Starter Kit"
              description="Production templates"
              path="/resources/starter-kit"
              color="green"
            />
            <QuickLinkCard
              icon={<Code size={24} />}
              title="Component Specs"
              description="React & Angular"
              path="/resources/component-specs"
              color="purple"
            />
            <QuickLinkCard
              icon={<Figma size={24} />}
              title="Figma Tools"
              description="Design files"
              path="/resources/figma"
              color="orange"
            />
            <QuickLinkCard
              icon={<Package size={24} />}
              title="Angular Core"
              description="Package docs"
              path="/docs/angular"
              color="blue"
            />
            <QuickLinkCard
              icon={<Workflow size={24} />}
              title="Angular Patterns"
              description="Service flows"
              path="/resources/angular-patterns"
              color="purple"
            />
            <QuickLinkCard
              icon={<Globe size={24} />}
              title="Web Components"
              description="Custom elements"
              path="/docs/web-components"
              color="green"
            />
          </div>
        </section>

        <div className="space-y-8">
          <ResourceSection
            icon={<Rocket size={32} className="text-blue-600" />}
            title="Getting Started"
            description="Install and configure UX4G in your project"
            color="blue"
          >
            <div className="space-y-4">
              <ResourceItem
                title="Installation Guide"
                description="Step-by-step guide to install UX4G in React or Angular projects"
                topics={["npm install", "Configuration", "Import components", "Theming setup"]}
                path="/resources/getting-started"
              />
              <ResourceItem
                title="Quick Start Tutorial"
                description="Build your first government service page in 10 minutes"
                topics={["Create page", "Add components", "Apply patterns", "Test accessibility"]}
                path="/resources/getting-started"
              />
              <ResourceItem
                title="Project Structure"
                description="Recommended folder structure and organization"
                topics={["Components folder", "Pages folder", "Services folder", "Content library"]}
                path="/resources/getting-started"
              />
            </div>
          </ResourceSection>

          <ResourceSection
            icon={<Download size={32} className="text-green-600" />}
            title="Starter Kit"
            description="Production-ready code templates and examples"
            color="green"
          >
            <div className="grid gap-6 xl:grid-cols-[1fr_1fr]">
              <div className="rounded-[24px] border border-green-200 bg-green-50 p-6 shadow-sm dark:border-green-800 dark:bg-green-950/20">
                <h4 className="mb-4 text-lg font-bold text-foreground">What’s included</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {[
                    "30+ reusable components",
                    "8 common patterns",
                    "45+ reference pages",
                    "Mock API layer",
                    "Routing configuration",
                    "Content design system"
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle size={16} className="mt-0.5 flex-shrink-0 text-green-600 dark:text-green-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[24px] border border-border bg-card p-6 shadow-sm">
                <h4 className="mb-4 text-lg font-bold text-foreground">Quick start</h4>
                <div className="space-y-4">
                  {[
                    { step: "1", title: "Copy files", copy: "Copy starter kit to your project" },
                    { step: "2", title: "Install dependencies", copy: "npm install react-router lucide-react" },
                    { step: "3", title: "Start building", copy: "Use components and patterns" }
                  ].map((item) => (
                    <div key={item.step} className="flex items-start gap-3">
                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                        {item.step}
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{item.title}</p>
                        <p className="text-sm text-muted-foreground">{item.copy}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Link
                  to="/resources/starter-kit"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  View starter kit <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </ResourceSection>

          <ResourceSection
            icon={<Code size={32} className="text-purple-600" />}
            title="Component Specifications"
            description="Framework-agnostic component APIs"
            color="purple"
          >
            <div className="space-y-4">
              <ResourceItem
                title="Component-to-Code Mapping"
                description="Complete TypeScript interfaces for all 15+ components"
                topics={["React props", "Angular I/O", "Variants", "States"]}
                path="/resources/component-specs"
              />
              <div className="rounded-[24px] border border-purple-200 bg-purple-50 p-6 shadow-sm dark:border-purple-800 dark:bg-purple-950/20">
                <h4 className="mb-4 text-lg font-bold text-foreground">Covered components</h4>
                <div className="grid gap-4 text-sm text-muted-foreground sm:grid-cols-2 xl:grid-cols-3">
                  <ul className="space-y-1">
                    <li>• Button</li>
                    <li>• Form Field</li>
                    <li>• Input</li>
                    <li>• Select</li>
                    <li>• Checkbox</li>
                  </ul>
                  <ul className="space-y-1">
                    <li>• Radio</li>
                    <li>• Alert</li>
                    <li>• Modal</li>
                    <li>• Tabs</li>
                    <li>• Badge</li>
                  </ul>
                  <ul className="space-y-1">
                    <li>• Progress Steps</li>
                    <li>• Loading Spinner</li>
                    <li>• Card</li>
                    <li>• Breadcrumb</li>
                    <li>• Toast</li>
                  </ul>
                </div>
              </div>
            </div>
          </ResourceSection>

          <ResourceSection
            icon={<Figma size={32} className="text-orange-600" />}
            title="Figma Resources"
            description="Design files and tools for designers"
            color="orange"
          >
            <div className="space-y-4">
              <ResourceItem
                title="Design System Library"
                description="Complete Figma component library with variants and auto-layout"
                topics={["Components", "Patterns", "Templates", "Icons"]}
                path="/resources/figma"
              />
              <ResourceItem
                title="Design-to-Code Tools"
                description="Tools to convert Figma designs to production code"
                topics={["Component export", "Token sync", "Code generation"]}
                path="/resources/figma"
              />
              <ResourceItem
                title="Theming & Tokens"
                description="Design tokens for colors, typography, and spacing"
                topics={["Color tokens", "Typography scale", "Spacing system"]}
                path="/resources/figma"
              />
            </div>
          </ResourceSection>

          <ResourceSection
            icon={<BookOpen size={32} className="text-muted-foreground" />}
            title="Additional Resources"
            description="Documentation and guides"
            color="gray"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <Link to="/accessibility" className="group rounded-[24px] border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-lg">
                <h4 className="mb-1 font-bold text-foreground group-hover:text-primary">Accessibility Guide</h4>
                <p className="text-sm text-muted-foreground">WCAG 2.1 AA compliance guidelines</p>
              </Link>
              <Link to="/content-system" className="group rounded-[24px] border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-lg">
                <h4 className="mb-1 font-bold text-foreground group-hover:text-primary">Content Design System</h4>
                <p className="text-sm text-muted-foreground">Standardized labels and messages</p>
              </Link>
              <Link to="/patterns" className="group rounded-[24px] border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-lg">
                <h4 className="mb-1 font-bold text-foreground group-hover:text-primary">Pattern Documentation</h4>
                <p className="text-sm text-muted-foreground">Design pattern guidelines</p>
              </Link>
              <Link to="/governance" className="group rounded-[24px] border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-lg">
                <h4 className="mb-1 font-bold text-foreground group-hover:text-primary">Governance Guidelines</h4>
                <p className="text-sm text-muted-foreground">Adoption and compliance tracking</p>
              </Link>
            </div>
          </ResourceSection>
        </div>
      </main>
    </div>
  );
}

function MetricCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-border bg-muted/40 p-4">
      <div className="text-2xl font-bold tracking-tight text-foreground">{value}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

function HubNote({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
      <p className="text-sm font-semibold text-foreground">{title}</p>
      <p className="mt-1 text-sm leading-6 text-muted-foreground">{text}</p>
    </div>
  );
}

function Pill({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-muted-foreground shadow-sm">
      {label}
    </span>
  );
}

function QuickLinkCard({ icon, title, description, path, color }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  path: string;
  color: string;
}) {
  const colorClasses = {
    blue: "bg-blue-50 border-blue-200 dark:bg-blue-950/20 dark:border-blue-800 hover:border-blue-500 dark:hover:border-blue-500",
    green: "bg-green-50 border-green-200 dark:bg-green-950/20 dark:border-green-800 hover:border-green-500 dark:hover:border-green-500",
    purple: "bg-purple-50 border-purple-200 dark:bg-purple-950/20 dark:border-purple-800 hover:border-purple-500 dark:hover:border-purple-500",
    orange: "bg-orange-50 border-orange-200 dark:bg-orange-950/20 dark:border-orange-800 hover:border-orange-500 dark:hover:border-orange-500"
  };

  return (
    <Link
      to={path}
      className={`${colorClasses[color as keyof typeof colorClasses]} group rounded-[24px] border p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg`}
    >
      <div className="mb-4 inline-flex rounded-2xl bg-card p-3 text-primary shadow-sm transition-transform group-hover:scale-105">
        {icon}
      </div>
      <h3 className="mb-1 text-base font-bold text-foreground group-hover:text-primary">{title}</h3>
      <p className="text-sm leading-6 text-muted-foreground">{description}</p>
    </Link>
  );
}

function ResourceSection({ icon, title, description, color, children }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  children: React.ReactNode;
}) {
  const colorClasses = {
    blue: "border-blue-200 bg-blue-50/80 dark:border-blue-800 dark:bg-blue-950/20",
    green: "border-green-200 bg-green-50/80 dark:border-green-800 dark:bg-green-950/20",
    purple: "border-purple-200 bg-purple-50/80 dark:border-purple-800 dark:bg-purple-950/20",
    orange: "border-orange-200 bg-orange-50/80 dark:border-orange-800 dark:bg-orange-950/20",
    gray: "border-border bg-muted/25 dark:bg-muted/10"
  };

  return (
    <section className="overflow-hidden rounded-[28px] border border-border bg-card shadow-sm">
      <div className={`${colorClasses[color as keyof typeof colorClasses]} border-b border-border px-6 py-5`}>
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-card text-primary shadow-sm">
            {icon}
          </div>
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground">{title}</h2>
            <p className="mt-1 max-w-3xl text-sm leading-6 text-muted-foreground">{description}</p>
          </div>
        </div>
      </div>
      <div className="p-6">{children}</div>
    </section>
  );
}

function ResourceItem({ title, description, topics, path }: {
  title: string;
  description: string;
  topics: string[];
  path: string;
}) {
  return (
    <Link
      to={path}
      className="group block rounded-[24px] border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-lg"
    >
      <div className="mb-3 flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <h4 className="mb-1 text-base font-bold text-foreground group-hover:text-primary">{title}</h4>
          <p className="text-sm leading-6 text-muted-foreground">{description}</p>
        </div>
        <ArrowRight size={18} className="mt-1 flex-shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
      </div>
      <div className="flex flex-wrap gap-2">
        {topics.map((topic) => (
          <span key={topic} className="rounded-full border border-border bg-muted/40 px-3 py-1 text-xs font-medium text-muted-foreground">
            {topic}
          </span>
        ))}
      </div>
    </Link>
  );
}
