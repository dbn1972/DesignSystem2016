import { useEffect, useMemo, useRef, useState } from "react";
import type { ReactNode } from "react";
import type * as Monaco from "monaco-editor";
import * as React from "react";
import { createPortal } from "react-dom";
import {
  AlertCircle,
  Check,
  Copy,
  Laptop,
  Moon,
  RefreshCw,
  Smartphone,
  Sun,
  Tablet,
} from "lucide-react";

import {
  Alert,
  Badge,
  Button,
  Card,
  Checkbox,
  Field,
  HintText,
  Input,
  Select,
  Textarea,
} from "../react-core-package/src";
import appStyles from "../../styles/index.css?inline";
import tokensStyles from "../tokens-package/dist/tokens.css?inline";
import ux4gBaseStyles from "../styles-package/src/base/index.css?inline";
import ux4gUtilityStyles from "../styles-package/src/utilities/index.css?inline";
import ux4gComponentStyles from "../styles-package/src/components/index.css?inline";

type Viewport = "desktop" | "tablet" | "mobile";

type SandboxPreset = {
  id: string;
  label: string;
  description: string;
  code: string;
  note?: string;
};

type CodeSandboxProps = {
  title: string;
  description: string;
  presets: SandboxPreset[];
  initialPresetId?: string;
  presetPreviews?: Record<string, ReactNode>;
};

type PreviewState =
  | { status: "ready"; node: ReactNode }
  | { status: "loading" }
  | { status: "error"; message: string };

type TypeScriptModule = typeof import("typescript");
type MonacoEditorModule = typeof import("@monaco-editor/react");
type MonacoEditorComponent = MonacoEditorModule["default"];

const VIEWPORT_WIDTHS: Record<Viewport, string> = {
  desktop: "100%",
  tablet: "768px",
  mobile: "375px",
};

const SANDBOX_SCOPE = {
  React,
  Alert,
  Badge,
  Button,
  Card,
  Checkbox,
  Field,
  HintText,
  Input,
  Select,
  Textarea,
};

const AVAILABLE_SCOPE_NAMES = Object.keys(SANDBOX_SCOPE).sort();

const SANDBOX_THEME_LIGHT = "ux4g-light";
const SANDBOX_THEME_DARK = "ux4g-dark";

function formatErrorMessage(error: unknown) {
  if (error instanceof Error) {
    return error.message;
  }

  return "The sandbox could not render this example.";
}

function evaluateSandboxCode(
  code: string,
  ts: TypeScriptModule,
): Promise<PreviewState> {
  return (async () => {
  try {
    const compiled = ts.transpileModule(code, {
      compilerOptions: {
        jsx: ts.JsxEmit.React,
        target: ts.ScriptTarget.ES2020,
        module: ts.ModuleKind.CommonJS,
      },
      reportDiagnostics: true,
    });

    const diagnostics = compiled.diagnostics ?? [];
    if (diagnostics.length > 0) {
      const message =
        diagnostics
          .map((diagnostic) =>
            ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n"),
          )
          .join("\n") || "The sandbox could not compile this example.";
      return { status: "error", message };
    }

    // Use Function constructor instead of blob URL to avoid CSP blob: restrictions
    const scopeNames = Object.keys(SANDBOX_SCOPE);
    const scopeValues = Object.values(SANDBOX_SCOPE);

    const wrappedCode = `
      ${compiled.outputText}
      return typeof Example !== "undefined" ? Example : null;
    `;

    const factory = new Function("React", ...scopeNames, wrappedCode);
    const ExampleComponent = factory(React, ...scopeValues);

    if (!ExampleComponent) {
      return { status: "error", message: "Define a function named Example to render the preview." };
    }

    const node = React.createElement(ExampleComponent);
    return { status: "ready", node };
  } catch (error) {
    return { status: "error", message: formatErrorMessage(error) };
  }
  })();
}

function PreviewError({ message }: { message: string }) {
  return (
    <div className="w-full rounded-2xl border border-red-300 bg-red-50 p-4 text-left text-red-900 dark:border-red-900/60 dark:bg-red-950/30 dark:text-red-100">
      <div className="flex items-start gap-3">
        <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
        <div>
          <p className="font-semibold">Preview error</p>
          <pre className="mt-2 whitespace-pre-wrap text-sm leading-6">
            {message}
          </pre>
        </div>
      </div>
    </div>
  );
}

