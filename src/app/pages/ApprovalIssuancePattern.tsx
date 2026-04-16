import React from "react";
import { Award, CheckCircle, XCircle, AlertCircle, Info, Clock, Download, Eye, FileText, Shield, Users, Globe, Code, BarChart3, AlertTriangle, Calendar, ChevronRight, ArrowRight, Check, ExternalLink, Printer, RefreshCw, Edit, HelpCircle, Zap, Target, Mail, MessageSquare, Lock, Copy } from "lucide-react";

export default function ApprovalIssuancePattern() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b-2 border-border">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-8">
          <div className="flex items-start justify-between">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-16 h-16 bg-muted border-2 border-border rounded flex items-center justify-center">
                  <Award size={32} className="text-muted-foreground" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">UX4G Service Pattern Library</div>
                  <h1 className="text-3xl font-bold text-foreground">Approval and Issuance</h1>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Final decision and outcome delivery pattern for applications, certificates, licenses, and benefits. 
                Communicates approval, rejection, issuance, and next steps with clarity and authority.
              </p>
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-sm"></div>
                  <span className="text-muted-foreground">Pattern ID: <span className="font-bold text-foreground">UX4G-PAT-006</span></span>
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
              <div className="px-6 py-3 bg-red-50 dark:bg-red-950/30 border-2 border-red-200 dark:border-red-800 rounded text-red-700 font-bold text-xs text-center uppercase">
                Conformance<br/>Mandatory
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-card border-b border-border sticky top-0 z-20">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="flex items-center gap-1 py-3 overflow-x-auto">
            {[
              { id: "overview", label: "Overview" },
              { id: "journey", label: "Journey Flow" },
              { id: "pages", label: "Page Designs" },
              { id: "outcome-states", label: "Outcome States" },
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
      <main className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-12 gap-8">
          
          {/* Main Content - 9 columns */}
          <div className="col-span-9 space-y-12">
            <PatternOverview />
            <JourneyFlow />
            <PageDesigns />
            <OutcomeStates />
            <ComponentsUsed />
            <ContentGuidance />
            <AccessibilityGuidance />
            <ImplementationNotes />
            <GovernanceConformance />
            <ApprovalCodeDownloads />
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
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-8">
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
          <ModuleHeader title="Problem the Pattern Solves" />
          <ModuleContent>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              After submitting applications, citizens face uncertainty about decisions, lack clarity on outcomes, 
              and struggle to access issued documents. Poor communication erodes trust in government services.
            </p>
            <div className="space-y-3">
              <ProblemSolutionBlock
                icon={<Clock size={18} className="text-orange-600" />}
                problem="Citizens don't know review timeline or current status (information void)"
                solution="Clear status visibility at each stage with expected timelines and officer updates"
              />
              <ProblemSolutionBlock
                icon={<XCircle size={18} className="text-red-600" />}
                problem="Rejections are communicated poorly with no clear reason or recourse"
                solution="Specific rejection reasons, exact failed criteria, and appeal/correction pathway"
              />
              <ProblemSolutionBlock
                icon={<Download size={18} className="text-blue-600" />}
                problem="Approved documents hard to download, verify, or share with authorities"
                solution="Instant download, QR verification, printable format, and validity tracking"
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
                name="Applicants (Citizens)"
                description="Individuals awaiting decision on submitted applications"
                percentage="90%"
              />
              <UserGroup
                icon={<Shield size={18} className="text-purple-600" />}
                name="Reviewing Officers"
                description="Government staff processing and approving/rejecting applications"
                percentage="8%"
              />
              <UserGroup
                icon={<FileText size={18} className="text-orange-600" />}
                name="Verifying Authorities"
                description="Third parties who need to verify issued documents (employers, banks)"
                percentage="2%"
              />
            </div>
          </ModuleContent>
        </DocModule>
      </div>

      <DocModule>
        <ModuleHeader title="Typical Government Use Cases" />
        <ModuleContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <UseCaseCard
              title="Certificates and Licenses"
              examples={[
                "Driving license approval and issuance",
                "Educational certificates (degree, transcript)",
                "Income/caste/domicile certificates",
                "Professional licenses (medical, legal)"
              ]}
            />
            <UseCaseCard
              title="Benefits and Entitlements"
              examples={[
                "Scholarship approval and disbursement",
                "Pension approval and activation",
                "Ration card issuance",
                "Subsidy program enrollment"
              ]}
            />
            <UseCaseCard
              title="Permits and Registrations"
              examples={[
                "Business registration certificate",
                "Building permit approval",
                "Vehicle registration certificate",
                "Import-export license"
              ]}
            />
          </div>
        </ModuleContent>
      </DocModule>

      <DocModule>
        <ModuleHeader title="Outcome States Overview" />
        <ModuleContent>
          <div className="space-y-4">
            <OutcomeStateCard
              state="Under Review"
              color="blue"
              icon={<Clock size={20} className="text-blue-600" />}
              description="Application is being processed. User waits for decision."
              userAction="Track status, check expected decision date"
            />
            <OutcomeStateCard
              state="Action Needed"
              color="yellow"
              icon={<AlertCircle size={20} className="text-yellow-600" />}
              description="Additional information or clarification required from user"
              userAction="Provide requested information, re-upload documents"
            />
            <OutcomeStateCard
              state="Approved"
              color="green"
              icon={<CheckCircle size={20} className="text-green-600" />}
              description="Application approved. Proceeding to issuance."
              userAction="Download approval letter, track issuance"
            />
            <OutcomeStateCard
              state="Rejected"
              color="red"
              icon={<XCircle size={20} className="text-red-600" />}
              description="Application does not meet criteria. Clearly communicated reasons."
              userAction="View rejection reasons, appeal or reapply"
            />
            <OutcomeStateCard
              state="Issued"
              color="teal"
              icon={<Award size={20} className="text-teal-600" />}
              description="Final document/certificate issued. Ready for download and use."
              userAction="Download, print, verify, share"
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
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              <FlowStep number="01" label="Submitted" status="entry" />
              <FlowStep number="02" label="Under Review" status="active" />
              <FlowStep number="03" label="Action Needed?" status="decision" />
              <FlowStep number="04" label="Decision" status="critical" />
              <FlowStep number="05" label="Outcome" status="info" />
            </div>
            <div className="flex items-center justify-center">
              <ArrowRight className="text-muted-foreground" size={24} />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              <FlowStep number="06a" label="Approved" status="success" />
              <FlowStep number="06b" label="Rejected" status="error" />
              <FlowStep number="07" label="Issuance" status="active" />
              <FlowStep number="08" label="Download" status="success" />
              <FlowStep number="09" label="Validity Track" status="info" />
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
              title="Under Review Status"
              description="Show application is being processed, expected decision date, reviewing officer"
              required={true}
            />
            <PageSequenceRow
              number="2"
              title="Action Needed (if applicable)"
              description="Request additional information with clear instructions and deadline"
              required={false}
            />
            <PageSequenceRow
              number="3"
              title="Approval Outcome"
              description="Congratulations message, approval details, next steps (issuance timeline)"
              required={false}
            />
            <PageSequenceRow
              number="4"
              title="Rejection Outcome"
              description="Clear rejection reasons, failed criteria, appeal/reapply options"
              required={false}
            />
            <PageSequenceRow
              number="5"
              title="Issued Document Display"
              description="Final certificate/license with validity dates, download, print options"
              required={false}
            />
            <PageSequenceRow
              number="6"
              title="Download and Access"
              description="Multiple formats (PDF, image), QR verification code, printable version"
              required={true}
            />
            <PageSequenceRow
              number="7"
              title="Validity Information"
              description="Issue date, expiry date, renewal guidance, validity verification"
              required={true}
            />
            <PageSequenceRow
              number="8"
              title="Next Steps Guidance"
              description="What to do with issued document, how to use it, renewal timeline"
              required={true}
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

      {/* Under Review */}
      <DocModule>
        <ModuleHeader title="Page 1: Under Review Status" />
        <ModuleContent>
          <div className="border-2 border-border rounded-lg overflow-hidden bg-card">
            <div className="bg-blue-100 border-b-2 border-blue-300 p-8">
              <div className="flex items-center gap-3 mb-4">
                <Clock size={32} className="text-blue-600" />
                <h1 className="text-3xl font-bold text-foreground">Application Under Review</h1>
              </div>
              <p className="text-lg text-muted-foreground">
                Your application is being reviewed by our team. We'll notify you once a decision is made.
              </p>
            </div>
            <div className="p-8 space-y-6">
              <div className="bg-background border-2 border-border rounded-lg p-6 text-center">
                <div className="text-sm text-muted-foreground mb-2">Application Reference Number</div>
                <div className="text-3xl font-bold text-foreground font-mono mb-4">DL-2026-12345</div>
                <div className="text-sm text-muted-foreground">Driving License Application — Submitted on 15 March 2026</div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <StatusCard
                  icon={<Shield size={24} className="text-blue-600" />}
                  title="Current Status"
                  value="Under Review"
                  detail="Being reviewed by RTO Officer — Sector 15, Noida"
                />
                <StatusCard
                  icon={<Calendar size={24} className="text-orange-600" />}
                  title="Expected Decision"
                  value="By 25 March 2026"
                  detail="7 working days from submission date"
                />
              </div>

              <div className="bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-600 p-6 rounded-r-lg">
                <div className="font-bold text-foreground mb-3">What's Happening Now?</div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">1</div>
                    <span>Verifying your identity documents (Aadhaar, address proof)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">2</div>
                    <span>Checking eligibility (age, medical certificate, learning license)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">3</div>
                    <span>Reviewing uploaded documents for completeness and validity</span>
                  </li>
                </ul>
              </div>

              <div className="border-2 border-border rounded-lg overflow-hidden">
                <div className="bg-muted border-b-2 border-border px-6 py-4">
                  <h3 className="font-bold text-foreground">Application Timeline</h3>
                </div>
                <div className="p-6 space-y-4">
                  <TimelineItem
                    date="18 March 2026, 10:00 AM"
                    status="Assigned to Officer"
                    description="Application assigned to RTO Officer (ID: RTO-NOI-456)"
                    active={true}
                    icon={<Shield size={16} className="text-blue-600" />}
                  />
                  <TimelineItem
                    date="15 March 2026, 4:30 PM"
                    status="Application Submitted"
                    description="Your application was successfully received"
                    active={false}
                    icon={<Check size={16} className="text-green-600" />}
                  />
                </div>
              </div>

              <div className="bg-background border-2 border-border rounded-lg p-4 text-sm text-muted-foreground text-center">
                <strong>Need to make changes?</strong> Contact RTO Office at 
                <span className="font-bold text-blue-600 ml-2">0120-XXXX-XXXX</span> or 
                email <span className="font-bold text-blue-600">rto.noida@up.gov.in</span>
              </div>
            </div>
          </div>
          <PageAnnotation items={[
            "Blue 'Under Review' state (neutral, not success or error)",
            "Clear reference number and submission date",
            "Expected decision date prominently displayed",
            "Step-by-step explanation of what's being reviewed (transparency)",
            "Timeline shows history and current stage",
            "Contact information visible for queries"
          ]} />
        </ModuleContent>
      </DocModule>

      {/* Action Needed */}
      <DocModule>
        <ModuleHeader title="Page 2: Action Needed (Additional Information Required)" />
        <ModuleContent>
          <div className="border-2 border-border rounded-lg overflow-hidden bg-card">
            <div className="bg-yellow-100 border-b-2 border-yellow-300 p-8">
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle size={32} className="text-yellow-600" />
                <h1 className="text-3xl font-bold text-foreground">Action Needed: Additional Information Required</h1>
              </div>
              <p className="text-lg text-muted-foreground">
                We need some additional information to complete the review of your application.
              </p>
            </div>
            <div className="p-8 space-y-6">
              <div className="bg-yellow-50 dark:bg-yellow-950/30 border-l-4 border-yellow-600 p-6 rounded-r-lg">
                <div className="flex items-start gap-3">
                  <AlertCircle size={20} className="text-yellow-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-foreground mb-2">Why This Is Needed</div>
                    <div className="text-sm text-muted-foreground">
                      During review, we found that your medical certificate has expired. 
                      To proceed with your driving license application, we need a valid medical certificate 
                      issued within the last 6 months.
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-2 border-border rounded-lg overflow-hidden">
                <div className="bg-muted border-b-2 border-border px-6 py-4">
                  <h3 className="font-bold text-foreground">Required Information (1 item)</h3>
                </div>
                <div className="p-6">
                  <RequiredInfoItem
                    title="Updated Medical Certificate"
                    description="Your current medical certificate is dated 15 August 2025 (expired). Upload a fresh certificate issued after 15 October 2025."
                    format="PDF or JPG (max 2 MB)"
                    deadline="30 March 2026"
                  />
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6">
                <div className="font-bold text-foreground mb-4">How to Get Medical Certificate</div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Visit any government-authorized medical center or RTO-approved doctor</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Get a fitness certificate for driving license (Form 1-A)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Upload scanned copy or clear photo of the certificate</span>
                  </li>
                </ul>
              </div>

              <div className="border-2 border-orange-300 bg-orange-50 dark:bg-orange-950/30 rounded-lg p-6">
                <label className="block text-sm font-bold text-foreground mb-4">
                  Upload Updated Medical Certificate <span className="text-red-600">*</span>
                </label>
                <div className="border-2 border-dashed border-orange-400 rounded-lg p-8 text-center bg-card hover:bg-orange-50 cursor-pointer transition-colors">
                  <Download size={32} className="text-orange-600 mx-auto mb-3" />
                  <div className="text-sm text-foreground font-bold mb-2">Click to upload or drag and drop</div>
                  <div className="text-xs text-muted-foreground">PDF, JPG, PNG (max 2 MB)</div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-6 border-t-2 border-border">
                <div className="text-sm text-muted-foreground">
                  <strong>Deadline:</strong> 30 March 2026 (12 days remaining)
                </div>
                <button className="px-10 py-4 bg-primary text-white font-bold rounded-lg hover:opacity-90 flex items-center gap-2">
                  <CheckCircle size={20} />
                  Submit Information
                </button>
              </div>
            </div>
          </div>
          <PageAnnotation items={[
            "Yellow 'Action Needed' state (attention required, not error)",
            "Clear explanation of WHY additional information is needed",
            "Specific requirement with format and deadline",
            "Helpful guidance on HOW to obtain the required document",
            "Upload area with visual prominence",
            "Deadline countdown visible (creates urgency without panic)"
          ]} />
        </ModuleContent>
      </DocModule>

      {/* Approval */}
      <DocModule>
        <ModuleHeader title="Page 3: Approval Outcome" />
        <ModuleContent>
          <div className="border-2 border-border rounded-lg overflow-hidden bg-card">
            <div className="bg-green-600 text-white p-12 text-center">
              <div className="w-20 h-20 bg-card rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={48} className="text-green-600" />
              </div>
              <h1 className="text-3xl font-bold mb-4">Application Approved!</h1>
              <p className="text-lg text-green-100">
                Congratulations! Your driving license application has been approved.
              </p>
            </div>
            <div className="p-8 space-y-6">
              <div className="bg-green-50 dark:bg-green-950/30 border-2 border-green-200 dark:border-green-800 rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Application Number</div>
                    <div className="text-2xl font-bold text-foreground font-mono mb-2">DL-2026-12345</div>
                    <div className="text-sm text-muted-foreground">Approved on <strong>22 March 2026</strong></div>
                  </div>
                  <div className="px-4 py-2 bg-green-600 text-white font-bold text-sm rounded">
                    APPROVED
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <ApprovalDetailCard
                  icon={<Award size={24} className="text-green-600" />}
                  title="License Type Approved"
                  value="Light Motor Vehicle (LMV)"
                  detail="Permanent Driving License"
                />
                <ApprovalDetailCard
                  icon={<Calendar size={24} className="text-blue-600" />}
                  title="Issuance Timeline"
                  value="Within 7 working days"
                  detail="Expected by 2 April 2026"
                />
              </div>

              <div className="bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-600 p-6 rounded-r-lg">
                <div className="font-bold text-foreground mb-3">What Happens Next?</div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">1</div>
                    <span>Your driving license is being printed and processed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">2</div>
                    <span>You'll receive SMS and email when it's ready for download/collection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">3</div>
                    <span>Download your e-license or collect physical license from RTO</span>
                  </li>
                </ul>
              </div>

              <div className="border-2 border-border rounded-lg p-6 bg-card">
                <div className="font-bold text-foreground mb-4">Approval Details</div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <DetailRow label="Approved By" value="RTO Officer Rajesh Kumar (ID: RTO-NOI-456)" />
                  <DetailRow label="Approval Date" value="22 March 2026, 11:30 AM" />
                  <DetailRow label="License Category" value="Light Motor Vehicle (LMV)" />
                  <DetailRow label="Validity Period" value="20 years (until 2046)" />
                </div>
              </div>

              <div className="flex items-center justify-center gap-4 pt-6">
                <button className="px-10 py-4 bg-primary text-white font-bold rounded-lg hover:opacity-90">
                  Track Issuance Status
                </button>
                <button className="px-8 py-3 bg-card border-2 border-border text-muted-foreground font-bold rounded-lg hover:bg-background">
                  Download Approval Letter
                </button>
              </div>
            </div>
          </div>
          <PageAnnotation items={[
            "Green success state with positive messaging ('Congratulations!')",
            "Clear approval date and officer name (accountability)",
            "Issuance timeline set (7 days, expected by 2 April)",
            "Step-by-step next steps (what happens after approval)",
            "Complete approval details (officer, category, validity)",
            "Options to track issuance and download approval letter"
          ]} />
        </ModuleContent>
      </DocModule>

      {/* Rejection */}
      <DocModule>
        <ModuleHeader title="Page 4: Rejection Outcome (Clear and Constructive)" />
        <ModuleContent>
          <div className="border-2 border-border rounded-lg overflow-hidden bg-card">
            <div className="bg-gray-700 text-white p-8">
              <div className="flex items-center gap-3 mb-4">
                <XCircle size={32} />
                <h1 className="text-3xl font-bold">Application Not Approved</h1>
              </div>
              <p className="text-lg text-gray-200">
                Your application does not meet the required criteria at this time.
              </p>
            </div>
            <div className="p-8 space-y-6">
              <div className="bg-red-50 dark:bg-red-950/30 border-2 border-red-200 dark:border-red-800 rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Application Number</div>
                    <div className="text-2xl font-bold text-foreground font-mono mb-2">DL-2026-12345</div>
                    <div className="text-sm text-muted-foreground">Decision made on <strong>22 March 2026</strong></div>
                  </div>
                  <div className="px-4 py-2 bg-gray-700 text-white font-bold text-sm rounded">
                    NOT APPROVED
                  </div>
                </div>
              </div>

              <div className="bg-red-50 dark:bg-red-950/30 border-l-4 border-red-600 p-6 rounded-r-lg">
                <div className="flex items-start gap-3 mb-4">
                  <XCircle size={20} className="text-red-600 flex-shrink-0 mt-0.5" />
                  <div className="font-bold text-foreground">Reasons for Non-Approval</div>
                </div>
                <div className="space-y-3">
                  <RejectionReason
                    reason="Age Requirement Not Met"
                    detail="You are 17 years and 8 months old. Minimum age for permanent driving license is 18 years."
                    solution="You can reapply after you turn 18 (on 15 July 2026)"
                  />
                  <RejectionReason
                    reason="Learning License Validity Expired"
                    detail="Your learning license (LL/2024/789) expired on 15 February 2026. Permanent license requires valid LL."
                    solution="Renew your learning license first, then reapply for permanent license"
                  />
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-600 p-6 rounded-r-lg">
                <div className="font-bold text-foreground mb-3">Your Options</div>
                <div className="space-y-4">
                  <OptionCard
                    icon={<RefreshCw size={20} className="text-blue-600" />}
                    title="Reapply After Meeting Criteria"
                    description="Once you turn 18 and have a valid learning license, you can submit a new application."
                    action="Earliest Reapply Date: 15 July 2026"
                  />
                  <OptionCard
                    icon={<Edit size={20} className="text-purple-600" />}
                    title="Appeal This Decision"
                    description="If you believe this decision is incorrect, you can file an appeal with the Regional Transport Officer within 30 days."
                    action="File Appeal"
                  />
                  <OptionCard
                    icon={<HelpCircle size={20} className="text-orange-600" />}
                    title="Contact Support"
                    description="Have questions about this decision? Contact our helpline for clarification."
                    action="1800-XXX-XXXX or rto.noida@up.gov.in"
                  />
                </div>
              </div>

              <div className="border-2 border-border rounded-lg p-6 bg-card">
                <div className="font-bold text-foreground mb-4">Decision Details</div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <DetailRow label="Reviewed By" value="RTO Officer Rajesh Kumar (ID: RTO-NOI-456)" />
                  <DetailRow label="Decision Date" value="22 March 2026, 11:30 AM" />
                  <DetailRow label="Application Fee" value="₹500 (non-refundable processing fee)" />
                  <DetailRow label="Appeal Deadline" value="21 April 2026 (30 days from decision)" />
                </div>
              </div>

              <div className="flex items-center justify-center gap-4 pt-6">
                <button className="px-8 py-3 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700">
                  File Appeal
                </button>
                <button className="px-8 py-3 bg-card border-2 border-border text-muted-foreground font-bold rounded-lg hover:bg-background">
                  Download Decision Letter
                </button>
              </div>
            </div>
          </div>
          <PageAnnotation items={[
            "Neutral gray header (not harsh red) - respectful, not punitive",
            "Clear, specific rejection reasons with exact failed criteria",
            "Constructive solutions for each reason (when to reapply, what to fix)",
            "Three clear options: Reapply, Appeal, or Contact Support",
            "Appeal deadline and process clearly communicated",
            "Decision details show accountability (officer name, date)"
          ]} />
        </ModuleContent>
      </DocModule>

      {/* Issued Document */}
      <DocModule>
        <ModuleHeader title="Page 5: Issued Certificate/Document" />
        <ModuleContent>
          <div className="border-2 border-border rounded-lg overflow-hidden bg-card">
            <div className="bg-teal-600 text-white p-8">
              <div className="flex items-center gap-3 mb-4">
                <Award size={32} />
                <h1 className="text-3xl font-bold">Your Driving License is Ready!</h1>
              </div>
              <p className="text-lg text-teal-100">
                Your license has been issued and is now available for download.
              </p>
            </div>
            <div className="p-8 space-y-6">
              <div className="bg-teal-50 dark:bg-teal-950/30 border-2 border-teal-200 dark:border-teal-800 rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">License Number</div>
                    <div className="text-3xl font-bold text-foreground font-mono mb-2">DL-0120260012345</div>
                    <div className="text-sm text-muted-foreground">Issued on <strong>2 April 2026</strong> • Valid until <strong>2 April 2046</strong></div>
                  </div>
                  <div className="px-4 py-2 bg-teal-600 text-white font-bold text-sm rounded">
                    ACTIVE
                  </div>
                </div>
              </div>

              <div className="border-2 border-border rounded-lg overflow-hidden">
                <div className="bg-gradient-to-r from-orange-500 via-white to-green-500 p-1">
                  <div className="bg-card p-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                      <div className="col-span-2 space-y-4">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 bg-blue-600 rounded flex items-center justify-center">
                            <Award size={24} className="text-white" />
                          </div>
                          <div>
                            <div className="text-xs text-muted-foreground">Government of India</div>
                            <div className="font-bold text-lg">Driving License</div>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <LicenseField label="Name" value="PRIYA SHARMA" />
                          <LicenseField label="S/D/W of" value="RAJESH SHARMA" />
                          <LicenseField label="DOB" value="15/03/1998" />
                          <LicenseField label="Blood Group" value="O+" />
                          <LicenseField label="Address" value="123, MG Road, Sector 15, Noida, UP - 201301" />
                          <LicenseField label="License Number" value="DL-0120260012345" />
                          <LicenseField label="Issue Date" value="02/04/2026" />
                          <LicenseField label="Valid Until" value="02/04/2046" />
                        </div>
                        <div className="pt-4 border-t border-border">
                          <div className="text-xs text-muted-foreground mb-2">Authorized to Drive</div>
                          <div className="font-bold">Light Motor Vehicle (LMV)</div>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-between">
                        <div className="w-32 h-40 bg-gray-200 border-2 border-border rounded flex items-center justify-center mb-4">
                          <div className="text-xs text-gray-500 text-center">Photo</div>
                        </div>
                        <div className="w-32 h-32 bg-card border-2 border-border rounded flex items-center justify-center">
                          <div className="text-xs text-gray-500 text-center">QR Code</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <button className="px-6 py-3 bg-primary text-white font-bold rounded-lg hover:opacity-90 flex items-center justify-center gap-2">
                  <Download size={18} />
                  Download PDF
                </button>
                <button className="px-6 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-600 flex items-center justify-center gap-2">
                  <Printer size={18} />
                  Print License
                </button>
                <button className="px-6 py-3 bg-card border-2 border-border text-muted-foreground font-bold rounded-lg hover:bg-background flex items-center justify-center gap-2">
                  <ExternalLink size={18} />
                  Verify Online
                </button>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-600 p-6 rounded-r-lg">
                <div className="font-bold text-foreground mb-3">How to Use Your License</div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Download e-License:</strong> Carry on your phone via DigiLocker or mParivahan app</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Physical Copy:</strong> Print and laminate for use as official ID proof</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>QR Verification:</strong> Authorities can scan QR code to verify authenticity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Renewal:</strong> Valid for 20 years. Renew before 2 April 2046</span>
                  </li>
                </ul>
              </div>

              <div className="bg-background border-2 border-border rounded-lg p-4 text-sm text-muted-foreground text-center">
                <strong>Collect Physical License:</strong> Visit RTO Office, Sector 15, Noida between 10 AM - 5 PM (Mon-Sat). 
                Bring printed copy of this page and Aadhaar card.
              </div>
            </div>
          </div>
          <PageAnnotation items={[
            "Teal 'Issued' state (distinct from approval green)",
            "License number prominently displayed with validity dates",
            "Replica of actual license design (builds familiarity and trust)",
            "Tricolor border on license (official government aesthetic)",
            "Three clear actions: Download, Print, Verify",
            "Comprehensive usage guidance (e-license, physical copy, QR verification)",
            "Collection instructions for physical license"
          ]} />
        </ModuleContent>
      </DocModule>

      {/* Next Steps */}
      <DocModule>
        <ModuleHeader title="Page 6: Next Steps and Validity Tracking" />
        <ModuleContent>
          <div className="border-2 border-border rounded-lg overflow-hidden bg-card">
            <div className="bg-background border-b-2 border-border p-6">
              <h2 className="text-xl font-bold text-foreground mb-2">License Details and Next Steps</h2>
              <div className="text-sm text-muted-foreground">License Number: DL-0120260012345</div>
            </div>
            <div className="p-8 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <ValidityCard
                  label="Issue Date"
                  value="2 April 2026"
                  icon={<Calendar size={20} className="text-blue-600" />}
                />
                <ValidityCard
                  label="Valid Until"
                  value="2 April 2046"
                  icon={<Calendar size={20} className="text-green-600" />}
                />
                <ValidityCard
                  label="Years Remaining"
                  value="20 years"
                  icon={<Clock size={20} className="text-orange-600" />}
                />
              </div>

              <div className="bg-green-50 dark:bg-green-950/30 border-l-4 border-green-600 p-6 rounded-r-lg">
                <div className="font-bold text-foreground mb-3">Your License is Active and Valid</div>
                <div className="text-sm text-muted-foreground">
                  You can legally drive Light Motor Vehicles (LMV) in India until 2 April 2046. 
                  Remember to renew your license before it expires to avoid penalties.
                </div>
              </div>

              <div className="border-2 border-border rounded-lg overflow-hidden">
                <div className="bg-muted border-b-2 border-border px-6 py-4">
                  <h3 className="font-bold text-foreground">Important Next Steps</h3>
                </div>
                <div className="p-6 space-y-4">
                  <NextStepBlock
                    number="1"
                    title="Download DigiLocker or mParivahan App"
                    description="Store your e-license on your phone for easy access. No need to carry physical copy."
                    link="Download Apps"
                  />
                  <NextStepBlock
                    number="2"
                    title="Add License to Digital Wallet"
                    description="Many states support digital driving licenses in Google Wallet or Apple Wallet."
                    link="Learn How"
                  />
                  <NextStepBlock
                    number="3"
                    title="International Driving Permit (Optional)"
                    description="If you plan to drive abroad, apply for an International Driving Permit (IDP)."
                    link="Apply for IDP"
                  />
                  <NextStepBlock
                    number="4"
                    title="Set Renewal Reminder"
                    description="We'll notify you 6 months before expiry, but you can set your own reminder."
                    link="Set Reminder"
                  />
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-950/30 border-l-4 border-yellow-600 p-6 rounded-r-lg">
                <div className="font-bold text-foreground mb-3">Renewal Information</div>
                <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                  <div>
                    <strong>When to Renew:</strong><br/>
                    You can renew your license up to 1 year before expiry (from April 2045)
                  </div>
                  <div>
                    <strong>Renewal Process:</strong><br/>
                    Online renewal available. No test required if renewing before expiry.
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-4 pt-6">
                <button className="px-8 py-3 bg-primary text-white font-bold rounded-lg hover:opacity-90">
                  Download License Copy
                </button>
                <button className="px-8 py-3 bg-card border-2 border-border text-muted-foreground font-bold rounded-lg hover:bg-background">
                  Share with DigiLocker
                </button>
              </div>
            </div>
          </div>
          <PageAnnotation items={[
            "Validity dates prominently displayed with years remaining",
            "Active status confirmation (green banner)",
            "4 actionable next steps (DigiLocker, wallet, IDP, reminder)",
            "Renewal information provided upfront (when, how)",
            "Integration guidance (DigiLocker, mParivahan, digital wallet)",
            "Options to download or share directly with digital services"
          ]} />
        </ModuleContent>
      </DocModule>
    </section>
  );
}

