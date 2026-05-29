export type Project = {
  title: string;
  summary: string;
  impact: string;
  badges: string[];
};

export const projects: Project[] = [
  {
    title: "Kubernetes platform reliability",
    summary:
      "Operational patterns for clusters that need predictable delivery, clear ownership and practical rollback paths.",
    impact:
      "Better release confidence and cleaner incident triage for platform teams.",
    badges: ["Kubernetes", "GitOps", "Runbooks", "SLO thinking"],
  },
  {
    title: "Private cloud automation",
    summary:
      "Infrastructure-as-code approach for compute, network and storage operations without publishing sensitive topology.",
    impact:
      "More repeatable changes and less dependency on manual platform procedures.",
    badges: ["OpenStack", "OpenTofu", "Ansible", "Network ops"],
  },
  {
    title: "Observability operating model",
    summary:
      "Metrics, logs, dashboards and alert routing organized around service ownership and incident response.",
    impact:
      "Less alert noise and faster separation of platform symptoms from application symptoms.",
    badges: ["Prometheus", "Grafana", "Loki", "Alerting"],
  },
  {
    title: "Secure delivery pipeline",
    summary:
      "Security checks, access controls and infrastructure validation folded into delivery workflows.",
    impact:
      "Earlier risk detection without turning every deployment into a manual security gate.",
    badges: ["CI/CD", "Trivy", "SSO", "IaC validation"],
  },
];
