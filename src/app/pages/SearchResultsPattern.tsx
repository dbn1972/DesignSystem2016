import { Link } from "react-router";
import { useState } from "react";
import { Search, Filter, Grid, List as ListIcon, ArrowRight, CheckCircle, Clock, MapPin } from "lucide-react";

const MOCK_RESULTS = [
  {
    id: 1,
    name: "Passport Application",
    description: "Apply for a new Indian passport for international travel. Required for all international travel outside India.",
    department: "Ministry of External Affairs",
    category: "Travel Documents",
    processingTime: "30-45 days",
    fee: "₹1,500",
    eligibility: ["Indian Citizen", "Age 18+", "Valid Address Proof"],
    popular: true,
    match: 95
  },
  {
    id: 2,
    name: "Passport Renewal",
    description: "Renew your existing passport that is expired or about to expire within 1 year.",
    department: "Ministry of External Affairs",
    category: "Travel Documents",
    processingTime: "15-30 days",
    fee: "₹1,500",
    eligibility: ["Existing Passport", "Indian Citizen"],
    popular: true,
    match: 90
  },
  {
    id: 3,
    name: "Passport Re-issue",
    description: "Re-issue passport for reasons like change of address, name change, or lost/damaged passport.",
    department: "Ministry of External Affairs",
    category: "Travel Documents",
    processingTime: "30 days",
    fee: "₹2,000",
    eligibility: ["Previous Passport Details", "FIR (if lost)"],
    popular: false,
    match: 85
  },
  {
    id: 4,
    name: "Passport Status Tracking",
    description: "Track the status of your passport application online using your application reference number.",
    department: "Ministry of External Affairs",
    category: "Status & Information",
    processingTime: "Instant",
    fee: "Free",
    eligibility: ["Application Reference Number"],
    popular: true,
    match: 75
  },
];

