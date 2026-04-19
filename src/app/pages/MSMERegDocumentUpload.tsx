import { DocumentUploadService } from "../components/service/DocumentUploadService";

export default function MSMERegDocumentUpload() {
  return (
    <DocumentUploadService
      category="MSME/Udyam Registration Service"
      title="Document Upload"
      serviceName="MSME/Udyam Registration Service (Ministry of MSME)"
      previousPath="/services/msme-registration/form/additional"
      nextPath="/services/msme-registration/review-summary"
    />
  );
}
