import { Link } from "react-router-dom";
import { Truck, RefreshCw, ShieldCheck, Flag, Instagram, Facebook, Youtube } from 'lucide-react';

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.88-2.88 2.89 2.89 0 0 1 2.88-2.88c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.71a8.21 8.21 0 0 0 4.76 1.52V6.77a4.83 4.83 0 0 1-1-.08z" />
  </svg>
);

const SnapchatIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12.166 3c.796 0 3.495.223 4.769 3.073.426.953.322 2.559.24 3.867l-.015.25c-.012.199-.024.388-.03.554a.58.58 0 0 0 .327.554c.296.149.616.222.916.29.177.04.345.078.498.13.442.148.737.382.737.69 0 .575-.937.795-1.312.872-.063.013-.117.024-.159.035-.346.088-.473.2-.563.493a1.36 1.36 0 0 0-.032.32c.002.063.009.12.016.176.056.46.622 1.593 1.87 2.276.537.293 1.076.459 1.52.526.14.021.254.115.275.243.068.41-.497.859-.691.976-.279.17-.574.303-.756.37a1.667 1.667 0 0 0-.339.166c-.12.088-.164.2-.213.33l-.014.038c-.03.08-.062.167-.107.255a.711.711 0 0 1-.665.404 2.253 2.253 0 0 1-.393-.046 4.747 4.747 0 0 0-.988-.116c-.28 0-.564.03-.843.092a3.2 3.2 0 0 0-.791.35c-.57.345-1.024.78-1.86.78h-.047c-.836 0-1.293-.435-1.86-.78a3.2 3.2 0 0 0-.791-.35 3.858 3.858 0 0 0-.843-.092c-.37 0-.694.047-.988.116a2.253 2.253 0 0 1-.394.046.711.711 0 0 1-.664-.404 2.479 2.479 0 0 1-.107-.255l-.014-.038c-.05-.13-.093-.242-.213-.33a1.667 1.667 0 0 0-.34-.166c-.18-.067-.476-.2-.755-.37-.194-.117-.759-.567-.691-.976a.297.297 0 0 1 .275-.243c.444-.067.983-.233 1.52-.526 1.248-.683 1.814-1.816 1.87-2.276.007-.056.014-.113.016-.177a1.36 1.36 0 0 0-.032-.319c-.09-.293-.217-.405-.563-.493a2.94 2.94 0 0 1-.16-.035c-.374-.077-1.311-.297-1.311-.872 0-.308.295-.542.737-.69.153-.052.321-.09.498-.13.3-.068.62-.141.916-.29a.58.58 0 0 0 .327-.554 18.7 18.7 0 0 1-.03-.554l-.015-.25c-.082-1.308-.186-2.914.24-3.867C8.505 3.223 11.204 3 12 3h.166z" />
  </svg>
);

const SOCIAL_LINKS = [
  { icon: Instagram, href: 'https://www.instagram.com/thermo.3d', label: 'Instagram' },
  { icon: TikTokIcon, href: 'https://www.tiktok.com/@thermo3d', label: 'TikTok', isCustom: true },
  { icon: SnapchatIcon, href: 'https://www.snapchat.com/@thermo3d', label: 'Snapchat', isCustom: true },
];

const Footer = () => {
  return (
    <footer className="bg-foreground text-background/80">
      <div className="border-b border-background/10">
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: Truck, label: 'Livraison offerte dès 50€' },
              { icon: ShieldCheck, label: 'Paiement 100% sécurisé' },
              { icon: RefreshCw, label: 'Satisfait ou remboursé 15j' },
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
          <div className="md:col-span-1">
            <span className="text-2xl font-extrabold tracking-tight">THERMO<span className="text-accent">3D</span></span>
            <p className="text-sm text-background/40 leading-relaxed max-w-sm mt-4">
              Accessoires Thermomix innovants, conçus et imprimés en 3D en France. Compatibles TM6 et TM7.
            </p>
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
              <li><Link to="/accessoires-thermomix" className="hover:text-accent transition-colors">Accessoires Thermomix</Link></li>
              <li><Link to="/rangement-thermomix" className="hover:text-accent transition-colors">Rangement Thermomix</Link></li>
              <li><Link to="/accessoires-tm6" className="hover:text-accent transition-colors">Accessoires TM6</Link></li>
              <li><Link to="/accessoires-tm7" className="hover:text-accent transition-colors">Accessoires TM7</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm mb-4 uppercase tracking-wider text-background/60">Informations</h4>
            <ul className="space-y-2.5 text-sm text-background/40">
              <li><Link to="/a-propos" className="hover:text-accent transition-colors">À propos</Link></li>
              <li><Link to="/blog" className="hover:text-accent transition-colors">Blog</Link></li>
              <li><Link to="/faq" className="hover:text-accent transition-colors">FAQ</Link></li>
              <li><Link to="/livraison" className="hover:text-accent transition-colors">Livraison & suivi</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>

            <h4 className="font-display font-semibold text-sm mb-4 mt-6 uppercase tracking-wider text-background/60">Mon compte</h4>
            <ul className="space-y-2.5 text-sm text-background/40">
              <li><Link to="/auth" className="hover:text-accent transition-colors">Connexion / Inscription</Link></li>
              <li><Link to="/account" className="hover:text-accent transition-colors">Mon espace</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm mb-4 uppercase tracking-wider text-background/60">Légal</h4>
            <ul className="space-y-2.5 text-sm text-background/40">
              <li><Link to="/mentions-legales" className="hover:text-accent transition-colors">Mentions légales</Link></li>
              <li><Link to="/cgv" className="hover:text-accent transition-colors">CGV</Link></li>
              <li><Link to="/politique-de-retour" className="hover:text-accent transition-colors">Politique de retour 15j</Link></li>
              <li><Link to="/politique-confidentialite" className="hover:text-accent transition-colors">Confidentialité (RGPD)</Link></li>
              <li>
                <button
                  onClick={() => { try { localStorage.removeItem('thermo3d_cookie_consent'); window.location.reload(); } catch {} }}
                  className="hover:text-accent transition-colors text-left"
                >
                  Gérer mes cookies
                </button>
              </li>
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
