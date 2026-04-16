import { Check, AlertCircle, Info, Download, Code, Package, Terminal, FileText, Users, Zap, GitBranch, HelpCircle, ExternalLink, ChevronRight, Copy, CheckCircle, Layers, Shield } from "lucide-react";

export default function InstallationGuide() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <div className="border-b border-border bg-gradient-to-b from-muted/40 via-background to-background">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 pt-8 pb-12">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(320px,0.8fr)] items-start">
            <div className="pt-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full text-sm text-muted-foreground shadow-sm mb-5">
                <Package size={16} />
                <span>Implementation Guide</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground max-w-3xl">
                Getting started with UX4G
              </h1>
              
              <p className="mt-5 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
                A premium onboarding guide for teams adopting UX4G in production. Choose the right framework path,
                install the design system cleanly, and move from first setup to a stable government-ready release.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a href="#before-you-start" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-muted/60">
                  Before you start
                </a>
                <a href="#quick-start" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-muted/60">
                  Quick start
                </a>
                <a href="#install" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-muted/60">
                  Install options
                </a>
                <a href="#support" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-muted/60">
                  Support
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">Quick path</p>
                  <h2 className="mt-2 text-2xl font-semibold text-foreground">What this guide covers</h2>
                </div>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  5 min start
                </span>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <HeroStat label="Frameworks" value="React, Angular, Web" />
                <HeroStat label="Best path" value="NPM install" />
                <HeroStat label="Use cases" value="New builds, migration" />
                <HeroStat label="Support" value="Checklist + escalation" />
              </div>

              <div className="mt-6 space-y-3 rounded-2xl border border-border bg-muted/30 p-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <Shield size={16} className="text-primary" />
                  Production-first guidance
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  The recommended path is package installation with tokens and component docs wired in early.
                  CDN usage is only for prototypes and should stay out of production services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-14 space-y-20">
        <BeforeYouStartSection />
        <GettingStartedSection />
        <WhoThisIsForSection />
        <InstallPathwaysSection />
        <ReactUsageSection />
        <AngularUsageSection />
        <WebComponentsUsageSection />
        <TokenUsageSection />
        <ComponentUsageSection />
        <StarterAppSection />
        <MigrationNotesSection />
        <ReleaseVersionSection />
        <ImplementationChecklistSection />
        <SupportEscalationSection />
      </div>
    </div>
  );
}

