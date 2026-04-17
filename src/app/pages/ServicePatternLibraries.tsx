import { useState } from "react";
import {  FileText, Users, RefreshCw, AlertCircle, CheckCircle, FileCheck, UserCheck, Activity, ArrowRight, Circle, ChevronRight, Info, AlertTriangle, Shield, Eye, Globe, Headphones, Code, GitBranch, CheckSquare, XCircle, Clock, Download, Search, Edit, Upload, MessageSquare, ThumbsUp, ThumbsDown, Zap, Target, Layers, BookOpen, Settings, Database, Lock, BarChart3, FileCode, Copy, Check } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function ServicePatternLibraries() {
  const { i18n } = useTranslation();
  const c = i18n.resolvedLanguage === 'hi' ? SPL_HI : SPL_EN;
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.12),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(16,185,129,0.10),_transparent_30%),linear-gradient(to_bottom,theme(colors.background),theme(colors.background))]">
        <div className="mx-auto grid max-w-[1440px] gap-8 px-6 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14 xl:grid-cols-[1.2fr_0.8fr] xl:items-start">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold text-muted-foreground shadow-sm">
              <Layers size={14} className="text-primary" />
              {c.eyebrow}
            </div>

            <div className="space-y-4">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground sm:text-5xl">{c.title}</h1>
              <p className="max-w-3xl text-lg leading-8 text-muted-foreground">
                {c.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a href="#application" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90">
                Explore archetypes
              </a>
              <a href="#eligibility" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground shadow-sm transition-colors hover:border-primary hover:text-primary">
                Eligibility flow
              </a>
              <a href="#tracking" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground shadow-sm transition-colors hover:border-primary hover:text-primary">
                Status tracking
              </a>
            </div>
                      <ServicePatternLibrariesCodeDownloads />
          </div>

          <div className="rounded-[28px] border border-border bg-card p-6 shadow-xl shadow-black/5">
            <div className="flex items-center justify-between gap-4 border-b border-border pb-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">Pattern health</p>
                <h2 className="mt-2 text-2xl font-bold text-foreground">What is covered</h2>
              </div>
              <div className="rounded-2xl bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">8 archetypes</div>
            </div>

            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-3">
              <PatternMetric value="6" label="Stable" />
              <PatternMetric value="2" label="Evolving" />
              <PatternMetric value="AA" label="Accessibility" />
              <PatternMetric value="100%" label="Production ready" />
            </div>

            <div className="mt-6 space-y-3 rounded-2xl bg-muted/40 p-4">
              <PatternNote title="Reusable flows" text="Each archetype maps to a service journey that can be reused across departments." />
              <PatternNote title="Implementation-ready" text="Pattern guidance is written for teams building the real application, not a demo." />
            </div>
          </div>
        </div>
      </header>

      <nav className="sticky top-4 z-20 border-b border-border bg-card/95 shadow-sm backdrop-blur">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-12">
          <div className="flex items-center gap-1 overflow-x-auto py-3">
            {[
              { id: "application", label: "Application" },
              { id: "eligibility", label: "Eligibility" },
              { id: "renewal", label: "Renewal" },
              { id: "correction", label: "Correction" },
              { id: "complaint", label: "Complaint" },
              { id: "approval", label: "Approval" },
              { id: "assisted", label: "Assisted" },
              { id: "tracking", label: "Tracking" }
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-[1440px] space-y-20 px-6 py-12 sm:px-8 lg:px-12">
        <div className="space-y-20">
          <ApplicationSubmission />
          <EligibilityScreening />
          <Renewal />
          <CorrectionResubmission />
          <ComplaintEscalation />
          <ApprovalIssuance />
          <AssistedOfflineToOnline />
          <HighVolumeStatusTracking />
        </div>
      </div>

      <footer className="mt-20 border-t border-border bg-card">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-2 px-6 py-8 text-sm text-muted-foreground sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <div>
            <div>UX4G Design System Platform • Service Pattern Library v1.0</div>
          </div>
          <div>Government of India • Digital India Initiative</div>
        </div>
      </footer>
    </div>
  );
}

// ==================== APPLICATION SUBMISSION ====================

function ApplicationSubmission() {
  return (
    <section id="application" className="scroll-mt-20">
      <PatternHeader
        title="Application Submission"
        icon={<FileText size={24} />}
        status="stable"
        version="1.2.0"
        lastUpdated="March 2026"
      />

      <div className="grid grid-cols-12 gap-8 mt-8">
        {/* Main Content - 8 columns */}
        <div className="col-span-8 space-y-8">
          
          {/* Overview */}
          <DocumentationModule title="Pattern Overview">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <MetadataBlock label="Service Problem">
                Citizens need to apply for government services requiring structured data collection, 
                document submission, validation, and acknowledgment with clear status tracking.
              </MetadataBlock>
              <MetadataBlock label="Primary Users">
                <ul className="space-y-1.5">
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-1 h-1 bg-gray-900 rounded-full"></div>
                    <span>Citizens (first-time applicants)</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-1 h-1 bg-gray-900 rounded-full"></div>
                    <span>CSC operators (assisted mode)</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-1 h-1 bg-gray-900 rounded-full"></div>
                    <span>Government staff (back-office)</span>
                  </li>
                </ul>
              </MetadataBlock>
            </div>
          </DocumentationModule>

          {/* Use Cases */}
          <DocumentationModule title="Typical Government Use Cases">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
              {[
                "Passport applications",
                "Driving license applications",
                "Scholarship applications",
                "Business license registration",
                "Ration card applications",
                "Government housing schemes"
              ].map((useCase, idx) => (
                <div key={idx} className="flex items-start gap-2 text-sm text-muted-foreground dark:text-muted-foreground">
                  <CheckCircle size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span>{useCase}</span>
                </div>
              ))}
            </div>
          </DocumentationModule>

          {/* Journey Flow */}
          <DocumentationModule title="End-to-End Service Flow">
            <div className="space-y-4">
              <div className="text-sm text-muted-foreground dark:text-muted-foreground mb-4">
                User learns about service → checks eligibility → completes multi-step form → uploads documents → 
                reviews submission → receives acknowledgment → tracks status
              </div>
              <ProcessFlow steps={[
                { num: "01", label: "Start", desc: "Service introduction" },
                { num: "02", label: "Eligibility", desc: "Pre-screening" },
                { num: "03", label: "Data Entry", desc: "Multi-step form" },
                { num: "04", label: "Documents", desc: "Upload files" },
                { num: "05", label: "Review", desc: "Confirmation" },
                { num: "06", label: "Submit", desc: "Final submission" },
                { num: "07", label: "Acknowledge", desc: "Reference ID" },
                { num: "08", label: "Track", desc: "Status monitoring" }
              ]} />
            </div>
          </DocumentationModule>

          {/* Page Sequence */}
          <DocumentationModule title="Recommended Page Sequence">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <PageSequenceCard num="1" title="Start Page" elements={["Service overview", "Eligibility criteria", "Required documents", "Time estimate"]} />
              <PageSequenceCard num="2" title="Personal Details" elements={["Name, DOB, gender", "Aadhaar number", "Mobile, email"]} />
              <PageSequenceCard num="3" title="Address Details" elements={["Current address", "Permanent address", "District, state, PIN"]} />
              <PageSequenceCard num="4" title="Additional Info" elements={["Service-specific fields", "Income, occupation", "Category selection"]} />
              <PageSequenceCard num="5" title="Documents" elements={["Identity proof", "Address proof", "Photo upload"]} />
              <PageSequenceCard num="6" title="Review" elements={["Editable summary", "Declaration checkbox", "Terms acceptance"]} />
              <PageSequenceCard num="7" title="Payment" elements={["Fee breakdown", "Payment gateway", "Receipt generation"]} />
              <PageSequenceCard num="8" title="Success" elements={["Acknowledgment", "Reference number", "Download receipt"]} />
            </div>
          </DocumentationModule>

          {/* Components Required */}
          <DocumentationModule title="Required UX4G Components">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: "Button", variants: "Primary, Secondary, Tertiary" },
                { name: "Form Input", variants: "Text, Email, Phone, Number" },
                { name: "Select", variants: "Dropdown, Searchable" },
                { name: "Date Picker", variants: "Single, Range" },
                { name: "File Upload", variants: "Single, Multiple, Drag-drop" },
                { name: "Checkbox", variants: "Single, Group" },
                { name: "Radio Button", variants: "Vertical, Horizontal" },
                { name: "Progress Stepper", variants: "Linear, Non-linear" },
                { name: "Alert Banner", variants: "Info, Warning, Error, Success" },
                { name: "Card", variants: "Elevated, Flat, Outlined" },
                { name: "Badge", variants: "Default, Dot, Pill" },
                { name: "Modal", variants: "Centered, Side panel" }
              ].map((comp, idx) => (
                <ComponentTag key={idx} name={comp.name} variants={comp.variants} />
              ))}
            </div>
          </DocumentationModule>

          {/* Implementation Guidance */}
          <DocumentationModule title="Implementation Requirements">
            <div className="space-y-4">
              <ImplementationRow
                category="Frontend"
                requirement="Use React Hook Form or similar library for form state management and validation"
                priority="required"
              />
              <ImplementationRow
                category="Backend"
                requirement="Implement auto-save API endpoint to store draft applications every 30 seconds"
                priority="required"
              />
              <ImplementationRow
                category="Backend"
                requirement="Generate unique reference number format: [DEPT]/[YEAR]/[SEQUENCE]"
                priority="required"
              />
              <ImplementationRow
                category="Security"
                requirement="Encrypt sensitive data (Aadhaar, PAN) in transit (TLS 1.3) and at rest (AES-256)"
                priority="critical"
              />
              <ImplementationRow
                category="Notifications"
                requirement="Send SMS and email acknowledgment within 5 minutes of submission"
                priority="required"
              />
              <ImplementationRow
                category="Analytics"
                requirement="Track step-by-step drop-off rates to identify friction points"
                priority="recommended"
              />
            </div>
          </DocumentationModule>

          {/* Do and Don't */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <GuidelineBox type="do" items={[
              "Show progress indicator on every step",
              "Auto-save user data to prevent loss",
              "Provide download/print option for acknowledgment",
              "Send confirmation SMS/Email with reference number",
              "Allow users to edit before final submission",
              "Show estimated processing time clearly"
            ]} />
            <GuidelineBox type="dont" items={[
              "Don't ask for information already in govt databases",
              "Don't make optional fields look mandatory",
              "Don't show technical error messages to users",
              "Don't lose user data if session expires",
              "Don't require perfect information upfront",
              "Don't hide 'Save & Continue Later' option"
            ]} />
          </div>

        </div>

        {/* Sidebar - 4 columns */}
        <div className="col-span-4 space-y-6">
          
          <AnnotationPanel title="Pattern Metadata">
            <div className="space-y-4">
              <AnnotationItem label="Pattern ID" value="UX4G-PAT-001" />
              <AnnotationItem label="Category" value="Service Initiation" />
              <AnnotationItem label="Complexity" value="Medium" />
              <AnnotationItem label="Avg. Implementation" value="3-4 weeks" />
              <AnnotationItem label="Conformance Level" value="Mandatory" />
            </div>
          </AnnotationPanel>

          <AnnotationPanel title="Accessibility Requirements">
            <ul className="space-y-2 text-sm text-muted-foreground dark:text-muted-foreground">
              <li className="flex items-start gap-2">
                <Eye size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
                <span>Keyboard navigation on all steps</span>
              </li>
              <li className="flex items-start gap-2">
                <Eye size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
                <span>ARIA labels on all form fields</span>
              </li>
              <li className="flex items-start gap-2">
                <Eye size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
                <span>Clear focus indicators (3px outline)</span>
              </li>
              <li className="flex items-start gap-2">
                <Eye size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
                <span>Error announcements via aria-live</span>
              </li>
              <li className="flex items-start gap-2">
                <Eye size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
                <span>Color contrast 4.5:1 minimum</span>
              </li>
            </ul>
          </AnnotationPanel>

          <AnnotationPanel title="Multilingual Support">
            <ul className="space-y-2 text-sm text-muted-foreground dark:text-muted-foreground">
              <li className="flex items-start gap-2">
                <Globe size={14} className="text-purple-600 mt-0.5 flex-shrink-0" />
                <span>UI in 12+ scheduled languages</span>
              </li>
              <li className="flex items-start gap-2">
                <Globe size={14} className="text-purple-600 mt-0.5 flex-shrink-0" />
                <span>Input in preferred language</span>
              </li>
              <li className="flex items-start gap-2">
                <Globe size={14} className="text-purple-600 mt-0.5 flex-shrink-0" />
                <span>RTL support for Urdu</span>
              </li>
              <li className="flex items-start gap-2">
                <Globe size={14} className="text-purple-600 mt-0.5 flex-shrink-0" />
                <span>Transliteration for names</span>
              </li>
            </ul>
          </AnnotationPanel>

          <AnnotationPanel title="Risk Indicators" severity="high">
            <ul className="space-y-2 text-sm text-muted-foreground dark:text-muted-foreground">
              <li className="flex items-start gap-2">
                <AlertTriangle size={14} className="text-red-600 mt-0.5 flex-shrink-0" />
                <span>Data loss from session timeout</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle size={14} className="text-red-600 mt-0.5 flex-shrink-0" />
                <span>Abandonment due to missing docs</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle size={14} className="text-red-600 mt-0.5 flex-shrink-0" />
                <span>Duplicate submissions</span>
              </li>
            </ul>
          </AnnotationPanel>

          <AnnotationPanel title="Conformance Checklist">
            <div className="space-y-2 text-sm">
              <ConformanceItem checked label="Uses UX4G Form components" />
              <ConformanceItem checked label="Implements auto-save" />
              <ConformanceItem checked label="Shows progress indicator" />
              <ConformanceItem checked label="Provides downloadable receipt" />
              <ConformanceItem checked label="Sends SMS/Email confirmation" />
            </div>
          </AnnotationPanel>

          <AnnotationPanel title="Related Patterns">
            <div className="flex flex-wrap gap-2">
              <RelatedPatternTag pattern="Eligibility & Screening" />
              <RelatedPatternTag pattern="Status Tracking" />
              <RelatedPatternTag pattern="Correction & Resubmission" />
            </div>
          </AnnotationPanel>

        </div>
      </div>
    </section>
  );
}

