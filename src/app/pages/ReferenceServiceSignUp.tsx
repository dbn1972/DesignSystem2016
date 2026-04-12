import { SignUpService } from "../components/auth/SignUpService";

export default function ReferenceServiceSignUp() {
  return (
    <SignUpService
      category="Government Service Access"
      title="Create Service Account"
      subtitle="Register for Government Services"
      backLink="/reference-service/overview"
      backText="Back to Reference Services"
      signInPath="/reference-service/sign-in"
      verifyOtpPath="/reference-service/verify-otp"
      helpPath="/patterns/contact-support/service-support"
      codeDownloadPath="/resources/service-code-downloads#reusable-sign-up"
      serviceName="Government Service Platform"
    />
  );
}
