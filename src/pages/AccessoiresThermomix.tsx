import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star } from 'lucide-react';
import TopBanner from '@/components/TopBanner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { useShopifyProducts } from '@/hooks/useShopifyProducts';
import { Loader2 } from 'lucide-react';

const AccessoiresThermomix = () => {
  const { data: products, isLoading } = useShopifyProducts(8);

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Accessoires Thermomix TM5 TM6 TM7 — Imprimés en 3D | Thermo3D</title>
        <meta name="description" content="Découvrez tous les accessoires Thermomix TM5, TM6 et TM7 imprimés en 3D par Thermo3D. Support, rangement, organisateur, cache écran. Fabriqué en France, qualité alimentaire." />
        <link rel="canonical" href="https://thermo3d.fr/accessoires-thermomix" />
        <meta name="keywords" content="accessoires thermomix, accessoire thermomix tm5, accessoire thermomix tm6, accessoire thermomix tm7, accessoires thermomix 3D" />
        <meta property="og:title" content="Accessoires Thermomix TM5 TM6 TM7 — Thermo3D" />
        <meta property="og:description" content="Tous les accessoires Thermomix imprimés en 3D : support, rangement, organisateur. Compatible TM5, TM6 et TM7." />
        <meta property="og:url" content="https://thermo3d.fr/accessoires-thermomix" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Accessoires Thermomix TM5 TM6 TM7",
            description: "Gamme complète d'accessoires Thermomix imprimés en 3D, compatibles TM5, TM6 et TM7.",
            url: "https://thermo3d.fr/accessoires-thermomix",
            provider: { "@type": "Organization", name: "Thermo3D", url: "https://thermo3d.fr" },
          })}
        </script>
      </Helmet>

      <TopBanner />
      <Header />

      {/* Hero */}
      <section className="bg-hero">
        <div className="container mx-auto px-6 py-16 md:py-24">
          <p className="text-accent font-semibold text-xs uppercase tracking-[0.2em] mb-4">Gamme complète</p>
          <h1 className="font-display font-bold text-3xl md:text-5xl text-white leading-tight max-w-3xl">
            Accessoires Thermomix TM5, TM6 & TM7 imprimés en 3D
          </h1>
          <p className="mt-6 text-lg text-white/50 max-w-2xl leading-relaxed">
            Des accessoires Thermomix pensés pour simplifier votre quotidien en cuisine. Fabriqués en France avec du PLA de qualité alimentaire.
          </p>
          <div className="flex flex-wrap items-center gap-5 mt-8 text-sm text-white/40">
            <span className="inline-flex items-center gap-1.5">
              <Star className="w-4 h-4 text-accent fill-accent" /> 4,8/5 – +1000 clients
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-accent/70" /> Compatible TM5 / TM6 / TM7
            </span>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="container mx-auto px-6 py-16 md:py-24">
        <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-10">
          Nos accessoires Thermomix les plus populaires
        </h2>
        {isLoading ? (
          <div className="flex justify-center py-16">
            <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {products?.map((product) => (
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
              Pourquoi choisir des accessoires Thermomix Thermo3D ?
            </h2>
            <p>
              Le <strong className="text-foreground">Thermomix</strong> est un allié indispensable en cuisine, mais son utilisation peut être grandement améliorée avec les bons <strong className="text-foreground">accessoires Thermomix</strong>. Chez Thermo3D, nous concevons des <strong className="text-foreground">accessoires Thermomix TM5, TM6 et TM7</strong> qui répondent à de vrais besoins du quotidien : rangement, organisation, protection et confort d'utilisation.
            </p>
            <p>
              Chaque <strong className="text-foreground">accessoire Thermomix</strong> est fabriqué en France par impression 3D avec du PLA de qualité alimentaire. Cette technologie nous permet de créer des pièces parfaitement ajustées, avec une précision au dixième de millimètre, pour un ajustement optimal sur votre <strong className="text-foreground">Thermomix TM5</strong>, <strong className="text-foreground">TM6</strong> ou <strong className="text-foreground">TM7</strong>.
            </p>
            <h3 className="font-display font-semibold text-base text-foreground pt-2">
              Une gamme complète d'accessoires Thermomix
            </h3>
            <p>
              Notre catalogue comprend des <strong className="text-foreground">supports Thermomix</strong> pour libérer votre plan de travail, des solutions de <strong className="text-foreground">rangement Thermomix</strong> pour organiser vos ustensiles, des caches écran pour protéger votre appareil, et des organisateurs pour optimiser chaque centimètre de votre cuisine.
            </p>
            <p>
              Que vous possédiez un <strong className="text-foreground">Thermomix TM5</strong>, un <strong className="text-foreground">TM6</strong> ou le tout nouveau <strong className="text-foreground">TM7</strong>, nos accessoires sont conçus pour s'adapter parfaitement. Plus de 1000 clients nous font déjà confiance avec une note moyenne de 4,8/5.
            </p>
            <p>
              Tous nos <strong className="text-foreground">accessoires Thermomix</strong> sont expédiés sous 48h depuis notre atelier en France. Installation en quelques secondes, sans outil, pour un résultat immédiat. Transformez votre expérience Thermomix dès aujourd'hui avec Thermo3D.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AccessoiresThermomix;
