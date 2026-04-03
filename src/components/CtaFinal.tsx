import { ArrowRight, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const CtaFinal = () => {
  return (
    <section className="bg-foreground text-background">
      <div className="container mx-auto px-6 py-24 md:py-32 text-center">
        <p className="text-accent font-semibold text-xs uppercase tracking-[0.2em] mb-4">
          Rejoignez +1000 clients satisfaits
        </p>
        <h2 className="font-display font-bold text-2xl md:text-[2.5rem] max-w-2xl mx-auto leading-tight">
          Passez au niveau supérieur avec votre Thermomix
        </h2>
        <p className="mt-5 text-background/50 max-w-lg mx-auto text-base">
          Gagnez du temps, de la place et du confort chaque jour. Nos accessoires s'installent en 2 secondes, sans outil.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
          <Link
            to="/catalogue"
            className="inline-flex items-center gap-3 bg-accent text-accent-foreground px-8 py-4 rounded-full font-semibold text-sm hover:brightness-110 transition-all duration-300"
          >
            Découvrir les accessoires
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/catalogue"
            className="inline-flex items-center gap-2 border border-background/20 text-background/70 px-7 py-4 rounded-full font-medium text-sm hover:bg-background/[0.05] hover:text-background transition-all duration-300"
          >
            <ShoppingBag className="w-4 h-4" />
            Voir les best-sellers
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaFinal;
