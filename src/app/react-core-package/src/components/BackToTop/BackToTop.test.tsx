import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BackToTop } from './BackToTop';

describe('BackToTop', () => {
  it('is hidden when scroll is at top', () => { render(<BackToTop />); expect(screen.queryByRole('button')).not.toBeInTheDocument(); });
  it('appears after scrolling past threshold', () => {
    render(<BackToTop threshold={100} />);
    act(() => { Object.defineProperty(window, 'scrollY', { value: 200, writable: true }); window.dispatchEvent(new Event('scroll')); });
    expect(screen.getByRole('button', { name: 'Back to top' })).toBeInTheDocument();
  });
  it('calls scrollTo on click', async () => {
    const user = userEvent.setup();
    window.scrollTo = vi.fn();
    render(<BackToTop threshold={0} />);
    act(() => { Object.defineProperty(window, 'scrollY', { value: 100, writable: true }); window.dispatchEvent(new Event('scroll')); });
    await user.click(screen.getByRole('button'));
    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
  });
  it('uses custom label', () => {
    render(<BackToTop threshold={0} label="Scroll up" />);
    act(() => { Object.defineProperty(window, 'scrollY', { value: 100, writable: true }); window.dispatchEvent(new Event('scroll')); });
    expect(screen.getByRole('button', { name: 'Scroll up' })).toBeInTheDocument();
  });
});
