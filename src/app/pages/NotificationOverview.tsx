import { Link } from "react-router";
import { Bell, CheckCircle, AlertCircle, ArrowRight, Info, Shield } from "lucide-react";

export default function NotificationOverview() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-to-br from-purple-50 via-white to-pink-50 border-b-2 border-border">
        <div className="max-w-[1400px] mx-auto px-12 py-12">
          <div className="mb-6">
            <Link to="/patterns/notifications" className="text-sm text-muted-foreground hover:text-primary">
              ← Back to Notification System Patterns
            </Link>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 border-2 border-border rounded flex items-center justify-center">
              <Info size={32} className="text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-3">Pattern Overview</h1>
              <p className="text-lg text-muted-foreground">
                Understanding notification systems and multi-channel communication in government services
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1400px] mx-auto px-12 py-12">
        <div className="grid grid-cols-12 gap-8">
          
          {/* Main Content */}
          <div className="col-span-9 space-y-12">
            
            {/* Purpose */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6 border-l-4 border-purple-500 pl-4">
                Purpose of Notification Patterns
              </h2>
              <div className="bg-card border-2 border-border rounded-lg p-8">
                <p className="text-muted-foreground mb-6">
                  Notification patterns enable proactive, multi-channel communication between government services and citizens. 
                  Instead of forcing citizens to check portals repeatedly, these patterns push timely information through 
                  preferred channels (SMS, Email, In-app) while respecting user preferences and avoiding notification fatigue.
                </p>
                <div className="grid grid-cols-3 gap-6">
                  <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
                    <h3 className="font-bold text-foreground mb-3">Without Smart Notifications</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Citizens check portal daily</li>
                      <li>• Miss critical deadlines</li>
                      <li>• Support calls for status</li>
                      <li>• Low engagement rates</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
                    <h3 className="font-bold text-foreground mb-3">With Smart Notifications</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Proactive status updates</li>
                      <li>• Timely deadline reminders</li>
                      <li>• Direct action capability</li>
                      <li>• 70% fewer support calls</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
                    <h3 className="font-bold text-foreground mb-3">Key Metrics</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• 85% notification open rate</li>
                      <li>• 60% action completion rate</li>
                      <li>• 70% reduction in calls</li>
                      <li>• 40% faster processing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Pattern Selection Guide */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6 border-l-4 border-pink-500 pl-4">
                When to Use Each Pattern
              </h2>
              <div className="space-y-4">
                <PatternGuide
                  title="Notification Center"
                  when={[
                    "Users have multiple active services",
                    "Need to view notification history",
                    "Bulk action management required",
                    "Search and filter notifications"
                  ]}
                  notWhen={[
                    "Only real-time alerts needed",
                    "No in-app notification view",
                    "Single notification type"
                  ]}
                  color="purple"
                />
                <PatternGuide
                  title="Actionable Notifications"
                  when={[
                    "Quick actions can be completed inline",
                    "Upload document, approve, pay directly",
                    "Reduce friction for common tasks",
                    "High-frequency action notifications"
                  ]}
                  notWhen={[
                    "Complex multi-step actions",
                    "Requires full form/page context",
                    "Security-sensitive operations"
                  ]}
                  color="orange"
                />
                <PatternGuide
                  title="SMS / Email / In-app Patterns"
                  when={[
                    "Different urgency levels exist",
                    "Users have channel preferences",
                    "Need multi-channel reach",
                    "Fallback delivery required"
                  ]}
                  notWhen={[
                    "Single channel sufficient",
                    "No channel preference data",
                    "Cost constraints (SMS)"
                  ]}
                  color="blue"
                />
                <PatternGuide
                  title="Reminder Patterns"
                  when={[
                    "Deadlines and appointments exist",
                    "Time-sensitive actions required",
                    "Completion rates need improvement",
                    "Multi-stage reminder sequences"
                  ]}
                  notWhen={[
                    "No time-based triggers",
                    "Instant/real-time services",
                    "Users actively monitoring"
                  ]}
                  color="teal"
                />
                <PatternGuide
                  title="Escalation Alerts"
                  when={[
                    "Critical/urgent situations arise",
                    "SLA breaches occurring",
                    "Emergency communications needed",
                    "Multiple contact attempts required"
                  ]}
                  notWhen={[
                    "No urgent scenarios",
                    "Standard priority only",
                    "Privacy concerns with escalation"
                  ]}
                  color="red"
                />
                <PatternGuide
                  title="Notification Preferences"
                  when={[
                    "Multiple notification types exist",
                    "User fatigue is a concern",
                    "Different user segments exist",
                    "Compliance with opt-in/out required"
                  ]}
                  notWhen={[
                    "Mandatory notifications only",
                    "No user control allowed",
                    "Single notification type"
                  ]}
                  color="green"
                />
              </div>
            </section>

            {/* Channel Selection Matrix */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6 border-l-4 border-blue-500 pl-4">
                Channel Selection Matrix
              </h2>
              <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead className="bg-muted border-b-2 border-border">
                    <tr>
                      <th className="text-left p-4 font-bold text-foreground">Scenario</th>
                      <th className="text-center p-4 font-bold text-foreground">SMS</th>
                      <th className="text-center p-4 font-bold text-foreground">Email</th>
                      <th className="text-center p-4 font-bold text-foreground">In-App</th>
                      <th className="text-center p-4 font-bold text-foreground">Push</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <MatrixRow
                      scenario="Critical Alert (payment failed, deadline today)"
                      sms="✓ Primary"
                      email="✓ Backup"
                      inapp="✓ Backup"
                      push="✓ Primary"
                    />
                    <MatrixRow
                      scenario="Action Required (upload document, 3 days left)"
                      sms="✓ Primary"
                      email="✓ Primary"
                      inapp="✓ Primary"
                      push="○ Optional"
                    />
                    <MatrixRow
                      scenario="Status Update (application approved)"
                      sms="○ If opted-in"
                      email="✓ Primary"
                      inapp="✓ Primary"
                      push="○ Optional"
                    />
                    <MatrixRow
                      scenario="Informational (new service, newsletter)"
                      sms="✗ No"
                      email="✓ Primary"
                      inapp="○ Optional"
                      push="✗ No"
                    />
                    <MatrixRow
                      scenario="Reminder (appointment tomorrow)"
                      sms="✓ Primary"
                      email="○ Optional"
                      inapp="✓ Primary"
                      push="✓ Primary"
                    />
                  </tbody>
                </table>
              </div>
            </section>

            {/* Notification Frequency Guidelines */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6 border-l-4 border-orange-500 pl-4">
                Notification Frequency Guidelines
              </h2>
              <div className="bg-orange-50 border-2 border-orange-300 rounded-lg p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-bold text-foreground mb-3">Default Limits</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span><strong>SMS:</strong> Max 3 per day (critical alerts exempt)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Email:</strong> Max 5 per day (can batch into digest)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span><strong>In-App:</strong> No hard limit (user controls visibility)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Push:</strong> Max 3 per day (configurable in settings)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Quiet Hours:</strong> 10 PM - 8 AM (critical exempt)</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-3">Smart Batching</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Daily Digest:</strong> Low-priority notifications at 9 AM</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Weekly Summary:</strong> Informational updates on Monday</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Similar Actions:</strong> Group related notifications together</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Deduplicate:</strong> Don't resend same notification twice</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Suppress:</strong> Don't send if action already completed</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Privacy & Compliance */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6 border-l-4 border-red-500 pl-4">
                Privacy & Compliance
              </h2>
              <div className="bg-red-50 border-2 border-red-300 rounded-lg p-8">
                <div className="flex items-start gap-3 mb-6">
                  <Shield size={24} className="text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Critical Compliance Requirements</h3>
                    <p className="text-sm text-muted-foreground">
                      Notification systems must comply with privacy regulations and respect user consent for communications.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-foreground mb-3">Data Protection</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>No PII in notification subject/preview</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Use reference numbers instead of names</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Encrypted delivery channels</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Log all notification sends (audit trail)</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-3">User Rights</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Opt-in for promotional notifications</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Easy unsubscribe in every email</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Granular preference management</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Cannot opt-out of critical alerts</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <aside className="col-span-3 space-y-6">
            <QuickNavigation />
            <KeyPrinciples />
            <Resources />
          </aside>

        </div>
      </main>
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
    purple: 'border-purple-300 bg-purple-50',
    orange: 'border-orange-300 bg-orange-50',
    blue: 'border-blue-300 bg-blue-50',
    teal: 'border-teal-300 bg-teal-50',
    red: 'border-red-300 bg-red-50',
    green: 'border-green-300 bg-green-50'
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

function MatrixRow({ scenario, sms, email, inapp, push }: {
  scenario: string;
  sms: string;
  email: string;
  inapp: string;
  push: string;
}) {
  return (
    <tr>
      <td className="p-4 text-sm text-foreground">{scenario}</td>
      <td className="p-4 text-sm text-center">{sms}</td>
      <td className="p-4 text-sm text-center">{email}</td>
      <td className="p-4 text-sm text-center">{inapp}</td>
      <td className="p-4 text-sm text-center">{push}</td>
    </tr>
  );
}

function QuickNavigation() {
  return (
    <div className="bg-card border-2 border-border rounded-lg overflow-hidden sticky top-24">
      <div className="bg-purple-50 border-b-2 border-purple-200 px-4 py-3">
        <h3 className="font-bold text-foreground text-sm">Quick Navigation</h3>
      </div>
      <div className="p-4 space-y-2 text-sm">
        <a href="#purpose" className="block text-muted-foreground hover:text-primary">Purpose</a>
        <a href="#pattern-selection" className="block text-muted-foreground hover:text-primary">Pattern Selection</a>
        <a href="#channel-matrix" className="block text-muted-foreground hover:text-primary">Channel Matrix</a>
        <a href="#frequency" className="block text-muted-foreground hover:text-primary">Frequency</a>
        <a href="#privacy" className="block text-muted-foreground hover:text-primary">Privacy</a>
      </div>
    </div>
  );
}

function KeyPrinciples() {
  return (
    <div className="bg-purple-50 border-2 border-purple-300 rounded-lg p-4">
      <h3 className="font-bold text-foreground text-sm mb-3">Key Principles</h3>
      <ul className="space-y-2 text-xs text-muted-foreground">
        <li className="flex items-start gap-2">
          <CheckCircle size={12} className="text-green-600 mt-0.5 flex-shrink-0" />
          <span>Proactive communication</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle size={12} className="text-green-600 mt-0.5 flex-shrink-0" />
          <span>Multi-channel delivery</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle size={12} className="text-green-600 mt-0.5 flex-shrink-0" />
          <span>User preference respect</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle size={12} className="text-green-600 mt-0.5 flex-shrink-0" />
          <span>Actionable content</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle size={12} className="text-green-600 mt-0.5 flex-shrink-0" />
          <span>Privacy protection</span>
        </li>
      </ul>
    </div>
  );
}

function Resources() {
  return (
    <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
      <div className="bg-pink-50 border-b-2 border-pink-200 px-4 py-3">
        <h3 className="font-bold text-foreground text-sm">Resources</h3>
      </div>
      <div className="p-4 space-y-2 text-sm">
        <Link to="/patterns/notifications" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
          <ArrowRight size={14} />
          <span>All Patterns</span>
        </Link>
        <Link to="/components" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
          <ArrowRight size={14} />
          <span>Alert Components</span>
        </Link>
        <Link to="/accessibility" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
          <ArrowRight size={14} />
          <span>Accessibility Guide</span>
        </Link>
      </div>
    </div>
  );
}
