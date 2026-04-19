import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Popover } from './Popover';
import { assertA11y, checkA11y } from '@/test/a11y-helpers';

describe('Popover', () => {
  // ── Rendering ─────────────────────────────────────────────────────────────

  it('renders the trigger children', () => {
    render(
      <Popover content={<p>Popover body</p>}>
        <button type="button">Open</button>
      </Popover>
    );
    expect(screen.getByRole('button', { name: 'Open' })).toBeInTheDocument();
  });

  it('does not show popover content by default', () => {
    render(
      <Popover content={<p>Popover body</p>}>
        <button type="button">Open</button>
      </Popover>
    );
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('shows content when defaultOpen is true', () => {
    render(
      <Popover content={<p>Popover body</p>} defaultOpen>
        <button type="button">Open</button>
      </Popover>
    );
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText('Popover body')).toBeInTheDocument();
  });

  // ── Click trigger ─────────────────────────────────────────────────────────

  it('opens on trigger click', async () => {
    const user = userEvent.setup();
    render(
      <Popover content={<p>Content</p>} trigger="click">
        <button type="button">Open</button>
      </Popover>
    );
    await user.click(screen.getByRole('button', { name: 'Open' }));
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('closes on second trigger click', async () => {
    const user = userEvent.setup();
    render(
      <Popover content={<p>Content</p>} trigger="click">
        <button type="button">Open</button>
      </Popover>
    );
    await user.click(screen.getByRole('button', { name: 'Open' }));
    await user.click(screen.getByRole('button', { name: 'Open' }));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('closes when clicking outside', async () => {
    const user = userEvent.setup();
    render(
      <div>
        <Popover content={<p>Content</p>} trigger="click">
          <button type="button">Open</button>
        </Popover>
        <button type="button">Outside</button>
      </div>
    );
    await user.click(screen.getByRole('button', { name: 'Open' }));
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Outside' }));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('calls onOpenChange when toggled', async () => {
    const user = userEvent.setup();
    const onOpenChange = vi.fn();
    render(
      <Popover content={<p>Content</p>} trigger="click" onOpenChange={onOpenChange}>
        <button type="button">Open</button>
      </Popover>
    );
    await user.click(screen.getByRole('button', { name: 'Open' }));
    expect(onOpenChange).toHaveBeenCalledWith(true);
    await user.click(screen.getByRole('button', { name: 'Open' }));
    expect(onOpenChange).toHaveBeenCalledWith(false);
  });

  // ── Hover trigger ─────────────────────────────────────────────────────────

  it('opens on mouse enter when trigger=hover', () => {
    render(
      <Popover content={<p>Hover content</p>} trigger="hover">
        <button type="button">Hover me</button>
      </Popover>
    );
    const trigger = screen.getByRole('button', { name: 'Hover me' }).parentElement!;
    fireEvent.mouseEnter(trigger);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('closes on mouse leave when trigger=hover', () => {
    render(
      <Popover content={<p>Hover content</p>} trigger="hover">
        <button type="button">Hover me</button>
      </Popover>
    );
    const trigger = screen.getByRole('button', { name: 'Hover me' }).parentElement!;
    fireEvent.mouseEnter(trigger);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    fireEvent.mouseLeave(trigger);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  // ── Focus trigger ─────────────────────────────────────────────────────────

  it('opens on focus when trigger=focus', () => {
    render(
      <Popover content={<p>Focus content</p>} trigger="focus">
        <button type="button">Focus me</button>
      </Popover>
    );
    const trigger = screen.getByRole('button', { name: 'Focus me' }).parentElement!;
    fireEvent.focus(trigger);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('closes on blur when trigger=focus', () => {
    render(
      <Popover content={<p>Focus content</p>} trigger="focus">
        <button type="button">Focus me</button>
      </Popover>
    );
    const trigger = screen.getByRole('button', { name: 'Focus me' }).parentElement!;
    fireEvent.focus(trigger);
    fireEvent.blur(trigger);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  // ── Title ─────────────────────────────────────────────────────────────────

  it('renders title when provided', async () => {
    const user = userEvent.setup();
    render(
      <Popover content={<p>Body</p>} title="More info" trigger="click">
        <button type="button">Open</button>
      </Popover>
    );
    await user.click(screen.getByRole('button', { name: 'Open' }));
    expect(screen.getByText('More info')).toBeInTheDocument();
  });

  // ── Placement ─────────────────────────────────────────────────────────────

  it.each(['top', 'bottom', 'left', 'right'] as const)(
    'applies %s placement class',
    async (placement) => {
      const user = userEvent.setup();
      render(
        <Popover content={<p>Content</p>} placement={placement} trigger="click">
          <button type="button">Open</button>
        </Popover>
      );
      await user.click(screen.getByRole('button', { name: 'Open' }));
      expect(screen.getByRole('dialog')).toHaveClass(`ux4g-popover-${placement}`);
    }
  );

  // ── Arrow ─────────────────────────────────────────────────────────────────

  it('applies arrow class by default', async () => {
    const user = userEvent.setup();
    render(
      <Popover content={<p>Content</p>} trigger="click">
        <button type="button">Open</button>
      </Popover>
    );
    await user.click(screen.getByRole('button', { name: 'Open' }));
    expect(screen.getByRole('dialog')).toHaveClass('ux4g-popover-arrow');
  });

  it('does not apply arrow class when showArrow=false', async () => {
    const user = userEvent.setup();
    render(
      <Popover content={<p>Content</p>} trigger="click" showArrow={false}>
        <button type="button">Open</button>
      </Popover>
    );
    await user.click(screen.getByRole('button', { name: 'Open' }));
    expect(screen.getByRole('dialog')).not.toHaveClass('ux4g-popover-arrow');
  });

  // ── Controlled mode ───────────────────────────────────────────────────────

  it('respects controlled open=true', () => {
    render(
      <Popover content={<p>Content</p>} open onOpenChange={vi.fn()}>
        <button type="button">Open</button>
      </Popover>
    );
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('respects controlled open=false', () => {
    render(
      <Popover content={<p>Content</p>} open={false} onOpenChange={vi.fn()}>
        <button type="button">Open</button>
      </Popover>
    );
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  // ── Accessibility ───────────────────────────────────────────────────────

  describe('Accessibility', () => {
    it('has no axe violations in open state', async () => {
      const { container } = render(
        <Popover content={<p>Popover content</p>} defaultOpen>
          <button type="button">Trigger</button>
        </Popover>
      );
      const results = await checkA11y(container);
      (expect(results) as any).toHaveNoViolations();
    });

    describe('Keyboard navigation', () => {
      it('trigger receives focus via Tab', async () => {
        const user = userEvent.setup();
        render(
          <Popover content={<p>Content</p>} trigger="click">
            <button type="button">Open</button>
          </Popover>
        );
        await user.tab();
        expect(screen.getByRole('button', { name: 'Open' })).toHaveFocus();
      });

      it('closes on Escape key', async () => {
        const user = userEvent.setup();
        const onOpenChange = vi.fn();
        render(
          <Popover content={<p>Content</p>} trigger="click" onOpenChange={onOpenChange}>
            <button type="button">Open</button>
          </Popover>
        );
        await user.click(screen.getByRole('button', { name: 'Open' }));
        expect(screen.getByRole('dialog')).toBeInTheDocument();
        await user.keyboard('{Escape}');
      });
    });
  });
});
