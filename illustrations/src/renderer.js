// SVG generation: projection, fitting, layer ordering and serialisation.

import { project, projectedCircle, bounds, depth as depthOf, COS30, SIN30 } from './geometry.js';
import { color, stroke, artboard, unit, grid as gridTokens } from './tokens.js';

const r2 = (n) => {
  const v = Math.round(n * 100) / 100;
  return Object.is(v, -0) ? 0 : v;
};
const pts = (ps) => ps.map(([x, y]) => `${r2(x)},${r2(y)}`).join(' ');

function attrs(st) {
  const out = [`fill="${st.fill ?? 'none'}"`];
  if (st.stroke && st.stroke !== 'none') out.push(`stroke="${st.stroke}"`, `stroke-width="${st.strokeWidth}"`);
  return out.join(' ');
}

/** Clip the infinite line p + t*dir to the rectangle [0,W]x[0,H] (Liang-Barsky). */
function clipLine([px, py], [dx, dy], W, H) {
  let t0 = -Infinity, t1 = Infinity;
  for (const [p, q] of [[-dx, px], [dx, W - px], [-dy, py], [dy, H - py]]) {
    if (p === 0) { if (q < 0) return null; continue; }
    const t = q / p;
    if (p < 0) t0 = Math.max(t0, t); else t1 = Math.min(t1, t);
  }
  return t0 < t1 ? [[px + t0 * dx, py + t0 * dy], [px + t1 * dx, py + t1 * dy]] : null;
}

/** Isometric background grid, aligned to the world origin. */
function gridLines(size, scale, origin) {
  const step = gridTokens.spacing * scale;
  const segs = [];
  // Lines of constant x run along +y (dir -cos30, +sin30); constant y run along +x.
  for (const dir of [[-COS30, SIN30], [COS30, SIN30]]) {
    // Neighbouring lines are offset by one world step along the other axis.
    const off = dir[0] < 0 ? [COS30 * step, SIN30 * step] : [-COS30 * step, SIN30 * step];
    const n = Math.ceil((size * 2) / step) + 2;
    for (let i = -n; i <= n; i++) {
      const s = clipLine([origin[0] + off[0] * i, origin[1] + off[1] * i], dir, size, size);
      if (s && Math.hypot(s[1][0] - s[0][0], s[1][1] - s[0][1]) > 0.5) segs.push(s);
    }
  }
  const d = segs.map(([a, b]) => `M${r2(a[0])} ${r2(a[1])}L${r2(b[0])} ${r2(b[1])}`).join('');
  return `<path id="grid" d="${d}" fill="none" stroke="${color.grid}" stroke-width="${stroke.gridWidth}"/>`;
}

/**
 * Render shapes to an SVG string.
 * opts: { size, background: 'offwhite'|'transparent', grid: bool, title }
 */
export function render(shapes, { size = artboard.size, background = 'offwhite', grid = true, title = 'Illustration' } = {}) {
  const scale = unit * (size / artboard.size);
  // Fit: centre the projected bounding box. The grid is drawn from the same
  // origin, so it stays aligned with the world axes.
  const all = shapes.flatMap((s) => (s.points ?? [s.plane.at(s.u, s.v)]).map((p) => project(p, scale)));
  const b = bounds(all);
  const origin = [size / 2 - (b.minX + b.maxX) / 2, size / 2 - (b.minY + b.maxY) / 2];

  // Painter's order: layer, then solid depth, then insertion order (stable sort).
  const ordered = shapes
    .map((s, i) => ({ s, i }))
    .sort((A, B) =>
      (A.s.layer - B.s.layer) ||
      (depthOf(A.s.depth ?? [0, 0, 0]) - depthOf(B.s.depth ?? [0, 0, 0])) ||
      (A.i - B.i));

  const body = ordered.map(({ s }) => {
    if (s.type === 'ellipse') {
      const e = projectedCircle(s.plane, s.u, s.v, s.r, scale, origin);
      const rot = Math.abs(r2(e.rotate)) > 0 ? ` transform="rotate(${r2(e.rotate)} ${r2(e.cx)} ${r2(e.cy)})"` : '';
      return `<ellipse cx="${r2(e.cx)}" cy="${r2(e.cy)}" rx="${r2(e.rx)}" ry="${r2(e.ry)}"${rot} ${attrs(s.style)}/>`;
    }
    const p = s.points.map((q) => project(q, scale, origin));
    if (s.type === 'line') return `<line x1="${r2(p[0][0])}" y1="${r2(p[0][1])}" x2="${r2(p[1][0])}" y2="${r2(p[1][1])}" ${attrs(s.style)}/>`;
    return `<polygon points="${pts(p)}" ${attrs(s.style)}/>`;
  });

  const k = size / artboard.size; // strokes scale with the artboard
  return [
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}" width="${size}" height="${size}" role="img">`,
    `<title>${title}</title>`,
    background === 'offwhite' ? `<rect id="background" width="${size}" height="${size}" fill="${color.background}"/>` : '',
    grid ? gridLines(size, scale, origin).replace(/stroke-width="([\d.]+)"/, (_, w) => `stroke-width="${r2(w * k)}"`) : '',
    `<g id="art" stroke-linejoin="${stroke.join}" stroke-linecap="${stroke.cap}">`,
    ...body.map((l) => l.replace(/stroke-width="([\d.]+)"/, (_, w) => `stroke-width="${r2(w * k)}"`)),
    '</g>',
    '</svg>',
  ].filter(Boolean).join('\n') + '\n';
}
