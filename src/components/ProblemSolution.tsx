import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProblemSolution = () => {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-20 md:py-28">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-accent font-bold text-sm uppercase tracking-widest mb-4">Le problème</p>
          <h2 className="font-extrabold text-2xl md:text-4xl leading-tight">
            Marre du désordre autour de votre Thermomix ?
          </h2>
          <p className="mt-6 text-lg text-primary-foreground/60 max-w-xl mx-auto leading-relaxed">
            Varoma qui traîne, accessoires éparpillés, plan de travail encombré… Vous méritez mieux.
          </p>

          <div className="w-16 h-px bg-accent mx-auto my-10" />

          <p className="text-accent font-bold text-sm uppercase tracking-widest mb-4">La solution</p>
          <h3 className="font-extrabold text-2xl md:text-3xl leading-tight">
            Nos accessoires optimisent votre espace et votre confort
          </h3>
          <p className="mt-6 text-lg text-primary-foreground/60 max-w-xl mx-auto leading-relaxed">
            Chaque accessoire Thermo3D est conçu pour s'intégrer parfaitement à votre Thermomix. Fini le désordre.
          </p>

          <Link
            to="/catalogue"
            className="mt-10 inline-flex items-center gap-3 bg-accent text-accent-foreground px-8 py-4 rounded-full font-bold text-sm hover:brightness-110 transition-all"
          >
            Voir les solutions
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
