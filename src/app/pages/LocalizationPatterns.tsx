import { useState } from "react";
import { Link } from "react-router";
import {  Globe, Languages, ArrowRight, CheckCircle, TrendingUp, Users, MapPin, Download, Copy, Check } from "lucide-react";

export default function LocalizationPatterns() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 border-b-4 border-[#FF9933]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-16">
          <div className="mb-6">
            <Link to="/pattern-library" className="text-sm text-muted-foreground hover:text-primary">
              ← Back to Pattern Library
            </Link>
          </div>
          <div className="flex items-start justify-between">
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-500 border-3 border-white shadow-lg rounded-lg flex items-center justify-center">
                  <Globe size={40} className="text-white" />
                </div>
                <div>
                  <div className="text-sm font-bold text-primary mb-2 uppercase tracking-wide">Pattern Family</div>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">Localization & Multilingual Patterns</h1>
                </div>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                Comprehensive patterns for building truly multilingual government services that respect India's 22 official languages,
                multiple scripts, and diverse linguistic contexts. Designed for inclusive, accessible, and culturally appropriate digital experiences.
              </p>
              <div className="flex items-center gap-8 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#FF9933] rounded-full"></div>
                  <span className="text-muted-foreground">Pattern Family: <span className="font-bold text-foreground">Internationalization</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-700 rounded-full"></div>
                  <span className="text-muted-foreground">Patterns: <span className="font-bold text-foreground">5 Specialized Flows</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Complexity: <span className="font-bold text-foreground">Medium to High</span></span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="px-8 py-4 bg-[#FF9933] text-white rounded-lg font-bold text-center shadow-lg">
                CONSTITUTIONAL
              </div>
              <div className="px-8 py-4 bg-card border-2 border-[#138808] text-[#138808] rounded-lg font-bold text-center">
                22 LANGUAGES
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Quick Access */}
      <div className="bg-card border-b-2 border-border">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <span className="font-bold text-foreground">Quick Access:</span>
              <Link to="#overview" className="text-primary hover:underline text-sm font-medium">
                Pattern Overview
              </Link>
              <Link to="#all-patterns" className="text-primary hover:underline text-sm font-medium">
                View All Patterns
              </Link>
            </div>
            <div className="text-sm text-muted-foreground">
              Last updated: April 2026
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-12">

        {/* Overview Section */}
        <section id="overview" className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6">Pattern Overview</h2>
          <div className="bg-card border-2 border-border rounded-lg p-8 mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Languages size={24} className="text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">True Multilingualism</h3>
                  <p className="text-sm text-muted-foreground">
                    Support all 22 scheduled languages with appropriate script rendering and cultural context
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} className="text-purple-600" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Contextual Intelligence</h3>
                  <p className="text-sm text-muted-foreground">
                    Auto-detect user location, handle mixed-language content, and provide graceful fallbacks
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users size={24} className="text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Inclusive Access</h3>
                  <p className="text-sm text-muted-foreground">
                    Ensure digital services are accessible to all citizens regardless of linguistic background
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* India's Language Context */}
          <div className="bg-orange-50 dark:bg-orange-950/30 border-2 border-orange-200 dark:border-orange-800 rounded-lg p-6 mb-8">
            <h3 className="font-bold text-foreground mb-4">India's Multilingual Context</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <CheckCircle size={16} className="text-orange-600 mt-0.5 flex-shrink-0" />
                <span><strong>22 Scheduled Languages</strong> under the Eighth Schedule of the Constitution</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle size={16} className="text-orange-600 mt-0.5 flex-shrink-0" />
                <span><strong>12+ Scripts</strong> including Devanagari, Bengali, Tamil, Arabic, Gurmukhi</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle size={16} className="text-orange-600 mt-0.5 flex-shrink-0" />
                <span><strong>121 Languages</strong> spoken by 10,000+ people (Census 2011)</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle size={16} className="text-orange-600 mt-0.5 flex-shrink-0" />
                <span><strong>Multiple Writing Systems</strong> including LTR, RTL (Urdu), and complex rendering</span>
              </div>
            </div>
          </div>

          {/* When to Use */}
          <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-8">
            <h3 className="font-bold text-foreground mb-4">When to Use These Patterns</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                <span>All government digital services (constitutional mandate)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                <span>Services targeting citizens across multiple states or linguistic regions</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                <span>Forms, applications, or content requiring translation into regional languages</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                <span>Services where language preference must be remembered and respected</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                <span>Content with mixed language input or user-generated translations</span>
              </li>
            </ul>
          </div>
        </section>

        {/* All Patterns */}
        <section id="all-patterns" className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6">All Localization & Multilingual Patterns</h2>

          <div className="grid grid-cols-1 gap-6">

            {/* Language Switcher */}
            <Link
              to="/patterns/localization/language-switcher"
              className="bg-card border-2 border-border rounded-lg p-6 hover:border-primary hover:shadow-lg transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Languages size={28} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary">Language Switcher</h3>
                    <ArrowRight size={20} className="text-muted-foreground group-hover:text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    User interface component for selecting preferred language with smart defaults based on browser settings,
                    location, and previous choices. Supports dropdown, modal, and inline selector variants.
                  </p>
                  <div className="flex items-center gap-4 text-xs">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:text-blue-300 rounded-full font-bold">UI COMPONENT</span>
                    <span className="text-muted-foreground">Complexity: Medium</span>
                    <span className="text-muted-foreground">Required for all services</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Mixed-Language Fallback */}
            <Link
              to="/patterns/localization/mixed-language-fallback"
              className="bg-card border-2 border-border rounded-lg p-6 hover:border-primary hover:shadow-lg transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Globe size={28} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary">Mixed-Language Fallback</h3>
                    <ArrowRight size={20} className="text-muted-foreground group-hover:text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Strategy for handling partially translated content by gracefully falling back to English or Hindi
                    for untranslated strings while maintaining context and visual hierarchy.
                  </p>
                  <div className="flex items-center gap-4 text-xs">
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full font-bold">STRATEGY</span>
                    <span className="text-muted-foreground">Complexity: Medium</span>
                    <span className="text-muted-foreground">Critical for incomplete translations</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Content Expansion Handling */}
            <Link
              to="/patterns/localization/content-expansion"
              className="bg-card border-2 border-border rounded-lg p-6 hover:border-primary hover:shadow-lg transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp size={28} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary">Content Expansion Handling</h3>
                    <ArrowRight size={20} className="text-muted-foreground group-hover:text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Layout and typography strategies for accommodating text expansion (up to 300% for some languages)
                    without breaking UI, truncating content, or causing layout shifts.
                  </p>
                  <div className="flex items-center gap-4 text-xs">
                    <span className="px-3 py-1 bg-green-100 text-green-800 dark:text-green-300 rounded-full font-bold">LAYOUT</span>
                    <span className="text-muted-foreground">Complexity: High</span>
                    <span className="text-muted-foreground">Critical for responsive design</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Script-Specific Layout */}
            <Link
              to="/patterns/localization/script-layout"
              className="bg-card border-2 border-border rounded-lg p-6 hover:border-primary hover:shadow-lg transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin size={28} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary">Script-Specific Layout Handling</h3>
                    <ArrowRight size={20} className="text-muted-foreground group-hover:text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Specialized layout adjustments for different writing systems including RTL (Urdu), complex conjuncts
                    (Devanagari, Bengali), and vertical text rendering requirements.
                  </p>
                  <div className="flex items-center gap-4 text-xs">
                    <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full font-bold">TECHNICAL</span>
                    <span className="text-muted-foreground">Complexity: High</span>
                    <span className="text-muted-foreground">Script-dependent</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Translation Confidence Indicators */}
            <Link
              to="/patterns/localization/translation-confidence"
              className="bg-card border-2 border-border rounded-lg p-6 hover:border-primary hover:shadow-lg transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle size={28} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary">Translation Confidence Indicators</h3>
                    <ArrowRight size={20} className="text-muted-foreground group-hover:text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Visual indicators showing translation quality and confidence levels for machine-translated or
                    user-contributed content with options to view original or report issues.
                  </p>
                  <div className="flex items-center gap-4 text-xs">
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 dark:text-yellow-300 rounded-full font-bold">TRANSPARENCY</span>
                    <span className="text-muted-foreground">Complexity: Low</span>
                    <span className="text-muted-foreground">Optional but recommended</span>
                  </div>
                </div>
              </div>
            </Link>

          </div>
        </section>

        {/* Design Principles */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6">Design Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card border-2 border-border rounded-lg p-6">
              <h3 className="font-bold text-foreground mb-3">1. Language Equality</h3>
              <p className="text-sm text-muted-foreground">
                All 22 scheduled languages should receive equal treatment in terms of quality, completeness, and user experience.
                Avoid treating any language as "secondary" or providing degraded experiences.
              </p>
            </div>
            <div className="bg-card border-2 border-border rounded-lg p-6">
              <h3 className="font-bold text-foreground mb-3">2. Smart Defaults</h3>
              <p className="text-sm text-muted-foreground">
                Auto-detect language preference from browser settings, IP geolocation, or previous sessions.
                Allow users to override but minimize manual language selection friction.
              </p>
            </div>
            <div className="bg-card border-2 border-border rounded-lg p-6">
              <h3 className="font-bold text-foreground mb-3">3. Graceful Degradation</h3>
              <p className="text-sm text-muted-foreground">
                When translations are incomplete, show mixed-language content rather than breaking the UI.
                Clearly indicate which parts are translated vs. fallback text.
              </p>
            </div>
            <div className="bg-card border-2 border-border rounded-lg p-6">
              <h3 className="font-bold text-foreground mb-3">4. Cultural Context</h3>
              <p className="text-sm text-muted-foreground">
                Consider cultural nuances, date/time formats, currency, measurement units, and naming conventions
                specific to each language and region.
              </p>
            </div>
          </div>
        </section>

        {/* Technical Requirements */}
        <section className="bg-indigo-50 dark:bg-indigo-950/30 border-2 border-indigo-200 dark:border-indigo-800 rounded-lg p-4 sm:p-6 lg:p-8">
          <h3 className="font-bold text-foreground mb-4">Technical Requirements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-muted-foreground">
            <div>
              <h4 className="font-bold text-foreground mb-2">Font Support</h4>
              <p className="mb-2">Use web fonts that support all required scripts:</p>
              <ul className="space-y-1 text-xs">
                <li>• Noto Sans for comprehensive script coverage</li>
                <li>• System fonts as fallback (ensures rendering even offline)</li>
                <li>• Script-specific fonts for optimal readability</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-2">Text Rendering</h4>
              <p className="mb-2">Handle complex text rendering requirements:</p>
              <ul className="space-y-1 text-xs">
                <li>• Support for conjuncts and ligatures (Indic scripts)</li>
                <li>• RTL text direction (Urdu, Arabic)</li>
                <li>• Bi-directional text mixing (BiDi algorithm)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-2">Data Storage</h4>
              <p className="mb-2">Properly store multilingual content:</p>
              <ul className="space-y-1 text-xs">
                <li>• UTF-8 encoding for all text fields</li>
                <li>• Separate tables/columns for each language</li>
                <li>• Language metadata (lang attribute, locale codes)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-2">Testing</h4>
              <p className="mb-2">Comprehensive multilingual testing:</p>
              <ul className="space-y-1 text-xs">
                <li>• Test all UI in each supported language</li>
                <li>• Verify text expansion doesn't break layouts</li>
                <li>• Check RTL layouts and script rendering</li>
              </ul>
            </div>
          </div>
        </section>

      
        <LocalizationCodeDownloads />

      </div>
    </div>
  );
}

