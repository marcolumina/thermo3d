import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Cookie, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const STORAGE_KEY = 'thermo3d_cookie_consent';

type Consent = 'accepted' | 'rejected' | 'custom';

interface ConsentValue {
  status: Consent;
  analytics: boolean;
  marketing: boolean;
  date: string;
}

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) {
        // Délai léger pour ne pas gêner le LCP
        const t = setTimeout(() => setVisible(true), 800);
        return () => clearTimeout(t);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  const save = (value: ConsentValue) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
    } catch {}
    setVisible(false);
    setShowSettings(false);
  };

  const acceptAll = () =>
    save({ status: 'accepted', analytics: true, marketing: true, date: new Date().toISOString() });

  const rejectAll = () =>
    save({ status: 'rejected', analytics: false, marketing: false, date: new Date().toISOString() });

  const saveCustom = () =>
    save({ status: 'custom', analytics, marketing, date: new Date().toISOString() });

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Consentement aux cookies"
      className="fixed bottom-0 left-0 right-0 z-[60] p-3 sm:p-4 animate-in slide-in-from-bottom duration-300"
    >
      <div className="max-w-4xl mx-auto bg-card border border-border rounded-2xl shadow-2xl overflow-hidden">
        <div className="p-5 sm:p-6">
          <div className="flex items-start gap-4">
            <div className="hidden sm:flex w-10 h-10 rounded-full bg-accent/10 items-center justify-center flex-shrink-0">
              <Cookie className="w-5 h-5 text-accent" />
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="font-display font-semibold text-foreground text-base mb-1">
                🍪 Vos préférences cookies
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Nous utilisons des cookies pour assurer le fonctionnement du site (panier, connexion) et, avec votre accord, mesurer l'audience et personnaliser nos communications. Vous pouvez accepter, refuser ou personnaliser à tout moment.{' '}
                <Link to="/politique-confidentialite" className="text-accent underline font-medium">
                  En savoir plus
                </Link>
              </p>

              {showSettings && (
                <div className="mt-4 space-y-3 border-t border-border pt-4">
                  <label className="flex items-start gap-3 opacity-60 cursor-not-allowed">
                    <input type="checkbox" checked disabled className="mt-1 w-4 h-4 accent-accent" />
                    <div className="flex-1 text-xs">
                      <p className="font-semibold text-foreground">Cookies essentiels</p>
                      <p className="text-muted-foreground">Indispensables (panier, session, sécurité). Toujours actifs.</p>
                    </div>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={analytics}
                      onChange={e => setAnalytics(e.target.checked)}
                      className="mt-1 w-4 h-4 accent-accent"
                    />
                    <div className="flex-1 text-xs">
                      <p className="font-semibold text-foreground">Mesure d'audience</p>
                      <p className="text-muted-foreground">Statistiques anonymes pour améliorer le site.</p>
                    </div>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={marketing}
                      onChange={e => setMarketing(e.target.checked)}
                      className="mt-1 w-4 h-4 accent-accent"
                    />
                    <div className="flex-1 text-xs">
                      <p className="font-semibold text-foreground">Marketing & personnalisation</p>
                      <p className="text-muted-foreground">Pour vous proposer des offres pertinentes.</p>
                    </div>
                  </label>
                </div>
              )}

              <div className="flex flex-wrap gap-2 mt-4">
                <Button onClick={acceptAll} size="sm" className="flex-1 sm:flex-initial">
                  Tout accepter
                </Button>
                <Button onClick={rejectAll} variant="outline" size="sm" className="flex-1 sm:flex-initial">
                  Tout refuser
                </Button>
                {showSettings ? (
                  <Button onClick={saveCustom} variant="secondary" size="sm" className="flex-1 sm:flex-initial">
                    Enregistrer mes choix
                  </Button>
                ) : (
                  <Button
                    onClick={() => setShowSettings(true)}
                    variant="ghost"
                    size="sm"
                    className="flex-1 sm:flex-initial"
                  >
                    Personnaliser
                  </Button>
                )}
              </div>
            </div>
            <button
              onClick={rejectAll}
              aria-label="Refuser et fermer"
              className="text-muted-foreground hover:text-foreground transition-colors flex-shrink-0"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
