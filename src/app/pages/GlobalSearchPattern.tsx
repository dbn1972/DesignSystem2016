import { Link } from "react-router";
import { useState, useEffect } from "react";
import { Search, X, TrendingUp, Clock, ArrowRight, Loader } from "lucide-react";

// Mock service data
const SERVICES = [
  { id: 1, name: "Passport Application", category: "Travel", department: "Ministry of External Affairs", keywords: ["passport", "travel", "visa"] },
  { id: 2, name: "Driving License", category: "Transport", department: "Ministry of Road Transport", keywords: ["dl", "driving", "license", "vehicle"] },
  { id: 3, name: "Birth Certificate", category: "Civil Registration", department: "Municipal Corporation", keywords: ["birth", "certificate", "registration"] },
  { id: 4, name: "Aadhaar Enrollment", category: "Identity", department: "UIDAI", keywords: ["aadhaar", "uid", "identity", "enrollment"] },
  { id: 5, name: "PAN Card Application", category: "Income Tax", department: "Income Tax Department", keywords: ["pan", "tax", "card"] },
  { id: 6, name: "Voter ID Card", category: "Election", department: "Election Commission", keywords: ["voter", "election", "epic", "id"] },
  { id: 7, name: "Ration Card", category: "Food & Supplies", department: "Department of Food", keywords: ["ration", "pds", "food"] },
  { id: 8, name: "Marriage Certificate", category: "Civil Registration", department: "Municipal Corporation", keywords: ["marriage", "certificate", "registration"] },
  { id: 9, name: "Income Certificate", category: "Revenue", department: "Revenue Department", keywords: ["income", "certificate", "revenue"] },
  { id: 10, name: "Caste Certificate", category: "Revenue", department: "Revenue Department", keywords: ["caste", "certificate", "sc", "st", "obc"] },
];

const POPULAR_SEARCHES = ["Passport", "Driving License", "Birth Certificate", "Aadhaar", "PAN Card"];
const RECENT_SEARCHES = ["Voter ID", "Ration Card"];

