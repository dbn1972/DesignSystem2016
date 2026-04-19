import { AdditionalFormService } from "../components/service/AdditionalFormService";

export default function IECRegFormAdditional() {
  return (
    <AdditionalFormService
      category="Apply for Import Export Code"
      title="Step 4 of 4: Bank & Additional Details"
      serviceName="Import Export Code (IEC) Registration Service (DGFT)"
      backPath="/services/iec-registration/form/address"
      nextPath="/services/iec-registration/document-upload"
    />
  );
}
