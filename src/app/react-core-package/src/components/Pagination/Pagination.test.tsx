import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Pagination } from './Pagination';

describe('Pagination', () => {
  // ── Rendering ─────────────────────────────────────────────────────────────

  it('renders a navigation landmark', () => {
    render(<Pagination totalPages={5} />);
    expect(screen.getByRole('navigation', { name: 'Pagination' })).toBeInTheDocument();
  });

  it('renders page buttons for small page counts', () => {
    render(<Pagination totalPages={5} />);
    expect(screen.getByRole('button', { name: 'Go to page 1' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Go to page 5' })).toBeInTheDocument();
  });

  it('renders first/last and prev/next buttons by default', () => {
    render(<Pagination totalPages={5} />);
    expect(screen.getByRole('button', { name: 'Go to first page' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Go to last page' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Go to previous page' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Go to next page' })).toBeInTheDocument();
  });

  // ── Default page ──────────────────────────────────────────────────────────

  it('marks page 1 as current by default', () => {
    render(<Pagination totalPages={5} />);
    expect(screen.getByRole('button', { name: 'Go to page 1' })).toHaveAttribute(
      'aria-current',
      'page'
    );
  });

  it('marks the defaultValue page as current', () => {
    render(<Pagination totalPages={10} defaultValue={3} />);
    expect(screen.getByRole('button', { name: 'Go to page 3' })).toHaveAttribute(
      'aria-current',
      'page'
    );
  });

  // ── Navigation ────────────────────────────────────────────────────────────

  it('calls onChange with the next page when Next is clicked', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Pagination totalPages={5} onChange={onChange} />);
    await user.click(screen.getByRole('button', { name: 'Go to next page' }));
    expect(onChange).toHaveBeenCalledWith(2);
  });

  it('calls onChange with the previous page when Previous is clicked', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Pagination totalPages={5} defaultValue={3} onChange={onChange} />);
    await user.click(screen.getByRole('button', { name: 'Go to previous page' }));
    expect(onChange).toHaveBeenCalledWith(2);
  });

  it('calls onChange with 1 when First is clicked', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Pagination totalPages={5} defaultValue={4} onChange={onChange} />);
    await user.click(screen.getByRole('button', { name: 'Go to first page' }));
    expect(onChange).toHaveBeenCalledWith(1);
  });

  it('calls onChange with totalPages when Last is clicked', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Pagination totalPages={5} onChange={onChange} />);
    await user.click(screen.getByRole('button', { name: 'Go to last page' }));
    expect(onChange).toHaveBeenCalledWith(5);
  });

  it('calls onChange with the clicked page number', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Pagination totalPages={5} onChange={onChange} />);
    await user.click(screen.getByRole('button', { name: 'Go to page 3' }));
    expect(onChange).toHaveBeenCalledWith(3);
  });

  // ── Boundary conditions ───────────────────────────────────────────────────

  it('disables First and Previous on page 1', () => {
    render(<Pagination totalPages={5} defaultValue={1} />);
    expect(screen.getByRole('button', { name: 'Go to first page' })).toBeDisabled();
    expect(screen.getByRole('button', { name: 'Go to previous page' })).toBeDisabled();
  });

  it('disables Last and Next on the last page', () => {
    render(<Pagination totalPages={5} defaultValue={5} />);
    expect(screen.getByRole('button', { name: 'Go to last page' })).toBeDisabled();
    expect(screen.getByRole('button', { name: 'Go to next page' })).toBeDisabled();
  });

  it('does not call onChange when clicking the current page', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Pagination totalPages={5} defaultValue={2} onChange={onChange} />);
    await user.click(screen.getByRole('button', { name: 'Go to page 2' }));
    expect(onChange).not.toHaveBeenCalled();
  });

  // ── Disabled state ────────────────────────────────────────────────────────

  it('disables all buttons when disabled prop is true', () => {
    render(<Pagination totalPages={5} defaultValue={3} disabled />);
    screen.getAllByRole('button').forEach((btn) => expect(btn).toBeDisabled());
  });

  it('does not call onChange when disabled', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Pagination totalPages={5} disabled onChange={onChange} />);
    await user.click(screen.getByRole('button', { name: 'Go to page 3' }));
    expect(onChange).not.toHaveBeenCalled();
  });

  // ── Page info ─────────────────────────────────────────────────────────────

  it('shows page info when showPageInfo is true', () => {
    render(<Pagination totalPages={10} defaultValue={3} showPageInfo />);
    expect(screen.getByText('Page 3 of 10')).toBeInTheDocument();
  });

  it('does not show page info by default', () => {
    render(<Pagination totalPages={10} />);
    expect(screen.queryByText(/Page \d+ of \d+/)).not.toBeInTheDocument();
  });

  // ── Controlled mode ───────────────────────────────────────────────────────

  it('respects controlled value prop', () => {
    render(<Pagination totalPages={5} value={4} onChange={vi.fn()} />);
    expect(screen.getByRole('button', { name: 'Go to page 4' })).toHaveAttribute(
      'aria-current',
      'page'
    );
  });
});
