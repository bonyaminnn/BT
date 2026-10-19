import Slot from "@/components/Slot";
import IconSlot from "@/components/IconSlot";
import { faqs } from "@/content/faqs";
import { site, SHOW_LOCATION, LOCATION } from "@/content/site";

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

/** Shipped vs. concept. The IA requires production work be distinguishable from
 *  independent explorations, so the distinction is a visible tag, not a footnote. */
function Tag({ kind }) {
  const shipped = kind === "shipped";
  return (
    <span
      className={`rounded-sm border px-2 py-1 font-mono text-[10px] font-semibold tracking-[0.12em] uppercase ${
        shipped ? "border-ink text-ink" : "border-g400 text-g500"
      }`}
    >
      {shipped ? "Shipped product" : "Self-directed redesign"}
    </span>
  );
}

/* ------------------------------------------------------------------ 1. nav */

function Navigation() {
  const links = [
    ["Work", "#work"],
    ["Services", "#services"],
    ["About", "#about"],
    ["Testimonials", "#testimonials"],
  ];
  return (
    <header className="sticky top-0 z-40 border-b border-g200 bg-paper/90 backdrop-blur">
      <nav
        aria-label="Primary"
        className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 sm:px-8"
      >
        <a href="#main" className="text-[15px] font-semibold tracking-tight">
          {site.name}
          <span className="ml-2 hidden font-mono text-[10px] font-normal tracking-[0.14em] text-g500 uppercase sm:inline">
            {site.role}
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
          Get in touch
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
          <Eyebrow>
            {site.role}
            {SHOW_LOCATION ? ` · ${LOCATION}` : ""}
          </Eyebrow>
          <h1 className="mt-5 text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl">
            I design and build better digital product experiences.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-g600">
            I bring product design and frontend engineering together to turn complex
            workflows into intuitive, polished, working software.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button href="#work">Explore my work</Button>
            <Button href="#contact" variant="outline">
              Let&rsquo;s work together
            </Button>
          </div>
          <p className="mt-7 font-mono text-[11px] tracking-[0.12em] text-g500 uppercase">
            Product design · Interaction engineering · Frontend development
          </p>
        </div>

        <Slot
          className="mt-14 w-full"
          id="HERO-PRODUCT"
          type="product shot"
          ratio="16:9"
          description="A real product interface from shipped work — the TL Ops challan workflow or Truck Lagbe booking flow, shown on device, legible at a glance."
          path="/public/assets/hero-product.webp"
        />
      </div>
    </section>
  );
}

/* ----------------------------------------------------- 3. credibility strip */

function Credibility() {
  const facts = [
    ["Experience", `~${site.yearsExperience} years`],
    ["Domains", "Logistics · transportation · digital products"],
    ["Works with", "Product and engineering teams"],
    ["Focus", "Design-to-development implementation"],
  ];
  return (
    <Section id="credibility" label="Experience and expertise" className="border-t-0 bg-g50">
      <Eyebrow>Experience</Eyebrow>
      <h2 className="mt-4 max-w-2xl text-2xl font-semibold tracking-tight sm:text-3xl">
        Product work on operational systems people use to do their jobs.
      </h2>
      <dl className="mt-10 grid grid-cols-1 gap-x-8 gap-y-7 border-t border-g200 pt-8 sm:grid-cols-2 lg:grid-cols-4">
        {facts.map(([k, v]) => (
          <div key={k}>
            <dt className="font-mono text-[10px] tracking-[0.14em] text-g500 uppercase">
              {k}
            </dt>
            <dd className="mt-1.5 text-[15px] font-medium text-ink">{v}</dd>
          </div>
        ))}
      </dl>
      <Slot
        className="mt-10 w-full"
        id="CRED-LOGOS"
        type="product shot"
        ratio="8:1"
        description="Quiet row of company or product marks from real work — add only the ones cleared for publication, otherwise delete this slot."
        path="/public/assets/cred-logos.webp"
        tone="quiet"
      />
    </Section>
  );
}

