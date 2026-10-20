import { site } from "@/content/site";

/**
 * Sticky top navigation.
 *
 * Links are absolute with a hash (`/#services`), so the nav works from every page and
 * not only from the homepage.
 *
 * At phone width the links drop to a second row that scrolls horizontally, rather than
 * hiding behind a hamburger. A disclosure menu would need JavaScript and a tap to open;
 * a visible row keeps every destination one tap away, which is the whole point of a nav
 * on a site this small.
 */
const links = [
  ["Work", "/work"],
  ["Services", "/#services"],
  ["Process", "/#process"],
  ["About", "/about"],
  ["Testimonials", "/#testimonials"],
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-g200 bg-paper/95 backdrop-blur">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="flex items-center justify-between gap-4 py-4">
          <a
            href="/"
            className="text-[15px] font-semibold tracking-tight whitespace-nowrap"
          >
            {site.name}
          </a>

          {/* Tablet and up: links inline, between the wordmark and the CTA. */}
          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-8">
              {links.map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="text-sm text-g600 hover:text-ink">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href="/#contact"
            className="shrink-0 rounded-sm bg-ink px-4 py-2.5 text-sm font-medium text-paper hover:bg-g700"
          >
            Get in touch
          </a>
        </div>

        {/* Phone: a second row. Scrolls sideways if the labels outrun the width, with the
            scrollbar hidden so it reads as a row of links rather than a widget. */}
        <nav
          aria-label="Primary, mobile"
          className="-mx-5 border-t border-g200 px-5 md:hidden"
        >
          <ul className="flex items-center gap-6 overflow-x-auto py-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {links.map(([label, href]) => (
              <li key={href} className="shrink-0">
                <a href={href} className="text-sm whitespace-nowrap text-g600 hover:text-ink">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
