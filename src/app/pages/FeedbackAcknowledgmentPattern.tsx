import { Link } from "react-router";
import { CheckCircle, ArrowLeft, Bell, Mail, Copy, ExternalLink } from "lucide-react";

export default function FeedbackAcknowledgmentPattern() {
  const referenceId = "FB-2026-04-876543";

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-gradient-to-br from-purple-50 via-white to-pink-50 border-b-4 border-[#FF9933]">
        <div className="max-w-[1400px] mx-auto px-12 py-16">
          <div className="mb-6">
            <Link to="/patterns/feedback" className="text-sm text-muted-foreground hover:text-primary">
              ← Back to Feedback & Rating Patterns
            </Link>
          </div>
          <div className="flex items-start justify-between">
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 border-3 border-white shadow-lg rounded-lg flex items-center justify-center">
                  <CheckCircle size={40} className="text-white" />
                </div>
                <div>
                  <div className="text-sm font-bold text-primary mb-2 uppercase tracking-wide">Feedback Pattern</div>
                  <h1 className="text-5xl font-bold text-foreground">Feedback Acknowledgment</h1>
                </div>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                Confirmation screens and follow-up communication patterns that acknowledge feedback receipt,
                provide tracking references, and set expectations for resolution timelines.
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto px-12 py-12">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-8">
            <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-6 mb-6">
              <h2 className="font-bold text-foreground mb-2">Interactive Demo</h2>
              <p className="text-sm text-muted-foreground">
                Example acknowledgment screen shown after feedback submission.
              </p>
            </div>

            {/* Acknowledgment Screen Demo */}
            <div className="bg-card border-2 border-border rounded-lg p-12">
              <div className="text-center max-w-2xl mx-auto">
                {/* Success Icon */}
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={48} className="text-green-600" />
                </div>

                {/* Heading */}
                <h2 className="text-3xl font-bold text-foreground mb-3">
                  Thank You for Your Feedback!
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Your input helps us improve our services for all citizens.
                </p>

                {/* Reference ID */}
                <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 mb-8">
                  <div className="text-sm text-muted-foreground mb-2">Feedback Reference Number</div>
                  <div className="flex items-center justify-center gap-3">
                    <div className="text-2xl font-bold text-foreground">{referenceId}</div>
                    <button className="p-2 hover:bg-blue-100 rounded">
                      <Copy size={18} className="text-blue-600" />
                    </button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3">
                    Save this reference number to track your feedback status
                  </p>
                </div>

                {/* What Happens Next */}
                <div className="text-left mb-8">
                  <h3 className="font-bold text-foreground mb-4 text-center">What Happens Next?</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="font-bold text-purple-600">1</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground mb-1">Review & Categorization</h4>
                        <p className="text-sm text-muted-foreground">
                          Your feedback will be reviewed and categorized within 2-3 business days.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="font-bold text-purple-600">2</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground mb-1">Analysis & Planning</h4>
                        <p className="text-sm text-muted-foreground">
                          Feedback is analyzed by relevant teams and prioritized for action.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="font-bold text-purple-600">3</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground mb-1">Status Updates</h4>
                        <p className="text-sm text-muted-foreground">
                          You'll receive notifications when status changes or action is taken.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Notification Preferences */}
                <div className="bg-background border-2 border-border rounded-lg p-6 mb-8 text-left">
                  <h3 className="font-bold text-foreground mb-4">How would you like to receive updates?</h3>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" defaultChecked className="w-5 h-5" />
                      <div className="flex items-center gap-2">
                        <Bell size={16} className="text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">In-app notifications</span>
                      </div>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" defaultChecked className="w-5 h-5" />
                      <div className="flex items-center gap-2">
                        <Mail size={16} className="text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">Email updates</span>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-center gap-4">
                  <Link
                    to="/patterns/feedback"
                    className="px-6 py-3 bg-primary text-white rounded font-bold hover:opacity-90"
                  >
                    Track Feedback Status
                  </Link>
                  <button className="px-6 py-3 border-2 border-border text-muted-foreground rounded font-bold hover:bg-background">
                    Submit More Feedback
                  </button>
                </div>
              </div>
            </div>

            {/* Pattern Details */}
            <div className="mt-8 space-y-6">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Key Elements</h2>
                <div className="bg-card border-2 border-border rounded-lg p-6">
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Clear Success Message:</strong> Immediate confirmation that feedback was received</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Reference Number:</strong> Unique ID for tracking and future correspondence</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Timeline Expectations:</strong> Clear communication about next steps and timing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Status Tracking:</strong> Link or mechanism to check feedback status later</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Notification Preferences:</strong> Allow users to choose how they receive updates</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Follow-up Communication</h2>
                <div className="bg-card border-2 border-border rounded-lg p-6 space-y-4">
                  <div>
                    <h3 className="font-bold text-foreground mb-2">1. Immediate Acknowledgment</h3>
                    <p className="text-sm text-muted-foreground">
                      On-screen confirmation immediately after submission. Email/SMS within 5 minutes with reference number.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">2. Review Update (2-3 days)</h3>
                    <p className="text-sm text-muted-foreground">
                      Notify when feedback has been reviewed, categorized, and assigned to appropriate team.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">3. Action Update (Variable)</h3>
                    <p className="text-sm text-muted-foreground">
                      Inform when action is taken: bug fixed, feature planned, suggestion implemented, or issue closed.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">4. Closure Notification</h3>
                    <p className="text-sm text-muted-foreground">
                      Final update explaining resolution, thanking contributor, and inviting further feedback if needed.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>

          <aside className="col-span-4">
            <div className="sticky top-8 space-y-6">
              <div className="bg-card border-2 border-border rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-4">Pattern Information</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Complexity</div>
                    <div className="font-bold">Low</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Trigger</div>
                    <div className="font-bold">Auto after submission</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Follow-up</div>
                    <div className="font-bold">Multi-stage</div>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-3">Best Practices</h3>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li>✓ Always provide tracking reference</li>
                  <li>✓ Set realistic timeline expectations</li>
                  <li>✓ Send confirmation within 5 minutes</li>
                  <li>✓ Allow status checking anytime</li>
                  <li>✓ Close the loop with final update</li>
                  <li>✓ Thank contributors publicly</li>
                </ul>
              </div>

              <div className="bg-card border-2 border-border rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-4">Components Used</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Success Message</li>
                  <li>• Reference ID Display</li>
                  <li>• Timeline Stepper</li>
                  <li>• Notification Toggle</li>
                  <li>• Action Buttons</li>
                </ul>
              </div>

              <div className="bg-card border-2 border-border rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-4">Related Patterns</h3>
                <div className="space-y-2">
                  <Link to="/patterns/feedback/rate-service" className="block text-sm text-primary hover:underline">
                    → Rate Service
                  </Link>
                  <Link to="/patterns/feedback/post-completion" className="block text-sm text-primary hover:underline">
                    → Post-Completion Feedback
                  </Link>
                  <Link to="/patterns/feedback/issue-reporting" className="block text-sm text-primary hover:underline">
                    → Issue Reporting
                  </Link>
                  <Link to="/patterns/status-lifecycle" className="block text-sm text-primary hover:underline">
                    → Status Tracking
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
