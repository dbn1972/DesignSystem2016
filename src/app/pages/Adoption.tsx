import { CheckCircle, Circle, Users, Code, Palette, Eye, Building2, HelpCircle, ArrowRight, ChevronRight, FileText, Zap, Shield, BookOpen, MessageCircle, Mail, Github, ExternalLink, AlertCircle, CheckSquare, TrendingUp } from "lucide-react";

export default function Adoption() {
  return (
    <div className="min-h-screen bg-card">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#000080] via-[#000070] to-[#000050] text-white">
        <div className="max-w-7xl mx-auto px-8 py-16">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/10 rounded-full text-sm mb-6">
              <TrendingUp size={16} />
              <span>Adoption & Onboarding</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Start Using UX4G
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              This guide helps your team adopt the UX4G Design System, whether you're building a new service 
              or migrating an existing one. Follow the onboarding path for your role, access the resources you need, 
              and get your service to production with confidence.
            </p>

            <div className="flex gap-4">
              <a href="#checklist" className="px-6 py-3 bg-card text-primary rounded-lg font-semibold hover:bg-blue-50 dark:bg-blue-900/20 transition-colors">
                View Onboarding Checklist
              </a>
              <a href="#support" className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-card/10 transition-colors">
                Get Support
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-16 space-y-24">
        <WhyAdoptSection />
        <OnboardingChecklistSection />
        <MigrationPathSection />
        <TeamRolesSection />
        <DesignOnboardingSection />
        <DeveloperOnboardingSection />
        <AccessibilityOnboardingSection />
        <VendorOnboardingSection />
        <ConformanceExpectationsSection />
        <SupportChannelsSection />
        <ReferenceExamplesSection />
      </div>
    </div>
  );
}

