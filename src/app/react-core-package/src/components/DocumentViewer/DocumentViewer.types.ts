import { BaseComponentProps } from '../../types/common';

export type DocumentType = 'pdf' | 'image' | 'text';

export interface DocumentViewerProps extends BaseComponentProps {
  /** Document source URL */
  src: string;

  /** Document title */
  title?: string;

  /** Type of document to display */
  type?: DocumentType;

  /** Viewer height */
  height?: number | string;

  /** Whether the document can be downloaded */
  downloadable?: boolean;

  /** Called when download button is clicked */
  onDownload?: () => void;
}
