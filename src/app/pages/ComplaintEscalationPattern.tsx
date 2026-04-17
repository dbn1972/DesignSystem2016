import React from "react";
import { MessageSquare, CheckCircle, XCircle, AlertCircle, Info, AlertTriangle, ArrowRight, ArrowUp, Eye, Globe, Code, BarChart3, Shield, Clock, Users, FileText, Zap, Target, HelpCircle, ChevronRight, Phone, Mail, Edit, ArrowLeft, Check, Upload, Download, Flag, List, ExternalLink, ChevronDown, Scale, BookOpen, TrendingUp, Copy } from "lucide-react";

export default function ComplaintEscalationPattern() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b-2 border-border">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-8">
          <div className="flex items-start justify-between">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-16 h-16 bg-muted border-2 border-border rounded flex items-center justify-center">
                  <MessageSquare size={32} className="text-muted-foreground" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">UX4G Service Pattern Library</div>
                  <h1 className="text-3xl font-bold text-foreground">Complaint and Escalation</h1>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Formal grievance redressal pattern for citizens to report service issues, file complaints, track resolution, 
                and escalate unresolved matters. Ensures transparency, accountability, and citizen rights protection.
              </p>
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-sm"></div>
                  <span className="text-muted-foreground">Pattern ID: <span className="font-bold text-foreground">UX4G-PAT-005</span></span>
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
              { id: "escalation", label: "Escalation Logic" },
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
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-12 gap-8">
          
          {/* Main Content - 9 columns */}
          <div className="col-span-9 space-y-12">
            <PatternOverview />
            <JourneyFlow />
            <PageDesigns />
            <EscalationLogic />
            <ComponentsUsed />
            <ContentGuidance />
            <AccessibilityGuidance />
            <ImplementationNotes />
            <GovernanceConformance />
            <ComplaintCodeDownloads />
          </div>

          {/* Sidebar - 3 columns */}
          <div className="col-span-3 space-y-6 sticky top-24 self-start">
            <MetadataPanel />
            <QuickRefPanel />
            <DesignPrinciples />
            <RiskIndicators />
            <RelatedResources />
          </div>

        </div>
      </div>

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
              Citizens face service failures but have no clear, transparent mechanism to file grievances, track resolution, 
              or escalate when departments don't respond. This erodes trust in government services.
            </p>
            <div className="space-y-3">
              <ProblemSolutionBlock
                icon={<XCircle size={18} className="text-red-600" />}
                problem="No standardized complaint channel. Citizens don't know how to raise issues."
                solution="Single, standardized grievance portal with clear issue categories and submission flow"
              />
              <ProblemSolutionBlock
                icon={<AlertTriangle size={18} className="text-orange-600" />}
                problem="Complaints disappear into black box. No transparency or accountability."
                solution="Unique case ID, timeline visibility, SLA tracking, and status updates at each stage"
              />
              <ProblemSolutionBlock
                icon={<ArrowUp size={18} className="text-blue-600" />}
                problem="Unresolved complaints have no recourse. Citizens feel helpless."
                solution="Clear escalation triggers, hierarchy, and automatic escalation on SLA breach"
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
                name="Citizens (Complainants)"
                description="Individuals filing grievances about service failures or quality issues"
                percentage="85%"
              />
              <UserGroup
                icon={<Shield size={18} className="text-purple-600" />}
                name="Department Staff (Responders)"
                description="Officials assigned to review, respond to, and resolve complaints"
                percentage="10%"
              />
              <UserGroup
                icon={<Scale size={18} className="text-orange-600" />}
                name="Grievance Officers (Escalation Handlers)"
                description="Senior officials handling escalated or high-priority cases"
                percentage="5%"
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
              title="Service Delivery Failures"
              examples={[
                "Ration card not issued despite application",
                "Pension payment delayed or stopped",
                "License application stuck for months",
                "Scholarship disbursement not received"
              ]}
            />
            <UseCaseCard
              title="Quality and Corruption Issues"
              examples={[
                "Poor quality of public works (roads, water)",
                "Bribery or harassment by officials",
                "Discrimination or unfair treatment",
                "Illegal fee demands or rent-seeking"
              ]}
            />
            <UseCaseCard
              title="System and Process Problems"
              examples={[
                "Portal not working or showing errors",
                "Document rejection without clear reason",
                "Incorrect information on certificates",
                "No response to RTI applications"
              ]}
            />
          </div>
        </ModuleContent>
      </DocModule>

      <DocModule>
        <ModuleHeader title="Grievance Types and Severity Levels" />
        <ModuleContent>
          <div className="space-y-4">
            <SeverityLevelBlock
              level="Critical"
              color="red"
              description="Life-impacting issues requiring immediate attention (24-48 hour SLA)"
              examples={[
                "Pension stopped for senior citizen with no other income",
                "Emergency medical service denied",
                "Harassment or violence threat from official",
                "Illegal eviction or property seizure"
              ]}
            />
            <SeverityLevelBlock
              level="High"
              color="orange"
              description="Significant service failures affecting livelihoods (7-day SLA)"
              examples={[
                "Application rejected without valid reason",
                "Scholarship delayed affecting education",
                "Business license stuck causing financial loss",
                "Ration card blocked without notice"
              ]}
            />
            <SeverityLevelBlock
              level="Medium"
              color="yellow"
              description="Service quality issues or delays (15-day SLA)"
              examples={[
                "Portal usability problems",
                "Document correction needed",
                "Minor delays in processing",
                "Information update requests"
              ]}
            />
            <SeverityLevelBlock
              level="Low"
              color="blue"
              description="Feedback, suggestions, or non-urgent queries (30-day SLA)"
              examples={[
                "Suggestions for service improvement",
                "General information requests",
                "Appreciation or positive feedback",
                "Minor website issues"
              ]}
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
              <FlowStep number="01" label="Entry" status="entry" />
              <FlowStep number="02" label="Category" status="active" />
              <FlowStep number="03" label="Details Form" status="active" />
              <FlowStep number="04" label="Evidence Upload" status="optional" />
              <FlowStep number="05" label="Review" status="active" />
            </div>
            <div className="flex items-center justify-center">
              <ArrowRight className="text-muted-foreground" size={24} />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              <FlowStep number="06" label="Submit" status="success" />
              <FlowStep number="07" label="Case ID Gen" status="success" />
              <FlowStep number="08" label="Track Status" status="info" />
              <FlowStep number="09" label="Escalate" status="warning" />
              <FlowStep number="10" label="Resolution" status="decision" />
            </div>
            <div className="flex items-center justify-center">
              <ArrowRight className="text-muted-foreground" size={24} />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              <FlowStep number="11" label="Close / Reopen" status="info" />
              <div className="col-span-4"></div>
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
              title="Grievance Entry Page"
              description="Explain rights, process, timelines, and how escalation works"
              required={true}
            />
            <PageSequenceRow
              number="2"
              title="Issue Category Selection"
              description="Department, service type, and issue category (clear taxonomy)"
              required={true}
            />
            <PageSequenceRow
              number="3"
              title="Complaint Details Form"
              description="What happened, when, where, whom to contact, severity level"
              required={true}
            />
            <PageSequenceRow
              number="4"
              title="Evidence Upload"
              description="Supporting documents, photos, screenshots (optional but encouraged)"
              required={false}
            />
            <PageSequenceRow
              number="5"
              title="Contact Information"
              description="Email, mobile for updates. Option to remain anonymous where allowed."
              required={true}
            />
            <PageSequenceRow
              number="6"
              title="Review and Confirm"
              description="Show all details, severity, expected SLA before submission"
              required={true}
            />
            <PageSequenceRow
              number="7"
              title="Acknowledgment"
              description="Case ID, department assigned, expected resolution date, tracking link"
              required={true}
            />
            <PageSequenceRow
              number="8"
              title="Status Tracking"
              description="Timeline view, current status, officer assigned, response visibility"
              required={true}
            />
            <PageSequenceRow
              number="9"
              title="Escalation Request"
              description="Manual escalation if unsatisfied, or auto-escalation on SLA breach"
              required={false}
            />
            <PageSequenceRow
              number="10"
              title="Resolution Display"
              description="Department response, action taken, resolution explanation"
              required={true}
            />
            <PageSequenceRow
              number="11"
              title="Closure or Reopen"
              description="Accept resolution and close, or reopen if unsatisfied (with reasons)"
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

      {/* Grievance Start Page */}
      <DocModule>
        <ModuleHeader title="Page 1: Grievance Entry (Know Your Rights)" />
        <ModuleContent>
          <div className="border-2 border-border rounded-lg overflow-hidden bg-card">
            <div className="bg-primary text-white p-8">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-4">
                  <Scale size={32} />
                  <h2 className="text-3xl font-bold">Public Grievance Redressal System</h2>
                </div>
                <p className="text-lg text-blue-100 leading-relaxed">
                  Your right to quality public services is protected. File complaints, track resolution, 
                  and escalate unresolved issues transparently.
                </p>
              </div>
            </div>
            <div className="p-8 space-y-6">
              <div className="bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-600 p-6 rounded-r-lg">
                <div className="flex items-start gap-3">
                  <Info size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-foreground mb-2">Your Rights as a Citizen</div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Timely Resolution:</strong> Complaints are resolved within defined Service Level Agreements (SLAs)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Transparency:</strong> Track your complaint status at every stage with unique Case ID</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Escalation:</strong> Automatic escalation if SLA is breached or you're unsatisfied with response</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Accountability:</strong> Named officer assigned to your case with direct responsibility</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <ProcessCard
                  icon={<FileText size={24} className="text-blue-600" />}
                  title="File Complaint"
                  description="Describe your issue with supporting evidence"
                  time="5-10 minutes"
                />
                <ProcessCard
                  icon={<Eye size={24} className="text-green-600" />}
                  title="Track Progress"
                  description="Monitor status updates and department responses"
                  time="Real-time updates"
                />
                <ProcessCard
                  icon={<ArrowUp size={24} className="text-orange-600" />}
                  title="Escalate if Needed"
                  description="Raise to higher authority if unresolved"
                  time="Automatic or manual"
                />
              </div>

              <div className="border-2 border-border rounded-lg overflow-hidden">
                <div className="bg-muted border-b-2 border-border px-6 py-4">
                  <h3 className="font-bold text-foreground">Service Level Agreements (SLAs)</h3>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                    <SLACard severity="Critical" timeline="24-48 hours" />
                    <SLACard severity="High" timeline="7 days" />
                    <SLACard severity="Medium" timeline="15 days" />
                    <SLACard severity="Low" timeline="30 days" />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-4 pt-6">
                <button className="px-10 py-4 bg-primary text-white font-bold rounded-lg hover:opacity-90 flex items-center gap-2">
                  <MessageSquare size={20} />
                  File New Complaint
                </button>
                <button className="px-8 py-3 bg-card border-2 border-border text-muted-foreground font-bold rounded-lg hover:bg-background">
                  Track Existing Complaint
                </button>
              </div>

              <div className="bg-background border-2 border-border rounded-lg p-4 text-sm text-muted-foreground text-center">
                <strong>Need immediate assistance?</strong> Call Citizen Helpline: 
                <span className="font-bold text-blue-600 ml-2">1800-XXX-XXXX</span> (24/7)
              </div>
            </div>
          </div>
          <PageAnnotation items={[
            "Formal blue header establishes seriousness and government authority",
            "Citizen rights prominently displayed upfront (transparency, timely resolution, escalation)",
            "Clear SLA timelines by severity level (sets expectations)",
            "Process overview in 3 steps (file, track, escalate)",
            "Helpline contact visible for urgent cases",
            "Two CTAs: File new OR Track existing (common paths)"
          ]} />
        </ModuleContent>
      </DocModule>

      {/* Complaint Form */}
      <DocModule>
        <ModuleHeader title="Page 2: Complaint Details Form" />
        <ModuleContent>
          <div className="border-2 border-border rounded-lg overflow-hidden bg-card">
            <div className="bg-background border-b-2 border-border p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-foreground">File Your Complaint</h2>
                <div className="text-sm text-muted-foreground">Step 2 of 4</div>
              </div>
              <ProgressBar steps={4} current={2} />
            </div>
            <div className="p-8 space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-foreground mb-2">
                    Department / Ministry <span className="text-red-600">*</span>
                  </label>
                  <select aria-label="Select option" className="w-full px-4 py-3 border-2 border-border rounded-lg">
                    <option>Select Department</option>
                    <option>Ministry of Rural Development</option>
                    <option>Ministry of Education</option>
                    <option>Department of Pension</option>
                    <option>Ministry of Road Transport</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-foreground mb-2">
                    Service Type <span className="text-red-600">*</span>
                  </label>
                  <select aria-label="Select option" className="w-full px-4 py-3 border-2 border-border rounded-lg">
                    <option>Select Service</option>
                    <option>Scholarship Scheme</option>
                    <option>Ration Card</option>
                    <option>Driving License</option>
                    <option>Pension Disbursement</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-foreground mb-2">
                  Issue Category <span className="text-red-600">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <CategoryOption
                    value="delay"
                    label="Service Delay"
                    description="Application stuck or processing delayed"
                    selected={true}
                  />
                  <CategoryOption
                    value="rejection"
                    label="Unfair Rejection"
                    description="Application rejected without valid reason"
                    selected={false}
                  />
                  <CategoryOption
                    value="quality"
                    label="Poor Quality"
                    description="Service delivered but below standard"
                    selected={false}
                  />
                  <CategoryOption
                    value="corruption"
                    label="Corruption / Bribery"
                    description="Illegal fee demand or harassment"
                    selected={false}
                  />
                  <CategoryOption
                    value="error"
                    label="System Error"
                    description="Portal or technical issues"
                    selected={false}
                  />
                  <CategoryOption
                    value="other"
                    label="Other Issue"
                    description="Not listed above"
                    selected={false}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-foreground mb-2">
                  Complaint Description <span className="text-red-600">*</span>
                </label>
                <textarea aria-label="Describe your issue in detail. Include: What happened? When? Where? Who was involved? What outcome do you expect?" className="w-full px-4 py-3 border-2 border-border rounded-lg"
                  rows={6}
                  placeholder="Describe your issue in detail. Include: What happened? When? Where? Who was involved? What outcome do you expect?"
                ></textarea>
                <div className="text-sm text-muted-foreground mt-2">
                  Be specific and factual. Provide dates, application IDs, officer names if known.
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-foreground mb-2">
                    Application / Reference ID (if any)
                  </label>
                  <input aria-label="e.g., SCH/2026/12345" type="text"
                    placeholder="e.g., SCH/2026/12345"
                    className="w-full px-4 py-3 border-2 border-border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-foreground mb-2">
                    Date of Incident
                  </label>
                  <input aria-label="DD/MM/YYYY" type="text"
                    placeholder="DD/MM/YYYY"
                    className="w-full px-4 py-3 border-2 border-border rounded-lg"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-foreground mb-2">
                  Severity Level <span className="text-red-600">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <SeverityOption level="Critical" timeline="24-48 hrs" color="red" selected={false} />
                  <SeverityOption level="High" timeline="7 days" color="orange" selected={true} />
                  <SeverityOption level="Medium" timeline="15 days" color="yellow" selected={false} />
                  <SeverityOption level="Low" timeline="30 days" color="blue" selected={false} />
                </div>
                <div className="mt-2 text-sm text-muted-foreground bg-orange-50 dark:bg-orange-950/30 border border-orange-300 rounded p-3">
                  <strong>Selected: High Severity</strong> — Your complaint will be resolved within 7 days. 
                  Automatic escalation if not resolved on time.
                </div>
              </div>

              <div className="flex items-center justify-between pt-6 border-t-2 border-border">
                <button className="px-6 py-3 bg-card border-2 border-border text-muted-foreground font-medium rounded-lg hover:bg-background flex items-center gap-2">
                  <ArrowLeft size={18} />
                  Previous
                </button>
                <button className="px-8 py-3 bg-primary text-white font-bold rounded-lg hover:opacity-90 flex items-center gap-2">
                  Continue to Upload Evidence
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
          <PageAnnotation items={[
            "Department and service dropdowns narrow scope (easier routing)",
            "6 common issue categories as radio cards (clear taxonomy)",
            "Large text area with guidance on what to include",
            "Severity level selection shows SLA commitment upfront",
            "Application ID field helps link to existing records",
            "Progress indicator shows step 2 of 4"
          ]} />
        </ModuleContent>
      </DocModule>

      {/* Evidence Upload */}
      <DocModule>
        <ModuleHeader title="Page 3: Upload Supporting Evidence" />
        <ModuleContent>
          <div className="border-2 border-border rounded-lg overflow-hidden bg-card">
            <div className="bg-background border-b-2 border-border p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-foreground">Supporting Evidence (Optional)</h2>
                <div className="text-sm text-muted-foreground">Step 3 of 4</div>
              </div>
              <ProgressBar steps={4} current={3} />
            </div>
            <div className="p-8 space-y-6">
              <div className="bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-600 p-6 rounded-r-lg">
                <div className="flex items-start gap-3">
                  <Info size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-foreground mb-2">Why Upload Evidence?</div>
                    <div className="text-sm text-muted-foreground">
                      Supporting documents strengthen your complaint and help us resolve it faster. 
                      Photos, screenshots, emails, or official notices are valuable proof.
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-2 border-border rounded-lg p-6 bg-card">
                <h3 className="font-bold text-foreground mb-4">Accepted Evidence Types</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                  <EvidenceType
                    icon={<FileText size={18} className="text-blue-600" />}
                    type="Documents"
                    examples="Application copy, rejection letter, notices"
                  />
                  <EvidenceType
                    icon={<Upload size={18} className="text-green-600" />}
                    type="Photos"
                    examples="Work quality issues, infrastructure defects"
                  />
                  <EvidenceType
                    icon={<Mail size={18} className="text-purple-600" />}
                    type="Communication"
                    examples="Email threads, SMS screenshots, chat logs"
                  />
                </div>
              </div>

              <div className="border-2 border-dashed border-gray-400 rounded-lg p-8 bg-background">
                <div className="text-center">
                  <Upload size={48} className="text-muted-foreground mx-auto mb-4" />
                  <div className="font-bold text-foreground mb-2">Drag and drop files here</div>
                  <div className="text-sm text-muted-foreground mb-4">or click to browse your device</div>
                  <button className="px-6 py-3 bg-primary text-white font-bold rounded-lg hover:opacity-90">
                    Select Files
                  </button>
                  <div className="text-xs text-muted-foreground mt-4">
                    PDF, JPG, PNG, DOC (max 5 MB per file, up to 5 files)
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-950/30 border-l-4 border-yellow-600 p-4 rounded-r-lg">
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <AlertCircle size={16} className="text-yellow-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Privacy Notice:</strong> Uploaded files are secure and only visible to assigned officers. 
                    Do not upload documents containing sensitive personal information of others.
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-6 border-t-2 border-border">
                <button className="px-6 py-3 bg-card border-2 border-border text-muted-foreground font-medium rounded-lg hover:bg-background">
                  Skip This Step
                </button>
                <button className="px-8 py-3 bg-primary text-white font-bold rounded-lg hover:opacity-90 flex items-center gap-2">
                  Continue to Review
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
          <PageAnnotation items={[
            "Optional step (skip button) but encouraged with benefits explanation",
            "Clear accepted file types and size limits (5 MB, 5 files)",
            "Privacy notice reassures sensitive data protection",
            "Drag-and-drop upload area with visual prominence",
            "Examples of useful evidence (documents, photos, emails)"
          ]} />
        </ModuleContent>
      </DocModule>

      {/* Review Page */}
      <DocModule>
        <ModuleHeader title="Page 4: Review and Submit" />
        <ModuleContent>
          <div className="border-2 border-border rounded-lg overflow-hidden bg-card">
            <div className="bg-background border-b-2 border-border p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-foreground">Review Your Complaint</h2>
                <div className="text-sm text-muted-foreground">Step 4 of 4</div>
              </div>
              <ProgressBar steps={4} current={4} />
            </div>
            <div className="p-8 space-y-6">
              <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6">
                <div className="font-bold text-foreground mb-3">Complaint Summary</div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <ReviewItem label="Department" value="Ministry of Education" />
                  <ReviewItem label="Service Type" value="Scholarship Scheme" />
                  <ReviewItem label="Issue Category" value="Service Delay" />
                  <ReviewItem label="Severity Level" value="High (7-day SLA)" />
                  <ReviewItem label="Application ID" value="SCH/2026/12345" />
                  <ReviewItem label="Date of Incident" value="15/03/2026" />
                </div>
              </div>

              <div className="border-2 border-border rounded-lg p-6 bg-card">
                <div className="font-bold text-foreground mb-3">Complaint Description</div>
                <div className="text-sm text-muted-foreground bg-background border border-border rounded p-4">
                  I applied for the PM Scholarship Scheme on 15 January 2026 (Application ID: SCH/2026/12345). 
                  Despite meeting all eligibility criteria and uploading all documents, my application has been stuck 
                  in "Under Review" status for over 2 months. The scholarship disbursement deadline is 30 April, 
                  and I urgently need the funds to continue my education. I have contacted the helpline twice but 
                  received no clear response. I request immediate review and approval of my application.
                </div>
              </div>

              <div className="border-2 border-border rounded-lg p-6 bg-card">
                <div className="font-bold text-foreground mb-3">Uploaded Evidence (2 files)</div>
                <div className="space-y-2">
                  <UploadedFile name="application_screenshot.png" size="1.2 MB" />
                  <UploadedFile name="helpline_call_record.pdf" size="0.8 MB" />
                </div>
              </div>

              <div className="border-2 border-border rounded-lg p-6 bg-card">
                <div className="font-bold text-foreground mb-3">Contact Information</div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <ReviewItem label="Mobile Number" value="+91 98765-43210" />
                  <ReviewItem label="Email Address" value="priya.sharma@example.com" />
                </div>
                <div className="text-xs text-muted-foreground mt-3">
                  You'll receive status updates via SMS and email
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-950/30 border-l-4 border-green-600 p-6 rounded-r-lg">
                <div className="font-bold text-foreground mb-3">What Happens After Submission?</div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">1</div>
                    <span>You'll receive a unique <strong>Case ID</strong> for tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">2</div>
                    <span>Your complaint will be assigned to <strong>Ministry of Education</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">3</div>
                    <span>A named officer will review and respond within <strong>7 days</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">4</div>
                    <span>If SLA is breached, complaint will be <strong>automatically escalated</strong></span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <input aria-label="Checkbox" type="checkbox" className="w-5 h-5 mt-0.5 border-2 border-gray-400 rounded" />
                  <div className="text-sm text-muted-foreground">
                    <p className="font-bold mb-2">Declaration</p>
                    <p className="leading-relaxed">
                      I declare that the information provided is true and accurate to the best of my knowledge. 
                      I understand that filing false or frivolous complaints may result in action under applicable laws.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-6 border-t-2 border-border">
                <button className="px-6 py-3 bg-card border-2 border-border text-muted-foreground font-medium rounded-lg hover:bg-background">
                  Edit Complaint
                </button>
                <button className="px-10 py-4 bg-green-600 text-white font-bold rounded-lg hover:bg-green-600 flex items-center gap-2">
                  <CheckCircle size={20} />
                  Submit Complaint
                </button>
              </div>
            </div>
          </div>
          <PageAnnotation items={[
            "Complete summary of all entered information",
            "Clear 'What happens next' with numbered steps",
            "SLA commitment repeated (7 days for High severity)",
            "Declaration checkbox required (legal protection)",
            "Option to edit before final submission",
            "Green submit button (positive action)"
          ]} />
        </ModuleContent>
      </DocModule>

      {/* Acknowledgment Page */}
      <DocModule>
        <ModuleHeader title="Page 5: Complaint Acknowledgment" />
        <ModuleContent>
          <div className="border-2 border-border rounded-lg overflow-hidden bg-card">
            <div className="bg-green-600 text-white p-12 text-center">
              <div className="w-20 h-20 bg-card rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={48} className="text-green-600" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Complaint Registered Successfully</h2>
              <p className="text-lg text-green-100">
                Your grievance has been recorded and assigned to the concerned department.
              </p>
            </div>
            <div className="p-8 space-y-6">
              <div className="bg-background border-2 border-border rounded-lg p-6 text-center">
                <div className="text-sm text-muted-foreground mb-2">Your Case ID</div>
                <div className="text-4xl font-bold text-foreground font-mono mb-4">GRV-2026-789012</div>
                <div className="text-sm text-muted-foreground">
                  Use this ID to track your complaint status. Keep it safe for future reference.
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <AssignmentCard
                  icon={<Shield size={24} className="text-blue-600" />}
                  title="Assigned To"
                  value="Ministry of Education — Scholarship Division"
                  detail="Officer: Rajesh Kumar (ID: OFF-EDU-1234)"
                />
                <AssignmentCard
                  icon={<Clock size={24} className="text-orange-600" />}
                  title="Expected Resolution"
                  value="By 22 April 2026"
                  detail="7 working days from today (High severity SLA)"
                />
              </div>

              <div className="bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-600 p-6 rounded-r-lg">
                <div className="font-bold text-foreground mb-3">Your Complaint Timeline</div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>15 April 2026:</strong> Complaint registered</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Clock size={14} className="text-orange-600 mt-0.5 flex-shrink-0" />
                    <span><strong>16-22 April 2026:</strong> Under review by assigned officer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle size={14} className="text-red-600 mt-0.5 flex-shrink-0" />
                    <span><strong>23 April 2026:</strong> Auto-escalation if not resolved (SLA breach)</span>
                  </li>
                </ul>
              </div>

              <div className="border-2 border-border rounded-lg p-6 bg-card">
                <div className="font-bold text-foreground mb-4">Notifications Enabled</div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <NotificationItem
                    icon={<MessageSquare size={16} className="text-blue-600" />}
                    channel="SMS Updates"
                    detail="To +91 98765-43210"
                  />
                  <NotificationItem
                    icon={<Mail size={16} className="text-green-600" />}
                    channel="Email Updates"
                    detail="To priya.sharma@example.com"
                  />
                </div>
              </div>

              <div className="flex items-center justify-center gap-4 pt-6">
                <button className="px-10 py-4 bg-primary text-white font-bold rounded-lg hover:opacity-90">
                  Track Complaint Status
                </button>
                <button className="px-8 py-3 bg-card border-2 border-border text-muted-foreground font-bold rounded-lg hover:bg-background">
                  Download Acknowledgment
                </button>
              </div>

              <div className="bg-background border-2 border-border rounded-lg p-4 text-sm text-muted-foreground text-center">
                <strong>Questions about your complaint?</strong> Contact Grievance Cell: 
                <span className="font-bold text-blue-600 ml-2">1800-XXX-XXXX</span>
              </div>
            </div>
          </div>
          <PageAnnotation items={[
            "Large, clear Case ID (GRV-2026-789012) for tracking",
            "Named officer assigned (accountability: Rajesh Kumar)",
            "Expected resolution date prominently shown (22 April)",
            "Timeline preview with auto-escalation trigger date",
            "Notification channels confirmed (SMS + email)",
            "Direct link to status tracking page"
          ]} />
        </ModuleContent>
      </DocModule>

      {/* Status Tracking */}
      <DocModule>
        <ModuleHeader title="Page 6: Complaint Status Tracking" />
        <ModuleContent>
          <div className="border-2 border-border rounded-lg overflow-hidden bg-card">
            <div className="bg-background border-b-2 border-border p-6">
              <h2 className="text-xl font-bold text-foreground mb-2">Complaint Status</h2>
              <div className="text-sm text-muted-foreground">Case ID: GRV-2026-789012</div>
            </div>
            <div className="p-8 space-y-6">
              <div className="bg-orange-50 dark:bg-orange-950/30 border-2 border-orange-200 dark:border-orange-800 rounded-lg p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Current Status</div>
                    <div className="text-2xl font-bold text-foreground mb-4">Under Review</div>
                    <div className="text-sm text-muted-foreground">
                      Your complaint is being reviewed by the assigned officer. 
                      Expected resolution by <strong>22 April 2026</strong> (3 days remaining).
                    </div>
                  </div>
                  <div className="px-4 py-2 bg-orange-600 text-white font-bold text-sm rounded">
                    IN PROGRESS
                  </div>
                </div>
              </div>

              <div className="border-2 border-border rounded-lg overflow-hidden">
                <div className="bg-muted border-b-2 border-border px-6 py-4">
                  <h3 className="font-bold text-foreground">Complaint Timeline</h3>
                </div>
                <div className="p-6 space-y-4">
                  <TimelineItem
                    date="18 April 2026, 11:30 AM"
                    status="Officer Reviewing"
                    description="Officer Rajesh Kumar is reviewing your complaint and supporting evidence."
                    active={true}
                  />
                  <TimelineItem
                    date="16 April 2026, 2:15 PM"
                    status="Assigned to Officer"
                    description="Complaint assigned to Rajesh Kumar (Officer ID: OFF-EDU-1234)"
                    active={false}
                  />
                  <TimelineItem
                    date="15 April 2026, 4:30 PM"
                    status="Complaint Registered"
                    description="Your complaint was successfully registered with Case ID: GRV-2026-789012"
                    active={false}
                  />
                </div>
              </div>

              <div className="border-2 border-blue-300 bg-blue-50 dark:bg-blue-950/30 rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="font-bold text-foreground mb-2">Assigned Officer</div>
                    <div className="text-sm text-muted-foreground">
                      <strong>Name:</strong> Rajesh Kumar<br/>
                      <strong>Designation:</strong> Deputy Director, Scholarship Division<br/>
                      <strong>Officer ID:</strong> OFF-EDU-1234
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <strong>Response Due:</strong><br/>
                    22 April 2026
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-950/30 border-l-4 border-yellow-600 p-4 rounded-r-lg">
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <AlertCircle size={16} className="text-yellow-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>SLA Tracking:</strong> 3 days remaining. If not resolved by 22 April, 
                    your complaint will be automatically escalated to Senior Grievance Officer.
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-center gap-4 pt-6">
                <button className="px-8 py-3 bg-card border-2 border-border text-muted-foreground font-bold rounded-lg hover:bg-background">
                  Download Complaint Copy
                </button>
                <button className="px-8 py-3 bg-orange-600 text-white font-bold rounded-lg hover:bg-orange-700 flex items-center gap-2">
                  <ArrowUp size={18} />
                  Request Manual Escalation
                </button>
              </div>
            </div>
          </div>
          <PageAnnotation items={[
            "Current status with days remaining until SLA breach",
            "Full timeline showing complaint journey (registered → assigned → reviewing)",
            "Named officer with designation and ID (accountability)",
            "SLA tracking alert (auto-escalation trigger visible)",
            "Option for manual escalation if user is unsatisfied",
            "Download complaint copy for records"
          ]} />
        </ModuleContent>
      </DocModule>

      {/* Escalation Page */}
      <DocModule>
        <ModuleHeader title="Page 7: Escalation Request" />
        <ModuleContent>
          <div className="border-2 border-border rounded-lg overflow-hidden bg-card">
            <div className="bg-red-100 border-b-2 border-red-300 p-8">
              <div className="flex items-center gap-3 mb-4">
                <ArrowUp size={32} className="text-red-600" />
                <h2 className="text-3xl font-bold text-foreground">Escalate Your Complaint</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                If you're unsatisfied with the response or resolution time, escalate your complaint to higher authority.
              </p>
            </div>
            <div className="p-8 space-y-6">
              <div className="bg-red-50 dark:bg-red-950/30 border-l-4 border-red-600 p-6 rounded-r-lg">
                <div className="flex items-start gap-3">
                  <AlertTriangle size={20} className="text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-foreground mb-2">Escalation Trigger</div>
                    <div className="text-sm text-muted-foreground">
                      Your complaint (GRV-2026-789012) has crossed the 7-day SLA deadline. 
                      It's now eligible for escalation to Senior Grievance Officer.
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="border-2 border-border rounded-lg p-6 bg-card">
                  <div className="font-bold text-foreground mb-4">Current Level</div>
                  <div className="text-sm">
                    <div className="text-muted-foreground mb-1">Officer</div>
                    <div className="font-bold text-foreground">Rajesh Kumar</div>
                    <div className="text-muted-foreground mt-2 mb-1">Designation</div>
                    <div className="font-bold text-foreground">Deputy Director</div>
                  </div>
                </div>
                <div className="border-2 border-red-300 rounded-lg p-6 bg-red-50">
                  <div className="font-bold text-foreground mb-4 flex items-center gap-2">
                    <ArrowUp size={18} className="text-red-600" />
                    Escalation To
                  </div>
                  <div className="text-sm">
                    <div className="text-muted-foreground mb-1">Officer</div>
                    <div className="font-bold text-foreground">Dr. Sunita Verma</div>
                    <div className="text-muted-foreground mt-2 mb-1">Designation</div>
                    <div className="font-bold text-foreground">Joint Secretary, Education</div>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-foreground mb-2">
                  Reason for Escalation <span className="text-red-600">*</span>
                </label>
                <div className="space-y-3">
                  <EscalationReason
                    value="sla_breach"
                    label="SLA Breach (Deadline Passed)"
                    selected={true}
                  />
                  <EscalationReason
                    value="no_response"
                    label="No Response from Officer"
                    selected={false}
                  />
                  <EscalationReason
                    value="unsatisfied"
                    label="Unsatisfied with Response Quality"
                    selected={false}
                  />
                  <EscalationReason
                    value="incomplete"
                    label="Incomplete or Partial Resolution"
                    selected={false}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-foreground mb-2">
                  Additional Comments (Optional)
                </label>
                <textarea aria-label="Provide any additional context for the escalation..." className="w-full px-4 py-3 border-2 border-border rounded-lg"
                  rows={4}
                  placeholder="Provide any additional context for the escalation..."
                ></textarea>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-600 p-6 rounded-r-lg">
                <div className="font-bold text-foreground mb-3">What Happens After Escalation?</div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Your complaint will be assigned to <strong>Dr. Sunita Verma (Joint Secretary)</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
                    <span>New SLA: <strong>3 working days</strong> (faster resolution at escalated level)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
                    <span>You'll receive confirmation and updates on escalation status</span>
                  </li>
                </ul>
              </div>

              <div className="flex items-center justify-between pt-6 border-t-2 border-border">
                <button className="px-6 py-3 bg-card border-2 border-border text-muted-foreground font-medium rounded-lg hover:bg-background">
                  Cancel
                </button>
                <button className="px-10 py-4 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 flex items-center gap-2">
                  <ArrowUp size={20} />
                  Escalate to Higher Authority
                </button>
              </div>
            </div>
          </div>
          <PageAnnotation items={[
            "Red header indicates escalation seriousness",
            "Shows current officer vs escalation target (transparency)",
            "4 common escalation reasons as radio options",
            "Explains new SLA after escalation (3 days, faster)",
            "Clear 'What happens next' with officer name and timeline",
            "Red submit button (critical action)"
          ]} />
        </ModuleContent>
      </DocModule>

      {/* Resolution Page */}
      <DocModule>
        <ModuleHeader title="Page 8: Resolution and Closure" />
        <ModuleContent>
          <div className="border-2 border-border rounded-lg overflow-hidden bg-card">
            <div className="bg-green-600 text-white p-8">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle size={32} />
                <h2 className="text-3xl font-bold">Complaint Resolved</h2>
              </div>
              <p className="text-lg text-green-100">
                Your grievance has been addressed. Review the resolution below.
              </p>
            </div>
            <div className="p-8 space-y-6">
              <div className="bg-green-50 dark:bg-green-950/30 border-2 border-green-200 dark:border-green-800 rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Case ID</div>
                    <div className="text-2xl font-bold text-foreground font-mono mb-2">GRV-2026-789012</div>
                    <div className="text-sm text-muted-foreground">Resolved on <strong>20 April 2026</strong></div>
                  </div>
                  <div className="px-4 py-2 bg-green-600 text-white font-bold text-sm rounded">
                    RESOLVED
                  </div>
                </div>
              </div>

              <div className="border-2 border-border rounded-lg p-6 bg-card">
                <div className="font-bold text-foreground mb-4">Department Response</div>
                <div className="text-sm text-muted-foreground bg-background border border-border rounded p-4 leading-relaxed">
                  <p className="mb-3">
                    <strong>Resolved By:</strong> Rajesh Kumar, Deputy Director, Scholarship Division
                  </p>
                  <p className="mb-3">
                    <strong>Resolution Date:</strong> 20 April 2026
                  </p>
                  <p className="mb-3">
                    <strong>Response:</strong>
                  </p>
                  <p className="mb-3">
                    Thank you for bringing this matter to our attention. We have reviewed your scholarship application 
                    (SCH/2026/12345) and found that it was indeed delayed due to a technical glitch in our verification system.
                  </p>
                  <p className="mb-3">
                    <strong>Action Taken:</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-1 mb-3">
                    <li>Your application has been manually reviewed and <strong>approved</strong></li>
                    <li>Scholarship amount (₹50,000) will be disbursed to your bank account within 3 working days</li>
                    <li>You will receive SMS and email confirmation once payment is processed</li>
                    <li>System issue has been escalated to IT team to prevent future delays</li>
                  </ul>
                  <p>
                    We apologize for the inconvenience caused and appreciate your patience. 
                    If you have any questions, please contact us at scholarship@education.gov.in
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-600 p-6 rounded-r-lg">
                <div className="font-bold text-foreground mb-3">Are You Satisfied with This Resolution?</div>
                <div className="text-sm text-muted-foreground mb-4">
                  Your feedback helps us improve our services and holds departments accountable.
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <button className="px-6 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-600 flex items-center justify-center gap-2">
                    <CheckCircle size={18} />
                    Yes, Close Complaint
                  </button>
                  <button className="px-6 py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 flex items-center justify-center gap-2">
                    <XCircle size={18} />
                    No, Reopen / Escalate
                  </button>
                </div>
              </div>

              <div className="border-2 border-border rounded-lg p-6 bg-card">
                <div className="font-bold text-foreground mb-4">Complaint Timeline (Final)</div>
                <div className="space-y-3 text-sm">
                  <TimelineSummary date="20 April 2026" event="Complaint Resolved" />
                  <TimelineSummary date="18 April 2026" event="Under Review by Officer" />
                  <TimelineSummary date="16 April 2026" event="Assigned to Officer" />
                  <TimelineSummary date="15 April 2026" event="Complaint Registered" />
                </div>
              </div>

              <div className="flex items-center justify-center gap-4 pt-6">
                <button className="px-8 py-3 bg-primary text-white font-bold rounded-lg hover:opacity-90">
                  Download Resolution Letter
                </button>
                <button className="px-8 py-3 bg-card border-2 border-border text-muted-foreground font-bold rounded-lg hover:bg-background">
                  Rate Officer's Response
                </button>
              </div>
            </div>
          </div>
          <PageAnnotation items={[
            "Green success state with clear resolution status",
            "Detailed department response with action taken",
            "Specific resolution (application approved, payment in 3 days)",
            "User choice: Accept (close) or Reject (reopen/escalate)",
            "Full timeline visible for transparency",
            "Options to download resolution letter and rate officer"
          ]} />
        </ModuleContent>
      </DocModule>
    </section>
  );
}

