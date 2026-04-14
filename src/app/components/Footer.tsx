import { Github, Mail, FileText } from "lucide-react";
import { Link } from "react-router";

export default function Footer() {
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
            <h3 className="text-lg font-semibold mb-4 text-card-foreground">UX4G Design System</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              A shared government digital platform for designing, building, documenting,
              governing, and scaling trusted public digital services across the Government of India.
            </p>
          </div>

          {/* Quick Links */}
          <nav aria-label="Quick links">
            <h3 className="text-lg font-semibold mb-4 text-card-foreground">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/foundations" className="transition-colors hover:text-foreground focus-visible:text-foreground">Foundations</Link></li>
              <li><Link to="/components" className="transition-colors hover:text-foreground focus-visible:text-foreground">Components</Link></li>
              <li><Link to="/patterns" className="transition-colors hover:text-foreground focus-visible:text-foreground">Patterns</Link></li>
              <li><Link to="/resources" className="transition-colors hover:text-foreground focus-visible:text-foreground">Resources</Link></li>
            </ul>
          </nav>

          {/* Resources */}
          <nav aria-label="Resources">
            <h3 className="text-lg font-semibold mb-4 text-card-foreground">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/documentation" className="flex items-center gap-2 transition-colors hover:text-foreground focus-visible:text-foreground">
                  <FileText size={16} aria-hidden="true" />
                  <span>Documentation</span>
                </Link>
              </li>
              <li>
                <Link to="/accessibility" className="flex items-center gap-2 transition-colors hover:text-foreground focus-visible:text-foreground">
                  <FileText size={16} aria-hidden="true" />
                  <span>Accessibility</span>
                </Link>
              </li>
              <li>
                <Link to="/contributing" className="flex items-center gap-2 transition-colors hover:text-foreground focus-visible:text-foreground">
                  <FileText size={16} aria-hidden="true" />
                  <span>Contributing</span>
                </Link>
              </li>
              <li>
                <a href="https://github.com/gov-in/ux4g" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-colors hover:text-foreground focus-visible:text-foreground">
                  <Github size={16} aria-hidden="true" />
                  <span>GitHub Repository</span>
                </a>
              </li>
            </ul>
          </nav>

          {/* Legal & Support */}
          <nav aria-label="Legal and support">
            <h3 className="text-lg font-semibold mb-4 text-card-foreground">Legal & Support</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/privacy-policy" className="transition-colors hover:text-foreground focus-visible:text-foreground">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms-of-use" className="transition-colors hover:text-foreground focus-visible:text-foreground">Terms of Use</Link>
              </li>
              <li>
                <Link to="/security-policy" className="transition-colors hover:text-foreground focus-visible:text-foreground">Security Policy</Link>
              </li>
              <li>
                <Link to="/code-of-conduct" className="transition-colors hover:text-foreground focus-visible:text-foreground">Code of Conduct</Link>
              </li>
              <li>
                <Link to="/copyright" className="transition-colors hover:text-foreground focus-visible:text-foreground">Copyright & License</Link>
              </li>
              <li>
                <Link to="/disclaimer" className="transition-colors hover:text-foreground focus-visible:text-foreground">Disclaimer</Link>
              </li>
              <li>
                <Link to="/contact" className="flex items-center gap-2 transition-colors hover:text-foreground focus-visible:text-foreground">
                  <Mail size={16} aria-hidden="true" />
                  <span>Contact Support</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <p>© 2026 Government of India. All rights reserved.</p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link to="/privacy-policy" className="transition-colors hover:text-foreground focus-visible:text-foreground">Privacy</Link>
                <span>•</span>
                <Link to="/terms-of-use" className="transition-colors hover:text-foreground focus-visible:text-foreground">Terms</Link>
                <span>•</span>
                <Link to="/security-policy" className="transition-colors hover:text-foreground focus-visible:text-foreground">Security</Link>
                <span>•</span>
                <Link to="/disclaimer" className="transition-colors hover:text-foreground focus-visible:text-foreground">Disclaimer</Link>
                <span>•</span>
                <Link to="/copyright" className="transition-colors hover:text-foreground focus-visible:text-foreground">Copyright</Link>
                <span>•</span>
                <Link to="/accessibility" className="transition-colors hover:text-foreground focus-visible:text-foreground">Accessibility</Link>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-2" aria-label="Indian tricolor">
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
