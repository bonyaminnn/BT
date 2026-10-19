/**
 * Rendered visibly inside the contact section AND as FAQPage JSON-LD. Both, deliberately:
 * structured data describing answers a visitor cannot see on the page is against search
 * guidelines, so these stay on the page.
 *
 * Answers are written to be quotable verbatim by an answer engine — each stands alone
 * without its question. No invented metrics, no invented client names.
 */
export const faqs = [
  {
    q: "What does a design engineer actually do?",
    a: "A design engineer does both the product design and the frontend implementation. In practice that means I map the workflow, design the interface, and then build it as responsive, reusable components — so the thing that ships is the thing that was designed, with no translation loss between a design file and production code.",
  },
  {
    q: "Are you available for full-time roles, contract work, or both?",
    a: "Both. I'm open to design engineering roles on product teams, and I take freelance and contract projects where a company needs product design and frontend implementation handled together.",
  },
  {
    q: "Can you work with our existing stack and design system?",
    a: "Yes. I work inside what a team already has — existing components, established design foundations, and a live codebase — rather than requiring a rebuild. Extending a system that already works is usually faster and cheaper than replacing it.",
  },
  {
    q: "What kind of projects are you looking for?",
    a: "Complex product problems: operational and enterprise workflows, multi-step booking and transaction journeys, and interfaces where the hard part is making something complicated feel obvious. My background is in logistics, transportation and operational products.",
  },
  {
    q: "How do you work with product and engineering teams?",
    a: "As a collaborator inside the team rather than a vendor delivering files over a wall. I work alongside product managers on requirements and constraints, and alongside engineers on implementation, component structure and what is realistic to build.",
  },
  {
    q: "How quickly do you reply?",
    a: "Within one business day, to every enquiry — including the ones I'm not the right fit for.",
  },
];
