import { blogPosts as englishBlogPosts, type BlogPost } from "./blog";
import { site as defaultSite, type SiteConfig } from "./site";

export const locales = ["en", "fr"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English",
  fr: "Français",
};

type SkillGroup = {
  title: string;
  items: string[];
};

type Experience = {
  company: string;
  location: string;
  size: string;
  role: string;
  period: string;
  highlights: string[];
  stack: string[];
};

type FocusArea = {
  title: string;
  summary: string;
  points: string[];
};

type ProfileCard = {
  label: string;
  title: string;
  body: string;
  items: string[];
};

type ContactContent = {
  badge: string;
  title: string;
  body: string;
  bullets: string[];
};

type PortfolioContent = {
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    primaryAction: string;
    secondaryAction: string;
    stats: Array<{ value: string; label: string }>;
  };
  sections: {
    work: {
      kicker: string;
      title: string;
      intro: string;
    };
    experience: {
      kicker: string;
      title: string;
      intro: string;
    };
    skills: {
      kicker: string;
      title: string;
      intro: string;
    };
    profile: {
      kicker: string;
      title: string;
    };
    contact: {
      kicker: string;
      title: string;
      intro: string;
    };
  };
  focusAreas: FocusArea[];
  skillGroups: SkillGroup[];
  experiences: Experience[];
  profileCards: ProfileCard[];
  contact: ContactContent;
};

export const siteByLocale: Record<Locale, SiteConfig> = {
  en: {
    ...defaultSite,
    publicName: "Kore.sh",
    shortName: "Kore.sh",
    role: "Site Reliability Engineer · Platform Engineer · DevSecOps",
    title: "Kore.sh - Anonymous SRE and DevSecOps portfolio",
    description:
      "Anonymous professional portfolio for SRE, platform engineering and DevSecOps work across private cloud, Kubernetes, GitOps, automation and observability.",
    positioning:
      "Operating and automating production platforms across private cloud, Kubernetes, GitOps, observability and DevSecOps environments.",
  },
  fr: {
    ...defaultSite,
    publicName: "Kore.sh",
    shortName: "Kore.sh",
    role: "Site Reliability Engineer · Platform Engineer · DevSecOps",
    title: "Kore.sh - Portfolio SRE et DevSecOps anonymisé",
    description:
      "Portfolio professionnel anonymisé autour du SRE, du platform engineering et du DevSecOps: cloud privé, Kubernetes, GitOps, automatisation et observabilité.",
    positioning:
      "Exploitation et automatisation de plateformes de production autour du cloud privé, de Kubernetes, du GitOps, de l'observabilité et du DevSecOps.",
  },
};

