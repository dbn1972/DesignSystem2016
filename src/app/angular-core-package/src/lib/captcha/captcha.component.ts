import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  forwardRef,
  ChangeDetectorRef
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

/**
 * UX4G CAPTCHA
 *
 * Simple text-based CAPTCHA component for bot prevention. Generates random alphanumeric
 * challenges with distorted text rendering for visual verification.
 *
 * @example
 * // Basic CAPTCHA
 * <ux4g-captcha
 *   [(ngModel)]="captchaValue"
 *   (onVerify)="handleCaptchaVerification($event)"
 * ></ux4g-captcha>
 *
 * @example
 * // CAPTCHA with auto-refresh
 * <ux4g-captcha
 *   [(ngModel)]="captchaValue"
 *   [length]="8"
 *   difficulty="hard"
 *   [autoRefresh]="true"
 *   [refreshInterval]="300000"
 *   (onVerify)="handleCaptchaVerification($event)"
 * ></ux4g-captcha>
 */
@Component({
  selector: 'ux4g-captcha',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="ux4g-captcha">
      <div class="ux4g-captcha__container">
        <div
          class="ux4g-captcha__challenge"
          [class.ux4g-captcha__challenge--easy]="difficulty === 'easy'"
          [class.ux4g-captcha__challenge--medium]="difficulty === 'medium'"
          [class.ux4g-captcha__challenge--hard]="difficulty === 'hard'"
          [attr.aria-label]="'CAPTCHA challenge'"
          role="img"
        >
          <span
            *ngFor="let char of challengeChars; let i = index"
            class="ux4g-captcha__char"
            [style.transform]="getCharTransform(i)"
            [style.color]="getCharColor(i)"
          >
            {{ char }}
          </span>
        </div>

        <button
          type="button"
          class="ux4g-captcha__refresh"
          (click)="refresh()"
          [attr.aria-label]="'Refresh CAPTCHA'"
          title="Refresh CAPTCHA"
        >
          <span class="ux4g-captcha__refresh-icon" aria-hidden="true">↻</span>
          <span class="ux4g-captcha__sr-only">Refresh CAPTCHA</span>
        </button>

        <button
          type="button"
          class="ux4g-captcha__audio"
          (click)="playAudio()"
          [attr.aria-label]="'Play audio CAPTCHA'"
          title="Audio CAPTCHA"
        >
          <span class="ux4g-captcha__audio-icon" aria-hidden="true">🔊</span>
          <span class="ux4g-captcha__sr-only">Play audio CAPTCHA</span>
        </button>
      </div>

      <div class="ux4g-captcha__input-wrapper">
        <input
          type="text"
          class="ux4g-captcha__input"
          [class.ux4g-captcha__input--error]="showError"
          [class.ux4g-captcha__input--success]="isVerified"
          [(ngModel)]="userInput"
          (input)="onInput()"
          (blur)="onBlur()"
          [placeholder]="'Enter the characters shown'"
          [attr.aria-label]="'Enter CAPTCHA'"
          [attr.aria-describedby]="'captcha-status'"
          [disabled]="disabled"
          [maxlength]="length"
          autocomplete="off"
        />

        <div id="captcha-status" class="ux4g-captcha__status" [attr.aria-live]="'polite'">
          <span *ngIf="isVerified" class="ux4g-captcha__status--success">
            ✓ Verified
          </span>
          <span *ngIf="showError" class="ux4g-captcha__status--error">
            ✗ Incorrect, please try again
          </span>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./captcha.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CaptchaComponent),
    multi: true
  }]
})
export class CaptchaComponent implements OnInit, OnDestroy, ControlValueAccessor {
  @Input() length: number = 6;
  @Input() difficulty: 'easy' | 'medium' | 'hard' = 'medium';
  @Input() autoRefresh: boolean = false;
  @Input() refreshInterval: number = 300000; // 5 minutes
  @Input() disabled: boolean = false;

  @Output() onVerify = new EventEmitter<boolean>();
  @Output() valueChange = new EventEmitter<string>();

  challengeText: string = '';
  challengeChars: string[] = [];
  userInput: string = '';
  isVerified: boolean = false;
  showError: boolean = false;

