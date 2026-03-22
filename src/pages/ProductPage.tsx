import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import { storefrontApiRequest, STOREFRONT_PRODUCT_BY_HANDLE_QUERY, type ShopifyProduct } from '@/lib/shopify';
import { useCartStore } from '@/stores/cartStore';
import { toast } from 'sonner';
import { Loader2, ShoppingCart, Truck, ShieldCheck, RefreshCw, Star, Clock, Flame, CheckCircle, Flag, ChevronDown, Headphones } from 'lucide-react';
import TopBanner from '@/components/TopBanner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';

const bullets = [
  'Gain de place immédiat',
  'Installation en 2 secondes, sans outil',
  'Cuisine plus fluide et organisée',
  'Compatible TM5 / TM6 / TM7',
  'Fabriqué en France 🇫🇷',
];

const reviews = [
  { name: 'Caroline B.', text: "Franchement indispensable ! Ma cuisine est enfin organisée, je ne peux plus m'en passer.", rating: 5 },
  { name: 'Julien M.', text: "Ça change tout dans ma cuisine. Installation ultra simple et qualité top.", rating: 5 },
  { name: 'Nathalie P.', text: 'Je recommande à 100%. Fini le bazar autour du Thermomix !', rating: 5 },
];

const faqs = [
  {
    q: 'Est-ce compatible avec mon Thermomix TM6 ?',
    a: 'Oui ! Tous nos accessoires sont compatibles avec les modèles Thermomix TM5, TM6 et TM7. L\'ajustement est parfait grâce à l\'impression 3D de précision.',
  },
  {
    q: 'Comment ça s\'installe ?',
    a: 'Installation en 2 secondes, sans outil. Vous posez, ça clipe, c\'est prêt. Ultra simple et ultra stable.',
  },
  {
    q: 'Quel est le délai de livraison ?',
    a: 'Expédition sous 48h depuis notre atelier en France. Livraison rapide par Colissimo ou Mondial Relay.',
  },
  {
    q: 'C\'est vraiment alimentaire ?',
    a: 'Oui, tous nos produits sont fabriqués en PLA de qualité alimentaire, certifié pour un usage en cuisine en contact avec les aliments.',
  },
  {
    q: 'Et si ça ne me convient pas ?',
    a: 'Satisfait ou remboursé. Si le produit ne vous convient pas, contactez-nous et nous vous rembourserons sans discussion.',
  },
];

