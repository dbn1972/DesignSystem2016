import React from "react";
import { FileText, CheckCircle, AlertCircle, Info, Clock, Users, Shield, Eye, Globe, Code, BarChart3, AlertTriangle, ChevronRight, Download, Upload, Edit, Search, Calendar, Phone, Mail, User, MapPin, FileCheck, ArrowRight, XCircle, Smartphone, Check, Minus, Hash, Image as ImageIcon, Lock, Zap, Database, GitBranch, Settings, Headphones, Copy } from "lucide-react";

export default function ApplicationSubmissionPattern() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b-2 border-border">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-8">
          <div className="flex items-start justify-between">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-16 h-16 bg-muted border-2 border-border rounded flex items-center justify-center">
                  <FileText size={32} className="text-muted-foreground" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">UX4G Service Pattern Library</div>
                  <h1 className="text-3xl font-bold text-foreground">Application Submission</h1>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Complete service archetype for citizen-initiated applications requiring structured data collection, 
                document submission, validation, and acknowledgment with status tracking capability.
              </p>
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-sm"></div>
                  <span className="text-muted-foreground">Pattern ID: <span className="font-bold text-foreground">UX4G-PAT-001</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-sm"></div>
                  <span className="text-muted-foreground">Version: <span className="font-bold text-foreground">1.2.0</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-sm"></div>
                  <span className="text-muted-foreground">Updated: <span className="font-bold text-foreground">March 2026</span></span>
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
              { id: "journey", label: "Journey" },
              { id: "pages", label: "Page Designs" },
              { id: "components", label: "Components" },
              { id: "validation", label: "Validation" },
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
            <JourneyAndFlow />
            <PageDesigns />
            <ComponentsUsed />
            <ValidationRules />
            <ContentGuidance />
            <AccessibilityGuidance />
            <ImplementationNotes />
            <GovernanceConformance />
            <AppSubmissionCodeDownloads />
          </div>

          {/* Sidebar - 3 columns */}
          <aside className="col-span-3 space-y-6 sticky top-24 self-start">
            <MetadataPanel />
            <QuickRefPanel />
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
          <ModuleHeader title="Purpose and Service Problem Solved" />
          <ModuleContent>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Citizens need to apply for government services, licenses, certificates, or benefits that require:
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                <span>Structured personal and service-specific data collection</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                <span>Supporting document submission and validation</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                <span>Data review and user confirmation before final submission</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                <span>Acknowledgment with unique reference number for tracking</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                <span>Ability to save partial applications and resume later</span>
              </li>
            </ul>
          </ModuleContent>
        </DocModule>

        <DocModule>
          <ModuleHeader title="Primary User Groups" />
          <ModuleContent>
            <div className="space-y-4">
              <UserGroup
                icon={<User size={18} className="text-blue-600" />}
                name="Citizens (Self-Service)"
                description="First-time applicants using online portal independently"
                percentage="65%"
              />
              <UserGroup
                icon={<Headphones size={18} className="text-purple-600" />}
                name="CSC / Service Center Operators"
                description="Staff assisting citizens with form filling and document upload"
                percentage="30%"
              />
              <UserGroup
                icon={<Shield size={18} className="text-orange-600" />}
                name="Government Staff"
                description="Back-office staff processing applications"
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
              title="Identity & Verification"
              examples={["Passport applications", "Aadhaar enrollment", "Driving license applications", "Voter ID registration"]}
            />
            <UseCaseCard
              title="Social Welfare & Benefits"
              examples={["Scholarship applications", "Pension scheme enrollment", "Ration card applications", "Housing scheme applications"]}
            />
            <UseCaseCard
              title="Business & Commerce"
              examples={["Business license registration", "Trade license applications", "GST registration", "Import-export licenses"]}
            />
          </div>
        </ModuleContent>
      </DocModule>
    </section>
  );
}

// ==================== JOURNEY AND FLOW ====================

