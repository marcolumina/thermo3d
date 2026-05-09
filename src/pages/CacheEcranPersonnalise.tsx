import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import {
  Sparkles, MessageCircle, Palette, Wand2, Send, CheckCircle2,
  Crown, Gamepad2, Car, Trophy, Quote, Moon, Zap, Star, ChevronDown,
  Mail, Clock, ShieldCheck, Flag,
} from 'lucide-react';
import TopBanner from '@/components/TopBanner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const universes = [
  { icon: Sparkles, label: 'Anime', desc: 'Manga, héros, univers japonais' },
  { icon: Crown, label: 'Luxe', desc: 'Codes premium, dorures, élégance' },
  { icon: Trophy, label: 'Sport', desc: 'Clubs, équipes, passions' },
  { icon: Car, label: 'Voiture', desc: 'Marques, modèles iconiques' },
  { icon: Wand2, label: 'Minimaliste', desc: 'Lignes pures, sobre, raffiné' },
  { icon: Gamepad2, label: 'Gaming', desc: 'Jeux cultes, esports, pixel art' },
  { icon: Moon, label: 'Sombre', desc: 'Dark, gothique, mystérieux' },
  { icon: Zap, label: 'Flashy', desc: 'Néons, couleurs vives, pop' },
  { icon: Quote, label: 'Citation', desc: 'Phrase culte, mantra, prénom' },
];

const steps = [
  { n: '01', title: 'Contactez-moi', desc: 'On échange sur votre univers, vos goûts et vos envies.', icon: MessageCircle },
  { n: '02', title: 'Faisabilité', desc: 'Je vérifie ensemble si votre projet est réalisable.', icon: CheckCircle2 },
  { n: '03', title: 'Création du design', desc: 'Je conçois un visuel unique, rien que pour vous.', icon: Palette },
  { n: '04', title: 'Validation & impression', desc: 'On valide ensemble, puis j\'imprime votre pièce en France.', icon: Wand2 },
  { n: '05', title: 'Livraison soignée', desc: 'Expédition rapide depuis la Corse, emballage premium.', icon: Send },
];

const faqs = [
  { q: 'Comment se passe la commande ?', a: "Vous me contactez d'abord via le formulaire ou par email. On discute de votre projet, de votre univers et de vos envies. Une fois la faisabilité validée, je vous envoie un lien de paiement sécurisé." },
  { q: 'Pourquoi dois-je vous contacter avant de commander ?', a: "Chaque cache écran est 100% sur mesure. Avant toute commande, je vérifie avec vous que votre projet est réalisable techniquement et qu'il correspond à vos attentes. Cela garantit un résultat parfait." },
  { q: 'Combien de temps prend la création ?', a: "Comptez 3 à 7 jours pour la phase de design (échanges + maquette), puis 24 à 48h pour l'impression et 2 à 5 jours pour la livraison." },
  { q: 'Puis-je demander n\'importe quel design ?', a: "Presque ! Anime, gaming, sport, luxe, citations, prénoms, illustrations personnelles… On peut explorer beaucoup d'univers. Je vous dirai en toute transparence si une demande n'est pas réalisable (droits, complexité technique)." },
  { q: 'Le cache écran est-il compatible avec mon Thermomix ?', a: "Oui, compatible TM5, TM6 et TM7. Précisez simplement votre modèle lors de notre échange." },
  { q: 'Quel est le tarif ?', a: "19,90 € pour la création sur mesure et l'impression. Aucun supplément caché : un seul prix, un projet unique." },
];

