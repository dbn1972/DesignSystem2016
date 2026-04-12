import { OtpVerificationService } from "../components/auth/OtpVerificationService";

export default function CertificateVerifyOTP() {
  return (
    <OtpVerificationService
      category="Certificate Application Service"
      title="Verify OTP"
      backLink="/reference-service/certificate/sign-up"
      backText="Back to Sign Up"
      successRedirectPath="/reference-service/certificate/start"
      helpPath="/reference-service/certificate/help"
      codeDownloadPath="/resources/service-code-downloads#certificate-otp"
      serviceName="Certificate Application Service"
      identifier="9876543210"
    />
  );
}