function JourneyAndFlow() {
  return (
    <section id="journey" className="space-y-6">
      <SectionHeader title="User Journey and Service Flow" />

      <DocModule>
        <ModuleHeader title="Journey Summary" />
        <ModuleContent>
          <div className="flex items-center gap-2 text-sm text-muted-foreground bg-background border-2 border-border rounded-lg p-6">
            <span className="font-medium">User learns about service</span>
            <ArrowRight size={16} className="text-muted-foreground" />
            <span className="font-medium">Checks eligibility</span>
            <ArrowRight size={16} className="text-muted-foreground" />
            <span className="font-medium">Fills multi-step form</span>
            <ArrowRight size={16} className="text-muted-foreground" />
            <span className="font-medium">Uploads documents</span>
            <ArrowRight size={16} className="text-muted-foreground" />
            <span className="font-medium">Reviews submission</span>
            <ArrowRight size={16} className="text-muted-foreground" />
            <span className="font-medium">Receives acknowledgment</span>
            <ArrowRight size={16} className="text-muted-foreground" />
            <span className="font-medium">Tracks application status</span>
          </div>
        </ModuleContent>
      </DocModule>

      <DocModule>
        <ModuleHeader title="End-to-End Service Flow" />
        <ModuleContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <FlowStep number="01" label="Entry & Start" status="entry" />
              <FlowStep number="02" label="Service Overview" status="active" />
              <FlowStep number="03" label="Eligibility Check" status="active" />
              <FlowStep number="04" label="Document Checklist" status="active" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <FlowStep number="05" label="Form Step 1" status="active" />
              <FlowStep number="06" label="Form Step 2" status="active" />
              <FlowStep number="07" label="Form Step 3" status="active" />
              <FlowStep number="08" label="Document Upload" status="active" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <FlowStep number="09" label="Review & Confirm" status="active" />
              <FlowStep number="10" label="Declaration" status="active" />
              <FlowStep number="11" label="Submission" status="success" />
              <FlowStep number="12" label="Acknowledgment" status="success" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <FlowStep number="13" label="Reference Number" status="success" />
              <FlowStep number="14" label="Next Steps" status="info" />
              <FlowStep number="15" label="Status Tracking" status="info" />
              <FlowStep number="16" label="Save & Resume" status="optional" />
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
              title="Start Page"
              description="Service introduction, benefits, expected time, login option"
              required={true}
            />
            <PageSequenceRow
              number="2"
              title="Service Overview"
              description="What is this service, who is it for, what you'll need"
              required={true}
            />
            <PageSequenceRow
              number="3"
              title="Eligibility Prerequisites"
              description="Quick eligibility check or prerequisite list (optional but recommended)"
              required={false}
            />
            <PageSequenceRow
              number="4"
              title="Document Checklist"
              description="List of required documents with examples and format requirements"
              required={true}
            />
            <PageSequenceRow
              number="5"
              title="Personal Details (Step 1)"
              description="Name, DOB, gender, Aadhaar, mobile, email"
              required={true}
            />
            <PageSequenceRow
              number="6"
              title="Address Details (Step 2)"
              description="Current and permanent address, district, state, PIN"
              required={true}
            />
            <PageSequenceRow
              number="7"
              title="Service-Specific Info (Step 3)"
              description="Additional fields based on service type (income, occupation, category)"
              required={true}
            />
            <PageSequenceRow
              number="8"
              title="Document Upload"
              description="Upload identity proof, address proof, photo, other documents"
              required={true}
            />
            <PageSequenceRow
              number="9"
              title="Review and Confirm"
              description="Editable summary of all entered data, allow corrections"
              required={true}
            />
            <PageSequenceRow
              number="10"
              title="Declaration and Consent"
              description="User declaration, terms acceptance, consent checkboxes"
              required={true}
            />
            <PageSequenceRow
              number="11"
              title="Payment (if applicable)"
              description="Fee breakdown, payment gateway integration, receipt"
              required={false}
            />
            <PageSequenceRow
              number="12"
              title="Submission Acknowledgment"
              description="Success message, application reference number, next steps"
              required={true}
            />
            <PageSequenceRow
              number="13"
              title="Status Tracking Entry"
              description="Link to track application status using reference number"
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

      {/* Start Page */}
      <DocModule>
        <ModuleHeader title="Page 1: Start Page" />
        <ModuleContent>
          <div className="border-2 border-border rounded-lg overflow-hidden bg-card">
            <div className="bg-primary text-white p-8">
              <div className="max-w-3xl">
                <div className="text-sm mb-2 text-blue-200">Government of India • Ministry of XYZ</div>
                <h1 className="text-3xl font-bold mb-4">Apply for [Service Name]</h1>
                <p className="text-lg text-blue-100 leading-relaxed mb-6">
                  Brief description of what this service provides and who it is for. Clear value proposition.
                </p>
                <div className="flex items-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>15-20 minutes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileText size={16} />
                    <span>3 documents required</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle size={16} />
                    <span>Digital certificate issued</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-8 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <InfoBox icon={<Users size={20} />} title="Who can apply" text="Indian citizens aged 18+ with valid Aadhaar" />
                <InfoBox icon={<FileText size={20} />} title="Documents needed" text="Aadhaar, address proof, recent photograph" />
                <InfoBox icon={<Clock size={20} />} title="Processing time" text="7-10 working days after submission" />
              </div>
              <div className="flex items-center gap-4">
                <button className="px-8 py-4 bg-primary text-white font-bold rounded-lg hover:opacity-90 transition-colors">
                  Start New Application
                </button>
                <button className="px-8 py-4 bg-muted text-foreground font-bold rounded-lg hover:bg-gray-200 transition-colors">
                  Resume Saved Application
                </button>
              </div>
            </div>
          </div>
          <PageAnnotation items={[
            "Clear service name and ministry branding",
            "Expected time to complete (manage expectations)",
            "Document requirements visible upfront",
            "Two CTAs: new application and resume saved"
          ]} />
        </ModuleContent>
      </DocModule>

      {/* Form Step Page */}
      <DocModule>
        <ModuleHeader title="Page 2-4: Multi-Step Form Pages" />
        <ModuleContent>
          <div className="border-2 border-border rounded-lg overflow-hidden bg-card">
            <div className="bg-background border-b-2 border-border p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-foreground">Personal Details</h2>
                <div className="text-sm text-muted-foreground">Step 1 of 3</div>
              </div>
              <ProgressBar steps={3} current={1} />
            </div>
            <div className="p-8 space-y-6">
              <FormFieldExample label="Full Name" required={true} type="text" helpText="Enter name as per Aadhaar card" />
              <FormFieldExample label="Date of Birth" required={true} type="date" helpText="DD/MM/YYYY format" />
              <div className="grid grid-cols-2 gap-6">
                <FormFieldExample label="Gender" required={true} type="select" />
                <FormFieldExample label="Aadhaar Number" required={true} type="text" helpText="12-digit number" />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <FormFieldExample label="Mobile Number" required={true} type="tel" helpText="Will receive OTP" />
                <FormFieldExample label="Email Address" required={true} type="email" />
              </div>
              <div className="flex items-center justify-between pt-6 border-t-2 border-border">
                <button className="px-6 py-3 bg-card border-2 border-border text-muted-foreground font-medium rounded-lg hover:bg-background">
                  Save & Continue Later
                </button>
                <div className="flex items-center gap-3">
                  <button className="px-6 py-3 bg-muted text-muted-foreground font-medium rounded-lg hover:bg-gray-200">
                    Previous
                  </button>
                  <button className="px-8 py-3 bg-primary text-white font-bold rounded-lg hover:opacity-90">
                    Save & Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
          <PageAnnotation items={[
            "Progress indicator shows current step",
            "Required fields marked with asterisk (*)",
            "Inline help text for complex fields",
            "Save & continue later option always visible",
            "Clear navigation: Previous, Save & Continue"
          ]} />
        </ModuleContent>
      </DocModule>

      {/* Document Upload Page */}
      <DocModule>
        <ModuleHeader title="Page 5: Document Upload" />
        <ModuleContent>
          <div className="border-2 border-border rounded-lg overflow-hidden bg-card">
            <div className="bg-background border-b-2 border-border p-6">
              <h2 className="text-xl font-bold text-foreground mb-2">Upload Required Documents</h2>
              <p className="text-sm text-muted-foreground">All documents must be in PDF, JPG, or PNG format. Max file size: 2MB per file.</p>
            </div>
            <div className="p-8 space-y-6">
              <DocumentUploadBox
                title="Identity Proof (Aadhaar Card)"
                required={true}
                formats="PDF, JPG, PNG"
                maxSize="2MB"
                status="uploaded"
              />
              <DocumentUploadBox
                title="Address Proof"
                required={true}
                formats="PDF, JPG, PNG"
                maxSize="2MB"
                status="pending"
              />
              <DocumentUploadBox
                title="Recent Photograph"
                required={true}
                formats="JPG, PNG"
                maxSize="1MB"
                status="pending"
              />
              <DocumentUploadBox
                title="Income Certificate"
                required={false}
                formats="PDF, JPG, PNG"
                maxSize="2MB"
                status="pending"
              />
              <div className="flex items-center justify-between pt-6 border-t-2 border-border">
                <button className="px-6 py-3 bg-card border-2 border-border text-muted-foreground font-medium rounded-lg">
                  Save & Continue Later
                </button>
                <div className="flex items-center gap-3">
                  <button className="px-6 py-3 bg-muted text-muted-foreground font-medium rounded-lg">
                    Previous
                  </button>
                  <button className="px-8 py-3 bg-primary text-white font-bold rounded-lg">
                    Continue to Review
                  </button>
                </div>
              </div>
            </div>
          </div>
          <PageAnnotation items={[
            "Clear file format and size requirements",
            "Visual upload status for each document",
            "Ability to replace uploaded files",
            "Optional documents clearly marked",
            "Validation before allowing continuation"
          ]} />
        </ModuleContent>
      </DocModule>

      {/* Review Page */}
      <DocModule>
        <ModuleHeader title="Page 6: Review and Confirm" />
        <ModuleContent>
          <div className="border-2 border-border rounded-lg overflow-hidden bg-card">
            <div className="bg-background border-b-2 border-border p-6">
              <h2 className="text-xl font-bold text-foreground mb-2">Review Your Application</h2>
              <p className="text-sm text-muted-foreground">Please review all information carefully before final submission. You can edit any section if needed.</p>
            </div>
            <div className="p-8 space-y-6">
              <ReviewSection
                title="Personal Details"
                items={[
                  { label: "Full Name", value: "Rajesh Kumar Sharma" },
                  { label: "Date of Birth", value: "15/03/1985" },
                  { label: "Gender", value: "Male" },
                  { label: "Aadhaar Number", value: "XXXX-XXXX-3456" },
                  { label: "Mobile Number", value: "+91 98765-43210" },
                  { label: "Email", value: "rajesh.sharma@example.com" }
                ]}
              />
              <ReviewSection
                title="Address Details"
                items={[
                  { label: "Current Address", value: "123, MG Road, New Delhi - 110001" },
                  { label: "District", value: "New Delhi" },
                  { label: "State", value: "Delhi" }
                ]}
              />
              <ReviewSection
                title="Uploaded Documents"
                items={[
                  { label: "Identity Proof", value: "aadhaar_card.pdf (1.2 MB)" },
                  { label: "Address Proof", value: "utility_bill.jpg (850 KB)" },
                  { label: "Photograph", value: "photo.jpg (320 KB)" }
                ]}
              />
              <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <input type="checkbox" className="w-5 h-5 mt-0.5 border-2 border-gray-400 rounded" />
                  <div className="text-sm text-muted-foreground">
                    <p className="font-bold mb-2">Declaration</p>
                    <p className="leading-relaxed">
                      I hereby declare that all information provided in this application is true and correct to the best of my knowledge. 
                      I understand that providing false information may lead to rejection of my application and/or legal action.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between pt-6 border-t-2 border-border">
                <button className="px-6 py-3 bg-card border-2 border-border text-muted-foreground font-medium rounded-lg">
                  Previous
                </button>
                <button className="px-10 py-4 bg-green-600 text-white font-bold rounded-lg hover:bg-green-600 flex items-center gap-2">
                  <CheckCircle size={20} />
                  Submit Application
                </button>
              </div>
            </div>
          </div>
          <PageAnnotation items={[
            "All entered data displayed in organized sections",
            "Edit option available for each section",
            "Sensitive data masked (Aadhaar shows last 4 digits)",
            "Declaration checkbox mandatory before submission",
            "Clear, prominent 'Submit Application' button"
          ]} />
        </ModuleContent>
      </DocModule>

      {/* Success Page */}
      <DocModule>
        <ModuleHeader title="Page 7: Submission Acknowledgment" />
        <ModuleContent>
          <div className="border-2 border-border rounded-lg overflow-hidden bg-card">
            <div className="bg-green-600 text-white p-12 text-center">
              <div className="w-20 h-20 bg-card rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={48} className="text-green-600" />
              </div>
              <h1 className="text-3xl font-bold mb-4">Application Submitted Successfully!</h1>
              <p className="text-lg text-green-100">Your application has been received and is being processed.</p>
            </div>
            <div className="p-8 space-y-6">
              <div className="bg-background border-2 border-border rounded-lg p-6 text-center">
                <div className="text-sm text-muted-foreground mb-2">Application Reference Number</div>
                <div className="text-3xl font-bold text-foreground font-mono mb-4">APP/2026/123456</div>
                <div className="text-sm text-muted-foreground">Please save this reference number for future tracking</div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <NextStepCard
                  icon={<Mail size={24} className="text-blue-600" />}
                  title="Confirmation Sent"
                  description="A confirmation email and SMS have been sent to your registered contact details."
                />
                <NextStepCard
                  icon={<Clock size={24} className="text-orange-600" />}
                  title="Processing Time"
                  description="Your application will be processed within 7-10 working days."
                />
                <NextStepCard
                  icon={<Smartphone size={24} className="text-purple-600" />}
                  title="Track Status"
                  description="You can track your application status anytime using the reference number."
                />
                <NextStepCard
                  icon={<Download size={24} className="text-green-600" />}
                  title="Download Receipt"
                  description="Keep a copy of your application receipt for your records."
                />
              </div>
              <div className="flex items-center justify-center gap-4 pt-6">
                <button className="px-8 py-3 bg-primary text-white font-bold rounded-lg hover:opacity-90">
                  Track Application Status
                </button>
                <button className="px-8 py-3 bg-card border-2 border-border text-muted-foreground font-bold rounded-lg hover:bg-background">
                  Download Receipt
                </button>
              </div>
            </div>
          </div>
          <PageAnnotation items={[
            "Clear success state with visual confirmation",
            "Application reference number prominently displayed",
            "Multiple ways to access reference (email, SMS, download)",
            "Clear next steps and expected timeline",
            "Direct link to status tracking page"
          ]} />
        </ModuleContent>
      </DocModule>

      {/* Status Tracking Entry */}
      <DocModule>
        <ModuleHeader title="Page 8: Status Tracking Entry" />
        <ModuleContent>
          <div className="border-2 border-border rounded-lg overflow-hidden bg-card">
            <div className="bg-background border-b-2 border-border p-6">
              <h2 className="text-xl font-bold text-foreground mb-2">Track Application Status</h2>
              <p className="text-sm text-muted-foreground">Enter your application reference number or registered mobile number to check status.</p>
            </div>
            <div className="p-8 space-y-6 max-w-2xl mx-auto">
              <div>
                <label className="block text-sm font-bold text-foreground mb-2">
                  Application Reference Number
                </label>
                <input
                  type="text"
                  placeholder="APP/2026/123456"
                  className="w-full px-4 py-3 border-2 border-border rounded-lg text-lg font-mono"
                />
                <div className="text-xs text-muted-foreground mt-2">Format: APP/YYYY/XXXXXX</div>
              </div>
              <div className="text-center text-gray-500 font-medium">OR</div>
              <div>
                <label className="block text-sm font-bold text-foreground mb-2">
                  Registered Mobile Number
                </label>
                <input
                  type="tel"
                  placeholder="+91 98765-43210"
                  className="w-full px-4 py-3 border-2 border-border rounded-lg"
                />
              </div>
              <div className="bg-background border-2 border-border rounded-lg p-4">
                <div className="text-sm text-muted-foreground">Enter the characters shown below</div>
                <div className="flex items-center gap-4 mt-3">
                  <div className="bg-gray-200 px-6 py-3 rounded font-mono text-xl font-bold text-foreground">
                    A3K9P
                  </div>
                  <input
                    type="text"
                    placeholder="Enter CAPTCHA"
                    className="flex-1 px-4 py-3 border-2 border-border rounded-lg"
                  />
                </div>
              </div>
              <button className="w-full px-8 py-4 bg-primary text-white font-bold rounded-lg hover:opacity-90">
                Check Status
              </button>
            </div>
          </div>
          <PageAnnotation items={[
            "Multiple lookup options (reference number or mobile)",
            "Clear format guidance for reference number",
            "CAPTCHA to prevent automated scraping",
            "Simple, focused interface for quick lookup"
          ]} />
        </ModuleContent>
      </DocModule>
    </section>
  );
}

