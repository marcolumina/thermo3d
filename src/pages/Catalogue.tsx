import { useState } from 'react';
import TopBanner from '@/components/TopBanner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { useShopifyProducts } from '@/hooks/useShopifyProducts';
import { Loader2, SlidersHorizontal } from 'lucide-react';

const CATEGORIES = ['Tous', 'Cache écran', 'Cache balance', 'Support ustensiles'];

const Catalogue = () => {
  const { data: products, isLoading, error } = useShopifyProducts(50);
  const [activeCategory, setActiveCategory] = useState('Tous');

  const filteredProducts = products?.filter((p) => {
    if (activeCategory === 'Tous') return true;
    const title = p.node.title.toLowerCase();
    if (activeCategory === 'Cache écran') return title.includes('cache') && title.includes('ecran') || title.includes('écran');
    if (activeCategory === 'Cache balance') return title.includes('cache') && title.includes('balance');
    if (activeCategory === 'Support ustensiles') return title.includes('support');
    return true;
  }) || [];

  return (
    <div className="min-h-screen flex flex-col">
      <TopBanner />
      <Header />

      {/* Hero */}
      <section className="bg-card border-b border-border">
        <div className="container mx-auto px-6 py-12 md:py-16">
          <h1 className="font-display font-bold text-3xl md:text-4xl">Catalogue</h1>
          <p className="text-muted-foreground mt-2 max-w-lg">
            Découvrez tous nos accessoires imprimés en 3D pour votre Thermomix. Qualité premium, compatible TM5 & TM6.
          </p>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="container mx-auto px-6 py-10 flex-1">
        {/* Category pills */}
        <div className="flex items-center gap-3 mb-8 flex-wrap">
          <SlidersHorizontal className="w-4 h-4 text-muted-foreground" />
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card text-muted-foreground hover:text-foreground border border-border'
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

        {error && (
          <p className="text-center text-destructive py-10">Erreur lors du chargement des produits.</p>
        )}

        {!isLoading && !error && filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">Aucun produit trouvé</p>
            <p className="text-muted-foreground text-sm mt-1">
              {activeCategory !== 'Tous'
                ? 'Essayez une autre catégorie.'
                : 'Créez votre premier produit en le décrivant dans le chat.'}
            </p>
          </div>
        )}

        {filteredProducts.length > 0 && (
          <>
            <p className="text-sm text-muted-foreground mb-6">{filteredProducts.length} produit{filteredProducts.length > 1 ? 's' : ''}</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
