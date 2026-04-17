import { Link } from "react-router";
import { LayoutDashboard, CheckCircle, AlertCircle, ArrowRight, Info, Shield, Users } from "lucide-react";

export default function DashboardOverview() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 border-b-2 border-border">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-12">
          <div className="mb-6">
            <Link to="/patterns/dashboard" className="text-sm text-muted-foreground hover:text-primary">
              ← Back to Dashboard & Personalization Patterns
            </Link>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 border-2 border-border rounded flex items-center justify-center">
              <Info size={32} className="text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-3">Pattern Overview</h1>
              <p className="text-lg text-muted-foreground">
                Understanding dashboard patterns and personalization in government digital services
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-12 gap-8">
          
          {/* Main Content */}
          <div className="col-span-9 space-y-12">
            
            {/* Purpose */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6 border-l-4 border-indigo-500 pl-4">
                Purpose of Dashboard Patterns
              </h2>
              <div className="bg-card border-2 border-border rounded-lg p-8">
                <p className="text-muted-foreground mb-6">
                  Dashboard and Personalization patterns create a unified, task-focused experience that helps citizens 
                  manage all their government service interactions from one place. These patterns reduce cognitive load, 
                  improve service completion rates, and provide continuity across multiple services and sessions.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6">
                    <h3 className="font-bold text-foreground mb-3">User Benefits</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Single point of access</li>
                      <li>• Task prioritization</li>
                      <li>• Service continuity</li>
                      <li>• Reduced complexity</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 dark:bg-green-950/30 border-2 border-green-200 dark:border-green-800 rounded-lg p-6">
                    <h3 className="font-bold text-foreground mb-3">System Benefits</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Higher completion rates</li>
                      <li>• Reduced abandonment</li>
                      <li>• Better engagement</li>
                      <li>• Usage analytics</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-950/30 border-2 border-purple-200 dark:border-purple-800 rounded-lg p-6">
                    <h3 className="font-bold text-foreground mb-3">Service Benefits</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Cross-service discovery</li>
                      <li>• Proactive engagement</li>
                      <li>• Lifecycle support</li>
                      <li>• Reduced support load</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Pattern Selection Guide */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6 border-l-4 border-purple-500 pl-4">
                When to Use Each Pattern
              </h2>
              <div className="space-y-4">
                <PatternGuide
                  title="Citizen Dashboard"
                  when={[
                    "User needs overview of all activities",
                    "Quick access to pending tasks required",
                    "Multiple services being used",
                    "Entry point after login"
                  ]}
                  notWhen={[
                    "Single-service applications",
                    "Guest/anonymous users",
                    "Service-specific dashboards"
                  ]}
                  color="blue"
                />
                <PatternGuide
                  title="Application Dashboard"
                  when={[
                    "User has submitted applications",
                    "Track multiple application statuses",
                    "Upload additional documents",
                    "View application decisions"
                  ]}
                  notWhen={[
                    "No applications submitted",
                    "Single application tracking",
                    "Service browsing only"
                  ]}
                  color="green"
                />
                <PatternGuide
                  title="Task List (Pending Actions)"
                  when={[
                    "User has incomplete actions",
                    "Deadlines approaching",
                    "Document uploads pending",
                    "Approvals or payments required"
                  ]}
                  notWhen={[
                    "No pending tasks",
                    "All applications complete",
                    "Browsing mode"
                  ]}
                  color="orange"
                />
                <PatternGuide
                  title="Notifications Center"
                  when={[
                    "User has system messages",
                    "Status updates available",
                    "Action required notifications",
                    "Manage notification preferences"
                  ]}
                  notWhen={[
                    "No notifications",
                    "Real-time alerts only",
                    "Email-only communication"
                  ]}
                  color="purple"
                />
                <PatternGuide
                  title="Saved Services"
                  when={[
                    "Frequently used services",
                    "Service bookmarking needed",
                    "Quick access shortcuts",
                    "Service discovery assistance"
                  ]}
                  notWhen={[
                    "One-time service use",
                    "No favorites capability",
                    "Anonymous users"
                  ]}
                  color="teal"
                />
                <PatternGuide
                  title="Activity History"
                  when={[
                    "Audit trail required",
                    "Download previous receipts",
                    "Track payment history",
                    "View past applications"
                  ]}
                  notWhen={[
                    "No previous activity",
                    "First-time users",
                    "Privacy-sensitive scenarios"
                  ]}
                  color="indigo"
                />
                <PatternGuide
                  title="Profile and Preferences"
                  when={[
                    "Update personal information",
                    "Manage communication preferences",
                    "Security settings control",
                    "Privacy preferences"
                  ]}
                  notWhen={[
                    "Guest users",
                    "Profile locked by admin",
                    "Read-only mode"
                  ]}
                  color="pink"
                />
              </div>
            </section>

            {/* Relationship to Service Flows */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6 border-l-4 border-green-500 pl-4">
                Relationship to Service Flows
              </h2>
              <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
                <div className="p-8">
                  <p className="text-muted-foreground mb-6">
                    Dashboard patterns integrate with service flows to provide continuity and context:
                  </p>
                  <div className="space-y-6">
                    <FlowIntegration
                      title="Pre-Service"
                      description="Before starting a service application"
                      touchpoints={[
                        "Discover services from saved list",
                        "Check eligibility requirements",
                        "Review similar past applications",
                        "Understand required documents"
                      ]}
                    />
                    <FlowIntegration
                      title="During Service"
                      description="While completing a service application"
                      touchpoints={[
                        "Auto-save and resume from dashboard",
                        "Upload documents via task list",
                        "Receive real-time notifications",
                        "View deadline reminders"
                      ]}
                    />
                    <FlowIntegration
                      title="Post-Service"
                      description="After service application submission"
                      touchpoints={[
                        "Track status in application dashboard",
                        "Complete pending actions from task list",
                        "Download certificates/receipts",
                        "View in activity history"
                      ]}
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Data Privacy & Security */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6 border-l-4 border-red-500 pl-4">
                Data Privacy & Security
              </h2>
              <div className="bg-red-50 dark:bg-red-950/30 border-2 border-red-300 rounded-lg p-8">
                <div className="flex items-start gap-3 mb-6">
                  <Shield size={24} className="text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Critical Considerations</h3>
                    <p className="text-sm text-muted-foreground">
                      Dashboard patterns display sensitive personal information and must implement strict security controls.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-foreground mb-3">Authentication & Access</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Mandatory authentication for all dashboard access</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Session timeout after 15 minutes of inactivity</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>2FA for sensitive operations (profile changes)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Role-based access control (RBAC)</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-3">Data Protection</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Encrypted data transmission (TLS 1.3)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>PII masking in logs and analytics</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Audit trail of all data access</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Right to deletion compliance</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Accessibility */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6 border-l-4 border-orange-500 pl-4">
                Accessibility Considerations
              </h2>
              <div className="bg-orange-50 dark:bg-orange-950/30 border-2 border-orange-300 rounded-lg p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-bold text-foreground mb-3">WCAG 2.1 Level AA</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Keyboard navigation for all dashboard elements</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Screen reader announcements for dynamic updates</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Skip links to main content areas</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Clear focus indicators on interactive elements</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Sufficient color contrast (4.5:1 minimum)</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-3">Inclusive Design</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Mobile-first responsive layouts</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Plain language for all labels and messages</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Multi-language interface support</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Contextual help and guidance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Status icons with text labels (not color alone)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="col-span-3 space-y-6">
            <QuickNavigation />
            <KeyPrinciples />
            <Resources />
          </div>

        </div>
      </div>
    </div>
  );
}

