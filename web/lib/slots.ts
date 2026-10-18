// Every image slot on the homepage. When a real asset lands at `src`,
// flip `ready` to true and <Slot> renders the file in the same box.

export type AssetType = "illustration" | "product shot" | "icon";

export type SlotSpec = {
  id: string;
  type: AssetType;
  ratio: `${number}:${number}`;
  src: string;
  note: string;
  ready?: boolean;
};

const slot = (
  id: string,
  type: AssetType,
  ratio: SlotSpec["ratio"],
  file: string,
  note: string,
): SlotSpec => ({ id, type, ratio, src: `/assets/${file}`, note });

export const slots = {
  logoMark: slot("LOGO-MARK", "icon", "1:1", "logo-mark.webp", "Survey stake on a single grid square"),
  hero: slot("HERO-SCENE", "illustration", "16:6", "hero-scene.webp", "Morning valley under a faint grid; two figures set the first survey stake"),

  featureMakers: slot("FEATURE-MAKERS", "illustration", "4:3", "feature-makers.webp", "The two figures at one shared table: drafting board and toolbox side by side"),
  featureSpeed: slot("FEATURE-SPEED", "illustration", "4:3", "feature-speed.webp", "A small cabin rising in a single day, sun moving across the sky"),
  featureWherever: slot("FEATURE-WHEREVER", "illustration", "4:3", "feature-wherever.webp", "Split plot: an old house being extended beside an empty marked field"),

  iconWebDesign: slot("ICON-WEB-DESIGN", "icon", "1:1", "icon-web-design.webp", "Drafting board with a window-shaped layout sketch"),
  iconWebDev: slot("ICON-WEB-DEV", "icon", "1:1", "icon-web-dev.webp", "Trowel laying a neat row of bricks on a grid line"),
  iconApp: slot("ICON-APP", "icon", "1:1", "icon-app.webp", "Small pocket-sized lantern-lit hut, phone-proportioned"),
  iconSupport: slot("ICON-SUPPORT", "icon", "1:1", "icon-support.webp", "Watering can tending a young sapling by a fence post"),

  work01: slot("WORK-01", "product shot", "4:3", "work-01.webp", "Real screenshot: website redesign, hero + one inner page"),
  work02: slot("WORK-02", "product shot", "4:3", "work-02.webp", "Real screenshot: web app dashboard, primary screen"),
  work03: slot("WORK-03", "product shot", "4:3", "work-03.webp", "Real screenshot: mobile app, three screens side by side"),

  stepSurvey: slot("STEP-SURVEY", "icon", "1:1", "step-survey.webp", "Surveyor's tripod and level on a tuft of grass"),
  stepPlan: slot("STEP-PLAN", "icon", "1:1", "step-plan.webp", "Rolled plan held open by two pebbles"),
  stepBuild: slot("STEP-BUILD", "icon", "1:1", "step-build.webp", "Timber frame of a wall, half raised"),
  stepTend: slot("STEP-TEND", "icon", "1:1", "step-tend.webp", "Lantern hung on a finished doorway"),

  breather: slot("BREATHER-STAKE", "illustration", "1:1", "breather-stake.webp", "Single survey stake with a ribbon, small bird perched on top"),

  planSprint: slot("PLAN-SPRINT", "illustration", "3:2", "plan-sprint.webp", "A single marked plot with one stake and a string line"),
  planBuild: slot("PLAN-BUILD", "illustration", "3:2", "plan-build.webp", "A small house fully framed on its plot"),
  planCare: slot("PLAN-CARE", "illustration", "3:2", "plan-care.webp", "The finished house with a garden being tended"),

  teamOne: slot("TEAM-ONE", "illustration", "4:5", "team-one.webp", "Illustrated portrait: partner one with drafting board (design)"),
  teamTwo: slot("TEAM-TWO", "illustration", "4:5", "team-two.webp", "Illustrated portrait: partner two with toolbox (development)"),

  ctaLantern: slot("CTA-LANTERN", "illustration", "1:1", "cta-lantern.webp", "Open gate in a low fence, lantern lit, path leading in"),
  footer: slot("FOOTER-SCENE", "illustration", "16:5", "footer-scene.webp", "Same valley at dusk, fully built small settlement, windows lit"),
} satisfies Record<string, SlotSpec>;
