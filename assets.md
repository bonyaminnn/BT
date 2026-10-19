# Asset briefs — Bony Amin homepage

20 slots, in two layers. Every slot is already wired into the wireframe at the path
below — drop the real file in and the layout does not change.

**Why two layers.** The IA requires the hero to be a real product interface and requires
real screenshots throughout. For a hiring team the screenshot *is* the credential, so
product truth is the load-bearing layer and the drawn layer only connects it. Nine of
these are photographs or captures of real things and must not be illustrated; eleven are
drawn.

---

## Layer 1 — product truth (capture, never illustrate)

These are real: screens, logos, a face. **Nothing in this layer may be generated.** If
confidentiality blocks a screen, redraw it as a faithful schematic of the real layout
rather than substituting something prettier — and say so in the case study.

**Shared capture rules.** One neutral light-grey ground for every frame. One device
framing per platform — the same browser chrome for web, the same phone frame for mobile,
same corner radius, same shadow, same scale. Straight-on, never angled or in
perspective. No gradient backdrops, no floating 3D mockups, no reflections. Real data
where permitted, realistic and consistent dummy data where not — never obvious filler.
Annotation only where it explains a decision: thin leader lines, one small label, same
type treatment every time. Export at 2x, `.webp`, long edge 2400px.

| ID | Path | Ratio | Type | What to capture |
|---|---|---|---|---|
| `HERO-PRODUCT` | `/public/assets/hero-product.webp` | 16:9 | product shot | The single most legible screen from shipped work — the TL Ops challan workflow or the Truck Lagbe booking flow. It has to read at a glance as *real operational software*, so pick density over beauty. This is the five-second proof of the headline. |
| `CRED-LOGOS` | `/public/assets/cred-logos.webp` | 8:1 | product shot | A quiet single row of company or product marks, grayscale, optically balanced for size. **Only marks cleared for publication.** If none are cleared, delete this slot — an empty logo row is worse than no logo row. |
| `WORK-01` | `/public/assets/work-01-tlops.webp` | 16:10 | product shot | TL Ops challan submission and review — the primary workflow screen. Show the structure: list, status, review state. |
| `WORK-02` | `/public/assets/work-02-trucklagbe.webp` | 16:10 | product shot | Truck Lagbe home shifting — two or three mobile frames showing service discovery leading into booking. The sequence is the point. |
| `WORK-03` | `/public/assets/work-03-shohoz.webp` | 16:10 | product shot | Shohoz seat selection, before and after, as mobile frames. Label which is which; this project is tagged a self-directed redesign on the page and the image must not blur that. |
| `TESTIMONIAL-01` | `/public/assets/testimonial-01.webp` | 1:1 | product shot | Approved headshot of the first referee, or their company mark if a photo isn't permitted. |
| `TESTIMONIAL-02` | `/public/assets/testimonial-02.webp` | 1:1 | product shot | Approved headshot of the second referee, same treatment. |
| `TESTIMONIAL-03` | `/public/assets/testimonial-03.webp` | 1:1 | product shot | Approved headshot of the third referee, same treatment. |
| `ABOUT-PORTRAIT` | `/public/assets/about-portrait.webp` | 4:5 | product shot | One real photograph of you. Natural light, plain uncluttered background, looking at camera, neutral clothing. Warm but not casual. This is the only face on the page and it does the trust work a location line normally would. |

---

### Ticker (interface details)

Six **detail crops**, not whole screens — the row moves, and a full page is unreadable at
speed while a cropped table, form or component sheet reads instantly. Same capture rules
as above, but crop tight: one element filling the frame, enough surrounding context to
place it. All six at identical 4:3 so the row never jitters as it scrolls. These may be
the most persuasive assets on the page for an engineering audience, because empty states
and component states are what people who build things look for.

| ID | Path | Ratio | Type | What to capture |
|---|---|---|---|---|
| `TICKER-01` | `/public/assets/ticker-01.webp` | 4:3 | product shot | The challan review table with its status column — density that reads as real operational software. |
| `TICKER-02` | `/public/assets/ticker-02.webp` | 4:3 | product shot | The home-shifting booking form mid-completion, on mobile. |
| `TICKER-03` | `/public/assets/ticker-03.webp` | 4:3 | product shot | The seat-selection grid, a few seats held and one unavailable. |
| `TICKER-04` | `/public/assets/ticker-04.webp` | 4:3 | product shot | A component library sheet — buttons and inputs in their states, as built. |
| `TICKER-05` | `/public/assets/ticker-05.webp` | 4:3 | product shot | An empty state with its error copy, showing the writing as much as the layout. |
| `TICKER-06` | `/public/assets/ticker-06.webp` | 4:3 | product shot | A dense filter and search bar with active filter chips applied. |

