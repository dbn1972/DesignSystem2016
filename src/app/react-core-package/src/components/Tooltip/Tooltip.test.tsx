import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen, act, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Tooltip } from './Tooltip';

/** Show tooltip by firing mouseenter and advancing the delay timer */
function showTooltip(element: HTMLElement, delay = 0) {
  fireEvent.mouseEnter(element);
  act(() => { vi.advanceTimersByTime(delay); });
}

describe('Tooltip', () => {
  // ── Rendering ─────────────────────────────────────────────────────────────

  it('renders the trigger children', () => {
    render(
      <Tooltip content="Helpful info">
        <button type="button">Hover me</button>
      </Tooltip>
    );
    expect(screen.getByRole('button', { name: 'Hover me' })).toBeInTheDocument();
  });

  it('does not show tooltip content by default', () => {
    render(
      <Tooltip content="Helpful info">
        <button type="button">Hover me</button>
      </Tooltip>
    );
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
  });

  // ── Show on hover ─────────────────────────────────────────────────────────

  it('shows tooltip on mouse enter after delay', () => {
    vi.useFakeTimers();
    render(
      <Tooltip content="Helpful info" delay={200}>
        <button type="button">Hover me</button>
      </Tooltip>
    );

    showTooltip(screen.getByRole('button'), 200);

    expect(screen.getByRole('tooltip')).toBeInTheDocument();
    expect(screen.getByRole('tooltip')).toHaveTextContent('Helpful info');
    vi.useRealTimers();
  });

  it('does not show tooltip before delay elapses', () => {
    vi.useFakeTimers();
    render(
      <Tooltip content="Helpful info" delay={500}>
        <button type="button">Hover me</button>
      </Tooltip>
    );

    fireEvent.mouseEnter(screen.getByRole('button'));
    act(() => { vi.advanceTimersByTime(100); }); // not enough

    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
    vi.useRealTimers();
  });

  it('hides tooltip on mouse leave', () => {
    vi.useFakeTimers();
    render(
      <Tooltip content="Helpful info" delay={0}>
        <button type="button">Hover me</button>
      </Tooltip>
    );

    showTooltip(screen.getByRole('button'), 0);
    expect(screen.getByRole('tooltip')).toBeInTheDocument();

    fireEvent.mouseLeave(screen.getByRole('button'));
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
    vi.useRealTimers();
  });

  // ── Show on focus ─────────────────────────────────────────────────────────

  it('shows tooltip on focus', () => {
    vi.useFakeTimers();
    render(
      <Tooltip content="Focus info" delay={0}>
        <button type="button">Focus me</button>
      </Tooltip>
    );

    fireEvent.focus(screen.getByRole('button'));
    act(() => { vi.advanceTimersByTime(0); });

    expect(screen.getByRole('tooltip')).toBeInTheDocument();
    vi.useRealTimers();
  });

  it('hides tooltip on blur', () => {
    vi.useFakeTimers();
    render(
      <Tooltip content="Focus info" delay={0}>
        <button type="button">Focus me</button>
      </Tooltip>
    );

    fireEvent.focus(screen.getByRole('button'));
    act(() => { vi.advanceTimersByTime(0); });
    expect(screen.getByRole('tooltip')).toBeInTheDocument();

    fireEvent.blur(screen.getByRole('button'));
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
    vi.useRealTimers();
  });

  // ── Disabled state ────────────────────────────────────────────────────────

  it('does not show tooltip when disabled', () => {
    vi.useFakeTimers();
    render(
      <Tooltip content="Hidden info" delay={0} disabled>
        <button type="button">Hover me</button>
      </Tooltip>
    );

    fireEvent.mouseEnter(screen.getByRole('button'));
    act(() => { vi.advanceTimersByTime(200); });

    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
    vi.useRealTimers();
  });

  // ── Placement ─────────────────────────────────────────────────────────────

  it.each(['top', 'bottom', 'left', 'right'] as const)(
    'applies %s placement class to tooltip',
    (placement) => {
      vi.useFakeTimers();
      render(
        <Tooltip content="Info" placement={placement} delay={0}>
          <button type="button">Hover</button>
        </Tooltip>
      );

      showTooltip(screen.getByRole('button'), 0);
      expect(screen.getByRole('tooltip')).toHaveClass(`ux4g-tooltip-${placement}`);
      vi.useRealTimers();
    }
  );

  // ── Arrow ─────────────────────────────────────────────────────────────────

  it('applies arrow class by default', () => {
    vi.useFakeTimers();
    render(
      <Tooltip content="Info" delay={0}>
        <button type="button">Hover</button>
      </Tooltip>
    );

    showTooltip(screen.getByRole('button'), 0);
    expect(screen.getByRole('tooltip')).toHaveClass('ux4g-tooltip-arrow');
    vi.useRealTimers();
  });

  it('does not apply arrow class when showArrow is false', () => {
    vi.useFakeTimers();
    render(
      <Tooltip content="Info" delay={0} showArrow={false}>
        <button type="button">Hover</button>
      </Tooltip>
    );

    showTooltip(screen.getByRole('button'), 0);
    expect(screen.getByRole('tooltip')).not.toHaveClass('ux4g-tooltip-arrow');
    vi.useRealTimers();
  });

  // ── Accessibility ─────────────────────────────────────────────────────────

  it('tooltip has role="tooltip"', () => {
    vi.useFakeTimers();
    render(
      <Tooltip content="Accessible info" delay={0}>
        <button type="button">Hover</button>
      </Tooltip>
    );

    showTooltip(screen.getByRole('button'), 0);
    expect(screen.getByRole('tooltip')).toBeInTheDocument();
    vi.useRealTimers();
  });

  it('renders ReactNode content in tooltip', () => {
    vi.useFakeTimers();
    render(
      <Tooltip content={<strong>Bold tip</strong>} delay={0}>
        <button type="button">Hover</button>
      </Tooltip>
    );

    showTooltip(screen.getByRole('button'), 0);
    expect(screen.getByRole('tooltip').querySelector('strong')).toHaveTextContent('Bold tip');
    vi.useRealTimers();
  });
});
