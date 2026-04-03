import { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import TopBanner from '@/components/TopBanner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { useShopifyProducts } from '@/hooks/useShopifyProducts';
import { Loader2, Search, ShieldCheck, Truck, Star, Flag, RefreshCw, Award } from 'lucide-react';

const CATEGORIES = [
  'Tous',
  'Packs',
  'Cache écran',
  'Cache balance',
  'Support ustensiles',
  'Organisateur',
  'Range couteau',
  'Spatule & racleur',
  'Protection',
  'Rangement',
  'Déco cuisine',
];

const TRUST_ITEMS = [
  { icon: Truck, label: 'Livraison offerte dès 50€' },
  { icon: ShieldCheck, label: 'Paiement 100% sécurisé' },
  { icon: Flag, label: 'Fabriqué en France 🇫🇷' },
  { icon: RefreshCw, label: 'Satisfait ou remboursé 30j' },
  { icon: Star, label: '4.9/5 — +1000 clients' },
];

/** Determine badge type from product title/tags */
function getProductBadge(title: string, tags: string[]): { label: string; className: string } | null {
  const t = title.toLowerCase();
  const tg = tags.map(tag => tag.toLowerCase());
  if (tg.includes('pack') || t.includes('pack')) return { label: '⭐ Best-seller', className: 'bg-accent text-accent-foreground' };
  if (tg.includes('nouveau') || tg.includes('new')) return { label: '🆕 Nouveau', className: 'bg-secondary text-secondary-foreground' };
  if (tg.includes('recommande') || tg.includes('recommandé')) return { label: '👍 Recommandé', className: 'bg-primary text-primary-foreground' };
  return null;
}

/** Short benefit line per product type */
function getMicroText(title: string): string {
  const t = title.toLowerCase();
  if (t.includes('pack')) return "Tout ce qu'il faut pour une cuisine parfaitement organisée.";
  if (t.includes('cache') && (t.includes('ecran') || t.includes('écran'))) return "Protège votre écran des éclaboussures et de la poussière.";
  if (t.includes('cache') && t.includes('balance')) return "Garde votre balance propre et toujours prête à l'emploi.";
  if (t.includes('support')) return "Libérez de la place en rangeant vos ustensiles verticalement.";
  if (t.includes('organis')) return "Chaque accessoire à sa place, toujours à portée de main.";
  if (t.includes('couteau') || t.includes('range')) return "Rangez vos lames en toute sécurité, gain de place immédiat.";
  if (t.includes('spatule') || t.includes('racleur')) return "L'outil idéal pour récupérer chaque gramme de préparation.";
  if (t.includes('protect')) return 'Préservez votre Thermomix des rayures et chocs du quotidien.';
  if (t.includes('rang')) return 'Un espace de rangement pensé pour votre plan de travail.';
  if (t.includes('déco') || t.includes('deco')) return 'Ajoutez une touche de style à votre coin cuisine.';
  return 'Un accessoire indispensable pour votre Thermomix.';
}

const Catalogue = () => {
  const { data: products, isLoading, error } = useShopifyProducts(50);
  const [activeCategory, setActiveCategory] = useState('Tous');
  const [searchQuery, setSearchQuery] = useState('');

  const { packs, accessories } = useMemo(() => {
    const filtered = products?.filter((p) => {
      const title = p.node.title.toLowerCase();
      const desc = p.node.description?.toLowerCase() || '';
      const matchesSearch = !searchQuery || title.includes(searchQuery.toLowerCase()) || desc.includes(searchQuery.toLowerCase());
      if (!matchesSearch) return false;
      if (activeCategory === 'Tous') return true;
      const cat = activeCategory.toLowerCase();
      if (cat === 'packs') return title.includes('pack') || p.node.tags?.map(t => t.toLowerCase()).includes('pack');
      if (cat === 'cache écran') return title.includes('cache') && (title.includes('ecran') || title.includes('écran'));
      if (cat === 'cache balance') return title.includes('cache') && title.includes('balance');
      if (cat === 'support ustensiles') return title.includes('support');
      if (cat === 'organisateur') return title.includes('organis');
      if (cat === 'range couteau') return title.includes('couteau') || title.includes('range');
      if (cat === 'spatule & racleur') return title.includes('spatule') || title.includes('racleur');
      if (cat === 'protection') return title.includes('protect');
      if (cat === 'rangement') return title.includes('rang');
      if (cat === 'déco cuisine') return title.includes('déco') || title.includes('deco');
      return true;
    }) || [];

    const packsArr = filtered.filter(p => {
      const t = p.node.title.toLowerCase();
      const tg = p.node.tags?.map(tag => tag.toLowerCase()) || [];
      return t.includes('pack') || tg.includes('pack');
    });
    const accessoriesArr = filtered.filter(p => {
      const t = p.node.title.toLowerCase();
      const tg = p.node.tags?.map(tag => tag.toLowerCase()) || [];
      return !t.includes('pack') && !tg.includes('pack');
    });

    return { packs: packsArr, accessories: accessoriesArr };
  }, [products, activeCategory, searchQuery]);

  const totalCount = packs.length + accessories.length;

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Catalogue Accessoire Thermomix — Support Varoma, Rangement TM6 TM5 | Thermo3D</title>
        <meta name="description" content="Tous nos accessoires Thermomix imprimés en 3D : support varoma, rangement Thermomix, accessoire TM6 et TM5. Cache écran, organisateurs. Fabriqué en France." />
        <link rel="canonical" href="https://thermo3d.fr/catalogue" />
        <meta name="keywords" content="accessoire thermomix, support varoma thermomix, rangement thermomix, accessoire tm6, accessoire tm5, catalogue thermomix" />
      </Helmet>

      <TopBanner />
      <Header />

      {/* Hero intro */}
      <section className="bg-secondary/40 border-b border-border">
        <div className="container mx-auto px-6 py-14 md:py-20">
          <div className="max-w-3xl">
            <p className="text-accent font-semibold text-xs uppercase tracking-[0.2em] mb-3">
              Catalogue Thermo3D
            </p>
            <h1 className="font-display font-bold text-3xl md:text-4xl text-foreground leading-tight">
              Accessoires Thermomix TM5, TM6 & TM7 — Gagnez en place et en confort
            </h1>
            <p className="text-muted-foreground mt-4 text-base leading-relaxed max-w-2xl">
              Découvrez notre gamme complète d'accessoires imprimés en 3D pour votre Thermomix. 
              Chaque pièce est conçue pour <strong className="text-foreground">libérer votre plan de travail</strong>, 
              <strong className="text-foreground"> organiser vos ustensiles</strong> et rendre chaque moment en cuisine plus agréable. 
              Fabriqués en France avec du PLA de qualité alimentaire.
            </p>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-b border-border/60 bg-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {TRUST_ITEMS.map((item) => (
              <div key={item.label} className="flex items-center gap-2 text-muted-foreground">
                <item.icon className="w-4 h-4 text-accent shrink-0" />
                <span className="text-xs font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-10 flex-1">
        {/* Search + filters */}
        <div className="relative mb-6 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="search"
            placeholder="Rechercher un accessoire Thermomix..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-card border border-border/50 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
            aria-label="Rechercher un accessoire Thermomix"
          />
        </div>

        <div className="flex items-center gap-2 mb-8 flex-wrap">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-primary text-accent-foreground'
                  : 'bg-card text-muted-foreground hover:text-foreground border border-border/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {isLoading && (
          <div className="flex justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        )}

        {error && <p className="text-center text-destructive py-10">Erreur lors du chargement des produits.</p>}

        {!isLoading && !error && totalCount === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">Aucun produit trouvé</p>
            <p className="text-muted-foreground text-sm mt-1">
              {searchQuery ? 'Essayez un autre terme de recherche.' : activeCategory !== 'Tous' ? 'Essayez une autre catégorie.' : 'Les produits arrivent bientôt !'}
            </p>
          </div>
        )}

        {totalCount > 0 && (
          <>
            <p className="text-sm text-muted-foreground mb-6">
              {totalCount} accessoire{totalCount > 1 ? 's' : ''} Thermomix
            </p>

            {/* Packs first */}
            {packs.length > 0 && (
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <Award className="w-5 h-5 text-accent" />
                  <h2 className="font-display font-bold text-xl text-foreground">
                    Nos Packs — Le meilleur rapport qualité-prix
                  </h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                  {packs.map((product) => (
                    <div key={product.node.id} className="relative">
                      {(() => {
                        const badge = getProductBadge(product.node.title, product.node.tags || []);
                        return badge ? (
                          <span className={`absolute -top-2 left-3 z-20 text-[10px] font-bold px-3 py-1 rounded-full shadow-md ${badge.className}`}>
                            {badge.label}
                          </span>
                        ) : null;
                      })()}
                      <ProductCard product={product} featured />
                      <p className="text-xs text-muted-foreground mt-2 px-1 line-clamp-1">{getMicroText(product.node.title)}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Individual accessories */}
            {accessories.length > 0 && (
              <div>
                <h2 className="font-display font-bold text-xl text-foreground mb-6">
                  Accessoires individuels
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                  {accessories.map((product, i) => (
                    <div key={product.node.id} className="relative">
                      {(() => {
                        const badge = getProductBadge(product.node.title, product.node.tags || []);
                        if (badge) return (
                          <span className={`absolute -top-2 left-3 z-20 text-[10px] font-bold px-3 py-1 rounded-full shadow-md ${badge.className}`}>
                            {badge.label}
                          </span>
                        );
                        if (i < 3) return (
                          <span className="absolute -top-2 left-3 z-20 text-[10px] font-bold px-3 py-1 rounded-full shadow-md bg-purple-500/90 text-white">
                            👍 Recommandé
                          </span>
                        );
                        return null;
                      })()}
                      <ProductCard product={product} />
                      <p className="text-xs text-muted-foreground mt-2 px-1 line-clamp-1">{getMicroText(product.node.title)}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}

        {/* SEO block */}
        <div className="mt-16 pt-10 border-t border-border/60">
          <h2 className="font-display font-bold text-lg text-foreground mb-4">
            Pourquoi choisir les accessoires Thermo3D pour votre Thermomix ?
          </h2>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-3 max-w-3xl">
            <p>
              Chez <strong className="text-foreground">Thermo3D</strong>, nous concevons et fabriquons en France des accessoires sur mesure pour votre Thermomix TM5, TM6 et TM7. Grâce à l'impression 3D de précision, chaque pièce s'adapte parfaitement à votre robot et résiste à un usage quotidien intensif.
            </p>
            <p>
              Nos clients gagnent en moyenne <strong className="text-foreground">30 minutes par semaine</strong> grâce à une cuisine mieux organisée : support varoma toujours en place, ustensiles rangés verticalement, écran protégé des éclaboussures. Plus de 1000 cuisiniers nous font déjà confiance avec une note de 4.9/5.
            </p>
            <p>
              Tous nos accessoires sont fabriqués en PLA de qualité alimentaire, un matériau écologique et sans danger pour vos aliments. Livraison offerte dès 50€, satisfait ou remboursé 30 jours.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Catalogue;
