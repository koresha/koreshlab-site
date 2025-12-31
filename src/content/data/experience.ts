export type Exp = {
  company: string;
  role: string;
  date: string;
  location?: string;
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
      'Operate and administer a multi-site OpenStack private cloud (3 datacenters, Paris region) hosting a large-scale infrastructure with core services such as Neutron and Ceph.',
      'Deploy and maintain Kubernetes clusters on Talos OS via OpenTofu, managing development, staging, and production environments with HA control planes.',
      'Automate full infrastructure lifecycle — compute, network, storage — using OpenTofu and Kolla Ansible for reproducible, version-controlled deployments.',
      'Deploy and manage ArgoCD with Helm and Kustomize for many production workloads; implement advanced GitOps practices and custom CRDs management.',
      'Integrate External-DNS with Azure DNS zones for automated record management synchronized with Kubernetes ingress resources.',
      'Design and maintain observability stack with Prometheus, Mimir, Grafana, and Alertmanager.',
      'Implement centralized logging and alerting using Loki with Teams integration for critical applications and on-call alerting.',
      'Manage S3-compatible object storage (Garage, MinIO) with encrypted backups, replication, and migration between regions.',
      'Build secure CI/CD pipelines in GitLab integrating Trivy scanning, automated Helm chart updates, and infrastructure validation.',
      'Perform low-level infrastructure diagnostics (compute, network, storage) and root cause analysis to maintain high availability for services used by hundreds of thousands of users daily.',
      'Provide Level 3+ support and infrastructure guidance to developers; lead internal training on Kubernetes, GitOps, and observability tools.',
      'Deploy and maintain HashiCorp Boundary for secure, identity-based infrastructure access.',
      'Research and deliver Proofs of Concept (PoCs) for innovative infrastructure, monitoring, and automation solutions.'
    ],
    tags: [
      'OpenStack',
      'Ceph',
      'Neutron',
      'OVN',
      'Kubernetes',
      'Talos',
      'OpenTofu',
      'Ansible',
      'ArgoCD',
      'Helm',
      'Kustomize',
      'GitLab CI',
      'External-DNS',
      'Azure DNS',
      'Prometheus',
      'Grafana',
      'Mimir',
      'Alertmanager',
      'Loki',
      'Trivy',
      'Garage',
      'MinIO',
      'Boundary'
    ]
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
      'Deployed and maintained GitLab, Vault, OnlyOffice, Jitsi, Harbor, Teleport (Kubernetes)...',
      'Designed and hardened multi-environment SSO microservice using Keycloak with DNS integration.',
      'Authored project documentation and led internal DevOps tutorials.'
    ],
    tags: [
      'Kubernetes',
      'GitLab CI',
      'Helm',
      'Ansible',
      'Terraform',
      'Vault',
      'Keycloak',
      'OVH',
      'OutScale',
      'Scalingo',
      'Harbor',
      'OnlyOffice',
      'Jitsi'
    ]
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
    tags: [
      'Terraform',
      'Jenkins',
      'ArgoCD',
      'ELK',
      'Instana',
      'Prometheus',
      'Grafana',
      'F5 BIG-IP',
      'MariaDB',
      'MongoDB',
      'Veeam',
      'Tanzu',
      'Kafka',
      'Gravitee',
      'JBoss',
      'GoAnywhere'
    ]
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
    tags: [
      'Windows Server',
      'Azure DevOps',
      'Veeam',
      'RADIUS',
      'Exchange',
      'O365',
      'PowerShell',
      'Security Audits',
      'HP Switches',
      'Gmail'
    ]
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
    tags: [
      'Linux',
      'MySQL',
      'MariaDB',
      'Centreon',
      'Ansible',
      'Security',
      'Documentation',
      'Monitoring'
    ]
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
    tags: [
      'IT Support',
      'Windows',
      'Hardware',
      'Troubleshooting',
      'Retail',
      'L1/L2 Support'
    ]
  }
];
