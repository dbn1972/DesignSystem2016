import React from "react";
import { Link } from "react-router";
import { MessageCircle, Star, AlertTriangle, Lightbulb, CheckCircle, ArrowRight, TrendingUp, BarChart3, Users, Download, Copy, Check } from "lucide-react";

export default function FeedbackRatingPatterns() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-to-br from-purple-50 via-white to-blue-50 border-b-4 border-[#FF9933]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-16">
          <div className="mb-6">
            <Link to="/pattern-library" className="text-sm text-muted-foreground hover:text-primary">
              ← Back to Pattern Library
            </Link>
          </div>
          <div className="flex items-start justify-between">
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 border-3 border-white shadow-lg rounded-lg flex items-center justify-center">
                  <MessageCircle size={40} className="text-white" />
                </div>
                <div>
                  <div className="text-sm font-bold text-primary mb-2 uppercase tracking-wide">Pattern Family</div>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">Feedback, Rating & Continuous Improvement</h1>
                </div>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                Comprehensive patterns for collecting citizen feedback, service ratings, issue reports, and improvement suggestions.
                Designed to drive continuous service improvement through structured feedback collection, acknowledgment, and actionable insights.
              </p>
              <div className="flex items-center gap-8 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#FF9933] rounded-full"></div>
                  <span className="text-muted-foreground">Pattern Family: <span className="font-bold text-foreground">Quality & Improvement</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-700 rounded-full"></div>
                  <span className="text-muted-foreground">Patterns: <span className="font-bold text-foreground">5 Interactive Flows</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Complexity: <span className="font-bold text-foreground">Low to Medium</span></span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="px-8 py-4 bg-[#FF9933] text-white rounded-lg font-bold text-center shadow-lg">
                GOVERNMENT GRADE
              </div>
              <div className="px-8 py-4 bg-card border-2 border-[#138808] text-[#138808] rounded-lg font-bold text-center">
                ACCESSIBLE
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Quick Access */}
      <div className="bg-card border-b-2 border-border">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <span className="font-bold text-foreground">Quick Access:</span>
              <Link to="#overview" className="text-primary hover:underline text-sm font-medium">
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
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-12">

        {/* Overview Section */}
        <section id="overview" className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6">Pattern Overview</h2>
          <div className="bg-card border-2 border-border rounded-lg p-8 mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp size={24} className="text-purple-600" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Continuous Improvement</h3>
                  <p className="text-sm text-muted-foreground">
                    Structured feedback loops that enable data-driven service improvements
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BarChart3 size={24} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Actionable Insights</h3>
                  <p className="text-sm text-muted-foreground">
                    Convert citizen feedback into measurable improvements and policy changes
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users size={24} className="text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Citizen Engagement</h3>
                  <p className="text-sm text-muted-foreground">
                    Foster trust and transparency through acknowledgment and visible action
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* When to Use */}
          <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-8">
            <h3 className="font-bold text-foreground mb-4">When to Use These Patterns</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                <span>After service completion or transaction to capture satisfaction ratings</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                <span>When citizens need to report issues, bugs, or service problems</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                <span>To collect suggestions for new features or service improvements</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                <span>When building citizen-centric services that require ongoing refinement</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                <span>To demonstrate transparency and responsiveness to citizen input</span>
              </li>
            </ul>
          </div>
        </section>

        {/* All Patterns */}
        <section id="all-patterns" className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6">All Feedback & Rating Patterns</h2>

          <div className="grid grid-cols-1 gap-6">

            {/* Rate Service Pattern */}
            <Link
              to="/patterns/feedback/rate-service"
              className="bg-card border-2 border-border rounded-lg p-6 hover:border-primary hover:shadow-lg transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Star size={28} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary">Rate Service</h3>
                    <ArrowRight size={20} className="text-muted-foreground group-hover:text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Star rating system for capturing service satisfaction scores (1-5 stars) with optional quick sentiment tags
                    (Excellent, Good, Average, Poor, Very Poor).
                  </p>
                  <div className="flex items-center gap-4 text-xs">
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full font-bold">RATING</span>
                    <span className="text-muted-foreground">Complexity: Low</span>
                    <span className="text-muted-foreground">Time: 30 seconds</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Post-Completion Feedback */}
            <Link
              to="/patterns/feedback/post-completion"
              className="bg-card border-2 border-border rounded-lg p-6 hover:border-primary hover:shadow-lg transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageCircle size={28} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary">Post-Completion Feedback</h3>
                    <ArrowRight size={20} className="text-muted-foreground group-hover:text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Detailed feedback form triggered after service completion, collecting structured input on experience,
                    pain points, ease of use, and satisfaction with outcome.
                  </p>
                  <div className="flex items-center gap-4 text-xs">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full font-bold">FEEDBACK</span>
                    <span className="text-muted-foreground">Complexity: Medium</span>
                    <span className="text-muted-foreground">Time: 2-3 minutes</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Issue Reporting */}
            <Link
              to="/patterns/feedback/issue-reporting"
              className="bg-card border-2 border-border rounded-lg p-6 hover:border-primary hover:shadow-lg transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <AlertTriangle size={28} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary">Issue Reporting</h3>
                    <ArrowRight size={20} className="text-muted-foreground group-hover:text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Structured form for reporting bugs, errors, technical issues, or service problems with categorization,
                    severity levels, and screenshot/file attachment support.
                  </p>
                  <div className="flex items-center gap-4 text-xs">
                    <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full font-bold">ISSUE</span>
                    <span className="text-muted-foreground">Complexity: Medium</span>
                    <span className="text-muted-foreground">Time: 3-5 minutes</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Suggest Improvement */}
            <Link
              to="/patterns/feedback/suggest-improvement"
              className="bg-card border-2 border-border rounded-lg p-6 hover:border-primary hover:shadow-lg transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Lightbulb size={28} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary">Suggest Improvement</h3>
                    <ArrowRight size={20} className="text-muted-foreground group-hover:text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Ideation form for citizens to propose new features, service enhancements, policy changes, or process improvements
                    with impact assessment and voting capability.
                  </p>
                  <div className="flex items-center gap-4 text-xs">
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full font-bold">SUGGESTION</span>
                    <span className="text-muted-foreground">Complexity: Low</span>
                    <span className="text-muted-foreground">Time: 2-3 minutes</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Feedback Acknowledgment */}
            <Link
              to="/patterns/feedback/acknowledgment"
              className="bg-card border-2 border-border rounded-lg p-6 hover:border-primary hover:shadow-lg transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle size={28} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary">Feedback Acknowledgment</h3>
                    <ArrowRight size={20} className="text-muted-foreground group-hover:text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Confirmation screen and follow-up communication patterns showing feedback receipt, reference number,
                    expected timeline, and status tracking mechanism.
                  </p>
                  <div className="flex items-center gap-4 text-xs">
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full font-bold">ACKNOWLEDGMENT</span>
                    <span className="text-muted-foreground">Complexity: Low</span>
                    <span className="text-muted-foreground">Auto-triggered</span>
                  </div>
                </div>
              </div>
            </Link>

          </div>
        </section>

        {/* Design Principles */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6">Design Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card border-2 border-border rounded-lg p-6">
              <h3 className="font-bold text-foreground mb-3">1. Minimize Friction</h3>
              <p className="text-sm text-muted-foreground">
                Keep feedback forms short and simple. Allow quick ratings without mandatory comments.
                Every additional field reduces submission rates.
              </p>
            </div>
            <div className="bg-card border-2 border-border rounded-lg p-6">
              <h3 className="font-bold text-foreground mb-3">2. Right Time, Right Place</h3>
              <p className="text-sm text-muted-foreground">
                Trigger feedback requests at natural completion points. Avoid interrupting active tasks.
                Allow "give feedback" access from all pages.
              </p>
            </div>
            <div className="bg-card border-2 border-border rounded-lg p-6">
              <h3 className="font-bold text-foreground mb-3">3. Close the Loop</h3>
              <p className="text-sm text-muted-foreground">
                Always acknowledge feedback receipt. Provide tracking references. Show how feedback led to improvements.
                Build trust through transparency.
              </p>
            </div>
            <div className="bg-card border-2 border-border rounded-lg p-6">
              <h3 className="font-bold text-foreground mb-3">4. Actionable Structure</h3>
              <p className="text-sm text-muted-foreground">
                Use categorization, severity levels, and tags to route feedback appropriately.
                Structure data for analysis and prioritization.
              </p>
            </div>
          </div>
        </section>

        {/* Implementation Notes */}
        <section className="bg-orange-50 dark:bg-orange-950/30 border-2 border-orange-200 dark:border-orange-800 rounded-lg p-4 sm:p-6 lg:p-8">
          <h3 className="font-bold text-foreground mb-4">Implementation Notes</h3>
          <div className="space-y-3 text-sm text-muted-foreground">
            <p>
              <strong>Backend Integration:</strong> Feedback patterns require backend systems for storage,
              categorization, and routing to appropriate teams. Consider integration with helpdesk or CRM systems.
            </p>
            <p>
              <strong>Analytics:</strong> Implement tracking for feedback submission rates, average ratings,
              common issues, and improvement themes to drive data-driven decisions.
            </p>
            <p>
              <strong>Privacy:</strong> Make feedback anonymous by default with option to provide contact details.
              Follow data protection guidelines for sensitive feedback.
            </p>
            <p>
              <strong>Accessibility:</strong> Ensure all feedback forms are keyboard accessible, screen-reader friendly,
              and available in all official languages with clear, simple language.
            </p>
          </div>
        </section>

        {/* Code Downloads */}
        <FeedbackRatingCodeDownloads />
      </div>
    </div>
  );
}

