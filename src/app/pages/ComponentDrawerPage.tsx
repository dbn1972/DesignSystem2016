/**
 * Drawer Component Documentation Page
 * Complete documentation for the Drawer component with examples, code downloads, and comparisons
 */

import React, { useState } from 'react';
import { ComponentDocumentation } from '../components/ComponentDocumentation';
import { X, Menu, Filter, Settings, ChevronRight } from 'lucide-react';

// Import the actual Drawer component for live preview
const DrawerPreview = ({
  isOpen,
  onClose,
  placement = 'right',
  size = 'md',
  title,
  children,
  showOverlay = true,
  header,
  footer,
  ...props
}: any) => {
  if (!isOpen) return null;

  const sizeClasses =
    size === 'sm' ? (placement === 'left' || placement === 'right' ? 'w-80' : 'h-64') :
    size === 'lg' ? (placement === 'left' || placement === 'right' ? 'w-[600px]' : 'h-[600px]') :
    size === 'full' ? (placement === 'left' || placement === 'right' ? 'w-full' : 'h-full') :
    placement === 'left' || placement === 'right' ? 'w-96' : 'h-80';

  const placementClasses =
    placement === 'left' ? 'left-0 top-0 bottom-0 ' + sizeClasses :
    placement === 'top' ? 'top-0 left-0 right-0 ' + sizeClasses :
    placement === 'bottom' ? 'bottom-0 left-0 right-0 ' + sizeClasses :
    'right-0 top-0 bottom-0 ' + sizeClasses;

  const slideAnimation =
    placement === 'left' ? 'animate-slide-in-left' :
    placement === 'top' ? 'animate-slide-in-top' :
    placement === 'bottom' ? 'animate-slide-in-bottom' :
    'animate-slide-in-right';

  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-labelledby={title ? 'drawer-title' : undefined}>
      {showOverlay && (
        <div
          className="absolute inset-0 bg-black/50 transition-opacity duration-300"
          onClick={onClose}
          aria-hidden="true"
        />
      )}
      <div
        className={'fixed bg-card shadow-xl flex flex-col ' + placementClasses + ' ' + slideAnimation}
        {...props}
      >
        {(title || header) && (
          <div className="flex items-center justify-between px-6 py-4 border-b border-border shrink-0">
            {header || (
              <h2 id="drawer-title" className="text-lg font-semibold text-foreground">
                {title}
              </h2>
            )}
            <button
              onClick={onClose}
              className="p-2 text-muted-foreground hover:text-muted-foreground hover:bg-muted rounded transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#005196] focus-visible:ring-offset-2"
              aria-label="Close drawer"
            >
              <X size={20} />
            </button>
          </div>
        )}
        {!title && !header && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-muted-foreground hover:bg-muted rounded transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#005196] focus-visible:ring-offset-2 z-10"
            aria-label="Close drawer"
          >
            <X size={20} />
          </button>
        )}
        <div className="flex-1 overflow-y-auto p-6">
          {children}
        </div>
        {footer && (
          <div className="px-6 py-4 border-t border-border shrink-0">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

function DrawerPlayground() {
  const [position, setPosition] = React.useState('left');
  const [size, setSize] = React.useState('sm');

  return (
    <div className="grid lg:grid-cols-[1fr_300px] gap-6">
      <div className="flex items-center justify-center min-h-[200px] rounded-xl border-2 border-dashed border-border bg-background p-4">
        <div className="relative w-full h-48 rounded-lg overflow-hidden border border-border bg-background">
          {/* Mini page content */}
          <div className="absolute inset-0 p-3 space-y-2">
            <div className="h-2 bg-muted rounded w-3/4" />
            <div className="h-2 bg-muted rounded w-full" />
            <div className="h-2 bg-muted rounded w-1/2" />
          </div>
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/20" />
          {/* Drawer panel */}
          <div className={`absolute top-0 bottom-0 ${position === 'left' ? 'left-0' : 'right-0'} ${size === 'sm' ? 'w-1/4' : size === 'lg' ? 'w-1/2' : 'w-1/3'} bg-card shadow-xl border-${position === 'left' ? 'r' : 'l'} border-border flex flex-col`}>
            <div className="flex items-center justify-between px-3 py-2 border-b border-border">
              <span className="text-xs font-semibold text-foreground">Drawer ({position}, {size})</span>
              <span className="text-muted-foreground text-xs">✕</span>
            </div>
            <div className="flex-1 p-3 space-y-2">
              <div className="h-2 bg-muted rounded w-full" />
              <div className="h-2 bg-muted rounded w-3/4" />
              <div className="h-2 bg-muted rounded w-1/2" />
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-4 text-sm">
          <div>
            <label className="block font-semibold text-foreground mb-1">Position</label>
            <select value={position} onChange={e => setPosition(e.target.value)} className="w-full border border-border rounded px-3 py-2 bg-card text-foreground">
              <option value="left">left</option>
              <option value="right">right</option>
            </select>
          </div>
          <div>
            <label className="block font-semibold text-foreground mb-1">Size</label>
            <select value={size} onChange={e => setSize(e.target.value)} className="w-full border border-border rounded px-3 py-2 bg-card text-foreground">
              <option value="sm">sm</option>
              <option value="md">md</option>
              <option value="lg">lg</option>
            </select>
          </div>
        <div className="p-3 rounded-lg bg-muted/50 border border-border">
          <p className="font-mono text-xs text-muted-foreground break-all">
            {`<Drawer ${position} ${size} />`}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ComponentDrawerPage() {
  // State for interactive examples
  const [basicOpen, setBasicOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [wizardOpen, setWizardOpen] = useState(false);
  const [wizardStep, setWizardStep] = useState(1);

  return (
    <ComponentDocumentation
      name="Drawer"
      description="Slide-in panel component from screen edges for navigation, filters, forms, and settings. Provides contextual content without leaving the current page, supporting multiple placements, sizes, and interaction patterns with full accessibility compliance."
      category="Overlay Components"
      maturity="beta"
      tier="core"
      since="v1.0.0"
      updated="v2.1.0"

      preview={
        <div className="w-full max-w-2xl">
          {/* CSS-only drawer mockup showing an open right-side drawer */}
          <div className="relative rounded-xl overflow-hidden border border-border shadow-lg h-72 bg-background">
            {/* Main content area (dimmed) */}
            <div className="absolute inset-0 bg-background p-4 space-y-3">
              <div className="h-3 bg-muted rounded w-3/4" />
              <div className="h-3 bg-muted rounded w-full" />
              <div className="h-3 bg-muted rounded w-2/3" />
              <div className="h-3 bg-muted rounded w-5/6" />
              <div className="h-3 bg-muted rounded w-1/2" />
              <div className="h-3 bg-muted rounded w-4/5" />
            </div>
            {/* Backdrop overlay */}
            <div className="absolute inset-0 bg-black/30" />
            {/* Drawer panel sliding from right */}
            <div className="absolute top-0 right-0 bottom-0 w-64 bg-card shadow-2xl border-l border-border flex flex-col">
              {/* Drawer header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-border shrink-0">
                <div className="flex items-center gap-2">
                  <Filter size={16} className="text-[#005196]" />
                  <h3 className="text-sm font-semibold text-foreground">Filters</h3>
                </div>
                <button className="p-1 rounded hover:bg-muted text-muted-foreground">
                  <X size={16} />
                </button>
              </div>
              {/* Drawer content */}
              <div className="flex-1 p-4 space-y-4 overflow-auto">
                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-1.5">Status</label>
                  <div className="space-y-1.5">
                    <label className="flex items-center gap-2 text-xs"><input type="checkbox" className="accent-[#005196]" defaultChecked readOnly /><span className="text-foreground">Pending</span></label>
                    <label className="flex items-center gap-2 text-xs"><input type="checkbox" className="accent-[#005196]" readOnly /><span className="text-foreground">Approved</span></label>
                    <label className="flex items-center gap-2 text-xs"><input type="checkbox" className="accent-[#005196]" readOnly /><span className="text-foreground">Rejected</span></label>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-1.5">Date Range</label>
                  <input className="w-full px-2 py-1 border border-border rounded text-xs" placeholder="From" readOnly />
                  <input className="w-full px-2 py-1 border border-border rounded text-xs mt-1" placeholder="To" readOnly />
                </div>
                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-1.5">Department</label>
                  <select className="w-full px-2 py-1 border border-border rounded text-xs bg-card">
                    <option>All Departments</option>
                  </select>
                </div>
              </div>
              {/* Drawer footer */}
              <div className="flex gap-2 px-4 py-3 border-t border-border shrink-0">
                <button className="flex-1 px-3 py-1.5 text-xs border border-border rounded hover:bg-muted">Reset</button>
                <button className="flex-1 px-3 py-1.5 text-xs bg-[#005196] text-white rounded hover:bg-[#004178]">Apply Filters</button>
              </div>
            </div>
          </div>
        </div>
      }

      props={[
        {
          name: 'open',
          type: 'boolean',
          required: true,
          description: 'Controls whether the drawer is visible.',
        },
        {
          name: 'onClose',
          type: '() => void',
          required: true,
          description: 'Callback when the drawer should close.',
        },
        {
          name: 'children',
          type: 'ReactNode',
          required: true,
          description: 'Content to display inside the drawer body.',
        },
        {
          name: 'title',
          type: 'ReactNode',
          required: false,
          description: 'Drawer title displayed in the header.',
        },
        {
          name: 'footer',
          type: 'ReactNode',
          required: false,
          description: 'Footer content for actions.',
        },
        {
          name: 'placement',
          type: "'left' | 'right' | 'top' | 'bottom'",
          default: "'right'",
          required: false,
          description: 'Edge from which the drawer slides in.',
        },
        {
          name: 'size',
          type: 'string | number',
          default: "'400px'",
          required: false,
          description: 'Drawer width (left/right) or height (top/bottom).',
        },
        {
          name: 'closeOnBackdrop',
          type: 'boolean',
          default: 'true',
          required: false,
          description: 'Whether clicking the backdrop closes the drawer.',
        },
        {
          name: 'closeOnEscape',
          type: 'boolean',
          default: 'true',
          required: false,
          description: 'Whether pressing Escape closes the drawer.',
        },
        {
          name: 'showCloseButton',
          type: 'boolean',
          default: 'true',
          required: false,
          description: 'Whether to show the close button.',
        },
        {
          name: 'className',
          type: 'string',
          required: false,
          description: 'Additional CSS classes.',
        },
      ]}

      examples={[
        {
          title: 'Basic Drawer',
          description: 'Simple drawer from the right with title and content.',
          code: 'import { Drawer } from \'@ux4g/react-core\';\nimport { useState } from \'react\';\n\nfunction Example() {\n  const [isOpen, setIsOpen] = useState(false);\n\n  return (\n    <>\n      <button onClick={() => setIsOpen(true)}>\n        Open Drawer\n      </button>\n      <Drawer\n        isOpen={isOpen}\n        onClose={() => setIsOpen(false)}\n        title="Basic Drawer"\n        placement="right"\n        size="md"\n      >\n        <p className="text-muted-foreground">\n          This is a basic drawer component. It slides in from the right\n          and can contain any content you need.\n        </p>\n        <p className="mt-4 text-muted-foreground">\n          Click the overlay or press Escape to close.\n        </p>\n      </Drawer>\n    </>\n  );\n}',
          preview: (
            <>
              <button
                onClick={() => setBasicOpen(true)}
                className="px-4 py-2 bg-[#005196] text-white rounded hover:bg-[#004178] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#005196] focus-visible:ring-offset-2"
              >
                Open Basic Drawer
              </button>
              <DrawerPreview
                isOpen={basicOpen}
                onClose={() => setBasicOpen(false)}
                title="Basic Drawer"
                placement="right"
                size="md"
              >
                <p className="text-muted-foreground">
                  This is a basic drawer component. It slides in from the right
                  and can contain any content you need.
                </p>
                <p className="mt-4 text-muted-foreground">
                  Click the overlay or press Escape to close.
                </p>
              </DrawerPreview>
            </>
          ),
        },
        {
          title: 'Drawer with Form',
          description: 'Drawer containing a form with footer actions.',
          code: 'import { Drawer } from \'@ux4g/react-core\';\nimport { useState } from \'react\';\n\nfunction Example() {\n  const [isOpen, setIsOpen] = useState(false);\n\n  return (\n    <>\n      <button onClick={() => setIsOpen(true)}>\n        Add New User\n      </button>\n      <Drawer\n        isOpen={isOpen}\n        onClose={() => setIsOpen(false)}\n        title="Add New User"\n        placement="right"\n        size="md"\n        footer={\n          <div className="flex gap-3 justify-end">\n            <button\n              onClick={() => setIsOpen(false)}\n              className="px-4 py-2 border border-border rounded"\n            >\n              Cancel\n            </button>\n            <button className="px-4 py-2 bg-[#005196] text-white rounded">\n              Save User\n            </button>\n          </div>\n        }\n      >\n        <form className="space-y-4">\n          <div>\n            <label className="block text-sm font-medium mb-1">Full Name</label>\n            <input\n              type="text"\n              className="w-full px-3 py-2 border rounded"\n              placeholder="John Doe"\n            />\n          </div>\n          <div>\n            <label className="block text-sm font-medium mb-1">Email</label>\n            <input\n              type="email"\n              className="w-full px-3 py-2 border rounded"\n              placeholder="john@example.com"\n            />\n          </div>\n          <div>\n            <label className="block text-sm font-medium mb-1">Role</label>\n            <select className="w-full px-3 py-2 border rounded">\n              <option>Administrator</option>\n              <option>Editor</option>\n              <option>Viewer</option>\n            </select>\n          </div>\n        </form>\n      </Drawer>\n    </>\n  );\n}',
          preview: (
            <>
              <button
                onClick={() => setFormOpen(true)}
                className="px-4 py-2 bg-[#005196] text-white rounded hover:bg-[#004178] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#005196] focus-visible:ring-offset-2"
              >
                Add New User
              </button>
              <DrawerPreview
                isOpen={formOpen}
                onClose={() => setFormOpen(false)}
                title="Add New User"
                placement="right"
                size="md"
                footer={
                  <div className="flex gap-3 justify-end">
                    <button
                      onClick={() => setFormOpen(false)}
                      className="px-4 py-2 border border-border rounded hover:bg-background transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#005196] focus-visible:ring-offset-2"
                    >
                      Cancel
                    </button>
                    <button className="px-4 py-2 bg-[#005196] text-white rounded hover:bg-[#004178] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#005196] focus-visible:ring-offset-2">
                      Save User
                    </button>
                  </div>
                }
              >
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-1">Full Name</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-[#005196]"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-1">Email</label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-[#005196]"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-1">Role</label>
                    <select className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-[#005196]">
                      <option>Administrator</option>
                      <option>Editor</option>
                      <option>Viewer</option>
                    </select>
                  </div>
                </form>
              </DrawerPreview>
            </>
          ),
        },
        {
          title: 'Filter Panel',
          description: 'Drawer from left for filtering data with multiple criteria.',
          code: 'import { Drawer } from \'@ux4g/react-core\';\nimport { Filter } from \'lucide-react\';\nimport { useState } from \'react\';\n\nfunction Example() {\n  const [isOpen, setIsOpen] = useState(false);\n\n  return (\n    <>\n      <button onClick={() => setIsOpen(true)}>\n        <Filter size={20} />\n        Filters\n      </button>\n      <Drawer\n        isOpen={isOpen}\n        onClose={() => setIsOpen(false)}\n        title="Filter Applications"\n        placement="left"\n        size="sm"\n        footer={\n          <div className="flex gap-3 justify-between">\n            <button className="px-4 py-2 text-[#005196]">\n              Clear All\n            </button>\n            <button className="px-4 py-2 bg-[#005196] text-white rounded">\n              Apply Filters\n            </button>\n          </div>\n        }\n      >\n        <div className="space-y-6">\n          <div>\n            <h3 className="font-medium mb-2">Status</h3>\n            <label className="flex items-center gap-2">\n              <input type="checkbox" />\n              <span>Pending</span>\n            </label>\n            <label className="flex items-center gap-2 mt-2">\n              <input type="checkbox" />\n              <span>Approved</span>\n            </label>\n            <label className="flex items-center gap-2 mt-2">\n              <input type="checkbox" />\n              <span>Rejected</span>\n            </label>\n          </div>\n          <div>\n            <h3 className="font-medium mb-2">Date Range</h3>\n            <input type="date" className="w-full px-3 py-2 border rounded" />\n            <span className="block text-center my-1">to</span>\n            <input type="date" className="w-full px-3 py-2 border rounded" />\n          </div>\n        </div>\n      </Drawer>\n    </>\n  );\n}',
          preview: (
            <>
              <button
                onClick={() => setFilterOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded hover:bg-background transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#005196] focus-visible:ring-offset-2"
              >
                <Filter size={20} />
                Filters
              </button>
              <DrawerPreview
                isOpen={filterOpen}
                onClose={() => setFilterOpen(false)}
                title="Filter Applications"
                placement="left"
                size="sm"
                footer={
                  <div className="flex gap-3 justify-between">
                    <button className="px-4 py-2 text-[#005196] hover:bg-muted rounded transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#005196] focus-visible:ring-offset-2">
                      Clear All
                    </button>
                    <button className="px-4 py-2 bg-[#005196] text-white rounded hover:bg-[#004178] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#005196] focus-visible:ring-offset-2">
                      Apply Filters
                    </button>
                  </div>
                }
              >
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium text-foreground mb-2">Status</h3>
                    <label className="flex items-center gap-2 mb-2">
                      <input type="checkbox" className="w-4 h-4 text-[#005196] focus:ring-2 focus:ring-[#005196]" />
                      <span className="text-muted-foreground">Pending</span>
                    </label>
                    <label className="flex items-center gap-2 mb-2">
                      <input type="checkbox" className="w-4 h-4 text-[#005196] focus:ring-2 focus:ring-[#005196]" />
                      <span className="text-muted-foreground">Approved</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="w-4 h-4 text-[#005196] focus:ring-2 focus:ring-[#005196]" />
                      <span className="text-muted-foreground">Rejected</span>
                    </label>
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-2">Date Range</h3>
                    <input type="date" className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-[#005196]" />
                    <span className="block text-center text-muted-foreground my-1">to</span>
                    <input type="date" className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-[#005196]" />
                  </div>
                </div>
              </DrawerPreview>
            </>
          ),
        },
        {
          title: 'Mobile Menu',
          description: 'Navigation drawer for mobile with menu items and sections.',
          code: 'import { Drawer } from \'@ux4g/react-core\';\nimport { Menu, ChevronRight } from \'lucide-react\';\nimport { useState } from \'react\';\n\nfunction Example() {\n  const [isOpen, setIsOpen] = useState(false);\n\n  return (\n    <>\n      <button onClick={() => setIsOpen(true)}>\n        <Menu size={24} />\n      </button>\n      <Drawer\n        isOpen={isOpen}\n        onClose={() => setIsOpen(false)}\n        placement="left"\n        size="sm"\n      >\n        <nav className="space-y-1">\n          <a className="flex items-center justify-between px-4 py-3 hover:bg-muted rounded">\n            <span>Dashboard</span>\n            <ChevronRight size={20} />\n          </a>\n          <a className="flex items-center justify-between px-4 py-3 hover:bg-muted rounded">\n            <span>Applications</span>\n            <ChevronRight size={20} />\n          </a>\n          <a className="flex items-center justify-between px-4 py-3 hover:bg-muted rounded">\n            <span>Documents</span>\n            <ChevronRight size={20} />\n          </a>\n          <div className="border-t my-2 pt-2">\n            <a className="flex items-center justify-between px-4 py-3 hover:bg-muted rounded">\n              <span>Settings</span>\n              <ChevronRight size={20} />\n            </a>\n            <a className="flex items-center justify-between px-4 py-3 hover:bg-muted rounded">\n              <span>Help</span>\n              <ChevronRight size={20} />\n            </a>\n          </div>\n        </nav>\n      </Drawer>\n    </>\n  );\n}',
          preview: (
            <>
              <button
                onClick={() => setMenuOpen(true)}
                className="p-2 hover:bg-muted rounded transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#005196] focus-visible:ring-offset-2"
                aria-label="Open menu"
              >
                <Menu size={24} />
              </button>
              <DrawerPreview
                isOpen={menuOpen}
                onClose={() => setMenuOpen(false)}
                placement="left"
                size="sm"
              >
                <nav className="space-y-1">
                  <a href="#" className="flex items-center justify-between px-4 py-3 hover:bg-muted rounded transition-colors text-foreground">
                    <span>Dashboard</span>
                    <ChevronRight size={20} />
                  </a>
                  <a href="#" className="flex items-center justify-between px-4 py-3 hover:bg-muted rounded transition-colors text-foreground">
                    <span>Applications</span>
                    <ChevronRight size={20} />
                  </a>
                  <a href="#" className="flex items-center justify-between px-4 py-3 hover:bg-muted rounded transition-colors text-foreground">
                    <span>Documents</span>
                    <ChevronRight size={20} />
                  </a>
                  <div className="border-t border-border my-2 pt-2">
                    <a href="#" className="flex items-center justify-between px-4 py-3 hover:bg-muted rounded transition-colors text-foreground">
                      <span>Settings</span>
                      <ChevronRight size={20} />
                    </a>
                    <a href="#" className="flex items-center justify-between px-4 py-3 hover:bg-muted rounded transition-colors text-foreground">
                      <span>Help</span>
                      <ChevronRight size={20} />
                    </a>
                  </div>
                </nav>
              </DrawerPreview>
            </>
          ),
        },
        {
          title: 'Settings Panel',
          description: 'Settings drawer with grouped configuration options.',
          code: 'import { Drawer } from \'@ux4g/react-core\';\nimport { Settings } from \'lucide-react\';\nimport { useState } from \'react\';\n\nfunction Example() {\n  const [isOpen, setIsOpen] = useState(false);\n\n  return (\n    <>\n      <button onClick={() => setIsOpen(true)}>\n        <Settings size={20} />\n        Settings\n      </button>\n      <Drawer\n        isOpen={isOpen}\n        onClose={() => setIsOpen(false)}\n        title="Application Settings"\n        placement="right"\n        size="lg"\n        footer={\n          <div className="flex gap-3 justify-end">\n            <button className="px-4 py-2 border border-border rounded">\n              Cancel\n            </button>\n            <button className="px-4 py-2 bg-[#005196] text-white rounded">\n              Save Changes\n            </button>\n          </div>\n        }\n      >\n        <div className="space-y-6">\n          <div>\n            <h3 className="text-lg font-semibold mb-4">Notifications</h3>\n            <label className="flex items-center justify-between mb-3">\n              <span>Email notifications</span>\n              <input type="checkbox" defaultChecked />\n            </label>\n            <label className="flex items-center justify-between mb-3">\n              <span>SMS notifications</span>\n              <input type="checkbox" />\n            </label>\n          </div>\n          <div className="border-t pt-6">\n            <h3 className="text-lg font-semibold mb-4">Privacy</h3>\n            <label className="flex items-center justify-between mb-3">\n              <span>Share analytics data</span>\n              <input type="checkbox" defaultChecked />\n            </label>\n            <label className="flex items-center justify-between mb-3">\n              <span>Public profile</span>\n              <input type="checkbox" />\n            </label>\n          </div>\n        </div>\n      </Drawer>\n    </>\n  );\n}',
          preview: (
            <>
              <button
                onClick={() => setSettingsOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded hover:bg-background transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#005196] focus-visible:ring-offset-2"
              >
                <Settings size={20} />
                Settings
              </button>
              <DrawerPreview
                isOpen={settingsOpen}
                onClose={() => setSettingsOpen(false)}
                title="Application Settings"
                placement="right"
                size="lg"
                footer={
                  <div className="flex gap-3 justify-end">
                    <button
                      onClick={() => setSettingsOpen(false)}
                      className="px-4 py-2 border border-border rounded hover:bg-background transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#005196] focus-visible:ring-offset-2"
                    >
                      Cancel
                    </button>
                    <button className="px-4 py-2 bg-[#005196] text-white rounded hover:bg-[#004178] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#005196] focus-visible:ring-offset-2">
                      Save Changes
                    </button>
                  </div>
                }
              >
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-4">Notifications</h3>
                    <label className="flex items-center justify-between mb-3">
                      <span className="text-muted-foreground">Email notifications</span>
                      <input type="checkbox" defaultChecked className="w-4 h-4 text-[#005196] focus:ring-2 focus:ring-[#005196]" />
                    </label>
                    <label className="flex items-center justify-between mb-3">
                      <span className="text-muted-foreground">SMS notifications</span>
                      <input type="checkbox" className="w-4 h-4 text-[#005196] focus:ring-2 focus:ring-[#005196]" />
                    </label>
                  </div>
                  <div className="border-t border-border pt-6">
                    <h3 className="text-lg font-semibold text-foreground mb-4">Privacy</h3>
                    <label className="flex items-center justify-between mb-3">
                      <span className="text-muted-foreground">Share analytics data</span>
                      <input type="checkbox" defaultChecked className="w-4 h-4 text-[#005196] focus:ring-2 focus:ring-[#005196]" />
                    </label>
                    <label className="flex items-center justify-between mb-3">
                      <span className="text-muted-foreground">Public profile</span>
                      <input type="checkbox" className="w-4 h-4 text-[#005196] focus:ring-2 focus:ring-[#005196]" />
                    </label>
                  </div>
                </div>
              </DrawerPreview>
            </>
          ),
        },
        {
          title: 'Multi-Step Wizard',
          description: 'Drawer containing a multi-step form wizard with progress indicator.',
          code: 'import { Drawer } from \'@ux4g/react-core\';\nimport { useState } from \'react\';\n\nfunction Example() {\n  const [isOpen, setIsOpen] = useState(false);\n  const [step, setStep] = useState(1);\n\n  return (\n    <>\n      <button onClick={() => setIsOpen(true)}>\n        Start Application\n      </button>\n      <Drawer\n        isOpen={isOpen}\n        onClose={() => setIsOpen(false)}\n        title="Application Wizard"\n        placement="right"\n        size="lg"\n        footer={\n          <div className="flex gap-3 justify-between">\n            <button\n              onClick={() => setStep(s => Math.max(1, s - 1))}\n              disabled={step === 1}\n              className="px-4 py-2 border border-border rounded"\n            >\n              Previous\n            </button>\n            <button\n              onClick={() => step === 3 ? setIsOpen(false) : setStep(s => s + 1)}\n              className="px-4 py-2 bg-[#005196] text-white rounded"\n            >\n              {step === 3 ? \'Submit\' : \'Next\'}\n            </button>\n          </div>\n        }\n      >\n        <div className="mb-8">\n          <div className="flex justify-between mb-2">\n            <span className={step >= 1 ? \'text-[#005196] font-medium\' : \'text-muted-foreground\'}>\n              Step 1\n            </span>\n            <span className={step >= 2 ? \'text-[#005196] font-medium\' : \'text-muted-foreground\'}>\n              Step 2\n            </span>\n            <span className={step >= 3 ? \'text-[#005196] font-medium\' : \'text-muted-foreground\'}>\n              Step 3\n            </span>\n          </div>\n          <div className="h-2 bg-gray-200 rounded-full">\n            <div\n              className="h-full bg-[#005196] rounded-full transition-all"\n              style={{ width: (step * 33.33) + \'%\' }}\n            />\n          </div>\n        </div>\n        {step === 1 && (\n          <div className="space-y-4">\n            <h3 className="text-lg font-semibold">Personal Information</h3>\n            <input type="text" placeholder="Full Name" className="w-full px-3 py-2 border rounded" />\n            <input type="email" placeholder="Email" className="w-full px-3 py-2 border rounded" />\n          </div>\n        )}\n        {step === 2 && (\n          <div className="space-y-4">\n            <h3 className="text-lg font-semibold">Address Details</h3>\n            <input type="text" placeholder="Street Address" className="w-full px-3 py-2 border rounded" />\n            <input type="text" placeholder="City" className="w-full px-3 py-2 border rounded" />\n          </div>\n        )}\n        {step === 3 && (\n          <div className="space-y-4">\n            <h3 className="text-lg font-semibold">Review & Submit</h3>\n            <p>Please review your information before submitting.</p>\n          </div>\n        )}\n      </Drawer>\n    </>\n  );\n}',
          preview: (
            <>
              <button
                onClick={() => {
                  setWizardStep(1);
                  setWizardOpen(true);
                }}
                className="px-4 py-2 bg-[#005196] text-white rounded hover:bg-[#004178] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#005196] focus-visible:ring-offset-2"
              >
                Start Application
              </button>
              <DrawerPreview
                isOpen={wizardOpen}
                onClose={() => setWizardOpen(false)}
                title="Application Wizard"
                placement="right"
                size="lg"
                footer={
                  <div className="flex gap-3 justify-between">
                    <button
                      onClick={() => setWizardStep(s => Math.max(1, s - 1))}
                      disabled={wizardStep === 1}
                      className={'px-4 py-2 border border-border rounded transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#005196] focus-visible:ring-offset-2 ' + (wizardStep === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-background')}
                    >
                      Previous
                    </button>
                    <button
                      onClick={() => wizardStep === 3 ? setWizardOpen(false) : setWizardStep(s => s + 1)}
                      className="px-4 py-2 bg-[#005196] text-white rounded hover:bg-[#004178] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#005196] focus-visible:ring-offset-2"
                    >
                      {wizardStep === 3 ? 'Submit' : 'Next'}
                    </button>
                  </div>
                }
              >
                <div className="mb-8">
                  <div className="flex justify-between mb-2">
                    <span className={wizardStep >= 1 ? 'text-[#005196] font-medium' : 'text-muted-foreground'}>
                      Step 1
                    </span>
                    <span className={wizardStep >= 2 ? 'text-[#005196] font-medium' : 'text-muted-foreground'}>
                      Step 2
                    </span>
                    <span className={wizardStep >= 3 ? 'text-[#005196] font-medium' : 'text-muted-foreground'}>
                      Step 3
                    </span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div
                      className="h-full bg-[#005196] rounded-full transition-all duration-300"
                      style={{ width: (wizardStep * 33.33) + '%' }}
                    />
                  </div>
                </div>
                {wizardStep === 1 && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">Personal Information</h3>
                    <input type="text" placeholder="Full Name" className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-[#005196]" />
                    <input type="email" placeholder="Email" className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-[#005196]" />
                  </div>
                )}
                {wizardStep === 2 && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">Address Details</h3>
                    <input type="text" placeholder="Street Address" className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-[#005196]" />
                    <input type="text" placeholder="City" className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-[#005196]" />
                  </div>
                )}
                {wizardStep === 3 && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">Review & Submit</h3>
                    <p className="text-muted-foreground">Please review your information before submitting.</p>
                    <div className="bg-background p-4 rounded border border-border">
                      <p className="text-sm text-muted-foreground">All information will be verified before approval.</p>
                    </div>
                  </div>
                )}
              </DrawerPreview>
            </>
          ),
        },
      ]}

      reactCode={{
        component: 'import React, { useEffect, useRef } from \'react\';\nimport { createPortal } from \'react-dom\';\nimport { cn } from \'../../utils/cn\';\nimport { drawerVariants } from \'./drawer.variants\';\nimport { DrawerProps } from \'./Drawer.types\';\nimport { X } from \'lucide-react\';\n\nexport const Drawer = ({\n  isOpen,\n  onClose,\n  placement = \'right\',\n  size = \'md\',\n  title,\n  children,\n  showOverlay = true,\n  closeOnOverlayClick = true,\n  closeOnEscape = true,\n  header,\n  footer,\n  className,\n  ...props\n}: DrawerProps) => {\n  const drawerRef = useRef<HTMLDivElement>(null);\n  const previousFocusRef = useRef<HTMLElement | null>(null);\n\n  useEffect(() => {\n    if (isOpen) {\n      previousFocusRef.current = document.activeElement as HTMLElement;\n      \n      const focusableElements = drawerRef.current?.querySelectorAll(\n        \'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])\'\n      );\n      if (focusableElements && focusableElements.length > 0) {\n        (focusableElements[0] as HTMLElement).focus();\n      }\n\n      document.body.style.overflow = \'hidden\';\n    } else {\n      document.body.style.overflow = \'\';\n      previousFocusRef.current?.focus();\n    }\n\n    return () => {\n      document.body.style.overflow = \'\';\n    };\n  }, [isOpen]);\n\n  useEffect(() => {\n    if (!isOpen || !closeOnEscape) return;\n\n    const handleEscape = (event: KeyboardEvent) => {\n      if (event.key === \'Escape\') {\n        onClose();\n      }\n    };\n\n    document.addEventListener(\'keydown\', handleEscape);\n    return () => document.removeEventListener(\'keydown\', handleEscape);\n  }, [isOpen, closeOnEscape, onClose]);\n\n  useEffect(() => {\n    if (!isOpen) return;\n\n    const handleFocusTrap = (event: KeyboardEvent) => {\n      if (event.key !== \'Tab\') return;\n\n      const focusableElements = drawerRef.current?.querySelectorAll(\n        \'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])\'\n      );\n      \n      if (!focusableElements || focusableElements.length === 0) return;\n\n      const firstElement = focusableElements[0] as HTMLElement;\n      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;\n\n      if (event.shiftKey) {\n        if (document.activeElement === firstElement) {\n          event.preventDefault();\n          lastElement.focus();\n        }\n      } else {\n        if (document.activeElement === lastElement) {\n          event.preventDefault();\n          firstElement.focus();\n        }\n      }\n    };\n\n    document.addEventListener(\'keydown\', handleFocusTrap);\n    return () => document.removeEventListener(\'keydown\', handleFocusTrap);\n  }, [isOpen]);\n\n  if (!isOpen) return null;\n\n  const handleOverlayClick = () => {\n    if (closeOnOverlayClick) {\n      onClose();\n    }\n  };\n\n  return createPortal(\n    <div\n      className="fixed inset-0 z-50"\n      role="dialog"\n      aria-modal="true"\n      aria-labelledby={title ? \'drawer-title\' : undefined}\n    >\n      {showOverlay && (\n        <div\n          className="absolute inset-0 bg-black/50 transition-opacity duration-300"\n          onClick={handleOverlayClick}\n          aria-hidden="true"\n        />\n      )}\n      <div\n        ref={drawerRef}\n        className={cn(\n          drawerVariants({ placement, size }),\n          className\n        )}\n        {...props}\n      >\n        {(title || header) && (\n          <div className="flex items-center justify-between px-6 py-4 border-b border-border shrink-0">\n            {header || (\n              <h2 id="drawer-title" className="text-lg font-semibold text-foreground">\n                {title}\n              </h2>\n            )}\n            <button\n              onClick={onClose}\n              className="p-2 text-muted-foreground hover:text-muted-foreground hover:bg-muted rounded transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#005196] focus-visible:ring-offset-2"\n              aria-label="Close drawer"\n            >\n              <X size={20} />\n            </button>\n          </div>\n        )}\n        {!title && !header && (\n          <button\n            onClick={onClose}\n            className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-muted-foreground hover:bg-muted rounded transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#005196] focus-visible:ring-offset-2 z-10"\n            aria-label="Close drawer"\n          >\n            <X size={20} />\n          </button>\n        )}\n        <div className="flex-1 overflow-y-auto p-6">\n          {children}\n        </div>\n        {footer && (\n          <div className="px-6 py-4 border-t border-border shrink-0">\n            {footer}\n          </div>\n        )}\n      </div>\n    </div>,\n    document.body\n  );\n};',
        types: 'export interface DrawerProps extends React.HTMLAttributes<HTMLDivElement> {\n  isOpen: boolean;\n  onClose: () => void;\n  placement?: \'left\' | \'right\' | \'top\' | \'bottom\';\n  size?: \'sm\' | \'md\' | \'lg\' | \'full\';\n  title?: string;\n  children: React.ReactNode;\n  showOverlay?: boolean;\n  closeOnOverlayClick?: boolean;\n  closeOnEscape?: boolean;\n  header?: React.ReactNode;\n  footer?: React.ReactNode;\n}',
        variants: 'import { cva, type VariantProps } from \'class-variance-authority\';\n\nexport const drawerVariants = cva(\n  [\n    \'fixed bg-card shadow-xl flex flex-col\',\n    \'transition-transform duration-300 ease-in-out\',\n  ],\n  {\n    variants: {\n      placement: {\n        left: [\n          \'left-0 top-0 bottom-0\',\n          \'animate-slide-in-left\',\n        ],\n        right: [\n          \'right-0 top-0 bottom-0\',\n          \'animate-slide-in-right\',\n        ],\n        top: [\n          \'top-0 left-0 right-0\',\n          \'animate-slide-in-top\',\n        ],\n        bottom: [\n          \'bottom-0 left-0 right-0\',\n          \'animate-slide-in-bottom\',\n        ],\n      },\n      size: {\n        sm: \'[.placement-left_&]:w-80 [.placement-right_&]:w-80 [.placement-top_&]:h-64 [.placement-bottom_&]:h-64\',\n        md: \'[.placement-left_&]:w-96 [.placement-right_&]:w-96 [.placement-top_&]:h-80 [.placement-bottom_&]:h-80\',\n        lg: \'[.placement-left_&]:w-[600px] [.placement-right_&]:w-[600px] [.placement-top_&]:h-[600px] [.placement-bottom_&]:h-[600px]\',\n        full: \'[.placement-left_&]:w-full [.placement-right_&]:w-full [.placement-top_&]:h-full [.placement-bottom_&]:h-full\',\n      },\n    },\n    compoundVariants: [\n      {\n        placement: \'left\',\n        size: \'sm\',\n        className: \'w-80\',\n      },\n      {\n        placement: \'left\',\n        size: \'md\',\n        className: \'w-96\',\n      },\n      {\n        placement: \'left\',\n        size: \'lg\',\n        className: \'w-[600px]\',\n      },\n      {\n        placement: \'left\',\n        size: \'full\',\n        className: \'w-full\',\n      },\n      {\n        placement: \'right\',\n        size: \'sm\',\n        className: \'w-80\',\n      },\n      {\n        placement: \'right\',\n        size: \'md\',\n        className: \'w-96\',\n      },\n      {\n        placement: \'right\',\n        size: \'lg\',\n        className: \'w-[600px]\',\n      },\n      {\n        placement: \'right\',\n        size: \'full\',\n        className: \'w-full\',\n      },\n      {\n        placement: \'top\',\n        size: \'sm\',\n        className: \'h-64\',\n      },\n      {\n        placement: \'top\',\n        size: \'md\',\n        className: \'h-80\',\n      },\n      {\n        placement: \'top\',\n        size: \'lg\',\n        className: \'h-[600px]\',\n      },\n      {\n        placement: \'top\',\n        size: \'full\',\n        className: \'h-full\',\n      },\n      {\n        placement: \'bottom\',\n        size: \'sm\',\n        className: \'h-64\',\n      },\n      {\n        placement: \'bottom\',\n        size: \'md\',\n        className: \'h-80\',\n      },\n      {\n        placement: \'bottom\',\n        size: \'lg\',\n        className: \'h-[600px]\',\n      },\n      {\n        placement: \'bottom\',\n        size: \'full\',\n        className: \'h-full\',\n      },\n    ],\n    defaultVariants: {\n      placement: \'right\',\n      size: \'md\',\n    },\n  }\n);\n\nexport type DrawerVariantProps = VariantProps<typeof drawerVariants>;',
      }}

      angularCode={{
        component: 'import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from \'@angular/core\';\nimport { trigger, state, style, transition, animate } from \'@angular/animations\';\n\ntype DrawerPlacement = \'left\' | \'right\' | \'top\' | \'bottom\';\ntype DrawerSize = \'sm\' | \'md\' | \'lg\' | \'full\';\n\n@Component({\n  selector: \'ux4g-drawer\',\n  template: `\n    <div *ngIf="isOpen" class="drawer-container" role="dialog" [attr.aria-modal]="true">\n      <div\n        *ngIf="showOverlay"\n        class="drawer-overlay"\n        (click)="handleOverlayClick()"\n        [@fadeIn]\n      ></div>\n      <div\n        class="drawer-panel"\n        [class]="getDrawerClasses()"\n        [@slideIn]="placement"\n        (keydown.escape)="handleEscape()"\n      >\n        <div *ngIf="title || header" class="drawer-header">\n          <ng-container *ngIf="header; else defaultHeader">\n            <ng-content select="[header]"></ng-content>\n          </ng-container>\n          <ng-template #defaultHeader>\n            <h2 class="drawer-title">{{ title }}</h2>\n          </ng-template>\n          <button\n            class="drawer-close"\n            (click)="close()"\n            aria-label="Close drawer"\n          >\n            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">\n              <path d="M18 6L6 18M6 6l12 12" stroke-width="2" stroke-linecap="round"/>\n            </svg>\n          </button>\n        </div>\n        <div class="drawer-body">\n          <ng-content></ng-content>\n        </div>\n        <div *ngIf="footer" class="drawer-footer">\n          <ng-content select="[footer]"></ng-content>\n        </div>\n      </div>\n    </div>\n  `,\n  styleUrls: [\'./drawer.component.css\'],\n  animations: [\n    trigger(\'fadeIn\', [\n      transition(\':enter\', [\n        style({ opacity: 0 }),\n        animate(\'300ms\', style({ opacity: 1 }))\n      ]),\n      transition(\':leave\', [\n        animate(\'300ms\', style({ opacity: 0 }))\n      ])\n    ]),\n    trigger(\'slideIn\', [\n      state(\'left\', style({ transform: \'translateX(0)\' })),\n      state(\'right\', style({ transform: \'translateX(0)\' })),\n      state(\'top\', style({ transform: \'translateY(0)\' })),\n      state(\'bottom\', style({ transform: \'translateY(0)\' })),\n      transition(\'void => left\', [\n        style({ transform: \'translateX(-100%)\' }),\n        animate(\'300ms ease-out\')\n      ]),\n      transition(\'void => right\', [\n        style({ transform: \'translateX(100%)\' }),\n        animate(\'300ms ease-out\')\n      ]),\n      transition(\'void => top\', [\n        style({ transform: \'translateY(-100%)\' }),\n        animate(\'300ms ease-out\')\n      ]),\n      transition(\'void => bottom\', [\n        style({ transform: \'translateY(100%)\' }),\n        animate(\'300ms ease-out\')\n      ]),\n    ])\n  ]\n})\nexport class DrawerComponent implements OnInit, OnDestroy {\n  @Input() isOpen = false;\n  @Input() placement: DrawerPlacement = \'right\';\n  @Input() size: DrawerSize = \'md\';\n  @Input() title?: string;\n  @Input() showOverlay = true;\n  @Input() closeOnOverlayClick = true;\n  @Input() closeOnEscape = true;\n  @Input() header?: boolean;\n  @Input() footer?: boolean;\n  \n  @Output() closed = new EventEmitter<void>();\n\n  private previousFocus?: HTMLElement;\n\n  ngOnInit(): void {\n    if (this.isOpen) {\n      this.onOpen();\n    }\n  }\n\n  ngOnDestroy(): void {\n    this.restoreFocus();\n    document.body.style.overflow = \'\';\n  }\n\n  ngOnChanges(): void {\n    if (this.isOpen) {\n      this.onOpen();\n    } else {\n      this.onClose();\n    }\n  }\n\n  private onOpen(): void {\n    this.previousFocus = document.activeElement as HTMLElement;\n    document.body.style.overflow = \'hidden\';\n  }\n\n  private onClose(): void {\n    document.body.style.overflow = \'\';\n    this.restoreFocus();\n  }\n\n  private restoreFocus(): void {\n    if (this.previousFocus) {\n      this.previousFocus.focus();\n    }\n  }\n\n  getDrawerClasses(): string {\n    const placementClass = \'drawer-\' + this.placement;\n    const sizeClass = \'drawer-\' + this.size;\n    return [\'ux4g-drawer\', placementClass, sizeClass]\n      .filter(Boolean)\n      .join(\' \');\n  }\n\n  close(): void {\n    this.closed.emit();\n  }\n\n  handleOverlayClick(): void {\n    if (this.closeOnOverlayClick) {\n      this.close();\n    }\n  }\n\n  handleEscape(): void {\n    if (this.closeOnEscape) {\n      this.close();\n    }\n  }\n}',
        module: 'import { NgModule } from \'@angular/core\';\nimport { CommonModule } from \'@angular/common\';\nimport { BrowserAnimationsModule } from \'@angular/platform-browser/animations\';\nimport { DrawerComponent } from \'./drawer.component\';\nimport { OverlayModule } from \'@angular/cdk/overlay\';\nimport { PortalModule } from \'@angular/cdk/portal\';\n\n@NgModule({\n  declarations: [DrawerComponent],\n  imports: [\n    CommonModule,\n    BrowserAnimationsModule,\n    OverlayModule,\n    PortalModule\n  ],\n  exports: [DrawerComponent]\n})\nexport class DrawerModule { }',
        types: 'export type DrawerPlacement = \'left\' | \'right\' | \'top\' | \'bottom\';\nexport type DrawerSize = \'sm\' | \'md\' | \'lg\' | \'full\';\n\nexport interface DrawerConfig {\n  isOpen: boolean;\n  placement?: DrawerPlacement;\n  size?: DrawerSize;\n  title?: string;\n  showOverlay?: boolean;\n  closeOnOverlayClick?: boolean;\n  closeOnEscape?: boolean;\n}',
      }}

      webComponentsCode={{
        package: "npm install @ux4g/web-components @ux4g/tokens",
        component: "import '@ux4g/web-components';\n// Registers <ux4g-drawer> custom element",
        html: "<ux4g-drawer variant=\"primary\" size=\"md\"><!-- Drawer --></ux4g-drawer>",
      }}
      comparisons={[
        {
          system: 'Material UI (Google)',
          component: 'Drawer',
          variants: 'temporary, permanent, persistent',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Comprehensive',
          link: 'https://mui.com/material-ui/react-drawer/',
        },
        {
          system: 'Ant Design (Alibaba)',
          component: 'Drawer',
          variants: 'left, right, top, bottom',
          accessibility: 'WCAG 2.0 AA',
          documentation: 'Good',
          link: 'https://ant.design/components/drawer',
        },
        {
          system: 'GOV.UK Design System',
          component: 'N/A (uses Modal)',
          variants: 'N/A',
          accessibility: 'WCAG 2.1 AAA',
          documentation: 'Limited',
          link: 'https://design-system.service.gov.uk/',
        },
        {
          system: 'Chakra UI',
          component: 'Drawer',
          variants: 'left, right, top, bottom, full',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Comprehensive',
          link: 'https://chakra-ui.com/docs/components/drawer',
        },
        {
          system: 'Radix UI',
          component: 'Dialog (adaptable)',
          variants: 'Custom (unstyled)',
          accessibility: 'WCAG 2.1 AAA',
          documentation: 'Comprehensive',
          link: 'https://www.radix-ui.com/primitives/docs/components/dialog',
        },
        {
          system: 'Atlassian Design System',
          component: 'Drawer',
          variants: 'narrow, medium, wide, full',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Good',
          link: 'https://atlassian.design/components/drawer/',
        },
      ]}

      accessibility={{
        wcagLevel: 'WCAG 2.1 Level AA Compliant',
        features: [
          'role="dialog" and aria-modal="true" for proper screen reader context (WCAG 4.1.2)',
          'Focus trap keeps keyboard navigation within drawer when open (WCAG 2.4.3)',
          'Focus automatically moved to first focusable element on open (WCAG 2.4.3)',
          'Focus returned to trigger element on close (WCAG 2.4.3)',
          'Escape key closes drawer for keyboard users (WCAG 2.1.1)',
          'aria-labelledby references drawer title for context (WCAG 1.3.1)',
          'Overlay click closes drawer for mouse users (WCAG 2.5.1)',
          'Close button has visible focus indicator with 2px ring (WCAG 2.4.7)',
          'Body scroll prevented when drawer open to avoid confusion (WCAG 2.4.1)',
          'Color contrast ratios meet 4.5:1 for text content (WCAG 1.4.3)',
          'Animations respect prefers-reduced-motion (WCAG 2.3.3)',
        ],
        keyboardSupport: [
          { key: 'Tab', action: 'Move focus to next focusable element within drawer' },
          { key: 'Shift + Tab', action: 'Move focus to previous focusable element within drawer' },
          { key: 'Escape', action: 'Close drawer and return focus to trigger' },
          { key: 'Enter', action: 'Activate focused button or link' },
        ],
        screenReader: [
          'Announces drawer as dialog with proper role',
          'Reads drawer title from aria-labelledby',
          'Announces modal state with aria-modal="true"',
          'Close button labeled "Close drawer" for context',
          'Content changes announced as they occur',
          'Focus changes announced clearly',
        ],
      }}

      tokens={{
        file: '/tokens/components/drawer.json',
        mappings: [
          { property: 'Width (Small)', token: 'drawer.size.sm.width', value: '320px' },
          { property: 'Width (Medium)', token: 'drawer.size.md.width', value: '384px' },
          { property: 'Width (Large)', token: 'drawer.size.lg.width', value: '600px' },
          { property: 'Height (Small)', token: 'drawer.size.sm.height', value: '256px' },
          { property: 'Height (Medium)', token: 'drawer.size.md.height', value: '320px' },
          { property: 'Height (Large)', token: 'drawer.size.lg.height', value: '600px' },
          { property: 'Overlay Background', token: 'drawer.overlay.background', value: 'rgba(0, 0, 0, 0.5)' },
          { property: 'Panel Background', token: 'drawer.panel.background', value: '#FFFFFF' },
          { property: 'Shadow', token: 'drawer.shadow', value: '0 8px 32px rgba(0, 0, 0, 0.12)' },
          { property: 'Slide Duration', token: 'drawer.animation.duration', value: '300ms' },
          { property: 'Slide Easing', token: 'drawer.animation.easing', value: 'ease-in-out' },
          { property: 'Header Border', token: 'drawer.header.borderColor', value: '#E5E7EB (Gray 200)' },
          { property: 'Header Padding', token: 'drawer.header.padding', value: '16px 24px' },
          { property: 'Body Padding', token: 'drawer.body.padding', value: '24px' },
          { property: 'Focus Ring Color', token: 'accessibility.focusRing.color', value: '#005196 (Navy 500)' },
          { property: 'Focus Ring Width', token: 'accessibility.focusRing.width', value: '2px' },
        ],
      }}

      useCases={[
        {
          title: 'Filter Applications List',
          description: 'Government portal allowing citizens to filter permit applications by status, date range, department, and type. Left-side drawer keeps filters accessible while viewing results.',
          scenario: 'User needs to narrow down 500+ applications to find specific submissions',
          implementation: 'placement="left", size="sm", with checkboxes and date inputs',
        },
        {
          title: 'Mobile Navigation Menu',
          description: 'Responsive government website navigation that slides in from left on mobile devices. Contains primary links, user account, and language selector.',
          scenario: 'Mobile user needs to access main site sections and account settings',
          implementation: 'placement="left", size="sm", triggered by hamburger menu icon',
        },
        {
          title: 'Document Preview Panel',
          description: 'Case management system showing PDF preview of uploaded documents in right drawer while maintaining view of case details. Includes download and print actions.',
          scenario: 'Caseworker reviewing submitted documents without leaving case page',
          implementation: 'placement="right", size="lg", with embedded PDF viewer and action buttons',
        },
        {
          title: 'Application Settings Panel',
          description: 'User preferences and notification settings accessible from any page. Groups settings by category with immediate save or cancel actions.',
          scenario: 'User wants to adjust notification preferences mid-workflow',
          implementation: 'placement="right", size="md", with footer containing Cancel/Save buttons',
        },
        {
          title: 'Advanced Search Filters',
          description: 'Public records search with extensive filtering options including date ranges, categories, keywords, and geographic filters. Results update as filters applied.',
          scenario: 'Researcher needs granular control over search parameters for public records',
          implementation: 'placement="left", size="md", with collapsible filter groups and apply button',
        },
        {
          title: 'Multi-Step License Application',
          description: 'Business license application wizard broken into Personal Info, Business Details, Documentation, and Review steps. Progress indicator shows current step.',
          scenario: 'Business owner completing complex licensing application over multiple sessions',
          implementation: 'placement="right", size="lg", with step progress, Previous/Next navigation in footer',
        },
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
                  Do use Drawer when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Side panel content that overlays the page</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Mobile navigation menus</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Filter or settings panels</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Detail views without full page navigation</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-red-700 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-700 text-sm">✗</span>
                  Don't use Drawer when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Critical confirmations — use Dialog</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Full-page content — use a page</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Brief messages — use Toast</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Content that needs to stay visible — use sidebar layout</li>
                </ul>
              </div>
            </div>
          </section>


          {/* Do / Don't */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Do / Don&apos;t</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-2 border-green-200 dark:border-green-800 rounded-lg overflow-hidden">
                <div className="bg-green-50 px-4 py-2 text-sm font-bold text-green-800">✓ Do</div>
                <div className="p-4">
                  <div className="flex gap-2 mb-3"><div className="w-16 bg-muted/50 rounded p-2 text-[10px] text-muted-foreground border border-border">Filters</div><div className="flex-1 bg-muted/20 rounded p-2 text-[10px] text-muted-foreground">Main content</div></div>
                  <p className="text-sm text-muted-foreground">Use drawers for side panel content like filters and mobile navigation.</p>
                </div>
              </div>
              <div className="border-2 border-red-200 dark:border-red-800 rounded-lg overflow-hidden">
                <div className="bg-red-50 px-4 py-2 text-sm font-bold text-red-800">✗ Don&apos;t</div>
                <div className="p-4">
                  <div className="w-full bg-muted/50 rounded p-2 text-[10px] text-center text-muted-foreground border border-border mb-3">Full-page overlay for filters</div>
                  <p className="text-sm text-muted-foreground">Don&apos;t use drawers for critical confirmations — use Dialog instead.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Interactive Playground */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">Interactive Playground</h2>
            <p className="text-sm text-muted-foreground mb-6">Adjust the controls to preview different Drawer configurations in real time.</p>
            <DrawerPlayground />
          </section>

          {/* Related components */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Related Components</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <a href="/components/modal" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Modal</h3>
                <p className="text-sm text-muted-foreground">For centered overlays</p>
              </a>
              <a href="/components/dialog" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Dialog</h3>
                <p className="text-sm text-muted-foreground">For confirmations</p>
              </a>
              <a href="/components/menu" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Menu</h3>
                <p className="text-sm text-muted-foreground">For dropdown menus</p>
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
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Added left/right/top/bottom positions</li>
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Added backdrop click to close</li>
                  </ul>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-sm font-mono font-bold text-primary">v1.0.0</span>
                    <span className="text-xs text-muted-foreground">October 2025</span>
                  </div>
                  <ul className="space-y-1">
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Initial release with left position</li>
                  </ul>
                </div>
            </div>
          </section>

          {/* Research */}
          <section className="bg-card rounded-lg border border-border p-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">Research on this component</h2>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <h3 className="font-semibold text-foreground mb-1 text-sm">Drawer vs Modal</h3>
                <p className="text-sm text-muted-foreground">Drawers are preferred for supplementary content that users may reference while working (NNG).</p>
              </div>
            </div>
          </section>
        </>
      }
    />
  );
}
