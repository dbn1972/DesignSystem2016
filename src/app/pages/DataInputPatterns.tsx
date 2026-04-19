import React from "react";
import { Link } from "react-router";
import { Database, MapPin, Upload, Zap, Copy, ArrowRight, CheckCircle, TrendingUp, Users, Download, Check } from "lucide-react";

export default function DataInputPatterns() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-to-br from-cyan-50 via-white to-blue-50 border-b-4 border-[#FF9933]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-16">
          <div className="mb-6">
            <Link to="/pattern-library" className="text-sm text-muted-foreground hover:text-primary">
              ← Back to Pattern Library
            </Link>
          </div>
          <div className="flex items-start justify-between">
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-500 border-3 border-white shadow-lg rounded-lg flex items-center justify-center">
                  <Database size={40} className="text-white" />
                </div>
                <div>
                  <div className="text-sm font-bold text-primary mb-2 uppercase tracking-wide">Pattern Family</div>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">Data Input Beyond Forms</h1>
                </div>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                Advanced input patterns that go beyond traditional form fields by leveraging smart technologies,
                integrations, and intelligent UX to reduce user effort, minimize errors, and accelerate data entry.
              </p>
              <div className="flex items-center gap-8 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#FF9933] rounded-full"></div>
                  <span className="text-muted-foreground">Pattern Family: <span className="font-bold text-foreground">Smart Input</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-700 rounded-full"></div>
                  <span className="text-muted-foreground">Patterns: <span className="font-bold text-foreground">7 Intelligent Flows</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Complexity: <span className="font-bold text-foreground">Medium to High</span></span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="px-8 py-4 bg-[#FF9933] text-white rounded-lg font-bold text-center shadow-lg">
                INTELLIGENT
              </div>
              <div className="px-8 py-4 bg-card border-2 border-[#138808] text-[#138808] rounded-lg font-bold text-center">
                EFFORTLESS
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
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap size={24} className="text-cyan-600" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Reduce User Effort</h3>
                  <p className="text-sm text-muted-foreground">
                    Minimize typing by auto-filling, extracting, or suggesting data from verified sources
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle size={24} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Improve Accuracy</h3>
                  <p className="text-sm text-muted-foreground">
                    Reduce errors through validation, lookups, and data extraction from authoritative sources
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp size={24} className="text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Accelerate Completion</h3>
                  <p className="text-sm text-muted-foreground">
                    Speed up form completion with bulk entry, repeatable sections, and intelligent defaults
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* When to Use */}
          <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-8">
            <h3 className="font-bold text-foreground mb-4">When to Use These Patterns</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                <span>Forms requiring accurate address input (use Address Lookup)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                <span>Applications where user data exists in Aadhaar/DigiLocker (use Auto-fill)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                <span>Inputs with common or predictable values (use Smart Suggestions)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                <span>Data available in documents/PDFs (use Upload → Extract)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                <span>Location-based services (use Map-based Input)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                <span>Multiple similar records (use Bulk Data Entry)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                <span>Variable-length lists of items (use Repeatable Sections)</span>
              </li>
            </ul>
          </div>
        </section>

        {/* All Patterns */}
        <section id="all-patterns" className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6">All Data Input Patterns</h2>

          <div className="grid grid-cols-1 gap-6">

            {/* Address Lookup */}
            <Link
              to="/patterns/data-input/address-lookup"
              className="bg-card border-2 border-border rounded-lg p-6 hover:border-primary hover:shadow-lg transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin size={28} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary">Address Lookup</h3>
                    <ArrowRight size={20} className="text-muted-foreground group-hover:text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Pincode-based address lookup that auto-fills city, state, district from authoritative India Post database.
                    Reduces typing and ensures standardized addresses.
                  </p>
                  <div className="flex items-center gap-4 text-xs">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:text-blue-300 rounded-full font-bold">LOOKUP</span>
                    <span className="text-muted-foreground">Complexity: Low</span>
                    <span className="text-muted-foreground">Reduces errors by 80%</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Auto-fill */}
            <Link
              to="/patterns/data-input/autofill"
              className="bg-card border-2 border-border rounded-lg p-6 hover:border-primary hover:shadow-lg transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap size={28} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary">Auto-fill (Aadhaar / DigiLocker)</h3>
                    <ArrowRight size={20} className="text-muted-foreground group-hover:text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    One-click data import from Aadhaar eKYC or DigiLocker to auto-fill name, address, DOB, and documents.
                    Requires user consent and OTP verification.
                  </p>
                  <div className="flex items-center gap-4 text-xs">
                    <span className="px-3 py-1 bg-green-100 text-green-800 dark:text-green-300 rounded-full font-bold">INTEGRATION</span>
                    <span className="text-muted-foreground">Complexity: High</span>
                    <span className="text-muted-foreground">Saves 5-7 minutes per form</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Smart Suggestions */}
            <Link
              to="/patterns/data-input/smart-suggestions"
              className="bg-card border-2 border-border rounded-lg p-6 hover:border-primary hover:shadow-lg transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap size={28} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary">Smart Suggestions</h3>
                    <ArrowRight size={20} className="text-muted-foreground group-hover:text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Intelligent autocomplete showing relevant suggestions based on user input, previous entries, and common values.
                    Includes typeahead, dropdown, and chip-based selection.
                  </p>
                  <div className="flex items-center gap-4 text-xs">
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full font-bold">AI-POWERED</span>
                    <span className="text-muted-foreground">Complexity: Medium</span>
                    <span className="text-muted-foreground">40% faster input</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Upload → Auto-extract */}
            <Link
              to="/patterns/data-input/upload-extract"
              className="bg-card border-2 border-border rounded-lg p-6 hover:border-primary hover:shadow-lg transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Upload size={28} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary">Upload → Auto-extract</h3>
                    <ArrowRight size={20} className="text-muted-foreground group-hover:text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    OCR-powered data extraction from uploaded documents (PDFs, images). Extracts fields like name, dates,
                    ID numbers from certificates, invoices, or forms with verification step.
                  </p>
                  <div className="flex items-center gap-4 text-xs">
                    <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full font-bold">OCR</span>
                    <span className="text-muted-foreground">Complexity: High</span>
                    <span className="text-muted-foreground">Eliminates manual retyping</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Map-based Input */}
            <Link
              to="/patterns/data-input/map-input"
              className="bg-card border-2 border-border rounded-lg p-6 hover:border-primary hover:shadow-lg transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin size={28} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary">Map-based Input</h3>
                    <ArrowRight size={20} className="text-muted-foreground group-hover:text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Interactive map for selecting locations, drawing boundaries, or plotting coordinates. Auto-generates
                    address from geocoding. Useful for land records, property registration, or field inspections.
                  </p>
                  <div className="flex items-center gap-4 text-xs">
                    <span className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full font-bold">GEOSPATIAL</span>
                    <span className="text-muted-foreground">Complexity: High</span>
                    <span className="text-muted-foreground">Visual & precise</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Bulk Data Entry */}
            <Link
              to="/patterns/data-input/bulk-entry"
              className="bg-card border-2 border-border rounded-lg p-6 hover:border-primary hover:shadow-lg transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Copy size={28} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary">Bulk Data Entry</h3>
                    <ArrowRight size={20} className="text-muted-foreground group-hover:text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Spreadsheet-like interface for entering multiple records at once with CSV upload, copy-paste from Excel,
                    and inline editing. Essential for batch processing or bulk registrations.
                  </p>
                  <div className="flex items-center gap-4 text-xs">
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full font-bold">EFFICIENCY</span>
                    <span className="text-muted-foreground">Complexity: Medium</span>
                    <span className="text-muted-foreground">10x faster for bulk data</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Repeatable Sections */}
            <Link
              to="/patterns/data-input/repeatable-sections"
              className="bg-card border-2 border-border rounded-lg p-6 hover:border-primary hover:shadow-lg transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Copy size={28} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary">Repeatable Sections</h3>
                    <ArrowRight size={20} className="text-muted-foreground group-hover:text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Dynamic form sections that can be added/removed as needed. Common for family members, educational
                    qualifications, work experience, or dependents with Add/Remove controls.
                  </p>
                  <div className="flex items-center gap-4 text-xs">
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 dark:text-yellow-300 rounded-full font-bold">DYNAMIC</span>
                    <span className="text-muted-foreground">Complexity: Low</span>
                    <span className="text-muted-foreground">Flexible for variable data</span>
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
              <h3 className="font-bold text-foreground mb-3">1. Progressive Enhancement</h3>
              <p className="text-sm text-muted-foreground">
                Offer smart features as shortcuts, not replacements. Always provide manual input option for users
                who cannot or choose not to use auto-fill/extraction features.
              </p>
            </div>
            <div className="bg-card border-2 border-border rounded-lg p-6">
              <h3 className="font-bold text-foreground mb-3">2. Transparency & Control</h3>
              <p className="text-sm text-muted-foreground">
                Clearly show what data is being auto-filled from which source. Allow users to review and edit
                extracted/suggested data before submission. Never submit without confirmation.
              </p>
            </div>
            <div className="bg-card border-2 border-border rounded-lg p-6">
              <h3 className="font-bold text-foreground mb-3">3. Trust & Security</h3>
              <p className="text-sm text-muted-foreground">
                For Aadhaar/DigiLocker integration, require explicit consent and OTP verification. Explain data
                usage clearly. Follow data minimization—fetch only required fields.
              </p>
            </div>
            <div className="bg-card border-2 border-border rounded-lg p-6">
              <h3 className="font-bold text-foreground mb-3">4. Graceful Degradation</h3>
              <p className="text-sm text-muted-foreground">
                Handle failures gracefully (API timeout, OCR errors, lookup failures). Fall back to manual entry
                with clear error messages. Don't block progress if smart features fail.
              </p>
            </div>
          </div>
        </section>

        {/* Implementation Notes */}
        <section className="bg-cyan-50 border-2 border-cyan-200 rounded-lg p-4 sm:p-6 lg:p-8">
          <h3 className="font-bold text-foreground mb-4">Implementation Considerations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-muted-foreground">
            <div>
              <h4 className="font-bold text-foreground mb-2">Backend Requirements</h4>
              <ul className="space-y-1 text-xs">
                <li>• India Post Pincode API for address lookup</li>
                <li>• Aadhaar eKYC API integration (UIDAI)</li>
                <li>• DigiLocker API for document fetch</li>
                <li>• OCR service (Tesseract/Cloud Vision API)</li>
                <li>• Maps API (Google Maps/OpenStreetMap)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-2">Security & Privacy</h4>
              <ul className="space-y-1 text-xs">
                <li>• Explicit user consent before data fetch</li>
                <li>• OTP verification for sensitive integrations</li>
                <li>• Data minimization (fetch only required fields)</li>
                <li>• Secure storage and transmission (HTTPS, encryption)</li>
                <li>• Audit logs for compliance</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-2">Performance</h4>
              <ul className="space-y-1 text-xs">
                <li>• Debounce autocomplete requests (300ms)</li>
                <li>• Cache lookup results (pincode, suggestions)</li>
                <li>• Lazy load maps only when needed</li>
                <li>• Show loading states during API calls</li>
                <li>• Handle timeouts gracefully</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-2">Accessibility</h4>
              <ul className="space-y-1 text-xs">
                <li>• Keyboard navigation for all smart features</li>
                <li>• Screen reader announcements for auto-filled data</li>
                <li>• Manual input always available as alternative</li>
                <li>• Clear error messages and recovery options</li>
                <li>• Sufficient time for review/edit (no auto-submit)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Code Downloads */}
        <DataInputCodeDownloads />
      </div>
    </div>
  );
}

