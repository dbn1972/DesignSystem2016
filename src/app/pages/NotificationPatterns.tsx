import { Link } from "react-router";
import { Bell, Mail, MessageSquare, Smartphone, AlertTriangle, Clock, Settings, ArrowRight, CheckCircle, Zap } from "lucide-react";

export default function NotificationPatterns() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-to-br from-purple-50 via-white to-pink-50 border-b-4 border-[#FF9933]">
        <div className="max-w-[1400px] mx-auto px-12 py-16">
          <div className="mb-6">
            <Link to="/pattern-library" className="text-sm text-muted-foreground hover:text-primary">
              ← Back to Pattern Library
            </Link>
          </div>
          <div className="flex items-start justify-between">
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 border-3 border-white shadow-lg rounded-lg flex items-center justify-center">
                  <Bell size={40} className="text-white" />
                </div>
                <div>
                  <div className="text-sm font-bold text-primary mb-2 uppercase tracking-wide">Pattern Family</div>
                  <h1 className="text-5xl font-bold text-foreground">Notification System Patterns</h1>
                </div>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                Advanced notification patterns that go beyond simple alerts. Multi-channel delivery (SMS, Email, In-app), 
                actionable notifications with direct response capability, smart reminder sequences, escalation chains, 
                and granular user preferences. Keep citizens informed proactively while respecting their communication preferences.
              </p>
              <div className="flex items-center gap-8 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-muted-foreground">Pattern Family: <span className="font-bold text-foreground">Communication</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                  <span className="text-muted-foreground">Patterns: <span className="font-bold text-foreground">6 Interactive Flows</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Focus: <span className="font-bold text-foreground">Multi-Channel</span></span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="px-8 py-4 bg-purple-500 text-white rounded-lg font-bold text-center shadow-lg">
                PROACTIVE
              </div>
              <div className="px-8 py-4 bg-card border-2 border-[#138808] text-[#138808] rounded-lg font-bold text-center">
                ACTIONABLE
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Quick Access */}
      <div className="bg-card border-b-2 border-border">
        <div className="max-w-[1400px] mx-auto px-12 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <span className="font-bold text-foreground">Quick Access:</span>
              <Link to="/patterns/notifications/overview" className="text-primary hover:underline text-sm font-medium">
                Pattern Overview
              </Link>
              <Link to="#all-patterns" className="text-primary hover:underline text-sm font-medium">
                View All Patterns
              </Link>
            </div>
            <div className="text-sm text-muted-foreground">
              Last updated: April 2026
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-[1400px] mx-auto px-12 py-12">
        
        {/* System Overview */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-pink-50 to-purple-50 border-2 border-border rounded-lg p-10">
            <h2 className="text-3xl font-bold text-foreground mb-6">Why Advanced Notification Systems?</h2>
            <div className="grid grid-cols-3 gap-8">
              <div>
                <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                  <CheckCircle size={20} className="text-green-600" />
                  Citizen Benefits
                </h3>
                <p className="text-sm text-muted-foreground">
                  Stay informed about application status, upcoming deadlines, and required actions without having to check 
                  portals repeatedly. Choose preferred channels (SMS/Email/App) and control frequency and types of notifications.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                  <CheckCircle size={20} className="text-green-600" />
                  Service Efficiency
                </h3>
                <p className="text-sm text-muted-foreground">
                  Proactive notifications reduce status inquiry calls by 70%, improve completion rates by reminding citizens 
                  of pending actions, and enable direct action from notifications (upload document, make payment).
                </p>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                  <CheckCircle size={20} className="text-green-600" />
                  System Intelligence
                </h3>
                <p className="text-sm text-muted-foreground">
                  Smart reminder sequences (3 days before, 1 day before, day-of deadline), escalation chains for urgent matters, 
                  and analytics on notification effectiveness to optimize communication strategies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pattern Categories */}
        <section className="mb-16" id="all-patterns">
          <h2 className="text-3xl font-bold text-foreground mb-8 border-l-4 border-purple-500 pl-4">
            Pattern Categories
          </h2>

          {/* Notification Management Patterns */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Bell size={24} className="text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Notification Management Patterns</h3>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <PatternCard
                title="Notification Center"
                description="Unified inbox for all notifications with filtering, search, bulk actions, and read/unread management"
                icon={<Bell size={32} className="text-purple-600" />}
                link="/patterns/notifications/notification-center"
                complexity="High"
                channels="In-app"
                useCases={["View all alerts", "Mark as read", "Filter by type"]}
              />
              <PatternCard
                title="Actionable Notifications"
                description="Notifications with embedded actions - upload document, approve request, make payment directly from notification"
                icon={<Zap size={32} className="text-orange-600" />}
                link="/patterns/notifications/actionable-notifications"
                complexity="High"
                channels="All channels"
                useCases={["Quick actions", "Direct response", "Inline completion"]}
              />
            </div>
          </div>

          {/* Channel-Specific Patterns */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <MessageSquare size={24} className="text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Channel-Specific Patterns</h3>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <PatternCard
                title="SMS / Email / In-app Patterns"
                description="Channel-appropriate notification design with character limits, formatting, deep links, and fallback strategies"
                icon={<Smartphone size={32} className="text-blue-600" />}
                link="/patterns/notifications/multi-channel"
                complexity="Medium"
                channels="SMS, Email, In-app"
                useCases={["SMS alerts", "Email digests", "Push notifications"]}
              />
              <PatternCard
                title="Notification Preferences"
                description="Granular user control over notification types, channels, frequency, and quiet hours with smart defaults"
                icon={<Settings size={32} className="text-green-600" />}
                link="/patterns/notifications/preferences"
                complexity="Medium"
                channels="All channels"
                useCases={["Channel selection", "Frequency control", "Quiet hours"]}
              />
            </div>
          </div>

          {/* Time-Based & Urgency Patterns */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Clock size={24} className="text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Time-Based & Urgency Patterns</h3>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <PatternCard
                title="Reminder Patterns"
                description="Smart reminder sequences for deadlines, appointments, pending tasks with adaptive timing and frequency"
                icon={<Clock size={32} className="text-teal-600" />}
                link="/patterns/notifications/reminders"
                complexity="Medium"
                channels="All channels"
                useCases={["Deadline reminders", "Appointment alerts", "Task nudges"]}
              />
              <PatternCard
                title="Escalation Alerts"
                description="Urgent escalation notification chains with increasing urgency, multiple channels, and fallback contacts"
                icon={<AlertTriangle size={32} className="text-red-600" />}
                link="/patterns/notifications/escalation-alerts"
                complexity="High"
                channels="All channels + Phone"
                useCases={["Urgent alerts", "Critical updates", "Emergency notifications"]}
              />
            </div>
          </div>
        </section>

        {/* Implementation Guidelines */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 border-l-4 border-[#138808] pl-4">
            Implementation Guidelines
          </h2>
          <div className="grid grid-cols-3 gap-6">
            <GuidelineCard
              title="Content Clarity"
              points={[
                "Clear, actionable subject lines",
                "Essential info in first 2 lines",
                "Plain language, no jargon",
                "Include reference numbers",
                "Specify next steps clearly"
              ]}
            />
            <GuidelineCard
              title="Multi-Channel Strategy"
              points={[
                "SMS for time-sensitive alerts",
                "Email for detailed information",
                "In-app for task management",
                "Consistent message across channels",
                "Fallback to alternate channels"
              ]}
            />
            <GuidelineCard
              title="User Control"
              points={[
                "Easy unsubscribe/manage preferences",
                "Granular notification type control",
                "Frequency limits (max 3/day default)",
                "Quiet hours (10 PM - 8 AM)",
                "Channel preferences per type"
              ]}
            />
          </div>
        </section>

        {/* Notification Types Taxonomy */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 border-l-4 border-blue-500 pl-4">
            Notification Types Taxonomy
          </h2>
          <div className="bg-card border-2 border-border rounded-lg p-8">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-foreground mb-4">By Urgency</h3>
                <div className="space-y-3">
                  <NotificationType 
                    type="Critical" 
                    color="red" 
                    description="Immediate action required - deadline today, payment failed"
                    channels="SMS + Email + In-app + (Phone for escalation)"
                  />
                  <NotificationType 
                    type="High Priority" 
                    color="orange" 
                    description="Action needed soon - deadline in 3 days, document required"
                    channels="SMS + Email + In-app"
                  />
                  <NotificationType 
                    type="Medium Priority" 
                    color="blue" 
                    description="Status update - application approved, document verified"
                    channels="Email + In-app"
                  />
                  <NotificationType 
                    type="Low Priority" 
                    color="gray" 
                    description="Informational - new service available, newsletter"
                    channels="Email only (weekly digest)"
                  />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-4">By Category</h3>
                <div className="space-y-3">
                  <NotificationType 
                    type="Status Updates" 
                    color="blue" 
                    description="Application status changed, document verified"
                    channels="Default: Email + In-app"
                  />
                  <NotificationType 
                    type="Action Required" 
                    color="orange" 
                    description="Upload document, make payment, provide information"
                    channels="Default: SMS + Email + In-app"
                  />
                  <NotificationType 
                    type="Reminders" 
                    color="purple" 
                    description="Deadline approaching, appointment reminder, renewal due"
                    channels="Default: SMS + Email"
                  />
                  <NotificationType 
                    type="System Alerts" 
                    color="teal" 
                    description="Maintenance scheduled, service outage, policy changes"
                    channels="Default: Email + In-app"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Notification Intelligence Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 border-l-4 border-purple-500 pl-4">
            Notification Intelligence Features
          </h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-card border-2 border-border rounded-lg p-8">
              <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                <Zap size={20} className="text-yellow-600" />
                Smart Delivery
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Optimal timing:</strong> Send during user's active hours (ML-based)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Batching:</strong> Group low-priority notifications into daily digest</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Frequency limits:</strong> Max 3 notifications per day (configurable)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Channel fallback:</strong> SMS if email bounces, email if SMS fails</span>
                </li>
              </ul>
            </div>
            <div className="bg-card border-2 border-border rounded-lg p-8">
              <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                <Bell size={20} className="text-purple-600" />
                Smart Content
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Personalization:</strong> Use citizen name, service type, location</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Language preference:</strong> Deliver in user's preferred language</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Deep linking:</strong> Direct link to relevant page/action</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Context awareness:</strong> Show related information inline</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Notification Templates */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 border-l-4 border-pink-500 pl-4">
            Standard Notification Templates
          </h2>
          <div className="bg-card border-2 border-border rounded-lg p-8">
            <div className="space-y-4">
              <TemplateExample
                title="Status Update"
                sms="[Govt] DL-2026-89012: Your Driving License application is APPROVED. Certificate will be dispatched in 2 days. Track: bit.ly/xyz"
                email="Subject: Application Approved - Driving License Renewal (DL-2026-89012)"
                inapp="Your Driving License Renewal application has been approved! Your license will be dispatched within 2 working days."
              />
              <TemplateExample
                title="Action Required"
                sms="[Govt] DL-2026-89012: Upload Income Certificate by Apr 12. Upload now: bit.ly/abc"
                email="Subject: Action Required - Upload Income Certificate by April 12"
                inapp="Upload Income Certificate required. Deadline: Apr 12, 2026 (2 days left)"
              />
              <TemplateExample
                title="Reminder"
                sms="[Govt] Reminder: Payment due tomorrow for DL-2026-89012 (₹500). Pay now: bit.ly/def"
                email="Subject: Reminder - Payment Due Tomorrow (DL-2026-89012)"
                inapp="Payment reminder: ₹500 due tomorrow for Driving License application"
              />
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-8 border-l-4 border-primary pl-4">
            Related Resources
          </h2>
          <div className="bg-card border-2 border-border rounded-lg p-8">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-foreground mb-4">Related Pattern Families</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link to="/patterns/dashboard" className="text-primary hover:underline flex items-center gap-2">
                      <ArrowRight size={14} />
                      <span>Dashboard & Personalization Patterns</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/patterns/status-lifecycle" className="text-primary hover:underline flex items-center gap-2">
                      <ArrowRight size={14} />
                      <span>Status & Lifecycle Patterns</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/patterns/contact-support" className="text-primary hover:underline flex items-center gap-2">
                      <ArrowRight size={14} />
                      <span>Contact & Support Patterns</span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-4">Design System Components</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link to="/components" className="text-primary hover:underline flex items-center gap-2">
                      <ArrowRight size={14} />
                      <span>Alert & Badge Components</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/components" className="text-primary hover:underline flex items-center gap-2">
                      <ArrowRight size={14} />
                      <span>Toggle & Switch Components</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/components" className="text-primary hover:underline flex items-center gap-2">
                      <ArrowRight size={14} />
                      <span>Card Components</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}

// ==================== COMPONENTS ====================

function PatternCard({ title, description, icon, link, complexity, channels, useCases }: {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  complexity: string;
  channels: string;
  useCases: string[];
}) {
  return (
    <Link to={link} className="block group">
      <div className="bg-card border-2 border-border rounded-lg p-6 h-full transition-all hover:border-primary hover:shadow-lg">
        <div className="flex items-start gap-4 mb-4">
          <div className="p-3 bg-background border-2 border-border rounded-lg group-hover:border-primary transition-colors">
            {icon}
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
              {title}
            </h4>
            <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
              <span className="px-2 py-1 bg-muted rounded">
                {complexity}
              </span>
              <span className="text-purple-600">📱 {channels}</span>
            </div>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mb-4">
          {description}
        </p>
        <div className="mb-4">
          <div className="text-xs font-bold text-muted-foreground mb-2">Common Use Cases:</div>
          <ul className="space-y-1">
            {useCases.map((useCase, i) => (
              <li key={i} className="text-xs text-muted-foreground flex items-start gap-1">
                <span className="text-[#138808]">•</span>
                <span>{useCase}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
          <span>View Pattern</span>
          <ArrowRight size={16} />
        </div>
      </div>
    </Link>
  );
}

function GuidelineCard({ title, points }: {
  title: string;
  points: string[];
}) {
  return (
    <div className="bg-card border-2 border-border rounded-lg p-6">
      <h3 className="font-bold text-foreground mb-4">{title}</h3>
      <ul className="space-y-2">
        {points.map((point, i) => (
          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
            <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function NotificationType({ type, color, description, channels }: {
  type: string;
  color: string;
  description: string;
  channels: string;
}) {
  const colors = {
    red: 'bg-red-100 text-red-800 border-red-300',
    orange: 'bg-orange-100 text-orange-800 border-orange-300',
    blue: 'bg-blue-100 text-blue-800 border-blue-300',
    gray: 'bg-muted text-foreground border-border',
    purple: 'bg-purple-100 text-purple-800 border-purple-300',
    teal: 'bg-teal-100 text-teal-800 border-teal-300'
  };

  return (
    <div className="border-l-4 border-border pl-4">
      <div className="flex items-center gap-2 mb-2">
        <span className={`px-3 py-1 text-xs font-bold rounded border-2 ${colors[color as keyof typeof colors]}`}>
          {type}
        </span>
      </div>
      <p className="text-sm text-muted-foreground mb-1">{description}</p>
      <p className="text-xs text-muted-foreground">{channels}</p>
    </div>
  );
}

function TemplateExample({ title, sms, email, inapp }: {
  title: string;
  sms: string;
  email: string;
  inapp: string;
}) {
  return (
    <div className="bg-background border-2 border-border rounded-lg p-6">
      <h4 className="font-bold text-foreground mb-4">{title}</h4>
      <div className="space-y-3">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <MessageSquare size={16} className="text-blue-600" />
            <span className="text-xs font-bold text-muted-foreground">SMS (160 chars)</span>
          </div>
          <div className="bg-card p-3 rounded text-sm text-foreground font-mono">
            {sms}
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Mail size={16} className="text-green-600" />
            <span className="text-xs font-bold text-muted-foreground">Email Subject</span>
          </div>
          <div className="bg-card p-3 rounded text-sm text-foreground">
            {email}
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Bell size={16} className="text-purple-600" />
            <span className="text-xs font-bold text-muted-foreground">In-App Notification</span>
          </div>
          <div className="bg-card p-3 rounded text-sm text-foreground">
            {inapp}
          </div>
        </div>
      </div>
    </div>
  );
}
