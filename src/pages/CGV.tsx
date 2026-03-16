import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CGV = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-6 py-16 max-w-3xl">
        <h1 className="font-display text-3xl font-bold mb-8">Conditions Générales de Vente</h1>

        <div className="space-y-6 text-sm leading-relaxed text-muted-foreground">
          <section>
            <h2 className="font-display text-lg font-semibold text-foreground mb-2">Article 1 – Objet</h2>
            <p>
              Les présentes Conditions Générales de Vente (CGV) régissent les ventes de produits effectuées via le site <strong>thermo3d.fr</strong>. Toute commande implique l'acceptation sans réserve des présentes CGV.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground mb-2">Article 2 – Produits</h2>
            <p>
              Les produits proposés sont des accessoires pour Thermomix imprimés en 3D. Chaque produit est décrit avec la plus grande exactitude possible. Les photographies n'ont pas de valeur contractuelle. Les légères variations de couleur ou de texture sont inhérentes au procédé d'impression 3D.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground mb-2">Article 3 – Prix</h2>
            <p>
              Les prix sont indiqués en euros toutes taxes comprises (TTC). Les frais de livraison sont indiqués avant la validation de la commande. Le vendeur se réserve le droit de modifier ses prix à tout moment, étant entendu que le prix figurant au moment de la commande sera le seul applicable.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground mb-2">Article 4 – Commande</h2>
            <p>
              Le processus de commande comprend les étapes suivantes : sélection des produits, ajout au panier, vérification de la commande, paiement sécurisé via Shopify Checkout. Un email de confirmation est envoyé après validation du paiement.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground mb-2">Article 5 – Paiement</h2>
            <p>
              Le paiement s'effectue en ligne via la plateforme sécurisée Shopify. Les moyens de paiement acceptés incluent : carte bancaire (Visa, Mastercard), PayPal et autres moyens proposés lors du checkout.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground mb-2">Article 6 – Livraison</h2>
            <p>
              Les produits sont expédiés à l'adresse indiquée lors de la commande. Les délais de livraison sont donnés à titre indicatif. Un retard de livraison ne peut donner lieu à l'annulation de la commande ni à une indemnisation. La livraison est effectuée en France métropolitaine.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground mb-2">Article 7 – Droit de rétractation</h2>
            <p>
              Conformément à l'article L221-18 du Code de la consommation, le client dispose d'un délai de 14 jours à compter de la réception du produit pour exercer son droit de rétractation, sans avoir à justifier de motif. Le produit doit être retourné dans son état d'origine et complet. Les frais de retour sont à la charge du client. Le remboursement sera effectué dans un délai de 14 jours suivant la réception du produit retourné.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground mb-2">Article 8 – Garantie</h2>
            <p>
              Tous les produits bénéficient de la garantie légale de conformité (articles L217-4 et suivants du Code de la consommation) et de la garantie des vices cachés (articles 1641 et suivants du Code civil).
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground mb-2">Article 9 – Réclamations et litiges</h2>
            <p>
              Pour toute réclamation, contactez-nous à <a href="mailto:contact@thermo3d.fr" className="text-primary underline">contact@thermo3d.fr</a>. En cas de litige, une solution amiable sera recherchée avant tout recours judiciaire. Le client peut recourir au médiateur de la consommation. Les tribunaux français sont compétents.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CGV;
