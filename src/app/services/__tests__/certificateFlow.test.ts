import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import {
  getEmptyCertificateDraft,
  loadCertificateDraft,
  saveCertificateDraft,
  updateCertificateDraft,
  clearCertificateDraft,
  getCertificateApplications,
  saveCertificateApplications,
  getCertificateNotifications,
  saveCertificateNotifications,
  markNotificationAsRead,
  markAllNotificationsRead,
  processCertificatePayment,
  submitCertificateApplication,
  getLatestCertificateApplication,
  setApplicationStatus,
  getFallbackApplications,
  type ServiceNotification,
} from '../certificateFlow';

beforeEach(() => localStorage.clear());
afterEach(() => localStorage.clear());

// ── getEmptyCertificateDraft ──────────────────────────────────────────────────

describe('getEmptyCertificateDraft', () => {
  it('returns a draft with 4 default documents', () => {
    const draft = getEmptyCertificateDraft();
    expect(draft.documents).toHaveLength(4);
  });

  it('all documents start as pending', () => {
    const draft = getEmptyCertificateDraft();
    draft.documents.forEach((doc) => expect(doc.status).toBe('pending'));
  });

  it('payment starts at 155 with 0 attempts', () => {
    const draft = getEmptyCertificateDraft();
    expect(draft.payment.amount).toBe(155);
    expect(draft.payment.attempts).toBe(0);
    expect(draft.payment.status).toBe('pending');
  });

  it('declarationAccepted starts as false', () => {
    expect(getEmptyCertificateDraft().declarationAccepted).toBe(false);
  });
});

// ── Draft persistence ─────────────────────────────────────────────────────────

describe('saveCertificateDraft / loadCertificateDraft', () => {
  it('persists and retrieves a draft', () => {
    const draft = getEmptyCertificateDraft();
    draft.personal.fullName = 'Priya Sharma';
    saveCertificateDraft(draft);

    const loaded = loadCertificateDraft();
    expect(loaded.personal.fullName).toBe('Priya Sharma');
  });

  it('returns empty draft when nothing is saved', () => {
    const loaded = loadCertificateDraft();
    expect(loaded.personal.fullName).toBe('');
  });

  it('merges saved data with defaults (no missing keys)', () => {
    const partial = { personal: { fullName: 'Test' } };
    localStorage.setItem('ux4g.certificate.draft.v1', JSON.stringify(partial));
    const loaded = loadCertificateDraft();
    // Should have all personal fields, not just fullName
    expect(loaded.personal.mobileNumber).toBe('');
  });
});

describe('updateCertificateDraft', () => {
  it('merges partial update into existing draft', () => {
    const draft = getEmptyCertificateDraft();
    draft.personal.fullName = 'Priya';
    saveCertificateDraft(draft);

    updateCertificateDraft({ declarationAccepted: true });

    const loaded = loadCertificateDraft();
    expect(loaded.declarationAccepted).toBe(true);
    expect(loaded.personal.fullName).toBe('Priya');
  });
});

describe('clearCertificateDraft', () => {
  it('removes draft from storage', () => {
    saveCertificateDraft(getEmptyCertificateDraft());
    clearCertificateDraft();
    expect(localStorage.getItem('ux4g.certificate.draft.v1')).toBeNull();
  });
});

// ── Applications ──────────────────────────────────────────────────────────────

describe('getCertificateApplications / saveCertificateApplications', () => {
  it('returns empty array when nothing saved', () => {
    expect(getCertificateApplications()).toEqual([]);
  });

  it('persists and retrieves applications', () => {
    const apps = getFallbackApplications();
    saveCertificateApplications(apps);
    const loaded = getCertificateApplications();
    expect(loaded).toHaveLength(1);
    expect(loaded[0].referenceNumber).toBe(apps[0].referenceNumber);
  });
});

// ── Notifications ─────────────────────────────────────────────────────────────

describe('notifications', () => {
  const makeNote = (id: string): ServiceNotification => ({
    id,
    type: 'info',
    title: 'Test',
    message: 'msg',
    date: '2026-04-13',
    read: false,
    link: null,
  });

  it('returns empty array when nothing saved', () => {
    expect(getCertificateNotifications()).toEqual([]);
  });

  it('markNotificationAsRead marks only the target notification', () => {
    saveCertificateNotifications([makeNote('n1'), makeNote('n2')]);
    markNotificationAsRead('n1');
    const notes = getCertificateNotifications();
    expect(notes.find((n) => n.id === 'n1')?.read).toBe(true);
    expect(notes.find((n) => n.id === 'n2')?.read).toBe(false);
  });

  it('markAllNotificationsRead marks all as read', () => {
    saveCertificateNotifications([makeNote('n1'), makeNote('n2')]);
    markAllNotificationsRead();
    getCertificateNotifications().forEach((n) => expect(n.read).toBe(true));
  });
});

