import { Link } from "react-router";
import { BookOpen, Code, Layers, GitBranch, CheckCircle, ArrowRight, Box, FileText, BarChart3, Map } from "lucide-react";

const DOCS = [
  { icon: BookOpen, title: "Overview", desc: "Architecture, design principles, and package structure", path: "/docs/angular/overview", color: "#2563eb" },
  { icon: Code, title: "Quick Start", desc: "Install, import, and use your first Angular component", path: "/docs/angular/quick-start", color: "#16a34a" },
  { icon: Layers, title: "API Reference", desc: "Complete props, inputs, outputs, and methods for all 73 components", path: "/docs/angular/api-reference", color: "#9333ea" },
  { icon: Box, title: "Component Patterns", desc: "Standalone components, ControlValueAccessor, reactive forms", path: "/docs/angular/component-patterns", color: "#ea580c" },
  { icon: GitBranch, title: "React ↔ Angular Parity", desc: "Side-by-side comparison of React and Angular implementations", path: "/docs/angular/parity", color: "#0891b2" },
  { icon: BarChart3, title: "Framework Comparison", desc: "Feature matrix across React, Angular, and Web Components", path: "/docs/angular/framework-comparison", color: "#db2777" },
  { icon: CheckCircle, title: "Verification & QA", desc: "Component verification status and testing approach", path: "/docs/angular/verification", color: "#16a34a" },
  { icon: Map, title: "Roadmap", desc: "Planned features, upcoming components, and timeline", path: "/docs/angular/roadmap", color: "#f59e0b" },
  { icon: FileText, title: "Package Structure", desc: "File organization, build output, and module exports", path: "/docs/angular/package-structure", color: "#64748b" },
];

export default function AngularDocsPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card border-b-2 border-border">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-14 h-14 bg-red-600 rounded flex items-center justify-center">
              <span className="text-white text-2xl font-bold">A</span>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">@ux4g/angular-core</div>
              <h1 className="text-3xl font-bold text-foreground">Angular Documentation</h1>
            </div>
          </div>
          <p className="text-muted-foreground max-w-3xl">
            Complete documentation for the UX4G Angular component library — 73 standalone components
            with full accessibility, reactive forms support, and design token integration.
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

        <section className="mt-12 bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-800 rounded-lg p-8">
          <h2 className="font-bold text-foreground text-xl mb-4">Quick Install</h2>
          <pre className="bg-card border-2 border-border rounded p-4 text-sm font-mono overflow-x-auto mb-4">
{`npm install @ux4g/angular-core @ux4g/tokens @ux4g/styles`}
          </pre>
          <pre className="bg-card border-2 border-border rounded p-4 text-sm font-mono overflow-x-auto">
{`// app.component.ts
import { ButtonComponent } from '@ux4g/angular-core';

@Component({
  standalone: true,
  imports: [ButtonComponent],
  template: \`<ux4g-button variant="primary">Submit</ux4g-button>\`
})
export class AppComponent {}`}
          </pre>
        </section>
      </div>
    </div>
  );
}
