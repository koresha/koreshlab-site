export type Exp = {
  company: string; role: string; date: string; location?: string;
  bullets: string[];
  tags: string[];
  logo?: string;
  description?: string;
  employees?: string;
  industry?: string;
};
export const experience: Exp[] = [
  {
    company: 'unyc',
    role: 'Site Reliability Engineer',
    date: 'Sep 2025 — Present',
    logo: '🚀',
    industry: 'Cloud Infrastructure',
    employees: '50-100',
    description: 'Leading cloud infrastructure provider specializing in private OpenStack clouds and Kubernetes orchestration.',
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
    logo: '☁️',
    industry: 'Cloud Consulting',
    employees: '20-50',
    description: 'Cloud consulting company specializing in multi-cloud Kubernetes deployments and DevOps transformation.',
    bullets: [
      'Administer multi-cloud Kubernetes clusters (OVH, OutScale, Scalingo) with 50+ microservices.',
      'Design and implement GitLab CI/CD pipelines with automated deployments via Helm.',
      'Manage secrets with HashiCorp Vault: automatic rotation and K8s integration.',
      'Security hardening of Keycloak SSO: centralized authentication for 500+ users.',
      'Performance optimization and infrastructure cost reduction by 30%.',
      'Implement backup strategies and cross-cloud disaster recovery.'
    ],
    tags: ['Kubernetes','GitLab CI','Helm','Ansible','Terraform','Vault','Keycloak','OVH','OutScale','Scalingo']
  },
  {
    company: 'Pixid',
    role: 'DevSecOps Operations Engineer',
    date: 'Jun 2022 — Feb 2025',
    logo: '🔒',
    industry: 'Digital Solutions',
    employees: '100-200',
    description: 'Digital transformation company providing secure cloud solutions and DevSecOps consulting services.',
    bullets: [
      'Infrastructure as Code with Terraform and Ansible: manage 100+ physical and virtual servers.',
      'Jenkins administration with 200+ CI/CD pipelines and AWX integration for orchestration.',
      'Deploy and maintain Tanzu Kubernetes clusters with enhanced security policies.',
      'GitOps implementation with ArgoCD: automated deployments and zero-downtime rollbacks.',
      'Application monitoring with Instana APM and infrastructure with Prometheus/Grafana.',
      'F5 BIG-IP administration: load balancing, SSL termination and WAF for critical applications.',
      'SIEM management with ELK stack: log analysis, incident detection and security audits.',
      'Database administration: MariaDB Galera cluster, MongoDB replica sets.',
      'Backup strategies with Veeam, EMC Avamar and Dell IDPA: RTO/RPO < 4h.',
      'Business continuity plans (BCP) and disaster recovery tested monthly.'
    ],
    tags: ['Terraform','Jenkins','ArgoCD','ELK','Instana','Prometheus','Grafana','F5 BIG-IP','MariaDB','MongoDB','Veeam','Tanzu']
  },
  {
    company: 'LVMH',
    role: 'IT Technician',
    date: 'Jan 2021 — May 2022', // Please provide correct dates
    logo: '💎',
    industry: 'Luxury Goods',
    employees: '200,000+',
    description: 'World leader in luxury goods with prestigious brands like Louis Vuitton, Dior, Moët & Chandon.',
    bullets: [
      'Manage critical infrastructure for LVMH group brands (Louis Vuitton, Dior, etc.).',
      'Datacenter administration with 500+ physical servers and VMware virtualized environments.',
      'Implement monitoring and alerting solutions for high-availability infrastructures.',
      'Manage backups and business continuity plans for critical business systems.',
      'Level 3 support and complex incident resolution in 24/7 environment.',
      'Automate recurring tasks with PowerShell and Bash scripts.'
    ],
    tags: ['VMware','Windows Server','Linux','PowerShell','Monitoring','Backup','Datacenter']
  },
  {
    company: 'IOR Système',
    role: 'System and Network Administrator',
    date: 'Sep 2019 — Dec 2020',
    logo: '🖥️',
    industry: 'IT Services',
    employees: '10-20',
    description: 'IT services company providing infrastructure management and technical support for SMEs.',
    bullets: [
      'Administer Windows Server and Linux infrastructures for SMEs (Active Directory, DNS, DHCP).',
      'Manage IT fleets: deployment, maintenance and user support.',
      'Configure and maintain network equipment (switches, routers, firewalls).',
      'Implement automated backup solutions and restoration tests.',
      'Level 2/3 technical support and end-user training.',
      'Lead migration and infrastructure modernization projects.'
    ],
    tags: ['Windows Server','Linux','Active Directory','Network','Support','Migration']
  },
  {
    company: 'ExpressPack',
    role: 'IT Technician',
    date: 'Mar 2018 — Aug 2019',
    logo: '📦',
    industry: 'Logistics',
    employees: '50-100',
    description: 'Logistics and packaging company providing express delivery and packaging solutions.',
    bullets: [
      'Technical support and maintenance of IT infrastructure (100+ workstations).',
      'Install and configure operating systems and business software.',
      'Handle user incidents and resolve hardware/software issues.',
      'Participate in Office 365 migration and team training.',
      'Preventive maintenance and IT procedures documentation.'
    ],
    tags: ['Support IT','Windows','Office 365','Hardware','Documentation']
  }
];
