import { Link } from "react-router";
import { Database, MapPin, Upload, Zap, Copy, ArrowRight, CheckCircle, TrendingUp, Users } from "lucide-react";

export default function DataInputPatterns() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-br from-cyan-50 via-white to-blue-50 border-b-4 border-[#FF9933]">
        <div className="max-w-[1400px] mx-auto px-12 py-16">
          <div className="mb-6">
            <Link to="/pattern-library" className="text-sm text-gray-600 hover:text-[#000080]">
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
                  <div className="text-sm font-bold text-[#000080] mb-2 uppercase tracking-wide">Pattern Family</div>
                  <h1 className="text-5xl font-bold text-gray-900">Data Input Beyond Forms</h1>
                </div>
              </div>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Advanced input patterns that go beyond traditional form fields by leveraging smart technologies,
                integrations, and intelligent UX to reduce user effort, minimize errors, and accelerate data entry.
              </p>
              <div className="flex items-center gap-8 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#FF9933] rounded-full"></div>
                  <span className="text-gray-700">Pattern Family: <span className="font-bold text-gray-900">Smart Input</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#138808] rounded-full"></div>
                  <span className="text-gray-700">Patterns: <span className="font-bold text-gray-900">7 Intelligent Flows</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#000080] rounded-full"></div>
                  <span className="text-gray-700">Complexity: <span className="font-bold text-gray-900">Medium to High</span></span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="px-8 py-4 bg-[#FF9933] text-white rounded-lg font-bold text-center shadow-lg">
                INTELLIGENT
              </div>
              <div className="px-8 py-4 bg-white border-2 border-[#138808] text-[#138808] rounded-lg font-bold text-center">
                EFFORTLESS
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Quick Access */}
      <div className="bg-white border-b-2 border-gray-300">
        <div className="max-w-[1400px] mx-auto px-12 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <span className="font-bold text-gray-900">Quick Access:</span>
              <Link to="#overview" className="text-[#000080] hover:underline text-sm font-medium">
                Pattern Overview
              </Link>
              <Link to="#all-patterns" className="text-[#000080] hover:underline text-sm font-medium">
                View All Patterns
              </Link>
            </div>
            <div className="text-sm text-gray-600">
              Last updated: April 2026
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-[1400px] mx-auto px-12 py-12">

        {/* Overview Section */}
        <section id="overview" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Pattern Overview</h2>
          <div className="bg-white border-2 border-gray-300 rounded-lg p-8 mb-8">
            <div className="grid grid-cols-3 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap size={24} className="text-cyan-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Reduce User Effort</h3>
                  <p className="text-sm text-gray-700">
                    Minimize typing by auto-filling, extracting, or suggesting data from verified sources
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle size={24} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Improve Accuracy</h3>
                  <p className="text-sm text-gray-700">
                    Reduce errors through validation, lookups, and data extraction from authoritative sources
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp size={24} className="text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Accelerate Completion</h3>
                  <p className="text-sm text-gray-700">
                    Speed up form completion with bulk entry, repeatable sections, and intelligent defaults
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* When to Use */}
          <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="font-bold text-gray-900 mb-4">When to Use These Patterns</h3>
            <ul className="space-y-2 text-sm text-gray-700">
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">All Data Input Patterns</h2>

          <div className="grid grid-cols-1 gap-6">

            {/* Address Lookup */}
            <Link
              to="/patterns/data-input/address-lookup"
              className="bg-white border-2 border-gray-300 rounded-lg p-6 hover:border-[#000080] hover:shadow-lg transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin size={28} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#000080]">Address Lookup</h3>
                    <ArrowRight size={20} className="text-gray-400 group-hover:text-[#000080]" />
                  </div>
                  <p className="text-sm text-gray-700 mb-3">
                    Pincode-based address lookup that auto-fills city, state, district from authoritative India Post database.
                    Reduces typing and ensures standardized addresses.
                  </p>
                  <div className="flex items-center gap-4 text-xs">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full font-bold">LOOKUP</span>
                    <span className="text-gray-600">Complexity: Low</span>
                    <span className="text-gray-600">Reduces errors by 80%</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Auto-fill */}
            <Link
              to="/patterns/data-input/autofill"
              className="bg-white border-2 border-gray-300 rounded-lg p-6 hover:border-[#000080] hover:shadow-lg transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap size={28} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#000080]">Auto-fill (Aadhaar / DigiLocker)</h3>
                    <ArrowRight size={20} className="text-gray-400 group-hover:text-[#000080]" />
                  </div>
                  <p className="text-sm text-gray-700 mb-3">
                    One-click data import from Aadhaar eKYC or DigiLocker to auto-fill name, address, DOB, and documents.
                    Requires user consent and OTP verification.
                  </p>
                  <div className="flex items-center gap-4 text-xs">
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full font-bold">INTEGRATION</span>
                    <span className="text-gray-600">Complexity: High</span>
                    <span className="text-gray-600">Saves 5-7 minutes per form</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Smart Suggestions */}
            <Link
              to="/patterns/data-input/smart-suggestions"
              className="bg-white border-2 border-gray-300 rounded-lg p-6 hover:border-[#000080] hover:shadow-lg transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap size={28} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#000080]">Smart Suggestions</h3>
                    <ArrowRight size={20} className="text-gray-400 group-hover:text-[#000080]" />
                  </div>
                  <p className="text-sm text-gray-700 mb-3">
                    Intelligent autocomplete showing relevant suggestions based on user input, previous entries, and common values.
                    Includes typeahead, dropdown, and chip-based selection.
                  </p>
                  <div className="flex items-center gap-4 text-xs">
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full font-bold">AI-POWERED</span>
                    <span className="text-gray-600">Complexity: Medium</span>
                    <span className="text-gray-600">40% faster input</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Upload → Auto-extract */}
            <Link
              to="/patterns/data-input/upload-extract"
              className="bg-white border-2 border-gray-300 rounded-lg p-6 hover:border-[#000080] hover:shadow-lg transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Upload size={28} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#000080]">Upload → Auto-extract</h3>
                    <ArrowRight size={20} className="text-gray-400 group-hover:text-[#000080]" />
                  </div>
                  <p className="text-sm text-gray-700 mb-3">
                    OCR-powered data extraction from uploaded documents (PDFs, images). Extracts fields like name, dates,
                    ID numbers from certificates, invoices, or forms with verification step.
                  </p>
                  <div className="flex items-center gap-4 text-xs">
                    <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full font-bold">OCR</span>
                    <span className="text-gray-600">Complexity: High</span>
                    <span className="text-gray-600">Eliminates manual retyping</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Map-based Input */}
            <Link
              to="/patterns/data-input/map-input"
              className="bg-white border-2 border-gray-300 rounded-lg p-6 hover:border-[#000080] hover:shadow-lg transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin size={28} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#000080]">Map-based Input</h3>
                    <ArrowRight size={20} className="text-gray-400 group-hover:text-[#000080]" />
                  </div>
                  <p className="text-sm text-gray-700 mb-3">
                    Interactive map for selecting locations, drawing boundaries, or plotting coordinates. Auto-generates
                    address from geocoding. Useful for land records, property registration, or field inspections.
                  </p>
                  <div className="flex items-center gap-4 text-xs">
                    <span className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full font-bold">GEOSPATIAL</span>
                    <span className="text-gray-600">Complexity: High</span>
                    <span className="text-gray-600">Visual & precise</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Bulk Data Entry */}
            <Link
              to="/patterns/data-input/bulk-entry"
              className="bg-white border-2 border-gray-300 rounded-lg p-6 hover:border-[#000080] hover:shadow-lg transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Copy size={28} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#000080]">Bulk Data Entry</h3>
                    <ArrowRight size={20} className="text-gray-400 group-hover:text-[#000080]" />
                  </div>
                  <p className="text-sm text-gray-700 mb-3">
                    Spreadsheet-like interface for entering multiple records at once with CSV upload, copy-paste from Excel,
                    and inline editing. Essential for batch processing or bulk registrations.
                  </p>
                  <div className="flex items-center gap-4 text-xs">
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full font-bold">EFFICIENCY</span>
                    <span className="text-gray-600">Complexity: Medium</span>
                    <span className="text-gray-600">10x faster for bulk data</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Repeatable Sections */}
            <Link
              to="/patterns/data-input/repeatable-sections"
              className="bg-white border-2 border-gray-300 rounded-lg p-6 hover:border-[#000080] hover:shadow-lg transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Copy size={28} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#000080]">Repeatable Sections</h3>
                    <ArrowRight size={20} className="text-gray-400 group-hover:text-[#000080]" />
                  </div>
                  <p className="text-sm text-gray-700 mb-3">
                    Dynamic form sections that can be added/removed as needed. Common for family members, educational
                    qualifications, work experience, or dependents with Add/Remove controls.
                  </p>
                  <div className="flex items-center gap-4 text-xs">
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full font-bold">DYNAMIC</span>
                    <span className="text-gray-600">Complexity: Low</span>
                    <span className="text-gray-600">Flexible for variable data</span>
                  </div>
                </div>
              </div>
            </Link>

          </div>
        </section>

        {/* Design Principles */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Design Principles</h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white border-2 border-gray-300 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-3">1. Progressive Enhancement</h3>
              <p className="text-sm text-gray-700">
                Offer smart features as shortcuts, not replacements. Always provide manual input option for users
                who cannot or choose not to use auto-fill/extraction features.
              </p>
            </div>
            <div className="bg-white border-2 border-gray-300 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-3">2. Transparency & Control</h3>
              <p className="text-sm text-gray-700">
                Clearly show what data is being auto-filled from which source. Allow users to review and edit
                extracted/suggested data before submission. Never submit without confirmation.
              </p>
            </div>
            <div className="bg-white border-2 border-gray-300 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-3">3. Trust & Security</h3>
              <p className="text-sm text-gray-700">
                For Aadhaar/DigiLocker integration, require explicit consent and OTP verification. Explain data
                usage clearly. Follow data minimization—fetch only required fields.
              </p>
            </div>
            <div className="bg-white border-2 border-gray-300 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-3">4. Graceful Degradation</h3>
              <p className="text-sm text-gray-700">
                Handle failures gracefully (API timeout, OCR errors, lookup failures). Fall back to manual entry
                with clear error messages. Don't block progress if smart features fail.
              </p>
            </div>
          </div>
        </section>

        {/* Implementation Notes */}
        <section className="bg-cyan-50 border-2 border-cyan-200 rounded-lg p-8">
          <h3 className="font-bold text-gray-900 mb-4">Implementation Considerations</h3>
          <div className="grid grid-cols-2 gap-6 text-sm text-gray-700">
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Backend Requirements</h4>
              <ul className="space-y-1 text-xs">
                <li>• India Post Pincode API for address lookup</li>
                <li>• Aadhaar eKYC API integration (UIDAI)</li>
                <li>• DigiLocker API for document fetch</li>
                <li>• OCR service (Tesseract/Cloud Vision API)</li>
                <li>• Maps API (Google Maps/OpenStreetMap)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Security & Privacy</h4>
              <ul className="space-y-1 text-xs">
                <li>• Explicit user consent before data fetch</li>
                <li>• OTP verification for sensitive integrations</li>
                <li>• Data minimization (fetch only required fields)</li>
                <li>• Secure storage and transmission (HTTPS, encryption)</li>
                <li>• Audit logs for compliance</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Performance</h4>
              <ul className="space-y-1 text-xs">
                <li>• Debounce autocomplete requests (300ms)</li>
                <li>• Cache lookup results (pincode, suggestions)</li>
                <li>• Lazy load maps only when needed</li>
                <li>• Show loading states during API calls</li>
                <li>• Handle timeouts gracefully</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Accessibility</h4>
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

      </main>
    </div>
  );
}
