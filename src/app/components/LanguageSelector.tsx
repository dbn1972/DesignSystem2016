/**
 * Language Selector Component
 * Dropdown to switch between India's 22 scheduled languages
 */

import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, Check, ChevronDown } from 'lucide-react';
import { SUPPORTED_LANGUAGES, applyLanguageDirection } from '../i18n/config';

interface LanguageSelectorProps {
  variant?: 'default' | 'compact';
  showFlag?: boolean;
  className?: string;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  variant = 'default',
  showFlag = true,
  className = '',
}) => {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLanguage = SUPPORTED_LANGUAGES.find(
    (lang) => lang.code === i18n.language
  ) || SUPPORTED_LANGUAGES[0];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Close dropdown on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  const handleLanguageChange = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
    applyLanguageDirection(languageCode);
    setIsOpen(false);
  };

  return (
    <div className={`relative inline-block ${className}`} ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border bg-card hover:bg-background transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        aria-label={t('common.selectLanguage')}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        {showFlag && <Globe className="w-5 h-5 text-muted-foreground" aria-hidden="true" />}

        {variant === 'default' && (
          <span className="text-sm font-medium text-foreground">
            {currentLanguage.nativeName}
          </span>
        )}

        {variant === 'compact' && (
          <span className="text-sm font-medium text-foreground uppercase">
            {currentLanguage.code}
          </span>
        )}

        <ChevronDown
          className={`w-4 h-4 text-muted-foreground transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
          aria-hidden="true"
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-72 max-h-96 overflow-y-auto bg-card rounded-lg shadow-lg border border-border z-50"
          role="listbox"
          aria-label={t('common.selectLanguage')}
        >
          {/* Header */}
          <div className="sticky top-0 bg-card border-b border-border px-4 py-3">
            <h3 className="text-sm font-semibold text-foreground">
              {t('common.selectLanguage')}
            </h3>
            <p className="text-xs text-muted-foreground mt-0.5">
              22 Scheduled Languages
            </p>
          </div>

          {/* Language List */}
          <div className="py-2">
            {SUPPORTED_LANGUAGES.map((language) => {
              const isSelected = language.code === i18n.language;

              return (
                <button
                  key={language.code}
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => handleLanguageChange(language.code)}
                  className={`w-full flex items-center justify-between px-4 py-2.5 text-left transition-colors hover:bg-background ${
                    isSelected ? 'bg-accent' : ''
                  }`}
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-sm font-medium ${
                          isSelected ? 'text-primary' : 'text-foreground'
                        }`}
                        dir={language.dir}
                      >
                        {language.nativeName}
                      </span>
                      {language.dir === 'rtl' && (
                        <span className="text-xs px-1.5 py-0.5 bg-orange-100 text-orange-700 rounded font-medium">
                          RTL
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-muted-foreground mt-0.5">
                      {language.name}
                    </div>
                  </div>

                  {isSelected && (
                    <Check className="w-5 h-5 text-primary" aria-hidden="true" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Footer Info */}
          <div className="sticky bottom-0 bg-background border-t border-border px-4 py-2">
            <p className="text-xs text-muted-foreground">
              More languages coming soon
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
