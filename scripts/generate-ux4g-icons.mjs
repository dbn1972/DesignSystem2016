import fs from "node:fs";
import path from "node:path";

const definitionsPath = path.resolve("src/app/react-core-package/src/icons/iconDefinitions.json");
const outputDir = path.resolve("src/app/react-core-package/src/icons/svg");

const definitions = JSON.parse(fs.readFileSync(definitionsPath, "utf8"));

fs.mkdirSync(outputDir, { recursive: true });

function attrsToString(attrs) {
  return Object.entries(attrs)
    .map(([key, value]) => `${key}="${value}"`)
    .join(" ");
}

for (const [key, definition] of Object.entries(definitions)) {
  const nodes = definition.nodes
    .map(([tag, attrs]) => `  <${tag} ${attrsToString(attrs)} />`)
    .join("\n");

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">\n${nodes}\n</svg>\n`;

  fs.writeFileSync(path.join(outputDir, `${key}.svg`), svg);
}

console.log(`Generated ${Object.keys(definitions).length} UX4G icon SVG assets.`);
