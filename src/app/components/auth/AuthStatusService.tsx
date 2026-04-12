import { Link } from "react-router";
import { AlertCircle, ArrowLeft, Clock, Lock, LogIn, Wrench, Download } from "lucide-react";

import { InfoBanner } from "../certificate/InfoBanner";
import { ServiceFooter } from "../certificate/ServiceFooter";
import { ServiceHeader } from "../certificate/ServiceHeader";

export type AuthStatusType = "session-expired" | "locked-account" | "service-unavailable";

interface AuthStatusServiceProps {
  status: AuthStatusType;
  category: string;
  title: string;
  signInPath: string;
  homePath: string;
  helpPath: string;
  codeDownloadPath?: string;
  serviceName: string;
}

const statusConfig: Record<
  AuthStatusType,
  {
    heading: string;
    description: string;
    icon: typeof Clock;
    iconColor: string;
    panelVariant: "warning" | "error";
    actionLabel: string;
    actionTo: string;
  }
> = {
  "session-expired": {
    heading: "Session Expired",
    description:
      "Your session has expired due to inactivity. Sign in again to continue securely.",
    icon: Clock,
    iconColor: "bg-orange-600",
    panelVariant: "warning",
    actionLabel: "Sign In Again",
    actionTo: "?state=session-expired",
  },
  "locked-account": {
    heading: "Account Locked",
    description:
      "Your account is temporarily locked after multiple unsuccessful attempts.",
    icon: Lock,
    iconColor: "bg-red-700",
    panelVariant: "error",
    actionLabel: "Go to Sign In",
    actionTo: "?state=locked-account",
  },
  "service-unavailable": {
    heading: "Service Unavailable",
    description:
      "Sign-in services are currently unavailable. Please try again shortly.",
    icon: Wrench,
    iconColor: "bg-red-700",
    panelVariant: "error",
    actionLabel: "Try Sign In",
    actionTo: "?state=service-unavailable",
  },
};

export function AuthStatusService({
  status,
  category,
  title,
  signInPath,
  homePath,
  helpPath,
  codeDownloadPath,
  serviceName,
}: AuthStatusServiceProps) {
  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <div className="min-h-screen bg-gray-50">
      <ServiceHeader icon={Icon} iconColor={config.iconColor} category={category} title={title} />

      <main className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-8 lg:py-12">
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="bg-white border-2 border-gray-300 rounded-lg p-6 sm:p-8 space-y-5">
            <InfoBanner
              variant={config.panelVariant === "warning" ? "warning" : "error"}
              title={config.heading}
              message={config.description}
            />

            <div className="space-y-3">
              <Link
                to={`${signInPath}${config.actionTo}`}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#000080] text-white font-bold rounded text-sm hover:bg-blue-900"
              >
                <LogIn size={16} />
                {config.actionLabel}
              </Link>

              <Link
                to={homePath}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 border-2 border-gray-300 bg-white text-gray-800 font-bold rounded text-sm hover:bg-gray-50"
              >
                <ArrowLeft size={16} />
                Return to Service Home
              </Link>
            </div>
          </div>

          <InfoBanner
            variant="info"
            icon={AlertCircle}
            title="Need Help?"
            message="If this issue persists, contact support. Your previously saved data remains secure."
          >
            <Link to={helpPath} className="inline-flex items-center gap-2 mt-3 text-sm font-bold text-[#000080] hover:underline">
              <ArrowLeft size={14} className="rotate-180" />
              Contact support
            </Link>
            {codeDownloadPath && (
              <Link to={codeDownloadPath} className="inline-flex items-center gap-2 mt-3 ml-4 text-sm font-bold text-[#000080] hover:underline">
                <Download size={14} />
                Download React code
              </Link>
            )}
          </InfoBanner>
        </div>
      </main>

      <ServiceFooter leftText={`${serviceName} • Government of India`} rightText="Authentication Status" />
    </div>
  );
}
