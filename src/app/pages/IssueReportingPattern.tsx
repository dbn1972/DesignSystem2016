import { useState } from "react";
import { Link } from "react-router";
import {  AlertTriangle, ArrowLeft, CheckCircle, Upload, X, Download, Copy, Check } from "lucide-react";

export default function IssueReportingPattern() {
  const [formData, setFormData] = useState({
    issueType: "",
    severity: "",
    title: "",
    description: "",
    stepsToReproduce: "",
    browser: "",
    device: "",
    screenshot: null as File | null
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.issueType && formData.title && formData.description) {
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormData({
      issueType: "",
      severity: "",
      title: "",
      description: "",
      stepsToReproduce: "",
      browser: "",
      device: "",
      screenshot: null
    });
    setSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-gradient-to-br from-red-50 via-white to-orange-50 border-b-4 border-[#FF9933]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-16">
          <div className="mb-6">
            <Link to="/patterns/feedback" className="text-sm text-muted-foreground hover:text-primary">
              ← Back to Feedback & Rating Patterns
            </Link>
          </div>
          <div className="flex items-start justify-between">
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-orange-500 border-3 border-white shadow-lg rounded-lg flex items-center justify-center">
                  <AlertTriangle size={40} className="text-white" />
                </div>
                <div>
                  <div className="text-sm font-bold text-primary mb-2 uppercase tracking-wide">Feedback Pattern</div>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">Issue Reporting</h1>
                </div>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                Structured form for reporting bugs, errors, technical issues, or service problems with proper categorization
                and detailed documentation for effective resolution.
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-8">
            <div className="bg-red-50 dark:bg-red-950/30 border-2 border-red-200 dark:border-red-800 rounded-lg p-6 mb-6">
              <h2 className="font-bold text-foreground mb-2">Interactive Demo</h2>
              <p className="text-sm text-muted-foreground">
                Report a technical issue or service problem using this structured form.
              </p>
            </div>

            <div className="bg-card border-2 border-border rounded-lg p-4 sm:p-6 lg:p-8">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="border-b-2 border-border pb-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">Report an Issue</h3>
                    <p className="text-sm text-muted-foreground">
                      Help us fix problems quickly by providing detailed information
                    </p>
                  </div>

                  {/* Issue Type */}
                  <div>
                    <label className="block font-bold text-foreground mb-2">
                      Issue Type <span className="text-red-600">*</span>
                    </label>
                    <select aria-label="Select option" value={formData.issueType}
                      onChange={(e) => setFormData({...formData, issueType: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-border rounded focus:border-primary focus:outline-none"
                      required
                    >
                      <option value="">Select issue type</option>
                      <option value="bug">Bug / Error</option>
                      <option value="technical">Technical Problem</option>
                      <option value="performance">Performance Issue</option>
                      <option value="display">Display / UI Issue</option>
                      <option value="data">Data / Content Error</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Severity */}
                  <div>
                    <label className="block font-bold text-foreground mb-2">
                      Severity <span className="text-red-600">*</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                      {[
                        { value: "critical", label: "Critical", color: "red" },
                        { value: "high", label: "High", color: "orange" },
                        { value: "medium", label: "Medium", color: "yellow" },
                        { value: "low", label: "Low", color: "gray" }
                      ].map((sev) => (
                        <button
                          key={sev.value}
                          type="button"
                          onClick={() => setFormData({...formData, severity: sev.value})}
                          className={`px-4 py-3 border-2 rounded font-bold text-sm ${
                            formData.severity === sev.value
                              ? `border-${sev.color}-500 bg-${sev.color}-50 text-${sev.color}-700`
                              : "border-border text-muted-foreground hover:border-gray-400"
                          }`}
                        >
                          {sev.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Title */}
                  <div>
                    <label className="block font-bold text-foreground mb-2">
                      Issue Title <span className="text-red-600">*</span>
                    </label>
                    <input aria-label="text input" type="text"
                      value={formData.title}
                      onChange={(e) => setFormData({...formData, title: e.target.value})}
                      placeholder="Brief description of the problem"
                      className="w-full px-4 py-3 border-2 border-border rounded focus:border-primary focus:outline-none"
                      required
                    />
                  </div>

                  {/* Description */}
                  <div>
                    <label className="block font-bold text-foreground mb-2">
                      Detailed Description <span className="text-red-600">*</span>
                    </label>
                    <textarea aria-label="Text input" value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                      rows={4}
                      placeholder="Explain what happened, what you expected to happen, and any error messages you saw..."
                      className="w-full px-4 py-3 border-2 border-border rounded focus:border-primary focus:outline-none"
                      required
                    />
                  </div>

                  {/* Steps to Reproduce */}
                  <div>
                    <label className="block font-bold text-foreground mb-2">
                      Steps to Reproduce
                    </label>
                    <textarea aria-label="Text input" value={formData.stepsToReproduce}
                      onChange={(e) => setFormData({...formData, stepsToReproduce: e.target.value})}
                      rows={3}
                      placeholder="1. Go to...\n2. Click on...\n3. Error appears..."
                      className="w-full px-4 py-3 border-2 border-border rounded focus:border-primary focus:outline-none"
                    />
                  </div>

                  {/* Environment */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-foreground mb-2">Browser</label>
                      <select aria-label="Select option" value={formData.browser}
                        onChange={(e) => setFormData({...formData, browser: e.target.value})}
                        className="w-full px-4 py-3 border-2 border-border rounded focus:border-primary focus:outline-none"
                      >
                        <option value="">Select browser</option>
                        <option value="chrome">Chrome</option>
                        <option value="firefox">Firefox</option>
                        <option value="safari">Safari</option>
                        <option value="edge">Edge</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-bold text-foreground mb-2">Device</label>
                      <select aria-label="Select option" value={formData.device}
                        onChange={(e) => setFormData({...formData, device: e.target.value})}
                        className="w-full px-4 py-3 border-2 border-border rounded focus:border-primary focus:outline-none"
                      >
                        <option value="">Select device</option>
                        <option value="desktop">Desktop</option>
                        <option value="tablet">Tablet</option>
                        <option value="mobile">Mobile</option>
                      </select>
                    </div>
                  </div>

                  {/* Screenshot Upload */}
                  <div className="bg-background border-2 border-border rounded-lg p-6">
                    <label className="block font-bold text-foreground mb-2">
                      Screenshot (Optional)
                    </label>
                    <div className="flex items-center gap-4">
                      <label className="flex items-center gap-2 px-4 py-2 bg-card border-2 border-border rounded cursor-pointer hover:border-primary">
                        <Upload size={16} />
                        <span className="text-sm font-bold">Choose File</span>
                        <input aria-label="file input" type="file" accept="image/*" className="hidden" />
                      </label>
                      <span className="text-sm text-muted-foreground">PNG, JPG up to 5MB</span>
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="flex items-center gap-4 pt-4">
                    <button
                      type="submit"
                      className="px-8 py-3 bg-red-600 text-white rounded font-bold hover:bg-red-700"
                    >
                      Submit Issue Report
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
                  <h3 className="text-2xl font-bold text-foreground mb-2">Issue Reported Successfully</h3>
                  <p className="text-muted-foreground mb-2">
                    Our technical team has been notified and will investigate this issue.
                  </p>
                  <p className="text-sm text-muted-foreground mb-6">
                    Issue ID: ISS-2026-{Math.floor(Math.random() * 100000).toString().padStart(5, '0')}
                  </p>
                  <button
                    onClick={handleReset}
                    className="px-6 py-3 bg-primary text-white rounded font-bold hover:opacity-90"
                  >
                    Report Another Issue
                  </button>
                </div>
              )}
            </div>
                      <IssueReportingCodeDownloads />
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
                    <div className="text-xs text-muted-foreground mb-1">Average Time</div>
                    <div className="font-bold">3-5 minutes</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Response Time</div>
                    <div className="font-bold">24-48 hours</div>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 dark:bg-orange-950/30 border-2 border-orange-200 dark:border-orange-800 rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-3">Best Practices</h3>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li>✓ Categorize by type and severity</li>
                  <li>✓ Capture environment details automatically</li>
                  <li>✓ Allow screenshot/file attachments</li>
                  <li>✓ Provide tracking reference immediately</li>
                  <li>✓ Send status updates via notification</li>
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
                  <Link to="/patterns/contact-support" className="block text-sm text-primary hover:underline">
                    → Contact & Support
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

const ISSUEREPORTING_REACT_CODE = `import React, { useState } from 'react';

export default function IssueReportingPage() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/issue-reporting', {
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
        <h1 className="text-2xl font-bold text-foreground mb-2">Issue Reporting</h1>
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

const ISSUEREPORTING_ANGULAR_CODE = `import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ux4g-issue-reporting',
  standalone: true,
  imports: [CommonModule],
  template: \`
    <div class="min-h-screen flex items-center justify-center bg-background p-4">
      <div class="w-full max-w-lg bg-card border border-border rounded-2xl p-8 shadow-sm">
        <h1 class="text-2xl font-bold text-foreground mb-2">Issue Reporting</h1>
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
export class IssueReportingComponent {
  loading = false;
  submitted = false;
  error = '';

  async onSubmit() {
    this.loading = true;
    this.error = '';
    try {
      const res = await fetch('/api/issue-reporting', {
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

const ISSUEREPORTING_HTML_CODE = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Issue Reporting — UX4G</title>
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
    <h1>Issue Reporting</h1>
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
        const res = await fetch('/api/issue-reporting', {
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

function IssueReportingCodeDownloads() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const copyToClipboard = (code: string, id: string) => { navigator.clipboard.writeText(code); setCopiedId(id); setTimeout(() => setCopiedId(null), 2000); };
  const downloadCode = (code: string, filename: string) => { const blob = new Blob([code], { type: 'text/plain' }); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = filename; a.click(); URL.revokeObjectURL(url); };
  const lanes = [
    { key: 'react', title: 'React', desc: 'TypeScript + Hooks', code: ISSUEREPORTING_REACT_CODE, filename: 'IssueReportingPage.tsx' },
    { key: 'angular', title: 'Angular', desc: 'Standalone Component', code: ISSUEREPORTING_ANGULAR_CODE, filename: 'issue-reporting.component.ts' },
    { key: 'html', title: 'HTML / CSS / JS', desc: 'No framework needed', code: ISSUEREPORTING_HTML_CODE, filename: 'issue-reporting.html' },
  ];
  return (
    <section id="code-downloads" className="space-y-6 scroll-mt-24 mt-12">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Code Downloads</h2>
        <p className="text-muted-foreground mt-1">Production-ready Issue Reporting implementations.</p>
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
