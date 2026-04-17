import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { EmptyState } from './EmptyState';

describe('EmptyState', () => {
  it('renders with role="status"', () => {
    render(<EmptyState title="No data" />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('renders title', () => {
    render(<EmptyState title="No results found" />);
    expect(screen.getByText('No results found')).toBeInTheDocument();
  });

  it('renders title as heading', () => {
    render(<EmptyState title="Empty" />);
    expect(screen.getByRole('heading', { name: 'Empty' })).toBeInTheDocument();
  });

  it('renders description', () => {
    render(<EmptyState title="No data" description="Try a different search." />);
    expect(screen.getByText('Try a different search.')).toBeInTheDocument();
  });

  it('does not render description when not provided', () => {
    const { container } = render(<EmptyState title="No data" />);
    expect(container.querySelector('.ux4g-empty-state-description')).not.toBeInTheDocument();
  });

  it('renders icon', () => {
    render(<EmptyState title="No data" icon={<span data-testid="icon">📭</span>} />);
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('does not render icon container when no icon', () => {
    const { container } = render(<EmptyState title="No data" />);
    expect(container.querySelector('.ux4g-empty-state-icon')).not.toBeInTheDocument();
  });

  it('renders primary action', () => {
    render(<EmptyState title="No data" action={<button>Retry</button>} />);
    expect(screen.getByRole('button', { name: 'Retry' })).toBeInTheDocument();
  });

  it('renders secondary action', () => {
    render(
      <EmptyState
        title="No data"
        action={<button>Retry</button>}
        secondaryAction={<button>Go back</button>}
      />
    );
    expect(screen.getByRole('button', { name: 'Go back' })).toBeInTheDocument();
  });

  it('does not render actions container when no actions', () => {
    const { container } = render(<EmptyState title="No data" />);
    expect(container.querySelector('.ux4g-empty-state-actions')).not.toBeInTheDocument();
  });

  it.each(['sm', 'md', 'lg'] as const)('renders %s size', (size) => {
    render(<EmptyState title="No data" size={size} />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('accepts custom className', () => {
    render(<EmptyState title="No data" className="my-class" />);
    expect(screen.getByRole('status')).toHaveClass('my-class');
  });

  it('forwards ref', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<EmptyState title="No data" ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
