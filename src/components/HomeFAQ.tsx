import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQS = [
  {
    q: 'Vos accessoires sont-ils compatibles avec mon Thermomix ?',
    a: "Oui, tous nos accessoires sont conçus sur-mesure pour les Thermomix® TM5, TM6 et TM7. La compatibilité est précisée sur chaque fiche produit. Thermo3D est une marque indépendante non affiliée à Vorwerk®.",
  },
  {
    q: 'Quels sont les délais de livraison ?',
    a: "Vos commandes sont préparées sous 24 à 48h ouvrées et expédiées via Mondial Relay (3-5 jours, dès 4,10 €) ou Colissimo (2-3 jours). La livraison est offerte dès 50 € d'achat en France métropolitaine.",
  },
  {
    q: 'Puis-je retourner un produit s\'il ne me convient pas ?',
    a: "Oui, vous bénéficiez de 15 jours pour changer d'avis. Satisfait ou remboursé, sans question. Le remboursement intervient sous 14 jours après réception du retour.",
  },
  {
    q: 'Le paiement est-il sécurisé ?',
    a: "Absolument. Les paiements sont traités par Shopify Payments (certifié PCI-DSS niveau 1) avec chiffrement SSL et 3D Secure. Nous acceptons CB, Visa, Mastercard, American Express, PayPal, Apple Pay et Google Pay.",
  },
  {
    q: 'Vos produits sont-ils vraiment fabriqués en France ?',
    a: "Oui, 100 % conçus et imprimés en 3D dans nos ateliers en Corse, en France. Nous utilisons du PLA de qualité alimentaire, biosourcé et recyclable.",
  },
  {
    q: 'Comment vous contacter en cas de question ?',
    a: "Notre équipe répond sous 24h ouvrées par email à contact@thermo3d.fr ou via le formulaire de contact. Service client basé en France.",
  },
];

const HomeFAQ = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-24 bg-muted/20" aria-labelledby="faq-home-title">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent text-[11px] uppercase tracking-[0.2em] font-bold px-3 py-1.5 rounded-full mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            Questions fréquentes
          </div>
          <h2 id="faq-home-title" className="font-display text-2xl md:text-3xl font-bold text-foreground">
            Tout ce que vous devez savoir
          </h2>
          <p className="text-sm text-muted-foreground mt-2">
            Les réponses aux questions les plus posées par nos clients.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className="bg-card border border-border rounded-xl overflow-hidden transition-colors hover:border-accent/40"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-sm md:text-base text-foreground">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-accent flex-shrink-0 transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border/50 pt-4">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-8">
          <Link
            to="/faq"
            className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline"
          >
            Voir toutes les questions →
          </Link>
        </div>

        {/* JSON-LD FAQ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: FAQS.map((f) => ({
                '@type': 'Question',
                name: f.q,
                acceptedAnswer: { '@type': 'Answer', text: f.a },
              })),
            }),
          }}
        />
      </div>
    </section>
  );
};

export default HomeFAQ;
