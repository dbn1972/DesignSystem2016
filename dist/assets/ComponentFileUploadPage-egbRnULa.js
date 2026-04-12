import{j as e,R as o,h as f,X as u}from"./index-wYwTiNL-.js";import{C as g}from"./ComponentDocumentation-DKnXH-Pi.js";import{U as b}from"./upload-CZX8gqKz.js";import{F as v}from"./file-IWZSRtCQ.js";import"./copy-DRmj_ACu.js";import"./info-DKzCpq0n.js";import"./external-link-CusCIMwZ.js";const n=()=>{const[t,l]=o.useState([]),[d,s]=o.useState(!1),p=i=>{if(i.target.files){const r=Array.from(i.target.files).map(a=>({name:a.name,size:a.size}));l([...t,...r])}},c=i=>i<1024?i+" B":i<1024*1024?(i/1024).toFixed(1)+" KB":(i/(1024*1024)).toFixed(1)+" MB";return e.jsxs("div",{children:[e.jsxs("div",{className:`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${d?"border-[#005196] bg-blue-50":"border-gray-300"}`,onDragOver:i=>{i.preventDefault(),s(!0)},onDragLeave:()=>s(!1),onDrop:i=>{i.preventDefault(),s(!1)},children:[e.jsx(b,{className:"mx-auto mb-4 text-gray-400",size:48}),e.jsx("p",{className:"text-gray-700 mb-2 font-semibold",children:"Drag and drop files here, or click to browse"}),e.jsx("p",{className:"text-sm text-gray-500 mb-4",children:"Supports PDF, JPG, PNG up to 10MB"}),e.jsxs("label",{className:"inline-block px-6 py-3 bg-[#005196] text-white rounded-lg cursor-pointer hover:bg-[#004080] transition-colors font-semibold",children:["Choose Files",e.jsx("input",{type:"file",multiple:!0,onChange:p,className:"hidden",accept:".pdf,.jpg,.jpeg,.png"})]})]}),t.length>0&&e.jsx("div",{className:"mt-4 space-y-2",children:t.map((i,r)=>e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200",children:[e.jsx(v,{size:20,className:"text-gray-600"}),e.jsxs("div",{className:"flex-1",children:[e.jsx("p",{className:"text-sm font-semibold text-gray-900",children:i.name}),e.jsx("p",{className:"text-xs text-gray-500",children:c(i.size)})]}),e.jsx(f,{size:20,className:"text-[#138808]"}),e.jsx("button",{onClick:()=>l(t.filter((a,m)=>m!==r)),className:"p-1 hover:bg-gray-200 rounded transition-colors",children:e.jsx(u,{size:16,className:"text-gray-600"})})]},r))})]})};function z(){return e.jsx(g,{name:"FileUpload",description:"Drag-and-drop file upload component with validation, preview, and progress tracking. Essential for document submission in government applications.",category:"Advanced Form",maturity:"beta",tier:"composite",since:"v2.0.0",props:[{name:"accept",type:"string",required:!1,description:'Accepted file types (e.g., ".pdf,.jpg,.png").'},{name:"multiple",type:"boolean",default:"false",required:!1,description:"Allow multiple file selection."},{name:"maxSize",type:"number",default:"10485760",required:!1,description:"Maximum file size in bytes (default 10MB)."},{name:"maxFiles",type:"number",required:!1,description:"Maximum number of files allowed."},{name:"onUpload",type:"(files: File[]) => void",required:!0,description:"Callback when files are selected/dropped."},{name:"onError",type:"(error: string) => void",required:!1,description:"Callback for validation errors."},{name:"disabled",type:"boolean",default:"false",required:!1,description:"Whether upload is disabled."},{name:"showPreview",type:"boolean",default:"true",required:!1,description:"Show file preview list."}],examples:[{title:"Document Upload",description:"Upload PDF documents with validation.",code:`import { FileUpload } from '@ux4g/react-core';

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
    />
  );
}`,preview:e.jsx(n,{})},{title:"Multiple Files",description:"Upload multiple images.",code:`import { FileUpload } from '@ux4g/react-core';

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
}`,preview:e.jsx(n,{})}],reactCode:{component:`import React, { useState, useRef } from 'react';
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
          \${isDragging ? 'border-[#005196] bg-blue-50' : 'border-gray-300'}
          \${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        \`}
        onDragOver={(e) => { e.preventDefault(); !disabled && setIsDragging(true); }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
        onClick={() => !disabled && fileInputRef.current?.click()}
      >
        <Upload className="mx-auto mb-4 text-gray-400" size={48} />
        <p className="text-gray-700 mb-2 font-semibold">
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
              className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200"
            >
              <File size={20} className="text-gray-600" />
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900">{file.name}</p>
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
                <X size={16} className="text-gray-600" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};`,types:`export interface UploadedFile {
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
}`},angularCode:{component:`import { Component, Input, Output, EventEmitter } from '@angular/core';

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
          <p class="text-gray-700 mb-2 font-semibold">Drag and drop files here</p>
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
             class="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border">
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
    classes += this.isDragging ? ' border-blue-600 bg-blue-50' : ' border-gray-300';
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
}`,module:`import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadComponent } from './file-upload.component';

@NgModule({
  declarations: [FileUploadComponent],
  imports: [CommonModule],
  exports: [FileUploadComponent]
})
export class FileUploadModule { }`,types:`export interface UploadedFile {
  name: string;
  size: number;
  id: string;
}`},comparisons:[{system:"Ant Design (Alibaba)",component:"Upload",variants:"drag-drop, picture wall, file list",accessibility:"WCAG 2.0 AA",documentation:"Comprehensive",link:"https://ant.design/components/upload"},{system:"Material UI (Google)",component:"FileUpload (custom)",variants:"button, drag-drop",accessibility:"WCAG 2.1 AA",documentation:"Good",link:"https://mui.com/"},{system:"React Dropzone",component:"Dropzone",variants:"drag-drop, validation, preview",accessibility:"WCAG 2.1 AA",documentation:"Comprehensive",link:"https://react-dropzone.js.org/"}],accessibility:{wcagLevel:"WCAG 2.1 Level AA Compliant",features:["Keyboard accessible file input","Clear focus indicators","File validation with error messages","Screen reader announces file selection","Drag-and-drop with keyboard fallback","Clear file removal buttons"],keyboardSupport:[{key:"Tab",action:"Focus upload area"},{key:"Enter/Space",action:"Open file browser"},{key:"Tab",action:"Navigate between uploaded files"},{key:"Enter/Space",action:"Remove focused file"}],screenReader:["Announces upload instructions","Reads accepted file types and size limits","Announces file selection","Reads validation errors","Announces file removal"]},tokens:{file:"/tokens/components/file-upload.json",mappings:[{property:"Border Color (Default)",token:"fileupload.border.default",value:"#D1D5DB (Gray 300)"},{property:"Border Color (Dragging)",token:"fileupload.border.active",value:"#005196 (Navy 500)"},{property:"Background (Dragging)",token:"fileupload.bg.active",value:"#EFF6FF (Blue 50)"},{property:"Icon Color",token:"fileupload.icon.color",value:"#9CA3AF (Gray 400)"},{property:"File Item Background",token:"fileupload.item.bg",value:"#F9FAFB (Gray 50)"}]}})}export{z as default};
