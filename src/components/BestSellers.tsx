import { useShopifyProducts } from '@/hooks/useShopifyProducts';
import ProductCard from './ProductCard';
import { Loader2 } from 'lucide-react';

const BestSellers = () => {
  const { data: products, isLoading, error } = useShopifyProducts(10);

  return (
    <section className="container mx-auto px-6 py-16">
      <div className="flex items-end justify-between mb-8">
        <div>
          <h2 className="font-display font-bold text-2xl md:text-3xl">Nos best-sellers</h2>
          <p className="text-muted-foreground text-sm mt-1">Les accessoires préférés de nos clients</p>
        </div>
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
        <div className="text-center py-20">
          <p className="text-muted-foreground text-lg">Aucun produit trouvé</p>
          <p className="text-muted-foreground text-sm mt-1">Créez votre premier produit en le décrivant dans le chat.</p>
        </div>
      )}

      {products && products.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.node.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
};

export default BestSellers;
