import { PersonalFormService } from "../components/service/PersonalFormService";

export default function GSTRegFormDetails() {
  return (
    <PersonalFormService
      category="Apply for GST Registration"
      title="Step 2 of 4: Business Details"
      serviceName="GST Registration Service (CBIC)"
      backPath="/services/gst-registration/form/entity-type"
      nextPath="/services/gst-registration/form/address"
    />
  );
}
