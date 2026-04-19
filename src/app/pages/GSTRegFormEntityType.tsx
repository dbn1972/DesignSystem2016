import { AdditionalFormService } from "../components/service/AdditionalFormService";

export default function GSTRegFormEntityType() {
  return (
    <AdditionalFormService
      category="Apply for GST Registration"
      title="Step 1 of 4: Select Registration Type"
      serviceName="GST Registration Service (CBIC)"
      backPath="/services/gst-registration/start"
      nextPath="/services/gst-registration/form/details"
    />
  );
}
