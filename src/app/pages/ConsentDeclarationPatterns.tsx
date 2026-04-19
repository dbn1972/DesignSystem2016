import React from "react";
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
  Download,
  Copy,
  Check,
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
                  <div className="w-2 h-2 bg-green-50 dark:bg-green-900/200 rounded-sm"></div>
                  <span className="text-muted-foreground">
                    Pattern Family ID:{" "}
                    <span className="font-bold text-foreground">
                      UX4G-PAT-010
                    </span>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gray-400 dark:bg-gray-600 rounded-sm"></div>
                  <span className="text-muted-foreground">
                    Version:{" "}
                    <span className="font-bold text-foreground">
                      1.0.0
                    </span>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gray-400 dark:bg-gray-600 rounded-sm"></div>
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
              <div className="px-6 py-3 bg-green-100 border-2 border-green-300 rounded text-green-800 dark:text-green-300 font-bold text-sm text-center">
                STABLE
              </div>
              <div className="px-6 py-3 bg-red-50 dark:bg-red-950/30 border-2 border-red-200 dark:border-red-800 rounded text-red-700 dark:text-red-400 font-bold text-xs text-center uppercase">
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
                <h2 className="font-bold text-foreground">
                  Purpose
                </h2>
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
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              <div className="w-16 h-16 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                <HelpCircle
                  size={32}
                  className="text-muted-foreground"
                />
              </div>
              <h3 className="font-bold text-muted-foreground mb-2">
                More Patterns Coming Soon
              </h3>
              <p className="text-sm text-muted-foreground">
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
              <Eye size={24} className="text-green-700 dark:text-green-400" />
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
                    className="text-green-700 dark:text-green-400"
                  />
                </div>
                <h3 className="font-bold text-foreground mb-2 group-hover:text-green-700 dark:text-green-400 transition-colors">
                  Consent Capture Demo
                </h3>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                  Interactive demo showing basic consent capture
                  with granular options, clear explanations, and
                  decline paths.
                </p>
                <div className="flex items-center gap-2 text-xs text-green-700 dark:text-green-400 font-bold">
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
                  <UserX size={24} className="text-red-700 dark:text-red-400" />
                </div>
                <h3 className="font-bold text-foreground mb-2 group-hover:text-red-700 dark:text-red-400 transition-colors">
                  Consent Withdrawal
                </h3>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                  Interactive demonstration of consent review
                  and withdrawal with impact explanations and
                  restricted scenarios.
                </p>
                <div className="flex items-center gap-2 text-xs text-red-700 dark:text-red-400 font-bold">
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
                  <CheckCircle size={24} className="text-green-700 dark:text-green-400" />
                </div>
                <h3 className="font-bold text-foreground mb-2 group-hover:text-green-700 dark:text-green-400 transition-colors">
                  Declaration Before Submission
                </h3>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                  Pre-submission declaration flow with review screen, declaration points, and submission confirmation.
                </p>
                <div className="flex items-center gap-2 text-xs text-green-700 dark:text-green-400 font-bold">
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
                  <XCircle size={24} className="text-red-700 dark:text-red-400" />
                </div>
                <h3 className="font-bold text-foreground mb-2 group-hover:text-red-700 dark:text-red-400 transition-colors">
                  Payment Failure & Retry
                </h3>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                  Recovery pattern for failed payments with retry flows, alternate methods, pending states, and support escalation.
                </p>
                <div className="flex items-center gap-2 text-xs text-red-700 dark:text-red-400 font-bold">
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
        <section className="mt-8 bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-300 rounded-lg p-4 sm:p-6 lg:p-8">
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
                  className="px-6 py-3 border-2 border-primary bg-card text-primary font-bold rounded text-sm hover:bg-blue-50 dark:bg-blue-900/20 transition-colors"
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

        {/* Code Downloads */}
        <ConsentDeclCodeDownloads />
      </div>

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

// ==================== CODE DOWNLOADS ====================

