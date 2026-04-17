import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Center } from './Center';

describe('Center', () => {
  it('renders children', () => {
    render(<Center>Hello</Center>);
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });
  it('has flex centering classes', () => {
    const { container } = render(<Center>C</Center>);
    expect(container.firstChild).toHaveClass('flex', 'items-center', 'justify-center');
  });
  it('applies minHeight', () => {
    const { container } = render(<Center minHeight={200}>C</Center>);
    expect(container.firstChild).toHaveStyle({ minHeight: '200px' });
  });
  it('renders inline', () => {
    const { container } = render(<Center inline>C</Center>);
    expect(container.firstChild).toHaveClass('inline-flex');
  });
  it('forwards ref', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<Center ref={ref}>C</Center>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
