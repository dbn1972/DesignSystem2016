import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';
import { AddressFormService } from '../AddressFormService';

const BASE_PROPS = {
  category: 'Certificate Service',
  title: 'Address Details',
  serviceName: 'Certificate Service',
  backPath: '/form/personal',
  nextPath: '/form/additional',
};

function renderForm(props = {}) {
  return render(
    <MemoryRouter>
      <AddressFormService {...BASE_PROPS} {...props} />
    </MemoryRouter>
  );
}

beforeEach(() => localStorage.clear());
afterEach(() => localStorage.clear());

describe('AddressFormService', () => {
  it('renders the page title', () => {
    renderForm();
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Address Details');
  });

  it('renders all required address fields', () => {
    renderForm();
    expect(screen.getByText('Address Line 1')).toBeInTheDocument();
    expect(screen.getByText('City')).toBeInTheDocument();
    expect(screen.getByText('District')).toBeInTheDocument();
    expect(screen.getByText('State')).toBeInTheDocument();
    expect(screen.getByText('PIN Code')).toBeInTheDocument();
    expect(screen.getByText('Residence Type')).toBeInTheDocument();
  });

  it('renders "Save and Continue" button', () => {
    renderForm();
    expect(screen.getByRole('button', { name: /Save and Continue/i })).toBeInTheDocument();
  });

  it('renders "Save Draft" button', () => {
    renderForm();
    expect(screen.getByRole('button', { name: /Save Draft/i })).toBeInTheDocument();
  });

  it('renders "Previous" link', () => {
    renderForm();
    expect(screen.getByRole('link', { name: /Previous/i })).toBeInTheDocument();
  });

  it('shows validation errors when continuing with empty form', async () => {
    const user = userEvent.setup();
    renderForm();
    await user.click(screen.getByRole('button', { name: /Save and Continue/i }));
    const errors = screen.getAllByText(/.+is required.*/i);
    expect(errors.length).toBeGreaterThan(0);
  });

  it('shows "Draft saved successfully" after clicking Save Draft', async () => {
    const user = userEvent.setup();
    renderForm();
    await user.click(screen.getByRole('button', { name: /Save Draft/i }));
    expect(screen.getByText(/Draft saved successfully/i)).toBeInTheDocument();
  });

  it('renders optional code download link', () => {
    renderForm({ codeDownloadPath: '/downloads' });
    expect(screen.getByRole('link', { name: /Download React code/i })).toBeInTheDocument();
  });

  it('renders a main landmark', () => {
    renderForm();
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
