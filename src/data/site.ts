export type SiteConfig = {
  publicName: string;
  shortName: string;
  role: string;
  siteUrl: string;
  title: string;
  description: string;
  positioning: string;
  contactFormName: string;
  robotsPolicy: string;
  socialLinks: Array<{ label: string; href: string }>;
};

export const site: SiteConfig = {
  publicName: "Kore.sh",
  shortName: "Kore.sh",
  role: "Site Reliability Engineer · Platform Engineer · DevSecOps",
  siteUrl: "https://koreshlab.netlify.app",
  title: "Kore.sh - Anonymous SRE and DevSecOps portfolio",
  description:
    "Anonymous professional portfolio for SRE, platform engineering and DevSecOps work across private cloud, Kubernetes, GitOps, automation and observability.",
  positioning:
    "Operating and automating production platforms across private cloud, Kubernetes, GitOps, observability and DevSecOps environments.",
  contactFormName: "core-sh-contact",
  robotsPolicy: "index, follow",
  socialLinks: [],
};

export const publicExpertise = [
  "OpenStack",
  "Kubernetes",
  "GitOps",
  "DevSecOps",
  "Observability",
  "Automation",
];