// ==================== ESCALATION LOGIC ====================

function EscalationLogic() {
  return (
    <section id="escalation" className="space-y-6">
      <SectionHeader title="Escalation Logic and Triggers" />

      <DocModule>
        <ModuleHeader title="Escalation Hierarchy Framework" />
        <ModuleContent>
          <div className="bg-purple-50 dark:bg-purple-950/30 border-2 border-purple-200 dark:border-purple-800 rounded-lg p-6">
            <div className="flex items-start gap-3 mb-4">
              <TrendingUp size={24} className="text-purple-600 flex-shrink-0" />
              <div>
                <div className="font-bold text-foreground mb-2">Three-Tier Escalation Structure</div>
                <div className="text-sm text-muted-foreground">
                  Complaints escalate through defined hierarchy with progressively shorter SLAs at each level.
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              <EscalationLevel
                level="Level 1"
                title="Frontline Officer"
                designation="Deputy Director / Section Officer"
                sla="7-30 days (based on severity)"
                description="Initial review and resolution"
              />
              <EscalationLevel
                level="Level 2"
                title="Senior Officer"
                designation="Joint Secretary / Director"
                sla="3-7 days (faster resolution)"
                description="Escalated cases and complex issues"
              />
              <EscalationLevel
                level="Level 3"
                title="Grievance Redressal Officer"
                designation="Additional Secretary / Secretary"
                sla="1-3 days (highest priority)"
                description="Final escalation, critical cases"
              />
            </div>
          </div>
        </ModuleContent>
      </DocModule>

      <DocModule>
        <ModuleHeader title="Automatic Escalation Triggers" />
        <ModuleContent>
          <div className="space-y-4">
            <TriggerBlock
              trigger="SLA Breach"
              description="Complaint not resolved within defined SLA period"
              action="Automatic escalation to next level officer within 24 hours"
              example="High severity complaint (7-day SLA) unresolved after 7 days → Auto-escalate to Joint Secretary"
            />
            <TriggerBlock
              trigger="No Officer Response"
              description="Assigned officer hasn't acknowledged or responded within 48 hours"
              action="Escalation alert sent to officer's supervisor. If no response in 24 hours, auto-escalate"
              example="Complaint assigned on Monday, no acknowledgment by Wednesday → Alert supervisor"
            />
            <TriggerBlock
              trigger="Multiple Reopens"
              description="Complaint closed but reopened by citizen 2+ times due to unsatisfactory resolution"
              action="Immediate escalation to higher level for fresh review"
              example="Complaint closed twice, reopened both times → Escalate to Level 2 or 3"
            />
            <TriggerBlock
              trigger="Critical Severity"
              description="Complaint marked as Critical (life-impacting, emergency)"
              action="Direct assignment to Senior Officer (Level 2) bypassing Level 1"
              example="Pension stopped for senior citizen → Assigned directly to Joint Secretary"
            />
          </div>
        </ModuleContent>
      </DocModule>

      <DocModule>
        <ModuleHeader title="Manual Escalation Criteria" />
        <ModuleContent>
          <div className="bg-yellow-50 dark:bg-yellow-950/30 border-2 border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
            <div className="font-bold text-foreground mb-4">When Citizens Can Request Escalation</div>
            <div className="space-y-3 text-sm text-muted-foreground">
              <ManualEscalationCriteria
                condition="Unsatisfied with Response Quality"
                description="Department responded but resolution is inadequate, incomplete, or doesn't address the core issue"
              />
              <ManualEscalationCriteria
                condition="No Substantial Action Taken"
                description="Department acknowledged complaint but no concrete action or timeline provided"
              />
              <ManualEscalationCriteria
                condition="Disagreement with Decision"
                description="Citizen disagrees with department's rejection or reasoning and wants higher authority review"
              />
              <ManualEscalationCriteria
                condition="New Evidence Discovered"
                description="Citizen has additional proof or information that wasn't available during initial review"
              />
            </div>
          </div>
        </ModuleContent>
      </DocModule>

      <DocModule>
        <ModuleHeader title="Escalation SLA Matrix" />
        <ModuleContent>
          <div className="border-2 border-border rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-muted border-b-2 border-border">
                <tr>
                  <th className="px-4 py-3 text-left font-bold text-foreground">Severity</th>
                  <th className="px-4 py-3 text-left font-bold text-foreground">Level 1 SLA</th>
                  <th className="px-4 py-3 text-left font-bold text-foreground">Level 2 SLA</th>
                  <th className="px-4 py-3 text-left font-bold text-foreground">Level 3 SLA</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr className="hover:bg-background">
                  <td className="px-4 py-3 font-bold text-red-700">Critical</td>
                  <td className="px-4 py-3">24-48 hours</td>
                  <td className="px-4 py-3">24 hours</td>
                  <td className="px-4 py-3">12 hours</td>
                </tr>
                <tr className="hover:bg-background">
                  <td className="px-4 py-3 font-bold text-orange-700">High</td>
                  <td className="px-4 py-3">7 days</td>
                  <td className="px-4 py-3">3 days</td>
                  <td className="px-4 py-3">24 hours</td>
                </tr>
                <tr className="hover:bg-background">
                  <td className="px-4 py-3 font-bold text-yellow-700">Medium</td>
                  <td className="px-4 py-3">15 days</td>
                  <td className="px-4 py-3">7 days</td>
                  <td className="px-4 py-3">3 days</td>
                </tr>
                <tr className="hover:bg-background">
                  <td className="px-4 py-3 font-bold text-blue-700">Low</td>
                  <td className="px-4 py-3">30 days</td>
                  <td className="px-4 py-3">15 days</td>
                  <td className="px-4 py-3">7 days</td>
                </tr>
              </tbody>
            </table>
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
            <ComponentCard name="Form Input" variants="Text, textarea, select" usage="Complaint details, contact info" />
            <ComponentCard name="Radio Button" variants="Category cards, severity selection" usage="Issue categorization" />
            <ComponentCard name="File Upload" variants="Multiple files, preview" usage="Evidence upload" />
            <ComponentCard name="Button" variants="Primary, Secondary, Warning (escalate)" usage="Actions, navigation" />
            <ComponentCard name="Alert Banner" variants="Info, Success, Warning, Error" usage="Status updates, SLA alerts" />
            <ComponentCard name="Timeline" variants="Vertical, with icons" usage="Complaint progress tracking" />
            <ComponentCard name="Card" variants="Elevated, status-specific colors" usage="Case summary, officer details" />
            <ComponentCard name="Badge" variants="Severity levels, status indicators" usage="Priority and state display" />
            <ComponentCard name="Progress Bar" variants="Linear, stepped" usage="Form completion tracking" />
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
        <ModuleHeader title="Writing for Grievance Scenarios" />
        <ModuleContent>
          <div className="space-y-6">
            <ToneBlock
              context="Entry Page (Know Your Rights)"
              tone="Formal, Empowering, Trustworthy"
              good="Your right to quality public services is protected. File complaints, track resolution transparently, and escalate if needed."
              bad="Submit complaints here if you have issues."
            />
            <ToneBlock
              context="SLA Communication"
              tone="Clear and Commitment-Focused"
              good="Your High severity complaint will be resolved within 7 working days. If not resolved on time, it will be automatically escalated to Senior Officer."
              bad="We will try to resolve your complaint soon."
            />
            <ToneBlock
              context="Escalation Notice"
              tone="Serious but Supportive"
              good="Your complaint has crossed the SLA deadline. It's now eligible for escalation to higher authority for faster resolution."
              bad="Complaint delayed. Escalate if you want."
            />
            <ToneBlock
              context="Resolution Response"
              tone="Professional, Specific, Accountable"
              good="Action Taken: Your application has been manually reviewed and approved. Scholarship (₹50,000) will be disbursed within 3 working days. You'll receive confirmation via SMS."
              bad="Your issue has been resolved. Check your application status."
            />
          </div>
        </ModuleContent>
      </DocModule>

      <DocModule>
        <ModuleHeader title="Accountability Language Patterns" />
        <ModuleContent>
          <div className="space-y-4">
            <LanguagePattern
              element="Officer Assignment"
              pattern="Named officer + Designation + Officer ID"
              example="Assigned to: Rajesh Kumar, Deputy Director, Scholarship Division (Officer ID: OFF-EDU-1234)"
              why="Builds accountability. Citizen knows exactly who is responsible."
            />
            <LanguagePattern
              element="SLA Commitment"
              pattern="Action + Timeline + Consequence if breached"
              example="Resolved within 7 working days. If SLA is breached, complaint will be automatically escalated to Joint Secretary."
              why="Sets clear expectations and automatic consequences for delays."
            />
            <LanguagePattern
              element="Resolution Explanation"
              pattern="What was wrong + What action taken + Timeline for outcome"
              example="Issue: Application delayed due to system glitch. Action: Manually reviewed and approved. Outcome: Payment within 3 days."
              why="Transparency about cause, fix, and result. Builds trust."
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
              area="Form Accessibility"
              requirements={[
                "All form fields have visible labels (not just placeholders)",
                "Required fields marked with * and aria-required='true'",
                "Field descriptions use aria-describedby",
                "Error messages associated with fields via aria-errormessage",
                "Logical tab order through complaint form"
              ]}
            />
            <AccessibilityBlock
              area="Status Updates"
              requirements={[
                "Status changes announced with aria-live='polite'",
                "SLA countdown timer has accessible text alternative",
                "Timeline items use semantic list markup (ul/li)",
                "Current status has role='status' attribute",
                "Visual status colors supplemented with icons and text"
              ]}
            />
            <AccessibilityBlock
              area="Document Upload"
              requirements={[
                "Upload button keyboard accessible",
                "File list announced to screen readers when added",
                "File size/type errors clearly communicated",
                "Progress indication for upload (not visual only)",
                "Uploaded files have remove button (keyboard accessible)"
              ]}
            />
            <AccessibilityBlock
              area="Escalation Actions"
              requirements={[
                "Escalation button clearly labeled with consequence",
                "Confirm dialog before escalation (prevent accidents)",
                "Escalation hierarchy explained in plain language",
                "SLA breach alerts use role='alert' for urgency",
                "Manual escalation reasons use radio buttons (single choice)"
              ]}
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
                <div className="font-bold text-foreground mb-2">Language Support for Grievance System</div>
                <div className="text-sm text-muted-foreground">
                  Grievance redressal is a constitutional right. All content must be available in Hindi and English minimum, 
                  with regional language support based on state deployment.
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <MultilingualItem
                aspect="Citizen Rights"
                requirement="Constitutional rights explained in user's language (SLA, escalation, transparency)"
              />
              <MultilingualItem
                aspect="Status Updates"
                requirement="SMS and email notifications in selected language preference"
              />
              <MultilingualItem
                aspect="Officer Responses"
                requirement="Department responses translated or provided in both Hindi and English"
              />
              <MultilingualItem
                aspect="Legal Terms"
                requirement="Formal terms (SLA, escalation, redressal) explained in simple, local language"
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
              category="Case ID Generation"
              requirement="Generate unique alphanumeric ID client-side, then confirm with backend. Format: GRV-YYYY-NNNNNN"
              priority="critical"
            />
            <ImplementationItem
              category="Status Polling"
              requirement="Auto-refresh status every 30 seconds when user is on tracking page. Use WebSocket or polling API."
              priority="required"
            />
            <ImplementationItem
              category="SLA Countdown"
              requirement="Display days/hours remaining until SLA breach. Trigger visual alert when <24 hours remaining."
              priority="critical"
            />
            <ImplementationItem
              category="Escalation UI"
              requirement="Show escalation button only when SLA breached OR user eligible for manual escalation. Confirm before submit."
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
              category="Auto-Escalation Engine"
              requirement="Cron job checks SLA compliance every hour. Auto-escalate breached complaints to next level officer."
              priority="critical"
            />
            <ImplementationItem
              category="Officer Assignment Logic"
              requirement="Round-robin or workload-based assignment. Store officer ID, name, designation, contact for accountability."
              priority="critical"
            />
            <ImplementationItem
              category="Notification System"
              requirement="Send SMS + email on: submission, assignment, status change, escalation, resolution. Include case ID in all."
              priority="critical"
            />
            <ImplementationItem
              category="Audit Trail"
              requirement="Log all actions: {timestamp, actor, action, oldStatus, newStatus, reason}. Immutable audit log."
              priority="critical"
            />
          </div>
        </ModuleContent>
      </DocModule>

      <DocModule>
        <ModuleHeader title="Analytics Events" />
        <ModuleContent>
          <div className="space-y-3">
            <AnalyticsEvent event="complaint_started" description="User begins complaint filing process (track department, severity)" />
            <AnalyticsEvent event="complaint_submitted" description="Complaint successfully submitted (track case ID, category, severity)" />
            <AnalyticsEvent event="evidence_uploaded" description="User uploads supporting documents (track file count, types)" />
            <AnalyticsEvent event="status_checked" description="User views complaint status (track case ID, frequency)" />
            <AnalyticsEvent event="officer_assigned" description="Complaint assigned to officer (track officer ID, level)" />
            <AnalyticsEvent event="sla_breached" description="Complaint crosses SLA deadline (track case ID, original severity)" />
            <AnalyticsEvent event="auto_escalated" description="System automatically escalates complaint (track from/to levels)" />
            <AnalyticsEvent event="manual_escalation_requested" description="User requests manual escalation (track reason selected)" />
            <AnalyticsEvent event="complaint_resolved" description="Department marks complaint as resolved (track resolution time)" />
            <AnalyticsEvent event="complaint_closed" description="User accepts resolution and closes complaint" />
            <AnalyticsEvent event="complaint_reopened" description="User reopens complaint due to unsatisfactory resolution (track reason)" />
            <AnalyticsEvent event="feedback_submitted" description="User rates officer's response (track rating, comments)" />
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
            <ConformanceItem checked label="Displays citizen rights prominently (SLA, transparency, escalation)" />
            <ConformanceItem checked label="Generates unique Case ID for every complaint" />
            <ConformanceItem checked label="Shows named officer assigned (accountability)" />
            <ConformanceItem checked label="Displays SLA timeline and countdown" />
            <ConformanceItem checked label="Implements automatic escalation on SLA breach" />
            <ConformanceItem checked label="Provides manual escalation option with reasons" />
            <ConformanceItem checked label="Shows full complaint timeline with all status changes" />
            <ConformanceItem checked label="Sends SMS and email notifications at each stage" />
            <ConformanceItem checked label="Allows evidence upload (optional but encouraged)" />
            <ConformanceItem checked label="Provides closure or reopen option after resolution" />
            <ConformanceItem checked label="Meets WCAG 2.1 AA for form accessibility and status updates" />
          </div>
        </ModuleContent>
      </DocModule>

      <DocModule>
        <ModuleHeader title="Common Risks and Bad Practices" />
        <ModuleContent>
          <div className="space-y-4">
            <RiskBlock
              risk="No unique Case ID generated (complaints untraceable)"
              impact="Critical"
              solution="Auto-generate unique alphanumeric ID (GRV-YYYY-NNNNNN) for every complaint. Display prominently and include in all communications."
            />
            <RiskBlock
              risk="Officer not named (no accountability)"
              impact="Critical"
              solution="Always display: Officer Name, Designation, and Officer ID. Citizen must know exactly who is responsible."
            />
            <RiskBlock
              risk="SLA not enforced or visible (no urgency or trust)"
              impact="Critical"
              solution="Define clear SLAs by severity. Display countdown. Auto-escalate on breach. Make consequences visible."
            />
            <RiskBlock
              risk="No escalation path (citizen feels helpless)"
              impact="High"
              solution="Provide both automatic (SLA breach) and manual escalation. Explain hierarchy and faster SLAs at higher levels."
            />
            <RiskBlock
              risk="Status updates generic or opaque ('Processing')"
              impact="High"
              solution="Use specific statuses: 'Assigned to Officer Rajesh Kumar', 'Under Review', 'Awaiting Department Response'. Show timeline."
            />
            <RiskBlock
              risk="No notification system (user must keep checking)"
              impact="Medium"
              solution="Send SMS + email at every status change: submission, assignment, escalation, resolution. Include case ID."
            />
            <RiskBlock
              risk="Complaint closed without user consent"
              impact="High"
              solution="User must accept resolution to close. Provide 'Reopen' option if unsatisfied. Track reopen reasons."
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
              description="Pattern tested across 42 departments with 1.2M complaints processed"
            />
            <MaturityBlock
              status="Conformance"
              version="Mandatory"
              description="All government services must implement standardized grievance redressal"
            />
            <MaturityBlock
              status="Impact"
              version="68% satisfaction"
              description="68% citizen satisfaction with grievance resolution (up from 34% pre-implementation)"
            />
          </div>
        </ModuleContent>
      </DocModule>
    </section>
  );
}


