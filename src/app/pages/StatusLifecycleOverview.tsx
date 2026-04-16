import { Link } from "react-router";
import { Activity, CheckCircle, AlertCircle, ArrowRight, Info, TrendingUp } from "lucide-react";

export default function StatusLifecycleOverview() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-to-br from-blue-50 via-white to-green-50 border-b-2 border-border">
        <div className="max-w-[1400px] mx-auto px-12 py-12">
          <div className="mb-6">
            <Link to="/patterns/status-lifecycle" className="text-sm text-muted-foreground hover:text-primary">
              ← Back to Status & Lifecycle Patterns
            </Link>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 border-2 border-border rounded flex items-center justify-center">
              <Info size={32} className="text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-3">Pattern Overview</h1>
              <p className="text-lg text-muted-foreground">
                Understanding status and lifecycle intelligence in government digital services
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
                Purpose of Lifecycle Patterns
              </h2>
              <div className="bg-card border-2 border-border rounded-lg p-8">
                <p className="text-muted-foreground mb-6">
                  Status and Lifecycle patterns transform opaque bureaucratic processes into transparent, understandable journeys. 
                  Instead of showing "Pending" for weeks, these patterns provide granular visibility into what's happening, 
                  who's responsible, why there are delays, and when to expect resolution.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-red-50 dark:bg-red-950/30 border-2 border-red-200 dark:border-red-800 rounded-lg p-6">
                    <h3 className="font-bold text-foreground mb-3">Without Lifecycle Intelligence</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• "Status: Pending" for 3 weeks</li>
                      <li>• No idea what's happening</li>
                      <li>• Constant support calls</li>
                      <li>• Citizen anxiety and distrust</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 dark:bg-green-950/30 border-2 border-green-200 dark:border-green-800 rounded-lg p-6">
                    <h3 className="font-bold text-foreground mb-3">With Lifecycle Intelligence</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• See exact stage and progress</li>
                      <li>• Know responsible department</li>
                      <li>• Understand delays with reasons</li>
                      <li>• Clear time expectations</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6">
                    <h3 className="font-bold text-foreground mb-3">Impact</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• 60% reduction in support calls</li>
                      <li>• Higher citizen satisfaction</li>
                      <li>• Department accountability</li>
                      <li>• Improved completion rates</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Pattern Selection Guide */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6 border-l-4 border-green-500 pl-4">
                When to Use Each Pattern
              </h2>
              <div className="space-y-4">
                <PatternGuide
                  title="Timeline View"
                  when={[
                    "Need complete audit trail of all events",
                    "Show chronological history of status changes",
                    "Display who did what and when",
                    "Complex multi-department workflows"
                  ]}
                  notWhen={[
                    "Simple single-step processes",
                    "No significant event history",
                    "Privacy concerns about actor visibility"
                  ]}
                  color="blue"
                />
                <PatternGuide
                  title="Step Progress Tracker"
                  when={[
                    "Well-defined sequential steps",
                    "Predictable workflow stages",
                    "User needs to know progress %",
                    "Multiple approval levels"
                  ]}
                  notWhen={[
                    "Non-linear workflows",
                    "Highly variable process paths",
                    "Too many steps (>8-10)"
                  ]}
                  color="green"
                />
                <PatternGuide
                  title="Multi-status Indicators"
                  when={[
                    "Complex states beyond simple pending/approved",
                    "Sub-statuses and conditions exist",
                    "Different departments have different views",
                    "Parallel processing tracks"
                  ]}
                  notWhen={[
                    "Simple binary states (approved/rejected)",
                    "Linear single-track workflow",
                    "Users don't need granular detail"
                  ]}
                  color="purple"
                />
                <PatternGuide
                  title="Delayed / Pending State"
                  when={[
                    "Processing exceeds normal SLA",
                    "Waiting for external dependencies",
                    "Document verification pending",
                    "Need to communicate reasons for delay"
                  ]}
                  notWhen={[
                    "Within normal processing time",
                    "No delays to communicate",
                    "Instant processing services"
                  ]}
                  color="orange"
                />
                <PatternGuide
                  title="Escalated State"
                  when={[
                    "Application escalated to senior officer",
                    "Complaint or grievance filed",
                    "Priority/urgent processing",
                    "VIP or special category applications"
                  ]}
                  notWhen={[
                    "Standard processing",
                    "No escalation mechanism exists",
                    "Privacy concerns about escalation visibility"
                  ]}
                  color="red"
                />
                <PatternGuide
                  title="SLA / Time Expectation Display"
                  when={[
                    "Committed processing timelines exist",
                    "Citizens need deadline awareness",
                    "Track department accountability",
                    "Time-sensitive applications"
                  ]}
                  notWhen={[
                    "No defined SLAs",
                    "Highly variable processing times",
                    "Instant or real-time services"
                  ]}
                  color="teal"
                />
                <PatternGuide
                  title="Batch Status (Multiple Applications)"
                  when={[
                    "User has multiple active applications",
                    "Family or group applications",
                    "Bulk submissions common",
                    "Need aggregate status view"
                  ]}
                  notWhen={[
                    "Single application scenarios",
                    "No batch processing capability",
                    "Each application completely independent"
                  ]}
                  color="indigo"
                />
              </div>
            </section>

            {/* Status State Machine */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6 border-l-4 border-purple-500 pl-4">
                Status State Machine
              </h2>
              <div className="bg-card border-2 border-border rounded-lg p-8">
                <p className="text-muted-foreground mb-6">
                  Application statuses follow a state machine with defined transitions. This ensures consistency and prevents invalid state changes.
                </p>
                <div className="bg-background rounded-lg p-6">
                  <div className="space-y-4">
                    <StateTransition
                      from="Submitted"
                      to={["Under Review", "Action Required"]}
                      description="Initial submission moves to review or requires immediate action"
                    />
                    <StateTransition
                      from="Under Review"
                      to={["Verification Pending", "Processing", "Action Required", "On Hold"]}
                      description="Review can trigger verification, processing, or identify issues"
                    />
                    <StateTransition
                      from="Verification Pending"
                      to={["Processing", "Action Required", "Delayed"]}
                      description="Verification completes, needs action, or gets delayed"
                    />
                    <StateTransition
                      from="Processing"
                      to={["Approved", "Rejected", "Partially Approved", "Escalated"]}
                      description="Processing concludes with decision or escalation"
                    />
                    <StateTransition
                      from="Action Required"
                      to={["Under Review", "Rejected"]}
                      description="User completes action for re-review or application rejected"
                    />
                    <StateTransition
                      from="Approved"
                      to={["Ready for Collection", "Dispatched"]}
                      description="Approval leads to output delivery"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Transparency Best Practices */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6 border-l-4 border-orange-500 pl-4">
                Transparency Best Practices
              </h2>
              <div className="bg-orange-50 dark:bg-orange-950/30 border-2 border-orange-300 rounded-lg p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-bold text-foreground mb-3">Always Show</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Current status with clear label</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>What's happening right now</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Which department/stage it's at</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Expected timeline or next steps</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Last updated timestamp</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Actions citizen can take (if any)</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-3">Explain Clearly</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Why application is delayed (specific reason)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>What citizen needs to do (if action required)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Why application was rejected (detailed feedback)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>How to escalate or appeal</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>When to expect next update</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>How to contact for queries</span>
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
    blue: 'border-blue-300 bg-blue-50',
    green: 'border-green-300 bg-green-50',
    purple: 'border-purple-300 bg-purple-50',
    orange: 'border-orange-300 bg-orange-50',
    red: 'border-red-300 bg-red-50',
    teal: 'border-teal-300 bg-teal-50',
    indigo: 'border-indigo-300 bg-indigo-50'
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

function StateTransition({ from, to, description }: {
  from: string;
  to: string[];
  description: string;
}) {
  return (
    <div className="border-l-4 border-blue-500 pl-4">
      <div className="flex items-center gap-3 mb-2">
        <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-bold rounded border-2 border-blue-300">
          {from}
        </span>
        <ArrowRight size={16} className="text-gray-400" />
        <div className="flex flex-wrap gap-2">
          {to.map((state, i) => (
            <span key={i} className="px-3 py-1 bg-green-100 text-green-800 text-sm font-bold rounded border-2 border-green-300">
              {state}
            </span>
          ))}
        </div>
      </div>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

function QuickNavigation() {
  return (
    <div className="bg-card border-2 border-border rounded-lg overflow-hidden sticky top-24">
      <div className="bg-blue-50 dark:bg-blue-950/30 border-b-2 border-blue-200 dark:border-blue-800 px-4 py-3">
        <h3 className="font-bold text-foreground text-sm">Quick Navigation</h3>
      </div>
      <div className="p-4 space-y-2 text-sm">
        <a href="#purpose" className="block text-muted-foreground hover:text-primary">Purpose</a>
        <a href="#pattern-selection" className="block text-muted-foreground hover:text-primary">Pattern Selection</a>
        <a href="#state-machine" className="block text-muted-foreground hover:text-primary">State Machine</a>
        <a href="#transparency" className="block text-muted-foreground hover:text-primary">Transparency</a>
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
          <span>Maximum transparency</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle size={12} className="text-green-600 mt-0.5 flex-shrink-0" />
          <span>Clear time expectations</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle size={12} className="text-green-600 mt-0.5 flex-shrink-0" />
          <span>Explain delays & reasons</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle size={12} className="text-green-600 mt-0.5 flex-shrink-0" />
          <span>Department accountability</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle size={12} className="text-green-600 mt-0.5 flex-shrink-0" />
          <span>Proactive notifications</span>
        </li>
      </ul>
    </div>
  );
}

function Resources() {
  return (
    <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
      <div className="bg-green-50 dark:bg-green-950/30 border-b-2 border-green-200 dark:border-green-800 px-4 py-3">
        <h3 className="font-bold text-foreground text-sm">Resources</h3>
      </div>
      <div className="p-4 space-y-2 text-sm">
        <Link to="/patterns/status-lifecycle" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
          <ArrowRight size={14} />
          <span>All Patterns</span>
        </Link>
        <Link to="/components" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
          <ArrowRight size={14} />
          <span>Timeline Components</span>
        </Link>
        <Link to="/accessibility" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
          <ArrowRight size={14} />
          <span>Accessibility Guide</span>
        </Link>
      </div>
    </div>
  );
}
