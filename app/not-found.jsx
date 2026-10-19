import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Eyebrow, Button } from "@/components/ui";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="px-5 py-28 sm:px-8 md:py-36">
        <div className="mx-auto w-full max-w-6xl">
          <Eyebrow>404</Eyebrow>
          <h1 className="mt-5 max-w-2xl text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl">
            That page isn&rsquo;t here.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-g600">
            Either it moved or it was never built. The work and the contact details are
            both one click away.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button href="/work">See my work</Button>
            <Button href="/#contact" variant="outline">
              Get in touch
            </Button>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
