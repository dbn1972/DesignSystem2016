import React from 'react';
import { describe, expect, it, vi, beforeAll } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CodeBlock } from './CodeBlock';

beforeAll(() => {
  Object.defineProperty(navigator, 'clipboard', { value: { writeText: vi.fn().mockResolvedValue(undefined) }, writable: true, configurable: true });
});

describe('CodeBlock', () => {
  it('renders code content', () => { render(<CodeBlock code="const x = 1;" />); expect(screen.getByText('const x = 1;')).toBeInTheDocument(); });
  it('renders filename', () => { render(<CodeBlock code="x" filename="app.tsx" />); expect(screen.getByText('app.tsx')).toBeInTheDocument(); });
  it('renders copy button', () => { render(<CodeBlock code="x" />); expect(screen.getByRole('button', { name: 'Copy code' })).toBeInTheDocument(); });
  it('hides copy button when copyable=false', () => { render(<CodeBlock code="x" copyable={false} />); expect(screen.queryByRole('button', { name: 'Copy code' })).not.toBeInTheDocument(); });
  it('shows line numbers', () => { render(<CodeBlock code={"a\nb\nc"} showLineNumbers />); expect(screen.getByText('1')).toBeInTheDocument(); expect(screen.getByText('3')).toBeInTheDocument(); });
  it('has accessible region', () => { render(<CodeBlock code="x" language="tsx" />); expect(screen.getByRole('region', { name: /tsx snippet/i })).toBeInTheDocument(); });
  it('forwards ref', () => { const ref = React.createRef<HTMLPreElement>(); render(<CodeBlock code="x" ref={ref} />); expect(ref.current).toBeInstanceOf(HTMLPreElement); });
});


describe('CodeBlock – additional coverage', () => {
  it('copies code to clipboard when copy button is clicked', async () => {
    const user = userEvent.setup();
    const writeTextMock = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, 'clipboard', { value: { writeText: writeTextMock }, writable: true, configurable: true });
    render(<CodeBlock code="const x = 1;" />);
    await user.click(screen.getByRole('button', { name: 'Copy code' }));
    expect(writeTextMock).toHaveBeenCalledWith('const x = 1;');
  });

  it('shows "✓ Copied" text after clicking copy', async () => {
    const user = userEvent.setup();
    vi.useFakeTimers({ shouldAdvanceTime: true });
    Object.defineProperty(navigator, 'clipboard', { value: { writeText: vi.fn().mockResolvedValue(undefined) }, writable: true, configurable: true });
    render(<CodeBlock code="x" />);
    await user.click(screen.getByRole('button', { name: 'Copy code' }));
    expect(screen.getByText('✓ Copied')).toBeInTheDocument();
    vi.useRealTimers();
  });

  it('reverts to "Copy" text after 2 seconds', async () => {
    const { act } = await import('react');
    vi.useFakeTimers();
    Object.defineProperty(navigator, 'clipboard', { value: { writeText: vi.fn().mockResolvedValue(undefined) }, writable: true, configurable: true });
    const { getByRole, getByText } = render(<CodeBlock code="x" />);
    const btn = getByRole('button', { name: 'Copy code' });
    act(() => { btn.click(); });
    expect(getByText('✓ Copied')).toBeInTheDocument();
    act(() => { vi.advanceTimersByTime(2000); });
    expect(getByText('Copy')).toBeInTheDocument();
    vi.useRealTimers();
  });

  it('renders language label when no filename is provided', () => {
    render(<CodeBlock code="x" language="typescript" />);
    expect(screen.getByText('typescript')).toBeInTheDocument();
  });

  it('renders "Code" label when neither filename nor language is provided', () => {
    render(<CodeBlock code="x" />);
    expect(screen.getByText('Code')).toBeInTheDocument();
  });

  it('renders filename in header when provided', () => {
    render(<CodeBlock code="x" filename="index.ts" />);
    expect(screen.getByText('index.ts')).toBeInTheDocument();
  });

  it('renders correct number of line numbers', () => {
    render(<CodeBlock code={"line1\nline2\nline3\nline4"} showLineNumbers />);
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('4')).toBeInTheDocument();
  });

  it('does not show line numbers by default', () => {
    render(<CodeBlock code={"a\nb"} />);
    // The code should be rendered as plain text, not with line number spans
    expect(screen.queryByText('1')).not.toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(<CodeBlock code="x" className="my-code" />);
    expect(container.firstChild).toHaveClass('ux4g-code-block', 'my-code');
  });

  it('pre element has tabIndex 0 for keyboard accessibility', () => {
    const ref = React.createRef<HTMLPreElement>();
    render(<CodeBlock code="x" ref={ref} />);
    expect(ref.current).toHaveAttribute('tabindex', '0');
  });

  it('renders aria-label with filename when provided', () => {
    render(<CodeBlock code="x" filename="app.tsx" />);
    expect(screen.getByRole('region', { name: 'app.tsx snippet' })).toBeInTheDocument();
  });

  it('renders header bar when copyable is true even without filename', () => {
    render(<CodeBlock code="x" copyable />);
    expect(screen.getByRole('button', { name: 'Copy code' })).toBeInTheDocument();
  });

  it('does not render header bar when copyable is false and no filename', () => {
    render(<CodeBlock code="x" copyable={false} />);
    expect(screen.queryByText('Code')).not.toBeInTheDocument();
  });
});
