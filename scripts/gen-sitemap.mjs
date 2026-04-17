#!/usr/bin/env node
/**
 * Generates sitemap.xml from all route definitions.
 */
import fs from 'fs';
import path from 'path';

const SITE_URL = 'https://designsystem.dl6.in';
const routeFiles = [
  'src/app/routes.tsx',
  ...fs.readdirSync('src/app/routes/domains').map(f => 'src/app/routes/domains/' + f),
];

const paths = new Set();
paths.add('/');

for (const file of routeFiles) {
  const content = fs.readFileSync(file, 'utf-8');
  const matches = content.matchAll(/path:\s*["']([^"']+)["']/g);
  for (const m of matches) {
    const p = m[1].startsWith('/') ? m[1] : '/' + m[1];
    if (!p.includes(':') && !p.includes('*')) {
      paths.add(p);
    }
  }
}

const today = new Date().toISOString().split('T')[0];
const urls = [...paths].sort().map(p => `  <url>
    <loc>${SITE_URL}${p}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p === '/' ? 'daily' : 'weekly'}</changefreq>
    <priority>${p === '/' ? '1.0' : p.split('/').length <= 2 ? '0.8' : '0.6'}</priority>
  </url>`).join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

fs.writeFileSync('public/sitemap.xml', sitemap);
console.log(paths.size + ' URLs written to public/sitemap.xml');