/* ------------------------------------------------------------ 4. selected work */

const work = [
  {
    name: "TL Ops — Challan Workflow",
    category: "Enterprise UX · Logistics · Workflow design",
    headline: "Making operational workflows easier to manage",
    body: "I worked on digitising the challan submission and review process in TL Ops, bringing an operational paper workflow into a structured digital experience — mapping the existing process, designing the interaction, and working through implementation with the team.",
    kind: "shipped",
    slot: {
      id: "WORK-01",
      type: "product shot",
      ratio: "16:10",
      description: "TL Ops challan submission and review interface — the main workflow screen, real UI, annotated if confidentiality allows.",
      path: "/public/assets/work-01-tlops.webp",
    },
  },
  {
    name: "Truck Lagbe — Home Shifting",
    category: "Transportation · Service design · Mobile UX",
    headline: "Bringing a new service into an existing platform",
    body: "I worked on integrating a home-shifting service into the Truck Lagbe app, connecting service discovery to the booking experience without disrupting the flows that existing users already relied on.",
    kind: "shipped",
    slot: {
      id: "WORK-02",
      type: "product shot",
      ratio: "16:10",
      description: "Truck Lagbe home-shifting screens — service discovery into booking, two or three mobile frames side by side.",
      path: "/public/assets/work-02-trucklagbe.webp",
    },
  },
  {
    name: "Shohoz — Bus Booking Redesign",
    category: "Travel · Interaction design · Mobile UX",
    headline: "Making the booking journey easier to understand",
    body: "A self-directed redesign exploring journey clarity, seat selection, visual hierarchy and accessibility in the bus-ticket booking experience — a UX audit first, then the interface changes that followed from it.",
    kind: "concept",
    slot: {
      id: "WORK-03",
      type: "product shot",
      ratio: "16:10",
      description: "Shohoz redesign — the seat-selection interaction, before and after, as mobile frames.",
      path: "/public/assets/work-03-shohoz.webp",
    },
  },
];

function Work() {
  return (
    <Section id="work" label="Selected work">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <Eyebrow>Selected work (03)</Eyebrow>
          <h2 className="mt-4 max-w-2xl text-2xl font-semibold tracking-tight sm:text-3xl">
            Three products, and what I actually contributed to each.
          </h2>
        </div>
        <a href="/work" className="text-[15px] text-g600 underline underline-offset-4 hover:text-ink">
          All projects
        </a>
      </div>

      <ul className="mt-12 space-y-16 md:space-y-24">
        {work.map((p, i) => (
          <li key={p.name} className="grid items-center gap-8 md:grid-cols-2 md:gap-14">
            <Slot
              {...p.slot}
              className={`w-full ${i % 2 === 1 ? "md:order-2" : ""}`}
            />
            <div className={i % 2 === 1 ? "md:order-1" : ""}>
              <div className="flex flex-wrap items-center gap-3">
                <Tag kind={p.kind} />
              </div>
              <p className="mt-4 font-mono text-[11px] tracking-[0.1em] text-g500 uppercase">
                {p.category}
              </p>
              <h3 className="mt-3 text-xl font-semibold tracking-tight sm:text-2xl">
                {p.name}
              </h3>
              <p className="mt-2 text-[17px] font-medium text-g700">{p.headline}</p>
              <p className="mt-4 text-[16px] leading-relaxed text-g600">{p.body}</p>
              <a
                href="/work"
                className="mt-6 inline-block text-[15px] underline underline-offset-4 hover:text-g600"
              >
                Explore case study
              </a>
            </div>
          </li>
        ))}
      </ul>

      <Slot
        className="mx-auto mt-20 w-full max-w-3xl"
        id="WORK-FLOW-DIAGRAM"
        type="illustration"
        ratio="16:9"
        description="Workflow map from the TL Ops case study — the operational process before and after digitisation, drawn as a clean node diagram."
        path="/public/assets/work-flow-diagram.webp"
        tone="quiet"
      />
    </Section>
  );
}

/* ---------------------------------------------------------------- 5. process */

