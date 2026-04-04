import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CtaFinal = () => {
  return (
    <section className="bg-accent text-accent-foreground">
      <div className="container mx-auto px-6 py-16 md:py-20 text-center">
        <h2 className="font-display font-bold text-2xl md:text-3xl max-w-2xl mx-auto leading-tight">
          Prêt à transformer votre expérience Thermomix ?
        </h2>
        <p className="mt-4 text-accent-foreground/80 max-w-lg mx-auto text-base">
          Rejoignez +1000 clients satisfaits. Livraison offerte dès 50€, satisfait ou remboursé 30 jours.
        </p>
        <Link
          to="/catalogue"
          className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 rounded-full font-semibold text-sm hover:bg-foreground/90 transition-all duration-300 mt-8"
        >
          Découvrir le catalogue
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};

export default CtaFinal;
