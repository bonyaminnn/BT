# Gridmarc — asset list

Every image slot on the homepage wireframe (`web/app/page.tsx`). The slots are defined in `web/lib/slots.ts`. File paths are relative to the Next.js app in `web/`, so `/public/assets/hero-scene.webp` means `web/public/assets/hero-scene.webp`.

**To drop in an asset:** export it at the listed ratio, save it to the path, then set `ready: true` on that slot in `web/lib/slots.ts`. The box stays the same size, so the layout won't move.

---

## Shared style rules (apply to every illustration)

**World: "The Survey."** One quiet, open valley, seen across many moments. A faint surveyor's grid lies over the land. Two small figures mark it, plan it and build on it, until it becomes a small, lived-in settlement. See `research.md` for the story.

**Look**
- Soft, hand-painted watercolour washes with loose, slightly broken fine ink linework (sepia-black, about 0.5–1 px at 1440 px wide). The colour may bleed past the lines a little.
- Warm off-white, cold-press paper texture under everything. Let the paper show through as the highlight colour, and never paint a flat white.
- In the larger scenes, a **faint pencil grid** (light graphite, roughly 5% opacity) is visible across the ground plane. In spots and icons it shows only as one or two guide lines. This is the brand's signature, so never leave it out of a scene.
- Lots of empty paper. Compositions are airy and asymmetric, and the subject takes no more than 40–60% of the frame. The edges fade into soft, irregular watercolour vignettes rather than hard rectangles, except in the hero and footer, which bleed full width.

**Palette** (keep to these, desaturated, about 60–70% saturation)
- Paper `#F6F1E7`
- Ink `#2B2622`
- Sage green `#9AAE8F` (land, trees)
- Clay terracotta `#C98B6B` (roofs, stakes, ribbons, the one warm accent)
- Mist blue `#A9BCC8` (sky, water, shadows)
- Ochre `#D8B46A` (light, lanterns, sun)
- Shadows use mist blue mixed with ink. There are no black fills, no neon colours and no gradients other than natural watercolour blooms.

**The two figures** (recurring characters)
- Small, gestural and faceless (no facial features). They always appear together in a scene unless the brief says otherwise. They are adult, gender-neutral and in simple workwear.
- **Figure A (design):** carries a drafting board or rolled plans and wears a soft clay-coloured scarf.
- **Figure B (development):** carries a toolbox, level or trowel and wears a sage cap.
- Keep their proportions (about 6 heads tall), colours and props the same across every asset.

**Never include:** text, letters, numbers, logos, UI screens, computers or phones drawn literally, real-world landmarks, any recognisable country, flags, crowds, 3D rendering, photorealism, gradients or glossy highlights, or hard drop shadows.

**Export:** WebP at quality 85. Large scenes are 2880 px wide. Feature, plan and portrait images are 1600 px on the long edge. Icons and spots are 800 × 800 px with a transparent background or on paper `#F6F1E7` (choose one and use it for the whole set; the recommended choice is a transparent background with soft paper-texture edges).

**Generator prompt suffix** (append to every brief): *"soft hand-painted watercolour and fine loose ink line on warm cold-press paper, faint pencil surveyor's grid, restrained palette of sage, clay terracotta, mist blue and ochre on off-white, generous empty space, calm, minimal, storybook editorial illustration, no text, no logos, no photorealism, no 3D."*

---

## Slot list

| # | ID | File path | Ratio | Type |
|---|---|---|---|---|
| 1 | LOGO-MARK | /public/assets/logo-mark.webp | 1:1 | icon |
| 2 | HERO-SCENE | /public/assets/hero-scene.webp | 16:6 | illustration |
| 3 | FEATURE-MAKERS | /public/assets/feature-makers.webp | 4:3 | illustration |
| 4 | FEATURE-SPEED | /public/assets/feature-speed.webp | 4:3 | illustration |
| 5 | FEATURE-WHEREVER | /public/assets/feature-wherever.webp | 4:3 | illustration |
| 6 | ICON-WEB-DESIGN | /public/assets/icon-web-design.webp | 1:1 | icon |
| 7 | ICON-WEB-DEV | /public/assets/icon-web-dev.webp | 1:1 | icon |
| 8 | ICON-APP | /public/assets/icon-app.webp | 1:1 | icon |
| 9 | ICON-SUPPORT | /public/assets/icon-support.webp | 1:1 | icon |
| 10 | WORK-01 | /public/assets/work-01.webp | 4:3 | product shot |
| 11 | WORK-02 | /public/assets/work-02.webp | 4:3 | product shot |
| 12 | WORK-03 | /public/assets/work-03.webp | 4:3 | product shot |
| 13 | STEP-SURVEY | /public/assets/step-survey.webp | 1:1 | icon |
| 14 | STEP-PLAN | /public/assets/step-plan.webp | 1:1 | icon |
| 15 | STEP-BUILD | /public/assets/step-build.webp | 1:1 | icon |
| 16 | STEP-TEND | /public/assets/step-tend.webp | 1:1 | icon |
| 17 | BREATHER-STAKE | /public/assets/breather-stake.webp | 1:1 | illustration |
| 18 | PLAN-SPRINT | /public/assets/plan-sprint.webp | 3:2 | illustration |
| 19 | PLAN-BUILD | /public/assets/plan-build.webp | 3:2 | illustration |
| 20 | PLAN-CARE | /public/assets/plan-care.webp | 3:2 | illustration |
| 21 | TEAM-ONE | /public/assets/team-one.webp | 4:5 | illustration |
| 22 | TEAM-TWO | /public/assets/team-two.webp | 4:5 | illustration |
| 23 | CTA-LANTERN | /public/assets/cta-lantern.webp | 1:1 | illustration |
| 24 | FOOTER-SCENE | /public/assets/footer-scene.webp | 16:5 | illustration |

