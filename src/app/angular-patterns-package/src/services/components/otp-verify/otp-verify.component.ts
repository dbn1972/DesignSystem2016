import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MockApiService } from '../../mock-api/mock-api.service';
import { AuthResponse } from '../../models/service.models';

@Component({
  selector: 'ux4g-otp-verify',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './otp-verify.component.html',
  styleUrls: ['./otp-verify.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OtpVerifyComponent implements OnInit, OnDestroy {
  @Input() referenceId = '';
  @Input() destination = 'your registered mobile';
  @Output() verified = new EventEmitter<AuthResponse>();
  @Output() resendRequested = new EventEmitter<void>();

  form: FormGroup;
  loading = false;
  error: string | null = null;
  countdown = 30;
  canResend = false;
  private timer: ReturnType<typeof setInterval> | null = null;

  constructor(private fb: FormBuilder, private api: MockApiService) {
    this.form = this.fb.group({
      otp: ['', [Validators.required, Validators.pattern(/^\d{6}$/)]],
    });
  }

  ngOnInit(): void {
    this.startCountdown();
  }

  ngOnDestroy(): void {
    if (this.timer) clearInterval(this.timer);
  }

  private startCountdown(): void {
    this.countdown = 30;
    this.canResend = false;
    if (this.timer) clearInterval(this.timer);
    this.timer = setInterval(() => {
      this.countdown--;
      if (this.countdown <= 0) {
        this.canResend = true;
        if (this.timer) clearInterval(this.timer);
      }
    }, 1000);
  }

  get f() {
    return this.form.controls;
  }

  onResend(): void {
    this.resendRequested.emit();
    this.startCountdown();
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.loading = true;
    this.error = null;

    this.api.verifyOtp({ otp: this.f['otp'].value, referenceId: this.referenceId }).subscribe({
      next: (res) => {
        this.loading = false;
        this.verified.emit(res);
      },
      error: (err) => {
        this.loading = false;
        this.error = err.message;
      },
    });
  }
}
