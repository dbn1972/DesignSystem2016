import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AadhaarInput, isValidAadhaar } from './AadhaarInput';

describe('AadhaarInput', () => {
  it('renders with label', () => {
    render(<AadhaarInput id="a" label="Aadhaar Number" />);
    expect(screen.getByLabelText('Aadhaar Number')).toBeInTheDocument();
  });

  it('renders placeholder', () => {
    render(<AadhaarInput id="a" />);
    expect(screen.getByPlaceholderText('XXXX XXXX XXXX')).toBeInTheDocument();
  });

  it('formats value as XXXX XXXX XXXX', () => {
    render(<AadhaarInput id="a" value="234567890123" />);
    expect(screen.getByRole('textbox')).toHaveValue('2345 6789 0123');
  });

  it('formats partial value', () => {
    render(<AadhaarInput id="a" value="23456" />);
    expect(screen.getByRole('textbox')).toHaveValue('2345 6');
  });

  it('calls onChange with raw digits', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<AadhaarInput id="a" value="" onChange={onChange} />);
    await user.type(screen.getByRole('textbox'), '2345');
    expect(onChange).toHaveBeenCalled();
    // Each keystroke calls onChange with accumulated digits
    const lastCall = onChange.mock.calls[onChange.mock.calls.length - 1][0];
    expect(lastCall).toMatch(/^\d+$/);
  });

  it('strips non-digit characters', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<AadhaarInput id="a" value="" onChange={onChange} />);
    await user.type(screen.getByRole('textbox'), 'abc123');
    const calls = onChange.mock.calls.map((c: string[]) => c[0]);
    calls.forEach((v: string) => expect(v).toMatch(/^\d*$/));
  });

  it('limits to 12 digits', () => {
    render(<AadhaarInput id="a" value="1234567890123456" />);
    expect(screen.getByRole('textbox')).toHaveValue('1234 5678 9012');
  });

  it('shows error text', () => {
    render(<AadhaarInput id="a" errorText="Invalid Aadhaar" />);
    expect(screen.getByText('Invalid Aadhaar')).toBeInTheDocument();
    expect(screen.getByRole('alert')).toBeInTheDocument();
  });

  it('shows hint text', () => {
    render(<AadhaarInput id="a" hint="Enter your 12-digit Aadhaar" />);
    expect(screen.getByText('Enter your 12-digit Aadhaar')).toBeInTheDocument();
  });

  it('hides hint when error is shown', () => {
    render(<AadhaarInput id="a" hint="Hint" errorText="Error" />);
    expect(screen.queryByText('Hint')).not.toBeInTheDocument();
    expect(screen.getByText('Error')).toBeInTheDocument();
  });

  it('sets aria-invalid when error', () => {
    render(<AadhaarInput id="a" error />);
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true');
  });

  it('sets aria-required when required', () => {
    render(<AadhaarInput id="a" required />);
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-required', 'true');
  });

  it('shows required indicator', () => {
    render(<AadhaarInput id="a" required />);
    expect(screen.getByText('*')).toBeInTheDocument();
  });

  it('is disabled when disabled prop set', () => {
    render(<AadhaarInput id="a" disabled />);
    expect(screen.getByRole('textbox')).toBeDisabled();
  });

  it('has inputMode="numeric"', () => {
    render(<AadhaarInput id="a" />);
    expect(screen.getByRole('textbox')).toHaveAttribute('inputMode', 'numeric');
  });

  it('forwards ref', () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<AadhaarInput id="a" ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });
});

describe('isValidAadhaar', () => {
  it('returns true for valid 12-digit Aadhaar', () => {
    expect(isValidAadhaar('234567890123')).toBe(true);
  });

  it('returns true for formatted Aadhaar', () => {
    expect(isValidAadhaar('2345 6789 0123')).toBe(true);
  });

  it('returns false for too few digits', () => {
    expect(isValidAadhaar('12345')).toBe(false);
  });

  it('returns false for Aadhaar starting with 0', () => {
    expect(isValidAadhaar('034567890123')).toBe(false);
  });

  it('returns false for Aadhaar starting with 1', () => {
    expect(isValidAadhaar('134567890123')).toBe(false);
  });

  it('returns false for empty string', () => {
    expect(isValidAadhaar('')).toBe(false);
  });
});
