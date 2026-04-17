import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CalendarScheduler } from './CalendarScheduler';

describe('CalendarScheduler', () => {
  it('renders the month name', () => {
    render(<CalendarScheduler selectedDate="2025-01-15" />);
    expect(screen.getByText(/January 2025/)).toBeInTheDocument();
  });

  it('renders date cells for the month', () => {
    render(<CalendarScheduler selectedDate="2025-01-15" />);
    expect(screen.getByRole('button', { name: '1' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '31' })).toBeInTheDocument();
  });

  it('calls onDateSelect when a date is clicked', async () => {
    const user = userEvent.setup();
    const onDateSelect = vi.fn();
    render(
      <CalendarScheduler
        selectedDate="2025-01-15"
        availableDates={['2025-01-10']}
        onDateSelect={onDateSelect}
      />
    );
    await user.click(screen.getByRole('button', { name: '10' }));
    expect(onDateSelect).toHaveBeenCalledWith('2025-01-10');
  });

  it('disables dates not in availableDates', () => {
    render(
      <CalendarScheduler
        selectedDate="2025-01-15"
        availableDates={['2025-01-10']}
      />
    );
    expect(screen.getByRole('button', { name: '5' })).toBeDisabled();
    expect(screen.getByRole('button', { name: '10' })).not.toBeDisabled();
  });

  it('disables all dates when disabled prop is set', () => {
    render(<CalendarScheduler selectedDate="2025-01-15" disabled />);
    const buttons = screen.getAllByRole('button');
    buttons.forEach((btn) => expect(btn).toBeDisabled());
  });

  it('forwards ref', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<CalendarScheduler ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
