import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star } from 'lucide-react';
import TopBanner from '@/components/TopBanner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { useShopifyProducts } from '@/hooks/useShopifyProducts';
import { Loader2 } from 'lucide-react';

const AccessoiresTM6 = () => {
  const { data: products, isLoading } = useShopifyProducts(50);

  const tm6Products = products?.filter((p) => {
    const title = p.node.title.toLowerCase();
    const desc = p.node.description.toLowerCase();
    return title.includes('tm6') || desc.includes('tm6');
  }) || [];

  const displayProducts = tm6Products.length > 0 ? tm6Products : products?.slice(0, 8) || [];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Accessoires Thermomix TM6 — Support, Rangement & Organisation | Thermo3D</title>
        <meta name="description" content="Accessoires Thermomix TM6 imprimés en 3D : support, rangement, organisateur cuisine. Conçus spécialement pour le TM6. Fabriqué en France, livraison rapide." />
        <link rel="canonical" href="https://thermo3d.fr/accessoires-tm6" />
        <meta name="keywords" content="accessoire thermomix tm6, accessoires cuisine robot, organisation cuisine, support thermomix tm6, rangement tm6" />
        <meta property="og:title" content="Accessoires Thermomix TM6 — Thermo3D" />
        <meta property="og:description" content="Accessoires Thermomix TM6 imprimés en 3D. Support, rangement et organisation cuisine." />
        <meta property="og:url" content="https://thermo3d.fr/accessoires-tm6" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Accessoires Thermomix TM6",
            description: "Accessoires Thermomix TM6 imprimés en 3D : support, rangement, organisateur cuisine.",
            url: "https://thermo3d.fr/accessoires-tm6",
            provider: { "@type": "Organization", name: "Thermo3D", url: "https://thermo3d.fr" },
          })}
        </script>
      </Helmet>

      <TopBanner />
      <Header />

      {/* Hero */}
      <section className="bg-hero">
        <div className="container mx-auto px-6 py-16 md:py-24">
          <p className="text-accent font-semibold text-xs uppercase tracking-[0.2em] mb-4">Compatible TM6</p>
          <h1 className="font-display font-bold text-3xl md:text-5xl text-foreground leading-tight max-w-3xl">
            Accessoires Thermomix TM6
          </h1>
          <p className="mt-6 text-lg text-accent max-w-2xl leading-relaxed">
            Des accessoires spécialement conçus pour votre Thermomix TM6. Organisation, rangement et support adaptés.
          </p>
          <div className="flex flex-wrap items-center gap-5 mt-8 text-sm text-white/40">
            <span className="inline-flex items-center gap-1.5">
              <Star className="w-4 h-4 text-accent fill-accent" /> 4,8/5 – +1000 clients
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-accent/70" /> Spécial TM6
            </span>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="container mx-auto px-6 py-16 md:py-24">
        <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-10">
          Accessoires compatibles Thermomix TM6
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

      {/* Internal links */}
      <section className="bg-secondary/30 py-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <Link to="/accessoires-thermomix" className="px-4 py-2 bg-background rounded-full border border-border/50 hover:border-accent transition-colors">Tous les accessoires</Link>
            <Link to="/accessoires-tm7" className="px-4 py-2 bg-background rounded-full border border-border/50 hover:border-accent transition-colors">Accessoires TM7</Link>
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
              Accessoires Thermomix TM6 : tirez le meilleur de votre robot cuisine
            </h2>
            <p>
              Le <strong className="text-foreground">Thermomix TM6</strong> est l'un des robots de cuisine les plus populaires au monde. Avec son écran tactile, sa connectivité et ses nombreuses fonctionnalités, il est devenu un incontournable dans les cuisines françaises. Pour exploiter pleinement son potentiel, les bons <strong className="text-foreground">accessoires Thermomix TM6</strong> font toute la différence.
            </p>
            <p>
              Chez Thermo3D, nous concevons des <strong className="text-foreground">accessoires cuisine robot</strong> spécifiquement adaptés aux dimensions et à l'ergonomie du TM6. Nos supports, rangements et organisateurs sont fabriqués en France par impression 3D avec du PLA de qualité alimentaire, garantissant un ajustement parfait et une durabilité optimale.
            </p>
            <p>
              L'<strong className="text-foreground">organisation cuisine</strong> est au cœur de notre démarche. Un plan de travail bien organisé, c'est du temps gagné à chaque utilisation. Nos clients témoignent d'un gain moyen de 30 minutes par semaine grâce à une cuisine mieux structurée.
            </p>
            <p>
              Que vous ayez besoin d'un support pour votre varoma, d'un rangement pour vos spatules et fouets, ou d'un cache écran pour protéger votre TM6, notre gamme d'<strong className="text-foreground">accessoires Thermomix TM6</strong> couvre tous les besoins. Chaque produit est conçu pour s'installer en quelques secondes, sans outil ni modification.
            </p>
            <p>
              Investir dans des <strong className="text-foreground">accessoires cuisine robot</strong> de qualité, c'est améliorer votre quotidien et profiter pleinement de votre <strong className="text-foreground">Thermomix TM6</strong>. Livraison offerte dès 50€, satisfait ou remboursé pendant 30 jours.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AccessoiresTM6;