function WhyAdoptSection() {
  return (
    <section id="why">
      <SectionHeader
        title="Why Adopt UX4G"
        description="Practical benefits for your team and your service"
        icon={<Zap size={28} />}
      />

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <BenefitCard
          icon={<Zap size={24} />}
          title="Faster Development"
          description="Pre-built, production-ready components reduce development time by 40-60%"
          details={[
            'Skip custom UI development',
            'Ready-to-use form patterns',
            'No accessibility implementation needed',
            'Tested across browsers and devices'
          ]}
          color="blue"
        />

        <BenefitCard
          icon={<Shield size={24} />}
          title="Built-in Compliance"
          description="WCAG 2.1 AA accessibility and government brand standards included"
          details={[
            'Meets accessibility requirements',
            'Government of India brand alignment',
            'Security-reviewed components',
            'Regular compliance audits'
          ]}
          color="green"
        />

        <BenefitCard
          icon={<Users size={24} />}
          title="Consistent User Experience"
          description="Citizens get familiar, predictable experiences across all services"
          details={[
            'Unified design language',
            'Reduces citizen learning curve',
            'Improves service credibility',
            'Cross-department consistency'
          ]}
          color="purple"
        />

        <BenefitCard
          icon={<TrendingUp size={24} />}
          title="Lower Total Cost"
          description="Reduce design and development costs, maintenance burden, and training time"
          details={[
            'Shared components across departments',
            'Reduced vendor dependency',
            'Lower maintenance overhead',
            'Faster onboarding for new teams'
          ]}
          color="orange"
        />
      </div>

      <div className="mt-8 bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6">
        <h3 className="font-bold text-foreground mb-3">Time to Value</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-2">5 min</div>
            <div className="text-sm text-muted-foreground">Install and start building</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-2">1 day</div>
            <div className="text-sm text-muted-foreground">Designer onboarded</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-2">3 days</div>
            <div className="text-sm text-muted-foreground">Developer productive</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BenefitCard({ icon, title, description, details, color }: any) {
  const colorClasses = {
    blue: 'border-blue-200 dark:border-blue-800 bg-blue-50 text-blue-600',
    green: 'border-green-200 dark:border-green-800 bg-green-50 text-green-600',
    purple: 'border-purple-200 dark:border-purple-800 bg-purple-50 text-purple-600',
    orange: 'border-orange-200 dark:border-orange-800 bg-orange-50 text-orange-600'
  };

  return (
    <div className="border-2 border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      <div className={`border-b-2 ${colorClasses[color as keyof typeof colorClasses]} p-6`}>
        <div className="mb-3">{icon}</div>
        <h3 className="font-bold text-foreground text-xl mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="p-6 bg-card">
        <ul className="space-y-2">
          {details.map((detail: string, index: number) => (
            <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
              <CheckCircle className="flex-shrink-0 mt-0.5 text-muted-foreground" size={16} />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function OnboardingChecklistSection() {
  return (
    <section id="checklist">
      <SectionHeader
        title="Onboarding Checklist"
        description="Complete these steps to successfully adopt UX4G"
        icon={<CheckSquare size={28} />}
      />

      <div className="mt-8 border-2 border-border rounded-lg overflow-hidden">
        <div className="bg-background p-6 border-b-2 border-border">
          <h3 className="font-bold text-foreground">Master Onboarding Checklist</h3>
          <p className="text-sm text-muted-foreground mt-1">Track your team's progress through the adoption process</p>
        </div>

        <div className="divide-y-2 divide-border">
          <ChecklistSection
            title="Week 1: Setup & Familiarization"
            items={[
              { task: 'Review UX4G documentation and component library', role: 'All' },
              { task: 'Attend UX4G overview session (if available)', role: 'All' },
              { task: 'Install Figma design library', role: 'Designers' },
              { task: 'Install NPM packages in development environment', role: 'Developers' },
              { task: 'Review accessibility standards and requirements', role: 'All' },
              { task: 'Identify project lead and assign team roles', role: 'Project Manager' }
            ]}
          />

          <ChecklistSection
            title="Week 2: Planning & Design"
            items={[
              { task: 'Map existing components to UX4G equivalents', role: 'Designers + Developers' },
              { task: 'Create design mockups using UX4G components', role: 'Designers' },
              { task: 'Identify any custom components needed', role: 'Designers' },
              { task: 'Set up development project structure', role: 'Developers' },
              { task: 'Configure build tools and design tokens', role: 'Developers' },
              { task: 'Plan migration strategy (if existing service)', role: 'Tech Lead' }
            ]}
          />

          <ChecklistSection
            title="Week 3-4: Implementation"
            items={[
              { task: 'Implement first page/feature with UX4G components', role: 'Developers' },
              { task: 'Conduct accessibility review of implementation', role: 'Accessibility Specialist' },
              { task: 'Test across browsers and devices', role: 'QA' },
              { task: 'Review implementation with UX4G support team (optional)', role: 'Tech Lead' },
              { task: 'Document any challenges or customizations needed', role: 'All' },
              { task: 'Prepare for team training sessions', role: 'Project Manager' }
            ]}
          />

          <ChecklistSection
            title="Week 5+: Scale & Optimize"
            items={[
              { task: 'Extend UX4G usage to remaining pages/features', role: 'All' },
              { task: 'Conduct full accessibility audit', role: 'Accessibility Specialist' },
              { task: 'Performance testing and optimization', role: 'Developers' },
              { task: 'User testing with target audience', role: 'UX Researchers' },
              { task: 'Submit conformance self-assessment', role: 'Project Manager' },
              { task: 'Plan for ongoing updates and maintenance', role: 'Tech Lead' }
            ]}
          />
        </div>
      </div>

      <div className="mt-6 bg-green-50 dark:bg-green-950/30 border-2 border-green-200 dark:border-green-800 rounded-lg p-6">
        <div className="flex items-start gap-3">
          <CheckCircle className="text-[#138808] flex-shrink-0 mt-1" size={24} />
          <div>
            <h3 className="font-bold text-foreground mb-2">Certification Available</h3>
            <p className="text-sm text-muted-foreground">
              Teams that complete the onboarding checklist and pass conformance review receive official 
              UX4G Certification, demonstrating commitment to government digital standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ChecklistSection({ title, items }: any) {
  return (
    <div className="p-6 bg-card">
      <h4 className="font-bold text-foreground mb-4">{title}</h4>
      <div className="space-y-3">
        {items.map((item: any, index: number) => (
          <div key={index} className="flex items-start gap-3">
            <input type="checkbox" className="w-5 h-5 border-2 border-border rounded mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <div className="text-sm text-foreground">{item.task}</div>
              <div className="text-xs text-muted-foreground mt-0.5">Role: {item.role}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MigrationPathSection() {
  return (
    <section id="migration">
      <SectionHeader
        title="Migration Path"
        description="Step-by-step guidance for migrating existing services to UX4G"
        icon={<ArrowRight size={28} />}
      />

      <div className="mt-8 space-y-8">
        {/* Migration Strategy */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <MigrationStrategy
            title="Big Bang"
            timeline="2-4 weeks"
            effort="High"
            description="Complete redesign and migration in one release"
            goodFor={['New services', 'Small applications', 'Services with funding for full redesign']}
            notGoodFor={['Large complex services', 'Services with limited downtime windows']}
          />

          <MigrationStrategy
            title="Incremental (Recommended)"
            timeline="2-6 months"
            effort="Medium"
            description="Migrate one page or feature at a time"
            goodFor={['Large services', 'Limited resources', 'Need to maintain service continuity']}
            notGoodFor={['Simple services that can migrate quickly']}
          />

          <MigrationStrategy
            title="Parallel Development"
            timeline="3-8 months"
            effort="High"
            description="Build new UX4G version alongside existing service"
            goodFor={['Critical services', 'Complex migrations', 'Need for extensive testing']}
            notGoodFor={['Resource-constrained teams', 'Simple services']}
          />
        </div>

        {/* Step-by-Step Process */}
        <div className="border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-background p-6 border-b-2 border-border">
            <h3 className="font-bold text-foreground">Incremental Migration Process</h3>
            <p className="text-sm text-muted-foreground mt-1">Most common approach for government services</p>
          </div>

          <div className="p-8 space-y-6">
            <MigrationStep
              step="1"
              title="Audit & Inventory"
              duration="1 week"
              description="Document existing UI components and pages"
              actions={[
                'Create inventory of all pages and components',
                'Map to UX4G equivalents',
                'Identify gaps and custom needs',
                'Prioritize migration order'
              ]}
            />

            <MigrationStep
              step="2"
              title="Setup & Configuration"
              duration="3-5 days"
              description="Install UX4G alongside existing UI library"
              actions={[
                'Install UX4G packages',
                'Configure build tools',
                'Set up dual stylesheet approach',
                'Create migration branch strategy'
              ]}
            />

            <MigrationStep
              step="3"
              title="Pilot Migration"
              duration="1-2 weeks"
              description="Migrate one low-risk page as proof of concept"
              actions={[
                'Choose simple, self-contained page',
                'Implement with UX4G components',
                'Test thoroughly',
                'Document lessons learned'
              ]}
            />

            <MigrationStep
              step="4"
              title="Incremental Rollout"
              duration="4-12 weeks"
              description="Migrate remaining pages in priority order"
              actions={[
                'Migrate 2-3 pages per sprint',
                'Test each migration',
                'Monitor analytics and feedback',
                'Adjust approach as needed'
              ]}
            />

            <MigrationStep
              step="5"
              title="Cleanup & Optimization"
              duration="1-2 weeks"
              description="Remove old dependencies and optimize"
              actions={[
                'Remove old UI library',
                'Consolidate stylesheets',
                'Performance optimization',
                'Final accessibility audit'
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function MigrationStrategy({ title, timeline, effort, description, goodFor, notGoodFor }: any) {
  return (
    <div className="border-2 border-border rounded-lg overflow-hidden">
      <div className="bg-background p-4 border-b-2 border-border">
        <h3 className="font-bold text-foreground text-lg mb-2">{title}</h3>
        <div className="flex gap-4 text-sm">
          <div className="text-muted-foreground">
            <strong>Timeline:</strong> {timeline}
          </div>
          <div className="text-muted-foreground">
            <strong>Effort:</strong> {effort}
          </div>
        </div>
      </div>
      
      <div className="p-6 space-y-4">
        <p className="text-sm text-muted-foreground">{description}</p>
        
        <div>
          <h4 className="font-semibold text-foreground text-sm mb-2">Good for:</h4>
          <ul className="space-y-1 text-sm text-muted-foreground">
            {goodFor.map((item: string, index: number) => (
              <li key={index}>• {item}</li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold text-foreground text-sm mb-2">Not ideal for:</h4>
          <ul className="space-y-1 text-sm text-muted-foreground">
            {notGoodFor.map((item: string, index: number) => (
              <li key={index}>• {item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function MigrationStep({ step, title, duration, description, actions }: any) {
  return (
    <div className="flex gap-6">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
          {step}
        </div>
      </div>
      
      <div className="flex-1">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h4 className="font-bold text-foreground text-lg">{title}</h4>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
          <div className="text-xs text-muted-foreground flex-shrink-0 ml-4">{duration}</div>
        </div>
        
        <div className="bg-background border border-border rounded-lg p-4 mt-3">
          <h5 className="font-semibold text-foreground text-sm mb-2">Actions:</h5>
          <ul className="space-y-1">
            {actions.map((action: string, index: number) => (
              <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                <Circle className="flex-shrink-0 mt-1 fill-current text-primary" size={8} />
                <span>{action}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function TeamRolesSection() {
  return (
    <section id="roles">
      <SectionHeader
        title="Team Roles Involved"
        description="Who needs to be part of UX4G adoption"
        icon={<Users size={28} />}
      />

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <TeamRole
          role="Product Owner / Project Manager"
          responsibilities={[
            'Champion UX4G adoption within organization',
            'Allocate resources and budget',
            'Track onboarding progress',
            'Coordinate with UX4G governance team',
            'Report on conformance status'
          ]}
          timeCommitment="2-4 hours/week"
        />

        <TeamRole
          role="UX/UI Designer"
          responsibilities={[
            'Learn Figma component library',
            'Create service mockups using UX4G',
            'Ensure design consistency',
            'Collaborate with developers on implementation',
            'Provide design review feedback'
          ]}
          timeCommitment="Full-time during design phase"
        />

        <TeamRole
          role="Frontend Developer"
          responsibilities={[
            'Install and configure UX4G packages',
            'Implement components in React/Angular',
            'Integrate design tokens',
            'Ensure code quality and performance',
            'Participate in code reviews'
          ]}
          timeCommitment="Full-time during development"
        />

        <TeamRole
          role="Accessibility Specialist"
          responsibilities={[
            'Verify WCAG 2.1 AA compliance',
            'Conduct keyboard navigation testing',
            'Test with screen readers',
            'Review color contrast and focus indicators',
            'Document accessibility findings'
          ]}
          timeCommitment="1-2 days per sprint"
        />

        <TeamRole
          role="QA / Test Engineer"
          responsibilities={[
            'Test across browsers and devices',
            'Validate component functionality',
            'Regression testing after updates',
            'Performance testing',
            'Bug reporting and verification'
          ]}
          timeCommitment="Ongoing throughout project"
        />

        <TeamRole
          role="DevOps Engineer"
          responsibilities={[
            'Configure build pipelines for UX4G',
            'Manage NPM package updates',
            'Set up deployment processes',
            'Monitor bundle size and performance',
            'Ensure CI/CD integration'
          ]}
          timeCommitment="1-2 days initial setup, then as needed"
        />
      </div>

      <div className="mt-8 bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6">
        <h3 className="font-bold text-foreground mb-3">Recommended Team Structure</h3>
        <p className="text-sm text-muted-foreground mb-4">
          For a typical government service, we recommend a cross-functional team of:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-1">1</div>
            <div className="text-muted-foreground">Product Owner</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-1">1-2</div>
            <div className="text-muted-foreground">Designers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-1">2-4</div>
            <div className="text-muted-foreground">Developers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-1">1</div>
            <div className="text-muted-foreground">QA/Accessibility</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TeamRole({ role, responsibilities, timeCommitment }: any) {
  return (
    <div className="border-2 border-border rounded-lg overflow-hidden">
      <div className="bg-background p-4 border-b-2 border-border">
        <h3 className="font-bold text-foreground">{role}</h3>
        <div className="text-xs text-muted-foreground mt-1">Time commitment: {timeCommitment}</div>
      </div>
      
      <div className="p-6">
        <h4 className="font-semibold text-foreground mb-3 text-sm">Key Responsibilities:</h4>
        <ul className="space-y-2">
          {responsibilities.map((resp: string, index: number) => (
            <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
              <CheckCircle className="flex-shrink-0 mt-0.5 text-muted-foreground" size={16} />
              <span>{resp}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function DesignOnboardingSection() {
  return (
    <section id="design-onboarding">
      <SectionHeader
        title="Design Onboarding"
        description="Getting designers productive with UX4G"
        icon={<Palette size={28} />}
      />

      <div className="mt-8 space-y-6">
        <OnboardingPath
          pathTitle="Designer's First Day"
          steps={[
            {
              title: 'Install Figma Library',
              description: 'Add UX4G component library to your Figma workspace',
              duration: '15 min',
              resources: ['Figma library link', 'Installation guide']
            },
            {
              title: 'Review Foundations',
              description: 'Understand color system, typography, spacing, and grid',
              duration: '30 min',
              resources: ['Foundations documentation', 'Design token reference']
            },
            {
              title: 'Explore Components',
              description: 'Browse all 30+ components and their variants',
              duration: '1 hour',
              resources: ['Component library tour', 'Usage examples']
            },
            {
              title: 'Create First Mockup',
              description: 'Design a simple page using UX4G components',
              duration: '2 hours',
              resources: ['Sample templates', 'Design patterns guide']
            }
          ]}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ResourceCard
            title="Essential Design Resources"
            resources={[
              { name: 'Figma Component Library', type: 'Link', url: '/resources/figma' },
              { name: 'Design Foundations Guide', type: 'PDF', url: '/foundations' },
              { name: 'Design Token Reference', type: 'Interactive', url: '/foundations' },
              { name: 'Common Patterns Library', type: 'Figma', url: '/patterns' }
            ]}
          />

          <ResourceCard
            title="Design Best Practices"
            resources={[
              { name: 'Component Composition Patterns', type: 'Guide', url: '#' },
              { name: 'Responsive Design Guidelines', type: 'Guide', url: '#' },
              { name: 'Accessibility for Designers', type: 'Guide', url: '/accessibility' },
              { name: 'Design Review Checklist', type: 'PDF', url: '#' }
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function DeveloperOnboardingSection() {
  return (
    <section id="developer-onboarding">
      <SectionHeader
        title="Developer Onboarding"
        description="Getting developers productive with UX4G"
        icon={<Code size={28} />}
      />

      <div className="mt-8 space-y-6">
        <OnboardingPath
          pathTitle="Developer's First Day"
          steps={[
            {
              title: 'Install UX4G Package',
              description: 'Add UX4G React or Angular library to your project',
              duration: '10 min',
              resources: ['Installation guide', 'NPM package docs']
            },
            {
              title: 'Configure Build Tools',
              description: 'Set up design tokens and stylesheet imports',
              duration: '20 min',
              resources: ['Build configuration guide', 'Webpack/Vite examples']
            },
            {
              title: 'Import First Components',
              description: 'Use Button, Input, and Card components in your app',
              duration: '30 min',
              resources: ['Quick start tutorial', 'Code examples']
            },
            {
              title: 'Build Sample Page',
              description: 'Create a complete page using UX4G components',
              duration: '2 hours',
              resources: ['Starter templates', 'Common patterns']
            }
          ]}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ResourceCard
            title="Essential Developer Resources"
            resources={[
              { name: 'Installation Guide', type: 'Documentation', url: '/resources/getting-started' },
              { name: 'Component API Reference', type: 'Interactive', url: '/components' },
              { name: 'React Usage Guide', type: 'Tutorial', url: '/resources/getting-started#react' },
              { name: 'Angular Usage Guide', type: 'Tutorial', url: '/resources/getting-started#angular' }
            ]}
          />

          <ResourceCard
            title="Code & Examples"
            resources={[
              { name: 'Starter Templates', type: 'GitHub', url: '#' },
              { name: 'Code Sandbox Examples', type: 'Interactive', url: '#' },
              { name: 'TypeScript Definitions', type: 'NPM', url: '#' },
              { name: 'Migration Code Examples', type: 'GitHub', url: '#' }
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function AccessibilityOnboardingSection() {
  return (
    <section id="accessibility-onboarding">
      <SectionHeader
        title="Accessibility Onboarding"
        description="Ensuring your implementation meets WCAG 2.1 AA standards"
        icon={<Eye size={28} />}
      />

      <div className="mt-8 space-y-6">
        <div className="bg-green-50 dark:bg-green-950/30 border-2 border-green-200 dark:border-green-800 rounded-lg p-6">
          <div className="flex items-start gap-3">
            <Shield className="text-[#138808] flex-shrink-0 mt-1" size={24} />
            <div>
              <h3 className="font-bold text-foreground mb-2">Accessibility Built-In</h3>
              <p className="text-sm text-muted-foreground">
                All UX4G components are pre-tested for WCAG 2.1 AA compliance. However, you still need to 
                verify your implementation, especially for custom layouts, content, and interactions.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border-2 border-border rounded-lg p-6">
            <h3 className="font-bold text-foreground mb-4">Accessibility Testing Checklist</h3>
            <div className="space-y-3">
              <ChecklistItem text="Keyboard navigation works for all interactive elements" />
              <ChecklistItem text="Screen reader announces content correctly (test with NVDA/VoiceOver)" />
              <ChecklistItem text="Color contrast meets WCAG AA (4.5:1 for text, 3:1 for UI)" />
              <ChecklistItem text="Focus indicators visible on all focusable elements" />
              <ChecklistItem text="Forms have proper labels and error messages" />
              <ChecklistItem text="Images have alt text or are marked decorative" />
              <ChecklistItem text="Page structure uses semantic HTML (headings, landmarks)" />
              <ChecklistItem text="No keyboard traps or accessibility blockers" />
            </div>
          </div>

          <div className="border-2 border-border rounded-lg p-6">
            <h3 className="font-bold text-foreground mb-4">Recommended Testing Tools</h3>
            <div className="space-y-3">
              <ToolItem
                tool="axe DevTools"
                type="Browser Extension"
                description="Automated accessibility testing in Chrome/Firefox"
              />
              <ToolItem
                tool="NVDA / VoiceOver"
                type="Screen Reader"
                description="Test actual screen reader experience"
              />
              <ToolItem
                tool="Keyboard Navigation"
                type="Manual Testing"
                description="Tab through interface, test all interactions"
              />
              <ToolItem
                tool="Color Contrast Analyzer"
                type="Desktop App"
                description="Verify color contrast ratios"
              />
            </div>
          </div>
        </div>

        <ResourceCard
          title="Accessibility Resources"
          resources={[
            { name: 'UX4G Accessibility Guide', type: 'Documentation', url: '/accessibility' },
            { name: 'WCAG 2.1 Quick Reference', type: 'External', url: '#' },
            { name: 'Screen Reader Testing Guide', type: 'PDF', url: '#' },
            { name: 'Accessibility Audit Template', type: 'Spreadsheet', url: '#' }
          ]}
        />
      </div>
    </section>
  );
}

function ChecklistItem({ text }: any) {
  return (
    <div className="flex items-start gap-3">
      <input type="checkbox" className="w-5 h-5 border-2 border-border rounded mt-0.5 flex-shrink-0" />
      <span className="text-sm text-muted-foreground">{text}</span>
    </div>
  );
}

function ToolItem({ tool, type, description }: any) {
  return (
    <div className="bg-background border border-border rounded p-3">
      <div className="flex items-start justify-between mb-1">
        <div className="font-semibold text-foreground text-sm">{tool}</div>
        <div className="text-xs text-muted-foreground">{type}</div>
      </div>
      <div className="text-xs text-muted-foreground">{description}</div>
    </div>
  );
}

function VendorOnboardingSection() {
  return (
    <section id="vendor-onboarding">
      <SectionHeader
        title="Vendor Onboarding"
        description="Guidance for vendor partners building government services"
        icon={<Building2 size={28} />}
      />

      <div className="mt-8 space-y-8">
        <div className="bg-orange-50 dark:bg-orange-950/30 border-2 border-orange-200 dark:border-orange-800 rounded-lg p-6">
          <h3 className="font-bold text-foreground mb-3">Vendor Requirements</h3>
          <p className="text-sm text-muted-foreground mb-4">
            All vendor-built government services must use the UX4G Design System. Non-compliance may result 
            in application rejection during acceptance testing.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            <div className="bg-card border border-orange-200 dark:border-orange-800 rounded p-3">
              <div className="font-semibold text-foreground mb-1">Before Development</div>
              <div className="text-muted-foreground">Submit design mockups for approval</div>
            </div>
            <div className="bg-card border border-orange-200 dark:border-orange-800 rounded p-3">
              <div className="font-semibold text-foreground mb-1">During Development</div>
              <div className="text-muted-foreground">Use UX4G components exclusively</div>
            </div>
            <div className="bg-card border border-orange-200 dark:border-orange-800 rounded p-3">
              <div className="font-semibold text-foreground mb-1">Before Handover</div>
              <div className="text-muted-foreground">Pass conformance verification</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border-2 border-border rounded-lg p-6">
            <h3 className="font-bold text-foreground mb-4">Vendor Onboarding Steps</h3>
            <div className="space-y-4">
              <VendorStep
                number="1"
                title="Register with UX4G"
                description="Submit vendor registration form to UX4G governance team"
              />
              <VendorStep
                number="2"
                title="Attend Training"
                description="Complete mandatory UX4G training (4 hours, virtual)"
              />
              <VendorStep
                number="3"
                title="Access Resources"
                description="Receive access to Figma libraries, NPM packages, and documentation"
              />
              <VendorStep
                number="4"
                title="Submit Designs"
                description="Share design mockups with department for review"
              />
              <VendorStep
                number="5"
                title="Build & Test"
                description="Implement service using UX4G, conduct accessibility testing"
              />
              <VendorStep
                number="6"
                title="Conformance Check"
                description="Pass UX4G conformance verification before handover"
              />
            </div>
          </div>

          <div className="border-2 border-border rounded-lg p-6">
            <h3 className="font-bold text-foreground mb-4">Vendor Support</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2 text-sm">Technical Support Channel</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Email: <a href="mailto:vendor-support@ux4g.gov.in" className="text-primary hover:underline">vendor-support@ux4g.gov.in</a>
                </p>
                <p className="text-xs text-muted-foreground">Response time: 1-2 business days</p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2 text-sm">Training Resources</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Recorded training sessions</li>
                  <li>• Vendor-specific documentation</li>
                  <li>• Q&A sessions (bi-weekly)</li>
                  <li>• Sample code repositories</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2 text-sm">Conformance Testing</h4>
                <p className="text-sm text-muted-foreground">
                  Vendors can request pre-handover conformance review to identify issues early. 
                  Schedule at least 2 weeks before planned handover date.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function VendorStep({ number, title, description }: any) {
  return (
    <div className="flex gap-3">
      <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
        {number}
      </div>
      <div>
        <div className="font-semibold text-foreground text-sm">{title}</div>
        <div className="text-xs text-muted-foreground mt-0.5">{description}</div>
      </div>
    </div>
  );
}

function ConformanceExpectationsSection() {
  return (
    <section id="conformance">
      <SectionHeader
        title="Conformance Expectations"
        description="What's required for UX4G compliance"
        icon={<Shield size={28} />}
      />

      <div className="mt-8 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ConformanceLevel
            level="Minimum (Required)"
            percentage="80%"
            requirements={[
              'All public-facing pages use UX4G',
              'Core user flows accessible',
              'Government brand colors',
              'No major accessibility violations'
            ]}
            badge="bronze"
          />

          <ConformanceLevel
            level="Standard (Recommended)"
            percentage="95%"
            requirements={[
              'All UI uses UX4G components',
              'Full accessibility compliance',
              'Design tokens used throughout',
              'Regular updates maintained'
            ]}
            badge="silver"
          />

          <ConformanceLevel
            level="Exemplar"
            percentage="100%"
            requirements={[
              'Complete UX4G implementation',
              'Zero custom CSS overrides',
              'Contributes to design system',
              'Showcased as reference service'
            ]}
            badge="gold"
          />
        </div>

        <div className="border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-background p-6 border-b-2 border-border">
            <h3 className="font-bold text-foreground">Conformance Verification Process</h3>
          </div>

          <div className="p-6 space-y-6">
            <VerificationStep
              step="Self-Assessment"
              description="Complete conformance checklist and submit to department IT team"
              frequency="Before launch + Quarterly"
            />
            
            <VerificationStep
              step="Automated Scanning"
              description="Automated tools check component usage, version, and accessibility"
              frequency="Continuous (weekly scans)"
            />
            
            <VerificationStep
              step="Manual Review"
              description="UX4G team conducts visual and code review of implementation"
              frequency="Before launch + Annual review"
            />
          </div>
        </div>

        <div className="bg-red-50 dark:bg-red-950/30 border-2 border-red-200 dark:border-red-800 rounded-lg p-6">
          <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
            <AlertCircle className="text-red-600" size={20} />
            Non-Conformance Consequences
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-muted-foreground">
            <div>
              <h4 className="font-semibold text-foreground mb-2">For Departments:</h4>
              <ul className="space-y-1">
                <li>• Service may not pass launch approval</li>
                <li>• Reduced priority for UX4G support</li>
                <li>• Required remediation plan</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">For Vendors:</h4>
              <ul className="space-y-1">
                <li>• Application rejected in acceptance testing</li>
                <li>• Remediation at vendor cost</li>
                <li>• May affect future contract consideration</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ConformanceLevel({ level, percentage, requirements, badge }: any) {
  const badgeColors = {
    bronze: 'bg-orange-100 text-orange-700 border-orange-300',
    silver: 'bg-gray-200 text-muted-foreground border-gray-400',
    gold: 'bg-yellow-100 text-yellow-700 border-yellow-400'
  };

  return (
    <div className="border-2 border-border rounded-lg overflow-hidden">
      <div className={`p-4 border-b-2 ${badgeColors[badge as keyof typeof badgeColors]}`}>
        <div className="text-center">
          <div className="font-bold text-lg mb-1">{level}</div>
          <div className="text-2xl font-bold">{percentage}</div>
        </div>
      </div>
      
      <div className="p-6">
        <ul className="space-y-2">
          {requirements.map((req: string, index: number) => (
            <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
              <CheckCircle className="flex-shrink-0 mt-0.5 text-muted-foreground" size={14} />
              <span>{req}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function VerificationStep({ step, description, frequency }: any) {
  return (
    <div className="flex gap-6">
      <div className="flex-shrink-0 w-32">
        <div className="font-bold text-foreground">{step}</div>
        <div className="text-xs text-muted-foreground mt-1">{frequency}</div>
      </div>
      <div className="flex-1">
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

function SupportChannelsSection() {
  return (
    <section id="support">
      <SectionHeader
        title="Support Channels"
        description="How to get help during adoption and onboarding"
        icon={<HelpCircle size={28} />}
      />

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <SupportChannel
          icon={<BookOpen size={28} />}
          title="Documentation"
          description="Comprehensive guides, tutorials, and API reference"
          link="/components"
          linkText="Browse Documentation"
          responseTime="Self-service"
          color="blue"
        />

        <SupportChannel
          icon={<MessageCircle size={28} />}
          title="Community Forum"
          description="Ask questions, share solutions, connect with other teams"
          link="#"
          linkText="Visit Forum"
          responseTime="24-48 hours"
          color="purple"
        />

        <SupportChannel
          icon={<Mail size={28} />}
          title="Email Support"
          description="Direct support for technical issues and onboarding help"
          link="mailto:support@ux4g.gov.in"
          linkText="support@ux4g.gov.in"
          responseTime="1-2 business days"
          color="green"
        />

        <SupportChannel
          icon={<Github size={28} />}
          title="GitHub Issues"
          description="Report bugs, request features, view roadmap"
          link="#"
          linkText="Open GitHub"
          responseTime="2-5 business days"
          color="orange"
        />

        <SupportChannel
          icon={<Users size={28} />}
          title="Office Hours"
          description="Live Q&A sessions with UX4G core team"
          link="#"
          linkText="See Schedule"
          responseTime="Weekly (Thursdays 3-4 PM)"
          color="red"
        />

        <SupportChannel
          icon={<FileText size={28} />}
          title="Onboarding Sessions"
          description="Structured training for new teams (4-hour session)"
          link="#"
          linkText="Request Session"
          responseTime="Scheduled bi-weekly"
          color="teal"
        />
      </div>

      <div className="mt-8 bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6">
        <h3 className="font-bold text-foreground mb-4">Recommended Support Path</h3>
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-2">
              <BookOpen size={24} />
            </div>
            <div className="text-sm font-semibold text-foreground">1. Documentation</div>
            <div className="text-xs text-muted-foreground">Start here</div>
          </div>
          
          <ChevronRight className="text-muted-foreground" size={24} />
          
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-2">
              <MessageCircle size={24} />
            </div>
            <div className="text-sm font-semibold text-foreground">2. Forum Search</div>
            <div className="text-xs text-muted-foreground">Check existing threads</div>
          </div>
          
          <ChevronRight className="text-muted-foreground" size={24} />
          
          <div className="text-center">
            <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-2">
              <Mail size={24} />
            </div>
            <div className="text-sm font-semibold text-foreground">3. Email Support</div>
            <div className="text-xs text-muted-foreground">For specific help</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SupportChannel({ icon, title, description, link, linkText, responseTime, color }: any) {
  const colorClasses = {
    blue: 'text-blue-600',
    purple: 'text-purple-600',
    green: 'text-green-600',
    orange: 'text-orange-600',
    red: 'text-red-600',
    teal: 'text-teal-600'
  };

  return (
    <div className="border-2 border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
      <div className={`mb-4 ${colorClasses[color as keyof typeof colorClasses]}`}>
        {icon}
      </div>
      <h3 className="font-bold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground mb-4">{description}</p>
      <a href={link} className="text-primary font-semibold text-sm hover:underline flex items-center gap-1 mb-3">
        {linkText} <ExternalLink size={14} />
      </a>
      <div className="text-xs text-muted-foreground pt-3 border-t border-border">
        Response time: {responseTime}
      </div>
    </div>
  );
}

function ReferenceExamplesSection() {
  return (
    <section id="examples">
      <SectionHeader
        title="Reference Service Examples"
        description="Real government services built with UX4G"
        icon={<FileText size={28} />}
      />

      <div className="mt-8 space-y-6">
        <div className="bg-green-50 dark:bg-green-950/30 border-2 border-green-200 dark:border-green-800 rounded-lg p-6">
          <h3 className="font-bold text-foreground mb-3">Exemplar Services</h3>
          <p className="text-sm text-muted-foreground">
            These services demonstrate best practices in UX4G implementation, accessibility, and user experience. 
            Study them as models for your own implementation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ReferenceService
            name="Passport Application Portal"
            department="Ministry of External Affairs"
            url="https://passportindia.gov.in"
            highlights={[
              'Complete UX4G implementation (100%)',
              'Complex multi-step form pattern',
              'Appointment booking integration',
              'Document upload with preview'
            ]}
            conformance="Exemplar"
            stats={{ pages: 24, components: 45, traffic: '2M users/month' }}
          />

          <ReferenceService
            name="Income Tax e-Filing"
            department="Ministry of Finance"
            url="https://incometax.gov.in"
            highlights={[
              'Full UX4G adoption for new portal',
              'Migrated from legacy UI in 4 months',
              'Advanced form validation patterns',
              'Real-time calculation components'
            ]}
            conformance="Exemplar"
            stats={{ pages: 38, components: 62, traffic: '5M users/month' }}
          />

          <ReferenceService
            name="Digital Locker"
            department="Ministry of Electronics & IT"
            url="https://digilocker.gov.in"
            highlights={[
              'Mobile-first responsive design',
              'Document management patterns',
              'Integration with Aadhaar',
              'Progressive Web App (PWA)'
            ]}
            conformance="Standard"
            stats={{ pages: 16, components: 28, traffic: '1.5M users/month' }}
          />

          <ReferenceService
            name="Scholarship Portal"
            department="Ministry of Education"
            url="https://scholarships.gov.in"
            highlights={[
              'Accessibility focus for diverse users',
              'Multi-language support',
              'Complex eligibility calculator',
              'Dashboard with data visualization'
            ]}
            conformance="Standard"
            stats={{ pages: 22, components: 34, traffic: '800K users/month' }}
          />
        </div>

        <div className="border-2 border-border rounded-lg p-6">
          <h3 className="font-bold text-foreground mb-4">Learning from Reference Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Design Patterns</h4>
              <p className="text-muted-foreground">
                Study how exemplar services compose UX4G components for common government use cases 
                like application forms, dashboards, and document management.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Implementation Approaches</h4>
              <p className="text-muted-foreground">
                Learn migration strategies, performance optimization techniques, and integration 
                patterns from teams who have successfully adopted UX4G.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Accessibility Solutions</h4>
              <p className="text-muted-foreground">
                See real examples of accessible form validation, screen reader optimization, 
                and keyboard navigation in complex government workflows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReferenceService({ name, department, url, highlights, conformance, stats }: any) {
  const conformanceBadge = conformance === 'Exemplar' 
    ? 'bg-yellow-100 text-yellow-700 border-yellow-300'
    : 'bg-muted text-muted-foreground border-border';

  return (
    <div className="border-2 border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      <div className="bg-background p-4 border-b-2 border-border">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-bold text-foreground">{name}</h3>
          <span className={`px-3 py-1 ${conformanceBadge} border rounded-full text-xs font-semibold`}>
            {conformance}
          </span>
        </div>
        <div className="text-sm text-muted-foreground">{department}</div>
      </div>
      
      <div className="p-6">
        <h4 className="font-semibold text-foreground mb-3 text-sm">Key Highlights:</h4>
        <ul className="space-y-2 mb-4">
          {highlights.map((highlight: string, index: number) => (
            <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
              <CheckCircle className="flex-shrink-0 mt-0.5 text-[#138808]" size={14} />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
        
        <div className="pt-4 border-t border-border grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs text-muted-foreground mb-4">
          <div>
            <div className="font-semibold text-foreground">{stats.pages}</div>
            <div>Pages</div>
          </div>
          <div>
            <div className="font-semibold text-foreground">{stats.components}</div>
            <div>Components</div>
          </div>
          <div>
            <div className="font-semibold text-foreground">{stats.traffic}</div>
            <div>Traffic</div>
          </div>
        </div>
        
        <a href={url} target="_blank" rel="noopener noreferrer" className="text-primary font-semibold text-sm hover:underline flex items-center gap-1">
          Visit Service <ExternalLink size={14} />
        </a>
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
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">{title}</h2>
      </div>
      <p className="text-lg text-muted-foreground">{description}</p>
    </div>
  );
}

function OnboardingPath({ pathTitle, steps }: any) {
  return (
    <div className="border-2 border-border rounded-lg overflow-hidden">
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 border-b-2 border-border">
        <h3 className="font-bold text-foreground">{pathTitle}</h3>
      </div>
      
      <div className="p-8">
        <div className="space-y-6">
          {steps.map((step: any, index: number) => (
            <div key={index} className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-bold text-foreground">{step.title}</h4>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                  <div className="text-xs text-muted-foreground flex-shrink-0 ml-4">{step.duration}</div>
                </div>
                
                <div className="flex gap-2 flex-wrap mt-2">
                  {step.resources.map((resource: string, idx: number) => (
                    <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
                      {resource}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ResourceCard({ title, resources }: any) {
  return (
    <div className="border-2 border-border rounded-lg p-6">
      <h3 className="font-bold text-foreground mb-4">{title}</h3>
      <div className="space-y-3">
        {resources.map((resource: any, index: number) => (
          <a key={index} href={resource.url} className="flex items-center justify-between p-3 bg-background border border-border rounded hover:bg-blue-50 dark:bg-blue-900/20 hover:border-blue-200 dark:border-blue-800 transition-colors">
            <div>
              <div className="font-semibold text-foreground text-sm">{resource.name}</div>
              <div className="text-xs text-muted-foreground">{resource.type}</div>
            </div>
            <ChevronRight className="text-muted-foreground" size={20} />
          </a>
        ))}
      </div>
    </div>
  );
}
