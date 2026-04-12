import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { OTPInput } from './OTPInput';

const meta: Meta<typeof OTPInput> = {
  title: 'Components/OTPInput',
  component: OTPInput,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof OTPInput>;

export const Basic: Story = {
  args: {
    length: 6,
  },
};

export const FourDigit: Story = {
  args: {
    length: 4,
  },
};

export const AadhaarOTP: Story = {
  render: () => {
    const [otp, setOtp] = useState('');
    return (
      <div>
        <h3 style={{ marginBottom: '0.5rem' }}>Enter Aadhaar OTP</h3>
        <p style={{ marginBottom: '1rem', color: '#666' }}>
          An OTP has been sent to your registered mobile number
        </p>
        <OTPInput
          length={6}
          value={otp}
          onChange={setOtp}
          onComplete={(value) => console.log('OTP Complete:', value)}
        />
        {otp.length === 6 && (
          <p style={{ marginTop: '1rem', color: 'green' }}>
            OTP Entered: {otp}
          </p>
        )}
      </div>
    );
  },
};

export const MobileVerification: Story = {
  render: () => {
    const [otp, setOtp] = useState('');
    return (
      <div>
        <h3 style={{ marginBottom: '0.5rem' }}>Verify Mobile Number</h3>
        <p style={{ marginBottom: '1rem', color: '#666' }}>
          Enter the 4-digit code sent to +91 98765-43210
        </p>
        <OTPInput
          length={4}
          value={otp}
          onChange={setOtp}
          type="number"
        />
        <div style={{ marginTop: '1rem' }}>
          <button className="ux4g-button ux4g-button-ghost">Resend OTP</button>
        </div>
      </div>
    );
  },
};

export const PANVerification: Story = {
  render: () => {
    const [otp, setOtp] = useState('');
    const [verified, setVerified] = useState(false);

    return (
      <div>
        <h3 style={{ marginBottom: '0.5rem' }}>PAN Card Verification</h3>
        <p style={{ marginBottom: '1rem', color: '#666' }}>
          Enter OTP to verify your PAN application
        </p>
        <OTPInput
          length={6}
          value={otp}
          onChange={setOtp}
          onComplete={(value) => {
            if (value === '123456') {
              setVerified(true);
            }
          }}
        />
        {verified && (
          <div style={{ marginTop: '1rem', padding: '1rem', background: '#d4edda', borderRadius: '4px' }}>
            <span className="ux4g-badge ux4g-badge-success">✓ Verified</span>
            <p style={{ marginTop: '0.5rem', marginBottom: 0 }}>PAN verification successful</p>
          </div>
        )}
      </div>
    );
  },
};

export const DigiLockerLogin: Story = {
  render: () => {
    const [otp, setOtp] = useState('');
    return (
      <div>
        <h3 style={{ marginBottom: '0.5rem' }}>DigiLocker Login</h3>
        <p style={{ marginBottom: '1rem', color: '#666' }}>
          Enter OTP sent to your Aadhaar-linked mobile
        </p>
        <OTPInput
          length={6}
          value={otp}
          onChange={setOtp}
        />
        <button
          className="ux4g-button ux4g-button-primary"
          style={{ marginTop: '1rem', width: '100%' }}
          disabled={otp.length !== 6}
        >
          Verify & Login
        </button>
      </div>
    );
  },
};

export const WithError: Story = {
  render: () => {
    const [otp, setOtp] = useState('');
    const [error, setError] = useState(false);

    const handleComplete = (value: string) => {
      if (value !== '123456') {
        setError(true);
      } else {
        setError(false);
      }
    };

    return (
      <div>
        <h3 style={{ marginBottom: '0.5rem' }}>Enter OTP</h3>
        <p style={{ marginBottom: '1rem', color: '#666' }}>
          Use 123456 for demo (any other will show error)
        </p>
        <OTPInput
          length={6}
          value={otp}
          onChange={(value) => {
            setOtp(value);
            setError(false);
          }}
          onComplete={handleComplete}
          error={error}
        />
        {error && (
          <p style={{ marginTop: '0.5rem', color: 'red', fontSize: '14px' }}>
            Invalid OTP. Please try again.
          </p>
        )}
      </div>
    );
  },
};

export const Disabled: Story = {
  args: {
    length: 6,
    value: '123456',
    disabled: true,
  },
};

export const TwoFactorAuth: Story = {
  render: () => {
    const [otp, setOtp] = useState('');
    const [timeLeft, setTimeLeft] = useState(60);

    return (
      <div>
        <h3 style={{ marginBottom: '0.5rem' }}>Two-Factor Authentication</h3>
        <p style={{ marginBottom: '1rem', color: '#666' }}>
          Enter the 6-digit code from your authenticator app
        </p>
        <OTPInput
          length={6}
          value={otp}
          onChange={setOtp}
          type="number"
        />
        <p style={{ marginTop: '1rem', fontSize: '14px', color: '#666' }}>
          Code expires in {timeLeft} seconds
        </p>
      </div>
    );
  },
};

export const PassportVerification: Story = {
  render: () => {
    const [otp, setOtp] = useState('');
    return (
      <div>
        <h3 style={{ marginBottom: '0.5rem' }}>Passport Application Verification</h3>
        <p style={{ marginBottom: '1rem', color: '#666' }}>
          Enter OTP sent to your registered email and mobile
        </p>
        <OTPInput
          length={6}
          value={otp}
          onChange={setOtp}
        />
        <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
          <button className="ux4g-button ux4g-button-outline" style={{ flex: 1 }}>
            Resend OTP
          </button>
          <button
            className="ux4g-button ux4g-button-primary"
            style={{ flex: 1 }}
            disabled={otp.length !== 6}
          >
            Verify
          </button>
        </div>
      </div>
    );
  },
};
