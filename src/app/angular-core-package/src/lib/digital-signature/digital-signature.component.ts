import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @component DigitalSignature
 * @description Canvas-based signature pad with Aadhaar eSign integration
 *
 * @example
 * // Application Form Signature
 * <ux4g-digital-signature
 *   [width]="500"
 *   [height]="200"
 *   (signatureSaved)="saveSignature($event)"
 * ></ux4g-digital-signature>
 *
 * @example
 * // Aadhaar eSign
 * <ux4g-digital-signature
 *   [aadhaarEsign]="true"
 *   (esignInitiated)="initiateAadhaarEsign()"
 * ></ux4g-digital-signature>
 *
 * @example
 * // Passport Application Signature
 * <ux4g-digital-signature
 *   [width]="600"
 *   [height]="250"
 *   penColor="#000080"
 *   backgroundColor="#f9f9f9"
 * ></ux4g-digital-signature>
 */
interface Point {
  x: number;
  y: number;
}

@Component({
  selector: 'ux4g-digital-signature',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="ux4g-digital-signature" role="region" aria-label="Digital signature pad">
      <div class="ux4g-digital-signature__canvas-container">
        <canvas
          #signatureCanvas
          class="ux4g-digital-signature__canvas"
          [width]="width"
          [height]="height"
          (mousedown)="startDrawing($event)"
          (mousemove)="draw($event)"
          (mouseup)="stopDrawing()"
          (mouseleave)="stopDrawing()"
          (touchstart)="handleTouchStart($event)"
          (touchmove)="handleTouchMove($event)"
          (touchend)="stopDrawing()"
          role="img"
          aria-label="Signature canvas"
        ></canvas>
        @if (!hasSignature) {
          <div class="ux4g-digital-signature__placeholder">
            Sign here
          </div>
        }
      </div>

      <div class="ux4g-digital-signature__controls">
        <button
          class="ux4g-digital-signature__button ux4g-digital-signature__button--clear"
          (click)="clear()"
          [disabled]="!hasSignature"
          aria-label="Clear signature"
        >
          Clear
        </button>
        <button
          class="ux4g-digital-signature__button ux4g-digital-signature__button--undo"
          (click)="undo()"
          [disabled]="undoHistory.length === 0"
          aria-label="Undo last stroke"
        >
          Undo
        </button>
        <button
          class="ux4g-digital-signature__button ux4g-digital-signature__button--save"
          (click)="save()"
          [disabled]="!hasSignature"
          aria-label="Save signature"
        >
          Save Signature
        </button>
        @if (aadhaarEsign) {
          <button
            class="ux4g-digital-signature__button ux4g-digital-signature__button--esign"
            (click)="initiateEsign()"
            aria-label="Sign with Aadhaar eSign"
          >
            📱 Sign with Aadhaar eSign
          </button>
        }
      </div>
    </div>
  `,
  styleUrls: ['./digital-signature.component.css']
})
export class DigitalSignatureComponent implements AfterViewInit {
  @Input() width: number = 400;
  @Input() height: number = 200;
  @Input() backgroundColor: string = '#ffffff';
  @Input() penColor: string = '#000000';
  @Input() penWidth: number = 2;
  @Input() aadhaarEsign: boolean = false;

  @Output() signatureSaved = new EventEmitter<string>();
  @Output() esignInitiated = new EventEmitter<void>();

  @ViewChild('signatureCanvas', { static: false }) canvasRef!: ElementRef<HTMLCanvasElement>;

  private ctx!: CanvasRenderingContext2D;
  private isDrawing = false;
  private lastPoint: Point | null = null;
  hasSignature = false;
  undoHistory: ImageData[] = [];

  ngAfterViewInit(): void {
    const canvas = this.canvasRef.nativeElement;
    const context = canvas.getContext('2d');
    if (context) {
      this.ctx = context;
      this.initCanvas();
    }
  }

  private initCanvas(): void {
    this.ctx.fillStyle = this.backgroundColor;
    this.ctx.fillRect(0, 0, this.width, this.height);
    this.ctx.strokeStyle = this.penColor;
    this.ctx.lineWidth = this.penWidth;
    this.ctx.lineCap = 'round';
    this.ctx.lineJoin = 'round';
  }

  startDrawing(event: MouseEvent): void {
    this.isDrawing = true;
    const rect = this.canvasRef.nativeElement.getBoundingClientRect();
    this.lastPoint = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    };
    this.saveState();
  }

  draw(event: MouseEvent): void {
    if (!this.isDrawing || !this.lastPoint) return;

    const rect = this.canvasRef.nativeElement.getBoundingClientRect();
    const currentPoint: Point = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    };

    this.drawLine(this.lastPoint, currentPoint);
    this.lastPoint = currentPoint;
    this.hasSignature = true;
  }

  stopDrawing(): void {
    this.isDrawing = false;
    this.lastPoint = null;
  }

  handleTouchStart(event: TouchEvent): void {
    event.preventDefault();
    const touch = event.touches[0];
    const rect = this.canvasRef.nativeElement.getBoundingClientRect();
    this.isDrawing = true;
    this.lastPoint = {
      x: touch.clientX - rect.left,
      y: touch.clientY - rect.top
    };
    this.saveState();
  }

  handleTouchMove(event: TouchEvent): void {
    event.preventDefault();
    if (!this.isDrawing || !this.lastPoint) return;

    const touch = event.touches[0];
    const rect = this.canvasRef.nativeElement.getBoundingClientRect();
    const currentPoint: Point = {
      x: touch.clientX - rect.left,
      y: touch.clientY - rect.top
    };

    this.drawLine(this.lastPoint, currentPoint);
    this.lastPoint = currentPoint;
    this.hasSignature = true;
  }

  private drawLine(from: Point, to: Point): void {
    this.ctx.beginPath();
    this.ctx.moveTo(from.x, from.y);
    this.ctx.lineTo(to.x, to.y);
    this.ctx.stroke();
  }

  private saveState(): void {
    const imageData = this.ctx.getImageData(0, 0, this.width, this.height);
    this.undoHistory.push(imageData);
    if (this.undoHistory.length > 10) {
      this.undoHistory.shift();
    }
  }

  undo(): void {
    if (this.undoHistory.length === 0) return;

    this.undoHistory.pop(); // Remove current state
    if (this.undoHistory.length > 0) {
      const previousState = this.undoHistory[this.undoHistory.length - 1];
      this.ctx.putImageData(previousState, 0, 0);
    } else {
      this.clear();
    }
  }

  clear(): void {
    this.ctx.fillStyle = this.backgroundColor;
    this.ctx.fillRect(0, 0, this.width, this.height);
    this.hasSignature = false;
    this.undoHistory = [];
  }

  save(): void {
    const canvas = this.canvasRef.nativeElement;
    const dataURL = canvas.toDataURL('image/png');
    this.signatureSaved.emit(dataURL);
  }

  initiateEsign(): void {
    this.esignInitiated.emit();
  }
}
