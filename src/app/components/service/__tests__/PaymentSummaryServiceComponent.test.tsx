import React from 'react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';
import { PaymentSummaryService } from '../PaymentSummaryService';

const BASE_PROPS = {
  category: 'Certificate Service',
  title: 'Payment Summary',
  serviceName: 'Certificate Service',
  backPath: '/declaration',
  nextPath: '/payment-receipt',
};

function renderPayment(props = {}) {
  return render(
    <MemoryRouter>
      <PaymentSummaryService {...BASE_PROPS} {...props} />
    </MemoryRouter>
  );
}

beforeEach(() => localStorage.clear());
afterEach(() => localStorage.clear());

describe('PaymentSummaryService (component)', () => {
  it('renders the page title', () => {
    renderPayment();
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Payment Summary');
  });

  it('renders "Fee Summary" heading', () => {
    renderPayment();
    expect(screen.getByText('Fee Summary')).toBeInTheDocument();
  });

  it('renders fee line items', () => {
    renderPayment();
    expect(screen.getByText('Application Processing')).toBeInTheDocument();
    expect(screen.getByText('Service Charge')).toBeInTheDocument();
    expect(screen.getByText('Gateway Charge')).toBeInTheDocument();
  });

  it('renders total amount', () => {
    renderPayment();
    expect(screen.getByText('Total Amount')).toBeInTheDocument();
    // Default draft amount is 155
    expect(screen.getByText('Rs 155')).toBeInTheDocument();
  });

  it('renders "Continue" button initially', () => {
    renderPayment();
    expect(screen.getByRole('button', { name: /Continue/i })).toBeInTheDocument();
  });

  it('shows "Processing Payment..." while processing', async () => {
    const user = userEvent.setup();
    renderPayment();
    await user.click(screen.getByRole('button', { name: /Continue/i }));
    expect(screen.getByText(/Processing Payment/i)).toBeInTheDocument();
  });

  it('shows payment error and Retry button on first attempt failure', () => {
    vi.useFakeTimers();
    render(
      <MemoryRouter>
        <PaymentSummaryService {...BASE_PROPS} />
      </MemoryRouter>
    );
    act(() => {
      fireEvent.click(screen.getByRole('button', { name: /Continue/i }));
    });
    act(() => {
      vi.advanceTimersByTime(1000);
    });
    expect(screen.getByText(/Payment failed/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Retry Payment/i })).toBeInTheDocument();
    vi.useRealTimers();
  });

  it('renders "Back" link', () => {
    renderPayment();
    expect(screen.getByRole('link', { name: /Back/i })).toBeInTheDocument();
  });

  it('renders optional code download link', () => {
    renderPayment({ codeDownloadPath: '/downloads' });
    expect(screen.getByRole('link', { name: /Download React code/i })).toBeInTheDocument();
  });

  it('renders a main landmark', () => {
    renderPayment();
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
