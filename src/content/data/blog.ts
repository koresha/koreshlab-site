export type BlogPost = {
  title: string;
  summary: string;
  date: string;
  slug: string;
  tags: string[];
  readTime?: string;
  featured?: boolean;
};

export const blogPosts: BlogPost[] = [
  {
    title: "GitOps with ArgoCD: Complete Guide for Beginners",
    summary: "Learn how to implement GitOps in your Kubernetes projects with ArgoCD. From installation to production deployment.",
    date: "2025-10-01",
    slug: "gitops-argocd-complete-guide",
    tags: ["GitOps", "ArgoCD", "Kubernetes", "CI/CD"],
    readTime: "8 min",
    featured: true
  },
  {
    title: "Securing Kubernetes Clusters in Production",
    summary: "Security best practices for your K8s clusters: RBAC, Network Policies, Pod Security Standards and more.",
    date: "2025-09-28",
    slug: "securing-kubernetes-production",
    tags: ["Kubernetes", "Security", "DevSecOps", "RBAC"],
    readTime: "12 min",
    featured: true
  },
  {
    title: "Infrastructure as Code: OpenTofu vs Terraform",
    summary: "Detailed comparison between OpenTofu and Terraform: features, performance and migration strategies.",
    date: "2025-09-15",
    slug: "opentofu-vs-terraform-comparison",
    tags: ["IaC", "OpenTofu", "Terraform", "DevOps"],
    readTime: "6 min"
  },
  {
    title: "Advanced Monitoring with Prometheus and Grafana",
    summary: "Setting up a complete monitoring stack for your applications and infrastructure.",
    date: "2025-09-10",
    slug: "monitoring-prometheus-grafana",
    tags: ["Monitoring", "Prometheus", "Grafana", "Observability"],
    readTime: "10 min"
  }
];
