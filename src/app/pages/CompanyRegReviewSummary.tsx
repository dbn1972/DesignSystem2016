import { ReviewSummaryService } from "../components/service/ReviewSummaryService";

export default function CompanyRegReviewSummary() {
  return (
    <ReviewSummaryService
      category="Company Registration Service"
      title="Review Summary"
      serviceName="Company Registration Service (MCA)"
      editPersonalPath="/services/company-registration/form/directors"
      editAddressPath="/services/company-registration/form/address"
      editAdditionalPath="/services/company-registration/form/additional"
      editDocumentsPath="/services/company-registration/document-upload"
      backPath="/services/company-registration/document-upload"
      nextPath="/services/company-registration/declaration"
    />
  );
}
