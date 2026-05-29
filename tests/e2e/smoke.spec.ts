import { expect, test } from "@playwright/test";

const retiredCopy = ["pseudonymous", "client fingerprints", "0 client names"];
const privacyLeaks = [
  { label: "direct email links", pattern: /href="mailto:/i },
  { label: "telephone links", pattern: /href="tel:/i },
  { label: "public CV links", pattern: /href="[^"]*\/cv\//i },
  { label: "person schema", pattern: /"@type":"Person"/i },
  { label: "public social links", pattern: /linkedin\.com/i },
];

test("home renders anonymized recruiter-focused portfolio", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });

  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "production platforms",
  );
  await expect(page.getByText("My anonymous portfolio")).toBeVisible();
  await expect(page.locator("#experience .eyebrow")).toHaveText("Experience");
  await expect(page.getByText("Private cloud operator")).toBeVisible();
  await expect(page.locator("a[href^='mailto:']")).toHaveCount(0);
  await expect(page.locator("a[href*='/cv/']")).toHaveCount(0);
  expect(errors).toEqual([]);
});

test("language switcher opens equivalent French and English pages", async ({
  page,
}) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Français" }).click();
  await expect(page).toHaveURL(/\/fr\/$/);
  await expect(page.locator("html")).toHaveAttribute("lang", "fr");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "SRE & DevSecOps",
  );
  await expect(page.locator("#work .eyebrow")).toHaveText("Réalisations");

  await page.getByRole("link", { name: "English" }).click();
  await expect(page).toHaveURL(/\/$/);
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
});

test("French blog index renders localized metadata and cards", async ({
  page,
}) => {
  await page.goto("/fr/blog/");
  await expect(page.locator("html")).toHaveAttribute("lang", "fr");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Notes techniques",
  );
  await expect(
    page.getByRole("heading", { name: "Tous les articles" }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: /Lire l'article: External-DNS/i }),
  ).toBeVisible();
  await page
    .getByRole("link", { name: /Lire l'article: External-DNS/i })
    .click();
  await expect(page).toHaveURL(
    /\/fr\/blog\/external-dns-kubernetes-azure-argocd\/$/,
  );
  await expect(page.locator("html")).toHaveAttribute("lang", "fr");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "automatiser la gestion DNS",
  );
});

test("French design lab renders local visual directions", async ({ page }) => {
  await page.goto("/fr/designs/");
  await expect(page.locator("html")).toHaveAttribute("lang", "fr");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Trois directions",
  );

  for (const slug of ["atelier", "console", "strata"]) {
    await page.goto(`/fr/designs/${slug}/`);
    await expect(page.getByRole("link", { name: "Kore.sh" })).toBeVisible();
    await expect(page.locator(".design-hero__system > div")).toHaveCount(3);
    const overflow = await page.evaluate(() => {
      const width = document.documentElement.clientWidth;
      return [...document.querySelectorAll("body *")].some((element) => {
        const rect = element.getBoundingClientRect();
        return rect.right > width + 1 || rect.left < -1;
      });
    });
    expect(overflow, `${slug} has horizontal overflow`).toBe(false);
  }
});

test("theme toggle persists", async ({ page }) => {
  await page.goto("/");
  const initial = await page.locator("html").getAttribute("data-theme");
  await page.getByRole("button", { name: /switch color theme/i }).click();
  const next = await page.locator("html").getAttribute("data-theme");
  expect(next).not.toBe(initial);
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("data-theme", next ?? "");
});

test("mobile menu opens, navigates and closes", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const menuButton = page.locator("#mobileMenuToggle");
  await menuButton.click();
  await expect(menuButton).toHaveAttribute("aria-expanded", "true");
  await page
    .getByLabel("Mobile navigation")
    .getByRole("link", { name: "Contact" })
    .click();
  await expect(menuButton).toHaveAttribute("aria-expanded", "false");
  await expect(page).toHaveURL(/#contact$/);
});

test("blog index links to article", async ({ page }) => {
  await page.goto("/blog/");
  await page.getByRole("link", { name: /External-DNS/i }).click();
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "External-DNS",
  );
});

test("article language switch keeps the same slug", async ({ page }) => {
  await page.goto("/blog/external-dns-kubernetes-azure-argocd/");
  await page.getByRole("link", { name: "Français" }).click();
  await expect(page).toHaveURL(
    /\/fr\/blog\/external-dns-kubernetes-azure-argocd\/$/,
  );
  await expect(page.locator("html")).toHaveAttribute("lang", "fr");

  await page.getByRole("link", { name: "English" }).click();
  await expect(page).toHaveURL(
    /\/blog\/external-dns-kubernetes-azure-argocd\/$/,
  );
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
});

test("public pages do not contain retired pseudonymous messaging", async ({
  page,
}) => {
  for (const path of [
    "/",
    "/fr/",
    "/blog/",
    "/fr/blog/",
    "/blog/external-dns-kubernetes-azure-argocd/",
    "/fr/blog/external-dns-kubernetes-azure-argocd/",
    "/blog/openstack-ovn-sdn-complete-guide/",
    "/fr/blog/openstack-ovn-sdn-complete-guide/",
  ]) {
    await page.goto(path);
    const html = (await page.content()).toLowerCase();
    for (const term of retiredCopy) {
      expect(html, `${path} contains ${term}`).not.toContain(term);
    }
  }
});

test("public pages do not expose personal identifiers", async ({ page }) => {
  for (const path of [
    "/",
    "/fr/",
    "/blog/",
    "/fr/blog/",
    "/blog/external-dns-kubernetes-azure-argocd/",
    "/fr/blog/external-dns-kubernetes-azure-argocd/",
    "/blog/openstack-ovn-sdn-complete-guide/",
    "/fr/blog/openstack-ovn-sdn-complete-guide/",
  ]) {
    await page.goto(path);
    const html = await page.content();
    for (const leak of privacyLeaks) {
      expect(html, `${path} contains ${leak.label}`).not.toMatch(leak.pattern);
    }
  }
});
