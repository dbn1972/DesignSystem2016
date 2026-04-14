import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { PaymentReceiptService } from '../PaymentReceiptService';
import { saveCertificateApplications, getFallbackApplications } from '../../../services/certificateFlow';

const BASE_PROPS = {
  category: 'Certificate Service',
  title: 'Payment Receipt',
  serviceName: 'Certificate Service',
  statusTrackerPath: '/status',
  dashboardPath: '/dashboard',
};

function renderReceipt(props = {}) {
  return render(
    <MemoryRouter>
      <PaymentReceiptService {...BASE_PROPS} {...props} />
    </MemoryRouter>
  );
}

beforeEach(() => localStorage.clear());
afterEach(() => localStorage.clear());

describe('PaymentReceiptService', () => {
  it('renders the page title', () => {
    renderReceipt();
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Payment Receipt');
  });

  it('renders "Payment Successful" heading', () => {
    renderReceipt();
    expect(screen.getByText('Payment Successful')).toBeInTheDocument();
  });

  it('renders a transaction ID', () => {
    renderReceipt();
    // Fallback data has a TXN-prefixed transaction ID
    expect(screen.getByText(/TXN/)).toBeInTheDocument();
  });

  it('renders a reference number', () => {
    renderReceipt();
    expect(screen.getByText('CERT-2026-04-456789')).toBeInTheDocument();
  });

  it('renders amount details section', () => {
    renderReceipt();
    expect(screen.getByText('Amount Details')).toBeInTheDocument();
    expect(screen.getByText('Application Fee')).toBeInTheDocument();
    expect(screen.getByText('Processing Fee')).toBeInTheDocument();
    expect(screen.getByText('Total Paid')).toBeInTheDocument();
  });

  it('renders "Track Application Status" link', () => {
    renderReceipt();
    expect(screen.getByRole('link', { name: /Track Application Status/i })).toHaveAttribute(
      'href',
      '/status'
    );
  });

  it('renders "Go to Dashboard" link', () => {
    renderReceipt();
    expect(screen.getByRole('link', { name: /Go to Dashboard/i })).toHaveAttribute(
      'href',
      '/dashboard'
    );
  });

  it('renders Print and Download PDF buttons', () => {
    renderReceipt();
    expect(screen.getByRole('button', { name: /Print/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Download PDF/i })).toBeInTheDocument();
  });

  it('shows real application data when available', () => {
    const apps = getFallbackApplications();
    apps[0].referenceNumber = 'CERT-2026-04-REAL';
    saveCertificateApplications(apps);
    renderReceipt();
    expect(screen.getByText('CERT-2026-04-REAL')).toBeInTheDocument();
  });

  it('renders optional code download link', () => {
    renderReceipt({ codeDownloadPath: '/downloads' });
    expect(screen.getByRole('link', { name: /Download React code/i })).toBeInTheDocument();
  });

  it('renders a main landmark', () => {
    renderReceipt();
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
