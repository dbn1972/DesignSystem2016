import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { HintText } from './HintText';
import { Field } from '../Field';
import { Input } from '../Input';

describe('HintText', () => {
  // ── Rendering ─────────────────────────────────────────────────────────────

  it('renders children', () => {
    render(<HintText>Enter your 10-digit mobile number</HintText>);
    expect(screen.getByText('Enter your 10-digit mobile number')).toBeInTheDocument();
  });

  it('renders as a span element', () => {
    render(<HintText>Hint</HintText>);
    expect(screen.getByText('Hint').tagName).toBe('SPAN');
  });

  it('applies the helper text class', () => {
    render(<HintText>Hint</HintText>);
    expect(screen.getByText('Hint')).toHaveClass('ux4g-helper-text');
  });

  it('uses explicit id when provided', () => {
    render(<HintText id="my-hint">Hint</HintText>);
    expect(screen.getByText('Hint')).toHaveAttribute('id', 'my-hint');
  });

  // ── Field context integration ─────────────────────────────────────────────

  it('picks up hintId from Field context', () => {
    render(
      <Field id="mobile">
        <Input type="tel" />
        <HintText>10-digit number</HintText>
      </Field>
    );
    expect(screen.getByText('10-digit number')).toHaveAttribute('id', 'mobile-hint');
  });

  it('is referenced by input aria-describedby via Field context', () => {
    render(
      <Field id="mobile">
        <Input type="tel" />
        <HintText>10-digit number</HintText>
      </Field>
    );
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-describedby', 'mobile-hint');
  });

  // ── Ref forwarding ────────────────────────────────────────────────────────

  it('forwards ref to the span element', () => {
    const ref = React.createRef<HTMLSpanElement>();
    render(<HintText ref={ref}>Hint</HintText>);
    expect(ref.current).toBeInstanceOf(HTMLSpanElement);
  });
});
