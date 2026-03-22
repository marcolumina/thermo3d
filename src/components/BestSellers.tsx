import { useShopifyProducts } from '@/hooks/useShopifyProducts';
import ProductCard from './ProductCard';
import { Loader2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const BestSellers = () => {
  const { data: products, isLoading, error } = useShopifyProducts(6);

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-accent font-bold text-sm uppercase tracking-widest mb-3">Best sellers</p>
            <h2 className="font-extrabold text-2xl md:text-4xl text-foreground">
              Nos accessoires les plus populaires
            </h2>
          </div>
          <Link to="/catalogue" className="hidden md:flex items-center gap-2 text-foreground text-sm font-semibold hover:text-accent transition-colors">
            Tout voir <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {isLoading && (
          <div className="flex justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-accent" />
          </div>
        )}

        {error && (
          <p className="text-center text-destructive py-10">Erreur lors du chargement des produits.</p>
        )}

        {!isLoading && !error && products && products.length === 0 && (
          <div className="text-center py-20 bg-secondary rounded-2xl">
            <p className="text-muted-foreground text-lg">Aucun produit trouvé</p>
            <p className="text-muted-foreground text-sm mt-1">Créez votre premier produit en le décrivant dans le chat.</p>
          </div>
        )}

        {products && products.length > 0 && (() => {
          const sorted = [...products].sort((a, b) => {
            const aIsBest = a.node.tags?.includes('best-seller') ? 1 : 0;
            const bIsBest = b.node.tags?.includes('best-seller') ? 1 : 0;
            return bIsBest - aIsBest;
          });
          return (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
              {sorted.map((product, i) => (
                <ProductCard key={product.node.id} product={product} featured={i === 0} />
              ))}
            </div>
          );
        })()
        )}

        <Link to="/catalogue" className="md:hidden flex items-center justify-center gap-2 text-foreground text-sm font-semibold mt-10 hover:text-accent transition-colors">
          Voir tout le catalogue <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};

export default BestSellers;
