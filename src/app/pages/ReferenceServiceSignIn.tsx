import { useSearchParams } from "react-router";
import { SignInService } from "../components/auth/SignInService";
import { mapSignInStateFromQuery } from "../services/signInService";

export default function ReferenceServiceSignIn() {
  const [searchParams] = useSearchParams();
  const initialState = mapSignInStateFromQuery(searchParams.get("state"));

  return (
    <SignInService
      category="Government Service Access"
      title="Sign In"
      subtitle="Access Your Service Account"
      backLink="/reference-service/overview"
      backText="Back to Reference Services"
      successRedirectPath="/reference-service/demo"
      forgotPasswordPath="/reference-service/forgot-password"
      otpSignInPath="/reference-service/verify-otp"
      helpPath="/patterns/contact-support/service-support"
      signUpPath="/reference-service/sign-up"
      codeDownloadPath="/resources/service-code-downloads#reusable-sign-in"
      serviceName="Government Service Platform"
      initialState={initialState}
      successMessage="Sign in successful. Redirecting to your service dashboard..."
    />
  );
}
