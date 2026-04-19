import { Link } from "react-router";
import { ArrowRight, Package, AlertTriangle, CheckCircle2, BookOpen, Code, Zap, Shield, RefreshCw } from "lucide-react";

export default function MigrationGuides() {
  return (
    <div className="min-h-screen bg-card">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-saffron-50 via-white to-green-50 border-b-4 border-saffron-600 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-saffron-600 rounded-lg flex items-center justify-center">
              <RefreshCw className="text-white" size={24} />
            </div>
            <div>
              <div className="text-sm font-semibold text-saffron-700 uppercase tracking-wide">Resources</div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">Migration Guides</h1>
            </div>
          </div>
          <p className="text-xl text-muted-foreground mt-4 max-w-3xl">
            Comprehensive guides for migrating from existing UI libraries to the UX4G Design System
          </p>
          
          <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
            <MigrationStat label="Library Guides" value="6" />
            <MigrationStat label="Avg. Migration Time" value="2-4 weeks" />
            <MigrationStat label="Component Coverage" value="73+" />
            <MigrationStat label="Success Rate" value="95%" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Quick Navigation */}
        <section className="mb-12">
          <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6">
            <h2 className="font-bold text-foreground text-lg mb-4 flex items-center gap-2">
              <BookOpen size={20} className="text-blue-600" />
              Quick Navigation
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <QuickLink href="#popular-libraries" label="Popular Libraries" />
              <QuickLink href="#version-migration" label="Version Migration" />
              <QuickLink href="#framework-migration" label="Framework Migration" />
              <QuickLink href="#best-practices" label="Best Practices" />
              <QuickLink href="#troubleshooting" label="Troubleshooting" />
              <QuickLink href="#support" label="Get Support" />
            </div>
          </div>
        </section>

        {/* Migration Strategy */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Recommended Migration Strategy</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <StrategyCard
              title="Incremental Migration"
              recommended={true}
              timeline="2-6 months"
              effort="Medium"
              description="Migrate one page or feature at a time while maintaining existing functionality"
              pros={[
                'Lower risk of breaking changes',
                'Continuous delivery possible',
                'Team can learn incrementally',
                'Easy rollback if issues arise'
              ]}
              cons={[
                'Longer overall timeline',
                'Temporary dependency bloat',
                'May require bridge code'
              ]}
            />

            <StrategyCard
              title="Big Bang Migration"
              recommended={false}
              timeline="2-4 weeks"
              effort="High"
              description="Complete redesign and migration in one major release"
              pros={[
                'Fastest completion time',
                'Clean codebase immediately',
                'No dependency conflicts',
                'Consistent user experience'
              ]}
              cons={[
                'High risk of bugs',
                'Requires extensive testing',
                'Team must learn quickly',
                'No incremental rollout'
              ]}
            />

            <StrategyCard
              title="Parallel Development"
              recommended={false}
              timeline="3-8 months"
              effort="Very High"
              description="Build new UX4G version alongside existing application"
              pros={[
                'Zero downtime migration',
                'Extensive testing period',
                'Fallback to old version',
                'Ideal for critical services'
              ]}
              cons={[
                'Double maintenance burden',
                'Higher resource cost',
                'Complex deployment',
                'Longest timeline'
              ]}
            />
          </div>
        </section>

        {/* Popular Library Migrations */}
        <section id="popular-libraries" className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Popular Library Migrations</h2>
          <p className="text-muted-foreground mb-6">
            Step-by-step guides for migrating from the most common UI libraries to UX4G
          </p>

          <div className="grid gap-6">
            <LibraryMigrationCard
              from="Material-UI (MUI)"
              version="v5.x"
              compatibility="High"
              timeEstimate="2-4 weeks"
              complexity="Medium"
              description="Material-UI and UX4G share similar component APIs and prop patterns, making migration straightforward"
              highlights={[
                'Similar component structure and naming',
                'Both use TypeScript with strong typing',
                'Comparable theming approaches',
                'Most props map 1:1 or with minor changes'
              ]}
              caveats={[
                'Styling approach differs (CSS-in-JS vs Tailwind)',
                'Theme tokens need remapping',
                'Some MUI-specific components require custom implementation'
              ]}
              link="/resources/migration/material-ui"
            />

            <LibraryMigrationCard
              from="Ant Design (AntD)"
              version="v5.x"
              compatibility="Medium-High"
              timeEstimate="3-5 weeks"
              complexity="Medium"
              description="Ant Design has excellent component coverage but requires prop name adjustments"
              highlights={[
                'Comprehensive component library coverage',
                'Similar form handling patterns',
                'Good TypeScript support in both',
                'Enterprise-focused features align well'
              ]}
              caveats={[
                'Different prop naming conventions',
                'Less preset configuration in UX4G',
                'Some locale-specific adjustments needed',
                'Form validation approach differs'
              ]}
              link="/resources/migration/ant-design"
            />

            <LibraryMigrationCard
              from="Bootstrap"
              version="v5.x"
              compatibility="Medium"
              timeEstimate="4-6 weeks"
              complexity="Medium-High"
              description="Migration from utility-class approach to component-based architecture"
              highlights={[
                'Similar responsive grid system',
                'Familiar utility class concepts',
                'Component props replace data attributes',
                'Better accessibility out of the box'
              ]}
              caveats={[
                'Shift from classes to React components',
                'jQuery plugins need JS alternatives',
                'Different breakpoint system',
                'Custom Bootstrap themes require token remapping'
              ]}
              link="/resources/migration/bootstrap"
            />

            <LibraryMigrationCard
              from="Chakra UI"
              version="v2.x"
              compatibility="High"
              timeEstimate="2-3 weeks"
              complexity="Low-Medium"
              description="Both systems prioritize accessibility and developer experience"
              highlights={[
                'Similar component composition patterns',
                'Both emphasize accessibility-first design',
                'Comparable styling systems',
                'TypeScript support in both libraries'
              ]}
              caveats={[
                'Different theming token structure',
                'Color mode handling differs',
                'Some Chakra-specific utilities need alternatives',
                'Animation libraries differ'
              ]}
              link="/resources/migration/chakra-ui"
            />

            <LibraryMigrationCard
              from="Tailwind CSS"
              version="v3.x / v4.x"
              compatibility="Very High"
              timeEstimate="1-2 weeks"
              complexity="Low"
              description="UX4G components are built with Tailwind, making migration seamless"
              highlights={[
                'UX4G uses Tailwind CSS internally',
                'Utility classes work the same way',
                'Easy to adopt incrementally',
                'No prop learning curve for styling'
              ]}
              caveats={[
                'Need to adopt component patterns',
                'Custom utilities may need adjustment',
                'UX4G design tokens should be used',
                'Government-specific accessibility requirements'
              ]}
              link="/resources/migration/tailwind"
            />

            <LibraryMigrationCard
              from="Plain HTML/CSS"
              version="N/A"
              compatibility="Medium"
              timeEstimate="4-8 weeks"
              complexity="High"
              description="Modernize legacy government portals with React/Angular components"
              highlights={[
                'Major improvement in maintainability',
                'Built-in accessibility features',
                'Component reusability',
                'Modern development workflow'
              ]}
              caveats={[
                'Learning curve for React/Angular',
                'Requires build tooling setup',
                'State management considerations',
                'Testing infrastructure needed'
              ]}
              link="/resources/migration/plain-html"
            />
          </div>
        </section>

        {/* Version Migration */}
        <section id="version-migration" className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">UX4G Version Migration</h2>
          <p className="text-muted-foreground mb-6">
            Guides for upgrading between major versions of the UX4G Design System
          </p>

          <div className="space-y-4">
            <VersionMigrationCard
              from="v1.x"
              to="v2.x"
              breaking={true}
              releaseDate="April 2026"
              summary="Major update with improved token system, new components, and Angular 17 support"
              link="/resources/migration/v1-to-v2"
            />
            
            <VersionMigrationCard
              from="v2.x"
              to="v3.x"
              breaking={false}
              releaseDate="Q3 2026 (Planned)"
              summary="Minor updates with new patterns and enhanced accessibility features"
              link="/resources/migration/v2-to-v3"
            />
          </div>
        </section>

        {/* Framework Migration */}
        <section id="framework-migration" className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Framework Migration (Within UX4G)</h2>
          <p className="text-muted-foreground mb-6">
            Switching between React and Angular implementations of UX4G components
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <FrameworkMigrationCard
              from="React"
              to="Angular"
              description="Convert your UX4G React application to Angular while maintaining the same design system"
              keyPoints={[
                'Component API parity maintained',
                'Same design tokens and styles',
                'Similar prop/input naming',
                'Equivalent patterns available'
              ]}
              link="/resources/migration/react-to-angular"
            />

            <FrameworkMigrationCard
              from="Angular"
              to="React"
              description="Migrate from UX4G Angular to React implementation with minimal friction"
              keyPoints={[
                'Props match Angular @Input decorators',
                'Event handlers similar to @Output',
                'Hooks replace services',
                'Context API for dependency injection'
              ]}
              link="/resources/migration/angular-to-react"
            />
          </div>
        </section>

        {/* Best Practices */}
        <section id="best-practices" className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Migration Best Practices</h2>
          
          <div className="space-y-6">
            <BestPracticeCard
              title="Start with an Audit"
              icon={<CheckCircle2 className="text-green-600" size={24} />}
              description="Before beginning migration, thoroughly document your current implementation"
              steps={[
                'List all components currently in use',
                'Identify custom components and their usage',
                'Map components to UX4G equivalents',
                'Document components with no direct match',
                'Prioritize by usage frequency and business impact'
              ]}
            />

            <BestPracticeCard
              title="Set Up Parallel Dependencies"
              icon={<Package className="text-blue-600" size={24} />}
              description="Install UX4G alongside your existing library during transition"
              steps={[
                'Install @ux4g/react-core or @ux4g/angular-core',
                'Install @ux4g/tokens and @ux4g/styles',
                'Configure build tools for both libraries',
                'Set up alias imports to avoid conflicts',
                'Update tsconfig.json with proper paths'
              ]}
            />

            <BestPracticeCard
              title="Migrate Page by Page"
              icon={<Zap className="text-orange-600" size={24} />}
              description="Incremental migration reduces risk and allows for continuous delivery"
              steps={[
                'Choose a low-traffic page for first migration',
                'Update all components on that page to UX4G',
                'Test thoroughly before moving to next page',
                'Collect feedback from team and users',
                'Gradually increase migration pace'
              ]}
            />

            <BestPracticeCard
              title="Test Accessibility Thoroughly"
              icon={<Shield className="text-purple-600" size={24} />}
              description="Ensure WCAG 2.1 AA compliance is maintained throughout migration"
              steps={[
                'Run automated accessibility tests (axe, WAVE)',
                'Test with screen readers (NVDA, JAWS)',
                'Verify keyboard navigation works correctly',
                'Check color contrast ratios meet standards',
                'Test with users who have disabilities'
              ]}
            />
          </div>
        </section>

        {/* Troubleshooting */}
        <section id="troubleshooting" className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Common Migration Issues</h2>
          
          <div className="space-y-4">
            <TroubleshootingItem
              issue="Styling conflicts between old and new libraries"
              solution="Use CSS modules or scoped styles to isolate UX4G components. Consider using a CSS reset for migrated pages."
            />

            <TroubleshootingItem
              issue="Build size increases significantly"
              solution="Use tree-shaking and code splitting. Import only the components you need. Remove old library from migrated routes."
            />

            <TroubleshootingItem
              issue="TypeScript errors with component props"
              solution="Check UX4G TypeScript definitions. Update your tsconfig.json to include UX4G types. Use the Props API documentation."
            />

            <TroubleshootingItem
              issue="Breaking changes in form validation"
              solution="Review UX4G form patterns. Use Field component wrapper for consistent validation. Map old validation rules to new format."
            />

            <TroubleshootingItem
              issue="Missing components from old library"
              solution="Check Pattern Library for equivalent patterns. Build custom components using UX4G primitives. Submit feature request for new components."
            />
          </div>
        </section>

        {/* Get Support */}
        <section id="support" className="mb-12">
          <div className="bg-gradient-to-br from-saffron-50 to-green-50 border-2 border-saffron-200 rounded-lg p-4 sm:p-6 lg:p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Need Migration Support?</h2>
            <p className="text-muted-foreground mb-6">
              Our team is here to help you successfully migrate to UX4G. We offer various support channels for teams at different stages of adoption.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <SupportCard
                title="Community Support"
                description="Ask questions and share experiences with other government teams"
                action="Join Community"
                link="/contact"
              />

              <SupportCard
                title="Documentation"
                description="Comprehensive guides, examples, and API references"
                action="Browse Docs"
                link="/documentation"
              />

              <SupportCard
                title="Direct Support"
                description="Get personalized help from the UX4G core team"
                action="Contact Us"
                link="/contact"
              />
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section className="border-t-2 border-border pt-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Related Resources</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ResourceCard
              title="Getting Started"
              description="Installation and setup guide"
              link="/resources/getting-started"
            />

            <ResourceCard
              title="Component Library"
              description="Browse all 73+ components"
              link="/components"
            />

            <ResourceCard
              title="Pattern Library"
              description="Reusable interaction patterns"
              link="/pattern-library"
            />

            <ResourceCard
              title="Adoption Guide"
              description="Team onboarding and training"
              link="/governance/adoption"
            />
          </div>
        </section>
      </div>
    </div>
  );
}

