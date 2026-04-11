/**
 * UX4G Starter Template
 * A complete government service page template
 */

import '@ux4g/styles';
import React from 'react';

export default function GovernmentServicePage() {
  return (
    <>
      {/* Skip link for accessibility */}
      <a href="#main-content" className="ux4g-skip-link">
        Skip to main content
      </a>

      {/* Header with Indian tricolor */}
      <header className="ux4g-header ux4g-header-government">
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
                <a href="/about" className="ux4g-nav-link">
                  About
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

      {/* Main content */}
      <main id="main-content" className="ux4g-py-12">
        <div className="ux4g-container">
          {/* Page header */}
          <div className="ux4g-mb-8">
            <h1 className="ux4g-mb-2">Welcome to Digital Services</h1>
            <p className="ux4g-lead">
              Access government services online with ease and transparency
            </p>
          </div>

          {/* Important notice */}
          <div className="ux4g-mb-8">
            <div className="ux4g-alert ux4g-alert-info" role="alert">
              <div className="ux4g-alert-content">
                <div className="ux4g-alert-title">New Services Available</div>
                <div className="ux4g-alert-description">
                  We have launched new digital services for citizens. Apply online now.
                </div>
              </div>
            </div>
          </div>

          {/* Service cards */}
          <div className="ux4g-mb-12">
            <h2 className="ux4g-mb-6">Our Services</h2>

            <div className="ux4g-grid ux4g-grid-cols-3 ux4g-gap-6">
              <div className="ux4g-card">
                <h3 className="ux4g-mb-2">Digital Certificates</h3>
                <p className="ux4g-mb-4">
                  Apply for and download certificates online
                </p>
                <div className="ux4g-flex ux4g-items-center ux4g-justify-between">
                  <span className="ux4g-badge ux4g-badge-success">Active</span>
                  <a href="/services/certificates" className="ux4g-text-link">
                    Learn more →
                  </a>
                </div>
              </div>

              <div className="ux4g-card">
                <h3 className="ux4g-mb-2">License Renewal</h3>
                <p className="ux4g-mb-4">
                  Renew your licenses quickly and securely
                </p>
                <div className="ux4g-flex ux4g-items-center ux4g-justify-between">
                  <span className="ux4g-badge ux4g-badge-success">Active</span>
                  <a href="/services/licenses" className="ux4g-text-link">
                    Learn more →
                  </a>
                </div>
              </div>

              <div className="ux4g-card">
                <h3 className="ux4g-mb-2">Document Verification</h3>
                <p className="ux4g-mb-4">
                  Verify authenticity of government documents
                </p>
                <div className="ux4g-flex ux4g-items-center ux4g-justify-between">
                  <span className="ux4g-badge ux4g-badge-warning">Coming Soon</span>
                  <a href="/services/verification" className="ux4g-text-link">
                    Learn more →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Application form */}
          <div className="ux4g-max-w-2xl ux4g-mx-auto">
            <div className="ux4g-card">
              <h2 className="ux4g-mb-6">Apply for Service</h2>

              <form>
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
                    aria-required="true"
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
                    aria-required="true"
                  />
                  <span className="ux4g-helper-text">
                    We'll send confirmation to this email address
                  </span>
                </div>

                <div className="ux4g-form-group">
                  <label htmlFor="phone" className="ux4g-label ux4g-label-required">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="ux4g-input"
                    placeholder="+91 XXXXX XXXXX"
                    required
                    aria-required="true"
                  />
                </div>

                <div className="ux4g-form-group">
                  <label htmlFor="service" className="ux4g-label ux4g-label-required">
                    Service Type
                  </label>
                  <select id="service" className="ux4g-input" required>
                    <option value="">Select a service</option>
                    <option value="certificate">Digital Certificate</option>
                    <option value="license">License Renewal</option>
                    <option value="verification">Document Verification</option>
                  </select>
                </div>

                <div className="ux4g-choice ux4g-mb-6">
                  <input type="checkbox" id="terms" required />
                  <label htmlFor="terms">
                    I agree to the terms and conditions
                    <span className="ux4g-label-required"></span>
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
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="ux4g-footer">
        <div className="ux4g-footer-container">
          <div className="ux4g-footer-content">
            <div className="ux4g-footer-section">
              <h4 className="ux4g-footer-heading">About</h4>
              <ul className="ux4g-footer-links">
                <li><a href="/about" className="ux4g-footer-link">About Us</a></li>
                <li><a href="/team" className="ux4g-footer-link">Our Team</a></li>
                <li><a href="/careers" className="ux4g-footer-link">Careers</a></li>
              </ul>
            </div>

            <div className="ux4g-footer-section">
              <h4 className="ux4g-footer-heading">Resources</h4>
              <ul className="ux4g-footer-links">
                <li><a href="/docs" className="ux4g-footer-link">Documentation</a></li>
                <li><a href="/help" className="ux4g-footer-link">Help Center</a></li>
                <li><a href="/faq" className="ux4g-footer-link">FAQ</a></li>
              </ul>
            </div>

            <div className="ux4g-footer-section">
              <h4 className="ux4g-footer-heading">Legal</h4>
              <ul className="ux4g-footer-links">
                <li><a href="/privacy" className="ux4g-footer-link">Privacy Policy</a></li>
                <li><a href="/terms" className="ux4g-footer-link">Terms of Service</a></li>
                <li><a href="/accessibility" className="ux4g-footer-link">Accessibility</a></li>
              </ul>
            </div>

            <div className="ux4g-footer-section">
              <h4 className="ux4g-footer-heading">Contact</h4>
              <ul className="ux4g-footer-links">
                <li><a href="/contact" className="ux4g-footer-link">Contact Us</a></li>
                <li><a href="/support" className="ux4g-footer-link">Support</a></li>
              </ul>
            </div>
          </div>

          <div className="ux4g-footer-bottom">
            <p>© 2026 Government of India. All rights reserved.</p>
            <p>Built with UX4G Design System</p>
          </div>
        </div>
      </footer>
    </>
  );
}
