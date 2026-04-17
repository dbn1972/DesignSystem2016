import { BookOpen, Code, Database, FileText, Globe, Package, Sparkles } from "lucide-react";
import { Link } from "react-router";

const apiAreas = [
  {
    icon: Code,
    title: "React Component Specs",
    description: "Props, variants, states, and accessibility notes for the React component library.",
    href: "/resources/component-specs",
  },
  {
    icon: Package,
    title: "Angular Core API",
    description: "Inputs, outputs, ControlValueAccessor contracts, and usage guidance for Angular.",
    href: "/resources/angular-core",
  },
  {
    icon: Database,
    title: "Angular Pattern API",
    description: "Composable service-flow patterns for auth, forms, submission, tracking, and payment.",
    href: "/resources/angular-patterns",
  },
  {
    icon: Globe,
    title: "Web Components API",
    description: "Framework-agnostic custom elements and the contracts shared across stacks.",
    href: "/resources/web-components",
  },
];

export default function ApiReference() {
  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-to-br from-[#000080] via-[#000060] to-[#000080] text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen size={40} className="text-[#FF9933]" />
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-blue-200">Documentation</p>
                <h1 className="text-4xl lg:text-5xl font-bold">API Reference</h1>
              </div>
            </div>
            <p className="text-xl text-blue-100 max-w-3xl">
              One place to find the canonical API surface for UX4G across React, Angular, and Web
              Components. Use this as the entry point to the package-level references.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {apiAreas.map((area) => {
              const Icon = area.icon;

              return (
                <Link
                  key={area.title}
                  to={area.href}
                  className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary hover:shadow-lg"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon size={24} />
                  </div>
                  <h2 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {area.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{area.description}</p>
                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    Open docs
                    <FileText size={16} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-4 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="flex items-start gap-3">
              <Sparkles className="mt-1 text-[#FF9933]" size={20} />
              <div>
                <h2 className="text-lg font-bold text-foreground">What this covers</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Component props, events, states, accessibility annotations, implementation examples,
                  and framework-specific contracts. For code-level API mapping, start with the React
                  component specs and then move into the Angular or Web Components pages.
                </p>
              </div>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <Link
                to="/resources/component-specs"
                className="rounded-xl border border-border px-4 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                React component specs
              </Link>
              <Link
                to="/resources/getting-started"
                className="rounded-xl border border-border px-4 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                Getting started
              </Link>
              <Link
                to="/resources/migration-guides"
                className="rounded-xl border border-border px-4 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                Migration guidance
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-border bg-muted/20 p-4">
      <div className="text-xl font-semibold tracking-tight text-foreground">{value}</div>
      <div className="mt-1 text-sm leading-6 text-muted-foreground">{label}</div>
    </div>
  );
}
