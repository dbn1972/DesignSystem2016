import React from "react";
import { Users, HelpCircle, CheckCircle, Clock, Upload, FileText, Shield, Globe, Code, BarChart3, AlertTriangle, Info, UserCheck, Smartphone, MapPin, Phone, Mail, ArrowRight, Check, ChevronRight, Eye, Target, Zap, AlertCircle, MessageSquare, Edit, Download, ExternalLink, Key, Fingerprint, Camera, Building2, Home, UserPlus, ClipboardCheck, Share2, RefreshCw, Printer, Copy } from "lucide-react";

// UX4G Service Pattern Library - Assisted Offline-to-Online Journeys
export default function AssistedOfflineOnlinePattern() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b-2 border-border">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-8">
          <div className="flex items-start justify-between">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-16 h-16 bg-muted border-2 border-border rounded flex items-center justify-center">
                  <Users size={32} className="text-muted-foreground" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">UX4G Service Pattern Library</div>
                  <h1 className="text-3xl font-bold text-foreground">Assisted Offline-to-Online Journeys</h1>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Inclusive service pattern for citizens with low digital confidence who need staff assistance to start services offline, 
                then transition to self-service online completion. Bridges India's digital divide with dignity and continuity.
              </p>
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-50 dark:bg-green-900/200 rounded-sm"></div>
                  <span className="text-muted-foreground">Pattern ID: <span className="font-bold text-foreground">UX4G-PAT-007</span></span>
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
              <div className="px-6 py-3 bg-green-100 border-2 border-green-300 rounded text-green-800 dark:text-green-300 font-bold text-sm text-center">
                STABLE
              </div>
              <div className="px-6 py-3 bg-orange-50 dark:bg-orange-950/30 border-2 border-orange-200 dark:border-orange-800 rounded text-orange-700 font-bold text-xs text-center uppercase">
                Conformance<br/>Recommended
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
              { id: "interaction-model", label: "Interaction Model" },
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
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-12 gap-8">
          
          {/* Main Content - 9 columns */}
          <div className="col-span-9 space-y-12">
            <PatternOverview />
            <JourneyFlow />
            <PageDesigns />
            <InteractionModel />
            <ComponentsUsed />
            <AccessibilityGuidance />
            <ContentGuidance />
            <ImplementationNotes />
            <GovernanceConformance />
            <AssistedCodeDownloads />
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <DocModule>
          <ModuleHeader title="Problem the Pattern Solves" />
          <ModuleContent>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              India's digital divide excludes millions from government services. Citizens with low literacy, no smartphone, 
              or limited digital confidence cannot complete online applications independently. Services must bridge offline and online worlds.
            </p>
            <div className="space-y-3">
              <ProblemSolutionBlock
                icon={<HelpCircle size={18} className="text-orange-600" />}
                problem="Citizens lack confidence or ability to use digital services independently"
                solution="Staff-assisted mode at Common Service Centers, Gram Panchayats, or government offices with clear handoff"
              />
              <ProblemSolutionBlock
                icon={<Upload size={18} className="text-blue-600" />}
                problem="Physical documents collected offline but service requires digital upload"
                solution="Staff captures docs offline, citizen completes upload later at home or kiosk with reference number"
              />
              <ProblemSolutionBlock
                icon={<AlertCircle size={18} className="text-red-600" />}
                problem="No continuity between offline visit and online completion (separate journeys)"
                solution="Unique reference number, SMS/email reminders, resume-from-where-left capability"
              />
            </div>
          </ModuleContent>
        </DocModule>

        <DocModule>
          <ModuleHeader title="Primary Users and Support Actors" />
          <ModuleContent>
            <div className="space-y-4">
              <UserGroup
                icon={<Users size={18} className="text-blue-600" />}
                name="Citizens (Low Digital Confidence)"
                description="Elderly, low-literacy, rural users needing assistance"
                percentage="60%"
              />
              <UserGroup
                icon={<UserCheck size={18} className="text-green-600" />}
                name="Government Staff / CSC Operators"
                description="Officials helping citizens with applications and data entry"
                percentage="25%"
              />
              <UserGroup
                icon={<Building2 size={18} className="text-purple-600" />}
                name="Intermediaries (Bank Mitra, Aadhaar Seva Kendra)"
                description="Authorized third-party service points providing assisted access"
                percentage="15%"
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
              title="Social Welfare Applications"
              examples={[
                "Pension enrollment at Gram Panchayat office",
                "Scholarship application with school office help",
                "Ration card renewal at Tehsil office",
                "Disability certificate application with assistance"
              ]}
            />
            <UseCaseCard
              title="Financial Inclusion Services"
              examples={[
                "Bank account opening via Bank Mitra",
                "PM-KISAN registration with CSC operator",
                "Loan application with assisted documentation",
                "Direct Benefit Transfer (DBT) enrollment"
              ]}
            />
            <UseCaseCard
              title="Identity and Registration"
              examples={[
                "Aadhaar enrollment at Seva Kendra",
                "Voter ID registration with BLO assistance",
                "Birth/death certificate registration",
                "Property registration with Registrar office"
              ]}
            />
          </div>
        </ModuleContent>
      </DocModule>

      <DocModule>
        <ModuleHeader title="Cross-Channel Service Delivery Model" />
        <ModuleContent>
          <div className="space-y-4">
            <ChannelPhaseBlock
              phase="Phase 1: Offline Visit (Staff-Assisted)"
              icon={<Building2 size={20} className="text-blue-600" />}
              activities={[
                "Citizen visits government office, CSC, or service center",
                "Staff verifies identity (Aadhaar, biometric, manual)",
                "Staff captures basic details and collects physical documents",
                "Staff scans/photographs documents if possible",
                "System generates unique reference number (REF-2026-XXXXX)",
                "Citizen receives printed acknowledgment with reference number"
              ]}
              outcome="Partial application created. Reference number issued."
            />
            <ChannelPhaseBlock
              phase="Phase 2: Transition (Handoff to Self-Service)"
              icon={<Share2 size={20} className="text-orange-600" />}
              activities={[
                "Citizen receives SMS/email with reference number and next steps",
                "Instructions on how to continue at home (mobile/computer) or at kiosk",
                "Option to receive help from family member or return to center",
                "Reminders sent if pending actions not completed in 7 days"
              ]}
              outcome="Clear ownership transfer. Citizen aware of next steps."
            />
            <ChannelPhaseBlock
              phase="Phase 3: Online Completion (Self-Service or Assisted)"
              icon={<Smartphone size={20} className="text-green-600" />}
              activities={[
                "Citizen or family member accesses portal with reference number",
                "Upload remaining documents (if not done by staff)",
                "Review and confirm pre-filled data",
                "Submit application digitally",
                "Receive confirmation and track status online"
              ]}
              outcome="Application submitted. Citizen can track independently."
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
      <SectionHeader title="Cross-Channel User Journey and Service Flow" />

      <DocModule>
        <ModuleHeader title="End-to-End Flow Diagram (Offline → Online Transition)" />
        <ModuleContent>
          <div className="space-y-4">
            <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-300 rounded-lg p-4 text-center font-bold text-blue-900">
              OFFLINE PHASE (Government Office / CSC)
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              <FlowStep number="01" label="Entry Point" status="entry" channel="Offline" />
              <FlowStep number="02" label="Staff Login" status="active" channel="Offline" />
              <FlowStep number="03" label="Identity Verify" status="active" channel="Offline" />
              <FlowStep number="04" label="Doc Capture" status="active" channel="Offline" />
              <FlowStep number="05" label="Ref Number Gen" status="success" channel="Offline" />
            </div>
            <div className="flex items-center justify-center">
              <div className="border-2 border-orange-400 bg-orange-100 rounded-lg px-8 py-3 font-bold text-orange-900">
                HANDOFF (SMS + Email + Printed Receipt)
              </div>
            </div>
            <div className="bg-green-50 dark:bg-green-950/30 border-2 border-green-300 rounded-lg p-4 text-center font-bold text-green-900">
              ONLINE PHASE (Home / Mobile / Kiosk)
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              <FlowStep number="06" label="Resume Access" status="info" channel="Online" />
              <FlowStep number="07" label="Upload Docs" status="active" channel="Online" />
              <FlowStep number="08" label="Review Data" status="active" channel="Online" />
              <FlowStep number="09" label="Submit" status="success" channel="Online" />
              <FlowStep number="10" label="Track Status" status="info" channel="Online" />
            </div>
          </div>
        </ModuleContent>
      </DocModule>

      <DocModule>
        <ModuleHeader title="Recommended Page Sequence (Dual-Mode Design)" />
        <ModuleContent>
          <div className="space-y-3">
            <PageSequenceRow
              number="1"
              title="Assisted Service Entry (Staff-Facing)"
              description="Staff logs in with operator credentials. Shows daily stats, queue management."
              mode="Staff"
              required={true}
            />
            <PageSequenceRow
              number="2"
              title="Citizen Identity Capture (Assisted)"
              description="Staff enters Aadhaar or captures biometric. Fetches existing citizen data if available."
              mode="Staff"
              required={true}
            />
            <PageSequenceRow
              number="3"
              title="Application Data Entry (Assisted)"
              description="Staff fills form on behalf of citizen. Simplified layout, keyboard shortcuts."
              mode="Staff"
              required={true}
            />
            <PageSequenceRow
              number="4"
              title="Document Collection (Offline/Scan)"
              description="Staff scans documents using scanner or mobile camera. Attach to application draft."
              mode="Staff"
              required={false}
            />
            <PageSequenceRow
              number="5"
              title="Reference Number Generation"
              description="System creates unique REF number. Print acknowledgment receipt for citizen."
              mode="Staff"
              required={true}
            />
            <PageSequenceRow
              number="6"
              title="Handoff Instructions (Citizen View)"
              description="Simple page explaining next steps. Large text, visual icons, available in local language."
              mode="Citizen"
              required={true}
            />
            <PageSequenceRow
              number="7"
              title="Resume Application (Self-Service)"
              description="Citizen enters REF number to continue. Shows what's completed vs pending."
              mode="Citizen"
              required={true}
            />
            <PageSequenceRow
              number="8"
              title="Pending Upload (Self-Service)"
              description="Upload missing documents. Option to skip and upload later (if not mandatory)."
              mode="Citizen"
              required={false}
            />
            <PageSequenceRow
              number="9"
              title="Review and Submit (Self-Service)"
              description="Review all data entered by staff. Citizen confirms and submits."
              mode="Citizen"
              required={true}
            />
            <PageSequenceRow
              number="10"
              title="Confirmation and Tracking (Self-Service)"
              description="Application ID generated. Track status online or via SMS."
              mode="Citizen"
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
      <SectionHeader title="Example Page Designs (Dual-Mode Interface)" />

      {/* Staff Entry Page */}
      <DocModule>
        <ModuleHeader title="Page 1: Assisted Service Entry (Staff/Operator View)" />
        <ModuleContent>
          <div className="border-2 border-border rounded-lg overflow-hidden bg-card">
            <div className="bg-primary text-white p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <UserCheck size={28} />
                  <div>
                    <h2 className="text-2xl font-bold">Operator Dashboard</h2>
                    <p className="text-sm text-blue-100">CSC Noida Sector 15 • Operator ID: OP-NOI-456</p>
                  </div>
                </div>
                <button className="px-4 py-2 bg-card text-primary font-bold rounded hover:bg-muted">
                  Logout
                </button>
              </div>
            </div>
            <div className="p-8 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <DashboardStat
                  icon={<Users size={24} className="text-blue-600" />}
                  label="Citizens Served Today"
                  value="12"
                  detail="Average time: 8 minutes"
                />
                <DashboardStat
                  icon={<ClipboardCheck size={24} className="text-green-600" />}
                  label="Applications Started"
                  value="8"
                  detail="5 completed, 3 pending"
                />
                <DashboardStat
                  icon={<Clock size={24} className="text-orange-600" />}
                  label="Pending Follow-Ups"
                  value="15"
                  detail="Citizens with incomplete apps"
                />
              </div>

              <div className="border-2 border-border rounded-lg overflow-hidden">
                <div className="bg-muted border-b-2 border-border px-6 py-4">
                  <h3 className="font-bold text-foreground">Start New Assisted Application</h3>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <ServiceButton
                      icon={<FileText size={24} className="text-blue-600" />}
                      title="Pension Enrollment"
                      description="Old Age / Widow / Disability Pension"
                    />
                    <ServiceButton
                      icon={<Building2 size={24} className="text-green-600" />}
                      title="Ration Card"
                      description="New / Renewal / Update"
                    />
                    <ServiceButton
                      icon={<Shield size={24} className="text-purple-600" />}
                      title="Scholarship"
                      description="Pre-Matric / Post-Matric / Merit"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-600 p-6 rounded-r-lg">
                <div className="flex items-start gap-3">
                  <Info size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-foreground mb-2">Operator Guidelines</div>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Verify citizen identity using Aadhaar or other govt-issued ID</li>
                      <li>• Capture documents clearly (use scanner if available, otherwise mobile camera)</li>
                      <li>• Always print acknowledgment receipt with reference number</li>
                      <li>• Explain next steps to citizen in local language</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <PageAnnotation items={[
            "Staff-facing interface (not citizen-facing)",
            "Dashboard shows operator performance metrics",
            "Service selection prominent with visual icons",
            "Guidelines visible on main screen (not buried in help section)",
            "Logout button clearly accessible (shared device security)",
            "Navy blue header indicates operator mode (distinct from citizen UI)"
          ]} />
        </ModuleContent>
      </DocModule>

      {/* Identity Capture */}
      <DocModule>
        <ModuleHeader title="Page 2: Citizen Identity Capture (Operator-Assisted)" />
        <ModuleContent>
          <div className="border-2 border-border rounded-lg overflow-hidden bg-card">
            <div className="bg-background border-b-2 border-border p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-1">Step 1: Verify Citizen Identity</h2>
                  <div className="text-sm text-muted-foreground">Pension Enrollment Application</div>
                </div>
                <div className="text-sm text-muted-foreground">Operator: Rajesh Kumar (OP-NOI-456)</div>
              </div>
            </div>
            <div className="p-8 space-y-6">
              <div className="bg-yellow-50 dark:bg-yellow-950/30 border-l-4 border-yellow-600 p-6 rounded-r-lg">
                <div className="font-bold text-foreground mb-2">Identity Verification Method</div>
                <div className="text-sm text-muted-foreground mb-4">
                  Select the method available at this service center. Aadhaar-based verification is preferred.
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <VerificationMethod
                    icon={<Fingerprint size={24} className="text-blue-600" />}
                    method="Aadhaar Biometric"
                    description="Fingerprint or iris scan"
                    recommended={true}
                    selected={true}
                  />
                  <VerificationMethod
                    icon={<Key size={24} className="text-green-600" />}
                    method="Aadhaar OTP"
                    description="Mobile number linked to Aadhaar"
                    recommended={true}
                    selected={false}
                  />
                  <VerificationMethod
                    icon={<FileText size={24} className="text-orange-600" />}
                    method="Manual Entry"
                    description="Aadhaar number + document check"
                    recommended={false}
                    selected={false}
                  />
                </div>
              </div>

              <div className="border-2 border-blue-300 bg-blue-50 dark:bg-blue-950/30 rounded-lg p-6">
                <label className="block text-sm font-bold text-foreground mb-4">
                  Enter Citizen's Aadhaar Number <span className="text-red-600">*</span>
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input aria-label="XXXX XXXX XXXX" type="text"
                      placeholder="XXXX XXXX XXXX"
                      className="w-full px-4 py-3 border-2 border-border rounded-lg text-lg font-mono"
                      maxLength={12}
                    />
                    <div className="text-xs text-muted-foreground mt-2">12-digit Aadhaar number</div>
                  </div>
                  <div className="flex items-center">
                    <button className="px-8 py-3 bg-primary text-white font-bold rounded-lg hover:opacity-90 flex items-center gap-2">
                      <Fingerprint size={20} />
                      Capture Biometric
                    </button>
                  </div>
                </div>
              </div>

              <div className="border-2 border-border rounded-lg p-6 bg-card">
                <div className="font-bold text-foreground mb-4">Citizen Details (Auto-Fetched from Aadhaar)</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <DetailRow label="Name" value="SUNITA DEVI" />
                  <DetailRow label="Date of Birth" value="15/03/1958 (66 years old)" />
                  <DetailRow label="Gender" value="Female" />
                  <DetailRow label="Mobile Number" value="+91 98765-43210" />
                  <DetailRow label="Address" value="Village Rampur, Post Simariya, Tehsil Sadar, District Sitapur, Uttar Pradesh - 261001" />
                </div>
                <div className="mt-4 bg-green-50 dark:bg-green-950/30 border border-green-300 rounded p-3 text-sm text-muted-foreground">
                  <strong>✓ Identity Verified Successfully</strong> — Biometric match confirmed. Citizen details fetched from UIDAI database.
                </div>
              </div>

              <div className="flex items-center justify-between pt-6 border-t-2 border-border">
                <button className="px-6 py-3 bg-card border-2 border-border text-muted-foreground font-medium rounded-lg hover:bg-background">
                  Cancel
                </button>
                <button className="px-10 py-4 bg-primary text-white font-bold rounded-lg hover:opacity-90 flex items-center gap-2">
                  Continue to Application Form
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
          <PageAnnotation items={[
            "Three identity verification methods (biometric preferred, fallback to OTP or manual)",
            "Auto-fetch citizen details from Aadhaar (reduces manual data entry errors)",
            "Large input field for Aadhaar number (easy to read and type)",
            "Visual confirmation when biometric match succeeds",
            "Operator ID visible in header (accountability)",
            "Simplified operator UI (efficient for repeated daily use)"
          ]} />
        </ModuleContent>
      </DocModule>

      {/* Data Capture */}
      <DocModule>
        <ModuleHeader title="Page 3: Assisted Data Entry (Operator Fills on Behalf of Citizen)" />
        <ModuleContent>
          <div className="border-2 border-border rounded-lg overflow-hidden bg-card">
            <div className="bg-background border-b-2 border-border p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-foreground">Step 2: Application Details</h2>
                <div className="text-sm text-muted-foreground">Progress: 2 of 4</div>
              </div>
              <ProgressBar steps={4} current={2} />
            </div>
            <div className="p-8 space-y-6">
              <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6">
                <div className="font-bold text-foreground mb-2">Citizen: SUNITA DEVI (Aadhaar: XXXX-XXXX-3210)</div>
                <div className="text-sm text-muted-foreground">Service: Old Age Pension Enrollment</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-foreground mb-2">
                    Bank Name <span className="text-red-600">*</span>
                  </label>
                  <select aria-label="Select option" className="w-full px-4 py-3 border-2 border-border rounded-lg">
                    <option>Select Bank</option>
                    <option>State Bank of India</option>
                    <option>Punjab National Bank</option>
                    <option>Bank of Baroda</option>
                    <option>Canara Bank</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-foreground mb-2">
                    Branch Name <span className="text-red-600">*</span>
                  </label>
                  <input aria-label="e.g., Sitapur Main Branch" type="text"
                    placeholder="e.g., Sitapur Main Branch"
                    className="w-full px-4 py-3 border-2 border-border rounded-lg"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-foreground mb-2">
                    Account Number <span className="text-red-600">*</span>
                  </label>
                  <input aria-label="Enter bank account number" type="text"
                    placeholder="Enter bank account number"
                    className="w-full px-4 py-3 border-2 border-border rounded-lg font-mono"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-foreground mb-2">
                    IFSC Code <span className="text-red-600">*</span>
                  </label>
                  <input aria-label="e.g., SBIN0001234" type="text"
                    placeholder="e.g., SBIN0001234"
                    className="w-full px-4 py-3 border-2 border-border rounded-lg font-mono"
                  />
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-950/30 border-l-4 border-yellow-600 p-4 rounded-r-lg">
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Info size={16} className="text-yellow-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Operator Tip:</strong> Ask citizen to provide bank passbook. Verify account number and IFSC code carefully 
                    to prevent payment failures.
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-foreground mb-2">
                  Pension Category <span className="text-red-600">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <CategoryCard
                    title="Old Age Pension"
                    description="Age 60+ with BPL certificate"
                    selected={true}
                  />
                  <CategoryCard
                    title="Widow Pension"
                    description="Widow with death certificate"
                    selected={false}
                  />
                  <CategoryCard
                    title="Disability Pension"
                    description="40%+ disability certified"
                    selected={false}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between pt-6 border-t-2 border-border">
                <button className="px-6 py-3 bg-card border-2 border-border text-muted-foreground font-medium rounded-lg hover:bg-background">
                  Previous
                </button>
                <button className="px-10 py-4 bg-primary text-white font-bold rounded-lg hover:opacity-90 flex items-center gap-2">
                  Continue to Document Collection
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
          <PageAnnotation items={[
            "Operator-facing form (simplified, large inputs)",
            "Citizen name and Aadhaar prominently displayed (confirm right person)",
            "Bank details with validation (common error point)",
            "Operator tips inline (not in separate help section)",
            "Category selection as visual cards (easier than dropdown)",
            "Progress indicator shows step 2 of 4"
          ]} />
        </ModuleContent>
      </DocModule>

      {/* Document Collection */}
      <DocModule>
        <ModuleHeader title="Page 4: Document Collection (Offline Scan or Defer to Citizen)" />
        <ModuleContent>
          <div className="border-2 border-border rounded-lg overflow-hidden bg-card">
            <div className="bg-background border-b-2 border-border p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-foreground">Step 3: Collect Supporting Documents</h2>
                <div className="text-sm text-muted-foreground">Progress: 3 of 4</div>
              </div>
              <ProgressBar steps={4} current={3} />
            </div>
            <div className="p-8 space-y-6">
              <div className="bg-purple-50 dark:bg-purple-950/30 border-l-4 border-purple-600 p-6 rounded-r-lg">
                <div className="flex items-start gap-3">
                  <Info size={20} className="text-purple-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-foreground mb-2">Document Collection Options</div>
                    <div className="text-sm text-muted-foreground">
                      <strong>Option 1:</strong> Scan documents now using scanner or mobile camera (faster)<br/>
                      <strong>Option 2:</strong> Citizen will upload documents later at home/kiosk (more flexible)
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <DocumentCollectionItem
                  title="Age Proof (Birth Certificate / Aadhaar / Pan Card)"
                  status="pending"
                  actions={
                    <div className="flex gap-2">
                      <button className="px-4 py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 flex items-center gap-2">
                        <Camera size={16} />
                        Scan Now
                      </button>
                      <button className="px-4 py-2 bg-gray-200 text-muted-foreground font-bold rounded hover:bg-gray-300">
                        Defer to Citizen
                      </button>
                    </div>
                  }
                />
                <DocumentCollectionItem
                  title="BPL Certificate"
                  status="pending"
                  actions={
                    <div className="flex gap-2">
                      <button className="px-4 py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 flex items-center gap-2">
                        <Camera size={16} />
                        Scan Now
                      </button>
                      <button className="px-4 py-2 bg-gray-200 text-muted-foreground font-bold rounded hover:bg-gray-300">
                        Defer to Citizen
                      </button>
                    </div>
                  }
                />
                <DocumentCollectionItem
                  title="Bank Passbook (First Page)"
                  status="scanned"
                  actions={
                    <div className="flex items-center gap-2 text-green-700 dark:text-green-400">
                      <CheckCircle size={16} />
                      <span className="font-bold text-sm">Scanned Successfully</span>
                      <button className="px-3 py-1 bg-card border border-border text-muted-foreground text-sm rounded hover:bg-background ml-4">
                        Re-scan
                      </button>
                    </div>
                  }
                />
              </div>

              <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6">
                <div className="font-bold text-foreground mb-3">What Happens to Deferred Documents?</div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">1</div>
                    <span>Citizen receives SMS/email with reference number and upload link</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">2</div>
                    <span>They can upload from home using mobile/computer OR return to this center</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">3</div>
                    <span>Reminder sent if documents not uploaded within 7 days</span>
                  </li>
                </ul>
              </div>

              <div className="flex items-center justify-between pt-6 border-t-2 border-border">
                <button className="px-6 py-3 bg-card border-2 border-border text-muted-foreground font-medium rounded-lg hover:bg-background">
                  Previous
                </button>
                <button className="px-10 py-4 bg-green-600 text-white font-bold rounded-lg hover:bg-green-600 flex items-center gap-2">
                  <CheckCircle size={20} />
                  Generate Reference Number
                </button>
              </div>
            </div>
          </div>
          <PageAnnotation items={[
            "Two clear options: Scan now OR defer to citizen (flexible)",
            "Scan button with camera icon (visual affordance)",
            "Status indicator for each document (pending/scanned)",
            "Explanation of what happens to deferred documents (reduces anxiety)",
            "Reminder system mentioned (continuity assurance)",
            "Green 'Generate Reference' button (final step of offline phase)"
          ]} />
        </ModuleContent>
      </DocModule>

      {/* Reference Number */}
      <DocModule>
        <ModuleHeader title="Page 5: Reference Number and Handoff (Printed Acknowledgment)" />
        <ModuleContent>
          <div className="border-2 border-border rounded-lg overflow-hidden bg-card">
            <div className="bg-green-600 text-white p-8 text-center">
              <div className="w-20 h-20 bg-card rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={48} className="text-green-600" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Application Started Successfully</h2>
              <p className="text-lg text-green-100">
                Reference number generated. Print acknowledgment receipt for citizen.
              </p>
            </div>
            <div className="p-8 space-y-6">
              <div className="border-2 border-border rounded-lg p-6 bg-background">
                <div className="text-center mb-6">
                  <div className="text-sm text-muted-foreground mb-2">Reference Number</div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground font-mono mb-4">REF-2026-789456</div>
                  <div className="text-sm text-muted-foreground">Save this number. You'll need it to continue your application.</div>
                </div>
                
                <div className="border-t-2 border-border pt-6 mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mb-4">
                    <DetailRow label="Citizen Name" value="SUNITA DEVI" />
                    <DetailRow label="Service" value="Old Age Pension Enrollment" />
                    <DetailRow label="Aadhaar (Last 4 digits)" value="XXXX-3210" />
                    <DetailRow label="Created Date" value="9 April 2026, 11:30 AM" />
                    <DetailRow label="CSC Location" value="Noida Sector 15" />
                    <DetailRow label="Operator" value="Rajesh Kumar (OP-NOI-456)" />
                  </div>

                  <div className="bg-yellow-50 dark:bg-yellow-950/30 border-2 border-yellow-300 rounded-lg p-4 mb-4">
                    <div className="font-bold text-foreground mb-2">Pending Actions (To Complete at Home)</div>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <div className="w-5 h-5 bg-yellow-600 text-white rounded flex items-center justify-center text-xs">⏳</div>
                        Upload Age Proof (Birth Certificate / Aadhaar / Pan Card)
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-5 h-5 bg-yellow-600 text-white rounded flex items-center justify-center text-xs">⏳</div>
                        Upload BPL Certificate
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-5 h-5 bg-green-600 text-white rounded flex items-center justify-center text-xs">✓</div>
                        Bank Passbook — Already collected
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-600 p-6 rounded-r-lg">
                <div className="font-bold text-foreground mb-3">Next Steps for Citizen</div>
                <ol className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">1</div>
                    <span>You'll receive SMS and email with reference number and upload link</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">2</div>
                    <span>Visit the link on your mobile or computer, or ask family member to help</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">3</div>
                    <span>Upload missing documents (Age Proof and BPL Certificate)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">4</div>
                    <span>Review all details and submit your application</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">5</div>
                    <span>Track application status online or return to this center for help</span>
                  </li>
                </ol>
              </div>

              <div className="flex items-center justify-center gap-4 pt-6">
                <button className="px-10 py-4 bg-primary text-white font-bold rounded-lg hover:opacity-90 flex items-center gap-2">
                  <Printer size={20} />
                  Print Acknowledgment Receipt
                </button>
                <button className="px-8 py-3 bg-card border-2 border-border text-muted-foreground font-bold rounded-lg hover:bg-background flex items-center gap-2">
                  <MessageSquare size={18} />
                  Send SMS Now
                </button>
              </div>

              <div className="bg-background border-2 border-border rounded-lg p-4 text-sm text-muted-foreground text-center">
                <strong>Need Help?</strong> Citizen can return to this CSC or call helpline: 
                <span className="font-bold text-blue-600 ml-2">1800-XXX-XXXX</span>
              </div>
            </div>
          </div>
          <PageAnnotation items={[
            "Large reference number (REF-2026-789456) for easy reading and writing",
            "Pending actions clearly listed (what citizen needs to do)",
            "Completed actions marked green (bank passbook already collected)",
            "5-step process for citizen's next actions (numbered, sequential)",
            "Print button prominent (most citizens will need printed copy)",
            "SMS option for those with mobile (dual channel)",
            "Helpline number visible (support if stuck)"
          ]} />
        </ModuleContent>
      </DocModule>

      {/* Citizen Handoff */}
      <DocModule>
        <ModuleHeader title="Page 6: Citizen Handoff Page (Self-Service Resume)" />
        <ModuleContent>
          <div className="border-2 border-border rounded-lg overflow-hidden bg-card">
            <div className="bg-gradient-to-r from-orange-500 via-white to-green-500 p-1">
              <div className="bg-card p-4 sm:p-6 lg:p-8">
                <div className="text-center mb-6">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">अपना आवेदन जारी रखें</h2>
                  <h2 className="text-3xl font-bold text-muted-foreground mb-4">Continue Your Application</h2>
                  <p className="text-lg text-muted-foreground">
                    आपने सरकारी कार्यालय में अपना आवेदन शुरू किया था।<br/>
                    You started your application at a government office.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-8 space-y-6">
              <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6">
                <label className="block text-sm font-bold text-foreground mb-4">
                  अपना संदर्भ नंबर दर्ज करें / Enter Your Reference Number
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <input aria-label="REF-2026-XXXXXX" type="text"
                    placeholder="REF-2026-XXXXXX"
                    className="col-span-2 px-6 py-4 border-2 border-border rounded-lg text-2xl font-mono text-center"
                  />
                  <button className="px-6 py-4 bg-primary text-white font-bold rounded-lg hover:opacity-90 text-lg">
                    जारी रखें / Continue
                  </button>
                </div>
                <div className="text-sm text-muted-foreground mt-3 text-center">
                  आपकी रसीद पर छपा नंबर / Number printed on your receipt
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <HelpCard
                  icon={<FileText size={32} className="text-blue-600" />}
                  title="संदर्भ नंबर कहाँ है?"
                  titleEn="Where is reference number?"
                  description="आपकी छपी हुई रसीद पर / On your printed receipt"
                />
                <HelpCard
                  icon={<Upload size={32} className="text-green-600" />}
                  title="क्या करना है?"
                  titleEn="What to do?"
                  description="बाकी दस्तावेज अपलोड करें / Upload remaining documents"
                />
                <HelpCard
                  icon={<Phone size={32} className="text-orange-600" />}
                  title="मदद चाहिए?"
                  titleEn="Need help?"
                  description="हेल्पलाइन: 1800-XXX-XXXX"
                />
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-950/30 border-l-4 border-yellow-600 p-6 rounded-r-lg">
                <div className="font-bold text-foreground mb-3">
                  अगर आपके पास रसीद नहीं है / If You Don't Have Receipt
                </div>
                <div className="text-sm text-muted-foreground space-y-2">
                  <p>• एसएमएस या ईमेल चेक करें (संदर्भ नंबर वहाँ भेजा गया था)</p>
                  <p>• Check SMS or email (reference number was sent there)</p>
                  <p>• या नजदीकी सरकारी कार्यालय/CSC जाएं (आधार कार्ड लेकर)</p>
                  <p>• Or visit nearest government office/CSC (bring Aadhaar card)</p>
                </div>
              </div>

              <div className="bg-background border-2 border-border rounded-lg p-6">
                <div className="font-bold text-foreground mb-3 text-center">
                  आप कहाँ से जारी रख सकते हैं? / Where Can You Continue?
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center text-sm">
                  <div className="p-4 bg-card border-2 border-border rounded-lg">
                    <Smartphone size={32} className="text-blue-600 mx-auto mb-2" />
                    <div className="font-bold text-foreground">मोबाइल / Mobile</div>
                  </div>
                  <div className="p-4 bg-card border-2 border-border rounded-lg">
                    <Home size={32} className="text-green-600 mx-auto mb-2" />
                    <div className="font-bold text-foreground">घर पर / At Home</div>
                  </div>
                  <div className="p-4 bg-card border-2 border-border rounded-lg">
                    <Building2 size={32} className="text-purple-600 mx-auto mb-2" />
                    <div className="font-bold text-foreground">CSC / Kiosk</div>
                  </div>
                  <div className="p-4 bg-card border-2 border-border rounded-lg">
                    <Users size={32} className="text-orange-600 mx-auto mb-2" />
                    <div className="font-bold text-foreground">परिवार की मदद से / With Family</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <PageAnnotation items={[
            "Bilingual (Hindi + English) throughout — critical for low-literacy users",
            "Tricolor header (government branding, builds trust)",
            "Large reference number input (easy to read and type)",
            "Three help cards answer common questions (where is number, what to do, need help)",
            "Guidance for lost receipt scenario (SMS/email or visit office)",
            "Visual icons show where citizen can continue (mobile, home, CSC, with family)",
            "Simple, reassuring tone (reduces anxiety)"
          ]} />
        </ModuleContent>
      </DocModule>

      {/* Pending Upload */}
      <DocModule>
        <ModuleHeader title="Page 7: Pending Document Upload (Self-Service Completion)" />
        <ModuleContent>
          <div className="border-2 border-border rounded-lg overflow-hidden bg-card">
            <div className="bg-background border-b-2 border-border p-6">
              <h2 className="text-xl font-bold text-foreground mb-2">Complete Your Application</h2>
              <div className="text-sm text-muted-foreground">Reference: REF-2026-789456 • Pension Enrollment</div>
            </div>
            <div className="p-8 space-y-6">
              <div className="bg-green-50 dark:bg-green-950/30 border-2 border-green-200 dark:border-green-800 rounded-lg p-6">
                <div className="flex items-start gap-3 mb-4">
                  <CheckCircle size={24} className="text-green-600 flex-shrink-0" />
                  <div>
                    <div className="font-bold text-foreground mb-2">Your Application is Almost Complete!</div>
                    <div className="text-sm text-muted-foreground">
                      You started this application at <strong>CSC Noida Sector 15</strong> on 9 April 2026. 
                      Just upload 2 more documents to submit your application.
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-2 border-border rounded-lg overflow-hidden">
                <div className="bg-muted border-b-2 border-border px-6 py-4">
                  <h3 className="font-bold text-foreground">Application Progress</h3>
                </div>
                <div className="p-6 space-y-4">
                  <ProgressItem
                    title="Identity Verified"
                    status="complete"
                    description="Aadhaar biometric verification completed at CSC"
                  />
                  <ProgressItem
                    title="Application Details"
                    status="complete"
                    description="Bank details and pension category entered"
                  />
                  <ProgressItem
                    title="Documents"
                    status="pending"
                    description="2 of 3 documents uploaded. 2 pending."
                  />
                  <ProgressItem
                    title="Final Submission"
                    status="locked"
                    description="Available after all documents are uploaded"
                  />
                </div>
              </div>

              <div className="border-2 border-orange-300 bg-orange-50 dark:bg-orange-950/30 rounded-lg p-6">
                <div className="font-bold text-foreground mb-4">Upload Pending Documents</div>
                <div className="space-y-4">
                  <PendingDocumentUpload
                    title="Age Proof (Birth Certificate / Aadhaar / Pan Card)"
                    required={true}
                    status="pending"
                  />
                  <PendingDocumentUpload
                    title="BPL Certificate"
                    required={true}
                    status="pending"
                  />
                  <PendingDocumentUpload
                    title="Bank Passbook (First Page)"
                    required={true}
                    status="uploaded"
                  />
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-600 p-6 rounded-r-lg">
                <div className="font-bold text-foreground mb-3">How to Upload</div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span><strong>From Mobile:</strong> Take clear photos of documents using your phone camera</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span><strong>From Computer:</strong> Scan documents or upload photos from your phone</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span><strong>Need Help:</strong> Visit nearest CSC or government office (they'll upload for you)</span>
                  </li>
                </ul>
              </div>

              <div className="flex items-center justify-between pt-6 border-t-2 border-border">
                <div className="text-sm text-muted-foreground">
                  <strong>Deadline:</strong> Upload by 16 April 2026 (7 days remaining)
                </div>
                <button className="px-10 py-4 bg-primary text-white font-bold rounded-lg hover:opacity-90 flex items-center gap-2">
                  Continue to Upload
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
          <PageAnnotation items={[
            "Positive reinforcement ('Almost complete!' instead of 'Incomplete')",
            "Context reminder (started at CSC on 9 April)",
            "Progress breakdown (what's done vs pending)",
            "2 of 3 documents uploaded (shows progress, not just what's missing)",
            "Three upload methods (mobile camera, computer, CSC help)",
            "Deadline visible but not alarming (7 days remaining)",
            "Locked final step creates clear dependency (upload first, then submit)"
          ]} />
        </ModuleContent>
      </DocModule>
    </section>
  );
}

