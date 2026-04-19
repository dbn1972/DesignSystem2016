import { Code2, ExternalLink, FileCode2, LayoutTemplate, MonitorSmartphone } from "lucide-react";
import * as React from "react";
import { Link, useSearchParams } from "react-router";

import { CodeSandbox } from "../components/CodeSandbox";
import {
  Alert,
  Badge,
  Button,
  Card,
  Checkbox,
  Field,
  HintText,
  Input,
} from "../react-core-package/src";

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

const SANDBOX_PREVIEWS = {
  "button-actions": (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-3">
        <Button variant="primary">Apply now</Button>
        <Button variant="secondary">Save draft</Button>
        <Badge variant="success">Ready</Badge>
      </div>
      <p className="text-sm text-muted-foreground">
        Use primary for the main service action and secondary for reversible or
        supporting actions.
      </p>
    </div>
  ),
  "field-pattern": (
    <div className="max-w-md space-y-5">
      <Field id="sandbox-email" label="Government email" required>
        <Input type="email" placeholder="name@gov.in" />
        <HintText>Use the email address tied to your service account.</HintText>
      </Field>

      <Checkbox label="Send status updates to this email" />

      <div className="flex gap-3">
        <Button variant="primary">Continue</Button>
        <Button variant="tertiary">Cancel</Button>
      </div>
    </div>
  ),
  "status-surface": (
    <Card className="max-w-lg space-y-4 p-5">
      <div className="space-y-1">
        <p className="text-sm font-medium text-muted-foreground">Application status</p>
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
  ),
} satisfies Record<string, React.ReactNode>;

const TOOL_CAPABILITIES = [
  {
    icon: FileCode2,
    title: "Preset-driven editing",
    description: "Start from component-ready React examples instead of an empty editor.",
  },
  {
    icon: MonitorSmartphone,
    title: "Responsive preview states",
    description: "Check the same example across desktop, tablet, and mobile widths.",
  },
  {
    icon: LayoutTemplate,
    title: "Docs-integrated workflow",
    description: "Open from component pages and continue editing without leaving the system.",
  },
];

export default function ComponentSandboxPage() {
  const [searchParams] = useSearchParams();
  const requestedPreset = searchParams.get("preset") ?? undefined;

  return (
    <div className="min-h-screen bg-background">
      <section className="border-b border-border bg-card/70">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5">
            <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_340px] xl:items-start">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                  <Code2 className="h-4 w-4" />
                  Component Sandbox
                </div>

                <div className="max-w-4xl space-y-3">
                  <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                    Edit and preview UX4G component code in a focused workspace.
                  </h1>
                  <p className="max-w-3xl text-base leading-7 text-muted-foreground">
                    This sandbox is a working tool, not a showcase page. Start from curated
                    presets, inspect component behavior across breakpoints, and move quickly
                    between documentation and implementation.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link
                    to="/components"
                    className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-4 py-2.5 text-sm font-medium text-foreground transition hover:border-primary/30 hover:text-primary"
                  >
                    Browse components
                  </Link>
                  <Link
                    to="/documentation"
                    className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-4 py-2.5 text-sm font-medium text-foreground transition hover:border-primary/30 hover:text-primary"
                  >
                    Implementation guidance
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <aside className="rounded-[24px] border border-border bg-background p-5 shadow-sm">
                <p className="text-sm font-semibold text-foreground">Tool capabilities</p>
                <div className="mt-4 space-y-4">
                  {TOOL_CAPABILITIES.map(({ icon: Icon, title, description }) => (
                    <div key={title} className="flex items-start gap-3">
                      <div className="mt-0.5 rounded-xl border border-border bg-card p-2 text-primary">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">{title}</p>
                        <p className="mt-1 text-sm leading-6 text-muted-foreground">
                          {description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <CodeSandbox
          title="UX4G live sandbox"
          description="Use curated presets, edit real JSX, and validate the result in a controlled preview surface."
          presets={SANDBOX_PRESETS}
          initialPresetId={requestedPreset}
          presetPreviews={SANDBOX_PREVIEWS}
        />
      </section>
    </div>
  );
}
