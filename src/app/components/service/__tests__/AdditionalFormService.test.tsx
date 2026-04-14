import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';
import { AdditionalFormService } from '../AdditionalFormService';

const BASE_PROPS = {
  category: 'Certificate Service',
  title: 'Additional Information',
  serviceName: 'Certificate Service',
  backPath: '/form/address',
  nextPath: '/form/review',
};

function renderForm(props = {}) {
  return render(
    <MemoryRouter>
      <AdditionalFormService {...BASE_PROPS} {...props} />
    </MemoryRouter>
  );
}

beforeEach(() => localStorage.clear());
afterEach(() => localStorage.clear());

describe('AdditionalFormService', () => {
  it('renders the page title', () => {
    renderForm();
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Additional Information');
  });

  it('renders certificate type select', () => {
    renderForm();
    expect(screen.getByText('Certificate Type')).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  it('renders purpose and occupation fields', () => {
    renderForm();
    expect(screen.getByText('Purpose of Certificate')).toBeInTheDocument();
    expect(screen.getByText('Occupation')).toBeInTheDocument();
  });

  it('shows Annual Family Income field when certificate type is income', () => {
    renderForm();
    // Default type is income
    expect(screen.getByText('Annual Family Income')).toBeInTheDocument();
  });

  it('hides Annual Family Income when certificate type is not income', async () => {
    const user = userEvent.setup();
    renderForm();
    await user.selectOptions(screen.getByRole('combobox'), 'domicile');
    expect(screen.queryByText('Annual Family Income')).not.toBeInTheDocument();
  });

  it('shows validation errors when continuing with empty required fields', async () => {
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

  it('renders "Previous" link', () => {
    renderForm();
    expect(screen.getByRole('link', { name: /Previous/i })).toBeInTheDocument();
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
