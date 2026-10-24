#!/usr/bin/env python3
"""Batch export: build every concept to SVG, then PNG at 512, 1024 and 2048px.

Usage: python3 export.py [concept-id]

SVGs come from the JS engine (scripts/build.js). PNGs are rasterised with
cairosvg when installed, otherwise with the Chromium bundled with Playwright.
"""
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent
OUT = ROOT / "output"
SIZES = (512, 1024, 2048)


def main() -> None:
    only = sys.argv[1:2]
    subprocess.run(["node", str(ROOT / "scripts" / "build.js"), *only], check=True)
    svgs = sorted(p for p in OUT.glob("*.svg") if not only or p.stem.startswith(only[0]))
    jobs = [(svg, OUT / "png" / f"{svg.stem}@{size}.png", size) for svg in svgs for size in SIZES]
    (OUT / "png").mkdir(exist_ok=True)

    try:
        import cairosvg  # type: ignore
        for svg, png, size in jobs:
            cairosvg.svg2png(url=str(svg), write_to=str(png), output_width=size, output_height=size)
    except ImportError:
        args = [str(a) for job in jobs for a in job]
        subprocess.run(["node", str(ROOT / "scripts" / "rasterize.cjs"), *args], check=True)

    for _, png, _ in jobs:
        print(f"exported {png.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
