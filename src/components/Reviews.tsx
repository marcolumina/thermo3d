import { Star } from 'lucide-react';

const reviews = [
  { name: 'Isabelle R.', text: "Indispensable ! Depuis que j'ai ces accessoires, ma cuisine est transformée. Commande et livraison au top.", rating: 5 },
  { name: 'Thomas B.', text: "Excellente qualité, tout est parfaitement conçu. Le support varoma est génial, je recommande !", rating: 5 },
  { name: 'Nathalie P.', text: "Toujours très satisfaite de Thermo3D. Produits de qualité, livraison rapide. Bravo !", rating: 5 },
  { name: 'Pierre L.', text: "Super accessoires pour mon TM6. L'impression 3D est impeccable, ça change la vie en cuisine.", rating: 5 },
];

const Reviews = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-4">
          <p className="text-accent font-bold text-3xl">4,9</p>
          <p className="text-sm text-muted-foreground">basé sur <strong className="text-foreground">+1000</strong> avis vérifiés</p>
        </div>

        <div className="overflow-x-auto scrollbar-hide pb-4">
          <div className="flex gap-4 min-w-max px-2">
            {reviews.map((r) => (
              <div key={r.name} className="bg-card rounded-xl p-5 border border-border/50 w-[280px] flex-shrink-0">
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-semibold text-sm text-foreground">{r.name}</span>
                  <span className="text-[10px] text-accent font-medium bg-accent/10 px-2 py-0.5 rounded-full">Vérifié</span>
                </div>
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-sm text-foreground/70 leading-relaxed">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
