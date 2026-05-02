import { Link } from 'react-router-dom';
import {
  ShieldCheck, Sparkles, Flag, AlertTriangle,
  Droplets, Hand, ChevronRight, PlayCircle, Wrench, Eye, Heart, Info, CheckCircle, Gift, Type
} from 'lucide-react';
import type { ProductNarrative } from './productNarratives';

interface CTAProps {
  onAddToCart: () => void;
  price: string;
}

interface SectionProps extends CTAProps {
  narrative: ProductNarrative;
}

/* Render texte avec balises <highlight> en accent */
function renderTitle(text: string) {
  const parts = text.split(/(<highlight>.*?<\/highlight>)/g);
  return parts.map((p, i) => {
    const m = p.match(/^<highlight>(.*)<\/highlight>$/);
    if (m) return <span key={i} className="text-accent">{m[1]}</span>;
    return <span key={i}>{p}</span>;
  });
}

/* ───────── HERO ───────── */
export const ProductNarrativeHero = ({ narrative, onAddToCart }: SectionProps) => {
  const icons = [ShieldCheck, Hand, Sparkles, Flag];
  return (
    <section className="bg-gradient-to-b from-secondary/40 to-background py-14 md:py-20 border-t border-border/30">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="space-y-6">
            <p className="text-accent font-semibold text-[11px] uppercase tracking-[0.2em]">
              {narrative.eyebrow}
            </p>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl leading-[1.1] text-foreground">
              {renderTitle(narrative.heroTitle)}
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              {narrative.heroSubtitle}
            </p>
            {narrative.infoBanner && (
              <div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-accent/10 border border-accent/20">
                <Info className="w-4 h-4 text-accent flex-shrink-0" />
                <p className="text-xs md:text-sm font-semibold text-foreground">
                  {narrative.infoBanner}
                </p>
              </div>
            )}

            <ul className="space-y-3 pt-2">
              {narrative.heroBullets.map((t, i) => {
                const Icon = icons[i % icons.length];
                return (
                  <li key={t} className="flex items-start gap-3 text-sm md:text-base text-foreground">
                    <span className="w-7 h-7 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-3.5 h-3.5 text-accent" />
                    </span>
                    <span>{t}</span>
                  </li>
                );
              })}
            </ul>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onAddToCart}
                className="btn-cart inline-flex items-center gap-2 px-7 py-4 rounded-full font-bold text-base"
              >
                {narrative.ctaLabel} <ChevronRight className="w-4 h-4" />
              </button>
              <span className="text-xs text-muted-foreground">
                ✓ Expédié sous 48h · ✓ Satisfait ou remboursé
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-secondary/30 shadow-xl">
              <img
                src={narrative.heroImage}
                alt={`${narrative.eyebrow} — visuel produit`}
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
                <p className="text-xs font-bold text-foreground">+1 000 Thermomix équipés</p>
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
export const ProductNarrativeProbleme = ({ narrative }: { narrative: ProductNarrative }) => (
  <section className="py-14 md:py-20 bg-background">
    <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <div className="order-2 lg:order-1">
          <div className="aspect-square rounded-3xl overflow-hidden bg-secondary/30 shadow-xl">
            <img
              src={narrative.avantImage}
              alt="Sans accessoire Thermo3D — situation à éviter"
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
            {narrative.problemTitle}
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            {narrative.problemDesc}
          </p>

          <ul className="space-y-3">
            {narrative.problemPoints.map((p) => (
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

/* ───────── SOLUTION ───────── */
export const ProductNarrativeSolution = ({ narrative }: { narrative: ProductNarrative }) => {
  const icons = [Wrench, ShieldCheck, Hand];
  return (
    <section className="py-14 md:py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        <div className="text-center mb-12">
          <p className="text-accent font-semibold text-[11px] uppercase tracking-[0.2em] mb-2">La solution</p>
          <h2 className="font-display font-extrabold text-2xl md:text-4xl text-foreground leading-tight">
            {narrative.solutionTitle}
          </h2>
          <p className="mt-3 text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            {narrative.solutionDesc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {narrative.solutionSteps.map((s, i) => {
            const Icon = icons[i % icons.length];
            const num = String(i + 1).padStart(2, '0');
            return (
              <div key={s.title} className="bg-background rounded-2xl border border-border/50 p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <span className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-accent" />
                  </span>
                  <span className="text-3xl font-extrabold text-accent/20 font-display">{num}</span>
                </div>
                <h3 className="font-display font-bold text-base text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ───────── AVANT / APRÈS ───────── */
export const ProductNarrativeAvantApres = ({ narrative }: { narrative: ProductNarrative }) => (
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
          <img src={narrative.avantImage} alt="Sans Thermo3D" className="w-full aspect-square object-cover" width={1024} height={1024} loading="lazy" />
          <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-destructive text-destructive-foreground text-[10px] font-bold uppercase tracking-wider">
            {narrative.avantLabel}
          </div>
          <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-black/70 to-transparent">
            <p className="text-white text-sm font-medium">{narrative.avantCaption}</p>
          </div>
        </div>

        <div className="relative rounded-3xl overflow-hidden bg-secondary/40 shadow-lg ring-2 ring-accent/30">
          <img src={narrative.apresImage} alt="Avec Thermo3D" className="w-full aspect-square object-cover" width={1024} height={1024} loading="lazy" />
          <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-accent text-accent-foreground text-[10px] font-bold uppercase tracking-wider">
            {narrative.apresLabel}
          </div>
          <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-black/70 to-transparent">
            <p className="text-white text-sm font-medium">{narrative.apresCaption}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ───────── VIDÉO (placeholder) ───────── */
export const ProductNarrativeVideo = ({ narrative }: { narrative: ProductNarrative }) => (
  <section className="py-14 md:py-20 bg-secondary/30">
    <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
      <div className="text-center mb-8">
        <p className="text-accent font-semibold text-[11px] uppercase tracking-[0.2em] mb-2">En vidéo</p>
        <h2 className="font-display font-extrabold text-2xl md:text-4xl text-foreground">
          Voyez-le en action
        </h2>
        <p className="mt-3 text-sm text-muted-foreground max-w-xl mx-auto">
          Mise en place, utilisation, entretien : tout en moins d'une minute.
        </p>
      </div>

      <div className="relative aspect-video rounded-3xl overflow-hidden bg-foreground/95 shadow-xl group cursor-pointer">
        <img src={narrative.heroImage} alt="Aperçu vidéo" className="w-full h-full object-cover opacity-50 group-hover:opacity-60 transition-opacity" width={1536} height={1024} loading="lazy" />
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

/* ───────── BÉNÉFICES ───────── */
export const ProductNarrativeBenefices = ({ narrative }: { narrative: ProductNarrative }) => {
  const icons = [ShieldCheck, Sparkles, Heart, Hand];
  return (
    <section className="py-14 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="text-center mb-12">
          <p className="text-accent font-semibold text-[11px] uppercase tracking-[0.2em] mb-2">Pourquoi l'adopter</p>
          <h2 className="font-display font-extrabold text-2xl md:text-4xl text-foreground leading-tight">
            {narrative.beneficesTitle}
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {narrative.benefices.map((b, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={b.title} className="bg-secondary/30 border border-border/40 rounded-2xl p-5 hover:border-accent/40 hover:shadow-lg transition-all">
                <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-display font-bold text-sm md:text-base text-foreground mb-1.5">{b.title}</h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ───────── DIFFÉRENCIATION (générique pour toute la marque) ───────── */
export const ProductNarrativeDifferenciation = () => (
  <section className="py-14 md:py-20 bg-foreground text-background">
    <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
      <div className="text-center mb-12">
        <p className="text-accent font-semibold text-[11px] uppercase tracking-[0.2em] mb-2">La différence Thermo3D</p>
        <h2 className="font-display font-extrabold text-2xl md:text-4xl leading-tight">
          Ce n'est pas un produit générique
        </h2>
        <p className="mt-3 text-sm md:text-base text-background/60 max-w-xl mx-auto">
          Chaque pièce est imprimée à la commande, dans notre atelier, pour votre Thermomix.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {[
          { icon: Flag, title: 'Fabrication française', desc: "Imprimé dans notre atelier en Corse. Pas de stock entreposé à l'autre bout du monde." },
          { icon: Eye, title: 'Ajustement précis', desc: 'Modélisé spécifiquement pour chaque modèle Thermomix. Découpes au dixième de mm.' },
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

/* ───────── URGENCE + CTA ───────── */
export const ProductNarrativeUrgenceCTA = ({ narrative, onAddToCart, price }: SectionProps) => (
  <section className="py-14 md:py-20 bg-accent/5">
    <div className="container mx-auto px-4 sm:px-6 max-w-3xl text-center">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/15 text-accent text-xs font-semibold mb-5">
        <Droplets className="w-3.5 h-3.5" />
        Production artisanale en série limitée
      </div>
      <h2 className="font-display font-extrabold text-2xl md:text-4xl text-foreground leading-tight">
        {narrative.urgenceTitle}
      </h2>
      <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
        {narrative.urgenceDesc}
      </p>

      <button
        onClick={onAddToCart}
        className="btn-cart mt-8 inline-flex items-center gap-3 px-10 py-5 rounded-full font-bold text-base"
      >
        {narrative.ctaLabel} — {price} €
      </button>

      <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mt-6 text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-accent" /> Satisfait ou remboursé 14 j</span>
        <span className="inline-flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-accent" /> Paiement sécurisé</span>
        <span className="inline-flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-accent" /> Livraison rapide</span>
      </div>

      <Link to="/livraison" className="inline-block mt-4 text-xs text-accent font-semibold hover:underline">
        Voir les détails de livraison →
      </Link>
    </div>
  </section>
);

/* ───────── GALERIE PERSONNALISATION ───────── */
export const ProductNarrativePersonalisation = ({ narrative, onScrollToOptions }: { narrative: ProductNarrative; onScrollToOptions?: () => void }) => {
  if (!narrative.personalisationGallery) return null;
  const { title, subtitle, examples } = narrative.personalisationGallery;
  return (
    <section className="py-14 md:py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-accent font-semibold text-[11px] uppercase tracking-[0.2em] mb-2 inline-flex items-center gap-2">
            <Type className="w-3.5 h-3.5" /> Personnalisation
          </p>
          <h2 className="font-display font-extrabold text-2xl md:text-4xl text-foreground leading-tight">
            {title}
          </h2>
          <p className="mt-3 text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {examples.map((ex) => (
            <figure key={ex.label} className="group rounded-3xl overflow-hidden bg-background shadow-md hover:shadow-xl transition-shadow border border-border/40">
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={ex.image}
                  alt={ex.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  width={1536}
                  height={1024}
                  loading="lazy"
                />
              </div>
              <figcaption className="px-5 py-4 text-center">
                <p className="font-display font-bold text-base text-foreground">{ex.label}</p>
                <p className="text-[11px] uppercase tracking-wider text-muted-foreground mt-0.5">Cache personnalisé Thermo3D</p>
              </figcaption>
            </figure>
          ))}
        </div>

        {onScrollToOptions && (
          <div className="text-center mt-10">
            <button
              onClick={onScrollToOptions}
              className="btn-cart inline-flex items-center gap-2 px-7 py-4 rounded-full font-bold text-base"
            >
              Écrire mon texte <ChevronRight className="w-4 h-4" />
            </button>
            <p className="mt-3 text-xs text-muted-foreground">Jusqu'à 20 caractères — gravé en relief</p>
          </div>
        )}
      </div>
    </section>
  );
};

/* ───────── ÉMOTION / PROJECTION ───────── */
export const ProductNarrativeEmotion = ({ narrative }: { narrative: ProductNarrative }) => {
  if (!narrative.emotion) return null;
  const { title, desc, image } = narrative.emotion;
  return (
    <section className="py-14 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {image && (
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-secondary/30 shadow-2xl">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover"
                  width={1024}
                  height={1280}
                  loading="lazy"
                />
              </div>
              <div className="absolute -top-4 -right-4 hidden md:flex w-16 h-16 rounded-full bg-accent items-center justify-center shadow-xl">
                <Sparkles className="w-7 h-7 text-accent-foreground" />
              </div>
            </div>
          )}
          <div className="space-y-6">
            <p className="text-accent font-semibold text-[11px] uppercase tracking-[0.2em]">
              Votre touche personnelle
            </p>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl leading-[1.1] text-foreground">
              {title}
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
              {desc}
            </p>
            <div className="flex items-center gap-3 pt-2 text-sm text-foreground">
              <Heart className="w-5 h-5 text-accent fill-accent" />
              <span className="italic">"Mon Thermomix n'est plus comme les autres — c'est le mien."</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ───────── IDÉE CADEAU ───────── */
export const ProductNarrativeCadeau = ({ narrative, onAddToCart }: { narrative: ProductNarrative; onAddToCart?: () => void }) => {
  if (!narrative.cadeau) return null;
  const { title, desc, occasions } = narrative.cadeau;
  return (
    <section className="py-14 md:py-20 bg-gradient-to-br from-accent/10 via-secondary/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/15 text-accent text-xs font-bold uppercase tracking-wider mb-4">
            <Gift className="w-4 h-4" /> Idée cadeau
          </div>
          <h2 className="font-display font-extrabold text-2xl md:text-4xl text-foreground leading-tight">
            {title}
          </h2>
          <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {desc}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10">
          {occasions.map((o) => (
            <div
              key={o.label}
              className="flex items-center gap-2 px-5 py-3 rounded-full bg-background border border-border/60 shadow-sm hover:shadow-md hover:border-accent/40 transition-all"
            >
              <span className="text-xl" aria-hidden>{o.emoji}</span>
              <span className="font-semibold text-sm text-foreground">{o.label}</span>
            </div>
          ))}
        </div>

        {onAddToCart && (
          <div className="text-center">
            <button
              onClick={onAddToCart}
              className="btn-cart inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-base"
            >
              Offrir un cache personnalisé <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

/* ───────── Bundle d'export pratique ───────── */
export const ProductNarrativeSections = (props: SectionProps) => (
  <>
    <ProductNarrativeHero {...props} />
    <ProductNarrativeProbleme narrative={props.narrative} />
    <ProductNarrativeSolution narrative={props.narrative} />
    <ProductNarrativeAvantApres narrative={props.narrative} />
    <ProductNarrativeBenefices narrative={props.narrative} />
    <ProductNarrativeDifferenciation />
  </>
);
