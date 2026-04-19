import { AdditionalFormService } from "../components/service/AdditionalFormService";

export default function GSTRegFormAdditional() {
  return (
    <AdditionalFormService
      category="Apply for GST Registration"
      title="Step 4 of 4: Bank & Verification Details"
      serviceName="GST Registration Service (CBIC)"
      backPath="/services/gst-registration/form/address"
      nextPath="/services/gst-registration/document-upload"
    />
  );
}
