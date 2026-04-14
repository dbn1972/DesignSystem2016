import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';
import { SignUpService } from '../SignUpService';

vi.mock('../../../services/signUpService', () => ({
  registerUser: vi.fn().mockResolvedValue({ success: true, userId: 'u1', otpSent: true, mobileNumber: '9876543210', message: 'OTP sent' }),
}));

const BASE_PROPS = {
  category: 'Certificate Service',
  title: 'Create Account',
  subtitle: 'Register for Government Services',
  backLink: '/',
  backText: 'Back',
  signInPath: '/sign-in',
  verifyOtpPath: '/verify-otp',
  helpPath: '/help',
  serviceName: 'Certificate Service',
};

function renderSignUp() {
  return render(
    <MemoryRouter>
      <SignUpService {...BASE_PROPS} />
    </MemoryRouter>
  );
}

describe('SignUpService', () => {
  // ── Rendering ─────────────────────────────────────────────────────────────

  it('renders the registration form', () => {
    renderSignUp();
    expect(screen.getByPlaceholderText('Enter your full name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter 10-digit mobile number')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Minimum 8 characters')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Re-enter your password')).toBeInTheDocument();
  });

  it('renders the Create Account submit button', () => {
    renderSignUp();
    expect(screen.getByRole('button', { name: 'Create Account' })).toBeInTheDocument();
  });

  it('renders a link to sign in', () => {
    renderSignUp();
    expect(screen.getByRole('link', { name: 'Sign in' })).toBeInTheDocument();
  });

  // ── Validation ────────────────────────────────────────────────────────────

  it('shows validation errors when submitting empty form', async () => {
    const user = userEvent.setup();
    renderSignUp();
    await user.click(screen.getByRole('button', { name: 'Create Account' }));
    expect(screen.getAllByRole('alert').length).toBeGreaterThan(0);
  });

  it('shows error for missing full name', async () => {
    const user = userEvent.setup();
    renderSignUp();
    await user.click(screen.getByRole('button', { name: 'Create Account' }));
    // The alert for full name should be present
    const alerts = screen.getAllByRole('alert');
    expect(alerts.some((a) => /name/i.test(a.textContent ?? ''))).toBe(true);
  });

  it('shows error for invalid mobile number', async () => {
    const user = userEvent.setup();
    renderSignUp();
    await user.type(screen.getByPlaceholderText('Enter 10-digit mobile number'), '123');
    await user.click(screen.getByRole('button', { name: 'Create Account' }));
    const alerts = screen.getAllByRole('alert');
    expect(alerts.some((a) => a.textContent?.toLowerCase().includes('mobile'))).toBe(true);
  });

  it('shows error when passwords do not match', async () => {
    const user = userEvent.setup();
    renderSignUp();
    await user.type(screen.getByPlaceholderText('Minimum 8 characters'), 'Password1');
    await user.type(screen.getByPlaceholderText('Re-enter your password'), 'Different1');
    await user.click(screen.getByRole('button', { name: 'Create Account' }));
    expect(screen.getByText(/do not match/i)).toBeInTheDocument();
  });

  it('shows error when terms are not accepted', async () => {
    const user = userEvent.setup();
    renderSignUp();
    await user.type(screen.getByPlaceholderText('Enter your full name'), 'Priya Sharma');
    await user.type(screen.getByPlaceholderText('Enter 10-digit mobile number'), '9876543210');
    await user.type(screen.getByPlaceholderText('Minimum 8 characters'), 'Password1');
    await user.type(screen.getByPlaceholderText('Re-enter your password'), 'Password1');
    await user.click(screen.getByRole('button', { name: 'Create Account' }));
    const alerts = screen.getAllByRole('alert');
    expect(alerts.some((a) => /terms/i.test(a.textContent ?? ''))).toBe(true);
  });

  // ── Password visibility toggle ────────────────────────────────────────────

  it('toggles password visibility', async () => {
    const user = userEvent.setup();
    renderSignUp();
    const passwordInput = screen.getByPlaceholderText('Minimum 8 characters');
    expect(passwordInput).toHaveAttribute('type', 'password');
    await user.click(screen.getByRole('button', { name: 'Show password' }));
    expect(passwordInput).toHaveAttribute('type', 'text');
    await user.click(screen.getByRole('button', { name: 'Hide password' }));
    expect(passwordInput).toHaveAttribute('type', 'password');
  });

  // ── Password strength ─────────────────────────────────────────────────────

  it('shows password strength indicator when password is entered', async () => {
    const user = userEvent.setup();
    renderSignUp();
    await user.type(screen.getByPlaceholderText('Minimum 8 characters'), 'Pass1234');
    expect(screen.getByText(/Password strength/i)).toBeInTheDocument();
  });

  // ── Accessibility ─────────────────────────────────────────────────────────

  it('renders a main landmark', () => {
    renderSignUp();
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('terms checkbox is accessible', () => {
    renderSignUp();
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });
});
