import { useNavigate } from 'react-router-dom';
import { SignIn } from '@ux4g/react-patterns/authentication';
import { authService } from '../services/auth.service';
import type { SignInCredentials, AuthenticationResult } from '@ux4g/react-patterns';

/**
 * Login page
 *
 * Uses SignIn pattern from @ux4g/react-patterns
 */
export function LoginPage() {
  const navigate = useNavigate();

  /**
   * Handle sign in
   */
  const handleSignIn = async (
    credentials: SignInCredentials
  ): Promise<AuthenticationResult> => {
    try {
      // Call authentication service
      const result = await authService.signIn(credentials);

      if (result.success) {
        // Store token (in production, use secure storage)
        localStorage.setItem('authToken', result.token || '');

        // Navigate to dashboard or redirect URL
        navigate(result.redirectUrl || '/');
      }

      return result;
    } catch (error) {
      console.error('Sign in error:', error);
      return {
        success: false,
        error: 'An unexpected error occurred. Please try again.',
      };
    }
  };

  /**
   * Handle forgot password
   */
  const handleForgotPassword = () => {
    navigate('/forgot-password');
  };

  /**
   * Handle sign up
   */
  const handleSignUp = () => {
    navigate('/register');
  };

  return (
    <SignIn
      onSignIn={handleSignIn}
      onForgotPassword={handleForgotPassword}
      onSignUp={handleSignUp}
      showRememberMe
      showMobileLogin
      branding={{
        logo: '/govt-logo.png',
        logoAlt: 'Government of India',
        serviceName: 'Digital Services Portal',
      }}
      legalLinks={{
        termsUrl: '/terms',
        privacyUrl: '/privacy',
      }}
      title="Sign In"
      subtitle="Access your government services account"
    />
  );
}