export default function GlobalSearchPattern() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<typeof SERVICES>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);

  useEffect(() => {
    if (query.length >= 2) {
      setIsLoading(true);
      // Simulate API delay
      const timer = setTimeout(() => {
        const filtered = SERVICES.filter(service =>
          service.name.toLowerCase().includes(query.toLowerCase()) ||
          service.keywords.some(keyword => keyword.toLowerCase().includes(query.toLowerCase()))
        ).slice(0, 5);
        setSuggestions(filtered);
        setShowSuggestions(true);
        setIsLoading(false);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
      setIsLoading(false);
    }
  }, [query]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!showSuggestions) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setFocusedIndex(prev => Math.min(prev + 1, suggestions.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setFocusedIndex(prev => Math.max(prev - 1, -1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (focusedIndex >= 0) {
        handleSelectService(suggestions[focusedIndex]);
      }
    } else if (e.key === 'Escape') {
      setShowSuggestions(false);
      setFocusedIndex(-1);
    }
  };

  const handleSelectService = (service: typeof SERVICES[0]) => {
    console.log('Selected service:', service.name);
    setQuery('');
    setShowSuggestions(false);
    setFocusedIndex(-1);
  };

  const handleClear = () => {
    setQuery('');
    setSuggestions([]);
    setShowSuggestions(false);
    setFocusedIndex(-1);
  };

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
              <span className="text-muted-foreground">|</span>
              <span className="text-sm font-bold text-foreground">Global Search</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1200px] mx-auto px-8 py-12">
        
        <div className="max-w-[800px] mx-auto">
          
          {/* Title Section */}
          <div className="text-center mb-12">
            <div className="inline-block p-4 bg-purple-100 rounded-full mb-4">
              <Search size={48} className="text-purple-600" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-3">Find Government Services</h1>
            <p className="text-lg text-muted-foreground">
              Search by service name, category, or what you need help with
            </p>
          </div>

          {/* Search Input */}
          <div className="relative mb-12">
            <div className="relative">
              <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                onFocus={() => query.length >= 2 && setShowSuggestions(true)}
                placeholder="Search for services... (e.g., passport, license, certificate)"
                className="w-full pl-12 pr-12 py-4 text-lg border-2 border-border rounded-lg focus:outline-none focus:border-primary shadow-sm"
                aria-label="Search for government services"
                aria-autocomplete="list"
                aria-controls="search-suggestions"
                aria-expanded={showSuggestions}
              />
              {isLoading && (
                <Loader size={20} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground animate-spin" />
              )}
              {query && !isLoading && (
                <button
                  onClick={handleClear}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-muted-foreground"
                  aria-label="Clear search"
                >
                  <X size={20} />
                </button>
              )}
            </div>

            {/* Suggestions Dropdown */}
            {showSuggestions && suggestions.length > 0 && (
              <div
                id="search-suggestions"
                role="listbox"
                className="absolute top-full left-0 right-0 mt-2 bg-card border-2 border-border rounded-lg shadow-lg z-10"
              >
                <div className="p-2">
                  <div className="text-xs font-bold text-muted-foreground px-3 py-2">
                    Suggested Services ({suggestions.length})
                  </div>
                  {suggestions.map((service, index) => (
                    <button
                      key={service.id}
                      role="option"
                      aria-selected={focusedIndex === index}
                      onClick={() => handleSelectService(service)}
                      className={`w-full text-left px-3 py-3 rounded transition-colors ${
                        focusedIndex === index
                          ? 'bg-blue-50 dark:bg-blue-950/30 border-l-4 border-primary'
                          : 'hover:bg-background'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-bold text-foreground">{service.name}</div>
                          <div className="text-sm text-muted-foreground">{service.department}</div>
                        </div>
                        <div className="text-xs bg-muted px-2 py-1 rounded">
                          {service.category}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* No Suggestions */}
            {showSuggestions && suggestions.length === 0 && !isLoading && query.length >= 2 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-card border-2 border-border rounded-lg shadow-lg z-10 p-6 text-center">
                <div className="text-muted-foreground mb-4">No services found for "{query}"</div>
                <Link
                  to="/patterns/search-discovery"
                  className="inline-flex items-center gap-2 text-primary hover:underline"
                >
                  <span>Try our guided service finder</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            )}
          </div>

          {/* Empty State - Show when no query */}
          {!query && (
            <div className="space-y-8">
              
              {/* Popular Searches */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp size={20} className="text-muted-foreground" />
                  <h2 className="text-lg font-bold text-foreground">Popular Services</h2>
                </div>
                <div className="flex flex-wrap gap-3">
                  {POPULAR_SEARCHES.map((search, i) => (
                    <button
                      key={i}
                      onClick={() => setQuery(search)}
                      className="px-4 py-2 bg-card border-2 border-border rounded-lg hover:border-primary hover:bg-blue-50 transition-colors"
                    >
                      {search}
                    </button>
                  ))}
                </div>
              </div>

              {/* Recent Searches */}
              {RECENT_SEARCHES.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Clock size={20} className="text-muted-foreground" />
                    <h2 className="text-lg font-bold text-foreground">Recent Searches</h2>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {RECENT_SEARCHES.map((search, i) => (
                      <button
                        key={i}
                        onClick={() => setQuery(search)}
                        className="px-4 py-2 bg-card border-2 border-border rounded-lg hover:border-primary hover:bg-blue-50 transition-colors flex items-center gap-2"
                      >
                        <Clock size={16} className="text-muted-foreground" />
                        {search}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Browse by Category */}
              <div>
                <h2 className="text-lg font-bold text-foreground mb-4">Browse by Category</h2>
                <div className="grid grid-cols-2 gap-4">
                  {['Civil Registration', 'Transport', 'Identity', 'Revenue', 'Election', 'Food & Supplies'].map((category, i) => (
                    <Link
                      key={i}
                      to={`/patterns/search-discovery/search-results?category=${category}`}
                      className="p-4 bg-card border-2 border-border rounded-lg hover:border-primary hover:shadow-md transition-all group"
                    >
                      <div className="font-bold text-foreground group-hover:text-primary mb-1">
                        {category}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {SERVICES.filter(s => s.category === category).length} services
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Help Section */}
              <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-300 rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-3">Need help finding a service?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Not sure which service you need? Our guided finder asks a few questions to help identify 
                  the right service for you.
                </p>
                <Link
                  to="/patterns/search-discovery"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded font-bold hover:opacity-90"
                >
                  <span>Start Guided Finder</span>
                  <ArrowRight size={20} />
                </Link>
              </div>

            </div>
          )}

          {/* Pattern Info */}
          <div className="mt-12 bg-purple-50 dark:bg-purple-950/30 border-2 border-purple-200 dark:border-purple-800 rounded-lg p-6">
            <h3 className="font-bold text-foreground mb-3">Pattern Behavior</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
              <div>
                <div className="text-muted-foreground mb-1">Autocomplete Trigger</div>
                <div className="font-bold text-foreground">2 characters</div>
              </div>
              <div>
                <div className="text-muted-foreground mb-1">Max Suggestions</div>
                <div className="font-bold text-foreground">5 results</div>
              </div>
              <div>
                <div className="text-muted-foreground mb-1">Keyboard Support</div>
                <div className="font-bold text-foreground">Arrow keys, Enter, Esc</div>
              </div>
            </div>
          </div>

          {/* States Documentation */}
          <div className="mt-6 bg-card border-2 border-border rounded-lg p-6">
            <h3 className="font-bold text-foreground mb-3">States Demonstrated</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <div className="font-bold text-muted-foreground mb-2">✅ Implemented</div>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Empty state (no query)</li>
                  <li>• Typing with autocomplete</li>
                  <li>• Loading indicator</li>
                  <li>• Suggestions display</li>
                  <li>• Keyboard navigation</li>
                </ul>
              </div>
              <div>
                <div className="font-bold text-muted-foreground mb-2">✅ Implemented</div>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• No results found</li>
                  <li>• Clear search button</li>
                  <li>• Popular searches</li>
                  <li>• Recent searches</li>
                  <li>• Category browsing</li>
                </ul>
              </div>
            </div>
          </div>

        </div>

      </main>
    </div>
  );
}
