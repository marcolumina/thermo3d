import { ArrowRight, Printer, Truck, Flag, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-hero" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-6 py-20 md:py-32">
        <div className="max-w-2xl">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span className="text-xs font-medium text-primary">Qualité alimentaire certifiée · Fabriqué en France</span>
          </div>

          <h1 className="font-display font-black text-4xl md:text-6xl leading-[1.1] tracking-tight">
            Accessoires
            <br />
            <span className="text-gradient">Thermomix</span>
            <br />
            <span className="font-bold text-2xl md:text-4xl text-muted-foreground">imprimés en 3D avec précision</span>
          </h1>

          <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed">
            Des accessoires uniques et durables, conçus sur mesure et imprimés en France. Compatibles <strong className="text-foreground">TM5, TM6 et TM7</strong>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link
              to="/catalogue"
              className="inline-flex items-center justify-center gap-2 bg-gradient-primary text-accent-foreground px-8 py-4 rounded-xl font-display font-bold text-sm hover:opacity-90 transition-all glow-primary"
            >
              Découvrir la boutique
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 border border-border bg-card/50 text-foreground px-8 py-4 rounded-xl font-display font-semibold text-sm hover:bg-card transition-colors"
            >
              Nous contacter
            </Link>
          </div>

          {/* Social proof */}
          <div className="flex items-center gap-6 mt-10 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <span className="text-primary font-bold text-lg">500+</span>
              <span>clients satisfaits</span>
            </div>
            <div className="w-px h-5 bg-border" />
            <div className="flex items-center gap-1.5">
              <span className="text-primary font-bold text-lg">4.9</span>
              <span>★ de moyenne</span>
            </div>
          </div>
        </div>

        {/* Feature pills */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-16">
          {[
            { icon: Printer, title: 'Impression 3D', desc: 'PLA alimentaire premium' },
            { icon: Truck, title: 'Livraison rapide', desc: 'Offerte dès 50€ d\'achat' },
            { icon: Flag, title: 'Made in France', desc: 'Conçu et fabriqué en Corse' },
          ].map((item) => (
            <div key={item.title} className="flex items-center gap-4 bg-card/60 backdrop-blur border border-border/50 rounded-xl px-5 py-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-display font-semibold text-sm">{item.title}</p>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
