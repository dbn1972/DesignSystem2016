/**
 * ComponentPlayground — Shared interactive playground for UX4G component docs
 *
 * Schema-driven controls, live preview, generated code, copy, reset, viewport
 * toggle, and theme-aware rendering. Designed to replace the 77 one-off
 * playground functions across component documentation pages.
 */

import React, { useState, useCallback, useMemo, useId, useRef } from 'react';
import {
  Copy,
  Check,
  RotateCcw,
  Monitor,
  Tablet,
  Smartphone,
  Sun,
  Moon,
  ExternalLink,
} from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  Public types                                                       */
/* ------------------------------------------------------------------ */

/** A single control in the playground panel. */
export interface PlaygroundControl {
  /** Prop name — must match the key used in `renderPreview` and `codeTemplate`. */
  name: string;
  /** Human-readable label shown next to the control. */
  label: string;
  /** Control type. */
  type: 'select' | 'boolean' | 'text' | 'number' | 'radio' | 'textarea';
  /** Default value (also the reset target). */
  defaultValue: string | number | boolean;
  /** Options for `select` and `radio` controls. */
  options?: string[];
  /** Minimum value for `number` controls. */
  min?: number;
  /** Maximum value for `number` controls. */
  max?: number;
  /** Step for `number` controls. */
  step?: number;
  /** Group label — controls with the same group render under a shared heading. */
  group?: string;
}

export interface ComponentPlaygroundProps {
  /** Component name shown in the header. */
  name: string;
  /** Schema-driven controls. */
  controls: PlaygroundControl[];
  /**
   * Render the live preview given the current control values.
   * Receives a plain object keyed by control `name`.
   */
  renderPreview: (values: Record<string, any>) => React.ReactNode;
  /**
   * Generate a JSX code string from the current control values.
   * Receives the same object as `renderPreview`.
   */
  codeTemplate: (values: Record<string, any>) => string;
  /** Minimum height of the preview area. @default 200 */
  previewMinHeight?: number;
}

/* ------------------------------------------------------------------ */
/*  Viewport presets                                                    */
/* ------------------------------------------------------------------ */

type Viewport = 'desktop' | 'tablet' | 'mobile';

const VIEWPORT_WIDTHS: Record<Viewport, string> = {
  desktop: '100%',
  tablet: '768px',
  mobile: '375px',
};

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function buildDefaults(controls: PlaygroundControl[]): Record<string, any> {
  const out: Record<string, any> = {};
  for (const c of controls) out[c.name] = c.defaultValue;
  return out;
}

