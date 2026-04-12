import { useSearchParams } from "react-router";

import { AuthStatusService, type AuthStatusType } from "../components/auth/AuthStatusService";

const parseStatus = (value: string | null): AuthStatusType => {
  if (value === "locked-account") return "locked-account";
  if (value === "service-unavailable") return "service-unavailable";
  return "session-expired";
};

export default function ReferenceServiceAuthStatus() {
  const [searchParams] = useSearchParams();
  const status = parseStatus(searchParams.get("state"));

  return (
    <AuthStatusService
      status={status}
      category="Government Service Access"
      title="Authentication Status"
      signInPath="/reference-service/sign-in"
      homePath="/reference-service/overview"
      helpPath="/patterns/contact-support/service-support"
      codeDownloadPath="/resources/service-code-downloads#reusable-auth-status"
      serviceName="Government Service Platform"
    />
  );
}