// ==================== CODE DOWNLOADS ====================

const COMPLAINT_REACT_CODE = `import React, { useState } from 'react';

type Priority = 'low' | 'medium' | 'high' | 'critical';
type Status = 'draft' | 'submitted' | 'acknowledged' | 'in-progress' | 'escalated' | 'resolved';

interface Complaint {
  category: string;
  subject: string;
  description: string;
  priority: Priority;
  attachments: File[];
}

export function ComplaintEscalationPage() {
  const [step, setStep] = useState<'form' | 'review' | 'submitted'>('form');
  const [form, setForm] = useState<Complaint>({ category: '', subject: '', description: '', priority: 'medium', attachments: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [ticketId, setTicketId] = useState('');

  const categories = ['Service Delay', 'Wrong Information', 'Staff Behavior', 'Technical Issue', 'Payment Problem', 'Document Error', 'Other'];

  const handleSubmit = async () => {
    if (!form.category || !form.subject || !form.description) { setError('Please fill all required fields'); return; }
    setLoading(true); setError('');
    try {
      const res = await fetch('/api/complaints/submit', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, attachments: form.attachments.map(f => f.name) }),
      });
      if (!res.ok) { setError('Submission failed'); return; }
      setTicketId('GRV-' + Date.now().toString(36).toUpperCase());
      setStep('submitted');
    } catch { setError('Network error'); }
    finally { setLoading(false); }
  };

  const priorityColors: Record<Priority, string> = {
    low: 'border-gray-300 bg-gray-50', medium: 'border-yellow-300 bg-yellow-50',
    high: 'border-orange-300 bg-orange-50', critical: 'border-red-300 bg-red-50',
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-lg bg-card border border-border rounded-2xl p-8 shadow-sm">
        <h1 className="text-2xl font-bold text-foreground mb-2">File a Complaint</h1>
        <p className="text-sm text-muted-foreground mb-6">Grievance redressal for government services</p>
        {error && <div role="alert" className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">{error}</div>}
        {step === 'form' && (
          <div className="space-y-4">
            <div><label className="block text-sm font-medium mb-1">Category *</label><select value={form.category} onChange={e => setForm(f => ({...f, category: e.target.value}))} className="w-full px-4 py-3 border border-border rounded-lg"><option value="">Select category</option>{categories.map(c => <option key={c}>{c}</option>)}</select></div>
            <div><label className="block text-sm font-medium mb-1">Subject *</label><input value={form.subject} onChange={e => setForm(f => ({...f, subject: e.target.value}))} placeholder="Brief subject line" className="w-full px-4 py-3 border border-border rounded-lg" /></div>
            <div><label className="block text-sm font-medium mb-1">Description *</label><textarea value={form.description} onChange={e => setForm(f => ({...f, description: e.target.value}))} rows={4} placeholder="Describe your complaint in detail..." className="w-full px-4 py-3 border border-border rounded-lg" /></div>
            <div><label className="block text-sm font-medium mb-2">Priority</label><div className="grid grid-cols-4 gap-2">{(['low','medium','high','critical'] as Priority[]).map(p => (<button key={p} onClick={() => setForm(f => ({...f, priority: p}))} className={\`p-2 rounded-lg border-2 text-xs font-bold capitalize \${form.priority === p ? priorityColors[p] : 'border-border'}\`}>{p}</button>))}</div></div>
            <div><label className="block text-sm font-medium mb-1">Attachments</label><input type="file" multiple onChange={e => { if (e.target.files) setForm(f => ({...f, attachments: [...f.attachments, ...Array.from(e.target.files!)]})); }} className="text-sm" /></div>
            <button onClick={() => setStep('review')} className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold">Review & Submit</button>
          </div>
        )}
        {step === 'review' && (
          <div className="space-y-4">
            <div className="bg-muted rounded-xl p-4 text-sm space-y-2">
              <div><span className="text-muted-foreground">Category:</span> <span className="font-semibold">{form.category}</span></div>
              <div><span className="text-muted-foreground">Subject:</span> <span className="font-semibold">{form.subject}</span></div>
              <div><span className="text-muted-foreground">Priority:</span> <span className="font-semibold capitalize">{form.priority}</span></div>
              <div><span className="text-muted-foreground">Description:</span> <p className="mt-1">{form.description}</p></div>
            </div>
            <div className="flex gap-3">
              <button onClick={() => setStep('form')} className="flex-1 py-3 border border-border rounded-lg font-semibold">Edit</button>
              <button onClick={handleSubmit} disabled={loading} className="flex-1 py-3 bg-primary text-primary-foreground rounded-lg font-semibold disabled:opacity-60">{loading ? 'Submitting...' : 'Submit Complaint'}</button>
            </div>
          </div>
        )}
        {step === 'submitted' && (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto"><svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></div>
            <h2 className="text-xl font-bold text-foreground">Complaint Registered</h2>
            <p className="text-muted-foreground">Ticket ID: <span className="font-bold">{ticketId}</span></p>
            <p className="text-sm text-muted-foreground">You will receive updates via SMS. If unresolved within 7 days, you can escalate.</p>
          </div>
        )}
      </div>
    </div>
  );
}`;

