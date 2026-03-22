import { Truck, Shield } from 'lucide-react';

const TopBanner = () => {
  return (
    <div className="bg-primary text-primary-foreground text-center py-2.5 text-xs font-semibold tracking-widest uppercase flex items-center justify-center gap-4">
      <span className="flex items-center gap-1.5"><Truck className="w-3.5 h-3.5" /> Livraison offerte dès 50€</span>
      <span className="opacity-40">·</span>
      <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5" /> Fabriqué en France</span>
    </div>
  );
};

export default TopBanner;
