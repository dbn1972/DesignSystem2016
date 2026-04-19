import { useState } from "react";
import {  RefreshCw, CheckCircle, XCircle, AlertCircle, Info, Clock, Users, Shield, Eye, Globe, Code, BarChart3, AlertTriangle, FileText, Lock, Unlock, Edit, Search, ArrowRight, ChevronRight, Check, Database, Zap, Target, Hash, Upload, Download, CreditCard, Award, ChevronDown, Copy } from "lucide-react";

export default function RenewalPattern() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b-2 border-border">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-8">
          <div className="flex items-start justify-between">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-16 h-16 bg-muted border-2 border-border rounded flex items-center justify-center">
                  <RefreshCw size={32} className="text-muted-foreground" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">UX4G Service Pattern Library</div>
                  <h1 className="text-3xl font-bold text-foreground">Renewal</h1>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Service pattern for renewing existing certificates, licenses, permits, registrations, or benefits. 
                Streamlines the process by prefilling verified data, allowing updates only where needed, and maintaining continuity.
              </p>
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-50 dark:bg-green-900/200 rounded-sm"></div>
                  <span className="text-muted-foreground">Pattern ID: <span className="font-bold text-foreground">UX4G-PAT-003</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gray-400 dark:bg-gray-600 rounded-sm"></div>
                  <span className="text-muted-foreground">Version: <span className="font-bold text-foreground">1.0.0</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gray-400 dark:bg-gray-600 rounded-sm"></div>
                  <span className="text-muted-foreground">Updated: <span className="font-bold text-foreground">March 2026</span></span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="px-6 py-3 bg-green-100 border-2 border-green-300 rounded text-green-800 dark:text-green-300 font-bold text-sm text-center">
                STABLE
              </div>
              <div className="px-6 py-3 bg-red-50 dark:bg-red-950/30 border-2 border-red-200 dark:border-red-800 rounded text-red-700 dark:text-red-400 font-bold text-xs text-center uppercase">
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
              { id: "journey", label: "Journey" },
              { id: "pages", label: "Page Designs" },
              { id: "data-rules", label: "Data Rules" },
              { id: "components", label: "Components" },
              { id: "content", label: "Content" },
              { id: "accessibility", label: "Accessibility" },
              { id: "implementation", label: "Implementation" },
              { id: "governance", label: "Governance" },
              { id: "code-downloads", label: "Code Downloads" }
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
            <DataFieldRules />
            <ComponentsUsed />
            <ContentGuidance />
            <AccessibilityGuidance />
            <ImplementationNotes />
            <GovernanceConformance />
                      <RenewalCodeDownloads />
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
              Citizens must repeatedly provide the same information for renewals, even when data hasn't changed. 
              Government departments re-verify information already in their systems, wasting resources.
            </p>
            <div className="space-y-3">
              <ProblemSolutionBlock
                icon={<Clock size={18} className="text-orange-600" />}
                problem="User fills entire form from scratch despite having prior registration"
                solution="Prefill all previously verified data. Allow updates only where needed."
              />
              <ProblemSolutionBlock
                icon={<Database size={18} className="text-blue-600" />}
                problem="Departments don't leverage existing verified records"
                solution="Retrieve and display existing data. Mark which fields are locked vs editable."
              />
              <ProblemSolutionBlock
                icon={<AlertCircle size={18} className="text-red-600" />}
                problem="Users confused about what needs updating vs what stays same"
                solution="Clear visual distinction: locked (verified), editable (update allowed), required (proof needed)"
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
                name="Returning Citizens"
                description="Individuals renewing existing certificates, licenses, or benefits"
                percentage="80%"
              />
              <UserGroup
                icon={<Shield size={18} className="text-purple-600" />}
                name="Businesses"
                description="Entities renewing registrations, permits, or licenses"
                percentage="15%"
              />
              <UserGroup
                icon={<FileText size={18} className="text-orange-600" />}
                name="Government Staff"
                description="Back-office staff processing renewal applications"
                percentage="5%"
              />
            </div>
          </ModuleContent>
        </DocModule>
      </div>

      <DocModule>
        <ModuleHeader title="Typical Renewal Use Cases" />
        <ModuleContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <UseCaseCard
              title="Identity Documents"
              examples={[
                "Passport renewal (every 10 years)",
                "Driving license renewal (every 5 years)",
                "Aadhaar biometric update",
                "Voter ID address update"
              ]}
            />
            <UseCaseCard
              title="Business Registrations"
              examples={[
                "GST registration renewal (annual)",
                "Trade license renewal",
                "Professional certification renewal",
                "Import-export license renewal"
              ]}
            />
            <UseCaseCard
              title="Benefits and Permits"
              examples={[
                "Ration card renewal",
                "Scholarship renewal (annual)",
                "Pension re-verification",
                "Building permit extension"
              ]}
            />
          </div>
        </ModuleContent>
      </DocModule>

      <DocModule>
        <ModuleHeader title="Key Renewal Scenarios" />
        <ModuleContent>
          <div className="space-y-4">
            <ScenarioCard
              scenario="Simple Renewal (No Changes)"
              description="All information same, just extending validity"
              example="Passport renewal with same address, same name, no changes"
              complexity="Low"
            />
            <ScenarioCard
              scenario="Renewal with Updates"
              description="Some information changed (address, contact, marital status)"
              example="Driving license renewal with new address and phone number"
              complexity="Medium"
            />
            <ScenarioCard
              scenario="Renewal with Revalidation"
              description="Requires new proof for updated information"
              example="License renewal with changed name (requires marriage certificate)"
              complexity="High"
            />
            <ScenarioCard
              scenario="Conditional Renewal"
              description="Eligibility criteria must be rechecked"
              example="Scholarship renewal (verify continued enrollment and marks)"
              complexity="Medium-High"
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <FlowStep number="01" label="Entry" status="entry" />
              <FlowStep number="02" label="Record Lookup" status="active" />
              <FlowStep number="03" label="Verification" status="active" />
              <FlowStep number="04" label="Record Display" status="active" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <FlowStep number="05" label="Review Prefilled" status="active" />
              <FlowStep number="06" label="Update Info" status="optional" />
              <FlowStep number="07" label="Upload Docs" status="optional" />
              <FlowStep number="08" label="Review Changes" status="active" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <FlowStep number="09" label="Payment" status="optional" />
              <FlowStep number="10" label="Submit" status="success" />
              <FlowStep number="11" label="Acknowledgment" status="success" />
              <FlowStep number="12" label="Status Tracking" status="info" />
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
              title="Service Entry Page"
              description="Explain renewal process, what user needs, expected timeline"
              required={true}
            />
            <PageSequenceRow
              number="2"
              title="Record Lookup"
              description="Search by reference number, mobile, Aadhaar, or email"
              required={true}
            />
            <PageSequenceRow
              number="3"
              title="Identity Verification"
              description="OTP or biometric verification to access existing record"
              required={true}
            />
            <PageSequenceRow
              number="4"
              title="Record Summary Display"
              description="Show current valid record with expiry date and status"
              required={true}
            />
            <PageSequenceRow
              number="5"
              title="Prefilled Information Review"
              description="Display all existing data with locked/editable indicators"
              required={true}
            />
            <PageSequenceRow
              number="6"
              title="Renewal Conditions Check"
              description="Show any new eligibility criteria or requirements for renewal"
              required={false}
            />
            <PageSequenceRow
              number="7"
              title="Update Information (if needed)"
              description="Edit fields that have changed (address, contact, dependent info)"
              required={false}
            />
            <PageSequenceRow
              number="8"
              title="Document Upload (if needed)"
              description="Upload proof for changed information or updated documents"
              required={false}
            />
            <PageSequenceRow
              number="9"
              title="Review and Confirm"
              description="Show all data with highlights on what changed vs what stayed same"
              required={true}
            />
            <PageSequenceRow
              number="10"
              title="Payment (if applicable)"
              description="Renewal fee payment with previous payment history"
              required={false}
            />
            <PageSequenceRow
              number="11"
              title="Renewal Acknowledgment"
              description="Success message with new validity dates and reference number"
              required={true}
            />
            <PageSequenceRow
              number="12"
              title="Status Tracking"
              description="Track renewal processing status and download renewed certificate"
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

      {/* Lookup Page */}
      <DocModule>
        <ModuleHeader title="Page 1: Record Lookup" />
        <ModuleContent>
          <div className="border-2 border-border rounded-lg overflow-hidden bg-card">
            <div className="bg-primary text-white p-4 sm:p-6 lg:p-8">
              <div className="max-w-3xl">
                <div className="text-sm mb-2 text-blue-200">Renew Your [Service Name]</div>
                <h2 className="text-3xl font-bold mb-4">Find Your Existing Record</h2>
                <p className="text-lg text-blue-100 leading-relaxed">
                  Enter your details to retrieve your existing record and start the renewal process.
                </p>
              </div>
            </div>
            <div className="p-8 space-y-6">
              <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <Info size={24} className="text-blue-600 flex-shrink-0" />
                  <div>
                    <div className="font-bold text-foreground mb-2">Why Lookup First?</div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>We'll prefill all your existing verified information</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>You only need to update what's changed</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Renewal is faster than new application</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-foreground mb-2">
                    Find Your Record By:
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-muted-foreground mb-2">Certificate/License Number</label>
                      <input aria-label="e.g., DL-0120190012345" type="text"
                        placeholder="e.g., DL-0120190012345"
                        className="w-full px-4 py-3 border-2 border-border rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-muted-foreground mb-2">Date of Birth</label>
                      <input aria-label="DD/MM/YYYY" type="text"
                        placeholder="DD/MM/YYYY"
                        className="w-full px-4 py-3 border-2 border-border rounded-lg"
                      />
                    </div>
                  </div>
                </div>

                <div className="text-center text-muted-foreground font-medium">OR</div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-muted-foreground mb-2">Registered Mobile Number</label>
                    <input aria-label="+91 98765-43210" type="tel"
                      placeholder="+91 98765-43210"
                      className="w-full px-4 py-3 border-2 border-border rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-muted-foreground mb-2">Aadhaar Number (Last 4 digits)</label>
                    <input aria-label="XXXX" type="text"
                      placeholder="XXXX"
                      className="w-full px-4 py-3 border-2 border-border rounded-lg"
                    />
                  </div>
                </div>
              </div>

              <button className="w-full px-8 py-4 bg-primary text-white font-bold rounded-lg hover:opacity-90">
                Find My Record
              </button>

              <div className="text-sm text-muted-foreground text-center pt-4 border-t border-border">
                <strong>Can't find your record?</strong> Contact support at 1800-XXX-XXXX
              </div>
            </div>
          </div>
          <PageAnnotation items={[
            "Multiple lookup options (certificate number, mobile, Aadhaar)",
            "Clear explanation of benefits (prefilled data, faster process)",
            "Help text for format guidance",
            "Support contact if record not found"
          ]} />
        </ModuleContent>
      </DocModule>

      {/* Record Summary Page */}
      <DocModule>
        <ModuleHeader title="Page 2: Existing Record Summary" />
        <ModuleContent>
          <div className="border-2 border-border rounded-lg overflow-hidden bg-card">
            <div className="bg-background border-b-2 border-border p-6">
              <h2 className="text-xl font-bold text-foreground mb-2">Your Existing Record</h2>
              <p className="text-sm text-muted-foreground">Please verify this is your record before proceeding with renewal.</p>
            </div>
            <div className="p-8 space-y-6">
              <div className="border-2 border-blue-300 bg-blue-50 dark:bg-blue-950/30 rounded-lg p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">License Number</div>
                    <div className="text-2xl font-bold text-foreground font-mono mb-4">DL-0120190012345</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Issued On:</span>
                        <span className="font-bold text-foreground ml-2">15/03/2019</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Valid Until:</span>
                        <span className="font-bold text-foreground ml-2">14/03/2029</span>
                      </div>
                    </div>
                  </div>
                  <div className="px-4 py-2 bg-green-100 border-2 border-green-300 rounded text-green-800 dark:text-green-300 font-bold text-sm">
                    ACTIVE
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <DataDisplayCard
                  title="Personal Details"
                  fields={[
                    { label: "Name", value: "Rajesh Kumar Sharma" },
                    { label: "Date of Birth", value: "15/03/1985" },
                    { label: "Gender", value: "Male" }
                  ]}
                />
                <DataDisplayCard
                  title="Contact Information"
                  fields={[
                    { label: "Mobile", value: "+91 98765-43210" },
                    { label: "Email", value: "rajesh.sharma@example.com" },
                    { label: "Address", value: "123, MG Road, New Delhi - 110001" }
                  ]}
                />
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-950/30 border-l-4 border-yellow-600 p-6 rounded-r-lg">
                <div className="flex items-start gap-3">
                  <AlertCircle size={20} className="text-yellow-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-foreground mb-2">Renewal Due Soon</div>
                    <div className="text-sm text-muted-foreground">
                      Your license expires on <strong>14/03/2029</strong>. You can renew up to 90 days before expiry 
                      or within 1 year after expiry.
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-6 border-t-2 border-border">
                <button className="px-6 py-3 bg-card border-2 border-border text-muted-foreground font-medium rounded-lg">
                  This is Not My Record
                </button>
                <button className="px-10 py-4 bg-primary text-white font-bold rounded-lg flex items-center gap-2">
                  Proceed to Renewal
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
          <PageAnnotation items={[
            "Clear display of existing record with key details",
            "Visual status indicator (Active, Expired, Suspended)",
            "Validity dates prominently shown",
            "Option to reject if wrong record retrieved",
            "Clear CTA to proceed with renewal"
          ]} />
        </ModuleContent>
      </DocModule>

      {/* Prefilled Review Page */}
      <DocModule>
        <ModuleHeader title="Page 3: Review Prefilled Information" />
        <ModuleContent>
          <div className="border-2 border-border rounded-lg overflow-hidden bg-card">
            <div className="bg-background border-b-2 border-border p-6">
              <h2 className="text-xl font-bold text-foreground mb-2">Review Your Information</h2>
              <p className="text-sm text-muted-foreground">
                We've prefilled your information from our records. Review each section and update only what's changed.
              </p>
            </div>
            <div className="p-8 space-y-6">
              <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Info size={20} className="text-blue-600" />
                  <div className="font-bold text-foreground">Understanding Field Types</div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <FieldTypeLegend
                    icon={<Lock size={16} className="text-muted-foreground" />}
                    type="Locked"
                    description="Cannot be edited (verified official records)"
                  />
                  <FieldTypeLegend
                    icon={<Edit size={16} className="text-blue-600" />}
                    type="Editable"
                    description="Can be updated if information changed"
                  />
                  <FieldTypeLegend
                    icon={<AlertCircle size={16} className="text-orange-600" />}
                    type="Requires Proof"
                    description="Needs supporting document if changed"
                  />
                </div>
              </div>

              <PrefillSection
                title="Personal Details"
                locked={true}
                fields={[
                  { label: "Full Name", value: "Rajesh Kumar Sharma", type: "locked", reason: "As per Aadhaar" },
                  { label: "Date of Birth", value: "15/03/1985", type: "locked", reason: "As per Aadhaar" },
                  { label: "Gender", value: "Male", type: "locked", reason: "Official record" }
                ]}
              />

              <PrefillSection
                title="Contact Information"
                locked={false}
                fields={[
                  { label: "Mobile Number", value: "+91 98765-43210", type: "editable", reason: "Can update anytime" },
                  { label: "Email Address", value: "rajesh.sharma@example.com", type: "editable", reason: "Can update anytime" }
                ]}
              />

              <PrefillSection
                title="Address"
                locked={false}
                fields={[
                  { label: "Current Address", value: "123, MG Road, New Delhi - 110001", type: "requiresProof", reason: "Address proof needed if changed" },
                  { label: "State", value: "Delhi", type: "requiresProof", reason: "Linked to address" },
                  { label: "PIN Code", value: "110001", type: "requiresProof", reason: "Linked to address" }
                ]}
              />

              <div className="flex items-center justify-between pt-6 border-t-2 border-border">
                <button className="px-6 py-3 bg-card border-2 border-border text-muted-foreground font-medium rounded-lg">
                  Previous
                </button>
                <div className="flex items-center gap-3">
                  <button className="px-6 py-3 bg-muted text-foreground font-bold rounded-lg">
                    All Information is Correct
                  </button>
                  <button className="px-8 py-3 bg-primary text-white font-bold rounded-lg">
                    I Need to Update Some Information
                  </button>
                </div>
              </div>
            </div>
          </div>
          <PageAnnotation items={[
            "Clear legend explaining locked vs editable vs requires-proof fields",
            "Visual indicators (icons) for each field type",
            "Explanation for why each field is locked or requires proof",
            "Two pathways: all correct (fast) or needs updates (go to edit page)",
            "Grouped by logical sections (personal, contact, address)"
          ]} />
        </ModuleContent>
      </DocModule>

      {/* Update Information Page */}
      <DocModule>
        <ModuleHeader title="Page 4: Update Information" />
        <ModuleContent>
          <div className="border-2 border-border rounded-lg overflow-hidden bg-card">
            <div className="bg-background border-b-2 border-border p-6">
              <h2 className="text-xl font-bold text-foreground mb-2">Update Your Information</h2>
              <p className="text-sm text-muted-foreground">Edit only the fields that have changed. Locked fields cannot be modified.</p>
            </div>
            <div className="p-8 space-y-6">
              <EditableFieldGroup
                title="Contact Information"
                fields={[
                  { label: "Mobile Number", value: "+91 98765-43210", editable: true, changed: true, newValue: "+91 98765-99999" },
                  { label: "Email Address", value: "rajesh.sharma@example.com", editable: true, changed: false, newValue: "" }
                ]}
              />

              <EditableFieldGroup
                title="Address (Requires Address Proof if Changed)"
                fields={[
                  { label: "Current Address", value: "123, MG Road, New Delhi - 110001", editable: true, changed: true, newValue: "456, Connaught Place, New Delhi - 110001" },
                  { label: "State", value: "Delhi", editable: true, changed: false, newValue: "" },
                  { label: "PIN Code", value: "110001", editable: true, changed: false, newValue: "" }
                ]}
              />

              <div className="bg-orange-50 dark:bg-orange-950/30 border-l-4 border-orange-600 p-6 rounded-r-lg">
                <div className="flex items-start gap-3">
                  <AlertCircle size={20} className="text-orange-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-foreground mb-2">Documents Required for Changes</div>
                    <div className="text-sm text-muted-foreground">
                      Since you've updated your address, you'll need to upload address proof 
                      (utility bill, rent agreement, or Aadhaar with new address) in the next step.
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-6 border-t-2 border-border">
                <button className="px-6 py-3 bg-card border-2 border-border text-muted-foreground font-medium rounded-lg">
                  Cancel Changes
                </button>
                <button className="px-8 py-3 bg-primary text-white font-bold rounded-lg">
                  Save and Continue
                </button>
              </div>
            </div>
          </div>
          <PageAnnotation items={[
            "Show old value alongside new value for comparison",
            "Highlight changed fields visually (blue border or background)",
            "Alert if changes require supporting documents",
            "Option to cancel all changes and revert",
            "Inline validation for format (mobile, email, PIN)"
          ]} />
        </ModuleContent>
      </DocModule>

      {/* Review and Confirm */}
      <DocModule>
        <ModuleHeader title="Page 5: Review and Confirm" />
        <ModuleContent>
          <div className="border-2 border-border rounded-lg overflow-hidden bg-card">
            <div className="bg-background border-b-2 border-border p-6">
              <h2 className="text-xl font-bold text-foreground mb-2">Review Renewal Application</h2>
              <p className="text-sm text-muted-foreground">
                Please review all information before submitting your renewal application.
              </p>
            </div>
            <div className="p-8 space-y-6">
              <ReviewSection
                title="Changes Summary"
                highlight={true}
                items={[
                  { label: "Mobile Number", oldValue: "+91 98765-43210", newValue: "+91 98765-99999", changed: true },
                  { label: "Address", oldValue: "123, MG Road, New Delhi - 110001", newValue: "456, Connaught Place, New Delhi - 110001", changed: true }
                ]}
              />

              <ReviewSection
                title="Unchanged Information"
                highlight={false}
                items={[
                  { label: "Full Name", value: "Rajesh Kumar Sharma" },
                  { label: "Date of Birth", value: "15/03/1985" },
                  { label: "Email Address", value: "rajesh.sharma@example.com" }
                ]}
              />

              <ReviewSection
                title="Uploaded Documents"
                highlight={false}
                items={[
                  { label: "Address Proof", value: "utility_bill_march_2026.pdf (1.2 MB)" }
                ]}
              />

              <div className="border-2 border-green-300 bg-green-50 dark:bg-green-950/30 rounded-lg p-6">
                <div className="font-bold text-foreground mb-3">Renewal Details</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Current Validity:</span>
                    <span className="font-bold text-foreground ml-2">Until 14/03/2029</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">New Validity:</span>
                    <span className="font-bold text-green-700 dark:text-green-400 ml-2">Until 14/03/2039 (10 years)</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Renewal Fee:</span>
                    <span className="font-bold text-foreground ml-2">₹500</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Processing Time:</span>
                    <span className="font-bold text-foreground ml-2">7-10 working days</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <input aria-label="Checkbox" type="checkbox" className="w-5 h-5 mt-0.5 border-2 border-border rounded" />
                  <div className="text-sm text-muted-foreground">
                    <p className="font-bold mb-2">Declaration</p>
                    <p className="leading-relaxed">
                      I declare that all information provided is true and correct. I understand that the updated 
                      information will be verified and providing false information may result in rejection or legal action.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-6 border-t-2 border-border">
                <button className="px-6 py-3 bg-card border-2 border-border text-muted-foreground font-medium rounded-lg">
                  Previous
                </button>
                <button className="px-10 py-4 bg-green-600 text-white font-bold rounded-lg flex items-center gap-2">
                  <CheckCircle size={20} />
                  Submit Renewal Application
                </button>
              </div>
            </div>
          </div>
          <PageAnnotation items={[
            "Separate sections: changes vs unchanged vs documents",
            "Visual highlight for what changed (before/after comparison)",
            "Show new validity dates and fees clearly",
            "Declaration checkbox required before submission",
            "Prominent submit button with success color (green)"
          ]} />
        </ModuleContent>
      </DocModule>

      {/* Success Page */}
      <DocModule>
        <ModuleHeader title="Page 6: Renewal Acknowledgment" />
        <ModuleContent>
          <div className="border-2 border-border rounded-lg overflow-hidden bg-card">
            <div className="bg-green-600 text-white p-12 text-center">
              <div className="w-20 h-20 bg-card rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={48} className="text-green-600" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Renewal Application Submitted!</h2>
              <p className="text-lg text-green-100">
                Your renewal application has been received and is being processed.
              </p>
            </div>
            <div className="p-8 space-y-6">
              <div className="bg-background border-2 border-border rounded-lg p-6 text-center">
                <div className="text-sm text-muted-foreground mb-2">Renewal Application Reference Number</div>
                <div className="text-3xl font-bold text-foreground font-mono mb-4">RNW/2026/123456</div>
                <div className="text-sm text-muted-foreground">Original License: DL-0120190012345</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <NextStepCard
                  icon={<Clock size={24} className="text-orange-600" />}
                  title="Processing Time"
                  description="Your renewal will be processed within 7-10 working days."
                />
                <NextStepCard
                  icon={<Award size={24} className="text-green-600" />}
                  title="New Validity"
                  description="Once approved, your license will be valid until 14/03/2039."
                />
              </div>

              <div className="bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-600 p-6 rounded-r-lg">
                <div className="font-bold text-foreground mb-3">What Happens Next?</div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">1</div>
                    <span>We'll verify your updated information and supporting documents</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">2</div>
                    <span>You'll receive SMS and email updates on processing status</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">3</div>
                    <span>Once approved, download your renewed license from the portal</span>
                  </li>
                </ul>
              </div>

              <div className="flex items-center justify-center gap-4 pt-6">
                <button className="px-8 py-3 bg-primary text-white font-bold rounded-lg">
                  Track Renewal Status
                </button>
                <button className="px-8 py-3 bg-card border-2 border-border text-muted-foreground font-bold rounded-lg">
                  Download Receipt
                </button>
              </div>
            </div>
          </div>
          <PageAnnotation items={[
            "Clear success state with visual confirmation",
            "Renewal reference number and original license number shown",
            "New validity dates displayed prominently",
            "Next steps clearly outlined (1, 2, 3)",
            "Direct link to status tracking"
          ]} />
        </ModuleContent>
      </DocModule>
    </section>
  );
}

