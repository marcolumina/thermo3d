import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import { storefrontApiRequest, STOREFRONT_PRODUCT_BY_HANDLE_QUERY, type ShopifyProduct } from '@/lib/shopify';
import { useCartStore } from '@/stores/cartStore';
import { toast } from 'sonner';
import {
  Loader2, ShoppingCart, Truck, ShieldCheck, RefreshCw, Star, Clock,
  Flame, CheckCircle, Flag, ChevronDown, Headphones, Package, Award,
  Zap, Heart, BadgeCheck, Info
} from 'lucide-react';
import TopBanner from '@/components/TopBanner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CrossSell from '@/components/CrossSell';
import { useState, useMemo } from 'react';

/* ── Données statiques de la page ── */

const defaultBullets = [
  { icon: Zap, text: 'Gain de place immédiat sur votre plan de travail' },
  { icon: Clock, text: 'Installation en 2 secondes, sans outil' },
  { icon: Heart, text: 'Cuisine plus fluide et organisée au quotidien' },
  { icon: BadgeCheck, text: 'Compatible TM5 / TM6 / TM7' },
  { icon: Flag, text: 'Fabriqué en France 🇫🇷 en PLA alimentaire' },
];

const reviews = [
  { name: 'Caroline B.', text: "Franchement indispensable ! Ma cuisine est enfin organisée, je ne peux plus m'en passer.", rating: 5, date: 'Il y a 3 jours' },
  { name: 'Julien M.', text: "Ça change tout dans ma cuisine. Installation ultra simple et qualité top.", rating: 5, date: 'Il y a 1 semaine' },
  { name: 'Nathalie P.', text: 'Je recommande à 100%. Fini le bazar autour du Thermomix !', rating: 5, date: 'Il y a 2 semaines' },
  { name: 'Sophie L.', text: "Livraison rapide, produit conforme à la description. Très satisfaite de mon achat.", rating: 5, date: 'Il y a 3 semaines' },
];

const faqs = [
  { q: 'Est-ce compatible avec mon Thermomix ?', a: "Oui ! Tous nos accessoires sont compatibles avec les modèles Thermomix. L'ajustement est parfait grâce à l'impression 3D de précision." },
  { q: "Comment ça s'installe ?", a: "Installation en 2 secondes, sans outil. Vous posez, ça clipe, c'est prêt. Ultra simple et ultra stable." },
  { q: 'Quel est le délai de livraison ?', a: 'Expédition sous 48h depuis notre atelier en France. Livraison rapide par Colissimo ou Mondial Relay.' },
  { q: "C'est vraiment alimentaire ?", a: 'Oui, tous nos produits sont fabriqués en PLA de qualité alimentaire, certifié pour un usage en cuisine en contact avec les aliments.' },
  { q: 'Et si ça ne me convient pas ?', a: 'Satisfait ou remboursé. Si le produit ne vous convient pas, contactez-nous et nous vous rembourserons sans discussion.' },
];

const guarantees = [
  { icon: Truck, title: 'Livraison rapide', desc: 'Expédié sous 48h depuis la France' },
  { icon: ShieldCheck, title: 'Paiement sécurisé', desc: 'CB, PayPal, Apple Pay' },
  { icon: RefreshCw, title: 'Satisfait ou remboursé', desc: 'Retour gratuit sous 30 jours' },
  { icon: Headphones, title: 'Support français', desc: 'Réponse sous 24h par email' },
];

/* ── Helpers pour parser la description HTML Shopify ── */

