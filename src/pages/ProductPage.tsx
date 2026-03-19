import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import { storefrontApiRequest, STOREFRONT_PRODUCT_BY_HANDLE_QUERY, type ShopifyProduct } from '@/lib/shopify';
import { useCartStore } from '@/stores/cartStore';
import { toast } from 'sonner';
import { Loader2, ShoppingCart, Truck, ShieldCheck, Flag, RotateCcw, Package, Star, CheckCircle2, Zap, Maximize2 } from 'lucide-react';
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

  const benefits = [
    { icon: Maximize2, title: 'Gain de place', desc: 'Design compact optimisé pour votre cuisine' },
    { icon: Zap, title: 'Utilisation facile', desc: 'Installation rapide, sans outils' },
    { icon: CheckCircle2, title: 'Compatible Thermomix', desc: 'S\'adapte parfaitement aux TM5, TM6 & TM7' },
  ];

  const trustBadges = [
    { icon: Truck, text: 'Livraison rapide' },
    { icon: RotateCcw, text: 'Satisfait ou remboursé 30j' },
    { icon: ShieldCheck, text: 'Qualité alimentaire certifiée' },
    { icon: Flag, text: 'Fabriqué en France' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {product && (
        <Helmet>
          <title>{productTitle} — Accessoire Thermomix imprimé en 3D | Thermo3D</title>
          <meta name="description" content={`${productTitle} — Accessoire Thermomix imprimé en 3D en France. ${product.node.description?.slice(0, 120) || 'Compatible TM5, TM6 et TM7. Qualité alimentaire. Livraison rapide.'}`} />
          <link rel="canonical" href={`https://thermo3d.fr/product/${handle}`} />
          <meta property="og:title" content={`${productTitle} | Thermo3D`} />
          <meta property="og:description" content={product.node.description?.slice(0, 160) || `${productTitle} — Accessoire cuisine Thermomix imprimé en 3D`} />
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
            {/* Main product section */}
            <section className="container mx-auto px-4 sm:px-6 py-6 md:py-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                {/* Images */}
                <div>
                  <div className="bg-card border border-border/50 rounded-2xl aspect-square overflow-hidden mb-3">
                    {product.node.images.edges[selectedImage]?.node ? (
                      <img
                        src={product.node.images.edges[selectedImage].node.url}
                        alt={product.node.images.edges[selectedImage].node.altText || `${productTitle} — Accessoire Thermomix imprimé en 3D par Thermo3D`}
                        className="w-full h-full object-contain p-6 md:p-10"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-muted-foreground">Pas d'image</div>
                    )}
                  </div>
                  {product.node.images.edges.length > 1 && (
                    <div className="flex gap-2 overflow-x-auto pb-2">
                      {product.node.images.edges.map((img, i) => (
                        <button
                          key={i}
                          onClick={() => setSelectedImage(i)}
                          className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-xl bg-card overflow-hidden border-2 transition-all ${i === selectedImage ? 'border-primary ring-2 ring-primary/20' : 'border-border/50 hover:border-border'}`}
                        >
                          <img src={img.node.url} alt={`${productTitle} vue ${i + 1}`} className="w-full h-full object-contain p-1" loading="lazy" />
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Branding badge under images — desktop only */}
                  <div className="hidden lg:flex items-center gap-3 mt-6 p-4 rounded-xl bg-secondary/50 border border-border/30">
                    <span className="font-display font-bold text-primary text-lg">Thermo3D</span>
                    <span className="text-xs text-muted-foreground">Accessoires Thermomix imprimés en 3D en France</span>
                  </div>
                </div>

                {/* Product info */}
                <div className="lg:sticky lg:top-28 self-start space-y-6">
                  {/* Brand + title */}
                  <div>
                    <span className="text-xs font-display font-semibold text-primary tracking-widest uppercase">Thermo3D</span>
                    <h1 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl mt-1 leading-tight">
                      {productTitle}
                    </h1>
                  </div>

                  {/* Price */}
                  <p className="text-3xl md:text-4xl font-display font-bold text-primary">
                    {productPrice}&nbsp;€
                  </p>

                  {/* CTA — mobile-first: always visible */}
                  <button
                    onClick={handleAddToCart}
                    disabled={isLoading}
                    className="w-full bg-gradient-primary text-accent-foreground font-display font-bold py-4 md:py-5 rounded-xl hover:opacity-90 transition-all glow-primary disabled:opacity-50 flex items-center justify-center gap-3 text-base md:text-lg"
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

                  {/* Trust icons row */}
                  <div className="grid grid-cols-2 gap-3">
                    {trustBadges.map(item => (
                      <div key={item.text} className="flex items-center gap-2.5 text-xs md:text-sm text-muted-foreground">
                        <item.icon className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{item.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* Benefits cards */}
                  <div className="space-y-3 pt-2">
                    <h2 className="font-display font-semibold text-sm uppercase tracking-wider text-muted-foreground">Pourquoi choisir cet accessoire&nbsp;?</h2>
                    {benefits.map(b => (
                      <div key={b.title} className="flex items-start gap-4 p-4 rounded-xl bg-secondary/40 border border-border/30">
                        <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <b.icon className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <p className="font-display font-semibold text-sm">{b.title}</p>
                          <p className="text-xs text-muted-foreground mt-0.5">{b.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Description SEO section */}
            <section className="container mx-auto px-4 sm:px-6 py-10 md:py-16">
              <div className="max-w-3xl">
                <h2 className="font-display font-bold text-xl md:text-2xl mb-4">
                  Description — {productTitle}
                </h2>
                <div className="prose prose-invert prose-sm md:prose-base max-w-none text-muted-foreground leading-relaxed space-y-4">
                  <p>{product.node.description}</p>
                  <p className="text-xs text-muted-foreground/60">
                    Accessoire cuisine Thermomix compatible TM5, TM6 et TM7 · Imprimé en 3D en France avec du PLA alimentaire · Conçu par Thermo3D
                  </p>
                </div>
              </div>
            </section>

            {/* Reviews section — empty structure */}
            <section className="container mx-auto px-4 sm:px-6 py-10 md:py-16 border-t border-border/30">
              <h2 className="font-display font-bold text-xl md:text-2xl mb-6">Avis clients</h2>
              <div className="flex items-center gap-2 mb-8">
                {[1, 2, 3, 4, 5].map(s => (
                  <Star key={s} className="w-5 h-5 text-border" />
                ))}
                <span className="text-sm text-muted-foreground ml-2">Aucun avis pour le moment</span>
              </div>
              <p className="text-sm text-muted-foreground">Soyez le premier à donner votre avis sur ce produit.</p>
            </section>

            {/* Sticky mobile CTA */}
            <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-md border-t border-border/50 lg:hidden z-50">
              <button
                onClick={handleAddToCart}
                disabled={isLoading}
                className="w-full bg-gradient-primary text-accent-foreground font-display font-bold py-4 rounded-xl disabled:opacity-50 flex items-center justify-center gap-2 text-base"
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

            {/* Bottom padding for sticky CTA on mobile */}
            <div className="h-24 lg:hidden" />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;
