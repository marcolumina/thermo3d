import { Truck, RefreshCw, Star } from 'lucide-react';

const TopBanner = () => {
  return (
    <>
      {/* Trust bar */}
      <div className="bg-card border-b border-border/60 py-2">
        <div className="container mx-auto px-4 flex items-center justify-between text-[11px] text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Truck className="w-3.5 h-3.5 text-accent" />
            <span>Livraison offerte dès 50€</span>
          </div>
          <div className="hidden sm:flex items-center gap-1.5">
            <RefreshCw className="w-3.5 h-3.5 text-accent" />
            <span>Retour gratuit sous 15 jours</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Star className="w-3.5 h-3.5 fill-accent text-accent" />
            <span className="font-semibold text-foreground">4,9/5</span>
            <span>sur +1000 avis</span>
          </div>
        </div>
      </div>
      {/* Scrolling promo */}
      <div className="bg-accent text-accent-foreground overflow-hidden py-1.5">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-8 text-[11px] font-medium">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="inline-flex items-center gap-3">
              <span>🎁 -20% sur votre première commande avec le code BIENVENUE20</span>
              <span className="opacity-50">•</span>
              <span>🇫🇷 Fabriqué en France — Impression 3D de précision</span>
              <span className="opacity-50">•</span>
              <span>🚚 Expédié sous 48h</span>
              <span className="opacity-50">•</span>
            </span>
          ))}
        </div>
        <style>{`
          @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
          .animate-marquee { animation: marquee 30s linear infinite; }
        `}</style>
      </div>
    </>
  );
};

export default TopBanner;
