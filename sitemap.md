# Sitemap — Bony Amin, Design Engineer

Built on the IA document. Navigation and homepage order follow it exactly; the
additions are noted and explained.

## Pages

| Page | Path | One-line purpose |
|---|---|---|
| Home | `/` | Land the positioning in under five seconds and route both audiences — hiring teams to the work, clients to services and contact. |
| Work | `/work` | The full project index, with shipped work clearly separated from self-directed explorations. |
| Case study | `/work/[slug]` | One project in depth: context, problem, my role, decisions, implementation, outcomes. Three to write: `tl-ops-challan`, `truck-lagbe-home-shifting`, `shohoz-bus-booking`. |
| Services | `/services` | What I help with, and whether an engagement is design, implementation, or both. |
| About | `/about` | Background, how I work, what I'm interested in outside work. |
| Testimonials | `/testimonials` | Approved quotes with real names and roles. *Do not publish until at least two are approved.* |
| Contact | `/contact` | Enquiry route for roles and projects, with a stated response time. |
| Résumé | `/resume.pdf` | Downloadable CV, linked from the header-adjacent CTAs, About and the footer. |
| Lab | `/lab` | **Addition.** Interactive experiments with source links — IA build order step 4 needs somewhere to live, and for a design engineer a working demo outperforms any case study. |
| Journal | `/journal` | **Addition, optional.** Short notes on design and build decisions. Earns search surface and demonstrates thinking; cut it if you won't maintain it. |
| Legal | `/privacy` | Privacy note, needed once a contact form collects anything. |
| 404 | `/not-found` | Routes bad URLs back to Work or Contact. |

**AEO support (not navigable pages):** `/sitemap.xml`, `/robots.txt`, `/llms.txt`, and
JSON-LD on every page — `Person` and `ProfessionalService` sitewide, `FAQPage` on the
homepage, `CreativeWork` plus `BreadcrumbList` on each case study.

---

## Primary navigation

Work · Services · About · Testimonials · **CTA: Get in touch**

Exactly as the IA specifies. "Get in touch" is the only button in the header and points
at the contact section on the homepage.

---

## Homepage sections, in order

The IA's nine-part structure, with one breather and one Q&A block added. Comprehension
budget: **the hero alone must work in 5 seconds, and the three key messages must land
within 3 scrolls.**

1. **Navigation** — name and role, four links, one CTA. Sticky.
2. **Hero** — eyebrow, headline, one supporting line, two CTAs ("Explore my work"
   primary, "Let's work together" secondary), the expertise line, and a wide **real
   product interface** rather than an illustration. *(Scroll 1)*
3. **Credibility** — four facts: years, domains, who I work with, focus. Plus an
   optional logo row. Backs the hero claim immediately. *(Scroll 1–2)*
4. **Selected work** — three projects, alternating image and text, each tagged *Shipped
   product* or *Self-directed redesign*, each stating my actual contribution. Closes
   with the TL Ops workflow diagram. *(Scroll 2–3)*
5. **Process** — Understand, Design, Build, Iterate. Four steps with spot icons. The
   numbering is real sequence, not decoration. *(Scroll 3)*
6. **Services** — product design, frontend implementation, design systems. One CTA.
7. **Breather** — **addition.** One spot illustration and a single line, between the
   selling and the proof. The reference site's rhythm depends on this kind of pause.
8. **Testimonials** — three themed slots: product collaboration, design engineering,
   ownership and delivery. Currently rendered as *quote pending* placeholders.
9. **About** — personal story, interests, portrait, résumé link.
10. **Contact** — the closing CTA, plus **a visible six-question Q&A** (addition). This
    is where AEO is earned: structured data describing answers a visitor can't see
    violates search guidelines, so the answers live on the page.
11. **Footer** — wide closing scene, site nav, résumé, LinkedIn, GitHub, email.