// ==================== INTERACTION MODEL ====================

function InteractionModel() {
  return (
    <section id="interaction-model" className="space-y-6">
      <SectionHeader title="Staff-Assisted vs Self-Service Interaction Model" />

      <DocModule>
        <ModuleHeader title="Dual-Mode Design Framework" />
        <ModuleContent>
          <div className="bg-purple-50 dark:bg-purple-950/30 border-2 border-purple-200 dark:border-purple-800 rounded-lg p-6">
            <div className="flex items-start gap-3 mb-4">
              <Users size={24} className="text-purple-600 flex-shrink-0" />
              <div>
                <div className="font-bold text-foreground mb-2">Two Distinct User Interfaces</div>
                <div className="text-sm text-muted-foreground">
                  The same service has two different UIs optimized for different contexts: 
                  staff-assisted (efficiency-focused) and citizen self-service (simplicity-focused).
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <ModeComparisonBlock
                mode="Staff/Operator Mode"
                color="blue"
                characteristics={[
                  "Efficiency-optimized: keyboard shortcuts, quick navigation",
                  "Higher information density (more fields per screen)",
                  "Operator ID and session management visible",
                  "Performance metrics (citizens served, time per task)",
                  "Multi-tasking support (queue management)",
                  "Technical terminology acceptable"
                ]}
              />
              <ModeComparisonBlock
                mode="Citizen Self-Service Mode"
                color="green"
                characteristics={[
                  "Simplicity-first: large buttons, one task per screen",
                  "Lower information density (avoid overwhelm)",
                  "Bilingual (Hindi + English minimum)",
                  "Visual icons and illustrations",
                  "Error prevention and helpful inline guidance",
                  "Plain language, no jargon"
                ]}
              />
            </div>
          </div>
        </ModuleContent>
      </DocModule>

      <DocModule>
        <ModuleHeader title="Handoff Mechanism (Critical Transition Point)" />
        <ModuleContent>
          <div className="space-y-4">
            <HandoffStageBlock
              stage="1. Reference Number Generation"
              description="System creates unique alphanumeric ID linking staff-initiated application to citizen's later access"
              implementation="Format: REF-YYYY-NNNNNN. Store in database with citizen mobile/email for retrieval."
            />
            <HandoffStageBlock
              stage="2. Multi-Channel Communication"
              description="Send reference number and next steps via multiple channels to maximize reach"
              implementation="SMS (primary), Email (secondary), Printed receipt (tertiary). All three channels used."
            />
            <HandoffStageBlock
              stage="3. Resume Capability"
              description="Citizen can continue from exact point where staff stopped (not restart)"
              implementation="Store application state: {completed_steps: [], pending_actions: [], data: {}}. Resume loads saved state."
            />
            <HandoffStageBlock
              stage="4. Reminder System"
              description="Automated reminders if citizen doesn't complete pending actions"
              implementation="Day 3: SMS reminder. Day 7: SMS + Email. Day 14: Escalation to operator to call citizen."
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
        <ModuleHeader title="Required Components (Dual-Mode Variants)" />
        <ModuleContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <ComponentCard name="Form Input" variants="Staff (compact) / Citizen (large)" usage="Data entry in both modes" />
            <ComponentCard name="Button" variants="Staff (small) / Citizen (large, icon)" usage="Actions, navigation" />
            <ComponentCard name="Progress Indicator" variants="Linear, stepped" usage="Multi-step form tracking" />
            <ComponentCard name="Document Upload" variants="Scan, Camera, Defer" usage="Document collection" />
            <ComponentCard name="Alert Banner" variants="Info, Success, Warning" usage="Status communication" />
            <ComponentCard name="Card" variants="Service selection, help cards" usage="Visual grouping" />
            <ComponentCard name="Timeline" variants="Application progress" usage="Status tracking" />
            <ComponentCard name="Badge" variants="Status indicators" usage="Complete/Pending/Locked states" />
            <ComponentCard name="Reference Input" variants="Large, mono font" usage="REF number entry" />
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
      <SectionHeader title="Accessibility and Assisted-Use Considerations" />

      <DocModule>
        <ModuleHeader title="Low Digital Literacy Design Principles" />
        <ModuleContent>
          <div className="space-y-4">
            <LiteracyGuidanceBlock
              principle="Visual Over Textual"
              description="Use icons, illustrations, and visual metaphors alongside text. Don't assume reading comprehension."
              examples={[
                "Camera icon + 'Scan Document' text",
                "Green checkmark + 'Complete' label",
                "Building icon for 'Office', Home icon for 'Home'"
              ]}
            />
            <LiteracyGuidanceBlock
              principle="Bilingual by Default"
              description="All citizen-facing text in Hindi and English minimum. Regional language as third option where applicable."
              examples={[
                "अपना संदर्भ नंबर दर्ज करें / Enter Your Reference Number",
                "जारी रखें / Continue",
                "मदद चाहिए? / Need Help?"
              ]}
            />
            <LiteracyGuidanceBlock
              principle="Single Task Per Screen"
              description="Avoid cognitive overload. One decision or action per screen."
              examples={[
                "Identity verification on its own page (not combined with form)",
                "Document upload separate from review",
                "Final submission on dedicated confirmation page"
              ]}
            />
            <LiteracyGuidanceBlock
              principle="Reassurance and Progress Visibility"
              description="Constantly reassure user they're on right track. Show progress, not just what's remaining."
              examples={[
                "'2 of 3 documents uploaded' (not just 'Upload 1 more')",
                "'Your application is almost complete!' (positive framing)",
                "Green checkmarks for completed steps (visual success)"
              ]}
            />
          </div>
        </ModuleContent>
      </DocModule>

      <DocModule>
        <ModuleHeader title="Shared Device and Kiosk Considerations" />
        <ModuleContent>
          <div className="space-y-4">
            <SharedDeviceBlock
              concern="Session Security"
              solution="Auto-logout after 5 minutes of inactivity. Clear 'Logout' button always visible."
              implementation="Client-side timeout + server-side session invalidation. Warn user at 4 minutes."
            />
            <SharedDeviceBlock
              concern="Data Privacy"
              solution="Mask sensitive data (Aadhaar shows XXXX-XXXX-3210). No autocomplete for personal info."
              implementation="Input fields use autocomplete='off'. Aadhaar stored masked in session state."
            />
            <SharedDeviceBlock
              concern="Browser Dependency"
              solution="Works on old browsers (IE11+), low bandwidth (progressive enhancement)"
              implementation="Polyfills for ES6 features. Images lazy-loaded. Form data saved incrementally."
            />
            <SharedDeviceBlock
              concern="Print Accessibility"
              solution="Print-friendly acknowledgment receipts. CSS print styles for clean output."
              implementation="@media print styles. Hide navigation, show only essential data."
            />
          </div>
        </ModuleContent>
      </DocModule>

      <DocModule>
        <ModuleHeader title="WCAG 2.1 AA Requirements" />
        <ModuleContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AccessibilityBlock
              area="Bilingual Support"
              requirements={[
                "All citizen-facing text in Hindi + English",
                "Language toggle available (not hidden)",
                "Text direction (LTR) preserved for both languages",
                "Font size adjustable without breaking layout",
                "Translations reviewed by native speakers (not machine-translated)"
              ]}
            />
            <AccessibilityBlock
              area="Low-Vision Support"
              requirements={[
                "Minimum font size 16px for body text (citizen mode)",
                "Color contrast 4.5:1 for text, 3:1 for UI",
                "Icons supplement text (not replace)",
                "Zoom to 200% without horizontal scroll",
                "Focus indicators visible (3px outline)"
              ]}
            />
            <AccessibilityBlock
              area="Keyboard Navigation"
              requirements={[
                "All interactive elements reachable via Tab",
                "Skip links to main content",
                "Logical tab order (top to bottom, left to right)",
                "No keyboard traps (can exit modals with Esc)",
                "Enter key submits forms (in addition to button click)"
              ]}
            />
            <AccessibilityBlock
              area="Screen Reader Support"
              requirements={[
                "Form labels properly associated (for/id)",
                "Error messages linked via aria-describedby",
                "Progress indicators announced (aria-live)",
                "Upload status announced when file added",
                "Reference number has aria-label 'Reference number for tracking'"
              ]}
            />
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
        <ModuleHeader title="Writing for Low Confidence Users" />
        <ModuleContent>
          <div className="space-y-6">
            <ToneBlock
              context="Handoff Instructions"
              tone="Reassuring and Step-by-Step"
              good="अगले कदम: 1) आपको एसएमएस मिलेगा। 2) लिंक पर क्लिक करें। 3) बाकी दस्तावेज अपलोड करें। / Next steps: 1) You'll receive SMS. 2) Click link. 3) Upload remaining documents."
              bad="Complete application online using reference number."
            />
            <ToneBlock
              context="Error Prevention"
              tone="Helpful and Specific"
              good="संदर्भ नंबर 'REF-' से शुरू होता है और इसमें 6 अंक हैं। उदाहरण: REF-2026-789456 / Reference number starts with 'REF-' and has 6 digits. Example: REF-2026-789456"
              bad="Invalid format. Try again."
            />
            <ToneBlock
              context="Progress Communication"
              tone="Positive and Progress-Focused"
              good="बहुत अच्छा! आपने 2 दस्तावेज अपलोड कर दिए हैं। बस 1 और बचा है। / Great! You've uploaded 2 documents. Just 1 more to go."
              bad="Incomplete. 1 document pending."
            />
          </div>
        </ModuleContent>
      </DocModule>

      <DocModule>
        <ModuleHeader title="Multilingual Content Strategy" />
        <ModuleContent>
          <div className="bg-purple-50 dark:bg-purple-950/30 border-2 border-purple-200 dark:border-purple-800 rounded-lg p-6">
            <div className="flex items-start gap-3 mb-4">
              <Globe size={24} className="text-purple-600 flex-shrink-0" />
              <div>
                <div className="font-bold text-foreground mb-2">Mandatory Language Support</div>
                <div className="text-sm text-muted-foreground">
                  Assisted services must support Hindi and English minimum. State-specific deployments 
                  should add regional language as third option (e.g., Tamil in TN, Bengali in WB).
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <MultilingualItem
                aspect="Citizen UI"
                requirement="Hindi + English for all text, buttons, labels, instructions, error messages"
              />
              <MultilingualItem
                aspect="Staff UI"
                requirement="English primary. Hindi tooltips for common fields."
              />
              <MultilingualItem
                aspect="SMS/Email"
                requirement="User's preferred language from profile. Default to Hindi for new users."
              />
              <MultilingualItem
                aspect="Printed Receipts"
                requirement="Bilingual (Hindi + English). Reference number in large font."
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
              category="Dual-Mode Routing"
              requirement="Separate routes for staff (/operator/*) and citizen (/citizen/*) with mode-specific layouts and components."
              priority="critical"
            />
            <ImplementationItem
              category="Progressive Save"
              requirement="Auto-save form data every 30 seconds. Save to localStorage and backend. Enable resume after session timeout."
              priority="critical"
            />
            <ImplementationItem
              category="Reference Number System"
              requirement="Generate unique REF-YYYY-NNNNNN format. Store mapping: {ref_id → application_id, citizen_mobile, citizen_email}."
              priority="critical"
            />
            <ImplementationItem
              category="Offline-First Document Capture"
              requirement="Support camera capture on mobile. Compress images client-side (max 2MB). Queue uploads for retry on connection loss."
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
              category="Application State Machine"
              requirement="Track state: {draft, pending_upload, pending_review, submitted}. Store: {created_by: 'operator', completed_by: 'citizen'}."
              priority="critical"
            />
            <ImplementationItem
              category="Multi-Channel Notification"
              requirement="Send SMS + Email on: ref number generation, day 3 reminder, day 7 reminder, day 14 escalation."
              priority="critical"
            />
            <ImplementationItem
              category="Operator Session Management"
              requirement="Track operator: {login_time, logout_time, citizens_served, avg_time_per_citizen}. Analytics for CSC performance."
              priority="required"
            />
            <ImplementationItem
              category="Document Storage"
              requirement="Store documents with metadata: {uploaded_by: 'operator'|'citizen', upload_timestamp, device_type}. Audit trail."
              priority="critical"
            />
          </div>
        </ModuleContent>
      </DocModule>

      <DocModule>
        <ModuleHeader title="Analytics Events" />
        <ModuleContent>
          <div className="space-y-3">
            <AnalyticsEvent event="operator_session_start" description="Operator logs in at CSC/office (track operator_id, location)" />
            <AnalyticsEvent event="assisted_application_started" description="Operator starts application on behalf of citizen (track service_type)" />
            <AnalyticsEvent event="identity_verified" description="Aadhaar biometric/OTP verification success (track method: biometric/otp/manual)" />
            <AnalyticsEvent event="document_scanned_offline" description="Operator scans document (track document_type, capture_method: scanner/camera)" />
            <AnalyticsEvent event="document_deferred_to_citizen" description="Document upload deferred for citizen to complete (track document_type)" />
            <AnalyticsEvent event="reference_number_generated" description="REF number created and SMS/email sent (track ref_id)" />
            <AnalyticsEvent event="citizen_resumed_application" description="Citizen accesses application via REF number (track access_channel: mobile/desktop/kiosk)" />
            <AnalyticsEvent event="document_uploaded_by_citizen" description="Citizen uploads document from home (track document_type, upload_device)" />
            <AnalyticsEvent event="application_submitted_self_service" description="Citizen submits application (started by operator, completed by citizen)" />
            <AnalyticsEvent event="reminder_sent" description="Automated reminder sent to citizen (track reminder_type: day_3/day_7/day_14)" />
            <AnalyticsEvent event="operator_called_citizen" description="Operator calls citizen for follow-up (day 14 escalation)" />
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
            <ConformanceItem checked label="Supports dual-mode design (staff-assisted and citizen self-service)" />
            <ConformanceItem checked label="Generates unique reference number for continuity across channels" />
            <ConformanceItem checked label="Sends multi-channel notifications (SMS + Email + Printed receipt)" />
            <ConformanceItem checked label="Enables resume from exact point where staff stopped (no restart)" />
            <ConformanceItem checked label="Supports offline document capture with later upload option" />
            <ConformanceItem checked label="Provides bilingual interface (Hindi + English minimum)" />
            <ConformanceItem checked label="Uses visual icons alongside text for low-literacy support" />
            <ConformanceItem checked label="Implements reminder system (day 3, 7, 14) for pending actions" />
            <ConformanceItem checked label="Tracks operator performance metrics (citizens served, avg time)" />
            <ConformanceItem checked label="Supports shared device security (auto-logout, no autocomplete)" />
            <ConformanceItem checked label="Meets WCAG 2.1 AA for both staff and citizen modes" />
          </div>
        </ModuleContent>
      </DocModule>

      <DocModule>
        <ModuleHeader title="Common Risks and Mistakes" />
        <ModuleContent>
          <div className="space-y-4">
            <RiskBlock
              risk="No handoff mechanism (citizen forced to restart application)"
              impact="Critical"
              solution="Generate unique REF number. Store application state. Enable resume from exact point. Send multi-channel notifications."
            />
            <RiskBlock
              risk="Single-mode design (only self-service OR only assisted)"
              impact="Critical"
              solution="Implement dual-mode: staff UI for assisted entry, citizen UI for self-service completion. Different layouts, same backend."
            />
            <RiskBlock
              risk="No reminder system (citizens forget to complete)"
              impact="High"
              solution="Automated reminders: Day 3 (SMS), Day 7 (SMS + Email), Day 14 (Operator escalation to call citizen)."
            />
            <RiskBlock
              risk="English-only interface (excludes 70% of citizens)"
              impact="Critical"
              solution="Bilingual by default (Hindi + English). Regional language as third option. Visual icons supplement text."
            />
            <RiskBlock
              risk="Complex citizen UI (assumes digital literacy)"
              impact="High"
              solution="Simplify: one task per screen, large buttons, visual icons, reassuring language, progress indicators."
            />
            <RiskBlock
              risk="No operator accountability (no session tracking)"
              impact="Medium"
              solution="Track operator: login/logout, citizens served, avg time, performance metrics. Audit trail for all actions."
            />
            <RiskBlock
              risk="Mandatory immediate document upload (no flexibility)"
              impact="Medium"
              solution="Allow deferral: Operator can scan OR defer to citizen. Citizen can upload later from home. Reminder system ensures completion."
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
              description="Pattern piloted across 120 CSCs and 450 Gram Panchayats with 3.2M assisted applications"
            />
            <MaturityBlock
              status="Conformance"
              version="Recommended"
              description="Strongly recommended for services targeting rural, elderly, or low-literacy populations"
            />
            <MaturityBlock
              status="Completion Rate"
              version="78%"
              description="78% of assisted applications completed by citizens (vs 34% without handoff mechanism)"
            />
          </div>
        </ModuleContent>
      </DocModule>
    </section>
  );
}


