import { Helmet } from 'react-helmet-async';
import TopBanner from '@/components/TopBanner';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BestSellers from '@/components/BestSellers';
import Reviews from '@/components/Reviews';
import Categories from '@/components/Categories';
import WhyUs from '@/components/WhyUs';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Thermo3D — Accessoires Thermomix imprimés en 3D | Pratiques & Innovants</title>
        <meta name="description" content="Découvrez nos accessoires Thermomix imprimés en 3D, pratiques et innovants pour simplifier votre cuisine. Compatibles TM5, TM6, TM7. Fabriqué en France." />
        <link rel="canonical" href="https://thermo3d.fr" />
        <meta property="og:title" content="Thermo3D — Accessoires Thermomix imprimés en 3D" />
        <meta property="og:description" content="Découvrez nos accessoires Thermomix imprimés en 3D, pratiques et innovants pour simplifier votre cuisine. Compatibles TM5, TM6, TM7." />
        <meta property="og:url" content="https://thermo3d.fr" />
        <meta property="og:type" content="website" />
        <meta name="keywords" content="accessoires Thermomix, impression 3D cuisine, accessoires cuisine pratiques, thermomix TM6, thermomix TM7, cache écran thermomix, support thermomix" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Thermo3D",
            url: "https://thermo3d.fr",
            description: "Accessoires Thermomix imprimés en 3D, pratiques et innovants pour simplifier votre cuisine.",
            brand: { "@type": "Brand", name: "Thermo3D" },
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Thermo3D",
            url: "https://thermo3d.fr",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://thermo3d.fr/catalogue?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          })}
        </script>
      </Helmet>

      <TopBanner />
      <Header />
      <Hero />
      <BestSellers />
      <Categories />
      <WhyUs />

      {/* SEO content block */}
      <section className="container mx-auto px-6 py-16 md:py-20">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="font-display font-bold text-xl md:text-2xl">
            Des <span className="text-gradient">accessoires cuisine pratiques</span> pour votre Thermomix
          </h2>
          <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
            <p>
              Thermo3D conçoit et fabrique en France des <strong className="text-foreground">accessoires Thermomix</strong> grâce à l'<strong className="text-foreground">impression 3D cuisine</strong>. Nos produits sont pensés pour simplifier votre quotidien : gain de place, organisation optimisée, protection de votre appareil.
            </p>
            <p>
              Chaque accessoire est imprimé avec du PLA de qualité alimentaire, certifié pour le contact avec les aliments. Compatibles avec les modèles <strong className="text-foreground">Thermomix TM5, TM6 et TM7</strong>, nos <strong className="text-foreground">accessoires cuisine pratiques</strong> s'installent en quelques secondes, sans outils.
            </p>
            <p>
              Du cache écran au support ustensiles, en passant par les organisateurs et rangements, découvrez une gamme complète d'accessoires innovants conçus pour les passionnés de cuisine. Livraison rapide en France, satisfait ou remboursé sous 30 jours.
            </p>
          </div>
        </div>
      </section>

      <Reviews />
      <Footer />
    </div>
  );
};

export default Index;