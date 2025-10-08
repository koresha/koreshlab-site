export type Skill = { name: string; level: number };
export const skills: Skill[] = [
  { name:'Kubernetes', level:90 }, { name:'Docker', level:90 }, { name:'Helm', level:80 },
  { name:'Terraform', level:85 }, { name:'OpenTofu', level:85 }, { name:'Ansible', level:85 },
  { name:'ArgoCD', level:80 }, { name:'GitLab CI/CD', level:85 }, { name:'Jenkins', level:75 },
  { name:'Prometheus', level:80 }, { name:'Grafana', level:80 }, { name:'ELK (SIEM)', level:70 },
  { name:'Keycloak (SSO)', level:70 }, { name:'OpenStack', level:75 }, { name:'Azure', level:70 },
  { name:'AWS', level:60 }, { name:'OVHcloud', level:70 }, { name:'Vault', level:70 },
  { name:'Harbor', level:70 }, { name:'Kafka (ops)', level:60 }, { name:'Linux', level:85 },
  { name:'Bash', level:80 }, { name:'Python', level:65 }, { name:'PostgreSQL', level:65 },
  { name:'MongoDB', level:60 }
];
