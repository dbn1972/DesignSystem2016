import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Badge } from './Badge';

describe('Badge', () => {
  // ── Rendering ─────────────────────────────────────────────────────────────

  it('renders children', () => {
    render(<Badge>Pending</Badge>);
    expect(screen.getByText('Pending')).toBeInTheDocument();
  });

  it('renders as a span element', () => {
    render(<Badge>Active</Badge>);
    expect(screen.getByText('Active').tagName).toBe('SPAN');
  });

  // ── Variants ─────────────────────────────────────────────────────────────

  it.each(['neutral', 'info', 'success', 'warning', 'error'] as const)(
    'applies %s variant class',
    (variant) => {
      render(<Badge variant={variant}>Status</Badge>);
      expect(screen.getByText('Status')).toHaveClass(`ux4g-badge-${variant}`);
    }
  );

  it('defaults to neutral variant', () => {
    render(<Badge>Status</Badge>);
    expect(screen.getByText('Status')).toHaveClass('ux4g-badge-neutral');
  });

  // ── Sizes ─────────────────────────────────────────────────────────────────

  it.each(['sm', 'md', 'lg'] as const)('applies %s size class', (size) => {
    render(<Badge size={size}>Status</Badge>);
    expect(screen.getByText('Status')).toHaveClass(`ux4g-badge-${size}`);
  });

  it('defaults to md size', () => {
    render(<Badge>Status</Badge>);
    expect(screen.getByText('Status')).toHaveClass('ux4g-badge-md');
  });

  // ── Dot indicator ─────────────────────────────────────────────────────────

  it('renders dot indicator when dot is true', () => {
    render(<Badge dot>Online</Badge>);
    const badge = screen.getByText('Online');
    expect(badge).toHaveClass('ux4g-badge-dot');
    expect(badge.querySelector('.ux4g-badge-dot-indicator')).toBeInTheDocument();
  });

  it('does not render dot indicator by default', () => {
    render(<Badge>Status</Badge>);
    expect(screen.getByText('Status').querySelector('.ux4g-badge-dot-indicator')).not.toBeInTheDocument();
  });

  // ── Custom className ──────────────────────────────────────────────────────

  it('applies custom className', () => {
    render(<Badge className="my-badge">Status</Badge>);
    expect(screen.getByText('Status')).toHaveClass('my-badge');
  });

  // ── Ref forwarding ────────────────────────────────────────────────────────

  it('forwards ref to the span element', () => {
    const ref = React.createRef<HTMLSpanElement>();
    render(<Badge ref={ref}>Status</Badge>);
    expect(ref.current).toBeInstanceOf(HTMLSpanElement);
  });
});
