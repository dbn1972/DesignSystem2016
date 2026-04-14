import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import {
  loadPaymentSummaryData,
  loadPaymentReceiptData,
  loadPaymentReceiptDataOrFallback,
  preparePaymentAttempt,
  executePaymentAttempt,
} from '../paymentService';
import {
  saveCertificateDraft,
  getEmptyCertificateDraft,
  loadCertificateDraft,
  saveCertificateApplications,
  getCertificateApplications,
  getFallbackApplications,
} from '../certificateFlow';

describe('loadPaymentSummaryData', () => {
  beforeEach(() => localStorage.clear());
  afterEach(() => localStorage.clear());

  it('returns lineItems array and totalAmount', () => {
    const data = loadPaymentSummaryData();
    expect(Array.isArray(data.lineItems)).toBe(true);
    expect(data.lineItems.length).toBeGreaterThan(0);
    expect(typeof data.totalAmount).toBe('number');
  });

  it('totalAmount reflects draft payment amount', () => {
    const draft = getEmptyCertificateDraft();
    draft.payment.amount = 250;
    saveCertificateDraft(draft);

    const data = loadPaymentSummaryData();
    expect(data.totalAmount).toBe(250);
  });

  it('each line item has a label and numeric amount', () => {
    const data = loadPaymentSummaryData();
    data.lineItems.forEach((item) => {
      expect(typeof item.label).toBe('string');
      expect(typeof item.amount).toBe('number');
    });
  });
});

describe('preparePaymentAttempt', () => {
  beforeEach(() => localStorage.clear());
  afterEach(() => localStorage.clear());

  it('sets payment status to processing in the draft', () => {
    preparePaymentAttempt();
    const loaded = loadCertificateDraft();
    expect(loaded.payment.status).toBe('processing');
  });
});

describe('executePaymentAttempt', () => {
  beforeEach(() => localStorage.clear());
  afterEach(() => localStorage.clear());

  it('returns success with referenceNumber on second attempt (mock retry logic)', () => {
    // First attempt always fails in the mock (attempts=0 → fails, attempts=1 → succeeds)
    const draft = getEmptyCertificateDraft();
    draft.payment.attempts = 1; // pre-set so next attempt succeeds
    saveCertificateDraft(draft);

    const result = executePaymentAttempt();
    expect(result.success).toBe(true);
    if (result.success) {
      expect(typeof result.referenceNumber).toBe('string');
      expect(result.referenceNumber).toMatch(/^CERT-/);
    }
  });

  it('returns failure on first attempt', () => {
    // Fresh draft has attempts=0, so first attempt fails
    const result = executePaymentAttempt();
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.message).toBeTruthy();
    }
  });
});

describe('loadPaymentReceiptData', () => {
  beforeEach(() => localStorage.clear());
  afterEach(() => localStorage.clear());

  it('returns null when no application exists', () => {
    expect(loadPaymentReceiptData()).toBeNull();
  });

  it('returns receipt data when an application exists', () => {
    const apps = getFallbackApplications();
    saveCertificateApplications(apps);

    const data = loadPaymentReceiptData();
    expect(data).not.toBeNull();
    expect(data?.referenceNumber).toBeTruthy();
    expect(data?.total).toBeGreaterThan(0);
  });

  it('maps paymentStatus "success" to "Success"', () => {
    const apps = getFallbackApplications();
    apps[0].paymentStatus = 'success';
    saveCertificateApplications(apps);

    const data = loadPaymentReceiptData();
    expect(data?.paymentStatus).toBe('Success');
  });

  it('maps non-success paymentStatus to "Failed"', () => {
    const apps = getFallbackApplications();
    apps[0].paymentStatus = 'pending';
    saveCertificateApplications(apps);

    const data = loadPaymentReceiptData();
    expect(data?.paymentStatus).toBe('Failed');
  });
});

describe('loadPaymentReceiptDataOrFallback', () => {
  beforeEach(() => localStorage.clear());
  afterEach(() => localStorage.clear());

  it('always returns a valid receipt object', () => {
    const data = loadPaymentReceiptDataOrFallback();
    expect(data.transactionId).toBeTruthy();
    expect(data.referenceNumber).toBeTruthy();
    expect(data.total).toBeGreaterThan(0);
  });

  it('uses fallback data when no application exists', () => {
    const data = loadPaymentReceiptDataOrFallback();
    // Fallback has a known reference number
    expect(data.referenceNumber).toBe('CERT-2026-04-456789');
  });
});
