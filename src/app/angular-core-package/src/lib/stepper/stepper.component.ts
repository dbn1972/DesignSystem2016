import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { classNames } from '../../utils/class-names';

export interface Step {
  id?: string;
  label: string;
  description?: string;
  status?: 'pending' | 'current' | 'completed' | 'error';
  disabled?: boolean;
}

export type StepperOrientation = 'horizontal' | 'vertical';

/**
 * UX4G Stepper Component
 *
 * Multi-step workflow indicator showing progress through a process.
 * Supports horizontal and vertical orientations with clickable steps.
 *
 * @example
 * <ux4g-stepper
 *   [steps]="steps"
 *   [currentStep]="2"
 * ></ux4g-stepper>
 *
 * @example
 * <ux4g-stepper
 *   [steps]="steps"
 *   [currentStep]="currentStepIndex"
 *   orientation="vertical"
 *   [clickable]="true"
 *   (stepClick)="handleStepClick($event)"
 * ></ux4g-stepper>
 */
@Component({
  selector: 'ux4g-stepper',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="stepperClasses" [attr.data-testid]="testId">
      @for (step of steps; track step.id || $index) {
        <div [class]="getStepClasses($index)">
          <div
            [class]="getStepButtonClasses($index)"
            [attr.role]="clickable ? 'button' : null"
            [attr.tabindex]="clickable && !step.disabled ? 0 : null"
            [attr.aria-current]="$index === currentStep ? 'step' : null"
            (click)="handleStepClick($index, step)"
            (keydown.enter)="handleStepClick($index, step)"
            (keydown.space)="handleStepClick($index, step)"
          >
            <div [class]="getStepIconClasses($index)">
              @if (getStepStatus($index) === 'completed') {
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              } @else if (getStepStatus($index) === 'error') {
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              } @else {
                <span>{{ $index + 1 }}</span>
              }
            </div>

            <div class="ux4g-stepper__step-content">
              <div class="ux4g-stepper__step-label">{{ step.label }}</div>
              @if (step.description) {
                <div class="ux4g-stepper__step-description">{{ step.description }}</div>
              }
            </div>
          </div>

          @if (!$last && orientation === 'horizontal') {
            <div [class]="getConnectorClasses($index)"></div>
          }
        </div>
      }
    </div>
  `,
  styleUrls: ['./stepper.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class StepperComponent {
  /**
   * Array of steps
   */
  @Input() steps: Step[] = [];

  /**
   * Current active step index
   * @default 0
   */
  @Input() currentStep: number = 0;

  /**
   * Stepper orientation
   * @default 'horizontal'
   */
  @Input() orientation: StepperOrientation = 'horizontal';

  /**
   * Whether steps are clickable
   * @default false
   */
  @Input() clickable: boolean = false;

  /**
   * Additional CSS classes
   */
  @Input() className?: string;

  /**
   * Test identifier
   */
  @Input() testId?: string;

  /**
   * Emitted when step is clicked (if clickable)
   */
  @Output() stepClick = new EventEmitter<{ index: number; step: Step }>();

  /**
   * Computed stepper classes
   */
  get stepperClasses(): string {
    return classNames(
      'ux4g-stepper',
      'ux4g-stepper--' + this.orientation,
      this.className
    );
  }

  /**
   * Get step status
   */
  getStepStatus(index: number): 'pending' | 'current' | 'completed' | 'error' {
    const step = this.steps[index];
    if (step.status) return step.status;
    if (index < this.currentStep) return 'completed';
    if (index === this.currentStep) return 'current';
    return 'pending';
  }

  /**
   * Get step classes
   */
  getStepClasses(index: number): string {
    return classNames('ux4g-stepper__step');
  }

  /**
   * Get step button classes
   */
  getStepButtonClasses(index: number): string {
    const status = this.getStepStatus(index);
    const step = this.steps[index];

    return classNames(
      'ux4g-stepper__step-button',
      'ux4g-stepper__step-button--' + status,
      this.clickable && !step.disabled && 'ux4g-stepper__step-button--clickable',
      step.disabled && 'ux4g-stepper__step-button--disabled'
    );
  }

  /**
   * Get step icon classes
   */
  getStepIconClasses(index: number): string {
    const status = this.getStepStatus(index);

    return classNames(
      'ux4g-stepper__step-icon',
      'ux4g-stepper__step-icon--' + status
    );
  }

  /**
   * Get connector classes
   */
  getConnectorClasses(index: number): string {
    const isCompleted = this.getStepStatus(index) === 'completed';

    return classNames(
      'ux4g-stepper__connector',
      isCompleted && 'ux4g-stepper__connector--completed'
    );
  }

  /**
   * Handle step click
   */
  handleStepClick(index: number, step: Step): void {
    if (this.clickable && !step.disabled) {
      this.stepClick.emit({ index, step });
    }
  }
}
