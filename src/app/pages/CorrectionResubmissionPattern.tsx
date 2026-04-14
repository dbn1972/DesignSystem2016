import { FileEdit, CheckCircle, XCircle, AlertCircle, Info, AlertTriangle, ArrowRight, RefreshCw, Eye, Globe, Code, BarChart3, Shield, Clock, Users, FileText, Zap, Target, HelpCircle, ChevronRight, ThumbsUp, Edit, ArrowLeft, Check, Upload, Download, MessageCircle, Phone, Mail, ExternalLink, List, CheckSquare, Image as ImageIcon, Layers, Flag } from "lucide-react";

export default function CorrectionResubmissionPattern() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b-2 border-border">
        <div className="max-w-[1600px] mx-auto px-12 py-8">
          <div className="flex items-start justify-between">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-16 h-16 bg-muted border-2 border-border rounded flex items-center justify-center">
                  <FileEdit size={32} className="text-muted-foreground" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">UX4G Service Pattern Library</div>
                  <h1 className="text-3xl font-bold text-foreground">Correction and Resubmission</h1>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Recovery pattern for applications that need correction due to missing, invalid, or rejected information. 
                Helps users understand issues clearly, make corrections confidently, and resubmit without losing progress.
              </p>
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-sm"></div>
                  <span className="text-muted-foreground">Pattern ID: <span className="font-bold text-foreground">UX4G-PAT-004</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-sm"></div>
                  <span className="text-muted-foreground">Version: <span className="font-bold text-foreground">1.0.0</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-sm"></div>
                  <span className="text-muted-foreground">Updated: <span className="font-bold text-foreground">April 2026</span></span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="px-6 py-3 bg-green-100 border-2 border-green-300 rounded text-green-800 font-bold text-sm text-center">
                STABLE
              </div>
              <div className="px-6 py-3 bg-red-50 border-2 border-red-200 rounded text-red-700 font-bold text-xs text-center uppercase">
                Conformance<br/>Mandatory
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-card border-b border-border sticky top-0 z-20">
        <div className="max-w-[1600px] mx-auto px-12">
          <div className="flex items-center gap-1 py-3 overflow-x-auto">
            {[
              { id: "overview", label: "Overview" },
              { id: "journey", label: "Journey Flow" },
              { id: "pages", label: "Page Designs" },
              { id: "error-patterns", label: "Error Patterns" },
              { id: "components", label: "Components" },
              { id: "content", label: "Content" },
              { id: "accessibility", label: "Accessibility" },
              { id: "implementation", label: "Implementation" },
              { id: "governance", label: "Governance" }
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-muted rounded whitespace-nowrap transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-[1600px] mx-auto px-12 py-12">
        <div className="grid grid-cols-12 gap-8">
          
          {/* Main Content - 9 columns */}
          <div className="col-span-9 space-y-12">
            <PatternOverview />
            <JourneyFlow />
            <PageDesigns />
            <ErrorPatterns />
            <ComponentsUsed />
            <ContentGuidance />
            <AccessibilityGuidance />
            <ImplementationNotes />
            <GovernanceConformance />
          </div>

          {/* Sidebar - 3 columns */}
          <aside className="col-span-3 space-y-6 sticky top-24 self-start">
            <MetadataPanel />
            <QuickRefPanel />
            <DesignPrinciples />
            <RiskIndicators />
            <RelatedResources />
          </aside>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t-2 border-border mt-24">
        <div className="max-w-[1600px] mx-auto px-12 py-8">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div>UX4G Design System Platform • Service Pattern Library</div>
            <div>Government of India • Digital India Initiative</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ==================== PATTERN OVERVIEW ====================

function PatternOverview() {
  return (
    <section id="overview" className="space-y-6">
      <SectionHeader title="Pattern Overview" />

      <div className="grid grid-cols-2 gap-6">
        <DocModule>
          <ModuleHeader title="Service Problem Solved" />
          <ModuleContent>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Applications are rejected due to errors, but users don't understand what went wrong or how to fix it. 
              They must restart from scratch, losing all correct information and becoming frustrated.
            </p>
            <div className="space-y-3">
              <ProblemSolutionBlock
                icon={<XCircle size={18} className="text-red-600" />}
                problem="User receives vague rejection notice with no clear guidance on fixes"
                solution="Show grouped issues with specific field-level explanations and examples"
              />
              <ProblemSolutionBlock
                icon={<AlertCircle size={18} className="text-orange-600" />}
                problem="Users must re-enter all data including correct information"
                solution="Preserve all correct data. Only show fields that need correction."
              />
              <ProblemSolutionBlock
                icon={<HelpCircle size={18} className="text-blue-600" />}
                problem="No path forward if user doesn't have required documents"
                solution="Provide alternative options, support contact, and escalation path"
              />
            </div>
          </ModuleContent>
        </DocModule>

        <DocModule>
          <ModuleHeader title="Primary User Groups" />
          <ModuleContent>
            <div className="space-y-4">
              <UserGroup
                icon={<Users size={18} className="text-blue-600" />}
                name="Self-Service Users"
                description="Citizens correcting their own applications online"
                percentage="60%"
              />
              <UserGroup
                icon={<FileText size={18} className="text-purple-600" />}
                name="Assisted Users"
                description="Citizens receiving help from CSC operators or support staff"
                percentage="30%"
              />
              <UserGroup
                icon={<Shield size={18} className="text-orange-600" />}
                name="Government Reviewers"
                description="Staff who flag issues and need clear communication templates"
                percentage="10%"
              />
            </div>
          </ModuleContent>
        </DocModule>
      </div>

      <DocModule>
        <ModuleHeader title="Typical Government Use Cases" />
        <ModuleContent>
          <div className="grid grid-cols-3 gap-6">
            <UseCaseCard
              title="Document Issues"
              examples={[
                "Uploaded file is blurry or unreadable",
                "Document expired or invalid",
                "Wrong document type uploaded",
                "Missing signature or stamp on certificate"
              ]}
            />
            <UseCaseCard
              title="Data Validation Errors"
              examples={[
                "Aadhaar number doesn't match name",
                "Date format incorrect",
                "Mobile number invalid",
                "Income exceeds eligibility threshold"
              ]}
            />
            <UseCaseCard
              title="Missing Information"
              examples={[
                "Required field left blank",
                "Supporting document not uploaded",
                "Mandatory declaration not checked",
                "Dependent information incomplete"
              ]}
            />
          </div>
        </ModuleContent>
      </DocModule>

      <DocModule>
        <ModuleHeader title="Entry Points for Correction Journey" />
        <ModuleContent>
          <div className="space-y-4">
            <EntryPointCard
              method="SMS/Email Notification"
              description="User receives rejection notice with link to correction portal"
              example="Your scholarship application needs correction. 3 issues found. Fix by 30 April: [Link]"
            />
            <EntryPointCard
              method="Status Dashboard"
              description="User checks application status and sees 'Action Required' state"
              example="Status: Action Required → Click 'View Issues and Correct' button"
            />
            <EntryPointCard
              method="In-App Alert"
              description="Logged-in user sees notification banner on home page or dashboard"
              example="⚠️ Your application DL/2026/12345 needs correction. 3 issues. [View Details]"
            />
            <EntryPointCard
              method="Support Channel Redirect"
              description="User contacts helpline/CSC and is guided to correction portal"
              example="Operator shares correction link or walks user through process"
            />
          </div>
        </ModuleContent>
      </DocModule>
    </section>
  );
}

// ==================== JOURNEY FLOW ====================

function JourneyFlow() {
  return (
    <section id="journey" className="space-y-6">
      <SectionHeader title="User Journey and Service Flow" />

      <DocModule>
        <ModuleHeader title="End-to-End Flow Diagram" />
        <ModuleContent>
          <div className="space-y-4">
            <div className="grid grid-cols-5 gap-4">
              <FlowStep number="01" label="Entry" status="entry" />
              <FlowStep number="02" label="Issue Summary" status="active" />
              <FlowStep number="03" label="Grouped Issues" status="active" />
              <FlowStep number="04" label="Field Correction" status="active" />
              <FlowStep number="05" label="Doc Re-upload" status="optional" />
            </div>
            <div className="flex items-center justify-center">
              <ArrowRight className="text-gray-400" size={24} />
            </div>
            <div className="grid grid-cols-5 gap-4">
              <FlowStep number="06" label="Review Changes" status="active" />
              <FlowStep number="07" label="Resubmit" status="success" />
              <FlowStep number="08" label="Acknowledgment" status="success" />
              <FlowStep number="09" label="Updated Status" status="info" />
              <FlowStep number="10" label="Support/Escalate" status="optional" />
            </div>
          </div>
        </ModuleContent>
      </DocModule>

      <DocModule>
        <ModuleHeader title="Recommended Page Sequence" />
        <ModuleContent>
          <div className="space-y-3">
            <PageSequenceRow
              number="1"
              title="Correction Notification Entry"
              description="User arrives via notification link, status page, or in-app alert"
              required={true}
            />
            <PageSequenceRow
              number="2"
              title="Issue Summary Page"
              description="Overview of all issues grouped by type (missing, invalid, rejected)"
              required={true}
            />
            <PageSequenceRow
              number="3"
              title="Detailed Issue List"
              description="Field-by-field breakdown with clear explanations and examples"
              required={true}
            />
            <PageSequenceRow
              number="4"
              title="Correction Guidance"
              description="Help content: what documents are needed, format requirements, examples"
              required={true}
            />
            <PageSequenceRow
              number="5"
              title="Field-Level Correction"
              description="Edit only the flagged fields. Correct data preserved and shown as read-only."
              required={true}
            />
            <PageSequenceRow
              number="6"
              title="Document Re-Upload"
              description="Replace rejected documents with clear specs (file size, format, quality)"
              required={false}
            />
            <PageSequenceRow
              number="7"
              title="Review Corrections"
              description="Show before/after comparison for changed fields and documents"
              required={true}
            />
            <PageSequenceRow
              number="8"
              title="Resubmission Confirmation"
              description="Final check before resubmitting with updated data"
              required={true}
            />
            <PageSequenceRow
              number="9"
              title="Acknowledgment"
              description="Success confirmation with new reference number and expected timeline"
              required={true}
            />
            <PageSequenceRow
              number="10"
              title="Updated Status Tracking"
              description="Monitor resubmitted application with correction history visible"
              required={true}
            />
            <PageSequenceRow
              number="11"
              title="Support/Escalation Path"
              description="Contact options if user is stuck or disagrees with rejection reason"
              required={false}
            />
          </div>
        </ModuleContent>
      </DocModule>
    </section>
  );
}

// ==================== PAGE DESIGNS ====================

function PageDesigns() {
  return (
    <section id="pages" className="space-y-6">
      <SectionHeader title="Example Page Designs" />

      {/* Issue Summary Page */}
      <DocModule>
        <ModuleHeader title="Page 1: Issue Summary (Overview)" />
        <ModuleContent>
          <div className="border-2 border-border rounded-lg overflow-hidden bg-card">
            <div className="bg-orange-100 border-b-2 border-orange-300 p-8">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-4">
                  <AlertCircle size={32} className="text-orange-600" />
                  <h1 className="text-3xl font-bold text-foreground">Your Application Needs Correction</h1>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  We reviewed your application and found a few issues that need your attention. 
                  Don't worry—your correct information is saved. You only need to fix the items listed below.
                </p>
                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                    <span>Application ID: <span className="font-bold">SCH/2026/12345</span></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                    <span>Reviewed on: <span className="font-bold">5 April 2026</span></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-8 space-y-6">
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                <div className="flex items-start gap-3">
                  <Info size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-foreground mb-2">What You Need to Do</div>
                    <div className="text-sm text-muted-foreground">
                      We found <strong>5 issues</strong> that need correction. Fix them and resubmit by <strong>30 April 2026</strong>. 
                      All your correct information is preserved—you don't need to re-enter everything.
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6">
                <IssueSummaryCard
                  type="Missing Information"
                  count={2}
                  color="red"
                  icon={<AlertTriangle size={24} className="text-red-600" />}
                />
                <IssueSummaryCard
                  type="Invalid Data"
                  count={2}
                  color="orange"
                  icon={<AlertCircle size={24} className="text-orange-600" />}
                />
                <IssueSummaryCard
                  type="Document Issues"
                  count={1}
                  color="yellow"
                  icon={<FileText size={24} className="text-yellow-600" />}
                />
              </div>

              <div className="border-2 border-border rounded-lg overflow-hidden">
                <div className="bg-muted border-b-2 border-border px-6 py-4">
                  <h3 className="font-bold text-foreground">Issues Requiring Correction (5)</h3>
                </div>
                <div className="divide-y-2 divide-gray-200">
                  <IssueListItem
                    severity="high"
                    field="Income Certificate"
                    issue="Document missing"
                    guidance="Upload income certificate issued within last 6 months"
                  />
                  <IssueListItem
                    severity="high"
                    field="Mobile Number"
                    issue="Required field is empty"
                    guidance="Enter your 10-digit mobile number for OTP verification"
                  />
                  <IssueListItem
                    severity="medium"
                    field="Date of Birth"
                    issue="Format invalid (entered as DD/MM/YY instead of DD/MM/YYYY)"
                    guidance="Enter your date of birth in DD/MM/YYYY format (e.g., 15/03/1998)"
                  />
                  <IssueListItem
                    severity="medium"
                    field="Aadhaar Number"
                    issue="Entered number doesn't match Aadhaar verification"
                    guidance="Re-enter your 12-digit Aadhaar number carefully"
                  />
                  <IssueListItem
                    severity="low"
                    field="10th Mark Sheet"
                    issue="Uploaded file is blurry and unreadable"
                    guidance="Upload a clear, legible scan or photo of your mark sheet"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between pt-6 border-t-2 border-border">
                <button className="px-6 py-3 bg-card border-2 border-border text-muted-foreground font-medium rounded-lg hover:bg-background">
                  Need Help?
                </button>
                <button className="px-10 py-4 bg-primary text-white font-bold rounded-lg hover:opacity-90 flex items-center gap-2">
                  Start Corrections
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
          <PageAnnotation items={[
            "Non-punitive orange header (not harsh red)",
            "Reassuring message: 'Don't worry—your correct information is saved'",
            "Clear deadline displayed prominently (30 April 2026)",
            "Issues grouped by severity/type with count badges",
            "Each issue shows field name, problem, and specific guidance",
            "Primary CTA is action-oriented: 'Start Corrections' (not negative)"
          ]} />
        </ModuleContent>
      </DocModule>

      {/* Correction Detail Page */}
      <DocModule>
        <ModuleHeader title="Page 2: Field-Level Correction" />
        <ModuleContent>
          <div className="border-2 border-border rounded-lg overflow-hidden bg-card">
            <div className="bg-background border-b-2 border-border p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-foreground">Correcting: Mobile Number</h2>
                <div className="text-sm text-muted-foreground">Issue 2 of 5</div>
              </div>
              <ProgressBar steps={5} current={2} />
            </div>
            <div className="p-8 space-y-6">
              <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
                <div className="flex items-start gap-3">
                  <AlertTriangle size={20} className="text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-foreground mb-2">Issue Found</div>
                    <div className="text-sm text-muted-foreground mb-3">
                      <strong>Problem:</strong> This required field was left blank in your original submission.
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <strong>Why we need this:</strong> We use your mobile number to send OTP verification, 
                      application status updates, and important notifications about your scholarship.
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
                <div className="flex items-start gap-3 mb-4">
                  <HelpCircle size={20} className="text-blue-600 flex-shrink-0" />
                  <div className="font-bold text-foreground">How to Fix This</div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Enter your 10-digit mobile number (e.g., 9876543210)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Make sure it's active and you have access to receive SMS</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>You'll receive an OTP to verify this number after submission</span>
                  </li>
                </ul>
              </div>

              <div>
                <label className="block text-sm font-bold text-foreground mb-2">
                  Mobile Number <span className="text-red-600">*</span>
                </label>
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <input
                      type="tel"
                      placeholder="Enter 10-digit mobile number"
                      className="w-full px-4 py-3 border-2 border-orange-300 bg-orange-50 rounded-lg focus:border-orange-600"
                    />
                    <div className="text-sm text-muted-foreground mt-2">
                      Format: 10 digits (no spaces or special characters)
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-background border-2 border-border rounded-lg p-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MessageCircle size={16} className="text-muted-foreground" />
                  <span><strong>Having trouble?</strong> Call our helpline at <span className="font-bold text-blue-600">1800-XXX-XXXX</span> for assistance</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-6 border-t-2 border-border">
                <button className="px-6 py-3 bg-card border-2 border-border text-muted-foreground font-medium rounded-lg hover:bg-background flex items-center gap-2">
                  <ArrowLeft size={18} />
                  Previous Issue
                </button>
                <button className="px-8 py-3 bg-primary text-white font-bold rounded-lg hover:opacity-90 flex items-center gap-2">
                  Next Issue
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
          <PageAnnotation items={[
            "Progress indicator shows current issue (2 of 5)",
            "Red info box explains the problem and WHY field is needed",
            "Blue guidance box with step-by-step fixing instructions",
            "Field highlighted with orange border (needs correction)",
            "Format help text below input (e.g., '10 digits, no spaces')",
            "Support contact visible if user is stuck",
            "Easy navigation between issues (Previous/Next)"
          ]} />
        </ModuleContent>
      </DocModule>

      {/* Rejected Document Page */}
      <DocModule>
        <ModuleHeader title="Page 3: Document Re-Upload (Rejected)" />
        <ModuleContent>
          <div className="border-2 border-border rounded-lg overflow-hidden bg-card">
            <div className="bg-background border-b-2 border-border p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-foreground">Correcting: Income Certificate</h2>
                <div className="text-sm text-muted-foreground">Issue 1 of 5</div>
              </div>
              <ProgressBar steps={5} current={1} />
            </div>
            <div className="p-8 space-y-6">
              <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
                <div className="flex items-start gap-3">
                  <AlertTriangle size={20} className="text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-foreground mb-2">Document Not Uploaded</div>
                    <div className="text-sm text-muted-foreground">
                      <strong>Problem:</strong> Income certificate is mandatory for scholarship applications 
                      but was not included in your original submission.
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-2 border-border rounded-lg p-6 bg-card">
                <h3 className="font-bold text-foreground mb-4">Document Requirements</h3>
                <div className="grid grid-cols-2 gap-6">
                  <RequirementItem
                    label="Document Type"
                    value="Income certificate issued by Tehsildar or competent authority"
                  />
                  <RequirementItem
                    label="Validity"
                    value="Issued within last 6 months (after Oct 2025)"
                  />
                  <RequirementItem
                    label="File Format"
                    value="PDF, JPG, or PNG only"
                  />
                  <RequirementItem
                    label="File Size"
                    value="Maximum 2 MB per file"
                  />
                  <RequirementItem
                    label="Quality"
                    value="Clear, legible scan (no blurry or dark images)"
                  />
                  <RequirementItem
                    label="Content"
                    value="Must show family income and authority signature/stamp"
                  />
                </div>
              </div>

              <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
                <div className="flex items-start gap-3 mb-4">
                  <Info size={20} className="text-blue-600 flex-shrink-0" />
                  <div>
                    <div className="font-bold text-foreground mb-2">How to Get Income Certificate</div>
                    <div className="text-sm text-muted-foreground mb-3">
                      If you don't have this document yet, you can apply for it online:
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
                        <span>Visit your state's e-District portal</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
                        <span>Apply for "Income Certificate" service</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
                        <span>Processing time: Usually 7-15 days</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border-2 border-orange-300 bg-orange-50 rounded-lg p-6">
                <label className="block text-sm font-bold text-foreground mb-4">
                  Upload Income Certificate <span className="text-red-600">*</span>
                </label>
                <div className="border-2 border-dashed border-orange-400 rounded-lg p-8 text-center bg-card hover:bg-orange-50 cursor-pointer transition-colors">
                  <Upload size={32} className="text-orange-600 mx-auto mb-3" />
                  <div className="text-sm text-foreground font-bold mb-2">Click to upload or drag and drop</div>
                  <div className="text-xs text-muted-foreground">PDF, JPG, PNG (max 2 MB)</div>
                </div>
                <div className="mt-4 text-sm text-muted-foreground">
                  <strong>Tip:</strong> Make sure the document is clear, complete, and shows the official seal/signature
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded-r-lg">
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <AlertCircle size={16} className="text-yellow-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Don't have the document yet?</strong> You can save your progress and return later. 
                    Your deadline is 30 April 2026.
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-6 border-t-2 border-border">
                <button className="px-6 py-3 bg-card border-2 border-border text-muted-foreground font-medium rounded-lg hover:bg-background">
                  Save and Continue Later
                </button>
                <button className="px-8 py-3 bg-primary text-white font-bold rounded-lg hover:opacity-90 flex items-center gap-2">
                  Next Issue
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
          <PageAnnotation items={[
            "Clear document requirements in grid format (type, validity, format, size, quality)",
            "Helpful guidance on HOW to obtain the document if user doesn't have it",
            "Large upload area with drag-and-drop support",
            "Processing time mentioned (7-15 days) for realistic expectations",
            "Option to save progress if document not ready (reduces pressure)",
            "Deadline reminder (30 April) without being punitive"
          ]} />
        </ModuleContent>
      </DocModule>

      {/* Review Corrections Page */}
      <DocModule>
        <ModuleHeader title="Page 4: Review Corrections" />
        <ModuleContent>
          <div className="border-2 border-border rounded-lg overflow-hidden bg-card">
            <div className="bg-background border-b-2 border-border p-6">
              <h2 className="text-xl font-bold text-foreground mb-2">Review Your Corrections</h2>
              <p className="text-sm text-muted-foreground">
                Please verify all corrections before resubmitting your application.
              </p>
            </div>
            <div className="p-8 space-y-6">
              <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-green-600 flex-shrink-0" />
                  <div>
                    <div className="font-bold text-foreground mb-2">All Issues Addressed</div>
                    <div className="text-sm text-muted-foreground">
                      You've corrected all 5 issues. Review the changes below before resubmitting.
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-2 border-border rounded-lg overflow-hidden">
                <div className="bg-muted border-b-2 border-border px-6 py-4">
                  <h3 className="font-bold text-foreground">Corrected Fields (5)</h3>
                </div>
                <div className="divide-y-2 divide-gray-200">
                  <CorrectionReviewItem
                    field="Income Certificate"
                    before="Not uploaded"
                    after="income_certificate_2026.pdf (uploaded)"
                    type="document"
                  />
                  <CorrectionReviewItem
                    field="Mobile Number"
                    before="Empty"
                    after="+91 98765-43210"
                    type="data"
                  />
                  <CorrectionReviewItem
                    field="Date of Birth"
                    before="15/03/98 (invalid format)"
                    after="15/03/1998"
                    type="data"
                  />
                  <CorrectionReviewItem
                    field="Aadhaar Number"
                    before="1234 5678 9012 (incorrect)"
                    after="2345 6789 0123 (verified)"
                    type="data"
                  />
                  <CorrectionReviewItem
                    field="10th Mark Sheet"
                    before="blurry_scan.jpg (rejected)"
                    after="10th_marksheet_clear.pdf (uploaded)"
                    type="document"
                  />
                </div>
              </div>

              <div className="border-2 border-border rounded-lg p-6 bg-card">
                <div className="font-bold text-foreground mb-4">Fields That Were Already Correct</div>
                <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-green-600 flex-shrink-0" />
                    <span>Full Name: Priya Sharma</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-green-600 flex-shrink-0" />
                    <span>Gender: Female</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-green-600 flex-shrink-0" />
                    <span>Category: SC</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-green-600 flex-shrink-0" />
                    <span>State: Maharashtra</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-green-600 flex-shrink-0" />
                    <span>Email: priya.sharma@example.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-green-600 flex-shrink-0" />
                    <span>Address: 123, MG Road, Mumbai</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <input type="checkbox" className="w-5 h-5 mt-0.5 border-2 border-gray-400 rounded" />
                  <div className="text-sm text-muted-foreground">
                    <p className="font-bold mb-2">Declaration</p>
                    <p className="leading-relaxed">
                      I confirm that all corrections are accurate and the uploaded documents are genuine. 
                      I understand that providing false information may result in application rejection or legal action.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-6 border-t-2 border-border">
                <button className="px-6 py-3 bg-card border-2 border-border text-muted-foreground font-medium rounded-lg hover:bg-background">
                  Back to Corrections
                </button>
                <button className="px-10 py-4 bg-green-600 text-white font-bold rounded-lg hover:bg-green-600 flex items-center gap-2">
                  <CheckCircle size={20} />
                  Resubmit Application
                </button>
              </div>
            </div>
          </div>
          <PageAnnotation items={[
            "Positive green banner confirms all issues addressed",
            "Before/after comparison for each corrected field",
            "Show fields that were already correct (reassurance, transparency)",
            "Declaration checkbox required before resubmission",
            "Primary CTA is green (positive action: Resubmit)",
            "Option to go back and review corrections if needed"
          ]} />
        </ModuleContent>
      </DocModule>

      {/* Resubmission Success */}
      <DocModule>
        <ModuleHeader title="Page 5: Resubmission Success" />
        <ModuleContent>
          <div className="border-2 border-border rounded-lg overflow-hidden bg-card">
            <div className="bg-green-600 text-white p-12 text-center">
              <div className="w-20 h-20 bg-card rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={48} className="text-green-600" />
              </div>
              <h1 className="text-3xl font-bold mb-4">Application Resubmitted Successfully!</h1>
              <p className="text-lg text-green-100">
                Your corrected application has been received and is now under review.
              </p>
            </div>
            <div className="p-8 space-y-6">
              <div className="bg-background border-2 border-border rounded-lg p-6 text-center">
                <div className="text-sm text-muted-foreground mb-2">New Application Reference Number</div>
                <div className="text-3xl font-bold text-foreground font-mono mb-4">SCH/2026/12345-R1</div>
                <div className="text-sm text-muted-foreground">Original Application: SCH/2026/12345</div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <NextStepCard
                  icon={<Clock size={24} className="text-orange-600" />}
                  title="Processing Time"
                  description="Your resubmitted application will be reviewed within 7-10 working days."
                />
                <NextStepCard
                  icon={<FileText size={24} className="text-blue-600" />}
                  title="What Happens Next"
                  description="We'll verify your corrections and notify you of the decision via SMS and email."
                />
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                <div className="font-bold text-foreground mb-3">Corrections Submitted:</div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Income certificate uploaded</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Mobile number added: +91 98765-43210</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Date of birth corrected to proper format</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Aadhaar number verified and updated</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Clear 10th mark sheet uploaded</span>
                  </li>
                </ul>
              </div>

              <div className="flex items-center justify-center gap-4 pt-6">
                <button className="px-8 py-3 bg-primary text-white font-bold rounded-lg hover:opacity-90">
                  Track Application Status
                </button>
                <button className="px-8 py-3 bg-card border-2 border-border text-muted-foreground font-bold rounded-lg hover:bg-background">
                  Download Receipt
                </button>
              </div>

              <div className="bg-background border-2 border-border rounded-lg p-4 text-center">
                <div className="text-sm text-muted-foreground">
                  <strong>Questions about your resubmission?</strong><br/>
                  Contact support at <span className="font-bold text-blue-600">1800-XXX-XXXX</span> or 
                  email <span className="font-bold text-blue-600">scholarship@education.gov.in</span>
                </div>
              </div>
            </div>
          </div>
          <PageAnnotation items={[
            "Positive green success state with visual confirmation",
            "New reference number clearly displayed (with -R1 revision indicator)",
            "Processing timeline set (7-10 days)",
            "Summary of what was corrected (transparency)",
            "Direct link to status tracking",
            "Support contact visible for questions"
          ]} />
        </ModuleContent>
      </DocModule>

      {/* Updated Status Page */}
      <DocModule>
        <ModuleHeader title="Page 6: Updated Application Status" />
        <ModuleContent>
          <div className="border-2 border-border rounded-lg overflow-hidden bg-card">
            <div className="bg-background border-b-2 border-border p-6">
              <h2 className="text-xl font-bold text-foreground mb-2">Application Status</h2>
              <div className="text-sm text-muted-foreground">Reference: SCH/2026/12345-R1</div>
            </div>
            <div className="p-8 space-y-6">
              <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Current Status</div>
                    <div className="text-2xl font-bold text-foreground mb-4">Under Review (After Correction)</div>
                    <div className="text-sm text-muted-foreground">
                      Your resubmitted application is being reviewed. Expected decision by <strong>20 April 2026</strong>.
                    </div>
                  </div>
                  <div className="px-4 py-2 bg-blue-600 text-white font-bold text-sm rounded">
                    IN PROGRESS
                  </div>
                </div>
              </div>

              <div className="border-2 border-border rounded-lg overflow-hidden">
                <div className="bg-muted border-b-2 border-border px-6 py-4">
                  <h3 className="font-bold text-foreground">Application Timeline</h3>
                </div>
                <div className="p-6 space-y-4">
                  <TimelineItem
                    date="8 April 2026, 2:30 PM"
                    status="Resubmitted after correction"
                    description="Application resubmitted with all corrections. Now under review."
                    active={true}
                  />
                  <TimelineItem
                    date="5 April 2026, 4:15 PM"
                    status="Correction request sent"
                    description="5 issues identified. Correction deadline: 30 April 2026"
                    active={false}
                  />
                  <TimelineItem
                    date="2 April 2026, 10:00 AM"
                    status="Initial submission received"
                    description="Application submitted for review"
                    active={false}
                  />
                </div>
              </div>

              <div className="border-2 border-green-300 bg-green-50 rounded-lg p-6">
                <div className="font-bold text-foreground mb-3">Corrections Made</div>
                <div className="grid grid-cols-2 gap-3 text-sm text-muted-foreground">
                  <div className="flex items-start gap-2">
                    <CheckCircle size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Income certificate uploaded</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Mobile number corrected</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Date of birth format fixed</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Aadhaar number verified</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
                    <span>10th mark sheet re-uploaded</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-4 pt-6">
                <button className="px-8 py-3 bg-primary text-white font-bold rounded-lg hover:opacity-90">
                  Download Application Copy
                </button>
                <button className="px-8 py-3 bg-card border-2 border-border text-muted-foreground font-bold rounded-lg hover:bg-background">
                  Contact Support
                </button>
              </div>
            </div>
          </div>
          <PageAnnotation items={[
            "Clear current status with expected decision date",
            "Full timeline showing original submission → correction → resubmission",
            "Visual history of correction journey (transparency)",
            "List of corrections made (for user's reference)",
            "Options to download application copy or contact support"
          ]} />
        </ModuleContent>
      </DocModule>
    </section>
  );
}

// ==================== ERROR PATTERNS ====================

function ErrorPatterns() {
  return (
    <section id="error-patterns" className="space-y-6">
      <SectionHeader title="Error and Rejection Pattern Structure" />

      <DocModule>
        <ModuleHeader title="Issue Classification Framework" />
        <ModuleContent>
          <div className="space-y-6">
            <IssueTypeDefinition
              type="Missing Information"
              severity="High"
              color="red"
              icon={<AlertTriangle size={20} className="text-red-600" />}
              description="Required fields left blank or mandatory documents not uploaded"
              examples={[
                "Mobile number field is empty",
                "Income certificate not uploaded",
                "Parent's name not provided",
                "Mandatory declaration not checked"
              ]}
              userAction="Provide the missing information or upload required document"
              tone="Direct but supportive: 'This field is required to process your application'"
            />

            <IssueTypeDefinition
              type="Invalid Data"
              severity="Medium"
              color="orange"
              icon={<AlertCircle size={20} className="text-orange-600" />}
              description="Information provided doesn't match expected format or fails validation"
              examples={[
                "Date entered as DD/MM/YY instead of DD/MM/YYYY",
                "Aadhaar number doesn't match verification",
                "Email address format invalid",
                "PIN code doesn't match selected state"
              ]}
              userAction="Correct the data with proper format and ensure accuracy"
              tone="Instructive: 'Enter in this format: DD/MM/YYYY (e.g., 15/03/1998)'"
            />

            <IssueTypeDefinition
              type="Document Quality Issues"
              severity="Low-Medium"
              color="yellow"
              icon={<FileText size={20} className="text-yellow-600" />}
              description="Document uploaded but not readable, expired, or wrong type"
              examples={[
                "Uploaded scan is blurry or dark",
                "Document is expired (older than 6 months)",
                "Wrong document uploaded (uploaded PAN instead of Aadhaar)",
                "File format not supported (uploaded .docx instead of PDF/JPG)"
              ]}
              userAction="Re-upload with clear, valid, and correct document"
              tone="Helpful: 'Please upload a clear scan showing all details. Tip: Use good lighting'"
            />

            <IssueTypeDefinition
              type="Eligibility Failure"
              severity="Critical"
              color="red"
              icon={<XCircle size={20} className="text-red-600" />}
              description="Applicant doesn't meet basic eligibility criteria"
              examples={[
                "Age doesn't meet minimum requirement (17 years old, need 18+)",
                "Income exceeds threshold (₹8L/year, limit is ₹6L/year)",
                "Not enrolled in eligible institution",
                "Previous scholarship still active (can't have multiple)"
              ]}
              userAction="Application may be rejected. Contact support if you believe this is incorrect."
              tone="Respectful but clear: 'Your income exceeds the eligibility threshold. However, you may qualify for merit-based schemes. [View alternatives]'"
            />
          </div>
        </ModuleContent>
      </DocModule>

      <DocModule>
        <ModuleHeader title="Issue Grouping and Prioritization" />
        <ModuleContent>
          <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-6">
            <div className="flex items-start gap-3 mb-4">
              <Layers size={24} className="text-purple-600 flex-shrink-0" />
              <div>
                <div className="font-bold text-foreground mb-2">Smart Grouping Strategy</div>
                <div className="text-sm text-muted-foreground">
                  Group issues by type or section (not just a flat list) to reduce cognitive load and help users fix related issues together.
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <GroupingStrategy
                method="By Issue Type"
                example="Missing Information (3) → Invalid Data (2) → Document Issues (1)"
                benefit="User sees severity at a glance"
              />
              <GroupingStrategy
                method="By Application Section"
                example="Personal Details (2 issues) → Documents (2 issues) → Contact Info (1 issue)"
                benefit="Logical flow matching original form structure"
              />
            </div>
          </div>
        </ModuleContent>
      </DocModule>

      <DocModule>
        <ModuleHeader title="Field Highlighting Best Practices" />
        <ModuleContent>
          <div className="space-y-4">
            <HighlightingGuidance
              scenario="Field with error"
              visual="Orange border + orange background (bg-orange-50, border-orange-300)"
              code='className="border-2 border-orange-300 bg-orange-50"'
            />
            <HighlightingGuidance
              scenario="Error message below field"
              visual="Red text with alert icon, specific explanation"
              code='<div className="text-sm text-red-700 flex items-center gap-2"><AlertCircle size={14} /> Enter 10-digit mobile number</div>'
            />
            <HighlightingGuidance
              scenario="Correct field (unchanged)"
              visual="Standard gray border, no background color"
              code='className="border-2 border-border bg-card"'
            />
            <HighlightingGuidance
              scenario="Successfully corrected field"
              visual="Green checkmark icon, subtle green border"
              code='<CheckCircle className="text-green-600" /> className="border-2 border-green-300"'
            />
          </div>
        </ModuleContent>
      </DocModule>
    </section>
  );
}

// ==================== COMPONENTS ====================

function ComponentsUsed() {
  return (
    <section id="components" className="space-y-6">
      <SectionHeader title="UX4G Components Used" />

      <DocModule>
        <ModuleHeader title="Required Components" />
        <ModuleContent>
          <div className="grid grid-cols-3 gap-4">
            <ComponentCard name="Alert Banner" variants="Error, Warning, Info, Success" usage="Issue notifications, guidance" />
            <ComponentCard name="Card" variants="Elevated, Outlined, Highlighted" usage="Issue grouping, summaries" />
            <ComponentCard name="Button" variants="Primary, Secondary, Tertiary" usage="Navigation, actions" />
            <ComponentCard name="Form Input" variants="Text, error state, success state" usage="Field correction" />
            <ComponentCard name="File Upload" variants="Single, with preview, error state" usage="Document re-upload" />
            <ComponentCard name="Progress Bar" variants="Linear, stepped" usage="Correction progress" />
            <ComponentCard name="Badge" variants="Severity levels (high, medium, low)" usage="Issue severity indicators" />
            <ComponentCard name="Icon" variants="AlertTriangle, AlertCircle, XCircle, CheckCircle" usage="Issue type indicators" />
            <ComponentCard name="Timeline" variants="Vertical" usage="Application history tracking" />
          </div>
        </ModuleContent>
      </DocModule>
    </section>
  );
}

// ==================== CONTENT GUIDANCE ====================

function ContentGuidance() {
  return (
    <section id="content" className="space-y-6">
      <SectionHeader title="Content and Tone Guidance" />

      <DocModule>
        <ModuleHeader title="Writing for Correction Scenarios" />
        <ModuleContent>
          <div className="space-y-6">
            <ToneBlock
              context="Notifying user of issues"
              tone="Supportive, Non-Punitive"
              good="Your application needs correction. We found a few issues that need your attention. Don't worry—your correct information is saved."
              bad="Your application has been rejected due to errors. You must fix all issues immediately."
            />
            <ToneBlock
              context="Explaining what's wrong"
              tone="Specific and Clear"
              good="Mobile number is required but was left blank. We need this to send you OTP verification and status updates."
              bad="Invalid input in field."
            />
            <ToneBlock
              context="Guiding correction"
              tone="Instructive with Examples"
              good="Enter your date of birth in DD/MM/YYYY format. Example: 15/03/1998"
              bad="Fix the date format error."
            />
            <ToneBlock
              context="Document rejection"
              tone="Helpful, Not Blaming"
              good="The uploaded image is too dark to read clearly. Please upload a clearer scan in good lighting. Tip: Take photo in natural light."
              bad="Document rejected. Unreadable file."
            />
            <ToneBlock
              context="User stuck or missing document"
              tone="Empathetic with Alternatives"
              good="Don't have this document yet? You can apply for it at e-District portal (takes 7-15 days). Save your progress and return later. Deadline: 30 April."
              bad="Document required. Cannot proceed without it."
            />
          </div>
        </ModuleContent>
      </DocModule>

      <DocModule>
        <ModuleHeader title="Error Message Formulas" />
        <ModuleContent>
          <div className="space-y-4">
            <MessageFormula
              type="Missing Information"
              formula="[Field Name] is required [+ Why we need it]"
              example="Mobile number is required to send you OTP verification and application status updates"
            />
            <MessageFormula
              type="Invalid Format"
              formula="[What's wrong] + [Correct format] + [Example]"
              example="Date format incorrect. Enter as DD/MM/YYYY. Example: 15/03/1998"
            />
            <MessageFormula
              type="Document Quality"
              formula="[Issue with document] + [How to fix] + [Tip]"
              example="Uploaded scan is blurry. Please upload a clear, legible image. Tip: Use good lighting and hold camera steady."
            />
            <MessageFormula
              type="Validation Failure"
              formula="[What doesn't match] + [Action needed]"
              example="Aadhaar number doesn't match our verification records. Please re-enter carefully and ensure it matches your Aadhaar card."
            />
          </div>
        </ModuleContent>
      </DocModule>
    </section>
  );
}

// ==================== ACCESSIBILITY ====================

function AccessibilityGuidance() {
  return (
    <section id="accessibility" className="space-y-6">
      <SectionHeader title="Accessibility Guidance" />

      <DocModule>
        <ModuleHeader title="WCAG 2.1 AA Requirements" />
        <ModuleContent>
          <div className="grid grid-cols-2 gap-6">
            <AccessibilityBlock
              area="Error Identification"
              requirements={[
                "Use role='alert' for error summaries (announced immediately)",
                "Associate error messages with fields via aria-describedby",
                "Don't rely on color alone (use icon + text + border)",
                "Error messages must have 4.5:1 contrast ratio",
                "Group related errors with fieldset/legend"
              ]}
            />
            <AccessibilityBlock
              area="Error Recovery"
              requirements={[
                "Provide specific correction guidance (not just 'invalid')",
                "Show examples of correct format inline",
                "Allow easy navigation between error fields",
                "Preserve user input (don't clear on error)",
                "Confirm successful correction with aria-live update"
              ]}
            />
            <AccessibilityBlock
              area="Keyboard Navigation"
              requirements={[
                "Focus moves to first error field on page load",
                "Tab order follows error list logically",
                "Skip link to 'Jump to corrections' provided",
                "All interactive elements keyboard accessible",
                "Visible focus indicators (3px minimum outline)"
              ]}
            />
            <AccessibilityBlock
              area="Screen Reader Support"
              requirements={[
                "Announce error count: '5 issues require correction'",
                "Read error severity: 'High priority: Mobile number missing'",
                "Announce correction success: 'Field corrected successfully'",
                "Provide context for each error (why field is needed)",
                "Support landmarks (role='main', role='navigation', etc.)"
              ]}
            />
          </div>
        </ModuleContent>
      </DocModule>

      <DocModule>
        <ModuleHeader title="Multilingual Considerations" />
        <ModuleContent>
          <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-6">
            <div className="flex items-start gap-3 mb-4">
              <Globe size={24} className="text-purple-600 flex-shrink-0" />
              <div>
                <div className="font-bold text-foreground mb-2">Language Support for Error Messages</div>
                <div className="text-sm text-muted-foreground">
                  All error messages, correction guidance, and help text must be available in Hindi and English minimum. 
                  State deployments should support regional languages.
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <MultilingualItem
                aspect="Error Messages"
                requirement="Fully translated with culturally appropriate tone (respectful, supportive)"
              />
              <MultilingualItem
                aspect="Field Labels and Help"
                requirement="Context explanations in user's language (why field is needed)"
              />
              <MultilingualItem
                aspect="Document Requirements"
                requirement="Specifications translated (file format, size, validity period)"
              />
              <MultilingualItem
                aspect="Examples"
                requirement="Format examples localized (date formats, name conventions)"
              />
            </div>
          </div>
        </ModuleContent>
      </DocModule>
    </section>
  );
}

// ==================== IMPLEMENTATION ====================

function ImplementationNotes() {
  return (
    <section id="implementation" className="space-y-6">
      <SectionHeader title="Implementation Notes" />

      <DocModule>
        <ModuleHeader title="Frontend Requirements" />
        <ModuleContent>
          <div className="space-y-4">
            <ImplementationItem
              category="Error State Management"
              requirement="Store error list from backend. Highlight fields dynamically. Track correction status per field."
              priority="critical"
            />
            <ImplementationItem
              category="Field Preservation"
              requirement="Pre-fill all correct fields as read-only. Only make error fields editable. Don't lose correct data."
              priority="critical"
            />
            <ImplementationItem
              category="Validation"
              requirement="Inline validation on blur for corrected fields. Show immediate success/error feedback."
              priority="required"
            />
            <ImplementationItem
              category="Progress Tracking"
              requirement="Show '3 of 5 issues corrected' indicator. Update as user fixes each issue."
              priority="recommended"
            />
          </div>
        </ModuleContent>
      </DocModule>

      <DocModule>
        <ModuleHeader title="Backend Requirements" />
        <ModuleContent>
          <div className="space-y-4">
            <ImplementationItem
              category="Error Payload Structure"
              requirement='Return structured errors: {field, errorType, severity, message, guidance, example}'
              priority="critical"
            />
            <ImplementationItem
              category="Partial Save"
              requirement="Allow saving partial corrections. User can return later without losing progress."
              priority="required"
            />
            <ImplementationItem
              category="Correction History"
              requirement="Log all correction attempts: {field, oldValue, newValue, timestamp, userId}"
              priority="required"
            />
            <ImplementationItem
              category="Notification System"
              requirement="Send correction request via SMS/email with deadline and direct link to correction portal"
              priority="critical"
            />
          </div>
        </ModuleContent>
      </DocModule>

      <DocModule>
        <ModuleHeader title="Analytics Events" />
        <ModuleContent>
          <div className="space-y-3">
            <AnalyticsEvent event="correction_notification_sent" description="User notified of issues (track channel: SMS/email/in-app)" />
            <AnalyticsEvent event="correction_journey_started" description="User enters correction flow (track entry point)" />
            <AnalyticsEvent event="issue_summary_viewed" description="User views issue list (track issue count and types)" />
            <AnalyticsEvent event="field_correction_attempted" description="User edits a flagged field (track field name)" />
            <AnalyticsEvent event="document_reuploaded" description="User uploads replacement document (track document type)" />
            <AnalyticsEvent event="correction_saved_partial" description="User saves progress without completing all corrections" />
            <AnalyticsEvent event="all_corrections_completed" description="User addresses all issues" />
            <AnalyticsEvent event="application_resubmitted" description="Corrected application resubmitted" />
            <AnalyticsEvent event="correction_abandoned" description="User starts but doesn't complete corrections (track at which issue)" />
            <AnalyticsEvent event="support_contacted" description="User clicks support/escalation link (track reason if available)" />
            <AnalyticsEvent event="correction_deadline_missed" description="User didn't resubmit before deadline" />
          </div>
        </ModuleContent>
      </DocModule>
    </section>
  );
}

// ==================== GOVERNANCE ====================

function GovernanceConformance() {
  return (
    <section id="governance" className="space-y-6">
      <SectionHeader title="Governance and Conformance" />

      <DocModule>
        <ModuleHeader title="UX4G Conformance Checklist" />
        <ModuleContent>
          <div className="space-y-3">
            <ConformanceItem checked label="Uses supportive, non-punitive language (never blames user)" />
            <ConformanceItem checked label="Groups issues by type or severity (not flat list)" />
            <ConformanceItem checked label="Provides specific field-level explanations with examples" />
            <ConformanceItem checked label="Preserves all correct data (user only edits flagged fields)" />
            <ConformanceItem checked label="Shows before/after comparison for corrections" />
            <ConformanceItem checked label="Offers support/escalation path if user is stuck" />
            <ConformanceItem checked label="Allows partial save (user can return later)" />
            <ConformanceItem checked label="Clear deadline displayed throughout journey" />
            <ConformanceItem checked label="Sends notification with direct correction link" />
            <ConformanceItem checked label="Shows full correction history in status tracking" />
            <ConformanceItem checked label="Meets WCAG 2.1 AA for error identification and recovery" />
          </div>
        </ModuleContent>
      </DocModule>

      <DocModule>
        <ModuleHeader title="Common Risks and Mistakes" />
        <ModuleContent>
          <div className="space-y-4">
            <RiskBlock
              risk="Using punitive or blaming language for errors (user feels attacked)"
              impact="Critical"
              solution="Always use supportive tone: 'Your application needs correction' vs 'Your application is rejected due to your errors'"
            />
            <RiskBlock
              risk="Not preserving correct data (user must re-enter everything)"
              impact="Critical"
              solution="Pre-fill all correct fields as read-only. Only show error fields as editable. Save user time and reduce frustration."
            />
            <RiskBlock
              risk="Vague error messages ('Invalid input' with no specifics)"
              impact="High"
              solution="Always provide: What's wrong + Why it's wrong + How to fix + Example. 'Date format invalid. Enter DD/MM/YYYY. Example: 15/03/1998'"
            />
            <RiskBlock
              risk="No path forward if user doesn't have required document"
              impact="High"
              solution="Provide alternatives: How to obtain document, save progress option, deadline reminder, support contact"
            />
            <RiskBlock
              risk="Losing partial corrections if user navigates away"
              impact="Medium"
              solution="Auto-save corrections to session/database. Allow 'Save and Continue Later' option."
            />
            <RiskBlock
              risk="Not showing correction history in status tracking"
              impact="Medium"
              solution="Display timeline: Original submission → Correction request → Resubmission. User knows journey status."
            />
            <RiskBlock
              risk="Deadline buried in fine print (user misses it)"
              impact="High"
              solution="Show deadline prominently on every correction page. Send reminder notifications 3-5 days before deadline."
            />
          </div>
        </ModuleContent>
      </DocModule>

      <DocModule>
        <ModuleHeader title="Lifecycle Status" />
        <ModuleContent>
          <div className="grid grid-cols-3 gap-6">
            <MaturityBlock
              status="Stable"
              version="1.0.0"
              description="Pattern tested across 28 services with 340K correction journeys"
            />
            <MaturityBlock
              status="Conformance"
              version="Mandatory"
              description="All services with application review must implement this pattern"
            />
            <MaturityBlock
              status="Impact"
              version="45% reduction"
              description="45% reduction in abandoned corrections when this pattern is followed"
            />
          </div>
        </ModuleContent>
      </DocModule>
    </section>
  );
}

// ==================== SIDEBAR ====================

function MetadataPanel() {
  return (
    <div className="border-2 border-border rounded-lg overflow-hidden bg-card">
      <div className="bg-muted border-b-2 border-border px-4 py-3">
        <h3 className="font-bold text-foreground text-sm">Pattern Metadata</h3>
      </div>
      <div className="p-4 space-y-3 text-sm">
        <MetadataRow label="Pattern ID" value="UX4G-PAT-004" />
        <MetadataRow label="Category" value="Error Recovery" />
        <MetadataRow label="Complexity" value="Medium" />
        <MetadataRow label="Implementation" value="2-3 weeks" />
        <MetadataRow label="Updated" value="April 2026" />
        <MetadataRow label="Status" value="Stable (v1.0.0)" />
      </div>
    </div>
  );
}

function QuickRefPanel() {
  return (
    <div className="border-2 border-blue-200 rounded-lg overflow-hidden bg-blue-50">
      <div className="bg-blue-100 border-b-2 border-blue-200 px-4 py-3">
        <h3 className="font-bold text-foreground text-sm">Quick Reference</h3>
      </div>
      <div className="p-4 space-y-3 text-sm">
        <QuickRefRow label="Avg. Duration" value="10-15 minutes" />
        <QuickRefRow label="Issue Types" value="4 categories" />
        <QuickRefRow label="Components" value="9 core components" />
        <QuickRefRow label="WCAG Level" value="AA" />
        <QuickRefRow label="Languages" value="Hindi + English min" />
        <QuickRefRow label="Abandonment" value="45% reduction" />
      </div>
    </div>
  );
}

function DesignPrinciples() {
  return (
    <div className="border-2 border-green-200 rounded-lg overflow-hidden bg-green-50">
      <div className="bg-green-100 border-b-2 border-green-200 px-4 py-3">
        <h3 className="font-bold text-foreground text-sm">Core Principles</h3>
      </div>
      <div className="p-4 space-y-3 text-sm text-muted-foreground">
        <PrincipleItem icon={<ThumbsUp size={14} />} text="Respect: Non-punitive, supportive language" />
        <PrincipleItem icon={<Target size={14} />} text="Clarity: Specific, actionable guidance" />
        <PrincipleItem icon={<Shield size={14} />} text="Preservation: Keep correct data, fix only errors" />
        <PrincipleItem icon={<HelpCircle size={14} />} text="Support: Always provide help path" />
      </div>
    </div>
  );
}

function RiskIndicators() {
  return (
    <div className="border-2 border-red-200 rounded-lg overflow-hidden bg-red-50">
      <div className="bg-red-100 border-b-2 border-red-200 px-4 py-3 flex items-center gap-2">
        <AlertTriangle size={16} className="text-red-700" />
        <h3 className="font-bold text-foreground text-sm">Risk Indicators</h3>
      </div>
      <div className="p-4 space-y-3 text-sm text-muted-foreground">
        <RiskItem severity="high" risk="Punitive language blaming users" />
        <RiskItem severity="high" risk="Not preserving correct data" />
        <RiskItem severity="high" risk="Vague error messages" />
        <RiskItem severity="medium" risk="No document help/alternatives" />
        <RiskItem severity="medium" risk="Deadline not prominent" />
      </div>
    </div>
  );
}

function RelatedResources() {
  return (
    <div className="border-2 border-border rounded-lg overflow-hidden bg-card">
      <div className="bg-muted border-b-2 border-border px-4 py-3">
        <h3 className="font-bold text-foreground text-sm">Related Patterns</h3>
      </div>
      <div className="p-4 space-y-2">
        <RelatedLink title="Application Submission" />
        <RelatedLink title="Status Tracking" />
        <RelatedLink title="Document Upload" />
        <RelatedLink title="Form Validation" />
      </div>
    </div>
  );
}

// ==================== REUSABLE COMPONENTS ====================

function SectionHeader({ title }: any) {
  return (
    <div className="border-l-4 border-primary pl-4">
      <h2 className="text-2xl font-bold text-foreground">{title}</h2>
    </div>
  );
}

function DocModule({ children }: any) {
  return (
    <div className="border-2 border-border rounded-lg overflow-hidden bg-card">
      {children}
    </div>
  );
}

function ModuleHeader({ title }: any) {
  return (
    <div className="bg-muted border-b-2 border-border px-6 py-4">
      <h3 className="font-bold text-foreground">{title}</h3>
    </div>
  );
}

function ModuleContent({ children }: any) {
  return <div className="p-6">{children}</div>;
}

function ProblemSolutionBlock({ icon, problem, solution }: any) {
  return (
    <div className="flex items-start gap-3 p-4 bg-background border-2 border-border rounded-lg">
      <div className="flex-shrink-0 mt-0.5">{icon}</div>
      <div>
        <div className="text-sm font-bold text-foreground mb-1">Problem: {problem}</div>
        <div className="text-sm text-muted-foreground">Solution: {solution}</div>
      </div>
    </div>
  );
}

function UserGroup({ icon, name, description, percentage }: any) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-10 h-10 bg-muted border-2 border-border rounded flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div className="flex-1">
        <div className="font-bold text-sm text-foreground mb-1">{name}</div>
        <div className="text-xs text-muted-foreground mb-2">{description}</div>
        <div className="text-xs font-bold text-foreground">{percentage} of users</div>
      </div>
    </div>
  );
}

