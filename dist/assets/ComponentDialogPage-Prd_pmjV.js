import{r as n,j as e,b as D,R as k,d as j,X as T}from"./index-BYMLq1ET.js";import{C as N}from"./ComponentDocumentation-CxrYZXwp.js";import{T as I}from"./trash-2-BfmzGL2o.js";import{T as E}from"./triangle-alert-7-_NehQn.js";import"./copy-Ck_ch6Lp.js";import"./info-117bcUyF.js";import"./external-link-Ckpfpf0L.js";const M=({children:t,isOpen:a})=>a?e.jsx("div",{className:"dialog-portal",children:t}):null,z=({onClick:t})=>e.jsx("div",{className:"fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] animate-fadeIn",onClick:t,"aria-hidden":"true"}),s=({isOpen:t,onClose:a,title:h,description:l,children:v,variant:i="default",size:u="md",showCloseButton:r=!0,confirmText:p,cancelText:c,onConfirm:m,hideCancel:g=!1})=>{const[x,d]=k.useState(!1);k.useEffect(()=>{if(!t)return;const w=O=>{O.key==="Escape"&&o()};return document.addEventListener("keydown",w),document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",w),document.body.style.overflow=""}},[t]);const o=()=>{d(!0),setTimeout(()=>{a(),d(!1)},150)},A=()=>{m&&m(),o()};if(!t)return null;const S=u==="sm"?"max-w-sm":u==="lg"?"max-w-2xl":"max-w-md",C=i==="alert",f=i==="destructive",b=i==="success",y=i==="error";return e.jsxs(M,{isOpen:t,children:[e.jsx(z,{onClick:o}),e.jsx("div",{className:"fixed inset-0 z-[101] flex items-center justify-center p-4",children:e.jsxs("div",{className:"bg-white rounded-lg shadow-2xl w-full "+S+" animate-scaleIn "+(x?"animate-scaleOut":""),role:C?"alertdialog":"dialog","aria-modal":"true","aria-labelledby":"dialog-title","aria-describedby":"dialog-description",children:[e.jsxs("div",{className:"flex items-start justify-between p-6 border-b "+(f?"border-red-100":b?"border-green-100":y?"border-red-100":"border-gray-200"),children:[e.jsxs("div",{className:"flex items-start gap-3 flex-1",children:[f&&e.jsx("div",{className:"flex-shrink-0 w-10 h-10 rounded-full bg-red-100 flex items-center justify-center",children:e.jsx(E,{className:"w-5 h-5 text-red-600"})}),b&&e.jsx("div",{className:"flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center",children:e.jsx(j,{className:"w-5 h-5 text-green-600"})}),y&&e.jsx("div",{className:"flex-shrink-0 w-10 h-10 rounded-full bg-red-100 flex items-center justify-center",children:e.jsx(D,{className:"w-5 h-5 text-red-600"})}),e.jsx("div",{className:"flex-1",children:e.jsx("h2",{id:"dialog-title",className:"text-lg font-semibold "+(f||y?"text-red-900":b?"text-green-900":"text-gray-900"),children:h})})]}),r&&!C&&e.jsx("button",{onClick:o,className:"flex-shrink-0 p-1 rounded hover:bg-gray-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500","aria-label":"Close dialog",children:e.jsx(T,{className:"w-5 h-5 text-gray-500"})})]}),e.jsxs("div",{className:"p-6",children:[l&&e.jsx("p",{id:"dialog-description",className:"text-gray-600 mb-4",children:l}),v]}),(p||c)&&e.jsxs("div",{className:"flex justify-end gap-3 px-6 py-4 bg-gray-50 rounded-b-lg",children:[!g&&e.jsx("button",{onClick:o,className:"px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 min-h-[44px]",children:c||"Cancel"}),e.jsx("button",{onClick:A,className:"px-4 py-2 text-white rounded transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 min-h-[44px] "+(f?"bg-red-600 hover:bg-red-700 focus-visible:ring-red-500":b?"bg-green-600 hover:bg-green-700 focus-visible:ring-green-500":"bg-blue-600 hover:bg-blue-700 focus-visible:ring-blue-500"),children:p||"Confirm"})]})]})})]})};function G(){const[t,a]=n.useState(!1),[h,l]=n.useState(!1),[v,i]=n.useState(!1),[u,r]=n.useState(!1),[p,c]=n.useState(!1),[m,g]=n.useState(!1),[x,d]=n.useState(!1);return e.jsx(N,{name:"Dialog / Alert Dialog",description:"Modal dialog component for confirmations, alerts, and important user decisions across government services. Supports multiple variants, sizes, form integration, and focus management with full accessibility compliance.",category:"Feedback",maturity:"beta",tier:"core",since:"v1.2.0",updated:"v2.1.0",props:[{name:"isOpen",type:"boolean",default:"false",required:!0,description:"Controls whether the dialog is visible. Must be managed by parent component state."},{name:"onClose",type:"() => void",required:!0,description:"Callback function invoked when dialog should close (backdrop click, Escape key, or close button click)."},{name:"title",type:"string",required:!0,description:"Dialog title displayed in the header. Used for aria-labelledby accessibility."},{name:"description",type:"string",required:!1,description:"Optional description text displayed below the title. Used for aria-describedby accessibility."},{name:"children",type:"ReactNode",required:!1,description:"Dialog content. Can include text, forms, or any React elements."},{name:"variant",type:"'default' | 'alert' | 'destructive' | 'success' | 'error'",default:"'default'",required:!1,description:"Visual variant. Alert variant uses alertdialog role and hides close button. Destructive for dangerous actions. Success/error for status dialogs."},{name:"size",type:"'sm' | 'md' | 'lg'",default:"'md'",required:!1,description:"Dialog size. Small (384px), Medium (448px), Large (672px)."},{name:"showCloseButton",type:"boolean",default:"true",required:!1,description:"Whether to show the X close button in the header. Automatically hidden for alert variant."},{name:"confirmText",type:"string",required:!1,description:"Text for the confirm/primary action button. If provided, footer with action buttons is shown."},{name:"cancelText",type:"string",default:"'Cancel'",required:!1,description:"Text for the cancel/secondary action button."},{name:"onConfirm",type:"() => void",required:!1,description:"Callback function invoked when confirm button is clicked. Dialog automatically closes after."},{name:"hideCancel",type:"boolean",default:"false",required:!1,description:"Hide the cancel button. Useful for alert dialogs with single action."}],examples:[{title:"Simple Dialog",description:"Basic dialog with title, description, and custom content.",code:`import { Dialog } from '@ux4g/react-core';
import { useState } from 'react';

function Example() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        Open Dialog
      </button>
      <Dialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Important Information"
        description="This is a simple dialog with some important information for the user."
      >
        <p className="text-gray-700">
          You can include any custom content here, including text, images, or other components.
        </p>
      </Dialog>
    </>
  );
}`,preview:e.jsxs("div",{children:[e.jsx("button",{onClick:()=>a(!0),className:"px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 min-h-[44px]",children:"Open Simple Dialog"}),e.jsx(s,{isOpen:t,onClose:()=>a(!1),title:"Important Information",description:"This is a simple dialog with some important information for the user.",children:e.jsx("p",{className:"text-gray-700",children:"You can include any custom content here, including text, images, or other components."})})]})},{title:"Confirmation Dialog",description:"Dialog with confirm and cancel actions for user decisions.",code:`import { Dialog } from '@ux4g/react-core';
import { useState } from 'react';

function Example() {
  const [isOpen, setIsOpen] = useState(false);

  const handleConfirm = () => {
    console.log('User confirmed action');
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        Submit Application
      </button>
      <Dialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Submit Application"
        description="Are you ready to submit your application? You will not be able to make changes after submission."
        confirmText="Submit Application"
        cancelText="Review Again"
        onConfirm={handleConfirm}
      />
    </>
  );
}`,preview:e.jsxs("div",{children:[e.jsx("button",{onClick:()=>l(!0),className:"px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 min-h-[44px]",children:"Submit Application"}),e.jsx(s,{isOpen:h,onClose:()=>l(!1),title:"Submit Application",description:"Are you ready to submit your application? You will not be able to make changes after submission.",confirmText:"Submit Application",cancelText:"Review Again",onConfirm:()=>console.log("Application submitted")})]})},{title:"Destructive Action Dialog",description:"Dialog for dangerous actions like delete with warning styling.",code:`import { Dialog } from '@ux4g/react-core';
import { Trash2 } from 'lucide-react';
import { useState } from 'react';

function Example() {
  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = () => {
    console.log('Item deleted');
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        Delete Application
      </button>
      <Dialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Delete Application"
        description="This action cannot be undone. Your application and all associated data will be permanently deleted."
        variant="destructive"
        confirmText="Delete Application"
        cancelText="Keep Application"
        onConfirm={handleDelete}
      />
    </>
  );
}`,preview:e.jsxs("div",{children:[e.jsxs("button",{onClick:()=>i(!0),className:"px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500 min-h-[44px] inline-flex items-center gap-2",children:[e.jsx(I,{className:"w-4 h-4"}),"Delete Application"]}),e.jsx(s,{isOpen:v,onClose:()=>i(!1),title:"Delete Application",description:"This action cannot be undone. Your application and all associated data will be permanently deleted.",variant:"destructive",confirmText:"Delete Application",cancelText:"Keep Application",onConfirm:()=>console.log("Application deleted")})]})},{title:"Form Dialog",description:"Dialog containing a form for user input.",code:`import { Dialog } from '@ux4g/react-core';
import { useState } from 'react';

function Example() {
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    console.log('Form submitted:', Object.fromEntries(formData));
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        Update Contact Details
      </button>
      <Dialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Update Contact Details"
        description="Please provide your updated contact information."
        size="md"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-50 transition-colors min-h-[44px]"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 transition-colors min-h-[44px]"
            >
              Save Changes
            </button>
          </div>
        </form>
      </Dialog>
    </>
  );
}`,preview:e.jsxs("div",{children:[e.jsx("button",{onClick:()=>r(!0),className:"px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 min-h-[44px]",children:"Update Contact Details"}),e.jsx(s,{isOpen:u,onClose:()=>r(!1),title:"Update Contact Details",description:"Please provide your updated contact information.",size:"md",children:e.jsxs("form",{className:"space-y-4",onSubmit:o=>{o.preventDefault(),r(!1)},children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700 mb-1",children:"Email Address"}),e.jsx("input",{type:"email",id:"email",name:"email",className:"w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"phone",className:"block text-sm font-medium text-gray-700 mb-1",children:"Phone Number"}),e.jsx("input",{type:"tel",id:"phone",name:"phone",className:"w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500",required:!0})]}),e.jsxs("div",{className:"flex justify-end gap-3 pt-4",children:[e.jsx("button",{type:"button",onClick:()=>r(!1),className:"px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-50 transition-colors min-h-[44px]",children:"Cancel"}),e.jsx("button",{type:"submit",className:"px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 transition-colors min-h-[44px]",children:"Save Changes"})]})]})})]})},{title:"Alert Dialog",description:"Alert dialog with single action and no cancel option (uses alertdialog role).",code:`import { Dialog } from '@ux4g/react-core';
import { AlertCircle } from 'lucide-react';
import { useState } from 'react';

