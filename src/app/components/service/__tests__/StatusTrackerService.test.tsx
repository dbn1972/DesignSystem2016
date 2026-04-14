import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { StatusTrackerService } from '../StatusTrackerService';
import { saveCertificateApplications, getFallbackApplications } from '../../../services/certificateFlow';

const BASE_PROPS = {
  category: 'Certificate Service',
  title: 'Application Status',
  serviceName: 'Certificate Service',
  homePath: '/',
};

function renderTracker(props = {}) {
  return render(
    <MemoryRouter>
      <StatusTrackerService {...BASE_PROPS} {...props} />
    </MemoryRouter>
  );
}

beforeEach(() => localStorage.clear());
afterEach(() => localStorage.clear());

describe('StatusTrackerService', () => {
  // ── Rendering ─────────────────────────────────────────────────────────────

  it('renders the page title', () => {
    renderTracker();
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Application Status');
  });

  it('renders a reference number', () => {
    renderTracker();
    // Fallback data has a known reference number
    expect(screen.getByText('CERT-2026-04-456789')).toBeInTheDocument();
  });

  it('renders the status label', () => {
    renderTracker();
    // Status label appears in the status section
    const statusLabels = screen.getAllByText(/Under Review/i);
    expect(statusLabels.length).toBeGreaterThan(0);
  });

  it('renders the timeline section heading', () => {
    renderTracker();
    expect(screen.getByRole('heading', { name: 'Timeline' })).toBeInTheDocument();
  });

  it('renders timeline events', () => {
    renderTracker();
    expect(screen.getByText('Application Submitted')).toBeInTheDocument();
    expect(screen.getByText('Payment Confirmed')).toBeInTheDocument();
  });

  // ── Real application data ─────────────────────────────────────────────────

  it('shows real application data when available', () => {
    const apps = getFallbackApplications();
    apps[0].referenceNumber = 'CERT-2026-04-REAL';
    apps[0].statusLabel = 'Approved';
    saveCertificateApplications(apps);

    renderTracker();
    expect(screen.getByText('CERT-2026-04-REAL')).toBeInTheDocument();
    // Status label appears multiple times (in text and timeline) — just check it exists
    expect(screen.getAllByText(/Approved/i).length).toBeGreaterThan(0);
  });

  // ── Navigation ────────────────────────────────────────────────────────────

  it('renders "Go to Service Home" link', () => {
    renderTracker();
    expect(screen.getByRole('link', { name: 'Go to Service Home' })).toBeInTheDocument();
  });

  it('"Go to Service Home" points to homePath', () => {
    renderTracker();
    expect(screen.getByRole('link', { name: 'Go to Service Home' })).toHaveAttribute('href', '/');
  });

  it('renders optional code download link', () => {
    renderTracker({ codeDownloadPath: '/downloads' });
    expect(screen.getByRole('link', { name: /Download React code/i })).toBeInTheDocument();
  });

  // ── Accessibility ─────────────────────────────────────────────────────────

  it('renders a main landmark', () => {
    renderTracker();
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
