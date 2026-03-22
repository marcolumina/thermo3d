import { Helmet } from 'react-helmet-async';
import TopBanner from '@/components/TopBanner';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SocialProof from '@/components/SocialProof';
import BeforeAfter from '@/components/BeforeAfter';
import BestSellers from '@/components/BestSellers';
import ProblemSolution from '@/components/ProblemSolution';
import WhyUs from '@/components/WhyUs';
import ImagineSection from '@/components/ImagineSection';
import Reviews from '@/components/Reviews';
import CtaFinal from '@/components/CtaFinal';
import SeoBlock from '@/components/SeoBlock';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Accessoires Thermomix TM5 TM6 TM7 | Thermo3D</title>
        <meta name="description" content="Accessoires Thermomix imprimés en 3D pour TM5, TM6 et TM7. Améliorez votre cuisine avec des solutions pratiques et innovantes. Fabriqué en France." />
        <link rel="canonical" href="https://thermo3d.fr" />
        <meta property="og:title" content="Accessoires Thermomix TM5 TM6 TM7 | Thermo3D" />
        <meta property="og:description" content="Accessoires Thermomix imprimés en 3D. Solutions pratiques pour TM5, TM6 et TM7. Fabriqué en France." />
        <meta property="og:url" content="https://thermo3d.fr" />
        <meta property="og:type" content="website" />
        <meta name="keywords" content="accessoire thermomix, support varoma thermomix, rangement thermomix, accessoire tm6 tm5, accessoire tm7, accessoires thermomix 3D" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Thermo3D",
            url: "https://thermo3d.fr",
            description: "Accessoires Thermomix imprimés en 3D pour TM5, TM6 et TM7. Fabriqué en France.",
            brand: { "@type": "Brand", name: "Thermo3D" },
          })}
        </script>
      </Helmet>

      <TopBanner />
      <Header />
      <Hero />
      <SocialProof />
      <BestSellers />
      <BeforeAfter />
      <ProblemSolution />
      <WhyUs />
      <Reviews />
      <ImagineSection />
      <CtaFinal />
      <SeoBlock />
      <Footer />
    </div>
  );
};

export default Index;
