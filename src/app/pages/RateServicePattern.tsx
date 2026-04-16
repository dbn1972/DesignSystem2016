import { useState } from "react";
import { Link } from "react-router";
import { Star, ArrowLeft, CheckCircle, ThumbsUp, ThumbsDown, Meh } from "lucide-react";

export default function RateServicePattern() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [sentiment, setSentiment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (rating > 0) {
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setRating(0);
    setHoverRating(0);
    setSentiment("");
    setSubmitted(false);
  };

  const getRatingText = (stars: number) => {
    if (stars === 5) return "Excellent";
    if (stars === 4) return "Good";
    if (stars === 3) return "Average";
    if (stars === 2) return "Poor";
    if (stars === 1) return "Very Poor";
    return "Select a rating";
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-to-br from-yellow-50 via-white to-orange-50 border-b-4 border-[#FF9933]">
        <div className="max-w-[1400px] mx-auto px-12 py-16">
          <div className="mb-6">
            <Link to="/patterns/feedback" className="text-sm text-muted-foreground hover:text-primary">
              ← Back to Feedback & Rating Patterns
            </Link>
          </div>
          <div className="flex items-start justify-between">
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 border-3 border-white shadow-lg rounded-lg flex items-center justify-center">
                  <Star size={40} className="text-white" />
                </div>
                <div>
                  <div className="text-sm font-bold text-primary mb-2 uppercase tracking-wide">Feedback Pattern</div>
                  <h1 className="text-5xl font-bold text-foreground">Rate Service</h1>
                </div>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                Simple star rating interface for quick service satisfaction feedback. Allows citizens
                to rate their experience on a 1-5 scale with optional sentiment tags for deeper insights.
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
            <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-6">
              <h2 className="font-bold text-foreground mb-2">Interactive Demo</h2>
              <p className="text-sm text-muted-foreground">
                Try the rating interface below. This is a live, interactive demonstration of the pattern.
              </p>
            </div>

            {/* Demo Container */}
            <div className="bg-card border-2 border-border rounded-lg p-8">
              {!submitted ? (
                <div className="space-y-6">
                  {/* Service Info */}
                  <div className="border-b-2 border-border pb-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">Income Certificate Application</h3>
                    <p className="text-sm text-muted-foreground">Application #INC-2026-04-001 • Completed on April 10, 2026</p>
                  </div>

                  {/* Rating Question */}
                  <div>
                    <h4 className="font-bold text-foreground mb-2">How would you rate your experience?</h4>
                    <p className="text-sm text-muted-foreground mb-4">Your feedback helps us improve our services</p>

                    {/* Star Rating */}
                    <div className="flex items-center gap-2 mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          onClick={() => setRating(star)}
                          onMouseEnter={() => setHoverRating(star)}
                          onMouseLeave={() => setHoverRating(0)}
                          className="focus:outline-none transition-transform hover:scale-110"
                        >
                          <Star
                            size={48}
                            className={`${
                              star <= (hoverRating || rating)
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                    <div className="text-lg font-bold text-foreground mb-4">
                      {getRatingText(hoverRating || rating)}
                    </div>
                  </div>

                  {/* Quick Sentiment Tags (Optional) */}
                  {rating > 0 && (
                    <div>
                      <h4 className="font-bold text-foreground mb-3">Quick feedback (Optional)</h4>
                      <div className="grid grid-cols-3 gap-3">
                        <button
                          onClick={() => setSentiment("easy")}
                          className={`px-4 py-3 border-2 rounded-lg text-sm font-bold transition-all ${
                            sentiment === "easy"
                              ? "border-green-500 bg-green-50 text-green-700"
                              : "border-border text-muted-foreground hover:border-gray-400"
                          }`}
                        >
                          <ThumbsUp size={16} className="inline-block mr-2" />
                          Easy to use
                        </button>
                        <button
                          onClick={() => setSentiment("fast")}
                          className={`px-4 py-3 border-2 rounded-lg text-sm font-bold transition-all ${
                            sentiment === "fast"
                              ? "border-blue-500 bg-blue-50 text-blue-700"
                              : "border-border text-muted-foreground hover:border-gray-400"
                          }`}
                        >
                          <CheckCircle size={16} className="inline-block mr-2" />
                          Fast service
                        </button>
                        <button
                          onClick={() => setSentiment("confusing")}
                          className={`px-4 py-3 border-2 rounded-lg text-sm font-bold transition-all ${
                            sentiment === "confusing"
                              ? "border-orange-500 bg-orange-50 text-orange-700"
                              : "border-border text-muted-foreground hover:border-gray-400"
                          }`}
                        >
                          <Meh size={16} className="inline-block mr-2" />
                          Confusing
                        </button>
                        <button
                          onClick={() => setSentiment("helpful")}
                          className={`px-4 py-3 border-2 rounded-lg text-sm font-bold transition-all ${
                            sentiment === "helpful"
                              ? "border-purple-500 bg-purple-50 text-purple-700"
                              : "border-border text-muted-foreground hover:border-gray-400"
                          }`}
                        >
                          <CheckCircle size={16} className="inline-block mr-2" />
                          Helpful staff
                        </button>
                        <button
                          onClick={() => setSentiment("slow")}
                          className={`px-4 py-3 border-2 rounded-lg text-sm font-bold transition-all ${
                            sentiment === "slow"
                              ? "border-red-500 bg-red-50 text-red-700"
                              : "border-border text-muted-foreground hover:border-gray-400"
                          }`}
                        >
                          <ThumbsDown size={16} className="inline-block mr-2" />
                          Too slow
                        </button>
                        <button
                          onClick={() => setSentiment("technical")}
                          className={`px-4 py-3 border-2 rounded-lg text-sm font-bold transition-all ${
                            sentiment === "technical"
                              ? "border-red-500 bg-red-50 text-red-700"
                              : "border-border text-muted-foreground hover:border-gray-400"
                          }`}
                        >
                          <ThumbsDown size={16} className="inline-block mr-2" />
                          Technical issues
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="flex items-center gap-4 pt-4">
                    <button
                      onClick={handleSubmit}
                      disabled={rating === 0}
                      className={`px-8 py-3 rounded font-bold ${
                        rating === 0
                          ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                          : "bg-primary text-white hover:opacity-90"
                      }`}
                    >
                      Submit Rating
                    </button>
                    <button
                      onClick={() => setRating(0)}
                      className="px-6 py-3 border-2 border-border text-muted-foreground rounded font-bold hover:bg-background"
                    >
                      Skip
                    </button>
                  </div>
                </div>
              ) : (
                /* Success State */
                <div className="text-center py-8">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={40} className="text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Thank You for Your Feedback!</h3>
                  <p className="text-muted-foreground mb-6">
                    Your {rating}-star rating has been recorded. We use this feedback to continuously improve our services.
                  </p>
                  <button
                    onClick={handleReset}
                    className="px-6 py-3 bg-primary text-white rounded font-bold hover:opacity-90"
                  >
                    Rate Another Service
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
                      <span>After successful service completion or transaction</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                      <span>When you need quick, quantifiable satisfaction metrics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                      <span>For benchmarking service quality across departments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                      <span>As a lightweight alternative to lengthy feedback forms</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Best Practices</h2>
                <div className="bg-card border-2 border-border rounded-lg p-6 space-y-4">
                  <div>
                    <h3 className="font-bold text-foreground mb-2">1. Make it Optional</h3>
                    <p className="text-sm text-muted-foreground">
                      Always provide a "Skip" or "Maybe Later" option. Forced ratings lead to poor data quality.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">2. Right Timing</h3>
                    <p className="text-sm text-muted-foreground">
                      Show rating prompt immediately after service completion, not days later when the experience is no longer fresh.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">3. Clear Labels</h3>
                    <p className="text-sm text-muted-foreground">
                      Display rating text (Excellent, Good, etc.) to ensure all users understand the scale, especially those using screen readers.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">4. Follow-up on Low Ratings</h3>
                    <p className="text-sm text-muted-foreground">
                      For ratings ≤2 stars, offer a quick way to report the specific issue or connect with support.
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
                    <div className="font-bold">Low</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Average Time</div>
                    <div className="font-bold">30 seconds</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">User Effort</div>
                    <div className="font-bold">Minimal (1-2 clicks)</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Response Rate</div>
                    <div className="font-bold">High (40-60%)</div>
                  </div>
                </div>
              </div>

              {/* Components Used */}
              <div className="bg-card border-2 border-border rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-4">Components Used</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Star Rating Input</li>
                  <li>• Button (Primary, Secondary)</li>
                  <li>• Success Message</li>
                  <li>• Optional Tag Selection</li>
                </ul>
              </div>

              {/* Accessibility */}
              <div className="bg-green-50 dark:bg-green-950/30 border-2 border-green-200 dark:border-green-800 rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-3">Accessibility Notes</h3>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li>✓ Keyboard navigable (Tab, Enter)</li>
                  <li>✓ Screen reader announces rating value</li>
                  <li>✓ Text labels for all rating levels</li>
                  <li>✓ High contrast for visual clarity</li>
                  <li>✓ Touch-friendly button sizes (48px min)</li>
                </ul>
              </div>

              {/* Related Patterns */}
              <div className="bg-card border-2 border-border rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-4">Related Patterns</h3>
                <div className="space-y-2">
                  <Link to="/patterns/feedback/post-completion" className="block text-sm text-primary hover:underline">
                    → Post-Completion Feedback
                  </Link>
                  <Link to="/patterns/feedback/acknowledgment" className="block text-sm text-primary hover:underline">
                    → Feedback Acknowledgment
                  </Link>
                  <Link to="/patterns/feedback/issue-reporting" className="block text-sm text-primary hover:underline">
                    → Issue Reporting
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
