import React, { useState } from 'react';
import {
  Button,
  Input,
  Field,
  Label,
  ErrorText,
  Alert,
} from '@ux4g/react-core';
import { BasePatternProps, AuthenticationResult } from '../../types/pattern.types';
import './SignIn.css';

/**
 * Sign In Pattern Props
 */
export interface SignInProps extends BasePatternProps {
  /**
   * Sign in handler
   * Should perform authentication and return result
   */
  onSignIn: (credentials: SignInCredentials) => Promise<AuthenticationResult>;

  /**
   * Forgot password handler
   */
  onForgotPassword?: () => void;

  /**
   * Sign up handler (if registration is available)
   */
  onSignUp?: () => void;

  /**
   * Whether to show "Remember me" checkbox
   * @default true
   */
  showRememberMe?: boolean;

  /**
   * Whether to show social login options
   * @default false
   */
  showSocialLogin?: boolean;

  /**
   * Social login providers
   */
  socialProviders?: ('google' | 'facebook' | 'aadhaar')[];

  /**
   * Title text
   * @default 'Sign In'
   */
  title?: string;

  /**
   * Subtitle text
   */
  subtitle?: string;

  /**
   * Whether mobile OTP login is available
   * @default false
   */
  showMobileLogin?: boolean;

  /**
   * Custom branding (logo, etc.)
   */
  branding?: {
    logo?: string;
    logoAlt?: string;
    serviceName?: string;
  };

  /**
   * Terms and privacy policy links
   */
  legalLinks?: {
    termsUrl?: string;
    privacyUrl?: string;
  };
}

/**
 * Sign in credentials
 */
export interface SignInCredentials {
  /**
   * Username or email
   */
  username: string;

  /**
   * Password
   */
  password: string;

  /**
   * Whether to remember the user
   */
  rememberMe?: boolean;
}

/**
 * UX4G Sign In Pattern
 *
 * A complete sign-in form pattern that composes core components
 * into a government service authentication flow.
 *
 * @example
 * <SignIn
 *   onSignIn={async (credentials) => {
 *     const result = await authService.signIn(credentials);
 *     return result;
 *   }}
 *   onForgotPassword={() => navigate('/forgot-password')}
 *   onSignUp={() => navigate('/sign-up')}
 *   showRememberMe
 * />
 */
