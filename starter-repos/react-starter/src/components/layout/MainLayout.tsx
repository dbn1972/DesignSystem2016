import { Outlet, Link, useNavigate } from 'react-router-dom';
import { Button } from '@ux4g/react-core';
import './MainLayout.css';

/**
 * Main application layout
 *
 * Includes header, navigation, and footer
 */
export function MainLayout() {
  const navigate = useNavigate();

  return (
    <div className="main-layout">
      {/* Header */}
      <header className="main-layout__header">
        <div className="main-layout__header-content">
          {/* Logo and Service Name */}
          <div className="main-layout__branding">
            <img
              src="/govt-logo.png"
              alt="Government of India"
              className="main-layout__logo"
            />
            <span className="main-layout__service-name">
              Digital Services Portal
            </span>
          </div>

          {/* Navigation */}
          <nav className="main-layout__nav">
            <Link to="/" className="main-layout__nav-link">
              Home
            </Link>
            <Link to="/application" className="main-layout__nav-link">
              Apply
            </Link>
            <Link to="/components" className="main-layout__nav-link">
              Components
            </Link>
          </nav>

          {/* User Actions */}
          <div className="main-layout__actions">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate('/login')}
            >
              Sign In
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-layout__main">
        <div className="main-layout__container">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <footer className="main-layout__footer">
        <div className="main-layout__footer-content">
          <div className="main-layout__footer-links">
            <a href="/terms">Terms of Service</a>
            <span>•</span>
            <a href="/privacy">Privacy Policy</a>
            <span>•</span>
            <a href="/contact">Contact Us</a>
          </div>
          <div className="main-layout__footer-copyright">
            © {new Date().getFullYear()} Government of India. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