function parseShopifyDescription(html: string) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');

  let accroche = '';
  const benefits: string[] = [];
  const specs: { label: string; value: string }[] = [];
  let description = '';
  let tips = '';

  const sections = doc.querySelectorAll('h3, h4');
  sections.forEach((heading) => {
    const title = heading.textContent?.trim().toLowerCase() || '';
    let content = '';
    let sibling = heading.nextElementSibling;
    while (sibling && !['H3', 'H4'].includes(sibling.tagName)) {
      content += sibling.outerHTML;
      sibling = sibling.nextElementSibling;
    }

    if (title.includes('bénéfice') || title.includes('avantage') || title.includes('pourquoi')) {
      const lis = new DOMParser().parseFromString(content, 'text/html').querySelectorAll('li');
      lis.forEach((li) => {
        const text = li.textContent?.trim();
        if (text) benefits.push(text);
      });
    } else if (title.includes('caractéristique') || title.includes('fiche technique') || title.includes('spécification')) {
      const lis = new DOMParser().parseFromString(content, 'text/html').querySelectorAll('li');
      lis.forEach((li) => {
        const text = li.textContent?.trim() || '';
        const parts = text.split(/\s*:\s*/);
        if (parts.length >= 2) {
          specs.push({ label: parts[0], value: parts.slice(1).join(': ') });
        }
      });
    } else if (title.includes('conseil') || title.includes('astuce') || title.includes('entretien')) {
      tips = content;
    }
  });

  // Accroche = first <p> or <em>
  const firstP = doc.querySelector('p');
  if (firstP) accroche = firstP.textContent?.trim() || '';

  // Fallback description
  const allPs = doc.querySelectorAll('p');
  const descParts: string[] = [];
  allPs.forEach((p, i) => {
    if (i > 0) descParts.push(p.textContent?.trim() || '');
  });
  description = descParts.filter(Boolean).join(' ');

  return { accroche, benefits, specs, description, tips };
}

/* ── Composant principal ── */

