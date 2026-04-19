import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ThemeSwitcher from '../ThemeSwitcher';
import { ThemeProvider } from '../../contexts/theme';

beforeEach(() => {
  localStorage.clear();
  // Reset dark class on document
  document.documentElement.classList.remove('dark');
  document.documentElement.removeAttribute('data-theme');
});

function renderWithTheme(ui: React.ReactElement) {
  return render(<ThemeProvider>{ui}</ThemeProvider>);
}

describe('ThemeSwitcher', () => {
  // ── Rendering ─────────────────────────────────────────────────────────────

  it('renders a button', () => {
    renderWithTheme(<ThemeSwitcher />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('shows "Dark mode" label in light mode (default)', () => {
    renderWithTheme(<ThemeSwitcher />);
    expect(screen.getByText('Dark mode')).toBeInTheDocument();
  });

  it('has aria-label indicating switch to dark mode initially', () => {
    renderWithTheme(<ThemeSwitcher />);
    expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'Switch to dark mode');
  });

  it('has aria-pressed=false in light mode', () => {
    renderWithTheme(<ThemeSwitcher />);
    expect(screen.getByRole('button')).toHaveAttribute('aria-pressed', 'false');
  });

  // ── Toggle ────────────────────────────────────────────────────────────────

  it('switches to "Light mode" label after clicking', async () => {
    const user = userEvent.setup();
    renderWithTheme(<ThemeSwitcher />);
    await user.click(screen.getByRole('button'));
    expect(screen.getByText('Light mode')).toBeInTheDocument();
  });

  it('updates aria-label to switch to light mode after clicking', async () => {
    const user = userEvent.setup();
    renderWithTheme(<ThemeSwitcher />);
    await user.click(screen.getByRole('button'));
    expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'Switch to light mode');
  });

  it('sets aria-pressed=true in dark mode', async () => {
    const user = userEvent.setup();
    renderWithTheme(<ThemeSwitcher />);
    await user.click(screen.getByRole('button'));
    expect(screen.getByRole('button')).toHaveAttribute('aria-pressed', 'true');
  });

  it('toggles back to light mode on second click', async () => {
    const user = userEvent.setup();
    renderWithTheme(<ThemeSwitcher />);
    await user.click(screen.getByRole('button'));
    await user.click(screen.getByRole('button'));
    expect(screen.getByText('Dark mode')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveAttribute('aria-pressed', 'false');
  });

  // ── Accessibility ─────────────────────────────────────────────────────────

  it('is keyboard activatable', async () => {
    const user = userEvent.setup();
    renderWithTheme(<ThemeSwitcher />);
    screen.getByRole('button').focus();
    await user.keyboard('{Enter}');
    expect(screen.getByText('Light mode')).toBeInTheDocument();
  });
});