function UseCaseCard({ title, examples }: any) {
  return (
    <div className="border-2 border-border rounded-lg p-4 bg-background">
      <div className="font-bold text-sm text-foreground mb-3">{title}</div>
      <ul className="space-y-2">
        {examples.map((example: string, idx: number) => (
          <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
            <div className="w-1.5 h-1.5 bg-gray-600 rounded-full mt-1.5 flex-shrink-0"></div>
            <span>{example}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function EntryPointCard({ method, description, example }: any) {
  return (
    <div className="border-2 border-blue-300 bg-blue-50 rounded-lg p-4">
      <div className="font-bold text-sm text-foreground mb-2">{method}</div>
      <div className="text-sm text-muted-foreground mb-3">{description}</div>
      <div className="text-xs text-muted-foreground bg-card border border-blue-200 rounded p-2 italic">
        {example}
      </div>
    </div>
  );
}

function FlowStep({ number, label, status }: any) {
  const statusConfig: any = {
    entry: { bg: 'bg-muted', border: 'border-gray-400', text: 'text-muted-foreground' },
    active: { bg: 'bg-blue-50', border: 'border-blue-400', text: 'text-blue-700' },
    optional: { bg: 'bg-purple-50', border: 'border-purple-400', text: 'text-purple-700' },
    success: { bg: 'bg-green-50', border: 'border-green-400', text: 'text-green-700' },
    info: { bg: 'bg-background', border: 'border-border', text: 'text-muted-foreground' }
  };

  return (
    <div className={`border-2 ${statusConfig[status].border} rounded-lg p-3 ${statusConfig[status].bg}`}>
      <div className={`text-xs font-bold ${statusConfig[status].text} mb-1`}>{number}</div>
      <div className="text-xs font-medium text-foreground">{label}</div>
    </div>
  );
}

function PageSequenceRow({ number, title, description, required }: any) {
  return (
    <div className="flex items-start gap-4 p-4 bg-background border-l-4 border-primary rounded">
      <div className="w-8 h-8 bg-primary text-white rounded font-bold text-sm flex items-center justify-center flex-shrink-0">
        {number}
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <div className="font-bold text-sm text-foreground">{title}</div>
          {required ? (
            <span className="px-2 py-0.5 bg-red-100 text-red-700 text-xs font-bold rounded">REQUIRED</span>
          ) : (
            <span className="px-2 py-0.5 bg-gray-200 text-muted-foreground text-xs font-bold rounded">OPTIONAL</span>
          )}
        </div>
        <div className="text-xs text-muted-foreground">{description}</div>
      </div>
    </div>
  );
}

function IssueSummaryCard({ type, count, color, icon }: any) {
  const colorConfig: any = {
    red: { bg: 'bg-red-50', border: 'border-red-300', badge: 'bg-red-600' },
    orange: { bg: 'bg-orange-50', border: 'border-orange-300', badge: 'bg-orange-600' },
    yellow: { bg: 'bg-yellow-50', border: 'border-yellow-300', badge: 'bg-yellow-600' }
  };

  return (
    <div className={`border-2 ${colorConfig[color].border} ${colorConfig[color].bg} rounded-lg p-4`}>
      <div className="flex items-start justify-between mb-2">
        <div className="flex-shrink-0">{icon}</div>
        <div className={`w-8 h-8 ${colorConfig[color].badge} text-white rounded-full flex items-center justify-center font-bold text-sm`}>
          {count}
        </div>
      </div>
      <div className="font-bold text-sm text-foreground">{type}</div>
    </div>
  );
}

function IssueListItem({ severity, field, issue, guidance }: any) {
  const severityConfig: any = {
    high: { icon: <AlertTriangle size={16} className="text-red-600" />, color: 'text-red-700' },
    medium: { icon: <AlertCircle size={16} className="text-orange-600" />, color: 'text-orange-700' },
    low: { icon: <Info size={16} className="text-yellow-600" />, color: 'text-yellow-700' }
  };

  return (
    <div className="p-6 hover:bg-background">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 mt-0.5">{severityConfig[severity].icon}</div>
        <div className="flex-1">
          <div className="font-bold text-sm text-foreground mb-1">{field}</div>
          <div className={`text-sm font-bold ${severityConfig[severity].color} mb-2`}>{issue}</div>
          <div className="text-sm text-muted-foreground">{guidance}</div>
        </div>
        <ChevronRight size={20} className="text-gray-400 flex-shrink-0" />
      </div>
    </div>
  );
}

function ProgressBar({ steps, current }: any) {
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: steps }).map((_, idx) => (
        <div
          key={idx}
          className={`flex-1 h-2 rounded ${idx < current ? 'bg-primary' : 'bg-gray-300'}`}
        ></div>
      ))}
    </div>
  );
}

function RequirementItem({ label, value }: any) {
  return (
    <div>
      <div className="text-sm font-bold text-foreground mb-1">{label}</div>
      <div className="text-sm text-muted-foreground">{value}</div>
    </div>
  );
}

function CorrectionReviewItem({ field, before, after, type }: any) {
  return (
    <div className="p-6">
      <div className="font-bold text-sm text-foreground mb-2">{field}</div>
      <div className="flex items-start gap-4">
        <div className="flex-1">
          <div className="text-xs text-muted-foreground mb-1">Before:</div>
          <div className="text-sm text-muted-foreground line-through">{before}</div>
        </div>
        <ArrowRight size={20} className="text-blue-600 flex-shrink-0 mt-4" />
        <div className="flex-1">
          <div className="text-xs text-muted-foreground mb-1">After:</div>
          <div className="text-sm text-blue-700 font-bold">{after}</div>
        </div>
      </div>
    </div>
  );
}

function NextStepCard({ icon, title, description }: any) {
  return (
    <div className="border-2 border-border rounded-lg p-4 bg-card">
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0">{icon}</div>
        <div>
          <div className="font-bold text-sm text-foreground mb-1">{title}</div>
          <div className="text-xs text-muted-foreground">{description}</div>
        </div>
      </div>
    </div>
  );
}

function TimelineItem({ date, status, description, active }: any) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex flex-col items-center">
        <div className={`w-3 h-3 rounded-full ${active ? 'bg-blue-600' : 'bg-gray-400'}`}></div>
        {!active && <div className="w-0.5 h-12 bg-gray-300"></div>}
      </div>
      <div className="flex-1">
        <div className="text-xs text-muted-foreground">{date}</div>
        <div className="font-bold text-sm text-foreground mb-1">{status}</div>
        <div className="text-sm text-muted-foreground">{description}</div>
      </div>
    </div>
  );
}

