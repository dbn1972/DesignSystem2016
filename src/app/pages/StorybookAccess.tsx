import { ExternalLink, FileCode2 } from "lucide-react";

const LOCAL_STORYBOOK_URL = "http://localhost:6006/";
const START_COMMAND = "pnpm --dir src/app/react-core-package run storybook";

export default function StorybookAccess() {
  return (
    <main className="min-h-[60vh] bg-background">
      <div className="mx-auto flex max-w-3xl flex-col gap-8 px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            <FileCode2 className="h-3.5 w-3.5" aria-hidden="true" />
            Storybook Access
          </div>
          <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Storybook runs as a separate local tool.
          </h1>
          <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            The main UX4G app runs on port <code>3000</code>, while Storybook runs
            independently on port <code>6006</code>. Start Storybook locally, then
            open it in a new tab.
          </p>
        </div>

        <section className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
          <div className="space-y-5">
            <div>
              <h2 className="text-lg font-semibold text-card-foreground">
                Start local Storybook
              </h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Run this command from the repository root to launch the component
                explorer.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-muted/50 p-4 font-mono text-sm text-foreground">
              {START_COMMAND}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={LOCAL_STORYBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Open local Storybook
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="/storybook/"
                className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
              >
                Open published Storybook
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
