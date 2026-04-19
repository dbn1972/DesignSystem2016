import { StatusTrackerService } from "../components/service/StatusTrackerService";

export default function FSSAILicenseStatusTracker() {
  return (
    <StatusTrackerService
      category="FSSAI Food License Service"
      title="Application Status Tracker"
      serviceName="FSSAI Food License Service (FSSAI)"
      homePath="/services/fssai-license"
    />
  );
}
