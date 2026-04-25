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
    a: 'Nous expédions sous 24 à 48h ouvrées depuis notre atelier en Corse. Comptez ensuite 2 à 3 jours par Colissimo et 3 à 5 jours par Mondial Relay en France métropolitaine.',
  },
  {
    q: 'Combien coûte la livraison ?',
    a: 'Mondial Relay : tarif unique 5,99 € en France métropolitaine (3 à 5 jours ouvrés). Colissimo : dès 5,15 € selon le poids (2 à 3 jours ouvrés). La livraison est offerte dès 50 € d\'achat.',
  },
  {
    q: 'À partir de quel montant la livraison est-elle offerte ?',
    a: 'Dès 50 € d\'achat, la livraison est automatiquement offerte, quel que soit le mode choisi (Mondial Relay ou Colissimo).',
  },
  {
    q: 'Puis-je suivre mon colis ?',
    a: 'Oui, vous recevez par email votre numéro de suivi dès l\'expédition, avec un lien direct vers le site du transporteur. Vous le retrouvez aussi à tout moment dans votre espace client.',
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
        <title>FAQ Accessoires Thermomix | Questions fréquentes — Thermo3D</title>
        <meta name="description" content="Questions fréquentes sur les accessoires Thermomix Thermo3D : compatibilité TM5 TM6 TM7, matériaux alimentaires, livraison, retours et entretien." />
        <link rel="canonical" href="https://thermo3d.fr/faq" />
        <meta property="og:title" content="FAQ Accessoires Thermomix — Thermo3D" />
        <meta property="og:description" content="Toutes les réponses à vos questions sur nos accessoires Thermomix imprimés en 3D." />
        <meta property="og:url" content="https://thermo3d.fr/faq" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map(faq => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
              },
            })),
          })}
        </script>
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
