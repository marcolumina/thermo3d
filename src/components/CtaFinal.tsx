import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CtaFinal = () => {
  return (
    <section className="bg-foreground text-background">
      <div className="container mx-auto px-6 py-24 md:py-32 text-center">
        <h2 className="font-display font-bold text-2xl md:text-[2.25rem] max-w-2xl mx-auto leading-tight">
          Découvrez nos accessoires, supports et rangements Thermomix
        </h2>
        <Link
          to="/catalogue"
          className="mt-12 inline-flex items-center gap-3 bg-accent text-accent-foreground px-8 py-4 rounded-full font-semibold text-sm hover:brightness-110 transition-all duration-300"
        >
          Je découvre les accessoires
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};

export default CtaFinal;
