import { Link } from "react-router";
import {
  Shield,
  FileText,
  CheckSquare,
  Eye,
  Users,
  UserX,
  UserCheck,
  Lock,
  Info,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  Clock,
  HelpCircle,
  Settings,
  Globe,
  Database,
  Key,
  CreditCard,
  XCircle,
} from "lucide-react";

export default function ConsentDeclarationPatterns() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b-2 border-border">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-8">
          <div className="flex items-start justify-between">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FF9933] to-[#138808] rounded flex items-center justify-center">
                  <Shield size={32} className="text-white" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">
                    UX4G Pattern Family
                  </div>
                  <h1 className="text-3xl font-bold text-foreground">
                    Consent, Declaration & Legal Acknowledgment
                    Patterns
                  </h1>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A structured pattern family for user consent,
                legal declarations, acknowledgment flows, and
                trust communication across government digital
                services. These patterns ensure compliance,
                transparency, and user autonomy while
                maintaining accessible, plain-language
                interfaces suitable for diverse citizen
                populations.
              </p>
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-sm"></div>
                  <span className="text-muted-foreground">
                    Pattern Family ID:{" "}
                    <span className="font-bold text-foreground">
                      UX4G-PAT-010
                    </span>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-sm"></div>
                  <span className="text-muted-foreground">
                    Version:{" "}
                    <span className="font-bold text-foreground">
                      1.0.0
                    </span>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-sm"></div>
                  <span className="text-muted-foreground">
                    Updated:{" "}
                    <span className="font-bold text-foreground">
                      April 2026
                    </span>
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="px-6 py-3 bg-green-100 border-2 border-green-300 rounded text-green-800 font-bold text-sm text-center">
                STABLE
              </div>
              <div className="px-6 py-3 bg-red-50 dark:bg-red-950/30 border-2 border-red-200 dark:border-red-800 rounded text-red-700 font-bold text-xs text-center uppercase">
                Conformance
                <br />
                Mandatory
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Overview Section */}
      <section className="bg-card border-b border-border">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-300 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <Info size={24} className="text-primary" />
                <h3 className="font-bold text-foreground">
                  Purpose
                </h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Enable users to provide informed consent, make
                declarations, acknowledge legal terms, and
                manage their authorization preferences across
                government services with transparency and
                control.
              </p>
            </div>

            <div className="bg-orange-50 dark:bg-orange-950/30 border-2 border-orange-300 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <AlertCircle
                  size={24}
                  className="text-orange-600"
                />
                <h3 className="font-bold text-foreground">
                  Key Principles
                </h3>
              </div>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle
                    size={14}
                    className="text-orange-600 mt-0.5 flex-shrink-0"
                  />
                  <span>
                    Informed consent with plain language
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle
                    size={14}
                    className="text-orange-600 mt-0.5 flex-shrink-0"
                  />
                  <span>User autonomy and control</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle
                    size={14}
                    className="text-orange-600 mt-0.5 flex-shrink-0"
                  />
                  <span>Transparent data usage</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 dark:bg-green-950/30 border-2 border-green-300 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle
                  size={24}
                  className="text-green-600"
                />
                <h3 className="font-bold text-foreground">
                  Compliance
                </h3>
              </div>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle
                    size={14}
                    className="text-green-600 mt-0.5 flex-shrink-0"
                  />
                  <span>
                    Digital Personal Data Protection Act
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle
                    size={14}
                    className="text-green-600 mt-0.5 flex-shrink-0"
                  />
                  <span>IT Act 2000 compliance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle
                    size={14}
                    className="text-green-600 mt-0.5 flex-shrink-0"
                  />
                  <span>WCAG 2.1 AA accessibility</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Pattern Categories */}
          <div className="border-l-4 border-primary pl-4 mb-6">
            <h2 className="text-2xl font-bold text-foreground">
              Pattern Collection
            </h2>
            <p className="text-muted-foreground mt-2">
              7 interconnected patterns covering consent
              capture, declarations, legal acknowledgment, and
              authorization management
            </p>
          </div>
        </div>
      </section>

      {/* Pattern Grid */}
      <main className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-2 gap-6">
          {/* Consent Capture */}
          <PatternCard
            to="/patterns/consent/consent-capture"
            icon={<CheckSquare size={32} />}
            iconBg="bg-blue-100"
            iconColor="text-primary"
            patternId="UX4G-PAT-010-01"
            title="Consent Capture"
            description="Standard pattern for capturing user consent with clear explanation, opt-in/opt-out mechanisms, and confirmation. Used for data collection, processing authorization, and service-specific permissions."
            features={[
              "Clear purpose explanation",
              "Granular consent options",
              "Easy decline path",
              "Confirmation screen",
            ]}
            complexity="Medium"
            estimatedTime="2-3 days"
          />

          {/* Declaration Before Submission */}
          <PatternCard
            to="/declaration-submission-pattern"
            icon={<FileText size={32} />}
            iconBg="bg-green-100"
            iconColor="text-green-700"
            patternId="UX4G-PAT-010-02"
            title="Declaration Before Submission"
            description="Self-declaration pattern used before form submission where users confirm accuracy of information, acknowledge consequences, and accept responsibility for submitted data."
            features={[
              "Statement review",
              "Checkbox confirmation",
              "Legal implications clarity",
              "Pre-submission validation",
            ]}
            complexity="Low"
            estimatedTime="1-2 days"
          />

          {/* Terms Acceptance */}
          <PatternCard
            to="/terms-acceptance-pattern"
            icon={<FileText size={32} />}
            iconBg="bg-purple-100"
            iconColor="text-purple-700"
            patternId="UX4G-PAT-010-03"
            title="Terms & Conditions Acceptance"
            description="Pattern for presenting terms of service, user agreements, and service conditions with readable format, summary view, and mandatory acceptance before service access."
            features={[
              "Summary + full text",
              "Scrollable review",
              "Mandatory acceptance",
              "Version tracking",
            ]}
            complexity="Medium"
            estimatedTime="2-3 days"
          />

          {/* Privacy Notice */}
          <PatternCard
            to="/privacy-notice-pattern"
            icon={<Eye size={32} />}
            iconBg="bg-indigo-100"
            iconColor="text-indigo-700"
            patternId="UX4G-PAT-010-04"
            title="Privacy Notice Acknowledgment"
            description="Privacy policy communication pattern explaining data collection, usage, storage, and sharing practices with plain language summaries and acknowledgment mechanism."
            features={[
              "Plain language summary",
              "Data usage breakdown",
              "Contact information",
              "Optional acknowledgment",
            ]}
            complexity="Medium"
            estimatedTime="2-3 days"
          />

          {/* Data Sharing Consent */}
          <PatternCard
            to="/data-sharing-consent-pattern"
            icon={<Database size={32} />}
            iconBg="bg-orange-100"
            iconColor="text-orange-700"
            patternId="UX4G-PAT-010-05"
            title="Data Sharing Consent"
            description="Specific consent pattern for sharing user data with third parties, other government departments, or external agencies with clear explanation of what, why, who, and how long."
            features={[
              "Recipient identification",
              "Purpose specification",
              "Duration clarity",
              "Granular control",
            ]}
            complexity="High"
            estimatedTime="3-5 days"
          />

          {/* Consent Withdrawal */}
          <PatternCard
            to="/consent-withdrawal-pattern"
            icon={<UserX size={32} />}
            iconBg="bg-red-100"
            iconColor="text-red-700"
            patternId="UX4G-PAT-010-06"
            title="Consent Withdrawal & Review"
            description="Pattern for reviewing existing consents and withdrawing or modifying permissions with impact explanation, confirmation flow, and service continuity guidance."
            features={[
              "Consent history view",
              "Impact preview",
              "Selective withdrawal",
              "Confirmation required",
            ]}
            complexity="High"
            estimatedTime="3-4 days"
          />

          {/* Guardian Consent */}
          <PatternCard
            to="/guardian-consent-pattern"
            icon={<Users size={32} />}
            iconBg="bg-teal-100"
            iconColor="text-teal-700"
            patternId="UX4G-PAT-010-07"
            title="Guardian or Proxy Consent"
            description="Specialized consent pattern for minors or individuals requiring representative authorization, with relationship verification, authority validation, and guardian confirmation."
            features={[
              "Relationship verification",
              "Authority validation",
              "Guardian confirmation",
              "Age-appropriate language",
            ]}
            complexity="High"
            estimatedTime="4-5 days"
          />

          {/* Placeholder for future pattern */}
          <div className="bg-muted border-2 border-dashed border-border rounded-lg p-8 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <HelpCircle
                  size={32}
                  className="text-gray-400"
                />
              </div>
              <h3 className="font-bold text-muted-foreground mb-2">
                More Patterns Coming Soon
              </h3>
              <p className="text-sm text-gray-500">
                Additional consent and acknowledgment patterns
                <br />
                based on service requirements
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Pattern Demonstrations */}
        <section className="mt-16 bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-300 rounded-lg overflow-hidden">
          <div className="bg-gradient-to-r from-green-100 to-blue-100 border-b-2 border-green-300 px-8 py-4">
            <div className="flex items-center gap-3">
              <Eye size={24} className="text-green-700" />
              <h2 className="font-bold text-foreground text-xl">
                Interactive Pattern Demonstrations
              </h2>
            </div>
          </div>
          <div className="p-8">
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Explore fully interactive demonstrations of key
              consent and declaration patterns. Each demo shows
              complete user flows with multiple states,
              validation, error handling, and success scenarios.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Consent Capture Demo */}
              <Link
                to="/consent-capture-demo"
                className="bg-card border-2 border-border rounded-lg p-6 hover:border-green-600 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                  <CheckSquare
                    size={24}
                    className="text-green-700"
                  />
                </div>
                <h3 className="font-bold text-foreground mb-2 group-hover:text-green-700 transition-colors">
                  Consent Capture Demo
                </h3>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                  Interactive demo showing basic consent capture
                  with granular options, clear explanations, and
                  decline paths.
                </p>
                <div className="flex items-center gap-2 text-xs text-green-700 font-bold">
                  <span>View Interactive Demo</span>
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </Link>

              {/* Guardian/Proxy Consent Demo */}
              <Link
                to="/guardian-proxy-consent-demo"
                className="bg-card border-2 border-border rounded-lg p-6 hover:border-teal-600 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-200 transition-colors">
                  <Users size={24} className="text-teal-700" />
                </div>
                <h3 className="font-bold text-foreground mb-2 group-hover:text-teal-700 transition-colors">
                  Guardian/Proxy Consent
                </h3>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                  Complete flow for guardian authorization
                  including relationship verification and
                  multiple scenarios.
                </p>
                <div className="flex items-center gap-2 text-xs text-teal-700 font-bold">
                  <span>View Interactive Demo</span>
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </Link>

              {/* Consent Withdrawal Demo */}
              <Link
                to="/consent-withdrawal-demo"
                className="bg-card border-2 border-border rounded-lg p-6 hover:border-red-600 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-200 transition-colors">
                  <UserX size={24} className="text-red-700" />
                </div>
                <h3 className="font-bold text-foreground mb-2 group-hover:text-red-700 transition-colors">
                  Consent Withdrawal
                </h3>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                  Interactive demonstration of consent review
                  and withdrawal with impact explanations and
                  restricted scenarios.
                </p>
                <div className="flex items-center gap-2 text-xs text-red-700 font-bold">
                  <span>View Interactive Demo</span>
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </Link>

              {/* Data Sharing Consent Demo */}
              <Link
                to="/data-sharing-consent-demo"
                className="bg-card border-2 border-border rounded-lg p-6 hover:border-orange-600 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors">
                  <Database
                    size={24}
                    className="text-orange-700"
                  />
                </div>
                <h3 className="font-bold text-foreground mb-2 group-hover:text-orange-700 transition-colors">
                  Data Sharing Consent
                </h3>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                  Full data sharing flow with recipient details,
                  purpose explanations, and granular permission
                  controls.
                </p>
                <div className="flex items-center gap-2 text-xs text-orange-700 font-bold">
                  <span>View Interactive Demo</span>
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </Link>

              {/* Privacy Notice Demo */}
              <Link
                to="/privacy-notice-demo"
                className="bg-card border-2 border-border rounded-lg p-6 hover:border-purple-600 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                  <Eye size={24} className="text-purple-700" />
                </div>
                <h3 className="font-bold text-foreground mb-2 group-hover:text-purple-700 transition-colors">
                  Privacy Notice Acknowledgment
                </h3>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                  Privacy notice presentation with blocking
                  behavior, acknowledgment vs consent
                  distinction, and help resources.
                </p>
                <div className="flex items-center gap-2 text-xs text-purple-700 font-bold">
                  <span>View Interactive Demo</span>
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </Link>

              {/* Terms Acceptance Demo */}
              <Link
                to="/terms-acceptance-demo"
                className="bg-card border-2 border-border rounded-lg p-6 hover:border-indigo-600 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-200 transition-colors">
                  <FileText
                    size={24}
                    className="text-indigo-700"
                  />
                </div>
                <h3 className="font-bold text-foreground mb-2 group-hover:text-indigo-700 transition-colors">
                  Terms Acceptance
                </h3>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                  Complete terms acceptance flow with
                  summary-first approach, expandable sections,
                  and decline options.
                </p>
                <div className="flex items-center gap-2 text-xs text-indigo-700 font-bold">
                  <span>View Interactive Demo</span>
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </Link>

              {/* Declaration Before Submission Demo */}
              <Link
                to="/declaration-before-submission-demo"
                className="bg-card border-2 border-border rounded-lg p-6 hover:border-green-600 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                  <CheckCircle size={24} className="text-green-700" />
                </div>
                <h3 className="font-bold text-foreground mb-2 group-hover:text-green-700 transition-colors">
                  Declaration Before Submission
                </h3>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                  Pre-submission declaration flow with review screen, declaration points, and submission confirmation.
                </p>
                <div className="flex items-center gap-2 text-xs text-green-700 font-bold">
                  <span>View Interactive Demo</span>
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </Link>

              {/* Fee Payment Demo */}
              <Link
                to="/fee-payment-demo"
                className="bg-card border-2 border-border rounded-lg p-6 hover:border-blue-600 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                  <CreditCard size={24} className="text-blue-700" />
                </div>
                <h3 className="font-bold text-foreground mb-2 group-hover:text-blue-700 transition-colors">
                  Fee Payment Flow
                </h3>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                  Complete payment journey from fee summary to receipt with multiple payment methods and secure processing.
                </p>
                <div className="flex items-center gap-2 text-xs text-blue-700 font-bold">
                  <span>View Interactive Demo</span>
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </Link>

              {/* Payment Failure & Retry Demo */}
              <Link
                to="/payment-failure-retry-demo"
                className="bg-card border-2 border-border rounded-lg p-6 hover:border-red-600 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-200 transition-colors">
                  <XCircle size={24} className="text-red-700" />
                </div>
                <h3 className="font-bold text-foreground mb-2 group-hover:text-red-700 transition-colors">
                  Payment Failure & Retry
                </h3>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                  Recovery pattern for failed payments with retry flows, alternate methods, pending states, and support escalation.
                </p>
                <div className="flex items-center gap-2 text-xs text-red-700 font-bold">
                  <span>View Interactive Demo</span>
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Cross-Pattern Guidance */}
        <section className="mt-16 bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-muted border-b-2 border-border px-8 py-4">
            <h2 className="font-bold text-foreground text-xl">
              Cross-Pattern Guidance
            </h2>
          </div>
          <div className="p-8">
            <div className="grid grid-cols-2 gap-8">
              {/* Design Principles */}
              <div>
                <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                  <Settings
                    size={20}
                    className="text-primary"
                  />
                  Universal Design Principles
                </h3>
                <div className="space-y-3 text-sm">
                  <GuidanceItem text="Always use plain language, avoid legal jargon" />
                  <GuidanceItem text="Provide summary before detailed text" />
                  <GuidanceItem text="Make consent granular, not all-or-nothing" />
                  <GuidanceItem text="Always provide decline or skip option" />
                  <GuidanceItem text="Explain consequences clearly and honestly" />
                  <GuidanceItem text="Never use dark patterns or deceptive design" />
                  <GuidanceItem text="Ensure mobile-first responsive layout" />
                </div>
              </div>

              {/* Implementation Standards */}
              <div>
                <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                  <Lock size={20} className="text-primary" />
                  Implementation Standards
                </h3>
                <div className="space-y-3 text-sm">
                  <GuidanceItem text="Store consent records with timestamp and version" />
                  <GuidanceItem text="Enable consent audit trail" />
                  <GuidanceItem text="Implement consent expiry and renewal" />
                  <GuidanceItem text="Provide consent management dashboard" />
                  <GuidanceItem text="Support multilingual consent text" />
                  <GuidanceItem text="Ensure WCAG 2.1 AA compliance" />
                  <GuidanceItem text="Log all consent changes for compliance" />
                </div>
              </div>

              {/* Legal Requirements */}
              <div>
                <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                  <Shield
                    size={20}
                    className="text-primary"
                  />
                  Legal & Compliance Requirements
                </h3>
                <div className="space-y-3 text-sm">
                  <GuidanceItem text="Comply with Digital Personal Data Protection Act" />
                  <GuidanceItem text="Document lawful basis for data processing" />
                  <GuidanceItem text="Provide withdrawal mechanism (right to be forgotten)" />
                  <GuidanceItem text="Maintain consent records for audit" />
                  <GuidanceItem text="Separate consent from service access where possible" />
                  <GuidanceItem text="Age-gate services requiring parental consent" />
                </div>
              </div>

              {/* Accessibility Requirements */}
              <div>
                <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                  <Globe size={20} className="text-primary" />
                  Accessibility Requirements
                </h3>
                <div className="space-y-3 text-sm">
                  <GuidanceItem text="Ensure keyboard navigation for all controls" />
                  <GuidanceItem text="Provide screen reader compatible labels" />
                  <GuidanceItem text="Use sufficient color contrast (4.5:1 minimum)" />
                  <GuidanceItem text="Support text resizing up to 200%" />
                  <GuidanceItem text="Provide alternative formats (audio, video)" />
                  <GuidanceItem text="Test with assistive technologies" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Support Resources */}
        <section className="mt-8 bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-300 rounded-lg p-8">
          <div className="flex items-start gap-4">
            <HelpCircle
              size={32}
              className="text-primary flex-shrink-0"
            />
            <div className="flex-1">
              <h2 className="font-bold text-foreground text-xl mb-2">
                Need Help Implementing These Patterns?
              </h2>
              <p className="text-sm text-muted-foreground mb-4">
                Our team provides implementation support, code
                examples, Figma components, and compliance
                guidance for all consent and declaration
                patterns.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="px-6 py-3 bg-primary text-white font-bold rounded text-sm hover:opacity-90 transition-colors"
                >
                  Contact Support Team
                </a>
                <a
                  href="#"
                  className="px-6 py-3 border-2 border-primary bg-card text-primary font-bold rounded text-sm hover:bg-blue-50 transition-colors"
                >
                  View Code Examples
                </a>
                <a
                  href="#"
                  className="text-sm text-primary font-bold hover:underline"
                >
                  Download Figma Kit →
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t-2 border-border mt-24">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-8">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div>
              UX4G Design System Platform • Consent, Declaration
              & Legal Acknowledgment Patterns
            </div>
            <div>
              Government of India • Digital India Initiative
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ==================== PATTERN CARD COMPONENT ====================

