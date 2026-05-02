import heroTm7 from '@/assets/cache-ecran-tm7-hero.jpg';
import avantTm7 from '@/assets/cache-ecran-tm7-avant.jpg';
import apresTm7 from '@/assets/cache-ecran-tm7-apres.jpg';
import persoSophie from '@/assets/cache-ecran-tm7-perso-sophie.jpg';
import persoMamie from '@/assets/cache-ecran-tm7-perso-mamie.jpg';
import persoJulien from '@/assets/cache-ecran-tm7-perso-julien.jpg';

export interface ProductNarrative {
  /** label affiché au-dessus du H2 du hero */
  eyebrow: string;
  /** titre principal du hero (peut contenir <highlight>...</highlight> pour mise en avant accent) */
  heroTitle: string;
  /** sous-titre / promesse */
  heroSubtitle: string;
  /** bandeau d'info (court). Optionnel */
  infoBanner?: string;

  /** 4 bénéfices clés affichés dans la liste hero */
  heroBullets: string[];

  /** Section problème */
  problemTitle: string;
  problemDesc: string;
  problemPoints: string[];

  /** Section solution — promesse globale + 3 étapes */
  solutionTitle: string;
  solutionDesc: string;
  solutionSteps: { title: string; desc: string }[];

  /** Section avant / après — légendes des 2 cartes */
  avantLabel: string;
  apresLabel: string;
  avantCaption: string;
  apresCaption: string;

  /** 4 bénéfices détaillés (cartes) */
  beneficesTitle: string;
  benefices: { title: string; desc: string }[];

  /** Bloc urgence + CTA final */
  urgenceTitle: string;
  urgenceDesc: string;
  ctaLabel: string;

  /** Visuels */
  heroImage: string;
  avantImage: string;
  apresImage: string;
}

