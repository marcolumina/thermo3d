import { Star, Quote } from 'lucide-react';

const testimonials = [
  { name: 'Isabelle R.', text: "Depuis que j'ai ces accessoires, ma cuisine est transformée. Impossible de revenir en arrière !", rating: 5 },
  { name: 'Thomas B.', text: "J'étais sceptique, mais après une semaine je ne peux plus m'en passer. Un vrai game changer.", rating: 5 },
  { name: 'Nathalie P.', text: "Qualité exceptionnelle, tout est parfaitement pensé. Je recommande les yeux fermés.", rating: 5 },
];

const Testimonials = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-xs uppercase tracking-[0.2em] mb-3">
            Retours clients
          </p>
          <h2 className="font-display font-bold text-2xl md:text-[2.25rem] text-foreground mb-5 leading-tight">
            Une fois essayé, impossible de revenir en arrière
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto leading-relaxed">
            Ces accessoires deviennent indispensables dès la première utilisation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative bg-secondary/50 rounded-2xl p-8 flex flex-col gap-5 shadow-premium"
            >
              <Quote className="w-7 h-7 text-accent/20 absolute top-6 right-6" />
              <div className="flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-sm text-foreground/80 leading-relaxed flex-1">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3 pt-3 border-t border-border/60">
                <div className="w-9 h-9 rounded-full bg-accent/[0.08] flex items-center justify-center text-sm font-semibold text-accent">
                  {t.name[0]}
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-foreground">{t.name}</span>
                  <span className="text-[10px] text-accent">✓ Achat vérifié</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
