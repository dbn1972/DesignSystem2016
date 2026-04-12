import { StatusTrackerService } from "../components/service/StatusTrackerService";

export default function CertificateStatusTracker() {
  return (
    <StatusTrackerService
      category="Certificate Application Service"
      title="Application Status Tracker"
      serviceName="Certificate Application Service"
      homePath="/reference-service/demo"
      codeDownloadPath="/resources/service-code-downloads#certificate-status-tracker"
    />
  );
}
