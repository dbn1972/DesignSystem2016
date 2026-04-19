import * as React from "react";
import { useSearchParams } from "react-router";

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
        <h3 className="text-xl font-semibold text-foreground">Pending review</h3>
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

export default function ComponentSandboxPage() {
  const [searchParams] = useSearchParams();
  const requestedPreset = searchParams.get("preset") ?? undefined;

  return (
    <div className="min-h-screen bg-background">
      {/* No hero — straight to the sandbox */}
      <div className="mx-auto max-w-[1600px] px-4 py-6 sm:px-6">
        <CodeSandbox
          title="UX4G Sandbox"
          description="Edit real JSX with UX4G components. Changes compile and render live."
          presets={SANDBOX_PRESETS}
          initialPresetId={requestedPreset}
          presetPreviews={SANDBOX_PREVIEWS}
        />
      </div>
    </div>
  );
}
