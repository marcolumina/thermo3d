import { Helmet } from 'react-helmet-async';
import TopBanner from '@/components/TopBanner';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Categories from '@/components/Categories';
import BestSellers from '@/components/BestSellers';
import Testimonials from '@/components/Testimonials';
import CrossSell from '@/components/CrossSell';
import AboutSection from '@/components/AboutSection';
import WhyUs from '@/components/WhyUs';
import ShippingInfo from '@/components/ShippingInfo';
import Reviews from '@/components/Reviews';
import TrustSection from '@/components/TrustSection';
import SocialProofBar from '@/components/SocialProofBar';
import HomeFAQ from '@/components/HomeFAQ';
import CtaFinal from '@/components/CtaFinal';
import SeoBlock from '@/components/SeoBlock';
import MascotWelcome from '@/components/MascotWelcome';
import HomeProblem from '@/components/HomeProblem';
import HomeCategories4 from '@/components/HomeCategories4';

import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Accessoires Thermomix TM6 & TM7 | Support, Rangement & Organisation — Thermo3D</title>
        <meta name="description" content="Accessoires Thermomix TM6 et TM7 imprimés en 3D : support, rangement, organisation cuisine. Fabriqué en France, qualité alimentaire. Livraison offerte dès 50€." />
        <link rel="canonical" href="https://thermo3d.fr" />
        <meta property="og:title" content="Accessoires Thermomix TM6 TM7 | Support & Rangement – Thermo3D" />
        <meta property="og:description" content="Support Thermomix, rangement Thermomix et accessoires TM6 TM7 imprimés en 3D. Fabriqué en France." />
        <meta property="og:url" content="https://thermo3d.fr" />
        <meta property="og:type" content="website" />
        <meta name="keywords" content="accessoires thermomix, accessoire thermomix tm6, accessoire thermomix tm7, support thermomix, rangement thermomix, organisation cuisine thermomix, ustensiles thermomix, cuisine optimisée" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Thermo3D",
            url: "https://thermo3d.fr",
            description: "Accessoires Thermomix imprimés en 3D pour TM6 et TM7. Fabriqué en France.",
            brand: { "@type": "Brand", name: "Thermo3D" },
          })}
        </script>
      </Helmet>

      <TopBanner />
      <Header />
      <Hero />
      <SocialProofBar />
      <MascotWelcome />
      <HomeProblem />
      <HomeCategories4 />
      <BestSellers />
      <Testimonials />
      <CrossSell />
      <AboutSection />
      <WhyUs />
      <ShippingInfo />
      <Reviews />
      <TrustSection />
      <HomeFAQ />
      <CtaFinal />
      <SeoBlock />
      <Footer />
    </div>
  );
};

export default Index;
