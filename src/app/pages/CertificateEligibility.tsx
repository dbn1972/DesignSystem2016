import { EligibilityService } from "../components/service/EligibilityService";

export default function CertificateEligibility() {
  return (
    <EligibilityService
      category="Certificate Application Service"
      title="Check Your Eligibility"
      serviceName="Certificate Application Service"
      homePath="/reference-service/demo"
      signInPath="/reference-service/certificate/sign-in"
      signUpPath="/reference-service/certificate/sign-up"
      helpPath="/reference-service/certificate/help"
      codeDownloadPath="/resources/service-code-downloads#certificate-eligibility"
    />
  );
}
