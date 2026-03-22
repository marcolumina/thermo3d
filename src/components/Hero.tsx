import { ArrowRight, ShoppingBag, Star, Flame, Clock, CheckCircle, Flag } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoPremium from '@/assets/logo-thermo3d.png';

const Hero = () => {
  return (
    <section className="bg-hero relative overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(97_52%_51%/0.06)_0%,transparent_70%)]" />

      <div className="container mx-auto px-6 py-20 md:py-32 relative z-10">
        {/* Premium logo above content */}
        <div className="flex justify-center mb-10">
          <img src={logoPremium} alt="Thermo3D" className="h-20 md:h-28 w-auto drop-shadow-[0_0_30px_hsl(97_52%_51%/0.3)]" />
        </div>
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: Copy */}
          <div className="flex flex-col items-start text-left">
            {/* Trust badges row */}
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="inline-flex items-center gap-1.5 bg-white/[0.06] border border-white/[0.08] rounded-full px-4 py-1.5 text-[11px] font-medium text-white/60">
                <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                4,8/5 – +1000 clients
              </span>
              <span className="inline-flex items-center gap-1.5 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 text-[11px] font-semibold text-accent">
                <Flame className="w-3 h-3" />
                -20% aujourd'hui
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/[0.06] border border-white/[0.08] rounded-full px-4 py-1.5 text-[11px] font-medium text-white/60">
                <Clock className="w-3 h-3" />
                Stock limité
              </span>
            </div>

            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-[3.25rem] leading-[1.08] tracking-tight text-white">
              Le Thermomix, mais en{' '}
              <span className="text-accent">10x</span> plus pratique
            </h1>

            <p className="mt-6 text-lg text-white/45 max-w-md leading-relaxed font-light">
              Gagnez du temps, de la place et du confort avec nos accessoires intelligents.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 mt-10">
              <Link
                to="/catalogue"
                className="inline-flex items-center gap-3 bg-accent text-accent-foreground px-8 py-4 rounded-full font-semibold text-sm hover:brightness-110 transition-all duration-300 shadow-[0_0_30px_hsl(97_52%_51%/0.3)]"
              >
                J'améliore mon Thermomix
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/catalogue"
                className="inline-flex items-center gap-2 border border-white/15 text-white/70 px-7 py-4 rounded-full font-medium text-sm hover:bg-white/[0.05] hover:text-white transition-all duration-300"
              >
                <ShoppingBag className="w-4 h-4" />
                Voir les accessoires
              </Link>
            </div>

            {/* Bottom trust line */}
            <div className="flex flex-wrap items-center gap-5 mt-10 text-[12px] text-white/35">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-accent/70" />
                Compatible TM5 / TM6 / TM7
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Flag className="w-3.5 h-3.5 text-accent/70" />
                Fabrication française 🇫🇷
              </span>
            </div>
          </div>

          {/* Right: Before/After visual */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Before */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03]">
                <div className="aspect-[3/4] flex flex-col items-center justify-center p-6 text-center">
                  <span className="text-4xl mb-4">😩</span>
                  <span className="text-xs font-semibold uppercase tracking-widest text-red-400/80 mb-2">Avant</span>
                  <ul className="space-y-2 text-[13px] text-white/40">
                    <li>Désordre total</li>
                    <li>Perte de temps</li>
                    <li>Aucune organisation</li>
                  </ul>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-red-500/5 to-transparent pointer-events-none" />
              </div>

              {/* After */}
              <div className="relative rounded-2xl overflow-hidden border border-accent/20 bg-accent/[0.04]">
                <div className="aspect-[3/4] flex flex-col items-center justify-center p-6 text-center">
                  <span className="text-4xl mb-4">😍</span>
                  <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">Après</span>
                  <ul className="space-y-2 text-[13px] text-white/60">
                    <li>Cuisine fluide</li>
                    <li>Gain de place</li>
                    <li>Confort total</li>
                  </ul>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-foreground/90 backdrop-blur-sm border border-white/10 rounded-full px-5 py-2 text-[11px] font-semibold text-white shadow-lg">
              ✨ Transformation immédiate
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
