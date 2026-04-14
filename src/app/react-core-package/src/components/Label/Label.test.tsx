import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Label } from './Label';
import { Field } from '../Field';
import { Input } from '../Input';

describe('Label', () => {
  // ── Rendering ─────────────────────────────────────────────────────────────

  it('renders a label element', () => {
    render(<Label htmlFor="name">Full Name</Label>);
    expect(screen.getByText('Full Name').tagName).toBe('LABEL');
  });

  it('renders children', () => {
    render(<Label htmlFor="name">Full Name</Label>);
    expect(screen.getByText('Full Name')).toBeInTheDocument();
  });

  it('sets htmlFor attribute', () => {
    render(<Label htmlFor="email">Email</Label>);
    expect(screen.getByText('Email')).toHaveAttribute('for', 'email');
  });

  // ── Required indicator ────────────────────────────────────────────────────

  it('applies required class when required is true', () => {
    render(<Label htmlFor="name" required>Name</Label>);
    expect(screen.getByText('Name')).toHaveClass('ux4g-label-required');
  });

  it('does not apply required class by default', () => {
    render(<Label htmlFor="name">Name</Label>);
    expect(screen.getByText('Name')).not.toHaveClass('ux4g-label-required');
  });

  // ── Disabled state ────────────────────────────────────────────────────────

  it('applies disabled class when disabled is true', () => {
    render(<Label htmlFor="name" disabled>Name</Label>);
    expect(screen.getByText('Name')).toHaveClass('ux4g-label-disabled');
  });

  // ── Field context integration ─────────────────────────────────────────────

  it('auto-wires htmlFor from Field context', () => {
    render(
      <Field id="email">
        <Label>Email address</Label>
        <Input type="email" />
      </Field>
    );
    expect(screen.getByText('Email address')).toHaveAttribute('for', 'email');
  });

  it('inherits required from Field context', () => {
    render(
      <Field id="email" required>
        <Label>Email address</Label>
        <Input type="email" />
      </Field>
    );
    expect(screen.getByText('Email address')).toHaveClass('ux4g-label-required');
  });

  it('inherits disabled from Field context', () => {
    render(
      <Field id="email" disabled>
        <Label>Email address</Label>
        <Input type="email" />
      </Field>
    );
    expect(screen.getByText('Email address')).toHaveClass('ux4g-label-disabled');
  });

  // ── Ref forwarding ────────────────────────────────────────────────────────

  it('forwards ref to the label element', () => {
    const ref = React.createRef<HTMLLabelElement>();
    render(<Label htmlFor="name" ref={ref}>Name</Label>);
    expect(ref.current).toBeInstanceOf(HTMLLabelElement);
  });
});
