import { Link } from "react-router";
import { Clock, CheckCircle, ArrowRight, FileText, User, Eye, Award } from "lucide-react";

export default function CertificateStatusTracker() {
  const referenceNumber = "CERT-2026-MH-876543";

  const timeline = [
    { status: "Application Submitted", date: "April 10, 2026, 3:30 PM", completed: true, icon: <FileText size={20} /> },
    { status: "Payment Confirmed", date: "April 10, 2026, 3:32 PM", completed: true, icon: <CheckCircle size={20} /> },
    { status: "Assigned to Officer", date: "April 11, 2026, 10:15 AM", completed: true, icon: <User size={20} /> },
    { status: "Under Review", date: "April 11, 2026, 11:30 AM", completed: true, icon: <Eye size={20} />, current: true },
    { status: "Approved & Certificate Generated", date: "Pending", completed: false, icon: <Award size={20} /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b-2 border-gray-300">
        <div className="max-w-[1400px] mx-auto px-12 py-6">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 bg-blue-600 rounded flex items-center justify-center">
              <Clock size={28} className="text-white" />
            </div>
            <div>
              <div className="text-sm text-gray-600">Application Tracking</div>
              <h1 className="text-2xl font-bold text-gray-900">Track Application Status</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto px-12 py-12">
        <div className="grid grid-cols-12 gap-8">
          
          <div className="col-span-8">
            {/* Current Status */}
            <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden mb-6">
              <div className="bg-blue-100 border-b-2 border-blue-300 px-8 py-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Current Status</div>
                    <h2 className="text-2xl font-bold text-gray-900">Under Officer Review</h2>
                  </div>
                  <div className="px-4 py-2 bg-blue-600 text-white rounded font-bold text-sm">
                    IN PROGRESS
                  </div>
                </div>
              </div>
              <div className="p-8">
                <p className="text-sm text-gray-700 mb-4">
                  Your application is currently being reviewed by the assigned officer. Documents and 
                  information are being verified for accuracy and completeness.
                </p>
                <div className="bg-green-50 border-2 border-green-300 rounded-lg p-4">
                  <p className="text-sm text-gray-700">
                    <span className="font-bold text-gray-900">Estimated completion:</span> April 18, 2026
                  </p>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden">
              <div className="bg-gray-100 border-b-2 border-gray-300 px-8 py-4">
                <h3 className="font-bold text-gray-900">Application Timeline</h3>
              </div>
              <div className="p-8">
                <div className="space-y-6">
                  {timeline.map((item, idx) => (
                    <TimelineItem key={idx} item={item} isLast={idx === timeline.length - 1} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <aside className="col-span-4">
            {/* Application Details */}
            <div className="bg-white border-2 border-gray-300 rounded-lg p-6 mb-6">
              <h3 className="font-bold text-gray-900 mb-4">Application Details</h3>
              <div className="space-y-3">
                <DetailItem label="Reference Number" value={referenceNumber} />
                <DetailItem label="Applicant Name" value="Priya Sharma" />
                <DetailItem label="Certificate Type" value="Income Certificate" />
                <DetailItem label="Submission Date" value="April 10, 2026" />
              </div>
            </div>

            {/* Actions */}
            <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-5">
              <h4 className="font-bold text-gray-900 mb-3 text-sm">Quick Actions</h4>
              <div className="space-y-2">
                <button className="w-full px-4 py-2 border-2 border-gray-300 bg-white text-gray-700 font-bold rounded text-sm hover:bg-gray-50">
                  Download Receipt
                </button>
                <button className="w-full px-4 py-2 border-2 border-gray-300 bg-white text-gray-700 font-bold rounded text-sm hover:bg-gray-50">
                  Contact Support
                </button>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <footer className="bg-white border-t-2 border-gray-300 mt-24">
        <div className="max-w-[1400px] mx-auto px-12 py-8">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div>Certificate Application Service • Government of India</div>
            <div>Application Status Tracking</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function TimelineItem({ item, isLast }: { item: any; isLast: boolean }) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex flex-col items-center">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
          item.completed 
            ? item.current 
              ? 'bg-blue-600 text-white' 
              : 'bg-green-600 text-white'
            : 'bg-gray-200 text-gray-600'
        }`}>
          {item.icon}
        </div>
        {!isLast && (
          <div className={`w-0.5 h-12 ${item.completed ? 'bg-green-600' : 'bg-gray-300'}`}></div>
        )}
      </div>
      <div className="flex-1 pb-6">
        <h4 className={`font-bold mb-1 ${
          item.current ? 'text-blue-900' : item.completed ? 'text-gray-900' : 'text-gray-600'
        }`}>
          {item.status}
          {item.current && <span className="ml-2 text-xs bg-blue-100 text-blue-900 px-2 py-1 rounded">CURRENT</span>}
        </h4>
        <p className="text-sm text-gray-600">{item.date}</p>
      </div>
    </div>
  );
}

function DetailItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-xs text-gray-600 mb-1">{label}</div>
      <div className="text-sm font-bold text-gray-900">{value}</div>
    </div>
  );
}
