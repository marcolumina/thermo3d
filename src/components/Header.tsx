import { Link, useLocation } from 'react-router-dom';
import { CartDrawer } from '@/components/CartDrawer';
import logo from '@/assets/thermo3d-logo.png';

const Header = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-card/90 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <img src={logo} alt="Thermo3D logo" className="w-9 h-9 object-contain" />
          <span className="font-display font-bold text-lg tracking-tight text-foreground">
            Thermo<span className="text-primary">3D</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {[
            { to: '/', label: 'Accueil' },
            { to: '/catalogue', label: 'Catalogue' },
            { to: '/contact', label: 'Contact' },
          ].map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors ${
                isActive(link.to) ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
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
