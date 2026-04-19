import React, { useState } from "react";
import { Link } from "react-router";
import { Table, ArrowLeft, Upload, Download, Plus, Trash2, CheckCircle, Copy, Check } from "lucide-react";

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
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-16">
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
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">Bulk Data Entry</h1>
              </div>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              Spreadsheet-like interface for entering multiple records at once with CSV import/export,
              inline editing, and batch validation for efficient mass data entry.
            </p>
          </div>
        </div>
      </header>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-8">
            <div className="bg-amber-50 dark:bg-amber-950/30 border-2 border-amber-200 dark:border-amber-800 rounded-lg p-6 mb-6">
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
                      <tr key={row.id} className={`border-b border-border ${idx % 2 === 0 ? 'bg-card' : 'bg-background'} hover:bg-blue-50 dark:bg-blue-900/20`}>
                        <td className="px-4 py-2 text-sm text-muted-foreground">{idx + 1}</td>
                        <td className="px-4 py-2">
                          <input aria-label="text input" type="text"
                            value={row.name}
                            onChange={(e) => updateRow(row.id, 'name', e.target.value)}
                            placeholder="Enter name"
                            className="w-full px-2 py-1.5 border border-border rounded text-sm focus:border-primary focus:outline-none"
                          />
                        </td>
                        <td className="px-4 py-2">
                          <input aria-label="email input" type="email"
                            value={row.email}
                            onChange={(e) => updateRow(row.id, 'email', e.target.value)}
                            placeholder="email@example.com"
                            className="w-full px-2 py-1.5 border border-border rounded text-sm focus:border-primary focus:outline-none"
                          />
                        </td>
                        <td className="px-4 py-2">
                          <input aria-label="tel input" type="tel"
                            value={row.phone}
                            onChange={(e) => updateRow(row.id, 'phone', e.target.value)}
                            placeholder="9876543210"
                            className="w-full px-2 py-1.5 border border-border rounded text-sm focus:border-primary focus:outline-none"
                          />
                        </td>
                        <td className="px-4 py-2">
                          <select aria-label="Select option" value={row.department}
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
                            className="text-red-600 hover:text-red-800 dark:text-red-300"
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

          <div className="col-span-4">
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

              <div className="bg-amber-50 dark:bg-amber-950/30 border-2 border-amber-200 dark:border-amber-800 rounded-lg p-6">
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

              <div className="bg-yellow-50 dark:bg-yellow-950/30 border-2 border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
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
          </div>
        </div>

        <BulkDataCodeDownloads />

      </div>
    </div>
  );
}

// ==================== CODE DOWNLOADS ====================

