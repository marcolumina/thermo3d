import { Helmet } from 'react-helmet-async';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const MentionsLegales = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Mentions Légales | Thermo3D — Accessoires Thermomix</title>
        <meta name="description" content="Mentions légales du site Thermo3D : éditeur, hébergement, propriété intellectuelle et cookies. Accessoires Thermomix imprimés en 3D en France." />
        <link rel="canonical" href="https://thermo3d.fr/mentions-legales" />
      </Helmet>

      <Header />
      <main className="container mx-auto px-6 py-16 max-w-3xl">
        <h1 className="font-display text-3xl font-bold mb-2">Mentions Légales</h1>
        <p className="text-xs text-muted-foreground mb-8">Dernière mise à jour : avril 2026</p>

        <div className="bg-accent/10 border border-accent/30 rounded-xl p-4 mb-8 text-xs text-foreground">
          ⚠️ <strong>Mentions à compléter par l'éditeur</strong> avant la mise en ligne définitive : raison sociale, SIRET, RCS, n° TVA et coordonnées de contact.
        </div>

        <div className="space-y-6 text-sm leading-relaxed text-muted-foreground">
          <section>
            <h2 className="font-display text-lg font-semibold text-foreground mb-2">Éditeur du site</h2>
            <p>
              Le site <strong>thermo3d.fr</strong> est édité par :<br />
              <strong>Thermo3D</strong> — [Raison sociale à compléter]<br />
              [Forme juridique] au capital de [montant] €<br />
              Siège social : [Adresse complète]<br />
              SIRET : [Numéro SIRET]<br />
              RCS : [Ville] [Numéro RCS]<br />
              Numéro de TVA intracommunautaire : [Numéro TVA]<br />
              Directeur de la publication : [Nom du responsable]<br />
              Email : <a href="mailto:contact@thermo3d.fr" className="text-primary underline">contact@thermo3d.fr</a><br />
              Téléphone : [Numéro de téléphone]
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground mb-2">Hébergement</h2>
            <p>
              Le site est hébergé par :<br />
              Lovable / Netlify<br />
              Adresse : San Francisco, CA, États-Unis<br />
              Site web : <a href="https://lovable.dev" target="_blank" rel="noopener noreferrer" className="text-primary underline">lovable.dev</a>
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground mb-2">Propriété intellectuelle</h2>
            <p>
              L'ensemble du contenu de ce site (textes, images, logos, designs 3D, vidéos) est protégé par le droit d'auteur. Toute reproduction, même partielle, est interdite sans autorisation préalable écrite de l'éditeur.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground mb-2">Responsabilité</h2>
            <p>
              L'éditeur s'efforce de fournir des informations exactes et à jour. Toutefois, il ne saurait être tenu responsable des erreurs, omissions ou des résultats obtenus suite à l'utilisation de ces informations.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground mb-2">Cookies</h2>
            <p>
              Ce site utilise des cookies essentiels au bon fonctionnement (panier, session, préférences) ainsi que des cookies de mesure d'audience et marketing soumis à votre consentement. Lors de votre première visite, une bannière vous permet d'accepter, refuser ou personnaliser leur utilisation. Vous pouvez modifier vos préférences à tout moment via le lien <strong>« Gérer mes cookies »</strong> en pied de page. Pour plus d'informations, consultez notre <a href="/politique-confidentialite" className="text-primary underline">Politique de confidentialité</a>.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MentionsLegales;
