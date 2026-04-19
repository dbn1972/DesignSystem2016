import { useState } from "react";
import { Link } from "react-router";
import {  Lightbulb, ArrowLeft, Search, TrendingUp, Clock, MapPin, Download, Copy, Check } from "lucide-react";

export default function SmartSuggestionsPattern() {
  const [occupation, setOccupation] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [district, setDistrict] = useState("");
  const [showDistrictSuggestions, setShowDistrictSuggestions] = useState(false);

  const occupations = [
    { value: "Software Engineer", category: "IT", frequency: "high" },
    { value: "Teacher", category: "Education", frequency: "high" },
    { value: "Doctor", category: "Healthcare", frequency: "high" },
    { value: "Farmer", category: "Agriculture", frequency: "high" },
    { value: "Business Owner", category: "Business", frequency: "medium" },
    { value: "Government Employee", category: "Public Service", frequency: "high" },
    { value: "Student", category: "Education", frequency: "high" },
    { value: "Retired", category: "Other", frequency: "medium" }
  ];

  const districts = [
    { value: "Bangalore Urban", state: "Karnataka", popular: true },
    { value: "Mumbai", state: "Maharashtra", popular: true },
    { value: "Delhi", state: "Delhi", popular: true },
    { value: "Chennai", state: "Tamil Nadu", popular: true },
    { value: "Kolkata", state: "West Bengal", popular: true },
    { value: "Hyderabad", state: "Telangana", popular: true }
  ];

  const filteredOccupations = occupation
    ? occupations.filter(occ => occ.value.toLowerCase().includes(occupation.toLowerCase()))
    : [];

  const filteredDistricts = district
    ? districts.filter(d => d.value.toLowerCase().includes(district.toLowerCase()))
    : districts.filter(d => d.popular);

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-gradient-to-br from-purple-50 via-white to-pink-50 border-b-4 border-[#FF9933]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-16">
          <div className="mb-6">
            <Link to="/patterns/data-input" className="text-sm text-muted-foreground hover:text-primary">
              ← Back to Data Input Patterns
            </Link>
          </div>
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 border-3 border-white shadow-lg rounded-lg flex items-center justify-center">
                <Lightbulb size={40} className="text-white" />
              </div>
              <div>
                <div className="text-sm font-bold text-primary mb-2 uppercase tracking-wide">Data Input Pattern</div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">Smart Suggestions</h1>
              </div>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              Context-aware autocomplete that suggests values based on user behavior, popular choices,
              and intelligent prediction to accelerate form completion.
            </p>
          </div>
        </div>
      </header>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-8">
            <div className="bg-purple-50 dark:bg-purple-950/30 border-2 border-purple-200 dark:border-purple-800 rounded-lg p-6 mb-6">
              <h2 className="font-bold text-foreground mb-2">Interactive Demo</h2>
              <p className="text-sm text-muted-foreground">
                Type in the fields below to see context-aware suggestions based on popular choices and smart prediction.
              </p>
            </div>

            {/* Demo Examples */}
            <div className="space-y-6">

              {/* Example 1: Occupation with Categories */}
              <div className="bg-card border-2 border-border rounded-lg p-4 sm:p-6 lg:p-8">
                <h3 className="font-bold text-foreground mb-4">Example 1: Categorized Suggestions</h3>
                <div className="relative">
                  <label className="block font-bold text-foreground mb-2">
                    Occupation <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={occupation}
                      onChange={(e) => {
                        setOccupation(e.target.value);
                        setShowSuggestions(true);
                      }}
                      onFocus={() => setShowSuggestions(true)}
                      onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                      placeholder="Start typing your occupation..."
                      className="w-full px-4 py-3 border-2 border-border rounded focus:border-primary focus:outline-none"
                    />
                    <Search size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  </div>

                  {showSuggestions && filteredOccupations.length > 0 && (
                    <div className="absolute z-10 w-full mt-2 bg-card border-2 border-border rounded-lg shadow-lg max-h-80 overflow-y-auto">
                      {filteredOccupations.map((occ, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            setOccupation(occ.value);
                            setShowSuggestions(false);
                          }}
                          className="w-full px-4 py-3 text-left hover:bg-blue-50 dark:bg-blue-950/30 border-b border-border last:border-b-0 flex items-center justify-between"
                        >
                          <div>
                            <div className="font-bold text-foreground">{occ.value}</div>
                            <div className="text-xs text-muted-foreground">{occ.category}</div>
                          </div>
                          {occ.frequency === "high" && (
                            <div className="flex items-center gap-1 text-xs text-green-600">
                              <TrendingUp size={14} />
                              Popular
                            </div>
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <div className="text-xs text-muted-foreground mt-2">
                  Try typing: "Teacher", "Software", "Doctor"
                </div>
              </div>

              {/* Example 2: Location with Popular First */}
              <div className="bg-card border-2 border-border rounded-lg p-4 sm:p-6 lg:p-8">
                <h3 className="font-bold text-foreground mb-4">Example 2: Popular Choices First</h3>
                <div className="relative">
                  <label className="block font-bold text-foreground mb-2">
                    District <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={district}
                      onChange={(e) => {
                        setDistrict(e.target.value);
                        setShowDistrictSuggestions(true);
                      }}
                      onFocus={() => setShowDistrictSuggestions(true)}
                      onBlur={() => setTimeout(() => setShowDistrictSuggestions(false), 200)}
                      placeholder="Select or type your district..."
                      className="w-full px-4 py-3 border-2 border-border rounded focus:border-primary focus:outline-none"
                    />
                    <MapPin size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  </div>

                  {showDistrictSuggestions && (
                    <div className="absolute z-10 w-full mt-2 bg-card border-2 border-border rounded-lg shadow-lg max-h-80 overflow-y-auto">
                      {!district && (
                        <div className="px-4 py-2 bg-blue-50 dark:bg-blue-950/30 border-b-2 border-blue-200 dark:border-blue-800 text-xs text-muted-foreground font-bold">
                          POPULAR DISTRICTS
                        </div>
                      )}
                      {filteredDistricts.map((d, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            setDistrict(d.value);
                            setShowDistrictSuggestions(false);
                          }}
                          className="w-full px-4 py-3 text-left hover:bg-blue-50 dark:bg-blue-950/30 border-b border-border last:border-b-0"
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-bold text-foreground">{d.value}</div>
                              <div className="text-xs text-muted-foreground">{d.state}</div>
                            </div>
                            {d.popular && !district && (
                              <div className="text-xs px-2 py-1 bg-orange-100 text-orange-700 rounded font-bold">
                                Popular
                              </div>
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <div className="text-xs text-muted-foreground mt-2">
                  Popular districts shown first. Start typing to search all districts.
                </div>
              </div>

              {/* Example 3: Recent Entries */}
              <div className="bg-card border-2 border-border rounded-lg p-4 sm:p-6 lg:p-8">
                <h3 className="font-bold text-foreground mb-4">Example 3: Recent & Frequent Values</h3>
                <div>
                  <label className="block font-bold text-foreground mb-2">Purpose of Visit</label>
                  <input
                    type="text"
                    placeholder="Start typing..."
                    className="w-full px-4 py-3 border-2 border-border rounded focus:border-primary focus:outline-none"
                  />

                  <div className="mt-3">
                    <div className="text-xs text-muted-foreground mb-2 flex items-center gap-2">
                      <Clock size={14} />
                      RECENTLY USED
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <button className="px-3 py-1.5 bg-muted border border-border rounded text-sm hover:bg-blue-50 dark:bg-blue-900/20 hover:border-primary">
                        Income Certificate
                      </button>
                      <button className="px-3 py-1.5 bg-muted border border-border rounded text-sm hover:bg-blue-50 dark:bg-blue-900/20 hover:border-primary">
                        Domicile Certificate
                      </button>
                      <button className="px-3 py-1.5 bg-muted border border-border rounded text-sm hover:bg-blue-50 dark:bg-blue-900/20 hover:border-primary">
                        Birth Certificate
                      </button>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Implementation Guide */}
            <div className="mt-8 space-y-6">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Suggestion Strategies</h2>
                <div className="bg-card border-2 border-border rounded-lg p-6">
                  <div className="space-y-4 text-sm">
                    <div>
                      <h3 className="font-bold text-foreground mb-2">1. Popular First</h3>
                      <p className="text-muted-foreground mb-2">
                        Show most commonly selected options at the top. Useful for fields with clear popular choices.
                      </p>
                      <div className="bg-background border border-border rounded p-3 text-xs font-mono">
                        {`// Sort by selection frequency
suggestions.sort((a, b) => b.count - a.count);`}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-bold text-foreground mb-2">2. Recent History</h3>
                      <p className="text-muted-foreground mb-2">
                        Show user's recently used values. Store in localStorage for returning users.
                      </p>
                      <div className="bg-background border border-border rounded p-3 text-xs font-mono">
                        {`// Store recent selections
localStorage.setItem('recent_occupation',
  JSON.stringify([...recentValues, newValue].slice(0, 5)));`}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-bold text-foreground mb-2">3. Context-Aware</h3>
                      <p className="text-muted-foreground mb-2">
                        Predict based on other field values. Example: Suggest districts in selected state only.
                      </p>
                      <div className="bg-background border border-border rounded p-3 text-xs font-mono">
                        {`// Filter by context
const suggestions = districts.filter(
  d => d.state === selectedState
);`}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-bold text-foreground mb-2">4. Fuzzy Matching</h3>
                      <p className="text-muted-foreground">
                        Match partial/misspelled input. "Bangalor" should match "Bangalore Urban".
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">UX Best Practices</h2>
                <div className="bg-card border-2 border-border rounded-lg p-6 space-y-3 text-sm">
                  <div>
                    <h3 className="font-bold text-foreground mb-1">1. Show Suggestions Early</h3>
                    <p className="text-muted-foreground">
                      Display popular options on focus, before user starts typing. Don't wait for 3+ characters.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">2. Limit Suggestion Count</h3>
                    <p className="text-muted-foreground">
                      Show 5-8 suggestions max. Too many options overwhelm users. Add "View All" if needed.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">3. Highlight Match Text</h3>
                    <p className="text-muted-foreground">
                      Bold the matched portion in suggestions to help users quickly scan options.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">4. Add Visual Indicators</h3>
                    <p className="text-muted-foreground">
                      Use icons/badges for "Popular", "Recent", "Recommended" to guide selection.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">5. Keyboard Navigation</h3>
                    <p className="text-muted-foreground">
                      Support arrow keys to navigate, Enter to select, Escape to close suggestions.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">6. Allow Free Text</h3>
                    <p className="text-muted-foreground">
                      Don't restrict to suggestions only. Users should be able to type custom values.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Performance Optimization</h2>
                <div className="bg-card border-2 border-border rounded-lg p-6 space-y-3 text-sm">
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Debounce Input</h3>
                    <p className="text-muted-foreground">
                      Wait 200-300ms after user stops typing before fetching suggestions. Reduces API calls.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Cache Results</h3>
                    <p className="text-muted-foreground">
                      Cache API responses for common searches. Instant suggestions for repeated queries.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Prioritize Client-Side</h3>
                    <p className="text-muted-foreground">
                      For small datasets (&lt;1000 items), filter client-side instead of API calls.
                    </p>
                  </div>
                </div>
              </section>
            </div>
                      <SmartSuggestionsCodeDownloads />
          </div>

          <div className="col-span-4">
            <div className="sticky top-8 space-y-6">
              <div className="bg-card border-2 border-border rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-4">Pattern Information</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Complexity</div>
                    <div className="font-bold">Low-Medium</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Time Saved</div>
                    <div className="font-bold">~15-30 seconds per field</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Error Reduction</div>
                    <div className="font-bold">60-80%</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Best For</div>
                    <div className="font-bold">Predictable inputs</div>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 dark:bg-purple-950/30 border-2 border-purple-200 dark:border-purple-800 rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-3">When to Use</h3>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li>✓ Fields with known value sets</li>
                  <li>✓ Location/address inputs</li>
                  <li>✓ Occupation/profession</li>
                  <li>✓ Department/organization</li>
                  <li>✓ Common search patterns</li>
                  <li>✓ Service type selection</li>
                </ul>
              </div>

              <div className="bg-card border-2 border-border rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-4">Data Sources</h3>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li>• Usage analytics (popular)</li>
                  <li>• User history (recent)</li>
                  <li>• Static datasets (master data)</li>
                  <li>• API lookups (dynamic)</li>
                  <li>• ML predictions (smart)</li>
                </ul>
              </div>

              <div className="bg-card border-2 border-border rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-4">Related Patterns</h3>
                <div className="space-y-2">
                  <Link to="/patterns/data-input/address-lookup" className="block text-sm text-primary hover:underline">
                    → Address Lookup
                  </Link>
                  <Link to="/patterns/data-input/autofill" className="block text-sm text-primary hover:underline">
                    → Auto-fill Pattern
                  </Link>
                  <Link to="/patterns/form-validation" className="block text-sm text-primary hover:underline">
                    → Form Validation
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

const SMARTSUGGESTIONS_REACT_CODE = `import React, { useState } from 'react';

export default function SmartSuggestionsPage() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/smart-suggestions', {
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
        <h1 className="text-2xl font-bold text-foreground mb-2">Smart Suggestions</h1>
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

const SMARTSUGGESTIONS_ANGULAR_CODE = `import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ux4g-smart-suggestions',
  standalone: true,
  imports: [CommonModule],
  template: \`
    <div class="min-h-screen flex items-center justify-center bg-background p-4">
      <div class="w-full max-w-lg bg-card border border-border rounded-2xl p-8 shadow-sm">
        <h1 class="text-2xl font-bold text-foreground mb-2">Smart Suggestions</h1>
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
export class SmartSuggestionsComponent {
  loading = false;
  submitted = false;
  error = '';

  async onSubmit() {
    this.loading = true;
    this.error = '';
    try {
      const res = await fetch('/api/smart-suggestions', {
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

const SMARTSUGGESTIONS_HTML_CODE = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Smart Suggestions — UX4G</title>
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
    <h1>Smart Suggestions</h1>
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
        const res = await fetch('/api/smart-suggestions', {
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

function SmartSuggestionsCodeDownloads() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const copyToClipboard = (code: string, id: string) => { navigator.clipboard.writeText(code); setCopiedId(id); setTimeout(() => setCopiedId(null), 2000); };
  const downloadCode = (code: string, filename: string) => { const blob = new Blob([code], { type: 'text/plain' }); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = filename; a.click(); URL.revokeObjectURL(url); };
  const lanes = [
    { key: 'react', title: 'React', desc: 'TypeScript + Hooks', code: SMARTSUGGESTIONS_REACT_CODE, filename: 'SmartSuggestionsPage.tsx' },
    { key: 'angular', title: 'Angular', desc: 'Standalone Component', code: SMARTSUGGESTIONS_ANGULAR_CODE, filename: 'smart-suggestions.component.ts' },
    { key: 'html', title: 'HTML / CSS / JS', desc: 'No framework needed', code: SMARTSUGGESTIONS_HTML_CODE, filename: 'smart-suggestions.html' },
  ];
  return (
    <section id="code-downloads" className="space-y-6 scroll-mt-24 mt-12">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Code Downloads</h2>
        <p className="text-muted-foreground mt-1">Production-ready Smart Suggestions implementations.</p>
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
