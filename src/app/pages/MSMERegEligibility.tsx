import { EligibilityService } from "../components/service/EligibilityService";

export default function MSMERegEligibility() {
  return (
    <EligibilityService
      category="MSME/Udyam Registration Service"
      title="Check Your Eligibility"
      serviceName="MSME/Udyam Registration Service (Ministry of MSME)"
      homePath="/services/msme-registration"
      signInPath="/services/msme-registration/start"
      signUpPath="/services/msme-registration/start"
      helpPath="/services/msme-registration/help"
    />
  );
}
