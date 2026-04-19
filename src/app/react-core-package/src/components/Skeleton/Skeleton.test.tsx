import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Skeleton } from './Skeleton';
import { assertA11y } from '@/test/a11y-helpers';

describe('Skeleton', () => {
  // ── Rendering ─────────────────────────────────────────────────────

  it('renders with role="status"', () => {
    render(<Skeleton />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('has aria-busy="true"', () => {
    render(<Skeleton />);
    expect(screen.getByRole('status')).toHaveAttribute('aria-busy', 'true');
  });

  it('has aria-label="Loading"', () => {
    render(<Skeleton />);
    expect(screen.getByRole('status')).toHaveAttribute('aria-label', 'Loading');
  });

  it('has screen-reader-only text', () => {
    render(<Skeleton />);
    expect(screen.getByText('Loading')).toBeInTheDocument();
  });

  // ── Variants ──────────────────────────────────────────────────────

  it('renders text variant with rounded class', () => {
    render(<Skeleton variant="text" />);
    expect(screen.getByRole('status')).toHaveClass('rounded');
  });

  it('renders circular variant with rounded-full class', () => {
    render(<Skeleton variant="circular" width={48} height={48} />);
    expect(screen.getByRole('status')).toHaveClass('rounded-full');
  });

  it('renders rectangular variant with rounded-none class', () => {
    render(<Skeleton variant="rectangular" height={100} />);
    expect(screen.getByRole('status')).toHaveClass('rounded-none');
  });

  it('renders rounded variant with rounded-lg class', () => {
    render(<Skeleton variant="rounded" height={100} />);
    expect(screen.getByRole('status')).toHaveClass('rounded-lg');
  });

  // ── Dimensions ────────────────────────────────────────────────────

  it('applies width as string', () => {
    render(<Skeleton width="200px" />);
    expect(screen.getByRole('status')).toHaveStyle({ width: '200px' });
  });

  it('applies width as number (px)', () => {
    render(<Skeleton width={150} />);
    expect(screen.getByRole('status')).toHaveStyle({ width: '150px' });
  });

  it('applies height as string', () => {
    render(<Skeleton height="3rem" />);
    expect(screen.getByRole('status')).toHaveStyle({ height: '3rem' });
  });

  it('applies height as number (px)', () => {
    render(<Skeleton height={40} />);
    expect(screen.getByRole('status')).toHaveStyle({ height: '40px' });
  });

  it('defaults to 100% width for text variant', () => {
    render(<Skeleton variant="text" />);
    expect(screen.getByRole('status')).toHaveStyle({ width: '100%' });
  });

  // ── Multi-line ────────────────────────────────────────────────────

  it('renders multiple lines when lines > 1', () => {
    render(<Skeleton variant="text" lines={3} />);
    const group = screen.getByRole('status');
    const skeletons = group.querySelectorAll('.ux4g-skeleton');
    expect(skeletons.length).toBe(3);
  });

  it('last line is shorter (75% width)', () => {
    render(<Skeleton variant="text" lines={3} />);
    const group = screen.getByRole('status');
    const skeletons = group.querySelectorAll('.ux4g-skeleton');
    expect(skeletons[2]).toHaveStyle({ width: '75%' });
  });

  it('multi-line has screen reader text', () => {
    render(<Skeleton variant="text" lines={3} />);
    expect(screen.getByText('Loading content')).toBeInTheDocument();
  });

  // ── Animation ─────────────────────────────────────────────────────

  it('has animate-pulse class by default', () => {
    render(<Skeleton />);
    expect(screen.getByRole('status')).toHaveClass('animate-pulse');
  });

  it('removes animation when animate=false', () => {
    render(<Skeleton animate={false} />);
    expect(screen.getByRole('status')).not.toHaveClass('animate-pulse');
  });

  // ── Ref forwarding ────────────────────────────────────────────────

  it('forwards ref', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<Skeleton ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  // ── Custom className ──────────────────────────────────────────────

  it('accepts custom className', () => {
    render(<Skeleton className="my-custom" />);
    expect(screen.getByRole('status')).toHaveClass('my-custom');
  });

  // ── Accessibility ───────────────────────────────────────────────────────

  describe('Accessibility', () => {
    it('has no axe violations in default state', async () => {
      await assertA11y(<Skeleton />);
    });
  });
});