  private refreshTimer: any;
  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};

  // Avoid ambiguous characters
  private readonly EASY_CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  private readonly MEDIUM_CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789';
  private readonly HARD_CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789!@#$%&*';

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.generateChallenge();

    if (this.autoRefresh && this.refreshInterval > 0) {
      this.startAutoRefresh();
    }
  }

  ngOnDestroy(): void {
    this.stopAutoRefresh();
  }

  writeValue(value: string): void {
    this.userInput = value || '';
    this.cdr.markForCheck();
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
    this.cdr.markForCheck();
  }

  onInput(): void {
    this.showError = false;
    this.isVerified = false;
    this.onChange(this.userInput);
    this.valueChange.emit(this.userInput);
    this.cdr.markForCheck();
  }

  onBlur(): void {
    this.verify();
    this.onTouched();
  }

  refresh(): void {
    this.generateChallenge();
    this.userInput = '';
    this.isVerified = false;
    this.showError = false;
    this.onChange('');
    this.valueChange.emit('');
    this.cdr.markForCheck();
  }

  verify(): void {
    if (!this.userInput) {
      return;
    }

    const isValid = this.userInput.toUpperCase() === this.challengeText.toUpperCase();

    if (isValid) {
      this.isVerified = true;
      this.showError = false;
      this.onVerify.emit(true);
    } else {
      this.isVerified = false;
      this.showError = true;
      this.onVerify.emit(false);

      // Auto-refresh challenge on failed verification
      setTimeout(() => {
        this.refresh();
      }, 2000);
    }

    this.cdr.markForCheck();
  }

  playAudio(): void {
    // Create a simple audio representation using Web Speech API
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance();

      // Spell out each character with pauses
      utterance.text = this.challengeChars.join(', ');
      utterance.rate = 0.7; // Slower speech rate
      utterance.pitch = 1;
      utterance.volume = 1;

      window.speechSynthesis.cancel(); // Cancel any ongoing speech
      window.speechSynthesis.speak(utterance);
    } else {
      alert('Audio CAPTCHA is not supported in your browser');
    }
  }

  getCharTransform(index: number): string {
    const rotation = this.getRandomRotation();
    const skew = this.getRandomSkew();

    let scaleVariation = '';
    if (this.difficulty === 'medium' || this.difficulty === 'hard') {
      const scale = 0.9 + Math.random() * 0.2; // 0.9 to 1.1
      scaleVariation = ` scale(${scale})`;
    }

    return `rotate(${rotation}deg) skew(${skew}deg)${scaleVariation}`;
  }

  getCharColor(index: number): string {
    if (this.difficulty === 'easy') {
      return '#111827';
    }

    // Generate subtle color variations for medium/hard
    const colors = [
      '#111827',
      '#1f2937',
      '#374151',
      '#0f172a',
      '#1e293b'
    ];

    return colors[index % colors.length];
  }

  private generateChallenge(): void {
    const chars = this.getCharacterSet();

    this.challengeText = Array.from(
      { length: this.length },
      () => chars[Math.floor(Math.random() * chars.length)]
    ).join('');

    this.challengeChars = this.challengeText.split('');
    this.cdr.markForCheck();
  }

  private getCharacterSet(): string {
    switch (this.difficulty) {
      case 'easy':
        return this.EASY_CHARS;
      case 'medium':
        return this.MEDIUM_CHARS;
      case 'hard':
        return this.HARD_CHARS;
      default:
        return this.MEDIUM_CHARS;
    }
  }

  private getRandomRotation(): number {
    switch (this.difficulty) {
      case 'easy':
        return Math.random() * 10 - 5; // -5 to +5 degrees
      case 'medium':
        return Math.random() * 20 - 10; // -10 to +10 degrees
      case 'hard':
        return Math.random() * 30 - 15; // -15 to +15 degrees
      default:
        return Math.random() * 20 - 10;
    }
  }

  private getRandomSkew(): number {
    switch (this.difficulty) {
      case 'easy':
        return 0;
      case 'medium':
        return Math.random() * 10 - 5; // -5 to +5 degrees
      case 'hard':
        return Math.random() * 20 - 10; // -10 to +10 degrees
      default:
        return Math.random() * 10 - 5;
    }
  }

  private startAutoRefresh(): void {
    this.refreshTimer = setInterval(() => {
      if (!this.isVerified) {
        this.refresh();
      }
    }, this.refreshInterval);
  }

  private stopAutoRefresh(): void {
    if (this.refreshTimer) {
      clearInterval(this.refreshTimer);
      this.refreshTimer = null;
    }
  }
}