const BULK_REACT_CODE = `import React, { useState, useCallback } from 'react';

interface Row { id: number; name: string; aadhaar: string; mobile: string; service: string; status: 'pending' | 'valid' | 'error'; error?: string; }

let nextId = 1;
const emptyRow = (): Row => ({ id: nextId++, name: '', aadhaar: '', mobile: '', service: '', status: 'pending' });

export function BulkDataEntryPage() {
  const [rows, setRows] = useState<Row[]>([emptyRow(), emptyRow(), emptyRow()]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const updateRow = (id: number, field: keyof Row, value: string) => {
    setRows(prev => prev.map(r => r.id === id ? { ...r, [field]: value, status: 'pending' } : r));
  };

  const addRow = () => setRows(prev => [...prev, emptyRow()]);
  const removeRow = (id: number) => setRows(prev => prev.filter(r => r.id !== id));

  const validateAll = useCallback(() => {
    setRows(prev => prev.map(r => {
      if (!r.name.trim()) return { ...r, status: 'error' as const, error: 'Name required' };
      if (r.aadhaar && !/^\\d{12}$/.test(r.aadhaar.replace(/\\s/g, ''))) return { ...r, status: 'error' as const, error: 'Invalid Aadhaar' };
      if (r.mobile && !/^[6-9]\\d{9}$/.test(r.mobile)) return { ...r, status: 'error' as const, error: 'Invalid mobile' };
      return { ...r, status: 'valid' as const, error: undefined };
    }));
  }, []);

  const handleSubmit = async () => {
    validateAll();
    const hasErrors = rows.some(r => r.status === 'error');
    if (hasErrors) { setError('Fix validation errors before submitting'); return; }
    setLoading(true); setError('');
    try {
      const res = await fetch('/api/bulk/submit', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ rows: rows.map(({ id, status, error, ...rest }) => rest) }),
      });
      if (!res.ok) { setError('Submission failed'); return; }
      setSubmitted(true);
    } catch { setError('Network error'); }
    finally { setLoading(false); }
  };

  const handleCSVUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const text = ev.target?.result as string;
      const lines = text.split('\\n').slice(1).filter(l => l.trim());
      const newRows = lines.map(line => {
        const [name, aadhaar, mobile, service] = line.split(',').map(s => s.trim());
        return { ...emptyRow(), name: name || '', aadhaar: aadhaar || '', mobile: mobile || '', service: service || '' };
      });
      if (newRows.length) setRows(newRows);
    };
    reader.readAsText(file);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-4">
        <div className="w-full max-w-md bg-card border border-border rounded-2xl p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"><svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></div>
          <h2 className="text-xl font-bold text-foreground mb-2">Bulk Submission Complete</h2>
          <p className="text-muted-foreground">{rows.length} records submitted successfully.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div><h1 className="text-2xl font-bold text-foreground">Bulk Data Entry</h1><p className="text-sm text-muted-foreground">{rows.length} records</p></div>
          <div className="flex gap-3">
            <label className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-lg text-sm font-semibold cursor-pointer hover:bg-muted"><input type="file" accept=".csv" onChange={handleCSVUpload} className="hidden" />📁 Import CSV</label>
            <button onClick={addRow} className="px-4 py-2 border border-border rounded-lg text-sm font-semibold hover:bg-muted">+ Add Row</button>
          </div>
        </div>
        {error && <div role="alert" className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-sm text-red-700 dark:text-red-400">{error}</div>}
        <div className="bg-card border border-border rounded-2xl overflow-hidden">
          <table className="w-full text-sm">
            <thead><tr className="bg-muted"><th className="px-4 py-3 text-left font-semibold">#</th><th className="px-4 py-3 text-left font-semibold">Name *</th><th className="px-4 py-3 text-left font-semibold">Aadhaar</th><th className="px-4 py-3 text-left font-semibold">Mobile</th><th className="px-4 py-3 text-left font-semibold">Service</th><th className="px-4 py-3 text-left font-semibold">Status</th><th className="px-4 py-3"></th></tr></thead>
            <tbody>{rows.map((r, i) => (
              <tr key={r.id} className="border-t border-border">
                <td className="px-4 py-2 text-muted-foreground">{i + 1}</td>
                <td className="px-4 py-2"><input value={r.name} onChange={e => updateRow(r.id, 'name', e.target.value)} className="w-full px-2 py-1 border border-border rounded" placeholder="Full name" /></td>
                <td className="px-4 py-2"><input value={r.aadhaar} onChange={e => updateRow(r.id, 'aadhaar', e.target.value)} className="w-full px-2 py-1 border border-border rounded" placeholder="12 digits" maxLength={12} /></td>
                <td className="px-4 py-2"><input value={r.mobile} onChange={e => updateRow(r.id, 'mobile', e.target.value)} className="w-full px-2 py-1 border border-border rounded" placeholder="10 digits" maxLength={10} /></td>
                <td className="px-4 py-2"><select value={r.service} onChange={e => updateRow(r.id, 'service', e.target.value)} className="w-full px-2 py-1 border border-border rounded"><option value="">Select</option><option>Birth Cert</option><option>Caste Cert</option><option>Income Cert</option></select></td>
                <td className="px-4 py-2">{r.status === 'valid' ? <span className="text-green-600 font-semibold">✓</span> : r.status === 'error' ? <span className="text-red-600 text-xs" title={r.error}>✗ {r.error}</span> : <span className="text-muted-foreground">—</span>}</td>
                <td className="px-4 py-2"><button onClick={() => removeRow(r.id)} className="text-red-500 hover:text-red-700 dark:text-red-400" aria-label="Remove row">✕</button></td>
              </tr>
            ))}</tbody>
          </table>
        </div>
        <div className="flex gap-3 mt-6">
          <button onClick={validateAll} className="flex-1 py-3 border border-border rounded-lg font-semibold">Validate All</button>
          <button onClick={handleSubmit} disabled={loading} className="flex-1 py-3 bg-primary text-primary-foreground rounded-lg font-semibold disabled:opacity-60">{loading ? 'Submitting...' : 'Submit All'}</button>
        </div>
      </div>
    </div>
  );
}`;

