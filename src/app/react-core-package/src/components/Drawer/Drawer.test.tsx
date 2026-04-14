import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Drawer } from './Drawer';

describe('Drawer', () => {
  // ── Rendering ─────────────────────────────────────────────────────────────

  it('renders nothing when closed', () => {
    render(
      <Drawer open={false} onClose={vi.fn()}>
        <p>Drawer content</p>
      </Drawer>
    );
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('renders when open', () => {
    render(
      <Drawer open onClose={vi.fn()}>
        <p>Drawer content</p>
      </Drawer>
    );
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('renders children content', () => {
    render(
      <Drawer open onClose={vi.fn()}>
        <p>Filter options</p>
      </Drawer>
    );
    expect(screen.getByText('Filter options')).toBeInTheDocument();
  });

  it('renders title when provided', () => {
    render(
      <Drawer open onClose={vi.fn()} title="Filter Options">
        <p>Content</p>
      </Drawer>
    );
    expect(screen.getByText('Filter Options')).toBeInTheDocument();
  });

  it('renders footer when provided', () => {
    render(
      <Drawer open onClose={vi.fn()} footer={<button type="button">Apply</button>}>
        <p>Content</p>
      </Drawer>
    );
    expect(screen.getByRole('button', { name: 'Apply' })).toBeInTheDocument();
  });

  // ── Accessibility ─────────────────────────────────────────────────────────

  it('has role="dialog" and aria-modal="true"', () => {
    render(
      <Drawer open onClose={vi.fn()}>
        <p>Content</p>
      </Drawer>
    );
    const dialog = screen.getByRole('dialog');
    expect(dialog).toHaveAttribute('aria-modal', 'true');
  });

  it('sets aria-labelledby when title is provided', () => {
    render(
      <Drawer open onClose={vi.fn()} title="My Drawer">
        <p>Content</p>
      </Drawer>
    );
    const dialog = screen.getByRole('dialog');
    expect(dialog).toHaveAttribute('aria-labelledby', 'drawer-title');
    expect(document.getElementById('drawer-title')).toHaveTextContent('My Drawer');
  });

  it('does not set aria-labelledby when no title', () => {
    render(
      <Drawer open onClose={vi.fn()}>
        <p>Content</p>
      </Drawer>
    );
    expect(screen.getByRole('dialog')).not.toHaveAttribute('aria-labelledby');
  });

  // ── Close button ──────────────────────────────────────────────────────────

  it('renders close button by default', () => {
    render(
      <Drawer open onClose={vi.fn()}>
        <p>Content</p>
      </Drawer>
    );
    expect(screen.getByRole('button', { name: 'Close drawer' })).toBeInTheDocument();
  });

  it('does not render close button when showCloseButton is false', () => {
    render(
      <Drawer open onClose={vi.fn()} showCloseButton={false}>
        <p>Content</p>
      </Drawer>
    );
    expect(screen.queryByRole('button', { name: 'Close drawer' })).not.toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    render(
      <Drawer open onClose={onClose}>
        <p>Content</p>
      </Drawer>
    );
    await user.click(screen.getByRole('button', { name: 'Close drawer' }));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  // ── Escape key ────────────────────────────────────────────────────────────

  it('calls onClose on Escape key press', async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    render(
      <Drawer open onClose={onClose}>
        <p>Content</p>
      </Drawer>
    );
    await user.keyboard('{Escape}');
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('does not call onClose on Escape when closeOnEscape is false', async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    render(
      <Drawer open onClose={onClose} closeOnEscape={false}>
        <p>Content</p>
      </Drawer>
    );
    await user.keyboard('{Escape}');
    expect(onClose).not.toHaveBeenCalled();
  });

  // ── Backdrop click ────────────────────────────────────────────────────────

  it('calls onClose when backdrop is clicked', async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    const { container } = render(
      <Drawer open onClose={onClose}>
        <p>Content</p>
      </Drawer>
    );
    const backdrop = container.querySelector('.ux4g-drawer-backdrop') as HTMLElement;
    await user.click(backdrop);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('does not call onClose when backdrop click is disabled', async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    const { container } = render(
      <Drawer open onClose={onClose} closeOnBackdrop={false}>
        <p>Content</p>
      </Drawer>
    );
    const backdrop = container.querySelector('.ux4g-drawer-backdrop') as HTMLElement;
    await user.click(backdrop);
    expect(onClose).not.toHaveBeenCalled();
  });

  // ── Placement ─────────────────────────────────────────────────────────────

  it.each(['left', 'right', 'top', 'bottom'] as const)(
    'applies %s placement class',
    (placement) => {
      const { container } = render(
        <Drawer open onClose={vi.fn()} placement={placement}>
          <p>Content</p>
        </Drawer>
      );
      expect(container.querySelector('.ux4g-drawer')).toHaveClass(`ux4g-drawer-${placement}`);
    }
  );

  it('defaults to right placement', () => {
    const { container } = render(
      <Drawer open onClose={vi.fn()}>
        <p>Content</p>
      </Drawer>
    );
    expect(container.querySelector('.ux4g-drawer')).toHaveClass('ux4g-drawer-right');
  });

  // ── Size ─────────────────────────────────────────────────────────────────

  it('applies width style for left/right placement', () => {
    const { container } = render(
      <Drawer open onClose={vi.fn()} placement="right" size="500px">
        <p>Content</p>
      </Drawer>
    );
    expect(container.querySelector('.ux4g-drawer')).toHaveStyle({ width: '500px' });
  });

  it('applies height style for top/bottom placement', () => {
    const { container } = render(
      <Drawer open onClose={vi.fn()} placement="bottom" size="300px">
        <p>Content</p>
      </Drawer>
    );
    expect(container.querySelector('.ux4g-drawer')).toHaveStyle({ height: '300px' });
  });
});
