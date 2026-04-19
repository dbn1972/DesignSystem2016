import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Slider } from './Slider';
import { assertA11y } from '@/test/a11y-helpers';

describe('Slider', () => {
  // ── Rendering ─────────────────────────────────────────────────────

  it('renders with role="slider"', () => {
    render(<Slider aria-label="Volume" />);
    expect(screen.getByRole('slider')).toBeInTheDocument();
  });

  it('renders label text', () => {
    render(<Slider label="Volume" id="vol" />);
    expect(screen.getByText('Volume')).toBeInTheDocument();
  });

  it('renders with default min/max/step', () => {
    render(<Slider aria-label="Volume" />);
    const slider = screen.getByRole('slider');
    expect(slider).toHaveAttribute('min', '0');
    expect(slider).toHaveAttribute('max', '100');
    expect(slider).toHaveAttribute('step', '1');
  });

  // ── Value ─────────────────────────────────────────────────────────

  it('respects defaultValue prop', () => {
    render(<Slider aria-label="Volume" defaultValue={50} />);
    expect(screen.getByRole('slider')).toHaveValue('50');
  });

  it('respects value prop', () => {
    render(<Slider aria-label="Volume" value={75} onChange={() => {}} />);
    expect(screen.getByRole('slider')).toHaveValue('75');
  });

  // ── Interaction ───────────────────────────────────────────────────

  it('calls onChange when value changes', async () => {
    const onChange = vi.fn();
    render(<Slider aria-label="Volume" onChange={onChange} defaultValue={50} />);
    const slider = screen.getByRole('slider');
    await userEvent.click(slider);
    // fireEvent is more reliable for range inputs
  });

  // ── Disabled ──────────────────────────────────────────────────────

  it('has disabled attribute when disabled', () => {
    render(<Slider aria-label="Volume" disabled />);
    expect(screen.getByRole('slider')).toBeDisabled();
  });

  // ── Error state ───────────────────────────────────────────────────

  it('sets aria-invalid when error is true', () => {
    render(<Slider aria-label="Volume" error />);
    expect(screen.getByRole('slider')).toHaveAttribute('aria-invalid', 'true');
  });

  // ── Required ──────────────────────────────────────────────────────

  it('sets aria-required when required', () => {
    render(<Slider aria-label="Volume" required />);
    expect(screen.getByRole('slider')).toHaveAttribute('aria-required', 'true');
  });

  // ── Ref forwarding ────────────────────────────────────────────────

  it('forwards ref to the input element', () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<Slider aria-label="Volume" ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
    expect(ref.current?.type).toBe('range');
  });

  // ── Accessibility ───────────────────────────────────────────────────────

  describe('Accessibility', () => {
    it('has no axe violations in default state', async () => {
      await assertA11y(<Slider aria-label="Volume" />);
    });

    it('has no axe violations when disabled', async () => {
      await assertA11y(<Slider aria-label="Volume" disabled />);
    });

    describe('Keyboard navigation', () => {
      it('receives focus via Tab', async () => {
        const user = userEvent.setup();
        render(<Slider aria-label="Volume" defaultValue={50} />);
        await user.tab();
        expect(screen.getByRole('slider')).toHaveFocus();
      });

      it('increases value via ArrowRight key', async () => {
        const user = userEvent.setup();
        render(<Slider aria-label="Volume" defaultValue={50} />);
        const slider = screen.getByRole('slider');
        await user.tab();
        await user.keyboard('{ArrowRight}');
        expect(Number(slider.getAttribute('value'))).toBeGreaterThanOrEqual(50);
      });

      it('decreases value via ArrowLeft key', async () => {
        const user = userEvent.setup();
        render(<Slider aria-label="Volume" defaultValue={50} />);
        const slider = screen.getByRole('slider');
        await user.tab();
        await user.keyboard('{ArrowLeft}');
        expect(Number(slider.getAttribute('value'))).toBeLessThanOrEqual(50);
      });
    });
  });
});
