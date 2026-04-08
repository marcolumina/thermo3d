import { Helmet } from 'react-helmet-async';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PolitiqueConfidentialite = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Politique de Confidentialité | Thermo3D</title>
        <meta name="description" content="Politique de confidentialité de Thermo3D : données collectées, droits RGPD, cookies et sécurité. Vos données sont protégées." />
        <link rel="canonical" href="https://thermo3d.fr/politique-confidentialite" />
      </Helmet>

      <Header />
      <main className="container mx-auto px-6 py-16 max-w-3xl">
        <h1 className="font-display text-3xl font-bold mb-8">Politique de Confidentialité</h1>

        <div className="space-y-6 text-sm leading-relaxed text-muted-foreground">
          <section>
            <h2 className="font-display text-lg font-semibold text-foreground mb-2">1. Responsable du traitement</h2>
            <p>
              Le responsable du traitement des données personnelles est [Nom / Raison sociale], domicilié au [Adresse]. Contact : <a href="mailto:contact@thermo3d.fr" className="text-primary underline">contact@thermo3d.fr</a>.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground mb-2">2. Données collectées</h2>
            <p>Nous collectons les données suivantes dans le cadre de vos commandes et de votre navigation :</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Nom, prénom</li>
              <li>Adresse email</li>
              <li>Adresse postale</li>
              <li>Numéro de téléphone</li>
              <li>Données de navigation (cookies, adresse IP)</li>
              <li>Historique de commandes</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground mb-2">3. Finalités du traitement</h2>
            <p>Vos données sont utilisées pour :</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Traiter et suivre vos commandes</li>
              <li>Gérer la relation client</li>
              <li>Envoyer des communications commerciales (avec votre consentement)</li>
              <li>Améliorer nos services et notre site web</li>
              <li>Respecter nos obligations légales</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground mb-2">4. Base légale</h2>
            <p>
              Le traitement de vos données repose sur : l'exécution du contrat (commandes), votre consentement (newsletter), nos intérêts légitimes (amélioration des services) et le respect d'obligations légales.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground mb-2">5. Destinataires des données</h2>
            <p>
              Vos données peuvent être transmises à : nos prestataires de paiement (Shopify Payments), nos transporteurs pour la livraison, et nos prestataires techniques (hébergement). Aucune donnée n'est vendue à des tiers.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground mb-2">6. Durée de conservation</h2>
            <p>
              Les données clients sont conservées pendant 3 ans après la dernière commande. Les données de facturation sont conservées 10 ans conformément aux obligations comptables. Les cookies expirent après 13 mois maximum.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground mb-2">7. Vos droits (RGPD)</h2>
            <p>Conformément au RGPD, vous disposez des droits suivants :</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Droit d'accès</strong> : obtenir une copie de vos données</li>
              <li><strong>Droit de rectification</strong> : corriger vos données inexactes</li>
              <li><strong>Droit à l'effacement</strong> : demander la suppression de vos données</li>
              <li><strong>Droit à la portabilité</strong> : recevoir vos données dans un format structuré</li>
              <li><strong>Droit d'opposition</strong> : vous opposer au traitement de vos données</li>
              <li><strong>Droit de retirer votre consentement</strong> à tout moment</li>
            </ul>
            <p className="mt-2">
              Pour exercer vos droits, contactez-nous à <a href="mailto:contact@thermo3d.fr" className="text-primary underline">contact@thermo3d.fr</a>. Vous pouvez également introduire une réclamation auprès de la CNIL (<a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-primary underline">www.cnil.fr</a>).
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground mb-2">8. Cookies</h2>
            <p>
              Ce site utilise des cookies essentiels au fonctionnement du panier d'achat et des cookies analytiques pour améliorer votre expérience. Vous pouvez gérer vos préférences de cookies via les paramètres de votre navigateur.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground mb-2">9. Sécurité</h2>
            <p>
              Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, altération, divulgation ou destruction. Les paiements sont traités de manière sécurisée par Shopify.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground mb-2">10. Modifications</h2>
            <p>
              Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. La version en vigueur est celle publiée sur le site. Dernière mise à jour : mars 2026.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PolitiqueConfidentialite;
