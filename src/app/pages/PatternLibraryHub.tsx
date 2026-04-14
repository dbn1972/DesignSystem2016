import { Link } from "react-router";
import { BookOpen, User, FileCheck, CreditCard, FileText, Shield, CheckCircle, MessageSquare, Search, LayoutDashboard, Activity, Bell } from "lucide-react";

export default function PatternLibraryHub() {
  return (
    <div className="min-h-screen bg-background dark:bg-gray-900">
      {/* Header */}
      <header className="bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-green-900/20 dark:via-gray-800 dark:to-blue-900/20 border-b-2 border-border dark:border-gray-700">
        <div className="max-w-[1400px] mx-auto px-12 py-12">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 border-2 border-border dark:border-gray-700 rounded flex items-center justify-center">
                <BookOpen size={32} className="text-white" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground dark:text-gray-400 mb-1">Live Demonstrations</div>
                <h1 className="text-4xl font-bold text-foreground dark:text-gray-100">Pattern Library</h1>
              </div>
            </div>
            <p className="text-lg text-muted-foreground dark:text-gray-300 leading-relaxed">
              Production-ready patterns for common government service scenarios. Each pattern includes
              live demonstrations, code examples, and implementation guidelines. Use these patterns
              as-is or customize for your specific needs.
            </p>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-[1400px] mx-auto px-12 py-12">

        {/* Stats */}
        <div className="grid grid-cols-4 gap-6 mb-12">
          <StatCard number="64" label="Pattern Demos" />
          <StatCard number="11" label="Pattern Categories" />
          <StatCard number="100%" label="Accessibility Tested" />
          <StatCard number="51" label="Reference Service Pages" />
        </div>

        {/* Pattern Categories */}
        <div className="space-y-8">
          
          <PatternCategory
            icon={<User size={32} className="text-blue-600" />}
            title="Identity & Access Patterns"
            description="Authentication, authorization, and account management patterns"
            color="blue"
            patterns={[
              {
                name: "Sign In & Sign Up",
                description: "User registration and login flows with mobile/email verification",
                demos: ["Mobile sign up", "Email sign in", "Social auth"],
                path: "/patterns/identity"
              },
              {
                name: "OTP Verification",
                description: "One-time password verification for mobile and email",
                demos: ["Mobile OTP", "Email OTP", "Resend OTP"],
                path: "/patterns/identity"
              },
              {
                name: "Password Management",
                description: "Forgot password, reset password, and change password flows",
                demos: ["Forgot password", "Reset with OTP", "Change password"],
                path: "/patterns/identity"
              },
              {
                name: "Aadhaar Authentication",
                description: "Aadhaar-based identity verification and eKYC",
                demos: ["Aadhaar OTP", "Biometric auth", "eKYC"],
                path: "/patterns/identity"
              },
              {
                name: "Session & Security",
                description: "Session timeout, account lockout, and security patterns",
                demos: ["Session timeout", "Account lockout", "Account recovery"],
                path: "/patterns/identity"
              }
            ]}
          />

          <PatternCategory
            icon={<FileCheck size={32} className="text-green-600" />}
            title="Consent & Declaration Patterns"
            description="Legal consent, declarations, and privacy patterns"
            color="green"
            patterns={[
              {
                name: "Consent Capture",
                description: "Capture user consent for data processing and sharing",
                demos: ["Basic consent", "Multi-step consent", "Granular consent"],
                path: "/patterns/consent"
              },
              {
                name: "Guardian & Proxy Consent",
                description: "Consent from guardians or authorized representatives",
                demos: ["Guardian consent", "Proxy authorization", "Minor consent"],
                path: "/patterns/consent"
              },
              {
                name: "Data Sharing Consent",
                description: "Consent for sharing data with third parties",
                demos: ["Third-party sharing", "API consent", "Department consent"],
                path: "/patterns/consent"
              },
              {
                name: "Privacy & Terms",
                description: "Privacy notices and terms acceptance",
                demos: ["Privacy notice", "Terms acceptance", "Cookie consent"],
                path: "/patterns/consent"
              },
              {
                name: "Declaration Before Submission",
                description: "Final declarations before application submission",
                demos: ["Self-declaration", "Document authenticity", "Information accuracy"],
                path: "/patterns/consent"
              }
            ]}
          />

          <PatternCategory
            icon={<CreditCard size={32} className="text-purple-600" />}
            title="Payment Patterns"
            description="Fee payment, transaction handling, and failure recovery"
            color="purple"
            patterns={[
              {
                name: "Fee Payment",
                description: "Payment gateway integration with multiple payment methods",
                demos: ["UPI payment", "Net banking", "Card payment"],
                path: "/patterns/payment"
              },
              {
                name: "Payment Failure & Retry",
                description: "Handling payment failures with retry mechanisms",
                demos: ["Network failure", "Timeout recovery", "Retry payment"],
                path: "/patterns/payment"
              }
            ]}
          />

          <PatternCategory
            icon={<FileText size={32} className="text-orange-600" />}
            title="Form & Data Entry Patterns"
            description="Multi-step forms, validation, and auto-save patterns"
            color="orange"
            patterns={[
              {
                name: "Form Intelligence",
                description: "Smart forms with auto-save, validation, and error recovery",
                demos: ["Multi-step form", "Auto-save", "Inline validation"],
                path: "/patterns/forms"
              },
              {
                name: "Document Upload",
                description: "File upload with validation, preview, and management",
                demos: ["Drag & drop", "File validation", "Upload progress"],
                path: "/patterns/forms"
              }
            ]}
          />

          <PatternCategory
            icon={<Shield size={32} className="text-red-600" />}
            title="State & Resilience Patterns"
            description="Error handling, offline support, and recovery patterns"
            color="red"
            patterns={[
              {
                name: "Error States",
                description: "Graceful error handling with recovery options",
                demos: ["Network errors", "Server errors", "Validation errors"],
                path: "/patterns/resilience"
              },
              {
                name: "Loading & Empty States",
                description: "Loading indicators, skeletons, and empty states",
                demos: ["Loading spinner", "Skeleton screen", "No data state"],
                path: "/patterns/resilience"
              },
              {
                name: "Offline Support",
                description: "Offline detection and data persistence",
                demos: ["Offline indicator", "Auto-save draft", "Sync on reconnect"],
                path: "/patterns/resilience"
              }
            ]}
          />

          <PatternCategory
            icon={<BookOpen size={32} className="text-indigo-600" />}
            title="Service Journey Patterns"
            description="Complete end-to-end service patterns"
            color="indigo"
            patterns={[
              {
                name: "Application Submission",
                description: "Complete application submission journey",
                demos: ["Form filling", "Document upload", "Review & submit"],
                path: "/patterns/service"
              },
              {
                name: "Eligibility Screening",
                description: "Pre-application eligibility checks",
                demos: ["Eligibility form", "Result display", "Next steps"],
                path: "/patterns/service"
              },
              {
                name: "Status Tracking",
                description: "Application status tracking and notifications",
                demos: ["Track by number", "Status timeline", "Notifications"],
                path: "/patterns/service"
              },
              {
                name: "Renewal & Resubmission",
                description: "Service renewal and correction patterns",
                demos: ["Renewal flow", "Correction request", "Resubmission"],
                path: "/patterns/service"
              }
            ]}
          />

          <PatternCategory
            icon={<MessageSquare size={32} className="text-teal-600" />}
            title="Contact & Support Patterns"
            description="Citizen-government communication and support request patterns"
            color="teal"
            patterns={[
              {
                name: "General Contact",
                description: "Basic contact form for general inquiries and information requests",
                demos: ["Intent selection", "Form entry", "Confirmation"],
                path: "/patterns/contact-support/general-contact"
              },
              {
                name: "Service Support",
                description: "Support requests for ongoing services and technical issues",
                demos: ["Reference tracking", "Issue categorization", "Ticket creation"],
                path: "/patterns/contact-support/service-support"
              },
              {
                name: "Escalation & Priority",
                description: "Escalation forms and urgent priority routing",
                demos: ["Escalation flow", "Urgent requests", "Priority handling"],
                path: "/patterns/contact-support"
              },
              {
                name: "Assisted & Hybrid",
                description: "Assisted support and feedback+contact hybrid patterns",
                demos: ["Helper mode", "Feedback hybrid", "Callback requests"],
                path: "/patterns/contact-support"
              }
            ]}
          />

          <PatternCategory
            icon={<Search size={32} className="text-purple-600" />}
            title="Search & Discovery Patterns"
            description="Intent-based service discovery and smart search patterns"
            color="purple"
            patterns={[
              {
                name: "Global Search",
                description: "Universal search with autocomplete, suggestions, and natural language matching",
                demos: ["Autocomplete", "Keyboard navigation", "Popular searches"],
                path: "/patterns/search-discovery/global-search"
              },
              {
                name: "Search Results",
                description: "Structured results display with filtering, sorting, and relevance ranking",
                demos: ["Filter & sort", "Grid/list views", "Relevance scores"],
                path: "/patterns/search-discovery/search-results"
              },
              {
                name: "No Results Recovery",
                description: "Strong recovery patterns for failed searches with alternatives and guidance",
                demos: ["Spell check", "Related services", "Guided finder"],
                path: "/patterns/search-discovery/no-results"
              },
              {
                name: "Discovery & Suggestions",
                description: "Smart suggestions, popular services, and guided service finder",
                demos: ["Personalization", "Trending services", "Wizard flow"],
                path: "/patterns/search-discovery"
              }
            ]}
          />

          <PatternCategory
            icon={<LayoutDashboard size={32} className="text-indigo-600" />}
            title="Dashboard & Personalization Patterns"
            description="Task-focused, personalized dashboards for service management"
            color="indigo"
            patterns={[
              {
                name: "Citizen Dashboard",
                description: "Unified dashboard with overview, tasks, applications, and quick actions",
                demos: ["Task prioritization", "Application status", "Notifications"],
                path: "/patterns/dashboard/citizen-dashboard"
              },
              {
                name: "Task List & Pending Actions",
                description: "Prioritized task management with deadline tracking and completion flows",
                demos: ["Priority sorting", "Deadline tracking", "Task completion"],
                path: "/patterns/dashboard/task-list"
              },
              {
                name: "Application Dashboard",
                description: "Centralized application management with status tracking and document handling",
                demos: ["Status tracking", "Document upload", "Progress monitoring"],
                path: "/patterns/dashboard"
              },
              {
                name: "Profile & Notifications",
                description: "User profile management, notifications center, and preference settings",
                demos: ["Profile editing", "Notification management", "Activity history"],
                path: "/patterns/dashboard"
              }
            ]}
          />

          <PatternCategory
            icon={<Activity size={32} className="text-blue-600" />}
            title="Status & Lifecycle Patterns"
            description="Lifecycle intelligence with timeline tracking, progress visualization, and transparency"
            color="blue"
            patterns={[
              {
                name: "Timeline View",
                description: "Chronological activity timeline showing all events, actions, and status changes",
                demos: ["Event history", "Actor visibility", "Metadata expansion"],
                path: "/patterns/status-lifecycle/timeline-view"
              },
              {
                name: "Step Progress Tracker",
                description: "Visual step-by-step progress indicator with completed, current, and upcoming stages",
                demos: ["Progress visualization", "Step details", "Time estimates"],
                path: "/patterns/status-lifecycle/step-progress"
              },
              {
                name: "Multi-status & Delays",
                description: "Complex status states with sub-statuses, delay transparency, and escalation tracking",
                demos: ["Status intelligence", "Delay reasons", "Escalation visibility"],
                path: "/patterns/status-lifecycle"
              },
              {
                name: "SLA & Batch Status",
                description: "Service Level Agreement tracking and batch application management",
                demos: ["Timeline expectations", "Multiple applications", "Deadline alerts"],
                path: "/patterns/status-lifecycle"
              }
            ]}
          />

          <PatternCategory
            icon={<Bell size={32} className="text-purple-600" />}
            title="Notification System Patterns"
            description="Advanced multi-channel notifications with actionable content and user preferences"
            color="purple"
            patterns={[
              {
                name: "Notification Center",
                description: "Unified inbox with filtering, search, bulk actions, and read/unread management",
                demos: ["Filter by type", "Search notifications", "Bulk operations"],
                path: "/patterns/notifications/center"
              },
              {
                name: "Actionable Notifications",
                description: "Inline actions - upload documents, make payments, approve requests directly",
                demos: ["File upload", "Payment processing", "Quick approvals"],
                path: "/patterns/notifications/actionable"
              },
              {
                name: "Multi-Channel Delivery",
                description: "SMS, Email, In-app notification patterns with smart channel selection",
                demos: ["SMS templates", "Email design", "Push notifications"],
                path: "/patterns/notifications"
              },
              {
                name: "Preferences & Reminders",
                description: "Granular notification control, reminder sequences, and escalation alerts",
                demos: ["User preferences", "Smart reminders", "Escalation chains"],
                path: "/patterns/notifications"
              }
            ]}
          />

        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 border-2 border-border dark:border-gray-700 rounded-lg p-12 mt-12 text-center">
          <h2 className="text-3xl font-bold text-foreground dark:text-gray-100 mb-4">See Patterns in Action</h2>
          <p className="text-lg text-muted-foreground dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Explore our complete reference service - a certificate application with 51 pages
            demonstrating all these patterns in a real government service context.
          </p>
          <Link
            to="/reference-service/demo"
            className="inline-block px-8 py-4 font-bold rounded transition-colors"
            style={{
              backgroundColor: 'var(--ux4g-color-brand-primary)',
              color: 'var(--ux4g-color-text-inverse)'
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--ux4g-color-brand-primary-dark)'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'var(--ux4g-color-brand-primary)'}
          >
            View Reference Service →
          </Link>
        </div>

      </main>
    </div>
  );
}

// ==================== COMPONENTS ====================

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="bg-card dark:bg-gray-800 border-2 border-border dark:border-gray-700 rounded-lg p-6 text-center">
      <div className="text-3xl font-bold mb-2" style={{ color: 'var(--ux4g-color-brand-primary)' }}>{number}</div>
      <div className="text-sm text-muted-foreground dark:text-gray-300">{label}</div>
    </div>
  );
}

