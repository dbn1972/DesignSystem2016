import { Link } from "react-router";
import { useState } from "react";
import {  Search, AlertCircle, Compass, TrendingUp, HelpCircle, MessageSquare, ArrowRight, Download, Copy, Check } from "lucide-react";

const SUGGESTIONS = [
  "Try using different keywords",
  "Check spelling of your search term",
  "Use more general terms (e.g., 'license' instead of 'driving license renewal for commercial vehicle')",
  "Browse by category to find similar services"
];

const ALTERNATIVE_SERVICES = [
  { name: "Driving License Application", category: "Transport" },
  { name: "Vehicle Registration", category: "Transport" },
  { name: "Learning License", category: "Transport" }
];

const POPULAR_SERVICES = [
  { name: "Passport Application", searches: "12,450 searches/month" },
  { name: "PAN Card", searches: "8,230 searches/month" },
  { name: "Aadhaar Enrollment", searches: "6,780 searches/month" }
];

export default function NoResultsPattern() {
  const [query] = useState("passpert apliction"); // Intentional typo
  const [showGuidedFinder, setShowGuidedFinder] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b-2 border-border">
        <div className="max-w-[1200px] mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link to="/patterns/search-discovery" className="text-sm text-muted-foreground hover:text-primary">
                ← Back to Patterns
              </Link>
              <span className="text-muted-foreground">|</span>
              <span className="text-sm font-bold text-foreground">No Results / Zero State</span>
            </div>
          </div>
        </div>
      </header>

      {/* Search Bar */}
      <div className="bg-card border-b border-border">
        <div className="max-w-[1200px] mx-auto px-8 py-6">
          <div className="relative max-w-[600px]">
            <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <input aria-label="text input" type="text"
              value={query}
              readOnly
              className="w-full pl-12 pr-4 py-3 border-2 border-red-300 rounded-lg bg-red-50 dark:bg-red-900/20"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1200px] mx-auto px-8 py-12">
        
        <div className="max-w-[900px] mx-auto">
          
          {/* No Results Message */}
          <div className="text-center mb-12">
            <div className="inline-block p-4 bg-orange-100 rounded-full mb-4">
              <AlertCircle size={64} className="text-orange-600" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-3">
              No services found for "{query}"
            </h1>
            <p className="text-lg text-muted-foreground">
              We couldn't find any services matching your search. Here are some ways to find what you need:
            </p>
          </div>

          {/* Search Suggestions */}
          <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-300 rounded-lg p-8 mb-8">
            <div className="flex items-start gap-3 mb-4">
              <HelpCircle size={24} className="text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="font-bold text-foreground mb-2">Search Tips</h2>
                <p className="text-sm text-muted-foreground mb-4">
                  Try these suggestions to improve your search results:
                </p>
              </div>
            </div>
            <ul className="space-y-2 ml-9">
              {SUGGESTIONS.map((suggestion, i) => (
                <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>{suggestion}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Did You Mean */}
          <div className="bg-card border-2 border-border rounded-lg p-6 mb-8">
            <h2 className="font-bold text-foreground mb-4">Did you mean?</h2>
            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-300 text-blue-900 rounded-lg hover:bg-blue-100 font-bold">
                "passport application"
              </button>
              <button className="px-4 py-2 bg-background border-2 border-border text-foreground rounded-lg hover:bg-muted">
                "passport status"
              </button>
              <button className="px-4 py-2 bg-background border-2 border-border text-foreground rounded-lg hover:bg-muted">
                "passport renewal"
              </button>
            </div>
          </div>

          {/* Alternative Services */}
          <div className="bg-card border-2 border-border rounded-lg p-6 mb-8">
            <h2 className="font-bold text-foreground mb-4">Related Services</h2>
            <p className="text-sm text-muted-foreground mb-4">
              These services might be what you're looking for:
            </p>
            <div className="space-y-3">
              {ALTERNATIVE_SERVICES.map((service, i) => (
                <Link
                  key={i}
                  to={`/service/${service.name.toLowerCase().replace(/ /g, '-')}`}
                  className="block p-4 border-2 border-border rounded-lg hover:border-primary hover:bg-blue-50 dark:bg-blue-900/20 transition-all group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-bold text-foreground group-hover:text-primary">
                        {service.name}
                      </div>
                      <div className="text-sm text-muted-foreground">{service.category}</div>
                    </div>
                    <ArrowRight size={20} className="text-muted-foreground group-hover:text-primary" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Guided Finder CTA */}
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-purple-300 rounded-lg p-8 mb-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-card rounded-lg">
                <Compass size={32} className="text-purple-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-foreground mb-2">Not sure which service you need?</h2>
                <p className="text-muted-foreground mb-4">
                  Our guided service finder asks a few simple questions to help identify the exact service you need.
                </p>
                <button
                  onClick={() => setShowGuidedFinder(true)}
                  className="px-6 py-3 bg-primary text-white rounded font-bold hover:opacity-90 flex items-center gap-2"
                >
                  <Compass size={20} />
                  <span>Start Guided Finder</span>
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Popular Services */}
          <div className="bg-card border-2 border-border rounded-lg p-6 mb-8">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp size={20} className="text-muted-foreground" />
              <h2 className="font-bold text-foreground">Popular Services</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {POPULAR_SERVICES.map((service, i) => (
                <Link
                  key={i}
                  to={`/service/${service.name.toLowerCase().replace(/ /g, '-')}`}
                  className="p-4 border-2 border-border rounded-lg hover:border-primary hover:shadow-md transition-all text-center group"
                >
                  <div className="font-bold text-foreground group-hover:text-primary mb-1">
                    {service.name}
                  </div>
                  <div className="text-xs text-muted-foreground">{service.searches}</div>
                </Link>
              ))}
            </div>
          </div>

          {/* Browse by Category */}
          <div className="bg-card border-2 border-border rounded-lg p-6 mb-8">
            <h2 className="font-bold text-foreground mb-4">Browse by Category</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {['Transport', 'Civil Registration', 'Identity', 'Revenue', 'Election', 'Travel'].map((category, i) => (
                <Link
                  key={i}
                  to={`/services/category/${category.toLowerCase()}`}
                  className="px-4 py-3 border-2 border-border rounded-lg hover:border-primary hover:bg-blue-50 dark:bg-blue-900/20 text-center font-bold text-foreground hover:text-primary transition-all"
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Support */}
          <div className="bg-yellow-50 dark:bg-yellow-950/30 border-2 border-yellow-300 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <MessageSquare size={24} className="text-yellow-700 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-foreground mb-2">Still can't find what you need?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Our support team can help you find the right service or answer your questions.
                </p>
                <div className="flex gap-3">
                  <Link
                    to="/patterns/contact-support/general-contact"
                    className="px-4 py-2 bg-primary text-white rounded font-bold hover:opacity-90"
                  >
                    Contact Support
                  </Link>
                  <Link
                    to="/help"
                    className="px-4 py-2 border-2 border-border rounded font-bold hover:border-gray-400"
                  >
                    View Help Center
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Pattern Info */}
          <div className="mt-12 bg-orange-50 dark:bg-orange-950/30 border-2 border-orange-200 dark:border-orange-800 rounded-lg p-6">
            <h3 className="font-bold text-foreground mb-3">Recovery Pattern Features</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
              <div>
                <div className="font-bold text-muted-foreground mb-2">Immediate Help</div>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Search tips</li>
                  <li>• Spelling suggestions</li>
                  <li>• Did you mean</li>
                </ul>
              </div>
              <div>
                <div className="font-bold text-muted-foreground mb-2">Alternatives</div>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Related services</li>
                  <li>• Popular services</li>
                  <li>• Category browse</li>
                </ul>
              </div>
              <div>
                <div className="font-bold text-muted-foreground mb-2">Escalation</div>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Guided finder</li>
                  <li>• Contact support</li>
                  <li>• Help center</li>
                </ul>
              </div>
            </div>
          </div>

        </div>

      
        <NoResultsCodeDownloads />

      </div>
    </div>
  );
}

// ==================== CODE DOWNLOADS ====================

const NORESULTS_REACT_CODE = `import React, { useState } from 'react';

export default function NoResultsPage() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/no-results', {
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
        <h1 className="text-2xl font-bold text-foreground mb-2">No Results</h1>
        <p className="text-sm text-muted-foreground mb-6">Government digital service pattern</p>
        {error && <div role="alert" className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-sm text-red-700 dark:text-red-400">{error}</div>}
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

const NORESULTS_ANGULAR_CODE = `import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ux4g-no-results',
  standalone: true,
  imports: [CommonModule],
  template: \`
    <div class="min-h-screen flex items-center justify-center bg-background p-4">
      <div class="w-full max-w-lg bg-card border border-border rounded-2xl p-8 shadow-sm">
        <h1 class="text-2xl font-bold text-foreground mb-2">No Results</h1>
        <p class="text-sm text-muted-foreground mb-6">Government digital service pattern</p>
        <div *ngIf="error" role="alert" class="mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-sm text-red-700 dark:text-red-400">{{ error }}</div>
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
export class NoResultsComponent {
  loading = false;
  submitted = false;
  error = '';

  async onSubmit() {
    this.loading = true;
    this.error = '';
    try {
      const res = await fetch('/api/no-results', {
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

const NORESULTS_HTML_CODE = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>No Results — UX4G</title>
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
    <h1>No Results</h1>
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
        const res = await fetch('/api/no-results', {
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

function NoResultsCodeDownloads() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const copyToClipboard = (code: string, id: string) => { navigator.clipboard.writeText(code); setCopiedId(id); setTimeout(() => setCopiedId(null), 2000); };
  const downloadCode = (code: string, filename: string) => { const blob = new Blob([code], { type: 'text/plain' }); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = filename; a.click(); URL.revokeObjectURL(url); };
  const lanes = [
    { key: 'react', title: 'React', desc: 'TypeScript + Hooks', code: NORESULTS_REACT_CODE, filename: 'NoResultsPage.tsx' },
    { key: 'angular', title: 'Angular', desc: 'Standalone Component', code: NORESULTS_ANGULAR_CODE, filename: 'no-results.component.ts' },
    { key: 'html', title: 'HTML / CSS / JS', desc: 'No framework needed', code: NORESULTS_HTML_CODE, filename: 'no-results.html' },
  ];
  return (
    <section id="code-downloads" className="space-y-6 scroll-mt-24 mt-12">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Code Downloads</h2>
        <p className="text-muted-foreground mt-1">Production-ready No Results implementations.</p>
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