/* ─── Configuration explicite par handle ─── */
const NARRATIVES: Record<string, ProductNarrative> = {
  'cache-ecran-tm7': {
    eyebrow: 'Spécialement conçu pour le TM7',
    heroTitle: "Gardez votre écran TM7 <highlight>comme neuf, jour après jour</highlight>",
    heroSubtitle:
      "Votre écran est exposé à chaque utilisation : projections, vapeur, traces de doigts. Notre cache se pose entre deux utilisations pour préserver l'écran du quotidien — et se retire en 2 secondes avant chaque cuisson.",
    infoBanner: 'À poser après utilisation, à retirer avant cuisson.',
    heroBullets: [
      "Protège l'écran entre les utilisations (projections, poussières, traces)",
      'Se pose en 2 secondes, sans outil ni colle',
      'Ajustement précis dédié au TM7 (au dixième de mm)',
      'Fabriqué en France 🇫🇷 — PLA qualité premium',
    ],
    problemTitle: 'Votre écran est exposé à chaque utilisation',
    problemDesc:
      "Projections, vapeur, traces de doigts : entre deux cuissons, votre écran TM7 reste vulnérable sur le plan de travail. En quelques mois, il perd son aspect neuf — même sans rayures profondes.",
    problemPoints: [
      "Projections de sauce, huile et matières grasses lors d'autres préparations",
      'Vapeur, poussière et particules qui se déposent au quotidien',
      'Traces de doigts grasses et nettoyages répétés',
      "Perte de l'aspect neuf et de la valeur de revente",
    ],
    solutionTitle: 'Une protection simple, un Thermomix qui reste neuf',
    solutionDesc:
      "Posez le cache après chaque utilisation, retirez-le avant la prochaine cuisson. C'est tout.",
    solutionSteps: [
      { title: 'Pose en 2 secondes', desc: "Après cuisson, vous posez le cache sur l'écran. Il s'aligne tout seul, sans outil ni colle." },
      { title: 'Protection au repos', desc: "L'écran est à l'abri des projections, poussières, traces et frottements quand vous ne l'utilisez pas." },
      { title: 'Retrait avant utilisation', desc: "Avant de relancer une recette, vous retirez le cache d'un geste. Le Thermomix s'utilise normalement." },
    ],
    avantLabel: 'Sans cache',
    apresLabel: 'Avec cache Thermo3D',
    avantCaption: "Traces, projections, poussières — l'écran se salit en permanence.",
    apresCaption: "Écran à l'abri entre les utilisations, comme neuf dans le temps.",
    beneficesTitle: '4 bonnes raisons de protéger votre TM7',
    benefices: [
      { title: 'Protégé entre 2 utilisations', desc: "Plus de projections ni de poussières directement sur l'écran quand vous ne cuisinez pas." },
      { title: 'Évite traces & rayures', desc: 'Fini les traces de doigts grasses et les micro-rayures dues au nettoyage répété.' },
      { title: 'Comme neuf dans le temps', desc: "Préserve l'aspect d'origine de l'écran et la valeur de revente de votre Thermomix." },
      { title: 'Pose & retrait en 2 sec', desc: "Se met en place et se retire d'un geste, avant chaque utilisation. Aucune contrainte." },
    ],
    urgenceTitle: 'Protégez votre TM7 dès aujourd\'hui',
    urgenceDesc:
      "Chaque cache est imprimé à la commande dans notre atelier. Délais de production légèrement allongés en cas de forte demande — commandez maintenant pour recevoir sous 48 à 72h.",
    ctaLabel: 'Protéger mon écran',
    heroImage: heroTm7,
    avantImage: avantTm7,
    apresImage: apresTm7,
  },

  /* ───── Cache écran TM6 ───── */
  'cache-ecran-tm6': {
    eyebrow: 'Spécialement conçu pour le TM6',
    heroTitle: "Votre écran tactile TM6 <highlight>protégé au quotidien</highlight>",
    heroSubtitle:
      "L'écran tactile du TM6 est exposé aux projections, à la vapeur et aux traces de doigts. Notre cache se pose entre deux utilisations pour préserver son aspect d'origine — et se retire en 2 secondes avant chaque cuisson.",
    infoBanner: 'À poser après utilisation, à retirer avant cuisson.',
    heroBullets: [
      "Protège l'écran tactile entre les utilisations",
      'Pose et retrait en 2 secondes, sans outil',
      'Ajustement précis dédié au TM6',
      'Fabriqué en France 🇫🇷 — PLA premium',
    ],
    problemTitle: "L'écran TM6 se salit et se ternit",
    problemDesc:
      "Sans protection, l'écran tactile accumule projections, gras et micro-rayures dues au nettoyage. En quelques mois, il perd son aspect neuf.",
    problemPoints: [
      "Projections de sauce et matières grasses",
      "Traces de doigts et nettoyages quotidiens",
      "Micro-rayures dues aux frottements",
      "Perte de l'aspect neuf et de la valeur de revente",
    ],
    solutionTitle: 'Une protection simple, un écran qui reste impeccable',
    solutionDesc: "Posez le cache après cuisson, retirez-le avant. C'est tout.",
    solutionSteps: [
      { title: 'Pose en 2 secondes', desc: "Vous posez le cache sur l'écran après chaque cuisson." },
      { title: 'Protection au repos', desc: "L'écran est à l'abri des projections et de la poussière." },
      { title: 'Retrait avant usage', desc: "Vous le retirez d'un geste avant la prochaine recette." },
    ],
    avantLabel: 'Sans cache',
    apresLabel: 'Avec cache Thermo3D',
    avantCaption: "Écran exposé : projections et traces s'accumulent.",
    apresCaption: "Écran protégé : aspect neuf préservé dans le temps.",
    beneficesTitle: '4 raisons de protéger votre écran TM6',
    benefices: [
      { title: 'Protégé au repos', desc: "Plus de projections directement sur l'écran tactile." },
      { title: 'Évite traces & rayures', desc: 'Fini les traces grasses et les micro-rayures.' },
      { title: 'Aspect neuf durable', desc: "Préserve la valeur de revente de votre TM6." },
      { title: 'Pose & retrait 2 sec', desc: 'Aucune contrainte au quotidien.' },
    ],
    urgenceTitle: "Protégez votre écran TM6 dès aujourd'hui",
    urgenceDesc:
      'Imprimé à la commande dans notre atelier français. Expédition sous 48 à 72h.',
    ctaLabel: 'Protéger mon écran',
    heroImage: heroTm7,
    avantImage: avantTm7,
    apresImage: apresTm7,
  },

  /* ───── Cache balance TM7 ───── */
  'cache-balance-tm7': {
    eyebrow: 'Cache balance Thermomix TM7',
    heroTitle: "Protégez la <highlight>balance intégrée</highlight> de votre TM7",
    heroSubtitle:
      "La balance du TM7 est sensible aux chocs, aux liquides renversés et aux ustensiles posés dessus. Notre cache la couvre quand vous ne pesez pas, pour préserver sa précision et son apparence.",
    infoBanner: 'À retirer avant chaque pesée — pas de mesure avec le cache.',
    heroBullets: [
      "Préserve la précision de la balance dans le temps",
      "Évite chocs, liquides et taches sur la zone de pesée",
      "Surface lisse, facile à essuyer",
      'Ajustement précis dédié au TM7',
    ],
    problemTitle: "La balance reste exposée entre les recettes",
    problemDesc:
      "Posez un saladier, renversez un liquide, faites tomber un ustensile : la zone de pesée du TM7 encaisse tout. À la longue, l'aspect se dégrade et la précision peut en souffrir.",
    problemPoints: [
      "Liquides renversés directement sur la zone sensible",
      'Chocs des ustensiles posés sur la balance',
      "Taches et résidus difficiles à nettoyer",
      "Usure prématurée du capteur",
    ],
    solutionTitle: 'Un cache pour préserver votre balance',
    solutionDesc: "Posez après pesée, retirez avant la suivante. Votre balance reste comme neuve.",
    solutionSteps: [
      { title: 'Pose immédiate', desc: 'Le cache se positionne tout seul sur la zone de pesée.' },
      { title: 'Protection complète', desc: 'Liquides, chocs et taches restent à la surface du cache.' },
      { title: 'Retrait avant pesée', desc: "Un geste pour retrouver une balance précise et propre." },
    ],
    avantLabel: 'Sans cache',
    apresLabel: 'Avec cache Thermo3D',
    avantCaption: "Balance exposée : taches, chocs et usure inévitables.",
    apresCaption: "Balance protégée : précision et aspect préservés.",
    beneficesTitle: '4 raisons de protéger votre balance',
    benefices: [
      { title: 'Préserve la précision', desc: 'Moins de chocs = balance fiable plus longtemps.' },
      { title: 'Anti-taches', desc: 'Les liquides renversés ne touchent plus la balance.' },
      { title: 'Nettoyage facile', desc: 'Surface lisse, un coup d\'éponge suffit.' },
      { title: 'Discret et sobre', desc: "S'intègre parfaitement à l'esthétique du TM7." },
    ],
    urgenceTitle: "Protégez votre balance TM7 dès aujourd'hui",
    urgenceDesc:
      'Pièce imprimée à la commande dans notre atelier français. Expédition sous 48 à 72h.',
    ctaLabel: 'Protéger ma balance',
    heroImage: heroTm7,
    avantImage: avantTm7,
    apresImage: apresTm7,
  },

  /* ───── Organiseur / Organisateur TM7 ───── */
  'organiseur-thermomix-tm7': {
    eyebrow: 'Organiseur Thermomix TM7',
    heroTitle: "Vos ustensiles TM7 <highlight>toujours à portée de main</highlight>",
    heroSubtitle:
      "Spatule, gobelet doseur, fouet papillon : un emplacement dédié pour chaque accessoire, directement à côté de votre Thermomix. Fini les tiroirs à fouiller en pleine recette.",
    heroBullets: [
      "Une place dédiée pour chaque ustensile TM7",
      "Accès en 1 seconde, sans interrompre la recette",
      "Plan de travail enfin dégagé",
      'Ajustement précis dédié au TM7',
    ],
    problemTitle: "Vos ustensiles TM7 sont éparpillés",
    problemDesc:
      "Spatule au fond du tiroir, gobelet introuvable, fouet papillon mélangé au reste : à chaque recette, vous perdez du temps et vous interrompez la cuisson pour chercher.",
    problemPoints: [
      "Ustensiles mélangés au reste de la vaisselle",
      "Temps perdu à chercher en pleine recette",
      "Gobelet doseur ou spatule régulièrement égarés",
      "Plan de travail encombré pendant la cuisson",
    ],
    solutionTitle: 'Tout vos ustensiles TM7 réunis en un seul endroit',
    solutionDesc: "Un emplacement par ustensile, directement accessible. Vous gagnez du temps à chaque recette.",
    solutionSteps: [
      { title: 'Installation', desc: 'Posez l\'organiseur à côté du TM7, sans outil ni perçage.' },
      { title: 'Rangement immédiat', desc: 'Chaque ustensile trouve sa place, immédiatement visible.' },
      { title: 'Cuisine fluide', desc: 'Vous prenez ce qu\'il vous faut sans quitter votre recette.' },
    ],
    avantLabel: 'Sans organiseur',
    apresLabel: 'Avec organiseur Thermo3D',
    avantCaption: "Ustensiles éparpillés, plan de travail encombré.",
    apresCaption: "Tout à sa place, accessible en 1 seconde.",
    beneficesTitle: "4 raisons d'adopter l'organiseur TM7",
    benefices: [
      { title: 'Gain de temps', desc: 'Vos ustensiles sont accessibles en 1 seconde.' },
      { title: 'Plan de travail dégagé', desc: 'Plus d\'espace utile pour cuisiner.' },
      { title: 'Zéro objet perdu', desc: 'Chaque ustensile a sa place dédiée.' },
      { title: 'Installation 2 sec', desc: 'Aucun outil, totalement réversible.' },
    ],
    urgenceTitle: "Organisez vos ustensiles TM7 dès aujourd'hui",
    urgenceDesc:
      'Pièce imprimée à la commande dans notre atelier français. Expédition sous 48 à 72h.',
    ctaLabel: 'Organiser mes ustensiles',
    heroImage: heroTm7,
    avantImage: avantTm7,
    apresImage: apresTm7,
  },

  /* ───── Organisateur TM7 avec support couvercle ───── */
  'organisateur-thermomix-tm7-avec-support-couvercle': {
    eyebrow: 'Organisateur TM7 + support couvercle',
    heroTitle: "Tout rangé, <highlight>tout à portée</highlight>, plus une goutte par terre",
    heroSubtitle:
      "Un seul accessoire pour ranger vos ustensiles TM7 ET poser le couvercle qui goutte sans salir le plan de travail. La solution complète pour cuisiner sereinement.",
    heroBullets: [
      "Range vos ustensiles TM7 et reçoit le couvercle qui goutte",
      "Plus de gouttes ni de taches sur le plan de travail",
      "Tout reste accessible en 1 seconde",
      'Ajustement précis dédié au TM7',
    ],
    problemTitle: "Couvercle qui goutte + ustensiles éparpillés = chaos",
    problemDesc:
      "Quand vous retirez le couvercle, il goutte partout. Vos ustensiles sont introuvables. Résultat : plan de travail sale et recettes interrompues.",
    problemPoints: [
      "Gouttes du couvercle directement sur le plan de travail",
      "Ustensiles mélangés et difficiles à retrouver",
      "Plan de travail à nettoyer après chaque recette",
      "Cuisine désorganisée en pleine cuisson",
    ],
    solutionTitle: '2-en-1 : rangement + repose-couvercle',
    solutionDesc: "Une base unique qui accueille vos ustensiles ET votre couvercle. Tout reste propre et accessible.",
    solutionSteps: [
      { title: 'Mise en place', desc: 'Posez l\'organisateur à côté du TM7, en quelques secondes.' },
      { title: 'Rangement et pose', desc: 'Ustensiles à leur place, couvercle posé sans risque.' },
      { title: 'Plan de travail propre', desc: 'Plus de gouttes, plus de désordre. Cuisinez sereinement.' },
    ],
    avantLabel: 'Sans organisateur',
    apresLabel: 'Avec organisateur Thermo3D',
    avantCaption: "Gouttes du couvercle et ustensiles partout.",
    apresCaption: "Couvercle posé proprement, ustensiles à portée.",
    beneficesTitle: "4 raisons d'adopter ce 2-en-1",
    benefices: [
      { title: 'Plan de travail propre', desc: 'Plus de gouttes du couvercle.' },
      { title: 'Tout à portée', desc: 'Ustensiles immédiatement accessibles.' },
      { title: 'Gain de place', desc: 'Une seule base pour deux fonctions.' },
      { title: 'Made in France', desc: 'PLA premium imprimé dans notre atelier.' },
    ],
    urgenceTitle: "Organisez votre TM7 dès aujourd'hui",
    urgenceDesc:
      'Pièce imprimée à la commande dans notre atelier français. Expédition sous 48 à 72h.',
    ctaLabel: 'Tout organiser',
    heroImage: heroTm7,
    avantImage: avantTm7,
    apresImage: apresTm7,
  },

  /* ───── Support couvercle TM7 ───── */
  'support-couvercle-thermomix-tm7': {
    eyebrow: 'Support couvercle Thermomix TM7',
    heroTitle: "Fini les <highlight>gouttes du couvercle</highlight> sur le plan de travail",
    heroSubtitle:
      "Quand vous retirez le couvercle du TM7, il goutte. Notre support recueille ces gouttes proprement, sans tache ni nettoyage. Une cuisine plus propre, sans effort.",
    heroBullets: [
      "Recueille les gouttes du couvercle TM7",
      "Plan de travail propre, zéro tache",
      "Pose et retrait du couvercle en un geste",
      'Ajustement précis dédié au TM7',
    ],
    problemTitle: "Le couvercle goutte partout dès qu'on le retire",
    problemDesc:
      "Vapeur d'eau, sauce, jus de cuisson : à chaque ouverture du Thermomix, le couvercle laisse couler des gouttes sur le plan de travail. Vous nettoyez à chaque recette.",
    problemPoints: [
      "Gouttes de jus et de sauce sur le plan de travail",
      "Taches qui marquent à la longue",
      "Nettoyage systématique après chaque recette",
      "Pas d'endroit propre pour poser le couvercle",
    ],
    solutionTitle: 'Un support qui garde votre cuisine propre',
    solutionDesc: "Posez le couvercle directement sur le support. Les gouttes restent à l'intérieur, votre plan de travail reste propre.",
    solutionSteps: [
      { title: 'Mise en place', desc: 'Posez le support à côté du TM7, sans outil.' },
      { title: 'Posez le couvercle', desc: "À chaque ouverture, déposez le couvercle dessus." },
      { title: 'Plan de travail propre', desc: 'Les gouttes sont contenues, vous ne nettoyez plus.' },
    ],
    avantLabel: 'Sans support',
    apresLabel: 'Avec support Thermo3D',
    avantCaption: "Gouttes et taches sur le plan de travail à chaque recette.",
    apresCaption: "Couvercle posé proprement, plan de travail impeccable.",
    beneficesTitle: '4 raisons d\'adopter ce support couvercle',
    benefices: [
      { title: 'Zéro goutte', desc: 'Le plan de travail reste sec et propre.' },
      { title: 'Plus de nettoyage', desc: 'Vous gagnez du temps après chaque recette.' },
      { title: 'Pratique', desc: "Une vraie place dédiée pour le couvercle." },
      { title: 'Ajustement TM7', desc: 'Conçu spécifiquement pour le couvercle TM7.' },
    ],
    urgenceTitle: "Gardez votre cuisine propre dès aujourd'hui",
    urgenceDesc:
      'Pièce imprimée à la commande dans notre atelier français. Expédition sous 48 à 72h.',
    ctaLabel: 'Adopter le support couvercle',
    heroImage: heroTm7,
    avantImage: avantTm7,
    apresImage: apresTm7,
  },

  /* ───── Support spatule TM7 ───── */
  'support-spatule-thermomix-tm7': {
    eyebrow: 'Support spatule Thermomix TM7',
    heroTitle: "Votre spatule TM7 <highlight>toujours à portée</highlight>, jamais sale",
    heroSubtitle:
      "Plus besoin de chercher la spatule ni de la poser sur un plan de travail sale. Un emplacement dédié, juste à côté du Thermomix, pour l'avoir en main au bon moment.",
    heroBullets: [
      "Spatule accessible en 1 seconde",
      "Plus de spatule posée sur le plan de travail sale",
      "Spatule toujours propre, prête à l'emploi",
      'Ajustement précis dédié au TM7',
    ],
    problemTitle: "Où est la spatule au moment crucial ?",
    problemDesc:
      "Vous avez besoin de la spatule pendant la cuisson, mais elle traîne sur le plan de travail, dans l'évier ou dans un tiroir. Vous perdez du temps et vous la posez n'importe où.",
    problemPoints: [
      "Spatule introuvable au moment d'en avoir besoin",
      "Posée sur un plan de travail pas toujours propre",
      "Sauce qui coule de la spatule sur le plan de travail",
      "Recette interrompue pour aller la chercher",
    ],
    solutionTitle: 'Un emplacement dédié, à portée immédiate',
    solutionDesc: "Glissez la spatule sur son support après chaque utilisation. Elle est propre, visible, prête.",
    solutionSteps: [
      { title: 'Installation', desc: 'Posez le support à côté du TM7, sans outil.' },
      { title: 'Rangement immédiat', desc: 'La spatule trouve sa place après chaque utilisation.' },
      { title: 'Toujours prête', desc: "Vous l'attrapez en 1 seconde, sans la chercher." },
    ],
    avantLabel: 'Sans support',
    apresLabel: 'Avec support Thermo3D',
    avantCaption: "Spatule introuvable, posée n'importe où.",
    apresCaption: "Spatule à sa place, propre et prête à l'emploi.",
    beneficesTitle: '4 raisons d\'adopter le support spatule',
    benefices: [
      { title: 'Toujours à portée', desc: 'Plus jamais de recette interrompue pour la chercher.' },
      { title: 'Plus d\'hygiène', desc: 'La spatule ne touche plus le plan de travail.' },
      { title: 'Gain de place', desc: 'Format compact, ne prend pas de place utile.' },
      { title: 'Ajustement TM7', desc: 'Conçu spécifiquement pour la spatule TM7.' },
    ],
    urgenceTitle: "Adoptez le support spatule dès aujourd'hui",
    urgenceDesc:
      'Pièce imprimée à la commande dans notre atelier français. Expédition sous 48 à 72h.',
    ctaLabel: 'Adopter ce support',
    heroImage: heroTm7,
    avantImage: avantTm7,
    apresImage: apresTm7,
  },

  /* ───── Support ustensiles TM7 / TM6 (générique) ───── */
  'support-ustensiles-thermomix-tm7': {
    eyebrow: 'Support ustensiles Thermomix TM7',
    heroTitle: "Tous vos ustensiles TM7 <highlight>en un seul endroit</highlight>",
    heroSubtitle:
      "Spatule, gobelet doseur, fouet, panier de cuisson : un support compact qui regroupe tous vos ustensiles TM7 directement à côté du Thermomix.",
    heroBullets: [
      "Tous les ustensiles TM7 réunis en un endroit",
      "Plan de travail enfin libéré",
      "Accès immédiat pendant la cuisson",
      'Ajustement précis dédié au TM7',
    ],
    problemTitle: "Vos ustensiles TM7 prennent trop de place",
    problemDesc:
      "Sans rangement dédié, les ustensiles TM7 occupent un tiroir entier ou s'éparpillent sur le plan de travail. Vous perdez du temps et de l'espace utile.",
    problemPoints: [
      "Tiroir entier monopolisé par les accessoires Thermomix",
      "Ustensiles éparpillés sur le plan de travail",
      "Temps perdu à chercher la bonne pièce",
      "Risque de perte ou de casse",
    ],
    solutionTitle: 'Un support pensé pour tout regrouper',
    solutionDesc: "Chaque ustensile a sa place dédiée, immédiatement accessible.",
    solutionSteps: [
      { title: 'Installation', desc: 'Posez le support à côté du TM7, sans outil.' },
      { title: 'Rangement immédiat', desc: 'Chaque ustensile trouve sa place dédiée.' },
      { title: 'Cuisine fluide', desc: 'Vous prenez ce qu\'il vous faut sans interruption.' },
    ],
    avantLabel: 'Sans support',
    apresLabel: 'Avec support Thermo3D',
    avantCaption: "Tiroirs encombrés, ustensiles éparpillés.",
    apresCaption: "Tout regroupé, accessible et visible.",
    beneficesTitle: "4 raisons d'adopter ce support",
    benefices: [
      { title: 'Tout regroupé', desc: 'Une seule place pour tous vos ustensiles TM7.' },
      { title: 'Tiroir libéré', desc: 'Vous récupérez un tiroir complet pour autre chose.' },
      { title: 'Accès immédiat', desc: 'Vos ustensiles sont visibles et accessibles.' },
      { title: 'Ajustement TM7', desc: 'Pensé pour les dimensions des ustensiles TM7.' },
    ],
    urgenceTitle: "Organisez vos ustensiles dès aujourd'hui",
    urgenceDesc:
      'Pièce imprimée à la commande dans notre atelier français. Expédition sous 48 à 72h.',
    ctaLabel: 'Adopter ce support',
    heroImage: heroTm7,
    avantImage: avantTm7,
    apresImage: apresTm7,
  },

  /* ───── Démouleur à pâte ───── */
  'demouleur-a-pate-thermomix-tm5-tm6-tm7': {
    eyebrow: 'Démouleur à pâte Thermomix',
    heroTitle: "Démoulage <highlight>facile, propre, sans gâchis</highlight>",
    heroSubtitle:
      "Sortir la pâte du bol Thermomix sans en perdre la moitié sur les parois ni se brûler les doigts : c'est ce que permet ce démouleur, conçu pour épouser parfaitement la forme du bol.",
    heroBullets: [
      "Récupère 100% de la pâte, sans gâchis",
      "Plus besoin d'y mettre les mains",
      "Compatible TM5, TM6 et TM7",
      'Fabriqué en France 🇫🇷 — PLA alimentaire',
    ],
    problemTitle: "Démouler la pâte est toujours galère",
    problemDesc:
      "Avec une spatule classique, vous laissez de la pâte sur les parois, vous vous tachez les mains et vous mettez plus de temps qu'il n'en faut. Sans parler du nettoyage du bol après.",
    problemPoints: [
      "Pâte qui reste collée aux parois du bol",
      "Mains et plan de travail tachés",
      "Démoulage long et fastidieux",
      "Bol plus difficile à nettoyer ensuite",
    ],
    solutionTitle: 'Un démouleur pensé pour le bol Thermomix',
    solutionDesc: "Sa forme épouse exactement celle du bol : vous récupérez la totalité de la pâte en quelques secondes.",
    solutionSteps: [
      { title: 'Insérer', desc: "Glissez le démouleur le long de la paroi du bol." },
      { title: 'Faire le tour', desc: "Un tour complet et la pâte se détache d'un bloc." },
      { title: 'Démouler', desc: "Récupérez votre pâte en entier, sans rien gâcher." },
    ],
    avantLabel: 'Avec une spatule',
    apresLabel: 'Avec le démouleur Thermo3D',
    avantCaption: "Pâte qui reste collée et démoulage fastidieux.",
    apresCaption: "Démoulage rapide, propre, sans perte.",
    beneficesTitle: '4 raisons d\'adopter ce démouleur',
    benefices: [
      { title: 'Zéro gâchis', desc: 'Vous récupérez 100% de la pâte.' },
      { title: 'Mains propres', desc: "Plus besoin d'y mettre les doigts." },
      { title: 'Bol plus propre', desc: 'Le nettoyage du bol est instantané ensuite.' },
      { title: 'Compatible TM5/6/7', desc: 'Une seule pièce pour tous les bols Thermomix.' },
    ],
    urgenceTitle: "Démoulez sans effort dès aujourd'hui",
    urgenceDesc:
      'Pièce imprimée à la commande dans notre atelier français. Expédition sous 48 à 72h.',
    ctaLabel: 'Adopter le démouleur',
    heroImage: heroTm7,
    avantImage: avantTm7,
    apresImage: apresTm7,
  },
};

