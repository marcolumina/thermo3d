import { useShopifyProducts } from '@/hooks/useShopifyProducts';
import ProductCard from './ProductCard';
import { Loader2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const BestSellers = () => {
  const { data: products, isLoading, error } = useShopifyProducts(6);

  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-14 gap-4">
          <div>
            <p className="text-accent font-semibold text-xs uppercase tracking-[0.2em] mb-3">Best sellers</p>
            <h2 className="font-display font-bold text-2xl md:text-[2.25rem] text-foreground leading-tight">
              Nos indispensables Thermomix
            </h2>
          </div>
          <Link to="/catalogue" className="hidden md:flex items-center gap-2 text-foreground text-sm font-medium hover:text-accent transition-colors duration-200">
            Tout voir <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {isLoading && (
          <div className="flex justify-center py-24">
            <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
          </div>
        )}

        {error && (
          <p className="text-center text-destructive py-10">Erreur lors du chargement des produits.</p>
        )}

        {!isLoading && !error && products && products.length === 0 && (
          <div className="text-center py-24 bg-secondary rounded-2xl">
            <p className="text-muted-foreground text-lg">Aucun produit trouvé</p>
            <p className="text-muted-foreground text-sm mt-1">Créez votre premier produit en le décrivant dans le chat.</p>
          </div>
        )}

        {products && products.length > 0 && (() => {
          const sorted = [...products].sort((a, b) => {
            const aIsPack = a.node.tags?.includes('pack') ? 2 : 0;
            const bIsPack = b.node.tags?.includes('pack') ? 2 : 0;
            const aIsBest = a.node.tags?.includes('best-seller') ? 1 : 0;
            const bIsBest = b.node.tags?.includes('best-seller') ? 1 : 0;
            return (bIsPack + bIsBest) - (aIsPack + aIsBest);
          });
          return (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {sorted.map((product, i) => (
                <ProductCard key={product.node.id} product={product} featured={i === 0} />
              ))}
            </div>
          );
        })()}

        <Link to="/catalogue" className="md:hidden flex items-center justify-center gap-2 text-foreground text-sm font-medium mt-12 hover:text-accent transition-colors duration-200">
          Voir tout le catalogue <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};

export default BestSellers;
