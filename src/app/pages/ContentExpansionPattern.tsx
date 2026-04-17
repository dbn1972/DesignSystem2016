import React, { useState } from "react";
import { Link } from "react-router";
import { TrendingUp, ArrowLeft, CheckCircle, Download, Copy, Check } from "lucide-react";

export default function ContentExpansionPattern() {
  const [language, setLanguage] = useState<"en" | "hi" | "te">("en");

  const content = {
    en: { text: "Apply Now", chars: 9, expansion: "100%" },
    hi: { text: "अभी आवेदन करें", chars: 14, expansion: "155%" },
    te: { text: "ఇప్పుడు దరఖాస్తు చేయండి", chars: 21, expansion: "233%" }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-gradient-to-br from-green-50 via-white to-teal-50 border-b-4 border-[#FF9933]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-16">
          <div className="mb-6">
            <Link to="/patterns/localization" className="text-sm text-muted-foreground hover:text-primary">
              ← Back to Localization Patterns
            </Link>
          </div>
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-500 border-3 border-white shadow-lg rounded-lg flex items-center justify-center">
                <TrendingUp size={40} className="text-white" />
              </div>
              <div>
                <div className="text-sm font-bold text-primary mb-2 uppercase tracking-wide">Localization Pattern</div>
                <h1 className="text-5xl font-bold text-foreground">Content Expansion Handling</h1>
              </div>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              Layout strategies for accommodating text expansion across languages without breaking UI,
              truncating content, or causing layout shifts.
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-8">
            <div className="bg-green-50 dark:bg-green-950/30 border-2 border-green-200 dark:border-green-800 rounded-lg p-6 mb-6">
              <h2 className="font-bold text-foreground mb-2">Interactive Demo</h2>
              <p className="text-sm text-muted-foreground">
                See how the same button text expands across different languages.
              </p>
            </div>

            <div className="bg-card border-2 border-border rounded-lg p-8 mb-6">
              <div className="flex gap-4 mb-6">
                {(["en", "hi", "te"] as const).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={`px-4 py-2 rounded font-bold ${
                      language === lang ? "bg-primary text-white" : "border-2 border-border"
                    }`}
                  >
                    {lang === "en" && "English"}
                    {lang === "hi" && "हिंदी"}
                    {lang === "te" && "తెలుగు"}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-foreground mb-4">❌ Bad: Fixed Width</h3>
                  <button className="w-32 px-4 py-3 bg-red-100 border-2 border-red-300 text-foreground font-bold rounded overflow-hidden text-ellipsis whitespace-nowrap">
                    {content[language].text}
                  </button>
                  <p className="text-xs text-red-600 mt-2">Text gets truncated!</p>
                </div>

                <div>
                  <h3 className="font-bold text-foreground mb-4">✓ Good: Flexible Width</h3>
                  <button className="px-6 py-3 bg-green-600 text-white font-bold rounded hover:bg-green-600">
                    {content[language].text}
                  </button>
                  <p className="text-xs text-green-600 mt-2">Adapts to content!</p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-background rounded">
                <div className="text-sm text-muted-foreground">
                  <strong>Current:</strong> {content[language].text}<br />
                  <strong>Characters:</strong> {content[language].chars}<br />
                  <strong>Expansion:</strong> {content[language].expansion} compared to English
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Expansion Guidelines</h2>
                <div className="bg-card border-2 border-border rounded-lg p-6">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b-2 border-border">
                          <th className="text-left py-3 px-4 font-bold">Source Length</th>
                          <th className="text-left py-3 px-4 font-bold">Expected Expansion</th>
                          <th className="text-left py-3 px-4 font-bold">Design For</th>
                        </tr>
                      </thead>
                      <tbody className="text-muted-foreground">
                        <tr className="border-b border-border">
                          <td className="py-3 px-4">1-10 characters</td>
                          <td className="py-3 px-4">Up to 300%</td>
                          <td className="py-3 px-4">3x width</td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="py-3 px-4">11-20 characters</td>
                          <td className="py-3 px-4">Up to 200%</td>
                          <td className="py-3 px-4">2x width</td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="py-3 px-4">21-50 characters</td>
                          <td className="py-3 px-4">Up to 150%</td>
                          <td className="py-3 px-4">1.5x width</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4">50+ characters</td>
                          <td className="py-3 px-4">Up to 130%</td>
                          <td className="py-3 px-4">1.3x width</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Implementation Strategies</h2>
                <div className="bg-card border-2 border-border rounded-lg p-6 space-y-4">
                  <div>
                    <h3 className="font-bold text-foreground mb-2">1. Flexible Layouts</h3>
                    <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                      <li>• Use flexbox/grid instead of fixed widths</li>
                      <li>• Allow buttons to grow with content</li>
                      <li>• Use min-width instead of width</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">2. Responsive Typography</h3>
                    <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                      <li>• Reduce font size slightly for longer text</li>
                      <li>• Increase line-height for dense scripts</li>
                      <li>• Use appropriate font weights</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">3. Multi-line Support</h3>
                    <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                      <li>• Allow labels to wrap to 2-3 lines</li>
                      <li>• Use word-break for long compound words</li>
                      <li>• Test with longest possible translations</li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>
          </div>

          <aside className="col-span-4">
            <div className="sticky top-8 space-y-6">
              <div className="bg-card border-2 border-border rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-4">Pattern Information</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Complexity</div>
                    <div className="font-bold">High</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Impact</div>
                    <div className="font-bold">Layout & Design</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Max Expansion</div>
                    <div className="font-bold">Up to 300%</div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-950/30 border-2 border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-3">Common Mistakes</h3>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li>✗ Fixed button widths</li>
                  <li>✗ Single-line labels</li>
                  <li>✗ Truncating with ellipsis</li>
                  <li>✗ Overlapping elements</li>
                  <li>✗ Breaking grid layouts</li>
                </ul>
              </div>

              <div className="bg-green-50 dark:bg-green-950/30 border-2 border-green-200 dark:border-green-800 rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-3">Best Practices</h3>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li>✓ Test with longest language</li>
                  <li>✓ Use flexible containers</li>
                  <li>✓ Allow text wrapping</li>
                  <li>✓ Maintain padding/spacing</li>
                  <li>✓ Design for 2-3x expansion</li>
                </ul>
              </div>
            </div>
          </aside>
        </div>

        {/* Code Downloads */}
        <ContentExpansionCodeDownloads />
      </main>
    </div>
  );
}

// ==================== CODE DOWNLOADS ====================

const CONTENT_EXP_REACT_CODE = `import React, { useState } from 'react';

export function ContentExpansionPage() {
  const [language, setLanguage] = useState<'en' | 'hi' | 'te'>('en');

  const content: Record<string, { text: string; chars: number; expansion: string }> = {
    en: { text: 'Apply Now', chars: 9, expansion: '100%' },
    hi: { text: 'अभी आवेदन करें', chars: 14, expansion: '155%' },
    te: { text: 'ఇప్పుడు దరఖాస్తు చేయండి', chars: 21, expansion: '233%' },
  };

  const labels: Record<string, { submit: string; cancel: string; help: string }> = {
    en: { submit: 'Submit Application', cancel: 'Cancel', help: 'Need Help?' },
    hi: { submit: 'आवेदन जमा करें', cancel: 'रद्द करें', help: 'सहायता चाहिए?' },
    te: { submit: 'దరఖాస్తు సమర్పించండి', cancel: 'రద్దు చేయండి', help: 'సహాయం కావాలా?' },
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold text-foreground mb-6">Content Expansion Handling</h1>
        <div className="flex gap-3 mb-8">
          {(['en', 'hi', 'te'] as const).map(lang => (
            <button key={lang} onClick={() => setLanguage(lang)} className={\`px-4 py-2 rounded-lg font-bold text-sm \${language === lang ? 'bg-primary text-primary-foreground' : 'border border-border'}\`}>
              {lang === 'en' ? 'English' : lang === 'hi' ? 'हिंदी' : 'తెలుగు'}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-8 mb-8">
          <div className="p-6 border-2 border-red-200 rounded-xl bg-red-50">
            <h3 className="font-bold mb-4 text-red-700">❌ Fixed Width</h3>
            <button className="w-32 px-4 py-3 bg-red-100 border border-red-300 rounded font-bold overflow-hidden text-ellipsis whitespace-nowrap">{content[language].text}</button>
            <p className="text-xs text-red-600 mt-2">Text gets truncated</p>
          </div>
          <div className="p-6 border-2 border-green-200 rounded-xl bg-green-50">
            <h3 className="font-bold mb-4 text-green-700">✓ Flexible Width</h3>
            <button className="px-6 py-3 bg-green-600 text-white rounded font-bold">{content[language].text}</button>
            <p className="text-xs text-green-600 mt-2">Adapts to content</p>
          </div>
        </div>
        <div className="bg-card border border-border rounded-xl p-6">
          <h3 className="font-bold mb-4">Button Group Test</h3>
          <div className="flex flex-wrap gap-3">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold">{labels[language].submit}</button>
            <button className="px-6 py-3 border border-border rounded-lg font-semibold">{labels[language].cancel}</button>
            <button className="px-6 py-3 text-primary underline font-semibold">{labels[language].help}</button>
          </div>
          <div className="mt-4 p-3 bg-muted rounded-lg text-sm text-muted-foreground">
            Expansion: {content[language].expansion} • Characters: {content[language].chars}
          </div>
        </div>
      </div>
    </div>
  );
}`;

const CONTENT_EXP_ANGULAR_CODE = `import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ux4g-content-expansion',
  standalone: true,
  imports: [CommonModule],
  template: \`
    <div class="min-h-screen bg-background p-6">
      <div class="max-w-3xl mx-auto">
        <h1 class="text-2xl font-bold text-foreground mb-6">Content Expansion Handling</h1>
        <div class="flex gap-3 mb-8">
          <button *ngFor="let lang of langs" (click)="language=lang" [class]="'px-4 py-2 rounded-lg font-bold text-sm ' + (language===lang ? 'bg-primary text-primary-foreground' : 'border border-border')">
            {{lang === 'en' ? 'English' : lang === 'hi' ? 'हिंदी' : 'తెలుగు'}}
          </button>
        </div>
        <div class="grid grid-cols-2 gap-8 mb-8">
          <div class="p-6 border-2 border-red-200 rounded-xl bg-red-50">
            <h3 class="font-bold mb-4 text-red-700">❌ Fixed Width</h3>
            <button class="w-32 px-4 py-3 bg-red-100 border border-red-300 rounded font-bold overflow-hidden text-ellipsis whitespace-nowrap">{{content[language].text}}</button>
          </div>
          <div class="p-6 border-2 border-green-200 rounded-xl bg-green-50">
            <h3 class="font-bold mb-4 text-green-700">✓ Flexible Width</h3>
            <button class="px-6 py-3 bg-green-600 text-white rounded font-bold">{{content[language].text}}</button>
          </div>
        </div>
      </div>
    </div>
  \`
})
export class ContentExpansionComponent {
  language: 'en' | 'hi' | 'te' = 'en';
  langs = ['en', 'hi', 'te'] as const;
  content: Record<string, { text: string; chars: number; expansion: string }> = {
    en: { text: 'Apply Now', chars: 9, expansion: '100%' },
    hi: { text: 'अभी आवेदन करें', chars: 14, expansion: '155%' },
    te: { text: 'ఇప్పుడు దరఖాస్తు చేయండి', chars: 21, expansion: '233%' },
  };
}`;

const CONTENT_EXP_HTML_CODE = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Content Expansion — UX4G</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: system-ui, sans-serif; background: #f8fafc; min-height: 100vh; padding: 2rem; }
    .container { max-width: 720px; margin: 0 auto; }
    h1 { font-size: 1.5rem; font-weight: 700; margin-bottom: 1.5rem; }
    .tabs { display: flex; gap: .5rem; margin-bottom: 2rem; }
    .tab { padding: .5rem 1rem; border-radius: .5rem; font-weight: 700; font-size: .875rem; border: 1px solid #e2e8f0; cursor: pointer; background: #fff; }
    .tab.active { background: #005196; color: #fff; border-color: #005196; }
    .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-bottom: 2rem; }
    .bad { padding: 1.5rem; border: 2px solid #fca5a5; border-radius: .75rem; background: #fef2f2; }
    .good { padding: 1.5rem; border: 2px solid #86efac; border-radius: .75rem; background: #f0fdf4; }
    .bad h3 { font-weight: 700; color: #dc2626; margin-bottom: 1rem; }
    .good h3 { font-weight: 700; color: #16a34a; margin-bottom: 1rem; }
    .btn-fixed { width: 128px; padding: .75rem 1rem; background: #fee2e2; border: 1px solid #fca5a5; border-radius: .25rem; font-weight: 700; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .btn-flex { padding: .75rem 1.5rem; background: #16a34a; color: #fff; border: none; border-radius: .25rem; font-weight: 700; }
  </style>
</head>
<body>
  <div class="container">
    <h1>Content Expansion Handling</h1>
    <div class="tabs">
      <button class="tab active" onclick="setLang('en',this)">English</button>
      <button class="tab" onclick="setLang('hi',this)">हिंदी</button>
      <button class="tab" onclick="setLang('te',this)">తెలుగు</button>
    </div>
    <div class="grid">
      <div class="bad"><h3>❌ Fixed Width</h3><button class="btn-fixed" id="bad-btn">Apply Now</button></div>
      <div class="good"><h3>✓ Flexible Width</h3><button class="btn-flex" id="good-btn">Apply Now</button></div>
    </div>
  </div>
  <script>
    const data = { en: 'Apply Now', hi: 'अभी आवेदन करें', te: 'ఇప్పుడు దరఖాస్తు చేయండి' };
    function setLang(lang, el) {
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      el.classList.add('active');
      document.getElementById('bad-btn').textContent = data[lang];
      document.getElementById('good-btn').textContent = data[lang];
    }
  </script>
</body>
</html>`;

function ContentExpansionCodeDownloads() {
  const [copiedId, setCopiedId] = React.useState<string | null>(null);
  const copyToClipboard = (code: string, id: string) => { navigator.clipboard.writeText(code); setCopiedId(id); setTimeout(() => setCopiedId(null), 2000); };
  const downloadCode = (code: string, filename: string) => { const blob = new Blob([code], { type: 'text/plain' }); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = filename; a.click(); URL.revokeObjectURL(url); };
  const lanes = [
    { key: 'react', title: 'React', desc: 'TypeScript + Language Toggle', code: CONTENT_EXP_REACT_CODE, filename: 'ContentExpansionPage.tsx' },
    { key: 'angular', title: 'Angular', desc: 'Standalone Component', code: CONTENT_EXP_ANGULAR_CODE, filename: 'content-expansion.component.ts' },
    { key: 'html', title: 'HTML / CSS / JS', desc: 'No framework needed', code: CONTENT_EXP_HTML_CODE, filename: 'content-expansion.html' },
  ];
  return (
    <section id="code-downloads" className="space-y-6 scroll-mt-24 mt-12">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Code Downloads</h2>
        <p className="text-muted-foreground mt-1">Production-ready Content Expansion implementations.</p>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {lanes.map((lane) => (
          <div key={lane.key} className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <div className="h-1 bg-[#005196]" />
            <div className="flex flex-1 flex-col p-5">
              <div className="flex items-start justify-between gap-3 mb-4">
                <div>
                  <span className="inline-flex rounded-full border border-border bg-muted/60 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Framework lane</span>
                  <h3 className="text-lg font-bold text-foreground mt-2">{lane.title}</h3>
                  <p className="text-sm text-muted-foreground">{lane.desc}</p>
                </div>
                <button onClick={() => downloadCode(lane.code, lane.filename)} aria-label={`Download ${lane.title} code`} className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-border bg-background text-[#005196] hover:bg-[#005196] hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-[#005196]">
                  <Download size={16} />
                </button>
              </div>
              <div className="flex-1 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-muted-foreground">{lane.filename}</span>
                  <button onClick={() => copyToClipboard(lane.code, lane.key)} className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-background px-2.5 py-1.5 text-xs font-semibold text-foreground hover:border-primary hover:text-primary transition-colors">
                    {copiedId === lane.key ? <Check size={12} /> : <Copy size={12} />}
                    {copiedId === lane.key ? 'Copied' : 'Copy'}
                  </button>
                </div>
                <div className="rounded-xl border border-border bg-slate-950 p-3 text-xs text-slate-100 shadow-inner max-h-64 overflow-auto">
                  <pre className="font-mono leading-5 whitespace-pre-wrap"><code>{lane.code.slice(0, 800)}...</code></pre>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