// Helper Components

function MigrationStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-card rounded-lg p-4 border-2 border-border">
      <div className="text-2xl font-bold text-saffron-600">{value}</div>
      <div className="text-sm text-muted-foreground mt-1">{label}</div>
    </div>
  );
}

function QuickLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="flex items-center gap-2 text-blue-700 hover:text-blue-900 hover:underline font-medium"
    >
      <ArrowRight size={16} />
      <span>{label}</span>
    </a>
  );
}

interface StrategyCardProps {
  title: string;
  recommended: boolean;
  timeline: string;
  effort: string;
  description: string;
  pros: string[];
  cons: string[];
}

function StrategyCard({ title, recommended, timeline, effort, description, pros, cons }: StrategyCardProps) {
  return (
    <div className={`border-2 rounded-lg p-6 ${recommended ? 'border-green-500 bg-green-50 dark:bg-green-900/20' : 'border-border bg-card'}`}>
      <div className="flex items-start justify-between mb-3">
        <h3 className="font-bold text-foreground">{title}</h3>
        {recommended && (
          <span className="bg-green-600 text-white text-xs px-2 py-1 rounded font-semibold">RECOMMENDED</span>
        )}
      </div>

      <p className="text-sm text-muted-foreground mb-4">{description}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 pb-4 border-b border-border">
        <div>
          <div className="text-xs text-muted-foreground">Timeline</div>
          <div className="font-semibold text-foreground">{timeline}</div>
        </div>
        <div>
          <div className="text-xs text-muted-foreground">Effort Level</div>
          <div className="font-semibold text-foreground">{effort}</div>
        </div>
      </div>

      <div className="space-y-3">
        <div>
          <div className="text-xs font-semibold text-green-700 dark:text-green-400 mb-2">Pros</div>
          <ul className="space-y-1">
            {pros.map((pro, index) => (
              <li key={index} className="text-xs text-muted-foreground flex items-start gap-1">
                <CheckCircle2 size={12} className="text-green-600 flex-shrink-0 mt-0.5" />
                <span>{pro}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-xs font-semibold text-red-700 dark:text-red-400 mb-2">Cons</div>
          <ul className="space-y-1">
            {cons.map((con, index) => (
              <li key={index} className="text-xs text-muted-foreground flex items-start gap-1">
                <AlertTriangle size={12} className="text-red-600 flex-shrink-0 mt-0.5" />
                <span>{con}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

interface LibraryMigrationCardProps {
  from: string;
  version: string;
  compatibility: string;
  timeEstimate: string;
  complexity: string;
  description: string;
  highlights: string[];
  caveats: string[];
  link: string;
}

function LibraryMigrationCard({
  from,
  version,
  compatibility,
  timeEstimate,
  complexity,
  description,
  highlights,
  caveats,
  link
}: LibraryMigrationCardProps) {
  const compatibilityColor = 
    compatibility.includes('Very High') || compatibility === 'High' ? 'bg-green-100 text-green-700 border-green-300' :
    compatibility.includes('Medium') ? 'bg-orange-100 text-orange-700 border-orange-300' :
    'bg-red-100 text-red-700 border-red-300';

  return (
    <div className="border-2 border-border rounded-lg overflow-hidden hover:border-saffron-500 transition-colors">
      <div className="bg-background p-4 border-b-2 border-border">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-bold text-foreground">{from}</h3>
            <p className="text-sm text-muted-foreground">{version}</p>
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-semibold border-2 ${compatibilityColor}`}>
            {compatibility} Compatibility
          </span>
        </div>
      </div>

      <div className="p-6">
        <p className="text-muted-foreground mb-4">{description}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 pb-6 border-b border-border">
          <div>
            <div className="text-xs text-muted-foreground mb-1">Time Estimate</div>
            <div className="font-semibold text-foreground">{timeEstimate}</div>
          </div>
          <div>
            <div className="text-xs text-muted-foreground mb-1">Complexity</div>
            <div className="font-semibold text-foreground">{complexity}</div>
          </div>
        </div>

        <div className="space-y-4 mb-6">
          <div>
            <div className="text-sm font-semibold text-green-700 dark:text-green-400 mb-2">Highlights</div>
            <ul className="space-y-1">
              {highlights.map((highlight, index) => (
                <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold text-orange-700 mb-2">Important Considerations</div>
            <ul className="space-y-1">
              {caveats.map((caveat, index) => (
                <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                  <AlertTriangle size={14} className="text-orange-600 flex-shrink-0 mt-0.5" />
                  <span>{caveat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Link
          to={link}
          className="inline-flex items-center gap-2 bg-saffron-600 text-white px-4 py-2 rounded-lg hover:bg-saffron-700 font-semibold transition-colors"
        >
          <span>View Migration Guide</span>
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}

interface VersionMigrationCardProps {
  from: string;
  to: string;
  breaking: boolean;
  releaseDate: string;
  summary: string;
  link: string;
}

function VersionMigrationCard({ from, to, breaking, releaseDate, summary, link }: VersionMigrationCardProps) {
  return (
    <div className="border-2 border-border rounded-lg p-6 hover:border-saffron-500 transition-colors">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="font-bold text-foreground">
            UX4G {from} → {to}
          </h3>
          <p className="text-sm text-muted-foreground">{releaseDate}</p>
        </div>
        {breaking && (
          <span className="bg-red-100 text-red-700 dark:text-red-400 border-2 border-red-300 px-3 py-1 rounded-full text-xs font-semibold">
            BREAKING CHANGES
          </span>
        )}
      </div>

      <p className="text-muted-foreground mb-4">{summary}</p>

      <Link
        to={link}
        className="inline-flex items-center gap-2 text-saffron-700 hover:text-saffron-900 font-semibold"
      >
        <span>Read Migration Guide</span>
        <ArrowRight size={16} />
      </Link>
    </div>
  );
}

interface FrameworkMigrationCardProps {
  from: string;
  to: string;
  description: string;
  keyPoints: string[];
  link: string;
}

function FrameworkMigrationCard({ from, to, description, keyPoints, link }: FrameworkMigrationCardProps) {
  return (
    <div className="border-2 border-border rounded-lg p-6 hover:border-saffron-500 transition-colors">
      <h3 className="font-bold text-foreground mb-2">
        {from} → {to}
      </h3>
      <p className="text-muted-foreground mb-4">{description}</p>

      <div className="mb-4">
        <div className="text-sm font-semibold text-foreground mb-2">Key Points</div>
        <ul className="space-y-1">
          {keyPoints.map((point, index) => (
            <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
              <CheckCircle2 size={14} className="text-green-600 flex-shrink-0 mt-0.5" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>

      <Link
        to={link}
        className="inline-flex items-center gap-2 text-saffron-700 hover:text-saffron-900 font-semibold"
      >
        <span>View Guide</span>
        <ArrowRight size={16} />
      </Link>
    </div>
  );
}

interface BestPracticeCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  steps: string[];
}

function BestPracticeCard({ title, icon, description, steps }: BestPracticeCardProps) {
  return (
    <div className="border-2 border-border rounded-lg p-6">
      <div className="flex items-start gap-4 mb-4">
        <div className="flex-shrink-0">{icon}</div>
        <div>
          <h3 className="font-bold text-foreground mb-1">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>

      <div className="ml-10">
        <ol className="space-y-2">
          {steps.map((step, index) => (
            <li key={index} className="text-sm text-muted-foreground flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-saffron-600 text-white rounded-full flex items-center justify-center text-xs font-semibold">
                {index + 1}
              </span>
              <span className="pt-0.5">{step}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

function TroubleshootingItem({ issue, solution }: { issue: string; solution: string }) {
  return (
    <div className="border-2 border-border rounded-lg p-4">
      <div className="flex items-start gap-3">
        <AlertTriangle className="text-orange-600 flex-shrink-0" size={20} />
        <div>
          <h4 className="font-semibold text-foreground mb-1">{issue}</h4>
          <p className="text-sm text-muted-foreground">{solution}</p>
        </div>
      </div>
    </div>
  );
}

function SupportCard({ title, description, action, link }: { title: string; description: string; action: string; link: string }) {
  return (
    <div className="bg-card border-2 border-border rounded-lg p-6">
      <h3 className="font-bold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground mb-4">{description}</p>
      <Link
        to={link}
        className="inline-flex items-center gap-2 text-saffron-700 hover:text-saffron-900 font-semibold"
      >
        <span>{action}</span>
        <ArrowRight size={16} />
      </Link>
    </div>
  );
}

function ResourceCard({ title, description, link }: { title: string; description: string; link: string }) {
  return (
    <Link
      to={link}
      className="border-2 border-border rounded-lg p-4 hover:border-saffron-500 transition-colors group"
    >
      <h3 className="font-bold text-foreground mb-1 group-hover:text-saffron-700">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </Link>
  );
}
