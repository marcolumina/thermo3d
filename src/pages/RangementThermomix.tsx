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
        <title>Rangement Thermomix : optimisez votre espace | Thermo3D</title>
        <meta name="description" content="Rangement Thermomix imprimé en 3D : organisateur, cache écran pour TM6 et TM7. Optimisez votre espace cuisine. Fabriqué en France, livraison rapide." />
        <link rel="canonical" href="https://thermo3d.fr/rangement-thermomix" />
        <meta name="keywords" content="rangement thermomix, organisateur thermomix, rangement tm6, rangement tm7, organisation cuisine thermomix" />
        <meta property="og:title" content="Rangement Thermomix : optimisez votre espace — Thermo3D" />
        <meta property="og:description" content="Rangement Thermomix imprimé en 3D. Compatible TM6 et TM7. Fabriqué en France." />
        <meta property="og:url" content="https://thermo3d.fr/rangement-thermomix" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Rangement Thermomix : optimisez votre espace",
            description: "Solutions de rangement Thermomix imprimées en 3D. Compatible TM6 et TM7.",
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
            Rangement Thermomix : optimisez votre espace
          </h1>
          <p className="mt-6 text-lg text-white/50 max-w-2xl leading-relaxed">
            Nos solutions de rangement Thermomix transforment le désordre en organisation. Chaque accessoire trouve sa place.
          </p>
          <div className="flex flex-wrap items-center gap-5 mt-8 text-sm text-white/40">
            <span className="inline-flex items-center gap-1.5">
              <Package className="w-4 h-4 text-accent/70" /> Expédié sous 48h
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-accent/70" /> Compatible TM6 / TM7
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

      {/* Internal links */}
      <section className="bg-secondary/30 py-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <Link to="/accessoires-thermomix" className="px-4 py-2 bg-background rounded-full border border-border/50 hover:border-accent transition-colors">Accessoires Thermomix</Link>
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
              Rangement Thermomix : organisez votre cuisine intelligemment
            </h2>
            <p>
              Le <strong className="text-foreground">rangement Thermomix</strong> est un élément clé pour garder une cuisine propre, organisée et agréable à utiliser. Avec les bons accessoires, il devient facile de structurer votre espace et de gagner un temps précieux lors de la préparation de vos recettes.
            </p>
            <p>
              Un bon rangement permet de garder tous vos ustensiles à portée de main, tout en évitant l'encombrement. Cela améliore non seulement votre confort, mais aussi votre efficacité en cuisine.
            </p>
            <p>
              Nos solutions de <strong className="text-foreground">rangement Thermomix</strong> sont conçues pour optimiser chaque centimètre de votre espace. Elles s'intègrent parfaitement dans votre environnement et offrent une organisation intelligente adaptée à votre utilisation quotidienne.
            </p>
            <p>
              Grâce à des accessoires pratiques et bien pensés, vous pouvez transformer votre cuisine en un espace fonctionnel, moderne et parfaitement structuré.
            </p>
            <p>
              Le <strong className="text-foreground">rangement Thermomix</strong> n'est plus un problème, mais une véritable solution pour cuisiner plus sereinement.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RangementThermomix;
