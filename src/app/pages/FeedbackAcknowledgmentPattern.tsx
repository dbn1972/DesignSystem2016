import React from "react";
import { Link } from "react-router";
import { CheckCircle, ArrowLeft, Bell, Mail, Copy, ExternalLink, Download, Check } from "lucide-react";

export default function FeedbackAcknowledgmentPattern() {
  const referenceId = "FB-2026-04-876543";

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-gradient-to-br from-purple-50 via-white to-pink-50 border-b-4 border-[#FF9933]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-16">
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
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">Feedback Acknowledgment</h1>
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

      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-8">
            <div className="bg-purple-50 dark:bg-purple-950/30 border-2 border-purple-200 dark:border-purple-800 rounded-lg p-6 mb-6">
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
                <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-8">
                  <div className="text-sm text-muted-foreground mb-2">Feedback Reference Number</div>
                  <div className="flex items-center justify-center gap-3">
                    <div className="text-2xl font-bold text-foreground">{referenceId}</div>
                    <button aria-label="Copy reference number" className="p-2 hover:bg-blue-100 rounded">
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
                        <h3 className="font-bold text-foreground mb-1">Review & Categorization</h3>
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
                        <h3 className="font-bold text-foreground mb-1">Analysis & Planning</h3>
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
                        <h3 className="font-bold text-foreground mb-1">Status Updates</h3>
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

          <div className="col-span-4">
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

              <div className="bg-purple-50 dark:bg-purple-950/30 border-2 border-purple-200 dark:border-purple-800 rounded-lg p-6">
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
          </div>
        </div>

        {/* Code Downloads */}
        <FeedbackAckCodeDownloads />
      </div>
    </div>
  );
}

// ==================== CODE DOWNLOADS ====================

const FBACK_ACK_REACT_CODE = `import React, { useState } from 'react';

export function FeedbackAcknowledgmentPage() {
  const [step, setStep] = useState<'form' | 'acknowledged'>('form');
  const [feedback, setFeedback] = useState({ rating: 0, comment: '', email: '' });
  const [ticketId] = useState('FBK-' + Math.random().toString(36).substring(2, 8).toUpperCase());

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-card border border-border rounded-2xl p-4 sm:p-6 lg:p-8">
        {step === 'form' ? (
          <div>
            <h1 className="text-2xl font-bold mb-2">Share Your Feedback</h1>
            <p className="text-sm text-muted-foreground mb-6">Help us improve government digital services</p>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">How was your experience?</label>
              <div className="flex gap-2">{[1,2,3,4,5].map(n => (
                <button key={n} onClick={() => setFeedback(f => ({...f, rating: n}))} className={\`w-10 h-10 rounded-lg border-2 text-lg \${feedback.rating >= n ? 'border-yellow-400 bg-yellow-50' : 'border-border'}\`}>⭐</button>
              ))}</div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Comments</label>
              <textarea rows={3} value={feedback.comment} onChange={e => setFeedback(f => ({...f, comment: e.target.value}))} className="w-full px-4 py-3 border border-border rounded-lg" placeholder="Tell us more..." />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium mb-1">Email (optional)</label>
              <input type="email" value={feedback.email} onChange={e => setFeedback(f => ({...f, email: e.target.value}))} className="w-full px-4 py-3 border border-border rounded-lg" placeholder="For follow-up" />
            </div>
            <button onClick={() => setStep('acknowledged')} disabled={!feedback.rating} className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold disabled:opacity-50">Submit Feedback</button>
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            </div>
            <h2 className="text-xl font-bold mb-2">Thank You!</h2>
            <p className="text-muted-foreground mb-4">Your feedback has been recorded.</p>
            <div className="bg-muted rounded-xl p-4 text-sm">
              <div className="text-muted-foreground">Reference: <span className="font-bold text-foreground">{ticketId}</span></div>
              <div className="text-xs text-muted-foreground mt-1">You'll receive a confirmation via email if provided.</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}`;

const FBACK_ACK_ANGULAR_CODE = `import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ux4g-feedback-acknowledgment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: \`
    <div class="min-h-screen bg-background flex items-center justify-center p-4">
      <div class="w-full max-w-md bg-card border border-border rounded-2xl p-4 sm:p-6 lg:p-8">
        <div *ngIf="step==='form'">
          <h1 class="text-2xl font-bold mb-2">Share Your Feedback</h1>
          <div class="mb-4">
            <label class="block text-sm font-medium mb-2">Rating</label>
            <div class="flex gap-2">
              <button *ngFor="let n of [1,2,3,4,5]" (click)="rating=n" [class]="'w-10 h-10 rounded-lg border-2 text-lg ' + (rating>=n ? 'border-yellow-400 bg-yellow-50' : 'border-border')">⭐</button>
            </div>
          </div>
          <div class="mb-4"><label class="block text-sm font-medium mb-1">Comments</label><textarea rows="3" [(ngModel)]="comment" class="w-full px-4 py-3 border border-border rounded-lg"></textarea></div>
          <button (click)="step='acknowledged'" [disabled]="!rating" class="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold disabled:opacity-50">Submit</button>
        </div>
        <div *ngIf="step==='acknowledged'" class="text-center py-6">
          <h2 class="text-xl font-bold mb-2">Thank You!</h2>
          <p class="text-muted-foreground">Reference: <strong>{{ticketId}}</strong></p>
        </div>
      </div>
    </div>
  \`
})
export class FeedbackAcknowledgmentComponent {
  step: 'form' | 'acknowledged' = 'form';
  rating = 0;
  comment = '';
  ticketId = 'FBK-' + Math.random().toString(36).substring(2,8).toUpperCase();
}`;

