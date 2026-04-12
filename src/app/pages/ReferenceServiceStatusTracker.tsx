import { StatusTrackerService } from "../components/service/StatusTrackerService";

export default function ReferenceServiceStatusTracker() {
  return (
    <StatusTrackerService
      category="Government Service Access"
      title="Application Status Tracker"
      serviceName="Government Service Platform"
      homePath="/reference-service/overview"
      codeDownloadPath="/resources/service-code-downloads#reusable-status-tracker"
    />
  );
}
