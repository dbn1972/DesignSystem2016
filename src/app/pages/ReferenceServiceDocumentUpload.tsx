import { DocumentUploadService } from "../components/service/DocumentUploadService";

export default function ReferenceServiceDocumentUpload() {
  return (
    <DocumentUploadService
      category="Government Service Access"
      title="Document Upload"
      serviceName="Government Service Platform"
      previousPath="/reference-service/start"
      nextPath="/reference-service/status-tracker"
      codeDownloadPath="/resources/service-code-downloads#reusable-document-upload"
    />
  );
}