type PreviewRenderBoundaryProps = {
  children: ReactNode;
};

type PreviewRenderBoundaryState = {
  message: string | null;
};

class PreviewRenderBoundary extends React.Component<
  PreviewRenderBoundaryProps,
  PreviewRenderBoundaryState
> {
  state: PreviewRenderBoundaryState = { message: null };

  static getDerivedStateFromError(error: unknown): PreviewRenderBoundaryState {
    return { message: formatErrorMessage(error) };
  }

  componentDidUpdate(prevProps: PreviewRenderBoundaryProps) {
    if (prevProps.children !== this.props.children && this.state.message) {
      this.setState({ message: null });
    }
  }

  render() {
    if (this.state.message) {
      return <PreviewError message={this.state.message} />;
    }

    return this.props.children;
  }
}

type SandboxPreviewFrameProps = {
  children: ReactNode;
  dark: boolean;
};

function SandboxPreviewFrame({ children, dark }: SandboxPreviewFrameProps) {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const [mountNode, setMountNode] = useState<HTMLElement | null>(null);

  // Detect site dark mode from the html element
  const isDark = typeof document !== 'undefined' && document.documentElement.classList.contains('dark');

  const combinedStyles = useMemo(
    () =>
      [
        tokensStyles,
        appStyles,
        ux4gBaseStyles,
        ux4gUtilityStyles,
        ux4gComponentStyles,
        `
          :root {
            color-scheme: ${isDark ? "dark" : "light"};
          }

          html,
          body {
            margin: 0;
            min-height: 100%;
            background: transparent;
            color: inherit;
          }

          body {
            padding: 0;
          }

          #sandbox-preview-root {
            min-height: 100%;
            box-sizing: border-box;
            padding: 0;
          }
        `,
      ].join("\n"),
    [isDark],
  );

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const doc = iframe.contentDocument;
    if (!doc) return;

    doc.open();
    doc.write(`<!doctype html><html><head><style>${combinedStyles}</style></head><body><div id="sandbox-preview-root"></div></body></html>`);
    doc.close();

    setMountNode(doc.getElementById("sandbox-preview-root"));
  }, [combinedStyles]);

  return (
    <>
      <iframe
        ref={iframeRef}
        title="Sandbox preview frame"
        className="block h-[420px] w-full rounded-[18px] border-0 bg-transparent"
        sandbox="allow-same-origin"
      />
      {mountNode ? createPortal(children, mountNode) : null}
    </>
  );
}

