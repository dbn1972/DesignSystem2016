import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Toast } from './Toast';
import { assertA11y, assertA11yStates } from '@/test/a11y-helpers';

describe('Toast', () => {
  // ── Rendering ─────────────────────────────────────────────────────────────

  it('renders the message', () => {
    render(<Toast message="Application submitted" />);
    expect(screen.getByText('Application submitted')).toBeInTheDocument();
  });

  it('renders the title when provided', () => {
    render(<Toast message="Done" title="Success" />);
    expect(screen.getByText('Success')).toBeInTheDocument();
  });

  it('does not render title when not provided', () => {
    render(<Toast message="Done" />);
    expect(screen.queryByText('Success')).not.toBeInTheDocument();
  });

  // ── Role and live region ──────────────────────────────────────────────────

  it('has role="alert"', () => {
    render(<Toast message="Info" />);
    expect(screen.getByRole('alert')).toBeInTheDocument();
  });

  it('uses aria-live="polite" for non-error variants', () => {
    render(<Toast message="Info" variant="info" />);
    expect(screen.getByRole('alert')).toHaveAttribute('aria-live', 'polite');
  });

  it('uses aria-live="assertive" for error variant', () => {
    render(<Toast message="Error occurred" variant="error" />);
    expect(screen.getByRole('alert')).toHaveAttribute('aria-live', 'assertive');
  });

  // ── Variants ─────────────────────────────────────────────────────────────

  it.each(['info', 'success', 'warning', 'error'] as const)(
    'applies %s variant class',
    (variant) => {
      render(<Toast message="Message" variant={variant} />);
      expect(screen.getByRole('alert')).toHaveClass(`ux4g-toast-${variant}`);
    }
  );

  it('defaults to info variant', () => {
    render(<Toast message="Message" />);
    expect(screen.getByRole('alert')).toHaveClass('ux4g-toast-info');
  });

  // ── Icon ─────────────────────────────────────────────────────────────────

  it('renders default icon with aria-hidden', () => {
    render(<Toast message="Done" variant="success" />);
    const icon = screen.getByRole('alert').querySelector('.ux4g-toast-icon');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute('aria-hidden', 'true');
  });

  it('renders custom icon when provided', () => {
    render(<Toast message="Done" icon={<span data-testid="custom-icon" />} />);
    expect(screen.getByTestId('custom-icon')).toBeInTheDocument();
  });

  // ── Close button ──────────────────────────────────────────────────────────

  it('renders close button by default', () => {
    render(<Toast message="Done" onClose={vi.fn()} />);
    expect(screen.getByRole('button', { name: 'Close notification' })).toBeInTheDocument();
  });

  it('does not render close button when closable is false', () => {
    render(<Toast message="Done" closable={false} />);
    expect(screen.queryByRole('button', { name: 'Close notification' })).not.toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    render(<Toast message="Done" onClose={onClose} />);
    await user.click(screen.getByRole('button', { name: 'Close notification' }));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('close button is keyboard accessible', async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    render(<Toast message="Done" onClose={onClose} />);
    screen.getByRole('button', { name: 'Close notification' }).focus();
    await user.keyboard('{Enter}');
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  // ── Action button ─────────────────────────────────────────────────────────

  it('renders action button when action is provided', () => {
    render(
      <Toast
        message="File uploaded"
        action={{ label: 'View file', onClick: vi.fn() }}
      />
    );
    expect(screen.getByRole('button', { name: 'View file' })).toBeInTheDocument();
  });

  it('calls action.onClick when action button is clicked', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(
      <Toast
        message="File uploaded"
        action={{ label: 'View file', onClick }}
      />
    );
    await user.click(screen.getByRole('button', { name: 'View file' }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('does not render action button when action is not provided', () => {
    render(<Toast message="Done" />);
    expect(screen.queryByRole('button', { name: /view/i })).not.toBeInTheDocument();
  });

  // ── Auto-close timer ──────────────────────────────────────────────────────

  it('calls onClose after the specified duration', async () => {
    vi.useFakeTimers();
    const onClose = vi.fn();
    render(<Toast message="Done" duration={1000} onClose={onClose} />);
    expect(onClose).not.toHaveBeenCalled();
    vi.advanceTimersByTime(1000);
    expect(onClose).toHaveBeenCalledTimes(1);
    vi.useRealTimers();
  });

  it('does not auto-close when duration is 0', async () => {
    vi.useFakeTimers();
    const onClose = vi.fn();
    render(<Toast message="Done" duration={0} onClose={onClose} />);
    vi.advanceTimersByTime(10000);
    expect(onClose).not.toHaveBeenCalled();
    vi.useRealTimers();
  });

  it('does not auto-close when onClose is not provided', () => {
    vi.useFakeTimers();
    // Should not throw
    render(<Toast message="Done" duration={1000} />);
    vi.advanceTimersByTime(1000);
    vi.useRealTimers();
  });

  // ── Accessibility ───────────────────────────────────────────────────────

  describe('Accessibility', () => {
    it('has no axe violations in default state', async () => {
      await assertA11y(<Toast message="Notification" onClose={vi.fn()} />);
    });

    it('has no axe violations across variants', async () => {
      await assertA11yStates([
        { name: 'info', ui: <Toast message="Info message" variant="info" onClose={vi.fn()} /> },
        { name: 'success', ui: <Toast message="Success message" variant="success" onClose={vi.fn()} /> },
        { name: 'warning', ui: <Toast message="Warning message" variant="warning" onClose={vi.fn()} /> },
        { name: 'error', ui: <Toast message="Error message" variant="error" onClose={vi.fn()} /> },
      ]);
    });

    describe('Keyboard navigation', () => {
      it('Tab focuses the dismiss button', async () => {
        const user = userEvent.setup();
        render(<Toast message="Done" onClose={vi.fn()} />);
        await user.tab();
        expect(screen.getByRole('button', { name: 'Close notification' })).toHaveFocus();
      });

      it('dismisses via close button with keyboard', async () => {
        const user = userEvent.setup();
        const onClose = vi.fn();
        render(<Toast message="Done" onClose={onClose} />);
        screen.getByRole('button', { name: 'Close notification' }).focus();
        await user.keyboard('{Enter}');
        expect(onClose).toHaveBeenCalledTimes(1);
      });
    });
  });
});
