import { Github, Mail, FileText } from "lucide-react";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-[#000080] dark:bg-gray-900 text-white mt-auto transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">UX4G Design System</h3>
            <p className="text-blue-100 dark:text-gray-300 text-sm leading-relaxed">
              A shared government digital platform for designing, building, documenting,
              governing, and scaling trusted public digital services across the Government of India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-blue-100 dark:text-gray-300">
              <li><Link to="/foundations" className="hover:text-white transition-colors">Foundations</Link></li>
              <li><Link to="/components" className="hover:text-white transition-colors">Components</Link></li>
              <li><Link to="/patterns" className="hover:text-white transition-colors">Patterns</Link></li>
              <li><Link to="/resources" className="hover:text-white transition-colors">Resources</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-blue-100 dark:text-gray-300">
              <li>
                <Link to="/documentation" className="hover:text-white transition-colors flex items-center gap-2">
                  <FileText size={16} />
                  <span>Documentation</span>
                </Link>
              </li>
              <li>
                <Link to="/accessibility" className="hover:text-white transition-colors flex items-center gap-2">
                  <FileText size={16} />
                  <span>Accessibility</span>
                </Link>
              </li>
              <li>
                <a href="https://github.com/gov-in/ux4g" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                  <Github size={16} />
                  <span>GitHub Repository</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal & Support</h3>
            <ul className="space-y-2 text-sm text-blue-100 dark:text-gray-300">
              <li>
                <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms-of-use" className="hover:text-white transition-colors">Terms of Use</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors flex items-center gap-2">
                  <Mail size={16} />
                  <span>Contact Support</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-blue-700 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-blue-100 dark:text-gray-300">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <p>© 2026 Government of India. All rights reserved.</p>
              <div className="flex items-center gap-3">
                <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
                <span>•</span>
                <Link to="/terms-of-use" className="hover:text-white transition-colors">Terms</Link>
                <span>•</span>
                <Link to="/accessibility" className="hover:text-white transition-colors">Accessibility</Link>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#FF9933]"></span>
                <span className="w-3 h-3 rounded-full bg-white"></span>
                <span className="w-3 h-3 rounded-full bg-[#138808]"></span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
