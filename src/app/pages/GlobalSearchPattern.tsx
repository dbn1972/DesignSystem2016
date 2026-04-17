import { Link } from "react-router";
import { useState, useEffect } from "react";
import {  Search, X, TrendingUp, Clock, ArrowRight, Loader, Download, Copy, Check } from "lucide-react";

// Mock service data
const SERVICES = [
  { id: 1, name: "Passport Application", category: "Travel", department: "Ministry of External Affairs", keywords: ["passport", "travel", "visa"] },
  { id: 2, name: "Driving License", category: "Transport", department: "Ministry of Road Transport", keywords: ["dl", "driving", "license", "vehicle"] },
  { id: 3, name: "Birth Certificate", category: "Civil Registration", department: "Municipal Corporation", keywords: ["birth", "certificate", "registration"] },
  { id: 4, name: "Aadhaar Enrollment", category: "Identity", department: "UIDAI", keywords: ["aadhaar", "uid", "identity", "enrollment"] },
  { id: 5, name: "PAN Card Application", category: "Income Tax", department: "Income Tax Department", keywords: ["pan", "tax", "card"] },
  { id: 6, name: "Voter ID Card", category: "Election", department: "Election Commission", keywords: ["voter", "election", "epic", "id"] },
  { id: 7, name: "Ration Card", category: "Food & Supplies", department: "Department of Food", keywords: ["ration", "pds", "food"] },
  { id: 8, name: "Marriage Certificate", category: "Civil Registration", department: "Municipal Corporation", keywords: ["marriage", "certificate", "registration"] },
  { id: 9, name: "Income Certificate", category: "Revenue", department: "Revenue Department", keywords: ["income", "certificate", "revenue"] },
  { id: 10, name: "Caste Certificate", category: "Revenue", department: "Revenue Department", keywords: ["caste", "certificate", "sc", "st", "obc"] },
];

const POPULAR_SEARCHES = ["Passport", "Driving License", "Birth Certificate", "Aadhaar", "PAN Card"];
const RECENT_SEARCHES = ["Voter ID", "Ration Card"];