const COMPLAINT_ANGULAR_CODE = `import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'ux4g-complaint-escalation',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: \`
    <div class="min-h-screen flex items-center justify-center bg-background p-4">
      <div class="w-full max-w-lg bg-card border border-border rounded-2xl p-8 shadow-sm">
        <h1 class="text-2xl font-bold mb-6">File a Complaint</h1>
        <div *ngIf="error" role="alert" class="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">{{ error }}</div>
        <form *ngIf="step === 'form'" [formGroup]="form" class="space-y-4">
          <div><label class="block text-sm font-medium mb-1">Category *</label><select formControlName="category" class="w-full px-4 py-3 border border-border rounded-lg"><option value="">Select</option><option *ngFor="let c of categories">{{ c }}</option></select></div>
          <div><label class="block text-sm font-medium mb-1">Subject *</label><input formControlName="subject" class="w-full px-4 py-3 border border-border rounded-lg" /></div>
          <div><label class="block text-sm font-medium mb-1">Description *</label><textarea formControlName="description" rows="4" class="w-full px-4 py-3 border border-border rounded-lg"></textarea></div>
          <button type="button" (click)="review()" class="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold">Review</button>
        </form>
        <div *ngIf="step === 'review'" class="space-y-4">
          <div class="bg-muted rounded-xl p-4 text-sm"><div>{{ form.value.category }} — {{ form.value.subject }}</div><div class="mt-2">{{ form.value.description }}</div></div>
          <div class="flex gap-3"><button (click)="step='form'" class="flex-1 py-3 border border-border rounded-lg font-semibold">Edit</button><button (click)="submit()" [disabled]="loading" class="flex-1 py-3 bg-primary text-primary-foreground rounded-lg font-semibold disabled:opacity-60">Submit</button></div>
        </div>
        <div *ngIf="step === 'submitted'" class="text-center py-8">
          <h2 class="text-xl font-bold mb-2">Complaint Registered</h2>
          <p class="text-muted-foreground">Ticket: {{ ticketId }}</p>
        </div>
      </div>
    </div>
  \`
})
export class ComplaintEscalationComponent {
  categories = ['Service Delay', 'Wrong Information', 'Staff Behavior', 'Technical Issue', 'Payment Problem'];
  form = new FormGroup({ category: new FormControl('', Validators.required), subject: new FormControl('', Validators.required), description: new FormControl('', Validators.required) });
  step = 'form'; loading = false; error = ''; ticketId = '';
  review() { if (this.form.invalid) { this.error = 'Fill all fields'; return; } this.error = ''; this.step = 'review'; }
  async submit() { this.loading = true; try { await fetch('/api/complaints/submit', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(this.form.value) }); this.ticketId = 'GRV-' + Date.now().toString(36).toUpperCase(); this.step = 'submitted'; } catch { this.error = 'Failed'; } finally { this.loading = false; } }
}`;

