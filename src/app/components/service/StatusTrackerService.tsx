import { Link } from "react-router";
import { Clock, Download } from "lucide-react";

import { ServiceFooter } from "../certificate/ServiceFooter";
import { ServiceHeader } from "../certificate/ServiceHeader";
import { loadServiceTrackingDataOrFallback } from "../../services/statusTrackerService";

interface StatusTrackerServiceProps {
  category: string;
  title: string;
  serviceName: string;
  homePath: string;
  codeDownloadPath?: string;
}

export function StatusTrackerService({
  category,
  title,
  serviceName,
  homePath,
  codeDownloadPath,
}: StatusTrackerServiceProps) {
  const app = loadServiceTrackingDataOrFallback();

  return (
    <div className="min-h-screen bg-gray-50">
      <ServiceHeader icon={Clock} iconColor="bg-blue-600" category={category} title={title} />

      <main className="max-w-[1000px] mx-auto px-4 sm:px-6 py-8 space-y-5">
        <section className="bg-white border-2 border-gray-300 rounded-lg p-6">
          <p className="text-xs text-gray-600">Reference Number</p>
          <p className="text-xl font-bold text-gray-900">{app.referenceNumber}</p>
          <p className="text-sm text-gray-700 mt-2">Current Status: <span className="font-bold">{app.statusLabel}</span></p>
          <p className="text-sm text-gray-700">Certificate Type: {app.certificateType}</p>
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

        <div className="text-sm text-gray-700 flex items-center gap-4">
          <Link to={homePath} className="font-bold text-[#000080] hover:underline">Go to Service Home</Link>
          {codeDownloadPath && (
            <Link to={codeDownloadPath} className="inline-flex items-center gap-1 font-bold text-[#000080] hover:underline">
              <Download size={14} />
              Download React code
            </Link>
          )}
        </div>
      </main>

      <ServiceFooter leftText={`${serviceName} • Government of India`} rightText="Status Tracking" />
    </div>
  );
}
