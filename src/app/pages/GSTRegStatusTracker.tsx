import { StatusTrackerService } from "../components/service/StatusTrackerService";

export default function GSTRegStatusTracker() {
  return (
    <StatusTrackerService
      category="GST Registration Service"
      title="Application Status Tracker"
      serviceName="GST Registration Service (CBIC)"
      homePath="/services/gst-registration"
    />
  );
}
