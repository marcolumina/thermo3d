import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star } from 'lucide-react';
import TopBanner from '@/components/TopBanner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { useShopifyProducts } from '@/hooks/useShopifyProducts';
import { filterByCompatibility } from '@/lib/compatibility';
import { Loader2 } from 'lucide-react';

const AccessoiresTM5 = () => {
  const { data: products, isLoading } = useShopifyProducts(50);

  const displayProducts = products ? filterByCompatibility(products, 'tm5') : [];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Accessoires Thermomix TM5 — Support, Rangement & Organisation | Thermo3D</title>
        <meta name="description" content="Accessoires Thermomix TM5 imprimés en 3D : support, rangement, organisateur cuisine. Compatibles TM5. Fabriqué en France, livraison rapide." />
        <link rel="canonical" href="https://thermo3d.fr/accessoires-tm5" />
        <meta name="keywords" content="accessoire thermomix tm5, accessoires cuisine robot, organisation cuisine, support thermomix tm5, rangement tm5" />
        <meta property="og:title" content="Accessoires Thermomix TM5 — Thermo3D" />
        <meta property="og:description" content="Accessoires Thermomix TM5 imprimés en 3D. Support, rangement et organisation cuisine." />
        <meta property="og:url" content="https://thermo3d.fr/accessoires-tm5" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Accessoires Thermomix TM5",
            description: "Accessoires Thermomix TM5 imprimés en 3D : support, rangement, organisateur cuisine.",
            url: "https://thermo3d.fr/accessoires-tm5",
            provider: { "@type": "Organization", name: "Thermo3D", url: "https://thermo3d.fr" },
          })}
        </script>
      </Helmet>

      <TopBanner />
      <Header />

      <section className="bg-hero">
        <div className="container mx-auto px-6 py-16 md:py-24">
          <p className="text-accent font-semibold text-xs uppercase tracking-[0.2em] mb-4">Compatible TM5</p>
          <h1 className="font-display font-bold text-3xl md:text-5xl text-foreground leading-tight max-w-3xl">
            Accessoires Thermomix TM5
          </h1>
          <p className="mt-6 text-lg text-accent max-w-2xl leading-relaxed">
            Des accessoires fiables, conçus pour s'adapter parfaitement à votre Thermomix TM5. Donnez une nouvelle vie à votre robot.
          </p>
          <div className="flex flex-wrap items-center gap-5 mt-8 text-sm text-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Star className="w-4 h-4 text-accent fill-accent" /> 4,8/5 – +1000 clients
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-accent/70" /> Spécial TM5
            </span>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-16 md:py-24">
        <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-10">
          Accessoires compatibles Thermomix TM5
        </h2>
        {isLoading ? (
          <div className="flex justify-center py-16">
            <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
          </div>
        ) : displayProducts.length === 0 ? (
          <div className="text-center py-16 bg-secondary/30 rounded-2xl">
            <p className="text-foreground font-medium">Aucun accessoire compatible TM5 disponible pour le moment.</p>
            <p className="text-muted-foreground text-sm mt-2">Notre gamme s'étoffe régulièrement. Découvrez en attendant l'ensemble du catalogue.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
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

      <section className="bg-secondary/30 py-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <Link to="/accessoires-thermomix" className="px-4 py-2 bg-background rounded-full border border-border/50 hover:border-accent transition-colors">Tous les accessoires</Link>
            <Link to="/accessoires-tm6" className="px-4 py-2 bg-background rounded-full border border-border/50 hover:border-accent transition-colors">Accessoires TM6</Link>
            <Link to="/accessoires-tm7" className="px-4 py-2 bg-background rounded-full border border-border/50 hover:border-accent transition-colors">Accessoires TM7</Link>
            <Link to="/rangement-thermomix" className="px-4 py-2 bg-background rounded-full border border-border/50 hover:border-accent transition-colors">Rangement Thermomix</Link>
            <Link to="/blog" className="px-4 py-2 bg-background rounded-full border border-border/50 hover:border-accent transition-colors">Blog & Conseils</Link>
          </div>
        </div>
      </section>

      <section className="border-t border-border/60">
        <div className="container mx-auto px-6 py-14 md:py-20">
          <div className="max-w-3xl mx-auto space-y-6 text-sm text-muted-foreground leading-relaxed">
            <h2 className="font-display font-semibold text-lg md:text-xl text-foreground">
              Accessoires Thermomix TM5 : prolongez la vie de votre robot
            </h2>
            <p>
              Le <strong className="text-foreground">Thermomix TM5</strong> reste un compagnon fidèle dans des milliers de cuisines françaises. Pour continuer à en profiter pleinement, des <strong className="text-foreground">accessoires Thermomix TM5</strong> bien conçus font toute la différence : organisation, gain de place, protection.
            </p>
            <p>
              Chez Thermo3D, nous fabriquons en France, par impression 3D, des supports, rangements et organisateurs spécifiquement adaptés à la géométrie du TM5. PLA de qualité alimentaire, ajustement précis, durabilité testée au quotidien.
            </p>
            <p>
              Que vous cherchiez un support pour votre varoma, un rangement pour vos spatules, un organisateur de plan de travail ou une protection pour la balance, notre gamme TM5 couvre l'essentiel des besoins. Livraison offerte dès 50€, satisfait ou remboursé pendant 14 jours.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AccessoiresTM5;
