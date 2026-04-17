import { useState } from "react";
import type { ElementType } from "react";
import {  ArrowRight, BookOpen, CheckCircle, Package, Shield, Workflow, Download, Copy, Check } from "lucide-react";
import { Link } from "react-router";

const patternAreas = [
  {
    title: "Authentication",
    description: "Sign in, sign up, OTP verification, account recovery, and password reset flows.",
    href: "/patterns/identity",
  },
  {
    title: "Forms",
    description: "Multi-step forms, save-and-resume, review and confirm, validation, and uploads.",
    href: "/patterns/forms",
  },
  {
    title: "Submission",
    description: "Confirmation, notifications, and post-submit service handoff states.",
    href: "/patterns/service",
  },
  {
    title: "Tracking",
    description: "Status lifecycle, timelines, and progress communication for applications.",
    href: "/patterns/status-lifecycle",
  },
  {
    title: "Payment",
    description: "Payment summary, receipt, retry, and failure handling flows.",
    href: "/patterns/payment",
  },
  {
    title: "Support",
    description: "Contact support, escalation, and citizen-help pathways.",
    href: "/patterns/contact-support",
  },
];

export default function AngularPatternsDocs() {
  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-to-br from-[#000080] via-[#000060] to-[#000080] text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <Workflow size={40} className="text-[#FF9933]" />
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-blue-200">@ux4g/angular-patterns</p>
                <h1 className="text-4xl lg:text-3xl sm:text-4xl lg:text-5xl font-bold">Angular Pattern Docs</h1>
              </div>
            </div>
            <p className="text-xl text-blue-100 max-w-3xl">
              The Angular patterns package assembles complete government-service flows from the core
              UX4G component set. It is the right place for reusable service patterns, not business
              logic.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            <InfoCard
              icon={Package}
              title="What it is"
              body="A composition layer for full flows such as sign-in, OTP, recovery, upload, submission, and payment."
            />
            <InfoCard
              icon={Shield}
              title="What it is not"
              body="It does not replace the core component library. Instead, it builds on top of it with reusable flow structure."
            />
            <InfoCard
              icon={BookOpen}
              title="How to use it"
              body="Import the relevant pattern, feed it data and callbacks, and keep the interaction contract consistent."
            />
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {patternAreas.map((area) => (
              <Link
                key={area.title}
                to={area.href}
                className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary hover:shadow-lg"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {area.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{area.description}</p>
                  </div>
                  <ArrowRight className="text-muted-foreground group-hover:text-primary transition-colors" size={18} />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-border bg-card p-6">
            <h2 className="text-2xl font-bold text-foreground">Angular pattern package scope</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <ScopeCard title="Authentication" items={["Sign In", "Sign Up", "OTP Verification", "Forgot Password", "Account Recovery"]} />
              <ScopeCard title="Forms" items={["Save and Resume Later", "Multi-Document Upload", "Review and Confirm"]} />
              <ScopeCard title="Submission" items={["Submission Confirmation", "Notification Blocks"]} />
              <ScopeCard title="Tracking + Payment" items={["Status Tracking", "Fee Summary", "Payment Summary"]} />
            </div>
          </div>
        </div>
      </section>
    
        <AngularPatternsDocsCodeDownloads />

      </div>
  );
}

function InfoCard({
  icon: Icon,
  title,
  body,
}: {
  icon: ElementType;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Icon size={24} />
      </div>
      <h2 className="text-xl font-bold text-foreground">{title}</h2>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
    </div>
  );
}

function ScopeCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-xl border border-border p-4">
      <h3 className="font-bold text-foreground">{title}</h3>
      <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <CheckCircle className="mt-0.5 text-green-600" size={16} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ==================== CODE DOWNLOADS ====================

const ANGULARPATTERNSDOCS_REACT_CODE = `import React, { useState } from 'react';

export default function AngularPatternsDocsPage() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/angular-patterns-docs', {
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
        <h1 className="text-2xl font-bold text-foreground mb-2">Angular Patterns Docs</h1>
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

const ANGULARPATTERNSDOCS_ANGULAR_CODE = `import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ux4g-angular-patterns-docs',
  standalone: true,
  imports: [CommonModule],
  template: \`
    <div class="min-h-screen flex items-center justify-center bg-background p-4">
      <div class="w-full max-w-lg bg-card border border-border rounded-2xl p-8 shadow-sm">
        <h1 class="text-2xl font-bold text-foreground mb-2">Angular Patterns Docs</h1>
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
export class AngularPatternsDocsComponent {
  loading = false;
  submitted = false;
  error = '';

  async onSubmit() {
    this.loading = true;
    this.error = '';
    try {
      const res = await fetch('/api/angular-patterns-docs', {
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

const ANGULARPATTERNSDOCS_HTML_CODE = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Angular Patterns Docs — UX4G</title>
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
    <h1>Angular Patterns Docs</h1>
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
        const res = await fetch('/api/angular-patterns-docs', {
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

function AngularPatternsDocsCodeDownloads() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const copyToClipboard = (code: string, id: string) => { navigator.clipboard.writeText(code); setCopiedId(id); setTimeout(() => setCopiedId(null), 2000); };
  const downloadCode = (code: string, filename: string) => { const blob = new Blob([code], { type: 'text/plain' }); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = filename; a.click(); URL.revokeObjectURL(url); };
  const lanes = [
    { key: 'react', title: 'React', desc: 'TypeScript + Hooks', code: ANGULARPATTERNSDOCS_REACT_CODE, filename: 'AngularPatternsDocsPage.tsx' },
    { key: 'angular', title: 'Angular', desc: 'Standalone Component', code: ANGULARPATTERNSDOCS_ANGULAR_CODE, filename: 'angular-patterns-docs.component.ts' },
    { key: 'html', title: 'HTML / CSS / JS', desc: 'No framework needed', code: ANGULARPATTERNSDOCS_HTML_CODE, filename: 'angular-patterns-docs.html' },
  ];
  return (
    <section id="code-downloads" className="space-y-6 scroll-mt-24 mt-12">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Code Downloads</h2>
        <p className="text-muted-foreground mt-1">Production-ready Angular Patterns Docs implementations.</p>
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
