/**
 * @ux4g/a11y-angular — Toggle Component
 *
 * Standalone Angular component for boolean accessibility features.
 * Uses the same CSS classes as the React version.
 */

import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

let nextId = 0;

@Component({
  selector: 'ux4g-a11y-toggle',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="ux4g-a11y-control">
      <div class="ux4g-a11y-control-text">
        <label [attr.for]="toggleId" class="ux4g-a11y-control-label">{{ label }}</label>
      </div>
      <button
        [id]="toggleId"
        type="button"
        role="switch"
        [attr.aria-checked]="checked"
        (click)="changed.emit()"
        [class]="'ux4g-a11y-toggle' + (checked ? ' ux4g-a11y-toggle--on' : '')"
      >
        <span class="ux4g-a11y-toggle-thumb"></span>
      </button>
    </div>
  `,
})
export class A11yToggleComponent {
  @Input({ required: true }) label = '';
  @Input() checked = false;
  @Output() changed = new EventEmitter<void>();

  readonly toggleId = `ux4g-a11y-toggle-${nextId++}`;
}
