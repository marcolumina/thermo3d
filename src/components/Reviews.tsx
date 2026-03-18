import { Star, Quote } from 'lucide-react';

const reviews = [
  { name: 'Sophie M.', rating: 5, text: "Super qualité d'impression ! Le support s'adapte parfaitement à mon TM6. Je recommande à 100%.", date: 'Février 2026', verified: true },
  { name: 'Laurent D.', rating: 5, text: "Livraison rapide et produit conforme. Le PLA alimentaire est top. Je recommande vivement Thermo3D.", date: 'Janvier 2026', verified: true },
  { name: 'Marie C.', rating: 5, text: "Très pratique au quotidien, le doseur épices est devenu indispensable dans ma cuisine.", date: 'Mars 2026', verified: true },
  { name: 'Thomas R.', rating: 5, text: "Design soigné et matériaux de qualité alimentaire. L'impression 3D est impeccable. Parfait !", date: 'Mars 2026', verified: true },
];

const Reviews = () => {
  return (
    <section className="container mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <h2 className="font-display font-bold text-2xl md:text-3xl">
          Ce que nos <span className="text-gradient">clients</span> disent
        </h2>
        <p className="text-muted-foreground text-sm mt-2">Plus de 500 clients satisfaits en France</p>
        <div className="flex items-center justify-center gap-1 mt-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-primary text-primary" />
          ))}
          <span className="ml-2 text-sm font-semibold">4.9/5</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {reviews.map((review) => (
          <div
            key={review.name}
            className="bg-card border border-border/50 rounded-2xl p-6 flex flex-col gap-4 hover:border-primary/20 transition-colors"
          >
            <Quote className="w-6 h-6 text-primary/30" />
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-3.5 h-3.5 ${i < review.rating ? 'fill-primary text-primary' : 'text-border'}`}
                />
              ))}
            </div>
            <p className="text-sm text-foreground/80 leading-relaxed flex-1">"{review.text}"</p>
            <div className="flex items-center justify-between text-xs text-muted-foreground pt-2 border-t border-border/50">
              <div>
                <span className="font-semibold text-foreground">{review.name}</span>
                {review.verified && <span className="ml-1.5 text-primary">✓ Vérifié</span>}
              </div>
              <span>{review.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
