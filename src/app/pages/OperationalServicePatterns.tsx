import { Link } from "react-router";
import { Settings, Calendar, CreditCard, XCircle, Upload, FileCheck, Search, Bell, UserCheck, Save, CheckCircle, AlertCircle, ArrowRight, Clock, HelpCircle, Shield, Globe, Info, Database, Code, Zap } from "lucide-react";

export default function OperationalServicePatterns() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b-2 border-border">
        <div className="max-w-[1600px] mx-auto px-12 py-8">
          <div className="flex items-start justify-between">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FF9933] via-white to-[#138808] rounded flex items-center justify-center border-2 border-border">
                  <Settings size={32} className="text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">UX4G Pattern Family</div>
                  <h1 className="text-3xl font-bold text-foreground">Operational Service Patterns</h1>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A structured pattern family for common operational flows used across government digital services. 
                These patterns handle booking, payments, document management, search, notifications, reviews, and service 
                continuity with accessibility-first design, clear recovery states, and reusable components suitable for 
                diverse service contexts.
              </p>
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-sm"></div>
                  <span className="text-muted-foreground">Pattern Family ID: <span className="font-bold text-foreground">UX4G-PAT-011</span></span>
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
              <div className="px-6 py-3 bg-orange-50 border-2 border-orange-200 rounded text-orange-700 font-bold text-xs text-center uppercase">
                Conformance<br/>Recommended
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Overview Section */}
      <section className="bg-card border-b border-border">
        <div className="max-w-[1600px] mx-auto px-12 py-12">
          <div className="grid grid-cols-3 gap-8 mb-12">
            <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <Info size={24} className="text-primary" />
                <h3 className="font-bold text-foreground">Purpose</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Provide reusable, accessible operational patterns for common service tasks like booking appointments, 
                processing payments, managing documents, searching records, and handling notifications across government services.
              </p>
            </div>

            <div className="bg-orange-50 border-2 border-orange-300 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <Zap size={24} className="text-orange-600" />
                <h3 className="font-bold text-foreground">Key Principles</h3>
              </div>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-orange-600 mt-0.5 flex-shrink-0" />
                  <span>Service continuity and save/resume support</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-orange-600 mt-0.5 flex-shrink-0" />
                  <span>Clear progress and status indicators</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-orange-600 mt-0.5 flex-shrink-0" />
                  <span>Graceful error recovery</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 border-2 border-green-300 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <Shield size={24} className="text-green-600" />
                <h3 className="font-bold text-foreground">Benefits</h3>
              </div>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Reduced development time</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Consistent user experience</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Built-in accessibility compliance</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Pattern Categories */}
          <div className="border-l-4 border-primary pl-4 mb-6">
            <h2 className="text-2xl font-bold text-foreground">Pattern Collection</h2>
            <p className="text-muted-foreground mt-2">
              9 essential operational patterns covering end-to-end service delivery workflows
            </p>
          </div>
        </div>
      </section>

      {/* Pattern Grid */}
      <main className="max-w-[1600px] mx-auto px-12 py-12">
        <div className="grid grid-cols-2 gap-6">
          
          {/* Appointment Booking */}
          <PatternCard
            to="/appointment-booking-pattern"
            icon={<Calendar size={32} />}
            iconBg="bg-blue-100"
            iconColor="text-primary"
            patternId="UX4G-PAT-011-01"
            title="Appointment Booking"
            description="Pattern for scheduling appointments with government offices, service centers, or officials. Includes slot selection, confirmation, rescheduling, cancellation, and reminder flows with calendar integration."
            features={[
              "Available slot display",
              "Date/time selection",
              "Confirmation with calendar",
              "Reschedule/cancel options"
            ]}
            complexity="Medium"
            estimatedTime="3-4 days"
          />

          {/* Fee Payment */}
          <PatternCard
            to="/patterns/payment/fee-payment"
            icon={<CreditCard size={32} />}
            iconBg="bg-green-100"
            iconColor="text-green-700"
            patternId="UX4G-PAT-011-02"
            title="Fee Payment"
            description="Standard payment pattern for government service fees, fines, and charges. Supports multiple payment methods, receipt generation, payment history, and integration with government payment gateways."
            features={[
              "Multiple payment methods",
              "Fee breakdown display",
              "Receipt generation",
              "Payment history tracking"
            ]}
            complexity="High"
            estimatedTime="4-5 days"
          />

          {/* Payment Failure and Retry */}
          <PatternCard
            to="/payment-failure-pattern"
            icon={<XCircle size={32} />}
            iconBg="bg-red-100"
            iconColor="text-red-700"
            patternId="UX4G-PAT-011-03"
            title="Payment Failure & Retry"
            description="Recovery pattern for failed payment transactions. Handles network errors, insufficient funds, timeout issues, and provides clear retry mechanisms with transaction reference tracking."
            features={[
              "Clear failure messaging",
              "Retry mechanism",
              "Alternative payment options",
              "Transaction reference tracking"
            ]}
            complexity="Medium"
            estimatedTime="2-3 days"
          />

          {/* Multi-Document Upload */}
          <PatternCard
            to="/document-upload-pattern"
            icon={<Upload size={32} />}
            iconBg="bg-purple-100"
            iconColor="text-purple-700"
            patternId="UX4G-PAT-011-04"
            title="Multi-Document Upload"
            description="Pattern for uploading multiple documents with validation, preview, progress tracking, and error handling. Supports various file formats, size limits, and accessibility requirements."
            features={[
              "Drag-and-drop support",
              "File validation",
              "Upload progress tracking",
              "Preview and remove"
            ]}
            complexity="Medium"
            estimatedTime="3-4 days"
          />

          {/* Document Verification/Rejection */}
          <PatternCard
            to="/document-verification-pattern"
            icon={<FileCheck size={32} />}
            iconBg="bg-indigo-100"
            iconColor="text-indigo-700"
            patternId="UX4G-PAT-011-05"
            title="Document Verification / Rejection"
            description="Pattern for officer review and citizen notification of document verification status. Handles approval, rejection with reasons, resubmission requests, and audit trail maintenance."
            features={[
              "Verification status display",
              "Rejection reason clarity",
              "Resubmission workflow",
              "Audit trail tracking"
            ]}
            complexity="High"
            estimatedTime="4-5 days"
          />

          {/* Record Lookup */}
          <PatternCard
            to="/record-lookup-pattern"
            icon={<Search size={32} />}
            iconBg="bg-teal-100"
            iconColor="text-teal-700"
            patternId="UX4G-PAT-011-06"
            title="Record / Application Lookup"
            description="Search and retrieval pattern for finding applications, certificates, records, or reference numbers. Supports multiple search criteria, filters, and result display with clear empty states."
            features={[
              "Multiple search criteria",
              "Filter and sort options",
              "Result preview",
              "Clear empty states"
            ]}
            complexity="Medium"
            estimatedTime="3-4 days"
          />

          {/* Notification and Reminder */}
          <PatternCard
            to="/patterns/notifications"
            icon={<Bell size={32} />}
            iconBg="bg-yellow-100"
            iconColor="text-yellow-700"
            patternId="UX4G-PAT-011-07"
            title="Notification & Reminder Pattern"
            description="Pattern for system notifications, SMS alerts, email reminders, and in-app messages. Includes preference management, delivery status, and multi-channel communication support."
            features={[
              "Multi-channel delivery",
              "Preference management",
              "Delivery status tracking",
              "Priority and urgency levels"
            ]}
            complexity="Medium"
            estimatedTime="3-4 days"
          />

          {/* Officer Review and Decision */}
          <PatternCard
            to="/officer-review-pattern"
            icon={<UserCheck size={32} />}
            iconBg="bg-orange-100"
            iconColor="text-orange-700"
            patternId="UX4G-PAT-011-08"
            title="Officer Review & Decision Pattern"
            description="Workflow pattern for government officials to review applications, verify documents, request clarifications, and make decisions. Includes workload management and decision audit trails."
            features={[
              "Application queue management",
              "Document review interface",
              "Decision options (approve/reject/clarify)",
              "Comments and audit trail"
            ]}
            complexity="High"
            estimatedTime="5-6 days"
          />

          {/* Save and Resume Later */}
          <PatternCard
            to="/patterns/resilience"
            icon={<Save size={32} />}
            iconBg="bg-cyan-100"
            iconColor="text-cyan-700"
            patternId="UX4G-PAT-011-09"
            title="Save & Resume Later"
            description="Service continuity pattern allowing users to save incomplete forms and resume from where they left off. Includes auto-save, draft management, session timeout handling, and cross-device support."
            features={[
              "Auto-save functionality",
              "Draft list management",
              "Session recovery",
              "Cross-device resume"
            ]}
            complexity="High"
            estimatedTime="4-5 days"
          />

        </div>

        {/* Cross-Pattern Guidance */}
        <section className="mt-16 bg-card border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-muted border-b-2 border-border px-8 py-4">
            <h2 className="font-bold text-foreground text-xl">Cross-Pattern Guidance</h2>
          </div>
          <div className="p-8">
            <div className="grid grid-cols-2 gap-8">
              
              {/* Design Principles */}
              <div>
                <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                  <Settings size={20} className="text-primary" />
                  Universal Design Principles
                </h3>
                <div className="space-y-3 text-sm">
                  <GuidanceItem text="Always show clear progress indicators for multi-step flows" />
                  <GuidanceItem text="Provide explicit success and error states" />
                  <GuidanceItem text="Enable service continuity (save/resume) for long forms" />
                  <GuidanceItem text="Support offline capability where feasible" />
                  <GuidanceItem text="Show clear next steps after every action" />
                  <GuidanceItem text="Provide contextual help at every stage" />
                  <GuidanceItem text="Use plain language for all messaging" />
                </div>
              </div>

              {/* Technical Standards */}
              <div>
                <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                  <Code size={20} className="text-primary" />
                  Technical Standards
                </h3>
                <div className="space-y-3 text-sm">
                  <GuidanceItem text="Implement proper loading states and skeletons" />
                  <GuidanceItem text="Use optimistic UI for immediate feedback" />
                  <GuidanceItem text="Handle network failures gracefully" />
                  <GuidanceItem text="Implement proper timeout handling" />
                  <GuidanceItem text="Support mobile-first responsive design" />
                  <GuidanceItem text="Log all critical user actions for audit" />
                  <GuidanceItem text="Implement rate limiting for sensitive operations" />
                </div>
              </div>

              {/* Accessibility Requirements */}
              <div>
                <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                  <Globe size={20} className="text-primary" />
                  Accessibility Requirements
                </h3>
                <div className="space-y-3 text-sm">
                  <GuidanceItem text="Ensure WCAG 2.1 AA compliance for all patterns" />
                  <GuidanceItem text="Provide keyboard navigation for all interactions" />
                  <GuidanceItem text="Support screen readers with proper ARIA labels" />
                  <GuidanceItem text="Use sufficient color contrast (4.5:1 minimum)" />
                  <GuidanceItem text="Provide text alternatives for visual content" />
                  <GuidanceItem text="Support text resizing up to 200%" />
                </div>
              </div>

              {/* Service Continuity */}
              <div>
                <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                  <Database size={20} className="text-primary" />
                  Service Continuity
                </h3>
                <div className="space-y-3 text-sm">
                  <GuidanceItem text="Implement auto-save every 30 seconds for forms" />
                  <GuidanceItem text="Provide session timeout warnings (2 min before)" />
                  <GuidanceItem text="Allow draft recovery after session expiry" />
                  <GuidanceItem text="Support cross-device session continuity" />
                  <GuidanceItem text="Maintain transaction references for recovery" />
                  <GuidanceItem text="Enable email/SMS recovery links" />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Pattern Dependencies */}
        <section className="mt-8 bg-blue-50 border-2 border-blue-300 rounded-lg p-8">
          <div className="flex items-start gap-4">
            <Info size={32} className="text-primary flex-shrink-0" />
            <div className="flex-1">
              <h2 className="font-bold text-foreground text-xl mb-2">Pattern Dependencies & Integration</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Many operational patterns work together. For example:
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-card border border-blue-200 rounded p-4">
                  <h4 className="font-bold text-foreground mb-2">Appointment Booking →</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Requires Fee Payment (if applicable)</li>
                    <li>• Uses Notification & Reminder</li>
                    <li>• Supports Save & Resume</li>
                  </ul>
                </div>
                <div className="bg-card border border-blue-200 rounded p-4">
                  <h4 className="font-bold text-foreground mb-2">Document Upload →</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Connects to Document Verification</li>
                    <li>• Uses Notification for status updates</li>
                    <li>• Supports Save & Resume</li>
                  </ul>
                </div>
                <div className="bg-card border border-blue-200 rounded p-4">
                  <h4 className="font-bold text-foreground mb-2">Fee Payment →</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Requires Payment Failure handling</li>
                    <li>• Uses Notification for receipt</li>
                    <li>• Links to Record Lookup (payment history)</li>
                  </ul>
                </div>
                <div className="bg-card border border-blue-200 rounded p-4">
                  <h4 className="font-bold text-foreground mb-2">Officer Review →</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Triggers Document Verification</li>
                    <li>• Uses Notification to inform citizens</li>
                    <li>• May require additional Document Upload</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Support Resources */}
        <section className="mt-8 bg-orange-50 border-2 border-orange-300 rounded-lg p-8">
          <div className="flex items-start gap-4">
            <HelpCircle size={32} className="text-orange-600 flex-shrink-0" />
            <div className="flex-1">
              <h2 className="font-bold text-foreground text-xl mb-2">Need Help Implementing These Patterns?</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Our team provides comprehensive support including Figma components, React code snippets, API integration 
                guides, and accessibility testing for all operational patterns.
              </p>
              <div className="flex items-center gap-4">
                <a href="#" className="px-6 py-3 bg-primary text-white font-bold rounded text-sm hover:opacity-90 transition-colors">
                  Contact Support Team
                </a>
                <a href="#" className="px-6 py-3 border-2 border-primary bg-card text-primary font-bold rounded text-sm hover:bg-blue-50 transition-colors">
                  View Code Examples
                </a>
                <a href="#" className="text-sm text-primary font-bold hover:underline">
                  Download Figma Kit →
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-card border-t-2 border-border mt-24">
        <div className="max-w-[1600px] mx-auto px-12 py-8">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div>UX4G Design System Platform • Operational Service Patterns</div>
            <div>Government of India • Digital India Initiative</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ==================== PATTERN CARD COMPONENT ====================

