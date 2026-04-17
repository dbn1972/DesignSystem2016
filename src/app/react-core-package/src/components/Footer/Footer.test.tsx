import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';

const sections = [{ title: 'Resources', links: [{ label: 'Docs', href: '/docs' }, { label: 'API', href: '/api' }] }];

describe('Footer', () => {
  it('renders as footer element', () => { const { container } = render(<Footer />); expect(container.querySelector('footer')).toBeInTheDocument(); });
  it('renders sections', () => { render(<Footer sections={sections} />); expect(screen.getByText('Resources')).toBeInTheDocument(); expect(screen.getByText('Docs')).toBeInTheDocument(); });
  it('renders copyright', () => { render(<Footer copyright="© 2026 Gov" />); expect(screen.getByText('© 2026 Gov')).toBeInTheDocument(); });
  it('renders logo', () => { render(<Footer logo={<span data-testid="logo">🏛️</span>} />); expect(screen.getByTestId('logo')).toBeInTheDocument(); });
  it('forwards ref', () => { const ref = React.createRef<HTMLElement>(); render(<Footer ref={ref} />); expect(ref.current).toBeInstanceOf(HTMLElement); });
});
