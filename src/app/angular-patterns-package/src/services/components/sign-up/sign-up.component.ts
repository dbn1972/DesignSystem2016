import { Component, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { MockApiService } from '../../mock-api/mock-api.service';
import { AuthResponse } from '../../models/service.models';

@Component({
  selector: 'ux4g-sign-up',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpComponent {
  @Output() accountCreated = new EventEmitter<AuthResponse>();
  @Output() navigateSignIn = new EventEmitter<void>();

  form: FormGroup;
  loading = false;
  error: string | null = null;
  showPassword = false;

  constructor(private fb: FormBuilder, private api: MockApiService) {
    this.form = this.fb.group(
      {
        fullName: ['', [Validators.required, Validators.minLength(2)]],
        email: ['', [Validators.required, Validators.email]],
        mobile: ['', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', [Validators.required]],
        acceptTerms: [false, [Validators.requiredTrue]],
      },
      { validators: SignUpComponent.passwordMatch }
    );
  }

  static passwordMatch(group: AbstractControl): ValidationErrors | null {
    const pw = group.get('password')?.value;
    const cpw = group.get('confirmPassword')?.value;
    return pw === cpw ? null : { passwordMismatch: true };
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

    this.api.signUp(this.form.value).subscribe({
      next: (res) => {
        this.loading = false;
        this.accountCreated.emit(res);
      },
      error: (err) => {
        this.loading = false;
        this.error = err.message;
      },
    });
  }
}
