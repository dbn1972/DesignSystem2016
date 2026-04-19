import { EligibilityService } from "../components/service/EligibilityService";

export default function TradeLicenseEligibility() {
  return (
    <EligibilityService
      category="Trade License Service"
      title="Check Your Eligibility"
      serviceName="Trade License Service (Municipal Corporation)"
      homePath="/services/trade-license"
      signInPath="/services/trade-license/start"
      signUpPath="/services/trade-license/start"
      helpPath="/services/trade-license/help"
    />
  );
}
