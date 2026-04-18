/**
 * @ux4g/a11y-angular — Stepper Component
 *
 * Standalone Angular component for numeric accessibility features.
 */

import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { NgIf } from '@angular/common';

let nextId = 0;

@Component({
  selector: 'ux4g-a11y-stepper',
  standalone: true,
  imports: [NgIf],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="ux4g-a11y-control">
      <label [id]="labelId" class="ux4g-a11y-control-label">{{ label }}</label>
      <div class="ux4g-a11y-stepper" role="group" [attr.aria-labelledby]="labelId">
        <button
          *ngIf="showDecrease"
          type="button"
          (click)="decreased.emit()"
          [attr.aria-label]="decreaseLabel"
          class="ux4g-a11y-stepper-btn"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
               fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
               stroke-linejoin="round" aria-hidden="true">
            <path d="M5 12h14"/>
          </svg>
        </button>
        <span class="ux4g-a11y-stepper-value" aria-live="polite">{{ displayValue }}</span>
        <button
          type="button"
          (click)="increased.emit()"
          [attr.aria-label]="increaseLabel"
          class="ux4g-a11y-stepper-btn"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
               fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
               stroke-linejoin="round" aria-hidden="true">
            <path d="M12 5v14M5 12h14"/>
          </svg>
        </button>
        <button
          *ngIf="showReset && value !== 0"
          type="button"
          (click)="resetted.emit()"
          [attr.aria-label]="resetLabel"
          class="ux4g-a11y-stepper-btn ux4g-a11y-stepper-btn--reset"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
               fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
               stroke-linejoin="round" aria-hidden="true">
            <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
            <path d="M3 3v5h5"/>
          </svg>
        </button>
      </div>
    </div>
  `,
})
export class A11yStepperComponent {
  @Input({ required: true }) label = '';
  @Input() value = 0;
  @Input() displayValue = '';
  @Input() increaseLabel = '';
  @Input() decreaseLabel = '';
  @Input() resetLabel = '';
  @Input() showDecrease = false;
  @Input() showReset = false;
  @Output() increased = new EventEmitter<void>();
  @Output() decreased = new EventEmitter<void>();
  @Output() resetted = new EventEmitter<void>();

  readonly labelId = `ux4g-a11y-stepper-${nextId++}`;
}
