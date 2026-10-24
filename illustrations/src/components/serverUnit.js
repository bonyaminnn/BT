// A thin rack-style hardware unit, and a stack of them.

import { stack, circle, indicator, parallelLines, symbol } from '../primitives.js';
import { color } from '../tokens.js';

// Geometric logo in a unit square: a 2x2 block mark with one corner cut.
const sq = (u, v, k) => [[u, v], [u + k, v], [u + k, v + k], [u, v + k]];
export const LOGO = [
  sq(0, 0, 0.44), sq(0.56, 0, 0.44), sq(0, 0.56, 0.44),
  [[0.56, 0.56], [1, 0.56], [0.56, 1]],
];

/** Decorate one unit. opts.top marks the unit that carries screws + logo. */
export function unitDetails({ faces, size, position }, { top = false, ventCount = 9, accentIndicator = false } = {}) {
  const [w, d, h] = size;
  const depth = [position[0] + w, position[1] + d, position[2]];
  const out = [];

  // Vents: vertical lines on the left-facing side, grouped near the front end.
  const inset = h * 0.28;
  out.push(...parallelLines(faces.left, {
    u: w * 0.58, v: inset, length: h - inset * 2, count: ventCount, spacing: 0.34, depth,
  }));

  // Status indicators on the right-facing side.
  const iw = 0.55, ih = h * 0.22, iv = (h - ih) / 2;
  [0.6, 1.4].forEach((u, i) => out.push(...indicator(faces.right, {
    u, v: iv, w: iw, h: ih, depth,
    fill: accentIndicator && i === 0 ? color.accent : color.detail,
  })));

  if (top) {
    const m = 0.6;
    for (const [u, v] of [[m, m], [w - m, m], [w - m, d - m], [m, d - m]]) {
      out.push(...circle(faces.top, { u, v, r: 0.16, depth }));
    }
    const s = Math.min(w, d) * 0.26;
    out.push(...symbol(faces.top, { u: (w - s) / 2, v: (d - s) / 2, size: s, polygons: LOGO, depth }));
  }
  return out;
}

/** Stack of identical server units. */
export function serverStack({ position = [0, 0, 0], size = [10, 7, 1.3], count = 3, gap = 0.55 } = {}) {
  const { shapes, units } = stack({ position, size, count, gap });
  units.forEach((u, i) => shapes.push(...unitDetails(u, {
    top: i === count - 1,
    accentIndicator: i === count - 1,
  })));
  return shapes;
}
