import { LayoutGrid, Zap, Flame, Eye } from 'lucide-react';

const features = [
  {
    icon: LayoutGrid,
    title: 'Gain de place immédiat',
    desc: 'Vos accessoires se rangent sur le Thermomix, plus besoin de place supplémentaire.',
  },
  {
    icon: Zap,
    title: 'Installation en 2 secondes',
    desc: "Clip simple, sans outil ni vis. Prêt à l'emploi dès réception.",
  },
  {
    icon: Flame,
    title: 'Résistant à la chaleur',
    desc: 'PLA de qualité alimentaire, pensé pour résister aux conditions de cuisine.',
  },
  {
    icon: Eye,
    title: 'Design propre et discret',
    desc: 'Des formes épurées qui se fondent dans votre cuisine sans encombrer.',
  },
];

const WhyUs = () => {
  return (
    <section className="py-16 md:py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground">
            Pourquoi choisir nos accessoires ?
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f) => (
            <div key={f.title} className="bg-card border border-border rounded-2xl p-7 text-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <f.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-bold text-sm mb-2 text-foreground">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
