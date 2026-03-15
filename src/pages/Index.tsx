import TopBanner from '@/components/TopBanner';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BestSellers from '@/components/BestSellers';
import Categories from '@/components/Categories';
import WhyUs from '@/components/WhyUs';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBanner />
      <Header />
      <Hero />
      <BestSellers />
      <Categories />
      <WhyUs />
      <Footer />
    </div>
  );
};

export default Index;