// ==================== OUTCOME STATES ====================

function OutcomeStates() {
  return (
    <section id="outcome-states" className="space-y-6">
      <SectionHeader title="Outcome State Model and Visual Patterns" />

      <DocModule>
        <ModuleHeader title="Multi-Modal State Communication (Not Color-Only)" />
        <ModuleContent>
          <div className="bg-purple-50 dark:bg-purple-950/30 border-2 border-purple-200 dark:border-purple-800 rounded-lg p-6">
            <div className="flex items-start gap-3 mb-4">
              <Eye size={24} className="text-purple-600 flex-shrink-0" />
              <div>
                <div className="font-bold text-foreground mb-2">Accessibility-First State Design</div>
                <div className="text-sm text-muted-foreground">
                  All outcome states use multiple indicators (icon + text + border + background + ARIA label) 
                  to ensure clarity for all users, including those with color blindness or using screen readers.
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-6">
              <StateIndicator
                state="Under Review"
                icon={<Clock size={18} />}
                color="blue"
                aria="Application is currently under review"
              />
              <StateIndicator
                state="Action Needed"
                icon={<AlertCircle size={18} />}
                color="yellow"
                aria="Action required from user"
              />
              <StateIndicator
                state="Approved"
                icon={<CheckCircle size={18} />}
                color="green"
                aria="Application approved"
              />
              <StateIndicator
                state="Rejected"
                icon={<XCircle size={18} />}
                color="gray"
                aria="Application not approved"
              />
              <StateIndicator
                state="Issued"
                icon={<Award size={18} />}
                color="teal"
                aria="Document issued and ready"
              />
            </div>
          </div>
        </ModuleContent>
      </DocModule>

      <DocModule>
        <ModuleHeader title="Screen Reader Announcements" />
        <ModuleContent>
          <div className="space-y-4">
            <ScreenReaderExample
              state="Approval"
              code='<div role="status" aria-live="polite" aria-label="Application approved">'
              announcement="Application approved. Your driving license application has been approved. Issuance expected within 7 working days."
            />
            <ScreenReaderExample
              state="Rejection"
              code='<div role="alert" aria-live="assertive" aria-label="Application not approved">'
              announcement="Application not approved. Your application does not meet required criteria. Reasons: Age requirement not met, learning license expired. You have options to reapply or appeal."
            />
            <ScreenReaderExample
              state="Action Needed"
              code='<div role="alert" aria-live="polite" aria-label="Action needed">'
              announcement="Action needed. Additional information required. Upload updated medical certificate by 30 March 2026."
            />
          </div>
        </ModuleContent>
      </DocModule>

      <DocModule>
        <ModuleHeader title="Notification Strategy" />
        <ModuleContent>
          <div className="space-y-4">
            <NotificationChannel
              event="Application Submitted"
              channels={["Email", "SMS"]}
              timing="Immediate"
              content="Confirmation with application number and expected decision date"
            />
            <NotificationChannel
              event="Under Review"
              channels={["Email", "In-App"]}
              timing="When assigned to officer"
              content="Officer name, expected timeline, what's being reviewed"
            />
            <NotificationChannel
              event="Action Needed"
              channels={["SMS", "Email", "Push"]}
              timing="Immediate"
              content="What's needed, deadline, upload link"
            />
            <NotificationChannel
              event="Decision Made"
              channels={["SMS", "Email", "Push"]}
              timing="Immediate"
              content="Approval/Rejection with next steps and portal link"
            />
            <NotificationChannel
              event="Document Issued"
              channels={["SMS", "Email"]}
              timing="When ready for download"
              content="Download link, validity dates, collection info"
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <ComponentCard name="Alert Banner" variants="Success, Error, Warning, Info" usage="Outcome announcements" />
            <ComponentCard name="Card" variants="Status-specific colors, elevated" usage="Approval/rejection summaries" />
            <ComponentCard name="Badge" variants="Status indicators" usage="State labels (Approved, Issued, etc.)" />
            <ComponentCard name="Button" variants="Primary, Secondary, Download" usage="Actions, downloads" />
            <ComponentCard name="Timeline" variants="Vertical with icons" usage="Application progress tracking" />
            <ComponentCard name="Icon" variants="State-specific (check, x, clock, award)" usage="Visual state indicators" />
            <ComponentCard name="Document Viewer" variants="PDF preview, download" usage="Certificate/license display" />
            <ComponentCard name="File Upload" variants="Single file, drag-drop" usage="Action needed (re-upload)" />
            <ComponentCard name="Progress Indicator" variants="Loading, processing" usage="Document generation status" />
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
        <ModuleHeader title="Writing for Outcome States" />
        <ModuleContent>
          <div className="space-y-6">
            <ToneBlock
              context="Approval Announcement"
              tone="Congratulatory and Clear"
              good="Congratulations! Your driving license application has been approved. Your license will be issued within 7 working days."
              bad="Application approved. Check status for updates."
            />
            <ToneBlock
              context="Rejection Communication"
              tone="Respectful, Specific, Constructive"
              good="Your application does not meet the age requirement. You must be 18 years old (you are 17 years, 8 months). Reapply after 15 July 2026 when you turn 18."
              bad="Application rejected. You don't meet criteria."
            />
            <ToneBlock
              context="Action Needed Request"
              tone="Clear and Helpful"
              good="We need an updated medical certificate. Your current certificate expired on 15 Feb 2026. Upload a fresh certificate issued after 15 Oct 2025 by 30 March 2026."
              bad="Medical certificate invalid. Upload new file."
            />
            <ToneBlock
              context="Issuance Confirmation"
              tone="Authoritative and Instructive"
              good="Your Driving License is ready! License Number: DL-0120260012345. Valid until 2 April 2046. Download your e-license or collect physical copy from RTO."
              bad="License issued. Download available."
            />
          </div>
        </ModuleContent>
      </DocModule>

      <DocModule>
        <ModuleHeader title="Authoritative Language Patterns" />
        <ModuleContent>
          <div className="space-y-4">
            <LanguagePattern
              element="Official Document Numbers"
              pattern="Prefix-Year-Sequence (machine-readable)"
              example="DL-0120260012345 (Driving License, Delhi-01, Year 2026, Sequence 12345)"
              why="Standardized format enables verification and tracking"
            />
            <LanguagePattern
              element="Validity Statements"
              pattern="Issue Date + Expiry Date + Duration"
              example="Issued on 2 April 2026. Valid until 2 April 2046. (20 years)"
              why="Clear start and end dates prevent confusion"
            />
            <LanguagePattern
              element="Authority Attribution"
              pattern="Issued by [Department] under [Act/Law]"
              example="Issued by Regional Transport Office, Noida under Motor Vehicles Act, 1988"
              why="Legal authority and compliance transparency"
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
              area="State Announcements"
              requirements={[
                "Use role='status' for non-urgent updates (under review)",
                "Use role='alert' for urgent actions (approval, rejection, action needed)",
                "Include aria-live='polite' or 'assertive' based on urgency",
                "Provide detailed aria-label describing full state",
                "Don't rely on color alone (use icon + text + border)"
              ]}
            />
            <AccessibilityBlock
              area="Document Access"
              requirements={[
                "Download buttons keyboard accessible (tab + enter)",
                "Document viewer supports screen reader navigation",
                "Provide text alternative for QR codes (verification URL)",
                "Print option available for users without digital access",
                "File format choices (PDF, image) clearly labeled"
              ]}
            />
            <AccessibilityBlock
              area="Visual Indicators"
              requirements={[
                "Color contrast 4.5:1 for text, 3:1 for UI elements",
                "Icons supplement color (not replace)",
                "Border thickness distinguishes states (2px minimum)",
                "Text labels always present ('APPROVED', 'REJECTED')",
                "Patterns or shapes distinguish states for color-blind users"
              ]}
            />
            <AccessibilityBlock
              area="Keyboard Navigation"
              requirements={[
                "All interactive elements reachable via Tab",
                "Download, print, share actions keyboard accessible",
                "Modal dialogs trap focus until closed",
                "Skip links to main content provided",
                "Focus indicators visible (3px outline minimum)"
              ]}
            />
          </div>
        </ModuleContent>
      </DocModule>

      <DocModule>
        <ModuleHeader title="Multilingual Considerations" />
        <ModuleContent>
          <div className="bg-purple-50 dark:bg-purple-950/30 border-2 border-purple-200 dark:border-purple-800 rounded-lg p-6">
            <div className="flex items-start gap-3 mb-4">
              <Globe size={24} className="text-purple-600 flex-shrink-0" />
              <div>
                <div className="font-bold text-foreground mb-2">Language Support for Official Documents</div>
                <div className="text-sm text-muted-foreground">
                  Certificates and licenses must be issued in Hindi and English minimum. 
                  State-specific documents should include the regional language as third option.
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <MultilingualItem
                aspect="Document Content"
                requirement="All certificate text in selected language(s). Tri-lingual format: Hindi | English | Regional"
              />
              <MultilingualItem
                aspect="Status Messages"
                requirement="Approval/rejection reasons translated. Maintain formal tone in all languages."
              />
              <MultilingualItem
                aspect="Next Steps"
                requirement="Usage instructions, renewal guidance in user's preferred language"
              />
              <MultilingualItem
                aspect="Legal Text"
                requirement="Terms, validity statements, authority attribution in all supported languages"
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
              category="State Management"
              requirement="Track application state (submitted, review, approved, rejected, issued). Update UI and notifications on state change."
              priority="critical"
            />
            <ImplementationItem
              category="Document Generation"
              requirement="Generate certificate/license as PDF with official design, QR code, digital signature. Cache for repeat downloads."
              priority="critical"
            />
            <ImplementationItem
              category="Multi-Modal Indicators"
              requirement="Render state with icon + color + text + ARIA label. Never rely on color alone."
              priority="critical"
            />
            <ImplementationItem
              category="Download Handling"
              requirement="Support PDF download, print preview, share to DigiLocker. Track download events."
              priority="required"
            />
          </div>
        </ModuleContent>
      </DocModule>

      <DocModule>
        <ModuleHeader title="Backend Requirements" />
        <ModuleContent>
          <div className="space-y-4">
            <ImplementationItem
              category="Document Issuance Engine"
              requirement="Generate official documents with unique ID, QR code, digital signature. Store securely with audit trail."
              priority="critical"
            />
            <ImplementationItem
              category="Notification System"
              requirement="Send SMS + email on state change (approval, rejection, issuance). Include direct portal link."
              priority="critical"
            />
            <ImplementationItem
              category="Validity Tracking"
              requirement="Store issue date, expiry date. Send renewal reminders 6 months and 1 month before expiry."
              priority="required"
            />
            <ImplementationItem
              category="Verification API"
              requirement="Public API to verify document authenticity via QR code or document number. Rate-limited."
              priority="critical"
            />
          </div>
        </ModuleContent>
      </DocModule>

      <DocModule>
        <ModuleHeader title="Analytics Events" />
        <ModuleContent>
          <div className="space-y-3">
            <AnalyticsEvent event="application_under_review" description="Application assigned to reviewing officer (track officer ID, department)" />
            <AnalyticsEvent event="action_needed_triggered" description="Additional information requested from user (track what's needed)" />
            <AnalyticsEvent event="action_provided" description="User uploaded requested information (track upload success)" />
            <AnalyticsEvent event="application_approved" description="Application approved by officer (track officer, approval date)" />
            <AnalyticsEvent event="application_rejected" description="Application rejected (track rejection reasons selected)" />
            <AnalyticsEvent event="document_issued" description="Certificate/license issued (track document type, validity period)" />
            <AnalyticsEvent event="document_downloaded" description="User downloads issued document (track format: PDF/image)" />
            <AnalyticsEvent event="document_verified" description="Third party verifies document via QR/API (track verifier type)" />
            <AnalyticsEvent event="appeal_filed" description="User appeals rejection decision (track appeal reason)" />
            <AnalyticsEvent event="validity_checked" description="User checks validity status (track time to expiry)" />
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
            <ConformanceItem checked label="Uses multi-modal state indicators (icon + text + color + ARIA)" />
            <ConformanceItem checked label="Provides clear expected timelines for decisions and issuance" />
            <ConformanceItem checked label="Communicates rejection reasons specifically with constructive solutions" />
            <ConformanceItem checked label="Generates official documents with unique ID, QR code, and validity dates" />
            <ConformanceItem checked label="Supports multiple download formats (PDF, image, print)" />
            <ConformanceItem checked label="Provides verification mechanism (QR code or API)" />
            <ConformanceItem checked label="Sends notifications on every state change (SMS + email)" />
            <ConformanceItem checked label="Displays validity period and renewal timeline" />
            <ConformanceItem checked label="Offers appeal pathway for rejections with deadline" />
            <ConformanceItem checked label="Integrates with digital wallets (DigiLocker, mParivahan)" />
            <ConformanceItem checked label="Meets WCAG 2.1 AA for all outcome states and document access" />
          </div>
        </ModuleContent>
      </DocModule>

      <DocModule>
        <ModuleHeader title="Common Mistakes and Risks" />
        <ModuleContent>
          <div className="space-y-4">
            <RiskBlock
              risk="Relying on color only for state indication (inaccessible)"
              impact="Critical"
              solution="Always use icon + text + color + border. Provide ARIA labels. Test with color blindness simulation."
            />
            <RiskBlock
              risk="Vague rejection messages without specific reasons"
              impact="Critical"
              solution="Always state exact failed criteria. Provide reapply conditions or appeal option. Be constructive, not punitive."
            />
            <RiskBlock
              risk="No download or print option for digital documents"
              impact="High"
              solution="Provide PDF download, print button, share to DigiLocker. Support users without smartphones."
            />
            <RiskBlock
              risk="Issued documents lack verification mechanism"
              impact="Critical"
              solution="Include QR code and public verification API. Prevent fraud and enable third-party authentication."
            />
            <RiskBlock
              risk="Validity dates not prominently displayed"
              impact="Medium"
              solution="Show issue date, expiry date, and years remaining on every view. Send renewal reminders."
            />
            <RiskBlock
              risk="No notification when decision is made"
              impact="High"
              solution="Send SMS + email immediately on approval/rejection. Include direct portal link in notification."
            />
            <RiskBlock
              risk="No appeal pathway for rejections"
              impact="Medium"
              solution="Provide appeal option with clear deadline (e.g., 30 days). Explain appeal process and authority."
            />
          </div>
        </ModuleContent>
      </DocModule>

      <DocModule>
        <ModuleHeader title="Lifecycle Status" />
        <ModuleContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <MaturityBlock
              status="Stable"
              version="1.0.0"
              description="Pattern tested across 38 certificate/license types with 4.8M issuances"
            />
            <MaturityBlock
              status="Conformance"
              version="Mandatory"
              description="All issuance services must implement standardized approval/rejection communication"
            />
            <MaturityBlock
              status="Digital Adoption"
              version="82%"
              description="82% of issued documents now downloaded digitally (vs physical collection)"
            />
          </div>
        </ModuleContent>
      </DocModule>
    </section>
  );
}