// ==================== COMPONENTS USED ====================

function ComponentsUsed() {
  return (
    <section id="components" className="space-y-6">
      <SectionHeader title="UX4G Components Used" />

      <DocModule>
        <ModuleHeader title="Required Components" />
        <ModuleContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <ComponentCard name="Button" variants="Primary, Secondary, Tertiary, Link" usage="Navigation, CTAs, actions" />
            <ComponentCard name="Form Input" variants="Text, Email, Tel, Number, Password" usage="Data collection" />
            <ComponentCard name="Select Dropdown" variants="Single-select, Searchable" usage="State, district, category selection" />
            <ComponentCard name="Date Picker" variants="Single date, Date range" usage="DOB, appointment dates" />
            <ComponentCard name="File Upload" variants="Single file, Multiple files, Drag-drop" usage="Document submission" />
            <ComponentCard name="Checkbox" variants="Single, Group, Toggle" usage="Declaration, consent, multi-select" />
            <ComponentCard name="Radio Button" variants="Vertical, Horizontal" usage="Single-choice questions" />
            <ComponentCard name="Progress Stepper" variants="Linear, Non-linear" usage="Multi-step navigation" />
            <ComponentCard name="Alert Banner" variants="Info, Warning, Error, Success" usage="Important notices, validation errors" />
            <ComponentCard name="Card" variants="Elevated, Flat, Outlined" usage="Content grouping, review sections" />
            <ComponentCard name="Badge" variants="Default, Dot, Pill" usage="Required/optional indicators, status" />
            <ComponentCard name="Modal" variants="Centered, Side panel, Full-screen" usage="Confirmations, dialogs" />
          </div>
        </ModuleContent>
      </DocModule>

      <DocModule>
        <ModuleHeader title="Component Usage Map" />
        <ModuleContent>
          <div className="space-y-4">
            <UsageMapRow page="Start Page" components={["Button (Primary, Secondary)", "Card", "Icon"]} />
            <UsageMapRow page="Form Steps" components={["Form Input (Text, Email, Tel, Number)", "Select Dropdown", "Date Picker", "Radio Button", "Checkbox", "Progress Stepper", "Alert Banner", "Button"]} />
            <UsageMapRow page="Document Upload" components={["File Upload", "Button", "Badge (Required/Optional)", "Alert Banner"]} />
            <UsageMapRow page="Review Page" components={["Card", "Button (Edit, Submit)", "Checkbox (Declaration)"]} />
            <UsageMapRow page="Success Page" components={["Alert Banner (Success)", "Card", "Button", "Icon"]} />
            <UsageMapRow page="Status Tracking" components={["Form Input", "Button", "CAPTCHA Component"]} />
          </div>
        </ModuleContent>
      </DocModule>
    </section>
  );
}

// ==================== VALIDATION RULES ====================

function ValidationRules() {
  return (
    <section id="validation" className="space-y-6">
      <SectionHeader title="Form Behavior and Validation Rules" />

      <DocModule>
        <ModuleHeader title="Field-Level Validation" />
        <ModuleContent>
          <div className="space-y-4">
            <ValidationRule
              field="Name"
              rules={["Minimum 3 characters", "Alphabets and spaces only", "No special characters or numbers"]}
              trigger="On blur"
              errorMessage="Please enter a valid name (minimum 3 characters, alphabets only)"
            />
            <ValidationRule
              field="Email"
              rules={["Valid email format (name@domain.com)", "Maximum 100 characters"]}
              trigger="On blur"
              errorMessage="Please enter a valid email address"
            />
            <ValidationRule
              field="Mobile Number"
              rules={["Exactly 10 digits", "Starts with 6, 7, 8, or 9", "Numbers only"]}
              trigger="On blur"
              errorMessage="Please enter a valid 10-digit mobile number"
            />
            <ValidationRule
              field="Aadhaar Number"
              rules={["Exactly 12 digits", "Numbers only", "Must be valid Aadhaar format"]}
              trigger="On blur"
              errorMessage="Please enter a valid 12-digit Aadhaar number"
            />
            <ValidationRule
              field="PIN Code"
              rules={["Exactly 6 digits", "Numbers only", "Must be valid Indian PIN"]}
              trigger="On blur"
              errorMessage="Please enter a valid 6-digit PIN code"
            />
            <ValidationRule
              field="File Upload"
              rules={["Accepted formats: PDF, JPG, PNG", "Maximum file size: 2MB", "Minimum resolution: 300 DPI for images"]}
              trigger="On file select"
              errorMessage="Please upload a valid file (PDF/JPG/PNG, max 2MB)"
            />
          </div>
        </ModuleContent>
      </DocModule>

      <DocModule>
        <ModuleHeader title="Error Handling Guidance" />
        <ModuleContent>
          <div className="space-y-6">
            <ErrorHandlingBlock
              type="Inline Field Error"
              description="Show error message immediately below the field"
              example="Red border on field, error icon, error text in red"
              implementation="Use aria-describedby to associate error message with field for screen readers"
            />
            <ErrorHandlingBlock
              type="Form-Level Error"
              description="Show error summary at top of form when user tries to submit"
              example="Alert banner listing all errors with anchor links to fields"
              implementation="Use aria-live region to announce errors to screen readers"
            />
            <ErrorHandlingBlock
              type="File Upload Error"
              description="Show error inline with upload component"
              example="File rejected: Size exceeds 2MB limit. Please upload a smaller file."
              implementation="Allow user to replace file immediately without clearing other data"
            />
            <ErrorHandlingBlock
              type="Server Error"
              description="Show user-friendly message, log technical error"
              example="We're experiencing technical difficulties. Please try again later."
              implementation="Provide error reference number for support team"
            />
          </div>
        </ModuleContent>
      </DocModule>

      <DocModule>
        <ModuleHeader title="Auto-Save Behavior" />
        <ModuleContent>
          <div className="space-y-4 text-sm text-muted-foreground">
            <div className="flex items-start gap-3">
              <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <div className="font-bold text-foreground mb-1">Auto-save trigger</div>
                <div>Save form data every 30 seconds or on field blur (whichever comes first)</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <div className="font-bold text-foreground mb-1">Visual feedback</div>
                <div>Show "Saving..." indicator, then "Saved" with timestamp</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <div className="font-bold text-foreground mb-1">Save & Continue Later</div>
                <div>Manual save option always visible. Send email/SMS with resume link.</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <div className="font-bold text-foreground mb-1">Session expiry</div>
                <div>Warn user 5 minutes before session expires. Allow extension or save & exit.</div>
              </div>
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
      <SectionHeader title="Content Guidance" />

      <DocModule>
        <ModuleHeader title="Writing Principles" />
        <ModuleContent>
          <div className="grid grid-cols-2 gap-6">
            <PrincipleBlock
              title="Use Plain Language"
              good="Upload a recent photograph"
              bad="Submit a recent photographic representation"
            />
            <PrincipleBlock
              title="Be Action-Oriented"
              good="Enter your full name as per Aadhaar"
              bad="Full name field"
            />
            <PrincipleBlock
              title="Explain Why"
              good="We need your mobile number to send OTP for verification"
              bad="Enter mobile number"
            />
            <PrincipleBlock
              title="Provide Examples"
              good="Date of Birth (e.g., 15/03/1985)"
              bad="Date of Birth"
            />
            <PrincipleBlock
              title="Use Positive Language"
              good="Please upload a clear scan of your Aadhaar card"
              bad="Do not upload blurry images"
            />
            <PrincipleBlock
              title="Be Specific"
              good="Application will be processed in 7-10 working days"
              bad="Your application will be processed soon"
            />
          </div>
        </ModuleContent>
      </DocModule>

      <DocModule>
        <ModuleHeader title="Tone and Voice" />
        <ModuleContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ToneCard
              tone="Helpful"
              description="Guide users through the process with supportive language"
              example='"Need help? Contact our support team at 1800-XXX-XXXX"'
            />
            <ToneCard
              tone="Respectful"
              description="Address users professionally and courteously"
              example='"Thank you for applying. We will review your application carefully."'
            />
            <ToneCard
              tone="Transparent"
              description="Be honest about requirements, timelines, and outcomes"
              example='"Processing typically takes 7-10 working days. You will be notified via SMS."'
            />
          </div>
        </ModuleContent>
      </DocModule>

      <DocModule>
        <ModuleHeader title="Label and Help Text Guidelines" />
        <ModuleContent>
          <div className="space-y-4">
            <LabelGuideline
              element="Form Labels"
              guideline="Short, descriptive, sentence case"
              example="Full name (as per Aadhaar)"
            />
            <LabelGuideline
              element="Help Text"
              guideline="Explain format, purpose, or provide example"
              example="We'll send an OTP to this number for verification"
            />
            <LabelGuideline
              element="Button Text"
              guideline="Action verbs, specific to context"
              example="Submit Application (not just Submit)"
            />
            <LabelGuideline
              element="Error Messages"
              guideline="State what's wrong and how to fix it"
              example="Please enter a valid 10-digit mobile number starting with 6, 7, 8, or 9"
            />
            <LabelGuideline
              element="Success Messages"
              guideline="Confirm action and provide next steps"
              example="Application submitted successfully! Reference number: APP/2026/123456"
            />
          </div>
        </ModuleContent>
      </DocModule>
    </section>
  );
}

