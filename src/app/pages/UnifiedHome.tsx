import { Link } from "react-router";
import {
  BookOpen, Box, Layers, Settings, Building2, FileText,
  ArrowRight, CheckCircle, Download, Code, Users, Palette,
  GitBranch, BarChart3, AlertCircle, Globe, Shield, Zap
} from "lucide-react";

export default function UnifiedHome() {
  return (
    <div className="min-h-screen bg-card dark:bg-gray-900">

      {/* ==================== HERO SECTION ==================== */}
      <section className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 border-b border-border dark:border-gray-700">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] gap-10 lg:gap-12 items-center">
            <div className="max-w-4xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary dark:bg-blue-600 text-primary-foreground rounded-full mb-6 shadow-lg">
                <Shield size={16} />
                <span className="text-sm font-bold">Government of India • Digital India Initiative</span>
              </div>

              {/* Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground dark:text-gray-100 mb-6 leading-tight">
                UX4G Design System Platform
              </h1>

              {/* Subheading */}
              <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground dark:text-gray-300 mb-4 leading-relaxed">
                Official design system for building consistent, accessible, and user-centered
                government digital services across India.
              </p>

              <p className="text-base sm:text-lg text-muted-foreground dark:text-gray-400 mb-8 leading-relaxed">
                Production-ready foundations, components, patterns, and complete service implementations
                with built-in accessibility, multilingual support, and compliance standards.
              </p>

              {/* CTA Buttons - Improved hierarchy */}
              <div className="flex flex-col sm:flex-row items-start gap-4 mb-12">
                {/* Primary CTA */}
                <Link
                  to="/resources/getting-started"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary hover:bg-[#000066] dark:bg-blue-600 dark:hover:bg-blue-700 text-primary-foreground font-bold rounded-lg transition-colors shadow-lg hover:shadow-xl w-full sm:w-auto"
                >
                  <Download size={20} />
                  Get Started
                </Link>

                {/* Secondary CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <Link
                    to="/components"
                    className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-card dark:bg-gray-800 border-2 border-border dark:border-gray-600 hover:border-primary dark:hover:border-blue-500 text-foreground dark:text-gray-100 font-semibold rounded-lg transition-colors"
                  >
                    <Box size={20} />
                    Components
                  </Link>
                  <Link
                    to="/reference-service/demo"
                    className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-card dark:bg-gray-800 border-2 border-border dark:border-gray-600 hover:border-primary dark:hover:border-blue-500 text-foreground dark:text-gray-100 font-semibold rounded-lg transition-colors"
                  >
                    <FileText size={20} />
                    Demo
                  </Link>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-border dark:border-gray-700">
                <StatItem number="28+" label="Core Components" />
                <StatItem number="109" label="Pattern Examples" />
                <StatItem number="47" label="Gov Departments" />
                <StatItem number="22" label="Languages" />
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div className="absolute inset-x-8 top-10 h-64 rounded-full bg-gradient-to-r from-blue-200/60 via-indigo-200/50 to-emerald-200/50 blur-3xl dark:from-blue-900/30 dark:via-indigo-900/20 dark:to-emerald-900/20" />
              <HeroBannerImage />
            </div>
          </div>
        </div>
      </section>

      {/* ==================== QUICK START BY ROLE ==================== */}
      <section className="bg-card dark:bg-gray-900 border-b border-border dark:border-gray-700">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground dark:text-gray-100 mb-3">Quick Start by Role</h2>
            <p className="text-base sm:text-lg text-muted-foreground dark:text-gray-400">Choose your role to get started with the right resources</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <RoleCard
              icon={<Palette size={32} />}
              role="Designer"
              description="Design tokens, component specs, and Figma libraries"
              links={[
                { label: "Foundations", path: "/foundations" },
                { label: "Component Library", path: "/components" },
                { label: "Figma Resources", path: "/resources/figma" }
              ]}
            />

            <RoleCard
              icon={<Code size={32} />}
              role="Developer"
              description="NPM packages, starter kits, and API documentation"
              links={[
                { label: "Installation Guide", path: "/resources/getting-started" },
                { label: "Starter Kits", path: "/resources/starter-kit" },
                { label: "Component Specs", path: "/resources/component-specs" }
              ]}
            />

            <RoleCard
              icon={<Users size={32} />}
              role="Product Manager"
              description="Service archetypes, patterns, and governance"
              links={[
                { label: "Service Archetypes", path: "/archetypes" },
                { label: "Pattern Library", path: "/pattern-library" },
                { label: "Governance", path: "/governance" }
              ]}
            />

            <RoleCard
              icon={<FileText size={32} />}
              role="Service Designer"
              description="Complete flows, patterns, and reference services"
              links={[
                { label: "Pattern Library", path: "/pattern-library" },
                { label: "Reference Service", path: "/reference-service/overview" },
                { label: "Service Archetypes", path: "/archetypes" }
              ]}
            />
          </div>
        </div>
      </section>

      {/* ==================== CORE PLATFORM LAYERS ==================== */}
      <section className="bg-background dark:bg-gray-800 border-b border-border dark:border-gray-700">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="mb-12 max-w-4xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground dark:text-gray-100 mb-3">Platform Architecture</h2>
            <p className="text-base sm:text-lg text-muted-foreground dark:text-gray-400 max-w-3xl">
              Eight foundational layers that power government digital services, organized to help teams move from foundations to live reference services without losing design-system discipline.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.55fr)_minmax(320px,0.95fr)] items-start">
            <div className="space-y-4">
              <LayerCard
                number="1"
                title="Foundations"
                description="Design tokens, typography, color systems, spacing, and accessibility guidelines"
                path="/foundations"
                color="blue"
                items={["Design Tokens", "Typography", "Color System", "Spacing", "Accessibility"]}
              />

              <LayerCard
                number="2"
                title="Components"
                description="Production-ready, accessible UI components for React, Angular, and Web Components"
                path="/components"
                color="green"
                items={["Buttons", "Forms", "Navigation", "Feedback", "Data Display"]}
              />

              <LayerCard
                number="3"
                title="Patterns"
                description="Reusable interaction patterns for common government service workflows"
                path="/patterns"
                color="purple"
                items={["Identity & Access", "Consent", "Payment", "Search", "Dashboard", "Notifications"]}
              />

              <LayerCard
                number="4"
                title="Service Archetypes"
                description="High-level service workflow templates for common government service types"
                path="/archetypes"
                color="orange"
                items={["Application Submission", "Renewal", "Approval & Issuance", "Status Tracking"]}
              />

              <div className="grid gap-4 md:grid-cols-2">
                <LayerCard
                  number="5"
                  title="Systems"
                  description="Cross-cutting capabilities that work across patterns and services"
                  path="/systems"
                  color="teal"
                  items={["Multilingual Support", "Form Intelligence", "State Resilience"]}
                />

                <LayerCard
                  number="6"
                  title="Reference Services"
                  description="Complete end-to-end service implementations as reference examples"
                  path="/reference-service/overview"
                  color="indigo"
                  items={["Certificate Service", "Authentication Flow", "Payment Integration"]}
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <LayerCard
                  number="7"
                  title="Resources"
                  description="Developer tools, starter kits, documentation, and implementation guides"
                  path="/resources"
                  color="pink"
                  items={["Getting Started", "Starter Kits", "Component Specs", "Figma Integration"]}
                />

                <LayerCard
                  number="8"
                  title="Governance"
                  description="Adoption tracking, compliance monitoring, and analytics dashboard"
                  path="/governance"
                  color="red"
                  items={["Adoption Dashboard", "Conformance Metrics", "Service Analytics"]}
                />
              </div>
            </div>

            <div className="lg:sticky lg:top-24 space-y-5">
              <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-[0.2em]">
                  Architecture map
                </div>
                <h3 className="mt-4 text-2xl font-bold text-foreground dark:text-gray-100">
                  A cleaner path from design to delivery
                </h3>
                <p className="mt-3 text-sm sm:text-base text-muted-foreground dark:text-gray-400 leading-relaxed">
                  The platform is intentionally layered so teams can start with tokens and components,
                  move into patterns, and then assemble end-to-end reference services without reinventing
                  layout or behavior.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <MiniStat label="Layers" value="8" />
                  <MiniStat label="Frameworks" value="3" />
                  <MiniStat label="Reference service" value="31 pages" />
                  <MiniStat label="Production focus" value="Government" />
                </div>
              </div>

              <div className="rounded-3xl border border-border bg-gradient-to-br from-blue-50 via-white to-emerald-50 p-6 dark:from-blue-900/20 dark:via-gray-800 dark:to-emerald-900/10">
                <h4 className="text-lg font-bold text-foreground dark:text-gray-100">Best for enterprise teams</h4>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="mt-0.5 text-green-600 dark:text-green-400" />
                    Strong hierarchy for executives, designers, and developers
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="mt-0.5 text-green-600 dark:text-green-400" />
                    Compact summary panel keeps the desktop layout balanced
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="mt-0.5 text-green-600 dark:text-green-400" />
                    Clear entry points into docs, patterns, and reference services
                  </li>
                </ul>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    to="/resources"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
                  >
                    Explore resources
                    <ArrowRight size={16} />
                  </Link>
                  <Link
                    to="/pattern-library"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card text-foreground font-semibold hover:border-primary transition-colors"
                  >
                    View patterns
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FEATURED PATTERNS & REFERENCE SERVICES ==================== */}
      <section className="bg-card dark:bg-gray-900 border-b border-border dark:border-gray-700">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Featured Patterns */}
            <div>
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground dark:text-gray-100 mb-3">Featured Patterns</h2>
                <p className="text-base sm:text-lg text-muted-foreground dark:text-gray-400">Common interaction patterns used across government services</p>
              </div>

              <div className="space-y-4">
                <PatternItem
                  title="Identity & Access Patterns"
                  description="Sign in, sign up, OTP verification, Aadhaar authentication, session management"
                  path="/patterns/identity"
                  count="13 patterns"
                />
                <PatternItem
                  title="Consent & Declaration"
                  description="Legal consent capture, privacy notices, guardian consent, data sharing"
                  path="/patterns/consent"
                  count="8 patterns"
                />
                <PatternItem
                  title="Search & Discovery"
                  description="Global search, search results, filters, no results handling"
                  path="/patterns/search-discovery"
                  count="4 patterns"
                />
                <PatternItem
                  title="Dashboard & Tasks"
                  description="Citizen dashboard, task lists, personalized views"
                  path="/patterns/dashboard"
                  count="3 patterns"
                />
                <PatternItem
                  title="Status & Lifecycle"
                  description="Timeline views, step progress, application tracking"
                  path="/patterns/status-lifecycle"
                  count="3 patterns"
                />
              </div>

              <Link
                to="/pattern-library"
                className="inline-flex items-center gap-2 mt-6 text-primary dark:text-blue-400 font-bold hover:underline"
              >
                Browse All Patterns <ArrowRight size={16} />
              </Link>
            </div>

            {/* Reference Service */}
            <div>
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground dark:text-gray-100 mb-3">Reference Service</h2>
                <p className="text-base sm:text-lg text-muted-foreground dark:text-gray-400">Complete certificate service implementation with 31 pages</p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-2 border-border dark:border-gray-700 rounded-lg p-8 mb-6">
                <h3 className="text-xl font-bold text-foreground dark:text-gray-100 mb-4">Certificate Application Service</h3>
                <p className="text-muted-foreground dark:text-gray-300 mb-6">
                  A complete end-to-end reference implementation demonstrating best practices
                  for a government certificate application service.
                </p>

                <div className="space-y-3 mb-6">
                  <ServiceFlowItem label="Pre-Application" count="5 pages" />
                  <ServiceFlowItem label="Authentication Flow" count="5 pages" />
                  <ServiceFlowItem label="Application Process" count="8 pages" />
                  <ServiceFlowItem label="Payment Integration" count="2 pages" />
                  <ServiceFlowItem label="Post-Submission" count="4 pages" />
                  <ServiceFlowItem label="Outcomes & Appeals" count="6 pages" />
                  <ServiceFlowItem label="Officer Dashboard" count="3 pages" />
                </div>

                <div className="flex gap-3">
                  <Link
                    to="/reference-service/overview"
                    className="flex-1 px-4 py-3 bg-card dark:bg-gray-800 border-2 border-border dark:border-gray-600 hover:border-primary dark:hover:border-blue-500 text-foreground dark:text-gray-100 text-center font-bold rounded transition-colors"
                  >
                    View Blueprint
                  </Link>
                  <Link
                    to="/reference-service/demo"
                    className="flex-1 px-4 py-3 bg-primary dark:bg-blue-600 hover:bg-[#000066] dark:hover:bg-blue-700 text-primary-foreground text-center font-bold rounded transition-colors"
                  >
                    Try Demo
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================== IMPLEMENTATION & DOCUMENTATION ==================== */}
      <section className="bg-background dark:bg-gray-800 border-b border-border dark:border-gray-700">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground dark:text-gray-100 mb-3">Implementation & Documentation</h2>
            <p className="text-base sm:text-lg text-muted-foreground dark:text-gray-400">Everything you need to build with UX4G</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ImplementationCard
              icon={<Download size={32} />}
              title="NPM Packages"
              description="Install production-ready packages for React or Angular"
              items={[
                "@ux4g/tokens",
                "@ux4g/styles",
                "@ux4g/react-core",
                "@ux4g/angular-core",
                "@ux4g/react-patterns",
                "@ux4g/angular-patterns"
              ]}
              cta={{ label: "Installation Guide", path: "/resources/getting-started" }}
            />

            <ImplementationCard
              icon={<Code size={32} />}
              title="Starter Kits"
              description="Pre-configured templates to jumpstart your project"
              items={[
                "React Starter Template",
                "Angular Starter Template",
                "Pre-configured routing",
                "Theme setup included",
                "Example implementations",
                "Mock services ready"
              ]}
              cta={{ label: "Download Starters", path: "/resources/starter-kit" }}
            />

            <ImplementationCard
              icon={<BookOpen size={32} />}
              title="Documentation"
              description="Comprehensive guides and API references"
              items={[
                "Component API Reference",
                "Pattern Usage Guide",
                "Accessibility Guidelines",
                "Content Design System",
                "Figma Integration",
                "Best Practices"
              ]}
              cta={{ label: "View Docs", path: "/resources" }}
            />
          </div>
        </div>
      </section>

      {/* ==================== GOVERNANCE & ADOPTION ==================== */}
      <section className="bg-card dark:bg-gray-900 border-b border-border dark:border-gray-700">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Governance */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground dark:text-gray-100 mb-3">Governance & Compliance</h2>
              <p className="text-base sm:text-lg text-muted-foreground dark:text-gray-400 mb-8">
                All government digital services must conform to UX4G standards
              </p>

              <div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-800 rounded-lg p-6 mb-6">
                <div className="flex items-start gap-3 mb-4">
                  <AlertCircle size={24} className="text-red-600 dark:text-red-400 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-foreground dark:text-gray-100 mb-2">Mandatory Compliance</h3>
                    <p className="text-sm text-muted-foreground dark:text-gray-300">
                      As per government directives, all new digital services must use UX4G
                      design system components and patterns.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <GovernanceItem
                  label="Conformance Dashboard"
                  description="Track design system compliance across departments"
                  path="/governance/conformance"
                />
                <GovernanceItem
                  label="Adoption Metrics"
                  description="Monitor adoption rates and usage statistics"
                  path="/governance/adoption"
                />
                <GovernanceItem
                  label="Service Analytics"
                  description="Analyze service performance and user behavior"
                  path="/governance/analytics"
                />
              </div>
            </div>

            {/* Adoption Stats */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground dark:text-gray-100 mb-3">Adoption Status</h2>
              <p className="text-base sm:text-lg text-muted-foreground dark:text-gray-400 mb-8">
                Current adoption across government departments and vendors
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <AdoptionStat number="47" label="Government Departments" />
                <AdoptionStat number="34" label="Registered Vendors" />
                <AdoptionStat number="89%" label="Conformance Rate" />
                <AdoptionStat number="156" label="Active Services" />
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-6">
                <h3 className="font-bold text-foreground dark:text-gray-100 mb-4">Key Benefits Realized</h3>
                <div className="space-y-3">
                  <BenefitItem text="32% reduction in development time" />
                  <BenefitItem text="95% accessibility compliance achieved" />
                  <BenefitItem text="Consistent experience across 156 services" />
                  <BenefitItem text="87% positive citizen feedback" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================== LATEST UPDATES ==================== */}
      <section className="bg-background dark:bg-gray-800 border-b border-border dark:border-gray-700">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground dark:text-gray-100 mb-3">Latest Updates</h2>
            <p className="text-base sm:text-lg text-muted-foreground dark:text-gray-400">Recent releases and announcements</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <UpdateCard
              date="April 2026"
              title="IA Reorganization Complete"
              description="Reorganized entire platform into clean 8-tier architecture with 109 active pages and zero duplication."
              badge="Platform Update"
              badgeColor="blue"
            />

            <UpdateCard
              date="March 2026"
              title="Pattern Packages Released"
              description="@ux4g/react-patterns and @ux4g/angular-patterns now available with 14 high-priority patterns."
              badge="New Release"
              badgeColor="green"
            />

            <UpdateCard
              date="February 2026"
              title="Angular Core Components"
              description="Complete parity with React components. All 28 components now available for Angular with ControlValueAccessor support."
              badge="Framework Support"
              badgeColor="purple"
            />
          </div>
        </div>
      </section>

      {/* ==================== SUPPORT & CONTACT ==================== */}
      <section className="bg-card dark:bg-gray-900 border-b border-border dark:border-gray-700">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground dark:text-gray-100 mb-3">Support & Contact</h2>
            <p className="text-base sm:text-lg text-muted-foreground dark:text-gray-400">Get help and connect with the UX4G team</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SupportCard
              icon={<BookOpen size={32} />}
              title="Documentation"
              description="Browse comprehensive documentation, guides, and API references"
              link={{ label: "View Documentation", path: "/resources" }}
            />

            <SupportCard
              icon={<GitBranch size={32} />}
              title="GitHub Repository"
              description="Access source code, report issues, and contribute to the project"
              link={{ label: "Visit GitHub", path: "https://github.com", external: true }}
            />

            <SupportCard
              icon={<Users size={32} />}
              title="Contact Team"
              description="Reach out to the UX4G team for support and guidance"
              link={{ label: "ux4g@gov.in", path: "mailto:ux4g@gov.in", external: true }}
            />
          </div>

          <div className="mt-12 bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-foreground dark:text-gray-100 mb-4">For Departments</h3>
                <p className="text-sm text-muted-foreground dark:text-gray-300 mb-4">
                  Government departments implementing UX4G should contact the platform team
                  for onboarding support, training, and compliance guidance.
                </p>
                <a href="mailto:departments@ux4g.gov.in" className="text-primary dark:text-blue-400 font-bold hover:underline">
                  departments@ux4g.gov.in
                </a>
              </div>
              <div>
                <h3 className="font-bold text-foreground dark:text-gray-100 mb-4">For Vendors</h3>
                <p className="text-sm text-muted-foreground dark:text-gray-300 mb-4">
                  Vendors building government services must register and demonstrate UX4G
                  conformance. Contact the vendor relations team to get started.
                </p>
                <a href="mailto:vendors@ux4g.gov.in" className="text-primary dark:text-blue-400 font-bold hover:underline">
                  vendors@ux4g.gov.in
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