export const uiByLocale = {
  en: {
    skip: "Skip to content",
    primaryNavigation: "Primary navigation",
    footerNavigation: "Footer navigation",
    mobileNavigation: "Mobile navigation",
    themeToggle: "Switch color theme",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Language",
    homeAria: "home",
    coreExpertise: "Core expertise",
    operatingPrinciples: "Profile summary",
    relatedCapabilities: "Related capabilities",
    articleTopics: "Article topics",
    technicalStack: "Technical stack",
    toolsSuffix: "tools",
    readArticle: "Read article",
    contactLinks: "Contact options",
    requestProfile: "Discuss my profile",
    caseLabels: {
      constraints: "Context",
      intervention: "Work",
      outcome: "Outcome",
    },
    contact: {
      honeypot: "Do not fill this field",
      name: "Name or alias",
      reply: "Work email or reply address",
      context: "Platform context",
      selectTopic: "Select a topic",
      message: "Message",
      placeholder:
        "Describe the role, platform context, constraints and expected outcome. Avoid secrets or sensitive production identifiers.",
      submit: "Send request",
      options: {
        kubernetes: "Kubernetes platform",
        privateCloud: "Private cloud / infrastructure automation",
        observability: "Observability / incident response",
        security: "CI/CD or access hardening",
        profile: "Discuss my profile",
        other: "Other platform topic",
      },
    },
  },
  fr: {
    skip: "Aller au contenu",
    primaryNavigation: "Navigation principale",
    footerNavigation: "Navigation du pied de page",
    mobileNavigation: "Navigation mobile",
    themeToggle: "Changer le thème",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    language: "Langue",
    homeAria: "accueil",
    coreExpertise: "Expertises clés",
    operatingPrinciples: "Résumé du profil",
    relatedCapabilities: "Capacités associées",
    articleTopics: "Sujets de l'article",
    technicalStack: "Stack technique",
    toolsSuffix: "outils",
    readArticle: "Lire l'article",
    contactLinks: "Options de contact",
    requestProfile: "Échanger sur mon profil",
    caseLabels: {
      constraints: "Contexte",
      intervention: "Travail réalisé",
      outcome: "Résultat",
    },
    contact: {
      honeypot: "Ne remplissez pas ce champ",
      name: "Nom ou alias",
      reply: "Email professionnel ou adresse de réponse",
      context: "Contexte plateforme",
      selectTopic: "Choisir un sujet",
      message: "Message",
      placeholder:
        "Décrivez le poste, le contexte plateforme, les contraintes et le résultat attendu. Évitez les secrets et les identifiants de production.",
      submit: "Envoyer la demande",
      options: {
        kubernetes: "Plateforme Kubernetes",
        privateCloud: "Cloud privé / automatisation infrastructure",
        observability: "Observabilité / réponse incident",
        security: "Durcissement CI/CD ou accès",
        profile: "Échanger sur mon profil",
        other: "Autre sujet plateforme",
      },
    },
  },
} satisfies Record<Locale, Record<string, unknown>>;

export const navLinksByLocale: Record<
  Locale,
  Array<{ href: string; label: string }>
> = {
  en: [
    { href: "/#work", label: "Work" },
    { href: "/#experience", label: "Experience" },
    { href: "/#skills", label: "Skills" },
    { href: "/blog/", label: "Articles" },
    { href: "/#contact", label: "Contact" },
  ],
  fr: [
    { href: "/fr/#work", label: "Réalisations" },
    { href: "/fr/#experience", label: "Expérience" },
    { href: "/fr/#skills", label: "Compétences" },
    { href: "/fr/blog/", label: "Articles" },
    { href: "/fr/#contact", label: "Contact" },
  ],
};

