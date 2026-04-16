/**
 * Adds code download sections to pattern pages.
 * Each pattern gets React, Angular, and HTML implementations.
 *
 * Run: node scripts/add-pattern-code-downloads.mjs [patternName|all]
 */
import { readFileSync, writeFileSync } from 'fs';
const ROOT = '/Users/debabratanayak_1/Documents/DesignSystem_211';

// Pattern-specific code for each pattern
const PATTERNS = {
  SignUpPattern: {
    react: { filename: 'SignUpPage.tsx', desc: 'TypeScript + Hooks', code: `import React, { useState } from 'react';

export function SignUpPage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ name: '', mobile: '', email: '', aadhaar: '', password: '', confirmPassword: '', otp: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      if (!form.name || !form.mobile || !form.email) { setError('All fields are required'); return; }
      if (!/^[6-9]\\d{9}$/.test(form.mobile)) { setError('Enter valid Indian mobile number'); return; }
      setStep(2);
    } else if (step === 2) {
      if (!form.otp || form.otp.length !== 6) { setError('Enter 6-digit OTP'); return; }
      setStep(3);
    } else {
      if (form.password.length < 8) { setError('Password must be 8+ characters'); return; }
      if (form.password !== form.confirmPassword) { setError('Passwords do not match'); return; }
      setLoading(true);
      try {
        await fetch('/api/auth/signup', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
      } catch { setError('Registration failed'); }
      finally { setLoading(false); }
    }
    setError('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-md bg-card border border-border rounded-2xl p-8 shadow-sm">
        <h1 className="text-2xl font-bold text-foreground mb-2">Create Account</h1>
        <p className="text-sm text-muted-foreground mb-6">Step {step} of 3</p>
        {error && <div role="alert" className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">{error}</div>}
        <form onSubmit={handleSubmit} noValidate>
          {step === 1 && (
            <div className="space-y-4">
              <div><label htmlFor="name" className="block text-sm font-medium mb-1">Full Name *</label><input id="name" value={form.name} onChange={e => setForm(f => ({...f, name: e.target.value}))} className="w-full px-4 py-3 border border-border rounded-lg" aria-required="true" /></div>
              <div><label htmlFor="mobile" className="block text-sm font-medium mb-1">Mobile (+91) *</label><input id="mobile" value={form.mobile} onChange={e => setForm(f => ({...f, mobile: e.target.value}))} placeholder="98765 43210" className="w-full px-4 py-3 border border-border rounded-lg" aria-required="true" /></div>
              <div><label htmlFor="email" className="block text-sm font-medium mb-1">Email *</label><input id="email" type="email" value={form.email} onChange={e => setForm(f => ({...f, email: e.target.value}))} className="w-full px-4 py-3 border border-border rounded-lg" aria-required="true" /></div>
            </div>
          )}
          {step === 2 && (
            <div><label htmlFor="otp" className="block text-sm font-medium mb-1">Enter OTP sent to +91 {form.mobile}</label><input id="otp" value={form.otp} onChange={e => setForm(f => ({...f, otp: e.target.value}))} maxLength={6} className="w-full px-4 py-3 border border-border rounded-lg text-center tracking-widest text-lg" aria-required="true" /></div>
          )}
          {step === 3 && (
            <div className="space-y-4">
              <div><label htmlFor="password" className="block text-sm font-medium mb-1">Password *</label><input id="password" type="password" value={form.password} onChange={e => setForm(f => ({...f, password: e.target.value}))} className="w-full px-4 py-3 border border-border rounded-lg" aria-required="true" /></div>
              <div><label htmlFor="confirm" className="block text-sm font-medium mb-1">Confirm Password *</label><input id="confirm" type="password" value={form.confirmPassword} onChange={e => setForm(f => ({...f, confirmPassword: e.target.value}))} className="w-full px-4 py-3 border border-border rounded-lg" aria-required="true" /></div>
            </div>
          )}
          <button type="submit" disabled={loading} className="w-full mt-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold disabled:opacity-60">{loading ? 'Creating...' : step < 3 ? 'Continue' : 'Create Account'}</button>
        </form>
      </div>
    </div>
  );
}` },
    angular: { filename: 'sign-up.component.ts', desc: 'Standalone Component', code: `import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ux4g-sign-up',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: \`
    <div class="min-h-screen flex items-center justify-center bg-background p-4">
      <div class="w-full max-w-md bg-card border border-border rounded-2xl p-8">
        <h1 class="text-2xl font-bold mb-2">Create Account</h1>
        <p class="text-sm text-muted-foreground mb-6">Step {{ step }} of 3</p>
        <form [formGroup]="form" (ngSubmit)="onSubmit()">
          <div *ngIf="step === 1" class="space-y-4">
            <div><label for="name" class="block text-sm font-medium mb-1">Full Name *</label><input id="name" formControlName="name" class="w-full px-4 py-3 border border-border rounded-lg" /></div>
            <div><label for="mobile" class="block text-sm font-medium mb-1">Mobile (+91) *</label><input id="mobile" formControlName="mobile" class="w-full px-4 py-3 border border-border rounded-lg" /></div>
            <div><label for="email" class="block text-sm font-medium mb-1">Email *</label><input id="email" formControlName="email" class="w-full px-4 py-3 border border-border rounded-lg" /></div>
          </div>
          <div *ngIf="step === 2"><label for="otp" class="block text-sm font-medium mb-1">Enter OTP</label><input id="otp" formControlName="otp" maxlength="6" class="w-full px-4 py-3 border border-border rounded-lg text-center tracking-widest" /></div>
          <div *ngIf="step === 3" class="space-y-4">
            <div><label for="password" class="block text-sm font-medium mb-1">Password *</label><input id="password" type="password" formControlName="password" class="w-full px-4 py-3 border border-border rounded-lg" /></div>
            <div><label for="confirm" class="block text-sm font-medium mb-1">Confirm *</label><input id="confirm" type="password" formControlName="confirmPassword" class="w-full px-4 py-3 border border-border rounded-lg" /></div>
          </div>
          <button type="submit" class="w-full mt-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold">{{ step < 3 ? 'Continue' : 'Create Account' }}</button>
        </form>
      </div>
    </div>
  \`
})
export class SignUpComponent {
  step = 1;
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    mobile: new FormControl('', [Validators.required, Validators.pattern(/^[6-9]\\d{9}$/)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    otp: new FormControl(''),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirmPassword: new FormControl('', Validators.required),
  });
  onSubmit() { if (this.step < 3) this.step++; }
}` },
    html: { filename: 'sign-up.html', desc: 'No framework needed', code: `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Sign Up — UX4G</title>
<style>*{margin:0;padding:0;box-sizing:border-box}body{font-family:system-ui,sans-serif;min-height:100vh;display:flex;align-items:center;justify-content:center;background:#f9fafb;padding:1rem}.card{width:100%;max-width:28rem;background:#fff;border:1px solid #e5e7eb;border-radius:1rem;padding:2rem}h1{font-size:1.5rem;font-weight:700;margin-bottom:.5rem}label{display:block;font-size:.875rem;font-weight:500;margin-bottom:.25rem}input{width:100%;padding:.75rem 1rem;border:1px solid #d1d5db;border-radius:.5rem;font-size:1rem;margin-bottom:1rem}input:focus{border-color:#005196;outline:none;box-shadow:0 0 0 2px rgba(0,81,150,.2)}.btn{width:100%;padding:.75rem;background:#005196;color:#fff;border:none;border-radius:.5rem;font-size:1rem;font-weight:600;cursor:pointer}.btn:hover{background:#004178}</style>
</head><body><div class="card"><h1>Create Account</h1><p style="color:#6b7280;font-size:.875rem;margin-bottom:1.5rem">Government Services Registration</p>
<form id="signUpForm" novalidate>
<label for="name">Full Name <span style="color:#ef4444">*</span></label><input id="name" required aria-required="true">
<label for="mobile">Mobile (+91) <span style="color:#ef4444">*</span></label><input id="mobile" placeholder="98765 43210" required aria-required="true">
<label for="email">Email <span style="color:#ef4444">*</span></label><input id="email" type="email" required aria-required="true">
<label for="password">Password <span style="color:#ef4444">*</span></label><input id="password" type="password" minlength="8" required aria-required="true">
<button type="submit" class="btn">Create Account</button>
</form></div>
<script>document.getElementById('signUpForm').addEventListener('submit',function(e){e.preventDefault();alert('Account created successfully!')});</script>
</body></html>` },
  },
};

