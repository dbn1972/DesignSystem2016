import type { ElementType } from "react";
import { ArrowRight, Code, Globe, Package, Shield, Sparkles } from "lucide-react";
import { Link } from "react-router";

const webComponentLinks = [
  {
    title: "Web Components Demo",
    description: "See the live framework-agnostic demo that showcases the runtime package.",
    href: "/web-components",
  },
  {
    title: "Component API Reference",
    description: "Use the canonical component specs for props, states, and accessibility notes.",
    href: "/resources/component-specs",
  },
  {
    title: "Getting Started",
    description: "Install the styles and package and wire the first custom element in minutes.",
    href: "/resources/getting-started",
  },
  {
    title: "Starter Kit",
    description: "Download and adapt the production-ready starter templates.",
    href: "/resources/starter-kit",
  },
];

export default function WebComponentsDocs() {
  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-to-br from-[#000080] via-[#000060] to-[#000080] text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <Globe size={40} className="text-[#FF9933]" />
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-blue-200">@ux4g/web-components</p>
                <h1 className="text-4xl lg:text-3xl sm:text-4xl lg:text-5xl font-bold">Web Components Docs</h1>
              </div>
            </div>
            <p className="text-xl text-blue-100 max-w-3xl">
              Framework-agnostic UX4G documentation for the native custom element package. Use this
              page to understand the package summary, quick start, and how the Web Components layer
              mirrors the React and Angular contracts.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            <InfoCard
              icon={Package}
              title="What it gives you"
              body="Standards-based custom elements that work in vanilla HTML, React, Angular, Vue, and other frameworks."
            />
            <InfoCard
              icon={Shield}
              title="Why it matters"
              body="It keeps the UX4G interaction model consistent across frameworks while minimizing framework-specific code."
            />
            <InfoCard
              icon={Code}
              title="How to adopt"
              body="Install the package, include the styles, and use the same semantic inputs and attributes across stacks."
            />
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {webComponentLinks.map((item) => (
              <Link
                key={item.title}
                to={item.href}
                className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary hover:shadow-lg"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                  </div>
                  <ArrowRight className="text-muted-foreground group-hover:text-primary transition-colors" size={18} />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-border bg-card p-6">
            <div className="flex items-start gap-3">
              <Sparkles className="mt-1 text-[#FF9933]" size={20} />
              <div>
                <h2 className="text-2xl font-bold text-foreground">Quick start</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Install the package alongside the shared styles and use the custom elements directly
                  in React, Angular, or plain HTML. The React package page and the Web Components demo
                  both point to the same underlying component vocabulary.
                </p>
              </div>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <Link
                to="/resources/getting-started"
                className="rounded-xl border border-border px-4 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                Installation guide
              </Link>
              <Link
                to="/web-components"
                className="rounded-xl border border-border px-4 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                Open demo
              </Link>
              <Link
                to="/resources/component-specs"
                className="rounded-xl border border-border px-4 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                Component specs
              </Link>
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
