import { AdditionalFormService } from "../components/service/AdditionalFormService";

export default function IECRegFormEntityType() {
  return (
    <AdditionalFormService
      category="Apply for Import Export Code"
      title="Step 1 of 4: Select Entity Type"
      serviceName="Import Export Code (IEC) Registration Service (DGFT)"
      backPath="/services/iec-registration/start"
      nextPath="/services/iec-registration/form/details"
    />
  );
}
