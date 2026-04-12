import { Link } from "react-router";
import { Clock } from "lucide-react";
import { getLatestCertificateApplication } from "../services/certificateFlow";

export default function CertificateStatusTracker() {
  const app = getLatestCertificateApplication();

  if (!app) {
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-[900px] mx-auto bg-white border-2 border-gray-300 rounded-lg p-6">
          <h1 className="text-xl font-bold text-gray-900 mb-2">No submitted application found</h1>
          <p className="text-sm text-gray-700 mb-4">Start a new application to track status.</p>
          <Link to="/reference-service/demo" className="text-[#000080] font-bold hover:underline">Go to service home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b-2 border-gray-300">
        <div className="max-w-[1000px] mx-auto px-6 py-5 flex items-center gap-3">
          <div className="w-12 h-12 bg-blue-600 rounded flex items-center justify-center">
            <Clock size={24} className="text-white" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Application Tracking</p>
            <h1 className="text-xl font-bold text-gray-900">{app.referenceNumber}</h1>
          </div>
        </div>
      </header>

      <main className="max-w-[1000px] mx-auto px-6 py-8 space-y-5">
        <section className="bg-white border-2 border-gray-300 rounded-lg p-6">
          <p className="text-xs text-gray-600">Current Status</p>
          <p className="text-xl font-bold text-gray-900">{app.statusLabel}</p>
          <p className="text-sm text-gray-700 mt-2">Certificate Type: {app.certificateType}</p>
          <p className="text-sm text-gray-700">Submitted: {app.submittedDate}</p>
        </section>

        <section className="bg-white border-2 border-gray-300 rounded-lg p-6">
          <h2 className="font-bold text-gray-900 mb-4">Timeline</h2>
          <div className="space-y-4">
            {app.timeline.map((item, index) => (
              <div key={`${item.label}-${index}`} className="flex items-start gap-3">
                <div className={`w-3 h-3 mt-1.5 rounded-full ${item.completed ? "bg-green-600" : "bg-gray-300"}`} />
                <div>
                  <p className="font-bold text-gray-900">{item.label}</p>
                  <p className="text-sm text-gray-600">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
