import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();

const markdownFiles = [
  path.join(root, 'src/app/tokens-package/README.md'),
  path.join(root, 'src/app/web-components-package/README.md'),
  path.join(root, 'src/app/react-patterns-package/README.md'),
  path.join(root, 'src/app/react-core-package/README.md'),
  path.join(root, 'src/app/styles-package/README.md'),
  path.join(root, 'src/app/angular-core-package/README.md'),
  path.join(root, 'src/app/angular-patterns-package/README.md'),
];

function walk(dir) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...walk(fullPath));
    } else if (entry.isFile()) {
      results.push(fullPath);
    }
  }
  return results;
}

const docsDir = path.join(root, 'ux4g-docs/docs');
if (fs.existsSync(docsDir)) {
  markdownFiles.push(...walk(docsDir).filter((file) => file.endsWith('.md')));
}

function resolveLocalLink(sourceFile, linkTarget) {
  const [rawTarget] = linkTarget.split('#');
  if (!rawTarget) return null;
  if (/^(https?:|mailto:|tel:)/.test(rawTarget)) return null;

  if (rawTarget.startsWith('/Users/')) {
    return rawTarget;
  }

  if (rawTarget.startsWith('/')) {
    const docsPath = path.join(root, 'ux4g-docs/docs', rawTarget.replace(/^\//, ''));
    return docsPath;
  }

  if (path.isAbsolute(rawTarget)) {
    return rawTarget;
  }

  return path.resolve(path.dirname(sourceFile), rawTarget);
}

function existingPath(targetPath) {
  if (fs.existsSync(targetPath)) return targetPath;
  if (!path.extname(targetPath) && fs.existsSync(`${targetPath}.md`)) {
    return `${targetPath}.md`;
  }
  return null;
}

const errors = [];

for (const file of markdownFiles) {
  if (!fs.existsSync(file)) continue;
  const contents = fs.readFileSync(file, 'utf8');
  const linkRegex = /\[[^\]]+\]\(([^)]+)\)/g;
  let match;

  while ((match = linkRegex.exec(contents)) !== null) {
    const target = match[1].trim();
    const resolved = resolveLocalLink(file, target);
    if (!resolved) continue;

    const found = existingPath(resolved);
    if (!found) {
      errors.push(`${path.relative(root, file)} -> ${target}`);
    }
  }
}

const sidebarPath = path.join(root, 'ux4g-docs/sidebars.ts');
if (fs.existsSync(sidebarPath)) {
  const contents = fs.readFileSync(sidebarPath, 'utf8');
  const docIdRegex = /'([a-z0-9-]+(?:\/[a-z0-9-]+)+)'/g;
  let match;

  while ((match = docIdRegex.exec(contents)) !== null) {
    const docId = match[1];
    const fullPath = path.join(root, 'ux4g-docs/docs', `${docId}.md`);
    if (!fs.existsSync(fullPath)) {
      errors.push(`ux4g-docs/sidebars.ts -> ${docId}`);
    }
  }
}

if (errors.length > 0) {
  console.error('Broken docs links detected:');
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log(`Docs link check passed for ${markdownFiles.length} markdown files.`);
