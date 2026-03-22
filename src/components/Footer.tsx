import { Link } from "react-router-dom";
import logo from '@/assets/thermo3d-logo-premium.png';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center">
              <img src={logo} alt="Thermo3D logo" className="h-10 w-auto object-contain brightness-0 invert" />
            </div>
            <p className="text-sm text-primary-foreground/50 leading-relaxed max-w-sm mt-4">
              Accessoires Thermomix innovants, conçus et imprimés en 3D en France. Compatibles TM5, TM6 et TM7.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-4 uppercase tracking-wider text-primary-foreground/80">Boutique</h4>
            <ul className="space-y-2.5 text-sm text-primary-foreground/50">
              <li><Link to="/catalogue" className="hover:text-accent transition-colors">Produits</Link></li>
              <li><Link to="/a-propos" className="hover:text-accent transition-colors">À propos</Link></li>
              <li><Link to="/faq" className="hover:text-accent transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-4 uppercase tracking-wider text-primary-foreground/80">Légal</h4>
            <ul className="space-y-2.5 text-sm text-primary-foreground/50">
              <li><Link to="/mentions-legales" className="hover:text-accent transition-colors">Mentions légales</Link></li>
              <li><Link to="/cgv" className="hover:text-accent transition-colors">CGV</Link></li>
              <li><Link to="/politique-confidentialite" className="hover:text-accent transition-colors">Confidentialité</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-primary-foreground/40">
          <span>© 2026 Thermo3D. Tous droits réservés.</span>
          <span className="mt-2 sm:mt-0">Fabriqué avec ❤️ en Corse, France</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
