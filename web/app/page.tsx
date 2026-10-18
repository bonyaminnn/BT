import Slot from "@/components/Slot";
import { slots } from "@/lib/slots";

const nav = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Plans", href: "#plans" },
];

const features = [
  {
    eyebrow: "You work with the makers",
    title: "The people on the call are the people doing the work.",
    body: "No account managers, no junior hand-offs, no game of telephone. One of us designs, one of us builds, and both of us answer your messages. Decisions that take other agencies a week of meetings take us a conversation.",
    points: ["Direct line to both partners", "Same two people from kickoff to launch", "Design and code that actually match"],
    slot: slots.featureMakers,
  },
  {
    eyebrow: "End to end, and quick",
    title: "Strategy, design, development and support. One small team, fewer weeks.",
    body: "Because nothing gets lost between departments, we move fast without cutting corners. You see progress every week, not a big reveal at the end, and you can steer while there is still time to change course.",
    points: ["Weekly working demos", "First designs in days, not weeks", "Shipped, tested and documented"],
    slot: slots.featureSpeed,
  },
  {
    eyebrow: "We meet you where you are",
    title: "Improve what you already have, or start from an empty page.",
    body: "Got a live site or app that feels slow, dated or hard to change? We work inside it and make it better without a risky rebuild. Starting fresh? We take it from first idea to launch, and stay on after.",
    points: ["Redesigns and rescues", "New products from zero", "Ongoing care after launch"],
    slot: slots.featureWherever,
  },
];

const services = [
  {
    title: "Web design",
    body: "Websites and landing pages that explain clearly and convert. Redesigns or brand-new.",
    slot: slots.iconWebDesign,
  },
  {
    title: "Web development",
    body: "Fast, accessible, maintainable builds. We also work inside your existing codebase or CMS.",
    slot: slots.iconWebDev,
  },
  {
    title: "App design & development",
    body: "Web and mobile apps, from first wireframes to a product in your users' hands.",
    slot: slots.iconApp,
  },
  {
    title: "Support & care",
    body: "Fixes, improvements and new features every month, from the people who know your product.",
    slot: slots.iconSupport,
  },
];

const work = [
  { tag: "Website redesign", title: "A clearer story for a B2B software company", slot: slots.work01 },
  { tag: "Web app", title: "A dashboard teams actually open every morning", slot: slots.work02 },
  { tag: "Mobile app", title: "From sketch to app store in one quarter", slot: slots.work03 },
];

const steps = [
  { n: "01", title: "Survey", body: "A short call and a look at what you have. We find what matters and what to leave alone.", slot: slots.stepSurvey },
  { n: "02", title: "Plan", body: "A clear scope, timeline and price, in writing, before any work starts.", slot: slots.stepPlan },
  { n: "03", title: "Build", body: "Design and development side by side, with a working demo every week.", slot: slots.stepBuild },
  { n: "04", title: "Tend", body: "Launch, hand-over and ongoing care, so your product keeps getting better.", slot: slots.stepTend },
];

const plans = [
  {
    name: "Sprint",
    price: "Fixed quote",
    unit: "1–2 weeks",
    for: "For a focused fix: an audit, a landing page or a redesign of key screens.",
    items: ["UX and performance review", "One focused deliverable", "Clear next-step plan"],
    slot: slots.planSprint,
  },
  {
    name: "Build",
    price: "Fixed quote",
    unit: "4–12 weeks",
    for: "For a full website or app, designed and developed end to end.",
    items: ["Strategy, design and development", "Weekly demos", "Launch and hand-over"],
    slot: slots.planBuild,
    featured: true,
  },
  {
    name: "Care",
    price: "Monthly",
    unit: "Pause anytime",
    for: "For products that need steady improvement after launch.",
    items: ["Monthly block of design and dev time", "Fixes, updates, new features", "Priority replies"],
    slot: slots.planCare,
  },
];

const team = [
  {
    role: "Partner, design",
    name: "Design partner",
    body: "Leads research, UX and visual design. Turns messy requirements into screens your users understand.",
    slot: slots.teamOne,
  },
  {
    role: "Partner, development",
    name: "Development partner",
    body: "Leads front-end, back-end and infrastructure. Makes sure what was designed is exactly what ships.",
    slot: slots.teamTwo,
  },
];