const ProductPage = () => {
  const { handle } = useParams<{ handle: string }>();
  const addItem = useCartStore(state => state.addItem);
  const isLoading = useCartStore(state => state.isLoading);
  const [selectedImage, setSelectedImage] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
          <title>{productTitle} — Accessoire Thermomix TM5 TM6 TM7 | Thermo3D</title>
          <meta name="description" content={`${productTitle} — Accessoire Thermomix imprimé en 3D en France. Compatible TM5, TM6, TM7. Gain de place immédiat. Livraison rapide.`} />
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
              aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "1000" },
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
                {/* Image */}
                <div>
                  <div className="bg-white rounded-2xl aspect-square overflow-hidden shadow-lg relative">
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
                    {/* Badge best seller on image */}
                    <div className="absolute top-4 left-4 bg-accent text-accent-foreground text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                      ⭐ Best seller
                    </div>
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
                    <span className="text-muted-foreground font-semibold text-lg md:text-xl block mt-1">
                      – Gain de place immédiat
                    </span>
                  </h1>

                  {/* Accroche */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Organisez votre espace en quelques secondes et cuisinez plus efficacement.
                  </p>

                  {/* Badges */}
                  <div className="flex flex-wrap items-center gap-3 text-xs">
                    <span className="flex items-center gap-1 text-accent font-bold">
                      <Star className="w-3.5 h-3.5 fill-accent text-accent" />
                      4,8/5 <span className="text-muted-foreground font-normal">(+1000 clients)</span>
                    </span>
                    <span className="flex items-center gap-1 font-bold text-destructive">
                      <Flame className="w-3.5 h-3.5" />
                      -20% aujourd'hui
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

                  {/* Bullets bénéfices */}
                  <ul className="space-y-2.5 py-2">
                    {bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2.5 text-sm text-foreground">
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <button
                    onClick={handleAddToCart}
                    disabled={isLoading}
                    className="w-full bg-accent text-accent-foreground font-bold py-5 rounded-xl hover:brightness-110 transition-all disabled:opacity-50 flex items-center justify-center gap-3 text-lg shadow-[0_0_30px_hsl(97_52%_51%/0.25)]"
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

                  {/* Réassurance 4 badges */}
                  <div className="grid grid-cols-2 gap-3 pt-1">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Truck className="w-4 h-4 text-accent/70" />
                      <span className="text-[11px]">Livraison rapide</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <ShieldCheck className="w-4 h-4 text-accent/70" />
                      <span className="text-[11px]">Paiement sécurisé</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <RefreshCw className="w-4 h-4 text-accent/70" />
                      <span className="text-[11px]">Satisfait ou remboursé</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Headphones className="w-4 h-4 text-accent/70" />
                      <span className="text-[11px]">Support client français</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ───── SECTION 2 : AVANT / APRÈS ───── */}
            <section className="bg-secondary/40 py-16 md:py-20">
              <div className="container mx-auto px-4 sm:px-6">
                <h2 className="font-extrabold text-xl md:text-3xl text-foreground text-center mb-10">
                  La transformation en un clic
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                  {/* Avant */}
                  <div className="bg-background rounded-2xl p-8 shadow-premium text-center border border-border">
                    <span className="text-4xl mb-4 block">😩</span>
                    <span className="text-xs font-bold uppercase tracking-widest text-destructive/70 mb-4 block">Avant</span>
                    <ul className="space-y-3 text-sm text-muted-foreground text-left">
                      <li className="flex items-center gap-2">
                        <span className="text-destructive">✗</span> Désordre sur le plan de travail
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-destructive">✗</span> Perte de temps à chaque utilisation
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-destructive">✗</span> Accessoires qui traînent partout
                      </li>
                    </ul>
                  </div>
                  {/* Après */}
                  <div className="bg-background rounded-2xl p-8 shadow-premium text-center border border-accent/30">
                    <span className="text-4xl mb-4 block">😍</span>
                    <span className="text-xs font-bold uppercase tracking-widest text-accent mb-4 block">Après – avec Thermo3D</span>
                    <ul className="space-y-3 text-sm text-foreground text-left">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" /> Cuisine parfaitement organisée
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" /> Gain de temps au quotidien
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" /> Confort et plaisir de cuisiner
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* ───── SECTION 3 : DESCRIPTION DÉTAILLÉE ───── */}
            <section className="py-16 md:py-20">
              <div className="container mx-auto px-4 sm:px-6 max-w-2xl">
                <h2 className="font-extrabold text-xl md:text-3xl text-foreground text-center leading-tight mb-8">
                  Optimisez votre cuisine en quelques secondes
                </h2>
                <div className="space-y-5 text-muted-foreground leading-relaxed">
                  <p>
                    Ce <strong className="text-foreground">support Thermomix</strong> est conçu pour optimiser votre espace et rendre votre cuisine plus pratique au quotidien. 
                    Fini le désordre, place à l'efficacité. Chaque accessoire trouve sa place, votre plan de travail reste dégagé, 
                    et vous gagnez un temps précieux à chaque utilisation.
                  </p>
                  <p>
                    Fabriqué en France par impression 3D avec du <strong className="text-foreground">PLA de qualité alimentaire</strong>, 
                    cet accessoire s'adapte parfaitement à votre <strong className="text-foreground">Thermomix TM5, TM6 ou TM7</strong>. 
                    La précision au dixième de millimètre garantit un ajustement impeccable et une stabilité totale.
                  </p>
                  <p>
                    L'installation se fait en 2 secondes, sans outil. Vous posez, ça clipe, c'est prêt. 
                    Plus de 1000 clients ont déjà transformé leur cuisine avec nos accessoires Thermo3D.
                  </p>
                </div>

                {/* Badges confiance */}
                <div className="flex flex-wrap justify-center gap-6 mt-10 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-2">
                    <Flag className="w-4 h-4 text-accent/70" />
                    Fabrication française
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent/70" />
                    PLA alimentaire
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Star className="w-4 h-4 text-accent fill-accent" />
                    4,8/5 – +1000 clients
                  </span>
                </div>
              </div>
            </section>

            {/* ───── SECTION 4 : PREUVE SOCIALE ───── */}
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
                        <span className="text-xs text-accent">✓ Achat vérifié</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ───── SECTION 5 : FAQ ───── */}
            <section className="py-16 md:py-20">
              <div className="container mx-auto px-4 sm:px-6 max-w-2xl">
                <h2 className="font-extrabold text-xl md:text-3xl text-foreground text-center mb-10">
                  Questions fréquentes
                </h2>
                <div className="space-y-3">
                  {faqs.map((faq, i) => (
                    <div key={i} className="bg-card border border-border/50 rounded-xl overflow-hidden">
                      <button
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        className="w-full flex items-center justify-between px-6 py-4 text-left"
                      >
                        <span className="text-sm font-semibold text-foreground pr-4">{faq.q}</span>
                        <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform flex-shrink-0 ${openFaq === i ? 'rotate-180' : ''}`} />
                      </button>
                      {openFaq === i && (
                        <div className="px-6 pb-5">
                          <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ───── SECTION 6 : CTA FINAL ───── */}
            <section className="bg-foreground text-background">
              <div className="container mx-auto px-4 sm:px-6 py-16 md:py-20 text-center">
                <h2 className="font-extrabold text-xl md:text-3xl leading-tight max-w-xl mx-auto">
                  Prêt à transformer votre cuisine ?
                </h2>
                <p className="mt-4 text-background/60 text-sm max-w-md mx-auto">
                  Rejoignez +1000 clients satisfaits. Installation en 2 secondes, satisfaction garantie.
                </p>
                <button
                  onClick={handleAddToCart}
                  disabled={isLoading}
                  className="mt-8 inline-flex items-center gap-3 bg-accent text-accent-foreground px-10 py-5 rounded-full font-bold text-base hover:brightness-110 transition-all disabled:opacity-50 shadow-[0_0_30px_hsl(97_52%_51%/0.3)]"
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
            </section>

            {/* Sticky mobile CTA */}
            <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-md border-t border-border lg:hidden z-50">
              <button
                onClick={handleAddToCart}
                disabled={isLoading}
                className="w-full bg-accent text-accent-foreground font-bold py-4 rounded-xl disabled:opacity-50 flex items-center justify-center gap-2 text-base shadow-[0_0_20px_hsl(97_52%_51%/0.2)]"
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
