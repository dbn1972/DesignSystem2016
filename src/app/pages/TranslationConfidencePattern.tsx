import { useState } from "react";
import { Link } from "react-router";
import {  CheckCircle, ArrowLeft, AlertTriangle, Info, ExternalLink, Download, Copy, Check } from "lucide-react";

export default function TranslationConfidencePattern() {
  const [showOriginal, setShowOriginal] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-gradient-to-br from-yellow-50 via-white to-orange-50 border-b-4 border-[#FF9933]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-16">
          <div className="mb-6">
            <Link to="/patterns/localization" className="text-sm text-muted-foreground hover:text-primary">
              ← Back to Localization Patterns
            </Link>
          </div>
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 border-3 border-white shadow-lg rounded-lg flex items-center justify-center">
                <CheckCircle size={40} className="text-white" />
              </div>
              <div>
                <div className="text-sm font-bold text-primary mb-2 uppercase tracking-wide">Localization Pattern</div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">Translation Confidence Indicators</h1>
              </div>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              Visual indicators showing translation quality and confidence levels for machine-translated or
              user-contributed content with options to view original or report issues.
            </p>
          </div>
        </div>
      </header>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-8">
            <div className="bg-yellow-50 dark:bg-yellow-950/30 border-2 border-yellow-200 dark:border-yellow-800 rounded-lg p-6 mb-6">
              <h2 className="font-bold text-foreground mb-2">Interactive Demo</h2>
              <p className="text-sm text-muted-foreground">
                See how translation confidence is communicated to users.
              </p>
            </div>

            {/* Demo Content */}
            <div className="space-y-6">

              {/* High Confidence */}
              <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
                <div className="bg-green-50 dark:bg-green-950/30 border-b-2 border-green-200 dark:border-green-800 px-6 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle size={18} className="text-green-600" />
                    <span className="font-bold text-foreground">Verified Translation</span>
                  </div>
                  <span className="text-xs px-3 py-1 bg-green-600 text-white rounded-full font-bold">
                    95% Confidence
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-foreground mb-2">आय प्रमाणपत्र के लिए आवेदन करें</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    यह दस्तावेज़ आपकी वार्षिक आय का आधिकारिक प्रमाण प्रदान करता है। आवेदन करने के लिए,
                    कृपया अपने सभी आय स्रोतों के विवरण के साथ फॉर्म भरें।
                  </p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-muted-foreground">Professionally translated • Reviewed by 2 experts</span>
                  </div>
                </div>
              </div>

              {/* Medium Confidence */}
              <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
                <div className="bg-yellow-50 dark:bg-yellow-950/30 border-b-2 border-yellow-200 dark:border-yellow-800 px-6 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <AlertTriangle size={18} className="text-yellow-600" />
                    <span className="font-bold text-foreground">Machine Translation</span>
                  </div>
                  <span className="text-xs px-3 py-1 bg-yellow-600 text-white rounded-full font-bold">
                    72% Confidence
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <Info size={18} className="text-yellow-600 flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <div className="text-sm text-muted-foreground mb-2">
                        This content was automatically translated. Some technical terms may not be accurate.
                      </div>
                      <button
                        onClick={() => setShowOriginal(!showOriginal)}
                        className="text-sm text-primary font-bold hover:underline flex items-center gap-1"
                      >
                        {showOriginal ? "Hide" : "Show"} original English
                        <ExternalLink size={14} />
                      </button>
                    </div>
                  </div>

                  {showOriginal && (
                    <div className="bg-background border-2 border-border rounded-lg p-4 mb-4">
                      <div className="text-xs text-muted-foreground mb-2 font-bold">ORIGINAL (English)</div>
                      <p className="text-sm text-muted-foreground">
                        This document provides official proof of your annual income. To apply, please fill
                        the form with details of all your income sources.
                      </p>
                    </div>
                  )}

                  <h3 className="font-bold text-foreground mb-2">आय प्रमाणपत्र के लिए आवेदन करें</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    यह दस्तावेज़ आपकी वार्षिक आय का आधिकारिक प्रमाण प्रदान करता है। आवेदन करने के लिए,
                    कृपया अपने सभी आय स्रोतों के विवरण के साथ फॉर्म भरें।
                  </p>

                  <div className="flex items-center gap-3">
                    <button className="text-sm px-4 py-2 border-2 border-border rounded font-bold hover:bg-background">
                      Report Issue
                    </button>
                    <button className="text-sm px-4 py-2 bg-primary text-white rounded font-bold hover:opacity-90">
                      Suggest Better Translation
                    </button>
                  </div>
                </div>
              </div>

              {/* Low Confidence */}
              <div className="bg-card border-2 border-red-300 rounded-lg overflow-hidden">
                <div className="bg-red-50 dark:bg-red-950/30 border-b-2 border-red-200 dark:border-red-800 px-6 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <AlertTriangle size={18} className="text-red-600" />
                    <span className="font-bold text-foreground">Low Quality Translation</span>
                  </div>
                  <span className="text-xs px-3 py-1 bg-red-600 text-white rounded-full font-bold">
                    45% Confidence
                  </span>
                </div>
                <div className="p-6">
                  <div className="bg-red-50 dark:bg-red-950/30 border-2 border-red-200 dark:border-red-800 rounded-lg p-4 mb-4">
                    <div className="flex items-start gap-3">
                      <AlertTriangle size={18} className="text-red-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-foreground mb-1">Translation Quality Warning</div>
                        <div className="text-sm text-muted-foreground mb-2">
                          This translation has low confidence score and may contain errors. We recommend viewing the
                          original English version or using a different language if available.
                        </div>
                        <div className="flex items-center gap-3">
                          <button className="text-sm px-4 py-2 bg-primary text-white rounded font-bold hover:opacity-90">
                            View in English
                          </button>
                          <button className="text-sm text-primary font-bold hover:underline">
                            Try Different Language
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Implementation Guide */}
            <div className="mt-8 space-y-6">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Confidence Levels</h2>
                <div className="bg-card border-2 border-border rounded-lg p-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-green-700 dark:text-green-400">90%+</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground mb-1">High Confidence (Verified)</h3>
                        <p className="text-sm text-muted-foreground">
                          Professionally translated and reviewed by native speakers. Safe for legal/official use.
                          Show green badge with checkmark.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-yellow-700">60-89%</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground mb-1">Medium Confidence (Machine)</h3>
                        <p className="text-sm text-muted-foreground">
                          Machine translated with reasonable accuracy. Provide option to view original.
                          Show yellow badge with info icon.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-red-700 dark:text-red-400">&lt;60%</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground mb-1">Low Confidence (Warning)</h3>
                        <p className="text-sm text-muted-foreground">
                          Poor translation quality, may contain errors. Show prominent warning and recommend
                          viewing original language. Red badge with warning icon.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Best Practices</h2>
                <div className="bg-card border-2 border-border rounded-lg p-6 space-y-3 text-sm">
                  <div>
                    <h3 className="font-bold text-foreground mb-1">1. Always Show Translation Source</h3>
                    <p className="text-muted-foreground">
                      Indicate whether content is professionally translated, machine translated, or user-contributed.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">2. Provide Original Access</h3>
                    <p className="text-muted-foreground">
                      For medium/low confidence, always allow users to view original language version.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">3. Enable Feedback</h3>
                    <p className="text-muted-foreground">
                      Allow users to report translation errors or suggest improvements for crowdsourced quality.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">4. Context-Appropriate Warnings</h3>
                    <p className="text-muted-foreground">
                      Legal/financial content requires higher confidence. Show stronger warnings for critical content.
                    </p>
                  </div>
                </div>
              </section>
            </div>
                      <TranslationConfidenceCodeDownloads />
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
                    <div className="text-xs text-muted-foreground mb-1">Use Case</div>
                    <div className="font-bold">Machine/user translations</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Impact</div>
                    <div className="font-bold">Trust & Transparency</div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-950/30 border-2 border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-3">When to Use</h3>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li>✓ Machine-translated content</li>
                  <li>✓ User-contributed translations</li>
                  <li>✓ Beta/preview language versions</li>
                  <li>✓ Partially translated pages</li>
                  <li>✓ Technical or legal content</li>
                </ul>
              </div>

              <div className="bg-card border-2 border-border rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-4">Components Used</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Confidence Badge</li>
                  <li>• Warning Banner</li>
                  <li>• Toggle Button</li>
                  <li>• Feedback Form</li>
                </ul>
              </div>

              <div className="bg-card border-2 border-border rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-4">Related Patterns</h3>
                <div className="space-y-2">
                  <Link to="/patterns/localization/mixed-language-fallback" className="block text-sm text-primary hover:underline">
                    → Mixed-Language Fallback
                  </Link>
                  <Link to="/patterns/localization/language-switcher" className="block text-sm text-primary hover:underline">
                    → Language Switcher
                  </Link>
                  <Link to="/patterns/feedback" className="block text-sm text-primary hover:underline">
                    → Feedback Patterns
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

const TRANSLATIONCONFIDENCE_REACT_CODE = `import React, { useState } from 'react';

export default function TranslationConfidencePage() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/translation-confidence', {
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
        <h1 className="text-2xl font-bold text-foreground mb-2">Translation Confidence</h1>
        <p className="text-sm text-muted-foreground mb-6">Government digital service pattern</p>
        {error && <div role="alert" className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 rounded-lg text-sm text-red-700 dark:text-red-400">{error}</div>}
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

const TRANSLATIONCONFIDENCE_ANGULAR_CODE = `import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ux4g-translation-confidence',
  standalone: true,
  imports: [CommonModule],
  template: \`
    <div class="min-h-screen flex items-center justify-center bg-background p-4">
      <div class="w-full max-w-lg bg-card border border-border rounded-2xl p-8 shadow-sm">
        <h1 class="text-2xl font-bold text-foreground mb-2">Translation Confidence</h1>
        <p class="text-sm text-muted-foreground mb-6">Government digital service pattern</p>
        <div *ngIf="error" role="alert" class="mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 rounded-lg text-sm text-red-700 dark:text-red-400">{{ error }}</div>
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
export class TranslationConfidenceComponent {
  loading = false;
  submitted = false;
  error = '';

  async onSubmit() {
    this.loading = true;
    this.error = '';
    try {
      const res = await fetch('/api/translation-confidence', {
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

const TRANSLATIONCONFIDENCE_HTML_CODE = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Translation Confidence — UX4G</title>
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
    <h1>Translation Confidence</h1>
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
        const res = await fetch('/api/translation-confidence', {
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

function TranslationConfidenceCodeDownloads() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const copyToClipboard = (code: string, id: string) => { navigator.clipboard.writeText(code); setCopiedId(id); setTimeout(() => setCopiedId(null), 2000); };
  const downloadCode = (code: string, filename: string) => { const blob = new Blob([code], { type: 'text/plain' }); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = filename; a.click(); URL.revokeObjectURL(url); };
  const lanes = [
    { key: 'react', title: 'React', desc: 'TypeScript + Hooks', code: TRANSLATIONCONFIDENCE_REACT_CODE, filename: 'TranslationConfidencePage.tsx' },
    { key: 'angular', title: 'Angular', desc: 'Standalone Component', code: TRANSLATIONCONFIDENCE_ANGULAR_CODE, filename: 'translation-confidence.component.ts' },
    { key: 'html', title: 'HTML / CSS / JS', desc: 'No framework needed', code: TRANSLATIONCONFIDENCE_HTML_CODE, filename: 'translation-confidence.html' },
  ];
  return (
    <section id="code-downloads" className="space-y-6 scroll-mt-24 mt-12">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Code Downloads</h2>
        <p className="text-muted-foreground mt-1">Production-ready Translation Confidence implementations.</p>
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