/* Aliases : différentes variantes de handles Shopify pointent vers le même narratif */
const ALIASES: Record<string, string> = {
  'cache-ecran-thermomix-tm7': 'cache-ecran-tm7',
  'cache-ecran-thermomix-tm7-ecran-protege-esprit-tranquille': 'cache-ecran-tm7',
  'cache-ecran-thermomix-tm6': 'cache-ecran-tm6',
  'cache-ecran-thermomix-tm6-protegez-votre-ecran-tactile': 'cache-ecran-tm6',
  'cache-balance-thermomix-tm7': 'cache-balance-tm7',
  'cache-balance-thermomix-tm7-protegez-votre-balance-au-quotidien': 'cache-balance-tm7',
  'cache-balance-thermomix-tm7-version-moyenne': 'cache-balance-tm7',
  'cache-balance-thermomix-tm7-version-moyenne-protection-elegante': 'cache-balance-tm7',
  'cache-balance-thermomix-tm7-version-petite': 'cache-balance-tm7',
  'cache-balance-thermomix-tm7-version-petite-protection-compacte': 'cache-balance-tm7',
  'organiseur-thermomix-tm7-vos-ustensiles-toujours-a-portee-de-main': 'organiseur-thermomix-tm7',
  'organisateur-thermomix-tm7-avec-support-couvercle-tout-range-tout-a-portee': 'organisateur-thermomix-tm7-avec-support-couvercle',
  'support-couvercle-thermomix-tm7-fini-les-gouttes-sur-le-plan-de-travail': 'support-couvercle-thermomix-tm7',
  'support-spatule-thermomix-tm7-spatule-toujours-a-portee-de-main': 'support-spatule-thermomix-tm7',
  'support-ustensiles-thermomix-tm7-version-grande': 'support-ustensiles-thermomix-tm7',
  'support-ustensiles-thermomix-tm7-version-grande-rangement-essentiel': 'support-ustensiles-thermomix-tm7',
  'support-ustensiles-thermomix-tm7-version-petite': 'support-ustensiles-thermomix-tm7',
  'support-ustensiles-thermomix-tm7-version-petite-rangement-essentiel': 'support-ustensiles-thermomix-tm7',
  'support-ustensiles-thermomix-tm7-version-simple': 'support-ustensiles-thermomix-tm7',
  'support-ustensiles-thermomix-tm7-version-simple-rangement-pratique': 'support-ustensiles-thermomix-tm7',
  'support-ustensiles-thermomix-tm6-grande-version': 'support-ustensiles-thermomix-tm7',
  'support-ustensiles-thermomix-tm6-grande-version-tout-ranger-en-un-seul-endroit': 'support-ustensiles-thermomix-tm7',
  'demouleur-a-pate-thermomix-tm5-tm6-tm7-demoulage-facile-et-propre': 'demouleur-a-pate-thermomix-tm5-tm6-tm7',
};