// ==================== ELIGIBILITY SCREENING ====================

function EligibilityScreening() {
  return (
    <section id="eligibility" className="scroll-mt-20">
      <PatternHeader
        title="Eligibility and Screening"
        icon={<UserCheck size={24} />}
        status="stable"
        version="1.1.0"
        lastUpdated="February 2026"
      />

      <div className="grid grid-cols-12 gap-8 mt-8">
        <div className="col-span-8 space-y-8">
          
          <DocumentationModule title="Pattern Overview">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <MetadataBlock label="Service Problem">
                Users waste time filling applications only to discover they're ineligible. Pre-qualification screening 
                saves time, reduces incomplete applications, and improves user experience.
              </MetadataBlock>
              <MetadataBlock label="Primary Users">
                <ul className="space-y-1.5">
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-1 h-1 bg-gray-900 rounded-full"></div>
                    <span>Citizens (self-assessment)</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-1 h-1 bg-gray-900 rounded-full"></div>
                    <span>Service centers (guided screening)</span>
                  </li>
                </ul>
              </MetadataBlock>
            </div>
          </DocumentationModule>

          <DocumentationModule title="Typical Government Use Cases">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
              {[
                "Scholarship eligibility checks",
                "Subsidy program qualification",
                "Housing scheme eligibility",
                "Senior citizen benefit screening",
                "Income-based service access",
                "Category-specific schemes"
              ].map((useCase, idx) => (
                <div key={idx} className="flex items-start gap-2 text-sm text-muted-foreground dark:text-muted-foreground">
                  <CheckCircle size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span>{useCase}</span>
                </div>
              ))}
            </div>
          </DocumentationModule>

          <DocumentationModule title="End-to-End Service Flow">
            <ProcessFlow steps={[
              { num: "01", label: "Entry", desc: "Explain check" },
              { num: "02", label: "Q1", desc: "Age/Category" },
              { num: "03", label: "Q2", desc: "Income/Location" },
              { num: "04", label: "Q3", desc: "Conditional" },
              { num: "05", label: "Calculate", desc: "Rule engine" },
              { num: "06", label: "Result", desc: "Eligible/Not" },
              { num: "07", label: "Action", desc: "Next steps" }
            ]} />
          </DocumentationModule>

          <DocumentationModule title="Recommended Page Sequence">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <PageSequenceCard num="1" title="Entry Page" elements={["Purpose explanation", "Expected time", "Privacy notice"]} />
              <PageSequenceCard num="2" title="Question Flow" elements={["3-5 criteria questions", "Conditional branching", "Progress indicator"]} />
              <PageSequenceCard num="3" title="Eligible Result" elements={["Congratulations", "Proceed to apply CTA", "Save eligibility"]} />
              <PageSequenceCard num="4" title="Ineligible Result" elements={["Polite explanation", "Reasons stated", "Alternative options"]} />
            </div>
          </DocumentationModule>

          <DocumentationModule title="Required UX4G Components">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: "Radio Button", variants: "Single-choice questions" },
                { name: "Checkbox", variants: "Multi-select criteria" },
                { name: "Number Input", variants: "Numeric thresholds" },
                { name: "Button", variants: "Primary, Secondary" },
                { name: "Alert Banner", variants: "Success, Info, Warning" },
                { name: "Card", variants: "Question containers" },
                { name: "Progress Bar", variants: "Linear progress" },
                { name: "Icon", variants: "CheckCircle, XCircle" }
              ].map((comp, idx) => (
                <ComponentTag key={idx} name={comp.name} variants={comp.variants} />
              ))}
            </div>
          </DocumentationModule>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <GuidelineBox type="do" items={[
              "Keep to 3-5 questions maximum",
              "Show progress indicator",
              "Provide clear next steps",
              "Allow restart/modification",
              "Explain ineligibility reasons",
              "Offer alternative services"
            ]} />
            <GuidelineBox type="dont" items={[
              "Don't ask for personally identifiable information",
              "Don't make eligibility check mandatory",
              "Don't show technical errors",
              "Don't prevent borderline cases from applying",
              "Don't use negative language",
              "Don't hide skip option"
            ]} />
          </div>

        </div>

        <div className="col-span-4 space-y-6">
          <AnnotationPanel title="Pattern Metadata">
            <div className="space-y-4">
              <AnnotationItem label="Pattern ID" value="UX4G-PAT-002" />
              <AnnotationItem label="Category" value="Pre-Qualification" />
              <AnnotationItem label="Complexity" value="Low" />
              <AnnotationItem label="Avg. Implementation" value="1-2 weeks" />
              <AnnotationItem label="Conformance Level" value="Recommended" />
            </div>
          </AnnotationPanel>

          <AnnotationPanel title="Content Tone Guidance">
            <ul className="space-y-2 text-sm text-muted-foreground dark:text-muted-foreground">
              <li className="flex items-start gap-2">
                <MessageSquare size={14} className="text-blue-600 mt-0.5 flex-shrink-0" />
                <span>Use encouraging, supportive language</span>
              </li>
              <li className="flex items-start gap-2">
                <MessageSquare size={14} className="text-blue-600 mt-0.5 flex-shrink-0" />
                <span>Avoid legal jargon</span>
              </li>
              <li className="flex items-start gap-2">
                <MessageSquare size={14} className="text-blue-600 mt-0.5 flex-shrink-0" />
                <span>Be empathetic for ineligible results</span>
              </li>
              <li className="flex items-start gap-2">
                <MessageSquare size={14} className="text-blue-600 mt-0.5 flex-shrink-0" />
                <span>Never use discouraging language</span>
              </li>
            </ul>
          </AnnotationPanel>

          <AnnotationPanel title="Implementation Notes">
            <div className="space-y-3 text-sm text-muted-foreground dark:text-muted-foreground">
              <div className="flex items-start gap-2">
                <Code size={14} className="text-orange-600 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-medium text-foreground dark:text-gray-100">Rule Engine</div>
                  <div className="text-xs text-muted-foreground dark:text-muted-foreground">Implement conditional logic for question branching</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Code size={14} className="text-orange-600 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-medium text-foreground dark:text-gray-100">Policy Alignment</div>
                  <div className="text-xs text-muted-foreground dark:text-muted-foreground">Work with policy team to define criteria</div>
                </div>
              </div>
            </div>
          </AnnotationPanel>

          <AnnotationPanel title="Related Patterns">
            <div className="flex flex-wrap gap-2">
              <RelatedPatternTag pattern="Application Submission" />
              <RelatedPatternTag pattern="Assisted Journey" />
            </div>
          </AnnotationPanel>
        </div>
      </div>
    </section>
  );
}

