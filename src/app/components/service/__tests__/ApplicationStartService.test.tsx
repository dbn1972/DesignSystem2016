import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';
import { ApplicationStartService } from '../ApplicationStartService';

const BASE_PROPS = {
  category: 'Certificate Service',
  title: 'Income Certificate Application',
  serviceName: 'Certificate Service',
  applicantName: 'Priya Sharma',
  startFormPath: '/form/personal',
  helpPath: '/help',
};

function renderStart(props = {}) {
  return render(
    <MemoryRouter>
      <ApplicationStartService {...BASE_PROPS} {...props} />
    </MemoryRouter>
  );
}

describe('ApplicationStartService', () => {
  // ── Rendering ─────────────────────────────────────────────────────────────

  it('renders the applicant name in the header', () => {
    renderStart();
    expect(screen.getByText(/Welcome, Priya Sharma/i)).toBeInTheDocument();
  });

  it('renders the page title', () => {
    renderStart();
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Income Certificate Application');
  });

  it('renders 7 instruction steps', () => {
    renderStart();
    // Steps are numbered 1-7
    for (let i = 1; i <= 7; i++) {
      expect(screen.getByText(String(i))).toBeInTheDocument();
    }
  });

  it('renders the terms checkbox', () => {
    renderStart();
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('renders the "I Agree - Start Application" link', () => {
    renderStart();
    expect(screen.getByRole('link', { name: /I Agree - Start Application/i })).toBeInTheDocument();
  });

  // ── Terms acceptance ──────────────────────────────────────────────────────

  it('start link is disabled (pointer-events-none) before accepting terms', () => {
    renderStart();
    const link = screen.getByRole('link', { name: /I Agree - Start Application/i });
    expect(link).toHaveAttribute('aria-disabled', 'true');
  });

  it('start link is enabled after accepting terms', async () => {
    const user = userEvent.setup();
    renderStart();
    await user.click(screen.getByRole('checkbox'));
    const link = screen.getByRole('link', { name: /I Agree - Start Application/i });
    expect(link).not.toHaveAttribute('aria-disabled', 'true');
  });

  it('start link points to startFormPath when terms accepted', async () => {
    const user = userEvent.setup();
    renderStart();
    await user.click(screen.getByRole('checkbox'));
    expect(screen.getByRole('link', { name: /I Agree - Start Application/i })).toHaveAttribute(
      'href',
      '/form/personal'
    );
  });

  // ── Info cards ────────────────────────────────────────────────────────────

  it('renders the three info cards', () => {
    renderStart();
    expect(screen.getByText('Time Required')).toBeInTheDocument();
    expect(screen.getByText('Documents Needed')).toBeInTheDocument();
    expect(screen.getByText('Save Progress')).toBeInTheDocument();
  });

  // ── Navigation ────────────────────────────────────────────────────────────

  it('renders "Visit Help Center" link', () => {
    renderStart();
    expect(screen.getByRole('link', { name: 'Visit Help Center' })).toBeInTheDocument();
  });

  it('renders optional code download link', () => {
    renderStart({ codeDownloadPath: '/downloads' });
    expect(screen.getByRole('link', { name: /Download React code/i })).toBeInTheDocument();
  });

  // ── Accessibility ─────────────────────────────────────────────────────────

  it('renders a main landmark', () => {
    renderStart();
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
