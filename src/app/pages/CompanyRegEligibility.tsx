import { EligibilityService } from "../components/service/EligibilityService";

export default function CompanyRegEligibility() {
  return (
    <EligibilityService
      category="Company Registration Service"
      title="Check Your Eligibility"
      serviceName="Company Registration Service (MCA)"
      homePath="/services/company-registration"
      signInPath="/services/company-registration/start"
      signUpPath="/services/company-registration/start"
      helpPath="/services/company-registration/help"
    />
  );
}