function HeroBannerImage() {
  return (
    <div className="relative w-full max-w-[520px] rounded-[28px] border border-border/80 dark:border-gray-700/80 bg-card/90 dark:bg-gray-800/90 shadow-2xl overflow-hidden backdrop-blur-sm">
      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#FF9933] via-white to-[#138808]" />

      <div className="p-6 sm:p-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary dark:text-blue-400">
              Unified Delivery
            </p>
            <h3 className="text-2xl font-bold text-foreground dark:text-gray-100 mt-2">
              Build Trusted Public Services
            </h3>
          </div>
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg dark:bg-blue-600">
            <Building2 size={28} />
          </div>
        </div>

        <div className="rounded-2xl bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-950/40 p-5 border border-border dark:border-gray-700">
          <svg
            viewBox="0 0 420 260"
            className="w-full h-auto"
            role="img"
            aria-label="Illustration of connected government service modules"
          >
            <defs>
              <linearGradient id="hero-panel" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#eef4ff" />
              </linearGradient>
              <linearGradient id="hero-accent" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FF9933" />
                <stop offset="50%" stopColor="#005196" />
                <stop offset="100%" stopColor="#138808" />
              </linearGradient>
            </defs>

            <rect x="18" y="18" width="384" height="224" rx="24" fill="url(#hero-panel)" />
            <rect x="38" y="40" width="130" height="76" rx="18" fill="#ffffff" stroke="#dbe4f3" />
            <rect x="184" y="40" width="198" height="34" rx="14" fill="#005196" opacity="0.95" />
            <rect x="184" y="82" width="124" height="12" rx="6" fill="#d9e7fb" />
            <rect x="184" y="100" width="168" height="12" rx="6" fill="#e8eef8" />

            <rect x="38" y="138" width="108" height="82" rx="18" fill="#fff6ea" stroke="#ffd5a8" />
            <rect x="157" y="138" width="108" height="82" rx="18" fill="#eef4ff" stroke="#bfd3ff" />
            <rect x="276" y="138" width="106" height="82" rx="18" fill="#ecf9ee" stroke="#b8e3c1" />

            <path d="M168 79 L184 79" stroke="#9db4db" strokeWidth="6" strokeLinecap="round" />
            <path d="M92 116 L92 138" stroke="#ffbf73" strokeWidth="6" strokeLinecap="round" />
            <path d="M211 116 L211 138" stroke="#7ea7f5" strokeWidth="6" strokeLinecap="round" />
            <path d="M329 116 L329 138" stroke="#69bf7b" strokeWidth="6" strokeLinecap="round" />

            <circle cx="84" cy="78" r="20" fill="#FF9933" opacity="0.18" />
            <circle cx="230" cy="57" r="10" fill="#ffffff" opacity="0.95" />
            <circle cx="258" cy="57" r="10" fill="#ffffff" opacity="0.7" />
            <circle cx="286" cy="57" r="10" fill="#ffffff" opacity="0.45" />

            <rect x="58" y="59" width="56" height="10" rx="5" fill="#005196" opacity="0.9" />
            <rect x="58" y="76" width="82" height="8" rx="4" fill="#b8c8de" />
            <rect x="58" y="90" width="70" height="8" rx="4" fill="#d9e2ee" />

            <rect x="58" y="156" width="46" height="10" rx="5" fill="#cc5f00" opacity="0.95" />
            <rect x="58" y="174" width="66" height="8" rx="4" fill="#f1b76e" />
            <rect x="58" y="188" width="54" height="8" rx="4" fill="#f8dcb6" />

            <rect x="177" y="156" width="58" height="10" rx="5" fill="#005196" opacity="0.95" />
            <rect x="177" y="174" width="68" height="8" rx="4" fill="#92b5f5" />
            <rect x="177" y="188" width="52" height="8" rx="4" fill="#d9e7fb" />

            <rect x="294" y="156" width="52" height="10" rx="5" fill="#138808" opacity="0.95" />
            <rect x="294" y="174" width="66" height="8" rx="4" fill="#8fd6a0" />
            <rect x="294" y="188" width="46" height="8" rx="4" fill="#d7f0dc" />

            <path d="M54 228 H366" stroke="url(#hero-accent)" strokeWidth="8" strokeLinecap="round" opacity="0.95" />
          </svg>
        </div>

        <div className="grid grid-cols-3 gap-3 mt-5">
          <div className="rounded-xl bg-slate-50 dark:bg-gray-900/70 p-3 border border-border dark:border-gray-700">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground dark:text-gray-400">Tokens</p>
            <p className="mt-1 text-sm font-bold text-foreground dark:text-gray-100">Unified</p>
          </div>
          <div className="rounded-xl bg-slate-50 dark:bg-gray-900/70 p-3 border border-border dark:border-gray-700">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground dark:text-gray-400">Components</p>
            <p className="mt-1 text-sm font-bold text-foreground dark:text-gray-100">Accessible</p>
          </div>
          <div className="rounded-xl bg-slate-50 dark:bg-gray-900/70 p-3 border border-border dark:border-gray-700">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground dark:text-gray-400">Services</p>
            <p className="mt-1 text-sm font-bold text-foreground dark:text-gray-100">Scalable</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==================== COMPONENTS ====================

function StatItem({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center md:text-left">
      <div className="text-2xl sm:text-3xl font-bold text-primary dark:text-blue-400 mb-1">{number}</div>
      <div className="text-sm text-muted-foreground dark:text-gray-400">{label}</div>
    </div>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-border bg-background px-4 py-3 shadow-sm dark:bg-gray-900">
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground dark:text-gray-400">
        {label}
      </p>
      <p className="mt-1 text-sm font-bold text-foreground dark:text-gray-100">{value}</p>
    </div>
  );
}

function RoleCard({ icon, role, description, links }: {
  icon: React.ReactNode;
  role: string;
  description: string;
  links: Array<{ label: string; path: string }>;
}) {
  return (
    <div className="bg-card dark:bg-gray-800 border-2 border-border dark:border-gray-700 rounded-lg p-6 hover:border-primary dark:hover:border-blue-500 transition-colors">
      <div className="text-primary dark:text-blue-400 mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-foreground dark:text-gray-100 mb-2">{role}</h3>
      <p className="text-sm text-muted-foreground dark:text-gray-400 mb-4">{description}</p>
      <div className="space-y-2">
        {links.map((link, i) => (
          <Link
            key={i}
            to={link.path}
            className="flex items-center gap-2 text-sm text-primary dark:text-blue-400 font-medium hover:underline"
          >
            <ArrowRight size={14} />
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

function LayerCard({ number, title, description, path, color, items }: {
  number: string;
  title: string;
  description: string;
  path: string;
  color: string;
  items: string[];
}) {
  const colorClasses = {
    blue: 'bg-blue-600',
    green: 'bg-green-600',
    purple: 'bg-purple-600',
    orange: 'bg-orange-600',
    teal: 'bg-teal-600',
    indigo: 'bg-indigo-600',
    pink: 'bg-pink-600',
    red: 'bg-red-600'
  };

  return (
    <Link
      to={path}
      className="bg-card dark:bg-gray-900 border-2 border-border dark:border-gray-700 rounded-lg p-6 hover:border-primary dark:hover:border-blue-500 transition-colors group"
    >
      <div className="flex items-start gap-4">
        <div className={`flex-shrink-0 w-10 h-10 ${colorClasses[color as keyof typeof colorClasses]} text-primary-foreground rounded flex items-center justify-center font-bold`}>
          {number}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-foreground dark:text-gray-100 mb-2 group-hover:text-primary dark:group-hover:text-blue-400">{title}</h3>
          <p className="text-sm text-muted-foreground dark:text-gray-400 mb-3">{description}</p>
          <div className="flex flex-wrap gap-2">
            {items.map((item, i) => (
              <span key={i} className="text-xs px-2 py-1 bg-muted dark:bg-gray-800 text-muted-foreground dark:text-gray-300 rounded">
                {item}
              </span>
            ))}
          </div>
        </div>
        <ArrowRight size={20} className="text-gray-400 dark:text-muted-foreground group-hover:text-primary dark:group-hover:text-blue-400 flex-shrink-0" />
      </div>
    </Link>
  );
}

function PatternItem({ title, description, path, count }: {
  title: string;
  description: string;
  path: string;
  count: string;
}) {
  return (
    <Link
      to={path}
      className="block bg-card dark:bg-gray-800 border-2 border-border dark:border-gray-700 rounded-lg p-4 hover:border-primary dark:hover:border-blue-500 transition-colors group"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h4 className="font-bold text-foreground dark:text-gray-100 mb-1 group-hover:text-primary dark:group-hover:text-blue-400">{title}</h4>
          <p className="text-sm text-muted-foreground dark:text-gray-400 mb-2">{description}</p>
          <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded font-medium">{count}</span>
        </div>
        <ArrowRight size={16} className="text-gray-400 dark:text-muted-foreground group-hover:text-primary dark:group-hover:text-blue-400 flex-shrink-0 mt-1" />
      </div>
    </Link>
  );
}

function ServiceFlowItem({ label, count }: { label: string; count: string }) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-border dark:border-gray-700 last:border-0">
      <span className="text-sm font-medium text-foreground dark:text-gray-100">{label}</span>
      <span className="text-xs px-2 py-1 bg-card dark:bg-gray-800 text-muted-foreground dark:text-gray-300 rounded">{count}</span>
    </div>
  );
}

function ImplementationCard({ icon, title, description, items, cta }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  items: string[];
  cta: { label: string; path: string };
}) {
  return (
    <div className="bg-card dark:bg-gray-800 border-2 border-border dark:border-gray-700 rounded-lg p-6">
      <div className="text-primary dark:text-blue-400 mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-foreground dark:text-gray-100 mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground dark:text-gray-400 mb-4">{description}</p>
      <ul className="space-y-2 mb-6">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground dark:text-gray-300">
            <CheckCircle size={16} className="text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
            {item}
          </li>
        ))}
      </ul>
      <Link
        to={cta.path}
        className="inline-flex items-center gap-2 text-primary dark:text-blue-400 font-bold hover:underline"
      >
        {cta.label} <ArrowRight size={16} />
      </Link>
    </div>
  );
}

function GovernanceItem({ label, description, path }: {
  label: string;
  description: string;
  path: string;
}) {
  return (
    <Link
      to={path}
      className="flex items-start gap-3 p-4 bg-card dark:bg-gray-800 border-2 border-border dark:border-gray-700 rounded-lg hover:border-primary dark:hover:border-blue-500 transition-colors group"
    >
      <div className="flex-1">
        <h4 className="font-bold text-foreground dark:text-gray-100 mb-1 group-hover:text-primary dark:group-hover:text-blue-400">{label}</h4>
        <p className="text-sm text-muted-foreground dark:text-gray-400">{description}</p>
      </div>
      <ArrowRight size={16} className="text-gray-400 dark:text-muted-foreground group-hover:text-primary dark:group-hover:text-blue-400 flex-shrink-0 mt-1" />
    </Link>
  );
}

function AdoptionStat({ number, label }: { number: string; label: string }) {
  return (
    <div className="bg-card dark:bg-gray-800 border-2 border-border dark:border-gray-700 rounded-lg p-4 text-center">
      <div className="text-3xl font-bold text-primary dark:text-blue-400 mb-1">{number}</div>
      <div className="text-sm text-muted-foreground dark:text-gray-400">{label}</div>
    </div>
  );
}

function BenefitItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2">
      <CheckCircle size={16} className="text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
      <span className="text-sm text-muted-foreground dark:text-gray-300">{text}</span>
    </div>
  );
}

