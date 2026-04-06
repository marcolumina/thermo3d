import { Link } from "react-router-dom";
import { Truck, RefreshCw, ShieldCheck, Flag, Instagram, Facebook, Youtube } from 'lucide-react';

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.88-2.88 2.89 2.89 0 0 1 2.88-2.88c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.71a8.21 8.21 0 0 0 4.76 1.52V6.77a4.83 4.83 0 0 1-1-.08z" />
  </svg>
);

const SOCIAL_LINKS = [
  { icon: Instagram, href: 'https://instagram.com/thermo3d', label: 'Instagram' },
  { icon: Facebook, href: 'https://facebook.com/thermo3d', label: 'Facebook' },
  { icon: TikTokIcon, href: 'https://tiktok.com/@thermo3d', label: 'TikTok', isCustom: true },
  { icon: Youtube, href: 'https://youtube.com/@thermo3d', label: 'YouTube' },
];

const Footer = () => {
  return (
    <footer className="bg-foreground text-background/80">
      {/* Trust icons row */}
      <div className="border-b border-background/10">
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: Truck, label: 'Livraison offerte dès 50€' },
              { icon: ShieldCheck, label: 'Paiement 100% sécurisé' },
              { icon: RefreshCw, label: 'Satisfait ou remboursé 30j' },
              { icon: Flag, label: 'Fabriqué en France 🇫🇷' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-2">
                <Icon className="w-5 h-5 text-accent" />
                <span className="text-xs font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <span className="text-2xl font-extrabold tracking-tight">THERMO<span className="text-accent">3D</span></span>
            <p className="text-sm text-background/40 leading-relaxed max-w-sm mt-4">
              Accessoires Thermomix innovants, conçus et imprimés en 3D en France. Compatibles TM5, TM6 et TM7.
            </p>

            {/* Social links */}
            <div className="mt-6">
              <h4 className="font-display font-semibold text-sm mb-3 uppercase tracking-wider text-background/60">Suivez-nous</h4>
              <div className="flex items-center gap-4">
                {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="p-2 rounded-full bg-background/10 hover:bg-accent hover:text-foreground transition-all duration-200"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm mb-4 uppercase tracking-wider text-background/60">Boutique</h4>
            <ul className="space-y-2.5 text-sm text-background/40">
              <li><Link to="/catalogue" className="hover:text-accent transition-colors">Tous les produits</Link></li>
              <li><Link to="/catalogue?filter=pack" className="hover:text-accent transition-colors">Packs</Link></li>
              <li><Link to="/a-propos" className="hover:text-accent transition-colors">À propos</Link></li>
              <li><Link to="/faq" className="hover:text-accent transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm mb-4 uppercase tracking-wider text-background/60">Mon compte</h4>
            <ul className="space-y-2.5 text-sm text-background/40">
              <li><Link to="/auth" className="hover:text-accent transition-colors">Connexion / Inscription</Link></li>
              <li><Link to="/account" className="hover:text-accent transition-colors">Mon espace</Link></li>
            </ul>

            <h4 className="font-display font-semibold text-sm mb-4 mt-6 uppercase tracking-wider text-background/60">Légal</h4>
            <ul className="space-y-2.5 text-sm text-background/40">
              <li><Link to="/mentions-legales" className="hover:text-accent transition-colors">Mentions légales</Link></li>
              <li><Link to="/cgv" className="hover:text-accent transition-colors">CGV</Link></li>
              <li><Link to="/politique-confidentialite" className="hover:text-accent transition-colors">Confidentialité</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-background/30">
          <span>© 2026 Thermo3D. Tous droits réservés.</span>
          <span className="mt-2 sm:mt-0">Fabriqué avec ❤️ en Corse, France</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
