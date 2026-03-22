import { Link, useLocation } from 'react-router-dom';
import { CartDrawer } from '@/components/CartDrawer';
import logoSimple from '@/assets/logo-thermo3d-simple.png';
import logoIcon from '@/assets/logo-thermo3d-icon.png';

const Header = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-2xl border-b border-border/60">
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        <Link to="/" className="group shrink-0">
          <img src={logoSimple} alt="Thermo3D" className="hidden sm:block h-[50px] w-auto" />
          <img src={logoIcon} alt="Thermo3D" className="block sm:hidden h-[36px] w-auto" />
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {[
            { to: '/', label: 'Accueil' },
            { to: '/catalogue', label: 'Boutique' },
            { to: '/catalogue?filter=pack', label: 'Packs' },
            { to: '/#avis', label: 'Avis' },
          ].map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-[13px] font-medium transition-colors duration-200 ${
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
