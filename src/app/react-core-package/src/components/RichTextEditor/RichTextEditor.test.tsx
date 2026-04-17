import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { RichTextEditor } from './RichTextEditor';

describe('RichTextEditor', () => {
  it('renders the editor area', () => {
    render(<RichTextEditor />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('renders toolbar buttons', () => {
    render(<RichTextEditor toolbar={['bold', 'italic', 'underline']} />);
    expect(screen.getByRole('button', { name: 'bold' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'italic' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'underline' })).toBeInTheDocument();
  });

  it('renders toolbar with role', () => {
    render(<RichTextEditor />);
    expect(screen.getByRole('toolbar')).toBeInTheDocument();
  });

  it('renders with custom toolbar actions', () => {
    render(<RichTextEditor toolbar={['bold', 'link', 'list']} />);
    expect(screen.getByRole('button', { name: 'bold' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'link' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'list' })).toBeInTheDocument();
  });

  it('sets contentEditable on editor', () => {
    render(<RichTextEditor />);
    expect(screen.getByRole('textbox')).toHaveAttribute('contenteditable', 'true');
  });

  it('disables contentEditable when disabled', () => {
    render(<RichTextEditor disabled />);
    expect(screen.getByRole('textbox')).toHaveAttribute('contenteditable', 'false');
  });

  it('sets aria-multiline', () => {
    render(<RichTextEditor />);
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-multiline', 'true');
  });

  it('forwards ref', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<RichTextEditor ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