const CONSENT_DECL_REACT_CODE = `import React, { useState } from 'react';

interface ConsentItem {
  id: string;
  label: string;
  description: string;
  required: boolean;
  checked: boolean;
}

export function ConsentDeclarationPage() {
  const [step, setStep] = useState<'consent' | 'declaration' | 'confirmed'>('consent');
  const [consents, setConsents] = useState<ConsentItem[]>([
    { id: 'data-collection', label: 'Data Collection & Processing', description: 'I consent to the collection and processing of my personal data for the purpose of this application.', required: true, checked: false },
    { id: 'data-sharing', label: 'Inter-Department Data Sharing', description: 'I consent to sharing my data with relevant government departments for verification purposes.', required: true, checked: false },
    { id: 'communications', label: 'Service Communications', description: 'I agree to receive SMS and email updates about my application status.', required: false, checked: false },
    { id: 'analytics', label: 'Service Improvement Analytics', description: 'I allow anonymized usage data to improve government digital services.', required: false, checked: false },
  ]);
  const [declared, setDeclared] = useState(false);

  const toggleConsent = (id: string) => setConsents(prev => prev.map(c => c.id === id ? { ...c, checked: !c.checked } : c));
  const allRequired = consents.filter(c => c.required).every(c => c.checked);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-card border border-border rounded-2xl p-8 shadow-sm">
        <h1 className="text-2xl font-bold text-foreground mb-2">Consent & Declaration</h1>
        <p className="text-sm text-muted-foreground mb-6">Government service application</p>
        {step === 'consent' && (
          <div className="space-y-4">
            <h2 className="font-semibold text-foreground">Consent Required</h2>
            {consents.map(c => (
              <label key={c.id} className="flex items-start gap-3 p-3 border border-border rounded-lg cursor-pointer hover:bg-muted/50">
                <input type="checkbox" checked={c.checked} onChange={() => toggleConsent(c.id)} className="mt-1" />
                <div>
                  <div className="text-sm font-semibold text-foreground">{c.label}{c.required && <span className="text-red-500 ml-1">*</span>}</div>
                  <div className="text-xs text-muted-foreground mt-1">{c.description}</div>
                </div>
              </label>
            ))}
            <button onClick={() => setStep('declaration')} disabled={!allRequired} className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold disabled:opacity-50">Proceed to Declaration</button>
          </div>
        )}
        {step === 'declaration' && (
          <div className="space-y-4">
            <div className="bg-muted rounded-xl p-4 text-sm text-muted-foreground leading-relaxed">
              I hereby declare that all information provided is true and correct to the best of my knowledge. I understand that any false statement may result in rejection or legal action under applicable laws.
            </div>
            <label className="flex items-start gap-3 p-3 border border-border rounded-lg cursor-pointer">
              <input type="checkbox" checked={declared} onChange={() => setDeclared(!declared)} className="mt-1" />
              <span className="text-sm font-semibold text-foreground">I accept the above declaration</span>
            </label>
            <div className="flex gap-3">
              <button onClick={() => setStep('consent')} className="flex-1 py-3 border border-border rounded-lg font-semibold">Back</button>
              <button onClick={() => setStep('confirmed')} disabled={!declared} className="flex-1 py-3 bg-primary text-primary-foreground rounded-lg font-semibold disabled:opacity-50">Submit</button>
            </div>
          </div>
        )}
        {step === 'confirmed' && (
          <div className="text-center py-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            </div>
            <h2 className="text-xl font-bold">Consent & Declaration Recorded</h2>
            <p className="text-sm text-muted-foreground mt-2">Your consent preferences and declaration have been securely stored.</p>
          </div>
        )}
      </div>
    </div>
  );
}`;

const CONSENT_DECL_ANGULAR_CODE = `import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ConsentItem {
  id: string;
  label: string;
  description: string;
  required: boolean;
  checked: boolean;
}

@Component({
  selector: 'ux4g-consent-declaration',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: \`
    <div class="min-h-screen bg-background flex items-center justify-center p-4">
      <div class="w-full max-w-lg bg-card border border-border rounded-2xl p-8 shadow-sm">
        <h1 class="text-2xl font-bold text-foreground mb-2">Consent & Declaration</h1>
        <p class="text-sm text-muted-foreground mb-6">Government service application</p>

        <div *ngIf="step === 'consent'" class="space-y-4">
          <h2 class="font-semibold text-foreground">Consent Required</h2>
          <label *ngFor="let c of consents" class="flex items-start gap-3 p-3 border border-border rounded-lg cursor-pointer hover:bg-muted/50">
            <input type="checkbox" [(ngModel)]="c.checked" class="mt-1" />
            <div>
              <div class="text-sm font-semibold text-foreground">{{c.label}}<span *ngIf="c.required" class="text-red-500 ml-1">*</span></div>
              <div class="text-xs text-muted-foreground mt-1">{{c.description}}</div>
            </div>
          </label>
          <button (click)="step='declaration'" [disabled]="!allRequired" class="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold disabled:opacity-50">Proceed to Declaration</button>
        </div>

        <div *ngIf="step === 'declaration'" class="space-y-4">
          <div class="bg-muted rounded-xl p-4 text-sm text-muted-foreground leading-relaxed">
            I hereby declare that all information provided is true and correct to the best of my knowledge.
          </div>
          <label class="flex items-start gap-3 p-3 border border-border rounded-lg cursor-pointer">
            <input type="checkbox" [(ngModel)]="declared" class="mt-1" />
            <span class="text-sm font-semibold text-foreground">I accept the above declaration</span>
          </label>
          <div class="flex gap-3">
            <button (click)="step='consent'" class="flex-1 py-3 border border-border rounded-lg font-semibold">Back</button>
            <button (click)="step='confirmed'" [disabled]="!declared" class="flex-1 py-3 bg-primary text-primary-foreground rounded-lg font-semibold disabled:opacity-50">Submit</button>
          </div>
        </div>

        <div *ngIf="step === 'confirmed'" class="text-center py-6">
          <h2 class="text-xl font-bold">Consent & Declaration Recorded</h2>
          <p class="text-sm text-muted-foreground mt-2">Your preferences have been securely stored.</p>
        </div>
      </div>
    </div>
  \`
})
export class ConsentDeclarationComponent {
  step: 'consent' | 'declaration' | 'confirmed' = 'consent';
  declared = false;
  consents: ConsentItem[] = [
    { id: 'data-collection', label: 'Data Collection & Processing', description: 'I consent to the collection and processing of my personal data.', required: true, checked: false },
    { id: 'data-sharing', label: 'Inter-Department Data Sharing', description: 'I consent to sharing data with relevant departments.', required: true, checked: false },
    { id: 'communications', label: 'Service Communications', description: 'I agree to receive status updates via SMS/email.', required: false, checked: false },
    { id: 'analytics', label: 'Service Improvement Analytics', description: 'I allow anonymized usage data for service improvement.', required: false, checked: false },
  ];
  get allRequired() { return this.consents.filter(c => c.required).every(c => c.checked); }
}`;

