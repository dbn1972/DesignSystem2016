import { useNavigate } from 'react-router-dom';
import { Button, Card, Alert } from '@ux4g/react-core';
import './HomePage.css';

/**
 * Home page
 *
 * Landing page with service overview and call-to-action
 */
export function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="home-page__hero">
        <h1 className="home-page__title">
          Welcome to Digital Services Portal
        </h1>
        <p className="home-page__subtitle">
          Access government services online with ease and efficiency
        </p>

        <div className="home-page__cta">
          <Button
            variant="primary"
            size="lg"
            onClick={() => navigate('/application')}
          >
            Start New Application
          </Button>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => navigate('/status/DEMO123')}
          >
            Track Application
          </Button>
        </div>
      </section>

      {/* Information Alert */}
      <Alert variant="info" className="home-page__alert">
        This is a demo application built with UX4G Design System. Replace with
        your actual service information.
      </Alert>

      {/* Services Grid */}
      <section className="home-page__services">
        <h2>Available Services</h2>
        <div className="home-page__grid">
          <Card className="home-page__service-card">
            <h3>Birth Certificate</h3>
            <p>Apply for birth certificate online</p>
            <Button variant="tertiary" fullWidth>
              Apply Now
            </Button>
          </Card>

          <Card className="home-page__service-card">
            <h3>Driving License</h3>
            <p>Apply or renew driving license</p>
            <Button variant="tertiary" fullWidth>
              Apply Now
            </Button>
          </Card>

          <Card className="home-page__service-card">
            <h3>Passport</h3>
            <p>Apply for passport services</p>
            <Button variant="tertiary" fullWidth>
              Apply Now
            </Button>
          </Card>

          <Card className="home-page__service-card">
            <h3>Income Certificate</h3>
            <p>Request income certificate</p>
            <Button variant="tertiary" fullWidth>
              Apply Now
            </Button>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="home-page__features">
        <h2>Why Use Our Services?</h2>
        <div className="home-page__feature-list">
          <div className="home-page__feature">
            <div className="home-page__feature-icon">🚀</div>
            <h3>Fast Processing</h3>
            <p>Quick turnaround time for applications</p>
          </div>
          <div className="home-page__feature">
            <div className="home-page__feature-icon">🔒</div>
            <h3>Secure</h3>
            <p>Your data is protected with encryption</p>
          </div>
          <div className="home-page__feature">
            <div className="home-page__feature-icon">📱</div>
            <h3>Mobile Friendly</h3>
            <p>Access from any device, anywhere</p>
          </div>
          <div className="home-page__feature">
            <div className="home-page__feature-icon">✅</div>
            <h3>Easy to Use</h3>
            <p>Simple and intuitive interface</p>
          </div>
        </div>
      </section>
    </div>
  );
}
