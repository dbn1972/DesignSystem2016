import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { PANCardInput, isValidPAN } from './PANCardInput';

describe('PANCardInput', () => {
  it('renders with label', () => {
    render(<PANCardInput id="pan" />);
    expect(screen.getByLabelText('PAN Card Number')).toBeInTheDocument();
  });

  it('renders placeholder', () => {
    render(<PANCardInput id="pan" />);
    expect(screen.getByPlaceholderText('ABCDE1234F')).toBeInTheDocument();
  });

  it('displays value in uppercase', () => {
    render(<PANCardInput id="pan" value="abcde1234f" />);
    expect(screen.getByRole('textbox')).toHaveValue('ABCDE1234F');
  });

  it('calls onChange with uppercase alphanumeric only', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<PANCardInput id="pan" value="" onChange={onChange} />);
    await user.type(screen.getByRole('textbox'), 'abc');
    const lastCall = onChange.mock.calls[onChange.mock.calls.length - 1][0];
    expect(lastCall).toMatch(/^[A-Z0-9]*$/);
  });

  it('limits to 10 characters', () => {
    render(<PANCardInput id="pan" value="ABCDE1234FX" />);
    // Value is uppercased and displayed; maxLength on input is 10
    expect(screen.getByRole('textbox')).toHaveAttribute('maxLength', '10');
  });

  it('shows error text', () => {
    render(<PANCardInput id="pan" errorText="Invalid PAN" />);
    expect(screen.getByRole('alert')).toHaveTextContent('Invalid PAN');
  });

  it('shows hint text', () => {
    render(<PANCardInput id="pan" hint="Format: ABCDE1234F" />);
    expect(screen.getByText('Format: ABCDE1234F')).toBeInTheDocument();
  });

  it('sets aria-invalid on error', () => {
    render(<PANCardInput id="pan" error />);
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true');
  });

  it('is disabled when disabled', () => {
    render(<PANCardInput id="pan" disabled />);
    expect(screen.getByRole('textbox')).toBeDisabled();
  });

  it('shows required indicator', () => {
    render(<PANCardInput id="pan" required />);
    expect(screen.getByText('*')).toBeInTheDocument();
  });

  it('forwards ref', () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<PANCardInput id="pan" ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });
});

describe('isValidPAN', () => {
  it('returns true for valid PAN', () => {
    expect(isValidPAN('ABCDE1234F')).toBe(true);
  });

  it('is case-insensitive', () => {
    expect(isValidPAN('abcde1234f')).toBe(true);
  });

  it('returns false for too short', () => {
    expect(isValidPAN('ABCDE')).toBe(false);
  });

  it('returns false for wrong format', () => {
    expect(isValidPAN('12345ABCDE')).toBe(false);
  });

  it('returns false for empty', () => {
    expect(isValidPAN('')).toBe(false);
  });
});