const BULK_ANGULAR_CODE = `import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ux4g-bulk-data-entry',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: \`
    <div class="min-h-screen bg-background p-4">
      <div class="max-w-5xl mx-auto">
        <div class="flex items-center justify-between mb-6">
          <h1 class="text-2xl font-bold">Bulk Data Entry</h1>
          <button (click)="addRow()" class="px-4 py-2 border border-border rounded-lg text-sm font-semibold">+ Add Row</button>
        </div>
        <table class="w-full text-sm bg-card border border-border rounded-2xl overflow-hidden">
          <thead><tr class="bg-muted"><th class="px-4 py-3 text-left">#</th><th class="px-4 py-3 text-left">Name</th><th class="px-4 py-3 text-left">Aadhaar</th><th class="px-4 py-3 text-left">Mobile</th><th class="px-4 py-3"></th></tr></thead>
          <tbody><tr *ngFor="let r of rows; let i = index" class="border-t border-border">
            <td class="px-4 py-2">{{ i+1 }}</td>
            <td class="px-4 py-2"><input [(ngModel)]="r.name" class="w-full px-2 py-1 border border-border rounded" /></td>
            <td class="px-4 py-2"><input [(ngModel)]="r.aadhaar" maxlength="12" class="w-full px-2 py-1 border border-border rounded" /></td>
            <td class="px-4 py-2"><input [(ngModel)]="r.mobile" maxlength="10" class="w-full px-2 py-1 border border-border rounded" /></td>
            <td class="px-4 py-2"><button (click)="removeRow(i)" class="text-red-500">✕</button></td>
          </tr></tbody>
        </table>
        <button (click)="submit()" [disabled]="loading" class="w-full mt-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold disabled:opacity-60">{{ loading ? 'Submitting...' : 'Submit All' }}</button>
      </div>
    </div>
  \`
})
export class BulkDataEntryComponent {
  rows = [{ name: '', aadhaar: '', mobile: '' }, { name: '', aadhaar: '', mobile: '' }, { name: '', aadhaar: '', mobile: '' }];
  loading = false;
  addRow() { this.rows.push({ name: '', aadhaar: '', mobile: '' }); }
  removeRow(i: number) { this.rows.splice(i, 1); }
  async submit() { this.loading = true; try { await fetch('/api/bulk/submit', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ rows: this.rows }) }); alert('Submitted'); } catch { alert('Failed'); } finally { this.loading = false; } }
}`;

