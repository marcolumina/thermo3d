import { Helmet } from 'react-helmet-async';
import TopBanner from '@/components/TopBanner';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeaturedProduct from '@/components/FeaturedProduct';
import WhyUs from '@/components/WhyUs';
import Reviews from '@/components/Reviews';
import BestSellers from '@/components/BestSellers';
import CtaFinal from '@/components/CtaFinal';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Thermo3D — Accessoires Thermomix imprimés en 3D | Pratiques & Innovants</title>
        <meta name="description" content="Découvrez nos accessoires Thermomix imprimés en 3D, pratiques et innovants pour simplifier votre cuisine. Compatibles TM5, TM6, TM7. Fabriqué en France." />
        <link rel="canonical" href="https://thermo3d.fr" />
        <meta property="og:title" content="Thermo3D — Accessoires Thermomix imprimés en 3D" />
        <meta property="og:description" content="Découvrez nos accessoires Thermomix imprimés en 3D, pratiques et innovants pour simplifier votre cuisine." />
        <meta property="og:url" content="https://thermo3d.fr" />
        <meta property="og:type" content="website" />
        <meta name="keywords" content="accessoires Thermomix, impression 3D cuisine, accessoires cuisine pratiques, thermomix TM6, thermomix TM7, support varoma, thermo3d" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Thermo3D",
            url: "https://thermo3d.fr",
            description: "Accessoires Thermomix imprimés en 3D, pratiques et innovants.",
            brand: { "@type": "Brand", name: "Thermo3D" },
          })}
        </script>
      </Helmet>

      <TopBanner />
      <Header />
      <Hero />
      <FeaturedProduct />
      <WhyUs />
      <Reviews />
      <BestSellers />
      <CtaFinal />
      <Footer />
    </div>
  );
};

export default Index;