/* ─── Détection de sous-catégorie pour générer un narratif par défaut ─── */
type SubCategory =
  | 'cache-ecran'
  | 'cache-balance'
  | 'cache'
  | 'support-couvercle'
  | 'support-spatule'
  | 'support-ustensiles'
  | 'organiseur'
  | 'demouleur'
  | 'pack'
  | 'rangement'
  | 'accessoire';

function detectSubCategory(handle: string, title: string): SubCategory {
  const s = `${handle} ${title}`.toLowerCase();
  if (/cache.*(ecran|écran|tactile|screen)/.test(s)) return 'cache-ecran';
  if (/cache.*balance/.test(s)) return 'cache-balance';
  if (/cache|protect|protec|cover/.test(s)) return 'cache';
  if (/support.*couvercle|repose.*couvercle/.test(s)) return 'support-couvercle';
  if (/support.*spatule|porte.*spatule/.test(s)) return 'support-spatule';
  if (/support.*ustensile|porte.*ustensile/.test(s)) return 'support-ustensiles';
  if (/organiseur|organisateur|organis/.test(s)) return 'organiseur';
  if (/demouleur|démouleur|demoul/.test(s)) return 'demouleur';
  if (/\bpack\b|coffret|bundle|lot\s/.test(s)) return 'pack';
  if (/rangement|tiroir|boite|boîte/.test(s)) return 'rangement';
  if (/support|stand|porte/.test(s)) return 'support-ustensiles';
  return 'accessoire';
}

