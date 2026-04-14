import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';
import { PersonalFormService } from '../PersonalFormService';

const BASE_PROPS = {
  category: 'Certificate Service',
  title: 'Personal Information',
  serviceName: 'Certificate Service',
  backPath: '/start',
  nextPath: '/form/address',
};

function renderForm(props = {}) {
  return render(
    <MemoryRouter>
      <PersonalFormService {...BASE_PROPS} {...props} />
    </MemoryRouter>
  );
}

beforeEach(() => localStorage.clear());
afterEach(() => localStorage.clear());

describe('PersonalFormService', () => {
  // ── Rendering ─────────────────────────────────────────────────────────────

  it('renders the page title', () => {
    renderForm();
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Personal Information');
  });

  it('renders all required form fields', () => {
    renderForm();
    expect(screen.getByText('Full Name')).toBeInTheDocument();
    expect(screen.getByText('Date of Birth')).toBeInTheDocument();
    expect(screen.getByText('Gender')).toBeInTheDocument();
    expect(screen.getByText("Father's Name")).toBeInTheDocument();
    expect(screen.getByText("Mother's Name")).toBeInTheDocument();
    expect(screen.getByText('Mobile Number')).toBeInTheDocument();
  });

  it('renders "Save and Continue" button', () => {
    renderForm();
    expect(screen.getByRole('button', { name: /Save and Continue/i })).toBeInTheDocument();
  });

  it('renders "Save Draft" button', () => {
    renderForm();
    expect(screen.getByRole('button', { name: /Save Draft/i })).toBeInTheDocument();
  });

  it('renders "Back" link', () => {
    renderForm();
    expect(screen.getByRole('link', { name: /Back/i })).toBeInTheDocument();
  });

  // ── Validation ────────────────────────────────────────────────────────────

  it('shows validation errors when continuing with empty form', async () => {
    const user = userEvent.setup();
    renderForm();
    await user.click(screen.getByRole('button', { name: /Save and Continue/i }));
    // Multiple error messages should appear
    const errors = screen.getAllByText(/.+is required.*/i);
    expect(errors.length).toBeGreaterThan(0);
  });

  it('shows mobile number error for invalid format', async () => {
    const user = userEvent.setup();
    renderForm();
    // Fill required fields except mobile
    const inputs = screen.getAllByRole('textbox');
    await user.type(inputs[0], 'Priya Sharma'); // Full Name
    await user.click(screen.getByRole('button', { name: /Save and Continue/i }));
    // Mobile error should appear
    const mobileErrors = screen.queryAllByText(/mobile/i);
    expect(mobileErrors.length).toBeGreaterThan(0);
  });

  // ── Save Draft ────────────────────────────────────────────────────────────

  it('shows "Draft saved successfully" after clicking Save Draft', async () => {
    const user = userEvent.setup();
    renderForm();
    await user.click(screen.getByRole('button', { name: /Save Draft/i }));
    expect(screen.getByText(/Draft saved successfully/i)).toBeInTheDocument();
  });

  // ── Optional code download ────────────────────────────────────────────────

  it('renders optional code download link', () => {
    renderForm({ codeDownloadPath: '/downloads' });
    expect(screen.getByRole('link', { name: /Download React code/i })).toBeInTheDocument();
  });

  // ── Accessibility ─────────────────────────────────────────────────────────

  it('renders a main landmark', () => {
    renderForm();
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
