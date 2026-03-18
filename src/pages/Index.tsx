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
        <title>Thermo3D — Accessoires Thermomix imprimés en 3D en France</title>
        <meta name="description" content="Découvrez les accessoires Thermomix imprimés en 3D par Thermo3D. Cache écran, support ustensiles, organisateurs. Compatibles TM5, TM6, TM7. Qualité alimentaire. Fabriqué en France." />
        <link rel="canonical" href="https://thermo3d.fr" />
        <meta property="og:title" content="Thermo3D — Accessoires Thermomix imprimés en 3D en France" />
        <meta property="og:description" content="Accessoires Thermomix innovants imprimés en 3D. Qualité alimentaire, fabriqués en France. Compatibles TM5, TM6, TM7." />
        <meta property="og:url" content="https://thermo3d.fr" />
        <meta property="og:type" content="website" />
        <meta name="keywords" content="accessoires thermomix, impression 3D cuisine, accessoires cuisine pratiques, thermomix TM6, thermomix TM7, cache écran thermomix, support thermomix" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Thermo3D",
            url: "https://thermo3d.fr",
            description: "Accessoires Thermomix imprimés en 3D en France",
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
      <Reviews />
      <Footer />
    </div>
  );
};

export default Index;
