import { Link } from "react-router";
import { MessageSquare, CheckCircle, AlertCircle, ArrowRight, Info, Users, Shield } from "lucide-react";

export default function ContactSupportOverview() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-to-br from-blue-50 via-white to-purple-50 border-b-2 border-border">
        <div className="max-w-[1400px] mx-auto px-12 py-12">
          <div className="mb-6">
            <Link to="/patterns/contact-support" className="text-sm text-muted-foreground hover:text-primary">
              ← Back to Contact & Support Patterns
            </Link>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 border-2 border-border rounded flex items-center justify-center">
              <Info size={32} className="text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-3">Pattern Overview</h1>
              <p className="text-lg text-muted-foreground">
                Understanding when and how to use Contact & Support patterns in government digital services
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
              <h2 className="text-2xl font-bold text-foreground mb-6 border-l-4 border-blue-500 pl-4">
                Purpose of Contact & Support Patterns
              </h2>
              <div className="bg-card border-2 border-border rounded-lg p-8">
                <p className="text-muted-foreground mb-6">
                  Contact and Support patterns provide structured, accessible channels for citizens to 
                  communicate with government departments across various service scenarios. These patterns 
                  ensure consistent user experience while enabling appropriate routing, prioritization, 
                  and case management.
                </p>
                <div className="grid grid-cols-3 gap-6">
                  <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
                    <h3 className="font-bold text-foreground mb-3">Citizen Benefits</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Clear path to assistance</li>
                      <li>• Predictable response times</li>
                      <li>• Case tracking capability</li>
                      <li>• Multi-channel options</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
                    <h3 className="font-bold text-foreground mb-3">Department Benefits</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Efficient case routing</li>
                      <li>• Priority management</li>
                      <li>• Reduced manual triage</li>
                      <li>• Analytics & insights</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-6">
                    <h3 className="font-bold text-foreground mb-3">System Benefits</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Reusable components</li>
                      <li>• Consistent workflows</li>
                      <li>• Scalable architecture</li>
                      <li>• Compliance adherence</li>
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
                  title="General Contact Form"
                  when={[
                    "User has a simple question or inquiry",
                    "No specific service or case reference",
                    "Non-urgent communication",
                    "First-time contact with department"
                  ]}
                  notWhen={[
                    "Urgent or time-sensitive issues",
                    "Escalation of existing case",
                    "Technical service support needed"
                  ]}
                  color="blue"
                />
                <PatternGuide
                  title="Service Support Request"
                  when={[
                    "User needs help with ongoing service",
                    "Application status inquiry",
                    "Technical issues with digital service",
                    "Service modification requests"
                  ]}
                  notWhen={[
                    "General information questions",
                    "New service application",
                    "Complaint or grievance"
                  ]}
                  color="green"
                />
                <PatternGuide
                  title="Department Inquiry Form"
                  when={[
                    "Department-specific questions",
                    "Policy or procedure clarification",
                    "Document requirement queries",
                    "Eligibility information"
                  ]}
                  notWhen={[
                    "Cross-department issues",
                    "Urgent assistance needed",
                    "Complaint submission"
                  ]}
                  color="purple"
                />
                <PatternGuide
                  title="Escalation Contact Form"
                  when={[
                    "Previous request unresolved",
                    "Service level agreement breached",
                    "Formal complaint escalation",
                    "Appeal or review request"
                  ]}
                  notWhen={[
                    "First contact attempt",
                    "No previous case reference",
                    "General feedback"
                  ]}
                  color="orange"
                />
                <PatternGuide
                  title="Callback Request"
                  when={[
                    "Complex issue requiring discussion",
                    "User prefers phone communication",
                    "Multiple related questions",
                    "Scheduled consultation needed"
                  ]}
                  notWhen={[
                    "Simple text-based queries",
                    "Immediate response needed",
                    "User unavailable for calls"
                  ]}
                  color="teal"
                />
                <PatternGuide
                  title="Urgent / Priority Contact"
                  when={[
                    "Time-critical issues",
                    "Emergency situations",
                    "Legal deadlines approaching",
                    "High-impact service disruption"
                  ]}
                  notWhen={[
                    "Routine inquiries",
                    "Non-time-sensitive requests",
                    "General information seeking"
                  ]}
                  color="red"
                />
                <PatternGuide
                  title="Feedback + Contact Hybrid"
                  when={[
                    "User wants to share experience AND get response",
                    "Suggestions requiring follow-up",
                    "Service improvement feedback with questions",
                    "Combined feedback-inquiry scenarios"
                  ]}
                  notWhen={[
                    "Anonymous feedback desired",
                    "No follow-up contact wanted",
                    "Pure complaint submission"
                  ]}
                  color="indigo"
                />
                <PatternGuide
                  title="Assisted Support Request"
                  when={[
                    "User requires helper/intermediary",
                    "Low digital literacy scenarios",
                    "Accessibility accommodations needed",
                    "CSC or kiosk-based submissions"
                  ]}
                  notWhen={[
                    "User can independently complete form",
                    "No assistance infrastructure available",
                    "Sensitive personal issues"
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
                    Contact & Support patterns integrate with broader service delivery flows at multiple touchpoints:
                  </p>
                  <div className="space-y-6">
                    <FlowIntegration
                      title="Support Flow"
                      description="Embedded within service journeys to provide contextual assistance"
                      touchpoints={[
                        "Pre-application questions",
                        "In-progress assistance",
                        "Post-submission support",
                        "Status inquiry"
                      ]}
                    />
                    <FlowIntegration
                      title="Grievance Flow"
                      description="Escalation path for unresolved issues or service failures"
                      touchpoints={[
                        "Initial complaint submission",
                        "Follow-up communication",
                        "Escalation requests",
                        "Resolution tracking"
                      ]}
                    />
                    <FlowIntegration
                      title="Escalation Flow"
                      description="Progressive escalation based on severity, SLA breach, or priority"
                      touchpoints={[
                        "Tier 1: Department support",
                        "Tier 2: Supervisor review",
                        "Tier 3: Senior management",
                        "Tier 4: Ombudsman/appeal"
                      ]}
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Accessibility Considerations */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6 border-l-4 border-orange-500 pl-4">
                Accessibility Considerations
              </h2>
              <div className="bg-orange-50 border-2 border-orange-300 rounded-lg p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                      <Shield size={20} className="text-orange-600" />
                      WCAG 2.1 Level AA Compliance
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Keyboard navigation for all form interactions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Screen reader compatible labels and instructions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Error messages linked to form fields (aria-describedby)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Minimum 4.5:1 color contrast for text</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Focus indicators on all interactive elements</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                      <Users size={20} className="text-orange-600" />
                      Inclusive Design Features
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Multi-language support (22 scheduled languages)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Plain language content (reading level: 8th grade)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Assisted mode for users needing help</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Mobile-first responsive design</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Save and resume for long forms</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Governance Considerations */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6 border-l-4 border-red-500 pl-4">
                Governance Considerations
              </h2>
              <div className="bg-card border-2 border-border rounded-lg p-8">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-bold text-foreground mb-4">Data Privacy & Security</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Personal data collection minimization</li>
                      <li>• Encrypted transmission (TLS 1.3)</li>
                      <li>• Secure storage with access controls</li>
                      <li>• Data retention policies (as per department)</li>
                      <li>• PII masking in logs and analytics</li>
                      <li>• Right to deletion compliance</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-4">Response & SLA Management</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Priority-based SLA assignment</li>
                      <li>• Standard: 5-7 business days</li>
                      <li>• Priority: 2-3 business days</li>
                      <li>• Urgent: Same day or 24 hours</li>
                      <li>• Automated escalation on SLA breach</li>
                      <li>• Citizen notification at each stage</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-4">Compliance Requirements</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Right to Information Act, 2005</li>
                      <li>• Digital India guidelines</li>
                      <li>• GIGW (Government India Guidelines for Websites)</li>
                      <li>• IT Act, 2000 amendments</li>
                      <li>• State-specific grievance regulations</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-4">Audit & Reporting</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Comprehensive audit trail</li>
                      <li>• Case history and timeline tracking</li>
                      <li>• Response time analytics</li>
                      <li>• Department performance metrics</li>
                      <li>• Citizen satisfaction feedback</li>
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
    blue: 'border-blue-300 bg-blue-50',
    green: 'border-green-300 bg-green-50',
    purple: 'border-purple-300 bg-purple-50',
    orange: 'border-orange-300 bg-orange-50',
    teal: 'border-teal-300 bg-teal-50',
    red: 'border-red-300 bg-red-50',
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
    <div className="border-l-4 border-blue-500 pl-6">
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
      <div className="bg-blue-50 border-b-2 border-blue-200 px-4 py-3">
        <h3 className="font-bold text-foreground text-sm">Quick Navigation</h3>
      </div>
      <div className="p-4 space-y-2 text-sm">
        <a href="#purpose" className="block text-muted-foreground hover:text-primary">Purpose</a>
        <a href="#pattern-selection" className="block text-muted-foreground hover:text-primary">Pattern Selection</a>
        <a href="#service-flows" className="block text-muted-foreground hover:text-primary">Service Flows</a>
        <a href="#accessibility" className="block text-muted-foreground hover:text-primary">Accessibility</a>
        <a href="#governance" className="block text-muted-foreground hover:text-primary">Governance</a>
      </div>
    </div>
  );
}

