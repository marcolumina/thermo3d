import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-hero text-hero-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">T</span>
              </div>
              <span className="font-display font-bold text-lg">Thermo3D</span>
            </div>
            <p className="text-sm opacity-60 leading-relaxed max-w-xs">
              Accessoires Thermomix innovants, conçus et imprimés en 3D en France. Qualité supérieure, designs uniques, compatibles TM5, TM6 et TM7.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm mb-4 uppercase tracking-wider">Informations</h4>
            <ul className="space-y-2 text-sm opacity-60">
              <li>Impression 3D en PLA, PETG</li>
              <li>Compatible alimentaire</li>
              <li>Fabriqué en France 🇫🇷</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm mb-4 uppercase tracking-wider">Légal</h4>
            <ul className="space-y-2 text-sm opacity-60">
              <li><Link to="/mentions-legales" className="hover:opacity-100 transition-opacity">Mentions légales</Link></li>
              <li><Link to="/cgv" className="hover:opacity-100 transition-opacity">Conditions générales de vente</Link></li>
              <li><Link to="/politique-confidentialite" className="hover:opacity-100 transition-opacity">Politique de confidentialité</Link></li>
              <li><Link to="/contact" className="hover:opacity-100 transition-opacity">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-foreground/10 mt-10 pt-6 text-center text-xs opacity-40">
          © 2026 Thermo3D. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
