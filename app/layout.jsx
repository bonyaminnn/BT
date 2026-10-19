import "./globals.css";
import { faqs } from "@/content/faqs";

const SITE = "https://bonyamin.com";

export const metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Bony Amin — Design engineer. We design and build your product end to end.",
    template: "%s · Bony Amin",
  },
  description:
    "A two-person studio of one senior designer and one senior engineer. We design, build and ship websites, apps and digital products end to end — no agency hand-offs, no queue.",
  keywords: [
    "design engineer",
    "two-person design studio",
    "website design and development",
    "product design and build",
    "end-to-end web development",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE,
    siteName: "Bony Amin",
    title: "Bony Amin — Design engineer",
    description:
      "One senior designer, one senior engineer. Designed, built and shipped by the same two hands.",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

/* ---- AEO: structured data so answer engines can quote the page directly ---- */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${SITE}/#studio`,
      name: "Bony Amin",
      description:
        "A two-person design engineering studio. One senior designer and one senior engineer design, build and ship websites, applications and digital products end to end.",
      url: SITE,
      founder: { "@id": `${SITE}/#bony` },
      numberOfEmployees: { "@type": "QuantitativeValue", value: 2 },
      areaServed: "Worldwide",
      availableLanguage: "English",
      serviceType: [
        "Website design and development",
        "Web application design and development",
        "Design systems",
        "Product redesign and rebuild",
        "Design and engineering audits",
        "Ongoing design and development support",
      ],
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "USD",
        lowPrice: "6000",
        highPrice: "40000",
        offerCount: 3,
      },
    },
    {
      "@type": "Person",
      "@id": `${SITE}/#bony`,
      name: "Bony Amin",
      jobTitle: "Design Engineer",
      description:
        "Design engineer who designs and develops websites, applications and digital products.",
      url: SITE,
      worksFor: { "@id": `${SITE}/#studio` },
      knowsAbout: [
        "Product design",
        "Front-end engineering",
        "Design systems",
        "Web performance",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE}/#website`,
      url: SITE,
      name: "Bony Amin",
      publisher: { "@id": `${SITE}/#studio` },
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