const ProductPage = () => {
  const { handle } = useParams<{ handle: string }>();
  const addItem = useCartStore(state => state.addItem);
  const isLoading = useCartStore(state => state.isLoading);
  const [selectedImage, setSelectedImage] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(-1);
  const [hasInitializedVariant, setHasInitializedVariant] = useState(false);

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

  const parsed = useMemo(() => {
    if (!product?.node.descriptionHtml) return null;
    return parseShopifyDescription(product.node.descriptionHtml);
  }, [product]);

  // Extract variants and color options
  const variants = useMemo(() => {
    if (!product) return [];
    return product.node.variants.edges.map(e => e.node);
  }, [product]);

  const colorOptions = useMemo(() => {
    return variants.map((v, i) => {
      const colorOpt = v.selectedOptions?.find(
        (o: any) => o.name.toLowerCase() === 'couleur' || o.name.toLowerCase() === 'color' || o.name.toLowerCase() === 'colour'
      );
      return { index: i, label: colorOpt?.value || v.title, variant: v };
    });
  }, [variants]);

  const hasColorOptions = colorOptions.length > 1;

  // Auto-select "Noir" variant by default
  useMemo(() => {
    if (!hasInitializedVariant && colorOptions.length > 0) {
      const noirIndex = colorOptions.findIndex(
        (opt) => opt.label.toLowerCase().includes('noir') || opt.label.toLowerCase().includes('black')
      );
      setSelectedVariantIndex(noirIndex >= 0 ? noirIndex : 0);
      setHasInitializedVariant(true);
    }
  }, [colorOptions, hasInitializedVariant]);

  const selectedVariant = variants[selectedVariantIndex >= 0 ? selectedVariantIndex : 0] || variants[0];

  const handleAddToCart = async () => {
    if (!product || !selectedVariant) return;
    await addItem({
      product,
      variantId: selectedVariant.id,
      variantTitle: selectedVariant.title,
      price: selectedVariant.price,
      quantity: 1,
      selectedOptions: selectedVariant.selectedOptions || [],
    });
    toast.success('Ajouté au panier ✓', { position: 'top-center' });
  };

  const productTitle = product?.node.title || 'Accessoire Thermomix';
  const price = selectedVariant ? parseFloat(selectedVariant.price.amount) : (product ? parseFloat(product.node.priceRange.minVariantPrice.amount) : 0);
  const productPrice = price.toFixed(2);
  const originalPrice = (price / 0.8).toFixed(2);
  const productImage = product?.node.images.edges[0]?.node.url || '';
  const accroche = parsed?.accroche || 'Organisez votre espace en quelques secondes et cuisinez plus efficacement.';
  const benefitsFromShopify = parsed?.benefits || [];
  const specsFromShopify = parsed?.specs || [];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {product && (
        <Helmet>
          <title>{productTitle} — Accessoire Thermomix TM5 TM6 TM7 | Thermo3D</title>
          <meta name="description" content={`${productTitle} — Accessoire Thermomix imprimé en 3D en France. Compatible TM5, TM6, TM7. ${accroche.slice(0, 100)}`} />
          <link rel="canonical" href={`https://thermo3d.fr/product/${handle}`} />
          <meta property="og:title" content={`${productTitle} | Thermo3D`} />
          <meta property="og:description" content={accroche.slice(0, 160)} />
          <meta property="og:image" content={productImage} />
          <meta property="og:url" content={`https://thermo3d.fr/product/${handle}`} />
          <meta property="og:type" content="product" />
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: productTitle,
              description: accroche,
              image: productImage,
              brand: { "@type": "Brand", name: "Thermo3D" },
              aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "1247", bestRating: "5" },
              offers: {
                "@type": "Offer",
                price: productPrice,
                priceCurrency: "EUR",
                availability: "https://schema.org/InStock",
                url: `https://thermo3d.fr/product/${handle}`,
                seller: { "@type": "Organization", name: "Thermo3D" },
                shippingDetails: {
                  "@type": "OfferShippingDetails",
                  shippingDestination: { "@type": "DefinedRegion", addressCountry: "FR" },
                  deliveryTime: { "@type": "ShippingDeliveryTime", handlingTime: { "@type": "QuantitativeValue", minValue: 1, maxValue: 2, unitCode: "DAY" } },
                },
              },
              review: reviews.map(r => ({
                "@type": "Review",
                author: { "@type": "Person", name: r.name },
                reviewRating: { "@type": "Rating", ratingValue: r.rating },
                reviewBody: r.text,
              })),
            })}
          </script>
        </Helmet>
      )}

      <TopBanner />
      <Header />

      <main className="flex-1">
        {fetching && (
          <div className="flex justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-accent" />
          </div>
        )}
        {!fetching && !product && <p className="text-center text-muted-foreground py-20">Produit introuvable.</p>}

        {product && (
          <>
            {/* ═══════ SECTION 1 : PRODUIT ═══════ */}
            <section className="container mx-auto px-4 sm:px-6 py-6 md:py-14">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                {/* ── Galerie images ── */}
                <div className="space-y-3">
                  <div className="bg-secondary/30 rounded-2xl aspect-square overflow-hidden relative group">
                    {product.node.images.edges[selectedImage]?.node ? (
                      <img
                        src={product.node.images.edges[selectedImage].node.url}
                        alt={product.node.images.edges[selectedImage].node.altText || `${productTitle} — Accessoire Thermomix`}
                        className="w-full h-full object-contain p-6 md:p-10 group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                        <Package className="w-16 h-16 opacity-30" />
                      </div>
                    )}
                    <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                      <span className="bg-accent text-accent-foreground text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-sm">
                        ⭐ Best seller
                      </span>
                      <span className="bg-destructive text-destructive-foreground text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-sm">
                        -20%
                      </span>
                    </div>
                  </div>

                  {product.node.images.edges.length > 1 && (
                    <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
                      {product.node.images.edges.map((img, i) => (
                        <button
                          key={i}
                          onClick={() => setSelectedImage(i)}
                          className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-xl bg-secondary/30 overflow-hidden border-2 transition-all ${
                            i === selectedImage ? 'border-accent shadow-md' : 'border-transparent hover:border-border'
                          }`}
                        >
                          <img src={img.node.url} alt={`${productTitle} vue ${i + 1}`} className="w-full h-full object-contain p-1" loading="lazy" />
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Mini garanties sous l'image (desktop) */}
                  <div className="hidden lg:grid grid-cols-2 gap-3 pt-2">
                    {guarantees.map((g) => (
                      <div key={g.title} className="flex items-start gap-2.5 p-3 rounded-xl bg-secondary/40">
                        <g.icon className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs font-semibold text-foreground">{g.title}</p>
                          <p className="text-[10px] text-muted-foreground">{g.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ── Infos produit ── */}
                <div className="lg:sticky lg:top-28 self-start space-y-5">

                  {/* Titre H1 SEO */}
                  <h1 className="font-display font-extrabold text-2xl md:text-[2rem] leading-tight text-foreground">
                    {productTitle}
                  </h1>

                  {/* Accroche */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {accroche}
                  </p>

                  {/* Rating + stock */}
                  <div className="flex flex-wrap items-center gap-3 text-xs">
                    <span className="flex items-center gap-1 font-semibold text-foreground">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-accent text-accent" />
                      ))}
                      <span className="ml-1">4,8/5</span>
                      <span className="text-muted-foreground font-normal">(1 247 avis)</span>
                    </span>
                    <span className="flex items-center gap-1 text-destructive font-semibold">
                      <Clock className="w-3 h-3" />
                      Stock limité
                    </span>
                  </div>

                  {/* Prix */}
                  <div className="flex items-baseline gap-3 py-1">
                    <span className="text-3xl font-extrabold text-foreground">{productPrice}&nbsp;€</span>
                    <span className="text-lg text-muted-foreground line-through">{originalPrice}&nbsp;€</span>
                    <span className="text-[11px] font-bold text-destructive bg-destructive/10 px-2.5 py-1 rounded-full">-20%</span>
                  </div>

                  {/* Livraison info */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 bg-accent/5 border border-accent/20 rounded-xl px-4 py-3">
                      <Truck className="w-4 h-4 text-accent flex-shrink-0" />
                      <p className="text-xs text-foreground">
                        <strong>Livraison offerte</strong> dès 50€ · Expédié sous 48h depuis la France
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-[11px]">
                      <div className="flex items-center gap-2 bg-secondary/40 rounded-lg px-3 py-2">
                        <Truck className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-foreground">Colissimo</p>
                          <p className="text-muted-foreground">2-3 jours · 4,90€</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 bg-secondary/40 rounded-lg px-3 py-2">
                        <Package className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-foreground">Mondial Relay</p>
                          <p className="text-muted-foreground">3-5 jours · 3,90€</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bénéfices */}
                  <ul className="space-y-2.5">
                    {(benefitsFromShopify.length > 0 ? benefitsFromShopify : defaultBullets.map(b => b.text)).map((b, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-foreground">
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        <span>{typeof b === 'string' ? b : b}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Sélecteur de couleur */}
                  {hasColorOptions && (
                    <div className="space-y-2">
                      <label htmlFor="color-select" className="text-sm font-semibold text-foreground">
                        Couleur
                      </label>
                      <select
                        id="color-select"
                        value={selectedVariantIndex}
                        onChange={(e) => setSelectedVariantIndex(Number(e.target.value))}
                        className="w-full h-11 rounded-xl border border-border bg-background px-4 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                      >
                        {colorOptions.map((opt) => (
                          <option key={opt.index} value={opt.index}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  {/* CTA principal */}
                  <button
                    onClick={handleAddToCart}
                    disabled={isLoading}
                    className="w-full bg-accent text-accent-foreground font-bold py-5 rounded-xl hover:brightness-110 active:scale-[0.98] transition-all disabled:opacity-50 flex items-center justify-center gap-3 text-lg shadow-[0_0_30px_hsl(97_52%_51%/0.25)]"
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

                  {/* Sous-CTA */}
                  <div className="flex items-center justify-center gap-4 text-[10px] text-muted-foreground">
                    <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3" /> Paiement sécurisé</span>
                    <span className="flex items-center gap-1"><RefreshCw className="w-3 h-3" /> Satisfait ou remboursé</span>
                    <span className="flex items-center gap-1"><Truck className="w-3 h-3" /> Expédié sous 48h</span>
                  </div>

                  {/* Garanties mobile */}
                  <div className="grid grid-cols-2 gap-2.5 lg:hidden">
                    {guarantees.map((g) => (
                      <div key={g.title} className="flex items-start gap-2 p-3 rounded-xl bg-secondary/40">
                        <g.icon className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-[11px] font-semibold text-foreground">{g.title}</p>
                          <p className="text-[9px] text-muted-foreground leading-tight">{g.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* ═══════ SECTION 2 : CARACTÉRISTIQUES TECHNIQUES ═══════ */}
            <section className="bg-secondary/30 py-14 md:py-20">
              <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
                <div className="text-center mb-10">
                  <p className="text-accent font-semibold text-[11px] uppercase tracking-[0.2em] mb-2">Fiche technique</p>
                  <h2 className="font-display font-extrabold text-xl md:text-3xl text-foreground">
                    Conçu pour durer, pensé pour vous
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Specs table */}
                  <div className="bg-background rounded-2xl border border-border/50 overflow-hidden shadow-sm">
                    <div className="px-6 py-4 border-b border-border/50 bg-secondary/20">
                      <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
                        <Info className="w-4 h-4 text-accent" />
                        Caractéristiques
                      </h3>
                    </div>
                    <div className="divide-y divide-border/30">
                      {(specsFromShopify.length > 0 ? specsFromShopify : [
                        { label: 'Matière', value: 'PLA de qualité alimentaire' },
                        { label: 'Fabrication', value: 'Impression 3D — France 🇫🇷' },
                        { label: 'Compatibilité', value: 'Thermomix TM5, TM6, TM7' },
                        { label: 'Installation', value: 'Sans outil, en 2 secondes' },
                        { label: 'Entretien', value: 'Lavage à la main recommandé' },
                        { label: 'Garantie', value: 'Satisfait ou remboursé' },
                      ]).map((spec) => (
                        <div key={spec.label} className="flex items-center justify-between px-6 py-3.5">
                          <span className="text-xs text-muted-foreground font-medium">{spec.label}</span>
                          <span className="text-xs font-semibold text-foreground text-right">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Points forts */}
                  <div className="space-y-4">
                    {[
                      { icon: Award, title: 'Qualité alimentaire certifiée', desc: 'PLA sans BPA ni phtalates, adapté au contact alimentaire direct.' },
                      { icon: Flag, title: 'Fabriqué en France', desc: 'Chaque pièce est imprimée dans notre atelier français avec une précision au dixième de mm.' },
                      { icon: Zap, title: 'Installation instantanée', desc: 'Vous posez, ça clipe. Aucun outil nécessaire, stable dès la première seconde.' },
                      { icon: Package, title: 'Expédition soignée', desc: 'Emballage protecteur eco-responsable, expédié sous 48h.' },
                    ].map((item) => (
                      <div key={item.title} className="flex items-start gap-4 p-4 rounded-xl bg-background border border-border/50 shadow-sm">
                        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-foreground">{item.title}</h4>
                          <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* ═══════ SECTION 3 : AVANT / APRÈS ═══════ */}
            <section className="py-14 md:py-20">
              <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center mb-10">
                  <p className="text-accent font-semibold text-[11px] uppercase tracking-[0.2em] mb-2">Transformation</p>
                  <h2 className="font-display font-extrabold text-xl md:text-3xl text-foreground">
                    La différence en un coup d'œil
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
                  <div className="bg-destructive/[0.03] border border-destructive/20 rounded-2xl p-7 text-center">
                    <span className="text-4xl mb-3 block">😩</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-destructive mb-4 block">Avant</span>
                    <ul className="space-y-3 text-sm text-muted-foreground text-left">
                      <li className="flex items-center gap-2"><span className="text-destructive font-bold">✗</span> Désordre sur le plan de travail</li>
                      <li className="flex items-center gap-2"><span className="text-destructive font-bold">✗</span> Perte de temps à chaque utilisation</li>
                      <li className="flex items-center gap-2"><span className="text-destructive font-bold">✗</span> Accessoires qui traînent partout</li>
                    </ul>
                  </div>
                  <div className="bg-accent/[0.03] border border-accent/20 rounded-2xl p-7 text-center">
                    <span className="text-4xl mb-3 block">😍</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-accent mb-4 block">Après – avec Thermo3D</span>
                    <ul className="space-y-3 text-sm text-foreground text-left">
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent flex-shrink-0" /> Cuisine parfaitement organisée</li>
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent flex-shrink-0" /> Gain de temps au quotidien</li>
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent flex-shrink-0" /> Confort et plaisir de cuisiner</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* ═══════ SECTION 4 : DESCRIPTION DÉTAILLÉE SEO ═══════ */}
            <section className="bg-secondary/20 py-14 md:py-20">
              <div className="container mx-auto px-4 sm:px-6 max-w-2xl">
                <div className="text-center mb-8">
                  <p className="text-accent font-semibold text-[11px] uppercase tracking-[0.2em] mb-2">En détail</p>
                  <h2 className="font-display font-extrabold text-xl md:text-3xl text-foreground leading-tight">
                    {productTitle}
                  </h2>
                </div>
                <div className="space-y-5 text-sm text-muted-foreground leading-relaxed">
                  {parsed?.description ? (
                    <p>{parsed.description}</p>
                  ) : product.node.description ? (
                    <p>{product.node.description}</p>
                  ) : (
                    <p>
                      Cet accessoire <strong className="text-foreground">Thermo3D</strong> est conçu pour optimiser votre espace cuisine au quotidien.
                      Fabriqué en France par <strong className="text-foreground">impression 3D</strong> avec du <strong className="text-foreground">PLA de qualité alimentaire</strong>,
                      il s'adapte parfaitement à votre <strong className="text-foreground">Thermomix</strong>.
                    </p>
                  )}
                </div>

                <div className="flex flex-wrap justify-center gap-5 mt-10 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-2 bg-background px-4 py-2.5 rounded-full border border-border/50">
                    <Flag className="w-3.5 h-3.5 text-accent" /> Fabrication française
                  </span>
                  <span className="inline-flex items-center gap-2 bg-background px-4 py-2.5 rounded-full border border-border/50">
                    <CheckCircle className="w-3.5 h-3.5 text-accent" /> PLA alimentaire
                  </span>
                  <span className="inline-flex items-center gap-2 bg-background px-4 py-2.5 rounded-full border border-border/50">
                    <Star className="w-3.5 h-3.5 text-accent fill-accent" /> 4,8/5 – 1 247 avis
                  </span>
                </div>
              </div>
            </section>

            {/* ═══════ SECTION 5 : AVIS CLIENTS ═══════ */}
            <section className="py-14 md:py-20">
              <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center mb-10">
                  <div className="flex items-center justify-center gap-1 mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                    <span className="text-sm font-bold text-foreground ml-2">4,8/5</span>
                    <span className="text-xs text-muted-foreground ml-1">· 1 247 avis vérifiés</span>
                  </div>
                  <h2 className="font-display font-extrabold text-xl md:text-3xl text-foreground">
                    Ils ne peuvent plus s'en passer
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
                  {reviews.map((r) => (
                    <div key={r.name} className="bg-secondary/30 border border-border/30 rounded-2xl p-5 flex flex-col gap-3 hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between">
                        <div className="flex gap-0.5">
                          {Array.from({ length: r.rating }).map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-accent text-accent" />
                          ))}
                        </div>
                        <span className="text-[9px] text-muted-foreground">{r.date}</span>
                      </div>
                      <p className="text-xs text-foreground/80 leading-relaxed flex-1">"{r.text}"</p>
                      <div className="flex items-center gap-2 pt-2 border-t border-border/30">
                        <div className="w-7 h-7 rounded-full bg-accent/10 flex items-center justify-center text-[10px] font-bold text-accent">
                          {r.name[0]}
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[11px] font-semibold text-foreground">{r.name}</span>
                          <span className="text-[9px] text-accent flex items-center gap-0.5">
                            <BadgeCheck className="w-2.5 h-2.5" /> Achat vérifié
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ═══════ SECTION 6 : FAQ ═══════ */}
            <section className="bg-secondary/20 py-14 md:py-20">
              <div className="container mx-auto px-4 sm:px-6 max-w-2xl">
                <div className="text-center mb-10">
                  <p className="text-accent font-semibold text-[11px] uppercase tracking-[0.2em] mb-2">FAQ</p>
                  <h2 className="font-display font-extrabold text-xl md:text-3xl text-foreground">
                    Questions fréquentes
                  </h2>
                </div>
                <div className="space-y-2.5">
                  {faqs.map((faq, i) => (
                    <div key={i} className="bg-background border border-border/40 rounded-xl overflow-hidden shadow-sm">
                      <button
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-secondary/20 transition-colors"
                      >
                        <span className="text-sm font-semibold text-foreground pr-4">{faq.q}</span>
                        <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform flex-shrink-0 ${openFaq === i ? 'rotate-180' : ''}`} />
                      </button>
                      {openFaq === i && (
                        <div className="px-5 pb-4">
                          <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ═══════ SECTION 7 : CROSS-SELL ═══════ */}
            <CrossSell />

            {/* ═══════ MAILLAGE INTERNE ═══════ */}
            <section className="py-10 bg-secondary/20">
              <div className="container mx-auto px-6">
                <h3 className="font-display font-semibold text-base text-foreground mb-4 text-center">Découvrir nos catégories</h3>
                <div className="flex flex-wrap justify-center gap-3 text-sm">
                  <Link to="/accessoires-thermomix" className="px-4 py-2 bg-background rounded-full border border-border/50 hover:border-accent transition-colors">Accessoires Thermomix</Link>
                  <Link to="/rangement-thermomix" className="px-4 py-2 bg-background rounded-full border border-border/50 hover:border-accent transition-colors">Rangement Thermomix</Link>
                  <Link to="/accessoires-tm6" className="px-4 py-2 bg-background rounded-full border border-border/50 hover:border-accent transition-colors">Accessoires TM6</Link>
                  <Link to="/accessoires-tm7" className="px-4 py-2 bg-background rounded-full border border-border/50 hover:border-accent transition-colors">Accessoires TM7</Link>
                  <Link to="/blog" className="px-4 py-2 bg-background rounded-full border border-border/50 hover:border-accent transition-colors">Blog & Conseils</Link>
                </div>
              </div>
            </section>

            {/* ═══════ SECTION 8 : CTA FINAL ═══════ */}
            <section className="bg-foreground text-background">
              <div className="container mx-auto px-4 sm:px-6 py-16 md:py-20 text-center">
                <div className="flex items-center justify-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <h2 className="font-display font-extrabold text-xl md:text-3xl leading-tight max-w-xl mx-auto">
                  Prêt à transformer votre cuisine ?
                </h2>
                <p className="mt-4 text-background/60 text-sm max-w-md mx-auto">
                  Rejoignez +1 000 clients satisfaits. Installation en 2 secondes, satisfaction garantie.
                </p>
                <button
                  onClick={handleAddToCart}
                  disabled={isLoading}
                  className="mt-8 inline-flex items-center gap-3 bg-accent text-accent-foreground px-10 py-5 rounded-full font-bold text-base hover:brightness-110 active:scale-[0.98] transition-all disabled:opacity-50 shadow-[0_0_30px_hsl(97_52%_51%/0.3)]"
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
                <div className="flex items-center justify-center gap-6 mt-6 text-background/40 text-[10px]">
                  <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3" /> Paiement sécurisé</span>
                  <span className="flex items-center gap-1"><Truck className="w-3 h-3" /> Livraison rapide</span>
                  <span className="flex items-center gap-1"><RefreshCw className="w-3 h-3" /> Satisfait ou remboursé</span>
                </div>
              </div>
            </section>

            {/* Sticky mobile CTA */}
            <div className="fixed bottom-0 left-0 right-0 p-3 bg-background/95 backdrop-blur-md border-t border-border lg:hidden z-50">
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
            <div className="h-20 lg:hidden" />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;
