import { site } from "@/content/site";

/**
 * Links are absolute with a hash (`/#work`) rather than bare anchors, so the nav works
 * from every page and not only from the homepage.
 */
export default function SiteHeader() {
  const links = [
    ["Work", "/work"],
    ["Services", "/#services"],
    ["About", "/about"],
    ["Testimonials", "/#testimonials"],
  ];
  return (
    <header className="sticky top-0 z-40 border-b border-g200 bg-paper/90 backdrop-blur">
      <nav
        aria-label="Primary"
        className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 sm:px-8"
      >
        <a href="/" className="text-[15px] font-semibold tracking-tight">
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
          href="/#contact"
          className="rounded-sm bg-ink px-4 py-2.5 text-sm font-medium text-paper hover:bg-g700"
        >
          Get in touch
        </a>
      </nav>
    </header>
  );
}
