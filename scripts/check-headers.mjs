import { readFile } from "node:fs/promises";

const headers = await readFile("dist/_headers", "utf8");
const required = [
  "X-Frame-Options: DENY",
  "X-Content-Type-Options: nosniff",
  "Referrer-Policy: strict-origin-when-cross-origin",
  "Permissions-Policy:",
  "Content-Security-Policy:",
  "Cache-Control: public, max-age=31536000, immutable",
];

const missing = required.filter((header) => !headers.includes(header));

if (missing.length > 0) {
  console.error(`dist/_headers is missing: ${missing.join(", ")}`);
  process.exit(1);
}

console.log("dist/_headers contains required security and cache directives.");
