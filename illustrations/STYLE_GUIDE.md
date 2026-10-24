# Isometric illustration style guide

Minimal technical isometric: precise, flat, neutral, one accent.

## Projection
- True isometric. World `+x` runs down-right at 30°, `+y` down-left at 30°, `+z` straight up.
- One world unit = the same screen length on all three axes (`unit` token, 20px at 512).
- No perspective, no vanishing points. Every edge of a box is at 30°, 150° or 90° (enforced by tests).

## Surfaces and light
| Surface | Token | Value |
|---|---|---|
| Top faces (brightest) | `color.surface` | `#FFFFFF` |
| Vertical faces | `color.side` | `#E5E5E1` |
| Background | `color.background` | `#F7F7F3` |
| Grid | `color.grid` | `#EAEAE4` |

Depth comes only from the top/side tone difference. No gradients, shadows, glows or filters.

## Line
- Outlines `#454545`, 1.25px at 512 (details 1px, grid 0.75px). Strokes scale with the artboard.
- Round joins and caps. Never pure black, never heavier than 1.5px at 512.

## Colour use
- Keep colour to a minimum: everything is white / light grey / charcoal.
- Accent `#F04416` appears at most twice per illustration (here: logo + one status light).
- Secondary details (inactive indicators) use `#B8B8B2`.

## Geometry
- Build from prisms. Details (screws, vents, indicators, logos) sit on a face plane, drawn in that face's local coordinates, never placed by hand in screen space.
- Stacked objects: identical units, constant gap (0.55 units for the server stack).
- Details are small and sparse: screws r = 0.16, vents spaced 0.34, indicators ≈ 0.55 × 0.3.

## Background
- Off-white with an isometric grid every 2 units, or fully transparent (no grid) for placing on other surfaces.

## Composition
- 512px square artboard, object centred on its projected bounding box.
