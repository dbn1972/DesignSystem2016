import React from 'react';
import { Link } from 'react-router';

type RelatedComponent = {
  title: string;
  description: string;
  href: string;
};

type ResearchItem = {
  title: string;
  body: string;
};

type ChangelogEntry = {
  version: string;
  date: string;
  changes: string[];
};

interface ComponentEditorialSectionsProps {
  componentName: string;
  useWhen: string[];
  avoidWhen: string[];
  doExamples: string[];
  dontExamples: string[];
  relatedComponents: RelatedComponent[];
  changelog: ChangelogEntry[];
  researchIntro: string;
  researchItems: ResearchItem[];
}

export function ComponentEditorialSections({
  componentName,
  useWhen,
  avoidWhen,
  doExamples,
  dontExamples,
  relatedComponents,
  changelog,
  researchIntro,
  researchItems,
}: ComponentEditorialSectionsProps) {
  return (
    <>
      <section className="bg-card rounded-lg border border-border p-6 mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-6">When to use {componentName}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-green-700 mb-3 flex items-center gap-2">
              <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-700 text-sm">✓</span>
              Do use {componentName} when
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {useWhen.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-red-700 mb-3 flex items-center gap-2">
              <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-700 text-sm">✗</span>
              Don't use {componentName} when
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {avoidWhen.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-red-600 mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-card rounded-lg border border-border p-6 mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-6">Do / Don't</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border-2 border-green-200 rounded-lg overflow-hidden">
            <div className="bg-green-50 px-4 py-2 text-sm font-bold text-green-800">✓ Do</div>
            <div className="p-4 space-y-3">
              <ul className="space-y-2 text-sm text-muted-foreground">
                {doExamples.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-2 border-red-200 rounded-lg overflow-hidden">
            <div className="bg-red-50 px-4 py-2 text-sm font-bold text-red-800">✗ Don't</div>
            <div className="p-4 space-y-3">
              <ul className="space-y-2 text-sm text-muted-foreground">
                {dontExamples.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-red-600 mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-card rounded-lg border border-border p-6 mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-4">Related Components</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {relatedComponents.map((item) => (
            <Link key={item.href} to={item.href} className="block p-4 border border-border rounded-lg hover:border-primary transition-colors">
              <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-card rounded-lg border border-border p-6 mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-4">Changelog</h2>
        <div className="space-y-4">
          {changelog.map((entry) => (
            <div key={entry.version} className="border-l-2 border-primary pl-4">
              <div className="flex items-center gap-3 mb-1">
                <span className="text-sm font-mono font-bold text-primary">{entry.version}</span>
                <span className="text-xs text-muted-foreground">{entry.date}</span>
              </div>
              <ul className="space-y-1">
                {entry.changes.map((change) => (
                  <li key={change} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{change}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-card rounded-lg border border-border p-6">
        <h2 className="text-2xl font-bold text-foreground mb-4">Research on this component</h2>
        <p className="text-sm text-muted-foreground mb-4">{researchIntro}</p>
        <div className="space-y-4">
          {researchItems.map((item) => (
            <div key={item.title} className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
              <h3 className="font-semibold text-foreground mb-1 text-sm">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