// ==================== ACCESSIBILITY GUIDANCE ====================

function AccessibilityGuidance() {
  return (
    <section id="accessibility" className="space-y-6">
      <SectionHeader title="Accessibility Guidance" />

      <DocModule>
        <ModuleHeader title="WCAG 2.1 AA Requirements" />
        <ModuleContent>
          <div className="grid grid-cols-2 gap-6">
            <AccessibilityBlock
              principle="Perceivable"
              requirements={[
                "Color contrast minimum 4.5:1 for normal text",
                "Color contrast minimum 3:1 for large text and UI components",
                "Text alternatives (alt text) for all images and icons",
                "Form labels programmatically associated with inputs"
              ]}
            />
            <AccessibilityBlock
              principle="Operable"
              requirements={[
                "All functionality available via keyboard",
                "Visible focus indicators (3px outline minimum)",
                "No keyboard traps",
                "Skip to main content link at top of page"
              ]}
            />
            <AccessibilityBlock
              principle="Understandable"
              requirements={[
                "Clear, consistent navigation",
                "Error messages clearly identify issues",
                "Help text available for complex fields",
                "Language attribute set correctly (lang=\"en\" or lang=\"hi\")"
              ]}
            />
            <AccessibilityBlock
              principle="Robust"
              requirements={[
                "Valid HTML5 markup",
                "ARIA labels for all interactive elements",
                "ARIA live regions for dynamic content",
                "Compatible with assistive technologies (NVDA, JAWS, TalkBack)"
              ]}
            />
          </div>
        </ModuleContent>
      </DocModule>

      <DocModule>
        <ModuleHeader title="Screen Reader Support" />
        <ModuleContent>
          <div className="space-y-4">
            <ScreenReaderGuideline
              element="Form Fields"
              implementation="Use <label> elements properly associated with inputs via 'for' attribute or wrapping"
              ariaAttributes="aria-required, aria-describedby (for help text), aria-invalid (for errors)"
            />
            <ScreenReaderGuideline
              element="Error Messages"
              implementation="Place error message in aria-describedby of field. Use aria-live='polite' for summary"
              ariaAttributes="aria-live, aria-atomic, role='alert'"
            />
            <ScreenReaderGuideline
              element="Progress Stepper"
              implementation="Use <nav> with aria-label='Application progress'. Mark current step with aria-current"
              ariaAttributes="aria-label, aria-current='step'"
            />
            <ScreenReaderGuideline
              element="File Upload"
              implementation="Announce upload status changes. Provide clear instructions for keyboard users"
              ariaAttributes="aria-label, aria-describedby, aria-live for status updates"
            />
            <ScreenReaderGuideline
              element="Dynamic Content"
              implementation="Use aria-live regions to announce auto-save, form validation, loading states"
              ariaAttributes="aria-live='polite' (or 'assertive' for errors), aria-atomic='true'"
            />
          </div>
        </ModuleContent>
      </DocModule>

      <DocModule>
        <ModuleHeader title="Keyboard Navigation" />
        <ModuleContent>
          <div className="space-y-3 text-sm">
            <KeyboardAction action="Tab" behavior="Move forward through interactive elements (inputs, buttons, links)" />
            <KeyboardAction action="Shift + Tab" behavior="Move backward through interactive elements" />
            <KeyboardAction action="Enter" behavior="Submit form, activate button, select dropdown option" />
            <KeyboardAction action="Space" behavior="Toggle checkbox, activate button, open dropdown" />
            <KeyboardAction action="Arrow Keys" behavior="Navigate within dropdown, radio groups, date picker" />
            <KeyboardAction action="Escape" behavior="Close modal, cancel action, clear selection" />
          </div>
        </ModuleContent>
      </DocModule>

      <DocModule>
        <ModuleHeader title="Multilingual Support" />
        <ModuleContent>
          <div className="space-y-4">
            <div className="bg-purple-50 dark:bg-purple-950/30 border-2 border-purple-200 dark:border-purple-800 rounded-lg p-6">
              <div className="flex items-start gap-3 mb-4">
                <Globe size={24} className="text-purple-600 flex-shrink-0" />
                <div>
                  <div className="font-bold text-foreground mb-2">Language Requirements</div>
                  <div className="text-sm text-muted-foreground">
                    UI must be available in Hindi and English at minimum. State-specific services should support 
                    regional languages (Tamil, Telugu, Bengali, Marathi, etc.) based on deployment.
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <MultilingualGuideline
                  aspect="Language Selector"
                  guidance="Top-right corner, persistent across all pages, with country/language flag icons"
                />
                <MultilingualGuideline
                  aspect="Content Translation"
                  guidance="All UI text, labels, help text, error messages must be translated"
                />
                <MultilingualGuideline
                  aspect="Input Language"
                  guidance="Allow users to input data in their preferred language (transliteration support)"
                />
                <MultilingualGuideline
                  aspect="RTL Support"
                  guidance="Full RTL (right-to-left) support for Urdu and other RTL languages"
                />
              </div>
            </div>
          </div>
        </ModuleContent>
      </DocModule>
    </section>
  );
}

// ==================== IMPLEMENTATION NOTES ====================

function ImplementationNotes() {
  return (
    <section id="implementation" className="space-y-6">
      <SectionHeader title="Implementation Notes" />

      <DocModule>
        <ModuleHeader title="Frontend Requirements" />
        <ModuleContent>
          <div className="space-y-4">
            <ImplementationItem
              category="Framework"
              requirement="React 18+ or Angular 16+ with TypeScript"
              priority="required"
              notes="Use React Hook Form or Angular Reactive Forms for state management"
            />
            <ImplementationItem
              category="State Management"
              requirement="Form state persisted across steps, auto-save to local storage and backend"
              priority="required"
              notes="Implement debounced auto-save (30 seconds or on blur)"
            />
            <ImplementationItem
              category="Validation"
              requirement="Client-side validation using Yup or Zod schema validation"
              priority="required"
              notes="Always validate on backend as well (never trust client-side only)"
            />
            <ImplementationItem
              category="File Upload"
              requirement="Progressive upload with chunking for large files, resume capability"
              priority="recommended"
              notes="Use libraries like Uppy or react-dropzone for better UX"
            />
            <ImplementationItem
              category="Accessibility"
              requirement="Use semantic HTML5, ARIA attributes, keyboard navigation"
              priority="critical"
              notes="Test with NVDA, JAWS, and mobile screen readers (TalkBack, VoiceOver)"
            />
          </div>
        </ModuleContent>
      </DocModule>

      <DocModule>
        <ModuleHeader title="Backend Requirements" />
        <ModuleContent>
          <div className="space-y-4">
            <ImplementationItem
              category="API Endpoints"
              requirement="/api/application/draft (POST, PUT), /api/application/submit (POST)"
              priority="required"
              notes="RESTful or GraphQL, with proper authentication and authorization"
            />
            <ImplementationItem
              category="Reference Number Generation"
              requirement="Format: [DEPT]/[YEAR]/[SEQUENCE] e.g., MHA/2026/123456"
              priority="required"
              notes="Use database sequence or UUID with department prefix"
            />
            <ImplementationItem
              category="File Storage"
              requirement="Secure cloud storage (AWS S3, Azure Blob) with encryption at rest"
              priority="critical"
              notes="Generate pre-signed URLs for uploads, implement virus scanning"
            />
            <ImplementationItem
              category="Data Encryption"
              requirement="Sensitive data (Aadhaar, PAN) encrypted in transit (TLS 1.3) and at rest (AES-256)"
              priority="critical"
              notes="Use separate encryption keys for different data types, key rotation policy"
            />
            <ImplementationItem
              category="Audit Logging"
              requirement="Log all user actions (save, submit, edit) with timestamp and user ID"
              priority="required"
              notes="Maintain immutable audit trail for compliance and debugging"
            />
          </div>
        </ModuleContent>
      </DocModule>

      <DocModule>
        <ModuleHeader title="Analytics Events" />
        <ModuleContent>
          <div className="space-y-3">
            <AnalyticsEvent event="application_started" description="User clicks 'Start New Application'" category="Engagement" />
            <AnalyticsEvent event="step_completed" description="User completes each form step (track step number)" category="Funnel" />
            <AnalyticsEvent event="form_field_error" description="Validation error occurs (track field name and error type)" category="Quality" />
            <AnalyticsEvent event="document_uploaded" description="User uploads document (track document type)" category="Engagement" />
            <AnalyticsEvent event="save_and_exit" description="User saves draft and exits (track completion %)" category="Abandonment" />
            <AnalyticsEvent event="application_submitted" description="Final submission successful" category="Conversion" />
            <AnalyticsEvent event="submission_failed" description="Submission fails (track error reason)" category="Errors" />
            <AnalyticsEvent event="receipt_downloaded" description="User downloads acknowledgment receipt" category="Engagement" />
            <AnalyticsEvent event="time_to_complete" description="Total time from start to submission" category="Performance" />
          </div>
        </ModuleContent>
      </DocModule>

      <DocModule>
        <ModuleHeader title="Performance Optimization" />
        <ModuleContent>
          <div className="space-y-4 text-sm">
            <PerformanceGuideline
              metric="Page Load Time"
              target="< 2 seconds (3G network)"
              strategies={["Code splitting by route", "Lazy load components", "Image optimization (WebP, compression)", "CDN for static assets"]}
            />
            <PerformanceGuideline
              metric="Time to Interactive"
              target="< 3 seconds"
              strategies={["Minimize JavaScript bundle size", "Defer non-critical scripts", "Server-side rendering for initial load"]}
            />
            <PerformanceGuideline
              metric="File Upload Speed"
              target="Progress visible within 500ms"
              strategies={["Chunked uploads", "Client-side compression", "Resume capability for large files"]}
            />
          </div>
        </ModuleContent>
      </DocModule>
    </section>
  );
}

