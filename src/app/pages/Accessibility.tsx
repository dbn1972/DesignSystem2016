import { Check, X, Info, AlertCircle, Eye, Keyboard, Monitor, Volume2, FileText } from "lucide-react";

export default function Accessibility() {
  return (
    <div className="min-h-screen bg-card">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#138808] to-[#0a5504] text-white py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <div className="text-sm uppercase tracking-wide text-green-200 mb-2">UX4G Design System</div>
            <h1 className="text-5xl font-bold mb-4">Accessibility</h1>
            <p className="text-xl text-green-100 max-w-3xl mb-6">
              Accessibility is fundamental to the UX4G Design System. Every component, pattern, and guideline 
              is designed to meet WCAG 2.1 Level AA standards, ensuring government digital services are 
              accessible to all citizens of India.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Check size={20} />
                <span>WCAG 2.1 Level AA Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={20} />
                <span>Built-in by Default</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={20} />
                <span>Rigorously Tested</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-8 py-16 space-y-24">
        <AccessibilityPrinciples />
        <ColorContrast />
        <FocusVisibility />
        <KeyboardInteraction />
        <ScreenReader />
        <SemanticStructure />
        <FormAccessibility />
        <ErrorHandling />
        <TableAccessibility />
        <ModalAccessibility />
        <StatusCommunication />
        <KnownLimitations />
        <ReviewChecklist />
      </div>
    </div>
  );
}

