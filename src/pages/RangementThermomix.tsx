import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Package } from 'lucide-react';
import TopBanner from '@/components/TopBanner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { useShopifyProducts } from '@/hooks/useShopifyProducts';
import { Loader2 } from 'lucide-react';

const RangementThermomix = () => {
  const { data: products, isLoading } = useShopifyProducts(50);

  const rangementProducts = products?.filter((p) => {
    const title = p.node.title.toLowerCase();
    return title.includes('rang') || title.includes('organis') || title.includes('cache');
  }) || [];

  const displayProducts = rangementProducts.length > 0 ? rangementProducts : products?.slice(0, 4) || [];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Rangement Thermomix TM5 TM6 TM7 — Organisateur Cuisine | Thermo3D</title>
        <meta name="description" content="Rangement Thermomix imprimé en 3D : organisateur, cache écran, range couteau pour TM5, TM6 et TM7. Organisez votre cuisine. Fabriqué en France." />
        <link rel="canonical" href="https://thermo3d.fr/rangement-thermomix" />
        <meta name="keywords" content="rangement thermomix, organisateur thermomix, rangement tm6, rangement tm5, rangement tm7, cache écran thermomix" />
        <meta property="og:title" content="Rangement Thermomix TM5 TM6 TM7 — Thermo3D" />
        <meta property="og:description" content="Rangement Thermomix imprimé en 3D : organisateur, cache écran pour TM5, TM6 et TM7. Fabriqué en France." />
        <meta property="og:url" content="https://thermo3d.fr/rangement-thermomix" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Rangement Thermomix TM5 TM6 TM7",
            description: "Solutions de rangement Thermomix imprimées en 3D : organisateur, cache écran, range couteau. Compatible TM5, TM6 et TM7.",
            url: "https://thermo3d.fr/rangement-thermomix",
            provider: { "@type": "Organization", name: "Thermo3D", url: "https://thermo3d.fr" },
          })}
        </script>
      </Helmet>

      <TopBanner />
      <Header />

      {/* Hero */}
      <section className="bg-hero">
        <div className="container mx-auto px-6 py-16 md:py-24">
          <p className="text-accent font-semibold text-xs uppercase tracking-[0.2em] mb-4">Rangement Thermomix</p>
          <h1 className="font-display font-bold text-3xl md:text-5xl text-white leading-tight max-w-3xl">
            Rangement Thermomix TM5, TM6 & TM7 : une cuisine parfaitement organisée
          </h1>
          <p className="mt-6 text-lg text-white/50 max-w-2xl leading-relaxed">
            Nos solutions de rangement Thermomix transforment le désordre en organisation. Chaque accessoire trouve sa place.
          </p>
          <div className="flex flex-wrap items-center gap-5 mt-8 text-sm text-white/40">
            <span className="inline-flex items-center gap-1.5">
              <Package className="w-4 h-4 text-accent/70" /> Expédié sous 48h
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-accent/70" /> Compatible TM5 / TM6 / TM7
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Star className="w-4 h-4 text-accent fill-accent" /> 4,8/5 – +1000 avis
            </span>
          </div>
        </div>
      </section>

      {/* Before/After */}
      <section className="bg-secondary/40 py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="bg-background rounded-2xl p-8 shadow-premium text-center">
              <span className="text-3xl mb-4 block">😩</span>
              <span className="text-xs font-semibold uppercase tracking-widest text-destructive/70 mb-3 block">Sans rangement</span>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Accessoires Thermomix éparpillés</li>
                <li>Plan de travail encombré</li>
                <li>Perte de temps à chercher</li>
              </ul>
            </div>
            <div className="bg-background rounded-2xl p-8 shadow-premium text-center border border-accent/20">
              <span className="text-3xl mb-4 block">😍</span>
              <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-3 block">Avec rangement Thermo3D</span>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Tout organisé et accessible</li>
                <li>Cuisine propre et dégagée</li>
                <li>Gain de temps au quotidien</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="container mx-auto px-6 py-16 md:py-24">
        <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-10">
          Nos solutions de rangement Thermomix
        </h2>
        {isLoading ? (
          <div className="flex justify-center py-16">
            <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {displayProducts.map((product) => (
              <ProductCard key={product.node.id} product={product} />
            ))}
          </div>
        )}
        <div className="text-center mt-12">
          <Link
            to="/catalogue"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-full font-semibold text-sm hover:brightness-110 transition-all"
          >
            Voir tout le catalogue <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* SEO Content */}
      <section className="border-t border-border/60">
        <div className="container mx-auto px-6 py-14 md:py-20">
          <div className="max-w-3xl mx-auto space-y-6 text-sm text-muted-foreground leading-relaxed">
            <h2 className="font-display font-semibold text-lg md:text-xl text-foreground">
              Rangement Thermomix : organisez votre cuisine intelligemment
            </h2>
            <p>
              Le <strong className="text-foreground">rangement Thermomix</strong> est essentiel pour profiter pleinement de votre appareil au quotidien. Sans organisation adaptée, les accessoires du <strong className="text-foreground">Thermomix TM5, TM6 ou TM7</strong> — spatules, varoma, plateau, couteaux — s'accumulent et encombrent votre plan de travail.
            </p>
            <p>
              Thermo3D a développé une gamme de <strong className="text-foreground">rangements Thermomix</strong> imprimés en 3D qui transforment votre cuisine. Nos organisateurs, caches écran et range-couteaux sont conçus spécifiquement pour les dimensions de votre <strong className="text-foreground">Thermomix</strong>.
            </p>
            <h3 className="font-display font-semibold text-base text-foreground pt-2">
              Des rangements Thermomix pour chaque besoin
            </h3>
            <p>
              Que vous cherchiez un <strong className="text-foreground">rangement Thermomix</strong> pour vos couteaux, un cache écran protecteur, ou un organisateur complet pour tous vos accessoires, notre catalogue couvre tous les besoins. Chaque pièce est fabriquée en France avec du PLA de qualité alimentaire.
            </p>
            <p>
              L'impression 3D nous permet de garantir un ajustement parfait sur votre <strong className="text-foreground">Thermomix TM5</strong>, <strong className="text-foreground">TM6</strong> ou <strong className="text-foreground">TM7</strong>. Installation sans outil en quelques secondes : vous posez, ça tient, c'est rangé.
            </p>
            <p>
              Nos clients témoignent d'un vrai changement dans leur quotidien. Fini le désordre, fini la perte de temps. Avec un <strong className="text-foreground">rangement Thermomix</strong> adapté, chaque accessoire a sa place et votre cuisine reste propre et fonctionnelle. Rejoignez plus de 1000 clients satisfaits et commandez votre <strong className="text-foreground">rangement Thermomix</strong> dès maintenant.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RangementThermomix;
