import { ForgotPasswordService } from "../components/auth/ForgotPasswordService";

export default function ReferenceServiceForgotPassword() {
  return (
    <ForgotPasswordService
      category="Government Service Access"
      title="Reset Your Password"
      backLink="/reference-service/sign-in"
      backText="Back to Sign In"
      signInPath="/reference-service/sign-in"
      helpPath="/patterns/contact-support/service-support"
      codeDownloadPath="/resources/service-code-downloads#reusable-forgot-password"
      serviceName="Government Service Platform"
    />
  );
}
