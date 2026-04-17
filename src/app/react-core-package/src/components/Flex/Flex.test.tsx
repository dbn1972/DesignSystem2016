import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Flex } from './Flex';

describe('Flex', () => {
  it('renders children', () => {
    render(<Flex><span>A</span></Flex>);
    expect(screen.getByText('A')).toBeInTheDocument();
  });
  it('defaults to flex-row', () => {
    const { container } = render(<Flex><span>A</span></Flex>);
    expect(container.firstChild).toHaveClass('flex-row');
  });
  it('applies column direction', () => {
    const { container } = render(<Flex direction="column"><span>A</span></Flex>);
    expect(container.firstChild).toHaveClass('flex-col');
  });
  it('applies gap', () => {
    const { container } = render(<Flex gap={12}><span>A</span></Flex>);
    expect(container.firstChild).toHaveStyle({ gap: '12px' });
  });
  it('applies alignment', () => {
    const { container } = render(<Flex align="center"><span>A</span></Flex>);
    expect(container.firstChild).toHaveClass('items-center');
  });
  it('applies justify', () => {
    const { container } = render(<Flex justify="between"><span>A</span></Flex>);
    expect(container.firstChild).toHaveClass('justify-between');
  });
  it('applies wrap', () => {
    const { container } = render(<Flex wrap="wrap"><span>A</span></Flex>);
    expect(container.firstChild).toHaveClass('flex-wrap');
  });
  it('renders inline', () => {
    const { container } = render(<Flex inline><span>A</span></Flex>);
    expect(container.firstChild).toHaveClass('inline-flex');
  });
  it('forwards ref', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<Flex ref={ref}><span>A</span></Flex>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