export default function GlobalSearchPattern() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<typeof SERVICES>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);

  useEffect(() => {
    if (query.length >= 2) {
      setIsLoading(true);
      // Simulate API delay
      const timer = setTimeout(() => {
        const filtered = SERVICES.filter(service =>
          service.name.toLowerCase().includes(query.toLowerCase()) ||
          service.keywords.some(keyword => keyword.toLowerCase().includes(query.toLowerCase()))
        ).slice(0, 5);
        setSuggestions(filtered);
        setShowSuggestions(true);
        setIsLoading(false);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
      setIsLoading(false);
    }
  }, [query]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!showSuggestions) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setFocusedIndex(prev => Math.min(prev + 1, suggestions.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setFocusedIndex(prev => Math.max(prev - 1, -1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (focusedIndex >= 0) {
        handleSelectService(suggestions[focusedIndex]);
      }
    } else if (e.key === 'Escape') {
      setShowSuggestions(false);
      setFocusedIndex(-1);
    }
  };

  const handleSelectService = (service: typeof SERVICES[0]) => {
    console.log('Selected service:', service.name);
    setQuery('');
    setShowSuggestions(false);
    setFocusedIndex(-1);
  };

  const handleClear = () => {
    setQuery('');
    setSuggestions([]);
    setShowSuggestions(false);
    setFocusedIndex(-1);
  };

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
              <span className="text-sm font-bold text-foreground">Global Search</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-[1200px] mx-auto px-8 py-12">
        
        <div className="max-w-[800px] mx-auto">
          
          {/* Title Section */}
          <div className="text-center mb-12">
            <div className="inline-block p-4 bg-purple-100 rounded-full mb-4">
              <Search size={48} className="text-purple-600" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-3">Find Government Services</h1>
            <p className="text-lg text-muted-foreground">
              Search by service name, category, or what you need help with
            </p>
          </div>

          {/* Search Input */}
          <div className="relative mb-12">
            <div className="relative">
              <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <input role="combobox" type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                onFocus={() => query.length >= 2 && setShowSuggestions(true)}
                placeholder="Search for services... (e.g., passport, license, certificate)"
                className="w-full pl-12 pr-12 py-4 text-lg border-2 border-border rounded-lg focus:outline-none focus:border-primary shadow-sm"
                aria-label="Search for government services"
                aria-autocomplete="list"
                aria-controls="search-suggestions"
                aria-expanded={showSuggestions}
              />
              {isLoading && (
                <Loader size={20} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground animate-spin" />
              )}
              {query && !isLoading && (
                <button
                  onClick={handleClear}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-muted-foreground"
                  aria-label="Clear search"
                >
                  <X size={20} />
                </button>
              )}
            </div>

            {/* Suggestions Dropdown */}
            {showSuggestions && suggestions.length > 0 && (
              <div
                id="search-suggestions"
                role="listbox"
                className="absolute top-full left-0 right-0 mt-2 bg-card border-2 border-border rounded-lg shadow-lg z-10"
              >
                <div className="p-2">
                  <div className="text-xs font-bold text-muted-foreground px-3 py-2">
                    Suggested Services ({suggestions.length})
                  </div>
                  {suggestions.map((service, index) => (
                    <button
                      key={service.id}
                      role="option"
                      aria-selected={focusedIndex === index}
                      onClick={() => handleSelectService(service)}
                      className={`w-full text-left px-3 py-3 rounded transition-colors ${
                        focusedIndex === index
                          ? 'bg-blue-50 dark:bg-blue-950/30 border-l-4 border-primary'
                          : 'hover:bg-background'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-bold text-foreground">{service.name}</div>
                          <div className="text-sm text-muted-foreground">{service.department}</div>
                        </div>
                        <div className="text-xs bg-muted px-2 py-1 rounded">
                          {service.category}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* No Suggestions */}
            {showSuggestions && suggestions.length === 0 && !isLoading && query.length >= 2 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-card border-2 border-border rounded-lg shadow-lg z-10 p-6 text-center">
                <div className="text-muted-foreground mb-4">No services found for "{query}"</div>
                <Link
                  to="/patterns/search-discovery"
                  className="inline-flex items-center gap-2 text-primary hover:underline"
                >
                  <span>Try our guided service finder</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            )}
          </div>

          {/* Empty State - Show when no query */}
          {!query && (
            <div className="space-y-8">
              
              {/* Popular Searches */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp size={20} className="text-muted-foreground" />
                  <h2 className="text-lg font-bold text-foreground">Popular Services</h2>
                </div>
                <div className="flex flex-wrap gap-3">
                  {POPULAR_SEARCHES.map((search, i) => (
                    <button
                      key={i}
                      onClick={() => setQuery(search)}
                      className="px-4 py-2 bg-card border-2 border-border rounded-lg hover:border-primary hover:bg-blue-50 transition-colors"
                    >
                      {search}
                    </button>
                  ))}
                </div>
              </div>

              {/* Recent Searches */}
              {RECENT_SEARCHES.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Clock size={20} className="text-muted-foreground" />
                    <h2 className="text-lg font-bold text-foreground">Recent Searches</h2>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {RECENT_SEARCHES.map((search, i) => (
                      <button
                        key={i}
                        onClick={() => setQuery(search)}
                        className="px-4 py-2 bg-card border-2 border-border rounded-lg hover:border-primary hover:bg-blue-50 transition-colors flex items-center gap-2"
                      >
                        <Clock size={16} className="text-muted-foreground" />
                        {search}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Browse by Category */}
              <div>
                <h2 className="text-lg font-bold text-foreground mb-4">Browse by Category</h2>
                <div className="grid grid-cols-2 gap-4">
                  {['Civil Registration', 'Transport', 'Identity', 'Revenue', 'Election', 'Food & Supplies'].map((category, i) => (
                    <Link
                      key={i}
                      to={`/patterns/search-discovery/search-results?category=${category}`}
                      className="p-4 bg-card border-2 border-border rounded-lg hover:border-primary hover:shadow-md transition-all group"
                    >
                      <div className="font-bold text-foreground group-hover:text-primary mb-1">
                        {category}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {SERVICES.filter(s => s.category === category).length} services
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Help Section */}
              <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-300 rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-3">Need help finding a service?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Not sure which service you need? Our guided finder asks a few questions to help identify 
                  the right service for you.
                </p>
                <Link
                  to="/patterns/search-discovery"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded font-bold hover:opacity-90"
                >
                  <span>Start Guided Finder</span>
                  <ArrowRight size={20} />
                </Link>
              </div>

            </div>
          )}

          {/* Pattern Info */}
          <div className="mt-12 bg-purple-50 dark:bg-purple-950/30 border-2 border-purple-200 dark:border-purple-800 rounded-lg p-6">
            <h3 className="font-bold text-foreground mb-3">Pattern Behavior</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
              <div>
                <div className="text-muted-foreground mb-1">Autocomplete Trigger</div>
                <div className="font-bold text-foreground">2 characters</div>
              </div>
              <div>
                <div className="text-muted-foreground mb-1">Max Suggestions</div>
                <div className="font-bold text-foreground">5 results</div>
              </div>
              <div>
                <div className="text-muted-foreground mb-1">Keyboard Support</div>
                <div className="font-bold text-foreground">Arrow keys, Enter, Esc</div>
              </div>
            </div>
          </div>

          {/* States Documentation */}
          <div className="mt-6 bg-card border-2 border-border rounded-lg p-6">
            <h3 className="font-bold text-foreground mb-3">States Demonstrated</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <div className="font-bold text-muted-foreground mb-2">✅ Implemented</div>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Empty state (no query)</li>
                  <li>• Typing with autocomplete</li>
                  <li>• Loading indicator</li>
                  <li>• Suggestions display</li>
                  <li>• Keyboard navigation</li>
                </ul>
              </div>
              <div>
                <div className="font-bold text-muted-foreground mb-2">✅ Implemented</div>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• No results found</li>
                  <li>• Clear search button</li>
                  <li>• Popular searches</li>
                  <li>• Recent searches</li>
                  <li>• Category browsing</li>
                </ul>
              </div>
            </div>
          </div>

        </div>

      
        <GlobalSearchCodeDownloads />

      </div>
    </div>
  );
}

// ==================== CODE DOWNLOADS ====================

const GLOBALSEARCH_REACT_CODE = `import React, { useState } from 'react';

export default function GlobalSearchPage() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/global-search', {
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
        <h1 className="text-2xl font-bold text-foreground mb-2">Global Search</h1>
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

const GLOBALSEARCH_ANGULAR_CODE = `import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ux4g-global-search',
  standalone: true,
  imports: [CommonModule],
  template: \`
    <div class="min-h-screen flex items-center justify-center bg-background p-4">
      <div class="w-full max-w-lg bg-card border border-border rounded-2xl p-8 shadow-sm">
        <h1 class="text-2xl font-bold text-foreground mb-2">Global Search</h1>
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
export class GlobalSearchComponent {
  loading = false;
  submitted = false;
  error = '';

  async onSubmit() {
    this.loading = true;
    this.error = '';
    try {
      const res = await fetch('/api/global-search', {
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

const GLOBALSEARCH_HTML_CODE = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Global Search — UX4G</title>
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
    <h1>Global Search</h1>
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
        const res = await fetch('/api/global-search', {
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

function GlobalSearchCodeDownloads() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const copyToClipboard = (code: string, id: string) => { navigator.clipboard.writeText(code); setCopiedId(id); setTimeout(() => setCopiedId(null), 2000); };
  const downloadCode = (code: string, filename: string) => { const blob = new Blob([code], { type: 'text/plain' }); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = filename; a.click(); URL.revokeObjectURL(url); };
  const lanes = [
    { key: 'react', title: 'React', desc: 'TypeScript + Hooks', code: GLOBALSEARCH_REACT_CODE, filename: 'GlobalSearchPage.tsx' },
    { key: 'angular', title: 'Angular', desc: 'Standalone Component', code: GLOBALSEARCH_ANGULAR_CODE, filename: 'global-search.component.ts' },
    { key: 'html', title: 'HTML / CSS / JS', desc: 'No framework needed', code: GLOBALSEARCH_HTML_CODE, filename: 'global-search.html' },
  ];
  return (
    <section id="code-downloads" className="space-y-6 scroll-mt-24 mt-12">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Code Downloads</h2>
        <p className="text-muted-foreground mt-1">Production-ready Global Search implementations.</p>
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