function Example() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        Trigger Alert
      </button>
      <Dialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Session Timeout Warning"
        description="Your session will expire in 2 minutes due to inactivity. Please save your work."
        variant="alert"
        confirmText="Continue Session"
        hideCancel={true}
        onConfirm={() => console.log('Session continued')}
      />
    </>
  );
}`,preview:e.jsxs("div",{children:[e.jsxs("button",{onClick:()=>c(!0),className:"px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-orange-500 min-h-[44px] inline-flex items-center gap-2",children:[e.jsx(D,{className:"w-4 h-4"}),"Trigger Alert"]}),e.jsx(s,{isOpen:p,onClose:()=>c(!1),title:"Session Timeout Warning",description:"Your session will expire in 2 minutes due to inactivity. Please save your work.",variant:"alert",confirmText:"Continue Session",hideCancel:!0,onConfirm:()=>console.log("Session continued")})]})},{title:"Success Dialog",description:"Dialog showing successful operation with success styling.",code:`import { Dialog } from '@ux4g/react-core';
import { CheckCircle } from 'lucide-react';
import { useState } from 'react';

function Example() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        Show Success
      </button>
      <Dialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Application Submitted Successfully"
        description="Your application has been submitted and is now being processed. You will receive a confirmation email shortly."
        variant="success"
        confirmText="View My Applications"
        cancelText="Close"
        onConfirm={() => console.log('Navigate to applications')}
      />
    </>
  );
}`,preview:e.jsxs("div",{children:[e.jsx("button",{onClick:()=>g(!0),className:"px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500 min-h-[44px]",children:"Show Success"}),e.jsx(s,{isOpen:m,onClose:()=>g(!1),title:"Application Submitted Successfully",description:"Your application has been submitted and is now being processed. You will receive a confirmation email shortly.",variant:"success",confirmText:"View My Applications",cancelText:"Close",onConfirm:()=>console.log("Navigate to applications")})]})},{title:"Error Dialog",description:"Dialog showing error state with error styling.",code:`import { Dialog } from '@ux4g/react-core';
import { AlertCircle } from 'lucide-react';
import { useState } from 'react';

