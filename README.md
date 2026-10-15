# Bony + Taahzino — studio website

Static site (HTML, CSS, vanilla JS). No build step: open `index.html`, or deploy the folder to any static host (GitHub Pages, Netlify, Vercel).

## Website structure

Built with the Lookbook process. Setup answers came from the brand positioning doc, so no setup questions were needed.

| Decision | Value |
|---|---|
| Industry | Agency (serving Technology and SaaS) |
| Website type | Agency website |
| Purpose | Generate leads or enquiries |
| Communication | Clear and informative, with reassurance |
| Primary audience | Founders, product and engineering leads at small and midsize B2B SaaS companies |
| Primary conversion | Contact form ("Discuss your product") |
| Secondary actions | Read services, read work, read FAQ |

| Page | Job | Sections |
|---|---|---|
| `index.html` | Explain the offer and route to contact | Hero → trust commitments → problem ("Sound familiar?") → three services → 4-step process → work teaser → fit / not a fit → founders → FAQ → what happens next |
| `services.html` | Help visitors choose an engagement | Jump links → UX review → Design and build sprint → Ongoing improvement → comparison → capabilities → pricing note |
| `work.html` | Show evidence | Case study list (demo) → how we write about work |
| `about.html` | Show the accountable people | Story → founders (demo) → four principles |
| `contact.html` | Qualify and capture the lead | Form with hints and validation → what happens next |

## Design direction

The design follows DesignPick 001 ("Calm Wellness"), adapted for a product studio. It uses warm editorial styling, restrained colour and layered product illustrations, with calm scroll reveals.

- **Colours** (tokens in `styles.css`): ivory `#FAF6F3`, white, brown `#301100`, taupe `#A9846F` (decorative only), taupe text `#7A5A47`, beige `#D6B9A3`, sand `#E9DDD4`
- **Type:** Instrument Serif (headings, italic emphasis), DM Sans (body, UI)
- **Shape:** pill buttons, 12/20/28px radii, soft shadows only on lifted elements
- **Motion:** 700ms fade-up reveals with `cubic-bezier(0.22, 1, 0.36, 1)` and 90–100ms staggers. Fully disabled under `prefers-reduced-motion`. Content stays visible if JavaScript fails.

## What works and what's still placeholder

| Item | Status |
|---|---|
| Navigation, mobile menu, anchors, links between pages | Working |
| Service links preselect the form's "Main challenge" (`contact.html?challenge=ux`) | Working |
| Form validation (per-field messages, focus on first error) | Working |
| Form sending | Opens the visitor's email app (`mailto:`). Set `CONTACT_EMAIL` in `script.js`, or connect a form service like Formspree. |
| Case studies on `work.html` and the home page | **Demo content.** Labelled on the page, so replace them before launch. |
| Founder roles and bios on `about.html` | **Demo content.** Labelled on the page. |
| Images in `assets/` | Placeholder illustrations. Replace with real product screenshots using the same file names. |
| Social links, address, legal pages | Not added. None were supplied, so none were invented. |

## Design quality check

Pass = checked in a browser or measured. Needs review = needs a human decision. Not checked = not tested.

**Visual quality**
- Pass: clear hierarchy, with one primary CTA ("Discuss your product") used consistently
- Pass: typography and spacing come from shared tokens
- Pass: colour contrast. Text pairs measure 4.66:1 to 13:1, all at or above WCAG AA. Taupe `#A9846F` is never used for text.
- Needs review: imagery. The illustrations are placeholders.

**UX quality**
- Pass: navigation labels and active page state
- Pass: form labels, hints, error messages and success state
- Pass: mobile layout. Checked at 390, 820 and 1440px with no horizontal overflow.
- Needs review: what happens after submit, because `mailto:` depends on the visitor having an email app

**Accessibility**
- Pass: skip link, visible focus styles, one `h1` per page, labelled form fields, `aria-current` on navigation
- Pass: reduced-motion fallback
- Not checked: screen reader walkthrough, and keyboard-only pass through every page

**Content integrity**
- Pass: no invented testimonials, client logos, metrics, prices or certifications
- Needs review: demo case studies and founder bios must be replaced before launch
- Pass: no broken internal links or missing assets (checked automatically across all 5 pages)
