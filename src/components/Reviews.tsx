import { Star } from 'lucide-react';

const reviews = [
  { name: 'Sophie M.', text: "Indispensable ! Depuis que j'ai ces accessoires, ma cuisine est transformée.", rating: 5 },
  { name: 'Laurent D.', text: "Super pratique, qualité au top. Je ne peux plus m'en passer.", rating: 5 },
  { name: 'Marie C.', text: "Je recommande les yeux fermés. Un vrai gain de temps au quotidien.", rating: 5 },
];

const Reviews = () => {
  return (
    <section className="bg-secondary/40 py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-sm font-semibold text-foreground">4,8/5</span>
            <span className="text-sm text-muted-foreground">· +1000 clients</span>
          </div>
          <h2 className="font-display font-bold text-2xl md:text-[2.25rem] text-foreground leading-tight">
            Ils ont transformé leur cuisine
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {reviews.map((r) => (
            <div key={r.name} className="bg-background rounded-2xl p-7 flex flex-col gap-5 shadow-premium">
              <div className="flex gap-0.5">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-sm text-foreground/80 leading-relaxed flex-1">"{r.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-xs font-semibold text-foreground">
                  {r.name[0]}
                </div>
                <div>
                  <span className="text-xs font-semibold text-foreground">{r.name}</span>
                  <span className="text-[10px] text-accent ml-1.5">✓ Vérifié</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
