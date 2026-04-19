import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Scale, Upload, ArrowRight, AlertCircle } from "lucide-react";

export default function CertificateAppeal() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    reason: "",
    supportingEvidence: "",
    newDocuments: false
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const rejectionData = {
    refNumber: "CERT-2026-MH-876543",
    certificateType: "Income Certificate",
    rejectionDate: "April 15, 2026",
    rejectionReason: "Income proof document is not clear and appears outdated"
  };

  const handleSubmit = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.reason.trim()) newErrors.reason = "Please provide reason for appeal";
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    navigate("/reference-service/certificate/submission-success");
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card border-b-2 border-border">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-6">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 bg-indigo-600 rounded flex items-center justify-center">
              <Scale size={28} className="text-white" />
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Application Appeal</div>
              <h1 className="text-2xl font-bold text-foreground">File an Appeal</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-12">
        <div className="max-w-3xl mx-auto">
          
          {/* Info Banner */}
          <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-300 rounded-lg p-6 mb-8">
            <h2 className="font-bold text-foreground mb-3">About Appeals</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              If you believe your application was rejected incorrectly or unfairly, you can file an appeal. 
              Your appeal will be reviewed by a senior officer who will make a fresh decision.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span>Appeal will be reviewed within 7 working days</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span>You can submit additional evidence or corrected documents</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span>Appeal decision is final and binding</span>
              </li>
            </ul>
          </div>

          {/* Rejection Details */}
          <div className="bg-card border-2 border-border rounded-lg overflow-hidden mb-6">
            <div className="bg-red-50 dark:bg-red-950/30 border-b-2 border-red-300 px-8 py-4">
              <h2 className="font-bold text-foreground">Rejected Application Details</h2>
            </div>
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <div className="text-xs text-muted-foreground mb-1">Reference Number</div>
                  <div className="text-sm font-bold text-foreground font-mono">{rejectionData.refNumber}</div>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground mb-1">Certificate Type</div>
                  <div className="text-sm font-bold text-foreground">{rejectionData.certificateType}</div>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground mb-1">Rejection Date</div>
                  <div className="text-sm font-bold text-foreground">{rejectionData.rejectionDate}</div>
                </div>
              </div>
              <div>
                <div className="text-xs text-muted-foreground mb-2">Reason for Rejection</div>
                <div className="p-4 bg-red-50 dark:bg-red-950/30 border-2 border-red-300 rounded text-sm text-muted-foreground">
                  {rejectionData.rejectionReason}
                </div>
              </div>
            </div>
          </div>

          {/* Appeal Form */}
          <div className="bg-card border-2 border-border rounded-lg overflow-hidden mb-6">
            <div className="bg-muted border-b-2 border-border px-8 py-4">
              <h2 className="font-bold text-foreground">Appeal Information</h2>
            </div>
            <div className="p-8 space-y-6">
              
              {/* Reason */}
              <div>
                <label className="block text-sm font-bold text-foreground mb-2">
                  Reason for Appeal <span className="text-red-600">*</span>
                </label>
                <textarea
                  value={formData.reason}
                  onChange={(e) => {
                    setFormData({...formData, reason: e.target.value});
                    setErrors({...errors, reason: undefined});
                  }}
                  rows={6}
                  placeholder="Explain why you believe the rejection was incorrect. Provide specific details and facts to support your appeal."
                  className={`w-full px-4 py-3 border-2 rounded text-sm ${
                    errors.reason ? 'border-red-300 bg-red-50' : 'border-border'
                  } focus:outline-none focus:border-primary`}
                />
                {errors.reason && (
                  <div className="mt-2 flex items-start gap-2 text-sm text-red-700 dark:text-red-400">
                    <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
                    <span>{errors.reason}</span>
                  </div>
                )}
                <p className="mt-2 text-xs text-muted-foreground">
                  Provide a clear explanation. Be specific and factual.
                </p>
              </div>

              {/* Supporting Evidence */}
              <div>
                <label className="block text-sm font-bold text-foreground mb-2">
                  Supporting Evidence (Optional)
                </label>
                <textarea
                  value={formData.supportingEvidence}
                  onChange={(e) => setFormData({...formData, supportingEvidence: e.target.value})}
                  rows={4}
                  placeholder="List any evidence or documents that support your appeal (e.g., updated documents, additional proof, witness statements)"
                  className="w-full px-4 py-3 border-2 border-border rounded text-sm focus:outline-none focus:border-primary"
                />
              </div>

              {/* New Documents */}
              <div className="bg-orange-50 dark:bg-orange-950/30 border-2 border-orange-300 rounded-lg p-5">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.newDocuments}
                    onChange={(e) => setFormData({...formData, newDocuments: e.target.checked})}
                    className="w-5 h-5 mt-0.5 border-2 border-border rounded"
                  />
                  <div className="flex-1">
                    <span className="font-bold text-foreground block mb-2">
                      I have new or corrected documents to submit
                    </span>
                    <p className="text-sm text-muted-foreground">
                      If you have obtained corrected or additional documents since rejection, 
                      you can upload them as part of your appeal.
                    </p>
                  </div>
                </label>
                
                {formData.newDocuments && (
                  <div className="mt-4 pt-4 border-t-2 border-orange-300">
                    <button className="flex items-center gap-2 px-4 py-3 border-2 border-dashed border-primary bg-blue-50 dark:bg-blue-950/30 rounded text-sm font-bold text-primary hover:bg-blue-100 w-full justify-center">
                      <Upload size={18} />
                      Upload New Documents
                    </button>
                  </div>
                )}
              </div>

            </div>
          </div>

          {/* Warning */}
          <div className="bg-orange-50 dark:bg-orange-950/30 border-2 border-orange-300 rounded-lg p-5 mb-6">
            <div className="flex items-start gap-3">
              <AlertCircle size={20} className="text-orange-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-foreground mb-2 text-sm">Important Notice</h3>
                <p className="text-sm text-muted-foreground">
                  Appeals are reviewed carefully, but please note that the appeal decision is final. 
                  If your appeal is also rejected, you will need to submit a fresh application with 
                  corrected documents.
                </p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Link
              to="/reference-service/certificate/rejected"
              className="flex-1 px-6 py-4 border-2 border-border bg-card text-muted-foreground font-bold rounded text-center hover:bg-background"
            >
              Cancel
            </Link>
            <button
              onClick={handleSubmit}
              className="flex-1 px-6 py-4 bg-primary text-white font-bold rounded flex items-center justify-center gap-2 hover:opacity-90"
            >
              Submit Appeal
              <ArrowRight size={18} />
            </button>
          </div>

        </div>
      </div>

      <footer className="bg-card border-t-2 border-border mt-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-8">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div>Certificate Application Service • Government of India</div>
            <div>File Appeal</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
