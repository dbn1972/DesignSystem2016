import { AdditionalFormService } from "../components/service/AdditionalFormService";

export default function MSMERegFormAdditional() {
  return (
    <AdditionalFormService
      category="Register Your Enterprise"
      title="Step 4 of 4: Investment & Turnover Details"
      serviceName="MSME/Udyam Registration Service (Ministry of MSME)"
      backPath="/services/msme-registration/form/address"
      nextPath="/services/msme-registration/document-upload"
    />
  );
}
