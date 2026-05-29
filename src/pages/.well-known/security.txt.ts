import type { APIRoute } from "astro";
import { site } from "../../data/site";

export const GET: APIRoute = () => {
  const body = [
    `Contact: ${new URL("/#contact", site.siteUrl).toString()}`,
    "Preferred-Languages: en, fr",
    `Canonical: ${new URL("/.well-known/security.txt", site.siteUrl).toString()}`,
    "Policy: Please do not send secrets, credentials, hostnames, IP addresses or client-identifying details by email.",
    "Expires: 2027-05-22T00:00:00.000Z",
  ].join("\n");

  return new Response(`${body}\n`, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