function detectModel(handle: string, title: string, tags: string[] = []): 'TM5' | 'TM6' | 'TM7' | 'Thermomix' {
  const s = `${handle} ${title} ${tags.join(' ')}`.toLowerCase();
  if (/tm7/.test(s)) return 'TM7';
  if (/tm6/.test(s)) return 'TM6';
  if (/tm5/.test(s)) return 'TM5';
  return 'Thermomix';
}

/* ─── Narratifs génériques par sous-catégorie ─── */
function buildDefaultNarrative(args: {
  title: string;
  handle: string;
  tags?: string[];
  image: string;
  secondImage?: string;
}): ProductNarrative {
  const { title, handle, tags = [], image, secondImage } = args;
  const sub = detectSubCategory(handle, title);
  const model = detectModel(handle, title, tags);

  const baseHero = image;
  const baseAvant = secondImage || image;
  const baseApres = image;

  const common = {
    heroImage: baseHero,
    avantImage: baseAvant,
    apresImage: baseApres,
    avantLabel: 'Sans accessoire',
    apresLabel: 'Avec Thermo3D',
  };

  switch (sub) {
    case 'cache-ecran':
      return {
        ...common,
        eyebrow: `Cache écran Thermomix ${model}`,
        heroTitle: `Gardez votre écran ${model} <highlight>comme neuf</highlight>`,
        heroSubtitle: `L'écran tactile du ${model} subit projections, vapeur et traces de doigts au quotidien. Notre cache se pose entre deux utilisations pour préserver son aspect d'origine.`,
        infoBanner: 'À poser après utilisation, à retirer avant cuisson.',
        heroBullets: [
          "Protège l'écran tactile entre les utilisations",
          'Évite projections, traces grasses et micro-rayures',
          'Pose et retrait en 2 secondes, sans outil',
          `Ajustement précis dédié au ${model}`,
        ],
        problemTitle: `L'écran ${model} se ternit avec le temps`,
        problemDesc:
          "Sans protection, l'écran accumule projections, gras et micro-rayures dues au nettoyage. En quelques mois, il perd son aspect neuf.",
        problemPoints: [
          'Projections de sauce et matières grasses',
          'Traces de doigts grasses au quotidien',
          'Micro-rayures dues au nettoyage répété',
          "Perte d'aspect neuf et de la valeur de revente",
        ],
        solutionTitle: 'Une protection simple, un écran impeccable',
        solutionDesc: "Posez après cuisson, retirez avant. Votre écran reste neuf.",
        solutionSteps: [
          { title: 'Pose en 2 secondes', desc: "Vous posez le cache sur l'écran après cuisson." },
          { title: 'Protection au repos', desc: "L'écran est à l'abri des projections et de la poussière." },
          { title: 'Retrait avant usage', desc: "D'un geste avant la prochaine recette." },
        ],
        avantCaption: 'Écran exposé : projections et traces s\'accumulent.',
        apresCaption: 'Écran protégé : aspect neuf préservé.',
        beneficesTitle: `4 raisons de protéger votre écran ${model}`,
        benefices: [
          { title: 'Protégé au repos', desc: "Plus de projections sur l'écran tactile." },
          { title: 'Évite traces & rayures', desc: 'Fini le gras et les micro-rayures du nettoyage.' },
          { title: 'Aspect neuf durable', desc: 'Préserve la valeur de revente.' },
          { title: 'Pose & retrait 2 sec', desc: 'Aucune contrainte au quotidien.' },
        ],
        urgenceTitle: `Protégez votre écran ${model} dès aujourd'hui`,
        urgenceDesc: 'Imprimé à la commande dans notre atelier français. Expédition sous 48 à 72h.',
        ctaLabel: 'Protéger mon écran',
      };

    case 'cache-balance':
      return {
        ...common,
        eyebrow: `Cache balance Thermomix ${model}`,
        heroTitle: `Protégez la <highlight>balance intégrée</highlight> de votre ${model}`,
        heroSubtitle: `La balance du ${model} est sensible aux chocs, liquides et ustensiles posés. Notre cache la couvre entre les pesées pour préserver sa précision et son apparence.`,
        infoBanner: 'À retirer avant chaque pesée — pas de mesure avec le cache.',
        heroBullets: [
          'Préserve la précision de la balance',
          'Évite chocs, liquides et taches',
          'Surface lisse, facile à essuyer',
          `Ajustement précis dédié au ${model}`,
        ],
        problemTitle: 'La balance reste exposée entre les recettes',
        problemDesc:
          "Saladier posé, liquide renversé, ustensile tombé : la zone de pesée encaisse tout. À la longue, l'aspect se dégrade et la précision peut en souffrir.",
        problemPoints: [
          'Liquides renversés sur la zone sensible',
          'Chocs des ustensiles posés dessus',
          'Taches difficiles à nettoyer',
          'Usure prématurée du capteur',
        ],
        solutionTitle: 'Un cache pour préserver votre balance',
        solutionDesc: 'Posez après pesée, retirez avant la suivante. Votre balance reste comme neuve.',
        solutionSteps: [
          { title: 'Pose immédiate', desc: 'Le cache se positionne tout seul sur la balance.' },
          { title: 'Protection complète', desc: 'Liquides et chocs restent à la surface du cache.' },
          { title: 'Retrait avant pesée', desc: 'Un geste pour retrouver une balance précise.' },
        ],
        avantCaption: 'Balance exposée : taches, chocs et usure inévitables.',
        apresCaption: 'Balance protégée : précision et aspect préservés.',
        beneficesTitle: '4 raisons de protéger votre balance',
        benefices: [
          { title: 'Préserve la précision', desc: 'Moins de chocs = balance fiable plus longtemps.' },
          { title: 'Anti-taches', desc: 'Les liquides ne touchent plus la balance.' },
          { title: 'Nettoyage facile', desc: "Un coup d'éponge suffit." },
          { title: 'Discret', desc: `S'intègre à l'esthétique du ${model}.` },
        ],
        urgenceTitle: `Protégez votre balance ${model} dès aujourd'hui`,
        urgenceDesc: 'Imprimé à la commande dans notre atelier français. Expédition sous 48 à 72h.',
        ctaLabel: 'Protéger ma balance',
      };

    case 'cache':
      return {
        ...common,
        eyebrow: `Spécialement conçu pour le ${model}`,
        heroTitle: `Gardez votre ${model} <highlight>comme neuf, jour après jour</highlight>`,
        heroSubtitle: `Une protection sur-mesure pour préserver votre Thermomix entre deux utilisations. Pose et retrait en 2 secondes, sans outil.`,
        infoBanner: 'À poser après utilisation, à retirer avant cuisson.',
        heroBullets: [
          'Protège votre Thermomix entre les utilisations',
          "Se pose en 2 secondes, sans outil ni colle",
          `Ajustement précis dédié au ${model}`,
          'Fabriqué en France 🇫🇷 — PLA premium',
        ],
        problemTitle: 'Votre Thermomix est exposé en permanence',
        problemDesc:
          'Sur le plan de travail, votre Thermomix subit projections, vapeur et traces. Sans protection, il perd son aspect neuf en quelques mois.',
        problemPoints: [
          "Projections lors d'autres préparations",
          'Poussières et particules au quotidien',
          'Traces de doigts et nettoyages répétés',
          "Perte de l'aspect neuf",
        ],
        solutionTitle: 'Une protection simple, un Thermomix qui reste neuf',
        solutionDesc: "Posez après cuisson, retirez avant utilisation. C'est tout.",
        solutionSteps: [
          { title: 'Pose en 2 secondes', desc: "La protection s'aligne toute seule." },
          { title: 'Protection au repos', desc: "À l'abri des agressions du quotidien." },
          { title: 'Retrait avant usage', desc: "Vous le retirez d'un geste." },
        ],
        avantCaption: 'Exposé en permanence aux projections et à la poussière.',
        apresCaption: "À l'abri entre les utilisations, comme neuf dans le temps.",
        beneficesTitle: `4 raisons de protéger votre ${model}`,
        benefices: [
          { title: 'Protégé au repos', desc: 'Plus de projections sur la zone sensible.' },
          { title: 'Évite traces & rayures', desc: 'Fini les traces grasses et les micro-rayures.' },
          { title: 'Comme neuf', desc: "Préserve l'aspect d'origine." },
          { title: 'Pose & retrait 2 sec', desc: 'Aucune contrainte au quotidien.' },
        ],
        urgenceTitle: `Protégez votre ${model} dès aujourd'hui`,
        urgenceDesc: 'Imprimé à la commande dans notre atelier français. Expédition sous 48 à 72h.',
        ctaLabel: 'Protéger mon Thermomix',
      };

    case 'support-couvercle':
      return {
        ...common,
        eyebrow: `Support couvercle Thermomix ${model}`,
        heroTitle: `Fini les <highlight>gouttes du couvercle</highlight> sur le plan de travail`,
        heroSubtitle: `À chaque ouverture, le couvercle du ${model} laisse couler des gouttes. Notre support les recueille proprement, sans tache ni nettoyage.`,
        heroBullets: [
          'Recueille les gouttes du couvercle',
          'Plan de travail propre, zéro tache',
          'Pose et retrait du couvercle en un geste',
          `Ajustement précis dédié au ${model}`,
        ],
        problemTitle: 'Le couvercle goutte partout dès qu\'on le retire',
        problemDesc:
          "Vapeur, sauce, jus de cuisson : à chaque ouverture, le couvercle salit le plan de travail. Vous nettoyez à chaque recette.",
        problemPoints: [
          'Gouttes de jus et de sauce sur le plan de travail',
          'Taches qui marquent à la longue',
          'Nettoyage systématique après chaque recette',
          "Pas d'endroit propre pour poser le couvercle",
        ],
        solutionTitle: 'Un support qui garde votre cuisine propre',
        solutionDesc: 'Posez le couvercle dessus. Les gouttes restent contenues.',
        solutionSteps: [
          { title: 'Mise en place', desc: 'Posez le support à côté du Thermomix, sans outil.' },
          { title: 'Posez le couvercle', desc: "À chaque ouverture, déposez-le dessus." },
          { title: 'Plan de travail propre', desc: 'Plus de gouttes à essuyer.' },
        ],
        avantCaption: 'Gouttes et taches sur le plan de travail.',
        apresCaption: 'Couvercle posé proprement, plan de travail impeccable.',
        beneficesTitle: '4 raisons d\'adopter ce support couvercle',
        benefices: [
          { title: 'Zéro goutte', desc: 'Le plan de travail reste sec.' },
          { title: 'Plus de nettoyage', desc: 'Vous gagnez du temps après chaque recette.' },
          { title: 'Pratique', desc: 'Une vraie place dédiée pour le couvercle.' },
          { title: `Ajustement ${model}`, desc: `Conçu pour le couvercle ${model}.` },
        ],
        urgenceTitle: 'Gardez votre cuisine propre dès aujourd\'hui',
        urgenceDesc: 'Imprimé à la commande dans notre atelier français. Expédition sous 48 à 72h.',
        ctaLabel: 'Adopter le support couvercle',
      };

    case 'support-spatule':
      return {
        ...common,
        eyebrow: `Support spatule Thermomix ${model}`,
        heroTitle: `Votre spatule ${model} <highlight>toujours à portée</highlight>, jamais sale`,
        heroSubtitle: `Plus besoin de chercher la spatule ni de la poser sur un plan de travail sale. Un emplacement dédié, juste à côté du Thermomix.`,
        heroBullets: [
          'Spatule accessible en 1 seconde',
          'Plus de spatule posée sur le plan de travail sale',
          "Spatule propre, prête à l'emploi",
          `Ajustement précis dédié au ${model}`,
        ],
        problemTitle: 'Où est la spatule au moment crucial ?',
        problemDesc:
          "Vous avez besoin de la spatule pendant la cuisson, mais elle traîne dans l'évier ou un tiroir. Vous la posez n'importe où.",
        problemPoints: [
          "Spatule introuvable au moment d'en avoir besoin",
          'Posée sur un plan de travail pas toujours propre',
          'Sauce qui coule de la spatule',
          'Recette interrompue pour aller la chercher',
        ],
        solutionTitle: 'Un emplacement dédié, à portée immédiate',
        solutionDesc: 'Glissez la spatule sur son support après chaque utilisation.',
        solutionSteps: [
          { title: 'Installation', desc: 'Posez le support à côté du Thermomix, sans outil.' },
          { title: 'Rangement immédiat', desc: 'La spatule trouve sa place.' },
          { title: 'Toujours prête', desc: "Vous l'attrapez en 1 seconde." },
        ],
        avantCaption: 'Spatule introuvable, posée n\'importe où.',
        apresCaption: 'Spatule à sa place, propre et prête à l\'emploi.',
        beneficesTitle: '4 raisons d\'adopter le support spatule',
        benefices: [
          { title: 'Toujours à portée', desc: 'Plus de recette interrompue pour la chercher.' },
          { title: "Plus d'hygiène", desc: 'La spatule ne touche plus le plan de travail.' },
          { title: 'Gain de place', desc: 'Format compact, ne prend pas de place utile.' },
          { title: `Ajustement ${model}`, desc: `Conçu pour la spatule ${model}.` },
        ],
        urgenceTitle: 'Adoptez le support spatule dès aujourd\'hui',
        urgenceDesc: 'Imprimé à la commande dans notre atelier français. Expédition sous 48 à 72h.',
        ctaLabel: 'Adopter ce support',
      };

    case 'support-ustensiles':
      return {
        ...common,
        eyebrow: `Support ustensiles Thermomix ${model}`,
        heroTitle: `Tous vos ustensiles ${model} <highlight>en un seul endroit</highlight>`,
        heroSubtitle: `Spatule, gobelet, fouet, panier de cuisson : un support compact qui regroupe tous vos ustensiles ${model} directement à côté du Thermomix.`,
        heroBullets: [
          `Tous les ustensiles ${model} réunis en un endroit`,
          'Plan de travail enfin libéré',
          'Accès immédiat pendant la cuisson',
          `Ajustement précis dédié au ${model}`,
        ],
        problemTitle: `Vos ustensiles ${model} prennent trop de place`,
        problemDesc:
          'Sans rangement dédié, les ustensiles occupent un tiroir entier ou s\'éparpillent. Vous perdez du temps et de l\'espace utile.',
        problemPoints: [
          'Tiroir entier monopolisé par les accessoires',
          'Ustensiles éparpillés sur le plan de travail',
          'Temps perdu à chercher la bonne pièce',
          'Risque de perte ou de casse',
        ],
        solutionTitle: 'Un support pensé pour tout regrouper',
        solutionDesc: 'Chaque ustensile a sa place dédiée, immédiatement accessible.',
        solutionSteps: [
          { title: 'Installation', desc: 'Posez le support à côté du Thermomix, sans outil.' },
          { title: 'Rangement immédiat', desc: 'Chaque ustensile trouve sa place.' },
          { title: 'Cuisine fluide', desc: 'Vous cuisinez sans interruption.' },
        ],
        avantCaption: 'Tiroirs encombrés, ustensiles éparpillés.',
        apresCaption: 'Tout regroupé, accessible et visible.',
        beneficesTitle: "4 raisons d'adopter ce support",
        benefices: [
          { title: 'Tout regroupé', desc: 'Une seule place pour tous vos ustensiles.' },
          { title: 'Tiroir libéré', desc: 'Vous récupérez un tiroir complet.' },
          { title: 'Accès immédiat', desc: 'Vos ustensiles sont visibles et accessibles.' },
          { title: `Ajustement ${model}`, desc: `Pensé pour les dimensions ${model}.` },
        ],
        urgenceTitle: 'Organisez vos ustensiles dès aujourd\'hui',
        urgenceDesc: 'Imprimé à la commande dans notre atelier français. Expédition sous 48 à 72h.',
        ctaLabel: 'Adopter ce support',
      };

    case 'organiseur':
      return {
        ...common,
        eyebrow: `Organiseur Thermomix ${model}`,
        heroTitle: `Vos ustensiles ${model} <highlight>toujours à portée de main</highlight>`,
        heroSubtitle: `Un emplacement dédié pour chaque accessoire, directement à côté de votre Thermomix. Fini les tiroirs à fouiller en pleine recette.`,
        heroBullets: [
          'Une place dédiée pour chaque ustensile',
          'Accès en 1 seconde, sans interrompre la recette',
          'Plan de travail enfin dégagé',
          `Ajustement précis dédié au ${model}`,
        ],
        problemTitle: `Vos ustensiles ${model} sont éparpillés`,
        problemDesc:
          'À chaque recette, vous perdez du temps à chercher. Et vous interrompez la cuisson pour fouiller les tiroirs.',
        problemPoints: [
          'Ustensiles mélangés au reste de la vaisselle',
          'Temps perdu à chercher en pleine recette',
          'Gobelet ou spatule régulièrement égarés',
          'Plan de travail encombré pendant la cuisson',
        ],
        solutionTitle: 'Tous vos ustensiles réunis en un seul endroit',
        solutionDesc: 'Un emplacement par ustensile, directement accessible.',
        solutionSteps: [
          { title: 'Installation', desc: 'Posez l\'organiseur à côté du Thermomix.' },
          { title: 'Rangement immédiat', desc: 'Chaque ustensile trouve sa place.' },
          { title: 'Cuisine fluide', desc: 'Vous prenez ce qu\'il vous faut sans quitter votre recette.' },
        ],
        avantCaption: 'Ustensiles éparpillés, plan de travail encombré.',
        apresCaption: 'Tout à sa place, accessible en 1 seconde.',
        beneficesTitle: "4 raisons d'adopter cet organiseur",
        benefices: [
          { title: 'Gain de temps', desc: 'Ustensiles accessibles en 1 seconde.' },
          { title: 'Plan de travail dégagé', desc: 'Plus d\'espace utile pour cuisiner.' },
          { title: 'Zéro objet perdu', desc: 'Chaque ustensile a sa place.' },
          { title: 'Installation 2 sec', desc: 'Aucun outil, totalement réversible.' },
        ],
        urgenceTitle: 'Organisez votre cuisine dès aujourd\'hui',
        urgenceDesc: 'Imprimé à la commande dans notre atelier français. Expédition sous 48 à 72h.',
        ctaLabel: 'Organiser mes ustensiles',
      };

    case 'demouleur':
      return {
        ...common,
        eyebrow: 'Démouleur Thermomix',
        heroTitle: `Démoulage <highlight>facile, propre, sans gâchis</highlight>`,
        heroSubtitle: `Sortir la pâte du bol Thermomix sans en perdre la moitié sur les parois ni se brûler les doigts : un démouleur conçu pour épouser parfaitement la forme du bol.`,
        heroBullets: [
          'Récupère 100% de la pâte, sans gâchis',
          "Plus besoin d'y mettre les mains",
          'Compatible TM5, TM6 et TM7',
          'Fabriqué en France 🇫🇷 — PLA alimentaire',
        ],
        problemTitle: 'Démouler la pâte est toujours galère',
        problemDesc:
          "Avec une spatule classique, vous laissez de la pâte sur les parois, vous vous tachez les mains et vous perdez du temps.",
        problemPoints: [
          'Pâte qui reste collée aux parois',
          'Mains et plan de travail tachés',
          'Démoulage long et fastidieux',
          'Bol plus difficile à nettoyer ensuite',
        ],
        solutionTitle: 'Un démouleur pensé pour le bol Thermomix',
        solutionDesc: 'Sa forme épouse celle du bol : vous récupérez la totalité de la pâte en quelques secondes.',
        solutionSteps: [
          { title: 'Insérer', desc: 'Glissez le démouleur le long de la paroi.' },
          { title: 'Faire le tour', desc: 'Un tour complet et la pâte se détache.' },
          { title: 'Démouler', desc: 'Récupérez votre pâte en entier.' },
        ],
        avantCaption: 'Pâte qui reste collée, démoulage fastidieux.',
        apresCaption: 'Démoulage rapide, propre, sans perte.',
        beneficesTitle: "4 raisons d'adopter ce démouleur",
        benefices: [
          { title: 'Zéro gâchis', desc: 'Vous récupérez 100% de la pâte.' },
          { title: 'Mains propres', desc: "Plus besoin d'y mettre les doigts." },
          { title: 'Bol plus propre', desc: 'Nettoyage instantané ensuite.' },
          { title: 'Compatible TM5/6/7', desc: 'Une pièce pour tous les bols Thermomix.' },
        ],
        urgenceTitle: 'Démoulez sans effort dès aujourd\'hui',
        urgenceDesc: 'Imprimé à la commande dans notre atelier français. Expédition sous 48 à 72h.',
        ctaLabel: 'Adopter le démouleur',
      };

    case 'pack':
      return {
        ...common,
        eyebrow: 'Pack Thermomix',
        heroTitle: `Tout ce qu'il faut pour <highlight>optimiser votre Thermomix</highlight>`,
        heroSubtitle: `Une sélection complète de nos accessoires les plus utiles, réunis dans un pack à prix avantageux. Tout pour cuisiner mieux, ranger mieux, gagner du temps.`,
        heroBullets: [
          'Plusieurs accessoires complémentaires en un seul achat',
          'Économie immédiate vs. achat à l\'unité',
          'Cohérence visuelle (même finition, même couleur)',
          'Fabriqué en France 🇫🇷 — PLA premium',
        ],
        problemTitle: 'Acheter les accessoires un par un, c\'est long et plus cher',
        problemDesc:
          "Vous avez besoin de plusieurs accessoires Thermomix mais hésitez à tout commander d'un coup. Notre pack regroupe l'essentiel à prix réduit.",
        problemPoints: [
          'Multiples commandes = plusieurs frais de livraison',
          'Prix unitaire plus élevé',
          "Risque d'incohérence de couleurs/finitions",
          'Délai cumulé plus long',
        ],
        solutionTitle: 'Un pack pensé pour vous simplifier la vie',
        solutionDesc: 'Tout ce qu\'il faut, en une seule commande, à prix avantageux.',
        solutionSteps: [
          { title: 'Choisissez', desc: 'Le pack qui correspond à votre besoin.' },
          { title: 'Recevez', desc: 'Une seule livraison, tout regroupé.' },
          { title: 'Profitez', desc: 'Une cuisine optimisée immédiatement.' },
        ],
        avantCaption: 'Plusieurs achats séparés, plus chers et désordonnés.',
        apresCaption: 'Un pack cohérent, à prix avantageux.',
        beneficesTitle: '4 raisons d\'opter pour le pack',
        benefices: [
          { title: 'Prix avantageux', desc: 'Économie significative vs. à l\'unité.' },
          { title: 'Une seule livraison', desc: 'Frais de port mutualisés.' },
          { title: 'Cohérence visuelle', desc: 'Même finition pour tous les accessoires.' },
          { title: 'Tout en une fois', desc: 'Vous équipez votre Thermomix en une commande.' },
        ],
        urgenceTitle: 'Optimisez votre Thermomix dès aujourd\'hui',
        urgenceDesc: 'Pack imprimé à la commande dans notre atelier français. Expédition sous 48 à 72h.',
        ctaLabel: 'Commander le pack',
      };

    case 'rangement':
      return {
        ...common,
        eyebrow: 'Rangement Thermomix',
        heroTitle: `Une cuisine organisée, <highlight>une cuisine sereine</highlight>`,
        heroSubtitle: `Un rangement sur-mesure pour vos accessoires Thermomix. Tout est à sa place, vous gagnez du temps à chaque utilisation.`,
        heroBullets: [
          'Une place dédiée pour chaque accessoire',
          'Plan de travail libéré',
          `Compatible Thermomix ${model}`,
          'Fabriqué en France 🇫🇷 — PLA premium',
        ],
        problemTitle: 'Vos accessoires sont éparpillés',
        problemDesc:
          'Sans rangement dédié, les accessoires Thermomix s\'entassent et encombrent vos tiroirs.',
        problemPoints: [
          'Accessoires mélangés au reste de la vaisselle',
          'Temps perdu à chercher la bonne pièce',
          'Risque de casse ou de perte',
          'Tiroirs et plan de travail encombrés',
        ],
        solutionTitle: 'Un rangement pensé pour le Thermomix',
        solutionDesc: 'Chaque accessoire trouve sa place, immédiatement accessible.',
        solutionSteps: [
          { title: 'Installation', desc: 'Posez le rangement où vous voulez, sans outil.' },
          { title: 'Tout à sa place', desc: 'Chaque accessoire dispose de son emplacement.' },
          { title: 'Cuisine fluide', desc: 'Plus de frustration au quotidien.' },
        ],
        avantCaption: 'Tiroirs encombrés, accessoires mélangés.',
        apresCaption: 'Rangement clair, chaque pièce accessible.',
        beneficesTitle: '4 raisons d\'adopter ce rangement',
        benefices: [
          { title: 'Organisation parfaite', desc: 'Une place dédiée pour chaque accessoire.' },
          { title: 'Gain de temps', desc: 'Vous prenez ce qu\'il vous faut directement.' },
          { title: 'Protège vos accessoires', desc: 'Évite la casse et l\'usure.' },
          { title: 'Made in France', desc: 'PLA premium, atelier français.' },
        ],
        urgenceTitle: 'Organisez votre cuisine dès aujourd\'hui',
        urgenceDesc: 'Imprimé à la commande dans notre atelier français. Expédition sous 48 à 72h.',
        ctaLabel: 'Organiser ma cuisine',
      };

    default:
      return {
        ...common,
        eyebrow: `Accessoire Thermomix ${model}`,
        heroTitle: `${title} — <highlight>cuisinez plus efficacement</highlight>`,
        heroSubtitle: `Un accessoire imprimé en 3D, pensé pour rendre votre Thermomix ${model} encore plus pratique au quotidien.`,
        heroBullets: [
          'Conçu spécifiquement pour le Thermomix',
          'Installation immédiate, sans outil',
          `Ajustement précis ${model}`,
          'Fabriqué en France 🇫🇷 — PLA premium',
        ],
        problemTitle: 'Votre Thermomix mérite mieux',
        problemDesc:
          "Au quotidien, certains détails rendent l'utilisation du Thermomix moins agréable. Cet accessoire est là pour les régler simplement.",
        problemPoints: [
          'Petits gestes répétitifs et inconfortables',
          'Perte de temps en cuisine',
          "Manque d'organisation",
          "Accessoires d'origine peu pratiques",
        ],
        solutionTitle: 'Une amélioration simple et efficace',
        solutionDesc: 'Un accessoire malin, pensé par des passionnés de Thermomix.',
        solutionSteps: [
          { title: 'Mise en place', desc: 'Installation en quelques secondes, sans outil.' },
          { title: 'Utilisation', desc: 'Profitez immédiatement du gain de confort.' },
          { title: 'Tranquillité', desc: 'Conçu pour durer.' },
        ],
        avantCaption: 'Le quotidien sans cet accessoire : moins pratique.',
        apresCaption: 'Avec Thermo3D : un vrai gain de confort.',
        beneficesTitle: "4 raisons de l'adopter",
        benefices: [
          { title: 'Pratique au quotidien', desc: 'Vous gagnez du temps et du confort.' },
          { title: 'Ajustement précis', desc: `Conçu spécifiquement pour le ${model}.` },
          { title: 'Qualité premium', desc: 'PLA alimentaire, finition mate soignée.' },
          { title: 'Made in France', desc: 'Imprimé dans notre atelier français.' },
        ],
        urgenceTitle: 'Améliorez votre Thermomix dès aujourd\'hui',
        urgenceDesc: 'Imprimé à la commande. Expédition sous 48 à 72h.',
        ctaLabel: 'Ajouter au panier',
      };
  }
}

