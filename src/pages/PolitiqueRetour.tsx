import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ShieldCheck, Clock, Package, RefreshCw, Mail, CheckCircle2 } from 'lucide-react';

const PolitiqueRetour = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Politique de retour 30 jours | Satisfait ou Remboursé — Thermo3D</title>
        <meta name="description" content="Satisfait ou remboursé sous 30 jours chez Thermo3D. Procédure simple, remboursement rapide. Découvrez notre politique de retour transparente." />
        <link rel="canonical" href="https://thermo3d.fr/politique-de-retour" />
      </Helmet>

      <Header />
      <main className="container mx-auto px-6 py-16 max-w-3xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
            <ShieldCheck className="w-6 h-6 text-accent" />
          </div>
          <span className="text-xs uppercase tracking-wider font-semibold text-accent">Garantie Thermo3D</span>
        </div>
        <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">Satisfait ou Remboursé — 30 jours</h1>
        <p className="text-base text-muted-foreground leading-relaxed mb-10">
          Votre satisfaction est notre priorité. Si votre commande ne vous convient pas, vous disposez de <strong className="text-foreground">30 jours</strong> à compter de la réception pour nous la retourner et être intégralement remboursé. Sans question, sans justification.
        </p>

        {/* Garanties clés */}
        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          {[
            { icon: Clock, title: '30 jours', desc: 'Délai de rétractation étendu' },
            { icon: RefreshCw, title: 'Remboursement', desc: 'Sous 14 jours après retour' },
            { icon: CheckCircle2, title: 'Sans justificatif', desc: 'Aucune raison à fournir' },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="border border-border rounded-xl p-4 text-center bg-card">
              <Icon className="w-6 h-6 text-accent mx-auto mb-2" />
              <p className="font-semibold text-sm text-foreground">{title}</p>
              <p className="text-xs text-muted-foreground mt-1">{desc}</p>
            </div>
          ))}
        </div>

        <div className="space-y-8 text-sm leading-relaxed text-muted-foreground">
          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">Procédure de retour en 4 étapes</h2>
            <ol className="space-y-4">
              {[
                { n: '1', t: 'Contactez-nous', d: 'Envoyez un email à contact@thermo3d.fr en précisant votre numéro de commande et le(s) produit(s) à retourner.' },
                { n: '2', t: 'Recevez votre étiquette', d: 'Nous vous communiquons l\'adresse de retour sous 24h ouvrées.' },
                { n: '3', t: 'Renvoyez le colis', d: 'Emballez soigneusement le produit dans son état d\'origine et envoyez-le via le transporteur de votre choix (frais de retour à votre charge sauf produit défectueux).' },
                { n: '4', t: 'Soyez remboursé', d: 'Dès réception et vérification, nous procédons au remboursement intégral sur votre moyen de paiement initial sous 14 jours maximum.' },
              ].map(({ n, t, d }) => (
                <li key={n} className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-accent-foreground font-bold text-sm flex items-center justify-center">{n}</span>
                  <div>
                    <p className="font-semibold text-foreground">{t}</p>
                    <p className="mt-1">{d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">Conditions du retour</h2>
            <ul className="space-y-2">
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" /> Le produit doit être retourné dans un délai de 30 jours après réception.</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" /> Il doit être complet, propre et dans son état d'origine.</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" /> Les produits personnalisés (gravure, coloris sur mesure) ne sont pas éligibles, sauf défaut de fabrication.</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" /> Conservez la preuve d'envoi jusqu'à confirmation du remboursement.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">Produit défectueux ou erreur de notre part</h2>
            <p>
              Si vous recevez un produit endommagé, défectueux ou non conforme à votre commande, contactez-nous immédiatement avec photos à l'appui. Nous prenons en charge <strong>l'intégralité des frais de retour</strong> et procédons à un remplacement ou remboursement express, selon votre préférence.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">Modalités de remboursement</h2>
            <p>
              Le remboursement est effectué sur le moyen de paiement utilisé lors de la commande (carte bancaire, PayPal, etc.). Selon votre banque, le crédit peut apparaître sous 3 à 10 jours ouvrés après notre traitement.
            </p>
          </section>

          <section className="bg-muted/40 border border-border rounded-xl p-6">
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-display font-semibold text-foreground mb-1">Une question sur votre retour ?</h3>
                <p className="text-sm">
                  Notre équipe répond sous 24h ouvrées à <a href="mailto:contact@thermo3d.fr" className="text-primary underline font-medium">contact@thermo3d.fr</a>.
                </p>
                <Link to="/contact" className="inline-flex items-center gap-1 text-sm text-accent font-semibold hover:underline mt-3">
                  Contacter le service client →
                </Link>
              </div>
            </div>
          </section>

          <p className="text-xs">
            Cette politique de retour s'ajoute à votre droit légal de rétractation (14 jours) prévu par le Code de la consommation, ainsi qu'aux garanties légales de conformité (2 ans) et de vices cachés. Voir nos <Link to="/cgv" className="text-primary underline">CGV</Link> pour plus de détails.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PolitiqueRetour;