function PatternCard({
  to,
  icon,
  iconBg,
  iconColor,
  patternId,
  title,
  description,
  features,
  complexity,
  estimatedTime
}: {
  to: string;
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
  patternId: string;
  title: string;
  description: string;
  features: string[];
  complexity: string;
  estimatedTime: string;
}) {
  return (
    <Link 
      to={to}
      className="bg-card border-2 border-border rounded-lg overflow-hidden hover:border-primary hover:shadow-lg transition-all group"
    >
      {/* Header */}
      <div className="bg-muted border-b-2 border-border px-6 py-4">
        <div className="flex items-center gap-4">
          <div className={`w-16 h-16 ${iconBg} rounded flex items-center justify-center flex-shrink-0`}>
            <div className={iconColor}>
              {icon}
            </div>
          </div>
          <div className="flex-1">
            <div className="text-xs text-muted-foreground mb-1">{patternId}</div>
            <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">{title}</h3>
          </div>
          <ArrowRight size={20} className="text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {description}
        </p>

        {/* Features */}
        <div className="mb-4">
          <h4 className="text-xs font-bold text-muted-foreground uppercase mb-2">Key Features</h4>
          <div className="grid grid-cols-2 gap-2">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-2">
                <CheckCircle size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-xs text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Metadata */}
        <div className="flex items-center gap-4 pt-4 border-t border-border">
          <div className="flex items-center gap-2 text-xs">
            <Settings size={14} className="text-gray-500" />
            <span className="text-muted-foreground">Complexity: <span className="font-bold text-foreground">{complexity}</span></span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <Clock size={14} className="text-gray-500" />
            <span className="text-muted-foreground">Est: <span className="font-bold text-foreground">{estimatedTime}</span></span>
          </div>
        </div>
      </div>
    </Link>
  );
}

// ==================== GUIDANCE ITEM COMPONENT ====================

function GuidanceItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2">
      <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
      <span className="text-muted-foreground">{text}</span>
    </div>
  );
}
