import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import { useCartStore } from '@/stores/cartStore';
import type { ShopifyProduct } from '@/lib/shopify';
import { ShoppingCart, Loader2, ShieldCheck, Truck, RefreshCw, Star } from 'lucide-react';

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
    <Link
      to={`/product/${node.handle}`}
      className={`group block rounded-2xl transition-all duration-300 ${
        featured
          ? 'col-span-2 md:col-span-1 ring-1 ring-accent/20 p-4 bg-accent/[0.03] shadow-premium'
          : 'hover:shadow-premium-lg'
      }`}
    >
      {featured && (
        <div className="mb-3">
          <span className="bg-accent text-accent-foreground text-[10px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
            Le plus populaire
          </span>
        </div>
      )}

      <div className="relative bg-secondary/60 rounded-xl overflow-hidden aspect-square mb-4">
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5">
          <span className="bg-foreground text-background text-[10px] font-medium px-2.5 py-1 rounded-full">
            -20%
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
            Image à venir
          </div>
        )}

        <button
          onClick={handleAddToCart}
          disabled={isLoading || !variant}
          className="absolute bottom-3 right-3 w-10 h-10 bg-foreground text-background rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 disabled:opacity-50 shadow-premium"
          aria-label={`Ajouter ${node.title} au panier`}
        >
          {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <ShoppingCart className="w-4 h-4" />}
        </button>
      </div>

      <div className="px-1">
        <h3 className="font-display font-semibold text-sm text-foreground group-hover:text-accent transition-colors duration-200 line-clamp-2">
          {node.title}
        </h3>

        <div className="flex items-center gap-2 mt-2">
          <span className="font-semibold text-base text-foreground">
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
          <span className="text-[10px] text-muted-foreground ml-1">4,8/5</span>
        </div>

        <div className="flex items-center gap-4 mt-3 pt-3 border-t border-border/60">
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
            <span className="text-[9px]">Satisfait ou remboursé</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
