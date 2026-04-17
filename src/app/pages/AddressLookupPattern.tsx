import React, { useState } from "react";
import { Link } from "react-router";
import { MapPin, ArrowLeft, Search, CheckCircle, Download, Copy, Check } from "lucide-react";

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
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-16">
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
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">Address Lookup</h1>
              </div>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              Automatically populate city, state, and district information based on pincode entry using
              India Post API, reducing manual data entry and improving address accuracy.
            </p>
          </div>
        </div>
      </header>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-8">
            <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-6">
              <h2 className="font-bold text-foreground mb-2">Interactive Demo</h2>
              <p className="text-sm text-muted-foreground">
                Enter a pincode to automatically populate address fields. Try: 110001 (Delhi), 400001 (Mumbai), or 560001 (Bangalore).
              </p>
            </div>

            {/* Demo Form */}
            <div className="bg-card border-2 border-border rounded-lg p-4 sm:p-6 lg:p-8">
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

          <div className="col-span-4">
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
          </div>
        </div>

        <AddressLookupCodeDownloads />

      </div>
    </div>
  );
}

// ==================== CODE DOWNLOADS ====================

const ADDR_REACT_CODE = `import React, { useState, useCallback, useEffect } from 'react';

interface Address {
  pincode: string;
  state: string;
  district: string;
  city: string;
  locality: string;
  street: string;
  landmark: string;
}

const EMPTY: Address = { pincode: '', state: '', district: '', city: '', locality: '', street: '', landmark: '' };

export function AddressLookupPage() {
  const [address, setAddress] = useState<Address>(EMPTY);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [autoFilled, setAutoFilled] = useState(false);

  const lookupPincode = useCallback(async (pin: string) => {
    if (pin.length !== 6) return;
    setLoading(true); setError('');
    try {
      const res = await fetch(\`/api/address/pincode/\${pin}\`);
      if (!res.ok) { setError('Invalid PIN code'); return; }
      const data = await res.json();
      setAddress(prev => ({ ...prev, state: data.state, district: data.district, city: data.city }));
      setAutoFilled(true);
    } catch { setError('Failed to lookup PIN code'); }
    finally { setLoading(false); }
  }, []);

  const handlePincodeChange = (val: string) => {
    const pin = val.replace(/\\D/g, '').slice(0, 6);
    setAddress(prev => ({ ...prev, pincode: pin }));
    setAutoFilled(false);
    if (pin.length === 6) lookupPincode(pin);
  };

  const searchLocality = useCallback(async (query: string) => {
    if (query.length < 3) { setSuggestions([]); return; }
    try {
      const res = await fetch(\`/api/address/search?q=\${encodeURIComponent(query)}&pincode=\${address.pincode}\`);
      const data = await res.json();
      setSuggestions(data.suggestions || []);
    } catch { /* ignore */ }
  }, [address.pincode]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!address.pincode || !address.state || !address.street) { setError('Please fill required fields'); return; }
    setLoading(true); setError('');
    try {
      const res = await fetch('/api/address/save', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(address) });
      if (!res.ok) { setError('Failed to save address'); return; }
      alert('Address saved successfully');
    } catch { setError('Network error'); }
    finally { setLoading(false); }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-lg bg-card border border-border rounded-2xl p-8 shadow-sm">
        <h1 className="text-2xl font-bold text-foreground mb-2">Address</h1>
        <p className="text-sm text-muted-foreground mb-6">Enter PIN code for auto-fill of state, district, and city</p>
        {error && <div role="alert" className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">{error}</div>}
        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="pincode" className="block text-sm font-medium mb-1">PIN Code <span className="text-red-500">*</span></label>
              <input id="pincode" type="text" inputMode="numeric" value={address.pincode} onChange={e => handlePincodeChange(e.target.value)} placeholder="110001" maxLength={6} className="w-full px-4 py-3 border border-border rounded-lg font-mono text-lg" aria-required="true" />
              {loading && <p className="text-xs text-primary mt-1">Looking up...</p>}
            </div>
            <div>
              <label htmlFor="state" className="block text-sm font-medium mb-1">State</label>
              <input id="state" type="text" value={address.state} readOnly={autoFilled} className="w-full px-4 py-3 border border-border rounded-lg bg-muted/50" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="district" className="block text-sm font-medium mb-1">District</label>
              <input id="district" type="text" value={address.district} readOnly={autoFilled} className="w-full px-4 py-3 border border-border rounded-lg bg-muted/50" />
            </div>
            <div>
              <label htmlFor="city" className="block text-sm font-medium mb-1">City/Town</label>
              <input id="city" type="text" value={address.city} readOnly={autoFilled} className="w-full px-4 py-3 border border-border rounded-lg bg-muted/50" />
            </div>
          </div>
          <div className="relative">
            <label htmlFor="locality" className="block text-sm font-medium mb-1">Locality</label>
            <input id="locality" type="text" value={address.locality} onChange={e => { setAddress(prev => ({...prev, locality: e.target.value})); searchLocality(e.target.value); }} placeholder="Start typing..." className="w-full px-4 py-3 border border-border rounded-lg" />
            {suggestions.length > 0 && <ul className="absolute z-10 w-full bg-card border border-border rounded-lg mt-1 shadow-lg max-h-40 overflow-auto">{suggestions.map((s,i) => <li key={i} className="px-4 py-2 hover:bg-muted cursor-pointer text-sm" onClick={() => { setAddress(prev => ({...prev, locality: s})); setSuggestions([]); }}>{s}</li>)}</ul>}
          </div>
          <div>
            <label htmlFor="street" className="block text-sm font-medium mb-1">Street / House No. <span className="text-red-500">*</span></label>
            <input id="street" type="text" value={address.street} onChange={e => setAddress(prev => ({...prev, street: e.target.value}))} className="w-full px-4 py-3 border border-border rounded-lg" aria-required="true" />
          </div>
          <div>
            <label htmlFor="landmark" className="block text-sm font-medium mb-1">Landmark</label>
            <input id="landmark" type="text" value={address.landmark} onChange={e => setAddress(prev => ({...prev, landmark: e.target.value}))} placeholder="Near..." className="w-full px-4 py-3 border border-border rounded-lg" />
          </div>
          <button type="submit" disabled={loading} className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold disabled:opacity-60">{loading ? 'Saving...' : 'Save Address'}</button>
        </form>
      </div>
    </div>
  );
}`;