function AccessibilityPrinciples() {
  return (
    <section id="principles">
      <SectionHeader
        title="Accessibility Principles"
        description="Core principles guiding accessibility implementation in UX4G"
      />

      <div className="mt-8 grid grid-cols-2 gap-8">
        <PrincipleCard
          icon={<Eye size={32} />}
          title="Perceivable"
          description="Information and user interface components must be presentable to users in ways they can perceive."
          items={[
            "Sufficient color contrast for text and interactive elements",
            "Text alternatives for non-text content",
            "Captions and alternatives for multimedia",
            "Content adaptable without loss of information"
          ]}
        />

        <PrincipleCard
          icon={<Keyboard size={32} />}
          title="Operable"
          description="User interface components and navigation must be operable by all users."
          items={[
            "All functionality available via keyboard",
            "Sufficient time for users to read and interact",
            "Navigation mechanisms are clear and consistent",
            "No content that could cause seizures"
          ]}
        />

        <PrincipleCard
          icon={<FileText size={32} />}
          title="Understandable"
          description="Information and operation of user interface must be understandable."
          items={[
            "Text content is readable and understandable",
            "Pages appear and operate in predictable ways",
            "Users are helped to avoid and correct mistakes",
            "Clear error messages and recovery paths"
          ]}
        />

        <PrincipleCard
          icon={<Monitor size={32} />}
          title="Robust"
          description="Content must be robust enough for interpretation by assistive technologies."
          items={[
            "Valid semantic HTML markup",
            "Proper ARIA attributes when needed",
            "Compatible with current and future assistive technologies",
            "Progressive enhancement approach"
          ]}
        />
      </div>

      <div className="mt-8 bg-green-50 border-2 border-green-200 rounded-lg p-6">
        <div className="flex items-start gap-3">
          <Info className="text-[#138808] flex-shrink-0 mt-1" size={24} />
          <div>
            <h3 className="font-bold text-foreground mb-2">Rights of Persons with Disabilities Act, 2016</h3>
            <p className="text-sm text-muted-foreground">
              The UX4G Design System aligns with India's Rights of Persons with Disabilities Act, 2016, 
              which mandates that all government digital services must be accessible. Compliance is not 
              optional—it is a legal requirement and moral imperative.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ColorContrast() {
  return (
    <section id="color-contrast">
      <SectionHeader
        title="Color Contrast Guidance"
        description="Ensuring sufficient contrast ratios for all text and interactive elements"
      />

      <div className="mt-8 space-y-8">
        {/* Contrast Requirements */}
        <div className="border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-background p-6 border-b-2 border-border">
            <h3 className="text-xl font-bold text-foreground">WCAG Contrast Requirements</h3>
          </div>
          
          <div className="divide-y divide-border">
            <ContrastExample
              title="Normal Text (WCAG AA)"
              ratio="4.5:1"
              requirement="For text smaller than 18px or 14px bold"
              examples={[
                { fg: "#1F2937", bg: "#FFFFFF", text: "Body text on white background", pass: true },
                { fg: "#000080", bg: "#FFFFFF", text: "Primary blue on white", pass: true },
                { fg: "#6B7280", bg: "#FFFFFF", text: "Secondary gray on white", pass: false }
              ]}
            />

            <ContrastExample
              title="Large Text (WCAG AA)"
              ratio="3:1"
              requirement="For text 18px+ or 14px+ bold"
              examples={[
                { fg: "#4B5563", bg: "#FFFFFF", text: "Large heading on white", pass: true },
                { fg: "#000080", bg: "#F3F4F6", text: "Primary on light gray", pass: true }
              ]}
            />

            <ContrastExample
              title="UI Components (WCAG AA)"
              ratio="3:1"
              requirement="For interactive elements and graphics"
              examples={[
                { fg: "#000080", bg: "#FFFFFF", text: "Button border", pass: true },
                { fg: "#D1D5DB", bg: "#FFFFFF", text: "Input border", pass: true },
                { fg: "#0EA5E9", bg: "#FFFFFF", text: "Focus ring", pass: true }
              ]}
            />
          </div>
        </div>

        {/* Color Blindness Considerations */}
        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-8">
          <h3 className="text-xl font-bold text-foreground mb-6">Color Blindness Considerations</h3>
          
          <div className="grid grid-cols-3 gap-6 mb-6">
            <div className="bg-card rounded-lg p-4 border border-blue-200">
              <div className="font-semibold text-foreground mb-2">Deuteranopia</div>
              <div className="text-sm text-muted-foreground mb-3">Red-green color blindness (most common)</div>
              <div className="flex gap-2">
                <div className="w-8 h-8 bg-red-500 rounded"></div>
                <div className="w-8 h-8 bg-green-500 rounded"></div>
                <div className="text-xs text-gray-500 self-center">May appear similar</div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-4 border border-blue-200">
              <div className="font-semibold text-foreground mb-2">Protanopia</div>
              <div className="text-sm text-muted-foreground mb-3">Red color blindness</div>
              <div className="flex gap-2">
                <div className="w-8 h-8 bg-red-500 rounded"></div>
                <div className="w-8 h-8 bg-background0 rounded"></div>
                <div className="text-xs text-gray-500 self-center">Red appears muted</div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-4 border border-blue-200">
              <div className="font-semibold text-foreground mb-2">Tritanopia</div>
              <div className="text-sm text-muted-foreground mb-3">Blue-yellow color blindness</div>
              <div className="flex gap-2">
                <div className="w-8 h-8 bg-blue-500 rounded"></div>
                <div className="w-8 h-8 bg-yellow-500 rounded"></div>
                <div className="text-xs text-gray-500 self-center">May appear similar</div>
              </div>
            </div>
          </div>

          <div className="bg-card border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-foreground mb-3">Design Guidelines</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Check className="text-[#138808] flex-shrink-0 mt-0.5" size={16} />
                <span><strong>Never rely on color alone</strong> to convey information—use text, icons, or patterns</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="text-[#138808] flex-shrink-0 mt-0.5" size={16} />
                <span><strong>Use high contrast</strong> between foreground and background colors</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="text-[#138808] flex-shrink-0 mt-0.5" size={16} />
                <span><strong>Supplement color</strong> with text labels, icons, or patterns for status indicators</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="text-[#138808] flex-shrink-0 mt-0.5" size={16} />
                <span><strong>Test designs</strong> using color blindness simulators during design phase</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Contrast Testing Tools */}
        <div className="border-2 border-border rounded-lg p-6">
          <h3 className="text-xl font-bold text-foreground mb-4">Testing Contrast</h3>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-foreground mb-3">Recommended Tools</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• <strong>WebAIM Contrast Checker</strong> - Online tool for testing color combinations</li>
                <li>• <strong>Browser DevTools</strong> - Built-in accessibility audits in Chrome/Edge</li>
                <li>• <strong>Figma Plugins</strong> - A11y - Color Contrast Checker, Stark</li>
                <li>• <strong>Automated Testing</strong> - axe DevTools, Lighthouse CI</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">Testing Process</h4>
              <ol className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="font-semibold">1.</span>
                  <span>Test all text against its background color</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold">2.</span>
                  <span>Verify interactive element contrast (borders, focus states)</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold">3.</span>
                  <span>Check graphic elements and iconography</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold">4.</span>
                  <span>Test in grayscale to ensure information isn't lost</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FocusVisibility() {
  return (
    <section id="focus-visibility">
      <SectionHeader
        title="Focus Visibility Rules"
        description="Clear, consistent focus indicators for keyboard navigation"
      />

      <div className="mt-8 space-y-8">
        {/* Focus Requirements */}
        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-8">
          <h3 className="text-xl font-bold text-foreground mb-6">Focus Indicator Requirements</h3>
          
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="bg-card border-2 border-blue-300 rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">Minimum Requirements (WCAG 2.4.7)</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="text-[#138808] flex-shrink-0 mt-0.5" size={16} />
                    <span>Focus indicator must be <strong>clearly visible</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-[#138808] flex-shrink-0 mt-0.5" size={16} />
                    <span>Minimum <strong>3:1 contrast</strong> with adjacent colors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-[#138808] flex-shrink-0 mt-0.5" size={16} />
                    <span>Must be present on <strong>all interactive elements</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-[#138808] flex-shrink-0 mt-0.5" size={16} />
                    <span>Should not be removed via CSS</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card border-2 border-blue-300 rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">UX4G Focus Standard</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Ring width:</span>
                    <code className="font-mono">4px</code>
                  </div>
                  <div className="flex justify-between">
                    <span>Ring color:</span>
                    <code className="font-mono">rgba(59, 130, 246, 0.5)</code>
                  </div>
                  <div className="flex justify-between">
                    <span>Ring offset:</span>
                    <code className="font-mono">2px</code>
                  </div>
                  <div className="flex justify-between">
                    <span>Border radius:</span>
                    <code className="font-mono">Matches element</code>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card border-2 border-border rounded-lg p-6 space-y-6">
              <div>
                <div className="text-sm font-semibold text-muted-foreground mb-3">Button Focus</div>
                <button className="px-6 py-3 bg-primary text-white rounded-lg font-semibold ring-4 ring-blue-200 ring-offset-2">
                  Focused Button
                </button>
              </div>

              <div>
                <div className="text-sm font-semibold text-muted-foreground mb-3">Input Focus</div>
                <input
                  type="text"
                  value="Focused input field"
                  readOnly
                  className="w-full px-4 py-3 border-2 border-primary rounded-lg ring-4 ring-blue-100 outline-none"
                />
              </div>

              <div>
                <div className="text-sm font-semibold text-muted-foreground mb-3">Link Focus</div>
                <a href="#" className="text-primary underline font-semibold ring-4 ring-blue-200 ring-offset-2 rounded px-1">
                  Focused Link
                </a>
              </div>

              <div>
                <div className="text-sm font-semibold text-muted-foreground mb-3">Checkbox Focus</div>
                <label className="flex items-center gap-3">
                  <input type="checkbox" className="w-5 h-5 border-2 border-primary rounded ring-4 ring-blue-100" />
                  <span>Focused checkbox</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Focus Order */}
        <div className="border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-background p-6 border-b-2 border-border">
            <h3 className="text-xl font-bold text-foreground">Focus Order</h3>
          </div>
          
          <div className="p-8">
            <div className="bg-card border-2 border-border rounded-lg p-6 mb-6">
              <div className="space-y-4">
                {[
                  { num: 1, element: "Logo/Header", desc: "Top-left navigation elements" },
                  { num: 2, element: "Main Navigation", desc: "Primary navigation menu" },
                  { num: 3, element: "Skip Link", desc: "Allow skipping to main content" },
                  { num: 4, element: "Main Content", desc: "Primary page content, left to right, top to bottom" },
                  { num: 5, element: "Sidebar", desc: "Secondary navigation or filters" },
                  { num: 6, element: "Footer Links", desc: "Footer navigation and information" }
                ].map((item) => (
                  <div key={item.num} className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      {item.num}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{item.element}</div>
                      <div className="text-sm text-muted-foreground">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="border-2 border-green-200 bg-green-50 rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Check className="text-[#138808]" size={20} />
                  Do
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Follow natural reading order (top to bottom, left to right)</li>
                  <li>• Use semantic HTML for natural tab order</li>
                  <li>• Test focus order with keyboard only</li>
                  <li>• Provide skip links for long navigation</li>
                </ul>
              </div>

              <div className="border-2 border-red-200 bg-red-50 rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <X className="text-red-600" size={20} />
                  Don't
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Don't use positive tabindex values (tabindex="1")</li>
                  <li>• Don't create confusing focus traps</li>
                  <li>• Don't hide focus indicators with CSS</li>
                  <li>• Don't rely on mouse-only interactions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function KeyboardInteraction() {
  return (
    <section id="keyboard-interaction">
      <SectionHeader
        title="Keyboard Interaction Expectations"
        description="Standard keyboard patterns for all interactive components"
      />

      <div className="mt-8 space-y-8">
        {/* Key Mappings */}
        <div className="border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-background p-6 border-b-2 border-border">
            <h3 className="text-xl font-bold text-foreground">Standard Keyboard Controls</h3>
          </div>
          
          <div className="divide-y divide-border">
            {[
              { key: "Tab", function: "Move focus forward to next interactive element" },
              { key: "Shift + Tab", function: "Move focus backward to previous interactive element" },
              { key: "Enter", function: "Activate buttons, links, and submit forms" },
              { key: "Space", function: "Activate buttons, toggle checkboxes, scroll page" },
              { key: "Arrow Keys", function: "Navigate within components (menus, tabs, radio groups)" },
              { key: "Esc", function: "Close modals, dialogs, dropdowns, and cancel operations" },
              { key: "Home", function: "Move to first item in list or beginning of text field" },
              { key: "End", function: "Move to last item in list or end of text field" }
            ].map((item, index) => (
              <div key={index} className="p-6 hover:bg-background flex items-center gap-6">
                <kbd className="px-4 py-2 bg-gray-900 text-white rounded font-mono text-sm min-w-[140px] text-center">
                  {item.key}
                </kbd>
                <div className="text-muted-foreground">{item.function}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Component-Specific Patterns */}
        <div className="grid grid-cols-2 gap-8">
          <KeyboardPattern
            component="Modal/Dialog"
            keys={[
              { key: "Tab", action: "Cycles focus within modal only (focus trap)" },
              { key: "Esc", action: "Closes modal and returns focus to trigger" },
              { key: "Enter", action: "Activates primary action button" }
            ]}
          />

          <KeyboardPattern
            component="Dropdown Menu"
            keys={[
              { key: "Space/Enter", action: "Opens dropdown menu" },
              { key: "Arrow Up/Down", action: "Navigates through menu items" },
              { key: "Esc", action: "Closes menu and returns focus" },
              { key: "Type ahead", action: "Jumps to matching menu item" }
            ]}
          />

          <KeyboardPattern
            component="Tabs"
            keys={[
              { key: "Tab", action: "Moves focus to active tab, then to tab panel" },
              { key: "Arrow Left/Right", action: "Switches between tabs" },
              { key: "Home/End", action: "Jumps to first/last tab" }
            ]}
          />

          <KeyboardPattern
            component="Radio Group"
            keys={[
              { key: "Tab", action: "Moves focus to selected radio (or first if none selected)" },
              { key: "Arrow Keys", action: "Selects and moves between radio buttons" },
              { key: "Space", action: "Selects focused radio button" }
            ]}
          />
        </div>

        <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-6">
          <div className="flex items-start gap-3">
            <AlertCircle className="text-orange-600 flex-shrink-0 mt-1" size={24} />
            <div>
              <h3 className="font-bold text-foreground mb-2">Testing Keyboard Accessibility</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Every interactive element must be fully operable via keyboard. Test each page by:
              </p>
              <ol className="space-y-2 text-sm text-muted-foreground">
                <li>1. Unplug your mouse or disable trackpad</li>
                <li>2. Navigate using only Tab, Shift+Tab, Enter, Space, and Arrow keys</li>
                <li>3. Verify all functionality is accessible</li>
                <li>4. Ensure focus indicators are always visible</li>
                <li>5. Check that focus never becomes trapped unintentionally</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ScreenReader() {
  return (
    <section id="screen-reader">
      <SectionHeader
        title="Screen Reader Considerations"
        description="Ensuring content is accessible to assistive technology users"
      />

      <div className="mt-8 space-y-8">
        {/* ARIA Attributes */}
        <div className="border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-background p-6 border-b-2 border-border">
            <h3 className="text-xl font-bold text-foreground">Essential ARIA Attributes</h3>
          </div>
          
          <div className="divide-y divide-border">
            {[
              { 
                attr: "aria-label", 
                usage: "Provides accessible name when visible text isn't suitable",
                example: '<button aria-label="Close dialog"><X /></button>'
              },
              { 
                attr: "aria-labelledby", 
                usage: "References element(s) that label the current element",
                example: '<div aria-labelledby="modal-title">...</div>'
              },
              { 
                attr: "aria-describedby", 
                usage: "References element(s) that describe the current element",
                example: '<input aria-describedby="error-message" />'
              },
              { 
                attr: "aria-live", 
                usage: "Announces dynamic content changes (polite, assertive, off)",
                example: '<div aria-live="polite">Status updated</div>'
              },
              { 
                attr: "aria-current", 
                usage: "Indicates current item in navigation",
                example: '<a aria-current="page" href="/home">Home</a>'
              },
              { 
                attr: "aria-expanded", 
                usage: "Indicates if element is expanded or collapsed",
                example: '<button aria-expanded="false">Menu</button>'
              },
              { 
                attr: "aria-hidden", 
                usage: "Hides decorative content from screen readers",
                example: '<span aria-hidden="true">🎉</span>'
              }
            ].map((item, index) => (
              <div key={index} className="p-6 hover:bg-background">
                <div className="flex items-start gap-4">
                  <code className="px-3 py-1 bg-purple-100 text-purple-700 rounded font-mono text-sm font-semibold flex-shrink-0">
                    {item.attr}
                  </code>
                  <div className="flex-1">
                    <div className="text-foreground mb-2">{item.usage}</div>
                    <code className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded font-mono block">
                      {item.example}
                    </code>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Screen Reader Text */}
        <div className="grid grid-cols-2 gap-8">
          <div className="border-2 border-border rounded-lg p-6">
            <h3 className="text-xl font-bold text-foreground mb-4">Visually Hidden Text</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Use visually hidden text to provide context for screen reader users without affecting visual design.
            </p>
            <div className="bg-gray-900 text-gray-100 rounded p-4 text-xs font-mono mb-4">
{`.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}`}
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded p-4 text-sm">
              <strong>Example:</strong> Icon-only buttons
              <code className="block mt-2 text-xs">
                {'<button><X /><span class="sr-only">Close</span></button>'}
              </code>
            </div>
          </div>

          <div className="border-2 border-border rounded-lg p-6">
            <h3 className="text-xl font-bold text-foreground mb-4">Alternative Text</h3>
            <div className="space-y-4 text-sm">
              <div className="bg-green-50 border border-green-200 rounded p-4">
                <div className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <Check className="text-[#138808]" size={16} />
                  Good Alt Text
                </div>
                <code className="text-xs block">alt="Application form for passport renewal"</code>
                <div className="text-muted-foreground mt-2">Descriptive and contextual</div>
              </div>

              <div className="bg-red-50 border border-red-200 rounded p-4">
                <div className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <X className="text-red-600" size={16} />
                  Poor Alt Text
                </div>
                <code className="text-xs block">alt="image123.jpg"</code>
                <div className="text-muted-foreground mt-2">Non-descriptive filename</div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded p-4">
                <div className="font-semibold text-foreground mb-2">Decorative Images</div>
                <code className="text-xs block">alt=""</code>
                <div className="text-muted-foreground mt-2">Empty alt for decorative images</div>
              </div>
            </div>
          </div>
        </div>

        {/* Testing with Screen Readers */}
        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-foreground mb-4">Testing with Screen Readers</h3>
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-card rounded-lg p-4 border border-blue-200">
              <Volume2 className="text-primary mb-3" size={24} />
              <h4 className="font-semibold text-foreground mb-2">NVDA (Windows)</h4>
              <p className="text-sm text-muted-foreground mb-2">Free, open-source screen reader</p>
              <a href="#" className="text-primary text-sm hover:underline">Download NVDA →</a>
            </div>

            <div className="bg-card rounded-lg p-4 border border-blue-200">
              <Volume2 className="text-primary mb-3" size={24} />
              <h4 className="font-semibold text-foreground mb-2">VoiceOver (macOS/iOS)</h4>
              <p className="text-sm text-muted-foreground mb-2">Built into Apple devices</p>
              <div className="text-sm text-muted-foreground">Cmd + F5 to toggle</div>
            </div>

            <div className="bg-card rounded-lg p-4 border border-blue-200">
              <Volume2 className="text-primary mb-3" size={24} />
              <h4 className="font-semibold text-foreground mb-2">JAWS (Windows)</h4>
              <p className="text-sm text-muted-foreground mb-2">Industry-standard screen reader</p>
              <a href="#" className="text-primary text-sm hover:underline">Download JAWS →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SemanticStructure() {
  return (
    <section id="semantic-structure">
      <SectionHeader
        title="Semantic Structure Guidance"
        description="Using HTML elements correctly for meaning and accessibility"
      />

      <div className="mt-8 space-y-8">
        <div className="grid grid-cols-2 gap-8">
          {/* Heading Hierarchy */}
          <div className="border-2 border-border rounded-lg p-6">
            <h3 className="text-xl font-bold text-foreground mb-4">Heading Hierarchy</h3>
            <div className="space-y-3 mb-4">
              <div className="bg-green-50 border-l-4 border-[#138808] p-3">
                <code className="text-sm font-mono text-foreground">{'<h1>Page Title</h1>'}</code>
                <div className="text-xs text-muted-foreground mt-1">One per page</div>
              </div>
              <div className="bg-green-50 border-l-4 border-[#138808] p-3">
                <code className="text-sm font-mono text-foreground">{'<h2>Section Heading</h2>'}</code>
                <div className="text-xs text-muted-foreground mt-1">Main sections</div>
              </div>
              <div className="bg-green-50 border-l-4 border-[#138808] p-3">
                <code className="text-sm font-mono text-foreground">{'<h3>Subsection</h3>'}</code>
                <div className="text-xs text-muted-foreground mt-1">Nested under h2</div>
              </div>
            </div>
            <div className="bg-red-50 border border-red-200 rounded p-3 text-sm">
              <strong className="flex items-center gap-2">
                <X className="text-red-600" size={16} />
                Never skip heading levels
              </strong>
              <div className="text-muted-foreground mt-1">h1 → h3 is incorrect. Always use sequential order.</div>
            </div>
          </div>

          {/* Landmark Regions */}
          <div className="border-2 border-border rounded-lg p-6">
            <h3 className="text-xl font-bold text-foreground mb-4">Landmark Regions</h3>
            <div className="space-y-2 text-sm">
              {[
                { tag: '<header>', desc: 'Site/page header with logo and navigation' },
                { tag: '<nav>', desc: 'Navigation menu or links' },
                { tag: '<main>', desc: 'Primary content (one per page)' },
                { tag: '<aside>', desc: 'Complementary content or sidebar' },
                { tag: '<footer>', desc: 'Site/page footer' },
                { tag: '<section>', desc: 'Thematic grouping of content' },
                { tag: '<article>', desc: 'Self-contained content' }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-2">
                  <code className="font-mono text-purple-700 flex-shrink-0">{item.tag}</code>
                  <span className="text-muted-foreground">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Semantic HTML Examples */}
        <div className="border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-background p-6 border-b-2 border-border">
            <h3 className="text-xl font-bold text-foreground">Semantic HTML Patterns</h3>
          </div>
          
          <div className="divide-y divide-border">
            <SemanticExample
              correct={`<button type="submit">Submit</button>`}
              incorrect={`<div onclick="submit()">Submit</div>`}
              reason="Use semantic button element for interactive actions"
            />
            <SemanticExample
              correct={`<a href="/documentation">Navigate</a>`}
              incorrect={`<button onclick="navigate()">Navigate</button>`}
              reason="Use anchor tags for navigation, buttons for actions"
            />
            <SemanticExample
              correct={`<ul><li>Item 1</li><li>Item 2</li></ul>`}
              incorrect={`<div><div>Item 1</div><div>Item 2</div></div>`}
              reason="Use semantic list elements for lists of items"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function FormAccessibility() {
  return (
    <section id="form-accessibility">
      <SectionHeader
        title="Form Accessibility"
        description="Making forms accessible and easy to complete"
      />

      <div className="mt-8 space-y-8">
        <div className="border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-background p-6 border-b-2 border-border">
            <h3 className="text-xl font-bold text-foreground">Form Accessibility Checklist</h3>
          </div>
          
          <div className="p-8">
            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  title: "Label Association",
                  items: [
                    "Every input has an associated label",
                    "Labels use htmlFor/id or wrap the input",
                    "Labels are always visible (not placeholder-only)",
                    "Labels clearly describe the input's purpose"
                  ]
                },
                {
                  title: "Required Fields",
                  items: [
                    "Required fields marked with * or 'Required'",
                    "aria-required='true' on required inputs",
                    "Clear indication at form start about required fields",
                    "Validation triggers on form submit, not during typing"
                  ]
                },
                {
                  title: "Helper Text",
                  items: [
                    "Complex fields have helper text explaining format",
                    "Helper text associated with aria-describedby",
                    "Character limits announced to screen readers",
                    "Examples provided for unclear field types"
                  ]
                },
                {
                  title: "Input Types",
                  items: [
                    "Appropriate input type for content (email, tel, number)",
                    "Correct keyboard shown on mobile devices",
                    "Date pickers are keyboard accessible",
                    "Custom controls have proper ARIA roles"
                  ]
                }
              ].map((section, index) => (
                <div key={index} className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-3">{section.title}</h4>
                  <ul className="space-y-2">
                    {section.items.map((item, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <Check className="text-[#138808] flex-shrink-0 mt-0.5" size={16} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Example Accessible Form */}
        <div className="grid grid-cols-2 gap-8">
          <div className="border-2 border-border rounded-lg p-6">
            <h3 className="text-xl font-bold text-foreground mb-4">Accessible Form Example</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                  Full Name <span className="text-red-600">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  aria-required="true"
                  placeholder="Rajesh Kumar"
                  className="w-full px-4 py-3 border-2 border-border rounded-lg outline-none focus:border-primary focus:ring-4 focus:ring-blue-100"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                  Email Address <span className="text-red-600">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  aria-required="true"
                  aria-describedby="email-hint"
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 border-2 border-border rounded-lg outline-none focus:border-primary focus:ring-4 focus:ring-blue-100"
                />
                <div id="email-hint" className="text-xs text-muted-foreground mt-1">
                  We'll never share your email with anyone else.
                </div>
              </div>

              <div>
                <fieldset>
                  <legend className="block text-sm font-semibold text-foreground mb-2">
                    Preferred Contact Method
                  </legend>
                  <div className="space-y-2">
                    <label className="flex items-center gap-3">
                      <input type="radio" name="contact" value="email" className="w-5 h-5" />
                      <span className="text-sm">Email</span>
                    </label>
                    <label className="flex items-center gap-3">
                      <input type="radio" name="contact" value="phone" className="w-5 h-5" />
                      <span className="text-sm">Phone</span>
                    </label>
                  </div>
                </fieldset>
              </div>
            </form>
          </div>

          <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-foreground mb-4">Key Points</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Check className="text-[#138808] flex-shrink-0 mt-0.5" size={16} />
                <span><strong>htmlFor/id:</strong> Label associated with input via matching ids</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="text-[#138808] flex-shrink-0 mt-0.5" size={16} />
                <span><strong>aria-required:</strong> Programmatically indicates required field</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="text-[#138808] flex-shrink-0 mt-0.5" size={16} />
                <span><strong>aria-describedby:</strong> Associates helper text with input</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="text-[#138808] flex-shrink-0 mt-0.5" size={16} />
                <span><strong>fieldset/legend:</strong> Groups related radio buttons semantically</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="text-[#138808] flex-shrink-0 mt-0.5" size={16} />
                <span><strong>input types:</strong> Correct type (email, tel) for better UX</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="text-[#138808] flex-shrink-0 mt-0.5" size={16} />
                <span><strong>Focus indicators:</strong> Clear ring on focus for keyboard users</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function ErrorHandling() {
  return (
    <section id="error-handling">
      <SectionHeader
        title="Error Handling Accessibility"
        description="Communicating errors clearly to all users"
      />

      <div className="mt-8 space-y-8">
        <div className="grid grid-cols-2 gap-8">
          <div className="border-2 border-border rounded-lg p-6">
            <h3 className="text-xl font-bold text-foreground mb-4">Error Message Requirements</h3>
            <ul className="space-y-3 text-sm">
              {[
                "Clearly identify which field has an error",
                "Explain what went wrong in plain language",
                "Provide guidance on how to fix the error",
                "Show errors inline near the related field",
                "Use aria-invalid='true' on error fields",
                "Associate error message with aria-describedby",
                "Use aria-live for dynamic error announcements",
                "Don't rely on color alone to indicate errors"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Check className="text-[#138808] flex-shrink-0 mt-0.5" size={16} />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <div className="border-2 border-red-500 rounded-lg p-4 bg-red-50">
              <h4 className="font-semibold text-foreground mb-3">Example: Error State</h4>
              <div>
                <label htmlFor="error-email" className="block text-sm font-semibold text-foreground mb-2">
                  Email Address <span className="text-red-600">*</span>
                </label>
                <input
                  id="error-email"
                  type="email"
                  value="invalid-email"
                  readOnly
                  aria-invalid="true"
                  aria-describedby="email-error"
                  className="w-full px-4 py-3 border-2 border-red-500 rounded-lg outline-none"
                />
                <div id="email-error" className="flex items-center gap-2 text-sm text-red-600 mt-2">
                  <AlertCircle size={14} />
                  <span>Please enter a valid email address (e.g., name@example.com)</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-foreground mb-2 text-sm">Implementation</h4>
              <code className="text-xs bg-card border border-blue-200 rounded p-2 block font-mono">
{`<input
  aria-invalid="true"
  aria-describedby="error-message"
/>
<div id="error-message" role="alert">
  Error description
</div>`}
              </code>
            </div>
          </div>
        </div>

        <div className="border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-background p-6 border-b-2 border-border">
            <h3 className="text-xl font-bold text-foreground">Error Summary Pattern</h3>
          </div>
          
          <div className="p-8">
            <div className="border-l-4 border-red-500 bg-red-50 p-6 rounded-r mb-4">
              <div className="flex items-start gap-3">
                <AlertCircle className="text-red-600 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-red-900 mb-2">There are 2 errors in this form</h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a href="#email" className="text-red-700 underline hover:text-red-800">
                        Email Address: Please enter a valid email address
                      </a>
                    </li>
                    <li>
                      <a href="#phone" className="text-red-700 underline hover:text-red-800">
                        Phone Number: Phone number must be 10 digits
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-foreground mb-3">Error Summary Best Practices</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Check className="text-[#138808] flex-shrink-0 mt-0.5" size={16} />
                  <span>Show error summary at top of form after submission</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-[#138808] flex-shrink-0 mt-0.5" size={16} />
                  <span>Move focus to error summary or first error field</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-[#138808] flex-shrink-0 mt-0.5" size={16} />
                  <span>Provide links to jump to each error field</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-[#138808] flex-shrink-0 mt-0.5" size={16} />
                  <span>Use role="alert" or aria-live="assertive" for announcement</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TableAccessibility() {
  return (
    <section id="table-accessibility">
      <SectionHeader
        title="Table Accessibility"
        description="Making data tables accessible and navigable"
      />

      <div className="mt-8 space-y-8">
        <div className="border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-background p-6 border-b-2 border-border">
            <h3 className="text-xl font-bold text-foreground">Accessible Table Example</h3>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <caption className="p-4 text-left font-semibold text-foreground bg-background">
                Application Status for January 2024
              </caption>
              <thead className="bg-muted border-b-2 border-border">
                <tr>
                  <th scope="col" className="text-left p-4 font-semibold text-foreground">Application ID</th>
                  <th scope="col" className="text-left p-4 font-semibold text-foreground">Applicant Name</th>
                  <th scope="col" className="text-left p-4 font-semibold text-foreground">Status</th>
                  <th scope="col" className="text-left p-4 font-semibold text-foreground">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="p-4 font-mono text-sm">APP-001</td>
                  <td className="p-4">Rajesh Kumar</td>
                  <td className="p-4">
                    <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                      Approved
                    </span>
                  </td>
                  <td className="p-4 text-muted-foreground">Jan 15, 2024</td>
                </tr>
                <tr>
                  <td className="p-4 font-mono text-sm">APP-002</td>
                  <td className="p-4">Priya Sharma</td>
                  <td className="p-4">
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-semibold">
                      Pending
                    </span>
                  </td>
                  <td className="p-4 text-muted-foreground">Jan 18, 2024</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-foreground mb-4">Table Requirements</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Check className="text-[#138808] flex-shrink-0 mt-0.5" size={16} />
                <span><strong>{'<caption>'}:</strong> Describes table purpose</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="text-[#138808] flex-shrink-0 mt-0.5" size={16} />
                <span><strong>{'<thead>'}, {'<tbody>'}:</strong> Groups header and body rows</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="text-[#138808] flex-shrink-0 mt-0.5" size={16} />
                <span><strong>{'<th scope="col">'}:</strong> Identifies column headers</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="text-[#138808] flex-shrink-0 mt-0.5" size={16} />
                <span><strong>{'<th scope="row">'}:</strong> Identifies row headers</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="text-[#138808] flex-shrink-0 mt-0.5" size={16} />
                <span><strong>Simple structure:</strong> Avoid merged cells when possible</span>
              </li>
            </ul>
          </div>

          <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-foreground mb-4">Responsive Tables</h3>
            <p className="text-sm text-muted-foreground mb-4">
              On mobile viewports, complex tables should transform into a more accessible format:
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Check className="text-orange-600 flex-shrink-0 mt-0.5" size={16} />
                <span>Convert to card view with labeled data</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="text-orange-600 flex-shrink-0 mt-0.5" size={16} />
                <span>Allow horizontal scrolling with visible scroll hint</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="text-orange-600 flex-shrink-0 mt-0.5" size={16} />
                <span>Stack columns vertically for narrow screens</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="text-orange-600 flex-shrink-0 mt-0.5" size={16} />
                <span>Provide alternative data views (list, grid)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function ModalAccessibility() {
  return (
    <section id="modal-accessibility">
      <SectionHeader
        title="Modal & Dialog Accessibility"
        description="Managing focus and interaction in modal overlays"
      />

      <div className="mt-8 space-y-8">
        <div className="border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-background p-6 border-b-2 border-border">
            <h3 className="text-xl font-bold text-foreground">Modal Accessibility Requirements</h3>
          </div>
          
          <div className="p-8">
            <div className="grid grid-cols-2 gap-8 mb-8">
              {[
                {
                  title: "Focus Management",
                  items: [
                    "Move focus to modal when opened",
                    "Trap focus within modal (Tab cycles inside)",
                    "Return focus to trigger element when closed",
                    "First focusable element should be close button or primary action"
                  ]
                },
                {
                  title: "Keyboard Support",
                  items: [
                    "Esc key closes the modal",
                    "Tab/Shift+Tab navigates within modal only",
                    "Enter activates focused button",
                    "Prevent background scroll while open"
                  ]
                },
                {
                  title: "ARIA Attributes",
                  items: [
                    'role="dialog" or role="alertdialog"',
                    'aria-modal="true" to indicate modal state',
                    'aria-labelledby pointing to modal title',
                    'aria-describedby for modal description (optional)'
                  ]
                },
                {
                  title: "Screen Reader Support",
                  items: [
                    "Background content hidden with aria-hidden",
                    "Modal title announced when opened",
                    "Clear indication of modal purpose",
                    "Closing action clearly labeled"
                  ]
                }
              ].map((section, index) => (
                <div key={index} className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-3">{section.title}</h4>
                  <ul className="space-y-2">
                    {section.items.map((item, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <Check className="text-blue-600 flex-shrink-0 mt-0.5" size={16} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="bg-gray-900 text-gray-100 rounded-lg p-6">
              <div className="text-sm font-mono whitespace-pre text-xs overflow-x-auto">
{`<div 
  role="dialog" 
  aria-modal="true"
  aria-labelledby="modal-title"
  aria-describedby="modal-description"
>
  <h2 id="modal-title">Confirm Action</h2>
  <p id="modal-description">
    Are you sure you want to proceed?
  </p>
  <button aria-label="Close dialog">×</button>
  <button>Cancel</button>
  <button>Confirm</button>
</div>`}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatusCommunication() {
  return (
    <section id="status-communication">
      <SectionHeader
        title="Status Communication"
        description="Announcing dynamic changes to assistive technology users"
      />

      <div className="mt-8 space-y-8">
        <div className="grid grid-cols-2 gap-8">
          <div className="border-2 border-border rounded-lg p-6">
            <h3 className="text-xl font-bold text-foreground mb-4">ARIA Live Regions</h3>
            <div className="space-y-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <code className="text-sm font-mono text-purple-700 font-semibold">aria-live="polite"</code>
                <p className="text-sm text-muted-foreground mt-2">
                  Announces changes when user is idle. Use for non-critical updates like form validations or status messages.
                </p>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <code className="text-sm font-mono text-purple-700 font-semibold">aria-live="assertive"</code>
                <p className="text-sm text-muted-foreground mt-2">
                  Interrupts current announcement. Use sparingly for critical errors or time-sensitive alerts.
                </p>
              </div>

              <div className="bg-background border border-border rounded-lg p-4">
                <code className="text-sm font-mono text-purple-700 font-semibold">role="status"</code>
                <p className="text-sm text-muted-foreground mt-2">
                  Equivalent to aria-live="polite". Use for status updates and feedback messages.
                </p>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <code className="text-sm font-mono text-purple-700 font-semibold">role="alert"</code>
                <p className="text-sm text-muted-foreground mt-2">
                  Equivalent to aria-live="assertive". Use for critical error messages requiring immediate attention.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="border-2 border-green-200 bg-green-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">Example: Form Submission</h3>
              <div className="space-y-4">
                <button className="px-6 py-3 bg-primary text-white rounded-lg font-semibold">
                  Submit Application
                </button>
                <div className="border-l-4 border-[#138808] bg-card p-4 rounded-r" role="status">
                  <div className="flex items-center gap-2 text-[#138808]">
                    <Check size={20} />
                    <span className="font-semibold">Application submitted successfully</span>
                  </div>
                </div>
                <code className="text-xs bg-gray-900 text-gray-100 p-2 rounded block font-mono">
                  {'<div role="status">Success message</div>'}
                </code>
              </div>
            </div>

            <div className="border-2 border-red-200 bg-red-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">Example: Critical Error</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-red-500 bg-card p-4 rounded-r" role="alert">
                  <div className="flex items-center gap-2 text-red-600">
                    <AlertCircle size={20} />
                    <span className="font-semibold">Session expired. Please log in again.</span>
                  </div>
                </div>
                <code className="text-xs bg-gray-900 text-gray-100 p-2 rounded block font-mono">
                  {'<div role="alert">Error message</div>'}
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function KnownLimitations() {
  return (
    <section id="known-limitations">
      <SectionHeader
        title="Known Limitations Pattern"
        description="Transparently documenting accessibility constraints"
      />

      <div className="mt-8 space-y-8">
        <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-8">
          <div className="flex items-start gap-4 mb-6">
            <Info className="text-orange-600 flex-shrink-0 mt-1" size={32} />
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">Transparency in Accessibility</h3>
              <p className="text-muted-foreground">
                The UX4G Design System maintains transparency about any known accessibility limitations. 
                This allows teams to make informed decisions and plan for workarounds or future improvements.
              </p>
            </div>
          </div>

          <div className="bg-card border border-orange-200 rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-orange-100 border-b-2 border-orange-200">
                <tr>
                  <th className="text-left p-4 font-semibold">Component</th>
                  <th className="text-left p-4 font-semibold">Known Limitation</th>
                  <th className="text-left p-4 font-semibold">Workaround</th>
                  <th className="text-left p-4 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-orange-200">
                <tr>
                  <td className="p-4 font-medium">Date Picker</td>
                  <td className="p-4">Calendar grid may be difficult to navigate with screen reader</td>
                  <td className="p-4">Provide manual text input alternative</td>
                  <td className="p-4">
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs font-semibold">
                      In Progress
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Rich Text Editor</td>
                  <td className="p-4">Complex toolbar navigation requires extensive keyboard patterns</td>
                  <td className="p-4">Use native textarea for accessibility-critical forms</td>
                  <td className="p-4">
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-semibold">
                      Documented
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Data Visualization</td>
                  <td className="p-4">Complex charts may not convey full information to screen reader users</td>
                  <td className="p-4">Provide data table alternative and text description</td>
                  <td className="p-4">
                    <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-semibold">
                      Resolved
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="border-2 border-border rounded-lg p-6">
          <h3 className="text-xl font-bold text-foreground mb-4">Reporting Accessibility Issues</h3>
          <p className="text-muted-foreground mb-4">
            If you discover an accessibility issue not listed above, please report it to the UX4G team:
          </p>
          <div className="bg-background border border-border rounded-lg p-4 space-y-2 text-sm">
            <div><strong>Email:</strong> accessibility@ux4g.gov.in</div>
            <div><strong>Issue Tracker:</strong> github.com/ux4g/design-system/issues</div>
            <div><strong>Required Information:</strong> Component name, assistive technology used, steps to reproduce</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReviewChecklist() {
  return (
    <section id="review-checklist">
      <SectionHeader
        title="Accessibility Review Checklist"
        description="Comprehensive checklist for accessibility compliance"
      />

      <div className="mt-8 space-y-8">
        <div className="bg-green-50 border-2 border-green-200 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-foreground mb-6">Pre-Launch Accessibility Checklist</h3>
          
          <div className="grid grid-cols-2 gap-8">
            {[
              {
                category: "Perceivable",
                items: [
                  "All images have meaningful alt text",
                  "Color contrast meets WCAG AA (4.5:1 for text, 3:1 for UI)",
                  "Content doesn't rely on color alone",
                  "Text can be resized to 200% without loss of content",
                  "Videos have captions and transcripts"
                ]
              },
              {
                category: "Operable",
                items: [
                  "All functionality available via keyboard",
                  "No keyboard traps present",
                  "Focus indicators are clearly visible",
                  "Skip links provided for main content",
                  "No time limits or they can be extended"
                ]
              },
              {
                category: "Understandable",
                items: [
                  "Language of page declared in HTML",
                  "Navigation is consistent across pages",
                  "Labels and instructions provided for inputs",
                  "Error messages are clear and helpful",
                  "Forms can be reviewed before submission"
                ]
              },
              {
                category: "Robust",
                items: [
                  "Valid HTML markup (no errors)",
                  "ARIA attributes used correctly",
                  "Semantic HTML elements used appropriately",
                  "Tested with screen readers (NVDA, JAWS, VoiceOver)",
                  "No console errors in browser"
                ]
              },
              {
                category: "Forms",
                items: [
                  "All inputs have associated labels",
                  "Required fields are clearly marked",
                  "Error messages are associated with inputs",
                  "Fieldsets and legends used for radio/checkbox groups",
                  "Tab order is logical and predictable"
                ]
              },
              {
                category: "Navigation",
                items: [
                  "Heading hierarchy is correct (h1-h6)",
                  "Landmark regions properly defined",
                  "Breadcrumbs present where appropriate",
                  "Current page indicated in navigation",
                  "Links have meaningful text (no 'click here')"
                ]
              },
              {
                category: "Interactive Elements",
                items: [
                  "Buttons use <button> element",
                  "Links use <a> element for navigation",
                  "Tooltips accessible on keyboard focus",
                  "Modals trap focus and close with Esc",
                  "Accordions/tabs have proper ARIA"
                ]
              },
              {
                category: "Testing",
                items: [
                  "Tested with keyboard only (no mouse)",
                  "Tested with screen reader",
                  "Automated testing passed (axe, Lighthouse)",
                  "Manual accessibility audit completed",
                  "Tested with browser zoom at 200%"
                ]
              }
            ].map((section, index) => (
              <div key={index} className="bg-card border-2 border-green-300 rounded-lg p-6">
                <h4 className="text-lg font-bold text-foreground mb-4">{section.category}</h4>
                <ul className="space-y-3">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <input type="checkbox" className="w-5 h-5 border-2 border-border rounded mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-foreground mb-4">Continuous Accessibility</h3>
          <p className="text-muted-foreground mb-4">
            Accessibility is not a one-time checklist. It requires ongoing attention:
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <Check className="text-blue-600 flex-shrink-0 mt-0.5" size={16} />
              <span>Include accessibility testing in every sprint/release cycle</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-blue-600 flex-shrink-0 mt-0.5" size={16} />
              <span>Run automated accessibility tests in CI/CD pipeline</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-blue-600 flex-shrink-0 mt-0.5" size={16} />
              <span>Conduct quarterly accessibility audits</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-blue-600 flex-shrink-0 mt-0.5" size={16} />
              <span>Gather feedback from users with disabilities</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-blue-600 flex-shrink-0 mt-0.5" size={16} />
              <span>Stay updated with WCAG guidelines and best practices</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

// Reusable Components

function SectionHeader({ title, description }: { title: string; description: string }) {
  return (
    <div className="mb-8">
      <h2 className="text-3xl font-bold text-foreground mb-2">{title}</h2>
      <p className="text-lg text-muted-foreground">{description}</p>
    </div>
  );
}

function PrincipleCard({ icon, title, description, items }: any) {
  return (
    <div className="border-2 border-border rounded-lg p-6 bg-card hover:border-[#138808] transition-colors">
      <div className="text-[#138808] mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground mb-4">{description}</p>
      <ul className="space-y-2">
        {items.map((item: string, index: number) => (
          <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
            <Check className="text-[#138808] flex-shrink-0 mt-0.5" size={16} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ContrastExample({ title, ratio, requirement, examples }: any) {
  return (
    <div className="p-6 hover:bg-background">
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <h4 className="font-bold text-foreground">{title}</h4>
          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
            {ratio} minimum
          </span>
        </div>
        <p className="text-sm text-muted-foreground">{requirement}</p>
      </div>
      <div className="space-y-3">
        {examples.map((example: any, index: number) => (
          <div key={index} className="flex items-center gap-4">
            <div 
              className="px-4 py-2 rounded flex-1"
              style={{ backgroundColor: example.bg, color: example.fg }}
            >
              {example.text}
            </div>
            <div className="flex items-center gap-2">
              {example.pass ? (
                <Check className="text-[#138808]" size={20} />
              ) : (
                <X className="text-red-600" size={20} />
              )}
              <span className={`text-sm font-semibold ${example.pass ? 'text-[#138808]' : 'text-red-600'}`}>
                {example.pass ? 'Pass' : 'Fail'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function KeyboardPattern({ component, keys }: any) {
  return (
    <div className="border-2 border-border rounded-lg p-6 bg-card">
      <h4 className="font-bold text-foreground mb-4">{component}</h4>
      <ul className="space-y-3">
        {keys.map((item: any, index: number) => (
          <li key={index} className="text-sm">
            <kbd className="px-2 py-1 bg-gray-900 text-white rounded font-mono text-xs">
              {item.key}
            </kbd>
            <span className="text-muted-foreground ml-3">{item.action}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SemanticExample({ correct, incorrect, reason }: any) {
  return (
    <div className="p-6 hover:bg-background">
      <div className="grid grid-cols-2 gap-6 mb-3">
        <div className="bg-green-50 border border-green-200 rounded p-3">
          <div className="flex items-center gap-2 mb-2">
            <Check className="text-[#138808]" size={16} />
            <span className="font-semibold text-sm">Correct</span>
          </div>
          <code className="text-xs font-mono text-foreground block">{correct}</code>
        </div>
        <div className="bg-red-50 border border-red-200 rounded p-3">
          <div className="flex items-center gap-2 mb-2">
            <X className="text-red-600" size={16} />
            <span className="font-semibold text-sm">Incorrect</span>
          </div>
          <code className="text-xs font-mono text-foreground block">{incorrect}</code>
        </div>
      </div>
      <p className="text-sm text-muted-foreground">{reason}</p>
    </div>
  );
}
