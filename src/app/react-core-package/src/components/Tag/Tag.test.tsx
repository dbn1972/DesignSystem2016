import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Tag } from './Tag';
import { assertA11y, assertA11yStates } from '@/test/a11y-helpers';

describe('Tag', () => {
  it('renders label text', () => {
    render(<Tag label="Active" />);
    expect(screen.getByText('Active')).toBeInTheDocument();
  });

  it('renders icon when provided', () => {
    render(<Tag label="Tag" icon={<span data-testid="icon">★</span>} />);
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('does not render icon when not provided', () => {
    const { container } = render(<Tag label="Tag" />);
    expect(container.querySelector('.ux4g-tag-icon')).not.toBeInTheDocument();
  });

  it.each(['neutral', 'info', 'success', 'warning', 'error'] as const)(
    'renders %s variant',
    (variant) => {
      render(<Tag label="Tag" variant={variant} />);
      expect(screen.getByText('Tag')).toBeInTheDocument();
    }
  );

  it.each(['sm', 'md', 'lg'] as const)('renders %s size', (size) => {
    render(<Tag label="Tag" size={size} />);
    expect(screen.getByText('Tag')).toBeInTheDocument();
  });

  it('renders remove button when removable', () => {
    render(<Tag label="React" removable onRemove={() => {}} />);
    expect(screen.getByRole('button', { name: 'Remove React' })).toBeInTheDocument();
  });

  it('does not render remove button when not removable', () => {
    render(<Tag label="React" />);
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('calls onRemove when remove button clicked', async () => {
    const user = userEvent.setup();
    const onRemove = vi.fn();
    render(<Tag label="React" removable onRemove={onRemove} />);
    await user.click(screen.getByRole('button', { name: 'Remove React' }));
    expect(onRemove).toHaveBeenCalledTimes(1);
  });

  it('remove button is disabled when tag is disabled', () => {
    render(<Tag label="React" removable onRemove={() => {}} disabled />);
    expect(screen.getByRole('button', { name: 'Remove React' })).toBeDisabled();
  });

  it('applies custom className', () => {
    const { container } = render(<Tag label="Tag" className="my-tag" />);
    expect(container.querySelector('.my-tag')).toBeInTheDocument();
  });

  it('forwards ref', () => {
    const ref = React.createRef<HTMLSpanElement>();
    render(<Tag label="Tag" ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLSpanElement);
  });

  // ── Accessibility ───────────────────────────────────────────────────────

  describe('Accessibility', () => {
    it('has no axe violations in default state', async () => {
      await assertA11y(<Tag label="Active" />);
    });

    it('has no axe violations across variants', async () => {
      await assertA11yStates([
        { name: 'neutral', ui: <Tag label="Tag" variant="neutral" /> },
        { name: 'info', ui: <Tag label="Tag" variant="info" /> },
        { name: 'success', ui: <Tag label="Tag" variant="success" /> },
        { name: 'warning', ui: <Tag label="Tag" variant="warning" /> },
        { name: 'error', ui: <Tag label="Tag" variant="error" /> },
      ]);
    });

    describe('Keyboard navigation', () => {
      it('Tab focuses dismiss button when removable', async () => {
        const user = userEvent.setup();
        render(<Tag label="React" removable onRemove={vi.fn()} />);
        await user.tab();
        expect(screen.getByRole('button', { name: 'Remove React' })).toHaveFocus();
      });
    });
  });
});