/** Open the generated code in StackBlitz via their POST API. */
function openInStackBlitz(componentName: string, code: string) {
  const appCode = `import React from 'react';
import { createRoot } from 'react-dom/client';

// UX4G Component Preview
// In production, import from '@ux4g/react-core'
// import { ${componentName} } from '@ux4g/react-core';

function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <h2 style={{ marginBottom: '1rem' }}>${componentName} Preview</h2>
      ${code}
    </div>
  );
}

createRoot(document.getElementById('root')!).render(<App />);
`;

  const html = `<!DOCTYPE html>
<html>
<head><title>${componentName} — UX4G</title></head>
<body><div id="root"></div></body>
</html>`;

  const form = document.createElement('form');
  form.method = 'POST';
  form.action = 'https://stackblitz.com/run';
  form.target = '_blank';

  const files: Record<string, string> = {
    'src/main.tsx': appCode,
    'index.html': html,
    'package.json': JSON.stringify({
      name: `ux4g-${componentName.toLowerCase()}-playground`,
      private: true,
      scripts: { dev: 'vite', build: 'vite build' },
      dependencies: { react: '^18.3.0', 'react-dom': '^18.3.0' },
      devDependencies: { '@types/react': '^18.3.0', '@types/react-dom': '^18.3.0', typescript: '^5.5.0', vite: '^6.0.0', '@vitejs/plugin-react': '^4.3.0' },
    }, null, 2),
    'vite.config.ts': `import { defineConfig } from 'vite';\nimport react from '@vitejs/plugin-react';\nexport default defineConfig({ plugins: [react()] });`,
    'tsconfig.json': JSON.stringify({ compilerOptions: { target: 'ES2020', module: 'ESNext', moduleResolution: 'bundler', jsx: 'react-jsx', strict: true }, include: ['src'] }, null, 2),
  };

  Object.entries(files).forEach(([path, content]) => {
    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = `project[files][${path}]`;
    input.value = content;
    form.appendChild(input);
  });

  const titleInput = document.createElement('input');
  titleInput.type = 'hidden';
  titleInput.name = 'project[title]';
  titleInput.value = `UX4G ${componentName} Playground`;
  form.appendChild(titleInput);

  const templateInput = document.createElement('input');
  templateInput.type = 'hidden';
  templateInput.name = 'project[template]';
  templateInput.value = 'node';
  form.appendChild(templateInput);

  document.body.appendChild(form);
  form.submit();
  document.body.removeChild(form);
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function ComponentPlayground({
  name,
  controls,
  renderPreview,
  codeTemplate,
  previewMinHeight = 200,
}: ComponentPlaygroundProps) {
  const uid = useId();
  const defaults = useMemo(() => buildDefaults(controls), [controls]);
  const [values, setValues] = useState<Record<string, any>>(defaults);
  const [copied, setCopied] = useState(false);
  const [viewport, setViewport] = useState<Viewport>('desktop');
  const [previewDark, setPreviewDark] = useState(false);

  /* ---- value helpers ---- */
  const set = useCallback(
    (key: string, val: any) => setValues((prev) => ({ ...prev, [key]: val })),
    [],
  );
  const reset = useCallback(() => setValues(defaults), [defaults]);
  const isDefault = useMemo(
    () => JSON.stringify(values) === JSON.stringify(defaults),
    [values, defaults],
  );

  /* ---- code generation ---- */
  const code = useMemo(() => codeTemplate(values), [codeTemplate, values]);

  const copyCode = useCallback(() => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [code]);

  /* ---- group controls ---- */
  const grouped = useMemo(() => {
    const map = new Map<string, PlaygroundControl[]>();
    for (const c of controls) {
      const g = c.group ?? '';
      if (!map.has(g)) map.set(g, []);
      map.get(g)!.push(c);
    }
    return map;
  }, [controls]);

  /* ---- render ---- */
  return (
    <section
      className="bg-card rounded-xl border border-border overflow-hidden shadow-sm"
      aria-label={`${name} interactive playground`}
    >
      {/* ── Header bar ── */}
      <div className="flex items-center justify-between gap-3 px-5 py-3 border-b border-border bg-gradient-to-r from-muted/30 to-transparent">
        <div className="flex items-center gap-2">
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
            Playground
          </h2>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400 uppercase tracking-wider">
            Interactive
          </span>
        </div>

        {/* Toolbar */}
        <div className="flex items-center gap-1">
          {/* Viewport toggles */}
          {([
            ['desktop', Monitor],
            ['tablet', Tablet],
            ['mobile', Smartphone],
          ] as [Viewport, typeof Monitor][]).map(([vp, Icon]) => (
            <button
              key={vp}
              onClick={() => setViewport(vp)}
              aria-label={`${vp} preview`}
              aria-pressed={viewport === vp}
              className={`p-1.5 rounded-md transition-colors ${
                viewport === vp
                  ? 'bg-primary/10 text-primary'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/60'
              }`}
            >
              <Icon size={15} />
            </button>
          ))}

          <span className="w-px h-5 bg-border mx-1" aria-hidden />

          {/* Preview theme toggle */}
          <button
            onClick={() => setPreviewDark((d) => !d)}
            aria-label={previewDark ? 'Switch to light preview' : 'Switch to dark preview'}
            className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors"
          >
            {previewDark ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          {/* Reset */}
          <button
            onClick={reset}
            disabled={isDefault}
            aria-label="Reset to defaults"
            className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <RotateCcw size={15} />
          </button>
        </div>
      </div>

      {/* ── Body: preview + controls ── */}
      <div className="grid lg:grid-cols-[1fr_300px]">
        {/* Preview pane */}
        <div
          className="flex items-center justify-center border-b lg:border-b-0 lg:border-r border-border p-6 overflow-auto"
          style={{ minHeight: previewMinHeight }}
        >
          <div
            className={`transition-all duration-200 mx-auto ${
              previewDark ? 'dark bg-slate-900 text-white' : 'bg-background text-foreground'
            } rounded-xl border-2 border-dashed border-border p-6 flex items-center justify-center`}
            style={{ width: VIEWPORT_WIDTHS[viewport], maxWidth: '100%', minHeight: previewMinHeight - 48 }}
          >
            {renderPreview(values)}
          </div>
        </div>

        {/* Controls pane */}
        <div className="p-5 space-y-5 overflow-y-auto max-h-[600px]" role="form" aria-label="Playground controls">
          {Array.from(grouped.entries()).map(([group, ctrls]) => (
            <fieldset key={group} className="space-y-3">
              {group && (
                <legend className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-2">
                  {group}
                </legend>
              )}
              {ctrls.map((ctrl) => (
                <ControlField
                  key={ctrl.name}
                  ctrl={ctrl}
                  value={values[ctrl.name]}
                  onChange={(v) => set(ctrl.name, v)}
                  uid={uid}
                />
              ))}
            </fieldset>
          ))}

          {/* Current values summary */}
          <div className="pt-3 border-t border-border">
            <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-2">
              Current props
            </p>
            <div className="flex flex-wrap gap-1.5">
              {controls.map((c) => {
                const v = values[c.name];
                const isDef = v === c.defaultValue;
                if (isDef && c.type === 'boolean' && !v) return null;
                return (
                  <span
                    key={c.name}
                    className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-mono ${
                      isDef
                        ? 'bg-muted/50 text-muted-foreground'
                        : 'bg-primary/10 text-primary font-semibold'
                    }`}
                  >
                    {c.name}=
                    {typeof v === 'boolean' ? String(v) : typeof v === 'string' ? `"${v}"` : v}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ── Code output ── */}
      <div className="border-t border-border">
        <div className="flex items-center justify-between px-5 py-2 bg-muted/20">
          <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
            Generated code
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => openInStackBlitz(name, code)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border border-border bg-card text-foreground hover:border-primary hover:text-primary transition-colors"
            >
              <ExternalLink size={13} />
              StackBlitz
            </button>
            <button
              onClick={copyCode}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border border-border bg-card text-foreground hover:border-primary hover:text-primary transition-colors"
            >
              {copied ? <Check size={13} className="text-green-600" /> : <Copy size={13} />}
              {copied ? 'Copied' : 'Copy'}
            </button>
          </div>
        </div>
        <div className="bg-slate-950 px-5 py-4 overflow-x-auto">
          <pre className="text-sm font-mono text-slate-100 leading-relaxed whitespace-pre-wrap">
            <code>{code}</code>
          </pre>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  ControlField — renders a single control based on its type          */
/* ------------------------------------------------------------------ */

function ControlField({
  ctrl,
  value,
  onChange,
  uid,
}: {
  ctrl: PlaygroundControl;
  value: any;
  onChange: (v: any) => void;
  uid: string;
}) {
  const id = `${uid}-${ctrl.name}`;

  const baseInput =
    'w-full border border-border rounded-lg px-3 py-2 text-sm bg-card text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 transition-colors';

  switch (ctrl.type) {
    case 'select':
      return (
        <div>
          <label htmlFor={id} className="block text-xs font-semibold text-foreground mb-1">
            {ctrl.label}
          </label>
          <select
            id={id}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={baseInput}
          >
            {ctrl.options?.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>
      );

    case 'boolean':
      return (
        <label htmlFor={id} className="flex items-center gap-2.5 cursor-pointer select-none">
          <input
            id={id}
            type="checkbox"
            checked={!!value}
            onChange={(e) => onChange(e.target.checked)}
            className="accent-primary w-4 h-4 rounded"
          />
          <span className="text-sm text-foreground">{ctrl.label}</span>
        </label>
      );

    case 'text':
      return (
        <div>
          <label htmlFor={id} className="block text-xs font-semibold text-foreground mb-1">
            {ctrl.label}
          </label>
          <input
            id={id}
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={baseInput}
          />
        </div>
      );

    case 'number':
      return (
        <div>
          <label htmlFor={id} className="block text-xs font-semibold text-foreground mb-1">
            {ctrl.label}
          </label>
          <input
            id={id}
            type="number"
            value={value}
            min={ctrl.min}
            max={ctrl.max}
            step={ctrl.step}
            onChange={(e) => onChange(Number(e.target.value))}
            className={baseInput}
          />
        </div>
      );

    case 'radio':
      return (
        <fieldset>
          <legend className="block text-xs font-semibold text-foreground mb-1.5">
            {ctrl.label}
          </legend>
          <div className="flex flex-wrap gap-2">
            {ctrl.options?.map((o) => (
              <label
                key={o}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium cursor-pointer transition-colors ${
                  value === o
                    ? 'border-primary bg-primary/10 text-primary'
                    : 'border-border bg-card text-muted-foreground hover:border-foreground/30'
                }`}
              >
                <input
                  type="radio"
                  name={`${uid}-${ctrl.name}`}
                  value={o}
                  checked={value === o}
                  onChange={() => onChange(o)}
                  className="sr-only"
                />
                {o}
              </label>
            ))}
          </div>
        </fieldset>
      );

    case 'textarea':
      return (
        <div>
          <label htmlFor={id} className="block text-xs font-semibold text-foreground mb-1">
            {ctrl.label}
          </label>
          <textarea
            id={id}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            rows={3}
            className={baseInput + ' resize-y'}
          />
        </div>
      );

    default:
      return null;
  }
}

export default ComponentPlayground;
