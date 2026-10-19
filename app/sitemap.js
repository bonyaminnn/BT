const SITE = "https://bonyamin.com";
const paths = ["", "/work", "/services", "/pricing", "/process", "/about", "/faq", "/journal", "/contact"];

export default function sitemap() {
  return paths.map((p) => ({
    url: `${SITE}${p}`,
    lastModified: new Date(),
    changeFrequency: p === "" ? "weekly" : "monthly",
    priority: p === "" ? 1 : 0.7,
  }));
}
