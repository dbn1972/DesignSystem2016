import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LanguageSelector } from './LanguageSelector';

const langs = [
  { code: 'en', label: 'English', nativeLabel: 'English' },
  { code: 'hi', label: 'Hindi', nativeLabel: 'हिन्दी' },
  { code: 'ta', label: 'Tamil', nativeLabel: 'தமிழ்' },
];

describe('LanguageSelector', () => {
  it('renders all languages', () => { render(<LanguageSelector languages={langs} value="en" onChange={() => {}} />); expect(screen.getByRole('option', { name: /English/ })).toBeInTheDocument(); expect(screen.getByRole('option', { name: /हिन्दी/ })).toBeInTheDocument(); });
  it('selects current value', () => { render(<LanguageSelector languages={langs} value="hi" onChange={() => {}} />); expect(screen.getByRole('combobox')).toHaveValue('hi'); });
  it('calls onChange', async () => { const user = userEvent.setup(); const onChange = vi.fn(); render(<LanguageSelector languages={langs} value="en" onChange={onChange} />); await user.selectOptions(screen.getByRole('combobox'), 'ta'); expect(onChange).toHaveBeenCalledWith('ta'); });
  it('is disabled when disabled', () => { render(<LanguageSelector languages={langs} value="en" onChange={() => {}} disabled />); expect(screen.getByRole('combobox')).toBeDisabled(); });
  it('has accessible label', () => { render(<LanguageSelector languages={langs} value="en" onChange={() => {}} />); expect(screen.getByRole('combobox')).toHaveAttribute('aria-label', 'Select Language'); });
  it('forwards ref', () => { const ref = React.createRef<HTMLSelectElement>(); render(<LanguageSelector languages={langs} value="en" onChange={() => {}} ref={ref} />); expect(ref.current).toBeInstanceOf(HTMLSelectElement); });
});