function PatternCard({
  to,
  icon,
  iconBg,
  iconColor,
  patternId,
  title,
  description,
  features,
  complexity,
  estimatedTime,
}: {
  to: string;
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
  patternId: string;
  title: string;
  description: string;
  features: string[];
  complexity: string;
  estimatedTime: string;
}) {
  return (
    <Link
      to={to}
      className="bg-card border-2 border-border rounded-lg overflow-hidden hover:border-primary hover:shadow-lg transition-all group"
    >
      {/* Header */}
      <div className="bg-muted border-b-2 border-border px-6 py-4">
        <div className="flex items-center gap-4">
          <div
            className={`w-16 h-16 ${iconBg} rounded flex items-center justify-center flex-shrink-0`}
          >
            <div className={iconColor}>{icon}</div>
          </div>
          <div className="flex-1">
            <div className="text-xs text-muted-foreground mb-1">
              {patternId}
            </div>
            <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
              {title}
            </h3>
          </div>
          <ArrowRight
            size={20}
            className="text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all"
          />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {description}
        </p>

        {/* Features */}
        <div className="mb-4">
          <h4 className="text-xs font-bold text-muted-foreground uppercase mb-2">
            Key Features
          </h4>
          <div className="grid grid-cols-2 gap-2">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-2"
              >
                <CheckCircle
                  size={14}
                  className="text-green-600 mt-0.5 flex-shrink-0"
                />
                <span className="text-xs text-muted-foreground">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Metadata */}
        <div className="flex items-center gap-4 pt-4 border-t border-border">
          <div className="flex items-center gap-2 text-xs">
            <Settings size={14} className="text-gray-500" />
            <span className="text-muted-foreground">
              Complexity:{" "}
              <span className="font-bold text-foreground">
                {complexity}
              </span>
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <Clock size={14} className="text-gray-500" />
            <span className="text-muted-foreground">
              Est:{" "}
              <span className="font-bold text-foreground">
                {estimatedTime}
              </span>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

// ==================== GUIDANCE ITEM COMPONENT ====================

function GuidanceItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2">
      <CheckCircle
        size={16}
        className="text-green-600 mt-0.5 flex-shrink-0"
      />
      <span className="text-muted-foreground">{text}</span>
    </div>
  );
}