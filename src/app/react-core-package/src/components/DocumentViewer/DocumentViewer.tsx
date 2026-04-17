/**
 * DocumentViewer Component
 * Document/PDF preview container supporting PDF, image, and text types.
 *
 * @example
 * ```tsx
 * <DocumentViewer src="/doc.pdf" title="Report" type="pdf" downloadable />
 * ```
 */

import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { DocumentViewerProps } from './DocumentViewer.types';

export const DocumentViewer = forwardRef<HTMLDivElement, DocumentViewerProps>(
  (
    {
      src,
      title,
      type = 'pdf',
      height = 500,
      downloadable = false,
      onDownload,
      className,
      ...props
    },
    ref
  ) => {
    const renderContent = () => {
      switch (type) {
        case 'image':
          return (
            <img
              src={src}
              alt={title || 'Document'}
              className="ux4g-document-viewer-image max-w-full"
              style={{ maxHeight: height }}
            />
          );
        case 'text':
          return (
            <div
              className="ux4g-document-viewer-text p-4 border rounded-md overflow-auto bg-muted"
              style={{ height }}
              role="document"
              aria-label={title || 'Text document'}
            >
              <p className="text-sm text-muted-foreground">Text document: {src}</p>
            </div>
          );
        case 'pdf':
        default:
          return (
            <iframe
              src={src}
              title={title || 'Document viewer'}
              className="ux4g-document-viewer-iframe w-full border rounded-md"
              style={{ height }}
            />
          );
      }
    };

    return (
      <div ref={ref} className={cn('ux4g-document-viewer', className)} {...props}>
        {title && (
          <div className="ux4g-document-viewer-header flex items-center justify-between mb-2">
            <p className="ux4g-document-viewer-title text-sm font-medium text-foreground">{title}</p>
            {downloadable && (
              <button
                type="button"
                onClick={onDownload}
                className="ux4g-document-viewer-download text-sm text-primary underline"
                aria-label={`Download ${title}`}
              >
                Download
              </button>
            )}
          </div>
        )}
        {renderContent()}
      </div>
    );
  }
);

DocumentViewer.displayName = 'DocumentViewer';
