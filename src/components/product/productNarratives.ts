import heroTm7 from '@/assets/cache-ecran-tm7-hero.jpg';
import heroSupportUstensilesTm7 from '@/assets/support-ustensiles-tm7-hero.jpg';
import heroSupportUstensilesTm7Grande from '@/assets/support-ustensiles-tm7-grande-hero.jpg';
import heroOrganiseurTm7 from '@/assets/organiseur-tm7-hero.jpg';
import heroOrganisateurSupportCouvercleTm7 from '@/assets/organisateur-support-couvercle-tm7-hero.jpg';
import heroSupportSpatuleTm7 from '@/assets/support-spatule-tm7-hero.jpg';
import heroSupportCouvercleTm7 from '@/assets/support-couvercle-tm7-hero.jpg';
import avantTm7 from '@/assets/cache-ecran-tm7-avant.jpg';
import apresTm7 from '@/assets/cache-ecran-tm7-apres.jpg';
import persoSophie from '@/assets/cache-ecran-tm7-perso-sophie.jpg';
import persoMamie from '@/assets/cache-ecran-tm7-perso-mamie.jpg';
import persoJulien from '@/assets/cache-ecran-tm7-perso-julien.jpg';
import persoTonTexte from '@/assets/cache-ecran-tm7-perso-tontexte.jpg';

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

  /** ─── Sections optionnelles dédiées aux produits personnalisables ─── */
  /** Bloc galerie de personnalisations (ex : caches avec prénoms différents) */
  personalisationGallery?: {
    title: string;
    subtitle: string;
    examples: { image: string; label: string; alt: string }[];
  };
  /** Bloc émotion / projection */
  emotion?: {
    title: string;
    desc: string;
    image?: string;
  };
  /** Bloc idée cadeau */
  cadeau?: {
    title: string;
    desc: string;
    occasions: { emoji: string; label: string }[];
  };
}

