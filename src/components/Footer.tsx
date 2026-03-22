import { Link } from "react-router-dom";
import logoSimple from '@/assets/logo-thermo3d-simple.png';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <img src={logoSimple} alt="Thermo3D" className="h-[112px] w-auto brightness-0 invert" />
            <p className="text-sm text-background/40 leading-relaxed max-w-sm mt-5">
              Accessoires Thermomix innovants, conçus et imprimés en 3D en France. Compatibles TM5, TM6 et TM7.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm mb-5 uppercase tracking-wider text-background/70">Boutique</h4>
            <ul className="space-y-3 text-sm text-background/40">
              <li><Link to="/catalogue" className="hover:text-accent transition-colors duration-200">Produits</Link></li>
              <li><Link to="/a-propos" className="hover:text-accent transition-colors duration-200">À propos</Link></li>
              <li><Link to="/faq" className="hover:text-accent transition-colors duration-200">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors duration-200">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm mb-5 uppercase tracking-wider text-background/70">Légal</h4>
            <ul className="space-y-3 text-sm text-background/40">
              <li><Link to="/mentions-legales" className="hover:text-accent transition-colors duration-200">Mentions légales</Link></li>
              <li><Link to="/cgv" className="hover:text-accent transition-colors duration-200">CGV</Link></li>
              <li><Link to="/politique-confidentialite" className="hover:text-accent transition-colors duration-200">Confidentialité</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-7 flex flex-col sm:flex-row items-center justify-between text-xs text-background/30">
          <span>© 2026 Thermo3D. Tous droits réservés.</span>
          <span className="mt-2 sm:mt-0">Fabriqué avec ❤️ en Corse, France</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