// ==================== CODE DOWNLOADS ====================

const FRATING_REACT_CODE = `import React, { useState } from 'react';

export function FeedbackRatingPage() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const labels = ['', 'Very Poor', 'Poor', 'Average', 'Good', 'Excellent'];

  if (submitted) return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center bg-card border border-border rounded-2xl p-8 max-w-md">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
        </div>
        <h2 className="text-xl font-bold">Thank You!</h2>
        <p className="text-sm text-muted-foreground mt-2">Your {rating}-star feedback helps improve our services.</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-card border border-border rounded-2xl p-4 sm:p-6 lg:p-8">
        <h1 className="text-2xl font-bold mb-2">Rate This Service</h1>
        <p className="text-sm text-muted-foreground mb-6">How was your experience?</p>
        <div className="flex justify-center gap-2 mb-2">
          {[1,2,3,4,5].map(n => (
            <button key={n} onMouseEnter={() => setHover(n)} onMouseLeave={() => setHover(0)} onClick={() => setRating(n)}
              className="text-3xl transition-transform hover:scale-110" aria-label={\`Rate \${n} stars\`}>
              {n <= (hover || rating) ? '★' : '☆'}
            </button>
          ))}
        </div>
        {(hover || rating) > 0 && <p className="text-center text-sm font-semibold text-primary mb-4">{labels[hover || rating]}</p>}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Additional Comments</label>
          <textarea rows={3} value={comment} onChange={e => setComment(e.target.value)} className="w-full px-4 py-3 border border-border rounded-lg" placeholder="Optional — tell us more" />
        </div>
        <button onClick={() => setSubmitted(true)} disabled={!rating} className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold disabled:opacity-50">Submit Rating</button>
      </div>
    </div>
  );
}`;

