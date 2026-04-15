/**
 * CAPTCHA Component Documentation Page
 * Complete documentation for the CAPTCHA component with examples, code downloads, and comparisons
 */

import React, { useState } from 'react';
import { ComponentDocumentation } from '../components/ComponentDocumentation';
import { RefreshCw, Volume2, Eye, Shield } from 'lucide-react';

// Import the actual CAPTCHA component for live preview
const CaptchaPreview = ({ type, difficulty, theme, children, ...props }: any) => {
  const [refreshKey, setRefreshKey] = useState(0);

  return (
    <div
      className={`inline-block border-2 rounded-lg p-4 ${
        theme === 'dark' ? 'bg-gray-800 border-gray-600' : 'bg-card border-border'
      }`}
      {...props}
    >
      {type === 'image' && (
        <div className="space-y-3">
          <div className="flex items-center justify-between mb-2">
            <p className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-200' : 'text-muted-foreground'}`}>
              Select all images with traffic lights
            </p>
            <button
              onClick={() => setRefreshKey(prev => prev + 1)}
              className="p-1 rounded hover:bg-muted dark:hover:bg-gray-700"
              aria-label="Refresh CAPTCHA"
            >
              <RefreshCw size={16} className={theme === 'dark' ? 'text-gray-300' : 'text-muted-foreground'} />
            </button>
          </div>
          <div className="grid grid-cols-3 gap-1 w-64 h-64 bg-gray-200">
            {[...Array(9)].map((_, i) => (
              <div
                key={`${refreshKey}-${i}`}
                className="bg-gray-300 hover:bg-gray-400 cursor-pointer border border-gray-400"
              />
            ))}
          </div>
          <button className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700">
            <Volume2 size={14} />
            <span>Audio challenge</span>
          </button>
        </div>
      )}
      {type === 'audio' && (
        <div className="space-y-3 w-64">
          <p className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-200' : 'text-muted-foreground'}`}>
            Type the numbers you hear
          </p>
          <div className="flex items-center gap-2 p-3 bg-muted dark:bg-gray-700 rounded">
            <Volume2 size={20} className={theme === 'dark' ? 'text-gray-300' : 'text-muted-foreground'} />
            <button className="text-sm text-blue-600 hover:text-blue-700">Play audio</button>
          </div>
          <input
            type="text"
            placeholder="Enter numbers"
            className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700">
            <Eye size={14} />
            <span>Visual challenge</span>
          </button>
        </div>
      )}
      {type === 'math' && (
        <div className="space-y-3 w-64">
          <p className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-200' : 'text-muted-foreground'}`}>
            Solve the math problem
          </p>
          <div className="flex items-center gap-3 p-4 bg-muted dark:bg-gray-700 rounded">
            <span className={`text-2xl font-bold ${theme === 'dark' ? 'text-gray-200' : 'text-foreground'}`}>
              {difficulty === 'easy' ? '5 + 3' : difficulty === 'hard' ? '17 × 4' : '12 - 7'} = ?
            </span>
          </div>
          <input
            type="text"
            placeholder="Enter answer"
            className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      )}
      {type === 'puzzle' && (
        <div className="space-y-3 w-64">
          <p className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-200' : 'text-muted-foreground'}`}>
            Slide to verify
          </p>
          <div className="relative w-full h-12 bg-gray-200 rounded overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-12 bg-blue-500 flex items-center justify-center cursor-move">
              <Shield size={20} className="text-white" />
            </div>
            <div className="flex items-center justify-center h-full">
              <span className="text-sm text-gray-500">Slide to verify</span>
            </div>
          </div>
        </div>
      )}
      {children}
    </div>
  );
};

