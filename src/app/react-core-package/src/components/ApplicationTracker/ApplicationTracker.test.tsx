import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ApplicationTracker } from './ApplicationTracker';

const steps = [
  { key: 'submitted', label: 'Submitted', status: 'completed' as const, timestamp: '10 Apr 2026' },
  { key: 'review', label: 'Under Review', status: 'current' as const, description: 'Being reviewed by officer' },
  { key: 'approved', label: 'Approved', status: 'upcoming' as const },
  { key: 'issued', label: 'Certificate Issued', status: 'upcoming' as const },
];

describe('ApplicationTracker', () => {
  it('renders application ID', () => {
    render(<ApplicationTracker applicationId="APP-001" steps={steps} />);
    expect(screen.getByText('APP-001')).toBeInTheDocument();
  });

  it('renders service name', () => {
    render(<ApplicationTracker applicationId="APP-001" serviceName="Birth Certificate" steps={steps} />);
    expect(screen.getByText('Birth Certificate')).toBeInTheDocument();
  });

  it('renders all step labels', () => {
    render(<ApplicationTracker applicationId="APP-001" steps={steps} />);
    expect(screen.getByText('Submitted')).toBeInTheDocument();
    expect(screen.getByText('Under Review')).toBeInTheDocument();
    expect(screen.getByText('Approved')).toBeInTheDocument();
    expect(screen.getByText('Certificate Issued')).toBeInTheDocument();
  });

  it('renders step description', () => {
    render(<ApplicationTracker applicationId="APP-001" steps={steps} />);
    expect(screen.getByText('Being reviewed by officer')).toBeInTheDocument();
  });

  it('renders step timestamp', () => {
    render(<ApplicationTracker applicationId="APP-001" steps={steps} />);
    expect(screen.getByText('10 Apr 2026')).toBeInTheDocument();
  });

  it('marks current step with aria-current', () => {
    render(<ApplicationTracker applicationId="APP-001" steps={steps} />);
    const currentStep = screen.getByText('Under Review').closest('li');
    expect(currentStep).toHaveAttribute('aria-current', 'step');
  });

  it('does not mark non-current steps with aria-current', () => {
    render(<ApplicationTracker applicationId="APP-001" steps={steps} />);
    const completedStep = screen.getByText('Submitted').closest('li');
    expect(completedStep).not.toHaveAttribute('aria-current');
  });

  it('renders as ordered list', () => {
    render(<ApplicationTracker applicationId="APP-001" steps={steps} />);
    expect(screen.getByRole('list', { name: 'Application steps' })).toBeInTheDocument();
  });

  it('has group role with aria-label', () => {
    render(<ApplicationTracker applicationId="APP-001" steps={steps} />);
    expect(screen.getByRole('group', { name: 'Application tracker for APP-001' })).toBeInTheDocument();
  });

  it('renders error status step', () => {
    const errorSteps = [
      { key: 'submitted', label: 'Submitted', status: 'completed' as const },
      { key: 'rejected', label: 'Rejected', status: 'error' as const, description: 'Documents incomplete' },
    ];
    render(<ApplicationTracker applicationId="APP-002" steps={errorSteps} />);
    expect(screen.getByText('Rejected')).toBeInTheDocument();
    expect(screen.getByText('Documents incomplete')).toBeInTheDocument();
  });

  it('renders custom icon', () => {
    const iconSteps = [
      { key: 's1', label: 'Step 1', status: 'completed' as const, icon: <span data-testid="custom-icon">📋</span> },
    ];
    render(<ApplicationTracker applicationId="APP-003" steps={iconSteps} />);
    expect(screen.getByTestId('custom-icon')).toBeInTheDocument();
  });

  it('renders horizontal orientation', () => {
    const { container } = render(<ApplicationTracker applicationId="APP-001" steps={steps} orientation="horizontal" />);
    expect(container.querySelector('.ux4g-application-tracker')).toBeInTheDocument();
  });

  it('forwards ref', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<ApplicationTracker applicationId="APP-001" steps={steps} ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('applies custom className', () => {
    const { container } = render(<ApplicationTracker applicationId="APP-001" steps={steps} className="my-tracker" />);
    expect(container.querySelector('.my-tracker')).toBeInTheDocument();
  });
});
