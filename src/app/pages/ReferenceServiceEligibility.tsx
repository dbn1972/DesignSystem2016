import { EligibilityService } from "../components/service/EligibilityService";

export default function ReferenceServiceEligibility() {
  return (
    <EligibilityService
      category="Government Service Access"
      title="Check Your Eligibility"
      serviceName="Government Service Platform"
      homePath="/reference-service/overview"
      signInPath="/reference-service/sign-in"
      signUpPath="/reference-service/sign-up"
      helpPath="/patterns/contact-support/service-support"
      codeDownloadPath="/resources/service-code-downloads#reusable-eligibility"
    />
  );
}
