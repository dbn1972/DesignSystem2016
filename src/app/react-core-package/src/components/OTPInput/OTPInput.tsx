/**
 * OTPInput Component
 * OTP code input field
 *
 * @example
 * ```tsx
 * <OTPInput
 *   length={6}
 *   value={otp}
 *   onChange={setOtp}
 *   onComplete={(value) => verifyOTP(value)}
 * />
 * ```
 */

import { useState, useRef, useEffect, KeyboardEvent } from 'react';
import { cn } from '../../utils/cn';
import { OTPInputProps } from './OTPInput.types';

export function OTPInput({
  length = 6,
  value: controlledValue,
  defaultValue = '',
  onChange,
  onComplete,
  type = 'text',
  autoFocus = true,
  disabled = false,
  error = false,
  className,
  ...props
}: OTPInputProps) {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const value = controlledValue ?? internalValue;
  const isControlled = controlledValue !== undefined;

  const digits = value.split('').slice(0, length);
  const paddedDigits = [...digits, ...Array(length - digits.length).fill('')];

  useEffect(() => {
    if (autoFocus && inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, [autoFocus]);

  const handleChange = (index: number, digit: string) => {
    if (disabled) return;

    const newDigit = digit.slice(-1);
    const newDigits = [...paddedDigits];
    newDigits[index] = newDigit;
    const newValue = newDigits.join('');

    if (!isControlled) {
      setInternalValue(newValue);
    }
    onChange?.(newValue);

    if (newDigit && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    if (newValue.length === length) {
      onComplete?.(newValue);
    }
  };

  const handleKeyDown = (index: number, event: KeyboardEvent) => {
    if (event.key === 'Backspace' && !paddedDigits[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (event.key === 'ArrowLeft' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (event.key === 'ArrowRight' && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (event: React.ClipboardEvent) => {
    event.preventDefault();
    const pastedData = event.clipboardData.getData('text').slice(0, length);

    if (!isControlled) {
      setInternalValue(pastedData);
    }
    onChange?.(pastedData);

    if (pastedData.length === length) {
      onComplete?.(pastedData);
      inputRefs.current[length - 1]?.focus();
    } else {
      inputRefs.current[Math.min(pastedData.length, length - 1)]?.focus();
    }
  };

  return (
    <div
      className={cn(
        'ux4g-otp-input',
        error && 'ux4g-otp-input-error',
        disabled && 'ux4g-otp-input-disabled',
        className
      )}
      {...props}
    >
      {paddedDigits.map((digit, index) => (
        <input
          key={index}
          ref={(el) => (inputRefs.current[index] = el)}
          type={type}
          inputMode={type === 'number' || type === 'tel' ? 'numeric' : 'text'}
          value={digit}
          onChange={(e) => handleChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          onPaste={handlePaste}
          disabled={disabled}
          maxLength={1}
          className="ux4g-otp-input-box"
          aria-label={`Digit ${index + 1} of ${length}`}
        />
      ))}
    </div>
  );
}

OTPInput.displayName = 'OTPInput';
