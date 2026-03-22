import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const bullets = [
  'Libère votre plan de travail',
  'Ultra stable',
  'Compatible TM5 / TM6',
];

const FeaturedProduct = () => {
  return (
    <section className="container mx-auto px-6 py-16 md:py-20">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Image placeholder */}
        <div className="bg-muted rounded-2xl aspect-square flex items-center justify-center overflow-hidden">
          <div className="text-center text-muted-foreground p-8">
            <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-4xl">🍳</span>
            </div>
            <p className="text-sm">Image produit en situation</p>
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-col gap-5">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Produit vedette</span>
          <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground">
            Support Varoma – Gain de place
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Le support Varoma se fixe directement sur votre Thermomix et libère instantanément votre plan de travail. Conçu en PLA alimentaire, il est solide, discret et s'installe en 2 secondes.
          </p>

          <ul className="space-y-3 mt-2">
            {bullets.map((b) => (
              <li key={b} className="flex items-center gap-3 text-sm text-foreground">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                {b}
              </li>
            ))}
          </ul>

          <Link
            to="/catalogue"
            className="mt-4 inline-flex items-center gap-2.5 bg-primary text-primary-foreground px-7 py-3.5 rounded-xl font-display font-bold text-sm hover:bg-primary/90 transition-colors self-start"
          >
            Acheter maintenant
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;
