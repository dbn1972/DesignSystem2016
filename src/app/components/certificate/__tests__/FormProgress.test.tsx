import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { FormProgress } from '../FormProgress';

const STEPS = [
  { label: 'Personal Info' },
  { label: 'Address' },
  { label: 'Documents' },
  { label: 'Review' },
];

describe('FormProgress', () => {
  // ── Rendering ─────────────────────────────────────────────────────────────

  it('renders all step labels', () => {
    render(<FormProgress currentStep={1} totalSteps={4} steps={STEPS} />);
    expect(screen.getByText('Personal Info')).toBeInTheDocument();
    expect(screen.getByText('Address')).toBeInTheDocument();
    expect(screen.getByText('Documents')).toBeInTheDocument();
    expect(screen.getByText('Review')).toBeInTheDocument();
  });

  it('renders step numbers for future steps', () => {
    render(<FormProgress currentStep={1} totalSteps={4} steps={STEPS} />);
    // Steps 2, 3, 4 are future — show numbers
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('4')).toBeInTheDocument();
  });

  it('renders checkmark for completed steps', () => {
    render(<FormProgress currentStep={3} totalSteps={4} steps={STEPS} />);
    // Steps 1 and 2 are completed
    const checkmarks = screen.getAllByText('✓');
    expect(checkmarks).toHaveLength(2);
  });

  // ── Active step ───────────────────────────────────────────────────────────

  it('applies primary class to the active step indicator', () => {
    const { container } = render(<FormProgress currentStep={2} totalSteps={4} steps={STEPS} />);
    const indicators = container.querySelectorAll('.rounded-full');
    // Step 2 (index 1) should have bg-primary
    expect(indicators[1].className).toContain('bg-primary');
  });

  it('applies green class to completed step indicators', () => {
    const { container } = render(<FormProgress currentStep={3} totalSteps={4} steps={STEPS} />);
    const indicators = container.querySelectorAll('.rounded-full');
    expect(indicators[0].className).toContain('bg-green-600');
    expect(indicators[1].className).toContain('bg-green-600');
  });

  it('applies gray class to future step indicators', () => {
    const { container } = render(<FormProgress currentStep={1} totalSteps={4} steps={STEPS} />);
    const indicators = container.querySelectorAll('.rounded-full');
    // Steps 2, 3, 4 are future
    expect(indicators[1].className).toContain('bg-gray-300');
    expect(indicators[2].className).toContain('bg-gray-300');
    expect(indicators[3].className).toContain('bg-gray-300');
  });

  // ── Connectors ────────────────────────────────────────────────────────────

  it('renders connectors between steps (n-1 connectors)', () => {
    const { container } = render(<FormProgress currentStep={1} totalSteps={4} steps={STEPS} />);
    // Connectors are h-0.5 divs
    const connectors = container.querySelectorAll('.h-0\\.5');
    expect(connectors).toHaveLength(STEPS.length - 1);
  });

  it('completed connectors are green', () => {
    const { container } = render(<FormProgress currentStep={3} totalSteps={4} steps={STEPS} />);
    const connectors = container.querySelectorAll('.h-0\\.5');
    // First 2 connectors (between steps 1-2 and 2-3) should be green
    expect(connectors[0].className).toContain('bg-green-600');
    expect(connectors[1].className).toContain('bg-green-600');
  });

  it('future connectors are gray', () => {
    const { container } = render(<FormProgress currentStep={1} totalSteps={4} steps={STEPS} />);
    const connectors = container.querySelectorAll('.h-0\\.5');
    connectors.forEach((c) => expect(c.className).toContain('bg-gray-300'));
  });
});
