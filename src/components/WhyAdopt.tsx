import { Star } from 'lucide-react';

const WhyAdopt = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-accent font-bold text-sm uppercase tracking-widest mb-3">Pourquoi Thermo3D ?</p>
          <h2 className="font-extrabold text-2xl md:text-4xl text-foreground mb-4">
            Pourquoi tout le monde adopte Thermo3D ?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Parce que nos accessoires rendent la cuisine plus simple, plus rapide et plus agréable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
          {/* Avant */}
          <div className="bg-background rounded-2xl p-8 border border-border">
            <span className="text-xs font-bold uppercase tracking-widest text-destructive mb-6 block">❌ Avant</span>
            <ul className="space-y-4">
              {[
                'Plan de travail encombré',
                'Accessoires qui traînent partout',
                'Perte de temps à chercher',
                'Cuisine stressante et désorganisée',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-foreground/60">
                  <span className="text-sm mt-0.5">❌</span>
                  <span className="text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Après */}
          <div className="bg-accent/10 border border-accent/20 rounded-2xl p-8">
            <span className="text-xs font-bold uppercase tracking-widest text-accent mb-6 block">✅ Après Thermo3D</span>
            <ul className="space-y-4">
              {[
                'Espace de travail dégagé et propre',
                'Chaque accessoire à sa place',
                'Gain de temps immédiat',
                'Plaisir de cuisiner retrouvé',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-foreground">
                  <span className="text-sm mt-0.5">✅</span>
                  <span className="text-sm leading-relaxed font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social proof */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-accent text-accent" />
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">+1000 clients satisfaits</span> ont déjà adopté Thermo3D
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyAdopt;