const COMPLAINT_HTML_CODE = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Complaint & Escalation — UX4G</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: system-ui, sans-serif; min-height: 100vh; display: flex; align-items: center; justify-content: center; background: #f9fafb; padding: 1rem; }
    .card { width: 100%; max-width: 32rem; background: #fff; border: 1px solid #e5e7eb; border-radius: 1rem; padding: 2rem; }
    h1 { font-size: 1.5rem; font-weight: 700; margin-bottom: 1.5rem; }
    label { display: block; font-size: 0.875rem; font-weight: 500; margin-bottom: 0.25rem; }
    input, select, textarea { width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 0.5rem; font-size: 1rem; outline: none; margin-bottom: 1rem; }
    .btn { width: 100%; padding: 0.75rem; background: #005196; color: #fff; border: none; border-radius: 0.5rem; font-size: 1rem; font-weight: 600; cursor: pointer; }
    .error { margin-bottom: 1rem; padding: 0.75rem; background: #fef2f2; border: 1px solid #fecaca; border-radius: 0.5rem; color: #b91c1c; font-size: 0.875rem; display: none; }
    .hidden { display: none; }
    .success { text-align: center; padding: 2rem 0; }
  </style>
</head>
<body>
  <div class="card">
    <h1>File a Complaint</h1>
    <div id="error" class="error" role="alert"></div>
    <form id="complaintForm" novalidate>
      <label for="category">Category *</label>
      <select id="category" required><option value="">Select</option><option>Service Delay</option><option>Wrong Information</option><option>Staff Behavior</option><option>Technical Issue</option><option>Payment Problem</option></select>
      <label for="subject">Subject *</label>
      <input id="subject" required placeholder="Brief subject" />
      <label for="description">Description *</label>
      <textarea id="description" rows="4" required placeholder="Describe your complaint..."></textarea>
      <button type="submit" class="btn">Submit Complaint</button>
    </form>
    <div id="successArea" class="hidden success">
      <h2 style="font-size:1.25rem;font-weight:700;margin-bottom:0.5rem">Complaint Registered</h2>
      <p style="color:#6b7280" id="ticketText"></p>
      <p style="color:#6b7280;font-size:0.875rem;margin-top:0.5rem">Updates via SMS. Escalate if unresolved in 7 days.</p>
    </div>
  </div>
  <script>
    document.getElementById('complaintForm').addEventListener('submit', async function(e) {
      e.preventDefault();
      const err = document.getElementById('error');
      err.style.display = 'none';
      const cat = document.getElementById('category').value;
      const sub = document.getElementById('subject').value;
      const desc = document.getElementById('description').value;
      if (!cat || !sub || !desc) { err.textContent = 'Fill all fields'; err.style.display = 'block'; return; }
      try {
        await fetch('/api/complaints/submit', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ category: cat, subject: sub, description: desc }) });
        const id = 'GRV-' + Date.now().toString(36).toUpperCase();
        document.getElementById('ticketText').textContent = 'Ticket ID: ' + id;
        document.getElementById('complaintForm').classList.add('hidden');
        document.getElementById('successArea').classList.remove('hidden');
      } catch { err.textContent = 'Network error'; err.style.display = 'block'; }
    });
  </script>
