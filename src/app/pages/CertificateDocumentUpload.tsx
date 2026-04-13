import { DocumentUploadService } from "../components/service/DocumentUploadService";

export default function CertificateDocumentUpload() {
  return (
    <DocumentUploadService
      category="Certificate Application Service"
      title="Document Upload"
      serviceName="Certificate Application Service"
      previousPath="/reference-service/certificate/form/additional"
      nextPath="/reference-service/certificate/review-summary"
      codeDownloadPath="/resources/service-code-downloads#certificate-document-upload"
    />
  );
}
