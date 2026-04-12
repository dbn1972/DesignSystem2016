import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();

function read(file) {
  return fs.readFileSync(path.join(root, file), 'utf8');
}

function collectNamedExports(file) {
  const contents = read(file);
  const exportRegex = /export(?:\s+type)?\s*\{([^}]+)\}\s*from/g;
  const exportAllRegex = /export\s+\*\s+from\s+['"]([^'"]+)['"]/g;
  const directExportRegex = /export\s+(?:const|type|interface|class|function|enum)\s+([A-Za-z0-9_]+)/g;
  const exported = new Set();
  let match;

  while ((match = exportRegex.exec(contents)) !== null) {
    for (const part of match[1].split(',')) {
      const name = part.trim().split(/\s+as\s+/)[0]?.trim();
      if (name) exported.add(name);
    }
  }

  while ((match = exportAllRegex.exec(contents)) !== null) {
    const target = match[1];
    const targetPath = path.join(path.dirname(path.join(root, file)), target);
    const normalized = path.relative(root, `${targetPath}.ts`);
    if (fs.existsSync(path.join(root, normalized))) {
      for (const name of collectNamedExports(normalized)) {
        exported.add(name);
      }
    }
  }

  while ((match = directExportRegex.exec(contents)) !== null) {
    exported.add(match[1]);
  }

  return exported;
}

function collectImportedNames(contents, packageName) {
  const importRegex = new RegExp(`import\\s*\\{([^}]+)\\}\\s*from\\s*['"]${packageName}['"]`, 'g');
  const imported = new Set();
  let match;

  while ((match = importRegex.exec(contents)) !== null) {
    for (const part of match[1].split(',')) {
      const name = part.trim().split(/\s+as\s+/)[0]?.trim();
      if (name) imported.add(name);
    }
  }

  return imported;
}

const errors = [];

const reactExports = collectNamedExports('src/app/react-core-package/src/index.ts');
const reactReadme = read('src/app/react-core-package/README.md');
for (const name of collectImportedNames(reactReadme, '@ux4g/react-core')) {
  if (!reactExports.has(name)) {
    errors.push(`React README imports non-exported symbol: ${name}`);
  }
}

const angularExports = collectNamedExports('src/app/angular-core-package/src/public-api.ts');
const angularReadme = read('src/app/angular-core-package/README.md');
for (const name of collectImportedNames(angularReadme, '@ux4g/angular-core')) {
  if (!angularExports.has(name)) {
    errors.push(`Angular README imports non-exported symbol: ${name}`);
  }
}

const webReadme = read('src/app/web-components-package/README.md');
const componentTagRegex = /<\s*(ux4g-[a-z0-9-]+)/g;
let tagMatch;
const seenTags = new Set();

while ((tagMatch = componentTagRegex.exec(webReadme)) !== null) {
  const tag = tagMatch[1];
  if (seenTags.has(tag)) continue;
  seenTags.add(tag);

  const tagName = tag.replace(/^ux4g-/, '');
  const sourceFile = path.join(
    root,
    'src/app/web-components-package/src/components',
    tagName,
    `ux4g-${tagName}.ts`
  );

  if (!fs.existsSync(sourceFile)) {
    errors.push(`Web Components README references missing component source: <${tag}>`);
  }
}

if (errors.length > 0) {
  console.error('API/doc drift detected:');
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log('API/doc drift check passed.');
