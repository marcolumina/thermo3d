import { Link, useLocation } from 'react-router-dom';
import { CartDrawer } from '@/components/CartDrawer';
import logo from '@/assets/thermo3d-logo.png';

const Header = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-2xl border-b border-border/60">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={logo} alt="Thermo3D logo" className="h-[78px] w-auto object-contain" />
          <div className="flex flex-col leading-none">
            <span className="font-display font-bold text-xl tracking-tight text-foreground">
              THERMO<span className="text-accent font-extrabold">3D</span>
            </span>
            <span className="text-[9px] font-medium tracking-[0.2em] uppercase text-muted-foreground mt-0.5">
              Accessoires Thermomix
            </span>
          </div>
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