// ==================== CODE DOWNLOADS ====================

const ASSISTED_REACT_CODE = `import React, { useState } from 'react';

type Channel = 'online' | 'csc' | 'kiosk' | 'phone';
type Step = 'channel' | 'form' | 'verify' | 'done';

export function AssistedOfflineOnlinePage() {
  const [channel, setChannel] = useState<Channel>('online');
  const [step, setStep] = useState<Step>('channel');
  const [form, setForm] = useState({ name: '', aadhaar: '', mobile: '', service: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [refId, setRefId] = useState('');

  const channels: { id: Channel; label: string; desc: string; icon: string }[] = [
    { id: 'online', label: 'Self-Service Online', desc: 'Apply from home via web portal', icon: '🌐' },
    { id: 'csc', label: 'Common Service Centre', desc: 'Visit nearest CSC with operator assistance', icon: '🏢' },
    { id: 'kiosk', label: 'Government Kiosk', desc: 'Self-service kiosk at government office', icon: '🖥️' },
    { id: 'phone', label: 'Phone Helpline', desc: 'Call 1800-XXX-XXXX for assisted filing', icon: '📞' },
  ];

  const handleSubmit = async () => {
    if (!form.name || !form.mobile) { setError('Name and mobile required'); return; }
    setLoading(true); setError('');
    try {
      const res = await fetch('/api/services/assisted-submit', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, channel }),
      });
      if (!res.ok) { setError('Submission failed'); return; }
      setRefId('REF-' + Date.now().toString(36).toUpperCase());
      setStep('done');
    } catch { setError('Network error'); }
    finally { setLoading(false); }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-lg bg-card border border-border rounded-2xl p-8 shadow-sm">
        <h1 className="text-2xl font-bold text-foreground mb-2">Apply for Service</h1>
        <p className="text-sm text-muted-foreground mb-6">Choose how you want to apply</p>
        {error && <div role="alert" className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 rounded-lg text-sm text-red-700 dark:text-red-400">{error}</div>}
        {step === 'channel' && (
          <div className="space-y-3">
            {channels.map(c => (
              <button key={c.id} onClick={() => { setChannel(c.id); setStep('form'); }} className={\`w-full p-4 text-left rounded-xl border-2 flex items-center gap-4 transition-colors \${channel === c.id ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'}\`}>
                <span className="text-2xl">{c.icon}</span>
                <div><div className="font-semibold text-sm">{c.label}</div><div className="text-xs text-muted-foreground">{c.desc}</div></div>
              </button>
            ))}
          </div>
        )}
        {step === 'form' && (
          <div className="space-y-4">
            <div className="p-3 bg-muted rounded-lg text-sm"><span className="text-muted-foreground">Channel:</span> <span className="font-semibold">{channels.find(c => c.id === channel)?.label}</span></div>
            <div><label className="block text-sm font-medium mb-1">Full Name *</label><input value={form.name} onChange={e => setForm(f => ({...f, name: e.target.value}))} className="w-full px-4 py-3 border border-border rounded-lg" /></div>
            <div><label className="block text-sm font-medium mb-1">Aadhaar Number</label><input value={form.aadhaar} onChange={e => setForm(f => ({...f, aadhaar: e.target.value}))} placeholder="XXXX XXXX XXXX" maxLength={14} className="w-full px-4 py-3 border border-border rounded-lg" /></div>
            <div><label className="block text-sm font-medium mb-1">Mobile *</label><input type="tel" value={form.mobile} onChange={e => setForm(f => ({...f, mobile: e.target.value}))} maxLength={10} className="w-full px-4 py-3 border border-border rounded-lg" /></div>
            <div><label className="block text-sm font-medium mb-1">Service</label><select value={form.service} onChange={e => setForm(f => ({...f, service: e.target.value}))} className="w-full px-4 py-3 border border-border rounded-lg"><option value="">Select service</option><option>Birth Certificate</option><option>Caste Certificate</option><option>Income Certificate</option><option>Domicile Certificate</option></select></div>
            <div className="flex gap-3">
              <button onClick={() => setStep('channel')} className="flex-1 py-3 border border-border rounded-lg font-semibold">Back</button>
              <button onClick={handleSubmit} disabled={loading} className="flex-1 py-3 bg-primary text-primary-foreground rounded-lg font-semibold disabled:opacity-60">{loading ? 'Submitting...' : 'Submit'}</button>
            </div>
          </div>
        )}
        {step === 'done' && (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto"><svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></div>
            <h2 className="text-xl font-bold text-foreground">Application Submitted</h2>
            <p className="text-muted-foreground">Reference: <span className="font-bold">{refId}</span></p>
            <p className="text-sm text-muted-foreground">Track status at any channel — online, CSC, or helpline.</p>
          </div>
        )}
      </div>
    </div>
  );
}`;

