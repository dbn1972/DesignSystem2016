import { StatusTrackerService } from "../components/service/StatusTrackerService";

export default function TradeLicenseStatusTracker() {
  return (
    <StatusTrackerService
      category="Trade License Service"
      title="Application Status Tracker"
      serviceName="Trade License Service (Municipal Corporation)"
      homePath="/services/trade-license"
    />
  );
}
