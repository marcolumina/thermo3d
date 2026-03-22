import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const badges = [
  '+1000 clients satisfaits ⭐',
  'Compatible TM5 · TM6 · TM7',
  'Fabrication française 🇫🇷',
];

const Hero = () => {
  return (
    <section className="bg-hero">
      <div className="container mx-auto px-6 py-24 md:py-36 flex flex-col items-center text-center">
        <div className="flex flex-wrap justify-center gap-2.5 mb-10">
          {badges.map((badge) => (
            <span
              key={badge}
              className="inline-flex items-center bg-white/10 border border-white/10 rounded-full px-4 py-1.5 text-xs font-semibold text-white/70 tracking-wide"
            >
              {badge}
            </span>
          ))}
        </div>

        <h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl leading-[1.08] tracking-tight max-w-4xl text-white">
          Le Thermomix, mais en 10x plus pratique
        </h1>

        <p className="mt-6 text-lg md:text-xl text-white/55 max-w-2xl leading-relaxed font-light">
          Accessoires intelligents pour gagner du temps, de la place et du confort en cuisine
        </p>

        <Link
          to="/catalogue"
          className="mt-10 inline-flex items-center gap-3 bg-accent text-accent-foreground px-8 py-4 rounded-full font-bold text-sm hover:brightness-110 transition-all"
        >
          Découvrir les accessoires
          <ArrowRight className="w-4 h-4" />
        </Link>

        <div className="mt-12 flex items-center gap-6 text-white/35 text-xs font-medium tracking-wide uppercase">
          <span>⭐ +1000 clients satisfaits</span>
          <span>✔ Compatible TM5 TM6 TM7</span>
          <span>🇫🇷 Fabrication française</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
