import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Notification } from './Notification';
import { assertA11y, assertA11yStates } from '@/test/a11y-helpers';

describe('Notification', () => {
  it('renders title', () => {
    render(<Notification title="New update" />);
    expect(screen.getByText('New update')).toBeInTheDocument();
  });

  it('renders description when provided', () => {
    render(<Notification title="Update" description="Version 2.0 is available." />);
    expect(screen.getByText('Version 2.0 is available.')).toBeInTheDocument();
  });

  it('renders dismiss button when onDismiss is provided', () => {
    render(<Notification title="Update" onDismiss={vi.fn()} />);
    expect(screen.getByRole('button', { name: 'Dismiss notification' })).toBeInTheDocument();
  });

  it('calls onDismiss when dismiss button is clicked', async () => {
    const user = userEvent.setup();
    const onDismiss = vi.fn();
    render(<Notification title="Update" onDismiss={onDismiss} />);
    await user.click(screen.getByRole('button', { name: 'Dismiss notification' }));
    expect(onDismiss).toHaveBeenCalledTimes(1);
  });

  it('forwards ref', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<Notification title="Update" ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  // ── Accessibility ───────────────────────────────────────────────────────

  describe('Accessibility', () => {
    it('has no axe violations in default state', async () => {
      await assertA11y(<Notification title="New update available" />);
    });

    it('has no axe violations across variants', async () => {
      await assertA11yStates([
        { name: 'info', ui: <Notification title="Info" variant="info" /> },
        { name: 'success', ui: <Notification title="Success" variant="success" /> },
        { name: 'warning', ui: <Notification title="Warning" variant="warning" /> },
        { name: 'error', ui: <Notification title="Error" variant="error" /> },
      ]);
    });

    describe('Keyboard navigation', () => {
      it('Tab focuses dismiss action', async () => {
        const user = userEvent.setup();
        render(<Notification title="Update" onDismiss={vi.fn()} />);
        await user.tab();
        expect(screen.getByRole('button', { name: 'Dismiss notification' })).toHaveFocus();
      });
    });
  });
});
