import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';
import { UserProfileService } from '../UserProfileService';

const BASE_PROPS = {
  category: 'Certificate Service',
  title: 'Account Settings',
  serviceName: 'Certificate Service',
  myApplicationsPath: '/my-applications',
  forgotPasswordPath: '/forgot-password',
};

function renderProfile(props = {}) {
  return render(
    <MemoryRouter>
      <UserProfileService {...BASE_PROPS} {...props} />
    </MemoryRouter>
  );
}

describe('UserProfileService', () => {
  // ── Rendering ─────────────────────────────────────────────────────────────

  it('renders the page title', () => {
    renderProfile();
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Account Settings');
  });

  it('renders the three tab buttons', () => {
    renderProfile();
    expect(screen.getByRole('button', { name: /Profile Information/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Security/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Notifications/i })).toBeInTheDocument();
  });

  it('shows Profile tab content by default', () => {
    renderProfile();
    expect(screen.getByDisplayValue('Priya Sharma')).toBeInTheDocument();
  });

  // ── Tab switching ─────────────────────────────────────────────────────────

  it('switches to Security tab on click', async () => {
    const user = userEvent.setup();
    renderProfile();
    await user.click(screen.getByRole('button', { name: /Security/i }));
    // Security panel has a "Change Password" link (distinct from the tab button)
    expect(screen.getByRole('link', { name: 'Change Password' })).toBeInTheDocument();
  });

  it('switches to Notifications tab on click', async () => {
    const user = userEvent.setup();
    renderProfile();
    await user.click(screen.getByRole('button', { name: /Notifications/i }));
    expect(screen.getByText('Email Notifications')).toBeInTheDocument();
    expect(screen.getByText('SMS Notifications')).toBeInTheDocument();
  });

  // ── Profile edit ──────────────────────────────────────────────────────────

  it('renders "Edit Profile" button on profile tab', () => {
    renderProfile();
    expect(screen.getByRole('button', { name: 'Edit Profile' })).toBeInTheDocument();
  });

  it('shows Save/Cancel buttons after clicking Edit Profile', async () => {
    const user = userEvent.setup();
    renderProfile();
    await user.click(screen.getByRole('button', { name: 'Edit Profile' }));
    expect(screen.getByRole('button', { name: 'Save Changes' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Cancel' })).toBeInTheDocument();
  });

  it('shows success message after saving profile', async () => {
    const user = userEvent.setup();
    renderProfile();
    await user.click(screen.getByRole('button', { name: 'Edit Profile' }));
    await user.click(screen.getByRole('button', { name: 'Save Changes' }));
    expect(screen.getByText(/Settings saved successfully/i)).toBeInTheDocument();
  });

  it('hides edit form after clicking Cancel', async () => {
    const user = userEvent.setup();
    renderProfile();
    await user.click(screen.getByRole('button', { name: 'Edit Profile' }));
    await user.click(screen.getByRole('button', { name: 'Cancel' }));
    expect(screen.queryByRole('button', { name: 'Save Changes' })).not.toBeInTheDocument();
  });

  // ── Notifications ─────────────────────────────────────────────────────────

  it('notification toggles are checkboxes', async () => {
    const user = userEvent.setup();
    renderProfile();
    await user.click(screen.getByRole('button', { name: /Notifications/i }));
    const checkboxes = screen.getAllByRole('checkbox');
    expect(checkboxes.length).toBeGreaterThan(0);
  });

  it('can toggle a notification setting', async () => {
    const user = userEvent.setup();
    renderProfile();
    await user.click(screen.getByRole('button', { name: /Notifications/i }));
    const checkboxes = screen.getAllByRole('checkbox');
    const initialState = (checkboxes[0] as HTMLInputElement).checked;
    await user.click(checkboxes[0]);
    expect((checkboxes[0] as HTMLInputElement).checked).toBe(!initialState);
  });

  // ── Security tab ──────────────────────────────────────────────────────────

  it('renders "Change Password" link on security tab', async () => {
    const user = userEvent.setup();
    renderProfile();
    await user.click(screen.getByRole('button', { name: /Security/i }));
    expect(screen.getByRole('link', { name: 'Change Password' })).toHaveAttribute(
      'href',
      '/forgot-password'
    );
  });

  // ── Navigation ────────────────────────────────────────────────────────────

  it('renders "My Applications" link', () => {
    renderProfile();
    expect(screen.getByRole('link', { name: 'My Applications' })).toBeInTheDocument();
  });

  it('renders optional code download link', () => {
    renderProfile({ codeDownloadPath: '/downloads' });
    expect(screen.getByRole('link', { name: /Download React code/i })).toBeInTheDocument();
  });

  // ── Accessibility ─────────────────────────────────────────────────────────

  it('renders a main landmark', () => {
    renderProfile();
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
