import { Link } from "react-router";
import { XCircle, MessageSquare, RefreshCw, HelpCircle } from "lucide-react";

export default function CertificateRejected() {
  const rejectionData = {
    refNumber: "CERT-2026-MH-876543",
    applicantName: "Priya Sharma",
    certificateType: "Income Certificate",
    rejectionDate: "April 15, 2026",
    reason: "Income proof document is not clear. The salary slip provided does not show all required details including employer name, employee ID, and monthly breakdown. Additionally, the document appears to be more than 3 months old.",
    officerName: "Suresh Mehta",
    officerDesignation: "Assistant Certifying Officer"
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card border-b-2 border-border">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-8 text-center">
          <div className="w-24 h-24 bg-red-100 rounded-full mx-auto mb-6 flex items-center justify-center border-4 border-red-600">
            <XCircle size={48} className="text-red-600" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Application Rejected</h1>
          <p className="text-muted-foreground">
            Your application has been reviewed and could not be approved
          </p>
        </div>
      </header>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-12">
        <div className="max-w-3xl mx-auto">
          
          {/* Reference Details */}
          <div className="bg-card border-2 border-border rounded-lg overflow-hidden mb-6">
            <div className="bg-red-50 dark:bg-red-950/30 border-b-2 border-red-300 px-8 py-6">
              <div className="text-sm text-muted-foreground mb-2">Reference Number</div>
              <div className="text-2xl font-bold text-foreground font-mono">{rejectionData.refNumber}</div>
            </div>
            <div className="p-8">
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <div className="text-xs text-muted-foreground mb-1">Applicant Name</div>
                  <div className="text-sm font-bold text-foreground">{rejectionData.applicantName}</div>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground mb-1">Certificate Type</div>
                  <div className="text-sm font-bold text-foreground">{rejectionData.certificateType}</div>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground mb-1">Rejection Date</div>
                  <div className="text-sm font-bold text-foreground">{rejectionData.rejectionDate}</div>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground mb-1">Reviewed By</div>
                  <div className="text-sm font-bold text-foreground">{rejectionData.officerName}</div>
                  <div className="text-xs text-muted-foreground">{rejectionData.officerDesignation}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Rejection Reason */}
          <div className="bg-card border-2 border-border rounded-lg overflow-hidden mb-6">
            <div className="bg-muted border-b-2 border-border px-8 py-4 flex items-center gap-2">
              <MessageSquare size={20} className="text-muted-foreground" />
              <h2 className="font-bold text-foreground">Reason for Rejection</h2>
            </div>
            <div className="p-8">
              <p className="text-sm text-muted-foreground leading-relaxed">{rejectionData.reason}</p>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-orange-50 dark:bg-orange-950/30 border-2 border-orange-300 rounded-lg p-8 mb-6">
            <h3 className="font-bold text-foreground mb-4">What Can You Do Next?</h3>
            <div className="space-y-4">
              <Option
                icon={<RefreshCw size={20} />}
                title="Resubmit Application"
                description="Fix the issues mentioned and submit a new application with correct documents"
                link="/reference-service/certificate/start"
                linkText="Start New Application"
              />
              <Option
                icon={<HelpCircle size={20} />}
                title="Contact Support"
                description="If you believe this rejection was incorrect or need clarification"
                link="/reference-service/certificate/help"
                linkText="Get Help"
              />
            </div>
          </div>

        </div>
      </div>

      <footer className="bg-card border-t-2 border-border mt-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-8">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div>Certificate Application Service • Government of India</div>
            <div>Application Rejected</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Option({ icon, title, description, link, linkText }: any) {
  return (
    <div className="bg-card border-2 border-border rounded-lg p-6">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
          {icon}
        </div>
        <div className="flex-1">
          <h4 className="font-bold text-foreground mb-2">{title}</h4>
          <p className="text-sm text-muted-foreground mb-4">{description}</p>
          <Link
            to={link}
            className="inline-block px-6 py-3 bg-primary text-white font-bold rounded text-sm hover:opacity-90"
          >
            {linkText}
          </Link>
        </div>
      </div>
    </div>
  );
}
