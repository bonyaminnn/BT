import Slot from "@/components/Slot";
import IconSlot from "@/components/IconSlot";
import { faqs } from "@/content/faqs";

/* ---------------------------------------------------------------- primitives */

function Section({ id, label, children, className = "" }) {
  return (
    <section
      id={id}
      aria-label={label}
      className={`border-t border-g200 px-5 py-20 sm:px-8 md:py-28 ${className}`}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

function Eyebrow({ children }) {
  return (
    <p className="font-mono text-[11px] font-semibold tracking-[0.18em] text-g500 uppercase">
      {children}
    </p>
  );
}

function Button({ href, children, variant = "solid" }) {
  const styles =
    variant === "solid"
      ? "bg-ink text-paper hover:bg-g700"
      : "border border-g400 text-ink hover:border-ink";
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-sm px-6 py-3.5 text-[15px] font-medium transition-colors ${styles}`}
    >
      {children}
    </a>
  );
}

/* ------------------------------------------------------------------ 1. nav */

function Navigation() {
  const links = [
    ["Work", "#work"],
    ["Services", "#services"],
    ["Process", "#process"],
    ["About", "#statement"],
  ];
  return (
    <header className="sticky top-0 z-40 border-b border-g200 bg-paper/90 backdrop-blur">
      <nav
        aria-label="Primary"
        className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 sm:px-8"
      >
        <a href="#main" className="text-[15px] font-semibold tracking-tight">
          Bony&nbsp;Amin
          <span className="ml-2 hidden font-mono text-[10px] font-normal tracking-[0.14em] text-g500 uppercase sm:inline">
            design engineer
          </span>
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {links.map(([label, href]) => (
            <li key={href}>
              <a href={href} className="text-sm text-g600 hover:text-ink">
                {label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="rounded-sm bg-ink px-4 py-2.5 text-sm font-medium text-paper hover:bg-g700"
        >
          Start a project
        </a>
      </nav>
    </header>
  );
}

/* ----------------------------------------------------------------- 2. hero */

function Hero() {
  return (
    <section aria-label="Introduction" className="px-5 pt-16 pb-12 sm:px-8 md:pt-24">
      <div className="mx-auto w-full max-w-6xl">
        <div className="max-w-3xl">
          <Eyebrow>Bony Amin · design engineer</Eyebrow>
          <h1 className="mt-5 text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl">
            I design and build digital products — end to end.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-g600">
            A design engineer who does both halves of the job. I help founders and
            companies build what&rsquo;s new, modify what no longer fits, and enhance
            what already works.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button href="#contact">Start a project</Button>
            <a href="#work" className="text-[15px] text-g600 underline underline-offset-4 hover:text-ink">
              See selected work
            </a>
          </div>
        </div>

        <Slot
          className="mt-14 w-full"
          id="HERO-SCENE"
          type="illustration"
          ratio="16:6"
          description="Wide view of the workbench in morning light — one long bench with a sketchbook at one end and a screen mid-layout at the other, tall windows onto rooftops."
          path="/public/assets/hero-scene.webp"
        />
      </div>
    </section>
  );
}

/* --------------------------------------------------------- 3. trust strip */

function TrustStrip() {
  const facts = [
    ["Replies within", "1 business day"],
    ["Projects at a time", "One or two"],
    ["You own", "Every file and repo"],
    ["Fixed price", "Before work starts"],
  ];
  return (
    <section
      aria-label="At a glance"
      className="border-y border-g200 bg-g50 px-5 py-8 sm:px-8"
    >
      <dl className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-x-6 gap-y-6 md:grid-cols-4">
        {facts.map(([k, v]) => (
          <div key={k}>
            <dt className="font-mono text-[10px] tracking-[0.14em] text-g500 uppercase">
              {k}
            </dt>
            <dd className="mt-1.5 text-[15px] font-medium text-ink">{v}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

/* ----------------------------------------------------------- 4. statement */

function Statement() {
  return (
    <Section id="statement" label="How I work" className="border-t-0">
      <div className="max-w-4xl">
        <Eyebrow>Why one design engineer</Eyebrow>
        <p className="mt-6 text-2xl leading-[1.35] font-medium tracking-tight text-pretty sm:text-3xl md:text-4xl">
          Most projects lose their weeks in the gap between the designer, the developer
          and the person managing both. I removed the gap by doing both halves myself,
          so decisions happen in the same hour as the work. And you don&rsquo;t have to
          start over to hire me — I&rsquo;ll build something new, refit what you have,
          or sharpen what already earns.
        </p>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------- 5. feature blocks */

const features = [
  {
    eyebrow: "01 — Build",
    title: "Build something new, properly, the first time",
    body: "A new site, product or application from nothing. I start with what it has to prove rather than a moodboard, then design and engineer it together — interface, type, motion and words — because a visitor decides what you are worth in about five seconds and every one of those choices is doing the talking.",
    slot: {
      id: "FEATURE-BUILD",
      type: "illustration",
      ratio: "4:3",
      description: "The drawing end of the bench seen from above: fresh grid paper, loose layout sketches fanned out, a pencil stub and a calliper resting on the grid.",
      path: "/public/assets/feature-build.webp",
    },
  },
  {
    eyebrow: "02 — Modify",
    title: "Refit what you have instead of starting over",
    body: "Most products do not need demolishing — they need the parts that no longer fit replaced. I work inside your existing stack, brand and half-finished build, so a redesign or rebuild costs you a refit rather than a restart. If a smaller change gets you there, I will tell you that instead.",
    slot: {
      id: "FEATURE-MODIFY",
      type: "illustration",
      ratio: "4:3",
      description: "The middle of the bench: a partly dismantled wooden frame with one new piece being fitted into it, old piece set aside, screwdriver and clamp in reach.",
      path: "/public/assets/feature-modify.webp",
    },
  },
  {
    eyebrow: "03 — Enhance",
    title: "Make what already works noticeably better",
    body: "The product earns, but it is slow, dated, or quietly leaking conversions. I measure it, fix the real causes, and leave it faster and more accessible than it was — then hand you every file and repository. Thirty days of post-launch support comes with every project.",
    slot: {
      id: "FEATURE-ENHANCE",
      type: "illustration",
      ratio: "4:3",
      description: "The build end of the bench at work: a screen showing a half-built interface, a small oil can and a whetstone beside the keyboard, pinned wireframes on the wall behind.",
      path: "/public/assets/feature-enhance.webp",
    },
  },
];

function Features() {
  return (
    <Section id="process" label="The three jobs I take">
      <div className="mb-16 max-w-2xl md:mb-20">
        <Eyebrow>Build · modify · enhance</Eyebrow>
        <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
          Three jobs, depending on where your product already is.
        </h2>
      </div>
      <div className="space-y-20 md:space-y-28">
        {features.map((f, i) => (
          <div
            key={f.slot.id}
            className="grid items-center gap-8 md:grid-cols-2 md:gap-14"
          >
            <Slot
              {...f.slot}
              className={`w-full ${i % 2 === 1 ? "md:order-2" : ""}`}
              tone="quiet"
            />
            <div className={i % 2 === 1 ? "md:order-1" : ""}>
              <Eyebrow>{f.eyebrow}</Eyebrow>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                {f.title}
              </h3>
              <p className="mt-4 text-[17px] leading-relaxed text-g600">{f.body}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------ 6. work */

const work = [
  {
    name: "Fieldnote",
    kind: "B2B SaaS · site and product UI",
    result: "Designed and rebuilt the marketing site and app shell in five weeks. Trial sign-ups up, support tickets about navigation gone.",
    slot: {
      id: "WORK-01",
      type: "product shot",
      ratio: "16:10",
      description: "Painted screen mock: a SaaS marketing page on the monitor at the build end of the bench, paper and pencil beside it.",
      path: "/public/assets/work-01-fieldnote.webp",
    },
  },
  {
    name: "Harbour & Co",
    kind: "Professional services · new site",
    result: "Took a firm from a template site to a brand its enquiry form could charge for. Live in under three weeks.",
    slot: {
      id: "WORK-02",
      type: "product shot",
      ratio: "16:10",
      description: "Painted mock of a premium services homepage pinned to the wall above the bench beside a swatch of type specimens.",
      path: "/public/assets/work-02-harbour.webp",
    },
  },
  {
    name: "Loomwork",
    kind: "Marketplace · design system",
    result: "One component library replacing four inconsistent front-ends, so their own team now ships pages without me.",
    slot: {
      id: "WORK-03",
      type: "product shot",
      ratio: "16:10",
      description: "Painted shelf above the bench: labelled boxes and modular wooden blocks that clearly fit together, standing in for a component library.",
      path: "/public/assets/work-03-loomwork.webp",
    },
  },
  {
    name: "Northbound",
    kind: "D2C · performance rescue",
    result: "Same design, rebuilt: load time cut to under a second on mobile and checkout drop-off down sharply.",
    slot: {
      id: "WORK-04",
      type: "product shot",
      ratio: "16:10",
      description: "Painted mock of a storefront page on a tablet propped against the window, stopwatch and oil can beside it on the sill.",
      path: "/public/assets/work-04-northbound.webp",
    },
  },
];

function Work() {
  return (
    <Section id="work" label="Selected work">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <Eyebrow>Selected work (04)</Eyebrow>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
            Have I built something like what you need? Probably.
          </h2>
        </div>
        <a href="/work" className="text-[15px] text-g600 underline underline-offset-4 hover:text-ink">
          All projects
        </a>
      </div>

      <ul className="mt-12 grid gap-10 sm:grid-cols-2">
        {work.map((p) => (
          <li key={p.name}>
            <Slot {...p.slot} className="w-full" />
            <div className="mt-5">
              <h3 className="text-lg font-semibold tracking-tight">{p.name}</h3>
              <p className="mt-1 font-mono text-[11px] tracking-[0.1em] text-g500 uppercase">
                {p.kind}
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-g600">{p.result}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}

/* -------------------------------------------------------- 7. services */

const services = [
  {
    name: "Marketing and product websites",
    body: "The site that has to sell before anyone talks to you.",
    icon: { id: "ICON-WEBSITE", description: "Painted spot icon: a single window pane with light falling through it.", path: "/public/assets/icon-website.webp" },
  },
  {
    name: "Web applications",
    body: "Interfaces people use daily, designed and engineered as one job.",
    icon: { id: "ICON-APP", description: "Painted spot icon: a small hinged wooden toolbox, open.", path: "/public/assets/icon-app.webp" },
  },
  {
    name: "Design systems",
    body: "A component library your own team can ship pages with, without me.",
    icon: { id: "ICON-SYSTEM", description: "Painted spot icon: three modular wooden blocks stacked.", path: "/public/assets/icon-system.webp" },
  },
  {
    name: "Redesign and rebuild",
    body: "For a product that has outgrown the version it launched with.",
    icon: { id: "ICON-REBUILD", description: "Painted spot icon: a plane shaving a curl from a timber edge.", path: "/public/assets/icon-rebuild.webp" },
  },
  {
    name: "Audits and enhancement",
    body: "A short, blunt read on what is costing you conversions or speed — then the fix.",
    icon: { id: "ICON-AUDIT", description: "Painted spot icon: a brass calliper measuring a sheet of paper.", path: "/public/assets/icon-audit.webp" },
  },
  {
    name: "Ongoing support",
    body: "A standing monthly seat for whatever the roadmap needs next.",
    icon: { id: "ICON-SUPPORT", description: "Painted spot icon: a watering can beside a small windowsill plant.", path: "/public/assets/icon-support.webp" },
  },
];

function Services() {
  return (
    <Section id="services" label="Services">
      <Eyebrow>Services</Eyebrow>
      <h2 className="mt-4 max-w-2xl text-2xl font-semibold tracking-tight sm:text-3xl">
        Everything between the idea and the live product.
      </h2>
      <ul className="mt-12 grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <li key={s.name} className="flex gap-4">
            <IconSlot {...s.icon} type="icon" ratio="1:1" />
            <div>
              <h3 className="text-[15px] font-semibold tracking-tight">{s.name}</h3>
              <p className="mt-1.5 text-[15px] leading-relaxed text-g600">{s.body}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}

/* --------------------------------------------------------- 8. breather */

function Breather() {
  return (
    <Section id="breather" label="Interlude" className="bg-g50">
      <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
        <Slot
          id="BREATHER-SPOT"
          type="illustration"
          ratio="3:2"
          description="Quiet spot scene: a half-drunk mug leaving a ring on a blueprint, a bulldog clip and a folded set of drawings beside it."
          path="/public/assets/breather-spot.webp"
          className="w-full max-w-sm"
          tone="quiet"
        />
        <p className="mt-8 text-xl leading-relaxed font-medium tracking-tight text-pretty sm:text-2xl">
          I take one or two projects at a time. That is not a limitation — it is the
          whole reason the work is good and the date I give you is real.
        </p>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------ 9. engagements */

const engagements = [
  {
    name: "Focused project",
    price: "From $6,000",
    timing: "2–3 weeks",
    for: "A site or landing experience that has to look like the tier you charge at.",
    includes: [
      "Up to 6 pages, designed and built",
      "Copy direction and content structure",
      "A CMS so you can edit it yourself",
      "Performance and accessibility pass",
    ],
  },
  {
    name: "Product build",
    price: "$14,000 – $30,000",
    timing: "4–8 weeks",
    for: "A full product site or web application, designed and engineered together.",
    includes: [
      "Discovery, scope and a fixed quote",
      "Full design system and UI build",
      "Application front-end engineering",
      "Analytics and launch support",
    ],
    featured: true,
  },
  {
    name: "Enhance or audit",
    price: "From $2,500",
    timing: "About a week",
    for: "Something that already works but is slow, dated or leaking conversions.",
    includes: [
      "Measured read on what is actually wrong",
      "The fixes, not just the findings",
      "Speed and accessibility improvements",
      "A written handover of what changed",
    ],
  },
  {
    name: "Standing seat",
    price: "From $3,500 / month",
    timing: "Monthly, no minimum term",
    for: "A design engineer on call for whatever ships next.",
    includes: [
      "A set amount of senior time monthly",
      "Design and engineering from one person",
      "Weekly call, async the rest of the week",
      "Priority on fixes and releases",
    ],
  },
];

function Engagements() {
  return (
    <Section id="engagements" label="Ways of working together">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <Eyebrow>Working together</Eyebrow>
          <h2 className="mt-4 max-w-2xl text-2xl font-semibold tracking-tight sm:text-3xl">
            Four ways in, with the numbers on the page.
          </h2>
        </div>
        <p className="max-w-xs text-[15px] text-g600">
          Every project is quoted at a fixed price against a fixed scope before any work
          starts. The number you agree is the number you pay.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {engagements.map((e) => (
          <div
            key={e.name}
            className={`flex flex-col rounded-sm border p-6 ${
              e.featured ? "border-ink bg-g50" : "border-g200"
            }`}
          >
            <h3 className="text-[17px] font-semibold tracking-tight">{e.name}</h3>
            <p className="mt-3 text-lg font-medium tracking-tight">{e.price}</p>
            <p className="mt-1 font-mono text-[11px] tracking-[0.1em] text-g500 uppercase">
              {e.timing}
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-g600">{e.for}</p>
            <ul className="mt-5 space-y-2.5 border-t border-g200 pt-5 text-[15px] text-g600">
              {e.includes.map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-g400" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-7">
              <a
                href="#contact"
                className="text-[15px] underline underline-offset-4 hover:text-g600"
              >
                Start here
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-col gap-6 border-t border-g200 pt-8 md:flex-row md:items-center">
        <Slot
          id="HANDOVER-SPOT"
          type="illustration"
          ratio="2:1"
          description="Spot scene: a brass key and a signed handover note resting on a labelled flat-file drawer under the bench — the you-own-everything promise."
          path="/public/assets/handover-spot.webp"
          className="w-full md:w-64 md:shrink-0"
          tone="quiet"
        />
        <p className="text-[15px] leading-relaxed text-g600">
          <strong className="font-semibold text-ink">You own everything.</strong> Every
          Figma file, repository and account is yours from day one. I build on standard,
          widely used technology — no proprietary CMS, no lock-in — so you or any team
          you hire later can pick the work up without me. Thirty days of post-launch
          support is included either way.
        </p>
      </div>
    </Section>
  );
}

/* ----------------------------------------------------- 10. testimonials */

const quotes = [
  {
    quote:
      "We had been quoted twice as much by an agency that wanted twice as long. Bony did it in five weeks, and the person I spoke to was the person building it, every single time.",
    name: "Operations lead",
    role: "B2B SaaS platform",
    slot: {
      id: "TESTIMONIAL-SPOT-01",
      type: "illustration",
      ratio: "1:1",
      description: "Small painted spot: a single desk chair turned toward the window, seen from behind — a client seat, no face.",
      path: "/public/assets/testimonial-spot-01.webp",
    },
  },
  {
    quote:
      "The difference is that the designer was the developer. Nothing got watered down on the way to the build, and nothing came back three weeks later as impossible.",
    name: "Founder",
    role: "Professional services firm",
    slot: {
      id: "TESTIMONIAL-SPOT-02",
      type: "illustration",
      ratio: "1:1",
      description: "Small painted spot: two mugs on the windowsill beside a folded drawing — the weekly call, drawn as objects.",
      path: "/public/assets/testimonial-spot-02.webp",
    },
  },
];

function Testimonials() {
  return (
    <Section id="testimonials" label="Client words">
      <Eyebrow>Client words</Eyebrow>
      <ul className="mt-10 grid gap-10 md:grid-cols-2">
        {quotes.map((q) => (
          <li key={q.slot.id} className="flex gap-6">
            <Slot {...q.slot} className="w-20 shrink-0 sm:w-24" tone="quiet" />
            <figure>
              <blockquote className="text-[17px] leading-relaxed text-pretty">
                “{q.quote}”
              </blockquote>
              <figcaption className="mt-4 font-mono text-[11px] tracking-[0.1em] text-g500 uppercase">
                {q.name} · {q.role}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </Section>
  );
}

/* -------------------------------------------------------------- 11. FAQ */

function Faq() {
  return (
    <Section id="faq" label="Frequently asked questions">
      <div className="grid gap-12 md:grid-cols-[22rem_1fr] md:gap-16">
        <div>
          <Eyebrow>Questions</Eyebrow>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
            The things people ask before they email me.
          </h2>
          <Slot
            id="FAQ-SPOT"
            type="illustration"
            ratio="1:1"
            description="Spot scene: a wall-pinned note card with a question mark drawn on it, a bulldog clip and a pencil hanging on a string beside it."
            path="/public/assets/faq-spot.webp"
            className="mt-8 w-full max-w-[14rem]"
            tone="quiet"
          />
        </div>
        <div className="divide-y divide-g200 border-t border-g200">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-[17px] font-medium tracking-tight">
                <h3 className="text-[17px] font-medium">{f.q}</h3>
                <span
                  aria-hidden="true"
                  className="mt-1 font-mono text-g500 group-open:rotate-45 transition-transform"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-2xl text-[16px] leading-relaxed text-g600">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* --------------------------------------------------------- 12. closing CTA */

function ClosingCta() {
  return (
    <Section id="contact" label="Start a project" className="bg-g50">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl leading-tight font-semibold tracking-tight text-balance sm:text-4xl md:text-5xl">
          Tell me what you are building. I will tell you what it takes.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-g600">
          Send a couple of lines about the product and the deadline. You will get a real
          reply from me within one business day — a scope, a price band and a start
          date, or an honest no.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Button href="mailto:hello@bonyamin.com">Start a project</Button>
          <Button href="#work" variant="outline">
            See the work first
          </Button>
        </div>
        <p className="mt-6 font-mono text-[11px] tracking-[0.14em] text-g500 uppercase">
          Replies within 1 business day · fixed price before work starts
        </p>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------- 13. footer */

function Footer() {
  const cols = [
    ["Practice", [["Work", "/work"], ["Services", "/services"], ["Process", "/process"], ["About", "/about"]]],
    ["Buy", [["Engagement & pricing", "/pricing"], ["FAQ", "/faq"], ["Start a project", "/contact"]]],
    ["More", [["Journal", "/journal"], ["Privacy", "/privacy"], ["Terms", "/terms"]]],
  ];
  return (
    <footer className="border-t border-g200 px-5 pt-20 pb-10 sm:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <Slot
          id="FOOTER-SCENE"
          type="illustration"
          ratio="16:5"
          description="Wide closing view of the same room at night — one lamp lit over the bench, the work left mid-flow, lit windows across the rooftops beyond."
          path="/public/assets/footer-scene.webp"
          className="w-full"
        />

        <div className="mt-14 grid gap-10 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <p className="text-[15px] font-semibold tracking-tight">Bony Amin</p>
            <p className="mt-3 max-w-xs text-[15px] leading-relaxed text-g600">
              Design engineer. I help founders and companies build, modify and enhance
              their digital products.
            </p>
            <a
              href="mailto:hello@bonyamin.com"
              className="mt-4 inline-block text-[15px] underline underline-offset-4 hover:text-g600"
            >
              hello@bonyamin.com
            </a>
          </div>
          {cols.map(([title, links]) => (
            <nav key={title} aria-label={title}>
              <p className="font-mono text-[10px] tracking-[0.14em] text-g500 uppercase">
                {title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {links.map(([label, href]) => (
                  <li key={href}>
                    <a href={href} className="text-[15px] text-g600 hover:text-ink">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <p className="mt-14 border-t border-g200 pt-6 font-mono text-[11px] tracking-[0.1em] text-g500 uppercase">
          © {new Date().getFullYear()} Bony Amin · Design engineer · Working with clients worldwide
        </p>
      </div>
    </footer>
  );
}

/* ---------------------------------------------------------------- the page */

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main">
        <Hero />
        <TrustStrip />
        <Statement />
        <Features />
        <Work />
        <Services />
        <Breather />
        <Engagements />
        <Testimonials />
        <Faq />
        <ClosingCta />
      </main>
      <Footer />
    </>
  );
}
