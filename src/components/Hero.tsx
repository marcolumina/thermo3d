import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative bg-hero overflow-hidden">
      <div
        className="absolute inset-0 bg-no-repeat"
        style={{
          backgroundImage: `url('/images/hero-thermomix.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/50 to-foreground/20" />

      <div className="container mx-auto px-6 py-24 md:py-40 relative z-10">
        <div className="max-w-2xl">
          <p className="text-accent font-semibold text-sm mb-4">
            Fabriqué en France · Impression 3D de précision
          </p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl leading-[1.1] tracking-tight text-background">
            Accessoires Thermomix pour une cuisine organisée et efficace
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
    </section>
  );
};

export default Hero;
