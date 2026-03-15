import { Link } from 'react-router-dom';
import { CartDrawer } from '@/components/CartDrawer';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">T</span>
          </div>
          <span className="font-display font-bold text-lg">Thermo3D.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-primary font-medium text-sm">Accueil</Link>
          <Link to="/catalogue" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Catalogue</Link>
          <Link to="/modelisation" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Modélisation</Link>
        </nav>

        <CartDrawer />
      </div>
    </header>
  );
};

export default Header;