const ADDR_ANGULAR_CODE = `import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'ux4g-address-lookup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: \`
    <div class="min-h-screen flex items-center justify-center bg-background p-4">
      <div class="w-full max-w-lg bg-card border border-border rounded-2xl p-8 shadow-sm">
        <h1 class="text-2xl font-bold mb-6">Address</h1>
        <div *ngIf="error" role="alert" class="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">{{ error }}</div>
        <form [formGroup]="form" (ngSubmit)="save()" class="space-y-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div><label class="block text-sm font-medium mb-1">PIN Code *</label><input formControlName="pincode" (input)="onPincode()" maxlength="6" class="w-full px-4 py-3 border border-border rounded-lg font-mono text-lg" /></div>
            <div><label class="block text-sm font-medium mb-1">State</label><input formControlName="state" [readOnly]="autoFilled" class="w-full px-4 py-3 border border-border rounded-lg bg-muted/50" /></div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div><label class="block text-sm font-medium mb-1">District</label><input formControlName="district" [readOnly]="autoFilled" class="w-full px-4 py-3 border border-border rounded-lg bg-muted/50" /></div>
            <div><label class="block text-sm font-medium mb-1">City</label><input formControlName="city" [readOnly]="autoFilled" class="w-full px-4 py-3 border border-border rounded-lg bg-muted/50" /></div>
          </div>
          <div><label class="block text-sm font-medium mb-1">Street / House No. *</label><input formControlName="street" class="w-full px-4 py-3 border border-border rounded-lg" /></div>
          <div><label class="block text-sm font-medium mb-1">Landmark</label><input formControlName="landmark" placeholder="Near..." class="w-full px-4 py-3 border border-border rounded-lg" /></div>
          <button type="submit" [disabled]="loading" class="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold disabled:opacity-60">{{ loading ? 'Saving...' : 'Save Address' }}</button>
        </form>
      </div>
    </div>
  \`
})
export class AddressLookupComponent {
  form = new FormGroup({
    pincode: new FormControl('', [Validators.required, Validators.pattern(/^\\d{6}$/)]),
    state: new FormControl(''), district: new FormControl(''), city: new FormControl(''),
    street: new FormControl('', Validators.required), landmark: new FormControl(''),
  });
  loading = false; error = ''; autoFilled = false;

  async onPincode() {
    const pin = this.form.value.pincode?.replace(/\\D/g, '') || '';
    if (pin.length !== 6) return;
    this.loading = true;
    try {
      const res = await fetch('/api/address/pincode/' + pin);
      if (!res.ok) { this.error = 'Invalid PIN'; return; }
      const d = await res.json();
      this.form.patchValue({ state: d.state, district: d.district, city: d.city });
      this.autoFilled = true;
    } catch { this.error = 'Lookup failed'; } finally { this.loading = false; }
  }

  async save() {
    if (this.form.invalid) { this.error = 'Fill required fields'; return; }
    this.loading = true; this.error = '';
    try {
      const res = await fetch('/api/address/save', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(this.form.value) });
      if (!res.ok) { this.error = 'Failed'; return; }
      alert('Saved');
    } catch { this.error = 'Network error'; } finally { this.loading = false; }
  }
}`;

