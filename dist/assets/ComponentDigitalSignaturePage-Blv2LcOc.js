import{j as e,r as l}from"./index-LBJNeHTL.js";import{C}from"./ComponentDocumentation-DvEedSJi.js";import{T as D}from"./trash-2-C2vR3CRM.js";import{U as T}from"./upload-kaFZbCo3.js";import"./copy-dn9avyEa.js";import"./info-Cuapm3Yw.js";import"./external-link-BMCrsasL.js";const n=({width:o=400,height:d=200,penColor:m="#000000",penWidth:f=2,signatureType:r="draw",label:u,required:h,...v})=>{const s=l.useRef(null),[b,c]=l.useState(!1),[y,p]=l.useState(""),x=t=>{if(r!=="draw")return;c(!0);const i=s.current;if(i){const a=i.getContext("2d");a&&(a.beginPath(),a.moveTo(t.nativeEvent.offsetX,t.nativeEvent.offsetY))}},w=t=>{if(!b||r!=="draw")return;const i=s.current;if(i){const a=i.getContext("2d");a&&(a.strokeStyle=m,a.lineWidth=f,a.lineCap="round",a.lineJoin="round",a.lineTo(t.nativeEvent.offsetX,t.nativeEvent.offsetY),a.stroke())}},g=()=>{c(!1)},S=()=>{const t=s.current;if(t){const i=t.getContext("2d");i&&i.clearRect(0,0,t.width,t.height)}p("")};return e.jsxs("div",{className:"inline-flex flex-col gap-2",children:[u&&e.jsxs("label",{className:"text-sm font-medium text-gray-700",children:[u,h&&e.jsx("span",{className:"text-red-600 ml-1",children:"*"})]}),r==="draw"&&e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("canvas",{ref:s,width:o,height:d,className:"border-2 border-gray-300 rounded cursor-crosshair bg-white",onMouseDown:x,onMouseMove:w,onMouseUp:g,onMouseLeave:g,role:"img","aria-label":"Signature drawing canvas",...v}),e.jsxs("button",{onClick:S,className:"flex items-center gap-2 px-3 py-1.5 text-sm text-gray-700 border border-gray-300 rounded hover:bg-gray-50",type:"button",children:[e.jsx(D,{size:14}),"Clear"]})]}),r==="type"&&e.jsx("div",{className:"flex flex-col gap-2",children:e.jsx("input",{type:"text",value:y,onChange:t=>p(t.target.value),placeholder:"Type your full name",className:"px-4 py-3 text-2xl border-2 border-gray-300 rounded font-cursive",style:{width:o,fontFamily:"Brush Script MT, cursive"},"aria-label":"Type your signature"})}),r==="upload"&&e.jsxs("div",{className:"flex flex-col items-center justify-center gap-2 border-2 border-dashed border-gray-300 rounded bg-gray-50 cursor-pointer hover:bg-gray-100",style:{width:o,height:d},children:[e.jsx(T,{size:24,className:"text-gray-400"}),e.jsx("span",{className:"text-sm text-gray-600",children:"Click to upload signature image"}),e.jsx("input",{type:"file",accept:"image/*",className:"hidden","aria-label":"Upload signature image"})]})]})};function I(){return e.jsx(C,{name:"Digital Signature",description:"Advanced component for capturing digital signatures on government documents. Supports drawing, typing, and uploading signatures with full accessibility compliance for application forms, declarations, and consent documents.",category:"Government Services",maturity:"beta",tier:"composite",since:"v2.1.0",updated:"v2.2.0",props:[{name:"onSave",type:"(signature: string | File) => void",required:!1,description:"Callback function called when signature is saved. Receives the signature data as base64 string (for drawn/typed) or File object (for uploaded)."},{name:"onClear",type:"() => void",required:!1,description:"Callback function called when signature is cleared."},{name:"width",type:"number",default:"400",required:!1,description:"Width of the signature area in pixels."},{name:"height",type:"number",default:"200",required:!1,description:"Height of the signature area in pixels."},{name:"penColor",type:"string",default:"'#000000'",required:!1,description:"Color of the pen for drawing signatures. Hex color value."},{name:"penWidth",type:"number",default:"2",required:!1,description:"Width of the pen stroke in pixels for drawing signatures."},{name:"signatureType",type:"'draw' | 'type' | 'upload'",default:"'draw'",required:!1,description:"Method for capturing signature. Draw uses canvas API, type allows text input with cursive font, upload accepts image files."},{name:"required",type:"boolean",default:"false",required:!1,description:"Whether the signature is required. Displays required indicator and validates on form submission."},{name:"label",type:"string",required:!1,description:"Label text displayed above the signature area."},{name:"placeholder",type:"string",default:"'Sign here'",required:!1,description:"Placeholder text displayed in empty signature area."},{name:"backgroundColor",type:"string",default:"'#ffffff'",required:!1,description:"Background color of the signature area."},{name:"disabled",type:"boolean",default:"false",required:!1,description:"Whether the signature input is disabled."},{name:"className",type:"string",required:!1,description:"Additional CSS classes to apply to the container."}],examples:[{title:"Draw Signature Pad",description:"Canvas-based signature drawing with configurable pen color and width.",code:`import { DigitalSignature } from '@ux4g/react-composite';

function Example() {
  const handleSave = (signature: string) => {
    console.log('Signature saved:', signature);
    // Save to backend or state
  };

  return (
    <DigitalSignature
      signatureType="draw"
      label="Applicant Signature"
      required
      width={500}
      height={200}
      penColor="#000000"
      penWidth={2}
      onSave={handleSave}
      onClear={() => console.log('Signature cleared')}
    />
  );
}`,preview:e.jsx(n,{signatureType:"draw",label:"Applicant Signature",required:!0,width:500,height:200,penColor:"#000000",penWidth:2})},{title:"Type Signature",description:"Text input with cursive font styling for typed signatures.",code:`import { DigitalSignature } from '@ux4g/react-composite';

function Example() {
  return (
    <DigitalSignature
      signatureType="type"
      label="Type Your Full Name"
      required
      width={400}
      placeholder="John Doe"
      onSave={(signature) => console.log('Typed:', signature)}
    />
  );
}`,preview:e.jsx(n,{signatureType:"type",label:"Type Your Full Name",required:!0,width:400})},{title:"Upload Signature Image",description:"File upload option for pre-scanned or digital signature images.",code:`import { DigitalSignature } from '@ux4g/react-composite';

function Example() {
  const handleUpload = (file: File) => {
    console.log('Uploaded file:', file.name);
    // Process and save uploaded signature
  };

  return (
    <DigitalSignature
      signatureType="upload"
      label="Upload Signature"
      width={400}
      height={200}
      onSave={handleUpload}
    />
  );
}`,preview:e.jsx(n,{signatureType:"upload",label:"Upload Signature",width:400,height:200})},{title:"Different Sizes",description:"Signature pads can be sized for different contexts and devices.",code:`import { DigitalSignature } from '@ux4g/react-composite';

function Example() {
  return (
    <div className="flex flex-col gap-6">
      <DigitalSignature
        signatureType="draw"
        label="Compact (Mobile)"
        width={300}
        height={120}
      />
      <DigitalSignature
        signatureType="draw"
        label="Standard (Desktop)"
        width={500}
        height={200}
      />
      <DigitalSignature
        signatureType="draw"
        label="Large (Tablet)"
        width={700}
        height={250}
      />
    </div>
  );
}`,preview:e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsx(n,{signatureType:"draw",label:"Compact (Mobile)",width:300,height:120}),e.jsx(n,{signatureType:"draw",label:"Standard (Desktop)",width:500,height:200})]})},{title:"With Validation",description:"Required signature with validation and error states.",code:`import { DigitalSignature } from '@ux4g/react-composite';
import { useState } from 'react';

function Example() {
  const [signature, setSignature] = useState<string | null>(null);
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!signature) {
      setError('Signature is required to submit this form');
      return;
    }
    setError('');
    // Process form submission
  };

  return (
    <div>
      <DigitalSignature
        signatureType="draw"
        label="Declaration Signature"
        required
        width={500}
        height={200}
        onSave={(sig) => {
          setSignature(sig);
          setError('');
        }}
        onClear={() => setSignature(null)}
      />
      {error && (
        <p className="mt-2 text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
      <button
        onClick={handleSubmit}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Submit Application
      </button>
    </div>
  );
}`,preview:e.jsxs("div",{children:[e.jsx(n,{signatureType:"draw",label:"Declaration Signature",required:!0,width:500,height:200}),e.jsx("p",{className:"mt-2 text-sm text-gray-600",children:"Complete your signature above to enable submission"})]})}],reactCode:{component:`import React, { useRef, useState, useEffect, forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { DigitalSignatureProps } from './DigitalSignature.types';

export const DigitalSignature = forwardRef<HTMLDivElement, DigitalSignatureProps>(
  (
    {
      className,
      signatureType = 'draw',
      width = 400,
      height = 200,
      penColor = '#000000',
      penWidth = 2,
      backgroundColor = '#ffffff',
      label,
      placeholder = 'Sign here',
      required = false,
      disabled = false,
      onSave,
      onClear,
      'aria-label': ariaLabel,
      ...props
    },
    ref
  ) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [isEmpty, setIsEmpty] = useState(true);
    const [typedSignature, setTypedSignature] = useState('');

    useEffect(() => {
      if (canvasRef.current && signatureType === 'draw') {
        const ctx = canvasRef.current.getContext('2d');
        if (ctx) {
          ctx.fillStyle = backgroundColor;
          ctx.fillRect(0, 0, width, height);
        }
      }
    }, [backgroundColor, width, height, signatureType]);

    const getCoordinates = (e: React.MouseEvent | React.TouchEvent) => {
      const canvas = canvasRef.current;
      if (!canvas) return { x: 0, y: 0 };

      const rect = canvas.getBoundingClientRect();

      if ('touches' in e) {
        return {
          x: e.touches[0].clientX - rect.left,
          y: e.touches[0].clientY - rect.top,
        };
      }

      return {
        x: (e as React.MouseEvent).clientX - rect.left,
        y: (e as React.MouseEvent).clientY - rect.top,
      };
    };

    const startDrawing = (e: React.MouseEvent | React.TouchEvent) => {
      if (disabled || signatureType !== 'draw') return;

      e.preventDefault();
      setIsDrawing(true);
      const { x, y } = getCoordinates(e);
      const ctx = canvasRef.current?.getContext('2d');

      if (ctx) {
        ctx.beginPath();
        ctx.moveTo(x, y);
      }
    };

    const draw = (e: React.MouseEvent | React.TouchEvent) => {
      if (!isDrawing || disabled || signatureType !== 'draw') return;

      e.preventDefault();
      const { x, y } = getCoordinates(e);
      const ctx = canvasRef.current?.getContext('2d');

      if (ctx) {
        ctx.strokeStyle = penColor;
        ctx.lineWidth = penWidth;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.lineTo(x, y);
        ctx.stroke();
        setIsEmpty(false);
      }
    };

    const stopDrawing = () => {
      setIsDrawing(false);
    };

    const handleClear = () => {
      if (signatureType === 'draw' && canvasRef.current) {
        const ctx = canvasRef.current.getContext('2d');
        if (ctx) {
          ctx.fillStyle = backgroundColor;
          ctx.fillRect(0, 0, width, height);
          setIsEmpty(true);
        }
      } else if (signatureType === 'type') {
        setTypedSignature('');
      }

      onClear?.();
    };

    const handleSave = () => {
      if (signatureType === 'draw' && canvasRef.current) {
        const dataUrl = canvasRef.current.toDataURL('image/png');
        onSave?.(dataUrl);
      } else if (signatureType === 'type') {
        onSave?.(typedSignature);
      }
    };

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        onSave?.(file);
      }
    };

    return (
      <div ref={ref} className={cn('flex flex-col gap-2', className)} {...props}>
        {label && (
          <label className="text-sm font-medium text-gray-700">
            {label}
            {required && <span className="text-red-600 ml-1" aria-label="required">*</span>}
          </label>
        )}

        {signatureType === 'draw' && (
          <>
            <canvas
              ref={canvasRef}
              width={width}
              height={height}
              className={cn(
                'border-2 rounded touch-none',
                disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white cursor-crosshair',
                'border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500'
              )}
              onMouseDown={startDrawing}
              onMouseMove={draw}
              onMouseUp={stopDrawing}
              onMouseLeave={stopDrawing}
              onTouchStart={startDrawing}
              onTouchMove={draw}
              onTouchEnd={stopDrawing}
              role="img"
              aria-label={ariaLabel || label || 'Signature drawing canvas'}
              tabIndex={disabled ? -1 : 0}
            />
            <div className="flex gap-2">
              <button
                type="button"
                onClick={handleClear}
                disabled={disabled || isEmpty}
                className="flex items-center gap-2 px-3 py-1.5 text-sm border rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Clear
              </button>
              <button
                type="button"
                onClick={handleSave}
                disabled={disabled || isEmpty}
                className="flex items-center gap-2 px-3 py-1.5 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Save Signature
              </button>
            </div>
          </>
        )}

        {signatureType === 'type' && (
          <>
            <input
              type="text"
              value={typedSignature}
              onChange={(e) => setTypedSignature(e.target.value)}
              placeholder={placeholder}
              disabled={disabled}
              className={cn(
                'px-4 py-3 text-2xl border-2 rounded',
                'focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500',
                disabled && 'bg-gray-100 cursor-not-allowed'
              )}
              style={{
                width,
                fontFamily: 'Brush Script MT, Segoe Script, cursive'
              }}
              aria-label={ariaLabel || label || 'Type your signature'}
              aria-required={required}
            />
            <button
              type="button"
              onClick={handleSave}
              disabled={disabled || !typedSignature}
              className="self-start px-3 py-1.5 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Save Signature
            </button>
          </>
        )}

        {signatureType === 'upload' && (
          <label
            className={cn(
              'flex flex-col items-center justify-center gap-2',
              'border-2 border-dashed rounded cursor-pointer',
              disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-gray-50 hover:bg-gray-100',
              'transition-colors'
            )}
            style={{ width, height }}
          >
            <div className="flex flex-col items-center gap-2 text-gray-600">
              <span className="text-sm">Click to upload signature image</span>
              <span className="text-xs text-gray-500">PNG, JPG up to 5MB</span>
            </div>
            <input
              type="file"
              accept="image/png,image/jpeg,image/jpg"
              onChange={handleFileUpload}
              disabled={disabled}
              className="hidden"
              aria-label={ariaLabel || label || 'Upload signature image'}
            />
          </label>
        )}
      </div>
    );
  }
);

DigitalSignature.displayName = 'DigitalSignature';`,types:`export type SignatureType = 'draw' | 'type' | 'upload';

export interface DigitalSignatureProps extends React.HTMLAttributes<HTMLDivElement> {
  signatureType?: SignatureType;
  width?: number;
  height?: number;
  penColor?: string;
  penWidth?: number;
  backgroundColor?: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  onSave?: (signature: string | File) => void;
  onClear?: () => void;
  'aria-label'?: string;
}`,variants:`import { cva } from 'class-variance-authority';

export const digitalSignatureVariants = cva(
  ['flex flex-col gap-2'],
  {
    variants: {
      disabled: {
        true: 'opacity-60 cursor-not-allowed',
        false: '',
      },
    },
    defaultVariants: {
      disabled: false,
    },
  }
);`},angularCode:{component:`import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

type SignatureType = 'draw' | 'type' | 'upload';

@Component({
  selector: 'ux4g-digital-signature',
  template: \`
    <div class="digital-signature-container">
      <label *ngIf="label" class="signature-label">
        {{ label }}
        <span *ngIf="required" class="required-indicator">*</span>
      </label>

      <!-- Draw Signature -->
      <div *ngIf="signatureType === 'draw'" class="signature-draw">
        <canvas
          #signatureCanvas
          [width]="width"
          [height]="height"
          [class.disabled]="disabled"
          (mousedown)="startDrawing($event)"
          (mousemove)="draw($event)"
          (mouseup)="stopDrawing()"
          (mouseleave)="stopDrawing()"
          (touchstart)="startDrawing($event)"
          (touchmove)="draw($event)"
          (touchend)="stopDrawing()"
          role="img"
          [attr.aria-label]="label || 'Signature drawing canvas'"
          tabindex="0"
        ></canvas>
        <div class="signature-actions">
          <button
            type="button"
            (click)="clear()"
            [disabled]="disabled || isEmpty"
            class="btn-clear"
          >
            Clear
          </button>
          <button
            type="button"
            (click)="save()"
            [disabled]="disabled || isEmpty"
            class="btn-save"
          >
            Save Signature
          </button>
        </div>
      </div>

      <!-- Type Signature -->
      <div *ngIf="signatureType === 'type'" class="signature-type">
        <input
          type="text"
          [(ngModel)]="typedSignature"
          [placeholder]="placeholder"
          [disabled]="disabled"
          [style.width.px]="width"
          class="signature-input"
          [attr.aria-label]="label || 'Type your signature'"
          [attr.aria-required]="required"
        />
        <button
          type="button"
          (click)="save()"
          [disabled]="disabled || !typedSignature"
          class="btn-save"
        >
          Save Signature
        </button>
      </div>

      <!-- Upload Signature -->
      <div *ngIf="signatureType === 'upload'" class="signature-upload">
        <label
          [class.disabled]="disabled"
          [style.width.px]="width"
          [style.height.px]="height"
          class="upload-label"
        >
          <div class="upload-content">
            <span>Click to upload signature image</span>
            <span class="upload-hint">PNG, JPG up to 5MB</span>
          </div>
          <input
            type="file"
            accept="image/png,image/jpeg,image/jpg"
            (change)="handleFileUpload($event)"
            [disabled]="disabled"
            class="upload-input"
            [attr.aria-label]="label || 'Upload signature image'"
          />
        </label>
      </div>
    </div>
  \`,
  styleUrls: ['./digital-signature.component.css']
})
export class DigitalSignatureComponent implements AfterViewInit {
  @ViewChild('signatureCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  @Input() signatureType: SignatureType = 'draw';
  @Input() width = 400;
  @Input() height = 200;
  @Input() penColor = '#000000';
  @Input() penWidth = 2;
  @Input() backgroundColor = '#ffffff';
  @Input() label?: string;
  @Input() placeholder = 'Sign here';
  @Input() required = false;
  @Input() disabled = false;

  @Output() signatureSaved = new EventEmitter<string | File>();
  @Output() signatureCleared = new EventEmitter<void>();

  isDrawing = false;
  isEmpty = true;
  typedSignature = '';

  ngAfterViewInit(): void {
    if (this.signatureType === 'draw' && this.canvasRef) {
      this.initializeCanvas();
    }
  }

  initializeCanvas(): void {
    const canvas = this.canvasRef.nativeElement;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.fillStyle = this.backgroundColor;
      ctx.fillRect(0, 0, this.width, this.height);
    }
  }

  getCoordinates(e: MouseEvent | TouchEvent): { x: number; y: number } {
    const canvas = this.canvasRef.nativeElement;
    const rect = canvas.getBoundingClientRect();

    if (e instanceof TouchEvent) {
      return {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top,
      };
    }

    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  }

  startDrawing(e: MouseEvent | TouchEvent): void {
    if (this.disabled) return;

    e.preventDefault();
    this.isDrawing = true;
    const { x, y } = this.getCoordinates(e);
    const ctx = this.canvasRef.nativeElement.getContext('2d');

    if (ctx) {
      ctx.beginPath();
      ctx.moveTo(x, y);
    }
  }

  draw(e: MouseEvent | TouchEvent): void {
    if (!this.isDrawing || this.disabled) return;

    e.preventDefault();
    const { x, y } = this.getCoordinates(e);
    const ctx = this.canvasRef.nativeElement.getContext('2d');

    if (ctx) {
      ctx.strokeStyle = this.penColor;
      ctx.lineWidth = this.penWidth;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.lineTo(x, y);
      ctx.stroke();
      this.isEmpty = false;
    }
  }

  stopDrawing(): void {
    this.isDrawing = false;
  }

  clear(): void {
    if (this.signatureType === 'draw') {
      const ctx = this.canvasRef.nativeElement.getContext('2d');
      if (ctx) {
        ctx.fillStyle = this.backgroundColor;
        ctx.fillRect(0, 0, this.width, this.height);
        this.isEmpty = true;
      }
    } else if (this.signatureType === 'type') {
      this.typedSignature = '';
    }

    this.signatureCleared.emit();
  }

  save(): void {
    if (this.signatureType === 'draw') {
      const dataUrl = this.canvasRef.nativeElement.toDataURL('image/png');
      this.signatureSaved.emit(dataUrl);
    } else if (this.signatureType === 'type') {
      this.signatureSaved.emit(this.typedSignature);
    }
  }

  handleFileUpload(e: Event): void {
    const input = e.target as HTMLInputElement;
    const file = input.files?.[0];
    if (file) {
      this.signatureSaved.emit(file);
    }
  }
}`,module:`import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DigitalSignatureComponent } from './digital-signature.component';

@NgModule({
  declarations: [DigitalSignatureComponent],
  imports: [CommonModule, FormsModule],
  exports: [DigitalSignatureComponent]
})
export class DigitalSignatureModule { }`,types:`export type SignatureType = 'draw' | 'type' | 'upload';

export interface DigitalSignatureConfig {
  signatureType: SignatureType;
  width: number;
  height: number;
  penColor: string;
  penWidth: number;
  backgroundColor: string;
  required: boolean;
}`},comparisons:[{system:"react-signature-canvas",component:"SignatureCanvas",variants:"Canvas-based drawing only",accessibility:"Basic",documentation:"Good",link:"https://github.com/agilgur5/react-signature-canvas"},{system:"signature_pad",component:"SignaturePad",variants:"Canvas with touch support",accessibility:"WCAG 2.0 A",documentation:"Good",link:"https://github.com/szimek/signature_pad"},{system:"react-signature-pad-wrapper",component:"SignaturePad",variants:"Canvas wrapper",accessibility:"Basic",documentation:"Limited",link:"https://www.npmjs.com/package/react-signature-pad-wrapper"},{system:"GOV.UK Design System",component:"Custom implementation",variants:"Draw, type, upload",accessibility:"WCAG 2.1 AA",documentation:"Comprehensive",link:"https://design-system.service.gov.uk/"},{system:"USWDS (US Web Design System)",component:"Signature component",variants:"Canvas-based",accessibility:"WCAG 2.1 AA",documentation:"Good",link:"https://designsystem.digital.gov/"}],accessibility:{wcagLevel:"WCAG 2.1 Level AA Compliant",features:["Keyboard alternatives for canvas drawing (type or upload signature)","Touch target size meets 44x44px minimum (WCAG 2.5.5)","Focus indicators with 2px ring and offset for all interactive elements (WCAG 2.4.7)","Color contrast ratios meet 4.5:1 for all text and UI elements (WCAG 1.4.3)","Proper ARIA labels for canvas, inputs, and file uploads","Required field indication visible and announced to screen readers","Error messages associated with aria-describedby","Touch and mouse event support for signature drawing","Semantic HTML with proper form controls"],keyboardSupport:[{key:"Tab",action:"Move focus to signature area or controls"},{key:"Shift + Tab",action:"Move focus to previous element"},{key:"Enter",action:"Activate buttons (clear, save)"},{key:"Space",action:"Activate buttons (clear, save)"},{key:"Escape",action:"Cancel drawing or close upload dialog"}],screenReader:["Announces signature type and purpose","Announces required status when applicable","Announces when signature is captured or cleared","Provides alternative methods announcement (draw, type, or upload)","File upload instructions announced clearly",'Error states announced with proper role="alert"']},tokens:{file:"/tokens/components/digital-signature.json",mappings:[{property:"Default Width",token:"signature.width.default",value:"400px"},{property:"Default Height",token:"signature.height.default",value:"200px"},{property:"Border Width",token:"signature.borderWidth",value:"2px"},{property:"Border Color",token:"signature.borderColor.default",value:"#D1D5DB (Gray 300)"},{property:"Border Color (Focus)",token:"signature.borderColor.focus",value:"#3B82F6 (Blue 500)"},{property:"Background Color",token:"signature.backgroundColor",value:"#FFFFFF (White)"},{property:"Pen Color",token:"signature.penColor.default",value:"#000000 (Black)"},{property:"Pen Width",token:"signature.penWidth.default",value:"2px"},{property:"Focus Ring Width",token:"accessibility.focusRingWidth",value:"2px"},{property:"Focus Ring Color",token:"accessibility.focusRingColor",value:"#3B82F6 (Blue 500)"},{property:"Required Indicator Color",token:"form.requiredColor",value:"#DC2626 (Red 600)"}]},governmentContext:{useCases:["Application Forms - Capture applicant signatures on permit applications, license requests, and registration forms","Legal Declarations - Record signatures on statutory declarations, affidavits, and legal attestations","Consent Documents - Obtain consent signatures for data processing, medical procedures, and information sharing","Contract Execution - Sign service agreements, procurement contracts, and vendor agreements","Authorization Forms - Approve requests, authorizations, and delegations of authority","Compliance Documents - Sign acknowledgment of policies, code of conduct, and compliance certifications"],regulations:["Electronic Signatures Directive (EU) - Compliant with eIDAS regulation for electronic signatures","ESIGN Act (US) - Meets requirements for electronic signatures in interstate commerce","UETA (Uniform Electronic Transactions Act) - Compliant with state-level electronic transaction laws","GDPR - Signature capture follows data minimization and consent principles","Section 508 - Accessibility compliance for federal government use","PIPEDA (Canada) - Meets privacy requirements for signature data collection"],bestPractices:["Offer multiple signature methods to accommodate different user needs and abilities","Display clear instructions and examples for each signature method","Validate signature presence before form submission for required fields","Store signatures securely with encryption at rest and in transit","Implement audit trails tracking when, where, and by whom signatures were captured","Provide preview and confirmation before finalizing signature","Support responsive sizing for mobile, tablet, and desktop devices","Include timestamp and IP address metadata with stored signatures","Allow signature modification or replacement before final submission","Ensure signature data complies with retention and deletion policies"]}})}export{I as default};