/* ─── Configuration explicite par handle ─── */
const NARRATIVES: Record<string, ProductNarrative> = {
  'cache-ecran-tm7': {
    eyebrow: '✨ Personnalisation gratuite incluse',
    heroTitle: "Ajoutez votre prénom <highlight>sur votre Thermomix</highlight>",
    heroSubtitle:
      "Un cache écran personnalisé qui protège et rend votre Thermomix unique. Votre texte gravé en relief, imprimé à la commande dans notre atelier français.",
    infoBanner: '✨ Personnalisation gratuite — jusqu\'à 20 caractères gravés en relief.',
    heroBullets: [
      'Votre prénom ou message gravé en relief — un cache unique',
      'Un Thermomix qui ne ressemble à aucun autre',
      "Protège l'écran des projections, traces et rayures",
      'Pose et retrait en 2 secondes, sans outil',
    ],
    problemTitle: "Tous les Thermomix se ressemblent. Et pourtant, vous l'utilisez tous les jours.",
    problemDesc:
      "Votre Thermomix est identique à des millions d'autres. Aucune touche personnelle. Et son écran s'expose chaque jour aux projections, à la vapeur et aux traces de doigts.",
    problemPoints: [
      "Un appareil impersonnel, identique à tous les autres",
      "Écran sale après chaque utilisation",
      "Projections, vapeur et traces grasses au quotidien",
      "Aucune touche personnelle dans votre cuisine",
    ],
    solutionTitle: 'Un cache créé uniquement pour vous — avec votre texte',
    solutionDesc:
      "Choisissez votre texte, on le grave en relief, on l'imprime à la commande. Vous recevez un cache fait pour vous — pas pour tout le monde.",
    solutionSteps: [
      { title: '1. Écrivez votre texte', desc: "Prénom, surnom ou expression : « Sophie », « Chez Mamie », « La cuisine de Julien »… jusqu'à 20 caractères." },
      { title: '2. On l\'imprime pour vous', desc: "Votre cache est imprimé en 3D dans notre atelier français, avec votre texte gravé en relief." },
      { title: '3. Pose en 2 secondes', desc: "Vous posez le cache sur l'écran après cuisson. Aucun outil, aucune colle." },
    ],
    avantLabel: 'Sans cache',
    apresLabel: 'Avec votre prénom',
    avantCaption: "Écran exposé, appareil impersonnel — un Thermomix comme un autre.",
    apresCaption: "Écran protégé, votre prénom gravé — votre Thermomix unique.",
    beneficesTitle: 'Pourquoi vous ne pourrez plus vous en passer',
    benefices: [
      { title: 'Rend votre Thermomix unique', desc: "Votre prénom gravé en relief : un cache qui n'appartient qu'à vous." },
      { title: "Protège l'écran", desc: "Préserve l'écran des projections, de la vapeur et des traces du quotidien." },
      { title: 'Évite les traces', desc: "Plus de marques de doigts ni de micro-rayures dues au nettoyage." },
      { title: 'Installation 2 secondes', desc: "Aucun outil, aucune colle. Vous posez, c'est prêt." },
      { title: 'Fabriqué en France 🇫🇷', desc: "Imprimé à la commande dans notre atelier en Corse, en PLA premium." },
    ],
    urgenceTitle: 'Créez votre cache personnalisé maintenant',
    urgenceDesc:
      "Production à la commande avec votre texte — expédié sous 48h. Commandez aujourd'hui, recevez votre cache unique cette semaine.",
    ctaLabel: 'Créer mon cache personnalisé',
    heroImage: persoTonTexte,
    avantImage: avantTm7,
    apresImage: persoJulien,

    personalisationGallery: {
      title: '🔥 Plus de 1000 Thermomix déjà personnalisés',
      subtitle: 'Quelques exemples de caches imprimés pour nos clients. Le prochain pourrait être le vôtre.',
      examples: [
        { image: persoTonTexte, label: '"Ton texte ici"', alt: 'Cache écran TM7 personnalisable, exemple de texte gravé en relief' },
        { image: persoSophie, label: '"Sophie"', alt: 'Cache écran TM7 personnalisé prénom Sophie' },
        { image: persoMamie, label: '"Chez Mamie"', alt: 'Cache écran TM7 personnalisé Chez Mamie' },
        { image: persoJulien, label: '"La cuisine de Julien"', alt: 'Cache écran TM7 personnalisé vert sauge' },
      ],
    },

    emotion: {
      title: 'Ce n\'est plus juste un Thermomix. C\'est le vôtre.',
      desc: "Avec votre prénom. Votre style. Un détail simple… qui change tout dans votre cuisine.\n\n✨ Ajoutez votre texte en quelques secondes.",
      image: persoSophie,
    },

    cadeau: {
      title: 'Une idée cadeau vraiment originale',
      desc: "Offrir un cache personnalisé, c'est offrir bien plus qu'un accessoire : c'est une attention unique pour quelqu'un qui aime cuisiner. Personnalisé à son prénom, fabriqué à la main, livré dans un emballage soigné.",
      occasions: [
        { emoji: '🎂', label: 'Anniversaire' },
        { emoji: '💐', label: 'Fête des mères' },
        { emoji: '🎁', label: 'Noël' },
        { emoji: '👩‍🍳', label: 'Passionnés de cuisine' },
        { emoji: '💍', label: 'Mariage' },
      ],
    },
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
    eyebrow: '✨ Un accessoire simple qui change tout',
    heroTitle: "Ce n'est pas juste une balance. <highlight>C'est la précision de votre Thermomix.</highlight>",
    heroSubtitle:
      "Protégez-la des chocs, des liquides et des erreurs du quotidien. Un cache discret qui préserve sa précision recette après recette.",
    infoBanner: '✨ Un accessoire simple qui change tout dans votre cuisine',
    heroBullets: [
      "Protège des éclaboussures, chocs et résidus",
      "Évite les erreurs de pesée dans le temps",
      "Pose et retrait en 2 secondes, sans outil",
      'Ajustement précis dédié au TM7',
    ],
    problemTitle: "La balance reste exposée entre chaque utilisation",
    problemDesc:
      "Vous ne la voyez pas toujours. Mais vous l'utilisez à chaque recette. Et pourtant, elle reste exposée — un détail invisible… jusqu'au jour où ça ne fonctionne plus.",
    problemPoints: [
      "Liquides renversés sur la zone de pesée",
      "Chocs des ustensiles posés dessus",
      "Résidus difficiles à nettoyer",
      "Perte de précision dans le temps",
    ],
    solutionTitle: 'Un cache conçu pour protéger sans effort',
    solutionDesc: "Posez-le après chaque utilisation. Retirez-le avant de peser. Votre balance reste propre, précise et comme neuve.",
    solutionSteps: [
      { title: '1. Pose en 2 secondes', desc: 'Le cache se positionne tout seul sur la zone de pesée.' },
      { title: '2. Protection permanente', desc: 'Liquides, chocs et résidus restent à la surface du cache.' },
      { title: '3. Retrait avant pesée', desc: "Un geste pour retrouver une balance précise et impeccable." },
    ],
    avantLabel: 'Avant',
    apresLabel: 'Après',
    avantCaption: "Balance exposée, sale, imprécise.",
    apresCaption: "Balance protégée, propre, fiable.",
    beneficesTitle: 'Pourquoi vous ne pourrez plus vous en passer',
    benefices: [
      { title: 'Protège des éclaboussures et chocs', desc: 'La zone de pesée ne reçoit plus rien — ni liquide, ni ustensile.' },
      { title: 'Évite les erreurs de pesée', desc: 'Votre balance garde sa précision d\'origine, recette après recette.' },
      { title: 'Nettoyage ultra rapide', desc: 'Surface lisse, un coup d\'éponge et c\'est fini.' },
      { title: 'Installation en 2 secondes', desc: 'Aucun outil, aucune colle. Vous posez, c\'est prêt.' },
      { title: 'Ajustement parfait TM7', desc: 'Modélisé spécifiquement pour la balance du TM7, au dixième de mm.' },
    ],
    urgenceTitle: 'Protégez votre balance TM7 maintenant',
    urgenceDesc:
      "Un petit accessoire qui évite de gros problèmes. Production à la commande dans notre atelier français — expédié sous 48h.",
    ctaLabel: 'Protéger ma balance',
    heroImage: heroTm7,
    avantImage: avantTm7,
    apresImage: apresTm7,

    emotion: {
      title: 'Cuisinez sans vous poser de questions',
      desc: "Plus besoin de faire attention.\nVotre balance est protégée en permanence.\n\n✨ Un détail invisible qui change tout au quotidien.",
    },
  },

  /* ───── Organiseur / Organisateur TM7 ───── */
  'organiseur-thermomix-tm7': {
    eyebrow: '✨ Un espace optimisé, sans compromis',
    heroTitle: "Votre cuisine est <highlight>déjà assez encombrée</highlight>",
    heroSubtitle:
      "Rangez vos accessoires Thermomix sans rien ajouter sur votre plan de travail. Un organisateur discret qui libère de l'espace et simplifie chaque recette.",
    infoBanner: '✨ Un espace optimisé, sans compromis',
    heroBullets: [
      "Tous vos accessoires rangés au même endroit",
      "Plan de travail enfin dégagé",
      "Accès rapide, sans rien chercher",
      "Design discret, parfaitement intégré",
    ],
    problemTitle: "Vos accessoires prennent plus de place que prévu",
    problemDesc:
      "Des accessoires posés partout. Des tiroirs mal organisés. Un plan de travail encombré. Et pourtant, vous utilisez toujours les mêmes.",
    problemPoints: [
      "Ustensiles dispersés un peu partout",
      "Accessoires difficiles à ranger",
      "Plan de travail encombré au quotidien",
      "Perte de temps à chercher avant chaque recette",
    ],
    solutionTitle: 'Un organisateur discret qui change tout',
    solutionDesc:
      "Un tiroir intégré pour tout ranger. Invisible quand vous cuisinez. Accessible quand vous en avez besoin.",
    solutionSteps: [
      { title: '1. Installation', desc: "Mise en place en quelques secondes, sans outil ni perçage." },
      { title: '2. Rangement immédiat', desc: 'Chaque accessoire trouve sa place dédiée.' },
      { title: '3. Espace libéré', desc: "Votre plan de travail respire, votre cuisine aussi." },
    ],
    avantLabel: 'Avant',
    apresLabel: 'Après',
    avantCaption: "Accessoires visibles, cuisine encombrée.",
    apresCaption: "Tout est rangé, espace libéré.",
    beneficesTitle: 'Pourquoi vous ne pourrez plus vous en passer',
    benefices: [
      { title: 'Gain de place immédiat', desc: 'Votre plan de travail respire enfin.' },
      { title: 'Tout au même endroit', desc: 'Plus rien ne traîne — chaque accessoire à sa place.' },
      { title: 'Accès rapide', desc: 'Vous attrapez ce qu\'il vous faut en 1 seconde.' },
      { title: 'Cuisine plus propre', desc: 'Moins d\'objets visibles, moins de désordre.' },
      { title: 'Design discret', desc: 'Parfaitement intégré à côté de votre Thermomix.' },
    ],
    urgenceTitle: 'Optimisez votre espace dès aujourd\'hui',
    urgenceDesc:
      "Un simple tiroir qui change toute votre organisation. Production à la commande dans notre atelier français — expédié sous 48h.",
    ctaLabel: 'Optimiser mon espace',
    heroImage: heroOrganiseurTm7,
    avantImage: avantTm7,
    apresImage: apresTm7,

    emotion: {
      title: 'Une cuisine plus fluide, sans effort',
      desc: "Moins d'objets visibles.\nMoins de désordre.\nPlus de plaisir à cuisiner.\n\n✨ Un détail qui change tout au quotidien.",
    },
  },

  /* ───── Organisateur TM7 avec support couvercle ───── */
  'organisateur-thermomix-tm7-avec-support-couvercle': {
    eyebrow: '✨ Plus de désordre, plus de stress en cuisine',
    heroTitle: "Vous ne savez jamais <highlight>où poser le couvercle</highlight>",
    heroSubtitle:
      "Organisez vos accessoires et gardez votre plan de travail propre pendant la cuisson. Un seul geste, tout reste à sa place.",
    infoBanner: '✨ Plus de désordre, plus de stress en cuisine',
    heroBullets: [
      "Un support dédié pour le couvercle, posé en 1 geste",
      "Plus de gouttes ni de taches sur le plan de travail",
      "Tous vos accessoires au même endroit",
      "Gain de temps à chaque recette",
    ],
    problemTitle: "Le couvercle devient vite un problème",
    problemDesc:
      "Vous ouvrez le Thermomix. Vous posez le couvercle. Puis vous ne savez plus où le mettre. Et pendant ce temps… tout s'accumule autour.",
    problemPoints: [
      "Liquide qui coule sur le plan de travail",
      "Couvercle posé n'importe où",
      "Accessoires dispersés autour du Thermomix",
      "Cuisine désorganisée pendant la recette",
    ],
    solutionTitle: 'Un organisateur pensé pour cuisiner sans contrainte',
    solutionDesc:
      "Posez votre couvercle directement sur son support. Rangez vos accessoires au même endroit. Tout reste propre, accessible et organisé.",
    solutionSteps: [
      { title: '1. Mise en place', desc: 'Posez l\'organisateur à côté du TM7, sans outil.' },
      { title: '2. Couvercle à sa place', desc: 'Plus aucune goutte sur le plan de travail.' },
      { title: '3. Tout à portée', desc: 'Vos accessoires accessibles en 1 seconde.' },
    ],
    avantLabel: 'Avant',
    apresLabel: 'Après',
    avantCaption: "Couvercle posé au hasard, cuisine désordonnée.",
    apresCaption: "Tout est organisé, propre et accessible.",
    beneficesTitle: 'Pourquoi vous ne pourrez plus vous en passer',
    benefices: [
      { title: 'Support dédié pour le couvercle', desc: 'Une vraie place, propre, à portée.' },
      { title: 'Plan de travail propre', desc: 'Plus de gouttes, plus de taches à nettoyer.' },
      { title: 'Tous vos accessoires au même endroit', desc: 'Plus rien ne traîne autour du Thermomix.' },
      { title: 'Gain de temps à chaque recette', desc: 'Vous attrapez ce qu\'il faut en 1 seconde.' },
      { title: 'Design compact et intégré', desc: 'Parfaitement pensé pour s\'intégrer à votre cuisine.' },
    ],
    urgenceTitle: 'Organisez votre Thermomix maintenant',
    urgenceDesc:
      "Un simple accessoire qui change votre confort en cuisine. Production à la commande dans notre atelier français — expédié sous 48h.",
    ctaLabel: 'Organiser mon Thermomix',
    heroImage: heroOrganisateurSupportCouvercleTm7,
    avantImage: avantTm7,
    apresImage: apresTm7,

    emotion: {
      title: 'Cuisinez sans interruption',
      desc: "Plus besoin de réfléchir où poser quoi.\nTout est à sa place, dès que vous en avez besoin.\n\n✨ Chaque pièce est imprimée pour vous — aucun stock générique.",
    },
  },

  /* ───── Support couvercle TM7 ───── */
  'support-couvercle-thermomix-tm7': {
    eyebrow: '✨ Un petit accessoire qui change tout dans votre cuisine',
    heroTitle: "Vous ne savez jamais <highlight>où poser le couvercle</highlight>",
    heroSubtitle:
      "Gardez votre plan de travail propre pendant toute la cuisson. Un seul geste, plus aucune goutte.",
    infoBanner: '✨ Un petit accessoire qui change tout dans votre cuisine',
    heroBullets: [
      "Une vraie place dédiée pour le couvercle",
      "Plan de travail propre, zéro goutte",
      "Plus aucun nettoyage après la cuisson",
      "Utilisation immédiate, sans outil",
    ],
    problemTitle: "Le couvercle devient vite un problème",
    problemDesc:
      "Vous ouvrez le Thermomix. Vous posez le couvercle. Et ça coule. Encore… et encore.",
    problemPoints: [
      "Liquide qui coule sur le plan de travail",
      "Couvercle posé n'importe où",
      "Nettoyage constant après chaque recette",
      "Gêne pendant la recette",
    ],
    solutionTitle: 'Un support simple pour garder votre cuisine propre',
    solutionDesc:
      "Posez votre couvercle directement sur son support. Les gouttes ne salissent plus. Votre espace reste propre.",
    solutionSteps: [
      { title: '1. Installation', desc: 'Posez le support à côté du TM7, sans outil.' },
      { title: '2. Couvercle à sa place', desc: "À chaque ouverture, déposez-le proprement dessus." },
      { title: '3. Plan de travail propre', desc: 'Les gouttes sont contenues, vous ne nettoyez plus.' },
    ],
    avantLabel: 'Avant',
    apresLabel: 'Après',
    avantCaption: "Couvercle posé partout, plan de travail sale.",
    apresCaption: "Couvercle à sa place, cuisine propre.",
    beneficesTitle: 'Pourquoi vous ne pourrez plus vous en passer',
    benefices: [
      { title: 'Évite les salissures', desc: 'Plus aucune goutte sur le plan de travail.' },
      { title: 'Garde le plan de travail propre', desc: 'Votre cuisine reste impeccable, sans effort.' },
      { title: "Libère de l'espace pendant la cuisson", desc: 'Une vraie place dédiée, plus rien ne traîne.' },
      { title: 'Utilisation immédiate', desc: "Aucun outil, aucune contrainte. Vous posez, c'est prêt." },
      { title: 'Design discret et intégré', desc: 'Parfaitement pensé pour s\'intégrer à côté du TM7.' },
    ],
    urgenceTitle: 'Gardez votre cuisine propre maintenant',
    urgenceDesc:
      "Un petit accessoire qui évite beaucoup de nettoyage. Production à la commande dans notre atelier français — expédié sous 48h.",
    ctaLabel: 'Garder mon plan de travail propre',
    heroImage: heroSupportCouvercleTm7,
    avantImage: avantTm7,
    apresImage: apresTm7,

    emotion: {
      title: 'Cuisinez sans contrainte',
      desc: "Plus besoin de réfléchir où poser votre couvercle.\nTout reste propre, sans effort.\n\n✨ Chaque pièce est imprimée pour vous — aucun stock générique.",
    },
  },

  /* ───── Support spatule TM7 ───── */
  'support-spatule-thermomix-tm7': {
    eyebrow: '✨ Un détail simple qui change votre quotidien en cuisine',
    heroTitle: "Votre spatule <highlight>n'a jamais vraiment sa place</highlight>",
    heroSubtitle:
      "Gardez-la propre, accessible et toujours à portée de main pendant vos recettes.",
    infoBanner: '✨ Un détail simple qui change votre quotidien en cuisine',
    heroBullets: [
      "Spatule toujours propre, prête à l'emploi",
      "À portée de main à chaque instant",
      "Plus de traces sur le plan de travail",
      "Installation instantanée, sans outil",
    ],
    problemTitle: "La spatule devient vite un problème",
    problemDesc:
      "Vous remuez. Vous posez la spatule. Puis elle salit votre plan de travail. Encore… et encore.",
    problemPoints: [
      "Spatule posée directement sur le plan de travail",
      "Traces de sauce et résidus partout",
      "Nettoyage constant après chaque recette",
      "Perte de temps pendant la cuisson",
    ],
    solutionTitle: 'Un support simple pour garder votre spatule propre',
    solutionDesc:
      "Posez-la directement sur son support. Plus de saleté. Plus de perte de temps. Juste une cuisine plus fluide.",
    solutionSteps: [
      { title: '1. Installation', desc: 'Posez le support à côté du TM7, sans outil.' },
      { title: '2. Spatule à sa place', desc: 'Glissez-la sur son support après chaque utilisation.' },
      { title: '3. Toujours prête', desc: "Vous l'attrapez en 1 seconde, propre et accessible." },
    ],
    avantLabel: 'Avant',
    apresLabel: 'Après',
    avantCaption: "Spatule posée partout, plan de travail sale.",
    apresCaption: "Spatule propre, toujours à sa place.",
    beneficesTitle: 'Pourquoi vous ne pourrez plus vous en passer',
    benefices: [
      { title: 'Spatule toujours propre', desc: "Elle ne touche plus le plan de travail." },
      { title: 'À portée de main', desc: 'Accessible en 1 seconde, sans la chercher.' },
      { title: 'Évite les traces', desc: 'Plus de sauce qui coule sur le plan de travail.' },
      { title: 'Gain de temps', desc: 'Plus de recette interrompue pour nettoyer.' },
      { title: 'Installation instantanée', desc: "Aucun outil, aucune contrainte. Vous posez, c'est prêt." },
    ],
    urgenceTitle: 'Organisez votre spatule maintenant',
    urgenceDesc:
      "Un petit accessoire qui fait toute la différence. Production à la commande dans notre atelier français — expédié sous 48h.",
    ctaLabel: 'Organiser ma spatule',
    heroImage: heroSupportSpatuleTm7,
    avantImage: avantTm7,
    apresImage: apresTm7,

    emotion: {
      title: 'Cuisinez sans interruption',
      desc: "Plus besoin de réfléchir où poser votre spatule.\nElle est toujours exactement là où vous en avez besoin.\n\n✨ Chaque pièce est imprimée pour vous — aucun stock générique.",
    },
  },

  /* ───── Support ustensiles TM7 / TM6 (générique) ───── */
  'support-ustensiles-thermomix-tm7': {
    eyebrow: '✨ Un petit accessoire qui change votre façon de cuisiner',
    heroTitle: "Arrêtez de chercher vos ustensiles <highlight>à chaque recette</highlight>",
    heroSubtitle:
      "Gardez tout à portée de main, proprement organisé autour de votre Thermomix. Un détail simple… qui change votre quotidien.",
    infoBanner: '✨ Un petit accessoire qui change votre façon de cuisiner',
    heroBullets: [
      "Tous vos ustensiles à portée de main",
      "Plan de travail enfin dégagé",
      "Gain de temps à chaque recette",
      "Installation en quelques secondes, sans outil",
    ],
    problemTitle: "Vos ustensiles n'ont jamais vraiment leur place",
    problemDesc:
      "Vous cuisinez. Vous posez la spatule. Puis vous la cherchez. Encore. Un détail… qui devient vite agaçant au quotidien.",
    problemPoints: [
      "Spatule posée n'importe où",
      "Fouet difficile à retrouver",
      "Plan de travail encombré",
      "Perte de temps à chaque recette",
    ],
    solutionTitle: 'Un support simple pour tout garder à portée de main',
    solutionDesc: "Chaque ustensile a sa place. Plus besoin de chercher. Votre espace reste propre et organisé.",
    solutionSteps: [
      { title: '1. Installation', desc: "Posez le support à côté de votre Thermomix, sans outil." },
      { title: '2. Rangement immédiat', desc: 'Chaque ustensile trouve sa place dédiée.' },
      { title: '3. Cuisine fluide', desc: "Vous prenez ce qu'il vous faut sans interrompre la recette." },
    ],
    avantLabel: 'Avant',
    apresLabel: 'Après',
    avantCaption: "Ustensiles dispersés, cuisine désorganisée.",
    apresCaption: "Tout est à sa place, accessible instantanément.",
    beneficesTitle: 'Pourquoi vous ne pourrez plus vous en passer',
    benefices: [
      { title: 'Tout à portée de main', desc: 'Vos ustensiles sont accessibles en 1 seconde.' },
      { title: 'Gain de temps', desc: 'Plus de recette interrompue pour aller chercher un ustensile.' },
      { title: 'Plan de travail propre', desc: 'Fini le désordre — votre cuisine reste ordonnée.' },
      { title: 'Installation 2 sec', desc: "Aucun outil, aucune contrainte. Vous posez, c'est prêt." },
      { title: 'Design discret', desc: 'Parfaitement intégré à côté de votre Thermomix.' },
    ],
    urgenceTitle: 'Organisez votre Thermomix maintenant',
    urgenceDesc:
      "Un petit changement qui fait une grande différence. Production à la commande dans notre atelier français — expédié sous 48h.",
    ctaLabel: 'Organiser mon Thermomix',
    heroImage: heroSupportUstensilesTm7,
    avantImage: avantTm7,
    apresImage: apresTm7,

    emotion: {
      title: 'Cuisinez avec fluidité',
      desc: "Plus besoin de chercher, de déplacer ou de nettoyer en permanence.\nTout est là, exactement où vous en avez besoin.\n\n✨ Une cuisine plus simple, plus agréable, au quotidien.",
    },
  },

  /* ───── Support ustensiles TM7 — version grande ───── */
  'support-ustensiles-thermomix-tm7-grande': {
    eyebrow: '✨ La version grande — pour tout ranger en un seul endroit',
    heroTitle: "Arrêtez de chercher vos ustensiles <highlight>à chaque recette</highlight>",
    heroSubtitle:
      "La version grande du support ustensiles : pensée pour accueillir spatule, fouet, gobelet doseur et plus encore. Tout reste à portée de main, autour de votre Thermomix.",
    infoBanner: '✨ Version grande — capacité maximale pour tous vos ustensiles',
    heroBullets: [
      "Tous vos ustensiles regroupés au même endroit",
      "Plan de travail enfin dégagé",
      "Gain de temps à chaque recette",
      "Installation en quelques secondes, sans outil",
    ],
    problemTitle: "Vos ustensiles n'ont jamais vraiment leur place",
    problemDesc:
      "Vous cuisinez. Vous posez la spatule. Puis vous la cherchez. Encore. Un détail… qui devient vite agaçant au quotidien.",
    problemPoints: [
      "Spatule posée n'importe où",
      "Fouet difficile à retrouver",
      "Plan de travail encombré",
      "Perte de temps à chaque recette",
    ],
    solutionTitle: 'Un support grande capacité pour tout garder à portée de main',
    solutionDesc: "Chaque ustensile a sa place dédiée. Plus besoin de chercher. Votre espace reste propre et organisé.",
    solutionSteps: [
      { title: '1. Installation', desc: "Posez le support à côté de votre Thermomix, sans outil." },
      { title: '2. Rangement immédiat', desc: 'Chaque ustensile trouve sa place dédiée.' },
      { title: '3. Cuisine fluide', desc: "Vous prenez ce qu'il vous faut sans interrompre la recette." },
    ],
    avantLabel: 'Avant',
    apresLabel: 'Après',
    avantCaption: "Ustensiles dispersés, cuisine désorganisée.",
    apresCaption: "Tout est à sa place, accessible instantanément.",
    beneficesTitle: 'Pourquoi vous ne pourrez plus vous en passer',
    benefices: [
      { title: 'Tout à portée de main', desc: 'Vos ustensiles sont accessibles en 1 seconde.' },
      { title: 'Grande capacité', desc: 'Spatule, fouet, gobelet doseur — tout est regroupé.' },
      { title: 'Plan de travail propre', desc: 'Fini le désordre — votre cuisine reste ordonnée.' },
      { title: 'Installation 2 sec', desc: "Aucun outil, aucune contrainte. Vous posez, c'est prêt." },
      { title: 'Design discret', desc: 'Parfaitement intégré à côté de votre Thermomix.' },
    ],
    urgenceTitle: 'Organisez votre Thermomix maintenant',
    urgenceDesc:
      "Un petit changement qui fait une grande différence. Production à la commande dans notre atelier français — expédié sous 48h.",
    ctaLabel: 'Organiser mon Thermomix',
    heroImage: heroSupportUstensilesTm7Grande,
    avantImage: avantTm7,
    apresImage: apresTm7,

    emotion: {
      title: 'Cuisinez avec fluidité',
      desc: "Plus besoin de chercher, de déplacer ou de nettoyer en permanence.\nTout est là, exactement où vous en avez besoin.\n\n✨ Une cuisine plus simple, plus agréable, au quotidien.",
    },
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
  'support-ustensiles-thermomix-tm7-version-grande': 'support-ustensiles-thermomix-tm7-grande',
  'support-ustensiles-thermomix-tm7-version-grande-rangement-essentiel': 'support-ustensiles-thermomix-tm7-grande',
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
