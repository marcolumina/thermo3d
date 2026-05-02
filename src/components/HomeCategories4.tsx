import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const blocks = [
  {
    emoji: '✨',
    title: 'Propreté',
    desc: 'Un plan de travail toujours net, sans traces ni saleté.',
    to: '/catalogue?filter=proprete',
  },
  {
    emoji: '🛡️',
    title: 'Protection',
    desc: 'Préservez votre écran et votre balance des chocs du quotidien.',
    to: '/catalogue?filter=protection',
  },
  {
    emoji: '📐',
    title: 'Organisation',
    desc: 'Chaque accessoire à sa place, en un seul coup d’œil.',
    to: '/rangement-thermomix',
  },
  {
    emoji: '⚡',
    title: 'Fluidité',
    desc: 'Cuisinez sans interruption, tout devient plus simple.',
    to: '/catalogue',
  },
];

const HomeCategories4 = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10 md:mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-accent">Nos solutions</span>
          <h2 className="font-display font-extrabold text-2xl md:text-4xl text-foreground mt-3 max-w-2xl mx-auto leading-tight">
            Une cuisine optimisée, sans effort
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 max-w-5xl mx-auto">
          {blocks.map((b) => (
            <Link
              key={b.title}
              to={b.to}
              className="group bg-background rounded-2xl p-6 md:p-7 border border-border hover:border-accent shadow-sm hover:shadow-premium-lg transition-all duration-300"
            >
              <div className="text-4xl mb-4">{b.emoji}</div>
              <h3 className="font-display font-bold text-lg md:text-xl text-foreground mb-2">
                {b.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {b.desc}
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent group-hover:gap-2.5 transition-all">
                Découvrir
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeCategories4;