// ==================== CODE DOWNLOADS ====================

const DATA_INPUT_REACT_CODE = `import React, { useState } from 'react';

interface FormField { id: string; label: string; type: string; value: string; required: boolean; error?: string; }

export function DataInputPage() {
  const [fields, setFields] = useState<FormField[]>([
    { id: 'aadhaar', label: 'Aadhaar Number', type: 'text', value: '', required: true },
    { id: 'name', label: 'Full Name (as per Aadhaar)', type: 'text', value: '', required: true },
    { id: 'dob', label: 'Date of Birth', type: 'date', value: '', required: true },
    { id: 'mobile', label: 'Mobile Number', type: 'tel', value: '', required: true },
    { id: 'email', label: 'Email (optional)', type: 'email', value: '', required: false },
    { id: 'address', label: 'Residential Address', type: 'text', value: '', required: true },
    { id: 'pincode', label: 'PIN Code', type: 'text', value: '', required: true },
  ]);
  const [submitted, setSubmitted] = useState(false);

  const updateField = (id: string, value: string) => {
    setFields(prev => prev.map(f => f.id === id ? { ...f, value, error: undefined } : f));
  };

  const validate = () => {
    let valid = true;
    setFields(prev => prev.map(f => {
      if (f.required && !f.value.trim()) { valid = false; return { ...f, error: 'This field is required' }; }
      if (f.id === 'aadhaar' && f.value.replace(/\\s/g,'').length !== 12) { valid = false; return { ...f, error: 'Aadhaar must be 12 digits' }; }
      if (f.id === 'mobile' && !/^[6-9]\\d{9}$/.test(f.value)) { valid = false; return { ...f, error: 'Invalid mobile number' }; }
      if (f.id === 'pincode' && !/^\\d{6}$/.test(f.value)) { valid = false; return { ...f, error: 'PIN code must be 6 digits' }; }
      return { ...f, error: undefined };
    }));
    return valid;
  };

  const handleSubmit = () => { if (validate()) setSubmitted(true); };

  if (submitted) return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
        </div>
        <h2 className="text-xl font-bold">Data Submitted Successfully</h2>
        <p className="text-sm text-muted-foreground mt-2">Your information has been saved.</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-lg mx-auto bg-card border border-border rounded-2xl p-6">
        <h1 className="text-2xl font-bold mb-1">Data Input Form</h1>
        <p className="text-sm text-muted-foreground mb-6">Fill in your details for service application</p>
        <div className="space-y-4">
          {fields.map(f => (
            <div key={f.id}>
              <label className="block text-sm font-medium mb-1">{f.label}{f.required && <span className="text-red-500 ml-1">*</span>}</label>
              <input type={f.type} value={f.value} onChange={e => updateField(f.id, e.target.value)} className={\`w-full px-4 py-3 border rounded-lg \${f.error ? 'border-red-300 bg-red-50 dark:bg-red-900/20' : 'border-border'}\`} />
              {f.error && <p className="text-xs text-red-600 mt-1">{f.error}</p>}
            </div>
          ))}
          <button onClick={handleSubmit} className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold">Submit</button>
        </div>
      </div>
    </div>
  );
}`;

