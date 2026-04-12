import{e as n,j as e,r as x}from"./index-BYMLq1ET.js";import{C as y}from"./ComponentDocumentation-CxrYZXwp.js";import{L as v}from"./list-Bx5szaPP.js";import{T as C}from"./table-COpK4fnG.js";import"./copy-Ck_ch6Lp.js";import"./info-117bcUyF.js";import"./external-link-Ckpfpf0L.js";/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=[["path",{d:"M15 12H3",key:"6jk70r"}],["path",{d:"M17 18H3",key:"1amg6g"}],["path",{d:"M21 6H3",key:"1jwq7v"}]],E=n("align-left",k);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=[["path",{d:"M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8",key:"mg9rjx"}]],R=n("bold",T);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],w=n("image",q);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=[["line",{x1:"19",x2:"10",y1:"4",y2:"4",key:"15jd3p"}],["line",{x1:"14",x2:"5",y1:"20",y2:"20",key:"bu0au3"}],["line",{x1:"15",x2:"9",y1:"4",y2:"20",key:"uljnxc"}]],I=n("italic",L),t=({value:c="",onChange:r,placeholder:A="Enter text...",toolbar:o=["bold","italic","list"],readOnly:i=!1,maxLength:l,enableImages:d=!1,enableTables:u=!1,enableLinks:j=!0,spellCheck:p=!0,language:m="en",...g})=>{const[a,h]=x.useState(c),b=a.replace(/<[^>]*>/g,"").length;return e.jsxs("div",{className:"border border-gray-300 rounded",children:[!i&&o.length>0&&e.jsxs("div",{className:"flex gap-1 p-2 border-b border-gray-300 bg-gray-50",children:[o.includes("bold")&&e.jsx("button",{className:"p-1.5 hover:bg-gray-200 rounded",title:"Bold",children:e.jsx(R,{size:16})}),o.includes("italic")&&e.jsx("button",{className:"p-1.5 hover:bg-gray-200 rounded",title:"Italic",children:e.jsx(I,{size:16})}),o.includes("list")&&e.jsx("button",{className:"p-1.5 hover:bg-gray-200 rounded",title:"List",children:e.jsx(v,{size:16})}),o.includes("align")&&e.jsx("button",{className:"p-1.5 hover:bg-gray-200 rounded",title:"Align",children:e.jsx(E,{size:16})}),d&&e.jsx("button",{className:"p-1.5 hover:bg-gray-200 rounded",title:"Image",children:e.jsx(w,{size:16})}),u&&e.jsx("button",{className:"p-1.5 hover:bg-gray-200 rounded",title:"Table",children:e.jsx(C,{size:16})})]}),e.jsx("div",{contentEditable:!i,className:`min-h-[120px] p-3 focus:outline-none ${i?"bg-gray-50 cursor-not-allowed":""}`,onInput:f=>{const s=f.currentTarget.innerHTML;h(s),r==null||r(s)},dangerouslySetInnerHTML:{__html:a},spellCheck:p,lang:m,...g}),l&&!i&&e.jsxs("div",{className:"p-2 text-sm text-gray-600 border-t border-gray-300 text-right",children:[b," / ",l," characters"]})]})};function B(){return e.jsx(y,{name:"Rich Text Editor",description:"Advanced content editing component for government services. Enables users to create and edit formatted documents, notices, circulars, and policy documents with comprehensive text formatting, media embedding, and accessibility support.",category:"Government Services",maturity:"stable",tier:"composite",since:"v2.0.0",updated:"v2.3.0",props:[{name:"value",type:"string",default:"''",required:!1,description:"HTML content of the editor. Can be controlled or uncontrolled."},{name:"onChange",type:"(content: string) => void",required:!1,description:"Callback fired when content changes. Receives HTML string."},{name:"placeholder",type:"string",default:"'Enter text...'",required:!1,description:"Placeholder text shown when editor is empty."},{name:"toolbar",type:"Array<'bold' | 'italic' | 'underline' | 'strike' | 'heading' | 'list' | 'ordered' | 'blockquote' | 'code' | 'link' | 'align' | 'color' | 'background'>",default:"['bold', 'italic', 'list']",required:!1,description:"Array of toolbar tools to display. Controls which formatting options are available."},{name:"readOnly",type:"boolean",default:"false",required:!1,description:"Whether the editor is read-only. Prevents editing while maintaining formatting."},{name:"maxLength",type:"number",required:!1,description:"Maximum character count (excluding HTML tags). Shows character counter when set."},{name:"enableImages",type:"boolean",default:"false",required:!1,description:"Enable image upload and insertion. Includes paste from clipboard support."},{name:"enableTables",type:"boolean",default:"false",required:!1,description:"Enable table insertion and editing. Useful for data presentation in documents."},{name:"enableLinks",type:"boolean",default:"true",required:!1,description:"Enable link insertion and editing. Includes URL validation."},{name:"spellCheck",type:"boolean",default:"true",required:!1,description:"Enable browser spell checking. Uses browser dictionary."},{name:"language",type:"string",default:"'en'",required:!1,description:"Content language code (ISO 639-1). Affects spell checking and text direction."},{name:"onImageUpload",type:"(file: File) => Promise<string>",required:!1,description:"Custom image upload handler. Should return URL of uploaded image."},{name:"className",type:"string",required:!1,description:"Additional CSS classes to apply to the editor container."}],examples:[{title:"Basic Editor",description:"Simple rich text editor with essential formatting tools.",code:`import { RichTextEditor } from '@ux4g/react-composite';

function Example() {
  const [content, setContent] = React.useState('');

  return (
    <RichTextEditor
      value={content}
      onChange={setContent}
      placeholder="Enter announcement text..."
      toolbar={['bold', 'italic', 'list', 'ordered']}
    />
  );
}`,preview:e.jsx(t,{placeholder:"Enter announcement text...",toolbar:["bold","italic","list"]})},{title:"Custom Toolbar",description:"Editor with comprehensive formatting options for complex documents.",code:`import { RichTextEditor } from '@ux4g/react-composite';

function Example() {
  const [content, setContent] = React.useState('');

  return (
    <RichTextEditor
      value={content}
      onChange={setContent}
      placeholder="Draft your policy document..."
      toolbar={[
        'bold', 'italic', 'underline',
        'heading', 'list', 'ordered',
        'blockquote', 'link', 'align'
      ]}
      enableLinks
    />
  );
}`,preview:e.jsx(t,{placeholder:"Draft your policy document...",toolbar:["bold","italic","list","align"],enableLinks:!0})},{title:"Read-only Mode",description:"Display formatted content without editing capabilities.",code:`import { RichTextEditor } from '@ux4g/react-composite';

function Example() {
  const publishedNotice = \`
    <h2>Official Notice</h2>
    <p>This is to inform all citizens about the
    <strong>new regulation</strong> effective from
    <em>January 1, 2026</em>.</p>
    <ul>
      <li>Section A: Updated guidelines</li>
      <li>Section B: Implementation timeline</li>
    </ul>
  \`;

  return (
    <RichTextEditor
      value={publishedNotice}
      readOnly
    />
  );
}`,preview:e.jsx(t,{value:"<p><strong>Official Notice:</strong> This is to inform all citizens about the new regulation effective from <em>January 1, 2026</em>.</p>",readOnly:!0})},{title:"With Character Limit",description:"Editor with maximum character count for controlled input length.",code:`import { RichTextEditor } from '@ux4g/react-composite';

function Example() {
  const [content, setContent] = React.useState('');

  return (
    <RichTextEditor
      value={content}
      onChange={setContent}
      placeholder="Enter brief summary (max 500 characters)..."
      toolbar={['bold', 'italic']}
      maxLength={500}
    />
  );
}`,preview:e.jsx(t,{placeholder:"Enter brief summary (max 500 characters)...",toolbar:["bold","italic"],maxLength:500})},{title:"Multilingual Content",description:"Support for multiple languages with appropriate spell checking.",code:`import { RichTextEditor } from '@ux4g/react-composite';

function Example() {
  const [content, setContent] = React.useState('');
  const [language, setLanguage] = React.useState('en');

  return (
    <div>
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="mb-2 p-2 border rounded"
      >
        <option value="en">English</option>
        <option value="hi">Hindi</option>
        <option value="ta">Tamil</option>
        <option value="te">Telugu</option>
      </select>
      <RichTextEditor
        value={content}
        onChange={setContent}
        language={language}
        spellCheck
        toolbar={['bold', 'italic', 'list']}
      />
    </div>
  );
}`,preview:e.jsxs("div",{children:[e.jsx("div",{className:"mb-2 text-sm text-gray-600",children:"Language: English"}),e.jsx(t,{placeholder:"Enter content in selected language...",toolbar:["bold","italic","list"],language:"en",spellCheck:!0})]})},{title:"Table Support",description:"Editor with table insertion for structured data presentation.",code:`import { RichTextEditor } from '@ux4g/react-composite';

function Example() {
  const [content, setContent] = React.useState('');

  return (
    <RichTextEditor
      value={content}
      onChange={setContent}
      placeholder="Create report with tables..."
      toolbar={['bold', 'italic', 'list', 'align']}
      enableTables
      enableImages
    />
  );
}`,preview:e.jsx(t,{placeholder:"Create report with tables...",toolbar:["bold","italic","list","align"],enableTables:!0,enableImages:!0})}],reactCode:{component:`import React, { useRef, useEffect, forwardRef } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import { cn } from '../../utils/cn';
import { RichTextEditorProps } from './RichTextEditor.types';

export const RichTextEditor = forwardRef<HTMLDivElement, RichTextEditorProps>(
  (
    {
      value = '',
      onChange,
      placeholder = 'Enter text...',
      toolbar = ['bold', 'italic', 'list'],
      readOnly = false,
      maxLength,
      enableImages = false,
      enableTables = false,
      enableLinks = true,
      spellCheck = true,
      language = 'en',
      onImageUpload,
      className,
      ...props
    },
    ref
  ) => {
    const editorRef = useRef<HTMLDivElement>(null);
    const quillRef = useRef<Quill | null>(null);

    useEffect(() => {
      if (!editorRef.current) return;

      // Build toolbar configuration
      const toolbarOptions = buildToolbarConfig(
        toolbar,
        enableImages,
        enableTables,
        enableLinks
      );

      // Initialize Quill
      const quill = new Quill(editorRef.current, {
        theme: 'snow',
        readOnly,
        placeholder,
        modules: {
          toolbar: readOnly ? false : toolbarOptions,
          keyboard: {
            bindings: {
              // Custom keyboard shortcuts
              bold: { key: 'B', shortKey: true, handler: () => quill.format('bold', true) },
              italic: { key: 'I', shortKey: true, handler: () => quill.format('italic', true) },
            },
          },
        },
      });

      // Set initial content
      if (value) {
        quill.clipboard.dangerouslyPasteHTML(value);
      }

      // Handle content changes
      quill.on('text-change', () => {
        const html = quill.root.innerHTML;
        const text = quill.getText();

        // Enforce max length
        if (maxLength && text.length > maxLength) {
          quill.deleteText(maxLength, text.length);
          return;
        }

        onChange?.(html);
      });

      // Custom image upload handler
      if (enableImages && onImageUpload) {
        quill.getModule('toolbar').addHandler('image', () => {
          const input = document.createElement('input');
          input.setAttribute('type', 'file');
          input.setAttribute('accept', 'image/*');
          input.click();

          input.onchange = async () => {
            const file = input.files?.[0];
            if (file) {
              const url = await onImageUpload(file);
              const range = quill.getSelection(true);
              quill.insertEmbed(range.index, 'image', url);
            }
          };
        });
      }

      quillRef.current = quill;

      return () => {
        quill.off('text-change');
      };
    }, []);

    // Update read-only state
    useEffect(() => {
      if (quillRef.current) {
        quillRef.current.enable(!readOnly);
      }
    }, [readOnly]);

    // Sync external value changes
    useEffect(() => {
      if (quillRef.current && value !== quillRef.current.root.innerHTML) {
        quillRef.current.clipboard.dangerouslyPasteHTML(value);
      }
    }, [value]);

    return (
      <div
        className={cn('ux4g-rich-text-editor', className)}
        lang={language}
        spellCheck={spellCheck}
        ref={ref}
        {...props}
      >
        <div ref={editorRef} />
        {maxLength && !readOnly && (
          <div className="character-counter" aria-live="polite">
            {quillRef.current?.getText().length || 0} / {maxLength}
          </div>
        )}
      </div>
    );
  }
);

RichTextEditor.displayName = 'RichTextEditor';

function buildToolbarConfig(
  toolbar: string[],
  enableImages: boolean,
  enableTables: boolean,
  enableLinks: boolean
): any[] {
  const config: any[] = [];

  if (toolbar.includes('bold') || toolbar.includes('italic') || toolbar.includes('underline')) {
    config.push([
      toolbar.includes('bold') && 'bold',
      toolbar.includes('italic') && 'italic',
      toolbar.includes('underline') && 'underline',
    ].filter(Boolean));
  }

  if (toolbar.includes('heading')) {
    config.push([{ header: [1, 2, 3, false] }]);
  }

  if (toolbar.includes('list') || toolbar.includes('ordered')) {
    config.push([
      toolbar.includes('list') && { list: 'bullet' },
      toolbar.includes('ordered') && { list: 'ordered' },
    ].filter(Boolean));
  }

  if (toolbar.includes('align')) {
    config.push([{ align: [] }]);
  }

  if (enableLinks) {
    config.push(['link']);
  }

  if (enableImages) {
    config.push(['image']);
  }

  if (enableTables) {
    config.push(['table']);
  }

  return config;
}`,types:`export interface RichTextEditorProps {
  value?: string;
  onChange?: (content: string) => void;
  placeholder?: string;
  toolbar?: Array<
    'bold' | 'italic' | 'underline' | 'strike' |
    'heading' | 'list' | 'ordered' | 'blockquote' |
    'code' | 'link' | 'align' | 'color' | 'background'
  >;
  readOnly?: boolean;
  maxLength?: number;
  enableImages?: boolean;
  enableTables?: boolean;
  enableLinks?: boolean;
  spellCheck?: boolean;
  language?: string;
  onImageUpload?: (file: File) => Promise<string>;
  className?: string;
}`,styles:`.ux4g-rich-text-editor {
  border: 1px solid #d1d5db;
  border-radius: 4px;
  background: white;
}

.ux4g-rich-text-editor .ql-toolbar {
  border: none;
  border-bottom: 1px solid #d1d5db;
  background: #f9fafb;
  padding: 8px;
}

.ux4g-rich-text-editor .ql-container {
  border: none;
  font-family: inherit;
  font-size: 16px;
  min-height: 150px;
}

.ux4g-rich-text-editor .ql-editor {
  padding: 12px;
  min-height: 150px;
}

.ux4g-rich-text-editor .ql-editor.ql-blank::before {
  color: #9ca3af;
  font-style: normal;
}

.ux4g-rich-text-editor.read-only .ql-editor {
  background: #f9fafb;
  cursor: not-allowed;
}

.ux4g-rich-text-editor .character-counter {
  padding: 8px 12px;
  border-top: 1px solid #d1d5db;
  text-align: right;
  font-size: 14px;
  color: #6b7280;
}

.ux4g-rich-text-editor .ql-toolbar button:hover,
.ux4g-rich-text-editor .ql-toolbar button:focus {
  color: #005196;
}

.ux4g-rich-text-editor .ql-toolbar button.ql-active {
  color: #005196;
}`},angularCode:{component:`import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, OnInit, OnDestroy } from '@angular/core';
import Quill from 'quill';

type ToolbarItem = 'bold' | 'italic' | 'underline' | 'strike' | 'heading' |
  'list' | 'ordered' | 'blockquote' | 'code' | 'link' | 'align' | 'color' | 'background';

@Component({
  selector: 'ux4g-rich-text-editor',
  template: \`
    <div class="ux4g-rich-text-editor" [attr.lang]="language" [attr.spellcheck]="spellCheck">
      <div #editorContainer></div>
      <div *ngIf="maxLength && !readOnly" class="character-counter" aria-live="polite">
        {{ currentLength }} / {{ maxLength }}
      </div>
    </div>
  \`,
  styleUrls: ['./rich-text-editor.component.css']
})
export class RichTextEditorComponent implements OnInit, OnDestroy {
  @ViewChild('editorContainer', { static: true }) editorContainer!: ElementRef;

  @Input() value = '';
  @Input() placeholder = 'Enter text...';
  @Input() toolbar: ToolbarItem[] = ['bold', 'italic', 'list'];
  @Input() readOnly = false;
  @Input() maxLength?: number;
  @Input() enableImages = false;
  @Input() enableTables = false;
  @Input() enableLinks = true;
  @Input() spellCheck = true;
  @Input() language = 'en';

  @Output() valueChange = new EventEmitter<string>();
  @Output() imageUpload = new EventEmitter<File>();

  private quill?: Quill;
  currentLength = 0;

  ngOnInit(): void {
    this.initializeEditor();
  }

  ngOnDestroy(): void {
    if (this.quill) {
      this.quill.off('text-change');
    }
  }

  private initializeEditor(): void {
    const toolbarOptions = this.buildToolbarConfig();

    this.quill = new Quill(this.editorContainer.nativeElement, {
      theme: 'snow',
      readOnly: this.readOnly,
      placeholder: this.placeholder,
      modules: {
        toolbar: this.readOnly ? false : toolbarOptions,
        keyboard: {
          bindings: {
            bold: {
              key: 'B',
              shortKey: true,
              handler: () => this.quill?.format('bold', true)
            },
            italic: {
              key: 'I',
              shortKey: true,
              handler: () => this.quill?.format('italic', true)
            },
          },
        },
      },
    });

    if (this.value) {
      this.quill.clipboard.dangerouslyPasteHTML(this.value);
    }

    this.quill.on('text-change', () => {
      if (!this.quill) return;

      const html = this.quill.root.innerHTML;
      const text = this.quill.getText();
      this.currentLength = text.length;

      if (this.maxLength && text.length > this.maxLength) {
        this.quill.deleteText(this.maxLength, text.length);
        return;
      }

      this.valueChange.emit(html);
    });
  }

  private buildToolbarConfig(): any[] {
    const config: any[] = [];

    if (this.toolbar.includes('bold') || this.toolbar.includes('italic') || this.toolbar.includes('underline')) {
      config.push([
        this.toolbar.includes('bold') && 'bold',
        this.toolbar.includes('italic') && 'italic',
        this.toolbar.includes('underline') && 'underline',
      ].filter(Boolean));
    }

    if (this.toolbar.includes('heading')) {
      config.push([{ header: [1, 2, 3, false] }]);
    }

    if (this.toolbar.includes('list') || this.toolbar.includes('ordered')) {
      config.push([
        this.toolbar.includes('list') && { list: 'bullet' },
        this.toolbar.includes('ordered') && { list: 'ordered' },
      ].filter(Boolean));
    }

    if (this.toolbar.includes('align')) {
      config.push([{ align: [] }]);
    }

    if (this.enableLinks) {
      config.push(['link']);
    }

    if (this.enableImages) {
      config.push(['image']);
    }

    return config;
  }
}`,module:`import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RichTextEditorComponent } from './rich-text-editor.component';

@NgModule({
  declarations: [RichTextEditorComponent],
  imports: [CommonModule],
  exports: [RichTextEditorComponent]
})
export class RichTextEditorModule { }`,types:`export type ToolbarItem =
  | 'bold'
  | 'italic'
  | 'underline'
  | 'strike'
  | 'heading'
  | 'list'
  | 'ordered'
  | 'blockquote'
  | 'code'
  | 'link'
  | 'align'
  | 'color'
  | 'background';`},comparisons:[{system:"Quill",component:"Quill Editor",variants:"Highly customizable, modular architecture",accessibility:"WCAG 2.1 AA",documentation:"Comprehensive with API reference",link:"https://quilljs.com/"},{system:"TinyMCE",component:"TinyMCE",variants:"Full-featured, plugin-based",accessibility:"WCAG 2.1 AA",documentation:"Extensive documentation",link:"https://www.tiny.cloud/"},{system:"CKEditor",component:"CKEditor 5",variants:"Modern, real-time collaboration",accessibility:"WCAG 2.1 AA",documentation:"Comprehensive guides",link:"https://ckeditor.com/"},{system:"Slate",component:"Slate Editor",variants:"Framework for building editors",accessibility:"WCAG 2.1 AA (with implementation)",documentation:"Good, developer-focused",link:"https://www.slatejs.org/"},{system:"ProseMirror",component:"ProseMirror",variants:"Low-level toolkit, highly flexible",accessibility:"WCAG 2.1 AA (with implementation)",documentation:"Technical documentation",link:"https://prosemirror.net/"}],accessibility:{wcagLevel:"WCAG 2.1 Level AA Compliant",features:["Full keyboard navigation support with standard shortcuts (WCAG 2.1.1)","ARIA labels and roles for toolbar buttons (WCAG 4.1.2)","Screen reader announcements for formatting changes (WCAG 4.1.3)","Sufficient color contrast for all text and UI elements (WCAG 1.4.3)","Focus indicators on all interactive elements (WCAG 2.4.7)","Character counter announced to screen readers via aria-live (WCAG 4.1.3)","Language attribute support for multilingual content (WCAG 3.1.2)","Semantic HTML structure for editor content (WCAG 1.3.1)"],keyboardSupport:[{key:"Ctrl/Cmd + B",action:"Toggle bold formatting"},{key:"Ctrl/Cmd + I",action:"Toggle italic formatting"},{key:"Ctrl/Cmd + U",action:"Toggle underline formatting"},{key:"Ctrl/Cmd + K",action:"Insert/edit link"},{key:"Ctrl/Cmd + Z",action:"Undo last action"},{key:"Ctrl/Cmd + Y",action:"Redo last action"},{key:"Tab",action:"Indent list item or move to next toolbar button"},{key:"Shift + Tab",action:"Outdent list item or move to previous toolbar button"},{key:"Enter",action:"Create new paragraph or list item"},{key:"Ctrl/Cmd + A",action:"Select all content"}],screenReader:['Announces "Rich Text Editor" role when focused',"Reads current formatting state (bold, italic, etc.)","Announces toolbar button labels and states","Provides feedback when formatting is applied","Reads character count updates in real-time","Announces when maximum length is reached"]},tokens:{file:"/tokens/components/rich-text-editor.json",mappings:[{property:"Min Height",token:"base.height.editor.min",value:"150px"},{property:"Padding",token:"base.padding.editor",value:"12px"},{property:"Border Color",token:"base.borderColor.default",value:"#d1d5db (Gray 300)"},{property:"Border Radius",token:"base.borderRadius",value:"4px"},{property:"Toolbar Background",token:"toolbar.background",value:"#f9fafb (Gray 50)"},{property:"Toolbar Border",token:"toolbar.borderColor",value:"#d1d5db (Gray 300)"},{property:"Button Hover Color",token:"toolbar.button.hover",value:"#005196 (Navy 500)"},{property:"Button Active Color",token:"toolbar.button.active",value:"#005196 (Navy 500)"},{property:"Placeholder Color",token:"text.placeholder",value:"#9ca3af (Gray 400)"},{property:"Character Counter Color",token:"text.secondary",value:"#6b7280 (Gray 500)"},{property:"Read-only Background",token:"background.disabled",value:"#f9fafb (Gray 50)"}]},governmentContext:{useCases:["Drafting official government notices and circulars","Creating and publishing policy documents","Composing public announcements and press releases","Editing department guidelines and regulations","Preparing multilingual content for diverse populations","Creating structured reports with tables and formatting","Documenting meeting minutes and official records","Publishing citizen-facing information and FAQs"],examples:[{title:"Official Notice Editor",description:"Department heads drafting public notices with proper formatting and structure."},{title:"Policy Document Management",description:"Policy teams creating comprehensive documents with headings, lists, and tables."},{title:"Multilingual Circulars",description:"Administrative staff preparing circulars in multiple regional languages."},{title:"Public Announcement System",description:"Communications team publishing formatted announcements on government portals."}],considerations:["Support for right-to-left (RTL) languages for regional content","Version control integration for document history tracking","Content approval workflows before publication","Export capabilities to PDF and other standard formats","Template support for common document types","Accessibility compliance for diverse user needs","Offline editing capabilities for remote locations","Content sanitization to prevent security vulnerabilities"]}})}export{B as default};
