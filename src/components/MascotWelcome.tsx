import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import mascotImg from '@/assets/mascot-thermo3d.png';

const MascotWelcome = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Mascot */}
          <div className="flex-shrink-0">
            <div className="w-28 h-28 md:w-36 md:h-36 rounded-full border-4 border-accent/30 shadow-xl overflow-hidden hover:scale-105 transition-transform duration-300">
              <img
                src={mascotImg}
                alt="Mascotte Thermo3D – chat"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Content */}
          <div className="text-center md:text-left space-y-4">
            <h2 className="font-display font-extrabold text-2xl md:text-3xl text-foreground">
              Bienvenue chez Thermo3D
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-lg">
              On va améliorer ton Thermomix ensemble avec des accessoires simples et efficaces.
            </p>
            <Link
              to="/catalogue"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-semibold px-6 py-3 rounded-xl hover:brightness-110 active:scale-[0.98] transition-all text-sm"
            >
              Découvrir les produits
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MascotWelcome;
