import { Link } from "react-router";
import { useState } from "react";
import { Search, AlertCircle, Compass, TrendingUp, HelpCircle, MessageSquare, ArrowRight } from "lucide-react";

const SUGGESTIONS = [
  "Try using different keywords",
  "Check spelling of your search term",
  "Use more general terms (e.g., 'license' instead of 'driving license renewal for commercial vehicle')",
  "Browse by category to find similar services"
];

const ALTERNATIVE_SERVICES = [
  { name: "Driving License Application", category: "Transport" },
  { name: "Vehicle Registration", category: "Transport" },
  { name: "Learning License", category: "Transport" }
];

const POPULAR_SERVICES = [
  { name: "Passport Application", searches: "12,450 searches/month" },
  { name: "PAN Card", searches: "8,230 searches/month" },
  { name: "Aadhaar Enrollment", searches: "6,780 searches/month" }
];

export default function NoResultsPattern() {
  const [query] = useState("passpert apliction"); // Intentional typo
  const [showGuidedFinder, setShowGuidedFinder] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b-2 border-border">
        <div className="max-w-[1200px] mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link to="/patterns/search-discovery" className="text-sm text-muted-foreground hover:text-primary">
                ← Back to Patterns
              </Link>
              <span className="text-gray-400">|</span>
              <span className="text-sm font-bold text-foreground">No Results / Zero State</span>
            </div>
          </div>
        </div>
      </header>

      {/* Search Bar */}
      <div className="bg-card border-b border-border">
        <div className="max-w-[1200px] mx-auto px-8 py-6">
          <div className="relative max-w-[600px]">
            <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={query}
              readOnly
              className="w-full pl-12 pr-4 py-3 border-2 border-red-300 rounded-lg bg-red-50"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-[1200px] mx-auto px-8 py-12">
        
        <div className="max-w-[900px] mx-auto">
          
          {/* No Results Message */}
          <div className="text-center mb-12">
            <div className="inline-block p-4 bg-orange-100 rounded-full mb-4">
              <AlertCircle size={64} className="text-orange-600" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-3">
              No services found for "{query}"
            </h1>
            <p className="text-lg text-muted-foreground">
              We couldn't find any services matching your search. Here are some ways to find what you need:
            </p>
          </div>

          {/* Search Suggestions */}
          <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-8 mb-8">
            <div className="flex items-start gap-3 mb-4">
              <HelpCircle size={24} className="text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="font-bold text-foreground mb-2">Search Tips</h2>
                <p className="text-sm text-muted-foreground mb-4">
                  Try these suggestions to improve your search results:
                </p>
              </div>
            </div>
            <ul className="space-y-2 ml-9">
              {SUGGESTIONS.map((suggestion, i) => (
                <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>{suggestion}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Did You Mean */}
          <div className="bg-card border-2 border-border rounded-lg p-6 mb-8">
            <h2 className="font-bold text-foreground mb-4">Did you mean?</h2>
            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 bg-blue-50 border-2 border-blue-300 text-blue-900 rounded-lg hover:bg-blue-100 font-bold">
                "passport application"
              </button>
              <button className="px-4 py-2 bg-background border-2 border-border text-foreground rounded-lg hover:bg-muted">
                "passport status"
              </button>
              <button className="px-4 py-2 bg-background border-2 border-border text-foreground rounded-lg hover:bg-muted">
                "passport renewal"
              </button>
            </div>
          </div>

          {/* Alternative Services */}
          <div className="bg-card border-2 border-border rounded-lg p-6 mb-8">
            <h2 className="font-bold text-foreground mb-4">Related Services</h2>
            <p className="text-sm text-muted-foreground mb-4">
              These services might be what you're looking for:
            </p>
            <div className="space-y-3">
              {ALTERNATIVE_SERVICES.map((service, i) => (
                <Link
                  key={i}
                  to={`/service/${service.name.toLowerCase().replace(/ /g, '-')}`}
                  className="block p-4 border-2 border-border rounded-lg hover:border-primary hover:bg-blue-50 transition-all group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-bold text-foreground group-hover:text-primary">
                        {service.name}
                      </div>
                      <div className="text-sm text-muted-foreground">{service.category}</div>
                    </div>
                    <ArrowRight size={20} className="text-gray-400 group-hover:text-primary" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Guided Finder CTA */}
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-purple-300 rounded-lg p-8 mb-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-card rounded-lg">
                <Compass size={32} className="text-purple-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-foreground mb-2">Not sure which service you need?</h2>
                <p className="text-muted-foreground mb-4">
                  Our guided service finder asks a few simple questions to help identify the exact service you need.
                </p>
                <button
                  onClick={() => setShowGuidedFinder(true)}
                  className="px-6 py-3 bg-primary text-white rounded font-bold hover:opacity-90 flex items-center gap-2"
                >
                  <Compass size={20} />
                  <span>Start Guided Finder</span>
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Popular Services */}
          <div className="bg-card border-2 border-border rounded-lg p-6 mb-8">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp size={20} className="text-muted-foreground" />
              <h2 className="font-bold text-foreground">Popular Services</h2>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {POPULAR_SERVICES.map((service, i) => (
                <Link
                  key={i}
                  to={`/service/${service.name.toLowerCase().replace(/ /g, '-')}`}
                  className="p-4 border-2 border-border rounded-lg hover:border-primary hover:shadow-md transition-all text-center group"
                >
                  <div className="font-bold text-foreground group-hover:text-primary mb-1">
                    {service.name}
                  </div>
                  <div className="text-xs text-gray-500">{service.searches}</div>
                </Link>
              ))}
            </div>
          </div>

          {/* Browse by Category */}
          <div className="bg-card border-2 border-border rounded-lg p-6 mb-8">
            <h2 className="font-bold text-foreground mb-4">Browse by Category</h2>
            <div className="grid grid-cols-3 gap-3">
              {['Transport', 'Civil Registration', 'Identity', 'Revenue', 'Election', 'Travel'].map((category, i) => (
                <Link
                  key={i}
                  to={`/services/category/${category.toLowerCase()}`}
                  className="px-4 py-3 border-2 border-border rounded-lg hover:border-primary hover:bg-blue-50 text-center font-bold text-foreground hover:text-primary transition-all"
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Support */}
          <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <MessageSquare size={24} className="text-yellow-700 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-foreground mb-2">Still can't find what you need?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Our support team can help you find the right service or answer your questions.
                </p>
                <div className="flex gap-3">
                  <Link
                    to="/patterns/contact-support/general-contact"
                    className="px-4 py-2 bg-primary text-white rounded font-bold hover:opacity-90"
                  >
                    Contact Support
                  </Link>
                  <Link
                    to="/help"
                    className="px-4 py-2 border-2 border-border rounded font-bold hover:border-gray-400"
                  >
                    View Help Center
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Pattern Info */}
          <div className="mt-12 bg-orange-50 border-2 border-orange-200 rounded-lg p-6">
            <h3 className="font-bold text-foreground mb-3">Recovery Pattern Features</h3>
            <div className="grid grid-cols-3 gap-6 text-sm">
              <div>
                <div className="font-bold text-muted-foreground mb-2">Immediate Help</div>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Search tips</li>
                  <li>• Spelling suggestions</li>
                  <li>• Did you mean</li>
                </ul>
              </div>
              <div>
                <div className="font-bold text-muted-foreground mb-2">Alternatives</div>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Related services</li>
                  <li>• Popular services</li>
                  <li>• Category browse</li>
                </ul>
              </div>
              <div>
                <div className="font-bold text-muted-foreground mb-2">Escalation</div>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Guided finder</li>
                  <li>• Contact support</li>
                  <li>• Help center</li>
                </ul>
              </div>
            </div>
          </div>

        </div>

      </main>
    </div>
  );
}
