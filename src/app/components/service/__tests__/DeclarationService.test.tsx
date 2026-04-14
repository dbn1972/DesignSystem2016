import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';
import { DeclarationService } from '../DeclarationService';
import { saveCertificateDraft, getEmptyCertificateDraft } from '../../../services/certificateFlow';

const BASE_PROPS = {
  category: 'Certificate Service',
  title: 'Declaration',
  serviceName: 'Certificate Service',
  backPath: '/review',
  nextPath: '/payment',
};

function renderDeclaration(props = {}) {
  return render(
    <MemoryRouter>
      <DeclarationService {...BASE_PROPS} {...props} />
    </MemoryRouter>
  );
}

beforeEach(() => localStorage.clear());
afterEach(() => localStorage.clear());

describe('DeclarationService', () => {
  // ── Rendering ─────────────────────────────────────────────────────────────

  it('renders the declaration text', () => {
    renderDeclaration();
    expect(screen.getByText(/declare that all/i)).toBeInTheDocument();
  });

  it('renders applicant name from draft', () => {
    const draft = getEmptyCertificateDraft();
    draft.personal.fullName = 'Priya Sharma';
    saveCertificateDraft(draft);
    renderDeclaration();
    expect(screen.getByText('Priya Sharma')).toBeInTheDocument();
  });

  it('renders "the applicant" when fullName is empty', () => {
    renderDeclaration();
    expect(screen.getByText('the applicant')).toBeInTheDocument();
  });

  it('renders the declaration checkbox', () => {
    renderDeclaration();
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('renders "Accept and Continue" button', () => {
    renderDeclaration();
    expect(screen.getByRole('button', { name: /Accept and Continue/i })).toBeInTheDocument();
  });

  // ── Checkbox state ────────────────────────────────────────────────────────

  it('"Accept and Continue" is disabled when checkbox is unchecked', () => {
    renderDeclaration();
    expect(screen.getByRole('button', { name: /Accept and Continue/i })).toBeDisabled();
  });

  it('"Accept and Continue" is enabled after checking the checkbox', async () => {
    const user = userEvent.setup();
    renderDeclaration();
    await user.click(screen.getByRole('checkbox'));
    expect(screen.getByRole('button', { name: /Accept and Continue/i })).not.toBeDisabled();
  });

  it('checkbox starts checked when draft.declarationAccepted is true', () => {
    const draft = getEmptyCertificateDraft();
    draft.declarationAccepted = true;
    saveCertificateDraft(draft);
    renderDeclaration();
    expect(screen.getByRole('checkbox')).toBeChecked();
  });

  // ── Navigation ────────────────────────────────────────────────────────────

  it('renders "Back" link pointing to backPath', () => {
    renderDeclaration();
    expect(screen.getByRole('link', { name: /Back/i })).toHaveAttribute('href', '/review');
  });

  it('renders optional code download link', () => {
    renderDeclaration({ codeDownloadPath: '/downloads' });
    expect(screen.getByRole('link', { name: /Download React code/i })).toBeInTheDocument();
  });

  // ── Declaration bullet points ─────────────────────────────────────────────

  it('renders the three declaration bullet points', () => {
    renderDeclaration();
    expect(screen.getByText(/Data may be used only/i)).toBeInTheDocument();
    expect(screen.getByText(/False information/i)).toBeInTheDocument();
    expect(screen.getByText(/non-refundable/i)).toBeInTheDocument();
  });

  // ── Accessibility ─────────────────────────────────────────────────────────

  it('renders a main landmark', () => {
    renderDeclaration();
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