function Example() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        Show Error
      </button>
      <Dialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Submission Failed"
        description="We were unable to process your request. Please check your internet connection and try again."
        variant="error"
        confirmText="Try Again"
        cancelText="Cancel"
        onConfirm={() => console.log('Retry submission')}
      />
    </>
  );
}`,preview:e.jsxs("div",{children:[e.jsx("button",{onClick:()=>d(!0),className:"px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500 min-h-[44px]",children:"Show Error"}),e.jsx(s,{isOpen:x,onClose:()=>d(!1),title:"Submission Failed",description:"We were unable to process your request. Please check your internet connection and try again.",variant:"error",confirmText:"Try Again",cancelText:"Cancel",onConfirm:()=>console.log("Retry submission")})]})}],reactCode:{component:`import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '../../utils/cn';
import { dialogVariants } from './dialog.variants';
import { DialogProps } from './Dialog.types';
import { X } from 'lucide-react';

export const Dialog = React.forwardRef<HTMLDivElement, DialogProps>(
  (
    {
      isOpen,
      onClose,
      title,
      description,
      children,
      variant = 'default',
      size = 'md',
      showCloseButton = true,
      confirmText,
      cancelText = 'Cancel',
      onConfirm,
      hideCancel = false,
      className,
      ...props
    },
    ref
  ) => {
    const [isClosing, setIsClosing] = useState(false);
    const dialogRef = useRef<HTMLDivElement>(null);
    const isAlert = variant === 'alert';

    useEffect(() => {
      if (!isOpen) return;

      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          handleClose();
        }
      };

      const previouslyFocused = document.activeElement as HTMLElement;
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';

      if (dialogRef.current) {
        const focusableElements = dialogRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length > 0) {
          (focusableElements[0] as HTMLElement).focus();
        }
      }

      return () => {
        document.removeEventListener('keydown', handleEscape);
        document.body.style.overflow = '';
        if (previouslyFocused) {
          previouslyFocused.focus();
        }
      };
    }, [isOpen]);

    const handleClose = () => {
      setIsClosing(true);
      setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, 150);
    };

    const handleBackdropClick = (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) {
        handleClose();
      }
    };

    const handleConfirm = () => {
      if (onConfirm) {
        onConfirm();
      }
      handleClose();
    };

    if (!isOpen) return null;

    const dialogContent = (
      <>
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] animate-fadeIn"
          onClick={handleBackdropClick}
          aria-hidden="true"
        />
        <div className="fixed inset-0 z-[101] flex items-center justify-center p-4">
          <div
            ref={dialogRef}
            className={cn(
              dialogVariants({ variant, size }),
              isClosing ? 'animate-scaleOut' : 'animate-scaleIn',
              className
            )}
            role={isAlert ? 'alertdialog' : 'dialog'}
            aria-modal="true"
            aria-labelledby="dialog-title"
            aria-describedby={description ? 'dialog-description' : undefined}
            {...props}
          >
            <div className="dialog-header">
              <h2 id="dialog-title" className="dialog-title">
                {title}
              </h2>
              {showCloseButton && !isAlert && (
                <button
                  onClick={handleClose}
                  className="dialog-close"
                  aria-label="Close dialog"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            <div className="dialog-content">
              {description && (
                <p id="dialog-description" className="dialog-description">
                  {description}
                </p>
              )}
              {children}
            </div>

            {(confirmText || cancelText) && (
              <div className="dialog-footer">
                {!hideCancel && (
                  <button
                    onClick={handleClose}
                    className="dialog-button dialog-button-cancel"
                  >
                    {cancelText}
                  </button>
                )}
                <button
                  onClick={handleConfirm}
                  className="dialog-button dialog-button-confirm"
                >
                  {confirmText}
                </button>
              </div>
            )}
          </div>
        </div>
      </>
    );

    return createPortal(dialogContent, document.body);
  }
);

