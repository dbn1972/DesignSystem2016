import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router';
import Footer from '../Footer';

describe('Footer', () => {
  const renderFooter = () => {
    return render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
  };

  it('should render the footer with correct role', () => {
    renderFooter();
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
    expect(footer.className).toContain('bg-card');
    expect(footer.className).toContain('text-card-foreground');
  });

  it('should display the main heading', () => {
    renderFooter();
    expect(screen.getByText('UX4G Design System')).toBeInTheDocument();
  });

  it('should display the description text', () => {
    renderFooter();
    const description = screen.getByText(/A shared government digital platform/i);
    expect(description).toBeInTheDocument();
  });

  it('should render Quick Links navigation', () => {
    renderFooter();
    const quickLinksNav = screen.getByRole('navigation', { name: /quick links/i });
    expect(quickLinksNav).toBeInTheDocument();
  });

  it('should render all quick links', () => {
    renderFooter();
    expect(screen.getByRole('link', { name: /foundations/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /^components$/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /^patterns$/i })).toBeInTheDocument();
  });

  it('should render Resources navigation', () => {
    renderFooter();
    const resourcesNav = screen.getByRole('navigation', { name: /resources/i });
    expect(resourcesNav).toBeInTheDocument();
  });

  it('should have correct link attributes', () => {
    renderFooter();
    const foundationsLink = screen.getByRole('link', { name: /foundations/i });
    expect(foundationsLink).toHaveAttribute('href', '/foundations');
  });
});
