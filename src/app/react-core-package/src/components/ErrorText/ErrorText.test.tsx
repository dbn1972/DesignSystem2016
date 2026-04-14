import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ErrorText } from './ErrorText';
import { Field } from '../Field';
import { Input } from '../Input';

describe('ErrorText', () => {
  // ── Rendering ─────────────────────────────────────────────────────────────

  it('renders children', () => {
    render(<ErrorText>This field is required</ErrorText>);
    expect(screen.getByText('This field is required')).toBeInTheDocument();
  });

  it('renders as a span element', () => {
    render(<ErrorText>Error</ErrorText>);
    expect(screen.getByText('Error').tagName).toBe('SPAN');
  });

  it('applies the error message class', () => {
    render(<ErrorText>Error</ErrorText>);
    expect(screen.getByText('Error')).toHaveClass('ux4g-error-message');
  });

  // ── Accessibility ─────────────────────────────────────────────────────────

  it('has role="alert" for immediate announcement', () => {
    render(<ErrorText>Error</ErrorText>);
    expect(screen.getByRole('alert')).toBeInTheDocument();
  });

  it('uses explicit id when provided', () => {
    render(<ErrorText id="name-error">Error</ErrorText>);
    expect(screen.getByRole('alert')).toHaveAttribute('id', 'name-error');
  });

  // ── Field context integration ─────────────────────────────────────────────

  it('picks up errorId from Field context', () => {
    render(
      <Field id="name">
        <Input />
        <ErrorText>Name is required</ErrorText>
      </Field>
    );
    expect(screen.getByRole('alert')).toHaveAttribute('id', 'name-error');
  });

  it('is referenced by input aria-describedby via Field context', () => {
    render(
      <Field id="name">
        <Input />
        <ErrorText>Name is required</ErrorText>
      </Field>
    );
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-describedby', 'name-error');
  });

  it('sets aria-invalid on input when Field has errorText prop', () => {
    render(
      <Field id="name" errorText="Name is required">
        <Input />
      </Field>
    );
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true');
  });

  // ── Ref forwarding ────────────────────────────────────────────────────────

  it('forwards ref to the span element', () => {
    const ref = React.createRef<HTMLSpanElement>();
    render(<ErrorText ref={ref}>Error</ErrorText>);
    expect(ref.current).toBeInstanceOf(HTMLSpanElement);
  });
});
