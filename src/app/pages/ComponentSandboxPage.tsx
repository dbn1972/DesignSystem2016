import { ArrowRight, Code2, LayoutPanelLeft, Sparkles } from "lucide-react";
import { Link, useSearchParams } from "react-router";

import { CodeSandbox } from "../components/CodeSandbox";

const SANDBOX_PRESETS = [
  {
    id: "button-actions",
    label: "Primary actions",
    description: "A compact action cluster using Button and Badge.",
    note: "Edit the JSX directly. Define a function named Example and return any supported UX4G components.",
    code: `function Example() {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-3">
        <Button variant="primary">Apply now</Button>
        <Button variant="secondary">Save draft</Button>
        <Badge variant="success">Ready</Badge>
      </div>
      <p className="text-sm text-slate-600">
        Use primary for the main service action and secondary for reversible or supporting actions.
      </p>
    </div>
  );
}`,
  },
  {
    id: "field-pattern",
    label: "Field composition",
    description: "A safer default form field using Field, Input, HintText, and Checkbox.",
    note: "This example matches the safer Field composition pattern already used in the design system.",
    code: `function Example() {
  return (
    <div className="max-w-md space-y-5">
      <Field id="email" label="Government email" required>
        <Input type="email" placeholder="name@gov.in" />
        <HintText>Use the email address tied to your service account.</HintText>
      </Field>

      <Checkbox label="Send status updates to this email" />

      <div className="flex gap-3">
        <Button variant="primary">Continue</Button>
        <Button variant="tertiary">Cancel</Button>
      </div>
    </div>
  );
}`,
  },
  {
    id: "status-surface",
    label: "Status surface",
    description: "A simple service status card using Card, Alert, and Button.",
    note: "Good for dashboards, review steps, and citizen-facing tracking surfaces.",
    code: `function Example() {
  return (
    <Card className="max-w-lg space-y-4 p-5">
      <div className="space-y-1">
        <p className="text-sm font-medium text-slate-500">Application status</p>
        <h3 className="text-xl font-semibold text-slate-900">Pending review</h3>
      </div>

      <Alert
        variant="info"
        title="Documents received"
        description="The case is with a reviewing officer. No action is required right now."
      />

      <div className="flex gap-3">
        <Button variant="primary">Track application</Button>
        <Button variant="secondary">Download receipt</Button>
      </div>
    </Card>
  );
}`,
  },
];

const FEATURE_POINTS = [
  "Monaco editor with TypeScript + JSX support",
  "Live UX4G preview with safe error handling",
  "Responsive viewport switching for component states",
  "Preset-driven examples that teams can adapt quickly",
];

export default function ComponentSandboxPage() {
  const [searchParams] = useSearchParams();
  const requestedPreset = searchParams.get("preset") ?? undefined;

  return (
    <div className="min-h-screen bg-background">
      <section className="border-b border-border bg-[radial-gradient(circle_at_top_left,rgba(0,81,150,0.12),transparent_28%),radial-gradient(circle_at_top_right,rgba(255,153,51,0.12),transparent_32%),linear-gradient(180deg,var(--background),var(--card))]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_360px] lg:items-start">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary">
                <Code2 className="h-4 w-4" />
                Component Sandbox
              </div>
              <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Build, edit, and preview UX4G component code in one place.
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">
                This sandbox is designed for fast experimentation without leaving the
                design system. Use presets as a starting point, adapt the code in Monaco,
                and validate how the UI behaves across breakpoints and light or dark
                preview surfaces.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/components"
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-95"
                >
                  Browse components
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/documentation"
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition hover:border-primary/30 hover:text-primary"
                >
                  Read implementation guidance
                </Link>
              </div>
            </div>

            <aside className="rounded-[28px] border border-border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <Sparkles className="h-5 w-5 text-primary" />
                <h2 className="text-lg font-semibold text-foreground">
                  What this sandbox supports
                </h2>
              </div>
              <div className="mt-5 space-y-3">
                {FEATURE_POINTS.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-2xl border border-dashed border-border bg-muted/50 p-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <LayoutPanelLeft className="h-4 w-4 text-primary" />
                  First version scope
                </div>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  This version focuses on React examples and a curated set of core UX4G
                  components. The structure is designed so Angular or Web Components
                  presets can be added later without rebuilding the sandbox.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
        <CodeSandbox
          title="UX4G live sandbox"
          description="Edit real JSX examples, preview the result immediately, and use the same UX4G surfaces and controls that appear throughout the rest of the documentation."
          presets={SANDBOX_PRESETS}
          initialPresetId={requestedPreset}
        />
      </section>
    </div>
  );
}
