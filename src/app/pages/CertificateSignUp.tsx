import { SignUpService } from "../components/auth/SignUpService";

export default function CertificateSignUp() {
  return (
    <SignUpService
      category="Certificate Application Service"
      title="Create New Account"
      subtitle="Register to Apply"
      backLink="/reference-service/demo"
      backText="Back to Service Home"
      signInPath="/reference-service/certificate/sign-in"
      verifyOtpPath="/reference-service/certificate/verify-otp"
      helpPath="/reference-service/certificate/help"
      codeDownloadPath="/resources/service-code-downloads#certificate-sign-up"
      serviceName="Certificate Application Service"
    />
  );
}