const DATA_INPUT_ANGULAR_CODE = `import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ux4g-data-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: \`
    <div class="min-h-screen bg-background p-4">
      <div class="max-w-lg mx-auto bg-card border border-border rounded-2xl p-6">
        <h1 class="text-2xl font-bold mb-1">Data Input Form</h1>
        <p class="text-sm text-muted-foreground mb-6">Fill in your details</p>
        <div class="space-y-4">
          <div *ngFor="let f of fields">
            <label class="block text-sm font-medium mb-1">{{f.label}}<span *ngIf="f.required" class="text-red-500 ml-1">*</span></label>
            <input [type]="f.type" [(ngModel)]="f.value" [class]="'w-full px-4 py-3 border rounded-lg ' + (f.error ? 'border-red-300 bg-red-50' : 'border-border')" />
            <p *ngIf="f.error" class="text-xs text-red-600 mt-1">{{f.error}}</p>
          </div>
          <button (click)="submit()" class="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold">Submit</button>
        </div>
      </div>
    </div>
  \`
})
export class DataInputComponent {
  fields = [
    { id: 'aadhaar', label: 'Aadhaar Number', type: 'text', value: '', required: true, error: '' },
    { id: 'name', label: 'Full Name', type: 'text', value: '', required: true, error: '' },
    { id: 'dob', label: 'Date of Birth', type: 'date', value: '', required: true, error: '' },
    { id: 'mobile', label: 'Mobile Number', type: 'tel', value: '', required: true, error: '' },
  ];
  submit() {
    let valid = true;
    this.fields.forEach(f => { f.error = f.required && !f.value ? 'Required' : ''; if (f.error) valid = false; });
    if (valid) alert('Submitted!');
  }
}`;