// ==================== RENEWAL ====================

function Renewal() {
  return (
    <section id="renewal" className="scroll-mt-20">
      <PatternHeader
        title="Renewal"
        icon={<RefreshCw size={24} />}
        status="stable"
        version="1.3.0"
        lastUpdated="March 2026"
      />

      <div className="grid grid-cols-12 gap-8 mt-8">
        <div className="col-span-8 space-y-8">
          
          <DocumentationModule title="Pattern Overview">
            <MetadataBlock label="Service Problem">
              Existing service holders need to renew licenses, certificates, or memberships. Pre-filling existing data 
              reduces effort while allowing updates ensures accuracy. Clear distinction between editable and locked fields is critical.
            </MetadataBlock>
          </DocumentationModule>

          <DocumentationModule title="End-to-End Service Flow">
            <ProcessFlow steps={[
              { num: "01", label: "Start", desc: "Renewal intent" },
              { num: "02", label: "Lookup", desc: "Find record" },
              { num: "03", label: "Verify", desc: "OTP/Login" },
              { num: "04", label: "Review", desc: "Pre-filled data" },
              { num: "05", label: "Update", desc: "Edit fields" },
              { num: "06", label: "Upload", desc: "New docs" },
              { num: "07", label: "Payment", desc: "Renewal fee" },
              { num: "08", label: "Success", desc: "New validity" }
            ]} />
          </DocumentationModule>

          <DocumentationModule title="Field Types and Editability">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <FieldTypeCard
                type="Locked"
                color="red"
                examples={["Name", "Date of Birth", "Aadhaar Number", "Application ID"]}
              />
              <FieldTypeCard
                type="Editable"
                color="green"
                examples={["Address", "Mobile Number", "Email", "Photo"]}
              />
              <FieldTypeCard
                type="Conditional"
                color="yellow"
                examples={["Occupation (if changed)", "Marital Status", "Emergency Contact"]}
              />
            </div>
          </DocumentationModule>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <GuidelineBox type="do" items={[
              "Send renewal reminders 30, 15, 7 days before expiry",
              "Pre-fill all existing data",
              "Clearly mark locked vs editable fields",
              "Show current and new validity dates",
              "Allow download of renewal receipt",
              "Provide grace period for late renewals"
            ]} />
            <GuidelineBox type="dont" items={[
              "Don't ask users to re-enter immutable data",
              "Don't hide renewal fees until final step",
              "Don't make payment mandatory upfront if not required",
              "Don't auto-renew without explicit consent",
              "Don't reject without clear reason",
              "Don't require all documents if unchanged"
            ]} />
          </div>

        </div>

        <div className="col-span-4 space-y-6">
          <AnnotationPanel title="Pattern Metadata">
            <div className="space-y-4">
              <AnnotationItem label="Pattern ID" value="UX4G-PAT-003" />
              <AnnotationItem label="Category" value="Service Continuity" />
              <AnnotationItem label="Complexity" value="Medium" />
              <AnnotationItem label="Avg. Implementation" value="2-3 weeks" />
              <AnnotationItem label="Conformance Level" value="Mandatory" />
            </div>
          </AnnotationPanel>

          <AnnotationPanel title="Key Decision Points">
            <div className="space-y-3 text-sm">
              <DecisionBlock
                question="Which fields editable?"
                answer="Lock immutable data (name, DOB, Aadhaar). Allow address, contact, photo updates."
              />
              <DecisionBlock
                question="Update locked fields?"
                answer="Provide separate 'Correction Request' flow. Don't allow inline editing."
              />
              <DecisionBlock
                question="Post-expiry renewal?"
                answer="Define grace period. Show warning. May require additional steps."
              />
            </div>
          </AnnotationPanel>

          <AnnotationPanel title="Notification Strategy">
            <ul className="space-y-2 text-sm text-muted-foreground dark:text-muted-foreground">
              <li className="flex items-start gap-2">
                <Clock size={14} className="text-blue-600 mt-0.5 flex-shrink-0" />
                <span>30 days before expiry (first reminder)</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={14} className="text-blue-600 mt-0.5 flex-shrink-0" />
                <span>15 days before expiry (second reminder)</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={14} className="text-blue-600 mt-0.5 flex-shrink-0" />
                <span>7 days before expiry (final reminder)</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={14} className="text-orange-600 mt-0.5 flex-shrink-0" />
                <span>On expiry day (last chance notice)</span>
              </li>
            </ul>
          </AnnotationPanel>

          <AnnotationPanel title="Related Patterns">
            <div className="flex flex-wrap gap-2">
              <RelatedPatternTag pattern="Application Submission" />
              <RelatedPatternTag pattern="Correction & Resubmission" />
              <RelatedPatternTag pattern="Status Tracking" />
            </div>
          </AnnotationPanel>
        </div>
      </div>
    </section>
  );
}

// ==================== CORRECTION & RESUBMISSION ====================

