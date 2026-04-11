import React, { useState, useEffect, useRef } from 'react';
import { Button, Alert } from '@ux4g/react-core';
import { BasePatternProps, OTPVerificationResult } from '../../types/pattern.types';
import './OTPVerification.css';

/**
 * OTP Verification Pattern Props
 */
export interface OTPVerificationProps extends BasePatternProps {
  /**
   * OTP verification handler
   */
  onVerify: (otp: string) => Promise<OTPVerificationResult>;

  /**
   * Resend OTP handler
   */
  onResend?: () => Promise<void>;

  /**
   * Cancel/back handler
   */
  onCancel?: () => void;

  /**
   * Number of OTP digits
   * @default 6
   */
  otpLength?: number;

  /**
   * Recipient (masked phone or email)
   * @example '+91 ******* 789'
   */
  recipient?: string;

  /**
   * Resend timeout in seconds
   * @default 30
   */
  resendTimeout?: number;

  /**
   * Title text
   * @default 'Verify OTP'
   */
  title?: string;

  /**
   * Instruction text
   */
  instruction?: string;

  /**
   * Whether OTP is for mobile or email
   * @default 'mobile'
   */
  verificationType?: 'mobile' | 'email';
}

/**
 * UX4G OTP Verification Pattern
 *
 * A complete OTP verification flow with resend functionality,
 * timer, and accessibility features.
 *
 * @example
 * <OTPVerification
 *   recipient="+91 ******* 789"
 *   onVerify={async (otp) => {
 *     const result = await verifyOTP(otp);
 *     return result;
 *   }}
 *   onResend={async () => {
 *     await resendOTP();
 *   }}
 *   onCancel={() => navigate(-1)}
 * />
 */
export const OTPVerification: React.FC<OTPVerificationProps> = ({
  onVerify,
  onResend,
  onCancel,
  otpLength = 6,
  recipient,
  resendTimeout = 30,
  title = 'Verify OTP',
  instruction,
  verificationType = 'mobile',
  className,
  testId = 'otp-verification-pattern',
}) => {
  const [otp, setOtp] = useState<string[]>(Array(otpLength).fill(''));
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [resendTimer, setResendTimer] = useState(resendTimeout);
  const [canResend, setCanResend] = useState(false);

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  /**
   * Timer for resend countdown
   */
  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [resendTimer]);

  /**
   * Focus first input on mount
   */
  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  /**
   * Handle OTP input change
   */
  const handleChange = (index: number, value: string) => {
    // Only allow digits
    if (value && !/^\d$/.test(value)) {
      return;
    }

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setError('');

    // Auto-focus next input
    if (value && index < otpLength - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    // Auto-submit when all digits are entered
    if (newOtp.every((digit) => digit !== '') && index === otpLength - 1) {
      handleVerify(newOtp.join(''));
    }
  };

  /**
   * Handle keydown (backspace, arrow keys)
   */
  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace') {
      if (!otp[index] && index > 0) {
        // Focus previous input if current is empty
        inputRefs.current[index - 1]?.focus();
      }
    } else if (e.key === 'ArrowLeft' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === 'ArrowRight' && index < otpLength - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  /**
   * Handle paste
   */
  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').trim();
    const digits = pastedData.replace(/\D/g, '').slice(0, otpLength).split('');

    if (digits.length > 0) {
      const newOtp = [...otp];
      digits.forEach((digit, index) => {
        if (index < otpLength) {
          newOtp[index] = digit;
        }
      });
      setOtp(newOtp);

      // Focus last filled input
      const lastFilledIndex = Math.min(digits.length - 1, otpLength - 1);
      inputRefs.current[lastFilledIndex]?.focus();

      // Auto-submit if complete
      if (digits.length === otpLength) {
        handleVerify(newOtp.join(''));
      }
    }
  };

  /**
   * Handle OTP verification
   */
  const handleVerify = async (otpValue: string) => {
    if (otpValue.length !== otpLength) {
      setError('Please enter the complete OTP');
      return;
    }

    setIsLoading(true);
    setError('');
    setSuccess('');

    try {
      const result = await onVerify(otpValue);

      if (result.verified) {
        setSuccess('OTP verified successfully!');
        // Success handling is done by parent component (e.g., redirect)
      } else {
        setError(result.error || 'Invalid OTP. Please try again.');
        setOtp(Array(otpLength).fill(''));
        inputRefs.current[0]?.focus();
      }
    } catch (error) {
      setError('An unexpected error occurred. Please try again.');
      console.error('OTP verification error:', error);
      setOtp(Array(otpLength).fill(''));
      inputRefs.current[0]?.focus();
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Handle resend OTP
   */
  const handleResend = async () => {
    if (!onResend || !canResend) return;

    setIsLoading(true);
    setError('');
    setSuccess('');

    try {
      await onResend();
      setSuccess('OTP has been resent successfully');
      setResendTimer(resendTimeout);
      setCanResend(false);
      setOtp(Array(otpLength).fill(''));
      inputRefs.current[0]?.focus();
    } catch (error) {
      setError('Failed to resend OTP. Please try again.');
      console.error('Resend OTP error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const defaultInstruction = instruction || `We've sent a ${otpLength}-digit OTP to ${recipient || `your ${verificationType}`}`;

  return (
    <div className={`ux4g-pattern-otp ${className || ''}`} data-testid={testId}>
      <div className="ux4g-pattern-otp__container">
        {/* Header */}
        <div className="ux4g-pattern-otp__header">
          <h1 className="ux4g-pattern-otp__title">{title}</h1>
          <p className="ux4g-pattern-otp__instruction">{defaultInstruction}</p>
        </div>

        {/* Success Message */}
        {success && (
          <Alert variant="success" className="ux4g-pattern-otp__alert">
            {success}
          </Alert>
        )}

        {/* Error Message */}
        {error && (
          <Alert variant="error" dismissible onDismiss={() => setError('')} className="ux4g-pattern-otp__alert">
            {error}
          </Alert>
        )}

        {/* OTP Input */}
        <div className="ux4g-pattern-otp__inputs" onPaste={handlePaste}>
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              disabled={isLoading}
              className="ux4g-pattern-otp__input"
              aria-label={`OTP digit ${index + 1}`}
              autoComplete="one-time-code"
            />
          ))}
        </div>

        {/* Verify Button */}
        <Button
          variant="primary"
          size="lg"
          fullWidth
          loading={isLoading}
          disabled={isLoading || otp.some((digit) => !digit)}
          onClick={() => handleVerify(otp.join(''))}
          className="ux4g-pattern-otp__verify-button"
        >
          {isLoading ? 'Verifying...' : 'Verify OTP'}
        </Button>

        {/* Resend OTP */}
        {onResend && (
          <div className="ux4g-pattern-otp__resend">
            {canResend ? (
              <button
                type="button"
                className="ux4g-pattern-otp__resend-button"
                onClick={handleResend}
                disabled={isLoading}
              >
                Resend OTP
              </button>
            ) : (
              <span className="ux4g-pattern-otp__resend-timer">
                Resend OTP in {resendTimer}s
              </span>
            )}
          </div>
        )}

        {/* Cancel Button */}
        {onCancel && (
          <Button
            variant="ghost"
            size="md"
            fullWidth
            onClick={onCancel}
            disabled={isLoading}
            className="ux4g-pattern-otp__cancel-button"
          >
            Cancel
          </Button>
        )}
      </div>
    </div>
  );
};