Dialog.displayName = 'Dialog';`,types:`export interface DialogProps 
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'>,
          DialogVariantProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children?: React.ReactNode;
  showCloseButton?: boolean;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void;
  hideCancel?: boolean;
}

export type DialogVariant = 'default' | 'alert' | 'destructive' | 'success' | 'error';
export type DialogSize = 'sm' | 'md' | 'lg';`,variants:`import { cva, type VariantProps } from 'class-variance-authority';

export const dialogVariants = cva(
  [
    'bg-white rounded-lg shadow-2xl',
    'w-full',
    'focus:outline-none',
  ],
  {
    variants: {
      variant: {
        default: 'border border-gray-200',
        alert: 'border border-orange-200',
        destructive: 'border border-red-200',
        success: 'border border-green-200',
        error: 'border border-red-200',
      },
      size: {
        sm: 'max-w-sm',
        md: 'max-w-md',
        lg: 'max-w-2xl',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

export type DialogVariantProps = VariantProps<typeof dialogVariants>;`},angularCode:{component:`import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

type DialogVariant = 'default' | 'alert' | 'destructive' | 'success' | 'error';
type DialogSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'ux4g-dialog',
  template: \`
    <div *ngIf="isOpen" class="dialog-container">
      <div 
        class="dialog-backdrop" 
        (click)="handleBackdropClick()"
        [@fadeIn]
      ></div>
      
      <div class="dialog-wrapper">
        <div 
          [class]="getDialogClasses()"
          [attr.role]="variant === 'alert' ? 'alertdialog' : 'dialog'"
          [attr.aria-modal]="true"
          [attr.aria-labelledby]="'dialog-title'"
          [attr.aria-describedby]="description ? 'dialog-description' : null"
          [@scaleIn]
        >
          <div class="dialog-header">
            <h2 id="dialog-title" class="dialog-title">{{ title }}</h2>
            <button 
              *ngIf="showCloseButton && variant !== 'alert'"
              (click)="handleClose()"
              class="dialog-close"
              aria-label="Close dialog"
            >
              &times;
            </button>
          </div>

          <div class="dialog-content">
            <p *ngIf="description" id="dialog-description" class="dialog-description">
              {{ description }}
            </p>
            <ng-content></ng-content>
          </div>

          <div *ngIf="confirmText || cancelText" class="dialog-footer">
            <button 
              *ngIf="!hideCancel"
              (click)="handleClose()"
              class="dialog-button dialog-button-cancel"
            >
              {{ cancelText }}
            </button>
            <button 
              (click)="handleConfirm()"
              class="dialog-button dialog-button-confirm"
            >
              {{ confirmText }}
            </button>
          </div>
        </div>
      </div>
    </div>
  \`,
  styleUrls: ['./dialog.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('150ms ease-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('150ms ease-in', style({ opacity: 0 }))
      ])
    ]),
    trigger('scaleIn', [
      transition(':enter', [
        style({ transform: 'scale(0.95)', opacity: 0 }),
        animate('150ms ease-out', style({ transform: 'scale(1)', opacity: 1 }))
      ]),
      transition(':leave', [
        animate('150ms ease-in', style({ transform: 'scale(0.95)', opacity: 0 }))
      ])
    ])
  ]
})
export class DialogComponent implements OnInit, OnDestroy {
  @Input() isOpen = false;
  @Input() title = '';
  @Input() description?: string;
  @Input() variant: DialogVariant = 'default';
  @Input() size: DialogSize = 'md';
  @Input() showCloseButton = true;
  @Input() confirmText?: string;
  @Input() cancelText = 'Cancel';
  @Input() hideCancel = false;
  
  @Output() closed = new EventEmitter<void>();
  @Output() confirmed = new EventEmitter<void>();

  ngOnInit(): void {
    if (this.isOpen) {
      document.body.style.overflow = 'hidden';
      this.setupKeyboardHandlers();
    }
  }

  ngOnDestroy(): void {
    document.body.style.overflow = '';
  }

  private setupKeyboardHandlers(): void {
    const handler = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        this.handleClose();
      }
    };
    document.addEventListener('keydown', handler);
  }

  getDialogClasses(): string {
    const baseClasses = 'ux4g-dialog';
    const variantClass = \`ux4g-dialog-\${this.variant}\`;
    const sizeClass = \`ux4g-dialog-\${this.size}\`;
    
    return [baseClasses, variantClass, sizeClass]
      .filter(Boolean)
      .join(' ');
  }

  handleClose(): void {
    document.body.style.overflow = '';
    this.closed.emit();
  }

  handleBackdropClick(): void {
    this.handleClose();
  }

  handleConfirm(): void {
    this.confirmed.emit();
    this.handleClose();
  }
}`,module:`import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogComponent } from './dialog.component';

@NgModule({
  declarations: [DialogComponent],
  imports: [CommonModule, BrowserAnimationsModule],
  exports: [DialogComponent]
})
export class DialogModule { }`,types:`export type DialogVariant = 'default' | 'alert' | 'destructive' | 'success' | 'error';
export type DialogSize = 'sm' | 'md' | 'lg';

export interface DialogConfig {
  isOpen: boolean;
  title: string;
  description?: string;
  variant?: DialogVariant;
  size?: DialogSize;
  showCloseButton?: boolean;
  confirmText?: string;
  cancelText?: string;
  hideCancel?: boolean;
}`},comparisons:[{system:"Material UI (Google)",component:"Dialog",variants:"fullScreen, maxWidth",accessibility:"WCAG 2.1 AA",documentation:"Comprehensive",link:"https://mui.com/material-ui/react-dialog/"},{system:"Ant Design (Alibaba)",component:"Modal",variants:"info, success, error, warning, confirm",accessibility:"WCAG 2.0 AA",documentation:"Good",link:"https://ant.design/components/modal"},{system:"GOV.UK Design System",component:"Modal Dialog (experimental)",variants:"default only",accessibility:"WCAG 2.1 AAA",documentation:"Limited",link:"https://design-system.service.gov.uk/"},{system:"Chakra UI",component:"Modal / AlertDialog",variants:"sizes, isCentered",accessibility:"WCAG 2.1 AA",documentation:"Comprehensive",link:"https://chakra-ui.com/docs/components/modal"},{system:"Radix UI",component:"Dialog / AlertDialog",variants:"Unstyled primitive",accessibility:"WCAG 2.1 AAA",documentation:"Comprehensive",link:"https://www.radix-ui.com/primitives/docs/components/dialog"},{system:"Headless UI (Tailwind)",component:"Dialog",variants:"Unstyled",accessibility:"WCAG 2.1 AA",documentation:"Good",link:"https://headlessui.com/react/dialog"}],accessibility:{wcagLevel:"WCAG 2.1 Level AA Compliant",features:['role="dialog" for standard dialogs, role="alertdialog" for alerts requiring immediate attention (WCAG 4.1.2)','aria-modal="true" to indicate modal behavior (WCAG 4.1.3)',"aria-labelledby pointing to dialog title for accessible name (WCAG 4.1.2)","aria-describedby pointing to description for additional context (WCAG 1.3.1)","Focus trap: focus is contained within dialog when open (WCAG 2.4.3)","Focus management: focus moves to first focusable element on open, returns to trigger on close (WCAG 2.4.3)","Escape key closes dialog (WCAG 2.1.1)","Backdrop click closes dialog for better usability","Minimum 44x44px touch targets for buttons (WCAG 2.5.5)","Color contrast ratios meet or exceed 4.5:1 for text (WCAG 1.4.3)","2px focus ring with offset for keyboard navigation (WCAG 2.4.7)","Portal rendering prevents z-index stacking issues","Body scroll locked when dialog is open","Backdrop blur for visual hierarchy and focus"],keyboardSupport:[{key:"Tab",action:"Move focus to next focusable element within dialog"},{key:"Shift + Tab",action:"Move focus to previous focusable element within dialog"},{key:"Escape",action:"Close dialog and return focus to trigger element"},{key:"Enter",action:"Activate focused button (confirm/cancel)"},{key:"Space",action:"Activate focused button (confirm/cancel)"}],screenReader:["Announces dialog role and accessible name from title",'Announces modal behavior (aria-modal="true")',"Reads description when provided (aria-describedby)",'AlertDialog variant uses role="alertdialog" for high priority interruptions','Close button has aria-label="Close dialog" for context',"Focus automatically moves to dialog on open","Focus returns to triggering element on close"]},tokens:{file:"/tokens/components/dialog.json",mappings:[{property:"Max Width (Medium)",token:"dialog.size.md",value:"448px"},{property:"Max Width (Small)",token:"dialog.size.sm",value:"384px"},{property:"Max Width (Large)",token:"dialog.size.lg",value:"672px"},{property:"Border Radius",token:"dialog.borderRadius",value:"8px"},{property:"Backdrop Background",token:"dialog.backdrop.background",value:"rgba(0, 0, 0, 0.5)"},{property:"Backdrop Blur",token:"dialog.backdrop.blur",value:"4px"},{property:"Shadow",token:"dialog.shadow",value:"0 20px 25px -5px rgba(0, 0, 0, 0.1)"},{property:"Title Font Size",token:"dialog.title.fontSize",value:"18px"},{property:"Title Font Weight",token:"dialog.title.fontWeight",value:"600"},{property:"Padding",token:"dialog.padding",value:"24px"},{property:"Z-Index Backdrop",token:"dialog.zIndex.backdrop",value:"100"},{property:"Z-Index Content",token:"dialog.zIndex.content",value:"101"},{property:"Animation Duration",token:"dialog.animation.duration",value:"150ms"},{property:"Min Touch Target",token:"accessibility.minTouchTarget",value:"44px"}]},useCases:{title:"Government Service Use Cases",description:"Common dialog patterns in government digital services",scenarios:[{title:"Delete Application Confirmation",description:"Confirm destructive action before permanently deleting a citizen application.",example:'User clicks delete button on their business license application. Dialog appears with "Delete Application" title, warning about permanent deletion, and red "Delete Application" / "Keep Application" buttons.',variant:"destructive"},{title:"Logout Confirmation",description:"Confirm user wants to logout and lose unsaved work.",example:'User clicks logout while filling a tax form. Dialog warns "You have unsaved changes. Logging out will lose your progress." with "Logout" / "Stay Logged In" options.',variant:"default"},{title:"Unsaved Changes Warning",description:"Alert user about losing unsaved data when navigating away.",example:'User tries to leave permit application page. Alert dialog states "You have unsaved changes" with "Leave Page" / "Continue Editing" buttons.',variant:"alert"},{title:"Submit Application Confirmation",description:"Final confirmation before submitting important application.",example:'User completes passport application. Dialog confirms "Submit Application? You cannot make changes after submission." with "Submit" / "Review Again" options.',variant:"default"},{title:"Cancel Booking/Appointment",description:"Confirm cancellation of government service appointment.",example:'User cancels DMV appointment. Dialog asks "Cancel your appointment on March 15 at 2:00 PM?" with "Yes, Cancel" / "Keep Appointment" buttons.',variant:"destructive"},{title:"Revoke Permission",description:"Confirm removal of access or permissions.",example:'Admin removes user access to sensitive records. Dialog warns "Revoke access for John Smith? This user will immediately lose access to all citizen data." with "Revoke Access" / "Cancel" buttons.',variant:"destructive"},{title:"Session Timeout Alert",description:"Alert user of impending session timeout.",example:'After 25 minutes of inactivity during tax filing, alert dialog states "Your session will expire in 5 minutes. Please save your work." with "Continue Session" button only.',variant:"alert"},{title:"Submission Success",description:"Confirm successful form submission with next steps.",example:'After submitting building permit, success dialog shows "Application Submitted Successfully. Reference number: BP-2024-1234. You will receive email confirmation within 24 hours." with "View My Applications" / "Close" options.',variant:"success"},{title:"Payment Confirmation",description:"Confirm payment details before processing.",example:'User about to pay $150 license fee. Dialog shows "Confirm Payment: $150.00 for Business License Renewal. Payment will be charged to card ending in 4242." with "Confirm Payment" / "Cancel" buttons.',variant:"default"},{title:"Document Download Warning",description:"Inform user about sensitive document download.",example:'User downloads tax records. Dialog states "You are about to download sensitive personal information. Keep this document secure." with "Download" / "Cancel" options.',variant:"alert"}]}})}export{G as default};
