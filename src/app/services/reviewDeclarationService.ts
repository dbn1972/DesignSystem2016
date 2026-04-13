import { loadCertificateDraft, type CertificateDraft } from "./certificateFlow";

export interface ReviewSummaryData {
  draft: CertificateDraft;
  uploadedCount: number;
}

export const loadReviewSummaryData = (): ReviewSummaryData => {
  const draft = loadCertificateDraft();
  const uploadedCount = draft.documents.filter((doc) => doc.status === "uploaded").length;

  return {
    draft,
    uploadedCount,
  };
};

export const getDeclarationDisplayName = (fullName: string): string =>
  fullName?.trim() || "the applicant";