const CacheEcranPersonnalise = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Cache écran Thermomix 100% personnalisé — Création unique sur mesure | Thermo3D</title>
        <meta name="description" content="Cache écran Thermomix 100% personnalisé selon votre univers : anime, luxe, sport, gaming, minimaliste… Création unique sur mesure à 19,90€. Compatible TM5, TM6, TM7." />
        <link rel="canonical" href="https://thermo3d.fr/cache-ecran-personnalise" />
        <meta property="og:title" content="Cache écran Thermomix 100% personnalisé — Thermo3D" />
        <meta property="og:description" content="Création unique • Design sur mesure • Style personnalisé. Contactez-moi pour discuter de votre projet." />
        <meta property="og:url" content="https://thermo3d.fr/cache-ecran-personnalise" />
      </Helmet>

      <TopBanner />
      <Header />

      <main className="flex-1">
        {/* ═══════ HERO ═══════ */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-background to-secondary/40 pointer-events-none" />
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

          <div className="container mx-auto px-4 sm:px-6 py-14 md:py-24 relative">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                Service exclusif & créatif
              </div>

              <h1 className="font-extrabold text-3xl sm:text-4xl md:text-6xl text-foreground tracking-tight leading-[1.05]">
                Cache écran Thermomix
                <span className="block mt-2 bg-gradient-to-r from-accent via-accent to-foreground bg-clip-text text-transparent">
                  100% personnalisé
                </span>
              </h1>

              <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Chaque cache écran est créé spécialement selon <strong className="text-foreground">votre univers</strong> et <strong className="text-foreground">vos envies</strong>. Une pièce unique, pensée pour vous.
              </p>

              <div className="mt-7 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs sm:text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-accent" /> Création unique</span>
                <span className="opacity-40">•</span>
                <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-accent" /> Design sur mesure</span>
                <span className="opacity-40">•</span>
                <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-accent" /> Style personnalisé</span>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-foreground text-background font-semibold text-sm md:text-base shadow-premium-lg hover:shadow-premium hover:-translate-y-0.5 hover:bg-accent transition-all duration-300 w-full sm:w-auto"
                >
                  <MessageCircle className="w-5 h-5" />
                  Me contacter pour mon projet
                  <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                </Link>
                <div className="text-sm text-muted-foreground">
                  À partir de <span className="text-2xl font-extrabold text-foreground">19,90 €</span>
                </div>
              </div>

              <p className="mt-5 text-xs text-muted-foreground italic max-w-md mx-auto">
                Avant toute commande, contactez-moi afin de voir ensemble si votre projet est réalisable.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════ UNIVERS ═══════ */}
        <section className="container mx-auto px-4 sm:px-6 py-16 md:py-24">
          <div className="text-center max-w-2xl mx-auto mb-12 animate-fade-in">
            <span className="text-xs font-semibold text-accent uppercase tracking-widest">Inspirations</span>
            <h2 className="mt-3 text-2xl md:text-4xl font-extrabold text-foreground">
              Quel est <em className="text-accent not-italic">votre univers</em> ?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Anime, luxe, sport, gaming, minimaliste… Je crée le cache écran qui vous ressemble vraiment.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 md:gap-4 max-w-4xl mx-auto">
            {universes.map((u, i) => {
              const Icon = u.icon;
              return (
                <div
                  key={u.label}
                  className="group relative p-5 md:p-6 rounded-2xl border border-border bg-card hover:border-accent/40 hover:shadow-premium-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="mt-4 font-bold text-base md:text-lg text-foreground">{u.label}</h3>
                  <p className="mt-1 text-xs md:text-sm text-muted-foreground leading-relaxed">{u.desc}</p>
                </div>
              );
            })}
          </div>

          <p className="text-center mt-10 text-sm text-muted-foreground">
            …et bien d'autres. <Link to="/contact" className="font-semibold text-accent underline-offset-4 hover:underline">Parlez-moi de votre idée →</Link>
          </p>
        </section>

        {/* ═══════ AVANT COMMANDE ═══════ */}
        <section className="bg-secondary/40 border-y border-border">
          <div className="container mx-auto px-4 sm:px-6 py-16 md:py-24">
            <div className="max-w-3xl mx-auto">
              <div className="bg-card rounded-3xl p-8 md:p-12 shadow-premium-lg border border-border relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-accent/5 rounded-full blur-2xl pointer-events-none" />
                <div className="relative">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold">
                    <Info className="w-3.5 h-3.5" />
                    Avant commande
                  </div>
                  <h2 className="mt-4 text-2xl md:text-3xl font-extrabold text-foreground">
                    Discutons d'abord de votre projet
                  </h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    Parce que chaque création est unique et conçue à la main, je vous demande de <strong className="text-foreground">me contacter avant toute commande</strong>. Cela me permet de :
                  </p>
                  <ul className="mt-5 space-y-3">
                    {[
                      'Comprendre votre univers et vos préférences visuelles',
                      'Vérifier la faisabilité technique de votre design',
                      'Vous proposer un aperçu avant impression',
                      'Garantir un résultat à la hauteur de vos attentes',
                    ].map((t) => (
                      <li key={t} className="flex items-start gap-3 text-sm md:text-base text-foreground">
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex flex-col sm:flex-row gap-3">
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-accent text-accent-foreground font-semibold text-sm shadow-premium hover:shadow-premium-lg hover:-translate-y-0.5 transition-all"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Me contacter pour mon projet
                    </Link>
                    <a
                      href="mailto:contact@thermo3d.fr"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-border bg-card text-foreground font-semibold text-sm hover:border-accent/40 transition-all"
                    >
                      <Mail className="w-4 h-4" />
                      contact@thermo3d.fr
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════ ÉTAPES DE CRÉATION ═══════ */}
        <section className="container mx-auto px-4 sm:px-6 py-16 md:py-24">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold text-accent uppercase tracking-widest">Le processus</span>
            <h2 className="mt-3 text-2xl md:text-4xl font-extrabold text-foreground">
              Les étapes de votre création
            </h2>
            <p className="mt-4 text-muted-foreground">
              Un accompagnement personnalisé du premier message à la livraison.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent md:-translate-x-1/2 hidden sm:block" />
              <div className="space-y-6 md:space-y-10">
                {steps.map((s, i) => {
                  const Icon = s.icon;
                  const isRight = i % 2 === 1;
                  return (
                    <div
                      key={s.n}
                      className={`relative flex flex-col sm:flex-row items-start gap-4 md:gap-8 ${isRight ? 'md:flex-row-reverse' : ''} animate-fade-in`}
                      style={{ animationDelay: `${i * 80}ms` }}
                    >
                      <div className="relative flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-foreground text-background flex items-center justify-center font-extrabold text-sm md:text-base shadow-premium z-10 md:mx-auto">
                        {s.n}
                      </div>
                      <div className={`flex-1 bg-card rounded-2xl p-5 md:p-6 border border-border shadow-premium hover:shadow-premium-lg transition-all duration-300 hover:-translate-y-1 ${isRight ? 'md:text-right' : ''}`}>
                        <div className={`inline-flex items-center gap-2 ${isRight ? 'md:flex-row-reverse' : ''}`}>
                          <div className="w-8 h-8 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
                            <Icon className="w-4 h-4" />
                          </div>
                          <h3 className="font-bold text-base md:text-lg text-foreground">{s.title}</h3>
                        </div>
                        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════ GARANTIES ═══════ */}
        <section className="bg-secondary/40 border-y border-border">
          <div className="container mx-auto px-4 sm:px-6 py-12 md:py-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { icon: Sparkles, title: 'Pièce unique', desc: 'Design exclusif, jamais réimprimé à l\'identique' },
                { icon: Flag, title: 'Made in France', desc: 'Imprimé dans notre atelier en Corse' },
                { icon: ShieldCheck, title: 'PLA alimentaire', desc: 'Matière premium et durable' },
                { icon: Clock, title: 'Suivi personnel', desc: 'Échanges directs tout au long du projet' },
              ].map((g) => {
                const Icon = g.icon;
                return (
                  <div key={g.title} className="text-center">
                    <div className="inline-flex w-12 h-12 rounded-2xl bg-accent/10 text-accent items-center justify-center mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-sm md:text-base text-foreground">{g.title}</h3>
                    <p className="mt-1 text-xs md:text-sm text-muted-foreground leading-relaxed">{g.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ═══════ FAQ ═══════ */}
        <section className="container mx-auto px-4 sm:px-6 py-16 md:py-24">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-xs font-semibold text-accent uppercase tracking-widest">FAQ</span>
              <h2 className="mt-3 text-2xl md:text-4xl font-extrabold text-foreground">
                Questions fréquentes
              </h2>
            </div>

            <div className="space-y-3">
              {faqs.map((f, i) => {
                const open = openFaq === i;
                return (
                  <div
                    key={i}
                    className={`rounded-2xl border bg-card transition-all duration-300 ${open ? 'border-accent/40 shadow-premium-lg' : 'border-border hover:border-accent/20'}`}
                  >
                    <button
                      onClick={() => setOpenFaq(open ? null : i)}
                      className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                      aria-expanded={open}
                    >
                      <span className="font-semibold text-sm md:text-base text-foreground">{f.q}</span>
                      <ChevronDown className={`w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
                    </button>
                    <div className={`grid transition-all duration-300 ${open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                      <div className="overflow-hidden">
                        <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ═══════ CTA FINAL ═══════ */}
        <section className="container mx-auto px-4 sm:px-6 pb-20">
          <div className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden bg-foreground text-background p-10 md:p-16 text-center shadow-premium-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-transparent pointer-events-none" />
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative">
              <Sparkles className="w-8 h-8 text-accent mx-auto mb-4" />
              <h2 className="text-2xl md:text-4xl font-extrabold leading-tight">
                Prêt à créer <em className="text-accent not-italic">votre</em> cache écran ?
              </h2>
              <p className="mt-4 text-sm md:text-base text-background/70 max-w-xl mx-auto">
                Parlez-moi de votre univers. Je vous accompagne pour donner vie à un design qui vous ressemble.
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-accent text-accent-foreground font-semibold text-sm md:text-base shadow-premium-lg hover:scale-105 transition-transform"
              >
                <MessageCircle className="w-5 h-5" />
                Me contacter pour mon projet
              </Link>
              <p className="mt-4 text-xs text-background/50">
                Réponse personnelle sous 24h • À partir de 19,90€
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

// Local Info icon to avoid extra import overhead
const Info = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

export default CacheEcranPersonnalise;
