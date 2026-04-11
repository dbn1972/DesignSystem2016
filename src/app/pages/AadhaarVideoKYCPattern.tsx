import { Link } from "react-router";
import { Shield, Video, Fingerprint, CheckCircle, AlertCircle, Lock, Eye, ArrowRight, Key } from "lucide-react";

export default function AadhaarVideoKYCPattern() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-br from-orange-50 via-white to-green-50 border-b-2 border-gray-300">
        <div className="max-w-[1400px] mx-auto px-12 py-12">
          <div className="mb-6">
            <Link to="/patterns/identity" className="text-sm text-gray-600 hover:text-[#000080]">
              ← Back to Identity & Access Patterns
            </Link>
          </div>
          <div className="flex items-start justify-between">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-green-500 border-2 border-gray-300 rounded flex items-center justify-center">
                  <Shield size={32} className="text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Identity Verification Pattern</div>
                  <h1 className="text-4xl font-bold text-gray-900">Aadhaar-based Video KYC Pattern</h1>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Combine the security of Aadhaar authentication with video verification for enhanced 
                identity validation. This pattern integrates UIDAI's Aadhaar eKYC services with live 
                or recorded video verification, providing the highest level of identity assurance for 
                government and financial services.
              </p>
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-sm"></div>
                  <span className="text-gray-600">Complexity: <span className="font-bold text-gray-900">High</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-sm"></div>
                  <span className="text-gray-600">Type: <span className="font-bold text-gray-900">Hybrid</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-sm"></div>
                  <span className="text-gray-600">Security: <span className="font-bold text-gray-900">Maximum</span></span>
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
      <main className="max-w-[1400px] mx-auto px-12 py-12">
        <div className="grid grid-cols-12 gap-8">
          
          {/* Main Content */}
          <div className="col-span-9 space-y-12">
            
            {/* Overview */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-orange-500 pl-4">
                Pattern Overview
              </h2>
              <div className="bg-white border-2 border-gray-300 rounded-lg p-8">
                <p className="text-gray-700 mb-6">
                  Aadhaar-based Video KYC combines UIDAI's Aadhaar authentication (OTP or biometric) with 
                  video-based identity verification. This creates a two-factor verification process: 
                  (1) Aadhaar authentication proves the user possesses the Aadhaar credentials, and 
                  (2) video verification confirms the person in the video matches the Aadhaar holder.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
                    <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <CheckCircle size={20} className="text-green-600" />
                      When to Use
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Maximum identity assurance required</li>
                      <li>• Financial services (banking, loans, insurance)</li>
                      <li>• Government benefits and subsidies</li>
                      <li>• High-value transactions (&gt;₹50,000)</li>
                      <li>• Regulatory compliance mandates Aadhaar</li>
                      <li>• eKYC with visual confirmation needed</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
                    <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <AlertCircle size={20} className="text-red-600" />
                      When Not to Use
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-700">
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-orange-500 pl-4">
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-orange-500 pl-4">
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-orange-500 pl-4">
                Technical Specifications
              </h2>
              <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden">
                <div className="bg-gray-100 border-b-2 border-gray-300 px-6 py-4">
                  <h3 className="font-bold text-gray-900">Implementation Requirements</h3>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-orange-500 pl-4">
                Accessibility Considerations
              </h2>
              <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-bold text-gray-900 mb-3">Alternative Authentication</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
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
                    <h3 className="font-bold text-gray-900 mb-3">Special Cases</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-orange-500 pl-4">
                Implementation Example
              </h2>
              <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden">
                <div className="bg-gray-100 border-b-2 border-gray-300 px-6 py-4 flex items-center justify-between">
                  <h3 className="font-bold text-gray-900">Aadhaar Authentication Flow</h3>
                  <span className="text-xs text-gray-600 bg-gray-200 px-3 py-1 rounded">TypeScript</span>
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
          
          <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-4">
            <p className="text-sm text-gray-700">
              <strong>Privacy Notice:</strong> Your Aadhaar will be used only for identity 
              verification. Data is encrypted and stored securely as per UIDAI guidelines.
            </p>
          </div>

          <div>
            <label className="block font-bold text-gray-900 mb-2">
              Aadhaar Number
            </label>
            <input
              type="text"
              value={aadhaarNumber}
              onChange={(e) => setAadhaarNumber(e.target.value.replace(/\D/g, ''))}
              maxLength={12}
              placeholder="XXXX XXXX XXXX"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded"
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
            <label htmlFor="consent" className="text-sm text-gray-700">
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
          <p className="text-gray-700">
            OTP sent to mobile number registered with Aadhaar ending in 
            <strong> XXXXXX{aadhaarNumber.slice(-4)}</strong>
          </p>

          <div>
            <label className="block font-bold text-gray-900 mb-2">
              Enter 6-digit OTP
            </label>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
              maxLength={6}
              placeholder="000000"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded text-center text-2xl"
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
          
          <div className="bg-white border-2 border-gray-300 rounded-lg p-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <img 
                  src={\`data:image/jpeg;base64,\${ekycData.photo}\`} 
                  alt="Aadhaar Photo"
                  className="w-32 h-32 object-cover rounded border-2 border-gray-300"
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
          <p className="text-gray-700">
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

          </div>

          {/* Sidebar */}
          <aside className="col-span-3 space-y-6">
            <QuickInfo />
            <RelatedPatterns />
            <BestPractices />
          </aside>

        </div>
      </main>
    </div>
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
    <div className="bg-white border-2 border-gray-300 rounded-lg p-6 flex items-start gap-4">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 bg-orange-100 border-2 border-orange-300 rounded-full flex items-center justify-center font-bold text-orange-700">
          {step}
        </div>
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-2">
          <div className="text-orange-600">{icon}</div>
          <h3 className="font-bold text-gray-900">{title}</h3>
        </div>
        <p className="text-sm text-gray-700">{description}</p>
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
    blue: 'bg-blue-50 border-blue-300',
    green: 'bg-green-50 border-green-300',
    purple: 'bg-purple-50 border-purple-300',
    orange: 'bg-orange-50 border-orange-300'
  };

  return (
    <div className={`${colors[color as keyof typeof colors]} border-2 rounded-lg p-6`}>
      <h3 className="font-bold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2 text-sm text-gray-700">
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
      <h4 className="font-bold text-gray-900 mb-3">{title}</h4>
      <ul className="space-y-2 text-sm text-gray-700">
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
    <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden sticky top-24">
      <div className="bg-orange-50 border-b-2 border-orange-200 px-4 py-3">
        <h3 className="font-bold text-gray-900 text-sm">Quick Info</h3>
      </div>
      <div className="p-4 space-y-4 text-sm">
        <div>
          <div className="text-gray-600 mb-1">Verification Time</div>
          <div className="font-bold text-gray-900">10-20 minutes</div>
        </div>
        <div>
          <div className="text-gray-600 mb-1">Success Rate</div>
          <div className="font-bold text-gray-900">98-99%</div>
        </div>
        <div>
          <div className="text-gray-600 mb-1">Security Level</div>
          <div className="font-bold text-gray-900">Maximum</div>
        </div>
        <div>
          <div className="text-gray-600 mb-1">Compliance</div>
          <div className="font-bold text-gray-900">UIDAI + RBI KYC</div>
        </div>
      </div>
    </div>
  );
}

function RelatedPatterns() {
  return (
    <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden">
      <div className="bg-green-50 border-b-2 border-green-200 px-4 py-3">
        <h3 className="font-bold text-gray-900 text-sm">Related Patterns</h3>
      </div>
      <div className="p-4 space-y-2 text-sm">
        <Link to="/patterns/identity/offline-video-kyc" className="flex items-center gap-2 text-gray-700 hover:text-[#000080]">
          <ArrowRight size={14} />
          <span>Offline Video KYC</span>
        </Link>
        <Link to="/patterns/identity/online-video-kyc" className="flex items-center gap-2 text-gray-700 hover:text-[#000080]">
          <ArrowRight size={14} />
          <span>Online Video KYC</span>
        </Link>
        <Link to="/patterns/identity" className="flex items-center gap-2 text-gray-700 hover:text-[#000080]">
          <ArrowRight size={14} />
          <span>All Identity Patterns</span>
        </Link>
      </div>
    </div>
  );
}

function BestPractices() {
  return (
    <div className="bg-green-50 border-2 border-green-300 rounded-lg p-4">
      <h3 className="font-bold text-gray-900 text-sm mb-3">Best Practices</h3>
      <ul className="space-y-2 text-xs text-gray-700">
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