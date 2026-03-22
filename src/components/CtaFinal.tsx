import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CtaFinal = () => {
  return (
    <section className="bg-primary/5 border-y border-primary/10">
      <div className="container mx-auto px-6 py-16 md:py-20 text-center">
        <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground">
          Simplifiez votre cuisine dès aujourd'hui
        </h2>
        <p className="mt-3 text-muted-foreground max-w-md mx-auto">
          Découvrez nos accessoires Thermomix conçus pour le quotidien.
        </p>
        <Link
          to="/catalogue"
          className="mt-8 inline-flex items-center gap-2.5 bg-primary text-primary-foreground px-7 py-3.5 rounded-xl font-display font-bold text-sm hover:bg-primary/90 transition-colors"
        >
          Voir les produits
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};

export default CtaFinal;
