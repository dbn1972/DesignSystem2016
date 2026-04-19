/**
 * Persistent left sidebar navigation for component documentation pages.
 * Shows all components grouped by category. Highlights the current page.
 */

import { Link, useLocation } from 'react-router';

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

  return (
    <nav className="hidden xl:block w-[200px] shrink-0" aria-label="Component navigation">
      <div className="sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto pb-8 pr-2 -mr-2">
        {COMPONENT_CATEGORIES.map((category) => (
          <div key={category.label} className="mb-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground mb-1.5 px-2">
              {category.label}
            </p>
            <ul className="space-y-0.5">
              {category.items.map((item) => {
                const isActive = currentSlug === item.slug;
                return (
                  <li key={item.slug}>
                    <Link
                      to={`/components/${item.slug}`}
                      className={`block rounded-md px-2 py-1 text-[13px] transition-colors ${
                        isActive
                          ? 'bg-primary/10 text-primary font-medium'
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
