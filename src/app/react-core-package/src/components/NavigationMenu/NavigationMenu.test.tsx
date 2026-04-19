import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NavigationMenu } from './NavigationMenu';
import { assertA11y } from '@/test/a11y-helpers';

const ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services', children: [
    { label: 'Aadhaar', href: '/services/aadhaar' },
    { label: 'PAN', href: '/services/pan' },
  ]},
  { label: 'About', href: '/about' },
];

describe('NavigationMenu', () => {
  it('renders navigation landmark', () => {
    render(<NavigationMenu items={ITEMS} />);
    expect(screen.getByRole('navigation', { name: 'Navigation menu' })).toBeInTheDocument();
  });

  it('renders all top-level items', () => {
    render(<NavigationMenu items={ITEMS} />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
  });

  it('forwards ref', () => {
    const ref = React.createRef<HTMLElement>();
    render(<NavigationMenu items={ITEMS} ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLElement);
  });

  // ── Accessibility ───────────────────────────────────────────────────────

  describe('Accessibility', () => {
    it('has no axe violations in default state', async () => {
      await assertA11y(<NavigationMenu items={ITEMS} />);
    });

    describe('Keyboard navigation', () => {
      it('Tab focuses first menu item', async () => {
        const user = userEvent.setup();
        render(<NavigationMenu items={ITEMS} />);
        await user.tab();
        expect(screen.getAllByRole('menuitem')[0]).toHaveFocus();
      });

      it('Arrow key navigates between items', async () => {
        const user = userEvent.setup();
        render(<NavigationMenu items={ITEMS} />);
        await user.tab();
        await user.keyboard('{ArrowRight}');
        expect(screen.getAllByRole('menuitem')[1]).toHaveFocus();
      });

      it('Enter opens submenu', async () => {
        const user = userEvent.setup();
        render(<NavigationMenu items={[
          { label: 'Services', children: [
            { label: 'Aadhaar', href: '/aadhaar' },
          ]},
        ]} />);
        await user.tab();
        await user.keyboard('{Enter}');
        expect(screen.getByText('Aadhaar')).toBeInTheDocument();
      });

      it('Escape closes submenu', async () => {
        const user = userEvent.setup();
        render(<NavigationMenu items={[
          { label: 'Services', children: [
            { label: 'Aadhaar', href: '/aadhaar' },
          ]},
        ]} />);
        await user.tab();
        await user.keyboard('{Enter}');
        expect(screen.getByText('Aadhaar')).toBeInTheDocument();
        await user.keyboard('{Escape}');
        expect(screen.queryByText('Aadhaar')).not.toBeInTheDocument();
      });
    });
  });
});