// ==================== GOVERNANCE & CONFORMANCE ====================

function GovernanceConformance() {
  return (
    <section id="governance" className="space-y-6">
      <SectionHeader title="Governance and Conformance" />

      <DocModule>
        <ModuleHeader title="UX4G Conformance Checklist" />
        <ModuleContent>
          <div className="space-y-3">
            <ConformanceChecklistItem checked label="Uses UX4G Form Input, Select, Date Picker, and File Upload components" />
            <ConformanceChecklistItem checked label="Implements auto-save functionality (every 30 seconds or on blur)" />
            <ConformanceChecklistItem checked label="Shows progress indicator on multi-step forms" />
            <ConformanceChecklistItem checked label="Provides 'Save & Continue Later' option on every step" />
            <ConformanceChecklistItem checked label="Displays application reference number prominently on success page" />
            <ConformanceChecklistItem checked label="Sends SMS and email confirmation within 5 minutes of submission" />
            <ConformanceChecklistItem checked label="Provides downloadable acknowledgment receipt (PDF)" />
            <ConformanceChecklistItem checked label="Implements field-level validation with clear error messages" />
            <ConformanceChecklistItem checked label="Meets WCAG 2.1 AA accessibility requirements" />
            <ConformanceChecklistItem checked label="Supports Hindi and English UI (minimum requirement)" />
            <ConformanceChecklistItem checked label="Encrypts sensitive data (Aadhaar, PAN) in transit and at rest" />
            <ConformanceChecklistItem checked label="Implements audit logging for all user actions" />
          </div>
        </ModuleContent>
      </DocModule>

      <DocModule>
        <ModuleHeader title="Common Mistakes and Risks" />
        <ModuleContent>
          <div className="space-y-4">
            <MistakeBlock
              mistake="Asking for information already available in government databases"
              impact="High"
              solution="Integrate with UIDAI, DigiLocker, or departmental APIs to pre-fill data"
            />
            <MistakeBlock
              mistake="Not implementing auto-save, causing data loss on session expiry"
              impact="Critical"
              solution="Auto-save every 30 seconds, warn before session expiry, allow extension"
            />
            <MistakeBlock
              mistake="Hiding required documents list until user reaches upload step"
              impact="High"
              solution="Show complete document checklist on start page before user begins"
            />
            <MistakeBlock
              mistake="Using technical error messages visible to users"
              impact="Medium"
              solution="Show user-friendly errors, log technical details for debugging"
            />
            <MistakeBlock
              mistake="Not sending confirmation SMS/email after submission"
              impact="High"
              solution="Send acknowledgment within 5 minutes with reference number and next steps"
            />
            <MistakeBlock
              mistake="Making optional fields look mandatory (or vice versa)"
              impact="Medium"
              solution="Clearly mark required fields with asterisk (*) and 'Required' label"
            />
            <MistakeBlock
              mistake="Not providing a way to correct data before final submission"
              impact="High"
              solution="Review page must show all data with edit option for each section"
            />
            <MistakeBlock
              mistake="Allowing submission without declaration/consent checkbox"
              impact="Critical"
              solution="Disable submit button until declaration is checked"
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
              version="1.2.0"
              description="Pattern is production-ready and approved for use across all government departments"
              usedBy="47 departments, 312 live services"
            />
            <MaturityBlock
              status="Active Maintenance"
              version="—"
              description="Regular updates for security patches, accessibility improvements, and UX refinements"
              usedBy="Updates released quarterly"
            />
            <MaturityBlock
              status="Conformance Level"
              version="Mandatory"
              description="All citizen-facing application services must use this pattern or justify deviation"
              usedBy="Exceptions require governance board approval"
            />
          </div>
        </ModuleContent>
      </DocModule>
    </section>
  );
}


// ==================== CODE DOWNLOADS ====================

