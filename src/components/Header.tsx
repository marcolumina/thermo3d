import { Link, useLocation } from 'react-router-dom';
import { CartDrawer } from '@/components/CartDrawer';
import { Search, Menu, X, User } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useShopifyCollections } from '@/hooks/useShopifyCollections';
import { useState } from 'react';

const STATIC_LINKS = [
  { to: '/', label: 'Accueil' },
  { to: '/catalogue', label: 'Boutique' },
];
const TAIL_LINKS = [
  { to: '/blog', label: 'Blog' },
  { to: '/a-propos', label: 'À propos' },
  { to: '/contact', label: 'Contact' },
];

const Header = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user } = useAuth();
  const { data: collections } = useShopifyCollections();

  const collectionLinks = (collections || []).map(c => ({
    to: `/collection/${c.handle}`,
    label: c.title,
  }));
  const NAV_LINKS = [...STATIC_LINKS, ...collectionLinks, ...TAIL_LINKS];


  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-xl border-b border-border/60">
      <div className="container mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        <Link to="/" className="shrink-0">
          <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
            THERMO<span className="text-accent">3D</span>
          </span>
        </Link>

        <div className="hidden md:flex relative flex-1 max-w-md mx-8">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="search"
            placeholder="Chercher des produits..."
            className="w-full pl-10 pr-4 py-2 rounded-full bg-secondary border border-border/60 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30"
          />
        </div>

        <div className="flex items-center gap-1 sm:gap-3">
          <Link
            to={user ? '/account' : '/auth'}
            className="p-2.5 hover:text-accent transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Mon compte"
          >
            <User className="w-5 h-5" />
          </Link>
          <CartDrawer />
          <button
            className="md:hidden p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

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

      {mobileOpen && (
        <nav className="md:hidden bg-background border-t border-border/40 px-5 py-4 space-y-1 max-h-[calc(100vh-64px)] overflow-y-auto">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="search"
              placeholder="Chercher des produits..."
              className="w-full pl-10 pr-4 py-3 rounded-full bg-secondary border border-border/60 text-base"
            />
          </div>
          {NAV_LINKS.map(link => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={`flex items-center text-base font-medium py-3 px-2 rounded-lg min-h-[44px] ${
                isActive(link.to) ? 'text-accent bg-accent/10' : 'text-foreground/80 hover:bg-secondary'
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
