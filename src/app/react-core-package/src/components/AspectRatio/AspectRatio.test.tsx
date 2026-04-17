import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AspectRatio } from './AspectRatio';

describe('AspectRatio', () => {
  it('renders children', () => { render(<AspectRatio><span>Image</span></AspectRatio>); expect(screen.getByText('Image')).toBeInTheDocument(); });
  it('applies numeric ratio', () => { const { container } = render(<AspectRatio ratio={16/9}><span>C</span></AspectRatio>); expect(container.firstChild).toHaveStyle({ aspectRatio: String(16/9) }); });
  it('parses string ratio "16/9"', () => { const { container } = render(<AspectRatio ratio="16/9"><span>C</span></AspectRatio>); expect(container.firstChild).toHaveStyle({ aspectRatio: String(16/9) }); });
  it('defaults to 1:1', () => { const { container } = render(<AspectRatio><span>C</span></AspectRatio>); expect(container.firstChild).toHaveStyle({ aspectRatio: '1' }); });
  it('has overflow hidden', () => { const { container } = render(<AspectRatio><span>C</span></AspectRatio>); expect(container.firstChild).toHaveClass('overflow-hidden'); });
  it('forwards ref', () => { const ref = React.createRef<HTMLDivElement>(); render(<AspectRatio ref={ref}><span>C</span></AspectRatio>); expect(ref.current).toBeInstanceOf(HTMLDivElement); });
});
