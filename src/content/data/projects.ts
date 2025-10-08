export type Project = {
  title: string; summary: string; link?: string; repo?: string; badges: string[];
};
export const projects: Project[] = [
  {
    title: 'Multi-cluster Kubernetes Platform',
    summary:
      'GitOps with ArgoCD, Helm/Ansible pipelines, observability stack, secrets & SSO hardening.',
    badges: ['K8s','ArgoCD','Helm','Ansible','Prom/Grafana','Keycloak']
  },
  {
    title: 'OpenStack private cloud',
    summary:
      'Compute/network/storage automation, External-DNS (Azure), S3 compatible object store.',
    badges: ['OpenStack','OpenTofu','S3','External-DNS']
  },
  {
    title: 'DevSecOps Pipeline',
    summary:
      'Automated security scanning, vulnerability assessment, compliance reporting with ELK SIEM integration.',
    badges: ['Jenkins','ELK','Security','Compliance','SIEM']
  },
  {
    title: 'Infrastructure as Code',
    summary:
      'Complete infrastructure automation with Terraform/OpenTofu, Ansible configuration management and GitOps workflows.',
    badges: ['Terraform','OpenTofu','Ansible','GitOps','IaC']
  }
];
