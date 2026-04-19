import { EligibilityService } from "../components/service/EligibilityService";

export default function GSTRegEligibility() {
  return (
    <EligibilityService
      category="GST Registration Service"
      title="Check Your Eligibility"
      serviceName="GST Registration Service (CBIC)"
      homePath="/services/gst-registration"
      signInPath="/services/gst-registration/start"
      signUpPath="/services/gst-registration/start"
      helpPath="/services/gst-registration/help"
    />
  );
}
