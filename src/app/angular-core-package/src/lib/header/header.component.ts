import { Component, Input, ChangeDetectionStrategy, ViewEncapsulation, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Navigation item interface for header menu
 * @example
 * const navItems: NavItem[] = [
 *   { label: 'Home', href: '/', active: true },
 *   { label: 'Services', href: '/services', children: [...] }
 * ];
 */
export interface NavItem {
  label: string;
  href?: string;
  route?: string;
  active?: boolean;
  children?: NavItem[];
  icon?: string;
}

/**
 * Menu item interface for user dropdown
 */
export interface MenuItem {
  label: string;
  href?: string;
  action?: () => void;
  divider?: boolean;
  icon?: string;
}

/**
 * Header Component
 *
 * Page header with responsive navigation, logo, search, and user menu.
 * Designed for government and enterprise applications with full accessibility support.
 *
 * @example
 * <ux4g-header
 *   [logo]="'/assets/logo.png'"
 *   [title]="'U.S. Department of Example'"
 *   [navigation]="navItems"
 *   [userMenuItems]="userMenu"
 *   [sticky]="true"
 *   variant="government">
 * </ux4g-header>
 *
 * @example Government Portal Use Case
 * <ux4g-header
 *   [title]="'Agency Portal'"
 *   [navigation]="[
 *     { label: 'Dashboard', href: '/dashboard', active: true },
 *     { label: 'Applications', href: '/applications' },
 *     { label: 'Resources', href: '/resources' }
 *   ]"
 *   [userMenuItems]="[
 *     { label: 'Profile', href: '/profile', icon: '👤' },
 *     { label: 'Settings', href: '/settings', icon: '⚙️' },
 *     { divider: true },
 *     { label: 'Sign Out', action: signOut, icon: '🚪' }
 *   ]"
 *   [searchEnabled]="true"
 *   variant="government">
 * </ux4g-header>
 */
@Component({
  selector: 'ux4g-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header
      class="ux4g-header"
      [class.ux4g-header--sticky]="sticky"
      [class.ux4g-header--compact]="variant === 'compact'"
      [class.ux4g-header--government]="variant === 'government'"
      role="banner">
      <div class="ux4g-header__container">
        <!-- Logo and Title -->
        <div class="ux4g-header__logo">
          <a href="/" class="ux4g-header__logo-link" [attr.aria-label]="title || 'Home'">
            @if (logo) {
              <img [src]="logo" [alt]="title" class="ux4g-header__logo-image" />
            }
            @if (!logo && title) {
              <span class="ux4g-header__logo-text">{{ title }}</span>
            }
          </a>
        </div>

        <!-- Mobile Menu Toggle -->
        <button
          class="ux4g-header__mobile-toggle"
          (click)="toggleMobileMenu()"
          [attr.aria-expanded]="mobileMenuOpen"
          [attr.aria-label]="mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'"
          type="button">
          <span class="ux4g-header__mobile-toggle-icon" aria-hidden="true">
            <span class="ux4g-header__hamburger-line"></span>
            <span class="ux4g-header__hamburger-line"></span>
            <span class="ux4g-header__hamburger-line"></span>
          </span>
          <span class="sr-only">{{ mobileMenuOpen ? 'Close' : 'Open' }} navigation</span>
        </button>

        <!-- Navigation -->
        <nav
          class="ux4g-header__nav"
          [class.ux4g-header__nav--open]="mobileMenuOpen"
          [attr.aria-label]="'Main navigation'"
          role="navigation">
          <ul class="ux4g-header__nav-list" role="menubar">
            @for (item of navigation; track item.label; let i = $index) {
              <li
                class="ux4g-header__nav-item"
                [class.ux4g-header__nav-item--has-children]="item.children && item.children.length > 0"
                [class.ux4g-header__nav-item--active]="item.active"
                role="none">

                <!-- Navigation Link (no children) -->
                @if (!item.children || item.children.length === 0) {
                  <a
                    [href]="item.href || '#'"
                    class="ux4g-header__nav-link"
                    [class.ux4g-header__nav-link--active]="item.active"
                    [attr.aria-current]="item.active ? 'page' : null"
                    role="menuitem">
                    @if (item.icon) {
                      <span class="ux4g-header__nav-icon" aria-hidden="true">{{ item.icon }}</span>
                    }
                    {{ item.label }}
                  </a>
                }

                <!-- Navigation Dropdown Trigger -->
                @if (item.children && item.children.length > 0) {
                  <button
                    class="ux4g-header__nav-link ux4g-header__nav-link--dropdown"
                    [class.ux4g-header__nav-link--active]="item.active"
                    (click)="toggleDropdown(i)"
                    (keydown)="onKeyDown($event, i)"
                    [attr.aria-expanded]="isDropdownActive(i)"
                    [attr.aria-haspopup]="true"
                    role="menuitem"
                    type="button">
                    @if (item.icon) {
                      <span class="ux4g-header__nav-icon" aria-hidden="true">{{ item.icon }}</span>
                    }
                    {{ item.label }}
                    <span class="ux4g-header__dropdown-arrow" aria-hidden="true">▼</span>
                  </button>

                  <!-- Dropdown Menu -->
                  @if (isDropdownActive(i)) {
                    <ul
                      class="ux4g-header__dropdown"
                      role="menu"
                      [attr.aria-label]="item.label + ' submenu'">
                      @for (child of item.children; track child.label) {
                        <li class="ux4g-header__dropdown-item" role="none">
                          <a
                            [href]="child.href || '#'"
                            class="ux4g-header__dropdown-link"
                            [class.ux4g-header__dropdown-link--active]="child.active"
                            role="menuitem">
                            @if (child.icon) {
                              <span class="ux4g-header__dropdown-icon" aria-hidden="true">{{ child.icon }}</span>
                            }
                            {{ child.label }}
                          </a>
                        </li>
                      }
                    </ul>
                  }
                }
              </li>
            }
          </ul>
        </nav>

        <!-- Search Bar -->
        @if (searchEnabled) {
          <div class="ux4g-header__search">
            <form class="ux4g-header__search-form" role="search" [attr.aria-label]="'Site search'">
              <label for="header-search" class="sr-only">Search</label>
              <input
                type="search"
                id="header-search"
                class="ux4g-header__search-input"
                placeholder="Search..."
                aria-label="Search site" />
              <button
                type="submit"
                class="ux4g-header__search-button"
                aria-label="Submit search">
                <span aria-hidden="true">🔍</span>
              </button>
            </form>
          </div>
        }

        <!-- User Menu -->
        @if (userMenuItems && userMenuItems.length > 0) {
          <div class="ux4g-header__user-menu">
            <button
              class="ux4g-header__user-menu-toggle"
              (click)="toggleUserMenu()"
              (keydown)="onUserMenuKeyDown($event)"
              [attr.aria-expanded]="userMenuOpen"
              [attr.aria-haspopup]="true"
              [attr.aria-label]="'User menu'"
              type="button">
              <span class="ux4g-header__user-icon" aria-hidden="true">👤</span>
              <span class="ux4g-header__user-text">Menu</span>
              <span class="ux4g-header__dropdown-arrow" aria-hidden="true">▼</span>
            </button>

            <!-- User Dropdown -->
            @if (userMenuOpen) {
              <ul
                class="ux4g-header__user-dropdown"
                role="menu"
                [attr.aria-label]="'User menu'">
                @for (item of userMenuItems; track item.label) {
                  <li
                    class="ux4g-header__user-dropdown-item"
                    [class.ux4g-header__user-dropdown-item--divider]="item.divider"
                    role="none">
                    @if (item.divider) {
                      <hr class="ux4g-header__divider" />
                    }
                    @if (!item.divider && item.href) {
                      <a
                        [href]="item.href"
                        class="ux4g-header__user-dropdown-link"
                        role="menuitem">
                        @if (item.icon) {
                          <span class="ux4g-header__user-dropdown-icon" aria-hidden="true">{{ item.icon }}</span>
                        }
                        {{ item.label }}
                      </a>
                    }
                    @if (!item.divider && !item.href) {
                      <button
                        class="ux4g-header__user-dropdown-link"
                        (click)="selectUserMenuItem(item)"
                        role="menuitem"
                        type="button">
                        @if (item.icon) {
                          <span class="ux4g-header__user-dropdown-icon" aria-hidden="true">{{ item.icon }}</span>
                        }
                        {{ item.label }}
                      </button>
                    }
                  </li>
                }
              </ul>
            }
          </div>
        }
      </div>
    </header>
  `,
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  /** Logo URL or path */
  @Input() logo: string = '';

  /** Site or application title */
  @Input() title: string = '';

  /** Navigation menu items */
  @Input() navigation: NavItem[] = [];

  /** User profile menu items */
  @Input() userMenuItems: MenuItem[] = [];

  /** Enable search bar */
  @Input() searchEnabled: boolean = false;

  /** Sticky header on scroll */
  @Input() sticky: boolean = false;

  /** Visual variant */
  @Input() variant: 'default' | 'compact' | 'government' = 'default';

  /** Mobile menu open state */
  mobileMenuOpen: boolean = false;

  /** User menu open state */
  userMenuOpen: boolean = false;

  /** Active dropdown index */
  activeDropdownIndex: number = -1;

  /** Focused menu item index for keyboard navigation */
  focusedItemIndex: number = -1;

  ngOnInit(): void {
    // Component initialization
  }

  /**
   * Toggle mobile menu visibility
   */
  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    if (this.mobileMenuOpen) {
      this.userMenuOpen = false;
    }
  }

  /**
   * Toggle user menu visibility
   */
  toggleUserMenu(): void {
    this.userMenuOpen = !this.userMenuOpen;
    if (this.userMenuOpen) {
      this.mobileMenuOpen = false;
    }
  }

  /**
   * Toggle navigation dropdown
   */
  toggleDropdown(index: number): void {
    if (this.activeDropdownIndex === index) {
      this.activeDropdownIndex = -1;
    } else {
      this.activeDropdownIndex = index;
    }
  }

  /**
   * Handle user menu item selection
   */
  selectUserMenuItem(item: MenuItem): void {
    if (item.action) {
      item.action();
    }
    this.userMenuOpen = false;
  }

  /**
   * Close all menus when clicking outside
   */
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const headerElement = target.closest('.ux4g-header');

    if (!headerElement) {
      this.mobileMenuOpen = false;
      this.userMenuOpen = false;
      this.activeDropdownIndex = -1;
    }
  }

  /**
   * Handle keyboard navigation
   */
  onKeyDown(event: KeyboardEvent, index: number): void {
    switch (event.key) {
      case 'Enter':
      case ' ':
        event.preventDefault();
        const navItem = this.navigation[index];
        if (navItem.children && navItem.children.length > 0) {
          this.toggleDropdown(index);
        }
        break;
      case 'Escape':
        this.activeDropdownIndex = -1;
        this.userMenuOpen = false;
        break;
      case 'ArrowDown':
        event.preventDefault();
        if (this.navigation[index].children) {
          this.toggleDropdown(index);
        }
        break;
      case 'ArrowUp':
        event.preventDefault();
        this.activeDropdownIndex = -1;
        break;
    }
  }

  /**
   * Handle user menu keyboard navigation
   */
  onUserMenuKeyDown(event: KeyboardEvent): void {
    switch (event.key) {
      case 'Enter':
      case ' ':
        event.preventDefault();
        this.toggleUserMenu();
        break;
      case 'Escape':
        this.userMenuOpen = false;
        break;
      case 'ArrowDown':
        event.preventDefault();
        if (!this.userMenuOpen) {
          this.toggleUserMenu();
        }
        break;
    }
  }

  /**
   * Check if dropdown is active
   */
  isDropdownActive(index: number): boolean {
    return this.activeDropdownIndex === index;
  }
}
