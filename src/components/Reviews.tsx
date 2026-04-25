import { Star, ShieldCheck } from 'lucide-react';

const reviews = [
  { name: 'Isabelle R.', city: 'Lyon', text: "Indispensable ! Depuis que j'ai ces accessoires, ma cuisine est transformée. Commande et livraison au top.", rating: 5, product: 'Support TM6' },
  { name: 'Thomas B.', city: 'Bordeaux', text: "Excellente qualité, tout est parfaitement conçu. Le support varoma est génial, je recommande !", rating: 5, product: 'Support Varoma' },
  { name: 'Nathalie P.', city: 'Lille', text: "Toujours très satisfaite de Thermo3D. Produits de qualité, livraison rapide. Bravo !", rating: 5, product: 'Rangement TM7' },
  { name: 'Pierre L.', city: 'Marseille', text: "Super accessoires pour mon TM6. L'impression 3D est impeccable, ça change la vie en cuisine.", rating: 5, product: 'Support ustensiles' },
  { name: 'Camille D.', city: 'Nantes', text: "Made in France, finition irréprochable et SAV ultra réactif. Je rachèterai sans hésiter.", rating: 5, product: 'Support TM7' },
  { name: 'Julien M.', city: 'Toulouse', text: "Pratique, robuste et joli. Mon Thermomix a enfin sa place attitrée dans la cuisine.", rating: 5, product: 'Rangement TM6' },
];

const Reviews = () => {
  return (
    <section className="py-16 md:py-24" aria-labelledby="avis-clients-title">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <p className="text-[11px] uppercase tracking-[0.2em] text-accent font-bold mb-3">Avis clients vérifiés</p>
          <h2 id="avis-clients-title" className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
            Ils ont adopté Thermo3D
          </h2>
          <div className="inline-flex items-center gap-3 bg-card border border-border rounded-full px-5 py-2">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>
            <span className="font-bold text-foreground">4,9/5</span>
            <span className="text-xs text-muted-foreground">— +1 000 avis vérifiés</span>
          </div>
        </div>

        <div className="overflow-x-auto scrollbar-hide pb-4">
          <div className="flex gap-4 min-w-max px-2">
            {reviews.map((r) => (
              <div key={r.name} className="bg-card rounded-xl p-5 border border-border/50 w-[290px] flex-shrink-0">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="font-semibold text-sm text-foreground">{r.name}</p>
                    <p className="text-[11px] text-muted-foreground">{r.city}</p>
                  </div>
                  <span className="text-[10px] text-accent font-medium bg-accent/10 px-2 py-0.5 rounded-full inline-flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" /> Vérifié
                  </span>
                </div>
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-sm text-foreground/70 leading-relaxed mb-3">{r.text}</p>
                <p className="text-[11px] text-muted-foreground border-t border-border/40 pt-2">
                  Produit acheté : <span className="text-foreground font-medium">{r.product}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;

