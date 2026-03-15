import { Leaf, Palette, Flag } from 'lucide-react';

const features = [
  {
    icon: Leaf,
    title: 'PLA alimentaire',
    desc: 'Tous nos produits sont imprimés en PLA certifié compatible contact alimentaire.',
  },
  {
    icon: Palette,
    title: 'Design sur mesure',
    desc: "Chaque accessoire est conçu avec précision pour s'adapter parfaitement à votre Thermomix.",
  },
  {
    icon: Flag,
    title: 'Made in France',
    desc: 'Conception et fabrication 100% française, dans notre atelier en Corse.',
  },
];

const WhyUs = () => {
  return (
    <section className="bg-card py-16">
      <div className="container mx-auto px-6">
        <h2 className="font-display font-bold text-2xl md:text-3xl text-center mb-2">
          Pourquoi Thermo3D ?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {features.map((f) => (
            <div key={f.title} className="bg-background rounded-2xl p-8 text-center">
              <div className="w-14 h-14 mx-auto rounded-xl bg-card flex items-center justify-center mb-4">
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
