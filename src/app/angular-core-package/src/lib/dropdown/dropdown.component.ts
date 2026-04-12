import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewEncapsulation, HostListener, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Dropdown item interface
 */
export interface DropdownItem {
  label: string;
  value: string;
  icon?: string;
  disabled?: boolean;
  divider?: boolean;
  href?: string;
  action?: () => void;
}

/**
 * Dropdown Component
 *
 * Accessible dropdown menu with keyboard navigation, auto-positioning, and flexible triggers.
 * Designed for government and enterprise applications with full ARIA support.
 *
 * @example
 * <ux4g-dropdown
 *   [items]="dropdownItems"
 *   trigger="click"
 *   position="bottom"
 *   (itemSelected)="handleSelection($event)">
 *   <button trigger>Actions ▼</button>
 * </ux4g-dropdown>
 *
 * @example Government Portal Use Case
 * <ux4g-dropdown
 *   [items]="[
 *     { label: 'View Details', value: 'view', icon: '👁️' },
 *     { label: 'Edit', value: 'edit', icon: '✏️' },
 *     { divider: true },
 *     { label: 'Delete', value: 'delete', icon: '🗑️', disabled: false }
 *   ]"
 *   trigger="click"
 *   [closeOnSelect]="true"
 *   (itemSelected)="handleAction($event)">
 *   <button trigger>Manage Application</button>
 * </ux4g-dropdown>
 */
