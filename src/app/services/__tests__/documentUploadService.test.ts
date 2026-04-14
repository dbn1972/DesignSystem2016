import { describe, it, expect } from 'vitest';
import {
  formatUploadSize,
  validateUploadFile,
  applyUploadedFile,
  clearUploadedFile,
  allRequiredDocsUploaded,
} from '../documentUploadService';
import type { UploadedDocument } from '../certificateFlow';

const makeFile = (name: string, size: number, type = 'application/pdf') =>
  new File(['x'.repeat(size)], name, { type });

const makeDocs = (): UploadedDocument[] => [
  { id: 'identity', name: 'Identity Proof', required: true, status: 'pending' },
  { id: 'address', name: 'Address Proof', required: true, status: 'pending' },
  { id: 'photo', name: 'Photo', required: true, status: 'pending' },
  { id: 'optional', name: 'Optional Doc', required: false, status: 'pending' },
];

// ── formatUploadSize ──────────────────────────────────────────────────────────

describe('formatUploadSize', () => {
  it('formats bytes under 1MB as KB', () => {
    expect(formatUploadSize(512 * 1024)).toBe('512 KB');
  });

  it('formats bytes >= 1MB as MB', () => {
    expect(formatUploadSize(1.5 * 1024 * 1024)).toBe('1.5 MB');
  });

  it('rounds small sizes to minimum 1 KB', () => {
    expect(formatUploadSize(100)).toBe('1 KB');
  });

  it('formats exactly 1MB', () => {
    expect(formatUploadSize(1024 * 1024)).toBe('1.0 MB');
  });
});

// ── validateUploadFile ────────────────────────────────────────────────────────

describe('validateUploadFile', () => {
  it('returns null for valid PDF under 2MB', () => {
    const file = makeFile('doc.pdf', 500 * 1024);
    expect(validateUploadFile(file)).toBeNull();
  });

  it('returns null for valid JPG', () => {
    expect(validateUploadFile(makeFile('photo.jpg', 100 * 1024, 'image/jpeg'))).toBeNull();
  });

  it('returns null for valid PNG', () => {
    expect(validateUploadFile(makeFile('photo.png', 100 * 1024, 'image/png'))).toBeNull();
  });

  it('returns null for valid JPEG', () => {
    expect(validateUploadFile(makeFile('photo.jpeg', 100 * 1024, 'image/jpeg'))).toBeNull();
  });

  it('rejects files over 2MB', () => {
    const file = makeFile('big.pdf', 3 * 1024 * 1024);
    expect(validateUploadFile(file)).toMatch(/2MB/);
  });

  it('rejects disallowed file extensions', () => {
    const file = makeFile('script.exe', 100);
    expect(validateUploadFile(file)).toMatch(/PDF|JPG|JPEG|PNG/i);
  });

  it('rejects .docx files', () => {
    const file = makeFile('doc.docx', 100 * 1024, 'application/vnd.openxmlformats');
    expect(validateUploadFile(file)).toBeTruthy();
  });
});

// ── applyUploadedFile ─────────────────────────────────────────────────────────

describe('applyUploadedFile', () => {
  it('marks the target document as uploaded', () => {
    const docs = makeDocs();
    const file = makeFile('id.pdf', 100 * 1024);
    const updated = applyUploadedFile(docs, 'identity', file);
    const doc = updated.find((d) => d.id === 'identity')!;
    expect(doc.status).toBe('uploaded');
    expect(doc.fileName).toBe('id.pdf');
  });

  it('sets size string on the uploaded document', () => {
    const docs = makeDocs();
    const file = makeFile('id.pdf', 512 * 1024);
    const updated = applyUploadedFile(docs, 'identity', file);
    expect(updated.find((d) => d.id === 'identity')?.size).toBeTruthy();
  });

  it('sets uploadedAt timestamp', () => {
    const docs = makeDocs();
    const file = makeFile('id.pdf', 100 * 1024);
    const updated = applyUploadedFile(docs, 'identity', file);
    expect(updated.find((d) => d.id === 'identity')?.uploadedAt).toBeTruthy();
  });

  it('does not modify other documents', () => {
    const docs = makeDocs();
    const file = makeFile('id.pdf', 100 * 1024);
    const updated = applyUploadedFile(docs, 'identity', file);
    expect(updated.find((d) => d.id === 'address')?.status).toBe('pending');
  });

  it('returns same length array', () => {
    const docs = makeDocs();
    const updated = applyUploadedFile(docs, 'identity', makeFile('id.pdf', 100));
    expect(updated).toHaveLength(docs.length);
  });
});

// ── clearUploadedFile ─────────────────────────────────────────────────────────

describe('clearUploadedFile', () => {
  it('resets the target document back to pending', () => {
    const docs = makeDocs();
    const file = makeFile('id.pdf', 100 * 1024);
    const uploaded = applyUploadedFile(docs, 'identity', file);
    const cleared = clearUploadedFile(uploaded, 'identity');
    const doc = cleared.find((d) => d.id === 'identity')!;
    expect(doc.status).toBe('pending');
    expect(doc.fileName).toBeUndefined();
    expect(doc.size).toBeUndefined();
    expect(doc.uploadedAt).toBeUndefined();
  });

  it('does not affect other documents', () => {
    const docs = makeDocs();
    const file = makeFile('id.pdf', 100 * 1024);
    const uploaded = applyUploadedFile(docs, 'identity', file);
    const cleared = clearUploadedFile(uploaded, 'identity');
    expect(cleared.find((d) => d.id === 'address')?.status).toBe('pending');
  });
});

// ── allRequiredDocsUploaded ───────────────────────────────────────────────────

describe('allRequiredDocsUploaded', () => {
  it('returns false when no required docs are uploaded', () => {
    expect(allRequiredDocsUploaded(makeDocs())).toBe(false);
  });

  it('returns false when only some required docs are uploaded', () => {
    const docs = makeDocs();
    docs[0].status = 'uploaded';
    expect(allRequiredDocsUploaded(docs)).toBe(false);
  });

  it('returns true when all required docs are uploaded', () => {
    const docs = makeDocs();
    docs.filter((d) => d.required).forEach((d) => (d.status = 'uploaded'));
    expect(allRequiredDocsUploaded(docs)).toBe(true);
  });

  it('ignores optional documents when checking', () => {
    const docs = makeDocs();
    // Upload all required, leave optional as pending
    docs.filter((d) => d.required).forEach((d) => (d.status = 'uploaded'));
    expect(allRequiredDocsUploaded(docs)).toBe(true);
  });

  it('returns true for empty array (vacuously true)', () => {
    expect(allRequiredDocsUploaded([])).toBe(true);
  });
});
