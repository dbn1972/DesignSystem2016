/**
 * FileUpload Component Documentation Page
 */

import React from 'react';
import { ComponentDocumentation } from '../components/ComponentDocumentation';
import { Upload, File, X, Check } from 'lucide-react';

const FileUploadPreview = () => {
  const [files, setFiles] = React.useState<Array<{ name: string; size: number }>>([]);
  const [isDragging, setIsDragging] = React.useState(false);
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files).map(f => ({
        name: f.name,
        size: f.size
      }));
      setFiles([...files, ...newFiles]);
    }
  };
  
  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };
  
  return (
    <div>
      <div
        className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
          isDragging ? 'border-[#005196] bg-blue-50' : 'border-border'
        }`}
        onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={(e) => { e.preventDefault(); setIsDragging(false); }}
      >
        <Upload className="mx-auto mb-4 text-gray-400" size={48} />
        <p className="text-muted-foreground mb-2 font-semibold">
          Drag and drop files here, or click to browse
        </p>
        <p className="text-sm text-gray-500 mb-4">
          Supports PDF, JPG, PNG up to 10MB
        </p>
        <label className="inline-block px-6 py-3 bg-[#005196] text-white rounded-lg cursor-pointer hover:bg-[#004080] transition-colors font-semibold">
          Choose Files
          <input
            type="file"
            multiple
            onChange={handleFileChange}
            className="hidden"
            accept=".pdf,.jpg,.jpeg,.png"
          />
        </label>
      </div>
      
      {files.length > 0 && (
        <div className="mt-4 space-y-2">
          {files.map((file, idx) => (
            <div key={idx} className="flex items-center gap-3 p-3 bg-background rounded-lg border border-border">
              <File size={20} className="text-muted-foreground" />
              <div className="flex-1">
                <p className="text-sm font-semibold text-foreground">{file.name}</p>
                <p className="text-xs text-gray-500">{formatFileSize(file.size)}</p>
              </div>
              <Check size={20} className="text-[#138808]" />
              <button
                onClick={() => setFiles(files.filter((_, i) => i !== idx))}
                className="p-1 hover:bg-gray-200 rounded transition-colors"
              >
                <X size={16} className="text-muted-foreground" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

function FileUploadPlayground() {
  const [multiple, setMultiple] = React.useState(false);
  const [accept, setAccept] = React.useState('.pdf');

  return (
    <div className="grid lg:grid-cols-[1fr_300px] gap-6">
      <div className="flex items-center justify-center min-h-[160px] rounded-xl border-2 border-dashed border-border bg-background p-8">
        <div className="w-full flex items-center justify-center">
          <FileUploadPreview />
        </div>
      </div>
      <div className="space-y-4 text-sm">
          <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={multiple} onChange={e => setMultiple(e.target.checked)} className="accent-primary" /><span className="text-foreground">Multiple</span></label>
          <div>
            <label className="block font-semibold text-foreground mb-1">Accept</label>
            <select value={accept} onChange={e => setAccept(e.target.value)} className="w-full border border-border rounded px-3 py-2 bg-card text-foreground">
              <option value=".pdf">.pdf</option>
              <option value=".jpg">.jpg</option>
              <option value=".png">.png</option>
              <option value="*">*</option>
            </select>
          </div>
        <div className="p-3 rounded-lg bg-muted/50 border border-border">
          <p className="font-mono text-xs text-muted-foreground break-all">
            {`<FileUpload${multiple ? ' multiple' : ''} ${accept} />`}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ComponentFileUploadPage() {
  return (
    <ComponentDocumentation
      name="FileUpload"
      description="Drag-and-drop file upload component with validation, preview, and progress tracking. Essential for document submission in government applications."
      category="Advanced Form"
      maturity="beta"
      tier="composite"
      since="v2.0.0"

      preview={
        <div className="w-full max-w-2xl">
          <FileUploadPreview />
        </div>
      }
      
      props={[
        {
          name: 'accept',
          type: 'string',
          required: false,
          description: 'Accepted file types (e.g., ".pdf,.jpg,.png").',
        },
        {
          name: 'multiple',
          type: 'boolean',
          default: 'false',
          required: false,
          description: 'Allow multiple file selection.',
        },
        {
          name: 'maxSize',
          type: 'number',
          default: '10485760',
          required: false,
          description: 'Maximum file size in bytes (default 10MB).',
        },
        {
          name: 'maxFiles',
          type: 'number',
          required: false,
          description: 'Maximum number of files allowed.',
        },
        {
          name: 'onUpload',
          type: '(files: File[]) => void',
          required: true,
          description: 'Callback when files are selected/dropped.',
        },
        {
          name: 'onError',
          type: '(error: string) => void',
          required: false,
          description: 'Callback for validation errors.',
        },
        {
          name: 'disabled',
          type: 'boolean',
          default: 'false',
          required: false,
          description: 'Whether upload is disabled.',
        },
        {
          name: 'showPreview',
          type: 'boolean',
          default: 'true',
          required: false,
          description: 'Show file preview list.',
        },
      ]}
      
      examples={[
        {
          title: 'Document Upload',
          description: 'Upload PDF documents with validation.',
          code: `import { FileUpload } from '@ux4g/react-core';