export const portfolioByLocale: Record<Locale, PortfolioContent> = {
  en: {
    hero: {
      eyebrow: "My anonymous portfolio · France-based",
      title: "SRE & DevSecOps for production platforms.",
      lead: "Platform engineer focused on cloud platforms, Kubernetes, GitOps, CI/CD, observability, network/security foundations and infrastructure automation.",
      primaryAction: "Discuss a role",
      secondaryAction: "View experience",
      stats: [
        { value: "SRE", label: "my current role" },
        { value: "2018+", label: "IT operations experience" },
      ],
    },
    sections: {
      work: {
        kicker: "Platform work",
        title: "What I do on production platforms.",
        intro:
          "For context, I keep my CV anonymized here: the technical scope, responsibilities and tooling stay clear, while employers, direct contact details, school names and exact locations remain private.",
      },
      experience: {
        kicker: "Experience",
        title: "From systems administration to platform reliability.",
        intro:
          "A progression through support, Linux operations, DevOps, DevSecOps and SRE work on production infrastructure.",
      },
      skills: {
        kicker: "Skills",
        title: "Tools and domains used in real production contexts.",
        intro:
          "Grouped around platform operations, automation, reliability, security, data services and middleware.",
      },
      profile: {
        kicker: "Profile",
        title: "Training and operating style.",
      },
      contact: {
        kicker: "Contact",
        title: "Want to discuss a role or a platform topic?",
        intro: "",
      },
    },
    focusAreas: [
      {
        title: "Private cloud operations",
        summary:
          "Administration and operation of multi-zone OpenStack platforms with Ceph storage and OVN networking.",
        points: [
          "Operate core OpenStack services, storage layers and software-defined networking",
          "Use Kolla Ansible and Bifrost to industrialize administration environments",
          "Support RUN/SRE workflows with clear alerting and incident response paths",
        ],
      },
      {
        title: "Kubernetes and GitOps",
        summary:
          "Deployment and operation of business applications on Kubernetes with ArgoCD, Helm and CNPG.",
        points: [
          "Run Kubernetes environments across private and public cloud contexts",
          "Build GitOps delivery flows with ArgoCD, Helm and structured CI/CD",
          "Integrate ingress, DNS automation and PostgreSQL operators into platform templates",
        ],
      },
      {
        title: "DevSecOps and reliability",
        summary:
          "Secure delivery, monitoring, alerting and operational support for production systems.",
        points: [
          "Build observability with Prometheus, Grafana, Loki, ELK, Instana and Centreon",
          "Work with access, SSO and secrets patterns through Keycloak, Vault, OIDC and SAML",
          "Contribute to incident analysis, alert routing and production hardening",
        ],
      },
      {
        title: "Infrastructure automation",
        summary:
          "Auditable and reproducible infrastructure using Ansible, Terraform, OpenTofu, AWX and CI/CD pipelines.",
        points: [
          "Automate provisioning, configuration and release workflows",
          "Create reusable infrastructure modules and deployment templates",
          "Document operational procedures so teams can run platforms consistently",
        ],
      },
    ],
    skillGroups: [
      {
        title: "Platform SRE & Cloud",
        items: [
          "OpenStack",
          "Ceph",
          "OVN",
          "Kubernetes",
          "Docker",
          "VMware",
          "OVHcloud",
          "AWS",
          "Azure",
        ],
      },
      {
        title: "GitOps, IaC & CI/CD",
        items: [
          "ArgoCD",
          "Helm",
          "Kustomize",
          "Ansible",
          "Terraform",
          "OpenTofu",
          "GitLab CI/CD",
          "Jenkins",
          "AWX",
        ],
      },
      {
        title: "Observability & Reliability",
        items: [
          "Prometheus",
          "Grafana",
          "Loki",
          "ELK",
          "Instana",
          "Centreon",
          "Nagios",
          "Zabbix",
          "SLO/SLA",
        ],
      },
      {
        title: "Networking, Security & Access",
        items: [
          "Traefik",
          "API Gateway",
          "ExternalDNS",
          "Keycloak",
          "Vault",
          "F5 Big-IP",
          "Sophos",
          "OIDC",
          "SAML",
          "SSO",
        ],
      },
      {
        title: "Data & Middleware",
        items: [
          "CNPG",
          "PostgreSQL",
          "MariaDB",
          "Galera",
          "MySQL",
          "MongoDB",
          "Kafka",
          "RabbitMQ",
        ],
      },
      {
        title: "Automation & Scripting",
        items: [
          "Bash",
          "Python",
          "YAML",
          "PowerShell",
          "Kolla Ansible",
          "Bifrost",
        ],
      },
    ],
    experiences: [
      {
        company: "Private cloud operator",
        location: "France",
        size: "1,300+ employee group",
        role: "Site Reliability Engineer",
        period: "Current role",
        highlights: [
          "Administer a multi-zone private cloud: OpenStack control services, compute, OVN networking, Ceph storage, upgrades, day-to-day RUN and SRE support.",
          "Deploy and operate Kubernetes workloads through GitOps with ArgoCD, Helm, CNPG clusters, environment-specific values and reusable platform templates.",
          "Worked on the migration of application exposure from ingress-nginx to Cilium API Gateway first, then to Traefik Ingress, chosen because it kept the developer workflow simpler.",
          "Improve service exposure patterns with Traefik Helm integration, ExternalDNS automation and certificate workflows.",
          "Industrialize administration environments with Kolla Ansible and Bifrost so platform operations can be reproduced, reviewed and documented.",
          "Handle critical alerts, incident analysis and technical choices that affect reliability, delivery flow and production hardening.",
        ],
        stack: [
          "OpenStack",
          "Ceph",
          "OVN",
          "Kubernetes",
          "ArgoCD",
          "Helm",
          "CNPG",
          "Traefik",
          "ingress-nginx",
          "ExternalDNS",
          "Cilium",
          "Gateway API",
          "Kolla Ansible",
          "Bifrost",
          "Azure",
        ],
      },
      {
        company: "Collaboration SaaS platform",
        location: "France",
        size: "50-200 employee software company",
        role: "DevOps Engineer",
        period: "Recent mission",
        highlights: [
          "Operated several Kubernetes clusters across public and private cloud contexts, with clear separation between application and technical clusters.",
          "Built GitLab CI, Helm and Ansible delivery paths so deployments could stay consistent across environments.",
          "Structured infrastructure with Terraform modules and Vault-backed secret management.",
          "Deployed and maintained collaboration services, container registry, SSO, developer tooling and platform documentation.",
        ],
        stack: [
          "Kubernetes",
          "GitLab CI",
          "Helm",
          "Ansible",
          "Terraform",
          "Vault",
          "Keycloak",
          "Harbor",
          "OVHcloud",
          "Outscale",
        ],
      },
      {
        company: "HR technology platform",
        location: "France",
        size: "250-person technology group",
        role: "DevSecOps Operations Engineer",
        period: "Multi-year role",
        highlights: [
          "Automated provisioning, configuration management and recurring operations with Ansible, Terraform and AWX.",
          "Built secure delivery flows with Jenkins, Kubernetes and ArgoCD, from pipeline execution to controlled deployment.",
          "Created dashboards, alerts and incident views with Prometheus, Grafana and Instana.",
          "Operated load balancing, SIEM audit flows, relational databases, document databases and production middleware such as Kafka.",
        ],
        stack: [
          "Ansible",
          "Terraform",
          "AWX",
          "Jenkins",
          "Kubernetes",
          "ArgoCD",
          "Prometheus",
          "Grafana",
          "F5 Big-IP",
          "Kafka",
          "VMware",
        ],
      },
      {
        company: "Managed services provider",
        location: "France",
        size: "11-50 employee services company",
        role: "System and Network Administrator",
        period: "Infrastructure operations",
        highlights: [
          "Ran infrastructure reviews, security audits, vulnerability scans and technical advisory work for client environments.",
          "Implemented CI/CD workflows and automation scripts across Windows and Linux systems.",
          "Managed backup platforms, switching, Wi-Fi and RADIUS authentication.",
          "Administered collaboration suites, mail platforms, MFA policies and operational support processes.",
        ],
        stack: [
          "Azure DevOps",
          "Windows Server",
          "Linux",
          "PowerShell",
          "Veeam",
          "Avamar",
          "RADIUS",
          "Exchange",
          "O365",
        ],
      },
      {
        company: "Media SaaS platform",
        location: "France",
        size: "30+ employee SaaS company",
        role: "System, Network and DevOps Administrator",
        period: "Apprenticeship",
        highlights: [
          "Managed Linux web servers, MySQL/MariaDB databases and production hosting procedures.",
          "Operated monitoring probes, alerting and performance KPIs with Centreon.",
          "Introduced Ansible configuration management and documented operational procedures for recurring tasks.",
        ],
        stack: ["Linux", "MySQL", "MariaDB", "Centreon", "Ansible"],
      },
      {
        company: "Retail environment",
        location: "France",
        size: "30,000+ employee global group",
        role: "IT Technician",
        period: "Initial IT role",
        highlights: [
          "Provided Level 1/2 user assistance, troubleshooting and hardware/software maintenance in a demanding retail environment.",
        ],
        stack: ["IT support", "Troubleshooting", "Hardware", "Software"],
      },
    ],
    profileCards: [
      {
        label: "Training",
        title: "Cyber security and cloud computing",
        body: "Master-level training focused on cloud platforms, security practices and infrastructure operations.",
        items: ["Cloud computing", "Security fundamentals", "Operations"],
      },
      {
        label: "Operating style",
        title: "Clear automation, pragmatic runbooks",
        body: "The work favors repeatable deployment paths, visible alerts, documented procedures and direct ownership of production constraints.",
        items: ["Runbooks", "GitOps", "Incident analysis"],
      },
    ],
    contact: {
      badge: "Contact",
      title: "SRE, DevOps or platform engineering role? Let’s talk.",
      body: "Send a note for a role, a mission or a technical topic around SRE, DevOps and production platforms.",
      bullets: [],
    },
  },
  fr: {
    hero: {
      eyebrow: "Mon portfolio anonymisé · basé en France",
      title: "SRE & DevSecOps pour plateformes de production.",
      lead: "Platform engineer orienté cloud, Kubernetes, GitOps, CI/CD, observabilité, socles réseau/sécurité et automatisation d'infrastructure.",
      primaryAction: "Échanger sur un poste",
      secondaryAction: "Voir l'expérience",
      stats: [
        { value: "SRE", label: "mon rôle actuel" },
        { value: "2018+", label: "expérience en opérations IT" },
      ],
    },
    sections: {
      work: {
        kicker: "Réalisations",
        title: "Ce que je fais sur des plateformes de production.",
        intro:
          "Pour information, j'anonymise mon CV ici : les missions, les responsabilités et les outils restent lisibles, sans publier mes employeurs, mes contacts directs, mes écoles ou mes lieux précis.",
      },
      experience: {
        kicker: "Expérience",
        title: "De l'administration systèmes à la fiabilité plateforme.",
        intro:
          "Un parcours qui passe par le support, les opérations Linux, le DevOps, le DevSecOps et le SRE sur infrastructures de production.",
      },
      skills: {
        kicker: "Compétences",
        title: "Domaines et outils utilisés dans des contextes de production.",
        intro:
          "Regroupés autour des opérations plateforme, de l'automatisation, de la fiabilité, de la sécurité, des services de données et du middleware.",
      },
      profile: {
        kicker: "Profil",
        title: "Formation et façon de travailler.",
      },
      contact: {
        kicker: "Contact",
        title: "Envie d'échanger ?",
        intro: "",
      },
    },
    focusAreas: [
      {
        title: "Cloud privé OpenStack",
        summary:
          "Administration et exploitation de plateformes OpenStack multi-zone avec stockage Ceph et réseau OVN.",
        points: [
          "Exploiter les services OpenStack cœur, les couches de stockage et le réseau software-defined",
          "Utiliser Kolla Ansible et Bifrost pour industrialiser les environnements d'administration",
          "Soutenir les activités RUN/SRE avec alerting clair et parcours de réponse incident",
        ],
      },
      {
        title: "Kubernetes et GitOps",
        summary:
          "Déploiement et exploitation d'applications métiers sur Kubernetes avec ArgoCD, Helm et CNPG.",
        points: [
          "Exploiter des environnements Kubernetes en contexte cloud privé et public",
          "Construire des flux GitOps avec ArgoCD, Helm et CI/CD structurée",
          "Intégrer ingress, automatisation DNS et opérateurs PostgreSQL dans les templates plateforme",
        ],
      },
      {
        title: "DevSecOps et fiabilité",
        summary:
          "Livraison sécurisée, supervision, alerting et support opérationnel pour systèmes de production.",
        points: [
          "Construire l'observabilité avec Prometheus, Grafana, Loki, ELK, Instana et Centreon",
          "Travailler les accès, le SSO et les secrets avec Keycloak, Vault, OIDC et SAML",
          "Contribuer à l'analyse d'incidents, au routage d'alertes et au durcissement de production",
        ],
      },
      {
        title: "Automatisation infrastructure",
        summary:
          "Infrastructure reproductible et auditable avec Ansible, Terraform, AWX et pipelines CI/CD.",
        points: [
          "Automatiser provisioning, configuration et workflows de livraison",
          "Créer des modules infrastructure et templates de déploiement réutilisables",
          "Documenter les procédures opérationnelles pour rendre l'exploitation cohérente",
        ],
      },
    ],
    skillGroups: [
      {
        title: "Plateforme SRE & Cloud",
        items: [
          "OpenStack",
          "Ceph",
          "OVN",
          "Kubernetes",
          "Docker",
          "VMware",
          "OVHcloud",
          "AWS",
          "Azure",
        ],
      },
      {
        title: "GitOps, IaC & CI/CD",
        items: [
          "ArgoCD",
          "Helm",
          "Kustomize",
          "Ansible",
          "Terraform",
          "GitLab CI/CD",
          "Jenkins",
          "AWX",
        ],
      },
      {
        title: "Observabilité & Fiabilité",
        items: [
          "Prometheus",
          "Grafana",
          "Loki",
          "ELK",
          "Instana",
          "Centreon",
          "Nagios",
          "Zabbix",
          "SLO/SLA",
        ],
      },
      {
        title: "Réseau, sécurité & accès",
        items: [
          "Traefik",
          "API Gateway",
          "ExternalDNS",
          "Keycloak",
          "Vault",
          "F5 Big-IP",
          "Sophos",
          "OIDC",
          "SAML",
          "SSO",
        ],
      },
      {
        title: "Data & Middleware",
        items: [
          "CNPG",
          "PostgreSQL",
          "MariaDB",
          "Galera",
          "MySQL",
          "MongoDB",
          "Kafka",
          "RabbitMQ",
        ],
      },
      {
        title: "Automatisation & Scripting",
        items: [
          "Bash",
          "Python",
          "YAML",
          "PowerShell",
          "Kolla Ansible",
          "Bifrost",
        ],
      },
    ],
    experiences: [
      {
        company: "Opérateur cloud privé",
        location: "France",
        size: "Groupe de 1 300+ collaborateurs",
        role: "Site Reliability Engineer",
        period: "Poste actuel",
        highlights: [
          "J'administre un cloud privé multi-zone: services OpenStack cœur, compute, réseau OVN, stockage Ceph, montées de version, RUN quotidien et support SRE.",
          "Je déploie et j'exploite des workloads Kubernetes en GitOps avec ArgoCD, Helm, clusters CNPG, valeurs par environnement et templates plateforme réutilisables.",
          "J'ai travaillé sur la migration de l'exposition applicative depuis ingress-nginx vers Cilium API Gateway dans un premier temps, puis vers Ingress Traefik, retenu pour réduire la complexité côté équipes de développement.",
          "J'améliore les patterns d'exposition de services avec l'intégration Traefik dans les charts Helm, l'automatisation DNS via ExternalDNS et les workflows certificats.",
          "J'industrialise les environnements d'administration avec Kolla Ansible et Bifrost pour rendre les opérations reproductibles, revues et documentées.",
          "Je participe au traitement des alertes critiques, à l'analyse d'incidents et aux choix techniques qui impactent la fiabilité, la livraison et le durcissement de production.",
        ],
        stack: [
          "OpenStack",
          "Ceph",
          "OVN",
          "Kubernetes",
          "ArgoCD",
          "Helm",
          "CNPG",
          "Traefik",
          "ingress-nginx",
          "ExternalDNS",
          "Cilium",
          "Gateway API",
          "Kolla Ansible",
          "Bifrost",
          "Azure",
        ],
      },
      {
        company: "Plateforme SaaS collaborative",
        location: "France",
        size: "Éditeur logiciel de 50 à 200 collaborateurs",
        role: "Ingénieur DevOps",
        period: "Mission récente",
        highlights: [
          "J'ai exploité plusieurs clusters Kubernetes sur clouds privés et publics, avec séparation claire entre clusters applicatifs et clusters techniques.",
          "J'ai construit des chemins de livraison GitLab CI, Helm et Ansible pour garder des déploiements cohérents entre environnements.",
          "J'ai structuré l'infrastructure avec des modules Terraform et une gestion des secrets via Vault.",
          "J'ai déployé et maintenu des services collaboratifs, un registre d'images, du SSO, de l'outillage développeur et la documentation plateforme.",
        ],
        stack: [
          "Kubernetes",
          "GitLab CI",
          "Helm",
          "Ansible",
          "Terraform",
          "Vault",
          "Keycloak",
          "Harbor",
          "OVHcloud",
          "Outscale",
        ],
      },
      {
        company: "Plateforme HR tech",
        location: "France",
        size: "Groupe tech d'environ 250 collaborateurs",
        role: "Ingénieur DevSecOps / Exploitation",
        period: "Rôle pluriannuel",
        highlights: [
          "J'ai automatisé le provisioning, la configuration et les opérations récurrentes avec Ansible, Terraform et AWX.",
          "J'ai mis en place des flux de livraison sécurisés avec Jenkins, Kubernetes et ArgoCD, de l'exécution pipeline au déploiement contrôlé.",
          "J'ai créé des dashboards, alertes et vues d'analyse incident avec Prometheus, Grafana et Instana.",
          "J'ai exploité load balancing, audits SIEM, bases relationnelles, bases documentaires et middleware de production comme Kafka.",
        ],
        stack: [
          "Ansible",
          "Terraform",
          "AWX",
          "Jenkins",
          "Kubernetes",
          "ArgoCD",
          "Prometheus",
          "Grafana",
          "F5 Big-IP",
          "Kafka",
          "VMware",
        ],
      },
      {
        company: "Prestataire d'infogérance",
        location: "France",
        size: "PME de 11 à 50 collaborateurs",
        role: "Administrateur systèmes et réseaux",
        period: "Opérations infrastructure",
        highlights: [
          "J'ai mené des revues d'infrastructure, audits sécurité, scans de vulnérabilités et missions de conseil technique.",
          "J'ai mis en place des workflows CI/CD et des scripts d'automatisation Windows/Linux.",
          "J'ai géré des plateformes de sauvegarde, du switching, du Wi-Fi et de l'authentification RADIUS.",
          "J'ai administré des suites collaboratives, plateformes mail, politiques MFA et processus de support opérationnel.",
        ],
        stack: [
          "Azure DevOps",
          "Windows Server",
          "Linux",
          "PowerShell",
          "Veeam",
          "Avamar",
          "RADIUS",
          "Exchange",
          "O365",
        ],
      },
      {
        company: "Plateforme SaaS média",
        location: "France",
        size: "SaaS de 30+ collaborateurs",
        role: "Administrateur systèmes, réseaux et DevOps",
        period: "Alternance",
        highlights: [
          "J'ai administré des serveurs web Linux, bases MySQL/MariaDB et procédures d'hébergement en production.",
          "J'ai suivi la supervision, les sondes, les alertes et les KPIs de production avec Centreon.",
          "J'ai introduit Ansible pour la gestion de configuration et documenté les procédures récurrentes.",
        ],
        stack: ["Linux", "MySQL", "MariaDB", "Centreon", "Ansible"],
      },
      {
        company: "Environnement retail",
        location: "France",
        size: "Groupe international de 30 000+ collaborateurs",
        role: "Technicien informatique",
        period: "Premier rôle IT",
        highlights: [
          "Assistance utilisateurs N1/N2, dépannage et support matériel/logiciel dans un environnement exigeant.",
        ],
        stack: ["Support informatique", "Dépannage", "Matériel", "Logiciel"],
      },
    ],
    profileCards: [
      {
        label: "Formation",
        title: "Cybersécurité et cloud computing",
        body: "Formation de niveau mastère orientée plateformes cloud, pratiques de sécurité et opérations infrastructure.",
        items: ["Cloud computing", "Fondamentaux sécurité", "Opérations"],
      },
      {
        label: "Méthode",
        title: "Automatisation claire, runbooks pragmatiques",
        body: "Le travail privilégie les chemins de déploiement reproductibles, les alertes visibles, les procédures documentées et la prise en charge directe des contraintes de production.",
        items: ["Runbooks", "GitOps", "Analyse incident"],
      },
    ],
    contact: {
      badge: "Contact",
      title: "Poste SRE, DevOps ou platform engineering : on peut en discuter.",
      body: "Écrivez-moi pour un poste, une mission ou un sujet technique autour du SRE, du DevOps et des plateformes de production.",
      bullets: [],
    },
  },
};

