import type { ElementType } from "react";
import { BookOpen, CheckCircle, Code, GitBranch, Package, Rocket, Shield, Sparkles } from "lucide-react";
import { Link } from "react-router";

const docLinks = [
  {
    title: "Quick Start",
    description: "Install Angular core and wire the first component set into a project.",
    href: "/resources/getting-started",
  },
  {
    title: "Component API Reference",
    description: "Use the React component specs as the canonical API vocabulary.",
    href: "/resources/component-specs",
  },
  {
    title: "Framework Status",
    description: "Track React, Angular, and Web Components readiness side by side.",
    href: "/framework-status",
  },
  {
    title: "Migration Guides",
    description: "Follow upgrade paths and compatibility notes for newer releases.",
    href: "/resources/migration-guides",
  },
  {
    title: "Conformance",
    description: "Review governance, release, and verification guidance before adoption.",
    href: "/governance/conformance",
  },
  {
    title: "Adoption",
    description: "See rollout guidance and implementation checkpoints.",
    href: "/governance/adoption",
  },
];

export default function AngularCoreDocs() {
  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-to-br from-[#000080] via-[#000060] to-[#000080] text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <Package size={40} className="text-[#FF9933]" />
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-blue-200">@ux4g/angular-core</p>
                <h1 className="text-4xl lg:text-3xl sm:text-4xl lg:text-5xl font-bold">Angular Core Docs</h1>
              </div>
            </div>
            <p className="text-xl text-blue-100 max-w-3xl">
              The Angular core documentation entry point for UX4G. Use it to understand the
              supported component API, installation flow, maturity levels, and how Angular aligns
              with the React reference implementation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            <InfoCard
              icon={Rocket}
              title="What to start with"
              body="Begin with the quick start and the package README, then move into the component API reference and parity notes."
            />
            <InfoCard
              icon={Shield}
              title="How to judge readiness"
              body="Treat the beta subset as the recommended production surface and keep the rest under active verification."
            />
            <InfoCard
              icon={GitBranch}
              title="How it stays aligned"
              body="Use the same semantic tokens, route contracts, and component API vocabulary as the React implementation."
            />
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {docLinks.map((item) => (
              <Link
                key={item.title}
                to={item.href}
                className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary hover:shadow-lg"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                  </div>
                  <Code className="mt-1 text-muted-foreground group-hover:text-primary" size={18} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-4 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="flex items-start gap-3">
              <Sparkles className="mt-1 text-[#FF9933]" size={20} />
              <div>
                <h2 className="text-lg font-bold text-foreground">Angular coverage today</h2>
                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  {[
                    "Button, Input, Select, Checkbox, Radio, Textarea",
                    "Field, Label, Hint Text, Error Text, Form wiring",
                    "Alert, Badge, Progress, Spinner, Card, Breadcrumb",
                    "Tabs, Pagination, Dialog, Autocomplete, Table",
                    "Date Picker, File Upload, OTP, Aadhaar, PAN",
                    "Accessibility, forms, and ControlValueAccessor support",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2 rounded-xl border border-border px-4 py-3">
                      <CheckCircle className="mt-0.5 text-green-600" size={16} />
                      <span className="text-sm text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function InfoCard({
  icon: Icon,
  title,
  body,
}: {
  icon: ElementType;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Icon size={24} />
      </div>
      <h2 className="text-xl font-bold text-foreground">{title}</h2>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
    </div>
  );
}
