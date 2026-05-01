import { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import TopBanner from '@/components/TopBanner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { useShopifyProducts } from '@/hooks/useShopifyProducts';
import { Loader2, Search, Award } from 'lucide-react';

const CATEGORIES = [
  'Tous',
  'Packs',
  'Cache écran',
  'Cache balance',
  'Support ustensiles',
  'Organisateur',
  
  
  
  
];

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
        <title>Catalogue Accessoires Thermomix | Support, Rangement, Cache | Thermo3D</title>
        <meta name="description" content="Catalogue complet d'accessoires Thermomix imprimés en 3D : support, rangement, cache écran, organisateur. Compatible TM5, TM6, TM7. Fabriqué en France." />
        <link rel="canonical" href="https://thermo3d.fr/catalogue" />
        <meta property="og:title" content="Catalogue Accessoires Thermomix — Thermo3D" />
        <meta property="og:description" content="Tous nos accessoires Thermomix imprimés en 3D. Fabriqué en France, livraison rapide." />
        <meta property="og:url" content="https://thermo3d.fr/catalogue" />
      </Helmet>

      <TopBanner />
      <Header />

      {/* Hero intro */}
      <section className="bg-hero border-b border-border">
        <div className="container mx-auto px-6 py-14 md:py-20">
          <div className="max-w-3xl">
            <h1 className="font-display font-bold text-3xl md:text-4xl text-foreground leading-tight">
              Tous nos accessoires Thermomix
            </h1>
            <p className="text-muted-foreground mt-4 text-base leading-relaxed max-w-2xl">
              Des accessoires imprimés en 3D en France pour organiser, ranger et protéger votre Thermomix TM5, TM6 & TM7. 
              Qualité alimentaire, livraison offerte dès 50€.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-8 flex-1">
        {/* Search + filters */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
          <div className="relative max-w-md flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="search"
              placeholder="Rechercher un accessoire Thermomix..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-card border border-border/60 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30"
              aria-label="Rechercher un accessoire Thermomix"
            />
          </div>
          <p className="text-sm text-muted-foreground">
            {totalCount} produit{totalCount > 1 ? 's' : ''}
          </p>
        </div>

        <div className="flex items-center gap-2 mb-8 flex-wrap">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-accent text-accent-foreground'
                  : 'bg-card text-muted-foreground hover:text-foreground border border-border/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {isLoading && (
          <div className="flex justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-accent" />
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
            {packs.length > 0 && (
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <Award className="w-5 h-5 text-accent" />
                  <h2 className="font-display font-bold text-xl text-foreground">
                    Nos Packs — Le meilleur rapport qualité-prix
                  </h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
                  {packs.map((product) => (
                    <ProductCard key={product.node.id} product={product} featured />
                  ))}
                </div>
              </div>
            )}

            {accessories.length > 0 && (
              <div>
                <h2 className="font-display font-bold text-xl text-foreground mb-6">
                  Accessoires individuels
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
                  {accessories.map((product) => (
                    <ProductCard key={product.node.id} product={product} />
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
              Chez <strong className="text-foreground">Thermo3D</strong>, nous concevons et fabriquons en France des accessoires sur mesure pour votre Thermomix TM5, TM6 et TM7. Grâce à l'impression 3D de précision, chaque pièce s'adapte parfaitement et résiste à un usage quotidien intensif.
            </p>
            <p>
              Nos clients gagnent en moyenne <strong className="text-foreground">30 minutes par semaine</strong> grâce à une cuisine mieux organisée. Tous nos accessoires sont en PLA de qualité alimentaire. Livraison offerte dès 50€, satisfait ou remboursé 14 jours.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Catalogue;
