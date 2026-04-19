import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Dialog } from './Dialog';
import { assertA11y, checkA11y } from '@/test/a11y-helpers';

describe('Dialog', () => {
  it('uses unique accessible title and description wiring', () => {
    render(
      <Dialog open onClose={() => {}} title="Confirm delete" description="This cannot be undone.">
        <button type="button">Delete</button>
      </Dialog>
    );

    const dialog = screen.getByRole('dialog', { name: 'Confirm delete' });
    const describedBy = dialog.getAttribute('aria-describedby');

    expect(describedBy).toBeTruthy();
    expect(document.getElementById(describedBy as string)).toHaveTextContent('This cannot be undone.');
  });

  it('traps focus inside the dialog', async () => {
    const user = userEvent.setup();

    render(
      <Dialog
        open
        onClose={() => {}}
        title="Focus test"
        footer={<button type="button">Footer action</button>}
      >
        <button type="button">First action</button>
      </Dialog>
    );

    expect(screen.getByRole('button', { name: 'Close dialog' })).toHaveFocus();
    await user.tab();
    expect(screen.getByRole('button', { name: 'First action' })).toHaveFocus();
    await user.tab();
    expect(screen.getByRole('button', { name: 'Footer action' })).toHaveFocus();
    await user.tab();
    expect(screen.getByRole('button', { name: 'Close dialog' })).toHaveFocus();
  });

  it('closes on escape when enabled', async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();

    render(
      <Dialog open onClose={onClose} title="Escape test">
        <p>Dialog content</p>
      </Dialog>
    );

    await user.keyboard('{Escape}');
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  // ── Accessibility ───────────────────────────────────────────────────────

  describe('Accessibility', () => {
    it('has no axe violations in open state', async () => {
      const { container } = render(
        <Dialog open onClose={() => {}} title="Accessible dialog">
          <p>Dialog content</p>
        </Dialog>
      );
      const results = await checkA11y(container);
      (expect(results) as any).toHaveNoViolations();
    });

    describe('Keyboard navigation', () => {
      it('traps focus inside the dialog via Tab', async () => {
        const user = userEvent.setup();
        render(
          <Dialog
            open
            onClose={() => {}}
            title="Focus trap test"
            footer={<button type="button">Confirm</button>}
          >
            <button type="button">Action</button>
          </Dialog>
        );

        expect(screen.getByRole('button', { name: 'Close dialog' })).toHaveFocus();
        await user.tab();
        expect(screen.getByRole('button', { name: 'Action' })).toHaveFocus();
        await user.tab();
        expect(screen.getByRole('button', { name: 'Confirm' })).toHaveFocus();
        await user.tab();
        expect(screen.getByRole('button', { name: 'Close dialog' })).toHaveFocus();
      });

      it('closes on Escape key', async () => {
        const user = userEvent.setup();
        const onClose = vi.fn();
        render(
          <Dialog open onClose={onClose} title="Escape test">
            <p>Content</p>
          </Dialog>
        );
        await user.keyboard('{Escape}');
        expect(onClose).toHaveBeenCalledTimes(1);
      });
    });
  });
});


describe('Dialog – additional coverage', () => {
  it('does not render when open is false', () => {
    render(<Dialog open={false} onClose={() => {}} title="Hidden" />);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('renders footer content', () => {
    render(
      <Dialog open onClose={() => {}} title="Test" footer={<button>Save</button>}>
        <p>Body</p>
      </Dialog>
    );
    expect(screen.getByRole('button', { name: 'Save' })).toBeInTheDocument();
  });

  it('renders description text', () => {
    render(
      <Dialog open onClose={() => {}} title="Test" description="Some description">
        <p>Body</p>
      </Dialog>
    );
    expect(screen.getByText('Some description')).toBeInTheDocument();
  });

  it('hides close button when showCloseButton is false', () => {
    render(
      <Dialog open onClose={() => {}} title="Test" showCloseButton={false}>
        <p>Body</p>
      </Dialog>
    );
    expect(screen.queryByRole('button', { name: 'Close dialog' })).not.toBeInTheDocument();
  });

  it('closes on backdrop click when closeOnBackdrop is true', async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    render(
      <Dialog open onClose={onClose} title="Test" closeOnBackdrop>
        <p>Body</p>
      </Dialog>
    );
    // Click the backdrop (the outer div)
    const backdrop = document.querySelector('.ux4g-dialog-backdrop')!;
    await user.click(backdrop);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('does not close on backdrop click when closeOnBackdrop is false', async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    render(
      <Dialog open onClose={onClose} title="Test" closeOnBackdrop={false}>
        <p>Body</p>
      </Dialog>
    );
    const backdrop = document.querySelector('.ux4g-dialog-backdrop')!;
    await user.click(backdrop);
    expect(onClose).not.toHaveBeenCalled();
  });

  it('does not close on Escape when closeOnEscape is false', async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    render(
      <Dialog open onClose={onClose} title="Test" closeOnEscape={false}>
        <p>Body</p>
      </Dialog>
    );
    await user.keyboard('{Escape}');
    expect(onClose).not.toHaveBeenCalled();
  });

  it('applies size class', () => {
    render(
      <Dialog open onClose={() => {}} title="Test" size="lg">
        <p>Body</p>
      </Dialog>
    );
    expect(document.querySelector('.ux4g-dialog-lg')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(
      <Dialog open onClose={() => {}} title="Test" className="my-dialog">
        <p>Body</p>
      </Dialog>
    );
    expect(document.querySelector('.my-dialog')).toBeInTheDocument();
  });

  it('closes dialog via close button click', async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    render(
      <Dialog open onClose={onClose} title="Test">
        <p>Body</p>
      </Dialog>
    );
    await user.click(screen.getByRole('button', { name: 'Close dialog' }));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('sets body overflow to hidden when open', () => {
    render(
      <Dialog open onClose={() => {}} title="Test">
        <p>Body</p>
      </Dialog>
    );
    expect(document.body.style.overflow).toBe('hidden');
  });

  it('restores body overflow when closed', () => {
    const { unmount } = render(
      <Dialog open onClose={() => {}} title="Test">
        <p>Body</p>
      </Dialog>
    );
    unmount();
    // overflow should be restored
    expect(document.body.style.overflow).not.toBe('hidden');
  });

  it('renders without title (no header title element)', () => {
    render(
      <Dialog open onClose={() => {}}>
        <p>Body only</p>
      </Dialog>
    );
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.queryByRole('heading')).not.toBeInTheDocument();
  });

  it('handles shift+tab focus trap (wraps to last element)', async () => {
    const user = userEvent.setup();
    render(
      <Dialog open onClose={() => {}} title="Focus test" footer={<button>Footer</button>}>
        <button>Middle</button>
      </Dialog>
    );
    // Close button should have focus initially
    expect(screen.getByRole('button', { name: 'Close dialog' })).toHaveFocus();
    // Shift+Tab should wrap to last focusable element
    await user.keyboard('{Shift>}{Tab}{/Shift}');
    expect(screen.getByRole('button', { name: 'Footer' })).toHaveFocus();
  });

  it('does not close on clicking inside dialog content', async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    render(
      <Dialog open onClose={onClose} title="Test">
        <button>Inside</button>
      </Dialog>
    );
    await user.click(screen.getByRole('button', { name: 'Inside' }));
    expect(onClose).not.toHaveBeenCalled();
  });
});
