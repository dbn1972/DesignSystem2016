import { Link } from "react-router";
import { FileText, CheckCircle, XCircle, AlertCircle, Download, Info } from "lucide-react";

export default function CertificateDocumentGuidelines() {
  const documents = [
    {
      name: "Identity Proof",
      required: true,
      accepted: ["Aadhaar Card", "Voter ID Card", "Passport", "Driving License", "PAN Card"],
      specifications: [
        "Clear, colored scan or photo",
        "All four corners visible",
        "Text must be readable",
        "File size: Maximum 2 MB",
        "Format: PDF, JPG, or PNG"
      ],
      commonErrors: [
        "Blurred or unclear image",
        "Black and white photocopy",
        "Cropped or incomplete document",
        "Expired document"
      ]
    },
    {
      name: "Address Proof",
      required: true,
      accepted: ["Electricity Bill", "Gas Bill", "Water Bill", "Telephone Bill", "Rent Agreement", "Bank Statement"],
      specifications: [
        "Dated within last 3 months (for utility bills)",
        "Name and address clearly visible",
        "Original or certified copy",
        "File size: Maximum 2 MB",
        "Format: PDF, JPG, or PNG"
      ],
      commonErrors: [
        "Bill older than 3 months",
        "Address not matching application",
        "Name mismatch",
        "Handwritten bills not accepted"
      ]
    },
    {
      name: "Photograph",
      required: true,
      accepted: ["Passport-size photograph (35mm x 45mm)"],
      specifications: [
        "Recent photo (taken within last 6 months)",
        "White or light-colored background",
        "Face clearly visible, front view",
        "No sunglasses or headgear (except religious)",
        "File size: 50 KB - 200 KB",
        "Format: JPG or JPEG"
      ],
      commonErrors: [
        "Old photograph",
        "Selfie or casual photo",
        "Poor lighting or resolution",
        "Face partially covered",
        "Group photo or cropped"
      ]
    },
    {
      name: "Income Proof (For Income Certificate)",
      required: false,
      accepted: ["Salary Slip", "Form 16", "ITR", "Bank Statement", "Employer Certificate"],
      specifications: [
        "Latest salary slip or last 3 months' slips",
        "ITR of previous financial year",
        "Employer certificate on company letterhead",
        "File size: Maximum 2 MB each",
        "Format: PDF or JPG"
      ],
      commonErrors: [
        "Salary slip older than 3 months",
        "Incomplete or partial documents",
        "Not showing employer details",
        "Handwritten certificates"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b-2 border-gray-300">
        <div className="max-w-[1400px] mx-auto px-12 py-6">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 bg-green-600 rounded flex items-center justify-center">
              <FileText size={28} className="text-white" />
            </div>
            <div>
              <div className="text-sm text-gray-600">Application Help</div>
              <h1 className="text-2xl font-bold text-gray-900">Document Requirements & Guidelines</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto px-12 py-12">
        
        {/* Important Notice */}
        <div className="bg-orange-50 border-2 border-orange-300 rounded-lg p-6 mb-8">
          <div className="flex items-start gap-3">
            <AlertCircle size={24} className="text-orange-600 flex-shrink-0" />
            <div>
              <h2 className="font-bold text-gray-900 mb-2">Important: Read Before Uploading</h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                Please ensure all documents meet the specifications mentioned below. Applications with incomplete, 
                unclear, or incorrect documents will be rejected, causing delays in processing. Follow the guidelines 
                carefully to avoid rejection.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Tips */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          <TipCard
            icon={<CheckCircle size={24} className="text-green-600" />}
            title="Do's"
            tips={[
              "Upload clear, high-quality scans",
              "Ensure all text is readable",
              "Use correct file formats",
              "Keep file sizes within limits",
              "Verify document validity dates"
            ]}
            color="green"
          />
          <TipCard
            icon={<XCircle size={24} className="text-red-600" />}
            title="Don'ts"
            tips={[
              "Don't upload blurred images",
              "Don't crop documents",
              "Don't use expired documents",
              "Don't upload screenshots",
              "Don't edit or modify documents"
            ]}
            color="red"
          />
          <TipCard
            icon={<Info size={24} className="text-blue-600" />}
            title="Tips"
            tips={[
              "Scan documents in good lighting",
              "Use a scanner for best quality",
              "Name files clearly",
              "Double-check before uploading",
              "Keep original documents ready"
            ]}
            color="blue"
          />
        </div>

        {/* Document Details */}
        <div className="space-y-6">
          {documents.map((doc, idx) => (
            <DocumentCard key={idx} document={doc} />
          ))}
        </div>

        {/* General Guidelines */}
        <div className="mt-8 bg-white border-2 border-gray-300 rounded-lg overflow-hidden">
          <div className="bg-gray-100 border-b-2 border-gray-300 px-8 py-4">
            <h2 className="font-bold text-gray-900">General Technical Guidelines</h2>
          </div>
          <div className="p-8">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-gray-900 mb-3 text-sm">File Formats Accepted</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-green-600" />
                    PDF (Portable Document Format)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-green-600" />
                    JPG/JPEG (Image format)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-green-600" />
                    PNG (Image format)
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-3 text-sm">File Size Limits</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Identity Proof: Maximum 2 MB</li>
                  <li>• Address Proof: Maximum 2 MB</li>
                  <li>• Photograph: 50 KB - 200 KB</li>
                  <li>• Other Documents: Maximum 2 MB each</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-3 text-sm">Image Quality</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Minimum resolution: 300 DPI</li>
                  <li>• Color: Preferred (colored scan)</li>
                  <li>• Orientation: Correct (not upside down)</li>
                  <li>• Brightness: Adequate and clear</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-3 text-sm">Document Validity</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Identity proof must be valid</li>
                  <li>• Utility bills within 3 months</li>
                  <li>• Photograph within 6 months</li>
                  <li>• Income documents current year</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Sample Document */}
        <div className="mt-8 bg-green-50 border-2 border-green-300 rounded-lg p-6">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <Download size={20} className="text-green-600" />
                Sample Document Templates
              </h3>
              <p className="text-sm text-gray-700 mb-4">
                Download sample templates to understand the quality and format requirements
              </p>
              <div className="flex items-center gap-3">
                <button className="px-4 py-2 bg-[#000080] text-white font-bold rounded text-sm hover:bg-blue-900">
                  Download Sample PDF
                </button>
                <button className="px-4 py-2 border-2 border-gray-300 bg-white text-gray-700 font-bold rounded text-sm hover:bg-gray-50">
                  View Examples
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Ready to Apply */}
        <div className="mt-8 text-center">
          <Link
            to="/reference-service/certificate/sign-up"
            className="inline-block px-8 py-4 bg-[#138808] text-white font-bold rounded hover:bg-green-700"
          >
            Start Your Application
          </Link>
        </div>

      </main>

      <footer className="bg-white border-t-2 border-gray-300 mt-24">
        <div className="max-w-[1400px] mx-auto px-12 py-8">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div>Certificate Application Service • Government of India</div>
            <div>
              <Link to="/reference-service/demo" className="text-[#000080] font-bold hover:underline mr-6">
                Service Home
              </Link>
              <Link to="/reference-service/certificate/help" className="text-gray-600 hover:underline">
                Help & Support
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function TipCard({ icon, title, tips, color }: any) {
  const colors = {
    green: 'bg-green-50 border-green-300',
    red: 'bg-red-50 border-red-300',
    blue: 'bg-blue-50 border-blue-300'
  };

  return (
    <div className={`border-2 rounded-lg p-6 ${colors[color]}`}>
      <div className="flex items-center gap-2 mb-4">
        {icon}
        <h3 className="font-bold text-gray-900">{title}</h3>
      </div>
      <ul className="space-y-2 text-sm text-gray-700">
        {tips.map((tip: string, idx: number) => (
          <li key={idx}>• {tip}</li>
        ))}
      </ul>
    </div>
  );
}

function DocumentCard({ document }: any) {
  return (
    <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden">
      <div className="bg-gray-100 border-b-2 border-gray-300 px-8 py-4 flex items-center justify-between">
        <h2 className="font-bold text-gray-900">{document.name}</h2>
        {document.required ? (
          <span className="px-3 py-1 bg-red-100 border-2 border-red-300 text-red-900 text-xs font-bold rounded">
            REQUIRED
          </span>
        ) : (
          <span className="px-3 py-1 bg-blue-100 border-2 border-blue-300 text-blue-900 text-xs font-bold rounded">
            CONDITIONAL
          </span>
        )}
      </div>
      <div className="p-8">
        <div className="grid grid-cols-2 gap-8">
          
          {/* Left Column */}
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-gray-900 mb-3 text-sm flex items-center gap-2">
                <CheckCircle size={18} className="text-green-600" />
                Accepted Documents
              </h4>
              <ul className="space-y-2 text-sm text-gray-700 ml-6">
                {document.accepted.map((item: string, idx: number) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3 text-sm flex items-center gap-2">
                <Info size={18} className="text-blue-600" />
                Specifications
              </h4>
              <ul className="space-y-2 text-sm text-gray-700 ml-6">
                {document.specifications.map((spec: string, idx: number) => (
                  <li key={idx}>• {spec}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <h4 className="font-bold text-gray-900 mb-3 text-sm flex items-center gap-2">
              <XCircle size={18} className="text-red-600" />
              Common Errors to Avoid
            </h4>
            <div className="bg-red-50 border-2 border-red-300 rounded-lg p-4">
              <ul className="space-y-2 text-sm text-gray-700">
                {document.commonErrors.map((error: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">✗</span>
                    <span>{error}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
