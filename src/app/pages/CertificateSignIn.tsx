import { useSearchParams } from "react-router";
import { SignInService } from "../components/auth/SignInService";
import { mapSignInStateFromQuery } from "../services/signInService";

export default function CertificateSignIn() {
  const [searchParams] = useSearchParams();
  const initialState = mapSignInStateFromQuery(searchParams.get("state"));

  return (
    <SignInService
      category="Certificate Application Service"
      title="Sign In to Your Account"
      subtitle="Welcome Back"
      backLink="/reference-service/demo"
      backText="Back to Service Home"
      successRedirectPath="/reference-service/certificate/start"
      forgotPasswordPath="/reference-service/certificate/forgot-password"
      otpSignInPath="/reference-service/certificate/verify-otp"
      helpPath="/reference-service/certificate/help"
      signUpPath="/reference-service/certificate/sign-up"
      codeDownloadPath="/resources/service-code-downloads#certificate-sign-in"
      serviceName="Certificate Application Service"
      initialState={initialState}
      successMessage="Sign in successful. Redirecting to application start..."
    />
  );
}