export const SignIn: React.FC<SignInProps> = ({
  onSignIn,
  onForgotPassword,
  onSignUp,
  showRememberMe = true,
  showSocialLogin = false,
  socialProviders = [],
  title = 'Sign In',
  subtitle,
  showMobileLogin = false,
  branding,
  legalLinks,
  className,
  testId = 'sign-in-pattern',
}) => {
  const [credentials, setCredentials] = useState<SignInCredentials>({
    username: '',
    password: '',
    rememberMe: false,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof SignInCredentials, string>>>({});
  const [generalError, setGeneralError] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  /**
   * Validate form
   */
  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof SignInCredentials, string>> = {};

    if (!credentials.username.trim()) {
      newErrors.username = 'Username or email is required';
    }

    if (!credentials.password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /**
   * Handle form submission
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setGeneralError('');

    if (!validate()) {
      return;
    }

    setIsLoading(true);

    try {
      const result = await onSignIn(credentials);

      if (!result.success) {
        setGeneralError(result.error || 'Sign in failed. Please try again.');
      }
      // Success handling is done by parent component (e.g., redirect)
    } catch (error) {
      setGeneralError('An unexpected error occurred. Please try again later.');
      console.error('Sign in error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`ux4g-pattern-signin ${className || ''}`} data-testid={testId}>
      <div className="ux4g-pattern-signin__container">
        {/* Branding */}
        {branding && (
          <div className="ux4g-pattern-signin__branding">
            {branding.logo && (
              <img
                src={branding.logo}
                alt={branding.logoAlt || 'Service logo'}
                className="ux4g-pattern-signin__logo"
              />
            )}
            {branding.serviceName && (
              <h2 className="ux4g-pattern-signin__service-name">{branding.serviceName}</h2>
            )}
          </div>
        )}

        {/* Title */}
        <div className="ux4g-pattern-signin__header">
          <h1 className="ux4g-pattern-signin__title">{title}</h1>
          {subtitle && <p className="ux4g-pattern-signin__subtitle">{subtitle}</p>}
        </div>

        {/* General Error */}
        {generalError && (
          <Alert variant="error" dismissible onDismiss={() => setGeneralError('')}>
            {generalError}
          </Alert>
        )}

        {/* Sign In Form */}
        <form onSubmit={handleSubmit} className="ux4g-pattern-signin__form">
          {/* Username/Email Field */}
          <Field error={!!errors.username}>
            <Label htmlFor="signin-username" required>
              Username or Email
            </Label>
            <Input
              id="signin-username"
              type="text"
              name="username"
              value={credentials.username}
              onChange={(e) =>
                setCredentials({ ...credentials, username: e.target.value })
              }
              error={!!errors.username}
              disabled={isLoading}
              autoComplete="username"
              aria-describedby={errors.username ? 'signin-username-error' : undefined}
            />
            {errors.username && (
              <ErrorText id="signin-username-error">{errors.username}</ErrorText>
            )}
          </Field>

          {/* Password Field */}
          <Field error={!!errors.password}>
            <Label htmlFor="signin-password" required>
              Password
            </Label>
            <Input
              id="signin-password"
              type="password"
              name="password"
              value={credentials.password}
              onChange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })
              }
              error={!!errors.password}
              disabled={isLoading}
              autoComplete="current-password"
              aria-describedby={errors.password ? 'signin-password-error' : undefined}
            />
            {errors.password && (
              <ErrorText id="signin-password-error">{errors.password}</ErrorText>
            )}
          </Field>

          {/* Remember Me & Forgot Password */}
          <div className="ux4g-pattern-signin__options">
            {showRememberMe && (
              <label className="ux4g-pattern-signin__remember">
                <input
                  type="checkbox"
                  checked={credentials.rememberMe}
                  onChange={(e) =>
                    setCredentials({ ...credentials, rememberMe: e.target.checked })
                  }
                  disabled={isLoading}
                />
                <span>Remember me</span>
              </label>
            )}

            {onForgotPassword && (
              <button
                type="button"
                className="ux4g-pattern-signin__forgot-link"
                onClick={onForgotPassword}
                disabled={isLoading}
              >
                Forgot Password?
              </button>
            )}
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            variant="primary"
            size="lg"
            fullWidth
            loading={isLoading}
            disabled={isLoading}
          >
            {isLoading ? 'Signing In...' : 'Sign In'}
          </Button>
        </form>

        {/* Mobile Login Option */}
        {showMobileLogin && (
          <div className="ux4g-pattern-signin__divider">
            <span>or</span>
          </div>
        )}

        {showMobileLogin && (
          <Button variant="secondary" size="lg" fullWidth disabled={isLoading}>
            Sign In with Mobile OTP
          </Button>
        )}

        {/* Social Login */}
        {showSocialLogin && socialProviders.length > 0 && (
          <>
            <div className="ux4g-pattern-signin__divider">
              <span>or continue with</span>
            </div>

            <div className="ux4g-pattern-signin__social">
              {socialProviders.map((provider) => (
                <Button
                  key={provider}
                  variant="ghost"
                  className="ux4g-pattern-signin__social-button"
                  disabled={isLoading}
                >
                  {provider === 'aadhaar' ? 'Aadhaar' : provider}
                </Button>
              ))}
            </div>
          </>
        )}

        {/* Sign Up Link */}
        {onSignUp && (
          <div className="ux4g-pattern-signin__signup">
            <span>Don't have an account? </span>
            <button
              type="button"
              className="ux4g-pattern-signin__signup-link"
              onClick={onSignUp}
              disabled={isLoading}
            >
              Sign Up
            </button>
          </div>
        )}

        {/* Legal Links */}
        {legalLinks && (legalLinks.termsUrl || legalLinks.privacyUrl) && (
          <div className="ux4g-pattern-signin__legal">
            {legalLinks.termsUrl && (
              <a href={legalLinks.termsUrl} target="_blank" rel="noopener noreferrer">
                Terms of Service
              </a>
            )}
            {legalLinks.termsUrl && legalLinks.privacyUrl && <span>•</span>}
            {legalLinks.privacyUrl && (
              <a href={legalLinks.privacyUrl} target="_blank" rel="noopener noreferrer">
                Privacy Policy
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
