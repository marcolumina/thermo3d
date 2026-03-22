const WhyAdopt = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary/40">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-xs uppercase tracking-[0.2em] mb-3">Pourquoi Thermo3D ?</p>
          <h2 className="font-display font-bold text-2xl md:text-[2.25rem] text-foreground mb-5 leading-tight">
            Pourquoi tout le monde adopte Thermo3D ?
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto leading-relaxed">
            Parce que nos accessoires rendent la cuisine plus simple, plus rapide et plus agréable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div className="bg-background rounded-2xl p-8 shadow-premium">
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-6 block">Avant</span>
            <ul className="space-y-4">
              {[
                'Plan de travail encombré',
                'Accessoires qui traînent partout',
                'Perte de temps à chercher',
                'Cuisine stressante et désorganisée',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-foreground/50">
                  <span className="text-sm mt-0.5">—</span>
                  <span className="text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-accent/[0.06] border border-accent/10 rounded-2xl p-8">
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-6 block">Avec Thermo3D</span>
            <ul className="space-y-4">
              {[
                'Espace de travail dégagé et propre',
                'Chaque accessoire à sa place',
                'Gain de temps immédiat',
                'Plaisir de cuisiner retrouvé',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-foreground">
                  <span className="text-accent text-sm mt-0.5">✓</span>
                  <span className="text-sm leading-relaxed font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAdopt;
