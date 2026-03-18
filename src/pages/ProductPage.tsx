import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import { storefrontApiRequest, STOREFRONT_PRODUCT_BY_HANDLE_QUERY, type ShopifyProduct } from '@/lib/shopify';
import { useCartStore } from '@/stores/cartStore';
import { toast } from 'sonner';
import { Loader2, ShoppingCart, Truck, ShieldCheck, Flag } from 'lucide-react';
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
    toast.success('Ajouté au panier ✓', { position: 'top-center' });
  };

  const productTitle = product?.node.title || 'Accessoire Thermomix';
  const productPrice = product ? parseFloat(product.node.priceRange.minVariantPrice.amount).toFixed(2) : '';
  const productImage = product?.node.images.edges[0]?.node.url || '';

  return (
    <div className="min-h-screen flex flex-col">
      {product && (
        <Helmet>
          <title>{productTitle} | Thermo3D — Accessoire Thermomix 3D</title>
          <meta name="description" content={`${productTitle} — Accessoire Thermomix imprimé en 3D en France. ${product.node.description?.slice(0, 120) || 'Compatible TM6 et TM7. Qualité alimentaire.'}`} />
          <link rel="canonical" href={`https://thermo3d.fr/product/${handle}`} />
          <meta property="og:title" content={`${productTitle} | Thermo3D`} />
          <meta property="og:description" content={product.node.description?.slice(0, 160) || `${productTitle} — Accessoire Thermomix imprimé en 3D`} />
          <meta property="og:image" content={productImage} />
          <meta property="og:url" content={`https://thermo3d.fr/product/${handle}`} />
          <meta property="og:type" content="product" />
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: productTitle,
              description: product.node.description,
              image: productImage,
              brand: { "@type": "Brand", name: "Thermo3D" },
              offers: {
                "@type": "Offer",
                price: productPrice,
                priceCurrency: "EUR",
                availability: "https://schema.org/InStock",
                url: `https://thermo3d.fr/product/${handle}`,
                seller: { "@type": "Organization", name: "Thermo3D" },
              },
            })}
          </script>
        </Helmet>
      )}

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
              <div className="bg-card border border-border/50 rounded-2xl aspect-square overflow-hidden mb-4">
                {product.node.images.edges[selectedImage]?.node ? (
                  <img
                    src={product.node.images.edges[selectedImage].node.url}
                    alt={product.node.images.edges[selectedImage].node.altText || `${productTitle} - Accessoire Thermomix imprimé en 3D`}
                    className="w-full h-full object-contain p-8"
                    loading="lazy"
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
                      className={`w-16 h-16 rounded-xl bg-card overflow-hidden border-2 transition-colors ${i === selectedImage ? 'border-primary' : 'border-border/50'}`}
                    >
                      <img src={img.node.url} alt={`${productTitle} vue ${i + 1}`} className="w-full h-full object-contain p-1" loading="lazy" />
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div className="md:sticky md:top-32 self-start">
              <h1 className="font-display font-bold text-2xl md:text-3xl">{productTitle}</h1>
              <p className="text-3xl font-display font-bold text-primary mt-4">
                {productPrice} €
              </p>
              <p className="text-muted-foreground mt-4 leading-relaxed">{product.node.description}</p>

              <div className="mt-6 space-y-3">
                {[
                  { icon: ShieldCheck, text: 'Compatible Thermomix TM5, TM6 & TM7' },
                  { icon: Flag, text: 'Fabriqué en France par impression 3D' },
                  { icon: Truck, text: 'Livraison offerte dès 50€' },
                ].map(item => (
                  <div key={item.text} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <item.icon className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={handleAddToCart}
                disabled={isLoading}
                className="mt-8 w-full bg-gradient-primary text-accent-foreground font-display font-bold py-4 rounded-xl hover:opacity-90 transition-all glow-primary disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    <ShoppingCart className="w-5 h-5" />
                    Ajouter au panier — {productPrice} €
                  </>
                )}
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
