import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import { storefrontApiRequest, STOREFRONT_PRODUCT_BY_HANDLE_QUERY, type ShopifyProduct } from '@/lib/shopify';
import { useCartStore } from '@/stores/cartStore';
import { toast } from 'sonner';
import { Loader2, ShoppingCart, Truck, ShieldCheck, RefreshCw, Star, Clock, Flame } from 'lucide-react';
import TopBanner from '@/components/TopBanner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';

const bullets = [
  'Gain de place immédiat',
  'Installation en 5 secondes',
  'Compatible TM5 / TM6 / TM7',
  'Fabrication française',
  'Design solide et durable',
];

const reviews = [
  { name: 'Sophie M.', text: 'Super pratique, je recommande', rating: 5 },
  { name: 'Laurent D.', text: 'Qualité incroyable', rating: 5 },
  { name: 'Marie C.', text: 'Indispensable avec mon Thermomix', rating: 5 },
];

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
  const price = product ? parseFloat(product.node.priceRange.minVariantPrice.amount) : 0;
  const productPrice = price.toFixed(2);
  const originalPrice = (price / 0.8).toFixed(2);
  const productImage = product?.node.images.edges[0]?.node.url || '';

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {product && (
        <Helmet>
          <title>{productTitle} — Accessoire Thermomix | Thermo3D</title>
          <meta name="description" content={`${productTitle} — Accessoire Thermomix imprimé en 3D en France. Compatible TM5, TM6, TM7.`} />
          <link rel="canonical" href={`https://thermo3d.fr/product/${handle}`} />
          <meta property="og:title" content={`${productTitle} | Thermo3D`} />
          <meta property="og:description" content={product.node.description?.slice(0, 160) || productTitle} />
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
            {/* ───── SECTION 1 : PRODUIT ───── */}
            <section className="container mx-auto px-4 sm:px-6 py-6 md:py-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14">
                {/* Image — fond blanc, centré, ombre */}
                <div>
                  <div className="bg-white rounded-2xl aspect-square overflow-hidden shadow-lg">
                    {product.node.images.edges[selectedImage]?.node ? (
                      <img
                        src={product.node.images.edges[selectedImage].node.url}
                        alt={product.node.images.edges[selectedImage].node.altText || `${productTitle} — Accessoire Thermomix`}
                        className="w-full h-full object-contain p-8 md:p-12 drop-shadow-md"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                        <span className="text-5xl">📦</span>
                      </div>
                    )}
                  </div>
                  {product.node.images.edges.length > 1 && (
                    <div className="flex gap-2 mt-3 overflow-x-auto pb-2">
                      {product.node.images.edges.map((img, i) => (
                        <button
                          key={i}
                          onClick={() => setSelectedImage(i)}
                          className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-xl bg-white overflow-hidden border-2 transition-all shadow-sm ${i === selectedImage ? 'border-accent' : 'border-border hover:border-muted-foreground/30'}`}
                        >
                          <img src={img.node.url} alt={`${productTitle} vue ${i + 1}`} className="w-full h-full object-contain p-1" loading="lazy" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Infos produit */}
                <div className="lg:sticky lg:top-28 self-start space-y-5">
                  {/* Urgence banner */}
                  <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                    <Flame className="w-3.5 h-3.5" />
                    Offre limitée · -20% aujourd'hui
                  </div>

                  {/* Titre */}
                  <h1 className="font-extrabold text-2xl md:text-3xl leading-tight text-foreground">
                    {productTitle}
                  </h1>

                  {/* Badges au-dessus du prix */}
                  <div className="flex flex-wrap items-center gap-3 text-xs">
                    <span className="flex items-center gap-1 text-accent font-bold">
                      <Star className="w-3.5 h-3.5 fill-accent text-accent" />
                      4,8/5 <span className="text-muted-foreground font-normal">(+1000 clients)</span>
                    </span>
                    <span className="flex items-center gap-1 font-bold text-foreground">
                      <Flame className="w-3.5 h-3.5 text-destructive" />
                      Best seller
                    </span>
                    <span className="flex items-center gap-1 font-bold text-destructive">
                      <Clock className="w-3.5 h-3.5" />
                      Stock limité
                    </span>
                  </div>

                  {/* Prix */}
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-extrabold text-foreground">{productPrice}&nbsp;€</span>
                    <span className="text-lg text-muted-foreground line-through">{originalPrice}&nbsp;€</span>
                    <span className="text-xs font-bold text-destructive bg-destructive/10 px-2 py-0.5 rounded-full">-20%</span>
                  </div>

                  {/* Description courte */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Optimisez votre espace en cuisine en quelques secondes.
                    Cet accessoire vous permet de gagner de la place, du temps et du confort avec votre Thermomix.
                  </p>

                  {/* Bullets */}
                  <ul className="space-y-2">
                    {bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2.5 text-sm text-foreground">
                        <span className="text-accent font-bold">✔</span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <button
                    onClick={handleAddToCart}
                    disabled={isLoading}
                    className="w-full bg-accent text-accent-foreground font-bold py-4 rounded-xl hover:brightness-110 transition-all disabled:opacity-50 flex items-center justify-center gap-3 text-base"
                  >
                    {isLoading ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <>
                        <ShoppingCart className="w-5 h-5" />
                        Ajouter au panier
                      </>
                    )}
                  </button>

                  {/* Réassurance sous bouton */}
                  <div className="flex items-center justify-between pt-1">
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span className="text-[11px]">Paiement sécurisé</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <Truck className="w-3.5 h-3.5" />
                      <span className="text-[11px]">Livraison rapide</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span className="text-[11px]">Satisfait ou remboursé</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ───── SECTION 2 : PROBLÈME / SOLUTION ───── */}
            <section className="bg-primary text-primary-foreground">
              <div className="container mx-auto px-4 sm:px-6 py-16 md:py-20 max-w-2xl text-center">
                <h2 className="font-extrabold text-xl md:text-3xl leading-tight">
                  Marre du désordre autour de votre Thermomix ?
                </h2>
                <p className="mt-5 text-base text-primary-foreground/60 leading-relaxed">
                  Grâce à cet accessoire, vous gardez un espace propre, organisé et agréable au quotidien.
                </p>
              </div>
            </section>

            {/* ───── SECTION 3 : PREUVE SOCIALE ───── */}
            <section className="bg-secondary py-16 md:py-20">
              <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center mb-10">
                  <div className="flex items-center justify-center gap-1 mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                    <span className="text-sm font-bold text-foreground ml-2">4,8/5</span>
                  </div>
                  <h2 className="font-extrabold text-xl md:text-3xl text-foreground">
                    Ils ne peuvent plus s'en passer
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
                  {reviews.map((r) => (
                    <div key={r.name} className="bg-background rounded-2xl p-6 flex flex-col gap-3">
                      <div className="flex gap-0.5">
                        {Array.from({ length: r.rating }).map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-accent text-accent" />
                        ))}
                      </div>
                      <p className="text-sm text-foreground/80 leading-relaxed flex-1">"{r.text}"</p>
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center text-xs font-bold text-foreground">
                          {r.name[0]}
                        </div>
                        <span className="text-xs font-bold text-foreground">{r.name}</span>
                        <span className="text-xs text-accent">✓ Vérifié</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ───── SECTION 4 : PROJECTION ───── */}
            <section className="py-16 md:py-20">
              <div className="container mx-auto px-4 sm:px-6 max-w-2xl text-center">
                <h2 className="font-extrabold text-xl md:text-3xl text-foreground leading-tight">
                  Transformez votre quotidien en cuisine
                </h2>
                <p className="mt-5 text-base text-muted-foreground leading-relaxed">
                  Moins de désordre, plus d'efficacité, et un vrai plaisir à cuisiner.
                </p>
              </div>
            </section>

            {/* Sticky mobile CTA */}
            <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-md border-t border-border lg:hidden z-50">
              <button
                onClick={handleAddToCart}
                disabled={isLoading}
                className="w-full bg-accent text-accent-foreground font-bold py-4 rounded-xl disabled:opacity-50 flex items-center justify-center gap-2 text-base"
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
            <div className="h-24 lg:hidden" />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;