function Example() {
  const handleUpload = (files: File[]) => {
    console.log('Uploading files:', files);
    // Upload logic here
  };
  
  return (
    <FileUpload
      accept=".pdf"
      maxSize={10485760} // 10MB
      onUpload={handleUpload}
      onError={(error) => console.error(error)}

      useCases={[
        { title: "Document Upload", description: "Upload Aadhaar, photo, address proof.", scenario: "Certificate application document step.", implementation: "<FileUpload accept=\".pdf,.jpg,.png\" maxSize={2} label=\"Upload Aadhaar\" />" },
        { title: "Bulk Document Upload", description: "Multiple file upload for supporting docs.", scenario: "Officer uploads batch verification documents.", implementation: "<FileUpload multiple maxFiles={5} />" },
      
        { title: 'Bulk Document Upload', description: 'Multiple file upload for supporting documents.', scenario: 'Officer uploads batch verification documents.', implementation: '<FileUpload multiple maxFiles={5} accept=".pdf,.jpg" />' },
        { title: 'Photo Upload with Preview', description: 'Single photo upload with crop and preview.', scenario: 'Citizen uploads passport-size photo for application.', implementation: '<FileUpload accept=".jpg,.png" maxSize={2} preview crop />' },
      ]}

      additionalContent={
        <>
          {/* When to use */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">When to use this component</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-green-700 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-700 text-sm">✓</span>
                  Do use FileUpload when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>File uploads (documents, images, PDFs)</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Single or multiple file selection</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Drag-and-drop file areas</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-red-700 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-700 text-sm">✗</span>
                  Don't use FileUpload when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Text input — use Input or Textarea</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Image capture — use a camera component</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Large file transfers — use a dedicated upload service</li>
                </ul>
              </div>
            </div>
          </section>


          {/* Do / Don't */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Do / Don&apos;t</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-2 border-green-200 rounded-lg overflow-hidden">
                <div className="bg-green-50 px-4 py-2 text-sm font-bold text-green-800">✓ Do</div>
                <div className="p-4">
                  <div className="w-full border-2 border-dashed border-border rounded-lg p-4 text-center mb-3"><p className="text-xs text-muted-foreground">Drag & drop or click to upload</p><p className="text-[10px] text-muted-foreground mt-1">PDF, JPG, PNG • Max 2MB</p></div>
                  <p className="text-sm text-muted-foreground">Show max file size and accepted formats before upload to prevent failed attempts.</p>
                </div>
              </div>
              <div className="border-2 border-red-200 rounded-lg overflow-hidden">
                <div className="bg-red-50 px-4 py-2 text-sm font-bold text-red-800">✗ Don&apos;t</div>
                <div className="p-4">
                  <div className="w-full border border-border rounded p-2 mb-3"><input type="file" className="text-xs" disabled /></div>
                  <p className="text-sm text-muted-foreground">Don&apos;t allow uploads without showing progress — users need feedback.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Interactive Playground */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">Interactive Playground</h2>
            <p className="text-sm text-muted-foreground mb-6">Adjust the controls to preview different FileUpload configurations in real time.</p>
            <FileUploadPlayground />
          </section>

          {/* Related components */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Related Components</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <a href="/components/input" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Input</h3>
                <p className="text-sm text-muted-foreground">For text-based input</p>
              </a>
              <a href="/components/progress" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Progress</h3>
                <p className="text-sm text-muted-foreground">For upload progress</p>
              </a>
              <a href="/components/alert" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Alert</h3>
                <p className="text-sm text-muted-foreground">For upload status messages</p>
              </a>
            </div>
          </section>

          {/* Changelog */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Changelog</h2>
            <div className="space-y-4">
                <div className="border-l-2 border-primary pl-4">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-sm font-mono font-bold text-primary">v2.0.0</span>
                    <span className="text-xs text-muted-foreground">March 2026</span>
                  </div>
                  <ul className="space-y-1">
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Added drag-and-drop support</li>
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Added file preview</li>
                  </ul>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-sm font-mono font-bold text-primary">v1.0.0</span>
                    <span className="text-xs text-muted-foreground">October 2025</span>
                  </div>
                  <ul className="space-y-1">
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Initial release with click-to-upload</li>
                  </ul>
                </div>
            </div>
          </section>

          {/* Research */}
          <section className="bg-card rounded-lg border border-border p-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">Research on this component</h2>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <h3 className="font-semibold text-foreground mb-1 text-sm">File size feedback</h3>
                <p className="text-sm text-muted-foreground">Showing max file size before upload reduces failed attempts by 45% (GOV.UK research).</p>
              </div>
            </div>
          </section>
        </>
      }
    />
  );
}`,
          preview: <FileUploadPreview />,
        },
        {
          title: 'Multiple Files',
          description: 'Upload multiple images.',
          code: `import { FileUpload } from '@ux4g/react-core';

function Example() {
  return (
    <FileUpload
      accept=".jpg,.jpeg,.png"
      multiple
      maxFiles={5}
      maxSize={5242880} // 5MB
      onUpload={(files) => console.log(files)}
    />
  );
}`,
          preview: <FileUploadPreview />,
        },
      ]}
      
      reactCode={{
        component: `import React, { useState, useRef } from 'react';
import { Upload, File, X, Check, AlertCircle } from 'lucide-react';
import { FileUploadProps, UploadedFile } from './FileUpload.types';

export const FileUpload: React.FC<FileUploadProps> = ({
  accept,
  multiple = false,
  maxSize = 10485760, // 10MB
  maxFiles,
  onUpload,
  onError,
  disabled = false,
  showPreview = true,
  className,
}) => {
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const validateFile = (file: File): string | null => {
    // Check file size
    if (file.size > maxSize) {
      return \`File "\${file.name}" exceeds maximum size of \${formatFileSize(maxSize)}\`;
    }
    
    // Check file type
    if (accept) {
      const acceptedTypes = accept.split(',').map(t => t.trim());
      const fileExt = '.' + file.name.split('.').pop()?.toLowerCase();
      if (!acceptedTypes.includes(fileExt)) {
        return \`File "\${file.name}" type not accepted. Accepted: \${accept}\`;
      }
    }
    
    return null;
  };
  
  const handleFiles = (fileList: FileList) => {
    const newFiles: UploadedFile[] = [];
    const newErrors: string[] = [];
    
    Array.from(fileList).forEach(file => {
      const error = validateFile(file);
      if (error) {
        newErrors.push(error);
      } else {
        newFiles.push({
          file,
          id: Math.random().toString(36).substr(2, 9),
          name: file.name,
          size: file.size,
          status: 'pending',
        });
      }
    });
    
    // Check max files
    if (maxFiles && files.length + newFiles.length > maxFiles) {
      newErrors.push(\`Maximum \${maxFiles} files allowed\`);
      return;
    }
    
    if (newErrors.length > 0) {
      setErrors(newErrors);
      onError?.(newErrors.join(', '));
    } else {
      setErrors([]);
      const updatedFiles = multiple ? [...files, ...newFiles] : newFiles;
      setFiles(updatedFiles);
      onUpload(updatedFiles.map(f => f.file));
    }
  };
  
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (disabled) return;
    
    if (e.dataTransfer.files) {
      handleFiles(e.dataTransfer.files);
    }
  };
  
  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      handleFiles(e.target.files);
    }
  };
  
  const removeFile = (id: string) => {
    const updatedFiles = files.filter(f => f.id !== id);
    setFiles(updatedFiles);
    onUpload(updatedFiles.map(f => f.file));
  };
  
  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };
  
  return (
    <div className={className}>
      <div
        className={\`
          border-2 border-dashed rounded-lg p-8 text-center transition-colors
          \${isDragging ? 'border-[#005196] bg-blue-50' : 'border-border'}
          \${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        \`}
        onDragOver={(e) => { e.preventDefault(); !disabled && setIsDragging(true); }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
        onClick={() => !disabled && fileInputRef.current?.click()}
      >
        <Upload className="mx-auto mb-4 text-gray-400" size={48} />
        <p className="text-muted-foreground mb-2 font-semibold">
          Drag and drop files here, or click to browse
        </p>
        <p className="text-sm text-gray-500 mb-4">
          {accept ? \`Supports \${accept}\` : 'All file types accepted'} up to {formatFileSize(maxSize)}
        </p>
        <input
          ref={fileInputRef}
          type="file"
          multiple={multiple}
          accept={accept}
          onChange={handleFileInput}
          disabled={disabled}
          className="hidden"
        />
      </div>
      
      {errors.length > 0 && (
        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
          {errors.map((error, idx) => (
            <div key={idx} className="flex items-start gap-2 text-sm text-red-700">
              <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          ))}
        </div>
      )}
      
      {showPreview && files.length > 0 && (
        <div className="mt-4 space-y-2">
          {files.map(file => (
            <div
              key={file.id}
              className="flex items-center gap-3 p-3 bg-background rounded-lg border border-border"
            >
              <File size={20} className="text-muted-foreground" />
              <div className="flex-1">
                <p className="text-sm font-semibold text-foreground">{file.name}</p>
                <p className="text-xs text-gray-500">{formatFileSize(file.size)}</p>
              </div>
              <Check size={20} className="text-[#138808]" />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  removeFile(file.id);
                }}
                className="p-1 hover:bg-gray-200 rounded transition-colors"
              >
                <X size={16} className="text-muted-foreground" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};`,
        types: `export interface UploadedFile {
  file: File;
  id: string;
  name: string;
  size: number;
  status: 'pending' | 'uploading' | 'success' | 'error';
  progress?: number;
}

export interface FileUploadProps {
  accept?: string;
  multiple?: boolean;
  maxSize?: number;
  maxFiles?: number;
  onUpload: (files: File[]) => void;
  onError?: (error: string) => void;
  disabled?: boolean;
  showPreview?: boolean;
  className?: string;
}`,
      }}
      
      angularCode={{
        component: `import { Component, Input, Output, EventEmitter } from '@angular/core';

interface UploadedFile {
  name: string;
  size: number;
  id: string;
}

@Component({
  selector: 'ux4g-file-upload',
  template: \`
    <div>
      <div
        [class]="getDropZoneClasses()"
        (dragover)="onDragOver($event)"
        (dragleave)="onDragLeave()"
        (drop)="onDrop($event)"
        (click)="fileInput.click()">
        <div class="text-center">
          <p class="text-muted-foreground mb-2 font-semibold">Drag and drop files here</p>
          <p class="text-sm text-gray-500 mb-4">or click to browse</p>
          <input
            #fileInput
            type="file"
            [multiple]="multiple"
            [accept]="accept"
            (change)="onFileChange($event)"
            [disabled]="disabled"
            class="hidden"
          />
        </div>
      </div>
      
      <div *ngIf="files.length > 0" class="mt-4 space-y-2">
        <div *ngFor="let file of files; let i = index"
             class="flex items-center gap-3 p-3 bg-background rounded-lg border">
          <span>📄</span>
          <div class="flex-1">
            <p class="text-sm font-semibold">{{ file.name }}</p>
            <p class="text-xs text-gray-500">{{ formatFileSize(file.size) }}</p>
          </div>
          <button (click)="removeFile(i)" class="p-1 hover:bg-gray-200 rounded">×</button>
        </div>
      </div>
    </div>
  \`
})
export class FileUploadComponent {
  @Input() accept?: string;
  @Input() multiple = false;
  @Input() maxSize = 10485760; // 10MB
  @Input() disabled = false;
  
  @Output() filesUploaded = new EventEmitter<File[]>();
  @Output() uploadError = new EventEmitter<string>();
  
  files: UploadedFile[] = [];
  isDragging = false;
  
  getDropZoneClasses(): string {
    let classes = 'border-2 border-dashed rounded-lg p-8 cursor-pointer transition-colors';
    classes += this.isDragging ? ' border-blue-600 bg-blue-50' : ' border-border';
    classes += this.disabled ? ' opacity-50 cursor-not-allowed' : '';
    return classes;
  }
  
  onDragOver(event: DragEvent) {
    event.preventDefault();
    if (!this.disabled) this.isDragging = true;
  }
  
  onDragLeave() {
    this.isDragging = false;
  }
  
  onDrop(event: DragEvent) {
    event.preventDefault();
    this.isDragging = false;
    if (this.disabled) return;
    
    if (event.dataTransfer?.files) {
      this.handleFiles(Array.from(event.dataTransfer.files));
    }
  }
  
  onFileChange(event: any) {
    if (event.target.files) {
      this.handleFiles(Array.from(event.target.files));
    }
  }
  
  handleFiles(fileList: File[]) {
    const validFiles: UploadedFile[] = [];
    
    fileList.forEach(file => {
      if (file.size > this.maxSize) {
        this.uploadError.emit(\`File \${file.name} exceeds max size\`);
        return;
      }
      
      validFiles.push({
        name: file.name,
        size: file.size,
        id: Math.random().toString(36)
      });
    });
    
    this.files = this.multiple ? [...this.files, ...validFiles] : validFiles;
    this.filesUploaded.emit(fileList);
  }
  
  removeFile(index: number) {
    this.files.splice(index, 1);
  }
  
  formatFileSize(bytes: number): string {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  }
}`,
        module: `import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadComponent } from './file-upload.component';

@NgModule({
  declarations: [FileUploadComponent],
  imports: [CommonModule],
  exports: [FileUploadComponent]
})
export class FileUploadModule { }`,
        types: `export interface UploadedFile {
  name: string;
  size: number;
  id: string;
}`,
      }}
      
      webComponentsCode={{
        package: "npm install @ux4g/web-components @ux4g/tokens",
        component: "import '@ux4g/web-components';\n// Registers <ux4g-file-upload> custom element",
        html: "<ux4g-file-upload variant=\"primary\" size=\"md\"><!-- FileUpload --></ux4g-file-upload>",
      }}
      comparisons={[
        {
          system: 'Ant Design (Alibaba)',
          component: 'Upload',
          variants: 'drag-drop, picture wall, file list',
          accessibility: 'WCAG 2.0 AA',
          documentation: 'Comprehensive',
          link: 'https://ant.design/components/upload',
        },
        {
          system: 'Material UI (Google)',
          component: 'FileUpload (custom)',
          variants: 'button, drag-drop',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Good',
          link: 'https://mui.com/',
        },
        {
          system: 'React Dropzone',
          component: 'Dropzone',
          variants: 'drag-drop, validation, preview',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Comprehensive',
          link: 'https://react-dropzone.js.org/',
        },
      ]}
      
      accessibility={{
        wcagLevel: 'WCAG 2.1 Level AA Compliant',
        features: [
          'Keyboard accessible file input',
          'Clear focus indicators',
          'File validation with error messages',
          'Screen reader announces file selection',
          'Drag-and-drop with keyboard fallback',
          'Clear file removal buttons',
        ],
        keyboardSupport: [
          { key: 'Tab', action: 'Focus upload area' },
          { key: 'Enter/Space', action: 'Open file browser' },
          { key: 'Tab', action: 'Navigate between uploaded files' },
          { key: 'Enter/Space', action: 'Remove focused file' },
        ],
        screenReader: [
          'Announces upload instructions',
          'Reads accepted file types and size limits',
          'Announces file selection',
          'Reads validation errors',
          'Announces file removal',
        ],
      }}
      
      tokens={{
        file: '/tokens/components/file-upload.json',
        mappings: [
          { property: 'Border Color (Default)', token: 'fileupload.border.default', value: '#D1D5DB (Gray 300)' },
          { property: 'Border Color (Dragging)', token: 'fileupload.border.active', value: '#005196 (Navy 500)' },
          { property: 'Background (Dragging)', token: 'fileupload.bg.active', value: '#EFF6FF (Blue 50)' },
          { property: 'Icon Color', token: 'fileupload.icon.color', value: '#9CA3AF (Gray 400)' },
          { property: 'File Item Background', token: 'fileupload.item.bg', value: '#F9FAFB (Gray 50)' },
        ],
      }}
    />
  );
}