@Component({
  selector: 'ux4g-dropdown',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="ux4g-dropdown"
      [class.ux4g-dropdown--disabled]="disabled"
      [class.ux4g-dropdown--open]="isOpen">

      <!-- Trigger Button -->
      <button
        class="ux4g-dropdown__trigger"
        (click)="toggle()"
        (keydown)="onTriggerKeyDown($event)"
        [attr.aria-expanded]="isOpen"
        [attr.aria-haspopup]="true"
        [attr.aria-label]="ariaLabel"
        [disabled]="disabled"
        type="button">
        <ng-content select="[trigger]"></ng-content>
        @if (!hasCustomTrigger) {
          <span class="ux4g-dropdown__default-trigger">
            Select
            <span class="ux4g-dropdown__arrow" aria-hidden="true">▼</span>
          </span>
        }
      </button>

      <!-- Dropdown Menu -->
      @if (isOpen) {
        <ul
          class="ux4g-dropdown__menu"
          [class.ux4g-dropdown__menu--top]="position === 'top'"
          [class.ux4g-dropdown__menu--bottom]="position === 'bottom'"
          [class.ux4g-dropdown__menu--left]="position === 'left'"
          [class.ux4g-dropdown__menu--right]="position === 'right'"
          role="menu"
          [attr.aria-label]="menuAriaLabel">
          @for (item of items; track item.value; let i = $index) {
            <li
              [class.ux4g-dropdown__item]="!item.divider"
              [class.ux4g-dropdown__divider]="item.divider"
              [class.ux4g-dropdown__item--disabled]="item.disabled"
              [class.ux4g-dropdown__item--focused]="focusedIndex === i"
              role="none">
              @if (item.divider) {
                <hr class="ux4g-dropdown__divider-line" />
              } @else {
                @if (item.href) {
                  <a
                    [href]="item.href"
                    class="ux4g-dropdown__link"
                    (click)="selectItem(item, $event)"
                    (keydown)="onItemKeyDown($event, i)"
                    [attr.tabindex]="isOpen ? 0 : -1"
                    role="menuitem">
                    @if (item.icon) {
                      <span class="ux4g-dropdown__icon" aria-hidden="true">{{ item.icon }}</span>
                    }
                    {{ item.label }}
                  </a>
                } @else {
                  <button
                    class="ux4g-dropdown__link"
                    (click)="selectItem(item, $event)"
                    (keydown)="onItemKeyDown($event, i)"
                    [disabled]="item.disabled"
                    [attr.tabindex]="isOpen && !item.disabled ? 0 : -1"
                    role="menuitem"
                    type="button">
                    @if (item.icon) {
                      <span class="ux4g-dropdown__icon" aria-hidden="true">{{ item.icon }}</span>
                    }
                    {{ item.label }}
                  </button>
                }
              }
            </li>
          }
        </ul>
      }
    </div>
  `,
  styleUrls: ['./dropdown.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class DropdownComponent implements OnDestroy {
  /** Dropdown items */
  @Input() items: DropdownItem[] = [];

  /** Trigger type */
  @Input() trigger: 'click' | 'hover' = 'click';

  /** Menu position */
  @Input() position: 'top' | 'bottom' | 'left' | 'right' = 'bottom';

  /** Disabled state */
  @Input() disabled: boolean = false;

  /** Close menu on item selection */
  @Input() closeOnSelect: boolean = true;

  /** ARIA label for trigger */
  @Input() ariaLabel: string = 'Open menu';

  /** ARIA label for menu */
  @Input() menuAriaLabel: string = 'Menu options';

  /** Whether custom trigger content is provided */
  @Input() hasCustomTrigger: boolean = true;

  /** Item selected event */
  @Output() itemSelected = new EventEmitter<DropdownItem>();

  /** Menu opened event */
  @Output() opened = new EventEmitter<void>();

  /** Menu closed event */
  @Output() closed = new EventEmitter<void>();

  /** Dropdown open state */
  isOpen: boolean = false;

  /** Currently focused item index */
  focusedIndex: number = -1;

  /** Hover timeout for hover trigger */
  private hoverTimeout?: ReturnType<typeof setTimeout>;

  ngOnDestroy(): void {
    if (this.hoverTimeout) {
      clearTimeout(this.hoverTimeout);
    }
  }

  /**
   * Toggle dropdown menu
   */
  toggle(): void {
    if (!this.disabled) {
      this.isOpen ? this.close() : this.open();
    }
  }

  /**
   * Open dropdown menu
   */
  open(): void {
    if (!this.disabled && !this.isOpen) {
      this.isOpen = true;
      this.focusedIndex = -1;
      this.opened.emit();
    }
  }

  /**
   * Close dropdown menu
   */
  close(): void {
    if (this.isOpen) {
      this.isOpen = false;
      this.focusedIndex = -1;
      this.closed.emit();
    }
  }

  /**
   * Select dropdown item
   */
  selectItem(item: DropdownItem, event?: Event): void {
    if (item.disabled || item.divider) {
      event?.preventDefault();
      return;
    }

    if (item.action) {
      item.action();
    }

    this.itemSelected.emit(item);

    if (this.closeOnSelect) {
      this.close();
    }
  }

  /**
   * Handle trigger keyboard events
   */
  onTriggerKeyDown(event: KeyboardEvent): void {
    switch (event.key) {
      case 'Enter':
      case ' ':
        event.preventDefault();
        this.toggle();
        break;
      case 'ArrowDown':
        event.preventDefault();
        this.open();
        this.focusNextItem();
        break;
      case 'ArrowUp':
        event.preventDefault();
        this.open();
        this.focusPreviousItem();
        break;
      case 'Escape':
        this.close();
        break;
    }
  }

  /**
   * Handle menu item keyboard events
   */
  onItemKeyDown(event: KeyboardEvent, index: number): void {
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        this.focusNextItem();
        break;
      case 'ArrowUp':
        event.preventDefault();
        this.focusPreviousItem();
        break;
      case 'Enter':
      case ' ':
        event.preventDefault();
        const item = this.items[index];
        if (!item.divider) {
          this.selectItem(item);
        }
        break;
      case 'Escape':
        event.preventDefault();
        this.close();
        break;
      case 'Home':
        event.preventDefault();
        this.focusFirstItem();
        break;
      case 'End':
        event.preventDefault();
        this.focusLastItem();
        break;
    }
  }

  /**
   * Focus next non-disabled item
   */
  private focusNextItem(): void {
    const currentIndex = this.focusedIndex;
    let nextIndex = currentIndex + 1;

    while (nextIndex < this.items.length) {
      const item = this.items[nextIndex];
      if (!item.disabled && !item.divider) {
        this.focusedIndex = nextIndex;
        return;
      }
      nextIndex++;
    }

    // Wrap to first item
    this.focusFirstItem();
  }

  /**
   * Focus previous non-disabled item
   */
  private focusPreviousItem(): void {
    const currentIndex = this.focusedIndex;
    let prevIndex = currentIndex - 1;

    while (prevIndex >= 0) {
      const item = this.items[prevIndex];
      if (!item.disabled && !item.divider) {
        this.focusedIndex = prevIndex;
        return;
      }
      prevIndex--;
    }

    // Wrap to last item
    this.focusLastItem();
  }

  /**
   * Focus first non-disabled item
   */
  private focusFirstItem(): void {
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];
      if (!item.disabled && !item.divider) {
        this.focusedIndex = i;
        return;
      }
    }
  }

  /**
   * Focus last non-disabled item
   */
  private focusLastItem(): void {
    for (let i = this.items.length - 1; i >= 0; i--) {
      const item = this.items[i];
      if (!item.disabled && !item.divider) {
        this.focusedIndex = i;
        return;
      }
    }
  }

  /**
   * Close dropdown when clicking outside
   */
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const dropdown = target.closest('.ux4g-dropdown');

    if (!dropdown && this.isOpen) {
      this.close();
    }
  }

  /**
   * Handle hover events for hover trigger
   */
  @HostListener('mouseenter')
  onMouseEnter(): void {
    if (this.trigger === 'hover' && !this.disabled) {
      if (this.hoverTimeout) {
        clearTimeout(this.hoverTimeout);
      }
      this.open();
    }
  }

  /**
   * Handle mouse leave for hover trigger
   */
  @HostListener('mouseleave')
  onMouseLeave(): void {
    if (this.trigger === 'hover') {
      this.hoverTimeout = setTimeout(() => {
        this.close();
      }, 200);
    }
  }
}
