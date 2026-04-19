import { DocumentUploadService } from "../components/service/DocumentUploadService";

export default function TradeLicenseDocumentUpload() {
  return (
    <DocumentUploadService
      category="Trade License Service"
      title="Document Upload"
      serviceName="Trade License Service (Municipal Corporation)"
      previousPath="/services/trade-license/form/additional"
      nextPath="/services/trade-license/review-summary"
    />
  );
}
