import { Heart } from 'lucide-react';

const AccountWishlist = () => {
  return (
    <div className="text-center py-12">
      <Heart className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
      <h3 className="font-semibold text-lg mb-2">Liste de souhaits</h3>
      <p className="text-muted-foreground text-sm">Vos produits favoris apparaîtront ici. Ajoutez des produits à vos favoris depuis le catalogue.</p>
    </div>
  );
};

export default AccountWishlist;
