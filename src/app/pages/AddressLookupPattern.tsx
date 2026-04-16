import { useState } from "react";
import { Link } from "react-router";
import { MapPin, ArrowLeft, Search, CheckCircle } from "lucide-react";

export default function AddressLookupPattern() {
  const [pincode, setPincode] = useState("");
  const [addressData, setAddressData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handlePincodeLookup = () => {
    if (pincode.length !== 6) {
      setError("Please enter a valid 6-digit pincode");
      return;
    }

    setLoading(true);
    setError("");

    // Simulate API call
    setTimeout(() => {
      if (pincode === "110001") {
        setAddressData({
          city: "New Delhi",
          state: "Delhi",
          district: "Central Delhi",
          area: "Connaught Place"
        });
      } else if (pincode === "400001") {
        setAddressData({
          city: "Mumbai",
          state: "Maharashtra",
          district: "Mumbai",
          area: "Fort"
        });
      } else if (pincode === "560001") {
        setAddressData({
          city: "Bangalore",
          state: "Karnataka",
          district: "Bangalore Urban",
          area: "Bangalore GPO"
        });
      } else {
        setError("Pincode not found. Please check and try again.");
        setAddressData(null);
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 border-b-4 border-[#FF9933]">
        <div className="max-w-[1400px] mx-auto px-12 py-16">
          <div className="mb-6">
            <Link to="/patterns/data-input" className="text-sm text-muted-foreground hover:text-primary">
              ← Back to Data Input Patterns
            </Link>
          </div>
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-500 border-3 border-white shadow-lg rounded-lg flex items-center justify-center">
                <MapPin size={40} className="text-white" />
              </div>
              <div>
                <div className="text-sm font-bold text-primary mb-2 uppercase tracking-wide">Data Input Pattern</div>
                <h1 className="text-5xl font-bold text-foreground">Address Lookup</h1>
              </div>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              Automatically populate city, state, and district information based on pincode entry using
              India Post API, reducing manual data entry and improving address accuracy.
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto px-12 py-12">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-8">
            <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-6">
              <h2 className="font-bold text-foreground mb-2">Interactive Demo</h2>
              <p className="text-sm text-muted-foreground">
                Enter a pincode to automatically populate address fields. Try: 110001 (Delhi), 400001 (Mumbai), or 560001 (Bangalore).
              </p>
            </div>

            {/* Demo Form */}
            <div className="bg-card border-2 border-border rounded-lg p-8">
              <h3 className="font-bold text-foreground mb-6">Address Information</h3>

              <div className="space-y-6">
                {/* Pincode Input */}
                <div>
                  <label className="block font-bold text-foreground mb-2">
                    Pincode <span className="text-red-600">*</span>
                  </label>
                  <div className="flex gap-3">
                    <input
                      type="text"
                      value={pincode}
                      onChange={(e) => {
                        setPincode(e.target.value.replace(/\D/g, "").slice(0, 6));
                        setError("");
                        setAddressData(null);
                      }}
                      placeholder="Enter 6-digit pincode"
                      className="flex-1 px-4 py-3 border-2 border-border rounded focus:border-primary focus:outline-none"
                      maxLength={6}
                    />
                    <button
                      onClick={handlePincodeLookup}
                      disabled={loading || pincode.length !== 6}
                      className="px-6 py-3 bg-primary text-white rounded font-bold hover:opacity-90 disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center gap-2"
                    >
                      {loading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Looking up...
                        </>
                      ) : (
                        <>
                          <Search size={18} />
                          Lookup
                        </>
                      )}
                    </button>
                  </div>
                  {error && (
                    <div className="mt-2 text-sm text-red-600 flex items-center gap-2">
                      <div className="w-4 h-4 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                        !
                      </div>
                      {error}
                    </div>
                  )}
                  {addressData && (
                    <div className="mt-2 text-sm text-green-600 flex items-center gap-2">
                      <CheckCircle size={16} />
                      Address details found and auto-filled below
                    </div>
                  )}
                </div>

                {/* Auto-filled Fields */}
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block font-bold text-foreground mb-2">
                      State <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      value={addressData?.state || ""}
                      className={`w-full px-4 py-3 border-2 rounded ${
                        addressData ? "border-green-500 bg-green-50" : "border-border bg-background"
                      }`}
                      readOnly
                      placeholder="Will be auto-filled"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-foreground mb-2">
                      District <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      value={addressData?.district || ""}
                      className={`w-full px-4 py-3 border-2 rounded ${
                        addressData ? "border-green-500 bg-green-50" : "border-border bg-background"
                      }`}
                      readOnly
                      placeholder="Will be auto-filled"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-foreground mb-2">
                      City <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      value={addressData?.city || ""}
                      className={`w-full px-4 py-3 border-2 rounded ${
                        addressData ? "border-green-500 bg-green-50" : "border-border bg-background"
                      }`}
                      readOnly
                      placeholder="Will be auto-filled"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-foreground mb-2">Area/Locality</label>
                    <input
                      type="text"
                      value={addressData?.area || ""}
                      className={`w-full px-4 py-3 border-2 rounded ${
                        addressData ? "border-green-500 bg-green-50" : "border-border bg-background"
                      }`}
                      readOnly
                      placeholder="Will be auto-filled"
                    />
                  </div>
                </div>

                {/* Manual Entry Fields */}
                <div>
                  <label className="block font-bold text-foreground mb-2">
                    Street Address <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    className="w-full px-4 py-3 border-2 border-border rounded focus:border-primary focus:outline-none"
                    rows={3}
                    placeholder="House/Flat No., Building Name, Street Name"
                  ></textarea>
                  <div className="text-xs text-muted-foreground mt-1">This field requires manual entry</div>
                </div>
              </div>
            </div>

            {/* Implementation Guide */}
            <div className="mt-8 space-y-6">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">API Integration</h2>
                <div className="bg-card border-2 border-border rounded-lg p-6">
                  <h3 className="font-bold text-foreground mb-4">India Post Pincode API</h3>
                  <div className="bg-gray-900 text-gray-100 rounded-lg p-6 text-sm font-mono overflow-x-auto mb-4">
                    <pre>{`// API Endpoint
GET https://api.postalpincode.in/pincode/{pincode}

// Example Response
{
  "Status": "Success",
  "PostOffice": [
    {
      "Name": "Connaught Place",
      "District": "Central Delhi",
      "State": "Delhi",
      "Country": "India"
    }
  ]
}`}</pre>
                  </div>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p><strong>Free & Public:</strong> No authentication required</p>
                    <p><strong>Response Time:</strong> Typically 200-500ms</p>
                    <p><strong>Fallback:</strong> Allow manual entry if API fails</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Best Practices</h2>
                <div className="bg-card border-2 border-border rounded-lg p-6 space-y-3 text-sm">
                  <div>
                    <h3 className="font-bold text-foreground mb-1">1. Trigger Lookup at Right Time</h3>
                    <p className="text-muted-foreground">
                      Trigger API call when user completes 6 digits, not on every keystroke. Add manual "Lookup" button as backup.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">2. Visual Feedback for Auto-fill</h3>
                    <p className="text-muted-foreground">
                      Use green borders/backgrounds on auto-filled fields to show what was populated automatically.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">3. Allow Manual Override</h3>
                    <p className="text-muted-foreground">
                      In rare cases API data may be outdated. Provide option to edit auto-filled values if needed.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">4. Error Handling</h3>
                    <p className="text-muted-foreground">
                      Show clear error messages for invalid pincodes or API failures. Never block form submission.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">5. Cache Common Pincodes</h3>
                    <p className="text-muted-foreground">
                      Cache frequently used pincodes client-side to reduce API calls and improve performance.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Accessibility Considerations</h2>
                <div className="bg-card border-2 border-border rounded-lg p-6 space-y-2 text-sm text-muted-foreground">
                  <p>• Announce auto-fill results to screen readers using ARIA live regions</p>
                  <p>• Ensure loading state is communicated ("Looking up pincode...")</p>
                  <p>• Maintain keyboard navigation throughout the lookup flow</p>
                  <p>• Don't auto-focus to next field after lookup (disrupts screen reader flow)</p>
                </div>
              </section>
            </div>
          </div>

          <aside className="col-span-4">
            <div className="sticky top-8 space-y-6">
              <div className="bg-card border-2 border-border rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-4">Pattern Information</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Complexity</div>
                    <div className="font-bold">Low</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Time Saved</div>
                    <div className="font-bold">~30 seconds per form</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Accuracy Improvement</div>
                    <div className="font-bold">95%+ reduction in errors</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">API Dependency</div>
                    <div className="font-bold">India Post Pincode API</div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-3">When to Use</h3>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li>✓ Any form requiring Indian address</li>
                  <li>✓ Registration & onboarding flows</li>
                  <li>✓ Delivery address collection</li>
                  <li>✓ Service applications</li>
                  <li>✓ Certificate requests</li>
                </ul>
              </div>

              <div className="bg-card border-2 border-border rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-4">Impact Metrics</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="text-2xl font-bold text-green-600 mb-1">-40%</div>
                    <div className="text-xs text-muted-foreground">Form completion time</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600 mb-1">-95%</div>
                    <div className="text-xs text-muted-foreground">Address errors</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600 mb-1">+25%</div>
                    <div className="text-xs text-muted-foreground">Form completion rate</div>
                  </div>
                </div>
              </div>

              <div className="bg-card border-2 border-border rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-4">Related Patterns</h3>
                <div className="space-y-2">
                  <Link to="/patterns/data-input/map-input" className="block text-sm text-primary hover:underline">
                    → Map-based Input
                  </Link>
                  <Link to="/patterns/data-input/autofill" className="block text-sm text-primary hover:underline">
                    → Auto-fill (Aadhaar/DigiLocker)
                  </Link>
                  <Link to="/patterns/data-input/smart-suggestions" className="block text-sm text-primary hover:underline">
                    → Smart Suggestions
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
