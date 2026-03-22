import { Star } from 'lucide-react';

const reviews = [
  { name: 'Sophie M.', text: "Produit hyper pratique, je ne peux plus m'en passer !", rating: 5 },
  { name: 'Laurent D.', text: "Qualité incroyable, parfait pour mon Thermomix.", rating: 5 },
  { name: 'Marie C.', text: "Le support varoma a changé ma vie en cuisine. Livraison rapide en plus !", rating: 5 },
  { name: 'Julie P.', text: "Enfin des accessoires bien pensés. Le pack rangement est top.", rating: 5 },
];

const Reviews = () => {
  return (
    <section className="bg-secondary py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-sm font-bold text-foreground">4.9/5</span>
          </div>
          <h2 className="font-extrabold text-2xl md:text-4xl text-foreground">
            Déjà +1000 clients satisfaits
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {reviews.map((r) => (
            <div key={r.name} className="bg-background rounded-2xl p-6 flex flex-col gap-4">
              <div className="flex gap-0.5">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-sm text-foreground/80 leading-relaxed flex-1">"{r.text}"</p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-xs font-bold text-foreground">
                  {r.name[0]}
                </div>
                <div>
                  <span className="text-xs font-bold text-foreground">{r.name}</span>
                  <span className="text-xs text-accent ml-1.5">✓ Achat vérifié</span>
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
