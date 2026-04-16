import { useState } from "react";
import { Link } from "react-router";
import { Lightbulb, ArrowLeft, CheckCircle, ThumbsUp } from "lucide-react";

export default function SuggestImprovementPattern() {
  const [formData, setFormData] = useState({
    category: "",
    title: "",
    description: "",
    benefit: "",
    impact: "",
    vote: false
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.category && formData.title && formData.description) {
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormData({
      category: "",
      title: "",
      description: "",
      benefit: "",
      impact: "",
      vote: false
    });
    setSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-gradient-to-br from-green-50 via-white to-teal-50 border-b-4 border-[#FF9933]">
        <div className="max-w-[1400px] mx-auto px-12 py-16">
          <div className="mb-6">
            <Link to="/patterns/feedback" className="text-sm text-muted-foreground hover:text-primary">
              ← Back to Feedback & Rating Patterns
            </Link>
          </div>
          <div className="flex items-start justify-between">
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-500 border-3 border-white shadow-lg rounded-lg flex items-center justify-center">
                  <Lightbulb size={40} className="text-white" />
                </div>
                <div>
                  <div className="text-sm font-bold text-primary mb-2 uppercase tracking-wide">Feedback Pattern</div>
                  <h1 className="text-5xl font-bold text-foreground">Suggest Improvement</h1>
                </div>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                Ideation form for citizens to propose new features, service enhancements, or process improvements
                with community voting to prioritize popular suggestions.
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto px-12 py-12">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-8">
            <div className="bg-green-50 dark:bg-green-950/30 border-2 border-green-200 dark:border-green-800 rounded-lg p-6 mb-6">
              <h2 className="font-bold text-foreground mb-2">Interactive Demo</h2>
              <p className="text-sm text-muted-foreground">
                Share your ideas for improving government services.
              </p>
            </div>

            <div className="bg-card border-2 border-border rounded-lg p-8">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="border-b-2 border-border pb-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">Share Your Idea</h3>
                    <p className="text-sm text-muted-foreground">
                      Your suggestions help us build better services for everyone
                    </p>
                  </div>

                  <div>
                    <label className="block font-bold text-foreground mb-2">
                      Suggestion Category <span className="text-red-600">*</span>
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({...formData, category: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-border rounded focus:border-primary focus:outline-none"
                      required
                    >
                      <option value="">Select category</option>
                      <option value="feature">New Feature</option>
                      <option value="enhancement">Service Enhancement</option>
                      <option value="process">Process Improvement</option>
                      <option value="ui">User Interface</option>
                      <option value="accessibility">Accessibility</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold text-foreground mb-2">
                      Suggestion Title <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.title}
                      onChange={(e) => setFormData({...formData, title: e.target.value})}
                      placeholder="Brief title for your suggestion"
                      className="w-full px-4 py-3 border-2 border-border rounded focus:border-primary focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-foreground mb-2">
                      Detailed Description <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                      rows={4}
                      placeholder="Describe your suggestion in detail..."
                      className="w-full px-4 py-3 border-2 border-border rounded focus:border-primary focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-foreground mb-2">
                      Expected Benefit
                    </label>
                    <textarea
                      value={formData.benefit}
                      onChange={(e) => setFormData({...formData, benefit: e.target.value})}
                      rows={2}
                      placeholder="How would this improvement help users?"
                      className="w-full px-4 py-3 border-2 border-border rounded focus:border-primary focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-foreground mb-2">
                      Impact Estimate
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {[
                        { value: "high", label: "High Impact" },
                        { value: "medium", label: "Medium Impact" },
                        { value: "low", label: "Low Impact" }
                      ].map((imp) => (
                        <button
                          key={imp.value}
                          type="button"
                          onClick={() => setFormData({...formData, impact: imp.value})}
                          className={`px-4 py-3 border-2 rounded font-bold text-sm ${
                            formData.impact === imp.value
                              ? "border-green-500 bg-green-50 text-green-700"
                              : "border-border text-muted-foreground hover:border-gray-400"
                          }`}
                        >
                          {imp.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-4">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.vote}
                        onChange={(e) => setFormData({...formData, vote: e.target.checked})}
                        className="w-5 h-5"
                      />
                      <div>
                        <span className="font-bold text-foreground">Vote for your suggestion</span>
                        <p className="text-sm text-muted-foreground">Popular suggestions are prioritized for implementation</p>
                      </div>
                    </label>
                  </div>

                  <div className="flex items-center gap-4 pt-4">
                    <button
                      type="submit"
                      className="px-8 py-3 bg-green-600 text-white rounded font-bold hover:bg-green-600"
                    >
                      Submit Suggestion
                    </button>
                    <button
                      type="button"
                      className="px-6 py-3 border-2 border-border text-muted-foreground rounded font-bold hover:bg-background"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={40} className="text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Thank You for Your Suggestion!</h3>
                  <p className="text-muted-foreground mb-2">
                    Your idea has been submitted and will be reviewed by our team.
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Suggestion ID: SUG-2026-{Math.floor(Math.random() * 100000).toString().padStart(5, '0')}
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6 max-w-md mx-auto">
                    <p className="text-sm text-muted-foreground">
                      <ThumbsUp size={16} className="inline-block mr-2 text-blue-600" />
                      <strong>Vote for this suggestion</strong> to increase its priority
                    </p>
                  </div>
                  <button
                    onClick={handleReset}
                    className="px-6 py-3 bg-primary text-white rounded font-bold hover:opacity-90"
                  >
                    Submit Another Suggestion
                  </button>
                </div>
              )}
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
                    <div className="text-xs text-muted-foreground mb-1">Average Time</div>
                    <div className="font-bold">2-3 minutes</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Engagement</div>
                    <div className="font-bold">High (with voting)</div>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-950/30 border-2 border-green-200 dark:border-green-800 rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-3">Best Practices</h3>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li>✓ Enable community voting/upvoting</li>
                  <li>✓ Show status updates on suggestions</li>
                  <li>✓ Highlight implemented suggestions</li>
                  <li>✓ Allow duplicate detection</li>
                  <li>✓ Credit contributors publicly</li>
                </ul>
              </div>

              <div className="bg-card border-2 border-border rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-4">Related Patterns</h3>
                <div className="space-y-2">
                  <Link to="/patterns/feedback/post-completion" className="block text-sm text-primary hover:underline">
                    → Post-Completion Feedback
                  </Link>
                  <Link to="/patterns/feedback/acknowledgment" className="block text-sm text-primary hover:underline">
                    → Feedback Acknowledgment
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
