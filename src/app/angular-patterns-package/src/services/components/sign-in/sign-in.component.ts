import { Component, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MockApiService } from '../../mock-api/mock-api.service';
import { AuthResponse } from '../../models/service.models';

@Component({
  selector: 'ux4g-sign-in',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInComponent {
  @Output() signedIn = new EventEmitter<AuthResponse>();
  @Output() navigateSignUp = new EventEmitter<void>();
  @Output() navigateForgotPassword = new EventEmitter<void>();

  form: FormGroup;
  loading = false;
  error: string | null = null;
  showPassword = false;

  constructor(private fb: FormBuilder, private api: MockApiService) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  get f() {
    return this.form.controls;
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.loading = true;
    this.error = null;

    this.api.signIn(this.form.value).subscribe({
      next: (res) => {
        this.loading = false;
        this.signedIn.emit(res);
      },
      error: (err) => {
        this.loading = false;
        this.error = err.message;
      },
    });
  }
}
