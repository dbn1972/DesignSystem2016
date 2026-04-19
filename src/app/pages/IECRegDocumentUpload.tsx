import { DocumentUploadService } from "../components/service/DocumentUploadService";

export default function IECRegDocumentUpload() {
  return (
    <DocumentUploadService
      category="IEC Registration Service"
      title="Document Upload"
      serviceName="Import Export Code (IEC) Registration Service (DGFT)"
      previousPath="/services/iec-registration/form/additional"
      nextPath="/services/iec-registration/review-summary"
    />
  );
}
