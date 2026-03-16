import Header from "@/components/Header";
import Footer from "@/components/Footer";

const MentionsLegales = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-6 py-16 max-w-3xl">
        <h1 className="font-display text-3xl font-bold mb-8">Mentions Légales</h1>

        <div className="space-y-6 text-sm leading-relaxed text-muted-foreground">
          <section>
            <h2 className="font-display text-lg font-semibold text-foreground mb-2">Éditeur du site</h2>
            <p>
              Le site <strong>thermo3d.fr</strong> est édité par :<br />
              [Nom / Raison sociale]<br />
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
              Ce site utilise des cookies pour améliorer l'expérience utilisateur et assurer le bon fonctionnement du panier d'achat. En poursuivant votre navigation, vous acceptez l'utilisation de cookies conformément à notre politique de confidentialité.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MentionsLegales;
