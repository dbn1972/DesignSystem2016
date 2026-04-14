import { describe, it, expect, vi, beforeEach } from 'vitest';
import { verifyOneTimePassword, maskMobileNumber } from '../otpService';
import * as mockApiModule from '../mockApi';

vi.mock('../mockApi', async (importOriginal) => {
  const actual = await importOriginal<typeof mockApiModule>();
  return {
    ...actual,
    authApi: {
      ...actual.authApi,
      verifyOTP: vi.fn(),
    },
  };
});

const verifyOTPSpy = () => vi.mocked(mockApiModule.authApi.verifyOTP);

describe('verifyOneTimePassword', () => {
  beforeEach(() => vi.clearAllMocks());

  // ── Expired OTP sentinel ──────────────────────────────────────────────────

  it('returns expired-otp for OTP "000000" without calling API', async () => {
    const result = await verifyOneTimePassword({ identifier: '9876543210', otp: '000000' });
    expect(result.success).toBe(false);
    expect(result.state).toBe('expired-otp');
    expect(verifyOTPSpy()).not.toHaveBeenCalled();
  });

  // ── Service-unavailable sentinel ──────────────────────────────────────────

  it('returns service-unavailable for OTP "999999" without calling API', async () => {
    const result = await verifyOneTimePassword({ identifier: '9876543210', otp: '999999' });
    expect(result.success).toBe(false);
    expect(result.state).toBe('service-unavailable');
    expect(verifyOTPSpy()).not.toHaveBeenCalled();
  });

  // ── Unknown identifier ────────────────────────────────────────────────────

  it('returns invalid-otp when identifier cannot be resolved to a mobile', async () => {
    const result = await verifyOneTimePassword({ identifier: 'unknown@nowhere.com', otp: '123456' });
    expect(result.success).toBe(false);
    expect(result.state).toBe('invalid-otp');
    expect(verifyOTPSpy()).not.toHaveBeenCalled();
  });

  // ── Happy path ────────────────────────────────────────────────────────────

  it('returns verified on successful API response', async () => {
    verifyOTPSpy().mockResolvedValue({
      success: true,
      data: { verified: true, token: 'tok-abc' },
    });

    const result = await verifyOneTimePassword({ identifier: '9876543210', otp: '123456' });
    expect(result.success).toBe(true);
    expect(result.state).toBe('verified');
  });

  // ── API failure ───────────────────────────────────────────────────────────

  it('returns invalid-otp when API returns failure', async () => {
    verifyOTPSpy().mockResolvedValue({
      success: false,
      error: 'Invalid OTP',
    });

    const result = await verifyOneTimePassword({ identifier: '9876543210', otp: '654321' });
    expect(result.success).toBe(false);
    expect(result.state).toBe('invalid-otp');
  });

  it('trims whitespace from OTP before processing', async () => {
    // "  000000  " should still trigger expired-otp
    const result = await verifyOneTimePassword({ identifier: '9876543210', otp: '  000000  ' });
    expect(result.state).toBe('expired-otp');
  });
});

describe('maskMobileNumber', () => {
  it('masks middle 6 digits of a 10-digit number', () => {
    expect(maskMobileNumber('9876543210')).toBe('98XXXXXX10');
  });

  it('returns XXXXXXXXXX for non-10-digit input', () => {
    expect(maskMobileNumber('123')).toBe('XXXXXXXXXX');
    expect(maskMobileNumber('12345678901')).toBe('XXXXXXXXXX');
  });

  it('trims whitespace before masking', () => {
    expect(maskMobileNumber('  9876543210  ')).toBe('98XXXXXX10');
  });
});
