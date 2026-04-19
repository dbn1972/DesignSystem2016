import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Breadcrumb } from './Breadcrumb';
import { assertA11y } from '@/test/a11y-helpers';

const ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Income Certificate', current: true },
];

describe('Breadcrumb', () => {
  // ── Rendering ─────────────────────────────────────────────────────────────

  it('renders a nav landmark with aria-label="Breadcrumb"', () => {
    render(<Breadcrumb items={ITEMS} />);
    expect(screen.getByRole('navigation', { name: 'Breadcrumb' })).toBeInTheDocument();
  });

  it('renders all items', () => {
    render(<Breadcrumb items={ITEMS} />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('Income Certificate')).toBeInTheDocument();
  });

  it('renders links for items with href', () => {
    render(<Breadcrumb items={ITEMS} />);
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/');
    expect(screen.getByRole('link', { name: 'Services' })).toHaveAttribute('href', '/services');
  });

  it('renders last item as plain text (no link)', () => {
    render(<Breadcrumb items={ITEMS} />);
    expect(screen.queryByRole('link', { name: 'Income Certificate' })).not.toBeInTheDocument();
    expect(screen.getByText('Income Certificate')).toBeInTheDocument();
  });

  // ── Accessibility ─────────────────────────────────────────────────────────

  it('marks the current page item with aria-current="page"', () => {
    render(<Breadcrumb items={ITEMS} />);
    // Last item is current
    const currentEl = screen.getByText('Income Certificate');
    expect(currentEl).toHaveAttribute('aria-current', 'page');
  });

  it('does not set aria-current on non-current items', () => {
    render(<Breadcrumb items={ITEMS} />);
    expect(screen.getByRole('link', { name: 'Home' })).not.toHaveAttribute('aria-current');
  });

  // ── Separator ─────────────────────────────────────────────────────────────

  it('renders default separator "/"', () => {
    const { container } = render(<Breadcrumb items={ITEMS} />);
    const separators = container.querySelectorAll('.ux4g-breadcrumb-separator');
    expect(separators.length).toBe(ITEMS.length - 1);
    separators.forEach((sep) => expect(sep).toHaveTextContent('/'));
  });

  it('renders custom separator', () => {
    const { container } = render(<Breadcrumb items={ITEMS} separator=">" />);
    const separators = container.querySelectorAll('.ux4g-breadcrumb-separator');
    separators.forEach((sep) => expect(sep).toHaveTextContent('>'));
  });

  it('separators are aria-hidden', () => {
    const { container } = render(<Breadcrumb items={ITEMS} />);
    container.querySelectorAll('.ux4g-breadcrumb-separator').forEach((sep) => {
      expect(sep).toHaveAttribute('aria-hidden', 'true');
    });
  });

  // ── Collapse / expand ─────────────────────────────────────────────────────

  it('collapses items when maxItems is set', () => {
    const manyItems = [
      { label: 'Home', href: '/' },
      { label: 'Level 1', href: '/l1' },
      { label: 'Level 2', href: '/l2' },
      { label: 'Level 3', href: '/l3' },
      { label: 'Current', current: true },
    ];
    render(<Breadcrumb items={manyItems} maxItems={3} />);
    // Should show Home, ..., Current (3 items)
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('...')).toBeInTheDocument();
    expect(screen.getByText('Current')).toBeInTheDocument();
    expect(screen.queryByText('Level 1')).not.toBeInTheDocument();
  });

  it('expands all items when collapse button is clicked', async () => {
    const user = userEvent.setup();
    const manyItems = [
      { label: 'Home', href: '/' },
      { label: 'Level 1', href: '/l1' },
      { label: 'Level 2', href: '/l2' },
      { label: 'Level 3', href: '/l3' },
      { label: 'Current', current: true },
    ];
    render(<Breadcrumb items={manyItems} maxItems={3} />);
    await user.click(screen.getByRole('button', { name: 'Show all items' }));
    expect(screen.getByText('Level 1')).toBeInTheDocument();
    expect(screen.getByText('Level 2')).toBeInTheDocument();
    expect(screen.getByText('Level 3')).toBeInTheDocument();
  });

  // ── onClick items ─────────────────────────────────────────────────────────

  it('calls onClick handler for button-type items', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    const items = [
      { label: 'Home', href: '/' },
      { label: 'Action', onClick },
      { label: 'Current', current: true },
    ];
    render(<Breadcrumb items={items} />);
    await user.click(screen.getByRole('button', { name: 'Action' }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  // ── Accessibility ───────────────────────────────────────────────────────

  describe('Accessibility', () => {
    it('has no axe violations in default state', async () => {
      await assertA11y(
        <Breadcrumb items={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Current', current: true },
        ]} />
      );
    });

    describe('Keyboard navigation', () => {
      it('Tab focuses between breadcrumb links', async () => {
        const user = userEvent.setup();
        render(
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: 'Current', current: true },
          ]} />
        );
        await user.tab();
        expect(screen.getByRole('link', { name: 'Home' })).toHaveFocus();
        await user.tab();
        expect(screen.getByRole('link', { name: 'Services' })).toHaveFocus();
      });
    });
  });
});