That is 21 illustrated assets (generate these as one set) and 3 product shots (real screenshots, not generated).

---

## Briefs

### 1. LOGO-MARK
- **Path:** /public/assets/logo-mark.webp · **Ratio:** 1:1 · **Type:** icon
- **Where:** nav, shown at 32 px, so it must read at a tiny size.
- **Brief:** One wooden survey stake driven into the centre of a single square of grid, drawn as four fine ink lines with a slight wobble. A small clay-terracotta ribbon is tied at the top of the stake and lifts in a light breeze. There is one soft sage wash under the square and nothing else. Use a bold, simple silhouette and heavier ink than the rest of the set so it holds up at 32 px. Transparent background.
- **Note:** This is a placeholder mark for the wireframe. A final vector logo may replace it.

### 2. HERO-SCENE
- **Path:** /public/assets/hero-scene.webp · **Ratio:** 16:6 · **Type:** illustration
- **Where:** full-width hero under the headline, the first impression of the site.
- **Brief:** A wide, panoramic early-morning view across a gentle open valley. Low rolling hills fade into mist blue in the distance, a thin stream winds from left to right, and clusters of low rounded sage trees sit in the middle distance. Across the foreground meadow a faint pencil surveyor's grid runs into the distance in perspective. Left of centre (about a third of the way across), the two figures stand together: Figure A holds an unrolled plan and points out across the land, while Figure B kneels and taps the first clay-red survey stake into the ground with a mallet. A surveyor's tripod and level stand beside them. A few more stakes with small ribbons are spaced out along the grid, marking where things will go. In one right-hand corner of the valley stands a single old stone cottage, already lived in (a nod to existing products). Pale ochre morning sun sits low on the left, with long soft shadows. The sky is a very pale mist-blue wash fading to bare paper at the top so the headline above sits cleanly. Leave the centre of the scene uncluttered.

### 3. FEATURE-MAKERS
- **Path:** /public/assets/feature-makers.webp · **Ratio:** 4:3 · **Type:** illustration
- **Where:** feature block 1, "You work with the makers".
- **Brief:** A close, warm scene outdoors in the valley: a single long wooden trestle table on the grass under a sage tree. Figure A sits at one end sketching on a tilted drafting board, and Figure B sits at the other end fitting together a small wooden model frame of a house from a toolbox. Between them on the table, one shared rolled plan connects both their work, its edge lying under both their hands. There are two mugs, a pencil pot and a small level. Nobody else is in the scene. The faint grid is visible on the ground under the table. Soft vignette edges and plenty of paper space above.

### 4. FEATURE-SPEED
- **Path:** /public/assets/feature-speed.webp · **Ratio:** 4:3 · **Type:** illustration
- **Where:** feature block 2, "End to end, and quick".
- **Brief:** A small timber cabin shown in three overlapping stages from left to right, painted as one continuous scene: grid stakes and string, then a raised wall frame, then a finished cabin with a clay roof and a curl of smoke. Above the cabin a soft ochre sun traces a gentle arc of three faint positions from morning to afternoon, suggesting it all happened in one day. The two figures appear once, beside the finished cabin, setting down their tools. The ground grid runs underneath and ties the three stages together. The mood is calm efficiency, not frantic.

