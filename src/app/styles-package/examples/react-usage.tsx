/**
 * UX4G Styles - React Usage Example
 * How to integrate @ux4g/styles in a React application
 */

import React from 'react';

// Import complete style system (includes tokens, base, utilities, components)
import '@ux4g/styles';

// OR import specific layers
// import '@ux4g/styles/base';
// import '@ux4g/styles/utilities';
// import '@ux4g/styles/components';

// OR import individual files
// import '@ux4g/styles/reset';
// import '@ux4g/styles/typography';
// import '@ux4g/styles/forms';

/**
 * Example: Form Component
 */
export function ExampleForm() {
  return (
    <form className="ux4g-card">
      <h2>Register for Services</h2>

      <div className="ux4g-form-group">
        <label htmlFor="name" className="ux4g-label ux4g-label-required">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          className="ux4g-input"
          placeholder="Enter your full name"
          required
        />
      </div>

      <div className="ux4g-form-group">
        <label htmlFor="email" className="ux4g-label ux4g-label-required">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          className="ux4g-input"
          placeholder="your.email@example.gov.in"
          required
        />
        <span className="ux4g-helper-text">
          We'll never share your email with anyone else.
        </span>
      </div>

      <div className="ux4g-choice">
        <input type="checkbox" id="terms" />
        <label htmlFor="terms">
          I agree to the terms and conditions
        </label>
      </div>

      <div className="ux4g-form-actions">
        <button type="submit" className="ux4g-button-primary">
          Submit Application
        </button>
        <button type="reset" className="ux4g-button-secondary">
          Clear Form
        </button>
      </div>
    </form>
  );
}

/**
 * Example: Alert Component
 */
export function ExampleAlert() {
  return (
    <div className="ux4g-stack-4">
      <div className="ux4g-alert ux4g-alert-info" role="alert">
        <div className="ux4g-alert-icon">ℹ</div>
        <div className="ux4g-alert-content">
          <div className="ux4g-alert-title">Information</div>
          <div className="ux4g-alert-description">
            Your application has been received and is being processed.
          </div>
        </div>
      </div>

      <div className="ux4g-alert ux4g-alert-success" role="alert">
        <div className="ux4g-alert-icon">✓</div>
        <div className="ux4g-alert-content">
          <div className="ux4g-alert-title">Success</div>
          <div className="ux4g-alert-description">
            Your verification is complete.
          </div>
        </div>
      </div>

      <div className="ux4g-alert ux4g-alert-warning" role="alert">
        <div className="ux4g-alert-icon">⚠</div>
        <div className="ux4g-alert-content">
          <div className="ux4g-alert-title">Warning</div>
          <div className="ux4g-alert-description">
            Please verify your documents before the deadline.
          </div>
        </div>
      </div>

      <div className="ux4g-alert ux4g-alert-error" role="alert">
        <div className="ux4g-alert-icon">✕</div>
        <div className="ux4g-alert-content">
          <div className="ux4g-alert-title">Error</div>
          <div className="ux4g-alert-description">
            Unable to process your request. Please try again.
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Example: Layout with Utilities
 */
export function ExampleLayout() {
  return (
    <div className="ux4g-container">
      <header className="ux4g-header-government">
        <div className="ux4g-header-container">
          <a href="/" className="ux4g-logo">
            <span>Ministry of Digital Services</span>
          </a>
          <nav className="ux4g-nav" aria-label="Main navigation">
            <ul className="ux4g-nav-list">
              <li className="ux4g-nav-item">
                <a href="/" className="ux4g-nav-link ux4g-nav-link-active">
                  Home
                </a>
              </li>
              <li className="ux4g-nav-item">
                <a href="/services" className="ux4g-nav-link">
                  Services
                </a>
              </li>
              <li className="ux4g-nav-item">
                <a href="/contact" className="ux4g-nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="ux4g-py-12">
        <div className="ux4g-max-w-4xl ux4g-mx-auto ux4g-px-4">
          <h1 className="ux4g-mb-6">Welcome to Digital Services</h1>

          <div className="ux4g-grid ux4g-grid-cols-3 ux4g-gap-6">
            <div className="ux4g-card">
              <h3 className="ux4g-mb-2">Service 1</h3>
              <p className="ux4g-mb-4">Description of service</p>
              <a href="/service-1" className="ux4g-text-link">
                Learn more →
              </a>
            </div>

            <div className="ux4g-card">
              <h3 className="ux4g-mb-2">Service 2</h3>
              <p className="ux4g-mb-4">Description of service</p>
              <a href="/service-2" className="ux4g-text-link">
                Learn more →
              </a>
            </div>

            <div className="ux4g-card">
              <h3 className="ux4g-mb-2">Service 3</h3>
              <p className="ux4g-mb-4">Description of service</p>
              <a href="/service-3" className="ux4g-text-link">
                Learn more →
              </a>
            </div>
          </div>
        </div>
      </main>

      <footer className="ux4g-footer">
        <div className="ux4g-footer-container">
          <div className="ux4g-footer-content">
            <div className="ux4g-footer-section">
              <h4 className="ux4g-footer-heading">About</h4>
              <ul className="ux4g-footer-links">
                <li><a href="/about" className="ux4g-footer-link">About Us</a></li>
                <li><a href="/team" className="ux4g-footer-link">Our Team</a></li>
              </ul>
            </div>

            <div className="ux4g-footer-section">
              <h4 className="ux4g-footer-heading">Resources</h4>
              <ul className="ux4g-footer-links">
                <li><a href="/docs" className="ux4g-footer-link">Documentation</a></li>
                <li><a href="/help" className="ux4g-footer-link">Help Center</a></li>
              </ul>
            </div>
          </div>

          <div className="ux4g-footer-bottom">
            <p>© 2026 Government of India. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
