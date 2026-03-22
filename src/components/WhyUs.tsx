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
    desc: 'Expédié sous 48h. Livraison offerte dès 50€ d\'achat en France métropolitaine.',
  },
];

const WhyUs = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-accent font-bold text-sm uppercase tracking-widest mb-3">Pourquoi nous</p>
          <h2 className="font-extrabold text-2xl md:text-4xl text-foreground">
            La qualité Thermo3D
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f) => (
            <div key={f.title} className="text-center group">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-secondary flex items-center justify-center mb-5 group-hover:bg-accent/10 transition-colors">
                <f.icon className="w-6 h-6 text-foreground group-hover:text-accent transition-colors" />
              </div>
              <h3 className="font-bold text-sm mb-2 text-foreground">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
