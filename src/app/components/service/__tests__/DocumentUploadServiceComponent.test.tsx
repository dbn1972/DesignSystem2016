import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';
import { DocumentUploadService } from '../DocumentUploadService';

const BASE_PROPS = {
  category: 'Certificate Service',
  title: 'Upload Documents',
  serviceName: 'Certificate Service',
  previousPath: '/form/additional',
  nextPath: '/form/review',
};

function renderUpload(props = {}) {
  return render(
    <MemoryRouter>
      <DocumentUploadService {...BASE_PROPS} {...props} />
    </MemoryRouter>
  );
}

beforeEach(() => localStorage.clear());
afterEach(() => localStorage.clear());

describe('DocumentUploadService (component)', () => {
  it('renders the page title', () => {
    renderUpload();
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Upload Documents');
  });

  it('renders all 4 default document slots', () => {
    renderUpload();
    expect(screen.getByText('Identity Proof (Aadhaar / Voter ID)')).toBeInTheDocument();
    expect(screen.getByText('Address Proof')).toBeInTheDocument();
    expect(screen.getByText('Photograph (Passport Size)')).toBeInTheDocument();
    expect(screen.getByText('Income Proof (Salary Slip / ITR)')).toBeInTheDocument();
  });

  it('renders Upload buttons for each document', () => {
    renderUpload();
    const uploadButtons = screen.getAllByText('Upload');
    expect(uploadButtons.length).toBe(4);
  });

  it('renders "Continue to Review" button', () => {
    renderUpload();
    expect(screen.getByRole('button', { name: /Continue to Review/i })).toBeInTheDocument();
  });

  it('renders "Previous" link', () => {
    renderUpload();
    expect(screen.getByRole('link', { name: /Previous/i })).toBeInTheDocument();
  });

  it('shows error when continuing without uploading required docs', async () => {
    const user = userEvent.setup();
    renderUpload();
    await user.click(screen.getByRole('button', { name: /Continue to Review/i }));
    expect(screen.getByText(/Please upload all required documents/i)).toBeInTheDocument();
  });

  it('shows file upload inputs for each document', () => {
    const { container } = renderUpload();
    const fileInputs = container.querySelectorAll('input[type="file"]');
    expect(fileInputs).toHaveLength(4);
  });

  it('shows validation error for oversized file', async () => {
    const user = userEvent.setup();
    const { container } = renderUpload();
    const input = container.querySelectorAll('input[type="file"]')[0] as HTMLInputElement;
    const bigFile = new File(['x'.repeat(3 * 1024 * 1024)], 'big.pdf', { type: 'application/pdf' });
    await user.upload(input, bigFile);
    expect(screen.getByText('File size must be 2MB or less.')).toBeInTheDocument();
  });

  it('renders optional code download link', () => {
    renderUpload({ codeDownloadPath: '/downloads' });
    expect(screen.getByRole('link', { name: /Download React code/i })).toBeInTheDocument();
  });

  it('renders a main landmark', () => {
    renderUpload();
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
