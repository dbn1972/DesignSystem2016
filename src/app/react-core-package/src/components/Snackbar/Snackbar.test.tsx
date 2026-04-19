import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Snackbar } from './Snackbar';
import { assertA11y, assertA11yStates } from '@/test/a11y-helpers';

describe('Snackbar', () => {
  it('renders message', () => {
    render(<Snackbar message="Item saved" />);
    expect(screen.getByText('Item saved')).toBeInTheDocument();
  });

  it('renders action button when action is provided', () => {
    render(<Snackbar message="Deleted" action={{ label: 'Undo', onClick: vi.fn() }} />);
    expect(screen.getByRole('button', { name: 'Undo' })).toBeInTheDocument();
  });

  it('calls action onClick when action button is clicked', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<Snackbar message="Deleted" action={{ label: 'Undo', onClick }} />);
    await user.click(screen.getByRole('button', { name: 'Undo' }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('forwards ref', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<Snackbar message="Saved" ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  // ── Accessibility ───────────────────────────────────────────────────────

  describe('Accessibility', () => {
    it('has no axe violations in default state', async () => {
      await assertA11y(<Snackbar message="Item saved" />);
    });

    it('has no axe violations across variants', async () => {
      await assertA11yStates([
        { name: 'info', ui: <Snackbar message="Info" variant="info" /> },
        { name: 'success', ui: <Snackbar message="Success" variant="success" /> },
        { name: 'warning', ui: <Snackbar message="Warning" variant="warning" /> },
        { name: 'error', ui: <Snackbar message="Error" variant="error" /> },
      ]);
    });

    describe('Keyboard navigation', () => {
      it('Tab focuses action button', async () => {
        const user = userEvent.setup();
        render(<Snackbar message="Deleted" action={{ label: 'Undo', onClick: vi.fn() }} />);
        await user.tab();
        expect(screen.getByRole('button', { name: 'Undo' })).toHaveFocus();
      });
    });
  });
});
