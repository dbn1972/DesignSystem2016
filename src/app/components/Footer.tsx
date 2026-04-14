import { Github, Mail, FileText } from "lucide-react";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="mt-auto bg-primary text-primary-foreground transition-colors" role="contentinfo">
      {/* Indian Tricolor Band */}
      <div className="h-1" style={{
        background: 'linear-gradient(to right, var(--ux4g-color-saffron-500), white, var(--ux4g-color-green-600))'
      }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-foreground">UX4G Design System</h3>
            <p className="text-sm leading-relaxed text-primary-foreground/85">
              A shared government digital platform for designing, building, documenting,
              governing, and scaling trusted public digital services across the Government of India.
            </p>
          </div>

          {/* Quick Links */}
          <nav aria-label="Quick links">
            <h3 className="text-lg font-semibold mb-4 text-primary-foreground">Quick Links</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/85">
              <li><Link to="/foundations" className="hover:text-primary-foreground transition-colors">Foundations</Link></li>
              <li><Link to="/components" className="hover:text-primary-foreground transition-colors">Components</Link></li>
              <li><Link to="/patterns" className="hover:text-primary-foreground transition-colors">Patterns</Link></li>
              <li><Link to="/resources" className="hover:text-primary-foreground transition-colors">Resources</Link></li>
            </ul>
          </nav>

          {/* Resources */}
          <nav aria-label="Resources">
            <h3 className="text-lg font-semibold mb-4 text-primary-foreground">Resources</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/85">
              <li>
                <Link to="/documentation" className="hover:text-primary-foreground transition-colors flex items-center gap-2">
                  <FileText size={16} aria-hidden="true" />
                  <span>Documentation</span>
                </Link>
              </li>
              <li>
                <Link to="/accessibility" className="hover:text-primary-foreground transition-colors flex items-center gap-2">
                  <FileText size={16} aria-hidden="true" />
                  <span>Accessibility</span>
                </Link>
              </li>
              <li>
                <Link to="/contributing" className="hover:text-primary-foreground transition-colors flex items-center gap-2">
                  <FileText size={16} aria-hidden="true" />
                  <span>Contributing</span>
                </Link>
              </li>
              <li>
                <a href="https://github.com/gov-in/ux4g" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors flex items-center gap-2">
                  <Github size={16} aria-hidden="true" />
                  <span>GitHub Repository</span>
                </a>
              </li>
            </ul>
          </nav>

          {/* Legal & Support */}
          <nav aria-label="Legal and support">
            <h3 className="text-lg font-semibold mb-4 text-primary-foreground">Legal & Support</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/85">
              <li>
                <Link to="/privacy-policy" className="hover:text-primary-foreground transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms-of-use" className="hover:text-primary-foreground transition-colors">Terms of Use</Link>
              </li>
              <li>
                <Link to="/security-policy" className="hover:text-primary-foreground transition-colors">Security Policy</Link>
              </li>
              <li>
                <Link to="/code-of-conduct" className="hover:text-primary-foreground transition-colors">Code of Conduct</Link>
              </li>
              <li>
                <Link to="/copyright" className="hover:text-primary-foreground transition-colors">Copyright & License</Link>
              </li>
              <li>
                <Link to="/disclaimer" className="hover:text-primary-foreground transition-colors">Disclaimer</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary-foreground transition-colors flex items-center gap-2">
                  <Mail size={16} aria-hidden="true" />
                  <span>Contact Support</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/25">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/85">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <p>© 2026 Government of India. All rights reserved.</p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link to="/privacy-policy" className="hover:text-primary-foreground transition-colors">Privacy</Link>
                <span>•</span>
                <Link to="/terms-of-use" className="hover:text-primary-foreground transition-colors">Terms</Link>
                <span>•</span>
                <Link to="/security-policy" className="hover:text-primary-foreground transition-colors">Security</Link>
                <span>•</span>
                <Link to="/disclaimer" className="hover:text-primary-foreground transition-colors">Disclaimer</Link>
                <span>•</span>
                <Link to="/copyright" className="hover:text-primary-foreground transition-colors">Copyright</Link>
                <span>•</span>
                <Link to="/accessibility" className="hover:text-primary-foreground transition-colors">Accessibility</Link>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-2" aria-label="Indian tricolor">
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--ux4g-color-saffron-500)' }} aria-hidden="true"></span>
                <span className="w-3 h-3 rounded-full bg-primary-foreground" aria-hidden="true"></span>
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--ux4g-color-green-600)' }} aria-hidden="true"></span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
