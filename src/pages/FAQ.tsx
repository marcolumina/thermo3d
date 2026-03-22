import { Helmet } from 'react-helmet-async';
import TopBanner from '@/components/TopBanner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  {
    q: 'Quels modèles de Thermomix sont compatibles ?',
    a: 'Tous nos accessoires sont compatibles avec les Thermomix TM5, TM6 et TM7. La compatibilité est indiquée sur chaque fiche produit.',
  },
  {
    q: 'Le matériau est-il sans danger pour la cuisine ?',
    a: 'Oui, nous utilisons du PLA de qualité alimentaire, certifié pour un contact avec les aliments. Ce matériau est également biodégradable.',
  },
  {
    q: 'Quel est le délai de livraison ?',
    a: 'Nous expédions sous 48h ouvrées. La livraison en France métropolitaine prend généralement 2 à 4 jours. La livraison est offerte dès 50€ d\'achat.',
  },
  {
    q: 'Puis-je retourner un produit ?',
    a: 'Oui, vous bénéficiez d\'un droit de retour de 14 jours. Si le produit ne vous convient pas, nous vous remboursons intégralement.',
  },
  {
    q: 'Comment entretenir les accessoires ?',
    a: 'Nos accessoires se nettoient facilement à l\'eau tiède et au savon. Ils ne passent pas au lave-vaisselle pour préserver leur durabilité.',
  },
  {
    q: 'Proposez-vous des packs ?',
    a: 'Oui, nous proposons des packs regroupant plusieurs accessoires à prix réduit. Consultez notre catalogue pour découvrir les offres en cours.',
  },
];

const FAQ = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>FAQ | Thermo3D — Questions fréquentes accessoires Thermomix</title>
        <meta name="description" content="Questions fréquentes sur les accessoires Thermomix Thermo3D : compatibilité, matériaux, livraison, retours et entretien." />
      </Helmet>

      <TopBanner />
      <Header />

      <main className="flex-1">
        <section className="container mx-auto px-6 py-16 md:py-24">
          <div className="max-w-2xl mx-auto">
            <h1 className="font-extrabold text-3xl md:text-4xl text-foreground text-center mb-4">
              Questions fréquentes
            </h1>
            <p className="text-muted-foreground text-center mb-12">
              Tout ce que vous devez savoir sur nos accessoires Thermomix.
            </p>

            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-xl px-5">
                  <AccordionTrigger className="text-sm font-semibold text-foreground hover:no-underline py-4">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