</body>
</html>`;

function ComplaintCodeDownloads() {
  const [copiedId, setCopiedId] = React.useState<string | null>(null);
  const copyToClipboard = (code: string, id: string) => { navigator.clipboard.writeText(code); setCopiedId(id); setTimeout(() => setCopiedId(null), 2000); };
  const downloadCode = (code: string, filename: string) => { const blob = new Blob([code], { type: 'text/plain' }); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = filename; a.click(); URL.revokeObjectURL(url); };
  const lanes = [
    { key: 'react', title: 'React', desc: 'TypeScript + Priority + Review', code: COMPLAINT_REACT_CODE, filename: 'ComplaintEscalationPage.tsx' },
    { key: 'angular', title: 'Angular', desc: 'Standalone + Reactive Forms', code: COMPLAINT_ANGULAR_CODE, filename: 'complaint-escalation.component.ts' },
    { key: 'html', title: 'HTML / CSS / JS', desc: 'No framework needed', code: COMPLAINT_HTML_CODE, filename: 'complaint-escalation.html' },
  ];
  return (
    <section id="code-downloads" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Code Downloads</h2>
        <p className="text-muted-foreground mt-1">Production-ready Complaint & Escalation implementations.</p>
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


// ==================== SIDEBAR ====================

function MetadataPanel() {
  return (
    <div className="border-2 border-border rounded-lg overflow-hidden bg-card">
      <div className="bg-muted border-b-2 border-border px-4 py-3">
        <h3 className="font-bold text-foreground text-sm">Pattern Metadata</h3>
      </div>
      <div className="p-4 space-y-3 text-sm">
        <MetadataRow label="Pattern ID" value="UX4G-PAT-005" />
        <MetadataRow label="Category" value="Grievance Redressal" />
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
        <QuickRefRow label="Avg. Duration" value="10-15 minutes" />
        <QuickRefRow label="Escalation Levels" value="3 tiers" />
        <QuickRefRow label="SLA Range" value="24hrs - 30days" />
        <QuickRefRow label="Components" value="9 core components" />
        <QuickRefRow label="WCAG Level" value="AA" />
        <QuickRefRow label="Satisfaction" value="68%" />
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
        <PrincipleItem icon={<Scale size={14} />} text="Rights: Citizen rights upfront (SLA, escalation)" />
        <PrincipleItem icon={<Eye size={14} />} text="Transparency: Full visibility of status and officer" />
        <PrincipleItem icon={<Shield size={14} />} text="Accountability: Named officers, SLA enforcement" />
        <PrincipleItem icon={<ArrowUp size={14} />} text="Recourse: Clear escalation path if unresolved" />
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
        <RiskItem severity="high" risk="No unique Case ID (untraceable)" />
        <RiskItem severity="high" risk="Officer not named (no accountability)" />
        <RiskItem severity="high" risk="SLA not enforced (no urgency)" />
        <RiskItem severity="medium" risk="No escalation path" />
        <RiskItem severity="medium" risk="Generic status updates" />
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
        <RelatedLink title="Status Tracking" />
        <RelatedLink title="Correction & Resubmission" />
        <RelatedLink title="Application Submission" />
        <RelatedLink title="Service Feedback" />
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

function SeverityLevelBlock({ level, color, description, examples }: any) {
  const colorConfig: any = {
    red: { bg: 'bg-red-50', border: 'border-red-300', text: 'text-red-700' },
    orange: { bg: 'bg-orange-50', border: 'border-orange-300', text: 'text-orange-700' },
    yellow: { bg: 'bg-yellow-50', border: 'border-yellow-300', text: 'text-yellow-700' },
    blue: { bg: 'bg-blue-50', border: 'border-blue-300', text: 'text-blue-700' }
  };

  return (
    <div className={`border-2 ${colorConfig[color].border} ${colorConfig[color].bg} rounded-lg p-4`}>
      <div className={`font-bold ${colorConfig[color].text} mb-2`}>{level}</div>
      <div className="text-sm text-muted-foreground mb-3">{description}</div>
      <ul className="space-y-1">
        {examples.map((example: string, idx: number) => (
          <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
            <div className="w-1 h-1 bg-gray-600 rounded-full mt-1.5 flex-shrink-0"></div>
            <span>{example}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FlowStep({ number, label, status }: any) {
  const statusConfig: any = {
    entry: { bg: 'bg-muted', border: 'border-gray-400', text: 'text-muted-foreground' },
    active: { bg: 'bg-blue-50', border: 'border-blue-400', text: 'text-blue-700' },
    optional: { bg: 'bg-purple-50', border: 'border-purple-400', text: 'text-purple-700' },
    success: { bg: 'bg-green-50', border: 'border-green-400', text: 'text-green-700' },
    warning: { bg: 'bg-orange-50', border: 'border-orange-400', text: 'text-orange-700' },
    decision: { bg: 'bg-yellow-50', border: 'border-yellow-400', text: 'text-yellow-700' },
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

function ProcessCard({ icon, title, description, time }: any) {
  return (
    <div className="border-2 border-border rounded-lg p-4 bg-card">
      <div className="flex items-start gap-3 mb-3">
        <div className="flex-shrink-0">{icon}</div>
        <div>
          <div className="font-bold text-sm text-foreground mb-1">{title}</div>
          <div className="text-xs text-muted-foreground">{description}</div>
        </div>
      </div>
      <div className="text-xs text-muted-foreground bg-background border border-border rounded px-2 py-1">
        {time}
      </div>
    </div>
  );
}

function SLACard({ severity, timeline }: any) {
  return (
    <div className="border-2 border-border rounded-lg p-3 bg-card text-center">
      <div className="font-bold text-xs text-foreground mb-1">{severity}</div>
      <div className="text-xs text-muted-foreground">{timeline}</div>
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

function CategoryOption({ value, label, description, selected }: any) {
  return (
    <label className={`flex flex-col gap-2 p-4 border-2 rounded-lg cursor-pointer transition-colors ${
      selected ? 'border-primary bg-blue-50' : 'border-border bg-card hover:border-gray-400'
    }`}>
      <div className="flex items-start gap-2">
        <div className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 ${
          selected ? 'border-primary bg-primary' : 'border-gray-400'
        }`}>
          {selected && <Check size={14} className="text-white" />}
        </div>
        <div className="flex-1">
          <div className="font-bold text-sm text-foreground">{label}</div>
          <div className="text-xs text-muted-foreground mt-1">{description}</div>
        </div>
      </div>
    </label>
  );
}

