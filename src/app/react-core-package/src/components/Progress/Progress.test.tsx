import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Progress } from './Progress';
import { assertA11y } from '@/test/a11y-helpers';

describe('Progress', () => {
  // ── Rendering ─────────────────────────────────────────────────────────────

  it('renders with role="progressbar"', () => {
    render(<Progress value={50} />);
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  it('sets aria-valuemin=0 and aria-valuemax=100', () => {
    render(<Progress value={50} />);
    const bar = screen.getByRole('progressbar');
    expect(bar).toHaveAttribute('aria-valuemin', '0');
    expect(bar).toHaveAttribute('aria-valuemax', '100');
  });

  it('sets aria-valuenow to the provided value', () => {
    render(<Progress value={75} />);
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '75');
  });

  // ── Value clamping ────────────────────────────────────────────────────────

  it('clamps value above 100 to 100', () => {
    render(<Progress value={150} />);
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '100');
  });

  it('clamps value below 0 to 0', () => {
    render(<Progress value={-10} />);
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '0');
  });

  // ── Sizes ─────────────────────────────────────────────────────────────────

  it.each(['sm', 'md', 'lg'] as const)('applies %s size class', (size) => {
    render(<Progress value={50} size={size} />);
    expect(screen.getByRole('progressbar')).toHaveClass(`ux4g-progress-${size}`);
  });

  // ── Variants ─────────────────────────────────────────────────────────────

  it.each(['info', 'success', 'warning', 'error'] as const)(
    'applies %s variant class',
    (variant) => {
      render(<Progress value={50} variant={variant} />);
      expect(screen.getByRole('progressbar')).toHaveClass(`ux4g-progress-${variant}`);
    }
  );

  // ── Label ─────────────────────────────────────────────────────────────────

  it('does not show label by default', () => {
    render(<Progress value={50} />);
    expect(screen.queryByText('50%')).not.toBeInTheDocument();
  });

  it('shows percentage label when showLabel is true', () => {
    render(<Progress value={50} showLabel />);
    expect(screen.getByText('50%')).toBeInTheDocument();
  });

  it('uses custom labelFormatter when provided', () => {
    render(<Progress value={3} showLabel labelFormatter={(v) => `Step ${v}`} />);
    expect(screen.getByText('Step 3')).toBeInTheDocument();
  });

  // ── Indeterminate state ───────────────────────────────────────────────────

  it('does not set aria-valuenow when indeterminate', () => {
    render(<Progress value={0} indeterminate />);
    expect(screen.getByRole('progressbar')).not.toHaveAttribute('aria-valuenow');
  });

  it('applies indeterminate class', () => {
    render(<Progress value={0} indeterminate />);
    expect(screen.getByRole('progressbar')).toHaveClass('ux4g-progress-indeterminate');
  });

  it('does not show label when indeterminate even if showLabel is true', () => {
    render(<Progress value={50} indeterminate showLabel />);
    expect(screen.queryByText('50%')).not.toBeInTheDocument();
  });

  // ── Accessibility ───────────────────────────────────────────────────────

  describe('Accessibility', () => {
    it('has no axe violations in default state', async () => {
      await assertA11y(<Progress value={50} />);
    });

    it('has no axe violations in loading/indeterminate state', async () => {
      await assertA11y(<Progress value={0} indeterminate />);
    });
  });
});