const ADDR_HTML_CODE = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Address Lookup — UX4G</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: system-ui, sans-serif; min-height: 100vh; display: flex; align-items: center; justify-content: center; background: #f9fafb; padding: 1rem; }
    .card { width: 100%; max-width: 32rem; background: #fff; border: 1px solid #e5e7eb; border-radius: 1rem; padding: 2rem; }
    h1 { font-size: 1.5rem; font-weight: 700; margin-bottom: 1.5rem; }
    label { display: block; font-size: 0.875rem; font-weight: 500; margin-bottom: 0.25rem; }
    input { width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 0.5rem; font-size: 1rem; outline: none; }
    input:focus { border-color: #005196; }
    .field { margin-bottom: 1rem; }
    .row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
    .btn { width: 100%; padding: 0.75rem; background: #005196; color: #fff; border: none; border-radius: 0.5rem; font-size: 1rem; font-weight: 600; cursor: pointer; }
    .btn:disabled { opacity: 0.6; }
    .error { margin-bottom: 1rem; padding: 0.75rem; background: #fef2f2; border: 1px solid #fecaca; border-radius: 0.5rem; color: #b91c1c; font-size: 0.875rem; display: none; }
    .autofill { background: #f0fdf4; border-color: #86efac; }
    .hint { font-size: 0.75rem; color: #005196; margin-top: 0.25rem; }
  </style>
</head>
<body>
  <div class="card">
    <h1>Address</h1>
    <p style="font-size:0.875rem;color:#6b7280;margin-bottom:1.5rem">Enter PIN code for auto-fill</p>
    <div id="error" class="error" role="alert"></div>
    <form id="addrForm" novalidate>
      <div class="row">
        <div class="field"><label for="pincode">PIN Code *</label><input type="text" id="pincode" inputmode="numeric" maxlength="6" placeholder="110001" style="font-family:monospace;font-size:1.125rem" required /><div class="hint" id="pinHint"></div></div>
        <div class="field"><label for="state">State</label><input type="text" id="state" readonly /></div>
      </div>
      <div class="row">
        <div class="field"><label for="district">District</label><input type="text" id="district" readonly /></div>
        <div class="field"><label for="city">City</label><input type="text" id="city" readonly /></div>
      </div>
      <div class="field"><label for="street">Street / House No. *</label><input type="text" id="street" required /></div>
      <div class="field"><label for="landmark">Landmark</label><input type="text" id="landmark" placeholder="Near..." /></div>
      <button type="submit" class="btn">Save Address</button>
    </form>
  </div>
  <script>
    function showError(m){const e=document.getElementById('error');e.textContent=m;e.style.display='block';}
    function hideError(){document.getElementById('error').style.display='none';}
    document.getElementById('pincode').addEventListener('input', async function() {
      const pin = this.value.replace(/\\D/g,'').slice(0,6);
      this.value = pin;
      if (pin.length === 6) {
        document.getElementById('pinHint').textContent = 'Looking up...';
        try {
          const res = await fetch('/api/address/pincode/' + pin);
          if (!res.ok) { document.getElementById('pinHint').textContent = 'Invalid PIN'; return; }
          const d = await res.json();
          document.getElementById('state').value = d.state || '';
          document.getElementById('district').value = d.district || '';
          document.getElementById('city').value = d.city || '';
          ['state','district','city'].forEach(id => document.getElementById(id).classList.add('autofill'));
          document.getElementById('pinHint').textContent = 'Auto-filled ✓';
        } catch { document.getElementById('pinHint').textContent = 'Lookup failed'; }
      } else { document.getElementById('pinHint').textContent = ''; }
    });
    document.getElementById('addrForm').addEventListener('submit', async function(e) {
      e.preventDefault(); hideError();
      if (!document.getElementById('pincode').value || !document.getElementById('street').value) { showError('Fill required fields'); return; }
      try {
        const res = await fetch('/api/address/save', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ pincode: document.getElementById('pincode').value, state: document.getElementById('state').value, district: document.getElementById('district').value, city: document.getElementById('city').value, street: document.getElementById('street').value, landmark: document.getElementById('landmark').value }) });
        if (!res.ok) { showError('Failed'); return; }
        alert('Address saved');
      } catch { showError('Network error'); }
    });
  </script>
</body>
</html>`;

function AddressLookupCodeDownloads() {
  const [copiedId, setCopiedId] = React.useState<string | null>(null);
  const copyToClipboard = (code: string, id: string) => { navigator.clipboard.writeText(code); setCopiedId(id); setTimeout(() => setCopiedId(null), 2000); };
  const downloadCode = (code: string, filename: string) => { const blob = new Blob([code], { type: 'text/plain' }); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = filename; a.click(); URL.revokeObjectURL(url); };
  const lanes = [
    { key: 'react', title: 'React', desc: 'TypeScript + PIN auto-fill', code: ADDR_REACT_CODE, filename: 'AddressLookupPage.tsx' },
    { key: 'angular', title: 'Angular', desc: 'Standalone + Reactive Forms', code: ADDR_ANGULAR_CODE, filename: 'address-lookup.component.ts' },
    { key: 'html', title: 'HTML / CSS / JS', desc: 'No framework needed', code: ADDR_HTML_CODE, filename: 'address-lookup.html' },
  ];
  return (
    <section id="code-downloads" className="space-y-6 scroll-mt-24 mt-12">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Code Downloads</h2>
        <p className="text-muted-foreground mt-1">Production-ready Address Lookup implementations.</p>
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

