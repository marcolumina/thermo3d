import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CtaFinal = () => {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-20 md:py-28 text-center">
        <h2 className="font-extrabold text-2xl md:text-4xl max-w-2xl mx-auto leading-tight">
          Passez au niveau supérieur avec votre Thermomix
        </h2>
        <Link
          to="/catalogue"
          className="mt-10 inline-flex items-center gap-3 bg-accent text-accent-foreground px-8 py-4 rounded-full font-bold text-sm hover:brightness-110 transition-all"
        >
          Découvrir les accessoires
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};

export default CtaFinal;
