import React from "react";
import { UserCheck, CheckCircle, XCircle, AlertCircle, Info, GitBranch, ArrowRight, RefreshCw, Eye, Globe, Code, BarChart3, AlertTriangle, Shield, Clock, Users, FileText, Zap, Target, HelpCircle, ChevronRight, ThumbsUp, ThumbsDown, Settings, Database, Lock, MessageSquare, Edit, Search, ArrowLeft, Check, Minus, Hash, Phone, Mail, Calendar, Download, Copy } from "lucide-react";

export default function EligibilityScreeningPattern() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b-2 border-border">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-8">
          <div className="flex items-start justify-between">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-16 h-16 bg-muted border-2 border-border rounded flex items-center justify-center">
                  <UserCheck size={32} className="text-muted-foreground" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">UX4G Service Pattern Library</div>
                  <h1 className="text-3xl font-bold text-foreground">Eligibility and Screening</h1>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Rule-based pre-qualification screening pattern for determining service eligibility before full application. 
                Helps users understand if they qualify, saves time, reduces incomplete applications, and improves service efficiency.
              </p>
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-sm"></div>
                  <span className="text-muted-foreground">Pattern ID: <span className="font-bold text-foreground">UX4G-PAT-002</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-sm"></div>
                  <span className="text-muted-foreground">Version: <span className="font-bold text-foreground">1.1.0</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-sm"></div>
                  <span className="text-muted-foreground">Updated: <span className="font-bold text-foreground">February 2026</span></span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="px-6 py-3 bg-green-100 border-2 border-green-300 rounded text-green-800 font-bold text-sm text-center">
                STABLE
              </div>
              <div className="px-6 py-3 bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800 rounded text-blue-700 font-bold text-xs text-center uppercase">
                Conformance<br/>Recommended
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-card border-b border-border sticky top-0 z-20">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="flex items-center gap-1 py-3 overflow-x-auto">
            {[
              { id: "overview", label: "Overview" },
              { id: "logic", label: "Screening Logic" },
              { id: "journey", label: "Journey Flow" },
              { id: "pages", label: "Page Designs" },
              { id: "branching", label: "Branching" },
              { id: "components", label: "Components" },
              { id: "content", label: "Content" },
              { id: "accessibility", label: "Accessibility" },
              { id: "implementation", label: "Implementation" },
              { id: "governance", label: "Governance" }
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-muted rounded whitespace-nowrap transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-12 gap-8">
          
          {/* Main Content - 9 columns */}
          <div className="col-span-9 space-y-12">
            <PatternOverview />
            <ScreeningLogic />
            <JourneyFlow />
            <PageDesigns />
            <BranchingDecisions />
            <ComponentsUsed />
            <ContentGuidance />
            <AccessibilityGuidance />
            <ImplementationNotes />
            <GovernanceConformance />
          </div>

          {/* Sidebar - 3 columns */}
          <div className="col-span-3 space-y-6 sticky top-24 self-start">
            <MetadataPanel />
            <QuickRefPanel />
            <DesignPrinciples />
            <RiskIndicators />
            <RelatedResources />
          </div>

        </div>
      </div>

      {/* Code Downloads */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 pb-12">
        <EligibilityCodeDownloads />
      </div>

      {/* Footer */}
      <footer className="bg-card border-t-2 border-border mt-24">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-8">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div>UX4G Design System Platform • Service Pattern Library</div>
            <div>Government of India • Digital India Initiative</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ==================== CODE DOWNLOADS ====================

const ELIG_REACT_CODE = `import React, { useState } from 'react';

interface Question { id: string; text: string; type: 'yesno' | 'number' | 'select'; options?: string[]; }

export function EligibilityScreeningPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [result, setResult] = useState<'eligible' | 'ineligible' | null>(null);

  const questions: Question[] = [
    { id: 'citizen', text: 'Are you an Indian citizen?', type: 'yesno' },
    { id: 'age', text: 'What is your age?', type: 'number' },
    { id: 'income', text: 'Annual household income (₹)', type: 'select', options: ['Below 1 Lakh', '1-3 Lakhs', '3-5 Lakhs', '5-8 Lakhs', 'Above 8 Lakhs'] },
    { id: 'residence', text: 'Do you reside in the applying state?', type: 'yesno' },
  ];

  const handleAnswer = (value: string) => {
    const updated = { ...answers, [questions[step].id]: value };
    setAnswers(updated);
    if (step < questions.length - 1) { setStep(step + 1); }
    else {
      const eligible = updated.citizen === 'yes' && Number(updated.age) >= 18 && updated.residence === 'yes';
      setResult(eligible ? 'eligible' : 'ineligible');
    }
  };

  const q = questions[step];

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-card border border-border rounded-2xl p-4 sm:p-6 lg:p-8">
        <h1 className="text-2xl font-bold mb-2">Eligibility Check</h1>
        <p className="text-sm text-muted-foreground mb-6">Answer a few questions to check eligibility</p>
        {result === null ? (
          <div>
            <div className="flex gap-1 mb-6">{questions.map((_, i) => (<div key={i} className={\`h-1 flex-1 rounded \${i <= step ? 'bg-primary' : 'bg-muted'}\`} />))}</div>
            <p className="font-semibold mb-4">Q{step + 1}. {q.text}</p>
            {q.type === 'yesno' && <div className="flex gap-3"><button onClick={() => handleAnswer('yes')} className="flex-1 py-3 border border-border rounded-lg font-semibold hover:bg-green-50 hover:border-green-300">Yes</button><button onClick={() => handleAnswer('no')} className="flex-1 py-3 border border-border rounded-lg font-semibold hover:bg-red-50 hover:border-red-300">No</button></div>}
            {q.type === 'number' && <div><input type="number" placeholder="Enter value" className="w-full px-4 py-3 border border-border rounded-lg mb-3" id="num-input" /><button onClick={() => handleAnswer((document.getElementById('num-input') as HTMLInputElement).value)} className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold">Next</button></div>}
            {q.type === 'select' && <div className="space-y-2">{q.options?.map(o => (<button key={o} onClick={() => handleAnswer(o)} className="w-full py-3 border border-border rounded-lg text-left px-4 hover:bg-muted">{o}</button>))}</div>}
          </div>
        ) : (
          <div className="text-center py-6">
            <div className={\`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 \${result === 'eligible' ? 'bg-green-100' : 'bg-red-100'}\`}>
              {result === 'eligible' ? <span className="text-3xl">✓</span> : <span className="text-3xl">✗</span>}
            </div>
            <h2 className="text-xl font-bold">{result === 'eligible' ? 'You Are Eligible!' : 'Not Eligible'}</h2>
            <p className="text-sm text-muted-foreground mt-2">{result === 'eligible' ? 'You meet the criteria. Proceed to apply.' : 'You do not meet the eligibility criteria for this service.'}</p>
            <button onClick={() => { setStep(0); setAnswers({}); setResult(null); }} className="mt-4 px-6 py-2 border border-border rounded-lg text-sm font-semibold">Check Again</button>
          </div>
        )}
      </div>
    </div>
  );
}`;

const ELIG_ANGULAR_CODE = `import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Question { id: string; text: string; type: 'yesno' | 'number' | 'select'; options?: string[]; }

@Component({
  selector: 'ux4g-eligibility-screening',
  standalone: true,
  imports: [CommonModule],
  template: \`
    <div class="min-h-screen bg-background flex items-center justify-center p-4">
      <div class="w-full max-w-md bg-card border border-border rounded-2xl p-4 sm:p-6 lg:p-8">
        <h1 class="text-2xl font-bold mb-2">Eligibility Check</h1>
        <p class="text-sm text-muted-foreground mb-6">Answer a few questions</p>
        <div *ngIf="!result">
          <div class="flex gap-1 mb-6"><div *ngFor="let q of questions; let i=index" [class]="'h-1 flex-1 rounded ' + (i <= step ? 'bg-primary' : 'bg-muted')"></div></div>
          <p class="font-semibold mb-4">Q{{step+1}}. {{questions[step].text}}</p>
          <div *ngIf="questions[step].type==='yesno'" class="flex gap-3">
            <button (click)="answer('yes')" class="flex-1 py-3 border border-border rounded-lg font-semibold">Yes</button>
            <button (click)="answer('no')" class="flex-1 py-3 border border-border rounded-lg font-semibold">No</button>
          </div>
          <div *ngIf="questions[step].type==='select'" class="space-y-2">
            <button *ngFor="let o of questions[step].options" (click)="answer(o)" class="w-full py-3 border border-border rounded-lg text-left px-4">{{o}}</button>
          </div>
        </div>
        <div *ngIf="result" class="text-center py-6">
          <h2 class="text-xl font-bold">{{result === 'eligible' ? 'You Are Eligible!' : 'Not Eligible'}}</h2>
          <button (click)="reset()" class="mt-4 px-6 py-2 border border-border rounded-lg text-sm font-semibold">Check Again</button>
        </div>
      </div>
    </div>
  \`
})
export class EligibilityScreeningComponent {
  step = 0;
  answers: Record<string, string> = {};
  result: 'eligible' | 'ineligible' | null = null;
  questions: Question[] = [
    { id: 'citizen', text: 'Are you an Indian citizen?', type: 'yesno' },
    { id: 'age', text: 'What is your age?', type: 'number' },
    { id: 'income', text: 'Annual household income?', type: 'select', options: ['Below 1L', '1-3L', '3-5L', '5-8L', 'Above 8L'] },
    { id: 'residence', text: 'Reside in applying state?', type: 'yesno' },
  ];
  answer(val: string) {
    this.answers[this.questions[this.step].id] = val;
    if (this.step < this.questions.length - 1) this.step++;
    else this.result = this.answers['citizen'] === 'yes' && this.answers['residence'] === 'yes' ? 'eligible' : 'ineligible';
  }
  reset() { this.step = 0; this.answers = {}; this.result = null; }
}`;

const ELIG_HTML_CODE = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Eligibility Screening — UX4G</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: system-ui, sans-serif; background: #f8fafc; min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 1rem; }
    .card { width: 100%; max-width: 420px; background: #fff; border: 1px solid #e2e8f0; border-radius: 1rem; padding: 2rem; }
    h1 { font-size: 1.5rem; font-weight: 700; margin-bottom: .25rem; }
    .sub { font-size: .875rem; color: #64748b; margin-bottom: 1.5rem; }
    .progress { display: flex; gap: .25rem; margin-bottom: 1.5rem; }
    .progress div { height: 4px; flex: 1; border-radius: 2px; background: #e2e8f0; }
    .progress div.active { background: #005196; }
    .question { font-weight: 600; margin-bottom: 1rem; }
    .btn-group { display: flex; gap: .75rem; }
    .btn { flex: 1; padding: .75rem; border: 1px solid #e2e8f0; border-radius: .5rem; font-weight: 600; cursor: pointer; background: #fff; }
    .btn:hover { background: #f1f5f9; }
    .result { text-align: center; padding: 2rem 0; }
    .result h2 { font-size: 1.25rem; font-weight: 700; }
    .result p { color: #64748b; margin-top: .5rem; font-size: .875rem; }
    .hidden { display: none; }
  </style>
</head>
<body>
  <div class="card">
    <h1>Eligibility Check</h1>
    <p class="sub">Answer a few questions</p>
    <div id="quiz">
      <div class="progress" id="progress"></div>
      <p class="question" id="question"></p>
      <div class="btn-group" id="options"></div>
    </div>
    <div id="result" class="result hidden"></div>
  </div>
  <script>
    const qs = [
      { id:'citizen', text:'Are you an Indian citizen?', type:'yesno' },
      { id:'age', text:'Are you 18 or older?', type:'yesno' },
      { id:'residence', text:'Do you reside in the applying state?', type:'yesno' },
    ];
    let step=0, ans={};
    function render() {
      document.getElementById('progress').innerHTML = qs.map((_,i)=>'<div class="'+(i<=step?'active':'')+'"></div>').join('');
      document.getElementById('question').textContent = 'Q'+(step+1)+'. '+qs[step].text;
      document.getElementById('options').innerHTML = '<button class="btn" onclick="answer(\\'yes\\')">Yes</button><button class="btn" onclick="answer(\\'no\\')">No</button>';
    }
    function answer(v) {
      ans[qs[step].id]=v;
      if(step<qs.length-1){step++;render();}
      else{
        const ok=ans.citizen==='yes'&&ans.age==='yes'&&ans.residence==='yes';
        document.getElementById('quiz').classList.add('hidden');
        document.getElementById('result').classList.remove('hidden');
        document.getElementById('result').innerHTML='<h2>'+(ok?'You Are Eligible!':'Not Eligible')+'</h2><p>'+(ok?'Proceed to apply.':'You do not meet the criteria.')+'</p><button class="btn" onclick="reset()" style="margin-top:1rem;flex:none;padding:.5rem 1.5rem">Check Again</button>';
      }
    }
    function reset(){step=0;ans={};document.getElementById('quiz').classList.remove('hidden');document.getElementById('result').classList.add('hidden');render();}
    render();
  </script>
</body>
</html>`;

function EligibilityCodeDownloads() {
  const [copiedId, setCopiedId] = React.useState<string | null>(null);
  const copyToClipboard = (code: string, id: string) => { navigator.clipboard.writeText(code); setCopiedId(id); setTimeout(() => setCopiedId(null), 2000); };
  const downloadCode = (code: string, filename: string) => { const blob = new Blob([code], { type: 'text/plain' }); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = filename; a.click(); URL.revokeObjectURL(url); };
  const lanes = [
    { key: 'react', title: 'React', desc: 'TypeScript + Multi-Step Quiz', code: ELIG_REACT_CODE, filename: 'EligibilityScreeningPage.tsx' },
    { key: 'angular', title: 'Angular', desc: 'Standalone Component', code: ELIG_ANGULAR_CODE, filename: 'eligibility-screening.component.ts' },
    { key: 'html', title: 'HTML / CSS / JS', desc: 'No framework needed', code: ELIG_HTML_CODE, filename: 'eligibility-screening.html' },
  ];
  return (
    <section id="code-downloads" className="space-y-6 scroll-mt-24 mt-12">
      <div className="border-l-4 border-primary pl-4">
        <h2 className="text-2xl font-bold text-foreground">Code Downloads</h2>
        <p className="text-muted-foreground mt-1">Production-ready Eligibility Screening implementations.</p>
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
                <div tabIndex={0} role="region" aria-label={`${lane.title} code preview`} className="rounded-xl border border-border bg-slate-950 p-3 text-xs text-slate-100 shadow-inner max-h-64 overflow-auto">
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

// ==================== PATTERN OVERVIEW ====================

function PatternOverview() {
  return (
    <section id="overview" className="space-y-6">
      <SectionHeader title="Pattern Overview" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <DocModule>
          <ModuleHeader title="Problem the Pattern Solves" />
          <ModuleContent>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Users waste time and effort filling lengthy applications only to discover they're ineligible. 
              Departments receive incomplete or ineligible applications, wasting processing resources.
            </p>
            <div className="space-y-3">
              <ProblemSolutionBlock
                icon={<XCircle size={18} className="text-red-600" />}
                problem="User fills entire application before learning they're ineligible"
                solution="Pre-screen with 3-5 simple questions before application starts"
              />
              <ProblemSolutionBlock
                icon={<Clock size={18} className="text-orange-600" />}
                problem="Users don't know what information they need upfront"
                solution="Clarify eligibility criteria transparently before commitment"
              />
              <ProblemSolutionBlock
                icon={<AlertCircle size={18} className="text-blue-600" />}
                problem="Departments spend time rejecting clearly ineligible applications"
                solution="Rule-based screening reduces processing burden by 30-40%"
              />
            </div>
          </ModuleContent>
        </DocModule>

        <DocModule>
          <ModuleHeader title="Primary User Groups" />
          <ModuleContent>
            <div className="space-y-4">
              <UserGroup
                icon={<Users size={18} className="text-blue-600" />}
                name="Citizens (Self-Assessment)"
                description="Individuals checking if they qualify before investing time"
                percentage="70%"
              />
              <UserGroup
                icon={<FileText size={18} className="text-purple-600" />}
                name="Service Centers (Guided)"
                description="CSC operators helping citizens understand eligibility"
                percentage="25%"
              />
              <UserGroup
                icon={<Shield size={18} className="text-orange-600" />}
                name="Policy Teams"
                description="Government staff defining and updating eligibility rules"
                percentage="5%"
              />
            </div>
          </ModuleContent>
        </DocModule>
      </div>

      <DocModule>
        <ModuleHeader title="Typical Government Use Cases" />
        <ModuleContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <UseCaseCard
              title="Social Welfare Programs"
              examples={[
                "Scholarship eligibility (age, income, category)",
                "Pension scheme qualification (age, occupation)",
                "Subsidy programs (income threshold, assets)",
                "Housing schemes (family income, current housing)"
              ]}
            />
            <UseCaseCard
              title="License and Permits"
              examples={[
                "Driving license (age, medical fitness)",
                "Business license (location, activity type)",
                "Arms license (age, criminal record)",
                "Professional certifications (education, experience)"
              ]}
            />
            <UseCaseCard
              title="Benefits and Services"
              examples={[
                "Senior citizen benefits (age verification)",
                "Disability benefits (disability certificate)",
                "Student concessions (age, enrollment status)",
                "Agricultural subsidies (land ownership, crop type)"
              ]}
            />
          </div>
        </ModuleContent>
      </DocModule>

      <DocModule>
        <ModuleHeader title="When to Use This Pattern" />
        <ModuleContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle size={18} className="text-green-600" />
                <h3 className="font-bold text-sm text-foreground">Use When:</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-1.5 flex-shrink-0"></div>
                  <span>Service has clear, rule-based eligibility criteria (age, income, location)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-1.5 flex-shrink-0"></div>
                  <span>Full application is complex or time-consuming (10+ minutes)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-1.5 flex-shrink-0"></div>
                  <span>High ineligibility rate (over 20%) wastes user and department time</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-1.5 flex-shrink-0"></div>
                  <span>Eligibility can be determined with minimal information (3-5 questions)</span>
                </li>
              </ul>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-3">
                <XCircle size={18} className="text-red-600" />
                <h3 className="font-bold text-sm text-foreground">Don't Use When:</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-1.5 flex-shrink-0"></div>
                  <span>Eligibility requires manual verification or complex assessment</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-1.5 flex-shrink-0"></div>
                  <span>Application itself is simple (1-2 steps, under 5 minutes)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-1.5 flex-shrink-0"></div>
                  <span>Eligibility criteria are subjective or case-by-case</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-1.5 flex-shrink-0"></div>
                  <span>Service is universally available (no eligibility restrictions)</span>
                </li>
              </ul>
            </div>
          </div>
        </ModuleContent>
      </DocModule>
    </section>
  );
}

// ==================== SCREENING LOGIC ====================

function ScreeningLogic() {
  return (
    <section id="logic" className="space-y-6">
      <SectionHeader title="Screening Logic Overview" />

      <DocModule>
        <ModuleHeader title="Rule-Based Decision Framework" />
        <ModuleContent>
          <div className="space-y-6">
            <div className="bg-purple-50 dark:bg-purple-950/30 border-2 border-purple-200 dark:border-purple-800 rounded-lg p-6">
              <div className="flex items-start gap-3 mb-4">
                <Settings size={24} className="text-purple-600 flex-shrink-0" />
                <div>
                  <div className="font-bold text-foreground mb-2">Eligibility Rule Types</div>
                  <div className="text-sm text-muted-foreground">
                    Screening rules are typically based on combinations of AND/OR logic across multiple criteria.
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <RuleTypeCard
                  type="Mandatory (AND)"
                  description="All conditions must be true"
                  example="Age ≥ 18 AND Indian citizen AND Valid Aadhaar"
                />
                <RuleTypeCard
                  type="Alternative (OR)"
                  description="At least one condition must be true"
                  example="Income below ₹2L/year OR BPL card holder"
                />
                <RuleTypeCard
                  type="Exclusionary (NOT)"
                  description="Specific conditions disqualify"
                  example="NOT government employee"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-2 border-border rounded-lg p-6 bg-card">
                <h3 className="font-bold text-sm text-foreground mb-4">Example: Scholarship Eligibility</h3>
                <div className="space-y-3 text-sm">
                  <LogicRule
                    condition="Age"
                    operator="between"
                    value="16-25 years"
                    required={true}
                  />
                  <LogicRule
                    condition="Family Income"
                    operator="less than"
                    value="₹2,00,000/year"
                    required={true}
                  />
                  <LogicRule
                    condition="Category"
                    operator="in"
                    value="SC/ST/OBC/EWS"
                    required={false}
                  />
                  <LogicRule
                    condition="Previous Marks"
                    operator="greater than"
                    value="60%"
                    required={true}
                  />
                  <LogicRule
                    condition="Current Student"
                    operator="equals"
                    value="Yes"
                    required={true}
                  />
                </div>
              </div>

              <div className="border-2 border-border rounded-lg p-6 bg-card">
                <h3 className="font-bold text-sm text-foreground mb-4">Example: Senior Citizen Benefits</h3>
                <div className="space-y-3 text-sm">
                  <LogicRule
                    condition="Age"
                    operator="greater than or equal"
                    value="60 years"
                    required={true}
                  />
                  <LogicRule
                    condition="Citizenship"
                    operator="equals"
                    value="Indian"
                    required={true}
                  />
                  <LogicRule
                    condition="Existing Pension"
                    operator="not receiving"
                    value="Government pension"
                    required={true}
                  />
                  <LogicRule
                    condition="BPL Status"
                    operator="equals"
                    value="Yes (optional for additional benefits)"
                    required={false}
                  />
                </div>
              </div>
            </div>
          </div>
        </ModuleContent>
      </DocModule>

      <DocModule>
        <ModuleHeader title="Question Sequence Strategy" />
        <ModuleContent>
          <div className="space-y-4">
            <SequenceStrategy
              number="1"
              strategy="Start with Knock-Out Questions"
              description="Ask binary yes/no questions that immediately disqualify if answered incorrectly"
              example="Are you an Indian citizen? (If No → immediately ineligible)"
            />
            <SequenceStrategy
              number="2"
              strategy="Progress from Simple to Complex"
              description="Begin with easy questions (age, location) before asking about income or documentation"
              example="Age → State → Income bracket → Supporting documents available"
            />
            <SequenceStrategy
              number="3"
              strategy="Minimize Question Count"
              description="Limit to 3-5 questions maximum. Each additional question increases abandonment rate by 5-10%"
              example="3 questions = 85% completion, 7 questions = 60% completion"
            />
            <SequenceStrategy
              number="4"
              strategy="Use Conditional Branching Sparingly"
              description="Only branch when absolutely necessary. Linear flows are easier to understand and complete"
              example="If age under 18 → skip income questions (assume parent's income applies)"
            />
            <SequenceStrategy
              number="5"
              strategy="Provide Context Before Each Question"
              description="Explain why you're asking and how it affects eligibility"
              example="We need your age to verify you meet the minimum age requirement of 18 years"
            />
          </div>
        </ModuleContent>
      </DocModule>
    </section>
  );
}

// ==================== JOURNEY FLOW ====================

function JourneyFlow() {
  return (
    <section id="journey" className="space-y-6">
      <SectionHeader title="User Journey and Service Flow" />

      <DocModule>
        <ModuleHeader title="End-to-End Flow Diagram" />
        <ModuleContent>
          <div className="space-y-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              <FlowStep number="01" label="Entry" status="entry" />
              <FlowStep number="02" label="Overview" status="active" />
              <FlowStep number="03" label="Question 1" status="active" />
              <FlowStep number="04" label="Question 2" status="active" />
              <FlowStep number="05" label="Question 3" status="active" />
            </div>
            <div className="flex items-center justify-center">
              <ArrowRight className="text-muted-foreground" size={24} />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              <FlowStep number="06" label="Processing" status="info" />
              <FlowStep number="07" label="Result" status="decision" />
              <FlowStep number="08a" label="Eligible" status="success" />
              <FlowStep number="08b" label="Partial" status="warning" />
              <FlowStep number="08c" label="Not Eligible" status="error" />
            </div>
            <div className="flex items-center justify-center">
              <ArrowRight className="text-muted-foreground" size={24} />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              <FlowStep number="09" label="Next Steps" status="info" />
              <FlowStep number="10" label="Proceed / Restart" status="optional" />
              <FlowStep number="11" label="Alternative Services" status="optional" />
              <div className="col-span-2"></div>
            </div>
          </div>
        </ModuleContent>
      </DocModule>

      <DocModule>
        <ModuleHeader title="Outcome Paths and User Actions" />
        <ModuleContent>
          <div className="space-y-4">
            <OutcomePathBlock
              outcome="Eligible"
              color="green"
              icon={<CheckCircle size={20} className="text-green-600" />}
              description="User meets all mandatory criteria"
              userActions={[
                "Proceed to full application",
                "Save eligibility result",
                "Schedule appointment (if applicable)",
                "View required documents"
              ]}
            />
            <OutcomePathBlock
              outcome="Partially Eligible"
              color="yellow"
              icon={<AlertCircle size={20} className="text-yellow-600" />}
              description="User meets some criteria but not all, or qualifies for limited benefits"
              userActions={[
                "View which criteria are met/unmet",
                "Explore partial benefit options",
                "Understand what's needed to become fully eligible",
                "Proceed with partial application if allowed"
              ]}
            />
            <OutcomePathBlock
              outcome="Not Eligible"
              color="red"
              icon={<XCircle size={20} className="text-red-600" />}
              description="User does not meet mandatory criteria"
              userActions={[
                "Understand clearly why they're ineligible",
                "View alternative services they may qualify for",
                "Save result for future reference",
                "Contact support if they believe there's an error"
              ]}
            />
          </div>
        </ModuleContent>
      </DocModule>
    </section>
  );
}

// ==================== PAGE DESIGNS ====================

function PageDesigns() {
  return (
    <section id="pages" className="space-y-6">
      <SectionHeader title="Example Page Designs" />

      {/* Entry Page */}
      <DocModule>
        <ModuleHeader title="Page 1: Entry and Overview" />
        <ModuleContent>
          <div className="border-2 border-border rounded-lg overflow-hidden bg-card">
            <div className="bg-primary text-white p-4 sm:p-6 lg:p-8">
              <div className="max-w-3xl">
                <div className="text-sm mb-2 text-blue-200">Check Your Eligibility</div>
                <h2 className="text-3xl font-bold mb-4">PM Scholarship Scheme Eligibility Check</h2>
                <p className="text-lg text-blue-100 leading-relaxed mb-6">
                  Answer a few simple questions to check if you qualify for this scholarship before starting the application.
                </p>
                <div className="flex items-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>Takes 2-3 minutes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <HelpCircle size={16} />
                    <span>4 simple questions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield size={16} />
                    <span>No personal data stored</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-8 space-y-6">
              <div className="bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <Info size={24} className="text-blue-600 flex-shrink-0" />
                  <div>
                    <div className="font-bold text-foreground mb-2">Why Check Eligibility First?</div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Save time – know if you qualify before filling the full application</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Get clarity – understand what documents you'll need if eligible</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Explore alternatives – discover other schemes you may qualify for</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <InfoBox icon={<Users size={20} />} title="Who can apply" text="Students aged 18-25 with family income below ₹6L/year" />
                <InfoBox icon={<FileText size={20} />} title="Basic criteria" text="Age, income, education level, and enrollment status" />
                <InfoBox icon={<Clock size={20} />} title="Instant result" text="Know immediately if you're eligible" />
              </div>
              <div className="flex items-center gap-4">
                <button className="px-8 py-4 bg-primary text-white font-bold rounded-lg hover:opacity-90 transition-colors">
                  Start Eligibility Check
                </button>
                <button className="px-8 py-4 bg-muted text-foreground font-bold rounded-lg hover:bg-gray-200 transition-colors">
                  Skip and Apply Directly
                </button>
              </div>
              <div className="text-sm text-muted-foreground pt-4 border-t border-border">
                <strong>Note:</strong> This is a preliminary check only. Final eligibility will be determined during application review.
              </div>
            </div>
          </div>
          <PageAnnotation items={[
            "Clear value proposition: why check eligibility first",
            "Expected time prominently displayed (2-3 minutes)",
            "Privacy assurance: no personal data stored",
            "Option to skip check and apply directly (user choice)",
            "Disclaimer that this is preliminary, not final determination"
          ]} />
        </ModuleContent>
      </DocModule>

      {/* Question Page */}
      <DocModule>
        <ModuleHeader title="Page 2: Question Step with Context" />
        <ModuleContent>
          <div className="border-2 border-border rounded-lg overflow-hidden bg-card">
            <div className="bg-background border-b-2 border-border p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-foreground">Question 2 of 4</h2>
                <div className="text-sm text-muted-foreground">Eligibility Check</div>
              </div>
              <ProgressBar steps={4} current={2} />
            </div>
            <div className="p-8 space-y-6">
              <div className="bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-600 p-6 rounded-r-lg">
                <div className="flex items-start gap-3">
                  <Info size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-muted-foreground">
                    <strong>Why we ask this:</strong> Income verification is required to ensure scholarships reach those who need them most. 
                    This information helps us determine if you qualify for income-based benefits.
                  </div>
                </div>
              </div>
              
              <div>
                <label className="block text-lg font-bold text-foreground mb-4">
                  What is your annual family income?
                </label>
                <div className="space-y-3">
                  <RadioOption
                    value="below-2l"
                    label="Below ₹2,00,000 per year"
                    selected={false}
                  />
                  <RadioOption
                    value="2l-4l"
                    label="₹2,00,000 - ₹4,00,000 per year"
                    selected={false}
                  />
                  <RadioOption
                    value="4l-6l"
                    label="₹4,00,000 - ₹6,00,000 per year"
                    selected={true}
                  />
                  <RadioOption
                    value="above-6l"
                    label="Above ₹6,00,000 per year"
                    selected={false}
                  />
                </div>
                <div className="mt-4 text-sm text-muted-foreground">
                  <strong>Note:</strong> Family income includes salary, business income, agricultural income, and other sources 
                  from all earning members living together.
                </div>
              </div>

              <div className="flex items-center justify-between pt-6 border-t-2 border-border">
                <button className="px-6 py-3 bg-card border-2 border-border text-muted-foreground font-medium rounded-lg hover:bg-background flex items-center gap-2">
                  <ArrowLeft size={18} />
                  Previous Question
                </button>
                <button className="px-8 py-3 bg-primary text-white font-bold rounded-lg hover:opacity-90 flex items-center gap-2">
                  Next Question
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
          <PageAnnotation items={[
            "Progress indicator shows current question number (2 of 4)",
            "Context box explains WHY question is asked (builds trust)",
            "Clear, simple answer options (radio buttons for single choice)",
            "Help text defines terminology (family income)",
            "Easy navigation: Previous and Next buttons clearly labeled"
          ]} />
        </ModuleContent>
      </DocModule>

      {/* Branching Example */}
      <DocModule>
        <ModuleHeader title="Page 3: Conditional Branching Path" />
        <ModuleContent>
          <div className="border-2 border-border rounded-lg overflow-hidden bg-card">
            <div className="bg-background border-b-2 border-border p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-foreground">Question 3 of 4</h2>
                <div className="text-sm text-muted-foreground">Eligibility Check</div>
              </div>
              <ProgressBar steps={4} current={3} />
            </div>
            <div className="p-8 space-y-6">
              <div className="bg-purple-50 dark:bg-purple-950/30 border-l-4 border-purple-600 p-6 rounded-r-lg">
                <div className="flex items-start gap-3">
                  <GitBranch size={20} className="text-purple-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-muted-foreground">
                    <strong>Conditional Question:</strong> This question appears because you selected "18-25 years" in Question 1. 
                    Students in this age group must be currently enrolled to qualify.
                  </div>
                </div>
              </div>
              
              <div>
                <label className="block text-lg font-bold text-foreground mb-4">
                  Are you currently enrolled in an educational institution?
                </label>
                <div className="space-y-3">
                  <RadioOption
                    value="yes-school"
                    label="Yes, in school (Class 11-12)"
                    selected={false}
                  />
                  <RadioOption
                    value="yes-college"
                    label="Yes, in college/university (undergraduate)"
                    selected={true}
                  />
                  <RadioOption
                    value="yes-postgrad"
                    label="Yes, in postgraduate program"
                    selected={false}
                  />
                  <RadioOption
                    value="no"
                    label="No, not currently enrolled"
                    selected={false}
                  />
                </div>
                <div className="mt-4 bg-yellow-50 dark:bg-yellow-950/30 border border-yellow-300 rounded-lg p-4">
                  <div className="flex items-start gap-2 text-sm text-muted-foreground">
                    <AlertCircle size={16} className="text-yellow-600 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Important:</strong> If you're not currently enrolled, you may not qualify for this student scholarship. 
                      However, you may be eligible for other skill development or employment schemes.
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-6 border-t-2 border-border">
                <button className="px-6 py-3 bg-card border-2 border-border text-muted-foreground font-medium rounded-lg hover:bg-background flex items-center gap-2">
                  <ArrowLeft size={18} />
                  Previous Question
                </button>
                <button className="px-8 py-3 bg-primary text-white font-bold rounded-lg hover:opacity-90 flex items-center gap-2">
                  Next Question
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
          <PageAnnotation items={[
            "Purple info box explains why this question appears (conditional logic)",
            "Warning box previews potential outcome (not enrolled = may not qualify)",
            "Helps user understand consequences before final submission",
            "Maintains transparency in decision-making process",
            "Offers hope (alternative schemes mentioned) even if this path fails"
          ]} />
        </ModuleContent>
      </DocModule>

      {/* Eligible Result */}
      <DocModule>
        <ModuleHeader title="Page 4: Eligible Result (Positive Outcome)" />
        <ModuleContent>
          <div className="border-2 border-border rounded-lg overflow-hidden bg-card">
            <div className="bg-green-600 text-white p-12 text-center">
              <div className="w-20 h-20 bg-card rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={48} className="text-green-600" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Congratulations! You Are Eligible</h2>
              <p className="text-lg text-green-100">Based on your responses, you meet all eligibility criteria for the PM Scholarship Scheme.</p>
            </div>
            <div className="p-8 space-y-6">
              <div className="bg-green-50 dark:bg-green-950/30 border-2 border-green-200 dark:border-green-800 rounded-lg p-6">
                <div className="font-bold text-foreground mb-3">Criteria You Meet:</div>
                <div className="space-y-2">
                  <CriteriaCheck met={true} text="Age: 22 years (Required: 18-25 years) ✓" />
                  <CriteriaCheck met={true} text="Income: ₹5,50,000/year (Required: Below ₹6,00,000/year) ✓" />
                  <CriteriaCheck met={true} text="Education: College undergraduate (Required: Currently enrolled) ✓" />
                  <CriteriaCheck met={true} text="Previous Marks: 75% (Required: Above 60%) ✓" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <NextStepCard
                  icon={<FileText size={24} className="text-blue-600" />}
                  title="Next Step: Complete Application"
                  description="You can now proceed to fill the full application form with confidence."
                />
                <NextStepCard
                  icon={<Clock size={24} className="text-orange-600" />}
                  title="Processing Time"
                  description="Once submitted, your application will be processed within 15 working days."
                />
              </div>

              <div className="bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-600 p-6 rounded-r-lg">
                <div className="font-bold text-foreground mb-3">Documents You Will Need:</div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Age proof (Aadhaar card, Birth certificate)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Income certificate (issued within last 6 months)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Educational certificates (10th, 12th, current semester mark sheets)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Enrollment certificate from current institution</span>
                  </li>
                </ul>
              </div>

              <div className="flex items-center justify-center gap-4 pt-6">
                <button className="px-10 py-4 bg-primary text-white font-bold rounded-lg hover:opacity-90 flex items-center gap-2">
                  <CheckCircle size={20} />
                  Proceed to Application
                </button>
                <button className="px-8 py-3 bg-card border-2 border-border text-muted-foreground font-bold rounded-lg hover:bg-background">
                  Save Result
                </button>
              </div>
            </div>
          </div>
          <PageAnnotation items={[
            "Positive, encouraging tone with visual success state (green)",
            "Clear summary of which criteria user meets (transparency)",
            "Transparent next steps and expected timeline",
            "Document list provided upfront (no surprises later)",
            "Option to save result for later reference",
            "Primary CTA is prominent and action-oriented"
          ]} />
        </ModuleContent>
      </DocModule>

      {/* Not Eligible Result */}
      <DocModule>
        <ModuleHeader title="Page 5: Not Eligible Result (Empathetic Communication)" />
        <ModuleContent>
          <div className="border-2 border-border rounded-lg overflow-hidden bg-card">
            <div className="bg-gray-700 text-white p-12 text-center">
              <div className="w-20 h-20 bg-card rounded-full flex items-center justify-center mx-auto mb-6">
                <XCircle size={48} className="text-muted-foreground" />
              </div>
              <h2 className="text-3xl font-bold mb-4">You Are Not Eligible at This Time</h2>
              <p className="text-lg text-gray-200">
                Based on your responses, you do not currently meet all eligibility criteria for this scholarship.
              </p>
            </div>
            <div className="p-8 space-y-6">
              <div className="bg-red-50 dark:bg-red-950/30 border-2 border-red-200 dark:border-red-800 rounded-lg p-6">
                <div className="font-bold text-foreground mb-3">Criteria Not Met:</div>
                <div className="space-y-2">
                  <CriteriaCheck met={true} text="Age: 22 years (Required: 18-25 years) ✓" />
                  <CriteriaCheck met={false} text="Income: ₹7,50,000/year (Required: Below ₹6,00,000/year) ✗" />
                  <CriteriaCheck met={true} text="Education: College undergraduate (Required: Currently enrolled) ✓" />
                  <CriteriaCheck met={true} text="Previous Marks: 75% (Required: Above 60%) ✓" />
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-600 p-6 rounded-r-lg">
                <div className="flex items-start gap-3">
                  <Info size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-foreground mb-2">What This Means:</div>
                    <div className="text-sm text-muted-foreground">
                      Your annual family income exceeds the threshold for this particular scholarship. The PM Scholarship Scheme 
                      is designed for students from economically weaker sections. However, you may qualify for other merit-based 
                      scholarships or educational loans with subsidized interest rates.
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-2 border-border rounded-lg p-6 bg-card">
                <div className="font-bold text-foreground mb-4">Alternative Schemes You May Qualify For:</div>
                <div className="space-y-3">
                  <AlternativeService
                    title="Merit-Based Scholarship (No Income Limit)"
                    description="For students with 75%+ marks, regardless of family income. Application deadline: 30 April 2026"
                  />
                  <AlternativeService
                    title="Educational Loan with Subsidized Interest"
                    description="Government-backed loans for higher education at 4% interest rate (50% subsidy)"
                  />
                  <AlternativeService
                    title="State-Level Talent Scholarship"
                    description="Check your state's scholarship portal for additional opportunities"
                  />
                </div>
              </div>

              <div className="flex items-center justify-center gap-4 pt-6">
                <button className="px-8 py-3 bg-primary text-white font-bold rounded-lg hover:opacity-90">
                  Explore Alternative Schemes
                </button>
                <button className="px-8 py-3 bg-card border-2 border-border text-muted-foreground font-bold rounded-lg hover:bg-background flex items-center gap-2">
                  <RefreshCw size={18} />
                  Start Over
                </button>
              </div>

              <div className="bg-background border-2 border-border rounded-lg p-4 text-center">
                <div className="text-sm text-muted-foreground">
                  <strong>Need help or believe this result is incorrect?</strong><br/>
                  Contact our support team at <span className="font-bold text-blue-600">1800-XXX-XXXX</span> or 
                  email <span className="font-bold text-blue-600">scholarship@education.gov.in</span>
                </div>
              </div>
            </div>
          </div>
          <PageAnnotation items={[
            "Empathetic, respectful tone (NEVER punitive or dismissive)",
            "Clear explanation of which criteria NOT met and WHY (transparency)",
            "Contextual explanation: why income limit exists (fairness)",
            "Helpful alternatives offered (3 concrete options with deadlines)",
            "Clear support contact if user believes result is incorrect (recourse)",
            "Option to restart eligibility check (user control)",
            "Neutral gray color scheme (not harsh red) for negative result"
          ]} />
        </ModuleContent>
      </DocModule>

      {/* Next Steps */}
      <DocModule>
        <ModuleHeader title="Page 6: Next-Step Recommendations" />
        <ModuleContent>
          <div className="border-2 border-border rounded-lg overflow-hidden bg-card">
            <div className="bg-background border-b-2 border-border p-6">
              <h2 className="text-xl font-bold text-foreground mb-2">Your Next Steps</h2>
              <p className="text-sm text-muted-foreground">Based on your eligibility result, here's what you should do next.</p>
            </div>
            <div className="p-8 space-y-6">
              <div className="bg-green-50 dark:bg-green-950/30 border-2 border-green-200 dark:border-green-800 rounded-lg p-6">
                <div className="flex items-start gap-3 mb-4">
                  <CheckCircle size={24} className="text-green-600 flex-shrink-0" />
                  <div>
                    <div className="font-bold text-lg text-foreground mb-2">You Are Eligible!</div>
                    <div className="text-sm text-muted-foreground">
                      Reference Number: <span className="font-mono font-bold">ELG-2026-123456</span> 
                      (Save this for your records)
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <NextStepBlock
                  number="1"
                  title="Gather Required Documents"
                  description="Collect all necessary documents before starting your application. This will save time."
                  action="View Complete Document List"
                />
                <NextStepBlock
                  number="2"
                  title="Complete Full Application"
                  description="Your eligibility check is valid for 90 days. Apply before 15 June 2026."
                  action="Start Application Now"
                />
                <NextStepBlock
                  number="3"
                  title="Track Your Application"
                  description="Once submitted, you can track the status online using your application reference number."
                  action="Go to Application Status Page"
                />
              </div>

              <div className="bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-600 p-6 rounded-r-lg">
                <div className="font-bold text-foreground mb-3">Important Deadlines:</div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-start gap-2">
                    <Calendar size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Eligibility valid until:</strong> 15 June 2026</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Calendar size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Application deadline:</strong> 30 June 2026</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Calendar size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Scholarship disbursement:</strong> September 2026 (if approved)</span>
                  </div>
                </div>
              </div>

              <div className="border-2 border-border rounded-lg p-6 bg-card">
                <div className="font-bold text-foreground mb-4">Need Assistance?</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ContactOption
                    icon={<Phone size={20} className="text-blue-600" />}
                    title="Helpline"
                    detail="1800-XXX-XXXX (Mon-Sat, 9 AM - 6 PM)"
                  />
                  <ContactOption
                    icon={<Mail size={20} className="text-blue-600" />}
                    title="Email Support"
                    detail="scholarship@education.gov.in"
                  />
                </div>
              </div>

              <div className="flex items-center justify-center gap-4 pt-6">
                <button className="px-10 py-4 bg-primary text-white font-bold rounded-lg hover:opacity-90">
                  Proceed to Application
                </button>
                <button className="px-8 py-3 bg-card border-2 border-border text-muted-foreground font-bold rounded-lg hover:bg-background">
                  Download Eligibility Certificate
                </button>
              </div>
            </div>
          </div>
          <PageAnnotation items={[
            "Reference number provided for user records (accountability)",
            "Sequential next steps (1, 2, 3) with clear actions",
            "Important deadlines prominently displayed with dates",
            "Multiple contact options (phone, email) with timings",
            "Option to download proof of eligibility check",
            "Clear primary action (Proceed to Application)"
          ]} />
        </ModuleContent>
      </DocModule>
    </section>
  );
}

// ==================== BRANCHING DECISIONS ====================

function BranchingDecisions() {
  return (
    <section id="branching" className="space-y-6">
      <SectionHeader title="Conditional Branching and Decision Logic" />

      <DocModule>
        <ModuleHeader title="Decision Tree Example" />
        <ModuleContent>
          <div className="bg-background border-2 border-border rounded-lg p-4 sm:p-6 lg:p-8">
            <div className="space-y-6">
              <DecisionNode
                question="Are you an Indian citizen?"
                yesPath="Continue to Q2 (Age verification)"
                noPath="Ineligible → Show alternative services for foreign nationals/NRIs"
                critical={true}
              />
              <DecisionNode
                question="What is your age?"
                yesPath="18-25: Continue to Q3 (Income) | 26-60: Check different schemes | 60+: Redirect to senior citizen benefits"
                noPath="Under 18: Check parent/guardian eligibility pathway or wait until 18"
                critical={false}
              />
              <DecisionNode
                question="What is your annual family income?"
                yesPath="Below ₹2L: Fully eligible (priority category) | ₹2L-₹6L: Eligible | Above ₹6L: Not eligible for this scheme"
                noPath="N/A"
                critical={true}
              />
              <DecisionNode
                question="Are you currently enrolled as a student?"
                yesPath="Yes: Continue to final check | No: Not eligible for student scholarship, redirect to skill development"
                noPath="N/A"
                critical={true}
              />
            </div>
          </div>
        </ModuleContent>
      </DocModule>

      <DocModule>
        <ModuleHeader title="Branching Logic Best Practices" />
        <ModuleContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <BestPracticeCard
              type="Do"
              icon={<ThumbsUp size={18} className="text-green-600" />}
              practices={[
                "Use branching for knock-out questions (citizenship, age minimums)",
                "Skip irrelevant questions based on previous answers",
                "Show progress even when questions are skipped",
                "Explain why a question was skipped or why it appears",
                "Keep branching logic simple (max 2-3 levels deep)"
              ]}
            />
            <BestPracticeCard
              type="Don't"
              icon={<ThumbsDown size={18} className="text-red-600" />}
              practices={[
                "Don't create complex nested branching (confuses users)",
                "Don't hide progress from users (always show where they are)",
                "Don't skip questions without explanation",
                "Don't branch for convenience—only when truly necessary",
                "Don't use branching to collect unnecessary data"
              ]}
            />
          </div>
        </ModuleContent>
      </DocModule>

      <DocModule>
        <ModuleHeader title="Error Prevention and Recovery" />
        <ModuleContent>
          <div className="space-y-4">
            <ErrorPreventionBlock
              scenario="User accidentally clicks wrong option"
              prevention="Allow easy navigation back to previous questions"
              recovery="Clear 'Previous' button on every question page"
            />
            <ErrorPreventionBlock
              scenario="User unsure about answer (e.g., exact income)"
              prevention="Provide help text explaining how to calculate (include all sources)"
              recovery="Option to contact support for clarification before proceeding"
            />
            <ErrorPreventionBlock
              scenario="User closes browser mid-check"
              prevention="Auto-save progress in session storage"
              recovery="'Continue where you left off' option when returning within 24 hours"
            />
            <ErrorPreventionBlock
              scenario="User believes result is incorrect"
              prevention="Show exactly which criteria were not met and why"
              recovery="Contact support button on result page + option to restart check"
            />
          </div>
        </ModuleContent>
      </DocModule>
    </section>
  );
}

// ==================== COMPONENTS ====================

function ComponentsUsed() {
  return (
    <section id="components" className="space-y-6">
      <SectionHeader title="UX4G Components Used" />

      <DocModule>
        <ModuleHeader title="Required Components" />
        <ModuleContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <ComponentCard name="Button" variants="Primary, Secondary, Tertiary" usage="Navigation, CTAs" />
            <ComponentCard name="Radio Button" variants="Vertical list" usage="Single-choice questions" />
            <ComponentCard name="Checkbox" variants="Single, Group" usage="Multi-select criteria (rare)" />
            <ComponentCard name="Select Dropdown" variants="Single-select" usage="State, district selection" />
            <ComponentCard name="Number Input" variants="Integer, Decimal" usage="Age, income thresholds" />
            <ComponentCard name="Progress Bar" variants="Linear, stepped" usage="Question progress indication" />
            <ComponentCard name="Alert Banner" variants="Info, Success, Warning, Error" usage="Result announcements, guidance" />
            <ComponentCard name="Card" variants="Elevated, Outlined" usage="Question containers, result cards" />
            <ComponentCard name="Icon" variants="CheckCircle, XCircle, AlertCircle, Info" usage="Visual result indicators, help" />
          </div>
        </ModuleContent>
      </DocModule>
    </section>
  );
}

// ==================== CONTENT GUIDANCE ====================

function ContentGuidance() {
  return (
    <section id="content" className="space-y-6">
      <SectionHeader title="Content and Tone Guidance" />

      <DocModule>
        <ModuleHeader title="Writing for Eligibility Outcomes" />
        <ModuleContent>
          <div className="space-y-6">
            <ToneGuidance
              outcome="Eligible Result"
              tone="Encouraging and Congratulatory"
              dos={[
                "Use positive language: 'Congratulations!', 'Good news!'",
                "Be specific about next steps (what to do, by when)",
                "Provide clear document list upfront (no surprises)",
                "Set realistic expectations for processing time"
              ]}
              donts={[
                "Don't overpromise or guarantee approval",
                "Don't hide potential issues or additional requirements",
                "Don't use overly formal or bureaucratic language"
              ]}
              example="Congratulations! You Are Eligible → Based on your responses, you meet all eligibility criteria. You can now proceed to complete the full application."
            />

            <ToneGuidance
              outcome="Not Eligible Result"
              tone="Empathetic and Helpful (NEVER Dismissive)"
              dos={[
                "Be clear but kind about why user doesn't qualify",
                "Offer 2-3 alternative services or pathways with links",
                "Provide contact info if user believes result is incorrect",
                "Use 'currently not eligible' vs 'you are ineligible' (softer)"
              ]}
              donts={[
                "Don't use negative or punitive language",
                "Don't blame the user for not qualifying",
                "Don't leave user without next steps or alternatives",
                "Don't hide the reasons for ineligibility"
              ]}
              example="You Are Not Eligible at This Time → Your family income exceeds the threshold for this scheme. However, you may qualify for merit-based scholarships. Explore alternatives below."
            />

            <ToneGuidance
              outcome="Partially Eligible Result"
              tone="Balanced and Informative"
              dos={[
                "Clearly explain what user qualifies for (reduced benefits)",
                "Explain what's needed to become fully eligible",
                "Provide multiple options (partial benefits vs full with conditions)",
                "Be transparent about differences in benefit levels"
              ]}
              donts={[
                "Don't confuse user with too many conditional options",
                "Don't bury important information in fine print",
                "Don't make partial eligibility sound like failure"
              ]}
              example="You Partially Qualify → You meet age and education criteria but income verification pending. Apply for reduced benefits (₹10K) now or submit income certificate for full benefits (₹25K)."
            />
          </div>
        </ModuleContent>
      </DocModule>

      <DocModule>
        <ModuleHeader title="Question Clarity Guidelines" />
        <ModuleContent>
          <div className="space-y-4">
            <QuestionGuideline
              principle="Use Plain Language"
              bad="What is your per-capita annual familial remuneration?"
              good="What is your family's total yearly income?"
            />
            <QuestionGuideline
              principle="Provide Context for Every Question"
              bad="Select your category"
              good="Select your category (this helps us determine if you qualify for reserved category benefits under government policy)"
            />
            <QuestionGuideline
              principle="Define All Technical Terms"
              bad="Are you BPL?"
              good="Do you have a Below Poverty Line (BPL) card? (A BPL card is issued to families with income below the poverty threshold)"
            />
            <QuestionGuideline
              principle="Use Examples and Ranges"
              bad="Enter your age"
              good="What is your age? (Example: 22 years)"
            />
          </div>
        </ModuleContent>
      </DocModule>
    </section>
  );
}

// ==================== ACCESSIBILITY ====================

function AccessibilityGuidance() {
  return (
    <section id="accessibility" className="space-y-6">
      <SectionHeader title="Accessibility Guidance" />

      <DocModule>
        <ModuleHeader title="WCAG 2.1 AA Requirements" />
        <ModuleContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AccessibilityBlock
              area="Keyboard Navigation"
              requirements={[
                "All radio buttons and checkboxes accessible via Tab key",
                "Arrow keys navigate within radio button groups",
                "Enter/Space selects option",
                "Clear focus indicators (3px outline minimum)",
                "No keyboard traps in question flow"
              ]}
            />
            <AccessibilityBlock
              area="Screen Reader Support"
              requirements={[
                "All questions have proper label associations (for/id)",
                "Use fieldset/legend for radio button groups",
                "Announce progress changes (aria-live regions)",
                "Announce result outcomes clearly with role=alert",
                "Provide context for each question (aria-describedby)"
              ]}
            />
            <AccessibilityBlock
              area="Visual Design"
              requirements={[
                "Color contrast 4.5:1 minimum for text",
                "Color contrast 3:1 for UI components and graphics",
                "Don't rely on color alone for success/error states (use icons + text)",
                "Use icons + text for result indicators (not color only)",
                "Sufficient spacing between interactive elements (44px minimum touch target)"
              ]}
            />
            <AccessibilityBlock
              area="Error Prevention"
              requirements={[
                "Confirm before submitting if user skipped optional questions",
                "Allow review before final submission of eligibility check",
                "Provide clear validation messages inline",
                "Allow users to go back and change answers easily",
                "Save progress automatically if session interruption"
              ]}
            />
          </div>
        </ModuleContent>
      </DocModule>

      <DocModule>
        <ModuleHeader title="Multilingual Considerations" />
        <ModuleContent>
          <div className="bg-purple-50 dark:bg-purple-950/30 border-2 border-purple-200 dark:border-purple-800 rounded-lg p-6">
            <div className="flex items-start gap-3 mb-4">
              <Globe size={24} className="text-purple-600 flex-shrink-0" />
              <div>
                <div className="font-bold text-foreground mb-2">Language Support Requirements</div>
                <div className="text-sm text-muted-foreground">
                  Eligibility checks must be available in Hindi and English at minimum. State-specific deployments 
                  should support regional languages as per the 8th Schedule.
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <MultilingualItem
                aspect="Questions and Options"
                requirement="Fully translated with culturally appropriate terminology"
              />
              <MultilingualItem
                aspect="Result Messages"
                requirement="All outcomes (eligible, not eligible, partial) translated"
              />
              <MultilingualItem
                aspect="Help Text and Context"
                requirement="Context explanations in user's preferred language"
              />
              <MultilingualItem
                aspect="Number Formats"
                requirement="Use localized number formats (₹2,00,000 vs ₹200000)"
              />
            </div>
          </div>
        </ModuleContent>
      </DocModule>
    </section>
  );
}

// ==================== IMPLEMENTATION ====================

function ImplementationNotes() {
  return (
    <section id="implementation" className="space-y-6">
      <SectionHeader title="Implementation Notes" />

      <DocModule>
        <ModuleHeader title="Frontend Requirements" />
        <ModuleContent>
          <div className="space-y-4">
            <ImplementationItem
              category="State Management"
              requirement="Store answers in sessionStorage or React state. Allow users to navigate back and change answers."
              priority="required"
            />
            <ImplementationItem
              category="Validation"
              requirement="Validate each answer before allowing progress. Provide clear inline error messages."
              priority="required"
            />
            <ImplementationItem
              category="Progress Tracking"
              requirement="Show progress bar (current question / total questions). Update on each step completion."
              priority="required"
            />
            <ImplementationItem
              category="Branching Logic"
              requirement="Implement conditional question flow based on previous answers. Skip irrelevant questions transparently."
              priority="recommended"
            />
          </div>
        </ModuleContent>
      </DocModule>

      <DocModule>
        <ModuleHeader title="Backend Requirements" />
        <ModuleContent>
          <div className="space-y-4">
            <ImplementationItem
              category="Rule Engine"
              requirement="Define eligibility rules in database/config (not hardcoded). Allow policy team to update rules without code changes."
              priority="critical"
            />
            <ImplementationItem
              category="API Design"
              requirement="/api/eligibility/check (POST) - accepts answers object, returns {eligible: boolean, reasons: [], alternatives: []}"
              priority="required"
            />
            <ImplementationItem
              category="Logging and Analytics"
              requirement="Log all eligibility checks (anonymized) for analytics, rule refinement, and compliance audits"
              priority="required"
            />
          </div>
        </ModuleContent>
      </DocModule>

      <DocModule>
        <ModuleHeader title="Analytics Events" />
        <ModuleContent>
          <div className="space-y-3">
            <AnalyticsEvent event="eligibility_check_started" description="User begins eligibility check (track service type)" />
            <AnalyticsEvent event="question_answered" description="User answers each question (track question ID and selected value)" />
            <AnalyticsEvent event="question_skipped" description="User skips optional question (track which question)" />
            <AnalyticsEvent event="user_went_back" description="User navigated to previous question (track from/to)" />
            <AnalyticsEvent event="eligibility_check_completed" description="User reaches result page" />
            <AnalyticsEvent event="result_eligible" description="User is determined eligible (track criteria met)" />
            <AnalyticsEvent event="result_not_eligible" description="User is determined not eligible (track failing criteria)" />
            <AnalyticsEvent event="result_partial" description="User partially qualifies (track which criteria met/unmet)" />
            <AnalyticsEvent event="alternative_service_clicked" description="User clicks alternative service link from ineligible result" />
            <AnalyticsEvent event="proceed_to_application" description="Eligible user proceeds to full application" />
            <AnalyticsEvent event="eligibility_restart" description="User restarts eligibility check" />
            <AnalyticsEvent event="eligibility_abandoned" description="User abandons check mid-flow (track at which question)" />
          </div>
        </ModuleContent>
      </DocModule>
    </section>
  );
}

// ==================== GOVERNANCE ====================

function GovernanceConformance() {
  return (
    <section id="governance" className="space-y-6">
      <SectionHeader title="Governance and Conformance" />

      <DocModule>
        <ModuleHeader title="UX4G Conformance Checklist" />
        <ModuleContent>
          <div className="space-y-3">
            <ConformanceItem checked label="Uses UX4G Radio Button and Checkbox components" />
            <ConformanceItem checked label="Shows progress indicator throughout question flow" />
            <ConformanceItem checked label="Limits questions to 3-5 maximum (prevents abandonment)" />
            <ConformanceItem checked label="Provides context for why each question is asked (builds trust)" />
            <ConformanceItem checked label="Clearly communicates result (eligible, not eligible, partial)" />
            <ConformanceItem checked label="Offers 2-3 alternative services for ineligible users" />
            <ConformanceItem checked label="Allows users to restart or revise answers" />
            <ConformanceItem checked label="Meets WCAG 2.1 AA accessibility standards" />
            <ConformanceItem checked label="Supports Hindi and English (minimum requirement)" />
            <ConformanceItem checked label="Uses empathetic, non-punitive language for negative results" />
            <ConformanceItem checked label="Provides support contact on result pages" />
          </div>
        </ModuleContent>
      </DocModule>

      <DocModule>
        <ModuleHeader title="Common Risks and Bad Practices" />
        <ModuleContent>
          <div className="space-y-4">
            <RiskBlock
              risk="Asking too many questions (over 5) causing high abandonment"
              impact="High"
              solution="Limit to 3-5 critical questions. Each additional question increases drop-off by 5-10%. Prioritize ruthlessly."
            />
            <RiskBlock
              risk="Not explaining why questions are asked (trust and transparency issues)"
              impact="High"
              solution="Provide context box: 'We need your age to verify you meet minimum age requirement of 18 years'"
            />
            <RiskBlock
              risk="Using negative or punitive language for 'not eligible' results"
              impact="Critical"
              solution="Use empathetic tone: 'You are not eligible at this time' vs 'You are ineligible'. Offer alternatives."
            />
            <RiskBlock
              risk="Not offering alternatives for ineligible users (dead end)"
              impact="Medium"
              solution="Suggest 2-3 alternative services user may qualify for. Provide links and contact info for help."
            />
            <RiskBlock
              risk="Collecting personally identifiable information unnecessarily"
              impact="Critical"
              solution="Ask for ranges (age 18-25) not exact data (DOB: 15/03/1985) in eligibility check. Protect privacy."
            />
            <RiskBlock
              risk="Complex branching logic that confuses users"
              impact="Medium"
              solution="Keep branching simple (max 2 levels deep). Use linear flow whenever possible. Explain conditional questions."
            />
            <RiskBlock
              risk="Not validating policy team's eligibility rules (logical contradictions)"
              impact="High"
              solution="Test rules with real user scenarios. Ensure rules are logically consistent (no OR contradictions)."
            />
          </div>
        </ModuleContent>
      </DocModule>

      <DocModule>
        <ModuleHeader title="Maturity Status" />
        <ModuleContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <MaturityCard
              status="Stable"
              version="1.1.0"
              description="Pattern tested across 23 departments, 89 services with 2.4M checks"
            />
            <MaturityCard
              status="Conformance"
              version="Recommended"
              description="Strongly recommended for all services with complex eligibility (not mandatory)"
            />
            <MaturityCard
              status="Adoption"
              version="68%"
              description="68% of services with eligibility criteria now use this pattern"
            />
          </div>
        </ModuleContent>
      </DocModule>
    </section>
  );
}

// ==================== SIDEBAR ====================

function MetadataPanel() {
  return (
    <div className="border-2 border-border rounded-lg overflow-hidden bg-card">
      <div className="bg-muted border-b-2 border-border px-4 py-3">
        <h3 className="font-bold text-foreground text-sm">Pattern Metadata</h3>
      </div>
      <div className="p-4 space-y-3 text-sm">
        <MetadataRow label="Pattern ID" value="UX4G-PAT-002" />
        <MetadataRow label="Category" value="Pre-Qualification" />
        <MetadataRow label="Complexity" value="Low-Medium" />
        <MetadataRow label="Implementation" value="1-2 weeks" />
        <MetadataRow label="Updated" value="February 2026" />
        <MetadataRow label="Status" value="Stable (v1.1.0)" />
      </div>
    </div>
  );
}

function QuickRefPanel() {
  return (
    <div className="border-2 border-blue-200 dark:border-blue-800 rounded-lg overflow-hidden bg-blue-50">
      <div className="bg-blue-100 border-b-2 border-blue-200 dark:border-blue-800 px-4 py-3">
        <h3 className="font-bold text-foreground text-sm">Quick Reference</h3>
      </div>
      <div className="p-4 space-y-3 text-sm">
        <QuickRefRow label="Avg. Duration" value="2-3 minutes" />
        <QuickRefRow label="Typical Questions" value="3-5 questions" />
        <QuickRefRow label="Outcomes" value="3 states (Yes/No/Partial)" />
        <QuickRefRow label="Components" value="9 core components" />
        <QuickRefRow label="WCAG Level" value="AA" />
        <QuickRefRow label="Languages" value="Hindi + English min" />
      </div>
    </div>
  );
}

function DesignPrinciples() {
  return (
    <div className="border-2 border-green-200 dark:border-green-800 rounded-lg overflow-hidden bg-green-50">
      <div className="bg-green-100 border-b-2 border-green-200 dark:border-green-800 px-4 py-3">
        <h3 className="font-bold text-foreground text-sm">Core Principles</h3>
      </div>
      <div className="p-4 space-y-3 text-sm text-muted-foreground">
        <PrincipleItem icon={<Target size={14} />} text="Clarity: Simple questions, clear outcomes" />
        <PrincipleItem icon={<Shield size={14} />} text="Fairness: Transparent criteria, no hidden rules" />
        <PrincipleItem icon={<Users size={14} />} text="Empathy: Respectful tone, helpful alternatives" />
        <PrincipleItem icon={<Zap size={14} />} text="Efficiency: Minimal questions, fast results" />
      </div>
    </div>
  );
}

function RiskIndicators() {
  return (
    <div className="border-2 border-red-200 dark:border-red-800 rounded-lg overflow-hidden bg-red-50">
      <div className="bg-red-100 border-b-2 border-red-200 dark:border-red-800 px-4 py-3 flex items-center gap-2">
        <AlertTriangle size={16} className="text-red-700" />
        <h3 className="font-bold text-foreground text-sm">Risk Indicators</h3>
      </div>
      <div className="p-4 space-y-3 text-sm text-muted-foreground">
        <RiskItem severity="high" risk="Too many questions (over 5) causing drop-off" />
        <RiskItem severity="high" risk="Negative tone for ineligible results" />
        <RiskItem severity="medium" risk="Complex branching confusing users" />
        <RiskItem severity="medium" risk="No alternatives for ineligible users" />
        <RiskItem severity="low" risk="Missing context for questions" />
      </div>
    </div>
  );
}

function RelatedResources() {
  return (
    <div className="border-2 border-border rounded-lg overflow-hidden bg-card">
      <div className="bg-muted border-b-2 border-border px-4 py-3">
        <h3 className="font-bold text-foreground text-sm">Related Patterns</h3>
      </div>
      <div className="p-4 space-y-2">
        <RelatedLink title="Application Submission" />
        <RelatedLink title="Renewal" />
        <RelatedLink title="Assisted Journey" />
        <RelatedLink title="Correction & Resubmission" />
      </div>
    </div>
  );
}

// ==================== REUSABLE COMPONENTS ====================

function SectionHeader({ title }: any) {
  return (
    <div className="border-l-4 border-primary pl-4">
      <h2 className="text-2xl font-bold text-foreground">{title}</h2>
    </div>
  );
}

function DocModule({ children }: any) {
  return (
    <div className="border-2 border-border rounded-lg overflow-hidden bg-card">
      {children}
    </div>
  );
}

function ModuleHeader({ title }: any) {
  return (
    <div className="bg-muted border-b-2 border-border px-6 py-4">
      <h3 className="font-bold text-foreground">{title}</h3>
    </div>
  );
}

function ModuleContent({ children }: any) {
  return <div className="p-6">{children}</div>;
}

function ProblemSolutionBlock({ icon, problem, solution }: any) {
  return (
    <div className="flex items-start gap-3 p-4 bg-background border-2 border-border rounded-lg">
      <div className="flex-shrink-0 mt-0.5">{icon}</div>
      <div>
        <div className="text-sm font-bold text-foreground mb-1">Problem: {problem}</div>
        <div className="text-sm text-muted-foreground">Solution: {solution}</div>
      </div>
    </div>
  );
}

function UserGroup({ icon, name, description, percentage }: any) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-10 h-10 bg-muted border-2 border-border rounded flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div className="flex-1">
        <div className="font-bold text-sm text-foreground mb-1">{name}</div>
        <div className="text-xs text-muted-foreground mb-2">{description}</div>
        <div className="text-xs font-bold text-foreground">{percentage} of users</div>
      </div>
    </div>
  );
}

function UseCaseCard({ title, examples }: any) {
  return (
    <div className="border-2 border-border rounded-lg p-4 bg-background">
      <div className="font-bold text-sm text-foreground mb-3">{title}</div>
      <ul className="space-y-2">
        {examples.map((example: string, idx: number) => (
          <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
            <div className="w-1.5 h-1.5 bg-gray-600 rounded-full mt-1.5 flex-shrink-0"></div>
            <span>{example}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function RuleTypeCard({ type, description, example }: any) {
  return (
    <div className="border-2 border-purple-300 rounded-lg p-4 bg-card">
      <div className="font-bold text-sm text-foreground mb-2">{type}</div>
      <div className="text-xs text-muted-foreground mb-3">{description}</div>
      <div className="text-xs text-muted-foreground bg-background border border-border rounded p-2 italic">
        {example}
      </div>
    </div>
  );
}

function LogicRule({ condition, operator, value, required }: any) {
  return (
    <div className="flex items-start gap-3 p-3 bg-background border-l-4 border-blue-600 rounded-r">
      <div className="flex-1">
        <div className="font-bold text-foreground">{condition}</div>
        <div className="text-muted-foreground">{operator} {value}</div>
      </div>
      {required ? (
        <span className="px-2 py-0.5 bg-red-100 text-red-700 text-xs font-bold rounded flex-shrink-0">REQUIRED</span>
      ) : (
        <span className="px-2 py-0.5 bg-gray-200 text-muted-foreground text-xs font-bold rounded flex-shrink-0">OPTIONAL</span>
      )}
    </div>
  );
}

function SequenceStrategy({ number, strategy, description, example }: any) {
  return (
    <div className="flex items-start gap-4 p-4 bg-background border-2 border-border rounded-lg">
      <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
        {number}
      </div>
      <div className="flex-1">
        <div className="font-bold text-sm text-foreground mb-1">{strategy}</div>
        <div className="text-sm text-muted-foreground mb-2">{description}</div>
        <div className="text-xs text-muted-foreground bg-card border border-border rounded p-2 italic">
          Example: {example}
        </div>
      </div>
    </div>
  );
}

function FlowStep({ number, label, status }: any) {
  const statusConfig: any = {
    entry: { bg: 'bg-muted', border: 'border-gray-400', text: 'text-muted-foreground' },
    active: { bg: 'bg-blue-50', border: 'border-blue-400', text: 'text-blue-700' },
    info: { bg: 'bg-purple-50', border: 'border-purple-400', text: 'text-purple-700' },
    decision: { bg: 'bg-yellow-50', border: 'border-yellow-400', text: 'text-yellow-700' },
    success: { bg: 'bg-green-50', border: 'border-green-400', text: 'text-green-700' },
    warning: { bg: 'bg-orange-50', border: 'border-orange-400', text: 'text-orange-700' },
    error: { bg: 'bg-red-50', border: 'border-red-400', text: 'text-red-700' },
    optional: { bg: 'bg-background', border: 'border-border', text: 'text-muted-foreground' }
  };

  return (
    <div className={`border-2 ${statusConfig[status].border} rounded-lg p-3 ${statusConfig[status].bg}`}>
      <div className={`text-xs font-bold ${statusConfig[status].text} mb-1`}>{number}</div>
      <div className="text-xs font-medium text-foreground">{label}</div>
    </div>
  );
}

function OutcomePathBlock({ outcome, color, icon, description, userActions }: any) {
  const colorConfig: any = {
    green: { bg: 'bg-green-50', border: 'border-green-300' },
    yellow: { bg: 'bg-yellow-50', border: 'border-yellow-300' },
    red: { bg: 'bg-red-50', border: 'border-red-300' }
  };

  return (
    <div className={`border-2 ${colorConfig[color].border} ${colorConfig[color].bg} rounded-lg p-6`}>
      <div className="flex items-start gap-3 mb-4">
        <div className="flex-shrink-0">{icon}</div>
        <div>
          <div className="font-bold text-lg text-foreground mb-1">{outcome}</div>
          <div className="text-sm text-muted-foreground">{description}</div>
        </div>
      </div>
      <div className="pl-11">
        <div className="font-bold text-sm text-foreground mb-2">User Actions:</div>
        <ul className="space-y-2">
          {userActions.map((action: string, idx: number) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
              <ArrowRight size={14} className="mt-0.5 flex-shrink-0 text-muted-foreground" />
              <span>{action}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function InfoBox({ icon, title, text }: any) {
  return (
    <div className="flex items-start gap-3 p-4 bg-card border-2 border-border rounded-lg">
      <div className="text-blue-600 flex-shrink-0">{icon}</div>
      <div>
        <div className="font-bold text-sm text-foreground mb-1">{title}</div>
        <div className="text-xs text-muted-foreground">{text}</div>
      </div>
    </div>
  );
}

function ProgressBar({ steps, current }: any) {
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: steps }).map((_, idx) => (
        <div
          key={idx}
          className={`flex-1 h-2 rounded ${idx < current ? 'bg-primary' : 'bg-gray-300'}`}
        ></div>
      ))}
    </div>
  );
}

function RadioOption({ value, label, selected }: any) {
  return (
    <label className={`flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer transition-colors ${
      selected ? 'border-primary bg-blue-50' : 'border-border bg-card hover:border-gray-400'
    }`}>
      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
        selected ? 'border-primary' : 'border-gray-400'
      }`}>
        {selected && <div className="w-3 h-3 rounded-full bg-primary"></div>}
      </div>
      <span className="text-sm text-foreground">{label}</span>
    </label>
  );
}

function PageAnnotation({ items }: any) {
  return (
    <div className="mt-4 bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-600 p-4">
      <div className="flex items-start gap-2 mb-2">
        <Info size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
        <div className="font-bold text-sm text-foreground">Design Annotations</div>
      </div>
      <ul className="space-y-1.5 text-sm text-muted-foreground">
        {items.map((item: string, idx: number) => (
          <li key={idx} className="flex items-start gap-2">
            <div className="w-1 h-1 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CriteriaCheck({ met, text }: any) {
  return (
    <div className="flex items-start gap-2">
      {met ? (
        <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
      ) : (
        <XCircle size={16} className="text-red-600 mt-0.5 flex-shrink-0" />
      )}
      <span className="text-sm text-muted-foreground">{text}</span>
    </div>
  );
}

function NextStepCard({ icon, title, description }: any) {
  return (
    <div className="border-2 border-border rounded-lg p-4 bg-card">
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0">{icon}</div>
        <div>
          <div className="font-bold text-sm text-foreground mb-1">{title}</div>
          <div className="text-xs text-muted-foreground">{description}</div>
        </div>
      </div>
    </div>
  );
}

function AlternativeService({ title, description }: any) {
  return (
    <div className="flex items-start gap-3 p-3 bg-card border-2 border-border rounded-lg hover:border-blue-600 cursor-pointer transition-colors">
      <ArrowRight size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
      <div>
        <div className="font-bold text-sm text-foreground mb-1">{title}</div>
        <div className="text-xs text-muted-foreground">{description}</div>
      </div>
    </div>
  );
}

function NextStepBlock({ number, title, description, action }: any) {
  return (
    <div className="border-2 border-border rounded-lg p-6 bg-card hover:border-blue-600 transition-colors">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
          {number}
        </div>
        <div className="flex-1">
          <div className="font-bold text-foreground mb-2">{title}</div>
          <div className="text-sm text-muted-foreground mb-3">{description}</div>
          <button aria-label="Action" className="text-sm text-blue-600 font-bold hover:underline">{action} →</button>
        </div>
      </div>
    </div>
  );
}

function ContactOption({ icon, title, detail }: any) {
  return (
    <div className="flex items-start gap-3 p-4 bg-background border border-border rounded-lg">
      <div className="flex-shrink-0">{icon}</div>
      <div>
        <div className="font-bold text-sm text-foreground mb-1">{title}</div>
        <div className="text-xs text-muted-foreground">{detail}</div>
      </div>
    </div>
  );
}

function DecisionNode({ question, yesPath, noPath, critical }: any) {
  return (
    <div className={`border-2 rounded-lg p-6 ${critical ? 'border-red-400 bg-red-50' : 'border-blue-400 bg-blue-50'}`}>
      <div className="flex items-start gap-3 mb-4">
        <GitBranch size={20} className={critical ? 'text-red-600' : 'text-blue-600'} />
        <div className="font-bold text-sm text-foreground">{question}</div>
      </div>
      <div className="space-y-3 text-sm">
        <div className="flex items-start gap-2">
          <CheckCircle size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
          <div>
            <span className="font-bold text-foreground">Yes:</span> <span className="text-muted-foreground">{yesPath}</span>
          </div>
        </div>
        {noPath !== 'N/A' && (
          <div className="flex items-start gap-2">
            <XCircle size={14} className="text-red-600 mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-bold text-foreground">No:</span> <span className="text-muted-foreground">{noPath}</span>
            </div>
          </div>
        )}
      </div>
      {critical && (
        <div className="mt-3 text-xs text-red-700 font-bold">⚠️ CRITICAL DECISION POINT</div>
      )}
    </div>
  );
}

function BestPracticeCard({ type, icon, practices }: any) {
  const config: any = {
    Do: { bg: 'bg-green-50', border: 'border-green-300', headerBg: 'bg-green-100' },
    "Don't": { bg: 'bg-red-50', border: 'border-red-300', headerBg: 'bg-red-100' }
  };

  return (
    <div className={`border-2 ${config[type].border} ${config[type].bg} rounded-lg overflow-hidden`}>
      <div className={`${config[type].headerBg} border-b-2 ${config[type].border} px-4 py-3 flex items-center gap-2`}>
        {icon}
        <h3 className="font-bold text-foreground">{type}</h3>
      </div>
      <div className="p-4">
        <ul className="space-y-2">
          {practices.map((practice: string, idx: number) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
              <div className="w-1.5 h-1.5 bg-gray-600 rounded-full mt-1.5 flex-shrink-0"></div>
              <span>{practice}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ErrorPreventionBlock({ scenario, prevention, recovery }: any) {
  return (
    <div className="border-2 border-orange-300 bg-orange-50 dark:bg-orange-950/30 rounded-lg p-4">
      <div className="font-bold text-sm text-foreground mb-3">{scenario}</div>
      <div className="space-y-2 text-sm">
        <div>
          <span className="font-bold text-foreground">Prevention:</span>
          <span className="text-muted-foreground ml-1">{prevention}</span>
        </div>
        <div>
          <span className="font-bold text-foreground">Recovery:</span>
          <span className="text-muted-foreground ml-1">{recovery}</span>
        </div>
      </div>
    </div>
  );
}

function ComponentCard({ name, variants, usage }: any) {
  return (
    <div className="border-2 border-border rounded-lg p-4 bg-card">
      <div className="font-bold text-sm text-foreground mb-2">{name}</div>
      <div className="text-xs text-muted-foreground mb-2">Variants: {variants}</div>
      <div className="text-xs text-muted-foreground">Usage: {usage}</div>
    </div>
  );
}

function ToneGuidance({ outcome, tone, dos, donts, example }: any) {
  return (
    <div className="border-2 border-border rounded-lg p-6 bg-card">
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="font-bold text-lg text-foreground mb-1">{outcome}</div>
          <div className="text-sm text-muted-foreground italic">{tone}</div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
        <div>
          <div className="font-bold text-sm text-foreground mb-2 flex items-center gap-2">
            <ThumbsUp size={14} className="text-green-600" /> Do:
          </div>
          <ul className="space-y-1.5 text-sm text-muted-foreground">
            {dos.map((item: string, idx: number) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle size={12} className="text-green-600 mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="font-bold text-sm text-foreground mb-2 flex items-center gap-2">
            <ThumbsDown size={14} className="text-red-600" /> Don't:
          </div>
          <ul className="space-y-1.5 text-sm text-muted-foreground">
            {donts.map((item: string, idx: number) => (
              <li key={idx} className="flex items-start gap-2">
                <XCircle size={12} className="text-red-600 mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="pt-4 border-t border-border">
        <div className="text-xs font-bold text-muted-foreground mb-2">Example Message:</div>
        <div className="text-sm text-foreground bg-background border border-border rounded p-3 italic">
          {example}
        </div>
      </div>
    </div>
  );
}

function QuestionGuideline({ principle, bad, good }: any) {
  return (
    <div className="border-2 border-border rounded-lg p-4 bg-background">
      <div className="font-bold text-sm text-foreground mb-3">{principle}</div>
      <div className="space-y-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <XCircle size={14} className="text-red-600" />
            <span className="text-xs font-bold text-red-700">Bad</span>
          </div>
          <div className="text-sm text-foreground bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded p-2">"{bad}"</div>
        </div>
        <div>
          <div className="flex items-center gap-2 mb-1">
            <CheckCircle size={14} className="text-green-600" />
            <span className="text-xs font-bold text-green-700">Good</span>
          </div>
          <div className="text-sm text-foreground bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded p-2">"{good}"</div>
        </div>
      </div>
    </div>
  );
}

function AccessibilityBlock({ area, requirements }: any) {
  return (
    <div className="border-2 border-border rounded-lg p-4 bg-card">
      <div className="font-bold text-sm text-foreground mb-3">{area}</div>
      <ul className="space-y-2">
        {requirements.map((req: string, idx: number) => (
          <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
            <CheckCircle size={12} className="text-green-600 mt-0.5 flex-shrink-0" />
            <span>{req}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MultilingualItem({ aspect, requirement }: any) {
  return (
    <div className="text-sm">
      <div className="font-bold text-foreground mb-1">{aspect}</div>
      <div className="text-muted-foreground">{requirement}</div>
    </div>
  );
}

function ImplementationItem({ category, requirement, priority }: any) {
  const priorityConfig: any = {
    critical: { bg: 'bg-red-100', text: 'text-red-700', border: 'border-red-300' },
    required: { bg: 'bg-orange-100', text: 'text-orange-700', border: 'border-orange-300' },
    recommended: { bg: 'bg-blue-100', text: 'text-blue-700', border: 'border-blue-300' }
  };

  return (
    <div className="flex items-start gap-4 p-4 bg-background border-2 border-border rounded-lg">
      <div className="w-24 flex-shrink-0">
        <div className={`px-2 py-1 rounded text-xs font-bold text-center ${priorityConfig[priority].bg} ${priorityConfig[priority].text} ${priorityConfig[priority].border} border`}>
          {priority.toUpperCase()}
        </div>
      </div>
      <div className="flex-1">
        <div className="font-bold text-sm text-foreground mb-1">{category}</div>
        <div className="text-sm text-muted-foreground">{requirement}</div>
      </div>
    </div>
  );
}

function AnalyticsEvent({ event, description }: any) {
  return (
    <div className="flex items-start gap-4 p-3 bg-background border-2 border-border rounded-lg">
      <code className="px-2 py-1 bg-card border border-gray-400 rounded text-xs font-mono text-foreground flex-shrink-0">
        {event}
      </code>
      <div className="flex-1 text-sm text-muted-foreground">{description}</div>
    </div>
  );
}

function ConformanceItem({ checked, label }: any) {
  return (
    <div className="flex items-start gap-3 p-3 bg-background border-2 border-border rounded-lg">
      <div className={`w-5 h-5 border-2 rounded flex items-center justify-center flex-shrink-0 mt-0.5 ${
        checked ? 'bg-green-500 border-green-600' : 'bg-card border-gray-400'
      }`}>
        {checked && <Check size={14} className="text-white" />}
      </div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

function RiskBlock({ risk, impact, solution }: any) {
  const impactConfig: any = {
    Critical: { color: 'text-red-700', bg: 'bg-red-100' },
    High: { color: 'text-orange-700', bg: 'bg-orange-100' },
    Medium: { color: 'text-yellow-700', bg: 'bg-yellow-100' }
  };

  return (
    <div className="border-l-4 border-red-600 bg-red-50 dark:bg-red-950/30 p-4 rounded-r-lg">
      <div className="flex items-start justify-between mb-2">
        <div className="font-bold text-sm text-foreground flex-1">{risk}</div>
        <div className={`px-2 py-1 rounded text-xs font-bold ${impactConfig[impact].bg} ${impactConfig[impact].color} flex-shrink-0 ml-3`}>
          {impact} Impact
        </div>
      </div>
      <div className="text-sm text-muted-foreground">
        <span className="font-bold">Solution:</span> {solution}
      </div>
    </div>
  );
}

function MaturityCard({ status, version, description }: any) {
  return (
    <div className="border-2 border-green-300 rounded-lg p-4 bg-green-50">
      <div className="font-bold text-sm text-foreground mb-1">{status}</div>
      <div className="text-xs text-muted-foreground mb-3">{version}</div>
      <div className="text-sm text-muted-foreground">{description}</div>
    </div>
  );
}

function MetadataRow({ label, value }: any) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-bold text-foreground">{value}</span>
    </div>
  );
}

function QuickRefRow({ label, value }: any) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-bold text-foreground">{value}</span>
    </div>
  );
}

function PrincipleItem({ icon, text }: any) {
  return (
    <div className="flex items-start gap-2">
      <div className="text-green-600 flex-shrink-0 mt-0.5">{icon}</div>
      <span>{text}</span>
    </div>
  );
}

function RiskItem({ severity, risk }: any) {
  const severityConfig: any = {
    high: { icon: <AlertTriangle size={14} className="text-red-600" /> },
    medium: { icon: <AlertCircle size={14} className="text-orange-600" /> },
    low: { icon: <Info size={14} className="text-blue-600" /> }
  };

  return (
    <div className="flex items-start gap-2">
      {severityConfig[severity].icon}
      <span>{risk}</span>
    </div>
  );
}

function RelatedLink({ title }: any) {
  return (
    <a href="#" className="block px-3 py-2 bg-card border border-border rounded hover:border-primary hover:bg-background transition-colors text-sm text-muted-foreground font-medium">
      {title}
    </a>
  );
}
