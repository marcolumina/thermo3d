import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Shield } from 'lucide-react';
import TopBanner from '@/components/TopBanner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { useShopifyProducts } from '@/hooks/useShopifyProducts';
import { Loader2 } from 'lucide-react';

const SupportThermomix = () => {
  const { data: products, isLoading } = useShopifyProducts(50);

  const supportProducts = products?.filter((p) => {
    const title = p.node.title.toLowerCase();
    return title.includes('support') || title.includes('varoma');
  }) || [];

  const displayProducts = supportProducts.length > 0 ? supportProducts : products?.slice(0, 4) || [];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Support Thermomix TM5 TM6 TM7 — Support Varoma | Thermo3D</title>
        <meta name="description" content="Support Thermomix imprimé en 3D : support varoma, support bol, support ustensiles pour TM5, TM6 et TM7. Libérez votre plan de travail. Fabriqué en France." />
        <link rel="canonical" href="https://thermo3d.fr/support-thermomix" />
        <meta name="keywords" content="support thermomix, support varoma thermomix, support bol thermomix, support tm6, support tm5, support tm7" />
        <meta property="og:title" content="Support Thermomix TM5 TM6 TM7 — Thermo3D" />
        <meta property="og:description" content="Support Thermomix imprimé en 3D : support varoma, support bol pour TM5, TM6 et TM7. Fabriqué en France." />
        <meta property="og:url" content="https://thermo3d.fr/support-thermomix" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Support Thermomix TM5 TM6 TM7",
            description: "Supports Thermomix imprimés en 3D : support varoma, support bol, support ustensiles. Compatible TM5, TM6 et TM7.",
            url: "https://thermo3d.fr/support-thermomix",
            provider: { "@type": "Organization", name: "Thermo3D", url: "https://thermo3d.fr" },
          })}
        </script>
      </Helmet>

      <TopBanner />
      <Header />

      {/* Hero */}
      <section className="bg-hero">
        <div className="container mx-auto px-6 py-16 md:py-24">
          <p className="text-accent font-semibold text-xs uppercase tracking-[0.2em] mb-4">Support Thermomix</p>
          <h1 className="font-display font-bold text-3xl md:text-5xl text-white leading-tight max-w-3xl">
            Support Thermomix TM5, TM6 & TM7 : libérez votre plan de travail
          </h1>
          <p className="mt-6 text-lg text-white/50 max-w-2xl leading-relaxed">
            Nos supports Thermomix imprimés en 3D maintiennent vos accessoires en place et libèrent de l'espace sur votre plan de travail.
          </p>
          <div className="flex flex-wrap items-center gap-5 mt-8 text-sm text-white/40">
            <span className="inline-flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-accent/70" /> PLA qualité alimentaire
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

      {/* Avantages */}
      <section className="bg-secondary/40 py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { title: 'Gain de place', desc: 'Libérez votre plan de travail en maintenant le varoma et les accessoires en hauteur.' },
              { title: 'Installation immédiate', desc: 'Clip en 2 secondes, sans outil. Le support Thermomix se fixe instantanément.' },
              { title: 'Ultra stable', desc: 'Conçu pour un ajustement parfait sur votre Thermomix TM5, TM6 ou TM7.' },
            ].map((item) => (
              <div key={item.title} className="bg-background rounded-2xl p-8 shadow-premium text-center">
                <h3 className="font-display font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="container mx-auto px-6 py-16 md:py-24">
        <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-10">
          Nos supports Thermomix
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
              Support Thermomix : l'accessoire indispensable pour votre cuisine
            </h2>
            <p>
              Le <strong className="text-foreground">support Thermomix</strong> est l'un des accessoires les plus demandés par les utilisateurs de <strong className="text-foreground">Thermomix TM5, TM6 et TM7</strong>. Et pour cause : sans <strong className="text-foreground">support</strong> adapté, le varoma, les spatules et les autres ustensiles encombrent votre plan de travail et compliquent chaque étape de la préparation.
            </p>
            <p>
              Chez Thermo3D, nous avons conçu des <strong className="text-foreground">supports Thermomix</strong> qui résolvent ce problème en quelques secondes. Notre <strong className="text-foreground">support varoma Thermomix</strong> maintient le varoma en position stable lorsqu'il n'est pas utilisé, libérant ainsi un espace précieux sur votre plan de travail.
            </p>
            <h3 className="font-display font-semibold text-base text-foreground pt-2">
              Un support Thermomix adapté à chaque modèle
            </h3>
            <p>
              Chaque <strong className="text-foreground">support Thermomix</strong> est fabriqué par impression 3D en France, avec une précision au dixième de millimètre. Que vous ayez un <strong className="text-foreground">TM5</strong>, un <strong className="text-foreground">TM6</strong> ou un <strong className="text-foreground">TM7</strong>, le support s'adapte parfaitement aux dimensions de votre appareil.
            </p>
            <p>
              Le PLA de qualité alimentaire utilisé garantit une utilisation en toute sécurité dans votre cuisine. Résistant, durable et facile à nettoyer, notre <strong className="text-foreground">support Thermomix</strong> est conçu pour durer des années.
            </p>
            <p>
              Rejoignez plus de 1000 clients satisfaits qui ont déjà adopté nos <strong className="text-foreground">supports Thermomix</strong>. Installation sans outil, résultat immédiat, satisfaction garantie. Commandez votre <strong className="text-foreground">support Thermomix</strong> dès aujourd'hui et transformez votre expérience en cuisine.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SupportThermomix;
