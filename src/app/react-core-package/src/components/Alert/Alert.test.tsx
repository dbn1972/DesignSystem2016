import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Alert } from './Alert';

describe('Alert', () => {
  // ── Rendering ─────────────────────────────────────────────────────────────

  it('renders with role="alert"', () => {
    render(<Alert>Something happened</Alert>);
    expect(screen.getByRole('alert')).toBeInTheDocument();
  });

  it('renders children content', () => {
    render(<Alert>Application submitted</Alert>);
    expect(screen.getByText('Application submitted')).toBeInTheDocument();
  });

  it('renders title when provided', () => {
    render(<Alert title="Success">Done</Alert>);
    expect(screen.getByText('Success')).toBeInTheDocument();
  });

  it('renders description when provided', () => {
    render(<Alert description="Your form was saved." />);
    expect(screen.getByText('Your form was saved.')).toBeInTheDocument();
  });

  // ── Variants ─────────────────────────────────────────────────────────────

  it.each(['info', 'success', 'warning', 'error'] as const)(
    'applies %s variant class',
    (variant) => {
      render(<Alert variant={variant}>Message</Alert>);
      expect(screen.getByRole('alert')).toHaveClass(`ux4g-alert-${variant}`);
    }
  );

  it('defaults to info variant', () => {
    render(<Alert>Message</Alert>);
    expect(screen.getByRole('alert')).toHaveClass('ux4g-alert-info');
  });

  // ── Icon ─────────────────────────────────────────────────────────────────

  it('shows default icon by default', () => {
    render(<Alert variant="success">Done</Alert>);
    // Icon container is aria-hidden, so query by class
    const iconEl = screen.getByRole('alert').querySelector('.ux4g-alert-icon');
    expect(iconEl).toBeInTheDocument();
    expect(iconEl).toHaveAttribute('aria-hidden', 'true');
  });

  it('hides icon when showIcon is false', () => {
    render(<Alert showIcon={false}>Done</Alert>);
    expect(screen.getByRole('alert').querySelector('.ux4g-alert-icon')).not.toBeInTheDocument();
  });

  it('renders custom icon when provided', () => {
    render(<Alert icon={<span data-testid="custom-icon" />}>Done</Alert>);
    expect(screen.getByTestId('custom-icon')).toBeInTheDocument();
  });

  // ── Close button ──────────────────────────────────────────────────────────

  it('does not render close button when onClose is not provided', () => {
    render(<Alert>Message</Alert>);
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('renders close button when onClose is provided', () => {
    render(<Alert onClose={vi.fn()}>Message</Alert>);
    expect(screen.getByRole('button', { name: 'Close alert' })).toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    render(<Alert onClose={onClose}>Message</Alert>);
    await user.click(screen.getByRole('button', { name: 'Close alert' }));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('uses custom closeLabel for the close button', () => {
    render(<Alert onClose={vi.fn()} closeLabel="Dismiss notification">Message</Alert>);
    expect(screen.getByRole('button', { name: 'Dismiss notification' })).toBeInTheDocument();
  });

  it('close button is keyboard accessible', async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    render(<Alert onClose={onClose}>Message</Alert>);
    screen.getByRole('button', { name: 'Close alert' }).focus();
    await user.keyboard('{Enter}');
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  // ── Ref forwarding ────────────────────────────────────────────────────────

  it('forwards ref to the alert div', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<Alert ref={ref}>Message</Alert>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
