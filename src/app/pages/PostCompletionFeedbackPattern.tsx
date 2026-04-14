import { useState } from "react";
import { Link } from "react-router";
import { MessageCircle, ArrowLeft, CheckCircle, Star, ThumbsUp, ThumbsDown } from "lucide-react";

export default function PostCompletionFeedbackPattern() {
  const [formData, setFormData] = useState({
    overallRating: 0,
    easeOfUse: "",
    speed: "",
    clarity: "",
    outcome: "",
    whatWorked: "",
    whatDidnt: "",
    suggestions: "",
    contactMe: false,
    email: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      overallRating: 0,
      easeOfUse: "",
      speed: "",
      clarity: "",
      outcome: "",
      whatWorked: "",
      whatDidnt: "",
      suggestions: "",
      contactMe: false,
      email: ""
    });
    setSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-to-br from-blue-50 via-white to-purple-50 border-b-4 border-[#FF9933]">
        <div className="max-w-[1400px] mx-auto px-12 py-16">
          <div className="mb-6">
            <Link to="/patterns/feedback" className="text-sm text-muted-foreground hover:text-primary">
              ← Back to Feedback & Rating Patterns
            </Link>
          </div>
          <div className="flex items-start justify-between">
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 border-3 border-white shadow-lg rounded-lg flex items-center justify-center">
                  <MessageCircle size={40} className="text-white" />
                </div>
                <div>
                  <div className="text-sm font-bold text-primary mb-2 uppercase tracking-wide">Feedback Pattern</div>
                  <h1 className="text-5xl font-bold text-foreground">Post-Completion Feedback</h1>
                </div>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                Comprehensive feedback form triggered after service completion to collect detailed insights on user experience,
                satisfaction, and areas for improvement.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1400px] mx-auto px-12 py-12">
        <div className="grid grid-cols-12 gap-8">

          {/* Left Column - Interactive Demo */}
          <div className="col-span-8">
            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 mb-6">
              <h2 className="font-bold text-foreground mb-2">Interactive Demo</h2>
              <p className="text-sm text-muted-foreground">
                Try the post-completion feedback form. This captures detailed experience insights.
              </p>
            </div>

            {/* Demo Container */}
            <div className="bg-card border-2 border-border rounded-lg p-8">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Header */}
                  <div className="border-b-2 border-border pb-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">Share Your Experience</h3>
                    <p className="text-sm text-muted-foreground">
                      We'd love to hear about your experience with the Income Certificate service.
                      Your feedback helps us improve.
                    </p>
                  </div>

                  {/* Overall Rating */}
                  <div>
                    <label className="block font-bold text-foreground mb-2">
                      Overall Experience <span className="text-red-600">*</span>
                    </label>
                    <div className="flex items-center gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setFormData({...formData, overallRating: star})}
                          className="focus:outline-none transition-transform hover:scale-110"
                        >
                          <Star
                            size={40}
                            className={`${
                              star <= formData.overallRating
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        </button>
                      ))}
                      {formData.overallRating > 0 && (
                        <span className="ml-2 text-sm font-bold text-muted-foreground">
                          {formData.overallRating === 5 && "Excellent"}
                          {formData.overallRating === 4 && "Good"}
                          {formData.overallRating === 3 && "Average"}
                          {formData.overallRating === 2 && "Poor"}
                          {formData.overallRating === 1 && "Very Poor"}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Quick Ratings */}
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block font-bold text-foreground mb-2">Ease of Use</label>
                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() => setFormData({...formData, easeOfUse: "easy"})}
                          className={`flex-1 px-4 py-2 border-2 rounded font-bold text-sm ${
                            formData.easeOfUse === "easy"
                              ? "border-green-500 bg-green-50 text-green-700"
                              : "border-border text-muted-foreground hover:border-gray-400"
                          }`}
                        >
                          <ThumbsUp size={16} className="inline-block mr-1" />
                          Easy
                        </button>
                        <button
                          type="button"
                          onClick={() => setFormData({...formData, easeOfUse: "difficult"})}
                          className={`flex-1 px-4 py-2 border-2 rounded font-bold text-sm ${
                            formData.easeOfUse === "difficult"
                              ? "border-red-500 bg-red-50 text-red-700"
                              : "border-border text-muted-foreground hover:border-gray-400"
                          }`}
                        >
                          <ThumbsDown size={16} className="inline-block mr-1" />
                          Difficult
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block font-bold text-foreground mb-2">Service Speed</label>
                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() => setFormData({...formData, speed: "fast"})}
                          className={`flex-1 px-4 py-2 border-2 rounded font-bold text-sm ${
                            formData.speed === "fast"
                              ? "border-green-500 bg-green-50 text-green-700"
                              : "border-border text-muted-foreground hover:border-gray-400"
                          }`}
                        >
                          <ThumbsUp size={16} className="inline-block mr-1" />
                          Fast
                        </button>
                        <button
                          type="button"
                          onClick={() => setFormData({...formData, speed: "slow"})}
                          className={`flex-1 px-4 py-2 border-2 rounded font-bold text-sm ${
                            formData.speed === "slow"
                              ? "border-red-500 bg-red-50 text-red-700"
                              : "border-border text-muted-foreground hover:border-gray-400"
                          }`}
                        >
                          <ThumbsDown size={16} className="inline-block mr-1" />
                          Slow
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block font-bold text-foreground mb-2">Instructions Clarity</label>
                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() => setFormData({...formData, clarity: "clear"})}
                          className={`flex-1 px-4 py-2 border-2 rounded font-bold text-sm ${
                            formData.clarity === "clear"
                              ? "border-green-500 bg-green-50 text-green-700"
                              : "border-border text-muted-foreground hover:border-gray-400"
                          }`}
                        >
                          <ThumbsUp size={16} className="inline-block mr-1" />
                          Clear
                        </button>
                        <button
                          type="button"
                          onClick={() => setFormData({...formData, clarity: "confusing"})}
                          className={`flex-1 px-4 py-2 border-2 rounded font-bold text-sm ${
                            formData.clarity === "confusing"
                              ? "border-red-500 bg-red-50 text-red-700"
                              : "border-border text-muted-foreground hover:border-gray-400"
                          }`}
                        >
                          <ThumbsDown size={16} className="inline-block mr-1" />
                          Confusing
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block font-bold text-foreground mb-2">Outcome Satisfaction</label>
                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() => setFormData({...formData, outcome: "satisfied"})}
                          className={`flex-1 px-4 py-2 border-2 rounded font-bold text-sm ${
                            formData.outcome === "satisfied"
                              ? "border-green-500 bg-green-50 text-green-700"
                              : "border-border text-muted-foreground hover:border-gray-400"
                          }`}
                        >
                          <ThumbsUp size={16} className="inline-block mr-1" />
                          Satisfied
                        </button>
                        <button
                          type="button"
                          onClick={() => setFormData({...formData, outcome: "unsatisfied"})}
                          className={`flex-1 px-4 py-2 border-2 rounded font-bold text-sm ${
                            formData.outcome === "unsatisfied"
                              ? "border-red-500 bg-red-50 text-red-700"
                              : "border-border text-muted-foreground hover:border-gray-400"
                          }`}
                        >
                          <ThumbsDown size={16} className="inline-block mr-1" />
                          Unsatisfied
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Open-ended Questions */}
                  <div>
                    <label className="block font-bold text-foreground mb-2">
                      What worked well?
                    </label>
                    <textarea
                      value={formData.whatWorked}
                      onChange={(e) => setFormData({...formData, whatWorked: e.target.value})}
                      rows={3}
                      placeholder="Tell us what you liked about the service..."
                      className="w-full px-4 py-3 border-2 border-border rounded focus:border-primary focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-foreground mb-2">
                      What could be improved?
                    </label>
                    <textarea
                      value={formData.whatDidnt}
                      onChange={(e) => setFormData({...formData, whatDidnt: e.target.value})}
                      rows={3}
                      placeholder="Share any challenges or frustrations you faced..."
                      className="w-full px-4 py-3 border-2 border-border rounded focus:border-primary focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-foreground mb-2">
                      Any suggestions?
                    </label>
                    <textarea
                      value={formData.suggestions}
                      onChange={(e) => setFormData({...formData, suggestions: e.target.value})}
                      rows={2}
                      placeholder="Optional: Suggest new features or improvements..."
                      className="w-full px-4 py-3 border-2 border-border rounded focus:border-primary focus:outline-none"
                    />
                  </div>

                  {/* Contact Option */}
                  <div className="bg-background border-2 border-border rounded-lg p-4">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.contactMe}
                        onChange={(e) => setFormData({...formData, contactMe: e.target.checked})}
                        className="w-5 h-5 mt-0.5"
                      />
                      <div className="flex-1">
                        <span className="font-bold text-foreground">I'd like to be contacted about my feedback</span>
                        <p className="text-sm text-muted-foreground mt-1">
                          We may reach out to better understand your experience
                        </p>
                      </div>
                    </label>
                    {formData.contactMe && (
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="your.email@example.com"
                        className="w-full mt-3 px-4 py-2 border-2 border-border rounded focus:border-primary focus:outline-none"
                      />
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="flex items-center gap-4 pt-4">
                    <button
                      type="submit"
                      disabled={formData.overallRating === 0}
                      className={`px-8 py-3 rounded font-bold ${
                        formData.overallRating === 0
                          ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                          : "bg-primary text-white hover:opacity-90"
                      }`}
                    >
                      Submit Feedback
                    </button>
                    <button
                      type="button"
                      className="px-6 py-3 border-2 border-border text-muted-foreground rounded font-bold hover:bg-background"
                    >
                      Skip for Now
                    </button>
                  </div>
                </form>
              ) : (
                /* Success State */
                <div className="text-center py-8">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={40} className="text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Thank You for Your Detailed Feedback!</h3>
                  <p className="text-muted-foreground mb-2">
                    Your insights are invaluable in helping us improve our services for all citizens.
                  </p>
                  <p className="text-sm text-muted-foreground mb-6">
                    Reference ID: FB-2026-04-{Math.floor(Math.random() * 10000).toString().padStart(6, '0')}
                  </p>
                  <button
                    onClick={handleReset}
                    className="px-6 py-3 bg-primary text-white rounded font-bold hover:opacity-90"
                    >
                    Submit Another Feedback
                  </button>
                </div>
              )}
            </div>

            {/* Pattern Details */}
            <div className="mt-8 space-y-6">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">When to Use</h2>
                <div className="bg-card border-2 border-border rounded-lg p-6">
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                      <span>After major service transactions or application completions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                      <span>When you need detailed qualitative insights, not just ratings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                      <span>For new or recently redesigned services to identify issues</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                      <span>When building continuous improvement roadmaps</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Best Practices</h2>
                <div className="bg-card border-2 border-border rounded-lg p-6 space-y-4">
                  <div>
                    <h3 className="font-bold text-foreground mb-2">1. Balance Detail with Brevity</h3>
                    <p className="text-sm text-muted-foreground">
                      Keep forms under 10 questions. Longer forms see significant drop-off rates.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">2. Mix Quantitative and Qualitative</h3>
                    <p className="text-sm text-muted-foreground">
                      Use ratings for metrics, but include open-ended questions to understand the "why" behind scores.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">3. Make Most Fields Optional</h3>
                    <p className="text-sm text-muted-foreground">
                      Only require overall rating. Making everything optional improves completion rates.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">4. Show Impact</h3>
                    <p className="text-sm text-muted-foreground">
                      Display "Recent Improvements Based on Feedback" to show citizens their input matters.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Right Sidebar */}
          <aside className="col-span-4">
            <div className="sticky top-8 space-y-6">

              {/* Pattern Info */}
              <div className="bg-card border-2 border-border rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-4">Pattern Information</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Complexity</div>
                    <div className="font-bold">Medium</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Average Time</div>
                    <div className="font-bold">2-3 minutes</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">User Effort</div>
                    <div className="font-bold">Moderate</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Response Rate</div>
                    <div className="font-bold">Medium (15-30%)</div>
                  </div>
                </div>
              </div>

              {/* Components Used */}
              <div className="bg-card border-2 border-border rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-4">Components Used</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Star Rating</li>
                  <li>• Binary Choice Buttons</li>
                  <li>• Text Area</li>
                  <li>• Checkbox</li>
                  <li>• Email Input</li>
                  <li>• Success Message</li>
                </ul>
              </div>

              {/* Accessibility */}
              <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-3">Accessibility Notes</h3>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li>✓ Proper form labels and ARIA attributes</li>
                  <li>✓ Keyboard navigation support</li>
                  <li>✓ Required fields marked clearly</li>
                  <li>✓ Error messages announced to screen readers</li>
                  <li>✓ Sufficient color contrast ratios</li>
                </ul>
              </div>

              {/* Related Patterns */}
              <div className="bg-card border-2 border-border rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-4">Related Patterns</h3>
                <div className="space-y-2">
                  <Link to="/patterns/feedback/rate-service" className="block text-sm text-primary hover:underline">
                    → Rate Service
                  </Link>
                  <Link to="/patterns/feedback/issue-reporting" className="block text-sm text-primary hover:underline">
                    → Issue Reporting
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
