import { Link } from "react-router";
import { CheckCircle, Download, ArrowRight, FileText, Bell } from "lucide-react";

export default function CertificateSubmissionSuccess() {
  const referenceNumber = "CERT-2026-MH-876543";
  const submissionDate = new Date().toLocaleString('en-IN', { dateStyle: 'long', timeStyle: 'short' });

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b-2 border-gray-300">
        <div className="max-w-[1400px] mx-auto px-12 py-8 text-center">
          <div className="w-24 h-24 bg-green-100 rounded-full mx-auto mb-6 flex items-center justify-center">
            <CheckCircle size={48} className="text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Application Submitted Successfully!</h1>
          <p className="text-gray-700">
            Your certificate application has been successfully submitted and is now under review
          </p>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto px-12 py-12">
        <div className="max-w-3xl mx-auto">
          
          {/* Reference Details */}
          <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden mb-6">
            <div className="bg-green-50 border-b-2 border-green-300 px-8 py-6 text-center">
              <div className="text-sm text-gray-600 mb-2">Application Reference Number</div>
              <div className="text-3xl font-bold text-gray-900 font-mono mb-3">{referenceNumber}</div>
              <p className="text-xs text-gray-600">Save this number for tracking your application</p>
            </div>
            <div className="p-8">
              <div className="grid grid-cols-2 gap-6 mb-6">
                <DetailItem label="Applicant Name" value="Priya Sharma" />
                <DetailItem label="Certificate Type" value="Income Certificate" />
                <DetailItem label="Submission Date" value={submissionDate} />
                <DetailItem label="Payment Status" value="Paid (₹155)" />
                <DetailItem label="Current Status" value="Under Review" />
                <DetailItem label="Expected Timeline" value="7-10 working days" />
              </div>

              <div className="flex items-center gap-3">
                <button className="flex-1 px-6 py-3 bg-[#000080] text-white font-bold rounded text-sm hover:bg-blue-900 flex items-center justify-center gap-2">
                  <Download size={18} />
                  Download Receipt
                </button>
                <Link
                  to="/reference-service/certificate/track"
                  className="flex-1 px-6 py-3 border-2 border-[#000080] bg-white text-[#000080] font-bold rounded text-sm hover:bg-blue-50 text-center"
                >
                  Track Status
                </Link>
              </div>
            </div>
          </div>

          {/* What Happens Next */}
          <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-6 mb-6">
            <h3 className="font-bold text-gray-900 mb-4">What Happens Next?</h3>
            <div className="space-y-3">
              <NextStep step="1" text="Your application is queued for officer review" />
              <NextStep step="2" text="Officer will verify your documents and information" />
              <NextStep step="3" text="You will be notified if any corrections are needed" />
              <NextStep step="4" text="Certificate will be generated upon approval" />
              <NextStep step="5" text="You will receive notification to download your certificate" />
            </div>
          </div>

          {/* Notifications */}
          <div className="bg-white border-2 border-gray-300 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Bell size={24} className="text-purple-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 mb-2">Stay Updated</h3>
                <p className="text-sm text-gray-700 mb-3">
                  We will send you SMS and email notifications at every stage of your application processing.
                </p>
                <p className="text-xs text-gray-600">
                  Notifications will be sent to: <span className="font-bold">9876543210</span> and{" "}
                  <span className="font-bold">priya.sharma@example.com</span>
                </p>
              </div>
            </div>
          </div>

        </div>
      </main>

      <footer className="bg-white border-t-2 border-gray-300 mt-24">
        <div className="max-w-[1400px] mx-auto px-12 py-8">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div>Certificate Application Service • Government of India</div>
            <div>Application Submitted</div>
          </div>
        </div>
      </footer>
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

function NextStep({ step, text }: { step: string; text: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-6 h-6 bg-[#000080] text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">
        {step}
      </div>
      <p className="text-sm text-gray-700 flex-1">{text}</p>
    </div>
  );
}
