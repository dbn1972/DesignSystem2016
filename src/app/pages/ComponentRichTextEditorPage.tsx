/**
 * Rich Text Editor Component Documentation Page
 * Complete documentation for the Rich Text Editor component with examples, code downloads, and comparisons
 */

import React, { useState } from 'react';
import { ComponentDocumentation } from '../components/ComponentDocumentation';
import { Bold, Italic, List, AlignLeft, Image, Table } from 'lucide-react';

// Import the actual Rich Text Editor component for live preview
const RichTextEditorPreview = ({
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
  ...props
}: any) => {
  const [content, setContent] = useState(value);
  const charCount = content.replace(/<[^>]*>/g, '').length;

  return (
    <div className="border border-border rounded">
      {!readOnly && toolbar.length > 0 && (
        <div className="flex gap-1 p-2 border-b border-border bg-background">
          {toolbar.includes('bold') && (
            <button className="p-1.5 hover:bg-gray-200 rounded" title="Bold">
              <Bold size={16} />
            </button>
          )}
          {toolbar.includes('italic') && (
            <button className="p-1.5 hover:bg-gray-200 rounded" title="Italic">
              <Italic size={16} />
            </button>
          )}
          {toolbar.includes('list') && (
            <button className="p-1.5 hover:bg-gray-200 rounded" title="List">
              <List size={16} />
            </button>
          )}
          {toolbar.includes('align') && (
            <button className="p-1.5 hover:bg-gray-200 rounded" title="Align">
              <AlignLeft size={16} />
            </button>
          )}
          {enableImages && (
            <button className="p-1.5 hover:bg-gray-200 rounded" title="Image">
              <Image size={16} />
            </button>
          )}
          {enableTables && (
            <button className="p-1.5 hover:bg-gray-200 rounded" title="Table">
              <Table size={16} />
            </button>
          )}
        </div>
      )}
      <div
        contentEditable={!readOnly}
        className={`min-h-[120px] p-3 focus:outline-none ${readOnly ? 'bg-background cursor-not-allowed' : ''}`}
        onInput={(e) => {
          const newContent = e.currentTarget.innerHTML;
          setContent(newContent);
          onChange?.(newContent);
        }}
        dangerouslySetInnerHTML={{ __html: content }}
        spellCheck={spellCheck}
        lang={language}
        {...props}
      />
      {maxLength && !readOnly && (
        <div className="p-2 text-sm text-muted-foreground border-t border-border text-right">
          {charCount} / {maxLength} characters
        </div>
      )}
    </div>
  );
};

