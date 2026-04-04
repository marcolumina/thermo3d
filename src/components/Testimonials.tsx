import { Star, Quote } from 'lucide-react';

const testimonials = [
  { 
    name: 'Sophie M.', 
    age: '34 ans',
    text: "Les produits sont de très bonne qualité. Ils complètent parfaitement le Thermomix et permettent d'en tirer encore plus de bénéfices.", 
    rating: 5 
  },
  { 
    name: 'Laurent D.', 
    age: '42 ans',
    text: "Livraison rapide, produit impeccable. Je suis très satisfait de mon achat et de la qualité des produits. Je recommande !",
    rating: 5 
  },
  { 
    name: 'Marie C.', 
    age: '38 ans',
    text: "Tout ce que j'ai de Thermo3D pour mon TM6 fonctionne parfaitement, je ne peux que le recommander. Un vrai gain de temps.",
    rating: 5 
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground">
            Témoignages de clients
          </h2>
          <p className="text-muted-foreground text-sm mt-2">
            sur plus de 1000 commandes
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-card rounded-2xl p-7 border border-border/50 shadow-premium relative"
            >
              <Quote className="w-6 h-6 text-accent/20 absolute top-5 right-5" />
              
              <p className="font-semibold text-sm text-foreground mb-1">{t.name}, {t.age}</p>
              
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-sm text-foreground/70 leading-relaxed">
                {t.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
