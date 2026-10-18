# Gridmarc — homepage wireframe

Low-fi grayscale wireframe built with Next.js and Tailwind CSS. Every image is a labelled gray box that maps to a slot in `lib/slots.ts` and a brief in `../assets.md`.

```bash
npm install
npm run dev   # http://localhost:3000
```

To drop in a real asset, save it at the slot's path in `public/assets/`, then set `ready: true` on that slot in `lib/slots.ts`.

Strategy docs: `../research.md`, `../sitemap.md`, `../assets.md`.