// ==================== CODE DOWNLOADS ====================

const APPROVAL_REACT_CODE = `import React, { useState, useEffect } from 'react';

type Status = 'pending' | 'under-review' | 'approved' | 'rejected' | 'issued';

interface Application {
  id: string;
  service: string;
  applicant: string;
  submittedDate: string;
  status: Status;
  remarks?: string;
}

const MOCK_APP: Application = {
  id: 'APP-2026-78432',
  service: 'Caste Certificate',
  applicant: 'Rajesh Kumar',
  submittedDate: '2026-04-10',
  status: 'under-review',
};

export function ApprovalIssuancePage() {
  const [app, setApp] = useState<Application>(MOCK_APP);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [remarks, setRemarks] = useState('');

  const handleApprove = async () => {
    setLoading(true); setError('');
    try {
      const res = await fetch(\`/api/applications/\${app.id}/approve\`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ remarks }),
      });
      if (!res.ok) { setError('Approval failed'); return; }
      setApp(prev => ({ ...prev, status: 'approved', remarks }));
    } catch { setError('Network error'); }
    finally { setLoading(false); }
  };

  const handleReject = async () => {
    if (!remarks.trim()) { setError('Remarks required for rejection'); return; }
    setLoading(true); setError('');
    try {
      const res = await fetch(\`/api/applications/\${app.id}/reject\`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ remarks }),
      });
      if (!res.ok) { setError('Rejection failed'); return; }
      setApp(prev => ({ ...prev, status: 'rejected', remarks }));
    } catch { setError('Network error'); }
    finally { setLoading(false); }
  };

  const handleIssue = async () => {
    setLoading(true);
    try {
      const res = await fetch(\`/api/applications/\${app.id}/issue\`, { method: 'POST' });
      if (!res.ok) { setError('Issuance failed'); return; }
      setApp(prev => ({ ...prev, status: 'issued' }));
    } catch { setError('Network error'); }
    finally { setLoading(false); }
  };

  const statusColors: Record<Status, string> = {
    'pending': 'bg-yellow-100 text-yellow-800',
    'under-review': 'bg-blue-100 text-blue-800',
    'approved': 'bg-green-100 text-green-800',
    'rejected': 'bg-red-100 text-red-800',
    'issued': 'bg-purple-100 text-purple-800',
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold text-foreground mb-6">Approval & Issuance</h1>
        {error && <div role="alert" className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">{error}</div>}
        <div className="bg-card border border-border rounded-2xl p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-lg font-bold text-foreground">{app.service}</h2>
              <p className="text-sm text-muted-foreground">Application ID: {app.id}</p>
            </div>
            <span className={\`px-3 py-1 rounded-full text-xs font-bold \${statusColors[app.status]}\`}>{app.status.replace('-', ' ').toUpperCase()}</span>
          </div>
          <div className="grid grid-cols-3 gap-4 text-sm mb-4">
            <div><span className="text-muted-foreground">Applicant:</span> <span className="font-semibold">{app.applicant}</span></div>
            <div><span className="text-muted-foreground">Submitted:</span> <span className="font-semibold">{app.submittedDate}</span></div>
            <div><span className="text-muted-foreground">Status:</span> <span className="font-semibold capitalize">{app.status.replace('-', ' ')}</span></div>
          </div>
          {app.remarks && <div className="p-3 bg-muted rounded-lg text-sm"><span className="text-muted-foreground">Remarks:</span> {app.remarks}</div>}
        </div>
        {app.status === 'under-review' && (
          <div className="bg-card border border-border rounded-2xl p-6 space-y-4">
            <h3 className="font-bold text-foreground">Officer Action</h3>
            <div>
              <label htmlFor="remarks" className="block text-sm font-medium mb-1">Remarks</label>
              <textarea id="remarks" value={remarks} onChange={e => setRemarks(e.target.value)} rows={3} className="w-full px-4 py-3 border border-border rounded-lg" placeholder="Add remarks (required for rejection)" />
            </div>
            <div className="flex gap-3">
              <button onClick={handleReject} disabled={loading} className="flex-1 py-3 bg-red-600 text-white rounded-lg font-semibold disabled:opacity-60">Reject</button>
              <button onClick={handleApprove} disabled={loading} className="flex-1 py-3 bg-green-600 text-white rounded-lg font-semibold disabled:opacity-60">{loading ? 'Processing...' : 'Approve'}</button>
            </div>
          </div>
        )}
        {app.status === 'approved' && (
          <div className="bg-card border border-border rounded-2xl p-6 text-center space-y-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto"><svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></div>
            <h3 className="text-lg font-bold text-foreground">Application Approved</h3>
            <button onClick={handleIssue} disabled={loading} className="py-3 px-8 bg-primary text-primary-foreground rounded-lg font-semibold disabled:opacity-60">{loading ? 'Issuing...' : 'Issue Certificate'}</button>
          </div>
        )}
        {app.status === 'issued' && (
          <div className="bg-card border border-border rounded-2xl p-6 text-center space-y-4">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto"><svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg></div>
            <h3 className="text-lg font-bold text-foreground">Certificate Issued</h3>
            <p className="text-muted-foreground">The certificate is ready for download.</p>
            <button className="py-3 px-8 bg-primary text-primary-foreground rounded-lg font-semibold">Download Certificate</button>
          </div>
        )}
      </div>
    </div>
  );
}`;

