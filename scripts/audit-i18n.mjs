import fs from 'fs';

const localesDir = 'src/app/i18n/locales';
const files = fs.readdirSync(localesDir).filter(f => f.endsWith('.json'));

function getKeys(obj, prefix = '') {
  let keys = [];
  for (const k in obj) {
    if (typeof obj[k] === 'object' && obj[k] !== null) {
      keys.push(...getKeys(obj[k], prefix + k + '.'));
    } else {
      keys.push(prefix + k);
    }
  }
  return keys;
}

const en = JSON.parse(fs.readFileSync(localesDir + '/en.json', 'utf-8'));
const enKeys = getKeys(en);

let hasGaps = false;
for (const file of files) {
  if (file === 'en.json') continue;
  const lang = file.replace('.json', '');
  const data = JSON.parse(fs.readFileSync(localesDir + '/' + file, 'utf-8'));
  const langKeys = getKeys(data);
  const missing = enKeys.filter(k => !langKeys.includes(k));
  if (missing.length > 0) {
    hasGaps = true;
    console.log(lang + ': missing ' + missing.length + ' keys');
    missing.forEach(k => console.log('  ' + k));
  }
}

if (!hasGaps) {
  console.log('All ' + files.length + ' locales have matching keys.');
}
