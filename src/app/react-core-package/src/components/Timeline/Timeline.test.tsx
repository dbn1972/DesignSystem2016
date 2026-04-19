import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Timeline } from './Timeline';
import { assertA11y, assertA11yStates } from '@/test/a11y-helpers';

const ITEMS = [
  {
    key: 'submitted',
    title: 'Application Submitted',
    timestamp: '10 April 2026',
    content: <p>Your application was received.</p>,
  },
  {
    key: 'review',
    title: 'Under Review',
    timestamp: '11 April 2026',
  },
  {
    key: 'approved',
    title: 'Approved',
    timestamp: '12 April 2026',
    variant: 'success' as const,
  },
];

describe('Timeline', () => {
  // ── Rendering ─────────────────────────────────────────────────────────────

  it('renders all item titles', () => {
    render(<Timeline items={ITEMS} />);
    expect(screen.getByText('Application Submitted')).toBeInTheDocument();
    expect(screen.getByText('Under Review')).toBeInTheDocument();
    expect(screen.getByText('Approved')).toBeInTheDocument();
  });

  it('renders timestamps when provided', () => {
    render(<Timeline items={ITEMS} />);
    expect(screen.getByText('10 April 2026')).toBeInTheDocument();
    expect(screen.getByText('11 April 2026')).toBeInTheDocument();
  });

  it('renders content/description when provided', () => {
    render(<Timeline items={ITEMS} />);
    expect(screen.getByText('Your application was received.')).toBeInTheDocument();
  });

  it('does not render description for items without content', () => {
    render(<Timeline items={ITEMS} />);
    // Only the first item has content — the other two don't
    expect(screen.queryAllByText('Your application was received.')).toHaveLength(1);
    // Items without content have no description div
    const { container } = render(<Timeline items={ITEMS} />);
    const descriptions = container.querySelectorAll('.ux4g-timeline-description');
    expect(descriptions).toHaveLength(1);
  });

  // ── Dots and lines ────────────────────────────────────────────────────────

  it('renders a dot for each item without a custom icon', () => {
    const { container } = render(<Timeline items={ITEMS} />);
    const dots = container.querySelectorAll('.ux4g-timeline-dot');
    expect(dots).toHaveLength(3);
  });

  it('renders connector lines between items (not after last)', () => {
    const { container } = render(<Timeline items={ITEMS} />);
    const lines = container.querySelectorAll('.ux4g-timeline-line');
    expect(lines).toHaveLength(ITEMS.length - 1);
  });

  // ── Custom icon ───────────────────────────────────────────────────────────

  it('renders custom icon instead of dot when provided', () => {
    const itemsWithIcon = [
      { key: '1', title: 'Step 1', icon: <span data-testid="custom-icon" /> },
      { key: '2', title: 'Step 2' },
    ];
    render(<Timeline items={itemsWithIcon} />);
    expect(screen.getByTestId('custom-icon')).toBeInTheDocument();
    // Only one dot (for item without icon)
    const { container } = render(<Timeline items={itemsWithIcon} />);
    expect(container.querySelectorAll('.ux4g-timeline-dot')).toHaveLength(1);
  });

  // ── Variants ─────────────────────────────────────────────────────────────

  it('applies variant class to item when variant is set', () => {
    const { container } = render(<Timeline items={ITEMS} />);
    const items = container.querySelectorAll('.ux4g-timeline-item');
    expect(items[2]).toHaveClass('ux4g-timeline-item-success');
  });

  it('does not apply variant class when variant is not set', () => {
    const { container } = render(<Timeline items={ITEMS} />);
    const items = container.querySelectorAll('.ux4g-timeline-item');
    expect(items[0]).not.toHaveClass(/ux4g-timeline-item-/);
  });

  // ── Mode ─────────────────────────────────────────────────────────────────

  it('applies left mode class by default', () => {
    const { container } = render(<Timeline items={ITEMS} />);
    expect(container.firstChild).toHaveClass('ux4g-timeline-left');
  });

  it.each(['left', 'right', 'alternate'] as const)('applies %s mode class', (mode) => {
    const { container } = render(<Timeline items={ITEMS} mode={mode} />);
    expect(container.firstChild).toHaveClass(`ux4g-timeline-${mode}`);
  });

  // ── Reverse ───────────────────────────────────────────────────────────────

  it('reverses item order when reverse=true', () => {
    render(<Timeline items={ITEMS} reverse />);
    const titles = screen.getAllByText(/Application Submitted|Under Review|Approved/);
    // In reversed order, Approved should appear first in DOM
    expect(titles[0]).toHaveTextContent('Approved');
    expect(titles[2]).toHaveTextContent('Application Submitted');
  });

  it('applies reverse class when reverse=true', () => {
    const { container } = render(<Timeline items={ITEMS} reverse />);
    expect(container.firstChild).toHaveClass('ux4g-timeline-reverse');
  });

  it('does not apply reverse class by default', () => {
    const { container } = render(<Timeline items={ITEMS} />);
    expect(container.firstChild).not.toHaveClass('ux4g-timeline-reverse');
  });

  // ── Empty state ───────────────────────────────────────────────────────────

  it('renders nothing when items array is empty', () => {
    const { container } = render(<Timeline items={[]} />);
    expect(container.querySelector('.ux4g-timeline-item')).not.toBeInTheDocument();
  });

  // ── Accessibility ───────────────────────────────────────────────────────

  describe('Accessibility', () => {
    it('has no axe violations in default state', async () => {
      await assertA11y(
        <Timeline items={[
          { key: '1', title: 'Step 1', timestamp: '2026-01-01' },
          { key: '2', title: 'Step 2', timestamp: '2026-01-02' },
        ]} />
      );
    });

    it('has no axe violations across variants', async () => {
      await assertA11yStates([
        { name: 'left mode', ui: <Timeline items={ITEMS} mode="left" /> },
        { name: 'right mode', ui: <Timeline items={ITEMS} mode="right" /> },
        { name: 'alternate mode', ui: <Timeline items={ITEMS} mode="alternate" /> },
      ]);
    });
  });
});
