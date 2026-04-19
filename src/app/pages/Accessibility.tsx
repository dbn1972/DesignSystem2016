import { Check, X, Info, AlertCircle, Eye, Keyboard, Monitor, Volume2, FileText, Download, Copy, Package, Code2, Terminal, Shield } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import LegalPageLayout from "../components/LegalPageLayout";
import { AccessibilityIllustration } from "../components/legal-illustrations";

export default function Accessibility() {
  const copy = useAccessibilityCopy();

  const toc = [
    { id: 'principles', label: 'Principles' },
    { id: 'color-contrast', label: 'Color Contrast' },
    { id: 'focus-visibility', label: 'Focus Visibility' },
    { id: 'keyboard-interaction', label: 'Keyboard Interaction' },
    { id: 'screen-reader', label: 'Screen Reader' },
    { id: 'semantic-structure', label: 'Semantic Structure' },
    { id: 'form-accessibility', label: 'Form Accessibility' },
    { id: 'error-handling', label: 'Error Handling' },
    { id: 'table-accessibility', label: 'Table Accessibility' },
    { id: 'modal-accessibility', label: 'Modal Accessibility' },
    { id: 'status-communication', label: 'Status Communication' },
    { id: 'accessibility-toolkit', label: 'Accessibility Toolkit' },
    { id: 'known-limitations', label: 'Known Limitations' },
    { id: 'review-checklist', label: 'Review Checklist' },
  ];

  return (
    <LegalPageLayout
      badge={copy.hero.eyebrow}
      badgeIcon={<Eye size={14} className="text-[#138808]" />}
      heroIcon={<Eye size={30} />}
      title={copy.hero.title}
      description={copy.hero.description}
      date="April 18, 2026"
      dateLabel="Last Updated"
      sidebarEyebrow="UX4G Standard"
      sidebarTitle="Accessibility"
      sidebarPill="WCAG 2.1 AA"
      metrics={[
        { value: '14', label: 'Sections' },
        { value: 'AA', label: 'WCAG Level' },
        { value: '25+', label: 'Toolkit Features' },
        { value: '100%', label: 'Keyboard Operable' },
      ]}
      note={{
        title: 'Important',
        text: 'This page documents the accessibility standards, patterns, and toolkit built into the UX4G Design System. The accessibility toolkit provides user-facing controls but does not replace the need for proper semantic HTML, color contrast, and screen reader testing throughout your site.',
      }}
      breadcrumbTitle="Accessibility"
      breadcrumbHome="Home"
      breadcrumbGovernance="Foundations"
      toc={toc}
      footerQuestion="Questions about accessibility?"
      footerDesc="Contact the UX4G accessibility team for guidance on implementing accessible government digital services."
      illustration={<AccessibilityIllustration />}
      accentColor="#138808"
    >
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
      <AccessibilityToolkitSection />
      <KnownLimitations />
      <ReviewChecklist />
    </LegalPageLayout>
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

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
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
        <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-4 sm:p-6 lg:p-8">
          <h3 className="text-xl font-bold text-foreground mb-6">{copy.colorBlindnessTitle}</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <div className="bg-card rounded-lg p-4 border border-blue-200 dark:border-blue-800">
              <div className="font-semibold text-foreground mb-2">Deuteranopia</div>
              <div className="text-sm text-muted-foreground mb-3">{copy.deuteranopia}</div>
              <div className="flex gap-2">
                <div className="w-8 h-8 bg-red-50 dark:bg-red-900/200 rounded"></div>
                <div className="w-8 h-8 bg-green-50 dark:bg-green-900/200 rounded"></div>
                <div className="text-xs text-muted-foreground self-center">{copy.mayAppearSimilar}</div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-4 border border-blue-200 dark:border-blue-800">
              <div className="font-semibold text-foreground mb-2">Protanopia</div>
              <div className="text-sm text-muted-foreground mb-3">{copy.protanopia}</div>
              <div className="flex gap-2">
                <div className="w-8 h-8 bg-red-50 dark:bg-red-900/200 rounded"></div>
                <div className="w-8 h-8 bg-background0 rounded"></div>
                <div className="text-xs text-muted-foreground self-center">{copy.redAppearsMuted}</div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-4 border border-blue-200 dark:border-blue-800">
              <div className="font-semibold text-foreground mb-2">Tritanopia</div>
              <div className="text-sm text-muted-foreground mb-3">{copy.tritanopia}</div>
              <div className="flex gap-2">
                <div className="w-8 h-8 bg-blue-50 dark:bg-blue-900/200 rounded"></div>
                <div className="w-8 h-8 bg-yellow-50 dark:bg-yellow-900/200 rounded"></div>
                <div className="text-xs text-muted-foreground self-center">{copy.mayAppearSimilar}</div>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
        <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-4 sm:p-6 lg:p-8">
          <h3 className="text-xl font-bold text-foreground mb-6">{copy.requirementsTitle}</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-2 border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
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

              <div className="border-2 border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border-2 border-border rounded-lg p-6">
            <h3 className="text-xl font-bold text-foreground mb-4">{copy.visuallyHiddenTitle}</h3>
            <p className="text-sm text-muted-foreground mb-4">
              {copy.visuallyHiddenDescription}
            </p>
            <div className="bg-gray-900 text-gray-100 dark:text-gray-200 rounded p-4 text-xs font-mono mb-4">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
            <div className="border-2 border-red-500 rounded-lg p-4 bg-red-50 dark:bg-red-900/20">
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
            <div className="border-l-4 border-red-500 bg-red-50 dark:bg-red-900/20 p-6 rounded-r mb-4">
              <div className="flex items-start gap-3">
                <AlertCircle className="text-red-600 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-red-900 mb-2">{copy.summaryHeading}</h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a href="#email" className="text-red-700 underline hover:text-red-800 dark:text-red-300">
                        {copy.summaryLinks[0]}
                      </a>
                    </li>
                    <li>
                      <a href="#phone" className="text-red-700 underline hover:text-red-800 dark:text-red-300">
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
                    <span className="px-2 py-1 bg-green-100 text-green-700 dark:text-green-400 rounded-full text-xs font-semibold">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
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

            <div className="bg-gray-900 text-gray-100 dark:text-gray-200 rounded-lg p-6">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
            <div className="border-2 border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20 rounded-lg p-6">
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
                <code className="text-xs bg-gray-900 text-gray-100 dark:text-gray-200 p-2 rounded block font-mono">
                  {'<div role="status">Success message</div>'}
                </code>
              </div>
            </div>

            <div className="border-2 border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20 rounded-lg p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">{copy.criticalErrorTitle}</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-red-500 bg-card p-4 rounded-r" role="alert">
                  <div className="flex items-center gap-2 text-red-600">
                    <AlertCircle size={20} />
                    <span className="font-semibold">{copy.sessionExpired}</span>
                  </div>
                </div>
                <code className="text-xs bg-gray-900 text-gray-100 dark:text-gray-200 p-2 rounded block font-mono">
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

function AccessibilityToolkitSection() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'react' | 'angular'>('react');

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const downloadCode = (code: string, filename: string) => {
    const blob = new Blob([code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  };

  const reactInstall = `npm install @ux4g/a11y-core @ux4g/a11y-react`;
  const reactUsage = `// App.tsx
import { A11yToolkit } from '@ux4g/a11y-react';
import '@ux4g/a11y-core/styles/a11y-global.css';
import '@ux4g/a11y-core/styles/a11y-panel.css';

function App() {
  return (
    <A11yToolkit config={{
      launcherPosition: 'bottom-right',
      storageKey: 'my-app-a11y',
      skipToContentSelector: '#main-content',
      respectReducedMotion: true,
    }}>
      <YourApp />
    </A11yToolkit>
  );
}`;

  const reactHookUsage = `// Any component
import { useA11y } from '@ux4g/a11y-react';

function MyComponent() {
  const { fontSize, toggle, resetAll } = useA11y();
  return (
    <button onClick={() => toggle('highContrast')}>
      Toggle High Contrast
    </button>
  );
}`;

  const angularInstall = `npm install @ux4g/a11y-core @ux4g/a11y-angular`;
  const angularConfig = `// app.config.ts
import { provideA11yToolkit } from '@ux4g/a11y-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideA11yToolkit({
      launcherPosition: 'bottom-right',
      storageKey: 'my-app-a11y',
      skipToContentSelector: '#main-content',
    }),
  ],
};`;

  const angularTemplate = `// app.component.ts
import { A11yToolkitComponent } from '@ux4g/a11y-angular';

@Component({
  standalone: true,
  imports: [RouterOutlet, A11yToolkitComponent],
  template: \`
    <ux4g-a11y-toolkit />
    <router-outlet />
  \`,
})
export class AppComponent {}`;

  const angularService = `// Any component
import { A11yService } from '@ux4g/a11y-angular';

@Component({ ... })
export class MyComponent {
  private a11y = inject(A11yService);

  toggleContrast() {
    this.a11y.toggle('highContrast');
  }
}`;

  const angularStyles = `// angular.json → styles array
"styles": [
  "node_modules/@ux4g/a11y-core/styles/a11y-global.css",
  "node_modules/@ux4g/a11y-core/styles/a11y-panel.css"
]`;

  const features = [
    'Increase / decrease / reset text size',
    'Line height & letter spacing controls',
    'Dyslexia-friendly font toggle',
    'High / dark / light contrast modes',
    'Invert colors, grayscale, desaturate',
    'Highlight links & headings',
    'Larger cursor',
    'Reading guide & reading mask',
    'Pause animations (respects prefers-reduced-motion)',
    'Hide images',
    'Strong focus indicator & keyboard nav',
    'Skip to content',
    'Persist settings across reloads',
    'Reset all settings',
    'Keyboard shortcut: Alt + A',
    'Screen-reader announcements',
    'Hindi label translations included',
  ];

  const CopyBtn = ({ code, id }: { code: string; id: string }) => (
    <button
      onClick={() => copyToClipboard(code, id)}
      aria-label={copiedId === id ? 'Copied' : 'Copy code'}
      className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground hover:bg-muted hover:text-foreground transition-colors focus-visible:ring-2 focus-visible:ring-[#005196]"
    >
      {copiedId === id ? <Check size={14} /> : <Copy size={14} />}
    </button>
  );

  return (
    <section id="accessibility-toolkit">
      <SectionHeader
        title="Accessibility Toolkit"
        description="A production-ready, plug-and-play accessibility widget for React and Angular applications. Drop it into your app to give users control over text size, contrast, spacing, animations, and more."
      />

      <div className="mt-8 space-y-8">
        {/* Feature overview */}
        <div className="bg-[#005196]/5 border-2 border-[#005196]/20 rounded-xl p-6 lg:p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-[#005196] text-white flex items-center justify-center flex-shrink-0">
              <Eye size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-1">25 Accessibility Features</h3>
              <p className="text-muted-foreground text-sm">
                Framework-independent core with React and Angular bindings. Shared CSS, shared state machine, shared persistence.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {features.map((f, i) => (
              <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                <Check size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
                <span>{f}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture diagram */}
        <div className="border-2 border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
            <Package size={20} className="text-[#005196]" />
            Package Architecture
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-background border border-border rounded-lg p-4">
              <div className="text-xs font-semibold text-[#005196] uppercase tracking-wide mb-2">@ux4g/a11y-core</div>
              <p className="text-sm text-muted-foreground mb-3">Framework-independent engine</p>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• Feature registry & definitions</li>
                <li>• State machine (pure reducer)</li>
                <li>• Persistence (localStorage)</li>
                <li>• Style engine (DOM application)</li>
                <li>• Config contracts & resolver</li>
                <li>• CSS stylesheets</li>
              </ul>
            </div>
            <div className="bg-background border border-[#005196]/30 rounded-lg p-4">
              <div className="text-xs font-semibold text-[#005196] uppercase tracking-wide mb-2">@ux4g/a11y-react</div>
              <p className="text-sm text-muted-foreground mb-3">React binding</p>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• Context provider</li>
                <li>• useA11y / useA11yConfig hooks</li>
                <li>• A11yToolkit composition root</li>
                <li>• Launcher, panel, toggle, stepper</li>
                <li>• Reading guide & mask overlays</li>
              </ul>
            </div>
            <div className="bg-background border border-orange-300/50 rounded-lg p-4">
              <div className="text-xs font-semibold text-orange-600 uppercase tracking-wide mb-2">@ux4g/a11y-angular</div>
              <p className="text-sm text-muted-foreground mb-3">Angular binding</p>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• A11yService (signals-based)</li>
                <li>• provideA11yToolkit() factory</li>
                <li>• Standalone components</li>
                <li>• InjectionToken configuration</li>
                <li>• SSR-safe browser guards</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Framework tabs */}
        <div className="border-2 border-border rounded-xl overflow-hidden">
          <div className="flex border-b border-border">
            <button
              onClick={() => setActiveTab('react')}
              className={`flex-1 px-4 py-3 text-sm font-semibold transition-colors ${
                activeTab === 'react'
                  ? 'bg-[#005196] text-white'
                  : 'bg-background text-muted-foreground hover:bg-muted'
              }`}
            >
              <Code2 size={16} className="inline mr-2" />
              React Integration
            </button>
            <button
              onClick={() => setActiveTab('angular')}
              className={`flex-1 px-4 py-3 text-sm font-semibold transition-colors ${
                activeTab === 'angular'
                  ? 'bg-[#dd0031] text-white'
                  : 'bg-background text-muted-foreground hover:bg-muted'
              }`}
            >
              <Code2 size={16} className="inline mr-2" />
              Angular Integration
            </button>
          </div>

          <div className="p-6 space-y-6">
            {activeTab === 'react' ? (
              <>
                {/* React: Install */}
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Terminal size={14} /> 1. Install
                  </h4>
                  <div className="relative bg-[#1e293b] rounded-lg p-4 text-sm font-mono text-green-300 overflow-x-auto">
                    <code>{reactInstall}</code>
                    <div className="absolute top-2 right-2"><CopyBtn code={reactInstall} id="react-install" /></div>
                  </div>
                </div>

                {/* React: Wrap app */}
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Code2 size={14} /> 2. Wrap your app
                  </h4>
                  <div className="relative bg-[#1e293b] rounded-lg p-4 text-sm font-mono text-blue-200 overflow-x-auto">
                    <pre className="whitespace-pre">{reactUsage}</pre>
                    <div className="absolute top-2 right-2 flex gap-1">
                      <CopyBtn code={reactUsage} id="react-usage" />
                      <button onClick={() => downloadCode(reactUsage, 'a11y-react-setup.tsx')} aria-label="Download React setup" className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground hover:bg-muted hover:text-foreground transition-colors focus-visible:ring-2 focus-visible:ring-[#005196]">
                        <Download size={14} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* React: Hook usage */}
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Code2 size={14} /> 3. Use the hook (optional)
                  </h4>
                  <div className="relative bg-[#1e293b] rounded-lg p-4 text-sm font-mono text-blue-200 overflow-x-auto">
                    <pre className="whitespace-pre">{reactHookUsage}</pre>
                    <div className="absolute top-2 right-2"><CopyBtn code={reactHookUsage} id="react-hook" /></div>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Angular: Install */}
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Terminal size={14} /> 1. Install
                  </h4>
                  <div className="relative bg-[#1e293b] rounded-lg p-4 text-sm font-mono text-green-300 overflow-x-auto">
                    <code>{angularInstall}</code>
                    <div className="absolute top-2 right-2"><CopyBtn code={angularInstall} id="ng-install" /></div>
                  </div>
                </div>

                {/* Angular: Styles */}
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Code2 size={14} /> 2. Add styles (angular.json)
                  </h4>
                  <div className="relative bg-[#1e293b] rounded-lg p-4 text-sm font-mono text-blue-200 overflow-x-auto">
                    <pre className="whitespace-pre">{angularStyles}</pre>
                    <div className="absolute top-2 right-2"><CopyBtn code={angularStyles} id="ng-styles" /></div>
                  </div>
                </div>

                {/* Angular: Provider */}
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Code2 size={14} /> 3. Provide at root level
                  </h4>
                  <div className="relative bg-[#1e293b] rounded-lg p-4 text-sm font-mono text-blue-200 overflow-x-auto">
                    <pre className="whitespace-pre">{angularConfig}</pre>
                    <div className="absolute top-2 right-2 flex gap-1">
                      <CopyBtn code={angularConfig} id="ng-config" />
                      <button onClick={() => downloadCode(angularConfig, 'a11y-angular-config.ts')} aria-label="Download Angular config" className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground hover:bg-muted hover:text-foreground transition-colors focus-visible:ring-2 focus-visible:ring-[#005196]">
                        <Download size={14} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Angular: Template */}
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Code2 size={14} /> 4. Add to app shell
                  </h4>
                  <div className="relative bg-[#1e293b] rounded-lg p-4 text-sm font-mono text-blue-200 overflow-x-auto">
                    <pre className="whitespace-pre">{angularTemplate}</pre>
                    <div className="absolute top-2 right-2 flex gap-1">
                      <CopyBtn code={angularTemplate} id="ng-template" />
                      <button onClick={() => downloadCode(angularTemplate, 'a11y-angular-app.ts')} aria-label="Download Angular app component" className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground hover:bg-muted hover:text-foreground transition-colors focus-visible:ring-2 focus-visible:ring-[#005196]">
                        <Download size={14} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Angular: Service */}
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Code2 size={14} /> 5. Use the service (optional)
                  </h4>
                  <div className="relative bg-[#1e293b] rounded-lg p-4 text-sm font-mono text-blue-200 overflow-x-auto">
                    <pre className="whitespace-pre">{angularService}</pre>
                    <div className="absolute top-2 right-2"><CopyBtn code={angularService} id="ng-service" /></div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Configuration options */}
        <div className="border-2 border-border rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground mb-4">Configuration Options</h3>
          <div className="bg-background border border-border rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-muted/50 border-b border-border">
                <tr>
                  <th className="text-left p-3 font-semibold">Option</th>
                  <th className="text-left p-3 font-semibold">Type</th>
                  <th className="text-left p-3 font-semibold">Default</th>
                  <th className="text-left p-3 font-semibold">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-muted-foreground">
                <tr><td className="p-3 font-mono text-xs">launcherPosition</td><td className="p-3 text-xs">string</td><td className="p-3 text-xs">'bottom-right'</td><td className="p-3 text-xs">Launcher button position</td></tr>
                <tr><td className="p-3 font-mono text-xs">panelPlacement</td><td className="p-3 text-xs">string</td><td className="p-3 text-xs">'drawer-right'</td><td className="p-3 text-xs">Panel style: drawer-right, drawer-left, modal</td></tr>
                <tr><td className="p-3 font-mono text-xs">storageKey</td><td className="p-3 text-xs">string</td><td className="p-3 text-xs">'ux4g-a11y'</td><td className="p-3 text-xs">localStorage namespace</td></tr>
                <tr><td className="p-3 font-mono text-xs">skipToContentSelector</td><td className="p-3 text-xs">string</td><td className="p-3 text-xs">'#main-content'</td><td className="p-3 text-xs">Skip-link target selector</td></tr>
                <tr><td className="p-3 font-mono text-xs">respectReducedMotion</td><td className="p-3 text-xs">boolean</td><td className="p-3 text-xs">true</td><td className="p-3 text-xs">Auto-enable pause-animations</td></tr>
                <tr><td className="p-3 font-mono text-xs">disabledFeatures</td><td className="p-3 text-xs">string[]</td><td className="p-3 text-xs">[]</td><td className="p-3 text-xs">Features to hide from the panel</td></tr>
                <tr><td className="p-3 font-mono text-xs">labels</td><td className="p-3 text-xs">Partial&lt;A11yLabels&gt;</td><td className="p-3 text-xs">English</td><td className="p-3 text-xs">i18n label overrides (Hindi included)</td></tr>
                <tr><td className="p-3 font-mono text-xs">onSettingChange</td><td className="p-3 text-xs">function</td><td className="p-3 text-xs">—</td><td className="p-3 text-xs">Analytics callback: (key, value, state)</td></tr>
              </tbody>
            </table>
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
        <div className="bg-orange-50 dark:bg-orange-950/30 border-2 border-orange-200 dark:border-orange-800 rounded-lg p-4 sm:p-6 lg:p-8">
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
                    <span className="px-2 py-1 bg-green-100 text-green-700 dark:text-green-400 rounded text-xs font-semibold">
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
        <div className="bg-green-50 dark:bg-green-950/30 border-2 border-green-200 dark:border-green-800 rounded-lg p-4 sm:p-6 lg:p-8">
          <h3 className="text-2xl font-bold text-foreground mb-6">{copy.preLaunchTitle}</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

function useAccessibilityCopy() {
  const { i18n } = useTranslation();
  return ACCESSIBILITY_COPY[i18n.resolvedLanguage === "hi" ? "hi" : "en"];
}

const ACCESSIBILITY_COPY = {
  en: {
    hero: {
      eyebrow: "UX4G Design System",
      title: "Accessibility",
      description:
        "Accessibility is fundamental to the UX4G Design System. Every component, pattern, and guideline is designed to meet WCAG 2.1 Level AA standards, ensuring government digital services are accessible to all citizens of India.",
      pills: {
        wcag: "WCAG 2.1 Level AA Compliant",
        builtIn: "Built-in by Default",
        tested: "Rigorously Tested",
      },
    },
    principlesSection: {
      title: "Accessibility Principles",
      description: "Core principles guiding accessibility implementation in UX4G",
      cards: {
        perceivable: { title: "Perceivable", description: "Information and user interface components must be presentable to users in ways they can perceive.", items: ["Sufficient color contrast for text and interactive elements", "Text alternatives for non-text content", "Captions and alternatives for multimedia", "Content adaptable without loss of information"] },
        operable: { title: "Operable", description: "User interface components and navigation must be operable by all users.", items: ["All functionality available via keyboard", "Sufficient time for users to read and interact", "Navigation mechanisms are clear and consistent", "No content that could cause seizures"] },
        understandable: { title: "Understandable", description: "Information and operation of user interface must be understandable.", items: ["Text content is readable and understandable", "Pages appear and operate in predictable ways", "Users are helped to avoid and correct mistakes", "Clear error messages and recovery paths"] },
        robust: { title: "Robust", description: "Content must be robust enough for interpretation by assistive technologies.", items: ["Valid semantic HTML markup", "Proper ARIA attributes when needed", "Compatible with current and future assistive technologies", "Progressive enhancement approach"] },
      },
      law: {
        title: "Rights of Persons with Disabilities Act, 2016",
        description:
          "The UX4G Design System aligns with India's Rights of Persons with Disabilities Act, 2016, which mandates that all government digital services must be accessible. Compliance is not optional—it is a legal requirement and moral imperative.",
      },
    },
    colorContrastSection: {
      title: "Color Contrast Guidance",
      description: "Ensuring sufficient contrast ratios for all text and interactive elements",
      requirementsTitle: "WCAG Contrast Requirements",
      normalTextRequirement: "For text smaller than 18px or 14px bold",
      largeTextRequirement: "For text 18px+ or 14px+ bold",
      uiRequirement: "For interactive elements and graphics",
      colorBlindnessTitle: "Color Blindness Considerations",
      deuteranopia: "Red-green color blindness (most common)",
      protanopia: "Red color blindness",
      tritanopia: "Blue-yellow color blindness",
      mayAppearSimilar: "May appear similar",
      redAppearsMuted: "Red appears muted",
      designGuidelines: "Design Guidelines",
      guidelineHeads: { colorAlone: "Never rely on color alone", highContrast: "Use high contrast", supplementColor: "Supplement color", testDesigns: "Test designs" },
      guidelines: ["to convey information—use text, icons, or patterns", "between foreground and background colors", "with text labels, icons, or patterns for status indicators", "using color blindness simulators during design phase"],
      testingContrast: "Testing Contrast",
      recommendedTools: "Recommended Tools",
      testingProcess: "Testing Process",
      toolDescriptions: { webaim: "Online tool for testing color combinations", devtools: "Built-in accessibility audits in Chrome/Edge", figma: "A11y - Color Contrast Checker, Stark", automated: "axe DevTools, Lighthouse CI" },
      process: ["Test all text against its background color", "Verify interactive element contrast (borders, focus states)", "Check graphic elements and iconography", "Test in grayscale to ensure information isn't lost"],
    },
    focusSection: {
      title: "Focus Visibility Rules",
      description: "Clear, consistent focus indicators for keyboard navigation",
      requirementsTitle: "Focus Indicator Requirements",
      minimumRequirements: "Minimum Requirements (WCAG 2.4.7)",
      minimumItems: ["Focus indicator must be", "Minimum", "Must be present on", "Should not be removed via CSS"],
      minimumStrong: ["clearly visible", "3:1 contrast", "all interactive elements"],
      minimumTail: ["", "with adjacent colors", ""],
      standardTitle: "UX4G Focus Standard",
      standardLabels: { ringWidth: "Ring width:", ringColor: "Ring color:", ringOffset: "Ring offset:", borderRadius: "Border radius:", matchesElement: "Matches element" },
      examples: { buttonFocus: "Button Focus", focusedButton: "Focused Button", inputFocus: "Input Focus", focusedInput: "Focused input field", linkFocus: "Link Focus", focusedLink: "Focused Link", checkboxFocus: "Checkbox Focus", focusedCheckbox: "Focused checkbox" },
      focusOrderTitle: "Focus Order",
      order: [
        { element: "Logo/Header", desc: "Top-left navigation elements" },
        { element: "Main Navigation", desc: "Primary navigation menu" },
        { element: "Skip Link", desc: "Allow skipping to main content" },
        { element: "Main Content", desc: "Primary page content, left to right, top to bottom" },
        { element: "Sidebar", desc: "Secondary navigation or filters" },
        { element: "Footer Links", desc: "Footer navigation and information" },
      ],
      doLabel: "Do",
      dontLabel: "Don't",
      doItems: ["Follow natural reading order (top to bottom, left to right)", "Use semantic HTML for natural tab order", "Test focus order with keyboard only", "Provide skip links for long navigation"],
      dontItems: ["Don't use positive tabindex values (tabindex=\"1\")", "Don't create confusing focus traps", "Don't hide focus indicators with CSS", "Don't rely on mouse-only interactions"],
    },
    keyboardSection: {
      title: "Keyboard Interaction Expectations",
      description: "Standard keyboard patterns for all interactive components",
      standardControls: "Standard Keyboard Controls",
      controls: ["Move focus forward to next interactive element", "Move focus backward to previous interactive element", "Activate buttons, links, and submit forms", "Activate buttons, toggle checkboxes, scroll page", "Navigate within components (menus, tabs, radio groups)", "Close modals, dialogs, dropdowns, and cancel operations", "Move to first item in list or beginning of text field", "Move to last item in list or end of text field"],
      patterns: [
        { component: "Modal/Dialog", actions: ["Cycles focus within modal only (focus trap)", "Closes modal and returns focus to trigger", "Activates primary action button"] },
        { component: "Dropdown Menu", actions: ["Opens dropdown menu", "Navigates through menu items", "Closes menu and returns focus", "Jumps to matching menu item"] },
        { component: "Tabs", actions: ["Moves focus to active tab, then to tab panel", "Switches between tabs", "Jumps to first/last tab"] },
        { component: "Radio Group", actions: ["Moves focus to selected radio (or first if none selected)", "Selects and moves between radio buttons", "Selects focused radio button"] },
      ],
      testingTitle: "Testing Keyboard Accessibility",
      testingDescription: "Every interactive element must be fully operable via keyboard. Test each page by:",
      testingSteps: ["Unplug your mouse or disable trackpad", "Navigate using only Tab, Shift+Tab, Enter, Space, and Arrow keys", "Verify all functionality is accessible", "Ensure focus indicators are always visible", "Check that focus never becomes trapped unintentionally"],
    },
    screenReaderSection: {
      title: "Screen Reader Considerations",
      description: "Ensuring content is accessible to assistive technology users",
      ariaTitle: "Essential ARIA Attributes",
      aria: ["Provides accessible name when visible text isn't suitable", "References element(s) that label the current element", "References element(s) that describe the current element", "Announces dynamic content changes (polite, assertive, off)", "Indicates current item in navigation", "Indicates if element is expanded or collapsed", "Hides decorative content from screen readers"],
      visuallyHiddenTitle: "Visually Hidden Text",
      visuallyHiddenDescription: "Use visually hidden text to provide context for screen reader users without affecting visual design.",
      exampleLabel: "Example:",
      iconOnlyButtons: "Icon-only buttons",
      alternativeTextTitle: "Alternative Text",
      goodAltText: "Good Alt Text",
      descriptiveContextual: "Descriptive and contextual",
      poorAltText: "Poor Alt Text",
      nonDescriptiveFilename: "Non-descriptive filename",
      decorativeImages: "Decorative Images",
      emptyAlt: "Empty alt for decorative images",
      testingTitle: "Testing with Screen Readers",
      nvdaDescription: "Free, open-source screen reader",
      downloadNvda: "Download NVDA →",
      voiceOverDescription: "Built into Apple devices",
      voiceOverToggle: "Cmd + F5 to toggle",
      jawsDescription: "Industry-standard screen reader",
      downloadJaws: "Download JAWS →",
    },
    semanticSection: {
      title: "Semantic Structure Guidance",
      description: "Using HTML elements correctly for meaning and accessibility",
      headingHierarchy: "Heading Hierarchy",
      headingNotes: ["One per page", "Main sections", "Nested under h2"],
      neverSkipHeadingLevels: "Never skip heading levels",
      neverSkipDescription: "h1 → h3 is incorrect. Always use sequential order.",
      landmarkRegions: "Landmark Regions",
      landmarks: ["Site/page header with logo and navigation", "Navigation menu or links", "Primary content (one per page)", "Complementary content or sidebar", "Site/page footer", "Thematic grouping of content", "Self-contained content"],
      semanticHtmlPatterns: "Semantic HTML Patterns",
      semanticExamples: ["Use semantic button element for interactive actions", "Use anchor tags for navigation, buttons for actions", "Use semantic list elements for lists of items"],
    },
    formSection: {
      title: "Form Accessibility",
      description: "Making forms accessible and easy to complete",
      checklistTitle: "Form Accessibility Checklist",
      groups: [
        { title: "Label Association", items: ["Every input has an associated label", "Labels use htmlFor/id or wrap the input", "Labels are always visible (not placeholder-only)", "Labels clearly describe the input's purpose"] },
        { title: "Required Fields", items: ["Required fields marked with * or 'Required'", "aria-required='true' on required inputs", "Clear indication at form start about required fields", "Validation triggers on form submit, not during typing"] },
        { title: "Helper Text", items: ["Complex fields have helper text explaining format", "Helper text associated with aria-describedby", "Character limits announced to screen readers", "Examples provided for unclear field types"] },
        { title: "Input Types", items: ["Appropriate input type for content (email, tel, number)", "Correct keyboard shown on mobile devices", "Date pickers are keyboard accessible", "Custom controls have proper ARIA roles"] },
      ],
      exampleTitle: "Accessible Form Example",
      fullName: "Full Name",
      emailAddress: "Email Address",
      emailHint: "We'll never share your email with anyone else.",
      preferredContact: "Preferred Contact Method",
      email: "Email",
      phone: "Phone",
      keyPointsTitle: "Key Points",
      keyPoints: ["Label associated with input via matching ids", "Programmatically indicates required field", "Associates helper text with input", "Groups related radio buttons semantically", "Correct type (email, tel) for better UX", "Clear ring on focus for keyboard users"],
    },
    errorSection: {
      title: "Error Handling Accessibility",
      description: "Communicating errors clearly to all users",
      requirementsTitle: "Error Message Requirements",
      requirements: ["Clearly identify which field has an error", "Explain what went wrong in plain language", "Provide guidance on how to fix the error", "Show errors inline near the related field", "Use aria-invalid='true' on error fields", "Associate error message with aria-describedby", "Use aria-live for dynamic error announcements", "Don't rely on color alone to indicate errors"],
      exampleTitle: "Example: Error State",
      emailAddress: "Email Address",
      emailError: "Please enter a valid email address (e.g., name@example.com)",
      implementation: "Implementation",
      summaryTitle: "Error Summary Pattern",
      summaryHeading: "There are 2 errors in this form",
      summaryLinks: ["Email Address: Please enter a valid email address", "Phone Number: Phone number must be 10 digits"],
      bestPracticesTitle: "Error Summary Best Practices",
      bestPractices: ["Show error summary at top of form after submission", "Move focus to error summary or first error field", "Provide links to jump to each error field", "Use role=\"alert\" or aria-live=\"assertive\" for announcement"],
    },
    tableSection: {
      title: "Table Accessibility",
      description: "Making data tables accessible and navigable",
      exampleTitle: "Accessible Table Example",
      caption: "Application Status for January 2024",
      columns: ["Application ID", "Applicant Name", "Status", "Date"],
      approved: "Approved",
      pending: "Pending",
      requirementsTitle: "Table Requirements",
      requirements: ["Describes table purpose", "Groups header and body rows", "Identifies column headers", "Identifies row headers", "Avoid merged cells when possible"],
      simpleStructureHead: "Simple structure:",
      responsiveTitle: "Responsive Tables",
      responsiveDescription: "On mobile viewports, complex tables should transform into a more accessible format:",
      responsiveItems: ["Convert to card view with labeled data", "Allow horizontal scrolling with visible scroll hint", "Stack columns vertically for narrow screens", "Provide alternative data views (list, grid)"],
    },
    modalSection: {
      title: "Modal & Dialog Accessibility",
      description: "Managing focus and interaction in modal overlays",
      requirementsTitle: "Modal Accessibility Requirements",
      groups: [
        { title: "Focus Management", items: ["Move focus to modal when opened", "Trap focus within modal (Tab cycles inside)", "Return focus to trigger element when closed", "First focusable element should be close button or primary action"] },
        { title: "Keyboard Support", items: ["Esc key closes the modal", "Tab/Shift+Tab navigates within modal only", "Enter activates focused button", "Prevent background scroll while open"] },
        { title: "ARIA Attributes", items: ['role="dialog" or role="alertdialog"', 'aria-modal="true" to indicate modal state', 'aria-labelledby pointing to modal title', 'aria-describedby for modal description (optional)'] },
        { title: "Screen Reader Support", items: ["Background content hidden with aria-hidden", "Modal title announced when opened", "Clear indication of modal purpose", "Closing action clearly labeled"] },
      ],
    },
    statusSection: {
      title: "Status Communication",
      description: "Announcing dynamic changes to assistive technology users",
      liveRegionsTitle: "ARIA Live Regions",
      liveRegions: [
        'Announces changes when user is idle. Use for non-critical updates like form validations or status messages.',
        'Interrupts current announcement. Use sparingly for critical errors or time-sensitive alerts.',
        'Equivalent to aria-live="polite". Use for status updates and feedback messages.',
        'Equivalent to aria-live="assertive". Use for critical error messages requiring immediate attention.',
      ],
      formSubmissionTitle: "Example: Form Submission",
      submitApplication: "Submit Application",
      applicationSubmitted: "Application submitted successfully",
      criticalErrorTitle: "Example: Critical Error",
      sessionExpired: "Session expired. Please log in again.",
    },
    limitationsSection: {
      title: "Known Limitations Pattern",
      description: "Transparently documenting accessibility constraints",
      transparencyTitle: "Transparency in Accessibility",
      transparencyDescription: "The UX4G Design System maintains transparency about any known accessibility limitations. This allows teams to make informed decisions and plan for workarounds or future improvements.",
      columns: ["Component", "Known Limitation", "Workaround", "Status"],
      rows: [
        { limitation: "Calendar grid may be difficult to navigate with screen reader", workaround: "Provide manual text input alternative", status: "In Progress" },
        { limitation: "Complex toolbar navigation requires extensive keyboard patterns", workaround: "Use native textarea for accessibility-critical forms", status: "Documented" },
        { limitation: "Complex charts may not convey full information to screen reader users", workaround: "Provide data table alternative and text description", status: "Resolved" },
      ],
      reportingTitle: "Reporting Accessibility Issues",
      reportingDescription: "If you discover an accessibility issue not listed above, please report it to the UX4G team:",
      reportingLabels: ["Email:", "Issue Tracker:", "Required Information:"],
      requiredInformation: "Component name, assistive technology used, steps to reproduce",
    },
    reviewSection: {
      title: "Accessibility Review Checklist",
      description: "Comprehensive checklist for accessibility compliance",
      preLaunchTitle: "Pre-Launch Accessibility Checklist",
      categories: [
        { category: "Perceivable", items: ["All images have meaningful alt text", "Color contrast meets WCAG AA (4.5:1 for text, 3:1 for UI)", "Content doesn't rely on color alone", "Text can be resized to 200% without loss of content", "Videos have captions and transcripts"] },
        { category: "Operable", items: ["All functionality available via keyboard", "No keyboard traps present", "Focus indicators are clearly visible", "Skip links provided for main content", "No time limits or they can be extended"] },
        { category: "Understandable", items: ["Language of page declared in HTML", "Navigation is consistent across pages", "Labels and instructions provided for inputs", "Error messages are clear and helpful", "Forms can be reviewed before submission"] },
        { category: "Robust", items: ["Valid HTML markup (no errors)", "ARIA attributes used correctly", "Semantic HTML elements used appropriately", "Tested with screen readers (NVDA, JAWS, VoiceOver)", "No console errors in browser"] },
        { category: "Forms", items: ["All inputs have associated labels", "Required fields are clearly marked", "Error messages are associated with inputs", "Fieldsets and legends used for radio/checkbox groups", "Tab order is logical and predictable"] },
        { category: "Navigation", items: ["Heading hierarchy is correct (h1-h6)", "Landmark regions properly defined", "Breadcrumbs present where appropriate", "Current page indicated in navigation", "Links have meaningful text (no 'click here')"] },
        { category: "Interactive Elements", items: ["Buttons use <button> element", "Links use <a> element for navigation", "Tooltips accessible on keyboard focus", "Modals trap focus and close with Esc", "Accordions/tabs have proper ARIA"] },
        { category: "Testing", items: ["Tested with keyboard only (no mouse)", "Tested with screen reader", "Automated testing passed (axe, Lighthouse)", "Manual accessibility audit completed", "Tested with browser zoom at 200%"] },
      ],
      continuousTitle: "Continuous Accessibility",
      continuousDescription: "Accessibility is not a one-time checklist. It requires ongoing attention:",
      continuousItems: ["Include accessibility testing in every sprint/release cycle", "Run automated accessibility tests in CI/CD pipeline", "Conduct quarterly accessibility audits", "Gather feedback from users with disabilities", "Stay updated with WCAG guidelines and best practices"],
    },
    common: { pass: "Pass", fail: "Fail", correct: "Correct", incorrect: "Incorrect" },
  },
  hi: {
    hero: {
      eyebrow: "UX4G Design System",
      title: "सुगम्यता",
      description:
        "UX4G Design System में accessibility मूलभूत है। हर component, pattern और guideline को WCAG 2.1 Level AA मानकों के अनुरूप डिज़ाइन किया गया है, ताकि सरकारी डिजिटल सेवाएं भारत के सभी नागरिकों के लिए सुलभ हों।",
      pills: { wcag: "WCAG 2.1 Level AA compliant", builtIn: "डिफ़ॉल्ट रूप से built-in", tested: "कठोर रूप से tested" },
    },
    principlesSection: {
      title: "Accessibility Principles",
      description: "UX4G में accessibility implementation को दिशा देने वाले मुख्य सिद्धांत",
      cards: {
        perceivable: { title: "Perceivable", description: "जानकारी और user interface components ऐसे रूप में प्रस्तुत होने चाहिए जिन्हें उपयोगकर्ता समझ और ग्रहण कर सकें।", items: ["Text और interactive elements के लिए पर्याप्त color contrast", "Non-text content के लिए text alternatives", "Multimedia के लिए captions और alternatives", "जानकारी खोए बिना अनुकूलित किया जा सकने वाला content"] },
        operable: { title: "Operable", description: "User interface components और navigation सभी उपयोगकर्ताओं द्वारा संचालित किए जा सकें।", items: ["सारी functionality keyboard से उपलब्ध हो", "उपयोगकर्ताओं को पढ़ने और interact करने के लिए पर्याप्त समय मिले", "Navigation mechanisms स्पष्ट और सुसंगत हों", "ऐसा कोई content न हो जो seizures का कारण बने"] },
        understandable: { title: "Understandable", description: "जानकारी और user interface का संचालन समझने योग्य होना चाहिए।", items: ["Text content पठनीय और समझने योग्य हो", "Pages पूर्वानुमेय तरीके से दिखें और काम करें", "उपयोगकर्ताओं को गलतियों से बचने और सुधारने में मदद मिले", "स्पष्ट error messages और recovery paths"] },
        robust: { title: "Robust", description: "Content इतना robust होना चाहिए कि assistive technologies उसे सही तरह से समझ सकें।", items: ["Valid semantic HTML markup", "जहाँ आवश्यक हो वहाँ सही ARIA attributes", "वर्तमान और भविष्य की assistive technologies के साथ compatibility", "Progressive enhancement approach"] },
      },
      law: {
        title: "Rights of Persons with Disabilities Act, 2016",
        description:
          "UX4G Design System, भारत के Rights of Persons with Disabilities Act, 2016 के अनुरूप है, जो यह अनिवार्य करता है कि सभी सरकारी डिजिटल सेवाएं सुलभ हों। Compliance वैकल्पिक नहीं है; यह कानूनी आवश्यकता और नैतिक दायित्व दोनों है।",
      },
    },
    colorContrastSection: {
      title: "Color Contrast Guidance",
      description: "सभी text और interactive elements के लिए पर्याप्त contrast ratios सुनिश्चित करना",
      requirementsTitle: "WCAG Contrast Requirements",
      normalTextRequirement: "18px से छोटे text या 14px bold text के लिए",
      largeTextRequirement: "18px+ या 14px+ bold text के लिए",
      uiRequirement: "Interactive elements और graphics के लिए",
      colorBlindnessTitle: "Color Blindness Considerations",
      deuteranopia: "Red-green color blindness (सबसे सामान्य)",
      protanopia: "Red color blindness",
      tritanopia: "Blue-yellow color blindness",
      mayAppearSimilar: "समान दिख सकते हैं",
      redAppearsMuted: "Red muted दिख सकता है",
      designGuidelines: "Design Guidelines",
      guidelineHeads: { colorAlone: "केवल रंग पर निर्भर न रहें", highContrast: "High contrast का उपयोग करें", supplementColor: "रंग को supplement करें", testDesigns: "Designs की जांच करें" },
      guidelines: ["जानकारी देने के लिए—text, icons या patterns का उपयोग करें", "foreground और background colors के बीच", "status indicators के लिए text labels, icons या patterns के साथ", "design phase के दौरान color blindness simulators का उपयोग करके"],
      testingContrast: "Contrast testing",
      recommendedTools: "Recommended Tools",
      testingProcess: "Testing Process",
      toolDescriptions: { webaim: "color combinations की जांच के लिए online tool", devtools: "Chrome/Edge में built-in accessibility audits", figma: "A11y - Color Contrast Checker, Stark", automated: "axe DevTools, Lighthouse CI" },
      process: ["हर text को उसके background color के विरुद्ध जांचें", "Interactive element contrast (borders, focus states) की पुष्टि करें", "Graphic elements और iconography की जांच करें", "Grayscale में टेस्ट करें ताकि जानकारी न खोए"],
    },
    focusSection: {
      title: "Focus Visibility Rules",
      description: "Keyboard navigation के लिए स्पष्ट और सुसंगत focus indicators",
      requirementsTitle: "Focus Indicator Requirements",
      minimumRequirements: "Minimum Requirements (WCAG 2.4.7)",
      minimumItems: ["Focus indicator होना चाहिए", "न्यूनतम", "यह मौजूद होना चाहिए", "इसे CSS से हटाया नहीं जाना चाहिए"],
      minimumStrong: ["स्पष्ट रूप से दिखाई देने वाला", "3:1 contrast", "सभी interactive elements पर"],
      minimumTail: ["", "adjacent colors के साथ", ""],
      standardTitle: "UX4G Focus Standard",
      standardLabels: { ringWidth: "Ring width:", ringColor: "Ring color:", ringOffset: "Ring offset:", borderRadius: "Border radius:", matchesElement: "Element के अनुरूप" },
      examples: { buttonFocus: "Button Focus", focusedButton: "Focused Button", inputFocus: "Input Focus", focusedInput: "Focused input field", linkFocus: "Link Focus", focusedLink: "Focused Link", checkboxFocus: "Checkbox Focus", focusedCheckbox: "Focused checkbox" },
      focusOrderTitle: "Focus Order",
      order: [
        { element: "Logo/Header", desc: "ऊपरी-बाएँ navigation elements" },
        { element: "Main Navigation", desc: "Primary navigation menu" },
        { element: "Skip Link", desc: "मुख्य content पर जाने की सुविधा" },
        { element: "Main Content", desc: "Primary page content, बाएँ से दाएँ, ऊपर से नीचे" },
        { element: "Sidebar", desc: "Secondary navigation या filters" },
        { element: "Footer Links", desc: "Footer navigation और information" },
      ],
      doLabel: "क्या करें",
      dontLabel: "क्या न करें",
      doItems: ["Natural reading order का पालन करें (ऊपर से नीचे, बाएँ से दाएँ)", "Natural tab order के लिए semantic HTML का उपयोग करें", "Keyboard-only से focus order टेस्ट करें", "लंबी navigation के लिए skip links दें"],
      dontItems: ['Positive tabindex values का उपयोग न करें (tabindex="1")', "Confusing focus traps न बनाएं", "CSS से focus indicators न छिपाएं", "Mouse-only interactions पर निर्भर न रहें"],
    },
    keyboardSection: {
      title: "Keyboard Interaction Expectations",
      description: "सभी interactive components के लिए standard keyboard patterns",
      standardControls: "Standard Keyboard Controls",
      controls: ["Focus को अगले interactive element तक ले जाएँ", "Focus को पिछले interactive element तक वापस ले जाएँ", "Buttons, links और forms को activate करें", "Buttons activate करें, checkboxes toggle करें, page scroll करें", "Components के भीतर navigate करें (menus, tabs, radio groups)", "Modals, dialogs, dropdowns बंद करें और operations cancel करें", "List की पहली item या text field की शुरुआत में जाएँ", "List की अंतिम item या text field के अंत में जाएँ"],
      patterns: [
        { component: "Modal/Dialog", actions: ["Modal के भीतर ही focus cycle करें (focus trap)", "Modal बंद करें और focus को trigger पर लौटाएँ", "Primary action button को activate करें"] },
        { component: "Dropdown Menu", actions: ["Dropdown menu खोलें", "Menu items में navigate करें", "Menu बंद करें और focus लौटाएँ", "Matching menu item पर जाएँ"] },
        { component: "Tabs", actions: ["Active tab पर focus ले जाएँ, फिर tab panel पर", "Tabs के बीच switch करें", "पहले/अंतिम tab पर जाएँ"] },
        { component: "Radio Group", actions: ["Selected radio पर focus ले जाएँ (या यदि कोई selected नहीं है तो पहले पर)", "Radio buttons के बीच select और move करें", "Focused radio button select करें"] },
      ],
      testingTitle: "Testing Keyboard Accessibility",
      testingDescription: "हर interactive element keyboard के माध्यम से पूरी तरह operable होना चाहिए। हर page को इस तरह टेस्ट करें:",
      testingSteps: ["अपना mouse unplug करें या trackpad disable करें", "केवल Tab, Shift+Tab, Enter, Space और Arrow keys का उपयोग करके navigate करें", "सुनिश्चित करें कि सारी functionality accessible है", "ध्यान दें कि focus indicators हमेशा दिखाई दें", "जांचें कि focus अनजाने में trap न हो"],
    },
    screenReaderSection: {
      title: "Screen Reader Considerations",
      description: "Assistive technology users के लिए content को accessible बनाना",
      ariaTitle: "Essential ARIA Attributes",
      aria: ["जब visible text उपयुक्त न हो तब accessible name प्रदान करता है", "वर्तमान element को label करने वाले element(s) का reference देता है", "वर्तमान element का वर्णन करने वाले element(s) का reference देता है", "Dynamic content changes की घोषणा करता है (polite, assertive, off)", "Navigation में current item को दर्शाता है", "Element expanded है या collapsed, यह बताता है", "Decorative content को screen readers से छिपाता है"],
      visuallyHiddenTitle: "Visually Hidden Text",
      visuallyHiddenDescription: "Visual design को प्रभावित किए बिना screen reader users को context देने के लिए visually hidden text का उपयोग करें।",
      exampleLabel: "उदाहरण:",
      iconOnlyButtons: "Icon-only buttons",
      alternativeTextTitle: "Alternative Text",
      goodAltText: "अच्छा Alt Text",
      descriptiveContextual: "वर्णनात्मक और प्रसंगानुसार",
      poorAltText: "कमज़ोर Alt Text",
      nonDescriptiveFilename: "गैर-वर्णनात्मक फ़ाइल नाम",
      decorativeImages: "Decorative Images",
      emptyAlt: "Decorative images के लिए खाली alt",
      testingTitle: "Screen Readers के साथ testing",
      nvdaDescription: "Free, open-source screen reader",
      downloadNvda: "NVDA डाउनलोड करें →",
      voiceOverDescription: "Apple devices में built-in",
      voiceOverToggle: "टॉगल करने के लिए Cmd + F5",
      jawsDescription: "Industry-standard screen reader",
      downloadJaws: "JAWS डाउनलोड करें →",
    },
    semanticSection: {
      title: "Semantic Structure Guidance",
      description: "Meaning और accessibility के लिए HTML elements का सही उपयोग",
      headingHierarchy: "Heading Hierarchy",
      headingNotes: ["प्रति पृष्ठ एक", "मुख्य sections", "h2 के अंतर्गत nested"],
      neverSkipHeadingLevels: "Heading levels कभी न छोड़ें",
      neverSkipDescription: "h1 → h3 गलत है। हमेशा sequential order का उपयोग करें।",
      landmarkRegions: "Landmark Regions",
      landmarks: ["Logo और navigation वाला site/page header", "Navigation menu या links", "Primary content (प्रति पृष्ठ एक)", "Complementary content या sidebar", "Site/page footer", "Content का thematic grouping", "Self-contained content"],
      semanticHtmlPatterns: "Semantic HTML Patterns",
      semanticExamples: ["Interactive actions के लिए semantic button element का उपयोग करें", "Navigation के लिए anchor tags और actions के लिए buttons का उपयोग करें", "Items की lists के लिए semantic list elements का उपयोग करें"],
    },
    formSection: {
      title: "Form Accessibility",
      description: "Forms को accessible और पूरा करने में आसान बनाना",
      checklistTitle: "Form Accessibility Checklist",
      groups: [
        { title: "Label Association", items: ["हर input के साथ associated label हो", "Labels htmlFor/id का उपयोग करें या input को wrap करें", "Labels हमेशा दिखाई दें (सिर्फ placeholder न हों)", "Labels input के उद्देश्य को स्पष्ट रूप से बताएं"] },
        { title: "Required Fields", items: ["Required fields को * या 'Required' से चिह्नित करें", "Required inputs पर aria-required='true' हो", "Form की शुरुआत में required fields का स्पष्ट संकेत दें", "Validation typing के दौरान नहीं, form submit पर trigger हो"] },
        { title: "Helper Text", items: ["Complex fields के लिए format समझाने वाला helper text हो", "Helper text aria-describedby से जुड़ा हो", "Character limits screen readers को बताए जाएँ", "अस्पष्ट field types के लिए examples दिए जाएँ"] },
        { title: "Input Types", items: ["Content के अनुसार सही input type (email, tel, number)", "Mobile devices पर सही keyboard दिखे", "Date pickers keyboard accessible हों", "Custom controls में सही ARIA roles हों"] },
      ],
      exampleTitle: "Accessible Form Example",
      fullName: "पूरा नाम",
      emailAddress: "ईमेल पता",
      emailHint: "हम आपका ईमेल किसी और के साथ साझा नहीं करेंगे।",
      preferredContact: "Preferred Contact Method",
      email: "ईमेल",
      phone: "फ़ोन",
      keyPointsTitle: "मुख्य बिंदु",
      keyPoints: ["Matching ids के माध्यम से input से जुड़ा label", "Programmatically required field दर्शाता है", "Helper text को input से जोड़ता है", "Related radio buttons को semantically group करता है", "बेहतर UX के लिए सही type (email, tel)", "Keyboard users के लिए focus पर स्पष्ट ring"],
    },
    errorSection: {
      title: "Error Handling Accessibility",
      description: "सभी उपयोगकर्ताओं तक errors को स्पष्ट रूप से पहुँचाना",
      requirementsTitle: "Error Message Requirements",
      requirements: ["स्पष्ट रूप से बताएं कि किस field में error है", "साधारण भाषा में बताएं कि समस्या क्या हुई", "Error ठीक करने के लिए मार्गदर्शन दें", "संबंधित field के पास inline errors दिखाएं", "Error fields पर aria-invalid='true' का उपयोग करें", "Error message को aria-describedby से जोड़ें", "Dynamic error announcements के लिए aria-live का उपयोग करें", "Errors दिखाने के लिए केवल रंग पर निर्भर न रहें"],
      exampleTitle: "उदाहरण: Error State",
      emailAddress: "ईमेल पता",
      emailError: "कृपया एक वैध ईमेल पता दर्ज करें (उदा., name@example.com)",
      implementation: "इम्प्लीमेंटेशन",
      summaryTitle: "Error Summary Pattern",
      summaryHeading: "इस form में 2 errors हैं",
      summaryLinks: ["Email Address: कृपया एक वैध ईमेल पता दर्ज करें", "Phone Number: फ़ोन नंबर 10 अंकों का होना चाहिए"],
      bestPracticesTitle: "Error Summary Best Practices",
      bestPractices: ["Submission के बाद form के शीर्ष पर error summary दिखाएं", "Focus को error summary या पहली error field पर ले जाएँ", "हर error field पर जाने के लिए links दें", "घोषणा के लिए role=\"alert\" या aria-live=\"assertive\" का उपयोग करें"],
    },
    tableSection: {
      title: "Table Accessibility",
      description: "Data tables को accessible और navigable बनाना",
      exampleTitle: "Accessible Table Example",
      caption: "जनवरी 2024 के लिए Application Status",
      columns: ["Application ID", "Applicant Name", "Status", "Date"],
      approved: "Approved",
      pending: "Pending",
      requirementsTitle: "Table Requirements",
      requirements: ["Table के उद्देश्य का वर्णन करता है", "Header और body rows को group करता है", "Column headers की पहचान करता है", "Row headers की पहचान करता है", "जहाँ संभव हो merged cells से बचें"],
      simpleStructureHead: "Simple structure:",
      responsiveTitle: "Responsive Tables",
      responsiveDescription: "Mobile viewports पर complex tables को अधिक accessible format में बदलना चाहिए:",
      responsiveItems: ["Labeled data के साथ card view में बदलें", "Visible scroll hint के साथ horizontal scrolling दें", "Narrow screens के लिए columns को vertically stack करें", "Alternative data views (list, grid) प्रदान करें"],
    },
    modalSection: {
      title: "Modal & Dialog Accessibility",
      description: "Modal overlays में focus और interaction को manage करना",
      requirementsTitle: "Modal Accessibility Requirements",
      groups: [
        { title: "Focus Management", items: ["Open होने पर focus को modal पर ले जाएँ", "Focus को modal के भीतर trap करें (Tab अंदर cycle करे)", "Close होने पर focus को trigger element पर लौटाएँ", "पहला focusable element close button या primary action होना चाहिए"] },
        { title: "Keyboard Support", items: ["Esc key modal बंद करे", "Tab/Shift+Tab केवल modal के भीतर navigate करें", "Enter focused button को activate करे", "Open होने पर background scroll रोकें"] },
        { title: "ARIA Attributes", items: ['role="dialog" या role="alertdialog"', 'Modal state बताने के लिए aria-modal="true"', 'Modal title की ओर point करता aria-labelledby', 'Modal description के लिए aria-describedby (वैकल्पिक)'] },
        { title: "Screen Reader Support", items: ["Background content aria-hidden के साथ छिपा हो", "Open होने पर modal title announce हो", "Modal purpose स्पष्ट हो", "Closing action स्पष्ट रूप से labeled हो"] },
      ],
    },
    statusSection: {
      title: "Status Communication",
      description: "Assistive technology users को dynamic changes announce करना",
      liveRegionsTitle: "ARIA Live Regions",
      liveRegions: ['जब user idle हो तब changes announce करें। Form validations या status messages जैसे non-critical updates के लिए उपयोग करें।', 'वर्तमान announcement को interrupt करता है। Critical errors या time-sensitive alerts के लिए सीमित उपयोग करें।', 'aria-live="polite" के समकक्ष। Status updates और feedback messages के लिए उपयोग करें।', 'aria-live="assertive" के समकक्ष। तुरंत ध्यान माँगने वाले critical errors के लिए उपयोग करें।'],
      formSubmissionTitle: "उदाहरण: Form Submission",
      submitApplication: "Application submit करें",
      applicationSubmitted: "Application सफलतापूर्वक submit हुई",
      criticalErrorTitle: "उदाहरण: Critical Error",
      sessionExpired: "Session समाप्त हो गई। कृपया फिर से log in करें।",
    },
    limitationsSection: {
      title: "Known Limitations Pattern",
      description: "Accessibility constraints को पारदर्शी रूप से document करना",
      transparencyTitle: "Accessibility में पारदर्शिता",
      transparencyDescription: "UX4G Design System किसी भी ज्ञात accessibility limitations के बारे में पारदर्शिता बनाए रखता है। इससे टीमें सूचित निर्णय ले सकती हैं और workarounds या future improvements की योजना बना सकती हैं।",
      columns: ["Component", "Known Limitation", "Workaround", "Status"],
      rows: [
        { limitation: "Calendar grid को screen reader के साथ navigate करना कठिन हो सकता है", workaround: "Manual text input alternative प्रदान करें", status: "प्रगति में" },
        { limitation: "Complex toolbar navigation के लिए विस्तृत keyboard patterns चाहिए", workaround: "Accessibility-critical forms के लिए native textarea का उपयोग करें", status: "दस्तावेजीकृत" },
        { limitation: "Complex charts screen reader users तक पूरी जानकारी न पहुँचा सकें", workaround: "Data table alternative और text description दें", status: "सुलझाया गया" },
      ],
      reportingTitle: "Accessibility Issues रिपोर्ट करना",
      reportingDescription: "यदि आपको ऊपर सूचीबद्ध न की गई कोई accessibility issue मिलती है, तो कृपया UX4G team को रिपोर्ट करें:",
      reportingLabels: ["Email:", "Issue Tracker:", "Required Information:"],
      requiredInformation: "Component name, उपयोग की गई assistive technology, reproduce करने के steps",
    },
    reviewSection: {
      title: "Accessibility Review Checklist",
      description: "Accessibility compliance के लिए comprehensive checklist",
      preLaunchTitle: "Pre-Launch Accessibility Checklist",
      categories: [
        { category: "Perceivable", items: ["सभी images में meaningful alt text हो", "Color contrast WCAG AA को पूरा करता हो (text के लिए 4.5:1, UI के लिए 3:1)", "Content केवल रंग पर निर्भर न हो", "Text को 200% तक resize करने पर content न खोए", "Videos में captions और transcripts हों"] },
        { category: "Operable", items: ["सारी functionality keyboard से उपलब्ध हो", "कोई keyboard traps न हों", "Focus indicators स्पष्ट रूप से दिखाई दें", "Main content के लिए skip links दिए गए हों", "Time limits न हों या बढ़ाए जा सकें"] },
        { category: "Understandable", items: ["Page की language HTML में घोषित हो", "Pages में navigation सुसंगत हो", "Inputs के लिए labels और instructions दिए गए हों", "Error messages स्पष्ट और सहायक हों", "Submission से पहले forms की समीक्षा की जा सके"] },
        { category: "Robust", items: ["Valid HTML markup (कोई errors नहीं)", "ARIA attributes सही उपयोग हुए हों", "Semantic HTML elements उचित रूप से उपयोग हुए हों", "Screen readers (NVDA, JAWS, VoiceOver) के साथ test किया गया हो", "Browser में कोई console errors न हों"] },
        { category: "Forms", items: ["सभी inputs के associated labels हों", "Required fields स्पष्ट रूप से चिह्नित हों", "Error messages inputs से जुड़े हों", "Radio/checkbox groups के लिए fieldsets और legends उपयोग हों", "Tab order logical और predictable हो"] },
        { category: "Navigation", items: ["Heading hierarchy सही हो (h1-h6)", "Landmark regions सही तरह से defined हों", "जहाँ उचित हो वहाँ breadcrumbs हों", "Navigation में current page दर्शाई गई हो", "Links का text meaningful हो ('click here' नहीं)"] },
        { category: "Interactive Elements", items: ["Buttons में <button> element का उपयोग हो", "Navigation के लिए links में <a> element का उपयोग हो", "Keyboard focus पर tooltips accessible हों", "Modals focus trap करें और Esc से बंद हों", "Accordions/tabs में proper ARIA हो"] },
        { category: "Testing", items: ["Keyboard only (बिना mouse) के साथ test किया गया हो", "Screen reader के साथ test किया गया हो", "Automated testing passed (axe, Lighthouse)", "Manual accessibility audit पूरी हुई हो", "Browser zoom 200% पर test किया गया हो"] },
      ],
      continuousTitle: "Continuous Accessibility",
      continuousDescription: "Accessibility एक बार की checklist नहीं है। इसके लिए निरंतर ध्यान आवश्यक है:",
      continuousItems: ["हर sprint/release cycle में accessibility testing शामिल करें", "CI/CD pipeline में automated accessibility tests चलाएँ", "Quarterly accessibility audits करें", "Disabilities वाले users से feedback लें", "WCAG guidelines और best practices के साथ updated रहें"],
    },
    common: { pass: "Pass", fail: "Fail", correct: "Correct", incorrect: "Incorrect" },
  },
} as const;

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
  const common = useAccessibilityCopy().common;
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
                {example.pass ? common.pass : common.fail}
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
  const common = useAccessibilityCopy().common;
  return (
    <div className="p-6 hover:bg-background">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-3">
        <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded p-3">
          <div className="flex items-center gap-2 mb-2">
            <Check className="text-[#138808]" size={16} />
            <span className="font-semibold text-sm">{common.correct}</span>
          </div>
          <code className="text-xs font-mono text-foreground block">{correct}</code>
        </div>
        <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded p-3">
          <div className="flex items-center gap-2 mb-2">
            <X className="text-red-600" size={16} />
            <span className="font-semibold text-sm">{common.incorrect}</span>
          </div>
          <code className="text-xs font-mono text-foreground block">{incorrect}</code>
        </div>
      </div>
      <p className="text-sm text-muted-foreground">{reason}</p>
    </div>
  );
}
