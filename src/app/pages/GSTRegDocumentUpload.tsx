import { DocumentUploadService } from "../components/service/DocumentUploadService";

export default function GSTRegDocumentUpload() {
  return (
    <DocumentUploadService
      category="GST Registration Service"
      title="Document Upload"
      serviceName="GST Registration Service (CBIC)"
      previousPath="/services/gst-registration/form/additional"
      nextPath="/services/gst-registration/review-summary"
    />
  );
}
