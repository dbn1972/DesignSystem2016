import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';
import { EligibilityService } from '../EligibilityService';

const BASE_PROPS = {
  category: 'Certificate Service',
  title: 'Check Eligibility',
  serviceName: 'Certificate Service',
  homePath: '/',
  signInPath: '/sign-in',
  signUpPath: '/sign-up',
  helpPath: '/help',
};

function renderEligibility(props = {}) {
  return render(
    <MemoryRouter>
      <EligibilityService {...BASE_PROPS} {...props} />
    </MemoryRouter>
  );
}

describe('EligibilityService', () => {
  // ── Rendering ─────────────────────────────────────────────────────────────

  it('renders the eligibility questions', () => {
    renderEligibility();
    expect(screen.getByText(/Are you an Indian citizen/i)).toBeInTheDocument();
    expect(screen.getByText(/Are you 18 years of age/i)).toBeInTheDocument();
    expect(screen.getByText(/valid identity proof/i)).toBeInTheDocument();
    expect(screen.getByText(/valid address proof/i)).toBeInTheDocument();
  });

  it('renders the certificate type select', () => {
    renderEligibility();
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  it('renders "Check Eligibility" button', () => {
    renderEligibility();
    expect(screen.getByRole('button', { name: 'Check Eligibility' })).toBeInTheDocument();
  });

  it('"Check Eligibility" button is disabled when not all questions answered', () => {
    renderEligibility();
    expect(screen.getByRole('button', { name: 'Check Eligibility' })).toBeDisabled();
  });

  // ── Eligible flow ─────────────────────────────────────────────────────────

  it('shows "You Are Eligible" when all answers are yes and type is selected', async () => {
    const user = userEvent.setup();
    renderEligibility();

    // Answer all 4 yes/no questions with "Yes"
    const yesRadios = screen.getAllByRole('radio', { name: 'Yes' });
    for (const radio of yesRadios) {
      await user.click(radio);
    }

    // Select certificate type
    await user.selectOptions(screen.getByRole('combobox'), 'income');

    await user.click(screen.getByRole('button', { name: 'Check Eligibility' }));

    expect(screen.getByText('You Are Eligible')).toBeInTheDocument();
  });

  it('shows Sign In and Create Account links when eligible', async () => {
    const user = userEvent.setup();
    renderEligibility();

    const yesRadios = screen.getAllByRole('radio', { name: 'Yes' });
    for (const radio of yesRadios) await user.click(radio);
    await user.selectOptions(screen.getByRole('combobox'), 'income');
    await user.click(screen.getByRole('button', { name: 'Check Eligibility' }));

    expect(screen.getByRole('link', { name: /Sign In to Apply/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Create Account/i })).toBeInTheDocument();
  });

  // ── Ineligible flow ───────────────────────────────────────────────────────

  it('shows "Not Eligible Yet" when a required answer is "No"', async () => {
    const user = userEvent.setup();
    renderEligibility();

    const yesRadios = screen.getAllByRole('radio', { name: 'Yes' });
    for (const radio of yesRadios) await user.click(radio);

    // Override first question to "No"
    const noRadios = screen.getAllByRole('radio', { name: 'No' });
    await user.click(noRadios[0]);

    await user.selectOptions(screen.getByRole('combobox'), 'income');
    await user.click(screen.getByRole('button', { name: 'Check Eligibility' }));

    expect(screen.getByText('Not Eligible Yet')).toBeInTheDocument();
  });

  it('shows missing requirements when ineligible', async () => {
    const user = userEvent.setup();
    renderEligibility();

    const yesRadios = screen.getAllByRole('radio', { name: 'Yes' });
    for (const radio of yesRadios) await user.click(radio);
    const noRadios = screen.getAllByRole('radio', { name: 'No' });
    await user.click(noRadios[0]); // isCitizen = no

    await user.selectOptions(screen.getByRole('combobox'), 'income');
    await user.click(screen.getByRole('button', { name: 'Check Eligibility' }));

    // The error message is distinct from the question text
    expect(screen.getByText('You must be an Indian citizen to apply.')).toBeInTheDocument();
  });

  it('shows Get Help link when ineligible', async () => {
    const user = userEvent.setup();
    renderEligibility();

    const noRadios = screen.getAllByRole('radio', { name: 'No' });
    for (const radio of noRadios) await user.click(radio);
    await user.selectOptions(screen.getByRole('combobox'), 'income');
    await user.click(screen.getByRole('button', { name: 'Check Eligibility' }));

    expect(screen.getByRole('link', { name: 'Get Help' })).toBeInTheDocument();
  });

  // ── Result resets on answer change ────────────────────────────────────────

  it('hides result when an answer is changed after checking', async () => {
    const user = userEvent.setup();
    renderEligibility();

    const yesRadios = screen.getAllByRole('radio', { name: 'Yes' });
    for (const radio of yesRadios) await user.click(radio);
    await user.selectOptions(screen.getByRole('combobox'), 'income');
    await user.click(screen.getByRole('button', { name: 'Check Eligibility' }));
    expect(screen.getByText('You Are Eligible')).toBeInTheDocument();

    // Change an answer — result should disappear
    const noRadios = screen.getAllByRole('radio', { name: 'No' });
    await user.click(noRadios[0]);
    expect(screen.queryByText('You Are Eligible')).not.toBeInTheDocument();
  });

  // ── Navigation ────────────────────────────────────────────────────────────

  it('renders "Back to Service Home" link', () => {
    renderEligibility();
    expect(screen.getByRole('link', { name: 'Back to Service Home' })).toBeInTheDocument();
  });

  it('renders optional code download link', () => {
    renderEligibility({ codeDownloadPath: '/downloads' });
    expect(screen.getByRole('link', { name: /Download React code/i })).toBeInTheDocument();
  });

  // ── Accessibility ─────────────────────────────────────────────────────────

  it('renders a main landmark', () => {
    renderEligibility();
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
