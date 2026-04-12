import { useShopifyProducts } from '@/hooks/useShopifyProducts';
import ProductCard from './ProductCard';
import { Loader2, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

const BestSellers = () => {
  const { data: products, isLoading, error } = useShopifyProducts(12);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.offsetWidth * 0.7;
    scrollRef.current.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground">
              Nos meilleures ventes
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => scroll('left')} className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center hover:bg-secondary transition-colors">
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <button onClick={() => scroll('right')} className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center hover:bg-secondary transition-colors">
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
            <Link to="/catalogue" className="hidden md:flex items-center gap-2 text-accent text-sm font-medium hover:underline ml-3">
              Tout afficher <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {isLoading && (
          <div className="flex justify-center py-24">
            <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
          </div>
        )}

        {error && (
          <p className="text-center text-destructive py-10">Erreur lors du chargement des produits.</p>
        )}

        {products && products.length > 0 && (
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto scrollbar-hide pb-4 -mx-2 px-2"
          >
            {products.map((product) => (
              <div key={product.node.id} className="min-w-[280px] sm:min-w-[320px] max-w-[360px] flex-shrink-0">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        )}

        <Link to="/catalogue" className="md:hidden flex items-center justify-center gap-2 text-accent text-sm font-medium mt-8 hover:underline">
          Tout afficher <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};

export default BestSellers;
