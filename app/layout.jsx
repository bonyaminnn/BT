import "./globals.css";
import { faqs } from "@/content/faqs";

const SITE = "https://bonyamin.com";

export const metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Bony Amin — Design engineer. I design and build digital products.",
    template: "%s · Bony Amin",
  },
  description:
    "I'm a design engineer. I help founders and companies build, modify and enhance their digital products — websites, applications and product interfaces, designed and engineered by one pair of hands.",
  keywords: [
    "design engineer",
    "freelance design engineer",
    "website design and development",
    "web application design and development",
    "product redesign",
    "design engineering for founders",
  ],
  authors: [{ name: "Bony Amin", url: SITE }],
  creator: "Bony Amin",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE,
    siteName: "Bony Amin",
    title: "Bony Amin — Design engineer",
    description:
      "One design engineer who designs and ships. Build something new, modify what you have, or enhance what already works.",
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
      name: "Bony Amin",
      jobTitle: "Design Engineer",
      description:
        "Design engineer who designs and develops websites, applications and other digital products, helping founders and companies build, modify and enhance what they already have.",
      url: SITE,
      knowsAbout: [
        "Product design",
        "Front-end engineering",
        "Design systems",
        "Web performance",
        "Web accessibility",
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE}/#practice`,
      name: "Bony Amin — Design Engineering",
      description:
        "An independent design engineering practice. One design engineer designs and builds websites, web applications and digital products end to end — new builds, modifications to existing products, and enhancements to products already in use.",
      url: SITE,
      founder: { "@id": `${SITE}/#bony` },
      provider: { "@id": `${SITE}/#bony` },
      numberOfEmployees: { "@type": "QuantitativeValue", value: 1 },
      areaServed: "Worldwide",
      availableLanguage: "English",
      serviceType: [
        "Website design and development",
        "Web application design and development",
        "Design systems",
        "Product redesign and rebuild",
        "Performance and accessibility enhancement",
        "Design and engineering audits",
        "Ongoing design and development support",
      ],
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "USD",
        lowPrice: "2500",
        highPrice: "30000",
        offerCount: 3,
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE}/#website`,
      url: SITE,
      name: "Bony Amin",
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
