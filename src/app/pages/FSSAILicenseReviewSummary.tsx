import { ReviewSummaryService } from "../components/service/ReviewSummaryService";

export default function FSSAILicenseReviewSummary() {
  return (
    <ReviewSummaryService
      category="FSSAI Food License Service"
      title="Review Summary"
      serviceName="FSSAI Food License Service (FSSAI)"
      editPersonalPath="/services/fssai-license/form/details"
      editAddressPath="/services/fssai-license/form/address"
      editAdditionalPath="/services/fssai-license/form/additional"
      editDocumentsPath="/services/fssai-license/document-upload"
      backPath="/services/fssai-license/document-upload"
      nextPath="/services/fssai-license/declaration"
    />
  );
}
