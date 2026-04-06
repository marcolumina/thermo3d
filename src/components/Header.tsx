import { Link, useLocation } from 'react-router-dom';
import { CartDrawer } from '@/components/CartDrawer';
import { Search, Menu, X, User } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useState } from 'react';

const NAV_LINKS = [
  { to: '/', label: 'Accueil' },
  { to: '/catalogue', label: 'Boutique' },
  { to: '/catalogue?filter=pack', label: 'Packs' },
  { to: '/a-propos', label: 'À propos' },
  { to: '/contact', label: 'Contact' },
];

const Header = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user } = useAuth();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-xl border-b border-border/60">
      {/* Main header */}
      <div className="container mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        <Link to="/" className="shrink-0">
          <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
            THERMO<span className="text-accent">3D</span>
          </span>
        </Link>

        {/* Search bar - desktop */}
        <div className="hidden md:flex relative flex-1 max-w-md mx-8">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="search"
            placeholder="Chercher des produits..."
            className="w-full pl-10 pr-4 py-2 rounded-full bg-secondary border border-border/60 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30"
          />
        </div>

        <div className="flex items-center gap-3">
          <Link to={user ? '/account' : '/auth'} className="p-2 hover:text-accent transition-colors" aria-label="Mon compte">
            <User className="w-5 h-5" />
          </Link>
          <CartDrawer />
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Category nav - desktop */}
      <nav className="hidden md:block bg-accent/[0.06] border-t border-border/40">
        <div className="container mx-auto px-6 flex items-center justify-center gap-8 py-2.5">
          {NAV_LINKS.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-[13px] font-medium transition-colors duration-200 ${
                isActive(link.to) ? 'text-accent font-semibold' : 'text-foreground/70 hover:text-accent'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="md:hidden bg-background border-t border-border/40 px-6 py-4 space-y-3">
          <div className="relative mb-3">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="search"
              placeholder="Chercher des produits..."
              className="w-full pl-10 pr-4 py-2 rounded-full bg-secondary border border-border/60 text-sm"
            />
          </div>
          {NAV_LINKS.map(link => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={`block text-sm font-medium py-1.5 ${
                isActive(link.to) ? 'text-accent' : 'text-foreground/70'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