function CorrectionResubmission() {
  return (
    <section id="correction" className="scroll-mt-20">
      <PatternHeader
        title="Correction and Resubmission"
        icon={<Edit size={24} />}
        status="stable"
        version="1.2.0"
        lastUpdated="February 2026"
      />

      <div className="grid grid-cols-12 gap-8 mt-8">
        <div className="col-span-8 space-y-8">
          
          <DocumentationModule title="Pattern Overview">
            <MetadataBlock label="Service Problem">
              Applications rejected due to incomplete information, invalid documents, or policy violations need clear 
              guidance on what's wrong, how to fix it, and an easy resubmission path without starting over.
            </MetadataBlock>
          </DocumentationModule>

          <DocumentationModule title="End-to-End Service Flow">
            <ProcessFlow steps={[
              { num: "01", label: "Notify", desc: "SMS/Email alert" },
              { num: "02", label: "Summary", desc: "Issue overview" },
              { num: "03", label: "Details", desc: "Field-level errors" },
              { num: "04", label: "Correct", desc: "Fix information" },
              { num: "05", label: "Re-upload", desc: "Replace docs" },
              { num: "06", label: "Review", desc: "Changes summary" },
              { num: "07", label: "Resubmit", desc: "Final submission" }
            ]} />
          </DocumentationModule>

          <DocumentationModule title="Common Rejection Scenarios">
            <div className="space-y-3">
              <RejectionScenario
                issue="Blurry or illegible document scans"
                guidance="Provide clear image quality requirements. Show example of acceptable scan."
                severity="high"
              />
              <RejectionScenario
                issue="Expired documents (ID proof, certificates)"
                guidance="Check document validity dates. Show which documents expired and require replacement."
                severity="high"
              />
              <RejectionScenario
                issue="Signature mismatch"
                guidance="Compare signatures visually. Provide option to upload new signature with clear guidelines."
                severity="medium"
              />
              <RejectionScenario
                issue="Incomplete form fields"
                guidance="Highlight all missing required fields. Don't allow resubmission until complete."
                severity="medium"
              />
              <RejectionScenario
                issue="File format not supported"
                guidance="List accepted formats clearly (PDF, JPG, PNG). Provide file conversion guidance."
                severity="low"
              />
            </div>
          </DocumentationModule>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <GuidelineBox type="do" items={[
              "Highlight rejected fields visually in form",
              "Provide specific, actionable instructions",
              "Preserve correctly filled data",
              "Show before/after comparison",
              "Allow multiple resubmission attempts",
              "Notify user immediately upon rejection"
            ]} />
            <GuidelineBox type="dont" items={[
              "Don't use legal jargon in rejection messages",
              "Don't make users re-fill entire form",
              "Don't hide reason for rejection",
              "Don't penalize users for resubmission",
              "Don't auto-reject without review",
              "Don't expire corrections too quickly"
            ]} />
          </div>

        </div>

        <div className="col-span-4 space-y-6">
          <AnnotationPanel title="Pattern Metadata">
            <div className="space-y-4">
              <AnnotationItem label="Pattern ID" value="UX4G-PAT-004" />
              <AnnotationItem label="Category" value="Error Recovery" />
              <AnnotationItem label="Complexity" value="Medium" />
              <AnnotationItem label="Avg. Implementation" value="2-3 weeks" />
              <AnnotationItem label="Conformance Level" value="Mandatory" />
            </div>
          </AnnotationPanel>

          <AnnotationPanel title="Content Tone" severity="info">
            <ul className="space-y-2 text-sm text-muted-foreground dark:text-muted-foreground">
              <li className="flex items-start gap-2">
                <MessageSquare size={14} className="text-blue-600 mt-0.5 flex-shrink-0" />
                <span>Be empathetic (never punitive)</span>
              </li>
              <li className="flex items-start gap-2">
                <MessageSquare size={14} className="text-blue-600 mt-0.5 flex-shrink-0" />
                <span>Use clear, non-technical language</span>
              </li>
              <li className="flex items-start gap-2">
                <MessageSquare size={14} className="text-blue-600 mt-0.5 flex-shrink-0" />
                <span>Provide examples of correct format</span>
              </li>
              <li className="flex items-start gap-2">
                <MessageSquare size={14} className="text-blue-600 mt-0.5 flex-shrink-0" />
                <span>Offer helpline contact for assistance</span>
              </li>
            </ul>
          </AnnotationPanel>

          <AnnotationPanel title="Correction Timeline">
            <div className="space-y-3 text-sm">
              <TimelineItem day="Day 0" action="Rejection notification sent" />
              <TimelineItem day="Day 1-30" action="Correction window open" />
              <TimelineItem day="Day 30" action="Deadline reminder sent" />
              <TimelineItem day="Day 31+" action="Fresh application required" />
            </div>
          </AnnotationPanel>

          <AnnotationPanel title="Related Patterns">
            <div className="flex flex-wrap gap-2">
              <RelatedPatternTag pattern="Application Submission" />
              <RelatedPatternTag pattern="Status Tracking" />
            </div>
          </AnnotationPanel>
        </div>
      </div>
    </section>
  );
}

// ==================== COMPLAINT & ESCALATION ====================

function ComplaintEscalation() {
  return (
    <section id="complaint" className="scroll-mt-20">
      <PatternHeader
        title="Complaint and Escalation"
        icon={<AlertCircle size={24} />}
        status="stable"
        version="1.1.0"
        lastUpdated="March 2026"
      />

      <div className="grid grid-cols-12 gap-8 mt-8">
        <div className="col-span-8 space-y-8">
          
          <DocumentationModule title="Pattern Overview">
            <MetadataBlock label="Service Problem">
              Citizens face service issues – delays, incorrect information, poor quality. They need structured complaint 
              submission, progress tracking, and escalation if not resolved within SLA.
            </MetadataBlock>
          </DocumentationModule>

          <DocumentationModule title="End-to-End Service Flow">
            <ProcessFlow steps={[
              { num: "01", label: "Start", desc: "Complaint intent" },
              { num: "02", label: "Category", desc: "Issue type" },
              { num: "03", label: "Details", desc: "Description" },
              { num: "04", label: "Evidence", desc: "Upload files" },
              { num: "05", label: "Submit", desc: "Final submission" },
              { num: "06", label: "Track", desc: "Status updates" },
              { num: "07", label: "Escalate", desc: "If needed" },
              { num: "08", label: "Resolve", desc: "Closure" }
            ]} />
          </DocumentationModule>

          <DocumentationModule title="Escalation Hierarchy">
            <div className="space-y-3">
              <EscalationLevel
                level="Level 1"
                role="Assigned Officer"
                sla="7 days"
                description="Initial complaint handler, department staff"
              />
              <EscalationLevel
                level="Level 2"
                role="Supervisor / Manager"
                sla="15 days"
                description="Team lead or section in-charge"
              />
              <EscalationLevel
                level="Level 3"
                role="Department Head"
                sla="30 days"
                description="Divisional officer or department head"
              />
              <EscalationLevel
                level="Level 4"
                role="Ombudsman / Grievance Cell"
                sla="45 days"
                description="Final authority for unresolved complaints"
              />
            </div>
          </DocumentationModule>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <GuidelineBox type="do" items={[
              "Provide clear SLA timelines upfront",
              "Send acknowledgment with complaint ID",
              "Allow tracking without login",
              "Auto-escalate if SLA breached",
              "Collect satisfaction feedback",
              "Provide helpline for urgent issues"
            ]} />
            <GuidelineBox type="dont" items={[
              "Don't ignore or auto-close complaints",
              "Don't use technical jargon",
              "Don't require excessive information",
              "Don't hide escalation option",
              "Don't penalize for escalating",
              "Don't close without user confirmation"
            ]} />
          </div>

        </div>

        <div className="col-span-4 space-y-6">
          <AnnotationPanel title="Pattern Metadata">
            <div className="space-y-4">
              <AnnotationItem label="Pattern ID" value="UX4G-PAT-005" />
              <AnnotationItem label="Category" value="Grievance Redressal" />
              <AnnotationItem label="Complexity" value="High" />
              <AnnotationItem label="Avg. Implementation" value="4-5 weeks" />
              <AnnotationItem label="Conformance Level" value="Mandatory" />
            </div>
          </AnnotationPanel>

          <AnnotationPanel title="SLA Monitoring">
            <ul className="space-y-2 text-sm text-muted-foreground dark:text-muted-foreground">
              <li className="flex items-start gap-2">
                <Clock size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
                <span>Track days since submission</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={14} className="text-yellow-600 mt-0.5 flex-shrink-0" />
                <span>Warn 2 days before SLA breach</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={14} className="text-red-600 mt-0.5 flex-shrink-0" />
                <span>Auto-escalate on SLA breach</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={14} className="text-blue-600 mt-0.5 flex-shrink-0" />
                <span>Notify citizen at each escalation</span>
              </li>
            </ul>
          </AnnotationPanel>

          <AnnotationPanel title="Analytics Events">
            <div className="space-y-2 text-sm text-muted-foreground dark:text-muted-foreground">
              <div className="flex items-start gap-2">
                <BarChart3 size={14} className="text-purple-600 mt-0.5 flex-shrink-0" />
                <span>Complaint submission rate</span>
              </div>
              <div className="flex items-start gap-2">
                <BarChart3 size={14} className="text-purple-600 mt-0.5 flex-shrink-0" />
                <span>Resolution time (avg, median)</span>
              </div>
              <div className="flex items-start gap-2">
                <BarChart3 size={14} className="text-purple-600 mt-0.5 flex-shrink-0" />
                <span>Escalation rate by level</span>
              </div>
              <div className="flex items-start gap-2">
                <BarChart3 size={14} className="text-purple-600 mt-0.5 flex-shrink-0" />
                <span>Satisfaction score distribution</span>
              </div>
            </div>
          </AnnotationPanel>

          <AnnotationPanel title="Related Patterns">
            <div className="flex flex-wrap gap-2">
              <RelatedPatternTag pattern="Status Tracking" />
              <RelatedPatternTag pattern="Application Submission" />
            </div>
          </AnnotationPanel>
        </div>
      </div>
    </section>
  );
}

// ==================== APPROVAL & ISSUANCE ====================

