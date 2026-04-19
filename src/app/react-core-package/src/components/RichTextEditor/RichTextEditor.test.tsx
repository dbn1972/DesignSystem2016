import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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


describe('RichTextEditor – additional coverage', () => {
  it('renders initial value as HTML content', () => {
    render(<RichTextEditor value="<p>Hello</p>" />);
    expect(screen.getByRole('textbox')).toContainHTML('<p>Hello</p>');
  });

  it('applies custom className', () => {
    const { container } = render(<RichTextEditor className="my-editor" />);
    expect(container.firstChild).toHaveClass('ux4g-rich-text-editor', 'my-editor');
  });

  it('applies custom minHeight style', () => {
    render(<RichTextEditor minHeight={300} />);
    expect(screen.getByRole('textbox')).toHaveStyle({ minHeight: '300px' });
  });

  it('sets aria-placeholder on the editor', () => {
    render(<RichTextEditor placeholder="Write something..." />);
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-placeholder', 'Write something...');
  });

  it('disables toolbar buttons when disabled', () => {
    render(<RichTextEditor disabled toolbar={['bold', 'italic']} />);
    expect(screen.getByRole('button', { name: 'bold' })).toBeDisabled();
    expect(screen.getByRole('button', { name: 'italic' })).toBeDisabled();
  });

  it('applies disabled styling to toolbar buttons', () => {
    render(<RichTextEditor disabled toolbar={['bold']} />);
    expect(screen.getByRole('button', { name: 'bold' })).toHaveClass('opacity-50', 'cursor-not-allowed');
  });

  it('applies disabled styling to editor area', () => {
    render(<RichTextEditor disabled />);
    expect(screen.getByRole('textbox')).toHaveClass('opacity-50', 'cursor-not-allowed', 'bg-muted');
  });

  it('calls onChange when content is edited', async () => {
    const onChange = vi.fn();
    render(<RichTextEditor onChange={onChange} />);
    const editor = screen.getByRole('textbox');
    const { fireEvent } = await import('@testing-library/react');
    fireEvent.input(editor, { target: { innerHTML: '<p>New content</p>' } });
    expect(onChange).toHaveBeenCalled();
  });

  it('executes bold command when bold button is clicked', async () => {
    const user = userEvent.setup();
    document.execCommand = vi.fn().mockReturnValue(true);
    render(<RichTextEditor toolbar={['bold']} />);
    await user.click(screen.getByRole('button', { name: 'bold' }));
    expect(document.execCommand).toHaveBeenCalledWith('bold', false);
  });

  it('executes italic command when italic button is clicked', async () => {
    const user = userEvent.setup();
    document.execCommand = vi.fn().mockReturnValue(true);
    render(<RichTextEditor toolbar={['italic']} />);
    await user.click(screen.getByRole('button', { name: 'italic' }));
    expect(document.execCommand).toHaveBeenCalledWith('italic', false);
  });

  it('executes underline command when underline button is clicked', async () => {
    const user = userEvent.setup();
    document.execCommand = vi.fn().mockReturnValue(true);
    render(<RichTextEditor toolbar={['underline']} />);
    await user.click(screen.getByRole('button', { name: 'underline' }));
    expect(document.execCommand).toHaveBeenCalledWith('underline', false);
  });

  it('prompts for URL when link button is clicked', async () => {
    const user = userEvent.setup();
    const promptSpy = vi.spyOn(window, 'prompt').mockReturnValue('https://example.com');
    document.execCommand = vi.fn().mockReturnValue(true);
    render(<RichTextEditor toolbar={['link']} />);
    await user.click(screen.getByRole('button', { name: 'link' }));
    expect(promptSpy).toHaveBeenCalledWith('Enter URL:');
    expect(document.execCommand).toHaveBeenCalledWith('createLink', false, 'https://example.com');
    promptSpy.mockRestore();
  });

  it('does not execute createLink when prompt is cancelled', async () => {
    const user = userEvent.setup();
    const promptSpy = vi.spyOn(window, 'prompt').mockReturnValue(null);
    document.execCommand = vi.fn().mockReturnValue(true);
    render(<RichTextEditor toolbar={['link']} />);
    await user.click(screen.getByRole('button', { name: 'link' }));
    expect(document.execCommand).not.toHaveBeenCalled();
    promptSpy.mockRestore();
  });

  it('executes list command when list button is clicked', async () => {
    const user = userEvent.setup();
    document.execCommand = vi.fn().mockReturnValue(true);
    render(<RichTextEditor toolbar={['list']} />);
    await user.click(screen.getByRole('button', { name: 'list' }));
    expect(document.execCommand).toHaveBeenCalledWith('insertUnorderedList', false);
  });

  it('renders with empty toolbar', () => {
    render(<RichTextEditor toolbar={[]} />);
    expect(screen.getByRole('toolbar')).toBeInTheDocument();
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('spreads additional props to root div', () => {
    render(<RichTextEditor data-testid="rte-root" />);
    expect(screen.getByTestId('rte-root')).toBeInTheDocument();
  });
});
