import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  forwardRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ComponentSize } from '../../types/common.types';
import { classNames } from '../../utils/class-names';

/**
 * Search suggestion interface
 */
export interface SearchSuggestion {
  value: string;
  label: string;
}

/**
 * UX4G Search Bar Component
 *
 * A search input with icon, clear button, and optional suggestions.
 * Integrates with Angular Forms.
 * Follows WCAG 2.1 Level AA accessibility standards.
 *
 * @example
 * <ux4g-search-bar
 *   placeholder="Search government services..."
 *   (search)="handleSearch($event)"
 * ></ux4g-search-bar>
 *
 * @example
 * <ux4g-search-bar
 *   [(ngModel)]="searchQuery"
 *   [suggestions]="searchSuggestions"
 *   placeholder="Search agencies..."
 *   (suggestionSelected)="handleSuggestion($event)"
 * ></ux4g-search-bar>
 */
@Component({
  selector: 'ux4g-search-bar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div [class]="wrapperClasses" [attr.data-testid]="testId">
      <div class="ux4g-search-bar__input-wrapper">
        <span class="ux4g-search-bar__icon" aria-hidden="true">🔍</span>

        <input
          type="search"
          [id]="inputId"
          [name]="name"
          [value]="value"
          [disabled]="disabled"
          [readonly]="readonly"
          [placeholder]="placeholder"
          [attr.aria-label]="ariaLabel || 'Search'"
          [attr.aria-describedby]="helperId"
          [attr.aria-autocomplete]="suggestions.length > 0 ? 'list' : null"
          [attr.aria-controls]="suggestions.length > 0 ? suggestionsId : null"
          [attr.aria-expanded]="showSuggestions"
          [class]="inputClasses"
          (input)="onInputChange($event)"
          (keydown.enter)="onEnterKey($event)"
          (focus)="onFocus()"
          (blur)="onBlur()"
          (keydown)="onKeyDown($event)"
        />

        @if (value) {
          <button
            type="button"
            class="ux4g-search-bar__clear-btn"
            [attr.aria-label]="'Clear search'"
            (click)="clearSearch()"
          >
            ✕
          </button>
        }

        @if (showSuggestions && suggestions.length > 0) {
          <ul
            [id]="suggestionsId"
            class="ux4g-search-bar__suggestions"
            role="listbox"
            [attr.aria-label]="'Search suggestions'"
          >
            @for (suggestion of suggestions; track suggestion.value) {
              <li
                [class]="getSuggestionClasses(suggestion)"
                role="option"
                [attr.aria-selected]="isHighlighted(suggestion)"
                (mousedown)="onSuggestionClick(suggestion)"
                (mouseenter)="onSuggestionHover(suggestion)"
              >
                {{ suggestion.label }}
              </li>
            }
          </ul>
        }
      </div>

      @if (helperText) {
        <div class="ux4g-search-bar__helper-text" [id]="helperId">
          {{ helperText }}
        </div>
      }
    </div>
  `,
  styleUrls: ['./search-bar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SearchBarComponent),
      multi: true,
    },
  ],
})
export class SearchBarComponent implements ControlValueAccessor {
  /**
   * Search bar size
   * @default 'md'
   */
  @Input() size: ComponentSize = 'md';

  /**
   * Placeholder text
   */
  @Input() placeholder: string = 'Search...';

  /**
   * Helper text displayed below the search bar
   */
  @Input() helperText?: string;

  /**
   * Input ID - auto-generated if not provided
   */
  @Input() id?: string;

  /**
   * Input name attribute
   */
  @Input() name?: string;

  /**
   * Search suggestions
   */
  @Input() suggestions: SearchSuggestion[] = [];

  /**
   * Whether the input is disabled
   * @default false
   */
  @Input() disabled: boolean = false;

  /**
   * Whether the input is read-only
   * @default false
   */
  @Input() readonly: boolean = false;

  /**
   * Additional CSS classes
   */
  @Input() className?: string;

  /**
   * ARIA label for accessibility
   */
  @Input() ariaLabel?: string;

  /**
   * Test identifier
   */
  @Input() testId?: string;

  /**
   * Search event emitter (emitted on Enter key or suggestion selection)
   */
  @Output() search = new EventEmitter<string>();

  /**
   * Value change event emitter
   */
  @Output() valueChange = new EventEmitter<string>();

  /**
   * Suggestion selected event
   */
  @Output() suggestionSelected = new EventEmitter<SearchSuggestion>();

  /**
   * Clear event emitter
   */
  @Output() cleared = new EventEmitter<void>();

  /**
   * Internal value
   */
  value: string = '';

  /**
   * Whether to show suggestions
   */
  showSuggestions: boolean = false;

  /**
   * Highlighted suggestion index
   */
  highlightedIndex: number = -1;

  /**
   * Auto-generated unique ID
   */
  private static nextId = 0;
  private generatedId = 'ux4g-search-bar-' + SearchBarComponent.nextId++;

  /**
   * ControlValueAccessor callbacks
   */
  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};

  /**
   * Get input ID
   */
  get inputId(): string {
    return this.id || this.generatedId;
  }

  /**
   * Get suggestions list ID
   */
  get suggestionsId(): string {
    return this.inputId + '-suggestions';
  }

  /**
   * Get helper text ID
   */
  get helperId(): string {
    return this.inputId + '-helper';
  }

  /**
   * Computed wrapper classes
   */
  get wrapperClasses(): string {
    return classNames(
      'ux4g-search-bar-wrapper',
      this.disabled && 'ux4g-search-bar-wrapper--disabled',
      this.className
    );
  }

  /**
   * Computed input classes
   */
  get inputClasses(): string {
    return classNames(
      'ux4g-search-bar',
      `ux4g-search-bar--${this.size}`,
      this.disabled && 'ux4g-search-bar--disabled',
      this.readonly && 'ux4g-search-bar--readonly'
    );
  }

  /**
   * Get suggestion classes
   */
  getSuggestionClasses(suggestion: SearchSuggestion): string {
    return classNames(
      'ux4g-search-bar__suggestion',
      this.isHighlighted(suggestion) && 'ux4g-search-bar__suggestion--highlighted'
    );
  }

  /**
   * Check if suggestion is highlighted
   */
  isHighlighted(suggestion: SearchSuggestion): boolean {
    if (this.highlightedIndex < 0 || this.highlightedIndex >= this.suggestions.length) {
      return false;
    }
    return this.suggestions[this.highlightedIndex] === suggestion;
  }

  /**
   * Handle input change
   */
  onInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
    this.onChange(this.value);
    this.valueChange.emit(this.value);

    if (this.suggestions.length > 0 && this.value) {
      this.showSuggestions = true;
      this.highlightedIndex = 0;
    } else {
      this.showSuggestions = false;
    }
  }

  /**
   * Handle Enter key
   */
  onEnterKey(event: Event): void {
    event.preventDefault();

    // If a suggestion is highlighted, select it
    if (
      this.showSuggestions &&
      this.highlightedIndex >= 0 &&
      this.highlightedIndex < this.suggestions.length
    ) {
      const suggestion = this.suggestions[this.highlightedIndex];
      this.selectSuggestion(suggestion);
    } else {
      // Otherwise, perform search with current value
      this.performSearch();
    }
  }

  /**
   * Handle keyboard navigation
   */
  onKeyDown(event: KeyboardEvent): void {
    if (!this.showSuggestions || this.suggestions.length === 0) return;

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        this.highlightedIndex = Math.min(
          this.highlightedIndex + 1,
          this.suggestions.length - 1
        );
        break;

      case 'ArrowUp':
        event.preventDefault();
        this.highlightedIndex = Math.max(this.highlightedIndex - 1, 0);
        break;

      case 'Escape':
        event.preventDefault();
        this.showSuggestions = false;
        this.highlightedIndex = -1;
        break;
    }
  }

  /**
   * Handle focus
   */
  onFocus(): void {
    if (this.suggestions.length > 0 && this.value) {
      this.showSuggestions = true;
    }
  }

  /**
   * Handle blur
   */
  onBlur(): void {
    // Delay to allow suggestion click to register
    setTimeout(() => {
      this.showSuggestions = false;
      this.onTouched();
    }, 200);
  }

  /**
   * Handle suggestion click
   */
  onSuggestionClick(suggestion: SearchSuggestion): void {
    this.selectSuggestion(suggestion);
  }

  /**
   * Handle suggestion hover
   */
  onSuggestionHover(suggestion: SearchSuggestion): void {
    this.highlightedIndex = this.suggestions.indexOf(suggestion);
  }

  /**
   * Select a suggestion
   */
  private selectSuggestion(suggestion: SearchSuggestion): void {
    this.value = suggestion.value;
    this.onChange(this.value);
    this.valueChange.emit(this.value);
    this.suggestionSelected.emit(suggestion);
    this.showSuggestions = false;
    this.performSearch();
  }

  /**
   * Perform search
   */
  private performSearch(): void {
    if (this.value) {
      this.search.emit(this.value);
    }
  }

  /**
   * Clear search
   */
  clearSearch(): void {
    this.value = '';
    this.onChange(this.value);
    this.valueChange.emit(this.value);
    this.cleared.emit();
    this.showSuggestions = false;
  }

  /**
   * ControlValueAccessor: Write value
   */
  writeValue(value: string): void {
    this.value = value || '';
  }

  /**
   * ControlValueAccessor: Register onChange callback
   */
  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  /**
   * ControlValueAccessor: Register onTouched callback
   */
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  /**
   * ControlValueAccessor: Set disabled state
   */
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
