import { Star, Truck, Flag } from 'lucide-react';

const reviews = [
  { name: 'Sophie M.', text: "Super qualité ! Le support s'adapte parfaitement à mon TM6. Je recommande à 100%." },
  { name: 'Laurent D.', text: "Livraison rapide et produit conforme. Le PLA alimentaire est top. Bravo Thermo3D." },
  { name: 'Marie C.', text: "Très pratique au quotidien, le doseur épices est devenu indispensable dans ma cuisine." },
];

const Reviews = () => {
  return (
    <section className="container mx-auto px-6 py-16 md:py-20">
      <div className="text-center mb-10">
        <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground">
          Ils nous font confiance
        </h2>
        <div className="flex items-center justify-center gap-1 mt-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          ))}
          <span className="ml-2 text-sm font-semibold text-foreground">4.9/5</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
        {reviews.map((r) => (
          <div key={r.name} className="bg-card border border-border rounded-2xl p-6 flex flex-col gap-3">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-sm text-foreground/80 leading-relaxed flex-1">"{r.text}"</p>
            <span className="text-xs font-semibold text-foreground">{r.name} <span className="text-primary">✓ Vérifié</span></span>
          </div>
        ))}
      </div>

      {/* Trust badges */}
      <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
        <span className="flex items-center gap-2"><Truck className="w-4 h-4 text-primary" /> Livraison rapide en France</span>
        <span className="flex items-center gap-2"><Flag className="w-4 h-4 text-primary" /> Fabriqué en France 🇫🇷</span>
      </div>
    </section>
  );
};

export default Reviews;
