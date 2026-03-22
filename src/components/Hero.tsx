import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bg-hero">
      <div className="container mx-auto px-6 py-24 md:py-36 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-8">
          <span className="text-xs font-semibold text-accent tracking-wide uppercase">Fabriqué en France 🇫🇷 · Qualité alimentaire</span>
        </div>

        <h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl leading-[1.08] tracking-tight max-w-3xl text-white">
          Transformez votre Thermomix avec des accessoires indispensables
        </h1>

        <p className="mt-6 text-lg md:text-xl text-white/60 max-w-xl leading-relaxed font-light">
          Pratiques, innovants, imprimés en 3D en France
        </p>

        <Link
          to="/catalogue"
          className="mt-10 inline-flex items-center gap-3 bg-accent text-accent-foreground px-8 py-4 rounded-full font-bold text-sm hover:brightness-110 transition-all"
        >
          Découvrir les produits
          <ArrowRight className="w-4 h-4" />
        </Link>

        <div className="mt-12 flex items-center gap-6 text-white/40 text-xs font-medium tracking-wide uppercase">
          <span>✓ Livraison rapide</span>
          <span>✓ Paiement sécurisé</span>
          <span>✓ Satisfait ou remboursé</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