const APPSUB_REACT_CODE = `import React, { useState, useCallback } from 'react';

type Step = 'personal' | 'documents' | 'review' | 'submitted';

interface FormData {
  fullName: string; fatherName: string; dob: string; gender: string;
  aadhaar: string; mobile: string; email: string;
  address: string; pincode: string; state: string; district: string;
  purpose: string; remarks: string;
}

const EMPTY: FormData = { fullName:'', fatherName:'', dob:'', gender:'', aadhaar:'', mobile:'', email:'', address:'', pincode:'', state:'', district:'', purpose:'', remarks:'' };

export function ApplicationSubmissionPage() {
  const [step, setStep] = useState<Step>('personal');
  const [form, setForm] = useState<FormData>(EMPTY);
  const [files, setFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [appId, setAppId] = useState('');

  const update = (field: keyof FormData, value: string) => setForm(prev => ({...prev, [field]: value}));

  const validatePersonal = useCallback(() => {
    if (!form.fullName.trim()) return 'Full name is required';
    if (!form.dob) return 'Date of birth is required';
    if (!form.mobile || !/^[6-9]\\d{9}$/.test(form.mobile)) return 'Valid 10-digit mobile required';
    if (!form.address.trim()) return 'Address is required';
    if (!form.pincode || !/^\\d{6}$/.test(form.pincode)) return 'Valid 6-digit PIN required';
    return '';
  }, [form]);

  const handleNext = () => {
    const err = validatePersonal();
    if (err) { setError(err); return; }
    setError(''); setStep('documents');
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files).filter(f => f.size <= 5 * 1024 * 1024);
      setFiles(prev => [...prev, ...newFiles]);
    }
  };

  const handleSubmit = async () => {
    setLoading(true); setError('');
    try {
      const fd = new FormData();
      Object.entries(form).forEach(([k,v]) => fd.append(k, v));
      files.forEach(f => fd.append('documents', f));
      const res = await fetch('/api/applications/submit', { method: 'POST', body: fd });
      if (!res.ok) { const d = await res.json(); setError(d.message || 'Submission failed'); return; }
      const data = await res.json();
      setAppId(data.applicationId || 'APP-' + Date.now().toString(36).toUpperCase());
      setStep('submitted');
    } catch { setError('Network error. Please try again.'); }
    finally { setLoading(false); }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-2xl bg-card border border-border rounded-2xl p-8 shadow-sm">
        <h1 className="text-2xl font-bold text-foreground mb-2">Application Submission</h1>
        <p className="text-sm text-muted-foreground mb-6">Government service application form</p>
        <div className="flex gap-1 mb-6">{['personal','documents','review','submitted'].map((s,i) => (<div key={s} className={\`flex-1 h-1.5 rounded \${['personal','documents','review','submitted'].indexOf(step) >= i ? 'bg-primary' : 'bg-muted'}\`} />))}</div>
        {error && <div role="alert" className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">{error}</div>}
        {step === 'personal' && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div><label className="block text-sm font-medium mb-1">Full Name *</label><input value={form.fullName} onChange={e => update('fullName', e.target.value)} placeholder="As per Aadhaar" className="w-full px-4 py-3 border border-border rounded-lg" /></div>
              <div><label className="block text-sm font-medium mb-1">Father's Name</label><input value={form.fatherName} onChange={e => update('fatherName', e.target.value)} className="w-full px-4 py-3 border border-border rounded-lg" /></div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div><label className="block text-sm font-medium mb-1">Date of Birth *</label><input type="date" value={form.dob} onChange={e => update('dob', e.target.value)} className="w-full px-4 py-3 border border-border rounded-lg" /></div>
              <div><label className="block text-sm font-medium mb-1">Gender</label><select value={form.gender} onChange={e => update('gender', e.target.value)} className="w-full px-4 py-3 border border-border rounded-lg"><option value="">Select</option><option>Male</option><option>Female</option><option>Other</option></select></div>
              <div><label className="block text-sm font-medium mb-1">Mobile *</label><input type="tel" value={form.mobile} onChange={e => update('mobile', e.target.value)} placeholder="98765 43210" maxLength={10} className="w-full px-4 py-3 border border-border rounded-lg" /></div>
            </div>
            <div><label className="block text-sm font-medium mb-1">Address *</label><textarea value={form.address} onChange={e => update('address', e.target.value)} rows={2} className="w-full px-4 py-3 border border-border rounded-lg" /></div>
            <div className="grid grid-cols-3 gap-4">
              <div><label className="block text-sm font-medium mb-1">PIN Code *</label><input value={form.pincode} onChange={e => update('pincode', e.target.value)} maxLength={6} className="w-full px-4 py-3 border border-border rounded-lg" /></div>
              <div><label className="block text-sm font-medium mb-1">State</label><input value={form.state} onChange={e => update('state', e.target.value)} className="w-full px-4 py-3 border border-border rounded-lg" /></div>
              <div><label className="block text-sm font-medium mb-1">District</label><input value={form.district} onChange={e => update('district', e.target.value)} className="w-full px-4 py-3 border border-border rounded-lg" /></div>
            </div>
            <button onClick={handleNext} className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold">Continue to Documents</button>
          </div>
        )}
        {step === 'documents' && (
          <div className="space-y-4">
            <div className="border-2 border-dashed border-border rounded-xl p-8 text-center">
              <input type="file" multiple accept=".pdf,.jpg,.jpeg,.png" onChange={handleFileChange} className="hidden" id="fileInput" />
              <label htmlFor="fileInput" className="cursor-pointer"><div className="text-muted-foreground mb-2">Drop files or click to upload</div><div className="text-xs text-muted-foreground">PDF, JPG, PNG — Max 5MB each</div></label>
            </div>
            {files.length > 0 && <div className="space-y-2">{files.map((f,i) => <div key={i} className="flex items-center justify-between p-3 bg-muted rounded-lg text-sm"><span>{f.name}</span><button onClick={() => setFiles(prev => prev.filter((_,j) => j !== i))} className="text-red-500 text-xs">Remove</button></div>)}</div>}
            <div><label className="block text-sm font-medium mb-1">Purpose</label><input value={form.purpose} onChange={e => update('purpose', e.target.value)} placeholder="Purpose of application" className="w-full px-4 py-3 border border-border rounded-lg" /></div>
            <div className="flex gap-3">
              <button onClick={() => setStep('personal')} className="flex-1 py-3 border border-border rounded-lg font-semibold">Back</button>
              <button onClick={() => { setError(''); setStep('review'); }} className="flex-1 py-3 bg-primary text-primary-foreground rounded-lg font-semibold">Review</button>
            </div>
          </div>
        )}
        {step === 'review' && (
          <div className="space-y-4">
            <div className="bg-muted rounded-xl p-6 space-y-3 text-sm">
              <div className="grid grid-cols-2 gap-2">{Object.entries(form).filter(([,v]) => v).map(([k,v]) => <div key={k}><span className="text-muted-foreground capitalize">{k.replace(/([A-Z])/g,' $1')}: </span><span className="font-semibold">{v}</span></div>)}</div>
              {files.length > 0 && <div><span className="text-muted-foreground">Documents: </span><span className="font-semibold">{files.length} file(s)</span></div>}
            </div>
            <div className="flex gap-3">
              <button onClick={() => setStep('documents')} className="flex-1 py-3 border border-border rounded-lg font-semibold">Back</button>
              <button onClick={handleSubmit} disabled={loading} className="flex-1 py-3 bg-primary text-primary-foreground rounded-lg font-semibold disabled:opacity-60">{loading ? 'Submitting...' : 'Submit Application'}</button>
            </div>
          </div>
        )}
        {step === 'submitted' && (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto"><svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></div>
            <h2 className="text-xl font-bold text-foreground">Application Submitted</h2>
            <p className="text-muted-foreground">Your application ID: <span className="font-bold text-foreground">{appId}</span></p>
            <p className="text-sm text-muted-foreground">You will receive updates via SMS and email.</p>
          </div>
        )}
      </div>
    </div>
  );
}`;

const APPSUB_ANGULAR_CODE = `import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'ux4g-application-submission',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: \`
    <div class="min-h-screen flex items-center justify-center bg-background p-4">
      <div class="w-full max-w-2xl bg-card border border-border rounded-2xl p-8 shadow-sm">
        <h1 class="text-2xl font-bold mb-6">Application Submission</h1>
        <div *ngIf="error" role="alert" class="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">{{ error }}</div>
        <form *ngIf="step !== 'submitted'" [formGroup]="form" (ngSubmit)="submit()">
          <div *ngIf="step === 'personal'" class="space-y-4">
            <div class="grid grid-cols-2 gap-4">
              <div><label class="block text-sm font-medium mb-1">Full Name *</label><input formControlName="fullName" class="w-full px-4 py-3 border border-border rounded-lg" /></div>
              <div><label class="block text-sm font-medium mb-1">Mobile *</label><input formControlName="mobile" maxlength="10" class="w-full px-4 py-3 border border-border rounded-lg" /></div>
            </div>
            <div><label class="block text-sm font-medium mb-1">Address *</label><textarea formControlName="address" rows="2" class="w-full px-4 py-3 border border-border rounded-lg"></textarea></div>
            <div class="grid grid-cols-2 gap-4">
              <div><label class="block text-sm font-medium mb-1">PIN Code *</label><input formControlName="pincode" maxlength="6" class="w-full px-4 py-3 border border-border rounded-lg" /></div>
              <div><label class="block text-sm font-medium mb-1">Date of Birth *</label><input type="date" formControlName="dob" class="w-full px-4 py-3 border border-border rounded-lg" /></div>
            </div>
            <button type="button" (click)="nextStep()" class="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold">Continue</button>
          </div>
          <div *ngIf="step === 'documents'" class="space-y-4">
            <div class="border-2 border-dashed border-border rounded-xl p-8 text-center">
              <input type="file" multiple (change)="onFileChange($event)" class="hidden" id="fileInput" />
              <label for="fileInput" class="cursor-pointer text-muted-foreground">Drop files or click to upload</label>
            </div>
            <div class="flex gap-3">
              <button type="button" (click)="step='personal'" class="flex-1 py-3 border border-border rounded-lg font-semibold">Back</button>
              <button type="button" (click)="step='review'" class="flex-1 py-3 bg-primary text-primary-foreground rounded-lg font-semibold">Review</button>
            </div>
          </div>
          <div *ngIf="step === 'review'" class="space-y-4">
            <div class="bg-muted rounded-xl p-6 text-sm">Review your details before submitting.</div>
            <div class="flex gap-3">
              <button type="button" (click)="step='documents'" class="flex-1 py-3 border border-border rounded-lg font-semibold">Back</button>
              <button type="submit" [disabled]="loading" class="flex-1 py-3 bg-primary text-primary-foreground rounded-lg font-semibold disabled:opacity-60">{{ loading ? 'Submitting...' : 'Submit' }}</button>
            </div>
          </div>
        </form>
        <div *ngIf="step === 'submitted'" class="text-center py-8">
          <h2 class="text-xl font-bold mb-2">Application Submitted</h2>
          <p class="text-muted-foreground">ID: {{ appId }}</p>
        </div>
      </div>
    </div>
  \`
})
export class ApplicationSubmissionComponent {
  form = new FormGroup({
    fullName: new FormControl('', Validators.required),
    mobile: new FormControl('', [Validators.required, Validators.pattern(/^[6-9]\\d{9}$/)]),
    address: new FormControl('', Validators.required),
    pincode: new FormControl('', [Validators.required, Validators.pattern(/^\\d{6}$/)]),
    dob: new FormControl('', Validators.required),
  });
  step: 'personal'|'documents'|'review'|'submitted' = 'personal';
  files: File[] = []; loading = false; error = ''; appId = '';

  nextStep() { if (this.form.invalid) { this.error = 'Fill required fields'; return; } this.error = ''; this.step = 'documents'; }
  onFileChange(e: Event) { const input = e.target as HTMLInputElement; if (input.files) this.files.push(...Array.from(input.files)); }
  async submit() {
    this.loading = true; this.error = '';
    try {
      const res = await fetch('/api/applications/submit', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(this.form.value) });
      if (!res.ok) { this.error = 'Failed'; return; }
      this.appId = 'APP-' + Date.now().toString(36).toUpperCase();
      this.step = 'submitted';
    } catch { this.error = 'Network error'; } finally { this.loading = false; }
  }
}`;

