import { Component, Input, ChangeDetectionStrategy, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Description item interface
 */
export interface DescriptionItem {
  term: string;
  description: string | string[];
  icon?: string;
  copyable?: boolean;
  highlight?: boolean;
}

/**
 * Description list component for displaying key-value pairs.
 * Commonly used in government forms, application details, and data displays.
 *
 * @example
 * // Indian Government Application Details
 * <ux4g-description-list
 *   [items]="[
 *     { term: 'Application Number', description: 'APP-2026-12345', copyable: true, highlight: true },
 *     { term: 'Applicant Name', description: 'Rajesh Kumar' },
 *     { term: 'Aadhaar Number', description: 'XXXX XXXX 1234', copyable: true },
 *     { term: 'PAN Number', description: 'ABCDE1234F', copyable: true },
 *     { term: 'Status', description: 'Approved', highlight: true, icon: '✓' },
 *     { term: 'Submission Date', description: '12 April 2026' }
 *   ]"
 *   [bordered]="true"
 *   [striped]="false"
 * ></ux4g-description-list>
 *
 * @example
 * // Citizen Information Card
 * <ux4g-description-list
 *   [items]="[
 *     { term: 'Full Name', description: 'Priya Sharma' },
 *     { term: 'Date of Birth', description: '15 August 1990' },
 *     { term: 'Address', description: ['123 MG Road', 'Bangalore - 560001', 'Karnataka'] },
 *     { term: 'Contact Number', description: '+91 98765 43210', copyable: true },
 *     { term: 'Email', description: 'priya.sharma@example.com', copyable: true }
 *   ]"
 *   orientation="horizontal"
 *   size="md"
 * ></ux4g-description-list>
 *
 * @example
 * // Ministry Department Information
 * <ux4g-description-list
 *   [items]="[
 *     { term: 'Ministry', description: 'Ministry of Electronics and IT', icon: '🏛️' },
 *     { term: 'Department', description: 'Digital India Programme' },
 *     { term: 'Services Offered', description: ['e-Governance', 'Digital Literacy', 'Cyber Security'] },
 *     { term: 'Website', description: 'https://digitalindia.gov.in', copyable: true }
 *   ]"
 *   [bordered]="true"
 *   [divider]="true"
 * ></ux4g-description-list>
 */
@Component({
  selector: 'ux4g-description-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './description-list.component.html',
  styleUrls: ['./description-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class DescriptionListComponent {
  /**
   * Array of description items to display
   */
  @Input() items: DescriptionItem[] = [];

  /**
   * Layout orientation
   */
  @Input() orientation: 'horizontal' | 'vertical' = 'horizontal';

  /**
   * Size of the description list
   */
  @Input() size: 'sm' | 'md' | 'lg' = 'md';

  /**
   * Whether to show borders around the list
   */
  @Input() bordered: boolean = false;

  /**
   * Whether to use striped rows
   */
  @Input() striped: boolean = false;

  /**
   * Whether to show dividers between items
   */
  @Input() divider: boolean = true;

  /**
   * Additional CSS classes
   */
  @Input() className?: string;

  /**
   * Emits when a value is copied
   */
  @Output() valueCopied = new EventEmitter<{ term: string; value: string }>();

  /**
   * Tracks which items have been recently copied
   */
  copiedItems: Set<number> = new Set();

  /**
   * Get computed CSS classes for the description list
   */
  get descriptionListClasses(): string {
    const classes = [
      'ux4g-description-list',
      `ux4g-description-list--${this.orientation}`,
      `ux4g-description-list--${this.size}`
    ];

    if (this.bordered) {
      classes.push('ux4g-description-list--bordered');
    }

    if (this.striped) {
      classes.push('ux4g-description-list--striped');
    }

    if (this.divider) {
      classes.push('ux4g-description-list--divider');
    }

    if (this.className) {
      classes.push(this.className);
    }

    return classes.join(' ');
  }

  /**
   * Check if value is an array
   */
  isArray(value: any): boolean {
    return Array.isArray(value);
  }

  /**
   * Cast value to string array
   */
  asArray(value: any): string[] {
    return value as string[];
  }

  /**
   * Copy value to clipboard
   */
  copyToClipboard(text: string | string[], term: string, index: number): void {
    const textToCopy = Array.isArray(text) ? text.join(', ') : text;

    navigator.clipboard.writeText(textToCopy).then(() => {
      this.copiedItems.add(index);
      this.valueCopied.emit({ term, value: textToCopy });

      // Reset copied state after 2 seconds
      setTimeout(() => {
        this.copiedItems.delete(index);
      }, 2000);
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  }

  /**
   * Check if item was recently copied
   */
  isCopied(index: number): boolean {
    return this.copiedItems.has(index);
  }
}
