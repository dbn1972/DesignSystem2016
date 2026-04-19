import { EligibilityService } from "../components/service/EligibilityService";

export default function IECRegEligibility() {
  return (
    <EligibilityService
      category="IEC Registration Service"
      title="Check Your Eligibility"
      serviceName="Import Export Code (IEC) Registration Service (DGFT)"
      homePath="/services/iec-registration"
      signInPath="/services/iec-registration/start"
      signUpPath="/services/iec-registration/start"
      helpPath="/services/iec-registration/help"
    />
  );
}
