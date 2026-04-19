import { Link } from "react-router";
import { useState } from "react";
import {  Search, Filter, Grid, List as ListIcon, ArrowRight, CheckCircle, Clock, MapPin, Download, Copy, Check } from "lucide-react";

const MOCK_RESULTS = [
  {
    id: 1,
    name: "Passport Application",
    description: "Apply for a new Indian passport for international travel. Required for all international travel outside India.",
    department: "Ministry of External Affairs",
    category: "Travel Documents",
    processingTime: "30-45 days",
    fee: "₹1,500",
    eligibility: ["Indian Citizen", "Age 18+", "Valid Address Proof"],
    popular: true,
    match: 95
  },
  {
    id: 2,
    name: "Passport Renewal",
    description: "Renew your existing passport that is expired or about to expire within 1 year.",
    department: "Ministry of External Affairs",
    category: "Travel Documents",
    processingTime: "15-30 days",
    fee: "₹1,500",
    eligibility: ["Existing Passport", "Indian Citizen"],
    popular: true,
    match: 90
  },
  {
    id: 3,
    name: "Passport Re-issue",
    description: "Re-issue passport for reasons like change of address, name change, or lost/damaged passport.",
    department: "Ministry of External Affairs",
    category: "Travel Documents",
    processingTime: "30 days",
    fee: "₹2,000",
    eligibility: ["Previous Passport Details", "FIR (if lost)"],
    popular: false,
    match: 85
  },
  {
    id: 4,
    name: "Passport Status Tracking",
    description: "Track the status of your passport application online using your application reference number.",
    department: "Ministry of External Affairs",
    category: "Status & Information",
    processingTime: "Instant",
    fee: "Free",
    eligibility: ["Application Reference Number"],
    popular: true,
    match: 75
  },
];

