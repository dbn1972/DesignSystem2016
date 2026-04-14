import { describe, it, expect, vi, beforeEach } from 'vitest';
import {
  resolveIdentifierToMobile,
  requestPasswordReset,
  completePasswordReset,
} from '../forgotPasswordService';
import * as mockApiModule from '../mockApi';

vi.mock('../mockApi', async (importOriginal) => {
  const actual = await importOriginal<typeof mockApiModule>();
  return {
    ...actual,
    authApi: {
      ...actual.authApi,
      requestPasswordReset: vi.fn(),
      resetPassword: vi.fn(),
    },
  };
});

const resetSpy = () => vi.mocked(mockApiModule.authApi.requestPasswordReset);
const resetPwSpy = () => vi.mocked(mockApiModule.authApi.resetPassword);

beforeEach(() => vi.clearAllMocks());

// ── resolveIdentifierToMobile ─────────────────────────────────────────────────

describe('resolveIdentifierToMobile', () => {
  it('returns mobile number as-is for 10-digit mobile', () => {
    expect(resolveIdentifierToMobile('9876543210')).toBe('9876543210');
  });

  it('resolves known email to mobile', () => {
    expect(resolveIdentifierToMobile('priya.sharma@example.com')).toBe('9876543210');
  });

  it('resolves known userId to mobile', () => {
    expect(resolveIdentifierToMobile('PRIYA001')).toBe('9876543210');
    expect(resolveIdentifierToMobile('DEMOUSER')).toBe('9876543210');
  });

  it('returns empty string for unknown identifier', () => {
    expect(resolveIdentifierToMobile('unknown@nowhere.com')).toBe('');
    expect(resolveIdentifierToMobile('UNKNOWN_ID')).toBe('');
  });

  it('trims whitespace before resolving', () => {
    expect(resolveIdentifierToMobile('  9876543210  ')).toBe('9876543210');
  });

  it('is case-insensitive for email lookup', () => {
    expect(resolveIdentifierToMobile('PRIYA.SHARMA@EXAMPLE.COM')).toBe('9876543210');
  });

  it('is case-insensitive for userId lookup', () => {
    expect(resolveIdentifierToMobile('priya001')).toBe('9876543210');
  });
});

// ── requestPasswordReset ──────────────────────────────────────────────────────

describe('requestPasswordReset', () => {
  it('returns service-unavailable without calling API when identifier contains "down"', async () => {
    const result = await requestPasswordReset('service.down@test.com');
    expect(result.success).toBe(false);
    expect(result.state).toBe('service-unavailable');
    expect(resetSpy()).not.toHaveBeenCalled();
  });

  it('returns identifier-not-found for unknown identifier', async () => {
    const result = await requestPasswordReset('unknown@nowhere.com');
    expect(result.success).toBe(false);
    expect(result.state).toBe('identifier-not-found');
    expect(resetSpy()).not.toHaveBeenCalled();
  });

  it('calls API with resolved mobile and returns success', async () => {
    resetSpy().mockResolvedValue({
      success: true,
      data: { otpSent: true },
      message: 'OTP sent',
    });

    const result = await requestPasswordReset('9876543210');
    expect(result.success).toBe(true);
    expect(result.mobileNumber).toBe('9876543210');
    expect(resetSpy()).toHaveBeenCalledWith('9876543210');
  });

  it('returns identifier-not-found when API fails', async () => {
    resetSpy().mockResolvedValue({ success: false, error: 'Not found' });

    const result = await requestPasswordReset('9876543210');
    expect(result.success).toBe(false);
    expect(result.state).toBe('identifier-not-found');
  });
});

// ── completePasswordReset ─────────────────────────────────────────────────────

describe('completePasswordReset', () => {
  it('returns identifier-not-found for unknown identifier', async () => {
    const result = await completePasswordReset({
      identifier: 'unknown@nowhere.com',
      otp: '123456',
      newPassword: 'NewPass@123',
    });
    expect(result.success).toBe(false);
    expect(result.state).toBe('identifier-not-found');
  });

  it('returns expired-otp for OTP "000000"', async () => {
    const result = await completePasswordReset({
      identifier: '9876543210',
      otp: '000000',
      newPassword: 'NewPass@123',
    });
    expect(result.success).toBe(false);
    expect(result.state).toBe('expired-otp');
    expect(resetPwSpy()).not.toHaveBeenCalled();
  });

  it('returns reset-success on valid OTP and known identifier', async () => {
    resetPwSpy().mockResolvedValue({
      success: true,
      data: { success: true },
      message: 'Password reset successfully',
    });

    const result = await completePasswordReset({
      identifier: '9876543210',
      otp: '123456',
      newPassword: 'NewPass@123',
    });
    expect(result.success).toBe(true);
    expect(result.state).toBe('reset-success');
  });

  it('returns invalid-otp when API rejects the OTP', async () => {
    resetPwSpy().mockResolvedValue({ success: false, error: 'Invalid OTP' });

    const result = await completePasswordReset({
      identifier: '9876543210',
      otp: '654321',
      newPassword: 'NewPass@123',
    });
    expect(result.success).toBe(false);
    expect(result.state).toBe('invalid-otp');
  });
});