function SeverityOption({ level, timeline, color, selected }: any) {
  const colorConfig: any = {
    red: { border: 'border-red-400', bg: 'bg-red-50', text: 'text-red-700' },
    orange: { border: 'border-orange-400', bg: 'bg-orange-50', text: 'text-orange-700' },
    yellow: { border: 'border-yellow-400', bg: 'bg-yellow-50', text: 'text-yellow-700' },
    blue: { border: 'border-blue-400', bg: 'bg-blue-50', text: 'text-blue-700' }
  };

  return (
    <label className={`flex flex-col gap-2 p-4 border-2 rounded-lg cursor-pointer transition-colors ${
      selected ? `${colorConfig[color].border} ${colorConfig[color].bg}` : 'border-border bg-card hover:border-gray-400'
    }`}>
      <div className="flex items-center gap-2">
        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
          selected ? `${colorConfig[color].border}` : 'border-gray-400'
        }`}>
          {selected && <div className={`w-3 h-3 rounded-full ${colorConfig[color].border.replace('border-', 'bg-')}`}></div>}
        </div>
        <div className={`font-bold text-sm ${selected ? colorConfig[color].text : 'text-foreground'}`}>{level}</div>
      </div>
      <div className="text-xs text-muted-foreground">{timeline}</div>
    </label>
  );
}

function EvidenceType({ icon, type, examples }: any) {
  return (
    <div className="flex items-start gap-2">
      <div className="flex-shrink-0">{icon}</div>
      <div>
        <div className="font-bold text-foreground mb-1">{type}</div>
        <div className="text-muted-foreground">{examples}</div>
      </div>
    </div>
  );
}

function ReviewItem({ label, value }: any) {
  return (
    <div>
      <div className="text-muted-foreground mb-1">{label}</div>
      <div className="font-bold text-foreground">{value}</div>
    </div>
  );
}

function UploadedFile({ name, size }: any) {
  return (
    <div className="flex items-center justify-between p-3 bg-background border border-border rounded">
      <div className="flex items-center gap-2">
        <FileText size={16} className="text-blue-600" />
        <span className="text-sm text-foreground">{name}</span>
      </div>
      <span className="text-xs text-muted-foreground">{size}</span>
    </div>
  );
}

function AssignmentCard({ icon, title, value, detail }: any) {
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

function NotificationItem({ icon, channel, detail }: any) {
  return (
    <div className="flex items-center gap-2">
      {icon}
      <div>
        <div className="font-bold text-foreground">{channel}</div>
        <div className="text-muted-foreground">{detail}</div>
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

function EscalationReason({ value, label, selected }: any) {
  return (
    <label className={`flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer transition-colors ${
      selected ? 'border-red-400 bg-red-50' : 'border-border bg-card hover:border-gray-400'
    }`}>
      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
        selected ? 'border-red-600' : 'border-gray-400'
      }`}>
        {selected && <div className="w-3 h-3 rounded-full bg-red-600"></div>}
      </div>
      <span className="text-sm text-foreground">{label}</span>
    </label>
  );
}

