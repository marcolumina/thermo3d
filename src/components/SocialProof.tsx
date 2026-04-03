import { Star, ShieldCheck, Truck, Flag, RefreshCw, Award } from 'lucide-react';

const SocialProof = () => {
  return (
    <section className="border-b border-border/60 bg-card">
      <div className="container mx-auto px-6 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
          <div className="flex items-center gap-3">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-sm font-semibold text-foreground">4.9/5</span>
            <span className="text-xs text-muted-foreground">+1000 clients</span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-border" />
          <div className="flex items-center gap-2">
            <Truck className="w-4 h-4 text-accent" />
            <span className="text-xs text-muted-foreground font-medium">Livraison offerte dès 50€</span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-border" />
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-accent" />
            <span className="text-xs text-muted-foreground font-medium">Paiement sécurisé</span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-border" />
          <div className="flex items-center gap-2">
            <span className="text-lg">🇫🇷</span>
            <span className="text-xs text-muted-foreground font-medium">Fabriqué en France</span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-border" />
          <div className="flex items-center gap-2">
            <RefreshCw className="w-4 h-4 text-accent" />
            <span className="text-xs text-muted-foreground font-medium">Satisfait ou remboursé 30j</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
