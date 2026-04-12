import { OtpVerificationService } from "../components/auth/OtpVerificationService";

export default function ReferenceServiceVerifyOTP() {
  return (
    <OtpVerificationService
      category="Government Service Access"
      title="Verify OTP"
      backLink="/reference-service/sign-in"
      backText="Back to Sign In"
      successRedirectPath="/reference-service/demo"
      helpPath="/patterns/contact-support/service-support"
      codeDownloadPath="/resources/service-code-downloads#reusable-otp"
      serviceName="Government Service Platform"
      identifier="9876543210"
    />
  );
}
