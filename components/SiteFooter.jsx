import Slot from "@/components/Slot";
import { site } from "@/content/site";

export default function SiteFooter() {
  const cols = [
    ["Site", [["Work", "/work"], ["Services", "/#services"], ["About", "/about"], ["Testimonials", "/#testimonials"]]],
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
