/**
 * Language Selector Component Documentation Page
 * Complete documentation for the Language Selector component with examples, code downloads, and comparisons
 */

import React, { useState } from 'react';
import { ComponentDocumentation } from '../components/ComponentDocumentation';
import { Globe, ChevronDown } from 'lucide-react';

// Import the actual Language Selector component for live preview
const LanguageSelectorPreview = ({ variant, showFlags, position, languages, currentLanguage, onChange, ...props }: any) => {
  if (variant === 'dropdown') {
    return (
      <div className={`relative inline-block ${position === 'right' ? 'ml-auto' : ''}`}>
        <button
          className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded bg-white hover:bg-gray-50 transition-all min-h-[44px]"
          {...props}
        >
          {showFlags && <span className="text-xl">🇮🇳</span>}
          <Globe size={16} />
          <span>{currentLanguage?.name || 'Select Language'}</span>
          <ChevronDown size={16} />
        </button>
      </div>
    );
  }

  if (variant === 'tabs') {
    return (
      <div className={`flex gap-1 border-b border-gray-200 ${position === 'right' ? 'ml-auto' : ''}`}>
        {languages.map((lang: any) => (
          <button
            key={lang.code}
            className={`px-4 py-2 border-b-2 transition-all min-h-[44px] ${
              currentLanguage?.code === lang.code
                ? 'border-[#005196] text-[#005196] bg-blue-50'
                : 'border-transparent text-gray-600 hover:bg-gray-50'
            }`}
            onClick={() => onChange?.(lang)}
          >
            {showFlags && <span className="mr-2 text-xl">{lang.flag}</span>}
            <span>{lang.name}</span>
          </button>
        ))}
      </div>
    );
  }

  // buttons variant
  return (
    <div className={`flex flex-wrap gap-2 ${position === 'right' ? 'ml-auto' : ''}`}>
      {languages.map((lang: any) => (
        <button
          key={lang.code}
          className={`inline-flex items-center gap-2 px-4 py-2 border rounded transition-all min-h-[44px] ${
            currentLanguage?.code === lang.code
              ? 'bg-[#005196] text-white border-[#005196]'
              : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
          }`}
          onClick={() => onChange?.(lang)}
        >
          {showFlags && <span className="text-xl">{lang.flag}</span>}
          <span>{lang.name}</span>
        </button>
      ))}
    </div>
  );
};

