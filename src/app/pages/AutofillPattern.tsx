import React, { useState } from "react";
import { Link } from "react-router";
import { Shield, ArrowLeft, CheckCircle, Lock, AlertTriangle, Download, Copy, Check } from "lucide-react";

export default function AutofillPattern() {
  const [method, setMethod] = useState<"aadhaar" | "digilocker" | null>(null);
  const [aadhaarNumber, setAadhaarNumber] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [verified, setVerified] = useState(false);
  const [formData, setFormData] = useState<any>(null);

  const handleAadhaarVerify = () => {
    if (aadhaarNumber.length === 12 && otp.length === 6) {
      setVerified(true);
      setFormData({
        name: "Rajesh Kumar",
        dob: "15-08-1990",
        gender: "Male",
        address: "123 MG Road, Bangalore, Karnataka - 560001",
        phone: "+91 98765 43210"
      });
    }
  };

  const handleDigiLockerAuth = () => {
    // Simulate DigiLocker OAuth flow
    setTimeout(() => {
      setVerified(true);
      setFormData({
        name: "Priya Sharma",
        dob: "22-03-1992",
        education: "B.Tech Computer Science",
        documents: ["10th Marksheet", "12th Marksheet", "Degree Certificate"],
        pan: "ABCDE1234F"
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-gradient-to-br from-green-50 via-white to-emerald-50 border-b-4 border-[#FF9933]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-16">
          <div className="mb-6">
            <Link to="/patterns/data-input" className="text-sm text-muted-foreground hover:text-primary">
              ← Back to Data Input Patterns
            </Link>
          </div>
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 border-3 border-white shadow-lg rounded-lg flex items-center justify-center">
                <Shield size={40} className="text-white" />
              </div>
              <div>
                <div className="text-sm font-bold text-primary mb-2 uppercase tracking-wide">Data Input Pattern</div>
                <h1 className="text-5xl font-bold text-foreground">Auto-fill from Aadhaar / DigiLocker</h1>
              </div>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              Securely pre-fill form data using Aadhaar eKYC or DigiLocker integration, reducing data entry
              while maintaining user privacy and government-verified accuracy.
            </p>
          </div>
        </div>
      </header>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-8">
            <div className="bg-green-50 dark:bg-green-950/30 border-2 border-green-200 dark:border-green-800 rounded-lg p-6 mb-6">
              <h2 className="font-bold text-foreground mb-2">Interactive Demo</h2>
              <p className="text-sm text-muted-foreground">
                Choose an authentication method to auto-fill your personal details securely.
              </p>
            </div>

            {/* Method Selection */}
            {!method && (
              <div className="space-y-4">
                <h3 className="font-bold text-foreground mb-4">Choose Auto-fill Method</h3>

                <button
                  onClick={() => setMethod("aadhaar")}
                  className="w-full bg-card border-2 border-border rounded-lg p-6 hover:border-primary hover:bg-blue-50 transition-all text-left"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Shield size={24} className="text-red-600" />
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-foreground mb-2">Aadhaar eKYC</div>
                      <div className="text-sm text-muted-foreground mb-3">
                        Verify your identity using Aadhaar and auto-fill name, DOB, address, and gender.
                      </div>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <CheckCircle size={14} className="text-green-600" />
                          Government verified
                        </span>
                        <span className="flex items-center gap-1">
                          <Lock size={14} className="text-blue-600" />
                          OTP secured
                        </span>
                      </div>
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => setMethod("digilocker")}
                  className="w-full bg-card border-2 border-border rounded-lg p-6 hover:border-primary hover:bg-blue-50 transition-all text-left"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Lock size={24} className="text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-foreground mb-2">DigiLocker</div>
                      <div className="text-sm text-muted-foreground mb-3">
                        Access your digital documents and certificates stored in DigiLocker to auto-fill education, identity, and address details.
                      </div>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <CheckCircle size={14} className="text-green-600" />
                          Official documents
                        </span>
                        <span className="flex items-center gap-1">
                          <Lock size={14} className="text-blue-600" />
                          OAuth 2.0 secure
                        </span>
                      </div>
                    </div>
                  </div>
                </button>

                <div className="bg-yellow-50 dark:bg-yellow-950/30 border-2 border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mt-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle size={18} className="text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-muted-foreground">
                      <strong>Privacy Notice:</strong> Your Aadhaar/DigiLocker data is used only for verification
                      and form filling. We do not store your Aadhaar number or authentication details.
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Aadhaar Flow */}
            {method === "aadhaar" && !verified && (
              <div className="bg-card border-2 border-border rounded-lg p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-foreground">Aadhaar eKYC Verification</h3>
                  <button
                    onClick={() => {
                      setMethod(null);
                      setOtpSent(false);
                      setAadhaarNumber("");
                      setOtp("");
                    }}
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Change Method
                  </button>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block font-bold text-foreground mb-2">Aadhaar Number</label>
                    <input
                      type="text"
                      value={aadhaarNumber}
                      onChange={(e) => setAadhaarNumber(e.target.value.replace(/\D/g, "").slice(0, 12))}
                      placeholder="Enter 12-digit Aadhaar number"
                      className="w-full px-4 py-3 border-2 border-border rounded focus:border-primary focus:outline-none"
                      maxLength={12}
                    />
                    <div className="text-xs text-muted-foreground mt-1">
                      Demo: Use any 12-digit number (e.g., 123456789012)
                    </div>
                  </div>

                  {!otpSent ? (
                    <button
                      onClick={() => setOtpSent(true)}
                      disabled={aadhaarNumber.length !== 12}
                      className="w-full px-6 py-3 bg-primary text-white rounded font-bold hover:opacity-90 disabled:bg-gray-300 disabled:cursor-not-allowed"
                    >
                      Send OTP
                    </button>
                  ) : (
                    <>
                      <div className="bg-green-50 dark:bg-green-950/30 border-2 border-green-200 dark:border-green-800 rounded-lg p-4">
                        <div className="flex items-center gap-2 text-sm text-green-700">
                          <CheckCircle size={16} />
                          OTP sent to mobile number ending in ****7890
                        </div>
                      </div>

                      <div>
                        <label className="block font-bold text-foreground mb-2">Enter OTP</label>
                        <input
                          type="text"
                          value={otp}
                          onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
                          placeholder="Enter 6-digit OTP"
                          className="w-full px-4 py-3 border-2 border-border rounded focus:border-primary focus:outline-none"
                          maxLength={6}
                        />
                        <div className="text-xs text-muted-foreground mt-1">Demo: Use any 6-digit number</div>
                      </div>

                      <button
                        onClick={handleAadhaarVerify}
                        disabled={otp.length !== 6}
                        className="w-full px-6 py-3 bg-primary text-white rounded font-bold hover:opacity-90 disabled:bg-gray-300 disabled:cursor-not-allowed"
                      >
                        Verify & Auto-fill
                      </button>
                    </>
                  )}
                </div>
              </div>
            )}

            {/* DigiLocker Flow */}
            {method === "digilocker" && !verified && (
              <div className="bg-card border-2 border-border rounded-lg p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-foreground">DigiLocker Authorization</h3>
                  <button
                    onClick={() => setMethod(null)}
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Change Method
                  </button>
                </div>

                <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-6">
                  <div className="font-bold text-foreground mb-3">DigiLocker will provide:</div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Personal details (Name, DOB, Address)</li>
                    <li>• Education certificates</li>
                    <li>• Identity documents (PAN, Driving License)</li>
                    <li>• Government issued certificates</li>
                  </ul>
                </div>

                <button
                  onClick={handleDigiLockerAuth}
                  className="w-full px-6 py-3 bg-primary text-white rounded font-bold hover:opacity-90 flex items-center justify-center gap-2"
                >
                  <Lock size={18} />
                  Authorize with DigiLocker
                </button>

                <div className="text-xs text-muted-foreground text-center mt-4">
                  You will be redirected to DigiLocker for secure authentication
                </div>
              </div>
            )}

            {/* Auto-filled Form */}
            {verified && formData && (
              <div className="space-y-6">
                <div className="bg-green-50 dark:bg-green-950/30 border-2 border-green-200 dark:border-green-800 rounded-lg p-4 flex items-center gap-3">
                  <CheckCircle size={20} className="text-green-600 flex-shrink-0" />
                  <div>
                    <div className="font-bold text-foreground">Verification Successful</div>
                    <div className="text-sm text-muted-foreground">
                      Your details have been auto-filled from {method === "aadhaar" ? "Aadhaar" : "DigiLocker"}.
                      Please review and edit if needed.
                    </div>
                  </div>
                </div>

                <div className="bg-card border-2 border-border rounded-lg p-8">
                  <h3 className="font-bold text-foreground mb-6">Auto-filled Personal Details</h3>

                  <div className="space-y-6">
                    <div>
                      <label className="block font-bold text-foreground mb-2">Full Name</label>
                      <input
                        type="text"
                        value={formData.name}
                        className="w-full px-4 py-3 border-2 border-green-500 bg-green-50 dark:bg-green-950/30 rounded"
                        readOnly
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="block font-bold text-foreground mb-2">Date of Birth</label>
                        <input
                          type="text"
                          value={formData.dob}
                          className="w-full px-4 py-3 border-2 border-green-500 bg-green-50 dark:bg-green-950/30 rounded"
                          readOnly
                        />
                      </div>
                      {formData.gender && (
                        <div>
                          <label className="block font-bold text-foreground mb-2">Gender</label>
                          <input
                            type="text"
                            value={formData.gender}
                            className="w-full px-4 py-3 border-2 border-green-500 bg-green-50 dark:bg-green-950/30 rounded"
                            readOnly
                          />
                        </div>
                      )}
                      {formData.pan && (
                        <div>
                          <label className="block font-bold text-foreground mb-2">PAN Number</label>
                          <input
                            type="text"
                            value={formData.pan}
                            className="w-full px-4 py-3 border-2 border-green-500 bg-green-50 dark:bg-green-950/30 rounded"
                            readOnly
                          />
                        </div>
                      )}
                    </div>

                    {formData.address && (
                      <div>
                        <label className="block font-bold text-foreground mb-2">Address</label>
                        <textarea
                          value={formData.address}
                          className="w-full px-4 py-3 border-2 border-green-500 bg-green-50 dark:bg-green-950/30 rounded"
                          rows={2}
                          readOnly
                        ></textarea>
                      </div>
                    )}

                    {formData.education && (
                      <div>
                        <label className="block font-bold text-foreground mb-2">Education</label>
                        <input
                          type="text"
                          value={formData.education}
                          className="w-full px-4 py-3 border-2 border-green-500 bg-green-50 dark:bg-green-950/30 rounded"
                          readOnly
                        />
                      </div>
                    )}

                    {formData.documents && (
                      <div>
                        <label className="block font-bold text-foreground mb-2">Documents from DigiLocker</label>
                        <div className="space-y-2">
                          {formData.documents.map((doc: string, idx: number) => (
                            <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded px-3 py-2">
                              <CheckCircle size={14} className="text-blue-600" />
                              {doc}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="mt-6 pt-6 border-t-2 border-border">
                    <button className="px-6 py-3 bg-primary text-white rounded font-bold hover:opacity-90">
                      Continue with These Details
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Implementation Guide */}
            <div className="mt-8 space-y-6">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Integration Requirements</h2>
                <div className="bg-card border-2 border-border rounded-lg p-6">
                  <div className="space-y-4 text-sm">
                    <div>
                      <h3 className="font-bold text-foreground mb-2">Aadhaar eKYC</h3>
                      <p className="text-muted-foreground mb-2">
                        Requires UIDAI KUA/KSA license and integration with Aadhaar Authentication APIs.
                      </p>
                      <ul className="space-y-1 text-muted-foreground ml-4">
                        <li>• Register as Authentication User Agency (AUA)</li>
                        <li>• Obtain KUA/KSA license from UIDAI</li>
                        <li>• Implement 2048-bit encryption for data transmission</li>
                        <li>• Store only eKYC transaction ID, not Aadhaar number</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-bold text-foreground mb-2">DigiLocker</h3>
                      <p className="text-muted-foreground mb-2">
                        OAuth 2.0 based integration for accessing user's digital documents.
                      </p>
                      <ul className="space-y-1 text-muted-foreground ml-4">
                        <li>• Register as DigiLocker requester organization</li>
                        <li>• Implement OAuth 2.0 authorization flow</li>
                        <li>• Request specific document types in scope</li>
                        <li>• Handle user consent and document permissions</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Security & Privacy</h2>
                <div className="bg-card border-2 border-border rounded-lg p-6 space-y-3 text-sm">
                  <div>
                    <h3 className="font-bold text-foreground mb-1">1. No Storage of Aadhaar Number</h3>
                    <p className="text-muted-foreground">
                      Never store Aadhaar numbers. Store only masked number and transaction ID for audit trail.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">2. Encrypted Data Transmission</h3>
                    <p className="text-muted-foreground">
                      Use 2048-bit RSA encryption for all Aadhaar API calls. DigiLocker uses OAuth 2.0 over HTTPS.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">3. Clear Consent Flow</h3>
                    <p className="text-muted-foreground">
                      Explicitly show what data will be accessed and require user consent before authentication.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">4. Allow Manual Override</h3>
                    <p className="text-muted-foreground">
                      Always provide option to skip auto-fill and enter details manually for users without Aadhaar/DigiLocker.
                    </p>
                  </div>
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
                    <div className="font-bold">High</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Time Saved</div>
                    <div className="font-bold">~2 minutes per form</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Accuracy</div>
                    <div className="font-bold">99%+ (govt verified)</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Dependencies</div>
                    <div className="font-bold">UIDAI/DigiLocker APIs</div>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-950/30 border-2 border-green-200 dark:border-green-800 rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-3">When to Use</h3>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li>✓ Government service applications</li>
                  <li>✓ Financial account opening</li>
                  <li>✓ Educational admissions</li>
                  <li>✓ Employment verification</li>
                  <li>✓ Subsidy/benefit registration</li>
                </ul>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-950/30 border-2 border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-3">Compliance Required</h3>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li>⚠ UIDAI KUA/KSA license</li>
                  <li>⚠ DigiLocker registration</li>
                  <li>⚠ Data encryption (2048-bit)</li>
                  <li>⚠ Aadhaar Act compliance</li>
                  <li>⚠ Privacy policy disclosure</li>
                </ul>
              </div>

              <div className="bg-card border-2 border-border rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-4">Related Patterns</h3>
                <div className="space-y-2">
                  <Link to="/patterns/data-input/address-lookup" className="block text-sm text-primary hover:underline">
                    → Address Lookup
                  </Link>
                  <Link to="/patterns/identity" className="block text-sm text-primary hover:underline">
                    → Identity Patterns
                  </Link>
                  <Link to="/patterns/consent" className="block text-sm text-primary hover:underline">
                    → Consent Patterns
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <AutofillCodeDownloads />

      </div>
    </div>
  );
}

// ==================== CODE DOWNLOADS ====================

const AUTOFILL_REACT_CODE = `import React, { useState, useCallback } from 'react';

interface AutofillData {
  fullName: string; dob: string; gender: string; address: string;
  pincode: string; state: string; district: string; mobile: string; email: string;
}

const EMPTY: AutofillData = { fullName:'', dob:'', gender:'', address:'', pincode:'', state:'', district:'', mobile:'', email:'' };

export function AutofillPage() {
  const [form, setForm] = useState<AutofillData>(EMPTY);
  const [source, setSource] = useState<'aadhaar' | 'digilocker' | 'manual'>('manual');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [autoFilled, setAutoFilled] = useState(false);

  const handleAadhaarFetch = useCallback(async () => {
    setLoading(true); setError('');
    try {
      const res = await fetch('/api/autofill/aadhaar', { method: 'POST', headers: { 'Content-Type': 'application/json' } });
      if (!res.ok) { setError('Aadhaar fetch failed'); return; }
      const data = await res.json();
      setForm({ fullName: data.name || '', dob: data.dob || '', gender: data.gender || '', address: data.address || '', pincode: data.pincode || '', state: data.state || '', district: data.district || '', mobile: data.mobile || '', email: '' });
      setAutoFilled(true); setSource('aadhaar');
    } catch { setError('Network error'); }
    finally { setLoading(false); }
  }, []);

  const handleDigiLockerFetch = useCallback(async () => {
    setLoading(true); setError('');
    try {
      const res = await fetch('/api/autofill/digilocker', { method: 'POST' });
      if (!res.ok) { setError('DigiLocker fetch failed'); return; }
      const data = await res.json();
      setForm(prev => ({ ...prev, ...data }));
      setAutoFilled(true); setSource('digilocker');
    } catch { setError('Network error'); }
    finally { setLoading(false); }
  }, []);

  const update = (field: keyof AutofillData, value: string) => setForm(prev => ({...prev, [field]: value}));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.fullName || !form.mobile) { setError('Name and mobile required'); return; }
    setLoading(true); setError('');
    try {
      await fetch('/api/form/submit', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...form, source }) });
      alert('Form submitted successfully');
    } catch { setError('Network error'); }
    finally { setLoading(false); }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-lg bg-card border border-border rounded-2xl p-8 shadow-sm">
        <h1 className="text-2xl font-bold text-foreground mb-2">Auto-fill Form</h1>
        <p className="text-sm text-muted-foreground mb-6">Pre-fill from Aadhaar or DigiLocker to save time</p>
        {error && <div role="alert" className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">{error}</div>}
        <div className="flex gap-3 mb-6">
          <button onClick={handleAadhaarFetch} disabled={loading} className="flex-1 py-3 border-2 border-orange-300 bg-orange-50 rounded-xl font-semibold text-sm text-orange-800 hover:bg-orange-100 disabled:opacity-60">🔐 Aadhaar eKYC</button>
          <button onClick={handleDigiLockerFetch} disabled={loading} className="flex-1 py-3 border-2 border-blue-300 bg-blue-50 rounded-xl font-semibold text-sm text-blue-800 hover:bg-blue-100 disabled:opacity-60">📁 DigiLocker</button>
        </div>
        {autoFilled && <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg text-sm text-green-700">✓ Auto-filled from {source === 'aadhaar' ? 'Aadhaar eKYC' : 'DigiLocker'}. Review and edit if needed.</div>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div><label className="block text-sm font-medium mb-1">Full Name *</label><input value={form.fullName} onChange={e => update('fullName', e.target.value)} className={\`w-full px-4 py-3 border border-border rounded-lg \${autoFilled ? 'bg-green-50/50' : ''}\`} /></div>
            <div><label className="block text-sm font-medium mb-1">Date of Birth</label><input type="date" value={form.dob} onChange={e => update('dob', e.target.value)} className="w-full px-4 py-3 border border-border rounded-lg" /></div>
          </div>
          <div><label className="block text-sm font-medium mb-1">Address</label><textarea value={form.address} onChange={e => update('address', e.target.value)} rows={2} className="w-full px-4 py-3 border border-border rounded-lg" /></div>
          <div className="grid grid-cols-3 gap-4">
            <div><label className="block text-sm font-medium mb-1">PIN Code</label><input value={form.pincode} onChange={e => update('pincode', e.target.value)} maxLength={6} className="w-full px-4 py-3 border border-border rounded-lg" /></div>
            <div><label className="block text-sm font-medium mb-1">State</label><input value={form.state} onChange={e => update('state', e.target.value)} className="w-full px-4 py-3 border border-border rounded-lg" /></div>
            <div><label className="block text-sm font-medium mb-1">District</label><input value={form.district} onChange={e => update('district', e.target.value)} className="w-full px-4 py-3 border border-border rounded-lg" /></div>
          </div>
          <div><label className="block text-sm font-medium mb-1">Mobile *</label><input type="tel" value={form.mobile} onChange={e => update('mobile', e.target.value)} maxLength={10} className="w-full px-4 py-3 border border-border rounded-lg" /></div>
          <button type="submit" disabled={loading} className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold disabled:opacity-60">{loading ? 'Submitting...' : 'Submit Form'}</button>
        </form>
      </div>
    </div>
  );
}`;

const AUTOFILL_ANGULAR_CODE = `import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'ux4g-autofill',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: \`
    <div class="min-h-screen flex items-center justify-center bg-background p-4">
      <div class="w-full max-w-lg bg-card border border-border rounded-2xl p-8 shadow-sm">
        <h1 class="text-2xl font-bold mb-6">Auto-fill Form</h1>
        <div *ngIf="error" role="alert" class="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">{{ error }}</div>
        <div class="flex gap-3 mb-6">
          <button (click)="fetchAadhaar()" [disabled]="loading" class="flex-1 py-3 border-2 border-orange-300 bg-orange-50 rounded-xl font-semibold text-sm">🔐 Aadhaar</button>
          <button (click)="fetchDigiLocker()" [disabled]="loading" class="flex-1 py-3 border-2 border-blue-300 bg-blue-50 rounded-xl font-semibold text-sm">📁 DigiLocker</button>
        </div>
        <div *ngIf="autoFilled" class="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg text-sm text-green-700">✓ Auto-filled. Review and edit.</div>
        <form [formGroup]="form" (ngSubmit)="submit()" class="space-y-4">
          <div class="grid grid-cols-2 gap-4">
            <div><label class="block text-sm font-medium mb-1">Name *</label><input formControlName="fullName" class="w-full px-4 py-3 border border-border rounded-lg" /></div>
            <div><label class="block text-sm font-medium mb-1">DOB</label><input type="date" formControlName="dob" class="w-full px-4 py-3 border border-border rounded-lg" /></div>
          </div>
          <div><label class="block text-sm font-medium mb-1">Address</label><textarea formControlName="address" rows="2" class="w-full px-4 py-3 border border-border rounded-lg"></textarea></div>
          <div><label class="block text-sm font-medium mb-1">Mobile *</label><input formControlName="mobile" maxlength="10" class="w-full px-4 py-3 border border-border rounded-lg" /></div>
          <button type="submit" [disabled]="loading" class="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold disabled:opacity-60">Submit</button>
        </form>
      </div>
    </div>
  \`
})
export class AutofillComponent {
  form = new FormGroup({ fullName: new FormControl('', Validators.required), dob: new FormControl(''), address: new FormControl(''), pincode: new FormControl(''), state: new FormControl(''), district: new FormControl(''), mobile: new FormControl('', Validators.required) });
  loading = false; error = ''; autoFilled = false;
  async fetchAadhaar() { this.loading = true; try { const r = await fetch('/api/autofill/aadhaar', { method: 'POST' }); const d = await r.json(); this.form.patchValue(d); this.autoFilled = true; } catch { this.error = 'Failed'; } finally { this.loading = false; } }
  async fetchDigiLocker() { this.loading = true; try { const r = await fetch('/api/autofill/digilocker', { method: 'POST' }); const d = await r.json(); this.form.patchValue(d); this.autoFilled = true; } catch { this.error = 'Failed'; } finally { this.loading = false; } }
  async submit() { if (this.form.invalid) { this.error = 'Fill required'; return; } alert('Submitted'); }
}`;

const AUTOFILL_HTML_CODE = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Auto-fill — UX4G</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: system-ui, sans-serif; min-height: 100vh; display: flex; align-items: center; justify-content: center; background: #f9fafb; padding: 1rem; }
    .card { width: 100%; max-width: 32rem; background: #fff; border: 1px solid #e5e7eb; border-radius: 1rem; padding: 2rem; }
    h1 { font-size: 1.5rem; font-weight: 700; margin-bottom: 1.5rem; }
    label { display: block; font-size: 0.875rem; font-weight: 500; margin-bottom: 0.25rem; }
    input, textarea { width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 0.5rem; font-size: 1rem; outline: none; margin-bottom: 1rem; }
    .sources { display: flex; gap: 0.75rem; margin-bottom: 1.5rem; }
    .source-btn { flex: 1; padding: 0.75rem; border: 2px solid #e5e7eb; border-radius: 0.75rem; background: #fff; cursor: pointer; font-weight: 600; font-size: 0.875rem; text-align: center; }
    .source-btn:hover { border-color: #005196; }
    .btn { width: 100%; padding: 0.75rem; background: #005196; color: #fff; border: none; border-radius: 0.5rem; font-size: 1rem; font-weight: 600; cursor: pointer; }
    .row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
    .row3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem; }
    .autofill-notice { padding: 0.75rem; background: #f0fdf4; border: 1px solid #86efac; border-radius: 0.5rem; font-size: 0.875rem; color: #166534; margin-bottom: 1rem; display: none; }
  </style>
</head>
<body>
  <div class="card">
    <h1>Auto-fill Form</h1>
    <div class="sources">
      <button class="source-btn" onclick="fetchAadhaar()" style="border-color:#fb923c;background:#fff7ed">🔐 Aadhaar eKYC</button>
      <button class="source-btn" onclick="fetchDigiLocker()" style="border-color:#60a5fa;background:#eff6ff">�� DigiLocker</button>
    </div>
    <div id="notice" class="autofill-notice">✓ Auto-filled. Review and edit if needed.</div>
    <form id="form" novalidate>
      <div class="row"><div><label>Full Name *</label><input id="fullName" required /></div><div><label>Date of Birth</label><input type="date" id="dob" /></div></div>
      <label>Address</label><textarea id="address" rows="2"></textarea>
      <div class="row3"><div><label>PIN Code</label><input id="pincode" maxlength="6" /></div><div><label>State</label><input id="state" /></div><div><label>District</label><input id="district" /></div></div>
      <label>Mobile *</label><input id="mobile" maxlength="10" required />
      <button type="submit" class="btn">Submit Form</button>
    </form>
  </div>
  <script>
    function fill(data) { Object.keys(data).forEach(k => { const el = document.getElementById(k); if (el) el.value = data[k] || ''; }); document.getElementById('notice').style.display = 'block'; }
    async function fetchAadhaar() { try { const r = await fetch('/api/autofill/aadhaar', { method: 'POST' }); fill(await r.json()); } catch { alert('Aadhaar fetch failed'); } }
    async function fetchDigiLocker() { try { const r = await fetch('/api/autofill/digilocker', { method: 'POST' }); fill(await r.json()); } catch { alert('DigiLocker fetch failed'); } }
    document.getElementById('form').addEventListener('submit', function(e) { e.preventDefault(); if (!document.getElementById('fullName').value || !document.getElementById('mobile').value) { alert('Fill required fields'); return; } alert('Form submitted'); });
  </script>
</body>
</html>`;

function AutofillCodeDownloads() {
  const [copiedId, setCopiedId] = React.useState<string | null>(null);
  const copyToClipboard = (code: string, id: string) => { navigator.clipboard.writeText(code); setCopiedId(id); setTimeout(() => setCopiedId(null), 2000); };
  const downloadCode = (code: string, filename: string) => { const blob = new Blob([code], { type: 'text/plain' }); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = filename; a.click(); URL.revokeObjectURL(url); };
  const lanes = [
    { key: 'react', title: 'React', desc: 'TypeScript + Aadhaar/DigiLocker', code: AUTOFILL_REACT_CODE, filename: 'AutofillPage.tsx' },
    { key: 'angular', title: 'Angular', desc: 'Standalone Component', code: AUTOFILL_ANGULAR_CODE, filename: 'autofill.component.ts' },
    { key: 'html', title: 'HTML / CSS / JS', desc: 'No framework needed', code: AUTOFILL_HTML_CODE, filename: 'autofill.html' },
  ];
  return (
    <section id="code-downloads" className="space-y-6 scroll-mt-24 mt-12">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Code Downloads</h2>
        <p className="text-muted-foreground mt-1">Production-ready Auto-fill implementations.</p>
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
                <div tabIndex={0} role="region" aria-label="Code preview" className="rounded-xl border border-border bg-slate-950 p-3 text-xs text-slate-100 shadow-inner max-h-64 overflow-auto">
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

