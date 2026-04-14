/**
 * FileUpload Component
 * File upload with drag-and-drop
 *
 * @example
 * ```tsx
 * <FileUpload
 *   accept=".pdf,.jpg,.png"
 *   multiple
 *   maxSize={5 * 1024 * 1024}
 *   onChange={(files) => handleUpload(files)}
 * />
 * ```
 */

import { useState, useRef, ChangeEvent, DragEvent } from 'react';
import { cn } from '../../utils/cn';
import { FileUploadProps } from './FileUpload.types';

export function FileUpload({
  onChange,
  accept,
  multiple = false,
  maxSize,
  maxFiles,
  disabled = false,
  error = false,
  children,
  showFileList = true,
  validator,
  className,
  ...props
}: FileUploadProps) {
  const [files, setFiles] = useState<File[]>([]);
  const [dragActive, setDragActive] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const validateFile = (file: File): string | null => {
    if (validator) {
      return validator(file);
    }

    if (maxSize && file.size > maxSize) {
      return `File size exceeds ${(maxSize / (1024 * 1024)).toFixed(1)}MB`;
    }

    if (accept) {
      const acceptedTypes = accept.split(',').map((t) => t.trim());
      const fileExt = `.${file.name.split('.').pop()?.toLowerCase()}`;
      if (!acceptedTypes.some((type) => type === fileExt || file.type.match(type))) {
        return `File type not accepted. Allowed: ${accept}`;
      }
    }

    return null;
  };

  const handleFiles = (newFiles: FileList | null) => {
    if (!newFiles || disabled) return;

    const fileArray = Array.from(newFiles);
    const validationErrors: string[] = [];
    const validFiles: File[] = [];

    for (const file of fileArray) {
      const error = validateFile(file);
      if (error) {
        validationErrors.push(`${file.name}: ${error}`);
      } else {
        validFiles.push(file);
      }
    }

    if (maxFiles && files.length + validFiles.length > maxFiles) {
      validationErrors.push(`Maximum ${maxFiles} files allowed`);
      return;
    }

    const updatedFiles = multiple ? [...files, ...validFiles] : validFiles;
    setFiles(updatedFiles);
    setErrors(validationErrors);
    onChange?.(updatedFiles);
  };

  const handleDrag = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!disabled) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        setDragActive(true);
      } else if (e.type === 'dragleave') {
        setDragActive(false);
      }
    }
  };

  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (!disabled) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleFiles(e.target.files);
  };

  const removeFile = (index: number) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);
    onChange?.(updatedFiles);
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  return (
    <div className={cn('ux4g-file-upload', className)} {...props}>
      <div
        className={cn(
          'ux4g-file-upload-area',
          dragActive && 'ux4g-file-upload-drag-active',
          error && 'ux4g-file-upload-error',
          disabled && 'ux4g-file-upload-disabled'
        )}
        onDragEnter={handleDrag}
        onDragOver={handleDrag}
        onDragLeave={handleDrag}
        onDrop={handleDrop}
        onClick={() => !disabled && inputRef.current?.click()}
      >
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={handleChange}
          disabled={disabled}
          className="ux4g-file-upload-input"
          aria-label="File upload"
        />
        {children || (
          <div className="ux4g-file-upload-content">
            <div className="ux4g-file-upload-icon">📁</div>
            <p className="ux4g-file-upload-text">
              {dragActive ? 'Drop files here' : 'Drag and drop files here or click to browse'}
            </p>
            {accept && (
              <p className="ux4g-file-upload-hint">
                Accepted formats: {accept}
              </p>
            )}
            {maxSize && (
              <p className="ux4g-file-upload-hint">
                Maximum file size: {(maxSize / (1024 * 1024)).toFixed(1)}MB
              </p>
            )}
          </div>
        )}
      </div>

      {errors.length > 0 && (
        <div className="ux4g-file-upload-errors">
          {errors.map((err, index) => (
            <div key={index} className="ux4g-file-upload-error-item">
              {err}
            </div>
          ))}
        </div>
      )}

      {showFileList && files.length > 0 && (
        <div className="ux4g-file-upload-list">
          {files.map((file, index) => (
            <div key={index} className="ux4g-file-upload-item">
              <div className="ux4g-file-upload-item-info">
                <span className="ux4g-file-upload-item-name">{file.name}</span>
                <span className="ux4g-file-upload-item-size">
                  {formatFileSize(file.size)}
                </span>
              </div>
              <button
                type="button"
                className="ux4g-file-upload-item-remove"
                onClick={() => removeFile(index)}
                aria-label={`Remove ${file.name}`}
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

FileUpload.displayName = 'FileUpload';
