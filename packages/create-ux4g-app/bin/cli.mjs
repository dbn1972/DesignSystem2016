#!/usr/bin/env node

/**
 * create-ux4g-app — CLI to scaffold UX4G Design System projects
 *
 * Usage:
 *   npx create-ux4g-app my-app
 *   npx create-ux4g-app my-app --template react
 *   npx create-ux4g-app my-app --template angular
 */

import { existsSync, mkdirSync, cpSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve, join, basename } from 'node:path';
import { createInterface } from 'node:readline';

// ── Constants ───────────────────────────────────────────────────────────

const TEMPLATES = ['react', 'angular'];
const DEFAULT_TEMPLATE = 'react';
const VERSION = '1.0.0';

const COLORS = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  green: '\x1b[32m',
  cyan: '\x1b[36m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  dim: '\x1b[2m',
};

const c = (color, text) => `${COLORS[color]}${text}${COLORS.reset}`;

// ── Helpers ─────────────────────────────────────────────────────────────

function printBanner() {
  console.log('');
  console.log(c('bold', '  🇮🇳 UX4G — Government of India Design System'));
  console.log(c('dim', `  create-ux4g-app v${VERSION}`));
  console.log('');
}

function printUsage() {
  console.log(c('bold', 'Usage:'));
  console.log('  npx create-ux4g-app <project-name> [options]');
  console.log('');
  console.log(c('bold', 'Options:'));
  console.log('  --template <name>  Template to use (react, angular). Default: react');
  console.log('  --help             Show this help message');
  console.log('  --version          Show version');
  console.log('');
  console.log(c('bold', 'Examples:'));
  console.log('  npx create-ux4g-app my-gov-app');
  console.log('  npx create-ux4g-app my-gov-app --template angular');
  console.log('');
}

function ask(question) {
  const rl = createInterface({ input: process.stdin, output: process.stdout });
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer.trim());
    });
  });
}

function parseArgs(args) {
  const result = { projectName: null, template: DEFAULT_TEMPLATE, help: false, version: false };

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === '--help' || arg === '-h') {
      result.help = true;
    } else if (arg === '--version' || arg === '-v') {
      result.version = true;
    } else if (arg === '--template' || arg === '-t') {
      result.template = args[++i] || DEFAULT_TEMPLATE;
    } else if (!arg.startsWith('-')) {
      result.projectName = arg;
    }
  }

  return result;
}

// ── Template Generation ─────────────────────────────────────────────────

