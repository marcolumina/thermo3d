import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import { useCartStore } from '@/stores/cartStore';
import type { ShopifyProduct } from '@/lib/shopify';
import { ShoppingCart, Loader2, ShieldCheck, Truck, RefreshCw, Headphones, Star } from 'lucide-react';

interface ProductCardProps {
  product: ShopifyProduct;
  featured?: boolean;
}

const ProductCard = ({ product, featured = false }: ProductCardProps) => {
  const { node } = product;
  const addItem = useCartStore(state => state.addItem);
  const isLoading = useCartStore(state => state.isLoading);
  const image = node.images.edges[0]?.node;
  const variant = node.variants.edges[0]?.node;
  const price = node.priceRange.minVariantPrice;
  const priceNum = parseFloat(price.amount);
  const fakeOriginalPrice = (priceNum / 0.8).toFixed(2);

  const miniReviews = [
    { name: 'Sophie M.', text: 'Super pratique, indispensable !' },
    { name: 'Laurent D.', text: 'Qualité au top, je recommande.' },
    { name: 'Marie C.', text: 'Ça change tout dans ma cuisine !' },
    { name: 'Caroline B.', text: 'Franchement indispensable.' },
    { name: 'Thomas R.', text: 'Parfait pour mon Thermomix.' },
  ];
  // Pick a consistent review based on product id hash
  const reviewIndex = node.id.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0) % miniReviews.length;
  const review = miniReviews[reviewIndex];

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!variant) return;
    await addItem({
      product,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions || [],
    });
    toast.success('Ajouté au panier ✓', { position: 'top-center' });
  };

  return (
    <Link to={`/product/${node.handle}`} className={`group block ${featured ? 'col-span-2 md:col-span-1 ring-2 ring-accent rounded-xl p-3 bg-accent/5 relative' : ''}`}>
      {featured && (
        <div className="mb-3">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="bg-accent text-accent-foreground text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
              🏆 Produit le plus populaire
            </span>
            <span className="text-[11px] text-muted-foreground">⭐ 4,8/5 — +1000 avis</span>
          </div>
          <p className="text-[11px] text-accent font-semibold mt-1.5">L'offre la plus choisie par nos clients</p>
        </div>
      )}
      <div className="relative bg-secondary rounded-xl overflow-hidden aspect-square mb-4">
        {/* Badges */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5">
          <span className="bg-accent text-accent-foreground text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
            Best seller
          </span>
          <span className="bg-foreground text-background text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
            Stock limité
          </span>
          <span className="bg-destructive text-destructive-foreground text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
            -20% aujourd'hui
          </span>
        </div>

        {image ? (
          <img
            src={image.url}
            alt={image.altText || `${node.title} — accessoire Thermomix`}
            className="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
            width="400"
            height="400"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
            📦 Image à venir
          </div>
        )}
        <button
          onClick={handleAddToCart}
          disabled={isLoading || !variant}
          className="absolute bottom-3 right-3 w-10 h-10 bg-foreground text-background rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 disabled:opacity-50"
          aria-label={`Ajouter ${node.title} au panier`}
        >
          {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <ShoppingCart className="w-4 h-4" />}
        </button>
      </div>
      <h3 className="font-semibold text-sm text-foreground group-hover:text-accent transition-colors line-clamp-2">{node.title}</h3>
      <p className="text-xs text-muted-foreground mt-1">Optimisez votre cuisine en quelques secondes</p>
      <div className="flex items-center gap-2 mt-1.5">
        <span className="font-bold text-base text-foreground">
          {priceNum.toFixed(2)} €
        </span>
        <span className="text-sm text-muted-foreground line-through">
          {fakeOriginalPrice} €
        </span>
      </div>
      <div className="flex items-center gap-1 mt-2">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-3 h-3 fill-accent text-accent" />
        ))}
        <span className="text-[10px] text-muted-foreground ml-1">4,8/5 · +1000 clients satisfaits</span>
      </div>
      <div className="flex items-start gap-2 mt-2 bg-secondary/50 rounded-lg p-2">
        <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-[9px] font-bold text-accent shrink-0 mt-0.5">
          {review.name[0]}
        </div>
        <div className="min-w-0">
          <p className="text-[10px] text-foreground italic line-clamp-1">"{review.text}"</p>
          <p className="text-[9px] text-muted-foreground mt-0.5">{review.name} · <span className="text-accent">✓ Achat vérifié</span></p>
        </div>
      </div>
      <p className="text-[10px] font-semibold text-accent mt-1.5">🎉 Déjà +1000 clients satisfaits</p>
      <span className="inline-block mt-1.5 text-[10px] font-bold text-destructive uppercase tracking-wide">🔥 Stock limité</span>
      <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-border">
        <div className="flex items-center gap-1.5 text-muted-foreground">
          <Truck className="w-3 h-3 text-accent shrink-0" />
          <span className="text-[9px]">Livraison rapide</span>
        </div>
        <div className="flex items-center gap-1.5 text-muted-foreground">
          <ShieldCheck className="w-3 h-3 text-accent shrink-0" />
          <span className="text-[9px]">Paiement sécurisé</span>
        </div>
        <div className="flex items-center gap-1.5 text-muted-foreground">
          <RefreshCw className="w-3 h-3 text-accent shrink-0" />
          <span className="text-[9px]">Satisfait ou remboursé 30j</span>
        </div>
        <div className="flex items-center gap-1.5 text-muted-foreground">
          <Headphones className="w-3 h-3 text-accent shrink-0" />
          <span className="text-[9px]">Support client français</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