export const publicExpertiseByLocale: Record<Locale, string[]> = {
  en: [
    "OpenStack",
    "Kubernetes",
    "GitOps",
    "DevSecOps",
    "Observability",
    "Automation",
  ],
  fr: [
    "OpenStack",
    "Kubernetes",
    "GitOps",
    "DevSecOps",
    "Observabilité",
    "Automatisation",
  ],
};

export const homeByLocale = portfolioByLocale;

export const blogPostsByLocale: Record<Locale, BlogPost[]> = {
  en: englishBlogPosts,
  fr: [
    {
      title:
        "External-DNS: automatiser la gestion DNS sur Kubernetes avec Azure",
      summary:
        "Déployer et configurer External-DNS pour synchroniser automatiquement les Ingress Kubernetes avec Azure DNS via ArgoCD, avec exemples pratiques et dépannage.",
      date: "2025-10-29",
      slug: "external-dns-kubernetes-azure-argocd",
      tags: ["Kubernetes", "DNS", "Azure", "ArgoCD", "GitOps", "DevOps"],
      readTime: "4 min",
      featured: true,
    },
    {
      title: "OpenStack & OVN: guide SDN complet pour infrastructure cloud",
      summary:
        "Plongée dans le Software Defined Networking avec OpenStack et OVN: architecture, pipelines, troubleshooting et bonnes pratiques cloud.",
      date: "2025-10-28",
      slug: "openstack-ovn-sdn-complete-guide",
      tags: [
        "OpenStack",
        "OVN",
        "SDN",
        "Networking",
        "Cloud",
        "Infrastructure",
      ],
      readTime: "18 min",
      featured: true,
    },
  ],
};

