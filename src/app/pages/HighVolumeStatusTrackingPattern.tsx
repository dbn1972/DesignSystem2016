import { Search, Eye, CheckCircle, Clock, AlertCircle, XCircle, RefreshCw, Bell, Phone, Mail, MessageSquare, HelpCircle, ArrowRight, ChevronRight, Check, Info, AlertTriangle, Calendar, Users, FileText, Shield, Globe, Code, BarChart3, Target, Zap, Download, ExternalLink, Hash, Smartphone, MapPin, Share2, Printer } from "lucide-react";

// UX4G Service Pattern Library - High-Volume Status Tracking
export default function HighVolumeStatusTrackingPattern() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b-2 border-border">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-8">
          <div className="flex items-start justify-between">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-16 h-16 bg-muted border-2 border-border rounded flex items-center justify-center">
                  <Search size={32} className="text-muted-foreground" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">UX4G Service Pattern Library</div>
                  <h1 className="text-3xl font-bold text-foreground">High-Volume Status Tracking</h1>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Scalable status tracking pattern for high-volume government services. Enables millions of citizens to check application 
                progress, understand current stage, know pending actions, and get reassurance with minimal server load.
              </p>
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-sm"></div>
                  <span className="text-muted-foreground">Pattern ID: <span className="font-bold text-foreground">UX4G-PAT-008</span></span>
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
              { id: "status-model", label: "Status Model" },
              { id: "components", label: "Components" },
              { id: "accessibility", label: "Accessibility" },
              { id: "content", label: "Content" },
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
            <StatusModel />
            <ComponentsUsed />
            <AccessibilityGuidance />
            <ContentGuidance />
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
              High-volume government services receive millions of status queries daily. Citizens repeatedly check progress, 
              causing server overload, anxiety, and support ticket floods. Status communication is unclear, creating mistrust.
            </p>
            <div className="space-y-3">
              <ProblemSolutionBlock
                icon={<AlertCircle size={18} className="text-orange-600" />}
                problem="Citizens check status 5-10 times/day due to uncertainty and anxiety"
                solution="Clear timeline, next expected date, and reassuring language reduce repeat checks by 60%"
              />
              <ProblemSolutionBlock
                icon={<Clock size={18} className="text-blue-600" />}
                problem="No transparency on delays - citizens think application is lost"
                solution="Honest delay communication with reason, new timeline, and apology builds trust"
              />
              <ProblemSolutionBlock
                icon={<Phone size={18} className="text-red-600" />}
                problem="Support centers overwhelmed with 'where is my application?' calls"
                solution="Self-service status + escalation path + callback option reduces calls by 70%"
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
                description="Checking status of submitted applications"
                percentage="95%"
              />
              <UserGroup
                icon={<Phone size={18} className="text-green-600" />}
                name="Support Staff"
                description="Answering status queries, updating systems"
                percentage="4%"
              />
              <UserGroup
                icon={<Shield size={18} className="text-purple-600" />}
                name="Third-Party Verifiers"
                description="Employers, banks checking application status"
                percentage="1%"
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
              title="Identity and Certificates"
              examples={[
                "Passport application tracking (8M/year)",
                "Aadhaar card status (50M/year)",
                "PAN card application tracking",
                "Birth/death certificate status"
              ]}
            />
            <UseCaseCard
              title="Licenses and Registrations"
              examples={[
                "Driving license application status",
                "Vehicle registration tracking",
                "Business registration status",
                "Professional license tracking"
              ]}
            />
            <UseCaseCard
              title="Benefits and Entitlements"
              examples={[
                "Scholarship application status (15M/year)",
                "Pension approval tracking",
                "Subsidy disbursement tracking",
                "Ration card renewal status"
              ]}
            />
          </div>
        </ModuleContent>
      </DocModule>

      <DocModule>
        <ModuleHeader title="Status States Overview" />
        <ModuleContent>
          <div className="space-y-4">
            <StatusStateCard
              state="Submitted"
              color="gray"
              icon={<FileText size={20} className="text-muted-foreground" />}
              description="Application received and logged. Awaiting assignment to officer."
              userExpectation="Acknowledgment and reference number"
            />
            <StatusStateCard
              state="In Progress"
              color="blue"
              icon={<Clock size={20} className="text-blue-600" />}
              description="Being processed. Documents verified, eligibility checked, review underway."
              userExpectation="Current stage, expected completion date, what's being checked"
            />
            <StatusStateCard
              state="Action Needed"
              color="yellow"
              icon={<AlertCircle size={20} className="text-yellow-600" />}
              description="Pending user action (additional docs, clarification, payment)."
              userExpectation="What to do, deadline, consequences of missing deadline"
            />
            <StatusStateCard
              state="Completed"
              color="green"
              icon={<CheckCircle size={20} className="text-green-600" />}
              description="Application approved/issued. Final document ready for download/collection."
              userExpectation="Download link, collection details, validity info"
            />
            <StatusStateCard
              state="Delayed"
              color="orange"
              icon={<RefreshCw size={20} className="text-orange-600" />}
              description="Taking longer than expected. Reason provided, new timeline given."
              userExpectation="Why delayed, new expected date, who's responsible, escalation option"
            />
            <StatusStateCard
              state="Rejected"
              color="red"
              icon={<XCircle size={20} className="text-red-600" />}
              description="Application does not meet criteria. Specific reasons provided."
              userExpectation="Exact reasons, appeal option, reapply guidance"
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
        <ModuleHeader title="End-to-End Flow Diagram (Status Check Journey)" />
        <ModuleContent>
          <div className="space-y-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              <FlowStep number="01" label="Entry" status="entry" />
              <FlowStep number="02" label="Lookup" status="active" />
              <FlowStep number="03" label="Verify (if needed)" status="decision" />
              <FlowStep number="04" label="Status Overview" status="info" />
              <FlowStep number="05" label="Timeline View" status="info" />
            </div>
            <div className="flex items-center justify-center">
              <ArrowRight className="text-gray-400" size={24} />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              <FlowStep number="06a" label="Completed" status="success" />
              <FlowStep number="06b" label="In Progress" status="active" />
              <FlowStep number="06c" label="Action Needed" status="warning" />
              <FlowStep number="06d" label="Delayed" status="warning" />
              <FlowStep number="06e" label="Rejected" status="error" />
            </div>
            <div className="flex items-center justify-center">
              <ArrowRight className="text-gray-400" size={24} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <FlowStep number="07" label="Next Actions" status="info" />
              <FlowStep number="08" label="Escalation/Help" status="info" />
              <FlowStep number="09" label="Notifications" status="info" />
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
              title="Tracking Entry / Lookup"
              description="Enter application/reference number to track status. Support multiple ID types (Aadhaar, Application ID, Mobile)."
              required={true}
            />
            <PageSequenceRow
              number="2"
              title="Identity Verification (if needed)"
              description="For sensitive services, verify identity via OTP or partial details before showing status."
              required={false}
            />
            <PageSequenceRow
              number="3"
              title="Status Overview (High-Level)"
              description="Current stage, expected completion, last update. Scannable at-a-glance view."
              required={true}
            />
            <PageSequenceRow
              number="4"
              title="Stage-by-Stage Timeline"
              description="Visual timeline showing completed steps, current step, pending steps with dates."
              required={true}
            />
            <PageSequenceRow
              number="5"
              title="Action Needed (if applicable)"
              description="What user needs to do, deadline, how to do it. Upload or payment links."
              required={false}
            />
            <PageSequenceRow
              number="6"
              title="Delayed Status Communication"
              description="Honest explanation of delay, new timeline, apology, escalation option."
              required={false}
            />
            <PageSequenceRow
              number="7"
              title="Completed / Download"
              description="Congratulations message, download final document, print option, validity info."
              required={false}
            />
            <PageSequenceRow
              number="8"
              title="Escalation / Help"
              description="Contact support, request callback, file complaint, FAQs."
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

      {/* Tracking Lookup */}
      <DocModule>
        <ModuleHeader title="Page 1: Tracking Entry / Lookup" />
        <ModuleContent>
          <div className="border-2 border-border rounded-lg overflow-hidden bg-card">
            <div className="bg-gradient-to-r from-orange-500 via-white to-green-500 p-1">
              <div className="bg-card p-8">
                <div className="text-center mb-6">
                  <h1 className="text-4xl font-bold text-foreground mb-4">Track Your Application</h1>
                  <p className="text-lg text-muted-foreground">
                    Enter your application or reference number to check current status
                  </p>
                </div>
              </div>
            </div>
            <div className="p-8 space-y-6">
              <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6">
                <label className="block text-sm font-bold text-foreground mb-4">
                  Application / Reference Number
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <input
                    type="text"
                    placeholder="e.g., APP-2026-123456 or REF-2026-789012"
                    className="col-span-2 px-6 py-4 border-2 border-border rounded-lg text-xl font-mono text-center"
                  />
                  <button className="px-6 py-4 bg-primary text-white font-bold rounded-lg hover:opacity-90 text-lg flex items-center justify-center gap-2">
                    <Search size={20} />
                    Track Status
                  </button>
                </div>
                <div className="text-sm text-muted-foreground mt-3 text-center">
                  Find your number on the acknowledgment receipt or confirmation email
                </div>
              </div>

              <div className="bg-background border-2 border-border rounded-lg p-6">
                <div className="font-bold text-foreground mb-4">Other Ways to Track</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <TrackingMethodCard
                    icon={<Hash size={24} className="text-blue-600" />}
                    title="Using Aadhaar Number"
                    description="Track with your 12-digit Aadhaar"
                  />
                  <TrackingMethodCard
                    icon={<Phone size={24} className="text-green-600" />}
                    title="Using Mobile Number"
                    description="Track with registered mobile"
                  />
                  <TrackingMethodCard
                    icon={<Mail size={24} className="text-purple-600" />}
                    title="Using Email"
                    description="Track with registered email"
                  />
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-950/30 border-l-4 border-yellow-600 p-6 rounded-r-lg">
                <div className="flex items-start gap-3">
                  <Info size={20} className="text-yellow-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-foreground mb-2">Don't Have Your Number?</div>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>• Check your confirmation SMS or email</p>
                      <p>• Look at your printed acknowledgment receipt</p>
                      <p>• Contact support: <strong>1800-XXX-XXXX</strong> or <strong>support@service.gov.in</strong></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <PageAnnotation items={[
            "Large input field for application number (easy to read and type)",
            "Multiple tracking methods (number, Aadhaar, mobile, email) for flexibility",
            "Visual cards for each method (reduces cognitive load)",
            "Clear guidance on where to find the number",
            "Help option for users who've lost their number",
            "Tricolor header (government branding, builds trust)"
          ]} />
        </ModuleContent>
      </DocModule>

      {/* Status Overview */}
      <DocModule>
        <ModuleHeader title="Page 2: Status Overview (At-a-Glance)" />
        <ModuleContent>
          <div className="border-2 border-border rounded-lg overflow-hidden bg-card">
            <div className="bg-blue-100 border-b-2 border-blue-300 p-8">
              <div className="flex items-center gap-3 mb-4">
                <Clock size={32} className="text-blue-600" />
                <h1 className="text-3xl font-bold text-foreground">Your Application is In Progress</h1>
              </div>
              <p className="text-lg text-muted-foreground">
                We're reviewing your passport application. Expected completion: 15 April 2026.
              </p>
            </div>
            <div className="p-8 space-y-6">
              <div className="bg-background border-2 border-border rounded-lg p-6 text-center">
                <div className="text-sm text-muted-foreground mb-2">Application Number</div>
                <div className="text-3xl font-bold text-foreground font-mono mb-4">APP-2026-123456</div>
                <div className="text-sm text-muted-foreground">Passport Application — Submitted on 1 April 2026</div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <OverviewStat
                  icon={<Clock size={24} className="text-blue-600" />}
                  label="Current Stage"
                  value="Police Verification"
                  detail="Step 3 of 5"
                />
                <OverviewStat
                  icon={<Calendar size={24} className="text-green-600" />}
                  label="Expected Completion"
                  value="15 April 2026"
                  detail="10 working days from now"
                />
                <OverviewStat
                  icon={<Users size={24} className="text-purple-600" />}
                  label="Assigned Officer"
                  value="Passport Office Delhi"
                  detail="Officer ID: PO-DEL-789"
                />
              </div>

              <div className="bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-600 p-6 rounded-r-lg">
                <div className="font-bold text-foreground mb-3">What's Happening Now?</div>
                <div className="text-sm text-muted-foreground">
                  Your application is currently undergoing <strong>police verification</strong>. A police officer will 
                  visit your address to verify your residence and identity. This typically takes 5-7 working days. 
                  Once verification is complete, your passport will be printed and dispatched.
                </div>
              </div>

              <div className="border-2 border-border rounded-lg overflow-hidden">
                <div className="bg-muted border-b-2 border-border px-6 py-4">
                  <h3 className="font-bold text-foreground">Quick Progress Summary</h3>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-600 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                    <div className="text-sm font-bold text-foreground">60% Complete</div>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 text-xs text-center">
                    <ProgressStage label="Submitted" status="complete" />
                    <ProgressStage label="Document Check" status="complete" />
                    <ProgressStage label="Police Verify" status="active" />
                    <ProgressStage label="Printing" status="pending" />
                    <ProgressStage label="Dispatch" status="pending" />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-4 pt-6">
                <button className="px-8 py-3 bg-primary text-white font-bold rounded-lg hover:opacity-90">
                  View Detailed Timeline
                </button>
                <button className="px-8 py-3 bg-card border-2 border-border text-muted-foreground font-bold rounded-lg hover:bg-background">
                  Need Help?
                </button>
              </div>
            </div>
          </div>
          <PageAnnotation items={[
            "Blue 'In Progress' state (active, not complete or error)",
            "Expected completion date prominently displayed (reduces anxiety)",
            "3 key stats: current stage, expected date, assigned officer (transparency)",
            "Plain-language explanation of current stage (what's happening now)",
            "Progress bar (60% complete) with visual stages",
            "Two clear CTAs: View detailed timeline, Need help"
          ]} />
        </ModuleContent>
      </DocModule>

      {/* Timeline View */}
      <DocModule>
        <ModuleHeader title="Page 3: Stage-by-Stage Timeline (Detailed Progress)" />
        <ModuleContent>
          <div className="border-2 border-border rounded-lg overflow-hidden bg-card">
            <div className="bg-background border-b-2 border-border p-6">
              <h2 className="text-xl font-bold text-foreground mb-2">Application Timeline</h2>
              <div className="text-sm text-muted-foreground">Application Number: APP-2026-123456</div>
            </div>
            <div className="p-8">
              <div className="space-y-4">
                <TimelineItem
                  date="5 April 2026, 10:30 AM"
                  stage="Police Verification Initiated"
                  description="Your application has been sent to local police station for address and identity verification. You may receive a visit from a police officer within 5-7 working days."
                  status="active"
                  icon={<Clock size={20} className="text-blue-600" />}
                  progress="current"
                />
                <TimelineItem
                  date="3 April 2026, 2:15 PM"
                  stage="Documents Verified"
                  description="All submitted documents have been verified and approved. Birth certificate, address proof, and identity documents are in order."
                  status="complete"
                  icon={<CheckCircle size={20} className="text-green-600" />}
                  progress="past"
                />
                <TimelineItem
                  date="1 April 2026, 4:30 PM"
                  stage="Application Submitted"
                  description="Your passport application was successfully submitted and assigned application number APP-2026-123456. Confirmation sent to your registered email and mobile."
                  status="complete"
                  icon={<CheckCircle size={20} className="text-green-600" />}
                  progress="past"
                />
                <TimelineItem
                  date="Expected: 10 April 2026"
                  stage="Passport Printing"
                  description="Once police verification is complete and approved, your passport will be printed at the Central Passport Printing Facility."
                  status="pending"
                  icon={<Clock size={20} className="text-gray-400" />}
                  progress="future"
                />
                <TimelineItem
                  date="Expected: 15 April 2026"
                  stage="Dispatch and Delivery"
                  description="Your passport will be dispatched via registered post to your address. You'll receive tracking number via SMS."
                  status="pending"
                  icon={<Clock size={20} className="text-gray-400" />}
                  progress="future"
                />
              </div>
            </div>
          </div>
          <PageAnnotation items={[
            "Vertical timeline with past, current, and future stages",
            "Current stage highlighted in blue (active)",
            "Past stages with green checkmarks (complete)",
            "Future stages in gray with 'Expected' dates (transparency)",
            "Plain-language description for each stage (what it means)",
            "Specific timestamps for past events (accountability)"
          ]} />
        </ModuleContent>
      </DocModule>

      {/* Action Needed */}
      <DocModule>
        <ModuleHeader title="Page 4: Action Needed (User Must Act)" />
        <ModuleContent>
          <div className="border-2 border-border rounded-lg overflow-hidden bg-card">
            <div className="bg-yellow-100 border-b-2 border-yellow-300 p-8">
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle size={32} className="text-yellow-600" />
                <h1 className="text-3xl font-bold text-foreground">Action Required: Upload Missing Document</h1>
              </div>
              <p className="text-lg text-muted-foreground">
                We need additional information to continue processing your application.
              </p>
            </div>
            <div className="p-8 space-y-6">
              <div className="bg-red-50 dark:bg-red-950/30 border-l-4 border-red-600 p-6 rounded-r-lg">
                <div className="flex items-start gap-3">
                  <AlertTriangle size={20} className="text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-foreground mb-2">Urgent: Action Needed by 12 April 2026</div>
                    <div className="text-sm text-muted-foreground">
                      Your application will be <strong>rejected</strong> if you don't complete this action within 
                      <strong> 7 days</strong> (by 12 April 2026 at 11:59 PM).
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-2 border-yellow-300 bg-yellow-50 dark:bg-yellow-950/30 rounded-lg p-6">
                <div className="font-bold text-foreground mb-4">What We Need From You</div>
                <div className="space-y-4">
                  <RequiredActionItem
                    number="1"
                    title="Upload Current Address Proof"
                    description="Your current address proof is outdated (issued in 2022). Upload a recent document issued within the last 6 months."
                    acceptedDocs="Aadhaar card, Electricity bill, Bank statement, Rent agreement"
                    deadline="12 April 2026"
                  />
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-600 p-6 rounded-r-lg">
                <div className="font-bold text-foreground mb-3">How to Upload Document</div>
                <ol className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">1</div>
                    <span>Take a clear photo of your address proof document (ensure all text is readable)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">2</div>
                    <span>Click "Upload Document" button below</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">3</div>
                    <span>Select photo from your phone or computer (PDF, JPG, PNG accepted, max 2 MB)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">4</div>
                    <span>Click "Submit" — you'll receive confirmation via SMS and email</span>
                  </li>
                </ol>
              </div>

              <div className="flex items-center justify-between pt-6 border-t-2 border-border">
                <div className="text-sm text-muted-foreground">
                  <strong>Need Help?</strong> Call <span className="font-bold text-blue-600">1800-XXX-XXXX</span> or 
                  email <span className="font-bold text-blue-600">support@passport.gov.in</span>
                </div>
                <button className="px-10 py-4 bg-orange-600 text-white font-bold rounded-lg hover:bg-orange-700 flex items-center gap-2">
                  <FileText size={20} />
                  Upload Document Now
                </button>
              </div>
            </div>
          </div>
          <PageAnnotation items={[
            "Yellow 'Action Required' state (urgent but not error)",
            "Clear deadline with countdown (7 days remaining)",
            "Specific requirement (current address proof, issued within 6 months)",
            "Accepted document types listed (reduces confusion)",
            "Step-by-step upload instructions (reduces errors)",
            "Consequence of inaction clearly stated (rejection if missed)"
          ]} />
        </ModuleContent>
      </DocModule>

      {/* Delayed Status */}
      <DocModule>
        <ModuleHeader title="Page 5: Delayed Status (Honest Communication)" />
        <ModuleContent>
          <div className="border-2 border-border rounded-lg overflow-hidden bg-card">
            <div className="bg-orange-100 border-b-2 border-orange-300 p-8">
              <div className="flex items-center gap-3 mb-4">
                <RefreshCw size={32} className="text-orange-600" />
                <h1 className="text-3xl font-bold text-foreground">Your Application is Delayed</h1>
              </div>
              <p className="text-lg text-muted-foreground">
                We apologize — your application is taking longer than expected.
              </p>
            </div>
            <div className="p-8 space-y-6">
              <div className="bg-orange-50 dark:bg-orange-950/30 border-l-4 border-orange-600 p-6 rounded-r-lg">
                <div className="flex items-start gap-3 mb-4">
                  <AlertCircle size={20} className="text-orange-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-foreground mb-2">Why This Delay Happened</div>
                    <div className="text-sm text-muted-foreground">
                      Your application was originally scheduled for completion on <strong>15 April 2026</strong>. 
                      However, due to <strong>high volume of police verification requests</strong> in your area, 
                      the local police station is experiencing backlogs.
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <DelayInfoCard
                  label="Original Expected Date"
                  value="15 April 2026"
                  icon={<Calendar size={20} className="text-muted-foreground" />}
                />
                <DelayInfoCard
                  label="New Expected Date"
                  value="25 April 2026"
                  icon={<Calendar size={20} className="text-orange-600" />}
                  highlighted={true}
                />
              </div>

              <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6">
                <div className="font-bold text-foreground mb-3">What We're Doing About It</div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
                    <span>We've sent a reminder to the police station to expedite your verification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Your application has been marked as <strong>priority</strong> for faster processing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
                    <span>You'll receive daily SMS updates until police verification is completed</span>
                  </li>
                </ul>
              </div>

              <div className="bg-background border-2 border-border rounded-lg p-6">
                <div className="font-bold text-foreground mb-3">We Sincerely Apologize</div>
                <div className="text-sm text-muted-foreground mb-4">
                  We understand this delay is frustrating, especially when you're waiting for an important document. 
                  We're committed to completing your application as quickly as possible while ensuring all 
                  verification steps are thorough.
                </div>
                <div className="text-sm text-muted-foreground">
                  <strong>Responsible Officer:</strong> Senior Passport Officer, Delhi Region<br/>
                  <strong>Officer ID:</strong> SPO-DEL-123<br/>
                  <strong>Contact:</strong> spo.delhi@passport.gov.in
                </div>
              </div>

              <div className="flex items-center justify-center gap-4 pt-6">
                <button className="px-8 py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700">
                  File Escalation / Complaint
                </button>
                <button className="px-8 py-3 bg-card border-2 border-border text-muted-foreground font-bold rounded-lg hover:bg-background">
                  Request Callback
                </button>
              </div>
            </div>
          </div>
          <PageAnnotation items={[
            "Orange 'Delayed' state (concern, not error or success)",
            "Honest explanation of WHY delay happened (builds trust)",
            "Original vs new expected date (transparency)",
            "What government is doing about it (accountability)",
            "Apology and acknowledgment of frustration (empathy)",
            "Responsible officer named (no anonymous bureaucracy)",
            "Escalation option clearly visible (empowerment)"
          ]} />
        </ModuleContent>
      </DocModule>

      {/* Completed State */}
      <DocModule>
        <ModuleHeader title="Page 6: Completed State (Success)" />
        <ModuleContent>
          <div className="border-2 border-border rounded-lg overflow-hidden bg-card">
            <div className="bg-green-600 text-white p-12 text-center">
              <div className="w-20 h-20 bg-card rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={48} className="text-green-600" />
              </div>
              <h1 className="text-3xl font-bold mb-4">Your Passport is Ready!</h1>
              <p className="text-lg text-green-100">
                Congratulations! Your passport has been issued and dispatched.
              </p>
            </div>
            <div className="p-8 space-y-6">
              <div className="bg-green-50 dark:bg-green-950/30 border-2 border-green-200 dark:border-green-800 rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Passport Number</div>
                    <div className="text-3xl font-bold text-foreground font-mono mb-2">Z1234567</div>
                    <div className="text-sm text-muted-foreground">Issued on <strong>15 April 2026</strong> • Valid until <strong>15 April 2036</strong></div>
                  </div>
                  <div className="px-4 py-2 bg-green-600 text-white font-bold text-sm rounded">
                    ISSUED
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <CompletionStat
                  icon={<FileText size={24} className="text-blue-600" />}
                  label="Document Type"
                  value="Regular Passport"
                  detail="36 pages, 10-year validity"
                />
                <CompletionStat
                  icon={<Calendar size={24} className="text-green-600" />}
                  label="Dispatch Date"
                  value="16 April 2026"
                  detail="Via Speed Post"
                />
                <CompletionStat
                  icon={<MapPin size={24} className="text-orange-600" />}
                  label="Tracking Number"
                  value="SP123456789IN"
                  detail="Track on India Post website"
                />
              </div>

              <div className="bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-600 p-6 rounded-r-lg">
                <div className="font-bold text-foreground mb-3">Next Steps</div>
                <ol className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">1</div>
                    <span>Your passport will be delivered to your address within <strong>5-7 working days</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">2</div>
                    <span>Track delivery status using Speed Post tracking number: <strong>SP123456789IN</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">3</div>
                    <span>Keep passport safe. Valid for 10 years (until 15 April 2036)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">4</div>
                    <span>Renewal reminder will be sent 6 months before expiry</span>
                  </li>
                </ol>
              </div>

              <div className="flex items-center justify-center gap-4 pt-6">
                <button className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 flex items-center gap-2">
                  <ExternalLink size={18} />
                  Track Delivery on India Post
                </button>
                <button className="px-8 py-3 bg-card border-2 border-border text-muted-foreground font-bold rounded-lg hover:bg-background flex items-center gap-2">
                  <Download size={18} />
                  Download Status Certificate
                </button>
              </div>

              <div className="bg-background border-2 border-border rounded-lg p-4 text-sm text-muted-foreground text-center">
                <strong>Total Processing Time:</strong> 14 days (from submission to dispatch)
              </div>
            </div>
          </div>
          <PageAnnotation items={[
            "Green success state with celebration ('Congratulations!')",
            "Passport number prominently displayed with validity dates",
            "Dispatch tracking number provided (enables citizen to track delivery)",
            "Clear next steps (what happens after issuance)",
            "Total processing time shown (sets expectation for future applicants)",
            "Download option for status certificate (proof of completion)"
          ]} />
        </ModuleContent>
      </DocModule>

      {/* Help/Escalation */}
      <DocModule>
        <ModuleHeader title="Page 7: Escalation and Help Options" />
        <ModuleContent>
          <div className="border-2 border-border rounded-lg overflow-hidden bg-card">
            <div className="bg-background border-b-2 border-border p-6">
              <h2 className="text-xl font-bold text-foreground mb-2">Need Help or Want to Escalate?</h2>
              <div className="text-sm text-muted-foreground">We're here to assist you with your application</div>
            </div>
            <div className="p-8 space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <HelpOptionCard
                  icon={<Phone size={32} className="text-blue-600" />}
                  title="Call Helpline"
                  description="Speak with support agent"
                  detail="1800-XXX-XXXX (Toll-free)"
                  hours="Mon-Sat, 9 AM - 6 PM"
                  action="Call Now"
                />
                <HelpOptionCard
                  icon={<MessageSquare size={32} className="text-green-600" />}
                  title="Request Callback"
                  description="We'll call you within 2 hours"
                  detail="Enter your mobile number"
                  hours="Available 24/7"
                  action="Request Callback"
                />
                <HelpOptionCard
                  icon={<Mail size={32} className="text-purple-600" />}
                  title="Email Support"
                  description="Get detailed written response"
                  detail="support@passport.gov.in"
                  hours="Response within 24 hours"
                  action="Send Email"
                />
                <HelpOptionCard
                  icon={<AlertTriangle size={32} className="text-red-600" />}
                  title="File Complaint"
                  description="Escalate to senior officer"
                  detail="For delays or service issues"
                  hours="Resolved within 7 days"
                  action="File Complaint"
                />
              </div>

              <div className="border-2 border-border rounded-lg overflow-hidden">
                <div className="bg-muted border-b-2 border-border px-6 py-4">
                  <h3 className="font-bold text-foreground">Frequently Asked Questions</h3>
                </div>
                <div className="divide-y-2 divide-border">
                  <FAQItem
                    question="How long does passport processing take?"
                    answer="Normal processing: 15-20 working days. Tatkal (urgent): 3-5 working days. Delays may occur during peak seasons (April-June)."
                  />
                  <FAQItem
                    question="Can I track my application using Aadhaar number?"
                    answer="Yes. Enter your 12-digit Aadhaar number on the tracking page. You can also track using mobile number or email."
                  />
                  <FAQItem
                    question="What if police verification is delayed?"
                    answer="Police verification typically takes 5-7 days. If delayed beyond 10 days, contact local police station or file escalation."
                  />
                  <FAQItem
                    question="How will I receive my passport?"
                    answer="Passport is dispatched via Speed Post to your registered address. Tracking number sent via SMS. Delivery takes 5-7 days."
                  />
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6">
                <div className="font-bold text-foreground mb-3">Other Resources</div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <ResourceLink
                    icon={<FileText size={16} className="text-blue-600" />}
                    title="Application Guidelines"
                    link="View PDF"
                  />
                  <ResourceLink
                    icon={<Globe size={16} className="text-green-600" />}
                    title="Passport Seva Website"
                    link="Visit Website"
                  />
                  <ResourceLink
                    icon={<MapPin size={16} className="text-purple-600" />}
                    title="Find Nearest Office"
                    link="Locate Office"
                  />
                  <ResourceLink
                    icon={<Share2 size={16} className="text-orange-600" />}
                    title="Share Feedback"
                    link="Give Feedback"
                  />
                </div>
              </div>
            </div>
          </div>
          <PageAnnotation items={[
            "Four help options: Call, Callback, Email, Complaint (progressive escalation)",
            "Each option shows expected response time (sets expectations)",
            "Callback option for users who can't call during business hours",
            "Complaint option clearly visible (empowers users)",
            "FAQ section answers common questions (reduces support load)",
            "Additional resources linked (guidelines, website, office locator)"
          ]} />
        </ModuleContent>
      </DocModule>
    </section>
  );
}

