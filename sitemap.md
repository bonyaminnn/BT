# Sitemap — Bony Amin

## Pages

| Page | Path | One-line purpose |
|---|---|---|
| Home | `/` | Land the value proposition in under five seconds and route every visitor to the work, the services or the enquiry form. |
| Work | `/work` | The full project index — proof that I've built something like what they need. |
| Case study | `/work/[slug]` | One project in depth: the problem, the decisions, what shipped, what it changed. |
| Services | `/services` | What I actually do, split by the three jobs: build, modify, enhance. |
| Process | `/process` | The named stages, durations and deliverables — the page that answers "is this person serious?" |
| About | `/about` | Who I am, how I work, and why one design engineer beats a hand-off chain. |
| Engagement & pricing | `/pricing` | Price bands and ways of working, so a buyer can self-qualify before they email. |
| Contact / Start a project | `/contact` | A short qualified enquiry form and a stated response time. |
| FAQ | `/faq` | Every objection answered in plain language; the AEO workhorse. |
| Journal | `/journal` | Short notes on craft and build decisions — keeps the site alive and earns search surface. |
| Journal post | `/journal/[slug]` | A single note. |
| Legal | `/privacy`, `/terms` | Privacy policy and terms. |
| 404 | `/not-found` | Catches bad URLs and sends people to Work or Contact. |

**AEO support (not navigable pages):** `/sitemap.xml`, `/robots.txt`, `/llms.txt`, and
JSON-LD on every page (`Person`, `ProfessionalService`, `FAQPage`, `BreadcrumbList`,
`CreativeWork` on case studies).

---

## Homepage sections, in order

Rhythm borrowed from the reference: a wide illustrated opening, generous air between
blocks, alternating image/text, a spot illustration as a breather, and a wide
illustrated closing. Comprehension budget: **the hero alone must work in 5 seconds, and
all three key messages must land within 3 scrolls.**

1. **Navigation** — sticky, minimal: name, four links (Work, Services, Process, About),
   one "Start a project" button.
2. **Hero** — headline, one supporting line, primary button + secondary text link, and a
   wide illustrated scene of the workbench. Carries Message 1 on its own. *(Scroll 1)*
3. **Trust strip** — a quiet row of facts (response time, what you own, fixed price,
   projects at a time) directly under the fold, so the claim is immediately backed.
   *(Scroll 1)*
4. **Statement section, no image** — one large typographic paragraph: one design
   engineer, both halves of the job, and I meet your product where it is. Carries
   Message 2. *(Scroll 2)*
5. **Three feature blocks, alternating image and text** — Build, Modify, Enhance: the
   three jobs I take, each a mid-size illustrated scene opposite a short proof-led
   paragraph. Proves Message 2. *(Scroll 2–3)*
6. **Selected work** — four outcome-led project cards with a counted label ("Selected
   work (04)") and a link to the full index. *(Scroll 3)*
7. **Services lineup** — the service set as a compact list with spot icons, so a visitor
   sees the whole range without leaving the page.
8. **Spot illustration breather** — one small object from the bench with a single line of
   copy. Resets the eye between the selling and the commercial terms.
9. **How working together works** — the engagement models with a stated price anchor and
   the objection-handling microcopy ("you own everything", "no lock-in") set beside them.
   Carries Message 3. *A practitioner's engagement section, not an agency pricing table.*
10. **Testimonials** — two named quotes with role and company. The proof that answers the
    disappearance doubt.
11. **FAQ** — eight questions in accessible accordions, marked up as `FAQPage` JSON-LD.
    Proves Message 3 and does the AEO heavy lifting.
12. **Closing call to action** — one headline, one button, the stated response time.
13. **Footer with a wide illustrated scene** — the same workbench at night, plus
    navigation, contact and legal links.
