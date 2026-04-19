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


describe('NavigationMenu – additional coverage', () => {
  it('renders vertical orientation class', () => {
    const { container } = render(<NavigationMenu items={ITEMS} orientation="vertical" />);
    expect(container.querySelector('.ux4g-navigation-menu-vertical')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(<NavigationMenu items={ITEMS} className="custom-nav" />);
    expect(container.querySelector('.ux4g-navigation-menu')).toHaveClass('custom-nav');
  });

  it('renders active item with aria-current', () => {
    const items = [{ label: 'Home', href: '/', active: true }];
    render(<NavigationMenu items={items} />);
    expect(screen.getByRole('menuitem', { name: 'Home' })).toHaveAttribute('aria-current', 'page');
  });

  it('renders button items without href', () => {
    const onClick = vi.fn();
    const items = [{ label: 'Action', onClick }];
    render(<NavigationMenu items={items} />);
    const btn = screen.getByRole('menuitem', { name: 'Action' });
    expect(btn.tagName).toBe('BUTTON');
  });

  it('calls onClick on button item click', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    const items = [{ label: 'Action', onClick }];
    render(<NavigationMenu items={items} />);
    await user.click(screen.getByRole('menuitem', { name: 'Action' }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('toggles submenu on button item with children', async () => {
    const user = userEvent.setup();
    const items = [
      { label: 'Services', children: [{ label: 'Aadhaar', href: '/aadhaar' }] },
    ];
    render(<NavigationMenu items={items} />);
    const btn = screen.getByRole('menuitem', { name: 'Services' });
    await user.click(btn);
    expect(screen.getByText('Aadhaar')).toBeInTheDocument();
    await user.click(btn);
    expect(screen.queryByText('Aadhaar')).not.toBeInTheDocument();
  });

  it('renders submenu child buttons without href', async () => {
    const user = userEvent.setup();
    const childClick = vi.fn();
    const items = [
      { label: 'Services', children: [{ label: 'Custom', onClick: childClick }] },
    ];
    render(<NavigationMenu items={items} />);
    await user.click(screen.getByRole('menuitem', { name: 'Services' }));
    const childBtn = screen.getByRole('menuitem', { name: 'Custom' });
    expect(childBtn.tagName).toBe('BUTTON');
    await user.click(childBtn);
    expect(childClick).toHaveBeenCalledTimes(1);
  });

  it('sets aria-haspopup and aria-expanded on items with children', () => {
    render(<NavigationMenu items={ITEMS} />);
    const servicesLink = screen.getByRole('menuitem', { name: 'Services' });
    expect(servicesLink).toHaveAttribute('aria-haspopup', 'true');
    expect(servicesLink).toHaveAttribute('aria-expanded', 'false');
  });

  it('navigates with ArrowLeft key', async () => {
    const user = userEvent.setup();
    render(<NavigationMenu items={ITEMS} />);
    await user.tab();
    const menuItems = screen.getAllByRole('menuitem');
    // Focus first, then ArrowLeft should wrap to last
    await user.keyboard('{ArrowLeft}');
    expect(menuItems[menuItems.length - 1]).toHaveFocus();
  });

  it('navigates with ArrowDown key', async () => {
    const user = userEvent.setup();
    render(<NavigationMenu items={ITEMS} />);
    await user.tab();
    await user.keyboard('{ArrowDown}');
    expect(screen.getAllByRole('menuitem')[1]).toHaveFocus();
  });

  it('navigates with ArrowUp key', async () => {
    const user = userEvent.setup();
    render(<NavigationMenu items={ITEMS} />);
    await user.tab();
    await user.keyboard('{ArrowUp}');
    // Should wrap to last item
    const menuItems = screen.getAllByRole('menuitem');
    expect(menuItems[menuItems.length - 1]).toHaveFocus();
  });

  it('calls onClick on link items', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    const items = [{ label: 'Home', href: '/', onClick }];
    render(<NavigationMenu items={items} />);
    await user.click(screen.getByRole('menuitem', { name: 'Home' }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('spreads additional props to nav element', () => {
    render(<NavigationMenu items={ITEMS} data-testid="nav-root" />);
    expect(screen.getByTestId('nav-root')).toBeInTheDocument();
  });
});