// ==================== STATUS MODEL ====================

function StatusModel() {
  return (
    <section id="status-model" className="space-y-6">
      <SectionHeader title="Status Model and Timeline Logic" />

      <DocModule>
        <ModuleHeader title="Status State Machine" />
        <ModuleContent>
          <div className="bg-purple-50 dark:bg-purple-950/30 border-2 border-purple-200 dark:border-purple-800 rounded-lg p-6">
            <div className="flex items-start gap-3 mb-4">
              <Target size={24} className="text-purple-600 flex-shrink-0" />
              <div>
                <div className="font-bold text-foreground mb-2">6 Core Status States</div>
                <div className="text-sm text-muted-foreground">
                  Every application must be in exactly one state at any time. State transitions are logged with 
                  timestamp, officer ID, and reason. Users see plain-language status, not internal codes.
                </div>
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <StateTransition
                from="Submitted"
                to="In Progress"
                condition="Application assigned to officer"
                timing="Within 24 hours of submission"
              />
              <StateTransition
                from="In Progress"
                to="Action Needed"
                condition="Missing documents or clarification required"
                timing="When detected during review"
              />
              <StateTransition
                from="Action Needed"
                to="In Progress"
                condition="User provides requested information"
                timing="Immediately after upload"
              />
              <StateTransition
                from="In Progress"
                to="Delayed"
                condition="Exceeds expected completion date by 3 days"
                timing="Automatic escalation at SLA breach"
              />
              <StateTransition
                from="In Progress"
                to="Completed"
                condition="All checks pass, document issued"
                timing="Final approval by authorized officer"
              />
              <StateTransition
                from="In Progress"
                to="Rejected"
                condition="Does not meet eligibility criteria"
                timing="After thorough review and rejection approval"
              />
            </div>
          </div>
        </ModuleContent>
      </DocModule>

      <DocModule>
        <ModuleHeader title="Delay and Exception Communication Rules" />
        <ModuleContent>
          <div className="space-y-4">
            <DelayRuleBlock
              scenario="Minor Delay (1-3 days over expected date)"
              communication="Update status to 'Delayed'. Show new expected date. Brief reason (e.g., 'High volume')."
              action="No escalation. Automatic SMS notification to user."
              example="'Your application is taking 2 days longer than expected due to high volume. New expected date: 17 April 2026.'"
            />
            <DelayRuleBlock
              scenario="Major Delay (4-7 days over expected date)"
              communication="State changes to 'Delayed'. Full explanation required. Apology. Responsible officer named."
              action="Automatic escalation to supervisor. Daily SMS updates until resolution."
              example="'We apologize for the delay. Police verification backlog in your area. Senior officer monitoring. New date: 22 April 2026.'"
            />
            <DelayRuleBlock
              scenario="Critical Delay (8+ days over expected date)"
              communication="High-priority alert. Detailed explanation, apology, compensation if applicable. Direct officer contact provided."
              action="Escalation to regional head. Offer callback. Mark as priority for immediate action."
              example="'Sincere apologies. System error caused 10-day delay. Officer will call you today. Priority processing initiated. Contact SPO-DEL-123.'"
            />
            <DelayRuleBlock
              scenario="Technical Failure"
              communication="Honest acknowledgment of system issue. What failed, what was lost, recovery timeline."
              action="Immediate notification. Offer to resubmit with expedited processing. No additional fees."
              example="'System error on 5 April lost your uploaded document. Please re-upload. Fast-track processing guaranteed. No penalty.'"
            />
          </div>
        </ModuleContent>
      </DocModule>

      <DocModule>
        <ModuleHeader title="Timeline Calculation Logic" />
        <ModuleContent>
          <div className="space-y-4">
            <TimelineCalculation
              stage="Submission to Assignment"
              calculation="Auto-assignment within 24 hours (next business day if submitted on weekend)"
              display="'Your application will be assigned to an officer by [date]'"
            />
            <TimelineCalculation
              stage="Document Verification"
              calculation="2-3 working days (flagged if exceeds 5 days)"
              display="'Documents being verified. Expected completion: [date] (2-3 days)'"
            />
            <TimelineCalculation
              stage="Police Verification"
              calculation="5-7 working days from initiation (varies by location)"
              display="'Police verification in progress. Typically takes 5-7 days. Expected: [date]'"
            />
            <TimelineCalculation
              stage="Printing and Dispatch"
              calculation="2-3 working days after final approval"
              display="'Your passport will be printed and dispatched by [date]'"
            />
            <TimelineCalculation
              stage="Total Processing Time"
              calculation="Sum of all stages + 2-day buffer = 15-20 working days"
              display="'Expected completion: [date] (15-20 working days from submission)'"
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
            <ComponentCard name="Search Input" variants="Large, with icon" usage="Application number lookup" />
            <ComponentCard name="Status Badge" variants="6 states with colors" usage="Current status indicator" />
            <ComponentCard name="Progress Bar" variants="Linear, percentage" usage="Completion percentage" />
            <ComponentCard name="Timeline" variants="Vertical, past/present/future" usage="Stage-by-stage progress" />
            <ComponentCard name="Alert Banner" variants="Info, Warning, Error, Success" usage="Status announcements" />
            <ComponentCard name="Card" variants="Stat cards, help cards" usage="Information grouping" />
            <ComponentCard name="Button" variants="Primary, Secondary, Icon" usage="Actions (track, download, help)" />
            <ComponentCard name="Accordion / FAQ" variants="Expandable Q&A" usage="Help and FAQs" />
            <ComponentCard name="Link" variants="External, internal" usage="Tracking links, resources" />
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
        <ModuleHeader title="WCAG 2.1 AA Requirements for Status Tracking" />
        <ModuleContent>
          <div className="grid grid-cols-2 gap-6">
            <AccessibilityBlock
              area="Status Communication"
              requirements={[
                "Use text labels + icons (not color alone) for status",
                "Screen reader announces status: 'Application status: In Progress'",
                "Status changes trigger aria-live region updates",
                "Clear focus indicators on all interactive elements",
                "Keyboard navigation: Tab through timeline, Enter to expand details"
              ]}
            />
            <AccessibilityBlock
              area="Timeline Visualization"
              requirements={[
                "Timeline accessible via keyboard (Tab between stages)",
                "Each stage has aria-label with full description",
                "Past/present/future differentiated by text + icon + color",
                "Screen reader reads timeline top-to-bottom chronologically",
                "Timestamps in accessible format (9 April 2026, 10:30 AM)"
              ]}
            />
            <AccessibilityBlock
              area="Search and Lookup"
              requirements={[
                "Search input has clear label and placeholder",
                "Error messages linked via aria-describedby",
                "Submit button keyboard accessible (Enter key)",
                "Loading state announced to screen readers",
                "Results announced when status is retrieved"
              ]}
            />
            <AccessibilityBlock
              area="Help and Escalation"
              requirements={[
                "Help options presented as list with clear structure",
                "Phone numbers as clickable links (tel: protocol)",
                "Email addresses as clickable links (mailto: protocol)",
                "FAQ accordion keyboard accessible (Space to toggle)",
                "Escalation path clearly signposted with headings"
              ]}
            />
          </div>
        </ModuleContent>
      </DocModule>

      <DocModule>
        <ModuleHeader title="Multi-Visit Optimization (Returning Users)" />
        <ModuleContent>
          <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6">
            <div className="flex items-start gap-3 mb-4">
              <RefreshCw size={24} className="text-blue-600 flex-shrink-0" />
              <div>
                <div className="font-bold text-foreground mb-2">Reducing Friction for Repeat Visitors</div>
                <div className="text-sm text-muted-foreground">
                  Users check status 5-10 times during processing. Optimize for quick re-entry and progressive disclosure.
                </div>
              </div>
            </div>
            <div className="space-y-3 text-sm text-muted-foreground">
              <OptimizationTip
                tip="Remember Last Search"
                implementation="Store application number in localStorage. Pre-fill on return visit. Show 'Track last application' quick link."
              />
              <OptimizationTip
                tip="Progressive Disclosure"
                implementation="Show high-level status first. 'View detailed timeline' expands full history. Reduces cognitive load."
              />
              <OptimizationTip
                tip="Change Highlighting"
                implementation="Show 'Updated today' badge on new status changes. Highlight new timeline entries since last visit."
              />
              <OptimizationTip
                tip="Notification Preferences"
                implementation="Offer SMS/email notifications. Reduce need to check manually. 'Notify me on status change' toggle."
              />
            </div>
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
        <ModuleHeader title="Plain-Language Status Communication" />
        <ModuleContent>
          <div className="space-y-6">
            <ToneBlock
              context="In Progress (Normal)"
              tone="Reassuring and Transparent"
              good="Your application is being reviewed. Documents verified. Police verification in progress. Expected completion: 15 April 2026."
              bad="Application status: Stage 3. ETA: 15/04/2026."
            />
            <ToneBlock
              context="Delayed (Apologetic)"
              tone="Honest, Apologetic, Accountable"
              good="We sincerely apologize for the delay. Police verification backlog in your area. New expected date: 22 April 2026. Officer ID: PO-DEL-789."
              bad="Delayed. New ETA: 22/04/2026."
            />
            <ToneBlock
              context="Action Needed (Urgent but Helpful)"
              tone="Clear, Specific, Helpful"
              good="Urgent: Upload current address proof by 12 April. We need a document issued within last 6 months (Aadhaar, bill, bank statement)."
              bad="Action required. Upload document. Deadline: 12/04/2026."
            />
            <ToneBlock
              context="Completed (Celebratory)"
              tone="Congratulatory and Informative"
              good="Congratulations! Your passport (Z1234567) has been issued. Dispatched via Speed Post. Track: SP123456789IN. Delivery in 5-7 days."
              bad="Status: Issued. Dispatch date: 16/04/2026."
            />
          </div>
        </ModuleContent>
      </DocModule>

      <DocModule>
        <ModuleHeader title="Multilingual Guidance" />
        <ModuleContent>
          <div className="bg-purple-50 dark:bg-purple-950/30 border-2 border-purple-200 dark:border-purple-800 rounded-lg p-6">
            <div className="flex items-start gap-3 mb-4">
              <Globe size={24} className="text-purple-600 flex-shrink-0" />
              <div>
                <div className="font-bold text-foreground mb-2">Language Support for High-Volume Services</div>
                <div className="text-sm text-muted-foreground">
                  Status tracking must support Hindi and English minimum. State-specific services should add regional language. 
                  SMS notifications sent in user's preferred language.
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <MultilingualItem
                aspect="Status Labels"
                requirement="'In Progress' = 'प्रगति में' (Hindi). All 6 status states translated consistently."
              />
              <MultilingualItem
                aspect="Timeline Stages"
                requirement="Each stage name translated. Dates in DD/MM/YYYY format (Indian standard)."
              />
              <MultilingualItem
                aspect="SMS Notifications"
                requirement="User selects language at registration. All SMS sent in chosen language."
              />
              <MultilingualItem
                aspect="Help and Support"
                requirement="Helpline supports Hindi + English. Regional language if available in state."
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
        <ModuleHeader title="Frontend Requirements (High-Volume Optimization)" />
        <ModuleContent>
          <div className="space-y-4">
            <ImplementationItem
              category="Caching Strategy"
              requirement="Cache status data for 5 minutes. Use ETag/Last-Modified headers. Reduce server load by 80% for repeat visitors."
              priority="critical"
            />
            <ImplementationItem
              category="Progressive Loading"
              requirement="Show basic status immediately. Load detailed timeline on demand ('View details' expansion). Lazy-load help/FAQ."
              priority="critical"
            />
            <ImplementationItem
              category="Offline Support"
              requirement="Service worker caches last viewed status. Shows cached data if network fails + 'Offline' badge. Sync when online."
              priority="required"
            />
            <ImplementationItem
              category="Real-Time Updates"
              requirement="WebSocket or polling (every 30 seconds) for active status checks. Visual indicator when status changes."
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
              category="Status API Design"
              requirement="GET /api/status/:application_id. Returns: {status, stage, last_update, expected_date, next_action}. Rate limit: 10 req/min per IP."
              priority="critical"
            />
            <ImplementationItem
              category="SLA Monitoring"
              requirement="Track expected_completion_date vs actual. Auto-escalate if breach. Daily report of delayed applications to supervisors."
              priority="critical"
            />
            <ImplementationItem
              category="Notification System"
              requirement="Send SMS on: submission, status change, action needed, delay, completion. Queue-based (Kafka/RabbitMQ) for reliability."
              priority="critical"
            />
            <ImplementationItem
              category="Analytics and Logging"
              requirement="Log every status view (app_id, timestamp, user_agent). Track: avg checks per application, peak hours, delay reasons."
              priority="required"
            />
          </div>
        </ModuleContent>
      </DocModule>

      <DocModule>
        <ModuleHeader title="Analytics Events" />
        <ModuleContent>
          <div className="space-y-3">
            <AnalyticsEvent event="status_lookup_initiated" description="User enters application number (track: app_id, lookup_method: number/aadhaar/mobile)" />
            <AnalyticsEvent event="status_retrieved_successfully" description="Status displayed to user (track: current_status, time_since_submission)" />
            <AnalyticsEvent event="timeline_expanded" description="User clicks to view detailed timeline (measure engagement)" />
            <AnalyticsEvent event="action_needed_viewed" description="User sees action-needed page (track: action_type, deadline)" />
            <AnalyticsEvent event="delayed_status_viewed" description="User sees delay communication (track: delay_reason, new_expected_date)" />
            <AnalyticsEvent event="completed_status_viewed" description="User sees completion page (track: total_processing_days)" />
            <AnalyticsEvent event="help_option_clicked" description="User clicks help/escalation (track: help_type: call/email/callback/complaint)" />
            <AnalyticsEvent event="faq_item_expanded" description="User expands FAQ (track: question_id to identify common queries)" />
            <AnalyticsEvent event="tracking_link_shared" description="User clicks 'Share status' (track: share_method: SMS/email/print)" />
            <AnalyticsEvent event="notification_preference_set" description="User opts in/out of SMS/email notifications" />
            <AnalyticsEvent event="repeat_status_check" description="Same user checks status again (track: time_since_last_check, total_checks)" />
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
            <ConformanceItem checked label="Supports multiple lookup methods (app number, Aadhaar, mobile, email)" />
            <ConformanceItem checked label="Shows current status with plain-language description (not technical codes)" />
            <ConformanceItem checked label="Displays expected completion date (sets user expectation)" />
            <ConformanceItem checked label="Provides stage-by-stage timeline with past/present/future states" />
            <ConformanceItem checked label="Communicates delays honestly with reason, apology, and new timeline" />
            <ConformanceItem checked label="Names responsible officer for delays (accountability)" />
            <ConformanceItem checked label="Offers escalation path (complaint/callback) clearly" />
            <ConformanceItem checked label="Sends SMS/email notifications on status changes" />
            <ConformanceItem checked label="Uses multi-modal status indicators (icon + text + color)" />
            <ConformanceItem checked label="Supports bilingual (Hindi + English) status communication" />
            <ConformanceItem checked label="Optimized for repeat visits (cached status, change highlighting)" />
            <ConformanceItem checked label="Meets WCAG 2.1 AA for all status states and timeline" />
          </div>
        </ModuleContent>
      </DocModule>

      <DocModule>
        <ModuleHeader title="Common Mistakes and Risks" />
        <ModuleContent>
          <div className="space-y-4">
            <RiskBlock
              risk="Vague status (e.g., 'Processing') with no timeline or details"
              impact="Critical"
              solution="Always show: current stage, what's being done, expected completion date. Be specific."
            />
            <RiskBlock
              risk="No delay communication (status just says 'delayed')"
              impact="Critical"
              solution="Explain WHY delayed, provide NEW timeline, apologize, name responsible officer, offer escalation."
            />
            <RiskBlock
              risk="Technical jargon (e.g., 'Stage 3', 'SLA breach')"
              impact="High"
              solution="Use plain language. 'Police verification in progress' not 'Stage 3'. Translate all codes."
            />
            <RiskBlock
              risk="No repeat-visit optimization (user must re-enter number every time)"
              impact="High"
              solution="Remember last search. Offer quick 'Track last application' link. Pre-fill application number."
            />
            <RiskBlock
              risk="Color-only status indicators (inaccessible)"
              impact="High"
              solution="Use icon + text + color. Never rely on color alone. Test with color blindness simulator."
            />
            <RiskBlock
              risk="No escalation option (user stuck if delayed)"
              impact="Medium"
              solution="Always provide 'File complaint' or 'Request callback' option. Empower users to escalate."
            />
            <RiskBlock
              risk="No SMS/email notifications (users forced to check manually)"
              impact="Medium"
              solution="Send notifications on every status change. Offer opt-in for updates. Reduce manual checks."
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
              description="Pattern deployed across 15 high-volume services with 120M+ annual status checks"
            />
            <MaturityBlock
              status="Conformance"
              version="Mandatory"
              description="All high-volume services (>1M applications/year) must implement this pattern"
            />
            <MaturityBlock
              status="Support Call Reduction"
              version="70%"
              description="70% reduction in 'where is my application' support calls after implementation"
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
        <MetadataRow label="Pattern ID" value="UX4G-PAT-008" />
        <MetadataRow label="Category" value="Status Tracking" />
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
        <QuickRefRow label="Status States" value="6 core states" />
        <QuickRefRow label="Lookup Methods" value="4 methods" />
        <QuickRefRow label="Notification Channels" value="SMS + Email" />
        <QuickRefRow label="WCAG Level" value="AA" />
        <QuickRefRow label="Languages" value="Hindi + English min" />
        <QuickRefRow label="Call Reduction" value="70%" />
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
        <PrincipleItem icon={<Eye size={14} />} text="Transparency: Show what's happening" />
        <PrincipleItem icon={<CheckCircle size={14} />} text="Reassurance: Reduce anxiety" />
        <PrincipleItem icon={<Clock size={14} />} text="Clarity: Plain language, timelines" />
        <PrincipleItem icon={<Zap size={14} />} text="Efficiency: Optimize repeat visits" />
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
        <RiskItem severity="high" risk="Vague status communication" />
        <RiskItem severity="high" risk="No delay explanation" />
        <RiskItem severity="high" risk="Technical jargon" />
        <RiskItem severity="medium" risk="No escalation path" />
        <RiskItem severity="medium" risk="No notifications" />
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
        <RelatedLink title="Approval and Issuance" />
        <RelatedLink title="Complaint and Escalation" />
        <RelatedLink title="Multilingual Guidance" />
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

function StatusStateCard({ state, color, icon, description, userExpectation }: any) {
  const colorConfig: any = {
    gray: { bg: 'bg-background', border: 'border-border' },
    blue: { bg: 'bg-blue-50', border: 'border-blue-300' },
    yellow: { bg: 'bg-yellow-50', border: 'border-yellow-300' },
    green: { bg: 'bg-green-50', border: 'border-green-300' },
    orange: { bg: 'bg-orange-50', border: 'border-orange-300' },
    red: { bg: 'bg-red-50', border: 'border-red-300' }
  };

  return (
    <div className={`border-2 ${colorConfig[color].border} ${colorConfig[color].bg} rounded-lg p-4`}>
      <div className="flex items-start gap-3 mb-3">
        <div className="flex-shrink-0">{icon}</div>
        <div className="flex-1">
          <div className="font-bold text-sm text-foreground mb-1">{state}</div>
          <div className="text-sm text-muted-foreground mb-2">{description}</div>
          <div className="text-xs text-muted-foreground"><strong>User Expects:</strong> {userExpectation}</div>
        </div>
      </div>
    </div>
  );
}

function FlowStep({ number, label, status }: any) {
  const statusConfig: any = {
    entry: { bg: 'bg-muted', border: 'border-gray-400', text: 'text-muted-foreground' },
    active: { bg: 'bg-blue-50', border: 'border-blue-400', text: 'text-blue-700' },
    decision: { bg: 'bg-purple-50', border: 'border-purple-400', text: 'text-purple-700' },
    info: { bg: 'bg-background', border: 'border-border', text: 'text-muted-foreground' },
    success: { bg: 'bg-green-50', border: 'border-green-400', text: 'text-green-700' },
    warning: { bg: 'bg-yellow-50', border: 'border-yellow-400', text: 'text-yellow-700' },
    error: { bg: 'bg-red-50', border: 'border-red-400', text: 'text-red-700' }
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
            <span className="px-2 py-0.5 bg-gray-200 text-muted-foreground text-xs font-bold rounded">CONDITIONAL</span>
          )}
        </div>
        <div className="text-xs text-muted-foreground">{description}</div>
      </div>
    </div>
  );
}