function CaptchaPlayground() {
  const [type, setType] = React.useState('image');

  return (
    <div className="grid lg:grid-cols-[1fr_300px] gap-6">
      <div className="flex items-center justify-center min-h-[160px] rounded-xl border-2 border-dashed border-border bg-background p-8">
        <div className="text-center space-y-3">
          <div className="text-4xl">🧩</div>
          <p className="text-sm text-muted-foreground">Live Captcha preview with current settings</p>
          <div className="flex flex-wrap gap-2 justify-center">
            <span className="px-2 py-0.5 rounded-full text-xs bg-muted text-muted-foreground font-medium">{type}</span>
          </div>
        </div>
      </div>
      <div className="space-y-4 text-sm">
          <div>
            <label className="block font-semibold text-foreground mb-1">Type</label>
            <select value={type} onChange={e => setType(e.target.value)} className="w-full border border-border rounded px-3 py-2 bg-card text-foreground">
              <option value="image">image</option>
              <option value="audio">audio</option>
              <option value="math">math</option>
            </select>
          </div>
        <div className="p-3 rounded-lg bg-muted/50 border border-border">
          <p className="font-mono text-xs text-muted-foreground break-all">
            {`<Captcha ${type} />`}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ComponentCaptchaPage() {
  return (
    <ComponentDocumentation
      name="CAPTCHA"
      description="Security component for bot prevention in government service applications. Supports multiple CAPTCHA types including image recognition, audio challenges, math problems, and puzzle verification with full accessibility compliance."
      category="Government Services"
      maturity="stable"
      tier="core"
      since="v1.0.0"
      updated="v2.3.0"

      preview={
        <div className="w-full max-w-2xl">
          <CaptchaPreview />
        </div>
      }

      props={[
        {
          name: 'type',
          type: "'image' | 'audio' | 'math' | 'puzzle'",
          default: "'image'",
          required: false,
          description: 'Type of CAPTCHA challenge. Image for visual recognition, audio for hearing-based verification, math for simple arithmetic, puzzle for interactive sliding verification.',
        },
        {
          name: 'difficulty',
          type: "'easy' | 'medium' | 'hard'",
          default: "'medium'",
          required: false,
          description: 'Difficulty level of the CAPTCHA challenge. Affects complexity of images, audio clarity, or math operations.',
        },
        {
          name: 'onVerify',
          type: '(token: string, success: boolean) => void',
          required: true,
          description: 'Callback function triggered when verification is attempted. Returns verification token and success status.',
        },
        {
          name: 'refreshable',
          type: 'boolean',
          default: 'true',
          required: false,
          description: 'Whether users can request a new challenge. Required for accessibility.',
        },
        {
          name: 'audioEnabled',
          type: 'boolean',
          default: 'true',
          required: false,
          description: 'Whether audio alternative is available for visual challenges. Required for WCAG compliance.',
        },
        {
          name: 'accessibleAlternative',
          type: 'boolean',
          default: 'true',
          required: false,
          description: 'Provides accessible alternatives for users with disabilities (audio for visual, visual for audio).',
        },
        {
          name: 'siteKey',
          type: 'string',
          required: true,
          description: 'Site key for third-party CAPTCHA services (reCAPTCHA, hCaptcha). Obtained from service provider.',
        },
        {
          name: 'theme',
          type: "'light' | 'dark'",
          default: "'light'",
          required: false,
          description: 'Visual theme of the CAPTCHA component.',
        },
        {
          name: 'language',
          type: 'string',
          default: "'en'",
          required: false,
          description: 'Language code for CAPTCHA instructions and challenges.',
        },
        {
          name: 'onExpire',
          type: '() => void',
          required: false,
          description: 'Callback triggered when CAPTCHA token expires (typically after 2 minutes).',
        },
        {
          name: 'onError',
          type: '(error: Error) => void',
          required: false,
          description: 'Error handler for CAPTCHA loading or verification failures.',
        },
      ]}

      examples={[
        {
          title: 'Image CAPTCHA',
          description: 'Traditional image-based CAPTCHA with object recognition challenge.',
          code: `import { Captcha } from '@ux4g/react-core';

function Example() {
  const handleVerify = (token: string, success: boolean) => {
    if (success) {
      console.log('Verification successful:', token);
      // Proceed with form submission
    } else {
      console.log('Verification failed');
    }
  };

  return (
    <Captcha
      type="image"
      difficulty="medium"
      onVerify={handleVerify}
      siteKey="your-site-key"
      audioEnabled={true}
      refreshable={true}

      useCases={[
        { title: "Form Submission Protection", description: "CAPTCHA before form submission.", scenario: "Certificate application final step.", implementation: "<Captcha onVerify={handleVerify} />" },
        { title: "Login Protection", description: "CAPTCHA on login after failed attempts.", scenario: "User login with brute-force protection.", implementation: "<Captcha type=\"image\" onVerify={setVerified} />" },
      ]}

      additionalContent={
        <>
          {/* When to use */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">When to use this component</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-green-700 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-700 text-sm">✓</span>
                  Do use Captcha when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Form submission bot protection</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Login brute-force prevention</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Public-facing forms without authentication</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>High-value transaction verification</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-red-700 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-700 text-sm">✗</span>
                  Don&apos;t use Captcha when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Authenticated user actions — already verified</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Internal admin tools — use other auth</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Low-risk forms — adds friction</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Accessibility-critical flows — consider alternatives</li>
                </ul>
              </div>
            </div>
          </section>


          {/* Do / Don't */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Do / Don&apos;t</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-2 border-green-200 rounded-lg overflow-hidden">
                <div className="bg-green-50 px-4 py-2 text-sm font-bold text-green-800">✓ Do</div>
                <div className="p-4">
                  <p className="text-sm text-muted-foreground">Provide audio CAPTCHA alternative for accessibility (WCAG 1.1.1).</p>
                </div>
              </div>
              <div className="border-2 border-red-200 rounded-lg overflow-hidden">
                <div className="bg-red-50 px-4 py-2 text-sm font-bold text-red-800">✗ Don&apos;t</div>
                <div className="p-4">
                  <p className="text-sm text-muted-foreground">Don&apos;t use CAPTCHA on authenticated user actions — they are already verified.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Interactive Playground */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">Interactive Playground</h2>
            <p className="text-sm text-muted-foreground mb-6">Adjust the controls to preview different Captcha configurations in real time.</p>
            <CaptchaPlayground />
          </section>

          {/* Related components */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Related Components</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <a href="/components/button" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Button</h3>
                <p className="text-sm text-muted-foreground">For form submission</p>
              </a>
              <a href="/components/otpinput" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">OTPInput</h3>
                <p className="text-sm text-muted-foreground">For verification codes</p>
              </a>
              <a href="/components/alert" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Alert</h3>
                <p className="text-sm text-muted-foreground">For error messages</p>
              </a>
            </div>
          </section>

          {/* Changelog */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Changelog</h2>
            <div className="space-y-4">
                <div className="border-l-2 border-primary pl-4">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-sm font-mono font-bold text-primary">v2.0.0</span>
                    <span className="text-xs text-muted-foreground">March 2026</span>
                  </div>
                  <ul className="space-y-1">
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Added audio CAPTCHA for accessibility</li>
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Added refresh option</li>
                  </ul>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-sm font-mono font-bold text-primary">v1.0.0</span>
                    <span className="text-xs text-muted-foreground">October 2025</span>
                  </div>
                  <ul className="space-y-1">
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Initial release with image CAPTCHA</li>
                  </ul>
                </div>
            </div>
          </section>

          {/* Research */}
          <section className="bg-card rounded-lg border border-border p-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">Research on this component</h2>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <h3 className="font-semibold text-foreground mb-1 text-sm">CAPTCHA accessibility</h3>
                <p className="text-sm text-muted-foreground">Audio CAPTCHA alternatives are required by WCAG 1.1.1. Image-only CAPTCHA excludes 15% of users with visual impairments.</p>
              </div>
            </div>
          </section>
        </>
      }
    />
  );
}`,
          preview: (
            <div className="flex justify-center">
              <CaptchaPreview type="image" difficulty="medium" theme="light" />
            </div>
          ),
        },
        {
          title: 'Audio CAPTCHA',
          description: 'Audio-based CAPTCHA for visually impaired users or as alternative to image CAPTCHA.',
          code: `import { Captcha } from '@ux4g/react-core';

function Example() {
  const handleVerify = (token: string, success: boolean) => {
    if (success) {
      console.log('Audio verification successful:', token);
    }
  };

  return (
    <Captcha
      type="audio"
      difficulty="easy"
      onVerify={handleVerify}
      siteKey="your-site-key"
      accessibleAlternative={true}
    />
  );
}`,
          preview: (
            <div className="flex justify-center">
              <CaptchaPreview type="audio" difficulty="easy" theme="light" />
            </div>
          ),
        },
        {
          title: 'Math CAPTCHA',
          description: 'Simple arithmetic challenge for basic bot prevention.',
          code: `import { Captcha } from '@ux4g/react-core';

function Example() {
  const handleVerify = (token: string, success: boolean) => {
    if (success) {
      console.log('Math challenge solved:', token);
    }
  };

  return (
    <Captcha
      type="math"
      difficulty="easy"
      onVerify={handleVerify}
      siteKey="your-site-key"
      refreshable={true}
    />
  );
}`,
          preview: (
            <div className="flex justify-center">
              <CaptchaPreview type="math" difficulty="easy" theme="light" />
            </div>
          ),
        },
        {
          title: 'Puzzle CAPTCHA',
          description: 'Interactive sliding puzzle verification for modern user experience.',
          code: `import { Captcha } from '@ux4g/react-core';

function Example() {
  const handleVerify = (token: string, success: boolean) => {
    if (success) {
      console.log('Puzzle solved:', token);
      // Enable form submission
    }
  };

  return (
    <Captcha
      type="puzzle"
      difficulty="medium"
      onVerify={handleVerify}
      siteKey="your-site-key"
      theme="light"
    />
  );
}`,
          preview: (
            <div className="flex justify-center">
              <CaptchaPreview type="puzzle" difficulty="medium" theme="light" />
            </div>
          ),
        },
        {
          title: 'reCAPTCHA v3 Integration',
          description: 'Invisible reCAPTCHA v3 with score-based verification.',
          code: `import { Captcha } from '@ux4g/react-core';
import { useEffect } from 'react';

function Example() {
  const handleVerify = (token: string, success: boolean) => {
    // Send token to backend for score verification
    fetch('/api/verify-captcha', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.score >= 0.5) {
          console.log('reCAPTCHA v3 passed');
        } else {
          console.log('Suspicious activity detected');
        }
      });
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <Captcha
        type="invisible"
        version="v3"
        siteKey="your-recaptcha-v3-site-key"
        onVerify={handleVerify}
        action="submit_application"
      />
      <button type="submit">Submit Application</button>
    </form>
  );
}`,
          preview: (
            <div className="flex justify-center">
              <div className="p-4 border-2 border-dashed border-border rounded-lg">
                <p className="text-sm text-muted-foreground mb-3">Invisible reCAPTCHA v3</p>
                <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                  Submit Application
                </button>
              </div>
            </div>
          ),
        },
        {
          title: 'hCaptcha Integration',
          description: 'Privacy-focused hCaptcha integration for government services.',
          code: `import { Captcha } from '@ux4g/react-core';

function Example() {
  const handleVerify = (token: string, success: boolean) => {
    if (success) {
      // Verify token on backend
      fetch('/api/verify-hcaptcha', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token }),
      })
        .then(res => res.json())
        .then(data => {
          if (data.verified) {
            console.log('hCaptcha verification successful');
          }
        });
    }
  };

  const handleError = (error: Error) => {
    console.error('hCaptcha error:', error);
  };

  return (
    <Captcha
      provider="hcaptcha"
      siteKey="your-hcaptcha-site-key"
      onVerify={handleVerify}
      onError={handleError}
      theme="light"
      size="normal"
    />
  );
}`,
          preview: (
            <div className="flex justify-center">
              <div className="p-4 border-2 border-border rounded-lg bg-card">
                <div className="flex items-center gap-2 mb-2">
                  <Shield size={20} className="text-muted-foreground" />
                  <p className="text-sm font-medium text-muted-foreground">hCaptcha</p>
                </div>
                <div className="w-64 h-20 bg-muted rounded flex items-center justify-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm text-muted-foreground">I am human</span>
                </div>
              </div>
            </div>
          ),
        },
      ]}

      reactCode={{
        component: `import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { cn } from '../../utils/cn';
import { CaptchaProps } from './Captcha.types';

export const Captcha = forwardRef<HTMLDivElement, CaptchaProps>(
  (
    {
      className,
      type = 'image',
      difficulty = 'medium',
      onVerify,
      refreshable = true,
      audioEnabled = true,
      accessibleAlternative = true,
      siteKey,
      theme = 'light',
      language = 'en',
      onExpire,
      onError,
      provider = 'recaptcha',
      version = 'v2',
      size = 'normal',
      action,
      ...props
    },
    ref
  ) => {
    const captchaRef = useRef<HTMLDivElement>(null);
    const [currentType, setCurrentType] = useState(type);
    const [refreshKey, setRefreshKey] = useState(0);

    useEffect(() => {
      // Load CAPTCHA script based on provider
      const loadCaptchaScript = () => {
        if (provider === 'recaptcha') {
          const script = document.createElement('script');
          script.src = \`https://www.google.com/recaptcha/api.js?hl=\${language}\`;
          script.async = true;
          script.defer = true;
          document.body.appendChild(script);
        } else if (provider === 'hcaptcha') {
          const script = document.createElement('script');
          script.src = \`https://js.hcaptcha.com/1/api.js?hl=\${language}\`;
          script.async = true;
          script.defer = true;
          document.body.appendChild(script);
        }
      };

      loadCaptchaScript();

      return () => {
        // Cleanup
      };
    }, [provider, language]);

    const handleRefresh = () => {
      setRefreshKey(prev => prev + 1);
      if (captchaRef.current && (window as any).grecaptcha) {
        (window as any).grecaptcha.reset();
      }
    };

    const toggleAlternative = () => {
      if (accessibleAlternative) {
        setCurrentType(currentType === 'image' ? 'audio' : 'image');
      }
    };

    const handleVerification = (token: string) => {
      onVerify(token, true);
    };

    const handleExpiration = () => {
      if (onExpire) {
        onExpire();
      }
    };

    const handleErrorCallback = (error: Error) => {
      if (onError) {
        onError(error);
      }
    };

    return (
      <div
        ref={ref}
        className={cn(
          'captcha-container',
          \`captcha-theme-\${theme}\`,
          \`captcha-type-\${currentType}\`,
          className
        )}
        {...props}
      >
        <div
          ref={captchaRef}
          className="g-recaptcha"
          data-sitekey={siteKey}
          data-theme={theme}
          data-size={size}
          data-callback={handleVerification}
          data-expired-callback={handleExpiration}
          data-error-callback={handleErrorCallback}
        />

        {refreshable && (
          <button
            type="button"
            onClick={handleRefresh}
            className="captcha-refresh"
            aria-label="Refresh CAPTCHA"
          >
            Refresh
          </button>
        )}

        {accessibleAlternative && audioEnabled && (
          <button
            type="button"
            onClick={toggleAlternative}
            className="captcha-alternative"
            aria-label={currentType === 'image' ? 'Switch to audio challenge' : 'Switch to visual challenge'}
          >
            {currentType === 'image' ? 'Audio challenge' : 'Visual challenge'}
          </button>
        )}
      </div>
    );
  }
);

Captcha.displayName = 'Captcha';`,
        types: `export type CaptchaType = 'image' | 'audio' | 'math' | 'puzzle' | 'invisible';
export type CaptchaDifficulty = 'easy' | 'medium' | 'hard';
export type CaptchaTheme = 'light' | 'dark';
export type CaptchaProvider = 'recaptcha' | 'hcaptcha' | 'turnstile';
export type CaptchaVersion = 'v2' | 'v3';
export type CaptchaSize = 'normal' | 'compact';

export interface CaptchaProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: CaptchaType;
  difficulty?: CaptchaDifficulty;
  onVerify: (token: string, success: boolean) => void;
  refreshable?: boolean;
  audioEnabled?: boolean;
  accessibleAlternative?: boolean;
  siteKey: string;
  theme?: CaptchaTheme;
  language?: string;
  onExpire?: () => void;
  onError?: (error: Error) => void;
  provider?: CaptchaProvider;
  version?: CaptchaVersion;
  size?: CaptchaSize;
  action?: string;
}`,
        variants: `import { cva, type VariantProps } from 'class-variance-authority';

export const captchaVariants = cva(
  [
    'inline-block rounded-lg border-2',
    'transition-all duration-150 ease-in-out',
  ],
  {
    variants: {
      theme: {
        light: [
          'bg-card border-border',
          'text-foreground',
        ],
        dark: [
          'bg-gray-800 border-gray-600',
          'text-gray-200',
        ],
      },
      type: {
        image: ['p-4'],
        audio: ['p-4'],
        math: ['p-4'],
        puzzle: ['p-4'],
        invisible: ['p-0 border-0'],
      },
    },
    defaultVariants: {
      theme: 'light',
      type: 'image',
    },
  }
);`,
      }}

      angularCode={{
        component: `import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';

type CaptchaType = 'image' | 'audio' | 'math' | 'puzzle' | 'invisible';
type CaptchaDifficulty = 'easy' | 'medium' | 'hard';
type CaptchaTheme = 'light' | 'dark';

@Component({
  selector: 'ux4g-captcha',
  template: \`
    <div
      [class]="getCaptchaClasses()"
      [attr.data-theme]="theme"
    >
      <div
        #captchaContainer
        class="g-recaptcha"
        [attr.data-sitekey]="siteKey"
        [attr.data-theme]="theme"
        [attr.data-callback]="'onCaptchaVerify'"
        [attr.data-expired-callback]="'onCaptchaExpire'"
        [attr.data-error-callback]="'onCaptchaError'"
      ></div>

      <button
        *ngIf="refreshable"
        type="button"
        (click)="handleRefresh()"
        class="captcha-refresh"
        aria-label="Refresh CAPTCHA"
      >
        Refresh
      </button>

      <button
        *ngIf="accessibleAlternative && audioEnabled"
        type="button"
        (click)="toggleAlternative()"
        class="captcha-alternative"
      >
        {{ currentType === 'image' ? 'Audio challenge' : 'Visual challenge' }}
      </button>
    </div>
  \`,
  styleUrls: ['./captcha.component.css']
})
export class CaptchaComponent implements OnInit, OnDestroy {
  @Input() type: CaptchaType = 'image';
  @Input() difficulty: CaptchaDifficulty = 'medium';
  @Input() refreshable = true;
  @Input() audioEnabled = true;
  @Input() accessibleAlternative = true;
  @Input() siteKey!: string;
  @Input() theme: CaptchaTheme = 'light';
  @Input() language = 'en';

  @Output() verify = new EventEmitter<{ token: string; success: boolean }>();
  @Output() expire = new EventEmitter<void>();
  @Output() error = new EventEmitter<Error>();

  currentType: CaptchaType;
  private scriptLoaded = false;

  ngOnInit(): void {
    this.currentType = this.type;
    this.loadCaptchaScript();

    // Setup global callbacks
    (window as any).onCaptchaVerify = this.handleVerify.bind(this);
    (window as any).onCaptchaExpire = this.handleExpire.bind(this);
    (window as any).onCaptchaError = this.handleError.bind(this);
  }

  ngOnDestroy(): void {
    // Cleanup
    delete (window as any).onCaptchaVerify;
    delete (window as any).onCaptchaExpire;
    delete (window as any).onCaptchaError;
  }

  private loadCaptchaScript(): void {
    if (this.scriptLoaded) return;

    const script = document.createElement('script');
    script.src = \`https://www.google.com/recaptcha/api.js?hl=\${this.language}\`;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    this.scriptLoaded = true;
  }

  handleRefresh(): void {
    if ((window as any).grecaptcha) {
      (window as any).grecaptcha.reset();
    }
  }

  toggleAlternative(): void {
    if (this.accessibleAlternative) {
      this.currentType = this.currentType === 'image' ? 'audio' : 'image';
    }
  }

  handleVerify(token: string): void {
    this.verify.emit({ token, success: true });
  }

  handleExpire(): void {
    this.expire.emit();
  }

  handleError(err: Error): void {
    this.error.emit(err);
  }

  getCaptchaClasses(): string {
    const baseClasses = 'ux4g-captcha';
    const themeClass = \`ux4g-captcha-theme-\${this.theme}\`;
    const typeClass = \`ux4g-captcha-type-\${this.currentType}\`;

    return [baseClasses, themeClass, typeClass]
      .filter(Boolean)
      .join(' ');
  }
}`,
        module: `import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaptchaComponent } from './captcha.component';

@NgModule({
  declarations: [CaptchaComponent],
  imports: [CommonModule],
  exports: [CaptchaComponent]
})
export class CaptchaModule { }`,
        types: `export type CaptchaType = 'image' | 'audio' | 'math' | 'puzzle' | 'invisible';
export type CaptchaDifficulty = 'easy' | 'medium' | 'hard';
export type CaptchaTheme = 'light' | 'dark';
export type CaptchaProvider = 'recaptcha' | 'hcaptcha' | 'turnstile';`,
      }}

      webComponentsCode={{
        package: "npm install @ux4g/web-components @ux4g/tokens",
        component: "import '@ux4g/web-components';\n// Registers <ux4g-captcha> custom element",
        html: "<ux4g-captcha variant=\"primary\" size=\"md\"><!-- Captcha --></ux4g-captcha>",
      }}
      comparisons={[
        {
          system: 'Google reCAPTCHA',
          component: 'reCAPTCHA v2/v3',
          variants: 'Checkbox, Invisible, v3 Score',
          accessibility: 'WCAG 2.1 AA (audio alternative)',
          documentation: 'Comprehensive',
          link: 'https://developers.google.com/recaptcha',
        },
        {
          system: 'hCaptcha',
          component: 'hCaptcha',
          variants: 'Checkbox, Invisible, Passive',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Comprehensive',
          link: 'https://www.hcaptcha.com/',
        },
        {
          system: 'Cloudflare Turnstile',
          component: 'Turnstile',
          variants: 'Managed, Non-interactive, Invisible',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Good',
          link: 'https://www.cloudflare.com/products/turnstile/',
        },
        {
          system: 'Arkose Labs',
          component: 'FunCaptcha',
          variants: 'Interactive games, puzzles',
          accessibility: 'WCAG 2.0 AA',
          documentation: 'Good',
          link: 'https://www.arkoselabs.com/',
        },
        {
          system: 'AWS WAF Captcha',
          component: 'AWS WAF CAPTCHA',
          variants: 'Puzzle, Challenge',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Comprehensive',
          link: 'https://aws.amazon.com/waf/',
        },
      ]}

      accessibility={{
        wcagLevel: 'WCAG 2.1 Level AA Compliant',
        features: [
          'Audio alternative provided for visual challenges (WCAG 1.4.2)',
          'Visual alternative provided for audio challenges',
          'Keyboard navigation support for all interactive elements (WCAG 2.1.1)',
          'Clear instructions provided before CAPTCHA challenge (WCAG 3.3.2)',
          'Refresh/reload option available for new challenges (WCAG 2.2.3)',
          'Sufficient color contrast for all text and controls (WCAG 1.4.3)',
          'Focus indicators visible on all interactive elements (WCAG 2.4.7)',
          'Time limits can be extended or disabled for users who need more time (WCAG 2.2.1)',
          'Error messages provide clear guidance (WCAG 3.3.3)',
          'Compatible with screen readers and assistive technologies',
        ],
        keyboardSupport: [
          { key: 'Tab', action: 'Navigate between CAPTCHA elements' },
          { key: 'Shift + Tab', action: 'Navigate backwards through elements' },
          { key: 'Enter', action: 'Activate buttons and submit answers' },
          { key: 'Space', action: 'Select checkboxes and toggle options' },
          { key: 'Arrow Keys', action: 'Navigate grid-based image challenges' },
        ],
        screenReader: [
          'Announces CAPTCHA type and instructions',
          'Describes audio playback controls and status',
          'Announces when new challenge is loaded',
          'Provides feedback on verification success/failure',
          'Announces time remaining if time-limited',
          'Alternative text for all images and controls',
        ],
      }}

      tokens={{
        file: '/tokens/components/captcha.json',
        mappings: [
          { property: 'Container Padding', token: 'base.padding.md', value: '16px' },
          { property: 'Border Width', token: 'base.borderWidth.md', value: '2px' },
          { property: 'Border Radius', token: 'base.borderRadius', value: '8px' },
          { property: 'Light Background', token: 'variant.light.background', value: '#FFFFFF' },
          { property: 'Light Border', token: 'variant.light.border', value: '#D1D5DB (Gray 300)' },
          { property: 'Dark Background', token: 'variant.dark.background', value: '#1F2937 (Gray 800)' },
          { property: 'Dark Border', token: 'variant.dark.border', value: '#4B5563 (Gray 600)' },
          { property: 'Button Text Color', token: 'semantic.interactive.text', value: '#2563EB (Blue 600)' },
          { property: 'Button Hover Color', token: 'semantic.interactive.hover', value: '#1D4ED8 (Blue 700)' },
          { property: 'Focus Ring Width', token: 'accessibility.focusRingWidth', value: '2px' },
          { property: 'Focus Ring Color', token: 'accessibility.focusRingColor', value: '#3B82F6 (Blue 500)' },
        ],
      }}

      governmentContext={{
        useCases: "Online Form Submission: Prevent automated spam and fraudulent submissions on government application forms (e.g., Visa applications, permit requests, public feedback forms); Citizen Portal Login Protection: Protect user accounts from brute-force attacks and unauthorized access attempts (e.g., MyGov portals, tax filing systems, social security access); Event and Service Booking: Prevent ticket scalping and automated booking by bots for government services (e.g., Passport appointments, court hearings, vaccination slots); Public Service Applications: Ensure legitimate citizens access benefits and services, not automated bots (e.g., License renewals, welfare applications, subsidy registrations); Voting and Survey Systems: Maintain integrity of online polls, surveys, and e-voting platforms (e.g., Public consultations, citizen feedback surveys, budget voting); Document Download Protection: Prevent bulk automated downloads of sensitive or rate-limited documents (e.g., Official certificates, legal documents, public records)",
        regulations: "WCAG 2.1 Level AA: Must provide accessible alternatives for users with disabilities — Audio alternative for visual CAPTCHA, visual alternative for audio CAPTCHA; Section 508: Federal systems must be accessible to people with disabilities — Keyboard navigation, screen reader compatibility, alternative input methods; GDPR/Privacy Laws: User data must be processed lawfully and protected — No personal data stored in CAPTCHA challenges, privacy-focused providers available; ADA Compliance: Government services must be accessible to all citizens — Multiple CAPTCHA types accommodate different abilities and preferences",
      }}
    />
  );
}
