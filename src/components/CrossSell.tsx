import { useShopifyProducts } from '@/hooks/useShopifyProducts';
import ProductCard from '@/components/ProductCard';

const CrossSell = () => {
  const { data: products, isLoading } = useShopifyProducts(3);

  if (isLoading || !products?.length) return null;

  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-4">
          <span className="inline-flex items-center bg-accent/10 text-accent text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
            Souvent achetés ensemble
          </span>
          <h2 className="font-extrabold text-2xl md:text-4xl text-foreground">
            Complétez votre installation
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
          {products.slice(0, 3).map((product) => (
            <ProductCard key={product.node.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CrossSell;
