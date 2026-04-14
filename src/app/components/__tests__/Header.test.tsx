import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';
import Header from '../Header';

function renderHeader(initialPath = '/') {
  return render(
    <MemoryRouter initialEntries={[initialPath]}>
      <Header />
    </MemoryRouter>
  );
}

describe('Header', () => {
  // ── Rendering ─────────────────────────────────────────────────────────────

  it('renders as a header landmark', () => {
    renderHeader();
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  it('renders the UX4G logo link', () => {
    renderHeader();
    expect(screen.getByRole('link', { name: /UX4G/i })).toBeInTheDocument();
  });

  it('renders all navigation links', () => {
    renderHeader();
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Foundations' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Components' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Accessibility' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Patterns' })).toBeInTheDocument();
  });

  // ── Active state ──────────────────────────────────────────────────────────

  it('applies active class to the current route link', () => {
    renderHeader('/foundations-detailed');
    const foundationsLink = screen.getByRole('link', { name: 'Foundations' });
    expect(foundationsLink.className).toContain('bg-primary');
  });

  it('does not apply active class to non-current route links', () => {
    renderHeader('/');
    const componentsLink = screen.getByRole('link', { name: 'Components' });
    expect(componentsLink.className).not.toContain('bg-primary');
  });

  // ── Mobile menu ───────────────────────────────────────────────────────────

  it('renders mobile menu toggle button', () => {
    renderHeader();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('opens mobile menu when toggle is clicked', async () => {
    const user = userEvent.setup();
    renderHeader();
    const toggle = screen.getByRole('button');
    await user.click(toggle);
    // Mobile nav links appear (they're duplicated in mobile menu)
    const homeLinks = screen.getAllByRole('link', { name: 'Home' });
    expect(homeLinks.length).toBeGreaterThan(1);
  });

  it('closes mobile menu on second click', async () => {
    const user = userEvent.setup();
    renderHeader();
    const toggle = screen.getByRole('button');
    await user.click(toggle);
    await user.click(toggle);
    const homeLinks = screen.getAllByRole('link', { name: 'Home' });
    expect(homeLinks).toHaveLength(1);
  });

  // ── Navigation ────────────────────────────────────────────────────────────

  it('Home link points to "/"', () => {
    renderHeader();
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/');
  });

  it('Components link points to "/core-components"', () => {
    renderHeader();
    expect(screen.getByRole('link', { name: 'Components' })).toHaveAttribute(
      'href',
      '/core-components'
    );
  });
});