const APPSUB_HTML_CODE = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Application Submission — UX4G</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: system-ui, sans-serif; min-height: 100vh; display: flex; align-items: center; justify-content: center; background: #f9fafb; padding: 1rem; }
    .card { width: 100%; max-width: 40rem; background: #fff; border: 1px solid #e5e7eb; border-radius: 1rem; padding: 2rem; }
    h1 { font-size: 1.5rem; font-weight: 700; margin-bottom: 1.5rem; }
    label { display: block; font-size: 0.875rem; font-weight: 500; margin-bottom: 0.25rem; }
    input, textarea, select { width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 0.5rem; font-size: 1rem; outline: none; margin-bottom: 1rem; }
    input:focus, textarea:focus { border-color: #005196; }
    .row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
    .row3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem; }
    .btn { width: 100%; padding: 0.75rem; background: #005196; color: #fff; border: none; border-radius: 0.5rem; font-size: 1rem; font-weight: 600; cursor: pointer; }
    .btn:disabled { opacity: 0.6; }
    .btn-outline { background: #fff; color: #111; border: 1px solid #d1d5db; }
    .error { margin-bottom: 1rem; padding: 0.75rem; background: #fef2f2; border: 1px solid #fecaca; border-radius: 0.5rem; color: #b91c1c; font-size: 0.875rem; display: none; }
    .upload-area { border: 2px dashed #d1d5db; border-radius: 0.75rem; padding: 2rem; text-align: center; margin-bottom: 1rem; cursor: pointer; }
    .hidden { display: none; }
    .success { text-align: center; padding: 2rem 0; }
    .actions { display: flex; gap: 0.75rem; }
    .actions > * { flex: 1; }
  </style>
</head>
<body>
  <div class="card">
    <h1>Application Submission</h1>
    <div id="error" class="error" role="alert"></div>
    <div id="step1">
      <div class="row"><div><label>Full Name *</label><input id="fullName" required /></div><div><label>Mobile *</label><input id="mobile" maxlength="10" required /></div></div>
      <label>Address *</label><textarea id="address" rows="2" required></textarea>
      <div class="row3"><div><label>PIN Code *</label><input id="pincode" maxlength="6" required /></div><div><label>DOB *</label><input type="date" id="dob" required /></div><div><label>Gender</label><select id="gender"><option value="">Select</option><option>Male</option><option>Female</option><option>Other</option></select></div></div>
      <button class="btn" onclick="toStep2()">Continue to Documents</button>
    </div>
    <div id="step2" class="hidden">
      <div class="upload-area" onclick="document.getElementById('fileInput').click()">
        <input type="file" id="fileInput" multiple accept=".pdf,.jpg,.png" class="hidden" onchange="onFiles(this)" />
        <div>Click to upload documents (PDF, JPG, PNG)</div>
      </div>
      <div id="fileList"></div>
      <div class="actions"><button class="btn btn-outline" onclick="showStep('step1')">Back</button><button class="btn" onclick="showStep('step3')">Review</button></div>
    </div>
    <div id="step3" class="hidden">
      <div id="reviewData" style="background:#f3f4f6;border-radius:0.75rem;padding:1.5rem;margin-bottom:1rem;font-size:0.875rem"></div>
      <div class="actions"><button class="btn btn-outline" onclick="showStep('step2')">Back</button><button class="btn" id="submitBtn" onclick="submitApp()">Submit Application</button></div>
    </div>
    <div id="step4" class="hidden success">
      <h2 style="font-size:1.25rem;font-weight:700;margin-bottom:0.5rem">Application Submitted</h2>
      <p style="color:#6b7280" id="appIdText"></p>
    </div>
  </div>
  <script>
    function showError(m){const e=document.getElementById('error');e.textContent=m;e.style.display='block';}
    function hideError(){document.getElementById('error').style.display='none';}
    function showStep(id){['step1','step2','step3','step4'].forEach(s=>document.getElementById(s).classList.add('hidden'));document.getElementById(id).classList.remove('hidden');}
    function toStep2(){hideError();if(!document.getElementById('fullName').value||!document.getElementById('mobile').value||!document.getElementById('address').value){showError('Fill required fields');return;}showStep('step2');}
    function onFiles(input){const list=document.getElementById('fileList');list.innerHTML='';Array.from(input.files).forEach(f=>{list.innerHTML+='<div style="padding:0.5rem;background:#f3f4f6;border-radius:0.5rem;margin-bottom:0.5rem;font-size:0.875rem">'+f.name+'</div>';});}
    function submitApp(){
      hideError();
      const review=document.getElementById('reviewData');
      review.innerHTML='<strong>Name:</strong> '+document.getElementById('fullName').value+'<br><strong>Mobile:</strong> '+document.getElementById('mobile').value+'<br><strong>Address:</strong> '+document.getElementById('address').value;
      const btn=document.getElementById('submitBtn');
      btn.disabled=true;btn.textContent='Submitting...';
      setTimeout(()=>{
        const id='APP-'+Date.now().toString(36).toUpperCase();
        document.getElementById('appIdText').textContent='Application ID: '+id;
        showStep('step4');
        btn.disabled=false;btn.textContent='Submit Application';
      },1500);
    }
  </script>
</body>
</html>`;

function AppSubmissionCodeDownloads() {
  const [copiedId, setCopiedId] = React.useState<string | null>(null);
  const copyToClipboard = (code: string, id: string) => { navigator.clipboard.writeText(code); setCopiedId(id); setTimeout(() => setCopiedId(null), 2000); };
  const downloadCode = (code: string, filename: string) => { const blob = new Blob([code], { type: 'text/plain' }); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = filename; a.click(); URL.revokeObjectURL(url); };
  const lanes = [
    { key: 'react', title: 'React', desc: 'TypeScript + Multi-step + Upload', code: APPSUB_REACT_CODE, filename: 'ApplicationSubmissionPage.tsx' },
    { key: 'angular', title: 'Angular', desc: 'Standalone + Reactive Forms', code: APPSUB_ANGULAR_CODE, filename: 'application-submission.component.ts' },
    { key: 'html', title: 'HTML / CSS / JS', desc: 'No framework needed', code: APPSUB_HTML_CODE, filename: 'application-submission.html' },
  ];
  return (
    <section id="code-downloads" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Code Downloads</h2>
        <p className="text-muted-foreground mt-1">Production-ready Application Submission implementations.</p>
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


// ==================== SIDEBAR COMPONENTS ====================

function MetadataPanel() {
  return (
    <div className="border-2 border-border rounded-lg overflow-hidden bg-card">
      <div className="bg-muted border-b-2 border-border px-4 py-3">
        <h3 className="font-bold text-foreground text-sm">Pattern Metadata</h3>
      </div>
      <div className="p-4 space-y-3 text-sm">
        <MetadataRow label="Pattern ID" value="UX4G-PAT-001" />
        <MetadataRow label="Category" value="Service Initiation" />
        <MetadataRow label="Complexity" value="Medium" />
        <MetadataRow label="Implementation" value="3-4 weeks" />
        <MetadataRow label="Updated" value="March 2026" />
        <MetadataRow label="Status" value="Stable (v1.2.0)" />
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
        <QuickRefItem label="Avg. Completion Time" value="15-20 minutes" />
        <QuickRefItem label="Typical Steps" value="8-13 pages" />
        <QuickRefItem label="Components Used" value="12 core components" />
        <QuickRefItem label="Min. Mobile Width" value="320px" />
        <QuickRefItem label="WCAG Level" value="AA (4.5:1 contrast)" />
        <QuickRefItem label="Languages" value="Hindi + English min" />
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
        <RiskItem severity="high" risk="Data loss from session timeout" />
        <RiskItem severity="high" risk="User abandonment due to missing documents" />
        <RiskItem severity="medium" risk="Duplicate submissions if acknowledgment unclear" />
        <RiskItem severity="medium" risk="Privacy breach if data not encrypted" />
        <RiskItem severity="low" risk="Poor accessibility causing exclusion" />
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
        <RelatedLink title="Eligibility & Screening" />
        <RelatedLink title="Status Tracking" />
        <RelatedLink title="Correction & Resubmission" />
        <RelatedLink title="Renewal" />
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
  return (
    <div className="p-6">
      {children}
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

function FlowStep({ number, label, status }: any) {
  const statusConfig: any = {
    entry: { bg: 'bg-muted', border: 'border-gray-400', text: 'text-muted-foreground' },
    active: { bg: 'bg-blue-50', border: 'border-blue-400', text: 'text-blue-700' },
    success: { bg: 'bg-green-50', border: 'border-green-400', text: 'text-green-700' },
    info: { bg: 'bg-purple-50', border: 'border-purple-400', text: 'text-purple-700' },
    optional: { bg: 'bg-yellow-50', border: 'border-yellow-400', text: 'text-yellow-700' }
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

function InfoBox({ icon, title, text }: any) {
  return (
    <div className="flex items-start gap-3 p-4 bg-card border-2 border-border rounded-lg">
      <div className="text-blue-600 flex-shrink-0">{icon}</div>
      <div>
        <div className="font-bold text-sm text-foreground mb-1">{title}</div>
        <div className="text-xs text-muted-foreground">{text}</div>
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

function FormFieldExample({ label, required, type, helpText }: any) {
  return (
    <div>
      <label className="block text-sm font-bold text-foreground mb-2">
        {label} {required && <span className="text-red-600">*</span>}
      </label>
      {type === 'select' ? (
        <select className="w-full px-4 py-3 border-2 border-border rounded-lg bg-card">
          <option>Select an option</option>
        </select>
      ) : type === 'date' ? (
        <input
          type="text"
          placeholder="DD/MM/YYYY"
          className="w-full px-4 py-3 border-2 border-border rounded-lg"
        />
      ) : (
        <input
          type={type}
          className="w-full px-4 py-3 border-2 border-border rounded-lg"
        />
      )}
      {helpText && <div className="text-xs text-muted-foreground mt-1">{helpText}</div>}
    </div>
  );
}

function DocumentUploadBox({ title, required, formats, maxSize, status }: any) {
  const statusConfig: any = {
    pending: { border: 'border-border', bg: 'bg-background' },
    uploaded: { border: 'border-green-300', bg: 'bg-green-50' }
  };

  return (
    <div className={`border-2 ${statusConfig[status].border} ${statusConfig[status].bg} rounded-lg p-4`}>
      <div className="flex items-start justify-between mb-3">
        <div>
          <div className="font-bold text-sm text-foreground mb-1">
            {title} {required && <span className="text-red-600">*</span>}
          </div>
          <div className="text-xs text-muted-foreground">
            Accepted: {formats} • Max: {maxSize}
          </div>
        </div>
        {status === 'uploaded' && (
          <div className="flex items-center gap-1 text-green-700">
            <CheckCircle size={16} />
            <span className="text-xs font-bold">Uploaded</span>
          </div>
        )}
      </div>
      {status === 'pending' ? (
        <button className="w-full px-4 py-3 border-2 border-dashed border-gray-400 rounded-lg text-sm font-medium text-muted-foreground hover:bg-card flex items-center justify-center gap-2">
          <Upload size={16} />
          Click to upload or drag and drop
        </button>
      ) : (
        <div className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">document.pdf (1.2 MB)</div>
          <div className="flex items-center gap-2">
            <button className="text-sm text-blue-600 hover:underline">Preview</button>
            <button className="text-sm text-red-600 hover:underline">Remove</button>
          </div>
        </div>
      )}
    </div>
  );
}

function ReviewSection({ title, items }: any) {
  return (
    <div className="border-2 border-border rounded-lg overflow-hidden">
      <div className="bg-background border-b-2 border-border px-4 py-3 flex items-center justify-between">
        <h3 className="font-bold text-sm text-foreground">{title}</h3>
        <button className="text-sm text-blue-600 hover:underline font-medium flex items-center gap-1">
          <Edit size={14} />
          Edit
        </button>
      </div>
      <div className="p-4 space-y-3">
        {items.map((item: any, idx: number) => (
          <div key={idx} className="flex items-start justify-between text-sm">
            <div className="text-muted-foreground">{item.label}</div>
            <div className="font-medium text-foreground text-right">{item.value}</div>
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

function ComponentCard({ name, variants, usage }: any) {
  return (
    <div className="border-2 border-border rounded-lg p-4 bg-card">
      <div className="font-bold text-sm text-foreground mb-2">{name}</div>
      <div className="text-xs text-muted-foreground mb-2">Variants: {variants}</div>
      <div className="text-xs text-muted-foreground">Usage: {usage}</div>
    </div>
  );
}

function UsageMapRow({ page, components }: any) {
  return (
    <div className="flex items-start gap-4 p-4 bg-background border-2 border-border rounded-lg">
      <div className="w-32 flex-shrink-0 font-bold text-sm text-foreground">{page}</div>
      <div className="flex-1 flex flex-wrap gap-2">
        {components.map((comp: string, idx: number) => (
          <span key={idx} className="px-2 py-1 bg-card border border-border rounded text-xs text-muted-foreground">
            {comp}
          </span>
        ))}
      </div>
    </div>
  );
}

function ValidationRule({ field, rules, trigger, errorMessage }: any) {
  return (
    <div className="border-2 border-border rounded-lg p-4 bg-background">
      <div className="flex items-start justify-between mb-3">
        <div className="font-bold text-sm text-foreground">{field}</div>
        <div className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded">{trigger}</div>
      </div>
      <div className="space-y-2 mb-3">
        {rules.map((rule: string, idx: number) => (
          <div key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
            <CheckCircle size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
            <span>{rule}</span>
          </div>
        ))}
      </div>
      <div className="pt-3 border-t border-border">
        <div className="text-xs font-medium text-muted-foreground mb-1">Error Message:</div>
        <div className="text-xs text-red-600 italic">"{errorMessage}"</div>
      </div>
    </div>
  );
}

function ErrorHandlingBlock({ type, description, example, implementation }: any) {
  return (
    <div className="border-l-4 border-red-600 bg-red-50 dark:bg-red-950/30 p-4 rounded-r-lg">
      <div className="font-bold text-sm text-foreground mb-2">{type}</div>
      <div className="text-sm text-muted-foreground mb-3">{description}</div>
      <div className="bg-card border border-red-200 dark:border-red-800 rounded p-3 mb-3">
        <div className="text-xs font-medium text-muted-foreground mb-1">Example:</div>
        <div className="text-xs text-foreground italic">"{example}"</div>
      </div>
      <div className="text-xs text-muted-foreground">
        <span className="font-bold">Implementation:</span> {implementation}
      </div>
    </div>
  );
}

function PrincipleBlock({ title, good, bad }: any) {
  return (
    <div className="border-2 border-border rounded-lg p-4 bg-card">
      <div className="font-bold text-sm text-foreground mb-3">{title}</div>
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

function ToneCard({ tone, description, example }: any) {
  return (
    <div className="border-2 border-border rounded-lg p-4 bg-background">
      <div className="font-bold text-sm text-foreground mb-2">{tone}</div>
      <div className="text-xs text-muted-foreground mb-3">{description}</div>
      <div className="text-xs text-foreground italic bg-card border border-border rounded p-2">{example}</div>
    </div>
  );
}

function LabelGuideline({ element, guideline, example }: any) {
  return (
    <div className="flex items-start gap-4 p-3 bg-background border-2 border-border rounded-lg">
      <div className="w-32 flex-shrink-0 text-sm font-bold text-foreground">{element}</div>
      <div className="flex-1">
        <div className="text-sm text-muted-foreground mb-1">{guideline}</div>
        <div className="text-xs text-foreground bg-card border border-border rounded px-2 py-1 inline-block">
          Example: "{example}"
        </div>
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

function ScreenReaderGuideline({ element, implementation, ariaAttributes }: any) {
  return (
    <div className="border-2 border-border rounded-lg p-4 bg-background">
      <div className="font-bold text-sm text-foreground mb-2">{element}</div>
      <div className="text-xs text-muted-foreground mb-3">{implementation}</div>
      <div className="flex flex-wrap gap-2">
        {ariaAttributes.split(', ').map((attr: string, idx: number) => (
          <code key={idx} className="px-2 py-1 bg-card border border-border rounded text-xs text-foreground font-mono">
            {attr}
          </code>
        ))}
      </div>
    </div>
  );
}

function KeyboardAction({ action, behavior }: any) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-32 flex-shrink-0">
        <kbd className="px-3 py-1 bg-gray-200 border border-gray-400 rounded text-xs font-bold text-foreground shadow-sm">
          {action}
        </kbd>
      </div>
      <div className="flex-1 text-muted-foreground">{behavior}</div>
    </div>
  );
}

function MultilingualGuideline({ aspect, guidance }: any) {
  return (
    <div className="text-sm">
      <div className="font-bold text-foreground mb-1">{aspect}</div>
      <div className="text-muted-foreground">{guidance}</div>
    </div>
  );
}

function ImplementationItem({ category, requirement, priority, notes }: any) {
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
        <div className="text-sm text-muted-foreground mb-2">{requirement}</div>
        {notes && <div className="text-xs text-muted-foreground italic">{notes}</div>}
      </div>
    </div>
  );
}

function AnalyticsEvent({ event, description, category }: any) {
  return (
    <div className="flex items-start gap-4 p-3 bg-background border-2 border-border rounded-lg">
      <code className="px-2 py-1 bg-card border border-gray-400 rounded text-xs font-mono text-foreground flex-shrink-0">
        {event}
      </code>
      <div className="flex-1 text-sm text-muted-foreground">{description}</div>
      <div className="px-2 py-1 bg-purple-100 text-purple-700 text-xs font-bold rounded flex-shrink-0">
        {category}
      </div>
    </div>
  );
}

function PerformanceGuideline({ metric, target, strategies }: any) {
  return (
    <div className="border-2 border-border rounded-lg p-4 bg-background">
      <div className="flex items-center justify-between mb-3">
        <div className="font-bold text-sm text-foreground">{metric}</div>
        <div className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded">{target}</div>
      </div>
      <ul className="space-y-2">
        {strategies.map((strategy: string, idx: number) => (
          <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
            <Zap size={12} className="text-blue-600 mt-0.5 flex-shrink-0" />
            <span>{strategy}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ConformanceChecklistItem({ checked, label }: any) {
  return (
    <div className="flex items-start gap-3 p-3 bg-background border-2 border-border rounded-lg">
      <div className={`w-5 h-5 border-2 rounded flex items-center justify-center flex-shrink-0 mt-0.5 ${checked ? 'bg-green-500 border-green-600' : 'bg-card border-gray-400'}`}>
        {checked && <Check size={14} className="text-white" />}
      </div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

function MistakeBlock({ mistake, impact, solution }: any) {
  const impactConfig: any = {
    Critical: { color: 'text-red-700', bg: 'bg-red-100' },
    High: { color: 'text-orange-700', bg: 'bg-orange-100' },
    Medium: { color: 'text-yellow-700', bg: 'bg-yellow-100' }
  };

  return (
    <div className="border-l-4 border-red-600 bg-red-50 dark:bg-red-950/30 p-4 rounded-r-lg">
      <div className="flex items-start justify-between mb-2">
        <div className="font-bold text-sm text-foreground flex-1">{mistake}</div>
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

function MaturityBlock({ status, version, description, usedBy }: any) {
  return (
    <div className="border-2 border-green-300 rounded-lg p-4 bg-green-50">
      <div className="font-bold text-sm text-foreground mb-1">{status}</div>
      {version !== '—' && <div className="text-xs text-muted-foreground mb-3">{version}</div>}
      <div className="text-sm text-muted-foreground mb-3">{description}</div>
      <div className="text-xs text-muted-foreground italic">{usedBy}</div>
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

function QuickRefItem({ label, value }: any) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-bold text-foreground">{value}</span>
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
