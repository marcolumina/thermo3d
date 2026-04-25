import { Truck, Printer, CheckCircle } from 'lucide-react';

const advantages = [
  {
    icon: Truck,
    title: 'Livraison rapide',
    desc: "Expédition sous 48h depuis notre atelier en Corse. Livraison offerte dès 50€ d'achat en France métropolitaine.",
  },
  {
    icon: Printer,
    title: 'Fabrication 3D française',
    desc: "Chaque accessoire est imprimé en 3D avec précision dans notre atelier en Corse, avec du PLA de qualité alimentaire certifié.",
  },
  {
    icon: CheckCircle,
    title: 'Compatible Thermomix',
    desc: "Tous nos accessoires sont conçus pour s'adapter parfaitement aux modèles Thermomix TM6 et TM7, sans outil ni modification.",
  },
];

const WhyUs = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground">
            Pourquoi choisir Thermo3D ?
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
