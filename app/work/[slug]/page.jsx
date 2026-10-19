import Slot from "@/components/Slot";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Section, Eyebrow, Button, Tag } from "@/components/ui";
import { projects, getProject } from "@/content/projects";
import { site } from "@/content/site";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.name,
    description: `${project.headline}. ${project.category}.`,
    alternates: { canonical: `/work/${project.slug}` },
  };
}

export default async function CaseStudy({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === slug);
  const next = projects[(index + 1) % projects.length];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    headline: project.headline,
    abstract: project.body,
    url: `${site.domain}/work/${project.slug}`,
    creator: { "@id": `${site.domain}/#bony` },
    about: project.category,
    creativeWorkStatus:
      project.kind === "shipped" ? "Published" : "Self-directed redesign",
  };

  return (
    <>
      <SiteHeader />
      <main id="main">
        <section aria-label={project.name} className="px-5 pt-16 pb-12 sm:px-8 md:pt-24">
          <div className="mx-auto w-full max-w-6xl">
            <nav aria-label="Breadcrumb" className="font-mono text-[11px] tracking-[0.1em] text-g500 uppercase">
              <a href="/work" className="hover:text-ink">
                Work
              </a>
              <span aria-hidden="true"> / </span>
              <span>{project.name}</span>
            </nav>
            <div className="mt-6">
              <Tag kind={project.kind} />
            </div>
            <h1 className="mt-5 max-w-3xl text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl">
              {project.headline}
            </h1>
            <p className="mt-5 font-mono text-[11px] tracking-[0.1em] text-g500 uppercase">
              {project.name} · {project.category}
            </p>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-g600">{project.body}</p>
            <Slot {...project.slot} className="mt-14 w-full" />
          </div>
        </section>

        {/* The IA's case-study outline, rendered as the writing scaffold. Each heading is
            real and final; the body under it is what still has to be written. */}
        <Section id="case-study" label="Case study">
          <Eyebrow>Case study outline</Eyebrow>
          <h2 className="mt-4 max-w-2xl text-2xl font-semibold tracking-tight sm:text-3xl">
            {project.sections.length} sections to write.
          </h2>
          <p className="mt-5 max-w-2xl text-[16px] leading-relaxed text-g600">
            The structure is set. Each section below needs the real account — what the
            problem was, what you decided, and what happened — written from your own
            notes, not reconstructed.
          </p>
          <ol className="mt-12 space-y-8 border-t border-g200 pt-10">
            {project.sections.map((s, i) => (
              <li key={s} className="grid gap-3 md:grid-cols-[4rem_1fr] md:gap-8">
                <p className="font-mono text-[11px] tracking-[0.14em] text-g500 uppercase">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <div>
                  <h3 className="text-[17px] font-semibold tracking-tight">{s}</h3>
                  <div className="mt-3 rounded-sm border border-dashed border-g400 bg-g100 px-4 py-3">
                    <p className="font-mono text-[10px] font-semibold tracking-[0.12em] text-g700 uppercase">
                      Copy pending
                    </p>
                    <p className="mt-1.5 text-[14px] leading-snug text-g600">
                      Two to four paragraphs, plus any screens or diagrams that carry the
                      argument. Use verified outcomes only.
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="next" label="Next project" className="bg-g50">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow>Next project</Eyebrow>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                {next.name}
              </h2>
              <p className="mt-2 text-[16px] text-g600">{next.headline}</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button href={`/work/${next.slug}`}>Next case study</Button>
              <Button href="/#contact" variant="outline">
                Get in touch
              </Button>
            </div>
          </div>
        </Section>
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
