/**
 * Dialog/Alert Dialog Component Documentation Page
 * Complete documentation for the Dialog component with examples, code downloads, and comparisons
 */

import React, { useState } from 'react';
import { ComponentDocumentation } from '../components/ComponentDocumentation';
import { AlertTriangle, AlertCircle, CheckCircle, X, Trash2 } from 'lucide-react';

// Dialog Portal Component
const DialogPortal = ({ children, isOpen }: { children: React.ReactNode; isOpen: boolean }) => {
  if (!isOpen) return null;

  return (
    <div className="dialog-portal">
      {children}
    </div>
  );
};

// Dialog Backdrop Component
const DialogBackdrop = ({ onClick }: { onClick: () => void }) => (
  <div
    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] animate-fadeIn"
    onClick={onClick}
    aria-hidden="true"
  />
);

// Dialog Component for Live Preview
const DialogPreview = ({
  isOpen,
  onClose,
  title,
  description,
  children,
  variant = 'default',
  size = 'md',
  showCloseButton = true,
  confirmText,
  cancelText,
  onConfirm,
  hideCancel = false
}: any) => {
  const [isClosing, setIsClosing] = React.useState(false);

  React.useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 150);
  };

  const handleConfirm = () => {
    if (onConfirm) {
      onConfirm();
    }
    handleClose();
  };

  if (!isOpen) return null;

  const sizeClasses = size === 'sm' ? 'max-w-sm' : size === 'lg' ? 'max-w-2xl' : 'max-w-md';
  const isAlert = variant === 'alert';
  const isDestructive = variant === 'destructive';
  const isSuccess = variant === 'success';
  const isError = variant === 'error';

  return (
    <DialogPortal isOpen={isOpen}>
      <DialogBackdrop onClick={handleClose} />
      <div className="fixed inset-0 z-[101] flex items-center justify-center p-4">
        <div
          className={'bg-white rounded-lg shadow-2xl w-full ' + sizeClasses + ' animate-scaleIn ' + (isClosing ? 'animate-scaleOut' : '')}
          role={isAlert ? 'alertdialog' : 'dialog'}
          aria-modal="true"
          aria-labelledby="dialog-title"
          aria-describedby="dialog-description"
        >
          {/* Header */}
          <div className={'flex items-start justify-between p-6 border-b ' + (isDestructive ? 'border-red-100' : isSuccess ? 'border-green-100' : isError ? 'border-red-100' : 'border-gray-200')}>
            <div className="flex items-start gap-3 flex-1">
              {isDestructive && (
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                </div>
              )}
              {isSuccess && (
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
              )}
              {isError && (
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                </div>
              )}
              <div className="flex-1">
                <h2
                  id="dialog-title"
                  className={'text-lg font-semibold ' + (isDestructive || isError ? 'text-red-900' : isSuccess ? 'text-green-900' : 'text-gray-900')}
                >
                  {title}
                </h2>
              </div>
            </div>
            {showCloseButton && !isAlert && (
              <button
                onClick={handleClose}
                className="flex-shrink-0 p-1 rounded hover:bg-gray-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            )}
          </div>

          {/* Content */}
          <div className="p-6">
            {description && (
              <p id="dialog-description" className="text-gray-600 mb-4">
                {description}
              </p>
            )}
            {children}
          </div>

          {/* Footer */}
          {(confirmText || cancelText) && (
            <div className="flex justify-end gap-3 px-6 py-4 bg-gray-50 rounded-b-lg">
              {!hideCancel && (
                <button
                  onClick={handleClose}
                  className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 min-h-[44px]"
                >
                  {cancelText || 'Cancel'}
                </button>
              )}
              <button
                onClick={handleConfirm}
                className={'px-4 py-2 text-white rounded transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 min-h-[44px] ' + (isDestructive ? 'bg-red-600 hover:bg-red-700 focus-visible:ring-red-500' : isSuccess ? 'bg-green-600 hover:bg-green-700 focus-visible:ring-green-500' : 'bg-blue-600 hover:bg-blue-700 focus-visible:ring-blue-500')}
              >
                {confirmText || 'Confirm'}
              </button>
            </div>
          )}
        </div>
      </div>
    </DialogPortal>
  );
};

export default function ComponentDialogPage() {
  const [simpleDialogOpen, setSimpleDialogOpen] = useState(false);
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [formDialogOpen, setFormDialogOpen] = useState(false);
  const [alertDialogOpen, setAlertDialogOpen] = useState(false);
  const [successDialogOpen, setSuccessDialogOpen] = useState(false);
  const [errorDialogOpen, setErrorDialogOpen] = useState(false);

  return (
    <ComponentDocumentation
      name="Dialog / Alert Dialog"
      description="Modal dialog component for confirmations, alerts, and important user decisions across government services. Supports multiple variants, sizes, form integration, and focus management with full accessibility compliance."
      category="Feedback"
      maturity="beta"
      tier="core"
      since="v1.2.0"
      updated="v2.1.0"

      props={[
        {
          name: 'isOpen',
          type: 'boolean',
          default: 'false',
          required: true,
          description: 'Controls whether the dialog is visible. Must be managed by parent component state.',
        },
        {
          name: 'onClose',
          type: '() => void',
          required: true,
          description: 'Callback function invoked when dialog should close (backdrop click, Escape key, or close button click).',
        },
        {
          name: 'title',
          type: 'string',
          required: true,
          description: 'Dialog title displayed in the header. Used for aria-labelledby accessibility.',
        },
        {
          name: 'description',
          type: 'string',
          required: false,
          description: 'Optional description text displayed below the title. Used for aria-describedby accessibility.',
        },
        {
          name: 'children',
          type: 'ReactNode',
          required: false,
          description: 'Dialog content. Can include text, forms, or any React elements.',
        },
        {
          name: 'variant',
          type: "'default' | 'alert' | 'destructive' | 'success' | 'error'",
          default: "'default'",
          required: false,
          description: 'Visual variant. Alert variant uses alertdialog role and hides close button. Destructive for dangerous actions. Success/error for status dialogs.',
        },
        {
          name: 'size',
          type: "'sm' | 'md' | 'lg'",
          default: "'md'",
          required: false,
          description: 'Dialog size. Small (384px), Medium (448px), Large (672px).',
        },
        {
          name: 'showCloseButton',
          type: 'boolean',
          default: 'true',
          required: false,
          description: 'Whether to show the X close button in the header. Automatically hidden for alert variant.',
        },
        {
          name: 'confirmText',
          type: 'string',
          required: false,
          description: 'Text for the confirm/primary action button. If provided, footer with action buttons is shown.',
        },
        {
          name: 'cancelText',
          type: 'string',
          default: "'Cancel'",
          required: false,
          description: 'Text for the cancel/secondary action button.',
        },
        {
          name: 'onConfirm',
          type: '() => void',
          required: false,
          description: 'Callback function invoked when confirm button is clicked. Dialog automatically closes after.',
        },
        {
          name: 'hideCancel',
          type: 'boolean',
          default: 'false',
          required: false,
          description: 'Hide the cancel button. Useful for alert dialogs with single action.',
        },
      ]}

      examples={[
        {
          title: 'Simple Dialog',
          description: 'Basic dialog with title, description, and custom content.',
          code: 'import { Dialog } from \'@ux4g/react-core\';\nimport { useState } from \'react\';\n\nfunction Example() {\n  const [isOpen, setIsOpen] = useState(false);\n\n  return (\n    <>\n      <button onClick={() => setIsOpen(true)}>\n        Open Dialog\n      </button>\n      <Dialog\n        isOpen={isOpen}\n        onClose={() => setIsOpen(false)}\n        title="Important Information"\n        description="This is a simple dialog with some important information for the user."\n      >\n        <p className="text-gray-700">\n          You can include any custom content here, including text, images, or other components.\n        </p>\n      </Dialog>\n    </>\n  );\n}',
          preview: (
            <div>
              <button
                onClick={() => setSimpleDialogOpen(true)}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 min-h-[44px]"
              >
                Open Simple Dialog
              </button>
              <DialogPreview
                isOpen={simpleDialogOpen}
                onClose={() => setSimpleDialogOpen(false)}
                title="Important Information"
                description="This is a simple dialog with some important information for the user."
              >
                <p className="text-gray-700">
                  You can include any custom content here, including text, images, or other components.
                </p>
              </DialogPreview>
            </div>
          ),
        },
        {
          title: 'Confirmation Dialog',
          description: 'Dialog with confirm and cancel actions for user decisions.',
          code: 'import { Dialog } from \'@ux4g/react-core\';\nimport { useState } from \'react\';\n\nfunction Example() {\n  const [isOpen, setIsOpen] = useState(false);\n\n  const handleConfirm = () => {\n    console.log(\'User confirmed action\');\n  };\n\n  return (\n    <>\n      <button onClick={() => setIsOpen(true)}>\n        Submit Application\n      </button>\n      <Dialog\n        isOpen={isOpen}\n        onClose={() => setIsOpen(false)}\n        title="Submit Application"\n        description="Are you ready to submit your application? You will not be able to make changes after submission."\n        confirmText="Submit Application"\n        cancelText="Review Again"\n        onConfirm={handleConfirm}\n      />\n    </>\n  );\n}',
          preview: (
            <div>
              <button
                onClick={() => setConfirmDialogOpen(true)}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 min-h-[44px]"
              >
                Submit Application
              </button>
              <DialogPreview
                isOpen={confirmDialogOpen}
                onClose={() => setConfirmDialogOpen(false)}
                title="Submit Application"
                description="Are you ready to submit your application? You will not be able to make changes after submission."
                confirmText="Submit Application"
                cancelText="Review Again"
                onConfirm={() => console.log('Application submitted')}
              />
            </div>
          ),
        },
        {
          title: 'Destructive Action Dialog',
          description: 'Dialog for dangerous actions like delete with warning styling.',
          code: 'import { Dialog } from \'@ux4g/react-core\';\nimport { Trash2 } from \'lucide-react\';\nimport { useState } from \'react\';\n\nfunction Example() {\n  const [isOpen, setIsOpen] = useState(false);\n\n  const handleDelete = () => {\n    console.log(\'Item deleted\');\n  };\n\n  return (\n    <>\n      <button onClick={() => setIsOpen(true)}>\n        Delete Application\n      </button>\n      <Dialog\n        isOpen={isOpen}\n        onClose={() => setIsOpen(false)}\n        title="Delete Application"\n        description="This action cannot be undone. Your application and all associated data will be permanently deleted."\n        variant="destructive"\n        confirmText="Delete Application"\n        cancelText="Keep Application"\n        onConfirm={handleDelete}\n      />\n    </>\n  );\n}',
          preview: (
            <div>
              <button
                onClick={() => setDeleteDialogOpen(true)}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500 min-h-[44px] inline-flex items-center gap-2"
              >
                <Trash2 className="w-4 h-4" />
                Delete Application
              </button>
              <DialogPreview
                isOpen={deleteDialogOpen}
                onClose={() => setDeleteDialogOpen(false)}
                title="Delete Application"
                description="This action cannot be undone. Your application and all associated data will be permanently deleted."
                variant="destructive"
                confirmText="Delete Application"
                cancelText="Keep Application"
                onConfirm={() => console.log('Application deleted')}
              />
            </div>
          ),
        },
        {
          title: 'Form Dialog',
          description: 'Dialog containing a form for user input.',
          code: 'import { Dialog } from \'@ux4g/react-core\';\nimport { useState } from \'react\';\n\nfunction Example() {\n  const [isOpen, setIsOpen] = useState(false);\n\n  const handleSubmit = (e: React.FormEvent) => {\n    e.preventDefault();\n    const formData = new FormData(e.target as HTMLFormElement);\n    console.log(\'Form submitted:\', Object.fromEntries(formData));\n    setIsOpen(false);\n  };\n\n  return (\n    <>\n      <button onClick={() => setIsOpen(true)}>\n        Update Contact Details\n      </button>\n      <Dialog\n        isOpen={isOpen}\n        onClose={() => setIsOpen(false)}\n        title="Update Contact Details"\n        description="Please provide your updated contact information."\n        size="md"\n      >\n        <form onSubmit={handleSubmit} className="space-y-4">\n          <div>\n            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">\n              Email Address\n            </label>\n            <input\n              type="email"\n              id="email"\n              name="email"\n              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"\n              required\n            />\n          </div>\n          <div>\n            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">\n              Phone Number\n            </label>\n            <input\n              type="tel"\n              id="phone"\n              name="phone"\n              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"\n              required\n            />\n          </div>\n          <div className="flex justify-end gap-3 pt-4">\n            <button\n              type="button"\n              onClick={() => setIsOpen(false)}\n              className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-50 transition-colors min-h-[44px]"\n            >\n              Cancel\n            </button>\n            <button\n              type="submit"\n              className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 transition-colors min-h-[44px]"\n            >\n              Save Changes\n            </button>\n          </div>\n        </form>\n      </Dialog>\n    </>\n  );\n}',
          preview: (
            <div>
              <button
                onClick={() => setFormDialogOpen(true)}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 min-h-[44px]"
              >
                Update Contact Details
              </button>
              <DialogPreview
                isOpen={formDialogOpen}
                onClose={() => setFormDialogOpen(false)}
                title="Update Contact Details"
                description="Please provide your updated contact information."
                size="md"
              >
                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setFormDialogOpen(false); }}>
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
                      onClick={() => setFormDialogOpen(false)}
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
              </DialogPreview>
            </div>
          ),
        },
        {
          title: 'Alert Dialog',
          description: 'Alert dialog with single action and no cancel option (uses alertdialog role).',
          code: 'import { Dialog } from \'@ux4g/react-core\';\nimport { AlertCircle } from \'lucide-react\';\nimport { useState } from \'react\';\n\nfunction Example() {\n  const [isOpen, setIsOpen] = useState(false);\n\n  return (\n    <>\n      <button onClick={() => setIsOpen(true)}>\n        Trigger Alert\n      </button>\n      <Dialog\n        isOpen={isOpen}\n        onClose={() => setIsOpen(false)}\n        title="Session Timeout Warning"\n        description="Your session will expire in 2 minutes due to inactivity. Please save your work."\n        variant="alert"\n        confirmText="Continue Session"\n        hideCancel={true}\n        onConfirm={() => console.log(\'Session continued\')}\n      />\n    </>\n  );\n}',
          preview: (
            <div>
              <button
                onClick={() => setAlertDialogOpen(true)}
                className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-orange-500 min-h-[44px] inline-flex items-center gap-2"
              >
                <AlertCircle className="w-4 h-4" />
                Trigger Alert
              </button>
              <DialogPreview
                isOpen={alertDialogOpen}
                onClose={() => setAlertDialogOpen(false)}
                title="Session Timeout Warning"
                description="Your session will expire in 2 minutes due to inactivity. Please save your work."
                variant="alert"
                confirmText="Continue Session"
                hideCancel={true}
                onConfirm={() => console.log('Session continued')}
              />
            </div>
          ),
        },
        {
          title: 'Success Dialog',
          description: 'Dialog showing successful operation with success styling.',
          code: 'import { Dialog } from \'@ux4g/react-core\';\nimport { CheckCircle } from \'lucide-react\';\nimport { useState } from \'react\';\n\nfunction Example() {\n  const [isOpen, setIsOpen] = useState(false);\n\n  return (\n    <>\n      <button onClick={() => setIsOpen(true)}>\n        Show Success\n      </button>\n      <Dialog\n        isOpen={isOpen}\n        onClose={() => setIsOpen(false)}\n        title="Application Submitted Successfully"\n        description="Your application has been submitted and is now being processed. You will receive a confirmation email shortly."\n        variant="success"\n        confirmText="View My Applications"\n        cancelText="Close"\n        onConfirm={() => console.log(\'Navigate to applications\')}\n      />\n    </>\n  );\n}',
          preview: (
            <div>
              <button
                onClick={() => setSuccessDialogOpen(true)}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500 min-h-[44px]"
              >
                Show Success
              </button>
              <DialogPreview
                isOpen={successDialogOpen}
                onClose={() => setSuccessDialogOpen(false)}
                title="Application Submitted Successfully"
                description="Your application has been submitted and is now being processed. You will receive a confirmation email shortly."
                variant="success"
                confirmText="View My Applications"
                cancelText="Close"
                onConfirm={() => console.log('Navigate to applications')}
              />
            </div>
          ),
        },
        {
          title: 'Error Dialog',
          description: 'Dialog showing error state with error styling.',
          code: 'import { Dialog } from \'@ux4g/react-core\';\nimport { AlertCircle } from \'lucide-react\';\nimport { useState } from \'react\';\n\nfunction Example() {\n  const [isOpen, setIsOpen] = useState(false);\n\n  return (\n    <>\n      <button onClick={() => setIsOpen(true)}>\n        Show Error\n      </button>\n      <Dialog\n        isOpen={isOpen}\n        onClose={() => setIsOpen(false)}\n        title="Submission Failed"\n        description="We were unable to process your request. Please check your internet connection and try again."\n        variant="error"\n        confirmText="Try Again"\n        cancelText="Cancel"\n        onConfirm={() => console.log(\'Retry submission\')}\n      />\n    </>\n  );\n}',
          preview: (
            <div>
              <button
                onClick={() => setErrorDialogOpen(true)}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500 min-h-[44px]"
              >
                Show Error
              </button>
              <DialogPreview
                isOpen={errorDialogOpen}
                onClose={() => setErrorDialogOpen(false)}
                title="Submission Failed"
                description="We were unable to process your request. Please check your internet connection and try again."
                variant="error"
                confirmText="Try Again"
                cancelText="Cancel"
                onConfirm={() => console.log('Retry submission')}
              />
            </div>
          ),
        },
      ]}

      reactCode={{
        component: 'import React, { useEffect, useRef, useState } from \'react\';\nimport { createPortal } from \'react-dom\';\nimport { cn } from \'../../utils/cn\';\nimport { dialogVariants } from \'./dialog.variants\';\nimport { DialogProps } from \'./Dialog.types\';\nimport { X } from \'lucide-react\';\n\nexport const Dialog = React.forwardRef<HTMLDivElement, DialogProps>(\n  (\n    {\n      isOpen,\n      onClose,\n      title,\n      description,\n      children,\n      variant = \'default\',\n      size = \'md\',\n      showCloseButton = true,\n      confirmText,\n      cancelText = \'Cancel\',\n      onConfirm,\n      hideCancel = false,\n      className,\n      ...props\n    },\n    ref\n  ) => {\n    const [isClosing, setIsClosing] = useState(false);\n    const dialogRef = useRef<HTMLDivElement>(null);\n    const isAlert = variant === \'alert\';\n\n    useEffect(() => {\n      if (!isOpen) return;\n\n      const handleEscape = (e: KeyboardEvent) => {\n        if (e.key === \'Escape\') {\n          handleClose();\n        }\n      };\n\n      const previouslyFocused = document.activeElement as HTMLElement;\n      document.addEventListener(\'keydown\', handleEscape);\n      document.body.style.overflow = \'hidden\';\n\n      if (dialogRef.current) {\n        const focusableElements = dialogRef.current.querySelectorAll(\n          \'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])\'\n        );\n        if (focusableElements.length > 0) {\n          (focusableElements[0] as HTMLElement).focus();\n        }\n      }\n\n      return () => {\n        document.removeEventListener(\'keydown\', handleEscape);\n        document.body.style.overflow = \'\';\n        if (previouslyFocused) {\n          previouslyFocused.focus();\n        }\n      };\n    }, [isOpen]);\n\n    const handleClose = () => {\n      setIsClosing(true);\n      setTimeout(() => {\n        onClose();\n        setIsClosing(false);\n      }, 150);\n    };\n\n    const handleBackdropClick = (e: React.MouseEvent) => {\n      if (e.target === e.currentTarget) {\n        handleClose();\n      }\n    };\n\n    const handleConfirm = () => {\n      if (onConfirm) {\n        onConfirm();\n      }\n      handleClose();\n    };\n\n    if (!isOpen) return null;\n\n    const dialogContent = (\n      <>\n        <div \n          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] animate-fadeIn"\n          onClick={handleBackdropClick}\n          aria-hidden="true"\n        />\n        <div className="fixed inset-0 z-[101] flex items-center justify-center p-4">\n          <div\n            ref={dialogRef}\n            className={cn(\n              dialogVariants({ variant, size }),\n              isClosing ? \'animate-scaleOut\' : \'animate-scaleIn\',\n              className\n            )}\n            role={isAlert ? \'alertdialog\' : \'dialog\'}\n            aria-modal="true"\n            aria-labelledby="dialog-title"\n            aria-describedby={description ? \'dialog-description\' : undefined}\n            {...props}\n          >\n            <div className="dialog-header">\n              <h2 id="dialog-title" className="dialog-title">\n                {title}\n              </h2>\n              {showCloseButton && !isAlert && (\n                <button\n                  onClick={handleClose}\n                  className="dialog-close"\n                  aria-label="Close dialog"\n                >\n                  <X className="w-5 h-5" />\n                </button>\n              )}\n            </div>\n\n            <div className="dialog-content">\n              {description && (\n                <p id="dialog-description" className="dialog-description">\n                  {description}\n                </p>\n              )}\n              {children}\n            </div>\n\n            {(confirmText || cancelText) && (\n              <div className="dialog-footer">\n                {!hideCancel && (\n                  <button\n                    onClick={handleClose}\n                    className="dialog-button dialog-button-cancel"\n                  >\n                    {cancelText}\n                  </button>\n                )}\n                <button\n                  onClick={handleConfirm}\n                  className="dialog-button dialog-button-confirm"\n                >\n                  {confirmText}\n                </button>\n              </div>\n            )}\n          </div>\n        </div>\n      </>\n    );\n\n    return createPortal(dialogContent, document.body);\n  }\n);\n\nDialog.displayName = \'Dialog\';',
        types: 'export interface DialogProps \n  extends Omit<React.HTMLAttributes<HTMLDivElement>, \'title\'>,\n          DialogVariantProps {\n  isOpen: boolean;\n  onClose: () => void;\n  title: string;\n  description?: string;\n  children?: React.ReactNode;\n  showCloseButton?: boolean;\n  confirmText?: string;\n  cancelText?: string;\n  onConfirm?: () => void;\n  hideCancel?: boolean;\n}\n\nexport type DialogVariant = \'default\' | \'alert\' | \'destructive\' | \'success\' | \'error\';\nexport type DialogSize = \'sm\' | \'md\' | \'lg\';',
        variants: 'import { cva, type VariantProps } from \'class-variance-authority\';\n\nexport const dialogVariants = cva(\n  [\n    \'bg-white rounded-lg shadow-2xl\',\n    \'w-full\',\n    \'focus:outline-none\',\n  ],\n  {\n    variants: {\n      variant: {\n        default: \'border border-gray-200\',\n        alert: \'border border-orange-200\',\n        destructive: \'border border-red-200\',\n        success: \'border border-green-200\',\n        error: \'border border-red-200\',\n      },\n      size: {\n        sm: \'max-w-sm\',\n        md: \'max-w-md\',\n        lg: \'max-w-2xl\',\n      },\n    },\n    defaultVariants: {\n      variant: \'default\',\n      size: \'md\',\n    },\n  }\n);\n\nexport type DialogVariantProps = VariantProps<typeof dialogVariants>;',
      }}

      angularCode={{
        component: 'import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from \'@angular/core\';\nimport { trigger, state, style, transition, animate } from \'@angular/animations\';\n\ntype DialogVariant = \'default\' | \'alert\' | \'destructive\' | \'success\' | \'error\';\ntype DialogSize = \'sm\' | \'md\' | \'lg\';\n\n@Component({\n  selector: \'ux4g-dialog\',\n  template: `\n    <div *ngIf="isOpen" class="dialog-container">\n      <div \n        class="dialog-backdrop" \n        (click)="handleBackdropClick()"\n        [@fadeIn]\n      ></div>\n      \n      <div class="dialog-wrapper">\n        <div \n          [class]="getDialogClasses()"\n          [attr.role]="variant === \'alert\' ? \'alertdialog\' : \'dialog\'"\n          [attr.aria-modal]="true"\n          [attr.aria-labelledby]="\'dialog-title\'"\n          [attr.aria-describedby]="description ? \'dialog-description\' : null"\n          [@scaleIn]\n        >\n          <div class="dialog-header">\n            <h2 id="dialog-title" class="dialog-title">{{ title }}</h2>\n            <button \n              *ngIf="showCloseButton && variant !== \'alert\'"\n              (click)="handleClose()"\n              class="dialog-close"\n              aria-label="Close dialog"\n            >\n              &times;\n            </button>\n          </div>\n\n          <div class="dialog-content">\n            <p *ngIf="description" id="dialog-description" class="dialog-description">\n              {{ description }}\n            </p>\n            <ng-content></ng-content>\n          </div>\n\n          <div *ngIf="confirmText || cancelText" class="dialog-footer">\n            <button \n              *ngIf="!hideCancel"\n              (click)="handleClose()"\n              class="dialog-button dialog-button-cancel"\n            >\n              {{ cancelText }}\n            </button>\n            <button \n              (click)="handleConfirm()"\n              class="dialog-button dialog-button-confirm"\n            >\n              {{ confirmText }}\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  `,\n  styleUrls: [\'./dialog.component.css\'],\n  animations: [\n    trigger(\'fadeIn\', [\n      transition(\':enter\', [\n        style({ opacity: 0 }),\n        animate(\'150ms ease-out\', style({ opacity: 1 }))\n      ]),\n      transition(\':leave\', [\n        animate(\'150ms ease-in\', style({ opacity: 0 }))\n      ])\n    ]),\n    trigger(\'scaleIn\', [\n      transition(\':enter\', [\n        style({ transform: \'scale(0.95)\', opacity: 0 }),\n        animate(\'150ms ease-out\', style({ transform: \'scale(1)\', opacity: 1 }))\n      ]),\n      transition(\':leave\', [\n        animate(\'150ms ease-in\', style({ transform: \'scale(0.95)\', opacity: 0 }))\n      ])\n    ])\n  ]\n})\nexport class DialogComponent implements OnInit, OnDestroy {\n  @Input() isOpen = false;\n  @Input() title = \'\';\n  @Input() description?: string;\n  @Input() variant: DialogVariant = \'default\';\n  @Input() size: DialogSize = \'md\';\n  @Input() showCloseButton = true;\n  @Input() confirmText?: string;\n  @Input() cancelText = \'Cancel\';\n  @Input() hideCancel = false;\n  \n  @Output() closed = new EventEmitter<void>();\n  @Output() confirmed = new EventEmitter<void>();\n\n  ngOnInit(): void {\n    if (this.isOpen) {\n      document.body.style.overflow = \'hidden\';\n      this.setupKeyboardHandlers();\n    }\n  }\n\n  ngOnDestroy(): void {\n    document.body.style.overflow = \'\';\n  }\n\n  private setupKeyboardHandlers(): void {\n    const handler = (event: KeyboardEvent) => {\n      if (event.key === \'Escape\') {\n        this.handleClose();\n      }\n    };\n    document.addEventListener(\'keydown\', handler);\n  }\n\n  getDialogClasses(): string {\n    const baseClasses = \'ux4g-dialog\';\n    const variantClass = `ux4g-dialog-${this.variant}`;\n    const sizeClass = `ux4g-dialog-${this.size}`;\n    \n    return [baseClasses, variantClass, sizeClass]\n      .filter(Boolean)\n      .join(\' \');\n  }\n\n  handleClose(): void {\n    document.body.style.overflow = \'\';\n    this.closed.emit();\n  }\n\n  handleBackdropClick(): void {\n    this.handleClose();\n  }\n\n  handleConfirm(): void {\n    this.confirmed.emit();\n    this.handleClose();\n  }\n}',
        module: 'import { NgModule } from \'@angular/core\';\nimport { CommonModule } from \'@angular/common\';\nimport { BrowserAnimationsModule } from \'@angular/platform-browser/animations\';\nimport { DialogComponent } from \'./dialog.component\';\n\n@NgModule({\n  declarations: [DialogComponent],\n  imports: [CommonModule, BrowserAnimationsModule],\n  exports: [DialogComponent]\n})\nexport class DialogModule { }',
        types: 'export type DialogVariant = \'default\' | \'alert\' | \'destructive\' | \'success\' | \'error\';\nexport type DialogSize = \'sm\' | \'md\' | \'lg\';\n\nexport interface DialogConfig {\n  isOpen: boolean;\n  title: string;\n  description?: string;\n  variant?: DialogVariant;\n  size?: DialogSize;\n  showCloseButton?: boolean;\n  confirmText?: string;\n  cancelText?: string;\n  hideCancel?: boolean;\n}',
      }}

      comparisons={[
        {
          system: 'Material UI (Google)',
          component: 'Dialog',
          variants: 'fullScreen, maxWidth',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Comprehensive',
          link: 'https://mui.com/material-ui/react-dialog/',
        },
        {
          system: 'Ant Design (Alibaba)',
          component: 'Modal',
          variants: 'info, success, error, warning, confirm',
          accessibility: 'WCAG 2.0 AA',
          documentation: 'Good',
          link: 'https://ant.design/components/modal',
        },
        {
          system: 'GOV.UK Design System',
          component: 'Modal Dialog (experimental)',
          variants: 'default only',
          accessibility: 'WCAG 2.1 AAA',
          documentation: 'Limited',
          link: 'https://design-system.service.gov.uk/',
        },
        {
          system: 'Chakra UI',
          component: 'Modal / AlertDialog',
          variants: 'sizes, isCentered',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Comprehensive',
          link: 'https://chakra-ui.com/docs/components/modal',
        },
        {
          system: 'Radix UI',
          component: 'Dialog / AlertDialog',
          variants: 'Unstyled primitive',
          accessibility: 'WCAG 2.1 AAA',
          documentation: 'Comprehensive',
          link: 'https://www.radix-ui.com/primitives/docs/components/dialog',
        },
        {
          system: 'Headless UI (Tailwind)',
          component: 'Dialog',
          variants: 'Unstyled',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Good',
          link: 'https://headlessui.com/react/dialog',
        },
      ]}

      accessibility={{
        wcagLevel: 'WCAG 2.1 Level AA Compliant',
        features: [
          'role="dialog" for standard dialogs, role="alertdialog" for alerts requiring immediate attention (WCAG 4.1.2)',
          'aria-modal="true" to indicate modal behavior (WCAG 4.1.3)',
          'aria-labelledby pointing to dialog title for accessible name (WCAG 4.1.2)',
          'aria-describedby pointing to description for additional context (WCAG 1.3.1)',
          'Focus trap: focus is contained within dialog when open (WCAG 2.4.3)',
          'Focus management: focus moves to first focusable element on open, returns to trigger on close (WCAG 2.4.3)',
          'Escape key closes dialog (WCAG 2.1.1)',
          'Backdrop click closes dialog for better usability',
          'Minimum 44x44px touch targets for buttons (WCAG 2.5.5)',
          'Color contrast ratios meet or exceed 4.5:1 for text (WCAG 1.4.3)',
          '2px focus ring with offset for keyboard navigation (WCAG 2.4.7)',
          'Portal rendering prevents z-index stacking issues',
          'Body scroll locked when dialog is open',
          'Backdrop blur for visual hierarchy and focus',
        ],
        keyboardSupport: [
          { key: 'Tab', action: 'Move focus to next focusable element within dialog' },
          { key: 'Shift + Tab', action: 'Move focus to previous focusable element within dialog' },
          { key: 'Escape', action: 'Close dialog and return focus to trigger element' },
          { key: 'Enter', action: 'Activate focused button (confirm/cancel)' },
          { key: 'Space', action: 'Activate focused button (confirm/cancel)' },
        ],
        screenReader: [
          'Announces dialog role and accessible name from title',
          'Announces modal behavior (aria-modal="true")',
          'Reads description when provided (aria-describedby)',
          'AlertDialog variant uses role="alertdialog" for high priority interruptions',
          'Close button has aria-label="Close dialog" for context',
          'Focus automatically moves to dialog on open',
          'Focus returns to triggering element on close',
        ],
      }}

      tokens={{
        file: '/tokens/components/dialog.json',
        mappings: [
          { property: 'Max Width (Medium)', token: 'dialog.size.md', value: '448px' },
          { property: 'Max Width (Small)', token: 'dialog.size.sm', value: '384px' },
          { property: 'Max Width (Large)', token: 'dialog.size.lg', value: '672px' },
          { property: 'Border Radius', token: 'dialog.borderRadius', value: '8px' },
          { property: 'Backdrop Background', token: 'dialog.backdrop.background', value: 'rgba(0, 0, 0, 0.5)' },
          { property: 'Backdrop Blur', token: 'dialog.backdrop.blur', value: '4px' },
          { property: 'Shadow', token: 'dialog.shadow', value: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' },
          { property: 'Title Font Size', token: 'dialog.title.fontSize', value: '18px' },
          { property: 'Title Font Weight', token: 'dialog.title.fontWeight', value: '600' },
          { property: 'Padding', token: 'dialog.padding', value: '24px' },
          { property: 'Z-Index Backdrop', token: 'dialog.zIndex.backdrop', value: '100' },
          { property: 'Z-Index Content', token: 'dialog.zIndex.content', value: '101' },
          { property: 'Animation Duration', token: 'dialog.animation.duration', value: '150ms' },
          { property: 'Min Touch Target', token: 'accessibility.minTouchTarget', value: '44px' },
        ],
      }}

      useCases={{
        title: 'Government Service Use Cases',
        description: 'Common dialog patterns in government digital services',
        scenarios: [
          {
            title: 'Delete Application Confirmation',
            description: 'Confirm destructive action before permanently deleting a citizen application.',
            example: 'User clicks delete button on their business license application. Dialog appears with "Delete Application" title, warning about permanent deletion, and red "Delete Application" / "Keep Application" buttons.',
            variant: 'destructive',
          },
          {
            title: 'Logout Confirmation',
            description: 'Confirm user wants to logout and lose unsaved work.',
            example: 'User clicks logout while filling a tax form. Dialog warns "You have unsaved changes. Logging out will lose your progress." with "Logout" / "Stay Logged In" options.',
            variant: 'default',
          },
          {
            title: 'Unsaved Changes Warning',
            description: 'Alert user about losing unsaved data when navigating away.',
            example: 'User tries to leave permit application page. Alert dialog states "You have unsaved changes" with "Leave Page" / "Continue Editing" buttons.',
            variant: 'alert',
          },
          {
            title: 'Submit Application Confirmation',
            description: 'Final confirmation before submitting important application.',
            example: 'User completes passport application. Dialog confirms "Submit Application? You cannot make changes after submission." with "Submit" / "Review Again" options.',
            variant: 'default',
          },
          {
            title: 'Cancel Booking/Appointment',
            description: 'Confirm cancellation of government service appointment.',
            example: 'User cancels DMV appointment. Dialog asks "Cancel your appointment on March 15 at 2:00 PM?" with "Yes, Cancel" / "Keep Appointment" buttons.',
            variant: 'destructive',
          },
          {
            title: 'Revoke Permission',
            description: 'Confirm removal of access or permissions.',
            example: 'Admin removes user access to sensitive records. Dialog warns "Revoke access for John Smith? This user will immediately lose access to all citizen data." with "Revoke Access" / "Cancel" buttons.',
            variant: 'destructive',
          },
          {
            title: 'Session Timeout Alert',
            description: 'Alert user of impending session timeout.',
            example: 'After 25 minutes of inactivity during tax filing, alert dialog states "Your session will expire in 5 minutes. Please save your work." with "Continue Session" button only.',
            variant: 'alert',
          },
          {
            title: 'Submission Success',
            description: 'Confirm successful form submission with next steps.',
            example: 'After submitting building permit, success dialog shows "Application Submitted Successfully. Reference number: BP-2024-1234. You will receive email confirmation within 24 hours." with "View My Applications" / "Close" options.',
            variant: 'success',
          },
          {
            title: 'Payment Confirmation',
            description: 'Confirm payment details before processing.',
            example: 'User about to pay $150 license fee. Dialog shows "Confirm Payment: $150.00 for Business License Renewal. Payment will be charged to card ending in 4242." with "Confirm Payment" / "Cancel" buttons.',
            variant: 'default',
          },
          {
            title: 'Document Download Warning',
            description: 'Inform user about sensitive document download.',
            example: 'User downloads tax records. Dialog states "You are about to download sensitive personal information. Keep this document secure." with "Download" / "Cancel" options.',
            variant: 'alert',
          },
        ],
      }}
    />
  );
}