const DATA_INPUT_HTML_CODE = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Data Input — UX4G</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: system-ui, sans-serif; background: #f8fafc; min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 1rem; }
    .card { width: 100%; max-width: 480px; background: #fff; border: 1px solid #e2e8f0; border-radius: 1rem; padding: 2rem; }
    h1 { font-size: 1.5rem; font-weight: 700; margin-bottom: .25rem; }
    .subtitle { font-size: .875rem; color: #64748b; margin-bottom: 1.5rem; }
    .field { margin-bottom: 1rem; }
    label { display: block; font-size: .875rem; font-weight: 500; margin-bottom: .25rem; }
    input { width: 100%; padding: .75rem; border: 1px solid #e2e8f0; border-radius: .5rem; font-size: .875rem; }
    input.error { border-color: #fca5a5; background: #fef2f2; }
    .error-msg { font-size: .75rem; color: #dc2626; margin-top: .25rem; }
    .required { color: #ef4444; }
    .btn { width: 100%; padding: .75rem; background: #005196; color: #fff; border: none; border-radius: .5rem; font-weight: 600; cursor: pointer; font-size: .875rem; }
  </style>
</head>
<body>
  <div class="card">
    <h1>Data Input Form</h1>
    <p class="subtitle">Fill in your details for service application</p>
    <div class="field"><label>Aadhaar Number <span class="required">*</span></label><input id="aadhaar" placeholder="XXXX XXXX XXXX" /></div>
    <div class="field"><label>Full Name <span class="required">*</span></label><input id="name" /></div>
    <div class="field"><label>Date of Birth <span class="required">*</span></label><input id="dob" type="date" /></div>
    <div class="field"><label>Mobile Number <span class="required">*</span></label><input id="mobile" type="tel" placeholder="9XXXXXXXXX" /></div>
    <div class="field"><label>PIN Code <span class="required">*</span></label><input id="pincode" placeholder="6 digits" /></div>
    <button class="btn" onclick="submitForm()">Submit</button>
  </div>
  <script>
    function submitForm() {
      const ids = ['aadhaar','name','dob','mobile','pincode'];
      let valid = true;
      ids.forEach(id => {
        const el = document.getElementById(id);
        el.classList.remove('error');
        if (!el.value.trim()) { el.classList.add('error'); valid = false; }
      });
      if (valid) { document.querySelector('.card').innerHTML = '<div style="text-align:center;padding:2rem"><h2 style="font-size:1.25rem;font-weight:700">Data Submitted</h2><p style="color:#64748b;margin-top:.5rem">Your information has been saved.</p></div>'; }
    }
  </script>
</body>
</html>`;

function DataInputCodeDownloads() {
  const [copiedId, setCopiedId] = React.useState<string | null>(null);
  const copyToClipboard = (code: string, id: string) => { navigator.clipboard.writeText(code); setCopiedId(id); setTimeout(() => setCopiedId(null), 2000); };
  const downloadCode = (code: string, filename: string) => { const blob = new Blob([code], { type: 'text/plain' }); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = filename; a.click(); URL.revokeObjectURL(url); };
  const lanes = [
    { key: 'react', title: 'React', desc: 'TypeScript + Validation', code: DATA_INPUT_REACT_CODE, filename: 'DataInputPage.tsx' },
    { key: 'angular', title: 'Angular', desc: 'Standalone + FormsModule', code: DATA_INPUT_ANGULAR_CODE, filename: 'data-input.component.ts' },
    { key: 'html', title: 'HTML / CSS / JS', desc: 'No framework needed', code: DATA_INPUT_HTML_CODE, filename: 'data-input.html' },
  ];
  return (
    <section id="code-downloads" className="space-y-6 scroll-mt-24 mt-12">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Code Downloads</h2>
        <p className="text-muted-foreground mt-1">Production-ready Data Input implementations.</p>
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
