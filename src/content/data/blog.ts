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
    title: "External-DNS: Automate DNS Management on Kubernetes with Azure",
    summary: "How to deploy and configure External-DNS to automatically sync your Kubernetes Ingress with Azure DNS via ArgoCD. Complete guide with practical examples and troubleshooting.",
    date: "2025-10-29",
    slug: "external-dns-kubernetes-azure-argocd",
    tags: ["Kubernetes", "DNS", "Azure", "ArgoCD", "GitOps", "DevOps"],
    readTime: "12 min",
    featured: true
  },
  {
    title: "OpenStack & OVN: Complete SDN Guide for Cloud Infrastructure",
    summary: "Deep dive into Software Defined Networking with OpenStack and OVN: architecture, pipelines, troubleshooting and best practices for modern cloud infrastructure.",
    date: "2025-10-28",
    slug: "openstack-ovn-sdn-complete-guide",
    tags: ["OpenStack", "OVN", "SDN", "Networking", "Cloud", "Infrastructure"],
    readTime: "15 min",
    featured: true
  }
];
