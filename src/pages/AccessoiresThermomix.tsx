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
        <title>Accessoires Thermomix indispensables TM6 TM7 | Thermo3D</title>
        <meta name="description" content="Découvrez les accessoires Thermomix indispensables pour TM6 et TM7. Support, rangement, organisateur cuisine. Impression 3D française, qualité alimentaire." />
        <link rel="canonical" href="https://thermo3d.fr/accessoires-thermomix" />
        <meta name="keywords" content="accessoires thermomix, accessoire thermomix tm6, accessoire thermomix tm7, support thermomix, rangement thermomix, organisation cuisine" />
        <meta property="og:title" content="Accessoires Thermomix indispensables — Thermo3D" />
        <meta property="og:description" content="Tous les accessoires Thermomix imprimés en 3D : support, rangement, organisateur. Compatible TM6 et TM7." />
        <meta property="og:url" content="https://thermo3d.fr/accessoires-thermomix" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Accessoires Thermomix indispensables",
            description: "Gamme complète d'accessoires Thermomix imprimés en 3D, compatibles TM6 et TM7.",
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
            Accessoires Thermomix indispensables
          </h1>
          <p className="mt-6 text-lg text-white/50 max-w-2xl leading-relaxed">
            Des accessoires Thermomix pensés pour simplifier votre quotidien en cuisine. Compatibles TM6 et TM7.
          </p>
          <div className="flex flex-wrap items-center gap-5 mt-8 text-sm text-white/40">
            <span className="inline-flex items-center gap-1.5">
              <Star className="w-4 h-4 text-accent fill-accent" /> 4,8/5 – +1000 clients
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-accent/70" /> Compatible TM6 / TM7
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
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

      {/* Internal links */}
      <section className="bg-secondary/30 py-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <Link to="/rangement-thermomix" className="px-4 py-2 bg-background rounded-full border border-border/50 hover:border-accent transition-colors">Rangement Thermomix</Link>
            <Link to="/accessoires-tm6" className="px-4 py-2 bg-background rounded-full border border-border/50 hover:border-accent transition-colors">Accessoires TM6</Link>
            <Link to="/accessoires-tm7" className="px-4 py-2 bg-background rounded-full border border-border/50 hover:border-accent transition-colors">Accessoires TM7</Link>
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
              Pourquoi des accessoires Thermomix sont indispensables ?
            </h2>
            <p>
              Les <strong className="text-foreground">accessoires Thermomix</strong> sont essentiels pour améliorer votre expérience en cuisine et tirer le meilleur parti de votre appareil. Que vous soyez un utilisateur quotidien ou occasionnel, disposer des bons accessoires peut transformer votre manière de cuisiner.
            </p>
            <p>
              Les <strong className="text-foreground">accessoires Thermomix</strong> permettent non seulement de gagner du temps, mais aussi d'optimiser l'organisation de votre plan de travail. Grâce à des solutions adaptées, vous pouvez ranger facilement vos ustensiles, éviter l'encombrement et travailler dans un environnement plus agréable.
            </p>
            <p>
              Nos accessoires sont compatibles avec les modèles <strong className="text-foreground">Thermomix TM6</strong> et <strong className="text-foreground">TM7</strong>, garantissant une utilisation simple et efficace. Chaque produit est conçu pour s'adapter parfaitement à votre robot et améliorer votre confort d'utilisation.
            </p>
            <p>
              Que vous cherchiez à organiser votre cuisine, améliorer votre productivité ou simplement rendre votre espace plus fonctionnel, nos <strong className="text-foreground">accessoires Thermomix</strong> répondent à tous vos besoins.
            </p>
            <p>
              Investir dans des <strong className="text-foreground">accessoires Thermomix</strong> de qualité, c'est choisir une cuisine plus pratique, plus rapide et mieux organisée au quotidien.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AccessoiresThermomix;
