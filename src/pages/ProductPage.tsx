import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { storefrontApiRequest, STOREFRONT_PRODUCT_BY_HANDLE_QUERY, type ShopifyProduct } from '@/lib/shopify';
import { useCartStore } from '@/stores/cartStore';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';
import TopBanner from '@/components/TopBanner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';

const ProductPage = () => {
  const { handle } = useParams<{ handle: string }>();
  const addItem = useCartStore(state => state.addItem);
  const isLoading = useCartStore(state => state.isLoading);
  const [selectedImage, setSelectedImage] = useState(0);

  const { data: product, isLoading: fetching } = useQuery({
    queryKey: ['product', handle],
    queryFn: async () => {
      const data = await storefrontApiRequest(STOREFRONT_PRODUCT_BY_HANDLE_QUERY, { handle });
      const p = data?.data?.productByHandle;
      if (!p) return null;
      return { node: p } as ShopifyProduct;
    },
    enabled: !!handle,
  });

  const handleAddToCart = async () => {
    if (!product) return;
    const variant = product.node.variants.edges[0]?.node;
    if (!variant) return;
    await addItem({
      product,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions || [],
    });
    toast.success('Produit ajouté au panier', { position: 'top-center' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <TopBanner />
      <Header />
      <main className="flex-1 container mx-auto px-6 py-10">
        {fetching && (
          <div className="flex justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        )}
        {!fetching && !product && <p className="text-center text-muted-foreground py-20">Produit introuvable.</p>}
        {product && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="bg-card rounded-2xl aspect-square overflow-hidden mb-4">
                {product.node.images.edges[selectedImage]?.node ? (
                  <img
                    src={product.node.images.edges[selectedImage].node.url}
                    alt={product.node.images.edges[selectedImage].node.altText || product.node.title}
                    className="w-full h-full object-contain p-8"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground">Pas d'image</div>
                )}
              </div>
              {product.node.images.edges.length > 1 && (
                <div className="flex gap-2">
                  {product.node.images.edges.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedImage(i)}
                      className={`w-16 h-16 rounded-lg bg-card overflow-hidden border-2 transition-colors ${i === selectedImage ? 'border-primary' : 'border-transparent'}`}
                    >
                      <img src={img.node.url} alt="" className="w-full h-full object-contain p-1" />
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div className="md:sticky md:top-32 self-start">
              <h1 className="font-display font-bold text-2xl md:text-3xl">{product.node.title}</h1>
              <p className="text-2xl font-display font-bold text-primary mt-4">
                {parseFloat(product.node.priceRange.minVariantPrice.amount).toFixed(2)} €
              </p>
              <p className="text-muted-foreground mt-4 leading-relaxed">{product.node.description}</p>
              <button
                onClick={handleAddToCart}
                disabled={isLoading}
                className="mt-8 w-full bg-primary text-primary-foreground font-display font-semibold py-3 rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {isLoading ? 'Ajout en cours...' : 'Ajouter au panier'}
              </button>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;
