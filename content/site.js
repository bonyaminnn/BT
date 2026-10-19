/**
 * Single source of truth for the facts that recur across the page and the structured
 * data. Two flags here because the source brief and the IA document disagree:
 *
 * SHOW_LOCATION — the IA asks for "DESIGN ENGINEER · BANGLADESH" in the hero eyebrow
 * and "Bangladesh-based" in the About copy; the original brief said not to state the
 * location anywhere. It is off, honouring the explicit instruction. Flip it to true and
 * the location appears in both places and in the Person schema, with no other edits.
 */
export const SHOW_LOCATION = false;
export const LOCATION = "Bangladesh";

export const site = {
  name: "Bony Amin",
  role: "Design Engineer",
  domain: "https://bonyamin.com",
  email: "hello@bonyamin.com",
  // VERIFY before publishing — the IA flags this figure as unconfirmed.
  yearsExperience: 5,
  replyWindow: "1 business day",
};

/** The strip at the foot of the hero: what I am, and the three places I do it. */
export const usps = [
  "Design engineer",
  "Simplifying complex systems",
  "B2B SaaS",
  "Dashboards & internal tools",
];
