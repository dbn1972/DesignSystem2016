import { useState } from "react";
import { Link } from "react-router";
import {  Globe, ArrowLeft, CheckCircle, AlertCircle, Download, Copy, Check } from "lucide-react";

export default function MixedLanguageFallbackPattern() {
  const [strategy, setStrategy] = useState<"inline" | "tooltip" | "toggle">("inline");

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-gradient-to-br from-purple-50 via-white to-pink-50 border-b-4 border-[#FF9933]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-16">
          <div className="mb-6">
            <Link to="/patterns/localization" className="text-sm text-muted-foreground hover:text-primary">
              ← Back to Localization Patterns
            </Link>
          </div>
          <div className="flex items-start justify-between">
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 border-3 border-white shadow-lg rounded-lg flex items-center justify-center">
                  <Globe size={40} className="text-white" />
                </div>
                <div>
                  <div className="text-sm font-bold text-primary mb-2 uppercase tracking-wide">Localization Pattern</div>
                  <h1 className="text-5xl font-bold text-foreground">Mixed-Language Fallback</h1>
                </div>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                Graceful handling of partially translated content by mixing target language with fallback text
                while maintaining clarity about which parts are translated.
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
                See how mixed-language content is displayed when translations are incomplete.
              </p>
            </div>

            {/* Strategy Selector */}
            <div className="bg-card border-2 border-border rounded-lg p-6 mb-6">
              <h3 className="font-bold text-foreground mb-4">Select Fallback Strategy:</h3>
              <div className="flex gap-3">
                <button
                  onClick={() => setStrategy("inline")}
                  className={`px-6 py-3 rounded font-bold ${
                    strategy === "inline" ? "bg-primary text-white" : "border-2 border-border text-muted-foreground"
                  }`}
                >
                  Inline Indicator
                </button>
                <button
                  onClick={() => setStrategy("tooltip")}
                  className={`px-6 py-3 rounded font-bold ${
                    strategy === "tooltip" ? "bg-primary text-white" : "border-2 border-border text-muted-foreground"
                  }`}
                >
                  Tooltip Hint
                </button>
                <button
                  onClick={() => setStrategy("toggle")}
                  className={`px-6 py-3 rounded font-bold ${
                    strategy === "toggle" ? "bg-primary text-white" : "border-2 border-border text-muted-foreground"
                  }`}
                >
                  Show/Hide Toggle
                </button>
              </div>
            </div>

            {/* Demo Content */}
            <div className="bg-card border-2 border-border rounded-lg p-8">
              <div className="border-b-2 border-border pb-4 mb-6">
                <h3 className="text-xl font-bold text-foreground">आय प्रमाणपत्र आवेदन</h3>
                <p className="text-sm text-muted-foreground">Income Certificate Application (Target: Hindi)</p>
              </div>

              {/* Inline Indicator Strategy */}
              {strategy === "inline" && (
                <div className="space-y-4">
                  <div>
                    <label className="block font-bold text-foreground mb-2">
                      पूरा नाम <span className="text-xs text-gray-500 font-normal">(Translated)</span>
                    </label>
                    <input aria-label="अपना नाम दर्ज करें" type="text" className="w-full px-4 py-2 border-2 border-border rounded" placeholder="अपना नाम दर्ज करें" />
                  </div>

                  <div>
                    <label className="block font-bold text-foreground mb-2">
                      Date of Birth{" "}
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-yellow-100 text-yellow-800 text-xs rounded">
                        <AlertCircle size={12} />
                        English fallback
                      </span>
                    </label>
                    <input aria-label="date input" type="date" className="w-full px-4 py-2 border-2 border-border rounded" />
                  </div>

                  <div>
                    <label className="block font-bold text-foreground mb-2">
                      पता <span className="text-xs text-gray-500 font-normal">(Translated)</span>
                    </label>
                    <textarea aria-label="अपना पूरा पता दर्ज करें" className="w-full px-4 py-2 border-2 border-border rounded" rows={3} placeholder="अपना पूरा पता दर्ज करें" />
                  </div>
                </div>
              )}

              {/* Tooltip Strategy */}
              {strategy === "tooltip" && (
                <div className="space-y-4">
                  <div>
                    <label className="block font-bold text-foreground mb-2">पूरा नाम</label>
                    <input aria-label="अपना नाम दर्ज करें" type="text" className="w-full px-4 py-2 border-2 border-border rounded" placeholder="अपना नाम दर्ज करें" />
                  </div>

                  <div className="relative">
                    <label className="block font-bold text-foreground mb-2 flex items-center gap-2">
                      Date of Birth
                      <span className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded cursor-help" title="Translation not available">
                        ?
                      </span>
                    </label>
                    <input aria-label="date input" type="date" className="w-full px-4 py-2 border-2 border-border rounded" />
                    <div className="mt-1 text-xs text-gray-500 italic">Translation pending for this field</div>
                  </div>

                  <div>
                    <label className="block font-bold text-foreground mb-2">पता</label>
                    <textarea aria-label="अपना पूरा पता दर्ज करें" className="w-full px-4 py-2 border-2 border-border rounded" rows={3} placeholder="अपना पूरा पता दर्ज करें" />
                  </div>
                </div>
              )}

              {/* Toggle Strategy */}
              {strategy === "toggle" && (
                <div>
                  <div className="bg-yellow-50 dark:bg-yellow-950/30 border-2 border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-4">
                    <div className="flex items-start gap-3">
                      <AlertCircle size={20} className="text-yellow-600 flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <div className="font-bold text-foreground mb-1">Partial Translation</div>
                        <div className="text-sm text-muted-foreground">
                          Some fields are shown in English as Hindi translation is not yet available.
                          <button className="ml-2 text-primary font-bold hover:underline">
                            View original language
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block font-bold text-foreground mb-2">पूरा नाम</label>
                      <input aria-label="अपना नाम दर्ज करें" type="text" className="w-full px-4 py-2 border-2 border-border rounded" placeholder="अपना नाम दर्ज करें" />
                    </div>

                    <div className="bg-background border-2 border-border rounded-lg p-4">
                      <label className="block font-bold text-foreground mb-2">Date of Birth</label>
                      <input aria-label="date input" type="date" className="w-full px-4 py-2 border-2 border-border rounded" />
                    </div>

                    <div>
                      <label className="block font-bold text-foreground mb-2">पता</label>
                      <textarea aria-label="अपना पूरा पता दर्ज करें" className="w-full px-4 py-2 border-2 border-border rounded" rows={3} placeholder="अपना पूरा पता दर्ज करें" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Best Practices */}
            <div className="mt-8 space-y-6">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Fallback Strategies</h2>
                <div className="bg-card border-2 border-border rounded-lg p-6 space-y-4">
                  <div>
                    <h3 className="font-bold text-foreground mb-2">1. Hierarchical Fallback</h3>
                    <p className="text-sm text-muted-foreground mb-2">Priority order for missing translations:</p>
                    <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                      <li>1. Target language (e.g., Tamil)</li>
                      <li>2. Regional fallback (if applicable)</li>
                      <li>3. Hindi (national language)</li>
                      <li>4. English (administrative language)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">2. Visual Differentiation</h3>
                    <p className="text-sm text-muted-foreground">
                      Make fallback content visually distinct with badges, background color, or italics so users know which parts are translated.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">3. Contextual Explanation</h3>
                    <p className="text-sm text-muted-foreground">
                      Provide one-time explanation banner informing users why some content is in a different language.
                    </p>
                  </div>
                </div>
              </section>
            </div>
                      <MixedLanguageFallbackCodeDownloads />
          </div>

          <div className="col-span-4">
            <div className="sticky top-8 space-y-6">
              <div className="bg-card border-2 border-border rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-4">Pattern Information</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Complexity</div>
                    <div className="font-bold">Medium</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Use Case</div>
                    <div className="font-bold">Incomplete translations</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Strategy Types</div>
                    <div className="font-bold">3 variants</div>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 dark:bg-orange-950/30 border-2 border-orange-200 dark:border-orange-800 rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-3">Best Practices</h3>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li>✓ Always indicate fallback language</li>
                  <li>✓ Use hierarchical fallback chain</li>
                  <li>✓ Maintain visual consistency</li>
                  <li>✓ Explain mixed language once</li>
                  <li>✓ Prioritize critical fields for translation</li>
                </ul>
              </div>

              <div className="bg-card border-2 border-border rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-4">Related Patterns</h3>
                <div className="space-y-2">
                  <Link to="/patterns/localization/language-switcher" className="block text-sm text-primary hover:underline">
                    → Language Switcher
                  </Link>
                  <Link to="/patterns/localization/translation-confidence" className="block text-sm text-primary hover:underline">
                    → Translation Confidence
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

const MIXEDLANGUAGEFALLBACK_REACT_CODE = `import React, { useState } from 'react';

export default function MixedLanguageFallbackPage() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/mixed-language-fallback', {
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
        <h1 className="text-2xl font-bold text-foreground mb-2">Mixed Language Fallback</h1>
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

const MIXEDLANGUAGEFALLBACK_ANGULAR_CODE = `import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ux4g-mixed-language-fallback',
  standalone: true,
  imports: [CommonModule],
  template: \`
    <div class="min-h-screen flex items-center justify-center bg-background p-4">
      <div class="w-full max-w-lg bg-card border border-border rounded-2xl p-8 shadow-sm">
        <h1 class="text-2xl font-bold text-foreground mb-2">Mixed Language Fallback</h1>
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
export class MixedLanguageFallbackComponent {
  loading = false;
  submitted = false;
  error = '';

  async onSubmit() {
    this.loading = true;
    this.error = '';
    try {
      const res = await fetch('/api/mixed-language-fallback', {
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

const MIXEDLANGUAGEFALLBACK_HTML_CODE = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Mixed Language Fallback — UX4G</title>
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
    <h1>Mixed Language Fallback</h1>
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
        const res = await fetch('/api/mixed-language-fallback', {
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

function MixedLanguageFallbackCodeDownloads() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const copyToClipboard = (code: string, id: string) => { navigator.clipboard.writeText(code); setCopiedId(id); setTimeout(() => setCopiedId(null), 2000); };
  const downloadCode = (code: string, filename: string) => { const blob = new Blob([code], { type: 'text/plain' }); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = filename; a.click(); URL.revokeObjectURL(url); };
  const lanes = [
    { key: 'react', title: 'React', desc: 'TypeScript + Hooks', code: MIXEDLANGUAGEFALLBACK_REACT_CODE, filename: 'MixedLanguageFallbackPage.tsx' },
    { key: 'angular', title: 'Angular', desc: 'Standalone Component', code: MIXEDLANGUAGEFALLBACK_ANGULAR_CODE, filename: 'mixed-language-fallback.component.ts' },
    { key: 'html', title: 'HTML / CSS / JS', desc: 'No framework needed', code: MIXEDLANGUAGEFALLBACK_HTML_CODE, filename: 'mixed-language-fallback.html' },
  ];
  return (
    <section id="code-downloads" className="space-y-6 scroll-mt-24 mt-12">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Code Downloads</h2>
        <p className="text-muted-foreground mt-1">Production-ready Mixed Language Fallback implementations.</p>
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
