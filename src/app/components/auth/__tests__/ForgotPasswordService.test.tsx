import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';
import { ForgotPasswordService } from '../ForgotPasswordService';

vi.mock('../../../services/forgotPasswordService', () => ({
  requestPasswordReset: vi.fn().mockResolvedValue({
    success: true,
    state: 'default',
    message: 'OTP sent',
    mobileNumber: '9876543210',
  }),
  completePasswordReset: vi.fn().mockResolvedValue({
    success: true,
    state: 'reset-success',
    message: 'Password reset successful.',
  }),
}));

const BASE_PROPS = {
  category: 'Certificate Service',
  title: 'Reset Password',
  backLink: '/',
  backText: 'Back',
  signInPath: '/sign-in',
  helpPath: '/help',
  serviceName: 'Certificate Service',
};

function renderForgotPassword() {
  return render(
    <MemoryRouter>
      <ForgotPasswordService {...BASE_PROPS} />
    </MemoryRouter>
  );
}

describe('ForgotPasswordService', () => {
  // ── Step 1: Identifier ────────────────────────────────────────────────────

  it('renders the identifier input on step 1', () => {
    renderForgotPassword();
    expect(screen.getByLabelText(/Email, Mobile Number, or User ID/i)).toBeInTheDocument();
  });

  it('renders "Send OTP" button on step 1', () => {
    renderForgotPassword();
    expect(screen.getByRole('button', { name: 'Send OTP' })).toBeInTheDocument();
  });

  it('shows validation error when submitting empty identifier', async () => {
    const user = userEvent.setup();
    renderForgotPassword();
    await user.click(screen.getByRole('button', { name: 'Send OTP' }));
    expect(screen.getByRole('alert')).toBeInTheDocument();
  });

  it('shows error for short user ID (less than 4 chars)', async () => {
    const user = userEvent.setup();
    renderForgotPassword();
    await user.type(screen.getByLabelText(/Email, Mobile Number, or User ID/i), 'ab');
    await user.click(screen.getByRole('button', { name: 'Send OTP' }));
    expect(screen.getByRole('alert')).toBeInTheDocument();
  });

  it('advances to OTP step after successful identifier submission', async () => {
    const user = userEvent.setup();
    renderForgotPassword();
    await user.type(screen.getByLabelText(/Email, Mobile Number, or User ID/i), '9876543210');
    await user.click(screen.getByRole('button', { name: 'Send OTP' }));
    expect(await screen.findByLabelText(/One-Time Password/i)).toBeInTheDocument();
  });

  // ── Step 2: OTP ───────────────────────────────────────────────────────────

  it('renders OTP input on step 2', async () => {
    const user = userEvent.setup();
    renderForgotPassword();
    await user.type(screen.getByLabelText(/Email, Mobile Number, or User ID/i), '9876543210');
    await user.click(screen.getByRole('button', { name: 'Send OTP' }));
    expect(await screen.findByLabelText(/One-Time Password/i)).toBeInTheDocument();
  });

  it('renders "Continue" and "Resend OTP" buttons on step 2', async () => {
    const user = userEvent.setup();
    renderForgotPassword();
    await user.type(screen.getByLabelText(/Email, Mobile Number, or User ID/i), '9876543210');
    await user.click(screen.getByRole('button', { name: 'Send OTP' }));
    expect(await screen.findByRole('button', { name: 'Continue' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Resend OTP' })).toBeInTheDocument();
  });

  it('shows OTP validation error when continuing with invalid OTP', async () => {
    const user = userEvent.setup();
    renderForgotPassword();
    await user.type(screen.getByLabelText(/Email, Mobile Number, or User ID/i), '9876543210');
    await user.click(screen.getByRole('button', { name: 'Send OTP' }));
    await screen.findByRole('button', { name: 'Continue' });
    await user.click(screen.getByRole('button', { name: 'Continue' }));
    expect(screen.getByRole('alert')).toBeInTheDocument();
  });

  it('advances to new-password step after valid OTP', async () => {
    const user = userEvent.setup();
    renderForgotPassword();
    await user.type(screen.getByLabelText(/Email, Mobile Number, or User ID/i), '9876543210');
    await user.click(screen.getByRole('button', { name: 'Send OTP' }));
    const otpInput = await screen.findByLabelText(/One-Time Password/i);
    await user.type(otpInput, '123456');
    await user.click(screen.getByRole('button', { name: 'Continue' }));
    expect(await screen.findByPlaceholderText('Enter a new password')).toBeInTheDocument();
  });

  // ── Step 3: New Password ──────────────────────────────────────────────────

  it('renders new password and confirm password fields on step 3', async () => {
    const user = userEvent.setup();
    renderForgotPassword();
    await user.type(screen.getByLabelText(/Email, Mobile Number, or User ID/i), '9876543210');
    await user.click(screen.getByRole('button', { name: 'Send OTP' }));
    const otpInput = await screen.findByLabelText(/One-Time Password/i);
    await user.type(otpInput, '123456');
    await user.click(screen.getByRole('button', { name: 'Continue' }));
    expect(await screen.findByPlaceholderText('Enter a new password')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Re-enter the new password')).toBeInTheDocument();
  });

  it('shows error when passwords do not match on step 3', async () => {
    const user = userEvent.setup();
    renderForgotPassword();
    await user.type(screen.getByLabelText(/Email, Mobile Number, or User ID/i), '9876543210');
    await user.click(screen.getByRole('button', { name: 'Send OTP' }));
    const otpInput = await screen.findByLabelText(/One-Time Password/i);
    await user.type(otpInput, '123456');
    await user.click(screen.getByRole('button', { name: 'Continue' }));
    await screen.findByPlaceholderText('Enter a new password');
    await user.type(screen.getByPlaceholderText('Enter a new password'), 'Password1');
    await user.type(screen.getByPlaceholderText('Re-enter the new password'), 'Different1');
    await user.click(screen.getByRole('button', { name: 'Reset Password' }));
    expect(screen.getByText(/do not match/i)).toBeInTheDocument();
  });

  // ── Step progress indicator ───────────────────────────────────────────────

  it('renders 3-step progress indicator', () => {
    renderForgotPassword();
    expect(screen.getByLabelText('Reset password progress')).toBeInTheDocument();
    expect(screen.getByText('Identifier')).toBeInTheDocument();
    expect(screen.getByText('OTP')).toBeInTheDocument();
    expect(screen.getByText('New Password')).toBeInTheDocument();
  });

  // ── Accessibility ─────────────────────────────────────────────────────────

  it('renders a main landmark', () => {
    renderForgotPassword();
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('identifier input has aria-invalid=false initially', () => {
    renderForgotPassword();
    expect(screen.getByLabelText(/Email, Mobile Number, or User ID/i)).toHaveAttribute(
      'aria-invalid',
      'false'
    );
  });

  it('identifier input has aria-invalid=true after failed validation', async () => {
    const user = userEvent.setup();
    renderForgotPassword();
    await user.click(screen.getByRole('button', { name: 'Send OTP' }));
    expect(screen.getByLabelText(/Email, Mobile Number, or User ID/i)).toHaveAttribute(
      'aria-invalid',
      'true'
    );
  });
});
