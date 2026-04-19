import { useState } from "react";
import { Link } from "react-router";
import {  Copy, ArrowLeft, Plus, Trash2, GripVertical, Download, Check } from "lucide-react";

export default function RepeatableSectionsPattern() {
  const [dependents, setDependents] = useState([
    { id: 1, name: "", relation: "", age: "" },
  ]);

  const [education, setEducation] = useState([
    { id: 1, degree: "", institution: "", year: "", percentage: "" },
  ]);

  const addDependent = () => {
    setDependents([...dependents, { id: dependents.length + 1, name: "", relation: "", age: "" }]);
  };

  const removeDependent = (id: number) => {
    if (dependents.length > 1) {
      setDependents(dependents.filter(d => d.id !== id));
    }
  };

  const addEducation = () => {
    setEducation([...education, { id: education.length + 1, degree: "", institution: "", year: "", percentage: "" }]);
  };

  const removeEducation = (id: number) => {
    if (education.length > 1) {
      setEducation(education.filter(e => e.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-gradient-to-br from-pink-50 via-white to-rose-50 border-b-4 border-[#FF9933]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-16">
          <div className="mb-6">
            <Link to="/patterns/data-input" className="text-sm text-muted-foreground hover:text-primary">
              ← Back to Data Input Patterns
            </Link>
          </div>
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-rose-500 border-3 border-white shadow-lg rounded-lg flex items-center justify-center">
                <Copy size={40} className="text-white" />
              </div>
              <div>
                <div className="text-sm font-bold text-primary mb-2 uppercase tracking-wide">Data Input Pattern</div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">Repeatable Sections</h1>
              </div>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              Dynamically add or remove form field groups for variable-length data like family members,
              education history, work experience, or addresses.
            </p>
          </div>
        </div>
      </header>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-8">
            <div className="bg-pink-50 border-2 border-pink-200 rounded-lg p-6 mb-6">
              <h2 className="font-bold text-foreground mb-2">Interactive Demo</h2>
              <p className="text-sm text-muted-foreground">
                Add or remove family members and education records using the dynamic form sections below.
              </p>
            </div>

            {/* Example 1: Simple Repeatable (Dependents) */}
            <div className="bg-card border-2 border-border rounded-lg p-8 mb-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-foreground">Family Dependents</h3>
                <span className="text-sm text-muted-foreground">{dependents.length} dependent(s)</span>
              </div>

              <div className="space-y-4">
                {dependents.map((dependent, index) => (
                  <div key={dependent.id} className="bg-background border-2 border-border rounded-lg p-6 relative">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2 text-sm font-bold text-muted-foreground">
                        <GripVertical size={16} className="text-muted-foreground" />
                        Dependent {index + 1}
                      </div>
                      {dependents.length > 1 && (
                        <button
                          onClick={() => removeDependent(dependent.id)}
                          className="text-red-600 hover:text-red-800 dark:text-red-300 flex items-center gap-1 text-sm"
                        >
                          <Trash2 size={16} />
                          Remove
                        </button>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-bold text-foreground mb-2">
                          Full Name <span className="text-red-600">*</span>
                        </label>
                        <input aria-label="Enter name" type="text"
                          placeholder="Enter name"
                          className="w-full px-4 py-2 border-2 border-border rounded focus:border-primary focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-foreground mb-2">
                          Relation <span className="text-red-600">*</span>
                        </label>
                        <select aria-label="Select option" className="w-full px-4 py-2 border-2 border-border rounded focus:border-primary focus:outline-none">
                          <option value="">Select...</option>
                          <option value="spouse">Spouse</option>
                          <option value="child">Child</option>
                          <option value="parent">Parent</option>
                          <option value="sibling">Sibling</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-foreground mb-2">
                          Age <span className="text-red-600">*</span>
                        </label>
                        <input aria-label="Age" type="number"
                          placeholder="Age"
                          className="w-full px-4 py-2 border-2 border-border rounded focus:border-primary focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={addDependent}
                className="mt-4 px-4 py-2 border-2 border-dashed border-border rounded-lg text-primary font-bold hover:bg-blue-50 dark:bg-blue-900/20 hover:border-primary w-full flex items-center justify-center gap-2"
              >
                <Plus size={18} />
                Add Another Dependent
              </button>
            </div>

            {/* Example 2: Complex Repeatable (Education) */}
            <div className="bg-card border-2 border-border rounded-lg p-4 sm:p-6 lg:p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-foreground">Education History</h3>
                <span className="text-sm text-muted-foreground">{education.length} qualification(s)</span>
              </div>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={edu.id} className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2 text-sm font-bold text-muted-foreground">
                        <GripVertical size={16} className="text-muted-foreground" />
                        Education {index + 1}
                      </div>
                      {education.length > 1 && (
                        <button
                          onClick={() => removeEducation(edu.id)}
                          className="text-red-600 hover:text-red-800 dark:text-red-300 flex items-center gap-1 text-sm"
                        >
                          <Trash2 size={16} />
                          Remove
                        </button>
                      )}
                    </div>

                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-bold text-foreground mb-2">
                            Degree/Qualification <span className="text-red-600">*</span>
                          </label>
                          <input aria-label="e.g., B.Tech Computer Science" type="text"
                            placeholder="e.g., B.Tech Computer Science"
                            className="w-full px-4 py-2 border-2 border-border rounded focus:border-primary focus:outline-none"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-bold text-foreground mb-2">
                            Year of Completion <span className="text-red-600">*</span>
                          </label>
                          <input aria-label="YYYY" type="number"
                            placeholder="YYYY"
                            className="w-full px-4 py-2 border-2 border-border rounded focus:border-primary focus:outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-foreground mb-2">
                          Institution Name <span className="text-red-600">*</span>
                        </label>
                        <input aria-label="University/College/School name" type="text"
                          placeholder="University/College/School name"
                          className="w-full px-4 py-2 border-2 border-border rounded focus:border-primary focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-foreground mb-2">
                          Percentage/CGPA
                        </label>
                        <input aria-label="e.g., 85% or 8.5 CGPA" type="text"
                          placeholder="e.g., 85% or 8.5 CGPA"
                          className="w-full px-4 py-2 border-2 border-border rounded focus:border-primary focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={addEducation}
                className="mt-4 px-4 py-2 border-2 border-dashed border-blue-300 rounded-lg text-primary font-bold hover:bg-blue-50 dark:bg-blue-900/20 hover:border-primary w-full flex items-center justify-center gap-2"
              >
                <Plus size={18} />
                Add Another Qualification
              </button>
            </div>

            {/* Variations */}
            <div className="mt-8 bg-card border-2 border-border rounded-lg p-4 sm:p-6 lg:p-8">
              <h3 className="font-bold text-foreground mb-4">Pattern Variations</h3>

              <div className="space-y-6">
                {/* Inline Add */}
                <div>
                  <h3 className="text-sm font-bold text-foreground mb-3">1. Inline Add (Compact)</h3>
                  <div className="bg-background border border-border rounded-lg p-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <span>1.</span>
                        <input aria-label="text input" type="text" value="rajesh@example.com" className="flex-1 px-3 py-1.5 border border-border rounded text-sm" readOnly />
                        <button aria-label="Action" className="text-red-600 hover:text-red-800 dark:text-red-300"><Trash2 size={16} /></button>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <span>2.</span>
                        <input aria-label="text input" type="text" value="priya@example.com" className="flex-1 px-3 py-1.5 border border-border rounded text-sm" readOnly />
                        <button aria-label="Action" className="text-red-600 hover:text-red-800 dark:text-red-300"><Trash2 size={16} /></button>
                      </div>
                      <button className="text-sm text-primary hover:underline flex items-center gap-1">
                        <Plus size={14} />
                        Add email
                      </button>
                    </div>
                  </div>
                </div>

                {/* Pre-populated */}
                <div>
                  <h3 className="text-sm font-bold text-foreground mb-3">2. Pre-populated Sections</h3>
                  <div className="bg-background border border-border rounded-lg p-4">
                    <p className="text-sm text-muted-foreground mb-3">
                      Show 2-3 empty sections by default instead of just one. Reduces clicks for common cases.
                    </p>
                    <div className="space-y-2 text-xs text-muted-foreground">
                      <div className="flex items-center gap-2">
                        • Address 1: <span className="text-muted-foreground">[Empty field ready]</span>
                      </div>
                      <div className="flex items-center gap-2">
                        • Address 2: <span className="text-muted-foreground">[Empty field ready]</span>
                      </div>
                      <div className="flex items-center gap-2">
                        • Address 3: <span className="text-muted-foreground">[Empty field ready]</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Drag to Reorder */}
                <div>
                  <h3 className="text-sm font-bold text-foreground mb-3">3. Drag to Reorder</h3>
                  <div className="bg-background border border-border rounded-lg p-4">
                    <p className="text-sm text-muted-foreground">
                      For ordered lists (priority, sequence), allow drag-and-drop reordering with grip handle.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Implementation Guide */}
            <div className="mt-8 space-y-6">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Implementation Pattern</h2>
                <div className="bg-card border-2 border-border rounded-lg p-6">
                  <h3 className="font-bold text-foreground mb-3">React State Management</h3>
                  <div className="bg-gray-900 text-gray-100 dark:text-gray-200 rounded-lg p-4 text-sm font-mono overflow-x-auto">
                    <pre>{`const [items, setItems] = useState([
  { id: 1, name: "", email: "" }
]);

const addItem = () => {
  setItems([...items, {
    id: items.length + 1,
    name: "",
    email: ""
  }]);
};

const removeItem = (id) => {
  setItems(items.filter(item => item.id !== id));
};

const updateItem = (id, field, value) => {
  setItems(items.map(item =>
    item.id === id ? {...item, [field]: value} : item
  ));
};`}</pre>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Best Practices</h2>
                <div className="bg-card border-2 border-border rounded-lg p-6 space-y-3 text-sm">
                  <div>
                    <h3 className="font-bold text-foreground mb-1">1. Start with One Empty Section</h3>
                    <p className="text-muted-foreground">
                      Don't show 5 blank sections by default. Add more on demand to avoid overwhelming users.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">2. Clear Visual Grouping</h3>
                    <p className="text-muted-foreground">
                      Use background color, borders, or cards to visually separate each repeatable section.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">3. Number Each Section</h3>
                    <p className="text-muted-foreground">
                      Show "Dependent 1", "Dependent 2" etc. to help users reference specific entries.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">4. Confirm Before Delete</h3>
                    <p className="text-muted-foreground">
                      If section has data filled in, show confirmation dialog before removing it.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">5. Disable Remove on Last Item</h3>
                    <p className="text-muted-foreground">
                      If at least one section is required, disable remove button when only one remains.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">6. Validate Each Section</h3>
                    <p className="text-muted-foreground">
                      Run validation on each repeated section independently. Show errors within that section.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">7. Set Maximum Limit</h3>
                    <p className="text-muted-foreground">
                      Prevent adding unlimited sections. Set reasonable limit (e.g., max 10 dependents).
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Accessibility</h2>
                <div className="bg-card border-2 border-border rounded-lg p-6 space-y-2 text-sm text-muted-foreground">
                  <p>• Announce additions/removals to screen readers using ARIA live regions</p>
                  <p>• Ensure keyboard access: Tab through fields, Enter/Space to add/remove</p>
                  <p>• Use clear button labels: "Add Another Dependent" not just "Add"</p>
                  <p>• Provide unique IDs for each section for screen reader navigation</p>
                  <p>• Move focus to newly added section after clicking "Add"</p>
                </div>
              </section>
            </div>
                      <RepeatableSectionsCodeDownloads />
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
                    <div className="text-xs text-muted-foreground mb-1">UX Benefit</div>
                    <div className="font-bold">Flexible, user-controlled</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Mobile Support</div>
                    <div className="font-bold">Good (vertical stack)</div>
                  </div>
                </div>
              </div>

              <div className="bg-pink-50 border-2 border-pink-200 rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-3">When to Use</h3>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li>✓ Variable-length data</li>
                  <li>✓ Family/dependent info</li>
                  <li>✓ Education/work history</li>
                  <li>✓ Multiple addresses</li>
                  <li>✓ Skills/certifications list</li>
                  <li>✓ References/contacts</li>
                  <li>✓ Product variants</li>
                </ul>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-950/30 border-2 border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-3">When NOT to Use</h3>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li>✗ Fixed number of fields</li>
                  <li>✗ 10+ records (use bulk entry)</li>
                  <li>✗ Complex nested structures</li>
                  <li>✗ Binary yes/no questions</li>
                </ul>
              </div>

              <div className="bg-card border-2 border-border rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-4">Common Examples</h3>
                <ul className="space-y-1 text-xs text-muted-foreground">
                  <li>• Family members</li>
                  <li>• Education qualifications</li>
                  <li>• Work experience</li>
                  <li>• Contact numbers</li>
                  <li>• Email addresses</li>
                  <li>• Previous addresses</li>
                  <li>• Language skills</li>
                  <li>• Certifications</li>
                </ul>
              </div>

              <div className="bg-card border-2 border-border rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-4">Related Patterns</h3>
                <div className="space-y-2">
                  <Link to="/patterns/data-input/bulk-entry" className="block text-sm text-primary hover:underline">
                    → Bulk Data Entry
                  </Link>
                  <Link to="/patterns/form-validation" className="block text-sm text-primary hover:underline">
                    → Form Validation
                  </Link>
                  <Link to="/patterns/progressive-disclosure" className="block text-sm text-primary hover:underline">
                    → Progressive Disclosure
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

const REPEATABLESECTIONS_REACT_CODE = `import React, { useState } from 'react';

export default function RepeatableSectionsPage() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/repeatable-sections', {
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
        <h1 className="text-2xl font-bold text-foreground mb-2">Repeatable Sections</h1>
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

const REPEATABLESECTIONS_ANGULAR_CODE = `import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ux4g-repeatable-sections',
  standalone: true,
  imports: [CommonModule],
  template: \`
    <div class="min-h-screen flex items-center justify-center bg-background p-4">
      <div class="w-full max-w-lg bg-card border border-border rounded-2xl p-8 shadow-sm">
        <h1 class="text-2xl font-bold text-foreground mb-2">Repeatable Sections</h1>
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
export class RepeatableSectionsComponent {
  loading = false;
  submitted = false;
  error = '';

  async onSubmit() {
    this.loading = true;
    this.error = '';
    try {
      const res = await fetch('/api/repeatable-sections', {
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

const REPEATABLESECTIONS_HTML_CODE = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Repeatable Sections — UX4G</title>
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
    <h1>Repeatable Sections</h1>
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
        const res = await fetch('/api/repeatable-sections', {
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

function RepeatableSectionsCodeDownloads() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const copyToClipboard = (code: string, id: string) => { navigator.clipboard.writeText(code); setCopiedId(id); setTimeout(() => setCopiedId(null), 2000); };
  const downloadCode = (code: string, filename: string) => { const blob = new Blob([code], { type: 'text/plain' }); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = filename; a.click(); URL.revokeObjectURL(url); };
  const lanes = [
    { key: 'react', title: 'React', desc: 'TypeScript + Hooks', code: REPEATABLESECTIONS_REACT_CODE, filename: 'RepeatableSectionsPage.tsx' },
    { key: 'angular', title: 'Angular', desc: 'Standalone Component', code: REPEATABLESECTIONS_ANGULAR_CODE, filename: 'repeatable-sections.component.ts' },
    { key: 'html', title: 'HTML / CSS / JS', desc: 'No framework needed', code: REPEATABLESECTIONS_HTML_CODE, filename: 'repeatable-sections.html' },
  ];
  return (
    <section id="code-downloads" className="space-y-6 scroll-mt-24 mt-12">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Code Downloads</h2>
        <p className="text-muted-foreground mt-1">Production-ready Repeatable Sections implementations.</p>
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
