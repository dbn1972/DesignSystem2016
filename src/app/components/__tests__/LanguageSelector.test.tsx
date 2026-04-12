import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LanguageSelector } from '../LanguageSelector';

// Mock i18next
vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: {
      language: 'en',
      changeLanguage: vi.fn(),
    },
  }),
}));

// Mock the i18n config
vi.mock('../../i18n/config', () => ({
  SUPPORTED_LANGUAGES: [
    { code: 'en', name: 'English', nativeName: 'English', dir: 'ltr' },
    { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', dir: 'ltr' },
    { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்', dir: 'ltr' },
  ],
  applyLanguageDirection: vi.fn(),
}));

describe('LanguageSelector', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render the language selector button', () => {
    render(<LanguageSelector />);
    const button = screen.getByRole('button', { name: /common.selectLanguage/i });
    expect(button).toBeInTheDocument();
  });

  it('should display current language in default variant', () => {
    render(<LanguageSelector variant="default" />);
    expect(screen.getByText('English')).toBeInTheDocument();
  });

  it('should display language code in compact variant', () => {
    render(<LanguageSelector variant="compact" />);
    // Language code is displayed in uppercase via CSS
    expect(screen.getByText('en')).toBeInTheDocument();
  });

  it('should show globe icon when showFlag is true', () => {
    render(<LanguageSelector showFlag={true} />);
    const button = screen.getByRole('button');
    const globeIcon = button.querySelector('svg');
    expect(globeIcon).toBeInTheDocument();
  });

  it('should toggle dropdown when button is clicked', async () => {
    render(<LanguageSelector />);
    const button = screen.getByRole('button', { name: /common.selectLanguage/i });

    // Initially closed
    expect(button).toHaveAttribute('aria-expanded', 'false');
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();

    // Click to open
    fireEvent.click(button);
    expect(button).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByRole('listbox')).toBeInTheDocument();

    // Click to close
    fireEvent.click(button);
    expect(button).toHaveAttribute('aria-expanded', 'false');
  });

  it('should display all supported languages in dropdown', () => {
    render(<LanguageSelector />);
    const button = screen.getByRole('button', { name: /common.selectLanguage/i });

    fireEvent.click(button);

    // Multiple instances of 'English' exist (native name and English name)
    expect(screen.getAllByText('English').length).toBeGreaterThan(0);
    expect(screen.getByText('हिन्दी')).toBeInTheDocument();
    expect(screen.getByText('தமிழ்')).toBeInTheDocument();
  });

  it('should close dropdown when Escape key is pressed', async () => {
    render(<LanguageSelector />);
    const button = screen.getByRole('button', { name: /common.selectLanguage/i });

    // Open dropdown
    fireEvent.click(button);
    expect(screen.getByRole('listbox')).toBeInTheDocument();

    // Press Escape
    fireEvent.keyDown(document, { key: 'Escape' });

    await waitFor(() => {
      expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    });
  });

  it('should close dropdown when clicking outside', async () => {
    render(
      <div>
        <LanguageSelector />
        <div data-testid="outside">Outside element</div>
      </div>
    );

    const button = screen.getByRole('button', { name: /common.selectLanguage/i });

    // Open dropdown
    fireEvent.click(button);
    expect(screen.getByRole('listbox')).toBeInTheDocument();

    // Click outside
    fireEvent.mouseDown(screen.getByTestId('outside'));

    await waitFor(() => {
      expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    });
  });

  it('should mark current language as selected', () => {
    render(<LanguageSelector />);
    const button = screen.getByRole('button', { name: /common.selectLanguage/i });

    fireEvent.click(button);

    const englishOption = screen.getAllByRole('option').find(
      option => option.textContent?.includes('English')
    );

    expect(englishOption).toHaveAttribute('aria-selected', 'true');
  });

  it('should apply custom className', () => {
    const { container } = render(<LanguageSelector className="custom-class" />);
    const wrapper = container.querySelector('.custom-class');
    expect(wrapper).toBeInTheDocument();
  });

  it('should display footer info text', () => {
    render(<LanguageSelector />);
    const button = screen.getByRole('button', { name: /common.selectLanguage/i });

    fireEvent.click(button);

    expect(screen.getByText('More languages coming soon')).toBeInTheDocument();
  });
});