const FBACK_ACK_HTML_CODE = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Feedback Acknowledgment — UX4G</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: system-ui, sans-serif; background: #f8fafc; min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 1rem; }
    .card { width: 100%; max-width: 420px; background: #fff; border: 1px solid #e2e8f0; border-radius: 1rem; padding: 2rem; }
    h1 { font-size: 1.5rem; font-weight: 700; margin-bottom: .25rem; }
    .sub { font-size: .875rem; color: #64748b; margin-bottom: 1.5rem; }
    .stars { display: flex; gap: .5rem; margin-bottom: 1rem; }
    .star { width: 40px; height: 40px; border: 2px solid #e2e8f0; border-radius: .5rem; font-size: 1.25rem; cursor: pointer; background: #fff; }
    .star.active { border-color: #facc15; background: #fefce8; }
    label { display: block; font-size: .875rem; font-weight: 500; margin-bottom: .25rem; }
    textarea { width: 100%; padding: .75rem; border: 1px solid #e2e8f0; border-radius: .5rem; resize: vertical; margin-bottom: 1rem; }
    .btn { width: 100%; padding: .75rem; background: #005196; color: #fff; border: none; border-radius: .5rem; font-weight: 600; cursor: pointer; }
    .btn:disabled { opacity: .5; cursor: not-allowed; }
    .success { text-align: center; padding: 2rem 0; }
    .success h2 { font-size: 1.25rem; font-weight: 700; }
    .success p { color: #64748b; margin-top: .5rem; font-size: .875rem; }
    .hidden { display: none; }
  </style>
</head>
<body>
  <div class="card">
    <div id="form-step">
      <h1>Share Your Feedback</h1>
      <p class="sub">Help us improve</p>
      <div class="stars" id="stars"></div>
      <label>Comments</label>
      <textarea id="comment" rows="3" placeholder="Tell us more..."></textarea>
      <button class="btn" id="submit-btn" disabled onclick="submitFeedback()">Submit Feedback</button>
    </div>
    <div id="ack-step" class="hidden success">
      <h2>Thank You!</h2>
      <p>Your feedback has been recorded.</p>
      <p style="margin-top:1rem;font-size:.875rem">Reference: <strong id="ref-id"></strong></p>
    </div>
  </div>
  <script>
    let rating = 0;
    const starsEl = document.getElementById('stars');
    for (let i = 1; i <= 5; i++) {
      const btn = document.createElement('button');
      btn.className = 'star';
      btn.textContent = '⭐';
      btn.onclick = () => { rating = i; document.querySelectorAll('.star').forEach((s,j) => s.classList.toggle('active', j < i)); document.getElementById('submit-btn').disabled = false; };
      starsEl.appendChild(btn);
    }
    function submitFeedback() {
      document.getElementById('form-step').classList.add('hidden');
      document.getElementById('ack-step').classList.remove('hidden');
      document.getElementById('ref-id').textContent = 'FBK-' + Math.random().toString(36).substring(2,8).toUpperCase();
    }
  </script>
</body>
</html>`;

function FeedbackAckCodeDownloads() {
  const [copiedId, setCopiedId] = React.useState<string | null>(null);
  const copyToClipboard = (code: string, id: string) => { navigator.clipboard.writeText(code); setCopiedId(id); setTimeout(() => setCopiedId(null), 2000); };
  const downloadCode = (code: string, filename: string) => { const blob = new Blob([code], { type: 'text/plain' }); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = filename; a.click(); URL.revokeObjectURL(url); };
  const lanes = [
    { key: 'react', title: 'React', desc: 'TypeScript + Rating + Ack', code: FBACK_ACK_REACT_CODE, filename: 'FeedbackAcknowledgmentPage.tsx' },
    { key: 'angular', title: 'Angular', desc: 'Standalone + FormsModule', code: FBACK_ACK_ANGULAR_CODE, filename: 'feedback-acknowledgment.component.ts' },
    { key: 'html', title: 'HTML / CSS / JS', desc: 'No framework needed', code: FBACK_ACK_HTML_CODE, filename: 'feedback-acknowledgment.html' },
  ];
  return (
    <section id="code-downloads" className="space-y-6 scroll-mt-24 mt-12">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Code Downloads</h2>
        <p className="text-muted-foreground mt-1">Production-ready Feedback Acknowledgment implementations.</p>
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
