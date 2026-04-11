import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  ContentChildren,
  QueryList,
  AfterContentInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { classNames } from '../../utils/class-names';

/**
 * UX4G Tab Panel Component
 *
 * Individual tab panel content.
 */
@Component({
  selector: 'ux4g-tab-panel',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (active) {
      <div
        role="tabpanel"
        [id]="panelId"
        [attr.aria-labelledby]="tabId"
        [attr.data-testid]="testId"
        [class]="panelClasses"
      >
        <ng-content></ng-content>
      </div>
    }
  `,
  styleUrls: ['./tabs.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class TabPanelComponent {
  /**
   * Tab label
   */
  @Input() label!: string;

  /**
   * Tab value/identifier
   */
  @Input() value?: string;

  /**
   * Whether the tab is disabled
   * @default false
   */
  @Input() disabled: boolean = false;

  /**
   * Whether the tab is active
   * @default false
   */
  @Input() active: boolean = false;

  /**
   * Tab ID
   */
  @Input() tabId?: string;

  /**
   * Panel ID
   */
  @Input() panelId?: string;

  /**
   * Additional CSS classes
   */
  @Input() className?: string;

  /**
   * Test identifier
   */
  @Input() testId?: string;

  /**
   * Computed panel classes
   */
  get panelClasses(): string {
    return classNames('ux4g-tab-panel', this.className);
  }
}

/**
 * UX4G Tabs Component
 *
 * A tabbed interface component for organizing content into separate views.
 * Follows WCAG 2.1 Level AA accessibility standards.
 *
 * @example
 * <ux4g-tabs [(activeTab)]="activeTab">
 *   <ux4g-tab-panel label="Profile" value="profile">
 *     Profile content
 *   </ux4g-tab-panel>
 *   <ux4g-tab-panel label="Settings" value="settings">
 *     Settings content
 *   </ux4g-tab-panel>
 * </ux4g-tabs>
 *
 * @example
 * <ux4g-tabs [variant]="'bordered'" [orientation]="'vertical'">
 *   <ux4g-tab-panel label="Overview">Overview content</ux4g-tab-panel>
 *   <ux4g-tab-panel label="Details">Details content</ux4g-tab-panel>
 * </ux4g-tabs>
 */
@Component({
  selector: 'ux4g-tabs',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="wrapperClasses" [attr.data-testid]="testId">
      <div
        role="tablist"
        [attr.aria-orientation]="orientation"
        [class]="tabListClasses"
      >
        @for (tab of tabs; track tab.value || $index; let i = $index) {
          <button
            type="button"
            role="tab"
            [id]="getTabId(i)"
            [attr.aria-selected]="isActiveTab(i)"
            [attr.aria-controls]="getPanelId(i)"
            [attr.tabindex]="isActiveTab(i) ? 0 : -1"
            [disabled]="tab.disabled"
            [class]="getTabClasses(i)"
            (click)="handleTabClick(i)"
            (keydown)="handleKeyDown($event, i)"
          >
            {{ tab.label }}
          </button>
        }
      </div>

      <div [class]="panelsClasses">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styleUrls: ['./tabs.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class TabsComponent implements AfterContentInit {
  /**
   * Active tab index or value
   */
  @Input() activeTab?: string | number;

  /**
   * Tab variant
   * @default 'default'
   */
  @Input() variant: 'default' | 'bordered' | 'pills' = 'default';

  /**
   * Tab orientation
   * @default 'horizontal'
   */
  @Input() orientation: 'horizontal' | 'vertical' = 'horizontal';

  /**
   * Whether to take full width
   * @default false
   */
  @Input() fullWidth: boolean = false;

  /**
   * Additional CSS classes
   */
  @Input() className?: string;

  /**
   * Test identifier
   */
  @Input() testId?: string;

  /**
   * Active tab change event emitter
   */
  @Output() activeTabChange = new EventEmitter<string | number>();

  /**
   * Tab change event emitter
   */
  @Output() tabChanged = new EventEmitter<{ tab: TabPanelComponent; index: number }>();

  /**
   * Tab panels from content projection
   */
  @ContentChildren(TabPanelComponent) tabPanels!: QueryList<TabPanelComponent>;

  /**
   * Internal tabs array
   */
  tabs: TabPanelComponent[] = [];

  /**
   * Current active index
   */
  private activeIndex: number = 0;

  /**
   * Auto-generated unique ID
   */
  private static nextId = 0;
  private generatedId = 'ux4g-tabs-' + TabsComponent.nextId++;

  ngAfterContentInit(): void {
    this.tabs = this.tabPanels.toArray();
    this.initializeActiveTab();
    this.updateTabStates();

    // Watch for changes to tab panels
    this.tabPanels.changes.subscribe(() => {
      this.tabs = this.tabPanels.toArray();
      this.updateTabStates();
    });
  }

  /**
   * Initialize active tab based on activeTab input
   */
  private initializeActiveTab(): void {
    if (this.activeTab !== undefined) {
      if (typeof this.activeTab === 'number') {
        this.activeIndex = this.activeTab;
      } else {
        const index = this.tabs.findIndex((tab) => tab.value === this.activeTab);
        this.activeIndex = index >= 0 ? index : 0;
      }
    } else {
      this.activeIndex = 0;
    }
  }

  /**
   * Update tab and panel states
   */
  private updateTabStates(): void {
    this.tabs.forEach((tab, index) => {
      tab.active = index === this.activeIndex;
      tab.tabId = this.getTabId(index);
      tab.panelId = this.getPanelId(index);
    });
  }

  /**
   * Get tab ID
   */
  getTabId(index: number): string {
    return this.generatedId + '-tab-' + index;
  }

  /**
   * Get panel ID
   */
  getPanelId(index: number): string {
    return this.generatedId + '-panel-' + index;
  }

  /**
   * Check if tab is active
   */
  isActiveTab(index: number): boolean {
    return index === this.activeIndex;
  }

  /**
   * Computed wrapper classes
   */
  get wrapperClasses(): string {
    return classNames(
      'ux4g-tabs',
      'ux4g-tabs--' + this.orientation,
      this.className
    );
  }

  /**
   * Computed tab list classes
   */
  get tabListClasses(): string {
    return classNames(
      'ux4g-tabs__list',
      'ux4g-tabs__list--' + this.variant,
      'ux4g-tabs__list--' + this.orientation,
      this.fullWidth && 'ux4g-tabs__list--full-width'
    );
  }

  /**
   * Computed panels classes
   */
  get panelsClasses(): string {
    return classNames('ux4g-tabs__panels');
  }

  /**
   * Get tab button classes
   */
  getTabClasses(index: number): string {
    return classNames(
      'ux4g-tabs__tab',
      this.isActiveTab(index) && 'ux4g-tabs__tab--active',
      this.tabs[index]?.disabled && 'ux4g-tabs__tab--disabled'
    );
  }

  /**
   * Handle tab click
   */
  handleTabClick(index: number): void {
    if (this.tabs[index]?.disabled) {
      return;
    }

    this.activeIndex = index;
    this.updateTabStates();

    const tab = this.tabs[index];
    const value = tab.value !== undefined ? tab.value : index;

    this.activeTabChange.emit(value);
    this.tabChanged.emit({ tab, index });
  }

  /**
   * Handle keyboard navigation
   */
  handleKeyDown(event: KeyboardEvent, currentIndex: number): void {
    let newIndex = currentIndex;

    if (this.orientation === 'horizontal') {
      if (event.key === 'ArrowLeft') {
        newIndex = this.getPreviousEnabledTab(currentIndex);
        event.preventDefault();
      } else if (event.key === 'ArrowRight') {
        newIndex = this.getNextEnabledTab(currentIndex);
        event.preventDefault();
      }
    } else {
      if (event.key === 'ArrowUp') {
        newIndex = this.getPreviousEnabledTab(currentIndex);
        event.preventDefault();
      } else if (event.key === 'ArrowDown') {
        newIndex = this.getNextEnabledTab(currentIndex);
        event.preventDefault();
      }
    }

    if (newIndex !== currentIndex) {
      this.handleTabClick(newIndex);
      // Focus the new tab
      setTimeout(() => {
        const tabButton = document.getElementById(this.getTabId(newIndex));
        tabButton?.focus();
      });
    }
  }

  /**
   * Get previous enabled tab index
   */
  private getPreviousEnabledTab(currentIndex: number): number {
    let index = currentIndex - 1;
    while (index >= 0) {
      if (!this.tabs[index]?.disabled) {
        return index;
      }
      index--;
    }
    // Wrap around to end
    index = this.tabs.length - 1;
    while (index > currentIndex) {
      if (!this.tabs[index]?.disabled) {
        return index;
      }
      index--;
    }
    return currentIndex;
  }

  /**
   * Get next enabled tab index
   */
  private getNextEnabledTab(currentIndex: number): number {
    let index = currentIndex + 1;
    while (index < this.tabs.length) {
      if (!this.tabs[index]?.disabled) {
        return index;
      }
      index++;
    }
    // Wrap around to start
    index = 0;
    while (index < currentIndex) {
      if (!this.tabs[index]?.disabled) {
        return index;
      }
      index++;
    }
    return currentIndex;
  }
}
