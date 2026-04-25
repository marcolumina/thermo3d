import { Users, Star, ShieldCheck, Truck } from 'lucide-react';

/**
 * Bandeau de réassurance "Déjà adopté par +1 000 clients"
 * Affiché sur la home pour booster la confiance avant les CTA finaux.
 */
const SocialProofBar = () => {
  return (
    <section className="bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10 border-y border-accent/20 py-5">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-center">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-accent/15 flex items-center justify-center">
              <Users className="w-4.5 h-4.5 text-accent" />
            </div>
            <div className="text-left">
              <p className="font-display font-bold text-sm text-foreground leading-tight">
                Déjà adopté par +1 000 clients
              </p>
              <p className="text-[11px] text-muted-foreground leading-tight">
                Rejoignez la communauté Thermo3D
              </p>
            </div>
          </div>

          <div className="hidden md:block w-px h-10 bg-border" />

          <div className="flex items-center gap-2">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>
            <span className="font-bold text-sm text-foreground">4,9/5</span>
            <span className="text-xs text-muted-foreground">sur +1 000 avis</span>
          </div>

          <div className="hidden md:block w-px h-10 bg-border" />

          <div className="hidden sm:flex items-center gap-2 text-xs text-muted-foreground">
            <Truck className="w-4 h-4 text-accent" />
            <span>Expédié sous 48h</span>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs text-muted-foreground">
            <ShieldCheck className="w-4 h-4 text-accent" />
            <span>Satisfait ou remboursé 15j</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofBar;
