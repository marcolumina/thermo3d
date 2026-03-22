import { Star, Quote } from 'lucide-react';

const testimonials = [
  { name: 'Isabelle R.', text: "Depuis que j'ai ces accessoires, ma cuisine est transformée. Impossible de revenir en arrière !", rating: 5 },
  { name: 'Thomas B.', text: "J'étais sceptique, mais après une semaine je ne peux plus m'en passer. Un vrai game changer.", rating: 5 },
  { name: 'Nathalie P.', text: "Qualité exceptionnelle, tout est parfaitement pensé. Je recommande les yeux fermés.", rating: 5 },
];

const Testimonials = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-accent tracking-widest uppercase mb-3">
            Retours clients
          </p>
          <h2 className="font-extrabold text-2xl md:text-4xl text-foreground mb-4">
            Une fois essayé, impossible de revenir en arrière
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Ces accessoires deviennent indispensables dès la première utilisation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative bg-secondary rounded-2xl p-7 flex flex-col gap-5 border border-border"
            >
              <Quote className="w-8 h-8 text-accent/30 absolute top-5 right-5" />
              <div className="flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-sm text-foreground/85 leading-relaxed flex-1">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3 pt-2 border-t border-border">
                <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center text-sm font-bold text-accent">
                  {t.name[0]}
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-foreground">{t.name}</span>
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
