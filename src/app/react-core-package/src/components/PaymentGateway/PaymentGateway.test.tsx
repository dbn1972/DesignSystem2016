import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { PaymentGateway } from './PaymentGateway';

describe('PaymentGateway', () => {
  const defaultProps = { amount: 500, merchantName: 'Gov Services', upiId: 'gov@upi' };

  it('renders formatted amount', () => {
    render(<PaymentGateway {...defaultProps} />);
    expect(screen.getByText('₹500.00')).toBeInTheDocument();
  });

  it('renders merchant name', () => {
    render(<PaymentGateway {...defaultProps} />);
    expect(screen.getByText('Gov Services')).toBeInTheDocument();
  });

  it('renders UPI ID', () => {
    render(<PaymentGateway {...defaultProps} />);
    expect(screen.getByText('gov@upi')).toBeInTheDocument();
  });

  it('renders pay button', () => {
    render(<PaymentGateway {...defaultProps} />);
    expect(screen.getByRole('button', { name: /pay/i })).toBeInTheDocument();
  });

  it('calls onSuccess when pay button is clicked', async () => {
    const user = userEvent.setup();
    const onSuccess = vi.fn();
    render(<PaymentGateway {...defaultProps} onSuccess={onSuccess} />);
    await user.click(screen.getByRole('button', { name: /pay/i }));
    expect(onSuccess).toHaveBeenCalledOnce();
  });

  it('displays Pay to label', () => {
    render(<PaymentGateway {...defaultProps} />);
    expect(screen.getByText('Pay to')).toBeInTheDocument();
  });

  it('displays UPI ID label', () => {
    render(<PaymentGateway {...defaultProps} />);
    expect(screen.getByText('UPI ID')).toBeInTheDocument();
  });

  it('forwards ref', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<PaymentGateway {...defaultProps} ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
