import { StatusTrackerService } from "../components/service/StatusTrackerService";

export default function CompanyRegStatusTracker() {
  return (
    <StatusTrackerService
      category="Company Registration Service"
      title="Application Status Tracker"
      serviceName="Company Registration Service (MCA)"
      homePath="/services/company-registration"
    />
  );
}