function RichTextEditorPlayground() {
  const [showToolbar, setShowToolbar] = React.useState(false);
  const [maxLength, setMaxLength] = React.useState('500');

  return (
    <div className="grid lg:grid-cols-[1fr_300px] gap-6">
      <div className="flex items-center justify-center min-h-[160px] rounded-xl border-2 border-dashed border-border bg-background p-8">
        <div className="w-full flex items-center justify-center">
          <RichTextEditorPreview />
        </div>
      </div>
      <div className="space-y-4 text-sm">
          <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={showToolbar} onChange={e => setShowToolbar(e.target.checked)} className="accent-primary" /><span className="text-foreground">Show Toolbar</span></label>
          <div>
            <label className="block font-semibold text-foreground mb-1">Max Length</label>
            <select value={maxLength} onChange={e => setMaxLength(e.target.value)} className="w-full border border-border rounded px-3 py-2 bg-card text-foreground">
              <option value="500">500</option>
              <option value="1000">1000</option>
              <option value="2000">2000</option>
              <option value="5000">5000</option>
            </select>
          </div>
        <div className="p-3 rounded-lg bg-muted/50 border border-border">
          <p className="font-mono text-xs text-muted-foreground break-all">
            {`<RichTextEditor${showToolbar ? ' showToolbar' : ''} ${maxLength} />`}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ComponentRichTextEditorPage() {
  return (
    <ComponentDocumentation
      name="Rich Text Editor"
      description="Advanced content editing component for government services. Enables users to create and edit formatted documents, notices, circulars, and policy documents with comprehensive text formatting, media embedding, and accessibility support."
      category="Government Services"
      maturity="stable"
      tier="composite"
      since="v2.0.0"
      updated="v2.3.0"

      preview={
        <div className="w-full max-w-2xl">
          <RichTextEditorPreview />
        </div>
      }

      props={[
        {
          name: 'value',
          type: 'string',
          default: "''",
          required: false,
          description: 'HTML content of the editor. Can be controlled or uncontrolled.',
        },
        {
          name: 'onChange',
          type: '(content: string) => void',
          required: false,
          description: 'Callback fired when content changes. Receives HTML string.',
        },
        {
          name: 'placeholder',
          type: 'string',
          default: "'Enter text...'",
          required: false,
          description: 'Placeholder text shown when editor is empty.',
        },
        {
          name: 'toolbar',
          type: "Array<'bold' | 'italic' | 'underline' | 'strike' | 'heading' | 'list' | 'ordered' | 'blockquote' | 'code' | 'link' | 'align' | 'color' | 'background'>",
          default: "['bold', 'italic', 'list']",
          required: false,
          description: 'Array of toolbar tools to display. Controls which formatting options are available.',
        },
        {
          name: 'readOnly',
          type: 'boolean',
          default: 'false',
          required: false,
          description: 'Whether the editor is read-only. Prevents editing while maintaining formatting.',
        },
        {
          name: 'maxLength',
          type: 'number',
          required: false,
          description: 'Maximum character count (excluding HTML tags). Shows character counter when set.',
        },
        {
          name: 'enableImages',
          type: 'boolean',
          default: 'false',
          required: false,
          description: 'Enable image upload and insertion. Includes paste from clipboard support.',
        },
        {
          name: 'enableTables',
          type: 'boolean',
          default: 'false',
          required: false,
          description: 'Enable table insertion and editing. Useful for data presentation in documents.',
        },
        {
          name: 'enableLinks',
          type: 'boolean',
          default: 'true',
          required: false,
          description: 'Enable link insertion and editing. Includes URL validation.',
        },
        {
          name: 'spellCheck',
          type: 'boolean',
          default: 'true',
          required: false,
          description: 'Enable browser spell checking. Uses browser dictionary.',
        },
        {
          name: 'language',
          type: 'string',
          default: "'en'",
          required: false,
          description: 'Content language code (ISO 639-1). Affects spell checking and text direction.',
        },
        {
          name: 'onImageUpload',
          type: '(file: File) => Promise<string>',
          required: false,
          description: 'Custom image upload handler. Should return URL of uploaded image.',
        },
        {
          name: 'className',
          type: 'string',
          required: false,
          description: 'Additional CSS classes to apply to the editor container.',
        },
      ]}

      examples={[
        {
          title: 'Basic Editor',
          description: 'Simple rich text editor with essential formatting tools.',
          code: `import { RichTextEditor } from '@ux4g/react-composite';

function Example() {
  const [content, setContent] = React.useState('');

  return (
    <RichTextEditor
      value={content}
      onChange={setContent}
      placeholder="Enter announcement text..."
      toolbar={['bold', 'italic', 'list', 'ordered']}

      useCases={[
        { title: "Notice Drafting", description: "Rich text editor for official notices.", scenario: "Admin drafts public notice.", implementation: "<RichTextEditor onChange={handleChange} toolbar={[\"bold\",\"italic\",\"list\",\"link\"]} />" },
        { title: "Appeal Description", description: "Formatted text for appeal submissions.", scenario: "Citizen writes detailed appeal.", implementation: "<RichTextEditor maxLength={5000} />" },
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
                  Do use RichTextEditor when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Formatted text input (bold, italic, lists)</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Notice and announcement drafting</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Detailed description fields</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Content management interfaces</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-red-700 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-700 text-sm">✗</span>
                  Don&apos;t use RichTextEditor when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Plain text — use Textarea</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Code editing — use CodeBlock</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Short text — use Input</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Read-only content — use rendered HTML</li>
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
                  <div className="p-3 bg-green-50/50 rounded border border-green-200 mb-3 text-xs text-green-800">✓ Correct implementation shown</div>
                  <p className="text-sm text-muted-foreground">Limit toolbar to fewer than 10 options — simpler editors have 40% higher usability.</p>
                </div>
              </div>
              <div className="border-2 border-red-200 rounded-lg overflow-hidden">
                <div className="bg-red-50 px-4 py-2 text-sm font-bold text-red-800">✗ Don&apos;t</div>
                <div className="p-4">
                  <div className="p-3 bg-red-50/50 rounded border border-red-200 mb-3 text-xs text-red-800">✗ Incorrect implementation shown</div>
                  <p className="text-sm text-muted-foreground">Don&apos;t use rich text editors for short text — use Textarea instead.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Interactive Playground */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">Interactive Playground</h2>
            <p className="text-sm text-muted-foreground mb-6">Adjust the controls to preview different RichTextEditor configurations in real time.</p>
            <RichTextEditorPlayground />
          </section>

          {/* Related components */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Related Components</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <a href="/components/textarea" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Textarea</h3>
                <p className="text-sm text-muted-foreground">For plain text input</p>
              </a>
              <a href="/components/codeblock" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">CodeBlock</h3>
                <p className="text-sm text-muted-foreground">For code display</p>
              </a>
              <a href="/components/input" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Input</h3>
                <p className="text-sm text-muted-foreground">For single-line text</p>
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
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Added table support</li>
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Added image embedding</li>
                  </ul>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-sm font-mono font-bold text-primary">v1.0.0</span>
                    <span className="text-xs text-muted-foreground">October 2025</span>
                  </div>
                  <ul className="space-y-1">
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Initial release with basic formatting toolbar</li>
                  </ul>
                </div>
            </div>
          </section>

          {/* Research */}
          <section className="bg-card rounded-lg border border-border p-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">Research on this component</h2>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <h3 className="font-semibold text-foreground mb-1 text-sm">Toolbar simplicity</h3>
                <p className="text-sm text-muted-foreground">Rich text editors with fewer than 10 toolbar options have 40% higher usability scores than full-featured editors (NNG).</p>
              </div>
            </div>
          </section>
        </>
      }
    />
  );
}`,
          preview: (
            <RichTextEditorPreview
              placeholder="Enter announcement text..."
              toolbar={['bold', 'italic', 'list']}
            />
          ),
        },
        {
          title: 'Custom Toolbar',
          description: 'Editor with comprehensive formatting options for complex documents.',
          code: `import { RichTextEditor } from '@ux4g/react-composite';

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
}`,
          preview: (
            <RichTextEditorPreview
              placeholder="Draft your policy document..."
              toolbar={['bold', 'italic', 'list', 'align']}
              enableLinks
            />
          ),
        },
        {
          title: 'Read-only Mode',
          description: 'Display formatted content without editing capabilities.',
          code: `import { RichTextEditor } from '@ux4g/react-composite';

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
}`,
          preview: (
            <RichTextEditorPreview
              value={`<p><strong>Official Notice:</strong> This is to inform all citizens about the new regulation effective from <em>January 1, 2026</em>.</p>`}
              readOnly
            />
          ),
        },
        {
          title: 'With Character Limit',
          description: 'Editor with maximum character count for controlled input length.',
          code: `import { RichTextEditor } from '@ux4g/react-composite';

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
}`,
          preview: (
            <RichTextEditorPreview
              placeholder="Enter brief summary (max 500 characters)..."
              toolbar={['bold', 'italic']}
              maxLength={500}
            />
          ),
        },
        {
          title: 'Multilingual Content',
          description: 'Support for multiple languages with appropriate spell checking.',
          code: `import { RichTextEditor } from '@ux4g/react-composite';

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
}`,
          preview: (
            <div>
              <div className="mb-2 text-sm text-muted-foreground">Language: English</div>
              <RichTextEditorPreview
                placeholder="Enter content in selected language..."
                toolbar={['bold', 'italic', 'list']}
                language="en"
                spellCheck
              />
            </div>
          ),
        },
        {
          title: 'Table Support',
          description: 'Editor with table insertion for structured data presentation.',
          code: `import { RichTextEditor } from '@ux4g/react-composite';

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
}`,
          preview: (
            <RichTextEditorPreview
              placeholder="Create report with tables..."
              toolbar={['bold', 'italic', 'list', 'align']}
              enableTables
              enableImages
            />
          ),
        },
      ]}

      reactCode={{
        component: `import React, { useRef, useEffect, forwardRef } from 'react';
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
}`,
        types: `export interface RichTextEditorProps {
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
}`,
      }}

      angularCode={{
        component: `import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, OnInit, OnDestroy } from '@angular/core';
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
}`,
        module: `import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RichTextEditorComponent } from './rich-text-editor.component';

@NgModule({
  declarations: [RichTextEditorComponent],
  imports: [CommonModule],
  exports: [RichTextEditorComponent]
})
export class RichTextEditorModule { }`,
        types: `export type ToolbarItem =
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
  | 'background';`,
      }}

      webComponentsCode={{
        package: "npm install @ux4g/web-components @ux4g/tokens",
        component: "import '@ux4g/web-components';\n// Registers <ux4g-rich-text-editor> custom element",
        html: "<ux4g-rich-text-editor variant=\"primary\" size=\"md\"><!-- RichTextEditor --></ux4g-rich-text-editor>",
      }}
      comparisons={[
        {
          system: 'Quill',
          component: 'Quill Editor',
          variants: 'Highly customizable, modular architecture',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Comprehensive with API reference',
          link: 'https://quilljs.com/',
        },
        {
          system: 'TinyMCE',
          component: 'TinyMCE',
          variants: 'Full-featured, plugin-based',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Extensive documentation',
          link: 'https://www.tiny.cloud/',
        },
        {
          system: 'CKEditor',
          component: 'CKEditor 5',
          variants: 'Modern, real-time collaboration',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Comprehensive guides',
          link: 'https://ckeditor.com/',
        },
        {
          system: 'Slate',
          component: 'Slate Editor',
          variants: 'Framework for building editors',
          accessibility: 'WCAG 2.1 AA (with implementation)',
          documentation: 'Good, developer-focused',
          link: 'https://www.slatejs.org/',
        },
        {
          system: 'ProseMirror',
          component: 'ProseMirror',
          variants: 'Low-level toolkit, highly flexible',
          accessibility: 'WCAG 2.1 AA (with implementation)',
          documentation: 'Technical documentation',
          link: 'https://prosemirror.net/',
        },
      ]}

      accessibility={{
        wcagLevel: 'WCAG 2.1 Level AA Compliant',
        features: [
          'Full keyboard navigation support with standard shortcuts (WCAG 2.1.1)',
          'ARIA labels and roles for toolbar buttons (WCAG 4.1.2)',
          'Screen reader announcements for formatting changes (WCAG 4.1.3)',
          'Sufficient color contrast for all text and UI elements (WCAG 1.4.3)',
          'Focus indicators on all interactive elements (WCAG 2.4.7)',
          'Character counter announced to screen readers via aria-live (WCAG 4.1.3)',
          'Language attribute support for multilingual content (WCAG 3.1.2)',
          'Semantic HTML structure for editor content (WCAG 1.3.1)',
        ],
        keyboardSupport: [
          { key: 'Ctrl/Cmd + B', action: 'Toggle bold formatting' },
          { key: 'Ctrl/Cmd + I', action: 'Toggle italic formatting' },
          { key: 'Ctrl/Cmd + U', action: 'Toggle underline formatting' },
          { key: 'Ctrl/Cmd + K', action: 'Insert/edit link' },
          { key: 'Ctrl/Cmd + Z', action: 'Undo last action' },
          { key: 'Ctrl/Cmd + Y', action: 'Redo last action' },
          { key: 'Tab', action: 'Indent list item or move to next toolbar button' },
          { key: 'Shift + Tab', action: 'Outdent list item or move to previous toolbar button' },
          { key: 'Enter', action: 'Create new paragraph or list item' },
          { key: 'Ctrl/Cmd + A', action: 'Select all content' },
        ],
        screenReader: [
          'Announces "Rich Text Editor" role when focused',
          'Reads current formatting state (bold, italic, etc.)',
          'Announces toolbar button labels and states',
          'Provides feedback when formatting is applied',
          'Reads character count updates in real-time',
          'Announces when maximum length is reached',
        ],
      }}

      tokens={{
        file: '/tokens/components/rich-text-editor.json',
        mappings: [
          { property: 'Min Height', token: 'base.height.editor.min', value: '150px' },
          { property: 'Padding', token: 'base.padding.editor', value: '12px' },
          { property: 'Border Color', token: 'base.borderColor.default', value: '#d1d5db (Gray 300)' },
          { property: 'Border Radius', token: 'base.borderRadius', value: '4px' },
          { property: 'Toolbar Background', token: 'toolbar.background', value: '#f9fafb (Gray 50)' },
          { property: 'Toolbar Border', token: 'toolbar.borderColor', value: '#d1d5db (Gray 300)' },
          { property: 'Button Hover Color', token: 'toolbar.button.hover', value: '#005196 (Navy 500)' },
          { property: 'Button Active Color', token: 'toolbar.button.active', value: '#005196 (Navy 500)' },
          { property: 'Placeholder Color', token: 'text.placeholder', value: '#9ca3af (Gray 400)' },
          { property: 'Character Counter Color', token: 'text.secondary', value: '#6b7280 (Gray 500)' },
          { property: 'Read-only Background', token: 'background.disabled', value: '#f9fafb (Gray 50)' },
        ],
      }}

      governmentContext={{
        useCases: "Drafting official government notices and circulars; Creating and publishing policy documents; Composing public announcements and press releases; Editing department guidelines and regulations; Preparing multilingual content for diverse populations; Creating structured reports with tables and formatting; Documenting meeting minutes and official records; Publishing citizen-facing information and FAQs",
        examples: "Official Notice Editor: Department heads drafting public notices with proper formatting and structure; Policy Document Management: Policy teams creating comprehensive documents with headings, lists, and tables; Multilingual Circulars: Administrative staff preparing circulars in multiple regional languages; Public Announcement System: Communications team publishing formatted announcements on government portals",
        considerations: "Support for right-to-left (RTL) languages for regional content; Version control integration for document history tracking; Content approval workflows before publication; Export capabilities to PDF and other standard formats; Template support for common document types; Accessibility compliance for diverse user needs; Offline editing capabilities for remote locations; Content sanitization to prevent security vulnerabilities",
      }}
    />
  );
}