export function CodeSandbox({
  title,
  description,
  presets,
  initialPresetId,
  presetPreviews,
}: CodeSandboxProps) {
  const resolvePresetId = (candidate?: string) =>
    presets.some((preset) => preset.id === candidate)
      ? candidate ?? presets[0]?.id ?? ""
      : presets[0]?.id ?? "";

  const [selectedPresetId, setSelectedPresetId] = useState(
    resolvePresetId(initialPresetId),
  );
  const [code, setCode] = useState(
    presets.find((preset) => preset.id === resolvePresetId(initialPresetId))?.code ??
      presets[0]?.code ??
      "",
  );
  const [viewport, setViewport] = useState<Viewport>("desktop");
  const [copied, setCopied] = useState(false);
  const [compiler, setCompiler] = useState<TypeScriptModule | null>(null);
  const [editorComponent, setEditorComponent] =
    useState<MonacoEditorComponent | null>(null);
  const [editorError, setEditorError] = useState<string | null>(null);
  const [editorTimedOut, setEditorTimedOut] = useState(false);
  const [preferPlainEditor, setPreferPlainEditor] = useState(false);
  const [previewState, setPreviewState] = useState<PreviewState>({
    status: "loading",
  });

  const selectedPreset =
    presets.find((preset) => preset.id === selectedPresetId) ?? presets[0];
  const presetPreview = selectedPreset ? presetPreviews?.[selectedPreset.id] : null;

  useEffect(() => {
    const nextPresetId = resolvePresetId(initialPresetId);
    setSelectedPresetId(nextPresetId);
  }, [initialPresetId, presets]);

  useEffect(() => {
    setCode(selectedPreset?.code ?? "");
  }, [selectedPreset?.id]);

  useEffect(() => {
    let cancelled = false;

    // Always load TypeScript compiler for live preview
    import("typescript")
      .then((module) => {
        if (!cancelled) {
          setCompiler(module.default ?? module);
        }
      })
      .catch((error) => {
        if (!cancelled) {
          setPreviewState({ status: "error", message: formatErrorMessage(error) });
        }
      });

    // Load Monaco editor (skip on Firefox for reliability)
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isFirefox = userAgent.includes("firefox");

    if (isFirefox) {
      setPreferPlainEditor(true);
    } else {
      const timeoutId = window.setTimeout(() => {
        if (!cancelled) {
          setEditorTimedOut(true);
        }
      }, 2500);

      import("@monaco-editor/react")
        .then((module) => {
          if (!cancelled) {
            window.clearTimeout(timeoutId);
            setEditorComponent(() => module.default);
          }
        })
        .catch((error) => {
          if (!cancelled) {
            window.clearTimeout(timeoutId);
            setEditorError(formatErrorMessage(error));
          }
        });
    }

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!compiler) {
      setPreviewState({ status: "loading" });
      return;
    }

    let cancelled = false;
    setPreviewState({ status: "loading" });

    evaluateSandboxCode(code, compiler).then((nextState) => {
      if (!cancelled) {
        setPreviewState(nextState);
      }
    });

    return () => {
      cancelled = true;
    };
  }, [code, compiler]);

  const resetToPreset = () => {
    setCode(selectedPreset?.code ?? "");
  };

  const copyCode = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };

  const handleEditorBeforeMount = (monaco: typeof Monaco) => {
    monaco.editor.defineTheme(SANDBOX_THEME_LIGHT, {
      base: "vs",
      inherit: true,
      rules: [],
      colors: {
        "editor.background": "#f8fafc",
        "editor.lineHighlightBackground": "#e2e8f022",
        "editorLineNumber.foreground": "#64748b",
        "editorLineNumber.activeForeground": "#0f172a",
      },
    });

    monaco.editor.defineTheme(SANDBOX_THEME_DARK, {
      base: "vs-dark",
      inherit: true,
      rules: [],
      colors: {
        "editor.background": "#0f172a",
        "editor.lineHighlightBackground": "#1e293b66",
        "editorLineNumber.foreground": "#94a3b8",
        "editorLineNumber.activeForeground": "#f8fafc",
      },
    });
  };

  const EditorComponent = editorComponent;

  return (
    <section className="overflow-hidden rounded-[28px] border border-border bg-card shadow-sm">
      <div className="flex items-center justify-between border-b border-border bg-muted/30 px-5 py-3 sm:px-6">
        <div className="flex items-center gap-3">
          <div className="inline-flex rounded-lg bg-primary/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.15em] text-primary">
            Sandbox
          </div>
          <h2 className="text-sm font-semibold text-foreground">{title}</h2>
        </div>

        <div className="flex items-center gap-3">
          <label className="flex items-center gap-2 text-sm">
            <span className="text-xs font-medium text-muted-foreground">Preset</span>
            <select
              value={selectedPresetId}
              onChange={(event) => setSelectedPresetId(event.target.value)}
              className="rounded-lg border border-border bg-background px-3 py-1.5 text-sm text-foreground outline-none transition focus:border-primary"
            >
              {presets.map((preset) => (
                <option key={preset.id} value={preset.id}>
                  {preset.label}
                </option>
              ))}
            </select>
          </label>

          <div className="flex items-center gap-0.5 rounded-lg border border-border bg-background p-0.5">
            {([
              ["desktop", Laptop],
              ["tablet", Tablet],
              ["mobile", Smartphone],
            ] as const).map(([value, Icon]) => (
              <button
                key={value}
                type="button"
                onClick={() => setViewport(value)}
                className={`inline-flex items-center justify-center rounded-md px-2 py-1.5 transition ${
                  viewport === value
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted"
                }`}
                aria-label={`${value} preview`}
              >
                <Icon className="h-3.5 w-3.5" />
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-px bg-border xl:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)]">
        <div className="bg-card">
          <div className="flex items-center justify-between border-b border-border px-5 py-3 sm:px-6">
            <div>
              <p className="text-sm font-semibold text-foreground">Code</p>
              <p className="text-xs text-muted-foreground">
                Supported scope: {AVAILABLE_SCOPE_NAMES.join(", ")}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={resetToPreset}
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-3 py-2 text-sm font-medium text-foreground transition hover:border-primary/30 hover:text-primary"
              >
                <RefreshCw className="h-4 w-4" />
                Reset
              </button>
              <button
                type="button"
                onClick={copyCode}
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground transition hover:opacity-95"
              >
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
          </div>

          {EditorComponent && !editorTimedOut && !preferPlainEditor ? (
            <EditorComponent
              height="520px"
              defaultLanguage="typescript"
              language="typescript"
              value={code}
              onChange={(value) => setCode(value ?? "")}
              beforeMount={handleEditorBeforeMount}
              theme={previewDark ? SANDBOX_THEME_DARK : SANDBOX_THEME_LIGHT}
              options={{
                fontSize: 14,
                minimap: { enabled: false },
                scrollBeyondLastLine: false,
                wordWrap: "on",
                padding: { top: 16, bottom: 16 },
                tabSize: 2,
                automaticLayout: true,
              }}
            />
          ) : editorError || editorTimedOut || preferPlainEditor ? (
            <div className="p-5">
              <textarea
                value={code}
                onChange={(event) => setCode(event.target.value)}
                className="h-[520px] w-full rounded-2xl border border-border bg-muted/30 p-4 font-mono text-sm leading-6 text-foreground outline-none transition focus:border-primary"
                spellCheck={false}
                aria-label="Sandbox code editor"
              />
            </div>
          ) : (
            <div className="flex h-[520px] items-center justify-center bg-muted/30 text-sm text-muted-foreground">
              Loading Monaco editor…
            </div>
          )}
        </div>

        <div className="bg-card">
          <div className="flex items-center justify-between border-b border-border px-5 py-3 sm:px-6">
            <div>
              <p className="text-sm font-semibold text-foreground">Live preview</p>
              <p className="text-xs text-muted-foreground">
                {compiler ? 'Live — edits compile and render automatically' : 'Loading TypeScript compiler…'}
              </p>
            </div>
            <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${
              previewState.status === 'ready' ? 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400' :
              previewState.status === 'error' ? 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400' :
              'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-400'
            }`}>
              {previewState.status === 'ready' ? '● Live' : previewState.status === 'error' ? '● Error' : '○ Loading'}
            </span>
          </div>

          <div
            className="flex min-h-[520px] items-center justify-center overflow-auto p-6 bg-muted/30"
          >
            <div
              className="w-full rounded-[24px] border border-border bg-card p-8 shadow-sm transition-all"
              style={{ width: VIEWPORT_WIDTHS[viewport], maxWidth: "100%" }}
            >
              {previewState.status === "ready" ? (
                <PreviewRenderBoundary>
                  <SandboxPreviewFrame dark={false}>
                    <div className="min-h-[420px]">{previewState.node}</div>
                  </SandboxPreviewFrame>
                </PreviewRenderBoundary>
              ) : previewState.status === "loading" && presetPreview ? (
                <div className="min-h-[420px] space-y-4">
                  <PreviewRenderBoundary>
                    <SandboxPreviewFrame dark={false}>
                      <div>{presetPreview}</div>
                    </SandboxPreviewFrame>
                  </PreviewRenderBoundary>
                  <p className="text-xs text-muted-foreground text-center">Loading compiler…</p>
                </div>
              ) : previewState.status === "loading" ? (
                <div className="flex min-h-[420px] items-center justify-center text-sm text-muted-foreground">
                  Preparing preview runtime…
                </div>
              ) : (
                <PreviewError message={previewState.message} />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
