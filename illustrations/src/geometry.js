// Isometric projection maths. World axes: +x runs down-right, +y runs
// down-left, +z runs straight up. Both ground axes sit at exactly 30deg.

export const COS30 = Math.sqrt(3) / 2;
export const SIN30 = 0.5;

/** Project a world point [x, y, z] (iso units) to screen [sx, sy] (px). */
export function project([x, y, z], scale = 1, origin = [0, 0]) {
  return [
    origin[0] + (x - y) * COS30 * scale,
    origin[1] + ((x + y) * SIN30 - z) * scale,
  ];
}

export const add = (a, b) => a.map((v, i) => v + b[i]);
export const mul = (a, k) => a.map((v) => v * k);

/**
 * A plane in world space: point = origin + u*a + v*b.
 * Faces of a box are planes; details (screws, vents, logos) are drawn in
 * the plane's local 2D coordinates and mapped into world space.
 */
export function plane(origin, a, b) {
  return {
    origin, a, b,
    at(u, v) { return add(origin, add(mul(a, u), mul(b, v))); },
  };
}

/** Planes for the three visible faces of a box at pos with size [w, d, h]. */
export function boxFaces([x, y, z], [w, d, h]) {
  return {
    // top: u along +x, v along +y
    top: plane([x, y, z + h], [1, 0, 0], [0, 1, 0]),
    // left-facing (y = y + d): u along +x, v downward
    left: plane([x, y + d, z + h], [1, 0, 0], [0, 0, -1]),
    // right-facing (x = x + w): u along -y (left to right on screen), v downward
    right: plane([x + w, y + d, z + h], [0, -1, 0], [0, 0, -1]),
  };
}

/** Parameters of the ellipse a circle of radius r on a plane projects to. */
export function projectedCircle(pl, u, v, r, scale, origin) {
  const c = project(pl.at(u, v), scale, origin);
  const pa = project(add(pl.origin, pl.a), scale, [0, 0]);
  const p0 = project(pl.origin, scale, [0, 0]);
  const pb = project(add(pl.origin, pl.b), scale, [0, 0]);
  // Columns of the 2x2 linear map (local -> screen), scaled by r.
  const m = [(pa[0] - p0[0]) * r, (pa[1] - p0[1]) * r, (pb[0] - p0[0]) * r, (pb[1] - p0[1]) * r];
  // Ellipse axes from the singular values of M.
  const [a, b, c2, d] = [m[0], m[2], m[1], m[3]]; // rows: [a b; c d]
  const e = (a + d) / 2, f = (a - d) / 2, g = (c2 + b) / 2, h = (c2 - b) / 2;
  const q = Math.hypot(e, h), s = Math.hypot(f, g);
  const rx = q + s, ry = Math.abs(q - s);
  const angle = (Math.atan2(g, f) + Math.atan2(h, e)) / 2;
  return { cx: c[0], cy: c[1], rx, ry, rotate: (angle * 180) / Math.PI };
}

/** Painter's-order depth key: larger is nearer to the viewer. */
export const depth = ([x, y, z]) => x + y + z;

/** Bounding box of screen points. */
export function bounds(points) {
  const xs = points.map((p) => p[0]), ys = points.map((p) => p[1]);
  return { minX: Math.min(...xs), maxX: Math.max(...xs), minY: Math.min(...ys), maxY: Math.max(...ys) };
}