// ==================== COMPONENTS ====================

function PatternGuide({ title, when, notWhen, color }: {
  title: string;
  when: string[];
  notWhen: string[];
  color: string;
}) {
  const colors = {
    blue: 'border-blue-300 bg-blue-50',
    green: 'border-green-300 bg-green-50',
    purple: 'border-purple-300 bg-purple-50',
    orange: 'border-orange-300 bg-orange-50',
    teal: 'border-teal-300 bg-teal-50',
    indigo: 'border-indigo-300 bg-indigo-50',
    pink: 'border-pink-300 bg-pink-50'
  };

  return (
    <div className={`bg-card border-2 ${colors[color as keyof typeof colors]} rounded-lg p-6`}>
      <h3 className="font-bold text-foreground mb-4">{title}</h3>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <CheckCircle size={16} className="text-green-600" />
            <span className="text-sm font-bold text-foreground">Use When:</span>
          </div>
          <ul className="space-y-2">
            {when.map((item, i) => (
              <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="text-green-600">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="flex items-center gap-2 mb-3">
            <AlertCircle size={16} className="text-red-600" />
            <span className="text-sm font-bold text-foreground">Don't Use When:</span>
          </div>
          <ul className="space-y-2">
            {notWhen.map((item, i) => (
              <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="text-red-600">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function FlowIntegration({ title, description, touchpoints }: {
  title: string;
  description: string;
  touchpoints: string[];
}) {
  return (
    <div className="border-l-4 border-indigo-500 pl-6">
      <h3 className="font-bold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground mb-3">{description}</p>
      <div className="grid grid-cols-2 gap-2">
        {touchpoints.map((point, i) => (
          <div key={i} className="text-xs text-muted-foreground bg-background px-3 py-2 rounded">
            {point}
          </div>
        ))}
      </div>
    </div>
  );
}

function QuickNavigation() {
  return (
    <div className="bg-card border-2 border-border rounded-lg overflow-hidden sticky top-24">
      <div className="bg-indigo-50 dark:bg-indigo-950/30 border-b-2 border-indigo-200 dark:border-indigo-800 px-4 py-3">
        <h3 className="font-bold text-foreground text-sm">Quick Navigation</h3>
      </div>
      <div className="p-4 space-y-2 text-sm">
        <a href="#purpose" className="block text-muted-foreground hover:text-primary">Purpose</a>
        <a href="#pattern-selection" className="block text-muted-foreground hover:text-primary">Pattern Selection</a>
        <a href="#service-flows" className="block text-muted-foreground hover:text-primary">Service Flows</a>
        <a href="#privacy-security" className="block text-muted-foreground hover:text-primary">Privacy & Security</a>
        <a href="#accessibility" className="block text-muted-foreground hover:text-primary">Accessibility</a>
      </div>
    </div>
  );
}

function KeyPrinciples() {
  return (
    <div className="bg-green-50 dark:bg-green-950/30 border-2 border-green-300 rounded-lg p-4">
      <h3 className="font-bold text-foreground text-sm mb-3">Key Principles</h3>
      <ul className="space-y-2 text-xs text-muted-foreground">
        <li className="flex items-start gap-2">
          <CheckCircle size={12} className="text-green-600 mt-0.5 flex-shrink-0" />
          <span>Task-focused prioritization</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle size={12} className="text-green-600 mt-0.5 flex-shrink-0" />
          <span>Service continuity</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle size={12} className="text-green-600 mt-0.5 flex-shrink-0" />
          <span>Personalized experience</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle size={12} className="text-green-600 mt-0.5 flex-shrink-0" />
          <span>Data security</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle size={12} className="text-green-600 mt-0.5 flex-shrink-0" />
          <span>Clear navigation</span>
        </li>
      </ul>
    </div>
  );
}

function Resources() {
  return (
    <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
      <div className="bg-purple-50 dark:bg-purple-950/30 border-b-2 border-purple-200 dark:border-purple-800 px-4 py-3">
        <h3 className="font-bold text-foreground text-sm">Resources</h3>
      </div>
      <div className="p-4 space-y-2 text-sm">
        <Link to="/patterns/dashboard" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
          <ArrowRight size={14} />
          <span>All Patterns</span>
        </Link>
        <Link to="/components" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
          <ArrowRight size={14} />
          <span>Card Components</span>
        </Link>
        <Link to="/accessibility" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
          <ArrowRight size={14} />
          <span>Accessibility Guide</span>
        </Link>
      </div>
    </div>
  );
}
