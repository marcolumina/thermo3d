import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import { storefrontApiRequest, STOREFRONT_PRODUCT_BY_HANDLE_QUERY, type ShopifyProduct } from '@/lib/shopify';
import { useCartStore } from '@/stores/cartStore';
import { toast } from 'sonner';
import { Loader2, ShoppingCart, Truck, ShieldCheck, Flag, CreditCard, Star, Check } from 'lucide-react';
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

  const bullets = [
    '✅ Gain de place immédiat sur votre plan de travail',
    '✅ Facile à utiliser — installation en 2 secondes',
    '✅ Résistant et durable, qualité alimentaire',
    '✅ Compatible Thermomix TM5, TM6 et TM7',
  ];

  const trustBadges = [
    { icon: Flag, text: 'Fabriqué en France 🇫🇷' },
    { icon: Truck, text: 'Livraison rapide' },
    { icon: CreditCard, text: 'Paiement sécurisé' },
    { icon: ShieldCheck, text: 'Qualité alimentaire' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {product && (
        <Helmet>
          <title>{productTitle} — Accessoire Thermomix | Thermo3D</title>
          <meta name="description" content={`${productTitle} — Accessoire Thermomix imprimé en 3D en France. ${product.node.description?.slice(0, 120) || 'Compatible TM5, TM6. Qualité alimentaire.'}`} />
          <link rel="canonical" href={`https://thermo3d.fr/product/${handle}`} />
          <meta property="og:title" content={`${productTitle} | Thermo3D`} />
          <meta property="og:description" content={product.node.description?.slice(0, 160) || `${productTitle} — Accessoire Thermomix`} />
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

      <main className="flex-1">
        {fetching && (
          <div className="flex justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        )}
        {!fetching && !product && <p className="text-center text-muted-foreground py-20">Produit introuvable.</p>}

        {product && (
          <>
            {/* 1. Main product section — optimized for instant conversion */}
            <section className="container mx-auto px-4 sm:px-6 py-6 md:py-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14">
                {/* Images */}
                <div>
                  <div className="bg-muted rounded-2xl aspect-square overflow-hidden">
                    {product.node.images.edges[selectedImage]?.node ? (
                      <img
                        src={product.node.images.edges[selectedImage].node.url}
                        alt={product.node.images.edges[selectedImage].node.altText || `${productTitle} — Accessoire Thermomix Thermo3D`}
                        className="w-full h-full object-contain p-6 md:p-10"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                        <div className="text-center">
                          <span className="text-5xl block mb-2">📦</span>
                          <span className="text-sm">Image produit</span>
                        </div>
                      </div>
                    )}
                  </div>
                  {product.node.images.edges.length > 1 && (
                    <div className="flex gap-2 mt-3 overflow-x-auto pb-2">
                      {product.node.images.edges.map((img, i) => (
                        <button
                          key={i}
                          onClick={() => setSelectedImage(i)}
                          className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-xl bg-muted overflow-hidden border-2 transition-all ${i === selectedImage ? 'border-primary' : 'border-border hover:border-muted-foreground/30'}`}
                        >
                          <img src={img.node.url} alt={`${productTitle} vue ${i + 1}`} className="w-full h-full object-contain p-1" loading="lazy" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* 2. Product info — price visible immediately */}
                <div className="lg:sticky lg:top-28 self-start space-y-5">
                  <div>
                    <span className="text-xs font-display font-semibold text-primary tracking-widest uppercase">Thermo3D · Fabriqué en France 🇫🇷</span>
                    <h1 className="font-display font-bold text-2xl md:text-3xl mt-1 leading-tight text-foreground">
                      {productTitle} — Accessoire Thermomix
                    </h1>
                  </div>

                  {/* 3. Price — large and visible */}
                  <p className="text-3xl font-display font-bold text-foreground">
                    {productPrice}&nbsp;€
                  </p>

                  {/* 4. Bullet points */}
                  <ul className="space-y-2.5">
                    {bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-sm font-medium text-foreground">
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* 5. CTA — Acheter maintenant */}
                  <button
                    onClick={handleAddToCart}
                    disabled={isLoading}
                    className="w-full bg-primary text-primary-foreground font-display font-bold py-4 rounded-xl hover:bg-primary/90 transition-colors disabled:opacity-50 flex items-center justify-center gap-3 text-base"
                  >
                    {isLoading ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <>
                        <ShoppingCart className="w-5 h-5" />
                        Acheter maintenant — {productPrice} €
                      </>
                    )}
                  </button>

                  {/* Trust badges */}
                  <div className="grid grid-cols-2 gap-3 pt-1">
                    {trustBadges.map(item => (
                      <div key={item.text} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <item.icon className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* 6. Description détaillée orientée bénéfices */}
            <section className="bg-muted/50 border-y border-border">
              <div className="container mx-auto px-4 sm:px-6 py-12 md:py-16">
                <div className="max-w-2xl">
                  <h2 className="font-display font-bold text-xl md:text-2xl mb-4 text-foreground">
                    Pourquoi choisir le {productTitle} ?
                  </h2>
                  <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                    <p>{product.node.description}</p>
                    <p>
                      Conçu et imprimé en France avec du <strong className="text-foreground">PLA de qualité alimentaire</strong>, 
                      cet accessoire est pensé pour résister à un usage intensif en cuisine. Il s'installe en quelques secondes, 
                      sans outil, et s'adapte parfaitement aux modèles <strong className="text-foreground">Thermomix TM5 et TM6</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 7. Avis clients — structure vide (pas de faux avis) */}
            <section className="container mx-auto px-4 sm:px-6 py-12 md:py-16">
              <h2 className="font-display font-bold text-xl md:text-2xl mb-6 text-foreground">Avis clients</h2>
              <div className="flex items-center gap-2 mb-6">
                {[1, 2, 3, 4, 5].map(s => (
                  <Star key={s} className="w-5 h-5 text-border" />
                ))}
                <span className="text-sm text-muted-foreground ml-2">Aucun avis pour le moment</span>
              </div>
              <p className="text-sm text-muted-foreground">Soyez le premier à donner votre avis sur ce produit.</p>
            </section>

            {/* Sticky mobile CTA */}
            <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-md border-t border-border lg:hidden z-50">
              <button
                onClick={handleAddToCart}
                disabled={isLoading}
                className="w-full bg-primary text-primary-foreground font-display font-bold py-4 rounded-xl disabled:opacity-50 flex items-center justify-center gap-2 text-base"
              >
                {isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    <ShoppingCart className="w-5 h-5" />
                    Acheter — {productPrice} €
                  </>
                )}
              </button>
            </div>
            <div className="h-24 lg:hidden" />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;
