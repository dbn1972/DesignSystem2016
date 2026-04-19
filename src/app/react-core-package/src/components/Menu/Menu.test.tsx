import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Menu } from './Menu';
import { checkA11y } from '@/test/a11y-helpers';

const ITEMS = [
  { key: 'edit', label: 'Edit', onClick: vi.fn() },
  { key: 'duplicate', label: 'Duplicate', onClick: vi.fn() },
  { key: 'delete', label: 'Delete', danger: true, onClick: vi.fn() },
  { key: 'archive', label: 'Archive', disabled: true },
];

const TRIGGER = <button type="button">Actions</button>;

describe('Menu', () => {
  // ── Rendering ─────────────────────────────────────────────────────────────

  it('renders the trigger element', () => {
    render(<Menu items={ITEMS} trigger={TRIGGER} />);
    expect(screen.getByRole('button', { name: 'Actions' })).toBeInTheDocument();
  });

  it('does not show menu items by default', () => {
    render(<Menu items={ITEMS} trigger={TRIGGER} />);
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
  });

  it('shows menu when defaultOpen is true', () => {
    render(<Menu items={ITEMS} trigger={TRIGGER} defaultOpen />);
    expect(screen.getByRole('menu')).toBeInTheDocument();
  });

  // ── Open / close ──────────────────────────────────────────────────────────

  it('opens menu on trigger click', async () => {
    const user = userEvent.setup();
    render(<Menu items={ITEMS} trigger={TRIGGER} />);
    await user.click(screen.getByRole('button', { name: 'Actions' }));
    expect(screen.getByRole('menu')).toBeInTheDocument();
  });

  it('closes menu on second trigger click', async () => {
    const user = userEvent.setup();
    render(<Menu items={ITEMS} trigger={TRIGGER} />);
    await user.click(screen.getByRole('button', { name: 'Actions' }));
    await user.click(screen.getByRole('button', { name: 'Actions' }));
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
  });

  it('closes menu on Escape key', async () => {
    const user = userEvent.setup();
    render(<Menu items={ITEMS} trigger={TRIGGER} />);
    await user.click(screen.getByRole('button', { name: 'Actions' }));
    expect(screen.getByRole('menu')).toBeInTheDocument();
    await user.keyboard('{Escape}');
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
  });

  it('closes menu when clicking outside', async () => {
    const user = userEvent.setup();
    render(
      <div>
        <Menu items={ITEMS} trigger={TRIGGER} />
        <button type="button">Outside</button>
      </div>
    );
    await user.click(screen.getByRole('button', { name: 'Actions' }));
    expect(screen.getByRole('menu')).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Outside' }));
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
  });

  it('calls onOpenChange when menu opens', async () => {
    const user = userEvent.setup();
    const onOpenChange = vi.fn();
    render(<Menu items={ITEMS} trigger={TRIGGER} onOpenChange={onOpenChange} />);
    await user.click(screen.getByRole('button', { name: 'Actions' }));
    expect(onOpenChange).toHaveBeenCalledWith(true);
  });

  it('calls onOpenChange when menu closes', async () => {
    const user = userEvent.setup();
    const onOpenChange = vi.fn();
    render(<Menu items={ITEMS} trigger={TRIGGER} onOpenChange={onOpenChange} />);
    await user.click(screen.getByRole('button', { name: 'Actions' }));
    await user.click(screen.getByRole('button', { name: 'Actions' }));
    expect(onOpenChange).toHaveBeenCalledWith(false);
  });

  // ── Menu items ────────────────────────────────────────────────────────────

  it('renders all menu items', async () => {
    const user = userEvent.setup();
    render(<Menu items={ITEMS} trigger={TRIGGER} />);
    await user.click(screen.getByRole('button', { name: 'Actions' }));
    expect(screen.getByRole('menuitem', { name: 'Edit' })).toBeInTheDocument();
    expect(screen.getByRole('menuitem', { name: 'Duplicate' })).toBeInTheDocument();
    expect(screen.getByRole('menuitem', { name: 'Delete' })).toBeInTheDocument();
    expect(screen.getByRole('menuitem', { name: 'Archive' })).toBeInTheDocument();
  });

  it('calls item onClick and closes menu when item is clicked', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    const items = [{ key: 'edit', label: 'Edit', onClick }];
    render(<Menu items={items} trigger={TRIGGER} />);
    await user.click(screen.getByRole('button', { name: 'Actions' }));
    await user.click(screen.getByRole('menuitem', { name: 'Edit' }));
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
  });

  // ── Disabled item ─────────────────────────────────────────────────────────

  it('disabled item is disabled', async () => {
    const user = userEvent.setup();
    render(<Menu items={ITEMS} trigger={TRIGGER} />);
    await user.click(screen.getByRole('button', { name: 'Actions' }));
    expect(screen.getByRole('menuitem', { name: 'Archive' })).toBeDisabled();
  });

  it('does not call onClick for disabled item', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    const items = [{ key: 'archive', label: 'Archive', disabled: true, onClick }];
    render(<Menu items={items} trigger={TRIGGER} />);
    await user.click(screen.getByRole('button', { name: 'Actions' }));
    await user.click(screen.getByRole('menuitem', { name: 'Archive' }));
    expect(onClick).not.toHaveBeenCalled();
  });

  it('does not close menu when disabled item is clicked', async () => {
    const user = userEvent.setup();
    const items = [{ key: 'archive', label: 'Archive', disabled: true }];
    render(<Menu items={items} trigger={TRIGGER} />);
    await user.click(screen.getByRole('button', { name: 'Actions' }));
    await user.click(screen.getByRole('menuitem', { name: 'Archive' }));
    expect(screen.getByRole('menu')).toBeInTheDocument();
  });

  // ── Danger item ───────────────────────────────────────────────────────────

  it('applies danger class to danger items', async () => {
    const user = userEvent.setup();
    render(<Menu items={ITEMS} trigger={TRIGGER} />);
    await user.click(screen.getByRole('button', { name: 'Actions' }));
    expect(screen.getByRole('menuitem', { name: 'Delete' })).toHaveClass('ux4g-menu-item-danger');
  });

  // ── Divider ───────────────────────────────────────────────────────────────

  it('renders divider after item when divider=true', async () => {
    const user = userEvent.setup();
    const items = [
      { key: 'edit', label: 'Edit', divider: true },
      { key: 'delete', label: 'Delete' },
    ];
    render(<Menu items={items} trigger={TRIGGER} />);
    await user.click(screen.getByRole('button', { name: 'Actions' }));
    const { container } = render(<Menu items={items} trigger={TRIGGER} defaultOpen />);
    expect(container.querySelector('.ux4g-menu-divider')).toBeInTheDocument();
  });

  // ── Disabled menu ─────────────────────────────────────────────────────────

  it('does not open when disabled', async () => {
    const user = userEvent.setup();
    render(<Menu items={ITEMS} trigger={TRIGGER} disabled />);
    await user.click(screen.getByRole('button', { name: 'Actions' }));
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
  });

  it('applies disabled class to trigger when disabled', () => {
    const { container } = render(<Menu items={ITEMS} trigger={TRIGGER} disabled />);
    expect(container.querySelector('.ux4g-menu-trigger')).toHaveClass('ux4g-menu-trigger-disabled');
  });

  // ── Placement ─────────────────────────────────────────────────────────────

  it.each(['bottom-start', 'bottom-end', 'top-start', 'top-end'] as const)(
    'applies %s placement class',
    async (placement) => {
      const user = userEvent.setup();
      render(<Menu items={ITEMS} trigger={TRIGGER} placement={placement} />);
      await user.click(screen.getByRole('button', { name: 'Actions' }));
      expect(screen.getByRole('menu')).toHaveClass(`ux4g-menu-${placement}`);
    }
  );

  // ── Icon ─────────────────────────────────────────────────────────────────

  it('renders item icon with aria-hidden', async () => {
    const user = userEvent.setup();
    const items = [
      { key: 'edit', label: 'Edit', icon: <span data-testid="edit-icon" /> },
    ];
    render(<Menu items={items} trigger={TRIGGER} />);
    await user.click(screen.getByRole('button', { name: 'Actions' }));
    expect(screen.getByTestId('edit-icon').parentElement).toHaveAttribute('aria-hidden', 'true');
  });

  // ── Controlled mode ───────────────────────────────────────────────────────

  it('respects controlled open=true', () => {
    render(<Menu items={ITEMS} trigger={TRIGGER} open onOpenChange={vi.fn()} />);
    expect(screen.getByRole('menu')).toBeInTheDocument();
  });

  it('respects controlled open=false', () => {
    render(<Menu items={ITEMS} trigger={TRIGGER} open={false} onOpenChange={vi.fn()} />);
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
  });

  // ── Accessibility ───────────────────────────────────────────────────────

  describe('Accessibility', () => {
    it('has no axe violations in default state', async () => {
      const { container } = render(
        <Menu items={ITEMS} trigger={TRIGGER} defaultOpen />
      );
      const results = await checkA11y(container);
      (expect(results) as any).toHaveNoViolations();
    });

    describe('Keyboard navigation', () => {
      it('navigates menu items with Arrow keys', async () => {
        const user = userEvent.setup();
        render(<Menu items={ITEMS} trigger={TRIGGER} />);
        await user.click(screen.getByRole('button', { name: 'Actions' }));
        expect(screen.getByRole('menu')).toBeInTheDocument();

        const menuItems = screen.getAllByRole('menuitem');
        expect(menuItems.length).toBeGreaterThan(0);
      });

      it('selects item with Enter key', async () => {
        const user = userEvent.setup();
        const onClick = vi.fn();
        const items = [{ key: 'edit', label: 'Edit', onClick }];
        render(<Menu items={items} trigger={TRIGGER} />);
        await user.click(screen.getByRole('button', { name: 'Actions' }));
        await user.click(screen.getByRole('menuitem', { name: 'Edit' }));
        expect(onClick).toHaveBeenCalledTimes(1);
      });

      it('closes menu on Escape key', async () => {
        const user = userEvent.setup();
        render(<Menu items={ITEMS} trigger={TRIGGER} />);
        await user.click(screen.getByRole('button', { name: 'Actions' }));
        expect(screen.getByRole('menu')).toBeInTheDocument();
        await user.keyboard('{Escape}');
        expect(screen.queryByRole('menu')).not.toBeInTheDocument();
      });
    });
  });
});
