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


describe('AddressAutocompleteIndia – additional coverage', () => {
  it('auto-fills state, district, city when a known pincode is entered', () => {
    const onChange = vi.fn();
    // Simulate the component receiving a 6-digit known pincode
    const { rerender } = render(
      <AddressAutocompleteIndia
        value={{ pincode: '11000', state: '', district: '', city: '', address: '' }}
        onChange={onChange}
      />
    );
    // Simulate typing the last digit by changing the value
    const { fireEvent } = require('@testing-library/react');
    fireEvent.change(screen.getByLabelText('Pincode'), { target: { value: '110001' } });
    const lastCall = onChange.mock.calls[onChange.mock.calls.length - 1][0];
    expect(lastCall.state).toBe('Delhi');
    expect(lastCall.district).toBe('Central Delhi');
    expect(lastCall.city).toBe('New Delhi');
  });

  it('does not auto-fill for unknown pincode', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <AddressAutocompleteIndia
        value={{ pincode: '', state: '', district: '', city: '', address: '' }}
        onChange={onChange}
      />
    );
    await user.type(screen.getByLabelText('Pincode'), '999999');
    const lastCall = onChange.mock.calls[onChange.mock.calls.length - 1][0];
    expect(lastCall.state).toBe('');
    expect(lastCall.district).toBe('');
    expect(lastCall.city).toBe('');
  });

  it('calls onChange when state field is changed', () => {
    const onChange = vi.fn();
    render(
      <AddressAutocompleteIndia
        value={{ pincode: '', state: '', district: '', city: '', address: '' }}
        onChange={onChange}
      />
    );
    const { fireEvent } = require('@testing-library/react');
    fireEvent.change(screen.getByLabelText('State'), { target: { value: 'Karnataka' } });
    expect(onChange).toHaveBeenCalled();
    const lastCall = onChange.mock.calls[onChange.mock.calls.length - 1][0];
    expect(lastCall.state).toBe('Karnataka');
  });

  it('calls onChange when district field is changed', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <AddressAutocompleteIndia
        value={{ pincode: '', state: '', district: '', city: '', address: '' }}
        onChange={onChange}
      />
    );
    await user.type(screen.getByLabelText('District'), 'Bangalore');
    expect(onChange).toHaveBeenCalled();
  });

  it('calls onChange when city field is changed', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <AddressAutocompleteIndia
        value={{ pincode: '', state: '', district: '', city: '', address: '' }}
        onChange={onChange}
      />
    );
    await user.type(screen.getByLabelText('City'), 'Bengaluru');
    expect(onChange).toHaveBeenCalled();
  });

  it('calls onChange when full address textarea is changed', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <AddressAutocompleteIndia
        value={{ pincode: '', state: '', district: '', city: '', address: '' }}
        onChange={onChange}
      />
    );
    await user.type(screen.getByLabelText('Full Address'), '123 Main St');
    expect(onChange).toHaveBeenCalled();
  });

  it('applies error border class when error prop is true', () => {
    const { container } = render(<AddressAutocompleteIndia error />);
    const inputs = container.querySelectorAll('.ux4g-address-input-field');
    inputs.forEach((input) => {
      expect(input).toHaveClass('border-destructive');
    });
  });

  it('applies error border class when errorText is provided', () => {
    const { container } = render(<AddressAutocompleteIndia errorText="Required" />);
    const inputs = container.querySelectorAll('.ux4g-address-input-field');
    inputs.forEach((input) => {
      expect(input).toHaveClass('border-destructive');
    });
  });

  it('applies disabled styling to label', () => {
    render(<AddressAutocompleteIndia disabled label="Address" />);
    expect(screen.getByText('Address')).toHaveClass('text-muted-foreground');
  });

  it('disables the full address textarea when disabled', () => {
    render(<AddressAutocompleteIndia disabled />);
    expect(screen.getByLabelText('Full Address')).toBeDisabled();
  });

  it('disables the district field when disabled', () => {
    render(<AddressAutocompleteIndia disabled />);
    expect(screen.getByLabelText('District')).toBeDisabled();
  });

  it('strips non-numeric characters from pincode input', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(
      <AddressAutocompleteIndia
        value={{ pincode: '', state: '', district: '', city: '', address: '' }}
        onChange={onChange}
      />
    );
    await user.type(screen.getByLabelText('Pincode'), 'abc123');
    // Only numeric chars should be passed
    const calls = onChange.mock.calls;
    calls.forEach((call: any) => {
      expect(call[0].pincode).toMatch(/^\d*$/);
    });
  });

  it('applies custom className', () => {
    const { container } = render(<AddressAutocompleteIndia className="custom" />);
    expect(container.firstChild).toHaveClass('ux4g-address-autocomplete-india', 'custom');
  });

  it('spreads additional props to root div', () => {
    render(<AddressAutocompleteIndia data-testid="addr-root" />);
    expect(screen.getByTestId('addr-root')).toBeInTheDocument();
  });
});
