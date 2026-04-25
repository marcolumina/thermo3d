import { ArrowRight, Truck, ShieldCheck, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative bg-foreground overflow-hidden">
      {/* Mobile: stacked layout */}
      <div className="md:hidden">
        <img
          src="/images/hero-thermomix.png"
          alt="Accessoires Thermomix imprimés en 3D pour organiser votre cuisine"
          className="w-full h-auto block"
          width="800"
          height="600"
          fetchPriority="high"
        />
        <div className="px-5 py-8 bg-foreground">
          <p className="text-accent font-semibold text-xs mb-3 uppercase tracking-wider">
            Fabriqué en France 🇫🇷
          </p>
          <h1 className="font-display font-bold text-[28px] leading-[1.15] tracking-tight text-background">
            Gagnez du temps avec votre Thermomix
          </h1>
          <p className="mt-3 text-sm text-background/75 leading-relaxed">
            Accessoires pratiques, fabriqués en France, livraison rapide en point relais.
          </p>
          <Link
            to="/catalogue"
            className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-full font-semibold text-base hover:brightness-110 transition-all duration-300 mt-6 shadow-lg w-full active:scale-95 min-h-[52px]"
          >
            Découvrir la boutique
            <ArrowRight className="w-5 h-5" />
          </Link>

          {/* Mini réassurance Hero */}
          <div className="mt-5 flex items-center justify-center gap-4 text-[11px] text-background/70">
            <span className="flex items-center gap-1.5"><Truck className="w-3.5 h-3.5 text-accent" /> Livraison 3-5j</span>
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-accent" /> Satisfait 14j</span>
            <span className="flex items-center gap-1.5"><Star className="w-3.5 h-3.5 fill-accent text-accent" /> 4,9/5</span>
          </div>
        </div>
      </div>

      {/* Desktop: overlay layout */}
      <div className="hidden md:block">
        <img
          src="/images/hero-thermomix.png"
          alt="Accessoires Thermomix imprimés en 3D — support, rangement et organisation cuisine"
          className="w-full h-auto block"
          width="1600"
          height="900"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/60 to-foreground/20" />
        <div className="absolute inset-0 flex items-center z-10">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl">
              <p className="text-accent font-semibold text-sm mb-4">
                Fabriqué en France · Impression 3D de précision
              </p>
              <h1 className="font-display font-bold text-5xl md:text-6xl leading-[1.1] tracking-tight text-background">
                Gagnez du temps avec votre Thermomix
              </h1>
              <p className="mt-6 text-lg text-background/75 max-w-xl leading-relaxed">
                Accessoires pratiques, fabriqués en France, livraison rapide en point relais.
              </p>

              <div className="mt-8 flex items-center gap-4">
                <Link
                  to="/catalogue"
                  className="inline-flex items-center gap-3 bg-accent text-accent-foreground px-8 py-4 rounded-full font-semibold text-sm hover:brightness-110 transition-all duration-300 shadow-lg"
                >
                  Découvrir les accessoires
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <span className="text-background/70 text-xs">
                  ★ 4,9/5 — +1 000 clients satisfaits
                </span>
              </div>

              {/* Mini réassurance */}
              <div className="mt-6 flex items-center gap-5 text-xs text-background/70">
                <span className="flex items-center gap-1.5"><Truck className="w-3.5 h-3.5 text-accent" /> Livraison offerte dès 50€</span>
                <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-accent" /> Satisfait ou remboursé 14j</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
