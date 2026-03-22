import { Link } from "react-router-dom";
import logo from '@/assets/thermo3d-logo.png';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <img src={logo} alt="Thermo3D logo" className="w-9 h-9 object-contain" />
              <span className="font-display font-bold text-lg text-foreground">
                Thermo<span className="text-primary">3D</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Accessoires Thermomix innovants, conçus et imprimés en 3D en France avec des matériaux de qualité alimentaire. Compatibles TM5, TM6 et TM7.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm mb-4 uppercase tracking-wider text-foreground">Boutique</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><Link to="/catalogue" className="hover:text-primary transition-colors">Catalogue</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm mb-4 uppercase tracking-wider text-foreground">Légal</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><Link to="/mentions-legales" className="hover:text-primary transition-colors">Mentions légales</Link></li>
              <li><Link to="/cgv" className="hover:text-primary transition-colors">CGV</Link></li>
              <li><Link to="/politique-confidentialite" className="hover:text-primary transition-colors">Confidentialité</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground">
          <span>© 2026 Thermo3D. Tous droits réservés.</span>
          <span className="mt-2 sm:mt-0">Fabriqué avec 💚 en Corse, France</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
