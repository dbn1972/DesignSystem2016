import type {
  SignInCredentials,
  AuthenticationResult,
  OTPVerificationResult,
} from '@ux4g/react-patterns';

/**
 * Authentication Service
 *
 * Mock implementation - Replace with real API calls
 */

// Simulate API delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const authService = {
  /**
   * Sign in with credentials
   */
  async signIn(credentials: SignInCredentials): Promise<AuthenticationResult> {
    // Simulate API call
    await delay(1000);

    // Mock validation - Replace with real API call
    if (credentials.username === 'demo' && credentials.password === 'demo123') {
      return {
        success: true,
        userId: 'user-123',
        token: 'mock-jwt-token',
        redirectUrl: '/',
      };
    }

    return {
      success: false,
      error: 'Invalid username or password',
    };
  },

  /**
   * Sign out
   */
  async signOut(): Promise<void> {
    // Simulate API call
    await delay(500);

    // Clear local storage
    localStorage.removeItem('authToken');
  },

  /**
   * Verify OTP
   */
  async verifyOTP(otp: string): Promise<OTPVerificationResult> {
    // Simulate API call
    await delay(1000);

    // Mock validation - Replace with real API call
    if (otp === '123456') {
      return {
        verified: true,
        token: 'mock-jwt-token',
      };
    }

    return {
      verified: false,
      error: 'Invalid OTP',
    };
  },

  /**
   * Resend OTP
   */
  async resendOTP(): Promise<void> {
    // Simulate API call
    await delay(500);

    console.log('OTP resent');
  },

  /**
   * Check if user is authenticated
   */
  isAuthenticated(): boolean {
    return !!localStorage.getItem('authToken');
  },

  /**
   * Get current user
   */
  async getCurrentUser() {
    // Simulate API call
    await delay(500);

    if (!this.isAuthenticated()) {
      return null;
    }

    // Mock user data - Replace with real API call
    return {
      id: 'user-123',
      name: 'Demo User',
      email: 'demo@example.com',
    };
  },
};