// ==================== DATA FIELD RULES ====================

function DataFieldRules() {
  return (
    <section id="data-rules" className="space-y-6">
      <SectionHeader title="Data Field Rules: Prefilled vs Editable" />

      <DocModule>
        <ModuleHeader title="Field Classification Framework" />
        <ModuleContent>
          <div className="space-y-6">
            <FieldTypeDefinition
              type="Locked (Non-Editable)"
              icon={<Lock size={20} className="text-muted-foreground" />}
              color="gray"
              definition="Fields that cannot be changed during renewal as they are verified through official identity documents"
              examples={[
                "Full Name (as per Aadhaar/Passport)",
                "Date of Birth (as per birth certificate)",
                "Gender (official record)",
                "Parent's Name (official record)",
                "Biometric data (fingerprints, photo from Aadhaar)"
              ]}
              reasoning="These are considered immutable identity attributes. Changes require separate legal process (name change, gender correction)."
              visual="Gray background, lock icon, tooltip explaining why locked"
            />

            <FieldTypeDefinition
              type="Editable (No Proof Required)"
              icon={<Edit size={20} className="text-blue-600" />}
              color="blue"
              definition="Fields that can be updated freely without requiring supporting documents"
              examples={[
                "Mobile number",
                "Email address",
                "Emergency contact",
                "Preferred language",
                "Communication preferences"
              ]}
              reasoning="These are non-critical contact details that users should be able to update easily for service continuity."
              visual="White background, edit icon, inline editing enabled"
            />

            <FieldTypeDefinition
              type="Editable (Proof Required)"
              icon={<AlertCircle size={20} className="text-orange-600" />}
              color="orange"
              definition="Fields that can be changed but require supporting documentation for verification"
              examples={[
                "Current address (requires address proof)",
                "Marital status (requires marriage/divorce certificate)",
                "Income level (requires income certificate)",
                "Occupation/employer (may require employment letter)",
                "Educational qualification (requires certificates)"
              ]}
              reasoning="These affect eligibility or service delivery and must be verified through official documents."
              visual="Yellow/orange background, alert icon, upload button appears on change"
            />

            <FieldTypeDefinition
              type="Conditional (Context-Dependent)"
              icon={<Info size={20} className="text-purple-600" />}
              color="purple"
              definition="Fields whose editability depends on service type, user role, or business rules"
              examples={[
                "Dependent information (editable if adding/removing dependents)",
                "Vehicle details (for license renewal - can add new classes)",
                "Business category (may require regulatory approval to change)",
                "Disability status (requires disability certificate if claiming)"
              ]}
              reasoning="Editability determined by service-specific rules and may trigger additional workflows."
              visual="Purple border, info icon, conditional logic explained in tooltip"
            />
          </div>
        </ModuleContent>
      </DocModule>

      <DocModule>
        <ModuleHeader title="Decision Tree: When to Allow Edits" />
        <ModuleContent>
          <div className="bg-background border-2 border-border rounded-lg p-4 sm:p-6 lg:p-8">
            <div className="space-y-4">
              <DecisionRule
                question="Is this field linked to official identity documents (Aadhaar, PAN, Passport)?"
                yes="LOCKED - Cannot edit during renewal. User must apply for correction separately."
                no="Continue to next check"
              />
              <DecisionRule
                question="Does changing this field affect eligibility or entitlement?"
                yes="EDITABLE WITH PROOF - Allow edit but require supporting documents"
                no="Continue to next check"
              />
              <DecisionRule
                question="Is this a contact/communication preference field?"
                yes="EDITABLE - Allow free editing with inline validation"
                no="CONDITIONAL - Apply service-specific business rules"
              />
            </div>
          </div>
        </ModuleContent>
      </DocModule>

      <DocModule>
        <ModuleHeader title="Visual Design Patterns" />
        <ModuleContent>
          <div className="space-y-6">
            <VisualPatternExample
              type="Locked Field"
              code={`<div className="relative">
  <label className="block text-sm font-bold text-foreground mb-2">
    Full Name <Lock size={14} className="inline ml-1 text-muted-foreground" />
  </label>
  <input aria-label="text input" value="Rajesh Kumar Sharma" 
    disabled 
    className="w-full px-4 py-3 bg-muted border-2 border-border rounded-lg text-muted-foreground cursor-not-allowed"
  />
  <div className="text-xs text-muted-foreground mt-1">
    Cannot be edited (as per Aadhaar)
  </div>
</div>`}
            />

            <VisualPatternExample
              type="Editable Field"
              code={`<div className="relative">
  <label className="block text-sm font-bold text-foreground mb-2">
    Mobile Number <Edit size={14} className="inline ml-1 text-blue-600" />
  </label>
  <input aria-label="text input" value="+91 98765-43210" 
    className="w-full px-4 py-3 border-2 border-blue-300 bg-blue-50 dark:bg-blue-950/30 rounded-lg focus:border-blue-600"
  />
  <div className="text-xs text-muted-foreground mt-1">
    You can update this anytime
  </div>
</div>`}
            />

            <VisualPatternExample
              type="Requires Proof Field (Changed)"
              code={`<div className="relative">
  <label className="block text-sm font-bold text-foreground mb-2">
    Current Address <AlertCircle size={14} className="inline ml-1 text-orange-600" />
  </label>
  <textarea aria-label="Text input" className="w-full px-4 py-3 border-2 border-orange-300 bg-orange-50 dark:bg-orange-950/30 rounded-lg"
    value="456, Connaught Place, New Delhi - 110001"
  ></textarea>
  <div className="flex items-center gap-2 mt-2 text-xs text-orange-700">
    <AlertCircle size={12} />
    Address proof required (changed from previous)
  </div>
  <button className="mt-2 px-4 py-2 bg-orange-600 text-white rounded">
    Upload Address Proof
  </button>
</div>`}
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
            <ComponentCard name="Form Input" variants="Text, disabled state, prefilled state" usage="All data entry fields" />
            <ComponentCard name="Button" variants="Primary, Secondary, Disabled" usage="Actions, navigation" />
            <ComponentCard name="Card" variants="Elevated, highlighted, status" usage="Data display, grouping" />
            <ComponentCard name="Icon" variants="Lock, Edit, AlertCircle, Info" usage="Field type indicators" />
            <ComponentCard name="Alert Banner" variants="Info, Warning, Success, Error" usage="Status, guidance, validation" />
            <ComponentCard name="File Upload" variants="Single, with preview" usage="Document submission" />
            <ComponentCard name="Badge" variants="Status, validity" usage="Record status display" />
            <ComponentCard name="Tooltip" variants="Informational" usage="Explain locked fields" />
            <ComponentCard name="Compare View" variants="Before/After" usage="Show data changes" />
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
      <SectionHeader title="Content Guidance" />

      <DocModule>
        <ModuleHeader title="Tone for Renewal Communications" />
        <ModuleContent>
          <div className="space-y-6">
            <ToneBlock
              context="Record Found Successfully"
              tone="Reassuring and Efficient"
              good="Great! We found your record. We've prefilled all your information to save you time."
              bad="Your record has been retrieved from the database."
            />
            <ToneBlock
              context="Explaining Locked Fields"
              tone="Clear and Informative"
              good="This information cannot be changed as it's linked to your Aadhaar. If this is incorrect, you'll need to update your Aadhaar first."
              bad="This field is locked and cannot be edited."
            />
            <ToneBlock
              context="Requesting Updated Information"
              tone="Helpful and Specific"
              good="Has your mobile number changed since 2019? Update it here so we can send you renewal status updates."
              bad="Enter your mobile number."
            />
            <ToneBlock
              context="Document Upload for Changes"
              tone="Explanatory and Supportive"
              good="Since you've updated your address, we need proof to verify the change. Upload a utility bill, rent agreement, or updated Aadhaar."
              bad="Address proof required."
            />
          </div>
        </ModuleContent>
      </DocModule>

      <DocModule>
        <ModuleHeader title="Label and Help Text Guidelines" />
        <ModuleContent>
          <div className="space-y-4">
            <LabelGuidance
              element="Locked Field Label"
              pattern="[Field Name] 🔒"
              helpText="Cannot be edited (as per [source document])"
              example="Full Name 🔒 — Cannot be edited (as per Aadhaar)"
            />
            <LabelGuidance
              element="Editable Field Label"
              pattern="[Field Name] ✏️"
              helpText="You can update this if changed"
              example="Mobile Number ✏️ — You can update this if changed"
            />
            <LabelGuidance
              element="Requires Proof Label"
              pattern="[Field Name] ⚠️"
              helpText="[Document type] required if changed"
              example="Current Address ⚠️ — Address proof required if changed"
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AccessibilityBlock
              principle="Keyboard Navigation"
              requirements={[
                "All editable fields accessible via Tab key",
                "Locked fields skippable (tab order excludes disabled inputs)",
                "Visual focus indicators on editable fields only",
                "Skip to editable fields shortcut provided"
              ]}
            />
            <AccessibilityBlock
              principle="Screen Reader Support"
              requirements={[
                "Announce field type: 'locked', 'editable', 'requires proof'",
                "Use aria-readonly for locked fields (not disabled)",
                "Provide aria-describedby for why field is locked",
                "Announce changes: 'Field updated. Upload proof required.'"
              ]}
            />
            <AccessibilityBlock
              principle="Visual Indicators"
              requirements={[
                "Color + icon for field types (not color alone)",
                "Sufficient contrast for disabled/locked state (3:1 min)",
                "Changed fields highlighted with border + background",
                "Before/after comparison visible without relying on color"
              ]}
            />
            <AccessibilityBlock
              principle="Error Prevention"
              requirements={[
                "Warn before discarding unsaved changes",
                "Confirm before submitting if required docs not uploaded",
                "Show summary of all changes before final submit",
                "Allow undo for recently changed fields"
              ]}
            />
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
              category="Record Retrieval"
              requirement="API call to fetch existing record by ID/mobile/Aadhaar. Display loading state, handle not found."
              priority="critical"
            />
            <ImplementationItem
              category="Field Classification"
              requirement="Receive field metadata from backend: {fieldName, value, editable, requiresProof, lockedReason}"
              priority="critical"
            />
            <ImplementationItem
              category="Change Tracking"
              requirement="Store original values. Track which fields changed. Show before/after comparison."
              priority="required"
            />
            <ImplementationItem
              category="Conditional Logic"
              requirement="If address changed → show upload button. If no changes → skip upload step."
              priority="required"
            />
            <ImplementationItem
              category="Validation"
              requirement="Validate changed fields only. Prefilled locked fields assumed valid."
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
              category="Data Model"
              requirement="Store field-level metadata: isEditable, requiresProof, dataSource (Aadhaar/manual)"
              priority="critical"
            />
            <ImplementationItem
              category="Business Rules Engine"
              requirement="Define which fields are locked/editable per service type. Configurable by policy team."
              priority="critical"
            />
            <ImplementationItem
              category="Change Audit Log"
              requirement="Log: {field, oldValue, newValue, timestamp, userId, proofDocumentId}"
              priority="required"
            />
            <ImplementationItem
              category="Document Verification"
              requirement="If field changes and requiresProof=true, mark renewal as pending verification until doc approved"
              priority="critical"
            />
          </div>
        </ModuleContent>
      </DocModule>

      <DocModule>
        <ModuleHeader title="Analytics Events" />
        <ModuleContent>
          <div className="space-y-3">
            <AnalyticsEvent event="renewal_started" description="User starts renewal process" />
            <AnalyticsEvent event="record_found" description="Existing record successfully retrieved" />
            <AnalyticsEvent event="record_not_found" description="No existing record found (error or first-time user)" />
            <AnalyticsEvent event="prefill_displayed" description="Prefilled data shown to user" />
            <AnalyticsEvent event="field_edited" description="User changes a prefilled field (track which field)" />
            <AnalyticsEvent event="no_changes_renewal" description="User proceeds with no changes (fast path)" />
            <AnalyticsEvent event="proof_upload_required" description="Change requires document upload" />
            <AnalyticsEvent event="renewal_submitted" description="Renewal application submitted" />
            <AnalyticsEvent event="renewal_approved" description="Renewal processed and approved" />
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
            <ConformanceItem checked label="Retrieves and prefills all existing verified data" />
            <ConformanceItem checked label="Clearly distinguishes locked vs editable vs requires-proof fields" />
            <ConformanceItem checked label="Uses visual indicators (icons + color + text) for field types" />
            <ConformanceItem checked label="Explains WHY each field is locked (linked to Aadhaar, official record)" />
            <ConformanceItem checked label="Shows before/after comparison for changed fields" />
            <ConformanceItem checked label="Conditionally requires document upload only if information changed" />
            <ConformanceItem checked label="Provides fast path for no-changes renewal" />
            <ConformanceItem checked label="Displays new validity dates clearly" />
            <ConformanceItem checked label="Sends SMS/email confirmation with renewal reference number" />
            <ConformanceItem checked label="Allows tracking of renewal status" />
            <ConformanceItem checked label="Meets WCAG 2.1 AA for disabled/readonly states" />
          </div>
        </ModuleContent>
      </DocModule>

      <DocModule>
        <ModuleHeader title="Common Mistakes and Risks" />
        <ModuleContent>
          <div className="space-y-4">
            <RiskBlock
              risk="Making all fields editable, losing data integrity"
              impact="Critical"
              solution="Define clear rules: identity fields locked, contact fields editable, critical fields require proof"
            />
            <RiskBlock
              risk="Not explaining WHY fields are locked (user frustration)"
              impact="High"
              solution="Tooltip or help text: 'Cannot edit (as per Aadhaar). To change, update Aadhaar first.'"
            />
            <RiskBlock
              risk="Forcing document upload even when no information changed"
              impact="High"
              solution="Conditional logic: only require uploads for changed fields that need proof"
            />
            <RiskBlock
              risk="Not showing what changed vs what stayed same"
              impact="Medium"
              solution="Review page must highlight changes with before/after comparison"
            />
            <RiskBlock
              risk="Losing prefilled data if user navigates away"
              impact="Medium"
              solution="Auto-save changes to session/database. Allow resume later."
            />
            <RiskBlock
              risk="Poor visual distinction between field types"
              impact="Medium"
              solution="Use icons + background color + border + text label for each type"
            />
          </div>
        </ModuleContent>
      </DocModule>

      <DocModule>
        <ModuleHeader title="Lifecycle and Maturity Status" />
        <ModuleContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <MaturityBlock
              status="Stable"
              version="1.0.0"
              description="Tested across 34 services, 18 departments"
            />
            <MaturityBlock
              status="Conformance"
              version="Mandatory"
              description="All renewal services must use this pattern or justify deviation"
            />
            <MaturityBlock
              status="Adoption"
              version="72%"
              description="72% of renewal services now use prefill + selective edit pattern"
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
        <MetadataRow label="Pattern ID" value="UX4G-PAT-003" />
        <MetadataRow label="Category" value="Service Continuity" />
        <MetadataRow label="Complexity" value="Medium" />
        <MetadataRow label="Implementation" value="2-3 weeks" />
        <MetadataRow label="Updated" value="March 2026" />
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
        <QuickRefRow label="Avg. Duration" value="5-10 minutes" />
        <QuickRefRow label="Prefill Rate" value="70-80% of fields" />
        <QuickRefRow label="Field Types" value="4 classifications" />
        <QuickRefRow label="Components" value="9 core components" />
        <QuickRefRow label="WCAG Level" value="AA" />
        <QuickRefRow label="Languages" value="Hindi + English min" />
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
        <PrincipleItem icon={<Zap size={14} />} text="Efficiency: Prefill everything, update only what changed" />
        <PrincipleItem icon={<Shield size={14} />} text="Integrity: Lock verified data, require proof for changes" />
        <PrincipleItem icon={<Eye size={14} />} text="Transparency: Show what's locked, editable, or requires proof" />
        <PrincipleItem icon={<Target size={14} />} text="Continuity: Maintain service validity with minimal friction" />
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
        <RiskItem severity="high" risk="Making all fields editable (data integrity loss)" />
        <RiskItem severity="high" risk="Not explaining locked fields (user confusion)" />
        <RiskItem severity="medium" risk="Forcing unnecessary document uploads" />
        <RiskItem severity="medium" risk="Poor visual distinction between field types" />
        <RiskItem severity="low" risk="Not showing change summary before submit" />
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
        <RelatedLink title="Correction & Resubmission" />
        <RelatedLink title="Eligibility & Screening" />
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

function ScenarioCard({ scenario, description, example, complexity }: any) {
  const complexityColor: any = {
    Low: "bg-green-100 text-green-700 border-green-300",
    Medium: "bg-yellow-100 text-yellow-700 border-yellow-300",
    "Medium-High": "bg-orange-100 text-orange-700 border-orange-300",
    High: "bg-red-100 text-red-700 border-red-300"
  };

  return (
    <div className="border-2 border-border rounded-lg p-4 bg-card">
      <div className="flex items-start justify-between mb-3">
        <div className="font-bold text-sm text-foreground">{scenario}</div>
        <div className={`px-2 py-1 border text-xs font-bold rounded ${complexityColor[complexity]}`}>
          {complexity}
        </div>
      </div>
      <div className="text-sm text-muted-foreground mb-2">{description}</div>
      <div className="text-xs text-muted-foreground bg-background border border-border rounded p-2 italic">
        Example: {example}
      </div>
    </div>
  );
}

function FlowStep({ number, label, status }: any) {
  const statusConfig: any = {
    entry: { bg: 'bg-muted', border: 'border-border', text: 'text-muted-foreground' },
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
            <span className="px-2 py-0.5 bg-red-100 text-red-700 dark:text-red-400 text-xs font-bold rounded">REQUIRED</span>
          ) : (
            <span className="px-2 py-0.5 bg-muted text-muted-foreground text-xs font-bold rounded">OPTIONAL</span>
          )}
        </div>
        <div className="text-xs text-muted-foreground">{description}</div>
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

function DataDisplayCard({ title, fields }: any) {
  return (
    <div className="border-2 border-border rounded-lg p-4 bg-card">
      <div className="font-bold text-sm text-foreground mb-3">{title}</div>
      <div className="space-y-2 text-sm">
        {fields.map((field: any, idx: number) => (
          <div key={idx}>
            <div className="text-muted-foreground text-xs">{field.label}</div>
            <div className="text-foreground font-medium">{field.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FieldTypeLegend({ icon, type, description }: any) {
  return (
    <div className="flex items-start gap-2">
      <div className="flex-shrink-0 mt-0.5">{icon}</div>
      <div>
        <div className="font-bold text-xs text-foreground">{type}</div>
        <div className="text-xs text-muted-foreground">{description}</div>
      </div>
    </div>
  );
}

function PrefillSection({ title, locked, fields }: any) {
  return (
    <div className="border-2 border-border rounded-lg overflow-hidden">
      <div className="bg-background border-b-2 border-border px-4 py-3 flex items-center justify-between">
        <h3 className="font-bold text-sm text-foreground">{title}</h3>
        {locked && (
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Lock size={14} />
            <span>All fields locked</span>
          </div>
        )}
      </div>
      <div className="p-4 space-y-3">
        {fields.map((field: any, idx: number) => (
          <PrefillField key={idx} {...field} />
        ))}
      </div>
    </div>
  );
}

function PrefillField({ label, value, type, reason }: any) {
  const typeConfig: any = {
    locked: { icon: <Lock size={14} />, bg: 'bg-muted', border: 'border-border', color: 'text-muted-foreground' },
    editable: { icon: <Edit size={14} />, bg: 'bg-blue-50', border: 'border-blue-300', color: 'text-blue-600' },
    requiresProof: { icon: <AlertCircle size={14} />, bg: 'bg-orange-50', border: 'border-orange-300', color: 'text-orange-600' }
  };

  return (
    <div>
      <label className="block text-sm font-bold text-foreground mb-2 flex items-center gap-2">
        {label}
        <span className={typeConfig[type].color}>{typeConfig[type].icon}</span>
      </label>
      <input aria-label="text input" defaultValue={value}
        readOnly={type === 'locked'}
        disabled={type === 'locked'}
        className={`w-full px-4 py-3 border-2 ${typeConfig[type].border} ${typeConfig[type].bg} rounded-lg ${type === 'locked' ? 'cursor-not-allowed' : ''}`}
      />
      <div className="text-xs text-muted-foreground mt-1">{reason}</div>
    </div>
  );
}

function EditableFieldGroup({ title, fields }: any) {
  return (
    <div className="border-2 border-border rounded-lg overflow-hidden">
      <div className="bg-background border-b-2 border-border px-4 py-3">
        <h3 className="font-bold text-sm text-foreground">{title}</h3>
      </div>
      <div className="p-4 space-y-4">
        {fields.map((field: any, idx: number) => (
          <EditableField key={idx} {...field} />
        ))}
      </div>
    </div>
  );
}

function EditableField({ label, value, editable, changed, newValue }: any) {
  return (
    <div>
      <label className="block text-sm font-bold text-foreground mb-2">{label}</label>
      {changed ? (
        <div className="space-y-2">
          <div className="text-sm">
            <span className="text-muted-foreground">Old: </span>
            <span className="text-foreground line-through">{value}</span>
          </div>
          <input aria-label="text input" defaultValue={newValue}
            className="w-full px-4 py-3 border-2 border-blue-400 bg-blue-50 dark:bg-blue-950/30 rounded-lg"
          />
        </div>
      ) : (
        <input aria-label="text input" defaultValue={value}
          readOnly={!editable}
          className="w-full px-4 py-3 border-2 border-border rounded-lg"
        />
      )}
    </div>
  );
}

function ReviewSection({ title, highlight, items }: any) {
  return (
    <div className={`border-2 rounded-lg overflow-hidden ${highlight ? 'border-blue-300 bg-blue-50 dark:bg-blue-900/20' : 'border-border bg-card'}`}>
      <div className={`${highlight ? 'bg-blue-100 border-blue-300' : 'bg-background border-border'} border-b-2 px-4 py-3`}>
        <h3 className="font-bold text-sm text-foreground">{title}</h3>
      </div>
      <div className="p-4 space-y-3">
        {items.map((item: any, idx: number) => (
          <div key={idx} className="text-sm">
            {item.changed ? (
              <div>
                <div className="text-muted-foreground">{item.label}</div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-muted-foreground line-through">{item.oldValue}</span>
                  <ArrowRight size={14} className="text-blue-600" />
                  <span className="text-blue-700 font-bold">{item.newValue}</span>
                </div>
              </div>
            ) : (
              <div className="flex items-start justify-between">
                <div className="text-muted-foreground">{item.label}</div>
                <div className="font-medium text-foreground text-right">{item.value}</div>
              </div>
            )}
          </div>
        ))}
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

function FieldTypeDefinition({ type, icon, color, definition, examples, reasoning, visual }: any) {
  const colorConfig: any = {
    gray: { bg: 'bg-background', border: 'border-border', headerBg: 'bg-muted' },
    blue: { bg: 'bg-blue-50', border: 'border-blue-300', headerBg: 'bg-blue-100' },
    orange: { bg: 'bg-orange-50', border: 'border-orange-300', headerBg: 'bg-orange-100' },
    purple: { bg: 'bg-purple-50', border: 'border-purple-300', headerBg: 'bg-purple-100' }
  };

  return (
    <div className={`border-2 ${colorConfig[color].border} ${colorConfig[color].bg} rounded-lg overflow-hidden`}>
      <div className={`${colorConfig[color].headerBg} border-b-2 ${colorConfig[color].border} px-4 py-3 flex items-center gap-2`}>
        {icon}
        <h3 className="font-bold text-foreground">{type}</h3>
      </div>
      <div className="p-4 space-y-3">
        <div className="text-sm text-muted-foreground">{definition}</div>
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
        <div className="text-xs text-muted-foreground bg-card border border-border rounded p-2">
          <strong>Reasoning:</strong> {reasoning}
        </div>
        <div className="text-xs text-muted-foreground">
          <strong>Visual Treatment:</strong> {visual}
        </div>
      </div>
    </div>
  );
}

function DecisionRule({ question, yes, no }: any) {
  return (
    <div className="border-2 border-blue-400 bg-blue-50 dark:bg-blue-950/30 rounded-lg p-6">
      <div className="flex items-start gap-3 mb-4">
        <Info size={20} className="text-blue-600 flex-shrink-0" />
        <div className="font-bold text-sm text-foreground">{question}</div>
      </div>
      <div className="space-y-3 text-sm pl-8">
        <div className="flex items-start gap-2">
          <CheckCircle size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
          <div>
            <span className="font-bold text-foreground">Yes:</span> <span className="text-muted-foreground">{yes}</span>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <XCircle size={14} className="text-red-600 mt-0.5 flex-shrink-0" />
          <div>
            <span className="font-bold text-foreground">No:</span> <span className="text-muted-foreground">{no}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function VisualPatternExample({ type, code }: any) {
  return (
    <div className="border-2 border-border rounded-lg overflow-hidden">
      <div className="bg-muted border-b-2 border-border px-4 py-3">
        <h3 className="font-bold text-sm text-foreground">{type}</h3>
      </div>
      <div className="p-4 bg-gray-900 text-gray-100 dark:text-gray-200">
        <pre className="text-xs overflow-x-auto">
          <code>{code}</code>
        </pre>
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
            <span className="text-xs font-bold text-green-700 dark:text-green-400">Good</span>
          </div>
          <div className="text-sm text-foreground bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded p-2">"{good}"</div>
        </div>
        <div>
          <div className="flex items-center gap-2 mb-1">
            <XCircle size={14} className="text-red-600" />
            <span className="text-xs font-bold text-red-700 dark:text-red-400">Bad</span>
          </div>
          <div className="text-sm text-foreground bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded p-2">"{bad}"</div>
        </div>
      </div>
    </div>
  );
}

function LabelGuidance({ element, pattern, helpText, example }: any) {
  return (
    <div className="border-2 border-border rounded-lg p-4 bg-background">
      <div className="font-bold text-sm text-foreground mb-2">{element}</div>
      <div className="text-sm text-muted-foreground mb-2">
        <strong>Pattern:</strong> {pattern}
      </div>
      <div className="text-sm text-muted-foreground mb-2">
        <strong>Help Text:</strong> {helpText}
      </div>
      <div className="text-xs text-foreground bg-card border border-border rounded p-2">
        <strong>Example:</strong> {example}
      </div>
    </div>
  );
}

function AccessibilityBlock({ principle, requirements }: any) {
  return (
    <div className="border-2 border-border rounded-lg p-4 bg-card">
      <div className="font-bold text-sm text-foreground mb-3">{principle}</div>
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
      <code className="px-2 py-1 bg-card border border-border rounded text-xs font-mono text-foreground flex-shrink-0">
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

// ==================== CODE DOWNLOADS ====================

const RENEWAL_REACT_CODE = `import React, { useState } from 'react';

export default function RenewalPage() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/renewal', {
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
        <h1 className="text-2xl font-bold text-foreground mb-2">Renewal</h1>
        <p className="text-sm text-muted-foreground mb-6">Government digital service pattern</p>
        {error && <div role="alert" className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 rounded-lg text-sm text-red-700 dark:text-red-400">{error}</div>}
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

const RENEWAL_ANGULAR_CODE = `import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ux4g-renewal',
  standalone: true,
  imports: [CommonModule],
  template: \`
    <div class="min-h-screen flex items-center justify-center bg-background p-4">
      <div class="w-full max-w-lg bg-card border border-border rounded-2xl p-8 shadow-sm">
        <h1 class="text-2xl font-bold text-foreground mb-2">Renewal</h1>
        <p class="text-sm text-muted-foreground mb-6">Government digital service pattern</p>
        <div *ngIf="error" role="alert" class="mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 rounded-lg text-sm text-red-700 dark:text-red-400">{{ error }}</div>
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
export class RenewalComponent {
  loading = false;
  submitted = false;
  error = '';

  async onSubmit() {
    this.loading = true;
    this.error = '';
    try {
      const res = await fetch('/api/renewal', {
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

const RENEWAL_HTML_CODE = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Renewal — UX4G</title>
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
    <h1>Renewal</h1>
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
        const res = await fetch('/api/renewal', {
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

function RenewalCodeDownloads() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const copyToClipboard = (code: string, id: string) => { navigator.clipboard.writeText(code); setCopiedId(id); setTimeout(() => setCopiedId(null), 2000); };
  const downloadCode = (code: string, filename: string) => { const blob = new Blob([code], { type: 'text/plain' }); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = filename; a.click(); URL.revokeObjectURL(url); };
  const lanes = [
    { key: 'react', title: 'React', desc: 'TypeScript + Hooks', code: RENEWAL_REACT_CODE, filename: 'RenewalPage.tsx' },
    { key: 'angular', title: 'Angular', desc: 'Standalone Component', code: RENEWAL_ANGULAR_CODE, filename: 'renewal.component.ts' },
    { key: 'html', title: 'HTML / CSS / JS', desc: 'No framework needed', code: RENEWAL_HTML_CODE, filename: 'renewal.html' },
  ];
  return (
    <section id="code-downloads" className="space-y-6 scroll-mt-24 mt-12">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Code Downloads</h2>
        <p className="text-muted-foreground mt-1">Production-ready Renewal implementations.</p>
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