const faqs = [
  {
    q: "You're only two people. Can you handle our project?",
    a: "Yes, and being two is the point. We take on a small number of projects at a time so each gets both of us fully. If a project needs a specialist we don't have, we tell you up front and bring in trusted help we manage ourselves.",
  },
  {
    q: "What if one of you is unavailable?",
    a: "We both know every project inside out, and everything is documented as we go. There's always someone who can pick up exactly where the other left off.",
  },
  {
    q: "Can you work on our existing website or app?",
    a: "Absolutely. Much of our work is improving products that already exist. We start with a survey of what you have, then improve it step by step without a risky full rebuild.",
  },
  {
    q: "How fast can we start, and how long does it take?",
    a: "We usually reply within one working day and can often start within two weeks. Sprints take one to two weeks; full builds typically four to twelve.",
  },
  {
    q: "Who owns the design and code?",
    a: "You do. Once the project is paid, every file, design source and line of code is yours, handed over with documentation.",
  },
  {
    q: "Do you stay on after launch?",
    a: "If you want us to. Our Care plan gives you a monthly block of time for fixes, updates and new features. You can pause it any time.",
  },
];

function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-500">{children}</p>;
}

function Button({ href, children, variant = "solid" }: { href: string; children: React.ReactNode; variant?: "solid" | "ghost" }) {
  const base = "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition-colors";
  const styles =
    variant === "solid"
      ? "bg-neutral-950 text-white hover:bg-neutral-700"
      : "border border-neutral-300 text-neutral-900 hover:border-neutral-900";
  return (
    <a href={href} className={`${base} ${styles}`}>
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <>
      {/* 1. Navigation */}
      <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur">
        <Container className="flex h-16 items-center justify-between">
          <a href="#top" className="flex items-center gap-2.5">
            <span className="w-8">
              <Slot spec={slots.logoMark} micro />
            </span>
            <span className="text-base font-semibold tracking-tight">Gridmarc</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-neutral-600 md:flex">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-neutral-950">
                {item.label}
              </a>
            ))}
          </nav>
          <div className="hidden md:block">
            <Button href="#contact">Start a project</Button>
          </div>
          <details className="group relative md:hidden">
            <summary className="cursor-pointer list-none rounded-full border border-neutral-300 px-4 py-2 text-sm">
              <span className="group-open:hidden">Menu</span>
              <span className="hidden group-open:inline">Close</span>
            </summary>
            <div className="absolute right-0 mt-3 w-56 rounded-2xl border border-neutral-200 bg-white p-4 shadow-lg">
              <ul className="space-y-3 text-sm">
                {nav.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className="block py-1">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <a href="#contact" className="mt-4 block rounded-full bg-neutral-950 px-4 py-2.5 text-center text-sm text-white">
                Start a project
              </a>
            </div>
          </details>
        </Container>
      </header>

      <main id="top">
        {/* 2. Hero */}
        <section className="pt-16 sm:pt-24">
          <Container className="text-center">
            <Eyebrow>Design &amp; development studio</Eyebrow>
            <h1 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-6xl">
              Two people. Your whole product. No hand-offs.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base text-neutral-600 sm:text-lg">
              We design, build and support websites and apps end to end, for businesses improving what they have or starting something new.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="#contact">Start a project</Button>
              <Button href="#work" variant="ghost">
                See our work
              </Button>
            </div>
          </Container>
          <div className="mx-auto mt-14 max-w-[1440px] px-5 sm:mt-20 sm:px-8">
            <Slot spec={slots.hero} className="rounded-2xl" />
          </div>
        </section>

        {/* 3. Statement */}
        <section className="py-24 sm:py-36">
          <Container>
            <p className="mx-auto max-w-4xl text-center text-2xl font-medium leading-snug tracking-tight text-neutral-900 sm:text-4xl sm:leading-tight">
              Most agencies pass your project through strategists, designers, developers and project managers.{" "}
              <span className="text-neutral-400">
                We skip the chain. The two people you meet are the two people who plan it, design it, build it and look after it.
              </span>
            </p>
          </Container>
        </section>

        {/* 4. Feature blocks */}
        <section className="pb-12 sm:pb-24">
          <Container className="space-y-20 sm:space-y-32">
            {features.map((f, i) => (
              <div key={f.title} className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
                <div className={i % 2 === 1 ? "md:order-2" : ""}>
                  <Slot spec={f.slot} className="rounded-2xl" />
                </div>
                <div>
                  <Eyebrow>{f.eyebrow}</Eyebrow>
                  <h2 className="mt-4 text-2xl font-semibold leading-tight tracking-tight sm:text-4xl">{f.title}</h2>
                  <p className="mt-5 text-neutral-600 sm:text-lg">{f.body}</p>
                  <ul className="mt-6 space-y-2.5 text-sm text-neutral-800">
                    {f.points.map((p) => (
                      <li key={p} className="flex items-center gap-3">
                        <span className="h-1.5 w-1.5 rounded-full bg-neutral-900" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </Container>
        </section>

        {/* 5. Services lineup */}
        <section id="services" className="scroll-mt-16 border-t border-neutral-200 bg-neutral-50 py-24 sm:py-32">
          <Container>
            <div className="max-w-2xl">
              <Eyebrow>Services</Eyebrow>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">Everything your product needs, from one team.</h2>
            </div>
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((s) => (
                <a key={s.title} href="#contact" className="group flex flex-col rounded-2xl border border-neutral-200 bg-white p-6 transition-colors hover:border-neutral-900">
                  <div className="w-36">
                    <Slot spec={s.slot} compact className="rounded-xl" />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-neutral-600">{s.body}</p>
                  <span className="mt-6 text-sm font-medium text-neutral-900">Learn more →</span>
                </a>
              ))}
            </div>
          </Container>
        </section>

        {/* 6. Selected work */}
        <section id="work" className="scroll-mt-16 py-24 sm:py-32">
          <Container>
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <div className="max-w-2xl">
                <Eyebrow>Selected work</Eyebrow>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">A glimpse of what we&rsquo;ve built.</h2>
              </div>
              <Button href="#work" variant="ghost">
                View all work
              </Button>
            </div>
            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {work.map((w) => (
                <a key={w.title} href="#work" className="group">
                  <Slot spec={w.slot} className="rounded-2xl" />
                  <p className="mt-5 text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">{w.tag}</p>
                  <h3 className="mt-2 text-lg font-semibold leading-snug group-hover:underline">{w.title}</h3>
                </a>
              ))}
            </div>
          </Container>
        </section>

        {/* 7. How we work */}
        <section id="process" className="scroll-mt-16 border-t border-neutral-200 py-24 sm:py-32">
          <Container>
            <div className="mx-auto max-w-2xl text-center">
              <Eyebrow>How we work</Eyebrow>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">Four steps. No surprises.</h2>
            </div>
            <ol className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((s) => (
                <li key={s.n}>
                  <div className="w-32">
                    <Slot spec={s.slot} compact className="rounded-full" />
                  </div>
                  <p className="mt-6 font-mono text-xs text-neutral-500">{s.n}</p>
                  <h3 className="mt-1 text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-neutral-600">{s.body}</p>
                </li>
              ))}
            </ol>
          </Container>
        </section>

        {/* 8. Breather */}
        <section className="py-16 sm:py-24">
          <Container className="flex flex-col items-center text-center">
            <div className="w-44 sm:w-52">
              <Slot spec={slots.breather} compact className="rounded-full" />
            </div>
            <p className="mt-8 max-w-md text-lg text-neutral-600">
              Every good build starts with one well-placed mark. Ours is a short conversation.
            </p>
          </Container>
        </section>

        {/* 9. Plans */}
        <section id="plans" className="scroll-mt-16 border-t border-neutral-200 bg-neutral-50 py-24 sm:py-32">
          <Container>
            <div className="mx-auto max-w-2xl text-center">
              <Eyebrow>Ways to work with us</Eyebrow>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">Simple plans. Clear scope.</h2>
              <p className="mt-5 text-neutral-600">Every project gets a written scope and price before we start. No hourly surprises.</p>
            </div>
            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {plans.map((p) => (
                <div
                  key={p.name}
                  className={`flex flex-col rounded-2xl border bg-white p-6 sm:p-8 ${p.featured ? "border-neutral-900" : "border-neutral-200"}`}
                >
                  <Slot spec={p.slot} className="rounded-xl" />
                  <div className="mt-6 flex items-baseline justify-between">
                    <h3 className="text-xl font-semibold">{p.name}</h3>
                    {p.featured && <span className="rounded-full bg-neutral-900 px-2.5 py-1 text-[11px] font-medium text-white">Most complete</span>}
                  </div>
                  <p className="mt-3 text-2xl font-semibold tracking-tight">
                    {p.price} <span className="text-sm font-normal text-neutral-500">· {p.unit}</span>
                  </p>
                  <p className="mt-3 text-sm text-neutral-600">{p.for}</p>
                  <ul className="mt-6 flex-1 space-y-2.5 border-t border-neutral-200 pt-6 text-sm">
                    {p.items.map((it) => (
                      <li key={it} className="flex gap-3">
                        <span aria-hidden>✓</span>
                        {it}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Button href="#contact" variant={p.featured ? "solid" : "ghost"}>
                      Talk about {p.name}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* 10. The two of us */}
        <section id="about" className="scroll-mt-16 py-24 sm:py-32">
          <Container>
            <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
              <div>
                <Eyebrow>The two of us</Eyebrow>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">Small on purpose.</h2>
                <p className="mt-6 text-neutral-600 sm:text-lg">
                  We could grow into a big agency. We&rsquo;d rather stay the team that knows every line of your product. You always know who&rsquo;s doing the work, because it&rsquo;s us.
                </p>
              </div>
              <div className="grid gap-8 sm:grid-cols-2">
                {team.map((t) => (
                  <div key={t.role}>
                    <Slot spec={t.slot} className="rounded-2xl" />
                    <p className="mt-5 text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">{t.role}</p>
                    <h3 className="mt-1 text-lg font-semibold">{t.name}</h3>
                    <p className="mt-2 text-sm text-neutral-600">{t.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* 11. FAQ */}
        <section id="faq" className="scroll-mt-16 border-t border-neutral-200 py-24 sm:py-32">
          <Container className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
            <div>
              <Eyebrow>FAQ</Eyebrow>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">Fair questions.</h2>
              <p className="mt-5 text-neutral-600">
                Something else on your mind?{" "}
                <a href="#contact" className="underline underline-offset-4">
                  Just ask.
                </a>
              </p>
            </div>
            <div className="divide-y divide-neutral-200 border-y border-neutral-200">
              {faqs.map((f) => (
                <details key={f.q} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-base font-medium sm:text-lg">
                    {f.q}
                    <span aria-hidden className="mt-0.5 text-xl leading-none text-neutral-400 transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 max-w-2xl text-neutral-600">{f.a}</p>
                </details>
              ))}
            </div>
          </Container>
        </section>

        {/* 12. Closing call to action */}
        <section id="contact" className="scroll-mt-16 pb-24 sm:pb-32">
          <Container>
            <div className="flex flex-col items-center rounded-3xl bg-neutral-100 px-6 py-16 text-center sm:py-24">
              <div className="w-40 sm:w-48">
                <Slot spec={slots.ctaLantern} compact className="rounded-full" />
              </div>
              <h2 className="mt-10 max-w-2xl text-3xl font-semibold tracking-tight sm:text-5xl">Have something to build or fix?</h2>
              <p className="mt-5 max-w-lg text-neutral-600 sm:text-lg">
                Tell us where you are and where you want to be. You&rsquo;ll hear back from one of us, not a sales team, within one working day.
              </p>
              <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
                <Button href="mailto:hello@gridmarc.com">Start a project</Button>
                <Button href="#contact" variant="ghost">
                  Book a 30-minute call
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </main>

      {/* 13. Footer */}
      <footer className="border-t border-neutral-200">
        <div className="mx-auto max-w-[1440px] px-5 pt-10 sm:px-8">
          <Slot spec={slots.footer} className="rounded-2xl" />
        </div>
        <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-base font-semibold">Gridmarc</p>
            <p className="mt-3 max-w-xs text-sm text-neutral-600">A two-person design and development studio. Working with clients worldwide.</p>
          </div>
          <div>
            <p className="text-sm font-medium">Services</p>
            <ul className="mt-3 space-y-2 text-sm text-neutral-600">
              <li>Web design</li>
              <li>Web development</li>
              <li>App design &amp; development</li>
              <li>Support &amp; care</li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-medium">Studio</p>
            <ul className="mt-3 space-y-2 text-sm text-neutral-600">
              <li><a href="#work">Work</a></li>
              <li><a href="#process">Process</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#plans">Plans</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-medium">Contact</p>
            <ul className="mt-3 space-y-2 text-sm text-neutral-600">
              <li><a href="mailto:hello@gridmarc.com">hello@gridmarc.com</a></li>
              <li><a href="#contact">Book a call</a></li>
            </ul>
          </div>
        </Container>
        <Container className="flex flex-col justify-between gap-3 border-t border-neutral-200 py-6 text-xs text-neutral-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Gridmarc. All rights reserved.</p>
          <p>
            <a href="#">Privacy</a> · <a href="#">Terms</a>
          </p>
        </Container>
      </footer>
    </>
  );
}
