import { Check, X, Info, AlertCircle, Eye, Keyboard, Monitor, Volume2, FileText } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Accessibility() {
  const copy = useAccessibilityCopy();
  return (
    <div className="min-h-screen bg-card">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#138808] to-[#0a5504] text-white py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <div className="text-sm uppercase tracking-wide text-green-200 mb-2">{copy.hero.eyebrow}</div>
            <h1 className="text-5xl font-bold mb-4">{copy.hero.title}</h1>
            <p className="text-xl text-green-100 max-w-3xl mb-6">
              {copy.hero.description}
            </p>
            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Check size={20} />
                <span>{copy.hero.pills.wcag}</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={20} />
                <span>{copy.hero.pills.builtIn}</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={20} />
                <span>{copy.hero.pills.tested}</span>
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
  const copy = useAccessibilityCopy().principlesSection;
  return (
    <section id="principles">
      <SectionHeader
        title={copy.title}
        description={copy.description}
      />

      <div className="mt-8 grid grid-cols-2 gap-8">
        <PrincipleCard
          icon={<Eye size={32} />}
          title={copy.cards.perceivable.title}
          description={copy.cards.perceivable.description}
          items={copy.cards.perceivable.items}
        />

        <PrincipleCard
          icon={<Keyboard size={32} />}
          title={copy.cards.operable.title}
          description={copy.cards.operable.description}
          items={copy.cards.operable.items}
        />

        <PrincipleCard
          icon={<FileText size={32} />}
          title={copy.cards.understandable.title}
          description={copy.cards.understandable.description}
          items={copy.cards.understandable.items}
        />

        <PrincipleCard
          icon={<Monitor size={32} />}
          title={copy.cards.robust.title}
          description={copy.cards.robust.description}
          items={copy.cards.robust.items}
        />
      </div>

      <div className="mt-8 bg-green-50 dark:bg-green-950/30 border-2 border-green-200 dark:border-green-800 rounded-lg p-6">
        <div className="flex items-start gap-3">
          <Info className="text-[#138808] flex-shrink-0 mt-1" size={24} />
          <div>
            <h3 className="font-bold text-foreground mb-2">{copy.law.title}</h3>
            <p className="text-sm text-muted-foreground">
              {copy.law.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ColorContrast() {
  const copy = useAccessibilityCopy().colorContrastSection;
  return (
    <section id="color-contrast">
      <SectionHeader
        title={copy.title}
        description={copy.description}
      />

      <div className="mt-8 space-y-8">
        {/* Contrast Requirements */}
        <div className="border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-background p-6 border-b-2 border-border">
            <h3 className="text-xl font-bold text-foreground">{copy.requirementsTitle}</h3>
          </div>
          
          <div className="divide-y divide-border">
            <ContrastExample
              title="Normal Text (WCAG AA)"
              ratio="4.5:1"
              requirement={copy.normalTextRequirement}
              examples={[
                { fg: "#1F2937", bg: "#FFFFFF", text: "Body text on white background", pass: true },
                { fg: "#000080", bg: "#FFFFFF", text: "Primary blue on white", pass: true },
                { fg: "#6B7280", bg: "#FFFFFF", text: "Secondary gray on white", pass: false }
              ]}
            />

            <ContrastExample
              title="Large Text (WCAG AA)"
              ratio="3:1"
              requirement={copy.largeTextRequirement}
              examples={[
                { fg: "#4B5563", bg: "#FFFFFF", text: "Large heading on white", pass: true },
                { fg: "#000080", bg: "#F3F4F6", text: "Primary on light gray", pass: true }
              ]}
            />

            <ContrastExample
              title="UI Components (WCAG AA)"
              ratio="3:1"
              requirement={copy.uiRequirement}
              examples={[
                { fg: "#000080", bg: "#FFFFFF", text: "Button border", pass: true },
                { fg: "#D1D5DB", bg: "#FFFFFF", text: "Input border", pass: true },
                { fg: "#0EA5E9", bg: "#FFFFFF", text: "Focus ring", pass: true }
              ]}
            />
          </div>
        </div>

        {/* Color Blindness Considerations */}
        <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-8">
          <h3 className="text-xl font-bold text-foreground mb-6">{copy.colorBlindnessTitle}</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <div className="bg-card rounded-lg p-4 border border-blue-200 dark:border-blue-800">
              <div className="font-semibold text-foreground mb-2">Deuteranopia</div>
              <div className="text-sm text-muted-foreground mb-3">{copy.deuteranopia}</div>
              <div className="flex gap-2">
                <div className="w-8 h-8 bg-red-500 rounded"></div>
                <div className="w-8 h-8 bg-green-500 rounded"></div>
                <div className="text-xs text-gray-500 self-center">{copy.mayAppearSimilar}</div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-4 border border-blue-200 dark:border-blue-800">
              <div className="font-semibold text-foreground mb-2">Protanopia</div>
              <div className="text-sm text-muted-foreground mb-3">{copy.protanopia}</div>
              <div className="flex gap-2">
                <div className="w-8 h-8 bg-red-500 rounded"></div>
                <div className="w-8 h-8 bg-background0 rounded"></div>
                <div className="text-xs text-gray-500 self-center">{copy.redAppearsMuted}</div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-4 border border-blue-200 dark:border-blue-800">
              <div className="font-semibold text-foreground mb-2">Tritanopia</div>
              <div className="text-sm text-muted-foreground mb-3">{copy.tritanopia}</div>
              <div className="flex gap-2">
                <div className="w-8 h-8 bg-blue-500 rounded"></div>
                <div className="w-8 h-8 bg-yellow-500 rounded"></div>
                <div className="text-xs text-gray-500 self-center">{copy.mayAppearSimilar}</div>
              </div>
            </div>
          </div>

          <div className="bg-card border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <h4 className="font-semibold text-foreground mb-3">{copy.designGuidelines}</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Check className="text-[#138808] flex-shrink-0 mt-0.5" size={16} />
                <span><strong>{copy.guidelineHeads.colorAlone}</strong> {copy.guidelines[0]}</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="text-[#138808] flex-shrink-0 mt-0.5" size={16} />
                <span><strong>{copy.guidelineHeads.highContrast}</strong> {copy.guidelines[1]}</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="text-[#138808] flex-shrink-0 mt-0.5" size={16} />
                <span><strong>{copy.guidelineHeads.supplementColor}</strong> {copy.guidelines[2]}</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="text-[#138808] flex-shrink-0 mt-0.5" size={16} />
                <span><strong>{copy.guidelineHeads.testDesigns}</strong> {copy.guidelines[3]}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Contrast Testing Tools */}
        <div className="border-2 border-border rounded-lg p-6">
          <h3 className="text-xl font-bold text-foreground mb-4">{copy.testingContrast}</h3>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-foreground mb-3">{copy.recommendedTools}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• <strong>WebAIM Contrast Checker</strong> - {copy.toolDescriptions.webaim}</li>
                <li>• <strong>Browser DevTools</strong> - {copy.toolDescriptions.devtools}</li>
                <li>• <strong>Figma Plugins</strong> - {copy.toolDescriptions.figma}</li>
                <li>• <strong>Automated Testing</strong> - {copy.toolDescriptions.automated}</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">{copy.testingProcess}</h4>
              <ol className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="font-semibold">1.</span>
                  <span>{copy.process[0]}</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold">2.</span>
                  <span>{copy.process[1]}</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold">3.</span>
                  <span>{copy.process[2]}</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold">4.</span>
                  <span>{copy.process[3]}</span>
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
  const copy = useAccessibilityCopy().focusSection;
  return (
    <section id="focus-visibility">
      <SectionHeader
        title={copy.title}
        description={copy.description}
      />

      <div className="mt-8 space-y-8">
        {/* Focus Requirements */}
        <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-8">
          <h3 className="text-xl font-bold text-foreground mb-6">{copy.requirementsTitle}</h3>
          
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="bg-card border-2 border-blue-300 rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">{copy.minimumRequirements}</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="text-[#138808] flex-shrink-0 mt-0.5" size={16} />
                    <span>{copy.minimumItems[0]} <strong>{copy.minimumStrong[0]}</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-[#138808] flex-shrink-0 mt-0.5" size={16} />
                    <span>{copy.minimumItems[1]} <strong>{copy.minimumStrong[1]}</strong> {copy.minimumTail[1]}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-[#138808] flex-shrink-0 mt-0.5" size={16} />
                    <span>{copy.minimumItems[2]} <strong>{copy.minimumStrong[2]}</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-[#138808] flex-shrink-0 mt-0.5" size={16} />
                    <span>{copy.minimumItems[3]}</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card border-2 border-blue-300 rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">{copy.standardTitle}</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>{copy.standardLabels.ringWidth}</span>
                    <code className="font-mono">4px</code>
                  </div>
                  <div className="flex justify-between">
                    <span>{copy.standardLabels.ringColor}</span>
                    <code className="font-mono">rgba(59, 130, 246, 0.5)</code>
                  </div>
                  <div className="flex justify-between">
                    <span>{copy.standardLabels.ringOffset}</span>
                    <code className="font-mono">2px</code>
                  </div>
                  <div className="flex justify-between">
                    <span>{copy.standardLabels.borderRadius}</span>
                    <code className="font-mono">{copy.standardLabels.matchesElement}</code>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card border-2 border-border rounded-lg p-6 space-y-6">
              <div>
                <div className="text-sm font-semibold text-muted-foreground mb-3">{copy.examples.buttonFocus}</div>
                <button className="px-6 py-3 bg-primary text-white rounded-lg font-semibold ring-4 ring-blue-200 ring-offset-2">
                  {copy.examples.focusedButton}
                </button>
              </div>

              <div>
                <div className="text-sm font-semibold text-muted-foreground mb-3">{copy.examples.inputFocus}</div>
                <input
                  type="text"
                  value={copy.examples.focusedInput}
                  readOnly
                  className="w-full px-4 py-3 border-2 border-primary rounded-lg ring-4 ring-blue-100 outline-none"
                />
              </div>

              <div>
                <div className="text-sm font-semibold text-muted-foreground mb-3">{copy.examples.linkFocus}</div>
                <a href="#" className="text-primary underline font-semibold ring-4 ring-blue-200 ring-offset-2 rounded px-1">
                  {copy.examples.focusedLink}
                </a>
              </div>

              <div>
                <div className="text-sm font-semibold text-muted-foreground mb-3">{copy.examples.checkboxFocus}</div>
                <label className="flex items-center gap-3">
                  <input type="checkbox" className="w-5 h-5 border-2 border-primary rounded ring-4 ring-blue-100" />
                  <span>{copy.examples.focusedCheckbox}</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Focus Order */}
        <div className="border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-background p-6 border-b-2 border-border">
            <h3 className="text-xl font-bold text-foreground">{copy.focusOrderTitle}</h3>
          </div>
          
          <div className="p-8">
            <div className="bg-card border-2 border-border rounded-lg p-6 mb-6">
              <div className="space-y-4">
                {[
                  { num: 1, element: copy.order[0].element, desc: copy.order[0].desc },
                  { num: 2, element: copy.order[1].element, desc: copy.order[1].desc },
                  { num: 3, element: copy.order[2].element, desc: copy.order[2].desc },
                  { num: 4, element: copy.order[3].element, desc: copy.order[3].desc },
                  { num: 5, element: copy.order[4].element, desc: copy.order[4].desc },
                  { num: 6, element: copy.order[5].element, desc: copy.order[5].desc }
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
              <div className="border-2 border-green-200 dark:border-green-800 bg-green-50 rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Check className="text-[#138808]" size={20} />
                  {copy.doLabel}
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• {copy.doItems[0]}</li>
                  <li>• {copy.doItems[1]}</li>
                  <li>• {copy.doItems[2]}</li>
                  <li>• {copy.doItems[3]}</li>
                </ul>
              </div>

              <div className="border-2 border-red-200 dark:border-red-800 bg-red-50 rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <X className="text-red-600" size={20} />
                  {copy.dontLabel}
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• {copy.dontItems[0]}</li>
                  <li>• {copy.dontItems[1]}</li>
                  <li>• {copy.dontItems[2]}</li>
                  <li>• {copy.dontItems[3]}</li>
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
  const copy = useAccessibilityCopy().keyboardSection;
  return (
    <section id="keyboard-interaction">
      <SectionHeader
        title={copy.title}
        description={copy.description}
      />

      <div className="mt-8 space-y-8">
        {/* Key Mappings */}
        <div className="border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-background p-6 border-b-2 border-border">
            <h3 className="text-xl font-bold text-foreground">{copy.standardControls}</h3>
          </div>
          
          <div className="divide-y divide-border">
            {[
              { key: "Tab", function: copy.controls[0] },
              { key: "Shift + Tab", function: copy.controls[1] },
              { key: "Enter", function: copy.controls[2] },
              { key: "Space", function: copy.controls[3] },
              { key: "Arrow Keys", function: copy.controls[4] },
              { key: "Esc", function: copy.controls[5] },
              { key: "Home", function: copy.controls[6] },
              { key: "End", function: copy.controls[7] }
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
            component={copy.patterns[0].component}
            keys={[
              { key: "Tab", action: copy.patterns[0].actions[0] },
              { key: "Esc", action: copy.patterns[0].actions[1] },
              { key: "Enter", action: copy.patterns[0].actions[2] }
            ]}
          />

          <KeyboardPattern
            component={copy.patterns[1].component}
            keys={[
              { key: "Space/Enter", action: copy.patterns[1].actions[0] },
              { key: "Arrow Up/Down", action: copy.patterns[1].actions[1] },
              { key: "Esc", action: copy.patterns[1].actions[2] },
              { key: "Type ahead", action: copy.patterns[1].actions[3] }
            ]}
          />

          <KeyboardPattern
            component={copy.patterns[2].component}
            keys={[
              { key: "Tab", action: copy.patterns[2].actions[0] },
              { key: "Arrow Left/Right", action: copy.patterns[2].actions[1] },
              { key: "Home/End", action: copy.patterns[2].actions[2] }
            ]}
          />

          <KeyboardPattern
            component={copy.patterns[3].component}
            keys={[
              { key: "Tab", action: copy.patterns[3].actions[0] },
              { key: "Arrow Keys", action: copy.patterns[3].actions[1] },
              { key: "Space", action: copy.patterns[3].actions[2] }
            ]}
          />
        </div>

        <div className="bg-orange-50 dark:bg-orange-950/30 border-2 border-orange-200 dark:border-orange-800 rounded-lg p-6">
          <div className="flex items-start gap-3">
            <AlertCircle className="text-orange-600 flex-shrink-0 mt-1" size={24} />
            <div>
              <h3 className="font-bold text-foreground mb-2">{copy.testingTitle}</h3>
              <p className="text-sm text-muted-foreground mb-3">
                {copy.testingDescription}
              </p>
              <ol className="space-y-2 text-sm text-muted-foreground">
                <li>1. {copy.testingSteps[0]}</li>
                <li>2. {copy.testingSteps[1]}</li>
                <li>3. {copy.testingSteps[2]}</li>
                <li>4. {copy.testingSteps[3]}</li>
                <li>5. {copy.testingSteps[4]}</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ScreenReader() {
  const copy = useAccessibilityCopy().screenReaderSection;
  return (
    <section id="screen-reader">
      <SectionHeader
        title={copy.title}
        description={copy.description}
      />

      <div className="mt-8 space-y-8">
        {/* ARIA Attributes */}
        <div className="border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-background p-6 border-b-2 border-border">
            <h3 className="text-xl font-bold text-foreground">{copy.ariaTitle}</h3>
          </div>
          
          <div className="divide-y divide-border">
            {[
              { 
                attr: "aria-label", 
                usage: copy.aria[0],
                example: '<button aria-label="Close dialog"><X /></button>'
              },
              { 
                attr: "aria-labelledby", 
                usage: copy.aria[1],
                example: '<div aria-labelledby="modal-title">...</div>'
              },
              { 
                attr: "aria-describedby", 
                usage: copy.aria[2],
                example: '<input aria-describedby="error-message" />'
              },
              { 
                attr: "aria-live", 
                usage: copy.aria[3],
                example: '<div aria-live="polite">Status updated</div>'
              },
              { 
                attr: "aria-current", 
                usage: copy.aria[4],
                example: '<a aria-current="page" href="/home">Home</a>'
              },
              { 
                attr: "aria-expanded", 
                usage: copy.aria[5],
                example: '<button aria-expanded="false">Menu</button>'
              },
              { 
                attr: "aria-hidden", 
                usage: copy.aria[6],
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
            <h3 className="text-xl font-bold text-foreground mb-4">{copy.visuallyHiddenTitle}</h3>
            <p className="text-sm text-muted-foreground mb-4">
              {copy.visuallyHiddenDescription}
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
            <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded p-4 text-sm">
              <strong>{copy.exampleLabel}</strong> {copy.iconOnlyButtons}
              <code className="block mt-2 text-xs">
                {'<button><X /><span class="sr-only">Close</span></button>'}
              </code>
            </div>
          </div>

          <div className="border-2 border-border rounded-lg p-6">
            <h3 className="text-xl font-bold text-foreground mb-4">{copy.alternativeTextTitle}</h3>
            <div className="space-y-4 text-sm">
              <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded p-4">
                <div className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <Check className="text-[#138808]" size={16} />
                  {copy.goodAltText}
                </div>
                <code className="text-xs block">alt="Application form for passport renewal"</code>
                <div className="text-muted-foreground mt-2">{copy.descriptiveContextual}</div>
              </div>

              <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded p-4">
                <div className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <X className="text-red-600" size={16} />
                  {copy.poorAltText}
                </div>
                <code className="text-xs block">alt="image123.jpg"</code>
                <div className="text-muted-foreground mt-2">{copy.nonDescriptiveFilename}</div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded p-4">
                <div className="font-semibold text-foreground mb-2">{copy.decorativeImages}</div>
                <code className="text-xs block">alt=""</code>
                <div className="text-muted-foreground mt-2">{copy.emptyAlt}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Testing with Screen Readers */}
        <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <h3 className="text-xl font-bold text-foreground mb-4">{copy.testingTitle}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card rounded-lg p-4 border border-blue-200 dark:border-blue-800">
              <Volume2 className="text-primary mb-3" size={24} />
              <h4 className="font-semibold text-foreground mb-2">NVDA (Windows)</h4>
              <p className="text-sm text-muted-foreground mb-2">{copy.nvdaDescription}</p>
              <a href="#" className="text-primary text-sm hover:underline">{copy.downloadNvda}</a>
            </div>

            <div className="bg-card rounded-lg p-4 border border-blue-200 dark:border-blue-800">
              <Volume2 className="text-primary mb-3" size={24} />
              <h4 className="font-semibold text-foreground mb-2">VoiceOver (macOS/iOS)</h4>
              <p className="text-sm text-muted-foreground mb-2">{copy.voiceOverDescription}</p>
              <div className="text-sm text-muted-foreground">{copy.voiceOverToggle}</div>
            </div>

            <div className="bg-card rounded-lg p-4 border border-blue-200 dark:border-blue-800">
              <Volume2 className="text-primary mb-3" size={24} />
              <h4 className="font-semibold text-foreground mb-2">JAWS (Windows)</h4>
              <p className="text-sm text-muted-foreground mb-2">{copy.jawsDescription}</p>
              <a href="#" className="text-primary text-sm hover:underline">{copy.downloadJaws}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SemanticStructure() {
  const copy = useAccessibilityCopy().semanticSection;
  return (
    <section id="semantic-structure">
      <SectionHeader
        title={copy.title}
        description={copy.description}
      />

      <div className="mt-8 space-y-8">
        <div className="grid grid-cols-2 gap-8">
          {/* Heading Hierarchy */}
          <div className="border-2 border-border rounded-lg p-6">
            <h3 className="text-xl font-bold text-foreground mb-4">{copy.headingHierarchy}</h3>
            <div className="space-y-3 mb-4">
              <div className="bg-green-50 dark:bg-green-950/30 border-l-4 border-[#138808] p-3">
                <code className="text-sm font-mono text-foreground">{'<h1>Page Title</h1>'}</code>
                <div className="text-xs text-muted-foreground mt-1">{copy.headingNotes[0]}</div>
              </div>
              <div className="bg-green-50 dark:bg-green-950/30 border-l-4 border-[#138808] p-3">
                <code className="text-sm font-mono text-foreground">{'<h2>Section Heading</h2>'}</code>
                <div className="text-xs text-muted-foreground mt-1">{copy.headingNotes[1]}</div>
              </div>
              <div className="bg-green-50 dark:bg-green-950/30 border-l-4 border-[#138808] p-3">
                <code className="text-sm font-mono text-foreground">{'<h3>Subsection</h3>'}</code>
                <div className="text-xs text-muted-foreground mt-1">{copy.headingNotes[2]}</div>
              </div>
            </div>
            <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded p-3 text-sm">
              <strong className="flex items-center gap-2">
                <X className="text-red-600" size={16} />
                {copy.neverSkipHeadingLevels}
              </strong>
              <div className="text-muted-foreground mt-1">{copy.neverSkipDescription}</div>
            </div>
          </div>

          {/* Landmark Regions */}
          <div className="border-2 border-border rounded-lg p-6">
            <h3 className="text-xl font-bold text-foreground mb-4">{copy.landmarkRegions}</h3>
            <div className="space-y-2 text-sm">
              {[
                { tag: '<header>', desc: copy.landmarks[0] },
                { tag: '<nav>', desc: copy.landmarks[1] },
                { tag: '<main>', desc: copy.landmarks[2] },
                { tag: '<div>', desc: copy.landmarks[3] },
                { tag: '<footer>', desc: copy.landmarks[4] },
                { tag: '<section>', desc: copy.landmarks[5] },
                { tag: '<article>', desc: copy.landmarks[6] }
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
            <h3 className="text-xl font-bold text-foreground">{copy.semanticHtmlPatterns}</h3>
          </div>
          
          <div className="divide-y divide-border">
            <SemanticExample
              correct={`<button type="submit">Submit</button>`}
              incorrect={`<div onclick="submit()">Submit</div>`}
              reason={copy.semanticExamples[0]}
            />
            <SemanticExample
              correct={`<a href="/documentation">Navigate</a>`}
              incorrect={`<button onclick="navigate()">Navigate</button>`}
              reason={copy.semanticExamples[1]}
            />
            <SemanticExample
              correct={`<ul><li>Item 1</li><li>Item 2</li></ul>`}
              incorrect={`<div><div>Item 1</div><div>Item 2</div></div>`}
              reason={copy.semanticExamples[2]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function FormAccessibility() {
  const copy = useAccessibilityCopy().formSection;
  return (
    <section id="form-accessibility">
      <SectionHeader
        title={copy.title}
        description={copy.description}
      />

      <div className="mt-8 space-y-8">
        <div className="border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-background p-6 border-b-2 border-border">
            <h3 className="text-xl font-bold text-foreground">{copy.checklistTitle}</h3>
          </div>
          
          <div className="p-8">
            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  title: copy.groups[0].title,
                  items: copy.groups[0].items
                },
                {
                  title: copy.groups[1].title,
                  items: copy.groups[1].items
                },
                {
                  title: copy.groups[2].title,
                  items: copy.groups[2].items
                },
                {
                  title: copy.groups[3].title,
                  items: copy.groups[3].items
                }
              ].map((section, index) => (
                <div key={index} className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg p-4">
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
            <h3 className="text-xl font-bold text-foreground mb-4">{copy.exampleTitle}</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                  {copy.fullName} <span className="text-red-600">*</span>
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
                  {copy.emailAddress} <span className="text-red-600">*</span>
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
                  {copy.emailHint}
                </div>
              </div>

              <div>
                <fieldset>
                  <legend className="block text-sm font-semibold text-foreground mb-2">
                    {copy.preferredContact}
                  </legend>
                  <div className="space-y-2">
                    <label className="flex items-center gap-3">
                      <input type="radio" name="contact" value="email" className="w-5 h-5" />
                      <span className="text-sm">{copy.email}</span>
                    </label>
                    <label className="flex items-center gap-3">
                      <input type="radio" name="contact" value="phone" className="w-5 h-5" />
                      <span className="text-sm">{copy.phone}</span>
                    </label>
                  </div>
                </fieldset>
              </div>
            </form>
          </div>

          <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-foreground mb-4">{copy.keyPointsTitle}</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Check className="text-[#138808] flex-shrink-0 mt-0.5" size={16} />
                <span><strong>htmlFor/id:</strong> {copy.keyPoints[0]}</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="text-[#138808] flex-shrink-0 mt-0.5" size={16} />
                <span><strong>aria-required:</strong> {copy.keyPoints[1]}</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="text-[#138808] flex-shrink-0 mt-0.5" size={16} />
                <span><strong>aria-describedby:</strong> {copy.keyPoints[2]}</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="text-[#138808] flex-shrink-0 mt-0.5" size={16} />
                <span><strong>fieldset/legend:</strong> {copy.keyPoints[3]}</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="text-[#138808] flex-shrink-0 mt-0.5" size={16} />
                <span><strong>input types:</strong> {copy.keyPoints[4]}</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="text-[#138808] flex-shrink-0 mt-0.5" size={16} />
                <span><strong>Focus indicators:</strong> {copy.keyPoints[5]}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function ErrorHandling() {
  const copy = useAccessibilityCopy().errorSection;
  return (
    <section id="error-handling">
      <SectionHeader
        title={copy.title}
        description={copy.description}
      />

      <div className="mt-8 space-y-8">
        <div className="grid grid-cols-2 gap-8">
          <div className="border-2 border-border rounded-lg p-6">
            <h3 className="text-xl font-bold text-foreground mb-4">{copy.requirementsTitle}</h3>
            <ul className="space-y-3 text-sm">
              {[
                copy.requirements[0],
                copy.requirements[1],
                copy.requirements[2],
                copy.requirements[3],
                copy.requirements[4],
                copy.requirements[5],
                copy.requirements[6],
                copy.requirements[7]
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
              <h4 className="font-semibold text-foreground mb-3">{copy.exampleTitle}</h4>
              <div>
                <label htmlFor="error-email" className="block text-sm font-semibold text-foreground mb-2">
                  {copy.emailAddress} <span className="text-red-600">*</span>
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
                  <span>{copy.emailError}</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <h4 className="font-semibold text-foreground mb-2 text-sm">{copy.implementation}</h4>
              <code className="text-xs bg-card border border-blue-200 dark:border-blue-800 rounded p-2 block font-mono">
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
            <h3 className="text-xl font-bold text-foreground">{copy.summaryTitle}</h3>
          </div>
          
          <div className="p-8">
            <div className="border-l-4 border-red-500 bg-red-50 p-6 rounded-r mb-4">
              <div className="flex items-start gap-3">
                <AlertCircle className="text-red-600 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-red-900 mb-2">{copy.summaryHeading}</h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a href="#email" className="text-red-700 underline hover:text-red-800">
                        {copy.summaryLinks[0]}
                      </a>
                    </li>
                    <li>
                      <a href="#phone" className="text-red-700 underline hover:text-red-800">
                        {copy.summaryLinks[1]}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg p-4">
              <h4 className="font-semibold text-foreground mb-3">{copy.bestPracticesTitle}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Check className="text-[#138808] flex-shrink-0 mt-0.5" size={16} />
                  <span>{copy.bestPractices[0]}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-[#138808] flex-shrink-0 mt-0.5" size={16} />
                  <span>{copy.bestPractices[1]}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-[#138808] flex-shrink-0 mt-0.5" size={16} />
                  <span>{copy.bestPractices[2]}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-[#138808] flex-shrink-0 mt-0.5" size={16} />
                  <span>{copy.bestPractices[3]}</span>
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
  const copy = useAccessibilityCopy().tableSection;
  return (
    <section id="table-accessibility">
      <SectionHeader
        title={copy.title}
        description={copy.description}
      />

      <div className="mt-8 space-y-8">
        <div className="border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-background p-6 border-b-2 border-border">
            <h3 className="text-xl font-bold text-foreground">{copy.exampleTitle}</h3>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <caption className="p-4 text-left font-semibold text-foreground bg-background">
                {copy.caption}
              </caption>
              <thead className="bg-muted border-b-2 border-border">
                <tr>
                  <th scope="col" className="text-left p-4 font-semibold text-foreground">{copy.columns[0]}</th>
                  <th scope="col" className="text-left p-4 font-semibold text-foreground">{copy.columns[1]}</th>
                  <th scope="col" className="text-left p-4 font-semibold text-foreground">{copy.columns[2]}</th>
                  <th scope="col" className="text-left p-4 font-semibold text-foreground">{copy.columns[3]}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="p-4 font-mono text-sm">APP-001</td>
                  <td className="p-4">Rajesh Kumar</td>
                  <td className="p-4">
                    <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                      {copy.approved}
                    </span>
                  </td>
                  <td className="p-4 text-muted-foreground">Jan 15, 2024</td>
                </tr>
                <tr>
                  <td className="p-4 font-mono text-sm">APP-002</td>
                  <td className="p-4">Priya Sharma</td>
                  <td className="p-4">
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-semibold">
                      {copy.pending}
                    </span>
                  </td>
                  <td className="p-4 text-muted-foreground">Jan 18, 2024</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="bg-green-50 dark:bg-green-950/30 border-2 border-green-200 dark:border-green-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-foreground mb-4">{copy.requirementsTitle}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Check className="text-[#138808] flex-shrink-0 mt-0.5" size={16} />
                <span><strong>{'<caption>'}:</strong> {copy.requirements[0]}</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="text-[#138808] flex-shrink-0 mt-0.5" size={16} />
                <span><strong>{'<thead>'}, {'<tbody>'}:</strong> {copy.requirements[1]}</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="text-[#138808] flex-shrink-0 mt-0.5" size={16} />
                <span><strong>{'<th scope="col">'}:</strong> {copy.requirements[2]}</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="text-[#138808] flex-shrink-0 mt-0.5" size={16} />
                <span><strong>{'<th scope="row">'}:</strong> {copy.requirements[3]}</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="text-[#138808] flex-shrink-0 mt-0.5" size={16} />
                <span><strong>{copy.simpleStructureHead}</strong> {copy.requirements[4]}</span>
              </li>
            </ul>
          </div>

          <div className="bg-orange-50 dark:bg-orange-950/30 border-2 border-orange-200 dark:border-orange-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-foreground mb-4">{copy.responsiveTitle}</h3>
            <p className="text-sm text-muted-foreground mb-4">
              {copy.responsiveDescription}
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Check className="text-orange-600 flex-shrink-0 mt-0.5" size={16} />
                <span>{copy.responsiveItems[0]}</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="text-orange-600 flex-shrink-0 mt-0.5" size={16} />
                <span>{copy.responsiveItems[1]}</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="text-orange-600 flex-shrink-0 mt-0.5" size={16} />
                <span>{copy.responsiveItems[2]}</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="text-orange-600 flex-shrink-0 mt-0.5" size={16} />
                <span>{copy.responsiveItems[3]}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function ModalAccessibility() {
  const copy = useAccessibilityCopy().modalSection;
  return (
    <section id="modal-accessibility">
      <SectionHeader
        title={copy.title}
        description={copy.description}
      />

      <div className="mt-8 space-y-8">
        <div className="border-2 border-border rounded-lg overflow-hidden">
          <div className="bg-background p-6 border-b-2 border-border">
            <h3 className="text-xl font-bold text-foreground">{copy.requirementsTitle}</h3>
          </div>
          
          <div className="p-8">
            <div className="grid grid-cols-2 gap-8 mb-8">
              {[
                {
                  title: copy.groups[0].title,
                  items: copy.groups[0].items
                },
                {
                  title: copy.groups[1].title,
                  items: copy.groups[1].items
                },
                {
                  title: copy.groups[2].title,
                  items: copy.groups[2].items
                },
                {
                  title: copy.groups[3].title,
                  items: copy.groups[3].items
                }
              ].map((section, index) => (
                <div key={index} className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
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
  const copy = useAccessibilityCopy().statusSection;
  return (
    <section id="status-communication">
      <SectionHeader
        title={copy.title}
        description={copy.description}
      />

      <div className="mt-8 space-y-8">
        <div className="grid grid-cols-2 gap-8">
          <div className="border-2 border-border rounded-lg p-6">
            <h3 className="text-xl font-bold text-foreground mb-4">{copy.liveRegionsTitle}</h3>
            <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <code className="text-sm font-mono text-purple-700 font-semibold">aria-live="polite"</code>
                <p className="text-sm text-muted-foreground mt-2">
                  {copy.liveRegions[0]}
                </p>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-950/30 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                <code className="text-sm font-mono text-purple-700 font-semibold">aria-live="assertive"</code>
                <p className="text-sm text-muted-foreground mt-2">
                  {copy.liveRegions[1]}
                </p>
              </div>

              <div className="bg-background border border-border rounded-lg p-4">
                <code className="text-sm font-mono text-purple-700 font-semibold">role="status"</code>
                <p className="text-sm text-muted-foreground mt-2">
                  {copy.liveRegions[2]}
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-lg p-4">
                <code className="text-sm font-mono text-purple-700 font-semibold">role="alert"</code>
                <p className="text-sm text-muted-foreground mt-2">
                  {copy.liveRegions[3]}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="border-2 border-green-200 dark:border-green-800 bg-green-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">{copy.formSubmissionTitle}</h3>
              <div className="space-y-4">
                <button className="px-6 py-3 bg-primary text-white rounded-lg font-semibold">
                  {copy.submitApplication}
                </button>
                <div className="border-l-4 border-[#138808] bg-card p-4 rounded-r" role="status">
                  <div className="flex items-center gap-2 text-[#138808]">
                    <Check size={20} />
                    <span className="font-semibold">{copy.applicationSubmitted}</span>
                  </div>
                </div>
                <code className="text-xs bg-gray-900 text-gray-100 p-2 rounded block font-mono">
                  {'<div role="status">Success message</div>'}
                </code>
              </div>
            </div>

            <div className="border-2 border-red-200 dark:border-red-800 bg-red-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">{copy.criticalErrorTitle}</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-red-500 bg-card p-4 rounded-r" role="alert">
                  <div className="flex items-center gap-2 text-red-600">
                    <AlertCircle size={20} />
                    <span className="font-semibold">{copy.sessionExpired}</span>
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
  const copy = useAccessibilityCopy().limitationsSection;
  return (
    <section id="known-limitations">
      <SectionHeader
        title={copy.title}
        description={copy.description}
      />

      <div className="mt-8 space-y-8">
        <div className="bg-orange-50 dark:bg-orange-950/30 border-2 border-orange-200 dark:border-orange-800 rounded-lg p-8">
          <div className="flex items-start gap-4 mb-6">
            <Info className="text-orange-600 flex-shrink-0 mt-1" size={32} />
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">{copy.transparencyTitle}</h3>
              <p className="text-muted-foreground">
                {copy.transparencyDescription}
              </p>
            </div>
          </div>

          <div className="bg-card border border-orange-200 dark:border-orange-800 rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-orange-100 border-b-2 border-orange-200 dark:border-orange-800">
                <tr>
                  <th className="text-left p-4 font-semibold">{copy.columns[0]}</th>
                  <th className="text-left p-4 font-semibold">{copy.columns[1]}</th>
                  <th className="text-left p-4 font-semibold">{copy.columns[2]}</th>
                  <th className="text-left p-4 font-semibold">{copy.columns[3]}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-orange-200">
                <tr>
                  <td className="p-4 font-medium">Date Picker</td>
                  <td className="p-4">{copy.rows[0].limitation}</td>
                  <td className="p-4">{copy.rows[0].workaround}</td>
                  <td className="p-4">
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs font-semibold">
                      {copy.rows[0].status}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Rich Text Editor</td>
                  <td className="p-4">{copy.rows[1].limitation}</td>
                  <td className="p-4">{copy.rows[1].workaround}</td>
                  <td className="p-4">
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-semibold">
                      {copy.rows[1].status}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Data Visualization</td>
                  <td className="p-4">{copy.rows[2].limitation}</td>
                  <td className="p-4">{copy.rows[2].workaround}</td>
                  <td className="p-4">
                    <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-semibold">
                      {copy.rows[2].status}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="border-2 border-border rounded-lg p-6">
          <h3 className="text-xl font-bold text-foreground mb-4">{copy.reportingTitle}</h3>
          <p className="text-muted-foreground mb-4">
            {copy.reportingDescription}
          </p>
          <div className="bg-background border border-border rounded-lg p-4 space-y-2 text-sm">
            <div><strong>{copy.reportingLabels[0]}</strong> accessibility@ux4g.gov.in</div>
            <div><strong>{copy.reportingLabels[1]}</strong> github.com/dbn1972/DesignSystem2016/issues</div>
            <div><strong>{copy.reportingLabels[2]}</strong> {copy.requiredInformation}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReviewChecklist() {
  const copy = useAccessibilityCopy().reviewSection;
  return (
    <section id="review-checklist">
      <SectionHeader
        title={copy.title}
        description={copy.description}
      />

      <div className="mt-8 space-y-8">
        <div className="bg-green-50 dark:bg-green-950/30 border-2 border-green-200 dark:border-green-800 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-foreground mb-6">{copy.preLaunchTitle}</h3>
          
          <div className="grid grid-cols-2 gap-8">
            {[
              {
                category: copy.categories[0].category,
                items: copy.categories[0].items
              },
              {
                category: copy.categories[1].category,
                items: copy.categories[1].items
              },
              {
                category: copy.categories[2].category,
                items: copy.categories[2].items
              },
              {
                category: copy.categories[3].category,
                items: copy.categories[3].items
              },
              {
                category: copy.categories[4].category,
                items: copy.categories[4].items
              },
              {
                category: copy.categories[5].category,
                items: copy.categories[5].items
              },
              {
                category: copy.categories[6].category,
                items: copy.categories[6].items
              },
              {
                category: copy.categories[7].category,
                items: copy.categories[7].items
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

        <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <h3 className="text-xl font-bold text-foreground mb-4">{copy.continuousTitle}</h3>
          <p className="text-muted-foreground mb-4">
            {copy.continuousDescription}
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <Check className="text-blue-600 flex-shrink-0 mt-0.5" size={16} />
              <span>{copy.continuousItems[0]}</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-blue-600 flex-shrink-0 mt-0.5" size={16} />
              <span>{copy.continuousItems[1]}</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-blue-600 flex-shrink-0 mt-0.5" size={16} />
              <span>{copy.continuousItems[2]}</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-blue-600 flex-shrink-0 mt-0.5" size={16} />
              <span>{copy.continuousItems[3]}</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-blue-600 flex-shrink-0 mt-0.5" size={16} />
              <span>{copy.continuousItems[4]}</span>
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
        <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded p-3">
          <div className="flex items-center gap-2 mb-2">
            <Check className="text-[#138808]" size={16} />
            <span className="font-semibold text-sm">Correct</span>
          </div>
          <code className="text-xs font-mono text-foreground block">{correct}</code>
        </div>
        <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded p-3">
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
