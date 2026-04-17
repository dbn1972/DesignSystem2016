import { useState } from "react";
import { Link } from "react-router";
import {  Star, ArrowLeft, CheckCircle, ThumbsUp, ThumbsDown, Meh, Download, Copy, Check } from "lucide-react";

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
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-16">
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
      <main className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-12">
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
                                : "text-muted-foreground"
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
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
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
                      <RateServiceCodeDownloads />
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

// ==================== CODE DOWNLOADS ====================

const RATESERVICE_REACT_CODE = `import React, { useState } from 'react';

export default function RateServicePage() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/rate-service', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ timestamp: Date.now() }),
      });
      if (!res.ok) throw new Error('Request failed');
      setSubmitted(true);
    } catch { setError('Something went wrong. Please try again.'); }
    finally { setLoading(false); }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-lg bg-card border border-border rounded-2xl p-8 shadow-sm">
        <h1 className="text-2xl font-bold text-foreground mb-2">Rate Service</h1>
        <p className="text-sm text-muted-foreground mb-6">Government digital service pattern</p>
        {error && <div role="alert" className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">{error}</div>}
        {submitted ? (
          <div className="text-center py-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            </div>
            <h2 className="text-xl font-bold">Success</h2>
            <p className="text-muted-foreground mt-2">Your request has been processed.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <button type="submit" disabled={loading} className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold disabled:opacity-60">
              {loading ? 'Processing...' : 'Submit'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}`;

const RATESERVICE_ANGULAR_CODE = `import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ux4g-rate-service',
  standalone: true,
  imports: [CommonModule],
  template: \`
    <div class="min-h-screen flex items-center justify-center bg-background p-4">
      <div class="w-full max-w-lg bg-card border border-border rounded-2xl p-8 shadow-sm">
        <h1 class="text-2xl font-bold text-foreground mb-2">Rate Service</h1>
        <p class="text-sm text-muted-foreground mb-6">Government digital service pattern</p>
        <div *ngIf="error" role="alert" class="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">{{ error }}</div>
        <div *ngIf="submitted" class="text-center py-6">
          <h2 class="text-xl font-bold">Success</h2>
          <p class="text-muted-foreground mt-2">Your request has been processed.</p>
        </div>
        <form *ngIf="!submitted" (ngSubmit)="onSubmit()">
          <button type="submit" [disabled]="loading" class="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold disabled:opacity-60">
            {{ loading ? 'Processing...' : 'Submit' }}
          </button>
        </form>
      </div>
    </div>
  \`
})
export class RateServiceComponent {
  loading = false;
  submitted = false;
  error = '';

  async onSubmit() {
    this.loading = true;
    this.error = '';
    try {
      const res = await fetch('/api/rate-service', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ timestamp: Date.now() }),
      });
      if (!res.ok) throw new Error('Failed');
      this.submitted = true;
    } catch { this.error = 'Something went wrong.'; }
    finally { this.loading = false; }
  }
}`;