// ==================== CODE DOWNLOADS ====================

const LOCALIZATION_REACT_CODE = `import React, { useState } from 'react';

export default function LocalizationPage() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/localization', {
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
        <h1 className="text-2xl font-bold text-foreground mb-2">Localization</h1>
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

const LOCALIZATION_ANGULAR_CODE = `import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ux4g-localization',
  standalone: true,
  imports: [CommonModule],
  template: \`
    <div class="min-h-screen flex items-center justify-center bg-background p-4">
      <div class="w-full max-w-lg bg-card border border-border rounded-2xl p-8 shadow-sm">
        <h1 class="text-2xl font-bold text-foreground mb-2">Localization</h1>
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
export class LocalizationComponent {
  loading = false;
  submitted = false;
  error = '';

  async onSubmit() {
    this.loading = true;
    this.error = '';
    try {
      const res = await fetch('/api/localization', {
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

const LOCALIZATION_HTML_CODE = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Localization — UX4G</title>
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
    <h1>Localization</h1>
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
        const res = await fetch('/api/localization', {
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

function LocalizationCodeDownloads() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const copyToClipboard = (code: string, id: string) => { navigator.clipboard.writeText(code); setCopiedId(id); setTimeout(() => setCopiedId(null), 2000); };
  const downloadCode = (code: string, filename: string) => { const blob = new Blob([code], { type: 'text/plain' }); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = filename; a.click(); URL.revokeObjectURL(url); };
  const lanes = [
    { key: 'react', title: 'React', desc: 'TypeScript + Hooks', code: LOCALIZATION_REACT_CODE, filename: 'LocalizationPage.tsx' },
    { key: 'angular', title: 'Angular', desc: 'Standalone Component', code: LOCALIZATION_ANGULAR_CODE, filename: 'localization.component.ts' },
    { key: 'html', title: 'HTML / CSS / JS', desc: 'No framework needed', code: LOCALIZATION_HTML_CODE, filename: 'localization.html' },
  ];
  return (
    <section id="code-downloads" className="space-y-6 scroll-mt-24 mt-12">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Code Downloads</h2>
        <p className="text-muted-foreground mt-1">Production-ready Localization implementations.</p>
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
