import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Rating } from './Rating';

describe('Rating', () => {
  // ── Rendering ─────────────────────────────────────────────────────────────

  it('renders 5 star buttons by default', () => {
    render(<Rating />);
    expect(screen.getAllByRole('button')).toHaveLength(5);
  });

  it('renders the specified max number of stars', () => {
    render(<Rating max={3} />);
    expect(screen.getAllByRole('button')).toHaveLength(3);
  });

  it('labels each star with its value', () => {
    render(<Rating max={5} />);
    expect(screen.getByRole('button', { name: 'Rate 1 out of 5' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Rate 5 out of 5' })).toBeInTheDocument();
  });

  it('has role=radiogroup on the container', () => {
    render(<Rating />);
    expect(screen.getByRole('radiogroup', { name: 'Rating' })).toBeInTheDocument();
  });

  // ── Default value ─────────────────────────────────────────────────────────

  it('marks stars up to defaultValue as filled', () => {
    render(<Rating defaultValue={3} />);
    const stars = screen.getAllByRole('button');
    expect(stars[0]).toHaveClass('ux4g-rating-star-filled');
    expect(stars[1]).toHaveClass('ux4g-rating-star-filled');
    expect(stars[2]).toHaveClass('ux4g-rating-star-filled');
    expect(stars[3]).not.toHaveClass('ux4g-rating-star-filled');
    expect(stars[4]).not.toHaveClass('ux4g-rating-star-filled');
  });

  // ── Interaction ───────────────────────────────────────────────────────────

  it('calls onChange with the clicked star value', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Rating onChange={onChange} />);
    await user.click(screen.getByRole('button', { name: 'Rate 4 out of 5' }));
    expect(onChange).toHaveBeenCalledWith(4);
  });

  it('updates filled stars after click (uncontrolled)', async () => {
    const user = userEvent.setup();
    render(<Rating />);
    await user.click(screen.getByRole('button', { name: 'Rate 3 out of 5' }));
    const stars = screen.getAllByRole('button');
    expect(stars[0]).toHaveClass('ux4g-rating-star-filled');
    expect(stars[1]).toHaveClass('ux4g-rating-star-filled');
    expect(stars[2]).toHaveClass('ux4g-rating-star-filled');
    expect(stars[3]).not.toHaveClass('ux4g-rating-star-filled');
  });

  it('calls onHover with star value on mouse enter', async () => {
    const user = userEvent.setup();
    const onHover = vi.fn();
    render(<Rating onHover={onHover} />);
    await user.hover(screen.getByRole('button', { name: 'Rate 2 out of 5' }));
    expect(onHover).toHaveBeenCalledWith(2);
  });

  it('calls onHover with null on mouse leave', async () => {
    const user = userEvent.setup();
    const onHover = vi.fn();
    render(<Rating onHover={onHover} />);
    const container = screen.getByRole('radiogroup');
    await user.hover(screen.getByRole('button', { name: 'Rate 2 out of 5' }));
    await user.unhover(container);
    expect(onHover).toHaveBeenLastCalledWith(null);
  });

  // ── Read-only state ───────────────────────────────────────────────────────

  it('does not call onChange when readOnly', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Rating readOnly onChange={onChange} />);
    await user.click(screen.getByRole('button', { name: 'Rate 3 out of 5' }));
    expect(onChange).not.toHaveBeenCalled();
  });

  it('applies readOnly class', () => {
    render(<Rating readOnly />);
    expect(screen.getByRole('radiogroup')).toHaveClass('ux4g-rating-readonly');
  });

  // ── Disabled state ────────────────────────────────────────────────────────

  it('disables all star buttons when disabled', () => {
    render(<Rating disabled />);
    screen.getAllByRole('button').forEach((btn) => expect(btn).toBeDisabled());
  });

  it('does not call onChange when disabled', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Rating disabled onChange={onChange} />);
    await user.click(screen.getByRole('button', { name: 'Rate 3 out of 5' }));
    expect(onChange).not.toHaveBeenCalled();
  });

  it('applies disabled class', () => {
    render(<Rating disabled />);
    expect(screen.getByRole('radiogroup')).toHaveClass('ux4g-rating-disabled');
  });

  // ── Sizes ─────────────────────────────────────────────────────────────────

  it.each(['sm', 'md', 'lg'] as const)('applies %s size class', (size) => {
    render(<Rating size={size} />);
    expect(screen.getByRole('radiogroup')).toHaveClass(`ux4g-rating-${size}`);
  });

  // ── Label ─────────────────────────────────────────────────────────────────

  it('does not show label by default', () => {
    render(<Rating defaultValue={3} />);
    expect(screen.queryByText('3 / 5')).not.toBeInTheDocument();
  });

  it('shows label when showLabel is true', () => {
    render(<Rating defaultValue={3} showLabel />);
    expect(screen.getByText('3 / 5')).toBeInTheDocument();
  });

  it('uses custom labelFormatter', () => {
    render(<Rating defaultValue={4} showLabel labelFormatter={(v) => `${v} stars`} />);
    expect(screen.getByText('4 stars')).toBeInTheDocument();
  });

  // ── Controlled mode ───────────────────────────────────────────────────────

  it('respects controlled value', () => {
    render(<Rating value={2} onChange={vi.fn()} />);
    const stars = screen.getAllByRole('button');
    expect(stars[0]).toHaveClass('ux4g-rating-star-filled');
    expect(stars[1]).toHaveClass('ux4g-rating-star-filled');
    expect(stars[2]).not.toHaveClass('ux4g-rating-star-filled');
  });

  // ── Custom icon ───────────────────────────────────────────────────────────

  it('renders custom icon in each star', () => {
    render(<Rating icon="♥" max={3} />);
    const stars = screen.getAllByRole('button');
    stars.forEach((star) => expect(star).toHaveTextContent('♥'));
  });
});
