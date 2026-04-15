import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';

import SiteMap from '../SiteMap';

describe('SiteMap page', () => {
  it('renders the premium site map hero', () => {
    render(
      <MemoryRouter>
        <SiteMap />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { name: /site map/i })).toBeInTheDocument();
    expect(screen.getByText(/navigation map for ux4g/i)).toBeInTheDocument();
  });

  it('links to the main platform sections', () => {
    render(
      <MemoryRouter>
        <SiteMap />
      </MemoryRouter>
    );

    expect(screen.getByRole('link', { name: /foundations/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /components hub/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /resources hub/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /governance hub/i })).toBeInTheDocument();
  });
});
