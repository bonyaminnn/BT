export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://bonyamin.com/sitemap.xml",
    host: "https://bonyamin.com",
  };
}
