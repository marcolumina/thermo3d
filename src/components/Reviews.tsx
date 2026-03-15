import { Star } from 'lucide-react';

const reviews = [
  { name: 'Sophie M.', rating: 5, text: "Super qualité d'impression ! Le support s'adapte parfaitement à mon TM6.", date: 'Février 2026' },
  { name: 'Laurent D.', rating: 5, text: "Livraison rapide et produit conforme. Je recommande vivement Thermo3D.", date: 'Janvier 2026' },
  { name: 'Marie C.', rating: 4, text: "Très pratique au quotidien, le doseur épices est devenu indispensable.", date: 'Mars 2026' },
  { name: 'Thomas R.', rating: 5, text: "Design soigné et matériaux de qualité alimentaire. Parfait !", date: 'Mars 2026' },
];

const Reviews = () => {
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="mb-8">
        <h2 className="font-display font-bold text-2xl md:text-3xl">Avis clients</h2>
        <p className="text-muted-foreground text-sm mt-1">Ce que nos clients pensent de nos produits</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {reviews.map((review) => (
          <div
            key={review.name}
            className="bg-card border border-border rounded-xl p-5 flex flex-col gap-3"
          >
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${i < review.rating ? 'fill-primary text-primary' : 'text-border'}`}
                />
              ))}
            </div>
            <p className="text-sm text-foreground leading-relaxed flex-1">"{review.text}"</p>
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span className="font-medium">{review.name}</span>
              <span>{review.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
