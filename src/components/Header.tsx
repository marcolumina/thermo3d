import { Link, useLocation } from 'react-router-dom';
import { CartDrawer } from '@/components/CartDrawer';
import logo from '@/assets/thermo3d-logo-premium.png';
const Header = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={logo} alt="Thermo3D logo" className="h-10 w-auto object-contain" />
          <div className="flex flex-col leading-none">
            <span className="font-extrabold text-lg tracking-tight text-foreground">
              Thermo<span className="text-accent">3D</span>
            </span>
            <span className="text-[9px] font-medium tracking-[0.2em] uppercase text-muted-foreground">
              Accessoires Thermomix
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {[
            { to: '/', label: 'Accueil' },
            { to: '/catalogue', label: 'Produits' },
            { to: '/a-propos', label: 'À propos' },
            { to: '/faq', label: 'FAQ' },
            { to: '/contact', label: 'Contact' },
          ].map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors ${
                isActive(link.to) ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <CartDrawer />
      </div>
    </header>
  );
};

export default Header;
