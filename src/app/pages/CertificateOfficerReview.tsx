import { Link, useNavigate } from "react-router";
import { FileCheck, CheckCircle, XCircle, MessageSquare, Download, ArrowLeft } from "lucide-react";
import { useState } from "react";

export default function CertificateOfficerReview() {
  const navigate = useNavigate();
  const [decision, setDecision] = useState<'approve' | 'reject' | 'clarify' | null>(null);
  const [comments, setComments] = useState("");

  const applicationData = {
    refNumber: "CERT-2026-MH-876543",
    applicantName: "Priya Sharma",
    certificateType: "Income Certificate",
    submittedDate: "April 10, 2026",
    personal: {
      fullName: "Priya Sharma",
      dateOfBirth: "15/03/1995",
      gender: "Female",
      fatherName: "Rajesh Sharma",
      motherName: "Sunita Sharma",
      mobile: "9876543210",
      email: "priya.sharma@example.com"
    },
    address: {
      full: "Flat 301, Sunrise Apartments, MG Road, Andheri East, Mumbai, Mumbai Suburban, Maharashtra - 400069"
    },
    documents: [
      { name: "Aadhaar Card", status: "verified" },
      { name: "Utility Bill", status: "verified" },
      { name: "Photograph", status: "verified" },
      { name: "Salary Slip", status: "pending" }
    ]
  };

  const handleSubmitDecision = () => {
    if (decision) {
      navigate("/reference-service/certificate/officer/cases");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b-2 border-gray-300">
        <div className="max-w-[1600px] mx-auto px-12 py-6">
          <Link 
            to="/reference-service/certificate/officer/cases"
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 mb-4"
          >
            <ArrowLeft size={16} />
            Back to Case Queue
          </Link>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 bg-teal-600 rounded flex items-center justify-center">
                <FileCheck size={28} className="text-white" />
              </div>
              <div>
                <div className="text-sm text-gray-600">Case Review</div>
                <h1 className="text-2xl font-bold text-gray-900">{applicationData.refNumber}</h1>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-600">Certificate Type</div>
              <div className="font-bold text-gray-900">{applicationData.certificateType}</div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1600px] mx-auto px-12 py-12">
        <div className="grid grid-cols-12 gap-8">
          
          {/* Application Details - 8 columns */}
          <div className="col-span-8 space-y-6">
            
            {/* Applicant Info */}
            <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden">
              <div className="bg-gray-100 border-b-2 border-gray-300 px-6 py-4">
                <h2 className="font-bold text-gray-900">Applicant Information</h2>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4">
                  <ReviewField label="Full Name" value={applicationData.personal.fullName} />
                  <ReviewField label="Date of Birth" value={applicationData.personal.dateOfBirth} />
                  <ReviewField label="Gender" value={applicationData.personal.gender} />
                  <ReviewField label="Father's Name" value={applicationData.personal.fatherName} />
                  <ReviewField label="Mother's Name" value={applicationData.personal.motherName} />
                  <ReviewField label="Mobile" value={applicationData.personal.mobile} />
                  <ReviewField label="Email" value={applicationData.personal.email} />
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden">
              <div className="bg-gray-100 border-b-2 border-gray-300 px-6 py-4">
                <h2 className="font-bold text-gray-900">Address Details</h2>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-900">{applicationData.address.full}</p>
              </div>
            </div>

            {/* Documents */}
            <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden">
              <div className="bg-gray-100 border-b-2 border-gray-300 px-6 py-4">
                <h2 className="font-bold text-gray-900">Uploaded Documents</h2>
              </div>
              <div className="p-6 space-y-3">
                {applicationData.documents.map((doc, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 border-2 border-gray-300 rounded">
                    <div className="flex items-center gap-3">
                      {doc.status === 'verified' ? (
                        <CheckCircle size={20} className="text-green-600" />
                      ) : (
                        <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
                      )}
                      <span className="font-bold text-gray-900">{doc.name}</span>
                    </div>
                    <button className="px-4 py-2 border-2 border-gray-300 bg-white text-gray-700 font-bold rounded text-xs hover:bg-gray-50 flex items-center gap-2">
                      <Download size={14} />
                      View
                    </button>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Decision Panel - 4 columns */}
          <aside className="col-span-4 space-y-6">
            
            {/* Quick Info */}
            <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mb-3 text-sm">Application Status</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <div className="text-xs text-gray-600">Submitted</div>
                  <div className="font-bold text-gray-900">{applicationData.submittedDate}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-600">Days Waiting</div>
                  <div className="font-bold text-gray-900">1 day</div>
                </div>
              </div>
            </div>

            {/* Decision */}
            <div className="bg-white border-2 border-gray-300 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-4">Make Decision</h3>
              
              <div className="space-y-3 mb-6">
                <DecisionButton
                  selected={decision === 'approve'}
                  onClick={() => setDecision('approve')}
                  label="Approve Application"
                  icon={<CheckCircle size={20} />}
                  color="green"
                />
                <DecisionButton
                  selected={decision === 'clarify'}
                  onClick={() => setDecision('clarify')}
                  label="Request Clarification"
                  icon={<MessageSquare size={20} />}
                  color="orange"
                />
                <DecisionButton
                  selected={decision === 'reject'}
                  onClick={() => setDecision('reject')}
                  label="Reject Application"
                  icon={<XCircle size={20} />}
                  color="red"
                />
              </div>

              {decision && (
                <div className="mb-6">
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Comments / Reason
                    <span className="text-red-600 ml-1">*</span>
                  </label>
                  <textarea
                    value={comments}
                    onChange={(e) => setComments(e.target.value)}
                    rows={4}
                    placeholder="Enter your comments or reason for decision..."
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded text-sm focus:outline-none focus:border-[#000080]"
                  />
                </div>
              )}

              <button
                onClick={handleSubmitDecision}
                disabled={!decision || !comments}
                className={`w-full px-6 py-3 font-bold rounded text-sm ${
                  decision && comments
                    ? 'bg-[#000080] text-white hover:bg-blue-900'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Submit Decision
              </button>
            </div>

          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t-2 border-gray-300 mt-24">
        <div className="max-w-[1600px] mx-auto px-12 py-8">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div>Certificate Application Service • Officer Dashboard</div>
            <div>Case Review</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ==================== HELPER COMPONENTS ====================

function ReviewField({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-xs text-gray-600 mb-1">{label}</div>
      <div className="text-sm font-bold text-gray-900">{value}</div>
    </div>
  );
}

function DecisionButton({ 
  selected, 
  onClick, 
  label, 
  icon, 
  color 
}: { 
  selected: boolean; 
  onClick: () => void; 
  label: string; 
  icon: React.ReactNode; 
  color: 'green' | 'orange' | 'red';
}) {
  const colors = {
    green: selected ? 'bg-green-600 text-white border-green-600' : 'bg-white text-gray-700 border-gray-300 hover:border-green-600',
    orange: selected ? 'bg-orange-600 text-white border-orange-600' : 'bg-white text-gray-700 border-gray-300 hover:border-orange-600',
    red: selected ? 'bg-red-600 text-white border-red-600' : 'bg-white text-gray-700 border-gray-300 hover:border-red-600'
  };

  return (
    <button
      onClick={onClick}
      className={`w-full px-4 py-3 border-2 rounded font-bold text-sm transition-all flex items-center gap-2 ${colors[color]}`}
    >
      {icon}
      {label}
    </button>
  );
}
