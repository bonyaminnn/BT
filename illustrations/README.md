# Isometric illustration engine

Generates minimal technical isometric SVG illustrations. Concept 001 is the **server stack** for the home page.

```
npm run build        # concepts -> output/*.svg
npm test             # geometry + SVG validation
python3 export.py    # SVG + PNG at 512 / 1024 / 2048 (output/png)
```
Open `preview.html` to see the result.

## Architecture
| File | Job |
|---|---|
| `src/geometry.js` | Projection maths, face planes, circle → ellipse projection. No styling. |
| `src/tokens.js` | Colours, stroke widths, unit size, grid spacing. |
| `src/primitives.js` | `prism`, `cube`, `platform`, `stack`, `circle`, `indicator`, `parallelLines`, `symbol`. Return world-space shape descriptors. |
| `src/renderer.js` | Projects, orders (layer → depth → insertion), fits to the artboard, writes SVG with background/grid options. |
| `src/components/` | Reusable objects built from primitives (`serverUnit.js`). |
| `concepts/` | One file per illustration: `{ id, title, shapes() }`. |
| `scripts/build.js` | Renders every concept (off-white + transparent variants). |
| `export.py` | Batch SVG + PNG export. |
| `tests/` | Axis angles, equal axis scale, ellipse maths, determinism, SVG structure, palette, bounds. |

To add an illustration, add a file in `concepts/` that composes components; nothing else changes.

See `STYLE_GUIDE.md` for the visual rules.