function UpdateCard({ date, title, description, badge, badgeColor }: {
  date: string;
  title: string;
  description: string;
  badge: string;
  badgeColor: string;
}) {
  const badgeColors = {
    blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400',
    green: 'bg-green-100 dark:bg-green-900/30 text-[var(--ux4g-color-feedback-success)] dark:text-green-400',
    purple: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400'
  };

  return (
    <div className="bg-card dark:bg-gray-800 border-2 border-border dark:border-gray-700 rounded-lg p-6">
      <div className="flex items-center gap-2 mb-3">
        <span className={`text-xs px-2 py-1 ${badgeColors[badgeColor as keyof typeof badgeColors]} rounded font-bold`}>
          {badge}
        </span>
        <span className="text-xs text-muted-foreground dark:text-gray-400">{date}</span>
      </div>
      <h3 className="font-bold text-foreground dark:text-gray-100 mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground dark:text-gray-400">{description}</p>
    </div>
  );
}

function SupportCard({ icon, title, description, link }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: { label: string; path: string; external?: boolean };
}) {
  return (
    <div className="bg-card dark:bg-gray-800 border-2 border-border dark:border-gray-700 rounded-lg p-6">
      <div className="text-primary dark:text-blue-400 mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-foreground dark:text-gray-100 mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground dark:text-gray-400 mb-4">{description}</p>
      {link.external ? (
        <a
          href={link.path}
          className="inline-flex items-center gap-2 text-primary dark:text-blue-400 font-bold hover:underline"
        >
          {link.label} <ArrowRight size={16} />
        </a>
      ) : (
        <Link
          to={link.path}
          className="inline-flex items-center gap-2 text-primary dark:text-blue-400 font-bold hover:underline"
        >
          {link.label} <ArrowRight size={16} />
        </Link>
      )}
    </div>
  );
}
