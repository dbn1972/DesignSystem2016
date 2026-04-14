import { describe, it, expect, vi, beforeEach } from 'vitest';
import { registerUser } from '../signUpService';
import * as mockApiModule from '../mockApi';

// Spy on authApi.signUp so we can control responses without real delays
vi.mock('../mockApi', async (importOriginal) => {
  const actual = await importOriginal<typeof mockApiModule>();
  return {
    ...actual,
    authApi: {
      ...actual.authApi,
      signUp: vi.fn(),
    },
  };
});

const signUpSpy = () => vi.mocked(mockApiModule.authApi.signUp);

describe('registerUser', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  // ── Happy path ────────────────────────────────────────────────────────────

  it('returns success with userId and otpSent on valid registration', async () => {
    signUpSpy().mockResolvedValue({
      success: true,
      data: { userId: 'user-abc', otpSent: true },
      message: 'OTP sent',
    });

    const result = await registerUser({
      fullName: 'Priya Sharma',
      mobileNumber: '9876543210',
      password: 'Secret@123',
    });

    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.userId).toBe('user-abc');
      expect(result.otpSent).toBe(true);
      expect(result.mobileNumber).toBe('9876543210');
    }
  });

  it('trims whitespace from fullName and mobileNumber before calling API', async () => {
    signUpSpy().mockResolvedValue({
      success: true,
      data: { userId: 'u1', otpSent: true },
    });

    await registerUser({
      fullName: '  Rahul Singh  ',
      mobileNumber: '  9123456789  ',
      password: 'pass',
    });

    expect(signUpSpy()).toHaveBeenCalledWith(
      expect.objectContaining({
        fullName: 'Rahul Singh',
        mobileNumber: '9123456789',
      })
    );
  });

  // ── Service-unavailable guard ─────────────────────────────────────────────

  it('returns service-unavailable without calling API when fullName contains "down"', async () => {
    const result = await registerUser({
      fullName: 'Service Down',
      mobileNumber: '9000000000',
      password: 'pass',
    });

    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.state).toBe('service-unavailable');
    }
    expect(signUpSpy()).not.toHaveBeenCalled();
  });

  // ── Duplicate mobile ──────────────────────────────────────────────────────

  it('returns mobile-already-registered when API error contains "already"', async () => {
    signUpSpy().mockResolvedValue({
      success: false,
      error: 'Mobile number is already registered',
    });

    const result = await registerUser({
      fullName: 'New User',
      mobileNumber: '9876543210',
      password: 'pass',
    });

    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.state).toBe('mobile-already-registered');
    }
  });

  // ── Generic validation error ──────────────────────────────────────────────

  it('returns validation-error for other API failures', async () => {
    signUpSpy().mockResolvedValue({
      success: false,
      error: 'Invalid mobile number format',
    });

    const result = await registerUser({
      fullName: 'Test User',
      mobileNumber: '123',
      password: 'pass',
    });

    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.state).toBe('validation-error');
    }
  });

  it('returns validation-error when API returns success:false with no data', async () => {
    signUpSpy().mockResolvedValue({ success: false });

    const result = await registerUser({
      fullName: 'Test User',
      mobileNumber: '9000000001',
      password: 'pass',
    });

    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.state).toBe('validation-error');
    }
  });
});