---

## Layer 2 — the drawn set

### Shared style rules

**Medium and look.** Fine ink linework with a single soft grey wash. Hand-drawn feel,
visibly imperfect lines, but restrained and precise — these sit beside screenshots of
enterprise software and must not fight them. No watercolour bloom, no texture-heavy
painting, no whimsy, no cartoon faces.

**Palette.** Warm paper ground (around #FAF8F4), one warm-grey wash, near-black ink. A
single muted accent at most, on one small element per drawing. No gradients, no colour
beyond that.

**Light.** Soft, from the upper left, consistent across every asset. Short soft shadows.

**Composition.** Generous negative space. No frame, border or containing circle. Washes
fade softly into the paper. No text, lettering or logos anywhere in the artwork.

**The one place: the desk.** Every drawn asset is an object from a single imagined desk —
notebook, pencil, magnifier, modular blocks, a loop arrow, a camera, a closed laptop.
They are **tools, not ornaments**: things used to make something, which is the claim the
page is making. Nothing abstract, no floating UI, no generic tech iconography.

**Delivery.** `.webp`, transparent or warm-paper ground. 256px square for icons, 1200px
long edge for spots, 2400px for the footer scene.

### Process icons

Four square spot icons, each one object, centred, reading clearly at 32px. The set must
look like one hand drew them in one sitting: same line weight, same wash density, same
optical size.

| ID | Path | Ratio | Type | Brief |
|---|---|---|---|---|
| `PROCESS-01` | `/public/assets/process-01-understand.webp` | 1:1 | icon | A magnifier resting over a simple process diagram — three connected nodes, one node under the lens. |
| `PROCESS-02` | `/public/assets/process-02-design.webp` | 1:1 | icon | Two overlapping interface frames with a hand-drawn connector arcing between them. |
| `PROCESS-03` | `/public/assets/process-03-build.webp` | 1:1 | icon | Three modular blocks of different widths assembling into one unit, one still mid-air. |
| `PROCESS-04` | `/public/assets/process-04-iterate.webp` | 1:1 | icon | A loop arrow closing around a small interface frame, the arrowhead slightly overlapping its own tail. |

### Service icons

Four now, one per service. Same construction as the process icons, same optical weight —
they appear further down the same page and any inconsistency will read as carelessness.

| ID | Path | Ratio | Type | Brief |
|---|---|---|---|---|
| `ICON-WEBSITE` | `/public/assets/icon-website.webp` | 1:1 | icon | A browser window, drawn simply, with soft light falling through it onto an implied surface. |
| `ICON-APP` | `/public/assets/icon-app.webp` | 1:1 | icon | A small hinged toolbox, lid open, two simple tools visible inside. |
| `ICON-FRONTEND` | `/public/assets/icon-frontend.webp` | 1:1 | icon | A pair of angle brackets enclosing a small layout frame. |
| `ICON-SYSTEM` | `/public/assets/icon-system.webp` | 1:1 | icon | Modular blocks of different widths stacked so they interlock — the same blocks as `PROCESS-03`, at rest. |

### Spots and scenes

| | |
|---|---|
| **ID** | `WORK-FLOW-DIAGRAM` |
| **Path** | `/public/assets/work-flow-diagram.webp` |
| **Ratio** | 16:9 |
| **Type** | illustration |

**Brief.** The TL Ops operational process, drawn twice: the paper workflow above, the
digitised workflow below. Clean node-and-arrow diagram, ink linework, grey wash to fill
the nodes, labels in the page's own type rather than hand-lettered. The honest story is
visible in the shape alone — fewer steps, fewer loops back, one clear review gate. This
is the most load-bearing drawn asset on the page: it is the one that shows you think
about systems and not only screens, so draw it from the real process, not a tidied
invention.

| | |
|---|---|
| **ID** | `BREATHER-SPOT` |
| **Path** | `/public/assets/breather-spot.webp` |
| **Ratio** | 3:2 |
| **Type** | illustration |

**Brief.** A desk at rest: a closed laptop, a notebook with a pencil laid across it,
nothing else. Most of the frame is bare warm paper. Deliberately still and
under-filled — this asset's only job is to let the eye rest between the services pitch
and the proof. Accent on the pencil.

| | |
|---|---|
| **ID** | `ABOUT-SPOT` |
| **Path** | `/public/assets/about-spot.webp` |
| **Ratio** | 3:2 |
| **Type** | illustration |

**Brief.** A film camera resting beside the same notebook from `BREATHER-SPOT`, lens cap
off, strap falling loosely out of frame. The one personal note in the set: it ties the
stated interest in photography to the habit the work actually depends on — noticing
details other people walk past. Keep it as quiet as the rest; no scenery, no travel
clichés. Accent on the lens barrel.

| | |
|---|---|
| **ID** | `FOOTER-SCENE` |
| **Path** | `/public/assets/footer-scene.webp` |
| **Ratio** | 16:5 |
| **Type** | illustration |

**Brief.** The wide closing bookend: the whole desk at the end of the day, seen straight
on. Monitor dark, notebook open mid-page, pencil where it was put down, the camera at
the edge of frame, one lamp lit at the left casting light across the surface. The work is
paused, not packed away. Most of the frame is quiet. Must read as the same desk every
other drawn asset came from. Accent on the warm core of the lamp.

---

## Slot index

| ID | Path | Ratio | Type | Layer |
|---|---|---|---|---|
| HERO-PRODUCT | /public/assets/hero-product.webp | 16:9 | product shot | 1 |
| CRED-LOGOS | /public/assets/cred-logos.webp | 8:1 | product shot | 1 |
| WORK-01 | /public/assets/work-01-tlops.webp | 16:10 | product shot | 1 |
| WORK-02 | /public/assets/work-02-trucklagbe.webp | 16:10 | product shot | 1 |
| WORK-03 | /public/assets/work-03-shohoz.webp | 16:10 | product shot | 1 |
| WORK-FLOW-DIAGRAM | /public/assets/work-flow-diagram.webp | 16:9 | illustration | 2 |
| PROCESS-01 | /public/assets/process-01-understand.webp | 1:1 | icon | 2 |
| PROCESS-02 | /public/assets/process-02-design.webp | 1:1 | icon | 2 |
| PROCESS-03 | /public/assets/process-03-build.webp | 1:1 | icon | 2 |
| PROCESS-04 | /public/assets/process-04-iterate.webp | 1:1 | icon | 2 |
| ICON-WEBSITE | /public/assets/icon-website.webp | 1:1 | icon | 2 |
| ICON-APP | /public/assets/icon-app.webp | 1:1 | icon | 2 |
| ICON-FRONTEND | /public/assets/icon-frontend.webp | 1:1 | icon | 2 |
| ICON-SYSTEM | /public/assets/icon-system.webp | 1:1 | icon | 2 |
| BREATHER-SPOT | /public/assets/breather-spot.webp | 3:2 | illustration | 2 |
| TESTIMONIAL-01 | /public/assets/testimonial-01.webp | 1:1 | product shot | 1 |
| TESTIMONIAL-02 | /public/assets/testimonial-02.webp | 1:1 | product shot | 1 |
| TESTIMONIAL-03 | /public/assets/testimonial-03.webp | 1:1 | product shot | 1 |
| ABOUT-PORTRAIT | /public/assets/about-portrait.webp | 4:5 | product shot | 1 |
| ABOUT-SPOT | /public/assets/about-spot.webp | 3:2 | illustration | 2 |
| TICKER-01 | /public/assets/ticker-01.webp | 4:3 | product shot | 1 |
| TICKER-02 | /public/assets/ticker-02.webp | 4:3 | product shot | 1 |
| TICKER-03 | /public/assets/ticker-03.webp | 4:3 | product shot | 1 |
| TICKER-04 | /public/assets/ticker-04.webp | 4:3 | product shot | 1 |
| TICKER-05 | /public/assets/ticker-05.webp | 4:3 | product shot | 1 |
| TICKER-06 | /public/assets/ticker-06.webp | 4:3 | product shot | 1 |
| FOOTER-SCENE | /public/assets/footer-scene.webp | 16:5 | illustration | 2 |

**Total: 27 slots** — 15 real captures (layer 1) and 12 drawn assets (layer 2). Only
layer 2 is generated as a set.

The original brief planned around 20 assets; the ticker and the fourth service icon take it to 27. All six additions
are captures of work that already exists, so nothing new has to be generated — only
screenshotted and cropped.
