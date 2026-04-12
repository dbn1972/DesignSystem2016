import { ForgotPasswordService } from "../components/auth/ForgotPasswordService";

export default function CertificateForgotPassword() {
  return (
    <ForgotPasswordService
      category="Certificate Application Service"
      title="Reset Your Password"
      backLink="/reference-service/certificate/sign-in"
      backText="Back to Sign In"
      signInPath="/reference-service/certificate/sign-in"
      helpPath="/reference-service/certificate/help"
      codeDownloadPath="/resources/service-code-downloads#certificate-forgot-password"
      serviceName="Certificate Application Service"
    />
  );
}
