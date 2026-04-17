import { Link } from "react-router";
import { BookOpen, Code, Layers, Box, CheckCircle, ArrowRight, Globe, FileText, Zap } from "lucide-react";

const DOCS = [
  { icon: BookOpen, title: "Overview", desc: "Framework-agnostic Web Components for any HTML page or framework", path: "/docs/web-components/overview", color: "#2563eb" },
  { icon: Code, title: "Quick Start", desc: "Add UX4G components to any project with a single script tag", path: "/docs/web-components/quick-start", color: "#16a34a" },
  { icon: Layers, title: "API Reference", desc: "Attributes, events, slots, and methods for all 73 components", path: "/docs/web-components/api-reference", color: "#9333ea" },
  { icon: Zap, title: "Service Components", desc: "18 service compositions for complete government service flows", path: "/docs/web-components/services", color: "#ea580c" },
  { icon: Globe, title: "Framework Integration", desc: "Using UX4G Web Components in React, Angular, Vue, and vanilla JS", path: "/docs/web-components/integration", color: "#0891b2" },
  { icon: Box, title: "Component Contract", desc: "Shared vocabulary: variants, sizes, events, and slots", path: "/docs/web-components/contract", color: "#db2777" },
  { icon: CheckCircle, title: "Accessibility", desc: "ARIA attributes, keyboard navigation, and screen reader support", path: "/docs/web-components/accessibility", color: "#16a34a" },
  { icon: FileText, title: "Theming & Tokens", desc: "CSS custom properties for light/dark mode and brand customization", path: "/docs/web-components/theming", color: "#f59e0b" },
];

export default function WebComponentsDocsPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card border-b-2 border-border">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-14 h-14 bg-blue-600 rounded flex items-center justify-center">
              <Globe size={28} className="text-white" />
            </div>
            <div>
              <div className="text-sm text-muted-foreground">@ux4g/web-components</div>
              <h1 className="text-3xl font-bold text-foreground">Web Components Documentation</h1>
            </div>
          </div>
          <p className="text-muted-foreground max-w-3xl">
            Framework-agnostic Web Components for the UX4G Design System — 73 UI primitives plus
            18 service compositions, usable in any HTML page or JavaScript framework.
          </p>
        </div>
      </header>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DOCS.map((doc) => (
            <Link
              key={doc.path}
              to={doc.path}
              className="bg-card border-2 border-border rounded-lg p-6 hover:border-primary hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: doc.color + '20' }}>
                <doc.icon size={24} style={{ color: doc.color }} />
              </div>
              <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {doc.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">{doc.desc}</p>
              <span className="text-sm font-bold text-primary flex items-center gap-1">
                Read more <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>

        <section className="mt-12 bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-8">
          <h2 className="font-bold text-foreground text-xl mb-4">Quick Start — Any HTML Page</h2>
          <pre className="bg-card border-2 border-border rounded p-4 text-sm font-mono overflow-x-auto mb-4">
{`<script type="module" src="https://unpkg.com/@ux4g/web-components"></script>
<link rel="stylesheet" href="https://unpkg.com/@ux4g/tokens/dist/tokens.css" />`}
          </pre>
          <pre className="bg-card border-2 border-border rounded p-4 text-sm font-mono overflow-x-auto">
{`<ux4g-button variant="primary" size="md">
  Submit Application
</ux4g-button>

<ux4g-input label="Full Name" required placeholder="Enter your name"></ux4g-input>

<ux4g-alert variant="success">Your application has been submitted.</ux4g-alert>`}
          </pre>
        </section>
      </div>
    </div>
  );
}
