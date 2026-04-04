import { Printer, Flag, Truck, RefreshCw } from 'lucide-react';

const advantages = [
  {
    icon: Printer,
    title: 'Une qualité exceptionnelle',
    desc: "Nous croyons fermement que la qualité n'est pas seulement une caractéristique, mais un engagement. Chaque pièce est imprimée en 3D avec une précision au dixième de millimètre.",
  },
  {
    icon: Truck,
    title: 'Livraison offerte dès 50€',
    desc: "À partir de 50€ d'achat, nous livrons directement chez vous en France métropolitaine, sans frais de port — rapidement et en toute fiabilité.",
  },
  {
    icon: RefreshCw,
    title: 'Satisfait ou remboursé 30 jours',
    desc: "Vous avez 30 jours pour vérifier votre commande en toute tranquillité. Si quelque chose ne vous convient pas, nous vous remboursons facilement.",
  },
];

const WhyUs = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground">
            Vos avantages
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {advantages.map((a) => (
            <div key={a.title} className="text-center">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-accent/10 flex items-center justify-center mb-5">
                <a.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-display font-semibold text-base mb-3 text-foreground">{a.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