function ApprovalIssuance() {
  return (
    <section id="approval" className="scroll-mt-20">
      <PatternHeader
        title="Approval and Issuance"
        icon={<CheckCircle size={24} />}
        status="stable"
        version="1.4.0"
        lastUpdated="March 2026"
      />

      <div className="grid grid-cols-12 gap-8 mt-8">
        <div className="col-span-8 space-y-8">
          
          <DocumentationModule title="Pattern Overview">
            <MetadataBlock label="Service Problem">
              After review, users need approval/rejection notification. Approved users receive digital certificates 
              with download, print, share options. Rejected users need clear reasons and next steps.
            </MetadataBlock>
          </DocumentationModule>

          <DocumentationModule title="End-to-End Service Flow">
            <ProcessFlow steps={[
              { num: "01", label: "Review", desc: "Backend process" },
              { num: "02", label: "Decision", desc: "Approve/Reject" },
              { num: "03", label: "Notify", desc: "SMS/Email" },
              { num: "04", label: "Generate", desc: "Digital cert" },
              { num: "05", label: "Download", desc: "PDF access" },
              { num: "06", label: "Verify", desc: "QR code" },
              { num: "07", label: "Share", desc: "Distribution" }
            ]} />
          </DocumentationModule>

          <DocumentationModule title="Digital Certificate Requirements">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <RequirementBlock
                title="Mandatory Elements"
                items={[
                  "Unique certificate/license number",
                  "Issue date and validity period",
                  "QR code for verification",
                  "Digital signature of authority",
                  "Government emblem/logo",
                  "Issuing authority details"
                ]}
              />
              <RequirementBlock
                title="Security Features"
                items={[
                  "Secure PDF (prevent editing)",
                  "Encrypted document metadata",
                  "Tamper-proof QR code",
                  "Digital signature validation",
                  "Watermark on background",
                  "Unique verification URL"
                ]}
              />
            </div>
          </DocumentationModule>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <GuidelineBox type="do" items={[
              "Notify within 1 hour of approval/rejection",
              "Include QR code for verification",
              "Provide downloadable PDF",
              "Allow sharing via email/WhatsApp",
              "Show clear validity period",
              "Provide print-friendly format"
            ]} />
            <GuidelineBox type="dont" items={[
              "Don't delay approval notifications",
              "Don't issue without verification mechanism",
              "Don't hide rejection reasons",
              "Don't make download complex",
              "Don't expire without renewal notice",
              "Don't allow editing of issued docs"
            ]} />
          </div>

        </div>

        <div className="col-span-4 space-y-6">
          <AnnotationPanel title="Pattern Metadata">
            <div className="space-y-4">
              <AnnotationItem label="Pattern ID" value="UX4G-PAT-006" />
              <AnnotationItem label="Category" value="Service Completion" />
              <AnnotationItem label="Complexity" value="High" />
              <AnnotationItem label="Avg. Implementation" value="3-4 weeks" />
              <AnnotationItem label="Conformance Level" value="Mandatory" />
            </div>
          </AnnotationPanel>

          <AnnotationPanel title="Security Requirements" severity="critical">
            <ul className="space-y-2 text-sm text-muted-foreground dark:text-muted-foreground">
              <li className="flex items-start gap-2">
                <Lock size={14} className="text-red-600 mt-0.5 flex-shrink-0" />
                <span>PDF encryption (AES-256)</span>
              </li>
              <li className="flex items-start gap-2">
                <Lock size={14} className="text-red-600 mt-0.5 flex-shrink-0" />
                <span>Digital signature validation</span>
              </li>
              <li className="flex items-start gap-2">
                <Lock size={14} className="text-red-600 mt-0.5 flex-shrink-0" />
                <span>Tamper-proof QR code</span>
              </li>
              <li className="flex items-start gap-2">
                <Lock size={14} className="text-red-600 mt-0.5 flex-shrink-0" />
                <span>Secure download links (expiry)</span>
              </li>
            </ul>
          </AnnotationPanel>

          <AnnotationPanel title="DigiLocker Integration">
            <div className="space-y-2 text-sm text-muted-foreground dark:text-muted-foreground">
              <div className="flex items-start gap-2">
                <Database size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
                <span>Auto-upload to DigiLocker</span>
              </div>
              <div className="flex items-start gap-2">
                <Database size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
                <span>Citizen consent required</span>
              </div>
              <div className="flex items-start gap-2">
                <Database size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
                <span>Linked to Aadhaar</span>
              </div>
            </div>
          </AnnotationPanel>

          <AnnotationPanel title="Related Patterns">
            <div className="flex flex-wrap gap-2">
              <RelatedPatternTag pattern="Application Submission" />
              <RelatedPatternTag pattern="Status Tracking" />
            </div>
          </AnnotationPanel>
        </div>
      </div>
    </section>
  );
}

// ==================== ASSISTED OFFLINE-TO-ONLINE ====================

function AssistedOfflineToOnline() {
  return (
    <section id="assisted" className="scroll-mt-20">
      <PatternHeader
        title="Assisted Offline-to-Online Journey"
        icon={<Headphones size={24} />}
        status="evolving"
        version="0.9.0"
        lastUpdated="February 2026"
      />

      <div className="grid grid-cols-12 gap-8 mt-8">
        <div className="col-span-8 space-y-8">
          
          <DocumentationModule title="Pattern Overview">
            <MetadataBlock label="Service Problem">
              Not all citizens are digitally literate or have internet access. Service centers help users initiate 
              services offline, which transition to online tracking. Service continuity must be maintained across channels.
            </MetadataBlock>
          </DocumentationModule>

          <DocumentationModule title="End-to-End Service Flow">
            <ProcessFlow steps={[
              { num: "01", label: "Visit", desc: "User at center" },
              { num: "02", label: "Staff Login", desc: "Assisted mode" },
              { num: "03", label: "Data Entry", desc: "Staff inputs" },
              { num: "04", label: "Scan Docs", desc: "Upload on behalf" },
              { num: "05", label: "Verify", desc: "User OTP" },
              { num: "06", label: "Print", desc: "Receipt" },
              { num: "07", label: "Track Online", desc: "Citizen access" }
            ]} />
          </DocumentationModule>

          <DocumentationModule title="Staff Training Requirements">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <TrainingModule
                title="Technical Skills"
                items={["Data entry accuracy", "Document scanning quality", "System navigation", "Troubleshooting common errors"]}
              />
              <TrainingModule
                title="Soft Skills"
                items={["Citizen interaction", "Multilingual communication", "Privacy awareness", "Assisting elderly/disabled"]}
              />
            </div>
          </DocumentationModule>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <GuidelineBox type="do" items={[
              "Require citizen consent via OTP/signature",
              "Send SMS confirmation immediately",
              "Print acknowledgment with QR code",
              "Allow online tracking with ref number",
              "Log all staff actions for audit",
              "Provide multilingual staff support"
            ]} />
            <GuidelineBox type="dont" items={[
              "Don't allow submission without verification",
              "Don't skip printing acknowledgment",
              "Don't store staff credentials insecurely",
              "Don't allow bulk applications without consent",
              "Don't hide staff identity",
              "Don't ignore accessibility needs"
            ]} />
          </div>

        </div>

        <div className="col-span-4 space-y-6">
          <AnnotationPanel title="Pattern Metadata">
            <div className="space-y-4">
              <AnnotationItem label="Pattern ID" value="UX4G-PAT-007" />
              <AnnotationItem label="Category" value="Assisted Service" />
              <AnnotationItem label="Complexity" value="High" />
              <AnnotationItem label="Avg. Implementation" value="5-6 weeks" />
              <AnnotationItem label="Conformance Level" value="Recommended" />
            </div>
          </AnnotationPanel>

          <AnnotationPanel title="Citizen Consent Verification">
            <div className="space-y-3 text-sm">
              <ConsentMethod
                method="OTP Verification"
                description="Send OTP to citizen's mobile, staff enters code"
                recommended={true}
              />
              <ConsentMethod
                method="Digital Signature"
                description="Citizen signs on tablet/device"
                recommended={true}
              />
              <ConsentMethod
                method="Thumbprint + Photo"
                description="Biometric capture for illiterate citizens"
                recommended={false}
              />
            </div>
          </AnnotationPanel>

          <AnnotationPanel title="Audit Requirements" severity="high">
            <ul className="space-y-2 text-sm text-muted-foreground dark:text-muted-foreground">
              <li className="flex items-start gap-2">
                <Shield size={14} className="text-orange-600 mt-0.5 flex-shrink-0" />
                <span>Log staff ID and timestamp</span>
              </li>
              <li className="flex items-start gap-2">
                <Shield size={14} className="text-orange-600 mt-0.5 flex-shrink-0" />
                <span>Store consent proof (OTP/signature)</span>
              </li>
              <li className="flex items-start gap-2">
                <Shield size={14} className="text-orange-600 mt-0.5 flex-shrink-0" />
                <span>Track document upload source</span>
              </li>
              <li className="flex items-start gap-2">
                <Shield size={14} className="text-orange-600 mt-0.5 flex-shrink-0" />
                <span>SMS confirmation to citizen</span>
              </li>
            </ul>
          </AnnotationPanel>

          <AnnotationPanel title="Related Patterns">
            <div className="flex flex-wrap gap-2">
              <RelatedPatternTag pattern="Application Submission" />
              <RelatedPatternTag pattern="Status Tracking" />
            </div>
          </AnnotationPanel>
        </div>
      </div>
    </section>
  );
}

