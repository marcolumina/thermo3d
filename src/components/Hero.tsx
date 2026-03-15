import { ArrowRight, Printer, Truck, Flag } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bg-hero text-hero-foreground">
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="max-w-xl">
          <h1 className="font-display font-extrabold text-4xl md:text-5xl leading-tight">
            Accessoires
            <br />
            <span className="text-primary">Thermomix</span>
            <br />
            <span className="font-semibold text-3xl md:text-4xl opacity-80">imprimés en 3D</span>
          </h1>
          <p className="mt-4 text-sm md:text-base opacity-70 max-w-md">
            Des accessoires uniques, conçus avec précision et imprimés en France. Compatibles TM5, TM6 et TM7.
          </p>
          <Link
            to="/catalogue"
            className="mt-8 inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-display font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Découvrir la boutique
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
          {[
            { icon: Printer, title: 'Impression 3D', desc: 'PLA alimentaire premium' },
            { icon: Truck, title: 'Livraison rapide', desc: 'Offre à partir de 50€' },
            { icon: Flag, title: 'Fabriqué en France', desc: 'Qualité garantie' },
          ].map((item) => (
            <div key={item.title} className="flex items-center gap-4 bg-foreground/10 rounded-xl px-5 py-4">
              <div className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center flex-shrink-0">
                <item.icon className="w-5 h-5 opacity-80" />
              </div>
              <div>
                <p className="font-display font-semibold text-sm">{item.title}</p>
                <p className="text-xs opacity-60">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
