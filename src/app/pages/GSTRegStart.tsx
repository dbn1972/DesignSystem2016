import { ApplicationStartService } from "../components/service/ApplicationStartService";

export default function GSTRegStart() {
  return (
    <ApplicationStartService
      category="GST Registration Service"
      title="Apply for GST Registration"
      serviceName="GST Registration Service (CBIC)"
      applicantName="Rajesh Kumar"
      startFormPath="/services/gst-registration/form/entity-type"
      helpPath="/services/gst-registration/help"
    />
  );
}
