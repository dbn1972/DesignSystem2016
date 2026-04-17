import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ChartLibrary } from './ChartLibrary';

const sampleData = [
  { label: 'Jan', value: 10 },
  { label: 'Feb', value: 20 },
  { label: 'Mar', value: 15 },
];

describe('ChartLibrary', () => {
  it('renders SVG element', () => {
    render(<ChartLibrary data={sampleData} />);
    const svg = document.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  it('renders bars for bar chart type', () => {
    render(<ChartLibrary data={sampleData} type="bar" />);
    const rects = document.querySelectorAll('rect');
    expect(rects.length).toBe(3);
  });

  it('renders polyline for line chart type', () => {
    render(<ChartLibrary data={sampleData} type="line" />);
    const polyline = document.querySelector('polyline');
    expect(polyline).toBeInTheDocument();
  });

  it('shows title', () => {
    render(<ChartLibrary data={sampleData} title="Monthly Sales" />);
    expect(screen.getByText('Monthly Sales')).toBeInTheDocument();
  });

  it('sets aria-label on SVG', () => {
    render(<ChartLibrary data={sampleData} title="Revenue" />);
    const svg = document.querySelector('svg');
    expect(svg).toHaveAttribute('aria-label', 'Revenue');
  });

  it('sets role img on SVG', () => {
    render(<ChartLibrary data={sampleData} />);
    const svg = document.querySelector('svg');
    expect(svg).toHaveAttribute('role', 'img');
  });

  it('forwards ref', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<ChartLibrary data={sampleData} ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
