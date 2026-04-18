import { useState, useCallback } from "react";
import { Github, Mail, FileText, ChevronDown } from "lucide-react";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";

/**
 * Collapsible footer section.
 * On mobile: tap the heading to expand/collapse.
 * On md+: always visible (button is hidden, content shown via CSS).
 */
function FooterSection({
  title,
  ariaLabel,
  children,
}: {
  title: string;
  ariaLabel?: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const toggle = useCallback(() => setOpen((o) => !o), []);

  return (
    <nav aria-label={ariaLabel ?? title}>
      {/* Toggle button — visible only on mobile */}
      <button
        type="button"
        onClick={toggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between py-3 border-b border-border text-sm font-semibold text-card-foreground select-none md:hidden"
      >
        {title}
        <ChevronDown
          size={16}
          aria-hidden="true"
          className={`transition-transform text-muted-foreground ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Section heading — desktop only */}
      <h3 className="hidden md:block text-lg font-semibold mb-4 text-card-foreground">
        {title}
      </h3>

      {/* Content: hidden on mobile when collapsed, always visible on md+ */}
      <div
        className={`overflow-hidden transition-all duration-200 md:!max-h-none md:!opacity-100 md:!pb-0 ${
          open ? "max-h-96 opacity-100 pb-3" : "max-h-0 opacity-0"
        }`}
      >
        {children}
      </div>
    </nav>
  );
}

export default function Footer() {
  const { i18n } = useTranslation();
  const language = i18n.resolvedLanguage === "hi" ? "hi" : "en";
  const copy = {
    en: {
      title: "UX4G Design System",
      description:
        "A shared government digital platform for designing, building, documenting, governing, and scaling trusted public digital services across the Government of India.",
      quickLinks: "Quick Links",
      resources: "Resources",
      legalSupport: "Legal & Support",
      documentation: "Documentation",
      accessibility: "Accessibility",
      contributing: "Contributing",
      githubRepository: "GitHub Repository",
      privacyPolicy: "Privacy Policy",
      termsOfUse: "Terms of Use",
      securityPolicy: "Security Policy",
      codeOfConduct: "Code of Conduct",
      copyrightLicense: "Copyright & License",
      disclaimer: "Disclaimer",
      siteMap: "Site Map",
      contactSupport: "Contact Support",
      copyright: "© 2026 Government of India. All rights reserved.",
      privacy: "Privacy",
      terms: "Terms",
      security: "Security",
    },
    hi: {
      title: "UX4G डिज़ाइन सिस्टम",
      description:
        "भारत सरकार के विश्वसनीय सार्वजनिक डिजिटल सेवाओं को डिज़ाइन, निर्माण, दस्तावेज़ित, संचालित और विस्तार देने के लिए एक साझा सरकारी डिजिटल मंच।",
      quickLinks: "त्वरित लिंक",
      resources: "संसाधन",
      legalSupport: "कानूनी और सहायता",
      documentation: "दस्तावेज़ीकरण",
      accessibility: "सुगम्यता",
      contributing: "योगदान करें",
      githubRepository: "GitHub रिपॉज़िटरी",
      privacyPolicy: "गोपनीयता नीति",
      termsOfUse: "उपयोग की शर्तें",
      securityPolicy: "सुरक्षा नीति",
      codeOfConduct: "आचार संहिता",
      copyrightLicense: "कॉपीराइट और लाइसेंस",
      disclaimer: "अस्वीकरण",
      siteMap: "साइट मैप",
      contactSupport: "सहायता से संपर्क करें",
      copyright: "© 2026 भारत सरकार। सर्वाधिकार सुरक्षित।",
      privacy: "गोपनीयता",
      terms: "शर्तें",
      security: "सुरक्षा",
    },
  }[language];

  const linkClass =
    "transition-colors hover:text-foreground focus-visible:text-foreground";

  return (
    <footer
      className="mt-auto border-t border-border bg-card text-card-foreground transition-colors"
      role="contentinfo"
    >
      {/* Indian Tricolor Band */}
      <div
        className="h-1"
        style={{
          background:
            "linear-gradient(to right, var(--ux4g-color-saffron-500), white, var(--ux4g-color-green-600))",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-8">
          {/* About */}
          <div className="mb-2 md:mb-0">
            <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-4 text-card-foreground">
              {copy.title}
            </h3>
            <p className="text-xs md:text-sm leading-relaxed text-muted-foreground">
              {copy.description}
            </p>
          </div>

          {/* Resources */}
          <FooterSection title={copy.resources}>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  to="/documentation"
                  className={`flex items-center gap-2 ${linkClass}`}
                >
                  <FileText size={16} aria-hidden="true" />
                  <span>{copy.documentation}</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/accessibility"
                  className={`flex items-center gap-2 ${linkClass}`}
                >
                  <FileText size={16} aria-hidden="true" />
                  <span>{copy.accessibility}</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/contributing"
                  className={`flex items-center gap-2 ${linkClass}`}
                >
                  <FileText size={16} aria-hidden="true" />
                  <span>{copy.contributing}</span>
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/dbn1972/DesignSystem2016"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 ${linkClass}`}
                >
                  <Github size={16} aria-hidden="true" />
                  <span>{copy.githubRepository}</span>
                </a>
              </li>
            </ul>
          </FooterSection>

          {/* Legal & Support */}
          <FooterSection title={copy.legalSupport} ariaLabel={copy.legalSupport}>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/privacy-policy" className={linkClass}>
                  {copy.privacyPolicy}
                </Link>
              </li>
              <li>
                <Link to="/terms-of-use" className={linkClass}>
                  {copy.termsOfUse}
                </Link>
              </li>
              <li>
                <Link to="/security-policy" className={linkClass}>
                  {copy.securityPolicy}
                </Link>
              </li>
              <li>
                <Link to="/code-of-conduct" className={linkClass}>
                  {copy.codeOfConduct}
                </Link>
              </li>
              <li>
                <Link to="/copyright" className={linkClass}>
                  {copy.copyrightLicense}
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className={linkClass}>
                  {copy.disclaimer}
                </Link>
              </li>
              <li>
                <Link to="/site-map" className={linkClass}>
                  {copy.siteMap}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={`flex items-center gap-2 ${linkClass}`}
                >
                  <Mail size={16} aria-hidden="true" />
                  <span>{copy.contactSupport}</span>
                </Link>
              </li>
            </ul>
          </FooterSection>
        </div>

        {/* ── Bottom bar ── */}
        <div className="mt-4 md:mt-8 pt-4 md:pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 text-sm text-muted-foreground">
            <p className="text-xs md:text-sm text-center">{copy.copyright}</p>
            <div className="flex items-center gap-4">
              <span
                className="flex items-center gap-2"
                role="img"
                aria-label="Indian tricolor"
              >
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: "var(--ux4g-color-saffron-500)" }}
                  aria-hidden="true"
                />
                <span
                  className="w-3 h-3 rounded-full bg-foreground"
                  aria-hidden="true"
                />
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: "var(--ux4g-color-green-600)" }}
                  aria-hidden="true"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
