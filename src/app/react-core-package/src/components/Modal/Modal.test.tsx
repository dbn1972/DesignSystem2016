import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Modal } from './Modal';
import { assertA11y, checkA11y } from '@/test/a11y-helpers';

describe('Modal', () => {
  it('renders when open', () => { render(<Modal open onClose={() => {}}>Content</Modal>); expect(screen.getByRole('dialog')).toBeInTheDocument(); });
  it('does not render when closed', () => { render(<Modal open={false} onClose={() => {}}>Content</Modal>); expect(screen.queryByRole('dialog')).not.toBeInTheDocument(); });
  it('renders title', () => { render(<Modal open onClose={() => {}} title="Confirm">C</Modal>); expect(screen.getByText('Confirm')).toBeInTheDocument(); });
  it('renders description', () => { render(<Modal open onClose={() => {}} title="T" description="Are you sure?">C</Modal>); expect(screen.getByText('Are you sure?')).toBeInTheDocument(); });
  it('has close button', () => { render(<Modal open onClose={() => {}}>C</Modal>); expect(screen.getByRole('button', { name: 'Close dialog' })).toBeInTheDocument(); });
  it('calls onClose when close button clicked', async () => { const user = userEvent.setup(); const onClose = vi.fn(); render(<Modal open onClose={onClose}>C</Modal>); await user.click(screen.getByRole('button', { name: 'Close dialog' })); expect(onClose).toHaveBeenCalled(); });
  it('calls onClose on Escape key', async () => { const user = userEvent.setup(); const onClose = vi.fn(); render(<Modal open onClose={onClose}>C</Modal>); await user.keyboard('{Escape}'); expect(onClose).toHaveBeenCalled(); });
  it('has aria-modal="true"', () => { render(<Modal open onClose={() => {}}>C</Modal>); expect(screen.getByRole('dialog')).toHaveAttribute('aria-modal', 'true'); });
  it('forwards ref', () => { const ref = React.createRef<HTMLDivElement>(); render(<Modal open onClose={() => {}} ref={ref}>C</Modal>); expect(ref.current).toBeInstanceOf(HTMLDivElement); });

  // ── Accessibility ───────────────────────────────────────────────────────

  describe('Accessibility', () => {
    it('has no axe violations in open state', async () => {
      const { container } = render(
        <Modal open onClose={() => {}} title="Accessible modal">
          <p>Modal content</p>
        </Modal>
      );
      const results = await checkA11y(container);
      (expect(results) as any).toHaveNoViolations();
    });

    describe('Keyboard navigation', () => {
      it('traps focus inside the modal via Tab', async () => {
        const user = userEvent.setup();
        render(
          <Modal open onClose={() => {}}>
            <button type="button">First</button>
            <button type="button">Second</button>
          </Modal>
        );

        const closeBtn = screen.getByRole('button', { name: 'Close dialog' });
        const firstBtn = screen.getByRole('button', { name: 'First' });
        const secondBtn = screen.getByRole('button', { name: 'Second' });

        closeBtn.focus();
        await user.tab();
        expect(firstBtn).toHaveFocus();
        await user.tab();
        expect(secondBtn).toHaveFocus();
      });

      it('closes on Escape key', async () => {
        const user = userEvent.setup();
        const onClose = vi.fn();
        render(
          <Modal open onClose={onClose}>
            <p>Content</p>
          </Modal>
        );
        await user.keyboard('{Escape}');
        expect(onClose).toHaveBeenCalledTimes(1);
      });
    });
  });
});