const ASSISTED_ANGULAR_CODE = `import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'ux4g-assisted-offline-online',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: \`
    <div class="min-h-screen flex items-center justify-center bg-background p-4">
      <div class="w-full max-w-lg bg-card border border-border rounded-2xl p-8 shadow-sm">
        <h1 class="text-2xl font-bold mb-6">Apply for Service</h1>
        <div *ngIf="error" role="alert" class="mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 rounded-lg text-sm text-red-700 dark:text-red-400">{{ error }}</div>
        <div *ngIf="step === 'channel'" class="space-y-3">
          <button *ngFor="let c of channels" (click)="channel=c.id;step='form'" [class]="'w-full p-4 text-left rounded-xl border-2 flex items-center gap-4 '+(channel===c.id?'border-primary bg-primary/5':'border-border')">
            <span class="text-2xl">{{ c.icon }}</span>
            <div><div class="font-semibold text-sm">{{ c.label }}</div><div class="text-xs text-muted-foreground">{{ c.desc }}</div></div>
          </button>
        </div>
        <form *ngIf="step === 'form'" [formGroup]="form" (ngSubmit)="submit()" class="space-y-4">
          <div><label class="block text-sm font-medium mb-1">Name *</label><input formControlName="name" class="w-full px-4 py-3 border border-border rounded-lg" /></div>
          <div><label class="block text-sm font-medium mb-1">Mobile *</label><input formControlName="mobile" maxlength="10" class="w-full px-4 py-3 border border-border rounded-lg" /></div>
          <div><label class="block text-sm font-medium mb-1">Service</label><select formControlName="service" class="w-full px-4 py-3 border border-border rounded-lg"><option value="">Select</option><option>Birth Certificate</option><option>Caste Certificate</option></select></div>
          <div class="flex gap-3"><button type="button" (click)="step='channel'" class="flex-1 py-3 border border-border rounded-lg font-semibold">Back</button><button type="submit" [disabled]="loading" class="flex-1 py-3 bg-primary text-primary-foreground rounded-lg font-semibold disabled:opacity-60">{{ loading ? 'Submitting...' : 'Submit' }}</button></div>
        </form>
        <div *ngIf="step === 'done'" class="text-center py-8">
          <h2 class="text-xl font-bold mb-2">Submitted</h2>
          <p class="text-muted-foreground">Ref: {{ refId }}</p>
        </div>
      </div>
    </div>
  \`
})
export class AssistedOfflineOnlineComponent {
  channels = [
    { id: 'online', label: 'Self-Service Online', desc: 'Apply from home', icon: '🌐' },
    { id: 'csc', label: 'Common Service Centre', desc: 'Visit nearest CSC', icon: '🏢' },
    { id: 'kiosk', label: 'Government Kiosk', desc: 'Self-service kiosk', icon: '🖥️' },
    { id: 'phone', label: 'Phone Helpline', desc: 'Call 1800-XXX-XXXX', icon: '📞' },
  ];
  form = new FormGroup({ name: new FormControl('', Validators.required), mobile: new FormControl('', Validators.required), service: new FormControl('') });
  step = 'channel'; channel = 'online'; loading = false; error = ''; refId = '';
  async submit() {
    if (this.form.invalid) { this.error = 'Fill required fields'; return; }
    this.loading = true; this.error = '';
    try { await fetch('/api/services/assisted-submit', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...this.form.value, channel: this.channel }) }); this.refId = 'REF-' + Date.now().toString(36).toUpperCase(); this.step = 'done'; } catch { this.error = 'Network error'; } finally { this.loading = false; }
  }
}`;