### 5. FEATURE-WHEREVER
- **Path:** /public/assets/feature-wherever.webp · **Ratio:** 4:3 · **Type:** illustration
- **Where:** feature block 3, "We meet you where you are".
- **Brief:** One plot of land split down the middle by a low wooden fence. **Left:** an older stone cottage with a slightly weathered roof, and Figure B on a short ladder adding a new timber extension and a fresh window to its side. **Right:** an empty meadow freshly marked with pencil grid lines and clay stakes, where Figure A stands holding a plan and looking out over it. A single path joins both halves through an open gate in the fence. Balance both halves visually. The message is "existing or new, same two people".

### 6. ICON-WEB-DESIGN
- **Path:** /public/assets/icon-web-design.webp · **Ratio:** 1:1 · **Type:** icon
- **Where:** services card "Web design", shown at about 144 px.
- **Brief:** A small wooden drafting board on a tilted easel. On it is a loose pencil-and-wash sketch of a tall building facade with neatly arranged windows (suggesting a page layout without drawing any UI or text). A pencil rests on the ledge, and one fine grid guide line crosses behind it. Isolated object, transparent background, generous padding, clay accent on the pencil.

### 7. ICON-WEB-DEV
- **Path:** /public/assets/icon-web-dev.webp · **Ratio:** 1:1 · **Type:** icon
- **Where:** services card "Web development".
- **Brief:** A short neat row of terracotta bricks being laid along a straight pencil grid line, with a mason's trowel resting on the last brick and a small dab of mortar. One brick sits slightly lifted, about to be placed. Isolated, transparent background, generous padding.

### 8. ICON-APP
- **Path:** /public/assets/icon-app.webp · **Ratio:** 1:1 · **Type:** icon
- **Where:** services card "App design & development".
- **Brief:** A tiny tall, narrow hut, proportioned roughly like a phone (about 1:2), with a clay roof, one warm ochre-lit window and a small door. It stands on a single grid square with a little tuft of grass. It suggests a compact product you can carry, without drawing a device. Isolated, transparent background.

### 9. ICON-SUPPORT
- **Path:** /public/assets/icon-support.webp · **Ratio:** 1:1 · **Type:** icon
- **Where:** services card "Support & care".
- **Brief:** A metal watering can mid-pour over a young sage sapling tied to a short clay-ribboned survey stake used as a support. A few water droplets in mist blue. Isolated, transparent background.

### 10. WORK-01
- **Path:** /public/assets/work-01.webp · **Ratio:** 4:3 · **Type:** product shot
- **Where:** selected work, card 1, "Website redesign".
- **Brief:** A real screenshot from a Gridmarc website project. Show the hero and one inner page as two browser frames overlapping slightly, on a flat paper-coloured `#F6F1E7` background with soft, even padding (8% margin). Use no device mockups with reflections and keep the frames flat and minimal. **Do not generate.**

### 11. WORK-02
- **Path:** /public/assets/work-02.webp · **Ratio:** 4:3 · **Type:** product shot
- **Where:** selected work, card 2, "Web app".
- **Brief:** A real screenshot of the main dashboard screen of a Gridmarc web app project, in a single flat browser frame on a `#F6F1E7` background, cropped to the most meaningful area. **Do not generate.**

### 12. WORK-03
- **Path:** /public/assets/work-03.webp · **Ratio:** 4:3 · **Type:** product shot
- **Where:** selected work, card 3, "Mobile app".
- **Brief:** Three real screens from a Gridmarc mobile app project, side by side in flat rounded-rectangle phone outlines on a `#F6F1E7` background, with the middle screen slightly raised. **Do not generate.**

### 13. STEP-SURVEY
- **Path:** /public/assets/step-survey.webp · **Ratio:** 1:1 · **Type:** icon
- **Where:** How we work, step 01 "Survey". Displayed in a circle, so keep the subject centred within an 80% circle.
- **Brief:** A surveyor's wooden tripod with a small brass level on top, standing on a tuft of sage grass, with one pencil grid line running behind it to the horizon. Transparent background.

### 14. STEP-PLAN
- **Path:** /public/assets/step-plan.webp · **Ratio:** 1:1 · **Type:** icon
- **Where:** step 02 "Plan". Circular crop.
- **Brief:** A rolled paper plan opened flat, held down at two corners by smooth river pebbles. On it are a few loose pencil lines and a grid, with no readable text, and a pencil lies across it. Seen from slightly above. Transparent background.

### 15. STEP-BUILD
- **Path:** /public/assets/step-build.webp · **Ratio:** 1:1 · **Type:** icon
- **Where:** step 03 "Build". Circular crop.
- **Brief:** A timber wall frame, half raised and braced by one diagonal prop, standing on a grid-marked foundation line. A hammer leans against it. Transparent background.

