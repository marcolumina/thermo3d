import { Printer, Flag, Lightbulb, Truck } from 'lucide-react';

const features = [
  {
    icon: Printer,
    title: 'Impression 3D de précision',
    desc: 'Chaque accessoire est imprimé avec une précision au dixième de millimètre pour un ajustement parfait.',
  },
  {
    icon: Flag,
    title: 'Fabriqué en France',
    desc: 'Conception et fabrication en Corse avec du PLA de qualité alimentaire certifié.',
  },
  {
    icon: Lightbulb,
    title: 'Design intelligent',
    desc: 'Pensés pour le quotidien : clip en 2 secondes, ultra stables, discrets et fonctionnels.',
  },
  {
    icon: Truck,
    title: 'Livraison rapide',
    desc: "Expédié sous 48h. Livraison offerte dès 50€ d'achat en France métropolitaine.",
  },
];

const WhyUs = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-accent font-semibold text-xs uppercase tracking-[0.2em] mb-3">Pourquoi nous</p>
          <h2 className="font-display font-bold text-2xl md:text-[2.25rem] text-foreground leading-tight">
            La qualité Thermo3D
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((f) => (
            <div key={f.title} className="text-center group">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-accent/[0.08] transition-colors duration-300">
                <f.icon className="w-5 h-5 text-foreground group-hover:text-accent transition-colors duration-300" />
              </div>
              <h3 className="font-display font-semibold text-sm mb-2 text-foreground">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