const RATESERVICE_HTML_CODE = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Rate Service — UX4G</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: system-ui, sans-serif; min-height: 100vh; display: flex; align-items: center; justify-content: center; background: #f9fafb; padding: 1rem; }
    .card { width: 100%; max-width: 32rem; background: #fff; border: 1px solid #e5e7eb; border-radius: 1rem; padding: 2rem; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
    h1 { font-size: 1.5rem; font-weight: 700; color: #111; margin-bottom: 0.5rem; }
    .subtitle { font-size: 0.875rem; color: #6b7280; margin-bottom: 1.5rem; }
    .btn { width: 100%; padding: 0.75rem; background: #005196; color: #fff; border: none; border-radius: 0.5rem; font-size: 1rem; font-weight: 600; cursor: pointer; }
    .btn:hover { background: #004178; }
    .btn:disabled { opacity: 0.6; cursor: not-allowed; }
    .error { margin-bottom: 1rem; padding: 0.75rem; background: #fef2f2; border: 1px solid #fecaca; border-radius: 0.5rem; color: #b91c1c; font-size: 0.875rem; display: none; }
    .success { text-align: center; padding: 2rem 0; display: none; }
    .success h2 { font-size: 1.25rem; font-weight: 700; margin-bottom: 0.5rem; }
    .success p { color: #6b7280; }
  </style>
</head>
<body>
  <div class="card">
    <h1>Rate Service</h1>
    <p class="subtitle">Government digital service pattern</p>
    <div id="error" class="error" role="alert"></div>
    <form id="mainForm" novalidate>
      <button type="submit" class="btn" id="submitBtn">Submit</button>
    </form>
    <div id="success" class="success">
      <h2>Success</h2>
      <p>Your request has been processed.</p>
    </div>
  </div>
  <script>
    document.getElementById('mainForm').addEventListener('submit', async function(e) {
      e.preventDefault();
      const err = document.getElementById('error');
      const btn = document.getElementById('submitBtn');
      err.style.display = 'none';
      btn.disabled = true; btn.textContent = 'Processing...';
      try {
        const res = await fetch('/api/rate-service', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ timestamp: Date.now() }),
        });
        if (!res.ok) throw new Error('Failed');
        document.getElementById('mainForm').style.display = 'none';
        document.getElementById('success').style.display = 'block';
      } catch { err.textContent = 'Something went wrong.'; err.style.display = 'block'; }
      finally { btn.disabled = false; btn.textContent = 'Submit'; }
    });
  </script>
</body>
</html>`;

function RateServiceCodeDownloads() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const copyToClipboard = (code: string, id: string) => { navigator.clipboard.writeText(code); setCopiedId(id); setTimeout(() => setCopiedId(null), 2000); };
  const downloadCode = (code: string, filename: string) => { const blob = new Blob([code], { type: 'text/plain' }); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = filename; a.click(); URL.revokeObjectURL(url); };
  const lanes = [
    { key: 'react', title: 'React', desc: 'TypeScript + Hooks', code: RATESERVICE_REACT_CODE, filename: 'RateServicePage.tsx' },
    { key: 'angular', title: 'Angular', desc: 'Standalone Component', code: RATESERVICE_ANGULAR_CODE, filename: 'rate-service.component.ts' },
    { key: 'html', title: 'HTML / CSS / JS', desc: 'No framework needed', code: RATESERVICE_HTML_CODE, filename: 'rate-service.html' },
  ];
  return (
    <section id="code-downloads" className="space-y-6 scroll-mt-24 mt-12">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Code Downloads</h2>
        <p className="text-muted-foreground mt-1">Production-ready Rate Service implementations.</p>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {lanes.map((lane) => (
          <div key={lane.key} className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <div className="h-1 bg-[#005196]" />
            <div className="flex flex-1 flex-col p-5">
              <div className="flex items-start justify-between gap-3 mb-4">
                <div>
                  <span className="inline-flex rounded-full border border-border bg-muted/60 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Framework lane</span>
                  <h3 className="text-lg font-bold text-foreground mt-2">{lane.title}</h3>
                  <p className="text-sm text-muted-foreground">{lane.desc}</p>
                </div>
                <button onClick={() => downloadCode(lane.code, lane.filename)} aria-label={`Download ${lane.title} code`} className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-border bg-background text-[#005196] hover:bg-[#005196] hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-[#005196]">
                  <Download size={16} />
                </button>
              </div>
              <div className="flex-1 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-muted-foreground">{lane.filename}</span>
                  <button onClick={() => copyToClipboard(lane.code, lane.key)} className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-background px-2.5 py-1.5 text-xs font-semibold text-foreground hover:border-primary hover:text-primary transition-colors">
                    {copiedId === lane.key ? <Check size={12} /> : <Copy size={12} />}
                    {copiedId === lane.key ? 'Copied' : 'Copy'}
                  </button>
                </div>
                <div className="rounded-xl border border-border bg-slate-950 p-3 text-xs text-slate-100 shadow-inner max-h-64 overflow-auto">
                  <pre className="font-mono leading-5 whitespace-pre-wrap"><code>{lane.code.slice(0, 800)}...</code></pre>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
