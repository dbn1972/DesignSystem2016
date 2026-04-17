import React from "react";
import { Link } from "react-router";
import { Shield, Video, Fingerprint, CheckCircle, AlertCircle, Lock, Eye, ArrowRight, Key, Download, Copy, Check } from "lucide-react";

export default function AadhaarVideoKYCPattern() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-to-br from-orange-50 via-white to-green-50 border-b-2 border-border">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-12">
          <div className="mb-6">
            <Link to="/patterns/identity" className="text-sm text-muted-foreground hover:text-primary">
              ← Back to Identity & Access Patterns
            </Link>
          </div>
          <div className="flex items-start justify-between">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-green-500 border-2 border-border rounded flex items-center justify-center">
                  <Shield size={32} className="text-white" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Identity Verification Pattern</div>
                  <h1 className="text-4xl font-bold text-foreground">Aadhaar-based Video KYC Pattern</h1>
                </div>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Combine the security of Aadhaar authentication with video verification for enhanced 
                identity validation. This pattern integrates UIDAI's Aadhaar eKYC services with live 
                or recorded video verification, providing the highest level of identity assurance for 
                government and financial services.
              </p>
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-sm"></div>
                  <span className="text-muted-foreground">Complexity: <span className="font-bold text-foreground">High</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-sm"></div>
                  <span className="text-muted-foreground">Type: <span className="font-bold text-foreground">Hybrid</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-sm"></div>
                  <span className="text-muted-foreground">Security: <span className="font-bold text-foreground">Maximum</span></span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="px-6 py-3 bg-orange-100 border-2 border-orange-300 rounded text-orange-800 font-bold text-sm text-center">
                AADHAAR INTEGRATED
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-12 gap-8">
          
          {/* Main Content */}
          <div className="col-span-9 space-y-12">
            
            {/* Overview */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6 border-l-4 border-orange-500 pl-4">
                Pattern Overview
              </h2>
              <div className="bg-card border-2 border-border rounded-lg p-8">
                <p className="text-muted-foreground mb-6">
                  Aadhaar-based Video KYC combines UIDAI's Aadhaar authentication (OTP or biometric) with 
                  video-based identity verification. This creates a two-factor verification process: 
                  (1) Aadhaar authentication proves the user possesses the Aadhaar credentials, and 
                  (2) video verification confirms the person in the video matches the Aadhaar holder.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-green-50 dark:bg-green-950/30 border-2 border-green-200 dark:border-green-800 rounded-lg p-6">
                    <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                      <CheckCircle size={20} className="text-green-600" />
                      When to Use
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Maximum identity assurance required</li>
                      <li>• Financial services (banking, loans, insurance)</li>
                      <li>• Government benefits and subsidies</li>
                      <li>• High-value transactions (&gt;₹50,000)</li>
                      <li>• Regulatory compliance mandates Aadhaar</li>
                      <li>• eKYC with visual confirmation needed</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 dark:bg-red-950/30 border-2 border-red-200 dark:border-red-800 rounded-lg p-6">
                    <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                      <AlertCircle size={20} className="text-red-600" />
                      When Not to Use
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• User doesn't have Aadhaar</li>
                      <li>• Aadhaar not legally permitted for service</li>
                      <li>• Low-value, low-risk transactions</li>
                      <li>• Minors without Aadhaar enrollment</li>
                      <li>• Services not requiring identity proof</li>
                      <li>• Privacy concerns with Aadhaar data</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* User Journey */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6 border-l-4 border-orange-500 pl-4">
                User Journey
              </h2>
              <div className="space-y-4">
                {[
                  {
                    step: 1,
                    title: "Aadhaar Number Entry",
                    description: "User enters their 12-digit Aadhaar number. System validates format and checks if number is active",
                    icon: <Key size={24} className="text-blue-600" />
                  },
                  {
                    step: 2,
                    title: "Consent for Aadhaar Authentication",
                    description: "User provides explicit consent for Aadhaar authentication and eKYC data retrieval as per UIDAI guidelines",
                    icon: <CheckCircle size={24} className="text-green-600" />
                  },
                  {
                    step: 3,
                    title: "Aadhaar OTP Authentication",
                    description: "UIDAI sends OTP to registered mobile number. User enters OTP to authenticate Aadhaar ownership",
                    icon: <Shield size={24} className="text-purple-600" />
                  },
                  {
                    step: 4,
                    title: "eKYC Data Retrieval",
                    description: "Upon successful authentication, system retrieves name, photo, address, DOB from UIDAI in encrypted XML",
                    icon: <Lock size={24} className="text-orange-600" />
                  },
                  {
                    step: 5,
                    title: "Video Recording Setup",
                    description: "User receives instructions for video recording: show face, Aadhaar card (masked), speak verification text",
                    icon: <Video size={24} className="text-indigo-600" />
                  },
                  {
                    step: 6,
                    title: "Video Capture (Live or Recorded)",
                    description: "User records or participates in live video call showing face clearly and holding masked Aadhaar card",
                    icon: <Eye size={24} className="text-teal-600" />
                  },
                  {
                    step: 7,
                    title: "Face Matching",
                    description: "AI compares face in video with Aadhaar photo from eKYC. Agent reviews match score and video quality",
                    icon: <Fingerprint size={24} className="text-red-600" />
                  },
                  {
                    step: 8,
                    title: "Verification Decision",
                    description: "Combined verification (Aadhaar auth + video match) results in approval or rejection with detailed reasons",
                    icon: <CheckCircle size={24} className="text-green-600" />
                  }
                ].map((item) => (
                  <JourneyStep key={item.step} {...item} />
                ))}
              </div>
            </section>

            {/* UX Requirements */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6 border-l-4 border-orange-500 pl-4">
                UX Requirements
              </h2>
              <div className="grid grid-cols-1 gap-6">
                <RequirementCard
                  title="Aadhaar Authentication Flow"
                  requirements={[
                    "Clear explanation of why Aadhaar is needed",
                    "Explicit consent with checkbox for Aadhaar use",
                    "Masked Aadhaar number display (XXXX-XXXX-1234)",
                    "OTP sent to Aadhaar-registered mobile only",
                    "60-second OTP validity with resend option",
                    "Error messages for invalid Aadhaar or failed OTP"
                  ]}
                  color="blue"
                />
                <RequirementCard
                  title="eKYC Data Display"
                  requirements={[
                    "Show retrieved name, DOB, address, photo clearly",
                    "Allow user to verify eKYC data accuracy",
                    "Option to edit if minor discrepancies exist",
                    "Clear data retention policy notification",
                    "Secure display with no screenshot/copy allowed",
                    "Automatic data masking after verification"
                  ]}
                  color="green"
                />
                <RequirementCard
                  title="Video Recording Guidelines"
                  requirements={[
                    "Instruction to show face matching Aadhaar photo",
                    "Hold masked physical Aadhaar card visible in frame",
                    "Speak verification text (name, DOB, city)",
                    "Good lighting and clear face visibility required",
                    "No face covering (mask, sunglasses, hat)",
                    "Option to re-record if not satisfied"
                  ]}
                  color="purple"
                />
                <RequirementCard
                  title="Security & Privacy"
                  requirements={[
                    "End-to-end encryption for all Aadhaar data",
                    "No storage of full Aadhaar number (hash only)",
                    "eKYC XML stored encrypted with limited retention",
                    "Video watermarked with timestamp and session ID",
                    "Audit trail for all Aadhaar authentication attempts",
                    "Compliance with UIDAI regulations and IT Act"
                  ]}
                  color="orange"
                />
              </div>
            </section>

            {/* Technical Specifications */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6 border-l-4 border-orange-500 pl-4">
                Technical Specifications
              </h2>
              <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
                <div className="bg-muted border-b-2 border-border px-6 py-4">
                  <h3 className="font-bold text-foreground">Implementation Requirements</h3>
                </div>
                <div className="p-6 space-y-6">
                  <TechSpec
                    title="UIDAI Integration"
                    specs={[
                      "Register as Authentication User Agency (AUA)",
                      "Obtain KUA (KYC User Agency) license for eKYC",
                      "Implement UIDAI authentication API v2.0",
                      "Use 2048-bit PKI for secure communication",
                      "Decrypt eKYC XML using registered certificate",
                      "Implement digital signature verification"
                    ]}
                  />
                  <TechSpec
                    title="Aadhaar OTP Flow"
                    specs={[
                      "Generate OTP request with PID block",
                      "Send request to UIDAI authentication server",
                      "Receive encrypted OTP reference number",
                      "User enters OTP within 60 seconds",
                      "Submit OTP with PID for verification",
                      "Handle success/failure response codes"
                    ]}
                  />
                  <TechSpec
                    title="eKYC Data Processing"
                    specs={[
                      "Parse encrypted eKYC XML response",
                      "Extract demographic data (name, DOB, gender, address)",
                      "Decode base64 photograph from XML",
                      "Store eKYC data with encryption at rest",
                      "Implement 6-month data retention policy",
                      "Automatic purging after retention period"
                    ]}
                  />
                  <TechSpec
                    title="Face Matching System"
                    specs={[
                      "Extract face from Aadhaar eKYC photo",
                      "Extract face from video recording",
                      "Use deep learning face recognition model",
                      "Calculate similarity score (threshold: 85%)",
                      "Liveness detection in video (blink, movement)",
                      "Agent review for borderline cases (75-85%)"
                    ]}
                  />
                  <TechSpec
                    title="Security Controls"
                    specs={[
                      "TLS 1.3 for all API communications",
                      "AES-256 encryption for stored eKYC data",
                      "SHA-256 hashing for Aadhaar numbers",
                      "Role-based access control for eKYC data",
                      "Comprehensive audit logging",
                      "DLP (Data Loss Prevention) for Aadhaar data"
                    ]}
                  />
                  <TechSpec
                    title="Compliance Requirements"
                    specs={[
                      "UIDAI Aadhaar Authentication Regulation 2016",
                      "Aadhaar (Targeted Delivery of Services) Act 2016",
                      "IT Act 2000 and amendments",
                      "RBI KYC guidelines for financial services",
                      "Data Protection Bill compliance",
                      "Regular security audits by CERT-In empaneled agencies"
                    ]}
                  />
                </div>
              </div>
            </section>

            {/* Accessibility */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6 border-l-4 border-orange-500 pl-4">
                Accessibility Considerations
              </h2>
              <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-300 rounded-lg p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-bold text-foreground mb-3">Alternative Authentication</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Biometric authentication for users without mobile</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Offline Aadhaar XML upload option</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Virtual ID (VID) as Aadhaar number alternative</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Support for masked Aadhaar number</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-3">Special Cases</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Assisted verification for elderly/disabled</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Guardian consent for minor's Aadhaar</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Alternative documents if Aadhaar unavailable</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Manual verification fallback option</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Code Example */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6 border-l-4 border-orange-500 pl-4">
                Implementation Example
              </h2>
              <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
                <div className="bg-muted border-b-2 border-border px-6 py-4 flex items-center justify-between">
                  <h3 className="font-bold text-foreground">Aadhaar Authentication Flow</h3>
                  <span className="text-xs text-muted-foreground bg-gray-200 px-3 py-1 rounded">TypeScript</span>
                </div>
                <div className="p-6">
                  <pre className="bg-gray-900 text-green-400 p-6 rounded text-sm overflow-x-auto">
{`import { useState } from 'react';
import { Shield, Video, CheckCircle } from 'lucide-react';

interface EKYCData {
  name: string;
  dob: string;
  gender: string;
  address: string;
  photo: string; // base64
}

export function AadhaarVideoKYC() {
  const [step, setStep] = useState<'aadhaar' | 'otp' | 'ekyc' | 'video' | 'complete'>('aadhaar');
  const [aadhaarNumber, setAadhaarNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [ekycData, setEkycData] = useState<EKYCData | null>(null);
  const [consent, setConsent] = useState(false);

  const submitAadhaar = async () => {
    if (!consent) {
      alert('Please provide consent for Aadhaar authentication');
      return;
    }

    try {
      // Send Aadhaar number to backend for OTP generation
      const response = await fetch('/api/aadhaar/generate-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ aadhaarNumber })
      });

      const data = await response.json();
      
      if (data.success) {
        setStep('otp');
      } else {
        alert('Failed to send OTP: ' + data.error);
      }
    } catch (err) {
      console.error('Aadhaar OTP generation failed:', err);
    }
  };

  const verifyOTP = async () => {
    try {
      // Verify OTP and retrieve eKYC data
      const response = await fetch('/api/aadhaar/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ aadhaarNumber, otp })
      });

      const data = await response.json();
      
      if (data.success) {
        // eKYC data retrieved
        setEkycData(data.ekycData);
        setStep('ekyc');
      } else {
        alert('Invalid OTP: ' + data.error);
      }
    } catch (err) {
      console.error('OTP verification failed:', err);
    }
  };

  const proceedToVideo = () => {
    setStep('video');
  };

  const completeVideoKYC = async (videoBlob: Blob) => {
    try {
      const formData = new FormData();
      formData.append('video', videoBlob);
      formData.append('aadhaarHash', hashAadhaar(aadhaarNumber));
      
      const response = await fetch('/api/kyc/complete-aadhaar-video', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();
      
      if (data.success) {
        setStep('complete');
      }
    } catch (err) {
      console.error('Video KYC completion failed:', err);
    }
  };

  const hashAadhaar = (aadhaar: string): string => {
    // SHA-256 hash of Aadhaar number
    // Implementation would use crypto library
    return btoa(aadhaar); // Simplified example
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      {step === 'aadhaar' && (
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <Shield size={32} className="text-orange-500" />
            <h2 className="text-2xl font-bold">Aadhaar Authentication</h2>
          </div>
          
          <div className="bg-yellow-50 dark:bg-yellow-950/30 border-2 border-yellow-300 rounded-lg p-4">
            <p className="text-sm text-muted-foreground">
              <strong>Privacy Notice:</strong> Your Aadhaar will be used only for identity 
              verification. Data is encrypted and stored securely as per UIDAI guidelines.
            </p>
          </div>

          <div>
            <label className="block font-bold text-foreground mb-2">
              Aadhaar Number
            </label>
            <input
              type="text"
              value={aadhaarNumber}
              onChange={(e) => setAadhaarNumber(e.target.value.replace(/\D/g, ''))}
              maxLength={12}
              placeholder="XXXX XXXX XXXX"
              className="w-full px-4 py-3 border-2 border-border rounded"
            />
          </div>

          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              id="consent"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-1"
            />
            <label htmlFor="consent" className="text-sm text-muted-foreground">
              I consent to Aadhaar authentication and eKYC data retrieval for verification purposes.
              I understand my data will be handled securely as per UIDAI regulations.
            </label>
          </div>

          <button
            onClick={submitAadhaar}
            disabled={aadhaarNumber.length !== 12 || !consent}
            className="w-full px-6 py-3 bg-orange-600 text-white rounded font-bold disabled:bg-gray-400"
          >
            Send OTP
          </button>
        </div>
      )}

      {step === 'otp' && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Enter OTP</h2>
          <p className="text-muted-foreground">
            OTP sent to mobile number registered with Aadhaar ending in 
            <strong> XXXXXX{aadhaarNumber.slice(-4)}</strong>
          </p>

          <div>
            <label className="block font-bold text-foreground mb-2">
              Enter 6-digit OTP
            </label>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
              maxLength={6}
              placeholder="000000"
              className="w-full px-4 py-3 border-2 border-border rounded text-center text-2xl"
            />
          </div>

          <button
            onClick={verifyOTP}
            disabled={otp.length !== 6}
            className="w-full px-6 py-3 bg-orange-600 text-white rounded font-bold disabled:bg-gray-400"
          >
            Verify OTP
          </button>
        </div>
      )}

      {step === 'ekyc' && ekycData && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">eKYC Data Retrieved</h2>
          
          <div className="bg-card border-2 border-border rounded-lg p-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <img 
                  src={\`data:image/jpeg;base64,\${ekycData.photo}\`} 
                  alt="Aadhaar Photo"
                  className="w-32 h-32 object-cover rounded border-2 border-border"
                />
              </div>
              <div className="space-y-2 text-sm">
                <div><strong>Name:</strong> {ekycData.name}</div>
                <div><strong>DOB:</strong> {ekycData.dob}</div>
                <div><strong>Gender:</strong> {ekycData.gender}</div>
                <div><strong>Address:</strong> {ekycData.address}</div>
              </div>
            </div>
          </div>

          <button
            onClick={proceedToVideo}
            className="w-full px-6 py-3 bg-blue-600 text-white rounded font-bold"
          >
            <Video className="inline mr-2" size={20} />
            Proceed to Video Verification
          </button>
        </div>
      )}

      {step === 'complete' && (
        <div className="text-center space-y-6">
          <CheckCircle size={64} className="text-green-600 mx-auto" />
          <h2 className="text-3xl font-bold">Verification Complete</h2>
          <p className="text-muted-foreground">
            Your identity has been verified successfully using Aadhaar and video KYC.
          </p>
        </div>
      )}
    </div>
  );
}`}
                  </pre>
                </div>
              </div>
            </section>

            <VideoKYCCodeDownloads />

          </div>

          {/* Sidebar */}
          <div className="col-span-3 space-y-6">
            <QuickInfo />
            <RelatedPatterns />
            <BestPractices />
          </div>

        </div>
      </div>
    </div>
  );
}


// ==================== CODE DOWNLOADS SECTION ====================

const VIDEOKYC_REACT_CODE = `import React, { useState, useRef, useCallback, useEffect } from 'react';

type Step = 'aadhaar' | 'consent' | 'otp' | 'video' | 'review' | 'done';

export function AadhaarVideoKYCPage() {
  const [step, setStep] = useState<Step>('aadhaar');
  const [aadhaar, setAadhaar] = useState('');
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [recording, setRecording] = useState(false);
  const [recorded, setRecorded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const formatAadhaar = (val: string) => {
    const digits = val.replace(/\\D/g, '').slice(0, 12);
    return digits.replace(/(\\d{4})(?=\\d)/g, '$1 ');
  };

  const handleAadhaarSubmit = () => {
    const digits = aadhaar.replace(/\\s/g, '');
    if (digits.length !== 12) { setError('Enter valid 12-digit Aadhaar number'); return; }
    setError(''); setStep('consent');
  };

  const handleConsent = async () => {
    setLoading(true); setError('');
    try {
      const res = await fetch('/api/kyc/aadhaar-video/initiate', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ aadhaar: aadhaar.replace(/\\s/g, '') }),
      });
      if (!res.ok) { setError('Failed to initiate KYC'); return; }
      setStep('otp');
    } catch { setError('Network error'); }
    finally { setLoading(false); }
  };

  const handleOtpVerify = async () => {
    if (otp.length < 6) { setError('Enter complete OTP'); return; }
    setLoading(true); setError('');
    try {
      const res = await fetch('/api/kyc/aadhaar-video/verify-otp', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ otp }),
      });
      if (!res.ok) { setError('Invalid OTP'); return; }
      setStep('video');
    } catch { setError('Network error'); }
    finally { setLoading(false); }
  };

  const startCamera = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user', width: 640, height: 480 }, audio: true });
      streamRef.current = stream;
      if (videoRef.current) { videoRef.current.srcObject = stream; videoRef.current.play(); }
    } catch { setError('Camera access denied. Please allow camera permissions.'); }
  }, []);

  useEffect(() => { if (step === 'video') startCamera(); return () => { streamRef.current?.getTracks().forEach(t => t.stop()); }; }, [step, startCamera]);

  const handleRecord = () => {
    if (!recording) { setRecording(true); setTimeout(() => { setRecording(false); setRecorded(true); }, 10000); }
  };

  const handleSubmitVideo = async () => {
    setLoading(true); setError('');
    try {
      const res = await fetch('/api/kyc/aadhaar-video/submit', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ aadhaar: aadhaar.replace(/\\s/g, ''), videoRecorded: true }) });
      if (!res.ok) { setError('Submission failed'); return; }
      streamRef.current?.getTracks().forEach(t => t.stop());
      setStep('done');
    } catch { setError('Network error'); }
    finally { setLoading(false); }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-lg bg-card border border-border rounded-2xl p-8 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-green-500 rounded-xl flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">Aadhaar Video KYC</h1>
            <p className="text-sm text-muted-foreground">UIDAI + Video identity verification</p>
          </div>
        </div>
        <div className="flex gap-1 mb-6">{['aadhaar','consent','otp','video','done'].map((s,i) => (<div key={s} className={\`flex-1 h-1.5 rounded \${['aadhaar','consent','otp','video','review','done'].indexOf(step) >= i ? 'bg-primary' : 'bg-muted'}\`} />))}</div>
        {error && <div role="alert" className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">{error}</div>}
        {step === 'aadhaar' && (<div className="space-y-4"><div><label htmlFor="aadhaar" className="block text-sm font-medium mb-1">Aadhaar Number <span className="text-red-500">*</span></label><input id="aadhaar" value={aadhaar} onChange={e => setAadhaar(formatAadhaar(e.target.value))} placeholder="XXXX XXXX XXXX" maxLength={14} className="w-full px-4 py-3 border border-border rounded-lg text-lg tracking-wider font-mono" aria-required="true" /></div><button onClick={handleAadhaarSubmit} className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold">Proceed</button></div>)}
        {step === 'consent' && (<div className="space-y-4"><div className="p-4 bg-yellow-50 border border-yellow-200 rounded-xl text-sm text-yellow-700"><p className="font-bold mb-1">UIDAI Consent Required</p><p className="text-xs">I authorize Aadhaar eKYC and video verification for identity confirmation as per UIDAI guidelines and RBI KYC norms.</p></div><div className="flex gap-3"><button onClick={() => setStep('aadhaar')} className="flex-1 py-3 border border-border rounded-lg font-semibold">Back</button><button onClick={handleConsent} disabled={loading} className="flex-1 py-3 bg-primary text-primary-foreground rounded-lg font-semibold disabled:opacity-60">{loading ? 'Processing...' : 'I Consent'}</button></div></div>)}
        {step === 'otp' && (<div className="space-y-4"><p className="text-sm text-muted-foreground">Enter OTP sent to Aadhaar-registered mobile</p><input value={otp} onChange={e => setOtp(e.target.value.replace(/\\D/g,'').slice(0,6))} placeholder="6-digit OTP" maxLength={6} className="w-full px-4 py-3 border border-border rounded-lg text-center text-lg font-bold tracking-widest" /><button onClick={handleOtpVerify} disabled={loading} className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold disabled:opacity-60">{loading ? 'Verifying...' : 'Verify OTP'}</button></div>)}
        {step === 'video' && (<div className="space-y-4"><div className="relative rounded-xl overflow-hidden bg-black aspect-video"><video ref={videoRef} className="w-full h-full object-cover" muted playsInline />{recording && <div className="absolute top-3 right-3 flex items-center gap-2 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold"><div className="w-2 h-2 bg-white rounded-full animate-pulse" />Recording...</div>}</div><p className="text-xs text-muted-foreground text-center">Look directly at the camera. Recording will last 10 seconds.</p>{!recorded ? <button onClick={handleRecord} disabled={recording} className="w-full py-3 bg-red-600 text-white rounded-lg font-semibold disabled:opacity-60">{recording ? 'Recording...' : 'Start Recording'}</button> : <button onClick={handleSubmitVideo} disabled={loading} className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold disabled:opacity-60">{loading ? 'Submitting...' : 'Submit Video KYC'}</button>}</div>)}
        {step === 'done' && (<div className="text-center py-6 space-y-4"><div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto"><svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></div><h2 className="text-xl font-bold text-foreground">KYC Verified</h2><p className="text-muted-foreground">Aadhaar + Video verification complete.</p></div>)}
      </div>
    </div>
  );
}`;

const VIDEOKYC_ANGULAR_CODE = `import { Component, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'ux4g-aadhaar-video-kyc',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: \`
    <div class="min-h-screen flex items-center justify-center bg-background p-4">
      <div class="w-full max-w-lg bg-card border border-border rounded-2xl p-8 shadow-sm">
        <h1 class="text-2xl font-bold text-foreground mb-6">Aadhaar Video KYC</h1>
        <div *ngIf="error" role="alert" class="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">{{ error }}</div>
        <div *ngIf="step === 'aadhaar'" class="space-y-4">
          <label class="block text-sm font-medium mb-1">Aadhaar Number</label>
          <input [formControl]="aadhaarCtrl" placeholder="XXXX XXXX XXXX" maxlength="14" class="w-full px-4 py-3 border border-border rounded-lg text-lg tracking-wider font-mono" />
          <button (click)="submitAadhaar()" class="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold">Proceed</button>
        </div>
        <div *ngIf="step === 'consent'" class="space-y-4">
          <div class="p-4 bg-yellow-50 border border-yellow-200 rounded-xl text-sm text-yellow-700">UIDAI consent required for Aadhaar eKYC + video verification.</div>
          <button (click)="initiate()" [disabled]="loading" class="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold disabled:opacity-60">{{ loading ? 'Processing...' : 'I Consent' }}</button>
        </div>
        <div *ngIf="step === 'otp'" class="space-y-4">
          <input [formControl]="otpCtrl" placeholder="6-digit OTP" maxlength="6" class="w-full px-4 py-3 border border-border rounded-lg text-center text-lg font-bold" />
          <button (click)="verifyOtp()" [disabled]="loading" class="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold disabled:opacity-60">{{ loading ? 'Verifying...' : 'Verify' }}</button>
        </div>
        <div *ngIf="step === 'video'" class="space-y-4">
          <video #videoEl class="w-full rounded-xl bg-black aspect-video object-cover" muted playsinline></video>
          <button *ngIf="!recorded" (click)="startRecording()" [disabled]="recording" class="w-full py-3 bg-red-600 text-white rounded-lg font-semibold">{{ recording ? 'Recording...' : 'Start Recording' }}</button>
          <button *ngIf="recorded" (click)="submitVideo()" [disabled]="loading" class="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold disabled:opacity-60">{{ loading ? 'Submitting...' : 'Submit Video KYC' }}</button>
        </div>
        <div *ngIf="step === 'done'" class="text-center py-8">
          <h2 class="text-xl font-bold mb-2">KYC Verified</h2>
          <p class="text-muted-foreground">Aadhaar + Video verification complete.</p>
        </div>
      </div>
    </div>
  \`
})
export class AadhaarVideoKYCComponent implements OnDestroy {
  @ViewChild('videoEl') videoEl!: ElementRef<HTMLVideoElement>;
  aadhaarCtrl = new FormControl('', [Validators.required]);
  otpCtrl = new FormControl('', [Validators.required, Validators.minLength(6)]);
  step: 'aadhaar'|'consent'|'otp'|'video'|'done' = 'aadhaar';
  loading = false; error = ''; recording = false; recorded = false;
  private stream: MediaStream | null = null;

  ngOnDestroy() { this.stream?.getTracks().forEach(t => t.stop()); }

  submitAadhaar() { if (this.aadhaarCtrl.invalid) { this.error = 'Enter Aadhaar'; return; } this.step = 'consent'; }
  async initiate() {
    this.loading = true; this.error = '';
    try { const r = await fetch('/api/kyc/aadhaar-video/initiate', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ aadhaar: this.aadhaarCtrl.value }) }); if (!r.ok) { this.error = 'Failed'; return; } this.step = 'otp'; } catch { this.error = 'Network error'; } finally { this.loading = false; }
  }
  async verifyOtp() {
    this.loading = true; this.error = '';
    try { const r = await fetch('/api/kyc/aadhaar-video/verify-otp', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ otp: this.otpCtrl.value }) }); if (!r.ok) { this.error = 'Invalid OTP'; return; } this.step = 'video'; this.startCamera(); } catch { this.error = 'Network error'; } finally { this.loading = false; }
  }
  async startCamera() {
    try { this.stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true }); setTimeout(() => { if (this.videoEl) { this.videoEl.nativeElement.srcObject = this.stream; this.videoEl.nativeElement.play(); } }, 100); } catch { this.error = 'Camera access denied'; }
  }
  startRecording() { this.recording = true; setTimeout(() => { this.recording = false; this.recorded = true; }, 10000); }
  async submitVideo() {
    this.loading = true;
    try { const r = await fetch('/api/kyc/aadhaar-video/submit', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ videoRecorded: true }) }); if (!r.ok) { this.error = 'Failed'; return; } this.stream?.getTracks().forEach(t => t.stop()); this.step = 'done'; } catch { this.error = 'Network error'; } finally { this.loading = false; }
  }
}`;

const VIDEOKYC_HTML_CODE = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Aadhaar Video KYC — UX4G</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: system-ui, sans-serif; min-height: 100vh; display: flex; align-items: center; justify-content: center; background: #f9fafb; padding: 1rem; }
    .card { width: 100%; max-width: 32rem; background: #fff; border: 1px solid #e5e7eb; border-radius: 1rem; padding: 2rem; }
    h1 { font-size: 1.5rem; font-weight: 700; margin-bottom: 1.5rem; }
    label { display: block; font-size: 0.875rem; font-weight: 500; margin-bottom: 0.25rem; }
    input { width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 0.5rem; font-size: 1rem; outline: none; margin-bottom: 1rem; }
    input:focus { border-color: #005196; }
    .btn { width: 100%; padding: 0.75rem; background: #005196; color: #fff; border: none; border-radius: 0.5rem; font-size: 1rem; font-weight: 600; cursor: pointer; }
    .btn:disabled { opacity: 0.6; }
    .btn-red { background: #dc2626; }
    .error { margin-bottom: 1rem; padding: 0.75rem; background: #fef2f2; border: 1px solid #fecaca; border-radius: 0.5rem; color: #b91c1c; font-size: 0.875rem; display: none; }
    .consent { padding: 1rem; background: #fefce8; border: 1px solid #fde68a; border-radius: 0.75rem; margin-bottom: 1rem; font-size: 0.875rem; color: #a16207; }
    video { width: 100%; border-radius: 0.75rem; background: #000; aspect-ratio: 4/3; margin-bottom: 1rem; }
    .hidden { display: none; }
    .success { text-align: center; padding: 2rem 0; }
  </style>
</head>
<body>
  <div class="card">
    <h1>Aadhaar Video KYC</h1>
    <div id="error" class="error" role="alert"></div>
    <div id="stepAadhaar">
      <label for="aadhaar">Aadhaar Number</label>
      <input type="text" id="aadhaar" placeholder="XXXX XXXX XXXX" maxlength="14" style="font-size:1.125rem;letter-spacing:0.15em;font-family:monospace" />
      <button class="btn" onclick="submitAadhaar()">Proceed</button>
    </div>
    <div id="stepConsent" class="hidden">
      <div class="consent">UIDAI consent required for Aadhaar eKYC + video verification.</div>
      <button class="btn" onclick="initiateKYC()">I Consent</button>
    </div>
    <div id="stepOtp" class="hidden">
      <label for="otp">OTP sent to Aadhaar-registered mobile</label>
      <input type="text" id="otp" placeholder="6-digit OTP" maxlength="6" style="text-align:center;font-size:1.25rem;font-weight:700" />
      <button class="btn" onclick="verifyOtp()">Verify</button>
    </div>
    <div id="stepVideo" class="hidden">
      <video id="videoEl" muted playsinline></video>
      <button class="btn btn-red" id="recordBtn" onclick="startRecording()">Start Recording</button>
      <button class="btn hidden" id="submitBtn" onclick="submitVideo()">Submit Video KYC</button>
    </div>
    <div id="stepDone" class="hidden success">
      <h2 style="font-size:1.25rem;font-weight:700;margin-bottom:0.5rem">KYC Verified</h2>
      <p style="color:#6b7280">Aadhaar + Video verification complete.</p>
    </div>
  </div>
  <script>
    let stream;
    function showError(m){const e=document.getElementById('error');e.textContent=m;e.style.display='block';}
    function hideError(){document.getElementById('error').style.display='none';}
    function showStep(id){['stepAadhaar','stepConsent','stepOtp','stepVideo','stepDone'].forEach(s=>document.getElementById(s).classList.add('hidden'));document.getElementById(id).classList.remove('hidden');}
    function submitAadhaar(){hideError();const v=document.getElementById('aadhaar').value.replace(/\\s/g,'');if(v.length!==12){showError('Enter 12-digit Aadhaar');return;}showStep('stepConsent');}
    async function initiateKYC(){hideError();try{const r=await fetch('/api/kyc/aadhaar-video/initiate',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({aadhaar:document.getElementById('aadhaar').value})});if(!r.ok){showError('Failed');return;}showStep('stepOtp');}catch{showError('Network error');}}
    async function verifyOtp(){hideError();const c=document.getElementById('otp').value;if(c.length<6){showError('Enter OTP');return;}try{const r=await fetch('/api/kyc/aadhaar-video/verify-otp',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({otp:c})});if(!r.ok){showError('Invalid OTP');return;}showStep('stepVideo');startCamera();}catch{showError('Network error');}}
    async function startCamera(){try{stream=await navigator.mediaDevices.getUserMedia({video:true,audio:true});document.getElementById('videoEl').srcObject=stream;document.getElementById('videoEl').play();}catch{showError('Camera denied');}}
    function startRecording(){document.getElementById('recordBtn').disabled=true;document.getElementById('recordBtn').textContent='Recording...';setTimeout(()=>{document.getElementById('recordBtn').classList.add('hidden');document.getElementById('submitBtn').classList.remove('hidden');},10000);}
    async function submitVideo(){hideError();try{const r=await fetch('/api/kyc/aadhaar-video/submit',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({videoRecorded:true})});if(!r.ok){showError('Failed');return;}if(stream)stream.getTracks().forEach(t=>t.stop());showStep('stepDone');}catch{showError('Network error');}}
  </script>
</body>
</html>`;

function VideoKYCCodeDownloads() {
  const [copiedId, setCopiedId] = React.useState<string | null>(null);
  const copyToClipboard = (code: string, id: string) => { navigator.clipboard.writeText(code); setCopiedId(id); setTimeout(() => setCopiedId(null), 2000); };
  const downloadCode = (code: string, filename: string) => { const blob = new Blob([code], { type: 'text/plain' }); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = filename; a.click(); URL.revokeObjectURL(url); };
  const lanes = [
    { key: 'react', title: 'React', desc: 'TypeScript + Hooks + Camera API', code: VIDEOKYC_REACT_CODE, filename: 'AadhaarVideoKYCPage.tsx' },
    { key: 'angular', title: 'Angular', desc: 'Standalone + MediaStream', code: VIDEOKYC_ANGULAR_CODE, filename: 'aadhaar-video-kyc.component.ts' },
    { key: 'html', title: 'HTML / CSS / JS', desc: 'No framework needed', code: VIDEOKYC_HTML_CODE, filename: 'aadhaar-video-kyc.html' },
  ];
  return (
    <section id="code-downloads" className="space-y-6 scroll-mt-24">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Code Downloads</h2>
        <p className="text-muted-foreground mt-1">Production-ready Aadhaar Video KYC implementations for your framework.</p>
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


// ==================== COMPONENTS ====================

function JourneyStep({ step, title, description, icon }: {
  step: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="bg-card border-2 border-border rounded-lg p-6 flex items-start gap-4">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 bg-orange-100 border-2 border-orange-300 rounded-full flex items-center justify-center font-bold text-orange-700">
          {step}
        </div>
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-2">
          <div className="text-orange-600">{icon}</div>
          <h3 className="font-bold text-foreground">{title}</h3>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

function RequirementCard({ title, requirements, color }: {
  title: string;
  requirements: string[];
  color: string;
}) {
  const colors = {
    blue: 'bg-blue-50 dark:bg-blue-950/30 border-blue-300',
    green: 'bg-green-50 dark:bg-green-950/30 border-green-300',
    purple: 'bg-purple-50 dark:bg-purple-950/30 border-purple-300',
    orange: 'bg-orange-50 dark:bg-orange-950/30 border-orange-300'
  };

  return (
    <div className={`${colors[color as keyof typeof colors]} border-2 rounded-lg p-6`}>
      <h3 className="font-bold text-foreground mb-4">{title}</h3>
      <ul className="space-y-2 text-sm text-muted-foreground">
        {requirements.map((req, i) => (
          <li key={i} className="flex items-start gap-2">
            <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
            <span>{req}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function TechSpec({ title, specs }: { title: string; specs: string[] }) {
  return (
    <div>
      <h4 className="font-bold text-foreground mb-3">{title}</h4>
      <ul className="space-y-2 text-sm text-muted-foreground">
        {specs.map((spec, i) => (
          <li key={i} className="flex items-start gap-2">
            <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
            <span>{spec}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function QuickInfo() {
  return (
    <div className="bg-card border-2 border-border rounded-lg overflow-hidden sticky top-24">
      <div className="bg-orange-50 dark:bg-orange-950/30 border-b-2 border-orange-200 dark:border-orange-800 px-4 py-3">
        <h3 className="font-bold text-foreground text-sm">Quick Info</h3>
      </div>
      <div className="p-4 space-y-4 text-sm">
        <div>
          <div className="text-muted-foreground mb-1">Verification Time</div>
          <div className="font-bold text-foreground">10-20 minutes</div>
        </div>
        <div>
          <div className="text-muted-foreground mb-1">Success Rate</div>
          <div className="font-bold text-foreground">98-99%</div>
        </div>
        <div>
          <div className="text-muted-foreground mb-1">Security Level</div>
          <div className="font-bold text-foreground">Maximum</div>
        </div>
        <div>
          <div className="text-muted-foreground mb-1">Compliance</div>
          <div className="font-bold text-foreground">UIDAI + RBI KYC</div>
        </div>
      </div>
    </div>
  );
}

function RelatedPatterns() {
  return (
    <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
      <div className="bg-green-50 dark:bg-green-950/30 border-b-2 border-green-200 dark:border-green-800 px-4 py-3">
        <h3 className="font-bold text-foreground text-sm">Related Patterns</h3>
      </div>
      <div className="p-4 space-y-2 text-sm">
        <Link to="/patterns/identity/offline-video-kyc" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
          <ArrowRight size={14} />
          <span>Offline Video KYC</span>
        </Link>
        <Link to="/patterns/identity/online-video-kyc" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
          <ArrowRight size={14} />
          <span>Online Video KYC</span>
        </Link>
        <Link to="/patterns/identity" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
          <ArrowRight size={14} />
          <span>All Identity Patterns</span>
        </Link>
      </div>
    </div>
  );
}

function BestPractices() {
  return (
    <div className="bg-green-50 dark:bg-green-950/30 border-2 border-green-300 rounded-lg p-4">
      <h3 className="font-bold text-foreground text-sm mb-3">Best Practices</h3>
      <ul className="space-y-2 text-xs text-muted-foreground">
        <li className="flex items-start gap-2">
          <CheckCircle size={12} className="text-green-600 mt-0.5 flex-shrink-0" />
          <span>Use Virtual ID (VID) instead of Aadhaar number</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle size={12} className="text-green-600 mt-0.5 flex-shrink-0" />
          <span>Encrypt eKYC XML with strong encryption</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle size={12} className="text-green-600 mt-0.5 flex-shrink-0" />
          <span>Implement 6-month data retention policy</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle size={12} className="text-green-600 mt-0.5 flex-shrink-0" />
          <span>Regular security audits by CERT-In agencies</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle size={12} className="text-green-600 mt-0.5 flex-shrink-0" />
          <span>Face match score threshold: minimum 85%</span>
        </li>
      </ul>
    </div>
  );
}