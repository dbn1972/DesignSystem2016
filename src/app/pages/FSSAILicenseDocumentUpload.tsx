import { DocumentUploadService } from "../components/service/DocumentUploadService";

export default function FSSAILicenseDocumentUpload() {
  return (
    <DocumentUploadService
      category="FSSAI Food License Service"
      title="Document Upload"
      serviceName="FSSAI Food License Service (FSSAI)"
      previousPath="/services/fssai-license/form/additional"
      nextPath="/services/fssai-license/review-summary"
    />
  );
}
