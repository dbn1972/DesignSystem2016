import { Github, Mail, FileText } from "lucide-react";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";

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

  return (
    <footer className="mt-auto border-t border-border bg-card text-card-foreground transition-colors" role="contentinfo">
      {/* Indian Tricolor Band */}
      <div className="h-1" style={{
        background: 'linear-gradient(to right, var(--ux4g-color-saffron-500), white, var(--ux4g-color-green-600))'
      }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-card-foreground">{copy.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {copy.description}
            </p>
          </div>

          {/* Quick Links */}
          <nav aria-label={copy.quickLinks}>
            <h3 className="text-lg font-semibold mb-4 text-card-foreground">{copy.quickLinks}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/foundations" className="transition-colors hover:text-foreground focus-visible:text-foreground">{language === "hi" ? "आधार" : "Foundations"}</Link></li>
              <li><Link to="/components" className="transition-colors hover:text-foreground focus-visible:text-foreground">{language === "hi" ? "घटक" : "Components"}</Link></li>
              <li><Link to="/patterns" className="transition-colors hover:text-foreground focus-visible:text-foreground">{language === "hi" ? "पैटर्न" : "Patterns"}</Link></li>
              <li><Link to="/resources" className="transition-colors hover:text-foreground focus-visible:text-foreground">{language === "hi" ? "संसाधन" : "Resources"}</Link></li>
            </ul>
          </nav>

          {/* Resources */}
          <nav aria-label={copy.resources}>
            <h3 className="text-lg font-semibold mb-4 text-card-foreground">{copy.resources}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/documentation" className="flex items-center gap-2 transition-colors hover:text-foreground focus-visible:text-foreground">
                  <FileText size={16} aria-hidden="true" />
                  <span>{copy.documentation}</span>
                </Link>
              </li>
              <li>
                <Link to="/accessibility" className="flex items-center gap-2 transition-colors hover:text-foreground focus-visible:text-foreground">
                  <FileText size={16} aria-hidden="true" />
                  <span>{copy.accessibility}</span>
                </Link>
              </li>
              <li>
                <Link to="/contributing" className="flex items-center gap-2 transition-colors hover:text-foreground focus-visible:text-foreground">
                  <FileText size={16} aria-hidden="true" />
                  <span>{copy.contributing}</span>
                </Link>
              </li>
              <li>
                <a href="https://github.com/dbn1972/DesignSystem2016" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-colors hover:text-foreground focus-visible:text-foreground">
                  <Github size={16} aria-hidden="true" />
                  <span>{copy.githubRepository}</span>
                </a>
              </li>
            </ul>
          </nav>

          {/* Legal & Support */}
          <nav aria-label={copy.legalSupport}>
            <h3 className="text-lg font-semibold mb-4 text-card-foreground">{copy.legalSupport}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/privacy-policy" className="transition-colors hover:text-foreground focus-visible:text-foreground">{copy.privacyPolicy}</Link>
              </li>
              <li>
                <Link to="/terms-of-use" className="transition-colors hover:text-foreground focus-visible:text-foreground">{copy.termsOfUse}</Link>
              </li>
              <li>
                <Link to="/security-policy" className="transition-colors hover:text-foreground focus-visible:text-foreground">{copy.securityPolicy}</Link>
              </li>
              <li>
                <Link to="/code-of-conduct" className="transition-colors hover:text-foreground focus-visible:text-foreground">{copy.codeOfConduct}</Link>
              </li>
              <li>
                <Link to="/copyright" className="transition-colors hover:text-foreground focus-visible:text-foreground">{copy.copyrightLicense}</Link>
              </li>
              <li>
                <Link to="/disclaimer" className="transition-colors hover:text-foreground focus-visible:text-foreground">{copy.disclaimer}</Link>
              </li>
              <li>
                <Link to="/site-map" className="transition-colors hover:text-foreground focus-visible:text-foreground">{copy.siteMap}</Link>
              </li>
              <li>
                <Link to="/contact" className="flex items-center gap-2 transition-colors hover:text-foreground focus-visible:text-foreground">
                  <Mail size={16} aria-hidden="true" />
                  <span>{copy.contactSupport}</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <p>{copy.copyright}</p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link to="/privacy-policy" className="transition-colors hover:text-foreground focus-visible:text-foreground">{copy.privacy}</Link>
                <span>•</span>
                <Link to="/terms-of-use" className="transition-colors hover:text-foreground focus-visible:text-foreground">{copy.terms}</Link>
                <span>•</span>
                <Link to="/security-policy" className="transition-colors hover:text-foreground focus-visible:text-foreground">{copy.security}</Link>
                <span>•</span>
                <Link to="/disclaimer" className="transition-colors hover:text-foreground focus-visible:text-foreground">{copy.disclaimer}</Link>
                <span>•</span>
                <Link to="/copyright" className="transition-colors hover:text-foreground focus-visible:text-foreground">{copy.copyrightLicense}</Link>
                <span>•</span>
                <Link to="/accessibility" className="transition-colors hover:text-foreground focus-visible:text-foreground">{copy.accessibility}</Link>
                <span>•</span>
                <Link to="/site-map" className="transition-colors hover:text-foreground focus-visible:text-foreground">{copy.siteMap}</Link>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-2" role="img" aria-label="Indian tricolor">
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--ux4g-color-saffron-500)' }} aria-hidden="true"></span>
                <span className="w-3 h-3 rounded-full bg-foreground" aria-hidden="true"></span>
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--ux4g-color-green-600)' }} aria-hidden="true"></span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
