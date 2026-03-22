import { Link, useLocation } from 'react-router-dom';
import { CartDrawer } from '@/components/CartDrawer';
import { Logo, LogoIcon } from '@/components/Logo';

const Header = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-2xl border-b border-border/60">
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        <Link to="/" className="group shrink-0">
          {/* Full logo on desktop, icon only on mobile */}
          <span className="hidden sm:block"><Logo size={48} /></span>
          <span className="block sm:hidden"><LogoIcon size={36} /></span>
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
