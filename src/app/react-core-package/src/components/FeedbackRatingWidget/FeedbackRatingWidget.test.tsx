import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FeedbackRatingWidget } from './FeedbackRatingWidget';

describe('FeedbackRatingWidget', () => {
  it('renders 5 stars by default', () => { render(<FeedbackRatingWidget />); expect(screen.getAllByRole('radio').length).toBe(5); });
  it('renders custom max', () => { render(<FeedbackRatingWidget max={3} />); expect(screen.getAllByRole('radio').length).toBe(3); });
  it('renders label', () => { render(<FeedbackRatingWidget label="How was it?" />); expect(screen.getByText('How was it?')).toBeInTheDocument(); });
  it('marks selected star', () => { render(<FeedbackRatingWidget value={3} />); expect(screen.getByRole('radio', { name: '3 stars' })).toHaveAttribute('aria-checked', 'true'); });
  it('calls onChange on click', async () => { const user = userEvent.setup(); const onChange = vi.fn(); render(<FeedbackRatingWidget onChange={onChange} />); await user.click(screen.getByRole('radio', { name: '4 stars' })); expect(onChange).toHaveBeenCalledWith(4); });
  it('shows rating text when value set', () => { render(<FeedbackRatingWidget value={3} />); expect(screen.getByText('3 of 5 stars')).toBeInTheDocument(); });
  it('disables all stars when disabled', () => { render(<FeedbackRatingWidget disabled />); screen.getAllByRole('radio').forEach((r) => expect(r).toBeDisabled()); });
  it('has radiogroup role', () => { render(<FeedbackRatingWidget />); expect(screen.getByRole('radiogroup')).toBeInTheDocument(); });
  it('forwards ref', () => { const ref = React.createRef<HTMLDivElement>(); render(<FeedbackRatingWidget ref={ref} />); expect(ref.current).toBeInstanceOf(HTMLDivElement); });
});
