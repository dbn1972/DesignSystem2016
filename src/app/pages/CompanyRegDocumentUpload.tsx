import { DocumentUploadService } from "../components/service/DocumentUploadService";

export default function CompanyRegDocumentUpload() {
  return (
    <DocumentUploadService
      category="Company Registration Service"
      title="Document Upload"
      serviceName="Company Registration Service (MCA)"
      previousPath="/services/company-registration/form/additional"
      nextPath="/services/company-registration/review-summary"
    />
  );
}
