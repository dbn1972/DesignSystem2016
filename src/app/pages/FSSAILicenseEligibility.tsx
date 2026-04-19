import { EligibilityService } from "../components/service/EligibilityService";

export default function FSSAILicenseEligibility() {
  return (
    <EligibilityService
      category="FSSAI Food License Service"
      title="Check Your Eligibility"
      serviceName="FSSAI Food License Service (FSSAI)"
      homePath="/services/fssai-license"
      signInPath="/services/fssai-license/start"
      signUpPath="/services/fssai-license/start"
      helpPath="/services/fssai-license/help"
    />
  );
}
