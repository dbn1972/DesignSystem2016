import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Dialog } from './Dialog';

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
});