### 16. STEP-TEND
- **Path:** /public/assets/step-tend.webp · **Ratio:** 1:1 · **Type:** icon
- **Where:** step 04 "Tend". Circular crop.
- **Brief:** A finished wooden doorway with a clay-painted frame, and a small lit ochre lantern hanging on a hook beside it. A potted sage plant sits on the step. Warm glow. Transparent background.

### 17. BREATHER-STAKE
- **Path:** /public/assets/breather-stake.webp · **Ratio:** 1:1 · **Type:** illustration
- **Where:** the breather section, a quiet pause mid-page. Circular crop, shown at about 200 px.
- **Brief:** A single survey stake standing alone in a soft patch of meadow, with a long clay-terracotta ribbon trailing in the breeze. A small songbird is perched on top. One faint pencil grid line crosses the ground. There is a lot of empty paper around it. It should be the calmest image in the set.

### 18. PLAN-SPRINT
- **Path:** /public/assets/plan-sprint.webp · **Ratio:** 3:2 · **Type:** illustration
- **Where:** Plans card "Sprint".
- **Brief:** One small rectangular plot on open grass, outlined with taut string between four clay stakes, with pencil grid lines inside. One figure (Figure A) crouches at a corner checking the line with a small level. The image is minimal: one focused job.
- **Series note:** Plans 18–20 share the same plot, the same camera angle and the same horizon line, so together they read as a progression.

### 19. PLAN-BUILD
- **Path:** /public/assets/plan-build.webp · **Ratio:** 3:2 · **Type:** illustration
- **Where:** Plans card "Build" (the featured plan).
- **Brief:** The same plot from the same angle, now with a small house fully timber-framed and half its clay roof tiled. Both figures are working: Figure B on a ladder at the roof, Figure A below handing up a plan.

### 20. PLAN-CARE
- **Path:** /public/assets/plan-care.webp · **Ratio:** 3:2 · **Type:** illustration
- **Where:** Plans card "Care".
- **Brief:** The same plot from the same angle with the house finished: painted walls, smoke from the chimney and a small garden in front. Figure B waters the plants while Figure A trims a hedge. Ochre afternoon light.

### 21. TEAM-ONE
- **Path:** /public/assets/team-one.webp · **Ratio:** 4:5 · **Type:** illustration
- **Where:** The two of us, design partner.
- **Brief:** A half-length illustrated portrait of Figure A (design) in the same watercolour style, drawn larger than in the scenes but still faceless or with only the softest suggestion of features. They hold a drafting board against their chest with a pencil behind one ear and wear the clay-coloured scarf. Behind them is a soft vignette of the valley with faint grid lines. Calm, confident posture, three-quarter view turned slightly right (towards TEAM-TWO).
- **Note:** If the founders would rather use photos, they must be shot in a matching warm, soft style. Illustrated portraits are recommended for consistency.

### 22. TEAM-TWO
- **Path:** /public/assets/team-two.webp · **Ratio:** 4:5 · **Type:** illustration
- **Where:** The two of us, development partner.
- **Brief:** The companion portrait to TEAM-ONE, with the same framing, scale and background: Figure B (development) holding a small toolbox at their side with a level tucked under their arm, wearing the sage cap. Three-quarter view turned slightly left (towards TEAM-ONE), so the pair face each other when side by side.

### 23. CTA-LANTERN
- **Path:** /public/assets/cta-lantern.webp · **Ratio:** 1:1 · **Type:** illustration
- **Where:** the closing call to action, "Have something to build or fix?". Circular crop, about 190 px.
- **Brief:** A low wooden fence with a gate standing open, inviting you in. A lit ochre lantern hangs on the gatepost and a soft path leads through into a grid-marked meadow beyond. Dusk light with a gentle glow, and no figures (the space is waiting for the visitor).

### 24. FOOTER-SCENE
- **Path:** /public/assets/footer-scene.webp · **Ratio:** 16:5 · **Type:** illustration
- **Where:** full width above the footer links. It bookends HERO-SCENE.
- **Brief:** The same valley as HERO-SCENE, from the same viewpoint with the same hills, stream and tree clusters, now at dusk. Where the stakes stood there is a small, finished settlement of eight to ten varied cottages and workshops with clay roofs, connected by footpaths and a small footbridge over the stream. The old stone cottage from the hero is still there, now extended. Windows glow warm ochre, the sky is a soft watercolour wash blending from mist blue to pale ochre at the horizon, and the first stars appear as tiny paper-white dots. On a rise in the foreground, the two figures sit on a bench looking over what they built, with their tools beside them. The faint pencil grid is still just visible beneath the paths. Fade the top edge to paper so it blends into the page.
