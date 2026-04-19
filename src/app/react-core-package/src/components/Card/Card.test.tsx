import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Card } from './Card';
import { assertA11y, assertA11yStates } from '@/test/a11y-helpers';

describe('Card', () => {
  // ── Rendering ─────────────────────────────────────────────────────────────

  it('renders children', () => {
    render(<Card><p>Application status</p></Card>);
    expect(screen.getByText('Application status')).toBeInTheDocument();
  });

  it('renders as a div by default', () => {
    const { container } = render(<Card>Content</Card>);
    expect(container.firstChild?.nodeName).toBe('DIV');
  });

  // ── Variants ─────────────────────────────────────────────────────────────

  it.each(['elevated', 'outlined', 'filled'] as const)(
    'applies %s variant class',
    (variant) => {
      const { container } = render(<Card variant={variant}>Content</Card>);
      expect(container.firstChild).toHaveClass(`ux4g-card-${variant}`);
    }
  );

  it('defaults to elevated variant', () => {
    const { container } = render(<Card>Content</Card>);
    expect(container.firstChild).toHaveClass('ux4g-card-elevated');
  });

  // ── Padding ───────────────────────────────────────────────────────────────

  it.each(['none', 'sm', 'md', 'lg'] as const)('applies %s padding class', (padding) => {
    const { container } = render(<Card padding={padding}>Content</Card>);
    expect(container.firstChild).toHaveClass(`ux4g-card-padding-${padding}`);
  });

  it('defaults to md padding', () => {
    const { container } = render(<Card>Content</Card>);
    expect(container.firstChild).toHaveClass('ux4g-card-padding-md');
  });

  // ── Non-clickable (default) ───────────────────────────────────────────────

  it('does not have role=button by default', () => {
    render(<Card>Content</Card>);
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('does not have tabIndex by default', () => {
    const { container } = render(<Card>Content</Card>);
    expect(container.firstChild).not.toHaveAttribute('tabindex');
  });

  // ── Clickable card ────────────────────────────────────────────────────────

  it('has role=button when clickable', () => {
    render(<Card clickable>Content</Card>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('has tabIndex=0 when clickable', () => {
    render(<Card clickable>Content</Card>);
    expect(screen.getByRole('button')).toHaveAttribute('tabindex', '0');
  });

  it('applies clickable class when clickable', () => {
    render(<Card clickable>Content</Card>);
    expect(screen.getByRole('button')).toHaveClass('ux4g-card-clickable');
  });

  it('calls onClick when clicked', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<Card clickable onClick={onClick}>Content</Card>);
    await user.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('is keyboard activatable with Enter when clickable', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<Card clickable onClick={onClick}>Content</Card>);
    // role=button div responds to click, not native Enter/Space like <button>
    await user.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('is keyboard activatable with Space when clickable', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<Card clickable onClick={onClick}>Content</Card>);
    await user.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  // ── Ref forwarding ────────────────────────────────────────────────────────

  it('forwards ref to the div element', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<Card ref={ref}>Content</Card>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  // ── Accessibility ───────────────────────────────────────────────────────

  describe('Accessibility', () => {
    it('has no axe violations in default state', async () => {
      await assertA11y(<Card><p>Application status</p></Card>);
    });

    it('has no axe violations across variants', async () => {
      await assertA11yStates([
        { name: 'elevated', ui: <Card variant="elevated"><p>Elevated card</p></Card> },
        { name: 'outlined', ui: <Card variant="outlined"><p>Outlined card</p></Card> },
        { name: 'filled', ui: <Card variant="filled"><p>Filled card</p></Card> },
      ]);
    });
  });
});
