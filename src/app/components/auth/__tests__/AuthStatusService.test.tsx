import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { AuthStatusService } from '../AuthStatusService';

const BASE_PROPS = {
  category: 'Certificate Service',
  title: 'Authentication Status',
  signInPath: '/sign-in',
  homePath: '/',
  helpPath: '/help',
  serviceName: 'Certificate Service',
};

function renderStatus(status: 'session-expired' | 'locked-account' | 'service-unavailable') {
  return render(
    <MemoryRouter>
      <AuthStatusService {...BASE_PROPS} status={status} />
    </MemoryRouter>
  );
}

describe('AuthStatusService', () => {
  // ── session-expired ───────────────────────────────────────────────────────

  it('renders "Session Expired" heading for session-expired status', () => {
    renderStatus('session-expired');
    expect(screen.getByText('Session Expired')).toBeInTheDocument();
  });

  it('renders "Sign In Again" action link for session-expired', () => {
    renderStatus('session-expired');
    expect(screen.getByRole('link', { name: /Sign In Again/i })).toBeInTheDocument();
  });

  it('session-expired action link points to sign-in with state param', () => {
    renderStatus('session-expired');
    const link = screen.getByRole('link', { name: /Sign In Again/i });
    expect(link.getAttribute('href')).toContain('session-expired');
  });

  // ── locked-account ────────────────────────────────────────────────────────

  it('renders "Account Locked" heading for locked-account status', () => {
    renderStatus('locked-account');
    expect(screen.getByText('Account Locked')).toBeInTheDocument();
  });

  it('renders "Go to Sign In" action link for locked-account', () => {
    renderStatus('locked-account');
    expect(screen.getByRole('link', { name: /Go to Sign In/i })).toBeInTheDocument();
  });

  // ── service-unavailable ───────────────────────────────────────────────────

  it('renders "Service Unavailable" heading for service-unavailable status', () => {
    renderStatus('service-unavailable');
    expect(screen.getByText('Service Unavailable')).toBeInTheDocument();
  });

  it('renders "Try Sign In" action link for service-unavailable', () => {
    renderStatus('service-unavailable');
    expect(screen.getByRole('link', { name: /Try Sign In/i })).toBeInTheDocument();
  });

  // ── Common elements ───────────────────────────────────────────────────────

  it('always renders "Return to Service Home" link', () => {
    renderStatus('session-expired');
    expect(screen.getByRole('link', { name: /Return to Service Home/i })).toBeInTheDocument();
  });

  it('"Return to Service Home" link points to homePath', () => {
    renderStatus('session-expired');
    const link = screen.getByRole('link', { name: /Return to Service Home/i });
    expect(link.getAttribute('href')).toBe('/');
  });

  it('renders "Contact support" link pointing to helpPath', () => {
    renderStatus('session-expired');
    expect(screen.getByRole('link', { name: /Contact support/i })).toBeInTheDocument();
  });

  it('renders optional code download link when codeDownloadPath is provided', () => {
    render(
      <MemoryRouter>
        <AuthStatusService
          {...BASE_PROPS}
          status="session-expired"
          codeDownloadPath="/downloads"
        />
      </MemoryRouter>
    );
    expect(screen.getByRole('link', { name: /Download React code/i })).toBeInTheDocument();
  });

  it('does not render code download link when codeDownloadPath is not provided', () => {
    renderStatus('session-expired');
    expect(screen.queryByRole('link', { name: /Download React code/i })).not.toBeInTheDocument();
  });

  // ── Accessibility ─────────────────────────────────────────────────────────

  it('renders a main landmark', () => {
    renderStatus('session-expired');
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
