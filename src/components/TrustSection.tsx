import { Flag, ShieldCheck, Lock, Cpu } from 'lucide-react';

/**
 * Section "Ils nous font confiance" — crédibilité & paiement sécurisé.
 * Badges paiement (Visa, Mastercard, PayPal, Apple Pay, CB), fabriqué en France,
 * mention claire compatibilité Thermomix (non officiel).
 */
const TrustSection = () => {
  return (
    <section className="py-14 md:py-20 bg-muted/30 border-y border-border/50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-[11px] uppercase tracking-[0.2em] text-accent font-bold mb-2">
            Ils nous font confiance
          </p>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
            Une marque française de confiance
          </h2>
          <p className="text-sm text-muted-foreground mt-2 max-w-xl mx-auto">
            Plus de <strong className="text-foreground">1 000 clients satisfaits</strong> nous font confiance pour équiper leur Thermomix au quotidien.
          </p>
        </div>

        {/* Trust badges grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-4xl mx-auto">
          {/* Made in France */}
          <div className="bg-card border border-border rounded-2xl p-5 text-center flex flex-col items-center gap-2 hover:border-accent/40 transition-colors">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/10 via-white/10 to-red-500/10 flex items-center justify-center">
              <Flag className="w-6 h-6 text-foreground" />
            </div>
            <p className="font-display font-bold text-sm text-foreground">Fabriqué en France 🇫🇷</p>
            <p className="text-[11px] text-muted-foreground leading-tight">Imprimé en 3D dans nos ateliers en Corse</p>
          </div>

          {/* Paiement sécurisé */}
          <div className="bg-card border border-border rounded-2xl p-5 text-center flex flex-col items-center gap-2 hover:border-accent/40 transition-colors">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
              <Lock className="w-6 h-6 text-accent" />
            </div>
            <p className="font-display font-bold text-sm text-foreground">Paiement sécurisé</p>
            <p className="text-[11px] text-muted-foreground leading-tight">Chiffrement SSL · 3D Secure</p>
          </div>

          {/* Garantie */}
          <div className="bg-card border border-border rounded-2xl p-5 text-center flex flex-col items-center gap-2 hover:border-accent/40 transition-colors">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-accent" />
            </div>
            <p className="font-display font-bold text-sm text-foreground">Satisfait ou remboursé</p>
            <p className="text-[11px] text-muted-foreground leading-tight">15 jours pour changer d'avis</p>
          </div>

          {/* Compatibilité */}
          <div className="bg-card border border-border rounded-2xl p-5 text-center flex flex-col items-center gap-2 hover:border-accent/40 transition-colors">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
              <Cpu className="w-6 h-6 text-accent" />
            </div>
            <p className="font-display font-bold text-sm text-foreground">Compatible TM5 · TM6 · TM7</p>
            <p className="text-[11px] text-muted-foreground leading-tight">Conçus sur-mesure</p>
          </div>
        </div>

        {/* Payment methods */}
        <div className="max-w-3xl mx-auto">
          <p className="text-center text-[11px] uppercase tracking-wider text-muted-foreground font-semibold mb-4">
            Moyens de paiement acceptés
          </p>
          <div className="flex items-center justify-center flex-wrap gap-3">
            {/* Visa */}
            <div className="bg-white border border-border rounded-lg px-4 h-10 flex items-center" aria-label="Visa">
              <svg viewBox="0 0 48 16" className="h-5" xmlns="http://www.w3.org/2000/svg">
                <text x="0" y="13" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="14" fontStyle="italic" fill="#1A1F71">VISA</text>
              </svg>
            </div>
            {/* Mastercard */}
            <div className="bg-white border border-border rounded-lg px-4 h-10 flex items-center gap-1" aria-label="Mastercard">
              <span className="block w-5 h-5 rounded-full bg-[#EB001B]" />
              <span className="block w-5 h-5 rounded-full bg-[#F79E1B] -ml-2 mix-blend-multiply" />
            </div>
            {/* CB */}
            <div className="bg-white border border-border rounded-lg px-4 h-10 flex items-center" aria-label="Carte Bancaire">
              <span className="font-bold text-xs text-[#1A4F8B] tracking-wider">CB</span>
            </div>
            {/* American Express */}
            <div className="bg-[#006FCF] border border-border rounded-lg px-3 h-10 flex items-center" aria-label="American Express">
              <span className="font-extrabold text-[10px] text-white leading-none text-center">AMERICAN<br />EXPRESS</span>
            </div>
            {/* PayPal */}
            <div className="bg-white border border-border rounded-lg px-4 h-10 flex items-center" aria-label="PayPal">
              <span className="font-extrabold text-sm italic">
                <span className="text-[#003087]">Pay</span><span className="text-[#009CDE]">Pal</span>
              </span>
            </div>
            {/* Apple Pay */}
            <div className="bg-black border border-border rounded-lg px-3 h-10 flex items-center gap-1" aria-label="Apple Pay">
              <svg viewBox="0 0 24 24" className="w-4 h-4 text-white" fill="currentColor">
                <path d="M17.05 12.04c-.03-2.74 2.24-4.06 2.34-4.13-1.27-1.86-3.26-2.12-3.96-2.15-1.69-.17-3.29 1-4.15 1-.87 0-2.18-.97-3.59-.95-1.85.03-3.55 1.07-4.5 2.72-1.92 3.33-.49 8.27 1.38 10.97.92 1.32 2.01 2.81 3.43 2.76 1.38-.06 1.9-.89 3.57-.89 1.66 0 2.13.89 3.59.86 1.48-.02 2.42-1.34 3.32-2.67 1.05-1.53 1.48-3.01 1.5-3.09-.03-.01-2.88-1.11-2.91-4.4M14.3 4.27c.74-.91 1.25-2.16 1.11-3.42-1.07.05-2.39.73-3.16 1.62-.69.79-1.3 2.08-1.13 3.31 1.21.09 2.43-.61 3.18-1.51"/>
              </svg>
              <span className="text-xs font-medium text-white">Pay</span>
            </div>
            {/* Google Pay */}
            <div className="bg-white border border-border rounded-lg px-3 h-10 flex items-center gap-1" aria-label="Google Pay">
              <span className="text-xs font-medium" style={{ color: '#5F6368' }}>G</span>
              <span className="text-xs font-medium" style={{ color: '#5F6368' }}>Pay</span>
            </div>
          </div>
        </div>

        {/* Disclaimer compatibilité (légal & rassurant) */}
        <p className="text-[11px] text-muted-foreground/80 text-center max-w-2xl mx-auto mt-8 leading-relaxed">
          Thermo3D est une marque indépendante. Nos accessoires sont <strong>compatibles</strong> avec les robots Thermomix® TM5, TM6 et TM7 mais ne sont <strong>pas des produits officiels Vorwerk®</strong>. Thermomix® et Vorwerk® sont des marques déposées de leurs propriétaires respectifs.
        </p>
      </div>
    </section>
  );
};

export default TrustSection;