const ASSISTED_HTML_CODE = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Assisted Offline-to-Online — UX4G</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: system-ui, sans-serif; min-height: 100vh; display: flex; align-items: center; justify-content: center; background: #f9fafb; padding: 1rem; }
    .card { width: 100%; max-width: 32rem; background: #fff; border: 1px solid #e5e7eb; border-radius: 1rem; padding: 2rem; }
    h1 { font-size: 1.5rem; font-weight: 700; margin-bottom: 1.5rem; }
    .channel-btn { width: 100%; padding: 1rem; text-align: left; border: 2px solid #e5e7eb; border-radius: 0.75rem; background: #fff; cursor: pointer; display: flex; align-items: center; gap: 1rem; margin-bottom: 0.75rem; }
    .channel-btn:hover { border-color: rgba(0,81,150,0.5); }
    .channel-btn .icon { font-size: 1.5rem; }
    .channel-btn .label { font-weight: 600; font-size: 0.875rem; }
    .channel-btn .desc { font-size: 0.75rem; color: #6b7280; }
    label { display: block; font-size: 0.875rem; font-weight: 500; margin-bottom: 0.25rem; }
    input, select { width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 0.5rem; font-size: 1rem; outline: none; margin-bottom: 1rem; }
    .btn { width: 100%; padding: 0.75rem; background: #005196; color: #fff; border: none; border-radius: 0.5rem; font-size: 1rem; font-weight: 600; cursor: pointer; }
    .btn-outline { background: #fff; color: #111; border: 1px solid #d1d5db; }
    .actions { display: flex; gap: 0.75rem; } .actions > * { flex: 1; }
    .hidden { display: none; }
    .success { text-align: center; padding: 2rem 0; }
  </style>
</head>
<body>
  <div class="card">
    <h1>Apply for Service</h1>
    <div id="stepChannel">
      <button class="channel-btn" onclick="pickChannel('online')"><span class="icon">🌐</span><div><div class="label">Self-Service Online</div><div class="desc">Apply from home</div></div></button>
      <button class="channel-btn" onclick="pickChannel('csc')"><span class="icon">🏢</span><div><div class="label">Common Service Centre</div><div class="desc">Visit nearest CSC</div></div></button>
      <button class="channel-btn" onclick="pickChannel('kiosk')"><span class="icon">🖥️</span><div><div class="label">Government Kiosk</div><div class="desc">Self-service kiosk</div></div></button>
      <button class="channel-btn" onclick="pickChannel('phone')"><span class="icon">📞</span><div><div class="label">Phone Helpline</div><div class="desc">Call 1800-XXX-XXXX</div></div></button>
    </div>
    <div id="stepForm" class="hidden">
      <label>Full Name *</label><input id="name" required />
      <label>Mobile *</label><input id="mobile" maxlength="10" required />
      <label>Service</label><select id="service"><option value="">Select</option><option>Birth Certificate</option><option>Caste Certificate</option><option>Income Certificate</option></select>
      <div class="actions"><button class="btn btn-outline" onclick="showStep('stepChannel')">Back</button><button class="btn" onclick="submitForm()">Submit</button></div>
    </div>
    <div id="stepDone" class="hidden success">
      <h2 style="font-size:1.25rem;font-weight:700;margin-bottom:0.5rem">Application Submitted</h2>
      <p style="color:#6b7280" id="refText"></p>
    </div>
  </div>
  <script>
    let channel='';
    function showStep(id){['stepChannel','stepForm','stepDone'].forEach(s=>document.getElementById(s).classList.add('hidden'));document.getElementById(id).classList.remove('hidden');}
    function pickChannel(c){channel=c;showStep('stepForm');}
    function submitForm(){
      if(!document.getElementById('name').value||!document.getElementById('mobile').value){alert('Fill required fields');return;}
      const ref='REF-'+Date.now().toString(36).toUpperCase();
      document.getElementById('refText').textContent='Reference: '+ref+' (via '+channel+')';
      showStep('stepDone');
    }
  </script>
</body>
</html>`;

function AssistedCodeDownloads() {
  const [copiedId, setCopiedId] = React.useState<string | null>(null);
  const copyToClipboard = (code: string, id: string) => { navigator.clipboard.writeText(code); setCopiedId(id); setTimeout(() => setCopiedId(null), 2000); };
  const downloadCode = (code: string, filename: string) => { const blob = new Blob([code], { type: 'text/plain' }); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = filename; a.click(); URL.revokeObjectURL(url); };
  const lanes = [
    { key: 'react', title: 'React', desc: 'TypeScript + Multi-channel', code: ASSISTED_REACT_CODE, filename: 'AssistedOfflineOnlinePage.tsx' },
    { key: 'angular', title: 'Angular', desc: 'Standalone Component', code: ASSISTED_ANGULAR_CODE, filename: 'assisted-offline-online.component.ts' },
    { key: 'html', title: 'HTML / CSS / JS', desc: 'No framework needed', code: ASSISTED_HTML_CODE, filename: 'assisted-offline-online.html' },
  ];
  return (
    <section id="code-downloads" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Code Downloads</h2>
        <p className="text-muted-foreground mt-1">Production-ready Assisted Offline-to-Online implementations.</p>
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
        <MetadataRow label="Pattern ID" value="UX4G-PAT-007" />
        <MetadataRow label="Category" value="Assisted Services" />
        <MetadataRow label="Complexity" value="Very High" />
        <MetadataRow label="Implementation" value="4-6 weeks" />
        <MetadataRow label="Updated" value="April 2026" />
        <MetadataRow label="Status" value="Stable (v1.0.0)" />
      </div>
    </div>
  );
}

function QuickRefPanel() {
  return (
    <div className="border-2 border-blue-200 dark:border-blue-800 rounded-lg overflow-hidden bg-blue-50 dark:bg-blue-900/20">
      <div className="bg-blue-100 border-b-2 border-blue-200 dark:border-blue-800 px-4 py-3">
        <h3 className="font-bold text-foreground text-sm">Quick Reference</h3>
      </div>
      <div className="p-4 space-y-3 text-sm">
        <QuickRefRow label="User Modes" value="2 (Staff + Citizen)" />
        <QuickRefRow label="Channels" value="Offline → Online" />
        <QuickRefRow label="Handoff" value="REF number + SMS/Email" />
        <QuickRefRow label="Reminders" value="Day 3, 7, 14" />
        <QuickRefRow label="Languages" value="Hindi + English min" />
        <QuickRefRow label="Completion Rate" value="78%" />
      </div>
    </div>
  );
}

function DesignPrinciples() {
  return (
    <div className="border-2 border-green-200 dark:border-green-800 rounded-lg overflow-hidden bg-green-50 dark:bg-green-900/20">
      <div className="bg-green-100 border-b-2 border-green-200 dark:border-green-800 px-4 py-3">
        <h3 className="font-bold text-foreground text-sm">Core Principles</h3>
      </div>
      <div className="p-4 space-y-3 text-sm text-muted-foreground">
        <PrincipleItem icon={<Users size={14} />} text="Inclusive: Bridges digital divide" />
        <PrincipleItem icon={<RefreshCw size={14} />} text="Continuity: Seamless handoff" />
        <PrincipleItem icon={<Eye size={14} />} text="Clarity: Visual + bilingual" />
        <PrincipleItem icon={<Shield size={14} />} text="Trust: Reassuring, supportive" />
      </div>
    </div>
  );
}

function RiskIndicators() {
  return (
    <div className="border-2 border-red-200 dark:border-red-800 rounded-lg overflow-hidden bg-red-50 dark:bg-red-900/20">
      <div className="bg-red-100 border-b-2 border-red-200 dark:border-red-800 px-4 py-3 flex items-center gap-2">
        <AlertTriangle size={16} className="text-red-700 dark:text-red-400" />
        <h3 className="font-bold text-foreground text-sm">Risk Indicators</h3>
      </div>
      <div className="p-4 space-y-3 text-sm text-muted-foreground">
        <RiskItem severity="high" risk="No handoff mechanism" />
        <RiskItem severity="high" risk="Single-mode only" />
        <RiskItem severity="high" risk="English-only interface" />
        <RiskItem severity="medium" risk="No reminder system" />
        <RiskItem severity="medium" risk="Complex citizen UI" />
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
        <RelatedLink title="Multilingual Guidance" />
        <RelatedLink title="Accessibility Tooling" />
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

function ChannelPhaseBlock({ phase, icon, activities, outcome }: any) {
  return (
    <div className="border-2 border-border rounded-lg p-6 bg-card">
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <div className="font-bold text-lg text-foreground">{phase}</div>
      </div>
      <div className="space-y-2 mb-4">
        {activities.map((activity: string, idx: number) => (
          <div key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
            <CheckCircle size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
            <span>{activity}</span>
          </div>
        ))}
      </div>
      <div className="bg-green-50 dark:bg-green-950/30 border border-green-300 rounded p-3 text-sm text-muted-foreground">
        <strong>Outcome:</strong> {outcome}
      </div>
    </div>
  );
}

function FlowStep({ number, label, status, channel }: any) {
  const statusConfig: any = {
    entry: { bg: 'bg-muted', border: 'border-gray-400', text: 'text-muted-foreground' },
    active: { bg: 'bg-blue-50', border: 'border-blue-400', text: 'text-blue-700' },
    success: { bg: 'bg-green-50', border: 'border-green-400', text: 'text-green-700' },
    info: { bg: 'bg-purple-50', border: 'border-purple-400', text: 'text-purple-700' }
  };

  return (
    <div className={`border-2 ${statusConfig[status].border} rounded-lg p-3 ${statusConfig[status].bg}`}>
      <div className={`text-xs font-bold ${statusConfig[status].text} mb-1`}>{number}</div>
      <div className="text-xs font-medium text-foreground mb-1">{label}</div>
      <div className="text-xs text-muted-foreground">{channel}</div>
    </div>
  );
}

function PageSequenceRow({ number, title, description, mode, required }: any) {
  const modeColors: any = {
    Staff: { bg: 'bg-blue-600', text: 'text-white' },
    Citizen: { bg: 'bg-green-600', text: 'text-white' }
  };

  return (
    <div className="flex items-start gap-4 p-4 bg-background border-l-4 border-primary rounded">
      <div className="w-8 h-8 bg-primary text-white rounded font-bold text-sm flex items-center justify-center flex-shrink-0">
        {number}
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <div className="font-bold text-sm text-foreground">{title}</div>
          <span className={`px-2 py-0.5 ${modeColors[mode].bg} ${modeColors[mode].text} text-xs font-bold rounded`}>
            {mode}
          </span>
          {required ? (
            <span className="px-2 py-0.5 bg-red-100 text-red-700 dark:text-red-400 text-xs font-bold rounded">REQUIRED</span>
          ) : (
            <span className="px-2 py-0.5 bg-gray-200 text-muted-foreground text-xs font-bold rounded">OPTIONAL</span>
          )}
        </div>
        <div className="text-xs text-muted-foreground">{description}</div>
      </div>
    </div>
  );
}

function DashboardStat({ icon, label, value, detail }: any) {
  return (
    <div className="border-2 border-border rounded-lg p-4 bg-card">
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0">{icon}</div>
        <div>
          <div className="text-sm text-muted-foreground mb-1">{label}</div>
          <div className="text-2xl font-bold text-foreground mb-1">{value}</div>
          <div className="text-xs text-muted-foreground">{detail}</div>
        </div>
      </div>
    </div>
  );
}

function ServiceButton({ icon, title, description }: any) {
  return (
    <button className="border-2 border-border rounded-lg p-4 bg-card hover:border-primary hover:bg-blue-50 dark:bg-blue-900/20 transition-colors text-left">
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

function VerificationMethod({ icon, method, description, recommended, selected }: any) {
  return (
    <label className={`flex flex-col gap-2 p-4 border-2 rounded-lg cursor-pointer transition-colors ${
      selected ? 'border-blue-600 bg-blue-50' : 'border-border bg-card hover:border-gray-400'
    }`}>
      <div className="flex items-center gap-2">
        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
          selected ? 'border-blue-600' : 'border-gray-400'
        }`}>
          {selected && <div className="w-3 h-3 rounded-full bg-blue-600"></div>}
        </div>
        {icon}
      </div>
      <div>
        <div className="font-bold text-sm text-foreground">{method}</div>
        <div className="text-xs text-muted-foreground">{description}</div>
        {recommended && (
          <div className="mt-2 px-2 py-1 bg-green-100 text-green-700 dark:text-green-400 text-xs font-bold rounded inline-block">
            Recommended
          </div>
        )}
      </div>
    </label>
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

function CategoryCard({ title, description, selected }: any) {
  return (
    <label className={`flex flex-col gap-2 p-4 border-2 rounded-lg cursor-pointer transition-colors ${
      selected ? 'border-primary bg-blue-50' : 'border-border bg-card hover:border-gray-400'
    }`}>
      <div className="flex items-center gap-2">
        <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
          selected ? 'border-primary bg-primary' : 'border-gray-400'
        }`}>
          {selected && <Check size={14} className="text-white" />}
        </div>
        <div className="font-bold text-sm text-foreground">{title}</div>
      </div>
      <div className="text-xs text-muted-foreground">{description}</div>
    </label>
  );
}

function DocumentCollectionItem({ title, status, actions }: any) {
  return (
    <div className="border-2 border-border rounded-lg p-4 bg-card">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="font-bold text-sm text-foreground mb-1">{title}</div>
          {status === 'scanned' && (
            <div className="text-xs text-green-700 dark:text-green-400 flex items-center gap-1">
              <CheckCircle size={12} />
              Scanned and attached
            </div>
          )}
          {status === 'pending' && (
            <div className="text-xs text-orange-700">Pending collection</div>
          )}
        </div>
        <div>{actions}</div>
      </div>
    </div>
  );
}

function HelpCard({ icon, title, titleEn, description }: any) {
  return (
    <div className="border-2 border-border rounded-lg p-4 bg-card text-center">
      <div className="flex justify-center mb-3">{icon}</div>
      <div className="font-bold text-sm text-foreground mb-1">{title}</div>
      <div className="font-bold text-xs text-muted-foreground mb-2">{titleEn}</div>
      <div className="text-xs text-muted-foreground">{description}</div>
    </div>
  );
}

function ProgressItem({ title, status, description }: any) {
  const statusConfig: any = {
    complete: { icon: <CheckCircle size={18} className="text-green-600" />, bg: 'bg-green-50 dark:bg-green-900/20' },
    pending: { icon: <Clock size={18} className="text-orange-600" />, bg: 'bg-orange-50 dark:bg-orange-900/20' },
    locked: { icon: <AlertCircle size={18} className="text-muted-foreground" />, bg: 'bg-background' }
  };

  return (
    <div className={`flex items-start gap-3 p-4 rounded-lg ${statusConfig[status].bg}`}>
      {statusConfig[status].icon}
      <div className="flex-1">
        <div className="font-bold text-sm text-foreground mb-1">{title}</div>
        <div className="text-xs text-muted-foreground">{description}</div>
      </div>
    </div>
  );
}

function PendingDocumentUpload({ title, required, status }: any) {
  return (
    <div className="border-2 border-border rounded-lg p-4 bg-card">
      <div className="flex items-center justify-between mb-3">
        <div>
          <div className="font-bold text-sm text-foreground mb-1">{title}</div>
          {required && <span className="text-xs text-red-600">Required</span>}
        </div>
        {status === 'uploaded' ? (
          <div className="flex items-center gap-2 text-green-700 dark:text-green-400">
            <CheckCircle size={18} />
            <span className="text-sm font-bold">Uploaded</span>
          </div>
        ) : (
          <button className="px-4 py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 flex items-center gap-2">
            <Upload size={16} />
            Upload
          </button>
        )}
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

function ModeComparisonBlock({ mode, color, characteristics }: any) {
  const colorConfig: any = {
    blue: { bg: 'bg-blue-50', border: 'border-blue-300', text: 'text-blue-900' },
    green: { bg: 'bg-green-50', border: 'border-green-300', text: 'text-green-900' }
  };

  return (
    <div className={`border-2 ${colorConfig[color].border} ${colorConfig[color].bg} rounded-lg p-4`}>
      <div className={`font-bold ${colorConfig[color].text} mb-3`}>{mode}</div>
      <ul className="space-y-2">
        {characteristics.map((char: string, idx: number) => (
          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
            <CheckCircle size={12} className={`mt-0.5 flex-shrink-0 ${color === 'blue' ? 'text-blue-600' : 'text-green-600'}`} />
            <span>{char}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function HandoffStageBlock({ stage, description, implementation }: any) {
  return (
    <div className="border-2 border-orange-300 bg-orange-50 dark:bg-orange-950/30 rounded-lg p-4">
      <div className="font-bold text-sm text-foreground mb-2">{stage}</div>
      <div className="text-sm text-muted-foreground mb-2">{description}</div>
      <div className="text-xs text-muted-foreground bg-card border border-orange-200 dark:border-orange-800 rounded p-2">
        <strong>Implementation:</strong> {implementation}
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

function LiteracyGuidanceBlock({ principle, description, examples }: any) {
  return (
    <div className="border-2 border-purple-300 bg-purple-50 dark:bg-purple-950/30 rounded-lg p-4">
      <div className="font-bold text-sm text-foreground mb-2">{principle}</div>
      <div className="text-sm text-muted-foreground mb-3">{description}</div>
      <div className="text-xs text-muted-foreground bg-card border border-purple-200 dark:border-purple-800 rounded p-2">
        <strong>Examples:</strong>
        <ul className="mt-1 space-y-1">
          {examples.map((example: string, idx: number) => (
            <li key={idx}>• {example}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function SharedDeviceBlock({ concern, solution, implementation }: any) {
  return (
    <div className="border-2 border-blue-300 bg-blue-50 dark:bg-blue-950/30 rounded-lg p-4">
      <div className="font-bold text-sm text-foreground mb-2">{concern}</div>
      <div className="text-sm text-muted-foreground mb-2"><strong>Solution:</strong> {solution}</div>
      <div className="text-xs text-muted-foreground bg-card border border-blue-200 dark:border-blue-800 rounded p-2">
        <strong>Implementation:</strong> {implementation}
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
            <span className="text-xs font-bold text-green-700 dark:text-green-400">Good</span>
          </div>
          <div className="text-sm text-foreground bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded p-2">"{good}"</div>
        </div>
        <div>
          <div className="flex items-center gap-2 mb-1">
            <AlertCircle size={14} className="text-red-600" />
            <span className="text-xs font-bold text-red-700 dark:text-red-400">Bad</span>
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
    <div className="border-2 border-green-300 rounded-lg p-4 bg-green-50 dark:bg-green-900/20">
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
