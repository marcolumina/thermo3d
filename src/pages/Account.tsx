import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AccountProfile from '@/components/account/AccountProfile';
import AccountOrders from '@/components/account/AccountOrders';
import AccountAddresses from '@/components/account/AccountAddresses';
import AccountWishlist from '@/components/account/AccountWishlist';
import { User, Package, MapPin, Heart, LogOut, Loader2 } from 'lucide-react';

const Account = () => {
  const { user, loading, signOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) navigate('/auth');
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="animate-spin w-8 h-8" />
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-10 max-w-3xl">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold">Mon Compte</h1>
            <p className="text-sm text-muted-foreground">{user.email}</p>
          </div>
          <Button variant="outline" size="sm" onClick={() => { signOut(); navigate('/'); }}>
            <LogOut className="w-4 h-4 mr-2" /> Déconnexion
          </Button>
        </div>

        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-6">
            <TabsTrigger value="profile" className="text-xs sm:text-sm"><User className="w-4 h-4 mr-1 hidden sm:inline" /> Profil</TabsTrigger>
            <TabsTrigger value="orders" className="text-xs sm:text-sm"><Package className="w-4 h-4 mr-1 hidden sm:inline" /> Commandes</TabsTrigger>
            <TabsTrigger value="addresses" className="text-xs sm:text-sm"><MapPin className="w-4 h-4 mr-1 hidden sm:inline" /> Adresses</TabsTrigger>
            <TabsTrigger value="wishlist" className="text-xs sm:text-sm"><Heart className="w-4 h-4 mr-1 hidden sm:inline" /> Favoris</TabsTrigger>
          </TabsList>

          <TabsContent value="profile"><AccountProfile userId={user.id} /></TabsContent>
          <TabsContent value="orders"><AccountOrders userId={user.id} /></TabsContent>
          <TabsContent value="addresses"><AccountAddresses userId={user.id} /></TabsContent>
          <TabsContent value="wishlist"><AccountWishlist /></TabsContent>
        </Tabs>
      </div>
      <Footer />
    </div>
  );
};

export default Account;
