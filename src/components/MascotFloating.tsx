import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, ShoppingBag, HelpCircle } from 'lucide-react';
import mascotImg from '@/assets/mascot-thermo3d.webp';

const MascotFloating = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {/* Message panel */}
      {isOpen && (
        <div className="animate-fade-in bg-card border border-border/60 rounded-2xl shadow-2xl w-72 sm:w-80 overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 bg-secondary/40 border-b border-border/40">
            <div className="flex items-center gap-2.5">
              <img src={mascotImg} alt="Thermo3D" className="w-8 h-8 rounded-full" />
              <span className="text-sm font-semibold text-foreground">Thermo3D</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Fermer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-4 space-y-4">
            <p className="text-sm text-foreground leading-relaxed">
              Salut 👋 Je peux t'aider à trouver l'accessoire parfait pour ton Thermomix
            </p>

            <div className="flex flex-col gap-2">
              <Link
                to="/catalogue"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 px-4 py-2.5 bg-accent text-accent-foreground rounded-xl text-xs font-semibold hover:brightness-110 transition-all justify-center"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                Voir les produits
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 px-4 py-2.5 bg-secondary text-foreground rounded-xl text-xs font-semibold hover:bg-secondary/80 transition-all justify-center border border-border/50"
              >
                <HelpCircle className="w-3.5 h-3.5" />
                Besoin d'aide
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Floating bubble */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-card border-2 border-accent/40 shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 overflow-hidden"
        aria-label="Assistant Thermo3D"
      >
        <img
          src={mascotImg}
          alt="Chat Thermo3D"
          className="w-full h-full object-cover"
        />
        {/* Pulse ring */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full border-2 border-accent/50 animate-ping pointer-events-none" />
        )}
      </button>
    </div>
  );
};

export default MascotFloating;
