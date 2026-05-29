export type CaseStudy = {
  title: string;
  sector: string;
  problem: string;
  constraints: string[];
  actions: string[];
  outcomes: string[];
  stack: string[];
  confidentialityNote: string;
};

export const caseStudies: CaseStudy[] = [
  {
    title: "Stabilized a multi-cluster Kubernetes platform",
    sector: "Regulated SaaS platform",
    problem:
      "Delivery teams needed predictable deployments across several environments while keeping operational risk and manual drift under control.",
    constraints: [
      "No public disclosure of client identity, exact topology or operational scale.",
      "Platform had to stay available while deployment and observability practices changed.",
      "Security controls needed to fit existing developer workflows.",
    ],
    actions: [
      "Standardized GitOps application delivery with environment-specific overlays and reviewable changes.",
      "Hardened cluster access, secrets handling and image validation around existing CI pipelines.",
      "Consolidated dashboards and alert routes so incidents had clearer ownership and faster triage.",
    ],
    outcomes: [
      "Reduced manual deployment steps and made production changes easier to review.",
      "Improved incident visibility for platform and application teams.",
      "Left reusable runbooks for developers and operators.",
    ],
    stack: [
      "Kubernetes",
      "Argo CD",
      "Helm",
      "Kustomize",
      "GitLab CI",
      "Vault",
      "Prometheus",
      "Grafana",
    ],
    confidentialityNote:
      "Client, dates, volumes and internal service names are intentionally generalized.",
  },
  {
    title: "Automated private cloud operations",
    sector: "Cloud infrastructure provider",
    problem:
      "A private cloud platform needed more reproducible infrastructure changes across compute, network and storage layers.",
    constraints: [
      "Sensitive datacenter, network and capacity information could not be published.",
      "Automation had to coexist with established operational tooling.",
      "Rollback paths and documentation mattered as much as initial delivery.",
    ],
    actions: [
      "Modeled infrastructure changes as reviewed code with clear environment boundaries.",
      "Improved operational workflows for network, storage and Kubernetes platform components.",
      "Documented low-level diagnostic paths for recurring infrastructure failure modes.",
    ],
    outcomes: [
      "Made infrastructure changes more repeatable and auditable.",
      "Reduced dependency on ad hoc manual procedures.",
      "Improved handoff quality between platform and support teams.",
    ],
    stack: [
      "OpenStack",
      "OpenTofu",
      "Ansible",
      "Ceph",
      "OVN",
      "Talos",
      "S3-compatible storage",
    ],
    confidentialityNote:
      "Topology, region, capacity and provider-specific identifiers are deliberately omitted.",
  },
  {
    title: "Raised observability and incident readiness",
    sector: "Business-critical web platform",
    problem:
      "Operators had too many disconnected signals and not enough actionable context during incidents.",
    constraints: [
      "Existing monitoring tools had to remain in place during the transition.",
      "Alerts needed to avoid noise while still catching user-impacting failures.",
      "Sensitive application names and traffic patterns could not be exposed publicly.",
    ],
    actions: [
      "Rationalized metrics, logs and alert routing around concrete service ownership.",
      "Built dashboards that separate platform symptoms from application symptoms.",
      "Introduced operational reviews to turn repeated incidents into backlog items.",
    ],
    outcomes: [
      "Made incident triage faster and less dependent on individual memory.",
      "Improved signal quality for on-call workflows.",
      "Created reusable patterns for new services entering production.",
    ],
    stack: ["Prometheus", "Grafana", "Loki", "Alertmanager", "APM", "Runbooks"],
    confidentialityNote:
      "Operational metrics, alert names and customer impact figures are generalized.",
  },
  {
    title: "Hardened CI/CD and platform access",
    sector: "Infrastructure and security program",
    problem:
      "Teams needed stronger security gates without turning deployments into a slow manual approval process.",
    constraints: [
      "Controls had to be understandable for developers and maintainable by a small platform team.",
      "Identity, secrets and scanning details could not reveal internal architecture.",
      "Changes needed to be incremental enough for active delivery teams.",
    ],
    actions: [
      "Added vulnerability checks and infrastructure validation into delivery pipelines.",
      "Improved access patterns for administrative workflows and privileged tooling.",
      "Documented security decisions so exceptions could be reviewed instead of becoming tribal knowledge.",
    ],
    outcomes: [
      "Moved security checks earlier in the delivery flow.",
      "Reduced reliance on shared credentials and informal access paths.",
      "Created a clearer audit trail for sensitive infrastructure changes.",
    ],
    stack: [
      "CI/CD",
      "Trivy",
      "SSO",
      "Boundary-style access",
      "Policy review",
      "Infrastructure as Code",
    ],
    confidentialityNote:
      "Tooling categories are public; client identity and sensitive control details are not.",
  },
];
