import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bg-hero">
      <div className="container mx-auto px-6 py-28 md:py-40 flex flex-col items-center text-center">
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {['+1000 clients satisfaits', 'Compatible TM5 · TM6 · TM7', 'Fabrication française 🇫🇷'].map((badge) => (
            <span
              key={badge}
              className="inline-flex items-center bg-white/[0.06] border border-white/[0.08] rounded-full px-5 py-2 text-[11px] font-medium text-white/50 tracking-wide"
            >
              {badge}
            </span>
          ))}
        </div>

        <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-[3.5rem] leading-[1.1] tracking-tight max-w-3xl text-white">
          Le Thermomix, mais en{' '}
          <span className="text-accent">10x</span> plus pratique
        </h1>

        <p className="mt-7 text-lg md:text-xl text-white/40 max-w-xl leading-relaxed font-light">
          Accessoires intelligents pour gagner du temps, de la place et du confort en cuisine.
        </p>

        <Link
          to="/catalogue"
          className="mt-12 inline-flex items-center gap-3 bg-accent text-accent-foreground px-8 py-4 rounded-full font-semibold text-sm hover:brightness-110 transition-all duration-300 shadow-premium-lg"
        >
          Découvrir les accessoires
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
