/**
 * UX4G Angular Services — Mock API Service
 *
 * Simulates backend API calls with realistic delays and error scenarios.
 * Replace with real HttpClient calls in production.
 */
import { Injectable } from '@angular/core';
import { Observable, of, throwError, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import {
  SignInRequest,
  SignUpRequest,
  OtpVerifyRequest,
  ForgotPasswordRequest,
  AuthResponse,
  EligibilityRequest,
  EligibilityResponse,
  ApplicationForm,
  PaymentRequest,
  PaymentResponse,
  ApplicationTracker,
  UploadedDocument,
  PaymentSummary,
  DocumentRequirement,
} from '../models/service.models';

import {
  MOCK_USER,
  MOCK_APPLICATION_TRACKER,
  MOCK_PAYMENT_SUMMARY,
  MOCK_DOCUMENT_REQUIREMENTS,
} from './mock-data';

@Injectable({ providedIn: 'root' })
export class MockApiService {
  /** Simulate network delay (300–800ms) */
  private delay<T>(data: T, ms = 500): Observable<T> {
    const jitter = Math.random() * 300 + 300;
    return timer(ms > 0 ? ms : jitter).pipe(switchMap(() => of(data)));
  }

  // ── Auth ──────────────────────────────────────────────

  signIn(req: SignInRequest): Observable<AuthResponse> {
    if (req.email === 'fail@test.com') {
      return timer(400).pipe(
        switchMap(() =>
          throwError(() => new Error('Invalid email or password'))
        )
      );
    }
    return this.delay<AuthResponse>({
      success: true,
      token: 'mock-jwt-token-' + Date.now(),
      user: MOCK_USER,
      message: 'Sign in successful',
    });
  }

  signUp(req: SignUpRequest): Observable<AuthResponse> {
    if (req.email === 'exists@test.com') {
      return timer(400).pipe(
        switchMap(() =>
          throwError(() => new Error('An account with this email already exists'))
        )
      );
    }
    return this.delay<AuthResponse>({
      success: true,
      message: 'Account created. OTP sent to your mobile.',
      referenceId: 'REF-' + Date.now(),
    });
  }

  verifyOtp(req: OtpVerifyRequest): Observable<AuthResponse> {
    if (req.otp === '000000') {
      return timer(400).pipe(
        switchMap(() => throwError(() => new Error('Invalid OTP. Please try again.')))
      );
    }
    return this.delay<AuthResponse>({
      success: true,
      token: 'mock-jwt-token-' + Date.now(),
      user: MOCK_USER,
      message: 'OTP verified successfully',
    });
  }

  forgotPassword(req: ForgotPasswordRequest): Observable<AuthResponse> {
    return this.delay<AuthResponse>({
      success: true,
      message: `Password reset link sent to ${req.email}`,
    });
  }

  // ── Eligibility ───────────────────────────────────────

  checkEligibility(req: EligibilityRequest): Observable<EligibilityResponse> {
    const eligible = req.age >= 18 && req.nationality === 'Indian';
    return this.delay<EligibilityResponse>({
      eligible,
      reason: eligible
        ? 'You meet all eligibility criteria'
        : 'You do not meet the minimum age or nationality requirement',
      requirements: eligible
        ? ['Aadhaar Card', 'Address Proof', 'Passport Photo']
        : [],
      fees: eligible ? 649 : 0,
    });
  }

  // ── Form Flow ─────────────────────────────────────────

  submitApplication(form: ApplicationForm): Observable<{ applicationId: string }> {
    return this.delay({ applicationId: 'APP-2026-' + String(Math.floor(Math.random() * 99999)).padStart(5, '0') }, 800);
  }

  // ── Documents ─────────────────────────────────────────

  getDocumentRequirements(): Observable<DocumentRequirement[]> {
    return this.delay(MOCK_DOCUMENT_REQUIREMENTS);
  }

  uploadDocument(file: File, requirementId: string): Observable<UploadedDocument> {
    return this.delay<UploadedDocument>({
      id: 'DOC-' + Date.now(),
      name: file.name,
      type: file.type,
      size: file.size,
      status: 'uploaded',
      progress: 100,
      url: URL.createObjectURL(file),
    }, 1200);
  }

  // ── Payment ───────────────────────────────────────────

  getPaymentSummary(applicationId: string): Observable<PaymentSummary> {
    return this.delay(MOCK_PAYMENT_SUMMARY);
  }

  processPayment(req: PaymentRequest): Observable<PaymentResponse> {
    if (req.method === 'wallet') {
      return timer(600).pipe(
        switchMap(() =>
          throwError(() => new Error('Insufficient wallet balance'))
        )
      );
    }
    return this.delay<PaymentResponse>({
      success: true,
      transactionId: 'TXN-' + Date.now(),
      receiptUrl: '#',
      message: 'Payment successful',
      status: 'success',
    }, 1500);
  }

  // ── Status Tracking ───────────────────────────────────

  getApplicationStatus(applicationId: string): Observable<ApplicationTracker> {
    return this.delay({
      ...MOCK_APPLICATION_TRACKER,
      applicationId,
    });
  }
}