const BULK_HTML_CODE = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Bulk Data Entry — UX4G</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: system-ui, sans-serif; background: #f9fafb; padding: 2rem; }
    .container { max-width: 64rem; margin: 0 auto; }
    h1 { font-size: 1.5rem; font-weight: 700; margin-bottom: 1.5rem; }
    table { width: 100%; border-collapse: collapse; background: #fff; border: 1px solid #e5e7eb; border-radius: 1rem; overflow: hidden; }
    th { background: #f3f4f6; padding: 0.75rem 1rem; text-align: left; font-size: 0.875rem; font-weight: 600; }
    td { padding: 0.5rem 1rem; border-top: 1px solid #e5e7eb; }
    input { width: 100%; padding: 0.5rem; border: 1px solid #d1d5db; border-radius: 0.375rem; font-size: 0.875rem; outline: none; }
    .btn { padding: 0.75rem 1.5rem; background: #005196; color: #fff; border: none; border-radius: 0.5rem; font-weight: 600; cursor: pointer; margin-top: 1rem; }
    .btn-outline { background: #fff; color: #111; border: 1px solid #d1d5db; }
    .actions { display: flex; gap: 0.75rem; margin-bottom: 1rem; }
    .remove { background: none; border: none; color: #ef4444; cursor: pointer; font-size: 1rem; }
  </style>
</head>
<body>
  <div class="container">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.5rem">
      <h1>Bulk Data Entry</h1>
      <div class="actions"><button class="btn btn-outline" onclick="addRow()">+ Add Row</button></div>
    </div>
    <table><thead><tr><th>#</th><th>Name</th><th>Aadhaar</th><th>Mobile</th><th></th></tr></thead><tbody id="tbody"></tbody></table>
    <button class="btn" style="width:100%" onclick="submitAll()">Submit All</button>
  </div>
  <script>
    let rows = [{},{},{}];
    function render() {
      const tbody = document.getElementById('tbody');
      tbody.innerHTML = rows.map((r, i) =>
        '<tr><td>'+(i+1)+'</td><td><input value="'+(r.name||'')+'" oninput="rows['+i+'].name=this.value" placeholder="Name" /></td><td><input value="'+(r.aadhaar||'')+'" oninput="rows['+i+'].aadhaar=this.value" maxlength="12" placeholder="Aadhaar" /></td><td><input value="'+(r.mobile||'')+'" oninput="rows['+i+'].mobile=this.value" maxlength="10" placeholder="Mobile" /></td><td><button class="remove" onclick="removeRow('+i+')">✕</button></td></tr>'
      ).join('');
    }
    function addRow() { rows.push({}); render(); }
    function removeRow(i) { rows.splice(i, 1); render(); }
    async function submitAll() { try { await fetch('/api/bulk/submit', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ rows }) }); alert('Submitted '+rows.length+' records'); } catch { alert('Failed'); } }
    render();
  </script>
</body>
</html>`;

function BulkDataCodeDownloads() {
  const [copiedId, setCopiedId] = React.useState<string | null>(null);
  const copyToClipboard = (code: string, id: string) => { navigator.clipboard.writeText(code); setCopiedId(id); setTimeout(() => setCopiedId(null), 2000); };
  const downloadCode = (code: string, filename: string) => { const blob = new Blob([code], { type: 'text/plain' }); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = filename; a.click(); URL.revokeObjectURL(url); };
  const lanes = [
    { key: 'react', title: 'React', desc: 'TypeScript + Table + CSV Import', code: BULK_REACT_CODE, filename: 'BulkDataEntryPage.tsx' },
    { key: 'angular', title: 'Angular', desc: 'Standalone + FormsModule', code: BULK_ANGULAR_CODE, filename: 'bulk-data-entry.component.ts' },
    { key: 'html', title: 'HTML / CSS / JS', desc: 'No framework needed', code: BULK_HTML_CODE, filename: 'bulk-data-entry.html' },
  ];
  return (
    <section id="code-downloads" className="space-y-6 scroll-mt-24 mt-12">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Code Downloads</h2>
        <p className="text-muted-foreground mt-1">Production-ready Bulk Data Entry implementations.</p>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {lanes.map((lane) => (
          <div key={lane.key} className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <div className="h-1 bg-[#005196]" />
            <div className="flex flex-1 flex-col p-5">
              <div className="flex items-start justify-between gap-3 mb-4">
                <div>
                  <span className="inline-flex rounded-full border border-border bg-muted/60 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Framework lane</span>
                  <h3 className="text-lg font-bold text-foreground mt-2">{lane.title}</h3>
                  <p className="text-sm text-muted-foreground">{lane.desc}</p>
                </div>
                <button onClick={() => downloadCode(lane.code, lane.filename)} aria-label={`Download ${lane.title} code`} className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-border bg-background text-[#005196] hover:bg-[#005196] hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-[#005196]">
                  <Download size={16} />
                </button>
              </div>
              <div className="flex-1 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-muted-foreground">{lane.filename}</span>
                  <button onClick={() => copyToClipboard(lane.code, lane.key)} className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-background px-2.5 py-1.5 text-xs font-semibold text-foreground hover:border-primary hover:text-primary transition-colors">
                    {copiedId === lane.key ? <Check size={12} /> : <Copy size={12} />}
                    {copiedId === lane.key ? 'Copied' : 'Copy'}
                  </button>
                </div>
                <div tabIndex={0} role="region" aria-label={`${lane.title} code preview`} className="rounded-xl border border-border bg-slate-950 p-3 text-xs text-slate-100 shadow-inner max-h-64 overflow-auto">
                  <pre className="font-mono leading-5 whitespace-pre-wrap"><code>{lane.code.slice(0, 800)}...</code></pre>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

