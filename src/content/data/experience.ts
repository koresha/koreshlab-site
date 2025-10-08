export type Exp = {
  company: string; role: string; date: string; location?: string;
  bullets: string[];
  tags: string[];
  description?: string;
  employees?: string;
  industry?: string;
};
export const experience: Exp[] = [
  {
    company: 'unyc',
    role: 'Site Reliability Engineer',
    date: 'Sep 2025 — Present',
    industry: 'Cloud & Connectivity',
    employees: '200 (Inherent Group: 1,300)',
    description: 'Connectivity, cloud and cyber operator specializing in indirect sales with an ecosystem of 1,300 partners and an automated services platform serving French businesses and communities.',
    bullets: [
      'Architect and manage multi-tenant OpenStack private cloud with 200+ VMs and Ceph storage.',
      'Infrastructure as Code with OpenTofu: complete automation of compute, network and storage resources.',
      'Deploy and maintain Kubernetes clusters (3 environments: dev, staging, prod) with high availability.',
      'Implement GitOps CI/CD pipeline with Helm, Ansible and ArgoCD for 15+ applications.',
      'Integrate External-DNS with Azure for automated DNS records management.',
      'Advanced monitoring with Prometheus, Grafana and AlertManager: 99.9% uptime maintained.',
      'Manage S3-compatible object storage (MinIO) with backup and cross-region replication.'
    ],
    tags: ['OpenStack','Kubernetes','OpenTofu','Helm','Ansible','ArgoCD','Azure DNS','Prometheus','Grafana','S3','MinIO']
  },
  {
    company: 'Interstis',
    role: 'DevOps Engineer',
    date: 'Mar 2025 — Sep 2025',
    industry: 'Sovereign Cloud Solutions',
    employees: '70',
    description: 'French company developing the sovereign collaborative suite "Héxagone" (SecNumCloud) as part of a consortium under DINUM impulse. Fully internet-based collaborative platform.',
    bullets: [
      'Managed multi-cluster Kubernetes environments (OVH, OutScale, Scalingo).',
      'Deployed CI/CD pipelines (GitLab CI, Helm, Ansible) for app and technical clusters.',
      'Managed cloud resources and secrets via Terraform and Vault.',
      'Deployed and maintained GitLab, Vault, OnlyOffice, Jitsi, Harbor.',
      'Designed and hardened an enterprise SSO (Keycloak) microservice with DNS integration.',
      'Authored project documentation and led internal DevOps tutorials.'
    ],
    tags: ['Kubernetes','GitLab CI','Helm','Ansible','Terraform','Vault','Keycloak','OVH','OutScale','Scalingo','Harbor','OnlyOffice','Jitsi']
  },
  {
    company: 'Pixid',
    role: 'DevSecOps Operations Engineer',
    date: 'Jun 2022 — Feb 2025',
    industry: 'HR Tech & Recruitment SaaS',
    employees: '250 (Group: 500+)',
    description: 'Leading VMS/ATS platform managing 222,000+ connected establishments with 12,000+ temp agencies. Processes 2.5M+ documents monthly for €11B+ purchase volume, handling 42% of French temp market.',
    bullets: [
      'Automated provisioning and environment setup (Ansible, Terraform, AWX).',
      'Managed CI/CD pipelines in Jenkins; orchestrated Kubernetes clusters (Tanzu).',
      'Implemented GitOps deployments with ArgoCD.',
      'Built dashboards and incident analytics (Prometheus, Grafana, Instana).',
      'Managed F5 BIG-IP, ELK SIEM audits, and secure file transfers (GoAnywhere SFTP).',
      'Administered MariaDB / MongoDB clusters (Galera, Columnstore).',
      'Performed DR testing (PCA/PRA) and managed backups (Veeam, Avamar, IDPA).',
      'Provided API support (Gravitee, JBoss, Kafka) and onboarded new engineers.'
    ],
    tags: ['Terraform','Jenkins','ArgoCD','ELK','Instana','Prometheus','Grafana','F5 BIG-IP','MariaDB','MongoDB','Veeam','Tanzu','Kafka','Gravitee','JBoss','GoAnywhere']
  },
  {
    company: 'IOR System',
    role: 'System & Network Administrator',
    date: 'Feb 2021 — May 2022',
    industry: 'IT Services (ESN)',
    employees: '30',
    description: 'Ile-de-France IT services company providing comprehensive IT management for various clients, from printers to servers and firewalls.',
    bullets: [
      'Performed security audits and infrastructure consulting.',
      'Built CI/CD pipelines (Azure DevOps) and administered Windows Server (2008R2 – 2019).',
      'Managed backups (Veeam, Avamar/IDPA) and network equipment (HP Switches, RADIUS).',
      'Managed Exchange, O365, and Gmail messaging systems.',
      'Provided IT support and automated tasks with PowerShell.'
    ],
    tags: ['Windows Server','Azure DevOps','Veeam','RADIUS','Exchange','O365','PowerShell','Security Audits','HP Switches','Gmail']
  },
  {
    company: 'Epresspack',
    role: 'System & Network Admin / DevOps Apprenticeship',
    date: 'Dec 2018 — Jan 2021',
    industry: 'Media & Communication Tech',
    employees: '35 (Paris, London, Milan)',
    description: 'Founded in 2011, serves 350+ clients in 26 countries. Joint-venture with AFP created MediaConnect platform. Part of EDMO project fighting disinformation with technological expertise.',
    bullets: [
      'Managed Linux servers and MySQL/MariaDB databases.',
      'Monitored Centreon supervision (probes, hosts, commands).',
      'Automated deployments with Ansible.',
      'Strengthened security and maintained technical documentation.'
    ],
    tags: ['Linux','MySQL','MariaDB','Centreon','Ansible','Security','Documentation','Monitoring']
  },
  {
    company: 'Louis Vuitton Malletier',
    role: 'IT Technician',
    date: 'Jan 2018 — Jun 2018',
    industry: 'Luxury Goods',
    employees: '200,000+',
    description: 'World leader in luxury goods, part of LVMH group with prestigious brands.',
    bullets: [
      'Provided L1/L2 IT support and user assistance in luxury retail environment.',
      'Managed technical incidents and hardware/software troubleshooting.',
      'Supported daily operations for retail stores and corporate offices.'
    ],
    tags: ['IT Support','Windows','Hardware','Troubleshooting','Retail','L1/L2 Support']
  }
];