function GettingStartedSection() {
  return (
    <section id="quick-start">
      <SectionHeader
        title="Getting Started"
        description="The fastest path from first install to a production-ready foundation"
        icon={<Zap size={28} />}
      />

      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        <StepCard
          number="1"
          title="Choose your delivery path"
          description="Start with React, Angular, or Web Components depending on your stack and team workflow"
          icon={<Code size={32} />}
        />
        <StepCard
          number="2"
          title="Install the packages"
          description="Add the design tokens first, then bring in the framework package you actually need"
          icon={<Download size={32} />}
        />
        <StepCard
          number="3"
          title="Start building safely"
          description="Use the reference examples, accessibility defaults, and checklist before going live"
          icon={<Zap size={32} />}
        />
      </div>

      <div className="mt-8 rounded-2xl border border-emerald-200 dark:border-emerald-800 bg-emerald-50/70 dark:bg-emerald-950/30 p-6 shadow-sm">
        <div className="flex items-start gap-3">
          <CheckCircle className="text-[#138808] flex-shrink-0 mt-1" size={24} />
          <div>
            <h3 className="font-bold text-foreground mb-2">Ready in 5 Minutes</h3>
            <p className="text-sm text-muted-foreground">
              Most teams can integrate UX4G components into an existing project in under 5 minutes. 
              New projects can be bootstrapped using our starter templates in even less time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function BeforeYouStartSection() {
  return (
    <section id="before-you-start">
      <SectionHeader
        title="Before You Start"
        description="The essential decisions and prerequisites that strong design systems surface up front"
        icon={<CheckCircle size={28} />}
      />

      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <MiniInfoCard
          title="Prerequisites"
          eyebrow="Step zero"
          points={['Node.js 16+', 'npm or Yarn', 'A clean app shell', 'Access to the UX4G packages']}
        />
        <MiniInfoCard
          title="Choose a path"
          eyebrow="Framework first"
          points={['React for app teams', 'Angular for enterprise estates', 'Web Components for framework-neutral delivery', 'Use the same tokens everywhere']}
        />
        <MiniInfoCard
          title="Plan the rollout"
          eyebrow="Adoption"
          points={['Install tokens first', 'Start with one page or flow', 'Verify accessibility early', 'Remove legacy UI in stages']}
        />
        <MiniInfoCard
          title="Get help early"
          eyebrow="Support"
          points={['Use the checklist', 'Review migration notes', 'Escalate blockers before release', 'Keep a clear owner for upgrades']}
        />
      </div>
    </section>
  );
}

function MiniInfoCard({ title, eyebrow, points }: any) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">{eyebrow}</p>
      <h3 className="mt-2 text-lg font-semibold text-foreground">{title}</h3>
      <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
        {points.map((point: string) => (
          <li key={point} className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function HeroStat({ label, value }: any) {
  return (
    <div className="rounded-2xl border border-border bg-muted/30 p-4">
      <div className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">{label}</div>
      <div className="mt-2 text-sm font-semibold leading-snug text-foreground">{value}</div>
    </div>
  );
}

function StepCard({ number, title, description, icon }: any) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md">
      <div className="flex items-start justify-between mb-4">
        <div className="w-11 h-11 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
          {number}
        </div>
        <div className="text-primary">{icon}</div>
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
    </div>
  );
}

function WhoThisIsForSection() {
  return (
    <section id="audience">
      <SectionHeader
        title="Who This Is For"
        description="Understanding your role and what you need from this guide"
        icon={<Users size={28} />}
      />

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <AudienceCard
          title="Frontend Developers"
          description="You'll implement UX4G components in React or Angular applications"
          responsibilities={[
            'Install NPM packages and dependencies',
            'Import and configure components',
            'Integrate design tokens into your build process',
            'Follow component usage patterns and APIs'
          ]}
          color="blue"
        />

        <AudienceCard
          title="Tech Leads & Architects"
          description="You'll evaluate UX4G for adoption and plan the migration strategy"
          responsibilities={[
            'Review framework compatibility and requirements',
            'Plan migration from existing UI libraries',
            'Set up project structure and tooling',
            'Define team implementation standards'
          ]}
          color="purple"
        />

        <AudienceCard
          title="DevOps Engineers"
          description="You'll configure build pipelines and deployment processes"
          responsibilities={[
            'Configure NPM registry access',
            'Set up build tooling for design tokens',
            'Integrate UX4G into CI/CD pipelines',
            'Manage version updates and releases'
          ]}
          color="orange"
        />

        <AudienceCard
          title="Department IT Teams"
          description="You'll support government services adopting UX4G"
          responsibilities={[
            'Onboard vendor teams to UX4G standards',
            'Ensure compliance with design system usage',
            'Request new components or report issues',
            'Coordinate with UX4G governance team'
          ]}
          color="green"
        />
      </div>
    </section>
  );
}

function AudienceCard({ title, description, responsibilities, color }: any) {
  const colorClasses = {
    blue: 'border-sky-200 dark:border-sky-800 bg-sky-50/60 dark:bg-sky-950/30',
    purple: 'border-violet-200 dark:border-violet-800 bg-violet-50/60 dark:bg-violet-950/30',
    orange: 'border-amber-200 dark:border-amber-800 bg-amber-50/60 dark:bg-amber-950/30',
    green: 'border-emerald-200 dark:border-emerald-800 bg-emerald-50/60 dark:bg-emerald-950/30'
  };

  return (
    <div className={`rounded-2xl border ${colorClasses[color as keyof typeof colorClasses]} p-6 shadow-sm`}>
      <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground mb-4">{description}</p>
      <div className="border-t border-border/70 pt-4">
        <h4 className="font-semibold text-foreground mb-3 text-sm">You'll need to:</h4>
        <ul className="space-y-2">
          {responsibilities.map((item: string, index: number) => (
            <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
              <Check className="flex-shrink-0 mt-0.5 text-primary" size={16} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function InstallPathwaysSection() {
  return (
    <section id="install">
      <SectionHeader
        title="Installation Pathways"
        description="Choose the installation method that fits your project"
        icon={<Download size={28} />}
      />

      <div className="mt-8 space-y-5">
        {/* NPM Installation */}
        <InstallPathway
          title="NPM Package (Recommended)"
          description="Install directly from the NPM registry for production use"
          recommended={true}
        >
          <CodeBlock
            language="bash"
            code="npm install @ux4g/react @ux4g/tokens"
          />
          
          <div className="mt-4 rounded-xl border border-border bg-muted/30 p-4 text-sm">
            <strong className="text-foreground">Prerequisites:</strong> Node.js 16+ and npm 8+
          </div>
        </InstallPathway>

        {/* Yarn Installation */}
        <InstallPathway
          title="Yarn Package Manager"
          description="Alternative installation using Yarn"
          recommended={false}
        >
          <CodeBlock
            language="bash"
            code="yarn add @ux4g/react @ux4g/tokens"
          />
        </InstallPathway>

        {/* Starter Template */}
        <InstallPathway
          title="Starter Template (New Projects)"
          description="Bootstrap a new project with UX4G pre-configured"
          recommended={false}
        >
          <CodeBlock
            language="bash"
            code={`npx create-ux4g-app my-government-service
cd my-government-service
npm start`}
          />
          
          <div className="mt-4 grid gap-3 text-sm md:grid-cols-3">
            <div className="rounded-xl border border-border bg-background p-3">
              <div className="font-semibold text-foreground mb-1">React + TypeScript</div>
              <div className="text-muted-foreground">Pre-configured setup</div>
            </div>
            <div className="rounded-xl border border-border bg-background p-3">
              <div className="font-semibold text-foreground mb-1">Routing Included</div>
              <div className="text-muted-foreground">React Router v6</div>
            </div>
            <div className="rounded-xl border border-border bg-background p-3">
              <div className="font-semibold text-foreground mb-1">Sample Pages</div>
              <div className="text-muted-foreground">Common patterns</div>
            </div>
          </div>
        </InstallPathway>

        <InstallPathway
          title="Web Components / HTML"
          description="Use the framework-neutral package for cross-stack delivery and simple markup integration"
          recommended={false}
        >
          <CodeBlock
            language="bash"
            code="npm install @ux4g/web-components @ux4g/tokens"
          />

          <div className="mt-4 rounded-xl border border-border bg-muted/30 p-4 text-sm">
            <strong className="text-foreground">Best for:</strong> shared enterprise services, CMS-backed experiences, and framework-agnostic delivery.
          </div>
        </InstallPathway>

        {/* CDN (Not Recommended) */}
        <InstallPathway
          title="CDN Link (Not Recommended for Production)"
          description="Quick prototyping only - not suitable for production government services"
          recommended={false}
          warning={true}
        >
          <CodeBlock
            language="html"
            code={`<!-- Styles -->
<link rel="stylesheet" href="https://cdn.ux4g.gov.in/v1.0.0/ux4g.min.css">

<!-- Scripts -->
<script src="https://cdn.ux4g.gov.in/v1.0.0/ux4g.min.js"></script>`}
          />
          
          <div className="mt-4 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-lg p-4 text-sm flex items-start gap-2">
            <AlertCircle className="text-red-600 flex-shrink-0 mt-0.5" size={16} />
            <div className="text-red-800">
              <strong>Warning:</strong> CDN usage is not recommended for production government services. 
              Use NPM packages for better security, versioning, and offline resilience.
            </div>
          </div>
        </InstallPathway>
      </div>
    </section>
  );
}

function InstallPathway({ title, description, recommended, warning, children }: any) {
  return (
    <div className={`border-2 rounded-lg overflow-hidden ${
      warning ? 'border-red-200' : recommended ? 'border-green-300' : 'border-border'
    }`}>
      <div className={`p-6 border-b-2 ${
        warning ? 'bg-red-50 border-red-200' : recommended ? 'bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-800' : 'bg-background border-border'
      }`}>
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-1">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
          {recommended && (
            <span className="px-3 py-1 bg-green-700 text-white rounded-full text-xs font-semibold uppercase">
              Recommended
            </span>
          )}
        </div>
      </div>
      <div className="p-6">
        {children}
      </div>
    </div>
  );
}

function ReactUsageSection() {
  return (
    <section id="react">
      <SectionHeader
        title="React Usage Guide"
        description="Integrating UX4G components into React applications"
        icon={<Code size={28} />}
      />

      <div className="mt-8 space-y-8">
        {/* Installation */}
        <UsageStep
          step="1"
          title="Install React Package"
          description="Add the UX4G React component library to your project"
        >
          <CodeBlock
            language="bash"
            code="npm install @ux4g/react @ux4g/tokens"
          />
        </UsageStep>

        {/* Setup */}
        <UsageStep
          step="2"
          title="Import Styles"
          description="Add UX4G styles to your root component or index file"
        >
          <CodeBlock
            language="typescript"
            code={`// src/index.tsx or src/App.tsx
import '@ux4g/tokens/dist/styles.css';
import '@ux4g/react/dist/styles.css';`}
          />
        </UsageStep>

        {/* Component Usage */}
        <UsageStep
          step="3"
          title="Import and Use Components"
          description="Import components from the UX4G React library"
        >
          <CodeBlock
            language="typescript"
            code={`import { Button, TextInput, Alert } from '@ux4g/react';

function ApplicationForm() {
  return (
    <div>
      <TextInput 
        label="Full Name"
        placeholder="Enter your full name"
        required
      />
      
      <Button variant="primary" type="submit">
        Submit Application
      </Button>
      
      <Alert variant="info">
        Please ensure all information is accurate
      </Alert>
    </div>
  );
}`}
          />
        </UsageStep>

        {/* TypeScript Support */}
        <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
            <Info className="text-primary" size={20} />
            TypeScript Support
          </h3>
          <p className="text-sm text-muted-foreground mb-3">
            All UX4G React components include TypeScript definitions. You'll get full type safety 
            and IntelliSense support in VS Code and other TypeScript-aware editors.
          </p>
          <CodeBlock
            language="typescript"
            code={`import { ButtonProps } from '@ux4g/react';

const MyButton: React.FC<ButtonProps> = (props) => {
  // TypeScript will validate all props
  return <Button {...props} />;
};`}
          />
        </div>
      </div>
    </section>
  );
}

function AngularUsageSection() {
  return (
    <section id="angular">
      <SectionHeader
        title="Angular Usage Guide"
        description="Integrating UX4G components into Angular applications"
        icon={<Code size={28} />}
      />

      <div className="mt-8 space-y-8">
        {/* Installation */}
        <UsageStep
          step="1"
          title="Install Angular Package"
          description="Add the UX4G Angular module to your project"
        >
          <CodeBlock
            language="bash"
            code="npm install @ux4g/angular @ux4g/tokens"
          />
        </UsageStep>

        {/* Module Import */}
        <UsageStep
          step="2"
          title="Import UX4G Module"
          description="Add Ux4gModule to your Angular module imports"
        >
          <CodeBlock
            language="typescript"
            code={`// src/app/app.module.ts
import { Ux4gModule } from '@ux4g/angular';

@NgModule({
  imports: [
    BrowserModule,
    Ux4gModule,
    // ... other imports
  ],
  // ...
})
export class AppModule { }`}
          />
        </UsageStep>

        {/* Styles */}
        <UsageStep
          step="3"
          title="Add Styles to angular.json"
          description="Include UX4G stylesheets in your build configuration"
        >
          <CodeBlock
            language="json"
            code={`// angular.json
{
  "projects": {
    "your-app": {
      "architect": {
        "build": {
          "options": {
            "styles": [
              "node_modules/@ux4g/tokens/dist/styles.css",
              "node_modules/@ux4g/angular/dist/styles.css",
              "src/styles.css"
            ]
          }
        }
      }
    }
  }
}`}
          />
        </UsageStep>

        {/* Component Usage */}
        <UsageStep
          step="4"
          title="Use Components in Templates"
          description="Add UX4G components to your Angular templates"
        >
          <CodeBlock
            language="html"
            code={`<!-- application-form.component.html -->
<ux4g-text-input
  label="Full Name"
  placeholder="Enter your full name"
  [required]="true"
  [(ngModel)]="fullName">
</ux4g-text-input>

<ux4g-button 
  variant="primary" 
  type="submit"
  (click)="submitForm()">
  Submit Application
</ux4g-button>

<ux4g-alert variant="info">
  Please ensure all information is accurate
</ux4g-alert>`}
          />
        </UsageStep>

        {/* Version Compatibility */}
        <div className="rounded-2xl border border-violet-200 dark:border-violet-800 bg-violet-50/60 dark:bg-violet-950/30 p-6 shadow-sm">
          <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
            <Info className="text-primary" size={20} />
            Angular Version Compatibility
          </h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <div className="font-semibold text-foreground mb-2">Supported Versions:</div>
              <ul className="space-y-1 text-muted-foreground">
                <li>✓ Angular 15+</li>
                <li>✓ Angular 16+</li>
                <li>✓ Angular 17+ (recommended)</li>
              </ul>
            </div>
            <div>
              <div className="font-semibold text-foreground mb-2">Requirements:</div>
              <ul className="space-y-1 text-muted-foreground">
                <li>• TypeScript 4.9+</li>
                <li>• Node.js 16+</li>
                <li>• RxJS 7+</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WebComponentsUsageSection() {
  return (
    <section id="web-components">
      <SectionHeader
        title="Web Components Usage Guide"
        description="Framework-neutral delivery for shared services, CMS pages, and mixed-stack environments"
        icon={<Layers size={28} />}
      />

      <div className="mt-8 space-y-8">
        <UsageStep
          step="1"
          title="Install the Web Components package"
          description="Add UX4G web components and tokens to your project"
        >
          <CodeBlock
            language="bash"
            code="npm install @ux4g/web-components @ux4g/tokens"
          />
        </UsageStep>

        <UsageStep
          step="2"
          title="Register the elements"
          description="Load the web components bundle once in your application shell"
        >
          <CodeBlock
            language="html"
            code={`<!-- app shell or entry point -->
<script type="module" src="/node_modules/@ux4g/web-components/dist/ux4g.esm.js"></script>`}
          />
        </UsageStep>

        <UsageStep
          step="3"
          title="Use the HTML tags"
          description="Compose UI with the same UX4G design language across stacks"
        >
          <CodeBlock
            language="html"
            code={`<ux4g-button variant="primary">Submit application</ux4g-button>
<ux4g-text-input label="Full name" required></ux4g-text-input>
<ux4g-alert variant="info">Keep this information accurate</ux4g-alert>`}
          />
        </UsageStep>

        <div className="rounded-2xl border border-sky-200 dark:border-sky-800 bg-sky-50/60 dark:bg-sky-950/30 p-6 shadow-sm">
          <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
            <Shield className="text-primary" size={20} />
            Best fit for mixed environments
          </h3>
          <p className="text-sm text-muted-foreground">
            Web Components are ideal when the design system must be shared across frameworks, embedded in
            existing portals, or delivered as a consistent HTML-first layer.
          </p>
        </div>
      </div>
    </section>
  );
}

function TokenUsageSection() {
  return (
    <section id="tokens">
      <SectionHeader
        title="Design Token Usage"
        description="Using UX4G design tokens for consistent styling"
        icon={<Package size={28} />}
      />

      <div className="mt-8 space-y-8">
        {/* CSS Variables */}
        <div className="border-2 border-border rounded-lg p-6">
          <h3 className="text-xl font-bold text-foreground mb-4">CSS Variables (Recommended)</h3>
          <p className="text-sm text-muted-foreground mb-4">
            UX4G tokens are available as CSS custom properties. Import the stylesheet and use variables in your CSS.
          </p>
          
          <CodeBlock
            language="css"
            code={`.my-component {
  background-color: var(--ux4g-color-brand-primary);
  color: var(--ux4g-color-text-inverse);
  padding: var(--ux4g-spacing-4);
  border-radius: var(--ux4g-radius-md);
  font-size: var(--ux4g-font-size-base);
}`}
          />

          <div className="mt-4 bg-background border border-border rounded-lg p-4">
            <h4 className="font-semibold text-foreground mb-3 text-sm">Available Token Categories:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
              <div className="text-muted-foreground">• Colors</div>
              <div className="text-muted-foreground">• Spacing</div>
              <div className="text-muted-foreground">• Typography</div>
              <div className="text-muted-foreground">• Border Radius</div>
              <div className="text-muted-foreground">• Shadows</div>
              <div className="text-muted-foreground">• Breakpoints</div>
            </div>
          </div>
        </div>

        {/* JavaScript/TypeScript */}
        <div className="border-2 border-border rounded-lg p-6">
          <h3 className="text-xl font-bold text-foreground mb-4">JavaScript/TypeScript Tokens</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Access tokens programmatically for dynamic styling or styled-components.
          </p>
          
          <CodeBlock
            language="typescript"
            code={`import { tokens } from '@ux4g/tokens';

// Access tokens in JavaScript
const primaryColor = tokens.color.brand.primary; // "#000080"
const spacing4 = tokens.spacing[4]; // "16px"

// Use with styled-components
const StyledButton = styled.button\`
  background-color: \${tokens.color.brand.primary};
  padding: \${tokens.spacing[3]} \${tokens.spacing[6]};
  border-radius: \${tokens.radius.md};
\`;`}
          />
        </div>

        {/* Token Reference */}
        <div className="rounded-2xl border border-sky-200 dark:border-sky-800 bg-sky-50/60 dark:bg-sky-950/30 p-6 shadow-sm">
          <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
            <FileText className="text-primary" size={20} />
            Complete Token Reference
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            For a complete list of all available design tokens, values, and usage examples:
          </p>
          <a href="/foundations" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
            View Design Tokens Documentation <ChevronRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

function ComponentUsageSection() {
  return (
    <section id="components">
      <SectionHeader
        title="Component Usage Patterns"
        description="Best practices for using UX4G components"
        icon={<Layers size={28} />}
      />

      <div className="mt-8 space-y-6">
        {/* Composition Pattern */}
        <ComponentPattern
          title="Component Composition"
          description="Build complex UIs by combining simpler components"
        >
          <CodeBlock
            language="typescript"
            code={`import { Card, Button, TextInput, Alert } from '@ux4g/react';

function ApplicationCard() {
  return (
    <Card>
      <Card.Header>
        <h2>Passport Application</h2>
      </Card.Header>
      
      <Card.Body>
        <TextInput label="Full Name" required />
        <TextInput label="Email" type="email" required />
        
        <Alert variant="info">
          Processing time: 7-10 business days
        </Alert>
      </Card.Body>
      
      <Card.Footer>
        <Button variant="secondary">Save Draft</Button>
        <Button variant="primary">Submit</Button>
      </Card.Footer>
    </Card>
  );
}`}
          />
        </ComponentPattern>

        {/* Form Pattern */}
        <ComponentPattern
          title="Form Handling"
          description="Using UX4G form components with validation"
        >
          <CodeBlock
            language="typescript"
            code={`import { Form, TextInput, Button } from '@ux4g/react';
import { useState } from 'react';

function LoginForm() {
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation and submission logic
  };

  return (
    <Form onSubmit={handleSubmit}>
      <TextInput
        label="Email"
        type="email"
        required
        error={errors.email}
        helperText="Enter your registered email"
      />
      
      <TextInput
        label="Password"
        type="password"
        required
        error={errors.password}
      />
      
      <Button type="submit" variant="primary">
        Sign In
      </Button>
    </Form>
  );
}`}
          />
        </ComponentPattern>

        {/* Accessibility Pattern */}
        <div className="rounded-2xl border border-emerald-200 dark:border-emerald-800 bg-emerald-50/60 dark:bg-emerald-950/30 p-6 shadow-sm">
          <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
            <Shield className="text-primary" size={20} />
            Accessibility Built-In
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            All UX4G components include accessibility features by default. You don't need to add ARIA 
            attributes manually—they're already configured for WCAG 2.1 AA compliance.
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <Check className="text-[#138808] flex-shrink-0 mt-0.5" size={16} />
              <span>Semantic HTML elements</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-[#138808] flex-shrink-0 mt-0.5" size={16} />
              <span>Proper ARIA labels and roles</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-[#138808] flex-shrink-0 mt-0.5" size={16} />
              <span>Keyboard navigation support</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-[#138808] flex-shrink-0 mt-0.5" size={16} />
              <span>Screen reader optimized</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function ComponentPattern({ title, description, children }: any) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground mb-4">{description}</p>
      {children}
    </div>
  );
}

function StarterAppSection() {
  return (
    <section id="starter">
      <SectionHeader
        title="Starter Application Templates"
        description="Bootstrap new projects with pre-configured UX4G setups"
        icon={<Zap size={28} />}
      />

      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        <StarterTemplate
          title="React + TypeScript Starter"
          description="Full-featured React application with routing, form handling, and sample pages"
          features={[
            'React 18 + TypeScript',
            'React Router v6 configured',
            'Sample dashboard and form pages',
            'Authentication flow example',
            'Vite for fast development',
            'ESLint and Prettier configured'
          ]}
          command="npx create-ux4g-app my-app --template react-ts"
        />

        <StarterTemplate
          title="Angular Starter"
          description="Angular application with UX4G module pre-configured and sample components"
          features={[
            'Angular 17+ with TypeScript',
            'UX4G Angular module imported',
            'Sample routing and pages',
            'Reactive forms setup',
            'Angular CLI configuration',
            'Testing setup included'
          ]}
          command="npx create-ux4g-app my-app --template angular"
        />
      </div>

      <div className="mt-6 rounded-2xl border border-sky-200 dark:border-sky-800 bg-sky-50/60 dark:bg-sky-950/30 p-6 shadow-sm">
        <h3 className="font-bold text-foreground mb-3">What's Included?</h3>
        <div className="grid gap-4 text-sm md:grid-cols-3">
          <div>
            <div className="font-semibold text-foreground mb-2">Core Setup</div>
            <ul className="space-y-1 text-muted-foreground">
              <li>• UX4G components installed</li>
              <li>• Design tokens configured</li>
              <li>• Routing setup</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-foreground mb-2">Sample Pages</div>
            <ul className="space-y-1 text-muted-foreground">
              <li>• Dashboard</li>
              <li>• Form examples</li>
              <li>• Login page</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-foreground mb-2">Development Tools</div>
            <ul className="space-y-1 text-muted-foreground">
              <li>• Hot reload</li>
              <li>• Linting configured</li>
              <li>• Build scripts</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function StarterTemplate({ title, description, features, command }: any) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md">
      <div className="border-b border-border p-6">
        <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
      </div>
      
      <div className="p-6">
        <h4 className="font-semibold text-foreground mb-3 text-sm">Features:</h4>
        <ul className="space-y-2 mb-6">
          {features.map((feature: string, index: number) => (
            <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
              <Check className="text-[#138808] flex-shrink-0 mt-0.5" size={16} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        <div className="rounded-xl bg-slate-950 text-white p-4 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-muted-foreground">Installation Command</span>
            <button className="text-xs text-muted-foreground hover:text-white flex items-center gap-1">
              <Copy size={12} />
              Copy
            </button>
          </div>
          <code className="text-sm font-mono">{command}</code>
        </div>
      </div>
    </div>
  );
}

function MigrationNotesSection() {
  return (
    <section id="migration">
      <SectionHeader
        title="Migration Notes"
        description="Moving from existing UI libraries to UX4G"
        icon={<GitBranch size={28} />}
      />

      <div className="mt-8 grid gap-5 xl:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
        {/* Migration Strategy */}
        <div className="rounded-2xl border border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/30 p-5 shadow-sm">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">Recommended path</p>
              <h3 className="mt-2 text-lg font-semibold text-foreground">Incremental migration</h3>
            </div>
            <span className="rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold text-foreground">
              Low risk
            </span>
          </div>
          <div className="mt-4 space-y-3">
            <MigrationStep
              number="1"
              title="Incremental Adoption"
              description="Install UX4G alongside your existing UI library. Migrate one page or feature at a time."
            />
            <MigrationStep
              number="2"
              title="Component Mapping"
              description="Create a mapping document showing which existing components map to UX4G equivalents."
            />
            <MigrationStep
              number="3"
              title="Test Thoroughly"
              description="Test accessibility, functionality, and visual appearance after each migration."
            />
            <MigrationStep
              number="4"
              title="Remove Old Dependencies"
              description="Once fully migrated, remove old UI library dependencies to reduce bundle size."
            />
          </div>
        </div>

        {/* Common Migrations */}
        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          <div className="border-b border-border p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">Examples</p>
            <h3 className="mt-2 text-lg font-semibold text-foreground">Common library migrations</h3>
          </div>
          
          <div className="divide-y divide-border">
            <MigrationGuide
              from="Material UI"
              compatibility="High - Similar component API and prop patterns"
              notes={[
                'Replace <MuiButton> with <Button>',
                'Update theme tokens to UX4G design tokens',
                'Review color usage for government brand colors'
              ]}
            />
            <MigrationGuide
              from="Ant Design"
              compatibility="Medium - Some prop name differences"
              notes={[
                'Map Ant Design props to UX4G equivalents',
                'Update form validation patterns',
                'Review icon usage - UX4G uses Lucide React'
              ]}
            />
            <MigrationGuide
              from="Bootstrap"
              compatibility="Medium - CSS class-based vs component-based"
              notes={[
                'Replace Bootstrap classes with UX4G components',
                'Update grid system to UX4G spacing tokens',
                'Refactor form markup to use UX4G form components'
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function MigrationStep({ number, title, description }: any) {
  return (
    <div className="flex gap-3 rounded-xl border border-border bg-background/70 p-3">
      <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
        {number}
      </div>
      <div>
        <div className="font-semibold text-foreground text-sm">{title}</div>
        <div className="text-sm leading-relaxed text-muted-foreground">{description}</div>
      </div>
    </div>
  );
}

function MigrationGuide({ from, compatibility, notes }: any) {
  return (
    <div className="p-5">
      <div className="flex items-start justify-between mb-3">
        <h4 className="font-semibold text-foreground">From {from}</h4>
        <span className="px-2 py-1 bg-muted text-muted-foreground text-xs font-semibold rounded-full border border-border">
          {compatibility}
        </span>
      </div>
      <ul className="space-y-2">
        {notes.map((note: string, index: number) => (
          <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
            <ChevronRight className="flex-shrink-0 mt-0.5 text-primary" size={16} />
            <span>{note}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ReleaseVersionSection() {
  return (
    <section id="versions">
      <SectionHeader
        title="Release Version Awareness"
        description="Understanding UX4G versioning and staying up to date"
        icon={<GitBranch size={28} />}
      />

      <div className="mt-8 space-y-5">
        {/* Current Version */}
        <div className="rounded-2xl border border-emerald-200 dark:border-emerald-800 bg-emerald-50/50 dark:bg-emerald-950/30 p-5 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">Current stable release</p>
              <h3 className="mt-2 text-xl font-semibold text-foreground">v1.0.0</h3>
            </div>
            <span className="rounded-full bg-emerald-700 px-3 py-1 text-xs font-semibold text-white">
              Latest
            </span>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-3 text-sm">
            <VersionStat label="Released" value="April 9, 2024" />
            <VersionStat label="Components" value="30+ production-ready" />
            <VersionStat label="Stability" value="Production grade" />
          </div>
        </div>

        {/* Semantic Versioning */}
        <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">Versioning</p>
              <h3 className="mt-2 text-lg font-semibold text-foreground">Semantic versioning</h3>
            </div>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            UX4G follows semantic versioning (semver): MAJOR.MINOR.PATCH
          </p>
          
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            <VersionBand label="MAJOR" tone="rose" detail="Breaking changes requiring code updates" />
            <VersionBand label="MINOR" tone="amber" detail="New features, backward compatible" />
            <VersionBand label="PATCH" tone="emerald" detail="Bug fixes, no breaking changes" />
          </div>
        </div>

        {/* Update Notifications */}
        <div className="rounded-2xl border border-sky-200 dark:border-sky-800 bg-sky-50/50 dark:bg-sky-950/30 p-5 shadow-sm">
          <h3 className="flex items-center gap-2 text-base font-semibold text-foreground">
            <Info className="text-primary" size={20} />
            Staying Updated
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <Check className="text-primary flex-shrink-0 mt-0.5" size={16} />
              <span>
                Check for updates: <code className="px-2 py-0.5 bg-muted text-foreground rounded font-mono text-xs border border-border">npm outdated @ux4g/react</code>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-primary flex-shrink-0 mt-0.5" size={16} />
              <span>Subscribe to release notifications on GitHub</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-primary flex-shrink-0 mt-0.5" size={16} />
              <span>Review migration guides before major version updates</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function VersionStat({ label, value }: any) {
  return (
    <div className="rounded-xl border border-border bg-background/70 px-4 py-3">
      <div className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">{label}</div>
      <div className="mt-2 text-sm font-medium leading-snug text-foreground">{value}</div>
    </div>
  );
}

function VersionBand({ label, tone, detail }: any) {
  const tones = {
    rose: 'border-rose-200 bg-rose-50/70',
    amber: 'border-amber-200 dark:border-amber-800 bg-amber-50/70 dark:bg-amber-950/30',
    emerald: 'border-emerald-200 dark:border-emerald-800 bg-emerald-50/70'
  };

  return (
    <div className={`rounded-xl border ${tones[tone as keyof typeof tones]} p-4`}>
      <div className="font-semibold text-foreground">{label}</div>
      <div className="mt-2 text-sm leading-relaxed text-muted-foreground">{detail}</div>
    </div>
  );
}

function ImplementationChecklistSection() {
  return (
    <section id="checklist">
      <SectionHeader
        title="Implementation Checklist"
        description="Verify your UX4G integration is complete and production-ready"
        icon={<CheckCircle size={28} />}
      />

      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        {/* Setup Checklist */}
        <ChecklistCard
          title="Setup & Installation"
          items={[
            'NPM packages installed (@ux4g/react or @ux4g/angular)',
            'Design tokens package installed (@ux4g/tokens)',
            'Stylesheets imported in application',
            'TypeScript types working correctly',
            'Build process configured',
            'No console errors on startup'
          ]}
        />

        {/* Component Usage */}
        <ChecklistCard
          title="Component Usage"
          items={[
            'Components imported from UX4G package',
            'Props passed correctly with TypeScript validation',
            'Component composition patterns followed',
            'No custom styling overrides on core components',
            'Consistent usage across application',
            'Documentation consulted for each component'
          ]}
        />

        {/* Accessibility */}
        <ChecklistCard
          title="Accessibility Verification"
          items={[
            'Keyboard navigation tested on all pages',
            'Screen reader tested (NVDA or VoiceOver)',
            'Color contrast meets WCAG AA standards',
            'Focus indicators visible on all interactive elements',
            'Forms have proper labels and error messages',
            'ARIA attributes not manually overridden'
          ]}
        />

        {/* Production Readiness */}
        <ChecklistCard
          title="Production Readiness"
          items={[
            'Bundle size optimized (tree-shaking enabled)',
            'No development dependencies in production build',
            'Version pinned in package.json',
            'Error handling implemented',
            'Performance tested (Lighthouse score)',
            'Browser compatibility verified'
          ]}
        />
      </div>

      <div className="mt-6 rounded-2xl border border-emerald-200 dark:border-emerald-800 bg-emerald-50/60 dark:bg-emerald-950/30 p-6 shadow-sm">
        <div className="flex items-start gap-3">
          <CheckCircle className="text-[#138808] flex-shrink-0 mt-1" size={24} />
          <div>
            <h3 className="font-bold text-foreground mb-2">Ready for Production?</h3>
            <p className="text-sm text-muted-foreground">
              Once all checklist items are complete, your application is ready for production deployment. 
              Consider conducting a final accessibility audit and security review before launch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ChecklistCard({ title, items }: any) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <h3 className="font-bold text-foreground mb-4">{title}</h3>
      <ul className="space-y-3">
        {items.map((item: string, index: number) => (
          <li key={index} className="flex items-start gap-3">
            <input type="checkbox" className="w-5 h-5 border-2 border-border rounded mt-0.5 flex-shrink-0" />
            <span className="text-sm text-muted-foreground">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SupportEscalationSection() {
  return (
    <section id="support">
      <SectionHeader
        title="Support & Escalation"
        description="Getting help when you need it"
        icon={<HelpCircle size={28} />}
      />

      <div className="mt-8 space-y-5">
        <div className="rounded-2xl border border-sky-200 dark:border-sky-800 bg-sky-50/50 dark:bg-sky-950/30 p-5 shadow-sm">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">Help at a glance</p>
              <h3 className="mt-2 text-lg font-semibold text-foreground">Use self-service first, then escalate with context</h3>
            </div>
            <span className="rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold text-foreground">
              Production support
            </span>
          </div>
        </div>

        {/* Support Channels */}
        <div className="grid gap-4 lg:grid-cols-3">
          <SupportChannel
            icon={<FileText size={32} />}
            title="Documentation"
            description="Search our comprehensive guides and API references"
            action="Browse Docs"
            href="/components"
            color="blue"
          />
          
          <SupportChannel
            icon={<Users size={32} />}
            title="Community Forum"
            description="Ask questions and share solutions with other teams"
            action="Visit Forum"
            href="#forum"
            color="purple"
          />
          
          <SupportChannel
            icon={<HelpCircle size={32} />}
            title="GitHub Issues"
            description="Report bugs or request new features"
            action="Open Issue"
            href="#github"
            color="orange"
          />
        </div>

        {/* Escalation Path */}
        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          <div className="border-b border-border p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">Escalation path</p>
            <h3 className="mt-2 text-lg font-semibold text-foreground">Follow this sequence for technical support</h3>
          </div>
          
          <div className="p-5 space-y-3">
            <EscalationStep
              level="1"
              title="Self-Service Documentation"
              description="Check component docs, API reference, and troubleshooting guides"
              estimatedTime="5-15 minutes"
            />
            <EscalationStep
              level="2"
              title="Community Forum Search"
              description="Search existing forum threads for similar issues"
              estimatedTime="15-30 minutes"
            />
            <EscalationStep
              level="3"
              title="Post in Community Forum"
              description="Create a new thread with detailed issue description"
              estimatedTime="1-2 business days response"
            />
            <EscalationStep
              level="4"
              title="GitHub Issue (Bugs Only)"
              description="For confirmed bugs, open a GitHub issue with reproduction steps"
              estimatedTime="2-5 business days response"
            />
            <EscalationStep
              level="5"
              title="Direct Support (Government Teams Only)"
              description="Email ux4g-support@gov.in for critical production issues"
              estimatedTime="4 hours response (business hours)"
            />
          </div>
        </div>

        {/* Contact Information */}
        <div className="rounded-2xl border border-sky-200 dark:border-sky-800 bg-sky-50/50 dark:bg-sky-950/30 p-5 shadow-sm">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">Contact</p>
              <h3 className="mt-2 text-lg font-semibold text-foreground">Support contacts</h3>
            </div>
            <span className="rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold text-foreground">
              Mon-Fri, IST
            </span>
          </div>
          <div className="mt-4 grid gap-4 text-sm md:grid-cols-2">
            <div>
              <div className="font-semibold text-foreground mb-2">General Inquiries</div>
              <div className="text-muted-foreground">Email: info@ux4g.gov.in</div>
            </div>
            <div>
              <div className="font-semibold text-foreground mb-2">Technical Support</div>
              <div className="text-muted-foreground">Email: support@ux4g.gov.in</div>
            </div>
            <div>
              <div className="font-semibold text-foreground mb-2">Governance Team</div>
              <div className="text-muted-foreground">Email: governance@ux4g.gov.in</div>
            </div>
            <div>
              <div className="font-semibold text-foreground mb-2">Office Hours</div>
              <div className="text-muted-foreground">Mon-Fri, 9:00 AM - 5:00 PM IST</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SupportChannel({ icon, title, description, action, href, color }: any) {
  const colorClasses = {
    blue: 'border-sky-200 dark:border-sky-800 bg-sky-50/60 text-primary',
    purple: 'border-violet-200 dark:border-violet-800 bg-violet-50/60 text-primary',
    orange: 'border-amber-200 dark:border-amber-800 bg-amber-50/60 dark:bg-amber-950/30 text-primary'
  };

  return (
    <div className={`rounded-2xl border ${colorClasses[color as keyof typeof colorClasses]} p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md`}>
      <div className="mb-3">
        {icon}
      </div>
      <h3 className="font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground mb-4">{description}</p>
      <a href={href} className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:underline">
        {action} <ExternalLink size={14} />
      </a>
    </div>
  );
}

function EscalationStep({ level, title, description, estimatedTime }: any) {
  return (
    <div className="flex gap-4 rounded-xl border border-border bg-muted/20 p-4">
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
          {level}
        </div>
        {level !== "5" && <div className="w-0.5 h-full bg-border mt-2"></div>}
      </div>
      <div className="flex-1 pb-4">
        <h4 className="font-semibold text-foreground mb-1 text-sm">{title}</h4>
        <p className="text-sm leading-relaxed text-muted-foreground mb-2">{description}</p>
        <div className="text-xs text-muted-foreground">
          <strong>Est. Response Time:</strong> {estimatedTime}
        </div>
      </div>
    </div>
  );
}

// Reusable Components

function SectionHeader({ title, description, icon }: any) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-3">
        <div className="text-primary">{icon}</div>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">{title}</h2>
      </div>
      <p className="max-w-3xl text-base md:text-lg leading-relaxed text-muted-foreground">{description}</p>
    </div>
  );
}

function UsageStep({ step, title, description, children }: any) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      <div className="border-b border-border p-4 flex items-center gap-4">
        <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
          {step}
        </div>
        <div>
          <h3 className="font-bold text-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
      <div className="p-6">
        {children}
      </div>
    </div>
  );
}

function CodeBlock({ language, code }: any) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
      <div className="bg-slate-950 text-white p-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Terminal size={16} />
          <span className="text-xs font-mono">{language}</span>
        </div>
        <button className="text-xs text-slate-400 hover:text-white flex items-center gap-1">
          <Copy size={12} />
          Copy
        </button>
      </div>
      <pre className="bg-background p-4 overflow-x-auto">
        <code className="text-sm font-mono text-foreground whitespace-pre">{code}</code>
      </pre>
    </div>
  );
}
