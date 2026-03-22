import { useShopifyProducts } from '@/hooks/useShopifyProducts';
import ProductCard from './ProductCard';
import { Loader2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const BestSellers = () => {
  const { data: products, isLoading, error } = useShopifyProducts(4);

  return (
    <section className="container mx-auto px-6 py-20">
      <div className="flex items-end justify-between mb-10">
        <div>
          <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground">
            Nos accessoires Thermomix populaires
          </h2>
          <p className="text-muted-foreground text-sm mt-2">Support varoma, rangement, accessoire TM6 et TM5 — les plus demandés</p>
        </div>
        <Link to="/catalogue" className="hidden md:flex items-center gap-1.5 text-primary text-sm font-medium hover:gap-2.5 transition-all">
          Voir tout <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {isLoading && (
        <div className="flex justify-center py-20">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      )}

      {error && (
        <p className="text-center text-destructive py-10">Erreur lors du chargement des produits.</p>
      )}

      {!isLoading && !error && products && products.length === 0 && (
        <div className="text-center py-20 bg-card/50 rounded-2xl border border-border/50">
          <p className="text-muted-foreground text-lg">Aucun produit trouvé</p>
          <p className="text-muted-foreground text-sm mt-1">Créez votre premier produit en le décrivant dans le chat.</p>
        </div>
      )}

      {products && products.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {products.map((product) => (
            <ProductCard key={product.node.id} product={product} />
          ))}
        </div>
      )}

      <Link to="/catalogue" className="md:hidden flex items-center justify-center gap-1.5 text-primary text-sm font-medium mt-8">
        Voir tout le catalogue <ArrowRight className="w-4 h-4" />
      </Link>
    </section>
  );
};

export default BestSellers;