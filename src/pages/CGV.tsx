import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CGV = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Conditions Générales de Vente | Thermo3D</title>
        <meta name="description" content="CGV Thermo3D : commande, paiement, livraison, droit de rétractation 14j, garantie satisfait ou remboursé 15 jours sur vos accessoires Thermomix." />
        <link rel="canonical" href="https://thermo3d.fr/cgv" />
      </Helmet>

      <Header />
      <main className="container mx-auto px-6 py-16 max-w-3xl">
        <h1 className="font-display text-3xl font-bold mb-2">Conditions Générales de Vente</h1>
        <p className="text-xs text-muted-foreground mb-8">Dernière mise à jour : avril 2026</p>

        <div className="space-y-6 text-sm leading-relaxed text-muted-foreground">
          <section>
            <h2 className="font-display text-lg font-semibold text-foreground mb-2">Article 1 – Objet et champ d'application</h2>
            <p>
              Les présentes Conditions Générales de Vente (ci-après « CGV ») régissent l'ensemble des ventes conclues à distance entre Thermo3D (ci-après « le Vendeur ») et tout client non-professionnel (ci-après « le Client ») via le site <strong>thermo3d.fr</strong>. Toute commande passée sur le site implique l'acceptation pleine et entière des présentes CGV par le Client.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground mb-2">Article 2 – Produits</h2>
            <p>
              Les produits proposés à la vente sont des accessoires pour robots Thermomix® (TM5, TM6, TM7), conçus et imprimés en 3D en France. Chaque produit fait l'objet d'une description détaillée. Les photographies sont les plus fidèles possibles mais n'ont aucune valeur contractuelle. De légères variations de couleur ou de finition sont inhérentes au procédé d'impression 3D et ne constituent pas un défaut. Thermo3D est indépendant de la société Vorwerk® ; la marque Thermomix® appartient à son propriétaire.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground mb-2">Article 3 – Prix</h2>
            <p>
              Les prix sont indiqués en euros toutes taxes comprises (TTC), hors frais de livraison. Les frais de livraison sont précisés avant validation finale de la commande. Le Vendeur se réserve le droit de modifier ses prix à tout moment, étant entendu que le prix figurant au moment de la commande est seul applicable.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground mb-2">Article 4 – Commande</h2>
            <p>
              La commande s'effectue en ligne en plusieurs étapes : sélection des produits, ajout au panier, identification, choix du mode de livraison et paiement sécurisé. La commande n'est définitivement validée qu'après confirmation du paiement. Un email récapitulatif est adressé au Client à l'adresse indiquée.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground mb-2">Article 5 – Paiement</h2>
            <p>
              Le paiement s'effectue en ligne via la plateforme sécurisée Shopify Payments. Sont acceptés : carte bancaire (Visa, Mastercard, CB), Apple Pay, Google Pay, PayPal et autres moyens proposés au moment du checkout. Les données bancaires sont chiffrées (SSL / 3D Secure) et ne transitent jamais par les serveurs de Thermo3D.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground mb-2">Article 6 – Livraison</h2>
            <p>
              Les produits sont préparés sous 24 à 48h ouvrées et expédiés via Colissimo (2-3 jours) ou Mondial Relay (3-5 jours), au choix du Client. La livraison est offerte dès 50 € d'achat en France métropolitaine. Les zones desservies incluent la France métropolitaine, la Corse, la Belgique, le Luxembourg et la Suisse. Pour plus de détails, consultez notre <Link to="/livraison" className="text-primary underline">page Livraison</Link>.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground mb-2">Article 7 – Droit de rétractation (14 jours)</h2>
            <p>
              Conformément à l'article L221-18 du Code de la consommation, le Client dispose d'un délai de <strong>14 jours</strong> à compter de la réception du produit pour exercer son droit de rétractation, sans avoir à justifier de motif ni à payer de pénalité. Le produit doit être retourné dans son état d'origine, complet et non endommagé. Les frais de retour sont à la charge du Client. Le remboursement intervient dans un délai maximum de 14 jours après réception du produit retourné.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground mb-2">Article 8 – Garantie « Satisfait ou Remboursé » 15 jours</h2>
            <p>
              En complément du droit légal de rétractation, Thermo3D offre une <strong>garantie commerciale « Satisfait ou Remboursé » de 15 jours</strong> à compter de la réception. Si le produit ne vous convient pas, vous pouvez le retourner et être intégralement remboursé. Conditions et modalités détaillées dans notre <Link to="/politique-de-retour" className="text-primary underline">Politique de retour</Link>.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground mb-2">Article 9 – Garanties légales</h2>
            <p>
              Tous les produits bénéficient de plein droit de la <strong>garantie légale de conformité</strong> (articles L217-3 et suivants du Code de la consommation) pendant 2 ans à compter de la délivrance, et de la <strong>garantie des vices cachés</strong> (articles 1641 et suivants du Code civil). Pour faire valoir ces garanties, contactez-nous à contact@thermo3d.fr.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground mb-2">Article 10 – Réclamations, médiation et litiges</h2>
            <p>
              Pour toute réclamation, contactez le service client à <a href="mailto:contact@thermo3d.fr" className="text-primary underline">contact@thermo3d.fr</a>. À défaut de solution amiable, le Client peut recourir gratuitement au médiateur de la consommation. Conformément à l'article 14 du règlement européen n°524/2013, la Commission européenne met à disposition une plateforme de règlement en ligne des litiges : <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-primary underline">ec.europa.eu/consumers/odr</a>. À défaut de résolution amiable, les tribunaux français sont seuls compétents.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground mb-2">Article 11 – Données personnelles</h2>
            <p>
              Le traitement des données personnelles du Client est régi par notre <Link to="/politique-confidentialite" className="text-primary underline">Politique de Confidentialité</Link> conforme au RGPD.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground mb-2">Article 12 – Droit applicable</h2>
            <p>
              Les présentes CGV sont soumises au droit français. Toute traduction est fournie à titre informatif ; seule la version française fait foi.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CGV;
