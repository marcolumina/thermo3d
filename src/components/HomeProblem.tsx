const problems = [
  { emoji: '🥄', text: 'Ustensiles qui traînent' },
  { emoji: '📦', text: 'Plan de travail encombré' },
  { emoji: '📱', text: 'Écran sale et marqué' },
  { emoji: '⚖️', text: 'Balance fragile et exposée' },
];

const HomeProblem = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/40">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10 md:mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-destructive">Le problème</span>
          <h2 className="font-display font-extrabold text-2xl md:text-4xl text-foreground mt-3 max-w-2xl mx-auto leading-tight">
            Votre cuisine vous fait perdre du temps chaque jour
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
          {problems.map((p) => (
            <div
              key={p.text}
              className="bg-background rounded-2xl p-5 md:p-6 text-center shadow-sm border border-border"
            >
              <div className="text-3xl md:text-4xl mb-3">{p.emoji}</div>
              <p className="text-sm md:text-base font-medium text-foreground/80 leading-snug">
                {p.text}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-sm md:text-base text-muted-foreground mt-10 max-w-xl mx-auto">
          Et si quelques accessoires bien pensés réglaient tout ça ?
        </p>
      </div>
    </section>
  );
};

export default HomeProblem;
