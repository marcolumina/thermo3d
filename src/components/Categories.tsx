import { Link } from 'react-router-dom';
import { useShopifyCollections } from '@/hooks/useShopifyCollections';
import { Loader2, Package } from 'lucide-react';

const Categories = () => {
  const { data: collections, isLoading } = useShopifyCollections();

  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-6">
        <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground text-center mb-12">
          Nos collections
        </h2>

        {isLoading && (
          <div className="flex justify-center">
            <Loader2 className="w-6 h-6 animate-spin text-accent" />
          </div>
        )}

        {!isLoading && collections && collections.length > 0 && (
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {collections.map(c => (
              <Link
                key={c.id}
                to={`/collection/${c.handle}`}
                className="flex flex-col items-center gap-3 group max-w-[140px]"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-secondary border-2 border-transparent group-hover:border-accent flex items-center justify-center overflow-hidden transition-all duration-300 shadow-premium group-hover:shadow-premium-lg">
                  {c.image ? (
                    <img
                      src={c.image.url}
                      alt={c.image.altText || c.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <Package className="w-8 h-8 text-foreground/40" />
                  )}
                </div>
                <span className="text-xs md:text-sm font-medium text-foreground/70 group-hover:text-accent text-center transition-colors">
                  {c.title}
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Categories;
