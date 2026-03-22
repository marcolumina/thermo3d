const BeforeAfter = () => {
  return (
    <section className="py-20 md:py-28 border-b border-border">
      <div className="container mx-auto px-6">
        <h2 className="font-extrabold text-2xl md:text-4xl text-foreground text-center mb-14">
          Votre Thermomix mérite mieux
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Avant */}
          <div className="bg-secondary rounded-2xl p-8">
            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-6 block">Avant</span>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-foreground/70">
                <span className="text-base mt-0.5">❌</span>
                <span className="text-sm leading-relaxed">Plan de travail encombré</span>
              </li>
              <li className="flex items-start gap-3 text-foreground/70">
                <span className="text-base mt-0.5">❌</span>
                <span className="text-sm leading-relaxed">Accessoires mal rangés</span>
              </li>
              <li className="flex items-start gap-3 text-foreground/70">
                <span className="text-base mt-0.5">❌</span>
                <span className="text-sm leading-relaxed">Perte de temps en cuisine</span>
              </li>
            </ul>
          </div>

          {/* Après */}
          <div className="bg-accent/10 border border-accent/20 rounded-2xl p-8">
            <span className="text-xs font-bold uppercase tracking-widest text-accent mb-6 block">Après Thermo3D</span>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-foreground">
                <span className="text-base mt-0.5">✅</span>
                <span className="text-sm leading-relaxed font-medium">Organisation parfaite</span>
              </li>
              <li className="flex items-start gap-3 text-foreground">
                <span className="text-base mt-0.5">✅</span>
                <span className="text-sm leading-relaxed font-medium">Gain de place immédiat</span>
              </li>
              <li className="flex items-start gap-3 text-foreground">
                <span className="text-base mt-0.5">✅</span>
                <span className="text-sm leading-relaxed font-medium">Cuisine plus fluide et agréable</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
