import { Leaf, Palette, Flag, Zap } from 'lucide-react';

const features = [
  {
    icon: Leaf,
    title: 'PLA qualité alimentaire',
    desc: 'Matériaux certifiés contact alimentaire pour une utilisation sûre avec votre Thermomix TM5, TM6 ou TM7.',
  },
  {
    icon: Palette,
    title: 'Impression 3D cuisine sur mesure',
    desc: "Chaque accessoire Thermomix est modélisé avec précision pour un ajustement parfait et une utilisation intuitive.",
  },
  {
    icon: Flag,
    title: 'Fabriqué en France',
    desc: 'Conception et fabrication 100% française. Accessoires cuisine pratiques de qualité artisanale.',
  },
  {
    icon: Zap,
    title: 'Livraison rapide',
    desc: "Expédition sous 48h. Livraison gratuite dès 50€ d'achat. Satisfait ou remboursé 30 jours.",
  },
];

const WhyUs = () => {
  return (
    <section className="py-20 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-2xl md:text-3xl">
            Pourquoi choisir <span className="text-gradient">Thermo3D</span> pour vos accessoires Thermomix&nbsp;?
          </h2>
          <p className="text-muted-foreground text-sm mt-2">L'impression 3D cuisine au service de votre quotidien</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f) => (
            <div key={f.title} className="bg-background border border-border/50 rounded-2xl p-7 text-center hover:border-primary/30 transition-colors group">
              <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <f.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display font-bold text-base mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;