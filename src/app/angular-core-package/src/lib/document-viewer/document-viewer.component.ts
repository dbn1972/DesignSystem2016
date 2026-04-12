import { Component, Input, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @component DocumentViewer
 * @description View images and basic document previews
 *
 * @example
 * // Aadhaar Card Preview
 * <ux4g-document-viewer
 *   src="aadhaar-card-scan.jpg"
 *   type="image"
 *   alt="Aadhaar Card"
 *   [zoom]="true"
 *   [download]="true"
 * ></ux4g-document-viewer>
 *
 * @example
 * // Application PDF Preview
 * <ux4g-document-viewer
 *   src="application-form.pdf"
 *   type="pdf"
 *   [download]="true"
 * ></ux4g-document-viewer>
 *
 * @example
 * // PAN Card Verification
 * <ux4g-document-viewer
 *   src="pan-card.jpg"
 *   type="image"
 *   alt="PAN Card"
 *   width="600px"
 *   height="400px"
 * ></ux4g-document-viewer>
 */
@Component({
  selector: 'ux4g-document-viewer',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `
    <div
      class="ux4g-document-viewer"
      [class.ux4g-document-viewer--fullscreen]="isFullscreen"
      role="region"
      aria-label="Document viewer"
    >
      <div class="ux4g-document-viewer__controls">
        @if (zoom && type === 'image') {
          <button
            class="ux4g-document-viewer__button"
            (click)="zoomIn()"
            aria-label="Zoom in"
            title="Zoom in"
          >
            🔍+
          </button>
          <button
            class="ux4g-document-viewer__button"
            (click)="zoomOut()"
            aria-label="Zoom out"
            title="Zoom out"
          >
            🔍-
          </button>
          <button
            class="ux4g-document-viewer__button"
            (click)="resetZoom()"
            aria-label="Reset zoom"
            title="Reset zoom"
          >
            ↻
          </button>
        }
        @if (download) {
          <button
            class="ux4g-document-viewer__button"
            (click)="downloadDocument()"
            aria-label="Download document"
            title="Download"
          >
            ⬇
          </button>
        }
        <button
          class="ux4g-document-viewer__button"
          (click)="toggleFullscreen()"
          [attr.aria-label]="isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'"
          [title]="isFullscreen ? 'Exit fullscreen' : 'Fullscreen'"
        >
          {{ isFullscreen ? '✕' : '⛶' }}
        </button>
      </div>

      <div
        class="ux4g-document-viewer__content"
        [style.width]="width"
        [style.height]="height"
      >
        @if (loading) {
          <div class="ux4g-document-viewer__loading" role="status" aria-live="polite">
            <div class="ux4g-document-viewer__spinner"></div>
            <span>Loading document...</span>
          </div>
        }

        @if (error && !loading) {
          <div class="ux4g-document-viewer__error" role="alert">
            <span>⚠️</span>
            <p>Failed to load document</p>
          </div>
        }

        @if (!loading && !error) {
          @if (type === 'image') {
            <div class="ux4g-document-viewer__image-container">
              <img
                [src]="src"
                [alt]="alt || 'Document preview'"
                [style.transform]="'scale(' + zoomLevel + ')'"
                class="ux4g-document-viewer__image"
                (load)="onLoad()"
                (error)="onError()"
              />
            </div>
          } @else if (type === 'pdf') {
            <iframe
              [src]="src"
              class="ux4g-document-viewer__pdf"
              [title]="alt || 'PDF document'"
              (load)="onLoad()"
              (error)="onError()"
            ></iframe>
          }
        }
      </div>
    </div>
  `,
  styleUrls: ['./document-viewer.component.css']
})
export class DocumentViewerComponent {
  @Input() src: string = '';
  @Input() type: 'image' | 'pdf' = 'image';
  @Input() alt?: string;
  @Input() width?: string;
  @Input() height?: string;
  @Input() zoom: boolean = true;
  @Input() download: boolean = true;

  loading: boolean = true;
  error: boolean = false;
  zoomLevel: number = 1;
  isFullscreen: boolean = false;

  zoomIn(): void {
    this.zoomLevel = Math.min(this.zoomLevel + 0.25, 3);
  }

  zoomOut(): void {
    this.zoomLevel = Math.max(this.zoomLevel - 0.25, 0.5);
  }

  resetZoom(): void {
    this.zoomLevel = 1;
  }

  toggleFullscreen(): void {
    this.isFullscreen = !this.isFullscreen;
  }

  downloadDocument(): void {
    const link = document.createElement('a');
    link.href = this.src;
    link.download = this.src.split('/').pop() || 'document';
    link.click();
  }

  onLoad(): void {
    this.loading = false;
    this.error = false;
  }

  onError(): void {
    this.loading = false;
    this.error = true;
  }
}
