import { test } from 'node:test';
import assert from 'node:assert/strict';
import { project, projectedCircle, boxFaces, COS30 } from '../src/geometry.js';
import { prism } from '../src/primitives.js';
import { render } from '../src/renderer.js';
import serverStack from '../concepts/server-stack.js';

const close = (a, b, eps = 1e-9) => assert.ok(Math.abs(a - b) < eps, `${a} != ${b}`);
const angle = ([x0, y0], [x1, y1]) => (Math.atan2(y1 - y0, x1 - x0) * 180) / Math.PI;

test('ground axes project at exactly 30 degrees, z is vertical', () => {
  const o = project([0, 0, 0]);
  close(angle(o, project([1, 0, 0])), 30);
  close(angle(o, project([0, 1, 0])), 150);
  close(angle(o, project([0, 0, 1])), -90);
});

test('unit lengths along all three axes are equal on screen', () => {
  const o = project([0, 0, 0]);
  const len = (p) => Math.hypot(p[0] - o[0], p[1] - o[1]);
  close(len(project([1, 0, 0])), 1);
  close(len(project([0, 1, 0])), 1);
  close(len(project([0, 0, 1])), 1);
});

test('circle on the top plane becomes an axis-aligned ellipse', () => {
  const e = projectedCircle(boxFaces([0, 0, 0], [1, 1, 1]).top, 0, 0, 1, 1, [0, 0]);
  close(e.rx, Math.SQRT2 * COS30);
  close(e.ry, Math.SQRT2 * 0.5);
  close(Math.abs(e.rotate) % 180, 0);
});

test('every edge of a prism follows an isometric axis', () => {
  for (const face of prism({ size: [3, 2, 1] })) {
    const p = face.points.map((q) => project(q));
    p.forEach((a, i) => {
      const b = p[(i + 1) % p.length];
      const deg = ((angle(a, b) % 180) + 180) % 180;
      assert.ok([30, 90, 150].some((t) => Math.abs(deg - t) < 1e-6), `edge at ${deg}deg`);
    });
  }
});

test('rendering is deterministic', () => {
  assert.equal(render(serverStack.shapes()), render(serverStack.shapes()));
});

test('SVG output is structurally valid and uses only palette colours', () => {
  for (const opts of [{}, { background: 'transparent', grid: false }]) {
    const svg = render(serverStack.shapes(), opts);
    assert.match(svg, /^<svg xmlns="http:\/\/www\.w3\.org\/2000\/svg" viewBox="0 0 512 512"/);
    assert.ok(svg.trimEnd().endsWith('</svg>'));
    // Tags balance: every non-self-closing open tag has a matching close.
    const opens = [...svg.matchAll(/<(\w+)[^>]*?(\/?)>/g)].filter((m) => !m[2]).map((m) => m[1]);
    const closes = [...svg.matchAll(/<\/(\w+)>/g)].map((m) => m[1]);
    assert.deepEqual(opens.sort(), closes.sort());
    assert.doesNotMatch(svg, /NaN|undefined|Infinity|gradient|filter/i);
    const colours = new Set(svg.match(/#[0-9A-F]{6}/gi));
    const palette = ['#F7F7F3', '#FFFFFF', '#E5E5E1', '#454545', '#F04416', '#B8B8B2', '#EAEAE4'];
    for (const c of colours) assert.ok(palette.includes(c.toUpperCase()), `off-palette colour ${c}`);
  }
});

test('transparent variant has no background rect', () => {
  assert.doesNotMatch(render(serverStack.shapes(), { background: 'transparent' }), /id="background"/);
});

test('artwork stays inside the artboard', () => {
  const svg = render(serverStack.shapes(), { grid: false });
  const nums = [...svg.matchAll(/points="([^"]+)"/g)].flatMap((m) => m[1].split(/[ ,]/).map(Number));
  assert.ok(nums.every((n) => n >= 0 && n <= 512));
});
