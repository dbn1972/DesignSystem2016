import { Link } from "react-router";
import { 
  FileText, 
  Shield, 
  User, 
  ClipboardList, 
  Upload, 
  Eye, 
  CreditCard, 
  Send, 
  Clock, 
  UserCheck, 
  Award,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  Info,
  HelpCircle,
  ArrowDown,
  ChevronRight,
  Activity,
  Bell,
  RefreshCw,
  XCircle,
  LogIn,
  FileCheck,
  Settings,
  Zap,
  Target,
  MapPin,
  GitBranch
} from "lucide-react";

export default function ReferenceServiceBlueprint() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-900 dark:bg-gray-900 border-b-2 border-gray-300 dark:border-gray-700 dark:border-gray-700">
        <div className="max-w-[1600px] mx-auto px-12 py-8">
          <div className="flex items-start justify-between">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-16 h-16 border-2 border-gray-300 dark:border-gray-700 rounded flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(to bottom right, var(--ux4g-color-saffron-500), white, var(--ux4g-color-green-600))'
                  }}
                >
                  <FileText size={32} style={{ color: 'var(--ux4g-color-brand-primary)' }} />
                </div>
                <div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">UX4G Complete Reference Service</div>
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Certificate Application Service Blueprint</h1>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                A complete, end-to-end reference implementation showing how all UX4G patterns, components, and flows 
                integrate into a production-ready government service. This blueprint documents the full citizen and 
                officer journey from service discovery to certificate issuance, including all success, failure, and 
                recovery paths.
              </p>
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-50 dark:bg-green-900/200 rounded-full"></div>
                  <span className="text-gray-600 dark:text-gray-400">
                    Service Type: <span className="font-bold text-gray-900 dark:text-gray-100">Generic Certificate Application</span>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-50 dark:bg-blue-900/200 rounded-full"></div>
                  <span className="text-gray-600 dark:text-gray-400">
                    Patterns Used: <span className="font-bold text-gray-900 dark:text-gray-100">15+</span>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-50 dark:bg-purple-900/200 rounded-full"></div>
                  <span className="text-gray-600 dark:text-gray-400">
                    Total Pages: <span className="font-bold text-gray-900 dark:text-gray-100">51</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="px-6 py-3 bg-green-100 border-2 border-green-300 dark:border-green-800 rounded text-green-800 font-bold text-sm text-center">
                REFERENCE<br/>IMPLEMENTATION
              </div>
              <Link
                to="/reference-service/demo"
                className="px-6 py-3 font-bold text-sm text-center rounded transition-colors"
                style={{
                  backgroundColor: 'var(--ux4g-color-brand-primary)',
                  color: 'var(--ux4g-color-text-inverse)'
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--ux4g-color-brand-primary-dark)'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'var(--ux4g-color-brand-primary)'}
              >
                Launch Service
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Service Overview */}
      <section className="bg-white dark:bg-gray-900 border-b-2 border-gray-300 dark:border-gray-700">
        <div className="max-w-[1600px] mx-auto px-12 py-12">
          <div className="pl-4 mb-8" style={{ borderLeft: '4px solid var(--ux4g-color-brand-primary)' }}>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">Service Overview</h2>
            <p className="text-gray-600 dark:text-gray-400">Complete blueprint for a generic government certificate application service</p>
          </div>

          <div className="grid grid-cols-4 gap-6">
            
            {/* Service Purpose */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-300 dark:border-blue-800 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Target size={24} className="text-white" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-gray-100">Purpose</h3>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                Enable citizens to apply for government-issued certificates online, track application status, 
                and receive digital certificates upon approval.
              </p>
            </div>

            {/* Target Audience */}
            <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-300 dark:border-green-800 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                  <User size={24} className="text-white" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-gray-100">Who This Is For</h3>
              </div>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Indian citizens 18+ years</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Government officers (reviewers)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Support staff and administrators</span>
                </li>
              </ul>
            </div>

            {/* Use Cases */}
            <div className="bg-purple-50 dark:bg-purple-900/20 border-2 border-purple-300 dark:border-purple-800 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                  <Activity size={24} className="text-white" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-gray-100">Use Cases</h3>
              </div>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                <li className="flex items-start gap-2">
                  <ChevronRight size={14} className="text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>Birth/Death certificates</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight size={14} className="text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>Income certificates</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight size={14} className="text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>Domicile certificates</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight size={14} className="text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>Caste certificates</span>
                </li>
              </ul>
            </div>

            {/* Expected Outcome */}
            <div className="bg-orange-50 dark:bg-orange-900/20 border-2 border-orange-300 dark:border-orange-800 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
                  <Award size={24} className="text-white" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-gray-100">Outcome</h3>
              </div>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-orange-600 mt-0.5 flex-shrink-0" />
                  <span>Digital certificate issued</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-orange-600 mt-0.5 flex-shrink-0" />
                  <span>Downloadable PDF with QR</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-orange-600 mt-0.5 flex-shrink-0" />
                  <span>Verifiable authenticity</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Journey Phases */}
      <section className="max-w-[1600px] mx-auto px-12 py-12">
        <div className="pl-4 mb-8" style={{ borderLeft: '4px solid var(--ux4g-color-brand-primary)' }}>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">End-to-End Journey Phases</h2>
          <p className="text-gray-600 dark:text-gray-400">12 phases covering complete citizen and officer journey</p>
        </div>

        <div className="space-y-6">

          {/* Phase 1: Entry and Awareness */}
          <JourneyPhase
            phaseNumber={1}
            phaseName="Entry and Awareness"
            icon={<MapPin size={24} className="text-white" />}
            iconBg="bg-blue-600"
            userGoal="Discover service, understand requirements, check eligibility"
            systemAction="Display service information, eligibility criteria, document requirements"
            pages={[
              { name: "Service Landing Page", pattern: "Service Pattern - Landing", route: "/reference-service/demo" },
              { name: "Eligibility Checker", pattern: "Operational Pattern - Eligibility", route: "/reference-service/certificate/eligibility" },
              { name: "Help & FAQ", pattern: "Operational Pattern - Support", route: "/reference-service/certificate/help" }
            ]}
            patterns={["Service Landing", "Eligibility Check", "Help & Support"]}
            keyStates={["Service Available", "Eligibility Met", "Eligibility Not Met", "Maintenance Mode"]}
          />

          {/* Phase 2: Identity and Access */}
          <JourneyPhase
            phaseNumber={2}
            phaseName="Identity and Access"
            icon={<LogIn size={24} className="text-white" />}
            iconBg="bg-green-600"
            userGoal="Sign in securely to access application system"
            systemAction="Authenticate user, verify identity, establish secure session"
            pages={[
              { name: "Sign In", pattern: "Identity Pattern - Sign In", route: "/reference-service/certificate/sign-in" },
              { name: "Sign Up", pattern: "Identity Pattern - Sign Up", route: "/reference-service/certificate/sign-up" },
              { name: "OTP Verification", pattern: "Identity Pattern - OTP", route: "/reference-service/certificate/verify-otp" },
              { name: "Forgot Password", pattern: "Identity Pattern - Recovery", route: "/reference-service/certificate/forgot-password" },
              { name: "Session Timeout", pattern: "Identity Pattern - Timeout", route: "/reference-service/certificate/session-timeout" },
              { name: "Authentication Error", pattern: "Identity Pattern - Error", route: "/reference-service/demo" }
            ]}
            patterns={["Sign In", "Sign Up", "OTP Verification", "Password Recovery", "Session Management"]}
            keyStates={["Authenticated", "OTP Sent", "OTP Verified", "Session Expired", "Auth Failed", "Account Locked"]}
          />

          {/* Phase 3: Application Start */}
          <JourneyPhase
            phaseNumber={3}
            phaseName="Application Start"
            icon={<Zap size={24} className="text-white" />}
            iconBg="bg-purple-600"
            userGoal="Begin application process, understand steps"
            systemAction="Create application draft, generate application ID, show instructions"
            pages={[
              { name: "Start Application", pattern: "Operational Pattern - Start", route: "/reference-service/certificate/start" },
              { name: "Application Instructions", pattern: "Operational Pattern - Instructions", route: "/reference-service/demo" },
              { name: "Save Draft", pattern: "Operational Pattern - Draft", route: "/reference-service/demo" }
            ]}
            patterns={["Application Start", "Instructions", "Save & Resume"]}
            keyStates={["Draft Created", "Draft Saved", "Instructions Acknowledged"]}
          />

          {/* Phase 4: Form Completion */}
          <JourneyPhase
            phaseNumber={4}
            phaseName="Form Completion"
            icon={<ClipboardList size={24} className="text-white" />}
            iconBg="bg-indigo-600"
            userGoal="Complete application form with accurate information"
            systemAction="Collect data, validate inputs, save progress, handle conditional fields"
            pages={[
              { name: "Personal Details", pattern: "Form Pattern - Multi-step", route: "/reference-service/certificate/form/personal" },
              { name: "Address Details", pattern: "Form Pattern - Multi-step", route: "/reference-service/certificate/form/address" },
              { name: "Additional Information", pattern: "Form Pattern - Multi-step", route: "/reference-service/certificate/form/additional" },
              { name: "Validation Errors", pattern: "Form Pattern - Validation", route: "/reference-service/demo" },
              { name: "Incomplete Form", pattern: "Form Pattern - Incomplete", route: "/reference-service/demo" }
            ]}
            patterns={["Multi-step Form", "Field Validation", "Conditional Logic", "Save Progress"]}
            keyStates={["Form In Progress", "Section Complete", "Validation Error", "Form Complete", "Draft Saved"]}
          />

          {/* Phase 5: Document Submission */}
          <JourneyPhase
            phaseNumber={5}
            phaseName="Document Submission"
            icon={<Upload size={24} className="text-white" />}
            iconBg="bg-orange-600"
            userGoal="Upload required supporting documents"
            systemAction="Accept uploads, validate file types/sizes, scan for malware, store securely"
            pages={[
              { name: "Document Checklist", pattern: "Operational Pattern - Checklist", route: "/reference-service/certificate/document-guidelines" },
              { name: "Upload Documents", pattern: "Operational Pattern - Upload", route: "/reference-service/certificate/document-upload" },
              { name: "File Errors", pattern: "Operational Pattern - Upload Error", route: "/reference-service/demo" },
              { name: "Replace/Remove Documents", pattern: "Operational Pattern - Document Mgmt", route: "/reference-service/demo" }
            ]}
            patterns={["Document Upload", "File Validation", "Error Handling", "Document Management"]}
            keyStates={["Upload Pending", "Upload Success", "Upload Failed", "File Invalid", "Scan Failed", "All Uploaded"]}
          />

          {/* Phase 6: Review and Declaration */}
          <JourneyPhase
            phaseNumber={6}
            phaseName="Review and Declaration"
            icon={<Eye size={24} className="text-white" />}
            iconBg="bg-teal-600"
            userGoal="Review application, provide consent, make declaration"
            systemAction="Display summary, capture consent, record declaration, show privacy notice"
            pages={[
              { name: "Review Summary", pattern: "Operational Pattern - Review", route: "/reference-service/certificate/review-summary" },
              { name: "Declaration", pattern: "Consent Pattern - Declaration", route: "/reference-service/certificate/declaration" },
              { name: "Consent Capture", pattern: "Consent Pattern - Consent", route: "/reference-service/demo" },
              { name: "Privacy Notice", pattern: "Consent Pattern - Privacy", route: "/reference-service/certificate/privacy-policy" }
            ]}
            patterns={["Review Summary", "Declaration", "Consent Capture", "Privacy Acknowledgment"]}
            keyStates={["Review Complete", "Declaration Made", "Consent Given", "Privacy Acknowledged"]}
          />

          {/* Phase 7: Payment */}
          <JourneyPhase
            phaseNumber={7}
            phaseName="Payment (If Applicable)"
            icon={<CreditCard size={24} className="text-white" />}
            iconBg="bg-pink-600"
            userGoal="Pay application fee securely"
            systemAction="Display fee, process payment, handle failures, generate receipt"
            pages={[
              { name: "Fee Summary", pattern: "Payment Pattern - Summary", route: "/reference-service/certificate/payment-summary" },
              { name: "Payment Method Selection", pattern: "Payment Pattern - Method", route: "/reference-service/demo" },
              { name: "Payment Processing", pattern: "Payment Pattern - Process", route: "/reference-service/demo" },
              { name: "Payment Success", pattern: "Payment Pattern - Success", route: "/reference-service/certificate/payment-receipt" },
              { name: "Payment Failure", pattern: "Payment Pattern - Failure", route: "/reference-service/demo" },
              { name: "Payment Retry", pattern: "Payment Pattern - Retry", route: "/reference-service/demo" }
            ]}
            patterns={["Fee Payment", "Payment Gateway", "Payment Success", "Payment Failure & Retry"]}
            keyStates={["Fee Due", "Payment Processing", "Payment Success", "Payment Failed", "Payment Pending", "Receipt Generated"]}
          />

          {/* Phase 8: Submission */}
          <JourneyPhase
            phaseNumber={8}
            phaseName="Submission"
            icon={<Send size={24} className="text-white" />}
            iconBg="bg-green-700"
            userGoal="Submit application and receive confirmation"
            systemAction="Validate completeness, generate reference ID, send confirmation, queue for review"
            pages={[
              { name: "Final Confirmation", pattern: "Operational Pattern - Confirmation", route: "/reference-service/demo" },
              { name: "Submission Success", pattern: "Operational Pattern - Success", route: "/reference-service/certificate/submission-success" },
              { name: "Application Receipt", pattern: "Operational Pattern - Receipt", route: "/reference-service/demo" }
            ]}
            patterns={["Submission Confirmation", "Success State", "Receipt Generation"]}
            keyStates={["Submitted", "Receipt Generated", "Queued for Review", "Confirmation Sent"]}
          />

          {/* Phase 9: Status Tracking */}
          <JourneyPhase
            phaseNumber={9}
            phaseName="Status Tracking"
            icon={<Clock size={24} className="text-white" />}
            iconBg="bg-blue-700"
            userGoal="Track application status, view timeline, receive updates"
            systemAction="Display status, show timeline, send notifications, allow status check"
            pages={[
              { name: "Status Dashboard", pattern: "Operational Pattern - Status", route: "/reference-service/certificate/status-tracker" },
              { name: "Timeline View", pattern: "Operational Pattern - Timeline", route: "/reference-service/demo" },
              { name: "Notifications", pattern: "Operational Pattern - Notifications", route: "/reference-service/certificate/notifications" }
            ]}
            patterns={["Status Tracker", "Timeline", "Notification Center"]}
            keyStates={["Under Review", "Documents Verified", "Pending Clarification", "Approved", "Rejected", "Certificate Issued"]}
          />

          {/* Phase 10: Officer Review */}
          <JourneyPhase
            phaseNumber={10}
            phaseName="Officer Review"
            icon={<UserCheck size={24} className="text-white" />}
            iconBg="bg-purple-700"
            userGoal="Review application, verify documents, make decision (Officer perspective)"
            systemAction="Display case details, enable document verification, provide decision tools"
            pages={[
              { name: "Case List", pattern: "Officer Pattern - Queue", route: "/reference-service/certificate/officer/cases" },
              { name: "Case Review", pattern: "Officer Pattern - Review", route: "/reference-service/certificate/officer/review" },
              { name: "Document Verification", pattern: "Officer Pattern - Verification", route: "/reference-service/demo" },
              { name: "Request Correction", pattern: "Officer Pattern - Action", route: "/reference-service/demo" },
              { name: "Approve/Reject", pattern: "Officer Pattern - Decision", route: "/reference-service/demo" }
            ]}
            patterns={["Case Management", "Document Verification", "Decision Making", "Communication"]}
            keyStates={["Case Assigned", "Under Review", "Verification Complete", "Correction Requested", "Approved", "Rejected"]}
          />

          {/* Phase 11: Decision and Issuance */}
          <JourneyPhase
            phaseNumber={11}
            phaseName="Decision and Issuance"
            icon={<Award size={24} className="text-white" />}
            iconBg="bg-yellow-600"
            userGoal="Receive decision, download certificate if approved"
            systemAction="Notify decision, generate certificate, enable download, record issuance"
            pages={[
              { name: "Approval Notification", pattern: "Operational Pattern - Success", route: "/reference-service/demo" },
              { name: "Certificate Issued", pattern: "Operational Pattern - Issuance", route: "/reference-service/certificate/issued" },
              { name: "Download Certificate", pattern: "Operational Pattern - Download", route: "/reference-service/demo" },
              { name: "Rejection Notification", pattern: "Operational Pattern - Rejection", route: "/reference-service/certificate/rejected" }
            ]}
            patterns={["Decision Notification", "Certificate Generation", "Download", "Rejection Handling"]}
            keyStates={["Approved", "Certificate Generated", "Downloaded", "Rejected", "Rejection Reason Shown"]}
          />

          {/* Phase 12: Post-Service Actions */}
          <JourneyPhase
            phaseNumber={12}
            phaseName="Post-Service & Recovery"
            icon={<RefreshCw size={24} className="text-white" />}
            iconBg="bg-red-600"
            userGoal="Handle corrections, resubmissions, appeals, support"
            systemAction="Enable correction flow, process resubmissions, handle appeals, provide support"
            pages={[
              { name: "Correction Flow", pattern: "Recovery Pattern - Correction", route: "/reference-service/certificate/correction-request" },
              { name: "Resubmission", pattern: "Recovery Pattern - Resubmit", route: "/reference-service/demo" },
              { name: "Rejection Handling", pattern: "Recovery Pattern - Rejection", route: "/reference-service/demo" },
              { name: "Support Escalation", pattern: "Recovery Pattern - Support", route: "/reference-service/demo" },
              { name: "Appeal Process", pattern: "Recovery Pattern - Appeal", route: "/reference-service/certificate/appeal" }
            ]}
            patterns={["Correction Request", "Resubmission", "Appeal", "Support"]}
            keyStates={["Correction Requested", "Corrected & Resubmitted", "Appeal Filed", "Support Contacted"]}
          />

        </div>
      </section>

      {/* Journey Diagram */}
      <section className="max-w-[1600px] mx-auto px-12 py-12 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="pl-4 mb-8" style={{ borderLeft: '4px solid var(--ux4g-color-brand-primary)' }}>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">Complete Journey Flow Diagram</h2>
          <p className="text-gray-600 dark:text-gray-400">Visual representation of all phases, states, and transitions</p>
        </div>

        <div className="bg-white dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-700 rounded-lg p-8">
          <div className="flex flex-col items-center gap-4">
            
            <FlowNode label="Entry & Awareness" icon={<MapPin size={20} />} color="bg-blue-100" />
            <FlowArrow />
            <FlowNode label="Identity & Access" icon={<LogIn size={20} />} color="bg-green-100" />
            <FlowArrow />
            <FlowNode label="Application Start" icon={<Zap size={20} />} color="bg-purple-100" />
            <FlowArrow />
            <FlowNode label="Form Completion" icon={<ClipboardList size={20} />} color="bg-indigo-100" />
            <FlowArrow />
            <FlowNode label="Document Upload" icon={<Upload size={20} />} color="bg-orange-100" />
            <FlowArrow />
            <FlowNode label="Review & Declaration" icon={<Eye size={20} />} color="bg-teal-100" />
            <FlowArrow />
            
            {/* Payment Branch */}
            <div className="w-full max-w-md">
              <div className="bg-pink-50 border-2 border-pink-300 rounded-lg p-4 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <CreditCard size={20} className="text-pink-700" />
                  <span className="font-bold text-gray-900 dark:text-gray-100">Payment (Optional)</span>
                </div>
                <div className="flex items-center justify-center gap-4 text-xs">
                  <div className="flex items-center gap-1">
                    <CheckCircle size={12} className="text-green-600" />
                    <span className="text-gray-700 dark:text-gray-300">Success</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <XCircle size={12} className="text-red-600" />
                    <span className="text-gray-700 dark:text-gray-300">Failure → Retry</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={12} className="text-blue-600" />
                    <span className="text-gray-700 dark:text-gray-300">Pending</span>
                  </div>
                </div>
              </div>
            </div>
            
            <FlowArrow />
            <FlowNode label="Submission" icon={<Send size={20} />} color="bg-green-100" />
            <FlowArrow />
            <FlowNode label="Status Tracking" icon={<Clock size={20} />} color="bg-blue-100" />
            <FlowArrow />
            <FlowNode label="Officer Review" icon={<UserCheck size={20} />} color="bg-purple-100" />
            <FlowArrow />
            
            {/* Decision Branch */}
            <div className="w-full max-w-2xl">
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-300 dark:border-green-800 rounded-lg p-4 text-center">
                  <CheckCircle size={24} className="text-green-600 mx-auto mb-2" />
                  <div className="font-bold text-gray-900 dark:text-gray-100 text-sm mb-1">Approved</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Certificate Issued</div>
                </div>
                <div className="bg-orange-50 dark:bg-orange-900/20 border-2 border-orange-300 dark:border-orange-800 rounded-lg p-4 text-center">
                  <AlertCircle size={24} className="text-orange-600 mx-auto mb-2" />
                  <div className="font-bold text-gray-900 dark:text-gray-100 text-sm mb-1">Correction</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Resubmit</div>
                </div>
                <div className="bg-red-50 border-2 border-red-300 rounded-lg p-4 text-center">
                  <XCircle size={24} className="text-red-600 mx-auto mb-2" />
                  <div className="font-bold text-gray-900 dark:text-gray-100 text-sm mb-1">Rejected</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Appeal/Support</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-[1600px] mx-auto px-12 py-12">
        <div
          className="p-1 rounded-lg"
          style={{
            background: 'linear-gradient(to right, var(--ux4g-color-saffron-500), white, var(--ux4g-color-green-600))'
          }}
        >
          <div className="bg-white dark:bg-gray-900 rounded p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
              Ready to Explore the Complete Service?
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Launch the interactive certificate application service to experience all 51 pages,
              15+ UX4G patterns, and 20+ executable flows in action.
            </p>
            <Link
              to="/reference-service/demo"
              className="inline-flex items-center gap-2 px-8 py-4 font-bold rounded text-sm transition-colors"
              style={{
                backgroundColor: 'var(--ux4g-color-brand-primary)',
                color: 'var(--ux4g-color-text-inverse)'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--ux4g-color-brand-primary-dark)'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'var(--ux4g-color-brand-primary)'}
            >
              Launch Certificate Service
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900 border-t-2 border-gray-300 dark:border-gray-700 mt-24">
        <div className="max-w-[1600px] mx-auto px-12 py-8">
          <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
            <div>UX4G Design System Platform • Reference Service Blueprint</div>
            <div>Government of India • Digital India Initiative</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ==================== JOURNEY PHASE COMPONENT ====================

function JourneyPhase({
  phaseNumber,
  phaseName,
  icon,
  iconBg,
  userGoal,
  systemAction,
  pages,
  patterns,
  keyStates
}: {
  phaseNumber: number;
  phaseName: string;
  icon: React.ReactNode;
  iconBg: string;
  userGoal: string;
  systemAction: string;
  pages: { name: string; pattern: string; route: string }[];
  patterns: string[];
  keyStates: string[];
}) {
  return (
    <div className="bg-white dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden">
      {/* Phase Header */}
      <div className="bg-gray-100 dark:bg-gray-800 border-b-2 border-gray-300 dark:border-gray-700 px-6 py-4">
        <div className="flex items-center gap-4">
          <div className={`w-14 h-14 ${iconBg} rounded-lg flex items-center justify-center flex-shrink-0`}>
            {icon}
          </div>
          <div className="flex-1">
            <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">PHASE {phaseNumber}</div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{phaseName}</h3>
          </div>
          <div className="px-4 py-2 bg-blue-100 border-2 border-blue-300 dark:border-blue-800 rounded text-xs font-bold text-blue-900">
            {pages.length} PAGES
          </div>
        </div>
      </div>

      {/* Phase Content */}
      <div className="p-6">
        <div className="grid grid-cols-12 gap-6">
          
          {/* Goals and Actions - 4 columns */}
          <div className="col-span-4 space-y-4">
            <div>
              <h4 className="text-xs font-bold text-gray-600 dark:text-gray-400 uppercase mb-2 flex items-center gap-2">
                <User size={14} className="text-blue-600" />
                User Goal
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{userGoal}</p>
            </div>
            <div>
              <h4 className="text-xs font-bold text-gray-600 dark:text-gray-400 uppercase mb-2 flex items-center gap-2">
                <Settings size={14} className="text-green-600" />
                System Action
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{systemAction}</p>
            </div>
          </div>

          {/* Pages - 5 columns */}
          <div className="col-span-5">
            <h4 className="text-xs font-bold text-gray-600 dark:text-gray-400 uppercase mb-3">Pages in this Phase</h4>
            <div className="space-y-2">
              {pages.map((page, idx) => (
                <Link
                  key={idx}
                  to={page.route}
                  className="block bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded p-3 hover:bg-blue-50 dark:bg-blue-900/20 transition-all group"
                  style={{
                    '--hover-border-color': 'var(--ux4g-color-brand-primary)',
                    '--hover-text-color': 'var(--ux4g-color-brand-primary)'
                  } as React.CSSProperties}
                  onMouseOver={(e) => {
                    e.currentTarget.style.borderColor = 'var(--ux4g-color-brand-primary)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.borderColor = '';
                  }}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1">
                      <div
                        className="text-sm font-bold text-gray-900 dark:text-gray-100 transition-colors mb-1 group-hover-text"
                        style={{
                          color: 'inherit'
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.color = 'var(--ux4g-color-brand-primary)';
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.color = '';
                        }}
                      >
                        {page.name}
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">{page.pattern}</div>
                    </div>
                    <ArrowRight
                      size={16}
                      className="text-gray-400 group-hover:translate-x-1 transition-all flex-shrink-0"
                      style={{
                        color: 'inherit'
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.color = 'var(--ux4g-color-brand-primary)';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.color = '';
                      }}
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Patterns & States - 3 columns */}
          <div className="col-span-3 space-y-4">
            <div>
              <h4 className="text-xs font-bold text-gray-600 dark:text-gray-400 uppercase mb-2">UX4G Patterns</h4>
              <div className="space-y-1">
                {patterns.map((pattern, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs">
                    <div className="w-1.5 h-1.5 bg-purple-600 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300">{pattern}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xs font-bold text-gray-600 dark:text-gray-400 uppercase mb-2">Key States</h4>
              <div className="space-y-1">
                {keyStates.map((state, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs">
                    <CheckCircle size={12} className="text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{state}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

// ==================== HELPER COMPONENTS ====================

function FlowNode({ label, icon, color }: { label: string; icon: React.ReactNode; color: string }) {
  return (
    <div className={`${color} border-2 border-gray-300 dark:border-gray-700 rounded-lg px-6 py-4 flex items-center gap-3 min-w-[280px]`}>
      <div className="w-10 h-10 bg-white dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-700 rounded flex items-center justify-center">
        {icon}
      </div>
      <span className="font-bold text-gray-900 dark:text-gray-100">{label}</span>
    </div>
  );
}

function FlowArrow() {
  return (
    <div className="flex flex-col items-center">
      <ArrowDown size={24} className="text-gray-400" />
    </div>
  );
}
