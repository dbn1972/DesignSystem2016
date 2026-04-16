import { useState } from "react";
import { Link } from "react-router";
import { Shield, ArrowLeft, CheckCircle, Lock, AlertTriangle } from "lucide-react";

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

      <main className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-12">
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

          <aside className="col-span-4">
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
          </aside>
        </div>
      </main>
    </div>
  );
}