// ── processCertificatePayment ─────────────────────────────────────────────────

describe('processCertificatePayment', () => {
  it('fails on first attempt (attempts=0)', () => {
    const draft = getEmptyCertificateDraft();
    const result = processCertificatePayment(draft);
    expect(result.success).toBe(false);
    expect(result.draft.payment.status).toBe('failed');
    expect(result.draft.payment.attempts).toBe(1);
  });

  it('succeeds on second attempt (attempts=1)', () => {
    const draft = getEmptyCertificateDraft();
    draft.payment.attempts = 1;
    const result = processCertificatePayment(draft);
    expect(result.success).toBe(true);
    expect(result.draft.payment.status).toBe('success');
    expect(result.draft.payment.transactionId).toMatch(/^TXN/);
  });

  it('persists updated draft to storage', () => {
    const draft = getEmptyCertificateDraft();
    draft.payment.attempts = 1;
    processCertificatePayment(draft);
    const loaded = loadCertificateDraft();
    expect(loaded.payment.status).toBe('success');
  });
});

// ── submitCertificateApplication ──────────────────────────────────────────────

describe('submitCertificateApplication', () => {
  it('returns an application with a reference number', () => {
    const app = submitCertificateApplication();
    expect(app.referenceNumber).toMatch(/^CERT-\d{4}-\d{2}-\d{6}$/);
  });

  it('sets status to submitted', () => {
    const app = submitCertificateApplication();
    expect(app.status).toBe('submitted');
    expect(app.statusLabel).toBe('Submitted');
  });

  it('saves application to storage', () => {
    submitCertificateApplication();
    expect(getCertificateApplications()).toHaveLength(1);
  });

  it('creates two notifications (submitted + payment)', () => {
    submitCertificateApplication();
    expect(getCertificateNotifications()).toHaveLength(2);
  });

  it('clears the draft after submission', () => {
    const draft = getEmptyCertificateDraft();
    draft.personal.fullName = 'Priya';
    saveCertificateDraft(draft);
    submitCertificateApplication();
    expect(localStorage.getItem('ux4g.certificate.draft.v1')).toBeNull();
  });

  it('uses draft applicant name in the application', () => {
    const draft = getEmptyCertificateDraft();
    draft.personal.fullName = 'Rahul Singh';
    saveCertificateDraft(draft);
    const app = submitCertificateApplication();
    expect(app.applicantName).toBe('Rahul Singh');
  });

  it('falls back to "Applicant" when fullName is empty', () => {
    const app = submitCertificateApplication();
    expect(app.applicantName).toBe('Applicant');
  });
});

// ── getLatestCertificateApplication ──────────────────────────────────────────

describe('getLatestCertificateApplication', () => {
  it('returns null when no applications exist', () => {
    expect(getLatestCertificateApplication()).toBeNull();
  });

  it('returns the first (latest) application', () => {
    const apps = getFallbackApplications();
    saveCertificateApplications(apps);
    const latest = getLatestCertificateApplication();
    expect(latest?.referenceNumber).toBe(apps[0].referenceNumber);
  });
});

// ── setApplicationStatus ──────────────────────────────────────────────────────

describe('setApplicationStatus', () => {
  it('updates status and statusLabel', () => {
    const apps = getFallbackApplications();
    saveCertificateApplications(apps);
    const ref = apps[0].referenceNumber;

    setApplicationStatus(ref, 'approved');

    const updated = getCertificateApplications().find((a) => a.referenceNumber === ref);
    expect(updated?.status).toBe('approved');
    expect(updated?.statusLabel).toBe('Approved');
  });

  it('sets canDownload=true for issued status', () => {
    const apps = getFallbackApplications();
    saveCertificateApplications(apps);
    const ref = apps[0].referenceNumber;

    setApplicationStatus(ref, 'issued');

    const updated = getCertificateApplications().find((a) => a.referenceNumber === ref);
    expect(updated?.canDownload).toBe(true);
    expect(updated?.certificateNumber).toMatch(/^INC\//);
  });

  it('creates a notification on status change', () => {
    const apps = getFallbackApplications();
    saveCertificateApplications(apps);
    setApplicationStatus(apps[0].referenceNumber, 'approved');
    expect(getCertificateNotifications()).toHaveLength(1);
  });

  it('creates a warning notification for rejected status', () => {
    const apps = getFallbackApplications();
    saveCertificateApplications(apps);
    setApplicationStatus(apps[0].referenceNumber, 'rejected');
    const notes = getCertificateNotifications();
    expect(notes[0].type).toBe('warning');
  });

  it('does nothing when referenceNumber is not found', () => {
    setApplicationStatus('CERT-UNKNOWN', 'approved');
    expect(getCertificateNotifications()).toHaveLength(0);
  });
});
