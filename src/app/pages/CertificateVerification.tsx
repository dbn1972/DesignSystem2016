import { useState } from "react";
import { Search, CheckCircle, XCircle, QrCode, Info } from "lucide-react";

export default function CertificateVerification() {
  const [certificateNumber, setCertificateNumber] = useState("");
  const [verificationResult, setVerificationResult] = useState<'valid' | 'invalid' | null>(null);
  const [showDetails, setShowDetails] = useState(false);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock verification - accept specific format
    if (certificateNumber === "INC/2026/MH/876543") {
      setVerificationResult('valid');
      setShowDetails(true);
    } else if (certificateNumber) {
      setVerificationResult('invalid');
      setShowDetails(false);
    }
  };

  const validCertificate = {
    certificateNumber: "INC/2026/MH/876543",
    certificateType: "Income Certificate",
    holderName: "Priya Sharma",
    issueDate: "April 18, 2026",
    validUntil: "April 17, 2027",
    issuingAuthority: "District Collector, Mumbai Suburban",
    status: "Valid"
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b-2 border-gray-300">
        <div className="max-w-[1400px] mx-auto px-12 py-6">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 bg-teal-600 rounded flex items-center justify-center">
              <Search size={28} className="text-white" />
            </div>
            <div>
              <div className="text-sm text-gray-600">Public Service</div>
              <h1 className="text-2xl font-bold text-gray-900">Verify Certificate Authenticity</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto px-12 py-12">
        <div className="max-w-3xl mx-auto">
          
          {/* Info Banner */}
          <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-6 mb-8">
            <h2 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Info size={20} className="text-[#000080]" />
              Certificate Verification
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              This service allows anyone to verify the authenticity of certificates issued by government departments. 
              Enter the certificate number or scan the QR code on the certificate to check its validity.
            </p>
          </div>

          {/* Verification Methods */}
          <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden mb-6">
            <div className="bg-gray-100 border-b-2 border-gray-300 px-8 py-4">
              <h2 className="font-bold text-gray-900">Choose Verification Method</h2>
            </div>
            <div className="p-8">
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                
                {/* Manual Entry */}
                <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <Search size={24} className="text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Enter Certificate Number</h3>
                  <p className="text-sm text-gray-700">
                    Type the certificate number found on the certificate document
                  </p>
                </div>

                {/* QR Scan */}
                <div className="bg-purple-50 border-2 border-purple-300 rounded-lg p-6">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <QrCode size={24} className="text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Scan QR Code</h3>
                  <p className="text-sm text-gray-700 mb-3">
                    Use your mobile device to scan the QR code
                  </p>
                  <button className="text-sm text-purple-700 font-bold hover:underline">
                    Open Scanner
                  </button>
                </div>

              </div>

              {/* Input Form */}
              <form onSubmit={handleVerify}>
                <div className="mb-6">
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Certificate Number <span className="text-red-600">*</span>
                  </label>
                  <div className="flex gap-3">
                    <input
                      type="text"
                      value={certificateNumber}
                      onChange={(e) => {
                        setCertificateNumber(e.target.value.toUpperCase());
                        setVerificationResult(null);
                      }}
                      placeholder="e.g., INC/2026/MH/876543"
                      className="flex-1 px-4 py-3 border-2 border-gray-300 rounded text-sm font-mono focus:outline-none focus:border-[#000080]"
                    />
                    <button
                      type="submit"
                      className="px-8 py-3 bg-[#000080] text-white font-bold rounded text-sm hover:bg-blue-900 flex items-center gap-2"
                    >
                      <Search size={18} />
                      Verify
                    </button>
                  </div>
                  <p className="mt-2 text-xs text-gray-600">
                    For testing: Use certificate number INC/2026/MH/876543
                  </p>
                </div>
              </form>

            </div>
          </div>

          {/* Verification Result */}
          {verificationResult === 'valid' && showDetails && (
            <div className="bg-green-50 border-2 border-green-300 rounded-lg overflow-hidden mb-6">
              <div className="bg-green-100 border-b-2 border-green-300 px-8 py-6 text-center">
                <div className="w-20 h-20 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle size={40} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Certificate is Valid</h3>
                <p className="text-sm text-gray-700">
                  This certificate has been verified and is authentic
                </p>
              </div>
              <div className="p-8">
                <div className="grid grid-cols-2 gap-6">
                  <VerifyField label="Certificate Number" value={validCertificate.certificateNumber} />
                  <VerifyField label="Certificate Type" value={validCertificate.certificateType} />
                  <VerifyField label="Certificate Holder" value={validCertificate.holderName} />
                  <VerifyField label="Issue Date" value={validCertificate.issueDate} />
                  <VerifyField label="Valid Until" value={validCertificate.validUntil} />
                  <VerifyField label="Status" value={validCertificate.status} highlighted />
                </div>
                <div className="mt-6 pt-6 border-t-2 border-green-300">
                  <div className="text-xs text-gray-600 mb-1">Issuing Authority</div>
                  <div className="text-sm font-bold text-gray-900">{validCertificate.issuingAuthority}</div>
                </div>
              </div>
            </div>
          )}

          {verificationResult === 'invalid' && (
            <div className="bg-red-50 border-2 border-red-300 rounded-lg overflow-hidden mb-6">
              <div className="bg-red-100 border-b-2 border-red-300 px-8 py-6 text-center">
                <div className="w-20 h-20 bg-red-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <XCircle size={40} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Certificate Not Found</h3>
                <p className="text-sm text-gray-700">
                  The certificate number you entered could not be verified
                </p>
              </div>
              <div className="p-8">
                <h4 className="font-bold text-gray-900 mb-3">Possible Reasons:</h4>
                <ul className="space-y-2 text-sm text-gray-700 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">•</span>
                    <span>Certificate number was entered incorrectly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">•</span>
                    <span>Certificate has been revoked or cancelled</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">•</span>
                    <span>Certificate number does not exist in our system</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">•</span>
                    <span>The certificate may be fraudulent</span>
                  </li>
                </ul>
                <div className="bg-orange-50 border-2 border-orange-300 rounded p-4">
                  <p className="text-sm text-gray-700">
                    <span className="font-bold text-gray-900">Important:</span> If you suspect a certificate is fraudulent, 
                    please report it to the issuing authority immediately.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* How to Find Certificate Number */}
          <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden">
            <div className="bg-gray-100 border-b-2 border-gray-300 px-8 py-4">
              <h2 className="font-bold text-gray-900">How to Find the Certificate Number</h2>
            </div>
            <div className="p-8">
              <div className="space-y-3 text-sm text-gray-700">
                <Step 
                  number={1} 
                  text="Look at the top of the certificate document" 
                />
                <Step 
                  number={2} 
                  text="Find the field labeled 'Certificate Number' or 'Reference Number'" 
                />
                <Step 
                  number={3} 
                  text="Enter the complete number exactly as shown (including slashes and dashes)" 
                />
                <Step 
                  number={4} 
                  text="Certificate numbers are usually in format: TYPE/YEAR/STATE/NUMBER" 
                />
              </div>
            </div>
          </div>

        </div>
      </main>

      <footer className="bg-white border-t-2 border-gray-300 mt-24">
        <div className="max-w-[1400px] mx-auto px-12 py-8">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div>Certificate Application Service • Government of India</div>
            <div>Certificate Verification</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function VerifyField({ label, value, highlighted }: any) {
  return (
    <div>
      <div className="text-xs text-gray-600 mb-1">{label}</div>
      <div className={`text-sm font-bold ${highlighted ? 'text-green-700' : 'text-gray-900'}`}>
        {value}
      </div>
    </div>
  );
}

function Step({ number, text }: any) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-6 h-6 bg-[#000080] text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">
        {number}
      </div>
      <span>{text}</span>
    </div>
  );
}
