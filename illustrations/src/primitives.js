// Reusable geometric primitives. Each returns an array of shape descriptors
// in WORLD coordinates; renderer.js projects and serialises them. Nothing
// here knows about pixels or SVG.

import { boxFaces } from './geometry.js';
import { faceStyle, lineStyle, color, stroke } from './tokens.js';

const style = (base, over = {}) => ({ ...lineStyle, ...base, ...over });

/**
 * Rectangular prism. opts: position [x,y,z], size [w,d,h], fills {top,left,right},
 * stroke, strokeWidth, layer.
 */
export function prism({ position = [0, 0, 0], size, fills = {}, stroke: s, strokeWidth, layer = 0 }) {
  const [x, y, z] = position, [w, d, h] = size;
  const X = x + w, Y = y + d, Z = z + h;
  const over = { ...(s && { stroke: s }), ...(strokeWidth && { strokeWidth }) };
  const key = [X, Y, z]; // nearest bottom corner orders the solid
  const face = (name, points) => ({
    type: 'polygon', name, points, layer, depth: key,
    style: style(faceStyle[name], { ...(fills[name] && { fill: fills[name] }), ...over }),
  });
  return [
    face('left', [[x, Y, z], [X, Y, z], [X, Y, Z], [x, Y, Z]]),
    face('right', [[X, Y, z], [X, y, z], [X, y, Z], [X, Y, Z]]),
    face('top', [[x, y, Z], [X, y, Z], [X, Y, Z], [x, Y, Z]]),
  ];
}

export const cube = ({ size = 1, ...o }) => prism({ ...o, size: [size, size, size] });

/** Flat platform: a prism with a thin default height. */
export const platform = ({ size: [w, d, h = 0.25], ...o }) => prism({ ...o, size: [w, d, h] });

/**
 * Stack of identical prisms along +z with a gap between them.
 * Returns { shapes, units: [{position,size,faces}] } so components can decorate each unit.
 */
export function stack({ position = [0, 0, 0], size, count, gap = 0, ...o }) {
  const units = [];
  const shapes = [];
  for (let i = 0; i < count; i++) {
    const p = [position[0], position[1], position[2] + i * (size[2] + gap)];
    shapes.push(...prism({ ...o, position: p, size }));
    units.push({ position: p, size, faces: boxFaces(p, size) });
  }
  return { shapes, units };
}

// ---- Surface details: drawn in a face plane's local (u, v) coordinates ----

const detail = (pl, layerDepth, layer, extra) => ({ plane: pl, layer, depth: layerDepth, ...extra });

/** Circle lying on a plane (screws, ports, knobs). */
export function circle(pl, { u, v, r, fill = color.surface, stroke: s = color.outline, strokeWidth = stroke.detailWidth, layer = 0, depth }) {
  return [detail(pl, depth, layer, { type: 'ellipse', u, v, r, style: { fill, stroke: s, strokeWidth } })];
}

/** Rectangle lying on a plane (status indicators, labels). */
export function indicator(pl, { u, v, w, h, fill = color.detail, stroke: s = 'none', strokeWidth = stroke.detailWidth, layer = 0, depth }) {
  const points = [[u, v], [u + w, v], [u + w, v + h], [u, v + h]].map(([a, b]) => pl.at(a, b));
  return [{ type: 'polygon', points, layer, depth, style: { fill, stroke: s, strokeWidth } }];
}

/** Repeated parallel lines on a plane (vents, grilles). Lines run along v. */
export function parallelLines(pl, { u, v, length, count, spacing, stroke: s = color.outline, strokeWidth = stroke.detailWidth, layer = 0, depth }) {
  return Array.from({ length: count }, (_, i) => ({
    type: 'line', layer, depth,
    points: [pl.at(u + i * spacing, v), pl.at(u + i * spacing, v + length)],
    style: { stroke: s, strokeWidth, fill: 'none' },
  }));
}

/**
 * Decorative symbol: 2D polygons in a unit square (0..1), placed on a plane
 * at (u, v) with the given size.
 */
export function symbol(pl, { u, v, size, polygons, fill = color.accent, stroke: s = 'none', strokeWidth = stroke.detailWidth, layer = 0, depth }) {
  return polygons.map((poly) => ({
    type: 'polygon', layer, depth,
    points: poly.map(([a, b]) => pl.at(u + a * size, v + b * size)),
    style: { fill, stroke: s, strokeWidth },
  }));
}
