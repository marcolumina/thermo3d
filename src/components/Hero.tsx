import { ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '@/assets/thermo3d-logo.png';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-hero" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="relative container mx-auto px-6 py-24 md:py-36 flex flex-col items-center text-center">
        {/* Logo mark */}
        <img src={logo} alt="Thermo3D" className="w-16 h-16 md:w-20 md:h-20 mb-6 drop-shadow-lg" />

        {/* Trust pill */}
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-8">
          <ShieldCheck className="w-4 h-4 text-primary" />
          <span className="text-xs font-medium text-primary">Qualité alimentaire · Fabriqué en France 🇫🇷</span>
        </div>

        <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl leading-[1.1] tracking-tight max-w-3xl">
          Accessoires Thermomix{' '}
          <span className="text-gradient">imprimés en 3D</span>
        </h1>

        <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
          Simplifiez votre cuisine avec des accessoires pratiques, innovants et conçus pour le quotidien
        </p>

        <Link
          to="/catalogue"
          className="mt-10 inline-flex items-center gap-2.5 bg-gradient-primary text-accent-foreground px-8 py-4 rounded-xl font-display font-bold text-sm hover:opacity-90 transition-all glow-primary"
        >
          Voir les produits
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};

export default Hero;