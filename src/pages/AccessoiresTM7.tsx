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

const AccessoiresTM7 = () => {
  const { data: products, isLoading } = useShopifyProducts(50);

  const tm7Products = products ? filterByCompatibility(products, 'tm7') : [];
  const displayProducts = tm7Products.length > 0 ? tm7Products : products?.slice(0, 8) || [];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Accessoires Thermomix TM7 — Support, Rangement & Organisation | Thermo3D</title>
        <meta name="description" content="Accessoires Thermomix TM7 imprimés en 3D : support, rangement, organisateur cuisine. Conçus pour le nouveau TM7. Fabriqué en France, livraison rapide." />
        <link rel="canonical" href="https://thermo3d.fr/accessoires-tm7" />
        <meta name="keywords" content="accessoire thermomix tm7, rangement cuisine, accessoires thermomix, support thermomix tm7, organisation cuisine tm7" />
        <meta property="og:title" content="Accessoires Thermomix TM7 — Thermo3D" />
        <meta property="og:description" content="Accessoires Thermomix TM7 imprimés en 3D. Support, rangement et organisation cuisine." />
        <meta property="og:url" content="https://thermo3d.fr/accessoires-tm7" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Accessoires Thermomix TM7",
            description: "Accessoires Thermomix TM7 imprimés en 3D : support, rangement, organisateur cuisine.",
            url: "https://thermo3d.fr/accessoires-tm7",
            provider: { "@type": "Organization", name: "Thermo3D", url: "https://thermo3d.fr" },
          })}
        </script>
      </Helmet>

      <TopBanner />
      <Header />

      {/* Hero */}
      <section className="bg-hero">
        <div className="container mx-auto px-6 py-16 md:py-24">
          <p className="text-accent font-semibold text-xs uppercase tracking-[0.2em] mb-4">Compatible TM7</p>
          <h1 className="font-display font-bold text-3xl md:text-5xl text-foreground leading-tight max-w-3xl">
            Accessoires Thermomix TM7
          </h1>
          <p className="mt-6 text-lg text-accent max-w-2xl leading-relaxed">
            Des accessoires optimisés pour le tout nouveau Thermomix TM7. Organisation parfaite, rangement intelligent.
          </p>
          <div className="flex flex-wrap items-center gap-5 mt-8 text-sm text-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Star className="w-4 h-4 text-accent fill-accent" /> 4,8/5 – +1000 clients
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-accent/70" /> Spécial TM7
            </span>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="container mx-auto px-6 py-16 md:py-24">
        <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-10">
          Accessoires compatibles Thermomix TM7
        </h2>
        {isLoading ? (
          <div className="flex justify-center py-16">
            <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
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

      {/* Internal links */}
      <section className="bg-secondary/30 py-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <Link to="/accessoires-thermomix" className="px-4 py-2 bg-background rounded-full border border-border/50 hover:border-accent transition-colors">Tous les accessoires</Link>
            <Link to="/accessoires-tm6" className="px-4 py-2 bg-background rounded-full border border-border/50 hover:border-accent transition-colors">Accessoires TM6</Link>
            <Link to="/rangement-thermomix" className="px-4 py-2 bg-background rounded-full border border-border/50 hover:border-accent transition-colors">Rangement Thermomix</Link>
            <Link to="/support-thermomix" className="px-4 py-2 bg-background rounded-full border border-border/50 hover:border-accent transition-colors">Support Thermomix</Link>
            <Link to="/blog" className="px-4 py-2 bg-background rounded-full border border-border/50 hover:border-accent transition-colors">Blog & Conseils</Link>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="border-t border-border/60">
        <div className="container mx-auto px-6 py-14 md:py-20">
          <div className="max-w-3xl mx-auto space-y-6 text-sm text-muted-foreground leading-relaxed">
            <h2 className="font-display font-semibold text-lg md:text-xl text-foreground">
              Accessoires Thermomix TM7 : préparez votre cuisine pour le futur
            </h2>
            <p>
              Le <strong className="text-foreground">Thermomix TM7</strong> représente la nouvelle génération de robots de cuisine. Avec ses innovations technologiques et son design repensé, il offre des possibilités encore plus étendues pour cuisiner au quotidien. Les bons <strong className="text-foreground">accessoires Thermomix</strong> vous permettent d'en tirer le meilleur parti.
            </p>
            <p>
              Nos <strong className="text-foreground">accessoires Thermomix TM7</strong> sont spécialement conçus pour s'adapter aux nouvelles dimensions et à l'ergonomie du TM7. Fabriqués par impression 3D dans notre atelier en Corse, chaque pièce bénéficie d'une précision au dixième de millimètre pour un ajustement parfait.
            </p>
            <p>
              Le <strong className="text-foreground">rangement cuisine</strong> est essentiel pour profiter pleinement de votre TM7. Nos organisateurs, supports et rangements sont pensés pour libérer votre plan de travail et garder tous vos ustensiles accessibles. Une cuisine bien organisée, c'est plus de plaisir et moins de stress au quotidien.
            </p>
            <p>
              Tous nos <strong className="text-foreground">accessoires Thermomix</strong> pour TM7 sont fabriqués en PLA de qualité alimentaire, un matériau écologique et certifié pour un usage alimentaire. L'installation est instantanée, sans outil, pour un résultat immédiat dans votre cuisine.
            </p>
            <p>
              Rejoignez plus de 1000 clients satisfaits qui ont déjà transformé leur expérience Thermomix avec les <strong className="text-foreground">accessoires Thermo3D</strong>. Livraison offerte dès 50€, satisfait ou remboursé 14 jours.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AccessoiresTM7;