const steps = [
  {
    n: "01",
    name: "Understand",
    body: "Explore user needs, business goals, existing workflows and the constraints that are actually non-negotiable.",
    icon: { id: "PROCESS-01", description: "Spot icon: a magnifier over a process diagram.", path: "/public/assets/process-01-understand.webp" },
  },
  {
    n: "02",
    name: "Design",
    body: "Map journeys, explore solutions, refine interactions, and validate the decisions that carry the most risk.",
    icon: { id: "PROCESS-02", description: "Spot icon: overlapping frames with a drawn connector.", path: "/public/assets/process-02-design.webp" },
  },
  {
    n: "03",
    name: "Build",
    body: "Translate designs into responsive interfaces, reusable components and interactions that behave correctly.",
    icon: { id: "PROCESS-03", description: "Spot icon: three modular blocks assembling into one unit.", path: "/public/assets/process-03-build.webp" },
  },
  {
    n: "04",
    name: "Iterate",
    body: "Evaluate usability, review the implementation, learn from feedback, and improve what the data points at.",
    icon: { id: "PROCESS-04", description: "Spot icon: a loop arrow closing around a small interface frame.", path: "/public/assets/process-04-iterate.webp" },
  },
];

function Process() {
  return (
    <Section id="process" label="My process" className="bg-g50">
      <Eyebrow>My approach</Eyebrow>
      <h2 className="mt-4 max-w-2xl text-2xl font-semibold tracking-tight sm:text-3xl">
        From problem to production.
      </h2>
      <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-g600">
        I combine product thinking, design craft and engineering to create interfaces
        that are useful, consistent, and practical to build.
      </p>
      <ol className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s) => (
          <li key={s.n} className="border-t border-g300 pt-6">
            <IconSlot {...s.icon} ratio="1:1" />
            <p className="mt-5 font-mono text-[11px] tracking-[0.14em] text-g500 uppercase">
              {s.n}
            </p>
            <h3 className="mt-1.5 text-[17px] font-semibold tracking-tight">{s.name}</h3>
            <p className="mt-2.5 text-[15px] leading-relaxed text-g600">{s.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

/* --------------------------------------------------------------- 6. services */

const services = [
  {
    name: "Product design",
    body: "Turning complex requirements and user workflows into intuitive interfaces, from early concepts through to detailed product experiences.",
    icon: { id: "ICON-DESIGN", description: "Spot icon: a pen nib over a grid.", path: "/public/assets/icon-design.webp" },
  },
  {
    name: "Frontend implementation",
    body: "Bringing designs to life with responsive layouts, reusable components and carefully crafted interactions.",
    icon: { id: "ICON-FRONTEND", description: "Spot icon: an angle bracket pair enclosing a layout frame.", path: "/public/assets/icon-frontend.webp" },
  },
  {
    name: "Design systems",
    body: "Building consistent design foundations and component libraries that make products easier to maintain and extend.",
    icon: { id: "ICON-SYSTEM", description: "Spot icon: modular blocks of different widths that interlock.", path: "/public/assets/icon-system.webp" },
  },
];

function Services() {
  return (
    <Section id="services" label="Services">
      <Eyebrow>How I can help</Eyebrow>
      <h2 className="mt-4 max-w-2xl text-2xl font-semibold tracking-tight sm:text-3xl">
        Better product experiences, from design to implementation.
      </h2>
      <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-g600">
        I help teams improve digital products through thoughtful design and careful
        implementation — design, implementation, or both, stated clearly up front.
      </p>
      <ul className="mt-12 grid gap-10 md:grid-cols-3">
        {services.map((s) => (
          <li key={s.name}>
            <IconSlot {...s.icon} ratio="1:1" />
            <h3 className="mt-5 text-[17px] font-semibold tracking-tight">{s.name}</h3>
            <p className="mt-2.5 text-[15px] leading-relaxed text-g600">{s.body}</p>
          </li>
        ))}
      </ul>
      <div className="mt-12">
        <Button href="#contact">Discuss a project</Button>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------- 7. breather */

function Breather() {
  return (
    <Section id="breather" label="Interlude" className="bg-g50">
      <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
        <Slot
          id="BREATHER-SPOT"
          type="illustration"
          ratio="3:2"
          description="Quiet spot scene: a desk at rest — notebook, pencil and a closed laptop, drawn in the same line-and-wash style as the process icons."
          path="/public/assets/breather-spot.webp"
          className="w-full max-w-sm"
          tone="quiet"
        />
        <p className="mt-8 text-xl leading-relaxed font-medium tracking-tight text-pretty sm:text-2xl">
          The interesting problems are rarely visual. They are the ones where someone
          has to do a complicated job, and the interface is in the way.
        </p>
      </div>
    </Section>
  );
}

/* ---------------------------------------------------------- 8. testimonials */

/**
 * Deliberately empty. The IA requires real names, roles and approved quotes, and
 * explicitly forbids inventing them — so these are labelled slots awaiting real
 * content, not placeholder quotes that could be mistaken for the real thing.
 */
const testimonialSlots = [
  {
    theme: "Product collaboration",
    needs: "A colleague or product manager on problem-solving and product thinking.",
    slot: {
      id: "TESTIMONIAL-01",
      type: "product shot",
      ratio: "1:1",
      description: "Approved headshot of the first referee, or their company mark if a photo is not permitted.",
      path: "/public/assets/testimonial-01.webp",
    },
  },
  {
    theme: "Design engineering",
    needs: "An engineer on collaboration, implementation awareness and component thinking.",
    slot: {
      id: "TESTIMONIAL-02",
      type: "product shot",
      ratio: "1:1",
      description: "Approved headshot of the second referee, or their company mark if a photo is not permitted.",
      path: "/public/assets/testimonial-02.webp",
    },
  },
  {
    theme: "Ownership and delivery",
    needs: "A manager or client on contribution and quality of work.",
    slot: {
      id: "TESTIMONIAL-03",
      type: "product shot",
      ratio: "1:1",
      description: "Approved headshot of the third referee, or their company mark if a photo is not permitted.",
      path: "/public/assets/testimonial-03.webp",
    },
  },
];

function Testimonials() {
  return (
    <Section id="testimonials" label="Testimonials">
      <Eyebrow>Kind words</Eyebrow>
      <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
        What others say.
      </h2>
      <ul className="mt-12 grid gap-10 md:grid-cols-3">
        {testimonialSlots.map((t) => (
          <li key={t.slot.id}>
            <Slot {...t.slot} className="w-16 sm:w-20" tone="quiet" />
            <p className="mt-5 font-mono text-[11px] tracking-[0.12em] text-g500 uppercase">
              {t.theme}
            </p>
            <div className="mt-3 rounded-sm border border-dashed border-g400 bg-g100 p-4">
              <p className="font-mono text-[10px] font-semibold tracking-[0.12em] text-g700 uppercase">
                Quote pending
              </p>
              <p className="mt-2 text-[14px] leading-snug text-g600">{t.needs}</p>
              <p className="mt-2 text-[13px] leading-snug text-g500">
                Real name, role and organisation required. Do not publish this section
                until at least two are approved.
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}

/* ----------------------------------------------------------------- 9. about */

function About() {
  return (
    <Section id="about" label="About me">
      <div className="grid gap-10 md:grid-cols-[1fr_20rem] md:gap-16">
        <div>
          <Eyebrow>About me</Eyebrow>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
            A designer who cares about how things work.
          </h2>
          <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-g600">
            I&rsquo;m a {SHOW_LOCATION ? `${LOCATION}-based ` : ""}designer interested in
            building useful, thoughtful digital products. My work sits at the
            intersection of product design, interaction design and frontend engineering.
          </p>
          <p className="mt-4 max-w-xl text-[17px] leading-relaxed text-g600">
            I enjoy simplifying complex workflows, exploring how interfaces behave, and
            turning design ideas into working experiences. Outside work: photography,
            travelling, and noticing the small details of ordinary things.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button href="/about">More about me</Button>
            <a
              href="/resume.pdf"
              className="text-[15px] text-g600 underline underline-offset-4 hover:text-ink"
            >
              View résumé
            </a>
          </div>
        </div>
        <div className="space-y-6">
          <Slot
            id="ABOUT-PORTRAIT"
            type="product shot"
            ratio="4:5"
            description="Portrait of Bony — natural light, plain background, looking at camera. One real photograph, not an illustration."
            path="/public/assets/about-portrait.webp"
          />
          <Slot
            id="ABOUT-SPOT"
            type="illustration"
            ratio="3:2"
            description="Small spot tying the personal note to the work: a camera resting beside a notebook, same line-and-wash style as the icons."
            path="/public/assets/about-spot.webp"
            tone="quiet"
          />
        </div>
      </div>
    </Section>
  );
}

/* --------------------------------------------------------------- 10. contact */

function Contact() {
  return (
    <Section id="contact" label="Contact" className="bg-g50">
      <div className="max-w-3xl">
        <Eyebrow>Let&rsquo;s work together</Eyebrow>
        <h2 className="mt-4 text-3xl leading-tight font-semibold tracking-tight text-balance sm:text-4xl">
          Have a complex product problem to solve?
        </h2>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-g600">
          I&rsquo;m interested in thoughtful product challenges, design engineering roles,
          and collaborations that bring better digital experiences to life.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <Button href={`mailto:${site.email}`}>Get in touch</Button>
          <Button href="/resume.pdf" variant="outline">
            View my résumé
          </Button>
        </div>
        <p className="mt-6 font-mono text-[11px] tracking-[0.14em] text-g500 uppercase">
          Replies within {site.replyWindow}
        </p>
      </div>

      {/* Visible Q&A, mirrored as FAQPage structured data in the layout. */}
      <div className="mt-16 border-t border-g200 pt-12">
        <h3 className="text-lg font-semibold tracking-tight">
          Before you write — the things people usually ask.
        </h3>
        <div className="mt-6 max-w-3xl divide-y divide-g200 border-t border-g200">
          {faqs.map((f) => (
            <details key={f.q} className="group py-4">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
                <h4 className="text-[16px] font-medium">{f.q}</h4>
                <span
                  aria-hidden="true"
                  className="mt-1 font-mono text-g500 transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-g600">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------------------------------------------------------------- 11. footer */

function Footer() {
  const cols = [
    ["Site", [["Work", "#work"], ["Services", "#services"], ["About", "#about"], ["Testimonials", "#testimonials"]]],
    ["Elsewhere", [["Résumé", "/resume.pdf"], ["LinkedIn", "https://linkedin.com/in/"], ["GitHub", "https://github.com/"]]],
  ];
  return (
    <footer className="border-t border-g200 px-5 pt-20 pb-10 sm:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <Slot
          id="FOOTER-SCENE"
          type="illustration"
          ratio="16:5"
          description="Wide closing scene: a desk at the end of the day, screen dark, notebook open — line-and-wash, matching the spot illustrations."
          path="/public/assets/footer-scene.webp"
        />

        <div className="mt-14 grid gap-10 md:grid-cols-[1.4fr_repeat(2,1fr)]">
          <div>
            <p className="text-[15px] font-semibold tracking-tight">{site.name}</p>
            <p className="mt-1 font-mono text-[11px] tracking-[0.14em] text-g500 uppercase">
              {site.role}
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-4 inline-block text-[15px] underline underline-offset-4 hover:text-g600"
            >
              {site.email}
            </a>
          </div>
          {cols.map(([title, links]) => (
            <nav key={title} aria-label={title}>
              <p className="font-mono text-[10px] tracking-[0.14em] text-g500 uppercase">
                {title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {links.map(([label, href]) => (
                  <li key={label}>
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
          © {new Date().getFullYear()} {site.name}. All rights reserved.
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
        <Credibility />
        <Work />
        <Process />
        <Services />
        <Breather />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