// ==================== HIGH-VOLUME STATUS TRACKING ====================

function HighVolumeStatusTracking() {
  return (
    <section id="tracking" className="scroll-mt-20">
      <PatternHeader
        title="High-Volume Status Tracking"
        icon={<Activity size={24} />}
        status="stable"
        version="1.5.0"
        lastUpdated="March 2026"
      />

      <div className="grid grid-cols-12 gap-8 mt-8">
        <div className="col-span-8 space-y-8">
          
          <DocumentationModule title="Pattern Overview">
            <MetadataBlock label="Service Problem">
              High-volume services (passport, PAN, Aadhaar) receive millions of daily status checks. Citizens need fast, 
              reliable tracking without calling helplines or visiting offices.
            </MetadataBlock>
          </DocumentationModule>

          <DocumentationModule title="End-to-End Service Flow">
            <ProcessFlow steps={[
              { num: "01", label: "Entry", desc: "Track status" },
              { num: "02", label: "Lookup", desc: "Enter ref/mobile" },
              { num: "03", label: "CAPTCHA", desc: "Prevent bots" },
              { num: "04", label: "Fetch", desc: "API call" },
              { num: "05", label: "Display", desc: "Timeline view" },
              { num: "06", label: "Actions", desc: "User tasks" },
              { num: "07", label: "Alerts", desc: "Email/SMS" }
            ]} />
          </DocumentationModule>

          <DocumentationModule title="Status Message Guidelines">
            <div className="space-y-3">
              <StatusMessage
                status="Submitted"
                message="Application received and under verification"
                color="blue"
                icon={<CheckCircle size={16} />}
              />
              <StatusMessage
                status="In Progress"
                message="Being processed by department officials"
                color="yellow"
                icon={<Clock size={16} />}
              />
              <StatusMessage
                status="Approved"
                message="Application approved, certificate being issued"
                color="green"
                icon={<CheckCircle size={16} />}
              />
              <StatusMessage
                status="Issued"
                message="Certificate ready for download/delivery"
                color="green"
                icon={<Download size={16} />}
              />
              <StatusMessage
                status="Rejected"
                message="Application not approved (view reasons)"
                color="red"
                icon={<XCircle size={16} />}
              />
              <StatusMessage
                status="Delayed"
                message="Processing delayed, expected by [date]"
                color="orange"
                icon={<AlertTriangle size={16} />}
              />
            </div>
          </DocumentationModule>

          <DocumentationModule title="Performance Optimization">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <OptimizationBlock
                title="Backend"
                strategies={["Redis caching (5-minute TTL)", "Database indexing on ref number", "API rate limiting (10 req/min)", "CDN for static assets"]}
              />
              <OptimizationBlock
                title="Frontend"
                strategies={["Lazy load timeline components", "Debounce search input", "Show skeleton loaders", "Offline fallback message"]}
              />
            </div>
          </DocumentationModule>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <GuidelineBox type="do" items={[
              "Show visual timeline with current stage",
              "Provide expected completion date",
              "Send SMS/email on major status changes",
              "Allow lookup without login",
              "Show pending actions clearly",
              "Provide escalation if delayed"
            ]} />
            <GuidelineBox type="dont" items={[
              "Don't use technical status codes",
              "Don't hide expected completion date",
              "Don't require login for simple check",
              "Don't show incomplete timeline",
              "Don't ignore delay scenarios",
              "Don't make escalation difficult to find"
            ]} />
          </div>

        </div>

        <div className="col-span-4 space-y-6">
          <AnnotationPanel title="Pattern Metadata">
            <div className="space-y-4">
              <AnnotationItem label="Pattern ID" value="UX4G-PAT-008" />
              <AnnotationItem label="Category" value="Service Monitoring" />
              <AnnotationItem label="Complexity" value="High" />
              <AnnotationItem label="Avg. Implementation" value="4-5 weeks" />
              <AnnotationItem label="Conformance Level" value="Mandatory" />
            </div>
          </AnnotationPanel>

          <AnnotationPanel title="Performance SLAs" severity="critical">
            <ul className="space-y-2 text-sm text-muted-foreground dark:text-muted-foreground">
              <li className="flex items-start gap-2">
                <Zap size={14} className="text-red-600 mt-0.5 flex-shrink-0" />
                <span>API response time: &lt; 3 seconds</span>
              </li>
              <li className="flex items-start gap-2">
                <Zap size={14} className="text-red-600 mt-0.5 flex-shrink-0" />
                <span>Page load time: &lt; 2 seconds</span>
              </li>
              <li className="flex items-start gap-2">
                <Zap size={14} className="text-red-600 mt-0.5 flex-shrink-0" />
                <span>Concurrent users: 10,000+</span>
              </li>
              <li className="flex items-start gap-2">
                <Zap size={14} className="text-red-600 mt-0.5 flex-shrink-0" />
                <span>Cache hit ratio: &gt; 80%</span>
              </li>
            </ul>
          </AnnotationPanel>

          <AnnotationPanel title="Bot Prevention">
            <div className="space-y-2 text-sm text-muted-foreground dark:text-muted-foreground">
              <div className="flex items-start gap-2">
                <Shield size={14} className="text-blue-600 mt-0.5 flex-shrink-0" />
                <span>CAPTCHA on lookup page</span>
              </div>
              <div className="flex items-start gap-2">
                <Shield size={14} className="text-blue-600 mt-0.5 flex-shrink-0" />
                <span>Rate limiting (10 requests/min)</span>
              </div>
              <div className="flex items-start gap-2">
                <Shield size={14} className="text-blue-600 mt-0.5 flex-shrink-0" />
                <span>IP blocking for abuse</span>
              </div>
            </div>
          </AnnotationPanel>

          <AnnotationPanel title="Analytics Events">
            <div className="space-y-2 text-sm text-muted-foreground dark:text-muted-foreground">
              <div className="flex items-start gap-2">
                <BarChart3 size={14} className="text-purple-600 mt-0.5 flex-shrink-0" />
                <span>Status lookup attempts</span>
              </div>
              <div className="flex items-start gap-2">
                <BarChart3 size={14} className="text-purple-600 mt-0.5 flex-shrink-0" />
                <span>Most checked applications</span>
              </div>
              <div className="flex items-start gap-2">
                <BarChart3 size={14} className="text-purple-600 mt-0.5 flex-shrink-0" />
                <span>CAPTCHA failure rate</span>
              </div>
              <div className="flex items-start gap-2">
                <BarChart3 size={14} className="text-purple-600 mt-0.5 flex-shrink-0" />
                <span>Average time per stage</span>
              </div>
            </div>
          </AnnotationPanel>

          <AnnotationPanel title="Related Patterns">
            <div className="flex flex-wrap gap-2">
              <RelatedPatternTag pattern="Application Submission" />
              <RelatedPatternTag pattern="Approval & Issuance" />
              <RelatedPatternTag pattern="Complaint & Escalation" />
            </div>
          </AnnotationPanel>
        </div>
      </div>
    </section>
  );
}

// ==================== REUSABLE COMPONENTS ====================

