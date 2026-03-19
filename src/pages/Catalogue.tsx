import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import TopBanner from '@/components/TopBanner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { useShopifyProducts } from '@/hooks/useShopifyProducts';
import { Loader2, Search } from 'lucide-react';

const CATEGORIES = [
  'Tous',
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

const Catalogue = () => {
  const { data: products, isLoading, error } = useShopifyProducts(50);
  const [activeCategory, setActiveCategory] = useState('Tous');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products?.filter((p) => {
    const title = p.node.title.toLowerCase();
    const desc = p.node.description?.toLowerCase() || '';
    const matchesSearch = !searchQuery || title.includes(searchQuery.toLowerCase()) || desc.includes(searchQuery.toLowerCase());
    if (!matchesSearch) return false;
    if (activeCategory === 'Tous') return true;
    const cat = activeCategory.toLowerCase();
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

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Accessoires Thermomix imprimés en 3D — Catalogue | Thermo3D</title>
        <meta name="description" content="Découvrez nos accessoires Thermomix imprimés en 3D, pratiques et innovants. Cache écran, support ustensiles, organisateurs. Compatibles TM5, TM6, TM7. Fabriqué en France." />
        <link rel="canonical" href="https://thermo3d.fr/catalogue" />
      </Helmet>

      <TopBanner />
      <Header />

      <section className="border-b border-border/50">
        <div className="container mx-auto px-6 py-14 md:py-20">
          <h1 className="font-display font-bold text-3xl md:text-4xl">
            Accessoires Thermomix <span className="text-gradient">imprimés en 3D</span>
          </h1>
          <p className="text-muted-foreground mt-3 max-w-2xl">
            Découvrez notre gamme complète d'accessoires cuisine pratiques pour Thermomix TM5, TM6 et TM7.
            Conçus et fabriqués en France grâce à l'impression 3D cuisine, avec des matériaux de qualité alimentaire.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 py-10 flex-1">
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

        {!isLoading && !error && filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">Aucun produit trouvé</p>
            <p className="text-muted-foreground text-sm mt-1">
              {searchQuery ? 'Essayez un autre terme de recherche.' : activeCategory !== 'Tous' ? 'Essayez une autre catégorie.' : 'Les produits arrivent bientôt !'}
            </p>
          </div>
        )}

        {filteredProducts.length > 0 && (
          <>
            <p className="text-sm text-muted-foreground mb-6">
              {filteredProducts.length} accessoire{filteredProducts.length > 1 ? 's' : ''} Thermomix
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {filteredProducts.map((product) => (
                <ProductCard key={product.node.id} product={product} />
              ))}
            </div>
          </>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default Catalogue;