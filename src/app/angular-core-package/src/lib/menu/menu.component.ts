import {
  Component,
  Input,
  Output,
  EventEmitter,
  HostListener,
  ElementRef,
  ChangeDetectionStrategy,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { classNames } from '../../utils/class-names';

export interface MenuItem {
  label: string;
  value?: any;
  icon?: string;
  disabled?: boolean;
  divider?: boolean;
  destructive?: boolean;
}

export type MenuPosition = 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end';

/**
 * UX4G Menu Component
 *
 * Dropdown menu with keyboard navigation and accessibility support.
 * Displays a list of menu items with optional icons, dividers, and disabled states.
 * Follows WCAG 2.1 Level AA accessibility standards.
 *
 * @example
 * <ux4g-menu
 *   [items]="menuItems"
 *   [isOpen]="showMenu"
 *   (itemClick)="handleItemClick($event)"
 *   (close)="showMenu = false"
 * >
 *   <button>Open Menu</button>
 * </ux4g-menu>
 *
 * @example
 * menuItems = [
 *   { label: 'Edit', icon: '✏️', value: 'edit' },
 *   { label: 'Duplicate', icon: '📋', value: 'duplicate' },
 *   { divider: true },
 *   { label: 'Delete', icon: '🗑️', value: 'delete', destructive: true }
 * ];
 */
@Component({
  selector: 'ux4g-menu',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="wrapperClasses" [attr.data-testid]="testId">
      <div (click)="toggle()" [class]="triggerClasses">
        <ng-content></ng-content>
      </div>

      @if (isOpen) {
        <div
          [class]="menuClasses"
          role="menu"
          [attr.aria-label]="ariaLabel"
          tabindex="-1"
        >
          @for (item of items; track $index) {
            @if (item.divider) {
              <div
                class="ux4g-menu__divider"
                role="separator"
              ></div>
            } @else {
              <button
                type="button"
                [class]="getItemClasses(item)"
                role="menuitem"
                [disabled]="item.disabled"
                [attr.tabindex]="item.disabled ? -1 : 0"
                (click)="handleItemClick(item, $event)"
                (keydown)="handleKeyDown($event, $index)"
              >
                @if (item.icon) {
                  <span class="ux4g-menu__item-icon" aria-hidden="true">{{ item.icon }}</span>
                }
                <span class="ux4g-menu__item-label">{{ item.label }}</span>
              </button>
            }
          }
        </div>
      }
    </div>

    @if (isOpen) {
      <div class="ux4g-menu__backdrop" (click)="close()"></div>
    }
  `,
  styleUrls: ['./menu.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class MenuComponent {
  /**
   * Menu items to display
   */
  @Input() items: MenuItem[] = [];

  /**
   * Whether menu is open
   * @default false
   */
  @Input() isOpen: boolean = false;

  /**
   * Menu position relative to trigger
   * @default 'bottom-start'
   */
  @Input() position: MenuPosition = 'bottom-start';

  /**
   * ARIA label for menu
   */
  @Input() ariaLabel?: string;

  /**
   * Additional CSS classes
   */
  @Input() className?: string;

  /**
   * Test identifier
   */
  @Input() testId?: string;

  /**
   * Emitted when menu item is clicked
   */
  @Output() itemClick = new EventEmitter<MenuItem>();

  /**
   * Emitted when menu should close
   */
  @Output() closeMenu = new EventEmitter<void>();

  private focusedIndex: number = -1;

  constructor(private elementRef: ElementRef) {}

  /**
   * Handle clicks outside menu
   */
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const clickedInside = this.elementRef.nativeElement.contains(event.target);
    if (!clickedInside && this.isOpen) {
      this.close();
    }
  }

  /**
   * Handle escape key
   */
  @HostListener('document:keydown.escape')
  onEscapeKey(): void {
    if (this.isOpen) {
      this.close();
    }
  }

  /**
   * Computed wrapper classes
   */
  get wrapperClasses(): string {
    return classNames(
      'ux4g-menu-wrapper',
      this.isOpen && 'ux4g-menu-wrapper--open',
      this.className
    );
  }

  /**
   * Computed trigger classes
   */
  get triggerClasses(): string {
    return classNames('ux4g-menu__trigger');
  }

  /**
   * Computed menu classes
   */
  get menuClasses(): string {
    return classNames(
      'ux4g-menu',
      'ux4g-menu--' + this.position
    );
  }

  /**
   * Get item classes
   */
  getItemClasses(item: MenuItem): string {
    return classNames(
      'ux4g-menu__item',
      item.disabled && 'ux4g-menu__item--disabled',
      item.destructive && 'ux4g-menu__item--destructive'
    );
  }

  /**
   * Toggle menu open/close
   */
  toggle(): void {
    this.isOpen = !this.isOpen;
    if (!this.isOpen) {
      this.closeMenu.emit();
    }
  }

  /**
   * Close menu
   */
  close(): void {
    this.isOpen = false;
    this.focusedIndex = -1;
    this.closeMenu.emit();
  }

  /**
   * Handle menu item click
   */
  handleItemClick(item: MenuItem, event: MouseEvent): void {
    if (item.disabled) return;

    event.stopPropagation();
    this.itemClick.emit(item);
    this.close();
  }

  /**
   * Handle keyboard navigation
   */
  handleKeyDown(event: KeyboardEvent, index: number): void {
    const menuItems = this.items.filter(item => !item.divider && !item.disabled);
    const currentIndex = menuItems.findIndex((_, i) => {
      const allItemIndex = this.items.indexOf(menuItems[i]);
      return allItemIndex === index;
    });

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        this.focusNextItem(currentIndex, menuItems);
        break;
      case 'ArrowUp':
        event.preventDefault();
        this.focusPreviousItem(currentIndex, menuItems);
        break;
      case 'Home':
        event.preventDefault();
        this.focusItem(0, menuItems);
        break;
      case 'End':
        event.preventDefault();
        this.focusItem(menuItems.length - 1, menuItems);
        break;
      case 'Enter':
      case ' ':
        event.preventDefault();
        const item = this.items[index];
        if (!item.disabled && !item.divider) {
          this.itemClick.emit(item);
          this.close();
        }
        break;
    }
  }

  /**
   * Focus next menu item
   */
  private focusNextItem(currentIndex: number, menuItems: MenuItem[]): void {
    const nextIndex = (currentIndex + 1) % menuItems.length;
    this.focusItem(nextIndex, menuItems);
  }

  /**
   * Focus previous menu item
   */
  private focusPreviousItem(currentIndex: number, menuItems: MenuItem[]): void {
    const previousIndex = currentIndex === 0 ? menuItems.length - 1 : currentIndex - 1;
    this.focusItem(previousIndex, menuItems);
  }

  /**
   * Focus specific menu item
   */
  private focusItem(index: number, menuItems: MenuItem[]): void {
    const item = menuItems[index];
    const allItemIndex = this.items.indexOf(item);
    const buttons = this.elementRef.nativeElement.querySelectorAll('.ux4g-menu__item');
    const buttonIndex = Array.from(this.items)
      .slice(0, allItemIndex)
      .filter(i => !i.divider).length;

    if (buttons[buttonIndex]) {
      (buttons[buttonIndex] as HTMLElement).focus();
      this.focusedIndex = allItemIndex;
    }
  }
}
