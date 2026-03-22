const beforeItems = [
  'Plan de travail encombré',
  'Accessoires mal rangés',
  'Perte de temps',
];

const afterItems = [
  'Cuisine fluide',
  'Organisation parfaite',
  'Gain de temps immédiat',
];

const ProblemSolution = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <h2 className="font-extrabold text-2xl md:text-4xl text-foreground text-center max-w-3xl mx-auto leading-tight mb-14">
          Vous utilisez votre Thermomix tous les jours… mais mal optimisé
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Avant */}
          <div className="bg-secondary rounded-2xl p-8">
            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-5 block">Avant</span>
            <ul className="space-y-4">
              {beforeItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-foreground/70">
                  <span className="text-destructive text-lg leading-none mt-0.5">✕</span>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Après */}
          <div className="bg-accent/10 border border-accent/20 rounded-2xl p-8">
            <span className="text-xs font-bold uppercase tracking-widest text-accent mb-5 block">Après Thermo3D</span>
            <ul className="space-y-4">
              {afterItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-foreground">
                  <span className="text-accent text-lg leading-none mt-0.5">✓</span>
                  <span className="text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