/**
 * Récupère le narratif d'un produit. Utilise la config explicite si disponible,
 * sinon résout via les alias, sinon fait un match par préfixe,
 * sinon génère un narratif via la sous-catégorie détectée.
 */
export function getProductNarrative(args: {
  handle: string;
  title: string;
  tags?: string[];
  image?: string;
  secondImage?: string;
}): ProductNarrative {
  const handle = args.handle.toLowerCase();

  // 1. Match exact dans la config explicite
  if (NARRATIVES[handle]) return NARRATIVES[handle];

  // 2. Résolution via alias
  const aliased = ALIASES[handle];
  if (aliased && NARRATIVES[aliased]) return NARRATIVES[aliased];

  // 3. Match par préfixe : ex. 'cache-balance-thermomix-tm7-version-petite' → 'cache-balance-tm7'
  for (const key of Object.keys(NARRATIVES)) {
    const stems = key.replace(/-thermomix/g, '').split('-').filter(Boolean);
    if (stems.length >= 2 && stems.every((s) => handle.includes(s))) {
      return NARRATIVES[key];
    }
  }

  // 4. Fallback : génération automatique par sous-catégorie
  return buildDefaultNarrative({
    handle,
    title: args.title,
    tags: args.tags,
    image: args.image || heroTm7,
    secondImage: args.secondImage,
  });
}

export function hasExplicitNarrative(handle?: string): boolean {
  if (!handle) return false;
  const h = handle.toLowerCase();
  return !!NARRATIVES[h] || !!ALIASES[h];
}
