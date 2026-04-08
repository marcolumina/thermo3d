import { Helmet } from 'react-helmet-async';
import TopBanner from '@/components/TopBanner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Printer, Flag, Lightbulb, Heart } from 'lucide-react';

const values = [
  { icon: Printer, title: 'Impression 3D de précision', desc: 'Chaque accessoire est imprimé au dixième de millimètre pour un ajustement parfait sur votre Thermomix.' },
  { icon: Flag, title: 'Fabriqué en France', desc: 'Conçu et fabriqué en Corse avec du PLA de qualité alimentaire certifié pour un usage cuisine.' },
  { icon: Lightbulb, title: 'Innovation constante', desc: 'Nous développons régulièrement de nouveaux accessoires basés sur les retours de notre communauté.' },
  { icon: Heart, title: 'Satisfaction client', desc: '+1000 clients satisfaits et une note de 4.9/5. Votre satisfaction est notre priorité absolue.' },
];

const APropos = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>À propos de Thermo3D | Accessoires Thermomix fabriqués en France</title>
        <meta name="description" content="Découvrez Thermo3D : accessoires Thermomix innovants imprimés en 3D en France. Notre mission, nos valeurs et notre engagement qualité pour votre cuisine." />
        <link rel="canonical" href="https://thermo3d.fr/a-propos" />
        <meta property="og:title" content="À propos de Thermo3D — Accessoires Thermomix" />
        <meta property="og:description" content="Accessoires Thermomix imprimés en 3D en Corse. Découvrez notre histoire et nos valeurs." />
        <meta property="og:url" content="https://thermo3d.fr/a-propos" />
      </Helmet>

      <TopBanner />
      <Header />

      <main className="flex-1">
        <section className="bg-hero">
          <div className="container mx-auto px-6 py-20 md:py-28 text-center">
            <h1 className="font-extrabold text-3xl md:text-5xl text-accent leading-tight">
              À propos de Thermo3D
            </h1>
            <p className="mt-5 text-foreground text-lg max-w-xl mx-auto">
              Des accessoires Thermomix pensés par des passionnés, pour des passionnés.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-6 py-16 md:py-24">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-extrabold text-2xl md:text-3xl text-foreground mb-6">Notre histoire</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Thermo3D est né d'un constat simple : les utilisateurs de Thermomix manquent d'accessoires pratiques pour organiser leur espace cuisine.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              En combinant notre expertise en impression 3D et notre passion pour la cuisine, nous avons créé une gamme d'accessoires innovants, solides et esthétiques.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Chaque produit est conçu, testé et fabriqué en Corse, France, avec des matériaux de qualité alimentaire certifiée.
            </p>
          </div>
        </section>

        <section className="bg-secondary py-16 md:py-24">
          <div className="container mx-auto px-6">
            <h2 className="font-extrabold text-2xl md:text-3xl text-foreground text-center mb-14">Nos valeurs</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((v) => (
                <div key={v.title} className="text-center">
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-background flex items-center justify-center mb-5">
                    <v.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-bold text-sm mb-2 text-foreground">{v.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default APropos;
