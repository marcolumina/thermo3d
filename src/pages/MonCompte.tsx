import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { User, Package, Heart, MapPin, LogOut, Mail, Calendar } from 'lucide-react';
import { toast } from 'sonner';
import type { User as SupaUser } from '@supabase/supabase-js';

const TABS = [
  { id: 'overview', label: 'Aperçu', icon: User },
  { id: 'orders', label: 'Commandes', icon: Package },
  { id: 'wishlist', label: 'Favoris', icon: Heart },
  { id: 'addresses', label: 'Adresses', icon: MapPin },
] as const;

type TabId = (typeof TABS)[number]['id'];

const MonCompte = () => {
  const [user, setUser] = useState<SupaUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<TabId>('overview');
  const navigate = useNavigate();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_, session) => {
      if (!session) {
        navigate('/auth');
      } else {
        setUser(session.user);
        setLoading(false);
      }
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        navigate('/auth');
      } else {
        setUser(session.user);
        setLoading(false);
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast.success('Déconnexion réussie');
    navigate('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin w-8 h-8 border-2 border-accent border-t-transparent rounded-full" />
      </div>
    );
  }

  const fullName = user?.user_metadata?.full_name || 'Client';
  const email = user?.email || '';
  const createdAt = user?.created_at ? new Date(user.created_at).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' }) : '';

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Mon compte | Thermo3D</title>
      </Helmet>
      <Header />

      <main className="flex-1 py-10 md:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-4">
            <div>
              <h1 className="font-display font-bold text-2xl md:text-3xl text-foreground">
                Bonjour, {fullName} 👋
              </h1>
              <p className="text-muted-foreground text-sm mt-1">Bienvenue dans votre espace client</p>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-destructive transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Déconnexion
            </button>
          </div>

          <div className="grid md:grid-cols-[240px,1fr] gap-8">
            {/* Sidebar */}
            <nav className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
              {TABS.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                    activeTab === id
                      ? 'bg-accent text-accent-foreground'
                      : 'text-muted-foreground hover:bg-secondary'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </button>
              ))}
            </nav>

            {/* Content */}
            <div className="bg-card rounded-2xl border border-border/60 p-6 md:p-8 min-h-[400px]">
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  <h2 className="font-display font-semibold text-lg text-foreground">Informations personnelles</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 p-4 bg-secondary/50 rounded-xl">
                      <User className="w-5 h-5 text-accent" />
                      <div>
                        <p className="text-xs text-muted-foreground">Nom</p>
                        <p className="text-sm font-medium text-foreground">{fullName}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-secondary/50 rounded-xl">
                      <Mail className="w-5 h-5 text-accent" />
                      <div>
                        <p className="text-xs text-muted-foreground">Email</p>
                        <p className="text-sm font-medium text-foreground">{email}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-secondary/50 rounded-xl">
                      <Calendar className="w-5 h-5 text-accent" />
                      <div>
                        <p className="text-xs text-muted-foreground">Membre depuis</p>
                        <p className="text-sm font-medium text-foreground">{createdAt}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'orders' && (
                <div className="text-center py-16">
                  <Package className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
                  <h2 className="font-display font-semibold text-lg text-foreground mb-2">Aucune commande</h2>
                  <p className="text-sm text-muted-foreground mb-6">Vous n'avez pas encore passé de commande</p>
                  <a href="/catalogue" className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-semibold py-2.5 px-6 rounded-lg text-sm hover:opacity-90 transition-opacity">
                    Découvrir nos produits
                  </a>
                </div>
              )}

              {activeTab === 'wishlist' && (
                <div className="text-center py-16">
                  <Heart className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
                  <h2 className="font-display font-semibold text-lg text-foreground mb-2">Aucun favori</h2>
                  <p className="text-sm text-muted-foreground">Ajoutez des produits à vos favoris pour les retrouver ici</p>
                </div>
              )}

              {activeTab === 'addresses' && (
                <div className="text-center py-16">
                  <MapPin className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
                  <h2 className="font-display font-semibold text-lg text-foreground mb-2">Aucune adresse</h2>
                  <p className="text-sm text-muted-foreground">Vos adresses de livraison apparaîtront ici</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MonCompte;
