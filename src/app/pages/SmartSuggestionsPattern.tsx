import { useState } from "react";
import { Link } from "react-router";
import { Lightbulb, ArrowLeft, Search, TrendingUp, Clock, MapPin } from "lucide-react";

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
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-br from-purple-50 via-white to-pink-50 border-b-4 border-[#FF9933]">
        <div className="max-w-[1400px] mx-auto px-12 py-16">
          <div className="mb-6">
            <Link to="/patterns/data-input" className="text-sm text-gray-600 hover:text-[#000080]">
              ← Back to Data Input Patterns
            </Link>
          </div>
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 border-3 border-white shadow-lg rounded-lg flex items-center justify-center">
                <Lightbulb size={40} className="text-white" />
              </div>
              <div>
                <div className="text-sm font-bold text-[#000080] mb-2 uppercase tracking-wide">Data Input Pattern</div>
                <h1 className="text-5xl font-bold text-gray-900">Smart Suggestions</h1>
              </div>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Context-aware autocomplete that suggests values based on user behavior, popular choices,
              and intelligent prediction to accelerate form completion.
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto px-12 py-12">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-8">
            <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-6 mb-6">
              <h2 className="font-bold text-gray-900 mb-2">Interactive Demo</h2>
              <p className="text-sm text-gray-700">
                Type in the fields below to see context-aware suggestions based on popular choices and smart prediction.
              </p>
            </div>

            {/* Demo Examples */}
            <div className="space-y-6">

              {/* Example 1: Occupation with Categories */}
              <div className="bg-white border-2 border-gray-300 rounded-lg p-8">
                <h3 className="font-bold text-gray-900 mb-4">Example 1: Categorized Suggestions</h3>
                <div className="relative">
                  <label className="block font-bold text-gray-900 mb-2">
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
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded focus:border-[#000080] focus:outline-none"
                    />
                    <Search size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  </div>

                  {showSuggestions && filteredOccupations.length > 0 && (
                    <div className="absolute z-10 w-full mt-2 bg-white border-2 border-gray-300 rounded-lg shadow-lg max-h-80 overflow-y-auto">
                      {filteredOccupations.map((occ, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            setOccupation(occ.value);
                            setShowSuggestions(false);
                          }}
                          className="w-full px-4 py-3 text-left hover:bg-blue-50 border-b border-gray-200 last:border-b-0 flex items-center justify-between"
                        >
                          <div>
                            <div className="font-bold text-gray-900">{occ.value}</div>
                            <div className="text-xs text-gray-600">{occ.category}</div>
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
                <div className="text-xs text-gray-600 mt-2">
                  Try typing: "Teacher", "Software", "Doctor"
                </div>
              </div>

              {/* Example 2: Location with Popular First */}
              <div className="bg-white border-2 border-gray-300 rounded-lg p-8">
                <h3 className="font-bold text-gray-900 mb-4">Example 2: Popular Choices First</h3>
                <div className="relative">
                  <label className="block font-bold text-gray-900 mb-2">
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
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded focus:border-[#000080] focus:outline-none"
                    />
                    <MapPin size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  </div>

                  {showDistrictSuggestions && (
                    <div className="absolute z-10 w-full mt-2 bg-white border-2 border-gray-300 rounded-lg shadow-lg max-h-80 overflow-y-auto">
                      {!district && (
                        <div className="px-4 py-2 bg-blue-50 border-b-2 border-blue-200 text-xs text-gray-700 font-bold">
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
                          className="w-full px-4 py-3 text-left hover:bg-blue-50 border-b border-gray-200 last:border-b-0"
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-bold text-gray-900">{d.value}</div>
                              <div className="text-xs text-gray-600">{d.state}</div>
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
                <div className="text-xs text-gray-600 mt-2">
                  Popular districts shown first. Start typing to search all districts.
                </div>
              </div>

              {/* Example 3: Recent Entries */}
              <div className="bg-white border-2 border-gray-300 rounded-lg p-8">
                <h3 className="font-bold text-gray-900 mb-4">Example 3: Recent & Frequent Values</h3>
                <div>
                  <label className="block font-bold text-gray-900 mb-2">Purpose of Visit</label>
                  <input
                    type="text"
                    placeholder="Start typing..."
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded focus:border-[#000080] focus:outline-none"
                  />

                  <div className="mt-3">
                    <div className="text-xs text-gray-600 mb-2 flex items-center gap-2">
                      <Clock size={14} />
                      RECENTLY USED
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <button className="px-3 py-1.5 bg-gray-100 border border-gray-300 rounded text-sm hover:bg-blue-50 hover:border-[#000080]">
                        Income Certificate
                      </button>
                      <button className="px-3 py-1.5 bg-gray-100 border border-gray-300 rounded text-sm hover:bg-blue-50 hover:border-[#000080]">
                        Domicile Certificate
                      </button>
                      <button className="px-3 py-1.5 bg-gray-100 border border-gray-300 rounded text-sm hover:bg-blue-50 hover:border-[#000080]">
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
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Suggestion Strategies</h2>
                <div className="bg-white border-2 border-gray-300 rounded-lg p-6">
                  <div className="space-y-4 text-sm">
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">1. Popular First</h3>
                      <p className="text-gray-700 mb-2">
                        Show most commonly selected options at the top. Useful for fields with clear popular choices.
                      </p>
                      <div className="bg-gray-50 border border-gray-200 rounded p-3 text-xs font-mono">
                        {`// Sort by selection frequency
suggestions.sort((a, b) => b.count - a.count);`}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">2. Recent History</h3>
                      <p className="text-gray-700 mb-2">
                        Show user's recently used values. Store in localStorage for returning users.
                      </p>
                      <div className="bg-gray-50 border border-gray-200 rounded p-3 text-xs font-mono">
                        {`// Store recent selections
localStorage.setItem('recent_occupation',
  JSON.stringify([...recentValues, newValue].slice(0, 5)));`}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">3. Context-Aware</h3>
                      <p className="text-gray-700 mb-2">
                        Predict based on other field values. Example: Suggest districts in selected state only.
                      </p>
                      <div className="bg-gray-50 border border-gray-200 rounded p-3 text-xs font-mono">
                        {`// Filter by context
const suggestions = districts.filter(
  d => d.state === selectedState
);`}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">4. Fuzzy Matching</h3>
                      <p className="text-gray-700">
                        Match partial/misspelled input. "Bangalor" should match "Bangalore Urban".
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">UX Best Practices</h2>
                <div className="bg-white border-2 border-gray-300 rounded-lg p-6 space-y-3 text-sm">
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">1. Show Suggestions Early</h3>
                    <p className="text-gray-700">
                      Display popular options on focus, before user starts typing. Don't wait for 3+ characters.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">2. Limit Suggestion Count</h3>
                    <p className="text-gray-700">
                      Show 5-8 suggestions max. Too many options overwhelm users. Add "View All" if needed.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">3. Highlight Match Text</h3>
                    <p className="text-gray-700">
                      Bold the matched portion in suggestions to help users quickly scan options.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">4. Add Visual Indicators</h3>
                    <p className="text-gray-700">
                      Use icons/badges for "Popular", "Recent", "Recommended" to guide selection.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">5. Keyboard Navigation</h3>
                    <p className="text-gray-700">
                      Support arrow keys to navigate, Enter to select, Escape to close suggestions.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">6. Allow Free Text</h3>
                    <p className="text-gray-700">
                      Don't restrict to suggestions only. Users should be able to type custom values.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Performance Optimization</h2>
                <div className="bg-white border-2 border-gray-300 rounded-lg p-6 space-y-3 text-sm">
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Debounce Input</h3>
                    <p className="text-gray-700">
                      Wait 200-300ms after user stops typing before fetching suggestions. Reduces API calls.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Cache Results</h3>
                    <p className="text-gray-700">
                      Cache API responses for common searches. Instant suggestions for repeated queries.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Prioritize Client-Side</h3>
                    <p className="text-gray-700">
                      For small datasets (&lt;1000 items), filter client-side instead of API calls.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>

          <aside className="col-span-4">
            <div className="sticky top-8 space-y-6">
              <div className="bg-white border-2 border-gray-300 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-4">Pattern Information</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="text-xs text-gray-600 mb-1">Complexity</div>
                    <div className="font-bold">Low-Medium</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-600 mb-1">Time Saved</div>
                    <div className="font-bold">~15-30 seconds per field</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-600 mb-1">Error Reduction</div>
                    <div className="font-bold">60-80%</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-600 mb-1">Best For</div>
                    <div className="font-bold">Predictable inputs</div>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">When to Use</h3>
                <ul className="space-y-2 text-xs text-gray-700">
                  <li>✓ Fields with known value sets</li>
                  <li>✓ Location/address inputs</li>
                  <li>✓ Occupation/profession</li>
                  <li>✓ Department/organization</li>
                  <li>✓ Common search patterns</li>
                  <li>✓ Service type selection</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-300 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-4">Data Sources</h3>
                <ul className="space-y-2 text-xs text-gray-700">
                  <li>• Usage analytics (popular)</li>
                  <li>• User history (recent)</li>
                  <li>• Static datasets (master data)</li>
                  <li>• API lookups (dynamic)</li>
                  <li>• ML predictions (smart)</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-300 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-4">Related Patterns</h3>
                <div className="space-y-2">
                  <Link to="/patterns/data-input/address-lookup" className="block text-sm text-[#000080] hover:underline">
                    → Address Lookup
                  </Link>
                  <Link to="/patterns/data-input/autofill" className="block text-sm text-[#000080] hover:underline">
                    → Auto-fill Pattern
                  </Link>
                  <Link to="/patterns/form-validation" className="block text-sm text-[#000080] hover:underline">
                    → Form Validation
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
