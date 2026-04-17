import { useState } from "react";
import { Link } from "react-router";
import {  MapPin, ArrowLeft, Download, Copy, Check } from "lucide-react";

export default function ScriptLayoutPattern() {
  const [script, setScript] = useState<"ltr" | "rtl" | "complex">("ltr");

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-gradient-to-br from-orange-50 via-white to-red-50 border-b-4 border-[#FF9933]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-16">
          <div className="mb-6">
            <Link to="/patterns/localization" className="text-sm text-muted-foreground hover:text-primary">
              ← Back to Localization Patterns
            </Link>
          </div>
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 border-3 border-white shadow-lg rounded-lg flex items-center justify-center">
                <MapPin size={40} className="text-white" />
              </div>
              <div>
                <div className="text-sm font-bold text-primary mb-2 uppercase tracking-wide">Localization Pattern</div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">Script-Specific Layout Handling</h1>
              </div>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              Specialized layout adjustments for different writing systems including RTL (Urdu),
              complex conjuncts (Devanagari, Bengali), and script-specific rendering requirements.
            </p>
          </div>
        </div>
      </header>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-8">
            <div className="bg-orange-50 dark:bg-orange-950/30 border-2 border-orange-200 dark:border-orange-800 rounded-lg p-6 mb-6">
              <h2 className="font-bold text-foreground mb-2">Interactive Demo</h2>
              <p className="text-sm text-muted-foreground">
                See how layouts adapt for different script directions and requirements.
              </p>
            </div>

            <div className="bg-card border-2 border-border rounded-lg p-6 mb-6">
              <div className="flex gap-3 mb-6">
                <button
                  onClick={() => setScript("ltr")}
                  className={`px-4 py-2 rounded font-bold ${
                    script === "ltr" ? "bg-primary text-white" : "border-2 border-border"
                  }`}
                >
                  LTR (English, Hindi)
                </button>
                <button
                  onClick={() => setScript("rtl")}
                  className={`px-4 py-2 rounded font-bold ${
                    script === "rtl" ? "bg-primary text-white" : "border-2 border-border"
                  }`}
                >
                  RTL (Urdu)
                </button>
                <button
                  onClick={() => setScript("complex")}
                  className={`px-4 py-2 rounded font-bold ${
                    script === "complex" ? "bg-primary text-white" : "border-2 border-border"
                  }`}
                >
                  Complex (Devanagari)
                </button>
              </div>

              {/* LTR Example */}
              {script === "ltr" && (
                <div className="space-y-4">
                  <h3 className="font-bold text-foreground">Left-to-Right (Standard)</h3>
                  <div className="bg-card border-2 border-border rounded-lg p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg"></div>
                      <div className="flex-1">
                        <div className="font-bold text-foreground">Welcome to UX4G</div>
                        <div className="text-sm text-muted-foreground">Government Design System</div>
                      </div>
                      <button className="px-4 py-2 bg-primary text-white rounded font-bold">
                        Start →
                      </button>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      This is standard left-to-right layout used for most Indian languages written in
                      Latin, Devanagari, Bengali, Tamil, Telugu, and other scripts.
                    </p>
                  </div>
                </div>
              )}

              {/* RTL Example */}
              {script === "rtl" && (
                <div className="space-y-4" dir="rtl">
                  <h3 className="font-bold text-foreground" dir="ltr">Right-to-Left (Urdu/Arabic)</h3>
                  <div className="bg-card border-2 border-border rounded-lg p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <button className="px-4 py-2 bg-primary text-white rounded font-bold">
                        ← شروع کریں
                      </button>
                      <div className="flex-1">
                        <div className="font-bold text-foreground">UX4G میں خوش آمدید</div>
                        <div className="text-sm text-muted-foreground">سرکاری ڈیزائن سسٹم</div>
                      </div>
                      <div className="w-12 h-12 bg-blue-100 rounded-lg"></div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      یہ دائیں سے بائیں لے آؤٹ اردو اور عربی کے لیے استعمال ہوتا ہے۔
                    </p>
                  </div>
                  <div className="bg-yellow-50 dark:bg-yellow-950/30 border-2 border-yellow-200 dark:border-yellow-800 rounded-lg p-4" dir="ltr">
                    <p className="text-sm text-muted-foreground">
                      <strong>Note:</strong> RTL layouts require flipping entire UI including navigation,
                      icons, and reading direction. Use CSS <code>dir="rtl"</code> attribute.
                    </p>
                  </div>
                </div>
              )}

              {/* Complex Script Example */}
              {script === "complex" && (
                <div className="space-y-4">
                  <h3 className="font-bold text-foreground">Complex Scripts (Devanagari)</h3>
                  <div className="bg-card border-2 border-border rounded-lg p-6">
                    <div className="space-y-4">
                      <div>
                        <label className="block font-bold text-foreground mb-2">नाम (Name)</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border-2 border-border rounded text-lg"
                          placeholder="अपना नाम लिखें"
                          style={{ lineHeight: "1.8" }}
                        />
                      </div>
                      <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-4">
                        <div className="font-bold text-foreground mb-2">Complex Rendering Examples:</div>
                        <div className="text-2xl space-y-2">
                          <div>क + ् + ष = क्ष (kṣa)</div>
                          <div>त + ् + र = त्र (tra)</div>
                          <div>ज + ् + ञ = ज्ञ (jña)</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-yellow-50 dark:bg-yellow-950/30 border-2 border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                    <p className="text-sm text-muted-foreground">
                      <strong>Requirements:</strong> Devanagari and other Indic scripts need proper conjunct
                      rendering, increased line-height (1.6-1.8), and fonts with full Unicode support.
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Script Categories</h2>
                <div className="bg-card border-2 border-border rounded-lg p-6">
                  <div className="space-y-4 text-sm">
                    <div>
                      <h3 className="font-bold text-foreground mb-2">1. Latin-based (English)</h3>
                      <p className="text-muted-foreground">Simple LTR layout, standard line-height (1.5), minimal special handling required.</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-2">2. Indic Scripts (Devanagari, Bengali, Tamil, etc.)</h3>
                      <p className="text-muted-foreground">
                        LTR layout, complex conjuncts, increased line-height (1.6-1.8), requires Unicode fonts with ligature support.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-2">3. Arabic-based (Urdu)</h3>
                      <p className="text-muted-foreground">
                        RTL layout, cursive joining, contextual forms, requires mirroring entire UI including icons and navigation.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-2">4. Gurmukhi (Punjabi)</h3>
                      <p className="text-muted-foreground">
                        LTR layout, similar to Devanagari but simpler, moderate line-height increase needed.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">CSS Implementation</h2>
                <div className="bg-gray-900 text-gray-100 rounded-lg p-6 text-sm font-mono overflow-x-auto">
                  <pre>{`/* RTL Support */
[dir="rtl"] {
  direction: rtl;
  text-align: right;
}

[dir="rtl"] .icon {
  transform: scaleX(-1); /* Flip icons */
}

/* Complex Scripts */
.devanagari {
  font-family: 'Noto Sans Devanagari', sans-serif;
  line-height: 1.8;
  word-break: keep-all;
}

.bengali {
  font-family: 'Noto Sans Bengali', sans-serif;
  line-height: 1.7;
}

.urdu {
  font-family: 'Noto Nastaliq Urdu', serif;
  direction: rtl;
  text-align: right;
}`}</pre>
                </div>
              </section>
            </div>
                      <ScriptLayoutCodeDownloads />
          </div>

          <div className="col-span-4">
            <div className="sticky top-8 space-y-6">
              <div className="bg-card border-2 border-border rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-4">Pattern Information</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Complexity</div>
                    <div className="font-bold">High</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Script Types</div>
                    <div className="font-bold">12+ scripts</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Impact</div>
                    <div className="font-bold">Layout, Typography, CSS</div>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 dark:bg-orange-950/30 border-2 border-orange-200 dark:border-orange-800 rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-3">Technical Requirements</h3>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li>✓ Unicode font support</li>
                  <li>✓ CSS dir attribute handling</li>
                  <li>✓ BiDi text algorithm</li>
                  <li>✓ Conjunct rendering (Indic)</li>
                  <li>✓ RTL icon flipping</li>
                  <li>✓ Increased line-height</li>
                </ul>
              </div>

              <div className="bg-card border-2 border-border rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-4">Fonts Recommended</h3>
                <ul className="space-y-1 text-xs text-muted-foreground">
                  <li>• Noto Sans Devanagari</li>
                  <li>• Noto Sans Bengali</li>
                  <li>• Noto Sans Tamil</li>
                  <li>• Noto Sans Telugu</li>
                  <li>• Noto Nastaliq Urdu</li>
                  <li>• Noto Sans Gurmukhi</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==================== CODE DOWNLOADS ====================

const SCRIPTLAYOUT_REACT_CODE = `import React, { useState } from 'react';

export default function ScriptLayoutPage() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/script-layout', {
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
        <h1 className="text-2xl font-bold text-foreground mb-2">Script Layout</h1>
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

const SCRIPTLAYOUT_ANGULAR_CODE = `import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ux4g-script-layout',
  standalone: true,
  imports: [CommonModule],
  template: \`
    <div class="min-h-screen flex items-center justify-center bg-background p-4">
      <div class="w-full max-w-lg bg-card border border-border rounded-2xl p-8 shadow-sm">
        <h1 class="text-2xl font-bold text-foreground mb-2">Script Layout</h1>
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
export class ScriptLayoutComponent {
  loading = false;
  submitted = false;
  error = '';

  async onSubmit() {
    this.loading = true;
    this.error = '';
    try {
      const res = await fetch('/api/script-layout', {
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

const SCRIPTLAYOUT_HTML_CODE = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Script Layout — UX4G</title>
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
    <h1>Script Layout</h1>
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
        const res = await fetch('/api/script-layout', {
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

function ScriptLayoutCodeDownloads() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const copyToClipboard = (code: string, id: string) => { navigator.clipboard.writeText(code); setCopiedId(id); setTimeout(() => setCopiedId(null), 2000); };
  const downloadCode = (code: string, filename: string) => { const blob = new Blob([code], { type: 'text/plain' }); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = filename; a.click(); URL.revokeObjectURL(url); };
  const lanes = [
    { key: 'react', title: 'React', desc: 'TypeScript + Hooks', code: SCRIPTLAYOUT_REACT_CODE, filename: 'ScriptLayoutPage.tsx' },
    { key: 'angular', title: 'Angular', desc: 'Standalone Component', code: SCRIPTLAYOUT_ANGULAR_CODE, filename: 'script-layout.component.ts' },
    { key: 'html', title: 'HTML / CSS / JS', desc: 'No framework needed', code: SCRIPTLAYOUT_HTML_CODE, filename: 'script-layout.html' },
  ];
  return (
    <section id="code-downloads" className="space-y-6 scroll-mt-24 mt-12">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Code Downloads</h2>
        <p className="text-muted-foreground mt-1">Production-ready Script Layout implementations.</p>
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
