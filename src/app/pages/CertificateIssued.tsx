import { Link } from "react-router";
import { Award, Download, Share2, CheckCircle, QrCode } from "lucide-react";

export default function CertificateIssued() {
  const certificateDetails = {
    certificateNumber: "INC/2026/MH/876543",
    referenceNumber: "CERT-2026-MH-876543",
    applicantName: "Priya Sharma",
    fatherName: "Rajesh Sharma",
    certificateType: "Income Certificate",
    issuedDate: "April 18, 2026",
    validUntil: "April 17, 2027",
    issuingAuthority: "District Collector, Mumbai Suburban",
    annualIncome: "₹4,50,000"
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-[#FF9933] to-[#138808] p-1">
        <div className="bg-white">
          <div className="max-w-[1400px] mx-auto px-12 py-8 text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-green-100 to-green-200 rounded-full mx-auto mb-6 flex items-center justify-center border-4 border-green-600">
              <Award size={48} className="text-green-700" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Certificate Approved & Issued!</h1>
            <p className="text-gray-700">
              Your certificate has been successfully generated and is ready for download
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto px-12 py-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Certificate Preview */}
          <div className="bg-white border-4 border-green-600 rounded-lg overflow-hidden mb-6 shadow-lg">
            <div className="bg-gradient-to-r from-[#FF9933] via-white to-[#138808] p-1">
              <div className="bg-white p-12">
                <div className="text-center mb-8">
                  <div className="text-sm text-gray-600 mb-2">GOVERNMENT OF INDIA</div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-1">INCOME CERTIFICATE</h2>
                  <div className="text-sm text-gray-600">State of Maharashtra</div>
                </div>

                <div className="border-2 border-gray-300 rounded-lg p-8 mb-6">
                  <div className="grid grid-cols-2 gap-6">
                    <CertField label="Certificate Number" value={certificateDetails.certificateNumber} />
                    <CertField label="Reference Number" value={certificateDetails.referenceNumber} />
                    <CertField label="Applicant Name" value={certificateDetails.applicantName} />
                    <CertField label="Father's Name" value={certificateDetails.fatherName} />
                    <CertField label="Annual Family Income" value={certificateDetails.annualIncome} />
                    <CertField label="Valid Until" value={certificateDetails.validUntil} />
                  </div>

                  <div className="mt-6 p-4 bg-blue-50 border-2 border-blue-300 rounded">
                    <p className="text-sm text-gray-700 text-center">
                      This is to certify that the above-mentioned person belongs to a family whose 
                      total annual income from all sources is <span className="font-bold">{certificateDetails.annualIncome}</span>.
                      This certificate is issued for official purposes.
                    </p>
                  </div>
                </div>

                <div className="flex items-end justify-between">
                  <div>
                    <div className="w-24 h-24 bg-gray-100 border-2 border-gray-300 rounded flex items-center justify-center mb-2">
                      <QrCode size={64} className="text-gray-600" />
                    </div>
                    <p className="text-xs text-gray-600">Scan to verify</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600 mb-2">Date of Issue: {certificateDetails.issuedDate}</div>
                    <div className="font-bold text-gray-900 mb-1">{certificateDetails.issuingAuthority}</div>
                    <div className="text-xs text-gray-600">Digitally Signed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <button className="px-6 py-4 bg-[#138808] text-white font-bold rounded hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
              <Download size={20} />
              Download Certificate (PDF)
            </button>
            <button className="px-6 py-4 border-2 border-[#000080] bg-white text-[#000080] font-bold rounded hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
              <Share2 size={20} />
              Share Certificate
            </button>
          </div>

          {/* Verification Info */}
          <div className="bg-white border-2 border-gray-300 rounded-lg p-6">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <CheckCircle size={20} className="text-green-600" />
              Certificate Verification
            </h3>
            <p className="text-sm text-gray-700 mb-4">
              This certificate can be verified online using the certificate number or by scanning the QR code.
            </p>
            <div className="flex items-center gap-4">
              <input
                type="text"
                value={certificateDetails.certificateNumber}
                readOnly
                className="flex-1 px-4 py-3 border-2 border-gray-300 rounded text-sm font-mono bg-gray-50"
              />
              <button className="px-6 py-3 bg-[#000080] text-white font-bold rounded text-sm hover:bg-blue-900">
                Verify Online
              </button>
            </div>
          </div>

        </div>
      </main>

      <footer className="bg-white border-t-2 border-gray-300 mt-24">
        <div className="max-w-[1400px] mx-auto px-12 py-8">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div>Certificate Application Service • Government of India</div>
            <div>
              <Link to="/reference-service/demo" className="text-[#000080] font-bold hover:underline mr-4">
                Apply for Another Certificate
              </Link>
              Digital India Initiative
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function CertField({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-xs text-gray-600 mb-1">{label}</div>
      <div className="font-bold text-gray-900">{value}</div>
    </div>
  );
}
