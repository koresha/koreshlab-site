export type DesignVariantId = "atelier" | "console" | "strata";

export type DesignVariant = {
  id: DesignVariantId;
  index: string;
  name: string;
  route: string;
  tone: string;
  kicker: string;
  title: string;
  lead: string;
  motion: string;
  mobile: string;
  strengths: string[];
};

export const designVariants: DesignVariant[] = [
  {
    id: "atelier",
    index: "01",
    name: "Atelier OS",
    route: "/fr/designs/atelier/",
    tone: "clair premium · editorial · shadcn calme",
    kicker: "Direction claire",
    title: "Un portfolio lisible comme une note d'architecture.",
    lead: "Fond minéral sans grille, grands blancs, cartes nettes, accent Kore.sh et hiérarchie éditoriale pour une lecture rapide par un recruteur technique.",
    motion:
      "Entrées en cascade, hover doux sur les surfaces, aucun mouvement permanent coûteux.",
    mobile:
      "Le contenu se transforme en flux éditorial: hero compact, cartes pleine largeur, badges respirants.",
    strengths: [
      "Le plus premium et le plus recruteur-friendly.",
      "Très lisible en plein jour et sur mobile.",
      "Convient si tu veux un rendu mature, sobre et très propre.",
    ],
  },
  {
    id: "console",
    index: "02",
    name: "Console exécutive",
    route: "/fr/designs/console/",
    tone: "dark graphite · console · SRE assumé",
    kicker: "Direction sombre",
    title: "Une interface de pilotage pour profil plateforme.",
    lead: "Fond graphite sans motif répétitif, surfaces denses, signaux de statut et motion façon console moderne, sans tomber dans le terminal cliché.",
    motion:
      "Révélations blur-in, liserés actifs au hover, indicateur de disponibilité discret.",
    mobile:
      "Les blocs deviennent des modules empilés, avec actions visibles et tags sans débordement.",
    strengths: [
      "Le plus tech et le plus mémorable.",
      "Bon choix pour assumer l'univers SRE/DevSecOps.",
      "Très efficace pour mettre en avant les stacks et l'expérience actuelle.",
    ],
  },
  {
    id: "strata",
    index: "03",
    name: "Plateforme stratifiée",
    route: "/fr/designs/strata/",
    tone: "profondeur · couches · infrastructure",
    kicker: "Direction système",
    title: "Une lecture en couches, comme une plateforme de production.",
    lead: "Fond en strates très subtil, timeline structurée, sections plus denses et surfaces superposées pour évoquer compute, réseau, livraison et RUN.",
    motion:
      "Décalages de couches, cartes qui se soulèvent au focus, transitions courtes et performantes.",
    mobile:
      "La timeline se compresse en cartes séquentielles, avec contexte et stack immédiatement lisibles.",
    strengths: [
      "Le meilleur compromis entre personnalité et structure.",
      "Très cohérent avec cloud privé, Kubernetes et opérations.",
      "Permet de détailler sans donner une impression de page trop marketing.",
    ],
  },
];

export function getDesignVariant(id: string): DesignVariant {
  return (
    designVariants.find((variant) => variant.id === id) ?? designVariants[0]
  );
}
