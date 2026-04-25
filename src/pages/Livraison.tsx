import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Truck, Package, Clock, MapPin, Search, Gift, ShieldCheck, Mail, CheckCircle, Globe2 } from 'lucide-react';
import TopBanner from '@/components/TopBanner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const carriers = [
  {
    icon: Truck,
    name: 'Colissimo',
    delay: '2 à 3 jours ouvrés',
    price: '4,90 €',
    desc: 'Livraison à domicile par La Poste, avec ou sans signature. Idéal si vous êtes souvent chez vous.',
  },
  {
    icon: MapPin,
    name: 'Mondial Relay',
    delay: '3 à 5 jours ouvrés',
    price: '3,90 €',
    desc: 'Livraison en point relais près de chez vous. Plus de 11 000 points en France.',
  },
];

const steps = [
  { icon: CheckCircle, title: 'Commande confirmée', desc: 'Vous recevez un email de confirmation immédiatement après votre paiement.' },
  { icon: Package, title: 'Préparation 24-48h', desc: 'Votre commande est imprimée, contrôlée et emballée dans notre atelier en France.' },
  { icon: Truck, title: 'Expédition', desc: 'Vous recevez un email avec votre numéro de suivi dès que le colis quitte notre atelier.' },
  { icon: Gift, title: 'Livraison', desc: 'Votre colis arrive chez vous ou en point relais selon le mode choisi.' },
];

