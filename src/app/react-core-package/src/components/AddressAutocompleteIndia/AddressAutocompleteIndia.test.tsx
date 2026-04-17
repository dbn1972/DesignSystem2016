import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AddressAutocompleteIndia } from './AddressAutocompleteIndia';

describe('AddressAutocompleteIndia', () => {
  it('renders all address fields', () => {
    render(<AddressAutocompleteIndia />);
    expect(screen.getByLabelText('Pincode')).toBeInTheDocument();
    expect(screen.getByLabelText('State')).toBeInTheDocument();
    expect(screen.getByLabelText('District')).toBeInTheDocument();
    expect(screen.getByLabelText('City')).toBeInTheDocument();
    expect(screen.getByLabelText('Full Address')).toBeInTheDocument();
  });

  it('renders pincode input with numeric inputMode', () => {
    render(<AddressAutocompleteIndia />);
    expect(screen.getByLabelText('Pincode')).toHaveAttribute('inputMode', 'numeric');
  });

  it('renders label', () => {
    render(<AddressAutocompleteIndia label="Home Address" />);
    expect(screen.getByText('Home Address')).toBeInTheDocument();
  });

  it('shows error text', () => {
    render(<AddressAutocompleteIndia errorText="Address is required" />);
    expect(screen.getByText('Address is required')).toBeInTheDocument();
    expect(screen.getByRole('alert')).toBeInTheDocument();
  });

  it('disables all fields when disabled', () => {
    render(<AddressAutocompleteIndia disabled />);
    expect(screen.getByLabelText('Pincode')).toBeDisabled();
    expect(screen.getByLabelText('State')).toBeDisabled();
    expect(screen.getByLabelText('City')).toBeDisabled();
  });

  it('calls onChange when pincode is entered', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<AddressAutocompleteIndia value={{ pincode: '', state: '', district: '', city: '', address: '' }} onChange={onChange} />);
    await user.type(screen.getByLabelText('Pincode'), '1');
    expect(onChange).toHaveBeenCalled();
  });

  it('shows required indicator', () => {
    render(<AddressAutocompleteIndia required />);
    expect(screen.getByText('*')).toBeInTheDocument();
  });

  it('forwards ref', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<AddressAutocompleteIndia ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
