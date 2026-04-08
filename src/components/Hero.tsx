import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative bg-foreground overflow-hidden">
      {/* Mobile: stacked layout */}
      <div className="md:hidden">
        <img
          src="/images/hero-thermomix.png"
          alt="Accessoires Thermomix imprimés en 3D pour organiser votre cuisine"
          className="w-full h-auto block"
          width="800"
          height="600"
          fetchPriority="high"
        />
        <div className="px-6 py-10 bg-foreground">
          <p className="text-accent font-semibold text-xs mb-3">
            Fabriqué en France · Impression 3D de précision
          </p>
          <h1 className="font-display font-bold text-3xl leading-[1.15] tracking-tight text-background">
            Accessoires Thermomix TM6 & TM7 pour une cuisine organisée et efficace
          </h1>
          </h1>
          <p className="mt-4 text-base text-background/70 leading-relaxed">
            Optimisez votre Thermomix avec des accessoires pratiques, design et compatibles TM6 & TM7
          </p>
          <Link
            to="/catalogue"
            className="inline-flex items-center gap-3 bg-accent text-accent-foreground px-7 py-3.5 rounded-full font-semibold text-sm hover:brightness-110 transition-all duration-300 mt-8 shadow-lg"
          >
            Découvrir les accessoires
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Desktop: overlay layout */}
      <div className="hidden md:block">
        <img
          src="/images/hero-thermomix.png"
          alt="Accessoires Thermomix imprimés en 3D — support, rangement et organisation cuisine"
          className="w-full h-auto block"
          width="1600"
          height="900"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/55 to-foreground/20" />
        <div className="absolute inset-0 flex items-center z-10">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl">
              <p className="text-accent font-semibold text-sm mb-4">
                Fabriqué en France · Impression 3D de précision
              </p>
              <h1 className="font-display font-bold text-5xl md:text-6xl leading-[1.1] tracking-tight text-background">
                Accessoires Thermomix TM6 & TM7 pour une cuisine organisée et efficace
              </h1>
              <p className="mt-6 text-lg text-background/70 max-w-lg leading-relaxed">
                Optimisez votre Thermomix avec des accessoires pratiques, design et compatibles TM6 & TM7
              </p>
              <Link
                to="/catalogue"
                className="inline-flex items-center gap-3 bg-accent text-accent-foreground px-8 py-4 rounded-full font-semibold text-sm hover:brightness-110 transition-all duration-300 mt-10 shadow-lg"
              >
                Découvrir les accessoires
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
