import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import { useCartStore } from '@/stores/cartStore';
import type { ShopifyProduct } from '@/lib/shopify';
import { ShoppingCart, Loader2 } from 'lucide-react';

interface ProductCardProps {
  product: ShopifyProduct;
}

const ProductCard = ({ product }: ProductCardProps) => {
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
    <Link to={`/product/${node.handle}`} className="group block">
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
    </Link>
  );
};

export default ProductCard;