export default function SearchResultsPattern() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');
  const [sortBy, setSortBy] = useState('relevance');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const query = "passport"; // Simulated query
  const resultCount = MOCK_RESULTS.length;

  const filteredResults = selectedCategory
    ? MOCK_RESULTS.filter(r => r.category === selectedCategory)
    : MOCK_RESULTS;

  const sortedResults = [...filteredResults].sort((a, b) => {
    if (sortBy === 'relevance') return b.match - a.match;
    if (sortBy === 'popular') return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    return 0;
  });

  const categories = [...new Set(MOCK_RESULTS.map(r => r.category))];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b-2 border-border">
        <div className="max-w-[1400px] mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link to="/patterns/search-discovery" className="text-sm text-muted-foreground hover:text-primary">
                ← Back to Patterns
              </Link>
              <span className="text-muted-foreground">|</span>
              <span className="text-sm font-bold text-foreground">Search Results</span>
            </div>
          </div>
        </div>
      </header>

      {/* Search Bar */}
      <div className="bg-card border-b border-border">
        <div className="max-w-[1400px] mx-auto px-8 py-6">
          <div className="relative max-w-[600px]">
            <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <input aria-label="text input" type="text"
              value={query}
              readOnly
              className="w-full pl-12 pr-4 py-3 border-2 border-border rounded-lg bg-background"
            />
          </div>
        </div>
                  <SearchResultsCodeDownloads />
          </div>

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-8 py-8">
        
        <div className="grid grid-cols-12 gap-8">
          
          {/* Sidebar - Filters */}
          <div className="col-span-3">
            <div className="bg-card border-2 border-border rounded-lg p-6 sticky top-24">
              <div className="flex items-center gap-2 mb-6">
                <Filter size={20} className="text-muted-foreground" />
                <p className="font-bold text-foreground">Filters</p>
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <h2 className="font-bold text-sm text-foreground mb-3">Category</h2>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input aria-label="Radio option" type="radio"
                      name="category"
                      checked={selectedCategory === null}
                      onChange={() => setSelectedCategory(null)}
                      className="w-4 h-4"
                    />
                    <span className="text-sm text-muted-foreground">All Categories</span>
                  </label>
                  {categories.map(cat => (
                    <label key={cat} className="flex items-center gap-2 cursor-pointer">
                      <input aria-label="Radio option" type="radio"
                        name="category"
                        checked={selectedCategory === cat}
                        onChange={() => setSelectedCategory(cat)}
                        className="w-4 h-4"
                      />
                      <span className="text-sm text-muted-foreground">{cat}</span>
                      <span className="ml-auto text-xs text-muted-foreground">
                        ({MOCK_RESULTS.filter(r => r.category === cat).length})
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Department Filter */}
              <div>
                <h2 className="font-bold text-sm text-foreground mb-3">Department</h2>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input aria-label="Checkbox" type="checkbox" className="w-4 h-4" defaultChecked />
                    <span className="text-sm text-muted-foreground">Ministry of External Affairs</span>
                    <span className="ml-auto text-xs text-muted-foreground">(4)</span>
                  </label>
                </div>
              </div>

              {/* Clear Filters */}
              {selectedCategory && (
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="mt-6 w-full py-2 text-sm text-primary hover:underline"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </div>

          {/* Results */}
          <div className="col-span-9">
            
            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-2xl font-bold text-foreground mb-1">
                  Search Results for "{query}"
                </h1>
                <p className="text-sm text-muted-foreground">
                  {sortedResults.length} {sortedResults.length === 1 ? 'service' : 'services'} found
                </p>
              </div>
              <div className="flex items-center gap-4">
                {/* Sort */}
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Sort by:</span>
                  <select aria-label="Select option" value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-3 py-2 border-2 border-border rounded text-sm"
                  >
                    <option value="relevance">Relevance</option>
                    <option value="popular">Most Popular</option>
                    <option value="name">Name (A-Z)</option>
                  </select>
                </div>
                
                {/* View Toggle */}
                <div className="flex border-2 border-border rounded">
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 ${viewMode === 'list' ? 'bg-muted' : 'bg-card'}`}
                    aria-label="List view"
                  >
                    <ListIcon size={20} />
                  </button>
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 border-l-2 border-border ${viewMode === 'grid' ? 'bg-muted' : 'bg-card'}`}
                    aria-label="Grid view"
                  >
                    <Grid size={20} />
                  </button>
                </div>
              </div>
            </div>

            {/* Results List */}
            <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 gap-6' : 'space-y-4'}>
              {sortedResults.map((result) => (
                <ResultCard key={result.id} result={result} viewMode={viewMode} query={query} />
              ))}
            </div>

            {/* No Results */}
            {sortedResults.length === 0 && (
              <div className="bg-card border-2 border-border rounded-lg p-12 text-center">
                <div className="text-muted-foreground mb-4">No services found with current filters</div>
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="px-6 py-3 bg-primary text-white rounded font-bold"
                >
                  Clear Filters
                </button>
              </div>
            )}

          </div>

        </div>

        {/* Pattern Info */}
        <div className="mt-12 bg-card border-2 border-border rounded-lg p-6">
          <h2 className="font-bold text-foreground mb-4">Pattern Features Demonstrated</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
            <div>
              <div className="font-bold text-muted-foreground mb-2">Filtering</div>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Category filter</li>
                <li>• Department filter</li>
                <li>• Clear filters</li>
              </ul>
            </div>
            <div>
              <div className="font-bold text-muted-foreground mb-2">Sorting</div>
              <ul className="space-y-1 text-muted-foreground">
                <li>• By relevance</li>
                <li>• By popularity</li>
                <li>• By name</li>
              </ul>
            </div>
            <div>
              <div className="font-bold text-muted-foreground mb-2">Views</div>
              <ul className="space-y-1 text-muted-foreground">
                <li>• List view</li>
                <li>• Grid view</li>
                <li>• Responsive layout</li>
              </ul>
            </div>
            <div>
              <div className="font-bold text-muted-foreground mb-2">Display</div>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Relevance score</li>
                <li>• Keyword highlight</li>
                <li>• Service details</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

// ==================== COMPONENTS ====================

function ResultCard({ result, viewMode, query }: {
  result: typeof MOCK_RESULTS[0];
  viewMode: 'grid' | 'list';
  query: string;
}) {
  const highlightText = (text: string) => {
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return parts.map((part, i) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <mark key={i} className="bg-yellow-200 font-bold">{part}</mark>
      ) : (
        part
      )
    );
  };

  return (
    <div className="bg-card border-2 border-border rounded-lg p-6 hover:border-primary hover:shadow-md transition-all">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h2 className="text-lg font-bold text-foreground">
              {highlightText(result.name)}
            </h2>
            {result.popular && (
              <span className="px-2 py-1 bg-yellow-100 border border-yellow-300 text-yellow-800 dark:text-yellow-300 text-xs font-bold rounded">
                POPULAR
              </span>
            )}
          </div>
          <p className="text-sm text-muted-foreground mb-2">{result.department}</p>
        </div>
        <div className="text-right">
          <div className="text-xs text-muted-foreground mb-1">Relevance</div>
          <div className="text-lg font-bold text-[#138808]">{result.match}%</div>
        </div>
      </div>

      <p className="text-sm text-muted-foreground mb-4">{result.description}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 text-sm">
        <div className="flex items-center gap-2">
          <Clock size={16} className="text-muted-foreground" />
          <div>
            <div className="text-xs text-muted-foreground">Processing Time</div>
            <div className="font-bold text-foreground">{result.processingTime}</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <MapPin size={16} className="text-muted-foreground" />
          <div>
            <div className="text-xs text-muted-foreground">Application Fee</div>
            <div className="font-bold text-foreground">{result.fee}</div>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <div className="text-xs font-bold text-muted-foreground mb-2">Eligibility:</div>
        <div className="flex flex-wrap gap-2">
          {result.eligibility.map((req, i) => (
            <span key={i} className="text-xs bg-muted px-2 py-1 rounded flex items-center gap-1">
              <CheckCircle size={12} className="text-green-600" />
              {req}
            </span>
          ))}
        </div>
      </div>

      <div className="flex gap-3">
        <button className="flex-1 px-4 py-2 bg-primary text-white rounded font-bold hover:opacity-90">
          Apply Now
        </button>
        <button className="px-4 py-2 border-2 border-border text-muted-foreground rounded font-bold hover:border-border flex items-center gap-2">
          <span>Learn More</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}

// ==================== CODE DOWNLOADS ====================

const SEARCHRESULTS_REACT_CODE = `import React, { useState } from 'react';

export default function SearchResultsPage() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/search-results', {
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
        <h1 className="text-2xl font-bold text-foreground mb-2">Search Results</h1>
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

const SEARCHRESULTS_ANGULAR_CODE = `import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ux4g-search-results',
  standalone: true,
  imports: [CommonModule],
  template: \`
    <div class="min-h-screen flex items-center justify-center bg-background p-4">
      <div class="w-full max-w-lg bg-card border border-border rounded-2xl p-8 shadow-sm">
        <h1 class="text-2xl font-bold text-foreground mb-2">Search Results</h1>
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
export class SearchResultsComponent {
  loading = false;
  submitted = false;
  error = '';

  async onSubmit() {
    this.loading = true;
    this.error = '';
    try {
      const res = await fetch('/api/search-results', {
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

const SEARCHRESULTS_HTML_CODE = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Search Results — UX4G</title>
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
    <h1>Search Results</h1>
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
        const res = await fetch('/api/search-results', {
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

function SearchResultsCodeDownloads() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const copyToClipboard = (code: string, id: string) => { navigator.clipboard.writeText(code); setCopiedId(id); setTimeout(() => setCopiedId(null), 2000); };
  const downloadCode = (code: string, filename: string) => { const blob = new Blob([code], { type: 'text/plain' }); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = filename; a.click(); URL.revokeObjectURL(url); };
  const lanes = [
    { key: 'react', title: 'React', desc: 'TypeScript + Hooks', code: SEARCHRESULTS_REACT_CODE, filename: 'SearchResultsPage.tsx' },
    { key: 'angular', title: 'Angular', desc: 'Standalone Component', code: SEARCHRESULTS_ANGULAR_CODE, filename: 'search-results.component.ts' },
    { key: 'html', title: 'HTML / CSS / JS', desc: 'No framework needed', code: SEARCHRESULTS_HTML_CODE, filename: 'search-results.html' },
  ];
  return (
    <section id="code-downloads" className="space-y-6 scroll-mt-24 mt-12">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Code Downloads</h2>
        <p className="text-muted-foreground mt-1">Production-ready Search Results implementations.</p>
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
