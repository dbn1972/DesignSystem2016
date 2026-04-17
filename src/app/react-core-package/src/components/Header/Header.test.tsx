import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Header } from './Header';

describe('Header', () => {
  it('renders title', () => { render(<Header title="My Service" />); expect(screen.getByText('My Service')).toBeInTheDocument(); });
  it('renders as header element', () => { const { container } = render(<Header title="T" />); expect(container.querySelector('header')).toBeInTheDocument(); });
  it('renders nav items', () => { render(<Header title="T" navItems={[{ label: 'Home', href: '/' }, { label: 'About', href: '/about' }]} />); expect(screen.getByRole('navigation')).toBeInTheDocument(); expect(screen.getByText('Home')).toBeInTheDocument(); });
  it('marks active nav item', () => { render(<Header title="T" navItems={[{ label: 'Home', href: '/', active: true }]} />); expect(screen.getByText('Home')).toHaveAttribute('aria-current', 'page'); });
  it('renders logo', () => { render(<Header title="T" logo={<span data-testid="logo">🏛️</span>} />); expect(screen.getByTestId('logo')).toBeInTheDocument(); });
  it('renders actions', () => { render(<Header title="T" actions={<button>Login</button>} />); expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument(); });
  it('forwards ref', () => { const ref = React.createRef<HTMLElement>(); render(<Header title="T" ref={ref} />); expect(ref.current).toBeInstanceOf(HTMLElement); });
});
