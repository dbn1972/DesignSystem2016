import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Field } from './Field';
import { Input } from '../Input';
import { Label } from '../Label';
import { HintText } from '../HintText';
import { ErrorText } from '../ErrorText';

describe('Field', () => {
  it('auto-wires label, hint, and control semantics from Field props', () => {
    render(
      <Field
        id="email"
        label="Email address"
        hint="Use your government email"
        required
      >
        <Input type="email" />
      </Field>
    );

    const input = screen.getByRole('textbox');
    const label = screen.getByText('Email address');
    const hint = screen.getByText('Use your government email');

    expect(input).toHaveAttribute('id', 'email');
    expect(input).toHaveAttribute('required');
    expect(input).toHaveAttribute('aria-required', 'true');
    expect(input).toHaveAttribute('aria-describedby', 'email-hint');
    expect(label).toHaveAttribute('for', 'email');
    expect(hint).toHaveAttribute('id', 'email-hint');
  });

  it('marks the control invalid and links both hint and error text', () => {
    render(
      <Field
        id="phone"
        label="Phone number"
        hint="Enter a 10-digit mobile number"
        errorText="Phone number is required"
      >
        <Input type="tel" />
      </Field>
    );

    const input = screen.getByRole('textbox');
    const error = screen.getByText('Phone number is required');

    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(input).toHaveAttribute('aria-describedby', 'phone-hint phone-error');
    expect(error).toHaveAttribute('id', 'phone-error');
    expect(error).toHaveAttribute('role', 'alert');
  });

  it('keeps manual composition but fills missing ids from context', () => {
    render(
      <Field id="manual" required error>
        <Label>Manual label</Label>
        <Input />
        <HintText>Helpful context</HintText>
        <ErrorText>Something went wrong</ErrorText>
      </Field>
    );

    const input = screen.getByRole('textbox');
    const label = screen.getByText('Manual label');
    const hint = screen.getByText('Helpful context');
    const error = screen.getByText('Something went wrong');

    expect(input).toHaveAttribute('id', 'manual');
    expect(input).toHaveAttribute('aria-describedby', 'manual-hint manual-error');
    expect(label).toHaveAttribute('for', 'manual');
    expect(hint).toHaveAttribute('id', 'manual-hint');
    expect(error).toHaveAttribute('id', 'manual-error');
  });
});
