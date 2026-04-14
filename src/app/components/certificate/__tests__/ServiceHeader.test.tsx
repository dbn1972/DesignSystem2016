import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { ServiceHeader } from '../ServiceHeader';
import { User } from 'lucide-react';

function renderHeader(props = {}) {
  return render(
    <MemoryRouter>
      <ServiceHeader
        icon={User}
        iconColor="bg-purple-600"
        category="Certificate Service"
        title="Personal Information"
        {...props}
      />
    </MemoryRouter>
  );
}

describe('ServiceHeader', () => {
  it('renders as a header landmark', () => {
    renderHeader();
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  it('renders the h1 title', () => {
    renderHeader();
    expect(screen.getByRole('heading', { level: 1, name: 'Personal Information' })).toBeInTheDocument();
  });

  it('renders the category text', () => {
    renderHeader();
    expect(screen.getByText('Certificate Service')).toBeInTheDocument();
  });

  it('renders back link when backLink and backText are provided', () => {
    renderHeader({ backLink: '/home', backText: 'Back to Home' });
    expect(screen.getByRole('link', { name: /Back to Home/i })).toBeInTheDocument();
  });

  it('back link points to the correct path', () => {
    renderHeader({ backLink: '/home', backText: 'Back' });
    expect(screen.getByRole('link', { name: /Back/i })).toHaveAttribute('href', '/home');
  });

  it('does not render back link when backLink is not provided', () => {
    renderHeader();
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });

  it('renders rightContent when provided', () => {
    renderHeader({ rightContent: <button type="button">Save Draft</button> });
    expect(screen.getByRole('button', { name: 'Save Draft' })).toBeInTheDocument();
  });

  it('applies iconColor class to icon container', () => {
    const { container } = renderHeader({ iconColor: 'bg-green-600' });
    expect(container.querySelector('.bg-green-600')).toBeInTheDocument();
  });
});