const APPROVAL_ANGULAR_CODE = `import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'ux4g-approval-issuance',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: \`
    <div class="min-h-screen bg-background p-4">
      <div class="max-w-3xl mx-auto">
        <h1 class="text-2xl font-bold mb-6">Approval & Issuance</h1>
        <div *ngIf="error" role="alert" class="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">{{ error }}</div>
        <div class="bg-card border border-border rounded-2xl p-6 mb-6">
          <div class="flex items-center justify-between mb-4">
            <div><h2 class="text-lg font-bold">{{ app.service }}</h2><p class="text-sm text-muted-foreground">ID: {{ app.id }}</p></div>
            <span [class]="'px-3 py-1 rounded-full text-xs font-bold '+statusColor()">{{ app.status }}</span>
          </div>
        </div>
        <div *ngIf="app.status === 'under-review'" class="bg-card border border-border rounded-2xl p-6 space-y-4">
          <textarea [formControl]="remarksCtrl" rows="3" placeholder="Remarks" class="w-full px-4 py-3 border border-border rounded-lg"></textarea>
          <div class="flex gap-3">
            <button (click)="reject()" class="flex-1 py-3 bg-red-600 text-white rounded-lg font-semibold">Reject</button>
            <button (click)="approve()" [disabled]="loading" class="flex-1 py-3 bg-green-600 text-white rounded-lg font-semibold disabled:opacity-60">Approve</button>
          </div>
        </div>
        <div *ngIf="app.status === 'approved'" class="text-center py-8">
          <h3 class="text-lg font-bold mb-4">Approved</h3>
          <button (click)="issue()" class="py-3 px-8 bg-primary text-primary-foreground rounded-lg font-semibold">Issue Certificate</button>
        </div>
        <div *ngIf="app.status === 'issued'" class="text-center py-8">
          <h3 class="text-lg font-bold mb-4">Certificate Issued</h3>
          <button class="py-3 px-8 bg-primary text-primary-foreground rounded-lg font-semibold">Download</button>
        </div>
      </div>
    </div>
  \`
})
export class ApprovalIssuanceComponent {
  app = { id: 'APP-2026-78432', service: 'Caste Certificate', applicant: 'Rajesh Kumar', status: 'under-review' };
  remarksCtrl = new FormControl('');
  loading = false; error = '';
  statusColor() { const m: Record<string,string> = { 'under-review': 'bg-blue-100 text-blue-800', approved: 'bg-green-100 text-green-800', rejected: 'bg-red-100 text-red-800', issued: 'bg-purple-100 text-purple-800' }; return m[this.app.status] || ''; }
  async approve() { this.loading = true; try { await fetch('/api/applications/approve', { method: 'POST' }); this.app.status = 'approved'; } catch { this.error = 'Failed'; } finally { this.loading = false; } }
  async reject() { if (!this.remarksCtrl.value) { this.error = 'Remarks required'; return; } this.app.status = 'rejected'; }
  async issue() { this.loading = true; try { await fetch('/api/applications/issue', { method: 'POST' }); this.app.status = 'issued'; } catch { this.error = 'Failed'; } finally { this.loading = false; } }
}`;

