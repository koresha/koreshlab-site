import type { APIRoute } from "astro";
import { site } from "../data/site";

export const GET: APIRoute = () => {
  const manifest = {
    name: `${site.publicName} - SRE and DevSecOps`,
    short_name: site.shortName,
    description: site.description,
    lang: "en",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#111314",
    theme_color: "#111314",
    shortcuts: [
      {
        name: "Français",
        short_name: "FR",
        url: "/fr/",
      },
      {
        name: "Articles",
        short_name: "Blog",
        url: "/blog/",
      },
      {
        name: "Contact",
        short_name: "Contact",
        url: "/#contact",
      },
    ],
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };

  return new Response(JSON.stringify(manifest, null, 2), {
    headers: {
      "Content-Type": "application/manifest+json; charset=utf-8",
    },
  });
};
