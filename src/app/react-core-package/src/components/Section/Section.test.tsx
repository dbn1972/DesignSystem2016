import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Section } from './Section';

describe('Section', () => {
  it('renders children', () => { render(<Section>Content</Section>); expect(screen.getByText('Content')).toBeInTheDocument(); });
  it('renders as section element', () => { const { container } = render(<Section>C</Section>); expect(container.querySelector('section')).toBeInTheDocument(); });
  it('renders title', () => { render(<Section title="Overview">C</Section>); expect(screen.getByRole('heading', { name: 'Overview' })).toBeInTheDocument(); });
  it('renders description', () => { render(<Section description="Details here">C</Section>); expect(screen.getByText('Details here')).toBeInTheDocument(); });
  it('forwards ref', () => { const ref = React.createRef<HTMLElement>(); render(<Section ref={ref}>C</Section>); expect(ref.current).toBeInstanceOf(HTMLElement); });
});
