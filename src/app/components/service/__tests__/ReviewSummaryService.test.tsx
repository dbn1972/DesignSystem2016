import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { ReviewSummaryService } from '../ReviewSummaryService';
import { saveCertificateDraft, getEmptyCertificateDraft } from '../../../services/certificateFlow';

const BASE_PROPS = {
  category: 'Certificate Service',
  title: 'Review Your Application',
  serviceName: 'Certificate Service',
  editPersonalPath: '/form/personal',
  editAddressPath: '/form/address',
  editAdditionalPath: '/form/additional',
  editDocumentsPath: '/form/documents',
  backPath: '/form/documents',
  nextPath: '/declaration',
};

function renderReview(props = {}) {
  return render(
    <MemoryRouter>
      <ReviewSummaryService {...BASE_PROPS} {...props} />
    </MemoryRouter>
  );
}

beforeEach(() => localStorage.clear());
afterEach(() => localStorage.clear());

describe('ReviewSummaryService', () => {
  // ── Rendering ─────────────────────────────────────────────────────────────

  it('renders the page title', () => {
    renderReview();
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Review Your Application');
  });

  it('renders all four review sections', () => {
    renderReview();
    expect(screen.getByText('Personal Information')).toBeInTheDocument();
    expect(screen.getByText('Address Details')).toBeInTheDocument();
    expect(screen.getByText('Additional Information')).toBeInTheDocument();
    expect(screen.getByText('Uploaded Documents')).toBeInTheDocument();
  });

  it('renders Edit links for each section', () => {
    renderReview();
    const editLinks = screen.getAllByRole('link', { name: 'Edit' });
    expect(editLinks).toHaveLength(4);
  });

  it('edit links point to correct paths', () => {
    renderReview();
    const editLinks = screen.getAllByRole('link', { name: 'Edit' });
    const hrefs = editLinks.map((l) => l.getAttribute('href'));
    expect(hrefs).toContain('/form/personal');
    expect(hrefs).toContain('/form/address');
    expect(hrefs).toContain('/form/additional');
    expect(hrefs).toContain('/form/documents');
  });

  // ── Draft data display ────────────────────────────────────────────────────

  it('shows applicant full name from draft', () => {
    const draft = getEmptyCertificateDraft();
    draft.personal.fullName = 'Priya Sharma';
    saveCertificateDraft(draft);
    renderReview();
    expect(screen.getByText('Priya Sharma')).toBeInTheDocument();
  });

  it('shows uploaded document count', () => {
    const draft = getEmptyCertificateDraft();
    draft.documents[0].status = 'uploaded';
    saveCertificateDraft(draft);
    renderReview();
    expect(screen.getByText(`1 of ${draft.documents.length}`)).toBeInTheDocument();
  });

  it('shows "-" for empty optional fields', () => {
    renderReview();
    // Email and Aadhaar are empty by default
    const dashes = screen.getAllByText('-');
    expect(dashes.length).toBeGreaterThan(0);
  });

  // ── Navigation ────────────────────────────────────────────────────────────

  it('renders "Proceed to Declaration" button', () => {
    renderReview();
    expect(screen.getByRole('button', { name: /Proceed to Declaration/i })).toBeInTheDocument();
  });

  it('renders "Back" link pointing to backPath', () => {
    renderReview();
    expect(screen.getByRole('link', { name: /Back/i })).toHaveAttribute('href', '/form/documents');
  });

  it('renders optional code download link', () => {
    renderReview({ codeDownloadPath: '/downloads' });
    expect(screen.getByRole('link', { name: /Download React code/i })).toBeInTheDocument();
  });

  // ── Accessibility ─────────────────────────────────────────────────────────

  it('renders a main landmark', () => {
    renderReview();
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
