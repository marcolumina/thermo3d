import heroTm7 from '@/assets/cache-ecran-tm7-hero.jpg';
import avantTm7 from '@/assets/cache-ecran-tm7-avant.jpg';
import apresTm7 from '@/assets/cache-ecran-tm7-apres.jpg';

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
};

/* ─── Détection de catégorie pour générer un narratif par défaut ─── */
type Category = 'rangement' | 'support' | 'cache' | 'accessoire';

function detectCategory(handle: string, title: string): Category {
  const s = `${handle} ${title}`.toLowerCase();
  if (/cache|protect|protec|cover/.test(s)) return 'cache';
  if (/support|stand|porte/.test(s)) return 'support';
  if (/rangement|organis|tiroir|boite|boîte/.test(s)) return 'rangement';
  return 'accessoire';
}

function detectModel(handle: string, title: string, tags: string[] = []): 'TM5' | 'TM6' | 'TM7' | 'Thermomix' {
  const s = `${handle} ${title} ${tags.join(' ')}`.toLowerCase();
  if (/tm7/.test(s)) return 'TM7';
  if (/tm6/.test(s)) return 'TM6';
  if (/tm5/.test(s)) return 'TM5';
  return 'Thermomix';
}

/* ─── Narratifs génériques par catégorie ─── */
function buildDefaultNarrative(args: {
  title: string;
  handle: string;
  tags?: string[];
  image: string;
  secondImage?: string;
}): ProductNarrative {
  const { title, handle, tags = [], image, secondImage } = args;
  const category = detectCategory(handle, title);
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

  switch (category) {
    case 'cache':
      return {
        ...common,
        eyebrow: `Spécialement conçu pour le ${model}`,
        heroTitle: `Gardez votre ${model} <highlight>comme neuf, jour après jour</highlight>`,
        heroSubtitle: `Une protection sur-mesure pour préserver votre Thermomix entre deux utilisations. Pose et retrait en 2 secondes, sans outil.`,
        infoBanner: 'À poser après utilisation, à retirer avant cuisson.',
        heroBullets: [
          'Protège votre Thermomix entre les utilisations',
          'Se pose en 2 secondes, sans outil ni colle',
          `Ajustement précis dédié au ${model}`,
          'Fabriqué en France 🇫🇷 — PLA premium',
        ],
        problemTitle: 'Votre Thermomix est exposé en permanence',
        problemDesc:
          'Sur le plan de travail, votre Thermomix subit projections, vapeur et traces de doigts. Sans protection, il perd son aspect neuf en quelques mois.',
        problemPoints: [
          "Projections lors d'autres préparations",
          'Poussières et particules au quotidien',
          'Traces de doigts et nettoyages répétés',
          "Perte de l'aspect neuf et de la valeur de revente",
        ],
        solutionTitle: 'Une protection simple, un Thermomix qui reste neuf',
        solutionDesc: 'Posez après cuisson, retirez avant utilisation. C\'est tout.',
        solutionSteps: [
          { title: 'Pose en 2 secondes', desc: "Après cuisson, vous posez la protection. Elle s'aligne toute seule." },
          { title: 'Protection au repos', desc: "Votre Thermomix est à l'abri des agressions du quotidien." },
          { title: 'Retrait avant usage', desc: "D'un geste, vous retirez la protection avant la prochaine recette." },
        ],
        avantCaption: 'Exposé en permanence aux projections et à la poussière.',
        apresCaption: 'À l\'abri entre les utilisations, comme neuf dans le temps.',
        beneficesTitle: `4 raisons de protéger votre ${model}`,
        benefices: [
          { title: 'Protégé au repos', desc: 'Plus de projections ni de poussières directement sur la zone sensible.' },
          { title: 'Évite traces & rayures', desc: 'Fini les traces grasses et les micro-rayures du nettoyage.' },
          { title: 'Comme neuf dans le temps', desc: "Préserve l'aspect d'origine et la valeur de revente." },
          { title: 'Pose & retrait en 2 sec', desc: 'Aucune contrainte au quotidien, totalement réversible.' },
        ],
        urgenceTitle: `Protégez votre ${model} dès aujourd'hui`,
        urgenceDesc:
          'Chaque pièce est imprimée à la commande dans notre atelier en France. Commandez maintenant pour recevoir sous 48 à 72h.',
        ctaLabel: 'Protéger mon Thermomix',
      };

    case 'support':
      return {
        ...common,
        eyebrow: `Pour Thermomix ${model}`,
        heroTitle: `Tout à portée de main, <highlight>cuisinez sans interruption</highlight>`,
        heroSubtitle: `Un support pensé pour votre Thermomix : vos accessoires sont prêts en 1 seconde, sans fouiller dans les tiroirs ni encombrer le plan de travail.`,
        heroBullets: [
          'Accessoires accessibles en 1 seconde',
          'Plan de travail dégagé et organisé',
          `Ajustement précis pour le ${model}`,
          'Fabriqué en France 🇫🇷 — PLA premium',
        ],
        problemTitle: 'Vos accessoires Thermomix prennent trop de place',
        problemDesc:
          "Spatule, gobelet doseur, fouet… vous les cherchez à chaque recette, ils traînent ou prennent un tiroir entier. Résultat : du temps perdu et un plan de travail encombré.",
        problemPoints: [
          'Accessoires éparpillés dans plusieurs tiroirs',
          'Temps perdu à chaque recette',
          'Plan de travail encombré',
          'Risque de perte ou de casse',
        ],
        solutionTitle: 'Un seul support, tout à portée de main',
        solutionDesc: 'Posez le support, rangez vos accessoires : votre Thermomix devient une vraie station de cuisine organisée.',
        solutionSteps: [
          { title: 'Mise en place', desc: 'Posez le support à côté ou sur le Thermomix, sans outil.' },
          { title: 'Rangement immédiat', desc: 'Chaque accessoire trouve sa place, en un geste.' },
          { title: 'Cuisine fluide', desc: 'Vous prenez ce qu\'il vous faut sans interrompre votre recette.' },
        ],
        avantCaption: 'Accessoires éparpillés, plan de travail encombré.',
        apresCaption: 'Tout à sa place, prêt à l\'emploi en un geste.',
        beneficesTitle: `4 raisons d'adopter ce support`,
        benefices: [
          { title: 'Gain de temps', desc: 'Vos accessoires sont accessibles instantanément.' },
          { title: 'Plan de travail dégagé', desc: 'Plus d\'espace utile pour cuisiner.' },
          { title: `Ajustement ${model}`, desc: `Conçu spécifiquement pour le ${model}, au dixième de mm.` },
          { title: 'Installation 2 sec', desc: 'Aucun outil, aucun perçage, totalement réversible.' },
        ],
        urgenceTitle: 'Organisez votre cuisine dès aujourd\'hui',
        urgenceDesc:
          'Pièces imprimées à la commande dans notre atelier français. Commandez maintenant pour recevoir sous 48 à 72h.',
        ctaLabel: 'Organiser mon Thermomix',
      };

    case 'rangement':
      return {
        ...common,
        eyebrow: 'Rangement Thermomix',
        heroTitle: `Une cuisine organisée, <highlight>une cuisine sereine</highlight>`,
        heroSubtitle: `Un rangement sur-mesure pour vos accessoires Thermomix. Tout est à sa place, rien ne traîne, vous gagnez du temps à chaque utilisation.`,
        heroBullets: [
          'Une place dédiée pour chaque accessoire',
          'Plan de travail libéré',
          `Compatible Thermomix ${model}`,
          'Fabriqué en France 🇫🇷 — PLA premium',
        ],
        problemTitle: 'Vos accessoires sont éparpillés',
        problemDesc:
          'Sans rangement dédié, les accessoires Thermomix s\'entassent, se perdent et encombrent vos tiroirs. Vous perdez du temps à chaque recette.',
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
          { title: 'Tout à sa place', desc: 'Chaque accessoire dispose de son emplacement dédié.' },
          { title: 'Cuisine fluide', desc: 'Vous gagnez du temps à chaque recette, sans frustration.' },
        ],
        avantCaption: 'Tiroirs encombrés, accessoires mélangés.',
        apresCaption: 'Rangement clair, chaque pièce immédiatement accessible.',
        beneficesTitle: '4 raisons d\'adopter ce rangement',
        benefices: [
          { title: 'Organisation parfaite', desc: 'Une place dédiée et visible pour chaque accessoire.' },
          { title: 'Gain de temps', desc: 'Plus de recherche, vous prenez ce qu\'il vous faut directement.' },
          { title: 'Protège vos accessoires', desc: 'Évite la casse et l\'usure prématurée.' },
          { title: 'Made in France', desc: 'PLA premium imprimé dans notre atelier français.' },
        ],
        urgenceTitle: 'Organisez votre cuisine dès aujourd\'hui',
        urgenceDesc:
          'Pièces imprimées à la commande. Commandez maintenant pour recevoir sous 48 à 72h.',
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
          'Au quotidien, certains détails rendent l\'utilisation du Thermomix moins agréable. Cet accessoire est là pour les régler simplement.',
        problemPoints: [
          'Petits gestes répétitifs et inconfortables',
          'Perte de temps en cuisine',
          'Manque d\'organisation',
          'Accessoires d\'origine peu pratiques',
        ],
        solutionTitle: 'Une amélioration simple et efficace',
        solutionDesc: 'Un accessoire malin, pensé par des passionnés de Thermomix, pour vous simplifier la vie.',
        solutionSteps: [
          { title: 'Mise en place', desc: 'Installation en quelques secondes, sans outil.' },
          { title: 'Utilisation', desc: 'Profitez immédiatement du gain de confort au quotidien.' },
          { title: 'Tranquillité', desc: 'Conçu pour durer et résister à un usage intensif.' },
        ],
        avantCaption: 'Le quotidien sans cet accessoire : moins pratique.',
        apresCaption: 'Avec Thermo3D : un vrai gain de confort.',
        beneficesTitle: '4 raisons de l\'adopter',
        benefices: [
          { title: 'Pratique au quotidien', desc: 'Vous gagnez du temps et du confort à chaque utilisation.' },
          { title: 'Ajustement précis', desc: `Conçu spécifiquement pour le ${model}.` },
          { title: 'Qualité premium', desc: 'PLA alimentaire, finition mate soignée.' },
          { title: 'Made in France', desc: 'Imprimé dans notre atelier français.' },
        ],
        urgenceTitle: 'Améliorez votre Thermomix dès aujourd\'hui',
        urgenceDesc:
          'Pièces imprimées à la commande. Commandez maintenant pour recevoir sous 48 à 72h.',
        ctaLabel: 'Ajouter au panier',
      };
  }
}

/**
 * Récupère le narratif d'un produit. Utilise la config explicite si disponible,
 * sinon génère un narratif cohérent à partir du handle, du titre et des tags.
 */
export function getProductNarrative(args: {
  handle: string;
  title: string;
  tags?: string[];
  image?: string;
  secondImage?: string;
}): ProductNarrative {
  const explicit = NARRATIVES[args.handle.toLowerCase()];
  if (explicit) return explicit;
  return buildDefaultNarrative({
    handle: args.handle,
    title: args.title,
    tags: args.tags,
    image: args.image || heroTm7,
    secondImage: args.secondImage,
  });
}

export function hasExplicitNarrative(handle?: string): boolean {
  if (!handle) return false;
  return !!NARRATIVES[handle.toLowerCase()];
}