function KeyPrinciples() {
  return (
    <div className="bg-green-50 border-2 border-green-300 rounded-lg p-4">
      <h3 className="font-bold text-foreground text-sm mb-3">Key Principles</h3>
      <ul className="space-y-2 text-xs text-muted-foreground">
        <li className="flex items-start gap-2">
          <CheckCircle size={12} className="text-green-600 mt-0.5 flex-shrink-0" />
          <span>Intent-based routing</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle size={12} className="text-green-600 mt-0.5 flex-shrink-0" />
          <span>Progressive disclosure</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle size={12} className="text-green-600 mt-0.5 flex-shrink-0" />
          <span>Clear acknowledgment</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle size={12} className="text-green-600 mt-0.5 flex-shrink-0" />
          <span>Case tracking transparency</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle size={12} className="text-green-600 mt-0.5 flex-shrink-0" />
          <span>Multi-channel support</span>
        </li>
      </ul>
    </div>
  );
}

function Resources() {
  return (
    <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
      <div className="bg-purple-50 border-b-2 border-purple-200 px-4 py-3">
        <h3 className="font-bold text-foreground text-sm">Resources</h3>
      </div>
      <div className="p-4 space-y-2 text-sm">
        <Link to="/patterns/contact-support" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
          <ArrowRight size={14} />
          <span>All Patterns</span>
        </Link>
        <Link to="/patterns/forms" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
          <ArrowRight size={14} />
          <span>Form Patterns</span>
        </Link>
        <Link to="/components/validation" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
          <ArrowRight size={14} />
          <span>Validation Rules</span>
        </Link>
      </div>
    </div>
  );
}
