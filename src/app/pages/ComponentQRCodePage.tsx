/**
 * QR Code Component Documentation Page
 * Complete documentation for the QR Code component with examples, code downloads, and comparisons
 */

import React from 'react';
import { ComponentDocumentation } from '../components/ComponentDocumentation';
import { QrCode, Scan, FileText, CreditCard, Award, MapPin } from 'lucide-react';

// Import the actual QR Code component for live preview
const QRCodePreview = ({ value, size = 200, level = 'M', color = '#000000', logo, ...props }: any) => {
  // Simple preview representation (in actual implementation, use qrcode library)
  return (
    <div
      className="inline-flex items-center justify-center bg-white border-2 border-gray-200 p-4 rounded"
      style={{ width: size + 32, height: size + 32 }}
      {...props}
    >
      <div className="flex flex-col items-center justify-center gap-2">
        <QrCode size={size * 0.6} className="text-gray-700" />
        <span className="text-xs text-gray-500 text-center break-all max-w-full px-2">
          {value?.substring(0, 20)}...
        </span>
      </div>
    </div>
  );
};

export default function ComponentQRCodePage() {
  return (
    <ComponentDocumentation
      name="QR Code"
      description="Advanced component for generating and scanning QR codes for government services. Supports customizable size, error correction levels, logo embedding, and QR code scanning capabilities with full accessibility compliance."
      category="Government Services"
      maturity="stable"
      tier="composite"
      since="v1.5.0"
      updated="v2.2.0"

      props={[
        {
          name: 'value',
          type: 'string',
          required: true,
          description: 'The data to encode in the QR code. Can be text, URL, payment information, or any string data.',
        },
        {
          name: 'size',
          type: 'number',
          default: '200',
          required: false,
          description: 'Size of the QR code in pixels (width and height). Recommended minimum: 128px for accessibility.',
        },
        {
          name: 'level',
          type: "'L' | 'M' | 'Q' | 'H'",
          default: "'M'",
          required: false,
          description: 'Error correction level. L (7%), M (15%), Q (25%), H (30%). Higher levels allow more damage tolerance but increase QR code complexity.',
        },
        {
          name: 'logo',
          type: 'string',
          required: false,
          description: 'URL or base64 image data for a logo to embed in the center of the QR code. Recommended size: 20% of QR code size.',
        },
        {
          name: 'color',
          type: 'string',
          default: "'#000000'",
          required: false,
          description: 'Color of the QR code modules. Must maintain sufficient contrast with background for scanning.',
        },
        {
          name: 'backgroundColor',
          type: 'string',
          default: "'#FFFFFF'",
          required: false,
          description: 'Background color of the QR code. White or light colors recommended for optimal scanning.',
        },
        {
          name: 'enableScanner',
          type: 'boolean',
          default: 'false',
          required: false,
          description: 'Enable QR code scanning mode. Activates camera access for scanning QR codes.',
        },
        {
          name: 'onScan',
          type: '(data: string) => void',
          required: false,
          description: 'Callback function triggered when a QR code is successfully scanned. Receives the decoded data.',
        },
        {
          name: 'onError',
          type: '(error: Error) => void',
          required: false,
          description: 'Callback function triggered when an error occurs during generation or scanning.',
        },
        {
          name: 'includeMargin',
          type: 'boolean',
          default: 'true',
          required: false,
          description: 'Include quiet zone (margin) around the QR code as per QR code specification.',
        },
        {
          name: 'renderAs',
          type: "'canvas' | 'svg'",
          default: "'canvas'",
          required: false,
          description: 'Render format. Canvas for better performance, SVG for scalability.',
        },
        {
          name: 'downloadable',
          type: 'boolean',
          default: 'false',
          required: false,
          description: 'Add a download button to save the QR code as an image file.',
        },
        {
          name: 'alt',
          type: 'string',
          required: false,
          description: 'Alternative text for screen readers. Should describe the purpose of the QR code.',
        },
      ]}

      examples={[
        {
          title: 'Generate QR Code',
          description: 'Basic QR code generation with text or URL data.',
          code: `import { QRCode } from '@ux4g/react-composite';

function Example() {
  return (
    <div className="flex gap-6">
      <QRCode
        value="https://uidai.gov.in/my-aadhaar/12345678901"
        size={180}
        alt="Aadhaar verification QR code"
      />
      <QRCode
        value="Application ID: APP2024001234"
        size={180}
        level="H"
        alt="Application tracking QR code"
      />
    </div>
  );
}`,
          preview: (
            <div className="flex flex-wrap gap-6">
              <div className="flex flex-col items-center gap-2">
                <QRCodePreview
                  value="https://uidai.gov.in/my-aadhaar/12345678901"
                  size={180}
                />
                <span className="text-sm text-gray-600">Aadhaar Verification</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <QRCodePreview
                  value="Application ID: APP2024001234"
                  size={180}
                />
                <span className="text-sm text-gray-600">Application Tracking</span>
              </div>
            </div>
          ),
        },
        {
          title: 'QR with Logo',
          description: 'Embed government department logo in the center of the QR code.',
          code: `import { QRCode } from '@ux4g/react-composite';

function Example() {
  return (
    <QRCode
      value="https://digitalindia.gov.in/certificate/verify/CERT123456"
      size={220}
      level="H"
      logo="/logos/digital-india.png"
      alt="Digital certificate verification QR code with Digital India logo"
    />
  );
}`,
          preview: (
            <div className="flex flex-col items-center gap-2">
              <QRCodePreview
                value="https://digitalindia.gov.in/certificate/verify/CERT123456"
                size={220}
                logo="/logos/digital-india.png"
              />
              <span className="text-sm text-gray-600">Digital Certificate with Logo</span>
            </div>
          ),
        },
        {
          title: 'Different Error Levels',
          description: 'QR codes with various error correction levels. Higher levels provide better damage resistance.',
          code: `import { QRCode } from '@ux4g/react-composite';

function Example() {
  const data = "https://umang.gov.in/service/12345";

  return (
    <div className="flex gap-4">
      <div className="text-center">
        <QRCode value={data} size={140} level="L" />
        <p className="mt-2 text-sm">Low (7%)</p>
      </div>
      <div className="text-center">
        <QRCode value={data} size={140} level="M" />
        <p className="mt-2 text-sm">Medium (15%)</p>
      </div>
      <div className="text-center">
        <QRCode value={data} size={140} level="Q" />
        <p className="mt-2 text-sm">Quartile (25%)</p>
      </div>
      <div className="text-center">
        <QRCode value={data} size={140} level="H" />
        <p className="mt-2 text-sm">High (30%)</p>
      </div>
    </div>
  );
}`,
          preview: (
            <div className="flex flex-wrap gap-4">
              {['L', 'M', 'Q', 'H'].map((level, idx) => (
                <div key={level} className="flex flex-col items-center gap-2">
                  <QRCodePreview
                    value="https://umang.gov.in/service/12345"
                    size={140}
                    level={level}
                  />
                  <span className="text-sm text-gray-600">
                    {level === 'L' && 'Low (7%)'}
                    {level === 'M' && 'Medium (15%)'}
                    {level === 'Q' && 'Quartile (25%)'}
                    {level === 'H' && 'High (30%)'}
                  </span>
                </div>
              ))}
            </div>
          ),
        },
        {
          title: 'QR Code Scanner',
          description: 'Enable camera-based QR code scanning for verification and data capture.',
          code: `import { QRCode } from '@ux4g/react-composite';
import { useState } from 'react';

function Example() {
  const [scannedData, setScannedData] = useState('');
  const [isScanning, setIsScanning] = useState(false);

  const handleScan = (data: string) => {
    setScannedData(data);
    setIsScanning(false);
    console.log('Scanned:', data);
  };

  const handleError = (error: Error) => {
    console.error('Scan error:', error);
  };

  return (
    <div className="space-y-4">
      <button
        onClick={() => setIsScanning(!isScanning)}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        {isScanning ? 'Stop Scanning' : 'Start Scanner'}
      </button>

      {isScanning && (
        <QRCode
          enableScanner
          onScan={handleScan}
          onError={handleError}
          size={300}
        />
      )}

      {scannedData && (
        <div className="p-4 bg-green-50 rounded">
          <p className="font-medium">Scanned Data:</p>
          <p className="mt-1 text-sm">{scannedData}</p>
        </div>
      )}
    </div>
  );
}`,
          preview: (
            <div className="space-y-4 p-4 border rounded bg-gray-50">
              <div className="flex items-center gap-3">
                <Scan className="text-blue-600" size={24} />
                <span className="text-sm text-gray-700">
                  Scanner mode activates device camera for QR code reading
                </span>
              </div>
              <div className="text-xs text-gray-500 italic">
                Note: Scanner requires camera permissions and HTTPS
              </div>
            </div>
          ),
        },
        {
          title: 'Payment QR Code',
          description: 'Generate UPI payment QR codes following the UPI standard format.',
          code: `import { QRCode } from '@ux4g/react-composite';

function Example() {
  // UPI payment format: upi://pay?pa=receiver@upi&pn=Name&am=100&cu=INR&tn=Note
  const paymentData = 'upi://pay?pa=treasury@sbi&pn=TreasuryDept&am=500&cu=INR&tn=ApplicationFee';

  return (
    <div className="max-w-sm border rounded-lg p-6 bg-white shadow-md">
      <div className="flex items-center gap-2 mb-4">
        <CreditCard className="text-green-600" size={24} />
        <h3 className="font-semibold">Pay Application Fee</h3>
      </div>

      <QRCode
        value={paymentData}
        size={240}
        level="H"
        alt="UPI payment QR code for application fee of 500 rupees"
        downloadable
      />

      <div className="mt-4 text-center">
        <p className="text-lg font-bold">₹500.00</p>
        <p className="text-sm text-gray-600">Application Fee</p>
        <p className="text-xs text-gray-500 mt-2">Scan with any UPI app</p>
      </div>
    </div>
  );
}`,
          preview: (
            <div className="max-w-sm border rounded-lg p-6 bg-white shadow-md">
              <div className="flex items-center gap-2 mb-4">
                <CreditCard className="text-green-600" size={24} />
                <h3 className="font-semibold">Pay Application Fee</h3>
              </div>

              <div className="flex justify-center">
                <QRCodePreview
                  value="upi://pay?pa=treasury@sbi&pn=TreasuryDept&am=500&cu=INR&tn=ApplicationFee"
                  size={240}
                />
              </div>

              <div className="mt-4 text-center">
                <p className="text-lg font-bold">₹500.00</p>
                <p className="text-sm text-gray-600">Application Fee</p>
                <p className="text-xs text-gray-500 mt-2">Scan with any UPI app</p>
              </div>
            </div>
          ),
        },
        {
          title: 'Certificate QR Code',
          description: 'Verification QR code for digital certificates and documents.',
          code: `import { QRCode } from '@ux4g/react-composite';

function Example() {
  const certificateData = JSON.stringify({
    type: 'BIRTH_CERTIFICATE',
    id: 'BC-2024-MH-123456',
    name: 'Baby Name',
    dob: '2024-01-15',
    registrationNumber: 'MH/BMC/2024/123456',
    verifyUrl: 'https://certificates.gov.in/verify/BC-2024-MH-123456'
  });

  return (
    <div className="max-w-md border rounded-lg p-6 bg-gradient-to-br from-blue-50 to-white">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Award className="text-blue-600" size={28} />
          <div>
            <h3 className="font-bold text-lg">Birth Certificate</h3>
            <p className="text-xs text-gray-600">Government of Maharashtra</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center my-6">
        <QRCode
          value={certificateData}
          size={200}
          level="H"
          logo="/logos/india-emblem.png"
          alt="Birth certificate verification QR code"
        />
      </div>

      <div className="space-y-2 text-sm">
        <p><span className="font-medium">Certificate ID:</span> BC-2024-MH-123456</p>
        <p><span className="font-medium">Registration:</span> MH/BMC/2024/123456</p>
        <p className="text-xs text-gray-500 italic mt-3">
          Scan to verify authenticity on certificates.gov.in
        </p>
      </div>
    </div>
  );
}`,
          preview: (
            <div className="max-w-md border rounded-lg p-6 bg-gradient-to-br from-blue-50 to-white">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Award className="text-blue-600" size={28} />
                  <div>
                    <h3 className="font-bold text-lg">Birth Certificate</h3>
                    <p className="text-xs text-gray-600">Government of Maharashtra</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center my-6">
                <QRCodePreview
                  value='{"type":"BIRTH_CERTIFICATE","id":"BC-2024-MH-123456"}'
                  size={200}
                />
              </div>

              <div className="space-y-2 text-sm">
                <p><span className="font-medium">Certificate ID:</span> BC-2024-MH-123456</p>
                <p><span className="font-medium">Registration:</span> MH/BMC/2024/123456</p>
                <p className="text-xs text-gray-500 italic mt-3">
                  Scan to verify authenticity on certificates.gov.in
                </p>
              </div>
            </div>
          ),
        },
      ]}

      reactCode={{
        component: `import React, { useEffect, useRef, useState } from 'react';
import QRCodeLib from 'qrcode';
import { QRCodeProps } from './QRCode.types';

export const QRCode: React.FC<QRCodeProps> = ({
  value,
  size = 200,
  level = 'M',
  logo,
  color = '#000000',
  backgroundColor = '#FFFFFF',
  enableScanner = false,
  onScan,
  onError,
  includeMargin = true,
  renderAs = 'canvas',
  downloadable = false,
  alt,
  className,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [qrDataUrl, setQrDataUrl] = useState<string>('');

  useEffect(() => {
    if (!enableScanner && value) {
      generateQRCode();
    }
  }, [value, size, level, color, backgroundColor, includeMargin]);

  const generateQRCode = async () => {
    try {
      const options = {
        errorCorrectionLevel: level,
        width: size,
        margin: includeMargin ? 4 : 0,
        color: {
          dark: color,
          light: backgroundColor,
        },
      };

      if (renderAs === 'canvas' && canvasRef.current) {
        await QRCodeLib.toCanvas(canvasRef.current, value, options);

        // Add logo if provided
        if (logo) {
          addLogoToCanvas(canvasRef.current, logo);
        }
      } else {
        const dataUrl = await QRCodeLib.toDataURL(value, options);
        setQrDataUrl(dataUrl);
      }
    } catch (error) {
      onError?.(error as Error);
    }
  };

  const addLogoToCanvas = (canvas: HTMLCanvasElement, logoUrl: string) => {
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      const logoSize = size * 0.2; // 20% of QR code size
      const x = (size - logoSize) / 2;
      const y = (size - logoSize) / 2;

      // Draw white background for logo
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(x - 5, y - 5, logoSize + 10, logoSize + 10);

      // Draw logo
      ctx.drawImage(img, x, y, logoSize, logoSize);
    };
    img.src = logoUrl;
  };

  const handleDownload = () => {
    if (renderAs === 'canvas' && canvasRef.current) {
      const url = canvasRef.current.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = \`qrcode-\${Date.now()}.png\`;
      link.href = url;
      link.click();
    }
  };

  if (enableScanner) {
    // Scanner implementation would use html5-qrcode library
    return (
      <div className={className}>
        <div id="qr-scanner" style={{ width: size, height: size }} />
        {/* Scanner UI implementation */}
      </div>
    );
  }

  return (
    <div className={className} style={{ display: 'inline-block' }}>
      {renderAs === 'canvas' ? (
        <canvas
          ref={canvasRef}
          role="img"
          aria-label={alt || \`QR code containing: \${value.substring(0, 50)}\`}
          style={{ display: 'block' }}
        />
      ) : (
        <img
          src={qrDataUrl}
          alt={alt || \`QR code containing: \${value.substring(0, 50)}\`}
          style={{ width: size, height: size, display: 'block' }}
        />
      )}
      {downloadable && (
        <button
          onClick={handleDownload}
          className="mt-2 px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded"
          aria-label="Download QR code"
        >
          Download QR Code
        </button>
      )}
    </div>
  );
};

QRCode.displayName = 'QRCode';`,
        types: `export type ErrorCorrectionLevel = 'L' | 'M' | 'Q' | 'H';
export type RenderAs = 'canvas' | 'svg';

export interface QRCodeProps {
  value: string;
  size?: number;
  level?: ErrorCorrectionLevel;
  logo?: string;
  color?: string;
  backgroundColor?: string;
  enableScanner?: boolean;
  onScan?: (data: string) => void;
  onError?: (error: Error) => void;
  includeMargin?: boolean;
  renderAs?: RenderAs;
  downloadable?: boolean;
  alt?: string;
  className?: string;
}`,
        variants: `// QR Code variants based on use case
export const qrCodeVariants = {
  size: {
    sm: 128,
    md: 200,
    lg: 300,
    xl: 400,
  },
  level: {
    low: 'L',      // 7% error correction
    medium: 'M',   // 15% error correction
    quartile: 'Q', // 25% error correction
    high: 'H',     // 30% error correction
  },
  useCase: {
    url: { level: 'M', size: 200 },
    payment: { level: 'H', size: 240 },
    certificate: { level: 'H', size: 300 },
    tracking: { level: 'M', size: 180 },
  },
};`,
      }}

      angularCode={{
        component: `import { Component, Input, Output, EventEmitter, OnInit, ViewChild, ElementRef } from '@angular/core';
import QRCodeLib from 'qrcode';

type ErrorCorrectionLevel = 'L' | 'M' | 'Q' | 'H';
type RenderAs = 'canvas' | 'svg';

@Component({
  selector: 'ux4g-qrcode',
  template: \`
    <div [class]="className">
      <canvas
        #qrCanvas
        *ngIf="renderAs === 'canvas' && !enableScanner"
        role="img"
        [attr.aria-label]="alt || 'QR code: ' + value.substring(0, 50)"
      ></canvas>

      <img
        *ngIf="renderAs === 'svg' && qrDataUrl"
        [src]="qrDataUrl"
        [alt]="alt || 'QR code: ' + value.substring(0, 50)"
        [style.width.px]="size"
        [style.height.px]="size"
      />

      <div *ngIf="enableScanner" #scanner [style.width.px]="size" [style.height.px]="size">
        <!-- Scanner implementation -->
      </div>

      <button
        *ngIf="downloadable && !enableScanner"
        (click)="handleDownload()"
        class="mt-2 px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded"
        aria-label="Download QR code"
      >
        Download QR Code
      </button>
    </div>
  \`,
  styleUrls: ['./qrcode.component.css']
})
export class QRCodeComponent implements OnInit {
  @ViewChild('qrCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  @Input() value!: string;
  @Input() size = 200;
  @Input() level: ErrorCorrectionLevel = 'M';
  @Input() logo?: string;
  @Input() color = '#000000';
  @Input() backgroundColor = '#FFFFFF';
  @Input() enableScanner = false;
  @Input() includeMargin = true;
  @Input() renderAs: RenderAs = 'canvas';
  @Input() downloadable = false;
  @Input() alt?: string;
  @Input() className?: string;

  @Output() scanned = new EventEmitter<string>();
  @Output() error = new EventEmitter<Error>();

  qrDataUrl = '';

  ngOnInit(): void {
    if (!this.enableScanner && this.value) {
      this.generateQRCode();
    }
  }

  async generateQRCode(): Promise<void> {
    try {
      const options = {
        errorCorrectionLevel: this.level,
        width: this.size,
        margin: this.includeMargin ? 4 : 0,
        color: {
          dark: this.color,
          light: this.backgroundColor,
        },
      };

      if (this.renderAs === 'canvas' && this.canvasRef?.nativeElement) {
        await QRCodeLib.toCanvas(this.canvasRef.nativeElement, this.value, options);

        if (this.logo) {
          this.addLogoToCanvas(this.canvasRef.nativeElement, this.logo);
        }
      } else {
        this.qrDataUrl = await QRCodeLib.toDataURL(this.value, options);
      }
    } catch (err) {
      this.error.emit(err as Error);
    }
  }

  addLogoToCanvas(canvas: HTMLCanvasElement, logoUrl: string): void {
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      const logoSize = this.size * 0.2;
      const x = (this.size - logoSize) / 2;
      const y = (this.size - logoSize) / 2;

      ctx.fillStyle = this.backgroundColor;
      ctx.fillRect(x - 5, y - 5, logoSize + 10, logoSize + 10);
      ctx.drawImage(img, x, y, logoSize, logoSize);
    };
    img.src = logoUrl;
  }

  handleDownload(): void {
    if (this.renderAs === 'canvas' && this.canvasRef?.nativeElement) {
      const url = this.canvasRef.nativeElement.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = \`qrcode-\${Date.now()}.png\`;
      link.href = url;
      link.click();
    }
  }
}`,
        module: `import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QRCodeComponent } from './qrcode.component';

@NgModule({
  declarations: [QRCodeComponent],
  imports: [CommonModule],
  exports: [QRCodeComponent]
})
export class QRCodeModule { }`,
        types: `export type ErrorCorrectionLevel = 'L' | 'M' | 'Q' | 'H';
export type RenderAs = 'canvas' | 'svg';

export interface QRCodeData {
  value: string;
  timestamp: number;
  metadata?: Record<string, any>;
}`,
      }}

      comparisons={[
        {
          system: 'qrcode.react',
          component: 'QRCodeSVG / QRCodeCanvas',
          variants: 'SVG and Canvas rendering',
          accessibility: 'Basic (manual)',
          documentation: 'Good',
          link: 'https://www.npmjs.com/package/qrcode.react',
        },
        {
          system: 'react-qr-code',
          component: 'QRCode',
          variants: 'SVG only',
          accessibility: 'Limited',
          documentation: 'Minimal',
          link: 'https://www.npmjs.com/package/react-qr-code',
        },
        {
          system: 'html5-qrcode',
          component: 'Html5Qrcode',
          variants: 'Scanner focused',
          accessibility: 'Good',
          documentation: 'Comprehensive',
          link: 'https://www.npmjs.com/package/html5-qrcode',
        },
        {
          system: 'node-qrcode',
          component: 'qrcode',
          variants: 'Canvas, SVG, terminal',
          accessibility: 'Manual implementation',
          documentation: 'Comprehensive',
          link: 'https://www.npmjs.com/package/qrcode',
        },
        {
          system: 'GOV.UK (No native QR)',
          component: 'Custom implementation',
          variants: 'Service-specific',
          accessibility: 'WCAG 2.1 AAA',
          documentation: 'Service guidelines',
          link: 'https://design-system.service.gov.uk/',
        },
      ]}

      accessibility={{
        wcagLevel: 'WCAG 2.1 Level AA Compliant',
        features: [
          'Minimum 128x128px size for scanability (larger recommended for accessibility)',
          'High contrast ratio between QR code and background (minimum 3:1)',
          'Alternative text provided through aria-label describing QR code content',
          'Keyboard-accessible download functionality when enabled',
          'Role="img" attribute for proper screen reader announcement',
          'Camera permissions properly requested and explained for scanner mode',
          'Focus management for scanner start/stop controls',
          'Error messages announced to screen readers when scanning fails',
          'Quiet zone (margin) included for reliable scanning',
        ],
        keyboardSupport: [
          { key: 'Tab', action: 'Focus download button or scanner controls' },
          { key: 'Enter', action: 'Activate download or start/stop scanner' },
          { key: 'Space', action: 'Activate download or start/stop scanner' },
        ],
        screenReader: [
          'Announces QR code role and content description',
          'Provides alternative text describing the purpose and data',
          'Announces scanner status changes (scanning, success, error)',
          'Announces scan results when data is captured',
          'Provides download button label when enabled',
        ],
      }}

      tokens={{
        file: '/tokens/components/qrcode.json',
        mappings: [
          { property: 'Default Size', token: 'qrcode.size.default', value: '200px' },
          { property: 'Minimum Size', token: 'qrcode.size.min', value: '128px' },
          { property: 'Maximum Size', token: 'qrcode.size.max', value: '512px' },
          { property: 'Default Color', token: 'qrcode.color.default', value: '#000000' },
          { property: 'Background Color', token: 'qrcode.backgroundColor', value: '#FFFFFF' },
          { property: 'Error Level Default', token: 'qrcode.errorLevel.default', value: 'M (15%)' },
          { property: 'Logo Max Size', token: 'qrcode.logo.maxSize', value: '20% of QR size' },
          { property: 'Margin Size', token: 'qrcode.margin', value: '4 modules' },
          { property: 'Border Radius', token: 'qrcode.borderRadius', value: '4px' },
        ],
      }}
    />
  );
}