const Livraison = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Livraison — Délais, Suivi & Tarifs | Thermo3D</title>
        <meta name="description" content="Livraison Colissimo (2-3 jours) et Mondial Relay (3-5 jours) depuis la France. Préparation sous 24-48h, suivi de colis inclus, livraison offerte dès 50€." />
        <link rel="canonical" href="https://thermo3d.fr/livraison" />
      </Helmet>

      <TopBanner />
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-secondary/30 py-14 md:py-20">
          <div className="container mx-auto px-6 text-center max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-semibold mb-4">
              <Truck className="w-3.5 h-3.5" />
              Expédié depuis la France 🇫🇷
            </div>
            <h1 className="font-display font-extrabold text-3xl md:text-5xl text-foreground mb-4">
              Livraison rapide et soignée
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Préparation sous 24 à 48h dans notre atelier, expédition par Colissimo ou Mondial Relay,
              suivi de colis inclus, et <span className="font-semibold text-accent">livraison offerte dès 50€</span>.
            </p>
          </div>
        </section>

        {/* Transporteurs */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground text-center mb-3">
              Choisissez votre mode de livraison
            </h2>
            <p className="text-muted-foreground text-center text-sm mb-10 max-w-xl mx-auto">
              Vous sélectionnez votre transporteur lors du paiement, en fonction de vos préférences.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {carriers.map((c) => (
                <div key={c.name} className="bg-card border border-border rounded-2xl p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <c.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display font-bold text-lg text-foreground">{c.name}</h3>
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-1">
                        <Clock className="w-3.5 h-3.5" />
                        {c.delay}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-extrabold text-foreground">{c.price}</div>
                      <div className="text-[10px] font-semibold text-accent">Offert dès 50€</div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Étapes */}
        <section className="bg-secondary/20 py-14 md:py-20">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground text-center mb-3">
              Comment se passe votre commande ?
            </h2>
            <p className="text-muted-foreground text-center text-sm mb-12 max-w-xl mx-auto">
              De la confirmation à la livraison, chaque étape est suivie pour vous garantir une expérience fluide.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
              {steps.map((s, i) => (
                <div key={s.title} className="bg-card rounded-2xl p-5 text-center relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-accent text-accent-foreground text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mt-2 mb-3">
                    <s.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-display font-semibold text-sm text-foreground mb-2">{s.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Zones de livraison */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div>
                <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-semibold mb-3">
                  <Globe2 className="w-3.5 h-3.5" />
                  Zones de livraison
                </div>
                <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-4">
                  Où livrons-nous ?
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Nous expédions tous nos accessoires Thermomix depuis notre atelier en France 🇫🇷.
                  Que vous soyez en métropole, en Corse ou en Belgique, nous trouvons toujours une solution.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Pour toute autre destination, contactez-nous avant commande pour un devis personnalisé.
                </p>
              </div>

              <div className="bg-card border border-border rounded-2xl p-6 space-y-4">
                {[
                  { zone: 'France métropolitaine', delay: '2-5 jours', price: 'À partir de 3,90 €' },
                  { zone: 'Corse', delay: '3-6 jours', price: 'À partir de 4,90 €' },
                  { zone: 'Belgique & Luxembourg', delay: '4-6 jours', price: 'À partir de 6,90 €' },
                  { zone: 'Suisse', delay: '5-7 jours', price: 'Sur devis' },
                  { zone: 'DOM-TOM', delay: '7-14 jours', price: 'Sur devis' },
                ].map((z) => (
                  <div key={z.zone} className="flex items-center justify-between border-b border-border last:border-0 pb-3 last:pb-0">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-foreground">{z.zone}</p>
                        <p className="text-[11px] text-muted-foreground">{z.delay}</p>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-foreground">{z.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Suivi colis */}
        <section className="bg-secondary/20 py-14 md:py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="bg-card border border-border rounded-2xl p-8 md:p-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Search className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h2 className="font-display font-bold text-2xl text-foreground mb-2">Suivi de votre colis</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Dès que votre colis quitte notre atelier, vous recevez un <strong>email avec votre numéro de suivi</strong>
                    et un lien direct vers le site du transporteur.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-secondary/40 rounded-xl p-4">
                  <Mail className="w-5 h-5 text-accent mb-2" />
                  <p className="text-sm font-semibold text-foreground mb-1">Email d'expédition</p>
                  <p className="text-xs text-muted-foreground">Avec le numéro de suivi et le lien de tracking.</p>
                </div>
                <div className="bg-secondary/40 rounded-xl p-4">
                  <Search className="w-5 h-5 text-accent mb-2" />
                  <p className="text-sm font-semibold text-foreground mb-1">Suivi dans votre compte</p>
                  <p className="text-xs text-muted-foreground">Retrouvez le statut de chaque commande dans votre espace client.</p>
                </div>
                <div className="bg-secondary/40 rounded-xl p-4">
                  <ShieldCheck className="w-5 h-5 text-accent mb-2" />
                  <p className="text-sm font-semibold text-foreground mb-1">Colis assuré</p>
                  <p className="text-xs text-muted-foreground">Tous nos envois sont assurés en cas de perte ou d'avarie.</p>
                </div>
              </div>

              <Link
                to="/account"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                <Search className="w-4 h-4" />
                Suivre ma commande
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground text-center mb-8">
              Questions fréquentes sur la livraison
            </h2>
            <Accordion type="single" collapsible className="bg-card border border-border rounded-2xl px-5">
              {[
                { q: 'Quel est le délai total entre ma commande et la réception ?', a: "Comptez 24 à 48h de préparation dans notre atelier, puis 2 à 3 jours par Colissimo ou 3 à 5 jours par Mondial Relay. Soit en moyenne 3 à 7 jours ouvrés au total." },
                { q: 'La livraison est-elle vraiment offerte dès 50€ ?', a: "Oui, à partir de 50€ d'achat la livraison est automatiquement offerte, que vous choisissiez Colissimo ou Mondial Relay." },
                { q: 'Comment suivre mon colis ?', a: "Vous recevez un email avec votre numéro de suivi dès l'expédition. Vous pouvez aussi le retrouver à tout moment dans votre espace client, rubrique 'Mes commandes'." },
                { q: 'Que faire si mon colis est en retard ou perdu ?', a: "Tous nos envois sont assurés. Contactez-nous via la page Contact avec votre numéro de commande, nous prenons immédiatement en charge la réclamation auprès du transporteur." },
                { q: 'Livrez-vous en Belgique ou en Suisse ?', a: "Oui, nous livrons en Belgique, au Luxembourg et en Suisse. Les tarifs et délais sont précisés au moment du paiement." },
                { q: 'Puis-je modifier mon adresse après commande ?', a: "Oui, tant que la commande n'est pas expédiée. Contactez-nous le plus rapidement possible via la page Contact pour modifier votre adresse de livraison." },
              ].map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-border last:border-0">
                  <AccordionTrigger className="text-left text-sm font-semibold text-foreground hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="text-center mt-10">
              <p className="text-sm text-muted-foreground mb-3">Une autre question sur votre livraison ?</p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-border bg-card px-5 py-2.5 rounded-xl text-sm font-semibold text-foreground hover:bg-secondary/40 transition-colors"
              >
                <Mail className="w-4 h-4" />
                Nous contacter
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Livraison;