export default function SearchResultsPattern() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');
  const [sortBy, setSortBy] = useState('relevance');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const query = "passport"; // Simulated query
  const resultCount = MOCK_RESULTS.length;

  const filteredResults = selectedCategory
    ? MOCK_RESULTS.filter(r => r.category === selectedCategory)
    : MOCK_RESULTS;

  const sortedResults = [...filteredResults].sort((a, b) => {
    if (sortBy === 'relevance') return b.match - a.match;
    if (sortBy === 'popular') return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    return 0;
  });

  const categories = [...new Set(MOCK_RESULTS.map(r => r.category))];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b-2 border-gray-300">
        <div className="max-w-[1400px] mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link to="/patterns/search-discovery" className="text-sm text-gray-600 hover:text-[#000080]">
                ← Back to Patterns
              </Link>
              <span className="text-gray-400">|</span>
              <span className="text-sm font-bold text-gray-900">Search Results</span>
            </div>
          </div>
        </div>
      </header>

      {/* Search Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-8 py-6">
          <div className="relative max-w-[600px]">
            <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={query}
              readOnly
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg bg-gray-50"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-[1400px] mx-auto px-8 py-8">
        
        <div className="grid grid-cols-12 gap-8">
          
          {/* Sidebar - Filters */}
          <aside className="col-span-3">
            <div className="bg-white border-2 border-gray-300 rounded-lg p-6 sticky top-24">
              <div className="flex items-center gap-2 mb-6">
                <Filter size={20} className="text-gray-700" />
                <h2 className="font-bold text-gray-900">Filters</h2>
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <h3 className="font-bold text-sm text-gray-900 mb-3">Category</h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="category"
                      checked={selectedCategory === null}
                      onChange={() => setSelectedCategory(null)}
                      className="w-4 h-4"
                    />
                    <span className="text-sm text-gray-700">All Categories</span>
                  </label>
                  {categories.map(cat => (
                    <label key={cat} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        checked={selectedCategory === cat}
                        onChange={() => setSelectedCategory(cat)}
                        className="w-4 h-4"
                      />
                      <span className="text-sm text-gray-700">{cat}</span>
                      <span className="ml-auto text-xs text-gray-500">
                        ({MOCK_RESULTS.filter(r => r.category === cat).length})
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Department Filter */}
              <div>
                <h3 className="font-bold text-sm text-gray-900 mb-3">Department</h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4" defaultChecked />
                    <span className="text-sm text-gray-700">Ministry of External Affairs</span>
                    <span className="ml-auto text-xs text-gray-500">(4)</span>
                  </label>
                </div>
              </div>

              {/* Clear Filters */}
              {selectedCategory && (
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="mt-6 w-full py-2 text-sm text-[#000080] hover:underline"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </aside>

          {/* Results */}
          <div className="col-span-9">
            
            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 mb-1">
                  Search Results for "{query}"
                </h1>
                <p className="text-sm text-gray-600">
                  {sortedResults.length} {sortedResults.length === 1 ? 'service' : 'services'} found
                </p>
              </div>
              <div className="flex items-center gap-4">
                {/* Sort */}
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-700">Sort by:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-3 py-2 border-2 border-gray-300 rounded text-sm"
                  >
                    <option value="relevance">Relevance</option>
                    <option value="popular">Most Popular</option>
                    <option value="name">Name (A-Z)</option>
                  </select>
                </div>
                
                {/* View Toggle */}
                <div className="flex border-2 border-gray-300 rounded">
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 ${viewMode === 'list' ? 'bg-gray-200' : 'bg-white'}`}
                    aria-label="List view"
                  >
                    <ListIcon size={20} />
                  </button>
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 border-l-2 border-gray-300 ${viewMode === 'grid' ? 'bg-gray-200' : 'bg-white'}`}
                    aria-label="Grid view"
                  >
                    <Grid size={20} />
                  </button>
                </div>
              </div>
            </div>

            {/* Results List */}
            <div className={viewMode === 'grid' ? 'grid grid-cols-2 gap-6' : 'space-y-4'}>
              {sortedResults.map((result) => (
                <ResultCard key={result.id} result={result} viewMode={viewMode} query={query} />
              ))}
            </div>

            {/* No Results */}
            {sortedResults.length === 0 && (
              <div className="bg-white border-2 border-gray-300 rounded-lg p-12 text-center">
                <div className="text-gray-600 mb-4">No services found with current filters</div>
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="px-6 py-3 bg-[#000080] text-white rounded font-bold"
                >
                  Clear Filters
                </button>
              </div>
            )}

          </div>

        </div>

        {/* Pattern Info */}
        <div className="mt-12 bg-white border-2 border-gray-300 rounded-lg p-6">
          <h3 className="font-bold text-gray-900 mb-4">Pattern Features Demonstrated</h3>
          <div className="grid grid-cols-4 gap-6 text-sm">
            <div>
              <div className="font-bold text-gray-700 mb-2">Filtering</div>
              <ul className="space-y-1 text-gray-600">
                <li>• Category filter</li>
                <li>• Department filter</li>
                <li>• Clear filters</li>
              </ul>
            </div>
            <div>
              <div className="font-bold text-gray-700 mb-2">Sorting</div>
              <ul className="space-y-1 text-gray-600">
                <li>• By relevance</li>
                <li>• By popularity</li>
                <li>• By name</li>
              </ul>
            </div>
            <div>
              <div className="font-bold text-gray-700 mb-2">Views</div>
              <ul className="space-y-1 text-gray-600">
                <li>• List view</li>
                <li>• Grid view</li>
                <li>• Responsive layout</li>
              </ul>
            </div>
            <div>
              <div className="font-bold text-gray-700 mb-2">Display</div>
              <ul className="space-y-1 text-gray-600">
                <li>• Relevance score</li>
                <li>• Keyword highlight</li>
                <li>• Service details</li>
              </ul>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}

// ==================== COMPONENTS ====================

function ResultCard({ result, viewMode, query }: {
  result: typeof MOCK_RESULTS[0];
  viewMode: 'grid' | 'list';
  query: string;
}) {
  const highlightText = (text: string) => {
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return parts.map((part, i) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <mark key={i} className="bg-yellow-200 font-bold">{part}</mark>
      ) : (
        part
      )
    );
  };

  return (
    <div className="bg-white border-2 border-gray-300 rounded-lg p-6 hover:border-[#000080] hover:shadow-md transition-all">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-lg font-bold text-gray-900">
              {highlightText(result.name)}
            </h3>
            {result.popular && (
              <span className="px-2 py-1 bg-yellow-100 border border-yellow-300 text-yellow-800 text-xs font-bold rounded">
                POPULAR
              </span>
            )}
          </div>
          <p className="text-sm text-gray-600 mb-2">{result.department}</p>
        </div>
        <div className="text-right">
          <div className="text-xs text-gray-500 mb-1">Relevance</div>
          <div className="text-lg font-bold text-[#138808]">{result.match}%</div>
        </div>
      </div>

      <p className="text-sm text-gray-700 mb-4">{result.description}</p>

      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
        <div className="flex items-center gap-2">
          <Clock size={16} className="text-gray-500" />
          <div>
            <div className="text-xs text-gray-500">Processing Time</div>
            <div className="font-bold text-gray-900">{result.processingTime}</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <MapPin size={16} className="text-gray-500" />
          <div>
            <div className="text-xs text-gray-500">Application Fee</div>
            <div className="font-bold text-gray-900">{result.fee}</div>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <div className="text-xs font-bold text-gray-600 mb-2">Eligibility:</div>
        <div className="flex flex-wrap gap-2">
          {result.eligibility.map((req, i) => (
            <span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded flex items-center gap-1">
              <CheckCircle size={12} className="text-green-600" />
              {req}
            </span>
          ))}
        </div>
      </div>

      <div className="flex gap-3">
        <button className="flex-1 px-4 py-2 bg-[#000080] text-white rounded font-bold hover:bg-[#000060]">
          Apply Now
        </button>
        <button className="px-4 py-2 border-2 border-gray-300 text-gray-700 rounded font-bold hover:border-gray-400 flex items-center gap-2">
          <span>Learn More</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
