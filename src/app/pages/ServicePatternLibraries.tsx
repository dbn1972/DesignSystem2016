import { FileText, Users, RefreshCw, AlertCircle, CheckCircle, FileCheck, UserCheck, Activity, ArrowRight, Circle, ChevronRight, Info, AlertTriangle, Shield, Eye, Globe, Headphones, Code, GitBranch, CheckSquare, XCircle, Clock, Download, Search, Edit, Upload, MessageSquare, ThumbsUp, ThumbsDown, Zap, Target, Layers, BookOpen, Settings, Database, Lock, BarChart3, FileCode } from "lucide-react";

export default function ServicePatternLibraries() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#000080] text-white">
        <div className="max-w-[1400px] mx-auto px-12 py-12">
          <div className="flex items-start justify-between">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/15 rounded text-xs font-medium mb-4 border border-white/20">
                <Layers size={14} />
                <span>UX4G Service Pattern Library</span>
              </div>
              
              <h1 className="text-4xl font-bold mb-4 leading-tight">
                Full Service Pattern Libraries
              </h1>
              
              <p className="text-lg text-blue-100 leading-relaxed mb-6">
                Structured, repeatable service archetypes for assembling government digital services. 
                Implementation-ready patterns for consistent, accessible, and conformant service delivery.
              </p>

              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                  <span className="text-blue-200">8 Service Archetypes</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                  <span className="text-blue-200">WCAG AA Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                  <span className="text-blue-200">Production Ready</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-lg p-6">
              <div className="text-xs font-medium text-blue-200 mb-3">Pattern Status</div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-sm"></div>
                  <span>Stable (6)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-sm"></div>
                  <span>Evolving (2)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b-2 border-gray-300 sticky top-0 z-20">
        <div className="max-w-[1400px] mx-auto px-12">
          <div className="flex items-center gap-1 py-3 overflow-x-auto">
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
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#000080] hover:bg-gray-100 rounded whitespace-nowrap transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-[1400px] mx-auto px-12 py-16">
        <div className="space-y-24">
          <ApplicationSubmission />
          <EligibilityScreening />
          <Renewal />
          <CorrectionResubmission />
          <ComplaintEscalation />
          <ApprovalIssuance />
          <AssistedOfflineToOnline />
          <HighVolumeStatusTracking />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t-2 border-gray-300 mt-24">
        <div className="max-w-[1400px] mx-auto px-12 py-8">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div>UX4G Design System Platform • Service Pattern Library v1.0</div>
            <div>Government of India • Digital India Initiative</div>
          </div>
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
            <div className="grid grid-cols-2 gap-6">
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
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              {[
                "Passport applications",
                "Driving license applications",
                "Scholarship applications",
                "Business license registration",
                "Ration card applications",
                "Government housing schemes"
              ].map((useCase, idx) => (
                <div key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span>{useCase}</span>
                </div>
              ))}
            </div>
          </DocumentationModule>

          {/* Journey Flow */}
          <DocumentationModule title="End-to-End Service Flow">
            <div className="space-y-4">
              <div className="text-sm text-gray-600 mb-4">
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
            <div className="grid grid-cols-4 gap-4">
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
            <div className="grid grid-cols-3 gap-4">
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
          <div className="grid grid-cols-2 gap-6">
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
        <aside className="col-span-4 space-y-6">
          
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
            <ul className="space-y-2 text-sm text-gray-700">
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
            <ul className="space-y-2 text-sm text-gray-700">
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
            <ul className="space-y-2 text-sm text-gray-700">
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

        </aside>
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
            <div className="grid grid-cols-2 gap-6">
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
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              {[
                "Scholarship eligibility checks",
                "Subsidy program qualification",
                "Housing scheme eligibility",
                "Senior citizen benefit screening",
                "Income-based service access",
                "Category-specific schemes"
              ].map((useCase, idx) => (
                <div key={idx} className="flex items-start gap-2 text-sm text-gray-700">
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
            <div className="grid grid-cols-4 gap-4">
              <PageSequenceCard num="1" title="Entry Page" elements={["Purpose explanation", "Expected time", "Privacy notice"]} />
              <PageSequenceCard num="2" title="Question Flow" elements={["3-5 criteria questions", "Conditional branching", "Progress indicator"]} />
              <PageSequenceCard num="3" title="Eligible Result" elements={["Congratulations", "Proceed to apply CTA", "Save eligibility"]} />
              <PageSequenceCard num="4" title="Ineligible Result" elements={["Polite explanation", "Reasons stated", "Alternative options"]} />
            </div>
          </DocumentationModule>

          <DocumentationModule title="Required UX4G Components">
            <div className="grid grid-cols-3 gap-4">
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

          <div className="grid grid-cols-2 gap-6">
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

        <aside className="col-span-4 space-y-6">
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
            <ul className="space-y-2 text-sm text-gray-700">
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
            <div className="space-y-3 text-sm text-gray-700">
              <div className="flex items-start gap-2">
                <Code size={14} className="text-orange-600 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-medium text-gray-900">Rule Engine</div>
                  <div className="text-xs text-gray-600">Implement conditional logic for question branching</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Code size={14} className="text-orange-600 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-medium text-gray-900">Policy Alignment</div>
                  <div className="text-xs text-gray-600">Work with policy team to define criteria</div>
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
        </aside>
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
            <div className="grid grid-cols-3 gap-4">
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

          <div className="grid grid-cols-2 gap-6">
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

        <aside className="col-span-4 space-y-6">
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
            <ul className="space-y-2 text-sm text-gray-700">
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
        </aside>
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

          <div className="grid grid-cols-2 gap-6">
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

        <aside className="col-span-4 space-y-6">
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
            <ul className="space-y-2 text-sm text-gray-700">
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
        </aside>
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

          <div className="grid grid-cols-2 gap-6">
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

        <aside className="col-span-4 space-y-6">
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
            <ul className="space-y-2 text-sm text-gray-700">
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
            <div className="space-y-2 text-sm text-gray-700">
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
        </aside>
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
            <div className="grid grid-cols-2 gap-6">
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

          <div className="grid grid-cols-2 gap-6">
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

        <aside className="col-span-4 space-y-6">
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
            <ul className="space-y-2 text-sm text-gray-700">
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
            <div className="space-y-2 text-sm text-gray-700">
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
        </aside>
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
            <div className="grid grid-cols-2 gap-4">
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

          <div className="grid grid-cols-2 gap-6">
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

        <aside className="col-span-4 space-y-6">
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
            <ul className="space-y-2 text-sm text-gray-700">
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
        </aside>
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
            <div className="grid grid-cols-2 gap-6">
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

          <div className="grid grid-cols-2 gap-6">
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

        <aside className="col-span-4 space-y-6">
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
            <ul className="space-y-2 text-sm text-gray-700">
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
            <div className="space-y-2 text-sm text-gray-700">
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
            <div className="space-y-2 text-sm text-gray-700">
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
        </aside>
      </div>
    </section>
  );
}

// ==================== REUSABLE COMPONENTS ====================

function PatternHeader({ title, icon, status, version, lastUpdated }: any) {
  const statusConfig: any = {
    stable: { bg: 'bg-green-100', border: 'border-green-300', text: 'text-green-800', label: 'Stable' },
    evolving: { bg: 'bg-blue-100', border: 'border-blue-300', text: 'text-blue-800', label: 'Evolving' },
    experimental: { bg: 'bg-yellow-100', border: 'border-yellow-300', text: 'text-yellow-800', label: 'Experimental' }
  };

  return (
    <div className="border-l-4 border-[#000080] pl-6">
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-gray-100 border-2 border-gray-300 rounded flex items-center justify-center text-gray-700 flex-shrink-0">
            {icon}
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">{title}</h2>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span>Version {version}</span>
              <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
              <span>Updated {lastUpdated}</span>
            </div>
          </div>
        </div>
        <div className={`px-4 py-2 rounded border-2 ${statusConfig[status].bg} ${statusConfig[status].border} ${statusConfig[status].text} text-sm font-bold`}>
          {statusConfig[status].label}
        </div>
      </div>
    </div>
  );
}

function DocumentationModule({ title, children }: any) {
  return (
    <div className="border-2 border-gray-300 rounded-lg overflow-hidden bg-white">
      <div className="bg-gray-100 border-b-2 border-gray-300 px-6 py-4">
        <h3 className="font-bold text-gray-900 text-lg">{title}</h3>
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
      <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">{label}</div>
      <div className="text-sm text-gray-700 leading-relaxed">{children}</div>
    </div>
  );
}

function ProcessFlow({ steps }: any) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2">
      {steps.map((step: any, idx: number) => (
        <div key={idx} className="flex items-center flex-shrink-0">
          <div className="flex flex-col items-center w-24">
            <div className="w-10 h-10 bg-[#000080] text-white rounded-full flex items-center justify-center text-sm font-bold mb-2">
              {step.num}
            </div>
            <div className="text-xs font-bold text-gray-900 text-center mb-1">{step.label}</div>
            <div className="text-xs text-gray-600 text-center">{step.desc}</div>
          </div>
          {idx < steps.length - 1 && (
            <ChevronRight className="text-gray-400 mx-1 flex-shrink-0" size={20} />
          )}
        </div>
      ))}
    </div>
  );
}

