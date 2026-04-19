import React from 'react';
import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { Spacer } from './Spacer';
import { assertA11y } from '@/test/a11y-helpers';

describe('Spacer', () => {
  it('renders with aria-hidden', () => {
    const { container } = render(<Spacer />);
    expect(container.firstChild).toHaveAttribute('aria-hidden', 'true');
  });

  it('applies vertical height by default', () => {
    const { container } = render(<Spacer size={24} />);
    expect(container.firstChild).toHaveStyle({ height: '24px' });
  });

  it('applies horizontal width', () => {
    const { container } = render(<Spacer size={24} axis="horizontal" />);
    expect(container.firstChild).toHaveStyle({ width: '24px' });
  });

  it('accepts string size', () => {
    const { container } = render(<Spacer size="2rem" />);
    expect(container.firstChild).toHaveStyle({ height: '2rem' });
  });

  it('forwards ref', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<Spacer ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('applies custom className', () => {
    const { container } = render(<Spacer className="my-spacer" />);
    expect(container.firstChild).toHaveClass('my-spacer');
  });

  // ── Accessibility ───────────────────────────────────────────────────────

  describe('Accessibility', () => {
    it('has no axe violations in default state', async () => {
      await assertA11y(<Spacer size={24} />);
    });
  });
});
