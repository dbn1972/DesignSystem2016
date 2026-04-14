import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { getDeclarationDisplayName, loadReviewSummaryData } from '../reviewDeclarationService';
import { saveCertificateDraft, getEmptyCertificateDraft } from '../certificateFlow';

describe('getDeclarationDisplayName', () => {
  it('returns the trimmed full name when provided', () => {
    expect(getDeclarationDisplayName('Priya Sharma')).toBe('Priya Sharma');
  });

  it('trims whitespace from the name', () => {
    expect(getDeclarationDisplayName('  Rahul Singh  ')).toBe('Rahul Singh');
  });

  it('returns "the applicant" when name is empty', () => {
    expect(getDeclarationDisplayName('')).toBe('the applicant');
  });

  it('returns "the applicant" when name is only whitespace', () => {
    expect(getDeclarationDisplayName('   ')).toBe('the applicant');
  });
});

describe('loadReviewSummaryData', () => {
  const STORAGE_KEY = 'ux4g.certificate.draft.v1';

  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('returns a draft and uploadedCount', () => {
    const data = loadReviewSummaryData();
    expect(data).toHaveProperty('draft');
    expect(data).toHaveProperty('uploadedCount');
  });

  it('uploadedCount reflects number of uploaded documents', () => {
    const draft = getEmptyCertificateDraft();
    draft.documents[0].status = 'uploaded';
    draft.documents[1].status = 'uploaded';
    saveCertificateDraft(draft);

    const data = loadReviewSummaryData();
    expect(data.uploadedCount).toBe(2);
  });

  it('uploadedCount is 0 when no documents are uploaded', () => {
    const data = loadReviewSummaryData();
    expect(data.uploadedCount).toBe(0);
  });
});
