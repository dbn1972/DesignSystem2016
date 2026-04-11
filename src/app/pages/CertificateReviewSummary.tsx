import { Link, useNavigate } from "react-router";
import { Eye, ArrowRight, ArrowLeft, Edit2, FileText, MapPin, Upload } from "lucide-react";

export default function CertificateReviewSummary() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b-2 border-gray-300">
        <div className="max-w-[1400px] mx-auto px-12 py-6">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 bg-teal-600 rounded flex items-center justify-center">
              <Eye size={28} className="text-white" />
            </div>
            <div>
              <div className="text-sm text-gray-600">Application Review</div>
              <h1 className="text-2xl font-bold text-gray-900">Review Complete Application</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto px-12 py-12">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-8 space-y-6">
            
            {/* Summary Sections */}
            <ReviewSection
              title="Personal Information"
              icon={<FileText size={20} />}
              editLink="/reference-service/certificate/form/personal"
            />

            <ReviewSection
              title="Address Details"
              icon={<MapPin size={20} />}
              editLink="/reference-service/certificate/form/address"
            />

            <ReviewSection
              title="Uploaded Documents"
              icon={<Upload size={20} />}
              editLink="/reference-service/certificate/document-upload"
            />

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <Link
                to="/reference-service/certificate/document-upload"
                className="flex items-center gap-2 px-6 py-3 border-2 border-gray-300 bg-white text-gray-700 font-bold rounded text-sm hover:bg-gray-50"
              >
                <ArrowLeft size={18} />
                Back
              </Link>
              <button
                onClick={() => navigate("/reference-service/certificate/declaration")}
                className="flex items-center gap-2 px-8 py-3 bg-[#000080] text-white font-bold rounded text-sm hover:bg-blue-900"
              >
                Proceed to Declaration
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          <aside className="col-span-4">
            <div className="bg-white border-2 border-gray-300 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-4">Application Reference</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="text-xs text-gray-600">Certificate Type</div>
                  <div className="font-bold">Income Certificate</div>
                </div>
                <div>
                  <div className="text-xs text-gray-600">Applicant Name</div>
                  <div className="font-bold">Priya Sharma</div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <footer className="bg-white border-t-2 border-gray-300 mt-24">
        <div className="max-w-[1400px] mx-auto px-12 py-8">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div>Certificate Application Service • Government of India</div>
            <div>Review Summary</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ReviewSection({ title, icon, editLink }: { title: string; icon: React.ReactNode; editLink: string }) {
  return (
    <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden">
      <div className="bg-gray-100 border-b-2 border-gray-300 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {icon}
          <h2 className="font-bold text-gray-900">{title}</h2>
        </div>
        <Link to={editLink} className="flex items-center gap-2 text-sm text-[#000080] font-bold hover:underline">
          <Edit2 size={14} />
          Edit
        </Link>
      </div>
      <div className="p-6">
        <p className="text-sm text-gray-700">All information verified and complete.</p>
      </div>
    </div>
  );
}
