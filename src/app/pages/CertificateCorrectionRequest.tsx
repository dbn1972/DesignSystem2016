import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Edit3, AlertCircle, Upload, ArrowRight } from "lucide-react";

export default function CertificateCorrectionRequest() {
  const navigate = useNavigate();
  const [corrections, setCorrections] = useState({
    personalInfo: false,
    addressInfo: false,
    documents: false,
    additionalInfo: false
  });
  const [comments, setComments] = useState("");

  const officerMessage = {
    message: "Please provide a recent salary slip (not older than 3 months) showing all required details including employer name, employee ID, and monthly breakdown. The current document is dated January 2026.",
    requestedBy: "Officer Suresh Mehta",
    requestDate: "April 12, 2026"
  };

  const handleSubmit = () => {
    if (Object.values(corrections).some(v => v) || comments) {
      navigate("/reference-service/certificate/status-tracker");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card border-b-2 border-border">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-6">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 bg-yellow-600 rounded flex items-center justify-center">
              <Edit3 size={28} className="text-white" />
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Application Update Required</div>
              <h1 className="text-2xl font-bold text-foreground">Correction Request</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-12">
        <div className="max-w-3xl mx-auto">
          
          {/* Officer Message */}
          <div className="bg-orange-50 dark:bg-orange-950/30 border-2 border-orange-300 rounded-lg overflow-hidden mb-8">
            <div className="bg-orange-100 border-b-2 border-orange-300 px-8 py-4 flex items-center justify-between">
              <h2 className="font-bold text-foreground">Message from Officer</h2>
              <span className="text-xs bg-orange-600 text-white px-3 py-1 rounded font-bold">
                CLARIFICATION NEEDED
              </span>
            </div>
            <div className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <AlertCircle size={24} className="text-orange-600 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{officerMessage.message}</p>
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <div className="text-muted-foreground">Requested By</div>
                      <div className="font-bold text-foreground">{officerMessage.requestedBy}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Request Date</div>
                      <div className="font-bold text-foreground">{officerMessage.requestDate}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Application Reference */}
          <div className="bg-card border-2 border-border rounded-lg p-6 mb-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
              <div>
                <div className="text-xs text-muted-foreground mb-1">Reference Number</div>
                <div className="font-bold text-foreground font-mono">CERT-2026-MH-876543</div>
              </div>
              <div>
                <div className="text-xs text-muted-foreground mb-1">Certificate Type</div>
                <div className="font-bold text-foreground">Income Certificate</div>
              </div>
              <div>
                <div className="text-xs text-muted-foreground mb-1">Submission Date</div>
                <div className="font-bold text-foreground">April 10, 2026</div>
              </div>
            </div>
          </div>

          {/* Correction Areas */}
          <div className="bg-card border-2 border-border rounded-lg overflow-hidden mb-6">
            <div className="bg-muted border-b-2 border-border px-8 py-4">
              <h2 className="font-bold text-foreground">What needs to be corrected?</h2>
            </div>
            <div className="p-8 space-y-4">
              
              <CorrectionOption
                checked={corrections.personalInfo}
                onChange={(val) => setCorrections({...corrections, personalInfo: val})}
                label="Personal Information"
                description="Update name, date of birth, contact details, etc."
                link="/reference-service/certificate/form/personal"
              />

              <CorrectionOption
                checked={corrections.addressInfo}
                onChange={(val) => setCorrections({...corrections, addressInfo: val})}
                label="Address Details"
                description="Update residential address information"
                link="/reference-service/certificate/form/address"
              />

              <CorrectionOption
                checked={corrections.documents}
                onChange={(val) => setCorrections({...corrections, documents: val})}
                label="Upload New Documents"
                description="Replace or add documents (Recommended based on officer feedback)"
                link="/reference-service/certificate/document-upload"
                highlighted
              />

              <CorrectionOption
                checked={corrections.additionalInfo}
                onChange={(val) => setCorrections({...corrections, additionalInfo: val})}
                label="Additional Information"
                description="Update income, occupation, or other details"
                link="/reference-service/certificate/form/additional"
              />

            </div>
          </div>

          {/* Additional Comments */}
          <div className="bg-card border-2 border-border rounded-lg overflow-hidden mb-6">
            <div className="bg-muted border-b-2 border-border px-8 py-4">
              <h2 className="font-bold text-foreground">Additional Comments (Optional)</h2>
            </div>
            <div className="p-8">
              <textarea
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                rows={4}
                placeholder="Any additional information or explanation you want to provide to the officer..."
                className="w-full px-4 py-3 border-2 border-border rounded text-sm focus:outline-none focus:border-primary"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Link
              to="/reference-service/certificate/status-tracker"
              className="flex-1 px-6 py-4 border-2 border-border bg-card text-muted-foreground font-bold rounded text-center hover:bg-background"
            >
              View Application Status
            </Link>
            <button
              onClick={handleSubmit}
              disabled={!Object.values(corrections).some(v => v) && !comments}
              className={`flex-1 px-6 py-4 font-bold rounded flex items-center justify-center gap-2 ${
                Object.values(corrections).some(v => v) || comments
                  ? 'bg-green-700 text-white hover:bg-green-600'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Submit Corrections
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Help Note */}
          <div className="mt-6 bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-300 rounded-lg p-5">
            <h3 className="font-bold text-foreground mb-2 text-sm">Need Help?</h3>
            <p className="text-sm text-muted-foreground mb-3">
              If you need clarification on what corrections are needed, please contact support or respond with your questions in the comments above.
            </p>
            <Link to="/reference-service/certificate/help" className="text-sm text-primary font-bold hover:underline">
              Contact Support →
            </Link>
          </div>

        </div>
      </div>

      <footer className="bg-card border-t-2 border-border mt-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-8">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div>Certificate Application Service • Government of India</div>
            <div>Correction Request</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function CorrectionOption({ checked, onChange, label, description, link, highlighted }: any) {
  return (
    <div className={`border-2 rounded-lg p-5 ${
      highlighted ? 'border-orange-300 bg-orange-50' : 'border-border bg-background'
    }`}>
      <div className="flex items-start gap-4">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="w-5 h-5 mt-1 border-2 border-border rounded"
        />
        <div className="flex-1">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="font-bold text-foreground mb-1">
                {label}
                {highlighted && (
                  <span className="ml-2 text-xs bg-orange-600 text-white px-2 py-1 rounded">RECOMMENDED</span>
                )}
              </h3>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
          </div>
          {checked && (
            <Link
              to={link}
              className="inline-flex items-center gap-2 mt-3 px-4 py-2 bg-primary text-white font-bold rounded text-sm hover:opacity-90"
            >
              <Edit3 size={14} />
              Edit This Section
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
