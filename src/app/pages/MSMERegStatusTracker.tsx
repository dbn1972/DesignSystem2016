import { StatusTrackerService } from "../components/service/StatusTrackerService";

export default function MSMERegStatusTracker() {
  return (
    <StatusTrackerService
      category="MSME/Udyam Registration Service"
      title="Registration Status Tracker"
      serviceName="MSME/Udyam Registration Service (Ministry of MSME)"
      homePath="/services/msme-registration"
    />
  );
}
