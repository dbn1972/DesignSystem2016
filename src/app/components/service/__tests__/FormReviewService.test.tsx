import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { FormReviewService } from '../FormReviewService';
import { saveCertificateDraft, getEmptyCertificateDraft } from '../../../services/certificateFlow';

const BASE_PROPS = {
  category: 'Certificate Service',
  title: 'Review Form Details',
  serviceName: 'Certificate Service',
  editPersonalPath: '/form/personal',
  editAddressPath: '/form/address',
  editAdditionalPath: '/form/additional',
  backPath: '/form/additional',
  nextPath: '/form/documents',
};

function renderReview(props = {}) {
  return render(
    <MemoryRouter>
      <FormReviewService {...BASE_PROPS} {...props} />
    </MemoryRouter>
  );
}

beforeEach(() => localStorage.clear());
afterEach(() => localStorage.clear());

describe('FormReviewService', () => {
  it('renders the page title', () => {
    renderReview();
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Review Form Details');
  });

  it('renders three review sections', () => {
    renderReview();
    expect(screen.getByText('Personal Information')).toBeInTheDocument();
    expect(screen.getByText('Address Details')).toBeInTheDocument();
    expect(screen.getByText('Certificate Details')).toBeInTheDocument();
  });

  it('renders Edit links for each section', () => {
    renderReview();
    const editLinks = screen.getAllByRole('link', { name: 'Edit' });
    expect(editLinks).toHaveLength(3);
  });

  it('edit links point to correct paths', () => {
    renderReview();
    const editLinks = screen.getAllByRole('link', { name: 'Edit' });
    const hrefs = editLinks.map((l) => l.getAttribute('href'));
    expect(hrefs).toContain('/form/personal');
    expect(hrefs).toContain('/form/address');
    expect(hrefs).toContain('/form/additional');
  });

  it('shows applicant name from draft', () => {
    const draft = getEmptyCertificateDraft();
    draft.personal.fullName = 'Priya Sharma';
    saveCertificateDraft(draft);
    renderReview();
    expect(screen.getByText('Priya Sharma')).toBeInTheDocument();
  });

  it('shows "-" for empty fields', () => {
    renderReview();
    const dashes = screen.getAllByText('-');
    expect(dashes.length).toBeGreaterThan(0);
  });

  it('renders "Confirm and Continue" button', () => {
    renderReview();
    expect(screen.getByRole('button', { name: /Confirm and Continue/i })).toBeInTheDocument();
  });

  it('renders "Previous" link', () => {
    renderReview();
    expect(screen.getByRole('link', { name: /Previous/i })).toBeInTheDocument();
  });

  it('renders optional code download link', () => {
    renderReview({ codeDownloadPath: '/downloads' });
    expect(screen.getByRole('link', { name: /Download React code/i })).toBeInTheDocument();
  });

  it('renders a main landmark', () => {
    renderReview();
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
