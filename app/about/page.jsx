import Slot from "@/components/Slot";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Section, Eyebrow, Button } from "@/components/ui";
import { site, SHOW_LOCATION, LOCATION } from "@/content/site";

export const metadata = {
  title: "About",
  description:
    "Design engineer working at the intersection of product design, interaction design and frontend engineering, with product experience across logistics, transportation and operational systems.",
  alternates: { canonical: "/about" },
};

export default function About() {
  const facts = [
    ["Experience", `~${site.yearsExperience} years`],
    ["Domains", "Logistics · transportation · digital products"],
    ["Works with", "Product and engineering teams"],
    ["Focus", "Design-to-development implementation"],
  ];

  return (
    <>
      <SiteHeader />
      <main id="main">
        <section aria-label="About" className="px-5 pt-16 pb-12 sm:px-8 md:pt-24">
          <div className="mx-auto w-full max-w-6xl">
            <Eyebrow>About me</Eyebrow>
            <h1 className="mt-5 max-w-3xl text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl">
              A designer who cares about how things work.
            </h1>
          </div>
        </section>

        <Section id="story" label="Background">
          <div className="grid gap-10 md:grid-cols-[1fr_20rem] md:gap-16">
            <div className="max-w-xl">
              <p className="text-[17px] leading-relaxed text-g600">
                I&rsquo;m a {SHOW_LOCATION ? `${LOCATION}-based ` : ""}designer interested
                in building useful, thoughtful digital products. My work sits at the
                intersection of product design, interaction design and frontend
                engineering.
              </p>
              <p className="mt-4 text-[17px] leading-relaxed text-g600">
                Most of my experience is in operational products — logistics,
                transportation, systems people use to get work done rather than to be
                entertained. The interesting problems there are rarely visual. Someone has
                a complicated job, the interface is in the way, and untangling that needs
                an understanding of the workflow before any screen gets drawn.
              </p>
              <p className="mt-4 text-[17px] leading-relaxed text-g600">
                Being able to build what I design is what keeps those decisions intact.
                Nothing gets watered down on the way to production, and nothing comes back
                three weeks later as technically impossible.
              </p>
              <p className="mt-4 text-[17px] leading-relaxed text-g600">
                Outside work: photography, travelling, and noticing the small details of
                ordinary things — which turns out to be the same habit the work depends on.
              </p>

              <dl className="mt-12 grid grid-cols-1 gap-x-8 gap-y-6 border-t border-g200 pt-8 sm:grid-cols-2">
                {facts.map(([k, v]) => (
                  <div key={k}>
                    <dt className="font-mono text-[10px] tracking-[0.14em] text-g500 uppercase">
                      {k}
                    </dt>
                    <dd className="mt-1.5 text-[15px] font-medium text-ink">{v}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-10 flex flex-wrap gap-4">
                <Button href="/#contact">Get in touch</Button>
                <Button href="/resume.pdf" variant="outline" download>
                  Download résumé
                </Button>
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

        <Section id="work-cta" label="See the work" className="bg-g50">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              The work says more than this page does.
            </h2>
            <div className="mt-8">
              <Button href="/work">See my work</Button>
            </div>
          </div>
        </Section>
      </main>
      <SiteFooter />
    </>
  );
}
