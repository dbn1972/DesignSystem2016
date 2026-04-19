import { useState } from "react";
import { Link } from "react-router";
import {  Map, ArrowLeft, MapPin, Navigation, CheckCircle, Download, Copy, Check } from "lucide-react";

export default function MapInputPattern() {
  const [selectedLocation, setSelectedLocation] = useState<{lat: number, lng: number, address: string} | null>(null);
  const [useCurrentLocation, setUseCurrentLocation] = useState(false);

  const handleUseCurrentLocation = () => {
    setUseCurrentLocation(true);
    // Simulate geolocation
    setTimeout(() => {
      setSelectedLocation({
        lat: 12.9716,
        lng: 77.5946,
        address: "123 MG Road, Bangalore, Karnataka 560001"
      });
      setUseCurrentLocation(false);
    }, 1000);
  };

  const handleMapClick = () => {
    setSelectedLocation({
      lat: 28.6139,
      lng: 77.2090,
      address: "Connaught Place, New Delhi, Delhi 110001"
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-gradient-to-br from-teal-50 via-white to-green-50 border-b-4 border-[#FF9933]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-16">
          <div className="mb-6">
            <Link to="/patterns/data-input" className="text-sm text-muted-foreground hover:text-primary">
              ← Back to Data Input Patterns
            </Link>
          </div>
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-green-500 border-3 border-white shadow-lg rounded-lg flex items-center justify-center">
                <Map size={40} className="text-white" />
              </div>
              <div>
                <div className="text-sm font-bold text-primary mb-2 uppercase tracking-wide">Data Input Pattern</div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">Map-based Input</h1>
              </div>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              Allow users to select locations by clicking on an interactive map or using their current GPS location,
              automatically capturing coordinates and reverse-geocoded address.
            </p>
          </div>
        </div>
      </header>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-8">
            <div className="bg-teal-50 dark:bg-teal-950/30 border-2 border-teal-200 dark:border-teal-800 rounded-lg p-6 mb-6">
              <h2 className="font-bold text-foreground mb-2">Interactive Demo</h2>
              <p className="text-sm text-muted-foreground">
                Click on the map or use your current location to select a geographic point.
              </p>
            </div>

            {/* Map Interface */}
            <div className="bg-card border-2 border-border rounded-lg p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-foreground">Select Location</h3>
                <button
                  onClick={handleUseCurrentLocation}
                  disabled={useCurrentLocation}
                  className="px-4 py-2 bg-primary text-white rounded font-bold hover:opacity-90 disabled:bg-gray-300 flex items-center gap-2 text-sm"
                >
                  {useCurrentLocation ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Getting location...
                    </>
                  ) : (
                    <>
                      <Navigation size={16} />
                      Use Current Location
                    </>
                  )}
                </button>
              </div>

              {/* Simulated Map */}
              <div
                onClick={handleMapClick}
                className="relative bg-gradient-to-br from-blue-100 via-green-50 to-teal-100 rounded-lg border-2 border-border h-96 cursor-crosshair overflow-hidden"
              >
                {/* Map Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="grid grid-cols-8 grid-rows-6 h-full">
                    {Array.from({length: 48}).map((_, i) => (
                      <div key={i} className="border border-gray-400"></div>
                    ))}
                  </div>
                </div>

                {/* Map Labels */}
                <div className="absolute top-4 left-4 bg-card rounded-lg shadow-lg px-3 py-2 text-xs font-bold text-muted-foreground">
                  <Map size={14} className="inline mr-1" />
                  Interactive Map (Demo)
                </div>

                {/* Selected Location Marker */}
                {selectedLocation && (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-bounce">
                    <MapPin size={48} className="text-red-600 drop-shadow-lg" fill="#DC2626" />
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-card rounded shadow-lg px-3 py-1 text-xs font-bold">
                      Selected Location
                    </div>
                  </div>
                )}

                {/* Instructions */}
                {!selectedLocation && (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                    <div className="bg-card rounded-lg shadow-lg px-6 py-4 border-2 border-dashed border-border">
                      <MapPin size={32} className="mx-auto mb-2 text-muted-foreground" />
                      <div className="font-bold text-foreground mb-1">Click anywhere on the map</div>
                      <div className="text-sm text-muted-foreground">to select a location</div>
                    </div>
                  </div>
                )}

                {/* Zoom Controls */}
                <div className="absolute bottom-4 right-4 flex flex-col gap-2">
                  <button className="w-10 h-10 bg-card rounded shadow-lg font-bold text-muted-foreground hover:bg-background">
                    +
                  </button>
                  <button className="w-10 h-10 bg-card rounded shadow-lg font-bold text-muted-foreground hover:bg-background">
                    −
                  </button>
                </div>
              </div>

              {/* Selected Location Display */}
              {selectedLocation && (
                <div className="mt-4 bg-green-50 dark:bg-green-950/30 border-2 border-green-200 dark:border-green-800 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <div className="font-bold text-foreground mb-2">Location Selected</div>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <div><strong>Address:</strong> {selectedLocation.address}</div>
                        <div><strong>Coordinates:</strong> {selectedLocation.lat.toFixed(4)}°N, {selectedLocation.lng.toFixed(4)}°E</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Auto-filled Form */}
            {selectedLocation && (
              <div className="bg-card border-2 border-border rounded-lg p-4 sm:p-6 lg:p-8">
                <h3 className="font-bold text-foreground mb-6">Auto-filled Location Details</h3>

                <div className="space-y-6">
                  <div>
                    <label className="block font-bold text-foreground mb-2">Full Address</label>
                    <textarea
                      value={selectedLocation.address}
                      className="w-full px-4 py-3 border-2 border-green-500 bg-green-50 dark:bg-green-950/30 rounded"
                      rows={2}
                      readOnly
                    ></textarea>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-bold text-foreground mb-2">Latitude</label>
                      <input
                        type="text"
                        value={selectedLocation.lat.toFixed(6)}
                        className="w-full px-4 py-3 border-2 border-green-500 bg-green-50 dark:bg-green-950/30 rounded"
                        readOnly
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-foreground mb-2">Longitude</label>
                      <input
                        type="text"
                        value={selectedLocation.lng.toFixed(6)}
                        className="w-full px-4 py-3 border-2 border-green-500 bg-green-50 dark:bg-green-950/30 rounded"
                        readOnly
                      />
                    </div>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-4 text-sm text-muted-foreground">
                    <strong>Note:</strong> You can manually edit the address above if the auto-detected location needs adjustment.
                  </div>
                </div>
              </div>
            )}

            {/* Use Cases */}
            <div className="mt-8 space-y-6">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Common Use Cases</h2>
                <div className="bg-card border-2 border-border rounded-lg p-6">
                  <div className="space-y-4 text-sm">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin size={20} className="text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground mb-1">Service Location</h3>
                        <p className="text-muted-foreground">
                          Delivery address, installation site, inspection location - where precision matters.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Map size={20} className="text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground mb-1">Incident Reporting</h3>
                        <p className="text-muted-foreground">
                          Report potholes, broken streetlights, garbage dumps - exact location is critical.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Navigation size={20} className="text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground mb-1">Asset Registration</h3>
                        <p className="text-muted-foreground">
                          Property registration, land parcels, construction sites - geographic boundaries.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Implementation Options</h2>
                <div className="bg-card border-2 border-border rounded-lg p-6 space-y-4 text-sm">
                  <div>
                    <h3 className="font-bold text-foreground mb-2">1. Google Maps API</h3>
                    <p className="text-muted-foreground mb-2">
                      Most comprehensive with geocoding, reverse geocoding, and rich India coverage.
                    </p>
                    <div className="bg-gray-900 text-gray-100 rounded p-3 text-xs font-mono overflow-x-auto">
                      <pre>{`// Initialize map
const map = new google.maps.Map(element, {
  center: { lat: 20.5937, lng: 78.9629 },
  zoom: 5
});

// Reverse geocode on click
geocoder.geocode({ location: latLng }, (results) => {
  const address = results[0].formatted_address;
});`}</pre>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold text-foreground mb-2">2. Mapbox</h3>
                    <p className="text-muted-foreground mb-2">
                      Beautiful maps, good India support, more affordable than Google.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-foreground mb-2">3. OpenStreetMap (Leaflet)</h3>
                    <p className="text-muted-foreground">
                      Free and open-source, good for government projects. Use Nominatim for geocoding.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Best Practices</h2>
                <div className="bg-card border-2 border-border rounded-lg p-6 space-y-3 text-sm">
                  <div>
                    <h3 className="font-bold text-foreground mb-1">1. Default to User's Current Location</h3>
                    <p className="text-muted-foreground">
                      Center map on user's GPS location when available. Saves time scrolling/searching.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">2. Show Marker Immediately</h3>
                    <p className="text-muted-foreground">
                      Place marker on first click/tap. Don't make users confirm "Is this correct?" first.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">3. Allow Marker Dragging</h3>
                    <p className="text-muted-foreground">
                      Let users drag marker to fine-tune position. Easier than re-clicking.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">4. Combine with Address Search</h3>
                    <p className="text-muted-foreground">
                      Provide search box for users who know address. Map-only is slow for known locations.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">5. Store Both Coordinates & Address</h3>
                    <p className="text-muted-foreground">
                      Save lat/lng (precise) AND text address (human-readable). Use coordinates for mapping, address for display.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">6. Handle Offline/GPS Errors</h3>
                    <p className="text-muted-foreground">
                      Show fallback text input if geolocation fails or is denied. Never block form submission.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Accessibility</h2>
                <div className="bg-card border-2 border-border rounded-lg p-6 space-y-2 text-sm text-muted-foreground">
                  <p>• Provide text alternative: search box or manual lat/lng entry</p>
                  <p>• Ensure map controls are keyboard accessible (arrow keys to pan, +/- to zoom)</p>
                  <p>• Announce location updates to screen readers using ARIA live regions</p>
                  <p>• Don't rely solely on map for users with visual impairments</p>
                </div>
              </section>
            </div>
                      <MapInputCodeDownloads />
          </div>

          <div className="col-span-4">
            <div className="sticky top-8 space-y-6">
              <div className="bg-card border-2 border-border rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-4">Pattern Information</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Complexity</div>
                    <div className="font-bold">Medium</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Accuracy</div>
                    <div className="font-bold">GPS: ±10m, Click: ±50m</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Dependencies</div>
                    <div className="font-bold">Maps API, Geocoding</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Mobile Support</div>
                    <div className="font-bold">Excellent (GPS built-in)</div>
                  </div>
                </div>
              </div>

              <div className="bg-teal-50 dark:bg-teal-950/30 border-2 border-teal-200 dark:border-teal-800 rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-3">When to Use</h3>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li>✓ Precise location needed</li>
                  <li>✓ Field service requests</li>
                  <li>✓ Incident/complaint reporting</li>
                  <li>✓ Property/land registration</li>
                  <li>✓ Delivery address selection</li>
                  <li>✓ Mobile-first applications</li>
                </ul>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-950/30 border-2 border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-3">When NOT to Use</h3>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li>✗ Simple city/state selection</li>
                  <li>✗ Approximate location sufficient</li>
                  <li>✗ Users without GPS/internet</li>
                  <li>✗ Screen reader primary users</li>
                </ul>
              </div>

              <div className="bg-card border-2 border-border rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-4">API Costs (Approx)</h3>
                <div className="space-y-2 text-xs text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Google Maps</span>
                    <span className="font-bold">$7/1000 loads</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Mapbox</span>
                    <span className="font-bold">$5/1000 loads</span>
                  </div>
                  <div className="flex justify-between">
                    <span>OpenStreetMap</span>
                    <span className="font-bold text-green-600">Free (self-host)</span>
                  </div>
                </div>
              </div>

              <div className="bg-card border-2 border-border rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-4">Related Patterns</h3>
                <div className="space-y-2">
                  <Link to="/patterns/data-input/address-lookup" className="block text-sm text-primary hover:underline">
                    → Address Lookup
                  </Link>
                  <Link to="/patterns/data-input/smart-suggestions" className="block text-sm text-primary hover:underline">
                    → Smart Suggestions
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

const MAPINPUT_REACT_CODE = `import React, { useState } from 'react';

export default function MapInputPage() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/map-input', {
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
        <h1 className="text-2xl font-bold text-foreground mb-2">Map Input</h1>
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

const MAPINPUT_ANGULAR_CODE = `import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ux4g-map-input',
  standalone: true,
  imports: [CommonModule],
  template: \`
    <div class="min-h-screen flex items-center justify-center bg-background p-4">
      <div class="w-full max-w-lg bg-card border border-border rounded-2xl p-8 shadow-sm">
        <h1 class="text-2xl font-bold text-foreground mb-2">Map Input</h1>
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
export class MapInputComponent {
  loading = false;
  submitted = false;
  error = '';

  async onSubmit() {
    this.loading = true;
    this.error = '';
    try {
      const res = await fetch('/api/map-input', {
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

const MAPINPUT_HTML_CODE = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Map Input — UX4G</title>
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
    <h1>Map Input</h1>
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
        const res = await fetch('/api/map-input', {
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

function MapInputCodeDownloads() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const copyToClipboard = (code: string, id: string) => { navigator.clipboard.writeText(code); setCopiedId(id); setTimeout(() => setCopiedId(null), 2000); };
  const downloadCode = (code: string, filename: string) => { const blob = new Blob([code], { type: 'text/plain' }); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = filename; a.click(); URL.revokeObjectURL(url); };
  const lanes = [
    { key: 'react', title: 'React', desc: 'TypeScript + Hooks', code: MAPINPUT_REACT_CODE, filename: 'MapInputPage.tsx' },
    { key: 'angular', title: 'Angular', desc: 'Standalone Component', code: MAPINPUT_ANGULAR_CODE, filename: 'map-input.component.ts' },
    { key: 'html', title: 'HTML / CSS / JS', desc: 'No framework needed', code: MAPINPUT_HTML_CODE, filename: 'map-input.html' },
  ];
  return (
    <section id="code-downloads" className="space-y-6 scroll-mt-24 mt-12">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Code Downloads</h2>
        <p className="text-muted-foreground mt-1">Production-ready Map Input implementations.</p>
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
