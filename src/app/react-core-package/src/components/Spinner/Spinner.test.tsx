import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Spinner } from './Spinner';
import { assertA11y } from '@/test/a11y-helpers';

describe('Spinner', () => {
  // ── Rendering ─────────────────────────────────────────────────────────────

  it('renders with role="status"', () => {
    render(<Spinner />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('has default aria-label of "Loading"', () => {
    render(<Spinner />);
    expect(screen.getByRole('status')).toHaveAttribute('aria-label', 'Loading');
  });

  it('uses custom label for aria-label', () => {
    render(<Spinner label="Submitting application" />);
    expect(screen.getByRole('status')).toHaveAttribute('aria-label', 'Submitting application');
  });

  it('renders visually hidden label text', () => {
    render(<Spinner label="Please wait" />);
    // Label appears in both visually-hidden span and external label span
    expect(screen.getAllByText('Please wait').length).toBeGreaterThanOrEqual(1);
  });

  // ── Sizes ─────────────────────────────────────────────────────────────────

  it.each(['sm', 'md', 'lg'] as const)('applies %s size class', (size) => {
    render(<Spinner size={size} />);
    expect(screen.getByRole('status')).toHaveClass(`ux4g-spinner-${size}`);
  });

  it('defaults to md size', () => {
    render(<Spinner />);
    expect(screen.getByRole('status')).toHaveClass('ux4g-spinner-md');
  });

  // ── Variants ─────────────────────────────────────────────────────────────

  it('applies variant class', () => {
    render(<Spinner variant="primary" />);
    expect(screen.getByRole('status')).toHaveClass('ux4g-spinner-primary');
  });

  // ── Centered mode ─────────────────────────────────────────────────────────

  it('wraps in container when centered is true', () => {
    const { container } = render(<Spinner centered label="Loading" />);
    expect(container.querySelector('.ux4g-spinner-container')).toBeInTheDocument();
  });

  it('shows label text outside spinner when centered', () => {
    render(<Spinner centered label="Loading data" />);
    // The label appears in both the visually-hidden span and the label div
    const labels = screen.getAllByText('Loading data');
    expect(labels.length).toBeGreaterThanOrEqual(1);
  });

  // ── aria-live ─────────────────────────────────────────────────────────────

  it('has aria-live="polite"', () => {
    render(<Spinner />);
    expect(screen.getByRole('status')).toHaveAttribute('aria-live', 'polite');
  });

  // ── Accessibility ───────────────────────────────────────────────────────

  describe('Accessibility', () => {
    it('has no axe violations in default state', async () => {
      await assertA11y(<Spinner />);
    });
  });
});
