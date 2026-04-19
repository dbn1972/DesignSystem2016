/**
 * Persistent left sidebar navigation for component documentation pages.
 * Shows all components grouped by category. Highlights the current page.
 * Includes search/filter and category count badges.
 */

import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { Search } from 'lucide-react';

const COMPONENT_CATEGORIES = [
  {
    label: 'Form Elements',
    items: [
      { name: 'Button', slug: 'button' },
      { name: 'Input', slug: 'input' },
      { name: 'Select', slug: 'select' },
      { name: 'Checkbox', slug: 'checkbox' },
      { name: 'Radio', slug: 'radio' },
      { name: 'Switch', slug: 'switch' },
      { name: 'Textarea', slug: 'textarea' },
      { name: 'Field', slug: 'field' },
      { name: 'Label', slug: 'label' },
      { name: 'HintText', slug: 'hint-text' },
      { name: 'ErrorText', slug: 'error-text' },
      { name: 'DatePicker', slug: 'date-picker' },
      { name: 'Autocomplete', slug: 'autocomplete' },
      { name: 'FileUpload', slug: 'file-upload' },
      { name: 'OTPInput', slug: 'otp-input' },
    ],
  },
  {
    label: 'Data Display',
    items: [
      { name: 'Table', slug: 'table' },
      { name: 'DataGrid', slug: 'data-grid' },
      { name: 'Card', slug: 'card' },
      { name: 'Badge', slug: 'badge' },
      { name: 'Tag', slug: 'tag' },
      { name: 'Avatar', slug: 'avatar' },
      { name: 'Statistic', slug: 'statistic' },
      { name: 'List', slug: 'list' },
      { name: 'DescriptionList', slug: 'description-list' },
      { name: 'Timeline', slug: 'timeline' },
      { name: 'CodeBlock', slug: 'code-block' },
      { name: 'Skeleton', slug: 'skeleton' },
      { name: 'EmptyState', slug: 'empty-state' },
    ],
  },
  {
    label: 'Feedback',
    items: [
      { name: 'Alert', slug: 'alert' },
      { name: 'Toast', slug: 'toast' },
      { name: 'Modal', slug: 'modal' },
      { name: 'Dialog', slug: 'dialog' },
      { name: 'Tooltip', slug: 'tooltip' },
      { name: 'Popover', slug: 'popover' },
      { name: 'Progress', slug: 'progress' },
      { name: 'Spinner', slug: 'spinner' },
      { name: 'Drawer', slug: 'drawer' },
    ],
  },
  {
    label: 'Navigation',
    items: [
      { name: 'Tabs', slug: 'tabs' },
      { name: 'Breadcrumb', slug: 'breadcrumb' },
      { name: 'Pagination', slug: 'pagination' },
      { name: 'Menu', slug: 'menu' },
      { name: 'Dropdown', slug: 'dropdown' },
      { name: 'Stepper', slug: 'stepper' },
      { name: 'Header', slug: 'header' },
      { name: 'Footer', slug: 'footer' },
      { name: 'BackToTop', slug: 'back-to-top' },
    ],
  },
  {
    label: 'Layout',
    items: [
      { name: 'Container', slug: 'container' },
      { name: 'Flex', slug: 'flex' },
      { name: 'Grid', slug: 'grid' },
      { name: 'Stack', slug: 'stack' },
      { name: 'Center', slug: 'center' },
      { name: 'Spacer', slug: 'spacer' },
      { name: 'Section', slug: 'section' },
      { name: 'AspectRatio', slug: 'aspect-ratio' },
      { name: 'Divider', slug: 'divider' },
      { name: 'ShowHide', slug: 'show-hide' },
    ],
  },
  {
    label: 'India-Specific',
    items: [
      { name: 'AadhaarInput', slug: 'aadhaar-input' },
      { name: 'PANCardInput', slug: 'pan-card-input' },
      { name: 'AddressAutocomplete', slug: 'address-autocomplete-india' },
      { name: 'Captcha', slug: 'captcha' },
      { name: 'LanguageSelector', slug: 'language-selector' },
      { name: 'PaymentGateway', slug: 'payment-gateway' },
    ],
  },
  {
    label: 'Advanced',
    items: [
      { name: 'ChartLibrary', slug: 'chart-library' },
      { name: 'Chatbot', slug: 'chatbot' },
      { name: 'CalendarScheduler', slug: 'calendar-scheduler' },
      { name: 'DigitalSignature', slug: 'digital-signature' },
      { name: 'DocumentViewer', slug: 'document-viewer' },
      { name: 'FormBuilder', slug: 'form-builder' },
      { name: 'MapLocationPicker', slug: 'map-location-picker' },
      { name: 'QRCode', slug: 'qr-code' },
      { name: 'RichTextEditor', slug: 'rich-text-editor' },
      { name: 'TreeView', slug: 'tree-view' },
      { name: 'VideoPlayer', slug: 'video-player' },
      { name: 'ApplicationTracker', slug: 'application-tracker' },
      { name: 'FeedbackRating', slug: 'feedback-rating-widget' },
      { name: 'SegmentedControl', slug: 'segmented-control' },
    ],
  },
];

export default function ComponentSidebar() {
  const { pathname } = useLocation();
  const currentSlug = pathname.split('/components/')[1] || '';
  const [search, setSearch] = useState('');

  const filteredCategories = COMPONENT_CATEGORIES.map((category) => ({
    ...category,
    filteredItems: category.items.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase()),
    ),
  })).filter((category) => category.filteredItems.length > 0);

  return (
    <nav
      className="hidden lg:block xl:w-[220px] lg:w-[200px] shrink-0 pl-4 pt-6"
      aria-label="Component navigation"
    >
      <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pb-8 pr-2 -mr-2">
        {/* Search/filter input */}
        <div className="relative mb-4">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" aria-hidden="true" />
          <input
            type="text"
            placeholder="Filter components…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-8 pr-3 py-1.5 text-[13px] rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30"
            aria-label="Filter components"
          />
        </div>

        {filteredCategories.map((category) => (
          <div key={category.label} className="mb-5">
            <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-2 px-2 flex items-center gap-2">
              {category.label}
              <span className="inline-flex items-center justify-center min-w-[1.25rem] h-5 px-1.5 rounded-full bg-muted text-[10px] font-semibold text-muted-foreground">
                {category.items.length}
              </span>
            </p>
            <ul className="space-y-0.5">
              {category.filteredItems.map((item) => {
                const isActive = currentSlug === item.slug;
                return (
                  <li key={item.slug}>
                    <Link
                      to={`/components/${item.slug}`}
                      className={`block py-2 pl-3 text-[13px] rounded-lg transition-colors ${
                        isActive
                          ? 'bg-primary/10 text-primary font-medium border-l-2 border-primary'
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  );
}
