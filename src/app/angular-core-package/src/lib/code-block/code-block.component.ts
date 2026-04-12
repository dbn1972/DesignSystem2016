import { Component, Input, ChangeDetectionStrategy, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Code block component with syntax highlighting and copy functionality.
 * Displays formatted code with line numbers, highlighting, and clipboard support.
 *
 * @example
 * // Aadhaar and PAN Validation Patterns
 * <ux4g-code-block
 *   [code]="'const aadhaarPattern = /^[0-9]{12}$/;\nconst panPattern = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;\n\nfunction validateAadhaar(number) {\n  return aadhaarPattern.test(number);\n}\n\nfunction validatePAN(number) {\n  return panPattern.test(number);\n}'"
 *   language="javascript"
 *   fileName="validation.js"
 *   [showLineNumbers]="true"
 *   [copyable]="true"
 *   [highlightLines]="[1, 2]"
 * ></ux4g-code-block>
 *
 * @example
 * // Government Form API Request
 * <ux4g-code-block
 *   [code]="'{\n  \"applicantName\": \"Rajesh Kumar\",\n  \"aadhaarNumber\": \"1234 5678 9012\",\n  \"panNumber\": \"ABCDE1234F\",\n  \"department\": \"Ministry of Finance\",\n  \"applicationDate\": \"2026-04-12\"\n}'"
 *   language="json"
 *   fileName="application-request.json"
 *   [showLineNumbers]="true"
 *   maxHeight="300px"
 * ></ux4g-code-block>
 *
 * @example
 * // Shell Script for Document Upload
 * <ux4g-code-block
 *   [code]="'#!/bin/bash\n# Upload documents to government portal\n\ncurl -X POST https://api.gov.in/upload \\\n  -H \"Authorization: Bearer $TOKEN\" \\\n  -F \"aadhaar=@aadhaar.pdf\" \\\n  -F \"pan=@pan.pdf\" \\\n  -F \"photo=@photo.jpg\"'"
 *   language="bash"
 *   fileName="upload-docs.sh"
 *   theme="dark"
 * ></ux4g-code-block>
 *
 * @example
 * // HTML Template for Government Form
 * <ux4g-code-block
 *   [code]="'<form class=\"gov-form\">\n  <label for=\"aadhaar\">Aadhaar Number</label>\n  <input id=\"aadhaar\" type=\"text\" pattern=\"[0-9]{12}\" required />\n  \n  <label for=\"pan\">PAN Number</label>\n  <input id=\"pan\" type=\"text\" pattern=\"[A-Z]{5}[0-9]{4}[A-Z]{1}\" required />\n  \n  <button type=\"submit\">Submit Application</button>\n</form>'"
 *   language="html"
 *   fileName="form.html"
 *   size="md"
 * ></ux4g-code-block>
 */
@Component({
  selector: 'ux4g-code-block',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './code-block.component.html',
  styleUrls: ['./code-block.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class CodeBlockComponent {
  /**
   * Code content to display
   */
  @Input() code: string = '';

  /**
   * Programming language for syntax highlighting
   */
  @Input() language?: string = 'typescript';

  /**
   * Whether to show line numbers
   */
  @Input() showLineNumbers: boolean = true;

  /**
   * Array of line numbers to highlight
   */
  @Input() highlightLines?: number[] = [];

  /**
   * Optional file name to display in header
   */
  @Input() fileName?: string;

  /**
   * Whether to show copy button
   */
  @Input() copyable: boolean = true;

  /**
   * Maximum height of code block (with scroll)
   */
  @Input() maxHeight?: string;

  /**
   * Theme variant
   */
  @Input() theme: 'light' | 'dark' = 'light';

  /**
   * Size variant
   */
  @Input() size: 'sm' | 'md' | 'lg' = 'md';

  /**
   * Additional CSS classes
   */
  @Input() className?: string;

  /**
   * Emits when code is copied
   */
  @Output() codeCopied = new EventEmitter<string>();

  /**
   * Tracks copy state
   */
  copied: boolean = false;

  /**
   * Get computed CSS classes
   */
  get codeBlockClasses(): string {
    const classes = [
      'ux4g-code-block',
      `ux4g-code-block--${this.theme}`,
      `ux4g-code-block--${this.size}`
    ];

    if (this.className) {
      classes.push(this.className);
    }

    return classes.join(' ');
  }

  /**
   * Get array of line numbers
   */
  getLines(): number[] {
    return Array.from({ length: this.code.split('\n').length }, (_, i) => i);
  }

  /**
   * Check if a line should be highlighted
   */
  isLineHighlighted(lineNumber: number): boolean {
    return this.highlightLines?.includes(lineNumber) || false;
  }

  /**
   * Copy code to clipboard
   */
  copyCode(): void {
    navigator.clipboard.writeText(this.code).then(() => {
      this.copied = true;
      this.codeCopied.emit(this.code);

      // Reset copied state after 2 seconds
      setTimeout(() => {
        this.copied = false;
      }, 2000);
    }).catch(err => {
      console.error('Failed to copy code: ', err);
    });
  }
}
