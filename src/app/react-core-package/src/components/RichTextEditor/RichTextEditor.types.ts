import { BaseComponentProps } from '../../types/common';

export type ToolbarAction = 'bold' | 'italic' | 'underline' | 'link' | 'list';

export interface RichTextEditorProps extends BaseComponentProps {
  /** HTML content value */
  value?: string;

  /** Called when content changes */
  onChange?: (value: string) => void;

  /** Placeholder text */
  placeholder?: string;

  /** Whether the editor is disabled */
  disabled?: boolean;

  /** Minimum height of the editor */
  minHeight?: number | string;

  /** Toolbar actions to display */
  toolbar?: ToolbarAction[];
}
