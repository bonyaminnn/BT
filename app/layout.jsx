import "./globals.css";
import { faqs } from "@/content/faqs";
import { site, SHOW_LOCATION, LOCATION } from "@/content/site";

const SITE = site.domain;

export const metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Bony Amin — Design Engineer",
    template: "%s · Bony Amin",
  },
  description:
    "Design engineer bringing product design and frontend engineering together. I turn complex workflows into intuitive, polished, working software — product work across logistics, transportation and operational products.",
  keywords: [
    "design engineer",
    "product designer who codes",
    "product design and frontend engineering",
    "design engineer portfolio",
    "enterprise UX workflow design",
    "design systems",
  ],
  authors: [{ name: site.name, url: SITE }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: SITE,
    siteName: site.name,
    title: "Bony Amin — Design Engineer",
    description:
      "I design and build better digital product experiences — product design and frontend engineering in one person.",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

/* ---- AEO: structured data so answer engines can quote the page directly ---- */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE}/#bony`,
      name: site.name,
      jobTitle: site.role,
      description:
        "Design engineer who combines product design with frontend engineering, turning complex operational workflows into intuitive, working software.",
      url: SITE,
      email: `mailto:${site.email}`,
      ...(SHOW_LOCATION
        ? { address: { "@type": "PostalAddress", addressCountry: LOCATION } }
        : {}),
      knowsAbout: [
        "Product design",
        "Interaction design",
        "Frontend development",
        "Design systems",
        "Enterprise workflow UX",
        "Mobile UX",
        "Web accessibility",
      ],
      knowsLanguage: "English",
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE}/#practice`,
      name: `${site.name} — Design Engineering`,
      description:
        "Product design, frontend implementation and design systems work for teams improving digital products. Available for design engineering roles and for freelance and contract projects.",
      url: SITE,
      provider: { "@id": `${SITE}/#bony` },
      areaServed: "Worldwide",
      availableLanguage: "English",
      serviceType: [
        "Product design",
        "Frontend implementation",
        "Design systems",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE}/#website`,
      url: SITE,
      name: site.name,
      publisher: { "@id": `${SITE}/#bony` },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE}/#faq`,
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-ink focus:px-3 focus:py-2 focus:text-sm focus:text-paper"
        >
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
