import type { APIRoute } from "astro";
import { blogPosts } from "../data/blog";
import { site } from "../data/site";

const localizedPaths = [
  { en: "/", fr: "/fr/" },
  { en: "/blog/", fr: "/fr/blog/" },
  ...blogPosts.map((post) => ({
    en: `/blog/${post.slug}/`,
    fr: `/fr/blog/${post.slug}/`,
  })),
];
const staticPaths = ["/maintenance/"];

export const GET: APIRoute = () => {
  const urls = [
    ...localizedPaths.flatMap((paths) =>
      Object.entries(paths).map(([, path]) => {
        const loc = new URL(path, site.siteUrl).toString();
        const alternateLinks = Object.entries(paths)
          .map(([alternateLocale, alternatePath]) => {
            const href = new URL(alternatePath, site.siteUrl).toString();
            return `<xhtml:link rel="alternate" hreflang="${alternateLocale}" href="${href}" />`;
          })
          .join("");
        const xDefault = new URL(paths.en, site.siteUrl).toString();
        return `<url><loc>${loc}</loc>${alternateLinks}<xhtml:link rel="alternate" hreflang="x-default" href="${xDefault}" /></url>`;
      }),
    ),
    ...staticPaths.map((path) => {
      const loc = new URL(path, site.siteUrl).toString();
      return `<url><loc>${loc}</loc></url>`;
    }),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join("\n")}\n</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};
