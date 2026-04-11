import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Upload, FileText, CheckCircle, XCircle, ArrowRight, ArrowLeft, AlertCircle, Info } from "lucide-react";

type DocumentStatus = 'pending' | 'uploaded' | 'error';

export default function CertificateDocumentUpload() {
  const navigate = useNavigate();
  
  const [documents, setDocuments] = useState([
    { id: 1, name: "Identity Proof (Aadhaar / Voter ID)", status: 'uploaded' as DocumentStatus, fileName: "aadhaar_card.pdf", size: "1.2 MB" },
    { id: 2, name: "Address Proof", status: 'uploaded' as DocumentStatus, fileName: "utility_bill.pdf", size: "890 KB" },
    { id: 3, name: "Photograph (Passport Size)", status: 'uploaded' as DocumentStatus, fileName: "photo.jpg", size: "234 KB" },
    { id: 4, name: "Income Proof (Salary Slip / ITR)", status: 'pending' as DocumentStatus },
  ]);

  const allDocumentsUploaded = documents.every(doc => doc.status === 'uploaded');

  const handleContinue = () => {
    if (allDocumentsUploaded) {
      navigate("/reference-service/certificate/review-summary");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b-2 border-gray-300">
        <div className="max-w-[1400px] mx-auto px-12 py-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-14 h-14 bg-indigo-600 rounded flex items-center justify-center">
              <Upload size={28} className="text-white" />
            </div>
            <div>
              <div className="text-sm text-gray-600">Document Upload</div>
              <h1 className="text-2xl font-bold text-gray-900">Upload Required Documents</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1400px] mx-auto px-12 py-12">
        <div className="grid grid-cols-12 gap-8">
          
          {/* Upload Area - 8 columns */}
          <div className="col-span-8 space-y-6">
            
            {/* Instructions */}
            <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Info size={20} className="text-[#000080]" />
                Document Upload Guidelines
              </h3>
              <div className="space-y-2 text-sm text-gray-700">
                <GuidelineItem text="Upload clear, readable scanned copies or photos" />
                <GuidelineItem text="Accepted formats: PDF, JPEG, PNG" />
                <GuidelineItem text="Maximum file size: 2MB per document" />
                <GuidelineItem text="Ensure all text in documents is legible" />
                <GuidelineItem text="Do not upload password-protected files" />
              </div>
            </div>

            {/* Document List */}
            <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden">
              <div className="bg-gray-100 border-b-2 border-gray-300 px-6 py-4">
                <h2 className="font-bold text-gray-900">Required Documents</h2>
              </div>
              <div className="p-6 space-y-4">
                {documents.map((doc) => (
                  <DocumentItem key={doc.id} doc={doc} />
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-8">
              <Link
                to="/reference-service/certificate/form/review"
                className="flex items-center gap-2 px-6 py-3 border-2 border-gray-300 bg-white text-gray-700 font-bold rounded text-sm hover:bg-gray-50"
              >
                <ArrowLeft size={18} />
                Back to Review
              </Link>
              <button
                onClick={handleContinue}
                disabled={!allDocumentsUploaded}
                className={`flex items-center gap-2 px-8 py-3 font-bold rounded text-sm ${
                  allDocumentsUploaded
                    ? 'bg-[#000080] text-white hover:bg-blue-900'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Continue to Review
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Sidebar - 4 columns */}
          <aside className="col-span-4 space-y-6">
            
            {/* Upload Progress */}
            <div className="bg-white border-2 border-gray-300 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-4">Upload Progress</h3>
              <div className="mb-4">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-gray-700">Documents Uploaded</span>
                  <span className="font-bold text-gray-900">
                    {documents.filter(d => d.status === 'uploaded').length} of {documents.length}
                  </span>
                </div>
                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[#138808] transition-all duration-300"
                    style={{ width: `${(documents.filter(d => d.status === 'uploaded').length / documents.length) * 100}%` }}
                  ></div>
                </div>
              </div>
              {allDocumentsUploaded ? (
                <div className="bg-green-50 border-2 border-green-300 rounded p-3 flex items-center gap-2">
                  <CheckCircle size={18} className="text-green-600" />
                  <span className="text-sm font-bold text-green-900">All documents uploaded!</span>
                </div>
              ) : (
                <div className="bg-orange-50 border-2 border-orange-300 rounded p-3 flex items-center gap-2">
                  <AlertCircle size={18} className="text-orange-600" />
                  <span className="text-sm font-bold text-orange-900">Upload remaining documents</span>
                </div>
              )}
            </div>

            {/* Common Issues */}
            <div className="bg-white border-2 border-gray-300 rounded-lg p-5">
              <h4 className="font-bold text-gray-900 mb-3 text-sm">Common Upload Issues</h4>
              <div className="space-y-3 text-xs text-gray-700">
                <IssueItem 
                  issue="File too large" 
                  solution="Compress PDF or reduce image resolution" 
                />
                <IssueItem 
                  issue="Unsupported format" 
                  solution="Convert to PDF, JPEG, or PNG" 
                />
                <IssueItem 
                  issue="Document unclear" 
                  solution="Re-scan with better lighting" 
                />
              </div>
            </div>

          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t-2 border-gray-300 mt-24">
        <div className="max-w-[1400px] mx-auto px-12 py-8">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div>Certificate Application Service • Government of India</div>
            <div>Document Upload</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ==================== HELPER COMPONENTS ====================

function DocumentItem({ doc }: { doc: any }) {
  return (
    <div className="bg-gray-50 border-2 border-gray-300 rounded-lg p-4">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h4 className="font-bold text-gray-900 text-sm mb-1">{doc.name}</h4>
          {doc.status === 'uploaded' && (
            <div className="text-xs text-gray-600">
              {doc.fileName} • {doc.size}
            </div>
          )}
        </div>
        {doc.status === 'uploaded' && (
          <CheckCircle size={24} className="text-green-600 flex-shrink-0" />
        )}
        {doc.status === 'error' && (
          <XCircle size={24} className="text-red-600 flex-shrink-0" />
        )}
      </div>
      
      {doc.status === 'pending' && (
        <div>
          <label className="w-full cursor-pointer">
            <div className="px-4 py-3 border-2 border-dashed border-[#000080] bg-blue-50 rounded text-center hover:bg-blue-100 transition-colors">
              <Upload size={20} className="text-[#000080] mx-auto mb-1" />
              <span className="text-sm font-bold text-[#000080]">Click to Upload</span>
              <p className="text-xs text-gray-600 mt-1">PDF, JPEG, PNG (Max 2MB)</p>
            </div>
            <input type="file" className="hidden" accept=".pdf,.jpg,.jpeg,.png" />
          </label>
        </div>
      )}

      {doc.status === 'uploaded' && (
        <div className="flex items-center gap-2">
          <button className="flex-1 px-3 py-2 border-2 border-gray-300 bg-white text-gray-700 font-bold rounded text-xs hover:bg-gray-50">
            Replace
          </button>
          <button className="flex-1 px-3 py-2 border-2 border-red-300 bg-white text-red-700 font-bold rounded text-xs hover:bg-red-50">
            Remove
          </button>
        </div>
      )}
    </div>
  );
}

function GuidelineItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2">
      <CheckCircle size={14} className="text-blue-600 flex-shrink-0 mt-0.5" />
      <span>{text}</span>
    </div>
  );
}

function IssueItem({ issue, solution }: { issue: string; solution: string }) {
  return (
    <div>
      <div className="font-bold text-gray-900 mb-1">{issue}</div>
      <div className="text-gray-600">{solution}</div>
    </div>
  );
}