function PageAnnotation({ items }: any) {
  return (
    <div className="mt-4 bg-blue-50 border-l-4 border-blue-600 p-4">
      <div className="flex items-start gap-2 mb-2">
        <Info size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
        <div className="font-bold text-sm text-foreground">Design Annotations</div>
      </div>
      <ul className="space-y-1.5 text-sm text-muted-foreground">
        {items.map((item: string, idx: number) => (
          <li key={idx} className="flex items-start gap-2">
            <div className="w-1 h-1 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function IssueTypeDefinition({ type, severity, color, icon, description, examples, userAction, tone }: any) {
  const colorConfig: any = {
    red: { bg: 'bg-red-50', border: 'border-red-300', headerBg: 'bg-red-100' },
    orange: { bg: 'bg-orange-50', border: 'border-orange-300', headerBg: 'bg-orange-100' },
    yellow: { bg: 'bg-yellow-50', border: 'border-yellow-300', headerBg: 'bg-yellow-100' }
  };

  return (
    <div className={`border-2 ${colorConfig[color].border} ${colorConfig[color].bg} rounded-lg overflow-hidden`}>
      <div className={`${colorConfig[color].headerBg} border-b-2 ${colorConfig[color].border} px-4 py-3 flex items-center justify-between`}>
        <div className="flex items-center gap-2">
          {icon}
          <h4 className="font-bold text-foreground">{type}</h4>
        </div>
        <div className="text-xs font-bold text-muted-foreground">{severity} Severity</div>
      </div>
      <div className="p-4 space-y-3">
        <div className="text-sm text-muted-foreground">{description}</div>
        <div>
          <div className="text-xs font-bold text-foreground mb-2">Examples:</div>
          <ul className="space-y-1">
            {examples.map((example: string, idx: number) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                <div className="w-1 h-1 bg-gray-600 rounded-full mt-1.5 flex-shrink-0"></div>
                <span>{example}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-sm text-muted-foreground">
          <strong>User Action:</strong> {userAction}
        </div>
        <div className="text-xs text-muted-foreground bg-card border border-border rounded p-2">
          <strong>Tone:</strong> {tone}
        </div>
      </div>
    </div>
  );
}

function GroupingStrategy({ method, example, benefit }: any) {
  return (
    <div className="border-2 border-purple-300 rounded-lg p-4 bg-card">
      <div className="font-bold text-sm text-foreground mb-2">{method}</div>
      <div className="text-xs text-muted-foreground mb-3">{example}</div>
      <div className="text-xs text-muted-foreground italic">Benefit: {benefit}</div>
    </div>
  );
}

function HighlightingGuidance({ scenario, visual, code }: any) {
  return (
    <div className="border-2 border-border rounded-lg p-4 bg-background">
      <div className="font-bold text-sm text-foreground mb-2">{scenario}</div>
      <div className="text-sm text-muted-foreground mb-2">{visual}</div>
      <div className="text-xs text-muted-foreground bg-card border border-border rounded p-2 font-mono">
        {code}
      </div>
    </div>
  );
}

function ComponentCard({ name, variants, usage }: any) {
  return (
    <div className="border-2 border-border rounded-lg p-4 bg-card">
      <div className="font-bold text-sm text-foreground mb-2">{name}</div>
      <div className="text-xs text-muted-foreground mb-2">Variants: {variants}</div>
      <div className="text-xs text-muted-foreground">Usage: {usage}</div>
    </div>
  );
}

function ToneBlock({ context, tone, good, bad }: any) {
  return (
    <div className="border-2 border-border rounded-lg p-4 bg-card">
      <div className="flex items-start justify-between mb-3">
        <div>
          <div className="font-bold text-sm text-foreground mb-1">{context}</div>
          <div className="text-xs text-muted-foreground italic">{tone}</div>
        </div>
      </div>
      <div className="space-y-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <CheckCircle size={14} className="text-green-600" />
            <span className="text-xs font-bold text-green-700">Good</span>
          </div>
          <div className="text-sm text-foreground bg-green-50 border border-green-200 rounded p-2">"{good}"</div>
        </div>
        <div>
          <div className="flex items-center gap-2 mb-1">
            <XCircle size={14} className="text-red-600" />
            <span className="text-xs font-bold text-red-700">Bad</span>
          </div>
          <div className="text-sm text-foreground bg-red-50 border border-red-200 rounded p-2">"{bad}"</div>
        </div>
      </div>
    </div>
  );
}

function MessageFormula({ type, formula, example }: any) {
  return (
    <div className="border-2 border-blue-300 bg-blue-50 rounded-lg p-4">
      <div className="font-bold text-sm text-foreground mb-2">{type}</div>
      <div className="text-sm text-muted-foreground mb-2"><strong>Formula:</strong> {formula}</div>
      <div className="text-xs text-muted-foreground bg-card border border-blue-200 rounded p-2 italic">
        <strong>Example:</strong> {example}
      </div>
    </div>
  );
}

function AccessibilityBlock({ area, requirements }: any) {
  return (
    <div className="border-2 border-border rounded-lg p-4 bg-card">
      <div className="font-bold text-sm text-foreground mb-3">{area}</div>
      <ul className="space-y-2">
        {requirements.map((req: string, idx: number) => (
          <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
            <CheckCircle size={12} className="text-green-600 mt-0.5 flex-shrink-0" />
            <span>{req}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MultilingualItem({ aspect, requirement }: any) {
  return (
    <div className="text-sm">
      <div className="font-bold text-foreground mb-1">{aspect}</div>
      <div className="text-muted-foreground">{requirement}</div>
    </div>
  );
}

function ImplementationItem({ category, requirement, priority }: any) {
  const priorityConfig: any = {
    critical: { bg: 'bg-red-100', text: 'text-red-700', border: 'border-red-300' },
    required: { bg: 'bg-orange-100', text: 'text-orange-700', border: 'border-orange-300' },
    recommended: { bg: 'bg-blue-100', text: 'text-blue-700', border: 'border-blue-300' }
  };

  return (
    <div className="flex items-start gap-4 p-4 bg-background border-2 border-border rounded-lg">
      <div className="w-24 flex-shrink-0">
        <div className={`px-2 py-1 rounded text-xs font-bold text-center ${priorityConfig[priority].bg} ${priorityConfig[priority].text} ${priorityConfig[priority].border} border`}>
          {priority.toUpperCase()}
        </div>
      </div>
      <div className="flex-1">
        <div className="font-bold text-sm text-foreground mb-1">{category}</div>
        <div className="text-sm text-muted-foreground">{requirement}</div>
      </div>
    </div>
  );
}

function AnalyticsEvent({ event, description }: any) {
  return (
    <div className="flex items-start gap-4 p-3 bg-background border-2 border-border rounded-lg">
      <code className="px-2 py-1 bg-card border border-gray-400 rounded text-xs font-mono text-foreground flex-shrink-0">
        {event}
      </code>
      <div className="flex-1 text-sm text-muted-foreground">{description}</div>
    </div>
  );
}

function ConformanceItem({ checked, label }: any) {
  return (
    <div className="flex items-start gap-3 p-3 bg-background border-2 border-border rounded-lg">
      <div className={`w-5 h-5 border-2 rounded flex items-center justify-center flex-shrink-0 mt-0.5 ${
        checked ? 'bg-green-500 border-green-600' : 'bg-card border-gray-400'
      }`}>
        {checked && <Check size={14} className="text-white" />}
      </div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

function RiskBlock({ risk, impact, solution }: any) {
  const impactConfig: any = {
    Critical: { color: 'text-red-700', bg: 'bg-red-100' },
    High: { color: 'text-orange-700', bg: 'bg-orange-100' },
    Medium: { color: 'text-yellow-700', bg: 'bg-yellow-100' }
  };

  return (
    <div className="border-l-4 border-red-600 bg-red-50 p-4 rounded-r-lg">
      <div className="flex items-start justify-between mb-2">
        <div className="font-bold text-sm text-foreground flex-1">{risk}</div>
        <div className={`px-2 py-1 rounded text-xs font-bold ${impactConfig[impact].bg} ${impactConfig[impact].color} flex-shrink-0 ml-3`}>
          {impact} Impact
        </div>
      </div>
      <div className="text-sm text-muted-foreground">
        <span className="font-bold">Solution:</span> {solution}
      </div>
    </div>
  );
}

function MaturityBlock({ status, version, description }: any) {
  return (
    <div className="border-2 border-green-300 rounded-lg p-4 bg-green-50">
      <div className="font-bold text-sm text-foreground mb-1">{status}</div>
      <div className="text-xs text-muted-foreground mb-3">{version}</div>
      <div className="text-sm text-muted-foreground">{description}</div>
    </div>
  );
}

function MetadataRow({ label, value }: any) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-bold text-foreground">{value}</span>
    </div>
  );
}

function QuickRefRow({ label, value }: any) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-bold text-foreground">{value}</span>
    </div>
  );
}

function PrincipleItem({ icon, text }: any) {
  return (
    <div className="flex items-start gap-2">
      <div className="text-green-600 flex-shrink-0 mt-0.5">{icon}</div>
      <span>{text}</span>
    </div>
  );
}

function RiskItem({ severity, risk }: any) {
  const severityConfig: any = {
    high: { icon: <AlertTriangle size={14} className="text-red-600" /> },
    medium: { icon: <AlertCircle size={14} className="text-orange-600" /> },
    low: { icon: <Info size={14} className="text-blue-600" /> }
  };

  return (
    <div className="flex items-start gap-2">
      {severityConfig[severity].icon}
      <span>{risk}</span>
    </div>
  );
}

function RelatedLink({ title }: any) {
  return (
    <a href="#" className="block px-3 py-2 bg-card border border-border rounded hover:border-primary hover:bg-background transition-colors text-sm text-muted-foreground font-medium">
      {title}
    </a>
  );
}
