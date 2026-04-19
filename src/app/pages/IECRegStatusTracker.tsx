import { StatusTrackerService } from "../components/service/StatusTrackerService";

export default function IECRegStatusTracker() {
  return (
    <StatusTrackerService
      category="IEC Registration Service"
      title="Application Status Tracker"
      serviceName="Import Export Code (IEC) Registration Service (DGFT)"
      homePath="/services/iec-registration"
    />
  );
}