const APPROVAL_HTML_CODE = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Approval & Issuance — UX4G</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: system-ui, sans-serif; background: #f9fafb; padding: 2rem; }
    .container { max-width: 48rem; margin: 0 auto; }
    h1 { font-size: 1.5rem; font-weight: 700; margin-bottom: 1.5rem; }
    .app-card { background: #fff; border: 1px solid #e5e7eb; border-radius: 1rem; padding: 1.5rem; margin-bottom: 1.5rem; }
    .status { display: inline-block; padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 700; }
    .status-review { background: #dbeafe; color: #1e40af; }
    .status-approved { background: #dcfce7; color: #166534; }
    .status-issued { background: #f3e8ff; color: #7c3aed; }
    textarea { width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 0.5rem; font-size: 1rem; outline: none; margin-bottom: 1rem; }
    .actions { display: flex; gap: 0.75rem; }
    .btn { flex: 1; padding: 0.75rem; border: none; border-radius: 0.5rem; font-size: 1rem; font-weight: 600; cursor: pointer; color: #fff; }
    .btn-approve { background: #16a34a; }
    .btn-reject { background: #dc2626; }
    .btn-issue { background: #005196; }
    .hidden { display: none; }
    .success { text-align: center; padding: 2rem 0; }
  </style>
</head>
<body>
  <div class="container">
    <h1>Approval & Issuance</h1>
    <div class="app-card">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem">
        <div><h2 style="font-size:1.125rem;font-weight:700">Caste Certificate</h2><p style="font-size:0.875rem;color:#6b7280">APP-2026-78432 | Rajesh Kumar</p></div>
        <span class="status status-review" id="statusBadge">UNDER REVIEW</span>
      </div>
    </div>
    <div id="reviewPanel" class="app-card">
      <h3 style="font-weight:700;margin-bottom:1rem">Officer Action</h3>
      <textarea id="remarks" rows="3" placeholder="Add remarks (required for rejection)"></textarea>
      <div class="actions">
        <button class="btn btn-reject" onclick="rejectApp()">Reject</button>
        <button class="btn btn-approve" onclick="approveApp()">Approve</button>
      </div>
    </div>
    <div id="approvedPanel" class="hidden app-card success">
      <h3 style="font-weight:700;margin-bottom:1rem">Application Approved</h3>
      <button class="btn btn-issue" style="flex:none;width:auto;padding:0.75rem 2rem" onclick="issueApp()">Issue Certificate</button>
    </div>
    <div id="issuedPanel" class="hidden app-card success">
      <h3 style="font-weight:700;margin-bottom:1rem">Certificate Issued</h3>
      <button class="btn btn-issue" style="flex:none;width:auto;padding:0.75rem 2rem">Download Certificate</button>
    </div>
  </div>
  <script>
    function approveApp(){document.getElementById('reviewPanel').classList.add('hidden');document.getElementById('approvedPanel').classList.remove('hidden');document.getElementById('statusBadge').textContent='APPROVED';document.getElementById('statusBadge').className='status status-approved';}
    function rejectApp(){if(!document.getElementById('remarks').value.trim()){alert('Remarks required');return;}document.getElementById('reviewPanel').classList.add('hidden');document.getElementById('statusBadge').textContent='REJECTED';document.getElementById('statusBadge').className='status';document.getElementById('statusBadge').style.background='#fecaca';document.getElementById('statusBadge').style.color='#991b1b';}
    function issueApp(){document.getElementById('approvedPanel').classList.add('hidden');document.getElementById('issuedPanel').classList.remove('hidden');document.getElementById('statusBadge').textContent='ISSUED';document.getElementById('statusBadge').className='status status-issued';}
  </script>
</body>
</html>`;

function ApprovalCodeDownloads() {
  const [copiedId, setCopiedId] = React.useState<string | null>(null);
  const copyToClipboard = (code: string, id: string) => { navigator.clipboard.writeText(code); setCopiedId(id); setTimeout(() => setCopiedId(null), 2000); };
  const downloadCode = (code: string, filename: string) => { const blob = new Blob([code], { type: 'text/plain' }); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = filename; a.click(); URL.revokeObjectURL(url); };
  const lanes = [
    { key: 'react', title: 'React', desc: 'TypeScript + Officer Actions', code: APPROVAL_REACT_CODE, filename: 'ApprovalIssuancePage.tsx' },
    { key: 'angular', title: 'Angular', desc: 'Standalone Component', code: APPROVAL_ANGULAR_CODE, filename: 'approval-issuance.component.ts' },
    { key: 'html', title: 'HTML / CSS / JS', desc: 'No framework needed', code: APPROVAL_HTML_CODE, filename: 'approval-issuance.html' },
  ];
  return (
    <section id="code-downloads" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Code Downloads</h2>
        <p className="text-muted-foreground mt-1">Production-ready Approval & Issuance implementations.</p>
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
                <div className="rounded-xl border border-border bg-slate-950 p-3 text-xs text-slate-100 shadow-inner max-h-64 overflow-auto">
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


// ==================== SIDEBAR ====================

function MetadataPanel() {
  return (
    <div className="border-2 border-border rounded-lg overflow-hidden bg-card">
      <div className="bg-muted border-b-2 border-border px-4 py-3">
        <h3 className="font-bold text-foreground text-sm">Pattern Metadata</h3>
      </div>
      <div className="p-4 space-y-3 text-sm">
        <MetadataRow label="Pattern ID" value="UX4G-PAT-006" />
        <MetadataRow label="Category" value="Outcome Delivery" />
        <MetadataRow label="Complexity" value="High" />
        <MetadataRow label="Implementation" value="3-4 weeks" />
        <MetadataRow label="Updated" value="April 2026" />
        <MetadataRow label="Status" value="Stable (v1.0.0)" />
      </div>
    </div>
  );
}

function QuickRefPanel() {
  return (
    <div className="border-2 border-blue-200 dark:border-blue-800 rounded-lg overflow-hidden bg-blue-50">
      <div className="bg-blue-100 border-b-2 border-blue-200 dark:border-blue-800 px-4 py-3">
        <h3 className="font-bold text-foreground text-sm">Quick Reference</h3>
      </div>
      <div className="p-4 space-y-3 text-sm">
        <QuickRefRow label="Outcome States" value="5 states" />
        <QuickRefRow label="Notification Channels" value="SMS + Email + Push" />
        <QuickRefRow label="Components" value="9 core components" />
        <QuickRefRow label="WCAG Level" value="AA" />
        <QuickRefRow label="Languages" value="Hindi + English min" />
        <QuickRefRow label="Digital Adoption" value="82%" />
      </div>
    </div>
  );
}

function DesignPrinciples() {
  return (
    <div className="border-2 border-green-200 dark:border-green-800 rounded-lg overflow-hidden bg-green-50">
      <div className="bg-green-100 border-b-2 border-green-200 dark:border-green-800 px-4 py-3">
        <h3 className="font-bold text-foreground text-sm">Core Principles</h3>
      </div>
      <div className="p-4 space-y-3 text-sm text-muted-foreground">
        <PrincipleItem icon={<Target size={14} />} text="Clarity: Multi-modal state indicators" />
        <PrincipleItem icon={<Shield size={14} />} text="Authority: Official design, verification" />
        <PrincipleItem icon={<Eye size={14} />} text="Accessibility: Not color-only, ARIA labels" />
        <PrincipleItem icon={<Zap size={14} />} text="Action: Clear next steps, downloads" />
      </div>
    </div>
  );
}

function RiskIndicators() {
  return (
    <div className="border-2 border-red-200 dark:border-red-800 rounded-lg overflow-hidden bg-red-50">
      <div className="bg-red-100 border-b-2 border-red-200 dark:border-red-800 px-4 py-3 flex items-center gap-2">
        <AlertTriangle size={16} className="text-red-700" />
        <h3 className="font-bold text-foreground text-sm">Risk Indicators</h3>
      </div>
      <div className="p-4 space-y-3 text-sm text-muted-foreground">
        <RiskItem severity="high" risk="Color-only state indicators" />
        <RiskItem severity="high" risk="Vague rejection messages" />
        <RiskItem severity="high" risk="No document verification" />
        <RiskItem severity="medium" risk="No download/print option" />
        <RiskItem severity="medium" risk="No appeal pathway" />
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
        <RelatedLink title="Renewal" />
        <RelatedLink title="Document Verification" />
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

function OutcomeStateCard({ state, color, icon, description, userAction }: any) {
  const colorConfig: any = {
    blue: { bg: 'bg-blue-50', border: 'border-blue-300' },
    yellow: { bg: 'bg-yellow-50', border: 'border-yellow-300' },
    green: { bg: 'bg-green-50', border: 'border-green-300' },
    red: { bg: 'bg-red-50', border: 'border-red-300' },
    teal: { bg: 'bg-teal-50', border: 'border-teal-300' }
  };

  return (
    <div className={`border-2 ${colorConfig[color].border} ${colorConfig[color].bg} rounded-lg p-4`}>
      <div className="flex items-start gap-3 mb-3">
        <div className="flex-shrink-0">{icon}</div>
        <div className="flex-1">
          <div className="font-bold text-sm text-foreground mb-1">{state}</div>
          <div className="text-sm text-muted-foreground mb-2">{description}</div>
          <div className="text-xs text-muted-foreground"><strong>User Action:</strong> {userAction}</div>
        </div>
      </div>
    </div>
  );
}

function FlowStep({ number, label, status }: any) {
  const statusConfig: any = {
    entry: { bg: 'bg-muted', border: 'border-gray-400', text: 'text-muted-foreground' },
    active: { bg: 'bg-blue-50', border: 'border-blue-400', text: 'text-blue-700' },
    decision: { bg: 'bg-yellow-50', border: 'border-yellow-400', text: 'text-yellow-700' },
    critical: { bg: 'bg-purple-50', border: 'border-purple-400', text: 'text-purple-700' },
    success: { bg: 'bg-green-50', border: 'border-green-400', text: 'text-green-700' },
    error: { bg: 'bg-red-50', border: 'border-red-400', text: 'text-red-700' },
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

function StatusCard({ icon, title, value, detail }: any) {
  return (
    <div className="border-2 border-border rounded-lg p-4 bg-card">
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0">{icon}</div>
        <div>
          <div className="text-sm text-muted-foreground mb-1">{title}</div>
          <div className="font-bold text-foreground mb-2">{value}</div>
          <div className="text-xs text-muted-foreground">{detail}</div>
        </div>
      </div>
    </div>
  );
}

function TimelineItem({ date, status, description, active, icon }: any) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex flex-col items-center">
        <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${active ? 'bg-blue-600 border-blue-600' : 'bg-card border-border'}`}>
          {active ? <div className="text-white">{icon}</div> : icon}
        </div>
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

function RequiredInfoItem({ title, description, format, deadline }: any) {
  return (
    <div className="border-2 border-yellow-300 bg-yellow-50 dark:bg-yellow-950/30 rounded-lg p-4">
      <div className="font-bold text-foreground mb-2">{title}</div>
      <div className="text-sm text-muted-foreground mb-2">{description}</div>
      <div className="grid grid-cols-2 gap-4 text-xs text-muted-foreground">
        <div><strong>Format:</strong> {format}</div>
        <div><strong>Deadline:</strong> {deadline}</div>
      </div>
    </div>
  );
}

function ApprovalDetailCard({ icon, title, value, detail }: any) {
  return (
    <div className="border-2 border-border rounded-lg p-4 bg-card">
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0">{icon}</div>
        <div>
          <div className="text-sm text-muted-foreground mb-1">{title}</div>
          <div className="font-bold text-lg text-foreground mb-1">{value}</div>
          <div className="text-xs text-muted-foreground">{detail}</div>
        </div>
      </div>
    </div>
  );
}

function DetailRow({ label, value }: any) {
  return (
    <div>
      <div className="text-muted-foreground mb-1">{label}</div>
      <div className="text-foreground">{value}</div>
    </div>
  );
}

function RejectionReason({ reason, detail, solution }: any) {
  return (
    <div className="border-2 border-red-300 bg-card rounded-lg p-4">
      <div className="font-bold text-sm text-foreground mb-2 flex items-center gap-2">
        <XCircle size={16} className="text-red-600" />
        {reason}
      </div>
      <div className="text-sm text-muted-foreground mb-2">{detail}</div>
      <div className="text-sm text-green-700 bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded p-2">
        <strong>Solution:</strong> {solution}
      </div>
    </div>
  );
}

function OptionCard({ icon, title, description, action }: any) {
  return (
    <div className="border-2 border-border rounded-lg p-4 bg-card hover:border-blue-600 cursor-pointer transition-colors">
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0">{icon}</div>
        <div className="flex-1">
          <div className="font-bold text-sm text-foreground mb-1">{title}</div>
          <div className="text-sm text-muted-foreground mb-2">{description}</div>
          <div className="text-xs font-bold text-blue-600">{action}</div>
        </div>
      </div>
    </div>
  );
}

function LicenseField({ label, value }: any) {
  return (
    <div>
      <div className="text-xs text-muted-foreground mb-1">{label}</div>
      <div className="font-bold text-sm text-foreground">{value}</div>
    </div>
  );
}

function ValidityCard({ label, value, icon }: any) {
  return (
    <div className="border-2 border-border rounded-lg p-4 bg-card text-center">
      <div className="flex justify-center mb-2">{icon}</div>
      <div className="text-sm text-muted-foreground mb-1">{label}</div>
      <div className="font-bold text-lg text-foreground">{value}</div>
    </div>
  );
}

function NextStepBlock({ number, title, description, link }: any) {
  return (
    <div className="flex items-start gap-4 p-4 bg-background border-l-4 border-blue-600 rounded">
      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
        {number}
      </div>
      <div className="flex-1">
        <div className="font-bold text-sm text-foreground mb-1">{title}</div>
        <div className="text-sm text-muted-foreground mb-2">{description}</div>
        <a href="#" className="text-sm font-bold text-blue-600 hover:underline">{link} →</a>
      </div>
    </div>
  );
}

function PageAnnotation({ items }: any) {
  return (
    <div className="mt-4 bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-600 p-4">
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

function StateIndicator({ state, icon, color, aria }: any) {
  const colorConfig: any = {
    blue: { bg: 'bg-blue-50', border: 'border-blue-400', text: 'text-blue-700' },
    yellow: { bg: 'bg-yellow-50', border: 'border-yellow-400', text: 'text-yellow-700' },
    green: { bg: 'bg-green-50', border: 'border-green-400', text: 'text-green-700' },
    gray: { bg: 'bg-background', border: 'border-gray-400', text: 'text-muted-foreground' },
    teal: { bg: 'bg-teal-50', border: 'border-teal-400', text: 'text-teal-700' }
  };

  return (
    <div className={`border-2 ${colorConfig[color].border} ${colorConfig[color].bg} rounded-lg p-3 text-center`}>
      <div className={`flex justify-center mb-2 ${colorConfig[color].text}`}>{icon}</div>
      <div className="text-xs font-bold text-foreground mb-1">{state}</div>
      <div className="text-xs text-muted-foreground italic">"{aria}"</div>
    </div>
  );
}

function ScreenReaderExample({ state, code, announcement }: any) {
  return (
    <div className="border-2 border-purple-300 bg-purple-50 dark:bg-purple-950/30 rounded-lg p-4">
      <div className="font-bold text-sm text-foreground mb-2">{state} State</div>
      <div className="text-xs text-muted-foreground bg-card border border-purple-200 dark:border-purple-800 rounded p-2 mb-2 font-mono">
        {code}
      </div>
      <div className="text-sm text-muted-foreground">
        <strong>Announcement:</strong> "{announcement}"
      </div>
    </div>
  );
}

function NotificationChannel({ event, channels, timing, content }: any) {
  return (
    <div className="border-2 border-blue-300 bg-blue-50 dark:bg-blue-950/30 rounded-lg p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
        <div>
          <div className="font-bold text-foreground mb-1">{event}</div>
        </div>
        <div>
          <div className="text-muted-foreground mb-1">Channels</div>
          <div className="text-foreground">{channels.join(', ')}</div>
        </div>
        <div>
          <div className="text-muted-foreground mb-1">Timing</div>
          <div className="text-foreground">{timing}</div>
        </div>
        <div>
          <div className="text-muted-foreground mb-1">Content</div>
          <div className="text-foreground">{content}</div>
        </div>
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
          <div className="text-sm text-foreground bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded p-2">"{good}"</div>
        </div>
        <div>
          <div className="flex items-center gap-2 mb-1">
            <XCircle size={14} className="text-red-600" />
            <span className="text-xs font-bold text-red-700">Bad</span>
          </div>
          <div className="text-sm text-foreground bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded p-2">"{bad}"</div>
        </div>
      </div>
    </div>
  );
}

function LanguagePattern({ element, pattern, example, why }: any) {
  return (
    <div className="border-2 border-blue-300 bg-blue-50 dark:bg-blue-950/30 rounded-lg p-4">
      <div className="font-bold text-sm text-foreground mb-2">{element}</div>
      <div className="text-sm text-muted-foreground mb-2"><strong>Pattern:</strong> {pattern}</div>
      <div className="text-xs text-muted-foreground bg-card border border-blue-200 dark:border-blue-800 rounded p-2 mb-2 italic">
        <strong>Example:</strong> {example}
      </div>
      <div className="text-xs text-muted-foreground"><strong>Why:</strong> {why}</div>
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
    <div className="border-l-4 border-red-600 bg-red-50 dark:bg-red-950/30 p-4 rounded-r-lg">
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