const CONSENT_DECL_HTML_CODE = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Consent & Declaration — UX4G</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: system-ui, sans-serif; background: #f8fafc; min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 1rem; }
    .card { width: 100%; max-width: 480px; background: #fff; border: 1px solid #e2e8f0; border-radius: 1rem; padding: 2rem; box-shadow: 0 1px 3px rgba(0,0,0,.1); }
    h1 { font-size: 1.5rem; font-weight: 700; margin-bottom: .25rem; }
    .subtitle { font-size: .875rem; color: #64748b; margin-bottom: 1.5rem; }
    .consent-item { display: flex; align-items: flex-start; gap: .75rem; padding: .75rem; border: 1px solid #e2e8f0; border-radius: .5rem; margin-bottom: .5rem; cursor: pointer; }
    .consent-item:hover { background: #f1f5f9; }
    .consent-item input { margin-top: .25rem; }
    .consent-label { font-size: .875rem; font-weight: 600; }
    .consent-desc { font-size: .75rem; color: #64748b; margin-top: .25rem; }
    .required { color: #ef4444; margin-left: .25rem; }
    .btn { width: 100%; padding: .75rem; border: none; border-radius: .5rem; font-weight: 600; cursor: pointer; font-size: .875rem; margin-top: 1rem; }
    .btn-primary { background: #005196; color: #fff; }
    .btn-primary:disabled { opacity: .5; cursor: not-allowed; }
    .btn-outline { background: #fff; border: 1px solid #e2e8f0; }
    .btn-row { display: flex; gap: .75rem; margin-top: 1rem; }
    .btn-row .btn { margin-top: 0; }
    .declaration-text { background: #f1f5f9; border-radius: .75rem; padding: 1rem; font-size: .875rem; color: #64748b; line-height: 1.6; margin-bottom: 1rem; }
    .success { text-align: center; padding: 2rem 0; }
    .success h2 { font-size: 1.25rem; font-weight: 700; }
    .success p { font-size: .875rem; color: #64748b; margin-top: .5rem; }
    .hidden { display: none; }
  </style>
</head>
<body>
  <div class="card">
    <h1>Consent & Declaration</h1>
    <p class="subtitle">Government service application</p>
    <div id="consent-step">
      <h2 style="font-size:1rem;font-weight:600;margin-bottom:1rem;">Consent Required</h2>
      <label class="consent-item"><input type="checkbox" id="c1" onchange="checkRequired()" /><div><div class="consent-label">Data Collection & Processing<span class="required">*</span></div><div class="consent-desc">I consent to the collection and processing of my personal data.</div></div></label>
      <label class="consent-item"><input type="checkbox" id="c2" onchange="checkRequired()" /><div><div class="consent-label">Inter-Department Data Sharing<span class="required">*</span></div><div class="consent-desc">I consent to sharing data with relevant departments.</div></div></label>
      <label class="consent-item"><input type="checkbox" id="c3" /><div><div class="consent-label">Service Communications</div><div class="consent-desc">I agree to receive status updates via SMS/email.</div></div></label>
      <button class="btn btn-primary" id="proceed-btn" disabled onclick="showDeclaration()">Proceed to Declaration</button>
    </div>
    <div id="declaration-step" class="hidden">
      <div class="declaration-text">I hereby declare that all information provided is true and correct to the best of my knowledge.</div>
      <label class="consent-item"><input type="checkbox" id="dec-check" onchange="checkDeclared()" /><span class="consent-label">I accept the above declaration</span></label>
      <div class="btn-row">
        <button class="btn btn-outline" onclick="showConsent()">Back</button>
        <button class="btn btn-primary" id="submit-btn" disabled onclick="showConfirm()">Submit</button>
      </div>
    </div>
    <div id="confirm-step" class="hidden success">
      <h2>Consent & Declaration Recorded</h2>
      <p>Your preferences have been securely stored.</p>
    </div>
  </div>
  <script>
    function checkRequired() {
      document.getElementById('proceed-btn').disabled = !(document.getElementById('c1').checked && document.getElementById('c2').checked);
    }
    function showDeclaration() { document.getElementById('consent-step').classList.add('hidden'); document.getElementById('declaration-step').classList.remove('hidden'); }
    function showConsent() { document.getElementById('declaration-step').classList.add('hidden'); document.getElementById('consent-step').classList.remove('hidden'); }
    function checkDeclared() { document.getElementById('submit-btn').disabled = !document.getElementById('dec-check').checked; }
    function showConfirm() { document.getElementById('declaration-step').classList.add('hidden'); document.getElementById('confirm-step').classList.remove('hidden'); }
  </script>
</body>
</html>`;

function ConsentDeclCodeDownloads() {
  const [copiedId, setCopiedId] = React.useState<string | null>(null);
  const copyToClipboard = (code: string, id: string) => { navigator.clipboard.writeText(code); setCopiedId(id); setTimeout(() => setCopiedId(null), 2000); };
  const downloadCode = (code: string, filename: string) => { const blob = new Blob([code], { type: 'text/plain' }); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = filename; a.click(); URL.revokeObjectURL(url); };
  const lanes = [
    { key: 'react', title: 'React', desc: 'TypeScript + Consent + Declaration', code: CONSENT_DECL_REACT_CODE, filename: 'ConsentDeclarationPage.tsx' },
    { key: 'angular', title: 'Angular', desc: 'Standalone + FormsModule', code: CONSENT_DECL_ANGULAR_CODE, filename: 'consent-declaration.component.ts' },
    { key: 'html', title: 'HTML / CSS / JS', desc: 'No framework needed', code: CONSENT_DECL_HTML_CODE, filename: 'consent-declaration.html' },
  ];
  return (
    <section id="code-downloads" className="space-y-6 scroll-mt-24 mt-12">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Code Downloads</h2>
        <p className="text-muted-foreground mt-1">Production-ready Consent & Declaration implementations.</p>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {lanes.map((lane) => (
          <div key={lane.key} className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <div className="h-1 bg-[#005196]" />
            <div className="flex flex-1 flex-col p-5">
              <div className="flex items-start justify-between gap-3 mb-4">
                <div>
                  <span className="inline-flex rounded-full border border-border bg-muted/60 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Framework lane</span>
                  <h3 className="text-lg font-bold text-foreground mt-2">{lane.title}</h3>
                  <p className="text-sm text-muted-foreground">{lane.desc}</p>
                </div>
                <button onClick={() => downloadCode(lane.code, lane.filename)} aria-label={`Download ${lane.title} code`} className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-border bg-background text-[#005196] hover:bg-[#005196] hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-[#005196]">
                  <Download size={16} />
                </button>
              </div>
              <div className="flex-1 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-muted-foreground">{lane.filename}</span>
                  <button onClick={() => copyToClipboard(lane.code, lane.key)} className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-background px-2.5 py-1.5 text-xs font-semibold text-foreground hover:border-primary hover:text-primary transition-colors">
                    {copiedId === lane.key ? <Check size={12} /> : <Copy size={12} />}
                    {copiedId === lane.key ? 'Copied' : 'Copy'}
                  </button>
                </div>
                <div tabIndex={0} role="region" aria-label={`${lane.title} code preview`} className="rounded-xl border border-border bg-slate-950 p-3 text-xs text-slate-100 shadow-inner max-h-64 overflow-auto">
                  <pre className="font-mono leading-5 whitespace-pre-wrap"><code>{lane.code.slice(0, 800)}...</code></pre>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
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
            className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all"
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
          <h3 className="text-xs font-bold text-muted-foreground uppercase mb-2">
            Key Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
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
            <Settings size={14} className="text-muted-foreground" />
            <span className="text-muted-foreground">
              Complexity:{" "}
              <span className="font-bold text-foreground">
                {complexity}
              </span>
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <Clock size={14} className="text-muted-foreground" />
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