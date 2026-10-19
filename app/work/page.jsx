import Slot from "@/components/Slot";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Section, Button, Tag } from "@/components/ui";
import { projects } from "@/content/projects";

export const metadata = {
  title: "Work",
  description:
    "Product work across logistics, transportation and operational systems — shipped products and self-directed redesigns, with my contribution on each stated plainly.",
  alternates: { canonical: "/work" },
};

export default function WorkIndex() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <section aria-label="Work" className="px-5 pt-16 pb-12 sm:px-8 md:pt-24">
          <div className="mx-auto w-full max-w-6xl">
            <h1 className="max-w-3xl text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl">
              Products built for people doing a complicated job.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-g600">
              Each project states what I actually contributed, and whether it shipped or
              was a self-directed redesign.
            </p>
          </div>
        </section>

        <Section id="projects" label="All projects">
          <ul className="space-y-16 md:space-y-24">
            {projects.map((p, i) => (
              <li key={p.slug} className="grid items-center gap-8 md:grid-cols-2 md:gap-14">
                <Slot {...p.slot} className={`w-full ${i % 2 === 1 ? "md:order-2" : ""}`} />
                <div className={i % 2 === 1 ? "md:order-1" : ""}>
                  <Tag kind={p.kind} />
                  <p className="mt-4 font-mono text-[11px] tracking-[0.1em] text-g500 uppercase">
                    {p.category}
                  </p>
                  <h2 className="mt-3 text-xl font-semibold tracking-tight sm:text-2xl">
                    {p.name}
                  </h2>
                  <p className="mt-2 text-[17px] font-medium text-g700">{p.headline}</p>
                  <p className="mt-4 text-[16px] leading-relaxed text-g600">{p.body}</p>
                  <a
                    href={`/work/${p.slug}`}
                    className="mt-6 inline-block text-[15px] underline underline-offset-4 hover:text-g600"
                  >
                    Explore case study
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="cta" label="Start a conversation" className="bg-g50">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Something here look like your problem?
            </h2>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/#contact">Get in touch</Button>
              <Button href="/resume.pdf" variant="outline" download>
                Download résumé
              </Button>
            </div>
          </div>
        </Section>
      </main>
      <SiteFooter />
    </>
  );
}
