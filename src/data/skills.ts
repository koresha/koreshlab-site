export type SkillGroup = {
  title: string;
  summary: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Platform operations",
    summary:
      "Run, upgrade and troubleshoot production infrastructure with low drama.",
    items: ["Kubernetes", "Linux", "Talos", "OpenStack", "Ceph", "OVN"],
  },
  {
    title: "Automation",
    summary:
      "Turn repeatable infrastructure work into reviewed, reproducible changes.",
    items: [
      "OpenTofu",
      "Terraform",
      "Ansible",
      "Helm",
      "Kustomize",
      "GitLab CI",
    ],
  },
  {
    title: "Reliability",
    summary: "Make incidents easier to detect, explain and prevent.",
    items: [
      "Prometheus",
      "Grafana",
      "Loki",
      "Alertmanager",
      "Runbooks",
      "Post-incident review",
    ],
  },
  {
    title: "Security",
    summary:
      "Add useful controls without blocking delivery teams unnecessarily.",
    items: [
      "SSO",
      "Secrets management",
      "Image scanning",
      "Access control",
      "Policy review",
    ],
  },
];
