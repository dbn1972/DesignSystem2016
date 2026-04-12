import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewEncapsulation, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @component LanguageSelector
 * @description Multi-language switcher for Indian languages
 *
 * @example
 * // Header Language Selector
 * <ux4g-language-selector
 *   [languages]="[
 *     { code: 'en', name: 'English', nativeName: 'English' },
 *     { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी' },
 *     { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்' }
 *   ]"
 *   [selectedLanguage]="currentLanguage"
 *   variant="dropdown"
 *   (languageChange)="changeLanguage($event)"
 * ></ux4g-language-selector>
 *
 * @example
 * // Government Portal Language Tabs
 * <ux4g-language-selector
 *   [languages]="indianLanguages"
 *   variant="tabs"
 *   [showFlags]="false"
 *   (languageChange)="switchLanguage($event)"
 * ></ux4g-language-selector>
 *
 * @example
 * // Aadhaar Portal Language Buttons
 * <ux4g-language-selector
 *   variant="buttons"
 *   (languageChange)="updateLanguage($event)"
 * ></ux4g-language-selector>
 */
export interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag?: string;
}

@Component({
  selector: 'ux4g-language-selector',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `
    <div
      class="ux4g-language-selector"
      [class.ux4g-language-selector--dropdown]="variant === 'dropdown'"
      [class.ux4g-language-selector--tabs]="variant === 'tabs'"
      [class.ux4g-language-selector--buttons]="variant === 'buttons'"
      role="group"
      aria-label="Language selector"
    >
      @if (variant === 'dropdown') {
        <div class="ux4g-language-selector__dropdown">
          <button
            class="ux4g-language-selector__dropdown-button"
            (click)="toggleDropdown()"
            [attr.aria-expanded]="isDropdownOpen"
            aria-haspopup="listbox"
            aria-label="Select language"
          >
            @if (showFlags && getCurrentLanguage()?.flag) {
              <span class="ux4g-language-selector__flag">{{ getCurrentLanguage()?.flag }}</span>
            }
            <span class="ux4g-language-selector__label">
              {{ getCurrentLanguage()?.nativeName || getCurrentLanguage()?.name }}
            </span>
            <span class="ux4g-language-selector__arrow">▼</span>
          </button>

          @if (isDropdownOpen) {
            <div
              class="ux4g-language-selector__dropdown-menu"
              role="listbox"
              [attr.aria-label]="'Language options'"
            >
              @for (lang of languages; track lang.code) {
                <button
                  class="ux4g-language-selector__dropdown-item"
                  [class.ux4g-language-selector__dropdown-item--active]="lang.code === selectedLanguage"
                  (click)="selectLanguage(lang.code)"
                  role="option"
                  [attr.aria-selected]="lang.code === selectedLanguage"
                >
                  @if (showFlags && lang.flag) {
                    <span class="ux4g-language-selector__flag">{{ lang.flag }}</span>
                  }
                  <span>{{ lang.nativeName }}</span>
                </button>
              }
            </div>
          }
        </div>
      }

      @if (variant === 'tabs') {
        <div class="ux4g-language-selector__tabs" role="tablist">
          @for (lang of languages; track lang.code) {
            <button
              class="ux4g-language-selector__tab"
              [class.ux4g-language-selector__tab--active]="lang.code === selectedLanguage"
              (click)="selectLanguage(lang.code)"
              role="tab"
              [attr.aria-selected]="lang.code === selectedLanguage"
              [attr.aria-label]="'Switch to ' + lang.name"
            >
              @if (showFlags && lang.flag) {
                <span class="ux4g-language-selector__flag">{{ lang.flag }}</span>
              }
              <span>{{ lang.nativeName }}</span>
            </button>
          }
        </div>
      }

      @if (variant === 'buttons') {
        <div class="ux4g-language-selector__buttons" role="radiogroup" aria-label="Select language">
          @for (lang of languages; track lang.code) {
            <button
              class="ux4g-language-selector__button"
              [class.ux4g-language-selector__button--active]="lang.code === selectedLanguage"
              (click)="selectLanguage(lang.code)"
              role="radio"
              [attr.aria-checked]="lang.code === selectedLanguage"
              [attr.aria-label]="lang.name"
            >
              @if (showFlags && lang.flag) {
                <span class="ux4g-language-selector__flag">{{ lang.flag }}</span>
              }
              <span class="ux4g-language-selector__button-text">
                {{ lang.nativeName }}
              </span>
            </button>
          }
        </div>
      }
    </div>
  `,
  styleUrls: ['./language-selector.component.css']
})
export class LanguageSelectorComponent implements OnInit {
  @Input() languages: Language[] = this.getDefaultLanguages();
  @Input() selectedLanguage: string = 'en';
  @Input() variant: 'dropdown' | 'tabs' | 'buttons' = 'dropdown';
  @Input() showFlags: boolean = false;

  @Output() languageChange = new EventEmitter<string>();

  isDropdownOpen = false;

  ngOnInit(): void {
    // Load saved language from localStorage
    const savedLanguage = localStorage.getItem('ux4g-language');
    if (savedLanguage && this.languages.some(lang => lang.code === savedLanguage)) {
      this.selectedLanguage = savedLanguage;
    }
  }

  selectLanguage(code: string): void {
    this.selectedLanguage = code;
    this.isDropdownOpen = false;
    localStorage.setItem('ux4g-language', code);
    this.languageChange.emit(code);
  }

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  getCurrentLanguage(): Language | undefined {
    return this.languages.find(lang => lang.code === this.selectedLanguage);
  }

  private getDefaultLanguages(): Language[] {
    return [
      { code: 'en', name: 'English', nativeName: 'English', flag: '🇮🇳' },
      { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳' },
      { code: 'bn', name: 'Bengali', nativeName: 'বাংলা', flag: '🇮🇳' },
      { code: 'te', name: 'Telugu', nativeName: 'తెలుగు', flag: '🇮🇳' },
      { code: 'mr', name: 'Marathi', nativeName: 'मराठी', flag: '🇮🇳' },
      { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்', flag: '🇮🇳' },
      { code: 'ur', name: 'Urdu', nativeName: 'اردو', flag: '🇮🇳' },
      { code: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી', flag: '🇮🇳' },
      { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ', flag: '🇮🇳' },
      { code: 'or', name: 'Odia', nativeName: 'ଓଡିଆ', flag: '🇮🇳' },
      { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം', flag: '🇮🇳' },
      { code: 'pa', name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ', flag: '🇮🇳' }
    ];
  }
}