const FRATING_ANGULAR_CODE = `import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ux4g-feedback-rating',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: \`
    <div class="min-h-screen bg-background flex items-center justify-center p-4">
      <div class="w-full max-w-md bg-card border border-border rounded-2xl p-4 sm:p-6 lg:p-8">
        <div *ngIf="!submitted">
          <h1 class="text-2xl font-bold mb-2">Rate This Service</h1>
          <div class="flex justify-center gap-2 mb-4">
            <button *ngFor="let n of [1,2,3,4,5]" (click)="rating=n" (mouseenter)="hover=n" (mouseleave)="hover=0"
              class="text-3xl transition-transform hover:scale-110">
              {{n <= (hover || rating) ? '★' : '☆'}}
            </button>
          </div>
          <textarea rows="3" [(ngModel)]="comment" class="w-full px-4 py-3 border border-border rounded-lg mb-4" placeholder="Comments"></textarea>
          <button (click)="submitted=true" [disabled]="!rating" class="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold disabled:opacity-50">Submit</button>
        </div>
        <div *ngIf="submitted" class="text-center py-6">
          <h2 class="text-xl font-bold">Thank You!</h2>
          <p class="text-sm text-muted-foreground mt-2">Your {{rating}}-star rating has been recorded.</p>
        </div>
      </div>
    </div>
  \`
})
export class FeedbackRatingComponent {
  rating = 0;
  hover = 0;
  comment = '';
  submitted = false;
}`;

