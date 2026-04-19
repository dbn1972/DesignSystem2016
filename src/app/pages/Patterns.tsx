import { useState } from "react";
import type { CSSProperties } from "react";
import {  FileText, User, CreditCard, Search as SearchIcon, FileCheck, AlertTriangle, CheckCircle, ArrowRight, Sparkles, Layers, Shield, Workflow, Building2, Globe2, Download, Copy, Check } from "lucide-react";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";

export default function Patterns() {
  const { i18n } = useTranslation();
  const language = i18n.resolvedLanguage === "hi" ? "hi" : "en";
  const copy = PATTERNS_COPY[language];
  const patterns = [
    {
      icon: FileText,
      title: copy.patterns.formPatterns.title,
      description: copy.patterns.formPatterns.description,
      examples: ["Application Forms", "Registration", "Survey Forms", "Feedback Forms"],
      color: "from-blue-600 to-blue-700",
      link: "/patterns/forms"
    },
    {
      icon: User,
      title: copy.patterns.authentication.title,
      description: copy.patterns.authentication.description,
      examples: ["Sign In", "Sign Up", "Password Reset", "OTP Verification"],
      color: "from-purple-600 to-purple-700",
      link: "/patterns/identity"
    },
    {
      icon: SearchIcon,
      title: copy.patterns.searchFilter.title,
      description: copy.patterns.searchFilter.description,
      examples: ["Global Search", "Advanced Filters", "Faceted Search", "Sort Options"],
      color: "from-green-600 to-green-700",
      link: "/patterns/search-discovery"
    },
    {
      icon: CreditCard,
      title: copy.patterns.paymentTransactions.title,
      description: copy.patterns.paymentTransactions.description,
      examples: ["Fee Payment", "Bill Payment", "Transaction History", "Receipts"],
      color: "from-orange-600 to-orange-700",
      link: "/patterns/payment"
    },
    {
      icon: FileCheck,
      title: copy.patterns.documentManagement.title,
      description: copy.patterns.documentManagement.description,
      examples: ["Document Upload", "File Preview", "Download Center", "Certificate Generation"],
      color: "from-teal-600 to-teal-700",
      link: "/patterns/data-input"
    },
    {
      icon: AlertTriangle,
      title: copy.patterns.errorEmptyStates.title,
      description: copy.patterns.errorEmptyStates.description,
      examples: ["404 Pages", "No Results", "Network Errors", "Permission Denied"],
      color: "from-red-600 to-red-700",
      link: "/patterns/resilience"
    }
  ];

  const serviceFlows = [
    {
      title: copy.serviceFlows.citizenApplication.title,
      steps: copy.serviceFlows.citizenApplication.steps
    },
    {
      title: copy.serviceFlows.statusTracking.title,
      steps: copy.serviceFlows.statusTracking.steps
    },
    {
      title: copy.serviceFlows.certificateIssuance.title,
      steps: copy.serviceFlows.certificateIssuance.steps
    }
  ];

  const bestPractices = [
    {
      title: copy.bestPractices.progressiveDisclosure.title,
      description: copy.bestPractices.progressiveDisclosure.description
    },
    {
      title: copy.bestPractices.clearFeedback.title,
      description: copy.bestPractices.clearFeedback.description
    },
    {
      title: copy.bestPractices.consistentNavigation.title,
      description: copy.bestPractices.consistentNavigation.description
    },
    {
      title: copy.bestPractices.mobileFirst.title,
      description: copy.bestPractices.mobileFirst.description
    },
    {
      title: copy.bestPractices.accessibilityByDefault.title,
      description: copy.bestPractices.accessibilityByDefault.description
    },
    {
      title: copy.bestPractices.multilingualSupport.title,
      description: copy.bestPractices.multilingualSupport.description
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
                {copy.hero.eyebrow}
              </div>

              <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground dark:text-gray-50">
                {copy.hero.title}
              </h1>

              <p className="mt-5 max-w-2xl text-lg sm:text-xl leading-relaxed text-muted-foreground dark:text-muted-foreground">
                {copy.hero.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/pattern-library"
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-[#000066] dark:bg-blue-600 dark:hover:bg-blue-700"
                >
                  <Layers size={16} />
                  {copy.hero.openPatternLibrary}
                </Link>
                <Link
                  to="/systems/form-intelligence"
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary dark:bg-gray-800 dark:text-gray-100 dark:text-gray-200 dark:hover:border-blue-500"
                >
                  <Workflow size={16} />
                  {copy.hero.viewFormIntelligence}
                </Link>
                <Link
                  to="/systems/multilingual"
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary dark:bg-gray-800 dark:text-gray-100 dark:text-gray-200 dark:hover:border-blue-500"
                >
                  <Globe2 size={16} />
                  {copy.hero.viewMultilingualGuidance}
                </Link>
              </div>

              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-3 sm:grid-cols-4">
                <PatternStat value="6" label={copy.hero.stats.patternGroups} />
                <PatternStat value="3" label={copy.hero.stats.journeyViews} />
                <PatternStat value="100%" label={copy.hero.stats.accessibleDemos} />
                <PatternStat value="1" label={copy.hero.stats.sharedStandard} />
              </div>
            </div>

            <div className="lg:justify-self-end">
              <div className="rounded-[32px] border border-border bg-card/95 p-7 shadow-xl backdrop-blur-sm dark:bg-gray-800/95">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                      {copy.summary.eyebrow}
                    </p>
                  <h2 className="mt-2 text-2xl font-bold text-foreground dark:text-gray-50">
                      {copy.summary.title}
                  </h2>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-sm dark:bg-blue-600">
                    <Building2 size={24} />
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  <MiniSummary title={copy.summary.reusablePatternsTitle} description={copy.summary.reusablePatternsDescription} />
                  <MiniSummary title={copy.summary.serviceFlowsTitle} description={copy.summary.serviceFlowsDescription} />
                  <MiniSummary title={copy.summary.bestPracticeTitle} description={copy.summary.bestPracticeDescription} />
                </div>

                <div className="mt-5 rounded-2xl border border-border bg-gradient-to-br from-blue-50 to-emerald-50 p-4 dark:from-blue-950/30 dark:to-emerald-950/20">
                  <div className="flex items-center gap-2 text-sm font-semibold text-foreground dark:text-gray-100 dark:text-gray-200">
                    <Shield size={16} className="text-emerald-600 dark:text-emerald-400" />
                    {copy.summary.governmentGradeConsistency}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground dark:text-muted-foreground">
                    {copy.summary.governmentGradeDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>
                    <CodeDownloads />
          </div>
      </section>

      {/* Pattern Categories */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(280px,0.82fr)_minmax(0,1.18fr)] items-start">
            <div className="lg:sticky lg:top-24 space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                {copy.librarySection.eyebrow}
              </p>
              <h2 className="text-3xl font-bold text-foreground dark:text-gray-50">
                {copy.librarySection.title}
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-muted-foreground dark:text-muted-foreground">
                {copy.librarySection.description}
              </p>

              <div className="rounded-[24px] border border-border bg-card p-5 shadow-sm dark:bg-gray-800">
                <div className="flex items-center gap-2 text-sm font-semibold text-foreground dark:text-gray-50">
                  <Layers size={16} className="text-primary dark:text-blue-300" />
                  {copy.librarySection.recommendedEntryPoints}
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {patterns.map((pattern) => (
                    <a
                      key={pattern.title}
                      href={pattern.link}
                      className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-primary dark:bg-gray-900 dark:text-gray-100 dark:text-gray-200"
                    >
                      {pattern.title}
                    </a>
                  ))}
                </div>
              </div>
            </div>

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
                    <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted-foreground dark:text-muted-foreground">
                      {pattern.description}
                    </p>

                    <div className="mt-5 space-y-3">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                        {copy.librarySection.examples}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {pattern.examples.map((example) => (
                          <span
                            key={example}
                            className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground dark:bg-gray-700 dark:text-muted-foreground"
                          >
                            {example}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary dark:text-blue-300">
                      {copy.librarySection.viewPatterns}
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
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                {copy.flowSection.eyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-bold text-foreground dark:text-gray-50">
                {copy.flowSection.title}
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground dark:text-muted-foreground">
                {copy.flowSection.description}
              </p>
            </div>

            <div className="space-y-5">
              {serviceFlows.map((flow, index) => (
                <div
                  key={index}
                  className="rounded-[28px] border border-border bg-card p-6 shadow-sm dark:bg-gray-900"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                        {copy.flowSection.flowLabel} {String(index + 1).padStart(2, "0")}
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
                          <span className="text-sm font-medium text-foreground dark:text-gray-100 dark:text-gray-200">{step}</span>
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
            <div className="lg:sticky lg:top-24">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                {copy.exampleSection.eyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-bold text-foreground dark:text-gray-50">
                {copy.exampleSection.title}
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground dark:text-muted-foreground">
                {copy.exampleSection.description}
              </p>
            </div>

            <div className="rounded-[32px] border border-border bg-card shadow-sm dark:bg-gray-800 overflow-hidden">
              <div className="border-b border-border bg-background px-6 py-5 dark:bg-gray-900 dark:border-gray-700">
                <div className="flex gap-3 overflow-x-auto pb-2 sm:grid sm:grid-cols-4 sm:overflow-visible sm:pb-0">
                  {copy.exampleSection.steps.map((step, idx) => (
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
                      <span className="text-xs font-medium text-muted-foreground dark:text-muted-foreground">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[minmax(0,1fr)_280px]">
                <div>
                  <h3 className="text-2xl font-semibold text-foreground dark:text-gray-50 mb-6">
                    {copy.exampleSection.personalInformation}
                  </h3>

                  <div className="space-y-5">
                    <div className="grid gap-5 md:grid-cols-2">
                      <Field label={copy.exampleSection.firstName} placeholder={copy.exampleSection.enterFirstName} />
                      <Field label={copy.exampleSection.lastName} placeholder={copy.exampleSection.enterLastName} />
                    </div>
                    <Field label={copy.exampleSection.emailAddress} placeholder={copy.exampleSection.emailPlaceholder} type="email" />
                    <Field label={copy.exampleSection.phoneNumber} placeholder="+91 XXXXX XXXXX" type="tel" />
                    <Field label={copy.exampleSection.state} select options={[copy.exampleSection.selectYourState, ...copy.exampleSection.stateOptions]} selectAriaLabel={copy.exampleSection.selectAriaLabel} />
                  </div>

                  <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between sm:items-center">
                    <button className="inline-flex items-center justify-center rounded-xl border border-border px-5 py-3 text-sm font-semibold text-muted-foreground transition-colors hover:bg-background dark:hover:bg-gray-700 dark:text-muted-foreground">
                      {copy.exampleSection.cancel}
                    </button>
                    <button
                      className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold bg-[#005196] text-white hover:bg-[#004178] transition-colors"
                    >
                      {copy.exampleSection.continueToDocuments}
                    </button>
                  </div>
                </div>

                <div className="rounded-[28px] border border-border bg-background p-5 dark:bg-gray-900">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    {copy.exampleSection.patternHighlights}
                  </p>
                  <div className="mt-4 space-y-3">
                    <MiniSummary title={copy.exampleSection.progressiveDisclosureTitle} description={copy.exampleSection.progressiveDisclosureDescription} />
                    <MiniSummary title={copy.exampleSection.clearValidationTitle} description={copy.exampleSection.clearValidationDescription} />
                    <MiniSummary title={copy.exampleSection.mobileFirstTitle} description={copy.exampleSection.mobileFirstDescription} />
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
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                {copy.bestPracticeSection.eyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-bold text-foreground dark:text-gray-50">
                {copy.bestPracticeSection.title}
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground dark:text-muted-foreground">
                {copy.bestPracticeSection.description}
              </p>
            </div>

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
                      <p className="text-sm leading-relaxed text-muted-foreground dark:text-muted-foreground">
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
                {copy.accessibilitySection.eyebrow}
              </p>
              <h2 className="mt-4 text-3xl sm:text-2xl sm:text-3xl lg:text-4xl font-bold">
                {copy.accessibilitySection.title}
              </h2>
              <p className="mt-5 text-lg sm:text-xl leading-relaxed text-blue-100">
                {copy.accessibilitySection.description}
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <MetricCard title="WCAG" value={copy.accessibilitySection.metrics.wcag} />
                <MetricCard title={copy.accessibilitySection.metrics.keyboardTitle} value={copy.accessibilitySection.metrics.keyboardValue} />
                <MetricCard title={copy.accessibilitySection.metrics.contrastTitle} value={copy.accessibilitySection.metrics.contrastValue} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const PATTERNS_COPY = {
  en: {
    hero: {
      eyebrow: 'Reusable interaction patterns',
      title: 'Patterns',
      description:
        'Reusable solutions for common design problems in government digital services. Patterns combine components and behavior to reduce duplication and keep user journeys consistent across the platform.',
      openPatternLibrary: 'Open pattern library',
      viewFormIntelligence: 'View form intelligence',
      viewMultilingualGuidance: 'View multilingual guidance',
      stats: {
        patternGroups: 'pattern groups',
        journeyViews: 'journey views',
        accessibleDemos: 'accessible demos',
        sharedStandard: 'shared standard',
      },
    },
    summary: {
      eyebrow: 'Pattern map',
      title: 'A responsive overview for complex service design',
      reusablePatternsTitle: 'Reusable patterns',
      reusablePatternsDescription: 'Design once, apply across similar citizen journeys.',
      serviceFlowsTitle: 'Service flows',
      serviceFlowsDescription: 'Connect patterns into complete end-to-end experiences.',
      bestPracticeTitle: 'Best practice',
      bestPracticeDescription: 'Keep logic, layout, and feedback aligned across modules.',
      governmentGradeConsistency: 'Government-grade consistency',
      governmentGradeDescription:
        'All pattern guidance is intended to help teams build predictable, accessible, and scalable service experiences.',
    },
    librarySection: {
      eyebrow: 'Pattern library',
      title: 'Common patterns for consistent service design',
      description:
        'The library is organised around the most common government service problems, so teams can move from overview to implementation without losing clarity.',
      recommendedEntryPoints: 'Recommended entry points',
      examples: 'Examples',
      viewPatterns: 'View patterns',
    },
    patterns: {
      formPatterns: {
        title: 'Form Patterns',
        description:
          'Structured approaches for data collection including single-page forms, multi-step wizards, and validation patterns.',
      },
      authentication: {
        title: 'Authentication',
        description: 'Secure login, registration, password reset, and multi-factor authentication patterns.',
      },
      searchFilter: {
        title: 'Search & Filter',
        description:
          'Patterns for helping users find information efficiently including search, filtering, and sorting.',
      },
      paymentTransactions: {
        title: 'Payment & Transactions',
        description:
          'Secure payment flows, transaction confirmations, and receipt patterns for government services.',
      },
      documentManagement: {
        title: 'Document Management',
        description:
          'Patterns for uploading, viewing, downloading, and managing documents and certificates.',
      },
      errorEmptyStates: {
        title: 'Error & Empty States',
        description:
          'Handling errors gracefully and communicating when content is unavailable or actions fail.',
      },
    },
    flowSection: {
      eyebrow: 'Common service flows',
      title: 'End-to-end journeys that repeat across services',
      description:
        'These flow summaries help teams stitch patterns together into service journeys without losing consistency, state, or accessibility.',
      flowLabel: 'Flow',
    },
    serviceFlows: {
      citizenApplication: {
        title: 'Citizen Application Flow',
        steps: ['Login/Register', 'Fill Application', 'Upload Documents', 'Preview & Submit', 'Payment', 'Confirmation'],
      },
      statusTracking: {
        title: 'Status Tracking Flow',
        steps: ['Enter Reference', 'View Status', 'Download Updates', 'Provide Feedback'],
      },
      certificateIssuance: {
        title: 'Certificate Issuance Flow',
        steps: ['Verify Identity', 'Check Eligibility', 'Generate Certificate', 'Digital Signature', 'Download/Print'],
      },
    },
    exampleSection: {
      eyebrow: 'Pattern example',
      title: 'Application form pattern',
      description:
        'A complete example of how a pattern can combine steps, validation, and responsive layout to support a government application journey.',
      steps: ['Personal Info', 'Documents', 'Preview', 'Submit'],
      personalInformation: 'Personal Information',
      firstName: 'First Name *',
      lastName: 'Last Name *',
      enterFirstName: 'Enter first name',
      enterLastName: 'Enter last name',
      emailAddress: 'Email Address *',
      phoneNumber: 'Phone Number *',
      state: 'State *',
      selectYourState: 'Select your state',
      stateOptions: ['Delhi', 'Maharashtra', 'Karnataka', 'Tamil Nadu'],
      selectAriaLabel: 'Select state',
      cancel: 'Cancel',
      continueToDocuments: 'Continue to Documents',
      emailPlaceholder: 'your.email@example.com',
      patternHighlights: 'Pattern highlights',
      progressiveDisclosureTitle: 'Progressive disclosure',
      progressiveDisclosureDescription: 'Reveal complexity only when it is needed.',
      clearValidationTitle: 'Clear validation',
      clearValidationDescription: 'Keep guidance close to the field and easy to act on.',
      mobileFirstTitle: 'Mobile-first',
      mobileFirstDescription: 'Ensure the pattern works cleanly on small screens first.',
    },
    bestPracticeSection: {
      eyebrow: 'Design best practices',
      title: 'Principles that keep patterns trustworthy',
      description:
        'Use these guidance points when implementing patterns in government digital services so the experience stays coherent and accessible.',
    },
    bestPractices: {
      progressiveDisclosure: {
        title: 'Progressive Disclosure',
        description:
          'Show information progressively to avoid overwhelming users. Display only essential information initially and reveal details on demand.',
      },
      clearFeedback: {
        title: 'Clear Feedback',
        description:
          'Provide immediate, clear feedback for all user actions. Use success messages, error states, and loading indicators appropriately.',
      },
      consistentNavigation: {
        title: 'Consistent Navigation',
        description:
          'Maintain consistent navigation patterns across services. Users should always know where they are and how to move forward or backward.',
      },
      mobileFirst: {
        title: 'Mobile-First Approach',
        description:
          'Design for mobile devices first, ensuring core functionality works on smaller screens before enhancing for larger displays.',
      },
      accessibilityByDefault: {
        title: 'Accessibility by Default',
        description:
          'Build accessibility into every pattern. Ensure keyboard navigation, screen reader support, and proper color contrast.',
      },
      multilingualSupport: {
        title: 'Multilingual Support',
        description:
          'Design patterns that accommodate multiple languages, including right-to-left scripts and varying text lengths.',
      },
    },
    accessibilitySection: {
      eyebrow: 'Accessibility in patterns',
      title: 'Accessibility is built into every pattern',
      description:
        'Every pattern in the UX4G Design System is designed with accessible headings, keyboard navigation, screen reader support, focus management, and clear error messaging.',
      metrics: {
        wcag: 'AA Compliant',
        keyboardTitle: 'Keyboard',
        keyboardValue: '100% Accessible',
        contrastTitle: 'Contrast',
        contrastValue: '4.5:1 min',
      },
    },
  },
  hi: {
    hero: {
      eyebrow: 'पुन: उपयोग योग्य interaction patterns',
      title: 'पैटर्न',
      description:
        'सरकारी डिजिटल सेवाओं में सामान्य डिज़ाइन समस्याओं के लिए पुन: उपयोग योग्य समाधान। Patterns, components और behavior को मिलाकर duplication कम करते हैं और platform भर में user journeys को सुसंगत रखते हैं।',
      openPatternLibrary: 'Pattern library खोलें',
      viewFormIntelligence: 'Form intelligence देखें',
      viewMultilingualGuidance: 'Multilingual guidance देखें',
      stats: {
        patternGroups: 'pattern groups',
        journeyViews: 'journey views',
        accessibleDemos: 'accessible demos',
        sharedStandard: 'shared standard',
      },
    },
    summary: {
      eyebrow: 'Pattern map',
      title: 'जटिल service design के लिए responsive overview',
      reusablePatternsTitle: 'Reusable patterns',
      reusablePatternsDescription: 'एक बार डिज़ाइन करें, समान citizen journeys में लागू करें।',
      serviceFlowsTitle: 'Service flows',
      serviceFlowsDescription: 'Patterns को जोड़कर complete end-to-end experiences बनाएं।',
      bestPracticeTitle: 'Best practice',
      bestPracticeDescription: 'Logic, layout और feedback को अलग-अलग modules में aligned रखें।',
      governmentGradeConsistency: 'Government-grade consistency',
      governmentGradeDescription:
        'सभी pattern guidance का उद्देश्य टीमों को predictable, accessible और scalable service experiences बनाने में मदद करना है।',
    },
    librarySection: {
      eyebrow: 'Pattern library',
      title: 'सुसंगत service design के लिए सामान्य patterns',
      description:
        'यह library सबसे सामान्य सरकारी सेवा समस्याओं के आधार पर संगठित है, ताकि टीमें overview से implementation तक स्पष्टता बनाए रखते हुए आगे बढ़ सकें।',
      recommendedEntryPoints: 'Recommended entry points',
      examples: 'Examples',
      viewPatterns: 'Patterns देखें',
    },
    patterns: {
      formPatterns: {
        title: 'Form Patterns',
        description:
          'Data collection के लिए structured approaches, जिनमें single-page forms, multi-step wizards और validation patterns शामिल हैं।',
      },
      authentication: {
        title: 'Authentication',
        description: 'Secure login, registration, password reset और multi-factor authentication patterns.',
      },
      searchFilter: {
        title: 'Search & Filter',
        description:
          'Users को जानकारी कुशलता से खोजने में मदद करने वाले patterns, जिनमें search, filtering और sorting शामिल हैं।',
      },
      paymentTransactions: {
        title: 'Payment & Transactions',
        description:
          'सरकारी सेवाओं के लिए secure payment flows, transaction confirmations और receipt patterns.',
      },
      documentManagement: {
        title: 'Document Management',
        description:
          'Documents और certificates को upload, view, download और manage करने के patterns.',
      },
      errorEmptyStates: {
        title: 'Error & Empty States',
        description:
          'Errors को सहज तरीके से handle करना और जब content उपलब्ध न हो या actions fail हों तो स्पष्ट रूप से बताना।',
      },
    },
    flowSection: {
      eyebrow: 'Common service flows',
      title: 'End-to-end journeys जो कई सेवाओं में दोहराई जाती हैं',
      description:
        'ये flow summaries टीमों को patterns को जोड़कर service journeys बनाने में मदद करती हैं, बिना consistency, state या accessibility खोए।',
      flowLabel: 'Flow',
    },
    serviceFlows: {
      citizenApplication: {
        title: 'Citizen Application Flow',
        steps: ['Login/Register', 'Application भरें', 'Documents upload करें', 'Preview और submit', 'Payment', 'Confirmation'],
      },
      statusTracking: {
        title: 'Status Tracking Flow',
        steps: ['Reference दर्ज करें', 'Status देखें', 'Updates download करें', 'Feedback दें'],
      },
      certificateIssuance: {
        title: 'Certificate Issuance Flow',
        steps: ['Identity verify करें', 'Eligibility जांचें', 'Certificate generate करें', 'Digital Signature', 'Download/Print'],
      },
    },
    exampleSection: {
      eyebrow: 'Pattern example',
      title: 'Application form pattern',
      description:
        'यह एक पूरा उदाहरण है कि किस तरह कोई pattern steps, validation और responsive layout को जोड़कर सरकारी application journey का समर्थन कर सकता है।',
      steps: ['Personal Info', 'Documents', 'Preview', 'Submit'],
      personalInformation: 'Personal Information',
      firstName: 'First Name *',
      lastName: 'Last Name *',
      enterFirstName: 'पहला नाम दर्ज करें',
      enterLastName: 'अंतिम नाम दर्ज करें',
      emailAddress: 'Email Address *',
      phoneNumber: 'Phone Number *',
      state: 'State *',
      selectYourState: 'अपना राज्य चुनें',
      stateOptions: ['Delhi', 'Maharashtra', 'Karnataka', 'Tamil Nadu'],
      selectAriaLabel: 'राज्य चुनें',
      cancel: 'Cancel',
      continueToDocuments: 'Documents पर आगे बढ़ें',
      emailPlaceholder: 'your.email@example.com',
      patternHighlights: 'Pattern highlights',
      progressiveDisclosureTitle: 'Progressive disclosure',
      progressiveDisclosureDescription: 'जितनी आवश्यकता हो उतनी ही जटिलता दिखाएँ।',
      clearValidationTitle: 'Clear validation',
      clearValidationDescription: 'मार्गदर्शन को field के पास और उस पर कार्रवाई करने योग्य रखें।',
      mobileFirstTitle: 'Mobile-first',
      mobileFirstDescription: 'सुनिश्चित करें कि pattern पहले छोटे screens पर साफ़ तरीके से काम करे।',
    },
    bestPracticeSection: {
      eyebrow: 'Design best practices',
      title: 'वे सिद्धांत जो patterns को भरोसेमंद बनाए रखते हैं',
      description:
        'सरकारी डिजिटल सेवाओं में patterns लागू करते समय इन guidance points का उपयोग करें ताकि अनुभव सुसंगत और सुलभ बना रहे।',
    },
    bestPractices: {
      progressiveDisclosure: {
        title: 'Progressive Disclosure',
        description:
          'Users पर अधिक भार न पड़े, इसके लिए जानकारी चरणबद्ध तरीके से दिखाएँ। शुरुआत में केवल आवश्यक जानकारी दिखाएँ और जरूरत पर विवरण खोलें।',
      },
      clearFeedback: {
        title: 'Clear Feedback',
        description:
          'हर user action पर तुरंत और स्पष्ट feedback दें। Success messages, error states और loading indicators का उचित उपयोग करें।',
      },
      consistentNavigation: {
        title: 'Consistent Navigation',
        description:
          'सेवाओं में navigation patterns को सुसंगत रखें। Users को हमेशा पता होना चाहिए कि वे कहाँ हैं और आगे या पीछे कैसे जाएँ।',
      },
      mobileFirst: {
        title: 'Mobile-First Approach',
        description:
          'पहले mobile devices के लिए डिज़ाइन करें और सुनिश्चित करें कि core functionality छोटे screens पर काम करे, फिर बड़े displays के लिए enhance करें।',
      },
      accessibilityByDefault: {
        title: 'Accessibility by Default',
        description:
          'हर pattern में accessibility को शामिल करें। Keyboard navigation, screen reader support और उचित color contrast सुनिश्चित करें।',
      },
      multilingualSupport: {
        title: 'Multilingual Support',
        description:
          'ऐसे patterns डिज़ाइन करें जो multiple languages, right-to-left scripts और अलग-अलग text lengths को accommodate कर सकें।',
      },
    },
    accessibilitySection: {
      eyebrow: 'Patterns में accessibility',
      title: 'Accessibility हर pattern में अंतर्निहित है',
      description:
        'UX4G Design System का हर pattern accessible headings, keyboard navigation, screen reader support, focus management और स्पष्ट error messaging के साथ डिज़ाइन किया गया है।',
      metrics: {
        wcag: 'AA compliant',
        keyboardTitle: 'Keyboard',
        keyboardValue: '100% accessible',
        contrastTitle: 'Contrast',
        contrastValue: 'न्यूनतम 4.5:1',
      },
    },
  },
} as const;

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
      <p className="mt-1 text-sm leading-relaxed text-muted-foreground dark:text-muted-foreground">
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
  selectAriaLabel,
}: {
  label: string;
  placeholder?: string;
  type?: string;
  select?: boolean;
  options?: string[];
  selectAriaLabel?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-muted-foreground dark:text-muted-foreground mb-2">
        {label}
      </label>
      {select ? (
        <select aria-label={selectAriaLabel ?? label} className="w-full rounded-xl border border-border bg-card px-4 py-3 text-foreground outline-none transition focus:ring-2 focus:border-transparent dark:bg-gray-900 dark:text-gray-100 dark:text-gray-200" style={{ '--tw-ring-color': 'var(--ux4g-color-brand-primary)' } as CSSProperties}>
          {options.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      ) : (
        <input aria-label={label} type={type}
          placeholder={placeholder}
          className="w-full rounded-xl border border-border bg-card px-4 py-3 text-foreground outline-none transition focus:ring-2 focus:border-transparent dark:bg-gray-900 dark:text-gray-100 dark:text-gray-200"
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

// ==================== CODE DOWNLOADS ====================

const _REACT_CODE = `import React, { useState } from 'react';

export default function Page() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ timestamp: Date.now() }),
      });
      if (!res.ok) throw new Error('Request failed');
      setSubmitted(true);
    } catch { setError('Something went wrong. Please try again.'); }
    finally { setLoading(false); }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-lg bg-card border border-border rounded-2xl p-8 shadow-sm">
        <h1 className="text-2xl font-bold text-foreground mb-2"></h1>
        <p className="text-sm text-muted-foreground mb-6">Government digital service pattern</p>
        {error && <div role="alert" className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-sm text-red-700 dark:text-red-400">{error}</div>}
        {submitted ? (
          <div className="text-center py-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            </div>
            <h2 className="text-xl font-bold">Success</h2>
            <p className="text-muted-foreground mt-2">Your request has been processed.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <button type="submit" disabled={loading} className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold disabled:opacity-60">
              {loading ? 'Processing...' : 'Submit'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}`;

const _ANGULAR_CODE = `import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ux4g-',
  standalone: true,
  imports: [CommonModule],
  template: \`
    <div class="min-h-screen flex items-center justify-center bg-background p-4">
      <div class="w-full max-w-lg bg-card border border-border rounded-2xl p-8 shadow-sm">
        <h1 class="text-2xl font-bold text-foreground mb-2"></h1>
        <p class="text-sm text-muted-foreground mb-6">Government digital service pattern</p>
        <div *ngIf="error" role="alert" class="mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-sm text-red-700 dark:text-red-400">{{ error }}</div>
        <div *ngIf="submitted" class="text-center py-6">
          <h2 class="text-xl font-bold">Success</h2>
          <p class="text-muted-foreground mt-2">Your request has been processed.</p>
        </div>
        <form *ngIf="!submitted" (ngSubmit)="onSubmit()">
          <button type="submit" [disabled]="loading" class="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold disabled:opacity-60">
            {{ loading ? 'Processing...' : 'Submit' }}
          </button>
        </form>
      </div>
    </div>
  \`
})
export class Component {
  loading = false;
  submitted = false;
  error = '';

  async onSubmit() {
    this.loading = true;
    this.error = '';
    try {
      const res = await fetch('/api/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ timestamp: Date.now() }),
      });
      if (!res.ok) throw new Error('Failed');
      this.submitted = true;
    } catch { this.error = 'Something went wrong.'; }
    finally { this.loading = false; }
  }
}`;

const _HTML_CODE = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title> — UX4G</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: system-ui, sans-serif; min-height: 100vh; display: flex; align-items: center; justify-content: center; background: #f9fafb; padding: 1rem; }
    .card { width: 100%; max-width: 32rem; background: #fff; border: 1px solid #e5e7eb; border-radius: 1rem; padding: 2rem; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
    h1 { font-size: 1.5rem; font-weight: 700; color: #111; margin-bottom: 0.5rem; }
    .subtitle { font-size: 0.875rem; color: #6b7280; margin-bottom: 1.5rem; }
    .btn { width: 100%; padding: 0.75rem; background: #005196; color: #fff; border: none; border-radius: 0.5rem; font-size: 1rem; font-weight: 600; cursor: pointer; }
    .btn:hover { background: #004178; }
    .btn:disabled { opacity: 0.6; cursor: not-allowed; }
    .error { margin-bottom: 1rem; padding: 0.75rem; background: #fef2f2; border: 1px solid #fecaca; border-radius: 0.5rem; color: #b91c1c; font-size: 0.875rem; display: none; }
    .success { text-align: center; padding: 2rem 0; display: none; }
    .success h2 { font-size: 1.25rem; font-weight: 700; margin-bottom: 0.5rem; }
    .success p { color: #6b7280; }
  </style>
</head>
<body>
  <div class="card">
    <h1></h1>
    <p class="subtitle">Government digital service pattern</p>
    <div id="error" class="error" role="alert"></div>
    <form id="mainForm" novalidate>
      <button type="submit" class="btn" id="submitBtn">Submit</button>
    </form>
    <div id="success" class="success">
      <h2>Success</h2>
      <p>Your request has been processed.</p>
    </div>
  </div>
  <script>
    document.getElementById('mainForm').addEventListener('submit', async function(e) {
      e.preventDefault();
      const err = document.getElementById('error');
      const btn = document.getElementById('submitBtn');
      err.style.display = 'none';
      btn.disabled = true; btn.textContent = 'Processing...';
      try {
        const res = await fetch('/api/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ timestamp: Date.now() }),
        });
        if (!res.ok) throw new Error('Failed');
        document.getElementById('mainForm').style.display = 'none';
        document.getElementById('success').style.display = 'block';
      } catch { err.textContent = 'Something went wrong.'; err.style.display = 'block'; }
      finally { btn.disabled = false; btn.textContent = 'Submit'; }
    });
  </script>
</body>
</html>`;

function CodeDownloads() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const copyToClipboard = (code: string, id: string) => { navigator.clipboard.writeText(code); setCopiedId(id); setTimeout(() => setCopiedId(null), 2000); };
  const downloadCode = (code: string, filename: string) => { const blob = new Blob([code], { type: 'text/plain' }); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = filename; a.click(); URL.revokeObjectURL(url); };
  const lanes = [
    { key: 'react', title: 'React', desc: 'TypeScript + Hooks', code: _REACT_CODE, filename: 'Page.tsx' },
    { key: 'angular', title: 'Angular', desc: 'Standalone Component', code: _ANGULAR_CODE, filename: '.component.ts' },
    { key: 'html', title: 'HTML / CSS / JS', desc: 'No framework needed', code: _HTML_CODE, filename: '.html' },
  ];
  return (
    <section id="code-downloads" className="space-y-6 scroll-mt-24 mt-12">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Code Downloads</h2>
        <p className="text-muted-foreground mt-1">Production-ready  implementations.</p>
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
