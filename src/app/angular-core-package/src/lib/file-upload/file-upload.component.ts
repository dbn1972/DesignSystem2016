import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  HostListener,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { classNames } from '../../utils/class-names';

/**
 * File information interface
 */
export interface FileInfo {
  file: File;
  id: string;
  name: string;
  size: number;
  type: string;
  error?: string;
}

/**
 * UX4G File Upload Component
 *
 * A file upload component with drag & drop support.
 * Includes file type and size validation.
 * Follows WCAG 2.1 Level AA accessibility standards.
 *
 * @example
 * <ux4g-file-upload
 *   label="Upload Documents"
 *   accept=".pdf,.doc,.docx"
 *   [multiple]="true"
 *   (filesSelected)="handleFiles($event)"
 * ></ux4g-file-upload>
 *
 * @example
 * <ux4g-file-upload
 *   label="Upload Photo ID"
 *   accept="image/*"
 *   [maxSize]="5242880"
 *   helperText="Maximum file size: 5MB"
 * ></ux4g-file-upload>
 */
@Component({
  selector: 'ux4g-file-upload',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="wrapperClasses" [attr.data-testid]="testId">
      @if (label) {
        <label [for]="inputId" class="ux4g-file-upload__label">
          {{ label }}
          @if (required) {
            <span class="ux4g-file-upload__required" aria-label="required">*</span>
          }
        </label>
      }

      <div
        [class]="dropZoneClasses"
        (click)="openFilePicker()"
        (dragover)="onDragOver($event)"
        (dragleave)="onDragLeave($event)"
        (drop)="onDrop($event)"
      >
        <input
          #fileInput
          type="file"
          [id]="inputId"
          [name]="name"
          [accept]="accept"
          [multiple]="multiple"
          [disabled]="disabled"
          [required]="required"
          [attr.aria-label]="ariaLabel || label || 'File upload'"
          [attr.aria-describedby]="helperId"
          class="ux4g-file-upload__input"
          (change)="onFileInputChange($event)"
        />

        <div class="ux4g-file-upload__content">
          <span class="ux4g-file-upload__icon" aria-hidden="true">📁</span>
          <p class="ux4g-file-upload__text">
            <span class="ux4g-file-upload__text-primary">Click to browse</span>
            <span class="ux4g-file-upload__text-secondary"> or drag and drop</span>
          </p>
          @if (accept) {
            <p class="ux4g-file-upload__hint">{{ getAcceptText() }}</p>
          }
        </div>
      </div>

      @if (helperText && !error) {
        <div class="ux4g-file-upload__helper-text" [id]="helperId">
          {{ helperText }}
        </div>
      }

      @if (errorText && error) {
        <div class="ux4g-file-upload__error-text" [id]="errorId" role="alert">
          {{ errorText }}
        </div>
      }

      @if (files.length > 0) {
        <ul class="ux4g-file-upload__file-list">
          @for (file of files; track file.id) {
            <li [class]="getFileItemClasses(file)">
              <div class="ux4g-file-upload__file-info">
                <span class="ux4g-file-upload__file-name">{{ file.name }}</span>
                <span class="ux4g-file-upload__file-size">{{ formatFileSize(file.size) }}</span>
              </div>
              @if (file.error) {
                <span class="ux4g-file-upload__file-error">{{ file.error }}</span>
              }
              <button
                type="button"
                class="ux4g-file-upload__remove-btn"
                [attr.aria-label]="'Remove ' + file.name"
                (click)="removeFile(file.id)"
              >
                ✕
              </button>
            </li>
          }
        </ul>
      }
    </div>
  `,
  styleUrls: ['./file-upload.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class FileUploadComponent {
  /**
   * File upload label
   */
  @Input() label?: string;

  /**
   * Helper text displayed below the upload area
   */
  @Input() helperText?: string;

  /**
   * Error text displayed when error is true
   */
  @Input() errorText?: string;

  /**
   * Input ID - auto-generated if not provided
   */
  @Input() id?: string;

  /**
   * Input name attribute
   */
  @Input() name?: string;

  /**
   * Accepted file types (e.g., ".pdf,.doc", "image/*")
   */
  @Input() accept?: string;

  /**
   * Whether multiple files can be selected
   * @default false
   */
  @Input() multiple: boolean = false;

  /**
   * Maximum file size in bytes
   */
  @Input() maxSize?: number;

  /**
   * Whether the input is disabled
   * @default false
   */
  @Input() disabled: boolean = false;

  /**
   * Whether the input is required
   * @default false
   */
  @Input() required: boolean = false;

  /**
   * Whether the input has an error
   * @default false
   */
  @Input() error: boolean = false;

  /**
   * Additional CSS classes
   */
  @Input() className?: string;

  /**
   * ARIA label for accessibility
   */
  @Input() ariaLabel?: string;

  /**
   * Test identifier
   */
  @Input() testId?: string;

  /**
   * Event emitted when files are selected
   */
  @Output() filesSelected = new EventEmitter<FileInfo[]>();

  /**
   * Event emitted when a file is removed
   */
  @Output() fileRemoved = new EventEmitter<string>();

  /**
   * Selected files
   */
  files: FileInfo[] = [];

  /**
   * Whether files are being dragged over the drop zone
   */
  isDragging: boolean = false;

  /**
   * Auto-generated unique ID
   */
  private static nextId = 0;
  private generatedId = 'ux4g-file-upload-' + FileUploadComponent.nextId++;

  /**
   * Get input ID
   */
  get inputId(): string {
    return this.id || this.generatedId;
  }

  /**
   * Get helper text ID
   */
  get helperId(): string {
    return this.inputId + '-helper';
  }

  /**
   * Get error text ID
   */
  get errorId(): string {
    return this.inputId + '-error';
  }

  /**
   * Computed wrapper classes
   */
  get wrapperClasses(): string {
    return classNames(
      'ux4g-file-upload-wrapper',
      this.disabled && 'ux4g-file-upload-wrapper--disabled',
      this.error && 'ux4g-file-upload-wrapper--error',
      this.className
    );
  }

  /**
   * Computed drop zone classes
   */
  get dropZoneClasses(): string {
    return classNames(
      'ux4g-file-upload__drop-zone',
      this.isDragging && 'ux4g-file-upload__drop-zone--dragging',
      this.disabled && 'ux4g-file-upload__drop-zone--disabled',
      this.error && 'ux4g-file-upload__drop-zone--error'
    );
  }

  /**
   * Get file item classes
   */
  getFileItemClasses(file: FileInfo): string {
    return classNames(
      'ux4g-file-upload__file-item',
      file.error && 'ux4g-file-upload__file-item--error'
    );
  }

  /**
   * Open file picker dialog
   */
  openFilePicker(): void {
    if (!this.disabled) {
      const input = document.getElementById(this.inputId) as HTMLInputElement;
      input?.click();
    }
  }

  /**
   * Handle file input change
   */
  onFileInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.handleFiles(Array.from(input.files));
    }
  }

  /**
   * Handle drag over event
   */
  onDragOver(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    if (!this.disabled) {
      this.isDragging = true;
    }
  }

  /**
   * Handle drag leave event
   */
  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = false;
  }

  /**
   * Handle drop event
   */
  onDrop(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = false;

    if (!this.disabled && event.dataTransfer?.files) {
      this.handleFiles(Array.from(event.dataTransfer.files));
    }
  }

  /**
   * Handle selected files
   */
  private handleFiles(fileList: File[]): void {
    const newFiles: FileInfo[] = fileList.map(file => {
      const fileInfo: FileInfo = {
        file,
        id: this.generateFileId(),
        name: file.name,
        size: file.size,
        type: file.type,
      };

      // Validate file size
      if (this.maxSize && file.size > this.maxSize) {
        fileInfo.error = `File size exceeds maximum of ${this.formatFileSize(this.maxSize)}`;
      }

      // Validate file type
      if (this.accept && !this.isFileTypeAccepted(file)) {
        fileInfo.error = `File type not accepted`;
      }

      return fileInfo;
    });

    if (this.multiple) {
      this.files = [...this.files, ...newFiles];
    } else {
      this.files = newFiles;
    }

    this.filesSelected.emit(this.files);
  }

  /**
   * Remove a file
   */
  removeFile(fileId: string): void {
    this.files = this.files.filter(f => f.id !== fileId);
    this.fileRemoved.emit(fileId);
    this.filesSelected.emit(this.files);
  }

  /**
   * Check if file type is accepted
   */
  private isFileTypeAccepted(file: File): boolean {
    if (!this.accept) return true;

    const acceptedTypes = this.accept.split(',').map(t => t.trim());

    return acceptedTypes.some(type => {
      if (type.startsWith('.')) {
        return file.name.toLowerCase().endsWith(type.toLowerCase());
      } else if (type.endsWith('/*')) {
        const category = type.split('/')[0];
        return file.type.startsWith(category + '/');
      } else {
        return file.type === type;
      }
    });
  }

  /**
   * Generate unique file ID
   */
  private generateFileId(): string {
    return `file-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * Format file size for display
   */
  formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
  }

  /**
   * Get accept text for display
   */
  getAcceptText(): string {
    if (!this.accept) return '';

    const types = this.accept.split(',').map(t => t.trim());
    return types.join(', ');
  }
}
