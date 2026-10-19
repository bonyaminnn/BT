# Sitemap — Bony Amin

## Pages

| Page | Path | One-line purpose |
|---|---|---|
| Home | `/` | Land the value proposition in under five seconds and route every visitor to work, services or contact. |
| Work | `/work` | The full project index — proof that we've built something like what they need. |
| Case study | `/work/[slug]` | One project in depth: the problem, our decisions, what we shipped, what it changed. |
| Services | `/services` | What we actually do, how a project runs stage by stage, and what each engagement includes. |
| Plans & Pricing | `/pricing` | Price bands and engagement models so a buyer can self-qualify before they email. |
| About | `/about` | Who the two of us are, how we work, and why a two-person studio is the point. |
| Process | `/process` | The named stages, durations and deliverables — the de-risking page. |
| Contact / Start a project | `/contact` | A short qualified enquiry form and a stated response time. |
| FAQ | `/faq` | Every objection answered in plain language; the AEO/answer-engine workhorse. |
| Journal | `/journal` | Short notes on craft and build decisions — keeps the site alive and earns search surface. |
| Journal post | `/journal/[slug]` | A single note. |
| Legal | `/privacy`, `/terms` | Privacy policy and terms. |
| 404 | `/not-found` | Catches bad URLs and sends people back to Work or Contact. |

**AEO support (not navigable pages):** `/sitemap.xml`, `/robots.txt`, `/llms.txt`,
and JSON-LD on every page (`Person`, `ProfessionalService`, `FAQPage`,
`BreadcrumbList`, `CreativeWork` on case studies).

---

## Homepage sections, in order

Rhythm borrowed from the reference: a wide illustrated opening, generous air between
blocks, alternating image/text, a spot illustration as a breather, and a wide
illustrated closing. Comprehension budget: **the hero alone must work in 5 seconds,
and all three key messages must land within 3 scrolls.**

1. **Navigation** — sticky, minimal: wordmark, four links (Work, Services, Pricing,
   About), one "Start a project" button.
2. **Hero** — headline, one supporting line, primary button + secondary text link, and
   a wide illustrated scene of the two-desk workshop. Carries Message 1 on its own.
   *(Scroll 1)*
3. **Trust strip** — a quiet line of client names / "N projects shipped" / response
   time, directly under the fold so the claim is immediately backed. *(Scroll 1)*
4. **Statement section, no image** — one large typographic paragraph: two people, end
   to end, faster. Carries Message 2. *(Scroll 2)*
5. **Three feature blocks, alternating image and text** — Design, Build, Ship. Each a
   mid-size illustrated scene opposite a short proof-led paragraph. Proves Message 2.
   *(Scroll 2–3)*
6. **Selected work** — three or four outcome-led project cards with a counted label
   ("Selected work (04)") and a link to the full index. *(Scroll 3)*
7. **Services lineup** — the service set as a compact list with icon spots, so a
   visitor sees the full range without leaving the page.
8. **Spot illustration breather** — a small object from the workshop with one line of
   copy. Resets the eye between selling and pricing.
9. **Plans** — three engagement bands with a stated price anchor, plus the
   objection-handling microcopy ("you own everything", "no lock-in") set right beside
   them. Carries Message 3.
10. **Testimonials** — two named quotes with role and company. The proof that answers
    the disappearance doubt.
11. **FAQ** — six to eight questions in accessible accordions, marked up as `FAQPage`
    JSON-LD. Proves Message 3 and does the AEO heavy lifting.
12. **Closing call to action** — one headline, one button, the stated response time.
13. **Footer with a wide illustrated scene** — the same workshop at night, plus
    navigation, contact and legal links.