function generateReactProject(targetDir, projectName) {
  mkdirSync(targetDir, { recursive: true });

  // package.json
  writeFileSync(join(targetDir, 'package.json'), JSON.stringify({
    name: projectName,
    private: true,
    version: '0.1.0',
    type: 'module',
    scripts: {
      dev: 'vite',
      build: 'tsc && vite build',
      preview: 'vite preview',
    },
    dependencies: {
      '@ux4g/react-core': '^1.0.0',
      '@ux4g/styles': '^1.0.0',
      '@ux4g/tokens': '^1.0.0',
      react: '^18.3.0',
      'react-dom': '^18.3.0',
      'react-router': '^7.0.0',
    },
    devDependencies: {
      '@types/react': '^18.3.0',
      '@types/react-dom': '^18.3.0',
      '@vitejs/plugin-react': '^4.0.0',
      typescript: '^5.5.0',
      vite: '^6.0.0',
    },
  }, null, 2) + '\n');

  // tsconfig.json
  writeFileSync(join(targetDir, 'tsconfig.json'), JSON.stringify({
    compilerOptions: {
      target: 'ES2022',
      lib: ['ES2022', 'DOM', 'DOM.Iterable'],
      module: 'ESNext',
      moduleResolution: 'bundler',
      jsx: 'react-jsx',
      strict: true,
      esModuleInterop: true,
      skipLibCheck: true,
      forceConsistentCasingInFileNames: true,
      resolveJsonModule: true,
      isolatedModules: true,
      noEmit: true,
    },
    include: ['src'],
  }, null, 2) + '\n');

  // vite.config.ts
  writeFileSync(join(targetDir, 'vite.config.ts'),
`import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
});
`);

  // index.html
  writeFileSync(join(targetDir, 'index.html'),
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${projectName} — UX4G</title>
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/src/main.tsx"></script>
</body>
</html>
`);

  // src/main.tsx
  mkdirSync(join(targetDir, 'src'), { recursive: true });
  writeFileSync(join(targetDir, 'src', 'main.tsx'),
`import React from 'react';
import ReactDOM from 'react-dom/client';
import '@ux4g/styles';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
`);

  // src/App.tsx
  writeFileSync(join(targetDir, 'src', 'App.tsx'),
`import React from 'react';

export default function App() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <header style={{ borderBottom: '3px solid', borderImage: 'linear-gradient(to right, #FF9933, #FFFFFF, #138808) 1', paddingBottom: '1rem', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700 }}>🇮🇳 ${projectName}</h1>
        <p style={{ color: '#666', marginTop: '0.5rem' }}>Built with UX4G — Government of India Design System</p>
      </header>

      <main>
        <section style={{ marginBottom: '2rem' }}>
          <h2>Getting Started</h2>
          <p>Edit <code>src/App.tsx</code> and save to see changes.</p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2>UX4G Components</h2>
          <p>Import components from <code>@ux4g/react-core</code>:</p>
          <pre style={{ background: '#f5f5f5', padding: '1rem', borderRadius: '0.5rem', overflow: 'auto' }}>
{\`import { Button, Input, Alert } from '@ux4g/react-core';

function MyForm() {
  return (
    <form>
      <Input aria-label="Name" placeholder="Enter your name" />
      <Button variant="primary">Submit Application</Button>
      <Alert variant="info">Your application is being processed.</Alert>
    </form>
  );
}\`}
          </pre>
        </section>

        <section>
          <h2>Resources</h2>
          <ul>
            <li><a href="https://ux4g.gov.in">UX4G Documentation</a></li>
            <li><a href="https://ux4g.gov.in/components">Component Library</a></li>
            <li><a href="https://ux4g.gov.in/foundations">Design Foundations</a></li>
          </ul>
        </section>
      </main>

      <footer style={{ borderTop: '1px solid #e5e5e5', paddingTop: '1rem', marginTop: '2rem', color: '#999', fontSize: '0.875rem' }}>
        UX4G Design System Platform • Government of India
      </footer>
    </div>
  );
}
`);

  // src/vite-env.d.ts
  writeFileSync(join(targetDir, 'src', 'vite-env.d.ts'), '/// <reference types="vite/client" />\n');

  // .gitignore
  writeFileSync(join(targetDir, '.gitignore'), 'node_modules\ndist\n.env\n');
}

function generateAngularProject(targetDir, projectName) {
  mkdirSync(targetDir, { recursive: true });

  writeFileSync(join(targetDir, 'package.json'), JSON.stringify({
    name: projectName,
    private: true,
    version: '0.1.0',
    scripts: {
      start: 'ng serve',
      build: 'ng build',
    },
    dependencies: {
      '@angular/common': '^18.0.0',
      '@angular/compiler': '^18.0.0',
      '@angular/core': '^18.0.0',
      '@angular/platform-browser': '^18.0.0',
      '@angular/platform-browser-dynamic': '^18.0.0',
      '@ux4g/angular-core': '^1.0.0',
      '@ux4g/styles': '^1.0.0',
      '@ux4g/tokens': '^1.0.0',
      rxjs: '^7.8.0',
      'zone.js': '~0.14.0',
    },
    devDependencies: {
      '@angular/cli': '^18.0.0',
      '@angular/compiler-cli': '^18.0.0',
      typescript: '^5.5.0',
    },
  }, null, 2) + '\n');

  mkdirSync(join(targetDir, 'src'), { recursive: true });

  writeFileSync(join(targetDir, 'src', 'main.ts'),
`import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent).catch(err => console.error(err));
`);

  mkdirSync(join(targetDir, 'src', 'app'), { recursive: true });

  writeFileSync(join(targetDir, 'src', 'app', 'app.component.ts'),
`import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: \`
    <div style="max-width: 800px; margin: 0 auto; padding: 2rem;">
      <h1>🇮🇳 ${projectName}</h1>
      <p>Built with UX4G — Government of India Design System</p>
    </div>
  \`,
})
export class AppComponent {
  title = '${projectName}';
}
`);

  writeFileSync(join(targetDir, '.gitignore'), 'node_modules\ndist\n.env\n');
}

// ── Main ────────────────────────────────────────────────────────────────

async function main() {
  const args = parseArgs(process.argv.slice(2));

  if (args.version) {
    console.log(VERSION);
    process.exit(0);
  }

  printBanner();

  if (args.help) {
    printUsage();
    process.exit(0);
  }

  // Get project name
  let projectName = args.projectName;
  if (!projectName) {
    projectName = await ask(c('cyan', '  Project name: '));
    if (!projectName) {
      console.log(c('red', '  Error: Project name is required.'));
      process.exit(1);
    }
  }

  // Get template
  let template = args.template;
  if (!TEMPLATES.includes(template)) {
    console.log(c('yellow', `  Unknown template "${template}". Available: ${TEMPLATES.join(', ')}`));
    template = DEFAULT_TEMPLATE;
  }

  const targetDir = resolve(process.cwd(), projectName);

  // Check if directory exists
  if (existsSync(targetDir)) {
    const overwrite = await ask(c('yellow', `  Directory "${projectName}" already exists. Overwrite? (y/N) `));
    if (overwrite.toLowerCase() !== 'y') {
      console.log(c('dim', '  Cancelled.'));
      process.exit(0);
    }
  }

  console.log('');
  console.log(c('cyan', `  Creating ${template} project in ${c('bold', projectName)}...`));
  console.log('');

  // Generate project
  if (template === 'react') {
    generateReactProject(targetDir, projectName);
  } else if (template === 'angular') {
    generateAngularProject(targetDir, projectName);
  }

  // Success message
  console.log(c('green', '  ✓ Project created successfully!'));
  console.log('');
  console.log(c('bold', '  Next steps:'));
  console.log('');
  console.log(`    cd ${projectName}`);
  console.log('    npm install');
  console.log(template === 'react' ? '    npm run dev' : '    npm start');
  console.log('');
  console.log(c('dim', '  Documentation: https://ux4g.gov.in'));
  console.log(c('dim', '  Components:    https://ux4g.gov.in/components'));
  console.log('');
}

main().catch((err) => {
  console.error(c('red', `  Error: ${err.message}`));
  process.exit(1);
});
