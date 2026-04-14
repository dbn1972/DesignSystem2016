import { useState } from "react";
import { Link } from "react-router";
import { Table, ArrowLeft, Upload, Download, Plus, Trash2, CheckCircle } from "lucide-react";

export default function BulkDataEntryPattern() {
  const [rows, setRows] = useState([
    { id: 1, name: "Rajesh Kumar", email: "rajesh@example.com", phone: "9876543210", department: "IT" },
    { id: 2, name: "Priya Sharma", email: "priya@example.com", phone: "9876543211", department: "HR" },
    { id: 3, name: "", email: "", phone: "", department: "" },
  ]);

  const addRow = () => {
    setRows([...rows, { id: rows.length + 1, name: "", email: "", phone: "", department: "" }]);
  };

  const deleteRow = (id: number) => {
    setRows(rows.filter(row => row.id !== id));
  };

  const updateRow = (id: number, field: string, value: string) => {
    setRows(rows.map(row => row.id === id ? {...row, [field]: value} : row));
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-gradient-to-br from-amber-50 via-white to-yellow-50 border-b-4 border-[#FF9933]">
        <div className="max-w-[1400px] mx-auto px-12 py-16">
          <div className="mb-6">
            <Link to="/patterns/data-input" className="text-sm text-muted-foreground hover:text-primary">
              ← Back to Data Input Patterns
            </Link>
          </div>
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-yellow-500 border-3 border-white shadow-lg rounded-lg flex items-center justify-center">
                <Table size={40} className="text-white" />
              </div>
              <div>
                <div className="text-sm font-bold text-primary mb-2 uppercase tracking-wide">Data Input Pattern</div>
                <h1 className="text-5xl font-bold text-foreground">Bulk Data Entry</h1>
              </div>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              Spreadsheet-like interface for entering multiple records at once with CSV import/export,
              inline editing, and batch validation for efficient mass data entry.
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto px-12 py-12">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-8">
            <div className="bg-amber-50 border-2 border-amber-200 rounded-lg p-6 mb-6">
              <h2 className="font-bold text-foreground mb-2">Interactive Demo</h2>
              <p className="text-sm text-muted-foreground">
                Add, edit, or delete multiple employee records. Try importing from CSV or entering data manually.
              </p>
            </div>

            {/* Toolbar */}
            <div className="bg-card border-2 border-border rounded-lg p-4 mb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <button
                    onClick={addRow}
                    className="px-4 py-2 bg-primary text-white rounded font-bold hover:opacity-90 flex items-center gap-2 text-sm"
                  >
                    <Plus size={16} />
                    Add Row
                  </button>
                  <button className="px-4 py-2 border-2 border-border rounded font-bold hover:bg-background flex items-center gap-2 text-sm">
                    <Upload size={16} />
                    Import CSV
                  </button>
                  <button className="px-4 py-2 border-2 border-border rounded font-bold hover:bg-background flex items-center gap-2 text-sm">
                    <Download size={16} />
                    Export CSV
                  </button>
                </div>
                <div className="text-sm text-muted-foreground">
                  <strong>{rows.length}</strong> rows
                </div>
              </div>
            </div>

            {/* Spreadsheet Table */}
            <div className="bg-card border-2 border-border rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-muted border-b-2 border-border">
                      <th className="px-4 py-3 text-left text-xs font-bold text-muted-foreground uppercase w-8">#</th>
                      <th className="px-4 py-3 text-left text-xs font-bold text-muted-foreground uppercase">
                        Name <span className="text-red-600">*</span>
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-bold text-muted-foreground uppercase">
                        Email <span className="text-red-600">*</span>
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-bold text-muted-foreground uppercase">
                        Phone
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-bold text-muted-foreground uppercase">
                        Department
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-bold text-muted-foreground uppercase w-16">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((row, idx) => (
                      <tr key={row.id} className={`border-b border-border ${idx % 2 === 0 ? 'bg-card' : 'bg-background'} hover:bg-blue-50`}>
                        <td className="px-4 py-2 text-sm text-muted-foreground">{idx + 1}</td>
                        <td className="px-4 py-2">
                          <input
                            type="text"
                            value={row.name}
                            onChange={(e) => updateRow(row.id, 'name', e.target.value)}
                            placeholder="Enter name"
                            className="w-full px-2 py-1.5 border border-border rounded text-sm focus:border-primary focus:outline-none"
                          />
                        </td>
                        <td className="px-4 py-2">
                          <input
                            type="email"
                            value={row.email}
                            onChange={(e) => updateRow(row.id, 'email', e.target.value)}
                            placeholder="email@example.com"
                            className="w-full px-2 py-1.5 border border-border rounded text-sm focus:border-primary focus:outline-none"
                          />
                        </td>
                        <td className="px-4 py-2">
                          <input
                            type="tel"
                            value={row.phone}
                            onChange={(e) => updateRow(row.id, 'phone', e.target.value)}
                            placeholder="9876543210"
                            className="w-full px-2 py-1.5 border border-border rounded text-sm focus:border-primary focus:outline-none"
                          />
                        </td>
                        <td className="px-4 py-2">
                          <select
                            value={row.department}
                            onChange={(e) => updateRow(row.id, 'department', e.target.value)}
                            className="w-full px-2 py-1.5 border border-border rounded text-sm focus:border-primary focus:outline-none"
                          >
                            <option value="">Select...</option>
                            <option value="IT">IT</option>
                            <option value="HR">HR</option>
                            <option value="Finance">Finance</option>
                            <option value="Operations">Operations</option>
                          </select>
                        </td>
                        <td className="px-4 py-2">
                          <button
                            onClick={() => deleteRow(row.id)}
                            className="text-red-600 hover:text-red-800"
                            title="Delete row"
                          >
                            <Trash2 size={16} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="border-t-2 border-border px-4 py-3 bg-background">
                <button
                  onClick={addRow}
                  className="text-sm text-primary hover:underline flex items-center gap-1"
                >
                  <Plus size={14} />
                  Add another row
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-6 flex items-center justify-between">
              <div className="text-sm text-muted-foreground">
                <CheckCircle size={14} className="inline text-green-600 mr-1" />
                Auto-saves as you type
              </div>
              <div className="flex gap-3">
                <button className="px-6 py-3 border-2 border-border rounded font-bold hover:bg-background">
                  Cancel
                </button>
                <button className="px-6 py-3 bg-primary text-white rounded font-bold hover:opacity-90">
                  Save All Records
                </button>
              </div>
            </div>

            {/* CSV Import Example */}
            <div className="mt-8 bg-card border-2 border-border rounded-lg p-6">
              <h3 className="font-bold text-foreground mb-4">CSV Import Format</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Download the template or format your CSV file with these columns:
              </p>

              <div className="bg-gray-900 text-gray-100 rounded-lg p-4 text-xs font-mono overflow-x-auto mb-4">
                <pre>{`Name,Email,Phone,Department
Rajesh Kumar,rajesh@example.com,9876543210,IT
Priya Sharma,priya@example.com,9876543211,HR
Amit Patel,amit@example.com,9876543212,Finance`}</pre>
              </div>

              <div className="flex gap-3">
                <button className="px-4 py-2 border-2 border-border rounded font-bold hover:bg-background text-sm flex items-center gap-2">
                  <Download size={16} />
                  Download Template
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded font-bold hover:bg-blue-700 text-sm flex items-center gap-2">
                  <Upload size={16} />
                  Upload CSV File
                </button>
              </div>
            </div>

            {/* Implementation Guide */}
            <div className="mt-8 space-y-6">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Key Features</h2>
                <div className="bg-card border-2 border-border rounded-lg p-6">
                  <div className="space-y-4 text-sm">
                    <div>
                      <h3 className="font-bold text-foreground mb-1">1. Inline Editing</h3>
                      <p className="text-muted-foreground">
                        Edit cells directly without modal dialogs. Tab/Enter to move between cells like Excel.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">2. CSV Import/Export</h3>
                      <p className="text-muted-foreground">
                        Allow bulk upload via CSV. Validate format and show errors before import.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">3. Batch Validation</h3>
                      <p className="text-muted-foreground">
                        Validate all rows on submit. Highlight rows with errors and prevent submission until fixed.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">4. Auto-save</h3>
                      <p className="text-muted-foreground">
                        Save progress automatically every few seconds to prevent data loss.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">5. Keyboard Shortcuts</h3>
                      <p className="text-muted-foreground">
                        Ctrl+Enter for new row, Ctrl+S to save, Delete to remove row. Power user efficiency.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Libraries & Tools</h2>
                <div className="bg-card border-2 border-border rounded-lg p-6 space-y-4 text-sm">
                  <div>
                    <h3 className="font-bold text-foreground mb-2">AG Grid / React Data Grid</h3>
                    <p className="text-muted-foreground mb-2">
                      Professional-grade data grid with Excel-like features, inline editing, CSV export.
                    </p>
                    <div className="bg-gray-900 text-gray-100 rounded p-3 text-xs font-mono">
                      {`npm install ag-grid-react ag-grid-community`}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold text-foreground mb-2">React Table</h3>
                    <p className="text-muted-foreground mb-2">
                      Lightweight, headless table library for custom bulk entry interfaces.
                    </p>
                    <div className="bg-gray-900 text-gray-100 rounded p-3 text-xs font-mono">
                      {`npm install @tanstack/react-table`}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold text-foreground mb-2">PapaParse (CSV Parsing)</h3>
                    <p className="text-muted-foreground">
                      Fast, in-browser CSV parser for import/export functionality.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Best Practices</h2>
                <div className="bg-card border-2 border-border rounded-lg p-6 space-y-3 text-sm">
                  <div>
                    <h3 className="font-bold text-foreground mb-1">1. Provide CSV Template</h3>
                    <p className="text-muted-foreground">
                      Offer downloadable CSV template with correct column headers and example data.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">2. Show Row Numbers</h3>
                    <p className="text-muted-foreground">
                      Display row numbers for easy reference when reporting errors ("Error in row 15").
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">3. Highlight Validation Errors</h3>
                    <p className="text-muted-foreground">
                      Use red borders/backgrounds on invalid cells. Show error message on hover.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">4. Limit Initial Rows</h3>
                    <p className="text-muted-foreground">
                      Start with 3-5 empty rows. Add more on demand. Don't overwhelm with 50 blank rows.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">5. Pagination for Large Datasets</h3>
                    <p className="text-muted-foreground">
                      For 100+ rows, use pagination or virtual scrolling to maintain performance.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">6. Confirm Before Delete</h3>
                    <p className="text-muted-foreground">
                      Ask confirmation when deleting rows with data. Easy to accidentally click delete.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Performance Tips</h2>
                <div className="bg-card border-2 border-border rounded-lg p-6 space-y-2 text-sm text-muted-foreground">
                  <p>• Use virtualization for tables with 100+ rows (react-window, react-virtualized)</p>
                  <p>• Debounce validation to avoid checking on every keystroke</p>
                  <p>• Implement client-side validation before submitting to server</p>
                  <p>• Show progress indicator during CSV import/export</p>
                  <p>• Limit CSV import to 1000-5000 rows max, suggest database upload for larger datasets</p>
                </div>
              </section>
            </div>
          </div>

          <aside className="col-span-4">
            <div className="sticky top-8 space-y-6">
              <div className="bg-card border-2 border-border rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-4">Pattern Information</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Complexity</div>
                    <div className="font-bold">Medium-High</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Time Saved</div>
                    <div className="font-bold">10x faster than one-by-one</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Ideal For</div>
                    <div className="font-bold">10+ similar records</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">User Skill</div>
                    <div className="font-bold">Intermediate</div>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border-2 border-amber-200 rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-3">When to Use</h3>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li>✓ Adding multiple employees</li>
                  <li>✓ Uploading beneficiary lists</li>
                  <li>✓ Batch student enrollment</li>
                  <li>✓ Importing inventory items</li>
                  <li>✓ Mass certificate requests</li>
                  <li>✓ Bulk transaction entry</li>
                </ul>
              </div>

              <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-3">When NOT to Use</h3>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li>✗ Single/few records (1-3)</li>
                  <li>✗ Complex nested forms</li>
                  <li>✗ Mobile-first applications</li>
                  <li>✗ Non-tabular data</li>
                </ul>
              </div>

              <div className="bg-card border-2 border-border rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-4">Impact Metrics</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="text-2xl font-bold text-green-600 mb-1">-90%</div>
                    <div className="text-xs text-muted-foreground">Time for 50+ records</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600 mb-1">10x</div>
                    <div className="text-xs text-muted-foreground">Faster than individual forms</div>
                  </div>
                </div>
              </div>

              <div className="bg-card border-2 border-border rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-4">Related Patterns</h3>
                <div className="space-y-2">
                  <Link to="/patterns/data-input/repeatable-sections" className="block text-sm text-primary hover:underline">
                    → Repeatable Sections
                  </Link>
                  <Link to="/patterns/data-input/upload-extract" className="block text-sm text-primary hover:underline">
                    → Upload → Auto-extract
                  </Link>
                  <Link to="/patterns/form-validation" className="block text-sm text-primary hover:underline">
                    → Form Validation
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
