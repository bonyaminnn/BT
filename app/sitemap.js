import { projects } from "@/content/projects";
import { site } from "@/content/site";

const SITE = site.domain;

export default function sitemap() {
  const pages = ["", "/work", "/about"];
  return [
    ...pages.map((path) => ({
      url: `${SITE}${path}`,
      lastModified: new Date(),
      changeFrequency: path === "" ? "weekly" : "monthly",
      priority: path === "" ? 1 : 0.8,
    })),
    ...projects.map((p) => ({
      url: `${SITE}/work/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    })),
  ];
}
