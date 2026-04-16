import type { CSSProperties } from "react";
import { FileText, User, CreditCard, Search as SearchIcon, FileCheck, AlertTriangle, CheckCircle, ArrowRight, Sparkles, Layers, Shield, Workflow, Building2, Globe2 } from "lucide-react";
import { Link } from "react-router";

export default function Patterns() {
  const patterns = [
    {
      icon: FileText,
      title: "Form Patterns",
      description: "Structured approaches for data collection including single-page forms, multi-step wizards, and validation patterns.",
      examples: ["Application Forms", "Registration", "Survey Forms", "Feedback Forms"],
      color: "from-blue-600 to-blue-700",
      link: "/patterns/forms"
    },
    {
      icon: User,
      title: "Authentication",
      description: "Secure login, registration, password reset, and multi-factor authentication patterns.",
      examples: ["Sign In", "Sign Up", "Password Reset", "OTP Verification"],
      color: "from-purple-600 to-purple-700",
      link: "/patterns/identity"
    },
    {
      icon: SearchIcon,
      title: "Search & Filter",
      description: "Patterns for helping users find information efficiently including search, filtering, and sorting.",
      examples: ["Global Search", "Advanced Filters", "Faceted Search", "Sort Options"],
      color: "from-green-600 to-green-700",
      link: "/patterns/search-discovery"
    },
    {
      icon: CreditCard,
      title: "Payment & Transactions",
      description: "Secure payment flows, transaction confirmations, and receipt patterns for government services.",
      examples: ["Fee Payment", "Bill Payment", "Transaction History", "Receipts"],
      color: "from-orange-600 to-orange-700",
      link: "/patterns/payment"
    },
    {
      icon: FileCheck,
      title: "Document Management",
      description: "Patterns for uploading, viewing, downloading, and managing documents and certificates.",
      examples: ["Document Upload", "File Preview", "Download Center", "Certificate Generation"],
      color: "from-teal-600 to-teal-700",
      link: "/patterns/data-input"
    },
    {
      icon: AlertTriangle,
      title: "Error & Empty States",
      description: "Handling errors gracefully and communicating when content is unavailable or actions fail.",
      examples: ["404 Pages", "No Results", "Network Errors", "Permission Denied"],
      color: "from-red-600 to-red-700",
      link: "/patterns/resilience"
    }
  ];

  const serviceFlows = [
    {
      title: "Citizen Application Flow",
      steps: ["Login/Register", "Fill Application", "Upload Documents", "Preview & Submit", "Payment", "Confirmation"]
    },
    {
      title: "Status Tracking Flow",
      steps: ["Enter Reference", "View Status", "Download Updates", "Provide Feedback"]
    },
    {
      title: "Certificate Issuance Flow",
      steps: ["Verify Identity", "Check Eligibility", "Generate Certificate", "Digital Signature", "Download/Print"]
    }
  ];

  const bestPractices = [
    {
      title: "Progressive Disclosure",
      description: "Show information progressively to avoid overwhelming users. Display only essential information initially and reveal details on demand."
    },
    {
      title: "Clear Feedback",
      description: "Provide immediate, clear feedback for all user actions. Use success messages, error states, and loading indicators appropriately."
    },
    {
      title: "Consistent Navigation",
      description: "Maintain consistent navigation patterns across services. Users should always know where they are and how to move forward or backward."
    },
    {
      title: "Mobile-First Approach",
      description: "Design for mobile devices first, ensuring core functionality works on smaller screens before enhancing for larger displays."
    },
    {
      title: "Accessibility by Default",
      description: "Build accessibility into every pattern. Ensure keyboard navigation, screen reader support, and proper color contrast."
    },
    {
      title: "Multilingual Support",
      description: "Design patterns that accommodate multiple languages, including right-to-left scripts and varying text lengths."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground dark:bg-gray-900">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-gray-900 dark:to-blue-950/30">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#FF9933] via-white to-[#138808]" />
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-14">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.14fr)_minmax(320px,0.86fr)] items-start">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-card/85 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-700 shadow-sm dark:border-blue-800 dark:bg-blue-950/40 dark:text-blue-300">
                <Sparkles size={14} />
                Reusable interaction patterns
              </div>

              <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground dark:text-gray-50">
                Patterns
              </h1>

              <p className="mt-5 max-w-2xl text-lg sm:text-xl leading-relaxed text-muted-foreground dark:text-gray-300">
                Reusable solutions for common design problems in government digital services.
                Patterns combine components and behavior to reduce duplication and keep user
                journeys consistent across the platform.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/pattern-library"
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-[#000066] dark:bg-blue-600 dark:hover:bg-blue-700"
                >
                  <Layers size={16} />
                  Open pattern library
                </Link>
                <Link
                  to="/systems/form-intelligence"
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary dark:bg-gray-800 dark:text-gray-100 dark:hover:border-blue-500"
                >
                  <Workflow size={16} />
                  View form intelligence
                </Link>
                <Link
                  to="/systems/multilingual"
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary dark:bg-gray-800 dark:text-gray-100 dark:hover:border-blue-500"
                >
                  <Globe2 size={16} />
                  View multilingual guidance
                </Link>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
                <PatternStat value="6" label="pattern groups" />
                <PatternStat value="3" label="journey views" />
                <PatternStat value="100%" label="accessible demos" />
                <PatternStat value="1" label="shared standard" />
              </div>
            </div>

            <div className="lg:justify-self-end">
              <div className="rounded-[32px] border border-border bg-card/95 p-7 shadow-xl backdrop-blur-sm dark:bg-gray-800/95">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                      Pattern map
                    </p>
                  <h2 className="mt-2 text-2xl font-bold text-foreground dark:text-gray-50">
                      A responsive overview for complex service design
                  </h2>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-sm dark:bg-blue-600">
                    <Building2 size={24} />
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  <MiniSummary title="Reusable patterns" description="Design once, apply across similar citizen journeys." />
                  <MiniSummary title="Service flows" description="Connect patterns into complete end-to-end experiences." />
                  <MiniSummary title="Best practice" description="Keep logic, layout, and feedback aligned across modules." />
                </div>

                <div className="mt-5 rounded-2xl border border-border bg-gradient-to-br from-blue-50 to-emerald-50 p-4 dark:from-blue-950/30 dark:to-emerald-950/20">
                  <div className="flex items-center gap-2 text-sm font-semibold text-foreground dark:text-gray-100">
                    <Shield size={16} className="text-emerald-600 dark:text-emerald-400" />
                    Government-grade consistency
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground dark:text-gray-300">
                    All pattern guidance is intended to help teams build predictable,
                    accessible, and scalable service experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pattern Categories */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(280px,0.82fr)_minmax(0,1.18fr)] items-start">
            <aside className="lg:sticky lg:top-24 space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Pattern library
              </p>
              <h2 className="text-3xl font-bold text-foreground dark:text-gray-50">
                Common patterns for consistent service design
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-muted-foreground dark:text-gray-300">
                The library is organised around the most common government service problems,
                so teams can move from overview to implementation without losing clarity.
              </p>

              <div className="rounded-[24px] border border-border bg-card p-5 shadow-sm dark:bg-gray-800">
                <div className="flex items-center gap-2 text-sm font-semibold text-foreground dark:text-gray-50">
                  <Layers size={16} className="text-primary dark:text-blue-300" />
                  Recommended entry points
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {patterns.map((pattern) => (
                    <a
                      key={pattern.title}
                      href={pattern.link}
                      className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-primary dark:bg-gray-900 dark:text-gray-100"
                    >
                      {pattern.title}
                    </a>
                  ))}
                </div>
              </div>
            </aside>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {patterns.map((pattern, index) => (
                <Link
                  key={index}
                  to={pattern.link}
                  className="group overflow-hidden rounded-[28px] border border-border bg-card shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-xl dark:bg-gray-800"
                >
                  <div className={`h-1.5 bg-gradient-to-r ${pattern.color}`} />
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${pattern.color} shadow-sm`}>
                        <pattern.icon className="text-white" size={22} />
                      </div>
                      <ArrowRight size={18} className="text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary dark:group-hover:text-blue-300" />
                    </div>

                    <h3 className="mt-5 text-2xl font-bold text-foreground transition-colors group-hover:text-primary dark:text-gray-50 dark:group-hover:text-blue-300">
                      {pattern.title}
                    </h3>
                    <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted-foreground dark:text-gray-300">
                      {pattern.description}
                    </p>

                    <div className="mt-5 space-y-3">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                        Examples
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {pattern.examples.map((example) => (
                          <span
                            key={example}
                            className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground dark:bg-gray-700 dark:text-gray-300"
                          >
                            {example}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary dark:text-blue-300">
                      View patterns
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Flows */}
      <section className="border-y border-border bg-background py-16 lg:py-20 dark:bg-gray-800">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(280px,0.82fr)_minmax(0,1.18fr)] items-start">
            <aside>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Common service flows
              </p>
              <h2 className="mt-3 text-3xl font-bold text-foreground dark:text-gray-50">
                End-to-end journeys that repeat across services
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground dark:text-gray-300">
                These flow summaries help teams stitch patterns together into service
                journeys without losing consistency, state, or accessibility.
              </p>
            </aside>

            <div className="space-y-5">
              {serviceFlows.map((flow, index) => (
                <div
                  key={index}
                  className="rounded-[28px] border border-border bg-card p-6 shadow-sm dark:bg-gray-900"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                        Flow {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-2 text-2xl font-bold text-foreground dark:text-gray-50">
                        {flow.title}
                      </h3>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    {flow.steps.map((step, idx) => (
                      <div key={step} className="flex items-center gap-3">
                        <div className="flex items-center gap-3 rounded-full border border-border bg-background px-3 py-2 dark:bg-gray-800">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                            {idx + 1}
                          </div>
                          <span className="text-sm font-medium text-foreground dark:text-gray-100">{step}</span>
                        </div>
                        {idx < flow.steps.length - 1 && (
                          <ArrowRight size={16} className="hidden text-muted-foreground md:block" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Form Pattern Example */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(280px,0.82fr)_minmax(0,1.18fr)] items-start">
            <aside className="lg:sticky lg:top-24">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Pattern example
              </p>
              <h2 className="mt-3 text-3xl font-bold text-foreground dark:text-gray-50">
                Application form pattern
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground dark:text-gray-300">
                A complete example of how a pattern can combine steps, validation, and
                responsive layout to support a government application journey.
              </p>
            </aside>

            <div className="rounded-[32px] border border-border bg-card shadow-sm dark:bg-gray-800 overflow-hidden">
              <div className="border-b border-border bg-background px-6 py-5 dark:bg-gray-900 dark:border-gray-700">
                <div className="flex gap-3 overflow-x-auto pb-2 sm:grid sm:grid-cols-4 sm:overflow-visible sm:pb-0">
                  {["Personal Info", "Documents", "Preview", "Submit"].map((step, idx) => (
                    <div key={step} className="flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 dark:bg-gray-800 min-w-[160px] sm:min-w-0">
                      <div
                        className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold"
                        style={idx === 0 ? {
                          backgroundColor: 'var(--ux4g-color-brand-primary)',
                          color: 'var(--ux4g-color-text-inverse)'
                        } : {
                          backgroundColor: 'var(--ux4g-color-background-secondary)',
                          color: 'var(--ux4g-color-text-secondary)'
                        }}
                      >
                        {idx < 1 ? <CheckCircle size={18} /> : idx + 1}
                      </div>
                      <span className="text-xs font-medium text-muted-foreground dark:text-gray-300">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[minmax(0,1fr)_280px]">
                <div>
                  <h3 className="text-2xl font-semibold text-foreground dark:text-gray-50 mb-6">
                    Personal Information
                  </h3>

                  <div className="space-y-5">
                    <div className="grid gap-5 md:grid-cols-2">
                      <Field label="First Name *" placeholder="Enter first name" />
                      <Field label="Last Name *" placeholder="Enter last name" />
                    </div>
                    <Field label="Email Address *" placeholder="your.email@example.com" type="email" />
                    <Field label="Phone Number *" placeholder="+91 XXXXX XXXXX" type="tel" />
                    <Field label="State *" select options={["Select your state", "Delhi", "Maharashtra", "Karnataka", "Tamil Nadu"]} />
                  </div>

                  <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between sm:items-center">
                    <button className="inline-flex items-center justify-center rounded-xl border border-border px-5 py-3 text-sm font-semibold text-muted-foreground transition-colors hover:bg-background dark:hover:bg-gray-700 dark:text-gray-300">
                      Cancel
                    </button>
                    <button
                      className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold bg-[#005196] text-white hover:bg-[#004178] transition-colors"
                    >
                      Continue to Documents
                    </button>
                  </div>
                </div>

                <div className="rounded-[28px] border border-border bg-background p-5 dark:bg-gray-900">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    Pattern highlights
                  </p>
                  <div className="mt-4 space-y-3">
                    <MiniSummary title="Progressive disclosure" description="Reveal complexity only when it is needed." />
                    <MiniSummary title="Clear validation" description="Keep guidance close to the field and easy to act on." />
                    <MiniSummary title="Mobile-first" description="Ensure the pattern works cleanly on small screens first." />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="border-y border-border bg-background py-16 lg:py-20 dark:bg-gray-800">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(280px,0.82fr)_minmax(0,1.18fr)] items-start">
            <aside>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Design best practices
              </p>
              <h2 className="mt-3 text-3xl font-bold text-foreground dark:text-gray-50">
                Principles that keep patterns trustworthy
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground dark:text-gray-300">
                Use these guidance points when implementing patterns in government digital
                services so the experience stays coherent and accessible.
              </p>
            </aside>

            <div className="grid gap-5 md:grid-cols-2">
              {bestPractices.map((practice, index) => (
                <div
                  key={index}
                  className="rounded-[28px] border border-border bg-card p-6 shadow-sm dark:bg-gray-900"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300">
                      <CheckCircle size={18} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground dark:text-gray-50 mb-2">
                        {practice.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground dark:text-gray-300">
                        {practice.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Accessibility in Patterns */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <div className="rounded-[32px] border border-border bg-gradient-to-br from-[#000080] via-[#000070] to-[#000050] p-8 text-white shadow-xl dark:from-blue-900 dark:via-blue-950 dark:to-blue-950">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-200">
                Accessibility in patterns
              </p>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold">
                Accessibility is built into every pattern
              </h2>
              <p className="mt-5 text-lg sm:text-xl leading-relaxed text-blue-100">
                Every pattern in the UX4G Design System is designed with accessible headings,
                keyboard navigation, screen reader support, focus management, and clear error messaging.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <MetricCard title="WCAG" value="AA Compliant" />
                <MetricCard title="Keyboard" value="100% Accessible" />
                <MetricCard title="Contrast" value="4.5:1 min" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function PatternStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card px-4 py-4 shadow-sm dark:bg-gray-800">
      <div className="text-2xl font-bold text-foreground dark:text-gray-50">{value}</div>
      <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </div>
    </div>
  );
}

function MiniSummary({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-2xl border border-border bg-background p-4 dark:bg-gray-800">
      <p className="font-semibold text-foreground dark:text-gray-50">{title}</p>
      <p className="mt-1 text-sm leading-relaxed text-muted-foreground dark:text-gray-300">
        {description}
      </p>
    </div>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
  select = false,
  options = [],
}: {
  label: string;
  placeholder?: string;
  type?: string;
  select?: boolean;
  options?: string[];
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-muted-foreground dark:text-gray-300 mb-2">
        {label}
      </label>
      {select ? (
        <select className="w-full rounded-xl border border-border bg-card px-4 py-3 text-foreground outline-none transition focus:ring-2 focus:border-transparent dark:bg-gray-900 dark:text-gray-100" style={{ '--tw-ring-color': 'var(--ux4g-color-brand-primary)' } as CSSProperties}>
          {options.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          className="w-full rounded-xl border border-border bg-card px-4 py-3 text-foreground outline-none transition focus:ring-2 focus:border-transparent dark:bg-gray-900 dark:text-gray-100"
          style={{ '--tw-ring-color': 'var(--ux4g-color-brand-primary)' } as CSSProperties}
        />
      )}
    </div>
  );
}

function MetricCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/15 bg-card/10 p-5 backdrop-blur-sm">
      <div className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">{title}</div>
      <div className="mt-2 text-lg font-bold text-white">{value}</div>
    </div>
  );
}
