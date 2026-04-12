import { AuthStatusService } from "../components/auth/AuthStatusService";

export default function CertificateSessionTimeout() {
  return (
    <AuthStatusService
      status="session-expired"
      category="Certificate Application Service"
      title="Session Status"
      signInPath="/reference-service/certificate/sign-in"
      homePath="/reference-service/demo"
      helpPath="/reference-service/certificate/help"
      codeDownloadPath="/resources/service-code-downloads#certificate-auth-status"
      serviceName="Certificate Application Service"
    />
  );
}
