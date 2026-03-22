import { Star } from 'lucide-react';

const reviews = [
  { name: 'Sophie M.', text: "Super qualité ! Le support s'adapte parfaitement à mon TM6. Je recommande à 100%.", rating: 5 },
  { name: 'Laurent D.', text: "Livraison rapide et produit conforme. Le PLA alimentaire est top. Bravo Thermo3D.", rating: 5 },
  { name: 'Marie C.', text: "Très pratique au quotidien, le doseur épices est devenu indispensable dans ma cuisine.", rating: 5 },
];

const Reviews = () => {
  return (
    <section className="bg-secondary py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-accent font-bold text-sm uppercase tracking-widest mb-3">Avis clients</p>
          <h2 className="font-extrabold text-2xl md:text-4xl text-foreground">
            Ils adorent nos accessoires
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {reviews.map((r) => (
            <div key={r.name} className="bg-background rounded-2xl p-6 flex flex-col gap-4">
              <div className="flex gap-0.5">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-sm text-foreground/80 leading-relaxed flex-1">"{r.text}"</p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-xs font-bold text-foreground">
                  {r.name[0]}
                </div>
                <div>
                  <span className="text-xs font-bold text-foreground">{r.name}</span>
                  <span className="text-xs text-accent ml-1">✓ Vérifié</span>
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