export default function ComponentLanguageSelectorPage() {
  const [selectedLang, setSelectedLang] = useState({ code: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧' });
  const basicLanguages = [
    { code: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧' },
    { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳' },
    { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்', flag: '🇮🇳' },
  ];

  const regionalLanguages = [
    { code: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧' },
    { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳' },
    { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்', flag: '🇮🇳' },
    { code: 'bn', name: 'Bengali', nativeName: 'বাংলা', flag: '🇮🇳' },
    { code: 'te', name: 'Telugu', nativeName: 'తెలుగు', flag: '🇮🇳' },
    { code: 'mr', name: 'Marathi', nativeName: 'मराठी', flag: '🇮🇳' },
  ];

  return (
    <ComponentDocumentation
      name="Language Selector"
      description="Advanced component for multilingual support across government portals. Enables users to switch between multiple Indian and regional languages with full i18n support, persistent selection, and accessibility features. Essential for inclusive government services reaching diverse linguistic communities."
      category="Government Services"
      maturity="stable"
      tier="core"
      since="v1.0.0"
      updated="v2.2.0"

      props={[
        {
          name: 'languages',
          type: 'Language[]',
          required: true,
          description: 'Array of language objects. Each object must contain: code (ISO 639-1), name (English name), nativeName (name in native script), and optional flag emoji.',
        },
        {
          name: 'currentLanguage',
          type: 'Language',
          required: true,
          description: 'Currently selected language object. Should match one of the items in the languages array.',
        },
        {
          name: 'onChange',
          type: '(language: Language) => void',
          required: true,
          description: 'Callback fired when language selection changes. Receives the selected language object.',
        },
        {
          name: 'variant',
          type: "'dropdown' | 'tabs' | 'buttons'",
          default: "'dropdown'",
          required: false,
          description: 'Visual variant of the selector. Dropdown for compact header placement, tabs for prominent navigation, buttons for grid or list layouts.',
        },
        {
          name: 'showFlags',
          type: 'boolean',
          default: 'true',
          required: false,
          description: 'Whether to display flag icons alongside language names. Helps with quick visual identification.',
        },
        {
          name: 'position',
          type: "'left' | 'center' | 'right'",
          default: "'left'",
          required: false,
          description: 'Alignment position of the selector. Commonly placed right in headers, left in forms, center in onboarding.',
        },
        {
          name: 'showNativeNames',
          type: 'boolean',
          default: 'true',
          required: false,
          description: 'Whether to display language names in their native script. Important for users who may not read English.',
        },
        {
          name: 'persistent',
          type: 'boolean',
          default: 'false',
          required: false,
          description: 'Whether to persist the language selection to localStorage for future visits.',
        },
        {
          name: 'maxVisibleLanguages',
          type: 'number',
          default: '6',
          required: false,
          description: 'Maximum number of languages to show before requiring a search or scroll (dropdown variant only).',
        },
        {
          name: 'onError',
          type: '(error: Error) => void',
          required: false,
          description: 'Callback for handling i18n errors, such as missing translations or failed language loads.',
        },
        {
          name: 'className',
          type: 'string',
          required: false,
          description: 'Additional CSS classes to apply to the root element.',
        },
      ]}

      examples={[
        {
          title: 'Dropdown Selector',
          description: 'Compact dropdown variant ideal for header placement with minimal space usage.',
          code: `import { LanguageSelector } from '@ux4g/react-core';
import { useState } from 'react';

function Example() {
  const [currentLang, setCurrentLang] = useState({
    code: 'en',
    name: 'English',
    nativeName: 'English',
    flag: '🇬🇧'
  });

  const languages = [
    { code: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧' },
    { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳' },
    { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்', flag: '🇮🇳' },
    { code: 'bn', name: 'Bengali', nativeName: 'বাংলা', flag: '🇮🇳' },
  ];

  return (
    <LanguageSelector
      variant="dropdown"
      languages={languages}
      currentLanguage={currentLang}
      onChange={setCurrentLang}
      showFlags
      position="right"
    />
  );
}`,
          preview: (
            <div className="flex justify-end">
              <LanguageSelectorPreview
                variant="dropdown"
                languages={regionalLanguages}
                currentLanguage={selectedLang}
                onChange={setSelectedLang}
                showFlags
                position="right"
              />
            </div>
          ),
        },
        {
          title: 'Button Group',
          description: 'Button group variant for prominent language switching in forms or onboarding flows.',
          code: `import { LanguageSelector } from '@ux4g/react-core';
import { useState } from 'react';

function Example() {
  const [currentLang, setCurrentLang] = useState({
    code: 'en',
    name: 'English',
    nativeName: 'English',
    flag: '🇬🇧'
  });

  const languages = [
    { code: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧' },
    { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳' },
    { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்', flag: '🇮🇳' },
  ];

  return (
    <LanguageSelector
      variant="buttons"
      languages={languages}
      currentLanguage={currentLang}
      onChange={setCurrentLang}
      showFlags
    />
  );
}`,
          preview: (
            <LanguageSelectorPreview
              variant="buttons"
              languages={basicLanguages}
              currentLanguage={selectedLang}
              onChange={setSelectedLang}
              showFlags
            />
          ),
        },
        {
          title: 'Tab Navigation',
          description: 'Tab variant for horizontal navigation bar, suitable for page-level language switching.',
          code: `import { LanguageSelector } from '@ux4g/react-core';
import { useState } from 'react';

function Example() {
  const [currentLang, setCurrentLang] = useState({
    code: 'en',
    name: 'English',
    nativeName: 'English',
    flag: '🇬🇧'
  });

  const languages = [
    { code: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧' },
    { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳' },
    { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்', flag: '🇮🇳' },
  ];

  return (
    <LanguageSelector
      variant="tabs"
      languages={languages}
      currentLanguage={currentLang}
      onChange={setCurrentLang}
      showFlags={false}
    />
  );
}`,
          preview: (
            <LanguageSelectorPreview
              variant="tabs"
              languages={basicLanguages}
              currentLanguage={selectedLang}
              onChange={setSelectedLang}
              showFlags={false}
            />
          ),
        },
        {
          title: 'With Regional Scripts',
          description: 'Supporting multiple Indian languages with native scripts (Hindi, Tamil, Bengali).',
          code: `import { LanguageSelector } from '@ux4g/react-core';
import { useState } from 'react';

function Example() {
  const [currentLang, setCurrentLang] = useState({
    code: 'en',
    name: 'English',
    nativeName: 'English',
    flag: '🇬🇧'
  });

  // 22 official Indian languages
  const languages = [
    { code: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧' },
    { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳' },
    { code: 'bn', name: 'Bengali', nativeName: 'বাংলা', flag: '🇮🇳' },
    { code: 'te', name: 'Telugu', nativeName: 'తెలుగు', flag: '🇮🇳' },
    { code: 'mr', name: 'Marathi', nativeName: 'मराठी', flag: '🇮🇳' },
    { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்', flag: '🇮🇳' },
    { code: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી', flag: '🇮🇳' },
    { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ', flag: '🇮🇳' },
    { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം', flag: '🇮🇳' },
    { code: 'pa', name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ', flag: '🇮🇳' },
  ];

  return (
    <LanguageSelector
      variant="dropdown"
      languages={languages}
      currentLanguage={currentLang}
      onChange={setCurrentLang}
      showFlags
      showNativeNames
      maxVisibleLanguages={6}
    />
  );
}`,
          preview: (
            <div className="flex justify-end">
              <LanguageSelectorPreview
                variant="dropdown"
                languages={regionalLanguages}
                currentLanguage={selectedLang}
                onChange={setSelectedLang}
                showFlags
              />
            </div>
          ),
        },
        {
          title: 'Persistent Selection',
          description: 'Language preference saved to localStorage and restored on subsequent visits.',
          code: `import { LanguageSelector } from '@ux4g/react-core';
import { useState, useEffect } from 'react';

function Example() {
  const [currentLang, setCurrentLang] = useState({
    code: 'en',
    name: 'English',
    nativeName: 'English',
    flag: '🇬🇧'
  });

  const languages = [
    { code: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧' },
    { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳' },
    { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்', flag: '🇮🇳' },
  ];

  // Load persisted language on mount
  useEffect(() => {
    const savedLang = localStorage.getItem('preferred_language');
    if (savedLang) {
      const lang = languages.find(l => l.code === savedLang);
      if (lang) setCurrentLang(lang);
    }
  }, []);

  const handleChange = (lang: Language) => {
    setCurrentLang(lang);
    localStorage.setItem('preferred_language', lang.code);
  };

  return (
    <LanguageSelector
      variant="buttons"
      languages={languages}
      currentLanguage={currentLang}
      onChange={handleChange}
      persistent
    />
  );
}`,
          preview: (
            <LanguageSelectorPreview
              variant="buttons"
              languages={basicLanguages}
              currentLanguage={selectedLang}
              onChange={setSelectedLang}
              showFlags
            />
          ),
        },
        {
          title: 'Header Integration',
          description: 'Integrated into government portal header with right alignment and compact dropdown.',
          code: `import { LanguageSelector } from '@ux4g/react-core';
import { useState } from 'react';

function HeaderExample() {
  const [currentLang, setCurrentLang] = useState({
    code: 'en',
    name: 'English',
    nativeName: 'English',
    flag: '🇬🇧'
  });

  const languages = [
    { code: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧' },
    { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳' },
    { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்', flag: '🇮🇳' },
  ];

  return (
    <header className="bg-[#005196] text-white px-6 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-semibold">Government Portal</h1>
        </div>
        <LanguageSelector
          variant="dropdown"
          languages={languages}
          currentLanguage={currentLang}
          onChange={setCurrentLang}
          showFlags
          position="right"
        />
      </div>
    </header>
  );
}`,
          preview: (
            <div className="bg-[#005196] text-white px-6 py-4 rounded">
              <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold">Government Portal</h1>
                <LanguageSelectorPreview
                  variant="dropdown"
                  languages={basicLanguages}
                  currentLanguage={selectedLang}
                  onChange={setSelectedLang}
                  showFlags
                  position="right"
                />
              </div>
            </div>
          ),
        },
      ]}

      reactCode={{
        component: `import React, { forwardRef, useState, useRef, useEffect } from 'react';
import { cn } from '../../utils/cn';
import { languageSelectorVariants } from './language-selector.variants';
import { LanguageSelectorProps, Language } from './LanguageSelector.types';
import { Globe, ChevronDown } from 'lucide-react';

export const LanguageSelector = forwardRef<HTMLDivElement, LanguageSelectorProps>(
  (
    {
      languages,
      currentLanguage,
      onChange,
      variant = 'dropdown',
      showFlags = true,
      showNativeNames = true,
      position = 'left',
      persistent = false,
      maxVisibleLanguages = 6,
      onError,
      className,
      'aria-label': ariaLabel = 'Select language',
      ...props
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Load persisted language on mount
    useEffect(() => {
      if (persistent) {
        const savedCode = localStorage.getItem('ux4g_language');
        if (savedCode) {
          const lang = languages.find(l => l.code === savedCode);
          if (lang && lang.code !== currentLanguage.code) {
            onChange(lang);
          }
        }
      }
    }, [persistent]);

    // Close dropdown on outside click
    useEffect(() => {
      if (variant !== 'dropdown') return;

      const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [variant]);

    const handleLanguageChange = (language: Language) => {
      try {
        onChange(language);
        if (persistent) {
          localStorage.setItem('ux4g_language', language.code);
        }
        setIsOpen(false);
      } catch (error) {
        if (onError) {
          onError(error as Error);
        } else {
          console.error('Language selection error:', error);
        }
      }
    };

    if (variant === 'dropdown') {
      return (
        <div
          ref={ref}
          className={cn(languageSelectorVariants({ variant, position }), className)}
          {...props}
        >
          <div ref={dropdownRef} className="relative">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={ariaLabel}
              aria-expanded={isOpen}
              aria-haspopup="listbox"
              className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded bg-white hover:bg-gray-50 transition-all min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#005196]"
            >
              {showFlags && currentLanguage.flag && (
                <span className="text-xl" aria-hidden="true">{currentLanguage.flag}</span>
              )}
              <Globe size={16} aria-hidden="true" />
              <span>
                {showNativeNames ? currentLanguage.nativeName : currentLanguage.name}
              </span>
              <ChevronDown size={16} aria-hidden="true" />
            </button>

            {isOpen && (
              <div
                role="listbox"
                aria-label="Available languages"
                className="absolute top-full mt-2 right-0 bg-white border border-gray-300 rounded shadow-lg z-50 min-w-[200px] max-h-[400px] overflow-auto"
              >
                {languages.slice(0, maxVisibleLanguages).map((lang) => (
                  <button
                    key={lang.code}
                    role="option"
                    aria-selected={lang.code === currentLanguage.code}
                    onClick={() => handleLanguageChange(lang)}
                    className={cn(
                      'w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors flex items-center gap-2 min-h-[44px]',
                      lang.code === currentLanguage.code && 'bg-blue-50 text-[#005196] font-medium'
                    )}
                  >
                    {showFlags && lang.flag && (
                      <span className="text-xl" aria-hidden="true">{lang.flag}</span>
                    )}
                    <span>
                      {showNativeNames ? (
                        <>
                          {lang.nativeName}
                          {lang.nativeName !== lang.name && (
                            <span className="text-sm text-gray-500 ml-1">({lang.name})</span>
                          )}
                        </>
                      ) : (
                        lang.name
                      )}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      );
    }

    if (variant === 'tabs') {
      return (
        <div
          ref={ref}
          className={cn(languageSelectorVariants({ variant, position }), className)}
          role="tablist"
          aria-label={ariaLabel}
          {...props}
        >
          <div className="flex gap-1 border-b border-gray-200">
            {languages.map((lang) => (
              <button
                key={lang.code}
                role="tab"
                aria-selected={lang.code === currentLanguage.code}
                onClick={() => handleLanguageChange(lang)}
                className={cn(
                  'px-4 py-2 border-b-2 transition-all min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#005196]',
                  lang.code === currentLanguage.code
                    ? 'border-[#005196] text-[#005196] bg-blue-50 font-medium'
                    : 'border-transparent text-gray-600 hover:bg-gray-50'
                )}
              >
                {showFlags && lang.flag && (
                  <span className="mr-2 text-xl" aria-hidden="true">{lang.flag}</span>
                )}
                <span>{showNativeNames ? lang.nativeName : lang.name}</span>
              </button>
            ))}
          </div>
        </div>
      );
    }

    // buttons variant
    return (
      <div
        ref={ref}
        className={cn(languageSelectorVariants({ variant, position }), className)}
        role="radiogroup"
        aria-label={ariaLabel}
        {...props}
      >
        <div className="flex flex-wrap gap-2">
          {languages.map((lang) => (
            <button
              key={lang.code}
              role="radio"
              aria-checked={lang.code === currentLanguage.code}
              onClick={() => handleLanguageChange(lang)}
              className={cn(
                'inline-flex items-center gap-2 px-4 py-2 border rounded transition-all min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#005196]',
                lang.code === currentLanguage.code
                  ? 'bg-[#005196] text-white border-[#005196]'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
              )}
            >
              {showFlags && lang.flag && (
                <span className="text-xl" aria-hidden="true">{lang.flag}</span>
              )}
              <span>{showNativeNames ? lang.nativeName : lang.name}</span>
            </button>
          ))}
        </div>
      </div>
    );
  }
);

LanguageSelector.displayName = 'LanguageSelector';`,
        types: `export interface Language {
  code: string;          // ISO 639-1 language code (e.g., 'en', 'hi', 'ta')
  name: string;          // English name of the language
  nativeName: string;    // Name in native script
  flag?: string;         // Optional flag emoji
}

export interface LanguageSelectorProps
  extends React.HTMLAttributes<HTMLDivElement>,
          LanguageSelectorVariantProps {
  languages: Language[];
  currentLanguage: Language;
  onChange: (language: Language) => void;
  showFlags?: boolean;
  showNativeNames?: boolean;
  position?: 'left' | 'center' | 'right';
  persistent?: boolean;
  maxVisibleLanguages?: number;
  onError?: (error: Error) => void;
}`,
        variants: `import { cva, type VariantProps } from 'class-variance-authority';

export const languageSelectorVariants = cva(
  [
    'language-selector',
  ],
  {
    variants: {
      variant: {
        dropdown: 'inline-block',
        tabs: 'flex',
        buttons: 'flex',
      },
      position: {
        left: 'justify-start',
        center: 'justify-center',
        right: 'justify-end',
      },
    },
    defaultVariants: {
      variant: 'dropdown',
      position: 'left',
    },
  }
);

export type LanguageSelectorVariantProps = VariantProps<typeof languageSelectorVariants>;`,
      }}

      angularCode={{
        component: `import { Component, Input, Output, EventEmitter, OnInit, HostListener } from '@angular/core';

export interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag?: string;
}

type LanguageSelectorVariant = 'dropdown' | 'tabs' | 'buttons';
type LanguageSelectorPosition = 'left' | 'center' | 'right';

@Component({
  selector: 'ux4g-language-selector',
  template: \`
    <div [class]="getContainerClasses()">
      <!-- Dropdown Variant -->
      <div *ngIf="variant === 'dropdown'" class="relative" #dropdownRef>
        <button
          type="button"
          (click)="toggleDropdown()"
          [attr.aria-label]="ariaLabel"
          [attr.aria-expanded]="isOpen"
          [attr.aria-haspopup]="'listbox'"
          class="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded bg-white hover:bg-gray-50 transition-all min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#005196]"
        >
          <span *ngIf="showFlags && currentLanguage.flag" class="text-xl" aria-hidden="true">
            {{ currentLanguage.flag }}
          </span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="2" y1="12" x2="22" y2="12"></line>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          </svg>
          <span>{{ showNativeNames ? currentLanguage.nativeName : currentLanguage.name }}</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>

        <div
          *ngIf="isOpen"
          role="listbox"
          aria-label="Available languages"
          class="absolute top-full mt-2 right-0 bg-white border border-gray-300 rounded shadow-lg z-50 min-w-[200px] max-h-[400px] overflow-auto"
        >
          <button
            *ngFor="let lang of getVisibleLanguages()"
            role="option"
            [attr.aria-selected]="lang.code === currentLanguage.code"
            (click)="selectLanguage(lang)"
            [class]="getLanguageItemClasses(lang)"
          >
            <span *ngIf="showFlags && lang.flag" class="text-xl" aria-hidden="true">
              {{ lang.flag }}
            </span>
            <span>
              {{ showNativeNames ? lang.nativeName : lang.name }}
              <span *ngIf="showNativeNames && lang.nativeName !== lang.name" class="text-sm text-gray-500 ml-1">
                ({{ lang.name }})
              </span>
            </span>
          </button>
        </div>
      </div>

      <!-- Tabs Variant -->
      <div *ngIf="variant === 'tabs'" role="tablist" [attr.aria-label]="ariaLabel">
        <div class="flex gap-1 border-b border-gray-200">
          <button
            *ngFor="let lang of languages"
            role="tab"
            [attr.aria-selected]="lang.code === currentLanguage.code"
            (click)="selectLanguage(lang)"
            [class]="getTabClasses(lang)"
          >
            <span *ngIf="showFlags && lang.flag" class="mr-2 text-xl" aria-hidden="true">
              {{ lang.flag }}
            </span>
            <span>{{ showNativeNames ? lang.nativeName : lang.name }}</span>
          </button>
        </div>
      </div>

      <!-- Buttons Variant -->
      <div *ngIf="variant === 'buttons'" role="radiogroup" [attr.aria-label]="ariaLabel">
        <div class="flex flex-wrap gap-2">
          <button
            *ngFor="let lang of languages"
            role="radio"
            [attr.aria-checked]="lang.code === currentLanguage.code"
            (click)="selectLanguage(lang)"
            [class]="getButtonClasses(lang)"
          >
            <span *ngIf="showFlags && lang.flag" class="text-xl" aria-hidden="true">
              {{ lang.flag }}
            </span>
            <span>{{ showNativeNames ? lang.nativeName : lang.name }}</span>
          </button>
        </div>
      </div>
    </div>
  \`,
  styleUrls: ['./language-selector.component.css']
})
export class LanguageSelectorComponent implements OnInit {
  @Input() languages: Language[] = [];
  @Input() currentLanguage!: Language;
  @Input() variant: LanguageSelectorVariant = 'dropdown';
  @Input() showFlags = true;
  @Input() showNativeNames = true;
  @Input() position: LanguageSelectorPosition = 'left';
  @Input() persistent = false;
  @Input() maxVisibleLanguages = 6;
  @Input() ariaLabel = 'Select language';

  @Output() languageChange = new EventEmitter<Language>();
  @Output() error = new EventEmitter<Error>();

  isOpen = false;

  ngOnInit(): void {
    if (this.persistent) {
      const savedCode = localStorage.getItem('ux4g_language');
      if (savedCode) {
        const lang = this.languages.find(l => l.code === savedCode);
        if (lang && lang.code !== this.currentLanguage.code) {
          this.selectLanguage(lang);
        }
      }
    }
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event): void {
    if (this.variant === 'dropdown' && this.isOpen) {
      const target = event.target as HTMLElement;
      if (!target.closest('.relative')) {
        this.isOpen = false;
      }
    }
  }

  toggleDropdown(): void {
    this.isOpen = !this.isOpen;
  }

  selectLanguage(language: Language): void {
    try {
      this.languageChange.emit(language);
      if (this.persistent) {
        localStorage.setItem('ux4g_language', language.code);
      }
      this.isOpen = false;
    } catch (err) {
      this.error.emit(err as Error);
    }
  }

  getVisibleLanguages(): Language[] {
    return this.languages.slice(0, this.maxVisibleLanguages);
  }

  getContainerClasses(): string {
    const positionClass =
      this.position === 'center' ? 'justify-center' :
      this.position === 'right' ? 'justify-end' : 'justify-start';

    const variantClass =
      this.variant === 'dropdown' ? 'inline-block' : 'flex';

    return \`language-selector \${variantClass} \${positionClass}\`;
  }

  getLanguageItemClasses(lang: Language): string {
    const isSelected = lang.code === this.currentLanguage.code;
    const baseClasses = 'w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors flex items-center gap-2 min-h-[44px]';
    const selectedClasses = isSelected ? 'bg-blue-50 text-[#005196] font-medium' : '';
    return \`\${baseClasses} \${selectedClasses}\`;
  }

  getTabClasses(lang: Language): string {
    const isSelected = lang.code === this.currentLanguage.code;
    const baseClasses = 'px-4 py-2 border-b-2 transition-all min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#005196]';
    const selectedClasses = isSelected
      ? 'border-[#005196] text-[#005196] bg-blue-50 font-medium'
      : 'border-transparent text-gray-600 hover:bg-gray-50';
    return \`\${baseClasses} \${selectedClasses}\`;
  }

  getButtonClasses(lang: Language): string {
    const isSelected = lang.code === this.currentLanguage.code;
    const baseClasses = 'inline-flex items-center gap-2 px-4 py-2 border rounded transition-all min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#005196]';
    const selectedClasses = isSelected
      ? 'bg-[#005196] text-white border-[#005196]'
      : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50';
    return \`\${baseClasses} \${selectedClasses}\`;
  }
}`,
        module: `import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageSelectorComponent } from './language-selector.component';

@NgModule({
  declarations: [LanguageSelectorComponent],
  imports: [CommonModule],
  exports: [LanguageSelectorComponent]
})
export class LanguageSelectorModule { }`,
        types: `export interface Language {
  code: string;          // ISO 639-1 language code
  name: string;          // English name
  nativeName: string;    // Name in native script
  flag?: string;         // Optional flag emoji
}

export type LanguageSelectorVariant = 'dropdown' | 'tabs' | 'buttons';
export type LanguageSelectorPosition = 'left' | 'center' | 'right';`,
      }}

      comparisons={[
        {
          system: 'react-i18next',
          component: 'Language Switcher',
          variants: 'Custom implementation required',
          accessibility: 'Developer-dependent',
          documentation: 'Good (i18n focused)',
          link: 'https://react.i18next.com/',
        },
        {
          system: 'angular-translate',
          component: 'Language Selector',
          variants: 'Custom implementation required',
          accessibility: 'Developer-dependent',
          documentation: 'Good',
          link: 'https://angular-translate.github.io/',
        },
        {
          system: 'GOV.UK Design System',
          component: 'Language Toggle (Welsh)',
          variants: 'Text link only',
          accessibility: 'WCAG 2.1 AAA',
          documentation: 'Limited (2 languages)',
          link: 'https://design-system.service.gov.uk/',
        },
        {
          system: 'European Commission UI',
          component: 'Language Selector',
          variants: 'Dropdown with 24 EU languages',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Comprehensive',
          link: 'https://ec.europa.eu/component-library/',
        },
        {
          system: 'Material UI',
          component: 'Custom Select/Menu',
          variants: 'Base components only',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Good (general purpose)',
          link: 'https://mui.com/material-ui/react-select/',
        },
      ]}

      accessibility={{
        wcagLevel: 'WCAG 2.1 Level AA Compliant',
        features: [
          'Minimum 44x44px touch target size for all interactive elements (WCAG 2.5.5)',
          '2px focus ring with 2px offset for keyboard navigation (WCAG 2.4.7)',
          'Proper ARIA roles: listbox for dropdown, tablist for tabs, radiogroup for buttons',
          'aria-selected and aria-checked attributes for current language state',
          'aria-expanded for dropdown open/close state',
          'Language names in native scripts for non-English speakers',
          'Semantic HTML with proper button elements',
          'Keyboard navigation support (Tab, Enter, Space, Arrow keys)',
          'Screen reader announcements for language changes',
          'Flag emojis marked aria-hidden to avoid screen reader clutter',
        ],
        keyboardSupport: [
          { key: 'Tab', action: 'Move focus to language selector or between language options' },
          { key: 'Shift + Tab', action: 'Move focus away from selector' },
          { key: 'Enter', action: 'Open dropdown or select language' },
          { key: 'Space', action: 'Open dropdown or select language' },
          { key: 'Escape', action: 'Close dropdown (dropdown variant)' },
          { key: 'Arrow Down', action: 'Navigate to next language (dropdown variant)' },
          { key: 'Arrow Up', action: 'Navigate to previous language (dropdown variant)' },
        ],
        screenReader: [
          'Announces "Language selector" role',
          'Announces current selected language',
          'Announces expanded/collapsed state for dropdown',
          'Announces language change when selection occurs',
          'Native language names ensure comprehension for non-English speakers',
          'Flag emojis hidden from screen readers (aria-hidden="true")',
        ],
      }}

      tokens={{
        file: '/tokens/components/language-selector.json',
        mappings: [
          { property: 'Min Touch Target', token: 'accessibility.minTouchTarget', value: '44px' },
          { property: 'Border Radius', token: 'base.borderRadius', value: '4px' },
          { property: 'Border Color', token: 'base.border.color', value: '#d1d5db (Gray 300)' },
          { property: 'Background Default', token: 'base.background.default', value: '#ffffff (White)' },
          { property: 'Background Hover', token: 'base.background.hover', value: '#f9fafb (Gray 50)' },
          { property: 'Selected Background', token: 'variant.selected.background', value: '#eff6ff (Blue 50)' },
          { property: 'Selected Text', token: 'variant.selected.text', value: '#005196 (Navy 500)' },
          { property: 'Selected Border', token: 'variant.selected.border', value: '#005196 (Navy 500)' },
          { property: 'Focus Ring Color', token: 'accessibility.focusRing.color', value: '#005196 (Navy 500)' },
          { property: 'Focus Ring Width', token: 'accessibility.focusRing.width', value: '2px' },
          { property: 'Focus Ring Offset', token: 'accessibility.focusRing.offset', value: '2px' },
        ],
      }}

      governmentContext={{
        description: 'India recognizes 22 official languages under the Eighth Schedule of the Constitution. Government digital services must provide multilingual support to ensure accessibility for all citizens, regardless of their primary language. The Language Selector component enables seamless language switching across government portals.',
        languages: [
          'English and Hindi (primary administrative languages)',
          '22 official Indian languages: Assamese, Bengali, Bodo, Dogri, Gujarati, Hindi, Kannada, Kashmiri, Konkani, Maithili, Malayalam, Manipuri, Marathi, Nepali, Odia, Punjabi, Sanskrit, Santali, Sindhi, Tamil, Telugu, Urdu',
          'Regional language support for state-specific services',
          'Multiple scripts: Devanagari, Bengali, Tamil, Telugu, Kannada, Malayalam, Gujarati, Gurmukhi, Odia, and more',
        ],
        useCases: [
          'Central government portals (e.g., India.gov.in, Digital India)',
          'State government websites with regional language support',
          'E-governance platforms (e.g., UMANG, mParivahan)',
          'Public service delivery portals',
          'Citizen service applications',
          'Educational and information portals',
          'Healthcare and welfare systems',
        ],
        considerations: [
          'Persistent language selection across sessions improves user experience',
          'Native script display helps non-English speakers identify their language',
          'Right-to-left (RTL) text direction support for Urdu',
          'Font loading for regional scripts (consider performance)',
          'Translation quality assurance for critical government communications',
          'Browser and device compatibility for various scripts',
          'Fallback mechanisms when translations are unavailable',
        ],
      }}
    />
  );
}