const FRATING_HTML_CODE = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Feedback Rating — UX4G</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: system-ui, sans-serif; background: #f8fafc; min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 1rem; }
    .card { width: 100%; max-width: 420px; background: #fff; border: 1px solid #e2e8f0; border-radius: 1rem; padding: 2rem; }
    h1 { font-size: 1.5rem; font-weight: 700; margin-bottom: .25rem; }
    .sub { font-size: .875rem; color: #64748b; margin-bottom: 1.5rem; }
    .stars { display: flex; justify-content: center; gap: .5rem; margin-bottom: 1rem; }
    .star { font-size: 2rem; cursor: pointer; background: none; border: none; transition: transform .15s; }
    .star:hover { transform: scale(1.1); }
    textarea { width: 100%; padding: .75rem; border: 1px solid #e2e8f0; border-radius: .5rem; resize: vertical; margin-bottom: 1rem; }
    .btn { width: 100%; padding: .75rem; background: #005196; color: #fff; border: none; border-radius: .5rem; font-weight: 600; cursor: pointer; }
    .btn:disabled { opacity: .5; }
    .hidden { display: none; }
    .success { text-align: center; padding: 2rem 0; }
  </style>
</head>
<body>
  <div class="card">
    <div id="form">
      <h1>Rate This Service</h1>
      <p class="sub">How was your experience?</p>
      <div class="stars" id="stars"></div>
      <textarea rows="3" placeholder="Additional comments (optional)"></textarea>
      <button class="btn" id="submit-btn" disabled onclick="submit()">Submit Rating</button>
    </div>
    <div id="thanks" class="hidden success">
      <h2 style="font-size:1.25rem;font-weight:700">Thank You!</h2>
      <p style="color:#64748b;margin-top:.5rem;font-size:.875rem">Your feedback has been recorded.</p>
    </div>
  </div>
  <script>
    let rating = 0;
    for (let i = 1; i <= 5; i++) {
      const btn = document.createElement('button');
      btn.className = 'star';
      btn.textContent = '☆';
      btn.onclick = () => { rating = i; document.querySelectorAll('.star').forEach((s,j) => s.textContent = j < i ? '★' : '☆'); document.getElementById('submit-btn').disabled = false; };
      document.getElementById('stars').appendChild(btn);
    }
    function submit() { document.getElementById('form').classList.add('hidden'); document.getElementById('thanks').classList.remove('hidden'); }
  </script>
</body>
</html>`;

function FeedbackRatingCodeDownloads() {
  const [copiedId, setCopiedId] = React.useState<string | null>(null);
  const copyToClipboard = (code: string, id: string) => { navigator.clipboard.writeText(code); setCopiedId(id); setTimeout(() => setCopiedId(null), 2000); };
  const downloadCode = (code: string, filename: string) => { const blob = new Blob([code], { type: 'text/plain' }); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = filename; a.click(); URL.revokeObjectURL(url); };
  const lanes = [
    { key: 'react', title: 'React', desc: 'TypeScript + Star Rating', code: FRATING_REACT_CODE, filename: 'FeedbackRatingPage.tsx' },
    { key: 'angular', title: 'Angular', desc: 'Standalone + FormsModule', code: FRATING_ANGULAR_CODE, filename: 'feedback-rating.component.ts' },
    { key: 'html', title: 'HTML / CSS / JS', desc: 'No framework needed', code: FRATING_HTML_CODE, filename: 'feedback-rating.html' },
  ];
  return (
    <section id="code-downloads" className="space-y-6 scroll-mt-24 mt-12">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Code Downloads</h2>
        <p className="text-muted-foreground mt-1">Production-ready Feedback & Rating implementations.</p>
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
