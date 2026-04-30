import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import TopBanner from '@/components/TopBanner';
import { useShopifyCollection } from '@/hooks/useShopifyCollections';
import { Loader2 } from 'lucide-react';

const Collection = () => {
  const { handle } = useParams<{ handle: string }>();
  const { data, isLoading, error } = useShopifyCollection(handle);

  return (
    <div className="min-h-screen bg-background">
      <TopBanner />
      <Header />
      <Helmet>
        <title>{data?.collection.title ? `${data.collection.title} – Thermo3D` : 'Collection – Thermo3D'}</title>
        <meta name="description" content={data?.collection.description?.slice(0, 155) || 'Découvrez notre collection d\'accessoires Thermomix imprimés en 3D.'} />
        <link rel="canonical" href={`https://thermo3d.fr/collection/${handle}`} />
      </Helmet>

      <main className="container mx-auto px-6 py-12">
        {isLoading && (
          <div className="flex justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-accent" />
          </div>
        )}

        {!isLoading && (!data || error) && (
          <div className="text-center py-20">
            <h1 className="font-display text-2xl mb-4">Collection introuvable</h1>
            <Link to="/catalogue" className="text-accent underline">Retour au catalogue</Link>
          </div>
        )}

        {data && (
          <>
            <header className="mb-10 text-center">
              {data.collection.image && (
                <img
                  src={data.collection.image.url}
                  alt={data.collection.image.altText || data.collection.title}
                  className="mx-auto mb-6 w-32 h-32 object-cover rounded-2xl shadow-premium"
                  loading="eager"
                />
              )}
              <h1 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-3">
                {data.collection.title}
              </h1>
              {data.collection.description && (
                <p className="max-w-2xl mx-auto text-foreground/70">{data.collection.description}</p>
              )}
            </header>

            {data.products.length === 0 ? (
              <p className="text-center text-foreground/60 py-12">
                Aucun produit dans cette collection pour le moment.
              </p>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {data.products.map(p => (
                  <ProductCard key={p.node.id} product={p} />
                ))}
              </div>
            )}
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Collection;
