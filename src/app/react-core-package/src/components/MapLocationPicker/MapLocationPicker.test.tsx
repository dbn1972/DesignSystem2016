import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MapLocationPicker } from './MapLocationPicker';

describe('MapLocationPicker', () => {
  it('renders coordinates display', () => {
    render(<MapLocationPicker latitude={28.6139} longitude={77.209} />);
    expect(screen.getByText(/28\.6139/)).toBeInTheDocument();
    expect(screen.getByText(/77\.2090/)).toBeInTheDocument();
  });

  it('renders label', () => {
    render(<MapLocationPicker label="Pick Location" />);
    expect(screen.getByText('Pick Location')).toBeInTheDocument();
  });

  it('renders map placeholder', () => {
    render(<MapLocationPicker />);
    expect(screen.getByText('📍 Map Placeholder')).toBeInTheDocument();
  });

  it('shows zoom level', () => {
    render(<MapLocationPicker zoom={15} />);
    expect(screen.getByText('Zoom: 15')).toBeInTheDocument();
  });

  it('has application role', () => {
    render(<MapLocationPicker />);
    expect(screen.getByRole('application')).toBeInTheDocument();
  });

  it('sets aria-label from label prop', () => {
    render(<MapLocationPicker label="Office Location" />);
    expect(screen.getByRole('application')).toHaveAttribute('aria-label', 'Office Location');
  });

  it('forwards ref', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<MapLocationPicker ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
