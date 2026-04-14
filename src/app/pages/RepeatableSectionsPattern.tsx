import { useState } from "react";
import { Link } from "react-router";
import { Copy, ArrowLeft, Plus, Trash2, GripVertical } from "lucide-react";

export default function RepeatableSectionsPattern() {
  const [dependents, setDependents] = useState([
    { id: 1, name: "", relation: "", age: "" },
  ]);

  const [education, setEducation] = useState([
    { id: 1, degree: "", institution: "", year: "", percentage: "" },
  ]);

  const addDependent = () => {
    setDependents([...dependents, { id: dependents.length + 1, name: "", relation: "", age: "" }]);
  };

  const removeDependent = (id: number) => {
    if (dependents.length > 1) {
      setDependents(dependents.filter(d => d.id !== id));
    }
  };

  const addEducation = () => {
    setEducation([...education, { id: education.length + 1, degree: "", institution: "", year: "", percentage: "" }]);
  };

  const removeEducation = (id: number) => {
    if (education.length > 1) {
      setEducation(education.filter(e => e.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-gradient-to-br from-pink-50 via-white to-rose-50 border-b-4 border-[#FF9933]">
        <div className="max-w-[1400px] mx-auto px-12 py-16">
          <div className="mb-6">
            <Link to="/patterns/data-input" className="text-sm text-muted-foreground hover:text-primary">
              ← Back to Data Input Patterns
            </Link>
          </div>
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-rose-500 border-3 border-white shadow-lg rounded-lg flex items-center justify-center">
                <Copy size={40} className="text-white" />
              </div>
              <div>
                <div className="text-sm font-bold text-primary mb-2 uppercase tracking-wide">Data Input Pattern</div>
                <h1 className="text-5xl font-bold text-foreground">Repeatable Sections</h1>
              </div>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              Dynamically add or remove form field groups for variable-length data like family members,
              education history, work experience, or addresses.
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto px-12 py-12">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-8">
            <div className="bg-pink-50 border-2 border-pink-200 rounded-lg p-6 mb-6">
              <h2 className="font-bold text-foreground mb-2">Interactive Demo</h2>
              <p className="text-sm text-muted-foreground">
                Add or remove family members and education records using the dynamic form sections below.
              </p>
            </div>

            {/* Example 1: Simple Repeatable (Dependents) */}
            <div className="bg-card border-2 border-border rounded-lg p-8 mb-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-foreground">Family Dependents</h3>
                <span className="text-sm text-muted-foreground">{dependents.length} dependent(s)</span>
              </div>

              <div className="space-y-4">
                {dependents.map((dependent, index) => (
                  <div key={dependent.id} className="bg-background border-2 border-border rounded-lg p-6 relative">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2 text-sm font-bold text-muted-foreground">
                        <GripVertical size={16} className="text-gray-400" />
                        Dependent {index + 1}
                      </div>
                      {dependents.length > 1 && (
                        <button
                          onClick={() => removeDependent(dependent.id)}
                          className="text-red-600 hover:text-red-800 flex items-center gap-1 text-sm"
                        >
                          <Trash2 size={16} />
                          Remove
                        </button>
                      )}
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-bold text-foreground mb-2">
                          Full Name <span className="text-red-600">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Enter name"
                          className="w-full px-4 py-2 border-2 border-border rounded focus:border-primary focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-foreground mb-2">
                          Relation <span className="text-red-600">*</span>
                        </label>
                        <select className="w-full px-4 py-2 border-2 border-border rounded focus:border-primary focus:outline-none">
                          <option value="">Select...</option>
                          <option value="spouse">Spouse</option>
                          <option value="child">Child</option>
                          <option value="parent">Parent</option>
                          <option value="sibling">Sibling</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-foreground mb-2">
                          Age <span className="text-red-600">*</span>
                        </label>
                        <input
                          type="number"
                          placeholder="Age"
                          className="w-full px-4 py-2 border-2 border-border rounded focus:border-primary focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={addDependent}
                className="mt-4 px-4 py-2 border-2 border-dashed border-border rounded-lg text-primary font-bold hover:bg-blue-50 hover:border-primary w-full flex items-center justify-center gap-2"
              >
                <Plus size={18} />
                Add Another Dependent
              </button>
            </div>

            {/* Example 2: Complex Repeatable (Education) */}
            <div className="bg-card border-2 border-border rounded-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-foreground">Education History</h3>
                <span className="text-sm text-muted-foreground">{education.length} qualification(s)</span>
              </div>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={edu.id} className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2 text-sm font-bold text-muted-foreground">
                        <GripVertical size={16} className="text-gray-400" />
                        Education {index + 1}
                      </div>
                      {education.length > 1 && (
                        <button
                          onClick={() => removeEducation(edu.id)}
                          className="text-red-600 hover:text-red-800 flex items-center gap-1 text-sm"
                        >
                          <Trash2 size={16} />
                          Remove
                        </button>
                      )}
                    </div>

                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-bold text-foreground mb-2">
                            Degree/Qualification <span className="text-red-600">*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="e.g., B.Tech Computer Science"
                            className="w-full px-4 py-2 border-2 border-border rounded focus:border-primary focus:outline-none"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-bold text-foreground mb-2">
                            Year of Completion <span className="text-red-600">*</span>
                          </label>
                          <input
                            type="number"
                            placeholder="YYYY"
                            className="w-full px-4 py-2 border-2 border-border rounded focus:border-primary focus:outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-foreground mb-2">
                          Institution Name <span className="text-red-600">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="University/College/School name"
                          className="w-full px-4 py-2 border-2 border-border rounded focus:border-primary focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-foreground mb-2">
                          Percentage/CGPA
                        </label>
                        <input
                          type="text"
                          placeholder="e.g., 85% or 8.5 CGPA"
                          className="w-full px-4 py-2 border-2 border-border rounded focus:border-primary focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={addEducation}
                className="mt-4 px-4 py-2 border-2 border-dashed border-blue-300 rounded-lg text-primary font-bold hover:bg-blue-50 hover:border-primary w-full flex items-center justify-center gap-2"
              >
                <Plus size={18} />
                Add Another Qualification
              </button>
            </div>

            {/* Variations */}
            <div className="mt-8 bg-card border-2 border-border rounded-lg p-8">
              <h3 className="font-bold text-foreground mb-4">Pattern Variations</h3>

              <div className="space-y-6">
                {/* Inline Add */}
                <div>
                  <h4 className="text-sm font-bold text-foreground mb-3">1. Inline Add (Compact)</h4>
                  <div className="bg-background border border-border rounded-lg p-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <span>1.</span>
                        <input type="text" value="rajesh@example.com" className="flex-1 px-3 py-1.5 border border-border rounded text-sm" readOnly />
                        <button className="text-red-600 hover:text-red-800">
                          <Trash2 size={16} />
                        </button>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <span>2.</span>
                        <input type="text" value="priya@example.com" className="flex-1 px-3 py-1.5 border border-border rounded text-sm" readOnly />
                        <button className="text-red-600 hover:text-red-800">
                          <Trash2 size={16} />
                        </button>
                      </div>
                      <button className="text-sm text-primary hover:underline flex items-center gap-1">
                        <Plus size={14} />
                        Add email
                      </button>
                    </div>
                  </div>
                </div>

                {/* Pre-populated */}
                <div>
                  <h4 className="text-sm font-bold text-foreground mb-3">2. Pre-populated Sections</h4>
                  <div className="bg-background border border-border rounded-lg p-4">
                    <p className="text-sm text-muted-foreground mb-3">
                      Show 2-3 empty sections by default instead of just one. Reduces clicks for common cases.
                    </p>
                    <div className="space-y-2 text-xs text-muted-foreground">
                      <div className="flex items-center gap-2">
                        • Address 1: <span className="text-gray-400">[Empty field ready]</span>
                      </div>
                      <div className="flex items-center gap-2">
                        • Address 2: <span className="text-gray-400">[Empty field ready]</span>
                      </div>
                      <div className="flex items-center gap-2">
                        • Address 3: <span className="text-gray-400">[Empty field ready]</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Drag to Reorder */}
                <div>
                  <h4 className="text-sm font-bold text-foreground mb-3">3. Drag to Reorder</h4>
                  <div className="bg-background border border-border rounded-lg p-4">
                    <p className="text-sm text-muted-foreground">
                      For ordered lists (priority, sequence), allow drag-and-drop reordering with grip handle.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Implementation Guide */}
            <div className="mt-8 space-y-6">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Implementation Pattern</h2>
                <div className="bg-card border-2 border-border rounded-lg p-6">
                  <h3 className="font-bold text-foreground mb-3">React State Management</h3>
                  <div className="bg-gray-900 text-gray-100 rounded-lg p-4 text-sm font-mono overflow-x-auto">
                    <pre>{`const [items, setItems] = useState([
  { id: 1, name: "", email: "" }
]);

const addItem = () => {
  setItems([...items, {
    id: items.length + 1,
    name: "",
    email: ""
  }]);
};

const removeItem = (id) => {
  setItems(items.filter(item => item.id !== id));
};

const updateItem = (id, field, value) => {
  setItems(items.map(item =>
    item.id === id ? {...item, [field]: value} : item
  ));
};`}</pre>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Best Practices</h2>
                <div className="bg-card border-2 border-border rounded-lg p-6 space-y-3 text-sm">
                  <div>
                    <h3 className="font-bold text-foreground mb-1">1. Start with One Empty Section</h3>
                    <p className="text-muted-foreground">
                      Don't show 5 blank sections by default. Add more on demand to avoid overwhelming users.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">2. Clear Visual Grouping</h3>
                    <p className="text-muted-foreground">
                      Use background color, borders, or cards to visually separate each repeatable section.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">3. Number Each Section</h3>
                    <p className="text-muted-foreground">
                      Show "Dependent 1", "Dependent 2" etc. to help users reference specific entries.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">4. Confirm Before Delete</h3>
                    <p className="text-muted-foreground">
                      If section has data filled in, show confirmation dialog before removing it.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">5. Disable Remove on Last Item</h3>
                    <p className="text-muted-foreground">
                      If at least one section is required, disable remove button when only one remains.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">6. Validate Each Section</h3>
                    <p className="text-muted-foreground">
                      Run validation on each repeated section independently. Show errors within that section.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">7. Set Maximum Limit</h3>
                    <p className="text-muted-foreground">
                      Prevent adding unlimited sections. Set reasonable limit (e.g., max 10 dependents).
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Accessibility</h2>
                <div className="bg-card border-2 border-border rounded-lg p-6 space-y-2 text-sm text-muted-foreground">
                  <p>• Announce additions/removals to screen readers using ARIA live regions</p>
                  <p>• Ensure keyboard access: Tab through fields, Enter/Space to add/remove</p>
                  <p>• Use clear button labels: "Add Another Dependent" not just "Add"</p>
                  <p>• Provide unique IDs for each section for screen reader navigation</p>
                  <p>• Move focus to newly added section after clicking "Add"</p>
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
                    <div className="font-bold">Low-Medium</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">UX Benefit</div>
                    <div className="font-bold">Flexible, user-controlled</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Mobile Support</div>
                    <div className="font-bold">Good (vertical stack)</div>
                  </div>
                </div>
              </div>

              <div className="bg-pink-50 border-2 border-pink-200 rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-3">When to Use</h3>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li>✓ Variable-length data</li>
                  <li>✓ Family/dependent info</li>
                  <li>✓ Education/work history</li>
                  <li>✓ Multiple addresses</li>
                  <li>✓ Skills/certifications list</li>
                  <li>✓ References/contacts</li>
                  <li>✓ Product variants</li>
                </ul>
              </div>

              <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-3">When NOT to Use</h3>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li>✗ Fixed number of fields</li>
                  <li>✗ 10+ records (use bulk entry)</li>
                  <li>✗ Complex nested structures</li>
                  <li>✗ Binary yes/no questions</li>
                </ul>
              </div>

              <div className="bg-card border-2 border-border rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-4">Common Examples</h3>
                <ul className="space-y-1 text-xs text-muted-foreground">
                  <li>• Family members</li>
                  <li>• Education qualifications</li>
                  <li>• Work experience</li>
                  <li>• Contact numbers</li>
                  <li>• Email addresses</li>
                  <li>• Previous addresses</li>
                  <li>• Language skills</li>
                  <li>• Certifications</li>
                </ul>
              </div>

              <div className="bg-card border-2 border-border rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-4">Related Patterns</h3>
                <div className="space-y-2">
                  <Link to="/patterns/data-input/bulk-entry" className="block text-sm text-primary hover:underline">
                    → Bulk Data Entry
                  </Link>
                  <Link to="/patterns/form-validation" className="block text-sm text-primary hover:underline">
                    → Form Validation
                  </Link>
                  <Link to="/patterns/progressive-disclosure" className="block text-sm text-primary hover:underline">
                    → Progressive Disclosure
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