function PatternHeader({ title, icon, status, version, lastUpdated }: any) {
  const statusConfig: any = {
    stable: { bg: 'bg-green-50 dark:bg-green-950/20', border: 'border-green-200 dark:border-green-800', text: 'text-green-700 dark:text-green-400', label: 'Stable' },
    evolving: { bg: 'bg-blue-50 dark:bg-blue-950/20', border: 'border-blue-200 dark:border-blue-800', text: 'text-blue-700 dark:text-blue-400', label: 'Evolving' },
    experimental: { bg: 'bg-yellow-50 dark:bg-yellow-950/20', border: 'border-yellow-200 dark:border-yellow-800', text: 'text-yellow-700 dark:text-yellow-400', label: 'Experimental' }
  };

  return (
    <div className="rounded-[28px] border border-border bg-card p-6 shadow-sm">
      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr] xl:items-center">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl border border-border bg-muted text-muted-foreground shadow-sm">
            {icon}
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">{title}</h2>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>Version {version}</span>
              <span className="hidden h-1 w-1 rounded-full bg-muted-foreground/40 sm:inline-block" />
              <span>Updated {lastUpdated}</span>
            </div>
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          <div className={`rounded-2xl border px-4 py-3 ${statusConfig[status].bg} ${statusConfig[status].border}`}>
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Status</div>
            <div className={`mt-1 text-base font-bold ${statusConfig[status].text}`}>{statusConfig[status].label}</div>
          </div>
          <div className="rounded-2xl border border-border bg-muted/30 px-4 py-3">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Version</div>
            <div className="mt-1 text-base font-bold text-foreground">{version}</div>
          </div>
          <div className="rounded-2xl border border-border bg-muted/30 px-4 py-3">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Updated</div>
            <div className="mt-1 text-base font-bold text-foreground">{lastUpdated}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PatternMetric({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-border bg-muted/40 p-4">
      <div className="text-2xl font-bold tracking-tight text-foreground">{value}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

function PatternNote({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
      <p className="text-sm font-semibold text-foreground">{title}</p>
      <p className="mt-1 text-sm leading-6 text-muted-foreground">{text}</p>
    </div>
  );
}

function DocumentationModule({ title, children }: any) {
  return (
    <div className="overflow-hidden rounded-[24px] border border-border bg-card shadow-sm">
      <div className="border-b border-border bg-muted/35 px-6 py-4">
        <h3 className="text-lg font-bold text-foreground">{title}</h3>
      </div>
      <div className="p-6">
        {children}
      </div>
    </div>
  );
}

function MetadataBlock({ label, children }: any) {
  return (
    <div>
      <div className="mb-2 text-xs font-bold uppercase tracking-[0.24em] text-muted-foreground">{label}</div>
      <div className="text-sm leading-relaxed text-muted-foreground">{children}</div>
    </div>
  );
}

function ProcessFlow({ steps }: any) {
  return (
    <div className="grid gap-3 overflow-x-auto pb-2 xl:grid-cols-4">
      {steps.map((step: any, idx: number) => (
        <div key={idx} className="flex items-start gap-3 rounded-2xl border border-border bg-muted/20 p-4">
          <div className="flex flex-col items-center">
            <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
              {step.num}
            </div>
            <div className="text-center text-xs font-bold text-foreground">{step.label}</div>
          </div>
          <div className="min-w-0 flex-1 pt-1 text-sm text-muted-foreground">{step.desc}</div>
          {idx < steps.length - 1 && <ChevronRight className="mt-3 flex-shrink-0 text-muted-foreground" size={20} />}
        </div>
      ))}
    </div>
  );
}

function PageSequenceCard({ num, title, elements }: any) {
  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-lg">
      <div className="flex items-center gap-2 mb-3">
        <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded bg-primary text-xs font-bold text-primary-foreground">
          {num}
        </div>
        <div className="text-sm font-bold text-foreground">{title}</div>
      </div>
      <ul className="space-y-1.5">
        {elements.map((element: string, idx: number) => (
          <li key={idx} className="flex items-start gap-1.5 text-xs text-muted-foreground">
            <div className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-muted-foreground/50"></div>
            <span>{element}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ComponentTag({ name, variants }: any) {
  return (
    <div className="rounded-2xl border border-border bg-card px-4 py-3 shadow-sm">
      <div className="mb-0.5 text-sm font-bold text-foreground">{name}</div>
      <div className="text-xs text-muted-foreground">{variants}</div>
    </div>
  );
}

function ImplementationRow({ category, requirement, priority }: any) {
  const priorityConfig: any = {
    critical: { bg: 'bg-red-50 dark:bg-red-950/20', text: 'text-red-700 dark:text-red-400', border: 'border-red-200 dark:border-red-800' },
    required: { bg: 'bg-orange-50 dark:bg-orange-950/20', text: 'text-orange-700 dark:text-orange-400', border: 'border-orange-200 dark:border-orange-800' },
    recommended: { bg: 'bg-blue-50 dark:bg-blue-950/20', text: 'text-blue-700 dark:text-blue-400', border: 'border-blue-200 dark:border-blue-800' }
  };

  return (
    <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-4 shadow-sm">
      <div className="w-24 flex-shrink-0">
        <span className="text-xs font-bold uppercase tracking-[0.24em] text-muted-foreground">{category}</span>
      </div>
      <div className="flex-1 text-sm leading-6 text-muted-foreground">{requirement}</div>
      <div className={`flex-shrink-0 rounded-full border px-3 py-1 text-xs font-bold uppercase ${priorityConfig[priority].bg} ${priorityConfig[priority].text} ${priorityConfig[priority].border}`}>
        {priority}
      </div>
    </div>
  );
}

function GuidelineBox({ type, items }: any) {
  const config: any = {
    do: {
      bg: 'bg-green-50 dark:bg-green-950/20',
      border: 'border-green-200 dark:border-green-800',
      headerBg: 'bg-green-100/80 dark:bg-green-900/30',
      icon: <ThumbsUp size={18} className="text-green-700 dark:text-green-400" />,
      iconBg: 'bg-green-100 dark:bg-green-900/30',
      iconBorder: 'border-green-200 dark:border-green-800',
      itemIcon: <CheckCircle size={14} className="text-green-600 dark:text-green-400" />,
      title: 'Do'
    },
    dont: {
      bg: 'bg-red-50 dark:bg-red-950/20',
      border: 'border-red-200 dark:border-red-800',
      headerBg: 'bg-red-100/80 dark:bg-red-900/30',
      icon: <ThumbsDown size={18} className="text-red-700 dark:text-red-400" />,
      iconBg: 'bg-red-100 dark:bg-red-900/30',
      iconBorder: 'border-red-200 dark:border-red-800',
      itemIcon: <XCircle size={14} className="text-red-600 dark:text-red-400" />,
      title: "Don't"
    }
  };

  return (
    <div className={`overflow-hidden rounded-[24px] border ${config[type].border} ${config[type].bg} shadow-sm`}>
      <div className={`${config[type].headerBg} border-b ${config[type].border} px-4 py-3 flex items-center gap-3`}>
        <div className={`flex h-8 w-8 items-center justify-center rounded-lg border ${config[type].iconBg} ${config[type].iconBorder}`}>
          {config[type].icon}
        </div>
        <h3 className="font-bold text-foreground">{config[type].title}</h3>
      </div>
      <div className="p-4">
        <ul className="space-y-2">
          {items.map((item: string, idx: number) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
              {config[type].itemIcon}
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function AnnotationPanel({ title, children, severity }: any) {
  const severityConfig: any = {
    critical: { border: 'border-red-200 dark:border-red-800', bg: 'bg-red-50 dark:bg-red-950/20', headerBg: 'bg-red-100/80 dark:bg-red-900/30' },
    high: { border: 'border-orange-200 dark:border-orange-800', bg: 'bg-orange-50 dark:bg-orange-950/20', headerBg: 'bg-orange-100/80 dark:bg-orange-900/30' },
    info: { border: 'border-blue-200 dark:border-blue-800', bg: 'bg-blue-50 dark:bg-blue-950/20', headerBg: 'bg-blue-100/80 dark:bg-blue-900/30' }
  };

  const config = severity ? severityConfig[severity] : { border: 'border-border', bg: 'bg-card', headerBg: 'bg-muted/35' };

  return (
    <div className={`overflow-hidden rounded-[24px] border ${config.border} ${config.bg} shadow-sm`}>
      <div className={`${config.headerBg} border-b ${config.border} px-4 py-2.5`}>
        <h3 className="text-sm font-bold text-foreground">{title}</h3>
      </div>
      <div className="p-4">
        {children}
      </div>
    </div>
  );
}

function AnnotationItem({ label, value }: any) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-bold text-foreground">{value}</span>
    </div>
  );
}

function ConformanceItem({ checked, label }: any) {
  return (
    <div className="flex items-center gap-2">
      <div className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded border-2 ${checked ? 'border-green-600 bg-green-500' : 'border-border bg-card'}`}>
        {checked && <CheckSquare size={14} className="text-white" />}
      </div>
      <span className="text-muted-foreground">{label}</span>
    </div>
  );
}

function RelatedPatternTag({ pattern }: any) {
  return (
    <div className="cursor-pointer rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary hover:text-primary">
      {pattern}
    </div>
  );
}

function FieldTypeCard({ type, color, examples }: any) {
  const colorConfig: any = {
    red: { bg: 'bg-red-50 dark:bg-red-950/20', border: 'border-red-200 dark:border-red-800', text: 'text-red-700 dark:text-red-400', iconBg: 'bg-red-100 dark:bg-red-900/30' },
    green: { bg: 'bg-green-50 dark:bg-green-950/20', border: 'border-green-200 dark:border-green-800', text: 'text-green-700 dark:text-green-400', iconBg: 'bg-green-100 dark:bg-green-900/30' },
    yellow: { bg: 'bg-yellow-50 dark:bg-yellow-950/20', border: 'border-yellow-200 dark:border-yellow-800', text: 'text-yellow-700 dark:text-yellow-400', iconBg: 'bg-yellow-100 dark:bg-yellow-900/30' }
  };

  return (
    <div className={`rounded-2xl border ${colorConfig[color].border} p-4 shadow-sm ${colorConfig[color].bg}`}>
      <div className={`mb-3 inline-flex rounded-full px-3 py-1 text-xs font-bold ${colorConfig[color].iconBg} ${colorConfig[color].text}`}>
        {type}
      </div>
      <ul className="space-y-1.5">
        {examples.map((example: string, idx: number) => (
          <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
            <div className="h-1.5 w-1.5 rounded-full bg-muted-foreground/60"></div>
            <span>{example}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function RejectionScenario({ issue, guidance, severity }: any) {
  const severityConfig: any = {
    high: { icon: <AlertTriangle size={16} className="text-red-600" />, badge: 'border-red-200 bg-red-50 text-red-700 dark:border-red-800 dark:bg-red-950/20 dark:text-red-400' },
    medium: { icon: <AlertCircle size={16} className="text-orange-600" />, badge: 'border-orange-200 bg-orange-50 text-orange-700 dark:border-orange-800 dark:bg-orange-950/20 dark:text-orange-400' },
    low: { icon: <Info size={16} className="text-blue-600" />, badge: 'border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-800 dark:bg-blue-950/20 dark:text-blue-400' }
  };

  return (
    <div className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4 shadow-sm">
      <div className="flex-shrink-0 mt-0.5">{severityConfig[severity].icon}</div>
      <div className="flex-1">
        <div className="mb-1 text-sm font-bold text-foreground">{issue}</div>
        <div className="text-sm text-muted-foreground">{guidance}</div>
      </div>
      <div className={`flex-shrink-0 rounded-full border px-2 py-1 text-xs font-bold ${severityConfig[severity].badge}`}>
        {severity.toUpperCase()}
      </div>
    </div>
  );
}

function DecisionBlock({ question, answer }: any) {
  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
      <div className="mb-1 text-sm font-bold text-foreground">{question}</div>
      <div className="text-xs text-muted-foreground">{answer}</div>
    </div>
  );
}

function TimelineItem({ day, action }: any) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-16 flex-shrink-0 font-bold text-foreground">{day}</div>
      <div className="flex-1 text-muted-foreground">{action}</div>
    </div>
  );
}

function EscalationLevel({ level, role, sla, description }: any) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-4 shadow-sm">
      <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
        <div className="text-center">
          <div className="text-xs font-bold">LEVEL</div>
          <div className="text-xl font-bold">{level.slice(-1)}</div>
        </div>
      </div>
      <div className="flex-1">
        <div className="mb-1 font-bold text-foreground">{role}</div>
        <div className="mb-2 text-sm text-muted-foreground">{description}</div>
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700 dark:border-blue-800 dark:bg-blue-950/20 dark:text-blue-400">
          <Clock size={12} />
          <span>SLA: {sla}</span>
        </div>
      </div>
    </div>
  );
}

function RequirementBlock({ title, items }: any) {
  return (
    <div>
      <h3 className="mb-3 text-sm font-bold text-foreground">{title}</h3>
      <ul className="space-y-2">
        {items.map((item: string, idx: number) => (
          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
            <CheckCircle size={14} className="mt-0.5 flex-shrink-0 text-green-600 dark:text-green-400" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function TrainingModule({ title, items }: any) {
  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
      <h3 className="mb-3 text-sm font-bold text-foreground">{title}</h3>
      <ul className="space-y-2">
        {items.map((item: string, idx: number) => (
          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
            <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted-foreground/60"></div>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ConsentMethod({ method, description, recommended }: any) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4 shadow-sm">
      <div className="flex-1">
        <div className="mb-1 text-sm font-bold text-foreground">{method}</div>
        <div className="text-xs text-muted-foreground">{description}</div>
      </div>
      {recommended && (
        <div className="flex-shrink-0 rounded-full border border-green-200 bg-green-50 px-2 py-1 text-xs font-bold text-green-700 dark:border-green-800 dark:bg-green-950/20 dark:text-green-400">
          RECOMMENDED
        </div>
      )}
    </div>
  );
}

function StatusMessage({ status, message, color, icon }: any) {
  const colorConfig: any = {
    blue: { bg: 'bg-blue-50 dark:bg-blue-950/20', border: 'border-blue-200 dark:border-blue-800', iconBg: 'bg-blue-100 dark:bg-blue-900/30', text: 'text-blue-700 dark:text-blue-400' },
    yellow: { bg: 'bg-yellow-50 dark:bg-yellow-950/20', border: 'border-yellow-200 dark:border-yellow-800', iconBg: 'bg-yellow-100 dark:bg-yellow-900/30', text: 'text-yellow-700 dark:text-yellow-400' },
    green: { bg: 'bg-green-50 dark:bg-green-950/20', border: 'border-green-200 dark:border-green-800', iconBg: 'bg-green-100 dark:bg-green-900/30', text: 'text-green-700 dark:text-green-400' },
    red: { bg: 'bg-red-50 dark:bg-red-950/20', border: 'border-red-200 dark:border-red-800', iconBg: 'bg-red-100 dark:bg-red-900/30', text: 'text-red-700 dark:text-red-400' },
    orange: { bg: 'bg-orange-50 dark:bg-orange-950/20', border: 'border-orange-200 dark:border-orange-800', iconBg: 'bg-orange-100 dark:bg-orange-900/30', text: 'text-orange-700 dark:text-orange-400' }
  };

  return (
    <div className={`flex items-start gap-3 rounded-2xl border p-4 shadow-sm ${colorConfig[color].bg} ${colorConfig[color].border}`}>
      <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl ${colorConfig[color].iconBg} ${colorConfig[color].text}`}>
        {icon}
      </div>
      <div className="flex-1">
        <div className={`mb-1 text-sm font-bold ${colorConfig[color].text}`}>{status}</div>
        <div className="text-sm text-muted-foreground">{message}</div>
      </div>
    </div>
  );
}

function OptimizationBlock({ title, strategies }: any) {
  return (
    <div>
      <h3 className="mb-3 text-sm font-bold text-foreground">{title}</h3>
      <ul className="space-y-2">
        {strategies.map((strategy: string, idx: number) => (
          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
            <Zap size={14} className="mt-0.5 flex-shrink-0 text-blue-600 dark:text-blue-400" />
            <span>{strategy}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ==================== CODE DOWNLOADS ====================

const SERVICEPATTERNLIBRARIES_REACT_CODE = `import React, { useState } from 'react';

export default function ServicePatternLibrariesPage() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/service-pattern-libraries', {
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
        <h1 className="text-2xl font-bold text-foreground mb-2">Service Pattern Libraries</h1>
        <p className="text-sm text-muted-foreground mb-6">Government digital service pattern</p>
        {error && <div role="alert" className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">{error}</div>}
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

const SERVICEPATTERNLIBRARIES_ANGULAR_CODE = `import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ux4g-service-pattern-libraries',
  standalone: true,
  imports: [CommonModule],
  template: \`
    <div class="min-h-screen flex items-center justify-center bg-background p-4">
      <div class="w-full max-w-lg bg-card border border-border rounded-2xl p-8 shadow-sm">
        <h1 class="text-2xl font-bold text-foreground mb-2">Service Pattern Libraries</h1>
        <p class="text-sm text-muted-foreground mb-6">Government digital service pattern</p>
        <div *ngIf="error" role="alert" class="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">{{ error }}</div>
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
export class ServicePatternLibrariesComponent {
  loading = false;
  submitted = false;
  error = '';

  async onSubmit() {
    this.loading = true;
    this.error = '';
    try {
      const res = await fetch('/api/service-pattern-libraries', {
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

const SERVICEPATTERNLIBRARIES_HTML_CODE = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Service Pattern Libraries — UX4G</title>
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
    <h1>Service Pattern Libraries</h1>
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
        const res = await fetch('/api/service-pattern-libraries', {
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

function ServicePatternLibrariesCodeDownloads() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const copyToClipboard = (code: string, id: string) => { navigator.clipboard.writeText(code); setCopiedId(id); setTimeout(() => setCopiedId(null), 2000); };
  const downloadCode = (code: string, filename: string) => { const blob = new Blob([code], { type: 'text/plain' }); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = filename; a.click(); URL.revokeObjectURL(url); };
  const lanes = [
    { key: 'react', title: 'React', desc: 'TypeScript + Hooks', code: SERVICEPATTERNLIBRARIES_REACT_CODE, filename: 'ServicePatternLibrariesPage.tsx' },
    { key: 'angular', title: 'Angular', desc: 'Standalone Component', code: SERVICEPATTERNLIBRARIES_ANGULAR_CODE, filename: 'service-pattern-libraries.component.ts' },
    { key: 'html', title: 'HTML / CSS / JS', desc: 'No framework needed', code: SERVICEPATTERNLIBRARIES_HTML_CODE, filename: 'service-pattern-libraries.html' },
  ];
  return (
    <section id="code-downloads" className="space-y-6 scroll-mt-24 mt-12">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Code Downloads</h2>
        <p className="text-muted-foreground mt-1">Production-ready Service Pattern Libraries implementations.</p>
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

// ── Bilingual copy ──────────────────────────────────────────────────
const SPL_EN = {
  eyebrow: 'UX4G service pattern library',
  title: 'Service archetypes that feel ready for production',
  description:
    'Structured, repeatable service patterns for assembling government digital journeys. The library keeps service flows accessible, consistent, and easy to adapt across departments.',
};

const SPL_HI = {
  eyebrow: 'UX4G सेवा पैटर्न लाइब्रेरी',
  title: 'उत्पादन के लिए तैयार सेवा आर्किटाइप',
  description:
    'सरकारी डिजिटल सेवा यात्राओं को संयोजित करने के लिए संरचित, पुनरावर्तनीय सेवा पैटर्न। यह लाइब्रेरी सेवा प्रवाहों को सुलभ, सुसंगत और विभागों में अनुकूलन योग्य बनाती है।',
};
