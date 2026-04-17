import { useState } from "react";
import { Link } from "react-router";
import {  MessageCircle, ArrowLeft, CheckCircle, Star, ThumbsUp, ThumbsDown, Download, Copy, Check } from "lucide-react";

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
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-16">
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
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">Post-Completion Feedback</h1>
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
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-12 gap-8">

          {/* Left Column - Interactive Demo */}
          <div className="col-span-8">
            <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-6">
              <h2 className="font-bold text-foreground mb-2">Interactive Demo</h2>
              <p className="text-sm text-muted-foreground">
                Try the post-completion feedback form. This captures detailed experience insights.
              </p>
            </div>

            {/* Demo Container */}
            <div className="bg-card border-2 border-border rounded-lg p-4 sm:p-6 lg:p-8">
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
                          aria-label={`Rate ${star} star${star > 1 ? 's' : ''}`}
                          onClick={() => setFormData({...formData, overallRating: star})}
                          className="focus:outline-none transition-transform hover:scale-110"
                        >
                          <Star
                            size={40}
                            className={`${
                              star <= formData.overallRating
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-muted-foreground"
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    <textarea aria-label="Text input" value={formData.whatWorked}
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
                    <textarea aria-label="Text input" value={formData.whatDidnt}
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
                    <textarea aria-label="Text input" value={formData.suggestions}
                      onChange={(e) => setFormData({...formData, suggestions: e.target.value})}
                      rows={2}
                      placeholder="Optional: Suggest new features or improvements..."
                      className="w-full px-4 py-3 border-2 border-border rounded focus:border-primary focus:outline-none"
                    />
                  </div>

                  {/* Contact Option */}
                  <div className="bg-background border-2 border-border rounded-lg p-4">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input aria-label="Checkbox" type="checkbox"
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
                      <input aria-label="email input" type="email"
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
                          ? "bg-gray-300 text-muted-foreground cursor-not-allowed"
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
                      <PostCompletionFeedbackCodeDownloads />
          </div>

          {/* Right Sidebar */}
          <div className="col-span-4">
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
              <div className="bg-green-50 dark:bg-green-950/30 border-2 border-green-200 dark:border-green-800 rounded-lg p-6">
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
          </div>
        </div>
      </div>
    </div>
  );
}

// ==================== CODE DOWNLOADS ====================

const POSTCOMPLETIONFEEDBACK_REACT_CODE = `import React, { useState } from 'react';

export default function PostCompletionFeedbackPage() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/post-completion-feedback', {
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
        <h1 className="text-2xl font-bold text-foreground mb-2">Post Completion Feedback</h1>
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

const POSTCOMPLETIONFEEDBACK_ANGULAR_CODE = `import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ux4g-post-completion-feedback',
  standalone: true,
  imports: [CommonModule],
  template: \`
    <div class="min-h-screen flex items-center justify-center bg-background p-4">
      <div class="w-full max-w-lg bg-card border border-border rounded-2xl p-8 shadow-sm">
        <h1 class="text-2xl font-bold text-foreground mb-2">Post Completion Feedback</h1>
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
export class PostCompletionFeedbackComponent {
  loading = false;
  submitted = false;
  error = '';

  async onSubmit() {
    this.loading = true;
    this.error = '';
    try {
      const res = await fetch('/api/post-completion-feedback', {
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

const POSTCOMPLETIONFEEDBACK_HTML_CODE = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Post Completion Feedback — UX4G</title>
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
    <h1>Post Completion Feedback</h1>
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
        const res = await fetch('/api/post-completion-feedback', {
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

function PostCompletionFeedbackCodeDownloads() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const copyToClipboard = (code: string, id: string) => { navigator.clipboard.writeText(code); setCopiedId(id); setTimeout(() => setCopiedId(null), 2000); };
  const downloadCode = (code: string, filename: string) => { const blob = new Blob([code], { type: 'text/plain' }); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = filename; a.click(); URL.revokeObjectURL(url); };
  const lanes = [
    { key: 'react', title: 'React', desc: 'TypeScript + Hooks', code: POSTCOMPLETIONFEEDBACK_REACT_CODE, filename: 'PostCompletionFeedbackPage.tsx' },
    { key: 'angular', title: 'Angular', desc: 'Standalone Component', code: POSTCOMPLETIONFEEDBACK_ANGULAR_CODE, filename: 'post-completion-feedback.component.ts' },
    { key: 'html', title: 'HTML / CSS / JS', desc: 'No framework needed', code: POSTCOMPLETIONFEEDBACK_HTML_CODE, filename: 'post-completion-feedback.html' },
  ];
  return (
    <section id="code-downloads" className="space-y-6 scroll-mt-24 mt-12">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Code Downloads</h2>
        <p className="text-muted-foreground mt-1">Production-ready Post Completion Feedback implementations.</p>
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
                <div tabIndex={0} role="region" aria-label={`${lane.title} code preview`} className="rounded-xl border border-border bg-slate-950 p-3 text-xs text-slate-100 shadow-inner max-h-64 overflow-auto">
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
