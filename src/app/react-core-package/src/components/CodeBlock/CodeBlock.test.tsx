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
