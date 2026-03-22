import { Helmet } from 'react-helmet-async';
import TopBanner from '@/components/TopBanner';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import VisualProof from '@/components/VisualProof';
import FeaturedProduct from '@/components/FeaturedProduct';
import WhyUs from '@/components/WhyUs';
import Reviews from '@/components/Reviews';
import BestSellers from '@/components/BestSellers';
import CtaFinal from '@/components/CtaFinal';
import SeoBlock from '@/components/SeoBlock';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Thermo3D — Accessoire Thermomix imprimé en 3D | Support Varoma, Rangement TM6 TM5</title>
        <meta name="description" content="Accessoire Thermomix imprimé en 3D : support varoma, rangement Thermomix, accessoire TM6 et TM5. Fabriqué en France, qualité alimentaire. Livraison rapide." />
        <link rel="canonical" href="https://thermo3d.fr" />
        <meta property="og:title" content="Thermo3D — Accessoire Thermomix : Support Varoma, Rangement TM6 TM5" />
        <meta property="og:description" content="Accessoire Thermomix imprimé en 3D : support varoma, rangement, accessoire TM6 TM5. Fabriqué en France." />
        <meta property="og:url" content="https://thermo3d.fr" />
        <meta property="og:type" content="website" />
        <meta name="keywords" content="accessoire thermomix, support varoma thermomix, rangement thermomix, accessoire tm6, accessoire tm5, accessoires thermomix 3D, cache écran thermomix, organisateur thermomix" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Thermo3D",
            url: "https://thermo3d.fr",
            description: "Accessoire Thermomix imprimé en 3D : support varoma, rangement, accessoire TM6 et TM5. Fabriqué en France.",
            brand: { "@type": "Brand", name: "Thermo3D" },
          })}
        </script>
      </Helmet>

      <TopBanner />
      <Header />
      <Hero />
      <VisualProof />
      <FeaturedProduct />
      <WhyUs />
      <Reviews />
      <BestSellers />
      <CtaFinal />
      <SeoBlock />
      <Footer />
    </div>
  );
};

export default Index;
