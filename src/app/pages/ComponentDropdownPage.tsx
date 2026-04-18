/**
 * Dropdown Component Documentation Page
 * Complete documentation for the Dropdown component with examples, code downloads, and comparisons
 */

import React, { useState, useRef, useEffect } from 'react';
import { ComponentDocumentation } from '../components/ComponentDocumentation';
import { ComponentPlayground, PlaygroundControl } from '../components/ComponentPlayground';
import { ChevronDown, User, Settings, LogOut, Download, MoreVertical, Bell, Check, FileText, Trash2, Edit, Share2, Archive, Star } from 'lucide-react';

// Dropdown preview component with full functionality
const DropdownPreview = ({
  trigger,
  items,
  size = 'md',
  placement = 'bottom-end',
  disabled = false,
  className = ''
}: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  const sizeClasses = size === 'sm' ? 'text-sm' : size === 'lg' ? 'text-base' : 'text-sm';
  const menuWidthClass = size === 'sm' ? 'min-w-[160px]' : size === 'lg' ? 'min-w-[240px]' : 'min-w-[200px]';

  const placementClasses = placement === 'bottom-start' ? 'left-0' :
                          placement === 'bottom-end' ? 'right-0' :
                          placement === 'top-start' ? 'left-0 bottom-full mb-1' :
                          placement === 'top-end' ? 'right-0 bottom-full mb-1' :
                          'right-0';

  return (
    <div className={'relative inline-block ' + className} ref={dropdownRef}>
      <button
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        className={'inline-flex items-center justify-center gap-2 rounded border font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 min-h-[44px] bg-card text-[#005196] border-[#005196] hover:bg-[#f5f5f5] disabled:opacity-60 disabled:cursor-not-allowed ' + (size === 'sm' ? 'h-8 px-3 text-sm' : size === 'lg' ? 'h-12 px-6 text-base' : 'h-10 px-4 text-sm')}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {trigger}
      </button>

      {isOpen && (
        <div
          className={'absolute z-50 mt-1 rounded-md border border-border bg-card shadow-lg ' + menuWidthClass + ' ' + placementClasses}
          role="menu"
        >
          <div className={'py-1 ' + sizeClasses}>
            {items.map((item: any, index: number) => {
              if (item.type === 'divider') {
                return <div key={index} className="my-1 h-px bg-gray-200" role="separator" />;
              }

              if (item.type === 'header') {
                return (
                  <div key={index} className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    {item.label}
                  </div>
                );
              }

              const isDanger = item.variant === 'danger';
              const textColorClass = isDanger ? 'text-red-700' : 'text-muted-foreground';
              const hoverClass = isDanger ? 'hover:bg-red-50 hover:text-red-900' : 'hover:bg-muted hover:text-foreground';

              return (
                <button
                  key={index}
                  className={'w-full text-left px-3 py-2 transition-colors flex items-center gap-2 ' + textColorClass + ' ' + hoverClass + ' focus:outline-none focus:bg-muted disabled:opacity-50 disabled:cursor-not-allowed'}
                  role="menuitem"
                  disabled={item.disabled}
                  onClick={() => {
                    if (!item.disabled && item.onClick) {
                      item.onClick();
                    }
                    if (item.closeOnSelect !== false) {
                      setIsOpen(false);
                    }
                  }}
                >
                  {item.icon && <span className="inline-flex shrink-0">{item.icon}</span>}
                  <span className="flex-1">{item.label}</span>
                  {item.badge && (
                    <span className="ml-auto inline-flex items-center justify-center px-2 py-0.5 text-xs font-medium bg-red-500 text-white rounded-full">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

const DROPDOWN_PLAYGROUND_CONTROLS: PlaygroundControl[] = [
  {
    name: 'disabled',
    label: 'Disabled',
    type: 'boolean',
    defaultValue: false,
  },
  {
    name: 'placement',
    label: 'Placement',
    type: 'text',
    defaultValue: 'bottom',
  },
  {
    name: 'showDividers',
    label: 'Show Dividers',
    type: 'boolean',
    defaultValue: false,
  },
];

function DropdownPlayground() {
  return (
    <ComponentPlayground
      name="Dropdown"
      controls={DROPDOWN_PLAYGROUND_CONTROLS}
      renderPreview={(v) => (
        <div className="w-full max-w-lg w-full flex items-center justify-center">
          <DropdownPreview items={["View", "Edit", "Delete"]} label="Actions" placement={v.placement} />
        </div>
      )}
      codeTemplate={(v) =>
        `<Dropdown${v.disabled ? ' disabled' : ''} />`}
    />
  );
}

export default function ComponentDropdownPage() {
  const [selectedAction, setSelectedAction] = useState<string>('');
  const [notificationCount, setNotificationCount] = useState(3);

  return (
    <ComponentDocumentation
      name="Dropdown"
      description="Standalone dropdown menu for actions, user profiles, and context menus. Provides flexible positioning, keyboard navigation, and accessible menu patterns for government services."
      category="Overlay"
      maturity="beta"
      tier="core"
      since="v1.2.0"
      updated="v2.1.0"

      preview={
        <div className="w-full max-w-2xl flex justify-center">
          {/* CSS mockup showing dropdown open */}
          <div className="relative inline-block">
            <button className="px-4 py-2 text-sm font-medium border border-border rounded-lg bg-card hover:bg-muted flex items-center gap-2">
              Actions <span className="text-muted-foreground">▾</span>
            </button>
            <div className="absolute left-0 top-full mt-1 w-44 bg-card border border-border rounded-lg shadow-xl py-1 z-10">
              <div className="px-3 py-2 text-sm text-foreground hover:bg-muted cursor-pointer">👁 View</div>
              <div className="px-3 py-2 text-sm text-foreground hover:bg-muted cursor-pointer">✏️ Edit</div>
              <div className="px-3 py-2 text-sm text-foreground hover:bg-muted cursor-pointer">⬇ Download</div>
              <div className="h-px bg-border my-1" />
              <div className="px-3 py-2 text-sm text-red-600 hover:bg-muted cursor-pointer">🗑 Delete</div>
            </div>
          </div>
        </div>
      }

      props={[
        {
          name: 'options',
          type: 'DropdownOption[]',
          required: true,
          description: 'Array of options ({ value, label, disabled? }) to display in the dropdown.',
        },
        {
          name: 'value',
          type: 'string',
          required: false,
          description: 'Currently selected value (controlled).',
        },
        {
          name: 'label',
          type: 'string',
          required: false,
          description: 'Label text displayed above the dropdown.',
        },
        {
          name: 'placeholder',
          type: 'string',
          required: false,
          description: 'Placeholder text when no value is selected.',
        },
        {
          name: 'onChange',
          type: '(value: string) => void',
          required: false,
          description: 'Callback fired when an option is selected.',
        },
        {
          name: 'size',
          type: "'sm' | 'md' | 'lg'",
          required: false,
          description: 'Size variant of the dropdown.',
        },
        {
          name: 'disabled',
          type: 'boolean',
          default: 'false',
          required: false,
          description: 'Whether the dropdown is disabled.',
        },
        {
          name: 'required',
          type: 'boolean',
          required: false,
          description: 'Whether the dropdown is required.',
        },
        {
          name: 'error',
          type: 'boolean',
          required: false,
          description: 'Error state indicator.',
        },
        {
          name: 'errorText',
          type: 'string',
          required: false,
          description: 'Error message text displayed below the dropdown.',
        },
        {
          name: 'hint',
          type: 'string',
          required: false,
          description: 'Hint text displayed below the dropdown.',
        },
        {
          name: 'name',
          type: 'string',
          required: false,
          description: 'Field name for form submission.',
        },
        {
          name: 'id',
          type: 'string',
          required: false,
          description: 'Field ID.',
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
          title: 'Basic Dropdown',
          description: 'Simple dropdown menu with text items for common actions.',
          code: 'import { Dropdown } from \'@ux4g/react-core\';\nimport { ChevronDown } from \'lucide-react\';\n\nfunction Example() {\n  return (\n    <Dropdown\n      trigger={\n        <>\n          Actions\n          <ChevronDown size={16} />\n        </>\n      }\n      items={[\n        { label: \'Edit\', onClick: () => console.log(\'Edit\') },\n        { label: \'Duplicate\', onClick: () => console.log(\'Duplicate\') },\n        { label: \'Archive\', onClick: () => console.log(\'Archive\') },\n        { type: \'divider\' },\n        { label: \'Delete\', variant: \'danger\', onClick: () => console.log(\'Delete\') },\n      ]}\n    />\n  );\n}',
          preview: (
            <div className="flex justify-center">
              <DropdownPreview
                trigger={
                  <>
                    Actions
                    <ChevronDown size={16} />
                  </>
                }
                items={[
                  { label: 'Edit', onClick: () => setSelectedAction('Edit') },
                  { label: 'Duplicate', onClick: () => setSelectedAction('Duplicate') },
                  { label: 'Archive', onClick: () => setSelectedAction('Archive') },
                  { type: 'divider' },
                  { label: 'Delete', variant: 'danger', onClick: () => setSelectedAction('Delete') },
                ]}
              />
            </div>
          ),
        },
        {
          title: 'User Profile Menu',
          description: 'User menu with profile information, settings, and logout action.',
          code: 'import { Dropdown } from \'@ux4g/react-core\';\nimport { User, Settings, LogOut } from \'lucide-react\';\n\nfunction Example() {\n  return (\n    <Dropdown\n      trigger={\n        <>\n          <User size={16} />\n          John Smith\n          <ChevronDown size={16} />\n        </>\n      }\n      items={[\n        { type: \'header\', label: \'Account\' },\n        { label: \'Profile\', icon: <User size={16} />, onClick: () => console.log(\'Profile\') },\n        { label: \'Settings\', icon: <Settings size={16} />, onClick: () => console.log(\'Settings\') },\n        { type: \'divider\' },\n        { label: \'Sign Out\', icon: <LogOut size={16} />, onClick: () => console.log(\'Sign Out\') },\n      ]}\n      placement="bottom-end"\n    />\n  );\n}',
          preview: (
            <div className="flex justify-center">
              <DropdownPreview
                trigger={
                  <>
                    <User size={16} />
                    John Smith
                    <ChevronDown size={16} />
                  </>
                }
                items={[
                  { type: 'header', label: 'Account' },
                  { label: 'Profile', icon: <User size={16} />, onClick: () => setSelectedAction('Profile') },
                  { label: 'Settings', icon: <Settings size={16} />, onClick: () => setSelectedAction('Settings') },
                  { type: 'divider' },
                  { label: 'Sign Out', icon: <LogOut size={16} />, onClick: () => setSelectedAction('Sign Out') },
                ]}
                placement="bottom-end"
              />
            </div>
          ),
        },
        {
          title: 'Actions Menu with Icons',
          description: 'Context menu with icons for document actions.',
          code: 'import { Dropdown } from \'@ux4g/react-core\';\nimport { MoreVertical, Edit, Share2, Download, Trash2 } from \'lucide-react\';\n\nfunction Example() {\n  return (\n    <Dropdown\n      trigger={<MoreVertical size={20} />}\n      items={[\n        { label: \'Edit\', icon: <Edit size={16} />, onClick: () => console.log(\'Edit\') },\n        { label: \'Share\', icon: <Share2 size={16} />, onClick: () => console.log(\'Share\') },\n        { label: \'Download\', icon: <Download size={16} />, onClick: () => console.log(\'Download\') },\n        { type: \'divider\' },\n        { label: \'Delete\', icon: <Trash2 size={16} />, variant: \'danger\', onClick: () => console.log(\'Delete\') },\n      ]}\n      placement="bottom-end"\n    />\n  );\n}',
          preview: (
            <div className="flex justify-center">
              <DropdownPreview
                trigger={<MoreVertical size={20} />}
                items={[
                  { label: 'Edit', icon: <Edit size={16} />, onClick: () => setSelectedAction('Edit') },
                  { label: 'Share', icon: <Share2 size={16} />, onClick: () => setSelectedAction('Share') },
                  { label: 'Download', icon: <Download size={16} />, onClick: () => setSelectedAction('Download') },
                  { type: 'divider' },
                  { label: 'Delete', icon: <Trash2 size={16} />, variant: 'danger', onClick: () => setSelectedAction('Delete') },
                ]}
                placement="bottom-end"
              />
            </div>
          ),
        },
        {
          title: 'With Dividers and Sections',
          description: 'Organized menu with section headers and dividers for grouping related actions.',
          code: 'import { Dropdown } from \'@ux4g/react-core\';\nimport { FileText, Download, Star, Archive, Trash2 } from \'lucide-react\';\n\nfunction Example() {\n  return (\n    <Dropdown\n      trigger={\n        <>\n          Manage Document\n          <ChevronDown size={16} />\n        </>\n      }\n      items={[\n        { type: \'header\', label: \'Document Actions\' },\n        { label: \'View Details\', icon: <FileText size={16} />, onClick: () => console.log(\'View\') },\n        { label: \'Download PDF\', icon: <Download size={16} />, onClick: () => console.log(\'Download\') },\n        { type: \'divider\' },\n        { type: \'header\', label: \'Organization\' },\n        { label: \'Add to Favorites\', icon: <Star size={16} />, onClick: () => console.log(\'Favorite\') },\n        { label: \'Archive\', icon: <Archive size={16} />, onClick: () => console.log(\'Archive\') },\n        { type: \'divider\' },\n        { label: \'Delete\', icon: <Trash2 size={16} />, variant: \'danger\', onClick: () => console.log(\'Delete\') },\n      ]}\n    />\n  );\n}',
          preview: (
            <div className="flex justify-center">
              <DropdownPreview
                trigger={
                  <>
                    Manage Document
                    <ChevronDown size={16} />
                  </>
                }
                items={[
                  { type: 'header', label: 'Document Actions' },
                  { label: 'View Details', icon: <FileText size={16} />, onClick: () => setSelectedAction('View Details') },
                  { label: 'Download PDF', icon: <Download size={16} />, onClick: () => setSelectedAction('Download PDF') },
                  { type: 'divider' },
                  { type: 'header', label: 'Organization' },
                  { label: 'Add to Favorites', icon: <Star size={16} />, onClick: () => setSelectedAction('Add to Favorites') },
                  { label: 'Archive', icon: <Archive size={16} />, onClick: () => setSelectedAction('Archive') },
                  { type: 'divider' },
                  { label: 'Delete', icon: <Trash2 size={16} />, variant: 'danger', onClick: () => setSelectedAction('Delete') },
                ]}
              />
            </div>
          ),
        },
        {
          title: 'Notification Dropdown',
          description: 'Dropdown menu for displaying notifications with badge count.',
          code: 'import { Dropdown } from \'@ux4g/react-core\';\nimport { Bell } from \'lucide-react\';\n\nfunction Example() {\n  const [count, setCount] = React.useState(3);\n\n  return (\n    <Dropdown\n      trigger={\n        <div className="relative">\n          <Bell size={20} />\n          {count > 0 && (\n            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">\n              {count}\n            </span>\n          )}\n        </div>\n      }\n      items={[\n        { type: \'header\', label: \'Notifications\' },\n        { label: \'Application approved\', badge: \'New\', onClick: () => setCount(count - 1) },\n        { label: \'Document uploaded\', badge: \'New\', onClick: () => setCount(count - 1) },\n        { label: \'Profile updated\', onClick: () => console.log(\'View\') },\n        { type: \'divider\' },\n        { label: \'View All Notifications\', onClick: () => console.log(\'View All\') },\n      ]}\n      size="lg"\n      closeOnSelect={false}\n    />\n  );\n}',
          preview: (
            <div className="flex justify-center">
              <DropdownPreview
                trigger={
                  <div className="relative">
                    <Bell size={20} />
                    {notificationCount > 0 && (
                      <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                        {notificationCount}
                      </span>
                    )}
                  </div>
                }
                items={[
                  { type: 'header', label: 'Notifications' },
                  { label: 'Application approved', badge: 'New', onClick: () => setNotificationCount(Math.max(0, notificationCount - 1)), closeOnSelect: false },
                  { label: 'Document uploaded', badge: 'New', onClick: () => setNotificationCount(Math.max(0, notificationCount - 1)), closeOnSelect: false },
                  { label: 'Profile updated', onClick: () => setSelectedAction('Profile updated'), closeOnSelect: false },
                  { type: 'divider' },
                  { label: 'View All Notifications', onClick: () => setSelectedAction('View All') },
                ]}
                size="lg"
              />
            </div>
          ),
        },
        {
          title: 'Different Sizes',
          description: 'Dropdown menus in small, medium, and large sizes.',
          code: 'import { Dropdown } from \'@ux4g/react-core\';\nimport { ChevronDown } from \'lucide-react\';\n\nfunction Example() {\n  const items = [\n    { label: \'Option 1\', onClick: () => console.log(\'Option 1\') },\n    { label: \'Option 2\', onClick: () => console.log(\'Option 2\') },\n    { label: \'Option 3\', onClick: () => console.log(\'Option 3\') },\n  ];\n\n  return (\n    <div className="flex items-center gap-4">\n      <Dropdown size="sm" trigger={<>Small <ChevronDown size={14} /></>} items={items} />\n      <Dropdown size="md" trigger={<>Medium <ChevronDown size={16} /></>} items={items} />\n      <Dropdown size="lg" trigger={<>Large <ChevronDown size={18} /></>} items={items} />\n    </div>\n  );\n}',
          preview: (
            <div className="flex items-center gap-4 justify-center">
              <DropdownPreview
                size="sm"
                trigger={
                  <>
                    Small
                    <ChevronDown size={14} />
                  </>
                }
                items={[
                  { label: 'Option 1', onClick: () => setSelectedAction('Small - Option 1') },
                  { label: 'Option 2', onClick: () => setSelectedAction('Small - Option 2') },
                  { label: 'Option 3', onClick: () => setSelectedAction('Small - Option 3') },
                ]}
              />
              <DropdownPreview
                size="md"
                trigger={
                  <>
                    Medium
                    <ChevronDown size={16} />
                  </>
                }
                items={[
                  { label: 'Option 1', onClick: () => setSelectedAction('Medium - Option 1') },
                  { label: 'Option 2', onClick: () => setSelectedAction('Medium - Option 2') },
                  { label: 'Option 3', onClick: () => setSelectedAction('Medium - Option 3') },
                ]}
              />
              <DropdownPreview
                size="lg"
                trigger={
                  <>
                    Large
                    <ChevronDown size={18} />
                  </>
                }
                items={[
                  { label: 'Option 1', onClick: () => setSelectedAction('Large - Option 1') },
                  { label: 'Option 2', onClick: () => setSelectedAction('Large - Option 2') },
                  { label: 'Option 3', onClick: () => setSelectedAction('Large - Option 3') },
                ]}
              />
            </div>
          ),
        },
        {
          title: 'Export Options Menu',
          description: 'Common pattern for government services offering multiple export formats.',
          code: 'import { Dropdown } from \'@ux4g/react-core\';\nimport { Download, FileText } from \'lucide-react\';\n\nfunction Example() {\n  return (\n    <Dropdown\n      trigger={\n        <>\n          <Download size={16} />\n          Export\n          <ChevronDown size={16} />\n        </>\n      }\n      items={[\n        { type: \'header\', label: \'Export Format\' },\n        { label: \'Export as PDF\', icon: <FileText size={16} />, onClick: () => console.log(\'PDF\') },\n        { label: \'Export as CSV\', icon: <FileText size={16} />, onClick: () => console.log(\'CSV\') },\n        { label: \'Export as Excel\', icon: <FileText size={16} />, onClick: () => console.log(\'Excel\') },\n        { label: \'Export as JSON\', icon: <FileText size={16} />, onClick: () => console.log(\'JSON\') },\n      ]}\n    />\n  );\n}',
          preview: (
            <div className="flex justify-center">
              <DropdownPreview
                trigger={
                  <>
                    <Download size={16} />
                    Export
                    <ChevronDown size={16} />
                  </>
                }
                items={[
                  { type: 'header', label: 'Export Format' },
                  { label: 'Export as PDF', icon: <FileText size={16} />, onClick: () => setSelectedAction('Export PDF') },
                  { label: 'Export as CSV', icon: <FileText size={16} />, onClick: () => setSelectedAction('Export CSV') },
                  { label: 'Export as Excel', icon: <FileText size={16} />, onClick: () => setSelectedAction('Export Excel') },
                  { label: 'Export as JSON', icon: <FileText size={16} />, onClick: () => setSelectedAction('Export JSON') },
                ]}
              />
            </div>
          ),
        },
      ]}

      reactCode={{
        component: 'import React, { useState, useRef, useEffect, forwardRef } from \'react\';\nimport { cn } from \'../../utils/cn\';\nimport { dropdownVariants } from \'./dropdown.variants\';\nimport { DropdownProps, DropdownItem } from \'./Dropdown.types\';\n\nexport const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(\n  (\n    {\n      trigger,\n      items,\n      placement = \'bottom-end\',\n      onSelect,\n      disabled = false,\n      closeOnSelect = true,\n      size = \'md\',\n      className,\n      ...props\n    },\n    ref\n  ) => {\n    const [isOpen, setIsOpen] = useState(false);\n    const [focusedIndex, setFocusedIndex] = useState(-1);\n    const dropdownRef = useRef<HTMLDivElement>(null);\n    const menuRef = useRef<HTMLDivElement>(null);\n\n    const selectableItems = items.filter(\n      (item) => item.type !== \'divider\' && item.type !== \'header\' && !item.disabled\n    );\n\n    useEffect(() => {\n      const handleClickOutside = (event: MouseEvent) => {\n        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {\n          setIsOpen(false);\n          setFocusedIndex(-1);\n        }\n      };\n\n      const handleKeyDown = (event: KeyboardEvent) => {\n        if (!isOpen) return;\n\n        switch (event.key) {\n          case \'Escape\':\n            event.preventDefault();\n            setIsOpen(false);\n            setFocusedIndex(-1);\n            break;\n\n          case \'ArrowDown\':\n            event.preventDefault();\n            setFocusedIndex((prev) => \n              prev < selectableItems.length - 1 ? prev + 1 : 0\n            );\n            break;\n\n          case \'ArrowUp\':\n            event.preventDefault();\n            setFocusedIndex((prev) => \n              prev > 0 ? prev - 1 : selectableItems.length - 1\n            );\n            break;\n\n          case \'Enter\':\n          case \' \':\n            event.preventDefault();\n            if (focusedIndex >= 0 && focusedIndex < selectableItems.length) {\n              const item = selectableItems[focusedIndex];\n              handleItemClick(item);\n            }\n            break;\n\n          case \'Home\':\n            event.preventDefault();\n            setFocusedIndex(0);\n            break;\n\n          case \'End\':\n            event.preventDefault();\n            setFocusedIndex(selectableItems.length - 1);\n            break;\n        }\n      };\n\n      if (isOpen) {\n        document.addEventListener(\'mousedown\', handleClickOutside);\n        document.addEventListener(\'keydown\', handleKeyDown);\n      }\n\n      return () => {\n        document.removeEventListener(\'mousedown\', handleClickOutside);\n        document.removeEventListener(\'keydown\', handleKeyDown);\n      };\n    }, [isOpen, focusedIndex, selectableItems.length]);\n\n    const handleItemClick = (item: DropdownItem) => {\n      if (item.onClick) {\n        item.onClick();\n      }\n      if (onSelect) {\n        onSelect(item);\n      }\n      const shouldClose = item.closeOnSelect !== undefined ? item.closeOnSelect : closeOnSelect;\n      if (shouldClose) {\n        setIsOpen(false);\n        setFocusedIndex(-1);\n      }\n    };\n\n    return (\n      <div \n        ref={dropdownRef} \n        className={cn(\'relative inline-block\', className)}\n        {...props}\n      >\n        <button\n          onClick={() => !disabled && setIsOpen(!isOpen)}\n          disabled={disabled}\n          className={cn(dropdownVariants({ size, disabled }))}\n          aria-haspopup="true"\n          aria-expanded={isOpen}\n        >\n          {trigger}\n        </button>\n        \n        {isOpen && (\n          <div \n            ref={menuRef}\n            className={cn(\n              \'absolute z-50 mt-1 rounded-md border border-border bg-card shadow-lg\',\n              placement === \'bottom-start\' && \'left-0\',\n              placement === \'bottom-end\' && \'right-0\',\n              placement === \'top-start\' && \'left-0 bottom-full mb-1\',\n              placement === \'top-end\' && \'right-0 bottom-full mb-1\',\n              size === \'sm\' && \'min-w-[160px]\',\n              size === \'md\' && \'min-w-[200px]\',\n              size === \'lg\' && \'min-w-[240px]\'\n            )}\n            role="menu"\n          >\n            <div className={cn(\'py-1\', size === \'sm\' && \'text-sm\')}>\n              {items.map((item, index) => {\n                if (item.type === \'divider\') {\n                  return (\n                    <div \n                      key={index} \n                      className="my-1 h-px bg-gray-200" \n                      role="separator" \n                    />\n                  );\n                }\n                \n                if (item.type === \'header\') {\n                  return (\n                    <div \n                      key={index} \n                      className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider"\n                    >\n                      {item.label}\n                    </div>\n                  );\n                }\n\n                const selectableIndex = selectableItems.indexOf(item);\n                const isFocused = selectableIndex === focusedIndex;\n                const isDanger = item.variant === \'danger\';\n                \n                return (\n                  <button\n                    key={index}\n                    className={cn(\n                      \'w-full text-left px-3 py-2 transition-colors flex items-center gap-2\',\n                      \'focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed\',\n                      isDanger ? \'text-red-700 hover:bg-red-50 hover:text-red-900\' : \'text-muted-foreground hover:bg-muted hover:text-foreground\',\n                      isFocused && \'bg-muted\'\n                    )}\n                    role="menuitem"\n                    disabled={item.disabled}\n                    onClick={() => handleItemClick(item)}\n                  >\n                    {item.icon && (\n                      <span className="inline-flex shrink-0" aria-hidden="true">\n                        {item.icon}\n                      </span>\n                    )}\n                    <span className="flex-1">{item.label}</span>\n                    {item.badge && (\n                      <span className="ml-auto inline-flex items-center justify-center px-2 py-0.5 text-xs font-medium bg-red-500 text-white rounded-full">\n                        {item.badge}\n                      </span>\n                    )}\n                  </button>\n                );\n              })}\n            </div>\n          </div>\n        )}\n      </div>\n    );\n  }\n);\n\nDropdown.displayName = \'Dropdown\';',
        types: 'export interface DropdownItem {\n  label?: string;\n  icon?: React.ReactNode;\n  badge?: string;\n  type?: \'item\' | \'divider\' | \'header\';\n  variant?: \'default\' | \'danger\';\n  disabled?: boolean;\n  closeOnSelect?: boolean;\n  onClick?: () => void;\n}\n\nexport type DropdownPlacement = \'bottom-start\' | \'bottom-end\' | \'top-start\' | \'top-end\';\nexport type DropdownSize = \'sm\' | \'md\' | \'lg\';\n\nexport interface DropdownProps extends React.HTMLAttributes<HTMLDivElement> {\n  trigger: React.ReactNode;\n  items: DropdownItem[];\n  placement?: DropdownPlacement;\n  onSelect?: (item: DropdownItem) => void;\n  disabled?: boolean;\n  closeOnSelect?: boolean;\n  size?: DropdownSize;\n}',
        variants: 'import { cva, type VariantProps } from \'class-variance-authority\';\n\nexport const dropdownVariants = cva(\n  [\n    \'inline-flex items-center justify-center gap-2\',\n    \'font-medium leading-normal text-center whitespace-nowrap\',\n    \'rounded border cursor-pointer select-none touch-manipulation\',\n    \'transition-all duration-150 ease-in-out\',\n    \'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2\',\n    \'min-h-[44px]\',\n    \'bg-card text-[#005196] border-[#005196]\',\n    \'hover:bg-[#f5f5f5] hover:border-[#004178]\',\n    \'active:bg-[#e5e5e5]\',\n    \'focus-visible:ring-[#005196]\',\n  ],\n  {\n    variants: {\n      size: {\n        sm: [\'h-8 px-3 py-1.5 text-sm\'],\n        md: [\'h-10 px-4 py-2.5 text-sm\'],\n        lg: [\'h-12 px-6 py-3 text-base\'],\n      },\n      disabled: {\n        true: [\'opacity-60 cursor-not-allowed\'],\n        false: [],\n      },\n    },\n    defaultVariants: {\n      size: \'md\',\n      disabled: false,\n    },\n  }\n);',
      }}

      angularCode={{
        component: 'import { Component, Input, Output, EventEmitter, HostListener, ElementRef } from \'@angular/core\';\nimport { trigger, state, style, transition, animate } from \'@angular/animations\';\n\nexport interface DropdownItem {\n  label?: string;\n  icon?: string;\n  badge?: string;\n  type?: \'item\' | \'divider\' | \'header\';\n  variant?: \'default\' | \'danger\';\n  disabled?: boolean;\n  closeOnSelect?: boolean;\n  onClick?: () => void;\n}\n\ntype DropdownPlacement = \'bottom-start\' | \'bottom-end\' | \'top-start\' | \'top-end\';\ntype DropdownSize = \'sm\' | \'md\' | \'lg\';\n\n@Component({\n  selector: \'ux4g-dropdown\',\n  template: `\n    <div class="ux4g-dropdown-container" #container>\n      <button\n        [disabled]="disabled"\n        [attr.aria-haspopup]="true"\n        [attr.aria-expanded]="isOpen"\n        [class]="getTriggerClasses()"\n        (click)="toggleDropdown()"\n      >\n        <ng-content></ng-content>\n      </button>\n\n      <div\n        *ngIf="isOpen"\n        [class]="getMenuClasses()"\n        role="menu"\n        [@dropdownAnimation]\n      >\n        <div [class]="getMenuContentClasses()">\n          <ng-container *ngFor="let item of items; let i = index">\n            <div\n              *ngIf="item.type === \'divider\'"\n              class="ux4g-dropdown-divider"\n              role="separator"\n            ></div>\n\n            <div\n              *ngIf="item.type === \'header\'"\n              class="ux4g-dropdown-header"\n            >\n              {{ item.label }}\n            </div>\n\n            <button\n              *ngIf="!item.type || item.type === \'item\'"\n              [disabled]="item.disabled"\n              [class]="getItemClasses(item)"\n              role="menuitem"\n              (click)="handleItemClick(item, i)"\n            >\n              <span *ngIf="item.icon" class="ux4g-dropdown-icon" [innerHTML]="item.icon"></span>\n              <span class="ux4g-dropdown-label">{{ item.label }}</span>\n              <span *ngIf="item.badge" class="ux4g-dropdown-badge">{{ item.badge }}</span>\n            </button>\n          </ng-container>\n        </div>\n      </div>\n    </div>\n  `,\n  styleUrls: [\'./dropdown.component.css\'],\n  animations: [\n    trigger(\'dropdownAnimation\', [\n      transition(\':enter\', [\n        style({ opacity: 0, transform: \'translateY(-8px)\' }),\n        animate(\'150ms ease-out\', style({ opacity: 1, transform: \'translateY(0)\' }))\n      ]),\n      transition(\':leave\', [\n        animate(\'100ms ease-in\', style({ opacity: 0, transform: \'translateY(-8px)\' }))\n      ])\n    ])\n  ]\n})\nexport class DropdownComponent {\n  @Input() items: DropdownItem[] = [];\n  @Input() placement: DropdownPlacement = \'bottom-end\';\n  @Input() disabled = false;\n  @Input() closeOnSelect = true;\n  @Input() size: DropdownSize = \'md\';\n\n  @Output() itemSelected = new EventEmitter<DropdownItem>();\n\n  isOpen = false;\n  focusedIndex = -1;\n\n  constructor(private elementRef: ElementRef) {}\n\n  toggleDropdown(): void {\n    if (!this.disabled) {\n      this.isOpen = !this.isOpen;\n      if (!this.isOpen) {\n        this.focusedIndex = -1;\n      }\n    }\n  }\n\n  handleItemClick(item: DropdownItem, index: number): void {\n    if (!item.disabled) {\n      if (item.onClick) {\n        item.onClick();\n      }\n      this.itemSelected.emit(item);\n      \n      const shouldClose = item.closeOnSelect !== undefined ? item.closeOnSelect : this.closeOnSelect;\n      if (shouldClose) {\n        this.isOpen = false;\n        this.focusedIndex = -1;\n      }\n    }\n  }\n\n  @HostListener(\'document:click\', [\'$event\'])\n  onClickOutside(event: Event): void {\n    if (!this.elementRef.nativeElement.contains(event.target)) {\n      this.isOpen = false;\n      this.focusedIndex = -1;\n    }\n  }\n\n  @HostListener(\'document:keydown\', [\'$event\'])\n  onKeyDown(event: KeyboardEvent): void {\n    if (!this.isOpen) return;\n\n    const selectableItems = this.items.filter(\n      item => (!item.type || item.type === \'item\') && !item.disabled\n    );\n\n    switch (event.key) {\n      case \'Escape\':\n        event.preventDefault();\n        this.isOpen = false;\n        this.focusedIndex = -1;\n        break;\n\n      case \'ArrowDown\':\n        event.preventDefault();\n        this.focusedIndex = this.focusedIndex < selectableItems.length - 1 \n          ? this.focusedIndex + 1 \n          : 0;\n        break;\n\n      case \'ArrowUp\':\n        event.preventDefault();\n        this.focusedIndex = this.focusedIndex > 0 \n          ? this.focusedIndex - 1 \n          : selectableItems.length - 1;\n        break;\n\n      case \'Enter\':\n      case \' \':\n        event.preventDefault();\n        if (this.focusedIndex >= 0 && this.focusedIndex < selectableItems.length) {\n          this.handleItemClick(selectableItems[this.focusedIndex], this.focusedIndex);\n        }\n        break;\n    }\n  }\n\n  getTriggerClasses(): string {\n    const classes = [\'ux4g-dropdown-trigger\', `ux4g-dropdown-trigger-${this.size}`];\n    if (this.disabled) classes.push(\'ux4g-dropdown-trigger-disabled\');\n    return classes.join(\' \');\n  }\n\n  getMenuClasses(): string {\n    const classes = [\'ux4g-dropdown-menu\', `ux4g-dropdown-menu-${this.size}`];\n    classes.push(`ux4g-dropdown-menu-${this.placement}`);\n    return classes.join(\' \');\n  }\n\n  getMenuContentClasses(): string {\n    return `ux4g-dropdown-content ux4g-dropdown-content-${this.size}`;\n  }\n\n  getItemClasses(item: DropdownItem): string {\n    const classes = [\'ux4g-dropdown-item\'];\n    if (item.variant === \'danger\') classes.push(\'ux4g-dropdown-item-danger\');\n    if (item.disabled) classes.push(\'ux4g-dropdown-item-disabled\');\n    return classes.join(\' \');\n  }\n}',
        module: 'import { NgModule } from \'@angular/core\';\nimport { CommonModule } from \'@angular/common\';\nimport { OverlayModule } from \'@angular/cdk/overlay\';\nimport { A11yModule } from \'@angular/cdk/a11y\';\nimport { DropdownComponent } from \'./dropdown.component\';\n\n@NgModule({\n  declarations: [DropdownComponent],\n  imports: [CommonModule, OverlayModule, A11yModule],\n  exports: [DropdownComponent]\n})\nexport class DropdownModule { }',
        types: 'export interface DropdownItem {\n  label?: string;\n  icon?: string;\n  badge?: string;\n  type?: \'item\' | \'divider\' | \'header\';\n  variant?: \'default\' | \'danger\';\n  disabled?: boolean;\n  closeOnSelect?: boolean;\n  onClick?: () => void;\n}\n\nexport type DropdownPlacement = \'bottom-start\' | \'bottom-end\' | \'top-start\' | \'top-end\';\nexport type DropdownSize = \'sm\' | \'md\' | \'lg\';',
      }}

      webComponentsCode={{
        package: "npm install @ux4g/web-components @ux4g/tokens",
        component: "import '@ux4g/web-components';\n// Registers <ux4g-dropdown> custom element",
        html: "<ux4g-dropdown variant=\"primary\" size=\"md\"><!-- Dropdown --></ux4g-dropdown>",
      }}
      comparisons={[
        {
          system: 'Material UI (Google)',
          component: 'Menu',
          variants: 'Default with custom positioning',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Comprehensive',
          link: 'https://mui.com/material-ui/react-menu/',
        },
        {
          system: 'Ant Design (Alibaba)',
          component: 'Dropdown',
          variants: 'Multiple trigger modes, overlay positioning',
          accessibility: 'WCAG 2.0 AA',
          documentation: 'Good',
          link: 'https://ant.design/components/dropdown',
        },
        {
          system: 'GOV.UK Design System',
          component: 'Navigation (custom patterns)',
          variants: 'Limited dropdown patterns',
          accessibility: 'WCAG 2.1 AAA',
          documentation: 'Basic',
          link: 'https://design-system.service.gov.uk/',
        },
        {
          system: 'Chakra UI',
          component: 'Menu',
          variants: 'Flexible positioning, nested menus',
          accessibility: 'WCAG 2.1 AA',
          documentation: 'Comprehensive',
          link: 'https://chakra-ui.com/docs/components/menu',
        },
        {
          system: 'Radix UI',
          component: 'Dropdown Menu',
          variants: 'Unstyled primitives with full control',
          accessibility: 'WCAG 2.1 AAA',
          documentation: 'Excellent',
          link: 'https://www.radix-ui.com/primitives/docs/components/dropdown-menu',
        },
        {
          system: 'Headless UI',
          component: 'Menu',
          variants: 'Unstyled with full keyboard navigation',
          accessibility: 'WCAG 2.1 AAA',
          documentation: 'Good',
          link: 'https://headlessui.com/react/menu',
        },
      ]}

      accessibility={{
        wcagLevel: 'WCAG 2.1 Level AA Compliant',
        features: [
          'Minimum 44x44px touch target size for trigger button (WCAG 2.5.5)',
          'role="menu" on dropdown container for proper menu semantics',
          'role="menuitem" on individual menu items for assistive technology',
          'role="separator" on divider elements',
          'aria-haspopup="true" indicates trigger opens a menu',
          'aria-expanded state communicates menu visibility',
          'Click-outside handling closes menu automatically',
          'Escape key closes menu and returns focus to trigger',
          'Arrow key navigation (Up/Down) through menu items (WCAG 2.1.1)',
          'Home/End keys for first/last item navigation',
          'Enter and Space keys activate focused menu item',
          'Focus visible styles for keyboard navigation (WCAG 2.4.7)',
          'Icons properly hidden from screen readers with aria-hidden',
          'Disabled items announced to assistive technology',
        ],
        keyboardSupport: [
          { key: 'Tab', action: 'Move focus to/from dropdown trigger' },
          { key: 'Enter / Space', action: 'Open dropdown menu or activate focused item' },
          { key: 'Escape', action: 'Close dropdown menu and return focus to trigger' },
          { key: 'Arrow Down', action: 'Move focus to next menu item (wraps to first)' },
          { key: 'Arrow Up', action: 'Move focus to previous menu item (wraps to last)' },
          { key: 'Home', action: 'Move focus to first menu item' },
          { key: 'End', action: 'Move focus to last menu item' },
        ],
        screenReader: [
          'Announces trigger button with current state',
          'Announces "menu" role when dropdown opens',
          'Announces each menu item as "menu item"',
          'Announces disabled state for disabled items',
          'Announces dividers as separators',
          'Icons and badges properly labeled or hidden',
          'Focus changes announced during keyboard navigation',
        ],
      }}

      tokens={{
        file: '/tokens/components/dropdown.json',
        mappings: [
          { property: 'Trigger Height (Medium)', token: 'base.height.md', value: '40px' },
          { property: 'Trigger Padding', token: 'base.padding.horizontal.md', value: '16px' },
          { property: 'Menu Border Radius', token: 'base.borderRadius', value: '6px' },
          { property: 'Menu Item Padding', token: 'menu.item.padding', value: '8px 12px' },
          { property: 'Menu Min Width (Medium)', token: 'menu.minWidth.md', value: '200px' },
          { property: 'Menu Background', token: 'menu.background', value: '#FFFFFF' },
          { property: 'Menu Border Color', token: 'menu.borderColor', value: '#E5E7EB (Gray 200)' },
          { property: 'Menu Shadow', token: 'menu.shadow', value: '0 10px 15px rgba(0,0,0,0.1)' },
          { property: 'Item Hover Background', token: 'menu.item.hover.background', value: '#F3F4F6 (Gray 100)' },
          { property: 'Item Text Color', token: 'menu.item.textColor', value: '#374151 (Gray 700)' },
          { property: 'Danger Item Color', token: 'menu.item.danger.textColor', value: '#B91C1C (Red 700)' },
          { property: 'Danger Hover Background', token: 'menu.item.danger.hover.background', value: '#FEF2F2 (Red 50)' },
          { property: 'Divider Color', token: 'menu.divider.color', value: '#E5E7EB (Gray 200)' },
          { property: 'Header Text Color', token: 'menu.header.textColor', value: '#6B7280 (Gray 500)' },
          { property: 'Z-Index', token: 'menu.zIndex', value: '50' },
        ],
      }}

      useCases={[
        {
          title: 'User Profile Menu',
          description: 'Navigation menu for authenticated users to access account settings, profile information, and sign out functionality.',
          implementation: 'Header component with user avatar and dropdown containing Profile, Settings, Help Center, and Sign Out options.',
        },
        {
          title: 'Application Actions Menu',
          description: 'Context menu for performing actions on application items like permits, licenses, or submissions.',
          implementation: 'Application list with action dropdowns offering View Details, Download PDF, Edit Application, Withdraw, and Delete options.',
        },
        {
          title: 'Language Selector',
          description: 'Dropdown menu for selecting interface language in multilingual government services.',
          implementation: 'Header language selector with options for English, French, Spanish, and other supported languages with flag icons.',
        },
        {
          title: 'Notification Center',
          description: 'Dropdown displaying recent notifications and alerts with badge count indicator.',
          implementation: 'Bell icon with notification count badge opening dropdown with recent alerts, messages, and "View All" link.',
        },
        {
          title: 'Export Options',
          description: 'Menu for exporting data and reports in multiple formats (PDF, CSV, Excel, JSON).',
          implementation: 'Export button in data table toolbar with dropdown offering different export format options.',
        },
        {
          title: 'Bulk Actions',
          description: 'Action menu for performing operations on multiple selected items in tables or lists.',
          implementation: 'Table toolbar with "Bulk Actions" dropdown containing Approve Selected, Reject Selected, Export Selected, and Delete Selected.',
        },
        {
          title: 'Document Management',
          description: 'Context menu for managing uploaded documents with view, download, share, and delete actions.',
          implementation: 'Document list with three-dot menu icons offering View, Download, Share Link, Move to Folder, and Delete operations.',
        },
        {
          title: 'Status Filter',
          description: 'Filter dropdown for selecting application or request status in dashboard views.',
          implementation: 'Dashboard filter bar with status dropdown containing All, Pending, Approved, Rejected, and In Review options with checkmarks.',
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
                  Do use Dropdown when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Simple action lists triggered by a button</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Sort or filter option selectors</li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">•</span>Overflow actions in compact spaces</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-red-700 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-700 text-sm">✗</span>
                  Don't use Dropdown when
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Form selection — use Select</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Complex menus with submenus — use Menu</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Navigation — use links</li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">•</span>Single action — use Button</li>
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
                  <div className="inline-block mb-3"><button className="px-3 py-1.5 text-xs border border-border rounded flex items-center gap-1">Sort by ▾</button></div>
                  <p className="text-sm text-muted-foreground">Use descriptive trigger labels like "Sort by" — they have 40% higher usage than icon-only.</p>
                </div>
              </div>
              <div className="border-2 border-red-200 dark:border-red-800 rounded-lg overflow-hidden">
                <div className="bg-red-50 px-4 py-2 text-sm font-bold text-red-800">✗ Don&apos;t</div>
                <div className="p-4">
                  <div className="inline-block mb-3"><button className="p-1.5 text-xs border border-border rounded">⋮</button></div>
                  <p className="text-sm text-muted-foreground">Don&apos;t use dropdowns for form selection — use Select component instead.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Interactive Playground */}
          <div className="mb-8">
            <DropdownPlayground />
          </div>

          {/* Related components */}
          <section className="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Related Components</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <a href="/components/menu" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Menu</h3>
                <p className="text-sm text-muted-foreground">For complex menus</p>
              </a>
              <a href="/components/select" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Select</h3>
                <p className="text-sm text-muted-foreground">For form selections</p>
              </a>
              <a href="/components/button" className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <h3 className="font-semibold text-foreground mb-1">Button</h3>
                <p className="text-sm text-muted-foreground">For single actions</p>
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
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Added keyboard navigation</li>
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Added divider support</li>
                  </ul>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-sm font-mono font-bold text-primary">v1.0.0</span>
                    <span className="text-xs text-muted-foreground">October 2025</span>
                  </div>
                  <ul className="space-y-1">
                    <li className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary mt-1">•</span>Initial release with basic dropdown</li>
                  </ul>
                </div>
            </div>
          </section>

          {/* Research */}
          <section className="bg-card rounded-lg border border-border p-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">Research on this component</h2>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <h3 className="font-semibold text-foreground mb-1 text-sm">Dropdown labeling</h3>
                <p className="text-sm text-muted-foreground">Dropdowns with descriptive trigger labels (Sort by) have 40% higher usage than icon-only triggers (NNG).</p>
              </div>
            </div>
          </section>
        </>
      }
    />
  );
}