export const blogIndexByLocale = {
  en: {
    title: "Articles - Kore.sh",
    description:
      "Technical notes on Kubernetes, SRE, DevSecOps, GitOps, observability and infrastructure operations.",
    kicker: "Articles",
    heading: "Technical notes on platform engineering.",
    intro:
      "Guides and notes around infrastructure, Kubernetes, cloud and operations.",
    allArticles: "All articles",
  },
  fr: {
    title: "Articles - Kore.sh",
    description:
      "Notes techniques sur Kubernetes, SRE, DevSecOps, GitOps, observabilité et opérations infrastructure.",
    kicker: "Articles",
    heading: "Notes techniques sur le platform engineering.",
    intro:
      "Guides et notes autour de l'infrastructure, Kubernetes, du cloud et des opérations.",
    allArticles: "Tous les articles",
  },
};

export function getLocaleFromPath(pathname: string): Locale {
  return pathname === "/fr" || pathname.startsWith("/fr/") ? "fr" : "en";
}

export function localizePath(locale: Locale, path: string): string {
  const [rawPath, hash] = path.split("#");
  const cleanPath = rawPath.startsWith("/") ? rawPath : `/${rawPath}`;
  const normalizedPath = cleanPath === "" ? "/" : cleanPath;
  const suffix = hash ? `#${hash}` : "";

  if (locale === "en") {
    return `${normalizedPath}${suffix}`;
  }

  if (normalizedPath === "/") {
    return `/fr/${suffix}`;
  }

  return `/fr${normalizedPath}${suffix}`;
}

export function switchLocalePath(
  pathname: string,
  targetLocale: Locale,
): string {
  const withoutTrailing = pathname === "/" ? "/" : pathname.replace(/\/$/, "");
  const unprefixed =
    withoutTrailing === "/fr"
      ? "/"
      : withoutTrailing.startsWith("/fr/")
        ? withoutTrailing.slice(3) || "/"
        : withoutTrailing;

  if (/^\/blog\/[^/]+$/.test(unprefixed)) {
    return targetLocale === "fr" ? `/fr${unprefixed}/` : `${unprefixed}/`;
  }

  const normalized = unprefixed === "" ? "/" : unprefixed;
  return localizePath(targetLocale, `${normalized}/`.replace(/\/\/$/, "/"));
}
