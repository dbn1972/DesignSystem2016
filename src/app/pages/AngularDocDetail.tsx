import { useParams, Link } from "react-router";
import { ArrowLeft } from "lucide-react";

const DOCS: Record<string, { title: string; file: string; content: string }> = {
  overview: { title: "Angular Overview", file: "OVERVIEW.md", content: `The @ux4g/angular-core package provides 73 standalone Angular 18 components for the UX4G Government of India Design System.\n\nAll components use:\n• Standalone component architecture (no NgModule required)\n• ChangeDetectionStrategy.OnPush for performance\n• ViewEncapsulation.None for consistent styling\n• Full TypeScript strict mode\n• WCAG 2.1 Level AA accessibility\n\nComponent categories: Form (17), Feedback (6), Navigation (11), Data Display (12), Layout (9), Overlay (3), Government-specific (5), Advanced (10).` },
  "quick-start": { title: "Angular Quick Start", file: "QUICK_START.md", content: `## Installation\n\nnpm install @ux4g/angular-core @ux4g/tokens @ux4g/styles\n\n## Import a Component\n\nimport { ButtonComponent } from '@ux4g/angular-core';\n\n@Component({\n  standalone: true,\n  imports: [ButtonComponent],\n  template: \`<ux4g-button variant="primary">Click me</ux4g-button>\`\n})\nexport class MyComponent {}\n\n## Import Tokens\n\nAdd to your styles.css:\n@import '@ux4g/tokens/dist/tokens.css';\n@import '@ux4g/styles/dist/styles.css';` },
  "api-reference": { title: "API Reference", file: "COMPONENT_API_REFERENCE.md", content: `Complete API reference for all 73 Angular components.\n\nEach component documents:\n• @Input() properties with types and defaults\n• @Output() events with payload types\n• Content projection slots\n• CSS custom properties for theming\n• Accessibility attributes\n\nSee the full reference in the package: src/app/angular-core-package/COMPONENT_API_REFERENCE.md` },
  "component-patterns": { title: "Component Patterns", file: "COMPONENT_PATTERNS.md", content: `Angular component patterns used across UX4G:\n\n• Standalone components — no NgModule needed\n• ControlValueAccessor — for reactive forms integration\n• OnPush change detection — for performance\n• Content projection — via ng-content and slots\n• BEM CSS naming — ux4g-component__element--modifier\n• classNames utility — for dynamic class composition\n\nSee: src/app/angular-core-package/COMPONENT_PATTERNS.md` },
  parity: { title: "React ↔ Angular Parity", file: "REACT_ANGULAR_PARITY.md", content: `React and Angular component parity status:\n\n• 73 Angular components matching React core\n• Identical prop/input names where possible\n• Same variant and size vocabulary\n• Same accessibility patterns\n• Same design token usage\n\nKey differences:\n• React uses forwardRef, Angular uses ViewChild\n• React uses className, Angular uses [class]\n• React uses onChange, Angular uses (change)\n\nSee: src/app/angular-core-package/REACT_ANGULAR_PARITY.md` },
  "framework-comparison": { title: "Framework Comparison", file: "FRAMEWORK_COMPARISON.md", content: `Feature comparison across React, Angular, and Web Components:\n\n| Feature | React | Angular | Web Components |\n|---------|-------|---------|----------------|\n| Components | 36 | 73 | 73 |\n| Service Flows | 18 | 21 | 18 |\n| Forms | React Hook Form | Reactive Forms | Native |\n| Routing | React Router | Angular Router | Custom Events |\n| Theming | Tailwind + CSS vars | SCSS + CSS vars | CSS vars |\n| Testing | Vitest + RTL | Jasmine + TestBed | — |\n\nSee: src/app/angular-core-package/FRAMEWORK_COMPARISON.md` },
  verification: { title: "Verification & QA", file: "COMPONENT_VERIFICATION.md", content: `Component verification status:\n\n• All 73 components have TypeScript strict mode\n• All components have accessibility attributes\n• All components support light/dark mode\n• All components use design tokens\n\nTesting approach:\n• Unit tests with Jasmine/TestBed\n• Visual regression with Playwright\n• Accessibility audits with axe-core\n\nSee: src/app/angular-core-package/COMPONENT_VERIFICATION.md` },
  roadmap: { title: "Roadmap", file: "ROADMAP.md", content: `Angular package roadmap:\n\n✅ Phase 1: Core form components (17)\n✅ Phase 2: Feedback & navigation (17)\n✅ Phase 3: Data display & layout (21)\n✅ Phase 4: Overlay & advanced (18)\n✅ Phase 5: Service compositions (21)\n\n🔜 Next:\n• Storybook integration\n• npm publish\n• Angular 19 support\n• Schematics for ng add\n\nSee: src/app/angular-core-package/ROADMAP.md` },
  "package-structure": { title: "Package Structure", file: "PACKAGE_STRUCTURE.md", content: `@ux4g/angular-core package structure:\n\nsrc/lib/\n  button/\n    button.component.ts\n    button.component.css\n    button.component.spec.ts\n  input/\n    ...\n  (73 component directories)\n\nsrc/types/\n  common.types.ts\n\nsrc/utils/\n  class-names.ts\n\nsrc/public-api.ts  — barrel exports\n\nSee: src/app/angular-core-package/PACKAGE_STRUCTURE.md` },
};

export default function AngularDocDetail() {
  const { slug } = useParams<{ slug: string }>();
  const doc = DOCS[slug || ""];

  if (!doc) {
    return (
      <div className="min-h-screen bg-background p-12">
        <div className="max-w-3xl mx-auto bg-card border-2 border-border rounded-lg p-8">
          <h1 className="text-xl font-bold text-foreground mb-2">Page Not Found</h1>
          <p className="text-muted-foreground mb-4">The Angular documentation page "{slug}" does not exist.</p>
          <Link to="/docs/angular" className="text-primary font-bold hover:underline">← Back to Angular Docs</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card border-b-2 border-border">
        <div className="max-w-[1000px] mx-auto px-8 py-6">
          <Link to="/docs/angular" className="text-sm text-primary font-bold hover:underline flex items-center gap-1 mb-3">
            <ArrowLeft size={14} /> Angular Documentation
          </Link>
          <h1 className="text-2xl font-bold text-foreground">{doc.title}</h1>
          <p className="text-sm text-muted-foreground mt-1">Source: {doc.file}</p>
        </div>
      </header>
      <main className="max-w-[1000px] mx-auto px-8 py-8">
        <div className="bg-card border-2 border-border rounded-lg p-8">
          <pre className="whitespace-pre-wrap text-sm text-foreground leading-relaxed font-sans">{doc.content}</pre>
        </div>
      </main>
    </div>
  );
}
