import { useParams, Link } from "react-router";
import { ArrowLeft } from "lucide-react";

const DOCS: Record<string, { title: string; content: string }> = {
  overview: { title: "Web Components Overview", content: `The @ux4g/web-components package provides 73 framework-agnostic Web Components plus 18 service compositions for the UX4G Design System.\n\nKey features:\n• Shadow DOM encapsulation\n• CSS custom properties for theming\n• Custom events with ux4g- prefix\n• Self-registering custom elements\n• No framework dependency — works in any HTML page\n• Full accessibility with ARIA attributes\n\nComponent categories: Form (20), Feedback (12), Data Display (13), Navigation (11), Layout (9), Utilities (1), Services (18).` },
  "quick-start": { title: "Quick Start", content: `## CDN Usage\n\n<script type="module" src="https://unpkg.com/@ux4g/web-components"></script>\n<link rel="stylesheet" href="https://unpkg.com/@ux4g/tokens/dist/tokens.css" />\n\n## NPM Usage\n\nnpm install @ux4g/web-components @ux4g/tokens\n\nimport '@ux4g/web-components';\nimport '@ux4g/tokens/dist/tokens.css';\n\n## Usage\n\n<ux4g-button variant="primary">Submit</ux4g-button>\n<ux4g-input label="Name" required></ux4g-input>` },
  "api-reference": { title: "API Reference", content: `All Web Components use HTML attributes for configuration and custom events for communication.\n\nCommon attributes:\n• variant — primary, secondary, tertiary, ghost, destructive\n• size — sm, md, lg\n• disabled — boolean\n• loading — boolean\n\nCommon events:\n• ux4g-activate — button clicks\n• ux4g-change — value changes\n• ux4g-dismiss — close/dismiss actions\n\nSee component-contract.ts for the full shared vocabulary.` },
  services: { title: "Service Components", content: `18 service-level Web Components for complete government service flows:\n\nAuth: ux4g-sign-in-service, ux4g-sign-up-service, ux4g-otp-verify-service, ux4g-forgot-password-service, ux4g-auth-status-service\n\nForms: ux4g-personal-form-service, ux4g-address-form-service, ux4g-additional-form-service, ux4g-form-review-service\n\nSubmission: ux4g-document-upload-service, ux4g-review-summary-service, ux4g-declaration-service\n\nPayment: ux4g-payment-summary-service, ux4g-payment-receipt-service\n\nPost: ux4g-status-tracker-service, ux4g-user-profile-service\n\nLayout: ux4g-service-header, ux4g-service-footer\n\nAll use the shared service-contract.ts for validation and events.` },
  integration: { title: "Framework Integration", content: `Web Components work in any framework:\n\n## React\n<ux4g-button variant="primary" onClick={handleClick}>Submit</ux4g-button>\n\n## Angular\n<ux4g-button variant="primary" (ux4g-activate)="handleClick($event)">Submit</ux4g-button>\n\n## Vue\n<ux4g-button variant="primary" @ux4g-activate="handleClick">Submit</ux4g-button>\n\n## Vanilla JS\ndocument.querySelector('ux4g-button').addEventListener('ux4g-activate', handleClick);` },
  contract: { title: "Component Contract", content: `The component contract defines the shared vocabulary:\n\nVariants: primary, secondary, tertiary, ghost, destructive\nStatus: neutral, info, success, warning, error\nSizes: sm, md, lg\n\nEvents:\n• ux4g-activate — button/action activation\n• ux4g-change — value change\n• ux4g-open-change — open/close toggle\n• ux4g-selection-change — selection update\n• ux4g-dismiss — close/dismiss\n• ux4g-submit — form submission\n• ux4g-value-commit — final value commit\n\nSlots: default, label, description, hint, error, icon-leading, icon-trailing, actions, header, footer, empty` },
  accessibility: { title: "Accessibility", content: `All Web Components follow WCAG 2.1 Level AA:\n\n• Semantic HTML inside Shadow DOM\n• ARIA attributes (role, aria-label, aria-describedby, etc.)\n• Keyboard navigation support\n• Focus management\n• Color contrast compliance\n• Screen reader announcements via aria-live\n• Reduced motion support\n\nForm components:\n• aria-required for required fields\n• aria-invalid for error states\n• aria-describedby linking hints/errors\n• Proper label association` },
  theming: { title: "Theming & Tokens", content: `Web Components use CSS custom properties for theming:\n\n--ux4g-color-surface — card/panel background\n--ux4g-color-background — page background\n--ux4g-color-border — borders\n--ux4g-color-text-default — primary text\n--ux4g-color-text-muted — secondary text\n--ux4g-color-interactive-default — buttons/links\n--ux4g-color-interactive-hover — hover state\n--ux4g-color-feedback-success — success states\n--ux4g-color-feedback-error — error states\n--ux4g-color-feedback-warning — warning states\n\nDark mode: Override these properties in a .dark class or media query.` },
};

export default function WebComponentsDocDetail() {
  const { slug } = useParams<{ slug: string }>();
  const doc = DOCS[slug || ""];

  if (!doc) {
    return (
      <div className="min-h-screen bg-background p-12">
        <div className="max-w-3xl mx-auto bg-card border-2 border-border rounded-lg p-4 sm:p-6 lg:p-8">
          <h1 className="text-xl font-bold text-foreground mb-2">Page Not Found</h1>
          <p className="text-muted-foreground mb-4">The Web Components documentation page "{slug}" does not exist.</p>
          <Link to="/docs/web-components" className="text-primary font-bold hover:underline">← Back to Web Components Docs</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card border-b-2 border-border">
        <div className="max-w-[1000px] mx-auto px-8 py-6">
          <Link to="/docs/web-components" className="text-sm text-primary font-bold hover:underline flex items-center gap-1 mb-3">
            <ArrowLeft size={14} /> Web Components Documentation
          </Link>
          <h1 className="text-2xl font-bold text-foreground">{doc.title}</h1>
        </div>
      </header>
      <div className="max-w-[1000px] mx-auto px-8 py-8">
        <div className="bg-card border-2 border-border rounded-lg p-4 sm:p-6 lg:p-8">
          <pre className="whitespace-pre-wrap text-sm text-foreground leading-relaxed font-sans">{doc.content}</pre>
        </div>
      </div>
    </div>
  );
}
