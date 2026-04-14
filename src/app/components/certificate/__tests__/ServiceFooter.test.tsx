import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { ServiceFooter } from '../ServiceFooter';

function renderFooter(props = {}) {
  return render(
    <MemoryRouter>
      <ServiceFooter {...props} />
    </MemoryRouter>
  );
}

describe('ServiceFooter', () => {
  it('renders as a footer landmark', () => {
    renderFooter();
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
    expect(footer.className).toContain('bg-card');
    expect(footer.className).toContain('text-muted-foreground');
  });

  it('renders default leftText', () => {
    renderFooter();
    expect(screen.getByText('Certificate Application Service • Government of India')).toBeInTheDocument();
  });

  it('renders custom leftText', () => {
    renderFooter({ leftText: 'My Service • Government of India' });
    expect(screen.getByText('My Service • Government of India')).toBeInTheDocument();
  });

  it('renders rightText when provided', () => {
    renderFooter({ rightText: 'Personal Information' });
    expect(screen.getByText('Personal Information')).toBeInTheDocument();
  });

  it('does not render rightText when not provided', () => {
    renderFooter();
    // No extra text beyond the default leftText
    expect(screen.queryByText('Personal Information')).not.toBeInTheDocument();
  });

  it('renders footer links when provided', () => {
    renderFooter({
      links: [
        { to: '/privacy', text: 'Privacy Policy' },
        { to: '/terms', text: 'Terms of Use' },
      ],
    });
    expect(screen.getByRole('link', { name: 'Privacy Policy' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Terms of Use' })).toBeInTheDocument();
  });

  it('footer links point to correct paths', () => {
    renderFooter({ links: [{ to: '/privacy', text: 'Privacy Policy' }] });
    expect(screen.getByRole('link', { name: 'Privacy Policy' })).toHaveAttribute('href', '/privacy');
  });

  it('renders no links by default', () => {
    renderFooter();
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });
});
