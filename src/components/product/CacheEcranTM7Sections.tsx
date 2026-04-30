import { Link } from 'react-router-dom';
import {
  ShieldCheck, Sparkles, Clock, Flag, CheckCircle, AlertTriangle,
  Droplets, Hand, ChevronRight, PlayCircle, Wrench, Eye, Heart, Info
} from 'lucide-react';
import heroImg from '@/assets/cache-ecran-tm7-hero.jpg';
import avantImg from '@/assets/cache-ecran-tm7-avant.jpg';
import apresImg from '@/assets/cache-ecran-tm7-apres.jpg';

interface Props {
  onAddToCart: () => void;
  price: string;
}

/* ───────── HERO sur-mesure (sous la fiche produit) ───────── */
export const CacheEcranTM7Hero = ({ onAddToCart }: Props) => {
  return (
    <section className="bg-gradient-to-b from-secondary/40 to-background py-14 md:py-20 border-t border-border/30">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Texte */}
          <div className="space-y-6">
            <p className="text-accent font-semibold text-[11px] uppercase tracking-[0.2em]">
              Spécialement conçu pour le TM7
            </p>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl leading-[1.1] text-foreground">
              Gardez votre écran TM7 <span className="text-accent">comme neuf, jour après jour</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Votre écran est exposé à chaque utilisation : projections, vapeur, traces de doigts.
              Notre cache se pose <strong>entre deux utilisations</strong> pour préserver l'écran
              du quotidien — et se retire en 2 secondes avant chaque cuisson.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-accent/10 border border-accent/20">
              <Info className="w-4 h-4 text-accent flex-shrink-0" />
              <p className="text-xs md:text-sm font-semibold text-foreground">
                À poser après utilisation, à retirer avant cuisson.
              </p>
            </div>

            <ul className="space-y-3 pt-2">
              {[
                { icon: ShieldCheck, t: 'Protège l\'écran entre les utilisations (projections, poussières, traces)' },
                { icon: Hand, t: 'Se pose en 2 secondes, sans outil ni colle' },
                { icon: Sparkles, t: 'Ajustement précis dédié au TM7 (au dixième de mm)' },
                { icon: Flag, t: 'Fabriqué en France 🇫🇷 — PLA qualité premium' },
              ].map(({ icon: Icon, t }) => (
                <li key={t} className="flex items-start gap-3 text-sm md:text-base text-foreground">
                  <span className="w-7 h-7 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-3.5 h-3.5 text-accent" />
                  </span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onAddToCart}
                className="btn-cart inline-flex items-center gap-2 px-7 py-4 rounded-full font-bold text-base"
              >
                Protéger mon Thermomix <ChevronRight className="w-4 h-4" />
              </button>
              <span className="text-xs text-muted-foreground">
                ✓ Expédié sous 48h · ✓ Satisfait ou remboursé
              </span>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-secondary/30 shadow-xl">
              <img
                src={heroImg}
                alt="Thermomix TM7 avec écran protégé dans une cuisine moderne"
                className="w-full h-full object-cover"
                width={1536}
                height={1024}
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 hidden md:flex items-center gap-2 bg-background border border-border rounded-2xl px-4 py-3 shadow-lg">
              <span className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center">
                <Heart className="w-4 h-4 text-accent fill-accent" />
              </span>
              <div>
                <p className="text-xs font-bold text-foreground">+1 000 Thermomix protégés</p>
                <p className="text-[10px] text-muted-foreground">en France</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ───────── PROBLÈME ───────── */
export const CacheEcranTM7Probleme = () => (
  <section className="py-14 md:py-20 bg-background">
    <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <div className="order-2 lg:order-1">
          <div className="aspect-square rounded-3xl overflow-hidden bg-secondary/30 shadow-xl">
            <img
              src={avantImg}
              alt="Écran Thermomix TM7 sale avec projections de sauce, traces de doigts et poussières"
              className="w-full h-full object-cover"
              width={1024}
              height={1024}
              loading="lazy"
            />
          </div>
        </div>

        <div className="order-1 lg:order-2 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-destructive/10 border border-destructive/20 text-destructive text-xs font-semibold">
            <AlertTriangle className="w-3.5 h-3.5" />
            Le problème
          </div>
          <h2 className="font-display font-extrabold text-2xl md:text-4xl leading-tight text-foreground">
            Votre écran est exposé à chaque utilisation
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Projections, vapeur, traces de doigts : entre deux cuissons, votre écran TM7 reste
            vulnérable sur le plan de travail. En quelques mois, il perd son aspect neuf —
            même sans rayures profondes.
          </p>

          <ul className="space-y-3">
            {[
              'Projections de sauce, huile et matières grasses lors d\'autres préparations',
              'Vapeur, poussière et particules qui se déposent au quotidien',
              'Traces de doigts grasses et nettoyages répétés',
              'Perte de l\'aspect neuf et de la valeur de revente',
            ].map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm text-foreground">
                <span className="text-destructive mt-0.5">✗</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

/* ───────── SOLUTION (3 étapes) ───────── */
export const CacheEcranTM7Solution = () => (
  <section className="py-14 md:py-20 bg-secondary/30">
    <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
      <div className="text-center mb-12">
        <p className="text-accent font-semibold text-[11px] uppercase tracking-[0.2em] mb-2">La solution</p>
        <h2 className="font-display font-extrabold text-2xl md:text-4xl text-foreground leading-tight">
          Une protection simple, un Thermomix qui reste neuf
        </h2>
        <p className="mt-3 text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
          Posez le cache après chaque utilisation, retirez-le avant la prochaine cuisson. C'est tout.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {[
          { num: '01', icon: Wrench, title: 'Pose en 2 secondes', desc: 'Après cuisson, vous posez le cache sur l\'écran. Il s\'aligne tout seul, sans outil ni colle.' },
          { num: '02', icon: ShieldCheck, title: 'Protection au repos', desc: 'L\'écran est à l\'abri des projections, poussières, traces et frottements quand vous ne l\'utilisez pas.' },
          { num: '03', icon: Hand, title: 'Retrait avant utilisation', desc: 'Avant de relancer une recette, vous retirez le cache d\'un geste. Le Thermomix s\'utilise normalement.' },
        ].map((s) => (
          <div key={s.num} className="bg-background rounded-2xl border border-border/50 p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <span className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center">
                <s.icon className="w-5 h-5 text-accent" />
              </span>
              <span className="text-3xl font-extrabold text-accent/20 font-display">{s.num}</span>
            </div>
            <h3 className="font-display font-bold text-base text-foreground mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ───────── AVANT / APRÈS visuel ───────── */
export const CacheEcranTM7AvantApres = () => (
  <section className="py-14 md:py-20 bg-background">
    <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
      <div className="text-center mb-10">
        <p className="text-accent font-semibold text-[11px] uppercase tracking-[0.2em] mb-2">Le résultat</p>
        <h2 className="font-display font-extrabold text-2xl md:text-4xl text-foreground">
          Avant / Après
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
        <div className="relative rounded-3xl overflow-hidden bg-secondary/40 shadow-md">
          <img
            src={avantImg}
            alt="Écran Thermomix TM7 sans cache — sale, projections et traces"
            className="w-full aspect-square object-cover"
            width={1024}
            height={1024}
            loading="lazy"
          />
          <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-destructive text-destructive-foreground text-[10px] font-bold uppercase tracking-wider">
            Sans cache
          </div>
          <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-black/70 to-transparent">
            <p className="text-white text-sm font-medium">Traces, projections, poussières — l'écran se salit en permanence.</p>
          </div>
        </div>

        <div className="relative rounded-3xl overflow-hidden bg-secondary/40 shadow-lg ring-2 ring-accent/30">
          <img
            src={apresImg}
            alt="Écran Thermomix TM7 protégé par cache 3D entre deux utilisations"
            className="w-full aspect-square object-cover"
            width={1024}
            height={1024}
            loading="lazy"
          />
          <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-accent text-accent-foreground text-[10px] font-bold uppercase tracking-wider">
            Avec cache Thermo3D
          </div>
          <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-black/70 to-transparent">
            <p className="text-white text-sm font-medium">Écran à l'abri entre les utilisations, comme neuf dans le temps.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ───────── VIDÉO (placeholder) ───────── */
export const CacheEcranTM7Video = () => (
  <section className="py-14 md:py-20 bg-secondary/30">
    <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
      <div className="text-center mb-8">
        <p className="text-accent font-semibold text-[11px] uppercase tracking-[0.2em] mb-2">En vidéo</p>
        <h2 className="font-display font-extrabold text-2xl md:text-4xl text-foreground">
          Voyez-le en action
        </h2>
        <p className="mt-3 text-sm text-muted-foreground max-w-xl mx-auto">
          Pose entre les utilisations, retrait avant cuisson, nettoyage : tout en moins d'une minute.
        </p>
      </div>

      <div className="relative aspect-video rounded-3xl overflow-hidden bg-foreground/95 shadow-xl group cursor-pointer">
        <img
          src={heroImg}
          alt="Aperçu vidéo cache écran Thermomix TM7"
          className="w-full h-full object-cover opacity-50 group-hover:opacity-60 transition-opacity"
          width={1536}
          height={1024}
          loading="lazy"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-background/95 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
            <PlayCircle className="w-12 h-12 md:w-14 md:h-14 text-accent" strokeWidth={1.5} />
          </div>
          <p className="text-white text-sm font-semibold">Vidéo bientôt disponible</p>
        </div>
      </div>
    </div>
  </section>
);

/* ───────── BÉNÉFICES (4 blocs) ───────── */
export const CacheEcranTM7Benefices = () => (
  <section className="py-14 md:py-20 bg-background">
    <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
      <div className="text-center mb-12">
        <p className="text-accent font-semibold text-[11px] uppercase tracking-[0.2em] mb-2">Pourquoi l'adopter</p>
        <h2 className="font-display font-extrabold text-2xl md:text-4xl text-foreground leading-tight">
          4 bonnes raisons de protéger votre TM7
        </h2>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {[
          { icon: ShieldCheck, title: 'Protégé entre 2 utilisations', desc: 'Plus de projections ni de poussières directement sur l\'écran quand vous ne cuisinez pas.' },
          { icon: Sparkles, title: 'Évite traces & rayures', desc: 'Fini les traces de doigts grasses et les micro-rayures dues au nettoyage répété.' },
          { icon: Heart, title: 'Comme neuf dans le temps', desc: 'Préserve l\'aspect d\'origine de l\'écran et la valeur de revente de votre Thermomix.' },
          { icon: Hand, title: 'Pose & retrait en 2 sec', desc: 'Se met en place et se retire d\'un geste, avant chaque utilisation. Aucune contrainte.' },
        ].map((b) => (
          <div key={b.title} className="bg-secondary/30 border border-border/40 rounded-2xl p-5 hover:border-accent/40 hover:shadow-lg transition-all">
            <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
              <b.icon className="w-5 h-5 text-accent" />
            </div>
            <h3 className="font-display font-bold text-sm md:text-base text-foreground mb-1.5">{b.title}</h3>
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ───────── DIFFÉRENCIATION ───────── */
export const CacheEcranTM7Differenciation = () => (
  <section className="py-14 md:py-20 bg-foreground text-background">
    <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
      <div className="text-center mb-12">
        <p className="text-accent font-semibold text-[11px] uppercase tracking-[0.2em] mb-2">La différence Thermo3D</p>
        <h2 className="font-display font-extrabold text-2xl md:text-4xl leading-tight">
          Ce n'est pas un produit générique
        </h2>
        <p className="mt-3 text-sm md:text-base text-background/60 max-w-xl mx-auto">
          Chaque cache est imprimé à la commande, dans notre atelier, pour votre Thermomix.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {[
          { icon: Flag, title: 'Fabrication française', desc: 'Imprimé dans notre atelier en Corse. Pas de stock entreposé à l\'autre bout du monde.' },
          { icon: Eye, title: 'Ajustement précis', desc: 'Modélisé spécifiquement pour le TM7. Découpes au dixième de mm.' },
          { icon: Sparkles, title: 'Fini premium', desc: 'PLA mat de qualité alimentaire. Toucher doux, esthétique sobre.' },
        ].map((d) => (
          <div key={d.title} className="border border-background/15 rounded-2xl p-6 hover:border-accent/40 transition-colors">
            <d.icon className="w-7 h-7 text-accent mb-4" />
            <h3 className="font-display font-bold text-base mb-2">{d.title}</h3>
            <p className="text-sm text-background/60 leading-relaxed">{d.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ───────── BLOC URGENCE LÉGÈRE + CTA ───────── */
export const CacheEcranTM7UrgenceCTA = ({ onAddToCart, price }: Props) => (
  <section className="py-14 md:py-20 bg-accent/5">
    <div className="container mx-auto px-4 sm:px-6 max-w-3xl text-center">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/15 text-accent text-xs font-semibold mb-5">
        <Droplets className="w-3.5 h-3.5" />
        Production artisanale en série limitée
      </div>
      <h2 className="font-display font-extrabold text-2xl md:text-4xl text-foreground leading-tight">
        Protégez votre TM7 dès aujourd'hui
      </h2>
      <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
        Chaque cache est imprimé à la commande dans notre atelier. Délais de production
        légèrement allongés en cas de forte demande — commandez maintenant pour recevoir sous 48 à 72h.
      </p>

      <button
        onClick={onAddToCart}
        className="btn-cart mt-8 inline-flex items-center gap-3 px-10 py-5 rounded-full font-bold text-base"
      >
        Ajouter au panier — {price} €
      </button>

      <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mt-6 text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-accent" /> Satisfait ou remboursé 14 j</span>
        <span className="inline-flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-accent" /> Paiement sécurisé</span>
        <span className="inline-flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-accent" /> Livraison rapide</span>
      </div>

      <Link
        to="/livraison"
        className="inline-block mt-4 text-xs text-accent font-semibold hover:underline"
      >
        Voir les détails de livraison →
      </Link>
    </div>
  </section>
);