function TimelineSummary({ date, event }: any) {
  return (
    <div className="flex items-center justify-between p-2 bg-background rounded">
      <span className="text-muted-foreground">{event}</span>
      <span className="text-muted-foreground">{date}</span>
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

function EscalationLevel({ level, title, designation, sla, description }: any) {
  return (
    <div className="border-2 border-purple-300 rounded-lg p-4 bg-card">
      <div className="font-bold text-purple-700 mb-2">{level}</div>
      <div className="font-bold text-sm text-foreground mb-1">{title}</div>
      <div className="text-xs text-muted-foreground mb-2">{designation}</div>
      <div className="text-xs font-bold text-foreground mb-2">SLA: {sla}</div>
      <div className="text-xs text-muted-foreground">{description}</div>
    </div>
  );
}

function TriggerBlock({ trigger, description, action, example }: any) {
  return (
    <div className="border-2 border-orange-300 bg-orange-50 dark:bg-orange-950/30 rounded-lg p-4">
      <div className="font-bold text-sm text-foreground mb-2">{trigger}</div>
      <div className="text-sm text-muted-foreground mb-2">{description}</div>
      <div className="text-sm text-foreground mb-2"><strong>Action:</strong> {action}</div>
      <div className="text-xs text-muted-foreground bg-card border border-orange-200 dark:border-orange-800 rounded p-2 italic">
        <strong>Example:</strong> {example}
      </div>
    </div>
  );
}

function ManualEscalationCriteria({ condition, description }: any) {
  return (
    <div className="flex items-start gap-2">
      <ArrowUp size={14} className="text-yellow-600 mt-0.5 flex-shrink-0" />
      <div>
        <div className="font-bold text-foreground">{condition}</div>
        <div className="text-muted-foreground">{description}</div>
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
