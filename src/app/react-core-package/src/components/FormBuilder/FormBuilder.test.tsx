import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FormBuilder } from './FormBuilder';

const basicFields = [
  { key: 'name', label: 'Full Name', type: 'text' as const, required: true },
  { key: 'email', label: 'Email', type: 'email' as const, required: true },
];

describe('FormBuilder', () => {
  it('renders form fields from config', () => {
    render(<FormBuilder fields={basicFields} onSubmit={() => {}} />);
    expect(screen.getByLabelText(/Full Name/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/)).toBeInTheDocument();
  });

  it('renders title and description', () => {
    render(<FormBuilder fields={basicFields} onSubmit={() => {}} title="Apply" description="Fill the form" />);
    expect(screen.getByText('Apply')).toBeInTheDocument();
    expect(screen.getByText('Fill the form')).toBeInTheDocument();
  });

  it('renders submit button', () => {
    render(<FormBuilder fields={basicFields} onSubmit={() => {}} />);
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
  });

  it('renders custom submit label', () => {
    render(<FormBuilder fields={basicFields} onSubmit={() => {}} submitLabel="Apply Now" />);
    expect(screen.getByRole('button', { name: 'Apply Now' })).toBeInTheDocument();
  });

  it('shows loading state', () => {
    render(<FormBuilder fields={basicFields} onSubmit={() => {}} loading />);
    expect(screen.getByRole('button', { name: 'Submitting...' })).toBeDisabled();
  });

  it('calls onSubmit with values when valid', async () => {
    const user = userEvent.setup();
    const onSubmit = vi.fn();
    render(<FormBuilder fields={basicFields} onSubmit={onSubmit} />);
    await user.type(screen.getByLabelText(/Full Name/), 'Rahul');
    await user.type(screen.getByLabelText(/Email/), 'rahul@gov.in');
    await user.click(screen.getByRole('button', { name: 'Submit' }));
    expect(onSubmit).toHaveBeenCalledWith({ name: 'Rahul', email: 'rahul@gov.in' });
  });

  it('shows validation errors for required fields', async () => {
    const user = userEvent.setup();
    const onSubmit = vi.fn();
    render(<FormBuilder fields={basicFields} onSubmit={onSubmit} />);
    await user.click(screen.getByRole('button', { name: 'Submit' }));
    expect(onSubmit).not.toHaveBeenCalled();
    expect(screen.getByText('Full Name is required')).toBeInTheDocument();
    expect(screen.getByText('Email is required')).toBeInTheDocument();
  });

  it('renders textarea field', () => {
    const fields = [{ key: 'desc', label: 'Description', type: 'textarea' as const }];
    render(<FormBuilder fields={fields} onSubmit={() => {}} />);
    expect(screen.getByLabelText('Description')).toBeInTheDocument();
  });

  it('renders select field with options', () => {
    const fields = [{
      key: 'state', label: 'State', type: 'select' as const,
      options: [{ value: 'DL', label: 'Delhi' }, { value: 'MH', label: 'Maharashtra' }],
    }];
    render(<FormBuilder fields={fields} onSubmit={() => {}} />);
    expect(screen.getByLabelText('State')).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Delhi' })).toBeInTheDocument();
  });

  it('renders checkbox field', () => {
    const fields = [{ key: 'agree', label: 'I agree', type: 'checkbox' as const }];
    render(<FormBuilder fields={fields} onSubmit={() => {}} />);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('renders radio field', () => {
    const fields = [{
      key: 'gender', label: 'Gender', type: 'radio' as const,
      options: [{ value: 'M', label: 'Male' }, { value: 'F', label: 'Female' }],
    }];
    render(<FormBuilder fields={fields} onSubmit={() => {}} />);
    expect(screen.getAllByRole('radio').length).toBe(2);
  });

  it('shows required indicator', () => {
    render(<FormBuilder fields={basicFields} onSubmit={() => {}} />);
    expect(screen.getAllByText('*').length).toBe(2);
  });

  it('renders hint text', () => {
    const fields = [{ key: 'name', label: 'Name', type: 'text' as const, hint: 'As per Aadhaar' }];
    render(<FormBuilder fields={fields} onSubmit={() => {}} />);
    expect(screen.getByText('As per Aadhaar')).toBeInTheDocument();
  });

  it('forwards ref to form element', () => {
    const ref = React.createRef<HTMLFormElement>();
    render(<FormBuilder fields={basicFields} onSubmit={() => {}} ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLFormElement);
  });
});