function PageSequenceCard({ num, title, elements }: any) {
  return (
    <div className="border-2 border-gray-300 rounded-lg p-4 bg-gray-50 hover:border-[#000080] transition-colors">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-6 h-6 bg-[#000080] text-white rounded text-xs font-bold flex items-center justify-center flex-shrink-0">
          {num}
        </div>
        <div className="font-bold text-sm text-gray-900">{title}</div>
      </div>
      <ul className="space-y-1.5">
        {elements.map((element: string, idx: number) => (
          <li key={idx} className="flex items-start gap-1.5 text-xs text-gray-600">
            <div className="w-1 h-1 bg-gray-400 rounded-full mt-1.5 flex-shrink-0"></div>
            <span>{element}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ComponentTag({ name, variants }: any) {
  return (
    <div className="border border-gray-300 rounded px-3 py-2 bg-white">
      <div className="font-bold text-sm text-gray-900 mb-0.5">{name}</div>
      <div className="text-xs text-gray-600">{variants}</div>
    </div>
  );
}

function ImplementationRow({ category, requirement, priority }: any) {
  const priorityConfig: any = {
    critical: { bg: 'bg-red-100', text: 'text-red-700', border: 'border-red-300' },
    required: { bg: 'bg-orange-100', text: 'text-orange-700', border: 'border-orange-300' },
    recommended: { bg: 'bg-blue-100', text: 'text-blue-700', border: 'border-blue-300' }
  };

  return (
    <div className="flex items-start gap-4">
      <div className="w-24 flex-shrink-0">
        <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">{category}</span>
      </div>
      <div className="flex-1 text-sm text-gray-700">{requirement}</div>
      <div className={`px-2 py-1 rounded border ${priorityConfig[priority].bg} ${priorityConfig[priority].text} ${priorityConfig[priority].border} text-xs font-bold uppercase flex-shrink-0`}>
        {priority}
      </div>
    </div>
  );
}

function GuidelineBox({ type, items }: any) {
  const config: any = {
    do: {
      bg: 'bg-green-50',
      border: 'border-green-300',
      headerBg: 'bg-green-100',
      icon: <ThumbsUp size={18} className="text-green-700" />,
      iconBg: 'bg-green-200',
      iconBorder: 'border-green-400',
      itemIcon: <CheckCircle size={14} className="text-green-600" />,
      title: 'Do'
    },
    dont: {
      bg: 'bg-red-50',
      border: 'border-red-300',
      headerBg: 'bg-red-100',
      icon: <ThumbsDown size={18} className="text-red-700" />,
      iconBg: 'bg-red-200',
      iconBorder: 'border-red-400',
      itemIcon: <XCircle size={14} className="text-red-600" />,
      title: "Don't"
    }
  };

  return (
    <div className={`border-2 ${config[type].border} rounded-lg overflow-hidden ${config[type].bg}`}>
      <div className={`${config[type].headerBg} border-b-2 ${config[type].border} px-4 py-3 flex items-center gap-3`}>
        <div className={`w-8 h-8 ${config[type].iconBg} border-2 ${config[type].iconBorder} rounded flex items-center justify-center`}>
          {config[type].icon}
        </div>
        <h4 className="font-bold text-gray-900">{config[type].title}</h4>
      </div>
      <div className="p-4">
        <ul className="space-y-2">
          {items.map((item: string, idx: number) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
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
    critical: { border: 'border-red-300', bg: 'bg-red-50', headerBg: 'bg-red-100' },
    high: { border: 'border-orange-300', bg: 'bg-orange-50', headerBg: 'bg-orange-100' },
    info: { border: 'border-blue-300', bg: 'bg-blue-50', headerBg: 'bg-blue-100' }
  };

  const config = severity ? severityConfig[severity] : { border: 'border-gray-300', bg: 'bg-gray-50', headerBg: 'bg-gray-100' };

  return (
    <div className={`border-2 ${config.border} rounded-lg overflow-hidden ${config.bg}`}>
      <div className={`${config.headerBg} border-b-2 ${config.border} px-4 py-2.5`}>
        <h4 className="font-bold text-gray-900 text-sm">{title}</h4>
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
      <span className="text-gray-600">{label}</span>
      <span className="font-bold text-gray-900">{value}</span>
    </div>
  );
}

function ConformanceItem({ checked, label }: any) {
  return (
    <div className="flex items-center gap-2">
      <div className={`w-5 h-5 border-2 rounded flex items-center justify-center flex-shrink-0 ${checked ? 'bg-green-500 border-green-600' : 'bg-white border-gray-300'}`}>
        {checked && <CheckSquare size={14} className="text-white" />}
      </div>
      <span className="text-gray-700">{label}</span>
    </div>
  );
}

function RelatedPatternTag({ pattern }: any) {
  return (
    <div className="px-3 py-1.5 bg-white border-2 border-gray-300 rounded text-xs font-medium text-gray-700 hover:border-[#000080] transition-colors cursor-pointer">
      {pattern}
    </div>
  );
}

function FieldTypeCard({ type, color, examples }: any) {
  const colorConfig: any = {
    red: { bg: 'bg-red-50', border: 'border-red-300', text: 'text-red-700', iconBg: 'bg-red-100' },
    green: { bg: 'bg-green-50', border: 'border-green-300', text: 'text-green-700', iconBg: 'bg-green-100' },
    yellow: { bg: 'bg-yellow-50', border: 'border-yellow-300', text: 'text-yellow-700', iconBg: 'bg-yellow-100' }
  };

  return (
    <div className={`border-2 ${colorConfig[color].border} rounded-lg p-4 ${colorConfig[color].bg}`}>
      <div className={`inline-flex px-3 py-1 rounded ${colorConfig[color].iconBg} ${colorConfig[color].text} text-xs font-bold mb-3`}>
        {type}
      </div>
      <ul className="space-y-1.5">
        {examples.map((example: string, idx: number) => (
          <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
            <div className="w-1.5 h-1.5 bg-gray-600 rounded-full"></div>
            <span>{example}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function RejectionScenario({ issue, guidance, severity }: any) {
  const severityConfig: any = {
    high: { icon: <AlertTriangle size={16} className="text-red-600" />, badge: 'bg-red-100 text-red-700' },
    medium: { icon: <AlertCircle size={16} className="text-orange-600" />, badge: 'bg-orange-100 text-orange-700' },
    low: { icon: <Info size={16} className="text-blue-600" />, badge: 'bg-blue-100 text-blue-700' }
  };

  return (
    <div className="flex items-start gap-3 p-4 bg-gray-50 border border-gray-300 rounded-lg">
      <div className="flex-shrink-0 mt-0.5">{severityConfig[severity].icon}</div>
      <div className="flex-1">
        <div className="font-bold text-sm text-gray-900 mb-1">{issue}</div>
        <div className="text-sm text-gray-700">{guidance}</div>
      </div>
      <div className={`px-2 py-1 rounded text-xs font-bold ${severityConfig[severity].badge} flex-shrink-0`}>
        {severity.toUpperCase()}
      </div>
    </div>
  );
}

function DecisionBlock({ question, answer }: any) {
  return (
    <div className="border-l-4 border-purple-600 pl-3">
      <div className="font-bold text-sm text-gray-900 mb-1">{question}</div>
      <div className="text-xs text-gray-600">{answer}</div>
    </div>
  );
}

function TimelineItem({ day, action }: any) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-16 flex-shrink-0 font-bold text-gray-900">{day}</div>
      <div className="flex-1 text-gray-700">{action}</div>
    </div>
  );
}

function EscalationLevel({ level, role, sla, description }: any) {
  return (
    <div className="flex items-start gap-4 p-4 bg-gray-50 border-2 border-gray-300 rounded-lg">
      <div className="w-16 h-16 bg-[#000080] text-white rounded flex items-center justify-center flex-shrink-0">
        <div className="text-center">
          <div className="text-xs font-bold">LEVEL</div>
          <div className="text-xl font-bold">{level.slice(-1)}</div>
        </div>
      </div>
      <div className="flex-1">
        <div className="font-bold text-gray-900 mb-1">{role}</div>
        <div className="text-sm text-gray-700 mb-2">{description}</div>
        <div className="inline-flex items-center gap-2 px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-bold">
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
      <h4 className="font-bold text-sm text-gray-900 mb-3">{title}</h4>
      <ul className="space-y-2">
        {items.map((item: string, idx: number) => (
          <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
            <CheckCircle size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function TrainingModule({ title, items }: any) {
  return (
    <div className="border-2 border-gray-300 rounded-lg p-4 bg-white">
      <h4 className="font-bold text-sm text-gray-900 mb-3">{title}</h4>
      <ul className="space-y-2">
        {items.map((item: string, idx: number) => (
          <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
            <div className="w-1.5 h-1.5 bg-gray-600 rounded-full mt-1.5 flex-shrink-0"></div>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ConsentMethod({ method, description, recommended }: any) {
  return (
    <div className="flex items-start gap-3 p-3 bg-white border border-gray-300 rounded">
      <div className="flex-1">
        <div className="font-bold text-sm text-gray-900 mb-1">{method}</div>
        <div className="text-xs text-gray-600">{description}</div>
      </div>
      {recommended && (
        <div className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-bold flex-shrink-0">
          RECOMMENDED
        </div>
      )}
    </div>
  );
}

function StatusMessage({ status, message, color, icon }: any) {
  const colorConfig: any = {
    blue: { bg: 'bg-blue-50', border: 'border-blue-300', iconBg: 'bg-blue-100', text: 'text-blue-700' },
    yellow: { bg: 'bg-yellow-50', border: 'border-yellow-300', iconBg: 'bg-yellow-100', text: 'text-yellow-700' },
    green: { bg: 'bg-green-50', border: 'border-green-300', iconBg: 'bg-green-100', text: 'text-green-700' },
    red: { bg: 'bg-red-50', border: 'border-red-300', iconBg: 'bg-red-100', text: 'text-red-700' },
    orange: { bg: 'bg-orange-50', border: 'border-orange-300', iconBg: 'bg-orange-100', text: 'text-orange-700' }
  };

  return (
    <div className={`flex items-start gap-3 p-4 ${colorConfig[color].bg} border-2 ${colorConfig[color].border} rounded-lg`}>
      <div className={`w-10 h-10 ${colorConfig[color].iconBg} rounded flex items-center justify-center flex-shrink-0 ${colorConfig[color].text}`}>
        {icon}
      </div>
      <div className="flex-1">
        <div className={`font-bold text-sm mb-1 ${colorConfig[color].text}`}>{status}</div>
        <div className="text-sm text-gray-700">{message}</div>
      </div>
    </div>
  );
}

function OptimizationBlock({ title, strategies }: any) {
  return (
    <div>
      <h4 className="font-bold text-sm text-gray-900 mb-3">{title}</h4>
      <ul className="space-y-2">
        {strategies.map((strategy: string, idx: number) => (
          <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
            <Zap size={14} className="text-blue-600 mt-0.5 flex-shrink-0" />
            <span>{strategy}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
