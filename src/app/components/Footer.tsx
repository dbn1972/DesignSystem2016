import { Github, Mail, FileText } from "lucide-react";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="mt-auto bg-[#000080] dark:bg-gray-900 text-white dark:text-gray-100 transition-colors" role="contentinfo">
      {/* Indian Tricolor Band */}
      <div className="h-1" style={{
        background: 'linear-gradient(to right, var(--ux4g-color-saffron-500), white, var(--ux4g-color-green-600))'
      }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white dark:text-gray-100">UX4G Design System</h3>
            <p className="text-sm leading-relaxed text-blue-100 dark:text-gray-400">
              A shared government digital platform for designing, building, documenting,
              governing, and scaling trusted public digital services across the Government of India.
            </p>
          </div>

          {/* Quick Links */}
          <nav aria-label="Quick links">
            <h3 className="text-lg font-semibold mb-4 text-white dark:text-gray-100">Quick Links</h3>
            <ul className="space-y-2 text-sm text-blue-100 dark:text-gray-400">
              <li><Link to="/foundations" className="hover:text-white dark:hover:text-gray-200 transition-colors">Foundations</Link></li>
              <li><Link to="/components" className="hover:text-white dark:hover:text-gray-200 transition-colors">Components</Link></li>
              <li><Link to="/patterns" className="hover:text-white dark:hover:text-gray-200 transition-colors">Patterns</Link></li>
              <li><Link to="/resources" className="hover:text-white dark:hover:text-gray-200 transition-colors">Resources</Link></li>
            </ul>
          </nav>

          {/* Resources */}
          <nav aria-label="Resources">
            <h3 className="text-lg font-semibold mb-4 text-white dark:text-gray-100">Resources</h3>
            <ul className="space-y-2 text-sm text-blue-100 dark:text-gray-400">
              <li>
                <Link to="/documentation" className="hover:text-white dark:hover:text-gray-200 transition-colors flex items-center gap-2">
                  <FileText size={16} aria-hidden="true" />
                  <span>Documentation</span>
                </Link>
              </li>
              <li>
                <Link to="/accessibility" className="hover:text-white dark:hover:text-gray-200 transition-colors flex items-center gap-2">
                  <FileText size={16} aria-hidden="true" />
                  <span>Accessibility</span>
                </Link>
              </li>
              <li>
                <Link to="/contributing" className="hover:text-white dark:hover:text-gray-200 transition-colors flex items-center gap-2">
                  <FileText size={16} aria-hidden="true" />
                  <span>Contributing</span>
                </Link>
              </li>
              <li>
                <a href="https://github.com/gov-in/ux4g" target="_blank" rel="noopener noreferrer" className="hover:text-white dark:hover:text-gray-200 transition-colors flex items-center gap-2">
                  <Github size={16} aria-hidden="true" />
                  <span>GitHub Repository</span>
                </a>
              </li>
            </ul>
          </nav>

          {/* Legal & Support */}
          <nav aria-label="Legal and support">
            <h3 className="text-lg font-semibold mb-4 text-white dark:text-gray-100">Legal & Support</h3>
            <ul className="space-y-2 text-sm text-blue-100 dark:text-gray-400">
              <li>
                <Link to="/privacy-policy" className="hover:text-white dark:hover:text-gray-200 transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms-of-use" className="hover:text-white dark:hover:text-gray-200 transition-colors">Terms of Use</Link>
              </li>
              <li>
                <Link to="/security-policy" className="hover:text-white dark:hover:text-gray-200 transition-colors">Security Policy</Link>
              </li>
              <li>
                <Link to="/code-of-conduct" className="hover:text-white dark:hover:text-gray-200 transition-colors">Code of Conduct</Link>
              </li>
              <li>
                <Link to="/copyright" className="hover:text-white dark:hover:text-gray-200 transition-colors">Copyright & License</Link>
              </li>
              <li>
                <Link to="/disclaimer" className="hover:text-white dark:hover:text-gray-200 transition-colors">Disclaimer</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white dark:hover:text-gray-200 transition-colors flex items-center gap-2">
                  <Mail size={16} aria-hidden="true" />
                  <span>Contact Support</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-blue-100 dark:text-gray-400">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <p>© 2026 Government of India. All rights reserved.</p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link to="/privacy-policy" className="hover:text-white dark:hover:text-gray-200 transition-colors">Privacy</Link>
                <span>•</span>
                <Link to="/terms-of-use" className="hover:text-white dark:hover:text-gray-200 transition-colors">Terms</Link>
                <span>•</span>
                <Link to="/security-policy" className="hover:text-white dark:hover:text-gray-200 transition-colors">Security</Link>
                <span>•</span>
                <Link to="/disclaimer" className="hover:text-white dark:hover:text-gray-200 transition-colors">Disclaimer</Link>
                <span>•</span>
                <Link to="/copyright" className="hover:text-white dark:hover:text-gray-200 transition-colors">Copyright</Link>
                <span>•</span>
                <Link to="/accessibility" className="hover:text-white dark:hover:text-gray-200 transition-colors">Accessibility</Link>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-2" aria-label="Indian tricolor">
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--ux4g-color-saffron-500)' }} aria-hidden="true"></span>
                <span className="w-3 h-3 rounded-full bg-white dark:bg-gray-300" aria-hidden="true"></span>
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--ux4g-color-green-600)' }} aria-hidden="true"></span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
