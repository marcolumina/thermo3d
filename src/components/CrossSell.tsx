import { useShopifyProducts } from '@/hooks/useShopifyProducts';
import ProductCard from '@/components/ProductCard';

const CrossSell = () => {
  const { data: products, isLoading } = useShopifyProducts(3);

  if (isLoading || !products?.length) return null;

  return (
    <section className="py-24 md:py-32 bg-secondary/40">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-accent font-semibold text-xs uppercase tracking-[0.2em] mb-3">
            Souvent achetés ensemble
          </p>
          <h2 className="font-display font-bold text-2xl md:text-[2.25rem] text-foreground leading-tight">
            Complétez votre installation
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {products.slice(0, 2).map((product) => (
            <ProductCard key={product.node.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CrossSell;
