/**
 * The project set, shared by the homepage, the work index and each case study, so the
 * three never drift apart.
 *
 * `kind` drives the Shipped product / Self-directed redesign tag. `sections` is the
 * case-study outline from the IA — rendered as the writing scaffold until each study is
 * actually written.
 */
export const projects = [
  {
    slug: "tl-ops-challan",
    name: "TL Ops — Challan Workflow",
    category: "Enterprise UX · Logistics · Workflow design",
    headline: "Making operational workflows easier to manage",
    body: "I worked on digitising the challan submission and review process in TL Ops, bringing an operational paper workflow into a structured digital experience — mapping the existing process, designing the interaction, and working through implementation with the team.",
    kind: "shipped",
    sections: [
      "Context and business problem",
      "Existing workflow and pain points",
      "My role and collaboration",
      "Workflow mapping and interaction design",
      "Key design decisions",
      "Final interface and implementation",
      "Outcomes and lessons learned",
    ],
    slot: {
      id: "WORK-01",
      type: "product shot",
      ratio: "16:10",
      description: "TL Ops challan submission and review interface — the main workflow screen, real UI, annotated if confidentiality allows.",
      path: "/public/assets/work-01-tlops.webp",
    },
  },
  {
    slug: "truck-lagbe-home-shifting",
    name: "Truck Lagbe — Home Shifting",
    category: "Transportation · Service design · Mobile UX",
    headline: "Bringing a new service into an existing platform",
    body: "I worked on integrating a home-shifting service into the Truck Lagbe app, connecting service discovery to the booking experience without disrupting the flows that existing users already relied on.",
    kind: "shipped",
    sections: [
      "Product context and user needs",
      "Service discovery and booking journey",
      "Information architecture and interaction decisions",
      "Collaboration and implementation",
      "Launch and verified outcomes",
    ],
    slot: {
      id: "WORK-02",
      type: "product shot",
      ratio: "16:10",
      description: "Truck Lagbe home-shifting screens — service discovery into booking, two or three mobile frames side by side.",
      path: "/public/assets/work-02-trucklagbe.webp",
    },
  },
  {
    slug: "shohoz-bus-booking",
    name: "Shohoz — Bus Booking Redesign",
    category: "Travel · Interaction design · Mobile UX",
    headline: "Making the booking journey easier to understand",
    body: "A self-directed redesign exploring journey clarity, seat selection, visual hierarchy and accessibility in the bus-ticket booking experience — a UX audit first, then the interface changes that followed from it.",
    kind: "concept",
    sections: [
      "UX audit and identified problems",
      "Journey and information architecture",
      "Seat-selection interaction",
      "Visual and accessibility improvements",
      "Prototype or implementation",
      "Lessons and next steps",
    ],
    slot: {
      id: "WORK-03",
      type: "product shot",
      ratio: "16:10",
      description: "Shohoz redesign — the seat-selection interaction, before and after, as mobile frames.",
      path: "/public/assets/work-03-shohoz.webp",
    },
  },
];

export const getProject = (slug) => projects.find((p) => p.slug === slug);
