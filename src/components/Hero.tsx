import { ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bg-hero">
      <div className="container mx-auto px-6 py-20 md:py-28 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-8">
          <ShieldCheck className="w-4 h-4 text-primary" />
          <span className="text-xs font-medium text-primary">Fabriqué en France 🇫🇷</span>
        </div>

        <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl leading-[1.15] tracking-tight max-w-2xl text-foreground">
          Gagnez de la place dans votre cuisine en 10 secondes
        </h1>

        <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed">
          Des accessoires Thermomix pratiques, solides et conçus pour le quotidien
        </p>

        <Link
          to="/catalogue"
          className="mt-8 inline-flex items-center gap-2.5 bg-primary text-primary-foreground px-7 py-3.5 rounded-xl font-display font-bold text-sm hover:bg-primary/90 transition-colors"
        >
          Voir les accessoires
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