function TrackingMethodCard({ icon, title, description }: any) {
  return (
    <button className="border-2 border-border rounded-lg p-4 bg-card hover:border-primary hover:bg-blue-50 transition-colors text-left">
      <div className="flex flex-col items-center text-center gap-2">
        {icon}
        <div>
          <div className="font-bold text-sm text-foreground">{title}</div>
          <div className="text-xs text-muted-foreground">{description}</div>
        </div>
      </div>
    </button>
  );
}

function OverviewStat({ icon, label, value, detail }: any) {
  return (
    <div className="border-2 border-border rounded-lg p-4 bg-card">
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0">{icon}</div>
        <div>
          <div className="text-sm text-muted-foreground mb-1">{label}</div>
          <div className="font-bold text-lg text-foreground mb-1">{value}</div>
          <div className="text-xs text-muted-foreground">{detail}</div>
        </div>
      </div>
    </div>
  );
}

function ProgressStage({ label, status }: any) {
  const statusColors: any = {
    complete: 'text-green-600',
    active: 'text-blue-600 font-bold',
    pending: 'text-gray-400'
  };

  return (
    <div className={statusColors[status]}>
      {label}
    </div>
  );
}

function TimelineItem({ date, stage, description, status, icon, progress }: any) {
  const progressStyles: any = {
    current: { bg: 'bg-blue-600', border: 'border-blue-600', line: 'bg-gray-300' },
    past: { bg: 'bg-green-600', border: 'border-green-600', line: 'bg-green-300' },
    future: { bg: 'bg-card', border: 'border-border', line: 'bg-gray-200' }
  };

  return (
    <div className="flex items-start gap-4">
      <div className="flex flex-col items-center">
        <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${progressStyles[progress].bg} ${progressStyles[progress].border}`}>
          {progress === 'current' || progress === 'past' ? (
            <div className="text-white">{icon}</div>
          ) : (
            icon
          )}
        </div>
        {progress !== 'future' && <div className={`w-0.5 h-16 ${progressStyles[progress].line}`}></div>}
      </div>
      <div className="flex-1 pb-12">
        <div className="text-xs text-muted-foreground">{date}</div>
        <div className="font-bold text-sm text-foreground mb-1">{stage}</div>
        <div className="text-sm text-muted-foreground">{description}</div>
      </div>
    </div>
  );
}

function RequiredActionItem({ number, title, description, acceptedDocs, deadline }: any) {
  return (
    <div className="border-2 border-orange-300 bg-card rounded-lg p-4">
      <div className="flex items-start gap-3 mb-3">
        <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
          {number}
        </div>
        <div className="flex-1">
          <div className="font-bold text-sm text-foreground mb-2">{title}</div>
          <div className="text-sm text-muted-foreground mb-2">{description}</div>
          <div className="grid grid-cols-2 gap-4 text-xs text-muted-foreground">
            <div><strong>Accepted:</strong> {acceptedDocs}</div>
            <div><strong>Deadline:</strong> {deadline}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DelayInfoCard({ label, value, icon, highlighted }: any) {
  return (
    <div className={`border-2 rounded-lg p-4 ${highlighted ? 'border-orange-300 bg-orange-50' : 'border-border bg-card'}`}>
      <div className="flex items-center gap-3">
        {icon}
        <div>
          <div className="text-sm text-muted-foreground mb-1">{label}</div>
          <div className={`font-bold text-lg ${highlighted ? 'text-orange-900' : 'text-foreground'}`}>{value}</div>
        </div>
      </div>
    </div>
  );
}

function CompletionStat({ icon, label, value, detail }: any) {
  return (
    <div className="border-2 border-border rounded-lg p-4 bg-card text-center">
      <div className="flex justify-center mb-2">{icon}</div>
      <div className="text-sm text-muted-foreground mb-1">{label}</div>
      <div className="font-bold text-foreground mb-1">{value}</div>
      <div className="text-xs text-muted-foreground">{detail}</div>
    </div>
  );
}

function HelpOptionCard({ icon, title, description, detail, hours, action }: any) {
  return (
    <div className="border-2 border-border rounded-lg p-6 bg-card hover:border-primary hover:bg-blue-50 cursor-pointer transition-colors">
      <div className="flex flex-col items-center text-center gap-3">
        {icon}
        <div>
          <div className="font-bold text-sm text-foreground mb-1">{title}</div>
          <div className="text-xs text-muted-foreground mb-2">{description}</div>
          <div className="text-xs font-bold text-foreground mb-1">{detail}</div>
          <div className="text-xs text-gray-500">{hours}</div>
        </div>
        <button className="px-4 py-2 bg-primary text-white font-bold text-sm rounded hover:opacity-90">
          {action}
        </button>
      </div>
    </div>
  );
}

function FAQItem({ question, answer }: any) {
  return (
    <div className="p-4">
      <div className="font-bold text-sm text-foreground mb-2">{question}</div>
      <div className="text-sm text-muted-foreground">{answer}</div>
    </div>
  );
}

function ResourceLink({ icon, title, link }: any) {
  return (
    <a href="#" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
      {icon}
      <span>{title}</span>
      <ChevronRight size={14} className="ml-auto" />
    </a>
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

function StateTransition({ from, to, condition, timing }: any) {
  return (
    <div className="border-2 border-purple-300 bg-card rounded-lg p-3 flex items-center gap-3">
      <div className="px-3 py-1 bg-purple-100 text-purple-900 text-xs font-bold rounded">{from}</div>
      <ArrowRight size={16} className="text-purple-600" />
      <div className="px-3 py-1 bg-purple-100 text-purple-900 text-xs font-bold rounded">{to}</div>
      <div className="flex-1 text-xs text-muted-foreground">
        <div><strong>When:</strong> {condition}</div>
        <div><strong>Timing:</strong> {timing}</div>
      </div>
    </div>
  );
}

function DelayRuleBlock({ scenario, communication, action, example }: any) {
  return (
    <div className="border-2 border-orange-300 bg-orange-50 dark:bg-orange-950/30 rounded-lg p-4">
      <div className="font-bold text-sm text-foreground mb-2">{scenario}</div>
      <div className="space-y-2 text-sm text-muted-foreground">
        <div><strong>Communication:</strong> {communication}</div>
        <div><strong>Action:</strong> {action}</div>
        <div className="bg-card border border-orange-200 dark:border-orange-800 rounded p-2 italic">
          <strong>Example:</strong> "{example}"
        </div>
      </div>
    </div>
  );
}

function TimelineCalculation({ stage, calculation, display }: any) {
  return (
    <div className="border-2 border-blue-300 bg-blue-50 dark:bg-blue-950/30 rounded-lg p-4">
      <div className="font-bold text-sm text-foreground mb-2">{stage}</div>
      <div className="text-sm text-muted-foreground mb-2"><strong>Calculation:</strong> {calculation}</div>
      <div className="text-xs text-muted-foreground bg-card border border-blue-200 dark:border-blue-800 rounded p-2 italic">
        <strong>Display to User:</strong> "{display}"
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

function OptimizationTip({ tip, implementation }: any) {
  return (
    <div className="border-l-2 border-blue-400 pl-3">
      <div className="font-bold text-sm text-foreground mb-1">{tip}</div>
      <div className="text-sm text-muted-foreground">{implementation}</div>
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