function PatternCategory({ icon, title, description, color, patterns }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  patterns: Array<{
    name: string;
    description: string;
    demos: string[];
    path: string;
  }>;
}) {
  const colorClasses = {
    blue: 'bg-blue-50 dark:bg-blue-900/20 border-blue-300 dark:border-blue-800',
    green: 'bg-green-50 dark:bg-green-900/20 border-green-300 dark:border-green-800',
    purple: 'bg-purple-50 dark:bg-purple-900/20 border-purple-300 dark:border-purple-800',
    orange: 'bg-orange-50 dark:bg-orange-900/20 border-orange-300 dark:border-orange-800',
    red: 'bg-red-50 dark:bg-red-900/20 border-red-300 dark:border-red-800',
    indigo: 'bg-indigo-50 dark:bg-indigo-900/20 border-indigo-300 dark:border-indigo-800',
    teal: 'bg-teal-50 dark:bg-teal-900/20 border-teal-300 dark:border-teal-800'
  };

  return (
    <div className="bg-card dark:bg-gray-800 border-2 border-border dark:border-gray-700 rounded-lg overflow-hidden">
      <div className={`${colorClasses[color as keyof typeof colorClasses]} border-b-2 border-border dark:border-gray-700 p-6`}>
        <div className="flex items-center gap-4">
          <div>{icon}</div>
          <div>
            <h2 className="text-2xl font-bold text-foreground dark:text-gray-100">{title}</h2>
            <p className="text-muted-foreground dark:text-gray-300 mt-1">{description}</p>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-1 gap-4">
          {patterns.map((pattern, i) => (
            <Link
              key={i}
              to={pattern.path}
              className="p-4 border-2 border-border dark:border-gray-700 rounded-lg hover:shadow-md transition-all group"
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
              <div className="flex items-start justify-between mb-2">
                <h3
                  className="font-bold text-foreground dark:text-gray-100 transition-colors"
                  onMouseOver={(e) => {
                    e.currentTarget.style.color = 'var(--ux4g-color-brand-primary)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.color = '';
                  }}
                >
                  {pattern.name}
                </h3>
                <span className="text-xs text-muted-foreground dark:text-gray-400 bg-muted dark:bg-gray-700 px-2 py-1 rounded">
                  {pattern.demos.length} demos
                </span>
              </div>
              <p className="text-sm text-muted-foreground dark:text-gray-300 mb-3">{pattern.description}</p>
              <div className="flex flex-wrap gap-2">
                {pattern.demos.map((demo, j) => (
                  <span key={j} className="flex items-center gap-1 text-xs text-muted-foreground dark:text-gray-400 bg-background dark:bg-gray-700 px-2 py-1 rounded">
                    <CheckCircle size={12} className="text-green-600 dark:text-green-400" />
                    {demo}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}