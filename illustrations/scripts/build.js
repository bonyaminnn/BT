// Render every concept to output/<id>.svg and output/<id>-transparent.svg.
import { readdirSync, writeFileSync, mkdirSync } from 'node:fs';
import { render } from '../src/renderer.js';

const root = new URL('..', import.meta.url);
mkdirSync(new URL('output/', root), { recursive: true });
const only = process.argv[2];

for (const f of readdirSync(new URL('concepts/', root)).filter((f) => f.endsWith('.js')).sort()) {
  const c = (await import(new URL(`concepts/${f}`, root))).default;
  if (only && c.id !== only) continue;
  const shapes = c.shapes();
  writeFileSync(new URL(`output/${c.id}.svg`, root), render(shapes, { title: c.title }));
  writeFileSync(new URL(`output/${c.id}-transparent.svg`, root), render(shapes, { title: c.title, background: 'transparent', grid: false }));
  console.log(`built ${c.id}`);
}
